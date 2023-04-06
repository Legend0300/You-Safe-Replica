const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/usertypeModel');





// Get user
const getUser = async (req, res) => {
  try {
    // Get user ID from decoded JWT token
    const { id } = req.user;

    // Find user by ID
    const user = await User.findById(id);

    // Return user data
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Login user
const loginUser = async (req, res) => {
  try {
    // Get email and password from request body
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });

    // If user not found, return error
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Compare password with hashed password in database
    const passwordMatch = await bcrypt.compare(password, user.password);

    // If password doesn't match, return error
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Generate JWT token with user ID as payload
    const token = jwt.sign({
        user : {
          name: user.name,
          email: user.email ,
          id: user._id,
          userId: user.employeeId
        } ,
        role: user.AccountTypeEnum
    
      }, process.env.JWT_SECRET);

    res.cookie('userjwt', token)

    // Return token and user data
    res.json("token: " + token);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Register user
const registerUser = async (req, res) => {
  try {
    // Get user data from request body
    const { picture, email, accountType, employeeId, password } = req.body;

    // Hash password with Bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user with hashed password
    const newUser = await User.create({
      picture,
      email,
      accountType,
      employeeId,
      password: hashedPassword
    });

    // Generate JWT token with user ID as payload
    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET);

    // Store token in session



    // Return token and new user data
    res.json({ token, user: newUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Logout user
const logoutUser = (req, res) => {
  try {
    // Clear token from session
    res.clearCookie('userjwt');

    // Return success message
    res.json({ message: 'Logged out successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


module.exports = {
    getUser,
    loginUser,
    registerUser,
    logoutUser
};