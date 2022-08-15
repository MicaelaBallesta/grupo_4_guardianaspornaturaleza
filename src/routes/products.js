var express = require ("express");
var router = express.Router();
const productController = require("../controllers/productsController");





router.get("/tienda", productController.index)

router.get("/products/create", productController.create)
router.post("/products/create", productController.store)

router.get("/products/:id", productController.detail)


module.exports = router;

