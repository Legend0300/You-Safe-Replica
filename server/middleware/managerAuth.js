express = require('express');
const jwt = require('jsonwebtoken');
const Cookies = require('js-cookie');


const validateToken = async (req, res, next) => {
    // const authHeader = req.headers['authorization'] || req.headers['x-access-token'];
    // const token = authHeader && authHeader.split(' ')[1];
    // const token = req.cookies.managerjwt;
    const token = Cookies.get('managerjwt');

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