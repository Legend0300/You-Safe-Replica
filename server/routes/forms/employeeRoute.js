const express = require('express');
const router = express.Router();
const {  getAllEmployees, getEmployeeById ,createNewEmployee ,updateEmployeeById ,deleteEmployeeById , getEmployee} = require('../../controllers/employeeController');
const accessAuth = require('../../middleware/accessAuth');

// GET all sites
router.get('/', accessAuth(["Admin" , "Manager"]), getAllEmployees);

// GET one site by ID
router.get('/:id', accessAuth(["Admin" , "Manager"]), getEmployeeById);

// CREATE a new site
router.post('/', accessAuth(["Admin" , "Manager"]), createNewEmployee);

// UPDATE one site by ID
router.put('/:id', accessAuth(["Admin" , "Manager"]), updateEmployeeById);

// DELETE one site by ID
router.delete('/:id', accessAuth(["Admin"]), deleteEmployeeById);

// GET one site by ID

router.get('/getSite/:id', accessAuth(["Admin" , "Manager"]), getEmployee);


module.exports = router;
