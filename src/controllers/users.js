const { models } = require('../models/index');

const { User } = models;

async function list(_, res, next) {
    try {
        const users = await models.User.find({});

        res.json(users);
    } catch(e) {
        res.send(e);
    }
  await next;
}

async function listTeens(_, res, next) {
    try {
        const getusersBtw13and19 = await User.find({}).where('age').gte(13).lt(20).exec();

        res.json(getusersBtw13and19);
    } catch(e) {
        res.send(e);
    }
  await next;
}

async function listUsersOnlyWithOneName(req, res, next) {
    try {
        const users = await User.find({}).where('name').equals(req.query['name']).select('name age').exec();

        res.json(users);
    } catch(e) {
        res.send(e);
    }
  await next;
}

async function listUserWithAgeAndNameQuery(req, res, next) {
    try {
        const users = await User.find({}).where('age').gte(13).lt(25).where('name').equals(req.query['name']).select('name age').exec();
        res.json(users);
    } catch(e) {
        res.send(e);
    }
  await next;
}

async function listUsersWithCustomSearch(req, res, next) {
    try{
        const users = await User.find({}).where('age').gte(Number(req.query['start-age'])).lte(Number(req.query['end-age'])).where('name').equals(req.query.name).exec();
        res.json(users);
    } catch(e) {
        res.send(e);
    }
  await next;
}

async function get(req, res, next) {
    try{
        const { id } = req.params;

        const user = await models.User.findById({ _id: id });
        res.json(user);
    } catch(e) {
        res.send(e);
    }
  await next;
}

async function create(req, res, next) {
  try {
    const {
      name,
      email,
      phone,
      username,
      age
    } = req.body;

    const users = await User.find({});

    const usernames = users.map(user => user.username);

    if (usernames.includes(username)) {
      res.status(400).send(`Username ${username} is already taken.`);
    } else {
      await models.User.create({ name, email, phone, username, age, createdAt: new Date() });
      res.send('Created.');
    }
  } catch(e) {
    res.send(e);
  }
  await next;
}

async function update(req, res, next) {
    try {
        const { id } = req.params;
        const {
        name,
        email,
        phone,
        username,
        age
    } = req.body;
    await models.User.updateOne({ _id: id }, { name, email, phone, username, age, updatedAt: new Date() });
    res.send('Updated.');
    } catch(e) {
        res.send(e);
    }
  await next;
}
async function del(req, res, next) {
    try{
        const { id } = req.params;
        await models.User.deleteOne({ _id: id });
        res.send('Deleted.');
    } catch(e) {
        res.send(e);
    }
  await next;
}
module.exports = {
  list,
  get,
  listTeens,
  listUsersOnlyWithOneName,
  listUserWithAgeAndNameQuery,
  listUsersWithCustomSearch,
  create,
  update,
  del,
};