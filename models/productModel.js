const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  image: String,
  title: { type: String, required: true, unique: true },
  start_production: { type: Number, required: true },
  class: String,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
