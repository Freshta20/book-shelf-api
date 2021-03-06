const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');
const cors = require('cors');
require('dotenv').config();

const MongoStore = require('connect-mongo')(session);

const routes = require('./routes')
const app = express();
const port = process.env.PORT || 4000;

// const db = require('./models');


// MIDDLEWARE

// CORS
const corsOption = {
  origin: ['http://localhost:3000', 'https://book-shelf-client-fb.herokuapp.com'],
  credentials: true,
  optionSuccessStatus: 200
}
app.use(cors(corsOption));

// Json middleware
app.use(express.json());

// BodyParser
app.use(bodyParser.urlencoded({extended: false}));

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
    cookie: {
      maxAge: 1000* 3600 * 24, 
    }
}));

//  ROUTES_______
// Auth Routes
app.use('/api/v1/auth', routes.auth)
// Catagories rout
app.use('/api/v1/categories', routes.categories)
// Books rout
app.use('/api/v1/books', routes.books)

app.get('/', (req, res) => {
  res.send('Hello');
})

app.listen(port, () => console.log('Server running on port', port));
