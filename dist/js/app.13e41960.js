(function(t){function e(e){for(var n,c,i=e[0],l=e[1],s=e[2],d=0,h=[];d<i.length;d++)c=i[d],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&h.push(r[c][0]),r[c]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(h.length)h.shift()();return a.push.apply(a,s||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],n=!0,i=1;i<o.length;i++){var l=o[i];0!==r[l]&&(n=!1)}n&&(a.splice(e--,1),t=c(c.s=o[0]))}return t}var n={},r={app:0},a=[];function c(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.m=t,c.c=n,c.d=function(t,e,o){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(o,n,function(e){return t[e]}.bind(null,n));return o},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var s=0;s<i.length;s++)e(i[s]);var u=l;a.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var n=o("85ec"),r=o.n(n);r.a},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("a026"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("img",{staticStyle:{width:"150px",height:"190px"},attrs:{alt:"Vue logo",src:o("b640")}}),n("HelloWorld",{attrs:{msg:"当哨声不再响"}})],1)},a=[],c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"hello"},[o("h1",{staticStyle:{color:"red"}},[t._v(t._s(t.msg))]),o("h3",[t._v("实时疫情数据")]),o("table",{staticStyle:{border:"1px solid silver",padding:"10px",width:"100%",height:"400px",overflow:"scroll"}},[o("tr",{staticClass:"head-tr"},t._l(t.headList,(function(e){return o("th",{key:e,staticClass:"head-th"},[t._v(t._s(e))])})),0),t._l(t.virusDdata,(function(e){return o("tr",{key:e},[o("th",{staticClass:"cyp",staticStyle:{"background-color":"chocolate"}},[t._v(t._s(e.name))]),o("th",{staticClass:"cyp",staticStyle:{"background-color":"burlywood"}},[t._v(t._s(e.province))]),o("th",[t._v(t._s(e.confirm))]),o("th",[t._v(t._s(e.heal))]),o("th",[t._v(t._s(e.dead))])])}))],2),o("h2",[t._v("热门迁入城市：")]),o("table",{staticStyle:{border:"1px solid silver",padding:"10px",width:"100%"}},[o("tr",{staticClass:"head-tr"},t._l(t.headList2,(function(e){return o("th",{key:e,staticClass:"head-th"},[t._v(t._s(e))])})),0),t._l(t.inoutData,(function(e){return o("tr",{key:e},[o("th",{staticClass:"city cyp",staticStyle:{"background-color":"chocolate"}},[t._v(t._s(e.cityName))]),o("th",{staticClass:"province cyp",staticStyle:{"background-color":"burlywood"}},[t._v(t._s(e.provinceName))]),e.value>=1?o("th",{staticStyle:{"background-color":"red",color:"white","font-weight":"bolder"}},[t._v(t._s(e.value))]):e.value>=.9?o("th",{staticStyle:{"background-color":"coral",color:"white","font-weight":"bolder"}},[t._v(t._s(e.value))]):t._e(),o("th",[t._v(t._s(e.value))])])}))],2),o("h2",[t._v("热门迁出城市：")]),o("table",{staticStyle:{border:"1px solid silver",padding:"10px",width:"100%"}},[o("tr",{staticClass:"head-tr"},t._l(t.headList3,(function(e){return o("th",{key:e,staticClass:"head-th"},[t._v(t._s(e))])})),0),t._l(t.outData,(function(e){return o("tr",{key:e},[o("th",{staticClass:"city cyp",staticStyle:{"background-color":"chocolate"}},[t._v(t._s(e.cityName))]),o("th",{staticClass:"province cyp",staticStyle:{"background-color":"burlywood"}},[t._v(t._s(e.provinceName))]),e.value>=1?o("th",{staticStyle:{"background-color":"red",color:"white","font-weight":"bolder"}},[t._v(t._s(e.value))]):e.value>=.9?o("th",{staticStyle:{"background-color":"coral",color:"white","font-weight":"bolder"}},[t._v(t._s(e.value))]):t._e(),o("th",[t._v(t._s(e.value))])])}))],2)])},i=[],l=(o("fb6a"),{data:function(){return{headList:["城市","省份","确诊","治愈","死亡"],headList2:["城市","省份","迁入人口比例(%)"],headList3:["城市","省份","迁出人口比例(%)"],inoutData:[],outData:[],virusDdata:[]}},methods:{getVirusData:function(){var t=this;this.$http({method:"post",url:"virus/in/list?size=200&sort=desc&colum=value",headers:{"Content-type":"application/x-www-form-urlencoded"},data:{},transformRequest:[function(t){var e="";for(var o in t)e+=encodeURIComponent(o)+"="+encodeURIComponent(t[o])+"&";return e.slice(0,e.length-1)}]}).then((function(e){t.inoutData=e.data.data,window.console.log(t.inoutData)})).catch((function(t){return window.console.log(t)})),this.$http({method:"post",url:"virus/out/list?size=200&sort=desc&colum=value",headers:{"Content-type":"application/x-www-form-urlencoded"},data:{},transformRequest:[function(t){var e="";for(var o in t)e+=encodeURIComponent(o)+"="+encodeURIComponent(t[o])+"&";return e.slice(0,e.length-1)}]}).then((function(e){t.outData=e.data.data})).catch((function(t){return window.console.log(t)})),this.$http({method:"post",url:"virus/data/list?size=200&sort=desc&colum=confirm",headers:{"Content-type":"application/x-www-form-urlencoded"},data:{},transformRequest:[function(t){var e="";for(var o in t)e+=encodeURIComponent(o)+"="+encodeURIComponent(t[o])+"&";return e.slice(0,e.length-1)}]}).then((function(e){t.virusDdata=e.data.data})).catch((function(t){return window.console.log(t)}))}},mounted:function(){this.getVirusData()},name:"HelloWorld",props:{msg:String}}),s=l,u=(o("8e86"),o("2877")),d=Object(u["a"])(s,c,i,!1,null,"72b48a50",null),h=d.exports,p={name:"app",components:{HelloWorld:h}},f=p,v=(o("034f"),Object(u["a"])(f,r,a,!1,null,null,null)),_=v.exports,y=o("bc3a"),b=o.n(y),g=o("313e"),m=o.n(g);b.a.defaults.baseURL="http://localhost:88/",n["a"].prototype.$http=b.a,n["a"].prototype.$echarts=m.a,n["a"].config.productionTip=!1,n["a"].use(m.a),new n["a"]({render:function(t){return t(_)}}).$mount("#app")},"85ec":function(t,e,o){},"8e86":function(t,e,o){"use strict";var n=o("d5b8"),r=o.n(n);r.a},b640:function(t,e,o){t.exports=o.p+"img/logo.29b2ebfe.jpg"},d5b8:function(t,e,o){}});
//# sourceMappingURL=app.13e41960.js.map