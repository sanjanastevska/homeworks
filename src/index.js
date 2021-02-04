const express = require('express');
const bodyParser = require('body-parser');

const indexRouter = require('./router/index');

const app = express();
const PORT = process.env.PORT || 3000;

// const usersRouter = require('./users/routes');
// const clientsRouter = require('./clients/routes');

app.use(bodyParser.urlencoded({extended: false}));   
app.use(bodyParser.json())

// app.use(usersRouters);
// app.use(clientsRouters);
app.use(indexRouter);

app.listen(PORT, () => {
    console.log(`Listening on ${PORT} port`);
})

// Vo lecture9 da dodadete CRUD operation za clients i da bidat 
// zapazeni site raboti koi gi pravevme so users primerov. 
// Treba da bide razlicen requestPayload, i treba da koristite hat za random ids. 
// Site zapisi treba da se zapishuvaat vo json file isto kako i users, soodvetno.
