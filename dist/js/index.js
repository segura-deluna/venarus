/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/modules/test.js
const sum = (a, b) => {
  return a * b;
};
const btnClose = () => {
  const btn = document.querySelector('.hero__banner_close');
  const banner = document.querySelector('.hero__banner');
  btn.addEventListener('click', () => {
    banner.classList.add('close');
  });
};
;// CONCATENATED MODULE: ./src/js/index.js


console.log(sum(20, 10));
btnClose();
/******/ })()
;