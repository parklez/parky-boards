const {threadModel} = require('../../lib/mongo');

module.exports = async (req, res) => {
  try {
    const userId = req.user.payload.userId;

    const newThread = threadModel({userId: userId,
      title: req.body.title,
      content: req.body.content},
    );
    const result = await newThread.save();
    return res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};
