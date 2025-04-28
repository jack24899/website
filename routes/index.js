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