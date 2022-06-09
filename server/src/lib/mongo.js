const mongoose = require('mongoose');

const mongoSettings = require('../config/database');

mongoose.pluralize(null);

mongoose.connect(
  `mongodb://${mongoSettings.host}:${mongoSettings.port}/${mongoSettings.database}?authSource=admin`,
  {
    'user': mongoSettings.username,
    'pass': mongoSettings.password,
  },
).then(() => {
  console.log('MongoDB Connection stablished!');
}).catch((error) => {
  console.log('MongoDB failed to connect!');
  console.log(error);
});
