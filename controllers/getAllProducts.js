const Product = require('../models/productModel');

async function getAllProducts() {
  const response = await Product.find({});

  return response;
}

module.exports = getAllProducts;
