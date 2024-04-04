const { Router } = require('express');
const { userCreate, userLogin } = require('../controllers');

const router = Router();

// POST /user
router.post('/', async (req, res) => {
  try {
    const data = await userCreate(req.body);
    res.json(data);
  } catch (error) {
    console.log('Error:', error.message);
    res.status(400).json({ error: error.message });
  }
});

// POST /user/login
router.post('/login', async (req, res) => {
  try {
    const data = await userLogin(req.body);
    res.json(data);
  } catch (error) {
    console.log('Error:', error.message);
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
