"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DashboardLayout;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = require("react");

var _reactRouterDom = require("react-router-dom");

var _styles = require("@material-ui/core/styles");

var _DashboardNavbar = _interopRequireDefault(require("./DashboardNavbar"));

var _DashboardSidebar = _interopRequireDefault(require("./DashboardSidebar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// material
//
// ----------------------------------------------------------------------
const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;
const RootStyle = (0, _styles.styled)('div')({
  display: 'flex',
  minHeight: '100%',
  overflow: 'hidden'
});
const MainStyle = (0, _styles.styled)('div')(_ref => {
  let {
    theme
  } = _ref;
  return {
    flexGrow: 1,
    overflow: 'auto',
    minHeight: '100%',
    paddingTop: APP_BAR_MOBILE + 24,
    paddingBottom: theme.spacing(10),
    [theme.breakpoints.up('lg')]: {
      paddingTop: APP_BAR_DESKTOP + 24,
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    }
  };
}); // ----------------------------------------------------------------------

function DashboardLayout() {
  const [open, setOpen] = (0, _react.useState)(false);
  return /*#__PURE__*/React.createElement(RootStyle, null, /*#__PURE__*/React.createElement(_DashboardNavbar.default, {
    onOpenSidebar: () => setOpen(true)
  }), /*#__PURE__*/React.createElement(_DashboardSidebar.default, {
    isOpenSidebar: open,
    onCloseSidebar: () => setOpen(false)
  }), /*#__PURE__*/React.createElement(MainStyle, null, /*#__PURE__*/React.createElement(_reactRouterDom.Outlet, null)));
}