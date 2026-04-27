const express = require('express');
const router = express.Router();
const hotelController = require('../controllers/HotelController');

router.get('/search', hotelController.SearchHotels);

module.exports = router;