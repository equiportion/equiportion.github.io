if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let l={};const t=e=>i(e,r),u={module:{uri:r},exports:l,require:t};s[r]=Promise.all(n.map((e=>u[e]||t(e)))).then((e=>(o(...e),l)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-CFzpDwRC.js",revision:null},{url:"assets/index-CLzabSdc.css",revision:null},{url:"assets/LogoWide-Z6MV5Wdz.svg",revision:null},{url:"assets/LogoWideWhite-Df59nNXl.svg",revision:null},{url:"assets/signal_searching-DXjCo2Bc.svg",revision:null},{url:"assets/workbox-window.prod.es5-DFjpnwFp.js",revision:null},{url:"favicon.ico",revision:"d2906c78930f4630060d9063e738ec00"},{url:"index.html",revision:"add7fb9514826755bc2a75a48e4b4769"},{url:"LogoSquare.png",revision:"ce93a1a2d9ba70044198bfe3002e69d1"},{url:"LogoSquare.svg",revision:"2d548c8ab08ab2f180e2f386aec1c772"},{url:"LogoSquare.svg",revision:"2d548c8ab08ab2f180e2f386aec1c772"},{url:"LogoSquare.png",revision:"ce93a1a2d9ba70044198bfe3002e69d1"},{url:"manifest.webmanifest",revision:"7e6ab9f2272200dbe606d7cf2d236ec0"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
