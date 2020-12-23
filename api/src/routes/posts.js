const express = require('express');
const router = express.Router();

router.route('/')
  .get(function (req, res) {
    res.send('Get Posts Lists');
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
