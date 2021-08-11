"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = UserListToolbar;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = require("@iconify/react");

var _searchFill = _interopRequireDefault(require("@iconify/icons-eva/search-fill"));

var _trash2Fill = _interopRequireDefault(require("@iconify/icons-eva/trash-2-fill"));

var _roundFilterList = _interopRequireDefault(require("@iconify/icons-ic/round-filter-list"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// ----------------------------------------------------------------------
const RootStyle = (0, _styles.styled)(_core.Toolbar)(_ref => {
  let {
    theme
  } = _ref;
  return {
    height: 96,
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing(0, 1, 0, 3)
  };
});
const SearchStyle = (0, _styles.styled)(_core.OutlinedInput)(_ref2 => {
  let {
    theme
  } = _ref2;
  return {
    width: 240,
    transition: theme.transitions.create(['box-shadow', 'width'], {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.shorter
    }),
    '&.Mui-focused': {
      width: 320,
      boxShadow: theme.customShadows.z8
    },
    '& fieldset': {
      borderWidth: "1px !important",
      borderColor: "".concat(theme.palette.grey[50032], " !important")
    }
  };
}); // ----------------------------------------------------------------------

UserListToolbar.propTypes = {
  numSelected: _propTypes.default.number,
  filterName: _propTypes.default.string,
  onFilterName: _propTypes.default.func
};

function UserListToolbar(_ref3) {
  let {
    numSelected,
    filterName,
    onFilterName
  } = _ref3;
  return /*#__PURE__*/React.createElement(RootStyle, {
    sx: _objectSpread({}, numSelected > 0 && {
      color: 'primary.main',
      bgcolor: 'primary.lighter'
    })
  }, numSelected > 0 ? /*#__PURE__*/React.createElement(_core.Typography, {
    component: "div",
    variant: "subtitle1"
  }, numSelected, " selected") : /*#__PURE__*/React.createElement(SearchStyle, {
    value: filterName,
    onChange: onFilterName,
    placeholder: "Search user...",
    startAdornment: /*#__PURE__*/React.createElement(_core.InputAdornment, {
      position: "start"
    }, /*#__PURE__*/React.createElement(_core.Box, {
      component: _react.Icon,
      icon: _searchFill.default,
      sx: {
        color: 'text.disabled'
      }
    }))
  }), numSelected > 0 ? /*#__PURE__*/React.createElement(_core.Tooltip, {
    title: "Delete"
  }, /*#__PURE__*/React.createElement(_core.IconButton, null, /*#__PURE__*/React.createElement(_react.Icon, {
    icon: _trash2Fill.default
  }))) : /*#__PURE__*/React.createElement(_core.Tooltip, {
    title: "Filter list"
  }, /*#__PURE__*/React.createElement(_core.IconButton, null, /*#__PURE__*/React.createElement(_react.Icon, {
    icon: _roundFilterList.default
  }))));
}