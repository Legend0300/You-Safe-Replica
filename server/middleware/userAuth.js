express = require('express');
const jwt = require('jsonwebtoken');


const validateToken = ( async (req, res, next) => {
    // const authHeader = req.headers['authorization'] || req.headers['x-access-token'];
    // const token = authHeader && authHeader.split(' ')[1];
    const token = req.cookies.userjwt;

    if (!token) {
      return res.status(401).json({ message: 'No token provided'});
    }
  
    try {
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decodedToken.user;
      next();   
    } catch (error) {
      res.status(401).json({ message: 'Invalid token'});
    }
  
})

module.exports = validateToken;