const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/userDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));



const controller = {
	register: (req, res) => {
		res.render('register');
	}
};

    module.exports = controller;