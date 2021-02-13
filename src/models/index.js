const mongoose = require('mongoose');

const User = require('./users');
// const Post = require('./posts');

require('dotenv').config();

const { DATABASE_URL, DB_DOMAIN, DB_PORT, DB_HOST, DB_NAME } = process.env;

const connectDb = () => {
  const dbUrl = `${DB_DOMAIN}://${DB_HOST}:${DB_PORT}/${DB_NAME}`;

  console.log(`Successfully connected to MongoDB at ${DATABASE_URL}`);
  
  return mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
}

const models = {
  User,
//   Post
};

module.exports = { models, connectDb };