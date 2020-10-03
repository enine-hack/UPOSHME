// General requirement

const express = require('express')
const bcryptjs = require('bcryptjs')
const mongoose = require('mongoose')

const Business = require('../models/business.model')

const router = express.Router()

// Route GET BUSINESS CONTACT

/* GET CGV */
router.get('/Bcontact', (req, res, next) => {
  res.render('business/businesscontact');
});


// Route POST BUSINESS CONTACT

router.post('/Bcontact', (req,res, next) => {
    // enregistrer notre Business Contact en base
    const {society, activity, country, firstname, lastname, phone, email} = req.body
    console.log('données Business Contact =', req.body)
    
    Business.create({
      society: society,
      activity: activity,
      country: country,
      firstname: firstname,
      lastname: lastname,
      phone:phone,
      email:email,
    }).then(businesscontactFromDb => {
      res.render('business/confirmationBcontact')
     // res.send('user créé!')
    }).catch(err => {
      console.log(':boum:', err);
      // new mongoose.Error.ValidationError()
      if (err instanceof mongoose.Error.ValidationError || err.code === 11000) {
        // re-afficher le formulaire
        console.log('Error de validation mongoose !')
        res.render('business/businesscontact', {
          errorMessage: err.message
        })
      } else {
        next(err) // hotline
      }
    })
  })



  module.exports = router;