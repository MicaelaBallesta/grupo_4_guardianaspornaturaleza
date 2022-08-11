var express = require ("express");
var router = express.Router();
var controller = require ("../controllers/indexController");


/* get home page */
router.get ("index", indexController.index);

router.get("/")

module.exports = router;

