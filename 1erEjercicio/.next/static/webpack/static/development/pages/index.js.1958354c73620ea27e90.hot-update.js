webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/TagsMenu.js":
/*!********************************!*\
  !*** ./components/TagsMenu.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_context_articlesContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/context/articlesContext */ \"./components/context/articlesContext.js\");\n/* harmony import */ var _TagItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TagItem */ \"./components/TagItem.js\");\nvar _this = undefined,\n    _jsxFileName = \"E:\\\\Web\\\\xampp\\\\htdocs\\\\la_nacion\\\\la_nacion\\\\1erEjercicio\\\\components\\\\TagsMenu.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar TagsMenu = function TagsMenu() {\n  _s();\n\n  //estado interno para evaluar si el componente ha sido montado o no para evitar dif entre server render y client render\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isMounted = _useState[0],\n      setIsMounted = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    setIsMounted(true);\n  }, []);\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_components_context_articlesContext__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n      articles = _useContext.articles; //Creo un único array con todos los tags de cada artículo\n\n\n  var singleArray = articles.reduce(function (data, articulo) {\n    return data.concat(articulo.taxonomy.tags);\n  }, []); //Creo un objeto donde cada key-value representa un slug y la cantidad de repeticiones\n\n  var group = singleArray.reduce(function (data, tag) {\n    data[tag.slug] = data[tag.slug] ? {\n      'cantidad': data[tag.slug].cantidad + 1,\n      'tag': tag\n    } : {\n      'cantidad': 1,\n      'tag': tag\n    };\n    return data;\n  }, {}); //console.log(tagsSorted)\n  //Obtengo los primeros 10 elementos de un array de tags ordenados de mayor a menor segun su cantidad de aparaciones\n\n  var tagsSorted = Object.keys(group).sort(function (a, b) {\n    return group[b].cantidad - group[a].cantidad || group[a].tag.text.charCodeAt(0) - group[b].tag.text.charCodeAt(0);\n  });\n  var tagFilter = tagsSorted.map(function (slug) {\n    return group[slug];\n  }).slice(0, 10);\n  console.log(tagFilter);\n\n  var renderTags = function renderTags(tags) {\n    return tags.map(function (item, i) {\n      console.log(item); //return <TagItem key={item.tag.slug} slug={item.tag.slug}>{item.tag.text}</TagItem>\n\n      return __jsx(_TagItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        key: item.tag.slug,\n        slug: item.tag.slug,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 20\n        }\n      }, item.tag.text);\n    });\n  };\n\n  return __jsx(\"div\", {\n    className: \"row\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    id: \"\",\n    className: \"cont_tags com-secondary-tag hlp-marginBottom-20\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 13\n    }\n  }, //preguntar si el componente esta montado para renderizar correctamente los tags, sino habia inconsistencias entre server y client\n  renderTags(tagFilter)));\n};\n\n_s(TagsMenu, \"7O8LTNfiKzuyes+ICOFzViOG0gQ=\");\n\n_c = TagsMenu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TagsMenu);\n\nvar _c;\n\n$RefreshReg$(_c, \"TagsMenu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RhZ3NNZW51LmpzP2YzYTciXSwibmFtZXMiOlsiVGFnc01lbnUiLCJ1c2VTdGF0ZSIsImlzTW91bnRlZCIsInNldElzTW91bnRlZCIsInVzZUVmZmVjdCIsInVzZUNvbnRleHQiLCJBcnRpY2xlc0NvbnRleHQiLCJhcnRpY2xlcyIsInNpbmdsZUFycmF5IiwicmVkdWNlIiwiZGF0YSIsImFydGljdWxvIiwiY29uY2F0IiwidGF4b25vbXkiLCJ0YWdzIiwiZ3JvdXAiLCJ0YWciLCJzbHVnIiwiY2FudGlkYWQiLCJ0YWdzU29ydGVkIiwiT2JqZWN0Iiwia2V5cyIsInNvcnQiLCJhIiwiYiIsInRleHQiLCJjaGFyQ29kZUF0IiwidGFnRmlsdGVyIiwibWFwIiwic2xpY2UiLCJjb25zb2xlIiwibG9nIiwicmVuZGVyVGFncyIsIml0ZW0iLCJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFFbkI7QUFGbUIsa0JBR2VDLHNEQUFRLENBQUMsS0FBRCxDQUh2QjtBQUFBLE1BR1pDLFNBSFk7QUFBQSxNQUdEQyxZQUhDOztBQUtuQkMseURBQVMsQ0FBQyxZQUFNO0FBQ1pELGdCQUFZLENBQUMsSUFBRCxDQUFaO0FBQ0gsR0FGUSxFQUVOLEVBRk0sQ0FBVDs7QUFMbUIsb0JBU0FFLHdEQUFVLENBQUNDLDJFQUFELENBVFY7QUFBQSxNQVNaQyxRQVRZLGVBU1pBLFFBVFksRUFXbkI7OztBQUNBLE1BQU1DLFdBQVcsR0FBR0QsUUFBUSxDQUFDRSxNQUFULENBQWdCLFVBQUNDLElBQUQsRUFBT0MsUUFBUCxFQUFvQjtBQUNwRCxXQUFPRCxJQUFJLENBQUNFLE1BQUwsQ0FBWUQsUUFBUSxDQUFDRSxRQUFULENBQWtCQyxJQUE5QixDQUFQO0FBQ0gsR0FGbUIsRUFFakIsRUFGaUIsQ0FBcEIsQ0FabUIsQ0FnQm5COztBQUNBLE1BQU1DLEtBQUssR0FBR1AsV0FBVyxDQUFDQyxNQUFaLENBQW1CLFVBQUNDLElBQUQsRUFBT00sR0FBUCxFQUFlO0FBQzVDTixRQUFJLENBQUNNLEdBQUcsQ0FBQ0MsSUFBTCxDQUFKLEdBQWlCUCxJQUFJLENBQUNNLEdBQUcsQ0FBQ0MsSUFBTCxDQUFKLEdBQWlCO0FBQUUsa0JBQWFQLElBQUksQ0FBQ00sR0FBRyxDQUFDQyxJQUFMLENBQUosQ0FBZUMsUUFBZixHQUEwQixDQUF6QztBQUE2QyxhQUFPRjtBQUFwRCxLQUFqQixHQUE2RTtBQUFFLGtCQUFZLENBQWQ7QUFBaUIsYUFBT0E7QUFBeEIsS0FBOUY7QUFDQSxXQUFPTixJQUFQO0FBQ0gsR0FIYSxFQUdYLEVBSFcsQ0FBZCxDQWpCbUIsQ0FxQm5CO0FBQ0E7O0FBQ0EsTUFBTVMsVUFBVSxHQUFHQyxNQUFNLENBQUNDLElBQVAsQ0FBWU4sS0FBWixFQUFtQk8sSUFBbkIsQ0FBd0IsVUFBVUMsQ0FBVixFQUFhQyxDQUFiLEVBQWdCO0FBQUUsV0FBT1QsS0FBSyxDQUFDUyxDQUFELENBQUwsQ0FBU04sUUFBVCxHQUFvQkgsS0FBSyxDQUFDUSxDQUFELENBQUwsQ0FBU0wsUUFBN0IsSUFBeUNILEtBQUssQ0FBQ1EsQ0FBRCxDQUFMLENBQVNQLEdBQVQsQ0FBYVMsSUFBYixDQUFrQkMsVUFBbEIsQ0FBNkIsQ0FBN0IsSUFBa0NYLEtBQUssQ0FBQ1MsQ0FBRCxDQUFMLENBQVNSLEdBQVQsQ0FBYVMsSUFBYixDQUFrQkMsVUFBbEIsQ0FBNkIsQ0FBN0IsQ0FBbEY7QUFBbUgsR0FBN0osQ0FBbkI7QUFFQSxNQUFNQyxTQUFTLEdBQUdSLFVBQVUsQ0FBQ1MsR0FBWCxDQUFlLFVBQUFYLElBQUk7QUFBQSxXQUFJRixLQUFLLENBQUNFLElBQUQsQ0FBVDtBQUFBLEdBQW5CLEVBQ0dZLEtBREgsQ0FDUyxDQURULEVBQ1ksRUFEWixDQUFsQjtBQUlBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUosU0FBWjs7QUFDQSxNQUFNSyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFBbEIsSUFBSSxFQUFJO0FBQ3ZCLFdBQU9BLElBQUksQ0FBQ2MsR0FBTCxDQUFTLFVBQUNLLElBQUQsRUFBTUMsQ0FBTixFQUFZO0FBQ3hCSixhQUFPLENBQUNDLEdBQVIsQ0FBWUUsSUFBWixFQUR3QixDQUV4Qjs7QUFDQSxhQUFPLE1BQUMsZ0RBQUQ7QUFBUyxXQUFHLEVBQUVBLElBQUksQ0FBQ2pCLEdBQUwsQ0FBU0MsSUFBdkI7QUFBNkIsWUFBSSxFQUFFZ0IsSUFBSSxDQUFDakIsR0FBTCxDQUFTQyxJQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQW1EZ0IsSUFBSSxDQUFDakIsR0FBTCxDQUFTUyxJQUE1RCxDQUFQO0FBQ0gsS0FKTSxDQUFQO0FBS0gsR0FORDs7QUFRQSxTQUNJO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssTUFBRSxFQUFDLEVBQVI7QUFBVyxhQUFTLEVBQUMsaURBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFSTtBQUNBTyxZQUFVLENBQUNMLFNBQUQsQ0FIZCxDQURKLENBREo7QUFVSCxDQWhERDs7R0FBTTNCLFE7O0tBQUFBLFE7QUFrRFNBLHVFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9UYWdzTWVudS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQXJ0aWNsZXNDb250ZXh0IGZyb20gJy4uL2NvbXBvbmVudHMvY29udGV4dC9hcnRpY2xlc0NvbnRleHQnXHJcbmltcG9ydCBUYWdJdGVtIGZyb20gJy4vVGFnSXRlbSc7XHJcblxyXG5jb25zdCBUYWdzTWVudSA9ICgpID0+IHtcclxuXHJcbiAgICAvL2VzdGFkbyBpbnRlcm5vIHBhcmEgZXZhbHVhciBzaSBlbCBjb21wb25lbnRlIGhhIHNpZG8gbW9udGFkbyBvIG5vIHBhcmEgZXZpdGFyIGRpZiBlbnRyZSBzZXJ2ZXIgcmVuZGVyIHkgY2xpZW50IHJlbmRlclxyXG4gICAgY29uc3QgW2lzTW91bnRlZCwgc2V0SXNNb3VudGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0SXNNb3VudGVkKHRydWUpXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICBjb25zdCB7YXJ0aWNsZXN9ID0gdXNlQ29udGV4dChBcnRpY2xlc0NvbnRleHQpXHJcblxyXG4gICAgLy9DcmVvIHVuIMO6bmljbyBhcnJheSBjb24gdG9kb3MgbG9zIHRhZ3MgZGUgY2FkYSBhcnTDrWN1bG9cclxuICAgIGNvbnN0IHNpbmdsZUFycmF5ID0gYXJ0aWNsZXMucmVkdWNlKChkYXRhLCBhcnRpY3VsbykgPT4ge1xyXG4gICAgICAgIHJldHVybiBkYXRhLmNvbmNhdChhcnRpY3Vsby50YXhvbm9teS50YWdzKVxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIC8vQ3JlbyB1biBvYmpldG8gZG9uZGUgY2FkYSBrZXktdmFsdWUgcmVwcmVzZW50YSB1biBzbHVnIHkgbGEgY2FudGlkYWQgZGUgcmVwZXRpY2lvbmVzXHJcbiAgICBjb25zdCBncm91cCA9IHNpbmdsZUFycmF5LnJlZHVjZSgoZGF0YSwgdGFnKSA9PiB7XHJcbiAgICAgICAgZGF0YVt0YWcuc2x1Z10gPSBkYXRhW3RhZy5zbHVnXSA/IHsgJ2NhbnRpZGFkJzogKGRhdGFbdGFnLnNsdWddLmNhbnRpZGFkICsgMSksICd0YWcnOiB0YWcgfSA6IHsgJ2NhbnRpZGFkJzogMSwgJ3RhZyc6IHRhZyB9O1xyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSwge30pXHJcbiAgICAvL2NvbnNvbGUubG9nKHRhZ3NTb3J0ZWQpXHJcbiAgICAvL09idGVuZ28gbG9zIHByaW1lcm9zIDEwIGVsZW1lbnRvcyBkZSB1biBhcnJheSBkZSB0YWdzIG9yZGVuYWRvcyBkZSBtYXlvciBhIG1lbm9yIHNlZ3VuIHN1IGNhbnRpZGFkIGRlIGFwYXJhY2lvbmVzXHJcbiAgICBjb25zdCB0YWdzU29ydGVkID0gT2JqZWN0LmtleXMoZ3JvdXApLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGdyb3VwW2JdLmNhbnRpZGFkIC0gZ3JvdXBbYV0uY2FudGlkYWQgfHwgZ3JvdXBbYV0udGFnLnRleHQuY2hhckNvZGVBdCgwKSAtIGdyb3VwW2JdLnRhZy50ZXh0LmNoYXJDb2RlQXQoMCkgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgIGNvbnN0IHRhZ0ZpbHRlciA9IHRhZ3NTb3J0ZWQubWFwKHNsdWcgPT4gZ3JvdXBbc2x1Z10pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZSgwLCAxMCk7XHJcbiAgICBcclxuICAgIFxyXG4gICAgY29uc29sZS5sb2codGFnRmlsdGVyKVxyXG4gICAgY29uc3QgcmVuZGVyVGFncyA9IHRhZ3MgPT4ge1xyXG4gICAgICAgIHJldHVybiB0YWdzLm1hcCgoaXRlbSxpKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW0pXHJcbiAgICAgICAgICAgIC8vcmV0dXJuIDxUYWdJdGVtIGtleT17aXRlbS50YWcuc2x1Z30gc2x1Zz17aXRlbS50YWcuc2x1Z30+e2l0ZW0udGFnLnRleHR9PC9UYWdJdGVtPlxyXG4gICAgICAgICAgICByZXR1cm4gPFRhZ0l0ZW0ga2V5PXtpdGVtLnRhZy5zbHVnfSBzbHVnPXtpdGVtLnRhZy5zbHVnfT57aXRlbS50YWcudGV4dH08L1RhZ0l0ZW0+XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJcIiBjbGFzc05hbWU9XCJjb250X3RhZ3MgY29tLXNlY29uZGFyeS10YWcgaGxwLW1hcmdpbkJvdHRvbS0yMFwiPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy9wcmVndW50YXIgc2kgZWwgY29tcG9uZW50ZSBlc3RhIG1vbnRhZG8gcGFyYSByZW5kZXJpemFyIGNvcnJlY3RhbWVudGUgbG9zIHRhZ3MsIHNpbm8gaGFiaWEgaW5jb25zaXN0ZW5jaWFzIGVudHJlIHNlcnZlciB5IGNsaWVudFxyXG4gICAgICAgICAgICAgICAgcmVuZGVyVGFncyh0YWdGaWx0ZXIpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFnc01lbnU7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/TagsMenu.js\n");

/***/ })

})