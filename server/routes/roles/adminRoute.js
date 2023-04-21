const express  = require('express');
const router = express.Router();

const { loginAdmin, getAdmin, registerAdmin, logoutAdmin } = require('../../controllers/adminController');

const adminAuth = require('../../middleware/adminAuth');

router.get('/' ,  getAdmin);

router.post('/login' , loginAdmin);

router.post('/register' ,  registerAdmin);

router.post('/logout' , logoutAdmin);

module.exports = router;