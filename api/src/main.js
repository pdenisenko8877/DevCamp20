require('dotenv').config({ path: '../.env', silent: true });

const express = require('express');
const app = express();
const port = process.env.PORT;
const cors = require('cors');

const corsOptions = {
  origin: 'http://localhost:3100', // process.env.FRONT_URL
};

app.use(cors(corsOptions));

const passport = require('./auth/passport');
const authRequest = require('./auth/request-auth');

//Routes
const authRoutes = require('./routes/auth');
const usersRoutes = require('./routes/users');
const postsRoutes = require('./routes/posts');

app.use(express.json());
app.use(passport.initialize());
app.use(authRequest);

//Auth
app.use('/auth', authRoutes);
//Users
app.use('/users', usersRoutes);
//Posts
app.use('/posts', postsRoutes);

const envParam = function(req, res, next) {
  res.params = {
    port: process.env.PORT,
    host: process.env.HOST,
  };
  next();
};
app.use(envParam);

app.get('/', (req, res) => {
  res.send(
    `Api server! Run on ${res.params.host} used ${res.params.port} port`,
  );
});

function errorHandler(err, req, res) {
  res.status(500);
  res.render('error', { error: err });
}

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening at http://${process.env.HOST}:${port}`);
});
