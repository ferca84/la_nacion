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

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ulIJ");


/***/ }),

/***/ "5Yp1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./components/BannerTop.js
var __jsx = external_react_default.a.createElement;


const BannerTop = () => __jsx("div", {
  className: "banner w-100 --bg-banner"
}, __jsx("div", {
  className: "banner --top --desktop"
}), __jsx("div", {
  className: "banner --top --tablet"
}), __jsx("div", {
  className: "banner --top --mobile"
}));

/* harmony default export */ var components_BannerTop = (BannerTop);
// CONCATENATED MODULE: ./components/SidebarRight.js
var SidebarRight_jsx = external_react_default.a.createElement;


const SidebarRight = () => SidebarRight_jsx("div", {
  className: "sidebar__aside"
}, SidebarRight_jsx("div", {
  className: "banner --desktop --large"
}), SidebarRight_jsx("div", {
  className: "com-ranking hlp-none hlp-tablet-none"
}));

/* harmony default export */ var components_SidebarRight = (SidebarRight);
// CONCATENATED MODULE: ./components/Layout.js
var Layout_jsx = external_react_default.a.createElement;




const Layout = props => {
  return Layout_jsx(external_react_default.a.Fragment, null, Layout_jsx(components_BannerTop, null), Layout_jsx("div", {
    className: "lay-sidebar"
  }, Layout_jsx("div", {
    className: "sidebar__main"
  }, props.children), Layout_jsx(components_SidebarRight, null)));
};

/* harmony default export */ var components_Layout = __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "qoWs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ getArticles; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ getSlugs; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// CONCATENATED MODULE: ./test/dummy-slugs.js
const slugs = ["leche-tid47244", "canela-tid47164", "huevo-tid47236", "arroz-tid47136", "azucar-tid47141", "manteca-tid47257", "harina-0000-tid48184", "ajo-tid47126", "frutas-tid67217", "pescados-tid67216", "perejil-tid47297"];
// CONCATENATED MODULE: ./lib/constants.js
const API_URL = `https://api-test-ln.herokuapp.com/articles`;
// CONCATENATED MODULE: ./lib/api.js




async function fetchAPI(url, options) {
  try {
    const res = await fetch(url, options);

    if (res.status !== 200) {
      return {
        status: 'error',
        message: 'Ha ocurrido un error'
      };
    }

    const data = await res.json();
    return data;
  } catch (err) {
    console.log('Catch error: ' + err);
  }
}

async function getArticles() {
  const data = await fetchAPI(API_URL, {
    method: 'GET'
  }); //Si no hay articulos, es que hubo un error

  return data.articles ? data.articles : data;
}
function getSlugs() {
  // Tengo que devolver un array de objetos donde cada uno tenga el parametro slug
  return slugs.map(slug => {
    return {
      params: {
        slug: slug
      }
    };
  });
}

/***/ }),

/***/ "ulIJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return getStaticPaths; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("qoWs");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("5Yp1");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (({
  slug
}) => {
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null, __jsx("div", {
    className: "sidebar__main"
  }, __jsx("h1", {
    className: "com-title-section-xl hlp-marginBottom-40"
  }, "Slug Buscado ", slug)));
});
async function getStaticProps({
  params
}) {
  // Se busca la data necesaria para el slug que esta en el parametro
  const slug = params.slug;
  return {
    props: {
      slug
    }
  };
}
async function getStaticPaths() {
  //Retorna una lista de posibles valores de slug (por ahora dummy slugs)
  const paths = Object(_lib_api__WEBPACK_IMPORTED_MODULE_1__[/* getSlugs */ "b"])();
  return {
    paths,
    fallback: true // Habilita generación de paginas staticas adicionales

  };
}

/***/ })

/******/ });