let express = require ('express');
let router = express.Router ();
const multer = require ('multer');
const path = require ('path');

// router.get ('/idProducto', function (req, res) {
 //   res.send ("Bienvenidos al detalle del producto" +
 //   req.params.idProducto);
 // });
//   router.get ('/idProducto', function (req, res) {
//    res.send ("Bienvenidos al detalle del producto" +
//     req.params.idProducto);
//  });

//  router.get ('/idProducto/comentarios/:idComentario?', function (req, res) {
//    res.send ("Bienvenidos al comentario del producto" +
//    req.params.idProducto);
//  });


// ************ Controller Require ************
const productsController = require('../controllers/productsController');


const storage = multer.diskStorage({
  destionation: function (req, file, cb) {
      cb (null, "public/images/products")
  },
  filename: function (req, file, cb) {
      cb (null,file.filename + "-" + Date.now() + path.extname(file.originalname))
  }
});
var upload = multer ({storage: storage})


/*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.index); 

/*** CREATE ONE PRODUCT ***/ 
router.get('/create/', productsController.create); 
router.post('/', upload.any(), productsController.store); 


/*** GET ONE PRODUCT ***/ 
router.get('/:id/', productsController.detail); 

/*** EDIT ONE PRODUCT ***/ 
router.get('/:id/edit', productsController.edit); 
router.put('/:id', upload.any () ,productsController.update); 


/*** DELETE ONE PRODUCT ***/ 
router.delete('/:id', productsController.destroy); 



  module.exports = router;
