const express = require('express');
const router = express.Router();
const {  getAllSites, getSiteById ,createNewSite ,updateSiteById ,deleteSiteById , getSite} = require('../../controllers/siteController');
const accessAuth = require('../../middleware/accessAuth');

// GET all sites
router.get('/', getAllSites);

// GET one site by ID
router.get('/:id',  getSiteById);

// CREATE a new site
router.post('/',  createNewSite);

// UPDATE one site by ID
router.put('/:id',  updateSiteById);

// DELETE one site by ID
router.delete('/:id',  deleteSiteById);

// GET one site by ID

router.get('/getSite/:id',  getSite);



module.exports = router;