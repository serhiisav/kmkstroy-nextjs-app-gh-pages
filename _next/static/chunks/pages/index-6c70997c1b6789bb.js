(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(1861)}])},8917:function(e,s,t){"use strict";let a=t(6992),i=t(8668);e.exports={translations:{ua:i,en:a},defaultLang:"ua",useBrowserDefault:!0}},1861:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return X}});var a=t(5893),i=t(9008),n=t.n(i),r=t(4298),l=t.n(r),o=t(7294),c=t(6261),d=t(5617);let h=e=>({type:"ADD_ALL_IMAGES",payload:{images:e}}),m=e=>({type:"SET_CURRENT_ID_IMAGE",payload:{id:e}}),p=e=>({type:"SET_HAMBURGER_OPEN",payload:{value:e}});var u=t(8509),g=t(7039);function x(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("nav",{className:"langSwitcher",children:[(0,a.jsx)(g.Ww,{lang:"ua",children:"ua"})," |"," ",(0,a.jsx)(g.Ww,{lang:"en",children:"en"})]})})}var f=t(5675),v=t.n(f),j=function(){let e=(0,d.I0)(),s=(0,d.v9)(e=>e.hamburgerOpen),t=(0,d.v9)(e=>e.prefix),i=(0,o.useRef)(null),{t:n}=(0,g.$G)();(0,o.useEffect)(()=>(s&&(0,u.Qp)(i),()=>{(0,u.tP)()}),[s]);let r=t=>{"check"===t.target.className||"check-span"===t.target.className?e(p(!s)):s&&e(p(!1))};return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("header",{className:"header",children:[(0,a.jsx)("div",{className:s?"blur active":"blur",onClick(e){e.stopPropagation(),r(e)}}),(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"header-wrap",children:[(0,a.jsx)(c.rU,{to:"home",onClick(e){c.NY.scrollToTop(),r(e)},children:(0,a.jsx)(v(),{className:"header-logo",src:t+n("header.logo"),onMouseOver:e=>e.currentTarget.src=n("header.logo-hover"),onMouseOut:e=>e.currentTarget.src=n("header.logo"),alt:"logo",height:75,width:75})}),(0,a.jsxs)("nav",{ref:i,className:"header-nav-list-wrap",children:[(0,a.jsxs)("ul",{className:s?"header-nav-list active":"header-nav-list",children:[(0,a.jsx)("li",{className:"header-nav-item item-home",children:(0,a.jsxs)(c.rU,{activeClass:"active",smooth:!0,offset:-84,duration:500,to:"home",className:"header-nav-link",onClick(e){r(e)},children:[(0,a.jsx)(v(),{className:"header-nav-item-icon",src:t+"/img/icon-home.svg",alt:"icon-home",height:30,width:30,priority:!0}),n("header.nav_home")]})}),(0,a.jsx)("li",{className:"header-nav-item",children:(0,a.jsxs)(c.rU,{activeClass:"active",smooth:!0,offset:-115,duration:500,to:"about",className:"header-nav-link",onClick(e){r(e)},children:[(0,a.jsx)(v(),{className:"header-nav-item-icon",src:t+"/img/icon-about.svg",alt:"icon-about",height:30,width:30}),n("header.nav_about")]})}),(0,a.jsx)("li",{className:"header-nav-item",children:(0,a.jsxs)(c.rU,{activeClass:"active",smooth:!0,offset:-83,duration:500,to:"services",className:"header-nav-link",onClick(e){r(e)},children:[(0,a.jsx)(v(),{className:"header-nav-item-icon",src:t+"/img/icon-services.svg",alt:"icon-services",height:30,width:30}),n("header.nav_services")]})}),(0,a.jsx)("li",{className:"header-nav-item",children:(0,a.jsxs)(c.rU,{activeClass:"active",smooth:!0,offset:-82,duration:500,to:"gallery",className:"header-nav-link",onClick(e){r(e)},children:[(0,a.jsx)(v(),{className:"header-nav-item-icon",src:t+"/img/icon-gallery.svg",alt:"icon-gallery",height:30,width:30}),n("header.nav_gallery")]})}),(0,a.jsx)("li",{className:"header-nav-item",children:(0,a.jsxs)(c.rU,{activeClass:"active",smooth:!0,offset:-82,duration:500,to:"partners",className:"header-nav-link",onClick(e){r(e)},children:[(0,a.jsx)(v(),{className:"header-nav-item-icon",src:t+"/img/icon-partners.svg",alt:"icon-partners",height:30,width:30}),n("header.nav_partners")]})}),(0,a.jsx)("li",{className:"header-nav-item",children:(0,a.jsxs)(c.rU,{activeClass:"active",smooth:!0,offset:-84,duration:500,to:"contacts",className:"header-nav-link",onClick(e){r(e)},children:[(0,a.jsx)(v(),{className:"header-nav-item-icon",src:t+"/img/icon-contacts.svg",alt:"icon-contacts",height:30,width:30}),n("header.nav_contacts")]})})]}),(0,a.jsx)("div",{className:"header-toggle-language-wrap",children:(0,a.jsx)(x,{})}),(0,a.jsxs)("div",{className:"header-contacts",children:[(0,a.jsxs)("div",{className:"header-contacts-link-wrap",children:[(0,a.jsx)(v(),{src:t+"/img/icon-phone.svg",alt:"icon-phone",height:20,width:20}),(0,a.jsx)("a",{className:"header-contacts-link",href:"tel:+380675611900",onClick:e=>r(e),children:"+38(067)-561-19-00"})]}),(0,a.jsxs)("div",{className:"header-contacts-link-wrap",children:[(0,a.jsx)(v(),{src:t+"/img/icon-email.svg",alt:"icon-email",height:20,width:20}),(0,a.jsx)("a",{className:"header-contacts-link",href:"mailto:kmkstroy82@gmail.com",onClick:e=>r(e),children:"kmkstroy82@gmail.com"})]})]}),(0,a.jsxs)("label",{htmlFor:"check",className:"header-nav-hamburger",children:[(0,a.jsx)("input",{onClick:e=>r(e),className:"check",type:"checkbox",id:"check",checked:s,onChange(e){}}),(0,a.jsx)("span",{className:"check-span"}),(0,a.jsx)("span",{className:"check-span"}),(0,a.jsx)("span",{className:"check-span"})]})]})]})})]})})},w=t(9231),b=function(){let e=(0,o.useRef)(),{inViewport:s}=(0,w.NM)(e),{t}=(0,g.$G)();return(0,a.jsx)("section",{ref:e,className:"section-intro",id:"home",children:(0,a.jsxs)("div",{className:s?"section-intro-wrap animate__animated animate__bounceInLeft animate__delay-0.5s":"section-intro-wrap-none",children:[(0,a.jsx)("h1",{className:"section-intro-title",children:t("intro.title")}),(0,a.jsx)("p",{className:"section-intro-subtitle",children:t("intro.subtitle-p1")}),(0,a.jsx)("p",{className:"section-intro-subtitle",children:t("intro.subtitle-p2")})]})})},N=function(){let e=(0,o.useRef)(),{inViewport:s}=(0,w.NM)(e),{t}=(0,g.$G)();return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("section",{ref:e,className:"section-about",id:"about",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:s?"about-wrap animate__animated animate__bounceInLeft animate__delay-0.5s":"about-wrap-none",children:[(0,a.jsx)("h1",{className:"about-title",children:t("about.title")}),(0,a.jsxs)("h3",{className:"about-subtitle",children:[t("about.subtitle-p1"),(0,a.jsx)("br",{}),t("about.subtitle-p2")]}),(0,a.jsx)("p",{className:"about-description",children:t("about.description-p1")}),(0,a.jsx)("p",{className:"about-description",children:t("about.description-p2")}),(0,a.jsx)("p",{className:"about-description",children:t("about.description-p3")})]})})})})},y=t(7297),_=t(719),k=t(702);t(1082),t(3029),t(4747),t(1669),t(7143),t(9306);var C=t(66),S=t(1163);function M(){let e=(0,y.Z)(["\n    & .mySwiper-thumbs{\n        top:",'px;\n    }\n    &::after {\n    content: "";\n    position: absolute;\n    top: ','px;\n    left: 50%;\n    transform: translate(-50%,-65%);\n    width: 260px;\n    height: 15px;\n    border-top-left-radius: 50%;\n    border-top-right-radius: 50%;\n    background-color: #ffffff90;\n  };\n  &::before {\n    content: "";\n    position: absolute;\n    left: 50%;\n    top: ','px;\n    transform: translate(-50%, -105%);\n    background-image: url("/img/gallery-chevron-up.svg");\n    width: 60px;\n    height: 60px;\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center;\n  }\n    ']);return M=function(){return e},e}let L=C.ZP.div.withConfig({componentId:"sc-4d9bc4d4-0"})(M(),e=>e.top,e=>e.top,e=>e.top);function T(e){let{handleScreenClose:s,isOpen:t,isModal:i}=e,n=(0,d.v9)(e=>e.galleryItems),r=(0,d.v9)(e=>e.prefix),l=(0,d.v9)(e=>e.idImage),[c,h]=(0,o.useState)(null),[m,p]=(0,o.useState)(null),[g,x]=(0,o.useState)(0),[f,j]=(0,o.useState)(0),w=(0,o.useRef)(null),b=(0,o.useRef)(null),N=(0,S.useRouter)();(0,o.useEffect)(()=>{m&&t&&(!isNaN(l)&&"number"==typeof l&&Number.isInteger(l)&&Number.isFinite(l)&&l>=0&&n?x(parseInt(Math.abs(l-n.length-1),10)):console.log("incorrect id item"),m.slideTo(g,700,!0))},[m,l,g,n,t]);let y=()=>{let e=w.current.offsetHeight;e&&setTimeout(()=>{j(e-window.innerHeight)},0)};return(0,o.useEffect)(()=>(t&&((0,u.Qp)(w),i&&(y(),window.addEventListener("resize",y))),()=>{(0,u.tP)(),window.removeEventListener("resize",y)}),[t]),(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{ref:w,className:i?"gallery-modal":"gallery-fullscreen",children:[(0,a.jsx)(v(),{className:"button-swiper-close",onClick:s,src:r+"/img/gallery-minimize.svg",alt:"close",height:40,width:40}),(0,a.jsx)(_.tq,{style:{"--swiper-navigation-size":"60px"},loop:!0,onSwiper:p,speed:800,slidesPerView:1,maxBackfaceHiddenSlides:5,navigation:!0,effect:"fade",fadeEffect:{crossFade:!0},preloadImages:!1,lazy:{loadPrevNext:!0,enabled:!0,loadPrevNextAmount:5},thumbs:{swiper:c&&!c.destroyed?c:null},modules:[k.W_,k.o3,k.xW,k.oM],className:"mySwiper",children:n.map(e=>(0,a.jsx)(_.o5,{children:(0,a.jsxs)("div",{children:[(0,a.jsx)(v(),{className:"fullscreen-gallery-image swiper-lazy",src:r+e.img,"data-src":r+e.img,alt:"preview",width:e.width,height:e.height}),(0,a.jsxs)("div",{className:"mySwiper-text-content",children:[(0,a.jsx)("p",{className:"mySwiper-image-title",children:"/?lang=en"===N.asPath?e.title_en:e.title_ua}),(0,a.jsx)("p",{className:"mySwiper-image-description",children:"/?lang=en"===N.asPath?e.description_en:e.description_ua})]}),(0,a.jsx)("div",{className:"swiper-lazy-preloader swiper-lazy-preloader-white"})]})},e.id))}),(0,a.jsx)(L,{ref:b,className:"fullscreen-gallery-thumbs-up",top:-f,children:(0,a.jsx)(_.tq,{onSwiper:h,loop:!0,spaceBetween:10,slidesPerView:3,freeMode:!0,grabCursor:!0,preloadImages:!1,lazy:{loadPrevNext:!0,enabled:!0,loadPrevNextAmount:5},modules:[k.Rv,k.W_,k.o3,k.oM],className:"mySwiper-thumbs",breakpoints:{835:{slidesPerView:5}},children:n.map(e=>(0,a.jsx)(_.o5,{children:(0,a.jsx)("div",{children:(0,a.jsx)(v(),{className:"thumbs-image swiper-lazy",src:r+e.thumbs,"data-src":r+e.thumbs,alt:"preview",width:222,height:100})})},e.id))})})]})})})}var F=t(2801),R=t(5518),z=t(7417),I=t(4411),P=t(1664),O=t.n(P);function E(){let e=(0,d.I0)(),s=(0,d.v9)(e=>e.galleryItems),t=(0,d.v9)(e=>e.prefix),[i,n]=(0,o.useState)(!1),[r,l]=(0,o.useState)(6),[c,h]=(0,o.useState)(!1),[p,u]=(0,o.useState)("fullscreen"),[x,f]=(0,o.useState)(!1),j=(0,F.r)(),{t:w}=(0,g.$G)(),b=(0,o.useRef)(null),N=(0,S.useRouter)();(0,o.useEffect)(()=>{R.tq&&(u("modal"),f(!0))},[]);let y=()=>{h(!0),l(r+6),h(!1)},_=()=>{l(6),window.scrollTo({behavior:"smooth",top:b.current.offsetTop-82})},k=()=>{x?n(!0):j.enter()},C=()=>{x?n(!1):j.exit()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("section",{ref:b,className:"section-gallery",id:"gallery",children:[(0,a.jsxs)("div",{className:"container",children:[(0,a.jsx)("h1",{className:"section-gallery-title",children:w("gallery.title")}),(0,a.jsxs)(O(),{className:"gallery-download-link",href:"/?lang=en"===N.asPath?"reference_KMKSTROY_en.pdf":"/reference_KMKSTROY.pdf",target:"_blank",locale:!1,download:!0,children:[(0,a.jsx)(v(),{src:t+"/img/gallery_pdf_icon.svg",alt:".pdf",height:30,width:30}),w("gallery.download")," (pdf)",(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",enableBackground:"new 0 0 24 24",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#3f3f3f",children:[(0,a.jsx)("g",{children:(0,a.jsx)("rect",{fill:"none",height:"24",width:"24"})}),(0,a.jsx)("g",{children:(0,a.jsx)("path",{d:"M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z M17,11l-1.41-1.41L13,12.17V4h-2v8.17L8.41,9.59L7,11l5,5 L17,11z"})})]})]}),(0,a.jsx)(z.Z,{sx:{width:1,minHeight:"auto",overflow:"hidden"},children:(0,a.jsx)(I.ZP,{sx:{width:"auto"},columns:{xs:1,sm:2,md:3},spacing:{xs:1,sm:2,md:3},children:s&&s.slice(0,r).map(s=>(0,a.jsxs)("div",{className:"image-wrapper animate__animated animate__zoomIn animate__delay-1s",children:[(0,a.jsx)(v(),{onClick(t){e(m(s.id)),k()},className:"gallery-image",src:t+s.img540,alt:s.id,width:540,height:s.height_540}),(0,a.jsx)("i",{className:"gallery-zoomIn",children:(0,a.jsxs)("svg",{className:"gallery-zoomIn-svg",xmlns:"http://www.w3.org/2000/svg",width:"44",height:"44",viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,a.jsx)("circle",{cx:"11",cy:"11",r:"8"}),(0,a.jsx)("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}),(0,a.jsx)("line",{x1:"11",y1:"8",x2:"11",y2:"14"}),(0,a.jsx)("line",{x1:"8",y1:"11",x2:"14",y2:"11"})]})}),(0,a.jsx)("div",{className:"gallery-text-content",children:(0,a.jsx)("p",{className:"gallery-image-title",children:"/?lang=en"===N.asPath?s.title_en:s.title_ua})})]},s.id))})}),(0,a.jsxs)("div",{className:"gallery-button-wrapper",children:[s&&s.length>r&&(0,a.jsxs)("button",{className:"gallery-button button-load",onClick:y,disabled:c,children:[(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,a.jsx)("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),(0,a.jsx)("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),w(c?"gallery.button-isLoading":"gallery.button-load")]}),r>6&&(0,a.jsxs)("button",{className:"gallery-button button-delete",onClick:_,children:[(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-trash",children:[(0,a.jsx)("polyline",{points:"3 6 5 6 21 6"}),(0,a.jsx)("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})]}),w("gallery.button-delete")]})]})]}),(0,a.jsx)(F.I,{className:!j.active&&!i&&"".concat(p,"-closed"),handle:j,children:(0,a.jsx)(T,{handleScreenClose:C,isOpen:j.active||i,isModal:x})})]})})}let K=()=>{let[e,s]=(0,o.useState)(!1),t=(0,d.v9)(e=>e.hamburgerOpen),i=()=>{window.scrollY>500?s(!0):s(!1)};return(0,o.useEffect)(()=>(window.addEventListener("scroll",i),()=>{window.removeEventListener("scroll",i)}),[]),(0,a.jsx)(a.Fragment,{children:!t&&(0,a.jsxs)("svg",{onClick(){c.NY.scrollToTop()},className:e?"button-scrollToTop active":"button-scrollToTop",xmlns:"http://www.w3.org/2000/svg",height:"48px",viewBox:"0 0 24 24",width:"48px",fill:"#ffffffcc",children:[(0,a.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,a.jsx)("path",{d:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z"})]})})};var H=function(){let e=(0,o.useRef)(),{inViewport:s}=(0,w.NM)(e),{t}=(0,g.$G)();return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("section",{ref:e,className:"section-services",id:"services",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:s?"services-wrap animate__animated animate__bounceInRight animate__delay-0.5s":"services-wrap-none",children:[(0,a.jsx)("h1",{className:"services-title",children:t("services.title")}),(0,a.jsxs)("ul",{className:"services-list",children:[(0,a.jsx)("li",{className:"services-item",children:t("services.li1")}),(0,a.jsx)("li",{className:"services-item",children:t("services.li2")}),(0,a.jsx)("li",{className:"services-item",children:t("services.li3")}),(0,a.jsx)("li",{className:"services-item",children:t("services.li4")})]})]})})})})};function V(){let e=(0,o.useRef)(),{t:s}=(0,g.$G)(),t=(0,d.v9)(e=>e.prefix),i=[{name:"fibermix",src:"/img/partner-fibermix-black.svg",width:"328",height:"50"},{name:"lotosbeton",src:"/img/partner-lotosbeton.png",width:"118",height:"55"},{name:"remmers",src:"/img/partner-remmers.svg",width:"165",height:"51"},{name:"sika",src:"/img/partner-sika.svg",width:"120",height:"131"},{name:"spektrum",src:"/img/partner-spektrum_ua.png",width:"216",height:"36"},{name:"sgpenetron",src:"/img/partner-sgpenetron.png",width:"127",height:"50"},{name:"karsal",src:"/img/partner-karsal_transp.png",width:"124",height:"40"},{name:"vlast",src:"/img/partner-vlast.png",width:"51",height:"61"},{name:"lindec",src:"/img/partner-lindec.png",width:"217",height:"55"},{name:"klsfloor",src:"/img/partner-klsfloor.png",width:"202",height:"50"},{name:"betolit",src:"/img/partner-betolit.png",width:"50",height:"55"}];return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("section",{ref:e,className:"section-partners",id:"partners",children:[(0,a.jsx)("h1",{className:"section-partners-title",children:s("partners.title")}),(0,a.jsx)("div",{className:"partners-wrapper",children:(0,a.jsx)(_.tq,{loop:!0,speed:400,slidesPerView:2,grabCursor:!0,freeMode:!0,loopedSlides:i.length,autoplay:{delay:3e3,disableOnInteraction:!1},breakpoints:{480:{slidesPerView:3},735:{slidesPerView:4},1100:{slidesPerView:5}},modules:[k.W_,k.o3,k.pt,k.Rv],className:"partners-mySwiper",children:i.map(e=>(0,a.jsx)(_.o5,{children:(0,a.jsx)("div",{children:(0,a.jsx)(v(),{src:t+e.src,alt:"logo "+e.name,height:e.height,width:e.width},e.name)})},e.name))})})]})})}var Y=function(){let{t:e}=(0,g.$G)(),s=(0,d.v9)(e=>e.prefix);return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("footer",{className:"section-contacts",children:[(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"section-contacts-wrap",children:[(0,a.jsxs)("div",{className:"contacts-logo-wrap",children:[(0,a.jsx)(v(),{className:"contacts-logo",src:s+e("footer.logo"),alt:"logo",height:115,width:115,priority:!0}),(0,a.jsxs)("div",{className:"contacts-logo-title-wrap",children:[(0,a.jsx)("h1",{className:"contacts-logo-title",children:e("footer.title")}),(0,a.jsx)("p",{className:"contacts-logo-subtitle",children:e("footer.subtitle")})]})]}),(0,a.jsxs)("div",{className:"contacts-address",children:[(0,a.jsx)("h2",{className:"contacts-address-title",children:e("footer.address_title")}),(0,a.jsxs)("div",{className:"contacts-address-content-wrap",children:[(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#9e9e9e",children:[(0,a.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,a.jsx)("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"}),(0,a.jsx)("circle",{cx:"12",cy:"9",r:"2.5"})]}),(0,a.jsxs)("p",{className:"contacts-address-content",children:[e("footer.address_city"),(0,a.jsx)("br",{}),e("footer.address_street")]})]}),(0,a.jsxs)("div",{className:"contacts-address-content-wrap",children:[(0,a.jsx)(v(),{src:s+"/img/footer-icon-phone.svg",alt:"icon-phone",height:24,width:24}),(0,a.jsx)("a",{className:"contacts-link",href:"tel:+380675611900",children:"+38(067)-561-19-00"})]}),(0,a.jsxs)("div",{className:"contacts-address-content-wrap",children:[(0,a.jsx)(v(),{src:s+"/img/footer-icon-phone.svg",alt:"icon-phone",height:24,width:24}),(0,a.jsx)("a",{className:"contacts-link",href:"tel:+380675746914",children:"+38(067)-574-69-14"})]}),(0,a.jsxs)("div",{className:"contacts-address-content-wrap",children:[(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#9e9e9e",children:[(0,a.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,a.jsx)("path",{d:"M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"})]}),(0,a.jsx)("a",{className:"contacts-link",href:"mailto:kmkstroy82@gmail.com",children:"kmkstroy82@gmail.com"})]})]}),(0,a.jsx)(v(),{className:"footer-img",src:s+"/img/footer-img.jpg",alt:"img",height:189,width:272,priority:!0})]})}),(0,a.jsx)("div",{className:"footer-links-wrap",children:(0,a.jsx)("div",{children:(0,a.jsx)("a",{href:"https://www.youtube.com/channel/UC6N0k9hxpoWZ_FxDAuBCU3g/featured",target:"_blank",rel:"noreferrer",children:(0,a.jsx)(v(),{className:"footer-youtube-img",src:s+"/img/footer-youtube-logo.svg",alt:"YouTube-Link",height:15,width:68})})})}),(0,a.jsxs)("p",{className:"footer-copyright",children:["Copyright \xa9 2015-",new Date().getFullYear()," KMKSTROY. All Rights Reserved"]})]})})},B=t(2175),U=t(4231);let G=(0,U.Ry)().shape({_subject:(0,U.Z_)(),_captcha:(0,U.Z_)(),name:(0,U.Z_)().max(15,"Must be 15 characters or less").required("Required"),company:(0,U.Z_)().max(20,"Must be 20 characters or less"),email:(0,U.Z_)().email().required("Required"),phone:(0,U.Z_)().length(12,"Phone number is not valid"),message:(0,U.Z_)().required("Required")});var q=t(7333);let A=e=>{let{label:s,...t}=e,[i,n]=(0,B.U$)(t);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("label",{className:n.touched&&n.error?"error-form":null,htmlFor:t.id,children:s}),(0,a.jsx)("input",{className:n.touched&&n.error?"form-field error":"form-field",...i,...t})]})};var W=t(9669),Z=t.n(W);let D=()=>{let e=(0,o.useRef)(),{inViewport:s}=(0,w.NM)(e),{t,i18n:i}=(0,g.$G)(),[n,r]=(0,o.useState)(null),[l,c]=(0,o.useState)(null),[d,h]=(0,o.useState)(!1),m=e=>{Z().defaults.headers.post["Content-Type"]="application/json",Z().post("https://formsubmit.co/ajax/ac60ff415d1eaff7b329ccdee0bf4f91",JSON.stringify(e)).then(e=>{"true"===e.data.success&&200===e.status?c("success"):(console.log("Status code: "+e.status),c("error"))}).catch(e=>{console.log(e),c("error")})};return(0,o.useEffect)(()=>{"success"===l?r(t("submitForm.success_message")):"error"===l?r(t("submitForm.error_message")):null===l&&r(null)},[l]),(0,a.jsxs)("section",{ref:e,className:"section-form",id:"contacts",children:[(0,a.jsx)("h1",{className:"section-form-title",children:t("submitForm.title")}),(0,a.jsx)(B.J9,{initialValues:{_subject:"New Message From The KMKSTROY Site!",_captcha:"true",name:"",company:"",email:"",phone:"",message:""},validationSchema:G,onSubmit(e,s){let{setSubmitting:t,resetForm:a}=s;m(e),a(),h(!0)},children(e){let{values:i,errors:r,setFieldValue:o,handleBlur:m,touched:p}=e;return(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:s?"form-wrapper animate__animated animate__fadeInUp animate__delay-0.5s":"form-wrapper-none",children:[(0,a.jsxs)("div",{className:"form-company-info",children:[(0,a.jsx)("h3",{className:"form-brand",children:t("submitForm.company")}),(0,a.jsxs)("ul",{children:[(0,a.jsxs)("li",{children:[(0,a.jsxs)("svg",{className:"form-svg",xmlns:"http://www.w3.org/2000/svg",height:"16px",viewBox:"0 0 24 24",width:"16px",fill:"#f8f8f8",children:[(0,a.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,a.jsx)("path",{d:"M15.5 1h-8C6.12 1 5 2.12 5 3.5v17C5 21.88 6.12 23 7.5 23h8c1.38 0 2.5-1.12 2.5-2.5v-17C18 2.12 16.88 1 15.5 1zm-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5-4H7V4h9v14z"})]})," +38(067)-561-19-00"]}),(0,a.jsxs)("li",{children:[(0,a.jsxs)("svg",{className:"form-svg",xmlns:"http://www.w3.org/2000/svg",height:"16px",viewBox:"0 0 24 24",width:"16px",fill:"#f8f8f8",children:[(0,a.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,a.jsx)("path",{d:"M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"})]})," kmkstroy82@gmail.com"]})]})]}),(0,a.jsx)("div",{className:"form-contact",children:(0,a.jsxs)(B.l0,{className:"form",children:[(0,a.jsxs)("div",{className:d?"fields-wrapper hidden":"fields-wrapper",children:[(0,a.jsx)(B.gN,{type:"hidden",name:"_subject",id:"_subject",value:"New Message From The KMKSTROY Site!"}),(0,a.jsx)(B.gN,{type:"hidden",name:"_captcha",id:"_captcha",value:"true"}),(0,a.jsx)("p",{children:(0,a.jsx)(A,{label:t("submitForm.label_name"),name:"name",id:"name",type:"text"})}),(0,a.jsx)("p",{children:(0,a.jsx)(A,{label:t("submitForm.label_company"),id:"company",name:"company",type:"text"})}),(0,a.jsx)("p",{children:(0,a.jsx)(A,{label:t("submitForm.label_email"),id:"email",name:"email",type:"email"})}),(0,a.jsxs)("p",{children:[(0,a.jsx)("label",{className:p.phone&&r.phone?"error-form":null,htmlFor:"phone",children:t("submitForm.label_phone")}),(0,a.jsx)(q.Z,{onBlur:e=>m(e),className:p.phone&&r.phone?"form-field error":"form-field",id:"phone",value:i.phone,name:"phone",format:"+## (###) ###-##-##",allowEmptyFormatting:!0,mask:"_",onValueChange(e){let{value:s}=e;o("phone",s)}})]}),(0,a.jsxs)("p",{className:"full",children:[(0,a.jsx)("label",{className:p.message&&r.message?"error-form":null,htmlFor:"message",children:t("submitForm.label_message")}),(0,a.jsx)(B.gN,{as:"textarea",className:p.message&&r.message?"form-field error":"form-field",id:"message",name:"message",rows:"5"})]})]}),d&&!l?(0,a.jsx)("div",{className:"lds-dual-ring submit-form"}):d&&l&&(0,a.jsx)("p",{className:"message-submit",children:n}),(0,a.jsx)("p",{className:"full",children:d?(0,a.jsx)("button",{className:"form-submit",onClick(e){h(!1),c(null),e.preventDefault()},children:t("submitForm.button_close")}):(0,a.jsx)("button",{className:"form-submit",type:"submit",children:t("submitForm.button_send")})})]})})]})})}})]})},$=e=>{let{gallery:s}=e;return(e,t)=>{let{galleryItems:a}=t();if(0===a.length){let i=s.sort((e,s)=>e.id>s.id?-1:e.id<s.id?1:0);e(h(i))}}},J=async()=>{let e=await fetch("https://www.kmkstroy.com.ua/api/gallery/"),s=await e.json();return s};function X(e){let{gallery:s}=e,t=(0,d.I0)(),{t:i}=(0,g.$G)();return(0,o.useEffect)(()=>{t($(s))},[t]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n(),{children:[(0,a.jsx)("link",{rel:"alternate",hrefLang:"ua",href:"https://www.kmkstroy.com.ua"}),(0,a.jsx)("link",{rel:"alternate",hrefLang:"en",href:"https://www.kmkstroy.com.ua/en"}),(0,a.jsx)("link",{rel:"alternate",hrefLang:"ua",href:"https://www.kmkstroy.com.ua/reference_KMKSTROY.pdf"}),(0,a.jsx)("link",{rel:"alternate",hrefLang:"en",href:"https://www.kmkstroy.com.ua/reference_KMKSTROY_en.pdf"}),(0,a.jsx)("meta",{charSet:"utf-8"}),(0,a.jsx)("link",{rel:"icon",href:"favicon.png"}),(0,a.jsx)("title",{children:i("head.title")}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,a.jsx)("meta",{name:"theme-color",content:"#000000"}),(0,a.jsx)("meta",{name:"description",content:i("head.meta_description")}),(0,a.jsx)("meta",{httpEquiv:"Permissions-Policy",content:"interest-cohort=()"})]}),(0,a.jsx)(l(),{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=G-1HBCXSNJJT"}),(0,a.jsx)(l(),{id:"google-analytics",strategy:"afterInteractive",children:"\n          window.dataLayer = window.dataLayer || [];\n          function gtag() { dataLayer.push(arguments); }\n          gtag('js', new Date());\n          gtag('config', 'G-1HBCXSNJJT');\n        "}),(0,a.jsx)(j,{}),(0,a.jsx)(K,{}),(0,a.jsxs)("main",{children:[(0,a.jsx)(b,{}),(0,a.jsx)(N,{}),(0,a.jsx)(H,{}),(0,a.jsx)(E,{}),(0,a.jsx)(V,{}),(0,a.jsx)(D,{})]}),(0,a.jsx)("footer",{children:(0,a.jsx)(Y,{})})]})}X.getInitialProps=async e=>{let s=await J();return s?{gallery:s}:{notFound:!0}}},6992:function(e){"use strict";e.exports=JSON.parse('{"head":{"title":"KMKSTROY Industrial floors","meta_description":"Installation of concrete, polymer self-leveling floors. Construction, facade, roofing and finishing works in Dnipro, Ukraine."},"header":{"logo":"/kmk-logo-en.svg","logo-hover":"/kmk-logo-en-hover.svg","nav_home":"Home","nav_about":"About","nav_services":"Services","nav_gallery":"Gallery","nav_partners":"Partners","nav_contacts":"Contacts"},"intro":{"title":"KMKSTROY LLC","subtitle-p1":"Construction Works &","subtitle-p2":"Industrial Floors"},"about":{"title":"About us","subtitle-p1":"KMKSTROY LLC ","subtitle-p2":"On the construction market of Ukraine since 2015","description-p1":"The company has a license with the class of responsibility CC2, CC3, and a permit to perform high-risk works.","description-p2":"Our staff consists of highly qualified specialists with experience in the field of arrangement industrial concrete and polymer floors, as well as other types of construction works.","description-p3":"The company has a material and technical base, the necessary equipment, tools, machines and mechanisms."},"services":{"title":"The main activities of the Company","li1":"A full range of works on the installation of concrete floors","li2":"Installation of polymer self-leveling floors (polyurethane, epoxy, polyurethane-cement)","li3":"Implementation of construction-installation, facade, roofing and finishing works","li4":"Installation of engineering networks"},"gallery":{"title":"OUR WORKS","download":"Download Reference List","button-load":"Load more","button-isLoading":"Loading...","button-delete":"Delete"},"partners":{"title":"Our Partnerships"},"submitForm":{"title":"Contact Us","company":"KMKSTROY LLC","label_name":"Name *","label_company":"Company","label_email":"Email Address*","label_phone":"Phone","label_message":"Your Message *","button_send":"Send message","button_close":"Close","success_message":"Your message was successfully sent.","error_message":"Server error! Please try again later."},"footer":{"logo":"/kmk-logo-en.svg","title":"KMKSTROY LLC","subtitle":"Construction Works & Industrial Floors","address_title":"Office","address_city":"49044, Dnipro city,","address_street":"Shevchenko st, 37"}}')},8668:function(e){"use strict";e.exports=JSON.parse('{"head":{"title":"КМКСТРОЙ Промислові підлоги","meta_description":"Влаштування бетонних, полімерних наливних підлог. Виконання будівельних, фасадних, покрівельних та оздоблювальних робіт м. Дніпро, Україна."},"header":{"logo":"/kmk-logo-ua.png","logo-hover":"/kmk-logo-ua-hover.png","nav_home":"Головна","nav_about":"Про нас","nav_services":"Послуги","nav_gallery":"Галерея","nav_partners":"Партнери","nav_contacts":"Контакти"},"intro":{"title":"ТОВ \xabКМКСТРОЙ\xbb","subtitle-p1":"Будівельні роботи та","subtitle-p2":"Промислові підлоги"},"about":{"title":"Про нас","subtitle-p1":"ТОВ \xabКМКСТРОЙ\xbb ","subtitle-p2":"на будівельному ринку України з 2015 року","description-p1":"Підприємство має ліцензію з класом відповідальності  СС2, СС3, та дозвіл для виконання  робіт підвищеної небезпеки.","description-p2":"Наш штат складається з кваліфікованих спеціалістів, які володіють досвідом роботи більше 10 років.","description-p3":"Підприємство має матеріально-технічну базу, обладнання, інструменти, машини та механізми, необхідні для надання послуг на високому рівні."},"services":{"title":"Основні види діяльності підприємства","li1":"Повний комплекс робіт з влаштування бетонних підлог","li2":"Влаштування полімерних наливних підлог (поліуретанові, епоксидні, поліуретан-цементні)","li3":"Виконання будівельно-монтажних, фасадних, покрівельних та оздоблювальних робіт","li4":"Влаштування інженерних мереж"},"gallery":{"title":"Наші роботи","download":"Завантажити Референс-лист","button-load":"Завантажити ще","button-isLoading":"Завантаження...","button-delete":"Видалити"},"partners":{"title":"Наші Партнери"},"submitForm":{"title":"Надіслати нам повідомлення","company":"ТОВ \xabКМКСТРОЙ\xbb","label_name":"Ім\'я *","label_company":"Компанія","label_email":"Email Адреса *","label_phone":"Номер телефону","label_message":"Повідомлення *","button_send":"Надіслати","button_close":"Закрити","success_message":"Ваше повідомлення успішно надіслано.","error_message":"Помилка сервера! Будь ласка, повторіть запит пізніше."},"footer":{"logo":"/kmk-logo-ua.png","title":"ТОВ \xabКМКСТРОЙ\xbb","subtitle":"Будівельні роботи та промислові підлоги","address_title":"Офіс","address_city":"49044, м. Дніпро,","address_street":"вул. Шевченка, буд. 37"}}')}},function(e){e.O(0,[664,68,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);