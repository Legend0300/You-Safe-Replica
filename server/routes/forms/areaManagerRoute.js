const express = require('express');
const router = express.Router();
const {  getAllAreaManagers, getAreaManagerById ,createNewAreaManager ,updateAreaManagerById ,deleteAreaManagerById , getAreaManager} = require('../../controllers/areaManagerController');

const accessAuth = require('../../middleware/accessAuth');
// GET all sites
router.get('/', getAllAreaManagers);

// GET one site by ID
router.get('/:id', getAreaManagerById);

// CREATE a new site
router.post('/',  createNewAreaManager);

// UPDATE one site by ID
router.put('/:id',  updateAreaManagerById);

// DELETE one site by ID
router.delete('/:id',  deleteAreaManagerById);

// GET one site by ID

router.get('/getSite/:id',  getAreaManager);



module.exports = router;