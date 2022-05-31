const mongoose = require('mongoose');

const threadSchema = new mongoose.Schema(
  {
    userId: {type: String, required: true},
    title: {type: String, required: true},
    content: {type: String, required: true},
    published: {type: Date, default: Date.now},
    comments: {type: Array},
  },
  {versionKey: false},
);

module.exports = threadSchema;
