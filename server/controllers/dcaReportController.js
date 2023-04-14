const DCAReport = require('../models/dcaReportSchema');
const Site = require('../models/siteModel');
const DCA = require('../models/dcaModel');


// GET all sites
const getAllDCAReports = async (req, res) => {
    try {
        const dcaReports = await DCAReport.find();
        console.log(dcaReports.site);
        const site = await Site.findById(dcaReports.site);
        res.send("DCA" + dcaReports + "Site" + site);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// GET one site by ID
const getDCAReportById = async (req, res) => {
    try {
        const dcaReport = await DCAReport.findById(req.params.id);
        const site = await Site.findById(dcaReport.site)
        const dca = await DCA.findById(dcaReport.dca)
        // res.send( "Pi" + piReport  +  "Site: " + site.siteName);
        if (dcaReport == null) {
            return res.status(404).json({ message: 'Cannot find site' });
        }

        res.json({ dcaReport, "site": site.siteName, "dca": dca.formName });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// CREATE a new site
const createNewDCAReport = async (req, res) => {
    const sites = await Site.findOne(req.body.siteName);
    const dcas = await DCA.findOne(req.body.dcaName);


    const dcaReport = new DCAReport({
        site: sites._id,
        dca: dcas._id,
        formCompliant: req.body.formCompliant,
        userType: req.body.userType,
        reportedStatus: req.body.reportedStatus,
        reportDate: req.body.reportDate,
        startDate: req.body.startDate,
        endDate: req.body.endDate,

    });


    try {
        const newDCAReport = await dcaReport.save();
        res.status(201).json(newDCAReport);
    }

    catch (err) {
        res.status(400).json({ message: err.message });
    }
}


// UPDATE a site
const updateDCAReport = async (req, res) => {
    try {
        const dcaReport = await DCAReport.findById(req.params.id);
        if (dcaReport == null) {
            return res.status(404).json({ message: 'Cannot find site' });
        }
        if (req.body.siteName != null) {
            dcaReport.siteName = req.body.siteName;
        }
        if (req.body.dcaName != null) {
            dcaReport.dcaName = req.body.dcaName;
        }
        if (req.body.formCompliant != null) {
            dcaReport.formCompliant = req.body.formCompliant;
        }
        if (req.body.userType != null) {
            dcaReport.userType = req.body.userType;
        }
        if (req.body.reportedStatus != null) {
            dcaReport.reportedStatus = req.body.reportedStatus;
        }
        if (req.body.reportDate != null) {
            dcaReport.reportDate = req.body.reportDate;
        }
        if (req.body.startDate != null) {
            dcaReport.startDate = req.body.startDate;
        }
        if (req.body.endDate != null) {
            dcaReport.endDate = req.body.endDate;
        }
        const updatedDCAReport = await dcaReport.save();
        res.json(updatedDCAReport);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// DELETE a site
const deleteDCAReport = async (req, res) => {
    try {
        const dcaReport = await DCAReport.findById(req.params.id);
        if (dcaReport == null) {
            return res.status(404).json({ message: 'Cannot find site' });
        }
        await dcaReport.remove();
        res.json({ message: 'Deleted site' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }

}


module.exports = {
    getAllDCAReports,
    getDCAReportById,
    createNewDCAReport,
    updateDCAReport,
    deleteDCAReport
}