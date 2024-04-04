const User = require('../models/userModel');
const { createUserValidation } = require('../validation/userCreateValidation');
const bcrypt = require('bcrypt');

async function userCreate(user) {
  createUserValidation(user);

  // check if any user exists
  const userExists = await User.find();

  if (userExists.length) throw new Error('User already exists');

  // hash password
  const hashedPassword = await bcrypt.hash(user.password, 10);

  const newUser = await User.create({
    username: user.username,
    password: hashedPassword,
  });

  return newUser;
}

module.exports = userCreate;
