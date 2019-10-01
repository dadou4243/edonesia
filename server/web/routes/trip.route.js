const router = require('express').Router();

const Auth = require('../../core/auth.core');

const TripController = require('../controller/trip.controller');

// Définition des routes
router.post(
  '/deleteMany',
  // Auth.isConnected,
  // Auth.isAdmin,
  TripController.deleteWords
);

router.post(
  '/',
  // Auth.isConnected,
  // Auth.isAdmin,
  TripController.createTrip
);

router.post(
  '/:tripID',
  // Auth.isConnected,
  // Auth.isAdmin,
  TripController.updateTrip
);

router.get(
  '/:tripID',
  // Auth.isConnected,
  TripController.getTrip
);

router.get(
  '/',
  // Auth.isConnected,
  // Auth.isConnected,
  // Auth.isAdmin,
  TripController.getAllWords
);

router.get(
  '/search/:searchString',
  // Auth.isConnected,
  // Auth.isAdmin,
  TripController.searchWord
);

router.delete(
  '/:tripID',
  // Auth.isConnected,
  // Auth.isAdmin,
  TripController.deleteWord
);

module.exports = router;
