const { Types } = require('mongoose');

function updateProductValidation(id, data) {
  const date = new Date();
  const year = date.getFullYear();

  if (typeof data?.start_production !== 'number') {
    throw new Error('Incorrect production year');
  }
  if (data?.start_production < 1886 || data?.start_production > year) {
    throw new Error('Incorrect production year');
  }

  if (
    !data ||
    (!data.hasOwnProperty('title') &&
      !data.hasOwnProperty('start_production') &&
      !data.hasOwnProperty('image') &&
      !data.hasOwnProperty('class'))
  ) {
    throw new Error('data is incorrect.');
  }

  if (!Types.ObjectId.isValid(id)) {
    throw new Error('id is incorrect.');
  }
}

module.exports = { updateProductValidation };
