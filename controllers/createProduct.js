const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  image: String,
  title: { type: String, required: true },
  start_production: { type: Number, required: true },
  class: String,
});

const Product = mongoose.model('Product', productSchema);

async function createProduct(props) {
  console.log(props);

  const response = await Product.create({
    title: 'test',
    start_production: 2024,
  });

  return response;
}

module.exports = createProduct;
