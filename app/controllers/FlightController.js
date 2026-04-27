const Flight = require('../models/Flight');

// Controlador para buscar vuelos
exports.SearchFlights = async (req, res) => {
    try {
        const { destination } = req.query; 
        if (!destination) { 
            return res.status(400).json({ message: 'Destination is required' });
        }
        const flights = await Flight.find({ 
            destination: destination
        });
        res.status(200).json(flights);
    } catch (error) {
        res.status(500).json({ message: 'Error searching flights', error });
    }
};
