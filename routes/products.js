let express = require ('express');
let router = express.Router ();
const path = require ('path');

router.get ('/idProducto', function (req, res) {
    res.send ("Bienvenidos al detalle del producto" +
    req.params.idProducto);
  });
//   router.get ('/idProducto', function (req, res) {
//    res.send ("Bienvenidos al detalle del producto" +
//     req.params.idProducto);
//  });

//  router.get ('/idProducto/comentarios/:idComentario?', function (req, res) {
//    res.send ("Bienvenidos al comentario del producto" +
//    req.params.idProducto);
//  });

  module.exports = router;
