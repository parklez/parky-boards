const {commentModel} = require('../../lib/mongo');
const {threadModel} = require('../../lib/mongo');

module.exports = async (req, res) => {
  try {
    const newComment = commentModel(req.body);

    const updatedThread = await threadModel.updateOne(
      {_id: req.body.thread},
      {$push: {comments: newComment._id}},
    );

    if (updatedThread.acknowledged) {
      await newComment.save();
      return res.status(201).send();
    }
    return res.status(404).json({error: 'Could not find post _id'});
  } catch (error) {
    res.status(500).send(error);
  }
};
