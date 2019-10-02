// On créé un router
const router = require('express').Router();

// On y ajoute les route
router.use('/user', require('./user.route'));
router.use('/auth', require('./auth.route'));
router.use('/trip', require('./trip.route'));
router.use('/booking', require('./booking.route'));
router.use('/giftcard', require('./giftCard.route'));

// On export le router pour l'ajouter à l'app
module.exports = router;
