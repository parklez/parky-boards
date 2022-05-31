const {userModel} = require('../../lib/mongo');
const {verifyPassword, signJwt} = require('../../utils');


const login = async (req, res) => {
  try {
    // eslint-disable-next-line prefer-const
    let {user, pass} = req.body;
    user = user.toLowerCase();

    const newLogin = await userModel.findOne({
      user,
    });

    if (!newLogin) {
      return res.status(400).json({
        error: 'User does not exist!',
      });
    }

    const result = verifyPassword(pass, newLogin.password);
    if (!result) {
      return res.status(400).json({
        error: 'Invalid credentials.',
      });
    }
    return res.status(200).send(
      await signJwt(newLogin._id),
    );
  } catch (error) {
    return res.send(500).json({
      error,
    });
  }
};

module.exports = login;
