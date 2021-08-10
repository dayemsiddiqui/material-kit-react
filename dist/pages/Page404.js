"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page404;

var _framerMotion = require("framer-motion");

var _reactRouterDom = require("react-router-dom");

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _animate = require("../components/animate");

var _Page = _interopRequireDefault(require("../components/Page"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// material
// components
// ----------------------------------------------------------------------
const RootStyle = (0, _styles.styled)(_Page.default)(_ref => {
  let {
    theme
  } = _ref;
  return {
    display: 'flex',
    minHeight: '100%',
    alignItems: 'center',
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(10)
  };
}); // ----------------------------------------------------------------------

function Page404() {
  return /*#__PURE__*/React.createElement(RootStyle, {
    title: "404 Page Not Found | Minimal-UI"
  }, /*#__PURE__*/React.createElement(_core.Container, null, /*#__PURE__*/React.createElement(_animate.MotionContainer, {
    initial: "initial",
    open: true
  }, /*#__PURE__*/React.createElement(_core.Box, {
    sx: {
      maxWidth: 480,
      margin: 'auto',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(_framerMotion.motion.div, {
    variants: _animate.varBounceIn
  }, /*#__PURE__*/React.createElement(_core.Typography, {
    variant: "h3",
    paragraph: true
  }, "Sorry, page not found!")), /*#__PURE__*/React.createElement(_core.Typography, {
    sx: {
      color: 'text.secondary'
    }
  }, "Sorry, we couldn\u2019t find the page you\u2019re looking for. Perhaps you\u2019ve mistyped the URL? Be sure to check your spelling."), /*#__PURE__*/React.createElement(_framerMotion.motion.div, {
    variants: _animate.varBounceIn
  }, /*#__PURE__*/React.createElement(_core.Box, {
    component: "img",
    src: "/static/illustrations/illustration_404.svg",
    sx: {
      height: 260,
      mx: 'auto',
      my: {
        xs: 5,
        sm: 10
      }
    }
  })), /*#__PURE__*/React.createElement(_core.Button, {
    to: "/",
    size: "large",
    variant: "contained",
    component: _reactRouterDom.Link
  }, "Go to Home")))));
}