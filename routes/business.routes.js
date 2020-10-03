// General requirement

const express = require('express')
const bcryptjs = require('bcryptjs')
const mongoose = require('mongoose')

const Business = require('../models/business.model')

const router = express.Router()

// Route GET BUSINESS CONTACT

router.get('/contact', (req, res, next) => {
    res.render('business/businesscontact', {})
  })


// Route POST BUSINESS CONTACT





  module.exports = router;