(()=>{"use strict";var e,a,t,r,o,f={},n={};function c(e){var a=n[e];if(void 0!==a)return a.exports;var t=n[e]={id:e,loaded:!1,exports:{}};return f[e].call(t.exports,t,t.exports,c),t.loaded=!0,t.exports}c.m=f,c.c=n,e=[],c.O=(a,t,r,o)=>{if(!t){var f=1/0;for(b=0;b<e.length;b++){t=e[b][0],r=e[b][1],o=e[b][2];for(var n=!0,d=0;d<t.length;d++)(!1&o||f>=o)&&Object.keys(c.O).every((e=>c.O[e](t[d])))?t.splice(d--,1):(n=!1,o<f&&(f=o));if(n){e.splice(b--,1);var i=r();void 0!==i&&(a=i)}}return a}o=o||0;for(var b=e.length;b>0&&e[b-1][2]>o;b--)e[b]=e[b-1];e[b]=[t,r,o]},c.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return c.d(a,{a:a}),a},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,c.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var o=Object.create(null);c.r(o);var f={};a=a||[null,t({}),t([]),t(t)];for(var n=2&r&&e;"object"==typeof n&&!~a.indexOf(n);n=t(n))Object.getOwnPropertyNames(n).forEach((a=>f[a]=()=>e[a]));return f.default=()=>e,c.d(o,f),o},c.d=(e,a)=>{for(var t in a)c.o(a,t)&&!c.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},c.f={},c.e=e=>Promise.all(Object.keys(c.f).reduce(((a,t)=>(c.f[t](e,a),a)),[])),c.u=e=>"assets/js/"+({42:"511eaa65",43:"637985c1",48:"a94703ab",98:"a7bd4aaa",129:"758145a1",159:"4ca05c3e",236:"a2c06f3b",339:"e3758848",401:"17896441",431:"2adf5859",473:"11ea7d3f",488:"a1880b50",516:"c168320b",578:"816b3117",581:"935f2afb",598:"54f1aefa",647:"5e95c892",673:"69fc3c1a",680:"6d86b96b",696:"c5d01b73",727:"95ff1f1d",841:"512941cc",878:"46632f64",924:"f1b6d857",976:"0e384e19",981:"25825268"}[e]||e)+"."+{42:"39d35a08",43:"6c5cbf7f",48:"d83a3114",98:"dad91d97",129:"e9607d4b",159:"cd9b8d69",236:"0952752a",237:"5854ffa2",339:"67fdfba3",401:"192a8e7d",431:"2c1ecba8",473:"6d3fea71",488:"7c9fecea",516:"dad51dd2",578:"cfbdf602",581:"17003ecd",598:"7f1bc5b1",647:"42845c1a",673:"48e768ab",680:"1492dfff",696:"d290a5f1",727:"faaaee29",841:"5b0a194f",878:"eaced145",924:"197f6a92",976:"ecef523d",981:"8b4d3fb7"}[e]+".js",c.miniCssF=e=>{},c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),r={},o="fedpat-docs:",c.l=(e,a,t,f)=>{if(r[e])r[e].push(a);else{var n,d;if(void 0!==t)for(var i=document.getElementsByTagName("script"),b=0;b<i.length;b++){var u=i[b];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==o+t){n=u;break}}n||(d=!0,(n=document.createElement("script")).charset="utf-8",n.timeout=120,c.nc&&n.setAttribute("nonce",c.nc),n.setAttribute("data-webpack",o+t),n.src=e),r[e]=[a];var l=(a,t)=>{n.onerror=n.onload=null,clearTimeout(s);var o=r[e];if(delete r[e],n.parentNode&&n.parentNode.removeChild(n),o&&o.forEach((e=>e(t))),a)return a(t)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=l.bind(null,n.onerror),n.onload=l.bind(null,n.onload),d&&document.head.appendChild(n)}},c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.p="/flock-tech-guides/",c.gca=function(e){return e={17896441:"401",25825268:"981","511eaa65":"42","637985c1":"43",a94703ab:"48",a7bd4aaa:"98","758145a1":"129","4ca05c3e":"159",a2c06f3b:"236",e3758848:"339","2adf5859":"431","11ea7d3f":"473",a1880b50:"488",c168320b:"516","816b3117":"578","935f2afb":"581","54f1aefa":"598","5e95c892":"647","69fc3c1a":"673","6d86b96b":"680",c5d01b73:"696","95ff1f1d":"727","512941cc":"841","46632f64":"878",f1b6d857:"924","0e384e19":"976"}[e]||e,c.p+c.u(e)},(()=>{var e={354:0,869:0};c.f.j=(a,t)=>{var r=c.o(e,a)?e[a]:void 0;if(0!==r)if(r)t.push(r[2]);else if(/^(354|869)$/.test(a))e[a]=0;else{var o=new Promise(((t,o)=>r=e[a]=[t,o]));t.push(r[2]=o);var f=c.p+c.u(a),n=new Error;c.l(f,(t=>{if(c.o(e,a)&&(0!==(r=e[a])&&(e[a]=void 0),r)){var o=t&&("load"===t.type?"missing":t.type),f=t&&t.target&&t.target.src;n.message="Loading chunk "+a+" failed.\n("+o+": "+f+")",n.name="ChunkLoadError",n.type=o,n.request=f,r[1](n)}}),"chunk-"+a,a)}},c.O.j=a=>0===e[a];var a=(a,t)=>{var r,o,f=t[0],n=t[1],d=t[2],i=0;if(f.some((a=>0!==e[a]))){for(r in n)c.o(n,r)&&(c.m[r]=n[r]);if(d)var b=d(c)}for(a&&a(t);i<f.length;i++)o=f[i],c.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return c.O(b)},t=self.webpackChunkfedpat_docs=self.webpackChunkfedpat_docs||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))})()})();