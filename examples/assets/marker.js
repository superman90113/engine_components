import{V as c}from"./web-ifc-api-BiYij3qq.js";import{f as i,p as d,s as p,k as h,N as l}from"./index-B3b_h8A8.js";import{M as f}from"./index-Bq1KDtuM.js";import"./import-wrapper-prod-vMwJRSad.js";import{R as w}from"./renderer-with-2d-Dwkf_fcQ.js";import"./mark-B9TqPH3U.js";import"./_commonjsHelpers-Cpj98o6Y.js";const o=document.getElementById("container"),e=new i,g=e.get(d),r=g.create();r.scene=new p(e);r.renderer=new w(e,o);r.camera=new h(e);e.init();r.camera.controls.setLookAt(5,5,5,0,0,0);o.appendChild(r.renderer.three2D.domElement);const k=e.get(l);k.create(r);const n=e.get(f);n.threshold=10;for(let t=0;t<20;t++){const a=Math.random()*5,s=Math.random()*5,m=Math.random()*5;n.create(r,"🚀",new c(a,s,m))}