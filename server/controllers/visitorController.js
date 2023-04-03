const Visitor = require('../models/visitorModel');

// GET all sites

const getAllVisitors = async (req, res) => {
    try {
        const visitors = await Visitor.find();

        res.json(visitors);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    }

// GET one site by ID

const getVisitorById = async (req, res) => {
    try {
        const visitor = await Visitor.findById(req.params.id);

        if (visitor == null) {
            return res.status(404).json({ message: 'Cannot find site' });
        }

        res.json(visitor);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    }

// CREATE a new site

const createNewVisitor = async (req, res) => {
    
        const visitor = new Visitor({
    
            visitorName: req.body.visitorName,
            site: req.body.site,
            department: req.body.department,
            area: req.body.area,
            status: req.body.status,
        });
    
        try {
            const newVisitor = await visitor.save();
    
            res.status(201).json(newVisitor);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
        } 

// UPDATE one site by ID

const updateVisitorById = async (req, res) => {
    try {
        const visitor = await Visitor.findById(req.params.id);

        if (visitor == null) {
            return res.status(404).json({ message: 'Cannot find site' });
        }

        if (req.body.visitorName != null) {
            visitor.visitorName = req.body.visitorName;
        }
        if (req.body.site != null) {
            visitor.site = req.body.site;
        }
        if (req.body.department != null) {
            visitor.department = req.body.department;
        }
        if (req.body.area != null) {
            visitor.area = req.body.area;
        }
        if (req.body.status != null) {
            visitor.status = req.body.status;
        }

        const updatedVisitor = await visitor.save();

        res.json(updatedVisitor);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    }

// DELETE one site by ID

const deleteVisitorById = async (req, res) => {
    try {
        const visitor = await Visitor.findById(req.params.id);

        if (visitor == null) {
            return res.status(404).json({ message: 'Cannot find site' });
        }

        await visitor.remove();

        res.json({ message: 'Deleted site' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    }

// getVisitor

const getVisitor = async (req, res) => {
    try {
        const visitor = await Visitor.findById(req.params.id);
    
        if (visitor == null) {
            return res.status(404).json({ message: 'Cannot find site' });
        }

        res.json(visitor);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    }

module.exports = {
    getAllVisitors,
    getVisitorById,
    createNewVisitor,
    updateVisitorById,
    deleteVisitorById,
    getVisitor
}