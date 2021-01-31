const fs = require('fs');
const path = require('path');
const hat = require('hat');

const relativePathToClientsFile = path.join(__dirname, '..', 'db', 'clients.json');
const clientsDb = require(relativePathToClientsFile);


//List
async function list(req, res, next) {
    res.send({ body: clientsDb });

    await next;
}

//Get
async function get(req, res, next) {
    const { id } = req.params;
    const isFound = clientsDb.findIndex(client => client.id === id) > -1;

    if (isFound) {
        const foundUser = clientsDb.find(client => client.id === id);
        res.send({ body: foundUser });
    } else {
        res.send({ error: `Clients ${id} is not found.` });
    }

    await next;
}

//Create
async function create(req, res, next) {
    const {
        firstName,
        lastName,
        age,
        address: {
            streetAddress,
            city,
            postalCode
        },
        phoneNumber
    } = req.body;

    const requestPayload = {
        id : hat(),
        firstName,
        lastName,
        age,
        address: {
            streetAddress,
            city,
            postalCode
        },
        phoneNumber
    }

    clientsDb.push(requestPayload)
    
    fs.writeFileSync(relativePathToClientsFile, JSON.stringify(clientsDb, null, 2));

    res.send({ body: clientsDb });

    await next;
}

//Update
async function update(req, res, next) {
    const { id } = req.params;
    const {
        firstName,
        lastName,
        age,
        address: {
            streetAddress,
            city,
            postalCode
        },
        phoneNumber
    } = Object.assign({}, req.body);

    console.log('Put id', id)

    const clientIndex = clientsDb.findIndex(client => client.id === id);

    if (clientIndex > -1) {
        if (req.body.id) {
            res.send({ error: "Id cann't be overwritten." });
        } else {
            const toUpdateData = {
                id,
                firstName,
                lastName,
                age,
                address: {
                    streetAddress,
                    city,
                    postalCode
                },
                phoneNumber
            }
            clientsDb[clientIndex] = toUpdateData;

            fs.writeFileSync(relativePathToClientsFile, JSON.stringify(clientsDb, null, 2));

            res.send({ body: clientsDb });
        }
    } else {
        res.send({ error: `client ${id} is not found.` });
    }

    await next;
}

//Delete
async function del(req, res, next) {
    const { id } = req.params;
    const clientIndex = clientsDb.findIndex(user => user.id === id);

    if (clientIndex > -1) {
        clientsDb.splice(clientIndex, 1);

        fs.writeFileSync(relativePathToClientsFile, JSON.stringify(clientsDb, null, 2));

        res.send({ body: `client ${id} has been removed.` });
        
    } else {
        res.send({ error: `client ${id} is not found.` });
    }

    await next;
}

module.exports = {
    list,
    get,
    create,
    update,
    del
};