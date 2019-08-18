(function() {
  'use strict';

  const mongoose = require('mongoose');

  const TripSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        // unique: true,
        required: true
      },
      // french: {
      //   type: String
      //   // required: true
      // },
      pronunciation: String,
      type: String,
      genre: String,
      number: String,
      forme: String,
      time: String
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
