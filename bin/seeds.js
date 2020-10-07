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
    brandname: '&TRADITION',
    categorie: 'Maison',
    logoUrl: 'https://pbs.twimg.com/profile_images/531817357136498691/a_8f4Mj0.jpeg',
    websiteUrl: 'https://shop.andtradition.com/'
    },
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
    logoUrl: 'https://fimgs.net/mdimg/dizajneri/o.4.jpg',
    websiteUrl: 'https://www.goutalparis.com/'
    },
    {
    brandname: 'BA&SH',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://i.pinimg.com/280x280_RS/16/56/49/1656492db14da85a73ef57d683aea3ff.jpg',
    websiteUrl: 'https://ba-sh.com/'
    },
    {
    brandname: 'BACCARAT',
    categorie: 'Maison',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/fr/4/4e/LOGO-BACCARAT.jpg',
    websiteUrl: 'https://www.baccarat.fr/'
    },
    {
    brandname: 'BAEBROW',
    categorie: 'Beauté et Soins',
    logoUrl: 'https://i.pinimg.com/280x280_RS/7d/64/41/7d644176275959609578881ff26edfa9.jpg',
    websiteUrl: 'https://baebrow.com/'
    },
    {
    brandname: 'BALENCIAGA',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://cdn.1min30.com/wp-content/uploads/2018/03/Logo-Balenciaga-1.jpg',
    websiteUrl: 'https://www.balenciaga.com/fr'
    },
    {
    brandname: 'BALMAIN',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://www.olfastory.com/sites/www.olfastory.com/files/styles/400x400/public/balmain.jpg?itok=J3WPkBsM',
    websiteUrl: 'https://www.balmainwatches.com/'
    },
    {
    brandname: 'BERENICE',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://www.justacote.com/photos_entreprises/boutique-berenice-hyeres-14067985620.jpg',
    websiteUrl: 'https://www.berenice.net/'
    },
    {
    brandname: 'BOBBI BROWN',
    categorie: 'Beauté et Soins',
    logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT5AjGeMQVDB9YDe7_tq41FbY3cxlH36zzlMA&usqp=CAU',
    websiteUrl: 'https://www.bobbibrowncosmetics.com/'
    },
    {
    brandname: 'BOBBIES',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://www.fanny-chaussures.com/blog/wp-content/uploads/bobbies-618x550.png',
    websiteUrl: 'https://www.bobbies.com/'
    },
    {
    brandname: 'BONPOINT',
    categorie: 'Enfants',
    logoUrl: 'https://i.pinimg.com/originals/a7/5f/4a/a75f4a415955e23049d28fdc76a52e9d.jpg',
    websiteUrl: 'https://www.bonpoint.com/'
    },
    {
    brandname: 'BOSS',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://generalperfume.com/wp-content/uploads/2016/07/hugo-boss.jpg',
    websiteUrl: 'https://www.hugoboss.com/fr/'
    },
    {
    brandname: 'BOTTEGA VENETA',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://www.mesmarques-enbourse.com/wp-content/themes/mes-marques-en-bourse/logos/600x600/21283401600.jpg',
    websiteUrl: 'https://www.bottegaveneta.com/'
    },
    {
    brandname: 'BURBERRY',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://i.pinimg.com/originals/96/ea/fa/96eafaedc9df66fe69ab833230d8ab46.jpg',
    websiteUrl: 'https://fr.burberry.com/'
    },
    {
    brandname: 'CAFE COTON',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://www.cartesesame.com/uploads/media/partner_logo/0001/12/thumb_11029_partner_logo_normal.jpeg',
    websiteUrl: 'https://www.cafecoton.fr/'
    },
    {
    brandname: 'CALVIN KLEIN',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://www.latroikastore.com/media/cache/brand_thumbnail/b0/fe/8664c0be93d6645edc6d202bd27a.jpeg',
    websiteUrl: 'https://www.calvinklein.fr/'
    },
    {
    brandname: 'CELINE',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://cdn.1min30.com/wp-content/uploads/2018/12/C%C3%A9line-Logo-1.jpg',
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