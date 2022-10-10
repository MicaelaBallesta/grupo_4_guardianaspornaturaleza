// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const mainController = require('../controllers/mainController');

router.get('/', mainController.index); 


/*
router.get('/head' , mainController.head);
router.get('/header' , mainController.header);
router.get('/footer' , mainController.footer);
router.get('/search', mainController.search); */

module.exports = router;



