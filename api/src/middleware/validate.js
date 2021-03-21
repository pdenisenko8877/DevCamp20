const { body } = require('express-validator');
const db = require('../configs/db.config');

async function unique(tableName, column, value, id) {
  const item = await db
    .select()
    .from(tableName)
    .where({ [column]: value })
    .first();

  if (item && (!id || item.id !== id)) {
    return Promise.reject(`${value} already in use`);
  }

  return true;
}

exports.validate = (method) => {
  switch (method) {
    case 'createUser': {
      return [
        body('name').exists().withMessage("Name doesn't exists"),
        body('email')
          .exists()
          .withMessage('Email is empty')
          .isEmail()
          .withMessage('Not an email')
          .custom((value) => unique('users', 'email', value)),
        body('password')
          .exists()
          .withMessage('Password is empty')
          .isLength({ min: 5 })
          .withMessage('Password Must be at least 5 chars long'),
      ];
    }
    case 'loginUser': {
      return [
        body('email')
          .exists()
          .withMessage('Email is empty')
          .isEmail()
          .withMessage('Not an email'),
        body('password')
          .exists()
          .withMessage('Password is empty')
          .isLength({ min: 5 })
          .withMessage('Password Must be at least 5 chars long'),
      ];
    }
    case 'createPost': {
      return [
        body('title').exists().withMessage('Title is empty'),
        body('intro').exists().withMessage('Intro is empty'),
        body('content').exists().withMessage('Content is empty'),
      ];
    }
  }
};
