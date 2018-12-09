"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _Users = _interopRequireDefault(require("../models/Users"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  /**
   * signup - creates a new user
   * @param {object} req 
   * @param {object} res 
   */
  signup: function signup(req, res) {
    _Users.default.findOne({
      email: req.body.email
    }, function (error, user) {
      if (error) return res.status(500).send(_defineProperty({
        error: 'Error checking if user exists'
      }, "error", error));
      if (user !== null) return res.status(409).send({
        error: 'User already exists!'
      });
      var password = req.body.password;

      var hash = _bcrypt.default.hashSync(password, 10);

      var userPayload = {
        name: req.body.username,
        email: req.body.email,
        password: hash
      };
      var newUser = new _Users.default(userPayload);
      newUser.save(function (error) {
        if (error) return res.status(500).send(_defineProperty({
          error: 'Error while saving..'
        }, "error", error));

        var token = _jsonwebtoken.default.sign({
          id: newUser._id,
          name: userPayload.name,
          email: userPayload.email
        }, process.env.JWT_SECRET, {
          expiresIn: '24h'
        });

        return res.status(201).send({
          token: token,
          message: 'User Created Successfully!'
        });
      });
    });
  },

  /**
   * signin - authenticates a registered user
   * @param {object} req 
   * @param {object} res 
   */
  signin: function signin(req, res) {
    _Users.default.findOne({
      email: req.body.email
    }, function (error, user) {
      if (error) return res.status(500).send({
        error: 'Error retrieving user'
      });
      if (user === null) return res.status(401).send({
        error: 'User does not exist'
      });

      var validPassword = _bcrypt.default.compareSync(req.body.password, user.password);

      if (!validPassword) return res.status(401).send({
        error: 'User does not exits'
      });

      var token = _jsonwebtoken.default.sign({
        id: user.id,
        name: user.name,
        email: user.email
      }, process.env.JWT_SECRET, {
        expiresIn: '24h'
      });

      return res.status(200).send({
        token: token,
        message: 'User Logged in Successfully!'
      });
    });
  }
};
exports.default = _default;