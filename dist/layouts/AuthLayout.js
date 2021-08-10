"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AuthLayout;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRouterDom = require("react-router-dom");

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _Logo = _interopRequireDefault(require("../components/Logo"));

var _materialExtend = require("../components/@material-extend");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// material
// components
//
// ----------------------------------------------------------------------
const HeaderStyle = (0, _styles.styled)('header')(_ref => {
  let {
    theme
  } = _ref;
  return {
    top: 0,
    zIndex: 9,
    lineHeight: 0,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    padding: theme.spacing(3),
    justifyContent: 'space-between',
    [theme.breakpoints.up('md')]: {
      alignItems: 'flex-start',
      padding: theme.spacing(7, 5, 0, 7)
    }
  };
}); // ----------------------------------------------------------------------

AuthLayout.propTypes = {
  children: _propTypes.default.node
};

function AuthLayout(_ref2) {
  let {
    children
  } = _ref2;
  return /*#__PURE__*/React.createElement(HeaderStyle, null, /*#__PURE__*/React.createElement(_reactRouterDom.Link, {
    to: "/"
  }, /*#__PURE__*/React.createElement(_Logo.default, null)), /*#__PURE__*/React.createElement(_materialExtend.MHidden, {
    width: "smDown"
  }, /*#__PURE__*/React.createElement(_core.Typography, {
    variant: "body2",
    sx: {
      mt: {
        md: -2
      }
    }
  }, children)));
}