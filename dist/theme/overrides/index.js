"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ComponentsOverrides;

var _lodash = require("lodash");

var _Card = _interopRequireDefault(require("./Card"));

var _Lists = _interopRequireDefault(require("./Lists"));

var _Paper = _interopRequireDefault(require("./Paper"));

var _Input = _interopRequireDefault(require("./Input"));

var _Button = _interopRequireDefault(require("./Button"));

var _Tooltip = _interopRequireDefault(require("./Tooltip"));

var _Backdrop = _interopRequireDefault(require("./Backdrop"));

var _Typography = _interopRequireDefault(require("./Typography"));

var _IconButton = _interopRequireDefault(require("./IconButton"));

var _Autocomplete = _interopRequireDefault(require("./Autocomplete"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------------------------------------------------------
function ComponentsOverrides(theme) {
  return (0, _lodash.merge)((0, _Card.default)(theme), (0, _Lists.default)(theme), (0, _Paper.default)(theme), (0, _Input.default)(theme), (0, _Button.default)(theme), (0, _Tooltip.default)(theme), (0, _Backdrop.default)(theme), (0, _Typography.default)(theme), (0, _IconButton.default)(theme), (0, _Autocomplete.default)(theme));
}