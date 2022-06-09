const mongoose = require('mongoose');
const mongoSettings = require('../config/database');

const commentSchema = new mongoose.Schema(
  {
    userId: {type: String, required: true},
    content: {type: String, required: true},
    published: {type: Date, default: Date.now},
    thread: {type: mongoose.ObjectId, required: true},
  },
  {versionKey: false},
);

const commentModel = mongoose.model(
  mongoSettings.commentCollection,
  commentSchema,
);

module.exports = commentModel;
