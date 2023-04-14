const express = require('express');
const router = express.Router();

const {   getAllPIReports, getPIReportById, createNewPIReport, updatePIReportById, deletePIReportById } = require('../../controllers/piReportController');

router.get('/' , getAllPIReports);

router.get('/:id' , getPIReportById);

router.post('/' , createNewPIReport);

router.put('/:id' , updatePIReportById);

router.delete('/:id' , deletePIReportById);


module.exports = router;