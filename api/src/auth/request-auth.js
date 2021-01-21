const passport = require('./passport');

module.exports = function(req, res, next) {
  passport.authenticate('bearer', { session: false }, (err, user) => {
    if (user) {
      req.user = user;
    }
    next();
  })(req, res, next);
};
