const mainController = {
    viewHome: (req, res) => {
        console.log(req.session);
        res.render('home', { user: req.session.userToLogin });
    },

    home: (req, res) => {
        
    }
}

module.exports = mainController;