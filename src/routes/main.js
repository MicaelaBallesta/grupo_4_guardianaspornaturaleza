var express = require ("express");
var router = express.Router();
var controller = require ("../controllers/indexController");
const {body, check} = require ("express-validator")

/* get home page */
router.get ("/", indexController.index);

module.exports = router;

