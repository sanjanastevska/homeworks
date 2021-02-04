
const { Router } = require('express');

const actions = require('./action');

const { list, get, create, update, del } = actions;
const clientsRouter = Router();

clientsRouter.get('/clients', list);
clientsRouter.get('/clients/:id', get);
clientsRouter.post('/clients', create);
clientsRouter.put('/clients/:id', update);
clientsRouter.delete('/clients/:id', del);


module.exports = clientsRouter;