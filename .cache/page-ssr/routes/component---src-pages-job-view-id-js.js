"use strict";
exports.id = 534;
exports.ids = [534];
exports.modules = {

/***/ 90:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9669);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
const axios=axios__WEBPACK_IMPORTED_MODULE_0___default().create({baseURL:"https://api.analogueshifts.com/api",// baseURL: import.meta.env.AS_PUBLIC_BACKEND_URL,
headers:{"X-Requested-With":"XMLHttpRequest"},withCredentials:true});/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axios);

/***/ }),

/***/ 9022:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ View)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _lib_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7076);
function View(props){const slug=props.params.viewId;(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(slug){_lib_axios__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.get(`/job/${slug}`).then(res=>{const data=res.data;(0,gatsby__WEBPACK_IMPORTED_MODULE_2__.navigate)(`/jobs/${data.display}`);}).catch(error=>{alert(error);});}},[slug]);return null;}

/***/ })

};
;
//# sourceMappingURL=component---src-pages-job-view-id-js.js.map