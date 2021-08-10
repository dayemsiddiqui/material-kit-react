"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Label;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

const _excluded = ["color", "variant", "children"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// ----------------------------------------------------------------------
const RootStyle = (0, _styles.styled)('span')(_ref => {
  let {
    theme,
    styleProps
  } = _ref;
  const {
    color,
    variant
  } = styleProps;

  const styleFilled = color => ({
    color: theme.palette[color].contrastText,
    backgroundColor: theme.palette[color].main
  });

  const styleOutlined = color => ({
    color: theme.palette[color].main,
    backgroundColor: 'transparent',
    border: "1px solid ".concat(theme.palette[color].main)
  });

  const styleGhost = color => ({
    color: theme.palette[color].dark,
    backgroundColor: (0, _styles.alpha)(theme.palette[color].main, 0.16)
  });

  return _objectSpread({
    height: 22,
    minWidth: 22,
    lineHeight: 0,
    borderRadius: 8,
    cursor: 'default',
    alignItems: 'center',
    whiteSpace: 'nowrap',
    display: 'inline-flex',
    justifyContent: 'center',
    padding: theme.spacing(0, 1),
    color: theme.palette.grey[800],
    fontSize: theme.typography.pxToRem(12),
    fontFamily: theme.typography.fontFamily,
    backgroundColor: theme.palette.grey[300],
    fontWeight: theme.typography.fontWeightBold
  }, color !== 'default' ? _objectSpread(_objectSpread(_objectSpread({}, variant === 'filled' && _objectSpread({}, styleFilled(color))), variant === 'outlined' && _objectSpread({}, styleOutlined(color))), variant === 'ghost' && _objectSpread({}, styleGhost(color))) : _objectSpread(_objectSpread({}, variant === 'outlined' && {
    backgroundColor: 'transparent',
    color: theme.palette.text.primary,
    border: "1px solid ".concat(theme.palette.grey[50032])
  }), variant === 'ghost' && {
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.grey[50016]
  }));
}); // ----------------------------------------------------------------------

function Label(_ref2) {
  let {
    color = 'default',
    variant = 'ghost',
    children
  } = _ref2,
      other = _objectWithoutProperties(_ref2, _excluded);

  return /*#__PURE__*/React.createElement(RootStyle, _extends({
    styleProps: {
      color,
      variant
    }
  }, other), children);
}

Label.propTypes = {
  children: _propTypes.default.node,
  color: _propTypes.default.oneOf(['default', 'primary', 'secondary', 'info', 'success', 'warning', 'error']),
  variant: _propTypes.default.oneOf(['filled', 'outlined', 'ghost'])
};