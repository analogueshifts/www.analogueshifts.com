"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7777],{7777:function(e,s,t){t.d(s,{Z:function(){return y}});var a=t(7437),l=t(2265),i={src:"/_next/static/media/logo.79a82f19.png",height:490,width:509,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAUVBMVEVMaXHkvTm7lzjctTfgoEPjuzvatToSEgwKCggCAgQxKhTswjwMCgUAAADqwDvSrjdKPRjatDhmViDlvjrfuDiliS3UrzXRrTWTeijVrzfCnTDmwFSYAAAAG3RSTlMAahjxApEpC3C2OHGUg7GiPrZtW9OL48l5jirpqIgbAAAACXBIWXMAABcSAAAXEgFnn9JSAAAAP0lEQVR4nCXIRw6AQAwAsdlGkm30+v+HIsHNMkTcQISID+lHSeNXssw+C6Atuaogdq19MkFrf+7SFNvDeWzZXjIhAg7aPQfJAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},n=t(6691),r=t.n(n),o=t(1396),c=t.n(o),d=t(4033),m=t(7415),x=t(1350),u=t(1424);let h=e=>{let{...s}=e,{theme:t="system"}=(0,x.F)();return(0,a.jsx)(u.x,{theme:t,className:"toaster group",toastOptions:{classNames:{toast:"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",description:"group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}},...s})},f=(e,s,t,a)=>{(0,u.A)(e,{description:s,actionButtonStyle:{backgroundColor:"#E5BE39"},dismissible:!1,duration:1/0,action:{label:t,onClick:a}})};var g=t(1490),p=t(3333),j=t(3206);function b(e){let{user:s,close:t,handleLogout:i}=e,[n,r]=(0,l.useState)("translateX(-100%)"),[o,m]=(0,l.useState)(0);return(0,d.usePathname)(),(0,l.useEffect)(()=>{r("translateX(0px)"),m(1)},[]),(0,a.jsx)("div",{style:{transform:n},className:"fixed duration-500 w-full top-0 left-0 h-[100dvh] bg-white z-50 ",children:(0,a.jsxs)("div",{className:"absolute bg-transparent  w-full h-[calc(100%-80px)] top-[80px] z-60 flex flex-col justify-center items-center gap-10",children:[(0,a.jsxs)(c(),{style:{opacity:o,transitionDelay:"0.5s"},href:"/dashboard",className:" duration-500 text-base font-semibold flex items-center gap-2",children:[(0,a.jsx)("span",{className:"text-black/80",children:"Dashboard"}),(0,a.jsx)("i",{className:"fas fa-border-all text-black/80 text-sm"})]}),(0,a.jsxs)(c(),{style:{opacity:o,transitionDelay:"0.7s"},href:"/tools/hire",className:" duration-500 text-base font-semibold flex items-center gap-2",children:[(0,a.jsx)("span",{className:"text-black/80",children:"Hire Talents"})," ",(0,a.jsx)("i",{className:"fas fa-users text-black/80 text-sm"})]}),(0,a.jsxs)(c(),{style:{opacity:o,transitionDelay:"0.9s"},href:"/tools/vet",className:" text-base duration-500 font-semibold flex items-center gap-2",children:[(0,a.jsx)("span",{className:"text-black/80",children:"Vetting System"})," ",(0,a.jsx)("i",{className:"fa-brands fa-teamspeak text-black/80 text-sm"})]}),(null==s?void 0:s.role)=="admin"&&(0,a.jsxs)(c(),{style:{opacity:o,transitionDelay:"1.1s"},href:"/dashboard/users",className:" text-base duration-500 font-semibold flex items-center gap-2",children:[(0,a.jsx)("span",{className:"text-black/80",children:"Users"})," ",(0,a.jsx)("i",{className:"fas fa-users text-black/80 text-sm"})]}),(0,a.jsxs)("button",{onClick:i,type:"button",style:{opacity:o,transitionDelay:"".concat("admin"==s.role?"1.3s":"1.1s")},className:" text-base duration-500 font-semibold flex items-center gap-2",children:[(0,a.jsx)("span",{className:"text-red-600",children:"LogOut"}),(0,a.jsx)("i",{className:"fas fa-right-from-bracket text-red-600 text-sm"})]})]})})}var N=t(8353),v=t(2651);function y(e){let{header:s,children:n}=e,o=(0,d.usePathname)(),x=(0,d.useRouter)(),[u,y]=(0,l.useState)(null),[w,A]=(0,l.useState)(!1),[k,S]=(0,l.useState)(!1),[C,D]=(0,l.useState)(""),[E,z]=(0,l.useState)(!1);async function T(){let e=t(1630),s={url:"https://api.analogueshifts.com/api/logout",method:"POST",headers:{Authorization:"Bearer "+(null==u?void 0:u.token)}};z(!0),e.request(s).then(e=>{g.Z.remove("analogueshifts"),window.location.href="/login"}).catch(e=>{z(!1),m.toast.error(e.message,v.D)})}function F(){let e=t(1630),s={url:"https://api.analogueshifts.com/api/email/verification-notification",method:"POST",headers:{Authorization:"Bearer "+(null==u?void 0:u.token)}};z(!0),e.request(s).then(e=>{z(!1),x.push("/email-verification")}).catch(e=>{z(!1),m.toast.error(e.message,v.D)})}let L=e=>{let s=document.querySelector(".sidebar");s.classList.toggle(e)},V=()=>{k?(D(""),S(e=>!e)):(D("open"),S(e=>!e))};return(0,l.useEffect)(()=>{let e=g.Z.get("analogueshifts");if(null==e)return g.Z.set("RedirectionLink",o),window.location.href="/login",null;y(JSON.parse(e));let s=document.querySelector(".sidebar");return window.addEventListener("resize",()=>{window.innerWidth<768&&s.classList.add("hide")}),window.innerWidth<768&&s.classList.add("hide"),window.addEventListener("resize",()=>{S(!1),D("")}),window.removeEventListener("resize",()=>{S(!1),D("")})},[]),(0,l.useEffect)(()=>{console.log(u),u&&!u.email_verified_at&&f("Unverified Email","Your email address is not verified","Verify Email",F)},[u]),(0,a.jsxs)("main",{className:"body",children:[E&&(0,a.jsx)(p.Z,{}),(0,a.jsx)(N.Z,{close:()=>A(!1),open:w,action:()=>{A(!1),T()},title:"Log Out",description:"Are you sure you want to sign out of your account? You can always sign in at anytime."}),(0,a.jsxs)("section",{className:"sidebar",children:[(0,a.jsxs)("div",{className:"logo fixed sm:static",children:[(0,a.jsx)(c(),{href:"https://www.analogueshifts.com",className:"icon sm:flex hidden",children:(0,a.jsx)(r(),{src:i,alt:"Logo",className:"w-6 h-6"})}),(0,a.jsx)("div",{className:"text pt-1.5",children:s})]}),(0,a.jsxs)("ul",{className:"side-menu top",children:[(0,a.jsx)("li",{className:"".concat("/dashboard"===o?"active":""),children:(0,a.jsxs)(c(),{href:"/dashboard",className:"nav-link",children:[(0,a.jsx)("i",{className:"fas fa-border-all"}),(0,a.jsx)("span",{className:"text hidden sm:flex",children:"Dashboard"})]})}),(0,a.jsx)("li",{className:"".concat(o.startsWith("/tools/hire")?"active":""),children:(0,a.jsxs)(c(),{href:"/tools/hire",className:"nav-link",children:[(0,a.jsx)("i",{className:"fas fa-users"}),(0,a.jsx)("span",{className:"text hidden sm:flex",children:"Hire Talents"})]})}),(0,a.jsx)("li",{className:"".concat(o.startsWith("/tools/vet")?"active":""),children:(0,a.jsxs)(c(),{href:"/tools/vet",className:"nav-link",children:[(0,a.jsx)("i",{className:"fa-brands fa-teamspeak"}),(0,a.jsx)("span",{className:"text hidden sm:flex",children:"Vetting System"})]})}),(null==u?void 0:u.role)=="admin"&&(0,a.jsx)("li",{className:"".concat(""===o?"active":""),children:(0,a.jsxs)(c(),{href:"",className:"nav-link",children:[(0,a.jsx)("i",{className:"fas fa-users"}),(0,a.jsx)("span",{className:"text hidden sm:flex",children:"Users"})]})})]}),(0,a.jsx)("ul",{className:"side-menu",children:(0,a.jsx)("li",{children:(0,a.jsxs)("button",{onClick:()=>{A(!0)},className:"logout",children:[(0,a.jsx)("i",{className:"fas fa-right-from-bracket"}),(0,a.jsx)("span",{className:"text hidden sm:flex",children:"Logout"})]})})})]}),(0,a.jsxs)("section",{className:"content",children:[(0,a.jsxs)("nav",{className:" justify-between z-50",children:[(0,a.jsx)("i",{onClick:()=>L("hide"),className:"fas fa-bars menu-btn"}),(0,a.jsx)(c(),{href:"https://www.analogueshifts.com",className:"sm:hidden flex",children:(0,a.jsx)(j.Z,{})}),(0,a.jsxs)("button",{className:"".concat(C," block z-60 hamburger sm:hidden outline-none"),type:"button",onClick:V,children:[(0,a.jsx)("span",{className:"hamburger-top ".concat(k?"bg-black/80":"bg-[#342e37]")}),(0,a.jsx)("span",{className:"hamburger-middle ".concat(k?"bg-black/80":"bg-[#342e37]")}),(0,a.jsx)("span",{className:"hamburger-bottom ".concat(k?"bg-black/80":"bg-[#342e37]")})]}),k&&(0,a.jsx)(b,{user:u,close:()=>S(!1),handleLogout:()=>{V(),A(!0)}})]}),(0,a.jsx)("main",{className:"p-7 h-[calc(100dvh-56px)] overflow-y-auto",children:n})]}),(0,a.jsx)(h,{})]})}},3206:function(e,s,t){var a=t(7437);s.Z=()=>(0,a.jsxs)("div",{className:"flex gap-3",children:[(0,a.jsx)("img",{src:"/logo.png",className:"w-10 h-10",alt:""}),(0,a.jsxs)("h3",{className:"text-lg font-bold uppercase text-zinc-600 leading-5",children:[(0,a.jsx)("span",{className:"tracking-widest text-yellow-400",children:"Analogue"}),(0,a.jsx)("br",{}),(0,a.jsx)("span",{className:"tracking-[1rem]",children:"Shifts"})]})]})},3333:function(e,s,t){t.d(s,{Z:function(){return l}});var a=t(7437);function l(){return(0,a.jsx)("div",{style:{zIndex:5},className:"fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-200 bg-opacity-80",children:(0,a.jsxs)("div",{className:"lds-roller",children:[(0,a.jsx)("div",{}),(0,a.jsx)("div",{}),(0,a.jsx)("div",{}),(0,a.jsx)("div",{}),(0,a.jsx)("div",{}),(0,a.jsx)("div",{}),(0,a.jsx)("div",{}),(0,a.jsx)("div",{})]})})}},8353:function(e,s,t){t.d(s,{Z:function(){return r}});var a=t(7437),l=t(2265),i=t(9805),n=t(3097);function r(e){let{title:s,description:t,open:r,action:o,close:c}=e,d=(0,l.useRef)(null);return(0,a.jsx)(i.u.Root,{show:r,as:l.Fragment,children:(0,a.jsxs)(n.V,{as:"div",className:"relative z-10",initialFocus:d,onClose:c,children:[(0,a.jsx)(i.u.Child,{as:l.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,a.jsx)("div",{className:"fixed inset-0 bg-gray-300 bg-opacity-75 transition-opacity"})}),(0,a.jsx)("div",{className:"fixed inset-0 z-10 w-screen overflow-y-auto",children:(0,a.jsx)("div",{className:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0",children:(0,a.jsx)(i.u.Child,{as:l.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:(0,a.jsxs)(n.V.Panel,{className:"relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg",children:[(0,a.jsx)("div",{className:"bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4",children:(0,a.jsxs)("div",{className:"sm:flex sm:items-start",children:[(0,a.jsx)("div",{className:"mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10",children:(0,a.jsx)("i",{className:" text-red-600 fas fa-triangle-exclamation","aria-hidden":"true"})}),(0,a.jsxs)("div",{className:"mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left",children:[(0,a.jsx)(n.V.Title,{as:"h3",className:"text-base font-semibold leading-6 text-gray-900",children:s}),(0,a.jsx)("div",{className:"mt-2",children:(0,a.jsx)("p",{className:"text-sm text-gray-500",children:t})})]})]})}),(0,a.jsxs)("div",{className:"bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6",children:[(0,a.jsx)("button",{type:"button",className:"inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto",onClick:o,children:s}),(0,a.jsx)("button",{type:"button",className:"mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto",onClick:c,ref:d,children:"Cancel"})]})]})})})})]})})}},2651:function(e,s,t){t.d(s,{D:function(){return a}});let a={position:"top-right",autoClose:3e3}}}]);