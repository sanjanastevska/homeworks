//express ramka vo node.js

const express = require('express');
const bodyParser = require('body-parser');

let userDb = require('./db/users.json');

//instanciranje na aplikacija
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: false}));   
app.use(bodyParser.json())

// CRUD operation(create, read, update, delete)
// HTTP operation(post, get, put, delete)

//List
app.get('/users', (req, res) => {
    res.send({body: userDb});
});

//da se dobie eden user
app.get('/users/:id', (req, res) => {
    const { id } = req.params;

    const isFound = userDb.findIndex(user => user.id === id) > -1;

    if(isFound){
        const foundUser = userDb.find(user => user.id === id);
        res.send({body: foundUser});
    }else{
        res.send({error: `User ${id} is not found`});
    }  
});

//Create
app.post('/users', (req, res) => {  
    const {
        firstName,
        lastName,
        userName
    } = req.body;

    const requestPayload = {
        id: String(userDb.length + 1),
        firstName,
        lastName,
        userName
    }

    userDb.push(requestPayload);
    res.send({body: userDb})
});

//Update
  // Напишете го остатокот од фунцијата која што треба да овозможи ажурирање на податоците на корисникот според внесениот id
  // Овозможете проверка на валидација кој што треба да врати грешка доколку корисникот не постои со внесеното id, во спротивно,
  // да овозможи ажурирање
app.put('/users/:id', (req,res) => {
    const id = req.params.id;
    const {
        firstName,
        lastName,
        userName
    } = Object.assign({}, req.body);

    const isFound = userDb.findIndex(user => user.id === id) > -1;

    if(isFound){
        const foundUser = userDb.find(user => user.id === id);
        foundUser.firstName = firstName;
        foundUser.lastName = lastName;
        foundUser.userName = userName;
        res.send({body: userDb});
    }else{
        res.send({error: `User ${id} is not found`});
    }   
})

//Delete
// Напишете го остатокот од фунцијата која што треба да овозможи бришење на корисник според внесениот id
app.delete('/users/:id',  (req,res) => {
    const removeUser = req.params.id;
    newUserDb = userDb.filter(user => {
        return user.id != removeUser;
    })
    userDb = newUserDb;
    res.send({body: userDb})
})

app.listen(PORT, () => {
    console.log(`Listening on ${PORT} port`);
})