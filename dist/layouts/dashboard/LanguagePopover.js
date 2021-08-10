"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = LanguagePopover;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = require("react");

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _MenuPopover = _interopRequireDefault(require("../../components/MenuPopover"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// ----------------------------------------------------------------------
const LANGS = [{
  value: 'en',
  label: 'English',
  icon: '/static/icons/ic_flag_en.svg'
}, {
  value: 'de',
  label: 'German',
  icon: '/static/icons/ic_flag_de.svg'
}, {
  value: 'fr',
  label: 'French',
  icon: '/static/icons/ic_flag_fr.svg'
}]; // ----------------------------------------------------------------------

function LanguagePopover() {
  const anchorRef = (0, _react.useRef)(null);
  const [open, setOpen] = (0, _react.useState)(false);

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
      bgcolor: theme => (0, _styles.alpha)(theme.palette.primary.main, theme.palette.action.focusOpacity)
    })
  }, /*#__PURE__*/React.createElement("img", {
    src: LANGS[0].icon,
    alt: LANGS[0].label
  })), /*#__PURE__*/React.createElement(_MenuPopover.default, {
    open: open,
    onClose: handleClose,
    anchorEl: anchorRef.current
  }, /*#__PURE__*/React.createElement(_core.Box, {
    sx: {
      py: 1
    }
  }, LANGS.map(option => /*#__PURE__*/React.createElement(_core.MenuItem, {
    key: option.value,
    selected: option.value === LANGS[0].value,
    onClick: handleClose,
    sx: {
      py: 1,
      px: 2.5
    }
  }, /*#__PURE__*/React.createElement(_core.ListItemIcon, null, /*#__PURE__*/React.createElement(_core.Box, {
    component: "img",
    alt: option.label,
    src: option.icon
  })), /*#__PURE__*/React.createElement(_core.ListItemText, {
    primaryTypographyProps: {
      variant: 'body2'
    }
  }, option.label))))));
}