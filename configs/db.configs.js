const mongoose = require('mongoose');
const User = require('../models/user.model')
const Business = require('../models/business.model')

mongoose.connect('mongodb://localhost/uposhme', {
    useNewUrlParser: true, 
    useCreateIndex: true, 
    useUnifiedTopology: true
    }).then(() => {   
     console.log('Connected to Mongo!');  
    }).catch(err => console.error('Error connecting to mongo', err));