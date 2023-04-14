express = require('express');
const jwt = require('jsonwebtoken');


const validateToken = (req, res, next) => {
  const token = req.cookies.userjwt;

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    if (decodedToken.role !== 'user') {
      return res.status(403).json({ message: 'Unauthorized' });
    }
    req.user = decodedToken.user;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = validateToken;