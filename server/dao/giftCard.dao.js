(function() {
  'use strict';

  // External dependencies
  const lodash = require('lodash');
  // Internal dependencies
  const MongoCore = require('../core/database.core');

  const GiftCardMongo = MongoCore.GiftCardMongo;

  // Interface du service
  module.exports = {
    createGiftCard: createGiftCard,
    updateWord: updateWord,
    getGiftCard: getGiftCard,
    getAllGiftCards: getAllGiftCards,
    deleteWord: deleteWord
  };

  async function createGiftCard(giftCardData) {
    console.log('createGiftCard Dao', giftCardData);
    return new Promise(async function(resolve, reject) {
      try {
        const data = giftCardData;
        data.expireDate = new Date(new Date().valueOf() + 60000);

        const newGiftCard = new GiftCardMongo(data);
        const giftCardCreated = await newGiftCard.save();

        return resolve(giftCardCreated);
      } catch (err) {
        console.log('Error in giftCard.dao createGiftCard', err);
        return reject(err);
      }
    });
  }

  async function updateWord(wordData, overwrite) {
    console.log('updateWord DAO', wordData);
    return new Promise(async function(resolve, reject) {
      try {
        let existingWord = await BookingMongo.findOne({
          hebrew: lodash.get(wordData, 'hebrew')
        });
        if (!!existingWord === false) {
          if (overwrite) {
            existingWord = await BookingMongo.findOne({
              _id: lodash.get(wordData, '_id')
            });
            existingWord.hebrew = lodash.get(wordData, 'hebrew');
          } else {
            return reject('nonExistingWord');
          }
        }

        console.log('updateWord DAO existingWord', existingWord);

        if (lodash.get(wordData, 'french')) {
          existingWord.french = lodash.get(wordData, 'french');
        }
        // lodash.set(existingWord, 'french', lodash.get(wordData, 'french'));
        existingWord.type = lodash.get(wordData, 'type');
        existingWord.pronunciation = lodash.get(wordData, 'pronunciation');
        existingWord.genre = lodash.get(wordData, 'genre');
        existingWord.number = lodash.get(wordData, 'number');
        existingWord.forme = lodash.get(wordData, 'forme');
        existingWord.infinitif = lodash.get(wordData, 'infinitif');
        existingWord.time = lodash.get(wordData, 'time');
        existingWord._id = lodash.get(wordData, '_id');

        console.log('updateWord DAO existingWord', existingWord);

        const wordUpdated = await existingWord.save();

        return resolve(wordUpdated);
      } catch (err) {
        console.log('Error in giftCard.dao updateWord', err);
        reject(err);
      }
    });
  }

  async function getGiftCard(giftCardCode) {
    return new Promise(async function(resolve, reject) {
      await GiftCardMongo.findOne(
        {
          code: giftCardCode
        },
        async function(err, res) {
          if (err) {
            console.log('Error in giftCard.dao getGiftCard', err);
            return reject(err);
          }
          if (!!res === false) {
            return reject('nonexisting giftCard');
          }
          return resolve(res);
        }
      );
    });
  }

  async function getAllGiftCards() {
    return new Promise(async function(resolve, reject) {
      await GiftCardMongo.find({}).exec(function(err, res) {
        if (err) {
          console.log('Error in giftCard.dao getAllGiftCards', err);
          return reject(err);
        }
        return resolve(res);
      });
    });
  }

  async function deleteWord(wordID) {
    // console.log('deleteWord DAO', wordID);
    return new Promise(async function(resolve, reject) {
      await GiftCardMongo.remove(
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
