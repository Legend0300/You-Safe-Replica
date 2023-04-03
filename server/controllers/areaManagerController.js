const AreaManager = require('../models/areaManagerModel');

// GET all sites

const getAllAreaManagers = async (req, res) => {
    try {
        const areaManagers = await AreaManager.find();
    
        res.json(areaManagers);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    }

// GET one site by ID

const getAreaManagerById = async (req, res) => {
    try {
        const areaManager = await AreaManager.findById(req.params.id);
    
        if (areaManager == null) {
            return res.status(404).json({ message: 'Cannot find site' });
        }
    
        res.json(areaManager);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    }

// CREATE a new site

const createNewAreaManager = async (req, res) => {
    
        const areaManager = new AreaManager({
            areaManagerName: req.body.areaManagerName,
            area: req.body.area,
            department: req.body.department,
            status: req.body.status,
        });
    
        try {
            const newAreaManager = await areaManager.save();
        
            res.status(201).json(newAreaManager);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
        }

// UPDATE one site by ID

const updateAreaManagerById = async (req, res) => {
    try {
        const areaManager = await AreaManager.findById(req.params.id);
    
        if (areaManager == null) {
            return res.status(404).json({ message: 'Cannot find site' });
        }
    
        if (req.body.areaManagerName != null) {
            areaManager.areaManagerName = req.body.areaManagerName;
        }
        if (req.body.area != null) {
            areaManager.area = req.body.area;
        }
        if (req.body.department != null) {
            areaManager.department = req.body.department;
        }
        if (req.body.status != null) {
            areaManager.status = req.body.status;
        }
    
        const updatedAreaManager = await areaManager.save();
        res.json(updatedAreaManager);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    }

// DELETE one site by ID

const deleteAreaManagerById = async (req, res) => {
    try {
        const areaManager = await AreaManager.findById(req.params.id);
    
        if (areaManager == null) {
            return res.status(404).json({ message: 'Cannot find site' });
        }
    
        await areaManager.remove();
        res.json({ message: 'Deleted site' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    }

const getAreaManager = async (req, res) => {
    try {
        const areaManager = await AreaManager.findById(req.params.id);

        if (areaManager == null) {
            return res.status(404).json({ message: 'Cannot find site' });
        }

        res.json(areaManager);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    }

module.exports = {
    getAllAreaManagers,
    getAreaManagerById,
    createNewAreaManager,
    updateAreaManagerById,
    deleteAreaManagerById,
    getAreaManager
}
