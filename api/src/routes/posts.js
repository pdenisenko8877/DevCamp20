const router = require('express').Router();
const db = require('../configs/db.config');

router.route('/')
  .get(async (req, res) => {
    res.send(await db.select().from('posts'));
  })
  .put(function (req, res) {
    res.send('Create New Post');
  });

router.route('/:id')
  .get(function (req, res) {
    res.send(`Get Post ID: ${req.params.id}`);
  })
  .put(function (req, res) {
    res.send(`Update Post ID: ${req.params.id}`);
  })
  .delete(function (req, res) {
    res.send(`Delete Post ID: ${req.params.id}`);
  });

module.exports = router;
