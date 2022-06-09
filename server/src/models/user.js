const mongoose = require('mongoose');
const mongoSettings = require('../config/database');

const userSchema = new mongoose.Schema(
  {
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    createdAt: {type: Date, default: Date.now},
    token: {type: String},
  },
  {versionKey: false},
);

const userModel = mongoose.model(
  mongoSettings.usersCollection,
  userSchema,
);

module.exports = userModel;
