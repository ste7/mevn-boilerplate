const express = require('express');
const router = express.Router();
const auth = require("../helper/auth");


/**
 * Controllers
 */
const signupController = require('../controllers/auth/signupController');
const signinController = require('../controllers/auth/signinController');
const userController = require('../controllers/userController');


/**
 * Routes
 */
router.post('/api/signup', signupController.post_signup);
router.post('/api/signin', signinController.post_signin);

router.get('/api/users', auth.verify, userController.get_users);

router.get('/api/unique/:email', userController.get_unique);


module.exports = router;