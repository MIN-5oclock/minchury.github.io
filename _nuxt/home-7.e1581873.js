import{_ as $,M as Z,C as z,E as K,S as ee,O as se,a as te,b as U}from"./OffCanvas.7fd537d1.js";import{c as Ae}from"./categoryData.e6d04821.js";import{d as v,_ as f,o as i,g as d,F as g,j as B,b as e,t as w,a as A,w as c,e as b,q as E,r as a,z as I,A as oe,B as ne,c as y,u as X,n as N,h as k,y as ie,C as L,l as P,D as Y,E as Q,i as ae}from"./entry.af507ca5.js";import{C as x,S as D,P as q}from"./carousel.es.b595cd0d.js";import{b as le,a as R,c as de,d as re,e as ce}from"./client-5.a40cafdd.js";import{P as _e,u as G}from"./ProductModal.445bf939.js";import{b as ue}from"./blogData.44bd5507.js";import"./avater-2.fbed9847.js";import"./avater-3.bb615705.js";const pe=v({mixins:[Ae],setup(){return{}}}),me={class:"banner__area-df mt-10"},he={class:"banner__item-3-image m-img"},fe=["src"],ve={class:"banner__content-5"};function ge(s,t,u,m,h,_){const o=$;return i(),d("div",me,[(i(!0),d(g,null,B(s.categoryData.slice(3,6),l=>(i(),d("div",{key:l.id,class:"banner__item-3 mb-30"},[e("div",he,[e("img",{src:l.img,alt:""},null,8,fe)]),e("div",ve,[e("h5",null,w(l.parentTitle),1),e("p",null,w(l.smDesc),1),A(o,{href:"/shop",class:"os-btn-5"},{default:c(()=>[b("Shop Now")]),_:1})])]))),128))])}const M=f(pe,[["render",ge]]),be=""+new URL("bg-video.2fff5e37.webp",import.meta.url).href,we={props:{videoUrl:{type:String,default:"https://www.youtube.com/embed/EW4ZYb3mCZk",required:!0}},methods:{playVideo(){const s=document.querySelector("#video-overlay");let t=document.createElement("iframe");t.setAttribute("src",this.videoUrl),t.style.width="60%",t.style.height="80%",s==null||s.classList.add("open"),s.appendChild(t)},closeVideo(){const s=document.querySelector("#video-overlay.open"),t=document.querySelector("#video-overlay.open iframe");s==null||s.classList.remove("open"),t==null||t.remove()}}};function Be(s,t,u,m,h,_){return i(),d("div",{id:"video-overlay",class:"video-overlay",onClick:t[1]||(t[1]=(...o)=>_.closeVideo&&_.closeVideo(...o))},[e("a",{class:"video-overlay-close",onClick:t[0]||(t[0]=E((...o)=>_.closeVideo&&_.closeVideo(...o),["prevent"]))},"×")])}const $e=f(we,[["render",Be]]),ye=v({components:{VideoModal:$e},data(){return{bg:be}},methods:{handleVideoPopup(){this.$refs.video_modal.playVideo()}}}),Ee={class:"container"},ke={class:"video__content text-center"},Se={class:"video__button mb-60"},Ce=e("i",{class:"fas fa-play"},null,-1),xe=[Ce],De=e("h5",{class:"video__title"},"AWESOME VIDEO LIGHTBOX ",-1),Pe=e("p",null,"Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. ",-1);function Fe(s,t,u,m,h,_){const o=a("video-modal");return i(),d(g,null,[e("div",{class:"video__area-df",style:I({backgroundImage:`url(${s.bg})`})},[e("div",Ee,[e("div",ke,[e("div",Se,[e("a",{onClick:t[0]||(t[0]=E((...l)=>s.handleVideoPopup&&s.handleVideoPopup(...l),["prevent"])),href:"#"},xe)]),De,Pe])])],4),A(o,{ref:"video_modal","video-url":"https://www.youtube.com/embed/7e90gBu4pas"},null,512)],64)}const V=f(ye,[["render",Fe]]),He=v({components:{Carousel:x,Slide:D},methods:{handleNext(){this.$refs.slider_1.next()},handlePrev(){this.$refs.slider_1.prev()}},setup(){const s=oe({brands:[le,R,de,re,ce,R]});return{...ne(s)}}}),Te={class:"brand__area pb-90"},Re={class:"container custom-container-2"},Ue={class:"brand__slider-active p-relative"},Ie={class:"brand__image"},Xe=["src"],Ne={class:"owl-nav"},Le=e("button",null,[e("i",{class:"fal fa-angle-left"})],-1),Ye=[Le],Qe=e("button",null,[e("i",{class:"fal fa-angle-right"})],-1),qe=[Qe];function Ge(s,t,u,m,h,_){const o=a("Slide"),l=a("Carousel");return i(),d("div",Te,[e("div",Re,[e("div",Ue,[A(l,{ref:"slider_1","items-to-show":5,"wrap-around":!0,snapAlign:"center",breakpoints:{1200:{itemsToShow:5},992:{itemsToShow:3},700:{itemsToShow:2},0:{itemsToShow:1}}},{default:c(()=>[(i(!0),d(g,null,B(s.brands,(r,n)=>(i(),y(o,{key:n,class:"brand__slider-item"},{default:c(()=>[e("div",Ie,[e("img",{src:r,alt:"client"},null,8,Xe)])]),_:2},1024))),128))]),_:1},512),e("div",Ne,[e("div",{onClick:t[0]||(t[0]=(...r)=>s.handlePrev&&s.handlePrev(...r)),class:"owl-prev"},Ye),e("div",{onClick:t[1]||(t[1]=(...r)=>s.handleNext&&s.handleNext(...r)),class:"owl-next"},qe)])])])])}const O=f(He,[["render",Ge]]),Me=v({components:{Menus:Z,CartMini:z,ExtraInfo:K,SearchPopup:ee,OffCanvas:se},data(){return{isSticky:!1,showSearch:!1}},methods:{handleSticky(){window.scrollY>80?this.isSticky=!0:this.isSticky=!1},handleOpenSearchBar(){this.$refs.search_popup.openSearchPopup()},handleOffcanvas(){this.$refs.offcanvas.OpenOffcanvas()}},setup(){return{state:X()}},mounted(){window.addEventListener("scroll",this.handleSticky)}}),j="data:image/webp;base64,UklGRjQFAABXRUJQVlA4WAoAAAA4AAAAiwAAFgAASUNDUKgBAAAAAAGobGNtcwIQAABtbnRyUkdCIFhZWiAH3AABABkAAwApADlhY3NwQVBQTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9tYAAQAAAADTLWxjbXMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAF9jcHJ0AAABTAAAAAx3dHB0AAABWAAAABRyWFlaAAABbAAAABRnWFlaAAABgAAAABRiWFlaAAABlAAAABRyVFJDAAABDAAAAEBnVFJDAAABDAAAAEBiVFJDAAABDAAAAEBkZXNjAAAAAAAAAAVjMmNpAAAAAAAAAAAAAAAAY3VydgAAAAAAAAAaAAAAywHJA2MFkghrC/YQPxVRGzQh8SmQMhg7kkYFUXdd7WtwegWJsZp8rGm/fdPD6TD//3RleHQAAAAAQ0MwAFhZWiAAAAAAAAD21gABAAAAANMtWFlaIAAAAAAAAG+iAAA49QAAA5BYWVogAAAAAAAAYpkAALeFAAAY2lhZWiAAAAAAAAAkoAAAD4QAALbPQUxQSDUCAAABfyAQSFLYH3iFiEgd5Nq2rbrNeWa2a/YHkD4goDb8Wndqw8xMNadjZiiZmZnBzMy2FGmNYZ17b0b0AxH9Z+C2kSIfc5fuESLiX+NtjTimPvItGUCs0z/ECf5s9c6IhKIACxNHdtalX5KCMGoqTKB3sy7LfbS3XgK1n5UwTJPAGGQl0KdTIagQkfK/LE4A2/TOePd9alVodV8fsFnKv7NeBCBd5HS0dp4S6uRgsqGeu9ow1RJXDqlOI0Cx4SPAZBHxo8AVTwtTqo2TaQbIcAkC3NVCqClNVJGgRPEhVYuYAYbJtrga4e78o/S+hJSbcDNtEG53whzx4e3NGG+Vena5GkeFtjDOT5Uw6SpZlEUiLdTKe96myFZ0nDA5/0W1mSxEb7JIIEbaaPwpuXYza4I/keY/OArrk7WjbBYRGSUrQpolcH08jfP0ENkuAaA2TamjLG6AvBieRZgsEedjY2S6yEM9HkHHUIlALCBVxNVPC2KkOsmBGGTqVfU/rqrcY+YetaIbcsBC/Ah5jtPZrtNvPYMPk+JbNX6vxu8bMaxYnRL/gOuxEUotjwUh09yEoUYCbZAtsoW3XiBmGKFEhsh19dN31KbIHqOfjlkedPzXgnA7gqGf3puQrgzB7Z8wR4JQaxkz9yDFUDCuFen+BqYlAL2e4h6/VUogZtxs/h3YZKmQV+Yt48BkUeQj6IYLRoG7xr9klLeeZb7G27k6RcFTNoRWp2t+B+s9zf5f6+BQimhHjZsFAFZQOCBmAAAAEAQAnQEqjAAXAD4xGIpEIiGhEr1UACADBLOAEeAANI26raHqHkOpyDAA/tju//9i/YH8SxorBEhvICQfm7L//+r+f9ptgEn5th2LX5U33wNkZlznuwqHEI9wf/+ntf88e8aYngAARVhJRroAAABFeGlmAABJSSoACAAAAAYAEgEDAAEAAAABAAAAGgEFAAEAAABWAAAAGwEFAAEAAABeAAAAKAEDAAEAAAACAAAAEwIDAAEAAAABAAAAaYcEAAEAAABmAAAAAAAAAC8ZAQDoAwAALxkBAOgDAAAGAACQBwAEAAAAMDIxMAGRBwAEAAAAAQIDAACgBwAEAAAAMDEwMAGgAwABAAAA//8AAAKgBAABAAAAjAAAAAOgBAABAAAAFwAAAAAAAAA=",Ve={class:"container-fluid"},Oe={class:"row align-items-center"},je={class:"col-xl-2 col-lg-2 col-md-4 col-sm-3"},We={class:"logo"},Je=e("img",{src:j,alt:"logo"},null,-1),Ze={class:"col-xl-7 col-lg-6 col-md-1 col-sm-1"},ze={class:"main-menu main-menu-3 d-none d-lg-block p-relative"},Ke={class:"col-xl-3 col-lg-4 col-md-7 col-sm-8"},es={class:"header__right p-relative d-flex justify-content-between justify-content-sm-end align-items-center"},ss=e("a",{href:"#",class:"mobile-menu-toggle"},[e("i",{class:"fas fa-bars"})],-1),ts=[ss],As={class:"header__action"},os=e("i",{class:"fas fa-search"},null,-1),ns=[os],is=e("a",{href:"#"},[e("i",{class:"fas fa-user"})],-1),as={href:"#",class:"cart"},ls=e("i",{class:"fas fa-cart-plus"},null,-1),ds={class:"cart-number-2"};function rs(s,t,u,m,h,_){const o=$,l=a("menus"),r=a("extra-info"),n=a("cart-mini"),p=a("search-popup"),F=a("off-canvas"),H=te;return i(),y(H,null,{default:c(()=>[e("header",null,[e("div",{id:"header-sticky",class:N(`header__area header__transparent header__transparent-2 pt-15 pb-15 box-25 ${s.isSticky?"sticky":""}`)},[e("div",Ve,[e("div",Oe,[e("div",je,[e("div",We,[A(o,{href:"/"},{default:c(()=>[Je]),_:1})])]),e("div",Ze,[e("div",ze,[e("nav",null,[A(l)])])]),e("div",Ke,[e("div",es,[e("div",{onClick:t[0]||(t[0]=E((...C)=>s.handleOffcanvas&&s.handleOffcanvas(...C),["prevent"])),class:"mobile-menu-btn d-lg-none"},ts),e("div",As,[e("ul",null,[e("li",null,[e("a",{onClick:t[1]||(t[1]=E((...C)=>s.handleOpenSearchBar&&s.handleOpenSearchBar(...C),["prevent"])),href:"#",class:"search-toggle"},ns)]),e("li",null,[is,A(r)]),e("li",null,[e("a",as,[ls,e("span",ds,w(s.state.totalPriceQuantity.quantity),1)]),A(n)])])])])])])])],2)]),A(p,{ref:"search_popup"},null,512),A(F,{ref:"offcanvas"},null,512)]),_:1})}const cs=f(Me,[["render",rs]]),_s=v({setup(){return{}}}),us="data:image/webp;base64,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",ps={class:"footer__area dark-soft-bg"},ms={class:"footer__top pt-100 pb-50"},hs={class:"container custom-container-2"},fs=k('<div class="row"><div class="col-xl-12"><div class="footer__social-list mb-60"><ul><li><a target="_blank" href="http://facebook.com">Facebook</a></li><li><a target="_blank" href="http://twitter.com">Twitter</a></li><li><a target="_blank" href="https://www.instagram.com/">Instagram</a></li><li><a target="_blank" href="https://www.pinterest.com/">Pinterest</a></li><li><a target="_blank" href="https://www.youtube.com/">Youtube</a></li></ul></div></div></div>',1),vs={class:"row"},gs={class:"col-xl-4 col-lg-6 col-md-6 col-12"},bs={class:"footer__widget mb-30"},ws={class:"footer__widget-title mb-25"},Bs=e("img",{src:j,alt:"logo"},null,-1),$s=k('<div class="footer__widget-content"><p>CEES is a premium Templates theme with advanced admin module. It’s extremely customizable, easy to use and fully responsive and retina ready.</p><div class="footer__contact"><ul><li><div class="icon"><i class="fal fa-map-marker-alt"></i></div><div class="text"><span>Add: 1234 Heaven Stress, Beverly Hill, Melbourne, USA.</span></div></li><li><div class="icon"><i class="fal fa-envelope-open-text"></i></div><div class="text"><span>Email: Contact@basictheme.com</span></div></li><li><div class="icon"><i class="fal fa-phone-alt"></i></div><div class="text"><span>Phone Number: (800) 123 456 789</span></div></li></ul></div></div>',1),ys=k('<div class="col-xl-2 col-lg-3 col-md-3 col-12"><div class="footer__widget mb-30"><div class="footer__widget-title"><h5>information</h5></div><div class="footer__widget-content"><div class="footer__links"><ul><li><a href="#">About Us</a></li><li><a href="#">Careers</a></li><li><a href="#">Delivery Inforamtion</a></li><li><a href="#">Privacy Policy</a></li><li><a href="#">Terms &amp; Condition</a></li></ul></div></div></div></div><div class="col-xl-2 col-lg-3 col-md-3 col-12"><div class="footer__widget mb-30"><div class="footer__widget-title mb-25"><h5>Customer Service</h5></div><div class="footer__widget-content"><div class="footer__links"><ul><li><a href="#">Shipping Policy</a></li><li><a href="#">Help &amp; Contact Us</a></li><li><a href="#">Returns &amp; Refunds</a></li><li><a href="#">Online Stores</a></li><li><a href="#">Terms &amp; Conditions</a></li></ul></div></div></div></div><div class="col-xl-4 col-lg-3 col-md-6 col-12"><div class="footer__widget mb-30"><div class="footer__widget-title mb-25"><h5>newsletter</h5></div><div class="footer__widget-content"><p>oin over 1,000 people who get free and fresh content delivered automatically each time we publish.</p><div class="form-group"><input class="form-control" id="newsletter-input" type="email" name="contact[email]" placeholder="Your email address..."><button class="ss-btn btnNewsletter" type="submit">Subscribe</button></div></div></div></div>',3),Es={class:"footer__bottom footer__bottom-3"},ks={class:"container"},Ss={class:"row"},Cs={class:"col-xl-6 col-lg-7 col-md-8"},xs={class:"footer__copyright footer__copyright-3"},Ds=e("div",{class:"col-xl-6 col-lg-5 col-md-4"},[e("div",{class:"footer__payment"},[e("a",{href:"#"},[e("img",{src:us,alt:""})])])],-1);function Ps(s,t,u,m,h,_){const o=$;return i(),d("section",ps,[e("div",ms,[e("div",hs,[fs,e("div",vs,[e("div",gs,[e("div",bs,[e("div",ws,[A(o,{href:"/"},{default:c(()=>[Bs]),_:1})]),$s])]),ys])])]),e("div",Es,[e("div",ks,[e("div",Ss,[e("div",Cs,[e("div",xs,[e("p",null,[b("Copyright © "+w(new Date().getFullYear())+" ",1),A(o,{href:"/",class:"link"},{default:c(()=>[b("Outstock")]),_:1}),b(" all rights reserved. Powered by "),A(o,{href:"/",class:"link"},{default:c(()=>[b("Theme_pure")]),_:1})])])]),Ds])])])])}const Fs=f(_s,[["render",Ps]]),Hs=v({components:{HeaderFour:cs,BackToTop:U,FooterThree:Fs}}),Ts={class:"fix"};function Rs(s,t,u,m,h,_){const o=a("header-four"),l=a("footer-three"),r=U;return i(),d("div",Ts,[A(o),ie(s.$slots,"default"),A(l),A(r)])}const Us=f(Hs,[["render",Rs]]),Is=""+new URL("slide111.b11bcbe1.webp",import.meta.url).href,Xs=""+new URL("slide112.830db2eb.webp",import.meta.url).href,Ns=""+new URL("slide113.781d9e3d.webp",import.meta.url).href,Ls=v({components:{Carousel:x,Slide:D,Pagination:q},methods:{handleNext(){this.$refs.slider_1.next()},handlePrev(){this.$refs.slider_1.prev()}},setup(){return{slider_data:L([{id:1,bgImg:Is,sm_title:"up to 50% off",meta:!0,title:"Life style that you <br/>need, Yo.",subtitle:"Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum."},{id:2,bgImg:Xs,sm_title:"Quick parcel delivery",title:"Creative theme <br/>Awesome.",subtitle:"Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum."},{id:3,bgImg:Ns,sm_title:"Quick parcel delivery",title:"The world is<br/>make all.",subtitle:"Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum."}])}}}),Ys={class:"slider__area slider__area-3 tp_hero p-relative"},Qs={class:"slider-active-3"},qs={class:"container custom-container-2"},Gs={class:"row"},Ms={class:"col-xl-7 col-lg-7 col-md-10"},Vs={class:"slider__content slider__content-5"},Os=["innerHTML"],js=["innerHTML"],Ws=e("i",{class:"fal fa-angle-left"},null,-1),Js=[Ws],Zs=e("i",{class:"fal fa-angle-right"},null,-1),zs=[Zs];function Ks(s,t,u,m,h,_){const o=$,l=a("Slide"),r=a("Pagination"),n=a("Carousel");return i(),d("section",Ys,[e("div",Qs,[A(n,{"items-to-show":1,"wrap-around":!0,ref:"slider_1"},{addons:c(()=>[A(r)]),default:c(()=>[(i(!0),d(g,null,B(s.slider_data,p=>(i(),y(l,{key:p.id,class:"single-slider single-slider-2 slider__height-6 d-flex align-items-center",style:I({backgroundImage:`url(${p.bgImg})`})},{default:c(()=>[e("div",qs,[e("div",Gs,[e("div",Ms,[e("div",Vs,[e("span",{class:N(`${p.meta?"meta":""}`)},w(p.sm_title),3),e("h2",{innerHTML:p.title},null,8,Os),e("p",{innerHTML:p.subtitle},null,8,js),A(o,{href:"/shop",class:"os-btn-4 hero-slider-btn"},{default:c(()=>[b("Shop Now")]),_:1})])])])])]),_:2},1032,["style"]))),128))]),_:1},512),e("div",null,[e("button",{onClick:t[0]||(t[0]=(...p)=>s.handlePrev&&s.handlePrev(...p)),type:"button",class:"slick-prev slick-arrow"},Js),e("button",{onClick:t[1]||(t[1]=(...p)=>s.handleNext&&s.handleNext(...p)),type:"button",class:"slick-next slick-arrow"},zs)])])])}const et=f(Ls,[["render",Ks]]),st=v({components:{ProductModal:_e},props:{item:{type:Object,default:{},required:!0}},setup(){return{store:X()}}}),tt={class:"product__wrapper"},At={class:"product__thumb"},ot=["src"],nt=["src"],it={class:"product__action-3 transition-3"},at=e("i",{class:"fal fa-plus"},null,-1),lt=["data-bs-target"],dt=e("i",{class:"fal fa-eye"},null,-1),rt=[dt],ct={key:0,class:"product__sale product__sale-3"},_t={key:0,class:"new"},ut={key:1,class:"percent"},pt={class:"product__content product__content-2 p-relative text-center"},mt={class:"product__content-inner"},ht=k('<div class="rating"><a href="#"><i class="fal fa-star"></i></a><a href="#"><i class="fal fa-star"></i></a><a href="#"><i class="fal fa-star"></i></a><a href="#"><i class="fal fa-star"></i></a><a href="#"><i class="fal fa-star"></i></a></div>',1),ft=["innerHTML"],vt={class:"product__price-3"},gt={key:0,class:"old-price"};function bt(s,t,u,m,h,_){const o=$,l=a("product-modal");return i(),d(g,null,[e("div",tt,[e("div",At,[A(o,{href:`/product-details/${s.item.id}`,class:"w-img"},{default:c(()=>[e("img",{src:s.item.img,alt:"product-img"},null,8,ot),e("img",{class:"product__thumb-2",src:s.item.thumb_img,alt:"product-img"},null,8,nt)]),_:1},8,["href"]),e("div",it,[e("a",{onClick:t[0]||(t[0]=E(r=>s.store.add_cart_product(s.item),["prevent"])),href:"#",class:"action-btn"},[at,b("Add to cart ")]),e("a",{onClick:t[1]||(t[1]=E((...r)=>s.store.initialOrderQuantity&&s.store.initialOrderQuantity(...r),["prevent"])),href:"#",class:"action-btn","data-bs-toggle":"modal","data-bs-target":`#productModalId-${s.item.id}`},rt,8,lt)]),s.item.sale_of_per||s.item.new?(i(),d("div",ct,[s.item.new||s.item.sale_of_per?(i(),d("span",_t,"new")):P("",!0),s.item.sale_of_per?(i(),d("span",ut,"-"+w(s.item.sale_of_per)+"%",1)):P("",!0)])):P("",!0)]),e("div",pt,[e("div",mt,[ht,e("h4",null,[A(o,{href:`/product-details/${s.item.id}`},{default:c(()=>[e("span",{innerHTML:s.item.title},null,8,ft)]),_:1},8,["href"])]),e("div",vt,[e("span",null,"$"+w(s.item.price.toFixed(2)),1),s.item.old_price?(i(),d("span",gt,[e("del",null,"$"+w(s.item.old_price),1)])):P("",!0)])])])]),A(l,{item:s.item},null,8,["item"])],64)}const W=f(st,[["render",bt]]),wt=v({components:{ProductItemTwo:W},setup(){const t=G().products.filter(_=>_.bestSeller),u=t.filter(_=>_.big_img)[0],m=t.filter(_=>_.big_img)[1],h=t.filter(_=>!_.big_img);return{big_prd_1:u,big_prd_2:m,sm_best_prd:h}}}),Bt={class:"product__view-area pt-60 pb-60"},$t={class:"container custom-container-2"},yt=e("div",{class:"row"},[e("div",{class:"col-xl-12"},[e("div",{class:"section__wrapper text-center"},[e("h3",{class:"section__title-2"},[e("span",null,"BESTSELLER PRODUCTS")]),e("p",null,"Eodem modo typi, qui nunc nobis videntur parum clari")])])],-1),Et={class:"row mt-40"},kt={class:"col-xl-6 col-lg-6"},St={class:"row"},Ct={class:"col-lg-12"},xt={class:"row"},Dt={class:"product__item mb-40"},Pt={class:"col-lg-12"},Ft={class:"product__big-image effectThree mb-40"},Ht=["src"],Tt={class:"col-lg-6 col-lg-6"},Rt={class:"row"},Ut={class:"col-lg-12"},It={class:"product__big-image effectThree mb-40"},Xt=["src"],Nt={class:"col-lg-12"},Lt={class:"row"},Yt={class:"product__item mb-40"};function Qt(s,t,u,m,h,_){const o=a("product-item-two"),l=$;return i(),d("div",Bt,[e("div",$t,[yt,e("div",Et,[e("div",kt,[e("div",St,[e("div",Ct,[e("div",xt,[(i(!0),d(g,null,B(s.sm_best_prd.slice(0,2),(r,n)=>(i(),d("div",{key:n,class:"col-xl-6 col-lg-12 col-md-6"},[e("div",Dt,[A(o,{item:r},null,8,["item"])])]))),128))])]),e("div",Pt,[e("div",Ft,[A(l,{href:`/product-details/${s.big_prd_1.id}`},{default:c(()=>[e("img",{src:s.big_prd_1.big_img,alt:""},null,8,Ht)]),_:1},8,["href"])])])])]),e("div",Tt,[e("div",Rt,[e("div",Ut,[e("div",It,[A(l,{href:`/product-details/${s.big_prd_2.id}`},{default:c(()=>[e("img",{src:s.big_prd_2.big_img,alt:"product img"},null,8,Xt)]),_:1},8,["href"])])]),e("div",Nt,[e("div",Lt,[(i(!0),d(g,null,B(s.sm_best_prd.slice(2,4),(r,n)=>(i(),d("div",{key:n,class:"col-xl-6 col-lg-12 col-md-6"},[e("div",Yt,[A(o,{item:r},null,8,["item"])])]))),128))])])])])])])])}const qt=f(wt,[["render",Qt]]),Gt=v({components:{ProductItemTwo:W,Carousel:x,Slide:D},methods:{handleNext(){this.$refs.slider_1.next()},handlePrev(){this.$refs.slider_1.prev()}},setup(){return{products:G().products.filter(u=>u.bestSeller).filter(u=>!u.big_img)}}});const T=s=>(Y("data-v-33431e7c"),s=s(),Q(),s),Mt={class:"product__slider-area pt-95 pb-60"},Vt={class:"container custom-container-2"},Ot=T(()=>e("div",{class:"row"},[e("div",{class:"col-xl-12"},[e("div",{class:"section__wrapper text-center"},[e("h3",{class:"section__title-2"},[e("span",null,"FEATURED PRODUCTS")]),e("p",null,"Claritas est etiam processus dynamicus, qui sequitur.")])])],-1)),jt={class:"row mt-40"},Wt={class:"col-lg-12"},Jt={class:"product__slider-active p-relative"},Zt={class:"product__item mb-40"},zt={class:"owl-nav"},Kt=T(()=>e("button",null,[e("i",{class:"fal fa-angle-left"})],-1)),eA=[Kt],sA=T(()=>e("button",null,[e("i",{class:"fal fa-angle-right"})],-1)),tA=[sA];function AA(s,t,u,m,h,_){const o=a("product-item-two"),l=a("Slide"),r=a("Carousel");return i(),d("div",Mt,[e("div",Vt,[Ot,e("div",jt,[e("div",Wt,[e("div",Jt,[A(r,{ref:"slider_1","items-to-show":3,"wrap-around":!0,breakpoints:{1200:{itemsToShow:3},992:{itemsToShow:3},700:{itemsToShow:2},0:{itemsToShow:1}}},{default:c(()=>[(i(!0),d(g,null,B(s.products,(n,p)=>(i(),y(l,{key:p,class:"product__slider-item"},{default:c(()=>[e("div",Zt,[A(o,{item:n},null,8,["item"])])]),_:2},1024))),128))]),_:1},512),e("div",zt,[e("div",{onClick:t[0]||(t[0]=(...n)=>s.handlePrev&&s.handlePrev(...n)),class:"owl-prev"},eA),e("div",{onClick:t[1]||(t[1]=(...n)=>s.handleNext&&s.handleNext(...n)),class:"owl-next"},tA)])])])])])])}const oA=f(Gt,[["render",AA],["__scopeId","data-v-33431e7c"]]),nA=""+new URL("testi1.18e83e1b.webp",import.meta.url).href,iA="data:image/webp;base64,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",aA=""+new URL("testi3.1ebc665e.webp",import.meta.url).href,lA=v({components:{Carousel:x,Slide:D,Pagination:q},setup(){return{testimonial_data:L([{id:1,img:nA,desc:"Great theme, extended super and fast professional support. easy to use, flexible, visual composer and more functional plugins on board. Yes a real good, strong theme with structured coding. Enjoy it! friendly and super good!"},{id:2,img:iA,desc:"Great theme, extended super and fast professional support. easy to use, flexible, visual composer and more functional plugins on board. Yes a real good, strong theme with structured coding. Enjoy it! friendly and super good!"},{id:3,img:aA,desc:"Great theme, extended super and fast professional support. easy to use, flexible, visual composer and more functional plugins on board. Yes a real good, strong theme with structured coding. Enjoy it! friendly and super good!"}])}}});const dA={class:"testimonial__area grey-bg pt-95 pb-95"},rA={class:"container custom-container-2"},cA=k('<div class="row" data-v-05ad12ba><div class="col-lg-12" data-v-05ad12ba><div class="row" data-v-05ad12ba><div class="col-xl-12" data-v-05ad12ba><div class="section__wrapper text-center mb-40" data-v-05ad12ba><h3 class="section__title-2" data-v-05ad12ba>FEATURED PRODUCTS</h3><p class="sub-title" data-v-05ad12ba>Commodo sociosqu venenatis cras dolor sagittis integer luctus sem primis eget maecenas sed urna malesuada consectetuer</p></div></div></div></div></div>',1),_A={class:"row"},uA={class:"col-lg-12"},pA={class:"testimonial__image text-center mb-50"},mA=["src"],hA={class:"testimonial__content"},fA=["innerHTML"];function vA(s,t,u,m,h,_){const o=a("Slide"),l=a("Pagination"),r=a("Carousel");return i(),d("div",dA,[e("div",rA,[cA,e("div",_A,[e("div",uA,[A(r,{"items-to-show":1,"wrap-around":!0,ref:"slider_1",class:"testimonial__slider-active"},{addons:c(()=>[A(l)]),default:c(()=>[(i(!0),d(g,null,B(s.testimonial_data,n=>(i(),y(o,{key:n.id,class:"testimonail__slider-item"},{default:c(()=>[e("div",pA,[e("img",{src:n.img,alt:""},null,8,mA)]),e("div",hA,[e("p",{innerHTML:n.desc},null,8,fA)])]),_:2},1024))),128))]),_:1},512)])])])])}const gA=f(lA,[["render",vA],["__scopeId","data-v-05ad12ba"]]),bA=v({components:{Carousel:x,Slide:D},methods:{handleNext(){this.$refs.slider_1.next()},handlePrev(){this.$refs.slider_1.prev()}},mixins:[ue],setup(){}});const S=s=>(Y("data-v-21ba71a8"),s=s(),Q(),s),wA={class:"blog__slider-area pt-100 pb-100"},BA={class:"container custom-container-2"},$A=k('<div class="row" data-v-21ba71a8><div class="col-xl-12" data-v-21ba71a8><div class="row" data-v-21ba71a8><div class="col-xl-12" data-v-21ba71a8><div class="section__wrapper text-center" data-v-21ba71a8><h3 class="section__title-2" data-v-21ba71a8><span data-v-21ba71a8> From Our Blog </span></h3><p data-v-21ba71a8>Update The Latest Fashion Trends in The World</p></div></div></div></div></div>',1),yA={class:"row mt-40"},EA={class:"col-xl-12"},kA={class:"blog__slider-active p-relative"},SA={class:"blog-thumb m-img"},CA=["src"],xA=S(()=>e("i",{class:"fa fa-link"},null,-1)),DA={class:"blog__post-content"},PA={class:"blog__wrapper"},FA={class:"blog__post-title"},HA=["innerHTML"],TA={class:"article-meta d-flex justify-content-center"},RA=S(()=>e("span",{class:"article-author"},[e("span",null,"By"),b(" Theme_pure Admin")],-1)),UA=S(()=>e("span",null," /",-1)),IA={class:"article-publish"},XA=S(()=>e("i",{class:"fa fa-calendar-o"},null,-1)),NA={class:"owl-nav"},LA=S(()=>e("button",null,[e("i",{class:"fal fa-angle-left"})],-1)),YA=[LA],QA=S(()=>e("button",null,[e("i",{class:"fal fa-angle-right"})],-1)),qA=[QA];function GA(s,t,u,m,h,_){const o=$,l=a("Slide"),r=a("Carousel");return i(),d("div",wA,[e("div",BA,[$A,e("div",yA,[e("div",EA,[e("div",kA,[A(r,{"items-to-show":2,"wrap-around":!1,ref:"slider_1"},{default:c(()=>[(i(!0),d(g,null,B(s.blogData.filter(n=>n.blog==="home-7"),n=>(i(),y(l,{key:n.id,class:"blog__slider-item"},{default:c(()=>[e("div",SA,[e("img",{src:n.img,alt:"blog-img"},null,8,CA),A(o,{href:`/blog-details/${n.id}`,class:"btn"},{default:c(()=>[xA]),_:2},1032,["href"])]),e("div",DA,[e("div",PA,[e("h5",FA,[A(o,{href:`/blog-details/${n.id}`},{default:c(()=>[e("span",{innerHTML:n.title},null,8,HA)]),_:2},1032,["href"])]),e("div",TA,[RA,UA,e("span",IA,[XA,b(" "+w(n.date),1)])])])])]),_:2},1024))),128))]),_:1},512),e("div",NA,[e("div",{class:"owl-prev",onClick:t[0]||(t[0]=(...n)=>s.handlePrev&&s.handlePrev(...n))},YA),e("div",{class:"owl-next",onClick:t[1]||(t[1]=(...n)=>s.handleNext&&s.handleNext(...n))},qA)])])])])])])}const MA=f(bA,[["render",GA],["__scopeId","data-v-21ba71a8"]]),VA=v({components:{LayoutSeven:Us,HomeSevenHeroSlider:et,CategoryAreaTwo:M,BestSallerProducts:qt,VideoBox:V,FeaturedProducts:oA,HomeSevenTestimonial:gA,BlogAreaTwo:MA,ClientBrandSliderTwo:O},setup(){ae({title:"Home Seven"})}});function OA(s,t,u,m,h,_){const o=a("home-seven-hero-slider"),l=M,r=a("best-saller-products"),n=V,p=a("featured-products"),F=a("home-seven-testimonial"),H=a("blog-area-two"),C=O,J=a("layout-seven");return i(),y(J,null,{default:c(()=>[A(o),A(l),A(r),A(n),A(p),A(F),A(H),A(C)]),_:1})}const Ao=f(VA,[["render",OA]]);export{Ao as default};
