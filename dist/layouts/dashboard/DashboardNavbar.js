"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DashboardNavbar;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = require("@iconify/react");

var _menu2Fill = _interopRequireDefault(require("@iconify/icons-eva/menu-2-fill"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _materialExtend = require("../../components/@material-extend");

var _Searchbar = _interopRequireDefault(require("./Searchbar"));

var _AccountPopover = _interopRequireDefault(require("./AccountPopover"));

var _LanguagePopover = _interopRequireDefault(require("./LanguagePopover"));

var _NotificationsPopover = _interopRequireDefault(require("./NotificationsPopover"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// material
// components
//
// ----------------------------------------------------------------------
const DRAWER_WIDTH = 280;
const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 92;
const RootStyle = (0, _styles.styled)(_core.AppBar)(_ref => {
  let {
    theme
  } = _ref;
  return {
    boxShadow: 'none',
    backdropFilter: 'blur(6px)',
    WebkitBackdropFilter: 'blur(6px)',
    // Fix on Mobile
    backgroundColor: (0, _styles.alpha)(theme.palette.background.default, 0.72),
    [theme.breakpoints.up('lg')]: {
      width: "calc(100% - ".concat(DRAWER_WIDTH + 1, "px)")
    }
  };
});
const ToolbarStyle = (0, _styles.styled)(_core.Toolbar)(_ref2 => {
  let {
    theme
  } = _ref2;
  return {
    minHeight: APPBAR_MOBILE,
    [theme.breakpoints.up('lg')]: {
      minHeight: APPBAR_DESKTOP,
      padding: theme.spacing(0, 5)
    }
  };
}); // ----------------------------------------------------------------------

DashboardNavbar.propTypes = {
  onOpenSidebar: _propTypes.default.func
};

function DashboardNavbar(_ref3) {
  let {
    onOpenSidebar
  } = _ref3;
  return /*#__PURE__*/React.createElement(RootStyle, null, /*#__PURE__*/React.createElement(ToolbarStyle, null, /*#__PURE__*/React.createElement(_materialExtend.MHidden, {
    width: "lgUp"
  }, /*#__PURE__*/React.createElement(_core.IconButton, {
    onClick: onOpenSidebar,
    sx: {
      mr: 1,
      color: 'text.primary'
    }
  }, /*#__PURE__*/React.createElement(_react.Icon, {
    icon: _menu2Fill.default
  }))), /*#__PURE__*/React.createElement(_Searchbar.default, null), /*#__PURE__*/React.createElement(_core.Box, {
    sx: {
      flexGrow: 1
    }
  }), /*#__PURE__*/React.createElement(_core.Stack, {
    direction: "row",
    alignItems: "center",
    spacing: {
      xs: 0.5,
      sm: 1.5
    }
  }, /*#__PURE__*/React.createElement(_LanguagePopover.default, null), /*#__PURE__*/React.createElement(_NotificationsPopover.default, null), /*#__PURE__*/React.createElement(_AccountPopover.default, null))));
}