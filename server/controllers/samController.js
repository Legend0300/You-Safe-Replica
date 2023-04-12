const express = require('express');

const SafetyActionMeeting = require('../models/samSchema');

//get all sites

const getSAMs = async (req, res) => {
    try {
        const samLists = await SafetyActionMeeting.find();
        res.json(samLists);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    }

//get one site by id

const getSAMById = async (req, res) => {
    try {
        const samList = await SafetyActionMeeting.findById(req.params.id);
        if (samList == null) {
            return res.status(404).json({ message: 'Cannot find site' });
        }
        res.json(samList);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    }


//create a new site

const createNewSAM = async (req, res) => {
    const samList = new SafetyActionMeeting({
        formName: req.body.formName,
        questions: req.body.questions,
        status: req.body.status,
    });

    try {
        const newSAM = await samList.save();
        res.status(201).json(newSAM);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
    }


//update one site by id

const updateSAMById = async (req, res) => {
    try {
        const samList = await SafetyActionMeeting.findById(req.params.id);
        if (samList == null) {
            return res.status(404).json({ message: 'Cannot find site' });
        }
        if (req.body.samListName != null) {
            samList.formName = req.body.samListName;
        }
        if (req.body.questions != null) {
            samList.questions = req.body.questions;
        }
        if (req.body.status != null) {
            samList.status = req.body.status;
        }
        const updatedSAM = await samList.save();
        res.json(updatedSAM);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
    }


//delete one site by id

const deleteSAMById = async (req, res) => {
    try {
        const samList = await SafetyActionMeeting.findById(req.params.id);
        if (samList == null) {
            return res.status(404).json({ message: 'Cannot find site' });
        }
        await samList.remove();
        res.json({ message: 'Deleted site' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    }


module.exports = {
    getSAMs,
    getSAMById,
    createNewSAM,
    updateSAMById,
    deleteSAMById
}

