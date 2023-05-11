const express = require('express');
const router = express.Router();    
const { getAllReports } = require('../../controllers/reportController');

// GET all reports
router.get('/', getAllReports);


module.exports = router;    