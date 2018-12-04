import express from 'express';
import Cheat from '../models/Cheats';

export default {
  /**
   * getCheats - get all cheats
   * @param {object} req 
   * @param {object} res 
   */
  getCheats(req, res) {
    res.status(200).send({ message: 'You have successfuly gotten all the cheats!!' })
  }
  
}