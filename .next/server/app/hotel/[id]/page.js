(()=>{var e={};e.id=410,e.ids=[410],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},46364:(e,s,t)=>{"use strict";t.r(s),t.d(s,{GlobalError:()=>n.a,__next_app__:()=>x,originalPathname:()=>m,pages:()=>d,routeModule:()=>u,tree:()=>c});var r=t(50482),a=t(69108),i=t(62563),n=t.n(i),o=t(68300),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);t.d(s,l);let c=["",{children:["hotel",{children:["[id]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,37378)),"/project/sandbox/user-workspace/app/hotel/[id]/page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,9249)),"/project/sandbox/user-workspace/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,69361,23)),"next/dist/client/components/not-found-error"]}],d=["/project/sandbox/user-workspace/app/hotel/[id]/page.tsx"],m="/hotel/[id]/page",x={require:t,loadChunk:()=>Promise.resolve()},u=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/hotel/[id]/page",pathname:"/hotel/[id]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},71441:(e,s,t)=>{Promise.resolve().then(t.bind(t,71100)),Promise.resolve().then(t.bind(t,57816))},17584:(e,s,t)=>{Promise.resolve().then(t.bind(t,64093)),Promise.resolve().then(t.t.bind(t,31900,23))},81735:(e,s,t)=>{Promise.resolve().then(t.t.bind(t,2583,23)),Promise.resolve().then(t.t.bind(t,26840,23)),Promise.resolve().then(t.t.bind(t,38771,23)),Promise.resolve().then(t.t.bind(t,13225,23)),Promise.resolve().then(t.t.bind(t,9295,23)),Promise.resolve().then(t.t.bind(t,43982,23))},71100:(e,s,t)=>{"use strict";t.r(s),t.d(s,{AuthProvider:()=>i});var r=t(95344),a=t(47674);function i({children:e}){return r.jsx(a.SessionProvider,{children:e})}},64093:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>o});var r=t(95344),a=t(3729),i=t(47674),n=t(22254);function o({hotel:e}){let{data:s}=(0,i.useSession)(),t=(0,n.useRouter)(),[o,l]=(0,a.useState)(""),[c,d]=(0,a.useState)(""),[m,x]=(0,a.useState)(1),[u,h]=(0,a.useState)(!1),[g,p]=(0,a.useState)(""),[f,j]=(0,a.useState)(!1),b=async r=>{if(r.preventDefault(),!s){t.push("/auth/signin");return}let a=new Date(o),i=new Date(c),n=new Date;if(n.setHours(0,0,0,0),a<n){p("Check-in date cannot be in the past");return}if(i<=a){p("Check-out date must be after check-in date");return}h(!0),p(""),j(!1);try{let s=await fetch("/api/bookings",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({hotelId:e.id,checkIn:o,checkOut:c,guests:m,totalPrice:y()})});if(!s.ok){let e=await s.json();throw Error(e.error||"Failed to create booking")}j(!0),setTimeout(()=>{t.push("/bookings"),t.refresh()},2e3)}catch(e){p(e instanceof Error?e.message:"Failed to create booking. Please try again.")}finally{h(!1)}},y=()=>{if(!o||!c)return 0;let s=new Date(o),t=Math.ceil((new Date(c).getTime()-s.getTime())/864e5);return e.price*t},v=new Date().toISOString().split("T")[0];return(0,r.jsxs)("div",{className:"bg-white p-6 rounded-lg shadow-lg",children:[r.jsx("h2",{className:"text-2xl font-semibold mb-6",children:"Book Your Stay"}),(0,r.jsxs)("form",{onSubmit:b,className:"space-y-6",children:[(0,r.jsxs)("div",{children:[r.jsx("label",{htmlFor:"checkIn",className:"block text-gray-700 mb-2 font-medium",children:"Check-in Date"}),r.jsx("input",{type:"date",id:"checkIn",value:o,onChange:e=>{l(e.target.value),p("")},min:v,required:!0,className:"w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"})]}),(0,r.jsxs)("div",{children:[r.jsx("label",{htmlFor:"checkOut",className:"block text-gray-700 mb-2 font-medium",children:"Check-out Date"}),r.jsx("input",{type:"date",id:"checkOut",value:c,onChange:e=>{d(e.target.value),p("")},min:o||v,required:!0,className:"w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"})]}),(0,r.jsxs)("div",{children:[r.jsx("label",{htmlFor:"guests",className:"block text-gray-700 mb-2 font-medium",children:"Number of Guests"}),(0,r.jsxs)("div",{className:"flex items-center",children:[r.jsx("button",{type:"button",onClick:()=>m>1&&x(m-1),className:"px-3 py-2 border border-gray-300 rounded-l-md hover:bg-gray-100",children:r.jsx("i",{className:"fas fa-minus"})}),r.jsx("input",{type:"number",id:"guests",value:m,onChange:e=>x(parseInt(e.target.value)),min:1,max:10,required:!0,className:"w-20 px-3 py-2 border-y border-gray-300 text-center focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"}),r.jsx("button",{type:"button",onClick:()=>m<10&&x(m+1),className:"px-3 py-2 border border-gray-300 rounded-r-md hover:bg-gray-100",children:r.jsx("i",{className:"fas fa-plus"})})]})]}),o&&c&&r.jsx("div",{className:"bg-gray-50 p-4 rounded-lg",children:(0,r.jsxs)("div",{className:"flex justify-between items-center",children:[(0,r.jsxs)("span",{className:"text-gray-600",children:["Total for ",Math.ceil((new Date(c).getTime()-new Date(o).getTime())/864e5)," nights"]}),(0,r.jsxs)("span",{className:"text-xl font-bold text-indigo-600",children:["$",y().toFixed(2)]})]})}),g&&(0,r.jsxs)("div",{className:"bg-red-50 text-red-500 p-3 rounded-md text-sm",children:[r.jsx("i",{className:"fas fa-exclamation-circle mr-2"}),g]}),f&&(0,r.jsxs)("div",{className:"bg-green-50 text-green-500 p-3 rounded-md text-sm",children:[r.jsx("i",{className:"fas fa-check-circle mr-2"}),"Booking successful! Redirecting to your bookings..."]}),r.jsx("button",{type:"submit",disabled:u||f,className:`w-full py-3 px-4 rounded-md text-white font-medium transition-colors ${u||f?"bg-gray-400 cursor-not-allowed":"bg-indigo-600 hover:bg-indigo-700"}`,children:u?(0,r.jsxs)("span",{className:"flex items-center justify-center",children:[r.jsx("i",{className:"fas fa-spinner fa-spin mr-2"}),"Processing..."]}):f?(0,r.jsxs)("span",{className:"flex items-center justify-center",children:[r.jsx("i",{className:"fas fa-check mr-2"}),"Booked Successfully"]}):"Book Now"}),!s&&(0,r.jsxs)("p",{className:"text-sm text-gray-500 text-center mt-4",children:[r.jsx("i",{className:"fas fa-info-circle mr-1"}),"You need to sign in to make a booking"]})]})]})}},57816:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>o});var r=t(95344),a=t(47674),i=t(20783),n=t.n(i);function o(){let{data:e}=(0,a.useSession)();return r.jsx("header",{className:"bg-white shadow-lg",children:r.jsx("nav",{className:"container mx-auto px-4 py-4",children:(0,r.jsxs)("div",{className:"flex justify-between items-center",children:[r.jsx(n(),{href:"/",className:"text-2xl font-bold text-indigo-600",children:"Hotel Booking"}),(0,r.jsxs)("div",{className:"flex items-center space-x-4",children:[r.jsx(n(),{href:"/",className:"text-gray-600 hover:text-indigo-600",children:"Home"}),e?(0,r.jsxs)(r.Fragment,{children:[r.jsx(n(),{href:"/bookings",className:"text-gray-600 hover:text-indigo-600",children:"My Bookings"}),r.jsx("button",{onClick:()=>(0,a.signOut)(),className:"bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors",children:"Sign Out"}),r.jsx("span",{className:"text-gray-600",children:e.user?.name||e.user?.email})]}):r.jsx(n(),{href:"/auth/signin",className:"bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors",children:"Sign In"})]})]})})})}},22254:(e,s,t)=>{e.exports=t(14767)},37378:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>u});var r=t(25036),a=t(9108),i=t(44551),n=t(15904),o=t.n(n);let l=(0,t(86843).createProxy)(String.raw`/project/sandbox/user-workspace/components/BookingForm.tsx`),{__esModule:c,$$typeof:d}=l,m=l.default;async function x(e){let s=await a._.hotel.findUnique({where:{id:e}});return s||(0,i.notFound)(),s}async function u({params:e}){let s=await x(e.id);return r.jsx("div",{className:"container mx-auto px-4 py-8",children:(0,r.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[(0,r.jsxs)("div",{children:[r.jsx("div",{className:"relative h-[400px] rounded-lg overflow-hidden shadow-lg",children:r.jsx(o(),{src:s.image,alt:s.name,fill:!0,className:"object-cover",priority:!0})}),(0,r.jsxs)("div",{className:"mt-8 bg-white rounded-lg shadow-lg p-6",children:[(0,r.jsxs)("div",{className:"flex justify-between items-start",children:[r.jsx("h1",{className:"text-3xl font-bold text-gray-900",children:s.name}),(0,r.jsxs)("div",{className:"flex items-center bg-indigo-100 px-3 py-1 rounded-full",children:[r.jsx("span",{className:"text-yellow-500 mr-1",children:"★"}),r.jsx("span",{className:"text-indigo-700 font-semibold",children:s.rating.toFixed(1)})]})]}),(0,r.jsxs)("div",{className:"mt-4",children:[(0,r.jsxs)("div",{className:"flex items-center text-gray-600",children:[r.jsx("i",{className:"fas fa-map-marker-alt mr-2"}),r.jsx("p",{children:s.location})]}),(0,r.jsxs)("div",{className:"mt-6",children:[r.jsx("h2",{className:"text-xl font-semibold text-gray-900 mb-3",children:"About this hotel"}),r.jsx("p",{className:"text-gray-700 leading-relaxed",children:s.description})]}),(0,r.jsxs)("div",{className:"mt-6",children:[r.jsx("h2",{className:"text-xl font-semibold text-gray-900 mb-3",children:"Amenities"}),(0,r.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,r.jsxs)("div",{className:"flex items-center text-gray-600",children:[r.jsx("i",{className:"fas fa-wifi mr-2"}),r.jsx("span",{children:"Free WiFi"})]}),(0,r.jsxs)("div",{className:"flex items-center text-gray-600",children:[r.jsx("i",{className:"fas fa-parking mr-2"}),r.jsx("span",{children:"Free Parking"})]}),(0,r.jsxs)("div",{className:"flex items-center text-gray-600",children:[r.jsx("i",{className:"fas fa-swimming-pool mr-2"}),r.jsx("span",{children:"Swimming Pool"})]}),(0,r.jsxs)("div",{className:"flex items-center text-gray-600",children:[r.jsx("i",{className:"fas fa-concierge-bell mr-2"}),r.jsx("span",{children:"Room Service"})]})]})]}),r.jsx("div",{className:"mt-6",children:(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsxs)("div",{className:"text-2xl font-bold text-indigo-600",children:["$",s.price.toFixed(2)]}),r.jsx("span",{className:"text-gray-500 ml-2",children:"/night"})]})})]})]})]}),r.jsx("div",{className:"md:sticky md:top-8 h-fit",children:r.jsx(m,{hotel:s})})]})})}},9249:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>p,metadata:()=>g});var r=t(25036),a=t(8592),i=t.n(a);t(67272);var n=t(86843);let o=(0,n.createProxy)(String.raw`/project/sandbox/user-workspace/components/Header.tsx`),{__esModule:l,$$typeof:c}=o,d=o.default,m=(0,n.createProxy)(String.raw`/project/sandbox/user-workspace/components/AuthProvider.tsx`),{__esModule:x,$$typeof:u}=m;m.default;let h=(0,n.createProxy)(String.raw`/project/sandbox/user-workspace/components/AuthProvider.tsx#AuthProvider`),g={title:"Hotel Booking",description:"Book your perfect stay with us"};function p({children:e}){return(0,r.jsxs)("html",{lang:"en",children:[(0,r.jsxs)("head",{children:[r.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",rel:"stylesheet"}),r.jsx("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"})]}),r.jsx("body",{className:i().className,children:r.jsx(h,{children:(0,r.jsxs)("div",{className:"min-h-screen bg-gray-50",children:[r.jsx(d,{}),r.jsx("main",{className:"container mx-auto px-4 py-8",children:e}),r.jsx("footer",{className:"bg-white border-t",children:r.jsx("div",{className:"container mx-auto px-4 py-6",children:(0,r.jsxs)("p",{className:"text-center text-gray-600",children:["\xa9 ",new Date().getFullYear()," Hotel Booking. All rights reserved."]})})})]})})})]})}},9108:(e,s,t)=>{"use strict";t.d(s,{_:()=>a});let r=require("@prisma/client"),a=global.prisma||new r.PrismaClient({log:["query"]})},67272:()=>{}};var s=require("../../../webpack-runtime.js");s.C(e);var t=e=>s(s.s=e),r=s.X(0,[225,44,878,551],()=>t(46364));module.exports=r})();