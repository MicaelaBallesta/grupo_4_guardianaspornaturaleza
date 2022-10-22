const fs = require('fs');
const path = require('path');


const controller = {
	register: (req, res) => {
		res.render('users/register');
	},
	login: (req, res) => {
		res.render('users/login');
	}
};
    module.exports = controller;