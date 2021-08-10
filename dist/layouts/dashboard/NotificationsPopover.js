"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NotificationsPopover;

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/web.dom-collections.iterator.js");

var _faker = _interopRequireDefault(require("faker"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _changeCase = require("change-case");

var _react = require("react");

var _reactRouterDom = require("react-router-dom");

var _dateFns = require("date-fns");

var _react2 = require("@iconify/react");

var _bellFill = _interopRequireDefault(require("@iconify/icons-eva/bell-fill"));

var _clockFill = _interopRequireDefault(require("@iconify/icons-eva/clock-fill"));

var _doneAllFill = _interopRequireDefault(require("@iconify/icons-eva/done-all-fill"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _mockImages = require("../../utils/mockImages");

var _Scrollbar = _interopRequireDefault(require("../../components/Scrollbar"));

var _MenuPopover = _interopRequireDefault(require("../../components/MenuPopover"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// ----------------------------------------------------------------------
const NOTIFICATIONS = [{
  id: _faker.default.datatype.uuid(),
  title: 'Your order is placed',
  description: 'waiting for shipping',
  avatar: null,
  type: 'order_placed',
  createdAt: (0, _dateFns.set)(new Date(), {
    hours: 10,
    minutes: 30
  }),
  isUnRead: true
}, {
  id: _faker.default.datatype.uuid(),
  title: _faker.default.name.findName(),
  description: 'answered to your comment on the Minimal',
  avatar: (0, _mockImages.mockImgAvatar)(2),
  type: 'friend_interactive',
  createdAt: (0, _dateFns.sub)(new Date(), {
    hours: 3,
    minutes: 30
  }),
  isUnRead: true
}, {
  id: _faker.default.datatype.uuid(),
  title: 'You have new message',
  description: '5 unread messages',
  avatar: null,
  type: 'chat_message',
  createdAt: (0, _dateFns.sub)(new Date(), {
    days: 1,
    hours: 3,
    minutes: 30
  }),
  isUnRead: false
}, {
  id: _faker.default.datatype.uuid(),
  title: 'You have new mail',
  description: 'sent from Guido Padberg',
  avatar: null,
  type: 'mail',
  createdAt: (0, _dateFns.sub)(new Date(), {
    days: 2,
    hours: 3,
    minutes: 30
  }),
  isUnRead: false
}, {
  id: _faker.default.datatype.uuid(),
  title: 'Delivery processing',
  description: 'Your order is being shipped',
  avatar: null,
  type: 'order_shipped',
  createdAt: (0, _dateFns.sub)(new Date(), {
    days: 3,
    hours: 3,
    minutes: 30
  }),
  isUnRead: false
}];

function renderContent(notification) {
  const title = /*#__PURE__*/React.createElement(_core.Typography, {
    variant: "subtitle2"
  }, notification.title, /*#__PURE__*/React.createElement(_core.Typography, {
    component: "span",
    variant: "body2",
    sx: {
      color: 'text.secondary'
    }
  }, "\xA0 ", (0, _changeCase.noCase)(notification.description)));

  if (notification.type === 'order_placed') {
    return {
      avatar: /*#__PURE__*/React.createElement("img", {
        alt: notification.title,
        src: "/static/icons/ic_notification_package.svg"
      }),
      title
    };
  }

  if (notification.type === 'order_shipped') {
    return {
      avatar: /*#__PURE__*/React.createElement("img", {
        alt: notification.title,
        src: "/static/icons/ic_notification_shipping.svg"
      }),
      title
    };
  }

  if (notification.type === 'mail') {
    return {
      avatar: /*#__PURE__*/React.createElement("img", {
        alt: notification.title,
        src: "/static/icons/ic_notification_mail.svg"
      }),
      title
    };
  }

  if (notification.type === 'chat_message') {
    return {
      avatar: /*#__PURE__*/React.createElement("img", {
        alt: notification.title,
        src: "/static/icons/ic_notification_chat.svg"
      }),
      title
    };
  }

  return {
    avatar: /*#__PURE__*/React.createElement("img", {
      alt: notification.title,
      src: notification.avatar
    }),
    title
  };
}

NotificationItem.propTypes = {
  notification: _propTypes.default.object.isRequired
};

function NotificationItem(_ref) {
  let {
    notification
  } = _ref;
  const {
    avatar,
    title
  } = renderContent(notification);
  return /*#__PURE__*/React.createElement(_core.ListItemButton, {
    to: "#",
    disableGutters: true,
    component: _reactRouterDom.Link,
    sx: _objectSpread({
      py: 1.5,
      px: 2.5,
      mt: '1px'
    }, notification.isUnRead && {
      bgcolor: 'action.selected'
    })
  }, /*#__PURE__*/React.createElement(_core.ListItemAvatar, null, /*#__PURE__*/React.createElement(_core.Avatar, {
    sx: {
      bgcolor: 'background.neutral'
    }
  }, avatar)), /*#__PURE__*/React.createElement(_core.ListItemText, {
    primary: title,
    secondary: /*#__PURE__*/React.createElement(_core.Typography, {
      variant: "caption",
      sx: {
        mt: 0.5,
        display: 'flex',
        alignItems: 'center',
        color: 'text.disabled'
      }
    }, /*#__PURE__*/React.createElement(_core.Box, {
      component: _react2.Icon,
      icon: _clockFill.default,
      sx: {
        mr: 0.5,
        width: 16,
        height: 16
      }
    }), (0, _dateFns.formatDistanceToNow)(new Date(notification.createdAt)))
  }));
}

function NotificationsPopover() {
  const anchorRef = (0, _react.useRef)(null);
  const [open, setOpen] = (0, _react.useState)(false);
  const [notifications, setNotifications] = (0, _react.useState)(NOTIFICATIONS);
  const totalUnRead = notifications.filter(item => item.isUnRead === true).length;

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMarkAllAsRead = () => {
    setNotifications(notifications.map(notification => _objectSpread(_objectSpread({}, notification), {}, {
      isUnRead: false
    })));
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_core.IconButton, {
    ref: anchorRef,
    size: "large",
    color: open ? 'primary' : 'default',
    onClick: handleOpen,
    sx: _objectSpread({}, open && {
      bgcolor: theme => (0, _styles.alpha)(theme.palette.primary.main, theme.palette.action.focusOpacity)
    })
  }, /*#__PURE__*/React.createElement(_core.Badge, {
    badgeContent: totalUnRead,
    color: "error"
  }, /*#__PURE__*/React.createElement(_react2.Icon, {
    icon: _bellFill.default,
    width: 20,
    height: 20
  }))), /*#__PURE__*/React.createElement(_MenuPopover.default, {
    open: open,
    onClose: handleClose,
    anchorEl: anchorRef.current,
    sx: {
      width: 360
    }
  }, /*#__PURE__*/React.createElement(_core.Box, {
    sx: {
      display: 'flex',
      alignItems: 'center',
      py: 2,
      px: 2.5
    }
  }, /*#__PURE__*/React.createElement(_core.Box, {
    sx: {
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement(_core.Typography, {
    variant: "subtitle1"
  }, "Notifications"), /*#__PURE__*/React.createElement(_core.Typography, {
    variant: "body2",
    sx: {
      color: 'text.secondary'
    }
  }, "You have ", totalUnRead, " unread messages")), totalUnRead > 0 && /*#__PURE__*/React.createElement(_core.Tooltip, {
    title: " Mark all as read"
  }, /*#__PURE__*/React.createElement(_core.IconButton, {
    color: "primary",
    onClick: handleMarkAllAsRead
  }, /*#__PURE__*/React.createElement(_react2.Icon, {
    icon: _doneAllFill.default,
    width: 20,
    height: 20
  })))), /*#__PURE__*/React.createElement(_core.Divider, null), /*#__PURE__*/React.createElement(_Scrollbar.default, {
    sx: {
      height: {
        xs: 340,
        sm: 'auto'
      }
    }
  }, /*#__PURE__*/React.createElement(_core.List, {
    disablePadding: true,
    subheader: /*#__PURE__*/React.createElement(_core.ListSubheader, {
      disableSticky: true,
      sx: {
        py: 1,
        px: 2.5,
        typography: 'overline'
      }
    }, "New")
  }, notifications.slice(0, 2).map(notification => /*#__PURE__*/React.createElement(NotificationItem, {
    key: notification.id,
    notification: notification
  }))), /*#__PURE__*/React.createElement(_core.List, {
    disablePadding: true,
    subheader: /*#__PURE__*/React.createElement(_core.ListSubheader, {
      disableSticky: true,
      sx: {
        py: 1,
        px: 2.5,
        typography: 'overline'
      }
    }, "Before that")
  }, notifications.slice(2, 5).map(notification => /*#__PURE__*/React.createElement(NotificationItem, {
    key: notification.id,
    notification: notification
  })))), /*#__PURE__*/React.createElement(_core.Divider, null), /*#__PURE__*/React.createElement(_core.Box, {
    sx: {
      p: 1
    }
  }, /*#__PURE__*/React.createElement(_core.Button, {
    fullWidth: true,
    disableRipple: true,
    component: _reactRouterDom.Link,
    to: "#"
  }, "View All"))));
}