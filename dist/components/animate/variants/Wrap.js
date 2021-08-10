"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.varWrapBoth = exports.varWrapExit = exports.varWrapEnter = void 0;
// ----------------------------------------------------------------------
const varWrapEnter = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};
exports.varWrapEnter = varWrapEnter;
const varWrapExit = {
  exit: {
    transition: {
      staggerChildren: 0.1
    }
  }
};
exports.varWrapExit = varWrapExit;
const varWrapBoth = {
  animate: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.1
    }
  },
  exit: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  }
};
exports.varWrapBoth = varWrapBoth;