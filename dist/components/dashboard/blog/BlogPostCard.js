"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = BlogPostCard;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = require("@iconify/react");

var _eyeFill = _interopRequireDefault(require("@iconify/icons-eva/eye-fill"));

var _reactRouterDom = require("react-router-dom");

var _shareFill = _interopRequireDefault(require("@iconify/icons-eva/share-fill"));

var _messageCircleFill = _interopRequireDefault(require("@iconify/icons-eva/message-circle-fill"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _formatTime = require("../../../utils/formatTime");

var _formatNumber = require("../../../utils/formatNumber");

var _SvgIconStyle = _interopRequireDefault(require("../../SvgIconStyle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// ----------------------------------------------------------------------
const CardMediaStyle = (0, _styles.styled)('div')({
  position: 'relative',
  paddingTop: 'calc(100% * 3 / 4)'
});
const TitleStyle = (0, _styles.styled)(_core.Link)({
  height: 44,
  overflow: 'hidden',
  WebkitLineClamp: 2,
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical'
});
const AvatarStyle = (0, _styles.styled)(_core.Avatar)(_ref => {
  let {
    theme
  } = _ref;
  return {
    zIndex: 9,
    width: 32,
    height: 32,
    position: 'absolute',
    left: theme.spacing(3),
    bottom: theme.spacing(-2)
  };
});
const InfoStyle = (0, _styles.styled)('div')(_ref2 => {
  let {
    theme
  } = _ref2;
  return {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    marginTop: theme.spacing(3),
    color: theme.palette.text.disabled
  };
});
const CoverImgStyle = (0, _styles.styled)('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute'
}); // ----------------------------------------------------------------------

BlogPostCard.propTypes = {
  post: _propTypes.default.object.isRequired,
  index: _propTypes.default.number
};

function BlogPostCard(_ref3) {
  let {
    post,
    index
  } = _ref3;
  const {
    cover,
    title,
    view,
    comment,
    share,
    author,
    createdAt
  } = post;
  const latestPostLarge = index === 0;
  const latestPost = index === 1 || index === 2;
  const POST_INFO = [{
    number: comment,
    icon: _messageCircleFill.default
  }, {
    number: view,
    icon: _eyeFill.default
  }, {
    number: share,
    icon: _shareFill.default
  }];
  return /*#__PURE__*/React.createElement(_core.Grid, {
    item: true,
    xs: 12,
    sm: latestPostLarge ? 12 : 6,
    md: latestPostLarge ? 6 : 3
  }, /*#__PURE__*/React.createElement(_core.Card, {
    sx: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(CardMediaStyle, {
    sx: _objectSpread(_objectSpread({}, (latestPostLarge || latestPost) && {
      pt: 'calc(100% * 4 / 3)',
      '&:after': {
        top: 0,
        content: "''",
        width: '100%',
        height: '100%',
        position: 'absolute',
        bgcolor: theme => (0, _styles.alpha)(theme.palette.grey[900], 0.72)
      }
    }), latestPostLarge && {
      pt: {
        xs: 'calc(100% * 4 / 3)',
        sm: 'calc(100% * 3 / 4.66)'
      }
    })
  }, /*#__PURE__*/React.createElement(_SvgIconStyle.default, {
    color: "paper",
    src: "/static/icons/shape-avatar.svg",
    sx: _objectSpread({
      width: 80,
      height: 36,
      zIndex: 9,
      bottom: -15,
      position: 'absolute'
    }, (latestPostLarge || latestPost) && {
      display: 'none'
    })
  }), /*#__PURE__*/React.createElement(AvatarStyle, {
    alt: author.name,
    src: author.avatarUrl,
    sx: _objectSpread({}, (latestPostLarge || latestPost) && {
      zIndex: 9,
      top: 24,
      left: 24,
      width: 40,
      height: 40
    })
  }), /*#__PURE__*/React.createElement(CoverImgStyle, {
    alt: title,
    src: cover
  })), /*#__PURE__*/React.createElement(_core.CardContent, {
    sx: _objectSpread({
      pt: 4
    }, (latestPostLarge || latestPost) && {
      bottom: 0,
      width: '100%',
      position: 'absolute'
    })
  }, /*#__PURE__*/React.createElement(_core.Typography, {
    gutterBottom: true,
    variant: "caption",
    sx: {
      color: 'text.disabled',
      display: 'block'
    }
  }, (0, _formatTime.fDate)(createdAt)), /*#__PURE__*/React.createElement(TitleStyle, {
    to: "#",
    color: "inherit",
    variant: "subtitle2",
    underline: "hover",
    component: _reactRouterDom.Link,
    sx: _objectSpread(_objectSpread({}, latestPostLarge && {
      typography: 'h5',
      height: 60
    }), (latestPostLarge || latestPost) && {
      color: 'common.white'
    })
  }, title), /*#__PURE__*/React.createElement(InfoStyle, null, POST_INFO.map((info, index) => /*#__PURE__*/React.createElement(_core.Box, {
    key: index,
    sx: _objectSpread({
      display: 'flex',
      alignItems: 'center',
      ml: index === 0 ? 0 : 1.5
    }, (latestPostLarge || latestPost) && {
      color: 'grey.500'
    })
  }, /*#__PURE__*/React.createElement(_core.Box, {
    component: _react.Icon,
    icon: info.icon,
    sx: {
      width: 16,
      height: 16,
      mr: 0.5
    }
  }), /*#__PURE__*/React.createElement(_core.Typography, {
    variant: "caption"
  }, (0, _formatNumber.fShortenNumber)(info.number))))))));
}