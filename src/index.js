const express = require('express');
const bodyParser = require('body-parser');

const { connectDb } = require('./models/index') 
const indexRouter = require('./router/index');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(indexRouter);

const startApplication = () => {
  connectDb().then(async () => {
    await app.listen(PORT);
    console.log(`Listening on port ${PORT}`);
  }).catch(e => console.log('Error', e));


}

startApplication();