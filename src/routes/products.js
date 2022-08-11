var express = require ("express");
var router = express.Router();
/*
const productController = require("../controllers/productsController");

/* get home page */
router.get ("/tienda", productsController.index);

router.get("/catalogo", productsController.catalogo);

router.get("/detail/:idProducto", productsController.detail);

router.get("/productCart", productsController.cart)

module.exports = router;