const mongoose = require('mongoose');
const PointSchema = require('./utils/PointSchema');

const UserSchema = new mongoose.Schema({
  email: String,
  name: String,
  avatar_url: String,
  password: String, 
  location: {
    type: PointSchema,
    index: '2dsphere',
  }
});

//"User" é o nome que ele terá dentro do banco de dados
module.exports = mongoose.model('User', UserSchema);