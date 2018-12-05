import express from 'express';
import Cheat from '../models/Cheats';

export default {
  /**
   * getCheats - get all cheats
   * @param {object} req 
   * @param {object} res 
   */
  getCheats(req, res) {
    Cheat.find({}, (error, cheats) => {
      if (error) return res.status(500).send({ error: 'Error while fetching cheats!' });
      return res.status(200).send({ cheats })
    });
  }
}