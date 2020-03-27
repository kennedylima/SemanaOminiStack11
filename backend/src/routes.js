const express = require('express');
const routes = express.Router();
const ongs = require('./routes/OngRouter');
const session = require('./routes/SessionRouter');
const profile = require('./routes/ProfileRouter');
const incidents = require('./routes/IncidentRouter');

routes.use(ongs);
routes.use(profile);
routes.use(session);
routes.use(incidents);

module.exports = routes;