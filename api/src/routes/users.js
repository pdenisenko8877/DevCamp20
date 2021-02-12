const router = require('express').Router();

const userControl = require('../controllers/user');

router.get('/', userControl.userList);

router.get('/:id', (req, res) => {
  res.send('Single record Ok');
});

router.put('/:id', (req, res) => {
  res.send('Update Ok');
});

router.delete('/:id', (req, res) => {
  res.send('Delete Ok');
});

module.exports = router;
