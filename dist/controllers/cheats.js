"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _Cheats = _interopRequireDefault(require("../models/Cheats"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  /**
   * getCheats - get all cheats
   * @param {object} req 
   * @param {object} res 
   */
  getCheats: function getCheats(req, res) {
    _Cheats.default.find({
      $or: [{
        owner: "0"
      }, {
        owner: req.authToken.id
      }]
    }, function (error, cheats) {
      if (error) return res.status(500).send({
        error: 'Error while fetching cheats!'
      });
      return res.status(200).send({
        cheats: cheats
      });
    });
  },

  /**
   * addCheat - add new cheat
   * @param {object} req 
   * @param {object} res 
   */
  addCheat: function addCheat(req, res) {
    var _req$body = req.body,
        owner = _req$body.owner,
        title = _req$body.title,
        detail = _req$body.detail;

    _Cheats.default.find({
      $or: [{
        $and: [{
          title: title
        }, {
          owner: "0"
        }]
      }, {
        $and: [{
          title: title
        }, {
          owner: req.authToken.id
        }]
      }]
    }, function (error, cheat) {
      if (error) return res.statu(500).send(error);
      if (cheat.length > 0) return res.status(409).send({
        message: 'Cheat Already Exists!'
      });
      var newCheat = new _Cheats.default({
        owner: owner,
        title: title,
        detail: detail
      });
      newCheat.save(function (error) {
        if (error) return res.status(500).send(error);
        return res.status(200).send({
          id: newCheat.id,
          owner: owner,
          title: title,
          detail: detail
        });
      });
    });
  },

  /**
   * editCheat - modify cheat
   * @param {object} req 
   * @param {object} res 
   */
  editCheat: function editCheat(req, res) {
    _Cheats.default.findById(req.params.id, function (error, cheat) {
      if (error) return res.status(404).send({
        error: 'Cheat does not exit'
      });
      cheat.title = req.body.title || cheat.title;
      cheat.detail = req.body.detail || cheat.detail;
      cheat.save(function (error) {
        if (error) return res.status(500).send({
          error: 'Error occured while updating cheat!'
        });
        return res.status(200).send({
          id: cheat.id,
          owner: cheat.owner,
          title: cheat.title,
          detail: cheat.detail
        });
      });
    });
  },

  /**
   * deleteCheat - delete cheat
   * @param {object} req 
   * @param {object} res 
   */
  deleteCheat: function deleteCheat(req, res) {
    _Cheats.default.deleteOne({
      _id: req.params.id
    }, function (error) {
      if (error) return res.status(500).send({
        error: 'Error occured while deleting cheat!'
      });
      return res.status(200).send({
        message: 'Cheat Deleted!'
      });
    });
  }
};
exports.default = _default;