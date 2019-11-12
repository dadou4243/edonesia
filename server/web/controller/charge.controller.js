(function() {
  'use strict';

  // External dependencies
  const lodash = require('lodash');

  // Internal dependencies
  const BookingSvc = require('../../services/booking.service');

  const AuthCore = require('../../core/auth.core');

  const stripe = require('stripe')(
    'sk_test_8KcXgLiDiWat6SHTT7It7eaT00I9wL0hmX'
  );

  // service

  // transverse

  module.exports = {
    chargeCustomer: chargeCustomer
  };

  /**
   * @description Création d'un Booking
   * @param {object} req - la requête
   * @param {object} res - la réponse
   * @return {*} la requête
   */
  async function chargeCustomer(req, res) {
    console.log('create booking controller', req.body);
    // (async () => {
    const customer = await stripe.customers.create({
      email: 'customer@example.com',
      card: req.body.id
    });
    console.log('customer:', customer);

    const charge = await stripe.charges.create({
      amount: 999,
      currency: 'usd',
      customer: customer.id,
      receipt_email: 'lasry.david@gmail.com'
    });
    console.log('charge:', charge);

    // })();

    // let amount = 500;

    // stripe.customers
    //   .create({
    //     email: req.body.email,
    //     card: req.body.id
    //   })
    //   .then(customer =>
    //     stripe.charges.create({
    //       amount,
    //       description: 'Sample Charge',
    //       currency: 'usd',
    //       customer: customer.id
    //     })
    //   )
    //   .then(charge => res.send(charge))
    //   .catch(err => {
    //     console.log('Error:', err);
    //     res.status(500).send({ error: 'Purchase Failed' });
    //   });
  }
})();
