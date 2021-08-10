"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = User;

require("core-js/modules/es.array.sort.js");

require("core-js/modules/web.dom-collections.iterator.js");

var _lodash = require("lodash");

var _react = require("@iconify/react");

var _changeCase = require("change-case");

var _react2 = require("react");

var _plusFill = _interopRequireDefault(require("@iconify/icons-eva/plus-fill"));

var _reactRouterDom = require("react-router-dom");

var _core = require("@material-ui/core");

var _Page = _interopRequireDefault(require("../components/Page"));

var _Label = _interopRequireDefault(require("../components/Label"));

var _Scrollbar = _interopRequireDefault(require("../components/Scrollbar"));

var _SearchNotFound = _interopRequireDefault(require("../components/SearchNotFound"));

var _user2 = require("../components/dashboardComponents/user");

var _user3 = _interopRequireDefault(require("../_mocks_/user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// material
// components
//
// ----------------------------------------------------------------------
const TABLE_HEAD = [{
  id: 'name',
  label: 'Name',
  alignRight: false
}, {
  id: 'company',
  label: 'Company',
  alignRight: false
}, {
  id: 'role',
  label: 'Role',
  alignRight: false
}, {
  id: 'isVerified',
  label: 'Verified',
  alignRight: false
}, {
  id: 'status',
  label: 'Status',
  alignRight: false
}, {
  id: ''
}]; // ----------------------------------------------------------------------

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }

  if (b[orderBy] > a[orderBy]) {
    return 1;
  }

  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc' ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });

  if (query) {
    return (0, _lodash.filter)(array, _user => _user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  }

  return stabilizedThis.map(el => el[0]);
}

function User() {
  const [page, setPage] = (0, _react2.useState)(0);
  const [order, setOrder] = (0, _react2.useState)('asc');
  const [selected, setSelected] = (0, _react2.useState)([]);
  const [orderBy, setOrderBy] = (0, _react2.useState)('name');
  const [filterName, setFilterName] = (0, _react2.useState)('');
  const [rowsPerPage, setRowsPerPage] = (0, _react2.useState)(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = event => {
    if (event.target.checked) {
      const newSelecteds = _user3.default.map(n => n.name);

      setSelected(newSelecteds);
      return;
    }

    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleFilterByName = event => {
    setFilterName(event.target.value);
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - _user3.default.length) : 0;
  const filteredUsers = applySortFilter(_user3.default, getComparator(order, orderBy), filterName);
  const isUserNotFound = filteredUsers.length === 0;
  return /*#__PURE__*/React.createElement(_Page.default, {
    title: "User | Minimal-UI"
  }, /*#__PURE__*/React.createElement(_core.Container, null, /*#__PURE__*/React.createElement(_core.Stack, {
    direction: "row",
    alignItems: "center",
    justifyContent: "space-between",
    mb: 5
  }, /*#__PURE__*/React.createElement(_core.Typography, {
    variant: "h4",
    gutterBottom: true
  }, "User"), /*#__PURE__*/React.createElement(_core.Button, {
    variant: "contained",
    component: _reactRouterDom.Link,
    to: "#",
    startIcon: /*#__PURE__*/React.createElement(_react.Icon, {
      icon: _plusFill.default
    })
  }, "New User")), /*#__PURE__*/React.createElement(_core.Card, null, /*#__PURE__*/React.createElement(_user2.UserListToolbar, {
    numSelected: selected.length,
    filterName: filterName,
    onFilterName: handleFilterByName
  }), /*#__PURE__*/React.createElement(_Scrollbar.default, null, /*#__PURE__*/React.createElement(_core.TableContainer, {
    sx: {
      minWidth: 800
    }
  }, /*#__PURE__*/React.createElement(_core.Table, null, /*#__PURE__*/React.createElement(_user2.UserListHead, {
    order: order,
    orderBy: orderBy,
    headLabel: TABLE_HEAD,
    rowCount: _user3.default.length,
    numSelected: selected.length,
    onRequestSort: handleRequestSort,
    onSelectAllClick: handleSelectAllClick
  }), /*#__PURE__*/React.createElement(_core.TableBody, null, filteredUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
    const {
      id,
      name,
      role,
      status,
      company,
      avatarUrl,
      isVerified
    } = row;
    const isItemSelected = selected.indexOf(name) !== -1;
    return /*#__PURE__*/React.createElement(_core.TableRow, {
      hover: true,
      key: id,
      tabIndex: -1,
      role: "checkbox",
      selected: isItemSelected,
      "aria-checked": isItemSelected
    }, /*#__PURE__*/React.createElement(_core.TableCell, {
      padding: "checkbox"
    }, /*#__PURE__*/React.createElement(_core.Checkbox, {
      checked: isItemSelected,
      onChange: event => handleClick(event, name)
    })), /*#__PURE__*/React.createElement(_core.TableCell, {
      component: "th",
      scope: "row",
      padding: "none"
    }, /*#__PURE__*/React.createElement(_core.Stack, {
      direction: "row",
      alignItems: "center",
      spacing: 2
    }, /*#__PURE__*/React.createElement(_core.Avatar, {
      alt: name,
      src: avatarUrl
    }), /*#__PURE__*/React.createElement(_core.Typography, {
      variant: "subtitle2",
      noWrap: true
    }, name))), /*#__PURE__*/React.createElement(_core.TableCell, {
      align: "left"
    }, company), /*#__PURE__*/React.createElement(_core.TableCell, {
      align: "left"
    }, role), /*#__PURE__*/React.createElement(_core.TableCell, {
      align: "left"
    }, isVerified ? 'Yes' : 'No'), /*#__PURE__*/React.createElement(_core.TableCell, {
      align: "left"
    }, /*#__PURE__*/React.createElement(_Label.default, {
      variant: "ghost",
      color: status === 'banned' && 'error' || 'success'
    }, (0, _changeCase.sentenceCase)(status))), /*#__PURE__*/React.createElement(_core.TableCell, {
      align: "right"
    }, /*#__PURE__*/React.createElement(_user2.UserMoreMenu, null)));
  }), emptyRows > 0 && /*#__PURE__*/React.createElement(_core.TableRow, {
    style: {
      height: 53 * emptyRows
    }
  }, /*#__PURE__*/React.createElement(_core.TableCell, {
    colSpan: 6
  }))), isUserNotFound && /*#__PURE__*/React.createElement(_core.TableBody, null, /*#__PURE__*/React.createElement(_core.TableRow, null, /*#__PURE__*/React.createElement(_core.TableCell, {
    align: "center",
    colSpan: 6,
    sx: {
      py: 3
    }
  }, /*#__PURE__*/React.createElement(_SearchNotFound.default, {
    searchQuery: filterName
  }))))))), /*#__PURE__*/React.createElement(_core.TablePagination, {
    rowsPerPageOptions: [5, 10, 25],
    component: "div",
    count: _user3.default.length,
    rowsPerPage: rowsPerPage,
    page: page,
    onPageChange: handleChangePage,
    onRowsPerPageChange: handleChangeRowsPerPage
  }))));
}