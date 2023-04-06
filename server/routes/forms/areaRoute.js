const express = require('express');
const router = express.Router();

const {  getAllAreas , getAreaById ,createNewArea ,updateAreaById ,deleteAreaById , getArea} = require('../../controllers/areaController');
const accessAuth = require('../../middleware/accessAuth');

// GET all sites
router.get('/', accessAuth(["Admin" , "Manager"]) ,getAllAreas);

// GET one site by ID
router.get('/:id', accessAuth(["Admin" , "Manager"]), getAreaById);

// CREATE a new site
router.post('/', accessAuth(["Admin" , "Manager"]), createNewArea);

// UPDATE one site by ID
router.put('/:id', accessAuth(["Admin" , "Manager"]), updateAreaById);

// DELETE one site by ID
router.delete('/:id', accessAuth(["Admin"]) , deleteAreaById);

// GET one site by ID

router.get('/getSite/:id', accessAuth(["Admin" , "Manager"]), getArea);

module.exports = router;
