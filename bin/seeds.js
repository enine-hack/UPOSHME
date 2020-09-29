const mongoose = require('mongoose');
// importer le model brand
const Brand = require('../models/brand.model');
// const Business = require('../models/business.model');
// const User = require('../models/user.model');
// donner un nom de variable à notre base 
const dbtitle = 'uposhme';
// connecter notre base a mongodb
mongoose.connect(`mongodb://localhost/${dbtitle}`, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true});
 
// tableau des marques
const brands = [
    {
    brandname: 'ABERCROMBIE & FITCH',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://www.myzeil.de/fileadmin/user_upload/GLOBAL/brand_stores/logos/abercrombieandfitch.jpg',
    websiteUrl: 'https://www.abercrombie.com/shop/eu-fr'
    },
    {
    brandname: 'ADEN + ANAIS',
    categorie: 'Enfants',
    logoUrl: 'https://mma.prnewswire.com/media/995839/aden_anais_Logo.jpg?p=publish',
    websiteUrl: 'https://www.adenandanais.fr/'
    },
    {
    brandname: 'AESOP',
    categorie: 'Beauté & Soins',
    logoUrl: 'https://assets.fontsinuse.com/static/use-media-items/92/91004/upto-700xauto/5d162bc1/Aesop.png?resolution=0',
    websiteUrl: 'https://www.aesop.com/'
    },
    {
    brandname: 'AIGLE',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://www.carlstahl-epi.fr/boutique/images_familles/aigle.png',
    websiteUrl: 'https://www.aigle.com/'
    },
    {
    brandname: 'AMERICAN VINTAGE',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://www.urbansublime.com/wp-content/uploads/2015/03/logoAmericanVintage-1.jpg',
    websiteUrl: 'https://fr.americanvintage-store.com/fr/'
    },
    {
    brandname: 'ARMANI',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://journalduluxe.fr/wp-content/uploads/2017/05/armani-logo.jpg',
    websiteUrl: 'https://www.armani.com/'
    },
    {
    brandname: 'ANNICK GOUTAL',
    categorie: 'Beauté et Soins',
    logoUrl: 'ICI',
    websiteUrl: 'https://www.goutalparis.com/'
    },
    {
    brandname: 'BA&SH',
    categorie: 'Mode et Accessoires',
    logoUrl: 'x',
    websiteUrl: 'https://ba-sh.com/'
    },
    {
    brandname: 'BACCARAT',
    categorie: 'Maison',
    logoUrl: 'x',
    websiteUrl: 'https://www.baccarat.fr/'
    },
    {
    brandname: 'ARMANI',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://journalduluxe.fr/wp-content/uploads/2017/05/armani-logo.jpg',
    websiteUrl: 'https://www.armani.com/'
    },
    {
    brandname: 'BALENCIAGA',
    categorie: 'Mode et Accessoires',
    logoUrl: 'x',
    websiteUrl: 'https://www.balenciaga.com/fr'
    },
    {
    brandname: 'BALMAIN',
    categorie: 'Mode et Accessoires',
    logoUrl: 'x',
    websiteUrl: 'https://www.balmainwatches.com/'
    },
    {
    brandname: 'BERENICE',
    categorie: 'Mode et Accessoires',
    logoUrl: 'x',
    websiteUrl: 'https://www.berenice.net/'
    },
    {
    brandname: 'BONPOINT',
    categorie: 'Enfants',
    logoUrl: 'x',
    websiteUrl: 'https://www.bonpoint.com/'
    },
    {
    brandname: 'BOSS',
    categorie: 'Mode et Accessoires',
    logoUrl: 'x',
    websiteUrl: 'https://www.hugoboss.com/fr/'
    },
    {
    brandname: 'BOTTEGA VENETA',
    categorie: 'Mode et Accessoires',
    logoUrl: 'x',
    websiteUrl: 'https://www.bottegaveneta.com/'
    },
    {
    brandname: 'BURBERRY',
    categorie: 'Mode et Accessoires',
    logoUrl: 'x',
    websiteUrl: 'https://fr.burberry.com/'
    },
    {
    brandname: 'CAFE COTON',
    categorie: 'Mode et Accessoires',
    logoUrl: 'x',
    websiteUrl: 'https://www.cafecoton.fr/'
    },
    {
    brandname: 'CALVIN KLEIN',
    categorie: 'Mode et Accessoires',
    logoUrl: 'x',
    websiteUrl: 'https://www.calvinklein.fr/'
    },
    {
    brandname: 'CELINE',
    categorie: 'Mode et Accessoires',
    logoUrl: 'x',
    websiteUrl: 'https://www.celine.com/'
    },

]

// importer toutes les marques dans la bdd
Brand.create(brands).then(brands => {
    console.log(`OK, ${brands.length} have been created.`);
  
    mongoose.connection.close();
}).catch(err => {
    console.log('oops',err)
});

// apres avoir ecrit le code : node bin/seeds.js pour injecter ds mongodb