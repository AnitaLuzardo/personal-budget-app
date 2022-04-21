const express = require('express');
const router = express.Router();
const controller = require ('../controllers/authController');

router.get('/login', controller.viewsLogin);

router.get('/register', controller.viewsRegister);

module.exports = router;