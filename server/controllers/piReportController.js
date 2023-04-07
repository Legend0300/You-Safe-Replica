const PIReport = require('../models/piResportSchema');
const Site  = require('../models/siteModel');
const PI = require('../models/piModel');


// GET all sites
const getAllPIReports = async (req, res) => {
    try {
        const piReports = await PIReport.find();
        console.log(piReports.site);
        const site = await Site.findById(piReports.site);
        res.send( "Pi" + piReports  +  "Site" + site);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    }

// GET one site by ID
const getPIReportById = async (req, res) => {
    try {
        const piReport = await PIReport.findById(req.params.id);
        const site = await Site.findById(piReport.site)
        const pi = await PI.findById(piReport.pi)
        // res.send( "Pi" + piReport  +  "Site: " + site.siteName);
        if (piReport == null) {
            return res.status(404).json({ message: 'Cannot find site' });
        }

        res.json({piReport , "site" : site.siteName , "pi" : pi.formName});
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    }


// CREATE a new site
const createNewPIReport = async (req, res) => {

    const site = await Site.findOne(req.body.siteName);
    const pi = await PI.findOne(req.body.piName);

    const piReport = new PIReport({
        site: site._id,
        pi: pi._id,
        formCompliant: req.body.formCompliant,
        userType : req.body.userType,
        reportedStatus: req.body.reportedStatus,
        reportDate: req.body.reportDate,
        startDate: req.body.startDate,
        endDate: req.body.endDate,

    });

    try {
        const newPIReport = await piReport.save();
        res.status(201).json(newPIReport);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
    }


// UPDATE one site by ID
const updatePIReportById = async (req, res) => {
    try {
        const piReport = await PIReport.findById(req.params.id);

        if (piReport == null) {
            return res.status(404).json({ message: 'Cannot find site' });
        }

        if (req.body.piReportName != null) {
            piReport.formName = req.body.piReportName;
        }
        if (req.body.piReportQuestions != null) {
            piReport.questions = req.body.piReportQuestions;
        }
        if (req.body.piReportStatus != null) {
            piReport.status = req.body.piReportStatus;
        }

        try {
            const updatedPIReport = await piReport.save();
            res.json(updatedPIReport);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    }



// DELETE one site by ID
const deletePIReportById = async (req, res) => {
    try {
        const piReport = await PIReport.findById(req.params.id);

        if (piReport == null) {
            return res.status(404).json({ message: 'Cannot find site' });
        }

        await piReport.remove();
        res.json({ message: 'Deleted site' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    }



module.exports = {
    getAllPIReports,
    getPIReportById,
    createNewPIReport,
    updatePIReportById,
    deletePIReportById
}




