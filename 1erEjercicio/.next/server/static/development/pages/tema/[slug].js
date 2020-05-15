module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/api.js":
/*!********************!*\
  !*** ./lib/api.js ***!
  \********************/
/*! exports provided: getArticles, getSlugs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getArticles", function() { return getArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSlugs", function() { return getSlugs; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _test_dummy_slugs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../test/dummy-slugs */ "./test/dummy-slugs.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./lib/constants.js");




async function fetchAPI(url, options) {
  const res = await fetch(url, options);
  const json = await res.json();

  if (json.errors) {
    console.error(json.errors);
    throw new Error('Error en traer datos de la API');
  }

  return json;
}

async function getArticles() {
  //console.log('pase por getArticles')
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const data = await fetchAPI(_constants__WEBPACK_IMPORTED_MODULE_2__["API_URL"], options); //Si no llegara a encontrarse articulos, paso un array vacio para que el resto de la página se renderize

  return data.articles ? data.articles : [];
}
function getSlugs() {
  const data = _test_dummy_slugs__WEBPACK_IMPORTED_MODULE_1__["slugs"];
  return data;
}

/***/ }),

/***/ "./lib/constants.js":
/*!**************************!*\
  !*** ./lib/constants.js ***!
  \**************************/
/*! exports provided: API_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
const API_URL = `https://api-test-ln.herokuapp.com/articles`;

/***/ }),

/***/ "./pages/tema/[slug].js":
/*!******************************!*\
  !*** ./pages/tema/[slug].js ***!
  \******************************/
/*! exports provided: default, getStaticProps, getStaticPaths */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return getStaticPaths; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/api */ "./lib/api.js");
var _jsxFileName = "E:\\Web\\xampp\\htdocs\\la_nacion\\la_nacion\\1erEjercicio\\pages\\tema\\[slug].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (({
  slug
}) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])(); // Si la pagina todavia no fue generada, se mostrara esto hasta tanto getStaticProps termine

  if (router.isFallback) {
    return __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 12
      }
    }, "Cargando...");
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h1", {
    className: "com-title-section-xl hlp-marginBottom-40",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, "Slug Buscado ", slug));
});
async function getStaticProps({
  params
}) {
  const slug = params.slug;
  return {
    props: {
      slug
    }
  };
}
async function getStaticPaths() {
  const slugs = Object(_lib_api__WEBPACK_IMPORTED_MODULE_2__["getSlugs"])();
  return {
    paths: slugs.map(slug => {
      return {
        params: {
          slug: slug
        }
      };
    }),
    fallback: true // Habilita generación de paginas staticas adicionales

  };
}

/***/ }),

/***/ "./test/dummy-slugs.js":
/*!*****************************!*\
  !*** ./test/dummy-slugs.js ***!
  \*****************************/
/*! exports provided: slugs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slugs", function() { return slugs; });
const slugs = ["leche-tid47244", "canela-tid47164", "huevo-tid47236", "arroz-tid47136", "azucar-tid47141", "manteca-tid47257", "harina-0000-tid48184", "ajo-tid47126", "frutas-tid67217", "pescados-tid67216", "perejil-tid47297"];

/***/ }),

/***/ 3:
/*!************************************!*\
  !*** multi ./pages/tema/[slug].js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Web\xampp\htdocs\la_nacion\la_nacion\1erEjercicio\pages\tema\[slug].js */"./pages/tema/[slug].js");


