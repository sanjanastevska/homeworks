const { Router } = require('express');
const actions = require('./actions');

const booksRouter = Router();
const {list, get, create, update, del} = actions;

booksRouter.get('/', list);
booksRouter.get('/:bookId', get);
booksRouter.post('/', create);
booksRouter.put('/:bookId', update);
booksRouter.delete('/:bookId', del);

module.exports =  booksRouter;