(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9330],{8166:function(e,t,i){Promise.resolve().then(i.bind(i,8943))},8943:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return h}});var a=i(7437),n=i(2265),r=i(7777),o=i(7415),s=i(4033),l=i(3333),u=i(1490),c=i(2651);function h(e){let{slug:t}=e,h=(0,s.useRouter)(),[p,d]=(0,n.useState)(null),[g,f]=(0,n.useState)(!1),y=()=>{f(!0);let e=i(1630),a={method:"GET",url:"https://api.analogueshifts.com/api/hire/edit/"+t,headers:{Authorization:"Bearer "+p.token}};e.request(a).then(e=>{let i=e.data.data.hire;i?(u.Z.set("jobEditIngData",JSON.stringify({jobInformation:{title:i.title,description:i.description,identifierName:i.identifier.name?i.identifier.name:"",identifierValue:i.identifier.value?i.identifier.value:"",validThrough:i.validThrough},organizationInformation:{organizationName:i.hiringOrganization.name,organizationUrl:i.hiringOrganization.sameAs?i.hiringOrganization.sameAs:"",organizationLogo:i.hiringOrganization.logo?i.hiringOrganization.logo:""},jobLocation:{...i.jobLocation.address,jobLocationType:i.jobLocationType,stateRequirements:[...i.applicantLocationRequirements.filter(e=>"State"===e["@type"])],countryRequirements:[...i.applicantLocationRequirements.filter(e=>"Country"===e["@type"])]},jobDetails:{employmentType:i.employmentType,apply:i.apply,directApply:i.directApply,status:i.status,salaryCurrency:i.baseSalary.currency,salaryValue:i.baseSalary.value.value,salaryUnitText:i.baseSalary.value.unitText},editId:i.id})),h.push("/tools/hire/edit/".concat(t,"/job-information"))):(o.toast.error("Error Getting Jobs",{position:"top-right",autoClose:3e3}),h.push("/404")),f(!1)}).catch(e=>{f(!1),h.push("/404"),o.toast.error("Error Getting Jobs",c.D)})};return(0,n.useEffect)(()=>{p&&y()},[p]),(0,n.useEffect)(()=>{u.Z.get("analogueshifts")&&d(JSON.parse(u.Z.get("analogueshifts")))},[]),(0,a.jsxs)(r.Z,{header:(0,a.jsx)("h2",{className:"text-xl font-bold text-gray-800 leading-tight",children:"Hire"}),children:[" ",g&&(0,a.jsx)(l.Z,{})]})}}},function(e){e.O(0,[1176,1630,413,2303,813,7777,2971,2472,1744],function(){return e(e.s=8166)}),_N_E=e.O()}]);