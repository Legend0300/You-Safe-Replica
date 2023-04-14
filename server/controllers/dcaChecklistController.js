const expess = require('express');

const DCAList = require('../models/dcaChecklistSchema');

//get all sites

const getDCAlists = async (req, res) => {
    try {
        const dcaLists = await DCAList.find();
        res.json(dcaLists);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    }

//get one site by id

const getDCAlistById = async (req, res) => {
    try {
        const dcaList = await DCAList.findById(req.params.id);
        if (dcaList == null) {
            return res.status(404).json({ message: 'Cannot find site' });
        }
        res.json(dcaList);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    }

//create a new site

const createNewDCAlist = async (req, res) => {
    const dcaList = new DCAList({
        formName: req.body.formName,
        questions: req.body.questions,
        status: req.body.status,
    });

    try {
        const newDCAlist = await dcaList.save();
        res.status(201).json(newDCAlist);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
    }


//update one site by id

const updateDCAlistById = async (req, res) => {
    try {
        const dcaList = await DCAList.findById(req.params.id);
        if (dcaList == null) {
            return res.status(404).json({ message: 'Cannot find site' });
        }
        if (req.body.dcaListName != null) {
            dcaList.formName = req.body.dcaListName;
        }
        if (req.body.dcaListQuestions != null) {
            dcaList.questions = req.body.dcaListQuestions;
        }
        if (req.body.dcaListStatus != null) {
            dcaList.status = req.body.dcaListStatus;
        }
        try {
            const updatedDCAlist = await dcaList.save();
            res.json(updatedDCAlist);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    }


//delete one site by id

const deleteDCAlistById = async (req, res) => {
    try {
        const dcaList = await DCAList.findById(req.params.id);
        if (dcaList == null) {
            return res.status(404).json({ message: 'Cannot find site' });
        }
        try {
            await dcaList.remove();
            res.json({ message: 'Deleted site' });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    }

module.exports = {
    getDCAlists,
    getDCAlistById,
    createNewDCAlist,
    updateDCAlistById,
    deleteDCAlistById,
};




