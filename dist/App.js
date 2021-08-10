"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = App;

var _routes = _interopRequireDefault(require("./routes"));

var _theme = _interopRequireDefault(require("./theme"));

var _ScrollToTop = _interopRequireDefault(require("./components/ScrollToTop"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// routes
// theme
// components
// ----------------------------------------------------------------------
function App() {
  return /*#__PURE__*/React.createElement(_theme.default, null, /*#__PURE__*/React.createElement(_ScrollToTop.default, null), /*#__PURE__*/React.createElement(_routes.default, null));
}