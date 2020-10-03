// General requirement

const express = require('express')
const mongoose = require('mongoose')
const User = require('../models/user.model')
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
  Brand.find({})
  .then((allBrandsFromDb) => {
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
// router.post('/brand-add', (req, res, next) => {
//   selectedfavbrand = req.body.brandname; // ma sélection 
//   req.session.user.favoritebrands.push(selectedfavbrand);
//   req.session.user.save()
//     .then(() => {
//       console.log(req.session.user.favoritebrands)
//       res.redirect('brands/mybrands')})

//     .catch(err => {
//       console.log('boom', err)
//       next(err); //midleware d'erreur défini dans WWW pour ne pas avoir l'erreur qui tourne indéfiniement
//   })
// })


//ELO
router.post('/brand-add', (req, res, next) => {
  // 
  const {brandname} = req.body;
  User.findOneAndUpdate({_id: req.session.user._id}, {
    favoritebrands: req.body.brandname
  }, {new: true}).then(updateddata => {
    // Données mises à jour
    console.log(favoritebrands)
    res.redirect('brands/mybrands')
  }).catch(err => next(err))
})






  // route de traitement du formulaire 

  // dans le user connecte: on veut ajouter toutes les marques selectionnees depuis la liste

  // req.body.brandname // ['1234', '2345']

  // req.session.user.favoriteBrands.concat()
  // req.session.user.save().then().catch()















//   Brand.find()
//     .then(favbrands => {
//       User.findById({_id: req.session.user._id})
//         .populate('favoritebrands')
//         .then(user => {
//           //
//           // incast: true/false for each celebrity
//           //
//           const favoritebrandsid = user.favoritebrands.map(el => el.id);
//           favbrands.forEach(onebrand => {
//             if (favoritebrandsid.includes(onebrand.id)) {
//               onebrand.incast = true;
//             }

//           });

//           res.redirect('brands/mybrands')
//         })
//         .catch(err => next(err))
//       ;
//     })
//     .catch(err => next(err))
// });
 


  


module.exports = router;