"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DashboardSidebar;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = require("react");

var _reactRouterDom = require("react-router-dom");

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _Logo = _interopRequireDefault(require("../../components/Logo"));

var _Scrollbar = _interopRequireDefault(require("../../components/Scrollbar"));

var _NavSection = _interopRequireDefault(require("../../components/NavSection"));

var _materialExtend = require("../../components/@material-extend");

var _SidebarConfig = _interopRequireDefault(require("./SidebarConfig"));

var _account = _interopRequireDefault(require("../../_mocks_/account"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// material
// components
//
// ----------------------------------------------------------------------
const DRAWER_WIDTH = 280;
const RootStyle = (0, _styles.styled)('div')(_ref => {
  let {
    theme
  } = _ref;
  return {
    [theme.breakpoints.up('lg')]: {
      flexShrink: 0,
      width: DRAWER_WIDTH
    }
  };
});
const AccountStyle = (0, _styles.styled)('div')(_ref2 => {
  let {
    theme
  } = _ref2;
  return {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(2, 2.5),
    borderRadius: theme.shape.borderRadiusSm,
    backgroundColor: theme.palette.grey[200]
  };
}); // ----------------------------------------------------------------------

DashboardSidebar.propTypes = {
  isOpenSidebar: _propTypes.default.bool,
  onCloseSidebar: _propTypes.default.func
};

function DashboardSidebar(_ref3) {
  let {
    isOpenSidebar,
    onCloseSidebar
  } = _ref3;
  const {
    pathname
  } = (0, _reactRouterDom.useLocation)();
  (0, _react.useEffect)(() => {
    if (isOpenSidebar) {
      onCloseSidebar();
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [pathname]);
  const renderContent = /*#__PURE__*/React.createElement(_Scrollbar.default, {
    sx: {
      height: '100%',
      '& .simplebar-content': {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }
    }
  }, /*#__PURE__*/React.createElement(_core.Box, {
    sx: {
      px: 2.5,
      py: 3
    }
  }, /*#__PURE__*/React.createElement(_core.Box, {
    component: _reactRouterDom.Link,
    to: "/",
    sx: {
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(_Logo.default, null))), /*#__PURE__*/React.createElement(_core.Box, {
    sx: {
      mb: 5,
      mx: 2.5
    }
  }, /*#__PURE__*/React.createElement(_core.Link, {
    underline: "none",
    component: _reactRouterDom.Link,
    to: "#"
  }, /*#__PURE__*/React.createElement(AccountStyle, null, /*#__PURE__*/React.createElement(_core.Avatar, {
    src: _account.default.photoURL,
    alt: "photoURL"
  }), /*#__PURE__*/React.createElement(_core.Box, {
    sx: {
      ml: 2
    }
  }, /*#__PURE__*/React.createElement(_core.Typography, {
    variant: "subtitle2",
    sx: {
      color: 'text.primary'
    }
  }, _account.default.displayName), /*#__PURE__*/React.createElement(_core.Typography, {
    variant: "body2",
    sx: {
      color: 'text.secondary'
    }
  }, _account.default.role))))), /*#__PURE__*/React.createElement(_NavSection.default, {
    navConfig: _SidebarConfig.default
  }), /*#__PURE__*/React.createElement(_core.Box, {
    sx: {
      flexGrow: 1
    }
  }), /*#__PURE__*/React.createElement(_core.Box, {
    sx: {
      px: 2.5,
      pb: 3,
      mt: 10
    }
  }, /*#__PURE__*/React.createElement(_core.Stack, {
    alignItems: "center",
    spacing: 3,
    sx: {
      p: 2.5,
      pt: 5,
      borderRadius: 2,
      position: 'relative',
      bgcolor: 'grey.200'
    }
  }, /*#__PURE__*/React.createElement(_core.Box, {
    component: "img",
    src: "/static/illustrations/illustration_avatar.png",
    sx: {
      width: 100,
      position: 'absolute',
      top: -50
    }
  }), /*#__PURE__*/React.createElement(_core.Box, {
    sx: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(_core.Typography, {
    gutterBottom: true,
    variant: "h6"
  }, "Get more?"), /*#__PURE__*/React.createElement(_core.Typography, {
    variant: "body2",
    sx: {
      color: 'text.secondary'
    }
  }, "From only $69")), /*#__PURE__*/React.createElement(_core.Button, {
    fullWidth: true,
    href: "https://material-ui.com/store/items/minimal-dashboard/",
    target: "_blank",
    variant: "contained"
  }, "Upgrade to Pro"))));
  return /*#__PURE__*/React.createElement(RootStyle, null, /*#__PURE__*/React.createElement(_materialExtend.MHidden, {
    width: "lgUp"
  }, /*#__PURE__*/React.createElement(_core.Drawer, {
    open: isOpenSidebar,
    onClose: onCloseSidebar,
    PaperProps: {
      sx: {
        width: DRAWER_WIDTH
      }
    }
  }, renderContent)), /*#__PURE__*/React.createElement(_materialExtend.MHidden, {
    width: "lgDown"
  }, /*#__PURE__*/React.createElement(_core.Drawer, {
    open: true,
    variant: "persistent",
    PaperProps: {
      sx: {
        width: DRAWER_WIDTH,
        bgcolor: 'background.default'
      }
    }
  }, renderContent)));
}