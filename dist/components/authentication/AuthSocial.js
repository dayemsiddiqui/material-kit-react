"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AuthSocial;

var _react = require("@iconify/react");

var _googleFill = _interopRequireDefault(require("@iconify/icons-eva/google-fill"));

var _twitterFill = _interopRequireDefault(require("@iconify/icons-eva/twitter-fill"));

var _facebookFill = _interopRequireDefault(require("@iconify/icons-eva/facebook-fill"));

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// material
// ----------------------------------------------------------------------
function AuthSocial() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_core.Stack, {
    direction: "row",
    spacing: 2
  }, /*#__PURE__*/React.createElement(_core.Button, {
    fullWidth: true,
    size: "large",
    color: "inherit",
    variant: "outlined"
  }, /*#__PURE__*/React.createElement(_react.Icon, {
    icon: _googleFill.default,
    color: "#DF3E30",
    height: 24
  })), /*#__PURE__*/React.createElement(_core.Button, {
    fullWidth: true,
    size: "large",
    color: "inherit",
    variant: "outlined"
  }, /*#__PURE__*/React.createElement(_react.Icon, {
    icon: _facebookFill.default,
    color: "#1877F2",
    height: 24
  })), /*#__PURE__*/React.createElement(_core.Button, {
    fullWidth: true,
    size: "large",
    color: "inherit",
    variant: "outlined"
  }, /*#__PURE__*/React.createElement(_react.Icon, {
    icon: _twitterFill.default,
    color: "#1C9CEA",
    height: 24
  }))), /*#__PURE__*/React.createElement(_core.Divider, {
    sx: {
      my: 3
    }
  }, /*#__PURE__*/React.createElement(_core.Typography, {
    variant: "body2",
    sx: {
      color: 'text.secondary'
    }
  }, "OR")));
}