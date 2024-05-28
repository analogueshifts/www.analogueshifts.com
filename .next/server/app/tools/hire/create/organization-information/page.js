(()=>{var e={};e.id=7449,e.ids=[7449],e.modules={55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},25528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},91877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},25319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},39491:e=>{"use strict";e.exports=require("assert")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},99046:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>m,originalPathname:()=>u,pages:()=>c,routeModule:()=>p,tree:()=>d});var a=r(67096),o=r(16132),s=r(37284),i=r.n(s),n=r(32564),l={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>n[e]);r.d(t,l);let d=["",{children:["tools",{children:["hire",{children:["create",{children:["organization-information",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,56291)),"C:\\Users\\USER\\Promise\\AnalogueShifts\\analogueshifts.com\\app\\tools\\hire\\create\\organization-information\\page.js"]}]},{}]},{}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,54062)),"C:\\Users\\USER\\Promise\\AnalogueShifts\\analogueshifts.com\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(r.bind(r,21499)),"C:\\Users\\USER\\Promise\\AnalogueShifts\\analogueshifts.com\\app\\not-found.js"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["C:\\Users\\USER\\Promise\\AnalogueShifts\\analogueshifts.com\\app\\tools\\hire\\create\\organization-information\\page.js"],u="/tools/hire/create/organization-information/page",m={require:r,loadChunk:()=>Promise.resolve()},p=new a.AppPageRouteModule({definition:{kind:o.x.APP_PAGE,page:"/tools/hire/create/organization-information/page",pathname:"/tools/hire/create/organization-information",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},84182:(e,t,r)=>{Promise.resolve().then(r.bind(r,48783))},98865:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var a=r(53854),o=r(51018),s=r(34218),i=r(38318),n=r(56294);function l({children:e}){let t=(0,o.usePathname)(),[r,l]=(0,s.useState)(null),[d,c]=(0,s.useState)(["job-information"]);return(0,s.useEffect)(()=>{i.Z.get("analogueshifts")&&l(JSON.parse(i.Z.get("analogueshifts")))},[]),(0,s.useEffect)(()=>{"job-information"===t.slice(19,t.length)?c(["job-information"]):"job-details"===t.slice(19,t.length)?c(["job-information","job-details"]):"job-location"===t.slice(19,t.length)?c(["job-information","job-details","job-location"]):"organization-information"===t.slice(19,t.length)&&c(["job-information","job-details","job-location","organization-information"])},[t]),a.jsx(n.Z,{user:r,header:a.jsx("h2",{className:"text-xl font-bold text-gray-800 leading-tight",children:"Hire"}),children:(0,a.jsxs)("section",{className:"bg-[#FEFEFE] mt-2 border border-[#E7E7E7] h-max px-4 lg:px-7 py-10 rounded-3xl",children:[(0,a.jsxs)("div",{className:"w-full mb-12 flex gap-y-2 gap-x-3 flex-wrap items-center",children:[a.jsx("button",{className:`text-sm font-medium ${d.includes("job-information")?"text-tremor-brand-boulder950":"text-tremor-brand-boulder200"}`,children:"Job Information"}),a.jsx("i",{className:`fas fa-angle-right text-sm font-medium ${d.includes("job-details")?"text-tremor-brand-boulder950":"text-tremor-brand-boulder200"}`}),a.jsx("button",{className:`text-sm font-medium ${d.includes("job-details")?"text-tremor-brand-boulder950":"text-tremor-brand-boulder200"}`,children:"Job Details"}),a.jsx("i",{className:`fas fa-angle-right text-sm font-medium ${d.includes("job-location")?"text-tremor-brand-boulder950":"text-tremor-brand-boulder200"}`}),a.jsx("button",{className:`text-sm font-medium ${d.includes("job-location")?"text-tremor-brand-boulder950":"text-tremor-brand-boulder200"}`,children:"Job Location"}),a.jsx("i",{className:`fas fa-angle-right text-sm font-medium ${d.includes("organization-information")?"text-tremor-brand-boulder950":"text-tremor-brand-boulder200"}`}),a.jsx("button",{className:`text-sm font-medium ${d.includes("organization-information")?"text-tremor-brand-boulder950":"text-tremor-brand-boulder200"}`,children:"Organization Information"})]}),e]})})}},48783:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>f});var a=r(53854),o=r(34218),s=r(98865),i=r(38318),n=r(51018),l=r(75548),d=r.n(l),c=r(33542),u=r(60799),m=r(30472),p=r(80542),x=r(861);function f(){let[e,t]=(0,o.useState)(null),l=(0,n.useRouter)(),[f,b]=(0,o.useState)(!1),[h,g]=(0,o.useState)(!1),[j,y]=(0,o.useState)(""),[w,N]=(0,o.useState)(""),[v,S]=(0,o.useState)(!0),[P,A]=(0,o.useState)(""),[E,q]=(0,o.useState)(""),[z,k]=(0,o.useState)(null),[C,O]=(0,o.useState)(!1),T=(0,o.useRef)();(0,o.useEffect)(()=>{let e=i.Z.get("jobPostData"),r=JSON.parse(i.Z.get("analogueshifts"));e&&JSON.parse(e).jobInformation&&JSON.parse(e).jobDetails&&JSON.parse(e).jobLocation||l.push("/tools/hire/create/job-information"),r&&t(r)},[]),(0,o.useEffect)(()=>{var e=!1;[j].forEach(t=>{""===t&&(e=!0)}),S(e)},[j]);let L=t=>{let a=r(66575),o={method:"POST",url:"https://api.analogueshifts.com/api/hire/store",headers:{"Content-Type":"application/json",Authorization:"Bearer "+e.token},data:t};b(!0),a.request(o).then(e=>{b(!1),m.toast.success("Your Hire Request Has Been Sent",x.D),i.Z.remove("jobPostData"),l.push("/tools/hire")}).catch(e=>{m.toast.error(e.message,x.D),b(!1),console.log(e)})},R=async t=>{let a=r(66575),o=new FormData;o.append("upload",t),o.append("type","image");let s={method:"POST",url:"https://api.analogueshifts.com/api/upload",headers:{Accept:"application/json","Content-Type":"multipart/form-data",Authorization:"Bearer "+e.token},data:o};g(!0);try{let e=await a.request(s);q(e.data.data.path),k(t),g(!1)}catch(e){g(!1),m.toast.error("Error Uploading Logo",x.D),console.log(e)}};return(0,a.jsxs)(s.Z,{children:[f&&a.jsx(p.Z,{}),(0,a.jsxs)("form",{onSubmit:e=>{e.preventDefault();let t=JSON.parse(i.Z.get("jobPostData"));L({title:t.jobInformation.title,description:t.jobInformation.description,identifier:{"@type":"PropertyValue",name:t.jobInformation.identifierName,value:t.jobInformation.identifierValue},validThrough:t.jobInformation.validThrough,employmentType:t.jobDetails.employmentType,hiringOrganization:{"@type":"Organization",name:j,sameAs:w,logo:C?P:E},jobLocation:{"@type":"Place",address:{"@type":"PostalAddress",streetAddress:t.jobLocation.streetAddress,addressLocality:t.jobLocation.addressLocality,addressRegion:t.jobLocation.addressRegion,postalCode:t.jobLocation.postalCode,addressCountry:t.jobLocation.addressCountry}},jobLocationType:t.jobLocation.jobLocationType,applicantLocationRequirements:[...t.jobLocation.stateRequirements,...t.jobLocation.countryRequirements],baseSalary:{"@type":"MonetaryAmount",currency:t.jobDetails.salaryCurrency,value:{"@type":"QuantitativeValue",value:t.jobDetails.salaryValue,unitText:t.jobDetails.salaryUnitText}},apply:t.jobDetails.apply,directApply:t.jobDetails.directApply,status:t.jobDetails.status})},className:"w-full flex flex-col gap-6",children:[(0,a.jsxs)("div",{className:"w-full pb-6 border-b border-tremor-brand-boulder200 flex flex-col md:justify-between md:flex-row gap-y-4",children:[(0,a.jsxs)("div",{className:"w-full md:w-1/2 flex flex-col gap-4 md:pr-5",children:[a.jsx("p",{className:"text-sm font-normal text-tremor-brand-boulder400",children:"ORGANIZATION NAME"}),a.jsx("p",{className:"font-light text-[13px] text-tremor-brand-boulder900",children:"The official name of the company or organization offering the job"})]}),a.jsx("div",{className:"w-full md:w-1/2",children:a.jsx("input",{required:!0,type:"text",value:j,onChange:e=>y(e.target.value),placeholder:"e.g “AnalogueShifts”",className:"max-w-full w-full h-14 rounded-2xl  px-5 border border-tremor-brand-boulder200 text-[13px] font-light placeholder:text-tremor-brand-boulder300 text-tremor-brand-boulder950 outline-1 outline-tremor-background-darkYellow"})})]}),(0,a.jsxs)("div",{className:"w-full pb-6 border-b border-tremor-brand-boulder200 flex flex-col md:justify-between md:flex-row gap-y-4",children:[(0,a.jsxs)("div",{className:"w-full md:w-1/2 flex flex-col gap-4 md:pr-5",children:[a.jsx("p",{className:"text-sm font-normal text-tremor-brand-boulder400",children:"ORGANIZATION WEBSITE"}),a.jsx("p",{className:"font-light text-[13px] text-tremor-brand-boulder900",children:"This refers to the web address (URL) of the organization's official website."})]}),a.jsx("div",{className:"w-full md:w-1/2",children:a.jsx("input",{type:"url",value:w,onChange:e=>N(e.target.value),placeholder:"e.g “www.analogueshifts.com”",className:"max-w-full w-full h-14 rounded-2xl  px-5 border border-tremor-brand-boulder200 text-[13px] font-light placeholder:text-tremor-brand-boulder300 text-tremor-brand-boulder950 outline-1 outline-tremor-background-darkYellow"})})]}),(0,a.jsxs)("div",{className:"w-full pb-6 border-b border-tremor-brand-boulder200 flex flex-col md:justify-between md:flex-row gap-y-4",children:[(0,a.jsxs)("div",{className:"w-full md:w-1/2 flex flex-col gap-4 md:pr-5",children:[a.jsx("p",{className:"text-sm font-normal text-tremor-brand-boulder400",children:"ORGANIZATION LOGO"}),a.jsx("p",{className:"font-light text-[13px] text-tremor-brand-boulder900",children:"This is the graphical symbol or emblem representing the organization."}),(0,a.jsxs)("div",{className:"w-full flex items-center flex-wrap gap-2.5",children:[a.jsx("p",{className:"font-light text-[13px] text-tremor-brand-boulder900",children:"Use Url Format"}),a.jsx("div",{className:"switch","data-isOn":C,onClick:()=>O(!C),children:a.jsx(c.E.div,{className:"handle",layout:!0,transition:{opacity:{ease:"linear"},layout:{duration:.3}}})})]})]}),a.jsx("div",{className:"w-full md:w-1/2",children:C?a.jsx("input",{type:"url",value:P,onChange:e=>A(e.target.value),placeholder:"e.g “www.analogueshifts.com/logo.png”",className:"max-w-full w-full h-14 rounded-2xl  px-5 border border-tremor-brand-boulder200 text-[13px] font-light placeholder:text-tremor-brand-boulder300 text-tremor-brand-boulder950 outline-1 outline-tremor-background-darkYellow"}):(0,a.jsxs)("div",{className:"relative w-full h-max rounded-3xl overflow-hidden",children:[h&&a.jsx("div",{style:{zIndex:3e3},className:"absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-300/30 bg-opacity-80",children:(0,a.jsxs)("div",{className:"lds-roller",children:[a.jsx("div",{}),a.jsx("div",{}),a.jsx("div",{}),a.jsx("div",{}),a.jsx("div",{}),a.jsx("div",{}),a.jsx("div",{}),a.jsx("div",{})]})}),a.jsx(u.Z,{value:z,setValue:R})]})})]}),a.jsx("input",{ref:T,type:"submit",className:"-z-10 opacity-0"})]}),(0,a.jsxs)("div",{className:"flex w-full justify-between",children:[(0,a.jsxs)(d(),{href:"/tools/hire/create/job-location",className:"px-6 text-tremor-background-darkYellow text-base border duration-300 hover:scale-105 font-normal flex items-center gap-2 h-10 bg-transparent border-tremor-background-darkYellow rounded-full",children:[a.jsx("i",{className:"fas fa-arrow-left "})," Previous"]}),a.jsx("button",{disabled:v,onClick:()=>T.current.click(),type:"button",className:`px-6 text-[#FEFEFE] text-base duration-300 hover:scale-105 font-normal flex items-center gap-2 h-10 bg-tremor-background-darkYellow rounded-full border-none ${v?"opacity-50":"opacity-100"}`,children:"Create Job"})]})]})}},60799:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var a=r(53854),o=r(34218),s=r(30472);function i({value:e,setValue:t}){let[r,i]=(0,o.useState)(e?"Success":""),n=(0,o.useRef)();return(0,o.useEffect)(()=>{e&&i("Success")},[e]),(0,a.jsxs)("section",{children:[a.jsx("input",{accept:"image/jpeg,image/png,application/pdf",onChange:e=>{let r=e.target.files[0];if(r&&r.size>5242880){s.toast.error("File size exceeds the limit (5 MB)",{position:"top-right",autoClose:3e3});return}r?t(r):i("")},ref:n,type:"file",className:"-z-10 hidden opacity-0"}),a.jsx("div",{onClick:()=>n.current.click(),className:`max-w-full cursor-pointer py-5 w-full h-auto border-dashed rounded-3xl  px-5 border  flex flex-col items-center ${"Success"===r?"border-tremor-brand-success":"border-tremor-brand-boulder200"}`,children:"Success"!==r?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("p",{className:"flex text-tremor-brand-boulder700 items-center gap-1.5 mb-1",children:[a.jsx("span",{className:"font-medium text-sm",children:"Upload Here"}),a.jsx("i",{className:"fas fa-cloud-arrow-up text-sm"})]}),a.jsx("p",{className:"font-light text-[13px] text-tremor-brand-boulder500 mb-1",children:"Supports JPG, JPEG, PNG, PDF"}),a.jsx("p",{className:"font-light text-[13px] text-tremor-brand-boulder500 mb-1",children:"Maximum file size 5mb"})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("p",{className:"flex text-tremor-brand-success items-center gap-1.5 mb-1",children:[a.jsx("span",{className:"font-medium text-sm",children:"Upload Successful"}),a.jsx("i",{className:"fas fa-circle-check text-sm"})]}),a.jsx("p",{className:"font-light text-[13px] text-tremor-brand-success mb-1",children:e?.name})]})})]})}},56291:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c,metadata:()=>d});var a=r(4656),o=r(95153);let s=(0,o.createProxy)(String.raw`C:\Users\USER\Promise\AnalogueShifts\analogueshifts.com\app\tools\hire\components\create\organization-information.js`),{__esModule:i,$$typeof:n}=s,l=s.default,d={title:"Hire Talents | AnalogueShifts",description:"Looking for the best tech talent worldwide? Analogueshifts is the recruitment agency for you. Our team of experts can help you streamline recruitment and find the perfect talent for your organization. ",openGraph:{title:"Tech Talent Recruitment and Acquisition | AnalogueShifts",description:"Looking for the best tech talent worldwide? Analogueshifts is the recruitment agency for you. Our team of experts can help you streamline recruitment and find the perfect talent for your organization. ",url:"https://www.analogueshifts.com/tools/hire/talents",siteName:"AnalogueShifts",images:[{url:"/images/a4.jpg",width:800,height:600}],locale:"en_US",type:"website"},alternates:{canonical:"/tools/hire/talents"}};function c(){return a.jsx(l,{})}}};var t=require("../../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[3271,7237,5548,6575,8469,895,5019,3542,5725],()=>r(99046));module.exports=a})();