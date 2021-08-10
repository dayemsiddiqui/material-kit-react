"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = LoginForm;

require("core-js/modules/web.dom-collections.iterator.js");

var Yup = _interopRequireWildcard(require("yup"));

var _react = require("react");

var _reactRouterDom = require("react-router-dom");

var _formik = require("formik");

var _react2 = require("@iconify/react");

var _eyeFill = _interopRequireDefault(require("@iconify/icons-eva/eye-fill"));

var _eyeOffFill = _interopRequireDefault(require("@iconify/icons-eva/eye-off-fill"));

var _core = require("@material-ui/core");

var _lab = require("@material-ui/lab");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// ----------------------------------------------------------------------
function LoginForm() {
  const navigate = (0, _reactRouterDom.useNavigate)();
  const [showPassword, setShowPassword] = (0, _react.useState)(false);
  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required')
  });
  const formik = (0, _formik.useFormik)({
    initialValues: {
      email: '',
      password: '',
      remember: true
    },
    validationSchema: LoginSchema,
    onSubmit: () => {
      navigate('/dashboard', {
        replace: true
      });
    }
  });
  const {
    errors,
    touched,
    values,
    isSubmitting,
    handleSubmit,
    getFieldProps
  } = formik;

  const handleShowPassword = () => {
    setShowPassword(show => !show);
  };

  return /*#__PURE__*/React.createElement(_formik.FormikProvider, {
    value: formik
  }, /*#__PURE__*/React.createElement(_formik.Form, {
    autoComplete: "off",
    noValidate: true,
    onSubmit: handleSubmit
  }, /*#__PURE__*/React.createElement(_core.Stack, {
    spacing: 3
  }, /*#__PURE__*/React.createElement(_core.TextField, _extends({
    fullWidth: true,
    autoComplete: "username",
    type: "email",
    label: "Email address"
  }, getFieldProps('email'), {
    error: Boolean(touched.email && errors.email),
    helperText: touched.email && errors.email
  })), /*#__PURE__*/React.createElement(_core.TextField, _extends({
    fullWidth: true,
    autoComplete: "current-password",
    type: showPassword ? 'text' : 'password',
    label: "Password"
  }, getFieldProps('password'), {
    InputProps: {
      endAdornment: /*#__PURE__*/React.createElement(_core.InputAdornment, {
        position: "end"
      }, /*#__PURE__*/React.createElement(_core.IconButton, {
        onClick: handleShowPassword,
        edge: "end"
      }, /*#__PURE__*/React.createElement(_react2.Icon, {
        icon: showPassword ? _eyeFill.default : _eyeOffFill.default
      })))
    },
    error: Boolean(touched.password && errors.password),
    helperText: touched.password && errors.password
  }))), /*#__PURE__*/React.createElement(_core.Stack, {
    direction: "row",
    alignItems: "center",
    justifyContent: "space-between",
    sx: {
      my: 2
    }
  }, /*#__PURE__*/React.createElement(_core.FormControlLabel, {
    control: /*#__PURE__*/React.createElement(_core.Checkbox, _extends({}, getFieldProps('remember'), {
      checked: values.remember
    })),
    label: "Remember me"
  }), /*#__PURE__*/React.createElement(_core.Link, {
    component: _reactRouterDom.Link,
    variant: "subtitle2",
    to: "#"
  }, "Forgot password?")), /*#__PURE__*/React.createElement(_lab.LoadingButton, {
    fullWidth: true,
    size: "large",
    type: "submit",
    variant: "contained",
    loading: isSubmitting
  }, "Login")));
}