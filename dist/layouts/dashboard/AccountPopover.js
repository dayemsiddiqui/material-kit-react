"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AccountPopover;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = require("@iconify/react");

var _react2 = require("react");

var _homeFill = _interopRequireDefault(require("@iconify/icons-eva/home-fill"));

var _personFill = _interopRequireDefault(require("@iconify/icons-eva/person-fill"));

var _settings2Fill = _interopRequireDefault(require("@iconify/icons-eva/settings-2-fill"));

var _reactRouterDom = require("react-router-dom");

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _MenuPopover = _interopRequireDefault(require("../../components/MenuPopover"));

var _account = _interopRequireDefault(require("../../_mocks_/account"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// ----------------------------------------------------------------------
const MENU_OPTIONS = [{
  label: 'Home',
  icon: _homeFill.default,
  linkTo: '/'
}, {
  label: 'Profile',
  icon: _personFill.default,
  linkTo: '#'
}, {
  label: 'Settings',
  icon: _settings2Fill.default,
  linkTo: '#'
}]; // ----------------------------------------------------------------------

function AccountPopover() {
  const anchorRef = (0, _react2.useRef)(null);
  const [open, setOpen] = (0, _react2.useState)(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_core.IconButton, {
    ref: anchorRef,
    onClick: handleOpen,
    sx: _objectSpread({
      padding: 0,
      width: 44,
      height: 44
    }, open && {
      '&:before': {
        zIndex: 1,
        content: "''",
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        position: 'absolute',
        bgcolor: theme => (0, _styles.alpha)(theme.palette.grey[900], 0.72)
      }
    })
  }, /*#__PURE__*/React.createElement(_core.Avatar, {
    src: _account.default.photoURL,
    alt: "photoURL"
  })), /*#__PURE__*/React.createElement(_MenuPopover.default, {
    open: open,
    onClose: handleClose,
    anchorEl: anchorRef.current,
    sx: {
      width: 220
    }
  }, /*#__PURE__*/React.createElement(_core.Box, {
    sx: {
      my: 1.5,
      px: 2.5
    }
  }, /*#__PURE__*/React.createElement(_core.Typography, {
    variant: "subtitle1",
    noWrap: true
  }, _account.default.displayName), /*#__PURE__*/React.createElement(_core.Typography, {
    variant: "body2",
    sx: {
      color: 'text.secondary'
    },
    noWrap: true
  }, _account.default.email)), /*#__PURE__*/React.createElement(_core.Divider, {
    sx: {
      my: 1
    }
  }), MENU_OPTIONS.map(option => /*#__PURE__*/React.createElement(_core.MenuItem, {
    key: option.label,
    to: option.linkTo,
    component: _reactRouterDom.Link,
    onClick: handleClose,
    sx: {
      typography: 'body2',
      py: 1,
      px: 2.5
    }
  }, /*#__PURE__*/React.createElement(_core.Box, {
    component: _react.Icon,
    icon: option.icon,
    sx: {
      mr: 2,
      width: 24,
      height: 24
    }
  }), option.label)), /*#__PURE__*/React.createElement(_core.Box, {
    sx: {
      p: 2,
      pt: 1.5
    }
  }, /*#__PURE__*/React.createElement(_core.Button, {
    fullWidth: true,
    color: "inherit",
    variant: "outlined"
  }, "Logout"))));
}