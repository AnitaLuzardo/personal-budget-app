const req = require("express/lib/request");

const authController = {
    viewsLogin: (req, res) => {
        res.render('auth/login');
    },

    viewsRegister: (req, res) => {
        res.render('auth/register')
    },

    login: async(req, res) => {

    },
    
    register: (req, res) => {
        console.log('entrando en el post register');
        // res.send({ message: 'probando'});
        res.sendStatus(500).send({ error: 'probando error'});
    }
};

module.exports = authController;