const router = require('express').Router();
const Posts = require('../models/posts');
const checkAuthorized = require('../acl/acl');

router
  .route('/')
  .get(async (req, res) => {
    const currentPage = parseInt(req.query.cursor) || 1;
    const limit = 5;
    const offset = (currentPage - 1) * limit;
    const [{ count: countPosts }] = await Posts.getPostsCount();

    const data = await Posts.getPosts(limit, offset);

    const nextPage = currentPage * limit < countPosts ? currentPage + 1 : null;

    res.send({ data, nextPage });
  })
  .put((req, res) => {
    Posts.createPost(req).then(res.send('Create New Post'));
  });

router
  .route('/:id')
  .get(async (req, res) => {
    res.send(await Posts.getPost(req.params.id));
  })
  .put([
    checkAuthorized({ table: 'posts' }),
    (req, res) => {
      Posts.updatePost(req).then(res.send(`Update Post ID: ${req.params.id}`));
    },
  ])
  .delete([
    checkAuthorized({ table: 'posts' }),
    (req, res) => {
      Posts.deletePost(req).then(res.send(`Delete Post ID: ${req.params.id}`));
    },
  ]);

module.exports = router;
