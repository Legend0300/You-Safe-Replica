const express = require('express');
const router = express.Router();

const {   getAllTaskReports, getTaskReportById, createNewTaskReport, updateTaskReport ,deleteTaskReport } = require('../../controllers/taskReportController');

router.get('/' , getAllTaskReports);

router.get('/:id' , getTaskReportById);

router.post('/' , createNewTaskReport);

router.put('/:id' , updateTaskReport);

router.delete('/:id' , deleteTaskReport);

module.exports = router;