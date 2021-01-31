// const usersRoutes = require('../users/routes');
const { Router } = require('express');

// const userRoutes = require('../users/routes');
const clientsRoutes = require('../clients/routes');

const indexRouter = Router();

// indexRouter.use(userRoutes);
indexRouter.use(clientsRoutes);

module.exports = indexRouter;  //da ne bide vo objekt zasto use e funkcija