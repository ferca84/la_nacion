webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_BannerTop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/BannerTop */ \"./components/BannerTop.js\");\n/* harmony import */ var _components_SidebarRight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SidebarRight */ \"./components/SidebarRight.js\");\n/* harmony import */ var _components_SidebarMain__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SidebarMain */ \"./components/SidebarMain.js\");\n/* harmony import */ var _components_context_articlesContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/context/articlesContext */ \"./components/context/articlesContext.js\");\n/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/api */ \"./lib/api.js\");\n/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/constants */ \"./lib/constants.js\");\nvar _this = undefined,\n    _jsxFileName = \"E:\\\\Web\\\\xampp\\\\htdocs\\\\la_nacion\\\\la_nacion\\\\1erEjercicio\\\\pages\\\\index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\nvar indexPage = function indexPage(_ref) {\n  _s();\n\n  var articles = _ref.articles,\n      isServerRendered = _ref.isServerRendered;\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    // When the page is server-rendered,\n    // we override the value in the client cache\n    //if (isServerRendered) {\n    console.log('page dentro de effect');\n    Object(_lib_api__WEBPACK_IMPORTED_MODULE_5__[\"overrideCache\"])(_lib_constants__WEBPACK_IMPORTED_MODULE_6__[\"API_URL\"], articles); // }\n  }, []);\n  return __jsx(\"main\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }\n  }, __jsx(_components_BannerTop__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 13\n    }\n  }), __jsx(\"div\", {\n    className: \"lay-sidebar\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 13\n    }\n  }, __jsx(_components_context_articlesContext__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Provider, {\n    value: {\n      articles: articles\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 17\n    }\n  }, __jsx(_components_SidebarMain__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 21\n    }\n  })), __jsx(_components_SidebarRight__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 17\n    }\n  })));\n}; //function que es llamada en cada request de la página. Solo será renderizada cuando esten los datos (mejor para el SEO)\n\n\n_s(indexPage, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (indexPage);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbImluZGV4UGFnZSIsImFydGljbGVzIiwiaXNTZXJ2ZXJSZW5kZXJlZCIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJvdmVycmlkZUNhY2hlIiwiQVBJX1VSTCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBb0M7QUFBQTs7QUFBQSxNQUFqQ0MsUUFBaUMsUUFBakNBLFFBQWlDO0FBQUEsTUFBdkJDLGdCQUF1QixRQUF2QkEsZ0JBQXVCO0FBRWxEQyx5REFBUyxDQUFDLFlBQU07QUFDWjtBQUNBO0FBQ0E7QUFDSUMsV0FBTyxDQUFDQyxHQUFSLENBQVksdUJBQVo7QUFDQUMsa0VBQWEsQ0FBQ0Msc0RBQUQsRUFBVU4sUUFBVixDQUFiLENBTFEsQ0FNWDtBQUNBLEdBUEksRUFPRixFQVBFLENBQVQ7QUFTQSxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFSSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixFQUlJO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVJLE1BQUMsMkVBQUQsQ0FBaUIsUUFBakI7QUFBMEIsU0FBSyxFQUFFO0FBQUVBLGNBQVEsRUFBUkE7QUFBRixLQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FGSixFQU1JLE1BQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5KLENBSkosQ0FESjtBQWdCSCxDQTNCRCxDLENBNkJBOzs7R0E3Qk1ELFM7OztBQXVDU0Esd0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEJhbm5lclRvcCBmcm9tICcuLi9jb21wb25lbnRzL0Jhbm5lclRvcCdcclxuaW1wb3J0IFNpZGViYXJSaWdodCBmcm9tICcuLi9jb21wb25lbnRzL1NpZGViYXJSaWdodCdcclxuaW1wb3J0IFNpZGViYXJNYWluIGZyb20gJy4uL2NvbXBvbmVudHMvU2lkZWJhck1haW4nXHJcbmltcG9ydCBBcnRpY2xlc0NvbnRleHQgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29udGV4dC9hcnRpY2xlc0NvbnRleHRcIjtcclxuaW1wb3J0IHsgZ2V0QXJ0aWNsZXMsIG92ZXJyaWRlQ2FjaGUgfSBmcm9tICcuLi9saWIvYXBpJ1xyXG5pbXBvcnQgeyBBUElfVVJMIH0gZnJvbSAnLi4vbGliL2NvbnN0YW50cyc7XHJcblxyXG5cclxuY29uc3QgaW5kZXhQYWdlID0gKHsgYXJ0aWNsZXMsIGlzU2VydmVyUmVuZGVyZWQgfSkgPT4ge1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgLy8gV2hlbiB0aGUgcGFnZSBpcyBzZXJ2ZXItcmVuZGVyZWQsXHJcbiAgICAgICAgLy8gd2Ugb3ZlcnJpZGUgdGhlIHZhbHVlIGluIHRoZSBjbGllbnQgY2FjaGVcclxuICAgICAgICAvL2lmIChpc1NlcnZlclJlbmRlcmVkKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwYWdlIGRlbnRybyBkZSBlZmZlY3QnKVxyXG4gICAgICAgICAgICBvdmVycmlkZUNhY2hlKEFQSV9VUkwsIGFydGljbGVzKTtcclxuICAgICAgICAgLy8gfVxyXG4gICAgICAgIH0sIFtdKVxyXG4gICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPG1haW4+XHJcblxyXG4gICAgICAgICAgICA8QmFubmVyVG9wIC8+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxheS1zaWRlYmFyXCI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPEFydGljbGVzQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBhcnRpY2xlcyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8U2lkZWJhck1haW4gLz5cclxuICAgICAgICAgICAgICAgIDwvQXJ0aWNsZXNDb250ZXh0LlByb3ZpZGVyPlxyXG5cclxuICAgICAgICAgICAgICAgIDxTaWRlYmFyUmlnaHQgLz5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgIClcclxufVxyXG5cclxuLy9mdW5jdGlvbiBxdWUgZXMgbGxhbWFkYSBlbiBjYWRhIHJlcXVlc3QgZGUgbGEgcMOhZ2luYS4gU29sbyBzZXLDoSByZW5kZXJpemFkYSBjdWFuZG8gZXN0ZW4gbG9zIGRhdG9zIChtZWpvciBwYXJhIGVsIFNFTylcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQgKSB7XHJcbiAgICBjb25zdCBhcnRpY2xlcyA9IGF3YWl0IGdldEFydGljbGVzKCk7XHJcbiAgICBjb25zdCBpc1NlcnZlclJlbmRlcmVkID0gISFjb250ZXh0LnJlcTtcclxuICAgIGNvbnNvbGUubG9nKCdwYXNvIHBvciBnZXQgc3RhdGljIHByb3AgJyArIGlzU2VydmVyUmVuZGVyZWQpXHJcbiAgICAvL2NvbnN0IGFydGljbGVzID0gYXdhaXQgZ2V0QXJ0aWNsZXMoKTtcclxuICAgIC8vIExlIGVudmlvIGEgbGEgcMOhZ2luYSBsb3MgYXJ0aWN1bG9zIHZpYSBwcm9wc1xyXG4gICAgcmV0dXJuIHsgcHJvcHM6IHsgYXJ0aWNsZXMsIGlzU2VydmVyUmVuZGVyZWQgfSB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4UGFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})