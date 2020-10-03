const { Schema, model } = require('mongoose');

const businessSchema = new Schema(
  {
    society: {
        type: String,
        trim: true,
        required: [true, 'Name of society is required.']
      },
    activity: {
      type: String,
      trim: true,
      required: [true, 'Activity is required.']
         //match : mettre une liste deroulante ou contrainte de 2 characters type FR
    },
    country: {
        type: String,
        trim: true,
        required: [true, 'Country is required.']
        //match : mettre une liste deroulante ou contrainte de 2 characters type FR
      },
    firstname: {
        type: String,
        trim: true,
        required: [true, 'Firstname is required.']
      },
    lastname: {
        type: String,
        trim: true,
        required: [true, 'Lastname is required.']
      },
    phone: {
        type: Number,
        trim: true,
        required: [true, 'Phone number is required.']
      },
    email: {
      type: String,
      required: [true, 'Email is required.'],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/.*@.*\..*/, 'Invalid email']
    }
  },
  {
    timestamps: true
  }
);

module.exports = model('Business', businessSchema);