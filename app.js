// app.js - Main application file
const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');

// Initialize Express
const app = express();
const PORT = process.env.PORT || 3000;

// Set up Handlebars as the view engine
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

// Middleware for static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use('/', require('./routes/index'));

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// routes/index.js - Main routing file
const express = require('express');
const router = express.Router();

// Home page route
router.get('/', (req, res) => {
  res.render('home', {
    title: 'My Website - Home',
    name: 'Your Name',
    layout: 'main'
  });
});

// About page route
router.get('/about', (req, res) => {
  res.render('about', {
    title: 'My Website - About',
    layout: 'main'
  });
});

module.exports = router;