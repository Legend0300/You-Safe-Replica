const express = require('express');
const router = express.Router();
const {  getAllDCAs , getDCAById , createNewDCA , deleteDCAById , getDCA , updateDCAById} = require('../../controllers/dcaController');
// GET all sites
router.get('/', getAllDCAs);

// GET one site by ID
router.get('/:id', getDCAById);

// CREATE a new site
router.post('/', createNewDCA);

// UPDATE one site by ID
router.put('/:id',  updateDCAById);

// DELETE one site by ID
router.delete('/:id', deleteDCAById);

// GET one site by ID

router.get('/getSite/:id', getDCA);



module.exports = router;