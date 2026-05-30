// Populate demo data so the app shows real content.
// Idempotent: wipes the seeded collections first, then re-inserts.
// Run from server/:  node seed-data.js

const { db, ensureTable } = require('./lib/db');

const Site = require('./models/siteModel');
const Department = require('./models/departmentModel');
const Area = require('./models/areaModel');
const AreaManager = require('./models/areaManagerModel');
const Employee = require('./models/employeeModel');
const Visitor = require('./models/visitorModel');
const HazardReport = require('./models/hazardreportModel');
const SafeUnsafeReport = require('./models/safeUnsafeModel');
const IncidentReport = require('./models/incidentReportSchema');
const PI = require('./models/piModel');
const DCA = require('./models/dcaModel');
const SAM = require('./models/samSchema');

const COLLECTIONS = [
  'Site', 'Department', 'Area', 'AreaManager', 'Employee', 'Visitor',
  'HazardReport', 'SafeUnsafeReport', 'IncidentReport', 'PI', 'DCA', 'SafetyActionMeeting',
];

function wipe() {
  for (const c of COLLECTIONS) {
    ensureTable(c);
    db.exec(`DELETE FROM "${c}"`);
  }
  console.log('[seed-data] cleared', COLLECTIONS.length, 'collections');
}

(async () => {
  wipe();

  // ---- org structure (drives the form dropdowns) ----
  const lahore = await Site.create({
    siteName: 'Lahore Plant', location: 'Sundar Industrial Estate', country: 'Pakistan', city: 'Lahore',
    managerInformation: { fullName: 'Imran Khan', emailAddress: 'imran@usafe.com', contact: '+92-300-1112233', status: 'Enabled' },
  });
  const karachi = await Site.create({
    siteName: 'Karachi Terminal', location: 'Port Qasim', country: 'Pakistan', city: 'Karachi',
    managerInformation: { fullName: 'Sara Ali', emailAddress: 'sara@usafe.com', contact: '+92-321-4445566', status: 'Enabled' },
  });

  const deptProd = await Department.create({ site: lahore._id, department: 'Production', status: 'Enabled' });
  const deptMaint = await Department.create({ site: lahore._id, department: 'Maintenance', status: 'Enabled' });
  const deptLogi = await Department.create({ site: karachi._id, department: 'Logistics', status: 'Enabled' });

  const areaWeld = await Area.create({ name: 'Welding Bay', site: lahore._id, department: deptProd._id, status: 'Enabled' });
  const areaAssembly = await Area.create({ name: 'Assembly Line', site: lahore._id, department: deptProd._id, status: 'Enabled' });
  const areaYard = await Area.create({ name: 'Loading Yard', site: karachi._id, department: deptLogi._id, status: 'Enabled' });

  await AreaManager.create({ fullName: 'Bilal Ahmed', emailAddress: 'bilal@usafe.com', site: lahore._id, contact: '+92-300-9990000', department: deptProd._id, area: areaWeld._id, status: 'Enabled' });
  await Employee.create({ fullName: 'Ayesha Noor', emailAddress: 'ayesha@usafe.com', site: lahore._id, contact: '+92-301-1234567', department: deptProd._id, area: areaAssembly._id, status: 'Enabled' });
  await Employee.create({ fullName: 'Hamza Tariq', emailAddress: 'hamza@usafe.com', site: karachi._id, contact: '+92-333-7654321', department: deptLogi._id, area: areaYard._id, status: 'Enabled' });
  await Visitor.create({ fullName: 'Daniyal Sheikh', emailAddress: 'daniyal@visitor.com', site: lahore._id, contact: '+92-345-0001122', department: deptMaint._id, area: areaWeld._id, status: 'Enabled' });

  // ---- reports (drive the /reports cards) ----
  await HazardReport.create({
    department: 'Production', area: 'Welding Bay', status: 'In Progress', reportedStatus: 'In Progress',
    reportDate: '2026-05-20', endDate: '2026-06-15', responsibility: 'Bilal Ahmed', type: 'Hazard Report',
    description: 'Exposed wiring near welding station — risk of electric shock.',
    imagesURL: ['https://cdn-icons-png.flaticon.com/512/6002/6002428.png'],
  });
  await HazardReport.create({
    department: 'Maintenance', area: 'Welding Bay', status: 'Pending', reportedStatus: 'Pending',
    reportDate: '2026-05-22', endDate: '2026-06-20', responsibility: 'Ayesha Noor', type: 'Hazard Report',
    description: 'Oil spill on walkway not cleaned, slip hazard.',
    imagesURL: ['https://cdn-icons-png.flaticon.com/512/6002/6002428.png'],
  });

  await SafeUnsafeReport.create({
    department: 'Production', area: 'Assembly Line', actType: 'Unsafe Act', status: 'Completed', reportedStatus: 'reported',
    responsibility: 'Hamza Tariq', reportDate: '2026-05-18', endDate: '2026-06-10', type: 'Safe/Unsafe Act',
    description: 'Worker bypassing machine guard to clear a jam.',
    imagesURL: ['https://cdn-icons-png.flaticon.com/512/6002/6002428.png'],
  });
  await SafeUnsafeReport.create({
    department: 'Logistics', area: 'Loading Yard', actType: 'Safe Act', status: 'Completed', reportedStatus: 'reported',
    responsibility: 'Daniyal Sheikh', reportDate: '2026-05-25', endDate: '2026-06-05', type: 'Safe/Unsafe Act',
    description: 'Operator performed full pre-lift checklist before crane use.',
    imagesURL: ['https://cdn-icons-png.flaticon.com/512/6002/6002428.png'],
  });

  await IncidentReport.create({
    department: 'Logistics', area: 'Loading Yard', eventType: 'Near Miss', eventSubType: 'Falling Object',
    incidentType: 'Material Handling', status: 'In Progress', reportedStatus: 'In Progress',
    endDate: '2026-06-12', responsibility: 'Hamza Tariq', type: 'Incident Report',
    imagesURL: ['https://cdn-icons-png.flaticon.com/512/6002/6002428.png'],
  });

  await PI.create({
    formName: 'Monthly Forklift Inspection', type: 'PI', status: 'Enabled', endDate: '2026-06-30',
    responsibility: 'Bilal Ahmed', actionRemarks: 'All forklifts due for brake check.',
    questions: [
      { Heading: 'Brakes', Question: 'Are brakes functioning correctly?' },
      { Heading: 'Horn', Question: 'Is the reverse horn audible?' },
    ],
  });

  await DCA.create({
    formName: 'Deep Compliance Audit - Welding', type: 'DCA', status: 'In Progress', reportedStatus: 'In Progress',
    endDate: '2026-07-01', responsibility: 'Ayesha Noor', actionRemarks: 'Verify PPE compliance across shifts.',
    questions: [
      { Heading: 'PPE', Question: 'Are welders wearing approved face shields?' },
      { Heading: 'Ventilation', Question: 'Is fume extraction operational?' },
    ],
  });

  await SAM.create({
    department: 'Production', area: 'Assembly Line', endDate: '2026-06-08', time: '10:30',
    leader: 'Imran Khan', topic: 'Q2 Safety Stand-down', type: 'Safety Action Meeting',
    outlineOfFacts: 'Reviewed recent near-misses and reinforced lockout/tagout procedure.',
    participants: [
      { id: '64a000000000000000000001', name: 'Ayesha Noor' },
      { id: '64a000000000000000000002', name: 'Bilal Ahmed' },
    ],
    questions: 'Any blockers to LOTO compliance?',
  });

  // ---- summary ----
  const counts = {};
  for (const c of COLLECTIONS) counts[c] = db.prepare(`SELECT COUNT(*) n FROM "${c}"`).get().n;
  console.log('[seed-data] inserted:', JSON.stringify(counts, null, 2));
  const reportTotal = ['HazardReport', 'SafeUnsafeReport', 'IncidentReport', 'PI', 'DCA', 'SafetyActionMeeting']
    .reduce((s, c) => s + counts[c], 0);
  console.log(`[seed-data] /reports will show ~${reportTotal} report cards (DCA/PI expand per question).`);
})().catch((e) => { console.error('[seed-data] FAILED', e); process.exit(1); });
