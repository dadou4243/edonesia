(function() {
  'use strict';

  const dbConfig = require('./../config/db');
  const mongoose = require('mongoose');

  const UserSchema = require('../dao/models/user.model').UserSchema;
  const TripSchema = require('../dao/models/trip.model').TripSchema;
  const BookingSchema = require('../dao/models/booking.model').BookingSchema;
  //   const CollectionSchema = require('../dao/models/collection.model')
  //     .CollectionSchema;
  //   const VideoSchema = require('../dao/models/video.model').VideoSchema;
  //   const FavoriteWordSchema = require('../dao/models/favorite-word.model')
  //     .FavoriteWordSchema;
  //   const FavoriteVideoSchema = require('../dao/models/favorite-video.model')
  //     .FavoriteVideoSchema;
  //   const ContextSchema = require('../dao/models/context.model').ContextSchema;

  exports.UserMongo = mongoose.model('User', UserSchema);
  exports.TripMongo = mongoose.model('Trip', TripSchema);
  exports.BookingMongo = mongoose.model('Booking', BookingSchema);
  //   exports.CollectionMongo = mongoose.model('Collection', CollectionSchema);
  //   exports.VideoMongo = mongoose.model('Video', VideoSchema);
  //   exports.FavoriteWordMongo = mongoose.model(
  //     'FavoriteWord',
  //     FavoriteWordSchema
  //   );
  //   exports.FavoriteVideoMongo = mongoose.model(
  //     'FavoriteVideo',
  //     FavoriteVideoSchema
  //   );
  //   exports.ContextMongo = mongoose.model('Context', ContextSchema);

  exports.init = init;
  exports.isConnected = isConnected;

  const options = {
    reconnectTries: Number.MAX_VALUE,
    poolSize: 10,
    dbName: 'UniqueTrips',
    useNewUrlParser: true,
    useCreateIndex: true
  };

  let database = null;

  async function init() {
    if (database) {
      // console.log('database:', database);
      return;
    }

    let urlMongo = dbConfig.atlas;
    // console.log('urlMongo:', urlMongo);
    if (process.env.NODE_ENV === 'vincent') {
      urlMongo = dbConfig.dockerMongo;
    }

    return await mongoose
      .connect(urlMongo, options)
      .then(() => {
        // Logger.info('Connexion à la base MongoDB OK');
        database = mongoose.connection;
        return true;
      })
      .catch(err => {
        // Logger.info('Erreur de connexion à Mongo : ' + err.stack);
        return false;
      });
  }

  async function isConnected() {
    return mongoose.connection.readyState;
  }
})();
