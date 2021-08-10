"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  MotionContainer: true
};
Object.defineProperty(exports, "MotionContainer", {
  enumerable: true,
  get: function get() {
    return _MotionContainer.default;
  }
});

var _variants = require("./variants");

Object.keys(_variants).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _variants[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _variants[key];
    }
  });
});

var _MotionContainer = _interopRequireDefault(require("./MotionContainer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }