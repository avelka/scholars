if(!self.define){let e,d={};const s=(s,i)=>(s=new URL(s+".js",i).href,d[s]||new Promise((d=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=d,document.head.appendChild(e)}else e=s,importScripts(s),d()})).then((()=>{let e=d[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,t)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(d[r])return;let n={};const o=e=>s(e,r),c={module:{uri:r},exports:n,require:o};d[r]=Promise.all(i.map((e=>c[e]||o(e)))).then((e=>(t(...e),n)))}}define(["./workbox-d4314735"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"index.html",revision:"bb4ad7a73976dd9eba3a4a24d1b84d71"},{url:"rusted_note-d252c63f271ed05a_bg.wasm",revision:"6cf014d268555bbaf06ed2df3584ada9"},{url:"rusted_note-d252c63f271ed05a.js",revision:"04baf237db725e2c239b83777c04879d"},{url:"snippets/leptos_reactive-f7acfdcc44aba8c4/inline0.js",revision:"812dd7e5247090819ed2f0afd0eb6b69"},{url:"style-a276dd8c07fdc2d2.css",revision:"d5e5e5590c43b264f96eef60572f2075"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
