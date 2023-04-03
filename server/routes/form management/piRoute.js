const express = require('express');
const router = express.Router();

const {   getAllPIs , getPIById , createNewPI , updatePIById , deletePIById , getPI} = require('../../controllers/piController');

// GET all sites
router.get('/', getAllPIs);

// GET one site by ID
router.get('/:id', getPIById);

// CREATE a new site
router.post('/', createNewPI);

// UPDATE one site by ID
router.put('/:id', updatePIById);

// DELETE one site by ID
router.delete('/:id', deletePIById);

// GET one site by ID

router.get('/getSite/:id', getPI);



module.exports = router;