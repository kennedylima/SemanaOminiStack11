const generateUniqueId = require('../utils/generateUniqueId');
const connection = require('../database/connection');
const TABLE = 'ongs';

module.exports = {
  async getAll(request, response) {
    const ongs = await connection(TABLE).select('*');
    return response.json(ongs);
  },
  async create(request, response) {
    const { body } = request;
    const id = generateUniqueId();

    await connection(TABLE).insert({
      id,
      ...body
    });

    return response.json({ id });
  }
}