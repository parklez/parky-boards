const express = require('express');
const router = express.Router();

const get = require('./get');
const post = require('./post');

router.get('/:id?', get);
router.post('/', post);

module.exports = router;
