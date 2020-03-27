const connection = require('../database/connection');
const TABLE = 'incidents';

module.exports = {
  async getAll (request, response) {
    const { page = 1 } = request.query;
    
    const [count] = await connection(TABLE).count();
    
    const incidents = await connection(TABLE)
    .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
    .limit(5)
    .offset((page - 1) * 5)
    .select([
      'incidents.*', 
      'ongs.name', 
      'ongs.email',
      'ongs.whatsapp',
      'ongs.city',
      'ongs.uf',
    ]);

    response.header('X-Total-Count', count['count(*)'])
    return response.json(incidents);
  },
  async create (request, response) {
    const { body, headers } = request;
    const ong_id = headers.authorization;

    const [ id ] = await connection(TABLE).insert({
      ...body,
      ong_id
    });

    return response.json({ id });
  },
  async delete (request, response) {
    const { params, headers } = request;
    const { id } = params;
    const ong_id = headers.authorization;

    const incident = await connection(TABLE)
    .where('id', id)
    .select('ong_id')
    .first();

    if( incident.ong_id !== ong_id ) {
      return response.status(401).json({ error: 'Operation not permitted.' });
    }

    await connection(TABLE).where('id', id).delete();

    return response.status(204).send();
  },
}