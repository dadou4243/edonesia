const router = require('express').Router();

const Auth = require('../../core/auth.core');

const GiftCardController = require('../controller/giftCard.controller');

// Définition des routes
router.post(
  '/deleteMany',
  // Auth.isConnected,
  // Auth.isAdmin,
  GiftCardController.deleteWords
);

router.post(
  '/',
  // Auth.isConnected,
  // Auth.isAdmin,
  GiftCardController.createGiftCard
);

router.post(
  '/:bookingID',
  // Auth.isConnected,
  // Auth.isAdmin,
  GiftCardController.updateWord
);

router.get(
  '/:giftCardCode',
  // Auth.isConnected,
  GiftCardController.getGiftCard
);

router.get(
  '/',
  // Auth.isConnected,
  // Auth.isAdmin,
  GiftCardController.getAllGiftCards
);

router.delete(
  '/:giftCardID',
  // Auth.isConnected,
  // Auth.isAdmin,
  GiftCardController.deleteWord
);

module.exports = router;
