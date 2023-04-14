const express = require('express');
const router = express.Router();

const {   getAllSafeUnsafeReports, getSafeUnsafeReportById, createNewSafeUnsafeReport, updateSafeUnsafeReport ,deleteSafeUnsafeReport } = require('../../controllers/safeUnsafeController');

router.get('/' , getAllSafeUnsafeReports);

router.get('/:id' , getSafeUnsafeReportById);

router.post('/' , createNewSafeUnsafeReport);

router.put('/:id' , updateSafeUnsafeReport);

router.delete('/:id' , deleteSafeUnsafeReport);

module.exports = router;