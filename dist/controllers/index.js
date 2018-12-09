"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _users = _interopRequireDefault(require("./users"));

var _cheats = _interopRequireDefault(require("./cheats"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  users: _users.default,
  cheats: _cheats.default
};
exports.default = _default;