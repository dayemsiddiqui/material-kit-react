"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SearchNotFound;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

const _excluded = ["searchQuery"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// ----------------------------------------------------------------------
SearchNotFound.propTypes = {
  searchQuery: _propTypes.default.string
};

function SearchNotFound(_ref) {
  let {
    searchQuery = ''
  } = _ref,
      other = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(_core.Paper, other, /*#__PURE__*/React.createElement(_core.Typography, {
    gutterBottom: true,
    align: "center",
    variant: "subtitle1"
  }, "Not found"), /*#__PURE__*/React.createElement(_core.Typography, {
    variant: "body2",
    align: "center"
  }, "No results found for \xA0", /*#__PURE__*/React.createElement("strong", null, "\"", searchQuery, "\""), ". Try checking for typos or using complete words."));
}