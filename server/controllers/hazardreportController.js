const HazardReport = require('../models/hazardreportModel');
const Site = require('../models/siteModel');
//const Hazard = require('../models/HazardModel');


// GET all sites
const getAllHazardReports = async (req, res) => {
    try {
        const HazardReports = await HazardReport.find();
        console.log(HazardReports.site);
        const site = await Site.findById(HazardReports.site);
        res.send("Hazard" + HazardReports + "Site" + site);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// GET one site by ID
const getHazardReportById = async (req, res) => {
    try {
        const hazardReport = await HazardReport.findById(req.params.id);
        const site = await Site.findById(hazardReport.site)
        //const Hazard = await Hazard.findById(HazardReport.Hazard)
        // res.send( "Pi" + piReport  +  "Site: " + site.siteName);
        if (hazardReport == null) {
            return res.status(404).json({ message: 'Cannot find site' });
        }

    res.json({ hazardReport, "site": site.siteName/*, "Hazard": Hazard.formName*/ });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// CREATE a new site
const createNewHazardReport = async (req, res) => {
    const sites = await Site.findOne(req.body.siteName);
    //const HazardReports = await HazardReport.findOne(req.body.HazardName);


    const hazardReport = new HazardReport({
        department: req.body.department,
        area: req.body.area,
        userType: req.body.userType,
        reportedStatus: req.body.reportedStatus,
        reportDate: req.body.reportDate,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        description: req.body.description,  

    });


    try {
        const newHazardReport = await hazardReport.save();
        res.status(201).json(newHazardReport);
    }

    catch (err) {
        res.status(400).json({ message: err.message });
    }
}


// UPDATE a site
const updateHazardReport = async (req, res) => {
    try {
        const hazardReport = await HazardReport.findById(req.params.id);
        if (hazardReport == null) {
            return res.status(404).json({ message: 'Cannot find site' });
        }
        if (req.body.site != null) {
            hazardReport.site = req.body.site;
        }
        if (req.body.department != null) {
            hazardReport.department = req.body.department;
        }
        if (req.body.area != null) {
            hazardReport.area = req.body.area;
        }
        if (req.body.userType != null) {
            hazardReport.userType = req.body.userType;
        }
        if (req.body.reportedStatus != null) {
            hazardReport.reportedStatus = req.body.reportedStatus;
        }
        if (req.body.reportDate != null) {
            hazardReport.reportDate = req.body.reportDate;
        }
        if (req.body.startDate != null) {
            hazardReport.startDate = req.body.startDate;
        }
        if (req.body.endDate != null) {
            hazardReport.endDate = req.body.endDate;
        }
        const updatedHazardReport = await HazardReport.save();
        res.json(updatedHazardReport);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// DELETE a site
const deleteHazardReport = async (req, res) => {
    try {
        const hazardReport = await HazardReport.findById(req.params.id);
        if (hazardReport == null) {
            return res.status(404).json({ message: 'Cannot find site' });
        }
        await HazardReport.remove();
        res.json({ message: 'Deleted site' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }

}


module.exports = {
    getAllHazardReports,
    getHazardReportById,
    createNewHazardReport,
    updateHazardReport,
    deleteHazardReport
}