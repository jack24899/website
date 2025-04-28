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

// Contact page route - GET
router.get('/contact', (req, res) => {
    res.render('contact', {
      title: 'My Website - Contact',
      layout: 'main'
    });
  });
  
  // Contact form submission - POST
  router.post('/contact', (req, res) => {
    // Here you would normally process the form data
    // For example, send an email or save to database
    const { name, email, subject, message } = req.body;
    
    console.log('Contact form submission:', { name, email, subject, message });
    
    // For now, just redirect back to the contact page with a success parameter
    res.redirect('/contact?success=true');
  });

module.exports = router;