const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));

// Dashboard
router.get('/home/dashboard', ensureAuthenticated, (req, res) =>
  res.render('home/dashboard', {
    user: req.user
  })
);

router.get('/home/dashboard.ejs', ensureAuthenticated, (req, res) =>
  res.render('home/dashboard.ejs', {
    user: req.user
  })
);

router.get('/home/AboutUs.ejs', ensureAuthenticated, (req, res) =>
  res.render('home/AboutUs.ejs', {
    user: req.user
  })
);

router.get('/home/PhotoGallery.ejs', ensureAuthenticated, (req, res) =>
  res.render('home/PhotoGallery.ejs', {
    user: req.user
  })
);

router.get('/home/Blog.ejs', ensureAuthenticated, (req, res) =>
  res.render('home/Blog.ejs', {
    user: req.user
  })
);

router.get('/home/Subscription.ejs', ensureAuthenticated, (req, res) =>
  res.render('home/Subscription.ejs', {
    user: req.user
  })
);

router.get('/home/Review.ejs', ensureAuthenticated, (req, res) =>
  res.render('home/Review.ejs', {
    user: req.user
  })
);

module.exports = router;
