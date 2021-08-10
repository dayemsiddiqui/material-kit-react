"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MotionContainer;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _framerMotion = require("framer-motion");

var _core = require("@material-ui/core");

var _variants = require("./variants");

const _excluded = ["open", "children"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// ----------------------------------------------------------------------
MotionContainer.propTypes = {
  open: _propTypes.default.bool.isRequired,
  children: _propTypes.default.node
};

function MotionContainer(_ref) {
  let {
    open,
    children
  } = _ref,
      other = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(_core.Box, _extends({
    component: _framerMotion.motion.div,
    initial: false,
    animate: open ? 'animate' : 'exit',
    variants: _variants.varWrapEnter
  }, other), children);
}