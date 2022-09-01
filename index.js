const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

const app = express();

app.use(bodyParser.json());

const collegesRoute = require('./routes/colleges');
const studentRoute = require('./routes/students');

app.get('/', (req, res) => {
  res.send('Express working');
});

app.use('/colleges', collegesRoute);

app.use('/students', studentRoute);

mongoose.connect(process.env.MONGODB_URI, () => {});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../client/build'));
}

app.listen(process.env.PORT || 3001);
