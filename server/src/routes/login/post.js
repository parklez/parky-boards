const {userModel} = require('../../lib/mongo');
const {verifyPassword, signJwt} = require('../../utils');


const login = async (req, res) => {
  try {
    // eslint-disable-next-line prefer-const
    let {username, password} = req.body;
    username = username.toLowerCase();

    const newLogin = await userModel.findOne({
      username,
    });

    if (!newLogin) {
      return res.status(400).json({
        error: 'User does not exist!',
      });
    }

    const result = verifyPassword(password, newLogin.password);
    if (!result) {
      return res.status(400).json({
        error: 'Invalid credentials.',
      });
    }
    return res.status(200).json(
      {token: await signJwt(newLogin._id),
        expiresIn: 3600},
    );
  } catch (error) {
    return res.status(500).json({
      error,
    });
  }
};

module.exports = login;
