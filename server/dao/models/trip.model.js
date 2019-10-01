(function() {
  'use strict';

  const mongoose = require('mongoose');

  const TripSchema = new mongoose.Schema(
    {
      title: {
        type: String,
        // unique: true,
        required: true
      },
      description: String,
      price: String,
      category: String
    },
    {
      timestamps: true
    }
  );

  // TripSchema.index({
  //   hebrew: 'text',
  //   french: 'text'
  // });

  exports.TripSchema = TripSchema;
})();
