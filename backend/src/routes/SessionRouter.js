const express = require('express');
const routes = express.Router();
const controller = require('../controller/SessionController');

routes.post('/sessions', controller.create);

module.exports = routes;