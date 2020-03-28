const knex = require('knex');
const configuration = require('../../knexfile');
const isTestEnvironment = process.env.NODE_ENV === 'test';

const connection = isTestEnvironment ? configuration.test : configuration.development;

module.exports = knex(connection);