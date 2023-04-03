const Employee = require('../models/employeeModel');

// GET all sites
getAllEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();

        res.json(employees);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// GET one site by ID
getEmployeeById = async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id);

        if (employee == null) {
            return res.status(404).json({ message: 'Cannot find site' });
        }

        res.json(employee);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// CREATE a new site
createNewEmployee = async (req, res) => {

    
        const employee = new Employee({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            address: req.body.address,
            city: req.body.city,
            state: req.body.state,
            zipCode: req.body.zipCode,
            department: req.body.department,
            area: req.body.area,
            site: req.body.site,
            managerInformation: req.body.managerInformation,
        });
    
        try {
            const newEmployee = await employee.save();
    
            res.status(201).json(newEmployee);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }

// UPDATE one site by ID
updateEmployeeById = async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id);

        if (employee == null) {
            return res.status(404).json({ message: 'Cannot find site' });
        }

        if (req.body.firstName != null) {
            employee.firstName = req.body.firstName;
        }
        if (req.body.lastName != null) {
            employee.lastName = req.body.lastName;
        }
        if (req.body.email != null) {
            employee.email = req.body.email;
        }
        if (req.body.phoneNumber != null) {
            employee.phoneNumber = req.body.phoneNumber;
        }
        if (req.body.address != null) {
            employee.address = req.body.address;
        }
        if (req.body.city != null) {
            employee.city = req.body.city;
        }
        if (req.body.state != null) {
            employee.state = req.body.state;
        }
        if (req.body.zipCode != null) {
            employee.zipCode = req.body.zipCode;
        }
        if (req.body.department != null) {
            employee.department = req.body.department;
        }
        if (req.body.area != null) {
            employee.area = req.body.area;
        }
        if (req.body.site != null) {
            employee.site = req.body.site;
        }
        if (req.body.managerInformation != null) {
            employee.managerInformation = req.body.managerInformation;
        }

        const updatedEmployee = await employee.save();

        res.json(updatedEmployee);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// DELETE one site by ID
deleteEmployeeById = async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id);

        if (employee == null) {
            return res.status(404).json({ message: 'Cannot find site' });
        }

        await employee.remove();

        res.json({ message: 'Deleted site' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// GET one site by ID

getEmployee = async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id);

        if (employee == null) {
            return res.status(404).json({ message: 'Cannot find site' });
        }

        res.json(employee);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    getAllEmployees,
    getEmployeeById,
    createNewEmployee,
    updateEmployeeById,
    deleteEmployeeById,
    getEmployee
}