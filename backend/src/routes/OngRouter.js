const express = require('express');
const controller = require('../controller/OngController');
const { celebrate, Segments, Joi} =  require('celebrate');
const routes = express.Router();

routes.get('/ongs', controller.getAll);

routes.post('/ongs', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    whatsapp: Joi.string().required().min(10).max(11),
    city: Joi.string().required(),
    uf: Joi.string().required().length(2)
  })
}), controller.create);

module.exports = routes;