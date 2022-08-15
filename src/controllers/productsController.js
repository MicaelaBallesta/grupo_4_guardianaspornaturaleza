const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../database/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");



const controller = {

    // Root - Show all products
	index: (req, res) => {
		res.render('/tienda', {
			products,
			toThousand
		})
	},
    

    detail: (req,res) => {
        
        
        
        
        res.render ("productDetail")

    },
    
    create:(req,res) => {
        let productoNuevo = {
                nombreProducto:req.body.nombre,
                historia: req.body.historia,
                image: re.body.image,
                comunidad: req.body.categoria,
                categoria: req.body.categoria,
                caracteristicas:req.boy.caracteristicas,
                precio: req.body.precio
        };
        res.send(/creacionProducto, (productoNuevo = {
            nombreProducto:req.body.nombre,
            historia: req.body.historia,
            image: re.body.image,
            comunidad: req.body.categoria,
            categoria: req.body.categoria,
            caracteristicas:req.boy.caracteristicas,
            precio: req.body.precio
    })



        res.render ("creacionProducto")

    },

    save:(req,res) => { 

    },

    edit:(req,res) => {
        res.render ("edicionProducto")

    },

    delete:(req,res) => {
        res.redirect("index")
    },


}

module.exports = productController;