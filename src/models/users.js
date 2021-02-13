const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required.'],
  }, 
  email: {
    type: String,
    unique: true
  },
  phone: {
    type: String,
  },
  age: {
    type: Number,
    min: [13, 'At least 13 years']
  },
  username: {
    type: String,
    minlength: [8, 'At least 8 chars'],
    maxlength: [16, 'Max length is 16 chars'],
    unique: true
  },
  createdAt: {
    type: Date,
    required: true
  },
  updatedAt: Date
});

const User = model('user', userSchema);
module.exports = User;