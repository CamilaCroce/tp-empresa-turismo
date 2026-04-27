const mongoose = require('mongoose'); 

//Esquema para el modelo de vuelo
const flightSchema = new mongoose.Schema({ 
    airline: {
        type: String,
        required: true 
    },
    flightNumber: {
        type: String, 
        required: true 
    },
    destination: {
        type: String, 
        required: true 
    },
    price: {
        type: Number, 
        required: true 
    },
});

module.exports = mongoose.model('Flight', flightSchema); 



