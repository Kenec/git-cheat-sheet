"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Cheat =
/*#__PURE__*/
function () {
  function Cheat() {
    _classCallCheck(this, Cheat);
  }

  _createClass(Cheat, null, [{
    key: "validateOwner",
    value: function validateOwner(req, res, next) {
      if (req.body.owner !== 0 && !req.body.owner) return res.status(400).send({
        error: 'owner field is required'
      });
      if (typeof req.body.owner !== 'number' && req.body.owner.trim() === '') return res.status(400).send({
        error: 'owner field should not be empty'
      });
      if (req.body.owner !== req.authToken.id) return res.status(400).send({
        error: 'You do not permission to perform this operation'
      });
      next();
    }
  }, {
    key: "validateTitle",
    value: function validateTitle(req, res, next) {
      if (!req.body.title) return res.status(400).send({
        error: 'title field is required'
      });
      if (req.body.title.trim() === '') return res.status(400).send({
        error: 'title field should not be empty'
      });
      next();
    }
  }, {
    key: "validateDetail",
    value: function validateDetail(req, res, next) {
      if (!req.body.detail) return res.status(400).send({
        error: 'detail field is required'
      });
      if (!Array.isArray(req.body.detail)) return res.status(400).send({
        error: 'title field should be an array'
      });
      if (!req.body.detail.length > 0) return res.status(400).send({
        error: 'title field should not be empty'
      });
      next();
    }
  }]);

  return Cheat;
}();

var _default = Cheat;
exports.default = _default;