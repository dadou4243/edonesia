(function() {
  'use strict';

  const mongoose = require('mongoose');

  const GiftCardSchema = new mongoose.Schema(
    {
      code: {
        type: String,
        required: true
      },
      amount: {
        type: Number,
        required: true
      }
    },
    {
      timestamps: true
    }
  );

  exports.GiftCardSchema = GiftCardSchema;
})();
