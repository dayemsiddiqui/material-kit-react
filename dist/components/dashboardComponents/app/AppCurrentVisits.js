"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AppCurrentVisits;

var _lodash = require("lodash");

var _reactApexcharts = _interopRequireDefault(require("react-apexcharts"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _formatNumber = require("../../../utils/formatNumber");

var _charts = require("../../charts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// material
// utils
//
// ----------------------------------------------------------------------
const CHART_HEIGHT = 372;
const LEGEND_HEIGHT = 72;
const ChartWrapperStyle = (0, _styles.styled)('div')(_ref => {
  let {
    theme
  } = _ref;
  return {
    height: CHART_HEIGHT,
    marginTop: theme.spacing(5),
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

const CHART_DATA = [4344, 5435, 1443, 4443];

function AppCurrentVisits() {
  const theme = (0, _styles.useTheme)();
  const chartOptions = (0, _lodash.merge)((0, _charts.BaseOptionChart)(), {
    colors: [theme.palette.primary.main, theme.palette.info.main, theme.palette.warning.main, theme.palette.error.main],
    labels: ['America', 'Asia', 'Europe', 'Africa'],
    stroke: {
      colors: [theme.palette.background.paper]
    },
    legend: {
      floating: true,
      horizontalAlign: 'center'
    },
    dataLabels: {
      enabled: true,
      dropShadow: {
        enabled: false
      }
    },
    tooltip: {
      fillSeriesColor: false,
      y: {
        formatter: seriesName => (0, _formatNumber.fNumber)(seriesName),
        title: {
          formatter: seriesName => "#".concat(seriesName)
        }
      }
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: false
          }
        }
      }
    }
  });
  return /*#__PURE__*/React.createElement(_core.Card, null, /*#__PURE__*/React.createElement(_core.CardHeader, {
    title: "Current Visits"
  }), /*#__PURE__*/React.createElement(ChartWrapperStyle, {
    dir: "ltr"
  }, /*#__PURE__*/React.createElement(_reactApexcharts.default, {
    type: "pie",
    series: CHART_DATA,
    options: chartOptions,
    height: 280
  })));
}