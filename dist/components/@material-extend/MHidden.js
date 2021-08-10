"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MHidden;

require("core-js/modules/es.string.includes.js");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// material
// ----------------------------------------------------------------------
MHidden.propTypes = {
  children: _propTypes.default.node,
  width: _propTypes.default.oneOf(['xsDown', 'smDown', 'mdDown', 'lgDown', 'xlDown', 'xsUp', 'smUp', 'mdUp', 'lgUp', 'xlUp']).isRequired
};

function MHidden(_ref) {
  let {
    width,
    children
  } = _ref;
  const breakpoint = width.substring(0, 2);
  const hiddenUp = (0, _core.useMediaQuery)(theme => theme.breakpoints.up(breakpoint));
  const hiddenDown = (0, _core.useMediaQuery)(theme => theme.breakpoints.down(breakpoint));

  if (width.includes('Down')) {
    return hiddenDown ? null : children;
  }

  if (width.includes('Up')) {
    return hiddenUp ? null : children;
  }

  return null;
}