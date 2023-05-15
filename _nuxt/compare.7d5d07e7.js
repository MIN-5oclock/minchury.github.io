import{a as B,_ as N}from"./OffCanvas.7fd537d1.js";import{d as f,u as S,_ as b,o as e,g as o,b as t,a as _,w as m,e as w,l as u,F as r,j as c,t as l,q as x,i as L,r as h,c as A}from"./entry.af507ca5.js";import{u as V}from"./useCompare.bf14a66e.js";import{L as F}from"./Layout.0527441e.js";import{B as H}from"./BreadcrumbArea.058d377e.js";import"./Header.e0835909.js";import"./Footer.8a73a38b.js";import"./Social.1d572929.js";const M=f({setup(){const a=V(),i=S();return{state:a,cartState:i}},created(){this.state.get_compare_products}}),T={class:"compare__area pt-120 pb-120"},D={class:"container"},P={class:"row"},R={class:"col-xl-12"},j={key:0,class:"text-center"},q=t("h3",null,"No Compare product",-1),E={key:1,class:"tp-compare-table text-center"},z={class:"table table-responsive"},G=t("th",null,"Product",-1),I={class:"tp-compare-thumb"},J=["src"],K={class:"tp-compare-product-title"},O=["innerHTML"],Q=t("th",null,"Description",-1),U={class:"tp-compare-desc"},W=t("th",null,"Price",-1),X={class:"tp-compare-price"},Y={key:0,class:"old-price"},Z=t("th",null,"Add to cart",-1),tt=["onClick"],et=t("a",{href:"#",class:"os-btn os-btn-black"},"Add to Cart",-1),st=[et],ot=t("th",null,"Rating",-1),at={class:"tp-compare-rating"},nt=t("span",null,[t("i",{class:"fas fa-star"})],-1),rt=t("span",null,[t("i",{class:"fas fa-star"})],-1),ct=t("span",null,[t("i",{class:"fas fa-star"})],-1),lt=t("span",null,[t("i",{class:"fas fa-star"})],-1),_t=t("span",null,[t("i",{class:"fas fa-star"})],-1),it={class:"mx-2"},dt=t("th",null,"Remove",-1),pt={class:"tp-compare-remove"},ut=["onClick"],mt=t("i",{class:"fal fa-trash-alt"},null,-1),ht=[mt];function ft(a,i,v,C,y,$){const d=N,p=B;return e(),o("section",T,[t("div",D,[t("div",P,[t("div",R,[_(p,null,{default:m(()=>[a.state.compare.length===0?(e(),o("div",j,[q,_(d,{class:"os-btn os-btn-black mt-20",to:"/shop"},{default:m(()=>[w(" Shop Now ")]),_:1})])):u("",!0),a.state.compare.length>0?(e(),o("div",E,[t("table",z,[t("tbody",null,[t("tr",null,[G,(e(!0),o(r,null,c(a.state.compare,(s,n)=>(e(),o("td",{key:n},[t("div",I,[t("img",{src:s.img,alt:""},null,8,J),t("h4",K,[t("a",{href:"#",innerHTML:s.title},null,8,O)])])]))),128))]),t("tr",null,[Q,(e(!0),o(r,null,c(a.state.compare,(s,n)=>(e(),o("td",{key:n},[t("div",U,[t("p",null,l(s.sm_desc),1)])]))),128))]),t("tr",null,[W,(e(!0),o(r,null,c(a.state.compare,(s,n)=>(e(),o("td",{key:n},[t("div",X,[t("span",null,"$"+l(s.price.toFixed(2)),1),s.old_price?(e(),o("span",Y,"$"+l(s.old_price),1)):u("",!0)])]))),128))]),t("tr",null,[Z,(e(!0),o(r,null,c(a.state.compare,(s,n)=>(e(),o("td",{key:n},[t("div",{onClick:x(g=>a.cartState.add_cart_product(s),["prevent"]),class:"tp-compare-add-to-cart"},st,8,tt)]))),128))]),t("tr",null,[ot,(e(!0),o(r,null,c(a.state.compare,(s,n)=>(e(),o("td",{key:n},[t("div",at,[nt,rt,ct,lt,_t,t("strong",it,l(s.rating),1)])]))),128))]),t("tr",null,[dt,(e(!0),o(r,null,c(a.state.compare,(s,n)=>(e(),o("td",{key:n},[t("div",pt,[t("button",{onClick:g=>a.state.removeCompare(s)},ht,8,ut)])]))),128))])])])])):u("",!0)]),_:1})])])])])}const k=b(M,[["render",ft]]),bt=f({components:{Layout:F,BreadcrumbArea:H,CompareArea:k},setup(){L({title:"Compare"})}});function kt(a,i,v,C,y,$){const d=h("breadcrumb-area"),p=k,s=h("layout");return e(),A(s,{transparent:!0},{default:m(()=>[_(d,{title:"Compare",subtitle:"Compare"}),_(p)]),_:1})}const wt=b(bt,[["render",kt]]);export{wt as default};
