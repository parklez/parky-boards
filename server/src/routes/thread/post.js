const threadModel = require('../../models/thread');

module.exports = async (req, res) => {
  try {
    const userId = req.user.userId;

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
