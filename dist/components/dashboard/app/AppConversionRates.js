"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AppConversionRates;

var _lodash = require("lodash");

var _reactApexcharts = _interopRequireDefault(require("react-apexcharts"));

var _core = require("@material-ui/core");

var _formatNumber = require("../../../utils/formatNumber");

var _charts = require("../../charts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// material
// utils
//
// ----------------------------------------------------------------------
const CHART_DATA = [{
  data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
}];

function AppConversionRates() {
  const chartOptions = (0, _lodash.merge)((0, _charts.BaseOptionChart)(), {
    tooltip: {
      marker: {
        show: false
      },
      y: {
        formatter: seriesName => (0, _formatNumber.fNumber)(seriesName),
        title: {
          formatter: seriesName => "#".concat(seriesName)
        }
      }
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '28%',
        borderRadius: 2
      }
    },
    xaxis: {
      categories: ['Italy', 'Japan', 'China', 'Canada', 'France', 'Germany', 'South Korea', 'Netherlands', 'United States', 'United Kingdom']
    }
  });
  return /*#__PURE__*/React.createElement(_core.Card, null, /*#__PURE__*/React.createElement(_core.CardHeader, {
    title: "Conversion Rates",
    subheader: "(+43%) than last year"
  }), /*#__PURE__*/React.createElement(_core.Box, {
    sx: {
      mx: 3
    },
    dir: "ltr"
  }, /*#__PURE__*/React.createElement(_reactApexcharts.default, {
    type: "bar",
    series: CHART_DATA,
    options: chartOptions,
    height: 364
  })));
}