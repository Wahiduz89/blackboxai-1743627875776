(()=>{var e={};e.id=931,e.ids=[931],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},40183:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>n.a,__next_app__:()=>m,originalPathname:()=>x,pages:()=>d,routeModule:()=>u,tree:()=>c});var r=s(50482),i=s(69108),a=s(62563),n=s.n(a),o=s(68300),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);s.d(t,l);let c=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,72632)),"/project/sandbox/user-workspace/app/page.tsx"]}]},{layout:[()=>Promise.resolve().then(s.bind(s,9249)),"/project/sandbox/user-workspace/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,69361,23)),"next/dist/client/components/not-found-error"]}],d=["/project/sandbox/user-workspace/app/page.tsx"],x="/page",m={require:s,loadChunk:()=>Promise.resolve()},u=new r.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},71441:(e,t,s)=>{Promise.resolve().then(s.bind(s,71100)),Promise.resolve().then(s.bind(s,57816))},49880:(e,t,s)=>{Promise.resolve().then(s.bind(s,5127)),Promise.resolve().then(s.t.bind(s,31900,23)),Promise.resolve().then(s.t.bind(s,61476,23))},81735:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,2583,23)),Promise.resolve().then(s.t.bind(s,26840,23)),Promise.resolve().then(s.t.bind(s,38771,23)),Promise.resolve().then(s.t.bind(s,13225,23)),Promise.resolve().then(s.t.bind(s,9295,23)),Promise.resolve().then(s.t.bind(s,43982,23))},71100:(e,t,s)=>{"use strict";s.r(t),s.d(t,{AuthProvider:()=>a});var r=s(95344),i=s(47674);function a({children:e}){return r.jsx(i.SessionProvider,{children:e})}},57816:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>o});var r=s(95344),i=s(47674),a=s(20783),n=s.n(a);function o(){let{data:e}=(0,i.useSession)();return r.jsx("header",{className:"bg-white shadow-lg",children:r.jsx("nav",{className:"container mx-auto px-4 py-4",children:(0,r.jsxs)("div",{className:"flex justify-between items-center",children:[r.jsx(n(),{href:"/",className:"text-2xl font-bold text-indigo-600",children:"Hotel Booking"}),(0,r.jsxs)("div",{className:"flex items-center space-x-4",children:[r.jsx(n(),{href:"/",className:"text-gray-600 hover:text-indigo-600",children:"Home"}),e?(0,r.jsxs)(r.Fragment,{children:[r.jsx(n(),{href:"/bookings",className:"text-gray-600 hover:text-indigo-600",children:"My Bookings"}),r.jsx("button",{onClick:()=>(0,i.signOut)(),className:"bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors",children:"Sign Out"}),r.jsx("span",{className:"text-gray-600",children:e.user?.name||e.user?.email})]}):r.jsx(n(),{href:"/auth/signin",className:"bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors",children:"Sign In"})]})]})})})}},5127:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>n});var r=s(95344),i=s(22254),a=s(3729);function n(){let e=(0,i.useRouter)(),t=(0,i.useSearchParams)(),s=(0,a.useCallback)((e,s)=>{let r=new URLSearchParams(t?.toString()||"");return s?r.set(e,s):r.delete(e),r.toString()},[t]),n=(t,r)=>{let i=s(t,r);e.push(`/?${i}`)};return r.jsx("div",{className:"bg-white p-6 rounded-lg shadow-md",children:(0,r.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4",children:[(0,r.jsxs)("div",{children:[r.jsx("label",{htmlFor:"location",className:"block text-sm font-medium text-gray-700 mb-1",children:"Location"}),r.jsx("input",{type:"text",id:"location",placeholder:"Enter location",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500",defaultValue:t?.get("location")??"",onChange:e=>n("location",e.target.value)})]}),(0,r.jsxs)("div",{children:[r.jsx("label",{htmlFor:"minPrice",className:"block text-sm font-medium text-gray-700 mb-1",children:"Min Price"}),r.jsx("input",{type:"number",id:"minPrice",placeholder:"Min price",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500",defaultValue:t?.get("minPrice")??"",onChange:e=>n("minPrice",e.target.value)})]}),(0,r.jsxs)("div",{children:[r.jsx("label",{htmlFor:"maxPrice",className:"block text-sm font-medium text-gray-700 mb-1",children:"Max Price"}),r.jsx("input",{type:"number",id:"maxPrice",placeholder:"Max price",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500",defaultValue:t?.get("maxPrice")??"",onChange:e=>n("maxPrice",e.target.value)})]}),(0,r.jsxs)("div",{children:[r.jsx("label",{htmlFor:"rating",className:"block text-sm font-medium text-gray-700 mb-1",children:"Min Rating"}),(0,r.jsxs)("select",{id:"rating",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500",defaultValue:t?.get("rating")??"",onChange:e=>n("rating",e.target.value),children:[r.jsx("option",{value:"",children:"Any rating"}),r.jsx("option",{value:"3",children:"3+ stars"}),r.jsx("option",{value:"4",children:"4+ stars"}),r.jsx("option",{value:"4.5",children:"4.5+ stars"})]})]})]})})}},22254:(e,t,s)=>{e.exports=s(14767)},9249:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>p,metadata:()=>g});var r=s(25036),i=s(8592),a=s.n(i);s(67272);var n=s(86843);let o=(0,n.createProxy)(String.raw`/project/sandbox/user-workspace/components/Header.tsx`),{__esModule:l,$$typeof:c}=o,d=o.default,x=(0,n.createProxy)(String.raw`/project/sandbox/user-workspace/components/AuthProvider.tsx`),{__esModule:m,$$typeof:u}=x;x.default;let h=(0,n.createProxy)(String.raw`/project/sandbox/user-workspace/components/AuthProvider.tsx#AuthProvider`),g={title:"Hotel Booking",description:"Book your perfect stay with us"};function p({children:e}){return(0,r.jsxs)("html",{lang:"en",children:[(0,r.jsxs)("head",{children:[r.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",rel:"stylesheet"}),r.jsx("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"})]}),r.jsx("body",{className:a().className,children:r.jsx(h,{children:(0,r.jsxs)("div",{className:"min-h-screen bg-gray-50",children:[r.jsx(d,{}),r.jsx("main",{className:"container mx-auto px-4 py-8",children:e}),r.jsx("footer",{className:"bg-white border-t",children:r.jsx("div",{className:"container mx-auto px-4 py-6",children:(0,r.jsxs)("p",{className:"text-center text-gray-600",children:["\xa9 ",new Date().getFullYear()," Hotel Booking. All rights reserved."]})})})]})})})]})}},72632:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>g});var r=s(25036),i=s(9108),a=s(15904),n=s.n(a),o=s(40646),l=s.n(o);function c({hotel:e}){return(0,r.jsxs)("div",{className:"bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300",children:[r.jsx("div",{className:"relative h-48",children:r.jsx(n(),{src:e.image,alt:e.name,fill:!0,className:"object-cover"})}),(0,r.jsxs)("div",{className:"p-4",children:[(0,r.jsxs)("div",{className:"flex justify-between items-start mb-2",children:[r.jsx("h3",{className:"text-xl font-semibold text-gray-900",children:e.name}),(0,r.jsxs)("div",{className:"flex items-center",children:[r.jsx("span",{className:"text-yellow-500 mr-1",children:"★"}),r.jsx("span",{className:"text-gray-600",children:e.rating.toFixed(1)})]})]}),r.jsx("p",{className:"text-gray-600 mb-2",children:e.location}),r.jsx("p",{className:"text-gray-500 mb-4 line-clamp-2",children:e.description}),(0,r.jsxs)("div",{className:"flex justify-between items-center",children:[(0,r.jsxs)("p",{className:"text-xl font-bold text-indigo-600",children:["$",e.price.toFixed(2),r.jsx("span",{className:"text-sm text-gray-500",children:"/night"})]}),r.jsx(l(),{href:`/hotel/${e.id}`,className:"bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors",children:"View Details"})]})]})]})}let d=(0,s(86843).createProxy)(String.raw`/project/sandbox/user-workspace/components/SearchFilters.tsx`),{__esModule:x,$$typeof:m}=d,u=d.default;async function h(e){let t={AND:[e?.location?{location:{contains:e.location,mode:"insensitive"}}:{},e?.minPrice?{price:{gte:parseFloat(e.minPrice)}}:{},e?.maxPrice?{price:{lte:parseFloat(e.maxPrice)}}:{},e?.rating?{rating:{gte:parseFloat(e.rating)}}:{}]};return await i._.hotel.findMany({where:t,orderBy:{createdAt:"desc"}})}async function g({searchParams:e}){let t=await h(e);return(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"relative bg-gray-900 py-24 px-6 sm:py-32 lg:px-8",children:[r.jsx("div",{className:"absolute inset-0 overflow-hidden",children:r.jsx("img",{src:"https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixlib=rb-4.0.3",alt:"Hotel background",className:"h-full w-full object-cover opacity-25"})}),(0,r.jsxs)("div",{className:"relative mx-auto max-w-2xl text-center",children:[r.jsx("h1",{className:"text-4xl font-bold tracking-tight text-white sm:text-6xl",children:"Find Your Perfect Stay"}),r.jsx("p",{className:"mt-6 text-lg leading-8 text-gray-300",children:"Discover amazing hotels at the best prices. Book your dream vacation today."})]})]}),(0,r.jsxs)("div",{className:"max-w-7xl mx-auto px-4 py-8",children:[r.jsx(u,{}),(0,r.jsxs)("div",{className:"mt-12",children:[(0,r.jsxs)("h2",{className:"text-2xl font-semibold mb-6",children:[t.length," ",1===t.length?"Hotel":"Hotels"," Available"]}),r.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:t.map(e=>r.jsx(c,{hotel:e},e.id))}),0===t.length&&(0,r.jsxs)("div",{className:"text-center py-12",children:[r.jsx("h3",{className:"text-lg font-medium text-gray-900",children:"No hotels found"}),r.jsx("p",{className:"mt-2 text-sm text-gray-500",children:"Try adjusting your search filters"})]})]})]})]})}},9108:(e,t,s)=>{"use strict";s.d(t,{_:()=>i});let r=require("@prisma/client"),i=global.prisma||new r.PrismaClient({log:["query"]})},48026:(e,t,s)=>{let{createProxy:r}=s(86843);e.exports=r("/project/sandbox/user-workspace/node_modules/next/dist/client/link.js")},40646:(e,t,s)=>{e.exports=s(48026)},67272:()=>{}};var t=require("../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[225,44,878],()=>s(40183));module.exports=r})();