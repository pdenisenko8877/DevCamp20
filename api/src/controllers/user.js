const bcrypt = require('bcrypt');
const passport = require('../auth/passport');
const User = require('../models/users');
const { v4: uuidv4 } = require('uuid');
const jwt = require('jsonwebtoken');

exports.signup = (req, res) => {
  bcrypt.hash(req.body.password, 10).then(hash => {
    User.createUser(req, hash)
      .then(() => {
        res.status(201).json({
          message: 'User added successfully!',
        });
      })
      .catch(err => {
        res.status(500).json({
          message: err.message,
          error: err,
        });
      });
  });
};

exports.login = (req, res) =>
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

      await User.updateUserToken(user, uuidv4());

      res.send({ token: jwtToken });
    },
  )(req, res);

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

      const jwtToken = jwt.sign(user, process.env.JWT_SECRET, {
        expiresIn: '1d',
        audience: process.env.HOST,
      });

      const userEmailMatch = await User.findByEmail(user.email);


      if (userEmailMatch) {
        await User.updateUserToken(user, uuidv4());
      } else {
        await User.createSocialUser(user, uuidv4());
      }

      res.send({ token: jwtToken });
    },
  )(req, res);

exports.userList = async (req, res) => {
  res.send(await User.getUsers());
};
