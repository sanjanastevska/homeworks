//source code od lecture8 i ovozmozite podatocite koi gi prakjate od POSTMAN da se 
//zapishtal lokalno vo file (json file). Iskoristete go znaenjeto za filesystem.

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const userJSONFilePath = './db/users.json';
let users = require(userJSONFilePath);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

// CRUD operation(create, read, update, delete)
// HTTP operation(post, get, put, delete)

//Read
app.get('/users', (req, res) => {
    res.send(users)
    console.log(users)
})


app.get('/users/:id', (req, res) => {
    const { id } = req.params;
    const userIndex = users.findIndex(user => user.id === id) > -1;

    if (userIndex) {
        const foundUser = users.find(user => user.id === id)
        res.send(foundUser)
        console.log(foundUser)
    } else {
        res.send(`User with id ${id} is not found`);
    }
});

//Create
app.post('/users', (req, res) => {
    const {
        firstName,
        lastName,
        userName
    } = req.body;

    const requestPayLoad = {
        id: String(users.length + 1),
        firstName,
        lastName,
        userName
    }

    users.push(requestPayLoad);
    res.send({ body: users });

    fs.writeFileSync(userJSONFilePath, JSON.stringify(users, null, 2), 'utf-8');
});
  

//Update
app.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const {
        firstName,
        lastName,
        userName
    } = Object.assign({}, req.body);

    const userIndex = users.findIndex(user => user.id === id);

    if (userIndex > -1) {
        if (req.body.id) {
            res.send({ error: "Id cannt be overwritten" })
        } else {
            users[userIndex] = {
                id,
                firstName,
                lastName,
                userName
            }
            res.send({ body: users })
            fs.writeFileSync(userJSONFilePath, JSON.stringify(users, null, 2), 'utf-8');
        }
    } else {
        res.send(`User with id ${id} is not found`);
    }
});

//delete
app.delete('/users/:id', (req, res) => {
    const { id } = req.params;

    const findIndex = users.findIndex(user => user.id === id);

    if (findIndex > -1) {
        users.splice(findIndex, 1);
        res.send({ body: users })

        fs.writeFileSync(userJSONFilePath, JSON.stringify(users, null, 2), 'utf-8');
    } else {
        res.send(`User with id ${id} is not found`);
    }
})

app.listen(PORT, () => {
    console.log(`Listening on ${PORT} port`);
})


