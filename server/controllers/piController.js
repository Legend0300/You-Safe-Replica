const PI = require('../models/piModel');

// GET all sites

const getAllPIs = async (req, res) => {
    try {
        const pis = await PI.find();

        res.json(pis);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    }

// GET one site by ID
// testing
const getPIById = async (req, res) => {
    try {
        const pi = await PI.findById(req.params.id);

        if (pi == null) {
            return res.status(404).json({ message: 'Cannot find site' });
        }

        res.json(pi);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    }

// CREATE a new site

const createNewPI = async (req, res) => {
            
                const pi = new PI({
                    formName: req.body.formName,
                    questions: req.body.questions,
                    status: req.body.status,
                    endDate: req.body.endDate,
                    
                });
            
                try {
                    const newPI = await pi.save();
                
                    res.status(201).json(newPI);
                } catch (err) {
                    res.status(400).json({ message: err.message });
                }
                }   

// UPDATE one site by ID

const updatePIById = async (req, res) => {
    try {
        const pi = await PI.findById(req.params.id);

        if (pi == null) {
            return res.status(404).json({ message: 'Cannot find site' });
        }

        if (req.body.piName != null) {
            pi.piName = req.body.piName;
        }
        if (req.body.department != null) {
            pi.department = req.body.department;
        }
        if (req.body.status != null) {
            pi.status = req.body.status;
        }

        const updatedPI = await pi.save();
        res.json(updatedPI);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    }


// DELETE one site by ID

const deletePIById = async (req, res) => {
    try {
        const pi = await PI.findById(req.params.id);

        if (pi == null) {
            return res.status(404).json({ message: 'Cannot find site' });
        }

        await pi.remove();
        res.json({ message: 'Deleted site' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    }


const getPI = async (req, res) => {
    try {
        const pi = await PI.findById(req.params.id);

        if (pi == null) {
            return res.status(404).json({ message: 'Cannot find site' });
        }
 res.json(pi);

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    getAllPIs,
    getPIById,
    createNewPI,
    updatePIById,
    deletePIById,
    getPI
}