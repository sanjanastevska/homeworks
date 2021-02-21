const mongoose = require('mongoose');

const User = require('./users');
const Post = require('./posts');

require('dotenv').config();

const { DATABASE_URL, DB_DOMAIN, DB_PORT, DB_HOST, DB_NAME } = process.env;
//ne znam poradi koja pricina ne mi se konektirase do mongoDb(mi javuvase Invalid connection string), pa zato go hardkodnav.

const connectDb = () => {
  const dbUrl = "mongodb://localhost:27017/node-express-monogodb-server";
  
  return mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
}

const models = {
  User,
  Post
};

module.exports = { models, connectDb };