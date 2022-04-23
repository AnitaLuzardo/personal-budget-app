const req = require("express/lib/request");
const db = require('../../database/models');
const bcrypt = require('bcryptjs');

const authController = {
    viewsLogin: (req, res) => {
        res.render('auth/login');
    },

    viewsRegister: (req, res) => {
        res.render('auth/register')
    },

    login: async(req, res) => {
        const email = req.body.email;
        const password = req.body.pwd;

        const userToLogin = await db.users.findOne({ where: { email: email } });

        try {
            if(userToLogin === undefined) {
                res.status(401).json({error: 'Los datos no coinciden'});
                return false;
            }

            const bool = bcrypt.compareSync(password, userToLogin.pwd);

            if(!bool) {
                res.status(401).json({error: 'Los datos no coinciden'});
                return false;
            }
        } catch (error) {
            console.log('ERROR:', e)
            res.sendStatus(500);
        }

    },
    
    register: async (req, res) => {        
        const userNew = req.body
        
        try {
            const userInDb = await db.users.findOne({ where: { email: userNew.email } });

            if (userInDb) {
                res.status(401).json({error: 'El email ya existe'});
                return false;
            }
            
            const salt = bcrypt.genSaltSync(10);
            userNew.pwd = bcrypt.hashSync(req.body.pwd, salt);

            await db.users.create(userNew);
            res.send();
        } catch (e) {
            console.log('ERROR:', e)
            res.sendStatus(500);
        }
    }
};

module.exports = authController;