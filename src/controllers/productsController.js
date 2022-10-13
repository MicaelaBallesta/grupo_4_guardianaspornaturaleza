const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/product.json');
/* const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8')); */ 

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	index: (req, res) => {
		let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		res.render('productslist', {
			products
		})
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		let id = req.params.id
		let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		let product = products.find(product => product.id == id)
		res.render('productDetail', {
			product
		})
	},

	// Create - Form to create
	create: (req, res) => {
		res.render('productCreateForm')
	},
	
	// Create -  Method to store
	processCreate: (req, res) => {
		/* console.log(req.file); */
		let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		console.log(req.body);
		let nuevoProducto = {
			id: products[products.length - 1].id + 1,
			nombreProducto: req.body.nombreProducto,
			historia: req.body.historia,
			image: req.file ? req.file.filename : "default-image.png",
			comunidad:(req.body.comunidad),
			categoria: req.body.categoria,
			caracteristicas: req.body.caracteristicas,
			precio: parseInt(req.body.precio)
		}
		console.log(nuevoProducto);
		products.push(nuevoProducto);
		let productosAGuardar = JSON.stringify(products, null, " ");
		fs.writeFileSync(productsFilePath, productosAGuardar);

		res.redirect("/productslist");
	},

	// Update - Form to edit
	edit: (req, res) => {
		let id = req.params.id
		let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		let productToEdit = products.find(product => product.id == id)
		res.render('productsEditForm', {productToEdit})
	},
	// Update - Method to update
	proccesEdit: (req, res) => {
		let id = req.params.id;
		let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		let productToEdit = products.find(product => product.id == id);

		let productToSave = {
			id: productToEdit.id,
			nombreProducto: req.body.nombreProducto,
			historia: req.body.historia,
			image: req.file ? req.file.filename : productToEdit.image,
			comunidad:(req.body.comunidad),
			categoria: req.body.categoria,
			caracteristicas: req.body.caracteristicas,
			precio: parseInt(req.body.precio)
			
			/* ...req.body, */
		}

		let indice = products.findIndex(product => {
			return product.id == id
		})
		products[indice] = productToSave;
		let productosAGuardar = JSON.stringify(products, null, " ");
		fs.writeFileSync(productsFilePath, productosAGuardar);
		res.redirect("/")
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		let id = req.params.id;
		let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		let finalProducts = products.filter(product => product.id != id);

		fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, ' '));
		res.redirect("/")
	}
};

module.exports = controller;


/*

const controller = {
	// Root - Show all products
	index: (req, res) => {
		res.render('productslist');
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		res.render('detail');
	},

	// Create - Form to create
	create: (req, res) => {
		res.render('product-create-form');
	},
	
	// Create -  Method to store
	store: (req, res) => {
		// Do the magic
	},

	// Update - Form to edit
	edit: (req, res) => {
		res.render('product-edit-form');
	},
	// Update - Method to update
	update: (req, res) => {
		// Do the magic
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		// Do the magic
	}
};

module.exports = controller;*/ 