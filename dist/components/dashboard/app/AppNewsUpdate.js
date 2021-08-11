"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AppNewsUpdate;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.symbol.description.js");

var _faker = _interopRequireDefault(require("faker"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = require("@iconify/react");

var _dateFns = require("date-fns");

var _reactRouterDom = require("react-router-dom");

var _arrowIosForwardFill = _interopRequireDefault(require("@iconify/icons-eva/arrow-ios-forward-fill"));

var _core = require("@material-ui/core");

var _mockImages = require("../../../utils/mockImages");

var _Scrollbar = _interopRequireDefault(require("../../Scrollbar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// material
// utils
//
// ----------------------------------------------------------------------
const NEWS = [...Array(5)].map((_, index) => {
  const setIndex = index + 1;
  return {
    title: _faker.default.name.title(),
    description: _faker.default.lorem.paragraphs(),
    image: (0, _mockImages.mockImgCover)(setIndex),
    postedAt: _faker.default.date.soon()
  };
}); // ----------------------------------------------------------------------

NewsItem.propTypes = {
  news: _propTypes.default.object.isRequired
};

function NewsItem(_ref) {
  let {
    news
  } = _ref;
  const {
    image,
    title,
    description,
    postedAt
  } = news;
  return /*#__PURE__*/React.createElement(_core.Stack, {
    direction: "row",
    alignItems: "center",
    spacing: 2
  }, /*#__PURE__*/React.createElement(_core.Box, {
    component: "img",
    alt: title,
    src: image,
    sx: {
      width: 48,
      height: 48,
      borderRadius: 1.5
    }
  }), /*#__PURE__*/React.createElement(_core.Box, {
    sx: {
      minWidth: 240
    }
  }, /*#__PURE__*/React.createElement(_core.Link, {
    to: "#",
    color: "inherit",
    underline: "hover",
    component: _reactRouterDom.Link
  }, /*#__PURE__*/React.createElement(_core.Typography, {
    variant: "subtitle2",
    noWrap: true
  }, title)), /*#__PURE__*/React.createElement(_core.Typography, {
    variant: "body2",
    sx: {
      color: 'text.secondary'
    },
    noWrap: true
  }, description)), /*#__PURE__*/React.createElement(_core.Typography, {
    variant: "caption",
    sx: {
      pr: 3,
      flexShrink: 0,
      color: 'text.secondary'
    }
  }, (0, _dateFns.formatDistance)(postedAt, new Date())));
}

function AppNewsUpdate() {
  return /*#__PURE__*/React.createElement(_core.Card, null, /*#__PURE__*/React.createElement(_core.CardHeader, {
    title: "News Update"
  }), /*#__PURE__*/React.createElement(_Scrollbar.default, null, /*#__PURE__*/React.createElement(_core.Stack, {
    spacing: 3,
    sx: {
      p: 3,
      pr: 0
    }
  }, NEWS.map(news => /*#__PURE__*/React.createElement(NewsItem, {
    key: news.title,
    news: news
  })))), /*#__PURE__*/React.createElement(_core.Divider, null), /*#__PURE__*/React.createElement(_core.Box, {
    sx: {
      p: 2,
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement(_core.Button, {
    to: "#",
    size: "small",
    color: "inherit",
    component: _reactRouterDom.Link,
    endIcon: /*#__PURE__*/React.createElement(_react.Icon, {
      icon: _arrowIosForwardFill.default
    })
  }, "View all")));
}