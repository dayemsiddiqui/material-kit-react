"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// ----------------------------------------------------------------------
function pxToRem(value) {
  return "".concat(value / 16, "rem");
}

function responsiveFontSizes(_ref) {
  let {
    sm,
    md,
    lg
  } = _ref;
  return {
    '@media (min-width:600px)': {
      fontSize: pxToRem(sm)
    },
    '@media (min-width:960px)': {
      fontSize: pxToRem(md)
    },
    '@media (min-width:1280px)': {
      fontSize: pxToRem(lg)
    }
  };
}

const FONT_PRIMARY = 'Public Sans, sans-serif';
const typography = {
  fontFamily: FONT_PRIMARY,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  h1: _objectSpread({
    fontWeight: 700,
    lineHeight: 80 / 64,
    fontSize: pxToRem(40)
  }, responsiveFontSizes({
    sm: 52,
    md: 58,
    lg: 64
  })),
  h2: _objectSpread({
    fontWeight: 700,
    lineHeight: 64 / 48,
    fontSize: pxToRem(32)
  }, responsiveFontSizes({
    sm: 40,
    md: 44,
    lg: 48
  })),
  h3: _objectSpread({
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(24)
  }, responsiveFontSizes({
    sm: 26,
    md: 30,
    lg: 32
  })),
  h4: _objectSpread({
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(20)
  }, responsiveFontSizes({
    sm: 20,
    md: 24,
    lg: 24
  })),
  h5: _objectSpread({
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(18)
  }, responsiveFontSizes({
    sm: 19,
    md: 20,
    lg: 20
  })),
  h6: _objectSpread({
    fontWeight: 700,
    lineHeight: 28 / 18,
    fontSize: pxToRem(17)
  }, responsiveFontSizes({
    sm: 18,
    md: 18,
    lg: 18
  })),
  subtitle1: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(16)
  },
  subtitle2: {
    fontWeight: 600,
    lineHeight: 22 / 14,
    fontSize: pxToRem(14)
  },
  body1: {
    lineHeight: 1.5,
    fontSize: pxToRem(16)
  },
  body2: {
    lineHeight: 22 / 14,
    fontSize: pxToRem(14)
  },
  caption: {
    lineHeight: 1.5,
    fontSize: pxToRem(12)
  },
  overline: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
    letterSpacing: 1.1,
    textTransform: 'uppercase'
  },
  button: {
    fontWeight: 700,
    lineHeight: 24 / 14,
    fontSize: pxToRem(14),
    textTransform: 'capitalize'
  }
};
var _default = typography;
exports.default = _default;