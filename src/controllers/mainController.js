const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/product.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));



const controller = {
	index: (req, res) => {
		res.render('index');
	}
};

    module.exports = controller;

/*	head: (req,res) => {
        res.render(path.join(__dirname, '../views/head.ejs'))
    },
    header: (req,res) => {
        res.render(path.join(__dirname, '../views/header.ejs'))
    },
    footer: (req,res) => {
        res.render(path.join(__dirname, '../views/footer.ejs'))
    },
	search: (req, res) => {
		res.render('results')
	},
};

// app.get('/', (req,res)=>{
// res.render(__dirname + '/views/index.ejs');
// }); */
 



