const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();
const { registerUser, loginUser, logoutUser, getUser , ForgotPassword , ResetPassword} = require('../../controllers/userController');
const userAuth = require('../../middleware/userAuth');
const User = require('../../models/usertypeModel');



router.get('/', userAuth , getUser);

router.post('/login' , loginUser);

router.post('/register' ,  registerUser);

router.get('/logout', userAuth , logoutUser);

router.post('/forgot-password', ForgotPassword);


router.post('/reset-password/:token', ResetPassword);
  
  



module.exports = router;