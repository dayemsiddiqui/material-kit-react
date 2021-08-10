"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Searchbar;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = require("@iconify/react");

var _react2 = require("react");

var _searchFill = _interopRequireDefault(require("@iconify/icons-eva/search-fill"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// material
// ----------------------------------------------------------------------
const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 92;
const SearchbarStyle = (0, _styles.styled)('div')(_ref => {
  let {
    theme
  } = _ref;
  return {
    top: 0,
    left: 0,
    zIndex: 99,
    width: '100%',
    display: 'flex',
    position: 'absolute',
    alignItems: 'center',
    height: APPBAR_MOBILE,
    backdropFilter: 'blur(6px)',
    WebkitBackdropFilter: 'blur(6px)',
    // Fix on Mobile
    padding: theme.spacing(0, 3),
    boxShadow: theme.customShadows.z8,
    backgroundColor: "".concat((0, _styles.alpha)(theme.palette.background.default, 0.72)),
    [theme.breakpoints.up('md')]: {
      height: APPBAR_DESKTOP,
      padding: theme.spacing(0, 5)
    }
  };
}); // ----------------------------------------------------------------------

function Searchbar() {
  const [isOpen, setOpen] = (0, _react2.useState)(false);

  const handleOpen = () => {
    setOpen(prev => !prev);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return /*#__PURE__*/React.createElement(_core.ClickAwayListener, {
    onClickAway: handleClose
  }, /*#__PURE__*/React.createElement("div", null, !isOpen && /*#__PURE__*/React.createElement(_core.IconButton, {
    onClick: handleOpen
  }, /*#__PURE__*/React.createElement(_react.Icon, {
    icon: _searchFill.default,
    width: 20,
    height: 20
  })), /*#__PURE__*/React.createElement(_core.Slide, {
    direction: "down",
    in: isOpen,
    mountOnEnter: true,
    unmountOnExit: true
  }, /*#__PURE__*/React.createElement(SearchbarStyle, null, /*#__PURE__*/React.createElement(_core.Input, {
    autoFocus: true,
    fullWidth: true,
    disableUnderline: true,
    placeholder: "Search\u2026",
    startAdornment: /*#__PURE__*/React.createElement(_core.InputAdornment, {
      position: "start"
    }, /*#__PURE__*/React.createElement(_core.Box, {
      component: _react.Icon,
      icon: _searchFill.default,
      sx: {
        color: 'text.disabled',
        width: 20,
        height: 20
      }
    })),
    sx: {
      mr: 1,
      fontWeight: 'fontWeightBold'
    }
  }), /*#__PURE__*/React.createElement(_core.Button, {
    variant: "contained",
    onClick: handleClose
  }, "Search")))));
}