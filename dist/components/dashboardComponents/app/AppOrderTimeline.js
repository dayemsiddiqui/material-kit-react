"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AppOrderTimeline;

var _faker = _interopRequireDefault(require("faker"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _lab = require("@material-ui/lab");

var _formatTime = require("../../../utils/formatTime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// material
// utils
// ----------------------------------------------------------------------
const TIMELINES = [{
  title: '1983, orders, $4220',
  time: _faker.default.date.past(),
  type: 'order1'
}, {
  title: '12 Invoices have been paid',
  time: _faker.default.date.past(),
  type: 'order2'
}, {
  title: 'Order #37745 from September',
  time: _faker.default.date.past(),
  type: 'order3'
}, {
  title: 'New order placed #XF-2356',
  time: _faker.default.date.past(),
  type: 'order4'
}, {
  title: 'New order placed #XF-2346',
  time: _faker.default.date.past(),
  type: 'order5'
}]; // ----------------------------------------------------------------------

OrderItem.propTypes = {
  item: _propTypes.default.object,
  isLast: _propTypes.default.bool
};

function OrderItem(_ref) {
  let {
    item,
    isLast
  } = _ref;
  const {
    type,
    title,
    time
  } = item;
  return /*#__PURE__*/React.createElement(_lab.TimelineItem, null, /*#__PURE__*/React.createElement(_lab.TimelineSeparator, null, /*#__PURE__*/React.createElement(_lab.TimelineDot, {
    sx: {
      bgcolor: type === 'order1' && 'primary.main' || type === 'order2' && 'success.main' || type === 'order3' && 'info.main' || type === 'order4' && 'warning.main' || 'error.main'
    }
  }), isLast ? null : /*#__PURE__*/React.createElement(_lab.TimelineConnector, null)), /*#__PURE__*/React.createElement(_lab.TimelineContent, null, /*#__PURE__*/React.createElement(_core.Typography, {
    variant: "subtitle2"
  }, title), /*#__PURE__*/React.createElement(_core.Typography, {
    variant: "caption",
    sx: {
      color: 'text.secondary'
    }
  }, (0, _formatTime.fDateTime)(time))));
}

function AppOrderTimeline() {
  return /*#__PURE__*/React.createElement(_core.Card, {
    sx: {
      '& .MuiTimelineItem-missingOppositeContent:before': {
        display: 'none'
      }
    }
  }, /*#__PURE__*/React.createElement(_core.CardHeader, {
    title: "Order Timeline"
  }), /*#__PURE__*/React.createElement(_core.CardContent, null, /*#__PURE__*/React.createElement(_lab.Timeline, null, TIMELINES.map((item, index) => /*#__PURE__*/React.createElement(OrderItem, {
    key: item.title,
    item: item,
    isLast: index === TIMELINES.length - 1
  })))));
}