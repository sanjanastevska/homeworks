const booksModel = require('./model');

//List

async function list(_, res, next){
    const books = await booksModel.find({});
    res.json(books);

    await next;
}

// read books by id
async function get(req, res, next){
    try{
        const { bookId } = req.params;

        const findBookById = await booksModel.findById({_id: bookId});

        res.json(findBookById);
    } catch(err){
        res.send('Error', err);
    }

    await next;
}

async function create (req, res, next){
    try{
        const { title, author, summary, genre } = req.body;
        res.json(await booksModel.create({title, author, summary, genre}));
    } catch(err){
        res.send('Error: ', err);
    }

    await next;
}

// Update book by ID

async function update(req, res, next) {
    const { bookId } = req.params;
    const { title,  author, summary, genre } = req.body;

    res.json(await booksModel.updateOne({_id:bookId }, {title, author, summary, genre, updatedAt: new Date() }));

    await next;
}

//delete book by ID

async function del(req, res, next){
    const {  bookId } = req.params;

    res.json(await booksModel.deleteOne({_id:  bookId}));

    await next;
}

module.exports = {
    list,
    create,
    get,
    update,
    del
}