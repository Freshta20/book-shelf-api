const express = require('express');
const ebodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');
require('dotenv').config();

const MongStore = require('connect-mongo')(session);

const app = express();
const port = process.env.PORT || 4000;

const db = require('./models');

app.get('/', (req, res) => {
  res.send('Hello');
})

app.listen(port, () => console.log('Server running on port', port));
