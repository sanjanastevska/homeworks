const { models } = require('../models/index');

const { Post } = models;

async function list(_, res, next) {
    try {
        const users = await models.Post.find({});

        res.json(users);
    } catch(e) {
        res.send(e);
    }
  await next;
}

async function theMostLikedPosts(_, res, next) {
  try {
      const getTheMostLikedPosts= await Post.find({}).sort({ likes: -1 }).exec();

      res.json(getTheMostLikedPosts);
  } catch(e) {
      res.send(e);
  }
await next;
}

async function getCommentsByUser(req, res, next) {
  try {
      const queryName = req.query['name'];

      const getComments = await Post.find({}).where({'user.name' : queryName}).select("user.status").exec();

      res.json(getComments);
  } catch(e) {
      res.send(e);
  }
await next;
}

async function postAboutNewsAndTechnology(_, res, next) {
  try {
      const getpostAboutNewsAndTechnology = await Post.find({'category' : ['News', 'Technology']}).exec();

      res.json(getpostAboutNewsAndTechnology);
  } catch(e) {
      res.send(e);
  }
await next;
}

async function recordsInTheLastThreeMonths(_, res, next) {
  try {
      const todayDate = new Date();
      const datePriorThreeMonths =(new Date(todayDate.setMonth(todayDate.getMonth() - 3)));
      
      const getrecordsInTheLastThreeMonths = await Post.find({'createdAt' : {$gte:datePriorThreeMonths, $lte:todayDate}}).exec();
      
      res.json(getrecordsInTheLastThreeMonths);
  } catch(e) {
      res.send(e);
  }
await next;
}

async function listPostsWithCustomSearch(req, res, next) {
  try{
      const posts = await Post.find({}).where('likes').gte(13).lt(150).select('title likes').exec();
      
      res.json(posts);
  } catch(e) {

      res.send(e);
  }
await next;
}

async function get(req, res, next) {
    try{
        const { id } = req.params;

        const post = await models.Post.findById({ _id: id });
        res.json(post);
    } catch(e) {
        res.send(e);
    }
  await next;
}

async function create(req, res, next) {
  
  try {
    const {
      title,
      body,
      category,
      likes,
      tags,
      user
    } = req.body;

    const posts = await Post.find({});

    const postTitles = posts.map(post => post.title);


    if (postTitles.includes(title)) {

      res.status(400).send(`Title ${title} is already taken.`);
    } else {
      
      await models.Post.create({ title, body, category, likes, tags, user, createdAt: new Date() });
      res.send('Post created.');
    }
  } catch(e) {
    console.log("ERROR:", e)
    res.send(e);
  }

  await next;
}

async function update(req, res, next) {
    try {
        const { id } = req.params;
        const {
            title,
            body,
            category,
            likes,
            tags,
            user
        } = req.body;
    await models.Post.updateOne({ _id: id }, { title, body, category, likes, tags, user, updatedAt: new Date() });
    res.send('Post Updated.');
    } catch(e) {
        res.send(e);
    }
  await next;
}
async function del(req, res, next) {
    try{
        const { id } = req.params;
        await models.Post.deleteOne({ _id: id });
        res.send('Post Deleted.');
    } catch(e) {
        res.send(e);
    }
  await next;
}
module.exports = {
  list,
  theMostLikedPosts,
  getCommentsByUser,
  postAboutNewsAndTechnology,
  recordsInTheLastThreeMonths,
  listPostsWithCustomSearch,
  get,
  create,
  update,
  del,
};