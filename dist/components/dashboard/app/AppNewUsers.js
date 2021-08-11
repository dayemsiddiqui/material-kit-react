"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AppNewUsers;

var _react = require("@iconify/react");

var _appleFilled = _interopRequireDefault(require("@iconify/icons-ant-design/apple-filled"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _formatNumber = require("../../../utils/formatNumber");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// material
// utils
// ----------------------------------------------------------------------
const RootStyle = (0, _styles.styled)(_core.Card)(_ref => {
  let {
    theme
  } = _ref;
  return {
    boxShadow: 'none',
    textAlign: 'center',
    padding: theme.spacing(5, 0),
    color: theme.palette.info.darker,
    backgroundColor: theme.palette.info.lighter
  };
});
const IconWrapperStyle = (0, _styles.styled)('div')(_ref2 => {
  let {
    theme
  } = _ref2;
  return {
    margin: 'auto',
    display: 'flex',
    borderRadius: '50%',
    alignItems: 'center',
    width: theme.spacing(8),
    height: theme.spacing(8),
    justifyContent: 'center',
    marginBottom: theme.spacing(3),
    color: theme.palette.info.dark,
    backgroundImage: "linear-gradient(135deg, ".concat((0, _styles.alpha)(theme.palette.info.dark, 0), " 0%, ").concat((0, _styles.alpha)(theme.palette.info.dark, 0.24), " 100%)")
  };
}); // ----------------------------------------------------------------------

const TOTAL = 1352831;

function AppNewUsers() {
  return /*#__PURE__*/React.createElement(RootStyle, null, /*#__PURE__*/React.createElement(IconWrapperStyle, null, /*#__PURE__*/React.createElement(_react.Icon, {
    icon: _appleFilled.default,
    width: 24,
    height: 24
  })), /*#__PURE__*/React.createElement(_core.Typography, {
    variant: "h3"
  }, (0, _formatNumber.fShortenNumber)(TOTAL)), /*#__PURE__*/React.createElement(_core.Typography, {
    variant: "subtitle2",
    sx: {
      opacity: 0.72
    }
  }, "New Users"));
}