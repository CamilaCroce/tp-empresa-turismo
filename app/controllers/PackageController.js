const Package = require('../models/Package');

// Controlador para buscar paquetes
exports.SearchPackages = async (req, res) => {
    try {
        const { destination } = req.query;
        if (!destination) {
            return res.status(400).json({ message: 'Destination is required' });
        }
        const packages = await Package.find().populate({ path: 'flightID', match: { destination } }).populate({ path: 'hotelID' });
        const filteredPackages = packages.filter(pkg => pkg.flightID); 
        res.status(200).json(filteredPackages);
    } catch (error) {
        res.status(500).json({ message: 'Error searching packages', error });
    }
};

exports.getAllPackages = async (req, res) => {
    try {
        const packages = await Package.find().populate({ path: 'flightID' }).populate({ path: 'hotelID' });
        res.status(200).json(packages);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving packages', error });
    }
};
