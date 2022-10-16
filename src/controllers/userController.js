const fs = require('fs');
const path = require('path');


const controller = {
	register: (req, res) => {
		res.render('users/register');
	}
};

    module.exports = controller;