const bcrypt = require('bcrypt');
const passport = require('../auth/passport');
const User = require('../models/users');
const { v4: uuidv4 } = require('uuid');

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

      // Generate token for user and update in DB:
      await User.updateUserToken(user, uuidv4());

      res.send({ accessToken: user.accessToken });
    },
  )(req, res);

exports.userList = async (req, res) => {
  res.send(await User.getUsers());
};
