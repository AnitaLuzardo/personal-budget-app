const express = require('express');
const router = express.Router();
const controllers = require ('../../controllers/mainController');

router.get('/list', controllers.home )

router.put('/movements/save', controllers.saveMovements)

module.exports = router;