const {userModel} = require('../../lib/mongo');
const {hashPassword, signJwt} = require('../../utils');

const register = async (req, res) => {
  try {
    // eslint-disable-next-line prefer-const
    let {user, pass} = req.body;
    user = user.toLowerCase();

    if (!user || !pass) {
      return res.status(400).json({
        error: 'Username/Password must not be empty!',
      });
    }

    if (await userModel.findOne({user})) {
      return res.status(409).json({
        error: 'User already exists!',
      });
    }

    const encryptedPass = hashPassword(pass);

    const newUser = await userModel.create({
      username: user,
      password: encryptedPass,
    });

    const jwt = await signJwt(newUser._id);

    newUser.token = jwt;
    return res.status(201).json(newUser);
  } catch (error) {
    return res.status(500).json({
      error: error,
    });
  }
};

module.exports = register;
