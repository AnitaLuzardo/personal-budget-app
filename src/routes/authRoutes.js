const express = require('express');
const router = express.Router();
const controller = require ('../controllers/authController');

router.get('/login', controller.viewsLogin);

router.get('/register', controller.viewsRegister);

router.get('/logout', controller.logout);

module.exports = router;