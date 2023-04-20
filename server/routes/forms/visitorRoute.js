const express = require('express');
const router = express.Router();
const accessAuth = require('../../middleware/accessAuth');

const {  getAllVisitors, getVisitorById ,createNewVisitor ,updateVisitorById ,deleteVisitorById , getVisitor} = require('../../controllers/visitorController');

// GET all sites
router.get('/', getAllVisitors);

// GET one site by ID
router.get('/:id',  getVisitorById);

// CREATE a new site
router.post('/', createNewVisitor);

// UPDATE one site by ID
router.put('/:id',  updateVisitorById);

// DELETE one site by ID
router.delete('/:id',  deleteVisitorById);

// GET one site by ID

router.get('/getSite/:id',  getVisitor);

module.exports = router;