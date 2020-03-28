const express = require('express');
const routes = express.Router();
const controller = require('../controller/IncidentController');
const { celebrate, Segments, Joi} =  require('celebrate');

routes.get('/incidents', celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number()
  })
}), controller.getAll);

routes.post('/incidents', controller.create);

routes.delete('/incidents/:id', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required()
  })
}), controller.delete);

module.exports = routes;