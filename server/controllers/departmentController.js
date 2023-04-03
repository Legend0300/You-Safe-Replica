const Department = require("../models/departmentModel");

// GET all sites

const getAllDepartments = async (req, res) => {
  try {
    const departments = await Department.find();

    res.json(departments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET one site by ID

const getDepartmentById = async (req, res) => {
  try {
    const department = await Department.findById(req.params.id);

    if (department == null) {
      return res.status(404).json({ message: "Cannot find site" });
    }

    res.json(department);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// CREATE a new site

const createNewDepartment = async (req, res) => {
  const department = new Department({

    
    site: req.body.site,

    departmentName: req.body.departmentName,

    status: req.body.status,
  });

  try {
    const newDepartment = await department.save();

    res.status(201).json(newDepartment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// UPDATE one site by ID

const updateDepartmentById = async (req, res) => {
  try {
    const department = await Department.findById(req.params.id);

    if (department == null) {
      return res.status(404).json({ message: "Cannot find site" });
    }

    if (req.body.departmentName != null) {
      department.departmentName = req.body.departmentName;
    }

    if (req.body.managerInformation != null) {
      department.managerInformation = req.body.managerInformation;
    }

    const updatedDepartment = await department.save();

    res.json(updatedDepartment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE one site by ID

const deleteDepartmentById = async (req, res) => {
  try {
    const department = await Department.findById(req.params.id);

    if (department == null) {
      return res.status(404).json({ message: "Cannot find site" });
    }

    await department.remove();

    res.json({ message: "Deleted site" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getDepartment = async (req, res) => {
    try {
        const department = await Department.findById(req.params.id);
        if (department == null) {
            return res.status(404).json({ message: 'Cannot find department' });
        }
        res.json(department);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}





module.exports = {
    getAllDepartments,
    getDepartmentById,
    createNewDepartment,
    updateDepartmentById,
    deleteDepartmentById,
    getDepartment
};