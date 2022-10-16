// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const usersController = require('../controllers/userController');

router.get('/', usersController.register); 

module.exports = router;