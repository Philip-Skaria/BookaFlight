const express = require('express')
const {signup, login, logout } = require('../controllers/authController');
const authMiddleware = require('../middleware/auth')

const router = express.Router();

// Public routes
router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', authMiddleware, logout);


// Protected Routes
router.get('/profile', authMiddleware, (req, res) => {
  res.json({
    success: true,
    message: 'Profile accessed successfully',
    user: req.user
  });
});

module.exports = router;