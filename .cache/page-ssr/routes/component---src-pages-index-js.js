"use strict";
exports.id = 678;
exports.ids = [678,299,157,183,69];
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

/***/ 4599:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ home_BuildTeam)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./src/pages/home/Utilities/BuildTeamData.json
const BuildTeamData_namespaceObject = JSON.parse('{"F":[{"image":"/images/1.jpg","title":"Product Managers","datails":"Highly skilled product managers trained in the development and release of products. That is, create and manage the product roadmap, track product performance, and provide feedback to stakeholders.","url":"dashboard"},{"image":"/images/2.jpg","title":"Project Managers","datails":"Hire skilled professionals who organize, plan, and execute projects within constraints like budgets and schedules. Also, lead entire teams, define project goals, communicate with stakeholders, and see a project through to its closure.","url":"dashboard"},{"image":"/images/3.jpg","title":"UI/UX","datails":"Hire skilled professionals who can identify new opportunities to create better user experiences. Aesthetically pleasing branding strategies help them effectively reach more customers. They also ensure that the end-to-end product or service journey meets desired outcomes.","url":"dashboard"},{"image":"/images/4.jpg","title":"Data analysts","datails":"Hire highly skilled data analysts trained in collecting and interpreting data, analysing results, reporting the results back to the relevant stakeholders.","url":"dashboard"},{"image":"/images/5.jpg","title":"Developers","datails":"Hire skilled developers trained to build and create software and applications. In addition, our professionals can debug and execute a software application\'s source code.","url":"dashboard"},{"image":"/images/6.jpg","title":"DevOps Engineers","datails":"Hire skilled professionals trained to oversee code release and combine an understanding of both engineering and coding. Our professionals can create and implement systems software, analyze data, and improve existing ones.","url":"dashboard"},{"image":"/images/7.jpg","title":"Business Analysts","datails":"Hire top business analysts trained in the how-to guide of improving processes, products, and services through data analysis.","url":"dashboard"},{"image":"/images/8.jpg","title":"Virtual Assistants","datails":"Hire highly skilled virtual assistants that can perform tasks that are difficult or time-consuming and provide a level of convenience and flexibility. Schedule appointments, travel arrangements, manage email and social media accounts and provide customer service.","url":"dashboard"},{"image":"/images/9.jpg","title":"Social media managers","datails":"Hire top social media managers that can represent your company globally through your social channels. They are trained in the right tips for building a brand voice and online presence.","url":"dashboard"}]}');
;// CONCATENATED MODULE: ./src/pages/home/BuildTeam.js
function BuildTeam(){return/*#__PURE__*/react.createElement("section",{className:"bg-gray-200"},/*#__PURE__*/react.createElement("div",{className:"container mx-auto py-16 px-5 xl:px-28"},/*#__PURE__*/react.createElement("div",{className:"flex justify-center mb-9"},/*#__PURE__*/react.createElement("a",{className:"text-2xl px-9 py-4 rounded-lg bg-as text-white hover:bg-transparent font-semibold hover:text-as hover:ring-2 ring-as",href:"https://app.analogueshifts.com/tools/hire"},"Find Top Talents")),/*#__PURE__*/react.createElement("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"},BuildTeamData_namespaceObject.F.map(el=>/*#__PURE__*/react.createElement("a",{key:el.title,href:"https://app.analogueshifts.com",className:"bg-as order border-black rounded p-5 flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-as"},/*#__PURE__*/react.createElement("div",null,/*#__PURE__*/react.createElement("h2",{className:"mt-6 text-xl font-semibold text-slate-900"},el.title),/*#__PURE__*/react.createElement("p",{className:"mt-4 text-slate-900 text-xs leading-relaxed"},el.datails)))))));}/* harmony default export */ const home_BuildTeam = (BuildTeam);

/***/ }),

/***/ 6935:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ home_Landing)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/gsap/index.js + 2 modules
var gsap = __webpack_require__(6358);
;// CONCATENATED MODULE: ./src/images/a4.jpg
/* harmony default export */ const a4 = ("/static/a4-ecc4ea97838092b4eb41f3d417a10d47.jpg");
;// CONCATENATED MODULE: ./src/pages/home/Landing.js
function Landing(){(0,react.useEffect)(()=>{gsap/* default */.ZP.from('#intro',{opacity:0,y:50,duration:1,delay:1,stagger:0.2});},[]);return/*#__PURE__*/react.createElement("div",null,/*#__PURE__*/react.createElement("section",{className:"md:py-9"},/*#__PURE__*/react.createElement("div",{className:"container mx-auto py-5 px-3 md:px-9 xl:px-28"},/*#__PURE__*/react.createElement("div",{id:"intro",className:"bg-white border-0 shadow rounded-lg overflow-hidden"},/*#__PURE__*/react.createElement("div",{className:"grid lg:grid-cols-12"},/*#__PURE__*/react.createElement("div",{className:"grid lg:col-span-7 py-16 px-3"},/*#__PURE__*/react.createElement("div",{className:"grid justify-center lg:justify-start gap-5 lg:w-[500px] p-4"},/*#__PURE__*/react.createElement("span",{className:"text-3xl md:text-5xl font-bold"},"The Future of Talent Recruitment"),/*#__PURE__*/react.createElement("p",null,"Your Success in Recruitment and Technical Support is our Priority. Welcome to Analogue Shifts, where we blend the expertise of recruitment with the precision of technical support to deliver exceptional results for your business. We understand that finding top talent and providing reliable technical assistance are crucial to driving your company\u2019s growth."))),/*#__PURE__*/react.createElement("div",{className:"grid lg:col-span-5"},/*#__PURE__*/react.createElement("img",{className:"object-cover h-full w-full",src:a4,alt:"landing"})))))));}/* harmony default export */ const home_Landing = (Landing);

