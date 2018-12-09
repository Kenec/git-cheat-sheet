"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _controllers = _interopRequireDefault(require("../controllers"));

var _cheat = _interopRequireDefault(require("../middlewares/cheat"));

var _jwtAuth = _interopRequireDefault(require("../middlewares/jwtAuth"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cheatController = _controllers.default.cheats;

var cheatRoutes = _express.default.Router();

cheatRoutes.get('/', _jwtAuth.default, cheatController.getCheats).post('/', _jwtAuth.default, _cheat.default.validateOwner, _cheat.default.validateTitle, _cheat.default.validateDetail, cheatController.addCheat).put('/:id', _jwtAuth.default, cheatController.editCheat).delete('/:id', _jwtAuth.default, cheatController.deleteCheat);
var _default = cheatRoutes;
exports.default = _default;