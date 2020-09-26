// General requirement

const express = require('express')
const bcryptjs = require('bcryptjs')
const mongoose = require('mongoose')

const User = require('../models/user.model')

const router = express.Router()

router.get('/tuto', (req, res, next) => {
 res.render('auth/tuto', {})
 })

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
      res.redirect('/tuto')
     // res.send('user créé!')
    }).catch(err => {
      console.log(':boum:', err);
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
router.post('/login', (req, res, next) => {
  const {email, password} = req.body
  // Validation que email et sont pas vides
  if (!email || !password) {
    
    res.render('auth/login', {
      errorMessage: 'Veuillez saisir votre email et/ou votre mot de passe'
    });
    return; // STOP
  }
  User.findOne({email: email})
    .then(user => {
      if (!user) {
        res.render('auth/login', {errorMessage: 'Email/mot de passe incorrect'})
        return; // STOP
      }
      // comparer le password fourni avec le password (hashé) en base
      if (bcryptjs.compareSync(password, user.passwordHash)) {
        console.log('user ok', user)
        req.session.user = user
        res.send('loggué!')
      } else {
        res.render('auth/login', {errorMessage: 'Incorrect email/password'})
      }
    })
    .catch(err => {
      next(err)
    })
})


module.exports = router;