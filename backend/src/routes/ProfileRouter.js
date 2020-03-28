const express = require('express');
const routes = express.Router();
const controller = require('../controller/ProfileController');
const { celebrate, Segments, Joi} =  require('celebrate');

routes.get('/profile', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required()
  }).unknown()
}), controller.getAll);

module.exports = routes;