const { Router } = require('express');
const PostController = require('../controllers/posts');

const postRouter = Router();

const {
  list,
  theMostLikedPosts,
  getCommentsByUser,
  postAboutNewsAndTechnology,
  recordsInTheLastThreeMonths,
  listPostsWithCustomSearch,
  get,
  create,
  update,
  del
} = PostController;

postRouter.get('/', list);
postRouter.get('/likes', theMostLikedPosts);
postRouter.get('/comments', getCommentsByUser);
postRouter.get('/news-tech', postAboutNewsAndTechnology);
postRouter.get('/redords-prior-3months', recordsInTheLastThreeMonths);
postRouter.get('/custom-search', listPostsWithCustomSearch);
postRouter.get('/:id', get);
postRouter.post('/', create);
postRouter.put('/:id', update);
postRouter.delete('/:id', del);

module.exports = postRouter;