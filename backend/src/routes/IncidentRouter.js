const express = require('express');
const routes = express.Router();
const controller = require('../controller/IncidentController');

routes.get('/incidents', controller.getAll);
routes.post('/incidents', controller.create);
routes.delete('/incidents/:id', controller.delete);

module.exports = routes;