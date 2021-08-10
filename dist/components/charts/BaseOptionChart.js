"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = BaseOptionChart;

var _styles = require("@material-ui/styles");

var _styles2 = require("@material-ui/core/styles");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// ----------------------------------------------------------------------
const useStyles = (0, _styles.makeStyles)(theme => (0, _styles.createStyles)({
  '@global': {
    // Tooltip
    '.apexcharts-tooltip,.apexcharts-xaxistooltip': {
      border: '0 !important',
      boxShadow: "".concat(theme.customShadows.z24, " !important"),
      color: "".concat(theme.palette.text.primary, " !important"),
      borderRadius: "".concat(theme.shape.borderRadiusSm, "px !important"),
      backgroundColor: "".concat(theme.palette.background.default, " !important")
    },
    '.apexcharts-tooltip-title': {
      border: '0 !important',
      fontWeight: theme.typography.fontWeightBold,
      backgroundColor: "".concat(theme.palette.grey[50016], " !important"),
      color: theme.palette.text.secondary
    },
    '.apexcharts-xaxistooltip-bottom': {
      '&:before': {
        borderBottomColor: 'transparent !important'
      },
      '&:after': {
        borderBottomColor: "".concat(theme.palette.background.paper, " !important")
      }
    },
    // Legend
    '.apexcharts-legend': {
      padding: '0 !important'
    },
    '.apexcharts-legend-series': {
      alignItems: 'center',
      display: 'flex !important'
    },
    '.apexcharts-legend-marker': {
      marginTop: '-2px !important',
      marginRight: '8px !important'
    },
    '.apexcharts-legend-text': {
      lineHeight: '18px',
      textTransform: 'capitalize'
    }
  }
}));

function BaseOptionChart() {
  useStyles();
  const theme = (0, _styles2.useTheme)();

  const LABEL_TOTAL = _objectSpread({
    show: true,
    label: 'Total',
    color: theme.palette.text.secondary
  }, theme.typography.subtitle2);

  const LABEL_VALUE = _objectSpread({
    offsetY: 8,
    color: theme.palette.text.primary
  }, theme.typography.h3);

  return {
    // Colors
    colors: [theme.palette.primary.main, theme.palette.warning.main, theme.palette.info.main, theme.palette.error.main, theme.palette.success.main],
    // Chart
    chart: {
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      },
      // animations: { enabled: false },
      foreColor: theme.palette.text.disabled,
      fontFamily: theme.typography.fontFamily
    },
    // States
    states: {
      hover: {
        filter: {
          type: 'lighten',
          value: 0.04
        }
      },
      active: {
        filter: {
          type: 'darken',
          value: 0.88
        }
      }
    },
    // Fill
    fill: {
      opacity: 1,
      gradient: {
        type: 'vertical',
        shadeIntensity: 0,
        opacityFrom: 0.4,
        opacityTo: 0,
        stops: [0, 100]
      }
    },
    // Datalabels
    dataLabels: {
      enabled: false
    },
    // Stroke
    stroke: {
      width: 3,
      curve: 'smooth',
      lineCap: 'round'
    },
    // Grid
    grid: {
      strokeDashArray: 3,
      borderColor: theme.palette.divider
    },
    // Xaxis
    xaxis: {
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    // Markers
    markers: {
      size: 0,
      strokeColors: theme.palette.background.paper
    },
    // Tooltip
    tooltip: {
      x: {
        show: false
      }
    },
    // Legend
    legend: {
      show: true,
      fontSize: 13,
      position: 'top',
      horizontalAlign: 'right',
      markers: {
        radius: 12
      },
      itemMargin: {
        horizontal: 12
      },
      labels: {
        colors: theme.palette.text.primary
      }
    },
    // plotOptions
    plotOptions: {
      // Pie + Donut
      pie: {
        donut: {
          labels: {
            show: true,
            value: LABEL_VALUE,
            total: LABEL_TOTAL
          }
        }
      },
      // Radialbar
      radialBar: {
        track: {
          strokeWidth: '100%',
          background: theme.palette.grey[50016]
        },
        dataLabels: {
          value: LABEL_VALUE,
          total: LABEL_TOTAL
        }
      },
      // Radar
      radar: {
        polygons: {
          strokeWidth: 1,
          fill: {
            colors: ['transparent']
          },
          strokeColors: theme.palette.divider,
          connectorColors: theme.palette.divider
        }
      }
    }
  };
}