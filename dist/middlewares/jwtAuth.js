"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Middleware for protecting router using jwt
 * @param {object} req request object
 * @param {object} res response object
 * @param {function} next calls the next function
 * @return {json} returns json object as a response
 */
var _default = function _default(req, res, next) {
  var token = req.body.token || req.query.token || req.headers.Authorization || req.headers['x-access-token'];

  if (token) {
    _jsonwebtoken.default.verify(token, process.env.JWT_SECRET, function (err, authToken) {
      if (err) {
        res.status(401).send({
          message: 'Sorry, user not authenticated, invalid access token'
        });
      } else {
        req.authToken = authToken;
        authToken = JSON.stringify(authToken);
        res.append('user', authToken);
        next();
      }
    });
  } else {
    res.status(403).send({
      message: 'No token provided.'
    });
  }
};

exports.default = _default;