/***/ }),

/***/ 1552:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6358);
function Services(){(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{// Animate the element with GSAP
gsap__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP.from('.animate-element',{duration:1,opacity:0,x:-50,ease:'power3.out'});},[]);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section",{className:"bg-gray-100 py-16"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"container mx-auto px-5 xl:px-28"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"bg-white p-6 rounded-lg shadow-lg animate-element"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex items-center justify-center bg-as text-gray-900 rounded-full w-16 h-16"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",className:"w-8 h-8"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"}))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2",{className:"mt-4 text-xl font-semibold text-gray-900"},"Best Results"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",{className:"mt-2 text-gray-900"},"We tailor our services to understand exactly what kind of person you want, delivering the best results for businesses in all industries.")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"bg-white p-6 rounded-lg shadow-lg animate-element"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex items-center justify-center bg-as text-gray-900 rounded-full w-16 h-16"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",className:"w-8 h-8"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"}))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2",{className:"mt-4 text-xl font-semibold text-gray-900"},"Focused"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",{className:"mt-2 text-gray-600"},"We focus on cultural fit, talent acquisition, and matching your candidate pool with the talent you need.")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"bg-white p-6 rounded-lg shadow-lg animate-element"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex items-center justify-center bg-as text-gray-900 rounded-full w-16 h-16"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",className:"w-8 h-8"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18V8.25A2.25 2.25 0 015.25 6h4.75M10 2.057v5.193a1 1 0 001 1H16"}))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2",{className:"mt-4 text-xl font-semibold text-gray-900"},"Efficient"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",{className:"mt-2 text-gray-600"},"Our streamlined recruitment process ensures efficiency and reduces the time-to-fill positions, saving you valuable resources."))))));}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Services);

/***/ }),

/***/ 8132:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _images_team_ceo_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3428);
function Testimonials(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"bg-white"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"container mx-auto py-20 px-3 md:px-9 xl:px-28"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex justify-center"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"w-[800px]"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"text-center"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"text-sm lg:text-2xl mb-4 italic"},"\"Your Success in Recruitment and Technical Support is our Priority. Welcome to Analogue Shifts, where we blend the expertise of recruitment with the precision of technical support to deliver exceptional results for your business. We understand that finding top talent and providing reliable technical assistance are crucial to driving your company\u2019s growth.\""),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex items-center justify-center gap-5"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img",{className:"object-cover rounded-full h-11 w-11",src:_images_team_ceo_jpeg__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,alt:"CEO"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"font-bold"},"Kenneth Malaka",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"bold text-as mx-1"},"/"),"CEO, Nigeria"))))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("aside",{className:"flex justify-center py-16"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"bg-yellow-500 grid lg:flex items-center justify-center gap-5 w-full p-9 rounded-lg"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"grid gap-5 text-center lg:text-start"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"text-2xl font-bold text-white"},"New products, delivered to you."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"text-gray-100 text-sm"},"Sign up for our Jobsletter for the latest updates.")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"grid gap-5 text-center lg:text-start"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form",{className:"flex mb-2 min-w-full"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input",{className:"text-sm lg:text-md placeholder:text-sm outline-none w-full py-2 px-5 rounded-l-md",type:"email",placeholder:"Email address...","aria-label":"Email address...","aria-describedby":"button-Jobsletter"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{className:"bg-transparent text-sm border outline-none w-full py-2 px-5 rounded-r-md",type:"button"},"Sign up")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"text-gray-100 text-sm"},"We care about privacy, and will never share your data.")))))));}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Testimonials);

/***/ }),

/***/ 6558:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Head: () => (/* binding */ Head),
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _components_Layouts_AppLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1173);
/* harmony import */ var _home_BuildTeam__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4599);
/* harmony import */ var _home_Landing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6935);
/* harmony import */ var _home_Services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1552);
/* harmony import */ var _home_Testimonials__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8132);
/* harmony import */ var _lib_SeoController__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(521);
const Head=()=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_SeoController__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,{seoData:seoData});const seoData={title:'Tech Talent Recruitment and Acquisition',description:'Looking for the best tech talent worldwide? Analogueshifts is the recruitment agency for you. Our team of experts can help you streamline recruitment and find the perfect talent for your organization. ',canonical:'https://analogueshifts.com',ogImage:'/images/a4.jpg'};function Home(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Layouts_AppLayout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_home_Landing__WEBPACK_IMPORTED_MODULE_3__["default"],null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_home_Services__WEBPACK_IMPORTED_MODULE_4__["default"],null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_home_BuildTeam__WEBPACK_IMPORTED_MODULE_2__["default"],null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_home_Testimonials__WEBPACK_IMPORTED_MODULE_5__["default"],null));}

/***/ }),

/***/ 3428:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/ceo-9a5da32a6237fc30bc5296070b1e1f25.jpeg");

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-js.js.map