"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _controllers = _interopRequireDefault(require("../controllers"));

var _user = _interopRequireDefault(require("../middlewares/user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userController = _controllers.default.users;

var userRoutes = _express.default.Router();

userRoutes.post('/signup', _user.default.validateUsername, _user.default.validateEmail, _user.default.validatePassword, _user.default.validatePasswordMatch, userController.signup);
userRoutes.post('/signin', _user.default.validateEmail, _user.default.validatePassword, userController.signin);
var _default = userRoutes;
exports.default = _default;