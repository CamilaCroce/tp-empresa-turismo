const mongoose = require('mongoose'); 
const dbURI = `mongodb+srv://camcrocecc:palermo2026@camidb.6ktcf.mongodb.net/?appName=CamiDB`;

mongoose.connect(dbURI) 
    .then(() => console.log('Connected to MongoDB successfully'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

module.exports = mongoose;
