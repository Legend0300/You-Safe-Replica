const express = require('express');
const router = express.Router();

const {   getAllPIs , getPIById , createNewPI , updatePIById , deletePIById , getPI} = require('../../controllers/piController');

// GET all sites
router.get('/', accessAuth(["Admin" , "Manager"]), getAllPIs);

// GET one site by ID
router.get('/:id', accessAuth(["Admin" , "Manager"]), getPIById);

// CREATE a new site
router.post('/', accessAuth(["Admin" , "Manager"]), createNewPI);

// UPDATE one site by ID
router.put('/:id', accessAuth(["Admin" , "Manager"]), updatePIById);

// DELETE one site by ID
router.delete('/:id', accessAuth(["Admin"]), deletePIById);

// GET one site by ID

router.get('/getSite/:id', accessAuth(["Admin" , "Manager"]), getPI);



module.exports = router;