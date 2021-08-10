"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ShopFilterSidebar;
exports.FILTER_COLOR_OPTIONS = exports.FILTER_PRICE_OPTIONS = exports.FILTER_RATING_OPTIONS = exports.FILTER_CATEGORY_OPTIONS = exports.FILTER_GENDER_OPTIONS = exports.SORT_BY_OPTIONS = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.string.includes.js");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = require("@iconify/react");

var _formik = require("formik");

var _closeFill = _interopRequireDefault(require("@iconify/icons-eva/close-fill"));

var _roundClearAll = _interopRequireDefault(require("@iconify/icons-ic/round-clear-all"));

var _roundFilterList = _interopRequireDefault(require("@iconify/icons-ic/round-filter-list"));

var _core = require("@material-ui/core");

var _Scrollbar = _interopRequireDefault(require("../../Scrollbar"));

var _ColorManyPicker = _interopRequireDefault(require("../../ColorManyPicker"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// ----------------------------------------------------------------------
const SORT_BY_OPTIONS = [{
  value: 'featured',
  label: 'Featured'
}, {
  value: 'newest',
  label: 'Newest'
}, {
  value: 'priceDesc',
  label: 'Price: High-Low'
}, {
  value: 'priceAsc',
  label: 'Price: Low-High'
}];
exports.SORT_BY_OPTIONS = SORT_BY_OPTIONS;
const FILTER_GENDER_OPTIONS = ['Men', 'Women', 'Kids'];
exports.FILTER_GENDER_OPTIONS = FILTER_GENDER_OPTIONS;
const FILTER_CATEGORY_OPTIONS = ['All', 'Shose', 'Apparel', 'Accessories'];
exports.FILTER_CATEGORY_OPTIONS = FILTER_CATEGORY_OPTIONS;
const FILTER_RATING_OPTIONS = ['up4Star', 'up3Star', 'up2Star', 'up1Star'];
exports.FILTER_RATING_OPTIONS = FILTER_RATING_OPTIONS;
const FILTER_PRICE_OPTIONS = [{
  value: 'below',
  label: 'Below $25'
}, {
  value: 'between',
  label: 'Between $25 - $75'
}, {
  value: 'above',
  label: 'Above $75'
}];
exports.FILTER_PRICE_OPTIONS = FILTER_PRICE_OPTIONS;
const FILTER_COLOR_OPTIONS = ['#00AB55', '#000000', '#FFFFFF', '#FFC0CB', '#FF4842', '#1890FF', '#94D82D', '#FFC107']; // ----------------------------------------------------------------------

exports.FILTER_COLOR_OPTIONS = FILTER_COLOR_OPTIONS;
ShopFilterSidebar.propTypes = {
  isOpenFilter: _propTypes.default.bool,
  onResetFilter: _propTypes.default.func,
  onOpenFilter: _propTypes.default.func,
  onCloseFilter: _propTypes.default.func,
  formik: _propTypes.default.object
};

function ShopFilterSidebar(_ref) {
  let {
    isOpenFilter,
    onResetFilter,
    onOpenFilter,
    onCloseFilter,
    formik
  } = _ref;
  const {
    values,
    getFieldProps,
    handleChange
  } = formik;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_core.Button, {
    disableRipple: true,
    color: "inherit",
    endIcon: /*#__PURE__*/React.createElement(_react.Icon, {
      icon: _roundFilterList.default
    }),
    onClick: onOpenFilter
  }, "Filters\xA0"), /*#__PURE__*/React.createElement(_formik.FormikProvider, {
    value: formik
  }, /*#__PURE__*/React.createElement(_formik.Form, {
    autoComplete: "off",
    noValidate: true
  }, /*#__PURE__*/React.createElement(_core.Drawer, {
    anchor: "right",
    open: isOpenFilter,
    onClose: onCloseFilter,
    PaperProps: {
      sx: {
        width: 280,
        border: 'none',
        overflow: 'hidden'
      }
    }
  }, /*#__PURE__*/React.createElement(_core.Stack, {
    direction: "row",
    alignItems: "center",
    justifyContent: "space-between",
    sx: {
      px: 1,
      py: 2
    }
  }, /*#__PURE__*/React.createElement(_core.Typography, {
    variant: "subtitle1",
    sx: {
      ml: 1
    }
  }, "Filters"), /*#__PURE__*/React.createElement(_core.IconButton, {
    onClick: onCloseFilter
  }, /*#__PURE__*/React.createElement(_react.Icon, {
    icon: _closeFill.default,
    width: 20,
    height: 20
  }))), /*#__PURE__*/React.createElement(_core.Divider, null), /*#__PURE__*/React.createElement(_Scrollbar.default, null, /*#__PURE__*/React.createElement(_core.Stack, {
    spacing: 3,
    sx: {
      p: 3
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_core.Typography, {
    variant: "subtitle1",
    gutterBottom: true
  }, "Gender"), /*#__PURE__*/React.createElement(_core.FormGroup, null, FILTER_GENDER_OPTIONS.map(item => /*#__PURE__*/React.createElement(_core.FormControlLabel, {
    key: item,
    control: /*#__PURE__*/React.createElement(_core.Checkbox, _extends({}, getFieldProps('gender'), {
      value: item,
      checked: values.gender.includes(item)
    })),
    label: item
  })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_core.Typography, {
    variant: "subtitle1",
    gutterBottom: true
  }, "Category"), /*#__PURE__*/React.createElement(_core.RadioGroup, getFieldProps('category'), FILTER_CATEGORY_OPTIONS.map(item => /*#__PURE__*/React.createElement(_core.FormControlLabel, {
    key: item,
    value: item,
    control: /*#__PURE__*/React.createElement(_core.Radio, null),
    label: item
  })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_core.Typography, {
    variant: "subtitle1",
    gutterBottom: true
  }, "Colour"), /*#__PURE__*/React.createElement(_ColorManyPicker.default, {
    name: "colors",
    colors: FILTER_COLOR_OPTIONS,
    onChange: handleChange,
    onChecked: color => values.colors.includes(color),
    sx: {
      maxWidth: 36 * 4
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_core.Typography, {
    variant: "subtitle1",
    gutterBottom: true
  }, "Price"), /*#__PURE__*/React.createElement(_core.RadioGroup, getFieldProps('priceRange'), FILTER_PRICE_OPTIONS.map(item => /*#__PURE__*/React.createElement(_core.FormControlLabel, {
    key: item.value,
    value: item.value,
    control: /*#__PURE__*/React.createElement(_core.Radio, null),
    label: item.label
  })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_core.Typography, {
    variant: "subtitle1",
    gutterBottom: true
  }, "Rating"), /*#__PURE__*/React.createElement(_core.RadioGroup, getFieldProps('rating'), FILTER_RATING_OPTIONS.map((item, index) => /*#__PURE__*/React.createElement(_core.FormControlLabel, {
    key: item,
    value: item,
    control: /*#__PURE__*/React.createElement(_core.Radio, {
      disableRipple: true,
      color: "default",
      icon: /*#__PURE__*/React.createElement(_core.Rating, {
        readOnly: true,
        value: 4 - index
      }),
      checkedIcon: /*#__PURE__*/React.createElement(_core.Rating, {
        readOnly: true,
        value: 4 - index
      })
    }),
    label: "& Up",
    sx: _objectSpread({
      my: 0.5,
      borderRadius: 1,
      '& > :first-of-type': {
        py: 0.5
      },
      '&:hover': {
        opacity: 0.48,
        '& > *': {
          bgcolor: 'transparent'
        }
      }
    }, values.rating.includes(item) && {
      bgcolor: 'background.neutral'
    })
  })))))), /*#__PURE__*/React.createElement(_core.Box, {
    sx: {
      p: 3
    }
  }, /*#__PURE__*/React.createElement(_core.Button, {
    fullWidth: true,
    size: "large",
    type: "submit",
    color: "inherit",
    variant: "outlined",
    onClick: onResetFilter,
    startIcon: /*#__PURE__*/React.createElement(_react.Icon, {
      icon: _roundClearAll.default
    })
  }, "Clear All"))))));
}