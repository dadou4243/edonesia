(function() {
  'use strict';

  // External dependencies
  const lodash = require('lodash');

  // Internal dependencies
  // core
  const AuthCore = require('../core/auth.core');
  // dao
  const TripDAO = require('../dao/trip.dao');
  // service
  //   const ContextSvc = require('./context.service');
  //   const FavoriteSvc = require('./favorite.service');

  // Interface du service
  module.exports = {
    createTrip: createTrip,
    updateTrip: updateTrip,
    getWord: getWord,
    searchWord: searchWord,
    getAllWords: getAllWords,
    deleteWord: deleteWord
  };

  // Implémentation

  /**
   * @description Création d'un trip
   *
   * @param {string} tripData - data du trip
   *
   * @return {Promise<object>} - Les data du trip
   */
  async function createTrip(tripData) {
    console.log('createTrip service', tripData);

    // if (!lodash.get(wordData, 'hebrew') || !lodash.get(wordData, 'french')) {
    if (!lodash.get(tripData, 'title')) {
      throw new Error({
        error: 'Invalid parameters'
      });
    }

    return await TripDAO.createTrip(tripData);
  }

  /**
   * @description Update d'un word
   *
   * @param {string} tripData - data du word
   *
   * @return {Promise<object>} - Les data du word
   */
  async function updateTrip(tripData) {
    console.log('updateWord service wordData', tripData);

    // if (!lodash.get(wordData, 'hebrew') || !lodash.get(wordData, 'french')) {
    // if (!lodash.get(tripData, 'hebrew')) {
    //   throw new Error({
    //     error: 'Invalid parameters'
    //   });
    // }

    // const existingWord = await checkExistingHebrewWord(
    //   lodash.get(tripData, 'hebrew')
    // );

    // if (!existingWord) {
    //   if (!overwrite) {
    //     throw new Error({
    //       error: 'Invalid parameters'
    //     });
    //   } else
    // {
    return await TripDAO.updateTrip(tripData);
    // }
    // }
    // else {
    //   lodash.set(wordData, '_id', existingWord._id);
    //   return await WordDAO.updateWord(wordData, overwrite);
    // }
  }

  /**
   * @description Récupère les data d'un word par son ID
   *
   * @param {string} uid - id du word
   *
   * @return {Promise<object>} - Le word
   */
  async function getWord(wordID) {
    return await TripDAO.getWord(wordID);
  }

  /**
   * @description Récupère les data d'un word par son ID
   *
   * @param {string} uid - id du word
   *
   * @return {Promise<object>} - Le word
   */
  async function searchWord(searchString) {
    return await TripDAO.searchWord(searchString);
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
    return await TripDAO.getAllWords(sortOrer, pageNumber, pageSize);
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

    return await TripDAO.deleteWord(wordID);
  }

  /* private function */

  // Check si un mot contenant le champ hebrew est déjà présent
  // Renvoie true or false
  // async function checkExistingHebrewWord(hebrewWord) {
  //   return await TripDAO.checkExistingHebrewWord(hebrewWord);
  //   // console.log("checkExistingHebrewWord service", existingHebrewWord);
  //   // return existingHebrewWord;
  // }
})();
