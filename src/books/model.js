//Require Mongoose
const mongoose = require('mongoose');

//Define a schema
const booksSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    genre:{
        type: String,
        required: true
    },
    updatedAt: {
        type: Date
    }
});

// Compile model from schema
const booksModel = mongoose.model('booksModel', booksSchema);

module.exports = booksModel;