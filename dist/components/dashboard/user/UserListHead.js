"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = UserListHead;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("@material-ui/utils");

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// ----------------------------------------------------------------------
UserListHead.propTypes = {
  order: _propTypes.default.oneOf(['asc', 'desc']),
  orderBy: _propTypes.default.string,
  rowCount: _propTypes.default.number,
  headLabel: _propTypes.default.array,
  numSelected: _propTypes.default.number,
  onRequestSort: _propTypes.default.func,
  onSelectAllClick: _propTypes.default.func
};

function UserListHead(_ref) {
  let {
    order,
    orderBy,
    rowCount,
    headLabel,
    numSelected,
    onRequestSort,
    onSelectAllClick
  } = _ref;

  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };

  return /*#__PURE__*/React.createElement(_core.TableHead, null, /*#__PURE__*/React.createElement(_core.TableRow, null, /*#__PURE__*/React.createElement(_core.TableCell, {
    padding: "checkbox"
  }, /*#__PURE__*/React.createElement(_core.Checkbox, {
    indeterminate: numSelected > 0 && numSelected < rowCount,
    checked: rowCount > 0 && numSelected === rowCount,
    onChange: onSelectAllClick
  })), headLabel.map(headCell => /*#__PURE__*/React.createElement(_core.TableCell, {
    key: headCell.id,
    align: headCell.alignRight ? 'right' : 'left',
    sortDirection: orderBy === headCell.id ? order : false
  }, /*#__PURE__*/React.createElement(_core.TableSortLabel, {
    hideSortIcon: true,
    active: orderBy === headCell.id,
    direction: orderBy === headCell.id ? order : 'asc',
    onClick: createSortHandler(headCell.id)
  }, headCell.label, orderBy === headCell.id ? /*#__PURE__*/React.createElement(_core.Box, {
    sx: _objectSpread({}, _utils.visuallyHidden)
  }, order === 'desc' ? 'sorted descending' : 'sorted ascending') : null)))));
}