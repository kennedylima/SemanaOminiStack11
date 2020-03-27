const express = require('express');
const routes = express.Router();
const controller = require('../controller/OngController');

routes.get('/ongs', controller.getAll);
routes.post('/ongs', controller.create);

module.exports = routes;