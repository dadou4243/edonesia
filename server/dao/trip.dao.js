(function() {
  'use strict';

  // External dependencies
  const lodash = require('lodash');
  // Internal dependencies
  const MongoCore = require('../core/database.core');

  const TripMongo = MongoCore.TripMongo;

  // Interface du service
  module.exports = {
    createTrip: createTrip,
    updateTrip: updateTrip,
    getWord: getWord,
    searchWord: searchWord,
    getAllWords: getAllWords,
    checkExistingHebrewWord: checkExistingHebrewWord,
    deleteWord: deleteWord
  };

  async function createTrip(tripData) {
    console.log('createTrip Dao', tripData);
    return new Promise(async function(resolve, reject) {
      try {
        // const data = {
        //   hebrew: lodash.get(wordData, 'hebrew'),
        //   french: lodash.get(wordData, 'french'),
        //   pronunciation: lodash.get(wordData, 'pronunciation'),
        //   type: lodash.get(wordData, 'type')
        // };
        const data = tripData;

        const newTrip = new TripMongo(data);
        const tripCreated = await newTrip.save();

        return resolve(tripCreated);
      } catch (err) {
        console.log('Error in trip.dao createTrip', err);
        return reject(err);
      }
    });
  }

  async function updateTrip(tripData) {
    console.log('updateTrip DAO', tripData);
    return new Promise(async function(resolve, reject) {
      try {
        // let existingWord = await TripMongo.findOne({
        //   hebrew: lodash.get(wordData, 'hebrew')
        // });
        // if (!!existingWord === false) {
        //   if (overwrite) {
        let existingTrip = await TripMongo.findOne({
          _id: lodash.get(tripData, '_id')
        });
        // existingTrip.hebrew = lodash.get(wordData, 'hebrew');
        // } else {
        // return reject('nonExistingTrip');
        // }
        // }

        console.log('updateTrip DAO existingTrip', existingTrip);

        // if (lodash.get(wordData, 'french')) {
        //   existingWord.french = lodash.get(wordData, 'french');
        // }
        // lodash.set(existingWord, 'french', lodash.get(wordData, 'french'));
        existingTrip.title = lodash.get(tripData, 'title');
        existingTrip.description = lodash.get(tripData, 'description');
        existingTrip.price = lodash.get(tripData, 'price');
        existingTrip.category = lodash.get(tripData, 'category');
        // existingWord.forme = lodash.get(tripData, 'forme');
        // existingWord.infinitif = lodash.get(tripData, 'infinitif');
        // existingWord.time = lodash.get(tripData, 'time');
        // existingWord._id = lodash.get(tripData, '_id');

        console.log('updateTrip DAO existingTrip', existingTrip);

        const tripUpdated = await existingTrip.save();

        return resolve(tripUpdated);
      } catch (err) {
        console.log('Error in trip.dao updateTrip', err);
        reject(err);
      }
    });
  }

  async function getWord(wordID) {
    return new Promise(async function(resolve, reject) {
      await TripMongo.findOne(
        {
          _id: wordID
        },
        async function(err, res) {
          if (err) {
            console.log('Error in word.dao getWord', err);
            return reject(err);
          }
          return resolve(res);
        }
      );
    });
  }

  async function searchWord(searchString) {
    console.log('searchString:', searchString);
    return new Promise(async function(resolve, reject) {
      await TripMongo.find(
        {
          $text: {
            $search: searchString
          }
        },
        async function(err, res) {
          if (err) {
            console.log('Error in word.dao searchWord', err);
            return reject(err);
          }
          return resolve(res);
        }
      );
    });
  }

  async function getAllWords(sortOrder, pageNumber, pageSize) {
    return new Promise(async function(resolve, reject) {
      await TripMongo.find({})
        .skip(pageSize * pageNumber - pageSize)
        .limit(pageSize)
        .sort({
          hebrew: sortOrder
        })
        .exec(function(err, res) {
          if (err) {
            console.log('Error in word.dao getAllWords', err);
            return reject(err);
          }
          return resolve(res);
        });
    });
  }

  async function checkExistingHebrewWord(hebrew) {
    return new Promise(async function(resolve, reject) {
      await TripMongo.findOne(
        {
          hebrew: hebrew
        },
        async function(err, res) {
          if (err) {
            console.log('Error in word.dao checkExistingHebrewWord', err);
            return reject(err);
          }
          // console.log("checkExistingHebrewWord word", res);
          return resolve(res);
        }
      );
    });
  }

  async function deleteWord(wordID) {
    // console.log('deleteWord DAO', wordID);
    return new Promise(async function(resolve, reject) {
      await TripMongo.remove(
        {
          _id: wordID
        },
        async function(err, res) {
          if (err) {
            console.log('Error in word.dao delete', err);
            return reject(err);
          }
          return resolve(res);
        }
      );
    });
  }
})();
