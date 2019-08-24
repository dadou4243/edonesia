const passport = require('passport');

const MongoCore = require('../core/database.core');
const UserMongo = MongoCore.UserMongo;

// use static authenticate method of model in LocalStrategy
passport.use(UserMongo.createStrategy());

// use static serialize and deserialize of model for passport session support
passport.serializeUser(UserMongo.serializeUser());
passport.deserializeUser(UserMongo.deserializeUser());
