const Hotel = require('../models/Hotel');

// Controlador para buscar hoteles
exports.SearchHotels = async (req, res) => {
    try {
        const { location } = req.query;
        if (!location) {
            return res.status(400).json({ message: 'Location is required' });
        }
        const hotels = await Hotel.find({
            location: location
        });
        res.status(200).json(hotels);
    } catch (error) {
        res.status(500).json({ message: 'Error searching hotels', error });
    }
};