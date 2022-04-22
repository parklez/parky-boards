const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
  {
    content: {type: String, require: true},
    published: {type: Date, default: Date.now},
    thread: {type: mongoose.ObjectId, require: true},
  },
  {versionKey: false},
);

module.exports = commentSchema;
