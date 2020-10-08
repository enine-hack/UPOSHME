require('dotenv').config({
  path: require('path').resolve(__dirname, '../.env')
})


const mongoose = require('mongoose');
// importer le model brand
const Brand = require('../models/brand.model');
// const Business = require('../models/business.model');
// const User = require('../models/user.model');
// donner un nom de variable à notre base 
const dbtitle = 'uposhme';
// connecter notre base a mongodb
mongoose.connect(process.env.MONGODB_URI, {
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
    brandname: 'CABAÏA',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://www.blue-box.fr/wp-content/uploads/2019/08/CABAIA.jpg',
    websiteUrl: 'https://www.cabaia.com'
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
    brandname: 'CAMPER',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://cdn.worldvectorlogo.com/logos/camper-1.svg',
    websiteUrl: 'https://m.camper.com/'
    },
    {
    brandname: 'CANADA GOOSE',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://www.commeuncamion.com/content/uploads/cache/2010/03/Logo-Canada-Goose/3462872367.png',
    websiteUrl: 'https://www.canadagoose.com/'
    },
    {
    brandname: 'CARAMEL',
    categorie: 'Enfants',
    logoUrl: 'https://cdn.shopify.com/s/files/1/2863/0972/t/11/assets/logo.svg?v=17108630161849822663',
    websiteUrl: 'https://www.caramel-shop.co.uk/'
    },
    {
    brandname: 'CARAN D\'ACHE',
    categorie: 'Maison',
    logoUrl: 'https://cdn.worldvectorlogo.com/logos/caran-d-ache.svg',
    websiteUrl: 'https://www.carandache.com/'
    },
    {
    brandname: 'CARHARTT WIP',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://verygoodlord.com/wp-content/uploads/2020/01/logo-carhartt.png',
    websiteUrl: 'https://www.carhartt-wip.com/'
    },
    {
    brandname: 'CAROLINA HERRERA',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQbfFanYyyrI64-fn8VHBpbRf04bQ6JhFTlGg&usqp=CAU',
    websiteUrl: 'https://chcarolinaherrera.com/fr/en'
    },
    {
    brandname: 'CARRERA',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://www.sauber-group.com/wp-content/uploads/2019/01/carrera_600x600-480x480.png',
    websiteUrl: 'https://www.carreraworld.com/'
    },
    {
    brandname: 'CARVEN',
    categorie: 'Beauté et Soins',
    logoUrl: 'https://journalduluxe.fr/wp-content/uploads/2015/03/Carven.jpg',
    websiteUrl: 'https://www.carven-parfums.com/'
    },
    {
    brandname: 'CASADEI',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://www.fashionsauce.com/img/brands/casadei-stockists.jpg',
    websiteUrl: 'https://www.casadei.com/'
    },
    {
    brandname: 'CELINE',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://cdn.1min30.com/wp-content/uploads/2018/12/C%C3%A9line-Logo-1.jpg',
    websiteUrl: 'https://www.celine.com/'
    },
    {
    brandname: 'CHAMPION',
    categorie: 'Sport',
    logoUrl: 'https://i.pinimg.com/originals/67/37/7d/67377da62f8d079c808b7457ba71791e.png',
    websiteUrl: 'https://www.championstore.com/fr_fr'
    },
    {
    brandname: 'CHANEL',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://www.makrea.com/167039-thickbox_default/sticker-logo-chanel.jpg',
    websiteUrl: 'https://www.chanel.com/'
    },
    {
    brandname: 'CHANTELLE',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/fr/d/d3/Logo_Chantelle.jpg',
    websiteUrl: 'https://us.chantelle.com/'
    },
    {
    brandname: 'CHARLY JAMES',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://scontent-cdg2-1.xx.fbcdn.net/v/t31.0-8/18193413_1939845156055780_627796575104074630_o.jpg?_nc_cat=111&_nc_sid=09cbfe&_nc_ohc=QwqPzO9bHcUAX8b6JoL&_nc_ht=scontent-cdg2-1.xx&oh=9fffc9b2b47bd355b5b0ae87836b4bac&oe=5FA1DAEA',
    websiteUrl: 'https://www.charlyjames.fr/'    
    },
    {
    brandname: 'CHEVIGNON',
    categorie: 'Mode et Accessoires',
    logoUrl: 'data:image/png;base64,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',
    websiteUrl: 'https://www.chevignon.fr/'
    },
    {
    brandname: 'CHILDHOME',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://carovnysvethraciek.sk/img/m/48.jpg',
    websiteUrl: 'https://childhome.com/'
    },
    {
    brandname: 'CHLOE',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://www.vision-optique-orgeval.com/wp-content/uploads/2016/11/logo-chloe.png',
    websiteUrl: 'https://www.chloe.com/'
    },
    {
    brandname: 'CHOCOLATE SOCIETY',
    categorie: 'Vin et Gastronomie',
    logoUrl: 'data:image/jpeg;base64,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',
    websiteUrl: 'https://www.chocolate.co.uk/'
    },
    {
    brandname: 'CHRISTIAN DIOR',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://passion-stickers.com/4393-large_default/stickers-christian-diorr.jpg',
    websiteUrl: 'https://www.dior.com/'
    },
    {
    brandname: 'CHRISTOFLE',
    categorie: 'Maison',
    logoUrl: 'https://images.hbjo-online.com/images/all/5e4bb8caa5e78_christoflelogo-parisblackexe.jpg',
    websiteUrl: 'https://www.christofle.com/'
    },
    {
    brandname: 'CLAE',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://logos-download.com/wp-content/uploads/2016/04/Clae_logo_logotype.png',
    websiteUrl: 'https://www.clae.eu/'
    },
    {
    brandname: 'CLARINS',
    categorie: 'Beauté et Soins',
    logoUrl: 'https://dly4mho8u118u.cloudfront.net/wp-content/uploads/2017/07/19081224/logo-client-body-client-case-study-clarins.png',
    websiteUrl: 'https://www.clarins.fr/'
    },
    {
    brandname: 'CLARKS',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://d353r0i7qv3gvw.cloudfront.net/21/23921/stage-mobile/480184.jpg',
    websiteUrl: 'https://www.clarks.eu/fr/'
    },
    {
    brandname: 'CLAUDIE PIERLOT',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://lh3.googleusercontent.com/proxy/RH2AodYXSNT520Ns2eiZ7Lxja19PEkFhwr6IbBtkfArF26XJb7PkoVLaDLwMb6voNtdE95EQGAPOYRqkTDlADXQaU6yR2WRoB_fG_EM4SBv2c9cIIQ',
    websiteUrl: 'https://fr.claudiepierlot.com'
    },
    {
    brandname: 'CLEAN RESERVE',
    categorie: 'Beauté et Soins',
    logoUrl: 'https://perfumesociety.org/wp-content/uploads/2020/02/SQUARE-LOGO-1.jpg',
    websiteUrl: 'https://www.cleanbeauty.com/'
    },
    {
    brandname: 'CLINIQUE',
    categorie: 'Beauté et Soins',
    logoUrl: 'https://cdn.worldvectorlogo.com/logos/clinique.svg',
    websiteUrl: 'https://m.fr.clinique.com/'
    },
    {
    brandname: 'CLUSE',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://www.sarnioro.it/files/2018/02/201802221649261.jpg',
    websiteUrl: 'https://fr.cluse.com/'
    },
    {
    brandname: 'COACH',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://cdn.worldvectorlogo.com/logos/coach.svg',
    websiteUrl: 'https://fr.coach.com/'
    },
    {
    brandname: 'COCOEKO',
    categorie: 'Enfants',
    logoUrl: 'https://i.pinimg.com/280x280_RS/35/15/7a/35157a184498a0801330a7c7aa0de1aa.jpg',
    websiteUrl: 'https://www.cocoeko.fr/'
    },
    {
    brandname: 'COLUMBIA',
    categorie: 'Sport',
    logoUrl: 'https://www.worldfootwear.com/media/images/news/wf201964063p.png',
    websiteUrl: 'https://www.columbia.com/'
    },
    {
    brandname: 'COMPTOIR DES COTONNIERS',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTf-9IozOccv3XiZydgLgRbd_13TA8Z-yIQaQ&usqp=CAU',
    websiteUrl: 'https://www.comptoirdescotonniers.com/'
    },
    {
    brandname: 'COS',
    categorie: 'Mode et Accessoires',
    logoUrl: 'data:image/png;base64,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',
    websiteUrl: 'https://www.cosstores.com/'
    },
    {
    brandname: 'CRÈME DE LA MER',
    categorie: 'Beauté et Soins',
    logoUrl: 'https://fontmeme.com/images/Lar-Mer-Logo.jpg',
    websiteUrl: 'https://m.cremedelamer.fr/'
    },
    {
    brandname: 'CUISSE DE GRENOUILLE',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://glltn.com/wp-content/blogs.dir/1/files/2014/01/logo-cuisse-de-grenouille.jpg',
    websiteUrl: 'https://www.cuissedegrenouille.com/fr/'
    },
    {
    brandname: 'CYRILLUS',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://media.illicado.com/media/Illicado_partners/brands/image/c/y/cyrillus_1.jpg',
    websiteUrl: 'https://www.cyrillus.fr/'
    },
    {
    brandname: 'DANIEL WELLINGTON',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://stdavidscardiff.com/sites/st_davids/files/styles/shop_logo/public/images/shops/logos/sd_shoplogo_danielwellington_630x560.jpg?itok=m9EIerAh',
    websiteUrl: 'https://www.danielwellington.com/fr/'
    },
    {
    brandname: 'DEAN DAVIDSON',
    categorie: 'Mode et Accessoires',
    logoUrl: 'data:image/png;base64,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',
    websiteUrl: 'https://www.deandavidson.com/'
    },
    {
    brandname: 'DELSEY',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://p.ventesprivees-fr.com/delsey.png',
    websiteUrl: 'https://www.delsey.com/fr/fr/home'
    },
    {
    brandname: 'DES PETITS HAUTS',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://www.groupevuillermet.fr/wp-content/uploads/2018/10/29792119_1225214527614113_5128931659154080485_n.png',
    websiteUrl: 'https://www.despetitshauts.com/fr/'
    },
    {
    brandname: 'DIADORA',
    categorie: 'Sport',
    logoUrl: 'https://cdn.worldvectorlogo.com/logos/diadora-2.svg',
    websiteUrl: 'https://www.diadora.com/'
    },
    {
    brandname: 'DIESEL',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://www.guide-piscine.fr/medias/image/diesel-16648-640-0.jpg',
    websiteUrl: 'https://fr.diesel.com/fr/'
    },
    {
    brandname: 'DIPTYQUE',
    categorie: 'Maison',
    logoUrl: 'https://i.pinimg.com/originals/8b/5d/6a/8b5d6ad0a6f109c3db5be4d266a47d28.jpg',
    websiteUrl: 'https://www.diptyqueparis.com/'
    },
    {
    brandname: 'DITA',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://images.squarespace-cdn.com/content/v1/58504e24579fb348904b9c44/1577810258982-S9ZIS7NEZE1HZLHWWCO3/ke17ZwdGBToddI8pDm48kBXh9yK2oyB64ZrFgLX366tZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxMNtGeYqBTjnPFUyJELAgfwngsed3cV5taUT2LTegxcTm97GbOVIHlRfOT2rtvKxs/dita_logo_eyewear.png?format=750w',
    websiteUrl: 'https://dita.com/fr-fr/'
    },
    {
    brandname: 'DOLCE & GABBANA',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://passion-stickers.com/994-large_default/stickers-dolce-gabbana-dg.jpg',
    websiteUrl: 'https://www.dolcegabbana.com/en/'
    },
    {
    brandname: 'DR. HAUSCHKA',
    categorie: 'Mode et Accessoires',
    logoUrl: 'data:image/png;base64,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',
    websiteUrl: 'https://www.drhauschka.fr/'
    },
    {
    brandname: 'DSQUARED2',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://i1.wp.com/allestimentivetrinesardegna.it/wp-content/uploads/2020/06/Dsquared-LOGO.jpg?resize=500%2C500&ssl=1',
    websiteUrl: 'https://www.dsquared2.com/fr'
    },
    {
    brandname: 'E-TWOW',
    categorie: 'Technologie',
    logoUrl: 'https://rooelec.com/4504-large_default/pieces-et-accessoires-e-twow-kit-etwow-monster-sport-e-twow.jpg',
    websiteUrl: 'http://www.e-twow.fr/'
    },
    {
    brandname: 'EDEN PARK',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://www.lejournaldesventes.fr/logos/eden-park.png',
    websiteUrl: 'https://www.eden-park.fr/fr_fr/'
    },
    {
    brandname: 'ELLA AND THE ROO',
    categorie: 'Enfants',
    logoUrl: 'https://cdn.notonthehighstreet.com/fs/59/5e/c405-911a-42e3-90e6-519e99994361/large.jpg',
    websiteUrl: 'https://ellaandtheroo.com/'
    },
    {
    brandname: 'ELLESSE',
    categorie: 'Sport',
    logoUrl: 'https://i2.wp.com/linkup97.com/wp-content/uploads/2019/06/8a8bcc6cb527c7bc727f7e9b886fcfef.png?fit=400%2C400&ssl=1',
    websiteUrl: 'https://www.ellesse.com/'
    },
    {
    brandname: 'EMOI EMOI',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS-JsATmIylVD4w5VKOetAbn6fSsWQRyIlUHg&usqp=CAU',
    websiteUrl: 'https://www.emoi-emoi.com/'
    },
    {
    brandname: 'ENFANCE PARIS',
    categorie: 'Enfants',
    logoUrl: 'https://peekandpack.com/wp-peekandpack/wp-content/uploads/2015/03/logo_enfance-560x597.jpg',
    websiteUrl: 'https://www.enfance-paris.com/fr/'
    },
    {
    brandname: 'ESTÉE LAUDER',
    categorie: 'Beauté et Soins',
    logoUrl: 'https://brandwiki.ru/up/brands/product/190208_4616.jpg',
    websiteUrl: 'https://m.esteelauder.fr/'
    },
    {
    brandname: 'EVERLAST',
    categorie: 'Sport',
    logoUrl: 'https://pbs.twimg.com/profile_images/728302826112360448/67sTAyHp_400x400.jpg',
    websiteUrl: 'https://www.everlast.com/'
    },
    {
    brandname: 'FAÇONNABLE',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://carrieres.sciencespo.fr/images/cache/300_849f89638d2c247fb96e860b8beeaaec495426e5.png',
    websiteUrl: 'https://www.faconnable.com/fr/'
    },
    {
    brandname: 'FATBOY',
    categorie: 'Maison',
    logoUrl: 'https://www.fatboy.com/assets/og-fb.png',
    websiteUrl: 'https://www.fatboy.com/fr-fr'
    },
    {
    brandname: 'FENDI',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://i.pinimg.com/originals/31/c6/ed/31c6ed61d88c89323a91c59654570ba6.png',
    websiteUrl: 'https://www.fendi.com/'
    },
    {
    brandname: 'FERM LIVING',
    categorie: 'Maison',
    logoUrl: 'https://matea.com/library/local/TimThumb/TimThumb.php?src=https://matea.com/app/media/common/images/brand/logo5295d85698060.jpg&h=400&w=400&zc=2',
    websiteUrl: 'https://fermliving.com/'
    },
    {
    brandname: 'FILA',
    categorie: 'Sport',
    logoUrl: 'https://media.gemo.fr/dyn/dyn/MEDIA_ProductCatalog/m2350279_logo-marque-3-min.jpg',
    websiteUrl: 'https://www.fila.de/en/home/'
    },
    {
    brandname: 'FJALLRAVEN',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://www.latroikastore.com/media/cache/brand_thumbnail/72/d8/484354ba7d74c3b78dcfb3c9dd35.jpeg',
    websiteUrl: 'https://www.fjallraven.com/'
    },
    {
    brandname: 'FOSSIL',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://opticiens.optic2000.com/media/brands/2102/fr_FR/picturePath/originals/logo_0417.jpg',
    websiteUrl: 'https://www.fossil.com/'
    },
    {
    brandname: 'FRED PERRY',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://ae01.alicdn.com/kf/HTB11B4LQyLaK1RjSZFxq6ymPFXa2/Fred-Perry-Mode-Marque-Logo-Autocollant-Voiture-Autocollant-Vinyle-Imperm-able-L-eau-Autocollant-de-Fen.jpg_640x640.jpg',
    websiteUrl: 'https://www.fredperry.com/eu-fr/'
    },
    {
    brandname: 'FUJIFILM INSTAX',
    categorie: 'Jeux et Gadgets',
    logoUrl: 'https://camerastorestorage.blob.core.windows.net/70dbf2066dcc4220bfa96dbe9f4a86c9/Images/Products12714-1000x1000-371510.jpg',
    websiteUrl: 'https://boutique.fujifilm.fr/'
    },
    {
    brandname: 'FUSALP',
    categorie: 'Sport',
    logoUrl: 'https://ibp.info6tm.fr/api/v1/images/view/5dc2d21f8fe56f1e9d643866/ibp_preview/image.jpg',
    websiteUrl: 'https://www.fusalp.com/'
    },
    {
    brandname: 'GAMIN GAMINE.',
    categorie: 'Enfants',
    logoUrl: 'https://touteslesbox.fr/wp-content/uploads/2019/09/gamin-gamine-fond.png',
    websiteUrl: 'https://www.gaminetgamine.com/'
    },
    {
    brandname: 'GANT',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://www.alombredesmarques.fr/media/gantlogo1__094953000_1634_24042019.jpg',
    websiteUrl: 'https://fr.gant.com/'
    },
    {
    brandname: 'GEORG JENSEN',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://res.cloudinary.com/westfielddg/image/upload/westfield-media/uk/retailer/logos/hokwgflrc84osbvmtqvp.png',
    websiteUrl: 'https://www.georgjensen.com/global'
    },
    {
    brandname: 'GERARD DAREL',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://lh3.googleusercontent.com/proxy/OWT53tGDvqpZKzXOX0A3bNmjYMnl3ZJlrUxRsBixnpZ1J7-AkyPEIk5GN4YFZxVOdaZehN9-7OIJRoqdudadbpn3kfiA9Z0K-736hKoSqmuQGO8MbED2cg',
    websiteUrl: 'https://www.gerarddarel.com/fr_fr/'
    },
    {
    brandname: 'GILI\'S',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://s3-eu-west-1.amazonaws.com/tpd/logos/5c54450327234c0001998263/0x0.png',
    websiteUrl: 'https://fr.gilis.com/'
    },
    {
    brandname: 'GIVENCHY',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://www.graphic-jobs.com/portfolio/images/2935826a94f6888bf5614a0ed66e5a12.jpg',
    websiteUrl: 'https://www.givenchy.com/fr/fr/homepage'
    },
    {
    brandname: 'GOLDEN GOOSE',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://i.dlpng.com/static/png/7239480_preview.png',
    websiteUrl: 'https://www.goldengoose.com/fr/fr'
    },
    {
    brandname: 'GREEN FACTORY',
    categorie: 'Maison',
    logoUrl: 'data:image/png;base64,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',
    websiteUrl: 'https://www.greenfactory.fr/'
    },
    {
    brandname: 'GUCCI',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://designetvue.files.wordpress.com/2014/04/logo-gucci.png?w=450',
    websiteUrl: 'https://www.gucci.com/fr/fr/'
    },
    {
    brandname: 'GUESS',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://static-pepper.dealabs.com/threads/thread_large/default/1318367_2.jpg',
    websiteUrl: 'https://www.guess.eu/'
    },
    {
    brandname: 'HALSTON',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://i.pinimg.com/280x280_RS/37/49/bc/3749bc0f946150940f3564f85e97c9b3.jpg',
    websiteUrl: 'https://halston.com/'
    },
    {
    brandname: 'HELLY HANSEN',
    categorie: 'Sport',
    logoUrl: 'https://www.pionniers-chamonix.com/mojolib/uploads/2019/01/Logo-Helly-Hansen-site.jpg',
    websiteUrl: 'https://www.hellyhansen.com/fr_fr/'
    },
    {
    brandname: 'HERMÈS',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://cdn.1min30.com/wp-content/uploads/2019/11/Herm%C3%A8s-Logo-1.jpg',
    websiteUrl: 'https://www.hermes.com/'
    },
    {
    brandname: 'HERSCHEL',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://i.pinimg.com/originals/08/b0/f0/08b0f01cb320415d27a017b4e8fa14e7.jpg',
    websiteUrl: 'https://herschelsupply.fr/'
    },
    {
    brandname: 'HOLUBAR',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://www.fashionsauce.com/img/brands/holubar-stockists.jpg',
    websiteUrl: 'https://www.holubar.com/en/'
    },
    {
    brandname: 'HYPSOE',
    categorie: 'Maison',
    logoUrl: 'https://cabana29.online/wp-content/uploads/2019/06/hypsoe-logo.jpg',
    websiteUrl: 'https://www.hypsoe.fr/'
    },
    {
    brandname: 'IIYAMA',
    categorie: 'Technologie',
    logoUrl: 'https://cdn.worldvectorlogo.com/logos/iiyama-1.svg',
    websiteUrl: 'https://iiyama.com/'
    },
    {
    brandname: 'ILIA',
    categorie: 'Beauté et Soins',
    logoUrl: 'https://i.vimeocdn.com/portrait/10206339_640x640',
    websiteUrl: 'https://iliabeauty.com/'
    },
    {
    brandname: 'IRO',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRtlf7c0Lx71fjtio3FCx4qxkDFoKJDrHxWBQ&usqp=CAU',
    websiteUrl: 'https://www.iroparis.com/fr'
    },
    {
    brandname: 'ISABEL MARANT',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://ladresse-boutique.com/pub/media/ves/brand/cache/i/s/isabelmarant-logo_500x455.jpg',
    websiteUrl: 'https://www.isabelmarant.com/fr'
    },
    {
    brandname: 'JACADI',
    categorie: 'Enfants',
    logoUrl: 'https://kirchberg-shopping.lu/media/sys_master/root/h14/h67/8952887509022/Jacadi-kirchberg062020.png',
    websiteUrl: 'https://www.jacadi.fr/'
    },
    {
    brandname: 'JANOD',
    categorie: 'Enfants',
    logoUrl: 'https://cdn.shopify.com/s/files/1/0659/5547/collections/janod_1200x1200.jpg?v=1490722636',
    websiteUrl: 'https://www.janod.com/fr/'
    },
    {
    brandname: 'JIMMY CHOO',
    categorie: 'Beauté et Soins',
    logoUrl: 'https://passion-stickers.com/4423-large_default/stickers-jimmychoo.jpg',
    websiteUrl: 'https://row.jimmychoo.com/'
    },
    {
    brandname: 'JONAK',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://pbs.twimg.com/profile_images/793096613443010560/jnYeE13q_400x400.jpg',
    websiteUrl: 'https://www.jonak.fr/'
    },
    {
    brandname: 'JORDAN',
    categorie: 'Sport',
    logoUrl: 'https://www.nicekicks.com/files/2020/06/air-jordan-jumpman-logo.jpg',
    websiteUrl: 'https://www.nike.com/fr/jordan'
    },
    {
    brandname: 'JULIETTE HAS A GUN',
    categorie: 'Beauté et Soins',
    logoUrl: 'data:image/png;base64,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',
    websiteUrl: 'https://www.juliettehasagun.com/'
    },
    {
    brandname: 'K-WAY',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://lirp-cdn.multiscreensite.com/47c8ae12/dms3rep/multi/opt/asset%2023-600x600-448w.jpeg',
    websiteUrl: 'https://www.k-way.fr/'
    },
    {
    brandname: 'KANGOL',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSBXcIIOsw1dkoNEp-3aVMi8EAAakeosf4CoA&usqp=CAU',
    websiteUrl: 'https://www.kangol.com/'
    },
    {
    brandname: 'KARL LAGERFELD',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://www.mybeauty.it/img/m/10809-large_default.jpg',
    websiteUrl: 'https://www.karl.com/fr'
    },
    {
    brandname: 'KATE SPADE NEW YORK',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR0mPMogPNTraYR0c5Y6krJw07x9-YvT94CpQ&usqp=CAU',
    websiteUrl: 'https://www.katespade.com/'
    },
    {
    brandname: 'KENZO',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://pingpong.fr/wp-content/uploads/2011/05/logo-KENZO.jpg',
    websiteUrl: 'https://m.kenzo.com/eu/fr/accueil'
    },
    {
    brandname: 'KICKERS',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRlCMrGZnyNC-CF2CWD-ceypsmcRgBWKFlCWg&usqp=CAU',
    websiteUrl: 'https://www.kickers.com/fr/'
    },
    {
    brandname: 'KIKO+ & GG',
    categorie: 'Enfants',
    logoUrl: 'https://powwowkids.com/wp-content/uploads/2019/09/powwowkids-logo-thumbnail-marques-partenaires-kiko-and-gg.jpg',
    websiteUrl: 'https://www.kikoandgg.com/'
    },
    {
    brandname: 'KITCHENAID',
    categorie: 'Maison',
    logoUrl: 'https://d1taeeuvo4duww.cloudfront.net/images/feature_variant/10/kitchenaid.png?t=1525990677',
    websiteUrl: 'https://www.kitchenaid.fr/'
    },
    {
    brandname: 'KUJTEN',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://payload.cargocollective.com/1/4/128060/7169741/Kujten-web-2.jpg',
    websiteUrl: 'https://www.kujten.com/fr/'
    },
    {   
    brandname: 'KYPRIS',
    categorie: 'Beauté et Soins',
    logoUrl: 'https://cdn.shopify.com/s/files/1/0075/8562/files/kypris-logo-feat.jpg?v=1579648721',
    websiteUrl: 'https://kyprisbeauty.com/'
    },
    {
    brandname: 'L\'OCCITANE EN PROVENCE',
    categorie: 'Beauté et Soins',
    logoUrl: 'https://cdn.1min30.com/wp-content/uploads/2018/01/lOccitane-logo-1.jpg',
    websiteUrl: 'https://fr.loccitane.com/'
    },
    {
    brandname: 'LA BOITE DU FROMAGER',
    categorie: 'Vin et Gastronomie',
    logoUrl: 'https://touteslesbox.fr/wp-content/uploads/2014/03/laboitedufromager-logo.png',
    websiteUrl: 'https://www.laboitedufromager.com/'
    },
    {
    brandname: 'LA COQUETA',
    categorie: 'Enfants',
    logoUrl: 'https://pbs.twimg.com/profile_images/1196719147977248771/vcj5oiyJ_400x400.jpg',
    websiteUrl: 'https://www.lacoquetakids.com/'
    },
    {
    brandname: 'LA PANOPLIE',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://pbs.twimg.com/profile_images/489083250451574785/BmBABm0j.jpeg',
    websiteUrl: 'http://la-panoplie.com/'
    },
    {
    brandname: 'LABEL CHAUSSETTE',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://coqprod.com/wp-content/uploads/2019/02/logo-labelchaussette.png',
    websiteUrl: 'https://www.label-chaussette.com/'
    },
    {
    brandname: 'LACOSTE',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://www.presenceleadership.net/wp-content/uploads/2017/12/logo-lacoste-c.jpg',
    websiteUrl: 'https://www.lacoste.com/fr/'
    },
    {
    brandname: 'LANCASTER',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://barretmaroquinerie.fr/site/wp-content/uploads/2017/01/logo-lancaster.jpg',
    websiteUrl: 'https://fr.lancaster.com/'
    },
    {
    brandname: 'LANCEL',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://barretmaroquinerie.fr/site/wp-content/uploads/2018/12/LOGO-LANCEL.png',
    websiteUrl: 'https://www.lancel.com/fr_fr/'
    },
    {
    brandname: 'LANCÔME',
    categorie: 'Beauté et Soins',
    logoUrl: 'https://www.brandslex.de/img/logos/xl/l/logo-lancome-01.png',
    websiteUrl: 'https://www.lancome.fr/'
    },
    {
    brandname: 'LANVIN',
    categorie: 'Beauté et Soins',
    logoUrl: 'https://i.pinimg.com/originals/a1/42/91/a1429172d99d9142a59f8f4f09ff0706.jpg',
    websiteUrl: 'https://www.lanvin.com/fr/'
    },
    {
    brandname: 'LE PETIT BALLON',
    categorie: 'Vin et Gastronomie',
    logoUrl: 'https://touteslesbox.fr/wp-content/uploads/2012/09/logo_le_petit_ballon_ttb-130x130@2x.jpg',
    websiteUrl: 'https://www.lepetitballon.com/'
    },
    {
    brandname: 'LE TANNEUR',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://barretmaroquinerie.fr/site/wp-content/uploads/2017/01/logo-letanneur.jpg',
    websiteUrl: 'https://www.letanneur.com/'
    },
    {
    brandname: 'LEGO',
    categorie: 'Jeux et Gadgets',
    logoUrl: 'https://grupoformax.com/wp-content/uploads/2020/07/Lego-Logo.jpg',
    websiteUrl: 'https://www.lego.com/fr-fr'
    },
    {
    brandname: 'LEICA',
    categorie: 'Technologie',
    logoUrl: 'https://www.brandslex.de/img/logos/xl/l/logo-leica-02.png',
    websiteUrl: 'https://fr.leica-camera.com/'
    },
    {
    brandname: 'LEVI\'S',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcROUpt8jv9HHaZc4sXhUHGYTaYCaaDrx7kG4g&usqp=CAU',
    websiteUrl: 'https://www.levi.com/'
    },
    {
    brandname: 'LIPAULT',
    categorie: 'Maison',
    logoUrl: 'https://barretmaroquinerie.fr/site/wp-content/uploads/2017/01/logo-lipault.jpg',
    websiteUrl: 'https://www.lipault.fr/fr/home/'
    },
    {
    brandname: 'LIU JO',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0013/7111/brand.gif?itok=0ApIyzC6',
    websiteUrl: 'https://www.liujo.com/fr/'
    },
    {
    brandname: 'LONGCHAMP',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://www.cegid.com/uploads/2018/11/longchamp_LOGO.png',
    websiteUrl: 'https://www.longchamp.com/fr/fr'
    },
    {
    brandname: 'LOU.YETU',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://media-exp1.licdn.com/dms/image/C4D0BAQGpxkLo6BdUQg/company-logo_200_200/0?e=2159024400&v=beta&t=8p5G9qU2CpSuOC9PtPeSbN624TMNbzgUEF1HHpHLcoM',
    websiteUrl: 'https://louyetu.fr/fr'
    },
    {
    brandname: 'LOUBOUTIN',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://passion-stickers.com/2540-home_default/stickers-christian-louboutin.jpg',
    websiteUrl: 'http://eu.christianlouboutin.com/fr_fr/'
    },
    {
    brandname: 'LOUIS VUITTON',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://journalduluxe.fr/wp-content/uploads/2018/08/Louis-Vuitton-Logo-3.jpg',
    websiteUrl: 'https://fr.louisvuitton.com/'
    },
    {
    brandname: 'LOVE MOSCHINO',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRTswOBkM7JDR6TMTT9E8p0wsFA6eOoBgDAVQ&usqp=CAU',
    websiteUrl: 'https://www.moschino.com/fr_fr/love-moschino.html'
    },
    {
    brandname: 'MAISON LEJABY',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://p.ventesprivees-fr.com/maison-lejaby.png',
    websiteUrl: 'https://www.maisonlejaby.com/'
    },
    {
    brandname: 'MAJE',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://cdn.palbin.com/users/31359/images/27576e3e4dc4721cee518fe834b4e5fa--maje-logo-google-1547724437.jpg',
    websiteUrl: 'https://fr.maje.com/'
    },
    {
    brandname: 'MAKE UP FOREVER',
    categorie: 'Beauté et Soins',
    logoUrl: '',
    websiteUrl: 'https://www.makeupforever.com/fr/fr'
    },
    {
    brandname: 'MANFIELD',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://p.ventesprivees-fr.com/manfield.png',
    websiteUrl: 'https://www.manfield.fr/'
    },
    {
    brandname: 'MARC JACOBS',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://cdn.1min30.com/wp-content/uploads/2019/11/Marc-Jacobs.jpg',
    websiteUrl: 'https://www.marcjacobs.com/'
    },
    {
    brandname: 'MARSHALL',
    categorie: 'Maison',
    logoUrl: 'https://cdn2.bigcommerce.com/server1500/ac84d/products/837/images/1788/Marshall_Amplification_-_Logo__49156.1324795724.380.380.jpg?c=2',
    websiteUrl: 'http://www.marshallamps.fr/'
    },
    {
    brandname: 'MELLOW YELLOW',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://le133cannes.com/wp-content/uploads/2017/02/mellow-yellow-logo.png',
    websiteUrl: 'https://mellowyellow.com/'
    },
    {
    brandname: 'MERI MERI',
    categorie: 'Maison',
    logoUrl: 'https://cdn.shopify.com/s/files/1/1404/9714/collections/AAEAAQAAAAAAAAlCAAAAJGY4Yzg4OTIxLWUzYzctNDFlMC1iYTNhLWM3YmE3Yjg0YmU5MA_1200x630.png?v=1495127582',
    websiteUrl: 'https://merimeri.com/'
    },
    {
    brandname: 'MICHAEL KORS',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://cdn.1min30.com/wp-content/uploads/2019/04/Michael-Kors-logo-1.jpg',
    websiteUrl: 'https://www.michaelkors.fr/'
    },
    {
    brandname: 'MIU MIU',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://i.pinimg.com/originals/b9/e2/08/b9e20804c67acf5c3e50db91f7d62ac0.jpg',
    websiteUrl: 'https://www.miumiu.com/fr/fr.html'
    },
    {
    brandname: 'MIZUNO',
    categorie: 'Sport',
    logoUrl: 'https://www.groupement-eurogolf.com/uploads/brands/images/mizuno-630x630.png',
    websiteUrl: 'https://emea.mizuno.com/eu/fr-fr/home/'
    },
    {
    brandname: 'MONCLER',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://i.pinimg.com/originals/02/3a/4b/023a4b43dee70bfdbdedc5e983883cae.jpg',
    websiteUrl: 'https://www.moncler.com/'
    },
    {
    brandname: 'MONTBLANC',
    categorie: 'Maison',
    logoUrl: 'https://i.pinimg.com/originals/4e/5f/fe/4e5ffef0dfba17637143d206c8e87f6d.jpg',
    websiteUrl: 'https://www.montblanc.com/fr-fr/home.html'
    },
    {
    brandname: 'MULBERRY',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://www.jacksoninteriors.co.uk/wp-content/uploads/2018/11/Screen-Shot-2018-11-23-at-10.49.38.png',
    websiteUrl: 'https://www.mulberry.com/fr/'
    },
    {
    brandname: 'MVMT',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://cdn.shopify.com/s/files/1/1288/3045/files/MVMT_Logo-01.jpg?895739141999749972',
    websiteUrl: 'https://www.mvmtwatches.com/'
    },
    {
    brandname: 'NAPAPIJRI',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://www.groupevuillermet.fr/wp-content/uploads/2014/09/logo-Napapijri-Chambery.jpg',
    websiteUrl: 'https://www.napapijri.fr/'
    },
    {
    brandname: 'NARS COSMETICS',
    categorie: 'Beauté et Soins',
    logoUrl: 'https://www.dealninja.com/wp-content/uploads/2017/11/nars-logo.png',
    websiteUrl: 'https://www.narscosmetics.fr/fr'
    },
    {
    brandname: 'NAT ET NIN',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://www.brandarex.fr/public/images/brands/1076@2x.png',
    websiteUrl: 'https://www.nat-nin.fr/fr/'
    },
    {
    brandname: 'NESPRESSO',
    categorie: 'Maison',
    logoUrl: 'https://cdn.1min30.com/wp-content/uploads/2018/06/Logo-Nespresso-1.jpg',
    websiteUrl: 'https://www.nespresso.com/fr/fr/'
    },
    {
    brandname: 'NEW BALANCE',
    categorie: 'Sport',
    logoUrl: 'https://media.cdnws.com/_i/69106/302/1800/5/lofo-nb.gif',
    websiteUrl: 'https://www.newbalance.fr/'
    },
    {
    brandname: 'NIKE',
    categorie: 'Sport',
    logoUrl: 'https://i.pinimg.com/originals/c8/06/c3/c806c3221ebfbfac514a472e988abb75.jpg',
    websiteUrl: 'https://www.nike.com/fr/   '
    },
    {
    brandname: 'NIKON',
    categorie: 'Technologie',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/fr/thumb/d/d3/Nikon_logo.svg/1024px-Nikon_logo.svg.png',
    websiteUrl: 'https://store.nikon.fr/'
    },
    {
    brandname: 'NINE WEST',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0014/9268/brand.gif?itok=dWaeAvKF',
    websiteUrl: 'https://ninewest.com/'
    },
    {
    brandname: 'NINTENDO',
    categorie: 'Jeux et Gadgets',
    logoUrl: 'https://mlpnk72yciwc.i.optimole.com/cqhiHLc-q96KEeDo/w:auto/h:auto/q:90/https://bleedingcool.com/wp-content/uploads/2019/07/nintendo-logo-large-red-white.jpg',
    websiteUrl: 'https://www.nintendo.fr/'
    },
    {
    brandname: 'NOBODINOZ',
    categorie: 'Enfants',
    logoUrl: 'https://www.berceaumagique.com/images/marques/logo/nobodinoz.jpg',
    websiteUrl: 'https://www.nobodinoz.com/fr'
    },
    {
    brandname: 'NUXE',
    categorie: 'Beauté et Soins',
    logoUrl: 'https://pbs.twimg.com/profile_images/989496105326039040/gJ2ZFFXg_400x400.jpg',
    websiteUrl: 'https://fr.nuxe.com/'
    },
    {
    brandname: 'OBEY',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://cdn.1min30.com/wp-content/uploads/2019/04/Logo-Obey-1.jpg',
    websiteUrl: 'https://obeyclothing.com/'
    },
    {
    brandname: 'OMEGA',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://i.pinimg.com/originals/e8/95/90/e89590f53bbc359fb43dbb2c6e2e8deb.png',
    websiteUrl: 'https://www.omegawatches.com/fr/'
    },
    {
    brandname: 'OPI',
    categorie: 'Beauté et Soins',
    logoUrl: 'https://i.pinimg.com/originals/7d/41/9e/7d419e3bc0fe3abe2d9c2ab1a54d9c3a.png',
    websiteUrl: 'http://boutique.opi-france.com/'
    },
    {
    brandname: 'P.F. CANDLE CO.',
    categorie: 'Maison',
    logoUrl: 'https://www.dealexpert.net/wp-content/uploads/2020/06/pfcandlecocom-1.jpg',
    websiteUrl: 'https://pfcandleco.eu/'
    },
    {
    brandname: 'PACO RABANNE',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQYX3tRqDezWkOzQclcmoN8nWdBXuVSvyl0Iw&usqp=CAU',
    websiteUrl: 'https://www.pacorabanne.com/'
    },
    {
    brandname: 'PANDORA',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://cdn.1min30.com/wp-content/uploads/2018/06/Logo-Pandora-1.jpg',
    websiteUrl: 'https://fr.pandora.net/fr/'
    },
    {
    brandname: 'PATAGONIA',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://cdn11.bigcommerce.com/s-sq9zkarfah/products/73175/images/152332/Patagonia-Mountain-Decal-Sticker__53711.1510987342.500.750.jpg?c=2',
    websiteUrl: 'https://eu.patagonia.com/'
    },
    {
    brandname: 'PAUL & JOE',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://media.glassdoor.com/sqll/1134715/paul-and-joe-squarelogo-1456487241636.png',
    websiteUrl: 'https://paulandjoe.com/        '
    },
    {
    brandname: 'PAUL SMITH',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://media.glassdoor.com/sqll/281358/paul-smith-squarelogo-1425036863090.png',
    websiteUrl: 'https://www.paulsmith.com/'
    },
    {
    brandname: 'PD PAOLA',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://joyeriaminguez.com/img/marcas/5256.jpg',
    websiteUrl: 'https://www.pdpaola.com/fr'
    },
    {
    brandname: 'PHILIPP PLEIN',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://fimgs.net/mdimg/dizajneri/o.3827.jpg',
    websiteUrl: 'https://www.pleinkids.com/fr/home/'
    },
    {
    brandname: 'PIERRE HERMÉ',
    categorie: 'Vin et Gastronomie',
    logoUrl: 'https://www.catchonco.com/wp-content/uploads/2020/05/Pierre-Herme.jpg',
    websiteUrl: 'https://www.pierreherme.com/'
    },
    {
    brandname: 'PRADA',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://passion-stickers.com/2234-large_default/stickers-prada.jpg',
    websiteUrl: 'https://www.prada.com/fr/fr.html'
    },
    {
    brandname: 'RALPH LAUREN',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0023/8425/brand.gif',
    websiteUrl: 'https://www.ralphlauren.fr/'
    },
    {
    brandname: 'RAY BAN',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://lensvision.imgix.net/out/pictures/generated/product/3/665_665_75/ray-ban-sonnenbrillen-logo-weiss.jpg',
    websiteUrl: 'https://www.ray-ban.com/france'
    },
    {
    brandname: 'REDSKINS',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://www.radins.com/uploads/merchant-logo/code-promo-redskins.',
    websiteUrl: 'https://www.redskins.fr/'
    },
    {
    brandname: 'REEBOK',
    categorie: 'Sport',
    logoUrl: 'https://preview.thenewsmarket.com/Previews/RBOK/VideoAssets/320x320/RBOK_48649_551153.jpg',
    websiteUrl: 'https://www.reebok.fr/'
    },
    {
    brandname: 'REPETTO',
    categorie: 'Sport',
    logoUrl: 'https://lh3.googleusercontent.com/proxy/MwMj1ZZ4yEwu4nGhrsQM2gI-BaImQLagq9hdlCHgL3R87KiDqDSaS-gHxZamoPy2um1CdfREtzNYNEAhPk8_MOeUrQXXoIkXHJBlLnewH8p3XUz_HGTtykjC3Xc',
    websiteUrl: 'https://www.repetto.fr/'
    },
    {
    brandname: 'RITUALS',
    categorie: 'Beauté et Soins',
    logoUrl: 'https://www.commeuncamion.com/content/uploads/2019/06/logo-rituals-jpg.png',
    websiteUrl: 'https://www.rituals.com/'
    },
    {
    brandname: 'ROSSIGNOL',
    categorie: 'Sport',
    logoUrl: 'https://i.pinimg.com/originals/3a/04/3c/3a043ceb0b50bccb98c275638168c6e2.jpg',
    websiteUrl: 'https://www.rossignol.com/fr/'
    },
    {
    brandname: 'S.T. DUPONT',
    categorie: 'Maison',
    logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQgRzNVvIBxbc0Hi20tH7R5uvHB_D6ZjQTZnA&usqp=CAU',
    websiteUrl: 'https://www.st-dupont.com/fr'
    },
    {
    brandname: 'SAINT LAURENT',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://cdn0.dontpayfull.com/media/logos/size/300x300/ysl.com.jpg?v=20190621130906542039',
    websiteUrl: 'https://www.ysl.com/fr'
    },
    {
    brandname: 'SAMSONITE',
    categorie: 'Maison',
    logoUrl: 'data:image/png;base64,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',
    websiteUrl: 'https://www.samsonite.fr/'
    },
    {
    brandname: 'SANDRO',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://ad19f3f32c8ffcbb36a3-900e03d2c940cd7044aba7e8955d765a.ssl.cf2.rackcdn.com/logos/260/66779_sq.jpg',
    websiteUrl: 'https://fr.sandro-paris.com/'
    },
    {
    brandname: 'SCHOTT',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT23OiaJGNPKEbj4FSzDDbF_RRX3xi5i1XjMw&usqp=CAU',
    websiteUrl: 'https://www.schott-store.com/'
    },
    {
    brandname: 'SEAFOLLY',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://www.brandarex.fr/public/images/brands/2394@2x.png',
    websiteUrl: 'https://www.seafolly.com/'
    },
    {
    brandname: 'SESSUN',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://i.pinimg.com/236x/8e/ed/4e/8eed4ebef8e99799f8a3f0d6e6c6d93a.jpg',
    websiteUrl: 'https://fr.sessun.com/'
    },
    {
    brandname: 'SÉZANE',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://media.glassdoor.com/sqll/2386904/s%C3%A9zane-squarelogo-1545662083837.png',
    websiteUrl: 'https://www.sezane.com/'
    },
    {
    brandname: 'SISLEY',
    categorie: 'Beauté et Soins',
    logoUrl: 'https://media.glassdoor.com/sqll/846022/sisley-squarelogo-1408371226026.png',
    websiteUrl: 'https://www.sisley-paris.com/'
    },
    {
    brandname: 'SOLUDOS',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://www.logolynx.com/images/logolynx/s_54/541623695c3cee82d6a480acaa5c7670.jpeg',
    websiteUrl: 'https://europe.soludos.com/'
    },
    {
    brandname: 'STEAMONE',
    categorie: 'Maison',
    logoUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAFVBMVEX///8AAADh296TkpI6OjoNMZDlBAiU5gD8AAAClElEQVR4nO3Y3ZKrIBBFYenmnPd/5In8NghOUkGTqVrfzSQTJGylEbNtAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf4qoqsSX9dWCLpf0tIB4F+j+xqe/79HYo/ML+npfHs1jPNuahOJc0+eHheE8ppSPw1mQUOLVewgZl4zyHeU87+ORBQlDwFzVX3AVpRmO3xOG0x//J93CM3h/aOhrj7F77dqOu7qM1Hm0n/AtrTr7GCVVqM8DaZakrVSw5A80d2hGrql/26QeumJVeyHhJiImoVkvpBlVnni5qVPbUNt5mQLL5NA7InaVUhOmFUhzRG2XJBO4WTn7Qg7vpWkSyzN1fX3EuJaWeVUGqPnaSRqWs0uSxveSg2qah+HENOUVrqk2TWpxat/6ErnatEloyim+zAVlBy35+Bg9nKpBQreVSOGFr9NmzQbjN2LLPn+lCRT/Z8YSUtR6s4XqpwlrE3uZ7ddcSkJ17bPOJmwKzI781YRyaGLdtXuVONtyQn+WcG80STisw+9ImCbfJKF7OuFoLf1own7gZpZ6MfpZOk3YVVYId0woTd+fStguAd1KM01o9mnpMLe1CQ8T+Vp2UqUFJO6y6kBHd4t5wnZfGm+EXUJzt3DX3y20fIeU0+3zFmZ+xz9JuJnaSvdKmV1mf8flDJswszvzufxd/MDnAdtd22nC4/Nhl7B05W64hFuzakp9f7rzPk94fMbvE5qubvmZo2xpzNSqV2309DS/W7i2y3RoTZhLMDe4727fPo02T8CDhuF3tPLRsLWo6VMGTW57Agbwef+e9eqqoP+fdPX9goR/P6E87Vs6BgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwKf8AOEpECvo/S7kAAAAAElFTkSuQmCC',
    websiteUrl: 'https://steam-one.com/fr/'
    },
    {
    brandname: 'STONE ISLAND',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://res.cloudinary.com/streethub/image/upload/v1572455899/manufacturer/5c7a321b11250e0003b0705b/jnrinxsgx7hulynrizfr.jpg',
    websiteUrl: 'https://www.stoneisland.com/us'
    },
    {
    brandname: 'TARTINE ET CHOCOLAT',
    categorie: 'Enfants',
    logoUrl: 'https://www.lejournaldesventes.fr/logos/tartine-et-chocolat.png',
    websiteUrl: 'http://tartine-et-chocolat.com/'
    },
    {
    brandname: 'TED BAKER',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://www.commeuncamion.com/content/uploads/2010/04/logo-ted-baker-2019.png',
    websiteUrl: 'https://www.tedbaker.com/fr'
    },
    {
    brandname: 'THE KOOPLES',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://cdn.welcometothejungle.co/uploads/organization/logo/5121/151395/the-kooples.png',
    websiteUrl: 'https://www.thekooples.com/fr_fr'
    },
    {
    brandname: 'THE NORTH FACE',
    categorie: 'Sport',
    logoUrl: 'https://www.vitrinesannecy.fr/wp-content/uploads/2019/01/TNF-logo-google-1200x1200.jpg',
    websiteUrl: 'https://www.thenorthface.fr/'
    },
    {
    brandname: 'TIFFANY & CO',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://www.talkwalker.com/Pictures/Brands/small/csm-tiffany-co-68dcb10b6d..png',
    websiteUrl: 'https://www.international.tiffany.com/'
    },
    {
    brandname: 'TIMBERLAND',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://www.sokid.fr/media/catalog/category/_0005_timberland.jpg.jpg',
    websiteUrl: 'https://www.timberland.fr/homepage.html'
    },
    {
    brandname: 'TISSOT',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://www2.wempe.com/-/media/wempe/01_uhren/02_auswahl/baselworld-2018/logo-schwarz/logo_tissot_black.png?mh=600&w=450&mw=450&h=600&crop=1&la=en&hash=5AD002F5D258BEE09B7E223BD30299BECBA87F09',
    websiteUrl: 'https://www.tissotwatches.com/'
    },
    {
    brandname: 'TOD\'S',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://www.lejournaldesventes.fr/logos/tods.png',
    websiteUrl: 'https://www.tods.com/'
    },
    {
    brandname: 'TOM FORD',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://i.pinimg.com/originals/4f/88/34/4f8834b46ec7291c03d0e28f1cf333b9.jpg',
    websiteUrl: 'https://www.tomford.com/'
    },
    {
    brandname: 'TOMMY HILFIGER',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQAFUCfh6X1HXOsprlrl58NUmaFnOg39Z33xw&usqp=CAU',
    websiteUrl: 'https://fr.tommy.com/'
    },
    {
    brandname: 'UGG',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://cdn.1min30.com/wp-content/uploads/2019/11/UGG.jpg',
    websiteUrl: 'https://www.ugg.com/eu/fr/fr/'
    },
    {
    brandname: 'UNDER ARMOUR',
    categorie: 'Sport',
    logoUrl: 'https://www.footkorner.com/media/amshopby/big302.jpg',
    websiteUrl: 'https://www.underarmour.fr/fr-fr/'
    },
    {
    brandname: 'URBAN DECAY',
    categorie: 'Beauté et Soins',
    logoUrl: 'https://i.pinimg.com/originals/6d/de/3d/6dde3db970d5eb1e9c3d7713a298dfb0.jpg',
    websiteUrl: 'https://www.urbandecay.fr/'
    },
    {
    brandname: 'VALENTINO',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://lh3.googleusercontent.com/proxy/-Ierk3OUESJnhCOoIlT-cNt1tMZwi7Nok0qd5NLgGhbpGnV6sClIWOVV6aB31CUUoYVpW2u6rne1wNxXFDtshZjhb1IDue1dxOAuZ0F6pbWYJYdQkJTIblB8t0ApBP2r1QlmxGjb',
    websiteUrl: 'https://www.valentino.com/'
    },
    {
    brandname: 'VANS',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://m.media-amazon.com/images/I/313XxSn5RdL._AC_SS350_.jpg',
    websiteUrl: 'https://www.vans.fr/'
    },
    {
    brandname: 'VEJA',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://i1.wp.com/www.incognitobilbao.es/wp-content/uploads/2018/10/veja-logo.jpg?fit=400%2C395',
    websiteUrl: 'http://www.veja-store.com/'
    },
    {
    brandname: 'VERSACE',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://cdn.1min30.com/wp-content/uploads/2017/04/Versace-logo-1.jpg',
    websiteUrl: 'https://www.versace.com/fr/fr-fr/home/'
    },
    {
    brandname: 'VICTORIA SECRET',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://cdn.1min30.com/wp-content/uploads/2019/01/Victoria-Secret-Logo-1.jpg',
    websiteUrl: 'https://victoriassecret.com/'
    },
    {
    brandname: 'VILEBREQUIN',
    categorie: 'Mode et Accessoires',
    logoUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAwFBMVEX///8AL18AAEkAKVsAGlIAL10ALVzCx9Ccp7nW3+fw9Pc2SW6hrL0AGlQAFVBmepIAIVdRZYUsQ2yBj6UAJ1sAFlBgdJHCzNgAIFYAKlyyvcqGlaoADU2zv82RobRndpLL1N50h6CptcUAAEr19/kWN2QAAEUAC0ze4+oAAD7o7PEADU4AAENtgZxAWX0WNGNNYYEAADImO2UyQmgUPmo8UXZDVHYnSHEAADtZeJgAAA0AACYAADZDYYYhN2NzgJdbPBonAAAKnElEQVR4nO2be3+iuBqACRdHUChiuEQQkaJSWi8zU6d7zp7tfP9vtXkDWLSttzK70995nz8qBAh5eEMSApUkBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEF+EyZU+4zQydmGN3bnM2LfnG9ItY5pWZZrWeXf33/BMjsavcSw8xR3PxfxrHORoTI4e+ffhMy52DDp9j8PvmRcbjh9cEvM3x/Zu8ZwaJFPg3qDhv/HhjSwbbrLyOZ0+E8QBIyvMlivt9Ggxq432bCjzTTykgAwsb8SlNs5pNwhUIFqs80Xab1gV/lDArUbJVJ4FvaHDJm3XE7/qjOcLTmPrLOcTqdPjNAV/13WgoNpzXLWYU+7tQETxs0EUdDVLmG6BpHOYDrkTAcUNrNlGIYbvqRM+IJHieLBoZTY4lepTvoXX7lRiHa9oeXzNV/WyssKfWT2jbGM/04CYsX8tyDlNZfHu6ON7yz4+ZJZ3uNBaibokCAOrnhkJNjm9VrigBishrwEZsIXxhGx4PdLRGT41auaY3Uhf7VzfQw1UY68uiHVIWQeEVrwX08lVggbWWk4H+2OLr4xuzkGzvhF2E+YMU0cXDFjjDU2Fx1eP3QwdLmhXxnC78giMvxKThlEUTzd/IihCgXLWHXFUjjZnCgXGkpddd9Q6lukafjI1H5z89A8ZbhUWzIk9goMt6WEmvCV2D0SQyMHktqQL8OuUhKQXYKojIlcHpyJ/fMZsxNxaZJE7D9enDIcRQeGy2sNlTWsemVTs4bS8fvv/RimDzDSV6tKWdiRJYuabZcJxtyybkXCbXlwegf7m3x/MPRlWX6Gc4zlU4Y5ayuGTAWbUNQJujX4VV/RIzFMo7pbEYZrRtg3flBSG8o8R9YwHMn1/mAYLgiJ/LMMsx+0JUMSJaLgvDHVVA9K/dw5FsPXhs6h4axpON8zjKrG+7ShNHRbM4SCJ6K7EGXSeUN/UQx/kaEftWRYdhfFLWS3gKZ0xE/6O8SwaOs+JAFUTUmMpO6hFLwhvyyGz8ZLW2rcMqLs3Ye31xpKYljThiHrwfpWDKQMyDjQzjcklJow6kjdyvBeoUG33K8ypJRdZ9i1tHYMO1QM0fgoSenBUo8eraVzuxxHl91fxoHfR2U/wegpVY/P10XDf7lhIrcUQ7KADirmi4EICx9QHYnh+MfAm7wYlhQD9SDBM7WXMU2hXGUowXi4hR6fG4oz8EUXckugZzwxaoNTN4USRdlP8DuUfNzQs1uKoQUjRt5UkEg0pdAznhh50wNDybA6+wk5JS8j7+K6Wiru+VYMTRhlQat4D+cc8vp1KoY7Q2OzXW2hQHHdlj4+9RzYr+uWB4/t5+fZlYa6W/VlHzW0RXfBGxgTmtKNeNo+YpgZmVIbFkpAA2ifErXuDykNoD9M6nHpXFGUK9pS2CjNlHZiqPREJ2EzBzYInfdjmHiDHw4jr8aldQwXVY9fP1uMFtf1h31RgqAdQya6walKIZaG6KGP9IcPVGFvjGmCgzHNi6F2lWEXJhT48KoVQxLBufqWCiVK5icM6+m5X2zYn8KZ1+0YagtR/UwxBE9Frbp8XPq+4XW1NP0BA4cVbSmGYqqmfIyqHhRbM0znVFEgg0sNq8fWVnp8OJgX1jGFFr00hsrzMUN/tXp6JLR6xg/5ZuvLWYZ3cCP6VjsxtDe8RmQbKFgm2snzY2jJ92Y1YHjbUJAZj4wmIqvbuayfZTiHG7F4bsdQ+Q5Ckw1kaZKTMdQIqwdpma+LiaVGf/iWIcwmljNRUu6LiaqThqP7LdyI3rwVQ8bgrEO4aP49ORHDue1G5Mf6YPIwNLWDJ2B5b0Z4xtS4uX9tOHzX0GKwPf6jFcMy7z7Utn6knYhhsBn6ef59f740h2cLOLlxD4Z5nvsLPhrMst3TFWNq3jggtErD/oPNojcNXRdGyUk7hpoYcvuJuKba8RgWolYWTtMwSymvtswZbHtiCEqs+3vI2TYDuna2G28az3iea393hB4wEoiB2cgzt8VbhqaYe8iCdmIoxt5wsbNB8EYthSn7iJ+5MeftiPcWRjLuLlfEWggvZlOlep/SgCm2rbriPdbtbAL5ZkUfroi5X21fxVBUdskLWzG0648WDIe+0dLQiG66uteY1TccpmwnvXVg8jCxV1bvwaIcZj7Wphj7PheN8qTzQ8PyTU23HUOlV6Xm1Ruf/RiuunkGzVplaCSxx+Dt4AVuFeJeDKuTBNuG4kTVDg0j0Q0NpRZ6fN42VOfyq95uL4YVgznvg7MkHswiK7hUrcISL+jqKxOswyQrMx8H5DCGWiBe9bUTw7Jd43QXb8SwwpPjdBDMLdoh2pWCRHGyhiG/F2V70NezPIw6rwxJx4ad9XYM3aqZW6pl4V/H0PC3LIiCD9gJbMc3pGbt7tBIZWo5m3JgSOZJdfI2DLtl6uat+xD0pr3gdTN5DdR2BodpVW8kWpam4W7I0IJhsCxNqhev+zHUw22ktuMnfOg7G9T0wJDWTXwb9+G2zKmuPrsYxlK6kaP3ytQy7lNsjBuGhBitGTIqEv2dcWWoPNGF/XZxfgWKFTwpDcPIb82QyKK76Jr1qSrD+hZ5Axs+gWE2PGXwYQu/Rkr56Q18VSOW+ZGBSjUFvo2BREYbn+a8Cz+qfHrihpo7bM+wbLYmdQmoIWX9x2P3HvXCAWWP3ooSz1ndUMd7WnqTCeFDncnEe/KW3pqyZbgyV95yEEAiT5t465OKMP6IizKG4sFVaqPHJ9WYc7u74Yq0tzg2YgnCbCT9vB1KvkwkL5VWE+M/hZTpM3fKw++HUsKrfGr4xrbPF6cxH7F7fpHBDOgZitasm8JsSvlY104MxVRNRmqp9VpWjnZ8dp7+N57e+eN8zaRBKqUDY/21CP8IbPdWj/+cSl8nxbZYfi3irv5nmoT6/76q1p3uy8cyfYFZakcUa9SWYflVja6+nOJEEYK+lPbkhfRXPqHcMMm9YnZrxOY03NC8ezeVJsnYyTxZ78f5Jh+HWb+/5V1P77JWWVOXrcWQ/pDK909nwqJhnk0d6Tnpm9wwHfdzMKS5EbvCcJyFTjaY62ks6b4TZ+Px1jTSxemc96BOa4aMZPDS9fxzx7z0/k9Jz/Q5NxxPsmLNDa31c4cJw7uw6BneXR7HuhVF3fzu7iEuZhd/7WnrbRmS+xyeYM4/c55vjO6XxBlKVPJGvixls9usvER5/24oqcPiWfdvpEmaB8TkdTodSHk/fbzwgUudtmYIndDT+XcJfRwnXSX1LGf0NFpNw4dpf632y96mu1wMUmWVOrOxHs6XMXxPORqPvZT/udSQWI7ekiE8bpbt13kolsufCXhP7youtQMSuEwzy+6Up1KLKa7C+D6EQsWglmXZ8PnXxc/MGrXjVgw1N8yW51fSfxJmDfzg4z0+UVYr91/UOArMKHzgG+EKTfmHHiCu5coYLpjyWbCuimH4rfdp+D69xjAzPhHZxf/ZxTb6JyP5dpmhptzKn4v5hf9h+W//S+9VXGDoLdTPyMI72zD58jlJzjZEEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEOQX8zez/MWzUFmu6QAAAABJRU5ErkJggg==',
    websiteUrl: 'https://www.vilebrequin.com/eu/fr/home'
    },
    {
    brandname: 'VILLEROY & BOCH',
    categorie: 'Maison',
    logoUrl: 'https://s3-eu-west-1.amazonaws.com/lovethecdn2/categories/villeroy-boch-logo.jpg',
    websiteUrl: 'https://www.villeroy-boch.fr/shop/'
    },
    {
    brandname: 'WAEKURA',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://i.pinimg.com/280x280_RS/92/26/5f/92265f80ccdfd5da95867bc822d0e3e7.jpg',
    websiteUrl: 'https://www.waekura.com/'
    },
    {
    brandname: 'WITHINGS',
    categorie: 'Technologie',
    logoUrl: 'https://bespaardeals.nl/wp-content/themes/template_basic_Spot/timthumb.php?src=https://bespaardeals.nl/wp-content/uploads/2020/04/kortingscode-Withings.jpg&h=200&w=200&zc=1;q=100',
    websiteUrl: 'https://www.withings.com/fr/fr/store'
    },
    {
    brandname: 'XIAOMI',
    categorie: 'Technologie',
    logoUrl: 'https://kingaccessoires.com/wp-content/uploads/2018/12/langfr-280px-Xiaomi_logo.svg_.png',
    websiteUrl: 'https://www.mi.com/fr/index.html'
    },
    {
    brandname: 'YAY PARIS',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSIL7xZahoN34AMdtf98wdoGFLYGFKEpm2N_w&usqp=CAU',
    websiteUrl: 'https://yay.paris/'
    },
    {
    brandname: 'YSÉ',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://kingaccessoires.com/wp-content/uploads/2018/12/langfr-280px-Xiaomi_logo.svg_.png',
    websiteUrl: 'https://www.yse-paris.com/fr/'
    },
    {
    brandname: 'ZADIG & VOLTAIRE',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://passion-stickers.com/2541-home_default/stickers-zadig-voltaire.jpg',
    websiteUrl: 'www.zadig-et-voltaire.com'
    }                                                                      
]

// importer toutes les marques dans la bdd
Brand.create(brands).then(brands => {
    console.log(`OK, ${brands.length} have been created.`);
  
    mongoose.connection.close();
}).catch(err => {
    console.log('oops',err)
});

// apres avoir ecrit le code : node bin/seeds.js pour injecter ds mongodb