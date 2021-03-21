const { body } = require('express-validator');
const User = require('../models/users');

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
          .custom((value) => {
            return User.findByEmail(value).then((user) => {
              if (user) {
                return Promise.reject('E-mail already in use');
              }
            });
          }),
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
