"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CartWidget;

var _react = require("@iconify/react");

var _shoppingCartFill = _interopRequireDefault(require("@iconify/icons-eva/shopping-cart-fill"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// material
// ----------------------------------------------------------------------
const RootStyle = (0, _styles.styled)('div')(_ref => {
  let {
    theme
  } = _ref;
  return {
    zIndex: 999,
    right: 0,
    display: 'flex',
    cursor: 'pointer',
    position: 'fixed',
    alignItems: 'center',
    top: theme.spacing(16),
    height: theme.spacing(5),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(1.25),
    boxShadow: theme.customShadows.z20,
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.paper,
    borderTopLeftRadius: theme.shape.borderRadiusMd,
    borderBottomLeftRadius: theme.shape.borderRadiusMd,
    transition: theme.transitions.create('opacity'),
    '&:hover': {
      opacity: 0.72
    }
  };
}); // ----------------------------------------------------------------------

function CartWidget() {
  return /*#__PURE__*/React.createElement(RootStyle, null, /*#__PURE__*/React.createElement(_core.Badge, {
    showZero: true,
    badgeContent: 0,
    color: "error",
    max: 99
  }, /*#__PURE__*/React.createElement(_react.Icon, {
    icon: _shoppingCartFill.default,
    width: 24,
    height: 24
  })));
}