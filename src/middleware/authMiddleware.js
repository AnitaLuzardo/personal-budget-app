function authMiddleware(req, res, next) {
    const home = '/';

    const login = '/login';

    const register = '/register';

    if (!req.session.userToLogin && req.url == home) {
        res.redirect('/login');
    } else if (req.session.userToLogin && req.url == login){
        res.redirect('/');
    } else if (req.session.userToLogin && req.url == register) {
        res.redirect('/');
    } else {
        next();
    }
}
console.log(authMiddleware);

module.exports = authMiddleware;