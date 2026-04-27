const express = require('express');
const router = express.Router();
const flightController = require('../controllers/FlightController');

router.get('/search', flightController.SearchFlights);

module.exports = router;