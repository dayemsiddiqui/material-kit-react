"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _faker = _interopRequireDefault(require("faker"));

var _lodash = require("lodash");

var _mockImages = require("../utils/mockImages");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// utils
// ----------------------------------------------------------------------
const users = [...Array(24)].map((_, index) => ({
  id: _faker.default.datatype.uuid(),
  avatarUrl: (0, _mockImages.mockImgAvatar)(index + 1),
  name: _faker.default.name.findName(),
  company: _faker.default.company.companyName(),
  isVerified: _faker.default.datatype.boolean(),
  status: (0, _lodash.sample)(['active', 'banned']),
  role: (0, _lodash.sample)(['Leader', 'Hr Manager', 'UI Designer', 'UX Designer', 'UI/UX Designer', 'Project Manager', 'Backend Developer', 'Full Stack Designer', 'Front End Developer', 'Full Stack Developer'])
}));
var _default = users;
exports.default = _default;