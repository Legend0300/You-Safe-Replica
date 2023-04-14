const express = require('express');
const router = express.Router();
const accessAuth = require('../../middleware/accessAuth');
const {  getAllDCAs , getDCAById , createNewDCA , deleteDCAById , getDCA , updateDCAById} = require('../../controllers/dcaController');
// GET all sites
router.get('/', accessAuth(["Admin" , "Manager"]), getAllDCAs);

// GET one site by ID
router.get('/:id', accessAuth(["Admin" , "Manager"]), getDCAById);

// CREATE a new site
router.post('/', accessAuth(["Admin" , "Manager"]), createNewDCA);

// UPDATE one site by ID
router.put('/:id', accessAuth(["Admin" , "Manager"]),  updateDCAById);

// DELETE one site by ID
router.delete('/:id', accessAuth(["Admin"]), deleteDCAById);

// GET one site by ID

router.get('/getSite/:id', accessAuth(["Admin" , "Manager"]), getDCA);



module.exports = router;