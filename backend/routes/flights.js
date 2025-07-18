const express = require('express');
const { searchFlights } = require('../controllers/flightController');

const router = express.Router();

router.post('/search', searchFlights);

module.exports = router;
