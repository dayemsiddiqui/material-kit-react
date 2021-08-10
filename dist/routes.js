"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Router;

var _reactRouterDom = require("react-router-dom");

var _dashboard = _interopRequireDefault(require("./layouts/dashboard"));

var _LogoOnlyLayout = _interopRequireDefault(require("./layouts/LogoOnlyLayout"));

var _Login = _interopRequireDefault(require("./pages/Login"));

var _Register = _interopRequireDefault(require("./pages/Register"));

var _DashboardApp = _interopRequireDefault(require("./pages/DashboardApp"));

var _Products = _interopRequireDefault(require("./pages/Products"));

var _Blog = _interopRequireDefault(require("./pages/Blog"));

var _User = _interopRequireDefault(require("./pages/User"));

var _Page = _interopRequireDefault(require("./pages/Page404"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// layouts
//
// ----------------------------------------------------------------------
function Router() {
  return (0, _reactRouterDom.useRoutes)([{
    path: '/dashboard',
    element: /*#__PURE__*/React.createElement(_dashboard.default, null),
    children: [{
      path: '/',
      element: /*#__PURE__*/React.createElement(_reactRouterDom.Navigate, {
        to: "/dashboard/app",
        replace: true
      })
    }, {
      path: 'app',
      element: /*#__PURE__*/React.createElement(_DashboardApp.default, null)
    }, {
      path: 'user',
      element: /*#__PURE__*/React.createElement(_User.default, null)
    }, {
      path: 'products',
      element: /*#__PURE__*/React.createElement(_Products.default, null)
    }, {
      path: 'blog',
      element: /*#__PURE__*/React.createElement(_Blog.default, null)
    }]
  }, {
    path: '/',
    element: /*#__PURE__*/React.createElement(_LogoOnlyLayout.default, null),
    children: [{
      path: 'login',
      element: /*#__PURE__*/React.createElement(_Login.default, null)
    }, {
      path: 'register',
      element: /*#__PURE__*/React.createElement(_Register.default, null)
    }, {
      path: '404',
      element: /*#__PURE__*/React.createElement(_Page.default, null)
    }, {
      path: '/',
      element: /*#__PURE__*/React.createElement(_reactRouterDom.Navigate, {
        to: "/dashboard"
      })
    }, {
      path: '*',
      element: /*#__PURE__*/React.createElement(_reactRouterDom.Navigate, {
        to: "/404"
      })
    }]
  }, {
    path: '*',
    element: /*#__PURE__*/React.createElement(_reactRouterDom.Navigate, {
      to: "/404",
      replace: true
    })
  }]);
}