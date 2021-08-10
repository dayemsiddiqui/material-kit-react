"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Scrollbar;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _simplebarReact = _interopRequireDefault(require("simplebar-react"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

const _excluded = ["children", "sx"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// ----------------------------------------------------------------------
const RootStyle = (0, _styles.styled)('div')({
  flexGrow: 1,
  height: '100%',
  overflow: 'hidden'
});
const SimpleBarStyle = (0, _styles.styled)(_simplebarReact.default)(_ref => {
  let {
    theme
  } = _ref;
  return {
    maxHeight: '100%',
    '& .simplebar-scrollbar': {
      '&:before': {
        backgroundColor: (0, _styles.alpha)(theme.palette.grey[600], 0.48)
      },
      '&.simplebar-visible:before': {
        opacity: 1
      }
    },
    '& .simplebar-track.simplebar-vertical': {
      width: 10
    },
    '& .simplebar-track.simplebar-horizontal .simplebar-scrollbar': {
      height: 6
    },
    '& .simplebar-mask': {
      zIndex: 'inherit'
    }
  };
}); // ----------------------------------------------------------------------

Scrollbar.propTypes = {
  children: _propTypes.default.node.isRequired,
  sx: _propTypes.default.object
};

function Scrollbar(_ref2) {
  let {
    children,
    sx
  } = _ref2,
      other = _objectWithoutProperties(_ref2, _excluded);

  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  if (isMobile) {
    return /*#__PURE__*/React.createElement(_core.Box, _extends({
      sx: _objectSpread({
        overflowX: 'auto'
      }, sx)
    }, other), children);
  }

  return /*#__PURE__*/React.createElement(RootStyle, null, /*#__PURE__*/React.createElement(SimpleBarStyle, _extends({
    timeout: 500,
    clickOnTrack: false,
    sx: sx
  }, other), children));
}