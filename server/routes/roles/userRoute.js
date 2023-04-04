const express = require('express');
const router = express.Router();
const { registerUser, loginUser, logoutUser, getUser } = require('../../controllers/userController');
const userAuth = require('../../middleware/userAuth');



router.get('/', userAuth , getUser);

router.post('/login' , loginUser);

router.post('/register' ,  registerUser);

router.get('/logout', userAuth , logoutUser);



module.exports = router;