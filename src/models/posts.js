const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const postSchema = new Schema({
    title: {
      type: String,
      required: [true, 'Title is required.'],
    }, 
    body: {
      type: String,
      minlength: [5, 'At least 5 chars'],
      maxlength: [15, 'Max 15 chars'],
    },
    category: {
      type: String
    },
    likes: {
      type: Number,
      default: 0 
    },
    tags: {
        type: [String]
    },
    user: [
      {
        name: {
            type: String,
        },
        status: String
      }
    ],
    createdAt: {
      type: Date,
    },
    updatedAt: {
      type: Date,
    }
  });
  
  const Post = model('post', postSchema);
  module.exports = Post;