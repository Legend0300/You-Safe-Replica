const express = require('express');
const router = express.Router();

const {       getAllDCAReports,
    getDCAReportById,
    createNewDCAReport,
    updateDCAReport,
    deleteDCAReport,
     } = require('../../controllers/dcaReportController');

router.get('/' , getAllDCAReports);

router.get('/:id' , getDCAReportById);

router.post('/' , createNewDCAReport);

router.put('/:id' , updateDCAReport);

router.delete('/:id' , deleteDCAReport);



module.exports = router;