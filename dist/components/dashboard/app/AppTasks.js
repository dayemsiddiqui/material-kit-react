"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AppTasks;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.string.includes.js");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _formik = require("formik");

var _core = require("@material-ui/core");

const _excluded = ["task", "checked", "formik"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// ----------------------------------------------------------------------
const TASKS = ['Create FireStone Logo', 'Add SCSS and JS files if required', 'Stakeholder Meeting', 'Scoping & Estimations', 'Sprint Showcase']; // ----------------------------------------------------------------------

TaskItem.propTypes = {
  task: _propTypes.default.string,
  checked: _propTypes.default.bool,
  formik: _propTypes.default.object
};

function TaskItem(_ref) {
  let {
    task,
    checked,
    formik
  } = _ref,
      other = _objectWithoutProperties(_ref, _excluded);

  const {
    getFieldProps
  } = formik;
  return /*#__PURE__*/React.createElement(_core.Stack, {
    direction: "row",
    justifyContent: "space-between",
    sx: {
      py: 0.75
    }
  }, /*#__PURE__*/React.createElement(_core.FormControlLabel, {
    control: /*#__PURE__*/React.createElement(_core.Checkbox, _extends({}, getFieldProps('checked'), {
      value: task,
      checked: checked
    }, other)),
    label: /*#__PURE__*/React.createElement(_core.Typography, {
      variant: "body2",
      sx: _objectSpread({}, checked && {
        color: 'text.disabled',
        textDecoration: 'line-through'
      })
    }, task)
  }));
}

function AppTasks() {
  const formik = (0, _formik.useFormik)({
    initialValues: {
      checked: [TASKS[2]]
    },
    onSubmit: values => {
      console.log(values);
    }
  });
  const {
    values,
    handleSubmit
  } = formik;
  return /*#__PURE__*/React.createElement(_core.Card, null, /*#__PURE__*/React.createElement(_core.CardHeader, {
    title: "Tasks"
  }), /*#__PURE__*/React.createElement(_core.Box, {
    sx: {
      px: 3,
      py: 1
    }
  }, /*#__PURE__*/React.createElement(_formik.FormikProvider, {
    value: formik
  }, /*#__PURE__*/React.createElement(_formik.Form, {
    autoComplete: "off",
    noValidate: true,
    onSubmit: handleSubmit
  }, TASKS.map(task => /*#__PURE__*/React.createElement(TaskItem, {
    key: task,
    task: task,
    formik: formik,
    checked: values.checked.includes(task)
  }))))));
}