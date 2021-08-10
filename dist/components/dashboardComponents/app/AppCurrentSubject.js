"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AppCurrentSubject;

var _lodash = require("lodash");

var _reactApexcharts = _interopRequireDefault(require("react-apexcharts"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _charts = require("../../charts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// material
//
// ----------------------------------------------------------------------
const CHART_HEIGHT = 392;
const LEGEND_HEIGHT = 72;
const ChartWrapperStyle = (0, _styles.styled)('div')(_ref => {
  let {
    theme
  } = _ref;
  return {
    height: CHART_HEIGHT,
    marginTop: theme.spacing(2),
    '& .apexcharts-canvas svg': {
      height: CHART_HEIGHT
    },
    '& .apexcharts-canvas svg,.apexcharts-canvas foreignObject': {
      overflow: 'visible'
    },
    '& .apexcharts-legend': {
      height: LEGEND_HEIGHT,
      alignContent: 'center',
      position: 'relative !important',
      borderTop: "solid 1px ".concat(theme.palette.divider),
      top: "calc(".concat(CHART_HEIGHT - LEGEND_HEIGHT, "px) !important")
    }
  };
}); // ----------------------------------------------------------------------

const CHART_DATA = [{
  name: 'Series 1',
  data: [80, 50, 30, 40, 100, 20]
}, {
  name: 'Series 2',
  data: [20, 30, 40, 80, 20, 80]
}, {
  name: 'Series 3',
  data: [44, 76, 78, 13, 43, 10]
}];

function AppCurrentSubject() {
  const theme = (0, _styles.useTheme)();
  const chartOptions = (0, _lodash.merge)((0, _charts.BaseOptionChart)(), {
    stroke: {
      width: 2
    },
    fill: {
      opacity: 0.48
    },
    legend: {
      floating: true,
      horizontalAlign: 'center'
    },
    xaxis: {
      categories: ['English', 'History', 'Physics', 'Geography', 'Chinese', 'Math'],
      labels: {
        style: {
          colors: [theme.palette.text.secondary, theme.palette.text.secondary, theme.palette.text.secondary, theme.palette.text.secondary, theme.palette.text.secondary, theme.palette.text.secondary]
        }
      }
    }
  });
  return /*#__PURE__*/React.createElement(_core.Card, null, /*#__PURE__*/React.createElement(_core.CardHeader, {
    title: "Current Subject"
  }), /*#__PURE__*/React.createElement(ChartWrapperStyle, {
    dir: "ltr"
  }, /*#__PURE__*/React.createElement(_reactApexcharts.default, {
    type: "radar",
    series: CHART_DATA,
    options: chartOptions,
    height: 340
  })));
}