/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL3RlbWEvW3NsdWddLmpzIiwid2VicGFjazovLy8uL3Rlc3QvZHVtbXktc2x1Z3MuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbImZldGNoQVBJIiwidXJsIiwib3B0aW9ucyIsInJlcyIsImZldGNoIiwianNvbiIsImVycm9ycyIsImNvbnNvbGUiLCJlcnJvciIsIkVycm9yIiwiZ2V0QXJ0aWNsZXMiLCJtZXRob2QiLCJoZWFkZXJzIiwiZGF0YSIsIkFQSV9VUkwiLCJhcnRpY2xlcyIsImdldFNsdWdzIiwic2x1Z3MiLCJzbHVnIiwicm91dGVyIiwidXNlUm91dGVyIiwiaXNGYWxsYmFjayIsImdldFN0YXRpY1Byb3BzIiwicGFyYW1zIiwicHJvcHMiLCJnZXRTdGF0aWNQYXRocyIsInBhdGhzIiwibWFwIiwiZmFsbGJhY2siXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlD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Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHRlbWFcXFtzbHVnXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtzbHVnc30gZnJvbSAnLi4vdGVzdC9kdW1teS1zbHVncydcclxuaW1wb3J0IHsgQVBJX1VSTCB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGZldGNoQVBJKHVybCwgb3B0aW9ucykge1xyXG5cclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwsIG9wdGlvbnMpXHJcblxyXG4gIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpXHJcbiAgaWYgKGpzb24uZXJyb3JzKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGpzb24uZXJyb3JzKVxyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdFcnJvciBlbiB0cmFlciBkYXRvcyBkZSBsYSBBUEknKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGpzb247XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBcnRpY2xlcygpIHtcclxuICAvL2NvbnNvbGUubG9nKCdwYXNlIHBvciBnZXRBcnRpY2xlcycpXHJcbiAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaEFQSShBUElfVVJMLCBvcHRpb25zKTtcclxuICAvL1NpIG5vIGxsZWdhcmEgYSBlbmNvbnRyYXJzZSBhcnRpY3Vsb3MsIHBhc28gdW4gYXJyYXkgdmFjaW8gcGFyYSBxdWUgZWwgcmVzdG8gZGUgbGEgcMOhZ2luYSBzZSByZW5kZXJpemVcclxuICByZXR1cm4gZGF0YS5hcnRpY2xlcyA/IGRhdGEuYXJ0aWNsZXMgOiBbXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFNsdWdzKCkge1xyXG4gIGNvbnN0IGRhdGEgPSBzbHVncztcclxuICByZXR1cm4gZGF0YTtcclxufSIsImV4cG9ydCBjb25zdCBBUElfVVJMID0gYGh0dHBzOi8vYXBpLXRlc3QtbG4uaGVyb2t1YXBwLmNvbS9hcnRpY2xlc2A7IiwiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IGdldFNsdWdzIH0gZnJvbSAnLi4vLi4vbGliL2FwaSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICh7c2x1Z30pID0+IHtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgLy8gU2kgbGEgcGFnaW5hIHRvZGF2aWEgbm8gZnVlIGdlbmVyYWRhLCBzZSBtb3N0cmFyYSBlc3RvIGhhc3RhIHRhbnRvIGdldFN0YXRpY1Byb3BzIHRlcm1pbmVcclxuICBpZiAocm91dGVyLmlzRmFsbGJhY2spIHtcclxuICAgIHJldHVybiA8ZGl2PkNhcmdhbmRvLi4uPC9kaXY+XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cImNvbS10aXRsZS1zZWN0aW9uLXhsIGhscC1tYXJnaW5Cb3R0b20tNDBcIj5TbHVnIEJ1c2NhZG8ge3NsdWd9PC9oMT5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHtwYXJhbXN9KSB7XHJcbiAgY29uc3Qgc2x1ZyA9IHBhcmFtcy5zbHVnO1xyXG4gIHJldHVybiB7IHByb3BzOiB7IHNsdWcgfSB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICBjb25zdCBzbHVncyA9IGdldFNsdWdzKClcclxuICByZXR1cm4ge1xyXG4gICAgcGF0aHM6IHNsdWdzLm1hcChzbHVnID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgIHNsdWc6IHNsdWcsXHJcbiAgICAgICAgfSxcclxuICAgICAgfVxyXG4gICAgfSksXHJcbiAgICBmYWxsYmFjazogdHJ1ZSwvLyBIYWJpbGl0YSBnZW5lcmFjacOzbiBkZSBwYWdpbmFzIHN0YXRpY2FzIGFkaWNpb25hbGVzXHJcbiAgfVxyXG59IiwiZXhwb3J0IGNvbnN0IHNsdWdzID0gW1xyXG4gICAgICAgIFwibGVjaGUtdGlkNDcyNDRcIiwgXHJcbiAgICAgICAgXCJjYW5lbGEtdGlkNDcxNjRcIiwgXHJcbiAgICAgICAgXCJodWV2by10aWQ0NzIzNlwiLCBcclxuICAgICAgICBcImFycm96LXRpZDQ3MTM2XCIsIFxyXG4gICAgICAgIFwiYXp1Y2FyLXRpZDQ3MTQxXCIsIFxyXG4gICAgICAgIFwibWFudGVjYS10aWQ0NzI1N1wiLCBcclxuICAgICAgICBcImhhcmluYS0wMDAwLXRpZDQ4MTg0XCIsIFxyXG4gICAgICAgIFwiYWpvLXRpZDQ3MTI2XCIsIFxyXG4gICAgICAgIFwiZnJ1dGFzLXRpZDY3MjE3XCIsIFxyXG4gICAgICAgIFwicGVzY2Fkb3MtdGlkNjcyMTZcIiwgXHJcbiAgICAgICAgXCJwZXJlamlsLXRpZDQ3Mjk3XCJcclxuICAgIF1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==