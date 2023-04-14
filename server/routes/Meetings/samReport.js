const express = require('express');

const router = express.Router();

const { getSAMs, getSAMById ,createNewSAM ,updateSAMById ,deleteSAMById } = require('../../controllers/samController');

router.get('/' , getSAMs);

router.get('/:id' , getSAMById);

router.post('/' , createNewSAM);

router.put('/:id' , updateSAMById);

router.delete('/:id' , deleteSAMById);

module.exports = router;
