const express = require('express');
const router = express.Router();

const {   getAllHazardReports, getHazardReportById, createNewHazardReport, updateHazardReport ,deleteHazardReport } = require('../../controllers/hazardReportController');

router.get('/' , getAllHazardReports);

router.get('/:id' , getHazardReportById);

router.post('/' , createNewHazardReport);

router.put('/:id' , updateHazardReport);

router.delete('/:id' , deleteHazardReport);

module.exports = router;