//LEVANTO LA APLICACION (MAIN)
const express = require('express'); 
const bodyParser = require('body-parser'); 
const path = require('path'); 
const app = express(); 

const flightRoute = require('./routes/flightRoute');
const hotelRoute = require('./routes/hotelRoute');
const packageRoute = require('./routes/packageRoute');
const userRoute = require('./routes/userRoute');

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: false })); 

app.use('/api/flights', flightRoute);
app.use('/api/hotels', hotelRoute);
app.use('/api/packages', packageRoute);
app.use('/api/users', userRoute);

app.get('/', (req, res) => { 
  return res.status(200).json({ message: 'Welcome to the tourism company API!' }); 
});
app.get('/help', (req, res) => { 
  console.log("Pagina de Ayuda"); 
  res.status(200).json({ message: "Sección de ayuda en construcción" });
});

module.exports = app; 







