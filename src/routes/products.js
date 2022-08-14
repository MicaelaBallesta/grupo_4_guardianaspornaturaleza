var express = require ("express");
var router = express.Router();
const productController = require("../controllers/productsController");


router.get("/products", productController.listado)

router.get("/products/create", productController.create)
router.post("/products/create", productController.save)

router.get("/products/:id", productController.detail)


module.exports = router;

