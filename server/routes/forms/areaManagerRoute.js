const express = require('express');
const router = express.Router();
const {  getAllAreaManagers, getAreaManagerById ,createNewAreaManager ,updateAreaManagerById ,deleteAreaManagerById , getAreaManager} = require('../../controllers/areaManagerController');
const accessAuth = require('../../middleware/accessAuth');
// GET all sites
router.get('/', accessAuth(["Admin" , "Manager"]), getAllAreaManagers);

// GET one site by ID
router.get('/:id', accessAuth(["Admin" , "Manager"]), getAreaManagerById);

// CREATE a new site
router.post('/', accessAuth(["Admin" , "Manager"]), createNewAreaManager);

// UPDATE one site by ID
router.put('/:id', accessAuth(["Admin" , "Manager"]), updateAreaManagerById);

// DELETE one site by ID
router.delete('/:id', accessAuth(["Admin"]), deleteAreaManagerById);

// GET one site by ID

router.get('/getSite/:id', accessAuth(["Admin" , "Manager"]), getAreaManager);



module.exports = router;