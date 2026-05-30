// Drop-in replacement for the subset of the Mongoose API this app uses,
// backed by SQLite (see ./db.js). Documents are stored as JSON blobs.
//
// Supported surface (everything the controllers actually call):
//   Schema, Schema.Types.ObjectId, model()
//   Model.find([query]) / findOne(query) / findById(id)  -> thenable Query, supports .select()
//   Model.create(obj)
//   new Model(obj) + instance.save()
//   Model.findByIdAndUpdate(id, update, { new })
//   Model.findByIdAndDelete(id)
// Query operators: $gt $gte $lt $lte $ne $in (plus plain equality).
//
// Not implemented (unused here): populate, aggregate, validation, hooks, virtuals.

const crypto = require('crypto');
const { db, ensureTable } = require('./db');

const oid = () => crypto.randomBytes(12).toString('hex'); // ObjectId-like 24-char hex

// ---- Schema -------------------------------------------------------------
class Schema {
  constructor(def = {}, opts = {}) {
    this.def = def;
    this.opts = opts;
  }
}
Schema.Types = {
  ObjectId: 'ObjectId',
  String, Number, Date, Boolean, Buffer,
  Mixed: 'Mixed',
  Array,
};

// Pull top-level field defaults out of a schema definition.
function extractDefaults(def) {
  const out = {};
  for (const [k, v] of Object.entries(def || {})) {
    if (v && typeof v === 'object' && !Array.isArray(v) && 'default' in v) {
      out[k] = v.default;
    }
  }
  return out;
}

// ---- query matching -----------------------------------------------------
function matchOne(val, cond) {
  if (cond && typeof cond === 'object' && !Array.isArray(cond)) {
    const ops = Object.keys(cond);
    if (ops.some((o) => o.startsWith('$'))) {
      for (const op of ops) {
        const ov = cond[op];
        switch (op) {
          case '$gt':  if (!(val > ov)) return false; break;
          case '$gte': if (!(val >= ov)) return false; break;
          case '$lt':  if (!(val < ov)) return false; break;
          case '$lte': if (!(val <= ov)) return false; break;
          case '$ne':  if (val === ov) return false; break;
          case '$in':  if (!Array.isArray(ov) || !ov.includes(val)) return false; break;
          default: return false;
        }
      }
      return true;
    }
    return JSON.stringify(val) === JSON.stringify(cond);
  }
  return val === cond;
}

function matchQuery(doc, query) {
  for (const [k, cond] of Object.entries(query || {})) {
    if (!matchOne(doc[k], cond)) return false;
  }
  return true;
}

// ---- projection (.select) ----------------------------------------------
function project(doc, proj) {
  if (!doc || !proj) return doc;
  const fields = String(proj).split(/\s+/).filter(Boolean);
  const excludes = fields.filter((f) => f.startsWith('-')).map((f) => f.slice(1));
  const includes = fields.filter((f) => !f.startsWith('-'));
  if (excludes.length) {
    for (const f of excludes) delete doc[f];
  } else if (includes.length) {
    for (const k of Object.keys(doc)) {
      if (k !== '_id' && !includes.includes(k)) delete doc[k];
    }
  }
  return doc;
}

// ---- thenable Query (so `await Model.find().select(...)` works) ---------
class Query {
  constructor(executor) {
    this.executor = executor;
    this._proj = null;
  }
  select(proj) { this._proj = proj; return this; }
  then(resolve, reject) {
    return Promise.resolve()
      .then(() => this.executor(this._proj))
      .then(resolve, reject);
  }
  catch(fn) { return this.then(undefined, fn); }
}

// ---- model factory ------------------------------------------------------
const registry = {};

function model(name, schema) {
  if (registry[name]) return registry[name];

  const coll = name;
  ensureTable(coll);
  const defaults = extractDefaults(schema && schema.def);

  // Serialize own enumerable data props (everything except _id, which is its own column).
  const plainData = (inst) => {
    const o = {};
    for (const k of Object.keys(inst)) {
      if (k === '_id') continue;
      o[k] = inst[k];
    }
    return o;
  };

  class Doc {
    constructor(data = {}) { Object.assign(this, data); }

    async save() {
      if (!this._id) {
        for (const [k, v] of Object.entries(defaults)) {
          if (this[k] === undefined) this[k] = typeof v === 'function' ? v() : v;
        }
        this._id = oid();
      }
      const json = JSON.stringify(plainData(this));
      const exists = db.prepare(`SELECT _id FROM "${coll}" WHERE _id = ?`).get(this._id);
      if (exists) {
        db.prepare(`UPDATE "${coll}" SET data = ? WHERE _id = ?`).run(json, this._id);
      } else {
        db.prepare(`INSERT INTO "${coll}" (_id, data) VALUES (?, ?)`).run(this._id, json);
      }
      return this;
    }
  }

  const hydrate = (row) => {
    const doc = new Doc(JSON.parse(row.data));
    doc._id = row._id;
    return doc;
  };
  const allRows = () => db.prepare(`SELECT _id, data FROM "${coll}"`).all();

  Doc.find = (query) =>
    new Query((proj) => {
      let docs = allRows().map(hydrate);
      if (query && Object.keys(query).length) docs = docs.filter((d) => matchQuery(d, query));
      return docs.map((d) => project(d, proj));
    });

  Doc.findOne = (query) =>
    new Query((proj) => {
      for (const r of allRows()) {
        const d = hydrate(r);
        if (matchQuery(d, query || {})) return project(d, proj);
      }
      return null;
    });

  Doc.findById = (id) =>
    new Query((proj) => {
      const r = db.prepare(`SELECT _id, data FROM "${coll}" WHERE _id = ?`).get(String(id));
      return r ? project(hydrate(r), proj) : null;
    });

  Doc.create = async (obj) => {
    const doc = new Doc(obj);
    await doc.save();
    return doc;
  };

  Doc.findByIdAndUpdate = async (id, update, opts = {}) => {
    const r = db.prepare(`SELECT _id, data FROM "${coll}" WHERE _id = ?`).get(String(id));
    if (!r) return null;
    const before = hydrate(r);
    const after = hydrate(r);
    for (const [k, v] of Object.entries(update || {})) {
      if (k === '_id') continue;
      after[k] = v;
    }
    await after.save();
    return opts.new ? after : before;
  };

  Doc.findByIdAndDelete = async (id) => {
    const r = db.prepare(`SELECT _id, data FROM "${coll}" WHERE _id = ?`).get(String(id));
    if (!r) return null;
    db.prepare(`DELETE FROM "${coll}" WHERE _id = ?`).run(String(id));
    return hydrate(r);
  };

  // Aliases occasionally used interchangeably with the *ById variants.
  Doc.findOneAndUpdate = async (query, update, opts = {}) => {
    for (const r of allRows()) {
      const d = hydrate(r);
      if (matchQuery(d, query || {})) return Doc.findByIdAndUpdate(d._id, update, opts);
    }
    return null;
  };
  Doc.findOneAndDelete = async (query) => {
    for (const r of allRows()) {
      const d = hydrate(r);
      if (matchQuery(d, query || {})) return Doc.findByIdAndDelete(d._id);
    }
    return null;
  };

  registry[name] = Doc;
  return Doc;
}

// ---- top-level mongoose object -----------------------------------------
const mongoose = {
  Schema,
  model,
  models: registry,
  Types: { ObjectId: (v) => v },
  connect: async () => mongoose,
  disconnect: async () => {},
  connection: { on() {}, once() {}, readyState: 1 },
};

module.exports = mongoose;
module.exports.default = mongoose; // dbconnection.js does `require("mongoose").default`
