const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function userLogin(user) {
  const { username, password } = user;

  if (!username || !password)
    throw new Error('Username and password are required');

  const findUser = await User.findOne({ username });

  if (!findUser) throw new Error('User or password is incorrect');

  const isMatch = await bcrypt.compare(password, findUser.password);

  if (!isMatch) throw new Error('User or password is incorrect');

  //create a token
  const token = jwt.sign({ username }, process.env.JWT_SECRET, {
    expiresIn: '15min',
  });

  return { token };
}

module.exports = userLogin;
