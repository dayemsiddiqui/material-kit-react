"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AppWebsiteVisits;

require("core-js/modules/es.number.to-fixed.js");

var _lodash = require("lodash");

var _reactApexcharts = _interopRequireDefault(require("react-apexcharts"));

var _core = require("@material-ui/core");

var _charts = require("../../charts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// material
//
// ----------------------------------------------------------------------
const CHART_DATA = [{
  name: 'Team A',
  type: 'column',
  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
}, {
  name: 'Team B',
  type: 'area',
  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
}, {
  name: 'Team C',
  type: 'line',
  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
}];

function AppWebsiteVisits() {
  const chartOptions = (0, _lodash.merge)((0, _charts.BaseOptionChart)(), {
    stroke: {
      width: [0, 2, 3]
    },
    plotOptions: {
      bar: {
        columnWidth: '11%',
        borderRadius: 4
      }
    },
    fill: {
      type: ['solid', 'gradient', 'solid']
    },
    labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003', '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'],
    xaxis: {
      type: 'datetime'
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: y => {
          if (typeof y !== 'undefined') {
            return "".concat(y.toFixed(0), " visits");
          }

          return y;
        }
      }
    }
  });
  return /*#__PURE__*/React.createElement(_core.Card, null, /*#__PURE__*/React.createElement(_core.CardHeader, {
    title: "Website Visits",
    subheader: "(+43%) than last year"
  }), /*#__PURE__*/React.createElement(_core.Box, {
    sx: {
      p: 3,
      pb: 1
    },
    dir: "ltr"
  }, /*#__PURE__*/React.createElement(_reactApexcharts.default, {
    type: "line",
    series: CHART_DATA,
    options: chartOptions,
    height: 364
  })));
}