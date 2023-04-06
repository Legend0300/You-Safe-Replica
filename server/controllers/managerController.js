const Manager = require('../models/managerModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Login manager
const loginManager = async (req, res) => {
    const { email, password } = req.body;
    try {
      let manager = await Manager.findOne({ email });
      if (!manager) {
        return res.status(400).json({ msg: 'Invalid Credentials' });
      }
  
      const isMatch = await bcrypt.compare(password, manager.password);
      if (!isMatch) {
          return res.status(400).json({ msg: 'Invalid Credentials' });
        }

        const payload = {
            manager : {
                name: manager.name,
                email: manager.email,
                id: manager._id,
            } ,
            role: manager.role
        };
    
        const token = jwt.sign(
            payload,
            process.env.JWT_SECRET,
        )
    
        res.cookie('managerjwt', token)
        res.json({ token });

    } 
    catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
        }



}


// Get manager

const getManager = async (req, res) => {
    try {
        const manager = await Manager.findById(req.user.id).select('-password');
        res.json(manager);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}


// Register manager

const registerManager = async (req, res) => {
    try {
        // Get user data from request body
        const { name , picture, email , role, password } = req.body;
    
        // Hash password with Bcrypt
        const hashedPassword = await bcrypt.hash(password, 10);
    
        // Create new user with hashed password
        const newUser = await Manager.create({
          name,
          email,
          password: hashedPassword ,
          picture,
          role
        });

        res.send("Manager created: " + newUser)

      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    };


// Logout manager

const logoutManager = async (req, res) => {
    try {
        res.clearCookie('managerjwt');
        res.json({msg: 'Manager logged out'});
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}

module.exports = {
    loginManager,
    getManager,
    registerManager,
    logoutManager
}