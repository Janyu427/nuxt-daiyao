import{_ as B}from"./nuxt-link.036703e3.js";import{j as y,i as I,k as R,o as n,c as _,a as s,b as h,w as k,F as u,r as L,f as o,n as p,d as a,t as r,p as x,e as $,l as C,m as A,q as N,s as U}from"./entry.c382635a.js";import{_ as m}from"./_plugin-vue_export-helper.c27b6911.js";import{c as l}from"./companyInfo.66295c8f.js";const V=""+globalThis.__publicAssetsURL("image/logo.png"),q=[{list:"首頁",link:"/"},{list:"關於我們",link:"/about"},{list:"服務項目",link:"/serviceList"},{list:"工程展示",link:"/work"},{list:"聯絡我們",link:"/contact"}],w={ListBox:q};const f=t=>(x("data-v-8369fa13"),t=t(),$(),t),E={class:"logo_box"},F=f(()=>s("img",{class:"image",src:V},null,-1)),j={class:"container"},z={class:"nav_list"},D=f(()=>s("div",{class:"item"},null,-1)),M=f(()=>s("div",{class:"item"},null,-1)),Y=f(()=>s("div",{class:"item"},null,-1)),G=[D,M,Y],H={class:"mobile_nav_list"},J={__name:"index",setup(t){let e=y(!1);const d=I(),i=()=>{e.value=!e.value};return R(()=>d.value,()=>{i()}),(v,T)=>{const b=B;return n(),_("header",null,[s("div",{class:p(["nav",{mobile_mode:o(e)}])},[s("div",E,[h(b,{class:"link",to:"/"},{default:k(()=>[F]),_:1})]),s("div",j,[s("ul",z,[(n(!0),_(u,null,L(o(w).ListBox,c=>(n(),_("li",{class:"list",key:c.list},[h(b,{class:"link",to:c.link},{default:k(()=>[a(r(c.list),1)]),_:2},1032,["to"])]))),128))]),s("div",{class:p(["burger",{click:o(e)}]),onClick:i},G,2)])],2),s("div",{class:p(["mobile_nav",{show:o(e)}])},[s("ul",H,[(n(!0),_(u,null,L(o(w).ListBox,c=>(n(),_("li",{class:p(["mobile_list",{show:o(e)}]),key:c.list},[h(b,{class:"link",to:c.link,onClick:i},{default:k(()=>[a(r(c.list),1)]),_:2},1032,["to"])],2))),128))])],2)])}}},K=m(J,[["__scopeId","data-v-8369fa13"]]),Q=""+globalThis.__publicAssetsURL("image/foot_logo.png"),O=""+globalThis.__publicAssetsURL("image/line_qr.jpg");const g=t=>(x("data-v-fdfb307b"),t=t(),$(),t),P={class:"footer"},W={class:"footer_top"},X={class:"container"},Z=g(()=>s("div",{class:"logo_box"},[s("img",{class:"image lazy",src:Q})],-1)),ss={class:"text_box"},ts=g(()=>s("p",{class:"title"},"歡迎撥打專線，專人將為您服務。",-1)),os={class:"list_box"},es={class:"list"},ns=["href"],_s={class:"list"},is={class:"link",href:""},ls={class:"list"},cs=["href"],as=g(()=>s("a",{class:"qrcode",href:"https://line.me/ti/p/eGdYQhJ6Kg",target:"_blank"},[s("img",{class:"image",src:O})],-1)),ds={class:"footer_bottom"},rs={class:"container"},hs={class:"copyright"},ps=g(()=>s("span",{id:"year"},null,-1)),us={__name:"index",setup(t){return(e,d)=>(n(),_("footer",P,[s("div",W,[s("div",X,[Z,s("div",ss,[ts,s("ul",os,[s("li",es,[a(" 專線 "),s("a",{class:"link",href:o(l).numberLink},r(o(l).number),9,ns)]),s("li",_s,[a(" 傳真 "),s("a",is,r(o(l).fax),1)]),s("li",ls,[a(" 地址 "),s("a",{class:"link",href:o(l).addressLink,target:"_blank"},r(o(l).address),9,cs)])])]),as])]),s("div",ds,[s("div",rs,[s("p",hs,[a("@"),ps,a(" "+r(o(l).enName)+" All Rights Reserved.",1)])])])]))}},ms=m(us,[["__scopeId","data-v-fdfb307b"]]),fs=""+globalThis.__publicAssetsURL("image/phone(circle).svg"),gs=""+globalThis.__publicAssetsURL("image/line.svg");const S=t=>(x("data-v-32450626"),t=t(),$(),t),vs={class:"side_icon"},bs=["href"],ks=S(()=>s("img",{class:"image",src:fs},null,-1)),xs=[ks],$s=["href"],Ls=S(()=>s("img",{class:"image",src:gs},null,-1)),ws=[Ls],ys={__name:"index",setup(t){const e=y(!1),d=()=>{window.scrollTo({top:0,behavior:"smooth"})},i=()=>{e.value=window.scrollY>0};return C(()=>{window.addEventListener("scroll",i)}),A(()=>{window.removeEventListener("scroll",i)}),(v,T)=>(n(),_(u,null,[s("div",vs,[s("a",{class:"link",href:o(l).numberLink},xs,8,bs),s("a",{class:"link",href:o(l).lineLink,target:"_blank"},ws,8,$s)]),o(e)?(n(),_("span",{key:0,class:"gotop",id:"goTop",onClick:d})):N("",!0)],64))}},Ss=m(ys,[["__scopeId","data-v-32450626"]]),Ts={};function Bs(t,e){const d=K,i=ms,v=Ss;return n(),_(u,null,[h(d),U(t.$slots,"default"),h(i),h(v)],64)}const Ns=m(Ts,[["render",Bs]]);export{Ns as default};
