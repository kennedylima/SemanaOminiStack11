const crypto = require('crypto');
const connection = require('../database/connection');
const TABLE = 'ongs';

module.exports = {
  async getAll(request, response) {
    const ongs = await connection(TABLE).select('*');
    return response.json(ongs);
  },
  async create(request, response) {
    const { body } = request;
    const id = crypto.randomBytes(4).toString('HEX');

    await connection(TABLE).insert({
      id,
      ...body
    });

    return response.json({ id });
  }
}