const express = require('express');
const router = express.Router();
const {  getAllSites, getSiteById ,createNewSite ,updateSiteById ,deleteSiteById , getSite} = require('../../controllers/siteController');
const accessAuth = require('../../middleware/accessAuth');

// GET all sites
router.get('/', accessAuth(["Admin" , "Manager"]), getAllSites);

// GET one site by ID
router.get('/:id', accessAuth(["Admin" , "Manager"]), getSiteById);

// CREATE a new site
router.post('/', accessAuth(["Admin" , "Manager"]), createNewSite);

// UPDATE one site by ID
router.put('/:id', accessAuth(["Admin" , "Manager"]), updateSiteById);

// DELETE one site by ID
router.delete('/:id', accessAuth(["Admin"]), deleteSiteById);

// GET one site by ID

router.get('/getSite/:id', accessAuth(["Admin" , "Manager"]), getSite);



module.exports = router;