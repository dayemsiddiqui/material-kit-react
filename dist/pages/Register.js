"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Register;

var _reactRouterDom = require("react-router-dom");

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _AuthLayout = _interopRequireDefault(require("../layouts/AuthLayout"));

var _Page = _interopRequireDefault(require("../components/Page"));

var _materialExtend = require("../components/@material-extend");

var _register = require("../components/authentication/register");

var _AuthSocial = _interopRequireDefault(require("../components/authentication/AuthSocial"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// material
// layouts
// components
// ----------------------------------------------------------------------
const RootStyle = (0, _styles.styled)(_Page.default)(_ref => {
  let {
    theme
  } = _ref;
  return {
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  };
});
const SectionStyle = (0, _styles.styled)(_core.Card)(_ref2 => {
  let {
    theme
  } = _ref2;
  return {
    width: '100%',
    maxWidth: 464,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: theme.spacing(2, 0, 2, 2)
  };
});
const ContentStyle = (0, _styles.styled)('div')(_ref3 => {
  let {
    theme
  } = _ref3;
  return {
    maxWidth: 480,
    margin: 'auto',
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: theme.spacing(12, 0)
  };
}); // ----------------------------------------------------------------------

function Register() {
  return /*#__PURE__*/React.createElement(RootStyle, {
    title: "Register | Minimal-UI"
  }, /*#__PURE__*/React.createElement(_AuthLayout.default, null, "Already have an account? \xA0", /*#__PURE__*/React.createElement(_core.Link, {
    underline: "none",
    variant: "subtitle2",
    component: _reactRouterDom.Link,
    to: "/login"
  }, "Login")), /*#__PURE__*/React.createElement(_materialExtend.MHidden, {
    width: "mdDown"
  }, /*#__PURE__*/React.createElement(SectionStyle, null, /*#__PURE__*/React.createElement(_core.Typography, {
    variant: "h3",
    sx: {
      px: 5,
      mt: 10,
      mb: 5
    }
  }, "Manage the job more effectively with Minimal"), /*#__PURE__*/React.createElement("img", {
    alt: "register",
    src: "/static/illustrations/illustration_register.png"
  }))), /*#__PURE__*/React.createElement(_core.Container, null, /*#__PURE__*/React.createElement(ContentStyle, null, /*#__PURE__*/React.createElement(_core.Box, {
    sx: {
      mb: 5
    }
  }, /*#__PURE__*/React.createElement(_core.Typography, {
    variant: "h4",
    gutterBottom: true
  }, "Get started absolutely free."), /*#__PURE__*/React.createElement(_core.Typography, {
    sx: {
      color: 'text.secondary'
    }
  }, "Free forever. No credit card needed.")), /*#__PURE__*/React.createElement(_AuthSocial.default, null), /*#__PURE__*/React.createElement(_register.RegisterForm, null), /*#__PURE__*/React.createElement(_core.Typography, {
    variant: "body2",
    align: "center",
    sx: {
      color: 'text.secondary',
      mt: 3
    }
  }, "By registering, I agree to Minimal\xA0", /*#__PURE__*/React.createElement(_core.Link, {
    underline: "always",
    sx: {
      color: 'text.primary'
    }
  }, "Terms of Service"), "\xA0and\xA0", /*#__PURE__*/React.createElement(_core.Link, {
    underline: "always",
    sx: {
      color: 'text.primary'
    }
  }, "Privacy Policy"), "."), /*#__PURE__*/React.createElement(_materialExtend.MHidden, {
    width: "smUp"
  }, /*#__PURE__*/React.createElement(_core.Typography, {
    variant: "subtitle2",
    sx: {
      mt: 3,
      textAlign: 'center'
    }
  }, "Already have an account?\xA0", /*#__PURE__*/React.createElement(_core.Link, {
    to: "/login",
    component: _reactRouterDom.Link
  }, "Login"))))));
}