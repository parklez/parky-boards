const express = require('express');
const router = express.Router();
const authorize = require('../../middlewares/auth');


const post = require('./post');
const get = require('./get');

router.post('/', authorize, post);
router.get('/', get);

module.exports = router;
