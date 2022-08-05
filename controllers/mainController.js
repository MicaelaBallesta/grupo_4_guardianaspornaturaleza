const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");



const controller = {
	index: (req, res) => {
		res.render('index');
	},
	search: (req, res) => {
		res.render('results')
	},
};

// app.get('/', (req,res)=>{
// res.render(__dirname + '/views/index.ejs');
// }); 
 
module.exports = controller;


