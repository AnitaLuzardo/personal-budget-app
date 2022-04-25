const db = require('../../database/models');

const mainController = {
    viewHome: async (req, res) => {
        console.log(req.session);
        try {
            const movements = await db.movements.findAll({ where: { id_user: req.session.userToLogin.id }});
            res.render('home', { user: req.session.userToLogin, movements});
        } catch (e) {
            console.log('Error', e);
        }
    },

    home: (req, res) => {
        
    },

    saveMovements: async (req, res) => {
        const newMovement = req.body;
        newMovement.id_user = req.session.userToLogin.id;
        console.log(newMovement);

        try {
            await db.movements.create(newMovement);

            const movements = await db.movements.findAll({ where: { id_user: req.session.userToLogin.id }});

            res.json(movements);
        } catch (error) {
            console.log('error', error)
        }
    }
}

module.exports = mainController;