// General requirement

const express = require('express')
const bcryptjs = require('bcryptjs')
const mongoose = require('mongoose')

const User = require('../models/user.model')

const router = express.Router()

// Route GET SIGNUP USER

router.get('/signup', (req, res, next) => {
    res.render('auth/signup', {})
  })

//const salt = bcryptjs.genSaltSync(10)


//Route POST SIGNUP USER
//router.post('/signup', (req,res, next) => {
   // console.log('valeurs', req.body)

// Route GET LOGIN USER 
router.get('/login', (req, res, next) => {
    res.render('auth/login')
  })

  
module.exports = router;