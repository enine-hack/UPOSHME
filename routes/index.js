const express = require('express');
const router  = express.Router();

/* GET HOMEPAGE */
router.get('/', (req, res, next) => {
  res.render('home');
});

/* GET FAQ */

module.exports = router;
