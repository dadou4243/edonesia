// Création d'un router pour la partie /analytics
const router = require('express').Router();
const passport = require('passport');

const Auth = require('../../core/auth.core');

const AuthController = require('../controller/auth.controller');

// Définition des routes
// router.post('/login', AuthController.login);
// router.post('/login', (req, res, next) => {
//   console.log('req:', req.body);
//   passport.authenticate('local', (err, user, info) => {
//     // console.log('user:', user);
//     // console.log('err:', err);
//     // console.log('info:', info);
//     if (err) {
//       return next(err);
//     }

//     if (!user) {
//       console.log('no user');
//       res.status(401);
//       res.end(info.message);
//       return;
//     }

//     console.log('isAuthenticated', req.isAuthenticated());
//     //   req.session.user = user.email;
//     //   console.log('req.session:', req.session);

//     req.login(user, function(err) {
//       if (err) {
//         return next(err);
//       }
//       // console.log('login user');
//       return res.status(200).send({
//         auth: true
//         // token: token,
//         // userID: lodash.get(userCreated, '_id')
//       });
//     });

//     // console.log('req.user', req.user);
//     // console.log('isAuthenticated', req.isAuthenticated());
//   })(req, res, next);
// });

router.post('/login', (req, res, next) =>
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.send(401, { success: false, message: info.message });
    }
    // if user, Log in
    req.logIn(user, function(err) {
      if (err) {
        return next(err);
      }
      return res.send(user.toJSON());
    });
  })(req, res, next)
);

router.get('/logout', AuthController.logout);

module.exports = router;
