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

//Route POST SIGNUP USER
const salt = bcryptjs.genSaltSync(10)

router.post('/signup', (req,res, next) => {
    console.log('données User =', req.body)
    // enregistrer notre user en base
  
    const {civilite, firstname, lastname, email, passwordHash, registrationDate} = req.body
    const plainPassword = req.body.passwordHash;
  
    const hashed = bcryptjs.hashSync(plainPassword, salt)
    console.log('hashed=', hashed)
  
    User.create({
      civilite: req.body.civilite,
      firstname: req.body.firstname,
      lastname: req.body.lastname,  
      email: req.body.email,
      passwordHash: hashed,
      registrationDate : req.body.registrationDate
    }).then(userFromDb => {
      // res.redirect('/profile')
      res.send('user créé!')
    }).catch(err => {
      console.log('💥', err);
  
      // new mongoose.Error.ValidationError()
  
      if (err instanceof mongoose.Error.ValidationError || err.code === 11000) {
        // re-afficher le formulaire
  
        console.log('Error de validation mongoose !')
  
        res.render('auth/signup', {
          errorMessage: err.message
        })
      } else {
        next(err) // hotline
      }
  
      
    })
  
  })

// Route GET LOGIN USER 
router.get('/login', (req, res, next) => {
    res.render('auth/login')
  })

// Route POST LOGIN USER


module.exports = router;