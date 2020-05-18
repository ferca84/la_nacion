webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/ListArticle.js":
/*!***********************************!*\
  !*** ./components/ListArticle.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Article__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Article */ \"./components/Article.js\");\n/* harmony import */ var _components_context_articlesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/context/articlesContext */ \"./components/context/articlesContext.js\");\nvar _this = undefined,\n    _jsxFileName = \"E:\\\\Web\\\\xampp\\\\htdocs\\\\la_nacion\\\\la_nacion\\\\1erEjercicio\\\\components\\\\ListArticle.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar ListArticle = function ListArticle(props) {\n  _s();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_components_context_articlesContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n      articles = _useContext.articles,\n      expanded = _useContext.expanded;\n\n  var articlesFiltered = articles.filter(function (art) {\n    return art.subtype === \"7\";\n  });\n\n  var renderArticles = function renderArticles(articles) {\n    //Si el usuario presiono el botón ver mas articulos, se muestran todos, sino solo los primeros 8\n    var articlesToShow = expanded ? articles : articles.slice(0, 8);\n    return articlesToShow.map(function (article) {\n      return __jsx(_Article__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        key: article._id,\n        article: article,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 15,\n          columnNumber: 20\n        }\n      });\n    });\n  };\n\n  return __jsx(\"section\", {\n    className: \"row-gap-tablet-2 row-gap-deskxl-3 hlp-degrade\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 9\n    }\n  }, articlesFiltered.length === 0 && __jsx(\"p\", {\n    className: \"row\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 47\n    }\n  }, \"No se han encontrado articulos\"), articlesFiltered.length >= 0 && renderArticles(articlesFiltered), __jsx(\"div\", {\n    className: \"transparency\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }\n  }));\n};\n\n_s(ListArticle, \"IpFnWykOQpd3Ax0DUhJbx8MxOOo=\");\n\n_c = ListArticle;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ListArticle);\n\nvar _c;\n\n$RefreshReg$(_c, \"ListArticle\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xpc3RBcnRpY2xlLmpzPzAxNjUiXSwibmFtZXMiOlsiTGlzdEFydGljbGUiLCJwcm9wcyIsInVzZUNvbnRleHQiLCJBcnRpY2xlc0NvbnRleHQiLCJhcnRpY2xlcyIsImV4cGFuZGVkIiwiYXJ0aWNsZXNGaWx0ZXJlZCIsImZpbHRlciIsImFydCIsInN1YnR5cGUiLCJyZW5kZXJBcnRpY2xlcyIsImFydGljbGVzVG9TaG93Iiwic2xpY2UiLCJtYXAiLCJhcnRpY2xlIiwiX2lkIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLG9CQUVFQyx3REFBVSxDQUFDQywyRUFBRCxDQUZaO0FBQUEsTUFFcEJDLFFBRm9CLGVBRXBCQSxRQUZvQjtBQUFBLE1BRVZDLFFBRlUsZUFFVkEsUUFGVTs7QUFJM0IsTUFBTUMsZ0JBQWdCLEdBQUdGLFFBQVEsQ0FBQ0csTUFBVCxDQUFpQixVQUFBQyxHQUFHO0FBQUEsV0FBSUEsR0FBRyxDQUFDQyxPQUFKLEtBQWdCLEdBQXBCO0FBQUEsR0FBcEIsQ0FBekI7O0FBRUEsTUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFBTixRQUFRLEVBQUk7QUFDL0I7QUFDQSxRQUFNTyxjQUFjLEdBQUdOLFFBQVEsR0FBR0QsUUFBSCxHQUFjQSxRQUFRLENBQUNRLEtBQVQsQ0FBZSxDQUFmLEVBQWtCLENBQWxCLENBQTdDO0FBQ0EsV0FBT0QsY0FBYyxDQUFDRSxHQUFmLENBQW1CLFVBQUFDLE9BQU8sRUFBSTtBQUNqQyxhQUFPLE1BQUMsZ0RBQUQ7QUFBUyxXQUFHLEVBQUVBLE9BQU8sQ0FBQ0MsR0FBdEI7QUFBMkIsZUFBTyxFQUFFRCxPQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQVA7QUFDSCxLQUZNLENBQVA7QUFHSCxHQU5EOztBQVFBLFNBQ0k7QUFBUyxhQUFTLEVBQUMsK0NBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS1IsZ0JBQWdCLENBQUNVLE1BQWpCLEtBQTRCLENBQTVCLElBQWlDO0FBQUcsYUFBUyxFQUFDLEtBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQ0FEdEMsRUFFS1YsZ0JBQWdCLENBQUNVLE1BQWpCLElBQTJCLENBQTNCLElBQWdDTixjQUFjLENBQUNKLGdCQUFELENBRm5ELEVBR0k7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEosQ0FESjtBQVFILENBdEJEOztHQUFNTixXOztLQUFBQSxXO0FBd0JTQSwwRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTGlzdEFydGljbGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBcnRpY2xlIGZyb20gJy4vQXJ0aWNsZSdcbmltcG9ydCBBcnRpY2xlc0NvbnRleHQgZnJvbSAnLi4vY29tcG9uZW50cy9jb250ZXh0L2FydGljbGVzQ29udGV4dCdcblxuY29uc3QgTGlzdEFydGljbGUgPSAocHJvcHMpID0+IHtcblxuICAgIGNvbnN0IHthcnRpY2xlcywgZXhwYW5kZWR9ID0gdXNlQ29udGV4dChBcnRpY2xlc0NvbnRleHQpXG5cbiAgICBjb25zdCBhcnRpY2xlc0ZpbHRlcmVkID0gYXJ0aWNsZXMuZmlsdGVyKChhcnQgPT4gYXJ0LnN1YnR5cGUgPT09IFwiN1wiKSlcblxuICAgIGNvbnN0IHJlbmRlckFydGljbGVzID0gYXJ0aWNsZXMgPT4ge1xuICAgICAgICAvL1NpIGVsIHVzdWFyaW8gcHJlc2lvbm8gZWwgYm90w7NuIHZlciBtYXMgYXJ0aWN1bG9zLCBzZSBtdWVzdHJhbiB0b2Rvcywgc2lubyBzb2xvIGxvcyBwcmltZXJvcyA4XG4gICAgICAgIGNvbnN0IGFydGljbGVzVG9TaG93ID0gZXhwYW5kZWQgPyBhcnRpY2xlcyA6IGFydGljbGVzLnNsaWNlKDAsIDgpO1xuICAgICAgICByZXR1cm4gYXJ0aWNsZXNUb1Nob3cubWFwKGFydGljbGUgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIDxBcnRpY2xlIGtleT17YXJ0aWNsZS5faWR9IGFydGljbGU9e2FydGljbGV9IC8+XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicm93LWdhcC10YWJsZXQtMiByb3ctZ2FwLWRlc2t4bC0zIGhscC1kZWdyYWRlXCI+XG4gICAgICAgICAgICB7YXJ0aWNsZXNGaWx0ZXJlZC5sZW5ndGggPT09IDAgJiYgPHAgY2xhc3NOYW1lPVwicm93XCI+Tm8gc2UgaGFuIGVuY29udHJhZG8gYXJ0aWN1bG9zPC9wPn1cbiAgICAgICAgICAgIHthcnRpY2xlc0ZpbHRlcmVkLmxlbmd0aCA+PSAwICYmIHJlbmRlckFydGljbGVzKGFydGljbGVzRmlsdGVyZWQpfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmFuc3BhcmVuY3lcIiA+PC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICApXG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IExpc3RBcnRpY2xlOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ListArticle.js\n");

/***/ })

})