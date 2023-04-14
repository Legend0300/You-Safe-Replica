express = require('express');
const jwt = require('jsonwebtoken');


const validateToken = ( async (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: 'No token provided'});
    }
  
    try {
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
      req.manager = decodedToken.manager;
      next();   
    } catch (error) {
      res.status(401).json({ message: 'Invalid token'});
    }
  
})

module.exports = validateToken;