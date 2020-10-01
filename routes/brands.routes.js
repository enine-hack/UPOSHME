// General requirement

const express = require('express')
const mongoose = require('mongoose')

const Brand = require('../models/brand.model')

const router = express.Router()


//route GET MYBRANDS

router.get('/mybrands', (req, res, next) => {
  Brand.find({})
  .then((allBrandsFromDb) => {
    res.render('brands/mybrands', {
      brands: allBrandsFromDb
    })
  })
  .catch(err => {
    console.log('boom', err)
    next(err); //midleware d'erreur défini dans WWW pour ne pas avoir l'erreur qui tourne indéfiniement
  })
})

// route GET BRAND-ADD  

router.get('/brand-add', (req, res, next) => {
  if (!req.session.user) {
    res.redirect('/login')
  }
  res.render('brands/brand-add', {
    user: req.session.user
  })
})




  


module.exports = router;