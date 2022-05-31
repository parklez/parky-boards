const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
  {
    userId: {type: String, required: true},
    content: {type: String, required: true},
    published: {type: Date, default: Date.now},
    thread: {type: mongoose.ObjectId, required: true},
  },
  {versionKey: false},
);

module.exports = commentSchema;
