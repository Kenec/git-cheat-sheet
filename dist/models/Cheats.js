"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CheatSchema = _mongoose.default.Schema({
  owner: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  detail: {
    type: Array,
    default: []
  },
  create_date: {
    type: Date,
    default: Date.now
  }
});

CheatSchema.set('toJSON', {
  transform: function transform(doc, ret, options) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  }
});

var _default = _mongoose.default.model('Cheat', CheatSchema);

exports.default = _default;