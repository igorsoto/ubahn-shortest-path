const config = require('../config');
const seedDb = require('./ubahn-db.json');
const MongoClient = require('mongodb').MongoClient;

(async () => {
  const client = new MongoClient(config.mongo.url, { useNewUrlParser: true });
  await client.connect();

  try {
    const db = client.db(config.mongo.database);
    const collection = db.collection(config.mongo.collection);
    await collection.deleteMany({});
    await collection.insertOne(seedDb);
  } catch (e) {
    throw e;
  } finally {
    client.close();
  }
})();