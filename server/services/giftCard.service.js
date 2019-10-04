(function() {
  'use strict';

  // External dependencies
  const lodash = require('lodash');

  // Internal dependencies
  // core
  const AuthCore = require('../core/auth.core');
  // dao
  const GiftCardDAO = require('../dao/giftCard.dao');

  const nodemailer = require('nodemailer');

  // Interface du service
  module.exports = {
    createGiftCard: createGiftCard,
    updateWord: updateWord,
    getGiftCard: getGiftCard,
    getAllGiftCards: getAllGiftCards,
    deleteWord: deleteWord
  };

  // Implémentation

  /**
   * @description Création d'une giftCard
   *
   * @param {string} giftCardData - data de la giftCard
   *
   * @return {Promise<object>} - Les data de la giftCard
   */
  async function createGiftCard(giftCardData) {
    // console.log('createGiftCard service', giftCardData);

    // if (!lodash.get(wordData, 'hebrew') || !lodash.get(wordData, 'french')) {
    if (!lodash.get(giftCardData, 'amount')) {
      throw new Error({
        error: 'Invalid parameters'
      });
    }

    function coupongenerator() {
      var coupon = '';
      var possible = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      for (var i = 0; i < 10; i++) {
        coupon += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      return coupon;
    }

    giftCardData.code = coupongenerator();

    return await GiftCardDAO.createGiftCard(giftCardData);
  }

  /**
   * @description Update d'une giftCard
   *
   * @param {string} wordData - data du word
   *
   * @return {Promise<object>} - Les data du word
   */
  async function updateWord(wordData, overwrite) {
    // console.log('updateWord service wordData', wordData);
    // console.log('updateWord service overwite', overwrite);

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
        return await GiftCardDAO.updateWord(wordData, overwrite);
      }
    } else {
      lodash.set(wordData, '_id', existingWord._id);
      return await GiftCardDAO.updateWord(wordData, overwrite);
    }
  }

  /**
   * @description Récupère les data d'un word par son ID
   *
   * @param {string} code - code de la giftCard
   *
   * @return {Promise<object>} - La giftCard
   */
  async function getGiftCard(code) {
    const giftCard = await GiftCardDAO.getGiftCard(code);
    // console.log('giftCard:', giftCard);
    if (giftCard.expireDate < new Date()) {
      throw new Error('Gift card expired');
    } else return giftCard;
  }

  /**
   * @description Récupère les data de tous les words
   *
   * @param {string} uid - id du word
   *
   * @return {Promise<object>} - Les data de tous les words
   */
  async function getAllGiftCards() {
    return await GiftCardDAO.getAllGiftCards();
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

    return await GiftCardDAO.deleteWord(wordID);
  }

  /* private function */

  // Check si un mot contenant le champ hebrew est déjà présent
  // Renvoie true or false
  async function checkExistingHebrewWord(hebrewWord) {
    return await GiftCardDAO.checkExistingHebrewWord(hebrewWord);
    // console.log("checkExistingHebrewWord service", existingHebrewWord);
    // return existingHebrewWord;
  }
})();
