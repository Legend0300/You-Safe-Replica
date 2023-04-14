const Admin = require('../models/adminModel');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Login Admin
const loginAdmin = async (req, res) => {
    const { email, password } = req.body;
    try {
      const admin = await Admin.findOne({ email });
      if (!admin) {
        return res.status(400).json({ msg: 'Invalid Credentials' });
      }
  
      const isMatch = await bcrypt.compare(password, admin.password);
      if (!isMatch) {
          return res.status(400).json({ msg: 'Invalid Credentials' });
        }

        const payload = {
            admin : {
                name: admin.name,
                email: admin.email,
                id: admin._id,
            } ,
            role: admin.role
        };
    
        const token = jwt.sign(
            payload,
            process.env.JWT_SECRET,
        )
    
        res.cookie('adminjwt', token)
        res.json({ token });

    } 
    catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
        }



}


// Get Admin

const getAdmin = async (req, res) => {
    try {
        const admin = await Admin.findById(req.user.id).select('-password');
        res.json(admin);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}


// Register Admin

const registerAdmin = async (req, res) => {
    try {
        // Get user data from request body
        const { name , picture, email , role, password } = req.body;
    
        // Hash password with Bcrypt
        const hashedPassword = await bcrypt.hash(password, 10);
    
        // Create new user with hashed password
        const newUser = await Admin.create({
          name,
          email,
          password: hashedPassword ,
          picture,
          role
        });

        res.send("Admin created: " + newUser)

      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    };


// Logout Admin

const logoutAdmin = async (req, res) => {
    try {
        res.clearCookie('adminjwt');
        res.json({msg: 'admin logged out'});
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}

module.exports = {
    loginAdmin,
    getAdmin,
    registerAdmin,
    logoutAdmin
}