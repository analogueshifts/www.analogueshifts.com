"use strict";
exports.id = 883;
exports.ids = [883];
exports.modules = {

/***/ 521:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ lib_SeoController)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 11 modules
var gatsby_browser_entry = __webpack_require__(7076);
;// CONCATENATED MODULE: ./src/images/ogImage.png
/* harmony default export */ const ogImage = ("/static/ogImage-e425bfcf2687893dc52a375ec310ba7a.png");
;// CONCATENATED MODULE: ./src/lib/SeoController.js
function SeoController({seoData,children}){var _site$siteMetadata,_site$siteMetadata2;const{site}=(0,gatsby_browser_entry.useStaticQuery)("63159454");const metaDescription=seoData.description||site.siteMetadata.description;const defaultTitle=(_site$siteMetadata=site.siteMetadata)===null||_site$siteMetadata===void 0?void 0:_site$siteMetadata.title;return/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement("title",null,defaultTitle?`${seoData.title} | ${defaultTitle}`:seoData.title),/*#__PURE__*/react.createElement("meta",{name:"description",content:metaDescription}),/*#__PURE__*/react.createElement("meta",{property:"og:title",content:seoData.title}),/*#__PURE__*/react.createElement("meta",{property:"og:description",content:metaDescription}),/*#__PURE__*/react.createElement("meta",{property:"og:image",content:ogImage}),/*#__PURE__*/react.createElement("link",{rel:"canonical",href:seoData.canonical||"https://analogueshifts.com"}),/*#__PURE__*/react.createElement("meta",{property:"og:type",content:"website"}),/*#__PURE__*/react.createElement("meta",{name:"twitter:card",content:"summary"}),/*#__PURE__*/react.createElement("meta",{name:"twitter:creator",content:((_site$siteMetadata2=site.siteMetadata)===null||_site$siteMetadata2===void 0?void 0:_site$siteMetadata2.author)||``}),/*#__PURE__*/react.createElement("meta",{name:"twitter:title",content:seoData.title}),/*#__PURE__*/react.createElement("meta",{name:"twitter:description",content:metaDescription}),children);}/* harmony default export */ const lib_SeoController = (SeoController);

/***/ }),

/***/ 429:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Head: () => (/* binding */ Head),
/* harmony export */   "default": () => (/* binding */ NotFoundPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7076);
/* harmony import */ var _images_1_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4631);
/* harmony import */ var _lib_SeoController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(521);
const Head=()=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_SeoController__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{seoData:seoData});const seoData={title:"404",description:"Next SEO packages simplifies the SEO management in Next Apps with less configurations",canonical:"www.analogueshifts.com",ogImage:"/images/a4.jpg"};function NotFoundPage(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section",{className:"relative flex items-top justify-center min-h-screen sm:items-center sm:pt-0"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"container mx-auto py-5 px-3 md:px-9 xl:px-28"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"bg-white border-0 shadow rounded-lg overflow-hidden"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"grid lg:grid-cols-12"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"grid lg:col-span-6"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img",{className:"object-cover h-full w-full",src:_images_1_jpg__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,alt:"404"})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"grid lg:col-span-6 py-16 px-3 lg:px-9"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"grid gap-5 p-4"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link,{className:"text-gray-500 font-semibold text-md p-3 border hover:ml-3",href:"/"},"Home"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link,{className:"text-gray-500 font-semibold text-md p-3 border hover:ml-3",href:"/blog"},"Blog"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link,{className:"text-gray-500 font-semibold text-md p-3 border hover:ml-3",href:"/jobs"},"Jobs"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link,{className:"text-gray-500 font-semibold text-md p-3 border hover:ml-3",href:"/about"},"About"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link,{className:"text-gray-500 font-semibold text-md p-3 border hover:ml-3",href:"/contact"},"Contact"))))))));}

/***/ }),

/***/ 4631:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/1-21a361eb17d079a36cdc3bd8e527df3e.jpg");

/***/ })

};
;
//# sourceMappingURL=component---src-pages-404-js.js.map