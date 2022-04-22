const {threadModel} = require('../../lib/mongo');

module.exports = async (req, res) => {
  try {
    let requestedThread;

    if (req.params.id) {
      requestedThread = await threadModel.findById(req.params.id);
    } else {
      requestedThread = await threadModel.find().limit(10).skip(0);
    }

    if (requestedThread) {
      return res.status(200).json(requestedThread);
    }
    return res.status(404).send();
  } catch (error) {
    console.log(error);
    return res.status(500).send();
  }
};
