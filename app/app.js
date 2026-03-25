const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const Flys = require('./routes/flys');
const Hotels = require('./routes/hotels');
const Users = require('./routes/users');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  console.log('TOURISM COMPANY');
  res.status(200).send({ message: 'Welcome!' });
})

app.use('/flys', Flys);
app.use('/hotels', Hotels);
app.use('/users', Users);

module.exports = app;