const Product = require('../models/productModel');
const {
  createProductValidation,
} = require('../validation/createProductValidation');

// POST /product
async function createProduct(props) {
  createProductValidation(props);
  const response = await Product.create(props);
  return response;
}

module.exports = createProduct;
