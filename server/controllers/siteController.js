const Site = require('../models/siteModel');

// GET all sites
const getAllSites = async (req, res) => {
  try {
    const sites = await Site.find();
    res.json(sites);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET one site by ID
const getSiteById = async (req, res) => {
  try {
    const site = await Site.findById(req.params.id);
    if (site == null) {
      return res.status(404).json({ message: 'Cannot find site' });
    }
    res.json(site);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// CREATE a new site
const createNewSite = async (req, res) => {
  const site = new Site({
    siteName: req.body.siteName,
    location: req.body.location,
    country: req.body.country,
    city: req.body.city,
    managerInformation: req.body.managerInformation
  });

  try {
    const newSite = await site.save();
    res.status(201).json(newSite);
  } catch (err) {
    res.status(400).json({ message: err.message });

    }
};

// UPDATE one site by ID

const updateSiteById = async (req, res) => {
    try {
      const site = await Site.findById(req.params.id);
      if (site == null) {
        return res.status(404).json({ message: 'Cannot find site' });
      }
      if (req.body.siteName != null) {
        site.siteName = req.body.siteName;
      }
      if (req.body.location != null) {
        site.location = req.body.location;
      }
      if (req.body.country != null) {
        site.country = req.body.country;
      }
      if (req.body.city != null) {
        site.city = req.body.city;
      }
      if (req.body.managerInformation != null) {
        site.managerInformation = req.body.managerInformation;
      }
  
      const updatedSite = await Site.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(updatedSite);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };
  

// DELETE one site by ID

const deleteSiteById = async (req, res) => {
    try {
        deletedSite = await Site.findByIdAndDelete(req.params.id);
        res.json({ message: 'Deleted site' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// Middleware function to get site by ID

const getSite = async (req, res, next) => {
    try {
        site = await Site.findById(req.params.id);
        if (site == null) {
            return res.status(404).json({ message: 'Cannot find site' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
    
    res.site = site;
    next();
}

module.exports = {
    getAllSites,
    getSiteById,
    createNewSite,
    updateSiteById,
    deleteSiteById,
    getSite
};