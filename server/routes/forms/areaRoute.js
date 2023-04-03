const express = require('express');
const router = express.Router();

const {  getAllAreas , getAreaById ,createNewArea ,updateAreaById ,deleteAreaById , getArea} = require('../../controllers/areaController');

// GET all sites
router.get('/', getAllAreas);

// GET one site by ID
router.get('/:id', getAreaById);

// CREATE a new site
router.post('/', createNewArea);

// UPDATE one site by ID
router.put('/:id', updateAreaById);

// DELETE one site by ID
router.delete('/:id', deleteAreaById);

// GET one site by ID

router.get('/getSite/:id', getArea);

module.exports = router;
