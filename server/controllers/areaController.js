const Area = require('../models/areaModel');

// GET all sites

const getAllAreas = async (req, res) => {
    try {
        const areas = await Area.find();
    
        res.json(areas);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    }

// GET one site by ID

const getAreaById = async (req, res) => {
    try {
        const area = await Area.findById(req.params.id);
    
        if (area == null) {
            return res.status(404).json({ message: 'Cannot find site' });
        }
    
        res.json(area);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    }

// CREATE a new site

const createNewArea = async (req, res) => {

    const area = new Area({
        name: req.body.name,
        site: req.body.site,
        department: req.body.department,
        status: req.body.status,
    });

    try {
        const newArea = await area.save();
    
        res.status(201).json(newArea);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
    }

// UPDATE one site by ID

const updateAreaById = async (req, res) => {
    try {
        const area = await Area.findById(req.params.id);
    
        if (area == null) {
            return res.status(404).json({ message: 'Cannot find site' });
        }
    
        if (req.body.areaName != null) {
            area.name = req.body.areaName;
        }
        if (req.body.managerInformation != null) {
            area.managerInformation = req.body.managerInformation;
        }
        const updatedArea = await area.save();
        res.json(updatedArea);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    }

// DELETE one site by ID

const deleteAreaById = async (req, res) => {
    try {
        const area = await Area.findById(req.params.id);
    
        if (area == null) {
            return res.status(404).json({ message: 'Cannot find site' });
        }
    
        const deletedarea = await Area.findByIdAndDelete(req.params.id) ;
        res.json({ message: 'Deleted site' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    }

// GET one site by ID

const getArea = async (req, res) => {
    try {
        const area = await Area.findById(req.params.id);
    
        if (area == null) {
            return res.status(404).json({ message: 'Cannot find site' });
        }
    
        res.json(area);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    }

module.exports = {
    getAllAreas,
    getAreaById,
    createNewArea,
    updateAreaById,
    deleteAreaById,
    getArea,
};