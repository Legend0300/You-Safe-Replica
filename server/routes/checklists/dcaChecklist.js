const express = require('express');

const router = express.Router();

const { getDCAlists,getDCAlistById,createNewDCAlist,updateDCAlistById,deleteDCAlistById  } = require('../../controllers/dcaChecklistController');

// GET all sites

router.get('/', getDCAlists);

// GET one site by ID

router.get('/:id', getDCAlistById);

// CREATE a new site

router.post('/', createNewDCAlist);

// UPDATE one site by ID

router.put('/:id', updateDCAlistById);

// DELETE one site by ID

router.delete('/:id', deleteDCAlistById);

module.exports = router;

