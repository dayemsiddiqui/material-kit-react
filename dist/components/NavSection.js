"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NavSection;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.object.assign.js");

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react2 = require("@iconify/react");

var _reactRouterDom = require("react-router-dom");

var _arrowIosForwardFill = _interopRequireDefault(require("@iconify/icons-eva/arrow-ios-forward-fill"));

var _arrowIosDownwardFill = _interopRequireDefault(require("@iconify/icons-eva/arrow-ios-downward-fill"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

const _excluded = ["navConfig"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// ----------------------------------------------------------------------
const ListItemStyle = (0, _styles.styled)(props => /*#__PURE__*/React.createElement(_core.ListItemButton, _extends({
  disableGutters: true
}, props)))(_ref => {
  let {
    theme
  } = _ref;
  return _objectSpread(_objectSpread({}, theme.typography.body2), {}, {
    height: 48,
    position: 'relative',
    textTransform: 'capitalize',
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(2.5),
    color: theme.palette.text.secondary,
    '&:before': {
      top: 0,
      right: 0,
      width: 3,
      bottom: 0,
      content: "''",
      display: 'none',
      position: 'absolute',
      borderTopLeftRadius: 4,
      borderBottomLeftRadius: 4,
      backgroundColor: theme.palette.primary.main
    }
  });
});
const ListItemIconStyle = (0, _styles.styled)(_core.ListItemIcon)({
  width: 22,
  height: 22,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}); // ----------------------------------------------------------------------

NavItem.propTypes = {
  item: _propTypes.default.object,
  active: _propTypes.default.func
};

function NavItem(_ref2) {
  let {
    item,
    active
  } = _ref2;
  const theme = (0, _styles.useTheme)();
  const isActiveRoot = active(item.path);
  const {
    title,
    path,
    icon,
    info,
    children
  } = item;
  const [open, setOpen] = (0, _react.useState)(isActiveRoot);

  const handleOpen = () => {
    setOpen(prev => !prev);
  };

  const activeRootStyle = {
    color: 'primary.main',
    fontWeight: 'fontWeightMedium',
    bgcolor: (0, _styles.alpha)(theme.palette.primary.main, theme.palette.action.selectedOpacity),
    '&:before': {
      display: 'block'
    }
  };
  const activeSubStyle = {
    color: 'text.primary',
    fontWeight: 'fontWeightMedium'
  };

  if (children) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ListItemStyle, {
      onClick: handleOpen,
      sx: _objectSpread({}, isActiveRoot && activeRootStyle)
    }, /*#__PURE__*/React.createElement(ListItemIconStyle, null, icon && icon), /*#__PURE__*/React.createElement(_core.ListItemText, {
      disableTypography: true,
      primary: title
    }), info && info, /*#__PURE__*/React.createElement(_core.Box, {
      component: _react2.Icon,
      icon: open ? _arrowIosDownwardFill.default : _arrowIosForwardFill.default,
      sx: {
        width: 16,
        height: 16,
        ml: 1
      }
    })), /*#__PURE__*/React.createElement(_core.Collapse, {
      in: open,
      timeout: "auto",
      unmountOnExit: true
    }, /*#__PURE__*/React.createElement(_core.List, {
      component: "div",
      disablePadding: true
    }, children.map(item => {
      const {
        title,
        path
      } = item;
      const isActiveSub = active(path);
      return /*#__PURE__*/React.createElement(ListItemStyle, {
        key: title,
        component: _reactRouterDom.NavLink,
        to: path,
        sx: _objectSpread({}, isActiveSub && activeSubStyle)
      }, /*#__PURE__*/React.createElement(ListItemIconStyle, null, /*#__PURE__*/React.createElement(_core.Box, {
        component: "span",
        sx: _objectSpread({
          width: 4,
          height: 4,
          display: 'flex',
          borderRadius: '50%',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'text.disabled',
          transition: theme => theme.transitions.create('transform')
        }, isActiveSub && {
          transform: 'scale(2)',
          bgcolor: 'primary.main'
        })
      })), /*#__PURE__*/React.createElement(_core.ListItemText, {
        disableTypography: true,
        primary: title
      }));
    }))));
  }

  return /*#__PURE__*/React.createElement(ListItemStyle, {
    component: _reactRouterDom.NavLink,
    to: path,
    sx: _objectSpread({}, isActiveRoot && activeRootStyle)
  }, /*#__PURE__*/React.createElement(ListItemIconStyle, null, icon && icon), /*#__PURE__*/React.createElement(_core.ListItemText, {
    disableTypography: true,
    primary: title
  }), info && info);
}

NavSection.propTypes = {
  navConfig: _propTypes.default.array
};

function NavSection(_ref3) {
  let {
    navConfig
  } = _ref3,
      other = _objectWithoutProperties(_ref3, _excluded);

  const {
    pathname
  } = (0, _reactRouterDom.useLocation)();

  const match = path => path ? !!(0, _reactRouterDom.matchPath)({
    path,
    end: false
  }, pathname) : false;

  return /*#__PURE__*/React.createElement(_core.Box, other, /*#__PURE__*/React.createElement(_core.List, {
    disablePadding: true
  }, navConfig.map(item => /*#__PURE__*/React.createElement(NavItem, {
    key: item.title,
    item: item,
    active: match
  }))));
}