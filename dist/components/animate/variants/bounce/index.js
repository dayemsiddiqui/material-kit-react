"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BounceIn = require("./BounceIn");

Object.keys(_BounceIn).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _BounceIn[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _BounceIn[key];
    }
  });
});

var _BounceOut = require("./BounceOut");

Object.keys(_BounceOut).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _BounceOut[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _BounceOut[key];
    }
  });
});