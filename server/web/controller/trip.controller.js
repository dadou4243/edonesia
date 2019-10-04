(function() {
  'use strict';

  // External dependencies
  const lodash = require('lodash');

  // Internal dependencies
  const WordSvc = require('../../services/trip.service');

  const AuthCore = require('../../core/auth.core');

  // service

  // transverse

  module.exports = {
    createTrip: createTrip,
    updateTrip: updateTrip,
    getTrip: getTrip,
    getAllWords: getAllWords,
    searchWord: searchWord,
    deleteWord: deleteWord,
    deleteWords: deleteWords
  };

  /**
   * @description Création d'un Word
   * @param {object} req - la requête
   * @param {object} res - la réponse
   * @return {*} la requête
   */
  async function createTrip(req, res) {
    try {
      const tripData = lodash.get(req, 'body');
      const tripCreated = await WordSvc.createTrip(tripData);

      return res.status(200).send({
        data: tripCreated
      });
    } catch (err) {
      return res.status(500).send({
        message: 'error in trip creation',
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
  async function updateTrip(req, res) {
    console.log('updateTrip controller', req.body);
    try {
      const tripData = lodash.get(req, 'body.tripData');
      console.log('tripData:', tripData);

      const tripUpdated = await WordSvc.updateTrip(tripData);

      return res.status(200).send({
        data: tripUpdated
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
  async function getTrip(req, res) {
    try {
      const tripID = lodash.get(req, 'params.tripID');

      const trip = await WordSvc.getWord(tripID);

      return res.status(200).send({
        data: trip
      });
    } catch (err) {
      return res.status(500).send({
        auth: false,
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
  async function searchWord(req, res) {
    try {
      const searchString = lodash.get(req, 'params.searchString');
      // console.log('searchString:', searchString);

      const words = await WordSvc.searchWord(searchString);

      return res.status(200).send({
        data: words
      });
    } catch (err) {
      return res.status(500).send({
        auth: false,
        error: err.toString()
      });
    }
  }

  /**
   * @description Récupération de tous les trips
   * @param {object} req - la requête
   * @param {object} res - la réponse
   * @return {*} la requête
   */
  async function getAllWords(req, res) {
    const sortOrder = lodash.get(req, 'query.sortOrder');
    const pageNumber = lodash.get(req, 'query.pageNumber');
    const pageSize = lodash.get(req, 'query.pageSize');

    try {
      const words = await WordSvc.getAllWords(sortOrder, pageNumber, pageSize);

      return res.status(200).send({
        data: words
      });
    } catch (err) {
      return res.status(500).send({
        auth: false,
        error: err.toString()
      });
    }
  }

  /**
   * @description Suppression d'un word
   * @param {object} req - la requête
   * @param {object} res - la réponse
   * @return {*} la requête
   */
  async function deleteWord(req, res) {
    // console.log('deleteWord params', req.params);
    try {
      const wordToDeleteID = lodash.get(req, 'params.wordID');

      // console.log('wordToDeleteID', wordToDeleteID);

      await WordSvc.deleteWord(wordToDeleteID);

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
        promises.push(await WordSvc.deleteWord(wordsIDArray[i]));
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
