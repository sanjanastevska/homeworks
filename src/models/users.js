const mongoose = require('mongoose');

const { Schema, model } = mongoose;


const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required.'],
  }, 
  // validator na email ne mi raboti
  email: {
    type: String,
    unique: true,
    validate: {
      validator: function(v) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      message: props => `${props.value} is not a valid email!`
    },
    required: [true, 'Email is required'],
  },
  phone: {
    type: String,
    validate: {
      validator: function(v) {
        return /\d{3}-\d{3}-\d{4}/.test(v);
      },
      message: props => `${props.value} is not a valid phone number!`
    },
    required: [true, 'User phone number required']
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
    type: Date
  },
  updatedAt: Date
});

const User = model('user', userSchema);
module.exports = User;