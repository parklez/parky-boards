const express = require('express');
const router = express.Router();

const thread = require('./thread');
const comment = require('./comment');

router.use('/thread', thread);
router.use('/comment', comment);

module.exports = router;
