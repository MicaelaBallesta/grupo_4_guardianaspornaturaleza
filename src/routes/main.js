var express = require ("express");
var router = express.Router();
var controller = require ("../conttretrerollers/indexController");


/* get home page */ // recordar que el nombre del controller es como la variable que lo requiere 

router.get ("/", controller.index);

// router.get ("/catalogo", controller.catalogo);

// router.get("/tienda", controller.tienda);

// router.get("/nosotras", controller.nosotras);

// router.get("/impacto", controller.impacto);


module.exports = router;

