import express from 'express';
import User from '../models/Users';

export default {
  /**
   * signup - creates a new user
   * @param {*} req 
   * @param {*} res 
   */
  signup(req, res) {
    res.status(200).send({ message: 'You have successfuly registered!!' })
  },

  /**
   * signin - authenticates a registered user
   * @param {object} req 
   * @param {object} res 
   */
  signin(req, res) {
    res.status(200).send({ message: 'You have logged in! '})
  }
  
}