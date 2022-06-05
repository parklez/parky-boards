const {userModel} = require('../../lib/mongo');
const {hashPassword, signJwt} = require('../../utils');

const register = async (req, res) => {
  try {
    // eslint-disable-next-line prefer-const
    let {username, password} = req.body;
    username = username.toLowerCase();

    if (!username || !password) {
      return res.status(400).json({
        error: 'Username/Password must not be empty!',
      });
    }

    if (await userModel.findOne({username})) {
      return res.status(409).json({
        error: 'User already exists!',
      });
    }

    const encryptedPass = hashPassword(password);

    const newUser = await userModel.create({
      username: username,
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
