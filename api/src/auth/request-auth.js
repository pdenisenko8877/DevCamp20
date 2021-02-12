const passport = require('./passport');

module.exports = function (req, res, next) {

  passport.authenticate('jwt', { session: false }, (err, user) => {
    req.user = user;
    next();
  })(req, res, next);
};
