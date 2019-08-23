(function() {
  'use strict';

  const mongoose = require('mongoose');
  const passportLocalMongoose = require('passport-local-mongoose');

  const UserSchema = new mongoose.Schema(
    {
      email: {
        type: String,
        unique: true,
        required: true
      },
      // password: {
      //   type: String,
      //   required: true
      // },
      firstName: String,
      lastName: String,
      role: String
    },
    {
      timestamps: true
    }
  );

  UserSchema.plugin(passportLocalMongoose, { usernameField: 'email' });

  exports.UserSchema = UserSchema;
})();
