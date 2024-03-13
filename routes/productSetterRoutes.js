const { Router } = require('express');
const { createProduct, updateProduct } = require('../controllers');

const router = Router();

router.post('/', async (req, res) => {
  try {
    const data = await createProduct(req.body);
    res.json(data);
    return 'Created';
  } catch (err) {
    console.log('Error:', err.message);
    res.status(400).json({ err: err.message });
  }
});

router.patch('/:id', (req, res) => {
  const data = updateProduct();
  res.json(data);
});

module.exports = router;
