const passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
const UserSchema = require('./dao/models/user.model');

// use static authenticate method of model in LocalStrategy
passport.use(UserSchema.createStrategy());

// use static serialize and deserialize of model for passport session support
passport.serializeUser(UserSchema.serializeUser());
passport.deserializeUser(UserSchema.deserializeUser());
