"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ShopProductCard;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRouterDom = require("react-router-dom");

var _core = require("@material-ui/core");

var _styles = require("@material-ui/core/styles");

var _formatNumber = require("../../../utils/formatNumber");

var _Label = _interopRequireDefault(require("../../Label"));

var _ColorPreview = _interopRequireDefault(require("../../ColorPreview"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// material
// utils
//
// ----------------------------------------------------------------------
const ProductImgStyle = (0, _styles.styled)('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute'
}); // ----------------------------------------------------------------------

ShopProductCard.propTypes = {
  product: _propTypes.default.object
};

function ShopProductCard(_ref) {
  let {
    product
  } = _ref;
  const {
    name,
    cover,
    price,
    colors,
    status,
    priceSale
  } = product;
  return /*#__PURE__*/React.createElement(_core.Card, null, /*#__PURE__*/React.createElement(_core.Box, {
    sx: {
      pt: '100%',
      position: 'relative'
    }
  }, status && /*#__PURE__*/React.createElement(_Label.default, {
    variant: "filled",
    color: status === 'sale' && 'error' || 'info',
    sx: {
      zIndex: 9,
      top: 16,
      right: 16,
      position: 'absolute',
      textTransform: 'uppercase'
    }
  }, status), /*#__PURE__*/React.createElement(ProductImgStyle, {
    alt: name,
    src: cover
  })), /*#__PURE__*/React.createElement(_core.Stack, {
    spacing: 2,
    sx: {
      p: 3
    }
  }, /*#__PURE__*/React.createElement(_core.Link, {
    to: "#",
    color: "inherit",
    underline: "hover",
    component: _reactRouterDom.Link
  }, /*#__PURE__*/React.createElement(_core.Typography, {
    variant: "subtitle2",
    noWrap: true
  }, name)), /*#__PURE__*/React.createElement(_core.Stack, {
    direction: "row",
    alignItems: "center",
    justifyContent: "space-between"
  }, /*#__PURE__*/React.createElement(_ColorPreview.default, {
    colors: colors
  }), /*#__PURE__*/React.createElement(_core.Typography, {
    variant: "subtitle1"
  }, /*#__PURE__*/React.createElement(_core.Typography, {
    component: "span",
    variant: "body1",
    sx: {
      color: 'text.disabled',
      textDecoration: 'line-through'
    }
  }, priceSale && (0, _formatNumber.fCurrency)(priceSale)), "\xA0", (0, _formatNumber.fCurrency)(price)))));
}