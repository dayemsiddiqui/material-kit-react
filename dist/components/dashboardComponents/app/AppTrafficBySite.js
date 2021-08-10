"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AppTrafficBySite;

var _faker = _interopRequireDefault(require("faker"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = require("@iconify/react");

var _googleFill = _interopRequireDefault(require("@iconify/icons-eva/google-fill"));

var _twitterFill = _interopRequireDefault(require("@iconify/icons-eva/twitter-fill"));

var _facebookFill = _interopRequireDefault(require("@iconify/icons-eva/facebook-fill"));

var _linkedinFill = _interopRequireDefault(require("@iconify/icons-eva/linkedin-fill"));

var _core = require("@material-ui/core");

var _formatNumber = require("../../../utils/formatNumber");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// material
// utils
// ----------------------------------------------------------------------
const SOCIALS = [{
  name: 'FaceBook',
  value: _faker.default.datatype.number(),
  icon: /*#__PURE__*/React.createElement(_react.Icon, {
    icon: _facebookFill.default,
    color: "#1877F2",
    width: 32,
    height: 32
  })
}, {
  name: 'Google',
  value: _faker.default.datatype.number(),
  icon: /*#__PURE__*/React.createElement(_react.Icon, {
    icon: _googleFill.default,
    color: "#DF3E30",
    width: 32,
    height: 32
  })
}, {
  name: 'Linkedin',
  value: _faker.default.datatype.number(),
  icon: /*#__PURE__*/React.createElement(_react.Icon, {
    icon: _linkedinFill.default,
    color: "#006097",
    width: 32,
    height: 32
  })
}, {
  name: 'Twitter',
  value: _faker.default.datatype.number(),
  icon: /*#__PURE__*/React.createElement(_react.Icon, {
    icon: _twitterFill.default,
    color: "#1C9CEA",
    width: 32,
    height: 32
  })
}]; // ----------------------------------------------------------------------

SiteItem.propTypes = {
  site: _propTypes.default.object
};

function SiteItem(_ref) {
  let {
    site
  } = _ref;
  const {
    icon,
    value,
    name
  } = site;
  return /*#__PURE__*/React.createElement(_core.Grid, {
    item: true,
    xs: 6
  }, /*#__PURE__*/React.createElement(_core.Paper, {
    variant: "outlined",
    sx: {
      py: 2.5,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(_core.Box, {
    sx: {
      mb: 0.5
    }
  }, icon), /*#__PURE__*/React.createElement(_core.Typography, {
    variant: "h6"
  }, (0, _formatNumber.fShortenNumber)(value)), /*#__PURE__*/React.createElement(_core.Typography, {
    variant: "body2",
    sx: {
      color: 'text.secondary'
    }
  }, name)));
}

function AppTrafficBySite() {
  return /*#__PURE__*/React.createElement(_core.Card, null, /*#__PURE__*/React.createElement(_core.CardHeader, {
    title: "Traffic by Site"
  }), /*#__PURE__*/React.createElement(_core.CardContent, null, /*#__PURE__*/React.createElement(_core.Grid, {
    container: true,
    spacing: 2
  }, SOCIALS.map(site => /*#__PURE__*/React.createElement(SiteItem, {
    key: site.name,
    site: site
  })))));
}