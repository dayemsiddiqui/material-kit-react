"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = UserMoreMenu;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = require("@iconify/react");

var _react2 = require("react");

var _editFill = _interopRequireDefault(require("@iconify/icons-eva/edit-fill"));

var _reactRouterDom = require("react-router-dom");

var _trash2Outline = _interopRequireDefault(require("@iconify/icons-eva/trash-2-outline"));

var _moreVerticalFill = _interopRequireDefault(require("@iconify/icons-eva/more-vertical-fill"));

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// material
// ----------------------------------------------------------------------
function UserMoreMenu() {
  const ref = (0, _react2.useRef)(null);
  const [isOpen, setIsOpen] = (0, _react2.useState)(false);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_core.IconButton, {
    ref: ref,
    onClick: () => setIsOpen(true)
  }, /*#__PURE__*/React.createElement(_react.Icon, {
    icon: _moreVerticalFill.default,
    width: 20,
    height: 20
  })), /*#__PURE__*/React.createElement(_core.Menu, {
    open: isOpen,
    anchorEl: ref.current,
    onClose: () => setIsOpen(false),
    PaperProps: {
      sx: {
        width: 200,
        maxWidth: '100%'
      }
    },
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'right'
    }
  }, /*#__PURE__*/React.createElement(_core.MenuItem, {
    sx: {
      color: 'text.secondary'
    }
  }, /*#__PURE__*/React.createElement(_core.ListItemIcon, null, /*#__PURE__*/React.createElement(_react.Icon, {
    icon: _trash2Outline.default,
    width: 24,
    height: 24
  })), /*#__PURE__*/React.createElement(_core.ListItemText, {
    primary: "Delete",
    primaryTypographyProps: {
      variant: 'body2'
    }
  })), /*#__PURE__*/React.createElement(_core.MenuItem, {
    component: _reactRouterDom.Link,
    to: "#",
    sx: {
      color: 'text.secondary'
    }
  }, /*#__PURE__*/React.createElement(_core.ListItemIcon, null, /*#__PURE__*/React.createElement(_react.Icon, {
    icon: _editFill.default,
    width: 24,
    height: 24
  })), /*#__PURE__*/React.createElement(_core.ListItemText, {
    primary: "Edit",
    primaryTypographyProps: {
      variant: 'body2'
    }
  }))));
}