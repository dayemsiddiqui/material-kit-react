"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("@iconify/react");

var _pieChart2Fill = _interopRequireDefault(require("@iconify/icons-eva/pie-chart-2-fill"));

var _peopleFill = _interopRequireDefault(require("@iconify/icons-eva/people-fill"));

var _shoppingBagFill = _interopRequireDefault(require("@iconify/icons-eva/shopping-bag-fill"));

var _fileTextFill = _interopRequireDefault(require("@iconify/icons-eva/file-text-fill"));

var _lockFill = _interopRequireDefault(require("@iconify/icons-eva/lock-fill"));

var _personAddFill = _interopRequireDefault(require("@iconify/icons-eva/person-add-fill"));

var _alertTriangleFill = _interopRequireDefault(require("@iconify/icons-eva/alert-triangle-fill"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------------------------------------------------------
const getIcon = name => /*#__PURE__*/React.createElement(_react.Icon, {
  icon: name,
  width: 22,
  height: 22
});

const sidebarConfig = [{
  title: 'dashboard',
  path: '/dashboard/app',
  icon: getIcon(_pieChart2Fill.default)
}, {
  title: 'user',
  path: '/dashboard/user',
  icon: getIcon(_peopleFill.default)
}, {
  title: 'product',
  path: '/dashboard/products',
  icon: getIcon(_shoppingBagFill.default)
}, {
  title: 'blog',
  path: '/dashboard/blog',
  icon: getIcon(_fileTextFill.default)
}, {
  title: 'login',
  path: '/login',
  icon: getIcon(_lockFill.default)
}, {
  title: 'register',
  path: '/register',
  icon: getIcon(_personAddFill.default)
}, {
  title: 'Not found',
  path: '/404',
  icon: getIcon(_alertTriangleFill.default)
}];
var _default = sidebarConfig;
exports.default = _default;