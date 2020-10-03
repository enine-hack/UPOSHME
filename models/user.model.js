const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    civilite: {
      type: String, enum: ['Monsieur', 'Madame']
        // trim: true,
        // required: [true, 'civilite is required.']
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
    email: {
      type: String,
      required: [true, 'Email is required.'],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/.*@.*\..*/, 'Invalid email']
    },
    passwordHash: {
      type: String,
      required: [true, 'Password is required.']
    },
    registrationDate: {
      type: Date,
    },
    favoritebrands: [{ type : Schema.Types.ObjectId, ref: 'Brand' }]
  },
  {
    timestamps: true
  }
);

module.exports = model('User', userSchema);