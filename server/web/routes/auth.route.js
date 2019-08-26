// Création d'un router pour la partie /analytics
const router = require('express').Router();
const passport = require('passport');

const lodash = require('lodash');

const AuthController = require('../controller/auth.controller');

router.post('/login', (req, res, next) =>
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).send({ success: false, message: info.message });
    }
    // if user, Log in
    req.logIn(user, function(err) {
      if (err) {
        return next(err);
      }
      return res.status(200).send({
        data: {
          firstName: lodash.get(user, 'firstName'),
          lastName: lodash.get(user, 'lastName'),
          email: lodash.get(user, 'email')
        },
        isConnected: true
      });
    });
  })(req, res, next)
);

router.get('/logout', AuthController.logout);

module.exports = router;
