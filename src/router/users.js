const { Router } = require('express');
const UserController = require('../controllers/users');

const userRouter = Router();

const {
  list,
  get,
  create,
  update,
  del,
  listTeens,
  listUsersOnlyWithOneName,
  listUserWithAgeAndNameQuery,
  listUsersWithCustomSearch
} = UserController;

userRouter.get('/', list);
userRouter.get('/teens', listTeens); // ENDPOINT: /users/teens
userRouter.get('/same-name', listUsersOnlyWithOneName); // ENDPOINT: /users/same-name
userRouter.get('/age-name-query', listUserWithAgeAndNameQuery); // ENDPOINT: /users/age-name-query
userRouter.get('/search', listUsersWithCustomSearch); // ENDPOINT: /users/search?name=Daniel Peshevski&start-age=13&end-age=22
userRouter.get('/:id', get);
userRouter.post('/', create);
userRouter.put('/:id', update);
userRouter.delete('/:id', del);

module.exports = userRouter;