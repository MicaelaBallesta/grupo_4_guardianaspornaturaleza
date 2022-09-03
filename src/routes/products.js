const express = require('express');
const router = express.Router();
const path = require("path");
const multer = require('multer');
const productsController = require('../controllers/productsController');

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, 'public/images/products')
    },
    filename: function(req,file,cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
var upload = multer({storage: storage})

//---------------RUTAS CARRITO DE COMPRAS Y DETALLE PRODUCTO-------------------------------------------------//
router.get('/carritodecompras' , productsController.carritoCompra);
router.get('/detalle/:id' , productsController.detalleproducto);

//--------------FORMULARIO CREAR PRODUCTOS-----------------------//
router.get('/create', productsController.create); 
router.post('/create', upload.any(), productsController.store);

//--------------------FORMULARIO EDITAR PRODUCTOS-------------------//
router.get('/edit/:id', productsController.edit); // formulario edit
router.put('/edit/:id', upload.any(), productsController.update);

//-----------------------ELIMINAR PRODUCTOS---------------------------//
router.delete('/delete/:id', productsController.delete)

router.get('/:category' , productsController.showProductCategory);
router.get('/:category/:subcategory' , productsController.showProductSubcategory);

module.exports = router;
