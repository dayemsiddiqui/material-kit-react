"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ColorManyPicker;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = require("@iconify/react");

var _checkmarkFill = _interopRequireDefault(require("@iconify/icons-eva/checkmark-fill"));

var _core = require("@material-ui/core");

const _excluded = ["sx"],
      _excluded2 = ["colors", "onChecked", "sx"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// ----------------------------------------------------------------------
IconColor.propTypes = {
  sx: _propTypes.default.object
};

function IconColor(_ref) {
  let {
    sx
  } = _ref,
      other = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(_core.Box, _extends({
    sx: _objectSpread({
      width: 20,
      height: 20,
      display: 'flex',
      borderRadius: '50%',
      position: 'relative',
      alignItems: 'center',
      justifyContent: 'center',
      bgcolor: 'currentColor',
      transition: theme => theme.transitions.create('all', {
        duration: theme.transitions.duration.shortest
      })
    }, sx)
  }, other), /*#__PURE__*/React.createElement(_react.Icon, {
    icon: _checkmarkFill.default
  }));
}

ColorManyPicker.propTypes = {
  colors: _propTypes.default.array.isRequired,
  onChecked: _propTypes.default.func,
  sx: _propTypes.default.object
};

function ColorManyPicker(_ref2) {
  let {
    colors,
    onChecked,
    sx
  } = _ref2,
      other = _objectWithoutProperties(_ref2, _excluded2);

  return /*#__PURE__*/React.createElement(_core.Box, {
    sx: sx
  }, colors.map(color => {
    const isWhite = color === '#FFFFFF' || color === 'white';
    return /*#__PURE__*/React.createElement(_core.Checkbox, _extends({
      key: color,
      size: "small",
      value: color,
      color: "default",
      checked: onChecked(color),
      icon: /*#__PURE__*/React.createElement(IconColor, {
        sx: _objectSpread({}, isWhite && {
          border: theme => "solid 1px ".concat(theme.palette.divider)
        })
      }),
      checkedIcon: /*#__PURE__*/React.createElement(IconColor, {
        sx: _objectSpread({
          transform: 'scale(1.4)',
          '&:before': {
            opacity: 0.48,
            width: '100%',
            content: "''",
            height: '100%',
            borderRadius: '50%',
            position: 'absolute',
            boxShadow: '4px 4px 8px 0 currentColor'
          },
          '& svg': {
            width: 12,
            height: 12,
            color: 'common.white'
          }
        }, isWhite && {
          border: theme => "solid 1px ".concat(theme.palette.divider),
          boxShadow: theme => "4px 4px 8px 0 ".concat(theme.palette.grey[50024]),
          '& svg': {
            width: 12,
            height: 12,
            color: 'common.black'
          }
        })
      }),
      sx: {
        color,
        '&:hover': {
          opacity: 0.72
        }
      }
    }, other));
  }));
}