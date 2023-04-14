const expess = require('express');

const {      getPIlists,
    getPIlistById,
    createNewPIlist,
    updatePIlistById,
    deletePIlistById} = require('../../controllers/piCheckController');


const router = express.Router();

// GET all sites

router.get('/', getPIlists);

// GET one site by ID

router.get('/:id', getPIlistById);

// CREATE a new site

router.post('/', createNewPIlist);

// UPDATE one site by ID

router.put('/:id', updatePIlistById);

// DELETE one site by ID

router.delete('/:id', deletePIlistById);

module.exports = router;
