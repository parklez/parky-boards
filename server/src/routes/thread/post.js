const {threadModel} = require('../../lib/mongo');

module.exports = async (req, res) => {
  try {
    const newThread = threadModel(req.body);
    const result = await newThread.save();
    return res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};
