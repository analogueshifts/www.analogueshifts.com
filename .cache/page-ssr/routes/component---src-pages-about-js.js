"use strict";
exports.id = 682;
exports.ids = [682];
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

/***/ 3618:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Head: () => (/* binding */ Head),
  "default": () => (/* binding */ About)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 11 modules
var gatsby_browser_entry = __webpack_require__(7076);
// EXTERNAL MODULE: ./node_modules/gsap/index.js + 2 modules
var gsap = __webpack_require__(6358);
// EXTERNAL MODULE: ./src/components/Layouts/AppLayout.js + 6 modules
var AppLayout = __webpack_require__(1173);
// EXTERNAL MODULE: ./src/images/1.jpg
var _1 = __webpack_require__(4631);
;// CONCATENATED MODULE: ./src/images/about/1.jpg
/* harmony default export */ const about_1 = ("/static/1-4c8ad43858688f789e41fb76cde56454.jpg");
;// CONCATENATED MODULE: ./src/images/about/2.jpg
/* harmony default export */ const _2 = ("/static/2-84aeb556cfc4ad5feee7f431e1c5da25.jpg");
// EXTERNAL MODULE: ./src/images/team/ceo.jpeg
var ceo = __webpack_require__(3428);
;// CONCATENATED MODULE: ./src/images/team/social.jpg
/* harmony default export */ const social = ("/static/social-f4d4bb4104d9cce8548ce224cf77aea8.jpg");
;// CONCATENATED MODULE: ./src/images/team/recruit.jpg
/* harmony default export */ const recruit = ("/static/recruit-8a038edaaa1af8de0c8beaa8f93e2711.jpg");
;// CONCATENATED MODULE: ./src/images/team/director.jpg
/* harmony default export */ const director = ("/static/director-2bb46b4cde262d3e6a1eae0e5745896c.jpg");
;// CONCATENATED MODULE: ./src/images/team/dev.png
/* harmony default export */ const dev = ("/static/dev-e42a190c064bc52513968cc0213f96cb.png");
;// CONCATENATED MODULE: ./src/images/team/lawyer.jpeg
/* harmony default export */ const lawyer = ("/static/lawyer-40713c52464a4a728bc929c9bc7d6d0e.jpeg");
// EXTERNAL MODULE: ./src/lib/SeoController.js + 1 modules
var SeoController = __webpack_require__(521);
;// CONCATENATED MODULE: ./src/pages/about.js
const Head=()=>/*#__PURE__*/react.createElement(SeoController/* default */.Z,{seoData:seoData});const seoData={title:'About Us',description:"At Analogueshifts, we're passionate about connecting employers with top tech talent from around the world. Our team of experts brings years of experience and industry knowledge to every recruitment search. Learn more about us and our mission today.",canonical:'https://analogueshifts.com/about',ogImage:'/images/a4.jpg'};function About(){(0,react.useEffect)(()=>{// Animation for the main heading
gsap/* default */.ZP.from('#title',{opacity:0,x:-50,duration:1,delay:0.5});// Animation for the job description section
gsap/* default */.ZP.from('#intro',{opacity:0,y:50,duration:1,delay:1,stagger:0.2});// Animation for the contact form section
gsap/* default */.ZP.from('#form',{opacity:0,y:50,duration:1,delay:1});// Animation for the contact cards
gsap/* default */.ZP.from('#card',{opacity:0,y:50,duration:1,delay:1,stagger:0.2});},[]);return/*#__PURE__*/react.createElement(AppLayout/* default */.Z,null,/*#__PURE__*/react.createElement("div",null,/*#__PURE__*/react.createElement("section",{className:""},/*#__PURE__*/react.createElement("div",{className:"container mx-auto py-5 px-3 md:px-9 xl:px-28"},/*#__PURE__*/react.createElement("h1",{id:"title",className:"font-bold text-2xl mb-9"},"About AnalogueShifts"),/*#__PURE__*/react.createElement("div",{className:"bg-white border-0 shadow rounded-lg overflow-hidden"},/*#__PURE__*/react.createElement("div",{className:"grid lg:grid-cols-12"},/*#__PURE__*/react.createElement("div",{className:"grid lg:col-span-6 py-16 px-3 lg:px-9"},/*#__PURE__*/react.createElement("div",{id:"intro",className:"grid gap-5 lg:w-96 p-4"},/*#__PURE__*/react.createElement("div",{className:"text-3xl font-bold"},"Learn about AnalogueShifts"),/*#__PURE__*/react.createElement("p",null,"AnalogueShifts is a Project Management and Talent Acquisition Company. Our mission is to solve the problem of cost for Startups and Large scale companies abroad by sourcing the best talents for clients. We are equipped with the most talented work force across the globe and we are ready to work 24/7."))),/*#__PURE__*/react.createElement("div",{className:"grid lg:col-span-6"},/*#__PURE__*/react.createElement("img",{className:"object-cover h-full w-full",src:_1/* default */.Z,alt:"..."})))))),/*#__PURE__*/react.createElement("header",{className:"bg-gray-50"},/*#__PURE__*/react.createElement("div",{className:"container mx-auto py-5 px-3 md:px-9 xl:px-28"},/*#__PURE__*/react.createElement("div",{className:"grid justify-center"},/*#__PURE__*/react.createElement("div",{className:"md:w-[700px]"},/*#__PURE__*/react.createElement("div",{className:"grid lg:flex lg:flex-col gap-5 text-center my-5"},/*#__PURE__*/react.createElement("h1",{className:"text-4xl font-bold mb-3"},"Our mission is to make hiring easier for everyone."),/*#__PURE__*/react.createElement("p",{className:"text-xl text-gray-500 mb-4"},"Our mission is to solve the problem of cost for Startups and Large scale companies abroad by sourcing the best talents for clients."),/*#__PURE__*/react.createElement("div",{className:"flex justify-center"},/*#__PURE__*/react.createElement(gatsby_browser_entry.Link,{className:"bg-as text-white text-xl py-3 px-5 rounded-md",href:"#scroll-target"},"Read our story"))))))),/*#__PURE__*/react.createElement("section",{className:"bg-gray-100",id:"scroll-target"},/*#__PURE__*/react.createElement("div",{className:"container mx-auto py-5 px-3 md:px-9 xl:px-28"},/*#__PURE__*/react.createElement("div",{className:"grid lg:flex lg:grid-cols-2 gap-5 items-center"},/*#__PURE__*/react.createElement("div",{className:"grid lg:col-span-1 h-full w-full"},/*#__PURE__*/react.createElement("img",{className:"object-cover h-full w-full rounded-md",src:about_1,alt:"..."})),/*#__PURE__*/react.createElement("div",{className:"grid lg:col-span-1 gap-5 h-full w-full"},/*#__PURE__*/react.createElement("h2",{className:"text-3xl font-bold"},"About us"),/*#__PURE__*/react.createElement("p",{className:"text text-gray-500 text-xl mb-0"},"AnalogueShifts is a Project Management and Talent Acquisition Company. Our mission is to solve the problem of cost for Startups and Large scale companies abroad by sourcing the best talents for clients. We are equipped with the most talented work force across the globe and we are ready to work 24/7."))))),/*#__PURE__*/react.createElement("section",{className:"bg-gray-100",id:"scroll-target"},/*#__PURE__*/react.createElement("div",{className:"container mx-auto py-5 px-3 md:px-9 xl:px-28"},/*#__PURE__*/react.createElement("div",{className:"grid lg:flex lg:flex-row-reverse lg:grid-cols-2 gap-5 items-center"},/*#__PURE__*/react.createElement("div",{className:"grid lg:col-span-1 h-full w-full"},/*#__PURE__*/react.createElement("img",{className:"object-cover h-full w-full rounded-md",src:_2,alt:"..."})),/*#__PURE__*/react.createElement("div",{className:"grid lg:col-span-1 gap-5 h-full w-full"},/*#__PURE__*/react.createElement("h2",{className:"text-3xl font-bold"},"What we do"),/*#__PURE__*/react.createElement("p",{className:"text text-gray-500 text-xl mb-0"},"We are a dynamic and motivated team of people who share the same goal to find the right talent for your company. We offer high quality services and will help you with anything we can from the recruitment stage up until you have made a final decision. We are here to understand exactly what kind of person you want, to tailor our service to best fit your needs and deliver results for businesses in all industries."))))),/*#__PURE__*/react.createElement("section",{className:"bg-gray-50"},/*#__PURE__*/react.createElement("div",{className:"container mx-auto py-5 px-3 md:px-9 xl:px-28"},/*#__PURE__*/react.createElement("div",{className:"grid gap-3 text-center"},/*#__PURE__*/react.createElement("h3",{className:"flex justify-center text-2xl md:text-7xl text-black font-bold"},"Our Team"),/*#__PURE__*/react.createElement("p",{className:"flex justify-center text-xl font-semibold"},"Dedicated to quality and your success")),/*#__PURE__*/react.createElement("div",{className:"grid justify-center py-16"},/*#__PURE__*/react.createElement("div",{className:"grid justify-center lg:grid-cols-3 gap-5"},/*#__PURE__*/react.createElement("div",{className:"grid justify-center rounded p-2 cursor-pointer relative"},/*#__PURE__*/react.createElement("img",{src:ceo/* default */.Z,className:"object-cover grid justify-center bg-gray-300 h-80 md:h-96 w-80 md:w-96 rounded-lg",alt:"CEO"}),/*#__PURE__*/react.createElement("div",{className:"bg-white rounded-md grid justify-center py-3 px-2 gap-1 font-bold absolute inset-x-5 bottom-5"},/*#__PURE__*/react.createElement("span",{className:"flex justify-center"},"Kenneth Malaka"),/*#__PURE__*/react.createElement("span",{className:"flex justify-center text-yellow-500"},"CEO"))),/*#__PURE__*/react.createElement("div",{className:"grid justify-center rounded p-2 cursor-pointer relative"},/*#__PURE__*/react.createElement("img",{src:recruit,className:"object-cover grid justify-center bg-gray-300 h-80 md:h-96 w-80 md:w-96 rounded-lg",alt:"Technical Recruiter"}),/*#__PURE__*/react.createElement("div",{className:"bg-white rounded-md grid justify-center py-3 px-2 gap-1 font-bold absolute inset-x-5 bottom-5"},/*#__PURE__*/react.createElement("span",{className:"flex justify-center"},"Regina Maduemezia"),/*#__PURE__*/react.createElement("span",{className:"flex justify-center text-yellow-500"},"Technical Recruiter"))),/*#__PURE__*/react.createElement("div",{className:"grid justify-center rounded p-2 cursor-pointer relative"},/*#__PURE__*/react.createElement("img",{src:director,className:"object-cover grid justify-center bg-gray-300 h-80 md:h-96 w-80 md:w-96 rounded-lg",alt:"US Sales Director"}),/*#__PURE__*/react.createElement("div",{className:"bg-white rounded-md grid justify-center py-3 px-2 gap-1 font-bold absolute inset-x-5 bottom-5"},/*#__PURE__*/react.createElement("span",{className:"flex justify-center"},"Robert Michaelson"),/*#__PURE__*/react.createElement("span",{className:"flex justify-center text-yellow-500"},"US Sales Director"))),/*#__PURE__*/react.createElement("div",{className:"grid justify-center rounded p-2 cursor-pointer relative"},/*#__PURE__*/react.createElement("img",{src:social,className:"object-cover grid justify-center bg-gray-300 h-80 md:h-96 w-80 md:w-96 rounded-lg",alt:"Social Media Manager"}),/*#__PURE__*/react.createElement("div",{className:"bg-white rounded-md grid justify-center py-3 px-2 gap-1 font-bold absolute inset-x-5 bottom-5"},/*#__PURE__*/react.createElement("span",{className:"flex justify-center"},"Temi Tori"),/*#__PURE__*/react.createElement("span",{className:"flex justify-center text-yellow-500"},"Social media manager"))),/*#__PURE__*/react.createElement("div",{className:"grid justify-center rounded p-2 cursor-pointer relative"},/*#__PURE__*/react.createElement("img",{src:dev,className:"object-cover grid justify-center bg-gray-300 h-80 md:h-96 w-80 md:w-96 rounded-lg",alt:"Developer"}),/*#__PURE__*/react.createElement("div",{className:"bg-white rounded-md grid justify-center py-3 px-2 gap-1 font-bold absolute inset-x-5 bottom-5"},/*#__PURE__*/react.createElement("span",{className:"flex justify-center"},"Teslim Abdulwahab"),/*#__PURE__*/react.createElement("span",{className:"flex justify-center text-yellow-500"},"Developer"))),/*#__PURE__*/react.createElement("div",{className:"grid justify-center rounded p-2 cursor-pointer relative"},/*#__PURE__*/react.createElement("img",{src:lawyer,className:"object-cover grid justify-center bg-gray-300 h-80 md:h-96 w-80 md:w-96 rounded-lg",alt:"Lawyer"}),/*#__PURE__*/react.createElement("div",{className:"bg-white rounded-md grid justify-center py-3 px-2 gap-1 font-bold absolute inset-x-5 bottom-5"},/*#__PURE__*/react.createElement("span",{className:"flex justify-center"},"Nonye nwonsu"),/*#__PURE__*/react.createElement("span",{className:"flex justify-center text-yellow-500"},"Lawyer")))))))));}

/***/ }),

/***/ 4631:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/1-21a361eb17d079a36cdc3bd8e527df3e.jpg");

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
//# sourceMappingURL=component---src-pages-about-js.js.map