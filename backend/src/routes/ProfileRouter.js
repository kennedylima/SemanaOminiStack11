const express = require('express');
const routes = express.Router();
const controller = require('../controller/ProfileController');

routes.get('/profile', controller.getAll);

module.exports = routes;