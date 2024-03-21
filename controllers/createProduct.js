const Product = require('../models/productModel');
const {
  createProductValidation,
} = require('../validation/createProductValidation');

// POST /product
async function createProduct(props) {
  try {
    createProductValidation(props);

    const response = await Product.create(props);
    return response;
  } catch (error) {
    console.log('Error creating product', error.message);
  }
}

module.exports = createProduct;
