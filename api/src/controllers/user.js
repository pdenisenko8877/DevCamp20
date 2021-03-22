const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');

const passport = require('../auth/passport');
const User = require('../models/users');

exports.signup = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  bcrypt.hash(req.body.password, 10).then((hash) => {
    User.createUser(req, hash)
      .then(() => {
        res.status(201).json({
          message: 'User added successfully!',
        });
      })
      .catch((err) => {
        res.status(500).json({
          message: err.message,
          error: err,
        });
      });
  });
};

exports.login = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  passport.authenticate(
    'local',
    {
      usernameField: 'email',
      passwordField: 'password',
      session: false,
    },
    async (err, user, trace) => {
      if (err || !user) {
        throw new Error(trace.message || 'Authentication error');
      }

      // Generate token for user
      const jwtToken = jwt.sign(user, process.env.JWT_SECRET, {
        expiresIn: '1d',
        audience: process.env.HOST,
      });

      res.send({ token: jwtToken });
    },
  )(req, res);
};

exports.loginGoogle = (req, res) =>
  passport.authenticate(
    'google',
    {
      scope: ['email', 'profile'],
    },
    async (err, user, trace) => {
      if (err || !user) {
        throw new Error(trace.message || 'Authentication error');
      }

      let systemUser = await User.findByEmail(user.email);

      if (!systemUser) {
        systemUser = await User.createSocialUser(user);
      }

      const jwtToken = jwt.sign(systemUser, process.env.JWT_SECRET, {
        expiresIn: '1d',
        audience: process.env.HOST,
      });

      res.send({ token: jwtToken });
    },
  )(req, res);

exports.userList = async (req, res) => {
  res.send(await User.getUsers());
};
