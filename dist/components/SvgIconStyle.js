"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SvgIconStyle;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// ----------------------------------------------------------------------
SvgIconStyle.propTypes = {
  src: _propTypes.default.string.isRequired,
  color: _propTypes.default.string,
  sx: _propTypes.default.object
};

function SvgIconStyle(_ref) {
  let {
    src,
    color = 'inherit',
    sx
  } = _ref;
  return /*#__PURE__*/React.createElement(_core.Box, {
    component: "span",
    sx: _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({
      width: 24,
      height: 24,
      mask: "url(".concat(src, ") no-repeat center / contain"),
      WebkitMask: "url(".concat(src, ") no-repeat center / contain"),
      bgcolor: "".concat(color, ".main")
    }, color === 'inherit' && {
      bgcolor: 'currentColor'
    }), color === 'action' && {
      bgcolor: 'action.active'
    }), color === 'disabled' && {
      bgcolor: 'action.disabled'
    }), color === 'paper' && {
      bgcolor: 'background.paper'
    }), sx)
  });
}