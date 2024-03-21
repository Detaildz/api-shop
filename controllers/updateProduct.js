const { Types } = require('mongoose');
const {
  updateProductValidation,
} = require('../validation/updateProductValidation');
const Product = require('../models/productModel');

async function updateProduct(id, data) {
  updateProductValidation(id, data);

  const response = await Product.findByIdAndUpdate(id, data, { new: true });

  return response;
}

module.exports = updateProduct;
