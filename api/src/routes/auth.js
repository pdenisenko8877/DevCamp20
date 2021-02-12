const router = require('express').Router();

const userControl = require('../controllers/user');

router.post('/signup', userControl.signup);

router.post('/login', userControl.login);
router.post('/login/google', userControl.loginGoogle);

module.exports = router;
