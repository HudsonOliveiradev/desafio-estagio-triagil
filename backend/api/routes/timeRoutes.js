const timeController = require('../controllers/timeController');


const express = require('express');
const routers = express.Router();

routers.post('/', timeController.criarTime);
routers.get('/', timeController.getListarTimes);
routers.get('/:user', timeController.getBuscarTimeDoUsuario);

module.exports = routers;