"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var User =
/*#__PURE__*/
function () {
  function User() {
    _classCallCheck(this, User);
  }

  _createClass(User, null, [{
    key: "validateUsername",
    value: function validateUsername(req, res, next) {
      if (!req.body.username) return res.status(400).send({
        error: 'username field is required'
      });
      if (req.body.username.trim() === '') return res.status(400).send({
        error: 'username field should not be empty'
      });
      next();
    }
  }, {
    key: "validateEmail",
    value: function validateEmail(req, res, next) {
      if (!req.body.email) return res.status(400).send({
        error: 'email field is required'
      });
      if (req.body.email.trim() === '') return res.status(400).send({
        error: 'email field should not be empty'
      });
      next();
    }
  }, {
    key: "validatePassword",
    value: function validatePassword(req, res, next) {
      if (!req.body.password) return res.status(400).send({
        error: 'password field is required'
      });
      if (req.body.password.trim() === '') return res.status(400).send({
        error: 'password field should not be empty'
      });
      next();
    }
  }, {
    key: "validatePasswordMatch",
    value: function validatePasswordMatch(req, res, next) {
      if (req.body.password !== req.body.repassword) return res.status(400).send({
        error: 'password did not match'
      });
      next();
    }
  }]);

  return User;
}();

var _default = User;
exports.default = _default;