const router = require('express').Router();

const Auth = require('../../core/auth.core');

const ChargeController = require('../controller/charge.controller');

// Définition des routes

router.post(
  '/',
  // Auth.isConnected,
  // Auth.isAdmin,
  ChargeController.chargeCustomer
);

module.exports = router;
