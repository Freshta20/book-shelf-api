const express = require('express');
const ebodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');
require('dotenv').config();

const MongoStore = require('connect-mongo')(session);

const routes = require('./routes')
const app = express();
const port = process.env.PORT || 4000;

// const db = require('./models');

// Json middleware
app.use(express.json());

// set up the sessions with MongoStore
const connectionString = process.env.MONGODB_URI || "mongodb://localhost:27017/Book-Shelf"

app.use(session({
  secret:  (process.env.SESSION_SECRET || 'BookShelf'),
  resave: false, // only save session if set or mutate property on session object
  saveUninitialized: false, // only save a cookie when we set a property
  // store session in mongodb
  store: new MongoStore(
    // connection url
    { url: connectionString }),
}));

//  ROUTES_______
// Auth Routes
app.use('/api/v1/auth', routes.auth)
app.get('/', (req, res) => {
  res.send('Hello');
})

app.listen(port, () => console.log('Server running on port', port));
