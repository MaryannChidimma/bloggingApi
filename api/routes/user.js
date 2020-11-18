const express = require('express');
const router = express.Router();
const { userSignup, userLogin, deleteUser} = require('../controllers/user');
const checkAuth = require('../../middleware/user_Auth');

router.post('/signup', userSignup);

router.post('/login', userLogin);

router.delete('/:userId', checkAuth, deleteUser );

module.exports = router;