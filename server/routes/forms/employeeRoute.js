const express = require('express');
const router = express.Router();
const {  getAllEmployees, getEmployeeById ,createNewEmployee ,updateEmployeeById ,deleteEmployeeById , getEmployee} = require('../../controllers/employeeController');

// GET all sites
router.get('/', getAllEmployees);

// GET one site by ID
router.get('/:id', getEmployeeById);

// CREATE a new site
router.post('/', createNewEmployee);

// UPDATE one site by ID
router.put('/:id', updateEmployeeById);

// DELETE one site by ID
router.delete('/:id', deleteEmployeeById);

// GET one site by ID

router.get('/getSite/:id', getEmployee);


module.exports = router;
