const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const bookRouter = require('./books/routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());

app.use('/books', bookRouter);

//Set up default mongoose connection
const startApplication = async () => {
    const mongoDbUrl = 'mongodb://localhost:27017/books';

    await mongoose.connect(mongoDbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log(`Successufully connected to MongoDB at: ${mongoDbUrl}`);

    await app.listen(PORT)
    console.log(`Listening on port ${PORT}`);

};

startApplication()

