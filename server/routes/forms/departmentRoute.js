const express = require('express');
const router = express.Router();
const {  getAllDepartments, getDepartmentById ,createNewDepartment ,updateDepartmentById ,deleteDepartmentById , getDepartment} = require('../../controllers/departmentController');
const accessAuth = require('../../middleware/accessAuth');

// GET all sites
router.get('/', accessAuth(["Admin" , "Manager"]), getAllDepartments);

// GET one site by ID
router.get('/:id', accessAuth(["Admin" , "Manager"]), getDepartmentById);

// CREATE a new site
router.post('/', accessAuth(["Admin" , "Manager"]), createNewDepartment);

// UPDATE one site by ID
router.put('/:id', accessAuth(["Admin" , "Manager"]), updateDepartmentById);

// DELETE one site by ID
router.delete('/:id', accessAuth(["Admin"]), deleteDepartmentById);

// GET one site by ID

router.get('/getSite/:id', accessAuth(["Admin" , "Manager"]), getDepartment);



module.exports = router;