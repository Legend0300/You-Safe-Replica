const ReportingDetails = require('../models/reportingDetailsSchema');

// GET all sites
getAllReportingDetails = async (req, res) => {
    try {
        const reportingDetails = await ReportingDetails.find();

        res.json(reportingDetails);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// GET one site by ID
getReportingDetailsById = async (req, res) => {
    try {
        const reportingDetail = await ReportingDetails.findById(req.params.id);

        if (reportingDetail == null) {
            return res.status(404).json({ message: 'Cannot find site' });
        }

        res.json(reportingDetail);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// CREATE a new site
createNewReportingDetail = async (req, res) => {

    
        const reportingDetail = new ReportingDetails({
            Heading: req.body.Heading,
            department: req.body.department,
            area: req.body.area,
            description: req.body.description,
            lastName: req.body.lastName,
            date: req.body.date,
            photos: req.body.photos,
            responsibility: req.body.responsibility,
        });
    
        try {
            const newReportingDetail = await reportingDetail.save();
    
            res.status(201).json(newReportingDetail);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }

// UPDATE one site by ID
updateReportingDetailById = async (req, res) => {
    try {
        const reportingDetail = await ReportingDetails.findById(req.params.id);

        if (reportingDetail == null) {
            return res.status(404).json({ message: 'Cannot find site' });
        }

        if (req.body.Header != null) {
            reportingDetail.Header = req.body.Header;
        }
        if (req.body.department != null) {
            reportingDetail.department = req.body.department;
        }
        if (req.body.description != null) {
            reportingDetail.description = req.body.description;
        }
        if (req.body.date != null) {
            reportingDetail.date = req.body.date;
        }
        if (req.body.photos != null) {
            reportingDetail.photos = req.body.photos;
        }
        if (req.body.responsibility != null) {
            reportingDetail.responsibility = req.body.responsibility;
        }

        const updatedReportingDetails = await reportingDetail.save();

        res.json(updatedReportingDetails);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// DELETE one site by ID
deleteReportingDetailById = async (req, res) => {
    try {
        const reportingDetail = await ReportingDetails.findById(req.params.id);

        if (reportingDetail == null) {
            return res.status(404).json({ message: 'Cannot find site' });
        }

        await reportingDetail.remove();

        res.json({ message: 'Deleted site' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    getAllReportingDetails,
    getReportingDetailsById,
    createNewReportingDetail,
    updateReportingDetailById,
    deleteReportingDetailById
}