"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/spacex";
exports.ids = ["pages/spacex"];
exports.modules = {

/***/ "./pages/api/queries.js":
/*!******************************!*\
  !*** ./pages/api/queries.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"company\": () => (/* binding */ company)\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst company = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`\n  query Spacex {\n    company {\n        ceo\n        cto\n        name\n        summary\n        founder\n        employees\n      }\n      roadster {\n        apoapsis_au\n      }\n  }\n`;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvcXVlcmllcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBcUM7QUFFOUIsTUFBTUMsT0FBTyxHQUFHRCwrQ0FBRyxDQUFDOzs7Ozs7Ozs7Ozs7OztBQWMzQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzMS8uL3BhZ2VzL2FwaS9xdWVyaWVzLmpzPzg3NTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3FsIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5cbmV4cG9ydCBjb25zdCBjb21wYW55ID0gZ3FsYFxuICBxdWVyeSBTcGFjZXgge1xuICAgIGNvbXBhbnkge1xuICAgICAgICBjZW9cbiAgICAgICAgY3RvXG4gICAgICAgIG5hbWVcbiAgICAgICAgc3VtbWFyeVxuICAgICAgICBmb3VuZGVyXG4gICAgICAgIGVtcGxveWVlc1xuICAgICAgfVxuICAgICAgcm9hZHN0ZXIge1xuICAgICAgICBhcG9hcHNpc19hdVxuICAgICAgfVxuICB9XG5gIl0sIm5hbWVzIjpbImdxbCIsImNvbXBhbnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/queries.js\n");

/***/ }),

/***/ "./pages/spacex.tsx":
/*!**************************!*\
  !*** ./pages/spacex.tsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api_queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/queries */ \"./pages/api/queries.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction Spacex() {\n    const { data , loading , error  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useQuery)(_api_queries__WEBPACK_IMPORTED_MODULE_2__.company);\n    console.log(\"data\", data);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: data?.company?.name\n            }, void 0, false, {\n                fileName: \"/home/luongnv2/Work Space/Learn NextJs/nextjs_graphql/pages/spacex.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: [\n                            \"CEO: \",\n                            data?.company?.ceo\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/luongnv2/Work Space/Learn NextJs/nextjs_graphql/pages/spacex.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Employees count: \",\n                            data?.company?.employees\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/luongnv2/Work Space/Learn NextJs/nextjs_graphql/pages/spacex.tsx\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Summary: \",\n                            data?.company?.summary\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/luongnv2/Work Space/Learn NextJs/nextjs_graphql/pages/spacex.tsx\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/luongnv2/Work Space/Learn NextJs/nextjs_graphql/pages/spacex.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/luongnv2/Work Space/Learn NextJs/nextjs_graphql/pages/spacex.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Spacex);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zcGFjZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBeUI7QUFDYztBQUNRO0FBRS9DLFNBQVNHLE1BQU0sR0FBRztJQUNkLE1BQU0sRUFBRUMsSUFBSSxHQUFFQyxPQUFPLEdBQUVDLEtBQUssR0FBRSxHQUFHSix3REFBUSxDQUFDRCxpREFBTyxDQUFDO0lBQ2xETSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxNQUFNLEVBQUVKLElBQUksQ0FBQztJQUUzQixxQkFDRSw4REFBQ0ssS0FBRzs7MEJBQ0YsOERBQUNDLElBQUU7MEJBQUVOLElBQUksRUFBRUgsT0FBTyxFQUFFVSxJQUFJOzs7OztvQkFBTTswQkFDOUIsOERBQUNGLEtBQUc7O2tDQUNGLDhEQUFDRyxNQUFJOzs0QkFBQyxPQUFLOzRCQUFDUixJQUFJLEVBQUVILE9BQU8sRUFBRVksR0FBRzs7Ozs7OzRCQUFRO2tDQUN0Qyw4REFBQ0MsR0FBQzs7NEJBQUMsbUJBQWlCOzRCQUFDVixJQUFJLEVBQUVILE9BQU8sRUFBRWMsU0FBUzs7Ozs7OzRCQUFLO2tDQUNsRCw4REFBQ0QsR0FBQzs7NEJBQUMsV0FBUzs0QkFBQ1YsSUFBSSxFQUFFSCxPQUFPLEVBQUVlLE9BQU87Ozs7Ozs0QkFBSzs7Ozs7O29CQUNwQzs7Ozs7O1lBQ0YsQ0FDUDtBQUNILENBQUM7QUFFRCxpRUFBZWIsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqczEvLi9wYWdlcy9zcGFjZXgudHN4PzVjYTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29tcGFueSB9IGZyb20gJy4vYXBpL3F1ZXJpZXMnXG5pbXBvcnQgeyB1c2VRdWVyeSwgZ3FsIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5cbmZ1bmN0aW9uIFNwYWNleCgpIHtcbiAgICBjb25zdCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH0gPSB1c2VRdWVyeShjb21wYW55KTtcbiAgICBjb25zb2xlLmxvZygnZGF0YScsIGRhdGEpXG4gICAgXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT57ZGF0YT8uY29tcGFueT8ubmFtZX08L2gxPlxuICAgICAgPGRpdj5cbiAgICAgICAgPHNwYW4+Q0VPOiB7ZGF0YT8uY29tcGFueT8uY2VvfTwvc3Bhbj5cbiAgICAgICAgPHA+RW1wbG95ZWVzIGNvdW50OiB7ZGF0YT8uY29tcGFueT8uZW1wbG95ZWVzfTwvcD5cbiAgICAgICAgPHA+U3VtbWFyeToge2RhdGE/LmNvbXBhbnk/LnN1bW1hcnl9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3BhY2V4Il0sIm5hbWVzIjpbIlJlYWN0IiwiY29tcGFueSIsInVzZVF1ZXJ5IiwiU3BhY2V4IiwiZGF0YSIsImxvYWRpbmciLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJoMSIsIm5hbWUiLCJzcGFuIiwiY2VvIiwicCIsImVtcGxveWVlcyIsInN1bW1hcnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/spacex.tsx\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/spacex.tsx"));
module.exports = __webpack_exports__;

})();