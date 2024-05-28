(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9804],{5678:function(e,t,r){Promise.resolve().then(r.bind(r,1737))},1737:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return b}});var l=r(7437),a=r(2265),o=r(862),s=r(1490),n=r(4033),d=r(1396),i=r.n(d),m=r(5673),u=r(1302),c=r(1238),x=r(7415);function b(){let[e,t]=(0,a.useState)(!0),r=(0,n.usePathname)(),[d,b]=(0,a.useState)(c.ki[0]),[f,h]=(0,a.useState)(c.Gh[0]),[p,j]=(0,a.useState)(c.kX[0]),[g,w]=(0,a.useState)(c.ru[0]),[N,y]=(0,a.useState)(""),[v,S]=(0,a.useState)(c.l2[0]),[E,k]=(0,a.useState)(""),[T,C]=(0,a.useState)(""),[O,J]=(0,a.useState)(""),Z=(0,n.useRouter)(),A=(0,a.useRef)(),Y=r.slice(17,r.length).split("/")[0];return(0,a.useEffect)(()=>{var e=!1;(""===N.trim()||"false"===p&&""===T.trim()||"true"===p&&""===O.trim())&&(e=!0),t(e)},[N,T,O,p]),(0,a.useEffect)(()=>{let e=s.Z.get("jobEditIngData");if(e){if(JSON.parse(e).jobDetails){var t=JSON.parse(e).jobDetails;J(t.apply),h("0"===t.status?"Offline":"Online"),b(t.employmentType),w(t.salaryCurrency),y(t.salaryValue),S(t.salaryUnitText)}}else e&&JSON.parse(e).jobInformation||Z.push("/tools/hire/edit/".concat(Y,"/job-information"))},[]),(0,l.jsxs)(o.Z,{children:[(0,l.jsxs)("form",{onSubmit:e=>{if(e.preventDefault(),isNaN(N)){x.toast.error("Error! Salary value must be a valid number",{position:"top-right",autoClose:3e3});return}let t=s.Z.get("jobEditIngData");if(t){let e=JSON.parse(t);s.Z.set("jobEditingData",JSON.stringify({...e,jobDetails:{employmentType:d,apply:"true"===p?O:"https://forms.analogueshifts.com/forms/show/"+T,directApply:p,status:"Offline"===f?"0":"1",salaryCurrency:g,salaryValue:N,salaryUnitText:v}}))}Z.push("/tools/hire/edit/".concat(Y,"/job-location"))},className:"w-full flex flex-col gap-6",children:[(0,l.jsxs)("div",{className:"w-full pb-6 border-b border-tremor-brand-boulder200 flex flex-col md:justify-between md:flex-row gap-y-4",children:[(0,l.jsxs)("div",{className:"w-full md:w-1/2 flex flex-col gap-4 md:pr-5",children:[(0,l.jsx)("p",{className:"text-sm font-normal text-tremor-brand-boulder400",children:"JOB STATUS"}),(0,l.jsx)("p",{className:"font-light text-[13px] text-tremor-brand-boulder900",children:"The Status of the Job Post."})]}),(0,l.jsx)("div",{className:"w-full md:w-1/2",children:(0,l.jsx)(m.Z,{value:f,onChange:h,list:c.Gh})})]}),(0,l.jsxs)("div",{className:"w-full pb-6 border-b border-tremor-brand-boulder200 flex flex-col md:justify-between md:flex-row gap-y-4",children:[(0,l.jsxs)("div",{className:"w-full md:w-1/2 flex flex-col gap-4 md:pr-5",children:[(0,l.jsx)("p",{className:"text-sm font-normal text-tremor-brand-boulder400",children:"EMPLOYMENT TYPE"}),(0,l.jsx)("p",{className:"font-light text-[13px] text-tremor-brand-boulder900",children:"Specifies the type of employment offered for the job."})]}),(0,l.jsx)("div",{className:"w-full md:w-1/2",children:(0,l.jsx)(m.Z,{value:d,onChange:b,list:c.ki})})]}),(0,l.jsxs)("div",{className:"w-full pb-6 border-b border-tremor-brand-boulder200 flex flex-col md:justify-between md:flex-row gap-y-4",children:[(0,l.jsxs)("div",{className:"w-full md:w-1/2 flex flex-col gap-4 md:pr-5",children:[(0,l.jsx)("p",{className:"text-sm font-normal text-tremor-brand-boulder400",children:"SALARY CURRENCY"}),(0,l.jsx)("p",{className:"font-light text-[13px] text-tremor-brand-boulder900",children:"The currency in which the salary is denoted, such as USD, EUR, or GBP."})]}),(0,l.jsx)("div",{className:"w-full md:w-1/2",children:(0,l.jsx)(m.Z,{value:g,onChange:w,list:c.ru})})]}),(0,l.jsxs)("div",{className:"w-full pb-6 border-b border-tremor-brand-boulder200 flex flex-col md:justify-between md:flex-row gap-y-4",children:[(0,l.jsxs)("div",{className:"w-full md:w-1/2 flex flex-col gap-4 md:pr-5",children:[(0,l.jsx)("p",{className:"text-sm font-normal text-tremor-brand-boulder400",children:"SALARY VALUE"}),(0,l.jsx)("p",{className:"font-light text-[13px] text-tremor-brand-boulder900",children:"The numerical value representing the salary amount offered for the job."})]}),(0,l.jsx)("div",{className:"w-full md:w-1/2",children:(0,l.jsx)("input",{required:!0,type:"text",value:N,onChange:e=>y(e.target.value),placeholder:"e.g “2000”",className:"max-w-full w-full h-14 rounded-2xl  px-5 border border-tremor-brand-boulder200 text-[13px] font-light placeholder:text-tremor-brand-boulder300 text-tremor-brand-boulder950 outline-1 outline-tremor-background-darkYellow"})})]}),(0,l.jsxs)("div",{className:"w-full pb-6 border-b border-tremor-brand-boulder200 flex flex-col md:justify-between md:flex-row gap-y-4",children:[(0,l.jsxs)("div",{className:"w-full md:w-1/2 flex flex-col gap-4 md:pr-5",children:[(0,l.jsx)("p",{className:"text-sm font-normal text-tremor-brand-boulder400",children:"SALARY UNIT TEXT"}),(0,l.jsx)("p",{className:"font-light text-[13px] text-tremor-brand-boulder900",children:"Indicates the time unit associated with the salary value."})]}),(0,l.jsx)("div",{className:"w-full md:w-1/2",children:(0,l.jsx)(m.Z,{value:v,onChange:S,list:c.l2})})]}),(0,l.jsxs)("div",{className:"w-full pb-6 border-b border-tremor-brand-boulder200 flex flex-col md:justify-between md:flex-row gap-y-4",children:[(0,l.jsxs)("div",{className:"w-full md:w-1/2 flex flex-col gap-4 md:pr-5",children:[(0,l.jsx)("p",{className:"text-sm font-normal text-tremor-brand-boulder400",children:"DIRECT APPLY"}),(0,l.jsx)("p",{className:"font-light text-[13px] text-tremor-brand-boulder900",children:"The Job Application link type (Set this to false if you want to use an internal Form URL)"})]}),(0,l.jsx)("div",{className:"w-full md:w-1/2",children:(0,l.jsx)(m.Z,{value:p,onChange:j,list:c.kX})})]}),(0,l.jsxs)("div",{className:"w-full pb-6 border-b border-tremor-brand-boulder200 flex flex-col md:justify-between md:flex-row gap-y-4",children:[(0,l.jsxs)("div",{className:"w-full md:w-1/2 flex flex-col gap-4 md:pr-5",children:[(0,l.jsx)("p",{className:"text-sm font-normal text-tremor-brand-boulder400",children:"APPLY"}),(0,l.jsx)("p",{className:"font-light text-[13px] text-tremor-brand-boulder900",children:"The Job Application URL"})]}),(0,l.jsx)("div",{className:"w-full md:w-1/2",children:"true"===p?(0,l.jsx)("input",{required:!0,type:"url",value:O,onChange:e=>J(e.target.value),placeholder:"e.g “https://www.analogueshifts.com”",className:"max-w-full w-full h-14 rounded-2xl  px-5 border border-tremor-brand-boulder200 text-[13px] font-light placeholder:text-tremor-brand-boulder300 text-tremor-brand-boulder950 outline-1 outline-tremor-background-darkYellow"}):(0,l.jsx)(u.Z,{selectedForm:T,setSelectedForm:C})})]}),(0,l.jsx)("input",{ref:A,type:"submit",className:"-z-10 opacity-0"})]}),(0,l.jsxs)("div",{className:"flex w-full justify-between",children:[(0,l.jsxs)(i(),{href:"/tools/hire/edit/".concat(Y,"/job-information"),className:"px-6 text-tremor-background-darkYellow text-base border duration-300 hover:scale-105 font-normal flex items-center gap-2 h-10 bg-transparent border-tremor-background-darkYellow rounded-full",children:[(0,l.jsx)("i",{className:"fas fa-arrow-left "})," Previous"]}),(0,l.jsxs)("button",{disabled:e,onClick:()=>A.current.click(),type:"button",className:"px-6 text-[#FEFEFE] text-base duration-300 hover:scale-105 font-normal flex items-center gap-2 h-10 bg-tremor-background-darkYellow rounded-full border-none ".concat(e?"opacity-50":"opacity-100"),children:["Next ",(0,l.jsx)("i",{className:"fas fa-arrow-right "})]})]})]})}},862:function(e,t,r){"use strict";r.d(t,{Z:function(){return d}});var l=r(7437),a=r(4033),o=r(2265),s=r(1490),n=r(948);function d(e){let{children:t}=e,r=(0,a.usePathname)(),[d,i]=(0,o.useState)(null),[m,u]=(0,o.useState)(["job-information"]),[c,x]=(0,o.useState)(null),b=(0,a.useRouter)();return(0,o.useEffect)(()=>{let e=JSON.parse(s.Z.get("analogueshifts")),t=s.Z.get("jobEditIngData");e&&i(e),t?x(JSON.parse(t)):b.push("tools/hire")},[]),(0,o.useEffect)(()=>{r.endsWith("job-information")?u(["job-information"]):r.endsWith("job-details")?u(["job-information","job-details"]):r.endsWith("job-location")?u(["job-information","job-details","job-location"]):r.endsWith("organization-information")&&u(["job-information","job-details","job-location","organization-information"])},[r]),(0,l.jsx)(n.Z,{user:d,header:(0,l.jsx)("h2",{className:"text-xl font-bold text-gray-800 leading-tight",children:"Hire"}),children:(0,l.jsxs)("section",{className:"bg-[#FEFEFE] mt-2 border border-[#E7E7E7] h-max px-4 lg:px-7 py-10 rounded-3xl",children:[(0,l.jsxs)("div",{className:"w-full mb-12 flex gap-y-2 gap-x-3 flex-wrap items-center",children:[(0,l.jsx)("button",{className:"text-sm font-medium ".concat(m.includes("job-information")?"text-tremor-brand-boulder950":"text-tremor-brand-boulder200"),children:"Job Information"}),(0,l.jsx)("i",{className:"fas fa-angle-right text-sm font-medium ".concat(m.includes("job-details")?"text-tremor-brand-boulder950":"text-tremor-brand-boulder200")}),(0,l.jsx)("button",{className:"text-sm font-medium ".concat(m.includes("job-details")?"text-tremor-brand-boulder950":"text-tremor-brand-boulder200"),children:"Job Details"}),(0,l.jsx)("i",{className:"fas fa-angle-right text-sm font-medium ".concat(m.includes("job-location")?"text-tremor-brand-boulder950":"text-tremor-brand-boulder200")}),(0,l.jsx)("button",{className:"text-sm font-medium ".concat(m.includes("job-location")?"text-tremor-brand-boulder950":"text-tremor-brand-boulder200"),children:"Job Location"}),(0,l.jsx)("i",{className:"fas fa-angle-right text-sm font-medium ".concat(m.includes("organization-information")?"text-tremor-brand-boulder950":"text-tremor-brand-boulder200")}),(0,l.jsx)("button",{className:"text-sm font-medium ".concat(m.includes("organization-information")?"text-tremor-brand-boulder950":"text-tremor-brand-boulder200"),children:"Organization Information"})]}),c&&t]})})}}},function(e){e.O(0,[1176,1630,413,2303,3203,3114,9719,948,2991,2971,2472,1744],function(){return e(e.s=5678)}),_N_E=e.O()}]);