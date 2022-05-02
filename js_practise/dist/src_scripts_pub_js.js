"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmy_webpack_project"] = self["webpackChunkmy_webpack_project"] || []).push([["src_scripts_pub_js"],{

/***/ "./src/scripts/pub.js":
/*!****************************!*\
  !*** ./src/scripts/pub.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pubsub-js */ \"./node_modules/pubsub-js/src/pubsub.js\");\n/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pubsub_js__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\n// create a function to subscribe to topics\nvar mySubscriber = function (msg, data) {\n    console.log( msg, data );\n};\n\n// add the function to the list of subscribers for a particular topic\n// we're keeping the returned token, in order to be able to unsubscribe\n// from the topic later on\ndebugger\nvar token = pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe('MY TOPIC', mySubscriber);\n\n// publish a topic asynchronously\npubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish('MY TOPIC', 'hello world!');\n\n// publish a topic synchronously, which is faster in some environments,\n// but will get confusing when one topic triggers new topics in the\n// same execution chain\n// USE WITH CAUTION, HERE BE DRAGONS!!!\npubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publishSync('MY TOPIC', 'hello world!');\n\n//# sourceURL=webpack://my-webpack-project/./src/scripts/pub.js?");

/***/ })

}]);