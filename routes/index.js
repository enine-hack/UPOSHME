const express = require('express');
const router  = express.Router();

/* GET HOMEPAGE */
router.get('/', (req, res, next) => {
  res.render('home');
});

/* GET FAQ */
router.get('/faq', (req, res, next) => {
  res.render('faq');
});

/* GET CONTACT */
router.get('/contact', (req, res, next) => {
  res.render('contact');
});

/* GET CONFIDENTIALITE */
router.get('/confidentialite', (req, res, next) => {
  res.render('Legal/confidentialite');
});

/* GET CGV */
router.get('/cgv', (req, res, next) => {
  res.render('Legal/cgv');
});


module.exports = router;
