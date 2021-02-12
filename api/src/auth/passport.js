const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const GoogleStrategy = require('./strategies/google');
const ExtractJwt = require('passport-jwt').ExtractJwt;
const bcrypt = require('bcrypt');
const User = require('../models/users');

passport.use(
  new LocalStrategy(
    { usernameField: 'email', passwordField: 'password' },
    async function(email, password, done) {
      const user = await User.findByEmail(email);

      if (user) {
        // Check for passwords match:
        const pwdMatch = await bcrypt.compare(password, user.password);

        if (pwdMatch) {
          // Everything is ok, let's proceed:
          return done(null, user);
        }
      }
      // Authentication failure:
      return done(null, false, { message: 'Invalid user credentials' });
    },
  ),
);

passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
      audience: process.env.HOST,
    },
    function(jwt_payload, done) {
      return done(null, jwt_payload);
    },
  ),
);

passport.use(
  new GoogleStrategy(function(profile, done) {
    return profile ? done(null, User.googleUserSanitize(profile)) : done('Google auth failed', null);
  }),
);

module.exports = passport;
