const { Router } = require('express');
const { getAllProducts, getProductById } = require('../controllers');

const router = Router();

// GET products
router.get('/', async (req, res) => {
  try {
    const data = await getAllProducts();
    res.json(data);
  } catch (error) {
    console.log('Error:', error.message);
    res.status(400).json({ error: error.message });
  }
});

//GET /products/:id
router.get('/:id', (req, res) => {
  const data = getProductById();
  res.json(data);
});

module.exports = router;
