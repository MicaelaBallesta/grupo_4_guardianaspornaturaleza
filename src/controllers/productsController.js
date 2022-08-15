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
    // Create - Form to create
	create: (req, res) => {
		res.render('product-create-form')
	},
	
	// Create -  Method to store
	store: (req, res) => {
		let image
		console.log(req.files);
		if(req.files[0] != undefined){
			image = req.files[0].filename
		} else {
			image = 'default-image.png'
		}
		let newProduct = {
			id: products[products.length - 1].id + 1,
			...req.body,
			image: image
		};
		products.push(newProduct)
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
		res.redirect('/');
	},

    edit:(req,res) => {
        res.render ("edicionProducto")

    },

    delete:(req,res) => {
        res.redirect("index")
    },


}

module.exports = productController;