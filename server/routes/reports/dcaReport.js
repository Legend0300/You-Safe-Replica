const express = require('express');
const router = express.Router();

const {       getAllDCAReports,
    getDCAlistById,
    createNewDCAlist,
    updateDCAlistById,
    deleteDCAlistById,
    getDCAquestions } = require('../../controllers/dcaReportController');

router.get('/' , getAllDCAReports);

router.get('/:id' , getDCAReportById);

router.post('/' , createNewDCAReport);

router.put('/:id' , updateDCAReport);

router.delete('/:id' , deleteDCAReport);



module.exports = router;