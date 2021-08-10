"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ScrollToTop;

var _react = require("react");

var _reactRouterDom = require("react-router-dom");

// ----------------------------------------------------------------------
function ScrollToTop() {
  const {
    pathname
  } = (0, _reactRouterDom.useLocation)();
  (0, _react.useEffect)(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}