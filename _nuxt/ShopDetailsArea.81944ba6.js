import{u as x,a as k}from"./ProductModal.e529f431.js";import{d as p,_ as v,o as e,g as a,q as C,h,r as d,b as t,F as r,j as u,a as _,n as y,t as m}from"./entry.fd82bdf9.js";import{P as R}from"./ProductItem.6d92de4d.js";const S=p({methods:{handleSubmit(){console.log("submitted")}},setup(){return{}}}),D=h('<div class="row"><div class="col-xl-6 col-lg-6 col-md-6"><div class="contact-icon p-relative contacts-name"><input type="text" placeholder="Name"></div></div><div class="col-xl-6 col-lg-6 col-md-6"><div class="contact-icon p-relative contacts-name"><input type="email" placeholder="Email"></div></div><div class="col-xl-12"><div class="contact-icon p-relative contacts-email"><input type="text" placeholder="Subject"></div></div><div class="col-xl-12"><div class="contact-icon p-relative contacts-message"><textarea name="comments" id="comments" cols="30" rows="10" placeholder="Comments"></textarea></div></div><div class="col-xl-12"><button class="os-btn os-btn-black" type="submit">Post comment</button></div></div>',1),P=[D];function j(s,l,f,b,g,$){return e(),a("form",{id:"contacts-form",class:"conatct-post-form",onSubmit:l[0]||(l[0]=C((...o)=>s.handleSubmit&&s.handleSubmit(...o),["prevent"]))},P,32)}const q=v(S,[["render",j]]),L=p({components:{ReviewForm:q},props:{item:{type:Object,default:{},required:!0}},setup(){return{}}}),I={class:"product__details-review"},M={class:"postbox__comments"},N=t("div",{class:"postbox__comment-title mb-30"},[t("h3",null,"Reviews (32)")],-1),V={class:"latest-comments mb-30"},A={class:"comments-box"},B={class:"comments-avatar"},F=["src"],O={class:"comments-text"},X={class:"avatar-name"},z=t("a",{class:"reply",href:"#"},"Leave Reply",-1),E=h('<div class="user-rating"><ul><li><a href="#"><i class="fas fa-star"></i></a></li><li><a href="#"><i class="fas fa-star"></i></a></li><li><a href="#"><i class="fas fa-star"></i></a></li><li><a href="#"><i class="fas fa-star"></i></a></li><li><a href="#"><i class="fal fa-star"></i></a></li></ul></div><p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for <span>“lorem ipsum”</span> will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.</p>',2),G={class:"post-comments-form mb-100"},Y=h('<div class="post-comments-title mb-30"><h3>Your Review</h3><div class="post-rating"><span>Your Rating :</span><ul><li><a href="#"><i class="fal fa-star"></i></a></li><li><a href="#"><i class="fal fa-star"></i></a></li><li><a href="#"><i class="fal fa-star"></i></a></li><li><a href="#"><i class="fal fa-star"></i></a></li><li><a href="#"><i class="fal fa-star"></i></a></li></ul></div></div>',1);function K(s,l,f,b,g,$){const o=d("review-form");return e(),a("div",I,[t("div",M,[N,t("div",V,[t("ul",null,[(e(!0),a(r,null,u(s.item.reviews,(i,n)=>(e(),a("li",{key:n,class:y(`${i.children?"children":""}`)},[t("div",A,[t("div",B,[t("img",{src:i.img,alt:""},null,8,F)]),t("div",O,[t("div",X,[t("h5",null,m(i.name),1),t("span",null," - "+m(i.time),1),z]),E])])],2))),128))])])]),t("div",G,[Y,_(o)])])}const W=v(L,[["render",K]]),H=p({components:{ProductItem:R},props:{item:{type:Object,default:{},required:!0}},setup(s){return{state:x()}}}),J={class:"related__product pb-60"},Q={class:"container"},T=h('<div class="row"><div class="col-xl-12"><div class="section__title-wrapper text-center mb-55"><div class="section__title mb-10"><h2>Related Products</h2></div><div class="section__sub-title"><p> Mirum est notare quam littera gothica quam nunc putamus parum claram! </p></div></div></div></div>',1),U={class:"row"};function Z(s,l,f,b,g,$){const o=d("product-item");return e(),a("section",J,[t("div",Q,[T,t("div",U,[(e(!0),a(r,null,u(s.state.getRelatedProducts(s.item.category,s.item.id),(i,n)=>(e(),a("div",{key:n,class:"col-xl-3 col-lg-3 col-md-6 col-sm-6"},[_(o,{item:i},null,8,["item"])]))),128))])])])}const tt=v(H,[["render",Z]]),st=p({components:{ProductDetailsContent:k,ProductDetailsReview:W,RelatedProducts:tt},props:{item:{type:Object,default:{},required:!0}},data(){return{active_img:this.item.img}},methods:{handleActiveImg(s){this.active_img=s}},setup(){return{}}}),et={class:"shop__area pb-65"},at={class:"shop__top grey-bg-6 pt-100 pb-90"},it={class:"container"},ot={class:"row"},lt={class:"col-xl-6 col-lg-6"},nt={class:"product__modal-box d-flex"},ct={class:"product__modal-nav mr-20"},dt={class:"nav nav-tabs",id:"product-details",role:"tablist"},rt=["onClick"],_t={class:"product__nav-img w-img"},mt=["src"],ut={class:"tab-content mb-20",id:"product-detailsContent"},pt={class:"product__modal-img product__thumb w-img"},vt=["src"],ht=t("div",{class:"product__sale"},[t("span",{class:"new"},"new"),t("span",{class:"percent"},"-16%")],-1),ft={class:"col-xl-6 col-lg-6"},bt={class:"shop__bottom"},gt={class:"container"},$t={class:"row"},wt={class:"col-xl-12"},yt={class:"product__details-tab"},xt=t("div",{class:"product__details-tab-nav text-center mb-45"},[t("nav",null,[t("div",{class:"nav nav-tabs justify-content-start justify-content-sm-center",id:"pro-details",role:"tablist"},[t("a",{class:"nav-item nav-link active",id:"des-tab","data-bs-toggle":"tab",href:"#des",role:"tab","aria-controls":"des","aria-selected":"true"},"Description"),t("a",{class:"nav-item nav-link",id:"add-tab","data-bs-toggle":"tab",href:"#add",role:"tab","aria-controls":"add","aria-selected":"false"},"Additional Information"),t("a",{class:"nav-item nav-link",id:"review-tab","data-bs-toggle":"tab",href:"#review",role:"tab","aria-controls":"review","aria-selected":"false"},"Reviews (4)")])])],-1),kt={class:"tab-content",id:"pro-detailsContent"},Ct={class:"tab-pane fade show active",id:"des",role:"tabpanel"},Rt={class:"product__details-des"},St={class:"product__details-des-list mb-20"},Dt=t("div",{class:"tab-pane fade",id:"add",role:"tabpanel"},[t("div",{class:"product__details-add"},[t("ul",null,[t("li",null,[t("span",null,"Weight")]),t("li",null,[t("span",null,".25 KG")]),t("li",null,[t("span",null,"Dimention")]),t("li",null,[t("span",null,"62 × 56 × 12 cm")]),t("li",null,[t("span",null,"Size")]),t("li",null,[t("span",null,"XL, XXL, LG, SM, MD")])])])],-1),Pt={class:"tab-pane fade",id:"review",role:"tabpanel"};function jt(s,l,f,b,g,$){const o=d("product-details-content"),i=d("product-details-review"),n=d("related-products");return e(),a(r,null,[t("section",et,[t("div",at,[t("div",it,[t("div",ot,[t("div",lt,[t("div",nt,[t("div",ct,[t("nav",null,[t("div",dt,[(e(!0),a(r,null,u(s.item.related_images,(c,w)=>(e(),a("button",{key:w,class:y(`nav-item nav-link ${c===s.active_img?"active":""}`),onClick:qt=>s.handleActiveImg(c),style:{"margin-bottom":"5px"}},[t("div",_t,[t("img",{src:c,alt:"image",style:{width:"95px",height:"120px","object-fit":"cover"}},null,8,mt)])],10,rt))),128))])])]),t("div",ut,[t("div",pt,[t("img",{src:s.active_img,alt:"product_img"},null,8,vt),ht])])])]),t("div",ft,[_(o,{item:s.item,style_2:!0},null,8,["item"])])])])]),t("div",bt,[t("div",gt,[t("div",$t,[t("div",wt,[t("div",yt,[xt,t("div",kt,[t("div",Ct,[t("div",Rt,[t("p",null,m(s.item.details.details_text),1),t("div",St,[t("ul",null,[(e(!0),a(r,null,u(s.item.details.details_list,(c,w)=>(e(),a("li",{key:w},[t("span",null,m(c),1)]))),128))])]),t("p",null,m(s.item.details.details_text_2),1)])]),Dt,t("div",Pt,[_(i,{item:s.item},null,8,["item"])])])])])])])])]),_(n,{item:s.item},null,8,["item"])],64)}const Nt=v(st,[["render",jt]]);export{Nt as _};
