const express = require('express');
const router = express.Router();
const auth = require("../helper/auth");


/**
 * Controllers
 */
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');


/**
 * Routes
 */
router.post('/api/signup', authController.post_signup);
router.post('/api/signin', authController.post_signin);
router.get('/api/user/auth', auth.verify, authController.get_auth);

router.get('/api/users', userController.get_users);
router.get('/api/unique/:email', userController.get_unique);


module.exports = router;