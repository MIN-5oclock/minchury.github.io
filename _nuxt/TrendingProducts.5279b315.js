import{u as l}from"./ProductModal.e529f431.js";import{P as c}from"./ProductItem.6d92de4d.js";import{d as _,_ as p,r as u,o,g as r,b as e,n,F as m,j as h,q as f,l as v,a as g}from"./entry.fd82bdf9.js";const y=_({components:{ProductItem:c},data(){return{perView:this.style_3?12:8}},props:{style_2:{type:Boolean,default:!1},style_3:{type:Boolean,default:!1}},methods:{handleLoadMore(){this.perView=this.perView+2}},setup(){return{trending_prd:l().products.filter(d=>d.trending)}}}),w={class:"product__area pt-60 pb-100"},b={class:"row"},V={class:"col-xl-12"},$=e("div",{class:"section__title mb-10"},[e("h2",null,"Trending Products")],-1),M=e("div",{class:"section__sub-title"},[e("p",null," Mirum est notare quam littera gothica quam nunc putamus parum claram! ")],-1),k=[$,M],B={class:"row"},C={key:0,class:"row"},L={class:"col-xl-12"},P={class:"product__load-btn text-center mt-25"};function q(t,a,d,N,T,F){const i=u("product-item");return o(),r("section",w,[e("div",{class:n(`${t.style_2?"custom-container":t.style_3?"container-fluid":"container"}`)},[e("div",b,[e("div",V,[e("div",{class:n(`section__title-wrapper text-center mb-55 ${t.style_2?"p-relative":""}`)},k,2)])]),e("div",{class:n(`product__slider ${t.style_2?"product__slider-4":""}`)},[e("div",B,[(o(!0),r(m,null,h(t.trending_prd.slice(0,t.perView),s=>(o(),r("div",{key:s.id,class:n(`${t.style_3?"col-xl-2 col-lg-3 col-md-4":"col-lg-3 col-md-4"} product__item`)},[g(i,{item:s},null,8,["item"])],2))),128))])],2),t.perView<t.trending_prd.length?(o(),r("div",C,[e("div",L,[e("div",P,[e("a",{onClick:a[0]||(a[0]=f((...s)=>t.handleLoadMore&&t.handleLoadMore(...s),["prevent"])),href:"#",class:"os-btn os-btn-3"},"Load More")])])])):v("",!0)],2)])}const I=p(y,[["render",q]]);export{I as T};
