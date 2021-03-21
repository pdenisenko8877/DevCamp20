const router = require('express').Router();

const userControl = require('../controllers/user');
const checkValidate = require('../middleware/validate');

router
  .route('/signup')
  .post([checkValidate.validate('createUser'), userControl.signup]);

router
  .route('/login')
  .post([checkValidate.validate('loginUser'), userControl.login]);

router.route('/login/google').post(userControl.loginGoogle);

module.exports = router;
