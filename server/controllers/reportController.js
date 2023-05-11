const HazardReport = require('../models/HazardreportModel');
const SafeUnsafeReport = require('../models/safeUnsafeModel');
const SafetyActionMeeting = require('../models/samSchema');
const PI = require('../models/piModel');
const DCA = require('../models/dcaModel');
const IncidentReport = require('../models/incidentReportSchema');


// GET all sites

const getAllReports = async (req, res) => {
    try {
        const reports = [];
    
        const hazardReports = await HazardReport.find();
        reports.push(...hazardReports);
    
        const safeUnsafeReports = await SafeUnsafeReport.find();
        reports.push(...safeUnsafeReports);
    
        const safetyActionMeetings = await SafetyActionMeeting.find();
        reports.push(...safetyActionMeetings);
    
        const piReports = await PI.find();
        reports.push(...piReports);
    
        const dcaChecklists = await DCA.find();
        reports.push(...dcaChecklists);
    
        const incidentReports = await IncidentReport.find();
        reports.push(...incidentReports);
    
        res.status(200).json(reports);
      } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
      }
}




module.exports = {
    getAllReports
}
