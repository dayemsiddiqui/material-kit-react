"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = BlogPostsSort;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// material
// ----------------------------------------------------------------------
BlogPostsSort.propTypes = {
  options: _propTypes.default.array,
  onSort: _propTypes.default.func
};

function BlogPostsSort(_ref) {
  let {
    options,
    onSort
  } = _ref;
  return /*#__PURE__*/React.createElement(_core.TextField, {
    select: true,
    size: "small",
    value: "latest",
    onChange: onSort
  }, options.map(option => /*#__PURE__*/React.createElement(_core.MenuItem, {
    key: option.value,
    value: option.value
  }, option.label)));
}