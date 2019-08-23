// Création d'un router pour la partie /analytics
const router = require('express').Router();
const passport = require('passport');

const Auth = require('../../core/auth.core');

const AuthController = require('../controller/auth.controller');

// Définition des routes
// router.post('/login', AuthController.login);
router.post('/login', passport.authenticate('local'), function(req, res) {
  console.log('res:', res);
  console.log('req:', req);
  return res.status(200).send({
    auth: true
  });
});

router.get('/logout', AuthController.logout);

module.exports = router;
