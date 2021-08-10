"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = EcommerceShop;

require("core-js/modules/web.dom-collections.iterator.js");

var _formik = require("formik");

var _react = require("react");

var _core = require("@material-ui/core");

var _Page = _interopRequireDefault(require("../components/Page"));

var _products = require("../components/dashboardComponents/products");

var _products2 = _interopRequireDefault(require("../_mocks_/products"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// material
// components
//
// ----------------------------------------------------------------------
function EcommerceShop() {
  const [openFilter, setOpenFilter] = (0, _react.useState)(false);
  const formik = (0, _formik.useFormik)({
    initialValues: {
      gender: '',
      category: '',
      colors: '',
      priceRange: '',
      rating: ''
    },
    onSubmit: () => {
      setOpenFilter(false);
    }
  });
  const {
    resetForm,
    handleSubmit
  } = formik;

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  const handleResetFilter = () => {
    handleSubmit();
    resetForm();
  };

  return /*#__PURE__*/React.createElement(_Page.default, {
    title: "Dashboard: Products | Minimal-UI"
  }, /*#__PURE__*/React.createElement(_core.Container, null, /*#__PURE__*/React.createElement(_core.Typography, {
    variant: "h4",
    sx: {
      mb: 5
    }
  }, "Products"), /*#__PURE__*/React.createElement(_core.Stack, {
    direction: "row",
    flexWrap: "wrap-reverse",
    alignItems: "center",
    justifyContent: "flex-end",
    sx: {
      mb: 5
    }
  }, /*#__PURE__*/React.createElement(_core.Stack, {
    direction: "row",
    spacing: 1,
    flexShrink: 0,
    sx: {
      my: 1
    }
  }, /*#__PURE__*/React.createElement(_products.ProductFilterSidebar, {
    formik: formik,
    isOpenFilter: openFilter,
    onResetFilter: handleResetFilter,
    onOpenFilter: handleOpenFilter,
    onCloseFilter: handleCloseFilter
  }), /*#__PURE__*/React.createElement(_products.ProductSort, null))), /*#__PURE__*/React.createElement(_products.ProductList, {
    products: _products2.default
  }), /*#__PURE__*/React.createElement(_products.ProductCartWidget, null)));
}