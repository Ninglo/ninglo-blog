(function(e){function t(t){for(var r,u,a=t[0],c=t[1],l=t[2],s=0,d=[];s<a.length;s++)u=a[s],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&d.push(o[u][0]),o[u]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},i=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var p=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("1d50")},"0197":function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},"1d50":function(e,t,n){"use strict";n.r(t);n("0312"),n("ce4f"),n("312b"),n("7aec");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("myhead"),r("editor"),r("img",{attrs:{alt:"Vue logo",src:n("0197")}}),r("div",[e._v("Hello")])],1)},i=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"head"},e._l(e.items,(function(t){return n("a",{key:t.id,attrs:{href:t.uri}},[e._v(e._s(t.id))])})),0)},a=[],c={name:"head",props:{items:function(){return[{id:1,uri:"bing.com"},{id:2,uri:"baidu.com"}]}}},l=c,p=(n("9e34"),n("a394")),s=Object(p["a"])(l,u,a,!1,null,"38ea152c",null),d=s.exports,f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"editor"}},[n("textarea",{domProps:{value:e.input},on:{input:e.update}}),n("div",{domProps:{innerHTML:e._s(e.compliedMarkdown)}})])},v=[],m=n("0e54"),b=n.n(m),h=void 0,y={name:"editor",props:{input:function(){return"# Editor"},computed:{compliedMarkdown:function(){return b()(h.input,{sanitize:!0})}},methods:{update:function(e){h.input=e.target.value}}}},g=y,_=Object(p["a"])(g,f,v,!1,null,null,null),O=_.exports,w={name:"App",components:{editor:O,myhead:d}},j=w,x=(n("e5cd"),Object(p["a"])(j,o,i,!1,null,null,null)),P=x.exports;r["a"].config.productionTip=!0,new r["a"]({marked:b.a,render:function(e){return e(P)}}).$mount("#app"),r["a"].use(b.a)},"509a":function(e,t,n){},"9e34":function(e,t,n){"use strict";var r=n("509a"),o=n.n(r);o.a},e5cd:function(e,t,n){"use strict";var r=n("f920"),o=n.n(r);o.a},f920:function(e,t,n){}});
//# sourceMappingURL=app.305a4877.js.map