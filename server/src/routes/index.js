const express = require('express');
const router = express.Router();

const thread = require('./thread');
const comment = require('./comment');
const register = require('./register');
const login = require('./login');

router.use('/thread', thread);
router.use('/comment', comment);
router.use('/register', register);
router.use('/login', login);


module.exports = router;
