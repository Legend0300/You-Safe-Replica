const express = require('express');
const router = express.Router();

const {   getAllIncidentReports, getIncidentReportById, createNewIncidentReport, updateIncidentReport ,deleteIncidentReport } = require('../../controllers/incidentReportController');

router.get('/' , getAllIncidentReports);

router.get('/:id' , getIncidentReportById);

router.post('/' , createNewIncidentReport);

router.put('/:id' , updateIncidentReport);

router.delete('/:id' , deleteIncidentReport);

module.exports = router;