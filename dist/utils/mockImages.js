"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mockImgAvatar = exports.mockImgProduct = exports.mockImgCover = void 0;

// ----------------------------------------------------------------------
const mockImgCover = index => "/static/mock-images/covers/cover_".concat(index, ".jpg");

exports.mockImgCover = mockImgCover;

const mockImgProduct = index => "/static/mock-images/products/product_".concat(index, ".jpg");

exports.mockImgProduct = mockImgProduct;

const mockImgAvatar = index => "/static/mock-images/avatars/avatar_".concat(index, ".jpg");

exports.mockImgAvatar = mockImgAvatar;