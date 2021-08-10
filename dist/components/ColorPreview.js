"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ColorPreview;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

const _excluded = ["colors", "limit"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// ----------------------------------------------------------------------
const RootStyle = (0, _styles.styled)(_core.Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end'
});
const IconStyle = (0, _styles.styled)('div')(_ref => {
  let {
    theme
  } = _ref;
  return {
    marginLeft: -4,
    borderRadius: '50%',
    width: theme.spacing(2),
    height: theme.spacing(2),
    border: "solid 2px ".concat(theme.palette.background.paper),
    boxShadow: "inset -1px 1px 2px ".concat((0, _styles.alpha)(theme.palette.common.black, 0.24))
  };
}); // ----------------------------------------------------------------------

ColorPreview.propTypes = {
  colors: _propTypes.default.array.isRequired,
  limit: _propTypes.default.number
};

function ColorPreview(_ref2) {
  let {
    colors,
    limit = 3
  } = _ref2,
      other = _objectWithoutProperties(_ref2, _excluded);

  const showColor = colors.slice(0, limit);
  const moreColor = colors.length - limit;
  return /*#__PURE__*/React.createElement(RootStyle, _extends({
    component: "span"
  }, other), showColor.map((color, index) => /*#__PURE__*/React.createElement(IconStyle, {
    key: color + index,
    sx: {
      bgcolor: color
    }
  })), colors.length > limit && /*#__PURE__*/React.createElement(_core.Typography, {
    variant: "subtitle2"
  }, "+".concat(moreColor)));
}