const Site = require('../models/siteModel');
const TaskReport = require('../models/taskReportSchema');


// GET all sites
const getAllTaskReports = async (req, res) => {
    try {
        const taskReports = await TaskReport.find();
        console.log(taskReports.site);
        const site = await Site.findById(taskReports.site);
        res.send("task" + taskReports + "Site" + site);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// GET one site by ID
const getTaskReportById = async (req, res) => {
    try {
        const taskReport = await TaskReport.findById(req.params.id);
        const site = await Site.findById(taskReport.site)
        //const task = await task.findById(taskReport.task)
        // res.send( "Pi" + piReport  +  "Site: " + site.siteName);
        if (taskReport == null) {
            return res.status(404).json({ message: 'Cannot find site' });
        }

    res.json({ taskReport, "site": site.siteName/*, "task": task.formName*/ });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// CREATE a new site
const createNewTaskReport = async (req, res) => {
    const sites = await Site.findOne(req.body.siteName);
    //const taskReports = await taskReport.findOne(req.body.taskName);


    const taskReport = new TaskReport({
        site: sites._id,
        type: req.body.type,
        assignedBy: req.body.assignedBy,
        assignedTo: req.body.assignedTo,
        taskStatus: req.body.taskStatus,
        assignedDate: req.body.assignedDate,
        startDate: req.body.startDate,
        endDate: req.body.endDate,

    });


    try {
        const newTaskReport = await taskReport.save();
        res.status(201).json(newTaskReport);
    }

    catch (err) {
        res.status(400).json({ message: err.message });
    }
}


// UPDATE a site
const updateTaskReport = async (req, res) => {
    try {
        const taskReport = await TaskReport.findById(req.params.id);
        if (taskReport == null) {
            return res.status(404).json({ message: 'Cannot find site' });
        }
        if (req.body.site != null) {
            taskReport.site = req.body.site;
        }
        if (req.body.type != null) {
            taskReport.type = req.body.type;
        }
        if (req.body.assignedBy != null) {
            taskReport.assignedBy = req.body.assignedBy;
        }
        if (req.body.assignedTo != null) {
            taskReport.assignedTo = req.body.assignedTo;
        }
        if (req.body.taskStatus != null) {
            taskReport.taskStatus = req.body.taskStatus;
        }
        if (req.body.assignedDate != null) {
            taskReport.assignedDate = req.body.assignedDate;
        }
        if (req.body.startDate != null) {
            taskReport.startDate = req.body.startDate;
        }
        if (req.body.endDate != null) {
            taskReport.endDate = req.body.endDate;
        }
        const updatedTaskReport = await taskReport.save();
        res.json(updatedTaskReport);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// DELETE a site
const deleteTaskReport = async (req, res) => {
    try {
        const taskReport = await TaskReport.findById(req.params.id);
        if (taskReport == null) {
            return res.status(404).json({ message: 'Cannot find site' });
        }
        await taskReport.remove();
        res.json({ message: 'Deleted site' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }

}


module.exports = {
    getAllTaskReports,
    getTaskReportById,
    createNewTaskReport,
    updateTaskReport,
    deleteTaskReport
}