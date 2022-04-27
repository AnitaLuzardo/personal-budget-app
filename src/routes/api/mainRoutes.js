const express = require('express');
const router = express.Router();
const controllers = require ('../../controllers/mainController');

router.get('/list', controllers.home);

router.post('/movements/save', controllers.saveMovements);

router.delete('/movements/delete', controllers.deleteMovement);

router.put('/movements/update', controllers.updateMovements);

module.exports = router;