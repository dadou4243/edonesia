const router = require('express').Router();

const Auth = require('../../core/auth.core');

const BookingController = require('../controller/booking.controller');

// Définition des routes
router.post(
  '/deleteMany',
  // Auth.isConnected,
  // Auth.isAdmin,
  BookingController.deleteWords
);

router.post(
  '/',
  // Auth.isConnected,
  // Auth.isAdmin,
  BookingController.createBooking
);

router.post(
  '/:bookingID',
  // Auth.isConnected,
  // Auth.isAdmin,
  BookingController.updateWord
);

router.get(
  '/:bookingID',
  // Auth.isConnected,
  BookingController.getWord
);

router.get(
  '/',
  // Auth.isConnected,
  // Auth.isAdmin,
  BookingController.getAllWords
);

router.get(
  '/search/:searchString',
  // Auth.isConnected,
  // Auth.isAdmin,
  BookingController.searchWord
);

router.delete(
  '/:bookingID',
  // Auth.isConnected,
  // Auth.isAdmin,
  BookingController.deleteWord
);

module.exports = router;
