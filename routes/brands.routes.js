// General requirement

const express = require('express')
const mongoose = require('mongoose')
const User = require('../models/user.model')
const Brand = require('../models/brand.model')

const router = express.Router()


//route GET MYBRANDS

router.get('/mybrands', (req, res, next) => {
  User.findById(req.session.user.favoritebrands)
  .then((brands) => {
    res.render('brands/mybrands', {
      brands: brands
    })
  })
  .catch(err => {
    console.log('boom', err)
    next(err);
  })
})

// route GET BRAND-ADD  

router.get('/brand-add', (req, res, next) => {
  if (!req.session.user) {
    res.redirect('/login')
  }
  Brand.find({})
  .then((allBrandsFromDb) => {

    allBrandsFromDb.forEach(brand => {
      if (req.session.user.favoritebrands.includes(brand.id)) {
        brand.infavorite = true
      }
    })

    res.render('brands/brand-add', {
      brands: allBrandsFromDb
    })
  })
  .catch(err => {
    console.log('boom', err)
    next(err); //midleware d'erreur défini dans WWW pour ne pas avoir l'erreur qui tourne indéfiniement
  })
  })

// route POST BRAND-ADD  
//ANTOINE
router.post('/brand-add', (req, res, next) => {
  selectedfavbrands = req.body.brandname; // ma sélection 
  User.findById(req.session.user._id)
    .then((user) =>{
      selectedfavbrands.forEach(selectedfavbrand => {
        // que si pas deja
        if (!user.favoritebrands.includes(selectedfavbrand)){
          user.favoritebrands.push(selectedfavbrand)
          console.log(user.favoritebrands)
        }  
      });

      user.save()
        .then(() => {
          console.log(user.favoritebrands)
          res.redirect('/mybrands')
        })
        .catch(err => {
          console.log('boom', err)
          next(err); 
        })
    }).catch(err => {
      console.log('boom', err)
      next(err); 
    })
})

// Route GET BRAND-DETAIL


router.get('/Brand-detail', (req, res, next) => {

  Brand.findOne({_id: req.body._id})
  .then((brand) => {
    
    res.render('brands/brand-detail', {
      brand: brand
    })
  })
  .catch(err => {
    console.log('boom', err);
    next(err);
  })
})


//Route POST BRAND-DETAIL

// router.post('/brand-detail', (req, res, next) => {
//   // Suppression de la marque en page  dans favoritebrand du user
// //recuperer l 'ID de la brand

//   // finder le user.favoritebrands
// // if 
//   //delete req.body. du user.favoritebrands
//   User.findOneAndDelete({_id: req.session.user._id}, function (err) {
//     if(err) console.log(err);
//    console.log("Successful deletion");
//    req.session.destroy();
//    res.redirect('/')
   
//   });
// })






module.exports = router;