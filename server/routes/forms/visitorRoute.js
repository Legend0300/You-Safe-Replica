const express = require('express');
const router = express.Router();
const accessAuth = require('../../middleware/accessAuth');

const {  getAllVisitors, getVisitorById ,createNewVisitor ,updateVisitorById ,deleteVisitorById , getVisitor} = require('../../controllers/visitorController');

// GET all sites
router.get('/', accessAuth(["Admin" , "Manager"]), getAllVisitors);

// GET one site by ID
router.get('/:id', accessAuth(["Admin" , "Manager"]), getVisitorById);

// CREATE a new site
router.post('/', accessAuth(["Admin" , "Manager"]), createNewVisitor);

// UPDATE one site by ID
router.put('/:id', accessAuth(["Admin" , "Manager"]), updateVisitorById);

// DELETE one site by ID
router.delete('/:id', accessAuth(["Admin"]), deleteVisitorById);

// GET one site by ID

router.get('/getSite/:id', accessAuth(["Admin" , "Manager"]), getVisitor);

module.exports = router;