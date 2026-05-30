// SQLite handle backing the Mongoose-compatible shim.
// Uses Node's built-in node:sqlite (Node >= 22.5) — no native deps to build.

const path = require('path');
const fs = require('fs');

// Silence the one-off "SQLite is an experimental feature" warning so server logs stay clean.
const origEmit = process.emit;
process.emit = function (name, data) {
  if (name === 'warning' && data && data.name === 'ExperimentalWarning' && /SQLite/i.test(data.message || '')) {
    return false;
  }
  return origEmit.apply(process, arguments);
};

const { DatabaseSync } = require('node:sqlite');

const DATA_DIR = path.join(__dirname, '..', 'data');
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
const DB_PATH = path.join(DATA_DIR, 'usafe.db');

const db = new DatabaseSync(DB_PATH);

// Each Mongoose "collection" is a table: _id (text PK) + data (JSON document).
function ensureTable(coll) {
  db.exec(`CREATE TABLE IF NOT EXISTS "${coll}" (_id TEXT PRIMARY KEY, data TEXT NOT NULL)`);
}

module.exports = { db, ensureTable, DB_PATH };
