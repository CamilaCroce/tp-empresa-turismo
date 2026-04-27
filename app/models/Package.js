const mongoose = require('mongoose');

//Esquema para el modelo de paquete
const packageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    flightID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Flight',
        required: true
    },
    hotelID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hotel',
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});
module.exports = mongoose.model('Package', packageSchema);