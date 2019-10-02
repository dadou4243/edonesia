(function() {
  'use strict';

  // External dependencies
  const lodash = require('lodash');

  // Internal dependencies
  // core
  const AuthCore = require('../core/auth.core');
  // dao
  const BookingDAO = require('../dao/booking.dao');

  const nodemailer = require('nodemailer');

  // service
  //   const ContextSvc = require('./context.service');
  //   const FavoriteSvc = require('./favorite.service');

  // Interface du service
  module.exports = {
    createBooking: createBooking,
    updateWord: updateWord,
    getWord: getWord,
    searchWord: searchWord,
    getAllWords: getAllWords,
    deleteWord: deleteWord
  };

  // Implémentation

  /**
   * @description Création d'un word
   *
   * @param {string} bookingData - data du word
   *
   * @return {Promise<object>} - Les data du word
   */
  async function createBooking(bookingData) {
    let transporter = nodemailer.createTransport({
      host: 'smtp.googlemail.com', // Gmail Host
      port: 465, // Port
      secure: true, // this is true as port is 465
      auth: {
        user: 'lasry.david@gmail.com', //Gmail username
        pass: 'dadoufeuj42' // Gmail password
      }
    });

    const mailOptions = {
      from: 'DADAD <lasry.david@gmail.com>', // sender address
      to: 'lasry.david@gmail.com', // list of receivers
      subject: 'Subject of your email', // Subject line
      html: '<p>Your html here</p>' // plain text body
    };

    transporter.sendMail(mailOptions, function(err, info) {
      if (err) console.log(err);
      else console.log(info);
    });

    console.log('createBooking service', bookingData);

    // if (!lodash.get(wordData, 'hebrew') || !lodash.get(wordData, 'french')) {
    if (!lodash.get(bookingData, 'firstName')) {
      throw new Error({
        error: 'Invalid parameters'
      });
    }

    // IMPORTANT NOTE
    // In here, if the user wants to create a word but there already is an existing one with the same field hebrew,
    // the word is automatically updated to the new params
    // const existingWord = await checkExistingHebrewWord(
    //   lodash.get(wordData, 'name')
    // );
    // if (existingWord) {
    //   // console.log("existingWord", existingWord);
    //   return await updateWord(wordData);
    // }

    return await BookingDAO.createBooking(bookingData);
  }

  /**
   * @description Update d'un word
   *
   * @param {string} wordData - data du word
   *
   * @return {Promise<object>} - Les data du word
   */
  async function updateWord(wordData, overwrite) {
    console.log('updateWord service wordData', wordData);
    console.log('updateWord service overwite', overwrite);

    // if (!lodash.get(wordData, 'hebrew') || !lodash.get(wordData, 'french')) {
    if (!lodash.get(wordData, 'hebrew')) {
      throw new Error({
        error: 'Invalid parameters'
      });
    }

    const existingWord = await checkExistingHebrewWord(
      lodash.get(wordData, 'hebrew')
    );
    console.log('updateWord service existingWord', existingWord);

    if (!existingWord) {
      if (!overwrite) {
        throw new Error({
          error: 'Invalid parameters'
        });
      } else {
        return await BookingDAO.updateWord(wordData, overwrite);
      }
    } else {
      lodash.set(wordData, '_id', existingWord._id);
      return await BookingDAO.updateWord(wordData, overwrite);
    }
  }

  /**
   * @description Récupère les data d'un word par son ID
   *
   * @param {string} uid - id du word
   *
   * @return {Promise<object>} - Le word
   */
  async function getWord(wordID) {
    return await BookingDAO.getWord(wordID);
  }

  /**
   * @description Récupère les data d'un word par son ID
   *
   * @param {string} uid - id du word
   *
   * @return {Promise<object>} - Le word
   */
  async function searchWord(searchString) {
    return await BookingDAO.searchWord(searchString);
  }

  /**
   * @description Récupère les data de tous les words
   *
   * @param {string} uid - id du word
   *
   * @return {Promise<object>} - Les data de tous les words
   */
  async function getAllWords(sortOrer, pageNumber, pageSize) {
    pageNumber = parseInt(pageNumber, 10);
    pageSize = parseInt(pageSize, 10);
    return await BookingDAO.getAllWords(sortOrer, pageNumber, pageSize);
  }

  /**
   * @description Suppression d'un word par son ID
   *
   * @param {string} uid - id du word
   *
   * @return {Promise<object>} - Confirmation delete
   */
  async function deleteWord(wordID) {
    // console.log('deleteWord wordID', wordID);

    // const wordContexts = await ContextSvc.getAllContextsForWord(wordID);

    if (wordContexts.length > 0) {
      // console.log('WORD IS USED IN CONTEXTS');
      throw new Error('Not allowed, word is used in Contexts');
    }

    // await FavoriteSvc.deleteAllFavoritesWithWord(wordID);

    return await BookingDAO.deleteWord(wordID);
  }

  /* private function */

  // Check si un mot contenant le champ hebrew est déjà présent
  // Renvoie true or false
  async function checkExistingHebrewWord(hebrewWord) {
    return await BookingDAO.checkExistingHebrewWord(hebrewWord);
    // console.log("checkExistingHebrewWord service", existingHebrewWord);
    // return existingHebrewWord;
  }
})();
