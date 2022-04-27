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
    },

    deleteMovement: async(req, res) => {
        try {
            await db.movements.destroy({ where: { id: req.body.id }});
            const updatedMovements = await db.movements.findAll({ where: {id_user: req.session.userToLogin.id}});
            res.json(updatedMovements);
       } catch (error) {
            console.log('Error del borrado', error);
        }
    },

    updateMovements: async (req, res) => {
        try {
            const formMovement = req.body;
            console.log(formMovement);
            const movementUpdate = {
                concept: formMovement.concept,
                amount: formMovement.amount,
                register_date: formMovement.register_date
            }

            const movement = await db.movements.update(movementUpdate, { where: { id: formMovement.id }});
            // movement.save();git
            // const movements = await db.movements.findAll({ where: { id_user: req.session.userToLogin.id }});
            const movements = await db.movements.findAll({ where: { id_user: 2 }}); // esto es pruebaaaaa

            res.json(movements);
        } catch (error) {
            console.log('Error', error);
        }
        
    }
}

module.exports = mainController;