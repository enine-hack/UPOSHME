const { Schema, model } = require('mongoose');

const brandSchema = new Schema({
    brandname: String,
    categorie: String,
    logoUrl: String,
    websiteUrl: String,
    },
    {
        timestamps: true
    }
);

module.exports = model('Brand', brandSchema);