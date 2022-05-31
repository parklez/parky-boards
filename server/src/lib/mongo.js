const mongoose = require('mongoose');

const mongoSettings = require('../config/database');
const threadSchema = require('../models/thread');
const commentSchema = require('../models/comment');
const userSchema = require('../models/user');

mongoose.pluralize(null);

const mongoConnection = mongoose.createConnection(
  `mongodb://${mongoSettings.host}:${mongoSettings.port}/${mongoSettings.database}?authSource=admin`,
  {
    'user': mongoSettings.username,
    'pass': mongoSettings.password,
  },
);

// Where is a better place to have all these models?
const threadModel = mongoConnection.model(
  mongoSettings.postCollection,
  threadSchema,
);

const commentModel = mongoConnection.model(
  mongoSettings.commentCollection,
  commentSchema,
);

const userModel = mongoConnection.model(
  'users',
  userSchema,
);

module.exports = {threadModel, commentModel, userModel};
