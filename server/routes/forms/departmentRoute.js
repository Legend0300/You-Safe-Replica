const express = require('express');
const router = express.Router();
const {  getAllDepartments, getDepartmentById ,createNewDepartment ,updateDepartmentById ,deleteDepartmentById , getDepartment} = require('../../controllers/departmentController');

// GET all sites
router.get('/', getAllDepartments);

// GET one site by ID
router.get('/:id', getDepartmentById);

// CREATE a new site
router.post('/', createNewDepartment);

// UPDATE one site by ID
router.put('/:id', updateDepartmentById);

// DELETE one site by ID
router.delete('/:id', deleteDepartmentById);

// GET one site by ID

router.get('/getSite/:id', getDepartment);



module.exports = router;