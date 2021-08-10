"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ShopProductSort;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = require("@iconify/react");

var _react2 = require("react");

var _chevronUpFill = _interopRequireDefault(require("@iconify/icons-eva/chevron-up-fill"));

var _chevronDownFill = _interopRequireDefault(require("@iconify/icons-eva/chevron-down-fill"));

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// material
// ----------------------------------------------------------------------
const SORT_BY_OPTIONS = [{
  value: 'featured',
  label: 'Featured'
}, {
  value: 'newest',
  label: 'Newest'
}, {
  value: 'priceDesc',
  label: 'Price: High-Low'
}, {
  value: 'priceAsc',
  label: 'Price: Low-High'
}];

function ShopProductSort() {
  const [open, setOpen] = (0, _react2.useState)(null);

  const handleOpen = event => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_core.Button, {
    color: "inherit",
    disableRipple: true,
    onClick: handleOpen,
    endIcon: /*#__PURE__*/React.createElement(_react.Icon, {
      icon: open ? _chevronUpFill.default : _chevronDownFill.default
    })
  }, "Sort By:\xA0", /*#__PURE__*/React.createElement(_core.Typography, {
    component: "span",
    variant: "subtitle2",
    sx: {
      color: 'text.secondary'
    }
  }, "Newest")), /*#__PURE__*/React.createElement(_core.Menu, {
    keepMounted: true,
    anchorEl: open,
    open: Boolean(open),
    onClose: handleClose,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'right'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'right'
    }
  }, SORT_BY_OPTIONS.map(option => /*#__PURE__*/React.createElement(_core.MenuItem, {
    key: option.value,
    selected: option.value === 'newest',
    onClick: handleClose,
    sx: {
      typography: 'body2'
    }
  }, option.label))));
}