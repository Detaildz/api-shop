function createUserValidation(user) {
  // username validation
  if (!user?.username?.trim() || typeof user?.username !== 'string') {
    if (user?.username?.length < 3) {
      throw new Error('Username too short');
    }
    throw new Error('Username required');
  }

  // password validation
  if (!user?.password?.trim() || typeof user?.password !== 'string') {
    throw new Error('Password required');
  }
}

module.exports = { createUserValidation };
