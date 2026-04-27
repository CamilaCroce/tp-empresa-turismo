const mongoose = require('mongoose');

//Esquema para el modelo de hotel
const hotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true,
    },
    stars: {
        type: Number,
        min: 1,
        max: 5,
        default: 3
    },
    pricePerNight: {
        type: Number,
        required: true
    }
}); 

module.exports = mongoose.model('Hotel', hotelSchema);
