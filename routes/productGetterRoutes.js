const { Router } = require('express');
const { getAllProducts, getProductById } = require('../controllers');

const router = Router();

// get products
router.get('/', (req, res) => {
  const data = getAllProducts();
  res.json(data);
});

//GET /products/:id
router.get('/:id', (req, res) => {
  const data = getProductById();
  res.json(data);
});

module.exports = router;
