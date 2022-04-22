const {commentModel} = require('../../lib/mongo');

module.exports = async (req, res) => {
  try {
    const comments = await commentModel.find({
      '_id': {
        '$in': req.body,
      },
    });
    if (comments) {
      return res.status(200).json(comments);
    }
    return res.status(404).send();
  } catch (error) {
    res.status(500).send(error);
  }
};
