import{_ as r}from"./BlogDetailsArea.66d2a0f5.js";import{d as m,i as n,k as p,_,r as c,o as d,c as l,w as u,a as f}from"./entry.fd82bdf9.js";import{L as b}from"./Layout.5ee56dc6.js";import{b as a}from"./blogData.1fea4a6e.js";import"./BlogItem.c2034e48.js";import"./OffCanvas.e0a2b461.js";import"./BlogSidebar.8a0fec09.js";import"./avater-3.bb615705.js";import"./index.esm.49843ba8.js";import"./avater-2.4ba26e80.js";import"./Header.b947b8e7.js";import"./Footer.f9042b0d.js";import"./Social.297d618e.js";const g=m({mixins:[a],data(){return{item:{}}},components:{Layout:b,BlogDetailsArea:r},setup(){n({title:"Blog Details"})},created(){const t=p().params.id,o=a.data().blogData.find(e=>Number(e.id)===Number(t));this.item=o}});function x(t,o,e,h,B,D){const i=r,s=c("layout");return d(),l(s,{white_bg:!0},{default:u(()=>[f(i,{item:t.item},null,8,["item"])]),_:1})}const q=_(g,[["render",x]]);export{q as default};