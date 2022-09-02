const path = require('path');
const validationResults= require('express-validator');

const usersController = {
    index: (req, res)  => {
        res.render(path.join(__dirname, '../views/iniciosesion.ejs'))
    },
    login: (req, res) => {

    }
};

module.exports = usersController;