"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.varBounceOutRight = exports.varBounceOutLeft = exports.varBounceOutDown = exports.varBounceOutUp = exports.varBounceOut = void 0;
// ----------------------------------------------------------------------
const varBounceOut = {
  animate: {
    scale: [0.9, 1.1, 0.3],
    opacity: [1, 1, 0]
  }
};
exports.varBounceOut = varBounceOut;
const varBounceOutUp = {
  animate: {
    y: [-12, 24, -720],
    scaleY: [0.985, 0.9, 3],
    opacity: [1, 1, 0]
  }
};
exports.varBounceOutUp = varBounceOutUp;
const varBounceOutDown = {
  animate: {
    y: [12, -24, 720],
    scaleY: [0.985, 0.9, 3],
    opacity: [1, 1, 0]
  }
};
exports.varBounceOutDown = varBounceOutDown;
const varBounceOutLeft = {
  animate: {
    x: [0, 24, -720],
    scaleX: [1, 0.9, 2],
    opacity: [1, 1, 0]
  }
};
exports.varBounceOutLeft = varBounceOutLeft;
const varBounceOutRight = {
  animate: {
    x: [0, -24, 720],
    scaleX: [1, 0.9, 2],
    opacity: [1, 1, 0]
  }
};
exports.varBounceOutRight = varBounceOutRight;