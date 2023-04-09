const IncidentReport = require('../models/incidentReportSchema');
const Site = require('../models/siteModel');
//const incident = require('../models/incidentModel');


// GET all sites
const getAllIncidentReports = async (req, res) => {
    try {
        const incidentReports = await IncidentReport.find();
        console.log(incidentReports.site);
        const site = await Site.findById(incidentReports.site);
        res.send("incident" + incidentReports + "Site" + site);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// GET one site by ID
const getIncidentReportById = async (req, res) => {
    try {
        const incidentReport = await IncidentReport.findById(req.params.id);
        const site = await Site.findById(incidentReport.site)
        //const incident = await incident.findById(incidentReport.incident)
        // res.send( "Pi" + piReport  +  "Site: " + site.siteName);
        if (incidentReport == null) {
            return res.status(404).json({ message: 'Cannot find site' });
        }

    res.json({ incidentReport, "site": site.siteName/*, "incident": incident.formName*/ });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// CREATE a new site
const createNewIncidentReport = async (req, res) => {
    const sites = await Site.findOne(req.body.siteName);
    //const incidentReports = await incidentReport.findOne(req.body.incidentName);


    const incidentReport = new IncidentReport({
        site: sites._id,
        department: req.body.department,
        area: req.body.area,
        eventType: req.body.eventType,
        eventSubType: req.body.eventSubType,
        userType: req.body.userType,
        reportedStatus: req.body.reportedStatus,
        reportDate: req.body.reportDate,
        startDate: req.body.startDate,
        endDate: req.body.endDate,

    });


    try {
        const newIncidentReport = await incidentReport.save();
        res.status(201).json(newIncidentReport);
    }

    catch (err) {
        res.status(400).json({ message: err.message });
    }
}


// UPDATE a site
const updateIncidentReport = async (req, res) => {
    try {
        const incidentReport = await IncidentReport.findById(req.params.id);
        if (incidentReport == null) {
            return res.status(404).json({ message: 'Cannot find site' });
        }
        if (req.body.site != null) {
            incidentReport.site = req.body.site;
        }
        if (req.body.department != null) {
            incidentReport.department = req.body.department;
        }
        if (req.body.area != null) {
            incidentReport.area = req.body.area;
        }
        if (req.body.eventType!=null) {
            incidentReport.eventType = req.body.eventType;
        }
        if (req.body.eventSubType!=null) {
            incidentReport.eventSubType = req.body.eventSubType;
        }
        if (req.body.userType != null) {
            incidentReport.userType = req.body.userType;
        }
        if (req.body.reportedStatus != null) {
            incidentReport.reportedStatus = req.body.reportedStatus;
        }
        if (req.body.reportDate != null) {
            incidentReport.reportDate = req.body.reportDate;
        }
        if (req.body.startDate != null) {
            incidentReport.startDate = req.body.startDate;
        }
        if (req.body.endDate != null) {
            incidentReport.endDate = req.body.endDate;
        }
        const updatedIncidentReport = await incidentReport.save();
        res.json(updatedIncidentReport);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// DELETE a site
const deleteIncidentReport = async (req, res) => {
    try {
        const incidentReport = await IncidentReport.findById(req.params.id);
        if (incidentReport == null) {
            return res.status(404).json({ message: 'Cannot find site' });
        }
        await incidentReport.remove();
        res.json({ message: 'Deleted site' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }

}


module.exports = {
    getAllIncidentReports,
    getIncidentReportById,
    createNewIncidentReport,
    updateIncidentReport,
    deleteIncidentReport
}