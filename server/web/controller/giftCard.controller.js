(function() {
  'use strict';

  // External dependencies
  const lodash = require('lodash');

  // Internal dependencies
  const GiftCardSvc = require('../../services/giftCard.service');

  const AuthCore = require('../../core/auth.core');

  // service

  // transverse

  module.exports = {
    createGiftCard: createGiftCard,
    updateWord: updateWord,
    getGiftCard: getGiftCard,
    getAllGiftCards: getAllGiftCards,
    deleteWord: deleteWord,
    deleteWords: deleteWords
  };

  /**
   * @description Création d'une GiftCard
   * @param {object} req - la requête
   * @param {object} res - la réponse
   * @return {*} la requête
   */
  async function createGiftCard(req, res) {
    console.log('create booking controller', req.body);
    try {
      const giftCardData = lodash.get(req, 'body');
      const giftCardCreated = await GiftCardSvc.createGiftCard(giftCardData);

      return res.status(200).send({
        data: giftCardCreated
      });
    } catch (err) {
      return res.status(500).send({
        message: 'error in giftCard creation',
        error: err.toString()
      });
    }
  }

  /**
   * @description Update d'un Word
   * @param {object} req - la requête
   * @param {object} res - la réponse
   * @return {*} la requête
   */
  async function updateWord(req, res) {
    try {
      const wordData = lodash.get(req, 'body.wordData');
      console.log('wordData:', wordData);
      const overwrite = lodash.get(req, 'body.overwrite');
      console.log('overwrite:', overwrite);

      const wordUpdated = await BookingSvc.updateWord(wordData, overwrite);

      return res.status(200).send({
        data: wordUpdated
      });
    } catch (err) {
      return res.status(500).send({
        message: 'error in word update',
        error: err.toString()
      });
    }
  }

  /**
   * @description Récupération d'un word
   * @param {object} req - la requête
   * @param {object} res - la réponse
   * @return {*} la requête
   */
  async function getGiftCard(req, res) {
    try {
      const giftCardCode = lodash.get(req, 'params.giftCardCode');

      const giftCard = await GiftCardSvc.getGiftCard(giftCardCode);

      return res.status(200).send({
        data: giftCard
      });
    } catch (err) {
      return res.status(500).send({
        auth: false,
        error: err.toString()
      });
    }
  }

  /**
   * @description Récupération de toutes les giftCards
   * @param {object} req - la requête
   * @param {object} res - la réponse
   * @return {*} la requête
   */
  async function getAllGiftCards(req, res) {
    console.log('req:', req);
    try {
      const giftCards = await GiftCardSvc.getAllGiftCards();

      return res.status(200).send({
        data: giftCards
      });
    } catch (err) {
      return res.status(500).send({
        auth: false,
        error: err.toString()
      });
    }
  }

  /**
   * @description Suppression d'une giftCard
   * @param {object} req - la requête
   * @param {object} res - la réponse
   * @return {*} la requête
   */
  async function deleteWord(req, res) {
    // console.log('deleteWord params', req.params);
    try {
      const wordToDeleteID = lodash.get(req, 'params.wordID');

      // console.log('wordToDeleteID', wordToDeleteID);

      await BookingSvc.deleteWord(wordToDeleteID);

      return res.status(200).send({
        wordID: wordToDeleteID
      });
    } catch (err) {
      return res.status(500).send({
        auth: false,
        error: err.toString()
      });
    }
  }

  /**
   * @description Suppression de plusieurs words
   * @param {object} req - la requête
   * @param {object} res - la réponse
   * @return {*} la requête
   */
  async function deleteWords(req, res) {
    console.log('req.body', req.body);
    try {
      const wordsIDArray = lodash.get(req, 'body');
      console.log('wordsIDArray:', wordsIDArray);

      const promises = [];
      for (let i = 0; i < wordsIDArray.length; i++) {
        promises.push(await BookingSvc.deleteWord(wordsIDArray[i]));
      }

      await Promise.all(promises);

      return res.status(200).send(wordsIDArray);
    } catch (err) {
      return res.status(500).send({
        auth: false,
        error: err.toString()
      });
    }
  }
})();
