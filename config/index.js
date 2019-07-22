require('dotenv').config();

module.exports = {
  port: process.env.PORT,
  mongo: {
    url: process.env.MONGO_URL,
    database: process.env.MONGO_DATABASE_NAME,
    collection: process.env.MONGO_COLLECTION_NAME
  }
}