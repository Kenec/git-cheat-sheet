"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _userRoutes = _interopRequireDefault(require("./userRoutes"));

var _cheatRoutes = _interopRequireDefault(require("./cheatRoutes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express.default.Router();

router.get('/', function (req, res) {
  res.status(200).send({
    message: 'Welcome to the Git Cheat API'
  });
});
router.use('/v1/users/', _userRoutes.default);
router.use('/v1/gitcheats/', _cheatRoutes.default);
router.get('*', function (req, res) {
  res.status(404).send({
    message: 'The Route does not exist'
  });
});
var _default = router;
exports.default = _default;