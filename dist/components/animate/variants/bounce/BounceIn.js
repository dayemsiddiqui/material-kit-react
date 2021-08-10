"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.varBounceInRight = exports.varBounceInLeft = exports.varBounceInDown = exports.varBounceInUp = exports.varBounceIn = void 0;

var _BounceOut = require("./BounceOut");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// ----------------------------------------------------------------------
const TRANSITION_ENTER = {
  duration: 0.72,
  ease: [0.43, 0.13, 0.23, 0.96]
};
const TRANSITION_EXIT = {
  duration: 0.48,
  ease: [0.43, 0.13, 0.23, 0.96]
};
const varBounceIn = {
  animate: {
    scale: [0.3, 1.1, 0.9, 1.03, 0.97, 1],
    opacity: [0, 1, 1, 1, 1, 1],
    transition: TRANSITION_ENTER
  },
  exit: _BounceOut.varBounceOut.animate
};
exports.varBounceIn = varBounceIn;
const varBounceInUp = {
  animate: {
    y: [720, -24, 12, -4, 0],
    scaleY: [4, 0.9, 0.95, 0.985, 1],
    opacity: [0, 1, 1, 1, 1],
    transition: _objectSpread({}, TRANSITION_ENTER)
  },
  exit: _objectSpread(_objectSpread({}, _BounceOut.varBounceOutDown.animate), {}, {
    transition: TRANSITION_EXIT
  })
};
exports.varBounceInUp = varBounceInUp;
const varBounceInDown = {
  animate: {
    y: [-720, 24, -12, 4, 0],
    scaleY: [4, 0.9, 0.95, 0.985, 1],
    opacity: [0, 1, 1, 1, 1],
    transition: TRANSITION_ENTER
  },
  exit: _objectSpread(_objectSpread({}, _BounceOut.varBounceOutUp.animate), {}, {
    transition: TRANSITION_EXIT
  })
};
exports.varBounceInDown = varBounceInDown;
const varBounceInLeft = {
  animate: {
    x: [-720, 24, -12, 4, 0],
    scaleX: [3, 1, 0.98, 0.995, 1],
    opacity: [0, 1, 1, 1, 1],
    transition: TRANSITION_ENTER
  },
  exit: _objectSpread(_objectSpread({}, _BounceOut.varBounceOutLeft.animate), {}, {
    transition: TRANSITION_EXIT
  })
};
exports.varBounceInLeft = varBounceInLeft;
const varBounceInRight = {
  animate: {
    x: [720, -24, 12, -4, 0],
    scaleX: [3, 1, 0.98, 0.995, 1],
    opacity: [0, 1, 1, 1, 1],
    transition: TRANSITION_ENTER
  },
  exit: _objectSpread(_objectSpread({}, _BounceOut.varBounceOutRight.animate), {}, {
    transition: TRANSITION_EXIT
  })
};
exports.varBounceInRight = varBounceInRight;