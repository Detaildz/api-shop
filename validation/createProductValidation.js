function createProductValidation(props) {
  // title validation
  if (!props?.title?.trim()) {
    throw new Error('Title required');
  }

  const date = new Date();
  const year = date.getFullYear();

  // year validation
  if (typeof props?.start_production !== 'number') {
    throw new Error('Incorrect production year');
  }
  if (props?.start_production < 1886 || props?.start_production > year) {
    throw new Error('Incorrect production year');
  }
}

module.exports = { createProductValidation };
