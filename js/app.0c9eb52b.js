(function(t){function e(e){for(var a,r,i=e[0],c=e[1],l=e[2],u=0,p=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&p.push(s[r][0]),s[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);f&&f(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,r=1;r<n.length;r++){var c=n[r];0!==s[c]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},s={app:0},o=[];function r(t){return i.p+"js/"+({analysis:"analysis",list:"list"}[t]||t)+"."+{analysis:"32a62736",list:"a3fe8d01"}[t]+".js"}function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n=s[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,a){n=s[t]=[e,a]}));e.push(n[2]=a);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=r(t);var l=new Error;o=function(e){c.onerror=c.onload=null,clearTimeout(u);var n=s[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",l.name="ChunkLoadError",l.type=a,l.request=o,n[1](l)}s[t]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(e)},i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var f=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"197f":function(t,e,n){t.exports=n.p+"img/icon-analysis.26400281.svg"},"2bc4":function(t,e,n){t.exports=n.p+"img/icon-bell.670041fc.svg"},"3c2f":function(t,e,n){t.exports=n.p+"img/icon-list.7b919d14.svg"},"3e8e":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("e792"),n("0cdd");var a=n("2b0e"),s=n("5f5b");n("ab8b"),n("2dd8");a["default"].use(s["a"]);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vh-100 w-100 d-flex flex-row",attrs:{id:"app"}},[a("b-nav",{staticClass:"menu h-100 justify-content-center",attrs:{vertical:""}},[a("b-nav-item",{attrs:{to:"/list"}},[a("img",{staticClass:"img-fluid",attrs:{src:n("3c2f")}})]),a("b-nav-item",{attrs:{to:"/analysis"}},[a("img",{staticClass:"img-fluid",attrs:{src:n("197f")}})])],1),a("keep-alive",[a("router-view")],1)],1)},r=[],i={name:"App"},c=i,l=n("2877"),u=Object(l["a"])(c,o,r,!1,null,null,null),f=u.exports,p=n("9483");Object(p["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("d3b7"),n("3ca3"),n("ddb0");var d=n("8c4f"),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"w-100 bg-green",attrs:{id:"home"}},[a("b-container",{staticClass:"w-100 px-0"},[a("b-row",{staticClass:"vh-100 mx-0"},[a("b-col",{attrs:{cols:"12"}},[a("div",{staticClass:"text-right"},[a("p",{staticClass:"dateText"},[t._v(t._s(t._f("dateformat")(t.nowdate)))]),a("p",{staticClass:"dateText"},[t._v(t._s(t._f("timeformat")(t.nowdate)))])])]),a("b-col",{attrs:{cols:"12"}},[a("b-row",{staticClass:"text-center"},[a("b-col",{staticClass:"col-sm-6 s",attrs:{cols:"12"}},[a("div",{staticClass:"mb-0"},[a("p",{staticClass:"taskTime"},[t._v("25:00")]),a("div",{staticClass:"d-flex justify-content-center align-items-center"},[a("div",{staticClass:"px-2"},[a("img",{staticClass:"circle",attrs:{src:n("2bc4")}})]),a("div",{staticClass:"px-2"},[a("img",{staticClass:"playcircle",attrs:{src:n("7ab4")}})]),a("div",{staticClass:"px-2"},[a("img",{staticClass:"circle",attrs:{src:n("7345")}})])])])]),a("b-col",{staticClass:"col-sm-6 text-left",attrs:{cols:"12"}},[a("div",{staticClass:"pt-5 pb-2"},[a("ul",[t._l(t.list,(function(e,n){return[a("li",{staticClass:"my-3 position-relative"},[a("div",{staticClass:"d-flex align-items-center"},[a("span",{staticClass:"taskcircle mr-3"}),a("span",{staticClass:"taskText mr-auto"},[t._v(t._s(e))])]),0===n?a("div",{staticClass:"tomatoLeft2 mb-3 pl-3"},[a("span",{staticClass:"tomato opacity-1"}),a("span",{staticClass:"tomato ml-1 opacity-1"}),a("span",{staticClass:"tomato ml-1 opacity-1"}),a("span",{staticClass:"tomato ml-1"})]):t._e()])]}))],2)])])],1)],1),a("b-col",{staticClass:"mt-auto orange d-flex justify-content-center align-items-end",attrs:{cols:"12"}},[a("img",{staticClass:"img-height",attrs:{src:n("5c5f")}})])],1)],1)],1)},v=[],g=(n("99af"),function(t){return t<10?"0"+t:t}),b={name:"Home",data:function(){return{nowdate:new Date,list:["學習 Vue","練習番茄鐘","只有list新增功能","其他功能沒有寫"]}},filters:{dateformat:function(t){var e=g(t.getFullYear()),n=g(t.getMonth()+1),a=g(t.getDate());return"".concat(e,".").concat(n,".").concat(a)},timeformat:function(t){var e=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],n=g(t.getHours()),a=g(t.getMinutes()),s=parseInt(g(t.getDay()),0);return"".concat(e[s]," ").concat(n,":").concat(a)}},mounted:function(){var t=this;this.timer=setInterval((function(){t.nowdate=new Date}),1e3)},beforeDestroy:function(){this.timer&&clearInterval(this.timer)}},h=b,y=Object(l["a"])(h,m,v,!1,null,null,null),C=y.exports;a["default"].use(d["a"]);var w=[{path:"/",name:"Home",component:C},{path:"/list",name:"List",component:function(){return n.e("list").then(n.bind(null,"1a33"))}},{path:"/analysis",name:"Analysis",component:function(){return n.e("analysis").then(n.bind(null,"9aef"))}}],x=new d["a"]({routes:w}),_=x,j=n("2f62");a["default"].use(j["a"]);var k=new j["a"].Store({state:{},mutations:{},actions:{},modules:{}}),O=(n("3e8e"),n("1321")),P=n.n(O);a["default"].use(P.a),a["default"].component("apexchart",P.a),a["default"].config.productionTip=!1,new a["default"]({router:_,store:k,render:function(t){return t(f)}}).$mount("#app")},"5c5f":function(t,e,n){t.exports=n.p+"img/tomato--orange.53e02e0b.svg"},7345:function(t,e,n){t.exports=n.p+"img/icon-delete.b2ac0aa4.svg"},"7ab4":function(t,e,n){t.exports=n.p+"img/icon-play--orange.81be6328.svg"}});
//# sourceMappingURL=app.0c9eb52b.js.map