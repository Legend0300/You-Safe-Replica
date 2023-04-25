const express = require('express');
const router = express.Router();

const { registerManager , loginManager , logoutManager , getManager } = require('../../controllers/managerController');

const managerAuth = require('../../middleware/managerAuth');

router.get('/' , getManager);

router.post('/login' , loginManager);

router.post('/register' , registerManager);

router.post('/logout' , logoutManager);

module.exports = router;