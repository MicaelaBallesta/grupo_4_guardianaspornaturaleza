const express = require('express');
const usersController = require('../controllers/usersController');

var router = express.Router();

router.get('/iniciosesion' , usersController.index);
router.post('/iniciosesion' , usersController.login);

module.exports = router;

