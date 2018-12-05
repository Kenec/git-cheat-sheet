import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../models/Users';

export default {
  /**
   * signup - creates a new user
   * @param {object} req 
   * @param {object} res 
   */
  signup(req, res) {
    User.findOne({ email: req.body.email }, (error, user) => {
      if (error) return res.status(500).send({ message: 'Error checking if user exists', error });
      if (user !== null) return res.status(409).send({ message: 'User already exists!' });

      const password = req.body.password;
      const hash = bcrypt.hashSync(password, 10);

      const userPayload = {
        name: req.body.username,
        email: req.body.email,
        password: hash
      };
      const newUser = new User(userPayload);
      newUser.save((error) => {
        if (error) return res.status(500).send({ message:'Error while saving..', error });

        const token = jwt.sign(
          { id: newUser._id, name: userPayload.name, email: userPayload.email },
          process.env.JWT_SECRET, { expiresIn: '24h' });
        return res.status(201).send({ token, message: 'User Created Successfully!' });
      });
    });
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