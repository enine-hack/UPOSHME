// General requirement

const express = require('express')
const mongoose = require('mongoose')

const User = require('../models/user.model')

const router = express.Router()


//route GET MYBRANDS

router.get('/mybrands', (req, res, next) => {
    res.render('brands/mybrands')
  })


  // Route GET BRANDS/ADD
  


module.exports = router;