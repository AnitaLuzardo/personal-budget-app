const express = require('express');
const router = express.Router();
const controller = require ('../../controllers/mainController');

router.get('/list', controller.home )

module.exports = router;