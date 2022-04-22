const mongoose = require('mongoose');

const threadSchema = new mongoose.Schema(
  {
    title: {type: String, require: true},
    content: {type: String, require: true},
    published: {type: Date, default: Date.now},
    comments: {type: Array},
  },
  {versionKey: false},
);

module.exports = threadSchema;
