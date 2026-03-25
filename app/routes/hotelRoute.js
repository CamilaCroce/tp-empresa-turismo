const express = require('express');
const HotelController = require('../controllers/hotelController');
const router = express.Router();

router.get('/', HotelController.getAll)
.get('/:id', HotelController.getById)
.post('/', HotelController.create)
.put('/:id', HotelController.update)
.delete('/:id', HotelController.delete)
.delete('/', HotelController.deleteAll);

module.exports = router;