const express = require('express');
const router = express.Router();

const {   getAllReportingDetails, getReportingDetailsById, createNewReportingDetail, updateReportingDetailById ,deleteReportingDetailById } = require('../../controllers/reportingDetailsController');

router.get('/' , getAllReportingDetails);
router.get('/:id' , getReportingDetailsById);
router.post('/' , createNewReportingDetail);
router.put('/:id' , updateReportingDetailById);
router.delete('/:id' , deleteReportingDetailById);

module.exports = router;