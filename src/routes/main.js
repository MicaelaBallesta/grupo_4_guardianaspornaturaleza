var express = require ("express");
const indexController = require("../controllers/indexController");
var router = express.Router();
var controller = require ("../controllers/indexController");


/* get home page */
router.get ("/", indexController.index);

router.get ("/catalogo", indexController.catalogo);

router.get("/tienda", indexController.tienda);

router.get("/")


module.exports = router;

