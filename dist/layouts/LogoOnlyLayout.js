"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = LogoOnlyLayout;

var _reactRouterDom = require("react-router-dom");

var _styles = require("@material-ui/core/styles");

var _Logo = _interopRequireDefault(require("../components/Logo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// material
// components
// ----------------------------------------------------------------------
const HeaderStyle = (0, _styles.styled)('header')(_ref => {
  let {
    theme
  } = _ref;
  return {
    top: 0,
    left: 0,
    lineHeight: 0,
    width: '100%',
    position: 'absolute',
    padding: theme.spacing(3, 3, 0),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(5, 5, 0)
    }
  };
}); // ----------------------------------------------------------------------

function LogoOnlyLayout() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(HeaderStyle, null, /*#__PURE__*/React.createElement(_reactRouterDom.Link, {
    to: "/"
  }, /*#__PURE__*/React.createElement(_Logo.default, null))), /*#__PURE__*/React.createElement(_reactRouterDom.Outlet, null));
}