const SafeUnsafeReport = require('../models/safeUnsafeModel');
const Site = require('../models/siteModel');
//const SafeUnsafe = require('../models/SafeUnsafeModel');


// GET all sites
const getAllSafeUnsafeReports = async (req, res) => {
    try {
        const safeUnsafeReports = await SafeUnsafeReport.find();
        console.log(safeUnsafeReports.site);
        const site = await Site.findById(safeUnsafeReports.site);
        res.send("SafeUnsafe" + safeUnsafeReports + "Site" + site);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// GET one site by ID
const getSafeUnsafeReportById = async (req, res) => {
    try {
        const safeUnsafeReport = await SafeUnsafeReport.findById(req.params.id);
        const site = await Site.findById(safeUnsafeReport.site)
        //const safeUnsafe = await SafeUnsafe.findById(SafeUnsafeReport.SafeUnsafe)
        // res.send( "Pi" + piReport  +  "Site: " + site.siteName);
        if (safeUnsafeReport == null) {
            return res.status(404).json({ message: 'Cannot find site' });
        }

    res.json({ safeUnsafeReport, "site": site.siteName/*, "SafeUnsafe": SafeUnsafe.formName*/ });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// CREATE a new site
const createNewSafeUnsafeReport = async (req, res) => {
    const sites = await Site.findOne(req.body.siteName);
    //const safeUnsafeReports = await SafeUnsafeReport.findOne(req.body.safeUnsafeName);


    const safeUnsafeReport = new SafeUnsafeReport({
        site: sites._id,
        department: req.body.department,
        area: req.body.area,
        actType: req.body.actType,
        userType: req.body.userType,
        reportedStatus: req.body.reportedStatus,
        reportDate: req.body.reportDate,
        startDate: req.body.startDate,
        endDate: req.body.endDate,

    });


    try {
        const newSafeUnsafeReport = await safeUnsafeReport.save();
        res.status(201).json(newSafeUnsafeReport);
    }

    catch (err) {
        res.status(400).json({ message: err.message });
    }
}


// UPDATE a site
const updateSafeUnsafeReport = async (req, res) => {
    try {
        const safeUnsafeReport = await SafeUnsafeReport.findById(req.params.id);
        if (safeUnsafeReport == null) {
            return res.status(404).json({ message: 'Cannot find site' });
        }
        if (req.body.siteName != null) {
            safeUnsafeReport.siteName = req.body.siteName;
        }
        if (req.body.department != null) {
            safeUnsafeReport.department = req.body.department;
        }
        if (req.body.area != null) {
            safeUnsafeReport.area = req.body.area;
        }
        if (req.body.actType != null) {
            safeUnsafeReport.actType = req.body.actType;
        }
        if (req.body.userType != null) {
            safeUnsafeReport.userType = req.body.userType;
        }
        if (req.body.reportedStatus != null) {
            safeUnsafeReport.reportedStatus = req.body.reportedStatus;
        }
        if (req.body.reportDate != null) {
            safeUnsafeReport.reportDate = req.body.reportDate;
        }
        if (req.body.startDate != null) {
            safeUnsafeReport.startDate = req.body.startDate;
        }
        if (req.body.endDate != null) {
            safeUnsafeReport.endDate = req.body.endDate;
        }
        const updatedSafeUnsafeReport = await safeUnsafeReport.save();
        res.json(updatedSafeUnsafeReport);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// DELETE a site
const deleteSafeUnsafeReport = async (req, res) => {
    try {
        const safeUnsafeReport = await SafeUnsafeReport.findById(req.params.id);
        if (safeUnsafeReport == null) {
            return res.status(404).json({ message: 'Cannot find site' });
        }
        await safeUnsafeReport.remove();
        res.json({ message: 'Deleted site' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }

}


module.exports = {
    getAllSafeUnsafeReports,
    getSafeUnsafeReportById,
    createNewSafeUnsafeReport,
    updateSafeUnsafeReport,
    deleteSafeUnsafeReport
}