const config = require('../config');
const MongoClient = require('mongodb').MongoClient;

module.exports = class StationsRepository {
  async list() {
    const client = new MongoClient(config.mongo.url, { useNewUrlParser: true });
    await client.connect();

    try {
      const db = client.db(config.mongo.database);
      return await db.collection(config.mongo.collection).find().toArray();
    } catch (e) {
      throw e;
    } finally {
      client.close();
    }
  }
}