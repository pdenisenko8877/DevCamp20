const router = require('express').Router();
const Posts = require('../models/posts');
const checkAuthorized = require('../acl/acl');

router
  .route('/')
  .get(async (req, res) => {
    res.send(await Posts.getPosts());
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
      Posts.updatePost(req).then(
        res.send(`Update Post ID: ${req.params.id}`),
      );
    },
  ])
  .delete([
    checkAuthorized({ table: 'posts' }),
    (req, res) => {
      Posts.deletePost(req).then(
        res.send(`Delete Post ID: ${req.params.id}`),
      );
    },
  ]);

module.exports = router;
