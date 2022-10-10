// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require("multer");
const path = require("path");

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

// ************ Multer ************
const storage = multer.diskStorage({ 
    destination: function (req, file, cb) {
       cb(null, 'public/images/products');
    },
    filename: function (req, file, cb) {
       cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({storage: storage});

/*** GET ALL PRODUCTS ***/ 
/* /products */
router.get('/', productsController.index);

/*** CREATE ONE PRODUCT ***/ 
/* /products/create */
router.get('/create', productsController.create);
router.post('/', upload.single("image"), productsController.processCreate);

/*** GET ONE PRODUCT ***/ 
router.get('/detail/:id', productsController.detail);

/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id', productsController.edit); 
router.patch('/edit/:id', upload.single("image"), productsController.proccesEdit); 

/*** DELETE ONE PRODUCT***/ 
router.delete('/delete/:id', productsController.destroy);


module.exports = router;

