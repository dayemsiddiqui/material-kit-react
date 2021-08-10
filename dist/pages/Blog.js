"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Blog;

var _react = require("@iconify/react");

var _plusFill = _interopRequireDefault(require("@iconify/icons-eva/plus-fill"));

var _reactRouterDom = require("react-router-dom");

var _core = require("@material-ui/core");

var _Page = _interopRequireDefault(require("../components/Page"));

var _blog = require("../components/dashboardComponents/blog");

var _blog2 = _interopRequireDefault(require("../_mocks_/blog"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// material
// components
//
// ----------------------------------------------------------------------
const SORT_OPTIONS = [{
  value: 'latest',
  label: 'Latest'
}, {
  value: 'popular',
  label: 'Popular'
}, {
  value: 'oldest',
  label: 'Oldest'
}]; // ----------------------------------------------------------------------

function Blog() {
  return /*#__PURE__*/React.createElement(_Page.default, {
    title: "Dashboard: Blog | Minimal-UI"
  }, /*#__PURE__*/React.createElement(_core.Container, null, /*#__PURE__*/React.createElement(_core.Stack, {
    direction: "row",
    alignItems: "center",
    justifyContent: "space-between",
    mb: 5
  }, /*#__PURE__*/React.createElement(_core.Typography, {
    variant: "h4",
    gutterBottom: true
  }, "Blog"), /*#__PURE__*/React.createElement(_core.Button, {
    variant: "contained",
    component: _reactRouterDom.Link,
    to: "#",
    startIcon: /*#__PURE__*/React.createElement(_react.Icon, {
      icon: _plusFill.default
    })
  }, "New Post")), /*#__PURE__*/React.createElement(_core.Stack, {
    mb: 5,
    direction: "row",
    alignItems: "center",
    justifyContent: "space-between"
  }, /*#__PURE__*/React.createElement(_blog.BlogPostsSearch, {
    posts: _blog2.default
  }), /*#__PURE__*/React.createElement(_blog.BlogPostsSort, {
    options: SORT_OPTIONS
  })), /*#__PURE__*/React.createElement(_core.Grid, {
    container: true,
    spacing: 3
  }, _blog2.default.map((post, index) => /*#__PURE__*/React.createElement(_blog.BlogPostCard, {
    key: post.id,
    post: post,
    index: index
  })))));
}