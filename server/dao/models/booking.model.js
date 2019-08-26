(function() {
  'use strict';

  const mongoose = require('mongoose');

  const BookingSchema = new mongoose.Schema(
    {
      firstName: {
        type: String,
        required: true
      },
      tripId: {
        type: String,
        required: true
      },
    },
    {
      timestamps: true
    }
  );

  // TripSchema.index({
  //   hebrew: 'text',
  //   french: 'text'
  // });

  exports.BookingSchema = BookingSchema;
})();
