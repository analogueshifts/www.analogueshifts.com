"use strict";
exports.id = 713;
exports.ids = [713];
exports.modules = {

/***/ 1173:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Layouts_AppLayout)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 11 modules
var gatsby_browser_entry = __webpack_require__(7076);
;// CONCATENATED MODULE: ./src/images/logo.png
/* harmony default export */ const logo = ("/static/logo-428c3d061458542e72f69cecb0e2614b.png");
;// CONCATENATED MODULE: ./src/components/ApplicationLogo.js
const ApplicationLogo=()=>/*#__PURE__*/react.createElement("div",{className:"flex gap-3"},/*#__PURE__*/react.createElement("img",{src:logo,className:"w-10 h-10",alt:""}),/*#__PURE__*/react.createElement("h3",{className:"text-lg font-bold uppercase text-zinc-600 leading-5"},/*#__PURE__*/react.createElement("span",{className:"tracking-widest text-yellow-400"},"Analogue"),/*#__PURE__*/react.createElement("br",null),/*#__PURE__*/react.createElement("span",{className:"tracking-[1rem]"},"Shifts")));/* harmony default export */ const components_ApplicationLogo = (ApplicationLogo);
;// CONCATENATED MODULE: ./src/components/NavLink.js
const NavLink=({active=false,children,...props})=>/*#__PURE__*/react.createElement(gatsby_browser_entry.Link,Object.assign({},props,{className:`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out ${active?"border-yellow-400 text-gray-900 focus:border-yellow-700":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300"}`}),children);/* harmony default export */ const components_NavLink = (NavLink);
;// CONCATENATED MODULE: ./src/components/ResponsiveNavLink.js
const ResponsiveNavLink=({active=false,children,...props})=>/*#__PURE__*/react.createElement(gatsby_browser_entry.Link,Object.assign({},props,{className:`block pl-4 pr-4 py-3 border-l-4 text-base font-medium leading-5 focus:outline-none transition duration-150 ease-in-out ${active?"border-yellow-400 text-yellow-700 bg-yellow-50 focus:text-yellow-800 focus:bg-yellow-100 focus:border-yellow-700":"border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300"}`}),children);const ResponsiveNavButton=props=>/*#__PURE__*/React.createElement("button",Object.assign({className:"block w-full pl-3 pr-4 py-2 border-l-4 text-left text-base font-medium leading-5 focus:outline-none transition duration-150 ease-in-out border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300"},props));/* harmony default export */ const components_ResponsiveNavLink = (ResponsiveNavLink);
;// CONCATENATED MODULE: ./src/components/Layouts/Navigation.js
const Navigation=()=>{const{0:open,1:setOpen}=(0,react.useState)(false);return/*#__PURE__*/react.createElement("div",{className:"flex justify-center pt-3 pb-20 px-3"},/*#__PURE__*/react.createElement("nav",{className:"bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg border border-gray-100 w-full lg:rounded-full fixed z-30"},/*#__PURE__*/react.createElement("div",{className:"w-full mx-auto px-4 lg:px-6 xl:px-8"},/*#__PURE__*/react.createElement("div",{className:"flex justify-between h-16"},/*#__PURE__*/react.createElement("div",{className:"flex items-center"},/*#__PURE__*/react.createElement("div",{className:"flex-shrink-0 flex items-center"},/*#__PURE__*/react.createElement(gatsby_browser_entry.Link,{href:"/"},/*#__PURE__*/react.createElement(components_ApplicationLogo,{className:"block h-10 w-auto fill-current text-gray-600"})))),/*#__PURE__*/react.createElement("div",{className:"hidden space-x-8 lg:-my-px lg:ml-10 lg:flex"},/*#__PURE__*/react.createElement(components_NavLink,{href:"/"// active={router.pathname === "/"}
},"Home"),/*#__PURE__*/react.createElement(components_NavLink,{href:"/blog"// active={router.pathname === "/blog"}
},"Blog"),/*#__PURE__*/react.createElement(components_NavLink,{href:"/jobs"// active={router.pathname === "/jobs"}
},"Jobs"),/*#__PURE__*/react.createElement(components_NavLink,{href:"/about"// active={router.pathname === "/about"}
},"About"),/*#__PURE__*/react.createElement(components_NavLink,{href:"/contact"// active={router.pathname === "/contact"}
},"Contact")),/*#__PURE__*/react.createElement("div",{className:"hidden lg:flex lg:items-center lg:ml-6"},/*#__PURE__*/react.createElement(gatsby_browser_entry.Link,{className:"text-lg py-1.5 px-3 rounded-full bg-yellow-500 text-white hover:bg-transparent hover:text-yellow-500 hover:ring-2 ring-yellow-500",href:"https://app.analogueshifts.com"},"Get Started")),/*#__PURE__*/react.createElement("div",{className:"-mr-2 flex items-center lg:hidden"},/*#__PURE__*/react.createElement("button",{onClick:()=>setOpen(open=>!open),className:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"},/*#__PURE__*/react.createElement("svg",{className:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},open?/*#__PURE__*/react.createElement("path",{className:"inline-flex",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"}):/*#__PURE__*/react.createElement("path",{className:"inline-flex",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"})))))),open&&/*#__PURE__*/react.createElement("div",{className:"bg-white block lg:hidden"},/*#__PURE__*/react.createElement("div",{className:"pt-2 pb-3 space-y-1"},/*#__PURE__*/react.createElement(components_ResponsiveNavLink,{href:"/"// active={router.pathname === "/"}
},"Home"),/*#__PURE__*/react.createElement(components_ResponsiveNavLink,{href:"/blog"// active={router.pathname === "/blog"}
},"Blog"),/*#__PURE__*/react.createElement(components_ResponsiveNavLink,{href:"/jobs"// active={router.pathname === "/jobs"}
},"Jobs"),/*#__PURE__*/react.createElement(components_ResponsiveNavLink,{href:"/about"// active={router.pathname === "/about"}
},"About"),/*#__PURE__*/react.createElement(components_ResponsiveNavLink,{href:"/contact"// active={router.pathname === "/contact"}
},"Contact"),/*#__PURE__*/react.createElement(components_ResponsiveNavLink,{href:"https://app.analogueshifts.com"},"Get Started")))));};/* harmony default export */ const Layouts_Navigation = (Navigation);
;// CONCATENATED MODULE: ./src/components/Layouts/Footer.js
function Footer(){return/*#__PURE__*/react.createElement("div",null,/*#__PURE__*/react.createElement("footer",{className:"bg-black-500 py-4 mt-auto"},/*#__PURE__*/react.createElement("div",{className:"container mx-auto py-5 px-3 md:px-9 xl:px-28"},/*#__PURE__*/react.createElement("div",{className:"grid xl:flex justify-between gap-3"},/*#__PURE__*/react.createElement("div",{className:"flex gap-3"},/*#__PURE__*/react.createElement("a",{className:"text-slate-900",href:"/about"},"Privacy"),/*#__PURE__*/react.createElement("a",{className:"link-light small",href:"/about"},"Terms"),/*#__PURE__*/react.createElement("a",{className:"link-light small",href:"/contact"},"Contact")),/*#__PURE__*/react.createElement("div",{className:"text-slate-900"},/*#__PURE__*/react.createElement("div",{className:"text-slate-900"},"Copyright \xA9 ",new Date().getFullYear()," \xB7",` `,/*#__PURE__*/react.createElement("a",{href:"https://www.analogueshifts.com"},"AnalogueShifts"))),/*#__PURE__*/react.createElement("div",{className:"flex gap-3"},/*#__PURE__*/react.createElement("a",{className:"text-slate-900",href:"https://www.linkedin.com/company/analogue-shifts/",target:"_blank",rel:"noreferrer"},"LinkIn"),/*#__PURE__*/react.createElement("a",{className:"text-slate-900",href:"https://www.instagram.com/analogueshifts_/?igshid=MzRlODBiNWFlZA%3D%3D",target:"_blank",rel:"noreferrer"},"Instagram"),/*#__PURE__*/react.createElement("a",{className:"text-slate-900",href:"https://twitter.com/AnalogueShifts?t=vfspjJw0TwePEcAGydIHdQ&s=09",target:"_blank",rel:"noreferrer"},"Twitter"))))));}/* harmony default export */ const Layouts_Footer = (Footer);
;// CONCATENATED MODULE: ./src/components/Layouts/AppLayout.js
const AppLayout=({children})=>{const data=(0,gatsby_browser_entry.useStaticQuery)("3649515864");return/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement("div",{className:"min-h-screen bg-gray-50"},/*#__PURE__*/react.createElement(Layouts_Navigation,null),/*#__PURE__*/react.createElement("main",null,children),/*#__PURE__*/react.createElement(Layouts_Footer,null)));};/* harmony default export */ const Layouts_AppLayout = (AppLayout);

/***/ }),

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

/***/ 4808:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Head: () => (/* binding */ Head),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7076);
/* harmony import */ var _components_Layouts_AppLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1173);
/* harmony import */ var _lib_SeoController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(521);
const UsingDSG=()=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Layouts_AppLayout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1",null,"Hello from a ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("b",null,"DSG Page")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"This page is not created until requested by a user."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"To learn more, head over to our"," ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{href:"https://www.gatsbyjs.com/docs/reference/rendering-options/deferred-static-generation/"},"documentation about Deferred Static Generation"),"."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link,{to:"/"},"Go back to the homepage"));const seoData={title:'Tech Talent Recruitment and Acquisition',description:'Looking for the best tech talent worldwide? Analogueshifts is the recruitment agency for you. Our team of experts can help you streamline recruitment and find the perfect talent for your organization. ',canonical:'https://www.analogueshifts.com',ogImage:'/images/a4.jpg'};const Head=()=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_SeoController__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,{seoData:seoData});/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UsingDSG);

/***/ })

};
;
//# sourceMappingURL=component---src-templates-using-dsg-js.js.map