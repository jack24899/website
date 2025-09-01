// app.js - Main application file
const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');

// Initialize Express
const app = express();
const PORT = process.env.PORT || 5000;

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

// 404 handler - must be the last route
app.use((req, res) => {
  res.status(404).render('404', {
    title: 'Page Not Found',
    layout: 'main'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


