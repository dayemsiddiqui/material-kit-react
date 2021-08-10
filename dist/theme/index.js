"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ThemeConfig;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = require("react");

var _core = require("@material-ui/core");

var _styles = require("@material-ui/core/styles");

var _shape = _interopRequireDefault(require("./shape"));

var _palette = _interopRequireDefault(require("./palette"));

var _typography = _interopRequireDefault(require("./typography"));

var _globalStyles = _interopRequireDefault(require("./globalStyles"));

var _overrides = _interopRequireDefault(require("./overrides"));

var _shadows = _interopRequireWildcard(require("./shadows"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// material
//
// ----------------------------------------------------------------------
ThemeConfig.propTypes = {
  children: _propTypes.default.node
};

function ThemeConfig(_ref) {
  let {
    children
  } = _ref;
  const themeOptions = (0, _react.useMemo)(() => ({
    palette: _palette.default,
    shape: _shape.default,
    typography: _typography.default,
    shadows: _shadows.default,
    customShadows: _shadows.customShadows
  }), []);
  const theme = (0, _styles.createTheme)(themeOptions);
  theme.components = (0, _overrides.default)(theme);
  return /*#__PURE__*/React.createElement(_styles.StyledEngineProvider, {
    injectFirst: true
  }, /*#__PURE__*/React.createElement(_styles.ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/React.createElement(_core.CssBaseline, null), /*#__PURE__*/React.createElement(_globalStyles.default, null), children));
}