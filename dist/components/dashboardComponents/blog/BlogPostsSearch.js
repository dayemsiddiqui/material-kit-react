"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = BlogPostsSearch;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = require("@iconify/react");

var _searchFill = _interopRequireDefault(require("@iconify/icons-eva/search-fill"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// ----------------------------------------------------------------------
const RootStyle = (0, _styles.styled)('div')(_ref => {
  let {
    theme
  } = _ref;
  return {
    '& .MuiAutocomplete-root': {
      width: 200,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.shorter
      }),
      '&.Mui-focused': {
        width: 240,
        '& .MuiAutocomplete-inputRoot': {
          boxShadow: theme.customShadows.z12
        }
      }
    },
    '& .MuiAutocomplete-inputRoot': {
      '& fieldset': {
        borderWidth: "1px !important",
        borderColor: "".concat(theme.palette.grey[50032], " !important")
      }
    },
    '& .MuiAutocomplete-option': {
      '&:not(:last-child)': {
        borderBottom: "solid 1px ".concat(theme.palette.divider)
      }
    }
  };
}); // ----------------------------------------------------------------------

BlogPostsSearch.propTypes = {
  posts: _propTypes.default.array.isRequired
};

function BlogPostsSearch(_ref2) {
  let {
    posts
  } = _ref2;
  return /*#__PURE__*/React.createElement(RootStyle, null, /*#__PURE__*/React.createElement(_core.Autocomplete, {
    size: "small",
    disablePortal: true,
    popupIcon: null,
    options: posts,
    getOptionLabel: post => post.title,
    renderInput: params => /*#__PURE__*/React.createElement(_core.TextField, _extends({}, params, {
      placeholder: "Search post...",
      InputProps: _objectSpread(_objectSpread({}, params.InputProps), {}, {
        startAdornment: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_core.InputAdornment, {
          position: "start"
        }, /*#__PURE__*/React.createElement(_core.Box, {
          component: _react.Icon,
          icon: _searchFill.default,
          sx: {
            ml: 1,
            width: 20,
            height: 20,
            color: 'text.disabled'
          }
        })), params.InputProps.startAdornment)
      })
    }))
  }));
}