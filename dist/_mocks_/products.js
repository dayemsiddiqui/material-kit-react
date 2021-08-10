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
const PRODUCT_NAME = ['Nike Air Force 1 NDESTRUKT', 'Nike Space Hippie 04', 'Nike Air Zoom Pegasus 37 A.I.R. Chaz Bear', 'Nike Blazer Low 77 Vintage', 'Nike ZoomX SuperRep Surge', 'Zoom Freak 2', 'Nike Air Max Zephyr', 'Jordan Delta', 'Air Jordan XXXV PF', 'Nike Waffle Racer Crater', 'Kyrie 7 EP Sisterhood', 'Nike Air Zoom BB NXT', 'Nike Air Force 1 07 LX', 'Nike Air Force 1 Shadow SE', 'Nike Air Zoom Tempo NEXT%', 'Nike DBreak-Type', 'Nike Air Max Up', 'Nike Air Max 270 React ENG', 'NikeCourt Royale', 'Nike Air Zoom Pegasus 37 Premium', 'Nike Air Zoom SuperRep', 'NikeCourt Royale', 'Nike React Art3mis', 'Nike React Infinity Run Flyknit A.I.R. Chaz Bear'];
const PRODUCT_COLOR = ['#00AB55', '#000000', '#FFFFFF', '#FFC0CB', '#FF4842', '#1890FF', '#94D82D', '#FFC107']; // ----------------------------------------------------------------------

const products = [...Array(24)].map((_, index) => {
  const setIndex = index + 1;
  return {
    id: _faker.default.datatype.uuid(),
    cover: (0, _mockImages.mockImgProduct)(setIndex),
    name: PRODUCT_NAME[index],
    price: _faker.default.datatype.number({
      min: 4,
      max: 99,
      precision: 0.01
    }),
    priceSale: setIndex % 3 ? null : _faker.default.datatype.number({
      min: 19,
      max: 29,
      precision: 0.01
    }),
    colors: setIndex === 1 && PRODUCT_COLOR.slice(0, 2) || setIndex === 2 && PRODUCT_COLOR.slice(1, 3) || setIndex === 3 && PRODUCT_COLOR.slice(2, 4) || setIndex === 4 && PRODUCT_COLOR.slice(3, 6) || setIndex === 23 && PRODUCT_COLOR.slice(4, 6) || setIndex === 24 && PRODUCT_COLOR.slice(5, 6) || PRODUCT_COLOR,
    status: (0, _lodash.sample)(['sale', 'new', '', ''])
  };
});
var _default = products;
exports.default = _default;