const express = require('express');
const router = express.Router();

const post = require('./post');
const get = require('./get');

router.post('/', post);
router.get('/', get);

module.exports = router;
