const HazardReport = require('../models/hazardreportModel');
const SafeUnsafeReport = require('../models/safeUnsafeModel');
const SafetyActionMeeting = require('../models/samSchema');
const PI = require('../models/piModel');
const DCA = require('../models/dcaModel');
const IncidentReport = require('../models/incidentReportSchema');


// GET all sites

const getAllReports = async (req, res) => {
    try {
        const reports = [];

        const dcaLists = await DCA.find();
        const questions = dcaLists.flatMap((dcaList) =>
          dcaList.questions.map((question) => ({
            questionData: question,
            formName: dcaList.formName,
            status: dcaList.status,
            endDate: dcaList.endDate,
            responsibility: dcaList.responsibility,
            actionRemarks: dcaList.actionRemarks,
            type: dcaList.type,
          }))
        );
          
    
        const hazardReports = await HazardReport.find();
        reports.push(...hazardReports);
    
        const safeUnsafeReports = await SafeUnsafeReport.find();
        reports.push(...safeUnsafeReports);
    
        const safetyActionMeetings = await SafetyActionMeeting.find();
        reports.push(...safetyActionMeetings);
    
        const piReports = await PI.find();
        reports.push(...piReports);
    
        const dcaChecklists = await DCA.find();
        reports.push(...questions);
    
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
