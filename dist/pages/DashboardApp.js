"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DashboardApp;

var _core = require("@material-ui/core");

var _Page = _interopRequireDefault(require("../components/Page"));

var _app = require("../components/dashboardComponents/app");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// material
// components
// ----------------------------------------------------------------------
function DashboardApp() {
  return /*#__PURE__*/React.createElement(_Page.default, {
    title: "Dashboard | Minimal-UI"
  }, /*#__PURE__*/React.createElement(_core.Container, {
    maxWidth: "xl"
  }, /*#__PURE__*/React.createElement(_core.Box, {
    sx: {
      pb: 5
    }
  }, /*#__PURE__*/React.createElement(_core.Typography, {
    variant: "h4"
  }, "Hi, Welcome back")), /*#__PURE__*/React.createElement(_core.Grid, {
    container: true,
    spacing: 3
  }, /*#__PURE__*/React.createElement(_core.Grid, {
    item: true,
    xs: 12,
    sm: 6,
    md: 3
  }, /*#__PURE__*/React.createElement(_app.AppWeeklySales, null)), /*#__PURE__*/React.createElement(_core.Grid, {
    item: true,
    xs: 12,
    sm: 6,
    md: 3
  }, /*#__PURE__*/React.createElement(_app.AppNewUsers, null)), /*#__PURE__*/React.createElement(_core.Grid, {
    item: true,
    xs: 12,
    sm: 6,
    md: 3
  }, /*#__PURE__*/React.createElement(_app.AppItemOrders, null)), /*#__PURE__*/React.createElement(_core.Grid, {
    item: true,
    xs: 12,
    sm: 6,
    md: 3
  }, /*#__PURE__*/React.createElement(_app.AppBugReports, null)), /*#__PURE__*/React.createElement(_core.Grid, {
    item: true,
    xs: 12,
    md: 6,
    lg: 8
  }, /*#__PURE__*/React.createElement(_app.AppWebsiteVisits, null)), /*#__PURE__*/React.createElement(_core.Grid, {
    item: true,
    xs: 12,
    md: 6,
    lg: 4
  }, /*#__PURE__*/React.createElement(_app.AppCurrentVisits, null)), /*#__PURE__*/React.createElement(_core.Grid, {
    item: true,
    xs: 12,
    md: 6,
    lg: 8
  }, /*#__PURE__*/React.createElement(_app.AppConversionRates, null)), /*#__PURE__*/React.createElement(_core.Grid, {
    item: true,
    xs: 12,
    md: 6,
    lg: 4
  }, /*#__PURE__*/React.createElement(_app.AppCurrentSubject, null)), /*#__PURE__*/React.createElement(_core.Grid, {
    item: true,
    xs: 12,
    md: 6,
    lg: 8
  }, /*#__PURE__*/React.createElement(_app.AppNewsUpdate, null)), /*#__PURE__*/React.createElement(_core.Grid, {
    item: true,
    xs: 12,
    md: 6,
    lg: 4
  }, /*#__PURE__*/React.createElement(_app.AppOrderTimeline, null)), /*#__PURE__*/React.createElement(_core.Grid, {
    item: true,
    xs: 12,
    md: 6,
    lg: 4
  }, /*#__PURE__*/React.createElement(_app.AppTrafficBySite, null)), /*#__PURE__*/React.createElement(_core.Grid, {
    item: true,
    xs: 12,
    md: 6,
    lg: 8
  }, /*#__PURE__*/React.createElement(_app.AppTasks, null)))));
}