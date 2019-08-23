// Création d'un router pour la partie /analytics
const router = require('express').Router();
const passport = require('passport');

const Auth = require('../../core/auth.core');

const AuthController = require('../controller/auth.controller');

// Définition des routes
// router.post('/login', AuthController.login);
router.post(
  '/login',
  (req, res, next) => {
    console.log('req:', req.body);
    passport.authenticate('local', (err, user, info) => {
      // console.log('user:', user);
      // console.log('err:', err);
      // console.log('info:', info);
      // console.log('passportUser:', passportUser);
      if (err) {
        return next(err);
      }

      if (!user) {
        console.log('no user');
        res.status(401);
        res.end(info.message);
        return;
      }

      // if (passportUser) {
      //   const user = passportUser;
      //   const { email } = user;
      //   console.log('email:', email);
      //   next();
      //   //   console.log('user:', user);

      return res.status(200).send({
        auth: true
        // token: token,
        // userID: lodash.get(userCreated, '_id')
      });
      // }
      // });
    })(req, res, next);
  }
  //   ,
  //   (req, res) => {
  //     console.log('callback');
  //     return res.status(200).send({
  //       auth: true
  //     });
  //   }
);

router.get('/logout', AuthController.logout);

module.exports = router;
