const express = require('express');
const router = express.Router();
const authorize = require('../../middlewares/auth');

const get = require('./get');
const post = require('./post');

router.get('/:id?', get);
router.post('/', authorize, post);

module.exports = router;
