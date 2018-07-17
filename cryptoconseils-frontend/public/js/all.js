
/* script modernizr */

/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-shiv-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function C(a){j.cssText=a}function D(a,b){return C(n.join(a+";")+(b||""))}function E(a,b){return typeof a===b}function F(a,b){return!!~(""+a).indexOf(b)}function G(a,b){for(var d in a){var e=a[d];if(!F(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function H(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:E(f,"function")?f.bind(d||b):f}return!1}function I(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+p.join(d+" ")+d).split(" ");return E(b,"string")||E(b,"undefined")?G(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),H(e,b,c))}function J(){e.input=function(c){for(var d=0,e=c.length;d<e;d++)u[c[d]]=c[d]in k;return u.list&&(u.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),u}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)k.setAttribute("type",f=a[d]),e=k.type!=="text",e&&(k.value=l,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&k.style.WebkitAppearance!==c?(g.appendChild(k),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(k,null).WebkitAppearance!=="textfield"&&k.offsetHeight!==0,g.removeChild(k)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=k.checkValidity&&k.checkValidity()===!1:e=k.value!=l)),t[a[d]]=!!e;return t}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d="2.8.3",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={svg:"http://www.w3.org/2000/svg"},s={},t={},u={},v=[],w=v.slice,x,y=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},z=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=E(e[d],"function"),E(e[d],"undefined")||(e[d]=c),e.removeAttribute(d))),e=null,f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),A={}.hasOwnProperty,B;!E(A,"undefined")&&!E(A.call,"undefined")?B=function(a,b){return A.call(a,b)}:B=function(a,b){return b in a&&E(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=w.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(w.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(w.call(arguments)))};return e}),s.flexbox=function(){return I("flexWrap")},s.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},s.canvastext=function(){return!!e.canvas&&!!E(b.createElement("canvas").getContext("2d").fillText,"function")},s.webgl=function(){return!!a.WebGLRenderingContext},s.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:y(["@media (",n.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},s.geolocation=function(){return"geolocation"in navigator},s.postmessage=function(){return!!a.postMessage},s.websqldatabase=function(){return!!a.openDatabase},s.indexedDB=function(){return!!I("indexedDB",a)},s.hashchange=function(){return z("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},s.history=function(){return!!a.history&&!!history.pushState},s.draganddrop=function(){var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a},s.websockets=function(){return"WebSocket"in a||"MozWebSocket"in a},s.rgba=function(){return C("background-color:rgba(150,255,150,.5)"),F(j.backgroundColor,"rgba")},s.hsla=function(){return C("background-color:hsla(120,40%,100%,.5)"),F(j.backgroundColor,"rgba")||F(j.backgroundColor,"hsla")},s.multiplebgs=function(){return C("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(j.background)},s.backgroundsize=function(){return I("backgroundSize")},s.borderimage=function(){return I("borderImage")},s.borderradius=function(){return I("borderRadius")},s.boxshadow=function(){return I("boxShadow")},s.textshadow=function(){return b.createElement("div").style.textShadow===""},s.opacity=function(){return D("opacity:.55"),/^0.55$/.test(j.opacity)},s.cssanimations=function(){return I("animationName")},s.csscolumns=function(){return I("columnCount")},s.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return C((a+"-webkit- ".split(" ").join(b+a)+n.join(c+a)).slice(0,-a.length)),F(j.backgroundImage,"gradient")},s.cssreflections=function(){return I("boxReflect")},s.csstransforms=function(){return!!I("transform")},s.csstransforms3d=function(){var a=!!I("perspective");return a&&"webkitPerspective"in g.style&&y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},s.csstransitions=function(){return I("transition")},s.fontface=function(){var a;return y('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&g.indexOf(d.split(" ")[0])===0}),a},s.generatedcontent=function(){var a;return y(["#",h,"{font:0/0 a}#",h,':after{content:"',l,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a},s.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return c},s.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(d){}return c},s.localstorage=function(){try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0}catch(a){return!1}},s.sessionstorage=function(){try{return sessionStorage.setItem(h,h),sessionStorage.removeItem(h),!0}catch(a){return!1}},s.webworkers=function(){return!!a.Worker},s.applicationcache=function(){return!!a.applicationCache},s.svg=function(){return!!b.createElementNS&&!!b.createElementNS(r.svg,"svg").createSVGRect},s.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==r.svg},s.smil=function(){return!!b.createElementNS&&/SVGAnimate/.test(m.call(b.createElementNS(r.svg,"animate")))},s.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(m.call(b.createElementNS(r.svg,"clipPath")))};for(var K in s)B(s,K)&&(x=K.toLowerCase(),e[x]=s[K](),v.push((e[x]?"":"no-")+x));return e.input||J(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)B(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},C(""),i=k=null,function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function m(){var a=s.elements;return typeof a=="string"?a.split(" "):a}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b}function o(a,c,d){c||(c=b);if(k)return c.createElement(a);d||(d=n(c));var g;return d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g}function p(a,c){a||(a=b);if(k)return a.createDocumentFragment();c=c||n(a);var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a}var c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){g=!0,k=!0}})();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b)}(this,b),e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.hasEvent=z,e.testProp=function(a){return G([a])},e.testAllProps=I,e.testStyles=y,e.prefixed=function(a,b,c){return b?I(a,b,c):I(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+v.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};













/* script jquery min */

/*! jQuery v2.2.4 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="2.2.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isPlainObject:function(a){var b;if("object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype||{},"isPrototypeOf"))return!1;for(b in a);return void 0===b||k.call(a,b)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=d.createElement("script"),b.text=a,d.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:h.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(d=e.call(arguments,2),f=function(){return a.apply(b||this,d.concat(e.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return h.call(b,a)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&f.parentNode&&(this.length=1,this[0]=f),this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?void 0!==c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?h.call(n(a),this[0]):h.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||n.uniqueSort(e),D.test(a)&&e.reverse()),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.removeEventListener("DOMContentLoaded",J),a.removeEventListener("load",J),n.ready()}n.ready.promise=function(b){return I||(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(n.ready):(d.addEventListener("DOMContentLoaded",J),a.addEventListener("load",J))),I.promise(b)},n.ready.promise();var K=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)K(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},L=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function M(){this.expando=n.expando+M.uid++}M.uid=1,M.prototype={register:function(a,b){var c=b||{};return a.nodeType?a[this.expando]=c:Object.defineProperty(a,this.expando,{value:c,writable:!0,configurable:!0}),a[this.expando]},cache:function(a){if(!L(a))return{};var b=a[this.expando];return b||(b={},L(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[b]=c;else for(d in b)e[d]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=a[this.expando];if(void 0!==f){if(void 0===b)this.register(a);else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in f?d=[b,e]:(d=e,d=d in f?[d]:d.match(G)||[])),c=d.length;while(c--)delete f[d[c]]}(void 0===b||n.isEmptyObject(f))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!n.isEmptyObject(b)}};var N=new M,O=new M,P=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Q=/[A-Z]/g;function R(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Q,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:P.test(c)?n.parseJSON(c):c;
}catch(e){}O.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return O.hasData(a)||N.hasData(a)},data:function(a,b,c){return O.access(a,b,c)},removeData:function(a,b){O.remove(a,b)},_data:function(a,b,c){return N.access(a,b,c)},_removeData:function(a,b){N.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=O.get(f),1===f.nodeType&&!N.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),R(f,d,e[d])));N.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){O.set(this,a)}):K(this,function(b){var c,d;if(f&&void 0===b){if(c=O.get(f,a)||O.get(f,a.replace(Q,"-$&").toLowerCase()),void 0!==c)return c;if(d=n.camelCase(a),c=O.get(f,d),void 0!==c)return c;if(c=R(f,d,void 0),void 0!==c)return c}else d=n.camelCase(a),this.each(function(){var c=O.get(this,d);O.set(this,d,b),a.indexOf("-")>-1&&void 0!==c&&O.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){O.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=N.get(a,b),c&&(!d||n.isArray(c)?d=N.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return N.get(a,c)||N.access(a,c,{empty:n.Callbacks("once memory").add(function(){N.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=N.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function W(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&T.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var X=/^(?:checkbox|radio)$/i,Y=/<([\w:-]+)/,Z=/^$|\/(?:java|ecma)script/i,$={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};$.optgroup=$.option,$.tbody=$.tfoot=$.colgroup=$.caption=$.thead,$.th=$.td;function _(a,b){var c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function aa(a,b){for(var c=0,d=a.length;d>c;c++)N.set(a[c],"globalEval",!b||N.get(b[c],"globalEval"))}var ba=/<|&#?\w+;/;function ca(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],o=0,p=a.length;p>o;o++)if(f=a[o],f||0===f)if("object"===n.type(f))n.merge(m,f.nodeType?[f]:f);else if(ba.test(f)){g=g||l.appendChild(b.createElement("div")),h=(Y.exec(f)||["",""])[1].toLowerCase(),i=$[h]||$._default,g.innerHTML=i[1]+n.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;n.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",o=0;while(f=m[o++])if(d&&n.inArray(f,d)>-1)e&&e.push(f);else if(j=n.contains(f.ownerDocument,f),g=_(l.appendChild(f),"script"),j&&aa(g),c){k=0;while(f=g[k++])Z.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var da=/^key/,ea=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,fa=/^([^.]*)(?:\.(.+)|)/;function ga(){return!0}function ha(){return!1}function ia(){try{return d.activeElement}catch(a){}}function ja(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ja(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=ha;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return"undefined"!=typeof n&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(G)||[""],j=b.length;while(j--)h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.hasData(a)&&N.get(a);if(r&&(i=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&N.remove(a,"handle events")}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(N.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!==this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||d,e=c.documentElement,f=c.body,a.pageX=b.clientX+(e&&e.scrollLeft||f&&f.scrollLeft||0)-(e&&e.clientLeft||f&&f.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||f&&f.scrollTop||0)-(e&&e.clientTop||f&&f.clientTop||0)),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ea.test(f)?this.mouseHooks:da.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=d),3===a.target.nodeType&&(a.target=a.target.parentNode),h.filter?h.filter(a,g):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==ia()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===ia()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ga:ha):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:ha,isPropagationStopped:ha,isImmediatePropagationStopped:ha,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ga,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ga,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ga,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),n.fn.extend({on:function(a,b,c,d){return ja(this,a,b,c,d)},one:function(a,b,c,d){return ja(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=ha),this.each(function(){n.event.remove(this,a,c,b)})}});var ka=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,la=/<script|<style|<link/i,ma=/checked\s*(?:[^=]|=\s*.checked.)/i,na=/^true\/(.*)/,oa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function pa(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function qa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function ra(a){var b=na.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function sa(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(N.hasData(a)&&(f=N.access(a),g=N.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}O.hasData(a)&&(h=O.access(a),i=n.extend({},h),O.set(b,i))}}function ta(a,b){var c=b.nodeName.toLowerCase();"input"===c&&X.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function ua(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&ma.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),ua(f,b,c,d)});if(o&&(e=ca(b,a[0].ownerDocument,!1,a,d),g=e.firstChild,1===e.childNodes.length&&(e=g),g||d)){for(h=n.map(_(e,"script"),qa),i=h.length;o>m;m++)j=e,m!==p&&(j=n.clone(j,!0,!0),i&&n.merge(h,_(j,"script"))),c.call(a[m],j,m);if(i)for(k=h[h.length-1].ownerDocument,n.map(h,ra),m=0;i>m;m++)j=h[m],Z.test(j.type||"")&&!N.access(j,"globalEval")&&n.contains(k,j)&&(j.src?n._evalUrl&&n._evalUrl(j.src):n.globalEval(j.textContent.replace(oa,"")))}return a}function va(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(_(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&aa(_(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(ka,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=_(h),f=_(a),d=0,e=f.length;e>d;d++)ta(f[d],g[d]);if(b)if(c)for(f=f||_(a),g=g||_(h),d=0,e=f.length;e>d;d++)sa(f[d],g[d]);else sa(a,h);return g=_(h,"script"),g.length>0&&aa(g,!i&&_(a,"script")),h},cleanData:function(a){for(var b,c,d,e=n.event.special,f=0;void 0!==(c=a[f]);f++)if(L(c)){if(b=c[N.expando]){if(b.events)for(d in b.events)e[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);c[N.expando]=void 0}c[O.expando]&&(c[O.expando]=void 0)}}}),n.fn.extend({domManip:ua,detach:function(a){return va(this,a,!0)},remove:function(a){return va(this,a)},text:function(a){return K(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.appendChild(a)}})},prepend:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(_(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return K(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!la.test(a)&&!$[(Y.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(_(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return ua(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(_(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),f=e.length-1,h=0;f>=h;h++)c=h===f?this:this.clone(!0),n(e[h])[b](c),g.apply(d,c.get());return this.pushStack(d)}});var wa,xa={HTML:"block",BODY:"block"};function ya(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function za(a){var b=d,c=xa[a];return c||(c=ya(a,b),"none"!==c&&c||(wa=(wa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=wa[0].contentDocument,b.write(),b.close(),c=ya(a,b),wa.detach()),xa[a]=c),c}var Aa=/^margin/,Ba=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ca=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Ea=d.documentElement;!function(){var b,c,e,f,g=d.createElement("div"),h=d.createElement("div");if(h.style){h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,g.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",g.appendChild(h);function i(){h.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",h.innerHTML="",Ea.appendChild(g);var d=a.getComputedStyle(h);b="1%"!==d.top,f="2px"===d.marginLeft,c="4px"===d.width,h.style.marginRight="50%",e="4px"===d.marginRight,Ea.removeChild(g)}n.extend(l,{pixelPosition:function(){return i(),b},boxSizingReliable:function(){return null==c&&i(),c},pixelMarginRight:function(){return null==c&&i(),e},reliableMarginLeft:function(){return null==c&&i(),f},reliableMarginRight:function(){var b,c=h.appendChild(d.createElement("div"));return c.style.cssText=h.style.cssText="-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",h.style.width="1px",Ea.appendChild(g),b=!parseFloat(a.getComputedStyle(c).marginRight),Ea.removeChild(g),h.removeChild(c),b}})}}();function Fa(a,b,c){var d,e,f,g,h=a.style;return c=c||Ca(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Ba.test(g)&&Aa.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0!==g?g+"":g}function Ga(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Ha=/^(none|table(?!-c[ea]).+)/,Ia={position:"absolute",visibility:"hidden",display:"block"},Ja={letterSpacing:"0",fontWeight:"400"},Ka=["Webkit","O","Moz","ms"],La=d.createElement("div").style;function Ma(a){if(a in La)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ka.length;while(c--)if(a=Ka[c]+b,a in La)return a}function Na(a,b,c){var d=T.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Oa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function Pa(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ca(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Fa(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ba.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Oa(a,b,c||(g?"border":"content"),d,f)+"px"}function Qa(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=N.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=N.access(d,"olddisplay",za(d.nodeName)))):(e=V(d),"none"===c&&e||N.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Fa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=T.exec(c))&&e[1]&&(c=W(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Fa(a,b,d)),"normal"===e&&b in Ja&&(e=Ja[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Ha.test(n.css(a,"display"))&&0===a.offsetWidth?Da(a,Ia,function(){return Pa(a,b,d)}):Pa(a,b,d):void 0},set:function(a,c,d){var e,f=d&&Ca(a),g=d&&Oa(a,b,d,"border-box"===n.css(a,"boxSizing",!1,f),f);return g&&(e=T.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=n.css(a,b)),Na(a,c,g)}}}),n.cssHooks.marginLeft=Ga(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Fa(a,"marginLeft"))||a.getBoundingClientRect().left-Da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px":void 0}),n.cssHooks.marginRight=Ga(l.reliableMarginRight,function(a,b){return b?Da(a,{display:"inline-block"},Fa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Aa.test(a)||(n.cssHooks[a+b].set=Na)}),n.fn.extend({css:function(a,b){return K(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ca(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Qa(this,!0)},hide:function(){return Qa(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function Ra(a,b,c,d,e){return new Ra.prototype.init(a,b,c,d,e)}n.Tween=Ra,Ra.prototype={constructor:Ra,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ra.propHooks[this.prop];return a&&a.get?a.get(this):Ra.propHooks._default.get(this)},run:function(a){var b,c=Ra.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ra.propHooks._default.set(this),this}},Ra.prototype.init.prototype=Ra.prototype,Ra.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},Ra.propHooks.scrollTop=Ra.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=Ra.prototype.init,n.fx.step={};var Sa,Ta,Ua=/^(?:toggle|show|hide)$/,Va=/queueHooks$/;function Wa(){return a.setTimeout(function(){Sa=void 0}),Sa=n.now()}function Xa(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=U[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ya(a,b,c){for(var d,e=(_a.tweeners[b]||[]).concat(_a.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Za(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&V(a),q=N.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?N.get(a,"olddisplay")||za(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Ua.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?za(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=N.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;N.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ya(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function $a(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function _a(a,b,c){var d,e,f=0,g=_a.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Sa||Wa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:Sa||Wa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for($a(k,j.opts.specialEasing);g>f;f++)if(d=_a.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,Ya,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(_a,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return W(c.elem,a,T.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],_a.tweeners[c]=_a.tweeners[c]||[],_a.tweeners[c].unshift(b)},prefilters:[Za],prefilter:function(a,b){b?_a.prefilters.unshift(a):_a.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=_a(this,n.extend({},a),f);(e||N.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=N.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Va.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=N.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Xa(b,!0),a,d,e)}}),n.each({slideDown:Xa("show"),slideUp:Xa("hide"),slideToggle:Xa("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Sa=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Sa=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ta||(Ta=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(Ta),Ta=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",l.checkOn=""!==a.value,l.optSelected=c.selected,b.disabled=!0,l.optDisabled=!c.disabled,a=d.createElement("input"),a.value="t",a.type="radio",l.radioValue="t"===a.value}();var ab,bb=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return K(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ab:void 0)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)}}),ab={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=bb[b]||n.find.attr;bb[b]=function(a,b,d){var e,f;return d||(f=bb[b],bb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,bb[b]=f),e}});var cb=/^(?:input|select|textarea|button)$/i,db=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return K(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),
void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):cb.test(a.nodeName)||db.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var eb=/[\t\r\n\f]/g;function fb(a){return a.getAttribute&&a.getAttribute("class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,fb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,fb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,fb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=fb(this),b&&N.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":N.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+fb(c)+" ").replace(eb," ").indexOf(b)>-1)return!0;return!1}});var gb=/\r/g,hb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(gb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(hb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(n.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var ib=/^(?:focusinfocus|focusoutblur)$/;n.extend(n.event,{trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!ib.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),l=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},f||!o.trigger||o.trigger.apply(e,c)!==!1)){if(!f&&!o.noBubble&&!n.isWindow(e)){for(j=o.delegateType||q,ib.test(j+q)||(h=h.parentNode);h;h=h.parentNode)p.push(h),i=h;i===(e.ownerDocument||d)&&p.push(i.defaultView||i.parentWindow||a)}g=0;while((h=p[g++])&&!b.isPropagationStopped())b.type=g>1?j:o.bindType||q,m=(N.get(h,"events")||{})[b.type]&&N.get(h,"handle"),m&&m.apply(h,c),m=l&&h[l],m&&m.apply&&L(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=q,f||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!L(e)||l&&n.isFunction(e[q])&&!n.isWindow(e)&&(i=e[l],i&&(e[l]=null),n.event.triggered=q,e[q](),n.event.triggered=void 0,i&&(e[l]=i)),b.result}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b)}}),n.fn.extend({trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),l.focusin="onfocusin"in a,l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=N.access(d,b);e||d.addEventListener(a,c,!0),N.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=N.access(d,b)-1;e?N.access(d,b,e):(d.removeEventListener(a,c,!0),N.remove(d,b))}}});var jb=a.location,kb=n.now(),lb=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var mb=/#.*$/,nb=/([?&])_=[^&]*/,ob=/^(.*?):[ \t]*([^\r\n]*)$/gm,pb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,qb=/^(?:GET|HEAD)$/,rb=/^\/\//,sb={},tb={},ub="*/".concat("*"),vb=d.createElement("a");vb.href=jb.href;function wb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function xb(a,b,c,d){var e={},f=a===tb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function yb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function zb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Ab(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:jb.href,type:"GET",isLocal:pb.test(jb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":ub,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?yb(yb(a,n.ajaxSettings),b):yb(n.ajaxSettings,a)},ajaxPrefilter:wb(sb),ajaxTransport:wb(tb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m=n.ajaxSetup({},c),o=m.context||m,p=m.context&&(o.nodeType||o.jquery)?n(o):n.event,q=n.Deferred(),r=n.Callbacks("once memory"),s=m.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,getResponseHeader:function(a){var b;if(2===v){if(!h){h={};while(b=ob.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===v?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return v||(a=u[c]=u[c]||a,t[a]=b),this},overrideMimeType:function(a){return v||(m.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>v)for(b in a)s[b]=[s[b],a[b]];else x.always(a[x.status]);return this},abort:function(a){var b=a||w;return e&&e.abort(b),z(0,b),this}};if(q.promise(x).complete=r.add,x.success=x.done,x.error=x.fail,m.url=((b||m.url||jb.href)+"").replace(mb,"").replace(rb,jb.protocol+"//"),m.type=c.method||c.type||m.method||m.type,m.dataTypes=n.trim(m.dataType||"*").toLowerCase().match(G)||[""],null==m.crossDomain){j=d.createElement("a");try{j.href=m.url,j.href=j.href,m.crossDomain=vb.protocol+"//"+vb.host!=j.protocol+"//"+j.host}catch(y){m.crossDomain=!0}}if(m.data&&m.processData&&"string"!=typeof m.data&&(m.data=n.param(m.data,m.traditional)),xb(sb,m,c,x),2===v)return x;k=n.event&&m.global,k&&0===n.active++&&n.event.trigger("ajaxStart"),m.type=m.type.toUpperCase(),m.hasContent=!qb.test(m.type),f=m.url,m.hasContent||(m.data&&(f=m.url+=(lb.test(f)?"&":"?")+m.data,delete m.data),m.cache===!1&&(m.url=nb.test(f)?f.replace(nb,"$1_="+kb++):f+(lb.test(f)?"&":"?")+"_="+kb++)),m.ifModified&&(n.lastModified[f]&&x.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&x.setRequestHeader("If-None-Match",n.etag[f])),(m.data&&m.hasContent&&m.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",m.contentType),x.setRequestHeader("Accept",m.dataTypes[0]&&m.accepts[m.dataTypes[0]]?m.accepts[m.dataTypes[0]]+("*"!==m.dataTypes[0]?", "+ub+"; q=0.01":""):m.accepts["*"]);for(l in m.headers)x.setRequestHeader(l,m.headers[l]);if(m.beforeSend&&(m.beforeSend.call(o,x,m)===!1||2===v))return x.abort();w="abort";for(l in{success:1,error:1,complete:1})x[l](m[l]);if(e=xb(tb,m,c,x)){if(x.readyState=1,k&&p.trigger("ajaxSend",[x,m]),2===v)return x;m.async&&m.timeout>0&&(i=a.setTimeout(function(){x.abort("timeout")},m.timeout));try{v=1,e.send(t,z)}catch(y){if(!(2>v))throw y;z(-1,y)}}else z(-1,"No Transport");function z(b,c,d,h){var j,l,t,u,w,y=c;2!==v&&(v=2,i&&a.clearTimeout(i),e=void 0,g=h||"",x.readyState=b>0?4:0,j=b>=200&&300>b||304===b,d&&(u=zb(m,x,d)),u=Ab(m,u,x,j),j?(m.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(n.lastModified[f]=w),w=x.getResponseHeader("etag"),w&&(n.etag[f]=w)),204===b||"HEAD"===m.type?y="nocontent":304===b?y="notmodified":(y=u.state,l=u.data,t=u.error,j=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),x.status=b,x.statusText=(c||y)+"",j?q.resolveWith(o,[l,y,x]):q.rejectWith(o,[x,y,t]),x.statusCode(s),s=void 0,k&&p.trigger(j?"ajaxSuccess":"ajaxError",[x,m,j?l:t]),r.fireWith(o,[x,y]),k&&(p.trigger("ajaxComplete",[x,m]),--n.active||n.event.trigger("ajaxStop")))}return x},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return!n.expr.filters.visible(a)},n.expr.filters.visible=function(a){return a.offsetWidth>0||a.offsetHeight>0||a.getClientRects().length>0};var Bb=/%20/g,Cb=/\[\]$/,Db=/\r?\n/g,Eb=/^(?:submit|button|image|reset|file)$/i,Fb=/^(?:input|select|textarea|keygen)/i;function Gb(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Cb.test(a)?d(a,e):Gb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Gb(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Gb(c,a[c],b,e);return d.join("&").replace(Bb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Fb.test(this.nodeName)&&!Eb.test(a)&&(this.checked||!X.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Db,"\r\n")}}):{name:b.name,value:c.replace(Db,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Hb={0:200,1223:204},Ib=n.ajaxSettings.xhr();l.cors=!!Ib&&"withCredentials"in Ib,l.ajax=Ib=!!Ib,n.ajaxTransport(function(b){var c,d;return l.cors||Ib&&!b.crossDomain?{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Hb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=n("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Jb=[],Kb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Jb.pop()||n.expando+"_"+kb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Kb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Kb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Kb,"$1"+e):b.jsonp!==!1&&(b.url+=(lb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Jb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ca([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var Lb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Lb)return Lb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function Mb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(e=d.getBoundingClientRect(),c=Mb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ea})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;n.fn[a]=function(d){return K(this,function(a,d,e){var f=Mb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ga(l.pixelPosition,function(a,c){return c?(c=Fa(a,b),Ba.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return K(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)},size:function(){return this.length}}),n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Nb=a.jQuery,Ob=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Ob),b&&a.jQuery===n&&(a.jQuery=Nb),n},b||(a.jQuery=a.$=n),n});




















/* script bootstrap */


/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1||b[0]>3)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){if(a(b.target).is(this))return b.handleObj.handler.apply(this,arguments)}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.7",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a("#"===f?[]:f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.7",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c).prop(c,!0)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c).prop(c,!1))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target).closest(".btn");b.call(d,"toggle"),a(c.target).is('input[type="radio"], input[type="checkbox"]')||(c.preventDefault(),d.is("input,button")?d.trigger("focus"):d.find("input:visible,button:visible").first().trigger("focus"))}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.7",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));if(!(a>this.$items.length-1||a<0))return this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){if(!this.sliding)return this.slide("next")},c.prototype.prev=function(){if(!this.sliding)return this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.7",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",f)))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.7",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger(a.Event("shown.bs.dropdown",h))}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.7",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){document===a.target||this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.7",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);if(c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),!c.isInStateTrue())return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element&&e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);if(this.$element.trigger(g),!g.isDefaultPrevented())return f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=window.SVGElement&&c instanceof window.SVGElement,g=d?{top:0,left:0}:f?null:b.offset(),h={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},i=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,h,i,g)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null,a.$element=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.7",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.7",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){
this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.7",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.7",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return e<c&&"top";if("bottom"==this.affixed)return null!=c?!(e+this.unpin<=f.top)&&"bottom":!(e+g<=a-d)&&"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&e<=c?"top":null!=d&&i+j>=a-d&&"bottom"},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
































/* script select2 */


/**
 * @module       Select2
 * @see          https://github.com/select2/select2/blob/master/
 * @license      MIT
 * @version      4.0.5
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof module&&module.exports?module.exports=function(b,c){return void 0===c&&(c="undefined"!=typeof window?require("jquery"):require("jquery")(b)),a(c),c}:a(jQuery)}(function(a){var b=function(){if(a&&a.fn&&a.fn.select2&&a.fn.select2.amd)var b=a.fn.select2.amd;var b;return function(){if(!b||!b.requirejs){b?c=b:b={};var a,c,d;!function(b){function e(a,b){return v.call(a,b)}function f(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o=b&&b.split("/"),p=t.map,q=p&&p["*"]||{};if(a){for(a=a.split("/"),g=a.length-1,t.nodeIdCompat&&x.test(a[g])&&(a[g]=a[g].replace(x,"")),"."===a[0].charAt(0)&&o&&(n=o.slice(0,o.length-1),a=n.concat(a)),k=0;k<a.length;k++)if("."===(m=a[k]))a.splice(k,1),k-=1;else if(".."===m){if(0===k||1===k&&".."===a[2]||".."===a[k-1])continue;k>0&&(a.splice(k-1,2),k-=2)}a=a.join("/")}if((o||q)&&p){for(c=a.split("/"),k=c.length;k>0;k-=1){if(d=c.slice(0,k).join("/"),o)for(l=o.length;l>0;l-=1)if((e=p[o.slice(0,l).join("/")])&&(e=e[d])){f=e,h=k;break}if(f)break;!i&&q&&q[d]&&(i=q[d],j=k)}!f&&i&&(f=i,h=j),f&&(c.splice(0,h,f),a=c.join("/"))}return a}function g(a,c){return function(){var d=w.call(arguments,0);return"string"!=typeof d[0]&&1===d.length&&d.push(null),o.apply(b,d.concat([a,c]))}}function h(a){return function(b){return f(b,a)}}function i(a){return function(b){r[a]=b}}function j(a){if(e(s,a)){var c=s[a];delete s[a],u[a]=!0,n.apply(b,c)}if(!e(r,a)&&!e(u,a))throw new Error("No "+a);return r[a]}function k(a){var b,c=a?a.indexOf("!"):-1;return c>-1&&(b=a.substring(0,c),a=a.substring(c+1,a.length)),[b,a]}function l(a){return a?k(a):[]}function m(a){return function(){return t&&t.config&&t.config[a]||{}}}var n,o,p,q,r={},s={},t={},u={},v=Object.prototype.hasOwnProperty,w=[].slice,x=/\.js$/;p=function(a,b){var c,d=k(a),e=d[0],g=b[1];return a=d[1],e&&(e=f(e,g),c=j(e)),e?a=c&&c.normalize?c.normalize(a,h(g)):f(a,g):(a=f(a,g),d=k(a),e=d[0],a=d[1],e&&(c=j(e))),{f:e?e+"!"+a:a,n:a,pr:e,p:c}},q={require:function(a){return g(a)},exports:function(a){var b=r[a];return void 0!==b?b:r[a]={}},module:function(a){return{id:a,uri:"",exports:r[a],config:m(a)}}},n=function(a,c,d,f){var h,k,m,n,o,t,v,w=[],x=typeof d;if(f=f||a,t=l(f),"undefined"===x||"function"===x){for(c=!c.length&&d.length?["require","exports","module"]:c,o=0;o<c.length;o+=1)if(n=p(c[o],t),"require"===(k=n.f))w[o]=q.require(a);else if("exports"===k)w[o]=q.exports(a),v=!0;else if("module"===k)h=w[o]=q.module(a);else if(e(r,k)||e(s,k)||e(u,k))w[o]=j(k);else{if(!n.p)throw new Error(a+" missing "+k);n.p.load(n.n,g(f,!0),i(k),{}),w[o]=r[k]}m=d?d.apply(r[a],w):void 0,a&&(h&&h.exports!==b&&h.exports!==r[a]?r[a]=h.exports:m===b&&v||(r[a]=m))}else a&&(r[a]=d)},a=c=o=function(a,c,d,e,f){if("string"==typeof a)return q[a]?q[a](c):j(p(a,l(c)).f);if(!a.splice){if(t=a,t.deps&&o(t.deps,t.callback),!c)return;c.splice?(a=c,c=d,d=null):a=b}return c=c||function(){},"function"==typeof d&&(d=e,e=f),e?n(b,a,c,d):setTimeout(function(){n(b,a,c,d)},4),o},o.config=function(a){return o(a)},a._defined=r,d=function(a,b,c){if("string"!=typeof a)throw new Error("See almond README: incorrect module build, no module name");b.splice||(c=b,b=[]),e(r,a)||e(s,a)||(s[a]=[a,b,c])},d.amd={jQuery:!0}}(),b.requirejs=a,b.require=c,b.define=d}}(),b.define("almond",function(){}),b.define("jquery",[],function(){var b=a||$;return null==b&&console&&console.error&&console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."),b}),b.define("select2/utils",["jquery"],function(a){function b(a){var b=a.prototype,c=[];for(var d in b){"function"==typeof b[d]&&("constructor"!==d&&c.push(d))}return c}var c={};c.Extend=function(a,b){function c(){this.constructor=a}var d={}.hasOwnProperty;for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},c.Decorate=function(a,c){function d(){var b=Array.prototype.unshift,d=c.prototype.constructor.length,e=a.prototype.constructor;d>0&&(b.call(arguments,a.prototype.constructor),e=c.prototype.constructor),e.apply(this,arguments)}function e(){this.constructor=d}var f=b(c),g=b(a);c.displayName=a.displayName,d.prototype=new e;for(var h=0;h<g.length;h++){var i=g[h];d.prototype[i]=a.prototype[i]}for(var j=(function(a){var b=function(){};a in d.prototype&&(b=d.prototype[a]);var e=c.prototype[a];return function(){return Array.prototype.unshift.call(arguments,b),e.apply(this,arguments)}}),k=0;k<f.length;k++){var l=f[k];d.prototype[l]=j(l)}return d};var d=function(){this.listeners={}};return d.prototype.on=function(a,b){this.listeners=this.listeners||{},a in this.listeners?this.listeners[a].push(b):this.listeners[a]=[b]},d.prototype.trigger=function(a){var b=Array.prototype.slice,c=b.call(arguments,1);this.listeners=this.listeners||{},null==c&&(c=[]),0===c.length&&c.push({}),c[0]._type=a,a in this.listeners&&this.invoke(this.listeners[a],b.call(arguments,1)),"*"in this.listeners&&this.invoke(this.listeners["*"],arguments)},d.prototype.invoke=function(a,b){for(var c=0,d=a.length;c<d;c++)a[c].apply(this,b)},c.Observable=d,c.generateChars=function(a){for(var b="",c=0;c<a;c++){b+=Math.floor(36*Math.random()).toString(36)}return b},c.bind=function(a,b){return function(){a.apply(b,arguments)}},c._convertData=function(a){for(var b in a){var c=b.split("-"),d=a;if(1!==c.length){for(var e=0;e<c.length;e++){var f=c[e];f=f.substring(0,1).toLowerCase()+f.substring(1),f in d||(d[f]={}),e==c.length-1&&(d[f]=a[b]),d=d[f]}delete a[b]}}return a},c.hasScroll=function(b,c){var d=a(c),e=c.style.overflowX,f=c.style.overflowY;return(e!==f||"hidden"!==f&&"visible"!==f)&&("scroll"===e||"scroll"===f||(d.innerHeight()<c.scrollHeight||d.innerWidth()<c.scrollWidth))},c.escapeMarkup=function(a){var b={"\\":"&#92;","&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#47;"};return"string"!=typeof a?a:String(a).replace(/[&<>"'\/\\]/g,function(a){return b[a]})},c.appendMany=function(b,c){if("1.7"===a.fn.jquery.substr(0,3)){var d=a();a.map(c,function(a){d=d.add(a)}),c=d}b.append(c)},c}),b.define("select2/results",["jquery","./utils"],function(a,b){function c(a,b,d){this.$element=a,this.data=d,this.options=b,c.__super__.constructor.call(this)}return b.Extend(c,b.Observable),c.prototype.render=function(){var b=a('<ul class="select2-results__options" role="tree"></ul>');return this.options.get("multiple")&&b.attr("aria-multiselectable","true"),this.$results=b,b},c.prototype.clear=function(){this.$results.empty()},c.prototype.displayMessage=function(b){var c=this.options.get("escapeMarkup");this.clear(),this.hideLoading();var d=a('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),e=this.options.get("translations").get(b.message);d.append(c(e(b.args))),d[0].className+=" select2-results__message",this.$results.append(d)},c.prototype.hideMessages=function(){this.$results.find(".select2-results__message").remove()},c.prototype.append=function(a){this.hideLoading();var b=[];if(null==a.results||0===a.results.length)return void(0===this.$results.children().length&&this.trigger("results:message",{message:"noResults"}));a.results=this.sort(a.results);for(var c=0;c<a.results.length;c++){var d=a.results[c],e=this.option(d);b.push(e)}this.$results.append(b)},c.prototype.position=function(a,b){b.find(".select2-results").append(a)},c.prototype.sort=function(a){return this.options.get("sorter")(a)},c.prototype.highlightFirstItem=function(){var a=this.$results.find(".select2-results__option[aria-selected]"),b=a.filter("[aria-selected=true]");b.length>0?b.first().trigger("mouseenter"):a.first().trigger("mouseenter"),this.ensureHighlightVisible()},c.prototype.setClasses=function(){var b=this;this.data.current(function(c){var d=a.map(c,function(a){return a.id.toString()});b.$results.find(".select2-results__option[aria-selected]").each(function(){var b=a(this),c=a.data(this,"data"),e=""+c.id;null!=c.element&&c.element.selected||null==c.element&&a.inArray(e,d)>-1?b.attr("aria-selected","true"):b.attr("aria-selected","false")})})},c.prototype.showLoading=function(a){this.hideLoading();var b=this.options.get("translations").get("searching"),c={disabled:!0,loading:!0,text:b(a)},d=this.option(c);d.className+=" loading-results",this.$results.prepend(d)},c.prototype.hideLoading=function(){this.$results.find(".loading-results").remove()},c.prototype.option=function(b){var c=document.createElement("li");c.className="select2-results__option";var d={role:"treeitem","aria-selected":"false"};b.disabled&&(delete d["aria-selected"],d["aria-disabled"]="true"),null==b.id&&delete d["aria-selected"],null!=b._resultId&&(c.id=b._resultId),b.title&&(c.title=b.title),b.children&&(d.role="group",d["aria-label"]=b.text,delete d["aria-selected"]);for(var e in d){var f=d[e];c.setAttribute(e,f)}if(b.children){var g=a(c),h=document.createElement("strong");h.className="select2-results__group";a(h);this.template(b,h);for(var i=[],j=0;j<b.children.length;j++){var k=b.children[j],l=this.option(k);i.push(l)}var m=a("<ul></ul>",{class:"select2-results__options select2-results__options--nested"});m.append(i),g.append(h),g.append(m)}else this.template(b,c);return a.data(c,"data",b),c},c.prototype.bind=function(b,c){var d=this,e=b.id+"-results";this.$results.attr("id",e),b.on("results:all",function(a){d.clear(),d.append(a.data),b.isOpen()&&(d.setClasses(),d.highlightFirstItem())}),b.on("results:append",function(a){d.append(a.data),b.isOpen()&&d.setClasses()}),b.on("query",function(a){d.hideMessages(),d.showLoading(a)}),b.on("select",function(){b.isOpen()&&(d.setClasses(),d.highlightFirstItem())}),b.on("unselect",function(){b.isOpen()&&(d.setClasses(),d.highlightFirstItem())}),b.on("open",function(){d.$results.attr("aria-expanded","true"),d.$results.attr("aria-hidden","false"),d.setClasses(),d.ensureHighlightVisible()}),b.on("close",function(){d.$results.attr("aria-expanded","false"),d.$results.attr("aria-hidden","true"),d.$results.removeAttr("aria-activedescendant")}),b.on("results:toggle",function(){var a=d.getHighlightedResults();0!==a.length&&a.trigger("mouseup")}),b.on("results:select",function(){var a=d.getHighlightedResults();if(0!==a.length){var b=a.data("data");"true"==a.attr("aria-selected")?d.trigger("close",{}):d.trigger("select",{data:b})}}),b.on("results:previous",function(){var a=d.getHighlightedResults(),b=d.$results.find("[aria-selected]"),c=b.index(a);if(0!==c){var e=c-1;0===a.length&&(e=0);var f=b.eq(e);f.trigger("mouseenter");var g=d.$results.offset().top,h=f.offset().top,i=d.$results.scrollTop()+(h-g);0===e?d.$results.scrollTop(0):h-g<0&&d.$results.scrollTop(i)}}),b.on("results:next",function(){var a=d.getHighlightedResults(),b=d.$results.find("[aria-selected]"),c=b.index(a),e=c+1;if(!(e>=b.length)){var f=b.eq(e);f.trigger("mouseenter");var g=d.$results.offset().top+d.$results.outerHeight(!1),h=f.offset().top+f.outerHeight(!1),i=d.$results.scrollTop()+h-g;0===e?d.$results.scrollTop(0):h>g&&d.$results.scrollTop(i)}}),b.on("results:focus",function(a){a.element.addClass("select2-results__option--highlighted")}),b.on("results:message",function(a){d.displayMessage(a)}),a.fn.mousewheel&&this.$results.on("mousewheel",function(a){var b=d.$results.scrollTop(),c=d.$results.get(0).scrollHeight-b+a.deltaY,e=a.deltaY>0&&b-a.deltaY<=0,f=a.deltaY<0&&c<=d.$results.height();e?(d.$results.scrollTop(0),a.preventDefault(),a.stopPropagation()):f&&(d.$results.scrollTop(d.$results.get(0).scrollHeight-d.$results.height()),a.preventDefault(),a.stopPropagation())}),this.$results.on("mouseup",".select2-results__option[aria-selected]",function(b){var c=a(this),e=c.data("data");if("true"===c.attr("aria-selected"))return void(d.options.get("multiple")?d.trigger("unselect",{originalEvent:b,data:e}):d.trigger("close",{}));d.trigger("select",{originalEvent:b,data:e})}),this.$results.on("mouseenter",".select2-results__option[aria-selected]",function(b){var c=a(this).data("data");d.getHighlightedResults().removeClass("select2-results__option--highlighted"),d.trigger("results:focus",{data:c,element:a(this)})})},c.prototype.getHighlightedResults=function(){return this.$results.find(".select2-results__option--highlighted")},c.prototype.destroy=function(){this.$results.remove()},c.prototype.ensureHighlightVisible=function(){var a=this.getHighlightedResults();if(0!==a.length){var b=this.$results.find("[aria-selected]"),c=b.index(a),d=this.$results.offset().top,e=a.offset().top,f=this.$results.scrollTop()+(e-d),g=e-d;f-=2*a.outerHeight(!1),c<=2?this.$results.scrollTop(0):(g>this.$results.outerHeight()||g<0)&&this.$results.scrollTop(f)}},c.prototype.template=function(b,c){var d=this.options.get("templateResult"),e=this.options.get("escapeMarkup"),f=d(b,c);null==f?c.style.display="none":"string"==typeof f?c.innerHTML=e(f):a(c).append(f)},c}),b.define("select2/keys",[],function(){return{BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46}}),b.define("select2/selection/base",["jquery","../utils","../keys"],function(a,b,c){function d(a,b){this.$element=a,this.options=b,d.__super__.constructor.call(this)}return b.Extend(d,b.Observable),d.prototype.render=function(){var b=a('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');return this._tabindex=0,null!=this.$element.data("old-tabindex")?this._tabindex=this.$element.data("old-tabindex"):null!=this.$element.attr("tabindex")&&(this._tabindex=this.$element.attr("tabindex")),b.attr("title",this.$element.attr("title")),b.attr("tabindex",this._tabindex),this.$selection=b,b},d.prototype.bind=function(a,b){var d=this,e=(a.id,a.id+"-results");this.container=a,this.$selection.on("focus",function(a){d.trigger("focus",a)}),this.$selection.on("blur",function(a){d._handleBlur(a)}),this.$selection.on("keydown",function(a){d.trigger("keypress",a),a.which===c.SPACE&&a.preventDefault()}),a.on("results:focus",function(a){d.$selection.attr("aria-activedescendant",a.data._resultId)}),a.on("selection:update",function(a){d.update(a.data)}),a.on("open",function(){d.$selection.attr("aria-expanded","true"),d.$selection.attr("aria-owns",e),d._attachCloseHandler(a)}),a.on("close",function(){d.$selection.attr("aria-expanded","false"),d.$selection.removeAttr("aria-activedescendant"),d.$selection.removeAttr("aria-owns"),d.$selection.focus(),d._detachCloseHandler(a)}),a.on("enable",function(){d.$selection.attr("tabindex",d._tabindex)}),a.on("disable",function(){d.$selection.attr("tabindex","-1")})},d.prototype._handleBlur=function(b){var c=this;window.setTimeout(function(){document.activeElement==c.$selection[0]||a.contains(c.$selection[0],document.activeElement)||c.trigger("blur",b)},1)},d.prototype._attachCloseHandler=function(b){a(document.body).on("mousedown.select2."+b.id,function(b){var c=a(b.target),d=c.closest(".select2");a(".select2.select2-container--open").each(function(){var b=a(this);this!=d[0]&&b.data("element").select2("close")})})},d.prototype._detachCloseHandler=function(b){a(document.body).off("mousedown.select2."+b.id)},d.prototype.position=function(a,b){b.find(".selection").append(a)},d.prototype.destroy=function(){this._detachCloseHandler(this.container)},d.prototype.update=function(a){throw new Error("The `update` method must be defined in child classes.")},d}),b.define("select2/selection/single",["jquery","./base","../utils","../keys"],function(a,b,c,d){function e(){e.__super__.constructor.apply(this,arguments)}return c.Extend(e,b),e.prototype.render=function(){var a=e.__super__.render.call(this);return a.addClass("select2-selection--single"),a.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'),a},e.prototype.bind=function(a,b){var c=this;e.__super__.bind.apply(this,arguments);var d=a.id+"-container";this.$selection.find(".select2-selection__rendered").attr("id",d),this.$selection.attr("aria-labelledby",d),this.$selection.on("mousedown",function(a){1===a.which&&c.trigger("toggle",{originalEvent:a})}),this.$selection.on("focus",function(a){}),this.$selection.on("blur",function(a){}),a.on("focus",function(b){a.isOpen()||c.$selection.focus()}),a.on("selection:update",function(a){c.update(a.data)})},e.prototype.clear=function(){this.$selection.find(".select2-selection__rendered").empty()},e.prototype.display=function(a,b){var c=this.options.get("templateSelection");return this.options.get("escapeMarkup")(c(a,b))},e.prototype.selectionContainer=function(){return a("<span></span>")},e.prototype.update=function(a){if(0===a.length)return void this.clear();var b=a[0],c=this.$selection.find(".select2-selection__rendered"),d=this.display(b,c);c.empty().append(d),c.prop("title",b.title||b.text)},e}),b.define("select2/selection/multiple",["jquery","./base","../utils"],function(a,b,c){function d(a,b){d.__super__.constructor.apply(this,arguments)}return c.Extend(d,b),d.prototype.render=function(){var a=d.__super__.render.call(this);return a.addClass("select2-selection--multiple"),a.html('<ul class="select2-selection__rendered"></ul>'),a},d.prototype.bind=function(b,c){var e=this;d.__super__.bind.apply(this,arguments),this.$selection.on("click",function(a){e.trigger("toggle",{originalEvent:a})}),this.$selection.on("click",".select2-selection__choice__remove",function(b){if(!e.options.get("disabled")){var c=a(this),d=c.parent(),f=d.data("data");e.trigger("unselect",{originalEvent:b,data:f})}})},d.prototype.clear=function(){this.$selection.find(".select2-selection__rendered").empty()},d.prototype.display=function(a,b){var c=this.options.get("templateSelection");return this.options.get("escapeMarkup")(c(a,b))},d.prototype.selectionContainer=function(){return a('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>')},d.prototype.update=function(a){if(this.clear(),0!==a.length){for(var b=[],d=0;d<a.length;d++){var e=a[d],f=this.selectionContainer(),g=this.display(e,f);f.append(g),f.prop("title",e.title||e.text),f.data("data",e),b.push(f)}var h=this.$selection.find(".select2-selection__rendered");c.appendMany(h,b)}},d}),b.define("select2/selection/placeholder",["../utils"],function(a){function b(a,b,c){this.placeholder=this.normalizePlaceholder(c.get("placeholder")),a.call(this,b,c)}return b.prototype.normalizePlaceholder=function(a,b){return"string"==typeof b&&(b={id:"",text:b}),b},b.prototype.createPlaceholder=function(a,b){var c=this.selectionContainer();return c.html(this.display(b)),c.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"),c},b.prototype.update=function(a,b){var c=1==b.length&&b[0].id!=this.placeholder.id;if(b.length>1||c)return a.call(this,b);this.clear();var d=this.createPlaceholder(this.placeholder);this.$selection.find(".select2-selection__rendered").append(d)},b}),b.define("select2/selection/allowClear",["jquery","../keys"],function(a,b){function c(){}return c.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),null==this.placeholder&&this.options.get("debug")&&window.console&&console.error&&console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."),this.$selection.on("mousedown",".select2-selection__clear",function(a){d._handleClear(a)}),b.on("keypress",function(a){d._handleKeyboardClear(a,b)})},c.prototype._handleClear=function(a,b){if(!this.options.get("disabled")){var c=this.$selection.find(".select2-selection__clear");if(0!==c.length){b.stopPropagation();for(var d=c.data("data"),e=0;e<d.length;e++){var f={data:d[e]};if(this.trigger("unselect",f),f.prevented)return}this.$element.val(this.placeholder.id).trigger("change"),this.trigger("toggle",{})}}},c.prototype._handleKeyboardClear=function(a,c,d){d.isOpen()||c.which!=b.DELETE&&c.which!=b.BACKSPACE||this._handleClear(c)},c.prototype.update=function(b,c){if(b.call(this,c),!(this.$selection.find(".select2-selection__placeholder").length>0||0===c.length)){var d=a('<span class="select2-selection__clear">&times;</span>');d.data("data",c),this.$selection.find(".select2-selection__rendered").prepend(d)}},c}),b.define("select2/selection/search",["jquery","../utils","../keys"],function(a,b,c){function d(a,b,c){a.call(this,b,c)}return d.prototype.render=function(b){var c=a('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');this.$searchContainer=c,this.$search=c.find("input");var d=b.call(this);return this._transferTabIndex(),d},d.prototype.bind=function(a,b,d){var e=this;a.call(this,b,d),b.on("open",function(){e.$search.trigger("focus")}),b.on("close",function(){e.$search.val(""),e.$search.removeAttr("aria-activedescendant"),e.$search.trigger("focus")}),b.on("enable",function(){e.$search.prop("disabled",!1),e._transferTabIndex()}),b.on("disable",function(){e.$search.prop("disabled",!0)}),b.on("focus",function(a){e.$search.trigger("focus")}),b.on("results:focus",function(a){e.$search.attr("aria-activedescendant",a.id)}),this.$selection.on("focusin",".select2-search--inline",function(a){e.trigger("focus",a)}),this.$selection.on("focusout",".select2-search--inline",function(a){e._handleBlur(a)}),this.$selection.on("keydown",".select2-search--inline",function(a){if(a.stopPropagation(),e.trigger("keypress",a),e._keyUpPrevented=a.isDefaultPrevented(),a.which===c.BACKSPACE&&""===e.$search.val()){var b=e.$searchContainer.prev(".select2-selection__choice");if(b.length>0){var d=b.data("data");e.searchRemoveChoice(d),a.preventDefault()}}});var f=document.documentMode,g=f&&f<=11;this.$selection.on("input.searchcheck",".select2-search--inline",function(a){if(g)return void e.$selection.off("input.search input.searchcheck");e.$selection.off("keyup.search")}),this.$selection.on("keyup.search input.search",".select2-search--inline",function(a){if(g&&"input"===a.type)return void e.$selection.off("input.search input.searchcheck");var b=a.which;b!=c.SHIFT&&b!=c.CTRL&&b!=c.ALT&&b!=c.TAB&&e.handleSearch(a)})},d.prototype._transferTabIndex=function(a){this.$search.attr("tabindex",this.$selection.attr("tabindex")),this.$selection.attr("tabindex","-1")},d.prototype.createPlaceholder=function(a,b){this.$search.attr("placeholder",b.text)},d.prototype.update=function(a,b){var c=this.$search[0]==document.activeElement;this.$search.attr("placeholder",""),a.call(this,b),this.$selection.find(".select2-selection__rendered").append(this.$searchContainer),this.resizeSearch(),c&&this.$search.focus()},d.prototype.handleSearch=function(){if(this.resizeSearch(),!this._keyUpPrevented){var a=this.$search.val();this.trigger("query",{term:a})}this._keyUpPrevented=!1},d.prototype.searchRemoveChoice=function(a,b){this.trigger("unselect",{data:b}),this.$search.val(b.text),this.handleSearch()},d.prototype.resizeSearch=function(){this.$search.css("width","25px");var a="";if(""!==this.$search.attr("placeholder"))a=this.$selection.find(".select2-selection__rendered").innerWidth();else{a=.75*(this.$search.val().length+1)+"em"}this.$search.css("width",a)},d}),b.define("select2/selection/eventRelay",["jquery"],function(a){function b(){}return b.prototype.bind=function(b,c,d){var e=this,f=["open","opening","close","closing","select","selecting","unselect","unselecting"],g=["opening","closing","selecting","unselecting"];b.call(this,c,d),c.on("*",function(b,c){if(-1!==a.inArray(b,f)){c=c||{};var d=a.Event("select2:"+b,{params:c});e.$element.trigger(d),-1!==a.inArray(b,g)&&(c.prevented=d.isDefaultPrevented())}})},b}),b.define("select2/translation",["jquery","require"],function(a,b){function c(a){this.dict=a||{}}return c.prototype.all=function(){return this.dict},c.prototype.get=function(a){return this.dict[a]},c.prototype.extend=function(b){this.dict=a.extend({},b.all(),this.dict)},c._cache={},c.loadPath=function(a){if(!(a in c._cache)){var d=b(a);c._cache[a]=d}return new c(c._cache[a])},c}),b.define("select2/diacritics",[],function(){return{"â’¶":"A","ï¼¡":"A","Ã€":"A","Ã":"A","Ã‚":"A","áº¦":"A","áº¤":"A","áºª":"A","áº¨":"A","Ãƒ":"A","Ä€":"A","Ä‚":"A","áº°":"A","áº®":"A","áº´":"A","áº²":"A","È¦":"A","Ç ":"A","Ã„":"A","Çž":"A","áº¢":"A","Ã…":"A","Çº":"A","Ç":"A","È€":"A","È‚":"A","áº ":"A","áº¬":"A","áº¶":"A","á¸€":"A","Ä„":"A","Èº":"A","â±¯":"A","êœ²":"AA","Ã†":"AE","Ç¼":"AE","Ç¢":"AE","êœ´":"AO","êœ¶":"AU","êœ¸":"AV","êœº":"AV","êœ¼":"AY","â’·":"B","ï¼¢":"B","á¸‚":"B","á¸„":"B","á¸†":"B","Éƒ":"B","Æ‚":"B","Æ":"B","â’¸":"C","ï¼£":"C","Ä†":"C","Äˆ":"C","ÄŠ":"C","ÄŒ":"C","Ã‡":"C","á¸ˆ":"C","Æ‡":"C","È»":"C","êœ¾":"C","â’¹":"D","ï¼¤":"D","á¸Š":"D","ÄŽ":"D","á¸Œ":"D","á¸":"D","á¸’":"D","á¸Ž":"D","Ä":"D","Æ‹":"D","ÆŠ":"D","Æ‰":"D","ê¹":"D","Ç±":"DZ","Ç„":"DZ","Ç²":"Dz","Ç…":"Dz","â’º":"E","ï¼¥":"E","Ãˆ":"E","Ã‰":"E","ÃŠ":"E","á»€":"E","áº¾":"E","á»„":"E","á»‚":"E","áº¼":"E","Ä’":"E","á¸”":"E","á¸–":"E","Ä”":"E","Ä–":"E","Ã‹":"E","áºº":"E","Äš":"E","È„":"E","È†":"E","áº¸":"E","á»†":"E","È¨":"E","á¸œ":"E","Ä˜":"E","á¸˜":"E","á¸š":"E","Æ":"E","ÆŽ":"E","â’»":"F","ï¼¦":"F","á¸ž":"F","Æ‘":"F","ê»":"F","â’¼":"G","ï¼§":"G","Ç´":"G","Äœ":"G","á¸ ":"G","Äž":"G","Ä ":"G","Ç¦":"G","Ä¢":"G","Ç¤":"G","Æ“":"G","êž ":"G","ê½":"G","ê¾":"G","â’½":"H","ï¼¨":"H","Ä¤":"H","á¸¢":"H","á¸¦":"H","Èž":"H","á¸¤":"H","á¸¨":"H","á¸ª":"H","Ä¦":"H","â±§":"H","â±µ":"H","êž":"H","â’¾":"I","ï¼©":"I","ÃŒ":"I","Ã":"I","ÃŽ":"I","Ä¨":"I","Äª":"I","Ä¬":"I","Ä°":"I","Ã":"I","á¸®":"I","á»ˆ":"I","Ç":"I","Èˆ":"I","ÈŠ":"I","á»Š":"I","Ä®":"I","á¸¬":"I","Æ—":"I","â’¿":"J","ï¼ª":"J","Ä´":"J","Éˆ":"J","â“€":"K","ï¼«":"K","á¸°":"K","Ç¨":"K","á¸²":"K","Ä¶":"K","á¸´":"K","Æ˜":"K","â±©":"K","ê€":"K","ê‚":"K","ê„":"K","êž¢":"K","â“":"L","ï¼¬":"L","Ä¿":"L","Ä¹":"L","Ä½":"L","á¸¶":"L","á¸¸":"L","Ä»":"L","á¸¼":"L","á¸º":"L","Å":"L","È½":"L","â±¢":"L","â± ":"L","êˆ":"L","ê†":"L","êž€":"L","Ç‡":"LJ","Çˆ":"Lj","â“‚":"M","ï¼­":"M","á¸¾":"M","á¹€":"M","á¹‚":"M","â±®":"M","Æœ":"M","â“ƒ":"N","ï¼®":"N","Ç¸":"N","Åƒ":"N","Ã‘":"N","á¹„":"N","Å‡":"N","á¹†":"N","Å…":"N","á¹Š":"N","á¹ˆ":"N","È ":"N","Æ":"N","êž":"N","êž¤":"N","ÇŠ":"NJ","Ç‹":"Nj","â“„":"O","ï¼¯":"O","Ã’":"O","Ã“":"O","Ã”":"O","á»’":"O","á»":"O","á»–":"O","á»”":"O","Ã•":"O","á¹Œ":"O","È¬":"O","á¹Ž":"O","ÅŒ":"O","á¹":"O","á¹’":"O","ÅŽ":"O","È®":"O","È°":"O","Ã–":"O","Èª":"O","á»Ž":"O","Å":"O","Ç‘":"O","ÈŒ":"O","ÈŽ":"O","Æ ":"O","á»œ":"O","á»š":"O","á» ":"O","á»ž":"O","á»¢":"O","á»Œ":"O","á»˜":"O","Çª":"O","Ç¬":"O","Ã˜":"O","Ç¾":"O","Æ†":"O","ÆŸ":"O","êŠ":"O","êŒ":"O","Æ¢":"OI","êŽ":"OO","È¢":"OU","â“…":"P","ï¼°":"P","á¹”":"P","á¹–":"P","Æ¤":"P","â±£":"P","ê":"P","ê’":"P","ê”":"P","â“†":"Q","ï¼±":"Q","ê–":"Q","ê˜":"Q","ÉŠ":"Q","â“‡":"R","ï¼²":"R","Å”":"R","á¹˜":"R","Å˜":"R","È":"R","È’":"R","á¹š":"R","á¹œ":"R","Å–":"R","á¹ž":"R","ÉŒ":"R","â±¤":"R","êš":"R","êž¦":"R","êž‚":"R","â“ˆ":"S","ï¼³":"S","áºž":"S","Åš":"S","á¹¤":"S","Åœ":"S","á¹ ":"S","Å ":"S","á¹¦":"S","á¹¢":"S","á¹¨":"S","È˜":"S","Åž":"S","â±¾":"S","êž¨":"S","êž„":"S","â“‰":"T","ï¼´":"T","á¹ª":"T","Å¤":"T","á¹¬":"T","Èš":"T","Å¢":"T","á¹°":"T","á¹®":"T","Å¦":"T","Æ¬":"T","Æ®":"T","È¾":"T","êž†":"T","êœ¨":"TZ","â“Š":"U","ï¼µ":"U","Ã™":"U","Ãš":"U","Ã›":"U","Å¨":"U","á¹¸":"U","Åª":"U","á¹º":"U","Å¬":"U","Ãœ":"U","Ç›":"U","Ç—":"U","Ç•":"U","Ç™":"U","á»¦":"U","Å®":"U","Å°":"U","Ç“":"U","È”":"U","È–":"U","Æ¯":"U","á»ª":"U","á»¨":"U","á»®":"U","á»¬":"U","á»°":"U","á»¤":"U","á¹²":"U","Å²":"U","á¹¶":"U","á¹´":"U","É„":"U","â“‹":"V","ï¼¶":"V","á¹¼":"V","á¹¾":"V","Æ²":"V","êž":"V","É…":"V","ê ":"VY","â“Œ":"W","ï¼·":"W","áº€":"W","áº‚":"W","Å´":"W","áº†":"W","áº„":"W","áºˆ":"W","â±²":"W","â“":"X","ï¼¸":"X","áºŠ":"X","áºŒ":"X","â“Ž":"Y","ï¼¹":"Y","á»²":"Y","Ã":"Y","Å¶":"Y","á»¸":"Y","È²":"Y","áºŽ":"Y","Å¸":"Y","á»¶":"Y","á»´":"Y","Æ³":"Y","ÉŽ":"Y","á»¾":"Y","â“":"Z","ï¼º":"Z","Å¹":"Z","áº":"Z","Å»":"Z","Å½":"Z","áº’":"Z","áº”":"Z","Æµ":"Z","È¤":"Z","â±¿":"Z","â±«":"Z","ê¢":"Z","â“":"a","ï½":"a","áºš":"a","Ã ":"a","Ã¡":"a","Ã¢":"a","áº§":"a","áº¥":"a","áº«":"a","áº©":"a","Ã£":"a","Ä":"a","Äƒ":"a","áº±":"a","áº¯":"a","áºµ":"a","áº³":"a","È§":"a","Ç¡":"a","Ã¤":"a","ÇŸ":"a","áº£":"a","Ã¥":"a","Ç»":"a","ÇŽ":"a","È":"a","Èƒ":"a","áº¡":"a","áº­":"a","áº·":"a","á¸":"a","Ä…":"a","â±¥":"a","É":"a","êœ³":"aa","Ã¦":"ae","Ç½":"ae","Ç£":"ae","êœµ":"ao","êœ·":"au","êœ¹":"av","êœ»":"av","êœ½":"ay","â“‘":"b","ï½‚":"b","á¸ƒ":"b","á¸…":"b","á¸‡":"b","Æ€":"b","Æƒ":"b","É“":"b","â“’":"c","ï½ƒ":"c","Ä‡":"c","Ä‰":"c","Ä‹":"c","Ä":"c","Ã§":"c","á¸‰":"c","Æˆ":"c","È¼":"c","êœ¿":"c","â†„":"c","â““":"d","ï½„":"d","á¸‹":"d","Ä":"d","á¸":"d","á¸‘":"d","á¸“":"d","á¸":"d","Ä‘":"d","ÆŒ":"d","É–":"d","É—":"d","êº":"d","Ç³":"dz","Ç†":"dz","â“”":"e","ï½…":"e","Ã¨":"e","Ã©":"e","Ãª":"e","á»":"e","áº¿":"e","á»…":"e","á»ƒ":"e","áº½":"e","Ä“":"e","á¸•":"e","á¸—":"e","Ä•":"e","Ä—":"e","Ã«":"e","áº»":"e","Ä›":"e","È…":"e","È‡":"e","áº¹":"e","á»‡":"e","È©":"e","á¸":"e","Ä™":"e","á¸™":"e","á¸›":"e","É‡":"e","É›":"e","Ç":"e","â“•":"f","ï½†":"f","á¸Ÿ":"f","Æ’":"f","ê¼":"f","â“–":"g","ï½‡":"g","Çµ":"g","Ä":"g","á¸¡":"g","ÄŸ":"g","Ä¡":"g","Ç§":"g","Ä£":"g","Ç¥":"g","É ":"g","êž¡":"g","áµ¹":"g","ê¿":"g","â“—":"h","ï½ˆ":"h","Ä¥":"h","á¸£":"h","á¸§":"h","ÈŸ":"h","á¸¥":"h","á¸©":"h","á¸«":"h","áº–":"h","Ä§":"h","â±¨":"h","â±¶":"h","É¥":"h","Æ•":"hv","â“˜":"i","ï½‰":"i","Ã¬":"i","Ã­":"i","Ã®":"i","Ä©":"i","Ä«":"i","Ä­":"i","Ã¯":"i","á¸¯":"i","á»‰":"i","Ç":"i","È‰":"i","È‹":"i","á»‹":"i","Ä¯":"i","á¸­":"i","É¨":"i","Ä±":"i","â“™":"j","ï½Š":"j","Äµ":"j","Ç°":"j","É‰":"j","â“š":"k","ï½‹":"k","á¸±":"k","Ç©":"k","á¸³":"k","Ä·":"k","á¸µ":"k","Æ™":"k","â±ª":"k","ê":"k","êƒ":"k","ê…":"k","êž£":"k","â“›":"l","ï½Œ":"l","Å€":"l","Äº":"l","Ä¾":"l","á¸·":"l","á¸¹":"l","Ä¼":"l","á¸½":"l","á¸»":"l","Å¿":"l","Å‚":"l","Æš":"l","É«":"l","â±¡":"l","ê‰":"l","êž":"l","ê‡":"l","Ç‰":"lj","â“œ":"m","ï½":"m","á¸¿":"m","á¹":"m","á¹ƒ":"m","É±":"m","É¯":"m","â“":"n","ï½Ž":"n","Ç¹":"n","Å„":"n","Ã±":"n","á¹…":"n","Åˆ":"n","á¹‡":"n","Å†":"n","á¹‹":"n","á¹‰":"n","Æž":"n","É²":"n","Å‰":"n","êž‘":"n","êž¥":"n","ÇŒ":"nj","â“ž":"o","ï½":"o","Ã²":"o","Ã³":"o","Ã´":"o","á»“":"o","á»‘":"o","á»—":"o","á»•":"o","Ãµ":"o","á¹":"o","È­":"o","á¹":"o","Å":"o","á¹‘":"o","á¹“":"o","Å":"o","È¯":"o","È±":"o","Ã¶":"o","È«":"o","á»":"o","Å‘":"o","Ç’":"o","È":"o","È":"o","Æ¡":"o","á»":"o","á»›":"o","á»¡":"o","á»Ÿ":"o","á»£":"o","á»":"o","á»™":"o","Ç«":"o","Ç­":"o","Ã¸":"o","Ç¿":"o","É”":"o","ê‹":"o","ê":"o","Éµ":"o","Æ£":"oi","È£":"ou","ê":"oo","â“Ÿ":"p","ï½":"p","á¹•":"p","á¹—":"p","Æ¥":"p","áµ½":"p","ê‘":"p","ê“":"p","ê•":"p","â“ ":"q","ï½‘":"q","É‹":"q","ê—":"q","ê™":"q","â“¡":"r","ï½’":"r","Å•":"r","á¹™":"r","Å™":"r","È‘":"r","È“":"r","á¹›":"r","á¹":"r","Å—":"r","á¹Ÿ":"r","É":"r","É½":"r","ê›":"r","êž§":"r","êžƒ":"r","â“¢":"s","ï½“":"s","ÃŸ":"s","Å›":"s","á¹¥":"s","Å":"s","á¹¡":"s","Å¡":"s","á¹§":"s","á¹£":"s","á¹©":"s","È™":"s","ÅŸ":"s","È¿":"s","êž©":"s","êž…":"s","áº›":"s","â“£":"t","ï½”":"t","á¹«":"t","áº—":"t","Å¥":"t","á¹­":"t","È›":"t","Å£":"t","á¹±":"t","á¹¯":"t","Å§":"t","Æ­":"t","Êˆ":"t","â±¦":"t","êž‡":"t","êœ©":"tz","â“¤":"u","ï½•":"u","Ã¹":"u","Ãº":"u","Ã»":"u","Å©":"u","á¹¹":"u","Å«":"u","á¹»":"u","Å­":"u","Ã¼":"u","Çœ":"u","Ç˜":"u","Ç–":"u","Çš":"u","á»§":"u","Å¯":"u","Å±":"u","Ç”":"u","È•":"u","È—":"u","Æ°":"u","á»«":"u","á»©":"u","á»¯":"u","á»­":"u","á»±":"u","á»¥":"u","á¹³":"u","Å³":"u","á¹·":"u","á¹µ":"u","Ê‰":"u","â“¥":"v","ï½–":"v","á¹½":"v","á¹¿":"v","Ê‹":"v","êŸ":"v","ÊŒ":"v","ê¡":"vy","â“¦":"w","ï½—":"w","áº":"w","áºƒ":"w","Åµ":"w","áº‡":"w","áº…":"w","áº˜":"w","áº‰":"w","â±³":"w","â“§":"x","ï½˜":"x","áº‹":"x","áº":"x","â“¨":"y","ï½™":"y","á»³":"y","Ã½":"y","Å·":"y","á»¹":"y","È³":"y","áº":"y","Ã¿":"y","á»·":"y","áº™":"y","á»µ":"y","Æ´":"y","É":"y","á»¿":"y","â“©":"z","ï½š":"z","Åº":"z","áº‘":"z","Å¼":"z","Å¾":"z","áº“":"z","áº•":"z","Æ¶":"z","È¥":"z","É€":"z","â±¬":"z","ê£":"z","Î†":"Î‘","Îˆ":"Î•","Î‰":"Î—","ÎŠ":"Î™","Îª":"Î™","ÎŒ":"ÎŸ","ÎŽ":"Î¥","Î«":"Î¥","Î":"Î©","Î¬":"Î±","Î­":"Îµ","Î®":"Î·","Î¯":"Î¹","ÏŠ":"Î¹","Î":"Î¹","ÏŒ":"Î¿","Ï":"Ï…","Ï‹":"Ï…","Î°":"Ï…","Ï‰":"Ï‰","Ï‚":"Ïƒ"}}),b.define("select2/data/base",["../utils"],function(a){function b(a,c){b.__super__.constructor.call(this)}return a.Extend(b,a.Observable),b.prototype.current=function(a){throw new Error("The `current` method must be defined in child classes.")},b.prototype.query=function(a,b){throw new Error("The `query` method must be defined in child classes.")},b.prototype.bind=function(a,b){},b.prototype.destroy=function(){},b.prototype.generateResultId=function(b,c){var d=b.id+"-result-";return d+=a.generateChars(4),null!=c.id?d+="-"+c.id.toString():d+="-"+a.generateChars(4),d},b}),b.define("select2/data/select",["./base","../utils","jquery"],function(a,b,c){function d(a,b){this.$element=a,this.options=b,d.__super__.constructor.call(this)}return b.Extend(d,a),d.prototype.current=function(a){var b=[],d=this;this.$element.find(":selected").each(function(){var a=c(this),e=d.item(a);b.push(e)}),a(b)},d.prototype.select=function(a){var b=this;if(a.selected=!0,c(a.element).is("option"))return a.element.selected=!0,void this.$element.trigger("change");if(this.$element.prop("multiple"))this.current(function(d){var e=[];a=[a],a.push.apply(a,d);for(var f=0;f<a.length;f++){var g=a[f].id;-1===c.inArray(g,e)&&e.push(g)}b.$element.val(e),b.$element.trigger("change")});else{var d=a.id;this.$element.val(d),this.$element.trigger("change")}},d.prototype.unselect=function(a){var b=this;if(this.$element.prop("multiple")){if(a.selected=!1,c(a.element).is("option"))return a.element.selected=!1,void this.$element.trigger("change");this.current(function(d){for(var e=[],f=0;f<d.length;f++){var g=d[f].id;g!==a.id&&-1===c.inArray(g,e)&&e.push(g)}b.$element.val(e),b.$element.trigger("change")})}},d.prototype.bind=function(a,b){var c=this;this.container=a,a.on("select",function(a){c.select(a.data)}),a.on("unselect",function(a){c.unselect(a.data)})},d.prototype.destroy=function(){this.$element.find("*").each(function(){c.removeData(this,"data")})},d.prototype.query=function(a,b){var d=[],e=this;this.$element.children().each(function(){var b=c(this);if(b.is("option")||b.is("optgroup")){var f=e.item(b),g=e.matches(a,f);null!==g&&d.push(g)}}),b({results:d})},d.prototype.addOptions=function(a){b.appendMany(this.$element,a)},d.prototype.option=function(a){var b;a.children?(b=document.createElement("optgroup"),b.label=a.text):(b=document.createElement("option"),void 0!==b.textContent?b.textContent=a.text:b.innerText=a.text),void 0!==a.id&&(b.value=a.id),a.disabled&&(b.disabled=!0),a.selected&&(b.selected=!0),a.title&&(b.title=a.title);var d=c(b),e=this._normalizeItem(a);return e.element=b,c.data(b,"data",e),d},d.prototype.item=function(a){var b={};if(null!=(b=c.data(a[0],"data")))return b;if(a.is("option"))b={id:a.val(),text:a.text(),disabled:a.prop("disabled"),selected:a.prop("selected"),title:a.prop("title")};else if(a.is("optgroup")){b={text:a.prop("label"),children:[],title:a.prop("title")};for(var d=a.children("option"),e=[],f=0;f<d.length;f++){var g=c(d[f]),h=this.item(g);e.push(h)}b.children=e}return b=this._normalizeItem(b),b.element=a[0],c.data(a[0],"data",b),b},d.prototype._normalizeItem=function(a){c.isPlainObject(a)||(a={id:a,text:a}),a=c.extend({},{text:""},a);var b={selected:!1,disabled:!1};return null!=a.id&&(a.id=a.id.toString()),null!=a.text&&(a.text=a.text.toString()),null==a._resultId&&a.id&&null!=this.container&&(a._resultId=this.generateResultId(this.container,a)),c.extend({},b,a)},d.prototype.matches=function(a,b){return this.options.get("matcher")(a,b)},d}),b.define("select2/data/array",["./select","../utils","jquery"],function(a,b,c){function d(a,b){var c=b.get("data")||[];d.__super__.constructor.call(this,a,b),this.addOptions(this.convertToOptions(c))}return b.Extend(d,a),d.prototype.select=function(a){var b=this.$element.find("option").filter(function(b,c){return c.value==a.id.toString()});0===b.length&&(b=this.option(a),this.addOptions(b)),d.__super__.select.call(this,a)},d.prototype.convertToOptions=function(a){function d(a){return function(){return c(this).val()==a.id}}for(var e=this,f=this.$element.find("option"),g=f.map(function(){return e.item(c(this)).id}).get(),h=[],i=0;i<a.length;i++){var j=this._normalizeItem(a[i]);if(c.inArray(j.id,g)>=0){var k=f.filter(d(j)),l=this.item(k),m=c.extend(!0,{},j,l),n=this.option(m);k.replaceWith(n)}else{var o=this.option(j);if(j.children){var p=this.convertToOptions(j.children);b.appendMany(o,p)}h.push(o)}}return h},d}),b.define("select2/data/ajax",["./array","../utils","jquery"],function(a,b,c){function d(a,b){this.ajaxOptions=this._applyDefaults(b.get("ajax")),null!=this.ajaxOptions.processResults&&(this.processResults=this.ajaxOptions.processResults),d.__super__.constructor.call(this,a,b)}return b.Extend(d,a),d.prototype._applyDefaults=function(a){var b={data:function(a){return c.extend({},a,{q:a.term})},transport:function(a,b,d){var e=c.ajax(a);return e.then(b),e.fail(d),e}};return c.extend({},b,a,!0)},d.prototype.processResults=function(a){return a},d.prototype.query=function(a,b){function d(){var d=f.transport(f,function(d){var f=e.processResults(d,a);e.options.get("debug")&&window.console&&console.error&&(f&&f.results&&c.isArray(f.results)||console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")),b(f)},function(){d.status&&"0"===d.status||e.trigger("results:message",{message:"errorLoading"})});e._request=d}var e=this;null!=this._request&&(c.isFunction(this._request.abort)&&this._request.abort(),this._request=null);var f=c.extend({type:"GET"},this.ajaxOptions);"function"==typeof f.url&&(f.url=f.url.call(this.$element,a)),"function"==typeof f.data&&(f.data=f.data.call(this.$element,a)),this.ajaxOptions.delay&&null!=a.term?(this._queryTimeout&&window.clearTimeout(this._queryTimeout),this._queryTimeout=window.setTimeout(d,this.ajaxOptions.delay)):d()},d}),b.define("select2/data/tags",["jquery"],function(a){function b(b,c,d){var e=d.get("tags"),f=d.get("createTag");void 0!==f&&(this.createTag=f);var g=d.get("insertTag");if(void 0!==g&&(this.insertTag=g),b.call(this,c,d),a.isArray(e))for(var h=0;h<e.length;h++){var i=e[h],j=this._normalizeItem(i),k=this.option(j);this.$element.append(k)}}return b.prototype.query=function(a,b,c){function d(a,f){for(var g=a.results,h=0;h<g.length;h++){var i=g[h],j=null!=i.children&&!d({results:i.children},!0);if((i.text||"").toUpperCase()===(b.term||"").toUpperCase()||j)return!f&&(a.data=g,void c(a))}if(f)return!0;var k=e.createTag(b);if(null!=k){var l=e.option(k);l.attr("data-select2-tag",!0),e.addOptions([l]),e.insertTag(g,k)}a.results=g,c(a)}var e=this;if(this._removeOldTags(),null==b.term||null!=b.page)return void a.call(this,b,c);a.call(this,b,d)},b.prototype.createTag=function(b,c){var d=a.trim(c.term);return""===d?null:{id:d,text:d}},b.prototype.insertTag=function(a,b,c){b.unshift(c)},b.prototype._removeOldTags=function(b){this._lastTag;this.$element.find("option[data-select2-tag]").each(function(){this.selected||a(this).remove()})},b}),b.define("select2/data/tokenizer",["jquery"],function(a){function b(a,b,c){var d=c.get("tokenizer");void 0!==d&&(this.tokenizer=d),a.call(this,b,c)}return b.prototype.bind=function(a,b,c){a.call(this,b,c),this.$search=b.dropdown.$search||b.selection.$search||c.find(".select2-search__field")},b.prototype.query=function(b,c,d){function e(b){var c=g._normalizeItem(b);if(!g.$element.find("option").filter(function(){return a(this).val()===c.id}).length){var d=g.option(c);d.attr("data-select2-tag",!0),g._removeOldTags(),g.addOptions([d])}f(c)}function f(a){g.trigger("select",{data:a})}var g=this;c.term=c.term||"";var h=this.tokenizer(c,this.options,e);h.term!==c.term&&(this.$search.length&&(this.$search.val(h.term),this.$search.focus()),c.term=h.term),b.call(this,c,d)},b.prototype.tokenizer=function(b,c,d,e){for(var f=d.get("tokenSeparators")||[],g=c.term,h=0,i=this.createTag||function(a){return{id:a.term,text:a.term}};h<g.length;){var j=g[h];if(-1!==a.inArray(j,f)){var k=g.substr(0,h),l=a.extend({},c,{term:k}),m=i(l);null!=m?(e(m),g=g.substr(h+1)||"",h=0):h++}else h++}return{term:g}},b}),b.define("select2/data/minimumInputLength",[],function(){function a(a,b,c){this.minimumInputLength=c.get("minimumInputLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){if(b.term=b.term||"",b.term.length<this.minimumInputLength)return void this.trigger("results:message",{message:"inputTooShort",args:{minimum:this.minimumInputLength,input:b.term,params:b}});a.call(this,b,c)},a}),b.define("select2/data/maximumInputLength",[],function(){function a(a,b,c){this.maximumInputLength=c.get("maximumInputLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){if(b.term=b.term||"",this.maximumInputLength>0&&b.term.length>this.maximumInputLength)return void this.trigger("results:message",{message:"inputTooLong",args:{maximum:this.maximumInputLength,input:b.term,params:b}});a.call(this,b,c)},a}),b.define("select2/data/maximumSelectionLength",[],function(){function a(a,b,c){this.maximumSelectionLength=c.get("maximumSelectionLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){var d=this;this.current(function(e){var f=null!=e?e.length:0;if(d.maximumSelectionLength>0&&f>=d.maximumSelectionLength)return void d.trigger("results:message",{message:"maximumSelected",args:{maximum:d.maximumSelectionLength}});a.call(d,b,c)})},a}),b.define("select2/dropdown",["jquery","./utils"],function(a,b){function c(a,b){this.$element=a,this.options=b,c.__super__.constructor.call(this)}return b.Extend(c,b.Observable),c.prototype.render=function(){var b=a('<span class="select2-dropdown"><span class="select2-results"></span></span>');return b.attr("dir",this.options.get("dir")),this.$dropdown=b,b},c.prototype.bind=function(){},c.prototype.position=function(a,b){},c.prototype.destroy=function(){this.$dropdown.remove()},c}),b.define("select2/dropdown/search",["jquery","../utils"],function(a,b){function c(){}return c.prototype.render=function(b){var c=b.call(this),d=a('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" /></span>');return this.$searchContainer=d,this.$search=d.find("input"),c.prepend(d),c},c.prototype.bind=function(b,c,d){var e=this;b.call(this,c,d),this.$search.on("keydown",function(a){e.trigger("keypress",a),e._keyUpPrevented=a.isDefaultPrevented()}),this.$search.on("input",function(b){a(this).off("keyup")}),this.$search.on("keyup input",function(a){e.handleSearch(a)}),c.on("open",function(){e.$search.attr("tabindex",0),e.$search.focus(),window.setTimeout(function(){e.$search.focus()},0)}),c.on("close",function(){e.$search.attr("tabindex",-1),e.$search.val("")}),c.on("focus",function(){c.isOpen()||e.$search.focus()}),c.on("results:all",function(a){if(null==a.query.term||""===a.query.term){e.showSearch(a)?e.$searchContainer.removeClass("select2-search--hide"):e.$searchContainer.addClass("select2-search--hide")}})},c.prototype.handleSearch=function(a){if(!this._keyUpPrevented){var b=this.$search.val();this.trigger("query",{term:b})}this._keyUpPrevented=!1},c.prototype.showSearch=function(a,b){return!0},c}),b.define("select2/dropdown/hidePlaceholder",[],function(){function a(a,b,c,d){this.placeholder=this.normalizePlaceholder(c.get("placeholder")),a.call(this,b,c,d)}return a.prototype.append=function(a,b){b.results=this.removePlaceholder(b.results),a.call(this,b)},a.prototype.normalizePlaceholder=function(a,b){return"string"==typeof b&&(b={id:"",text:b}),b},a.prototype.removePlaceholder=function(a,b){for(var c=b.slice(0),d=b.length-1;d>=0;d--){var e=b[d];this.placeholder.id===e.id&&c.splice(d,1)}return c},a}),b.define("select2/dropdown/infiniteScroll",["jquery"],function(a){function b(a,b,c,d){this.lastParams={},a.call(this,b,c,d),this.$loadingMore=this.createLoadingMore(),this.loading=!1}return b.prototype.append=function(a,b){this.$loadingMore.remove(),this.loading=!1,a.call(this,b),this.showLoadingMore(b)&&this.$results.append(this.$loadingMore)},b.prototype.bind=function(b,c,d){var e=this;b.call(this,c,d),c.on("query",function(a){e.lastParams=a,e.loading=!0}),c.on("query:append",function(a){e.lastParams=a,e.loading=!0}),this.$results.on("scroll",function(){var b=a.contains(document.documentElement,e.$loadingMore[0]);if(!e.loading&&b){e.$results.offset().top+e.$results.outerHeight(!1)+50>=e.$loadingMore.offset().top+e.$loadingMore.outerHeight(!1)&&e.loadMore()}})},b.prototype.loadMore=function(){this.loading=!0;var b=a.extend({},{page:1},this.lastParams);b.page++,this.trigger("query:append",b)},b.prototype.showLoadingMore=function(a,b){return b.pagination&&b.pagination.more},b.prototype.createLoadingMore=function(){var b=a('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),c=this.options.get("translations").get("loadingMore");return b.html(c(this.lastParams)),b},b}),b.define("select2/dropdown/attachBody",["jquery","../utils"],function(a,b){function c(b,c,d){this.$dropdownParent=d.get("dropdownParent")||a(document.body),b.call(this,c,d)}return c.prototype.bind=function(a,b,c){var d=this,e=!1;a.call(this,b,c),b.on("open",function(){d._showDropdown(),d._attachPositioningHandler(b),e||(e=!0,b.on("results:all",function(){d._positionDropdown(),d._resizeDropdown()}),b.on("results:append",function(){d._positionDropdown(),d._resizeDropdown()}))}),b.on("close",function(){d._hideDropdown(),d._detachPositioningHandler(b)}),this.$dropdownContainer.on("mousedown",function(a){a.stopPropagation()})},c.prototype.destroy=function(a){a.call(this),this.$dropdownContainer.remove()},c.prototype.position=function(a,b,c){b.attr("class",c.attr("class")),b.removeClass("select2"),b.addClass("select2-container--open"),b.css({position:"absolute",top:-999999}),this.$container=c},c.prototype.render=function(b){var c=a("<span></span>"),d=b.call(this);return c.append(d),this.$dropdownContainer=c,c},c.prototype._hideDropdown=function(a){this.$dropdownContainer.detach()},c.prototype._attachPositioningHandler=function(c,d){var e=this,f="scroll.select2."+d.id,g="resize.select2."+d.id,h="orientationchange.select2."+d.id,i=this.$container.parents().filter(b.hasScroll);i.each(function(){a(this).data("select2-scroll-position",{x:a(this).scrollLeft(),y:a(this).scrollTop()})}),i.on(f,function(b){var c=a(this).data("select2-scroll-position");a(this).scrollTop(c.y)}),a(window).on(f+" "+g+" "+h,function(a){e._positionDropdown(),e._resizeDropdown()})},c.prototype._detachPositioningHandler=function(c,d){var e="scroll.select2."+d.id,f="resize.select2."+d.id,g="orientationchange.select2."+d.id;this.$container.parents().filter(b.hasScroll).off(e),a(window).off(e+" "+f+" "+g)},c.prototype._positionDropdown=function(){var b=a(window),c=this.$dropdown.hasClass("select2-dropdown--above"),d=this.$dropdown.hasClass("select2-dropdown--below"),e=null,f=this.$container.offset();f.bottom=f.top+this.$container.outerHeight(!1);var g={height:this.$container.outerHeight(!1)};g.top=f.top,g.bottom=f.top+g.height;var h={height:this.$dropdown.outerHeight(!1)},i={top:b.scrollTop(),bottom:b.scrollTop()+b.height()},j=i.top<f.top-h.height,k=i.bottom>f.bottom+h.height,l={left:f.left,top:g.bottom},m=this.$dropdownParent;"static"===m.css("position")&&(m=m.offsetParent());var n=m.offset();l.top-=n.top,l.left-=n.left,c||d||(e="below"),k||!j||c?!j&&k&&c&&(e="below"):e="above",("above"==e||c&&"below"!==e)&&(l.top=g.top-n.top-h.height),null!=e&&(this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--"+e),this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--"+e)),this.$dropdownContainer.css(l)},c.prototype._resizeDropdown=function(){var a={width:this.$container.outerWidth(!1)+"px"};this.options.get("dropdownAutoWidth")&&(a.minWidth=a.width,a.position="relative",a.width="auto"),this.$dropdown.css(a)},c.prototype._showDropdown=function(a){this.$dropdownContainer.appendTo(this.$dropdownParent),this._positionDropdown(),this._resizeDropdown()},c}),b.define("select2/dropdown/minimumResultsForSearch",[],function(){function a(b){for(var c=0,d=0;d<b.length;d++){var e=b[d];e.children?c+=a(e.children):c++}return c}function b(a,b,c,d){this.minimumResultsForSearch=c.get("minimumResultsForSearch"),this.minimumResultsForSearch<0&&(this.minimumResultsForSearch=1/0),a.call(this,b,c,d)}return b.prototype.showSearch=function(b,c){return!(a(c.data.results)<this.minimumResultsForSearch)&&b.call(this,c)},b}),b.define("select2/dropdown/selectOnClose",[],function(){function a(){}return a.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),b.on("close",function(a){d._handleSelectOnClose(a)})},a.prototype._handleSelectOnClose=function(a,b){if(b&&null!=b.originalSelect2Event){var c=b.originalSelect2Event;if("select"===c._type||"unselect"===c._type)return}var d=this.getHighlightedResults();if(!(d.length<1)){var e=d.data("data");null!=e.element&&e.element.selected||null==e.element&&e.selected||this.trigger("select",{data:e})}},a}),b.define("select2/dropdown/closeOnSelect",[],function(){function a(){}return a.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),b.on("select",function(a){d._selectTriggered(a)}),b.on("unselect",function(a){d._selectTriggered(a)})},a.prototype._selectTriggered=function(a,b){var c=b.originalEvent;c&&c.ctrlKey||this.trigger("close",{originalEvent:c,originalSelect2Event:b})},a}),b.define("select2/i18n/en",[],function(){return{errorLoading:function(){return"The results could not be loaded."},inputTooLong:function(a){var b=a.input.length-a.maximum,c="Please delete "+b+" character";return 1!=b&&(c+="s"),c},inputTooShort:function(a){return"Please enter "+(a.minimum-a.input.length)+" or more characters"},loadingMore:function(){return"Loading more resultsâ€¦"},maximumSelected:function(a){var b="You can only select "+a.maximum+" item";return 1!=a.maximum&&(b+="s"),b},noResults:function(){return"No results found"},searching:function(){return"Searchingâ€¦"}}}),b.define("select2/defaults",["jquery","require","./results","./selection/single","./selection/multiple","./selection/placeholder","./selection/allowClear","./selection/search","./selection/eventRelay","./utils","./translation","./diacritics","./data/select","./data/array","./data/ajax","./data/tags","./data/tokenizer","./data/minimumInputLength","./data/maximumInputLength","./data/maximumSelectionLength","./dropdown","./dropdown/search","./dropdown/hidePlaceholder","./dropdown/infiniteScroll","./dropdown/attachBody","./dropdown/minimumResultsForSearch","./dropdown/selectOnClose","./dropdown/closeOnSelect","./i18n/en"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C){function D(){this.reset()}return D.prototype.apply=function(l){if(l=a.extend(!0,{},this.defaults,l),null==l.dataAdapter){if(null!=l.ajax?l.dataAdapter=o:null!=l.data?l.dataAdapter=n:l.dataAdapter=m,l.minimumInputLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,r)),l.maximumInputLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,s)),l.maximumSelectionLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,t)),l.tags&&(l.dataAdapter=j.Decorate(l.dataAdapter,p)),null==l.tokenSeparators&&null==l.tokenizer||(l.dataAdapter=j.Decorate(l.dataAdapter,q)),null!=l.query){var C=b(l.amdBase+"compat/query");l.dataAdapter=j.Decorate(l.dataAdapter,C)}if(null!=l.initSelection){var D=b(l.amdBase+"compat/initSelection");l.dataAdapter=j.Decorate(l.dataAdapter,D)}}if(null==l.resultsAdapter&&(l.resultsAdapter=c,null!=l.ajax&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,x)),null!=l.placeholder&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,w)),l.selectOnClose&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,A))),null==l.dropdownAdapter){if(l.multiple)l.dropdownAdapter=u;else{var E=j.Decorate(u,v);l.dropdownAdapter=E}if(0!==l.minimumResultsForSearch&&(l.dropdownAdapter=j.Decorate(l.dropdownAdapter,z)),l.closeOnSelect&&(l.dropdownAdapter=j.Decorate(l.dropdownAdapter,B)),null!=l.dropdownCssClass||null!=l.dropdownCss||null!=l.adaptDropdownCssClass){var F=b(l.amdBase+"compat/dropdownCss");l.dropdownAdapter=j.Decorate(l.dropdownAdapter,F)}l.dropdownAdapter=j.Decorate(l.dropdownAdapter,y)}if(null==l.selectionAdapter){if(l.multiple?l.selectionAdapter=e:l.selectionAdapter=d,null!=l.placeholder&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,f)),l.allowClear&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,g)),l.multiple&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,h)),null!=l.containerCssClass||null!=l.containerCss||null!=l.adaptContainerCssClass){var G=b(l.amdBase+"compat/containerCss");l.selectionAdapter=j.Decorate(l.selectionAdapter,G)}l.selectionAdapter=j.Decorate(l.selectionAdapter,i)}if("string"==typeof l.language)if(l.language.indexOf("-")>0){var H=l.language.split("-"),I=H[0];l.language=[l.language,I]}else l.language=[l.language];if(a.isArray(l.language)){var J=new k;l.language.push("en");for(var K=l.language,L=0;L<K.length;L++){var M=K[L],N={};try{N=k.loadPath(M)}catch(a){try{M=this.defaults.amdLanguageBase+M,N=k.loadPath(M)}catch(a){l.debug&&window.console&&console.warn&&console.warn('Select2: The language file for "'+M+'" could not be automatically loaded. A fallback will be used instead.');continue}}J.extend(N)}l.translations=J}else{var O=k.loadPath(this.defaults.amdLanguageBase+"en"),P=new k(l.language);P.extend(O),l.translations=P}return l},D.prototype.reset=function(){function b(a){function b(a){return l[a]||a}return a.replace(/[^\u0000-\u007E]/g,b)}function c(d,e){if(""===a.trim(d.term))return e;if(e.children&&e.children.length>0){for(var f=a.extend(!0,{},e),g=e.children.length-1;g>=0;g--){null==c(d,e.children[g])&&f.children.splice(g,1)}return f.children.length>0?f:c(d,f)}var h=b(e.text).toUpperCase(),i=b(d.term).toUpperCase();return h.indexOf(i)>-1?e:null}this.defaults={amdBase:"./",amdLanguageBase:"./i18n/",closeOnSelect:!0,debug:!1,dropdownAutoWidth:!1,escapeMarkup:j.escapeMarkup,language:C,matcher:c,minimumInputLength:0,maximumInputLength:0,maximumSelectionLength:0,minimumResultsForSearch:0,selectOnClose:!1,sorter:function(a){return a},templateResult:function(a){return a.text},templateSelection:function(a){return a.text},theme:"default",width:"resolve"}},D.prototype.set=function(b,c){var d=a.camelCase(b),e={};e[d]=c;var f=j._convertData(e);a.extend(this.defaults,f)},new D}),b.define("select2/options",["require","jquery","./defaults","./utils"],function(a,b,c,d){function e(b,e){if(this.options=b,null!=e&&this.fromElement(e),this.options=c.apply(this.options),e&&e.is("input")){var f=a(this.get("amdBase")+"compat/inputData");this.options.dataAdapter=d.Decorate(this.options.dataAdapter,f)}}return e.prototype.fromElement=function(a){var c=["select2"];null==this.options.multiple&&(this.options.multiple=a.prop("multiple")),null==this.options.disabled&&(this.options.disabled=a.prop("disabled")),null==this.options.language&&(a.prop("lang")?this.options.language=a.prop("lang").toLowerCase():a.closest("[lang]").prop("lang")&&(this.options.language=a.closest("[lang]").prop("lang"))),null==this.options.dir&&(a.prop("dir")?this.options.dir=a.prop("dir"):a.closest("[dir]").prop("dir")?this.options.dir=a.closest("[dir]").prop("dir"):this.options.dir="ltr"),a.prop("disabled",this.options.disabled),a.prop("multiple",this.options.multiple),a.data("select2Tags")&&(this.options.debug&&window.console&&console.warn&&console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'),a.data("data",a.data("select2Tags")),a.data("tags",!0)),a.data("ajaxUrl")&&(this.options.debug&&window.console&&console.warn&&console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."),a.attr("ajax--url",a.data("ajaxUrl")),a.data("ajax--url",a.data("ajaxUrl")));var e={};e=b.fn.jquery&&"1."==b.fn.jquery.substr(0,2)&&a[0].dataset?b.extend(!0,{},a[0].dataset,a.data()):a.data();var f=b.extend(!0,{},e);f=d._convertData(f);for(var g in f)b.inArray(g,c)>-1||(b.isPlainObject(this.options[g])?b.extend(this.options[g],f[g]):this.options[g]=f[g]);return this},e.prototype.get=function(a){return this.options[a]},e.prototype.set=function(a,b){this.options[a]=b},e}),b.define("select2/core",["jquery","./options","./utils","./keys"],function(a,b,c,d){var e=function(a,c){null!=a.data("select2")&&a.data("select2").destroy(),this.$element=a,this.id=this._generateId(a),c=c||{},this.options=new b(c,a),e.__super__.constructor.call(this);var d=a.attr("tabindex")||0;a.data("old-tabindex",d),a.attr("tabindex","-1");var f=this.options.get("dataAdapter");this.dataAdapter=new f(a,this.options);var g=this.render();this._placeContainer(g);var h=this.options.get("selectionAdapter");this.selection=new h(a,this.options),this.$selection=this.selection.render(),this.selection.position(this.$selection,g);var i=this.options.get("dropdownAdapter");this.dropdown=new i(a,this.options),this.$dropdown=this.dropdown.render(),this.dropdown.position(this.$dropdown,g);var j=this.options.get("resultsAdapter");this.results=new j(a,this.options,this.dataAdapter),this.$results=this.results.render(),this.results.position(this.$results,this.$dropdown);var k=this;this._bindAdapters(),this._registerDomEvents(),this._registerDataEvents(),this._registerSelectionEvents(),this._registerDropdownEvents(),this._registerResultsEvents(),this._registerEvents(),this.dataAdapter.current(function(a){k.trigger("selection:update",{data:a})}),a.addClass("select2-hidden-accessible"),a.attr("aria-hidden","true"),this._syncAttributes(),a.data("select2",this)};return c.Extend(e,c.Observable),e.prototype._generateId=function(a){var b="";return b=null!=a.attr("id")?a.attr("id"):null!=a.attr("name")?a.attr("name")+"-"+c.generateChars(2):c.generateChars(4),b=b.replace(/(:|\.|\[|\]|,)/g,""),b="select2-"+b},e.prototype._placeContainer=function(a){a.insertAfter(this.$element);var b=this._resolveWidth(this.$element,this.options.get("width"));null!=b&&a.css("width",b)},e.prototype._resolveWidth=function(a,b){var c=/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;if("resolve"==b){var d=this._resolveWidth(a,"style");return null!=d?d:this._resolveWidth(a,"element")}if("element"==b){var e=a.outerWidth(!1);return e<=0?"auto":e+"px"}if("style"==b){var f=a.attr("style");if("string"!=typeof f)return null;for(var g=f.split(";"),h=0,i=g.length;h<i;h+=1){var j=g[h].replace(/\s/g,""),k=j.match(c);if(null!==k&&k.length>=1)return k[1]}return null}return b},e.prototype._bindAdapters=function(){this.dataAdapter.bind(this,this.$container),this.selection.bind(this,this.$container),this.dropdown.bind(this,this.$container),this.results.bind(this,this.$container)},e.prototype._registerDomEvents=function(){var b=this;this.$element.on("change.select2",function(){b.dataAdapter.current(function(a){b.trigger("selection:update",{data:a})})}),this.$element.on("focus.select2",function(a){b.trigger("focus",a)}),this._syncA=c.bind(this._syncAttributes,this),this._syncS=c.bind(this._syncSubtree,this),this.$element[0].attachEvent&&this.$element[0].attachEvent("onpropertychange",this._syncA);var d=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;null!=d?(this._observer=new d(function(c){a.each(c,b._syncA),a.each(c,b._syncS)}),this._observer.observe(this.$element[0],{attributes:!0,childList:!0,subtree:!1})):this.$element[0].addEventListener&&(this.$element[0].addEventListener("DOMAttrModified",b._syncA,!1),this.$element[0].addEventListener("DOMNodeInserted",b._syncS,!1),this.$element[0].addEventListener("DOMNodeRemoved",b._syncS,!1))},e.prototype._registerDataEvents=function(){var a=this;this.dataAdapter.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerSelectionEvents=function(){var b=this,c=["toggle","focus"];this.selection.on("toggle",function(){b.toggleDropdown()}),this.selection.on("focus",function(a){b.focus(a)}),this.selection.on("*",function(d,e){-1===a.inArray(d,c)&&b.trigger(d,e)})},e.prototype._registerDropdownEvents=function(){var a=this;this.dropdown.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerResultsEvents=function(){var a=this;this.results.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerEvents=function(){var a=this;this.on("open",function(){a.$container.addClass("select2-container--open")}),this.on("close",function(){a.$container.removeClass("select2-container--open")}),this.on("enable",function(){a.$container.removeClass("select2-container--disabled")}),this.on("disable",function(){a.$container.addClass("select2-container--disabled")}),this.on("blur",function(){a.$container.removeClass("select2-container--focus")}),this.on("query",function(b){a.isOpen()||a.trigger("open",{}),this.dataAdapter.query(b,function(c){a.trigger("results:all",{data:c,query:b})})}),this.on("query:append",function(b){this.dataAdapter.query(b,function(c){a.trigger("results:append",{data:c,query:b})})}),this.on("keypress",function(b){var c=b.which;a.isOpen()?c===d.ESC||c===d.TAB||c===d.UP&&b.altKey?(a.close(),b.preventDefault()):c===d.ENTER?(a.trigger("results:select",{}),b.preventDefault()):c===d.SPACE&&b.ctrlKey?(a.trigger("results:toggle",{}),b.preventDefault()):c===d.UP?(a.trigger("results:previous",{}),b.preventDefault()):c===d.DOWN&&(a.trigger("results:next",{}),b.preventDefault()):(c===d.ENTER||c===d.SPACE||c===d.DOWN&&b.altKey)&&(a.open(),b.preventDefault())})},e.prototype._syncAttributes=function(){this.options.set("disabled",this.$element.prop("disabled")),this.options.get("disabled")?(this.isOpen()&&this.close(),this.trigger("disable",{})):this.trigger("enable",{})},e.prototype._syncSubtree=function(a,b){var c=!1,d=this;if(!a||!a.target||"OPTION"===a.target.nodeName||"OPTGROUP"===a.target.nodeName){if(b)if(b.addedNodes&&b.addedNodes.length>0)for(var e=0;e<b.addedNodes.length;e++){var f=b.addedNodes[e];f.selected&&(c=!0)}else b.removedNodes&&b.removedNodes.length>0&&(c=!0);else c=!0;c&&this.dataAdapter.current(function(a){d.trigger("selection:update",{data:a})})}},e.prototype.trigger=function(a,b){var c=e.__super__.trigger,d={open:"opening",close:"closing",select:"selecting",unselect:"unselecting"};if(void 0===b&&(b={}),a in d){var f=d[a],g={prevented:!1,name:a,args:b};if(c.call(this,f,g),g.prevented)return void(b.prevented=!0)}c.call(this,a,b)},e.prototype.toggleDropdown=function(){this.options.get("disabled")||(this.isOpen()?this.close():this.open())},e.prototype.open=function(){this.isOpen()||this.trigger("query",{})},e.prototype.close=function(){this.isOpen()&&this.trigger("close",{})},e.prototype.isOpen=function(){return this.$container.hasClass("select2-container--open")},e.prototype.hasFocus=function(){return this.$container.hasClass("select2-container--focus")},e.prototype.focus=function(a){this.hasFocus()||(this.$container.addClass("select2-container--focus"),this.trigger("focus",{}))},e.prototype.enable=function(a){this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'),null!=a&&0!==a.length||(a=[!0]);var b=!a[0];this.$element.prop("disabled",b)},e.prototype.data=function(){this.options.get("debug")&&arguments.length>0&&window.console&&console.warn&&console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');var a=[];return this.dataAdapter.current(function(b){a=b}),a},e.prototype.val=function(b){if(this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'),null==b||0===b.length)return this.$element.val();var c=b[0];a.isArray(c)&&(c=a.map(c,function(a){return a.toString()})),this.$element.val(c).trigger("change")},e.prototype.destroy=function(){this.$container.remove(),this.$element[0].detachEvent&&this.$element[0].detachEvent("onpropertychange",this._syncA),null!=this._observer?(this._observer.disconnect(),this._observer=null):this.$element[0].removeEventListener&&(this.$element[0].removeEventListener("DOMAttrModified",this._syncA,!1),this.$element[0].removeEventListener("DOMNodeInserted",this._syncS,!1),this.$element[0].removeEventListener("DOMNodeRemoved",this._syncS,!1)),this._syncA=null,this._syncS=null,this.$element.off(".select2"),this.$element.attr("tabindex",this.$element.data("old-tabindex")),this.$element.removeClass("select2-hidden-accessible"),this.$element.attr("aria-hidden","false"),this.$element.removeData("select2"),this.dataAdapter.destroy(),this.selection.destroy(),this.dropdown.destroy(),this.results.destroy(),this.dataAdapter=null,this.selection=null,this.dropdown=null,this.results=null},e.prototype.render=function(){var b=a('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');return b.attr("dir",this.options.get("dir")),this.$container=b,this.$container.addClass("select2-container--"+this.options.get("theme")),b.data("element",this.$element),b},e}),b.define("select2/compat/utils",["jquery"],function(a){function b(b,c,d){var e,f,g=[];e=a.trim(b.attr("class")),e&&(e=""+e,a(e.split(/\s+/)).each(function(){0===this.indexOf("select2-")&&g.push(this)})),e=a.trim(c.attr("class")),e&&(e=""+e,a(e.split(/\s+/)).each(function(){0!==this.indexOf("select2-")&&null!=(f=d(this))&&g.push(f)})),b.attr("class",g.join(" "))}return{syncCssClasses:b}}),b.define("select2/compat/containerCss",["jquery","./utils"],function(a,b){function c(a){return null}function d(){}return d.prototype.render=function(d){var e=d.call(this),f=this.options.get("containerCssClass")||"";a.isFunction(f)&&(f=f(this.$element));var g=this.options.get("adaptContainerCssClass");if(g=g||c,-1!==f.indexOf(":all:")){f=f.replace(":all:","");var h=g;g=function(a){var b=h(a);return null!=b?b+" "+a:a}}var i=this.options.get("containerCss")||{};return a.isFunction(i)&&(i=i(this.$element)),b.syncCssClasses(e,this.$element,g),e.css(i),e.addClass(f),e},d}),b.define("select2/compat/dropdownCss",["jquery","./utils"],function(a,b){function c(a){return null}function d(){}return d.prototype.render=function(d){var e=d.call(this),f=this.options.get("dropdownCssClass")||"";a.isFunction(f)&&(f=f(this.$element));var g=this.options.get("adaptDropdownCssClass");if(g=g||c,-1!==f.indexOf(":all:")){f=f.replace(":all:","");var h=g;g=function(a){var b=h(a);return null!=b?b+" "+a:a}}var i=this.options.get("dropdownCss")||{};return a.isFunction(i)&&(i=i(this.$element)),b.syncCssClasses(e,this.$element,g),e.css(i),e.addClass(f),e},d}),b.define("select2/compat/initSelection",["jquery"],function(a){function b(a,b,c){c.get("debug")&&window.console&&console.warn&&console.warn("Select2: The `initSelection` option has been deprecated in favor of a custom data adapter that overrides the `current` method. This method is now called multiple times instead of a single time when the instance is initialized. Support will be removed for the `initSelection` option in future versions of Select2"),this.initSelection=c.get("initSelection"),this._isInitialized=!1,a.call(this,b,c)}return b.prototype.current=function(b,c){var d=this;if(this._isInitialized)return void b.call(this,c);this.initSelection.call(null,this.$element,function(b){d._isInitialized=!0,a.isArray(b)||(b=[b]),c(b)})},b}),b.define("select2/compat/inputData",["jquery"],function(a){function b(a,b,c){this._currentData=[],this._valueSeparator=c.get("valueSeparator")||",","hidden"===b.prop("type")&&c.get("debug")&&console&&console.warn&&console.warn("Select2: Using a hidden input with Select2 is no longer supported and may stop working in the future. It is recommended to use a `<select>` element instead."),a.call(this,b,c)}return b.prototype.current=function(b,c){function d(b,c){var e=[];return b.selected||-1!==a.inArray(b.id,c)?(b.selected=!0,e.push(b)):b.selected=!1,b.children&&e.push.apply(e,d(b.children,c)),e}for(var e=[],f=0;f<this._currentData.length;f++){var g=this._currentData[f];e.push.apply(e,d(g,this.$element.val().split(this._valueSeparator)))}c(e)},b.prototype.select=function(b,c){if(this.options.get("multiple")){var d=this.$element.val();d+=this._valueSeparator+c.id,this.$element.val(d),this.$element.trigger("change")}else this.current(function(b){a.map(b,function(a){a.selected=!1})}),this.$element.val(c.id),this.$element.trigger("change")},b.prototype.unselect=function(a,b){var c=this;b.selected=!1,this.current(function(a){for(var d=[],e=0;e<a.length;e++){var f=a[e];b.id!=f.id&&d.push(f.id)}c.$element.val(d.join(c._valueSeparator)),c.$element.trigger("change")})},b.prototype.query=function(a,b,c){for(var d=[],e=0;e<this._currentData.length;e++){var f=this._currentData[e],g=this.matches(b,f);null!==g&&d.push(g)}c({results:d})},b.prototype.addOptions=function(b,c){var d=a.map(c,function(b){return a.data(b[0],"data")});this._currentData.push.apply(this._currentData,d)},b}),b.define("select2/compat/matcher",["jquery"],function(a){function b(b){function c(c,d){var e=a.extend(!0,{},d);if(null==c.term||""===a.trim(c.term))return e;if(d.children){for(var f=d.children.length-1;f>=0;f--){var g=d.children[f];b(c.term,g.text,g)||e.children.splice(f,1)}if(e.children.length>0)return e}return b(c.term,d.text,d)?e:null}return c}return b}),b.define("select2/compat/query",[],function(){function a(a,b,c){c.get("debug")&&window.console&&console.warn&&console.warn("Select2: The `query` option has been deprecated in favor of a custom data adapter that overrides the `query` method. Support will be removed for the `query` option in future versions of Select2."),a.call(this,b,c)}return a.prototype.query=function(a,b,c){b.callback=c,this.options.get("query").call(null,b)},a}),b.define("select2/dropdown/attachContainer",[],function(){function a(a,b,c){a.call(this,b,c)}return a.prototype.position=function(a,b,c){c.find(".dropdown-wrapper").append(b),b.addClass("select2-dropdown--below"),c.addClass("select2-container--below")},a}),b.define("select2/dropdown/stopPropagation",[],function(){function a(){}return a.prototype.bind=function(a,b,c){a.call(this,b,c);var d=["blur","change","click","dblclick","focus","focusin","focusout","input","keydown","keyup","keypress","mousedown","mouseenter","mouseleave","mousemove","mouseover","mouseup","search","touchend","touchstart"];this.$dropdown.on(d.join(" "),function(a){a.stopPropagation()})},a}),b.define("select2/selection/stopPropagation",[],function(){function a(){}return a.prototype.bind=function(a,b,c){a.call(this,b,c);var d=["blur","change","click","dblclick","focus","focusin","focusout","input","keydown","keyup","keypress","mousedown","mouseenter","mouseleave","mousemove","mouseover","mouseup","search","touchend","touchstart"];this.$selection.on(d.join(" "),function(a){a.stopPropagation()})},a}),function(c){"function"==typeof b.define&&b.define.amd?b.define("jquery-mousewheel",["jquery"],c):"object"==typeof exports?module.exports=c:c(a)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||n<f)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120==0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})}),b.define("jquery.select2",["jquery","jquery-mousewheel","./select2/core","./select2/defaults"],function(a,b,c,d){if(null==a.fn.select2){var e=["open","close","destroy"];a.fn.select2=function(b){if("object"==typeof(b=b||{}))return this.each(function(){var d=a.extend(!0,{},b);new c(a(this),d)}),this;if("string"==typeof b){var d,f=Array.prototype.slice.call(arguments,1);return this.each(function(){var c=a(this).data("select2");null==c&&window.console&&console.error&&console.error("The select2('"+b+"') method was called on an element that is not using Select2."),d=c[b].apply(c,f)}),a.inArray(b,e)>-1?this:d}throw new Error("Invalid arguments for Select2: "+b)}}return null==a.fn.select2.defaults&&(a.fn.select2.defaults=d),c}),{define:b.define,require:b.require}}(),c=b.require("jquery.select2");return a.fn.select2.amd=b,c});





























/* script magnificPopup */





/*! Magnific Popup - v1.0.0 - 2015-09-17
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2015 Dmitry Semenov; */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):window.jQuery||window.Zepto)}(function(a){var b,c,d,e,f,g,h="Close",i="BeforeClose",j="AfterClose",k="BeforeAppend",l="MarkupParse",m="Open",n="Change",o="mfp",p="."+o,q="mfp-ready",r="mfp-removing",s="mfp-prevent-close",t=function(){},u=!!window.jQuery,v=a(window),w=function(a,c){b.ev.on(o+a+p,c)},x=function(b,c,d,e){var f=document.createElement("div");return f.className="mfp-"+b,d&&(f.innerHTML=d),e?c&&c.appendChild(f):(f=a(f),c&&f.appendTo(c)),f},y=function(c,d){b.ev.triggerHandler(o+c,d),b.st.callbacks&&(c=c.charAt(0).toLowerCase()+c.slice(1),b.st.callbacks[c]&&b.st.callbacks[c].apply(b,a.isArray(d)?d:[d]))},z=function(c){return c===g&&b.currTemplate.closeBtn||(b.currTemplate.closeBtn=a(b.st.closeMarkup.replace("%title%",b.st.tClose)),g=c),b.currTemplate.closeBtn},A=function(){a.magnificPopup.instance||(b=new t,b.init(),a.magnificPopup.instance=b)},B=function(){var a=document.createElement("p").style,b=["ms","O","Moz","Webkit"];if(void 0!==a.transition)return!0;for(;b.length;)if(b.pop()+"Transition"in a)return!0;return!1};t.prototype={constructor:t,init:function(){var c=navigator.appVersion;b.isIE7=-1!==c.indexOf("MSIE 7."),b.isIE8=-1!==c.indexOf("MSIE 8."),b.isLowIE=b.isIE7||b.isIE8,b.isAndroid=/android/gi.test(c),b.isIOS=/iphone|ipad|ipod/gi.test(c),b.supportsTransition=B(),b.probablyMobile=b.isAndroid||b.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),d=a(document),b.popupsCache={}},open:function(c){var e;if(c.isObj===!1){b.items=c.items.toArray(),b.index=0;var g,h=c.items;for(e=0;e<h.length;e++)if(g=h[e],g.parsed&&(g=g.el[0]),g===c.el[0]){b.index=e;break}}else b.items=a.isArray(c.items)?c.items:[c.items],b.index=c.index||0;if(b.isOpen)return void b.updateItemHTML();b.types=[],f="",c.mainEl&&c.mainEl.length?b.ev=c.mainEl.eq(0):b.ev=d,c.key?(b.popupsCache[c.key]||(b.popupsCache[c.key]={}),b.currTemplate=b.popupsCache[c.key]):b.currTemplate={},b.st=a.extend(!0,{},a.magnificPopup.defaults,c),b.fixedContentPos="auto"===b.st.fixedContentPos?!b.probablyMobile:b.st.fixedContentPos,b.st.modal&&(b.st.closeOnContentClick=!1,b.st.closeOnBgClick=!1,b.st.showCloseBtn=!1,b.st.enableEscapeKey=!1),b.bgOverlay||(b.bgOverlay=x("bg").on("click"+p,function(){b.close()}),b.wrap=x("wrap").attr("tabindex",-1).on("click"+p,function(a){b._checkIfClose(a.target)&&b.close()}),b.container=x("container",b.wrap)),b.contentContainer=x("content"),b.st.preloader&&(b.preloader=x("preloader",b.container,b.st.tLoading));var i=a.magnificPopup.modules;for(e=0;e<i.length;e++){var j=i[e];j=j.charAt(0).toUpperCase()+j.slice(1),b["init"+j].call(b)}y("BeforeOpen"),b.st.showCloseBtn&&(b.st.closeBtnInside?(w(l,function(a,b,c,d){c.close_replaceWith=z(d.type)}),f+=" mfp-close-btn-in"):b.wrap.append(z())),b.st.alignTop&&(f+=" mfp-align-top"),b.fixedContentPos?b.wrap.css({overflow:b.st.overflowY,overflowX:"hidden",overflowY:b.st.overflowY}):b.wrap.css({top:v.scrollTop(),position:"absolute"}),(b.st.fixedBgPos===!1||"auto"===b.st.fixedBgPos&&!b.fixedContentPos)&&b.bgOverlay.css({height:d.height(),position:"absolute"}),b.st.enableEscapeKey&&d.on("keyup"+p,function(a){27===a.keyCode&&b.close()}),v.on("resize"+p,function(){b.updateSize()}),b.st.closeOnContentClick||(f+=" mfp-auto-cursor"),f&&b.wrap.addClass(f);var k=b.wH=v.height(),n={};if(b.fixedContentPos&&b._hasScrollBar(k)){var o=b._getScrollbarSize();o&&(n.marginRight=o)}b.fixedContentPos&&(b.isIE7?a("body, html").css("overflow","hidden"):n.overflow="hidden");var r=b.st.mainClass;return b.isIE7&&(r+=" mfp-ie7"),r&&b._addClassToMFP(r),b.updateItemHTML(),y("BuildControls"),a("html").css(n),b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo||a(document.body)),b._lastFocusedEl=document.activeElement,setTimeout(function(){b.content?(b._addClassToMFP(q),b._setFocus()):b.bgOverlay.addClass(q),d.on("focusin"+p,b._onFocusIn)},16),b.isOpen=!0,b.updateSize(k),y(m),c},close:function(){b.isOpen&&(y(i),b.isOpen=!1,b.st.removalDelay&&!b.isLowIE&&b.supportsTransition?(b._addClassToMFP(r),setTimeout(function(){b._close()},b.st.removalDelay)):b._close())},_close:function(){y(h);var c=r+" "+q+" ";if(b.bgOverlay.detach(),b.wrap.detach(),b.container.empty(),b.st.mainClass&&(c+=b.st.mainClass+" "),b._removeClassFromMFP(c),b.fixedContentPos){var e={marginRight:""};b.isIE7?a("body, html").css("overflow",""):e.overflow="",a("html").css(e)}d.off("keyup"+p+" focusin"+p),b.ev.off(p),b.wrap.attr("class","mfp-wrap").removeAttr("style"),b.bgOverlay.attr("class","mfp-bg"),b.container.attr("class","mfp-container"),!b.st.showCloseBtn||b.st.closeBtnInside&&b.currTemplate[b.currItem.type]!==!0||b.currTemplate.closeBtn&&b.currTemplate.closeBtn.detach(),b._lastFocusedEl&&a(b._lastFocusedEl).focus(),b.currItem=null,b.content=null,b.currTemplate=null,b.prevHeight=0,y(j)},updateSize:function(a){if(b.isIOS){var c=document.documentElement.clientWidth/window.innerWidth,d=window.innerHeight*c;b.wrap.css("height",d),b.wH=d}else b.wH=a||v.height();b.fixedContentPos||b.wrap.css("height",b.wH),y("Resize")},updateItemHTML:function(){var c=b.items[b.index];b.contentContainer.detach(),b.content&&b.content.detach(),c.parsed||(c=b.parseEl(b.index));var d=c.type;if(y("BeforeChange",[b.currItem?b.currItem.type:"",d]),b.currItem=c,!b.currTemplate[d]){var f=b.st[d]?b.st[d].markup:!1;y("FirstMarkupParse",f),f?b.currTemplate[d]=a(f):b.currTemplate[d]=!0}e&&e!==c.type&&b.container.removeClass("mfp-"+e+"-holder");var g=b["get"+d.charAt(0).toUpperCase()+d.slice(1)](c,b.currTemplate[d]);b.appendContent(g,d),c.preloaded=!0,y(n,c),e=c.type,b.container.prepend(b.contentContainer),y("AfterChange")},appendContent:function(a,c){b.content=a,a?b.st.showCloseBtn&&b.st.closeBtnInside&&b.currTemplate[c]===!0?b.content.find(".mfp-close").length||b.content.append(z()):b.content=a:b.content="",y(k),b.container.addClass("mfp-"+c+"-holder"),b.contentContainer.append(b.content)},parseEl:function(c){var d,e=b.items[c];if(e.tagName?e={el:a(e)}:(d=e.type,e={data:e,src:e.src}),e.el){for(var f=b.types,g=0;g<f.length;g++)if(e.el.hasClass("mfp-"+f[g])){d=f[g];break}e.src=e.el.attr("data-mfp-src"),e.src||(e.src=e.el.attr("href"))}return e.type=d||b.st.type||"inline",e.index=c,e.parsed=!0,b.items[c]=e,y("ElementParse",e),b.items[c]},addGroup:function(a,c){var d=function(d){d.mfpEl=this,b._openClick(d,a,c)};c||(c={});var e="click.magnificPopup";c.mainEl=a,c.items?(c.isObj=!0,a.off(e).on(e,d)):(c.isObj=!1,c.delegate?a.off(e).on(e,c.delegate,d):(c.items=a,a.off(e).on(e,d)))},_openClick:function(c,d,e){var f=void 0!==e.midClick?e.midClick:a.magnificPopup.defaults.midClick;if(f||!(2===c.which||c.ctrlKey||c.metaKey||c.altKey||c.shiftKey)){var g=void 0!==e.disableOn?e.disableOn:a.magnificPopup.defaults.disableOn;if(g)if(a.isFunction(g)){if(!g.call(b))return!0}else if(v.width()<g)return!0;c.type&&(c.preventDefault(),b.isOpen&&c.stopPropagation()),e.el=a(c.mfpEl),e.delegate&&(e.items=d.find(e.delegate)),b.open(e)}},updateStatus:function(a,d){if(b.preloader){c!==a&&b.container.removeClass("mfp-s-"+c),d||"loading"!==a||(d=b.st.tLoading);var e={status:a,text:d};y("UpdateStatus",e),a=e.status,d=e.text,b.preloader.html(d),b.preloader.find("a").on("click",function(a){a.stopImmediatePropagation()}),b.container.addClass("mfp-s-"+a),c=a}},_checkIfClose:function(c){if(!a(c).hasClass(s)){var d=b.st.closeOnContentClick,e=b.st.closeOnBgClick;if(d&&e)return!0;if(!b.content||a(c).hasClass("mfp-close")||b.preloader&&c===b.preloader[0])return!0;if(c===b.content[0]||a.contains(b.content[0],c)){if(d)return!0}else if(e&&a.contains(document,c))return!0;return!1}},_addClassToMFP:function(a){b.bgOverlay.addClass(a),b.wrap.addClass(a)},_removeClassFromMFP:function(a){this.bgOverlay.removeClass(a),b.wrap.removeClass(a)},_hasScrollBar:function(a){return(b.isIE7?d.height():document.body.scrollHeight)>(a||v.height())},_setFocus:function(){(b.st.focus?b.content.find(b.st.focus).eq(0):b.wrap).focus()},_onFocusIn:function(c){return c.target===b.wrap[0]||a.contains(b.wrap[0],c.target)?void 0:(b._setFocus(),!1)},_parseMarkup:function(b,c,d){var e;d.data&&(c=a.extend(d.data,c)),y(l,[b,c,d]),a.each(c,function(a,c){if(void 0===c||c===!1)return!0;if(e=a.split("_"),e.length>1){var d=b.find(p+"-"+e[0]);if(d.length>0){var f=e[1];"replaceWith"===f?d[0]!==c[0]&&d.replaceWith(c):"img"===f?d.is("img")?d.attr("src",c):d.replaceWith('<img src="'+c+'" class="'+d.attr("class")+'" />'):d.attr(e[1],c)}}else b.find(p+"-"+a).html(c)})},_getScrollbarSize:function(){if(void 0===b.scrollbarSize){var a=document.createElement("div");a.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(a),b.scrollbarSize=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return b.scrollbarSize}},a.magnificPopup={instance:null,proto:t.prototype,modules:[],open:function(b,c){return A(),b=b?a.extend(!0,{},b):{},b.isObj=!0,b.index=c||0,this.instance.open(b)},close:function(){return a.magnificPopup.instance&&a.magnificPopup.instance.close()},registerModule:function(b,c){c.options&&(a.magnificPopup.defaults[b]=c.options),a.extend(this.proto,c.proto),this.modules.push(b)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading..."}},a.fn.magnificPopup=function(c){A();var d=a(this);if("string"==typeof c)if("open"===c){var e,f=u?d.data("magnificPopup"):d[0].magnificPopup,g=parseInt(arguments[1],10)||0;f.items?e=f.items[g]:(e=d,f.delegate&&(e=e.find(f.delegate)),e=e.eq(g)),b._openClick({mfpEl:e},d,f)}else b.isOpen&&b[c].apply(b,Array.prototype.slice.call(arguments,1));else c=a.extend(!0,{},c),u?d.data("magnificPopup",c):d[0].magnificPopup=c,b.addGroup(d,c);return d};var C,D,E,F="inline",G=function(){E&&(D.after(E.addClass(C)).detach(),E=null)};a.magnificPopup.registerModule(F,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){b.types.push(F),w(h+"."+F,function(){G()})},getInline:function(c,d){if(G(),c.src){var e=b.st.inline,f=a(c.src);if(f.length){var g=f[0].parentNode;g&&g.tagName&&(D||(C=e.hiddenClass,D=x(C),C="mfp-"+C),E=f.after(D).detach().removeClass(C)),b.updateStatus("ready")}else b.updateStatus("error",e.tNotFound),f=a("<div>");return c.inlineElement=f,f}return b.updateStatus("ready"),b._parseMarkup(d,{},c),d}}});var H,I="ajax",J=function(){H&&a(document.body).removeClass(H)},K=function(){J(),b.req&&b.req.abort()};a.magnificPopup.registerModule(I,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){b.types.push(I),H=b.st.ajax.cursor,w(h+"."+I,K),w("BeforeChange."+I,K)},getAjax:function(c){H&&a(document.body).addClass(H),b.updateStatus("loading");var d=a.extend({url:c.src,success:function(d,e,f){var g={data:d,xhr:f};y("ParseAjax",g),b.appendContent(a(g.data),I),c.finished=!0,J(),b._setFocus(),setTimeout(function(){b.wrap.addClass(q)},16),b.updateStatus("ready"),y("AjaxContentAdded")},error:function(){J(),c.finished=c.loadError=!0,b.updateStatus("error",b.st.ajax.tError.replace("%url%",c.src))}},b.st.ajax.settings);return b.req=a.ajax(d),""}}});var L,M=function(c){if(c.data&&void 0!==c.data.title)return c.data.title;var d=b.st.image.titleSrc;if(d){if(a.isFunction(d))return d.call(b,c);if(c.el)return c.el.attr(d)||""}return""};a.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var c=b.st.image,d=".image";b.types.push("image"),w(m+d,function(){"image"===b.currItem.type&&c.cursor&&a(document.body).addClass(c.cursor)}),w(h+d,function(){c.cursor&&a(document.body).removeClass(c.cursor),v.off("resize"+p)}),w("Resize"+d,b.resizeImage),b.isLowIE&&w("AfterChange",b.resizeImage)},resizeImage:function(){var a=b.currItem;if(a&&a.img&&b.st.image.verticalFit){var c=0;b.isLowIE&&(c=parseInt(a.img.css("padding-top"),10)+parseInt(a.img.css("padding-bottom"),10)),a.img.css("max-height",b.wH-c)}},_onImageHasSize:function(a){a.img&&(a.hasSize=!0,L&&clearInterval(L),a.isCheckingImgSize=!1,y("ImageHasSize",a),a.imgHidden&&(b.content&&b.content.removeClass("mfp-loading"),a.imgHidden=!1))},findImageSize:function(a){var c=0,d=a.img[0],e=function(f){L&&clearInterval(L),L=setInterval(function(){return d.naturalWidth>0?void b._onImageHasSize(a):(c>200&&clearInterval(L),c++,void(3===c?e(10):40===c?e(50):100===c&&e(500)))},f)};e(1)},getImage:function(c,d){var e=0,f=function(){c&&(c.img[0].complete?(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("ready")),c.hasSize=!0,c.loaded=!0,y("ImageLoadComplete")):(e++,200>e?setTimeout(f,100):g()))},g=function(){c&&(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("error",h.tError.replace("%url%",c.src))),c.hasSize=!0,c.loaded=!0,c.loadError=!0)},h=b.st.image,i=d.find(".mfp-img");if(i.length){var j=document.createElement("img");j.className="mfp-img",c.el&&c.el.find("img").length&&(j.alt=c.el.find("img").attr("alt")),c.img=a(j).on("load.mfploader",f).on("error.mfploader",g),j.src=c.src,i.is("img")&&(c.img=c.img.clone()),j=c.img[0],j.naturalWidth>0?c.hasSize=!0:j.width||(c.hasSize=!1)}return b._parseMarkup(d,{title:M(c),img_replaceWith:c.img},c),b.resizeImage(),c.hasSize?(L&&clearInterval(L),c.loadError?(d.addClass("mfp-loading"),b.updateStatus("error",h.tError.replace("%url%",c.src))):(d.removeClass("mfp-loading"),b.updateStatus("ready")),d):(b.updateStatus("loading"),c.loading=!0,c.hasSize||(c.imgHidden=!0,d.addClass("mfp-loading"),b.findImageSize(c)),d)}}});var N,O=function(){return void 0===N&&(N=void 0!==document.createElement("p").style.MozTransform),N};a.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(a){return a.is("img")?a:a.find("img")}},proto:{initZoom:function(){var a,c=b.st.zoom,d=".zoom";if(c.enabled&&b.supportsTransition){var e,f,g=c.duration,j=function(a){var b=a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),d="all "+c.duration/1e3+"s "+c.easing,e={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},f="transition";return e["-webkit-"+f]=e["-moz-"+f]=e["-o-"+f]=e[f]=d,b.css(e),b},k=function(){b.content.css("visibility","visible")};w("BuildControls"+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.content.css("visibility","hidden"),a=b._getItemToZoom(),!a)return void k();f=j(a),f.css(b._getOffset()),b.wrap.append(f),e=setTimeout(function(){f.css(b._getOffset(!0)),e=setTimeout(function(){k(),setTimeout(function(){f.remove(),a=f=null,y("ZoomAnimationEnded")},16)},g)},16)}}),w(i+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.st.removalDelay=g,!a){if(a=b._getItemToZoom(),!a)return;f=j(a)}f.css(b._getOffset(!0)),b.wrap.append(f),b.content.css("visibility","hidden"),setTimeout(function(){f.css(b._getOffset())},16)}}),w(h+d,function(){b._allowZoom()&&(k(),f&&f.remove(),a=null)})}},_allowZoom:function(){return"image"===b.currItem.type},_getItemToZoom:function(){return b.currItem.hasSize?b.currItem.img:!1},_getOffset:function(c){var d;d=c?b.currItem.img:b.st.zoom.opener(b.currItem.el||b.currItem);var e=d.offset(),f=parseInt(d.css("padding-top"),10),g=parseInt(d.css("padding-bottom"),10);e.top-=a(window).scrollTop()-f;var h={width:d.width(),height:(u?d.innerHeight():d[0].offsetHeight)-g-f};return O()?h["-moz-transform"]=h.transform="translate("+e.left+"px,"+e.top+"px)":(h.left=e.left,h.top=e.top),h}}});var P="iframe",Q="//about:blank",R=function(a){if(b.currTemplate[P]){var c=b.currTemplate[P].find("iframe");c.length&&(a||(c[0].src=Q),b.isIE8&&c.css("display",a?"block":"none"))}};a.magnificPopup.registerModule(P,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){b.types.push(P),w("BeforeChange",function(a,b,c){b!==c&&(b===P?R():c===P&&R(!0))}),w(h+"."+P,function(){R()})},getIframe:function(c,d){var e=c.src,f=b.st.iframe;a.each(f.patterns,function(){return e.indexOf(this.index)>-1?(this.id&&(e="string"==typeof this.id?e.substr(e.lastIndexOf(this.id)+this.id.length,e.length):this.id.call(this,e)),e=this.src.replace("%id%",e),!1):void 0});var g={};return f.srcAction&&(g[f.srcAction]=e),b._parseMarkup(d,g,c),b.updateStatus("ready"),d}}});var S=function(a){var c=b.items.length;return a>c-1?a-c:0>a?c+a:a},T=function(a,b,c){return a.replace(/%curr%/gi,b+1).replace(/%total%/gi,c)};a.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var c=b.st.gallery,e=".mfp-gallery",g=Boolean(a.fn.mfpFastClick);return b.direction=!0,c&&c.enabled?(f+=" mfp-gallery",w(m+e,function(){c.navigateByImgClick&&b.wrap.on("click"+e,".mfp-img",function(){return b.items.length>1?(b.next(),!1):void 0}),d.on("keydown"+e,function(a){37===a.keyCode?b.prev():39===a.keyCode&&b.next()})}),w("UpdateStatus"+e,function(a,c){c.text&&(c.text=T(c.text,b.currItem.index,b.items.length))}),w(l+e,function(a,d,e,f){var g=b.items.length;e.counter=g>1?T(c.tCounter,f.index,g):""}),w("BuildControls"+e,function(){if(b.items.length>1&&c.arrows&&!b.arrowLeft){var d=c.arrowMarkup,e=b.arrowLeft=a(d.replace(/%title%/gi,c.tPrev).replace(/%dir%/gi,"left")).addClass(s),f=b.arrowRight=a(d.replace(/%title%/gi,c.tNext).replace(/%dir%/gi,"right")).addClass(s),h=g?"mfpFastClick":"click";e[h](function(){b.prev()}),f[h](function(){b.next()}),b.isIE7&&(x("b",e[0],!1,!0),x("a",e[0],!1,!0),x("b",f[0],!1,!0),x("a",f[0],!1,!0)),b.container.append(e.add(f))}}),w(n+e,function(){b._preloadTimeout&&clearTimeout(b._preloadTimeout),b._preloadTimeout=setTimeout(function(){b.preloadNearbyImages(),b._preloadTimeout=null},16)}),void w(h+e,function(){d.off(e),b.wrap.off("click"+e),b.arrowLeft&&g&&b.arrowLeft.add(b.arrowRight).destroyMfpFastClick(),b.arrowRight=b.arrowLeft=null})):!1},next:function(){b.direction=!0,b.index=S(b.index+1),b.updateItemHTML()},prev:function(){b.direction=!1,b.index=S(b.index-1),b.updateItemHTML()},goTo:function(a){b.direction=a>=b.index,b.index=a,b.updateItemHTML()},preloadNearbyImages:function(){var a,c=b.st.gallery.preload,d=Math.min(c[0],b.items.length),e=Math.min(c[1],b.items.length);for(a=1;a<=(b.direction?e:d);a++)b._preloadItem(b.index+a);for(a=1;a<=(b.direction?d:e);a++)b._preloadItem(b.index-a)},_preloadItem:function(c){if(c=S(c),!b.items[c].preloaded){var d=b.items[c];d.parsed||(d=b.parseEl(c)),y("LazyLoad",d),"image"===d.type&&(d.img=a('<img class="mfp-img" />').on("load.mfploader",function(){d.hasSize=!0}).on("error.mfploader",function(){d.hasSize=!0,d.loadError=!0,y("LazyLoadError",d)}).attr("src",d.src)),d.preloaded=!0}}}});var U="retina";a.magnificPopup.registerModule(U,{options:{replaceSrc:function(a){return a.src.replace(/\.\w+$/,function(a){return"@2x"+a})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var a=b.st.retina,c=a.ratio;c=isNaN(c)?c():c,c>1&&(w("ImageHasSize."+U,function(a,b){b.img.css({"max-width":b.img[0].naturalWidth/c,width:"100%"})}),w("ElementParse."+U,function(b,d){d.src=a.replaceSrc(d,c)}))}}}}),function(){var b=1e3,c="ontouchstart"in window,d=function(){v.off("touchmove"+f+" touchend"+f)},e="mfpFastClick",f="."+e;a.fn.mfpFastClick=function(e){return a(this).each(function(){var g,h=a(this);if(c){var i,j,k,l,m,n;h.on("touchstart"+f,function(a){l=!1,n=1,m=a.originalEvent?a.originalEvent.touches[0]:a.touches[0],j=m.clientX,k=m.clientY,v.on("touchmove"+f,function(a){m=a.originalEvent?a.originalEvent.touches:a.touches,n=m.length,m=m[0],(Math.abs(m.clientX-j)>10||Math.abs(m.clientY-k)>10)&&(l=!0,d())}).on("touchend"+f,function(a){d(),l||n>1||(g=!0,a.preventDefault(),clearTimeout(i),i=setTimeout(function(){g=!1},b),e())})})}h.on("click"+f,function(){g||e()})})},a.fn.destroyMfpFastClick=function(){a(this).off("touchstart"+f+" click"+f),c&&v.off("touchmove"+f+" touchend"+f)}}(),A()});





























/* script custom */


(function($) {

    "use strict";

    $(window).on("load", function() {

		/* ----------------------------------------------------------- */
		/*  BITCOIN PRELOADER
		/* ----------------------------------------------------------- */

        if ($("#preloader")[0]) {
            $("#preloader").delay(500).fadeTo(500, 0, function() {
                $(this).remove();
            });
        }

    });

    $(document).ready(function() {

		/* ----------------------------------------------------------- */
		/*  REMOVE # FROM URL
		/* ----------------------------------------------------------- */

		$("a[href='#']").on("click", (function(e) {
			e.preventDefault();
		}));

		/* ----------------------------------------------------------- */
		/*  FIXED HEADER ON SCROLL
		/* ----------------------------------------------------------- */

		var navsite = $("#site-navigation");
		if (navsite.length) {
			var offset = $("#site-navigation").offset().top;
		}
        $(document).scroll(function() {
            var scrollTop = $(document).scrollTop();
            if (scrollTop > offset) {
                $("#site-navigation").addClass("fixed");

            } else {
                $("#site-navigation").removeClass("fixed");
            }
        });

		/* ----------------------------------------------------------- */
		/*  ADD HEIGHT TO NAVBAR IN MOBILE DEVICES
		/* ----------------------------------------------------------- */

		$(".navbar-collapse").css({ maxHeight: $(window).height() - $(".navbar-header").height() + "px" });

		/* ----------------------------------------------------------- */
		/*  BOOTSTRAP CAROUSEL
		/* ----------------------------------------------------------- */

		$("#main-slide").carousel({
			pause: true,
			interval: 100000,
		});

		/* ----------------------------------------------------------- */
		/*  BACK TO TOP
		/* ----------------------------------------------------------- */

        $(window).scroll(function() {
            if ($(this).scrollTop() > 800) {
                $("#back-to-top").addClass("show-back-to-top");
            } else {
                $("#back-to-top").removeClass("show-back-to-top");
            }
        });
        $("#back-to-top").on("click", function() {
            $("html, body").animate({
                scrollTop: 0
            }, 800);
            return false;
        });

		/* ----------------------------------------------------------- */
		/*  TESTIMONIAL CAROUSEL
		/* ----------------------------------------------------------- */

		$("#carousel-testimonials").carousel({
			wrap:true,
			pause: true,
			interval: 20000
		});

		/* ----------------------------------------------------------- */
		/*  REFRESH 503 PAGE
		/* ----------------------------------------------------------- */

		$("#refresh").on("click", function() {
			location.reload();
		});

		/* ----------------------------------------------------------- */
		/*  TESTIMONIAL CAROUSEL TOUCH OPTIMIZED [ MAIN SLIDER ]
		/* ----------------------------------------------------------- */

        var cr = $("#main-slide");
        cr.on("touchstart", function(event) {
            var xClick = event.originalEvent.touches[0].pageX;
            $(this).one("touchmove", function(event) {
                var xMove = event.originalEvent.touches[0].pageX;
                if (Math.floor(xClick - xMove) > 5) {
                    cr.carousel("next");
                } else if (Math.floor(xClick - xMove) < -5) {
                    cr.carousel("prev");
                }
            });
            cr.on("touchend", function() {
                $(this).off("touchmove");
            });
        });

		/* ----------------------------------------------------------- */
		/*  TESTIMONIAL CAROUSEL TOUCH OPTIMIZED [ CAROUSEL TESTIMONIALS ]
		/* ----------------------------------------------------------- */

		var ct = $("#carousel-testimonials");
        ct.on("touchstart", function(event) {
            var xClick = event.originalEvent.touches[0].pageX;
            $(this).one("touchmove", function(event) {
                var xMove = event.originalEvent.touches[0].pageX;
                if (Math.floor(xClick - xMove) > 5) {
                    ct.carousel("next");
                } else if (Math.floor(xClick - xMove) < -5) {
                    ct.carousel("prev");
                }
            });
            ct.on("touchend", function() {
                $(this).off("touchmove");
            });
        });

		/* ----------------------------------------------------------- */
		/*  WIDGET DATA FROM BITCOIN.COM
		/* ----------------------------------------------------------- */

		(function(b, i, t, C, O, I, N) {
			window.addEventListener("load", function() {
				if (b.getElementById(C)) return;
				I = b.createElement(i), N = b.getElementsByTagName(i)[0];
				I.src = t;
				I.id = C;
				N.parentNode.insertBefore(I, N);
			}, false)
		})(document, "script", "https://widgets.bitcoin.com/widget.js", "btcwdgt");

		/* ----------------------------------------------------------- */
		/*  VARIABLES FOR SELECT INPUT AND BITCOIN CALCULATOR FORM
		/* ----------------------------------------------------------- */

		var userAgent = navigator.userAgent.toLowerCase(),
        plugins = {
            selectFilter: $("#currency-select"),
            btcCalculator: $("#bitcoin-calculator"),
        };


		/* ----------------------------------------------------------- */
		/*  REPLACE OLD SELECT IN BITCOIN CALCULATOR FORM
		/* ----------------------------------------------------------- */

        if (plugins.selectFilter.length) {
            for (var i = 0; i < plugins.selectFilter.length; i++) {
                var select = $(plugins.selectFilter[i]);
                select.select2({
                    placeholder: select.attr("data-placeholder") ? select.attr("data-placeholder") : false,
                    minimumResultsForSearch: select.attr("data-minimum-results-search") ? select.attr("data-minimum-results-search") : 10,
                    maximumSelectionSize: 3,
                    dropdownCssClass: select.attr("data-dropdown-class") ? select.attr("data-dropdown-class") : ""
                });
            }
        }

		/* ----------------------------------------------------------- */
		/*  BITCOIN CALCULATOR [ WWW.BLOCKCHAIN.INFO API ]
		/* ----------------------------------------------------------- */

        if (plugins.btcCalculator.length) {

            $.getJSON("https://blockchain.info/ticker", function(btcJsonData) {
				var currencyList = [];
				var index = 0;

				for (var currency in btcJsonData) {
					currencyList.push({
						"id": index,
						"text": currency
					});
					index++;
				}

				for (var i = 0; i < plugins.btcCalculator.length; i++) {
					var btcForm = $(plugins.btcCalculator[i]),
						btcFormInput = $(btcForm.find('[name="btc-calculator-value"]')),
						btcFormOutput = $(btcForm.find('[name="btc-calculator-result"]')),
						btcFormCurrencySelect = $(btcForm.find('[name="btc-calculator-currency"]'));

					btcFormCurrencySelect.select2({
						placeholder: btcFormCurrencySelect.attr("data-placeholder") ? btcFormCurrencySelect.attr("data-placeholder") : false,
						minimumResultsForSearch: btcFormCurrencySelect.attr("data-minimum-results-search") ? btcFormCurrencySelect.attr("data-minimum-results-search") : 50,
						maximumSelectionSize: 3,
						dropdownCssClass: btcFormCurrencySelect.attr("data-dropdown-class") ? btcFormCurrencySelect.attr("data-dropdown-class") : '',
						data: currencyList
					});

					if (btcFormInput.length && btcFormOutput.length) {
						// BTC => Currency
						(function(btcFormInput, btcFormOutput, btcFormCurrencySelect) {
							var lastChanged = 'btc';

							btcFormInput.on('input', function() {
								// store current positions in variables
								var selectionStart = this.selectionStart,
									selectionEnd = this.selectionEnd;

								this.value = toCryptoCurrencyFormat(this.value);

								// restore cursor position
								this.setSelectionRange(selectionStart, selectionEnd);

								btcFormOutput.val(toCurrencyFormat('' + btcJsonData[btcFormCurrencySelect.select2('data')[0].text]["buy"] * this.value));
								lastChanged = 'btc';
							});

							// Currency => BTC
							btcFormOutput.on('input', function() {
								// store current positions in variables
								var selectionStart = this.selectionStart,
									selectionEnd = this.selectionEnd;

								this.value = toCurrencyFormat(this.value);

								// restore cursor position
								this.setSelectionRange(selectionStart, selectionEnd);

								btcFormInput.val(toCryptoCurrencyFormat('' + this.value / btcJsonData[btcFormCurrencySelect.select2('data')[0].text]["sell"]));
								lastChanged = 'currency';
							});

							btcFormInput.trigger('input');
							btcFormOutput.blur();

							btcFormCurrencySelect.on('change', function() {
								if (lastChanged === 'btc') {
									btcFormOutput.val(toCurrencyFormat('' + btcJsonData[btcFormCurrencySelect.select2('data')[0].text]["buy"] * btcFormInput.val()));
								} else {
									btcFormInput.val(toCryptoCurrencyFormat('' + btcFormOutput.val() / btcJsonData[btcFormCurrencySelect.select2('data')[0].text]["sell"]));
								}
							});
						})(btcFormInput, btcFormOutput, btcFormCurrencySelect);
					}
				}
			})
			.fail(function() {
				console.log('Error while fetching data from https://blockchain.info/ticker');
			});
		}

		function toCurrencyFormat(stringValue) {
			var value = parseFloat(stringValue.replace(/[^\d.]/g, '')).toFixed(2);
			return $.isNumeric(value) ? value : 0;
		}

		function toCryptoCurrencyFormat(stringValue) {
			var value = stringValue.replace(/[^\d.]/g, '');
			return $.isNumeric(value) ? value : 0;
		}

		/* ----------------------------------------------------------- */
		/*  PRICING TABLES SWITCH ANIMATION
		/* ----------------------------------------------------------- */

		checkScrolling($(".pricing-body"));
		$(window).on("resize", function() {
			window.requestAnimationFrame(function() {
				checkScrolling($(".pricing-body"))
			});
		});
		$(".pricing-body").on("scroll", function() {
			var selected = $(this);
			window.requestAnimationFrame(function() {
				checkScrolling(selected)
			});
		});

		function checkScrolling(tables) {
			tables.each(function() {
				var table = $(this),
					totalTableWidth = parseInt(table.children(".pricing-features").width(),10 ),
					tableViewport = parseInt(table.width(),10 );
				if (table.scrollLeft() >= totalTableWidth - tableViewport - 1) {
					table.parent("li").addClass("is-ended");
				} else {
					table.parent("li").removeClass("is-ended");
				}
			});
		}

		bouncy_filter($(".pricing-container"));

		function bouncy_filter(container) {
			container.each(function() {
				var pricing_table = $(this);
				var filter_list_container = pricing_table.children(".pricing-switcher"),
					filter_radios = filter_list_container.find("input[type='radio']"),
					pricing_table_wrapper = pricing_table.find(".pricing-wrapper");

				var table_elements = {};
				filter_radios.each(function() {
					var filter_type = $(this).val();
					table_elements[filter_type] = pricing_table_wrapper.find("li[data-type='" + filter_type + "']");
				});

				//detect input change event
				filter_radios.on("change", function(event) {
					event.preventDefault();
					//detect which radio input item was checked
					var selected_filter = $(event.target).val();

					//give higher z-index to the pricing table items selected by the radio input
					show_selected_items(table_elements[selected_filter]);

					//rotate each pricing-wrapper
					//at the end of the animation hide the not-selected pricing tables and rotate back the .pricing-wrapper

					if (!Modernizr.cssanimations) {
						hide_not_selected_items(table_elements, selected_filter);
						pricing_table_wrapper.removeClass("is-switched");
					} else {
						pricing_table_wrapper.addClass("is-switched").eq(0).one("webkitAnimationEnd oanimationend msAnimationEnd animationend", function() {
							hide_not_selected_items(table_elements, selected_filter);
							pricing_table_wrapper.removeClass("is-switched");
							//change rotation direction if .pricing-list has the .bounce-invert class
							if (pricing_table.find(".pricing-list").hasClass("bounce-invert")) pricing_table_wrapper.toggleClass("reverse-animation");
						});
					}
				});
			});
		}

		function show_selected_items(selected_elements) {
			selected_elements.addClass("is-selected");
		}

		function hide_not_selected_items(table_containers, filter) {
			$.each(table_containers, function(key, value) {
				if (key != filter) {
					$(this).removeClass("is-visible is-selected").addClass("is-hidden");

				} else {
					$(this).addClass("is-visible").removeClass("is-hidden is-selected");
				}
			});
		}

		/* ----------------------------------------------------------- */
		/*  VIDEO POP UP
		/* ----------------------------------------------------------- */
		jQuery(".mfp-youtube").magnificPopup({
			type: "iframe",
			mainClass: "mfp-fade",
			removalDelay: 0,
			preloader: false,
			fixedContentPos: false,
			iframe: {
				patterns: {
					youtube: {
						src: "https://youtube.com/embed/%id%?autoplay=1&rel=0"
					},
				}
			}
		});

		/* ----------------------------------------------------------- */
		/*  SITE SEARCH
		/* ----------------------------------------------------------- */

		$(".navbar-nav .fa-search").on("click", function() {
			//$("html, body").animate({ }, "slow");
			$(".site-search .container").toggleClass("open");
		})

		$(".site-search .close").on("click", function() {
			$(".site-search .container").removeClass("open");;
		})

		/* ----------------------------------------------------------- */
		/*  AJAX CONTACT FORM
		/* ----------------------------------------------------------- */
        //
        // $(".form-contact").on("submit", function() {
        //     $(".output_message").text("Loading...");
        //
        //     var form = $(this);
        //     $.ajax({
        //         url: form.attr("action"),
        //         method: form.attr("method"),
        //         data: form.serialize(),
        //         success: function(result) {
        //             if (result == "success") {
				// 		$(".form-contact").find(".output_message_holder").addClass("d-block");
				// 		$(".form-contact").find(".output_message").addClass("success");
        //                 $(".output_message").text("Your message has been sent successfully!");
        //             } else {
        //                 $(".form-contact").find(".output_message_holder").addClass("d-block");
				// 		$(".form-contact").find(".output_message").addClass("error");
        //                 $(".output_message").text("Error while Sending email! try later");
        //             }
        //         }
        //     });
        //
        //     return false;
        // });

		/* ----------------------------------------------------------- */
		/*  NUMBER SPINNER HORIZONTAL [ QUANTITY IN SHOPPING CART PAGE ]
		/* ----------------------------------------------------------- */

		var fieldName;
		// This button will increment the value
		$(".qtyplus").on("click", function(e){
			// Stop acting like a button
			e.preventDefault();
			// Get the field name
			fieldName = $(this).attr("data-field");
			// Get its current value
			var currentVal = parseInt($("input[name="+fieldName+"]").val(),10 );
			// If is not undefined
			if (!isNaN(currentVal)) {
				// Increment
				$("input[name="+fieldName+"]").val(currentVal + 1);
			} else {
				// Otherwise put a 0 there
				$("input[name="+fieldName+"]").val(0);
			}
		});
		// This button will decrement the value till 0
		$(".qtyminus").on("click", function(e) {
			// Stop acting like a button
			e.preventDefault();
			// Get the field name
			fieldName = $(this).attr("data-field");
			// Get its current value
			var currentVal = parseInt($("input[name="+fieldName+"]").val(),10 );
			// If it isn't undefined or its greater than 0
			if (!isNaN(currentVal) && currentVal > 1) {
				// Decrement one
				$("input[name="+fieldName+"]").val(currentVal - 1);
			} else if (currentVal == 0) {
				$("input[name="+fieldName+"]").val(1);
			}

			else {
				// Otherwise put a 1 there
				$("input[name="+fieldName+"]").val(1);
			}
		});

		/* ----------------------------------------------------------- */
		/*  TOOLTIP
		/* ----------------------------------------------------------- */

		$("[data-toggle='tooltip']").tooltip()

	});

		/* ----------------------------------------------------------- */

})(jQuery);





























/* script jquery countdown */





/*! http://keith-wood.name/countdown.html
	Countdown for jQuery v2.1.0.
	Written by Keith Wood (wood.keith{at}optusnet.com.au) January 2008.
	Available under the MIT (http://keith-wood.name/licence.html) license.
	Please attribute the author if you use it. */
  /*
!function(a){"use strict";var b="countdown",c=0,d=1,e=2,f=3,g=4,h=5,i=6;a.JQPlugin.createPlugin({name:b,defaultOptions:{until:null,since:null,timezone:null,serverSync:null,format:"dHMS",layout:"",compact:!1,padZeroes:!1,significant:0,description:"",expiryUrl:"",expiryText:"",alwaysExpire:!1,onExpiry:null,onTick:null,tickInterval:1},regionalOptions:{"":{labels:["Years","Months","Weeks","Days","Hours","Minutes","Seconds"],labels1:["Year","Month","Week","Day","Hour","Minute","Second"],compactLabels:["y","m","w","d"],whichLabels:null,digits:["0","1","2","3","4","5","6","7","8","9"],timeSeparator:":",isRTL:!1}},_rtlClass:b+"-rtl",_sectionClass:b+"-section",_amountClass:b+"-amount",_periodClass:b+"-period",_rowClass:b+"-row",_holdingClass:b+"-holding",_showClass:b+"-show",_descrClass:b+"-descr",_timerElems:[],_init:function(){function b(a){var h=a<1e12?e?window.performance.now()+window.performance.timing.navigationStart:d():a||d();h-g>=1e3&&(c._updateElems(),g=h),f(b)}var c=this;this._super(),this._serverSyncs=[];var d="function"==typeof Date.now?Date.now:function(){return(new Date).getTime()},e=window.performance&&"function"==typeof window.performance.now,f=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||null,g=0;!f||a.noRequestAnimationFrame?(a.noRequestAnimationFrame=null,a.countdown._timer=setInterval(function(){c._updateElems()},1e3)):(g=window.animationStartTime||window.webkitAnimationStartTime||window.mozAnimationStartTime||window.oAnimationStartTime||window.msAnimationStartTime||d(),f(b))},UTCDate:function(a,b,c,d,e,f,g,h){"object"==typeof b&&b instanceof Date&&(h=b.getMilliseconds(),g=b.getSeconds(),f=b.getMinutes(),e=b.getHours(),d=b.getDate(),c=b.getMonth(),b=b.getFullYear());var i=new Date;return i.setUTCFullYear(b),i.setUTCDate(1),i.setUTCMonth(c||0),i.setUTCDate(d||1),i.setUTCHours(e||0),i.setUTCMinutes((f||0)-(Math.abs(a)<30?60*a:a)),i.setUTCSeconds(g||0),i.setUTCMilliseconds(h||0),i},periodsToSeconds:function(a){return 31557600*a[0]+2629800*a[1]+604800*a[2]+86400*a[3]+3600*a[4]+60*a[5]+a[6]},resync:function(){var b=this;a("."+this._getMarker()).each(function(){var c=a.data(this,b.name);if(c.options.serverSync){for(var d=null,e=0;e<b._serverSyncs.length;e++)if(b._serverSyncs[e][0]===c.options.serverSync){d=b._serverSyncs[e];break}if(b._eqNull(d[2])){var f=a.isFunction(c.options.serverSync)?c.options.serverSync.apply(this,[]):null;d[2]=(f?(new Date).getTime()-f.getTime():0)-d[1]}c._since&&c._since.setMilliseconds(c._since.getMilliseconds()+d[2]),c._until.setMilliseconds(c._until.getMilliseconds()+d[2])}});for(var c=0;c<b._serverSyncs.length;c++)b._eqNull(b._serverSyncs[c][2])||(b._serverSyncs[c][1]+=b._serverSyncs[c][2],delete b._serverSyncs[c][2])},_instSettings:function(a,b){return{_periods:[0,0,0,0,0,0,0]}},_addElem:function(a){this._hasElem(a)||this._timerElems.push(a)},_hasElem:function(b){return a.inArray(b,this._timerElems)>-1},_removeElem:function(b){this._timerElems=a.map(this._timerElems,function(a){return a===b?null:a})},_updateElems:function(){for(var a=this._timerElems.length-1;a>=0;a--)this._updateCountdown(this._timerElems[a])},_optionsChanged:function(b,c,d){d.layout&&(d.layout=d.layout.replace(/&lt;/g,"<").replace(/&gt;/g,">")),this._resetExtraLabels(c.options,d);var e=c.options.timezone!==d.timezone;a.extend(c.options,d),this._adjustSettings(b,c,!this._eqNull(d.until)||!this._eqNull(d.since)||e);var f=new Date;(c._since&&c._since<f||c._until&&c._until>f)&&this._addElem(b[0]),this._updateCountdown(b,c)},_updateCountdown:function(b,c){if(b=b.jquery?b:a(b),c=c||this._getInst(b)){if(b.html(this._generateHTML(c)).toggleClass(this._rtlClass,c.options.isRTL),"pause"!==c._hold&&a.isFunction(c.options.onTick)){var d="lap"!==c._hold?c._periods:this._calculatePeriods(c,c._show,c.options.significant,new Date);1!==c.options.tickInterval&&this.periodsToSeconds(d)%c.options.tickInterval!==0||c.options.onTick.apply(b[0],[d])}var e="pause"!==c._hold&&(c._since?c._now.getTime()<c._since.getTime():c._now.getTime()>=c._until.getTime());if(e&&!c._expiring){if(c._expiring=!0,this._hasElem(b[0])||c.options.alwaysExpire){if(this._removeElem(b[0]),a.isFunction(c.options.onExpiry)&&c.options.onExpiry.apply(b[0],[]),c.options.expiryText){var f=c.options.layout;c.options.layout=c.options.expiryText,this._updateCountdown(b[0],c),c.options.layout=f}c.options.expiryUrl&&(window.location=c.options.expiryUrl)}c._expiring=!1}else"pause"===c._hold&&this._removeElem(b[0])}},_resetExtraLabels:function(a,b){var c=null;for(c in b)c.match(/[Ll]abels[02-9]|compactLabels1/)&&(a[c]=b[c]);for(c in a)c.match(/[Ll]abels[02-9]|compactLabels1/)&&"undefined"==typeof b[c]&&(a[c]=null)},_eqNull:function(a){return"undefined"==typeof a||null===a},_adjustSettings:function(b,c,d){for(var e=null,f=0;f<this._serverSyncs.length;f++)if(this._serverSyncs[f][0]===c.options.serverSync){e=this._serverSyncs[f][1];break}var g=null,h=null;if(this._eqNull(e)){var i=a.isFunction(c.options.serverSync)?c.options.serverSync.apply(b[0],[]):null;g=new Date,h=i?g.getTime()-i.getTime():0,this._serverSyncs.push([c.options.serverSync,h])}else g=new Date,h=c.options.serverSync?e:0;var j=c.options.timezone;j=this._eqNull(j)?-g.getTimezoneOffset():j,(d||!d&&this._eqNull(c._until)&&this._eqNull(c._since))&&(c._since=c.options.since,this._eqNull(c._since)||(c._since=this.UTCDate(j,this._determineTime(c._since,null)),c._since&&h&&c._since.setMilliseconds(c._since.getMilliseconds()+h)),c._until=this.UTCDate(j,this._determineTime(c.options.until,g)),h&&c._until.setMilliseconds(c._until.getMilliseconds()+h)),c._show=this._determineShow(c)},_preDestroy:function(a,b){this._removeElem(a[0]),a.empty()},pause:function(a){this._hold(a,"pause")},lap:function(a){this._hold(a,"lap")},resume:function(a){this._hold(a,null)},toggle:function(b){var c=a.data(b,this.name)||{};this[c._hold?"resume":"pause"](b)},toggleLap:function(b){var c=a.data(b,this.name)||{};this[c._hold?"resume":"lap"](b)},_hold:function(b,c){var d=a.data(b,this.name);if(d){if("pause"===d._hold&&!c){d._periods=d._savePeriods;var e=d._since?"-":"+";d[d._since?"_since":"_until"]=this._determineTime(e+d._periods[0]+"y"+e+d._periods[1]+"o"+e+d._periods[2]+"w"+e+d._periods[3]+"d"+e+d._periods[4]+"h"+e+d._periods[5]+"m"+e+d._periods[6]+"s"),this._addElem(b)}d._hold=c,d._savePeriods="pause"===c?d._periods:null,a.data(b,this.name,d),this._updateCountdown(b,d)}},getTimes:function(b){var c=a.data(b,this.name);return c?"pause"===c._hold?c._savePeriods:c._hold?this._calculatePeriods(c,c._show,c.options.significant,new Date):c._periods:null},_determineTime:function(a,b){var c=this,d=function(a){var b=new Date;return b.setTime(b.getTime()+1e3*a),b},e=function(a){a=a.toLowerCase();for(var b=new Date,d=b.getFullYear(),e=b.getMonth(),f=b.getDate(),g=b.getHours(),h=b.getMinutes(),i=b.getSeconds(),j=/([+-]?[0-9]+)\s*(s|m|h|d|w|o|y)?/g,k=j.exec(a);k;){switch(k[2]||"s"){case"s":i+=parseInt(k[1],10);break;case"m":h+=parseInt(k[1],10);break;case"h":g+=parseInt(k[1],10);break;case"d":f+=parseInt(k[1],10);break;case"w":f+=7*parseInt(k[1],10);break;case"o":e+=parseInt(k[1],10),f=Math.min(f,c._getDaysInMonth(d,e));break;case"y":d+=parseInt(k[1],10),f=Math.min(f,c._getDaysInMonth(d,e))}k=j.exec(a)}return new Date(d,e,f,g,h,i,0)},f=this._eqNull(a)?b:"string"==typeof a?e(a):"number"==typeof a?d(a):a;return f&&f.setMilliseconds(0),f},_getDaysInMonth:function(a,b){return 32-new Date(a,b,32).getDate()},_normalLabels:function(a){return a},_generateHTML:function(b){var j=this;b._periods=b._hold?b._periods:this._calculatePeriods(b,b._show,b.options.significant,new Date);var k=!1,l=0,m=b.options.significant,n=a.extend({},b._show),o=null;for(o=c;o<=i;o++)k=k||"?"===b._show[o]&&b._periods[o]>0,n[o]="?"!==b._show[o]||k?b._show[o]:null,l+=n[o]?1:0,m-=b._periods[o]>0?1:0;var p=[!1,!1,!1,!1,!1,!1,!1];for(o=i;o>=c;o--)b._show[o]&&(b._periods[o]?p[o]=!0:(p[o]=m>0,m--));var q=b.options.compact?b.options.compactLabels:b.options.labels,r=b.options.whichLabels||this._normalLabels,s=function(a){var c=b.options["compactLabels"+r(b._periods[a])];return n[a]?j._translateDigits(b,b._periods[a])+(c?c[a]:q[a])+" ":""},t=b.options.padZeroes?2:1,u=function(a){var c=b.options["labels"+r(b._periods[a])];return!b.options.significant&&n[a]||b.options.significant&&p[a]?'<span class="'+j._sectionClass+'"><span class="'+j._amountClass+'">'+j._minDigits(b,b._periods[a],t)+'</span><span class="'+j._periodClass+'">'+(c?c[a]:q[a])+"</span></span>":""};return b.options.layout?this._buildLayout(b,n,b.options.layout,b.options.compact,b.options.significant,p):(b.options.compact?'<span class="'+this._rowClass+" "+this._amountClass+(b._hold?" "+this._holdingClass:"")+'">'+s(c)+s(d)+s(e)+s(f)+(n[g]?this._minDigits(b,b._periods[g],2):"")+(n[h]?(n[g]?b.options.timeSeparator:"")+this._minDigits(b,b._periods[h],2):"")+(n[i]?(n[g]||n[h]?b.options.timeSeparator:"")+this._minDigits(b,b._periods[i],2):""):'<span class="'+this._rowClass+" "+this._showClass+(b.options.significant||l)+(b._hold?" "+this._holdingClass:"")+'">'+u(c)+u(d)+u(e)+u(f)+u(g)+u(h)+u(i))+"</span>"+(b.options.description?'<span class="'+this._rowClass+" "+this._descrClass+'">'+b.options.description+"</span>":"")},_buildLayout:function(b,j,k,l,m,n){for(var o=b.options[l?"compactLabels":"labels"],p=b.options.whichLabels||this._normalLabels,q=function(a){return(b.options[(l?"compactLabels":"labels")+p(b._periods[a])]||o)[a]},r=function(a,c){return b.options.digits[Math.floor(a/c)%10]},s={desc:b.options.description,sep:b.options.timeSeparator,yl:q(c),yn:this._minDigits(b,b._periods[c],1),ynn:this._minDigits(b,b._periods[c],2),ynnn:this._minDigits(b,b._periods[c],3),y1:r(b._periods[c],1),y10:r(b._periods[c],10),y100:r(b._periods[c],100),y1000:r(b._periods[c],1e3),ol:q(d),on:this._minDigits(b,b._periods[d],1),onn:this._minDigits(b,b._periods[d],2),onnn:this._minDigits(b,b._periods[d],3),o1:r(b._periods[d],1),o10:r(b._periods[d],10),o100:r(b._periods[d],100),o1000:r(b._periods[d],1e3),wl:q(e),wn:this._minDigits(b,b._periods[e],1),wnn:this._minDigits(b,b._periods[e],2),wnnn:this._minDigits(b,b._periods[e],3),w1:r(b._periods[e],1),w10:r(b._periods[e],10),w100:r(b._periods[e],100),w1000:r(b._periods[e],1e3),dl:q(f),dn:this._minDigits(b,b._periods[f],1),dnn:this._minDigits(b,b._periods[f],2),dnnn:this._minDigits(b,b._periods[f],3),d1:r(b._periods[f],1),d10:r(b._periods[f],10),d100:r(b._periods[f],100),d1000:r(b._periods[f],1e3),hl:q(g),hn:this._minDigits(b,b._periods[g],1),hnn:this._minDigits(b,b._periods[g],2),hnnn:this._minDigits(b,b._periods[g],3),h1:r(b._periods[g],1),h10:r(b._periods[g],10),h100:r(b._periods[g],100),h1000:r(b._periods[g],1e3),ml:q(h),mn:this._minDigits(b,b._periods[h],1),mnn:this._minDigits(b,b._periods[h],2),mnnn:this._minDigits(b,b._periods[h],3),m1:r(b._periods[h],1),m10:r(b._periods[h],10),m100:r(b._periods[h],100),m1000:r(b._periods[h],1e3),sl:q(i),sn:this._minDigits(b,b._periods[i],1),snn:this._minDigits(b,b._periods[i],2),snnn:this._minDigits(b,b._periods[i],3),s1:r(b._periods[i],1),s10:r(b._periods[i],10),s100:r(b._periods[i],100),s1000:r(b._periods[i],1e3)},t=k,u=c;u<=i;u++){var v="yowdhms".charAt(u),w=new RegExp("\\{"+v+"<\\}([\\s\\S]*)\\{"+v+">\\}","g");t=t.replace(w,!m&&j[u]||m&&n[u]?"$1":"")}return a.each(s,function(a,b){var c=new RegExp("\\{"+a+"\\}","g");t=t.replace(c,b)}),t},_minDigits:function(a,b,c){return b=""+b,b.length>=c?this._translateDigits(a,b):(b="0000000000"+b,this._translateDigits(a,b.substr(b.length-c)))},_translateDigits:function(a,b){return(""+b).replace(/[0-9]/g,function(b){return a.options.digits[b]})},_determineShow:function(a){var b=a.options.format,j=[];return j[c]=b.match("y")?"?":b.match("Y")?"!":null,j[d]=b.match("o")?"?":b.match("O")?"!":null,j[e]=b.match("w")?"?":b.match("W")?"!":null,j[f]=b.match("d")?"?":b.match("D")?"!":null,j[g]=b.match("h")?"?":b.match("H")?"!":null,j[h]=b.match("m")?"?":b.match("M")?"!":null,j[i]=b.match("s")?"?":b.match("S")?"!":null,j},_calculatePeriods:function(a,b,j,k){a._now=k,a._now.setMilliseconds(0);var l=new Date(a._now.getTime());a._since?k.getTime()<a._since.getTime()?a._now=k=l:k=a._since:(l.setTime(a._until.getTime()),k.getTime()>a._until.getTime()&&(a._now=k=l));var m=[0,0,0,0,0,0,0];if(b[c]||b[d]){var n=this._getDaysInMonth(k.getFullYear(),k.getMonth()),o=this._getDaysInMonth(l.getFullYear(),l.getMonth()),p=l.getDate()===k.getDate()||l.getDate()>=Math.min(n,o)&&k.getDate()>=Math.min(n,o),q=function(a){return 60*(60*a.getHours()+a.getMinutes())+a.getSeconds()},r=Math.max(0,12*(l.getFullYear()-k.getFullYear())+l.getMonth()-k.getMonth()+(l.getDate()<k.getDate()&&!p||p&&q(l)<q(k)?-1:0));m[c]=b[c]?Math.floor(r/12):0,m[d]=b[d]?r-12*m[c]:0,k=new Date(k.getTime());var s=k.getDate()===n,t=this._getDaysInMonth(k.getFullYear()+m[c],k.getMonth()+m[d]);k.getDate()>t&&k.setDate(t),k.setFullYear(k.getFullYear()+m[c]),k.setMonth(k.getMonth()+m[d]),s&&k.setDate(t)}var u=Math.floor((l.getTime()-k.getTime())/1e3),v=null,w=function(a,c){m[a]=b[a]?Math.floor(u/c):0,u-=m[a]*c};if(w(e,604800),w(f,86400),w(g,3600),w(h,60),w(i,1),u>0&&!a._since){var x=[1,12,4.3482,7,24,60,60],y=i,z=1;for(v=i;v>=c;v--)b[v]&&(m[y]>=z&&(m[y]=0,u=1),u>0&&(m[v]++,u=0,y=v,z=1)),z*=x[v]}if(j)for(v=c;v<=i;v++)j&&m[v]?j--:j||(m[v]=0);return m}})}(jQuery);
//# sourceMappingURL=jquery.countdown.min.map








*/













/* script jquery plugin */




/*! Simple JavaScript Inheritance
 * By John Resig http://ejohn.org/
 * MIT Licensed.
 */
!function(){"use strict";var a=!1;window.JQClass=function(){},JQClass.classes={},JQClass.extend=function b(c){function d(){!a&&this._init&&this._init.apply(this,arguments)}var e=this.prototype;a=!0;var f=new this;a=!1;for(var g in c)if("function"==typeof c[g]&&"function"==typeof e[g])f[g]=function(a,b){return function(){var c=this._super;this._super=function(b){return e[a].apply(this,b||[])};var d=b.apply(this,arguments);return this._super=c,d}}(g,c[g]);else if("object"==typeof c[g]&&"object"==typeof e[g]&&"defaultOptions"===g){var h,i=e[g],j=c[g],k={};for(h in i)k[h]=i[h];for(h in j)k[h]=j[h];f[g]=k}else f[g]=c[g];return d.prototype=f,d.prototype.constructor=d,d.extend=b,d}}(),/*! Abstract base class for collection plugins v1.0.2.
	Written by Keith Wood (wood.keith{at}optusnet.com.au) December 2013.
	Licensed under the MIT license (http://keith-wood.name/licence.html). */
function($){"use strict";function camelCase(a){return a.replace(/-([a-z])/g,function(a,b){return b.toUpperCase()})}JQClass.classes.JQPlugin=JQClass.extend({name:"plugin",defaultOptions:{},regionalOptions:{},deepMerge:!0,_getMarker:function(){return"is-"+this.name},_init:function(){$.extend(this.defaultOptions,this.regionalOptions&&this.regionalOptions[""]||{});var a=camelCase(this.name);$[a]=this,$.fn[a]=function(b){var c=Array.prototype.slice.call(arguments,1),d=this,e=this;return this.each(function(){if("string"==typeof b){if("_"===b[0]||!$[a][b])throw"Unknown method: "+b;var f=$[a][b].apply($[a],[this].concat(c));if(f!==d&&void 0!==f)return e=f,!1}else $[a]._attach(this,b)}),e}},setDefaults:function(a){$.extend(this.defaultOptions,a||{})},_attach:function(a,b){if(a=$(a),!a.hasClass(this._getMarker())){a.addClass(this._getMarker()),b=$.extend(this.deepMerge,{},this.defaultOptions,this._getMetadata(a),b||{});var c=$.extend({name:this.name,elem:a,options:b},this._instSettings(a,b));a.data(this.name,c),this._postAttach(a,c),this.option(a,b)}},_instSettings:function(a,b){return{}},_postAttach:function(a,b){},_getMetadata:function(elem){try{var data=elem.data(this.name.toLowerCase())||"";data=data.replace(/(\\?)'/g,function(a,b){return b?"'":'"'}).replace(/([a-zA-Z0-9]+):/g,function(a,b,c){var d=data.substring(0,c).match(/"/g);return d&&d.length%2!==0?b+":":'"'+b+'":'}).replace(/\\:/g,":"),data=$.parseJSON("{"+data+"}");for(var key in data)if(data.hasOwnProperty(key)){var value=data[key];"string"==typeof value&&value.match(/^new Date\(([-0-9,\s]*)\)$/)&&(data[key]=eval(value))}return data}catch(a){return{}}},_getInst:function(a){return $(a).data(this.name)||{}},option:function(a,b,c){a=$(a);var d=a.data(this.name),e=b||{};return!b||"string"==typeof b&&"undefined"==typeof c?(e=(d||{}).options,e&&b?e[b]:e):void(a.hasClass(this._getMarker())&&("string"==typeof b&&(e={},e[b]=c),this._optionsChanged(a,d,e),$.extend(d.options,e)))},_optionsChanged:function(a,b,c){},destroy:function(a){a=$(a),a.hasClass(this._getMarker())&&(this._preDestroy(a,this._getInst(a)),a.removeData(this.name).removeClass(this._getMarker()))},_preDestroy:function(a,b){}}),$.JQPlugin={createPlugin:function(a,b){"object"==typeof a&&(b=a,a="JQPlugin"),a=camelCase(a);var c=camelCase(b.name);JQClass.classes[c]=JQClass.classes[a].extend(b),new JQClass.classes[c]}}}(jQuery);
//# sourceMappingURL=jquery.plugin.min.map

























/* script widget */




!function t(e, n, i) {
    function r(s, a) {
        if (!n[s]) {
            if (!e[s]) {
                var l = "function" == typeof require && require;
                if (!a && l)
                    return l(s, !0);
                if (o)
                    return o(s, !0);
                var u = new Error("Cannot find module '" + s + "'");
                throw u.code = "MODULE_NOT_FOUND", u
            }
            var c = n[s] = {
                exports: {}
            };
            e[s][0].call(c.exports, function(t) {
                var n = e[s][1][t];
                return r(n ? n : t)
            }, c, c.exports, t, e, n, i)
        }
        return n[s].exports
    }
    for (var o = "function" == typeof require && require, s = 0; s < i.length; s++)
        r(i[s]);
    return r
}({
    1: [function(t, e, n) {
        function i() {
            c = !1, a.length ? u = a.concat(u) : h = -1, u.length && r()
        }
        function r() {
            if (!c) {
                var t = setTimeout(i);
                c = !0;
                for (var e = u.length; e;) {
                    for (a = u, u = []; ++h < e;)
                        a && a[h].run();
                    h = -1, e = u.length
                }
                a = null, c = !1, clearTimeout(t)
            }
        }
        function o(t, e) {
            this.fun = t, this.array = e
        }
        function s() {}
        var a,
            l = e.exports = {},
            u = [],
            c = !1,
            h = -1;
        l.nextTick = function(t) {
            var e = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++)
                    e[n - 1] = arguments[n];
            u.push(new o(t, e)), 1 !== u.length || c || setTimeout(r, 0)
        }, o.prototype.run = function() {
            this.fun.apply(null, this.array)
        }, l.title = "browser", l.browser = !0, l.env = {}, l.argv = [], l.version = "", l.versions = {}, l.on = s, l.addListener = s, l.once = s, l.off = s, l.removeListener = s, l.removeAllListeners = s, l.emit = s, l.binding = function(t) {
            throw new Error("process.binding is not supported")
        }, l.cwd = function() {
            return "/"
        }, l.chdir = function(t) {
            throw new Error("process.chdir is not supported")
        }, l.umask = function() {
            return 0
        }
    }, {}],
    2: [function(t, e, n) {
        (function(t) {
            !function(i) {
                function r(t) {
                    throw RangeError(A[t])
                }
                function o(t, e) {
                    for (var n = t.length, i = []; n--;)
                        i[n] = e(t[n]);
                    return i
                }
                function s(t, e) {
                    var n = t.split("@"),
                        i = "";
                    n.length > 1 && (i = n[0] + "@", t = n[1]), t = t.replace(O, ".");
                    var r = t.split("."),
                        s = o(r, e).join(".");
                    return i + s
                }
                function a(t) {
                    for (var e, n, i = [], r = 0, o = t.length; r < o;)
                        e = t.charCodeAt(r++), e >= 55296 && e <= 56319 && r < o ? (n = t.charCodeAt(r++), 56320 == (64512 & n) ? i.push(((1023 & e) << 10) + (1023 & n) + 65536) : (i.push(e), r--)) : i.push(e);
                    return i
                }
                function l(t) {
                    return o(t, function(t) {
                        var e = "";
                        return t > 65535 && (t -= 65536, e += Y(t >>> 10 & 1023 | 55296), t = 56320 | 1023 & t), e += Y(t)
                    }).join("")
                }
                function u(t) {
                    return t - 48 < 10 ? t - 22 : t - 65 < 26 ? t - 65 : t - 97 < 26 ? t - 97 : _
                }
                function c(t, e) {
                    return t + 22 + 75 * (t < 26) - ((0 != e) << 5)
                }
                function h(t, e, n) {
                    var i = 0;
                    for (t = n ? L(t / C) : t >> 1, t += L(t / e); t > P * S >> 1; i += _)
                        t = L(t / P);
                    return L(i + (P + 1) * t / (t + T))
                }
                function d(t) {
                    var e,
                        n,
                        i,
                        o,
                        s,
                        a,
                        c,
                        d,
                        f,
                        p,
                        m = [],
                        g = t.length,
                        y = 0,
                        v = M,
                        w = D;
                    for (n = t.lastIndexOf(N), n < 0 && (n = 0), i = 0; i < n; ++i)
                        t.charCodeAt(i) >= 128 && r("not-basic"), m.push(t.charCodeAt(i));
                    for (o = n > 0 ? n + 1 : 0; o < g;) {
                        for (s = y, a = 1, c = _; o >= g && r("invalid-input"), d = u(t.charCodeAt(o++)), (d >= _ || d > L((x - y) / a)) && r("overflow"), y += d * a, f = c <= w ? k : c >= w + S ? S : c - w, !(d < f); c += _)
                            p = _ - f, a > L(x / p) && r("overflow"), a *= p;
                        e = m.length + 1, w = h(y - s, e, 0 == s), L(y / e) > x - v && r("overflow"), v += L(y / e), y %= e, m.splice(y++, 0, v)
                    }
                    return l(m)
                }
                function f(t) {
                    var e,
                        n,
                        i,
                        o,
                        s,
                        l,
                        u,
                        d,
                        f,
                        p,
                        m,
                        g,
                        y,
                        v,
                        w,
                        b = [];
                    for (t = a(t), g = t.length, e = M, n = 0, s = D, l = 0; l < g; ++l)
                        m = t[l], m < 128 && b.push(Y(m));
                    for (i = o = b.length, o && b.push(N); i < g;) {
                        for (u = x, l = 0; l < g; ++l)
                            m = t[l], m >= e && m < u && (u = m);
                        for (y = i + 1, u - e > L((x - n) / y) && r("overflow"), n += (u - e) * y, e = u, l = 0; l < g; ++l)
                            if (m = t[l], m < e && ++n > x && r("overflow"), m == e) {
                                for (d = n, f = _; p = f <= s ? k : f >= s + S ? S : f - s, !(d < p); f += _)
                                    w = d - p, v = _ - p, b.push(Y(c(p + w % v, 0))), d = L(w / v);
                                b.push(Y(c(d, 0))), s = h(n, y, i == o), n = 0, ++i
                            }
                        ++n, ++e
                    }
                    return b.join("")
                }
                function p(t) {
                    return s(t, function(t) {
                        return j.test(t) ? d(t.slice(4).toLowerCase()) : t
                    })
                }
                function m(t) {
                    return s(t, function(t) {
                        return E.test(t) ? "xn--" + f(t) : t
                    })
                }
                var g = "object" == typeof n && n && !n.nodeType && n,
                    y = "object" == typeof e && e && !e.nodeType && e,
                    v = "object" == typeof t && t;
                v.global !== v && v.window !== v && v.self !== v || (i = v);
                var w,
                    b,
                    x = 2147483647,
                    _ = 36,
                    k = 1,
                    S = 26,
                    T = 38,
                    C = 700,
                    D = 72,
                    M = 128,
                    N = "-",
                    j = /^xn--/,
                    E = /[^\x20-\x7E]/,
                    O = /[\x2E\u3002\uFF0E\uFF61]/g,
                    A = {
                        overflow: "Overflow: input needs wider integers to process",
                        "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                        "invalid-input": "Invalid input"
                    },
                    P = _ - k,
                    L = Math.floor,
                    Y = String.fromCharCode;
                if (w = {
                    version: "1.3.2",
                    ucs2: {
                        decode: a,
                        encode: l
                    },
                    decode: d,
                    encode: f,
                    toASCII: m,
                    toUnicode: p
                }, "function" == typeof define && "object" == typeof define.amd && define.amd)
                    define("punycode", function() {
                        return w
                    });
                else if (g && y)
                    if (e.exports == g)
                        y.exports = w;
                    else
                        for (b in w)
                            w.hasOwnProperty(b) && (g[b] = w[b]);
                else
                    i.punycode = w
            }(this)
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    3: [function(t, e, n) {
        "use strict";
        function i(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }
        e.exports = function(t, e, n, o) {
            e = e || "&", n = n || "=";
            var s = {};
            if ("string" != typeof t || 0 === t.length)
                return s;
            var a = /\+/g;
            t = t.split(e);
            var l = 1e3;
            o && "number" == typeof o.maxKeys && (l = o.maxKeys);
            var u = t.length;
            l > 0 && u > l && (u = l);
            for (var c = 0; c < u; ++c) {
                var h,
                    d,
                    f,
                    p,
                    m = t[c].replace(a, "%20"),
                    g = m.indexOf(n);
                g >= 0 ? (h = m.substr(0, g), d = m.substr(g + 1)) : (h = m, d = ""), f = decodeURIComponent(h), p = decodeURIComponent(d), i(s, f) ? r(s[f]) ? s[f].push(p) : s[f] = [s[f], p] : s[f] = p
            }
            return s
        };
        var r = Array.isArray || function(t) {
            return "[object Array]" === Object.prototype.toString.call(t)
        }
    }, {}],
    4: [function(t, e, n) {
        "use strict";
        function i(t, e) {
            if (t.map)
                return t.map(e);
            for (var n = [], i = 0; i < t.length; i++)
                n.push(e(t[i], i));
            return n
        }
        var r = function(t) {
            switch (typeof t) {
            case "string":
                return t;
            case "boolean":
                return t ? "true" : "false";
            case "number":
                return isFinite(t) ? t : "";
            default:
                return ""
            }
        };
        e.exports = function(t, e, n, a) {
            return e = e || "&", n = n || "=", null === t && (t = void 0), "object" == typeof t ? i(s(t), function(s) {
                var a = encodeURIComponent(r(s)) + n;
                return o(t[s]) ? i(t[s], function(t) {
                    return a + encodeURIComponent(r(t))
                }).join(e) : a + encodeURIComponent(r(t[s]))
            }).join(e) : a ? encodeURIComponent(r(a)) + n + encodeURIComponent(r(t)) : ""
        };
        var o = Array.isArray || function(t) {
                return "[object Array]" === Object.prototype.toString.call(t)
            },
            s = Object.keys || function(t) {
                var e = [];
                for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && e.push(n);
                return e
            }
    }, {}],
    5: [function(t, e, n) {
        "use strict";
        n.decode = n.parse = t("./decode"), n.encode = n.stringify = t("./encode")
    }, {
        "./decode": 3,
        "./encode": 4
    }],
    6: [function(t, e, n) {
        function i() {
            this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null
        }
        function r(t, e, n) {
            if (t && u(t) && t instanceof i)
                return t;
            var r = new i;
            return r.parse(t, e, n), r
        }
        function o(t) {
            return l(t) && (t = r(t)), t instanceof i ? t.format() : i.prototype.format.call(t)
        }
        function s(t, e) {
            return r(t, !1, !0).resolve(e)
        }
        function a(t, e) {
            return t ? r(t, !1, !0).resolveObject(e) : e
        }
        function l(t) {
            return "string" == typeof t
        }
        function u(t) {
            return "object" == typeof t && null !== t
        }
        function c(t) {
            return null === t
        }
        function h(t) {
            return null == t
        }
        var d = t("punycode");
        n.parse = r, n.resolve = s, n.resolveObject = a, n.format = o, n.Url = i;
        var f = /^([a-z0-9.+-]+:)/i,
            p = /:[0-9]*$/,
            m = ["<", ">", '"', "`", " ", "\r", "\n", "\t"],
            g = ["{", "}", "|", "\\", "^", "`"].concat(m),
            y = ["'"].concat(g),
            v = ["%", "/", "?", ";", "#"].concat(y),
            w = ["/", "?", "#"],
            b = 255,
            x = /^[a-z0-9A-Z_-]{0,63}$/,
            _ = /^([a-z0-9A-Z_-]{0,63})(.*)$/,
            k = {
                javascript: !0,
                "javascript:": !0
            },
            S = {
                javascript: !0,
                "javascript:": !0
            },
            T = {
                http: !0,
                https: !0,
                ftp: !0,
                gopher: !0,
                file: !0,
                "http:": !0,
                "https:": !0,
                "ftp:": !0,
                "gopher:": !0,
                "file:": !0
            },
            C = t("querystring");
        i.prototype.parse = function(t, e, n) {
            if (!l(t))
                throw new TypeError("Parameter 'url' must be a string, not " + typeof t);
            var i = t;
            i = i.trim();
            var r = f.exec(i);
            if (r) {
                r = r[0];
                var o = r.toLowerCase();
                this.protocol = o, i = i.substr(r.length)
            }
            if (n || r || i.match(/^\/\/[^@\/]+@[^@\/]+/)) {
                var s = "//" === i.substr(0, 2);
                !s || r && S[r] || (i = i.substr(2), this.slashes = !0)
            }
            if (!S[r] && (s || r && !T[r])) {
                for (var a = -1, u = 0; u < w.length; u++) {
                    var c = i.indexOf(w[u]);
                    c !== -1 && (a === -1 || c < a) && (a = c)
                }
                var h,
                    p;
                p = a === -1 ? i.lastIndexOf("@") : i.lastIndexOf("@", a), p !== -1 && (h = i.slice(0, p), i = i.slice(p + 1), this.auth = decodeURIComponent(h)), a = -1;
                for (var u = 0; u < v.length; u++) {
                    var c = i.indexOf(v[u]);
                    c !== -1 && (a === -1 || c < a) && (a = c)
                }
                a === -1 && (a = i.length), this.host = i.slice(0, a), i = i.slice(a), this.parseHost(), this.hostname = this.hostname || "";
                var m = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
                if (!m)
                    for (var g = this.hostname.split(/\./), u = 0, D = g.length; u < D; u++) {
                        var M = g[u];
                        if (M && !M.match(x)) {
                            for (var N = "", j = 0, E = M.length; j < E; j++)
                                N += M.charCodeAt(j) > 127 ? "x" : M[j];
                            if (!N.match(x)) {
                                var O = g.slice(0, u),
                                    A = g.slice(u + 1),
                                    P = M.match(_);
                                P && (O.push(P[1]), A.unshift(P[2])), A.length && (i = "/" + A.join(".") + i), this.hostname = O.join(".");
                                break
                            }
                        }
                    }
                if (this.hostname.length > b ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), !m) {
                    for (var L = this.hostname.split("."), Y = [], u = 0; u < L.length; ++u) {
                        var F = L[u];
                        Y.push(F.match(/[^A-Za-z0-9_-]/) ? "xn--" + d.encode(F) : F)
                    }
                    this.hostname = Y.join(".")
                }
                var R = this.port ? ":" + this.port : "",
                    H = this.hostname || "";
                this.host = H + R, this.href += this.host, m && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== i[0] && (i = "/" + i))
            }
            if (!k[o])
                for (var u = 0, D = y.length; u < D; u++) {
                    var W = y[u],
                        q = encodeURIComponent(W);
                    q === W && (q = escape(W)), i = i.split(W).join(q)
                }
            var I = i.indexOf("#");
            I !== -1 && (this.hash = i.substr(I), i = i.slice(0, I));
            var B = i.indexOf("?");
            if (B !== -1 ? (this.search = i.substr(B), this.query = i.substr(B + 1), e && (this.query = C.parse(this.query)), i = i.slice(0, B)) : e && (this.search = "", this.query = {}), i && (this.pathname = i), T[o] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
                var R = this.pathname || "",
                    F = this.search || "";
                this.path = R + F
            }
            return this.href = this.format(), this
        }, i.prototype.format = function() {
            var t = this.auth || "";
            t && (t = encodeURIComponent(t), t = t.replace(/%3A/i, ":"), t += "@");
            var e = this.protocol || "",
                n = this.pathname || "",
                i = this.hash || "",
                r = !1,
                o = "";
            this.host ? r = t + this.host : this.hostname && (r = t + (this.hostname.indexOf(":") === -1 ? this.hostname : "[" + this.hostname + "]"), this.port && (r += ":" + this.port)), this.query && u(this.query) && Object.keys(this.query).length && (o = C.stringify(this.query));
            var s = this.search || o && "?" + o || "";
            return e && ":" !== e.substr(-1) && (e += ":"), this.slashes || (!e || T[e]) && r !== !1 ? (r = "//" + (r || ""), n && "/" !== n.charAt(0) && (n = "/" + n)) : r || (r = ""), i && "#" !== i.charAt(0) && (i = "#" + i), s && "?" !== s.charAt(0) && (s = "?" + s), n = n.replace(/[?#]/g, function(t) {
                return encodeURIComponent(t)
            }), s = s.replace("#", "%23"), e + r + n + s + i
        }, i.prototype.resolve = function(t) {
            return this.resolveObject(r(t, !1, !0)).format()
        }, i.prototype.resolveObject = function(t) {
            if (l(t)) {
                var e = new i;
                e.parse(t, !1, !0), t = e
            }
            var n = new i;
            if (Object.keys(this).forEach(function(t) {
                n[t] = this[t]
            }, this), n.hash = t.hash, "" === t.href)
                return n.href = n.format(), n;
            if (t.slashes && !t.protocol)
                return Object.keys(t).forEach(function(e) {
                    "protocol" !== e && (n[e] = t[e])
                }), T[n.protocol] && n.hostname && !n.pathname && (n.path = n.pathname = "/"), n.href = n.format(), n;
            if (t.protocol && t.protocol !== n.protocol) {
                if (!T[t.protocol])
                    return Object.keys(t).forEach(function(e) {
                        n[e] = t[e]
                    }), n.href = n.format(), n;
                if (n.protocol = t.protocol, t.host || S[t.protocol])
                    n.pathname = t.pathname;
                else {
                    for (var r = (t.pathname || "").split("/"); r.length && !(t.host = r.shift());)
                        ;
                    t.host || (t.host = ""), t.hostname || (t.hostname = ""), "" !== r[0] && r.unshift(""), r.length < 2 && r.unshift(""), n.pathname = r.join("/")
                }
                if (n.search = t.search, n.query = t.query, n.host = t.host || "", n.auth = t.auth, n.hostname = t.hostname || t.host, n.port = t.port, n.pathname || n.search) {
                    var o = n.pathname || "",
                        s = n.search || "";
                    n.path = o + s
                }
                return n.slashes = n.slashes || t.slashes, n.href = n.format(), n
            }
            var a = n.pathname && "/" === n.pathname.charAt(0),
                u = t.host || t.pathname && "/" === t.pathname.charAt(0),
                d = u || a || n.host && t.pathname,
                f = d,
                p = n.pathname && n.pathname.split("/") || [],
                r = t.pathname && t.pathname.split("/") || [],
                m = n.protocol && !T[n.protocol];
            if (m && (n.hostname = "", n.port = null, n.host && ("" === p[0] ? p[0] = n.host : p.unshift(n.host)), n.host = "", t.protocol && (t.hostname = null, t.port = null, t.host && ("" === r[0] ? r[0] = t.host : r.unshift(t.host)), t.host = null), d = d && ("" === r[0] || "" === p[0])), u)
                n.host = t.host || "" === t.host ? t.host : n.host, n.hostname = t.hostname || "" === t.hostname ? t.hostname : n.hostname, n.search = t.search, n.query = t.query, p = r;
            else if (r.length)
                p || (p = []), p.pop(), p = p.concat(r), n.search = t.search, n.query = t.query;
            else if (!h(t.search)) {
                if (m) {
                    n.hostname = n.host = p.shift();
                    var g = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@");
                    g && (n.auth = g.shift(), n.host = n.hostname = g.shift())
                }
                return n.search = t.search, n.query = t.query, c(n.pathname) && c(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.href = n.format(), n
            }
            if (!p.length)
                return n.pathname = null, n.search ? n.path = "/" + n.search : n.path = null, n.href = n.format(), n;
            for (var y = p.slice(-1)[0], v = (n.host || t.host) && ("." === y || ".." === y) || "" === y, w = 0, b = p.length; b >= 0; b--)
                y = p[b], "." == y ? p.splice(b, 1) : ".." === y ? (p.splice(b, 1), w++) : w && (p.splice(b, 1), w--);
            if (!d && !f)
                for (; w--; w)
                    p.unshift("..");
            !d || "" === p[0] || p[0] && "/" === p[0].charAt(0) || p.unshift(""), v && "/" !== p.join("/").substr(-1) && p.push("");
            var x = "" === p[0] || p[0] && "/" === p[0].charAt(0);
            if (m) {
                n.hostname = n.host = x ? "" : p.length ? p.shift() : "";
                var g = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@");
                g && (n.auth = g.shift(), n.host = n.hostname = g.shift())
            }
            return d = d || n.host && p.length, d && !x && p.unshift(""), p.length ? n.pathname = p.join("/") : (n.pathname = null, n.path = null), c(n.pathname) && c(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.auth = t.auth || n.auth, n.slashes = n.slashes || t.slashes, n.href = n.format(), n
        }, i.prototype.parseHost = function() {
            var t = this.host,
                e = p.exec(t);
            e && (e = e[0], ":" !== e && (this.port = e.substr(1)), t = t.substr(0, t.length - e.length)), t && (this.hostname = t)
        }
    }, {
        punycode: 2,
        querystring: 5
    }],
    7: [function(t, e, n) {
        !function(t, n) {
            "object" == typeof e && "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function(t) {
                if (!t.document)
                    throw new Error("jQuery requires a window with a document");
                return n(t)
            } : n(t)
        }("undefined" != typeof window ? window : this, function(t, e) {
            function n(t) {
                var e = !!t && "length" in t && t.length,
                    n = ft.type(t);
                return "function" !== n && !ft.isWindow(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
            }
            function i(t, e, n) {
                if (ft.isFunction(e))
                    return ft.grep(t, function(t, i) {
                        return !!e.call(t, i, t) !== n
                    });
                if (e.nodeType)
                    return ft.grep(t, function(t) {
                        return t === e !== n
                    });
                if ("string" == typeof e) {
                    if (kt.test(e))
                        return ft.filter(e, t, n);
                    e = ft.filter(e, t)
                }
                return ft.grep(t, function(t) {
                    return ft.inArray(t, e) > -1 !== n
                })
            }
            function r(t, e) {
                do t = t[e];
                while (t && 1 !== t.nodeType);
                return t
            }
            function o(t) {
                var e = {};
                return ft.each(t.match(Nt) || [], function(t, n) {
                    e[n] = !0
                }), e
            }
            function s() {
                it.addEventListener ? (it.removeEventListener("DOMContentLoaded", a), t.removeEventListener("load", a)) : (it.detachEvent("onreadystatechange", a), t.detachEvent("onload", a))
            }
            function a() {
                (it.addEventListener || "load" === t.event.type || "complete" === it.readyState) && (s(), ft.ready())
            }
            function l(t, e, n) {
                if (void 0 === n && 1 === t.nodeType) {
                    var i = "data-" + e.replace(Pt, "-$1").toLowerCase();
                    if (n = t.getAttribute(i), "string" == typeof n) {
                        try {
                            n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : At.test(n) ? ft.parseJSON(n) : n)
                        } catch (t) {}
                        ft.data(t, e, n)
                    } else
                        n = void 0
                }
                return n
            }
            function u(t) {
                var e;
                for (e in t)
                    if (("data" !== e || !ft.isEmptyObject(t[e])) && "toJSON" !== e)
                        return !1;
                return !0
            }
            function c(t, e, n, i) {
                if (Ot(t)) {
                    var r,
                        o,
                        s = ft.expando,
                        a = t.nodeType,
                        l = a ? ft.cache : t,
                        u = a ? t[s] : t[s] && s;
                    if (u && l[u] && (i || l[u].data) || void 0 !== n || "string" != typeof e)
                        return u || (u = a ? t[s] = nt.pop() || ft.guid++ : s), l[u] || (l[u] = a ? {} : {
                            toJSON: ft.noop
                        }), "object" != typeof e && "function" != typeof e || (i ? l[u] = ft.extend(l[u], e) : l[u].data = ft.extend(l[u].data, e)), o = l[u], i || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[ft.camelCase(e)] = n), "string" == typeof e ? (r = o[e], null == r && (r = o[ft.camelCase(e)])) : r = o, r
                }
            }
            function h(t, e, n) {
                if (Ot(t)) {
                    var i,
                        r,
                        o = t.nodeType,
                        s = o ? ft.cache : t,
                        a = o ? t[ft.expando] : ft.expando;
                    if (s[a]) {
                        if (e && (i = n ? s[a] : s[a].data)) {
                            ft.isArray(e) ? e = e.concat(ft.map(e, ft.camelCase)) : e in i ? e = [e] : (e = ft.camelCase(e), e = e in i ? [e] : e.split(" ")), r = e.length;
                            for (; r--;)
                                delete i[e[r]];
                            if (n ? !u(i) : !ft.isEmptyObject(i))
                                return
                        }
                        (n || (delete s[a].data, u(s[a]))) && (o ? ft.cleanData([t], !0) : ht.deleteExpando || s != s.window ? delete s[a] : s[a] = void 0)
                    }
                }
            }
            function d(t, e, n, i) {
                var r,
                    o = 1,
                    s = 20,
                    a = i ? function() {
                        return i.cur()
                    } : function() {
                        return ft.css(t, e, "")
                    },
                    l = a(),
                    u = n && n[3] || (ft.cssNumber[e] ? "" : "px"),
                    c = (ft.cssNumber[e] || "px" !== u && +l) && Yt.exec(ft.css(t, e));
                if (c && c[3] !== u) {
                    u = u || c[3], n = n || [], c = +l || 1;
                    do o = o || ".5", c /= o, ft.style(t, e, c + u);
                    while (o !== (o = a() / l) && 1 !== o && --s)
                }
                return n && (c = +c || +l || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = r)), r
            }
            function f(t) {
                var e = Ut.split("|"),
                    n = t.createDocumentFragment();
                if (n.createElement)
                    for (; e.length;)
                        n.createElement(e.pop());
                return n
            }
            function p(t, e) {
                var n,
                    i,
                    r = 0,
                    o = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e || "*") : "undefined" != typeof t.querySelectorAll ? t.querySelectorAll(e || "*") : void 0;
                if (!o)
                    for (o = [], n = t.childNodes || t; null != (i = n[r]); r++)
                        !e || ft.nodeName(i, e) ? o.push(i) : ft.merge(o, p(i, e));
                return void 0 === e || e && ft.nodeName(t, e) ? ft.merge([t], o) : o
            }
            function m(t, e) {
                for (var n, i = 0; null != (n = t[i]); i++)
                    ft._data(n, "globalEval", !e || ft._data(e[i], "globalEval"))
            }
            function g(t) {
                Wt.test(t.type) && (t.defaultChecked = t.checked)
            }
            function y(t, e, n, i, r) {
                for (var o, s, a, l, u, c, h, d = t.length, y = f(e), v = [], w = 0; w < d; w++)
                    if (s = t[w], s || 0 === s)
                        if ("object" === ft.type(s))
                            ft.merge(v, s.nodeType ? [s] : s);
                        else if ($t.test(s)) {
                            for (l = l || y.appendChild(e.createElement("div")), u = (qt.exec(s) || ["", ""])[1].toLowerCase(), h = zt[u] || zt._default, l.innerHTML = h[1] + ft.htmlPrefilter(s) + h[2], o = h[0]; o--;)
                                l = l.lastChild;
                            if (!ht.leadingWhitespace && Bt.test(s) && v.push(e.createTextNode(Bt.exec(s)[0])), !ht.tbody)
                                for (s = "table" !== u || Gt.test(s) ? "<table>" !== h[1] || Gt.test(s) ? 0 : l : l.firstChild, o = s && s.childNodes.length; o--;)
                                    ft.nodeName(c = s.childNodes[o], "tbody") && !c.childNodes.length && s.removeChild(c);
                            for (ft.merge(v, l.childNodes), l.textContent = ""; l.firstChild;)
                                l.removeChild(l.firstChild);
                            l = y.lastChild
                        } else
                            v.push(e.createTextNode(s));
                for (l && y.removeChild(l), ht.appendChecked || ft.grep(p(v, "input"), g), w = 0; s = v[w++];)
                    if (i && ft.inArray(s, i) > -1)
                        r && r.push(s);
                    else if (a = ft.contains(s.ownerDocument, s), l = p(y.appendChild(s), "script"), a && m(l), n)
                        for (o = 0; s = l[o++];)
                            It.test(s.type || "") && n.push(s);
                return l = null, y
            }
            function v() {
                return !0
            }
            function w() {
                return !1
            }
            function b() {
                try {
                    return it.activeElement
                } catch (t) {}
            }
            function x(t, e, n, i, r, o) {
                var s,
                    a;
                if ("object" == typeof e) {
                    "string" != typeof n && (i = i || n, n = void 0);
                    for (a in e)
                        x(t, a, n, i, e[a], o);
                    return t
                }
                if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), r === !1)
                    r = w;
                else if (!r)
                    return t;
                return 1 === o && (s = r, r = function(t) {
                    return ft().off(t), s.apply(this, arguments)
                }, r.guid = s.guid || (s.guid = ft.guid++)), t.each(function() {
                    ft.event.add(this, e, r, i, n)
                })
            }
            function _(t, e) {
                return ft.nodeName(t, "table") && ft.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
            }
            function k(t) {
                return t.type = (null !== ft.find.attr(t, "type")) + "/" + t.type, t
            }
            function S(t) {
                var e = re.exec(t.type);
                return e ? t.type = e[1] : t.removeAttribute("type"), t
            }
            function T(t, e) {
                if (1 === e.nodeType && ft.hasData(t)) {
                    var n,
                        i,
                        r,
                        o = ft._data(t),
                        s = ft._data(e, o),
                        a = o.events;
                    if (a) {
                        delete s.handle, s.events = {};
                        for (n in a)
                            for (i = 0, r = a[n].length; i < r; i++)
                                ft.event.add(e, n, a[n][i])
                    }
                    s.data && (s.data = ft.extend({}, s.data))
                }
            }
            function C(t, e) {
                var n,
                    i,
                    r;
                if (1 === e.nodeType) {
                    if (n = e.nodeName.toLowerCase(), !ht.noCloneEvent && e[ft.expando]) {
                        r = ft._data(e);
                        for (i in r.events)
                            ft.removeEvent(e, i, r.handle);
                        e.removeAttribute(ft.expando)
                    }
                    "script" === n && e.text !== t.text ? (k(e).text = t.text, S(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML), ht.html5Clone && t.innerHTML && !ft.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && Wt.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
                }
            }
            function D(t, e, n, i) {
                e = ot.apply([], e);
                var r,
                    o,
                    s,
                    a,
                    l,
                    u,
                    c = 0,
                    h = t.length,
                    d = h - 1,
                    f = e[0],
                    m = ft.isFunction(f);
                if (m || h > 1 && "string" == typeof f && !ht.checkClone && ie.test(f))
                    return t.each(function(r) {
                        var o = t.eq(r);
                        m && (e[0] = f.call(this, r, o.html())), D(o, e, n, i)
                    });
                if (h && (u = y(e, t[0].ownerDocument, !1, t, i), r = u.firstChild, 1 === u.childNodes.length && (u = r), r || i)) {
                    for (a = ft.map(p(u, "script"), k), s = a.length; c < h; c++)
                        o = u, c !== d && (o = ft.clone(o, !0, !0), s && ft.merge(a, p(o, "script"))), n.call(t[c], o, c);
                    if (s)
                        for (l = a[a.length - 1].ownerDocument, ft.map(a, S), c = 0; c < s; c++)
                            o = a[c], It.test(o.type || "") && !ft._data(o, "globalEval") && ft.contains(l, o) && (o.src ? ft._evalUrl && ft._evalUrl(o.src) : ft.globalEval((o.text || o.textContent || o.innerHTML || "").replace(oe, "")));
                    u = r = null
                }
                return t
            }
            function M(t, e, n) {
                for (var i, r = e ? ft.filter(e, t) : t, o = 0; null != (i = r[o]); o++)
                    n || 1 !== i.nodeType || ft.cleanData(p(i)), i.parentNode && (n && ft.contains(i.ownerDocument, i) && m(p(i, "script")), i.parentNode.removeChild(i));
                return t
            }
            function N(t, e) {
                var n = ft(e.createElement(t)).appendTo(e.body),
                    i = ft.css(n[0], "display");
                return n.detach(), i
            }
            function j(t) {
                var e = it,
                    n = ue[t];
                return n || (n = N(t, e), "none" !== n && n || (le = (le || ft("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = (le[0].contentWindow || le[0].contentDocument).document, e.write(), e.close(), n = N(t, e), le.detach()), ue[t] = n), n
            }
            function E(t, e) {
                return {
                    get: function() {
                        return t() ? void delete this.get : (this.get = e).apply(this, arguments)
                    }
                }
            }
            function O(t) {
                if (t in Se)
                    return t;
                for (var e = t.charAt(0).toUpperCase() + t.slice(1), n = ke.length; n--;)
                    if (t = ke[n] + e, t in Se)
                        return t
            }
            function A(t, e) {
                for (var n, i, r, o = [], s = 0, a = t.length; s < a; s++)
                    i = t[s], i.style && (o[s] = ft._data(i, "olddisplay"), n = i.style.display, e ? (o[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && Rt(i) && (o[s] = ft._data(i, "olddisplay", j(i.nodeName)))) : (r = Rt(i), (n && "none" !== n || !r) && ft._data(i, "olddisplay", r ? n : ft.css(i, "display"))));
                for (s = 0; s < a; s++)
                    i = t[s], i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? o[s] || "" : "none"));
                return t
            }
            function P(t, e, n) {
                var i = be.exec(e);
                return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
            }
            function L(t, e, n, i, r) {
                for (var o = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; o < 4; o += 2)
                    "margin" === n && (s += ft.css(t, n + Ft[o], !0, r)), i ? ("content" === n && (s -= ft.css(t, "padding" + Ft[o], !0, r)), "margin" !== n && (s -= ft.css(t, "border" + Ft[o] + "Width", !0, r))) : (s += ft.css(t, "padding" + Ft[o], !0, r), "padding" !== n && (s += ft.css(t, "border" + Ft[o] + "Width", !0, r)));
                return s
            }
            function Y(t, e, n) {
                var i = !0,
                    r = "width" === e ? t.offsetWidth : t.offsetHeight,
                    o = pe(t),
                    s = ht.boxSizing && "border-box" === ft.css(t, "boxSizing", !1, o);
                if (r <= 0 || null == r) {
                    if (r = me(t, e, o), (r < 0 || null == r) && (r = t.style[e]), he.test(r))
                        return r;
                    i = s && (ht.boxSizingReliable() || r === t.style[e]), r = parseFloat(r) || 0
                }
                return r + L(t, e, n || (s ? "border" : "content"), i, o) + "px"
            }
            function F(t, e, n, i, r) {
                return new F.prototype.init(t, e, n, i, r)
            }
            function R() {
                return t.setTimeout(function() {
                    Te = void 0
                }), Te = ft.now()
            }
            function H(t, e) {
                var n,
                    i = {
                        height: t
                    },
                    r = 0;
                for (e = e ? 1 : 0; r < 4; r += 2 - e)
                    n = Ft[r], i["margin" + n] = i["padding" + n] = t;
                return e && (i.opacity = i.width = t), i
            }
            function W(t, e, n) {
                for (var i, r = (B.tweeners[e] || []).concat(B.tweeners["*"]), o = 0, s = r.length; o < s; o++)
                    if (i = r[o].call(n, e, t))
                        return i
            }
            function q(t, e, n) {
                var i,
                    r,
                    o,
                    s,
                    a,
                    l,
                    u,
                    c,
                    h = this,
                    d = {},
                    f = t.style,
                    p = t.nodeType && Rt(t),
                    m = ft._data(t, "fxshow");
                n.queue || (a = ft._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
                    a.unqueued || l()
                }), a.unqueued++, h.always(function() {
                    h.always(function() {
                        a.unqueued--, ft.queue(t, "fx").length || a.empty.fire()
                    })
                })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], u = ft.css(t, "display"), c = "none" === u ? ft._data(t, "olddisplay") || j(t.nodeName) : u, "inline" === c && "none" === ft.css(t, "float") && (ht.inlineBlockNeedsLayout && "inline" !== j(t.nodeName) ? f.zoom = 1 : f.display = "inline-block")), n.overflow && (f.overflow = "hidden", ht.shrinkWrapBlocks() || h.always(function() {
                    f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
                }));
                for (i in e)
                    if (r = e[i], De.exec(r)) {
                        if (delete e[i], o = o || "toggle" === r, r === (p ? "hide" : "show")) {
                            if ("show" !== r || !m || void 0 === m[i])
                                continue;
                            p = !0
                        }
                        d[i] = m && m[i] || ft.style(t, i)
                    } else
                        u = void 0;
                if (ft.isEmptyObject(d))
                    "inline" === ("none" === u ? j(t.nodeName) : u) && (f.display = u);
                else {
                    m ? "hidden" in m && (p = m.hidden) : m = ft._data(t, "fxshow", {}), o && (m.hidden = !p), p ? ft(t).show() : h.done(function() {
                        ft(t).hide()
                    }), h.done(function() {
                        var e;
                        ft._removeData(t, "fxshow");
                        for (e in d)
                            ft.style(t, e, d[e])
                    });
                    for (i in d)
                        s = W(p ? m[i] : 0, i, h), i in m || (m[i] = s.start, p && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
                }
            }
            function I(t, e) {
                var n,
                    i,
                    r,
                    o,
                    s;
                for (n in t)
                    if (i = ft.camelCase(n), r = e[i], o = t[n], ft.isArray(o) && (r = o[1], o = t[n] = o[0]), n !== i && (t[i] = o, delete t[n]), s = ft.cssHooks[i], s && "expand" in s) {
                        o = s.expand(o), delete t[i];
                        for (n in o)
                            n in t || (t[n] = o[n], e[n] = r)
                    } else
                        e[i] = r
            }
            function B(t, e, n) {
                var i,
                    r,
                    o = 0,
                    s = B.prefilters.length,
                    a = ft.Deferred().always(function() {
                        delete l.elem
                    }),
                    l = function() {
                        if (r)
                            return !1;
                        for (var e = Te || R(), n = Math.max(0, u.startTime + u.duration - e), i = n / u.duration || 0, o = 1 - i, s = 0, l = u.tweens.length; s < l; s++)
                            u.tweens[s].run(o);
                        return a.notifyWith(t, [u, o, n]), o < 1 && l ? n : (a.resolveWith(t, [u]), !1)
                    },
                    u = a.promise({
                        elem: t,
                        props: ft.extend({}, e),
                        opts: ft.extend(!0, {
                            specialEasing: {},
                            easing: ft.easing._default
                        }, n),
                        originalProperties: e,
                        originalOptions: n,
                        startTime: Te || R(),
                        duration: n.duration,
                        tweens: [],
                        createTween: function(e, n) {
                            var i = ft.Tween(t, u.opts, e, n, u.opts.specialEasing[e] || u.opts.easing);
                            return u.tweens.push(i), i
                        },
                        stop: function(e) {
                            var n = 0,
                                i = e ? u.tweens.length : 0;
                            if (r)
                                return this;
                            for (r = !0; n < i; n++)
                                u.tweens[n].run(1);
                            return e ? (a.notifyWith(t, [u, 1, 0]), a.resolveWith(t, [u, e])) : a.rejectWith(t, [u, e]), this
                        }
                    }),
                    c = u.props;
                for (I(c, u.opts.specialEasing); o < s; o++)
                    if (i = B.prefilters[o].call(u, t, c, u.opts))
                        return ft.isFunction(i.stop) && (ft._queueHooks(u.elem, u.opts.queue).stop = ft.proxy(i.stop, i)), i;
                return ft.map(c, W, u), ft.isFunction(u.opts.start) && u.opts.start.call(t, u), ft.fx.timer(ft.extend(l, {
                    elem: t,
                    anim: u,
                    queue: u.opts.queue
                })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
            }
            function U(t) {
                return ft.attr(t, "class") || ""
            }
            function z(t) {
                return function(e, n) {
                    "string" != typeof e && (n = e, e = "*");
                    var i,
                        r = 0,
                        o = e.toLowerCase().match(Nt) || [];
                    if (ft.isFunction(n))
                        for (; i = o[r++];)
                            "+" === i.charAt(0) ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
                }
            }
            function $(t, e, n, i) {
                function r(a) {
                    var l;
                    return o[a] = !0, ft.each(t[a] || [], function(t, a) {
                        var u = a(e, n, i);
                        return "string" != typeof u || s || o[u] ? s ? !(l = u) : void 0 : (e.dataTypes.unshift(u), r(u), !1)
                    }), l
                }
                var o = {},
                    s = t === Je;
                return r(e.dataTypes[0]) || !o["*"] && r("*")
            }
            function G(t, e) {
                var n,
                    i,
                    r = ft.ajaxSettings.flatOptions || {};
                for (i in e)
                    void 0 !== e[i] && ((r[i] ? t : n || (n = {}))[i] = e[i]);
                return n && ft.extend(!0, t, n), t
            }
            function V(t, e, n) {
                for (var i, r, o, s, a = t.contents, l = t.dataTypes; "*" === l[0];)
                    l.shift(), void 0 === r && (r = t.mimeType || e.getResponseHeader("Content-Type"));
                if (r)
                    for (s in a)
                        if (a[s] && a[s].test(r)) {
                            l.unshift(s);
                            break
                        }
                if (l[0] in n)
                    o = l[0];
                else {
                    for (s in n) {
                        if (!l[0] || t.converters[s + " " + l[0]]) {
                            o = s;
                            break
                        }
                        i || (i = s)
                    }
                    o = o || i
                }
                if (o)
                    return o !== l[0] && l.unshift(o), n[o]
            }
            function X(t, e, n, i) {
                var r,
                    o,
                    s,
                    a,
                    l,
                    u = {},
                    c = t.dataTypes.slice();
                if (c[1])
                    for (s in t.converters)
                        u[s.toLowerCase()] = t.converters[s];
                for (o = c.shift(); o;)
                    if (t.responseFields[o] && (n[t.responseFields[o]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = c.shift())
                        if ("*" === o)
                            o = l;
                        else if ("*" !== l && l !== o) {
                            if (s = u[l + " " + o] || u["* " + o], !s)
                                for (r in u)
                                    if (a = r.split(" "), a[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                                        s === !0 ? s = u[r] : u[r] !== !0 && (o = a[0], c.unshift(a[1]));
                                        break
                                    }
                            if (s !== !0)
                                if (s && t.throws)
                                    e = s(e);
                                else
                                    try {
                                        e = s(e)
                                    } catch (t) {
                                        return {
                                            state: "parsererror",
                                            error: s ? t : "No conversion from " + l + " to " + o
                                        }
                                    }
                        }
                return {
                    state: "success",
                    data: e
                }
            }
            function Q(t) {
                return t.style && t.style.display || ft.css(t, "display")
            }
            function Z(t) {
                if (!ft.contains(t.ownerDocument || it, t))
                    return !0;
                for (; t && 1 === t.nodeType;) {
                    if ("none" === Q(t) || "hidden" === t.type)
                        return !0;
                    t = t.parentNode
                }
                return !1
            }
            function J(t, e, n, i) {
                var r;
                if (ft.isArray(e))
                    ft.each(e, function(e, r) {
                        n || rn.test(t) ? i(t, r) : J(t + "[" + ("object" == typeof r && null != r ? e : "") + "]", r, n, i)
                    });
                else if (n || "object" !== ft.type(e))
                    i(t, e);
                else
                    for (r in e)
                        J(t + "[" + r + "]", e[r], n, i)
            }
            function K() {
                try {
                    return new t.XMLHttpRequest
                } catch (t) {}
            }
            function tt() {
                try {
                    return new t.ActiveXObject("Microsoft.XMLHTTP")
                } catch (t) {}
            }
            function et(t) {
                return ft.isWindow(t) ? t : 9 === t.nodeType && (t.defaultView || t.parentWindow)
            }
            var nt = [],
                it = t.document,
                rt = nt.slice,
                ot = nt.concat,
                st = nt.push,
                at = nt.indexOf,
                lt = {},
                ut = lt.toString,
                ct = lt.hasOwnProperty,
                ht = {},
                dt = "1.12.4",
                ft = function(t, e) {
                    return new ft.fn.init(t, e)
                },
                pt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
                mt = /^-ms-/,
                gt = /-([\da-z])/gi,
                yt = function(t, e) {
                    return e.toUpperCase()
                };
            ft.fn = ft.prototype = {
                jquery: dt,
                constructor: ft,
                selector: "",
                length: 0,
                toArray: function() {
                    return rt.call(this)
                },
                get: function(t) {
                    return null != t ? t < 0 ? this[t + this.length] : this[t] : rt.call(this)
                },
                pushStack: function(t) {
                    var e = ft.merge(this.constructor(), t);
                    return e.prevObject = this, e.context = this.context, e
                },
                each: function(t) {
                    return ft.each(this, t)
                },
                map: function(t) {
                    return this.pushStack(ft.map(this, function(e, n) {
                        return t.call(e, n, e)
                    }))
                },
                slice: function() {
                    return this.pushStack(rt.apply(this, arguments))
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                eq: function(t) {
                    var e = this.length,
                        n = +t + (t < 0 ? e : 0);
                    return this.pushStack(n >= 0 && n < e ? [this[n]] : [])
                },
                end: function() {
                    return this.prevObject || this.constructor()
                },
                push: st,
                sort: nt.sort,
                splice: nt.splice
            }, ft.extend = ft.fn.extend = function() {
                var t,
                    e,
                    n,
                    i,
                    r,
                    o,
                    s = arguments[0] || {},
                    a = 1,
                    l = arguments.length,
                    u = !1;
                for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || ft.isFunction(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
                    if (null != (r = arguments[a]))
                        for (i in r)
                            t = s[i], n = r[i], s !== n && (u && n && (ft.isPlainObject(n) || (e = ft.isArray(n))) ? (e ? (e = !1, o = t && ft.isArray(t) ? t : []) : o = t && ft.isPlainObject(t) ? t : {}, s[i] = ft.extend(u, o, n)) : void 0 !== n && (s[i] = n));
                return s
            }, ft.extend({
                expando: "jQuery" + (dt + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function(t) {
                    throw new Error(t)
                },
                noop: function() {},
                isFunction: function(t) {
                    return "function" === ft.type(t)
                },
                isArray: Array.isArray || function(t) {
                    return "array" === ft.type(t)
                },
                isWindow: function(t) {
                    return null != t && t == t.window
                },
                isNumeric: function(t) {
                    var e = t && t.toString();
                    return !ft.isArray(t) && e - parseFloat(e) + 1 >= 0
                },
                isEmptyObject: function(t) {
                    var e;
                    for (e in t)
                        return !1;
                    return !0
                },
                isPlainObject: function(t) {
                    var e;
                    if (!t || "object" !== ft.type(t) || t.nodeType || ft.isWindow(t))
                        return !1;
                    try {
                        if (t.constructor && !ct.call(t, "constructor") && !ct.call(t.constructor.prototype, "isPrototypeOf"))
                            return !1
                    } catch (t) {
                        return !1
                    }
                    if (!ht.ownFirst)
                        for (e in t)
                            return ct.call(t, e);
                    for (e in t)
                        ;
                    return void 0 === e || ct.call(t, e)
                },
                type: function(t) {
                    return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? lt[ut.call(t)] || "object" : typeof t
                },
                globalEval: function(e) {
                    e && ft.trim(e) && (t.execScript || function(e) {
                        t.eval.call(t, e)
                    })(e)
                },
                camelCase: function(t) {
                    return t.replace(mt, "ms-").replace(gt, yt)
                },
                nodeName: function(t, e) {
                    return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
                },
                each: function(t, e) {
                    var i,
                        r = 0;
                    if (n(t))
                        for (i = t.length; r < i && e.call(t[r], r, t[r]) !== !1; r++)
                            ;
                    else
                        for (r in t)
                            if (e.call(t[r], r, t[r]) === !1)
                                break;
                    return t
                },
                trim: function(t) {
                    return null == t ? "" : (t + "").replace(pt, "")
                },
                makeArray: function(t, e) {
                    var i = e || [];
                    return null != t && (n(Object(t)) ? ft.merge(i, "string" == typeof t ? [t] : t) : st.call(i, t)), i
                },
                inArray: function(t, e, n) {
                    var i;
                    if (e) {
                        if (at)
                            return at.call(e, t, n);
                        for (i = e.length, n = n ? n < 0 ? Math.max(0, i + n) : n : 0; n < i; n++)
                            if (n in e && e[n] === t)
                                return n
                    }
                    return -1
                },
                merge: function(t, e) {
                    for (var n = +e.length, i = 0, r = t.length; i < n;)
                        t[r++] = e[i++];
                    if (n !== n)
                        for (; void 0 !== e[i];)
                            t[r++] = e[i++];
                    return t.length = r, t
                },
                grep: function(t, e, n) {
                    for (var i, r = [], o = 0, s = t.length, a = !n; o < s; o++)
                        i = !e(t[o], o), i !== a && r.push(t[o]);
                    return r
                },
                map: function(t, e, i) {
                    var r,
                        o,
                        s = 0,
                        a = [];
                    if (n(t))
                        for (r = t.length; s < r; s++)
                            o = e(t[s], s, i), null != o && a.push(o);
                    else
                        for (s in t)
                            o = e(t[s], s, i), null != o && a.push(o);
                    return ot.apply([], a)
                },
                guid: 1,
                proxy: function(t, e) {
                    var n,
                        i,
                        r;
                    if ("string" == typeof e && (r = t[e], e = t, t = r), ft.isFunction(t))
                        return n = rt.call(arguments, 2), i = function() {
                            return t.apply(e || this, n.concat(rt.call(arguments)))
                        }, i.guid = t.guid = t.guid || ft.guid++, i
                },
                now: function() {
                    return +new Date
                },
                support: ht
            }), "function" == typeof Symbol && (ft.fn[Symbol.iterator] = nt[Symbol.iterator]), ft.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
                lt["[object " + e + "]"] = e.toLowerCase()
            });
            var vt = function(t) {
                function e(t, e, n, i) {
                    var r,
                        o,
                        s,
                        a,
                        l,
                        u,
                        h,
                        f,
                        p = e && e.ownerDocument,
                        m = e ? e.nodeType : 9;
                    if (n = n || [], "string" != typeof t || !t || 1 !== m && 9 !== m && 11 !== m)
                        return n;
                    if (!i && ((e ? e.ownerDocument || e : W) !== O && E(e), e = e || O, P)) {
                        if (11 !== m && (u = yt.exec(t)))
                            if (r = u[1]) {
                                if (9 === m) {
                                    if (!(s = e.getElementById(r)))
                                        return n;
                                    if (s.id === r)
                                        return n.push(s), n
                                } else if (p && (s = p.getElementById(r)) && R(e, s) && s.id === r)
                                    return n.push(s), n
                            } else {
                                if (u[2])
                                    return J.apply(n, e.getElementsByTagName(t)),
                                    n;
                                if ((r = u[3]) && x.getElementsByClassName && e.getElementsByClassName)
                                    return J.apply(n, e.getElementsByClassName(r)), n
                            }
                        if (x.qsa && !z[t + " "] && (!L || !L.test(t))) {
                            if (1 !== m)
                                p = e, f = t;
                            else if ("object" !== e.nodeName.toLowerCase()) {
                                for ((a = e.getAttribute("id")) ? a = a.replace(wt, "\\$&") : e.setAttribute("id", a = H), h = T(t), o = h.length, l = dt.test(a) ? "#" + a : "[id='" + a + "']"; o--;)
                                    h[o] = l + " " + d(h[o]);
                                f = h.join(","), p = vt.test(t) && c(e.parentNode) || e
                            }
                            if (f)
                                try {
                                    return J.apply(n, p.querySelectorAll(f)), n
                                } catch (t) {} finally {
                                    a === H && e.removeAttribute("id")
                                }
                        }
                    }
                    return D(t.replace(at, "$1"), e, n, i)
                }
                function n() {
                    function t(n, i) {
                        return e.push(n + " ") > _.cacheLength && delete t[e.shift()], t[n + " "] = i
                    }
                    var e = [];
                    return t
                }
                function i(t) {
                    return t[H] = !0, t
                }
                function r(t) {
                    var e = O.createElement("div");
                    try {
                        return !!t(e)
                    } catch (t) {
                        return !1
                    } finally {
                        e.parentNode && e.parentNode.removeChild(e), e = null
                    }
                }
                function o(t, e) {
                    for (var n = t.split("|"), i = n.length; i--;)
                        _.attrHandle[n[i]] = e
                }
                function s(t, e) {
                    var n = e && t,
                        i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || G) - (~t.sourceIndex || G);
                    if (i)
                        return i;
                    if (n)
                        for (; n = n.nextSibling;)
                            if (n === e)
                                return -1;
                    return t ? 1 : -1
                }
                function a(t) {
                    return function(e) {
                        var n = e.nodeName.toLowerCase();
                        return "input" === n && e.type === t
                    }
                }
                function l(t) {
                    return function(e) {
                        var n = e.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && e.type === t
                    }
                }
                function u(t) {
                    return i(function(e) {
                        return e = +e, i(function(n, i) {
                            for (var r, o = t([], n.length, e), s = o.length; s--;)
                                n[r = o[s]] && (n[r] = !(i[r] = n[r]))
                        })
                    })
                }
                function c(t) {
                    return t && "undefined" != typeof t.getElementsByTagName && t
                }
                function h() {}
                function d(t) {
                    for (var e = 0, n = t.length, i = ""; e < n; e++)
                        i += t[e].value;
                    return i
                }
                function f(t, e, n) {
                    var i = e.dir,
                        r = n && "parentNode" === i,
                        o = I++;
                    return e.first ? function(e, n, o) {
                        for (; e = e[i];)
                            if (1 === e.nodeType || r)
                                return t(e, n, o)
                    } : function(e, n, s) {
                        var a,
                            l,
                            u,
                            c = [q, o];
                        if (s) {
                            for (; e = e[i];)
                                if ((1 === e.nodeType || r) && t(e, n, s))
                                    return !0
                        } else
                            for (; e = e[i];)
                                if (1 === e.nodeType || r) {
                                    if (u = e[H] || (e[H] = {}), l = u[e.uniqueID] || (u[e.uniqueID] = {}), (a = l[i]) && a[0] === q && a[1] === o)
                                        return c[2] = a[2];
                                    if (l[i] = c, c[2] = t(e, n, s))
                                        return !0
                                }
                    }
                }
                function p(t) {
                    return t.length > 1 ? function(e, n, i) {
                        for (var r = t.length; r--;)
                            if (!t[r](e, n, i))
                                return !1;
                        return !0
                    } : t[0]
                }
                function m(t, n, i) {
                    for (var r = 0, o = n.length; r < o; r++)
                        e(t, n[r], i);
                    return i
                }
                function g(t, e, n, i, r) {
                    for (var o, s = [], a = 0, l = t.length, u = null != e; a < l; a++)
                        (o = t[a]) && (n && !n(o, i, r) || (s.push(o), u && e.push(a)));
                    return s
                }
                function y(t, e, n, r, o, s) {
                    return r && !r[H] && (r = y(r)), o && !o[H] && (o = y(o, s)), i(function(i, s, a, l) {
                        var u,
                            c,
                            h,
                            d = [],
                            f = [],
                            p = s.length,
                            y = i || m(e || "*", a.nodeType ? [a] : a, []),
                            v = !t || !i && e ? y : g(y, d, t, a, l),
                            w = n ? o || (i ? t : p || r) ? [] : s : v;
                        if (n && n(v, w, a, l), r)
                            for (u = g(w, f), r(u, [], a, l), c = u.length; c--;)
                                (h = u[c]) && (w[f[c]] = !(v[f[c]] = h));
                        if (i) {
                            if (o || t) {
                                if (o) {
                                    for (u = [], c = w.length; c--;)
                                        (h = w[c]) && u.push(v[c] = h);
                                    o(null, w = [], u, l)
                                }
                                for (c = w.length; c--;)
                                    (h = w[c]) && (u = o ? tt(i, h) : d[c]) > -1 && (i[u] = !(s[u] = h))
                            }
                        } else
                            w = g(w === s ? w.splice(p, w.length) : w), o ? o(null, s, w, l) : J.apply(s, w)
                    })
                }
                function v(t) {
                    for (var e, n, i, r = t.length, o = _.relative[t[0].type], s = o || _.relative[" "], a = o ? 1 : 0, l = f(function(t) {
                            return t === e
                        }, s, !0), u = f(function(t) {
                            return tt(e, t) > -1
                        }, s, !0), c = [function(t, n, i) {
                            var r = !o && (i || n !== M) || ((e = n).nodeType ? l(t, n, i) : u(t, n, i));
                            return e = null, r
                        }]; a < r; a++)
                        if (n = _.relative[t[a].type])
                            c = [f(p(c), n)];
                        else {
                            if (n = _.filter[t[a].type].apply(null, t[a].matches), n[H]) {
                                for (i = ++a; i < r && !_.relative[t[i].type]; i++)
                                    ;
                                return y(a > 1 && p(c), a > 1 && d(t.slice(0, a - 1).concat({
                                    value: " " === t[a - 2].type ? "*" : ""
                                })).replace(at, "$1"), n, a < i && v(t.slice(a, i)), i < r && v(t = t.slice(i)), i < r && d(t))
                            }
                            c.push(n)
                        }
                    return p(c)
                }
                function w(t, n) {
                    var r = n.length > 0,
                        o = t.length > 0,
                        s = function(i, s, a, l, u) {
                            var c,
                                h,
                                d,
                                f = 0,
                                p = "0",
                                m = i && [],
                                y = [],
                                v = M,
                                w = i || o && _.find.TAG("*", u),
                                b = q += null == v ? 1 : Math.random() || .1,
                                x = w.length;
                            for (u && (M = s === O || s || u); p !== x && null != (c = w[p]); p++) {
                                if (o && c) {
                                    for (h = 0, s || c.ownerDocument === O || (E(c), a = !P); d = t[h++];)
                                        if (d(c, s || O, a)) {
                                            l.push(c);
                                            break
                                        }
                                    u && (q = b)
                                }
                                r && ((c = !d && c) && f--, i && m.push(c))
                            }
                            if (f += p, r && p !== f) {
                                for (h = 0; d = n[h++];)
                                    d(m, y, s, a);
                                if (i) {
                                    if (f > 0)
                                        for (; p--;)
                                            m[p] || y[p] || (y[p] = Q.call(l));
                                    y = g(y)
                                }
                                J.apply(l, y), u && !i && y.length > 0 && f + n.length > 1 && e.uniqueSort(l)
                            }
                            return u && (q = b, M = v), m
                        };
                    return r ? i(s) : s
                }
                var b,
                    x,
                    _,
                    k,
                    S,
                    T,
                    C,
                    D,
                    M,
                    N,
                    j,
                    E,
                    O,
                    A,
                    P,
                    L,
                    Y,
                    F,
                    R,
                    H = "sizzle" + 1 * new Date,
                    W = t.document,
                    q = 0,
                    I = 0,
                    B = n(),
                    U = n(),
                    z = n(),
                    $ = function(t, e) {
                        return t === e && (j = !0), 0
                    },
                    G = 1 << 31,
                    V = {}.hasOwnProperty,
                    X = [],
                    Q = X.pop,
                    Z = X.push,
                    J = X.push,
                    K = X.slice,
                    tt = function(t, e) {
                        for (var n = 0, i = t.length; n < i; n++)
                            if (t[n] === e)
                                return n;
                        return -1
                    },
                    et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    nt = "[\\x20\\t\\r\\n\\f]",
                    it = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                    rt = "\\[" + nt + "*(" + it + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + it + "))|)" + nt + "*\\]",
                    ot = ":(" + it + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + rt + ")*)|.*)\\)|)",
                    st = new RegExp(nt + "+", "g"),
                    at = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"),
                    lt = new RegExp("^" + nt + "*," + nt + "*"),
                    ut = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"),
                    ct = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"),
                    ht = new RegExp(ot),
                    dt = new RegExp("^" + it + "$"),
                    ft = {
                        ID: new RegExp("^#(" + it + ")"),
                        CLASS: new RegExp("^\\.(" + it + ")"),
                        TAG: new RegExp("^(" + it + "|[*])"),
                        ATTR: new RegExp("^" + rt),
                        PSEUDO: new RegExp("^" + ot),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + et + ")$", "i"),
                        needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
                    },
                    pt = /^(?:input|select|textarea|button)$/i,
                    mt = /^h\d$/i,
                    gt = /^[^{]+\{\s*\[native \w/,
                    yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    vt = /[+~]/,
                    wt = /'|\\/g,
                    bt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"),
                    xt = function(t, e, n) {
                        var i = "0x" + e - 65536;
                        return i !== i || n ? e : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                    },
                    _t = function() {
                        E()
                    };
                try {
                    J.apply(X = K.call(W.childNodes), W.childNodes), X[W.childNodes.length].nodeType
                } catch (t) {
                    J = {
                        apply: X.length ? function(t, e) {
                            Z.apply(t, K.call(e))
                        } : function(t, e) {
                            for (var n = t.length, i = 0; t[n++] = e[i++];)
                                ;
                            t.length = n - 1
                        }
                    }
                }
                x = e.support = {}, S = e.isXML = function(t) {
                    var e = t && (t.ownerDocument || t).documentElement;
                    return !!e && "HTML" !== e.nodeName
                }, E = e.setDocument = function(t) {
                    var e,
                        n,
                        i = t ? t.ownerDocument || t : W;
                    return i !== O && 9 === i.nodeType && i.documentElement ? (O = i, A = O.documentElement, P = !S(O), (n = O.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", _t, !1) : n.attachEvent && n.attachEvent("onunload", _t)), x.attributes = r(function(t) {
                        return t.className = "i", !t.getAttribute("className")
                    }), x.getElementsByTagName = r(function(t) {
                        return t.appendChild(O.createComment("")), !t.getElementsByTagName("*").length
                    }), x.getElementsByClassName = gt.test(O.getElementsByClassName), x.getById = r(function(t) {
                        return A.appendChild(t).id = H, !O.getElementsByName || !O.getElementsByName(H).length
                    }), x.getById ? (_.find.ID = function(t, e) {
                        if ("undefined" != typeof e.getElementById && P) {
                            var n = e.getElementById(t);
                            return n ? [n] : []
                        }
                    }, _.filter.ID = function(t) {
                        var e = t.replace(bt, xt);
                        return function(t) {
                            return t.getAttribute("id") === e
                        }
                    }) : (delete _.find.ID, _.filter.ID = function(t) {
                        var e = t.replace(bt, xt);
                        return function(t) {
                            var n = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                            return n && n.value === e
                        }
                    }), _.find.TAG = x.getElementsByTagName ? function(t, e) {
                        return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : x.qsa ? e.querySelectorAll(t) : void 0
                    } : function(t, e) {
                        var n,
                            i = [],
                            r = 0,
                            o = e.getElementsByTagName(t);
                        if ("*" === t) {
                            for (; n = o[r++];)
                                1 === n.nodeType && i.push(n);
                            return i
                        }
                        return o
                    }, _.find.CLASS = x.getElementsByClassName && function(t, e) {
                        if ("undefined" != typeof e.getElementsByClassName && P)
                            return e.getElementsByClassName(t)
                    }, Y = [], L = [], (x.qsa = gt.test(O.querySelectorAll)) && (r(function(t) {
                        A.appendChild(t).innerHTML = "<a id='" + H + "'></a><select id='" + H + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && L.push("[*^$]=" + nt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || L.push("\\[" + nt + "*(?:value|" + et + ")"), t.querySelectorAll("[id~=" + H + "-]").length || L.push("~="), t.querySelectorAll(":checked").length || L.push(":checked"), t.querySelectorAll("a#" + H + "+*").length || L.push(".#.+[+~]")
                    }), r(function(t) {
                        var e = O.createElement("input");
                        e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && L.push("name" + nt + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || L.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), L.push(",.*:")
                    })), (x.matchesSelector = gt.test(F = A.matches || A.webkitMatchesSelector || A.mozMatchesSelector || A.oMatchesSelector || A.msMatchesSelector)) && r(function(t) {
                        x.disconnectedMatch = F.call(t, "div"), F.call(t, "[s!='']:x"), Y.push("!=", ot)
                    }), L = L.length && new RegExp(L.join("|")), Y = Y.length && new RegExp(Y.join("|")), e = gt.test(A.compareDocumentPosition), R = e || gt.test(A.contains) ? function(t, e) {
                        var n = 9 === t.nodeType ? t.documentElement : t,
                            i = e && e.parentNode;
                        return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                    } : function(t, e) {
                        if (e)
                            for (; e = e.parentNode;)
                                if (e === t)
                                    return !0;
                        return !1
                    }, $ = e ? function(t, e) {
                        if (t === e)
                            return j = !0, 0;
                        var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                        return n ? n : (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !x.sortDetached && e.compareDocumentPosition(t) === n ? t === O || t.ownerDocument === W && R(W, t) ? -1 : e === O || e.ownerDocument === W && R(W, e) ? 1 : N ? tt(N, t) - tt(N, e) : 0 : 4 & n ? -1 : 1)
                    } : function(t, e) {
                        if (t === e)
                            return j = !0, 0;
                        var n,
                            i = 0,
                            r = t.parentNode,
                            o = e.parentNode,
                            a = [t],
                            l = [e];
                        if (!r || !o)
                            return t === O ? -1 : e === O ? 1 : r ? -1 : o ? 1 : N ? tt(N, t) - tt(N, e) : 0;
                        if (r === o)
                            return s(t, e);
                        for (n = t; n = n.parentNode;)
                            a.unshift(n);
                        for (n = e; n = n.parentNode;)
                            l.unshift(n);
                        for (; a[i] === l[i];)
                            i++;
                        return i ? s(a[i], l[i]) : a[i] === W ? -1 : l[i] === W ? 1 : 0
                    }, O) : O
                }, e.matches = function(t, n) {
                    return e(t, null, null, n)
                }, e.matchesSelector = function(t, n) {
                    if ((t.ownerDocument || t) !== O && E(t), n = n.replace(ct, "='$1']"), x.matchesSelector && P && !z[n + " "] && (!Y || !Y.test(n)) && (!L || !L.test(n)))
                        try {
                            var i = F.call(t, n);
                            if (i || x.disconnectedMatch || t.document && 11 !== t.document.nodeType)
                                return i
                        } catch (t) {}
                    return e(n, O, null, [t]).length > 0
                }, e.contains = function(t, e) {
                    return (t.ownerDocument || t) !== O && E(t), R(t, e)
                }, e.attr = function(t, e) {
                    (t.ownerDocument || t) !== O && E(t);
                    var n = _.attrHandle[e.toLowerCase()],
                        i = n && V.call(_.attrHandle, e.toLowerCase()) ? n(t, e, !P) : void 0;
                    return void 0 !== i ? i : x.attributes || !P ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
                }, e.error = function(t) {
                    throw new Error("Syntax error, unrecognized expression: " + t)
                }, e.uniqueSort = function(t) {
                    var e,
                        n = [],
                        i = 0,
                        r = 0;
                    if (j = !x.detectDuplicates, N = !x.sortStable && t.slice(0), t.sort($), j) {
                        for (; e = t[r++];)
                            e === t[r] && (i = n.push(r));
                        for (; i--;)
                            t.splice(n[i], 1)
                    }
                    return N = null, t
                }, k = e.getText = function(t) {
                    var e,
                        n = "",
                        i = 0,
                        r = t.nodeType;
                    if (r) {
                        if (1 === r || 9 === r || 11 === r) {
                            if ("string" == typeof t.textContent)
                                return t.textContent;
                            for (t = t.firstChild; t; t = t.nextSibling)
                                n += k(t)
                        } else if (3 === r || 4 === r)
                            return t.nodeValue
                    } else
                        for (; e = t[i++];)
                            n += k(e);
                    return n
                }, _ = e.selectors = {
                    cacheLength: 50,
                    createPseudo: i,
                    match: ft,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(t) {
                            return t[1] = t[1].replace(bt, xt), t[3] = (t[3] || t[4] || t[5] || "").replace(bt, xt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                        },
                        CHILD: function(t) {
                            return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                        },
                        PSEUDO: function(t) {
                            var e,
                                n = !t[6] && t[2];
                            return ft.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && ht.test(n) && (e = T(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(t) {
                            var e = t.replace(bt, xt).toLowerCase();
                            return "*" === t ? function() {
                                return !0
                            } : function(t) {
                                return t.nodeName && t.nodeName.toLowerCase() === e
                            }
                        },
                        CLASS: function(t) {
                            var e = B[t + " "];
                            return e || (e = new RegExp("(^|" + nt + ")" + t + "(" + nt + "|$)")) && B(t, function(t) {
                                    return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                                })
                        },
                        ATTR: function(t, n, i) {
                            return function(r) {
                                var o = e.attr(r, t);
                                return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(st, " ") + " ").indexOf(i) > -1 : "|=" === n && (o === i || o.slice(0, i.length + 1) === i + "-"))
                            }
                        },
                        CHILD: function(t, e, n, i, r) {
                            var o = "nth" !== t.slice(0, 3),
                                s = "last" !== t.slice(-4),
                                a = "of-type" === e;
                            return 1 === i && 0 === r ? function(t) {
                                return !!t.parentNode
                            } : function(e, n, l) {
                                var u,
                                    c,
                                    h,
                                    d,
                                    f,
                                    p,
                                    m = o !== s ? "nextSibling" : "previousSibling",
                                    g = e.parentNode,
                                    y = a && e.nodeName.toLowerCase(),
                                    v = !l && !a,
                                    w = !1;
                                if (g) {
                                    if (o) {
                                        for (; m;) {
                                            for (d = e; d = d[m];)
                                                if (a ? d.nodeName.toLowerCase() === y : 1 === d.nodeType)
                                                    return !1;
                                            p = m = "only" === t && !p && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (p = [s ? g.firstChild : g.lastChild], s && v) {
                                        for (d = g, h = d[H] || (d[H] = {}), c = h[d.uniqueID] || (h[d.uniqueID] = {}), u = c[t] || [], f = u[0] === q && u[1], w = f && u[2], d = f && g.childNodes[f]; d = ++f && d && d[m] || (w = f = 0) || p.pop();)
                                            if (1 === d.nodeType && ++w && d === e) {
                                                c[t] = [q, f, w];
                                                break
                                            }
                                    } else if (v && (d = e, h = d[H] || (d[H] = {}), c = h[d.uniqueID] || (h[d.uniqueID] = {}), u = c[t] || [], f = u[0] === q && u[1], w = f), w === !1)
                                        for (; (d = ++f && d && d[m] || (w = f = 0) || p.pop()) && ((a ? d.nodeName.toLowerCase() !== y : 1 !== d.nodeType) || !++w || (v && (h = d[H] || (d[H] = {}), c = h[d.uniqueID] || (h[d.uniqueID] = {}), c[t] = [q, w]), d !== e));)
                                            ;
                                    return w -= r, w === i || w % i === 0 && w / i >= 0
                                }
                            }
                        },
                        PSEUDO: function(t, n) {
                            var r,
                                o = _.pseudos[t] || _.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                            return o[H] ? o(n) : o.length > 1 ? (r = [t, t, "", n], _.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function(t, e) {
                                for (var i, r = o(t, n), s = r.length; s--;)
                                    i = tt(t, r[s]), t[i] = !(e[i] = r[s])
                            }) : function(t) {
                                return o(t, 0, r)
                            }) : o
                        }
                    },
                    pseudos: {
                        not: i(function(t) {
                            var e = [],
                                n = [],
                                r = C(t.replace(at, "$1"));
                            return r[H] ? i(function(t, e, n, i) {
                                for (var o, s = r(t, null, i, []), a = t.length; a--;)
                                    (o = s[a]) && (t[a] = !(e[a] = o))
                            }) : function(t, i, o) {
                                return e[0] = t, r(e, null, o, n), e[0] = null, !n.pop()
                            }
                        }),
                        has: i(function(t) {
                            return function(n) {
                                return e(t, n).length > 0
                            }
                        }),
                        contains: i(function(t) {
                            return t = t.replace(bt, xt), function(e) {
                                return (e.textContent || e.innerText || k(e)).indexOf(t) > -1
                            }
                        }),
                        lang: i(function(t) {
                            return dt.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(bt, xt).toLowerCase(), function(e) {
                                var n;
                                do if (n = P ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                    return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-");
                                while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                        }),
                        target: function(e) {
                            var n = t.location && t.location.hash;
                            return n && n.slice(1) === e.id
                        },
                        root: function(t) {
                            return t === A
                        },
                        focus: function(t) {
                            return t === O.activeElement && (!O.hasFocus || O.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                        },
                        enabled: function(t) {
                            return t.disabled === !1
                        },
                        disabled: function(t) {
                            return t.disabled === !0
                        },
                        checked: function(t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && !!t.checked || "option" === e && !!t.selected
                        },
                        selected: function(t) {
                            return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                        },
                        empty: function(t) {
                            for (t = t.firstChild; t; t = t.nextSibling)
                                if (t.nodeType < 6)
                                    return !1;
                            return !0
                        },
                        parent: function(t) {
                            return !_.pseudos.empty(t)
                        },
                        header: function(t) {
                            return mt.test(t.nodeName)
                        },
                        input: function(t) {
                            return pt.test(t.nodeName)
                        },
                        button: function(t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && "button" === t.type || "button" === e
                        },
                        text: function(t) {
                            var e;
                            return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                        },
                        first: u(function() {
                            return [0]
                        }),
                        last: u(function(t, e) {
                            return [e - 1]
                        }),
                        eq: u(function(t, e, n) {
                            return [n < 0 ? n + e : n]
                        }),
                        even: u(function(t, e) {
                            for (var n = 0; n < e; n += 2)
                                t.push(n);
                            return t
                        }),
                        odd: u(function(t, e) {
                            for (var n = 1; n < e; n += 2)
                                t.push(n);
                            return t
                        }),
                        lt: u(function(t, e, n) {
                            for (var i = n < 0 ? n + e : n; --i >= 0;)
                                t.push(i);
                            return t
                        }),
                        gt: u(function(t, e, n) {
                            for (var i = n < 0 ? n + e : n; ++i < e;)
                                t.push(i);
                            return t
                        })
                    }
                }, _.pseudos.nth = _.pseudos.eq;
                for (b in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                })
                    _.pseudos[b] = a(b);
                for (b in {
                    submit: !0,
                    reset: !0
                })
                    _.pseudos[b] = l(b);
                return h.prototype = _.filters = _.pseudos, _.setFilters = new h, T = e.tokenize = function(t, n) {
                    var i,
                        r,
                        o,
                        s,
                        a,
                        l,
                        u,
                        c = U[t + " "];
                    if (c)
                        return n ? 0 : c.slice(0);
                    for (a = t, l = [], u = _.preFilter; a;) {
                        i && !(r = lt.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(o = [])), i = !1, (r = ut.exec(a)) && (i = r.shift(), o.push({
                            value: i,
                            type: r[0].replace(at, " ")
                        }), a = a.slice(i.length));
                        for (s in _.filter)
                            !(r = ft[s].exec(a)) || u[s] && !(r = u[s](r)) || (i = r.shift(), o.push({
                                value: i,
                                type: s,
                                matches: r
                            }), a = a.slice(i.length));
                        if (!i)
                            break
                    }
                    return n ? a.length : a ? e.error(t) : U(t, l).slice(0)
                }, C = e.compile = function(t, e) {
                    var n,
                        i = [],
                        r = [],
                        o = z[t + " "];
                    if (!o) {
                        for (e || (e = T(t)), n = e.length; n--;)
                            o = v(e[n]), o[H] ? i.push(o) : r.push(o);
                        o = z(t, w(r, i)), o.selector = t
                    }
                    return o
                }, D = e.select = function(t, e, n, i) {
                    var r,
                        o,
                        s,
                        a,
                        l,
                        u = "function" == typeof t && t,
                        h = !i && T(t = u.selector || t);
                    if (n = n || [], 1 === h.length) {
                        if (o = h[0] = h[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && x.getById && 9 === e.nodeType && P && _.relative[o[1].type]) {
                            if (e = (_.find.ID(s.matches[0].replace(bt, xt), e) || [])[0], !e)
                                return n;
                            u && (e = e.parentNode), t = t.slice(o.shift().value.length)
                        }
                        for (r = ft.needsContext.test(t) ? 0 : o.length; r-- && (s = o[r], !_.relative[a = s.type]);)
                            if ((l = _.find[a]) && (i = l(s.matches[0].replace(bt, xt), vt.test(o[0].type) && c(e.parentNode) || e))) {
                                if (o.splice(r, 1), t = i.length && d(o), !t)
                                    return J.apply(n, i), n;
                                break
                            }
                    }
                    return (u || C(t, h))(i, e, !P, n, !e || vt.test(t) && c(e.parentNode) || e), n
                }, x.sortStable = H.split("").sort($).join("") === H, x.detectDuplicates = !!j, E(), x.sortDetached = r(function(t) {
                    return 1 & t.compareDocumentPosition(O.createElement("div"))
                }), r(function(t) {
                    return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
                }) || o("type|href|height|width", function(t, e, n) {
                    if (!n)
                        return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
                }), x.attributes && r(function(t) {
                    return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
                }) || o("value", function(t, e, n) {
                    if (!n && "input" === t.nodeName.toLowerCase())
                        return t.defaultValue
                }), r(function(t) {
                    return null == t.getAttribute("disabled")
                }) || o(et, function(t, e, n) {
                    var i;
                    if (!n)
                        return t[e] === !0 ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
                }), e
            }(t);
            ft.find = vt, ft.expr = vt.selectors, ft.expr[":"] = ft.expr.pseudos, ft.uniqueSort = ft.unique = vt.uniqueSort, ft.text = vt.getText, ft.isXMLDoc = vt.isXML, ft.contains = vt.contains;
            var wt = function(t, e, n) {
                    for (var i = [], r = void 0 !== n; (t = t[e]) && 9 !== t.nodeType;)
                        if (1 === t.nodeType) {
                            if (r && ft(t).is(n))
                                break;
                            i.push(t)
                        }
                    return i
                },
                bt = function(t, e) {
                    for (var n = []; t; t = t.nextSibling)
                        1 === t.nodeType && t !== e && n.push(t);
                    return n
                },
                xt = ft.expr.match.needsContext,
                _t = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
                kt = /^.[^:#\[\.,]*$/;
            ft.filter = function(t, e, n) {
                var i = e[0];
                return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? ft.find.matchesSelector(i, t) ? [i] : [] : ft.find.matches(t, ft.grep(e, function(t) {
                    return 1 === t.nodeType
                }))
            }, ft.fn.extend({
                find: function(t) {
                    var e,
                        n = [],
                        i = this,
                        r = i.length;
                    if ("string" != typeof t)
                        return this.pushStack(ft(t).filter(function() {
                            for (e = 0; e < r; e++)
                                if (ft.contains(i[e], this))
                                    return !0
                        }));
                    for (e = 0; e < r; e++)
                        ft.find(t, i[e], n);
                    return n = this.pushStack(r > 1 ? ft.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
                },
                filter: function(t) {
                    return this.pushStack(i(this, t || [], !1))
                },
                not: function(t) {
                    return this.pushStack(i(this, t || [], !0))
                },
                is: function(t) {
                    return !!i(this, "string" == typeof t && xt.test(t) ? ft(t) : t || [], !1).length
                }
            });
            var St,
                Tt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
                Ct = ft.fn.init = function(t, e, n) {
                    var i,
                        r;
                    if (!t)
                        return this;
                    if (n = n || St, "string" == typeof t) {
                        if (i = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : Tt.exec(t), !i || !i[1] && e)
                            return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
                        if (i[1]) {
                            if (e = e instanceof ft ? e[0] : e, ft.merge(this, ft.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : it, !0)), _t.test(i[1]) && ft.isPlainObject(e))
                                for (i in e)
                                    ft.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                            return this
                        }
                        if (r = it.getElementById(i[2]), r && r.parentNode) {
                            if (r.id !== i[2])
                                return St.find(t);
                            this.length = 1, this[0] = r
                        }
                        return this.context = it, this.selector = t, this
                    }
                    return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : ft.isFunction(t) ? "undefined" != typeof n.ready ? n.ready(t) : t(ft) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), ft.makeArray(t, this))
                };
            Ct.prototype = ft.fn, St = ft(it);
            var Dt = /^(?:parents|prev(?:Until|All))/,
                Mt = {
                    children: !0,
                    contents: !0,
                    next: !0,
                    prev: !0
                };
            ft.fn.extend({
                has: function(t) {
                    var e,
                        n = ft(t, this),
                        i = n.length;
                    return this.filter(function() {
                        for (e = 0; e < i; e++)
                            if (ft.contains(this, n[e]))
                                return !0
                    })
                },
                closest: function(t, e) {
                    for (var n, i = 0, r = this.length, o = [], s = xt.test(t) || "string" != typeof t ? ft(t, e || this.context) : 0; i < r; i++)
                        for (n = this[i]; n && n !== e; n = n.parentNode)
                            if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && ft.find.matchesSelector(n, t))) {
                                o.push(n);
                                break
                            }
                    return this.pushStack(o.length > 1 ? ft.uniqueSort(o) : o)
                },
                index: function(t) {
                    return t ? "string" == typeof t ? ft.inArray(this[0], ft(t)) : ft.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                },
                add: function(t, e) {
                    return this.pushStack(ft.uniqueSort(ft.merge(this.get(), ft(t, e))))
                },
                addBack: function(t) {
                    return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
                }
            }), ft.each({
                parent: function(t) {
                    var e = t.parentNode;
                    return e && 11 !== e.nodeType ? e : null
                },
                parents: function(t) {
                    return wt(t, "parentNode")
                },
                parentsUntil: function(t, e, n) {
                    return wt(t, "parentNode", n)
                },
                next: function(t) {
                    return r(t, "nextSibling")
                },
                prev: function(t) {
                    return r(t, "previousSibling")
                },
                nextAll: function(t) {
                    return wt(t, "nextSibling")
                },
                prevAll: function(t) {
                    return wt(t, "previousSibling")
                },
                nextUntil: function(t, e, n) {
                    return wt(t, "nextSibling", n)
                },
                prevUntil: function(t, e, n) {
                    return wt(t, "previousSibling", n)
                },
                siblings: function(t) {
                    return bt((t.parentNode || {}).firstChild, t)
                },
                children: function(t) {
                    return bt(t.firstChild)
                },
                contents: function(t) {
                    return ft.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : ft.merge([], t.childNodes)
                }
            }, function(t, e) {
                ft.fn[t] = function(n, i) {
                    var r = ft.map(this, e, n);
                    return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (r = ft.filter(i, r)), this.length > 1 && (Mt[t] || (r = ft.uniqueSort(r)), Dt.test(t) && (r = r.reverse())), this.pushStack(r)
                }
            });
            var Nt = /\S+/g;
            ft.Callbacks = function(t) {
                t = "string" == typeof t ? o(t) : ft.extend({}, t);
                var e,
                    n,
                    i,
                    r,
                    s = [],
                    a = [],
                    l = -1,
                    u = function() {
                        for (r = t.once, i = e = !0; a.length; l = -1)
                            for (n = a.shift(); ++l < s.length;)
                                s[l].apply(n[0], n[1]) === !1 && t.stopOnFalse && (l = s.length, n = !1);
                        t.memory || (n = !1), e = !1, r && (s = n ? [] : "")
                    },
                    c = {
                        add: function() {
                            return s && (n && !e && (l = s.length - 1, a.push(n)), function e(n) {
                                ft.each(n, function(n, i) {
                                    ft.isFunction(i) ? t.unique && c.has(i) || s.push(i) : i && i.length && "string" !== ft.type(i) && e(i)
                                })
                            }(arguments), n && !e && u()), this
                        },
                        remove: function() {
                            return ft.each(arguments, function(t, e) {
                                for (var n; (n = ft.inArray(e, s, n)) > -1;)
                                    s.splice(n, 1), n <= l && l--
                            }), this
                        },
                        has: function(t) {
                            return t ? ft.inArray(t, s) > -1 : s.length > 0
                        },
                        empty: function() {
                            return s && (s = []), this
                        },
                        disable: function() {
                            return r = a = [], s = n = "", this
                        },
                        disabled: function() {
                            return !s
                        },
                        lock: function() {
                            return r = !0, n || c.disable(), this
                        },
                        locked: function() {
                            return !!r
                        },
                        fireWith: function(t, n) {
                            return r || (n = n || [], n = [t, n.slice ? n.slice() : n], a.push(n), e || u()), this
                        },
                        fire: function() {
                            return c.fireWith(this, arguments), this
                        },
                        fired: function() {
                            return !!i
                        }
                    };
                return c
            }, ft.extend({
                Deferred: function(t) {
                    var e = [["resolve", "done", ft.Callbacks("once memory"), "resolved"], ["reject", "fail", ft.Callbacks("once memory"), "rejected"], ["notify", "progress", ft.Callbacks("memory")]],
                        n = "pending",
                        i = {
                            state: function() {
                                return n
                            },
                            always: function() {
                                return r.done(arguments).fail(arguments), this
                            },
                            then: function() {
                                var t = arguments;
                                return ft.Deferred(function(n) {
                                    ft.each(e, function(e, o) {
                                        var s = ft.isFunction(t[e]) && t[e];
                                        r[o[1]](function() {
                                            var t = s && s.apply(this, arguments);
                                            t && ft.isFunction(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === i ? n.promise() : this, s ? [t] : arguments)
                                        })
                                    }), t = null
                                }).promise()
                            },
                            promise: function(t) {
                                return null != t ? ft.extend(t, i) : i
                            }
                        },
                        r = {};
                    return i.pipe = i.then, ft.each(e, function(t, o) {
                        var s = o[2],
                            a = o[3];
                        i[o[1]] = s.add, a && s.add(function() {
                            n = a
                        }, e[1 ^ t][2].disable, e[2][2].lock), r[o[0]] = function() {
                            return r[o[0] + "With"](this === r ? i : this, arguments), this
                        }, r[o[0] + "With"] = s.fireWith
                    }), i.promise(r), t && t.call(r, r), r
                },
                when: function(t) {
                    var e,
                        n,
                        i,
                        r = 0,
                        o = rt.call(arguments),
                        s = o.length,
                        a = 1 !== s || t && ft.isFunction(t.promise) ? s : 0,
                        l = 1 === a ? t : ft.Deferred(),
                        u = function(t, n, i) {
                            return function(r) {
                                n[t] = this, i[t] = arguments.length > 1 ? rt.call(arguments) : r, i === e ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                            }
                        };
                    if (s > 1)
                        for (e = new Array(s), n = new Array(s), i = new Array(s); r < s; r++)
                            o[r] && ft.isFunction(o[r].promise) ? o[r].promise().progress(u(r, n, e)).done(u(r, i, o)).fail(l.reject) : --a;
                    return a || l.resolveWith(i, o), l.promise()
                }
            });
            var jt;
            ft.fn.ready = function(t) {
                return ft.ready.promise().done(t), this
            }, ft.extend({
                isReady: !1,
                readyWait: 1,
                holdReady: function(t) {
                    t ? ft.readyWait++ : ft.ready(!0)
                },
                ready: function(t) {
                    (t === !0 ? --ft.readyWait : ft.isReady) || (ft.isReady = !0, t !== !0 && --ft.readyWait > 0 || (jt.resolveWith(it, [ft]), ft.fn.triggerHandler && (ft(it).triggerHandler("ready"), ft(it).off("ready"))))
                }
            }), ft.ready.promise = function(e) {
                if (!jt)
                    if (jt = ft.Deferred(), "complete" === it.readyState || "loading" !== it.readyState && !it.documentElement.doScroll)
                        t.setTimeout(ft.ready);
                    else if (it.addEventListener)
                        it.addEventListener("DOMContentLoaded", a), t.addEventListener("load", a);
                    else {
                        it.attachEvent("onreadystatechange", a), t.attachEvent("onload", a);
                        var n = !1;
                        try {
                            n = null == t.frameElement && it.documentElement
                        } catch (t) {}
                        n && n.doScroll && !function e() {
                            if (!ft.isReady) {
                                try {
                                    n.doScroll("left")
                                } catch (n) {
                                    return t.setTimeout(e, 50)
                                }
                                s(), ft.ready()
                            }
                        }()
                    }
                return jt.promise(e)
            }, ft.ready.promise();
            var Et;
            for (Et in ft(ht))
                break;
            ht.ownFirst = "0" === Et, ht.inlineBlockNeedsLayout = !1, ft(function() {
                var t,
                    e,
                    n,
                    i;
                n = it.getElementsByTagName("body")[0], n && n.style && (e = it.createElement("div"), i = it.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), "undefined" != typeof e.style.zoom && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ht.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (n.style.zoom = 1)), n.removeChild(i))
            }), function() {
                var t = it.createElement("div");
                ht.deleteExpando = !0;
                try {
                    delete t.test
                } catch (t) {
                    ht.deleteExpando = !1
                }
                t = null
            }();
            var Ot = function(t) {
                    var e = ft.noData[(t.nodeName + " ").toLowerCase()],
                        n = +t.nodeType || 1;
                    return (1 === n || 9 === n) && (!e || e !== !0 && t.getAttribute("classid") === e)
                },
                At = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                Pt = /([A-Z])/g;
            ft.extend({
                cache: {},
                noData: {
                    "applet ": !0,
                    "embed ": !0,
                    "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
                },
                hasData: function(t) {
                    return t = t.nodeType ? ft.cache[t[ft.expando]] : t[ft.expando], !!t && !u(t)
                },
                data: function(t, e, n) {
                    return c(t, e, n)
                },
                removeData: function(t, e) {
                    return h(t, e)
                },
                _data: function(t, e, n) {
                    return c(t, e, n, !0)
                },
                _removeData: function(t, e) {
                    return h(t, e, !0)
                }
            }), ft.fn.extend({
                data: function(t, e) {
                    var n,
                        i,
                        r,
                        o = this[0],
                        s = o && o.attributes;
                    if (void 0 === t) {
                        if (this.length && (r = ft.data(o), 1 === o.nodeType && !ft._data(o, "parsedAttrs"))) {
                            for (n = s.length; n--;)
                                s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = ft.camelCase(i.slice(5)), l(o, i, r[i])));
                            ft._data(o, "parsedAttrs", !0)
                        }
                        return r
                    }
                    return "object" == typeof t ? this.each(function() {
                        ft.data(this, t)
                    }) : arguments.length > 1 ? this.each(function() {
                        ft.data(this, t, e)
                    }) : o ? l(o, t, ft.data(o, t)) : void 0
                },
                removeData: function(t) {
                    return this.each(function() {
                        ft.removeData(this, t)
                    })
                }
            }), ft.extend({
                queue: function(t, e, n) {
                    var i;
                    if (t)
                        return e = (e || "fx") + "queue", i = ft._data(t, e), n && (!i || ft.isArray(n) ? i = ft._data(t, e, ft.makeArray(n)) : i.push(n)), i || []
                },
                dequeue: function(t, e) {
                    e = e || "fx";
                    var n = ft.queue(t, e),
                        i = n.length,
                        r = n.shift(),
                        o = ft._queueHooks(t, e),
                        s = function() {
                            ft.dequeue(t, e)
                        };
                    "inprogress" === r && (r = n.shift(), i--), r && ("fx" === e && n.unshift("inprogress"), delete o.stop, r.call(t, s, o)), !i && o && o.empty.fire()
                },
                _queueHooks: function(t, e) {
                    var n = e + "queueHooks";
                    return ft._data(t, n) || ft._data(t, n, {
                            empty: ft.Callbacks("once memory").add(function() {
                                ft._removeData(t, e + "queue"), ft._removeData(t, n)
                            })
                        })
                }
            }), ft.fn.extend({
                queue: function(t, e) {
                    var n = 2;
                    return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? ft.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                        var n = ft.queue(this, t, e);
                        ft._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && ft.dequeue(this, t)
                    })
                },
                dequeue: function(t) {
                    return this.each(function() {
                        ft.dequeue(this, t)
                    })
                },
                clearQueue: function(t) {
                    return this.queue(t || "fx", [])
                },
                promise: function(t, e) {
                    var n,
                        i = 1,
                        r = ft.Deferred(),
                        o = this,
                        s = this.length,
                        a = function() {
                            --i || r.resolveWith(o, [o])
                        };
                    for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;)
                        n = ft._data(o[s], t + "queueHooks"), n && n.empty && (i++, n.empty.add(a));
                    return a(), r.promise(e)
                }
            }), function() {
                var t;
                ht.shrinkWrapBlocks = function() {
                    if (null != t)
                        return t;
                    t = !1;
                    var e,
                        n,
                        i;
                    return n = it.getElementsByTagName("body")[0], n && n.style ? (e = it.createElement("div"), i = it.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), "undefined" != typeof e.style.zoom && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(it.createElement("div")).style.width = "5px", t = 3 !== e.offsetWidth), n.removeChild(i), t) : void 0
                }
            }();
            var Lt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                Yt = new RegExp("^(?:([+-])=|)(" + Lt + ")([a-z%]*)$", "i"),
                Ft = ["Top", "Right", "Bottom", "Left"],
                Rt = function(t, e) {
                    return t = e || t, "none" === ft.css(t, "display") || !ft.contains(t.ownerDocument, t)
                },
                Ht = function(t, e, n, i, r, o, s) {
                    var a = 0,
                        l = t.length,
                        u = null == n;
                    if ("object" === ft.type(n)) {
                        r = !0;
                        for (a in n)
                            Ht(t, e, a, n[a], !0, o, s)
                    } else if (void 0 !== i && (r = !0, ft.isFunction(i) || (s = !0), u && (s ? (e.call(t, i), e = null) : (u = e, e = function(t, e, n) {
                        return u.call(ft(t), n)
                    })), e))
                        for (; a < l; a++)
                            e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
                    return r ? t : u ? e.call(t) : l ? e(t[0], n) : o
                },
                Wt = /^(?:checkbox|radio)$/i,
                qt = /<([\w:-]+)/,
                It = /^$|\/(?:java|ecma)script/i,
                Bt = /^\s+/,
                Ut = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
            !function() {
                var t = it.createElement("div"),
                    e = it.createDocumentFragment(),
                    n = it.createElement("input");
                t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ht.leadingWhitespace = 3 === t.firstChild.nodeType, ht.tbody = !t.getElementsByTagName("tbody").length, ht.htmlSerialize = !!t.getElementsByTagName("link").length, ht.html5Clone = "<:nav></:nav>" !== it.createElement("nav").cloneNode(!0).outerHTML, n.type = "checkbox", n.checked = !0, e.appendChild(n), ht.appendChecked = n.checked, t.innerHTML = "<textarea>x</textarea>", ht.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, e.appendChild(t), n = it.createElement("input"), n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), ht.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, ht.noCloneEvent = !!t.addEventListener, t[ft.expando] = 1, ht.attributes = !t.getAttribute(ft.expando)
            }();
            var zt = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                area: [1, "<map>", "</map>"],
                param: [1, "<object>", "</object>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: ht.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
            };
            zt.optgroup = zt.option, zt.tbody = zt.tfoot = zt.colgroup = zt.caption = zt.thead, zt.th = zt.td;
            var $t = /<|&#?\w+;/,
                Gt = /<tbody/i;
            !function() {
                var e,
                    n,
                    i = it.createElement("div");
                for (e in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                })
                    n = "on" + e, (ht[e] = n in t) || (i.setAttribute(n, "t"), ht[e] = i.attributes[n].expando === !1);
                i = null
            }();
            var Vt = /^(?:input|select|textarea)$/i,
                Xt = /^key/,
                Qt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                Zt = /^(?:focusinfocus|focusoutblur)$/,
                Jt = /^([^.]*)(?:\.(.+)|)/;
            ft.event = {
                global: {},
                add: function(t, e, n, i, r) {
                    var o,
                        s,
                        a,
                        l,
                        u,
                        c,
                        h,
                        d,
                        f,
                        p,
                        m,
                        g = ft._data(t);
                    if (g) {
                        for (n.handler && (l = n, n = l.handler, r = l.selector), n.guid || (n.guid = ft.guid++), (s = g.events) || (s = g.events = {}), (c = g.handle) || (c = g.handle = function(t) {
                            return "undefined" == typeof ft || t && ft.event.triggered === t.type ? void 0 : ft.event.dispatch.apply(c.elem, arguments);
                        }, c.elem = t), e = (e || "").match(Nt) || [""], a = e.length; a--;)
                            o = Jt.exec(e[a]) || [], f = m = o[1], p = (o[2] || "").split(".").sort(), f && (u = ft.event.special[f] || {}, f = (r ? u.delegateType : u.bindType) || f, u = ft.event.special[f] || {}, h = ft.extend({
                                type: f,
                                origType: m,
                                data: i,
                                handler: n,
                                guid: n.guid,
                                selector: r,
                                needsContext: r && ft.expr.match.needsContext.test(r),
                                namespace: p.join(".")
                            }, l), (d = s[f]) || (d = s[f] = [], d.delegateCount = 0, u.setup && u.setup.call(t, i, p, c) !== !1 || (t.addEventListener ? t.addEventListener(f, c, !1) : t.attachEvent && t.attachEvent("on" + f, c))), u.add && (u.add.call(t, h), h.handler.guid || (h.handler.guid = n.guid)), r ? d.splice(d.delegateCount++, 0, h) : d.push(h), ft.event.global[f] = !0);
                        t = null
                    }
                },
                remove: function(t, e, n, i, r) {
                    var o,
                        s,
                        a,
                        l,
                        u,
                        c,
                        h,
                        d,
                        f,
                        p,
                        m,
                        g = ft.hasData(t) && ft._data(t);
                    if (g && (c = g.events)) {
                        for (e = (e || "").match(Nt) || [""], u = e.length; u--;)
                            if (a = Jt.exec(e[u]) || [], f = m = a[1], p = (a[2] || "").split(".").sort(), f) {
                                for (h = ft.event.special[f] || {}, f = (i ? h.delegateType : h.bindType) || f, d = c[f] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = d.length; o--;)
                                    s = d[o], !r && m !== s.origType || n && n.guid !== s.guid || a && !a.test(s.namespace) || i && i !== s.selector && ("**" !== i || !s.selector) || (d.splice(o, 1), s.selector && d.delegateCount--, h.remove && h.remove.call(t, s));
                                l && !d.length && (h.teardown && h.teardown.call(t, p, g.handle) !== !1 || ft.removeEvent(t, f, g.handle), delete c[f])
                            } else
                                for (f in c)
                                    ft.event.remove(t, f + e[u], n, i, !0);
                        ft.isEmptyObject(c) && (delete g.handle, ft._removeData(t, "events"))
                    }
                },
                trigger: function(e, n, i, r) {
                    var o,
                        s,
                        a,
                        l,
                        u,
                        c,
                        h,
                        d = [i || it],
                        f = ct.call(e, "type") ? e.type : e,
                        p = ct.call(e, "namespace") ? e.namespace.split(".") : [];
                    if (a = c = i = i || it, 3 !== i.nodeType && 8 !== i.nodeType && !Zt.test(f + ft.event.triggered) && (f.indexOf(".") > -1 && (p = f.split("."), f = p.shift(), p.sort()), s = f.indexOf(":") < 0 && "on" + f, e = e[ft.expando] ? e : new ft.Event(f, "object" == typeof e && e), e.isTrigger = r ? 2 : 3, e.namespace = p.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null == n ? [e] : ft.makeArray(n, [e]), u = ft.event.special[f] || {}, r || !u.trigger || u.trigger.apply(i, n) !== !1)) {
                        if (!r && !u.noBubble && !ft.isWindow(i)) {
                            for (l = u.delegateType || f, Zt.test(l + f) || (a = a.parentNode); a; a = a.parentNode)
                                d.push(a), c = a;
                            c === (i.ownerDocument || it) && d.push(c.defaultView || c.parentWindow || t)
                        }
                        for (h = 0; (a = d[h++]) && !e.isPropagationStopped();)
                            e.type = h > 1 ? l : u.bindType || f, o = (ft._data(a, "events") || {})[e.type] && ft._data(a, "handle"), o && o.apply(a, n), o = s && a[s], o && o.apply && Ot(a) && (e.result = o.apply(a, n), e.result === !1 && e.preventDefault());
                        if (e.type = f, !r && !e.isDefaultPrevented() && (!u._default || u._default.apply(d.pop(), n) === !1) && Ot(i) && s && i[f] && !ft.isWindow(i)) {
                            c = i[s], c && (i[s] = null), ft.event.triggered = f;
                            try {
                                i[f]()
                            } catch (t) {}
                            ft.event.triggered = void 0, c && (i[s] = c)
                        }
                        return e.result
                    }
                },
                dispatch: function(t) {
                    t = ft.event.fix(t);
                    var e,
                        n,
                        i,
                        r,
                        o,
                        s = [],
                        a = rt.call(arguments),
                        l = (ft._data(this, "events") || {})[t.type] || [],
                        u = ft.event.special[t.type] || {};
                    if (a[0] = t, t.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, t) !== !1) {
                        for (s = ft.event.handlers.call(this, t, l), e = 0; (r = s[e++]) && !t.isPropagationStopped();)
                            for (t.currentTarget = r.elem, n = 0; (o = r.handlers[n++]) && !t.isImmediatePropagationStopped();)
                                t.rnamespace && !t.rnamespace.test(o.namespace) || (t.handleObj = o, t.data = o.data, i = ((ft.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, a), void 0 !== i && (t.result = i) === !1 && (t.preventDefault(), t.stopPropagation()));
                        return u.postDispatch && u.postDispatch.call(this, t), t.result
                    }
                },
                handlers: function(t, e) {
                    var n,
                        i,
                        r,
                        o,
                        s = [],
                        a = e.delegateCount,
                        l = t.target;
                    if (a && l.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1))
                        for (; l != this; l = l.parentNode || this)
                            if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
                                for (i = [], n = 0; n < a; n++)
                                    o = e[n], r = o.selector + " ", void 0 === i[r] && (i[r] = o.needsContext ? ft(r, this).index(l) > -1 : ft.find(r, this, null, [l]).length), i[r] && i.push(o);
                                i.length && s.push({
                                    elem: l,
                                    handlers: i
                                })
                            }
                    return a < e.length && s.push({
                        elem: this,
                        handlers: e.slice(a)
                    }), s
                },
                fix: function(t) {
                    if (t[ft.expando])
                        return t;
                    var e,
                        n,
                        i,
                        r = t.type,
                        o = t,
                        s = this.fixHooks[r];
                    for (s || (this.fixHooks[r] = s = Qt.test(r) ? this.mouseHooks : Xt.test(r) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, t = new ft.Event(o), e = i.length; e--;)
                        n = i[e], t[n] = o[n];
                    return t.target || (t.target = o.srcElement || it), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, s.filter ? s.filter(t, o) : t
                },
                props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                fixHooks: {},
                keyHooks: {
                    props: "char charCode key keyCode".split(" "),
                    filter: function(t, e) {
                        return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
                    }
                },
                mouseHooks: {
                    props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                    filter: function(t, e) {
                        var n,
                            i,
                            r,
                            o = e.button,
                            s = e.fromElement;
                        return null == t.pageX && null != e.clientX && (i = t.target.ownerDocument || it, r = i.documentElement, n = i.body, t.pageX = e.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), t.pageY = e.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)), !t.relatedTarget && s && (t.relatedTarget = s === t.target ? e.toElement : s), t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t
                    }
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    focus: {
                        trigger: function() {
                            if (this !== b() && this.focus)
                                try {
                                    return this.focus(), !1
                                } catch (t) {}
                        },
                        delegateType: "focusin"
                    },
                    blur: {
                        trigger: function() {
                            if (this === b() && this.blur)
                                return this.blur(), !1
                        },
                        delegateType: "focusout"
                    },
                    click: {
                        trigger: function() {
                            if (ft.nodeName(this, "input") && "checkbox" === this.type && this.click)
                                return this.click(), !1
                        },
                        _default: function(t) {
                            return ft.nodeName(t.target, "a")
                        }
                    },
                    beforeunload: {
                        postDispatch: function(t) {
                            void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                        }
                    }
                },
                simulate: function(t, e, n) {
                    var i = ft.extend(new ft.Event, n, {
                        type: t,
                        isSimulated: !0
                    });
                    ft.event.trigger(i, null, e), i.isDefaultPrevented() && n.preventDefault()
                }
            }, ft.removeEvent = it.removeEventListener ? function(t, e, n) {
                t.removeEventListener && t.removeEventListener(e, n)
            } : function(t, e, n) {
                var i = "on" + e;
                t.detachEvent && ("undefined" == typeof t[i] && (t[i] = null), t.detachEvent(i, n))
            }, ft.Event = function(t, e) {
                return this instanceof ft.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? v : w) : this.type = t, e && ft.extend(this, e), this.timeStamp = t && t.timeStamp || ft.now(), void (this[ft.expando] = !0)) : new ft.Event(t, e)
            }, ft.Event.prototype = {
                constructor: ft.Event,
                isDefaultPrevented: w,
                isPropagationStopped: w,
                isImmediatePropagationStopped: w,
                preventDefault: function() {
                    var t = this.originalEvent;
                    this.isDefaultPrevented = v, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
                },
                stopPropagation: function() {
                    var t = this.originalEvent;
                    this.isPropagationStopped = v, t && !this.isSimulated && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
                },
                stopImmediatePropagation: function() {
                    var t = this.originalEvent;
                    this.isImmediatePropagationStopped = v, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
                }
            }, ft.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, function(t, e) {
                ft.event.special[t] = {
                    delegateType: e,
                    bindType: e,
                    handle: function(t) {
                        var n,
                            i = this,
                            r = t.relatedTarget,
                            o = t.handleObj;
                        return r && (r === i || ft.contains(i, r)) || (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n
                    }
                }
            }), ht.submit || (ft.event.special.submit = {
                setup: function() {
                    return !ft.nodeName(this, "form") && void ft.event.add(this, "click._submit keypress._submit", function(t) {
                            var e = t.target,
                                n = ft.nodeName(e, "input") || ft.nodeName(e, "button") ? ft.prop(e, "form") : void 0;
                            n && !ft._data(n, "submit") && (ft.event.add(n, "submit._submit", function(t) {
                                t._submitBubble = !0
                            }), ft._data(n, "submit", !0))
                        })
                },
                postDispatch: function(t) {
                    t._submitBubble && (delete t._submitBubble, this.parentNode && !t.isTrigger && ft.event.simulate("submit", this.parentNode, t))
                },
                teardown: function() {
                    return !ft.nodeName(this, "form") && void ft.event.remove(this, "._submit")
                }
            }), ht.change || (ft.event.special.change = {
                setup: function() {
                    return Vt.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (ft.event.add(this, "propertychange._change", function(t) {
                        "checked" === t.originalEvent.propertyName && (this._justChanged = !0)
                    }), ft.event.add(this, "click._change", function(t) {
                        this._justChanged && !t.isTrigger && (this._justChanged = !1), ft.event.simulate("change", this, t)
                    })), !1) : void ft.event.add(this, "beforeactivate._change", function(t) {
                        var e = t.target;
                        Vt.test(e.nodeName) && !ft._data(e, "change") && (ft.event.add(e, "change._change", function(t) {
                            !this.parentNode || t.isSimulated || t.isTrigger || ft.event.simulate("change", this.parentNode, t)
                        }), ft._data(e, "change", !0))
                    })
                },
                handle: function(t) {
                    var e = t.target;
                    if (this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type)
                        return t.handleObj.handler.apply(this, arguments)
                },
                teardown: function() {
                    return ft.event.remove(this, "._change"), !Vt.test(this.nodeName)
                }
            }), ht.focusin || ft.each({
                focus: "focusin",
                blur: "focusout"
            }, function(t, e) {
                var n = function(t) {
                    ft.event.simulate(e, t.target, ft.event.fix(t))
                };
                ft.event.special[e] = {
                    setup: function() {
                        var i = this.ownerDocument || this,
                            r = ft._data(i, e);
                        r || i.addEventListener(t, n, !0), ft._data(i, e, (r || 0) + 1)
                    },
                    teardown: function() {
                        var i = this.ownerDocument || this,
                            r = ft._data(i, e) - 1;
                        r ? ft._data(i, e, r) : (i.removeEventListener(t, n, !0), ft._removeData(i, e))
                    }
                }
            }), ft.fn.extend({
                on: function(t, e, n, i) {
                    return x(this, t, e, n, i)
                },
                one: function(t, e, n, i) {
                    return x(this, t, e, n, i, 1)
                },
                off: function(t, e, n) {
                    var i,
                        r;
                    if (t && t.preventDefault && t.handleObj)
                        return i = t.handleObj, ft(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                    if ("object" == typeof t) {
                        for (r in t)
                            this.off(r, e, t[r]);
                        return this
                    }
                    return e !== !1 && "function" != typeof e || (n = e, e = void 0), n === !1 && (n = w), this.each(function() {
                        ft.event.remove(this, t, n, e)
                    })
                },
                trigger: function(t, e) {
                    return this.each(function() {
                        ft.event.trigger(t, e, this)
                    })
                },
                triggerHandler: function(t, e) {
                    var n = this[0];
                    if (n)
                        return ft.event.trigger(t, e, n, !0)
                }
            });
            var Kt = / jQuery\d+="(?:null|\d+)"/g,
                te = new RegExp("<(?:" + Ut + ")[\\s/>]", "i"),
                ee = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
                ne = /<script|<style|<link/i,
                ie = /checked\s*(?:[^=]|=\s*.checked.)/i,
                re = /^true\/(.*)/,
                oe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
                se = f(it),
                ae = se.appendChild(it.createElement("div"));
            ft.extend({
                htmlPrefilter: function(t) {
                    return t.replace(ee, "<$1></$2>")
                },
                clone: function(t, e, n) {
                    var i,
                        r,
                        o,
                        s,
                        a,
                        l = ft.contains(t.ownerDocument, t);
                    if (ht.html5Clone || ft.isXMLDoc(t) || !te.test("<" + t.nodeName + ">") ? o = t.cloneNode(!0) : (ae.innerHTML = t.outerHTML, ae.removeChild(o = ae.firstChild)), !(ht.noCloneEvent && ht.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || ft.isXMLDoc(t)))
                        for (i = p(o), a = p(t), s = 0; null != (r = a[s]); ++s)
                            i[s] && C(r, i[s]);
                    if (e)
                        if (n)
                            for (a = a || p(t), i = i || p(o), s = 0; null != (r = a[s]); s++)
                                T(r, i[s]);
                        else
                            T(t, o);
                    return i = p(o, "script"), i.length > 0 && m(i, !l && p(t, "script")), i = a = r = null, o
                },
                cleanData: function(t, e) {
                    for (var n, i, r, o, s = 0, a = ft.expando, l = ft.cache, u = ht.attributes, c = ft.event.special; null != (n = t[s]); s++)
                        if ((e || Ot(n)) && (r = n[a], o = r && l[r])) {
                            if (o.events)
                                for (i in o.events)
                                    c[i] ? ft.event.remove(n, i) : ft.removeEvent(n, i, o.handle);
                            l[r] && (delete l[r], u || "undefined" == typeof n.removeAttribute ? n[a] = void 0 : n.removeAttribute(a), nt.push(r))
                        }
                }
            }), ft.fn.extend({
                domManip: D,
                detach: function(t) {
                    return M(this, t, !0)
                },
                remove: function(t) {
                    return M(this, t)
                },
                text: function(t) {
                    return Ht(this, function(t) {
                        return void 0 === t ? ft.text(this) : this.empty().append((this[0] && this[0].ownerDocument || it).createTextNode(t))
                    }, null, t, arguments.length)
                },
                append: function() {
                    return D(this, arguments, function(t) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var e = _(this, t);
                            e.appendChild(t)
                        }
                    })
                },
                prepend: function() {
                    return D(this, arguments, function(t) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var e = _(this, t);
                            e.insertBefore(t, e.firstChild)
                        }
                    })
                },
                before: function() {
                    return D(this, arguments, function(t) {
                        this.parentNode && this.parentNode.insertBefore(t, this)
                    })
                },
                after: function() {
                    return D(this, arguments, function(t) {
                        this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                    })
                },
                empty: function() {
                    for (var t, e = 0; null != (t = this[e]); e++) {
                        for (1 === t.nodeType && ft.cleanData(p(t, !1)); t.firstChild;)
                            t.removeChild(t.firstChild);
                        t.options && ft.nodeName(t, "select") && (t.options.length = 0)
                    }
                    return this
                },
                clone: function(t, e) {
                    return t = null != t && t, e = null == e ? t : e, this.map(function() {
                        return ft.clone(this, t, e)
                    })
                },
                html: function(t) {
                    return Ht(this, function(t) {
                        var e = this[0] || {},
                            n = 0,
                            i = this.length;
                        if (void 0 === t)
                            return 1 === e.nodeType ? e.innerHTML.replace(Kt, "") : void 0;
                        if ("string" == typeof t && !ne.test(t) && (ht.htmlSerialize || !te.test(t)) && (ht.leadingWhitespace || !Bt.test(t)) && !zt[(qt.exec(t) || ["", ""])[1].toLowerCase()]) {
                            t = ft.htmlPrefilter(t);
                            try {
                                for (; n < i; n++)
                                    e = this[n] || {}, 1 === e.nodeType && (ft.cleanData(p(e, !1)), e.innerHTML = t);
                                e = 0
                            } catch (t) {}
                        }
                        e && this.empty().append(t)
                    }, null, t, arguments.length)
                },
                replaceWith: function() {
                    var t = [];
                    return D(this, arguments, function(e) {
                        var n = this.parentNode;
                        ft.inArray(this, t) < 0 && (ft.cleanData(p(this)), n && n.replaceChild(e, this))
                    }, t)
                }
            }), ft.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function(t, e) {
                ft.fn[t] = function(t) {
                    for (var n, i = 0, r = [], o = ft(t), s = o.length - 1; i <= s; i++)
                        n = i === s ? this : this.clone(!0), ft(o[i])[e](n), st.apply(r, n.get());
                    return this.pushStack(r)
                }
            });
            var le,
                ue = {
                    HTML: "block",
                    BODY: "block"
                },
                ce = /^margin/,
                he = new RegExp("^(" + Lt + ")(?!px)[a-z%]+$", "i"),
                de = function(t, e, n, i) {
                    var r,
                        o,
                        s = {};
                    for (o in e)
                        s[o] = t.style[o], t.style[o] = e[o];
                    r = n.apply(t, i || []);
                    for (o in e)
                        t.style[o] = s[o];
                    return r
                },
                fe = it.documentElement;
            !function() {
                function e() {
                    var e,
                        c,
                        h = it.documentElement;
                    h.appendChild(l), u.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", n = r = a = !1, i = s = !0, t.getComputedStyle && (c = t.getComputedStyle(u), n = "1%" !== (c || {}).top, a = "2px" === (c || {}).marginLeft, r = "4px" === (c || {
                        width: "4px"
                    }).width, u.style.marginRight = "50%", i = "4px" === (c || {
                        marginRight: "4px"
                    }).marginRight, e = u.appendChild(it.createElement("div")), e.style.cssText = u.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", e.style.marginRight = e.style.width = "0", u.style.width = "1px", s = !parseFloat((t.getComputedStyle(e) || {}).marginRight), u.removeChild(e)), u.style.display = "none", o = 0 === u.getClientRects().length, o && (u.style.display = "", u.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", u.childNodes[0].style.borderCollapse = "separate", e = u.getElementsByTagName("td"), e[0].style.cssText = "margin:0;border:0;padding:0;display:none", o = 0 === e[0].offsetHeight, o && (e[0].style.display = "", e[1].style.display = "none", o = 0 === e[0].offsetHeight)), h.removeChild(l)
                }
                var n,
                    i,
                    r,
                    o,
                    s,
                    a,
                    l = it.createElement("div"),
                    u = it.createElement("div");
                u.style && (u.style.cssText = "float:left;opacity:.5", ht.opacity = "0.5" === u.style.opacity, ht.cssFloat = !!u.style.cssFloat, u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", ht.clearCloneStyle = "content-box" === u.style.backgroundClip, l = it.createElement("div"), l.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", u.innerHTML = "", l.appendChild(u), ht.boxSizing = "" === u.style.boxSizing || "" === u.style.MozBoxSizing || "" === u.style.WebkitBoxSizing, ft.extend(ht, {
                    reliableHiddenOffsets: function() {
                        return null == n && e(), o
                    },
                    boxSizingReliable: function() {
                        return null == n && e(), r
                    },
                    pixelMarginRight: function() {
                        return null == n && e(), i
                    },
                    pixelPosition: function() {
                        return null == n && e(), n
                    },
                    reliableMarginRight: function() {
                        return null == n && e(), s
                    },
                    reliableMarginLeft: function() {
                        return null == n && e(), a
                    }
                }))
            }();
            var pe,
                me,
                ge = /^(top|right|bottom|left)$/;
            t.getComputedStyle ? (pe = function(e) {
                var n = e.ownerDocument.defaultView;
                return n && n.opener || (n = t), n.getComputedStyle(e)
            }, me = function(t, e, n) {
                var i,
                    r,
                    o,
                    s,
                    a = t.style;
                return n = n || pe(t), s = n ? n.getPropertyValue(e) || n[e] : void 0, "" !== s && void 0 !== s || ft.contains(t.ownerDocument, t) || (s = ft.style(t, e)), n && !ht.pixelMarginRight() && he.test(s) && ce.test(e) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o), void 0 === s ? s : s + ""
            }) : fe.currentStyle && (pe = function(t) {
                return t.currentStyle
            }, me = function(t, e, n) {
                var i,
                    r,
                    o,
                    s,
                    a = t.style;
                return n = n || pe(t), s = n ? n[e] : void 0, null == s && a && a[e] && (s = a[e]), he.test(s) && !ge.test(e) && (i = a.left, r = t.runtimeStyle, o = r && r.left, o && (r.left = t.currentStyle.left), a.left = "fontSize" === e ? "1em" : s, s = a.pixelLeft + "px", a.left = i, o && (r.left = o)), void 0 === s ? s : s + "" || "auto"
            });
            var ye = /alpha\([^)]*\)/i,
                ve = /opacity\s*=\s*([^)]*)/i,
                we = /^(none|table(?!-c[ea]).+)/,
                be = new RegExp("^(" + Lt + ")(.*)$", "i"),
                xe = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                },
                _e = {
                    letterSpacing: "0",
                    fontWeight: "400"
                },
                ke = ["Webkit", "O", "Moz", "ms"],
                Se = it.createElement("div").style;
            ft.extend({
                cssHooks: {
                    opacity: {
                        get: function(t, e) {
                            if (e) {
                                var n = me(t, "opacity");
                                return "" === n ? "1" : n
                            }
                        }
                    }
                },
                cssNumber: {
                    animationIterationCount: !0,
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {
                    float: ht.cssFloat ? "cssFloat" : "styleFloat"
                },
                style: function(t, e, n, i) {
                    if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                        var r,
                            o,
                            s,
                            a = ft.camelCase(e),
                            l = t.style;
                        if (e = ft.cssProps[a] || (ft.cssProps[a] = O(a) || a), s = ft.cssHooks[e] || ft.cssHooks[a], void 0 === n)
                            return s && "get" in s && void 0 !== (r = s.get(t, !1, i)) ? r : l[e];
                        if (o = typeof n, "string" === o && (r = Yt.exec(n)) && r[1] && (n = d(t, e, r), o = "number"), null != n && n === n && ("number" === o && (n += r && r[3] || (ft.cssNumber[a] ? "" : "px")), ht.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(s && "set" in s && void 0 === (n = s.set(t, n, i)))))
                            try {
                                l[e] = n
                            } catch (t) {}
                    }
                },
                css: function(t, e, n, i) {
                    var r,
                        o,
                        s,
                        a = ft.camelCase(e);
                    return e = ft.cssProps[a] || (ft.cssProps[a] = O(a) || a), s = ft.cssHooks[e] || ft.cssHooks[a], s && "get" in s && (o = s.get(t, !0, n)), void 0 === o && (o = me(t, e, i)), "normal" === o && e in _e && (o = _e[e]), "" === n || n ? (r = parseFloat(o), n === !0 || isFinite(r) ? r || 0 : o) : o
                }
            }), ft.each(["height", "width"], function(t, e) {
                ft.cssHooks[e] = {
                    get: function(t, n, i) {
                        if (n)
                            return we.test(ft.css(t, "display")) && 0 === t.offsetWidth ? de(t, xe, function() {
                                return Y(t, e, i)
                            }) : Y(t, e, i)
                    },
                    set: function(t, n, i) {
                        var r = i && pe(t);
                        return P(t, n, i ? L(t, e, i, ht.boxSizing && "border-box" === ft.css(t, "boxSizing", !1, r), r) : 0)
                    }
                }
            }), ht.opacity || (ft.cssHooks.opacity = {
                get: function(t, e) {
                    return ve.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
                },
                set: function(t, e) {
                    var n = t.style,
                        i = t.currentStyle,
                        r = ft.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                        o = i && i.filter || n.filter || "";
                    n.zoom = 1, (e >= 1 || "" === e) && "" === ft.trim(o.replace(ye, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === e || i && !i.filter) || (n.filter = ye.test(o) ? o.replace(ye, r) : o + " " + r)
                }
            }), ft.cssHooks.marginRight = E(ht.reliableMarginRight, function(t, e) {
                if (e)
                    return de(t, {
                        display: "inline-block"
                    }, me, [t, "marginRight"])
            }), ft.cssHooks.marginLeft = E(ht.reliableMarginLeft, function(t, e) {
                if (e)
                    return (parseFloat(me(t, "marginLeft")) || (ft.contains(t.ownerDocument, t) ? t.getBoundingClientRect().left - de(t, {
                        marginLeft: 0
                    }, function() {
                        return t.getBoundingClientRect().left
                    }) : 0)) + "px"
            }), ft.each({
                margin: "",
                padding: "",
                border: "Width"
            }, function(t, e) {
                ft.cssHooks[t + e] = {
                    expand: function(n) {
                        for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++)
                            r[t + Ft[i] + e] = o[i] || o[i - 2] || o[0];
                        return r
                    }
                }, ce.test(t) || (ft.cssHooks[t + e].set = P)
            }), ft.fn.extend({
                css: function(t, e) {
                    return Ht(this, function(t, e, n) {
                        var i,
                            r,
                            o = {},
                            s = 0;
                        if (ft.isArray(e)) {
                            for (i = pe(t), r = e.length; s < r; s++)
                                o[e[s]] = ft.css(t, e[s], !1, i);
                            return o
                        }
                        return void 0 !== n ? ft.style(t, e, n) : ft.css(t, e)
                    }, t, e, arguments.length > 1)
                },
                show: function() {
                    return A(this, !0)
                },
                hide: function() {
                    return A(this)
                },
                toggle: function(t) {
                    return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                        Rt(this) ? ft(this).show() : ft(this).hide()
                    })
                }
            }), ft.Tween = F, F.prototype = {
                constructor: F,
                init: function(t, e, n, i, r, o) {
                    this.elem = t, this.prop = n, this.easing = r || ft.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = o || (ft.cssNumber[n] ? "" : "px")
                },
                cur: function() {
                    var t = F.propHooks[this.prop];
                    return t && t.get ? t.get(this) : F.propHooks._default.get(this)
                },
                run: function(t) {
                    var e,
                        n = F.propHooks[this.prop];
                    return this.options.duration ? this.pos = e = ft.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : F.propHooks._default.set(this), this
                }
            }, F.prototype.init.prototype = F.prototype, F.propHooks = {
                _default: {
                    get: function(t) {
                        var e;
                        return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = ft.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0)
                    },
                    set: function(t) {
                        ft.fx.step[t.prop] ? ft.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[ft.cssProps[t.prop]] && !ft.cssHooks[t.prop] ? t.elem[t.prop] = t.now : ft.style(t.elem, t.prop, t.now + t.unit)
                    }
                }
            }, F.propHooks.scrollTop = F.propHooks.scrollLeft = {
                set: function(t) {
                    t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
                }
            }, ft.easing = {
                linear: function(t) {
                    return t
                },
                swing: function(t) {
                    return .5 - Math.cos(t * Math.PI) / 2
                },
                _default: "swing"
            }, ft.fx = F.prototype.init, ft.fx.step = {};
            var Te,
                Ce,
                De = /^(?:toggle|show|hide)$/,
                Me = /queueHooks$/;
            ft.Animation = ft.extend(B, {
                tweeners: {
                    "*": [function(t, e) {
                        var n = this.createTween(t, e);
                        return d(n.elem, t, Yt.exec(e), n), n
                    }]
                },
                tweener: function(t, e) {
                    ft.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(Nt);
                    for (var n, i = 0, r = t.length; i < r; i++)
                        n = t[i], B.tweeners[n] = B.tweeners[n] || [], B.tweeners[n].unshift(e)
                },
                prefilters: [q],
                prefilter: function(t, e) {
                    e ? B.prefilters.unshift(t) : B.prefilters.push(t)
                }
            }), ft.speed = function(t, e, n) {
                var i = t && "object" == typeof t ? ft.extend({}, t) : {
                    complete: n || !n && e || ft.isFunction(t) && t,
                    duration: t,
                    easing: n && e || e && !ft.isFunction(e) && e
                };
                return i.duration = ft.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in ft.fx.speeds ? ft.fx.speeds[i.duration] : ft.fx.speeds._default, null != i.queue && i.queue !== !0 || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                    ft.isFunction(i.old) && i.old.call(this), i.queue && ft.dequeue(this, i.queue)
                }, i
            }, ft.fn.extend({
                fadeTo: function(t, e, n, i) {
                    return this.filter(Rt).css("opacity", 0).show().end().animate({
                        opacity: e
                    }, t, n, i)
                },
                animate: function(t, e, n, i) {
                    var r = ft.isEmptyObject(t),
                        o = ft.speed(e, n, i),
                        s = function() {
                            var e = B(this, ft.extend({}, t), o);
                            (r || ft._data(this, "finish")) && e.stop(!0)
                        };
                    return s.finish = s, r || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
                },
                stop: function(t, e, n) {
                    var i = function(t) {
                        var e = t.stop;
                        delete t.stop, e(n)
                    };
                    return "string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                        var e = !0,
                            r = null != t && t + "queueHooks",
                            o = ft.timers,
                            s = ft._data(this);
                        if (r)
                            s[r] && s[r].stop && i(s[r]);
                        else
                            for (r in s)
                                s[r] && s[r].stop && Me.test(r) && i(s[r]);
                        for (r = o.length; r--;)
                            o[r].elem !== this || null != t && o[r].queue !== t || (o[r].anim.stop(n), e = !1, o.splice(r, 1));
                        !e && n || ft.dequeue(this, t)
                    })
                },
                finish: function(t) {
                    return t !== !1 && (t = t || "fx"), this.each(function() {
                        var e,
                            n = ft._data(this),
                            i = n[t + "queue"],
                            r = n[t + "queueHooks"],
                            o = ft.timers,
                            s = i ? i.length : 0;
                        for (n.finish = !0, ft.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = o.length; e--;)
                            o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                        for (e = 0; e < s; e++)
                            i[e] && i[e].finish && i[e].finish.call(this);
                        delete n.finish
                    })
                }
            }), ft.each(["toggle", "show", "hide"], function(t, e) {
                var n = ft.fn[e];
                ft.fn[e] = function(t, i, r) {
                    return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(H(e, !0), t, i, r)
                }
            }), ft.each({
                slideDown: H("show"),
                slideUp: H("hide"),
                slideToggle: H("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(t, e) {
                ft.fn[t] = function(t, n, i) {
                    return this.animate(e, t, n, i)
                }
            }), ft.timers = [], ft.fx.tick = function() {
                var t,
                    e = ft.timers,
                    n = 0;
                for (Te = ft.now(); n < e.length; n++)
                    t = e[n], t() || e[n] !== t || e.splice(n--, 1);
                e.length || ft.fx.stop(), Te = void 0
            }, ft.fx.timer = function(t) {
                ft.timers.push(t), t() ? ft.fx.start() : ft.timers.pop()
            }, ft.fx.interval = 13, ft.fx.start = function() {
                Ce || (Ce = t.setInterval(ft.fx.tick, ft.fx.interval))
            }, ft.fx.stop = function() {
                t.clearInterval(Ce), Ce = null
            }, ft.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, ft.fn.delay = function(e, n) {
                return e = ft.fx ? ft.fx.speeds[e] || e : e, n = n || "fx", this.queue(n, function(n, i) {
                    var r = t.setTimeout(n, e);
                    i.stop = function() {
                        t.clearTimeout(r)
                    }
                })
            }, function() {
                var t,
                    e = it.createElement("input"),
                    n = it.createElement("div"),
                    i = it.createElement("select"),
                    r = i.appendChild(it.createElement("option"));
                n = it.createElement("div"), n.setAttribute("className", "t"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", t = n.getElementsByTagName("a")[0], e.setAttribute("type", "checkbox"), n.appendChild(e), t = n.getElementsByTagName("a")[0], t.style.cssText = "top:1px", ht.getSetAttribute = "t" !== n.className, ht.style = /top/.test(t.getAttribute("style")), ht.hrefNormalized = "/a" === t.getAttribute("href"), ht.checkOn = !!e.value, ht.optSelected = r.selected, ht.enctype = !!it.createElement("form").enctype, i.disabled = !0, ht.optDisabled = !r.disabled, e = it.createElement("input"), e.setAttribute("value", ""), ht.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), ht.radioValue = "t" === e.value
            }();
            var Ne = /\r/g,
                je = /[\x20\t\r\n\f]+/g;
            ft.fn.extend({
                val: function(t) {
                    var e,
                        n,
                        i,
                        r = this[0];
                    {
                        if (arguments.length)
                            return i = ft.isFunction(t), this.each(function(n) {
                                var r;
                                1 === this.nodeType && (r = i ? t.call(this, n, ft(this).val()) : t, null == r ? r = "" : "number" == typeof r ? r += "" : ft.isArray(r) && (r = ft.map(r, function(t) {
                                    return null == t ? "" : t + ""
                                })), e = ft.valHooks[this.type] || ft.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r))
                            });
                        if (r)
                            return e = ft.valHooks[r.type] || ft.valHooks[r.nodeName.toLowerCase()], e && "get" in e && void 0 !== (n = e.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(Ne, "") : null == n ? "" : n)
                    }
                }
            }), ft.extend({
                valHooks: {
                    option: {
                        get: function(t) {
                            var e = ft.find.attr(t, "value");
                            return null != e ? e : ft.trim(ft.text(t)).replace(je, " ")
                        }
                    },
                    select: {
                        get: function(t) {
                            for (var e, n, i = t.options, r = t.selectedIndex, o = "select-one" === t.type || r < 0, s = o ? null : [], a = o ? r + 1 : i.length, l = r < 0 ? a : o ? r : 0; l < a; l++)
                                if (n = i[l], (n.selected || l === r) && (ht.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !ft.nodeName(n.parentNode, "optgroup"))) {
                                    if (e = ft(n).val(), o)
                                        return e;
                                    s.push(e)
                                }
                            return s
                        },
                        set: function(t, e) {
                            for (var n, i, r = t.options, o = ft.makeArray(e), s = r.length; s--;)
                                if (i = r[s], ft.inArray(ft.valHooks.option.get(i), o) > -1)
                                    try {
                                        i.selected = n = !0
                                    } catch (t) {
                                        i.scrollHeight
                                    }
                                else
                                    i.selected = !1;
                            return n || (t.selectedIndex = -1), r
                        }
                    }
                }
            }), ft.each(["radio", "checkbox"], function() {
                ft.valHooks[this] = {
                    set: function(t, e) {
                        if (ft.isArray(e))
                            return t.checked = ft.inArray(ft(t).val(), e) > -1
                    }
                }, ht.checkOn || (ft.valHooks[this].get = function(t) {
                    return null === t.getAttribute("value") ? "on" : t.value
                })
            });
            var Ee,
                Oe,
                Ae = ft.expr.attrHandle,
                Pe = /^(?:checked|selected)$/i,
                Le = ht.getSetAttribute,
                Ye = ht.input;
            ft.fn.extend({
                attr: function(t, e) {
                    return Ht(this, ft.attr, t, e, arguments.length > 1)
                },
                removeAttr: function(t) {
                    return this.each(function() {
                        ft.removeAttr(this, t)
                    })
                }
            }), ft.extend({
                attr: function(t, e, n) {
                    var i,
                        r,
                        o = t.nodeType;
                    if (3 !== o && 8 !== o && 2 !== o)
                        return "undefined" == typeof t.getAttribute ? ft.prop(t, e, n) : (1 === o && ft.isXMLDoc(t) || (e = e.toLowerCase(), r = ft.attrHooks[e] || (ft.expr.match.bool.test(e) ? Oe : Ee)), void 0 !== n ? null === n ? void ft.removeAttr(t, e) : r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : r && "get" in r && null !== (i = r.get(t, e)) ? i : (i = ft.find.attr(t, e), null == i ? void 0 : i))
                },
                attrHooks: {
                    type: {
                        set: function(t, e) {
                            if (!ht.radioValue && "radio" === e && ft.nodeName(t, "input")) {
                                var n = t.value;
                                return t.setAttribute("type", e), n && (t.value = n), e
                            }
                        }
                    }
                },
                removeAttr: function(t, e) {
                    var n,
                        i,
                        r = 0,
                        o = e && e.match(Nt);
                    if (o && 1 === t.nodeType)
                        for (; n = o[r++];)
                            i = ft.propFix[n] || n, ft.expr.match.bool.test(n) ? Ye && Le || !Pe.test(n) ? t[i] = !1 : t[ft.camelCase("default-" + n)] = t[i] = !1 : ft.attr(t, n, ""), t.removeAttribute(Le ? n : i)
                }
            }), Oe = {
                set: function(t, e, n) {
                    return e === !1 ? ft.removeAttr(t, n) : Ye && Le || !Pe.test(n) ? t.setAttribute(!Le && ft.propFix[n] || n, n) : t[ft.camelCase("default-" + n)] = t[n] = !0, n
                }
            }, ft.each(ft.expr.match.bool.source.match(/\w+/g), function(t, e) {
                var n = Ae[e] || ft.find.attr;
                Ye && Le || !Pe.test(e) ? Ae[e] = function(t, e, i) {
                    var r,
                        o;
                    return i || (o = Ae[e], Ae[e] = r, r = null != n(t, e, i) ? e.toLowerCase() : null, Ae[e] = o), r
                } : Ae[e] = function(t, e, n) {
                    if (!n)
                        return t[ft.camelCase("default-" + e)] ? e.toLowerCase() : null
                }
            }), Ye && Le || (ft.attrHooks.value = {
                set: function(t, e, n) {
                    return ft.nodeName(t, "input") ? void (t.defaultValue = e) : Ee && Ee.set(t, e, n)
                }
            }), Le || (Ee = {
                set: function(t, e, n) {
                    var i = t.getAttributeNode(n);
                    if (i || t.setAttributeNode(i = t.ownerDocument.createAttribute(n)), i.value = e += "", "value" === n || e === t.getAttribute(n))
                        return e
                }
            }, Ae.id = Ae.name = Ae.coords = function(t, e, n) {
                var i;
                if (!n)
                    return (i = t.getAttributeNode(e)) && "" !== i.value ? i.value : null
            }, ft.valHooks.button = {
                get: function(t, e) {
                    var n = t.getAttributeNode(e);
                    if (n && n.specified)
                        return n.value
                },
                set: Ee.set
            }, ft.attrHooks.contenteditable = {
                set: function(t, e, n) {
                    Ee.set(t, "" !== e && e, n)
                }
            }, ft.each(["width", "height"], function(t, e) {
                ft.attrHooks[e] = {
                    set: function(t, n) {
                        if ("" === n)
                            return t.setAttribute(e, "auto"), n
                    }
                }
            })), ht.style || (ft.attrHooks.style = {
                get: function(t) {
                    return t.style.cssText || void 0
                },
                set: function(t, e) {
                    return t.style.cssText = e + ""
                }
            });
            var Fe = /^(?:input|select|textarea|button|object)$/i,
                Re = /^(?:a|area)$/i;
            ft.fn.extend({
                prop: function(t, e) {
                    return Ht(this, ft.prop, t, e, arguments.length > 1)
                },
                removeProp: function(t) {
                    return t = ft.propFix[t] || t, this.each(function() {
                        try {
                            this[t] = void 0, delete this[t]
                        } catch (t) {}
                    })
                }
            }), ft.extend({
                prop: function(t, e, n) {
                    var i,
                        r,
                        o = t.nodeType;
                    if (3 !== o && 8 !== o && 2 !== o)
                        return 1 === o && ft.isXMLDoc(t) || (e = ft.propFix[e] || e, r = ft.propHooks[e]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : t[e] = n : r && "get" in r && null !== (i = r.get(t, e)) ? i : t[e]
                },
                propHooks: {
                    tabIndex: {
                        get: function(t) {
                            var e = ft.find.attr(t, "tabindex");
                            return e ? parseInt(e, 10) : Fe.test(t.nodeName) || Re.test(t.nodeName) && t.href ? 0 : -1
                        }
                    }
                },
                propFix: {
                    for: "htmlFor",
                    class: "className"
                }
            }), ht.hrefNormalized || ft.each(["href", "src"], function(t, e) {
                ft.propHooks[e] = {
                    get: function(t) {
                        return t.getAttribute(e, 4)
                    }
                }
            }), ht.optSelected || (ft.propHooks.selected = {
                get: function(t) {
                    var e = t.parentNode;
                    return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
                },
                set: function(t) {
                    var e = t.parentNode;
                    e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
                }
            }), ft.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
                ft.propFix[this.toLowerCase()] = this
            }), ht.enctype || (ft.propFix.enctype = "encoding");
            var He = /[\t\r\n\f]/g;
            ft.fn.extend({
                addClass: function(t) {
                    var e,
                        n,
                        i,
                        r,
                        o,
                        s,
                        a,
                        l = 0;
                    if (ft.isFunction(t))
                        return this.each(function(e) {
                            ft(this).addClass(t.call(this, e, U(this)))
                        });
                    if ("string" == typeof t && t)
                        for (e = t.match(Nt) || []; n = this[l++];)
                            if (r = U(n), i = 1 === n.nodeType && (" " + r + " ").replace(He, " ")) {
                                for (s = 0; o = e[s++];)
                                    i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                                a = ft.trim(i), r !== a && ft.attr(n, "class", a)
                            }
                    return this
                },
                removeClass: function(t) {
                    var e,
                        n,
                        i,
                        r,
                        o,
                        s,
                        a,
                        l = 0;
                    if (ft.isFunction(t))
                        return this.each(function(e) {
                            ft(this).removeClass(t.call(this, e, U(this)))
                        });
                    if (!arguments.length)
                        return this.attr("class", "");
                    if ("string" == typeof t && t)
                        for (e = t.match(Nt) || []; n = this[l++];)
                            if (r = U(n), i = 1 === n.nodeType && (" " + r + " ").replace(He, " ")) {
                                for (s = 0; o = e[s++];)
                                    for (; i.indexOf(" " + o + " ") > -1;)
                                        i = i.replace(" " + o + " ", " ");
                                a = ft.trim(i), r !== a && ft.attr(n, "class", a)
                            }
                    return this
                },
                toggleClass: function(t, e) {
                    var n = typeof t;
                    return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : ft.isFunction(t) ? this.each(function(n) {
                        ft(this).toggleClass(t.call(this, n, U(this), e), e)
                    }) : this.each(function() {
                        var e,
                            i,
                            r,
                            o;
                        if ("string" === n)
                            for (i = 0, r = ft(this), o = t.match(Nt) || []; e = o[i++];)
                                r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                        else
                            void 0 !== t && "boolean" !== n || (e = U(this), e && ft._data(this, "__className__", e), ft.attr(this, "class", e || t === !1 ? "" : ft._data(this, "__className__") || ""))
                    })
                },
                hasClass: function(t) {
                    var e,
                        n,
                        i = 0;
                    for (e = " " + t + " "; n = this[i++];)
                        if (1 === n.nodeType && (" " + U(n) + " ").replace(He, " ").indexOf(e) > -1)
                            return !0;
                    return !1
                }
            }), ft.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
                ft.fn[e] = function(t, n) {
                    return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
                }
            }), ft.fn.extend({
                hover: function(t, e) {
                    return this.mouseenter(t).mouseleave(e || t)
                }
            });
            var We = t.location,
                qe = ft.now(),
                Ie = /\?/,
                Be = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
            ft.parseJSON = function(e) {
                if (t.JSON && t.JSON.parse)
                    return t.JSON.parse(e + "");
                var n,
                    i = null,
                    r = ft.trim(e + "");
                return r && !ft.trim(r.replace(Be, function(t, e, r, o) {
                    return n && e && (i = 0), 0 === i ? t : (n = r || e, i += !o - !r, "")
                })) ? Function("return " + r)() : ft.error("Invalid JSON: " + e)
            }, ft.parseXML = function(e) {
                var n,
                    i;
                if (!e || "string" != typeof e)
                    return null;
                try {
                    t.DOMParser ? (i = new t.DOMParser, n = i.parseFromString(e, "text/xml")) : (n = new t.ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(e))
                } catch (t) {
                    n = void 0
                }
                return n && n.documentElement && !n.getElementsByTagName("parsererror").length || ft.error("Invalid XML: " + e), n
            };
            var Ue = /#.*$/,
                ze = /([?&])_=[^&]*/,
                $e = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
                Ge = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
                Ve = /^(?:GET|HEAD)$/,
                Xe = /^\/\//,
                Qe = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
                Ze = {},
                Je = {},
                Ke = "*/".concat("*"),
                tn = We.href,
                en = Qe.exec(tn.toLowerCase()) || [];
            ft.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: tn,
                    type: "GET",
                    isLocal: Ge.test(en[1]),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": Ke,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {
                        xml: /\bxml\b/,
                        html: /\bhtml/,
                        json: /\bjson\b/
                    },
                    responseFields: {
                        xml: "responseXML",
                        text: "responseText",
                        json: "responseJSON"
                    },
                    converters: {
                        "* text": String,
                        "text html": !0,
                        "text json": ft.parseJSON,
                        "text xml": ft.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function(t, e) {
                    return e ? G(G(t, ft.ajaxSettings), e) : G(ft.ajaxSettings, t)
                },
                ajaxPrefilter: z(Ze),
                ajaxTransport: z(Je),
                ajax: function(e, n) {
                    function i(e, n, i, r) {
                        var o,
                            h,
                            v,
                            w,
                            x,
                            k = n;
                        2 !== b && (b = 2, l && t.clearTimeout(l), c = void 0, a = r || "", _.readyState = e > 0 ? 4 : 0, o = e >= 200 && e < 300 || 304 === e, i && (w = V(d, _, i)), w = X(d, w, _, o), o ? (d.ifModified && (x = _.getResponseHeader("Last-Modified"), x && (ft.lastModified[s] = x), x = _.getResponseHeader("etag"), x && (ft.etag[s] = x)), 204 === e || "HEAD" === d.type ? k = "nocontent" : 304 === e ? k = "notmodified" : (k = w.state, h = w.data, v = w.error, o = !v)) : (v = k, !e && k || (k = "error", e < 0 && (e = 0))), _.status = e, _.statusText = (n || k) + "", o ? m.resolveWith(f, [h, k, _]) : m.rejectWith(f, [_, k, v]), _.statusCode(y), y = void 0, u && p.trigger(o ? "ajaxSuccess" : "ajaxError", [_, d, o ? h : v]), g.fireWith(f, [_, k]), u && (p.trigger("ajaxComplete", [_, d]), --ft.active || ft.event.trigger("ajaxStop")))
                    }
                    "object" == typeof e && (n = e, e = void 0), n = n || {};
                    var r,
                        o,
                        s,
                        a,
                        l,
                        u,
                        c,
                        h,
                        d = ft.ajaxSetup({}, n),
                        f = d.context || d,
                        p = d.context && (f.nodeType || f.jquery) ? ft(f) : ft.event,
                        m = ft.Deferred(),
                        g = ft.Callbacks("once memory"),
                        y = d.statusCode || {},
                        v = {},
                        w = {},
                        b = 0,
                        x = "canceled",
                        _ = {
                            readyState: 0,
                            getResponseHeader: function(t) {
                                var e;
                                if (2 === b) {
                                    if (!h)
                                        for (h = {}; e = $e.exec(a);)
                                            h[e[1].toLowerCase()] = e[2];
                                    e = h[t.toLowerCase()]
                                }
                                return null == e ? null : e
                            },
                            getAllResponseHeaders: function() {
                                return 2 === b ? a : null
                            },
                            setRequestHeader: function(t, e) {
                                var n = t.toLowerCase();
                                return b || (t = w[n] = w[n] || t, v[t] = e), this
                            },
                            overrideMimeType: function(t) {
                                return b || (d.mimeType = t), this
                            },
                            statusCode: function(t) {
                                var e;
                                if (t)
                                    if (b < 2)
                                        for (e in t)
                                            y[e] = [y[e], t[e]];
                                    else
                                        _.always(t[_.status]);
                                return this
                            },
                            abort: function(t) {
                                var e = t || x;
                                return c && c.abort(e), i(0, e), this
                            }
                        };
                    if (m.promise(_).complete = g.add, _.success = _.done, _.error = _.fail, d.url = ((e || d.url || tn) + "").replace(Ue, "").replace(Xe, en[1] + "//"), d.type = n.method || n.type || d.method || d.type, d.dataTypes = ft.trim(d.dataType || "*").toLowerCase().match(Nt) || [""], null == d.crossDomain && (r = Qe.exec(d.url.toLowerCase()), d.crossDomain = !(!r || r[1] === en[1] && r[2] === en[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (en[3] || ("http:" === en[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = ft.param(d.data, d.traditional)), $(Ze, d, n, _), 2 === b)
                        return _;
                    u = ft.event && d.global, u && 0 === ft.active++ && ft.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Ve.test(d.type), s = d.url, d.hasContent || (d.data && (s = d.url += (Ie.test(s) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = ze.test(s) ? s.replace(ze, "$1_=" + qe++) : s + (Ie.test(s) ? "&" : "?") + "_=" + qe++)), d.ifModified && (ft.lastModified[s] && _.setRequestHeader("If-Modified-Since", ft.lastModified[s]), ft.etag[s] && _.setRequestHeader("If-None-Match", ft.etag[s])), (d.data && d.hasContent && d.contentType !== !1 || n.contentType) && _.setRequestHeader("Content-Type", d.contentType), _.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Ke + "; q=0.01" : "") : d.accepts["*"]);
                    for (o in d.headers)
                        _.setRequestHeader(o, d.headers[o]);
                    if (d.beforeSend && (d.beforeSend.call(f, _, d) === !1 || 2 === b))
                        return _.abort();
                    x = "abort";
                    for (o in {
                        success: 1,
                        error: 1,
                        complete: 1
                    })
                        _[o](d[o]);
                    if (c = $(Je, d, n, _)) {
                        if (_.readyState = 1, u && p.trigger("ajaxSend", [_, d]), 2 === b)
                            return _;
                        d.async && d.timeout > 0 && (l = t.setTimeout(function() {
                            _.abort("timeout")
                        }, d.timeout));
                        try {
                            b = 1, c.send(v, i)
                        } catch (t) {
                            if (!(b < 2))
                                throw t;
                            i(-1, t)
                        }
                    } else
                        i(-1, "No Transport");
                    return _
                },
                getJSON: function(t, e, n) {
                    return ft.get(t, e, n, "json")
                },
                getScript: function(t, e) {
                    return ft.get(t, void 0, e, "script")
                }
            }), ft.each(["get", "post"], function(t, e) {
                ft[e] = function(t, n, i, r) {
                    return ft.isFunction(n) && (r = r || i, i = n, n = void 0), ft.ajax(ft.extend({
                        url: t,
                        type: e,
                        dataType: r,
                        data: n,
                        success: i
                    }, ft.isPlainObject(t) && t))
                }
            }), ft._evalUrl = function(t) {
                return ft.ajax({
                    url: t,
                    type: "GET",
                    dataType: "script",
                    cache: !0,
                    async: !1,
                    global: !1,
                    throws: !0
                })
            }, ft.fn.extend({
                wrapAll: function(t) {
                    if (ft.isFunction(t))
                        return this.each(function(e) {
                            ft(this).wrapAll(t.call(this, e))
                        });
                    if (this[0]) {
                        var e = ft(t, this[0].ownerDocument).eq(0).clone(!0);
                        this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                            for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;)
                                t = t.firstChild;
                            return t
                        }).append(this)
                    }
                    return this
                },
                wrapInner: function(t) {
                    return ft.isFunction(t) ? this.each(function(e) {
                        ft(this).wrapInner(t.call(this, e))
                    }) : this.each(function() {
                        var e = ft(this),
                            n = e.contents();
                        n.length ? n.wrapAll(t) : e.append(t)
                    })
                },
                wrap: function(t) {
                    var e = ft.isFunction(t);
                    return this.each(function(n) {
                        ft(this).wrapAll(e ? t.call(this, n) : t)
                    })
                },
                unwrap: function() {
                    return this.parent().each(function() {
                        ft.nodeName(this, "body") || ft(this).replaceWith(this.childNodes)
                    }).end()
                }
            }), ft.expr.filters.hidden = function(t) {
                return ht.reliableHiddenOffsets() ? t.offsetWidth <= 0 && t.offsetHeight <= 0 && !t.getClientRects().length : Z(t)
            }, ft.expr.filters.visible = function(t) {
                return !ft.expr.filters.hidden(t)
            };
            var nn = /%20/g,
                rn = /\[\]$/,
                on = /\r?\n/g,
                sn = /^(?:submit|button|image|reset|file)$/i,
                an = /^(?:input|select|textarea|keygen)/i;
            ft.param = function(t, e) {
                var n,
                    i = [],
                    r = function(t, e) {
                        e = ft.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
                    };
                if (void 0 === e && (e = ft.ajaxSettings && ft.ajaxSettings.traditional), ft.isArray(t) || t.jquery && !ft.isPlainObject(t))
                    ft.each(t, function() {
                        r(this.name, this.value)
                    });
                else
                    for (n in t)
                        J(n, t[n], e, r);
                return i.join("&").replace(nn, "+")
            }, ft.fn.extend({
                serialize: function() {
                    return ft.param(this.serializeArray())
                },
                serializeArray: function() {
                    return this.map(function() {
                        var t = ft.prop(this, "elements");
                        return t ? ft.makeArray(t) : this
                    }).filter(function() {
                        var t = this.type;
                        return this.name && !ft(this).is(":disabled") && an.test(this.nodeName) && !sn.test(t) && (this.checked || !Wt.test(t))
                    }).map(function(t, e) {
                        var n = ft(this).val();
                        return null == n ? null : ft.isArray(n) ? ft.map(n, function(t) {
                            return {
                                name: e.name,
                                value: t.replace(on, "\r\n")
                            }
                        }) : {
                            name: e.name,
                            value: n.replace(on, "\r\n")
                        }
                    }).get()
                }
            }), ft.ajaxSettings.xhr = void 0 !== t.ActiveXObject ? function() {
                return this.isLocal ? tt() : it.documentMode > 8 ? K() : /^(get|post|head|put|delete|options)$/i.test(this.type) && K() || tt()
            } : K;
            var ln = 0,
                un = {},
                cn = ft.ajaxSettings.xhr();
            t.attachEvent && t.attachEvent("onunload", function() {
                for (var t in un)
                    un[t](void 0, !0)
            }), ht.cors = !!cn && "withCredentials" in cn, cn = ht.ajax = !!cn, cn && ft.ajaxTransport(function(e) {
                if (!e.crossDomain || ht.cors) {
                    var n;
                    return {
                        send: function(i, r) {
                            var o,
                                s = e.xhr(),
                                a = ++ln;
                            if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                                for (o in e.xhrFields)
                                    s[o] = e.xhrFields[o];
                            e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                            for (o in i)
                                void 0 !== i[o] && s.setRequestHeader(o, i[o] + "");
                            s.send(e.hasContent && e.data || null), n = function(t, i) {
                                var o,
                                    l,
                                    u;
                                if (n && (i || 4 === s.readyState))
                                    if (delete un[a], n = void 0, s.onreadystatechange = ft.noop, i)
                                        4 !== s.readyState && s.abort();
                                    else {
                                        u = {}, o = s.status, "string" == typeof s.responseText && (u.text = s.responseText);
                                        try {
                                            l = s.statusText
                                        } catch (t) {
                                            l = ""
                                        }
                                        o || !e.isLocal || e.crossDomain ? 1223 === o && (o = 204) : o = u.text ? 200 : 404
                                    }
                                u && r(o, l, u, s.getAllResponseHeaders())
                            }, e.async ? 4 === s.readyState ? t.setTimeout(n) : s.onreadystatechange = un[a] = n : n()
                        },
                        abort: function() {
                            n && n(void 0, !0)
                        }
                    }
                }
            }), ft.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /\b(?:java|ecma)script\b/
                },
                converters: {
                    "text script": function(t) {
                        return ft.globalEval(t), t
                    }
                }
            }), ft.ajaxPrefilter("script", function(t) {
                void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
            }), ft.ajaxTransport("script", function(t) {
                if (t.crossDomain) {
                    var e,
                        n = it.head || ft("head")[0] || it.documentElement;
                    return {
                        send: function(i, r) {
                            e = it.createElement("script"), e.async = !0, t.scriptCharset && (e.charset = t.scriptCharset), e.src = t.url, e.onload = e.onreadystatechange = function(t, n) {
                                (n || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, n || r(200, "success"))
                            }, n.insertBefore(e, n.firstChild)
                        },
                        abort: function() {
                            e && e.onload(void 0, !0)
                        }
                    }
                }
            });
            var hn = [],
                dn = /(=)\?(?=&|$)|\?\?/;
            ft.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    var t = hn.pop() || ft.expando + "_" + qe++;
                    return this[t] = !0, t
                }
            }), ft.ajaxPrefilter("json jsonp", function(e, n, i) {
                var r,
                    o,
                    s,
                    a = e.jsonp !== !1 && (dn.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && dn.test(e.data) && "data");
                if (a || "jsonp" === e.dataTypes[0])
                    return r = e.jsonpCallback = ft.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(dn, "$1" + r) : e.jsonp !== !1 && (e.url += (Ie.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
                        return s || ft.error(r + " was not called"), s[0]
                    }, e.dataTypes[0] = "json", o = t[r], t[r] = function() {
                        s = arguments
                    }, i.always(function() {
                        void 0 === o ? ft(t).removeProp(r) : t[r] = o, e[r] && (e.jsonpCallback = n.jsonpCallback, hn.push(r)), s && ft.isFunction(o) && o(s[0]), s = o = void 0
                    }), "script"
            }), ft.parseHTML = function(t, e, n) {
                if (!t || "string" != typeof t)
                    return null;
                "boolean" == typeof e && (n = e, e = !1), e = e || it;
                var i = _t.exec(t),
                    r = !n && [];
                return i ? [e.createElement(i[1])] : (i = y([t], e, r), r && r.length && ft(r).remove(), ft.merge([], i.childNodes))
            };
            var fn = ft.fn.load;
            ft.fn.load = function(t, e, n) {
                if ("string" != typeof t && fn)
                    return fn.apply(this, arguments);
                var i,
                    r,
                    o,
                    s = this,
                    a = t.indexOf(" ");
                return a > -1 && (i = ft.trim(t.slice(a, t.length)), t = t.slice(0, a)), ft.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (r = "POST"), s.length > 0 && ft.ajax({
                    url: t,
                    type: r || "GET",
                    dataType: "html",
                    data: e
                }).done(function(t) {
                    o = arguments, s.html(i ? ft("<div>").append(ft.parseHTML(t)).find(i) : t)
                }).always(n && function(t, e) {
                    s.each(function() {
                        n.apply(this, o || [t.responseText, e, t])
                    })
                }), this
            }, ft.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
                ft.fn[e] = function(t) {
                    return this.on(e, t)
                }
            }), ft.expr.filters.animated = function(t) {
                return ft.grep(ft.timers, function(e) {
                    return t === e.elem
                }).length
            }, ft.offset = {
                setOffset: function(t, e, n) {
                    var i,
                        r,
                        o,
                        s,
                        a,
                        l,
                        u,
                        c = ft.css(t, "position"),
                        h = ft(t),
                        d = {};
                    "static" === c && (t.style.position = "relative"), a = h.offset(), o = ft.css(t, "top"), l = ft.css(t, "left"), u = ("absolute" === c || "fixed" === c) && ft.inArray("auto", [o, l]) > -1, u ? (i = h.position(), s = i.top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), ft.isFunction(e) && (e = e.call(t, n, ft.extend({}, a))), null != e.top && (d.top = e.top - a.top + s), null != e.left && (d.left = e.left - a.left + r), "using" in e ? e.using.call(t, d) : h.css(d)
                }
            }, ft.fn.extend({
                offset: function(t) {
                    if (arguments.length)
                        return void 0 === t ? this : this.each(function(e) {
                            ft.offset.setOffset(this, t, e)
                        });
                    var e,
                        n,
                        i = {
                            top: 0,
                            left: 0
                        },
                        r = this[0],
                        o = r && r.ownerDocument;
                    if (o)
                        return e = o.documentElement, ft.contains(e, r) ? ("undefined" != typeof r.getBoundingClientRect && (i = r.getBoundingClientRect()), n = et(o), {
                            top: i.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                            left: i.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
                        }) : i
                },
                position: function() {
                    if (this[0]) {
                        var t,
                            e,
                            n = {
                                top: 0,
                                left: 0
                            },
                            i = this[0];
                        return "fixed" === ft.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), ft.nodeName(t[0], "html") || (n = t.offset()), n.top += ft.css(t[0], "borderTopWidth", !0), n.left += ft.css(t[0], "borderLeftWidth", !0)), {
                            top: e.top - n.top - ft.css(i, "marginTop", !0),
                            left: e.left - n.left - ft.css(i, "marginLeft", !0)
                        }
                    }
                },
                offsetParent: function() {
                    return this.map(function() {
                        for (var t = this.offsetParent; t && !ft.nodeName(t, "html") && "static" === ft.css(t, "position");)
                            t = t.offsetParent;
                        return t || fe
                    })
                }
            }), ft.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, function(t, e) {
                var n = /Y/.test(e);
                ft.fn[t] = function(i) {
                    return Ht(this, function(t, i, r) {
                        var o = et(t);
                        return void 0 === r ? o ? e in o ? o[e] : o.document.documentElement[i] : t[i] : void (o ? o.scrollTo(n ? ft(o).scrollLeft() : r, n ? r : ft(o).scrollTop()) : t[i] = r)
                    }, t, i, arguments.length, null)
                }
            }), ft.each(["top", "left"], function(t, e) {
                ft.cssHooks[e] = E(ht.pixelPosition, function(t, n) {
                    if (n)
                        return n = me(t, e), he.test(n) ? ft(t).position()[e] + "px" : n
                })
            }), ft.each({
                Height: "height",
                Width: "width"
            }, function(t, e) {
                ft.each({
                    padding: "inner" + t,
                    content: e,
                    "": "outer" + t
                }, function(n, i) {
                    ft.fn[i] = function(i, r) {
                        var o = arguments.length && (n || "boolean" != typeof i),
                            s = n || (i === !0 || r === !0 ? "margin" : "border");
                        return Ht(this, function(e, n, i) {
                            var r;
                            return ft.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === i ? ft.css(e, n, s) : ft.style(e, n, i, s)
                        }, e, o ? i : void 0, o, null)
                    }
                })
            }), ft.fn.extend({
                bind: function(t, e, n) {
                    return this.on(t, null, e, n)
                },
                unbind: function(t, e) {
                    return this.off(t, null, e)
                },
                delegate: function(t, e, n, i) {
                    return this.on(e, t, n, i)
                },
                undelegate: function(t, e, n) {
                    return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
                }
            }), ft.fn.size = function() {
                return this.length
            }, ft.fn.andSelf = ft.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
                return ft
            });
            var pn = t.jQuery,
                mn = t.$;
            return ft.noConflict = function(e) {
                return t.$ === ft && (t.$ = mn), e && t.jQuery === ft && (t.jQuery = pn), ft
            }, e || (t.jQuery = t.$ = ft), ft
        })
    }, {}],
    8: [function(t, e, n) {
        !function(t, i) {
            "object" == typeof n && "undefined" != typeof e ? e.exports = i() : "function" == typeof define && define.amd ? define(i) : t.moment = i()
        }(this, function() {
            "use strict";
            function n() {
                return mi.apply(null, arguments)
            }
            function i(t) {
                mi = t
            }
            function r(t) {
                return t instanceof Array || "[object Array]" === Object.prototype.toString.call(t)
            }
            function o(t) {
                return null != t && "[object Object]" === Object.prototype.toString.call(t)
            }
            function s(t) {
                var e;
                for (e in t)
                    return !1;
                return !0
            }
            function a(t) {
                return t instanceof Date || "[object Date]" === Object.prototype.toString.call(t)
            }
            function l(t, e) {
                var n,
                    i = [];
                for (n = 0; n < t.length; ++n)
                    i.push(e(t[n], n));
                return i
            }
            function u(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }
            function c(t, e) {
                for (var n in e)
                    u(e, n) && (t[n] = e[n]);
                return u(e, "toString") && (t.toString = e.toString), u(e, "valueOf") && (t.valueOf = e.valueOf), t
            }
            function h(t, e, n, i) {
                return ve(t, e, n, i, !0).utc()
            }
            function d() {
                return {
                    empty: !1,
                    unusedTokens: [],
                    unusedInput: [],
                    overflow: -2,
                    charsLeftOver: 0,
                    nullInput: !1,
                    invalidMonth: null,
                    invalidFormat: !1,
                    userInvalidated: !1,
                    iso: !1,
                    parsedDateParts: [],
                    meridiem: null
                }
            }
            function f(t) {
                return null == t._pf && (t._pf = d()), t._pf
            }
            function p(t) {
                if (null == t._isValid) {
                    var e = f(t),
                        n = gi.call(e.parsedDateParts, function(t) {
                            return null != t
                        }),
                        i = !isNaN(t._d.getTime()) && e.overflow < 0 && !e.empty && !e.invalidMonth && !e.invalidWeekday && !e.nullInput && !e.invalidFormat && !e.userInvalidated && (!e.meridiem || e.meridiem && n);
                    if (t._strict && (i = i && 0 === e.charsLeftOver && 0 === e.unusedTokens.length && void 0 === e.bigHour), null != Object.isFrozen && Object.isFrozen(t))
                        return i;
                    t._isValid = i
                }
                return t._isValid
            }
            function m(t) {
                var e = h(NaN);
                return null != t ? c(f(e), t) : f(e).userInvalidated = !0, e
            }
            function g(t) {
                return void 0 === t
            }
            function y(t, e) {
                var n,
                    i,
                    r;
                if (g(e._isAMomentObject) || (t._isAMomentObject = e._isAMomentObject), g(e._i) || (t._i = e._i), g(e._f) || (t._f = e._f), g(e._l) || (t._l = e._l), g(e._strict) || (t._strict = e._strict), g(e._tzm) || (t._tzm = e._tzm), g(e._isUTC) || (t._isUTC = e._isUTC), g(e._offset) || (t._offset = e._offset), g(e._pf) || (t._pf = f(e)), g(e._locale) || (t._locale = e._locale), yi.length > 0)
                    for (n in yi)
                        i = yi[n], r = e[i], g(r) || (t[i] = r);
                return t
            }
            function v(t) {
                y(this, t), this._d = new Date(null != t._d ? t._d.getTime() : NaN), vi === !1 && (vi = !0, n.updateOffset(this), vi = !1)
            }
            function w(t) {
                return t instanceof v || null != t && null != t._isAMomentObject
            }
            function b(t) {
                return t < 0 ? Math.ceil(t) || 0 : Math.floor(t)
            }
            function x(t) {
                var e = +t,
                    n = 0;
                return 0 !== e && isFinite(e) && (n = b(e)), n
            }
            function _(t, e, n) {
                var i,
                    r = Math.min(t.length, e.length),
                    o = Math.abs(t.length - e.length),
                    s = 0;
                for (i = 0; i < r; i++)
                    (n && t[i] !== e[i] || !n && x(t[i]) !== x(e[i])) && s++;
                return s + o
            }
            function k(t) {
                n.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + t)
            }
            function S(t, e) {
                var i = !0;
                return c(function() {
                    if (null != n.deprecationHandler && n.deprecationHandler(null, t), i) {
                        for (var r, o = [], s = 0; s < arguments.length; s++) {
                            if (r = "", "object" == typeof arguments[s]) {
                                r += "\n[" + s + "] ";
                                for (var a in arguments[0])
                                    r += a + ": " + arguments[0][a] + ", ";
                                r = r.slice(0, -2)
                            } else
                                r = arguments[s];
                            o.push(r)
                        }
                        k(t + "\nArguments: " + Array.prototype.slice.call(o).join("") + "\n" + (new Error).stack), i = !1
                    }
                    return e.apply(this, arguments)
                }, e)
            }
            function T(t, e) {
                null != n.deprecationHandler && n.deprecationHandler(t, e), wi[t] || (k(e), wi[t] = !0)
            }
            function C(t) {
                return t instanceof Function || "[object Function]" === Object.prototype.toString.call(t)
            }
            function D(t) {
                var e,
                    n;
                for (n in t)
                    e = t[n], C(e) ? this[n] = e : this["_" + n] = e;
                this._config = t, this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
            }
            function M(t, e) {
                var n,
                    i = c({}, t);
                for (n in e)
                    u(e, n) && (o(t[n]) && o(e[n]) ? (i[n] = {}, c(i[n], t[n]), c(i[n], e[n])) : null != e[n] ? i[n] = e[n] : delete i[n]);
                for (n in t)
                    u(t, n) && !u(e, n) && o(t[n]) && (i[n] = c({}, i[n]));
                return i
            }
            function N(t) {
                null != t && this.set(t)
            }
            function j(t, e, n) {
                var i = this._calendar[t] || this._calendar.sameElse;
                return C(i) ? i.call(e, n) : i
            }
            function E(t) {
                var e = this._longDateFormat[t],
                    n = this._longDateFormat[t.toUpperCase()];
                return e || !n ? e : (this._longDateFormat[t] = n.replace(/MMMM|MM|DD|dddd/g, function(t) {
                    return t.slice(1)
                }), this._longDateFormat[t])
            }
            function O() {
                return this._invalidDate
            }
            function A(t) {
                return this._ordinal.replace("%d", t)
            }
            function P(t, e, n, i) {
                var r = this._relativeTime[n];
                return C(r) ? r(t, e, n, i) : r.replace(/%d/i, t)
            }
            function L(t, e) {
                var n = this._relativeTime[t > 0 ? "future" : "past"];
                return C(n) ? n(e) : n.replace(/%s/i, e)
            }
            function Y(t, e) {
                var n = t.toLowerCase();
                Mi[n] = Mi[n + "s"] = Mi[e] = t
            }
            function F(t) {
                return "string" == typeof t ? Mi[t] || Mi[t.toLowerCase()] : void 0
            }
            function R(t) {
                var e,
                    n,
                    i = {};
                for (n in t)
                    u(t, n) && (e = F(n), e && (i[e] = t[n]));
                return i
            }
            function H(t, e) {
                Ni[t] = e
            }
            function W(t) {
                var e = [];
                for (var n in t)
                    e.push({
                        unit: n,
                        priority: Ni[n]
                    });
                return e.sort(function(t, e) {
                    return t.priority - e.priority
                }), e
            }
            function q(t, e) {
                return function(i) {
                    return null != i ? (B(this, t, i), n.updateOffset(this, e), this) : I(this, t)
                }
            }
            function I(t, e) {
                return t.isValid() ? t._d["get" + (t._isUTC ? "UTC" : "") + e]() : NaN
            }
            function B(t, e, n) {
                t.isValid() && t._d["set" + (t._isUTC ? "UTC" : "") + e](n)
            }
            function U(t) {
                return t = F(t), C(this[t]) ? this[t]() : this
            }
            function z(t, e) {
                if ("object" == typeof t) {
                    t = R(t);
                    for (var n = W(t), i = 0; i < n.length; i++)
                        this[n[i].unit](t[n[i].unit])
                } else if (t = F(t), C(this[t]))
                    return this[t](e);
                return this
            }
            function $(t, e, n) {
                var i = "" + Math.abs(t),
                    r = e - i.length,
                    o = t >= 0;
                return (o ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, r)).toString().substr(1) + i
            }
            function G(t, e, n, i) {
                var r = i;
                "string" == typeof i && (r = function() {
                    return this[i]()
                }), t && (Ai[t] = r), e && (Ai[e[0]] = function() {
                    return $(r.apply(this, arguments), e[1], e[2])
                }), n && (Ai[n] = function() {
                    return this.localeData().ordinal(r.apply(this, arguments), t)
                })
            }
            function V(t) {
                return t.match(/\[[\s\S]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "")
            }
            function X(t) {
                var e,
                    n,
                    i = t.match(ji);
                for (e = 0, n = i.length; e < n; e++)
                    Ai[i[e]] ? i[e] = Ai[i[e]] : i[e] = V(i[e]);
                return function(e) {
                    var r,
                        o = "";
                    for (r = 0; r < n; r++)
                        o += i[r] instanceof Function ? i[r].call(e, t) : i[r];
                    return o
                }
            }
            function Q(t, e) {
                return t.isValid() ? (e = Z(e, t.localeData()), Oi[e] = Oi[e] || X(e), Oi[e](t)) : t.localeData().invalidDate()
            }
            function Z(t, e) {
                function n(t) {
                    return e.longDateFormat(t) || t
                }
                var i = 5;
                for (Ei.lastIndex = 0; i >= 0 && Ei.test(t);)
                    t = t.replace(Ei, n), Ei.lastIndex = 0, i -= 1;
                return t
            }
            function J(t, e, n) {
                Zi[t] = C(e) ? e : function(t, i) {
                    return t && n ? n : e
                }
            }
            function K(t, e) {
                return u(Zi, t) ? Zi[t](e._strict, e._locale) : new RegExp(tt(t))
            }
            function tt(t) {
                return et(t.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(t, e, n, i, r) {
                    return e || n || i || r
                }))
            }
            function et(t) {
                return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
            }
            function nt(t, e) {
                var n,
                    i = e;
                for ("string" == typeof t && (t = [t]), "number" == typeof e && (i = function(t, n) {
                    n[e] = x(t)
                }), n = 0; n < t.length; n++)
                    Ji[t[n]] = i
            }
            function it(t, e) {
                nt(t, function(t, n, i, r) {
                    i._w = i._w || {}, e(t, i._w, i, r)
                })
            }
            function rt(t, e, n) {
                null != e && u(Ji, t) && Ji[t](e, n._a, n, t)
            }
            function ot(t, e) {
                return new Date(Date.UTC(t, e + 1, 0)).getUTCDate()
            }
            function st(t, e) {
                return t ? r(this._months) ? this._months[t.month()] : this._months[(this._months.isFormat || lr).test(e) ? "format" : "standalone"][t.month()] : this._months
            }
            function at(t, e) {
                return t ? r(this._monthsShort) ? this._monthsShort[t.month()] : this._monthsShort[lr.test(e) ? "format" : "standalone"][t.month()] : this._monthsShort
            }
            function lt(t, e, n) {
                var i,
                    r,
                    o,
                    s = t.toLocaleLowerCase();
                if (!this._monthsParse)
                    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], i = 0; i < 12; ++i)
                        o = h([2e3, i]), this._shortMonthsParse[i] = this.monthsShort(o, "").toLocaleLowerCase(), this._longMonthsParse[i] = this.months(o, "").toLocaleLowerCase();
                return n ? "MMM" === e ? (r = xi.call(this._shortMonthsParse, s), r !== -1 ? r : null) : (r = xi.call(this._longMonthsParse, s), r !== -1 ? r : null) : "MMM" === e ? (r = xi.call(this._shortMonthsParse, s), r !== -1 ? r : (r = xi.call(this._longMonthsParse, s), r !== -1 ? r : null)) : (r = xi.call(this._longMonthsParse, s), r !== -1 ? r : (r = xi.call(this._shortMonthsParse, s), r !== -1 ? r : null))
            }
            function ut(t, e, n) {
                var i,
                    r,
                    o;
                if (this._monthsParseExact)
                    return lt.call(this, t, e, n);
                for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), i = 0; i < 12; i++) {
                    if (r = h([2e3, i]), n && !this._longMonthsParse[i] && (this._longMonthsParse[i] = new RegExp("^" + this.months(r, "").replace(".", "") + "$", "i"), this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(r, "").replace(".", "") + "$", "i")), n || this._monthsParse[i] || (o = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""), this._monthsParse[i] = new RegExp(o.replace(".", ""), "i")), n && "MMMM" === e && this._longMonthsParse[i].test(t))
                        return i;
                    if (n && "MMM" === e && this._shortMonthsParse[i].test(t))
                        return i;
                    if (!n && this._monthsParse[i].test(t))
                        return i
                }
            }
            function ct(t, e) {
                var n;
                if (!t.isValid())
                    return t;
                if ("string" == typeof e)
                    if (/^\d+$/.test(e))
                        e = x(e);
                    else if (e = t.localeData().monthsParse(e), "number" != typeof e)
                        return t;
                return n = Math.min(t.date(), ot(t.year(), e)), t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, n), t
            }
            function ht(t) {
                return null != t ? (ct(this, t), n.updateOffset(this, !0), this) : I(this, "Month")
            }
            function dt() {
                return ot(this.year(), this.month())
            }
            function ft(t) {
                return this._monthsParseExact ? (u(this, "_monthsRegex") || mt.call(this), t ? this._monthsShortStrictRegex : this._monthsShortRegex) : (u(this, "_monthsShortRegex") || (this._monthsShortRegex = hr), this._monthsShortStrictRegex && t ? this._monthsShortStrictRegex : this._monthsShortRegex)
            }
            function pt(t) {
                return this._monthsParseExact ? (u(this, "_monthsRegex") || mt.call(this), t ? this._monthsStrictRegex : this._monthsRegex) : (u(this, "_monthsRegex") || (this._monthsRegex = dr), this._monthsStrictRegex && t ? this._monthsStrictRegex : this._monthsRegex)
            }
            function mt() {
                function t(t, e) {
                    return e.length - t.length
                }
                var e,
                    n,
                    i = [],
                    r = [],
                    o = [];
                for (e = 0; e < 12; e++)
                    n = h([2e3, e]), i.push(this.monthsShort(n, "")), r.push(this.months(n, "")), o.push(this.months(n, "")), o.push(this.monthsShort(n, ""));
                for (i.sort(t), r.sort(t), o.sort(t), e = 0; e < 12; e++)
                    i[e] = et(i[e]), r[e] = et(r[e]);
                for (e = 0; e < 24; e++)
                    o[e] = et(o[e]);
                this._monthsRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + i.join("|") + ")", "i")
            }
            function gt(t) {
                return yt(t) ? 366 : 365
            }
            function yt(t) {
                return t % 4 === 0 && t % 100 !== 0 || t % 400 === 0
            }
            function vt() {
                return yt(this.year())
            }
            function wt(t, e, n, i, r, o, s) {
                var a = new Date(t, e, n, i, r, o, s);
                return t < 100 && t >= 0 && isFinite(a.getFullYear()) && a.setFullYear(t), a
            }
            function bt(t) {
                var e = new Date(Date.UTC.apply(null, arguments));
                return t < 100 && t >= 0 && isFinite(e.getUTCFullYear()) && e.setUTCFullYear(t), e
            }
            function xt(t, e, n) {
                var i = 7 + e - n,
                    r = (7 + bt(t, 0, i).getUTCDay() - e) % 7;
                return -r + i - 1
            }
            function _t(t, e, n, i, r) {
                var o,
                    s,
                    a = (7 + n - i) % 7,
                    l = xt(t, i, r),
                    u = 1 + 7 * (e - 1) + a + l;
                return u <= 0 ? (o = t - 1, s = gt(o) + u) : u > gt(t) ? (o = t + 1, s = u - gt(t)) : (o = t, s = u), {
                    year: o,
                    dayOfYear: s
                }
            }
            function kt(t, e, n) {
                var i,
                    r,
                    o = xt(t.year(), e, n),
                    s = Math.floor((t.dayOfYear() - o - 1) / 7) + 1;
                return s < 1 ? (r = t.year() - 1, i = s + St(r, e, n)) : s > St(t.year(), e, n) ? (i = s - St(t.year(), e, n), r = t.year() + 1) : (r = t.year(), i = s), {
                    week: i,
                    year: r
                }
            }
            function St(t, e, n) {
                var i = xt(t, e, n),
                    r = xt(t + 1, e, n);
                return (gt(t) - i + r) / 7
            }
            function Tt(t) {
                return kt(t, this._week.dow, this._week.doy).week
            }
            function Ct() {
                return this._week.dow
            }
            function Dt() {
                return this._week.doy
            }
            function Mt(t) {
                var e = this.localeData().week(this);
                return null == t ? e : this.add(7 * (t - e), "d")
            }
            function Nt(t) {
                var e = kt(this, 1, 4).week;
                return null == t ? e : this.add(7 * (t - e), "d")
            }
            function jt(t, e) {
                return "string" != typeof t ? t : isNaN(t) ? (t = e.weekdaysParse(t), "number" == typeof t ? t : null) : parseInt(t, 10)
            }
            function Et(t, e) {
                return "string" == typeof t ? e.weekdaysParse(t) % 7 || 7 : isNaN(t) ? null : t
            }
            function Ot(t, e) {
                return t ? r(this._weekdays) ? this._weekdays[t.day()] : this._weekdays[this._weekdays.isFormat.test(e) ? "format" : "standalone"][t.day()] : this._weekdays
            }
            function At(t) {
                return t ? this._weekdaysShort[t.day()] : this._weekdaysShort
            }
            function Pt(t) {
                return t ? this._weekdaysMin[t.day()] : this._weekdaysMin
            }
            function Lt(t, e, n) {
                var i,
                    r,
                    o,
                    s = t.toLocaleLowerCase();
                if (!this._weekdaysParse)
                    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], i = 0; i < 7; ++i)
                        o = h([2e3, 1]).day(i), this._minWeekdaysParse[i] = this.weekdaysMin(o, "").toLocaleLowerCase(), this._shortWeekdaysParse[i] = this.weekdaysShort(o, "").toLocaleLowerCase(), this._weekdaysParse[i] = this.weekdays(o, "").toLocaleLowerCase();
                return n ? "dddd" === e ? (r = xi.call(this._weekdaysParse, s), r !== -1 ? r : null) : "ddd" === e ? (r = xi.call(this._shortWeekdaysParse, s), r !== -1 ? r : null) : (r = xi.call(this._minWeekdaysParse, s), r !== -1 ? r : null) : "dddd" === e ? (r = xi.call(this._weekdaysParse, s), r !== -1 ? r : (r = xi.call(this._shortWeekdaysParse, s), r !== -1 ? r : (r = xi.call(this._minWeekdaysParse, s), r !== -1 ? r : null))) : "ddd" === e ? (r = xi.call(this._shortWeekdaysParse, s), r !== -1 ? r : (r = xi.call(this._weekdaysParse, s), r !== -1 ? r : (r = xi.call(this._minWeekdaysParse, s), r !== -1 ? r : null))) : (r = xi.call(this._minWeekdaysParse, s), r !== -1 ? r : (r = xi.call(this._weekdaysParse, s), r !== -1 ? r : (r = xi.call(this._shortWeekdaysParse, s), r !== -1 ? r : null)))
            }
            function Yt(t, e, n) {
                var i,
                    r,
                    o;
                if (this._weekdaysParseExact)
                    return Lt.call(this, t, e, n);
                for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), i = 0; i < 7; i++) {
                    if (r = h([2e3, 1]).day(i), n && !this._fullWeekdaysParse[i] && (this._fullWeekdaysParse[i] = new RegExp("^" + this.weekdays(r, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[i] = new RegExp("^" + this.weekdaysShort(r, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[i] = new RegExp("^" + this.weekdaysMin(r, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[i] || (o = "^" + this.weekdays(r, "") + "|^" + this.weekdaysShort(r, "") + "|^" + this.weekdaysMin(r, ""), this._weekdaysParse[i] = new RegExp(o.replace(".", ""), "i")), n && "dddd" === e && this._fullWeekdaysParse[i].test(t))
                        return i;
                    if (n && "ddd" === e && this._shortWeekdaysParse[i].test(t))
                        return i;
                    if (n && "dd" === e && this._minWeekdaysParse[i].test(t))
                        return i;
                    if (!n && this._weekdaysParse[i].test(t))
                        return i
                }
            }
            function Ft(t) {
                if (!this.isValid())
                    return null != t ? this : NaN;
                var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                return null != t ? (t = jt(t, this.localeData()), this.add(t - e, "d")) : e
            }
            function Rt(t) {
                if (!this.isValid())
                    return null != t ? this : NaN;
                var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
                return null == t ? e : this.add(t - e, "d")
            }
            function Ht(t) {
                if (!this.isValid())
                    return null != t ? this : NaN;
                if (null != t) {
                    var e = Et(t, this.localeData());
                    return this.day(this.day() % 7 ? e : e - 7)
                }
                return this.day() || 7
            }
            function Wt(t) {
                return this._weekdaysParseExact ? (u(this, "_weekdaysRegex") || Bt.call(this), t ? this._weekdaysStrictRegex : this._weekdaysRegex) : (u(this, "_weekdaysRegex") || (this._weekdaysRegex = vr), this._weekdaysStrictRegex && t ? this._weekdaysStrictRegex : this._weekdaysRegex)
            }
            function qt(t) {
                return this._weekdaysParseExact ? (u(this, "_weekdaysRegex") || Bt.call(this), t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (u(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = wr), this._weekdaysShortStrictRegex && t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
            }
            function It(t) {
                return this._weekdaysParseExact ? (u(this, "_weekdaysRegex") || Bt.call(this), t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (u(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = br), this._weekdaysMinStrictRegex && t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
            }
            function Bt() {
                function t(t, e) {
                    return e.length - t.length
                }
                var e,
                    n,
                    i,
                    r,
                    o,
                    s = [],
                    a = [],
                    l = [],
                    u = [];
                for (e = 0; e < 7; e++)
                    n = h([2e3, 1]).day(e), i = this.weekdaysMin(n, ""), r = this.weekdaysShort(n, ""), o = this.weekdays(n, ""), s.push(i), a.push(r), l.push(o), u.push(i), u.push(r), u.push(o);
                for (s.sort(t), a.sort(t), l.sort(t), u.sort(t), e = 0; e < 7; e++)
                    a[e] = et(a[e]), l[e] = et(l[e]), u[e] = et(u[e]);
                this._weekdaysRegex = new RegExp("^(" + u.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + s.join("|") + ")", "i")
            }
            function Ut() {
                return this.hours() % 12 || 12
            }
            function zt() {
                return this.hours() || 24
            }
            function $t(t, e) {
                G(t, 0, 0, function() {
                    return this.localeData().meridiem(this.hours(), this.minutes(), e)
                })
            }
            function Gt(t, e) {
                return e._meridiemParse
            }
            function Vt(t) {
                return "p" === (t + "").toLowerCase().charAt(0)
            }
            function Xt(t, e, n) {
                return t > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
            }
            function Qt(t) {
                return t ? t.toLowerCase().replace("_", "-") : t
            }
            function Zt(t) {
                for (var e, n, i, r, o = 0; o < t.length;) {
                    for (r = Qt(t[o]).split("-"), e = r.length, n = Qt(t[o + 1]), n = n ? n.split("-") : null; e > 0;) {
                        if (i = Jt(r.slice(0, e).join("-")))
                            return i;
                        if (n && n.length >= e && _(r, n, !0) >= e - 1)
                            break;
                        e--
                    }
                    o++
                }
                return null
            }
            function Jt(n) {
                var i = null;
                if (!Tr[n] && "undefined" != typeof e && e && e.exports)
                    try {
                        i = xr._abbr, t("./locale/" + n), Kt(i)
                    } catch (t) {}
                return Tr[n]
            }
            function Kt(t, e) {
                var n;
                return t && (n = g(e) ? ne(t) : te(t, e), n && (xr = n)), xr._abbr
            }
            function te(t, e) {
                if (null !== e) {
                    var n = Sr;
                    return e.abbr = t, null != Tr[t] ? (T("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), n = Tr[t]._config) : null != e.parentLocale && (null != Tr[e.parentLocale] ? n = Tr[e.parentLocale]._config : T("parentLocaleUndefined", "specified parentLocale is not defined yet. See http://momentjs.com/guides/#/warnings/parent-locale/")), Tr[t] = new N(M(n, e)), Kt(t), Tr[t]
                }
                return delete Tr[t], null
            }
            function ee(t, e) {
                if (null != e) {
                    var n,
                        i = Sr;
                    null != Tr[t] && (i = Tr[t]._config), e = M(i, e), n = new N(e), n.parentLocale = Tr[t], Tr[t] = n, Kt(t)
                } else
                    null != Tr[t] && (null != Tr[t].parentLocale ? Tr[t] = Tr[t].parentLocale : null != Tr[t] && delete Tr[t]);
                return Tr[t]
            }
            function ne(t) {
                var e;
                if (t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t)
                    return xr;
                if (!r(t)) {
                    if (e = Jt(t))
                        return e;
                    t = [t]
                }
                return Zt(t)
            }
            function ie() {
                return bi(Tr)
            }
            function re(t) {
                var e,
                    n = t._a;
                return n && f(t).overflow === -2 && (e = n[tr] < 0 || n[tr] > 11 ? tr : n[er] < 1 || n[er] > ot(n[Ki], n[tr]) ? er : n[nr] < 0 || n[nr] > 24 || 24 === n[nr] && (0 !== n[ir] || 0 !== n[rr] || 0 !== n[or]) ? nr : n[ir] < 0 || n[ir] > 59 ? ir : n[rr] < 0 || n[rr] > 59 ? rr : n[or] < 0 || n[or] > 999 ? or : -1, f(t)._overflowDayOfYear && (e < Ki || e > er) && (e = er), f(t)._overflowWeeks && e === -1 && (e = sr), f(t)._overflowWeekday && e === -1 && (e = ar), f(t).overflow = e), t
            }
            function oe(t) {
                var e,
                    n,
                    i,
                    r,
                    o,
                    s,
                    a = t._i,
                    l = Cr.exec(a) || Dr.exec(a);
                if (l) {
                    for (f(t).iso = !0, e = 0, n = Nr.length; e < n; e++)
                        if (Nr[e][1].exec(l[1])) {
                            r = Nr[e][0], i = Nr[e][2] !== !1;
                            break
                        }
                    if (null == r)
                        return void (t._isValid = !1);
                    if (l[3]) {
                        for (e = 0, n = jr.length; e < n; e++)
                            if (jr[e][1].exec(l[3])) {
                                o = (l[2] || " ") + jr[e][0];
                                break
                            }
                        if (null == o)
                            return void (t._isValid = !1)
                    }
                    if (!i && null != o)
                        return void (t._isValid = !1);
                    if (l[4]) {
                        if (!Mr.exec(l[4]))
                            return void (t._isValid = !1);
                        s = "Z"
                    }
                    t._f = r + (o || "") + (s || ""), he(t)
                } else
                    t._isValid = !1
            }
            function se(t) {
                var e = Er.exec(t._i);
                return null !== e ? void (t._d = new Date(+e[1])) : (oe(t), void (t._isValid === !1 && (delete t._isValid, n.createFromInputFallback(t))))
            }
            function ae(t, e, n) {
                return null != t ? t : null != e ? e : n
            }
            function le(t) {
                var e = new Date(n.now());
                return t._useUTC ? [e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()] : [e.getFullYear(), e.getMonth(), e.getDate()]
            }
            function ue(t) {
                var e,
                    n,
                    i,
                    r,
                    o = [];
                if (!t._d) {
                    for (i = le(t), t._w && null == t._a[er] && null == t._a[tr] && ce(t), t._dayOfYear && (r = ae(t._a[Ki], i[Ki]), t._dayOfYear > gt(r) && (f(t)._overflowDayOfYear = !0), n = bt(r, 0, t._dayOfYear), t._a[tr] = n.getUTCMonth(), t._a[er] = n.getUTCDate()), e = 0; e < 3 && null == t._a[e]; ++e)
                        t._a[e] = o[e] = i[e];
                    for (; e < 7; e++)
                        t._a[e] = o[e] = null == t._a[e] ? 2 === e ? 1 : 0 : t._a[e];
                    24 === t._a[nr] && 0 === t._a[ir] && 0 === t._a[rr] && 0 === t._a[or] && (t._nextDay = !0, t._a[nr] = 0), t._d = (t._useUTC ? bt : wt).apply(null, o), null != t._tzm && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), t._nextDay && (t._a[nr] = 24)
                }
            }
            function ce(t) {
                var e,
                    n,
                    i,
                    r,
                    o,
                    s,
                    a,
                    l;
                e = t._w, null != e.GG || null != e.W || null != e.E ? (o = 1, s = 4, n = ae(e.GG, t._a[Ki], kt(we(), 1, 4).year), i = ae(e.W, 1), r = ae(e.E, 1), (r < 1 || r > 7) && (l = !0)) : (o = t._locale._week.dow, s = t._locale._week.doy, n = ae(e.gg, t._a[Ki], kt(we(), o, s).year), i = ae(e.w, 1), null != e.d ? (r = e.d, (r < 0 || r > 6) && (l = !0)) : null != e.e ? (r = e.e + o, (e.e < 0 || e.e > 6) && (l = !0)) : r = o), i < 1 || i > St(n, o, s) ? f(t)._overflowWeeks = !0 : null != l ? f(t)._overflowWeekday = !0 : (a = _t(n, i, r, o, s), t._a[Ki] = a.year, t._dayOfYear = a.dayOfYear)
            }
            function he(t) {
                if (t._f === n.ISO_8601)
                    return void oe(t);
                t._a = [], f(t).empty = !0;
                var e,
                    i,
                    r,
                    o,
                    s,
                    a = "" + t._i,
                    l = a.length,
                    u = 0;
                for (r = Z(t._f, t._locale).match(ji) || [], e = 0; e < r.length; e++)
                    o = r[e], i = (a.match(K(o, t)) || [])[0], i && (s = a.substr(0, a.indexOf(i)), s.length > 0 && f(t).unusedInput.push(s), a = a.slice(a.indexOf(i) + i.length), u += i.length), Ai[o] ? (i ? f(t).empty = !1 : f(t).unusedTokens.push(o), rt(o, i, t)) : t._strict && !i && f(t).unusedTokens.push(o);
                f(t).charsLeftOver = l - u, a.length > 0 && f(t).unusedInput.push(a), t._a[nr] <= 12 && f(t).bigHour === !0 && t._a[nr] > 0 && (f(t).bigHour = void 0), f(t).parsedDateParts = t._a.slice(0), f(t).meridiem = t._meridiem, t._a[nr] = de(t._locale, t._a[nr], t._meridiem), ue(t), re(t)
            }
            function de(t, e, n) {
                var i;
                return null == n ? e : null != t.meridiemHour ? t.meridiemHour(e, n) : null != t.isPM ? (i = t.isPM(n), i && e < 12 && (e += 12), i || 12 !== e || (e = 0), e) : e
            }
            function fe(t) {
                var e,
                    n,
                    i,
                    r,
                    o;
                if (0 === t._f.length)
                    return f(t).invalidFormat = !0, void (t._d = new Date(NaN));
                for (r = 0; r < t._f.length; r++)
                    o = 0, e = y({}, t), null != t._useUTC && (e._useUTC = t._useUTC), e._f = t._f[r], he(e), p(e) && (o += f(e).charsLeftOver, o += 10 * f(e).unusedTokens.length, f(e).score = o, (null == i || o < i) && (i = o, n = e));
                c(t, n || e)
            }
            function pe(t) {
                if (!t._d) {
                    var e = R(t._i);
                    t._a = l([e.year, e.month, e.day || e.date, e.hour, e.minute, e.second, e.millisecond], function(t) {
                        return t && parseInt(t, 10)
                    }), ue(t)
                }
            }
            function me(t) {
                var e = new v(re(ge(t)));
                return e._nextDay && (e.add(1, "d"), e._nextDay = void 0), e
            }
            function ge(t) {
                var e = t._i,
                    n = t._f;
                return t._locale = t._locale || ne(t._l), null === e || void 0 === n && "" === e ? m({
                    nullInput: !0
                }) : ("string" == typeof e && (t._i = e = t._locale.preparse(e)), w(e) ? new v(re(e)) : (r(n) ? fe(t) : a(e) ? t._d = e : n ? he(t) : ye(t), p(t) || (t._d = null), t))
            }
            function ye(t) {
                var e = t._i;
                void 0 === e ? t._d = new Date(n.now()) : a(e) ? t._d = new Date(e.valueOf()) : "string" == typeof e ? se(t) : r(e) ? (t._a = l(e.slice(0), function(t) {
                    return parseInt(t, 10)
                }), ue(t)) : "object" == typeof e ? pe(t) : "number" == typeof e ? t._d = new Date(e) : n.createFromInputFallback(t)
            }
            function ve(t, e, n, i, a) {
                var l = {};
                return "boolean" == typeof n && (i = n, n = void 0), (o(t) && s(t) || r(t) && 0 === t.length) && (t = void 0), l._isAMomentObject = !0, l._useUTC = l._isUTC = a, l._l = n, l._i = t, l._f = e, l._strict = i, me(l)
            }
            function we(t, e, n, i) {
                return ve(t, e, n, i, !1)
            }
            function be(t, e) {
                var n,
                    i;
                if (1 === e.length && r(e[0]) && (e = e[0]), !e.length)
                    return we();
                for (n = e[0], i = 1; i < e.length; ++i)
                    e[i].isValid() && !e[i][t](n) || (n = e[i]);
                return n
            }
            function xe() {
                var t = [].slice.call(arguments, 0);
                return be("isBefore", t)
            }
            function _e() {
                var t = [].slice.call(arguments, 0);
                return be("isAfter", t)
            }
            function ke(t) {
                var e = R(t),
                    n = e.year || 0,
                    i = e.quarter || 0,
                    r = e.month || 0,
                    o = e.week || 0,
                    s = e.day || 0,
                    a = e.hour || 0,
                    l = e.minute || 0,
                    u = e.second || 0,
                    c = e.millisecond || 0;
                this._milliseconds = +c + 1e3 * u + 6e4 * l + 1e3 * a * 60 * 60, this._days = +s + 7 * o, this._months = +r + 3 * i + 12 * n, this._data = {}, this._locale = ne(), this._bubble()
            }
            function Se(t) {
                return t instanceof ke
            }
            function Te(t) {
                return t < 0 ? Math.round(-1 * t) * -1 : Math.round(t)
            }
            function Ce(t, e) {
                G(t, 0, 0, function() {
                    var t = this.utcOffset(),
                        n = "+";
                    return t < 0 && (t = -t, n = "-"), n + $(~~(t / 60), 2) + e + $(~~t % 60, 2)
                })
            }
            function De(t, e) {
                var n = (e || "").match(t) || [],
                    i = n[n.length - 1] || [],
                    r = (i + "").match(Lr) || ["-", 0, 0],
                    o = +(60 * r[1]) + x(r[2]);
                return "+" === r[0] ? o : -o
            }
            function Me(t, e) {
                var i,
                    r;
                return e._isUTC ? (i = e.clone(), r = (w(t) || a(t) ? t.valueOf() : we(t).valueOf()) - i.valueOf(), i._d.setTime(i._d.valueOf() + r), n.updateOffset(i, !1), i) : we(t).local()
            }
            function Ne(t) {
                return 15 * -Math.round(t._d.getTimezoneOffset() / 15)
            }
            function je(t, e) {
                var i,
                    r = this._offset || 0;
                return this.isValid() ? null != t ? ("string" == typeof t ? t = De(Vi, t) : Math.abs(t) < 16 && (t *= 60), !this._isUTC && e && (i = Ne(this)), this._offset = t, this._isUTC = !0, null != i && this.add(i, "m"), r !== t && (!e || this._changeInProgress ? $e(this, qe(t - r, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, n.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? r : Ne(this) : null != t ? this : NaN
            }
            function Ee(t, e) {
                return null != t ? ("string" != typeof t && (t = -t), this.utcOffset(t, e), this) : -this.utcOffset()
            }
            function Oe(t) {
                return this.utcOffset(0, t)
            }
            function Ae(t) {
                return this._isUTC && (this.utcOffset(0, t), this._isUTC = !1, t && this.subtract(Ne(this), "m")), this
            }
            function Pe() {
                if (this._tzm)
                    this.utcOffset(this._tzm);
                else if ("string" == typeof this._i) {
                    var t = De(Gi, this._i);
                    0 === t ? this.utcOffset(0, !0) : this.utcOffset(De(Gi, this._i))
                }
                return this
            }
            function Le(t) {
                return !!this.isValid() && (t = t ? we(t).utcOffset() : 0, (this.utcOffset() - t) % 60 === 0)
            }
            function Ye() {
                return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
            }
            function Fe() {
                if (!g(this._isDSTShifted))
                    return this._isDSTShifted;
                var t = {};
                if (y(t, this), t = ge(t), t._a) {
                    var e = t._isUTC ? h(t._a) : we(t._a);
                    this._isDSTShifted = this.isValid() && _(t._a, e.toArray()) > 0
                } else
                    this._isDSTShifted = !1;
                return this._isDSTShifted
            }
            function Re() {
                return !!this.isValid() && !this._isUTC
            }
            function He() {
                return !!this.isValid() && this._isUTC
            }
            function We() {
                return !!this.isValid() && (this._isUTC && 0 === this._offset)
            }
            function qe(t, e) {
                var n,
                    i,
                    r,
                    o = t,
                    s = null;
                return Se(t) ? o = {
                    ms: t._milliseconds,
                    d: t._days,
                    M: t._months
                } : "number" == typeof t ? (o = {}, e ? o[e] = t : o.milliseconds = t) : (s = Yr.exec(t)) ? (n = "-" === s[1] ? -1 : 1, o = {
                    y: 0,
                    d: x(s[er]) * n,
                    h: x(s[nr]) * n,
                    m: x(s[ir]) * n,
                    s: x(s[rr]) * n,
                    ms: x(Te(1e3 * s[or])) * n
                }) : (s = Fr.exec(t)) ? (n = "-" === s[1] ? -1 : 1, o = {
                    y: Ie(s[2], n),
                    M: Ie(s[3], n),
                    w: Ie(s[4], n),
                    d: Ie(s[5], n),
                    h: Ie(s[6], n),
                    m: Ie(s[7], n),
                    s: Ie(s[8], n)
                }) : null == o ? o = {} : "object" == typeof o && ("from" in o || "to" in o) && (r = Ue(we(o.from), we(o.to)), o = {}, o.ms = r.milliseconds, o.M = r.months), i = new ke(o), Se(t) && u(t, "_locale") && (i._locale = t._locale), i
            }
            function Ie(t, e) {
                var n = t && parseFloat(t.replace(",", "."));
                return (isNaN(n) ? 0 : n) * e
            }
            function Be(t, e) {
                var n = {
                    milliseconds: 0,
                    months: 0
                };
                return n.months = e.month() - t.month() + 12 * (e.year() - t.year()), t.clone().add(n.months, "M").isAfter(e) && --n.months, n.milliseconds = +e - +t.clone().add(n.months, "M"), n
            }
            function Ue(t, e) {
                var n;
                return t.isValid() && e.isValid() ? (e = Me(e, t), t.isBefore(e) ? n = Be(t, e) : (n = Be(e, t), n.milliseconds = -n.milliseconds, n.months = -n.months), n) : {
                    milliseconds: 0,
                    months: 0
                }
            }
            function ze(t, e) {
                return function(n, i) {
                    var r,
                        o;
                    return null === i || isNaN(+i) || (T(e, "moment()." + e + "(period, number) is deprecated. Please use moment()." + e + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), o = n, n = i, i = o), n = "string" == typeof n ? +n : n, r = qe(n, i), $e(this, r, t), this
                }
            }
            function $e(t, e, i, r) {
                var o = e._milliseconds,
                    s = Te(e._days),
                    a = Te(e._months);
                t.isValid() && (r = null == r || r, o && t._d.setTime(t._d.valueOf() + o * i), s && B(t, "Date", I(t, "Date") + s * i), a && ct(t, I(t, "Month") + a * i), r && n.updateOffset(t, s || a))
            }
            function Ge(t, e) {
                var n = t.diff(e, "days", !0);
                return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse"
            }
            function Ve(t, e) {
                var i = t || we(),
                    r = Me(i, this).startOf("day"),
                    o = n.calendarFormat(this, r) || "sameElse",
                    s = e && (C(e[o]) ? e[o].call(this, i) : e[o]);
                return this.format(s || this.localeData().calendar(o, this, we(i)))
            }
            function Xe() {
                return new v(this)
            }
            function Qe(t, e) {
                var n = w(t) ? t : we(t);
                return !(!this.isValid() || !n.isValid()) && (e = F(g(e) ? "millisecond" : e), "millisecond" === e ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(e).valueOf())
            }
            function Ze(t, e) {
                var n = w(t) ? t : we(t);
                return !(!this.isValid() || !n.isValid()) && (e = F(g(e) ? "millisecond" : e), "millisecond" === e ? this.valueOf() < n.valueOf() : this.clone().endOf(e).valueOf() < n.valueOf())
            }
            function Je(t, e, n, i) {
                return i = i || "()", ("(" === i[0] ? this.isAfter(t, n) : !this.isBefore(t, n)) && (")" === i[1] ? this.isBefore(e, n) : !this.isAfter(e, n))
            }
            function Ke(t, e) {
                var n,
                    i = w(t) ? t : we(t);
                return !(!this.isValid() || !i.isValid()) && (e = F(e || "millisecond"), "millisecond" === e ? this.valueOf() === i.valueOf() : (n = i.valueOf(), this.clone().startOf(e).valueOf() <= n && n <= this.clone().endOf(e).valueOf()))
            }
            function tn(t, e) {
                return this.isSame(t, e) || this.isAfter(t, e)
            }
            function en(t, e) {
                return this.isSame(t, e) || this.isBefore(t, e)
            }
            function nn(t, e, n) {
                var i,
                    r,
                    o,
                    s;
                return this.isValid() ? (i = Me(t, this), i.isValid() ? (r = 6e4 * (i.utcOffset() - this.utcOffset()), e = F(e), "year" === e || "month" === e || "quarter" === e ? (s = rn(this, i), "quarter" === e ? s /= 3 : "year" === e && (s /= 12)) : (o = this - i, s = "second" === e ? o / 1e3 : "minute" === e ? o / 6e4 : "hour" === e ? o / 36e5 : "day" === e ? (o - r) / 864e5 : "week" === e ? (o - r) / 6048e5 : o), n ? s : b(s)) : NaN) : NaN
            }
            function rn(t, e) {
                var n,
                    i,
                    r = 12 * (e.year() - t.year()) + (e.month() - t.month()),
                    o = t.clone().add(r, "months");
                return e - o < 0 ? (n = t.clone().add(r - 1, "months"), i = (e - o) / (o - n)) : (n = t.clone().add(r + 1, "months"), i = (e - o) / (n - o)), -(r + i) || 0
            }
            function on() {
                return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
            }
            function sn() {
                var t = this.clone().utc();
                return 0 < t.year() && t.year() <= 9999 ? C(Date.prototype.toISOString) ? this.toDate().toISOString() : Q(t, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : Q(t, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
            }
            function an(t) {
                t || (t = this.isUtc() ? n.defaultFormatUtc : n.defaultFormat);
                var e = Q(this, t);
                return this.localeData().postformat(e)
            }
            function ln(t, e) {
                return this.isValid() && (w(t) && t.isValid() || we(t).isValid()) ? qe({
                    to: this,
                    from: t
                }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
            }
            function un(t) {
                return this.from(we(), t)
            }
            function cn(t, e) {
                return this.isValid() && (w(t) && t.isValid() || we(t).isValid()) ? qe({
                    from: this,
                    to: t
                }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
            }
            function hn(t) {
                return this.to(we(), t)
            }
            function dn(t) {
                var e;
                return void 0 === t ? this._locale._abbr : (e = ne(t), null != e && (this._locale = e), this)
            }
            function fn() {
                return this._locale
            }
            function pn(t) {
                switch (t = F(t)) {
                case "year":
                    this.month(0);
                case "quarter":
                case "month":
                    this.date(1);
                case "week":
                case "isoWeek":
                case "day":
                case "date":
                    this.hours(0);
                case "hour":
                    this.minutes(0);
                case "minute":
                    this.seconds(0);
                case "second":
                    this.milliseconds(0)
                }
                return "week" === t && this.weekday(0), "isoWeek" === t && this.isoWeekday(1), "quarter" === t && this.month(3 * Math.floor(this.month() / 3)), this
            }
            function mn(t) {
                return t = F(t), void 0 === t || "millisecond" === t ? this : ("date" === t && (t = "day"), this.startOf(t).add(1, "isoWeek" === t ? "week" : t).subtract(1, "ms"))
            }
            function gn() {
                return this._d.valueOf() - 6e4 * (this._offset || 0)
            }
            function yn() {
                return Math.floor(this.valueOf() / 1e3)
            }
            function vn() {
                return new Date(this.valueOf())
            }
            function wn() {
                var t = this;
                return [t.year(), t.month(), t.date(), t.hour(), t.minute(), t.second(), t.millisecond()]
            }
            function bn() {
                var t = this;
                return {
                    years: t.year(),
                    months: t.month(),
                    date: t.date(),
                    hours: t.hours(),
                    minutes: t.minutes(),
                    seconds: t.seconds(),
                    milliseconds: t.milliseconds()
                }
            }
            function xn() {
                return this.isValid() ? this.toISOString() : null
            }
            function _n() {
                return p(this)
            }
            function kn() {
                return c({}, f(this))
            }
            function Sn() {
                return f(this).overflow
            }
            function Tn() {
                return {
                    input: this._i,
                    format: this._f,
                    locale: this._locale,
                    isUTC: this._isUTC,
                    strict: this._strict
                }
            }
            function Cn(t, e) {
                G(0, [t, t.length], 0, e)
            }
            function Dn(t) {
                return En.call(this, t, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
            }
            function Mn(t) {
                return En.call(this, t, this.isoWeek(), this.isoWeekday(), 1, 4)
            }
            function Nn() {
                return St(this.year(), 1, 4)
            }
            function jn() {
                var t = this.localeData()._week;
                return St(this.year(), t.dow, t.doy)
            }
            function En(t, e, n, i, r) {
                var o;
                return null == t ? kt(this, i, r).year : (o = St(t, i, r), e > o && (e = o), On.call(this, t, e, n, i, r))
            }
            function On(t, e, n, i, r) {
                var o = _t(t, e, n, i, r),
                    s = bt(o.year, 0, o.dayOfYear);
                return this.year(s.getUTCFullYear()), this.month(s.getUTCMonth()), this.date(s.getUTCDate()), this
            }
            function An(t) {
                return null == t ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (t - 1) + this.month() % 3)
            }
            function Pn(t) {
                var e = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
                return null == t ? e : this.add(t - e, "d")
            }
            function Ln(t, e) {
                e[or] = x(1e3 * ("0." + t))
            }
            function Yn() {
                return this._isUTC ? "UTC" : ""
            }
            function Fn() {
                return this._isUTC ? "Coordinated Universal Time" : ""
            }
            function Rn(t) {
                return we(1e3 * t)
            }
            function Hn() {
                return we.apply(null, arguments).parseZone()
            }
            function Wn(t) {
                return t
            }
            function qn(t, e, n, i) {
                var r = ne(),
                    o = h().set(i, e);
                return r[n](o, t)
            }
            function In(t, e, n) {
                if ("number" == typeof t && (e = t, t = void 0), t = t || "", null != e)
                    return qn(t, e, n, "month");
                var i,
                    r = [];
                for (i = 0; i < 12; i++)
                    r[i] = qn(t, i, n, "month");
                return r
            }
            function Bn(t, e, n, i) {
                "boolean" == typeof t ? ("number" == typeof e && (n = e, e = void 0), e = e || "") : (e = t, n = e, t = !1, "number" == typeof e && (n = e, e = void 0), e = e || "");
                var r = ne(),
                    o = t ? r._week.dow : 0;
                if (null != n)
                    return qn(e, (n + o) % 7, i, "day");
                var s,
                    a = [];
                for (s = 0; s < 7; s++)
                    a[s] = qn(e, (s + o) % 7, i, "day");
                return a
            }
            function Un(t, e) {
                return In(t, e, "months")
            }
            function zn(t, e) {
                return In(t, e, "monthsShort")
            }
            function $n(t, e, n) {
                return Bn(t, e, n, "weekdays")
            }
            function Gn(t, e, n) {
                return Bn(t, e, n, "weekdaysShort")
            }
            function Vn(t, e, n) {
                return Bn(t, e, n, "weekdaysMin")
            }
            function Xn() {
                var t = this._data;
                return this._milliseconds = Xr(this._milliseconds), this._days = Xr(this._days), this._months = Xr(this._months), t.milliseconds = Xr(t.milliseconds), t.seconds = Xr(t.seconds), t.minutes = Xr(t.minutes), t.hours = Xr(t.hours), t.months = Xr(t.months), t.years = Xr(t.years), this
            }
            function Qn(t, e, n, i) {
                var r = qe(e, n);
                return t._milliseconds += i * r._milliseconds, t._days += i * r._days, t._months += i * r._months, t._bubble()
            }
            function Zn(t, e) {
                return Qn(this, t, e, 1)
            }
            function Jn(t, e) {
                return Qn(this, t, e, -1)
            }
            function Kn(t) {
                return t < 0 ? Math.floor(t) : Math.ceil(t)
            }
            function ti() {
                var t,
                    e,
                    n,
                    i,
                    r,
                    o = this._milliseconds,
                    s = this._days,
                    a = this._months,
                    l = this._data;
                return o >= 0 && s >= 0 && a >= 0 || o <= 0 && s <= 0 && a <= 0 || (o += 864e5 * Kn(ni(a) + s), s = 0, a = 0), l.milliseconds = o % 1e3, t = b(o / 1e3), l.seconds = t % 60, e = b(t / 60), l.minutes = e % 60, n = b(e / 60), l.hours = n % 24, s += b(n / 24), r = b(ei(s)), a += r, s -= Kn(ni(r)), i = b(a / 12), a %= 12, l.days = s, l.months = a, l.years = i, this
            }
            function ei(t) {
                return 4800 * t / 146097
            }
            function ni(t) {
                return 146097 * t / 4800
            }
            function ii(t) {
                var e,
                    n,
                    i = this._milliseconds;
                if (t = F(t), "month" === t || "year" === t)
                    return e = this._days + i / 864e5, n = this._months + ei(e), "month" === t ? n : n / 12;
                switch (e = this._days + Math.round(ni(this._months)), t) {
                case "week":
                    return e / 7 + i / 6048e5;
                case "day":
                    return e + i / 864e5;
                case "hour":
                    return 24 * e + i / 36e5;
                case "minute":
                    return 1440 * e + i / 6e4;
                case "second":
                    return 86400 * e + i / 1e3;
                case "millisecond":
                    return Math.floor(864e5 * e) + i;
                default:
                    throw new Error("Unknown unit " + t)
                }
            }
            function ri() {
                return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * x(this._months / 12)
            }
            function oi(t) {
                return function() {
                    return this.as(t)
                }
            }
            function si(t) {
                return t = F(t), this[t + "s"]()
            }
            function ai(t) {
                return function() {
                    return this._data[t]
                }
            }
            function li() {
                return b(this.days() / 7)
            }
            function ui(t, e, n, i, r) {
                return r.relativeTime(e || 1, !!n, t, i)
            }
            function ci(t, e, n) {
                var i = qe(t).abs(),
                    r = ho(i.as("s")),
                    o = ho(i.as("m")),
                    s = ho(i.as("h")),
                    a = ho(i.as("d")),
                    l = ho(i.as("M")),
                    u = ho(i.as("y")),
                    c = r < fo.s && ["s", r] || o <= 1 && ["m"] || o < fo.m && ["mm", o] || s <= 1 && ["h"] || s < fo.h && ["hh", s] || a <= 1 && ["d"] || a < fo.d && ["dd", a] || l <= 1 && ["M"] || l < fo.M && ["MM", l] || u <= 1 && ["y"] || ["yy", u];
                return c[2] = e, c[3] = +t > 0, c[4] = n, ui.apply(null, c)
            }
            function hi(t) {
                return void 0 === t ? ho : "function" == typeof t && (ho = t, !0)
            }
            function di(t, e) {
                return void 0 !== fo[t] && (void 0 === e ? fo[t] : (fo[t] = e, !0))
            }
            function fi(t) {
                var e = this.localeData(),
                    n = ci(this, !t, e);
                return t && (n = e.pastFuture(+this, n)), e.postformat(n)
            }
            function pi() {
                var t,
                    e,
                    n,
                    i = po(this._milliseconds) / 1e3,
                    r = po(this._days),
                    o = po(this._months);
                t = b(i / 60), e = b(t / 60), i %= 60, t %= 60, n = b(o / 12), o %= 12;
                var s = n,
                    a = o,
                    l = r,
                    u = e,
                    c = t,
                    h = i,
                    d = this.asSeconds();
                return d ? (d < 0 ? "-" : "") + "P" + (s ? s + "Y" : "") + (a ? a + "M" : "") + (l ? l + "D" : "") + (u || c || h ? "T" : "") + (u ? u + "H" : "") + (c ? c + "M" : "") + (h ? h + "S" : "") : "P0D"
            }
            var mi,
                gi;
            gi = Array.prototype.some ? Array.prototype.some : function(t) {
                for (var e = Object(this), n = e.length >>> 0, i = 0; i < n; i++)
                    if (i in e && t.call(this, e[i], i, e))
                        return !0;
                return !1
            };
            var yi = n.momentProperties = [],
                vi = !1,
                wi = {};
            n.suppressDeprecationWarnings = !1, n.deprecationHandler = null;
            var bi;
            bi = Object.keys ? Object.keys : function(t) {
                var e,
                    n = [];
                for (e in t)
                    u(t, e) && n.push(e);
                return n
            };
            var xi,
                _i = {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                ki = {
                    LTS: "h:mm:ss A",
                    LT: "h:mm A",
                    L: "MM/DD/YYYY",
                    LL: "MMMM D, YYYY",
                    LLL: "MMMM D, YYYY h:mm A",
                    LLLL: "dddd, MMMM D, YYYY h:mm A"
                },
                Si = "Invalid date",
                Ti = "%d",
                Ci = /\d{1,2}/,
                Di = {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                Mi = {},
                Ni = {},
                ji = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
                Ei = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
                Oi = {},
                Ai = {},
                Pi = /\d/,
                Li = /\d\d/,
                Yi = /\d{3}/,
                Fi = /\d{4}/,
                Ri = /[+-]?\d{6}/,
                Hi = /\d\d?/,
                Wi = /\d\d\d\d?/,
                qi = /\d\d\d\d\d\d?/,
                Ii = /\d{1,3}/,
                Bi = /\d{1,4}/,
                Ui = /[+-]?\d{1,6}/,
                zi = /\d+/,
                $i = /[+-]?\d+/,
                Gi = /Z|[+-]\d\d:?\d\d/gi,
                Vi = /Z|[+-]\d\d(?::?\d\d)?/gi,
                Xi = /[+-]?\d+(\.\d{1,3})?/,
                Qi = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
                Zi = {},
                Ji = {},
                Ki = 0,
                tr = 1,
                er = 2,
                nr = 3,
                ir = 4,
                rr = 5,
                or = 6,
                sr = 7,
                ar = 8;
            xi = Array.prototype.indexOf ? Array.prototype.indexOf : function(t) {
                var e;
                for (e = 0; e < this.length; ++e)
                    if (this[e] === t)
                        return e;
                return -1
            }, G("M", ["MM", 2], "Mo", function() {
                return this.month() + 1
            }), G("MMM", 0, 0, function(t) {
                return this.localeData().monthsShort(this, t)
            }), G("MMMM", 0, 0, function(t) {
                return this.localeData().months(this, t)
            }), Y("month", "M"), H("month", 8), J("M", Hi), J("MM", Hi, Li), J("MMM", function(t, e) {
                return e.monthsShortRegex(t)
            }), J("MMMM", function(t, e) {
                return e.monthsRegex(t)
            }), nt(["M", "MM"], function(t, e) {
                e[tr] = x(t) - 1
            }), nt(["MMM", "MMMM"], function(t, e, n, i) {
                var r = n._locale.monthsParse(t, i, n._strict);
                null != r ? e[tr] = r : f(n).invalidMonth = t
            });
            var lr = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
                ur = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                cr = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                hr = Qi,
                dr = Qi;
            G("Y", 0, 0, function() {
                var t = this.year();
                return t <= 9999 ? "" + t : "+" + t
            }), G(0, ["YY", 2], 0, function() {
                return this.year() % 100
            }), G(0, ["YYYY", 4], 0, "year"), G(0, ["YYYYY", 5], 0, "year"), G(0, ["YYYYYY", 6, !0], 0, "year"), Y("year", "y"), H("year", 1), J("Y", $i), J("YY", Hi, Li), J("YYYY", Bi, Fi), J("YYYYY", Ui, Ri), J("YYYYYY", Ui, Ri), nt(["YYYYY", "YYYYYY"], Ki), nt("YYYY", function(t, e) {
                e[Ki] = 2 === t.length ? n.parseTwoDigitYear(t) : x(t)
            }), nt("YY", function(t, e) {
                e[Ki] = n.parseTwoDigitYear(t)
            }), nt("Y", function(t, e) {
                e[Ki] = parseInt(t, 10)
            }), n.parseTwoDigitYear = function(t) {
                return x(t) + (x(t) > 68 ? 1900 : 2e3)
            };
            var fr = q("FullYear", !0);
            G("w", ["ww", 2], "wo", "week"), G("W", ["WW", 2], "Wo", "isoWeek"), Y("week", "w"), Y("isoWeek", "W"), H("week", 5), H("isoWeek", 5), J("w", Hi), J("ww", Hi, Li), J("W", Hi), J("WW", Hi, Li), it(["w", "ww", "W", "WW"], function(t, e, n, i) {
                e[i.substr(0, 1)] = x(t)
            });
            var pr = {
                dow: 0,
                doy: 6
            };
            G("d", 0, "do", "day"), G("dd", 0, 0, function(t) {
                return this.localeData().weekdaysMin(this, t)
            }), G("ddd", 0, 0, function(t) {
                return this.localeData().weekdaysShort(this, t)
            }), G("dddd", 0, 0, function(t) {
                return this.localeData().weekdays(this, t)
            }), G("e", 0, 0, "weekday"), G("E", 0, 0, "isoWeekday"), Y("day", "d"), Y("weekday", "e"), Y("isoWeekday", "E"), H("day", 11), H("weekday", 11), H("isoWeekday", 11), J("d", Hi), J("e", Hi), J("E", Hi), J("dd", function(t, e) {
                return e.weekdaysMinRegex(t)
            }), J("ddd", function(t, e) {
                return e.weekdaysShortRegex(t)
            }), J("dddd", function(t, e) {
                return e.weekdaysRegex(t)
            }), it(["dd", "ddd", "dddd"], function(t, e, n, i) {
                var r = n._locale.weekdaysParse(t, i, n._strict);
                null != r ? e.d = r : f(n).invalidWeekday = t
            }), it(["d", "e", "E"], function(t, e, n, i) {
                e[i] = x(t)
            });
            var mr = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                gr = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                yr = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                vr = Qi,
                wr = Qi,
                br = Qi;
            G("H", ["HH", 2], 0, "hour"), G("h", ["hh", 2], 0, Ut), G("k", ["kk", 2], 0, zt), G("hmm", 0, 0, function() {
                return "" + Ut.apply(this) + $(this.minutes(), 2)
            }), G("hmmss", 0, 0, function() {
                return "" + Ut.apply(this) + $(this.minutes(), 2) + $(this.seconds(), 2)
            }), G("Hmm", 0, 0, function() {
                return "" + this.hours() + $(this.minutes(), 2)
            }), G("Hmmss", 0, 0, function() {
                return "" + this.hours() + $(this.minutes(), 2) + $(this.seconds(), 2)
            }), $t("a", !0), $t("A", !1), Y("hour", "h"), H("hour", 13), J("a", Gt), J("A", Gt), J("H", Hi), J("h", Hi), J("HH", Hi, Li), J("hh", Hi, Li), J("hmm", Wi), J("hmmss", qi), J("Hmm", Wi), J("Hmmss", qi), nt(["H", "HH"], nr), nt(["a", "A"], function(t, e, n) {
                n._isPm = n._locale.isPM(t), n._meridiem = t
            }), nt(["h", "hh"], function(t, e, n) {
                e[nr] = x(t), f(n).bigHour = !0
            }), nt("hmm", function(t, e, n) {
                var i = t.length - 2;
                e[nr] = x(t.substr(0, i)), e[ir] = x(t.substr(i)), f(n).bigHour = !0
            }), nt("hmmss", function(t, e, n) {
                var i = t.length - 4,
                    r = t.length - 2;
                e[nr] = x(t.substr(0, i)), e[ir] = x(t.substr(i, 2)), e[rr] = x(t.substr(r)), f(n).bigHour = !0
            }), nt("Hmm", function(t, e, n) {
                var i = t.length - 2;
                e[nr] = x(t.substr(0, i)), e[ir] = x(t.substr(i))
            }), nt("Hmmss", function(t, e, n) {
                var i = t.length - 4,
                    r = t.length - 2;
                e[nr] = x(t.substr(0, i)), e[ir] = x(t.substr(i, 2)), e[rr] = x(t.substr(r))
            });
            var xr,
                _r = /[ap]\.?m?\.?/i,
                kr = q("Hours", !0),
                Sr = {
                    calendar: _i,
                    longDateFormat: ki,
                    invalidDate: Si,
                    ordinal: Ti,
                    ordinalParse: Ci,
                    relativeTime: Di,
                    months: ur,
                    monthsShort: cr,
                    week: pr,
                    weekdays: mr,
                    weekdaysMin: yr,
                    weekdaysShort: gr,
                    meridiemParse: _r
                },
                Tr = {},
                Cr = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
                Dr = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
                Mr = /Z|[+-]\d\d(?::?\d\d)?/,
                Nr = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/]],
                jr = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]],
                Er = /^\/?Date\((\-?\d+)/i;
            n.createFromInputFallback = S("value provided is not in a recognized ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(t) {
                t._d = new Date(t._i + (t._useUTC ? " UTC" : ""))
            }), n.ISO_8601 = function() {};
            var Or = S("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
                    var t = we.apply(null, arguments);
                    return this.isValid() && t.isValid() ? t < this ? this : t : m()
                }),
                Ar = S("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
                    var t = we.apply(null, arguments);
                    return this.isValid() && t.isValid() ? t > this ? this : t : m()
                }),
                Pr = function() {
                    return Date.now ? Date.now() : +new Date
                };
            Ce("Z", ":"), Ce("ZZ", ""), J("Z", Vi), J("ZZ", Vi), nt(["Z", "ZZ"], function(t, e, n) {
                n._useUTC = !0, n._tzm = De(Vi, t)
            });
            var Lr = /([\+\-]|\d\d)/gi;
            n.updateOffset = function() {};
            var Yr = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
                Fr = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
            qe.fn = ke.prototype;
            var Rr = ze(1, "add"),
                Hr = ze(-1, "subtract");
            n.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", n.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
            var Wr = S("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(t) {
                return void 0 === t ? this.localeData() : this.locale(t)
            });
            G(0, ["gg", 2], 0, function() {
                return this.weekYear() % 100
            }), G(0, ["GG", 2], 0, function() {
                return this.isoWeekYear() % 100
            }), Cn("gggg", "weekYear"), Cn("ggggg", "weekYear"), Cn("GGGG", "isoWeekYear"), Cn("GGGGG", "isoWeekYear"), Y("weekYear", "gg"), Y("isoWeekYear", "GG"), H("weekYear", 1), H("isoWeekYear", 1), J("G", $i), J("g", $i), J("GG", Hi, Li), J("gg", Hi, Li), J("GGGG", Bi, Fi), J("gggg", Bi, Fi), J("GGGGG", Ui, Ri), J("ggggg", Ui, Ri), it(["gggg", "ggggg", "GGGG", "GGGGG"], function(t, e, n, i) {
                e[i.substr(0, 2)] = x(t)
            }), it(["gg", "GG"], function(t, e, i, r) {
                e[r] = n.parseTwoDigitYear(t)
            }), G("Q", 0, "Qo", "quarter"), Y("quarter", "Q"), H("quarter", 7), J("Q", Pi), nt("Q", function(t, e) {
                e[tr] = 3 * (x(t) - 1)
            }), G("D", ["DD", 2], "Do", "date"), Y("date", "D"), H("date", 9), J("D", Hi), J("DD", Hi, Li), J("Do", function(t, e) {
                return t ? e._ordinalParse : e._ordinalParseLenient
            }), nt(["D", "DD"], er), nt("Do", function(t, e) {
                e[er] = x(t.match(Hi)[0], 10)
            });
            var qr = q("Date", !0);
            G("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), Y("dayOfYear", "DDD"), H("dayOfYear", 4), J("DDD", Ii), J("DDDD", Yi), nt(["DDD", "DDDD"], function(t, e, n) {
                n._dayOfYear = x(t)
            }), G("m", ["mm", 2], 0, "minute"), Y("minute", "m"), H("minute", 14), J("m", Hi), J("mm", Hi, Li), nt(["m", "mm"], ir);
            var Ir = q("Minutes", !1);
            G("s", ["ss", 2], 0, "second"), Y("second", "s"), H("second", 15), J("s", Hi), J("ss", Hi, Li), nt(["s", "ss"], rr);
            var Br = q("Seconds", !1);
            G("S", 0, 0, function() {
                return ~~(this.millisecond() / 100)
            }), G(0, ["SS", 2], 0, function() {
                return ~~(this.millisecond() / 10)
            }), G(0, ["SSS", 3], 0, "millisecond"), G(0, ["SSSS", 4], 0, function() {
                return 10 * this.millisecond()
            }), G(0, ["SSSSS", 5], 0, function() {
                return 100 * this.millisecond()
            }), G(0, ["SSSSSS", 6], 0, function() {
                return 1e3 * this.millisecond()
            }), G(0, ["SSSSSSS", 7], 0, function() {
                return 1e4 * this.millisecond()
            }), G(0, ["SSSSSSSS", 8], 0, function() {
                return 1e5 * this.millisecond()
            }), G(0, ["SSSSSSSSS", 9], 0, function() {
                return 1e6 * this.millisecond()
            }), Y("millisecond", "ms"), H("millisecond", 16), J("S", Ii, Pi), J("SS", Ii, Li), J("SSS", Ii, Yi);
            var Ur;
            for (Ur = "SSSS"; Ur.length <= 9; Ur += "S")
                J(Ur, zi);
            for (Ur = "S"; Ur.length <= 9; Ur += "S")
                nt(Ur, Ln);
            var zr = q("Milliseconds", !1);
            G("z", 0, 0, "zoneAbbr"), G("zz", 0, 0, "zoneName");
            var $r = v.prototype;
            $r.add = Rr, $r.calendar = Ve, $r.clone = Xe, $r.diff = nn, $r.endOf = mn, $r.format = an, $r.from = ln, $r.fromNow = un, $r.to = cn, $r.toNow = hn, $r.get = U, $r.invalidAt = Sn, $r.isAfter = Qe, $r.isBefore = Ze, $r.isBetween = Je, $r.isSame = Ke, $r.isSameOrAfter = tn, $r.isSameOrBefore = en, $r.isValid = _n, $r.lang = Wr, $r.locale = dn, $r.localeData = fn, $r.max = Ar, $r.min = Or, $r.parsingFlags = kn, $r.set = z, $r.startOf = pn, $r.subtract = Hr, $r.toArray = wn, $r.toObject = bn, $r.toDate = vn, $r.toISOString = sn, $r.toJSON = xn, $r.toString = on, $r.unix = yn, $r.valueOf = gn, $r.creationData = Tn, $r.year = fr, $r.isLeapYear = vt, $r.weekYear = Dn, $r.isoWeekYear = Mn, $r.quarter = $r.quarters = An, $r.month = ht, $r.daysInMonth = dt, $r.week = $r.weeks = Mt, $r.isoWeek = $r.isoWeeks = Nt, $r.weeksInYear = jn, $r.isoWeeksInYear = Nn, $r.date = qr, $r.day = $r.days = Ft, $r.weekday = Rt, $r.isoWeekday = Ht, $r.dayOfYear = Pn, $r.hour = $r.hours = kr, $r.minute = $r.minutes = Ir, $r.second = $r.seconds = Br, $r.millisecond = $r.milliseconds = zr, $r.utcOffset = je, $r.utc = Oe, $r.local = Ae, $r.parseZone = Pe, $r.hasAlignedHourOffset = Le, $r.isDST = Ye, $r.isLocal = Re, $r.isUtcOffset = He, $r.isUtc = We, $r.isUTC = We, $r.zoneAbbr = Yn, $r.zoneName = Fn, $r.dates = S("dates accessor is deprecated. Use date instead.", qr), $r.months = S("months accessor is deprecated. Use month instead", ht), $r.years = S("years accessor is deprecated. Use year instead", fr), $r.zone = S("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", Ee), $r.isDSTShifted = S("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", Fe);
            var Gr = $r,
                Vr = N.prototype;
            Vr.calendar = j, Vr.longDateFormat = E, Vr.invalidDate = O, Vr.ordinal = A, Vr.preparse = Wn, Vr.postformat = Wn, Vr.relativeTime = P, Vr.pastFuture = L, Vr.set = D, Vr.months = st, Vr.monthsShort = at, Vr.monthsParse = ut, Vr.monthsRegex = pt, Vr.monthsShortRegex = ft, Vr.week = Tt, Vr.firstDayOfYear = Dt, Vr.firstDayOfWeek = Ct, Vr.weekdays = Ot, Vr.weekdaysMin = Pt, Vr.weekdaysShort = At, Vr.weekdaysParse = Yt, Vr.weekdaysRegex = Wt, Vr.weekdaysShortRegex = qt, Vr.weekdaysMinRegex = It, Vr.isPM = Vt, Vr.meridiem = Xt, Kt("en", {
                ordinalParse: /\d{1,2}(th|st|nd|rd)/,
                ordinal: function(t) {
                    var e = t % 10,
                        n = 1 === x(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th";
                    return t + n
                }
            }), n.lang = S("moment.lang is deprecated. Use moment.locale instead.", Kt), n.langData = S("moment.langData is deprecated. Use moment.localeData instead.", ne);
            var Xr = Math.abs,
                Qr = oi("ms"),
                Zr = oi("s"),
                Jr = oi("m"),
                Kr = oi("h"),
                to = oi("d"),
                eo = oi("w"),
                no = oi("M"),
                io = oi("y"),
                ro = ai("milliseconds"),
                oo = ai("seconds"),
                so = ai("minutes"),
                ao = ai("hours"),
                lo = ai("days"),
                uo = ai("months"),
                co = ai("years"),
                ho = Math.round,
                fo = {
                    s: 45,
                    m: 45,
                    h: 22,
                    d: 26,
                    M: 11
                },
                po = Math.abs,
                mo = ke.prototype;
            mo.abs = Xn, mo.add = Zn, mo.subtract = Jn, mo.as = ii, mo.asMilliseconds = Qr, mo.asSeconds = Zr, mo.asMinutes = Jr, mo.asHours = Kr, mo.asDays = to, mo.asWeeks = eo, mo.asMonths = no, mo.asYears = io, mo.valueOf = ri, mo._bubble = ti, mo.get = si, mo.milliseconds = ro, mo.seconds = oo, mo.minutes = so, mo.hours = ao, mo.days = lo, mo.weeks = li, mo.months = uo, mo.years = co, mo.humanize = fi, mo.toISOString = pi, mo.toString = pi, mo.toJSON = pi, mo.locale = dn, mo.localeData = fn, mo.toIsoString = S("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", pi), mo.lang = Wr, G("X", 0, 0, "unix"), G("x", 0, 0, "valueOf"), J("x", $i), J("X", Xi), nt("X", function(t, e, n) {
                n._d = new Date(1e3 * parseFloat(t, 10))
            }), nt("x", function(t, e, n) {
                n._d = new Date(x(t))
            }), n.version = "2.15.2", i(we), n.fn = Gr, n.min = xe, n.max = _e, n.now = Pr, n.utc = h, n.unix = Rn, n.months = Un, n.isDate = a, n.locale = Kt, n.invalid = m, n.duration = qe, n.isMoment = w, n.weekdays = $n, n.parseZone = Hn, n.localeData = ne, n.isDuration = Se, n.monthsShort = zn, n.weekdaysMin = Vn, n.defineLocale = te, n.updateLocale = ee, n.locales = ie, n.weekdaysShort = Gn, n.normalizeUnits = F, n.relativeTimeRounding = hi, n.relativeTimeThreshold = di, n.calendarFormat = Ge, n.prototype = Gr;
            var go = n;
            return go
        })
    }, {}],
    9: [function(t, e, n) {
        (function() {
            function t(t) {
                function e(e, n, i, r, o, s) {
                    for (; o >= 0 && o < s; o += t) {
                        var a = r ? r[o] : o;
                        i = n(i, e[a], a, e)
                    }
                    return i
                }
                return function(n, i, r, o) {
                    i = x(i, o, 4);
                    var s = !M(n) && b.keys(n),
                        a = (s || n).length,
                        l = t > 0 ? 0 : a - 1;
                    return arguments.length < 3 && (r = n[s ? s[l] : l], l += t), e(n, i, r, s, l, a)
                }
            }
            function i(t) {
                return function(e, n, i) {
                    n = _(n, i);
                    for (var r = D(e), o = t > 0 ? 0 : r - 1; o >= 0 && o < r; o += t)
                        if (n(e[o], o, e))
                            return o;
                    return -1
                }
            }
            function r(t, e, n) {
                return function(i, r, o) {
                    var s = 0,
                        a = D(i);
                    if ("number" == typeof o)
                        t > 0 ? s = o >= 0 ? o : Math.max(o + a, s) : a = o >= 0 ? Math.min(o + 1, a) : o + a + 1;
                    else if (n && o && a)
                        return o = n(i, r), i[o] === r ? o : -1;
                    if (r !== r)
                        return o = e(d.call(i, s, a), b.isNaN), o >= 0 ? o + s : -1;
                    for (o = t > 0 ? s : a - 1; o >= 0 && o < a; o += t)
                        if (i[o] === r)
                            return o;
                    return -1
                }
            }
            function o(t, e) {
                var n = A.length,
                    i = t.constructor,
                    r = b.isFunction(i) && i.prototype || u,
                    o = "constructor";
                for (b.has(t, o) && !b.contains(e, o) && e.push(o); n--;)
                    o = A[n],
                    o in t && t[o] !== r[o] && !b.contains(e, o) && e.push(o)
            }
            var s = this,
                a = s._,
                l = Array.prototype,
                u = Object.prototype,
                c = Function.prototype,
                h = l.push,
                d = l.slice,
                f = u.toString,
                p = u.hasOwnProperty,
                m = Array.isArray,
                g = Object.keys,
                y = c.bind,
                v = Object.create,
                w = function() {},
                b = function(t) {
                    return t instanceof b ? t : this instanceof b ? void (this._wrapped = t) : new b(t)
                };
            "undefined" != typeof n ? ("undefined" != typeof e && e.exports && (n = e.exports = b), n._ = b) : s._ = b, b.VERSION = "1.8.3";
            var x = function(t, e, n) {
                    if (void 0 === e)
                        return t;
                    switch (null == n ? 3 : n) {
                    case 1:
                        return function(n) {
                            return t.call(e, n)
                        };
                    case 2:
                        return function(n, i) {
                            return t.call(e, n, i)
                        };
                    case 3:
                        return function(n, i, r) {
                            return t.call(e, n, i, r)
                        };
                    case 4:
                        return function(n, i, r, o) {
                            return t.call(e, n, i, r, o)
                        }
                    }
                    return function() {
                        return t.apply(e, arguments)
                    }
                },
                _ = function(t, e, n) {
                    return null == t ? b.identity : b.isFunction(t) ? x(t, e, n) : b.isObject(t) ? b.matcher(t) : b.property(t)
                };
            b.iteratee = function(t, e) {
                return _(t, e, 1 / 0)
            };
            var k = function(t, e) {
                    return function(n) {
                        var i = arguments.length;
                        if (i < 2 || null == n)
                            return n;
                        for (var r = 1; r < i; r++)
                            for (var o = arguments[r], s = t(o), a = s.length, l = 0; l < a; l++) {
                                var u = s[l];
                                e && void 0 !== n[u] || (n[u] = o[u])
                            }
                        return n
                    }
                },
                S = function(t) {
                    if (!b.isObject(t))
                        return {};
                    if (v)
                        return v(t);
                    w.prototype = t;
                    var e = new w;
                    return w.prototype = null, e
                },
                T = function(t) {
                    return function(e) {
                        return null == e ? void 0 : e[t]
                    }
                },
                C = Math.pow(2, 53) - 1,
                D = T("length"),
                M = function(t) {
                    var e = D(t);
                    return "number" == typeof e && e >= 0 && e <= C
                };
            b.each = b.forEach = function(t, e, n) {
                e = x(e, n);
                var i,
                    r;
                if (M(t))
                    for (i = 0, r = t.length; i < r; i++)
                        e(t[i], i, t);
                else {
                    var o = b.keys(t);
                    for (i = 0, r = o.length; i < r; i++)
                        e(t[o[i]], o[i], t)
                }
                return t
            }, b.map = b.collect = function(t, e, n) {
                e = _(e, n);
                for (var i = !M(t) && b.keys(t), r = (i || t).length, o = Array(r), s = 0; s < r; s++) {
                    var a = i ? i[s] : s;
                    o[s] = e(t[a], a, t)
                }
                return o
            }, b.reduce = b.foldl = b.inject = t(1), b.reduceRight = b.foldr = t(-1), b.find = b.detect = function(t, e, n) {
                var i;
                if (i = M(t) ? b.findIndex(t, e, n) : b.findKey(t, e, n), void 0 !== i && i !== -1)
                    return t[i]
            }, b.filter = b.select = function(t, e, n) {
                var i = [];
                return e = _(e, n), b.each(t, function(t, n, r) {
                    e(t, n, r) && i.push(t)
                }), i
            }, b.reject = function(t, e, n) {
                return b.filter(t, b.negate(_(e)), n)
            }, b.every = b.all = function(t, e, n) {
                e = _(e, n);
                for (var i = !M(t) && b.keys(t), r = (i || t).length, o = 0; o < r; o++) {
                    var s = i ? i[o] : o;
                    if (!e(t[s], s, t))
                        return !1
                }
                return !0
            }, b.some = b.any = function(t, e, n) {
                e = _(e, n);
                for (var i = !M(t) && b.keys(t), r = (i || t).length, o = 0; o < r; o++) {
                    var s = i ? i[o] : o;
                    if (e(t[s], s, t))
                        return !0
                }
                return !1
            }, b.contains = b.includes = b.include = function(t, e, n, i) {
                return M(t) || (t = b.values(t)), ("number" != typeof n || i) && (n = 0), b.indexOf(t, e, n) >= 0
            }, b.invoke = function(t, e) {
                var n = d.call(arguments, 2),
                    i = b.isFunction(e);
                return b.map(t, function(t) {
                    var r = i ? e : t[e];
                    return null == r ? r : r.apply(t, n)
                })
            }, b.pluck = function(t, e) {
                return b.map(t, b.property(e))
            }, b.where = function(t, e) {
                return b.filter(t, b.matcher(e))
            }, b.findWhere = function(t, e) {
                return b.find(t, b.matcher(e))
            }, b.max = function(t, e, n) {
                var i,
                    r,
                    o = -(1 / 0),
                    s = -(1 / 0);
                if (null == e && null != t) {
                    t = M(t) ? t : b.values(t);
                    for (var a = 0, l = t.length; a < l; a++)
                        i = t[a], i > o && (o = i)
                } else
                    e = _(e, n), b.each(t, function(t, n, i) {
                        r = e(t, n, i), (r > s || r === -(1 / 0) && o === -(1 / 0)) && (o = t, s = r)
                    });
                return o
            }, b.min = function(t, e, n) {
                var i,
                    r,
                    o = 1 / 0,
                    s = 1 / 0;
                if (null == e && null != t) {
                    t = M(t) ? t : b.values(t);
                    for (var a = 0, l = t.length; a < l; a++)
                        i = t[a], i < o && (o = i)
                } else
                    e = _(e, n), b.each(t, function(t, n, i) {
                        r = e(t, n, i), (r < s || r === 1 / 0 && o === 1 / 0) && (o = t, s = r)
                    });
                return o
            }, b.shuffle = function(t) {
                for (var e, n = M(t) ? t : b.values(t), i = n.length, r = Array(i), o = 0; o < i; o++)
                    e = b.random(0, o), e !== o && (r[o] = r[e]), r[e] = n[o];
                return r
            }, b.sample = function(t, e, n) {
                return null == e || n ? (M(t) || (t = b.values(t)), t[b.random(t.length - 1)]) : b.shuffle(t).slice(0, Math.max(0, e))
            }, b.sortBy = function(t, e, n) {
                return e = _(e, n), b.pluck(b.map(t, function(t, n, i) {
                    return {
                        value: t,
                        index: n,
                        criteria: e(t, n, i)
                    }
                }).sort(function(t, e) {
                    var n = t.criteria,
                        i = e.criteria;
                    if (n !== i) {
                        if (n > i || void 0 === n)
                            return 1;
                        if (n < i || void 0 === i)
                            return -1
                    }
                    return t.index - e.index
                }), "value")
            };
            var N = function(t) {
                return function(e, n, i) {
                    var r = {};
                    return n = _(n, i), b.each(e, function(i, o) {
                        var s = n(i, o, e);
                        t(r, i, s)
                    }), r
                }
            };
            b.groupBy = N(function(t, e, n) {
                b.has(t, n) ? t[n].push(e) : t[n] = [e]
            }), b.indexBy = N(function(t, e, n) {
                t[n] = e
            }), b.countBy = N(function(t, e, n) {
                b.has(t, n) ? t[n]++ : t[n] = 1
            }), b.toArray = function(t) {
                return t ? b.isArray(t) ? d.call(t) : M(t) ? b.map(t, b.identity) : b.values(t) : []
            }, b.size = function(t) {
                return null == t ? 0 : M(t) ? t.length : b.keys(t).length
            }, b.partition = function(t, e, n) {
                e = _(e, n);
                var i = [],
                    r = [];
                return b.each(t, function(t, n, o) {
                    (e(t, n, o) ? i : r).push(t)
                }), [i, r]
            }, b.first = b.head = b.take = function(t, e, n) {
                if (null != t)
                    return null == e || n ? t[0] : b.initial(t, t.length - e)
            }, b.initial = function(t, e, n) {
                return d.call(t, 0, Math.max(0, t.length - (null == e || n ? 1 : e)))
            }, b.last = function(t, e, n) {
                if (null != t)
                    return null == e || n ? t[t.length - 1] : b.rest(t, Math.max(0, t.length - e))
            }, b.rest = b.tail = b.drop = function(t, e, n) {
                return d.call(t, null == e || n ? 1 : e)
            }, b.compact = function(t) {
                return b.filter(t, b.identity)
            };
            var j = function(t, e, n, i) {
                for (var r = [], o = 0, s = i || 0, a = D(t); s < a; s++) {
                    var l = t[s];
                    if (M(l) && (b.isArray(l) || b.isArguments(l))) {
                        e || (l = j(l, e, n));
                        var u = 0,
                            c = l.length;
                        for (r.length += c; u < c;)
                            r[o++] = l[u++]
                    } else
                        n || (r[o++] = l)
                }
                return r
            };
            b.flatten = function(t, e) {
                return j(t, e, !1)
            }, b.without = function(t) {
                return b.difference(t, d.call(arguments, 1))
            }, b.uniq = b.unique = function(t, e, n, i) {
                b.isBoolean(e) || (i = n, n = e, e = !1), null != n && (n = _(n, i));
                for (var r = [], o = [], s = 0, a = D(t); s < a; s++) {
                    var l = t[s],
                        u = n ? n(l, s, t) : l;
                    e ? (s && o === u || r.push(l), o = u) : n ? b.contains(o, u) || (o.push(u), r.push(l)) : b.contains(r, l) || r.push(l)
                }
                return r
            }, b.union = function() {
                return b.uniq(j(arguments, !0, !0))
            }, b.intersection = function(t) {
                for (var e = [], n = arguments.length, i = 0, r = D(t); i < r; i++) {
                    var o = t[i];
                    if (!b.contains(e, o)) {
                        for (var s = 1; s < n && b.contains(arguments[s], o); s++)
                            ;
                        s === n && e.push(o)
                    }
                }
                return e
            }, b.difference = function(t) {
                var e = j(arguments, !0, !0, 1);
                return b.filter(t, function(t) {
                    return !b.contains(e, t)
                })
            }, b.zip = function() {
                return b.unzip(arguments)
            }, b.unzip = function(t) {
                for (var e = t && b.max(t, D).length || 0, n = Array(e), i = 0; i < e; i++)
                    n[i] = b.pluck(t, i);
                return n
            }, b.object = function(t, e) {
                for (var n = {}, i = 0, r = D(t); i < r; i++)
                    e ? n[t[i]] = e[i] : n[t[i][0]] = t[i][1];
                return n
            }, b.findIndex = i(1), b.findLastIndex = i(-1), b.sortedIndex = function(t, e, n, i) {
                n = _(n, i, 1);
                for (var r = n(e), o = 0, s = D(t); o < s;) {
                    var a = Math.floor((o + s) / 2);
                    n(t[a]) < r ? o = a + 1 : s = a
                }
                return o
            }, b.indexOf = r(1, b.findIndex, b.sortedIndex), b.lastIndexOf = r(-1, b.findLastIndex), b.range = function(t, e, n) {
                null == e && (e = t || 0, t = 0), n = n || 1;
                for (var i = Math.max(Math.ceil((e - t) / n), 0), r = Array(i), o = 0; o < i; o++, t += n)
                    r[o] = t;
                return r
            };
            var E = function(t, e, n, i, r) {
                if (!(i instanceof e))
                    return t.apply(n, r);
                var o = S(t.prototype),
                    s = t.apply(o, r);
                return b.isObject(s) ? s : o
            };
            b.bind = function(t, e) {
                if (y && t.bind === y)
                    return y.apply(t, d.call(arguments, 1));
                if (!b.isFunction(t))
                    throw new TypeError("Bind must be called on a function");
                var n = d.call(arguments, 2),
                    i = function() {
                        return E(t, i, e, this, n.concat(d.call(arguments)))
                    };
                return i
            }, b.partial = function(t) {
                var e = d.call(arguments, 1),
                    n = function() {
                        for (var i = 0, r = e.length, o = Array(r), s = 0; s < r; s++)
                            o[s] = e[s] === b ? arguments[i++] : e[s];
                        for (; i < arguments.length;)
                            o.push(arguments[i++]);
                        return E(t, n, this, this, o)
                    };
                return n
            }, b.bindAll = function(t) {
                var e,
                    n,
                    i = arguments.length;
                if (i <= 1)
                    throw new Error("bindAll must be passed function names");
                for (e = 1; e < i; e++)
                    n = arguments[e], t[n] = b.bind(t[n], t);
                return t
            }, b.memoize = function(t, e) {
                var n = function(i) {
                    var r = n.cache,
                        o = "" + (e ? e.apply(this, arguments) : i);
                    return b.has(r, o) || (r[o] = t.apply(this, arguments)), r[o]
                };
                return n.cache = {}, n
            }, b.delay = function(t, e) {
                var n = d.call(arguments, 2);
                return setTimeout(function() {
                    return t.apply(null, n)
                }, e)
            }, b.defer = b.partial(b.delay, b, 1), b.throttle = function(t, e, n) {
                var i,
                    r,
                    o,
                    s = null,
                    a = 0;
                n || (n = {});
                var l = function() {
                    a = n.leading === !1 ? 0 : b.now(), s = null, o = t.apply(i, r), s || (i = r = null)
                };
                return function() {
                    var u = b.now();
                    a || n.leading !== !1 || (a = u);
                    var c = e - (u - a);
                    return i = this, r = arguments, c <= 0 || c > e ? (s && (clearTimeout(s), s = null), a = u, o = t.apply(i, r), s || (i = r = null)) : s || n.trailing === !1 || (s = setTimeout(l, c)), o
                }
            }, b.debounce = function(t, e, n) {
                var i,
                    r,
                    o,
                    s,
                    a,
                    l = function() {
                        var u = b.now() - s;
                        u < e && u >= 0 ? i = setTimeout(l, e - u) : (i = null, n || (a = t.apply(o, r), i || (o = r = null)))
                    };
                return function() {
                    o = this, r = arguments, s = b.now();
                    var u = n && !i;
                    return i || (i = setTimeout(l, e)), u && (a = t.apply(o, r), o = r = null), a
                }
            }, b.wrap = function(t, e) {
                return b.partial(e, t)
            }, b.negate = function(t) {
                return function() {
                    return !t.apply(this, arguments)
                }
            }, b.compose = function() {
                var t = arguments,
                    e = t.length - 1;
                return function() {
                    for (var n = e, i = t[e].apply(this, arguments); n--;)
                        i = t[n].call(this, i);
                    return i
                }
            }, b.after = function(t, e) {
                return function() {
                    if (--t < 1)
                        return e.apply(this, arguments)
                }
            }, b.before = function(t, e) {
                var n;
                return function() {
                    return --t > 0 && (n = e.apply(this, arguments)), t <= 1 && (e = null), n
                }
            }, b.once = b.partial(b.before, 2);
            var O = !{
                    toString: null
                }.propertyIsEnumerable("toString"),
                A = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
            b.keys = function(t) {
                if (!b.isObject(t))
                    return [];
                if (g)
                    return g(t);
                var e = [];
                for (var n in t)
                    b.has(t, n) && e.push(n);
                return O && o(t, e), e
            }, b.allKeys = function(t) {
                if (!b.isObject(t))
                    return [];
                var e = [];
                for (var n in t)
                    e.push(n);
                return O && o(t, e), e
            }, b.values = function(t) {
                for (var e = b.keys(t), n = e.length, i = Array(n), r = 0; r < n; r++)
                    i[r] = t[e[r]];
                return i
            }, b.mapObject = function(t, e, n) {
                e = _(e, n);
                for (var i, r = b.keys(t), o = r.length, s = {}, a = 0; a < o; a++)
                    i = r[a], s[i] = e(t[i], i, t);
                return s
            }, b.pairs = function(t) {
                for (var e = b.keys(t), n = e.length, i = Array(n), r = 0; r < n; r++)
                    i[r] = [e[r], t[e[r]]];
                return i
            }, b.invert = function(t) {
                for (var e = {}, n = b.keys(t), i = 0, r = n.length; i < r; i++)
                    e[t[n[i]]] = n[i];
                return e
            }, b.functions = b.methods = function(t) {
                var e = [];
                for (var n in t)
                    b.isFunction(t[n]) && e.push(n);
                return e.sort()
            }, b.extend = k(b.allKeys), b.extendOwn = b.assign = k(b.keys), b.findKey = function(t, e, n) {
                e = _(e, n);
                for (var i, r = b.keys(t), o = 0, s = r.length; o < s; o++)
                    if (i = r[o], e(t[i], i, t))
                        return i
            }, b.pick = function(t, e, n) {
                var i,
                    r,
                    o = {},
                    s = t;
                if (null == s)
                    return o;
                b.isFunction(e) ? (r = b.allKeys(s), i = x(e, n)) : (r = j(arguments, !1, !1, 1), i = function(t, e, n) {
                    return e in n
                }, s = Object(s));
                for (var a = 0, l = r.length; a < l; a++) {
                    var u = r[a],
                        c = s[u];
                    i(c, u, s) && (o[u] = c)
                }
                return o
            }, b.omit = function(t, e, n) {
                if (b.isFunction(e))
                    e = b.negate(e);
                else {
                    var i = b.map(j(arguments, !1, !1, 1), String);
                    e = function(t, e) {
                        return !b.contains(i, e)
                    }
                }
                return b.pick(t, e, n)
            }, b.defaults = k(b.allKeys, !0), b.create = function(t, e) {
                var n = S(t);
                return e && b.extendOwn(n, e), n
            }, b.clone = function(t) {
                return b.isObject(t) ? b.isArray(t) ? t.slice() : b.extend({}, t) : t
            }, b.tap = function(t, e) {
                return e(t), t
            }, b.isMatch = function(t, e) {
                var n = b.keys(e),
                    i = n.length;
                if (null == t)
                    return !i;
                for (var r = Object(t), o = 0; o < i; o++) {
                    var s = n[o];
                    if (e[s] !== r[s] || !(s in r))
                        return !1
                }
                return !0
            };
            var P = function(t, e, n, i) {
                if (t === e)
                    return 0 !== t || 1 / t === 1 / e;
                if (null == t || null == e)
                    return t === e;
                t instanceof b && (t = t._wrapped), e instanceof b && (e = e._wrapped);
                var r = f.call(t);
                if (r !== f.call(e))
                    return !1;
                switch (r) {
                case "[object RegExp]":
                case "[object String]":
                    return "" + t == "" + e;
                case "[object Number]":
                    return +t !== +t ? +e !== +e : 0 === +t ? 1 / +t === 1 / e : +t === +e;
                case "[object Date]":
                case "[object Boolean]":
                    return +t === +e
                }
                var o = "[object Array]" === r;
                if (!o) {
                    if ("object" != typeof t || "object" != typeof e)
                        return !1;
                    var s = t.constructor,
                        a = e.constructor;
                    if (s !== a && !(b.isFunction(s) && s instanceof s && b.isFunction(a) && a instanceof a) && "constructor" in t && "constructor" in e)
                        return !1
                }
                n = n || [], i = i || [];
                for (var l = n.length; l--;)
                    if (n[l] === t)
                        return i[l] === e;
                if (n.push(t), i.push(e), o) {
                    if (l = t.length, l !== e.length)
                        return !1;
                    for (; l--;)
                        if (!P(t[l], e[l], n, i))
                            return !1
                } else {
                    var u,
                        c = b.keys(t);
                    if (l = c.length, b.keys(e).length !== l)
                        return !1;
                    for (; l--;)
                        if (u = c[l], !b.has(e, u) || !P(t[u], e[u], n, i))
                            return !1
                }
                return n.pop(), i.pop(), !0
            };
            b.isEqual = function(t, e) {
                return P(t, e)
            }, b.isEmpty = function(t) {
                return null == t || (M(t) && (b.isArray(t) || b.isString(t) || b.isArguments(t)) ? 0 === t.length : 0 === b.keys(t).length)
            }, b.isElement = function(t) {
                return !(!t || 1 !== t.nodeType)
            }, b.isArray = m || function(t) {
                return "[object Array]" === f.call(t)
            }, b.isObject = function(t) {
                var e = typeof t;
                return "function" === e || "object" === e && !!t
            }, b.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(t) {
                b["is" + t] = function(e) {
                    return f.call(e) === "[object " + t + "]"
                }
            }), b.isArguments(arguments) || (b.isArguments = function(t) {
                return b.has(t, "callee")
            }), "function" != typeof /./ && "object" != typeof Int8Array && (b.isFunction = function(t) {
                return "function" == typeof t || !1
            }), b.isFinite = function(t) {
                return isFinite(t) && !isNaN(parseFloat(t))
            }, b.isNaN = function(t) {
                return b.isNumber(t) && t !== +t
            }, b.isBoolean = function(t) {
                return t === !0 || t === !1 || "[object Boolean]" === f.call(t)
            }, b.isNull = function(t) {
                return null === t
            }, b.isUndefined = function(t) {
                return void 0 === t
            }, b.has = function(t, e) {
                return null != t && p.call(t, e)
            }, b.noConflict = function() {
                return s._ = a, this
            }, b.identity = function(t) {
                return t
            }, b.constant = function(t) {
                return function() {
                    return t
                }
            }, b.noop = function() {}, b.property = T, b.propertyOf = function(t) {
                return null == t ? function() {} : function(e) {
                    return t[e]
                }
            }, b.matcher = b.matches = function(t) {
                return t = b.extendOwn({}, t), function(e) {
                    return b.isMatch(e, t)
                }
            }, b.times = function(t, e, n) {
                var i = Array(Math.max(0, t));
                e = x(e, n, 1);
                for (var r = 0; r < t; r++)
                    i[r] = e(r);
                return i
            }, b.random = function(t, e) {
                return null == e && (e = t, t = 0), t + Math.floor(Math.random() * (e - t + 1))
            }, b.now = Date.now || function() {
                return (new Date).getTime()
            };
            var L = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#x27;",
                    "`": "&#x60;"
                },
                Y = b.invert(L),
                F = function(t) {
                    var e = function(e) {
                            return t[e]
                        },
                        n = "(?:" + b.keys(t).join("|") + ")",
                        i = RegExp(n),
                        r = RegExp(n, "g");
                    return function(t) {
                        return t = null == t ? "" : "" + t, i.test(t) ? t.replace(r, e) : t
                    }
                };
            b.escape = F(L), b.unescape = F(Y), b.result = function(t, e, n) {
                var i = null == t ? void 0 : t[e];
                return void 0 === i && (i = n), b.isFunction(i) ? i.call(t) : i
            };
            var R = 0;
            b.uniqueId = function(t) {
                var e = ++R + "";
                return t ? t + e : e
            }, b.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            };
            var H = /(.)^/,
                W = {
                    "'": "'",
                    "\\": "\\",
                    "\r": "r",
                    "\n": "n",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                },
                q = /\\|'|\r|\n|\u2028|\u2029/g,
                I = function(t) {
                    return "\\" + W[t]
                };
            b.template = function(t, e, n) {
                !e && n && (e = n), e = b.defaults({}, e, b.templateSettings);
                var i = RegExp([(e.escape || H).source, (e.interpolate || H).source, (e.evaluate || H).source].join("|") + "|$", "g"),
                    r = 0,
                    o = "__p+='";
                t.replace(i, function(e, n, i, s, a) {
                    return o += t.slice(r, a).replace(q, I), r = a + e.length, n ? o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : i ? o += "'+\n((__t=(" + i + "))==null?'':__t)+\n'" : s && (o += "';\n" + s + "\n__p+='"), e
                }), o += "';\n", e.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
                try {
                    var s = new Function(e.variable || "obj", "_", o)
                } catch (t) {
                    throw t.source = o, t
                }
                var a = function(t) {
                        return s.call(this, t, b)
                    },
                    l = e.variable || "obj";
                return a.source = "function(" + l + "){\n" + o + "}", a
            }, b.chain = function(t) {
                var e = b(t);
                return e._chain = !0, e
            };
            var B = function(t, e) {
                return t._chain ? b(e).chain() : e
            };
            b.mixin = function(t) {
                b.each(b.functions(t), function(e) {
                    var n = b[e] = t[e];
                    b.prototype[e] = function() {
                        var t = [this._wrapped];
                        return h.apply(t, arguments), B(this, n.apply(b, t))
                    }
                })
            }, b.mixin(b), b.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(t) {
                var e = l[t];
                b.prototype[t] = function() {
                    var n = this._wrapped;
                    return e.apply(n, arguments), "shift" !== t && "splice" !== t || 0 !== n.length || delete n[0], B(this, n)
                }
            }), b.each(["concat", "join", "slice"], function(t) {
                var e = l[t];
                b.prototype[t] = function() {
                    return B(this, e.apply(this._wrapped, arguments))
                }
            }), b.prototype.value = function() {
                return this._wrapped
            }, b.prototype.valueOf = b.prototype.toJSON = b.prototype.value, b.prototype.toString = function() {
                return "" + this._wrapped
            }, "function" == typeof define && define.amd && define("underscore", [], function() {
                return b
            })
        }).call(this)
    }, {}],
    10: [function(t, e, n) {
        function i(t, e, n) {
            var i = r.parse(t, !0);
            return i.query.utm_source = window.location.hostname, i.query.utm_medium = e, i.query.utm_campaign = n, delete i.search, r.format(i)
        }
        var r = t("url");
        e.exports = {
            setMediumCampaign: i
        }
    }, {
        url: 6
    }],
    11: [function(t, e, n) {
        e.exports = {
            id: 28,
            stamp: 1508778700264
        }
    }, {}],
    12: [function(t, e, n) {
        (function(n) {
            function i(t) {
                p.log("Create ChartWidget"), h.call(this, t), this.styles = !1, this.blockchain = {
                    supply: NaN,
                    blocks: NaN
                }, this.chart = {
                    canvas: {
                        c: null,
                        i: null
                    },
                    w: NaN,
                    h: NaN,
                    max: 0,
                    min: 1 / 0,
                    tpad: 10,
                    fpad: 0,
                    scale: 1,
                    dx: 1
                }, this.anim = null, this.data = [], this.last = {
                    price: NaN,
                    time: NaN
                }, this.sl_handle = window.setTimeout(u.bind(this.stylesLoaded, this), 2500);
                var e = g + (this.cash ? "cash/" : "") + "history?unix=1&pretty=0",
                    n = this.cash ? "cash:usd" : "price:usd",
                    i = m + (this.cash ? "cash-blockchain.json" : "blockchain.json");
                d(e, 36e5, u.bind(this.processChart, this)), f.register(n, this.processSpot.bind(this)), f.subscribe(n), f.subscribe("source:widget-chart"), d(i, 36e5, this.processBlockchain.bind(this))
            }
            function r(t, e, n) {
                t.moveTo((0 | e) + .5, (0 | n) + .5)
            }
            function o(t, e, n) {
                t.lineTo((0 | e) + .5, (0 | n) + .5)
            }
            function s(t, e, n, i) {
                t.arc((0 | e) + .5, (0 | n) + .5, i, 0, 2 * Math.PI)
            }
            function a(t) {
                var e = {
                    x: 0,
                    y: 0
                };
                if (t.offsetX)
                    e.x = t.offsetX, e.y = t.offsetY;
                else if (t.pageX && t.target) {
                    var n = l(t.target).offset();
                    e.x = t.pageX - n.left, e.y = t.pageY - n.top
                }
                return e
            }
            var l = t("jQuery"),
                u = t("underscore"),
                c = t("moment"),
                h = t("./widget"),
                d = t("./feed-poller"),
                f = t("./stream"),
                p = t("./log"),
                m = n.env.BASE,
                g = n.env.BCX,
                y = t("./analytics"),
                v = t("./util");
            i.prototype = Object.create(h.prototype), i.prototype.constructor = i, i.prototype.stylesLoaded = function() {
                this.styles = !0, window.clearTimeout(this.sl_handle), this.build(), this.el.addClass(this.postBuildClasses.join(" ")), this.doResize(), this.updateStats()
            }, i.prototype.build = function() {
                this.el.html('    <div class="btcwdgt-header">      <h2 title="Bitcoin ' + (this.cash ? "Cash " : "") + 'price">        <span>$</span><span>&mdash;.&ndash;</span>      </h2>      <h4>' + (this.cash ? "BCC" : "BTC") + '/USD</h4>      <div class="stats">        <div>MktCap<span class="mkt-cap">&mdash;.&ndash;</span></div>        <div>High<span class="high">&mdash;.&ndash;</span></div>        <div>Low<span class="low">&mdash;.&ndash;</span></div>        <div>Supply<span class="supply">&mdash;.&ndash;</span></div>        <div>Blocks<span class="blocks">&mdash;</span></div>      </div>      <p class="changes">        <strong class="arrow"></strong><span class="pct">&mdash;.&ndash;%</span><span class="amt">$&mdash;.&ndash;</span>      </p>      <p class="date-wrap"><span class="date">&mdash;</span></p>    </div>    <div class="btcwdgt-body">      <canvas class="c"></canvas>      <canvas class="i"></canvas>    </div>    <div class="btcwdgt-footer">      <a href="https://www.bitcoin.com/widgets/" class="embed" title="Embed this widget">&lt;/&gt;</a>      <a href="https://www.bitcoin.com/" class="logo" title="Powered by bitcoin.com"><span>bitcoin.com</span></a>    </div>'), this.el.addClass("btcwdgt btcwdgt-headlines btcwdgt-chart"), this.campaign && l("a", this.el).each(function(t, e) {
                    var n = l(e).attr("href");
                    l(e).attr("href", y.setMediumCampaign(n, "widget", "Chart Widget"))
                }), this.chart.canvas.c = l("canvas.c", this.el)[0], this.chart.canvas.i = l("canvas.i", this.el)[0], l("canvas.i", this.el).on("mousemove", u.bind(this.onMouseMove, this)), this.el.on("mouseout", u.bind(this.clearInteract, this)), l(".btcwdgt-header p", this.el).on("mouseover", u.bind(this.clearInteract, this)), l(window).on("resize", u.bind(this.onResize, this))
            }, i.prototype.onResize = function() {
                window.requestAnimationFrame(u.bind(this.doResize, this))
            }, i.prototype.doResize = function() {
                if (this.styles) {
                    var t = l(this.el).innerWidth(),
                        e = 16 / 9,
                        n = t / e,
                        i = "width: " + t + "px !important;       height:" + n + "px !important";
                    l(".btcwdgt-body", this.el).attr("style", i), l("canvas", this.el).attr("style", i).css("width", t).css("height", n), this.chart.canvas.c.width = t * w, this.chart.canvas.c.height = n * w, this.chart.canvas.i.width = t * w, this.chart.canvas.i.height = n * w, this.chart.canvas.c.getContext("2d").scale(w, w), this.chart.canvas.i.getContext("2d").scale(w, w), this.chart.w = t, this.chart.h = n, this.calculate(), this.redraw();
                    var r = NaN;
                    isNaN(this.last.unix) ? this.data.length > 0 && (r = this.data[0][0]) : r = this.last.unix, isNaN(r) || (l(".date", this.el).html(c.unix(r).format("lll")), l(".date", this.el).width() > l(".date-wrap", this.el).width() && l(".date", this.el).html(c.unix(r).format("l")))
                }
            }, i.prototype.calculate = function() {
                this.chart.fpad = l(".btcwdgt-footer", this.el).height();
                var t = function(t) {
                    return t[1]
                };
                this.data.length > 0 && (this.chart.min = u.min(this.data, t)[1], this.chart.max = u.max(this.data, t)[1]), isNaN(this.last.price) || (this.chart.min = Math.min(this.chart.min, this.last.price), this.chart.max = Math.max(this.chart.max, this.last.price)), this.chart.scale = (this.chart.h - this.chart.fpad - this.chart.tpad) / (this.chart.max - this.chart.min), isNaN(this.last.price) ? this.chart.dx = this.chart.w / (this.data.length - 1) : this.chart.dx = this.chart.w / this.data.length
            }, i.prototype.redraw = function() {
                this.draw(this.chart.canvas.c.getContext("2d"))
            }, i.prototype.draw = function(t) {
                if (t.clearRect(0, 0, this.chart.w, this.chart.h), !(this.data.length <= 0)) {
                    for (var e = 12, n = 2, i = e + n + 1, s = 2, a = s * i, l = (this.chart.h - this.chart.fpad - this.chart.tpad) / a, u = (this.chart.max - this.chart.min) / l, h = Math.pow(10, Math.floor(Math.log10(u))), d = Math.floor(10 * u / h) / 10, f = [1, 1.25, 1.5, 2, 2.5, 5, 7.5, 10], p = h, m = 0; m < f.length; m++)
                        if (f[m] >= d) {
                            p = f[m] * h;
                            break
                        }
                    for (var g, y, v = [], w = [], b = Math.floor(this.chart.min / p) * p, x = b; x < this.chart.max; x += p)
                        y = this.priceToPxY(x), y < this.chart.h - this.chart.fpad && y > 0 && v.push(y), y + e + n < this.chart.h - this.chart.fpad - e && y + n > 0 && w.push([y + n, x]);
                    t.strokeStyle = this.colors.grid, t.beginPath();
                    for (var m = 0; m < v.length; m++)
                        r(t, 0, v[m]), o(t, this.chart.w, v[m]);
                    t.stroke(), t.font = "300 " + e + 'px "museo-sans-rounded", Helvetica, Arial, sans-serif', t.textAlign = "right", t.textBaseline = "bottom", t.strokeStyle = this.colors.labelStroke, t.fillStyle = this.colors.label, v = [];
                    for (var _ = this.chart.h - this.chart.fpad, m = 0; m < this.data.length; m++) {
                        var k = c.unix(this.data[m][0]).utc();
                        if (1 == k.get("date")) {
                            var S = "";
                            S = 0 == k.get("month") ? k.get("year") : k.format("MMM");
                            var T = isNaN(this.last.price) ? m : m + 1;
                            g = this.barToPxX(T), v.push(g), t.strokeText(S, g - 4, _), t.fillText(S, g - 4, _)
                        }
                    }
                    t.strokeStyle = this.colors.grid, t.beginPath();
                    for (var m = 0; m < v.length; m++)
                        r(t, v[m], 0), o(t, v[m], this.chart.h - this.chart.fpad);
                    t.stroke(), t.textAlign = "right", t.textBaseline = "top";
                    var C = t.measureText(this.chart.max.toFixed(2)).width + 3;
                    if (t.beginPath(), isNaN(this.last.price)) {
                        t.moveTo(this.barToPxX(0), this.priceToPxY(this.data[0][1]));
                        for (var m = 1; m < this.data.length; m++)
                            t.lineTo(this.barToPxX(m), this.priceToPxY(this.data[m][1]))
                    } else {
                        t.moveTo(this.barToPxX(0), this.priceToPxY(this.last.price));
                        for (var m = 0; m < this.data.length; m++)
                            t.lineTo(this.barToPxX(m + 1), this.priceToPxY(this.data[m][1]))
                    }
                    if (t.lineTo(0, this.chart.h), t.lineTo(this.chart.w, this.chart.h), isNaN(this.last.price) ? t.lineTo(this.barToPxX(0), this.priceToPxY(this.data[0][1])) : t.lineTo(this.barToPxX(0), this.priceToPxY(this.last.price)), t.fillStyle = this.colors.bg, t.fill(), t.beginPath(), isNaN(this.last.price)) {
                        t.moveTo(this.barToPxX(0), this.priceToPxY(this.data[0][1]));
                        for (var m = 1; m < this.data.length; m++)
                            t.lineTo(this.barToPxX(m), this.priceToPxY(this.data[m][1]))
                    } else {
                        t.moveTo(this.barToPxX(0), this.priceToPxY(this.last.price));
                        for (var m = 0; m < this.data.length; m++)
                            t.lineTo(this.barToPxX(m + 1), this.priceToPxY(this.data[m][1]))
                    }
                    t.strokeStyle = this.colors.fg, t.stroke(), t.strokeStyle = this.colors.labelStroke, t.fillStyle = this.colors.label;
                    for (var m = 0; m < w.length; m++) {
                        var S = w[m][1].toFixed(2);
                        t.strokeText(S, C + e, w[m][0]), t.fillText(S, C + e, w[m][0])
                    }
                    var x = this.last.price;
                    isNaN(x) && (x = this.data[0][1]), y = this.priceToPxY(x), t.beginPath();
                    var D = e + 4,
                        M = C + e + 2;
                    t.moveTo((e / 2 | 0) + .5, (y - D / 2 | 0) + .5), t.lineTo(M, (y - D / 2 | 0) + .5), t.lineTo((M + D / 2 | 0) + .5, y), t.lineTo(M, (y + D / 2 | 0) + .5), t.lineTo((e / 2 | 0) + .5, (y + D / 2 | 0) + .5), t.lineTo((e / 2 | 0) + .5, (y - D / 2 | 0) + .5), t.fillStyle = this.colors.chartbg, t.fill(), t.strokeStyle = this.colors.fg, t.stroke(), t.fillStyle = this.colors.label, t.textAlign = "right", t.textBaseline = "middle", t.fillText(x.toFixed(2), C + e, y)
                }
            }, i.prototype.onMouseMove = function(t) {
                var e = this;
                this.anim = window.requestAnimationFrame(function(t) {
                    return function() {
                        e.interact(t)
                    }
                }(t))
            }, i.prototype.clearInteract = function(t) {
                try {
                    window.cancelAnimationFrame(this.anim)
                } catch (t) {}
                var e = this.chart.canvas.i.getContext("2d");
                e.clearRect(0, 0, this.chart.w, this.chart.h);
                var n = NaN,
                    i = NaN;
                this.data.length > 0 && (i = this.data[0][0], n = this.data[0][1]), isNaN(this.last.price) || (i = this.last.time, n = this.last.price), isNaN(n) || (l("h2 span:last-child", this.el).html(n.toFixed(2)), l(".date", this.el).html(c.unix(i).format("lll")), l(".date", this.el).width() > l(".date-wrap", this.el).width() && l(".date", this.el).html(c.unix(i).format("l")))
            }, i.prototype.interact = function(t) {
                var e = a(t),
                    n = this.chart.canvas.i.getContext("2d"),
                    i = Math.round((this.chart.w - e.x) / this.chart.dx);
                if (n.clearRect(0, 0, this.chart.w, this.chart.h), !(i < 0 || i >= (isNaN(this.last.price) ? this.data.length : this.data.length + 1))) {
                    var u = 5,
                        h = 6,
                        d = NaN,
                        f = NaN;
                    isNaN(this.last.price) ? (f = this.data[i][0], d = this.data[i][1]) : 0 == i ? (f = this.last.time, d = this.last.price) : (f = this.data[i - 1][0], d = this.data[i - 1][1]), n.fillStyle = this.colors.fg;
                    var p = this.barToPxX(i),
                        m = this.priceToPxY(d);
                    n.beginPath(), p > u + h + 1 && (r(n, 0, m - u), o(n, u, m), o(n, 0, m + u), o(n, 0, m - u)), p < this.chart.w - (u + h + 1) && (r(n, this.chart.w, m - u), o(n, this.chart.w - u, m), o(n, this.chart.w, m + u), o(n, this.chart.w, m - u)), n.fill(), n.strokeStyle = this.colors.crosshair, n.lineWidth = 1, n.beginPath(), r(n, p, 0), o(n, p, m - h - 3), r(n, p, m + h + 3), o(n, p, this.chart.h), n.stroke(), n.strokeStyle = this.colors.label, n.lineWidth = 2, n.beginPath(), r(n, p + h, m), s(n, p, m, h), n.stroke(), l("h2 span:last-child", this.el).html(d.toFixed(2));
                    var g = l(".date", this.el);
                    g.html(c.unix(f).format("lll")), g.width() > l(".date-wrap", this.el).width() && g.html(c.unix(f).format("l"))
                }
            }, i.prototype.priceToPxY = function(t) {
                return this.chart.tpad + (this.chart.max - t) * this.chart.scale
            }, i.prototype.barToPxX = function(t) {
                return this.chart.w - this.chart.dx * t
            }, i.prototype.updateStats = function() {
                if (this.styles) {
                    var t = NaN,
                        e = NaN;
                    if (this.data.length > 0 && (e = this.data[0][0], t = this.data[0][1]), isNaN(this.last.price) || (e = this.last.time, t = this.last.price), !isNaN(t) && !isNaN(e)) {
                        if (l("h2 span:last-child", this.el).html(t.toFixed(2)), l(".date", this.el).html(c.unix(e).format("lll")), l(".date", this.el).width() > l(".date-wrap", this.el).width() && l(".date", this.el).html(c.unix(e).format("l")), !isNaN(this.blockchain.supply)) {
                            var n = this.blockchain.supply * t;
                            l(".mkt-cap", this.el).html("$" + v.compactDisp(n))
                        }
                        var i = 100 * (t / this.data[0][1] - 1),
                            r = t - this.data[0][1];
                        l(".changes .pct", this.el).html(Math.abs(i).toFixed(1) + "%"), l(".changes .amt", this.el).html("$" + Math.abs(r).toFixed(2)), l(".arrow", this.el).removeClass("up down"), l(".changes", this.el).removeClass("up down"), r > 0 ? (l(".arrow", this.el).addClass("up"), l(".changes", this.el).addClass("up")) : r < 0 && (l(".arrow", this.el).addClass("down"), l(".changes", this.el).addClass("down"));
                        for (var o = t, s = t, a = 0; a < this.data.length; a++) {
                            var u = this.data[a][1];
                            u > o && (o = u), u < s && (s = u)
                        }
                        l(".high", this.el).html("$" + o.toFixed(2)), l(".low", this.el).html("$" + s.toFixed(2))
                    }
                    isNaN(this.blockchain.supply) || l(".supply", this.el).html(v.compactDisp(this.blockchain.supply)), isNaN(this.blockchain.blocks) || l(".blocks", this.el).text(this.blockchain.blocks)
                }
            }, i.prototype.processBlockchain = function(t) {
                this.blockchain.supply = t.supply, this.blockchain.blocks = t.blocks, this.updateStats()
            }, i.prototype.processChart = function(t) {
                this.data = [];
                for (var e = 0; e < t.length; e++)
                    this.data.push([t[e][0], t[e][1] / 100]);
                this.doResize(), this.updateStats()
            }, i.prototype.processSpot = function(t) {
                if (t.price) {
                    var e = {
                        price: t.price / 100,
                        stamp: t.stamp
                    };
                    this.last.price = e.price, this.last.time = e.stamp, this.doResize(), this.updateStats()
                }
            };
            var w = 1;
            !function() {
                var t = document.createElement("canvas").getContext("2d"),
                    e = window.devicePixelRatio || 1,
                    n = t.webkitBackingStorePixelRatio || t.mozBackingStorePixelRatio || t.msBackingStorePixelRatio || t.oBackingStorePixelRatio || t.backingStorePixelRatio || 1;
                w = e / n
            }(), function() {
                var t = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
                window.requestAnimationFrame = "undefined" != typeof t ? t : function(t) {
                    t()
                }
            }(), e.exports = i
        }).call(this, t("_process"))
    }, {
        "./analytics": 10,
        "./feed-poller": 15,
        "./log": 17,
        "./stream": 25,
        "./util": 26,
        "./widget": 27,
        _process: 1,
        jQuery: 7,
        moment: 8,
        underscore: 9
    }],
    13: [function(t, e, n) {
        e.exports = {
            default: {
                fg: "#f9b016",
                bg: "rgba(0, 0, 0, 0.15)",
                chartbg: "#3c3c3c",
                grid: "rgba(255,255,255,0.05)",
                label: "#ccc",
                labelStroke: "#191919",
                crosshair: "rgba(249, 176, 22, 0.25)"
            },
            light: {
                fg: "#f9b016",
                bg: "rgba(249, 176, 22, 0.15)",
                chartbg: "#fff",
                grid: "rgba(0, 0, 0, 0.05)",
                label: "#3c3c3c",
                labelStroke: "#fff",
                crosshair: "rgba(0,0,0,0.25)"
            }
        }
    }, {}],
    14: [function(t, e, n) {
        function i(t) {
            return r.indexOf(t.toLowerCase()) >= 0
        }
        var r = "btc,usd,eur,gbp,jpy,cad,aud,cny,chf,sek,nzd,krw,aed,afn,all,amd,ang,aoa,ars,awg,azn,bam,bbd,bdt,bgn,bhd,bif,bmd,bnd,bob,brl,bsd,btn,bwp,byr,bzd,cdf,clf,clp,cop,crc,cup,cve,czk,djf,dkk,dop,dzd,eek,egp,etb,fjd,fkp,gel,ghs,gip,gmd,gnf,gtq,gyd,hkd,hnl,hrk,htg,huf,idr,ils,inr,iqd,irr,isk,jep,jmd,jod,kes,kgs,khr,kmf,kpw,kwd,kyd,kzt,lak,lbp,lkr,lrd,lsl,ltl,lvl,lyd,mad,mdl,mga,mkd,mmk,mnt,mop,mro,mur,mvr,mwk,mxn,myr,mzn,nad,ngn,nio,nok,npr,omr,pab,pen,pgk,php,pkr,pln,pyg,qar,ron,rsd,rub,rwf,sar,sbd,scr,sdg,sgd,shp,sll,sos,srd,std,svc,syp,szl,thb,tjs,tmt,tnd,top,try,ttd,twd,tzs,uah,ugx,uyu,uzs,vef,vnd,vuv,wst,xaf,xag,xau,xcd,xof,xpf,yer,zar,zmw,zwl";
        e.exports = {
            CURS: r,
            available: i
        }
    }, {}],
    15: [function(t, e, n) {
        function i(t, e, n) {
            this.url = t, this.period = e, this.cb = [], this.addCallback(n), a.log('Setup FeedPoller. Grab "' + this.url + '" every ' + (this.period / 1e3).toFixed(1) + "s"), this.startPolling()
        }
        function r(t, e, n) {
            l[t] ? l[t].addCallback(n) : l[t] = new i(t, e, n)
        }
        var o = t("jQuery"),
            s = t("underscore"),
            a = t("./log"),
            l = {};
        i.prototype.addCallback = function(t) {
            "function" == typeof t && this.cb.push(t)
        }, i.prototype.startPolling = function() {
            this.poll(), setInterval(s.bind(this.poll, this), this.period)
        }, i.prototype.poll = function() {
            a.log('Load resource "' + this.url + '"');
            var t = Date.now();
            o.ajax({
                url: this.url,
                dataType: "json",
                context: this
            }).done(function(e, n, i) {
                a.log("Done. " + (Date.now() - t) + "ms"), s.each(this.cb, function(t) {
                    try {
                        t(e)
                    } catch (t) {}
                })
            })
        }, e.exports = r
    }, {
        "./log": 17,
        jQuery: 7,
        underscore: 9
    }],
    16: [function(t, e, n) {
        (function(n) {
            function i(t) {
                s.call(this, t), l.log("Create ForumWidget"), this.build(), this.el.addClass(this.postBuildClasses.join(" ")), a(u + "forum.json", 6e5, o.bind(this.processFeed, this))
            }
            var r = t("jQuery"),
                o = t("underscore"),
                s = t("./widget"),
                a = t("./feed-poller"),
                l = t("./log"),
                u = n.env.BASE,
                c = t("./analytics");
            i.prototype = Object.create(s.prototype), i.prototype.constructor = i, i.prototype.build = function() {
                this.el.html('    <div class="btcwdgt-header">      <h4><a href="https://forum.bitcoin.com/">Active Bitcoin Forum Topics</a></h4>    </div>    <div class="btcwdgt-body">      <ul></ul>    </div>    <div class="btcwdgt-footer">      <a href="https://www.bitcoin.com/widgets/" class="embed" title="Embed this widget">&lt;/&gt;</a>      <a href="https://www.bitcoin.com/" class="logo" title="Powered by bitcoin.com"><span>bitcoin.com</span></a>    </div>'), this.el.addClass("btcwdgt btcwdgt-headlines"), this.campaign && r("a", this.el).each(function(t, e) {
                    var n = r(e).attr("href");
                    r(e).attr("href", c.setMediumCampaign(n, "widget", "Forum Widget"))
                })
            }, i.prototype.processFeed = function(t) {
                for (var e = [], n = 0, i = 0; i < t.length && i != this.rows; i++) {
                    var o = t[i];
                    e[n++] = "<li>", e[n++] = '<a href="', e[n++] = this.campaign ? c.setMediumCampaign(o.url, "widget", "Forum Widget") : o.url, e[n++] = '" title="', e[n++] = o.title, e[n++] = '">', e[n++] = o.title, e[n++] = "</a>", e[n++] = "</li>"
                }
                r("ul", this.el).html(e.join(""))
            }, e.exports = i
        }).call(this, t("_process"))
    }, {
        "./analytics": 10,
        "./feed-poller": 15,
        "./log": 17,
        "./widget": 27,
        _process: 1,
        jQuery: 7,
        underscore: 9
    }],
    17: [function(t, e, n) {
        function i(t, e, n) {
            try {
                e(n ? JSON.stringify(t, null, 2) : "Bitcoin Widgets: " + t)
            } catch (t) {}
        }
        e.exports = {
            log: function(t, e) {
                i(t, console.log, e)
            },
            data: function(t) {
                i(t, console.log, !0)
            },
            warn: function(t, e) {
                i(t, console.warn, e)
            },
            error: function(t, e) {
                i(t, console.error, e)
            }
        }
    }, {}],
    18: [function(t, e, n) {
        (function(e) {
            function n() {
                for (var t = 0; t < d.length; t++)
                    try {
                        d[t].stylesLoaded()
                    } catch (t) {}
            }
            function i(t) {
                r.log('Load style: "' + t + '"');
                var e = document.createElement("link");
                e.rel = "stylesheet", e.type = "text/css", e.href = t, e.media = "all", e.onload = n, document.getElementsByTagName("head")[0].appendChild(e)
            }
            var r = t("./log"),
                o = t("./forum-posts"),
                s = t("./news-stories"),
                a = t("./news-ticker"),
                l = t("./price"),
                u = t("./chart"),
                c = t("./pool"),
                h = e.env.BASE,
                d = [],
                f = {
                    "btcwdgt-forum": o,
                    "btcwdgt-news": s,
                    "btcwdgt-news-ticker": a,
                    "btcwdgt-price": l,
                    "btcwdgt-chart": u,
                    "btcwdgt-pool": c
                };
            !function() {
                e.env.BUILD.id && r.log("=== Build " + e.env.BUILD.id + " ==="),
                r.log("Initialize. Looking for target elements");
                var t = [];
                for (var n in f)
                    if (f.hasOwnProperty(n)) {
                        var o = document.getElementsByClassName(n);
                        o.length > 0 && r.log('Found "' + n + '"');
                        for (var s = 0; s < o.length; s++)
                            t.push({
                                el: o[s],
                                cn: f[n]
                            })
                    }
                if (0 == t.length)
                    return void r.warn("No target elements found! Cannot create widgets.");
                var a = h + "widget.css";
                e.env.BUILD.id && (a += "?" + e.env.BUILD.id), i(a);
                for (var s = 0; s < t.length; s++) {
                    var l = t[s];
                    d.push(new l.cn(l.el))
                }
            }()
        }).call(this, t("_process"))
    }, {
        "./chart": 12,
        "./forum-posts": 16,
        "./log": 17,
        "./news-stories": 19,
        "./news-ticker": 20,
        "./pool": 21,
        "./price": 22,
        _process: 1
    }],
    19: [function(t, e, n) {
        (function(n) {
            function i(t) {
                if (l.log("Create NewsWidget"), s.call(this, t), this.rate = NaN, this.last = NaN, null != this.cur) {
                    this.key = "btcwdgt-price-" + this.cur.toLowerCase();
                    var e = d.getObj(this.key);
                    null != e && (e.rate ? this.last = e.rate : "number" == typeof e && (this.last = e));
                    var n = (this.cash ? "cash" : "price") + ":" + this.cl;
                    u.register(n, this.processSpot.bind(this)), u.subscribe(n), u.subscribe("source:widget-news")
                }
                this.build(), this.el.addClass(this.postBuildClasses.join(" ")), a(c + "news.json", 6e5, o.bind(this.processFeed, this))
            }
            var r = t("jQuery"),
                o = t("underscore"),
                s = t("./widget"),
                a = t("./feed-poller"),
                l = t("./log"),
                u = t("./stream"),
                c = n.env.BASE,
                h = t("./analytics"),
                d = t("./storage");
            i.prototype = Object.create(s.prototype), i.prototype.constructor = i, i.prototype.build = function() {
                this.el.html('    <div class="btcwdgt-header">      <h4><a href="https://news.bitcoin.com/">Latest Bitcoin News Stories</a></h4>    </div>    <div class="btcwdgt-body">      <ul></ul>    </div>    <div class="btcwdgt-footer">      <a href="https://www.bitcoin.com/widgets/" class="embed" title="Embed this widget">&lt;/&gt;</a>      <a href="https://www.bitcoin.com/" class="logo" title="Powered by bitcoin.com"><span>bitcoin.com</span></a>    </div>'), this.el.addClass("btcwdgt btcwdgt-headlines"), this.campaign && r("a", this.el).each(function(t, e) {
                    var n = r(e).attr("href");
                    r(e).attr("href", h.setMediumCampaign(n, "widget", "News Widget"))
                }), null != this.cur && r(".btcwdgt-body", this.el).prepend('      <div class="price">        <span>' + (this.cash ? "BCC" : "BTC") + "/" + this.cur.toUpperCase() + '</span>        <div class="p-wrap">          <p></p>        </div>        <strong class="arrow"></strong>      </div>')
            }, i.prototype.processFeed = function(t) {
                for (var e = [], n = 0, i = 0; i < t.length && i != this.rows; i++) {
                    var o = t[i];
                    e[n++] = "<li>", e[n++] = '<a href="', e[n++] = this.campaign ? h.setMediumCampaign(o.url, "widget", "News Widget") : o.url, e[n++] = '" title="', e[n++] = o.title, e[n++] = '">', e[n++] = o.title, e[n++] = "</a>", e[n++] = "</li>"
                }
                r("ul", this.el).html(e.join(""))
            }, i.prototype.processSpot = function(t) {
                t.price && (this.rate = t.price / 100, this.updateRates())
            }, i.prototype.processRates = function(t) {
                t.rates && t.rates.usd && t.rates[this.cl] && (this.rates = t.rates, this.updateRates())
            }, i.prototype.updateRates = function() {
                isNaN(this.last) && (this.last = this.rate), this.updateDisplay(), this.last = this.rate, d.setObj(this.key, this.rate)
            }, i.prototype.updateDisplay = function() {
                var t = r("<p/>").text(this.rate.toFixed(2)),
                    e = r(".p-wrap p:first-child", this.el).height();
                if (r(".arrow", this.el).removeClass("up down"), this.rate > this.last) {
                    r(".p-wrap", this.el).prepend(t), r(".p-wrap", this.el).attr("style", "transition: none !important; top: " + (-e + "px") + " !important"), window.setTimeout(o.bind(function() {
                        r(".p-wrap", this.el).attr("style", "top: 0 !important")
                    }, this), 50), window.setTimeout(o.bind(function() {
                        r(".p-wrap p:last-child", this.el).remove(), r(".p-wrap", this.el).attr("style", null)
                    }, this), 550);
                    var n = r(".p-wrap p:first-child", this.el),
                        i = n.width() + r(".price span", this.el).width() + 18;
                    r(".arrow", this.el).addClass("up").attr("style", "left: " + i + "px !important;")
                }
                if (this.rate < this.last) {
                    r(".p-wrap", this.el).append(t), r(".p-wrap", this.el).attr("style", "top: " + (-e + "px !important")), window.setTimeout(o.bind(function() {
                        r(".p-wrap p:first-child", this.el).remove(), r(".p-wrap", this.el).attr("style", "transition: none !important; top: 0 !important")
                    }, this), 500), window.setTimeout(o.bind(function() {
                        r(".p-wrap", this.el).attr("style", null)
                    }, this), 1e3);
                    var n = r(".p-wrap p:last-child", this.el),
                        i = n.width() + r(".price span", this.el).width() + 18;
                    r(".arrow", this.el).addClass("down").attr("style", "left: " + i + "px !important;")
                }
                (isNaN(this.last) || this.rate == this.last) && r(".p-wrap p", this.el).replaceWith(t)
            }, e.exports = i
        }).call(this, t("_process"))
    }, {
        "./analytics": 10,
        "./feed-poller": 15,
        "./log": 17,
        "./storage": 24,
        "./stream": 25,
        "./widget": 27,
        _process: 1,
        jQuery: 7,
        underscore: 9
    }],
    20: [function(t, e, n) {
        (function(n) {
            function i(t) {
                l.log("Create NewsTicker"), s.call(this, t), this.stories = [], this.index = -1, this.build(), this.el.addClass(this.postBuildClasses.join(" ")), a(u + "news.json", 15e5, o.bind(this.processFeed, this)), window.setInterval(o.bind(this.showNext, this), 7500)
            }
            var r = t("jQuery"),
                o = t("underscore"),
                s = t("./widget"),
                a = t("./feed-poller"),
                l = t("./log"),
                u = n.env.BASE,
                c = t("./analytics");
            i.prototype = Object.create(s.prototype), i.prototype.constructor = i, i.prototype.build = function() {
                this.el.html('    <div class="btcwdgt-body">      <ul><li></li></ul>    </div>    <div class="btcwdgt-footer">      <a href="https://www.bitcoin.com/widgets/" class="embed" title="Embed this widget">&lt;/&gt;</a>      <a href="https://news.bitcoin.com/" class="logo" title="Powered by bitcoin.com news"><span>bitcoin.com</span></a>    </div>    <div class="btcwdgt-edge"></div>'), this.el.addClass("btcwdgt btcwdgt-text-ticker"), this.campaign && r("a", this.el).each(function(t, e) {
                    var n = r(e).attr("href");
                    r(e).attr("href", c.setMediumCampaign(n, "widget", "News Ticker Widget"))
                })
            }, i.prototype.showNext = function() {
                if (0 != this.stories.length) {
                    this.index++, this.index >= this.stories.length && (this.index = 0);
                    var t = [],
                        e = 0,
                        n = this.stories[this.index];
                    t[e++] = "<li>", t[e++] = '<a href="', t[e++] = n.url, t[e++] = '" title="', t[e++] = n.title, t[e++] = '">', t[e++] = n.title, t[e++] = "</a>", t[e++] = "</li>", r("ul", this.el).append(t.join(""));
                    var i = r("ul li:first-child", this.el).height();
                    r("ul", this.el).attr("style", "top: " + (-i + "px !important")), window.setTimeout(o.bind(function() {
                        r("ul li:first-child", this.el).remove(), r("ul", this.el).attr("style", "transition: none !important; top: 0 !important")
                    }, this), 500), window.setTimeout(o.bind(function() {
                        r("ul", this.el).attr("style", null)
                    }, this), 1e3)
                }
            }, i.prototype.processFeed = function(t) {
                if (this.stories = t, this.campaign)
                    for (var e = 0; e < this.stories.length; e++)
                        this.stories[e].url = c.setMediumCampaign(this.stories[e].url, "widget", "News Ticker Widget");
                this.index = -1, this.showNext()
            }, e.exports = i
        }).call(this, t("_process"))
    }, {
        "./analytics": 10,
        "./feed-poller": 15,
        "./log": 17,
        "./widget": 27,
        _process: 1,
        jQuery: 7,
        underscore: 9
    }],
    21: [function(t, e, n) {
        (function(n) {
            function i(t) {
                l.log("Create PoolWidget"), s.call(this, t), this.last = {
                    terahash: NaN,
                    stamp: 0
                }, this.key = "btcwdgt-pool";
                var e = h.getObj(this.key);
                null != e && e.terahash && (this.last.terahash = e.terahash), this.build(), this.el.addClass(this.postBuildClasses.join(" ")), a(u + "pool.json", 6e5, o.bind(this.processData, this))
            }
            var r = t("jQuery"),
                o = t("underscore"),
                s = t("./widget"),
                a = t("./feed-poller"),
                l = t("./log"),
                u = n.env.BASE,
                c = t("./analytics"),
                h = t("./storage"),
                d = t("./util");
            i.prototype = Object.create(s.prototype), i.prototype.constructor = i, i.prototype.build = function() {
                this.el.html('    <div class="btcwdgt-body">      <ul><li>&mdash;</li></ul>      <strong class="arrow"></strong>      <span></span>    </div>    <div class="btcwdgt-footer">      <a href="https://www.bitcoin.com/widgets/" class="embed" title="Embed this widget">&lt;/&gt;</a>      <a href="https://pool.bitcoin.com/" class="logo" title="Powered by the bitcoin.com mining pool"><span>bitcoin.com</span></a>    </div>    <div class="btcwdgt-edge"></div>'), this.el.addClass("btcwdgt btcwdgt-s-pool btcwdgt-s-price btcwdgt-text-ticker"), this.campaign && r("a", this.el).each(function(t, e) {
                    var n = r(e).attr("href");
                    r(e).attr("href", c.setMediumCampaign(n, "widget", "Pool Widget"))
                })
            }, i.prototype.processData = function(t) {
                if (t.stamp && t.terahash) {
                    var e = Math.pow(10, 3 * Math.floor(Math.log10(t.terahash) / 3)),
                        n = t.terahash / e,
                        i = r("<li/>").text(n.toFixed(3 - Math.ceil(Math.log10(n)))),
                        s = r("ul li:first-child", this.el).height();
                    if (r(".arrow", this.el).removeClass("up down"), t.terahash > this.last.terahash) {
                        r("ul", this.el).prepend(i), r("ul", this.el).attr("style", "transition: none !important; top: " + (-s + "px") + " !important"), window.setTimeout(o.bind(function() {
                            r("ul", this.el).attr("style", "top: 0 !important")
                        }, this), 50), window.setTimeout(o.bind(function() {
                            r("ul li:last-child", this.el).remove(), r("ul", this.el).attr("style", null)
                        }, this), 550);
                        var a = r("li:first-child", this.el),
                            l = a.width() + 16;
                        r(".arrow", this.el).addClass("up").attr("style", "left: " + l + "px !important;")
                    }
                    if (t.terahash < this.last.terahash) {
                        r("ul", this.el).append(i), r("ul", this.el).attr("style", "top: " + (-s + "px !important")), window.setTimeout(o.bind(function() {
                            r("ul li:first-child", this.el).remove(), r("ul", this.el).attr("style", "transition: none !important; top: 0 !important")
                        }, this), 500), window.setTimeout(o.bind(function() {
                            r("ul", this.el).attr("style", null)
                        }, this), 1e3);
                        var a = r("li:last-child", this.el),
                            l = a.width() + 16;
                        r(".arrow", this.el).addClass("down").attr("style", "left: " + l + "px !important;")
                    }
                    (isNaN(this.last.terahash) || t.terahash == this.last.terahash) && r("li", this.el).replaceWith(i), r(".btcwdgt-body span", this.el).html(d.siPrefix(t.terahash, 12) + "Hash/s"), this.last = t, h.setObj(this.key, this.last)
                }
            }, e.exports = i
        }).call(this, t("_process"))
    }, {
        "./analytics": 10,
        "./feed-poller": 15,
        "./log": 17,
        "./storage": 24,
        "./util": 26,
        "./widget": 27,
        _process: 1,
        jQuery: 7,
        underscore: 9
    }],
    22: [function(t, e, n) {
        (function(n) {
            function i(t) {
                a.log("Create PriceWidget"), s.call(this, t), this.rate = NaN, this.last = NaN, null == this.cur && (this.cur = "USD", this.cl = "usd"), this.key = "btcwdgt-price-" + this.cl;
                var e = c.getObj(this.key);
                null != e && (e.rate ? this.last = e.rate : "number" == typeof e && (this.last = e)), this.build(), this.el.addClass(this.postBuildClasses.join(" "));
                var n = (this.cash ? "cash" : "price") + ":" + this.cl;
                l.register(n, this.processSpot.bind(this)), l.subscribe(n), l.subscribe("source:widget-price")
            }
            var r = t("jQuery"),
                o = t("underscore"),
                s = t("./widget"),
                a = t("./log"),
                l = t("./stream"),
                u = (n.env.BASE, t("./analytics")),
                c = t("./storage");
            i.prototype = Object.create(s.prototype), i.prototype.constructor = i, i.prototype.build = function() {
                this.el.html('    <div class="btcwdgt-body">      <ul><li>&mdash;</li></ul>      <strong class="arrow"></strong>      <span></span>    </div>    <div class="btcwdgt-footer">      <a href="https://www.bitcoin.com/widgets/" class="embed" title="Embed this widget">&lt;/&gt;</a>      <a href="https://www.bitcoin.com/" class="logo" title="Powered by bitcoin.com"><span>bitcoin.com</span></a>    </div>    <div class="btcwdgt-edge"></div>'), this.el.addClass("btcwdgt btcwdgt-s-price btcwdgt-text-ticker"), this.campaign && r("a", this.el).each(function(t, e) {
                    var n = r(e).attr("href");
                    r(e).attr("href", u.setMediumCampaign(n, "widget", "Price Widget"))
                }), r(".btcwdgt-body span", this.el).html((this.cash ? "BCC" : "BTC") + "/" + this.cur)
            }, i.prototype.processSpot = function(t) {
                t.price && (this.rate = t.price / 100, this.updateRates())
            }, i.prototype.updateRates = function() {
                isNaN(this.last) && (this.last = this.rate), this.updateDisplay(), this.last = this.rate, c.setObj(this.key, this.rate)
            }, i.prototype.updateDisplay = function() {
                var t = r("<li/>").text(this.rate.toFixed(2)),
                    e = r("ul li:first-child", this.el).height();
                if (r(".arrow", this.el).removeClass("up down"), this.rate > this.last) {
                    r("ul", this.el).prepend(t), r("ul", this.el).attr("style", "transition: none !important; top: " + (-e + "px") + " !important"), window.setTimeout(o.bind(function() {
                        r("ul", this.el).attr("style", "top: 0 !important")
                    }, this), 50), window.setTimeout(o.bind(function() {
                        r("ul li:last-child", this.el).remove(), r("ul", this.el).attr("style", null)
                    }, this), 550);
                    var n = r("li:first-child", this.el),
                        i = n.width() + 16;
                    r(".arrow", this.el).addClass("up").attr("style", "left: " + i + "px !important;")
                }
                if (this.rate < this.last) {
                    r("ul", this.el).append(t), r("ul", this.el).attr("style", "top: " + (-e + "px !important")), window.setTimeout(o.bind(function() {
                        r("ul li:first-child", this.el).remove(), r("ul", this.el).attr("style", "transition: none !important; top: 0 !important")
                    }, this), 500), window.setTimeout(o.bind(function() {
                        r("ul", this.el).attr("style", null)
                    }, this), 1e3);
                    var n = r("li:last-child", this.el),
                        i = n.width() + 16;
                    r(".arrow", this.el).addClass("down").attr("style", "left: " + i + "px !important;")
                }
                (isNaN(this.last) || this.rate == this.last) && r("li", this.el).replaceWith(t)
            }, e.exports = i
        }).call(this, t("_process"))
    }, {
        "./analytics": 10,
        "./log": 17,
        "./storage": 24,
        "./stream": 25,
        "./widget": 27,
        _process: 1,
        jQuery: 7,
        underscore: 9
    }],
    23: [function(t, e, n) {
        (function(e) {
            e.env.BASE = "https://widgets.bitcoin.com/", e.env.BCX = "https://index.bitcoin.com/api/v0/", e.env.WS = "wss://index.bitcoin.com/ws", e.env.BUILD = t("./build"), t("./main")
        }).call(this, t("_process"))
    }, {
        "./build": 11,
        "./main": 18,
        _process: 1
    }],
    24: [function(t, e, n) {
        function i() {
            return !!(window.localStorage && "localStorage" in window)
        }
        function r(t, e) {
            var n = i() ? window.localStorage : l;
            n[t] = e
        }
        function o(t) {
            var e = i() ? window.localStorage : l;
            return e[t]
        }
        function s(t, e) {
            r(t, JSON.stringify(e))
        }
        function a(t) {
            var e = o(t);
            try {
                return JSON.parse(e)
            } catch (t) {
                return null
            }
        }
        var l = {};
        e.exports = {
            available: i,
            get: o,
            set: r,
            getObj: a,
            setObj: s
        }
    }, {}],
    25: [function(t, e, n) {
        (function(t) {
            function n() {
                this.callbacks = {}, this.last = {}, this.subscriptions = {}, this.socket = null
            }
            function i(t, e) {
                window[s].register(t, e), window[s].connect()
            }
            function r(t) {
                window[s].subscribe(t)
            }
            var o = t.env.WS;
            n.prototype.register = function(t, e) {
                if (this.callbacks.hasOwnProperty(t) || (this.callbacks[t] = []), "function" == typeof e && (this.callbacks[t].push(e), this.last[t]))
                    try {
                        e(this.last[t])
                    } catch (t) {}
            }, n.prototype.subscribe = function(t) {
                this.subscriptions[t] || (this.doSubscribe(t), this.subscriptions[t] = (new Date).getTime())
            }, n.prototype.doSubscribe = function(t) {
                try {
                    this.socket.send(this.subscribeMessage(t))
                } catch (t) {}
            }, n.prototype.subscribeMessage = function(t) {
                return JSON.stringify({
                    op: "subscribe",
                    channel: t
                })
            }, n.prototype.dispatch = function(t, e) {
                if (this.last[t] = e, this.callbacks.hasOwnProperty(t))
                    for (var n = 0; n < this.callbacks[t].length; n++)
                        try {
                            this.callbacks[t][n](e)
                        } catch (t) {}
            }, n.prototype.connect = function() {
                if (null === this.socket)
                    try {
                        this.socket = new WebSocket(o), this.socket.onopen = this.onOpen.bind(this), this.socket.onclose = this.onClose.bind(this), this.socket.onmessage = this.onMessage.bind(this)
                    } catch (t) {}
            }, n.prototype.reconnect = function() {
                try {
                    this.socket.readyState != WebSocket.CLOSED && this.socket.close()
                } catch (t) {}
                this.socket = null, window.setTimeout(this.connect.bind(this), 1e3 * (15 + 15 * Math.random()))
            }, n.prototype.onOpen = function() {
                for (var t in this.subscriptions)
                    this.subscriptions[t] && this.doSubscribe(t)
            }, n.prototype.onClose = function() {
                this.reconnect()
            }, n.prototype.onMessage = function(t) {
                try {
                    var e = JSON.parse(t.data);
                    e.hasOwnProperty("op") && e.hasOwnProperty("data") && this.dispatch(e.op, e.data)
                } catch (t) {}
            };
            var s = "BitcoinComStream";
            s in window && window.hasOwnProperty(s) || (window[s] = new n), e.exports = {
                register: i,
                subscribe: r
            }
        }).call(this, t("_process"))
    }, {
        _process: 1
    }],
    26: [function(t, e, n) {
        function i(t, e) {
            e = e || 0;
            var n = 3 * Math.floor(Math.log10(t) / 3) + e;
            switch (n) {
            case 24:
                return "Y";
            case 21:
                return "Z";
            case 18:
                return "E";
            case 15:
                return "P";
            case 12:
                return "T";
            case 9:
                return "G";
            case 6:
                return "M";
            case 3:
                return "k";
            case 0:
                return "";
            default:
                return "10<sup>" + n + "</sup>&thinsp;"
            }
        }
        function r(t) {
            var e = Math.pow(10, 3 * Math.floor(Math.log10(t) / 3)),
                n = t / e,
                i = 3 - Math.ceil(Math.log10(n));
            return n.toFixed(i) + o(t)
        }
        function o(t) {
            var e = 3 * Math.floor(Math.log10(t) / 3);
            switch (e) {
            case 15:
                return "Q";
            case 12:
                return "T";
            case 9:
                return "B";
            case 6:
                return "M";
            case 3:
                return "k";
            case 0:
                return "";
            default:
                return "&times;10<sup>" + e + "</sup>"
            }
        }
        Math.log10 = Math.log10 || function(t) {
            return Math.log(t) / Math.log(10)
        }, e.exports = {
            compactDisp: r,
            scaleAbbr: o,
            siPrefix: i
        }
    }, {}],
    27: [function(t, e, n) {
        function i(t) {
            this.el = r(t), this.campaign = !("off" == this.el.attr("bw-campaign")), this.cur = null, this.cl = null;
            var e = this.el.attr("bw-cur");
            "string" == typeof e && o.available(e) && (a.log("Got currency: " + e.toUpperCase()), this.cur = e.toUpperCase(), this.cl = e.toLowerCase()), this.cash = "true" == this.el.attr("bw-cash"), this.cash && a.log("Bitcoin Cash base currency"), this.rows = 5;
            var n = parseInt(this.el.attr("bw-entries"), 10);
            switch (isNaN(n) || (this.rows = Math.max(1, Math.min(10, n))), this.postBuildClasses = [], "true" == this.el.attr("bw-noshadow") && this.postBuildClasses.push("btcwdgt-noshadow"), this.colors = s.default, this.el.attr("bw-theme")) {
            case "light":
                this.postBuildClasses.push("btcwdgt-light"), this.colors = s.light
            }
            this.postBuildClasses.push("btcwdgt-clean")
        }
        var r = t("jQuery"),
            o = t("./currencies"),
            s = t("./colors"),
            a = t("./log");
        e.exports = i
    }, {
        "./colors": 13,
        "./currencies": 14,
        "./log": 17,
        jQuery: 7
    }]
}, {}, [23]);
