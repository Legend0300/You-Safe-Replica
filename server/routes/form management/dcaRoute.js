const express = require('express');
const router = express.Router();
const accessAuth = require('../../middleware/accessAuth');
const {  getAllDCAs , getDCAById , createNewDCA , deleteDCAById , getDCAquestions , updateDCAById} = require('../../controllers/dcaController');
// GET all sites
router.get('/',  getAllDCAs);

router.get('/get/questions',  getDCAquestions);
// GET one site by ID
router.get('/:id',  getDCAById);

// CREATE a new site
router.post('/',  createNewDCA);

// UPDATE one site by ID
router.put('/:id',  updateDCAById);

// DELETE one site by ID
router.delete('/:id',  deleteDCAById);

// GET one site by ID




module.exports = router;