const express = require('express');
const PIList = require('../models/piChecklistSchema');



//get all sites

const getPIlists = async (req, res) => {
    try {
        const piLists = await PIList.find();
        res.json(piLists);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    }

//get one site by id

const getPIlistById = async (req, res) => {
    try {
        const piList = await PIList.findById(req.params.id);
        if (piList == null) {
            return res.status(404).json({ message: 'Cannot find site' });
        }
        res.json(piList);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    }


//create a new site

const createNewPIlist = async (req, res) => {
    const piList = new PIList({
        formName: req.body.formName,
        questions: req.body.questions,
        status: req.body.status,
    });

    try {
        const newPIlist = await piList.save();
        res.status(201).json(newPIlist);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
    }


//update one site by id

const updatePIlistById = async (req, res) => {
    try {
        const piList = await PIList.findById(req.params.id);
        if (piList == null) {
            return res.status(404).json({ message: 'Cannot find site' });
        }
        if (req.body.piListName != null) {
            piList.formName = req.body.piListName;
        }
        if (req.body.piListQuestions != null) {
            piList.questions = req.body.piListQuestions;
        }
        if (req.body.piListStatus != null) {
            piList.status = req.body.piListStatus;
        }
        const updatedPIlist = await piList.save();
        res.json(updatedPIlist);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
    }


//delete one site by id

const deletePIlistById = async (req, res) => {
    try {
        const piList = await PIList.findById(req.params.id);
        if (piList == null) {
            return res.status(404).json({ message: 'Cannot find site' });
        }
        await piList.remove();
        res.json({ message: 'Deleted site' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    }


module.exports = {
    getPIlists,
    getPIlistById,
    createNewPIlist,
    updatePIlistById,
    deletePIlistById
}