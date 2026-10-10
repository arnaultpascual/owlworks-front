import{t as e}from"./index-3ETz5MFU.js";import{BLOCK_K as t,C as n,CAMPAIGN as r,ENEMY_LOOK as i,MAX_ENEMIES as a,MAX_PARTICLES as o,MAX_PROJ as s,PACE as c,PROJ_Y as l,SCROLL as u,SOAK_K as d,SPACING as f,TOUGH_K as p,TRAP_BITE as m,UNIT_SCALE as h,WALK_K as g,WALL_X as _}from"./config-Bvoy31Sk.js";import{TIERS as v,TOP as y,a as b,c as x,d as S,f as C,firstValue as w,fmt as T,i as E,l as D,m as O,n as k,o as A,p as ee,r as te,s as j,t as ne,tierDps as re,tierValue as ie,u as ae}from"./tiers-6gFcXEoy.js";var oe=Object.defineProperty,se=(e,t)=>{let n={};for(var r in e)oe(n,r,{get:e[r],enumerable:!0});return t||oe(n,Symbol.toStringTag,{value:`Module`}),n},ce;(function(e){e.Unimplemented=`UNIMPLEMENTED`,e.Unavailable=`UNAVAILABLE`})(ce||={});var le=class extends Error{constructor(e,t,n){super(e),this.message=e,this.code=t,this.data=n}},ue=e=>e?.androidBridge?`android`:e?.webkit?.messageHandlers?.bridge?`ios`:`web`,de=e=>{let t=e.CapacitorCustomPlatform||null,n=e.Capacitor||{},r=n.Plugins=n.Plugins||{},i=()=>t===null?ue(e):t.name,a=()=>i()!==`web`,o=e=>!!(l.get(e)?.platforms.has(i())||s(e)),s=e=>n.PluginHeaders?.find(t=>t.name===e),c=t=>e.console.error(t),l=new Map;return n.convertFileSrc||=e=>e,n.getPlatform=i,n.handleError=c,n.isNativePlatform=a,n.isPluginAvailable=o,n.registerPlugin=(e,a={})=>{let o=l.get(e);if(o)return console.warn(`Capacitor plugin "${e}" already registered. Cannot register plugins twice.`),o.proxy;let c=i(),u=s(e),d,f=async()=>(!d&&c in a?d=d=typeof a[c]==`function`?await a[c]():a[c]:t!==null&&!d&&`web`in a&&(d=d=typeof a.web==`function`?await a.web():a.web),d),p=(t,r)=>{if(u){let i=u?.methods.find(e=>r===e.name);if(i)return i.rtype===`promise`?t=>n.nativePromise(e,r.toString(),t):(t,i)=>n.nativeCallback(e,r.toString(),t,i);if(t)return t[r]?.bind(t)}else if(t)return t[r]?.bind(t);else throw new le(`"${e}" plugin is not implemented on ${c}`,ce.Unimplemented)},m=t=>{let n,r=(...r)=>{let i=f().then(i=>{let a=p(i,t);if(a){let e=a(...r);return n=e?.remove,e}throw new le(`"${e}.${t}()" is not implemented on ${c}`,ce.Unimplemented)});return t===`addListener`&&(i.remove=async()=>n()),i};return r.toString=()=>`${t.toString()}() { [capacitor code] }`,Object.defineProperty(r,"name",{value:t,writable:!1,configurable:!1}),r},h=m(`addListener`),g=m(`removeListener`),_=(e,t)=>{let n=h({eventName:e},t),r=async()=>{let r=await n;g({eventName:e,callbackId:r},t)},i=new Promise(e=>n.then(()=>e({remove:r})));return i.remove=async()=>{console.warn(`Using addListener() without 'await' is deprecated.`),await r()},i},v=new Proxy({},{get(e,t){switch(t){case`$$typeof`:return;case`toJSON`:return()=>({});case`addListener`:return u?_:h;case`removeListener`:return g;default:return m(t)}}});return r[e]=v,l.set(e,{name:e,proxy:v,platforms:new Set([...Object.keys(a),...u?[c]:[]])}),v},n.Exception=le,n.DEBUG=!!n.DEBUG,n.isLoggingEnabled=!!n.isLoggingEnabled,n},fe=(e=>e.Capacitor=de(e))(typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:{}),pe=fe.registerPlugin,me=class{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(e,t){let n=!1;this.listeners[e]||(this.listeners[e]=[],n=!0),this.listeners[e].push(t);let r=this.windowListeners[e];return r&&!r.registered&&this.addWindowListener(r),n&&this.sendRetainedArgumentsForEvent(e),Promise.resolve({remove:async()=>this.removeListener(e,t)})}async removeAllListeners(){this.listeners={};for(let e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}}notifyListeners(e,t,n){let r=this.listeners[e];if(r)r.forEach(e=>e(t));else if(n){let n=this.retainedEventArguments[e];n||=[],n.push(t),this.retainedEventArguments[e]=n}}hasListeners(e){return!!this.listeners[e]?.length}registerWindowListener(e,t){this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:e=>{this.notifyListeners(t,e)}}}unimplemented(e=`not implemented`){return new fe.Exception(e,ce.Unimplemented)}unavailable(e=`not available`){return new fe.Exception(e,ce.Unavailable)}async removeListener(e,t){let n=this.listeners[e];if(!n)return;let r=n.indexOf(t);r!==-1&&this.listeners[e].splice(r,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}sendRetainedArgumentsForEvent(e){let t=this.retainedEventArguments[e];t&&(delete this.retainedEventArguments[e],t.forEach(t=>{this.notifyListeners(e,t)}))}},he=e=>encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),ge=e=>e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent),_e=class extends me{async getCookies(){let e=document.cookie,t={};return e.split(`;`).forEach(e=>{if(e.length<=0)return;let[n,r]=e.replace(/=/,`CAP_COOKIE`).split(`CAP_COOKIE`);n=ge(n).trim(),r=ge(r).trim(),t[n]=r}),t}async setCookie(e){try{let t=he(e.key),n=he(e.value),r=e.expires?`; expires=${e.expires.replace(`expires=`,``)}`:``,i=(e.path||`/`).replace(`path=`,``),a=e.url!=null&&e.url.length>0?`domain=${e.url}`:``;document.cookie=`${t}=${n||``}${r}; path=${i}; ${a};`}catch(e){return Promise.reject(e)}}async deleteCookie(e){try{document.cookie=`${e.key}=; Max-Age=0`}catch(e){return Promise.reject(e)}}async clearCookies(){try{let e=document.cookie.split(`;`)||[];for(let t of e)document.cookie=t.replace(/^ +/,``).replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(e){return Promise.reject(e)}}async clearAllCookies(){try{await this.clearCookies()}catch(e){return Promise.reject(e)}}};pe(`CapacitorCookies`,{web:()=>new _e});var ve=async e=>new Promise((t,n)=>{let r=new FileReader;r.onload=()=>{let e=r.result;t(e.indexOf(`,`)>=0?e.split(`,`)[1]:e)},r.onerror=e=>n(e),r.readAsDataURL(e)}),ye=(e={})=>{let t=Object.keys(e);return Object.keys(e).map(e=>e.toLocaleLowerCase()).reduce((n,r,i)=>(n[r]=e[t[i]],n),{})},be=(e,t=!0)=>e?Object.entries(e).reduce((e,n)=>{let[r,i]=n,a,o;return Array.isArray(i)?(o=``,i.forEach(e=>{a=t?encodeURIComponent(e):e,o+=`${r}=${a}&`}),o.slice(0,-1)):(a=t?encodeURIComponent(i):i,o=`${r}=${a}`),`${e}&${o}`},``).substr(1):null,xe=(e,t={})=>{let n=Object.assign({method:e.method||`GET`,headers:e.headers},t),r=ye(e.headers)[`content-type`]||``;if(typeof e.data==`string`)n.body=e.data;else if(r.includes(`application/x-www-form-urlencoded`)){let t=new URLSearchParams;for(let[n,r]of Object.entries(e.data||{}))t.set(n,r);n.body=t.toString()}else if(r.includes(`multipart/form-data`)||e.data instanceof FormData){let t=new FormData;if(e.data instanceof FormData)e.data.forEach((e,n)=>{t.append(n,e)});else for(let n of Object.keys(e.data))t.append(n,e.data[n]);n.body=t;let r=new Headers(n.headers);r.delete(`content-type`),n.headers=r}else(r.includes(`application/json`)||typeof e.data==`object`)&&(n.body=JSON.stringify(e.data));return n},Se=class extends me{async request(e){let t=xe(e,e.webFetchExtra),n=be(e.params,e.shouldEncodeUrlParams),r=n?`${e.url}?${n}`:e.url,i=await fetch(r,t),a=i.headers.get(`content-type`)||``,{responseType:o=`text`}=i.ok?e:{};a.includes(`application/json`)&&(o=`json`);let s,c;switch(o){case`arraybuffer`:case`blob`:c=await i.blob(),s=await ve(c);break;case`json`:s=await i.json();break;default:s=await i.text()}let l={};return i.headers.forEach((e,t)=>{l[t]=e}),{data:s,headers:l,status:i.status,url:i.url}}async get(e){return this.request(Object.assign(Object.assign({},e),{method:`GET`}))}async post(e){return this.request(Object.assign(Object.assign({},e),{method:`POST`}))}async put(e){return this.request(Object.assign(Object.assign({},e),{method:`PUT`}))}async patch(e){return this.request(Object.assign(Object.assign({},e),{method:`PATCH`}))}async delete(e){return this.request(Object.assign(Object.assign({},e),{method:`DELETE`}))}};pe(`CapacitorHttp`,{web:()=>new Se});var Ce;(function(e){e.Dark=`DARK`,e.Light=`LIGHT`,e.Default=`DEFAULT`})(Ce||={});var we;(function(e){e.StatusBar=`StatusBar`,e.NavigationBar=`NavigationBar`})(we||={});var Te=class extends me{async setStyle(){this.unavailable(`not available for web`)}async setAnimation(){this.unavailable(`not available for web`)}async show(){this.unavailable(`not available for web`)}async hide(){this.unavailable(`not available for web`)}};pe(`SystemBars`,{web:()=>new Te});var M;(function(e){e.NOT_REQUIRED=`NOT_REQUIRED`,e.OBTAINED=`OBTAINED`,e.REQUIRED=`REQUIRED`,e.UNKNOWN=`UNKNOWN`})(M||={});var Ee=48e3,De=new WeakMap;function Oe(e,t){let n=new Float32Array(t+1),r=new Float32Array(t+1);for(let r=1;r<=t;r++)n[r]=2/(r*Math.PI)*Math.sin(r*Math.PI*e);return[n,r]}function N(e){let t=[];for(let e=15;e>=0;e--)t.push(e);for(let e=0;e<=15;e++)t.push(e);let n=2048,r=new Float32Array(n);for(let e=0;e<n;e++)r[e]=t[Math.floor(e/64)]/7.5-1;let i=new Float32Array(e+1),a=new Float32Array(e+1);for(let t=1;t<=e;t++){let e=0,o=0;for(let i=0;i<n;i++){let a=2*Math.PI*t*i/n;e+=r[i]*Math.cos(a),o+=r[i]*Math.sin(a)}i[t]=2/n*e,a[t]=2/n*o}return[i,a]}var ke=null;function P(e,t){if(t===`sine`||t===`saw`)return null;let n=De.get(e);n||De.set(e,n=new Map);let r=n.get(t);if(!r){let[i,a]=t===`tri`?ke??=N(48):Oe(t===`p12`?.125:t===`p25`?.25:.5,64);r=e.createPeriodicWave(i,a),n.set(t,r)}return r}function Ae(e,t,n){let r=P(e,n);r?t.setPeriodicWave(r):t.type=n===`saw`?`sawtooth`:`sine`}var je=new Map;function Me(e,t){let n=`${e}${t}`,r=je.get(n);if(!r){r=new AudioBuffer({length:Ee,sampleRate:Ee,numberOfChannels:1});let i=r.getChannelData(0),a=1,o=0,s=e===`metal`?6:1;for(let e=0;e<Ee;e++){if(e%t===0){let e=a&1^a>>s&1;a=a>>1|e<<14,o=a&1?.9:-.9}i[e]=o}je.set(n,r)}return r}function Ne(e,t=1.5){let n=Math.floor(e.sampleRate*t),r=e.createBuffer(2,n,e.sampleRate),i=19088743,a=()=>(i=Math.imul(i,1103515245)+12345|0,(i>>>8&65535)/32768-1);for(let i=0;i<2;i++){let o=r.getChannelData(i),s=Math.floor(e.sampleRate*.012);for(let r=s;r<n;r++){let n=(r-s)/e.sampleRate;o[r]=a()*Math.exp(-n*4.2)*(1-n/t*.35)}}return r}function Pe(e,t,n,r,i){let a=r.a??.004,o=r.d??.12,s=r.s??0,c=r.r??.05;return e.value=0,e.setValueAtTime(0,t),e.linearRampToValueAtTime(n,t+Math.max(.001,a)),e.setTargetAtTime(n*s,t+a,Math.max(.005,o/3)),i>t+a&&e.setTargetAtTime(0,i,Math.max(.004,c/4)),i+c+.04}var Fe=e=>Math.max(-1,Math.min(1,e));function Ie(e,t,n,r,i){let a=t;if(n.pan||n.panTo!==void 0){let o=e.ctx.createStereoPanner();o.pan.setValueAtTime(Fe(n.pan??0),r),n.panTo!==void 0&&o.pan.linearRampToValueAtTime(Fe(n.panTo),i),t.connect(o),a=o}if(a.connect(e.dest),n.verb&&e.verb){let t=e.ctx.createGain();t.gain.value=n.verb,a.connect(t),t.connect(e.verb)}}function Le(e,t,n){let r=e.ctx,i=t+(n.delay??0),a=r.createOscillator();Ae(r,a,n.wave);let o=a.frequency;if(o.setValueAtTime(n.f,i),n.arp&&n.arp.length){let e=n.arpStep??.03;for(let t=0,r=i;r<i+n.dur;t++,r+=e)o.setValueAtTime(n.f*2**(n.arp[t%n.arp.length]/12),r)}else n.to&&o.exponentialRampToValueAtTime(Math.max(1,n.to),i+(n.glide??n.dur));n.detune&&(a.detune.value=n.detune);let s=r.createGain(),c=Pe(s.gain,i,n.vol,n,i+n.dur);if(n.vib){let e=r.createOscillator();e.frequency.value=n.vibRate??5.5;let t=r.createGain(),o=i+(n.vibDelay??.1);t.gain.setValueAtTime(0,i),t.gain.setValueAtTime(0,o),t.gain.linearRampToValueAtTime(n.vib,o+.15),e.connect(t),t.connect(a.detune),e.start(i),e.stop(c)}return a.connect(s),Ie(e,s,n,i,c),a.start(i),a.stop(c),c}function Re(e,t,n){let r=e.ctx,i=t+(n.delay??0),a=r.createBufferSource();a.buffer=Me(n.kind??`hiss`,n.hold??1),a.loop=!0;let o=Math.random()*.9;n.rate&&(a.playbackRate.setValueAtTime(n.rate,i),n.rateTo&&a.playbackRate.exponentialRampToValueAtTime(n.rateTo,i+n.dur));let s=r.createGain(),c=Pe(s.gain,i,n.vol,n,i+n.dur);if(n.filter){let e=r.createBiquadFilter();e.type=n.filter,e.frequency.setValueAtTime(n.f??1e3,i),n.fTo&&e.frequency.exponentialRampToValueAtTime(n.fTo,i+(n.sweep??n.dur)),e.Q.value=n.q??.8,a.connect(e),e.connect(s)}else a.connect(s);return Ie(e,s,n,i,c),a.start(i,o),a.stop(c),c}var F=e=>440*2**((e-69)/12),ze=1,Be=.7,Ve=.7;function He(e,t=e.destination){let n=(t,n)=>{let r=e.createGain();return r.gain.value=t,r.connect(n),r},r=e.createDynamicsCompressor();r.threshold.value=-3,r.knee.value=0,r.ratio.value=20,r.attack.value=.002,r.release.value=.12,r.connect(t);let i=e.createDynamicsCompressor();i.threshold.value=-20,i.knee.value=12,i.ratio.value=2.2,i.attack.value=.01,i.release.value=.25,i.connect(r);let a=n(.72,i),o=e.createConvolver();o.buffer=Ne(e),o.connect(n(.55,a));let s=n(ze,a),c=n(ze,o),l=n(1,a),u=n(1,o),d=n(Be,l),f=n(Be,u),p=n(Ve,a);return{ctx:e,sfx:{ctx:e,dest:s,verb:c},music:{ctx:e,dest:d,verb:f},amb:{ctx:e,dest:p,verb:null},sfxGain:s,sfxSend:c,musicGain:d,musicSend:f,ambGain:p,duck:l,duckSend:u}}var Ue=new class{ctx=null;live=null;offline=null;cursor=null;sfxVol=1;musicVol=1;key={root:60,minor:!1};ready=[];unlock(){if(!this.ctx){let e=window.AudioContext??window.webkitAudioContext;if(!e)return;let t=new e({latencyHint:`interactive`});this.ctx=t,this.live=He(t),this.apply();for(let e of this.ready.splice(0))e()}document.hidden||this.resume()}graph(){return this.offline??this.live}now(){return this.cursor??this.ctx?.currentTime??0}running(){return this.offline?!0:!!this.ctx&&this.ctx.state===`running`}get sfxOut(){return this.live?.sfxGain??null}get musicOut(){return this.live?.musicGain??null}whenReady(e){this.ctx?e():this.ready.push(e)}get sfxOn(){return this.sfxVol>0}get musicOn(){return this.musicVol>0}setSfx(e){this.sfxVol=Math.max(0,Math.min(1,e)),this.apply(),this.idle()}setMusic(e){this.musicVol=Math.max(0,Math.min(1,e)),this.apply(),this.idle()}apply(){let e=this.live;if(!e)return;let t=e.ctx.currentTime,n=(e,n)=>e.gain.setTargetAtTime(n,t,.03),r=this.sfxVol*this.sfxVol,i=this.musicVol*this.musicVol;n(e.sfxGain,ze*r),n(e.sfxSend,ze*r),n(e.ambGain,Ve*r),n(e.musicGain,Be*i),n(e.musicSend,Be*i)}duck(e,t){let n=this.graph();if(!n)return;let r=this.now();for(let i of[n.duck,n.duckSend])i.gain.cancelScheduledValues(r),i.gain.setTargetAtTime(e,r,.03),i.gain.setTargetAtTime(1,r+t,.25)}idle(){this.ctx&&!document.hidden&&(!this.musicOn&&!this.sfxOn?this.suspend():this.resume())}suspend(){this.ctx&&this.ctx.state===`running`&&this.ctx.suspend()}resume(){this.ctx&&this.ctx.state===`suspended`&&(this.musicOn||this.sfxOn)&&this.ctx.resume()}},We=e=>e===void 0?0:Math.max(-1,Math.min(1,e/4))*.55,Ge=(e,t)=>e+Math.random()*(t-e),Ke=[0,2,4,7,9],qe=[0,3,5,7,10],Je={shoot0:3.163,shoot1:1.413,shoot2:1.175,shoot3:2.692,shoot4:1.072,shoot5:1.778,shoot6:.813,shoot7:1.174,shoot8:3.02,shoot9:2.317,shoot10:.408,shoot11:3.758,shoot12:2.163,shoot13:1.188,shoot14:.684,shoot15:3.982,shoot16:.502,shoot17:2.454,shoot18:.841,shoot19:.733,shoot20:.716,"die-pop":2.398,"die-bone":5.07,"die-slime":1.333,"die-big":1.071,"die-bat":7.244,"die-ghost":.881,"die-bug":3.199,arrow:1.462,sling:1.288,heal:.871,shit:2.265,ward:8.71,stone:1.884,splat:1.531,spit:2.239,sdie:2.114,gain:1.567,pickup:1.862,pump:2.163,gate:1.059,loss:1.035,trap:2.512,bhit:1.514,bbreak:1.318,catapult:1.778,zap:2.399,boom:.861,thud:1.397,roar0:1.905,roar1:.582,roar2:2.851,roar3:1.303,roar4:.966,roar5:1.758,roar6:1.189,heave:3.35,breath:1.189,fire:1.122,tentacles:.988,splash:1.319,skitter:3.981,cannon:.955,call:1.216,raise:1.109,shatter:1.698,bossDie:.933,tide:.933,wave:1.135,clear:1.23,evolve:1.202,relic:1.549,land:1.396,victory:1.567,defeat:1.66,star:1.972,click:1.928,reward:.841,coin:1.148,buy:1.059,upgrade:.902,card:1.303,deal:1.718,reroll:1.514,whoosh:2.113,hint:.708,thunder:.708},Ye=[.13,.12,.11,.075,.1,.1,.13,.16,.1,.13,.3,.12,.14,.16,.13,.15,.26,.12,.16,.22,.3],I=new class{last={};g=1;unlock(){Ue.unlock()}reset(){this.last={}}ok(e,t){if(!Ue.running()||!Ue.offline&&!Ue.sfxOn)return!1;let n=Ue.now();return(this.last[e]??-10)+t>n?!1:(this.last[e]=n,this.g=Je[e]??1,!0)}T(e){Le(Ue.graph().sfx,Ue.now(),{...e,vol:e.vol*this.g})}N(e){Re(Ue.graph().sfx,Ue.now(),{...e,vol:e.vol*this.g})}pent(e,t=5){let n=Ue.key,r=n.penta??(n.minor?qe:Ke),i=Math.floor(e/5);return 12*(t+1)+n.root%12+r[(e%5+5)%5]+12*i}home(){let e=Ue.key,t=72+(e.root+(e.minor?3:0))%12;return t>78?t-12:t}seq(e,t,n,r){for(let[i,a,o]of t)this.T({...r,f:F(e+i),dur:o*n,delay:(r.delay??0)+a*n})}shoot(e,t){if(!this.ok(`shoot`,Ye[e]??.12))return;this.g=Je[`shoot${e}`]??1;let n=We(t),r=Ge(-35,35),i=e=>this.T({pan:n,detune:r,...e}),a=e=>this.N({pan:n,...e});switch(e){case 0:a({dur:.08,vol:.13,filter:`bandpass`,f:900,fTo:2600,q:1.4,d:.07});break;case 1:i({wave:`tri`,f:560,to:300,dur:.07,vol:.12,d:.06}),a({kind:`metal`,rate:2,dur:.02,vol:.07,filter:`highpass`,f:3e3,d:.015});break;case 2:a({hold:3,dur:.07,vol:.12,filter:`bandpass`,f:1600,q:.7,d:.05}),i({wave:`tri`,f:300,to:120,dur:.06,vol:.07});break;case 3:a({hold:2,dur:.03,vol:.08,filter:`bandpass`,f:2600,q:.7,d:.022}),i({wave:`p12`,f:900,to:480,dur:.025,vol:.03});break;case 4:a({hold:2,dur:.08,vol:.12,filter:`bandpass`,f:2400,q:.6,d:.06}),i({wave:`p25`,f:140,to:60,dur:.07,vol:.06});break;case 5:i({wave:`p25`,f:1700,to:380,dur:.1,vol:.055,d:.09,s:.25});break;case 6:i({wave:`p50`,f:420,to:140,dur:.16,vol:.06,vib:90,vibRate:28,vibDelay:0,d:.15,s:.3}),a({dur:.1,vol:.035,filter:`lowpass`,f:900});break;case 7:i({wave:`p12`,f:1400,to:90,dur:.16,vol:.06,d:.15,s:.3}),a({hold:2,dur:.12,vol:.09,filter:`bandpass`,f:1800,fTo:400});break;case 8:i({wave:`p12`,f:1900,dur:.025,vol:.045,d:.02,s:.5}),i({wave:`p12`,f:2400,dur:.025,vol:.04,d:.02,s:.5,delay:.05});break;case 9:i({wave:`p25`,f:F(this.pent(0,6)),arp:[0,7,12,19],arpStep:.02,dur:.12,vol:.035,d:.12,s:.2,verb:.3});break;case 10:i({wave:`tri`,f:520,to:90,dur:.32,vol:.12,a:.03,d:.3,s:.4}),a({hold:8,dur:.3,vol:.06,filter:`lowpass`,f:600,fTo:150,a:.12});break;case 11:i({wave:`p12`,f:F(this.pent(2,6)),dur:.14,vol:.035,d:.12,verb:.35}),i({wave:`p12`,f:F(this.pent(4,6)),dur:.1,vol:.02,d:.1,delay:.03});break;case 12:a({dur:.14,vol:.075,filter:`bandpass`,f:700,fTo:3200,q:1.2}),i({wave:`p25`,f:600,to:1300,dur:.12,vol:.03,d:.12,s:.3});break;case 13:i({wave:`p50`,f:F(this.pent(0,5)),arp:[0,4,7,12],arpStep:.018,dur:.14,vol:.04,d:.14,s:.3,verb:.35});break;case 14:i({wave:`tri`,f:320,to:760,glide:.08,dur:.1,vol:.12,d:.1,s:.3}),i({wave:`tri`,f:320,to:760,glide:.08,dur:.1,vol:.045,d:.1,s:.3,delay:.11,pan:-n});break;case 15:a({kind:`metal`,rate:1.4,dur:.018,vol:.12,filter:`bandpass`,f:3e3,q:1.5,d:.015}),a({kind:`metal`,rate:.9,dur:.018,vol:.11,filter:`bandpass`,f:2200,q:1.5,d:.015,delay:.09});break;case 16:a({hold:10,dur:.25,vol:.15,filter:`lowpass`,f:1400,fTo:300,d:.22}),i({wave:`tri`,f:200,to:60,dur:.22,vol:.12}),a({dur:.2,vol:.025,filter:`highpass`,f:5e3,a:.03,delay:.05});break;case 17:i({wave:`p12`,f:F(this.pent(1,5)),dur:.13,vol:.04,vib:180,vibRate:22,vibDelay:0,d:.13,s:.4});break;case 18:a({dur:.18,vol:.025,filter:`highpass`,f:3e3,a:.05,d:.13}),i({wave:`p50`,f:F(this.pent(0,6)),arp:[0,4,7],arpStep:.03,dur:.18,vol:.04,a:.04,d:.14,verb:.5});break;case 19:i({wave:`p50`,f:260,to:90,dur:.2,vol:.07,d:.18,s:.3}),a({hold:4,dur:.18,vol:.1,filter:`lowpass`,f:1800,fTo:400});break;default:{let e=this.home()-12;for(let t of[0,4,7])i({wave:`p50`,f:F(e+t),dur:.3,vol:.022,a:.04,d:.3,s:.6,r:.15,vib:15,verb:.5})}}}catapult(e){if(!this.ok(`catapult`,.3))return;let t=We(e);this.T({wave:`tri`,f:520,to:260,dur:.08,vol:.1,pan:t}),this.N({dur:.3,vol:.06,filter:`bandpass`,f:400,fTo:1200,q:1.5,a:.06,pan:t,panTo:0})}enemyDie(e=`pop`,t,n=0){if(!this.ok(e===`big`?`edieBig`:`edie`,e===`big`?.08:.04))return;this.g=Je[`die-${e}`]??1;let r=We(t),i=Math.floor(n/4)%14,a=F(this.pent(i<8?i:14-i,5));switch(e){case`bone`:this.N({kind:`metal`,rate:1.6,dur:.025,vol:.07,filter:`bandpass`,f:3e3,q:2,d:.02,pan:r}),this.N({kind:`metal`,rate:1.2,dur:.025,vol:.05,filter:`bandpass`,f:2200,q:2,d:.02,delay:.03,pan:r}),this.T({wave:`p25`,f:a,to:a*.6,glide:.05,dur:.05,vol:.035,d:.045,pan:r});break;case`slime`:this.T({wave:`tri`,f:a,to:a/2,dur:.08,vol:.12,d:.07,pan:r}),this.N({hold:3,dur:.06,vol:.05,filter:`lowpass`,f:1400,fTo:300,pan:r});break;case`big`:this.T({wave:`p50`,f:a*.75,to:a*.375,dur:.12,vol:.08,d:.1,pan:r}),this.N({hold:6,dur:.14,vol:.1,filter:`lowpass`,f:1300,fTo:350,pan:r});break;case`bat`:this.T({wave:`p12`,f:a*3,to:a*4,dur:.04,vol:.035,d:.035,pan:r});break;case`ghost`:this.T({wave:`p50`,f:a,to:a*.5,dur:.16,vol:.04,a:.02,d:.15,s:.4,vib:40,vibDelay:0,pan:r,verb:.4});break;case`bug`:this.N({kind:`metal`,rate:2.2,dur:.03,vol:.05,filter:`highpass`,f:3500,d:.025,pan:r}),this.T({wave:`p12`,f:a*2,to:a,dur:.035,vol:.03,d:.03,pan:r});break;default:this.T({wave:`p25`,f:a,to:a*.6,glide:.05,dur:.05,vol:.07,d:.045,pan:r}),this.N({hold:2,dur:.02,vol:.04,filter:`highpass`,f:1500,d:.015,pan:r})}}arrow(e){if(!this.ok(`arrow`,.12))return;let t=We(e);this.T({wave:`tri`,f:600,to:380,dur:.08,vol:.1,d:.07,pan:t}),this.N({dur:.14,vol:.06,filter:`bandpass`,f:3200,fTo:1800,q:4,a:.02,pan:t,panTo:0})}sling(e){if(!this.ok(`sling`,.2))return;let t=We(e);for(let e=0;e<3;e++)this.N({dur:.06,vol:.03+.012*e,filter:`bandpass`,f:700+250*e,q:2,a:.02,delay:e*.07,pan:t});this.T({wave:`tri`,f:420,to:260,dur:.05,vol:.07,delay:.21,pan:t})}heal(e){this.ok(`heal`,.4)&&this.T({wave:`p50`,f:F(76),arp:[0,2,4,6,8,10,12],arpStep:.035,dur:.26,vol:.035,d:.3,s:.6,vib:20,pan:We(e),verb:.4})}shieldHit(e){if(!this.ok(`shit`,.07))return;let t=We(e);this.T({wave:`tri`,f:420,to:300,dur:.05,vol:.11,d:.045,pan:t}),this.N({hold:2,dur:.025,vol:.05,filter:`bandpass`,f:1400,d:.02,pan:t})}wardHit(e){this.ok(`ward`,.09)&&this.T({wave:`p12`,f:Ge(2e3,2600),dur:.05,vol:.022,d:.045,pan:We(e),verb:.3})}explode(e,t=1){if(!this.ok(`boom`,.09))return;let n=We(e);this.N({hold:6+t*4,dur:.25+.15*t,vol:.16+.04*t,filter:`lowpass`,f:1600,fTo:180,d:.22+.2*t,pan:n}),this.N({hold:3,dur:.15+.1*t,vol:.08,filter:`bandpass`,f:900,q:.7,d:.12+.1*t,pan:n}),this.T({wave:`tri`,f:180,to:45,dur:.2+.1*t,vol:.14,d:.2+.1*t,pan:n}),this.N({dur:.04,vol:.06,filter:`highpass`,f:3e3,d:.03,pan:n})}thud(e){if(!this.ok(`thud`,.2))return;let t=We(e);this.T({wave:`tri`,f:160,to:50,dur:.22,vol:.16,d:.2,pan:t}),this.T({wave:`tri`,f:420,to:200,dur:.04,vol:.08,pan:t}),this.N({hold:12,dur:.25,vol:.13,filter:`lowpass`,f:1100,fTo:200,d:.2,pan:t}),this.N({hold:3,dur:.06,vol:.05,filter:`bandpass`,f:1500,delay:.03,pan:t})}stone(e){if(!this.ok(`stone`,.1))return;let t=We(e);this.T({wave:`tri`,f:500,to:250,dur:.05,vol:.12,d:.045,pan:t}),this.N({hold:5,dur:.07,vol:.06,filter:`lowpass`,f:1500,d:.06,pan:t})}zap(e){if(!this.ok(`zap`,.09))return;let t=We(e);this.T({wave:`p12`,f:1200,arp:[0,7,-5,12,3,-12],arpStep:.012,dur:.09,vol:.04,d:.09,s:.4,pan:t}),this.N({kind:`metal`,rate:3,dur:.07,vol:.04,filter:`highpass`,f:4e3,d:.06,pan:t})}blockHit(e,t=1){if(!this.ok(`bhit`,.06))return;let n=We(e),r=F(this.pent(Math.round((1-t)*6),5));this.T({wave:`tri`,f:r,dur:.045,vol:.13,d:.04,pan:n}),this.T({wave:`p50`,f:r,dur:.03,vol:.025,d:.025,pan:n}),this.N({hold:2,dur:.015,vol:.04,filter:`bandpass`,f:2500,d:.012,pan:n})}blockBreak(e=`block`,t){if(!this.ok(`bbreak`,.05))return;let n=We(t);this.N({hold:4,dur:.14,vol:.14,filter:`bandpass`,f:1800,fTo:600,q:.8,d:.12,pan:n});for(let e=0;e<3;e++)this.N({kind:`metal`,rate:Ge(1,2),dur:.015,vol:.03,filter:`highpass`,f:2500,delay:.05+e*Ge(.03,.05),pan:n});if(e===`shield`){this.N({kind:`metal`,rate:.6,dur:.12,vol:.05,filter:`bandpass`,f:1e3,q:3,d:.1,pan:n});return}let r=F(this.pent(5,5));if(this.T({wave:`p50`,f:r,to:r*1.5,glide:.04,dur:.07,vol:.05,d:.06,pan:n}),e===`big`&&this.T({wave:`tri`,f:130,to:55,dur:.18,vol:.18,pan:n}),e===`chest`){this.T({wave:`p12`,f:220,to:330,dur:.12,vol:.03,vib:60,vibRate:30,vibDelay:0,pan:n});for(let e=0;e<6;e++)this.T({wave:`p25`,f:F(this.pent(5+e,5)),dur:.08,vol:.05,d:.08,delay:.1+e*.045,pan:n,verb:.25});this.N({kind:`metal`,rate:1.8,dur:.35,vol:.03,filter:`highpass`,f:6e3,a:.05,delay:.15})}}gain(e=1,t){if(!this.ok(`gain`,.1))return;let n=We(t),r=e>=50?4:3;for(let e=0;e<r;e++)this.T({wave:`p25`,f:F(this.pent(2*e,5)),dur:.06,vol:.06,d:.06,s:.3,delay:e*.045,pan:n})}pickup(e,t=0,n=1){if(!this.ok(`pickup`,.045))return;let r=We(e),i=t%10,a=F(this.pent(i,5)),o=F(this.pent(i+2,5));this.T({wave:`p25`,f:a,dur:.035,vol:.05,d:.03,s:.5,pan:r}),this.T({wave:`p25`,f:o,dur:.09,vol:.05,d:.09,s:.3,delay:.035,pan:r,verb:.2}),n>=10&&this.T({wave:`p12`,f:F(this.pent(i+5,5)),arp:[0,7,12],arpStep:.025,dur:.12,vol:.025,delay:.06,pan:r,verb:.3})}pump(e,t=0){if(!this.ok(`pump`,.12))return;let n=Math.min(9,Math.floor(t/2));this.T({wave:`p50`,f:F(this.pent(n,5)),dur:.035,vol:.05,d:.03,s:.3,pan:We(e)})}gate(e,t){if(!this.ok(`gate`,.25))return;let n=We(t),r=e?10:6;for(let e=0;e<r;e++)this.T({wave:`p50`,f:F(this.pent(e,5)),dur:.05,vol:.045,d:.06,s:.3,delay:e*.028,pan:n});this.N({dur:.3,vol:.03,filter:`highpass`,f:6e3,a:.08,delay:.05})}loss(e){if(!this.ok(`loss`,.25))return;let t=We(e);this.T({wave:`p25`,f:F(67),dur:.1,vol:.07,d:.1,s:.6,pan:t}),this.T({wave:`p25`,f:F(63),to:F(61),dur:.26,vol:.07,d:.25,s:.6,vib:30,delay:.12,pan:t}),this.N({hold:4,dur:.2,vol:.05,filter:`lowpass`,f:900,delay:.12})}soldierDie(e){if(!this.ok(`sdie`,.08))return;let t=We(e),n=Ge(420,470);this.T({wave:`p25`,f:n,to:n/2,dur:.09,vol:.05,d:.08,pan:t}),this.N({hold:3,dur:.06,vol:.05,filter:`lowpass`,f:1500,pan:t})}trap(e){if(!this.ok(`trap`,.15))return;let t=We(e);this.N({kind:`metal`,rate:1.2,dur:.07,vol:.16,filter:`bandpass`,f:3500,q:1.5,d:.06,pan:t}),this.T({wave:`p12`,f:1500,to:900,dur:.05,vol:.06,pan:t}),this.N({hold:2,dur:.04,vol:.08,filter:`bandpass`,f:1200,d:.035,pan:t})}bossRoar(e){if(!this.ok(`boss`,1))return;this.g=Je[`roar${e}`]??1;let t=e=>this.T(e),n=e=>this.N(e);switch(e){case 0:t({wave:`p12`,f:130,to:95,dur:1,vol:.1,vib:90,vibRate:9,vibDelay:0,a:.05,d:.3,s:.7,r:.3}),t({wave:`p50`,f:260,to:190,dur:.9,vol:.04,vib:90,vibRate:9,vibDelay:0,a:.05,d:.3,s:.7,r:.3}),n({hold:4,dur:1,vol:.1,filter:`bandpass`,f:350,fTo:250,q:1.5,a:.05,d:.3,s:.7,r:.3});for(let e of[1.15,1.55])t({wave:`tri`,f:130,to:50,dur:.22,vol:.16,delay:e}),n({hold:14,dur:.22,vol:.12,filter:`lowpass`,f:900,delay:e});break;case 1:n({hold:20,dur:1.4,vol:.16,filter:`lowpass`,f:900,fTo:250,a:.2,d:.4,s:.8,r:.4}),n({hold:6,dur:1.2,vol:.06,filter:`bandpass`,f:600,q:1.2,a:.2,d:.4,s:.7,r:.4}),n({hold:2,dur:.08,vol:.1,filter:`highpass`,f:2e3,d:.06}),t({wave:`tri`,f:110,dur:1.2,vol:.12,vib:20,a:.2,d:.3,s:.8,r:.4}),t({wave:`p50`,f:220,dur:1.1,vol:.04,a:.3,d:.3,s:.8,r:.4});for(let e=0;e<6;e++)n({hold:3,dur:.04,vol:.05,filter:`bandpass`,f:Ge(800,1800),delay:.3+e*Ge(.1,.2),pan:Ge(-.5,.5)});break;case 2:for(let e of[0,3,6,9])t({wave:`p25`,f:F(57+e),dur:1.2,vol:.026,a:.3,d:.4,s:.8,r:.4,vib:35,vibRate:7,vibDelay:.2,verb:.6});n({dur:1.5,vol:.06,filter:`bandpass`,f:400,fTo:1400,q:5,a:.4,d:.5,s:.6,r:.4}),[69,67,65,64].forEach((e,n)=>t({wave:`p25`,f:F(e),dur:.09,vol:.05,d:.08,s:.5,vib:60,vibRate:14,vibDelay:0,delay:1+n*.13,verb:.4}));break;case 3:t({wave:`p12`,f:120,to:230,dur:.25,vol:.09,vib:70,vibRate:14,vibDelay:0,a:.06,d:.1,s:1}),t({wave:`p12`,f:230,to:105,dur:.95,vol:.1,vib:70,vibRate:14,vibDelay:0,d:.4,s:.7,r:.3,delay:.25}),n({hold:3,dur:1.2,vol:.12,filter:`bandpass`,f:600,fTo:1300,sweep:.4,q:.8,a:.1,d:.5,s:.6,r:.3});for(let e of[1.3,1.65])n({hold:6,dur:.22,vol:.12,filter:`lowpass`,f:600,fTo:200,a:.06,delay:e});break;case 4:t({wave:`tri`,f:110,to:80,dur:1.4,vol:.14,vib:40,vibRate:3,a:.3,d:.4,s:.8,r:.4}),t({wave:`p50`,f:220,to:165,dur:1.2,vol:.05,a:.3,d:.4,s:.8,r:.4,vib:40,vibRate:3});for(let e=0;e<10;e++){let n=Ge(200,600);t({wave:`tri`,f:n,to:n*1.8,dur:.04,vol:.06,delay:.1+e*Ge(.08,.13),pan:Ge(-.6,.6)})}n({dur:.5,vol:.13,filter:`lowpass`,f:3e3,fTo:300,d:.4,delay:1.3});break;case 5:n({dur:.8,vol:.08,filter:`bandpass`,f:4e3,q:.8,a:.1,d:.3,s:.7,r:.2}),t({wave:`p12`,f:1800,to:2400,dur:.3,vol:.02,vib:300,vibRate:30,vibDelay:0});for(let e=0;e<20;e++)n({kind:`metal`,rate:Ge(1.5,2.5),dur:.012,vol:.05,filter:`highpass`,f:3e3,delay:.5+e*Ge(.03,.06),pan:Ge(-.7,.7)});break;default:this.horn(50,57,0,.09);for(let e=0;e<6;e++)t({wave:`tri`,f:220,to:110,dur:.12,vol:.14,delay:.95+e*.08});n({hold:10,dur:.4,vol:.18,filter:`lowpass`,f:1500,fTo:250,d:.35,delay:1.45}),t({wave:`tri`,f:160,to:50,dur:.35,vol:.14,delay:1.45})}}horn(e,t,n,r){for(let[i,a,o]of[[e,0,.42],[t,.45,.7]])this.T({wave:`p25`,f:F(i-1),to:F(i),glide:.06,dur:o,vol:r,a:.05,d:.2,s:.75,r:.15,vib:18,vibDelay:.2,delay:n+a,verb:.3}),this.T({wave:`tri`,f:F(i-12),dur:o,vol:r*.8,a:.05,d:.2,s:.8,r:.15,delay:n+a})}heave(e){if(!this.ok(`heave`,.5))return;let t=We(e);this.T({wave:`p50`,f:180,to:260,dur:.18,vol:.05,vib:40,vibRate:12,vibDelay:0,pan:t}),this.N({dur:.35,vol:.07,filter:`bandpass`,f:300,fTo:900,q:1.5,a:.1,pan:t,panTo:0})}breath(e){if(!this.ok(`breath`,.8))return;let t=We(e);this.T({wave:`p12`,f:160,to:110,dur:.7,vol:.07,vib:60,vibRate:12,vibDelay:0,a:.05,d:.3,s:.7,pan:t}),this.N({hold:3,dur:.9,vol:.12,filter:`bandpass`,f:400,fTo:1600,sweep:.4,q:.8,a:.1,d:.4,s:.6,pan:t,panTo:0})}fire(e){if(!this.ok(`fire`,.3))return;let t=We(e);this.N({hold:2,dur:.6,vol:.13,filter:`bandpass`,f:500,fTo:1500,q:.7,a:.03,d:.4,s:.5,pan:t}),this.T({wave:`tri`,f:90,to:50,dur:.4,vol:.14,pan:t});for(let e=0;e<8;e++)this.N({kind:`metal`,rate:Ge(.8,2),dur:.012,vol:.05,filter:`highpass`,f:2e3,delay:Ge(.05,.6),pan:t+Ge(-.3,.3)})}tentacles(e){if(!this.ok(`tentacles`,.8))return;let t=We(e);this.N({dur:.8,vol:.09,filter:`lowpass`,f:300,fTo:1800,a:.5,d:.2,s:.8,pan:t}),this.T({wave:`tri`,f:140,to:110,dur:.8,vol:.1,vib:30,vibRate:3,a:.2,d:.3,s:.7,pan:t})}splash(e){if(!this.ok(`splash`,.15))return;let t=We(e);this.N({dur:.5,vol:.16,filter:`lowpass`,f:3e3,fTo:300,d:.4,pan:t}),this.T({wave:`tri`,f:100,to:40,dur:.3,vol:.2,pan:t});for(let e=0;e<5;e++){let e=Ge(300,700);this.T({wave:`tri`,f:e,to:e*1.6,dur:.03,vol:.05,delay:Ge(.1,.45),pan:t+Ge(-.3,.3)})}}spit(e){if(!this.ok(`spit`,.3))return;let t=We(e);this.N({hold:2,dur:.1,vol:.08,filter:`bandpass`,f:2e3,fTo:700,q:3,pan:t}),this.T({wave:`tri`,f:700,to:350,dur:.07,vol:.07,pan:t})}splat(e){if(!this.ok(`splat`,.1))return;let t=We(e);this.N({hold:4,dur:.12,vol:.09,filter:`lowpass`,f:1400,fTo:300,pan:t}),this.T({wave:`tri`,f:320,to:160,dur:.08,vol:.09,pan:t})}skitter(e){if(!this.ok(`skitter`,.8))return;let t=We(e);for(let e=0;e<16;e++)this.N({kind:`metal`,rate:Ge(1.5,2.6),dur:.012,vol:.05,filter:`bandpass`,f:3500,q:1,delay:e*Ge(.025,.05),pan:t+Ge(-.4,.4)})}cannon(e){if(!this.ok(`cannon`,.8))return;let t=We(e);for(let e=0;e<3;e++)this.N({hold:8,dur:.3,vol:.14,filter:`lowpass`,f:1400,fTo:220,d:.25,delay:e*.3,pan:t}),this.T({wave:`tri`,f:150,to:55,dur:.22,vol:.14,delay:e*.3,pan:t})}call(e){if(!this.ok(`call`,.8))return;let t=We(e);this.T({wave:`p25`,f:F(54),to:F(55),glide:.05,dur:.14,vol:.06,d:.1,s:.7,pan:t}),this.T({wave:`p25`,f:F(61),to:F(62),glide:.05,dur:.3,vol:.06,d:.2,s:.7,vib:20,delay:.16,pan:t,verb:.3})}raise(e){if(!this.ok(`raise`,.8))return;let t=We(e);this.T({wave:`p25`,f:F(64),arp:[0,-1,-2,-3,-4,-5,-6],arpStep:.06,dur:.45,vol:.04,d:.4,s:.7,vib:25,pan:t,verb:.5}),this.T({wave:`tri`,f:F(52),dur:.5,vol:.08,a:.1,d:.3,s:.6,pan:t}),this.N({dur:.6,vol:.05,filter:`bandpass`,f:500,fTo:2500,q:3,a:.2,pan:t});for(let e=0;e<10;e++)this.N({kind:`metal`,rate:Ge(1.2,2),dur:.02,vol:.05,filter:`bandpass`,f:2800,q:2,delay:.1+e*Ge(.03,.06),pan:t+Ge(-.5,.5)})}shatter(e){if(!this.ok(`shatter`,.5))return;let t=We(e);this.N({kind:`metal`,rate:2,dur:.3,vol:.08,filter:`highpass`,f:3e3,d:.25,pan:t});for(let e=0;e<8;e++)this.T({wave:`p12`,f:Ge(2500,4200),dur:.04,vol:.025,delay:Ge(0,.35),pan:t+Ge(-.4,.4),verb:.3});this.T({wave:`p25`,f:1600,to:200,dur:.25,vol:.05,d:.25,s:.4,pan:t})}bossDie(e){if(!this.ok(`bossDie`,1))return;let t=We(e);this.N({hold:14,dur:.9,vol:.22,filter:`lowpass`,f:1800,fTo:120,d:.7,pan:t}),this.N({hold:3,dur:.5,vol:.1,filter:`bandpass`,f:800,q:.7,d:.4,pan:t}),this.T({wave:`tri`,f:180,to:50,dur:.6,vol:.15,pan:t}),this.N({dur:.06,vol:.08,filter:`highpass`,f:3e3,pan:t});let n=this.home();this.seq(n,[[-5,0,1],[0,1,1],[4,2,1],[7,3,6]],.08,{wave:`p25`,vol:.06,d:.2,s:.6,r:.2,vib:18,delay:.45,verb:.35}),this.seq(n-12,[[0,3,6]],.08,{wave:`tri`,vol:.07,d:.3,s:.7,r:.2,delay:.45}),Ue.duck(.35,1.2)}tide(){if(this.ok(`tide`,1)){Ue.duck(.4,1.6),this.horn(52,53,0,.09),this.N({hold:16,dur:1.6,vol:.12,filter:`lowpass`,f:600,a:.3,d:.5,s:.8,r:.4});for(let e=0;e<18;e++)this.N({hold:10,dur:.06,vol:.07,filter:`lowpass`,f:1e3,delay:.2+e*.075+Ge(0,.02),pan:Ge(-.6,.6)})}}waveStart(){if(!this.ok(`wave`,.5))return;let e=this.home();for(let e=0;e<3;e++)this.N({hold:2,dur:.05,vol:.05+.02*e,filter:`bandpass`,f:2e3,d:.04,delay:e*.06});this.seq(e,[[-5,0,1],[0,1,3]],.12,{wave:`p25`,vol:.06,a:.02,d:.15,s:.7,r:.12,vib:16,delay:.18,verb:.3}),this.seq(e,[[-12,1,3]],.12,{wave:`tri`,vol:.06,d:.2,s:.7,delay:.18})}waveClear(){if(!this.ok(`clear`,.5))return;Ue.duck(.45,.9);let e=this.home();this.seq(e,[[0,0,1],[4,1,1],[7,2,1],[12,3,6]],.075,{wave:`p25`,vol:.065,d:.15,s:.6,r:.15,vib:15,verb:.3}),this.seq(e,[[-5,0,1],[0,1,1],[4,2,1],[7,3,6]],.075,{wave:`p12`,vol:.03,d:.15,s:.6,r:.15}),this.seq(e-12,[[0,3,6]],.075,{wave:`tri`,vol:.06,d:.3,s:.7}),this.N({dur:.7,vol:.035,filter:`highpass`,f:6e3,d:.6,delay:.225}),this.T({wave:`p25`,f:F(e+23),dur:.05,vol:.04,delay:.5,verb:.3}),this.T({wave:`p25`,f:F(e+28),dur:.25,vol:.04,d:.25,delay:.555,verb:.3})}evolve(){if(!this.ok(`evolve`,.6))return;Ue.duck(.3,1.3);let e=this.home(),t=[0,2,4,7,9,12,14,16,19,21,24];t.forEach((t,n)=>this.T({wave:`p25`,f:F(e-12+t),dur:.04,vol:.05,d:.05,s:.5,delay:n*.032}));let n=t.length*.032;for(let t of[0,4,7,12])this.T({wave:t===12?`p25`:`p50`,f:F(e+t),dur:.6,vol:.035,a:.01,d:.3,s:.6,r:.25,vib:18,delay:n,verb:.4});this.T({wave:`tri`,f:F(e-12),dur:.6,vol:.07,d:.3,s:.7,r:.25,delay:n}),this.N({dur:.8,vol:.04,filter:`highpass`,f:5e3,a:.05,d:.6,delay:n})}relic(){if(!this.ok(`relic`,1))return;Ue.duck(.35,1.5);let e=this.home();this.seq(e,[[0,0,1],[4,1,1],[7,2,1],[11,3,1],[16,4,8]],.09,{wave:`p12`,vol:.05,d:.25,s:.5,r:.3,vib:14,verb:.5}),this.seq(e,[[0,1,1],[4,2,1],[7,3,1],[11,4,8]],.09,{wave:`p12`,vol:.02,d:.25,s:.5,r:.3,pan:.5}),this.seq(e-12,[[0,4,8]],.09,{wave:`tri`,vol:.05,d:.4,s:.7,r:.3}),this.N({dur:1,vol:.035,filter:`highpass`,f:6500,a:.3,d:.5,delay:.3})}land(){if(!this.ok(`land`,1))return;Ue.duck(.4,1.8);let e=this.home();for(let t=0;t<11;t++)this.T({wave:`tri`,f:F(e-12+[0,2,4,7,9][t%5]+12*Math.floor(t/5)),dur:.12,vol:.09,d:.12,delay:t*.03,pan:-.5+t*.1});this.seq(e,[[0,0,2],[7,2,2],[12,4,2],[11,6,1],[12,7,8]],.11,{wave:`p25`,vol:.05,a:.02,d:.2,s:.65,r:.25,vib:16,delay:.4,verb:.4}),this.seq(e-12,[[0,0,4],[5,4,3],[0,7,8]],.11,{wave:`tri`,vol:.06,d:.3,s:.7,r:.25,delay:.4}),this.N({dur:1.4,vol:.04,filter:`bandpass`,f:500,fTo:1500,q:.7,a:.5,d:.5,s:.5})}victory(){if(!this.ok(`victory`,1))return;Ue.duck(.15,2.6);let e=this.home(),t=.12;this.seq(e,[[-5,0,.8],[-5,1,.8],[-5,2,.8],[0,3,4],[-3,7,1.5],[-1,8.5,1.5],[0,10,9]],t,{wave:`p25`,vol:.07,a:.01,d:.12,s:.7,r:.2,vib:16,vibDelay:.15,verb:.3}),this.seq(e,[[-8,0,.8],[-8,1,.8],[-8,2,.8],[-8,3,4],[-7,7,1.5],[-5,8.5,1.5],[-5,10,9]],t,{wave:`p50`,vol:.03,a:.01,d:.12,s:.7,r:.2,pan:.3}),this.seq(e-12,[[-12,3,4],[-7,7,1.5],[-5,8.5,1.5],[0,10,9]],t,{wave:`tri`,vol:.07,d:.2,s:.8,r:.2});for(let e=0;e<6;e++)this.N({hold:2,dur:.04,vol:.03+.008*e,filter:`bandpass`,f:2200,d:.035,delay:e*.06});for(let e of[3,10])this.N({dur:.9,vol:.045,filter:`highpass`,f:5e3,d:.8,delay:e*t});[12,16,19,24].forEach((t,n)=>this.T({wave:`p12`,f:F(e+t),dur:.08,vol:.03,delay:1.95+n*.04,verb:.4}))}defeat(){if(!this.ok(`defeat`,1))return;Ue.duck(.15,2.8);let e=this.home()-3,t=.2;this.seq(e,[[3,0,2],[2,2,1],[0,3,1],[-1,4,2],[0,6,6]],t,{wave:`p25`,vol:.06,a:.02,d:.2,s:.7,r:.4,vib:22,vibDelay:.2,verb:.4}),this.seq(e,[[-5,0,2],[-7,2,2],[-10,4,2],[-9,6,6]],t,{wave:`p50`,vol:.025,a:.03,d:.2,s:.7,r:.4,pan:.3}),this.seq(e-12,[[0,0,2],[-4,2,2],[-5,4,2],[0,6,7]],t,{wave:`tri`,vol:.07,d:.3,s:.8,r:.4}),this.T({wave:`tri`,f:140,to:60,dur:.3,vol:.1})}star(e){if(!this.ok(`star${e}`,.2))return;this.g=Je.star??1;let t=this.home()+[0,4,7][e]+12;this.T({wave:`p25`,f:F(t),dur:.14,vol:.06,d:.14,s:.4,verb:.35}),this.T({wave:`p12`,f:F(t+12),arp:[0,7,12],arpStep:.03,dur:.12,vol:.025,delay:.05,verb:.4})}click(){this.ok(`click`,.03)&&(this.T({wave:`p50`,f:1250,dur:.018,vol:.05,d:.015,s:.3}),this.T({wave:`p12`,f:2500,dur:.012,vol:.02,d:.01}))}reward(){if(this.ok(`reward`,.5))for(let e=0;e<5;e++)this.T({wave:`p25`,f:F(83+e%2*2),dur:.05,vol:.045,delay:e*.09}),this.T({wave:`p25`,f:F(88+e%2*2),dur:.16,vol:.045,d:.16,delay:e*.09+.05,verb:.25})}coin(){this.ok(`coin`,.12)&&(this.T({wave:`p25`,f:F(83),dur:.05,vol:.05}),this.T({wave:`p25`,f:F(88),dur:.25,vol:.05,d:.25,delay:.055,verb:.25}))}buy(){this.ok(`buy`,.15)&&(this.N({kind:`metal`,rate:1.5,dur:.05,vol:.06,filter:`highpass`,f:3e3,d:.04}),this.T({wave:`p25`,f:F(83),dur:.06,vol:.05,delay:.03}),this.T({wave:`p25`,f:F(88),dur:.25,vol:.05,d:.25,delay:.09,verb:.3}))}upgrade(){this.ok(`upgrade`,.15)&&([0,4,7,12].forEach((e,t)=>this.T({wave:`p25`,f:F(72+e),dur:t===3?.22:.05,vol:.05,d:t===3?.22:.05,s:.4,delay:t*.05,verb:t===3?.3:0})),this.N({dur:.3,vol:.025,filter:`highpass`,f:6e3,a:.05,delay:.15}))}card(){if(!this.ok(`card`,.1))return;let e=this.home();this.T({wave:`p25`,f:F(e),arp:[0,4,7,12,16],arpStep:.03,dur:.16,vol:.06,d:.16,s:.4,verb:.3}),this.N({dur:.2,vol:.04,filter:`bandpass`,f:1500,fTo:6e3,q:1,a:.04})}deal(){if(this.ok(`deal`,.3))for(let e=0;e<3;e++)this.N({dur:.06,vol:.06,filter:`bandpass`,f:2500,fTo:5e3,q:1.2,a:.005,d:.05,delay:e*.08,pan:(e-1)*.4})}reroll(){if(this.ok(`reroll`,.3)){for(let e=0;e<6;e++)this.N({dur:.04,vol:.05,filter:`bandpass`,f:Ge(2500,4e3),q:1.2,d:.035,delay:e*.045,pan:Ge(-.4,.4)});this.deal()}}whoosh(){this.ok(`whoosh`,.3)&&this.N({dur:.4,vol:.08,filter:`bandpass`,f:300,fTo:2400,q:1.2,a:.15,d:.2,pan:-.6,panTo:.6})}hint(){if(!this.ok(`hint`,.3))return;let e=this.home();this.T({wave:`p50`,f:F(e+12),dur:.08,vol:.04,d:.08,s:.5}),this.T({wave:`p50`,f:F(e+19),dur:.16,vol:.04,d:.16,s:.5,delay:.09,verb:.4})}thunder(){if(!this.ok(`thunder`,2))return;let e=Ge(-.7,.7);this.N({dur:.15,vol:.12,filter:`highpass`,f:2e3,a:.001,d:.1,pan:e}),this.N({hold:24,dur:2.6,vol:.24,filter:`lowpass`,f:600,fTo:120,a:.04,d:1.2,s:.3,r:1,delay:.08,pan:e}),this.N({hold:60,dur:1.6,vol:.15,filter:`lowpass`,f:200,a:.2,d:.8,s:.4,r:.6,delay:.5,pan:-e}),this.N({hold:6,dur:2.2,vol:.06,filter:`bandpass`,f:500,fTo:250,q:.7,a:.05,d:1,s:.3,r:.8,delay:.1,pan:e})}},Xe=!0;function Ze(e){Xe=e}function Qe(e){if(Xe)try{if(navigator.userActivation&&!navigator.userActivation.hasBeenActive)return;navigator.vibrate?.(e)}catch{}}var $e=[`c`,`c+`,`d`,`e-`,`e`,`f`,`f+`,`g`,`a-`,`a`,`b-`,`b`],et={C:0,D:2,E:4,F:5,G:7,A:9,B:11};function tt(e){let t=/^([A-G])(#|b)?(-?\d)$/.exec(e);if(!t)throw Error(`bad note "${e}"`);return 12*(Number(t[3])+1)+et[t[1]]+(t[2]===`#`?1:t[2]===`b`?-1:0)}var nt=e=>`o${Math.floor(e/12)-1} ${$e[e%12]}`,rt=(e,t)=>e.map(e=>`${nt(e)}${t}`).join(` `),L=(e,t)=>rt(e.split(` `).map(tt),t);function it(e,t,n=8){let r=e.split(` `).map(tt);return rt(t.map(e=>r[e%r.length]+12*Math.floor(e/r.length)),n)}var at=(e,t)=>`(${e.split(` `).map(e=>nt(tt(e))).join(` `)})${t}`,ot=(e,t,n=1)=>Array(n).fill(`{${e.split(` `).map(e=>nt(tt(e))).join(` `)}}${t}`).join(` `),st=(e,t=e)=>`r8 {${e}}8 r8 {${e}}8 r8 {${t}}8 r8 {${t}}8 |`,ct={menu:(()=>{let e=`e g >c`,t=`e a >c`,n=`f a >c`,r=`d g b`,i=`d f g b`;return{title:`Tiny Legion March`,bpm:116,key:60,minor:!1,bars:26,intro:2,ch:[{inst:`lead`,pan:-.12,echo:{delay:3,vol:.22,pan:.35},mml:`o5 l8 v13
          r1 | r1 |
          ; A
          e e16 f16 g4 e c d4 | e e16 d16 c4 <a >c e4 | f f16 g16 a4 g f e d | d4. <g b4 >d4 |
          e e16 f16 g4 >c d c <g | a g16 f16 e4 c d e4 | d f a f g f e d | c4 <g >c c2 |
          ; A'
          e e16 f16 g4 e c d4 | e e16 d16 c4 <a >c e4 | f f16 g16 a4 g f e d | d4. <g b4 >d4 |
          e e16 f16 g4 >c d c <g | a g16 f16 e4 c d e4 | a g f a g f e d | c4 e g >c4 r4 < |
          ; B
          a4. g f4 c4 | d4. e f4 d4 | g4. f+ e4 <b4 > | c4. d e2 |
          a4. g f4 a4 | b4. a g4 b4 | >c4 <b a e4 a4 | g f e d <b g b >d |`},{inst:`harm`,pan:.2,mml:`o4 l8 v9
          r1 | r1 |
          [r1 |]8
          g2 e2 | a2 e2 | a2 >c2< | b2 >d2< | >c2< g2 | a2 >c2< | a2 b2 | >c2< r2 |
          o5 f4. c d4 <a4 > | <b4. a >d4 <b4 > | e4. d <b4 g4 > | <a4. a >c2 |
          f4. c d4 f4 | g4. f e4 g4 | a4 g e c4 e4 | <g2 f2 > |`},{inst:`bass`,mml:`o3 l4 v13
          c8 r8 c8 r8 c8 r8 c8 r8 | <g8 r8 g8 r8 g8 a8 b8 >d8 |
          ; A
          c <g >c <g > | <a >e <a >e | <f >c <f >c | <g >d <g b8 >d8 |
          c <g >c <g > | <a >e <a >e | d <a g >d | c <g >c r |
          ; A'
          c <g >c <g > | <a >e <a >e | <f >c <f >c | <g >d <g b8 >d8 |
          c <g >c <g > | <a >e <a >e | <f >c <g >d | c <g >c c |
          ; B
          <f >c <f >c | <g >d <g >d | e <b >e <b > | <a >e <a >e |
          <f >c <f >c | <g >d <g >d | <a >e <a >c | <g8 g8 a8 a8 b8 b8 >d8 f8 |`},{inst:`arp`,pan:.15,mml:`o4 l8 v10 q5
          ${st(e)} ${st(r)}
          ${st(e)} ${st(t)} ${st(n)} ${st(r)} ${st(e)} ${st(t)} ${st(`d f a >c`,i)} ${st(e)}
          ${st(e)} ${st(t)} ${st(n)} ${st(r)} ${st(e)} ${st(t)} ${st(n,r)} ${st(e)}
          ${st(n)} ${st(r)} ${st(`e g b`)} ${st(t)} ${st(n)} ${st(r)} ${st(t)} ${st(i)}`},{inst:`bass`,drums:`k...s...k...s... | k...s...k.s.rrrr |
          [k..gs..gk.k.s..g |]7 k..gs..gk.ssSSSS |
          [k..gs..gk.k.s..g |]7 k..gs..gk.ssSSSS |
          [k...s..gk...s..g |]7 k.g.s.g.k.s.rrrr |`},{inst:`bass`,pan:.25,drums:`c...h...h...h... | h...h...h...h... |
          c.h.h.h.h.h.h.h. | [h.h.h.h.h.h.h.h. |]7
          c.h.h.h.h.h.h.h. | [h.h.h.h.h.h.h.h. |]7
          c.h.o.h.h.h.o.h. | [h.h.o.h.h.h.o.h. |]7`}]}})(),lagoon:(()=>{let e=`F4 A4 C5`,t=`F4 Bb4 D5`,n=`E4 G4 C5`,r=`E4 G4 Bb4`,i=`D4 F4 A4`,a=`D4 G4 Bb4`,o=(e,t)=>`${t?`${it(e,[0,2,3,2])} ${it(t,[0,2,3,2])}`:it(e,[0,2,3,2,1,2,3,2])} |`,s=e=>`${rt([tt(e)],`4.`)} ${rt([tt(e)+7],`4.`)} ${rt([tt(e)+12],4)} |`,c=(e,t)=>`${rt([tt(e),tt(e)+7,tt(t),tt(t)+7],4)} |`,l=`
    c8. <a8. >f e f c4 | d8. c8. <a >c <a f4 > | d8. <b-8. >f g f d4 | e8. c8. <g b- a g4 > |
    c8. <a8. >f e f a4 | a8. f8. d f e d4 | g f d <b- >c d e g | f4 r c f4 r4 |`,u=[e,e,t,n,e,i];return{title:`Sunny Lagoon`,bpm:124,swing:.14,key:65,minor:!1,bars:26,intro:2,ch:[{inst:`steel`,pan:-.1,echo:{delay:3,vol:.25,pan:.4},mml:`o5 l8 v13
          r1 | r1 |
          ${l}
          ${l}
          d4 f4 d <b-4. > | e4 g4 e c4. | c4 e4 a g e4 | f4. e d2 |
          d4 g4 b- a g4 | e4 g4 >c <b- g4 | a4. g f4 a4 | g e c <b- g b- >c e |`},{inst:`harm`,pan:.25,mml:`l8 v8
          [r1 |]10
          ${L(`A4 C5`,2)} | ${L(`A4 F4`,2)} | ${L(`Bb4 D5`,2)} | ${L(`G4 E4`,2)} |
          ${L(`A4 C5`,2)} | ${L(`A4 F4`,2)} | ${L(`Bb4 G4`,2)} | ${L(`A4`,1)} |
          ${L(`F4 Bb4`,2)} | ${L(`G4 C5`,2)} | ${L(`A4 E4`,2)} | ${L(`A4 F4`,2)} |
          ${L(`G4 Bb4`,2)} | ${L(`G4 E4`,2)} | ${L(`F4 C5`,2)} | ${L(`E4 G4`,2)} |`},{inst:`mallet`,pan:.2,mml:`v10 q6
          ${o(e)} ${o(r)}
          ${u.map(e=>o(e)).join(` `)} ${o(a,r)} ${o(e)}
          ${u.map(e=>o(e)).join(` `)} ${o(a,r)} ${o(e)}
          ${[t,n,`E4 A4 C5`,i,a,n,e,r].map(e=>o(e)).join(` `)}`},{inst:`bass`,mml:`v13
          ${s(`F2`)} ${s(`C3`)}
          [${s(`F2`)} ${s(`F2`)} ${s(`Bb2`)} ${s(`C3`)} ${s(`F2`)} ${s(`D3`)} ${c(`G2`,`C3`)} ${s(`F2`)}]2
          ${s(`Bb2`)} ${s(`C3`)} ${s(`A2`)} ${s(`D3`)} ${s(`G2`)} ${s(`C3`)} ${s(`F2`)} ${L(`C3 E3 G3 Bb3`,4)} |`},{inst:`bass`,vol:.75,drums:`k.....x.k.....x. | k.....x.k..xt.mf |
          [k..xk.x.k..xk.x. |]7 k..xk.x.t.t.m.f. |
          [k..xk.x.k..xk.x. |]7 k..xk.x.t.t.m.f. |
          [k..xk.x.k..xk.x. |]7 k..xk.x.ttmmffmm |`},{inst:`bass`,pan:.3,calm:!1,drums:`[b...b...b...b... |]2 [b.bbb.bbb.bbb.bb |]24`}]}})(),desert:(()=>{let e=e=>`${rt([tt(e)],`4.`)} ${rt([tt(e)],8)} ${rt([tt(e)+7],4)} ${rt([tt(e)+12],4)} |`,t=`${rt([tt(`Eb2`)],`4.`)} ${rt([tt(`Eb2`)],8)} ${rt([tt(`Eb3`)],4)} ${rt([tt(`Eb2`)],4)} |`,n=`
    d4 e- f+ g4 f+ e- | d4. e-16 d16 c d4 r | g4 f+ g b-4 a g | a4. g16 f+16 g f+ e- d |
    c4 e- g >c4 <b- g | b-4 a g e-4 c4 | <b- >e- g b- a g f+ e- | d2 r4 <a >d |`,r=e=>e.map(e=>`${at(e,1)} |`).join(` `),i=[`D4 A4`,`D4 A4`,`Eb4 G4`,`D4 A4`,`C4 G4`,`C4 G4`,`Eb4 G4`,`D4 A4`];return{title:`Sands of Hijaz`,bpm:100,key:62,minor:!1,penta:[0,1,4,7,8],bars:26,intro:2,ch:[{inst:`reed`,pan:-.1,echo:{delay:4,vol:.2,pan:.45},mml:`o5 l8 v13
          r1 | r1 |
          ${n}
          ${n}
          g g16 a16 b- a g4 d4 | b- a g f+ g2 | f+ f+16 g16 a g f+4 d4 | a g f+ e- d2 |
          >c4 <b- a g4 e-4 | g b- >e-4 d c <b-4 | a4 g f+ e- d e- f+ | d4 r <a >d2 |`},{inst:`harm`,pan:.2,mml:`o4 l8 v9 [r1 |]10 ${n} [r1 |]8`},{inst:`pad`,mml:`v7 q8
          ${r([`D4 A4`,`D4 A4`])} ${r(i)} ${r(i)}
          ${r([`G3 D4`,`G3 D4`,`D4 A4`,`D4 A4`,`C4 G4`,`Eb4 G4`,`D4 A4`,`D4 A4`])}`},{inst:`bass`,mml:`v13
          ${e(`D2`)} ${e(`D2`)}
          [${e(`D2`)} ${e(`D2`)} ${t} ${e(`D2`)} ${e(`C2`)} ${e(`C2`)} ${t} ${e(`D2`)}]2
          ${e(`G2`)} ${e(`G2`)} ${e(`D2`)} ${e(`D2`)} ${e(`C2`)} ${t} ${e(`D2`)} ${e(`D2`)}`},{inst:`bass`,drums:`[d.e..ee.d...e... |]2 [[d.e..ee.d...e.e. |]7 d.e.d.e.eeEe.E.E |]3`},{inst:`bass`,pan:.3,calm:!1,drums:`[....h.......h... |]2 [[..h.h.h...h.h.h. |]7 ..h.h.h.o...o... |]3`}]}})(),snow:(()=>{let e=`E4 G4 B4`,t=`E4 G4 C5`,n=`D4 G4 B4`,r=`E4 A4 C5`,i=`D#4 F#4 A4`,a=[0,1,2,3,2,1],o=(e,t)=>`${t?`${it(e,a,12)} ${it(t,a,12)}`:it(e,[...a,...a],12)} |`,s=e=>e.map(e=>`${rt([tt(e),tt(e)+7],2)} |`).join(` `),c=e=>e.map(e=>`${at(e,1)} |`).join(` `),l=[e,t,n,`D4 F#4 A4`,e,t,r,i],u=[`E3 B3 G4`,`C3 G3 E4`,`G3 D4 B4`,`D3 A3 F#4`,`E3 B3 G4`,`C3 G3 E4`,`A3 E4 C5`,`B3 F#4 D#5`],d=`
    b4. a g4 e4 | e4. d e2 | d4. e g4 b4 | a2. f+4 |
    b4. a g4 b4 | >e4. d c4 <g4 | a4. g >c4 <e4 | d+2 f+4 <b4 > |`;return{title:`Frostlight`,bpm:84,key:64,minor:!0,bars:26,intro:2,ch:[{inst:`bell`,pan:-.15,echo:{delay:6,vol:.3,pan:.5},mml:`o5 l8 v13
          r1 | r1 |
          ${d}
          ${d}
          e4 g4 >c4 <b4 | b4. a g2 | >c4 <b4 a4 e4 | g2. r4 |
          e4 g4 >c4 e4 | d4. c <b2 | a4 >c4 <b4 f+4 | e2. r4 |`},{inst:`mallet`,calm:!1,mml:`v8 q5
          ${o(e)} ${o(e)}
          ${l.map(e=>o(e)).join(` `)}
          ${l.map(e=>o(e)).join(` `)}
          ${[t,n,r,e,t,n].map(e=>o(e)).join(` `)} ${o(r,i)} ${o(e)}`},{inst:`pad`,mml:`v8 q8
          ${c([`E3 B3 G4`,`E3 B3 G4`])} ${c(u)} ${c(u)}
          ${c([`C3 G3 E4`,`G3 D4 B4`,`A3 E4 C5`,`E3 B3 G4`,`C3 G3 E4`,`G3 D4 B4`])} ${at(`A3 E4 C5`,2)} ${at(`B3 F#4 D#5`,2)} | ${at(`E3 B3 G4`,1)} |`},{inst:`sub`,mml:`v10
          ${s([`E2`,`E2`])}
          [${s([`E2`,`C3`,`G2`,`D3`,`E2`,`C3`,`A2`,`B2`])}]2
          ${s([`C3`,`G2`,`A2`,`E2`,`C3`,`G2`])} ${L(`A2 B2`,2)} | ${L(`E2`,1)} |`},{inst:`bass`,vol:.65,calm:!1,drums:`[................ |]2 [k.......x....... |]8 [k.......x.....x. |]8 [k.....k.x....... |]7 k.......x...x.x. |`},{inst:`bass`,pan:.3,calm:!1,drums:`[................ |]10 [b...b...b...b... |]8 [b.b.b.b.b.b.b.b. |]7 b.b.b.b.o....... |`}]}})(),castle:(()=>{let e=e=>`${rt([tt(e),tt(e)+7,tt(e),tt(e)+7],4)} |`,t=(e,t)=>`${rt([tt(e),tt(e)+7,tt(t),tt(t)+7],4)} |`,n=e=>e.map(e=>`${at(e,1)} |`).join(` `),r=`
    d8. d16 g4 b-8. a16 g4 | a8. b-16 a g d2 | e-8. e-16 g4 b-8. >c16 <b-4 | a8. g16 f a >c2 < |
    >d8. c16 <b-4 a8. b-16 g4 | g8. f16 e-4 b-4 g4 | c8. d16 e- c d8. f+16 a f+ | g2. r4 |`,i=`${n([`G3 D4 G4`,`G3 D4 G4`,`G3 Eb4 Bb4`,`F3 C4 A4`,`G3 D4 G4`,`G3 Eb4 Bb4`])} ${at(`G3 C4 Eb4`,2)} ${at(`F#3 A3 D4`,2)} | ${at(`G3 D4 G4`,1)} |`;return{title:`The Keep`,bpm:108,key:55,minor:!0,bars:26,intro:2,ch:[{inst:`brass`,pan:-.1,mml:`o5 l8 v13
          r1 | r1 |
          ${r}
          ${r}
          f4 b-4 >d4 c <b- | >c4. <a f2 | g4 b-4 >d4 c <b- | b-4. g e-2 |
          d8. f16 b-4 >d8. c16 <b-4 | a8. b-16 >c4 <f4 a4 | g4 e-4 c4 e- g | a4. g16 f+16 a2 |`},{inst:`harm`,pan:.25,mml:`l8 v9
          [r1 |]10
          ${L(`Bb4 D5`,2)} | ${L(`D5 Bb4`,2)} | ${L(`G4 Bb4`,2)} | ${L(`A4 C5`,2)} |
          ${L(`Bb4 D5`,2)} | ${L(`Bb4 G4`,2)} | ${L(`G4 F#4`,2)} | ${L(`G4`,1)} |
          ${L(`D5 F5`,2)} | ${L(`F5 C5`,2)} | ${L(`D5 G5`,2)} | ${L(`G5 Eb5`,2)} |
          ${L(`F5 D5`,2)} | ${L(`C5 A4`,2)} | ${L(`C5 Eb5`,2)} | ${L(`F#5 D5`,2)} |`},{inst:`pad`,mml:`v7 q8
          ${n([`G3 D4 G4`,`F#3 A3 D4`])} ${i} ${i}
          ${n([`F3 Bb3 D4`,`F3 A3 C4`,`G3 Bb3 D4`,`G3 Bb3 Eb4`,`F3 Bb3 D4`,`F3 A3 C4`,`G3 C4 Eb4`,`F#3 A3 D4`])}`},{inst:`bass`,mml:`v13
          ${e(`G2`)} ${e(`D2`)}
          [${e(`G2`)} ${e(`G2`)} ${e(`Eb2`)} ${e(`F2`)} ${e(`G2`)} ${e(`Eb2`)} ${t(`C2`,`D2`)} ${e(`G2`)}]2
          ${e(`Bb2`)} ${e(`F2`)} ${e(`G2`)} ${e(`Eb2`)} ${e(`Bb2`)} ${e(`F2`)} ${e(`C2`)} ${e(`D2`)}`},{inst:`bass`,drums:`S.ggS.ggS.ggrrrr | S.ggS.ggrrrrrrrr |
          [[S.ggs.g.S.ggs.gg |]7 S.ggs.g.rrrrSSSS |]2
          [S.g.s.g.S.g.s.gg |]7 S.ggs.g.rrrrrrrr |`},{inst:`bass`,vol:.75,drums:`P.......p....... | P...p...P...p.p. |
          [[P.......k....... | k.......k....... | k.......k....... | k.......k....... |]2]2
          [k.......k....... |]8`},{inst:`bass`,pan:.3,calm:!1,drums:`c............... | ................ |
          [c............... | [................ |]7]2
          c............... | [................ |]6 ........o...o.o. |`}]}})(),volcano:(()=>{let e=e=>`${rt([tt(e),tt(e)+12,tt(e),tt(e)+12,tt(e),tt(e)+12,tt(e),tt(e)+12],8)} |`,t=e=>`${ot(e,8,8)} |`,n=`E4 G4 B4`,r=`E4 G4 C5`,i=`D4 F#4 A4`,a=`D#4 F#4 A4`,o=`E4 A4 C5`,s=`
    e g b >e d <b g b | a g f+ g e2 | e g >c e d c <b >c < | >d4. c <b a f+4 |
    e g b >e f+ e d+ e < | b a g f+ g4 b4 | >c <b a g a b >c e < | >d+4 <b4 f+4 d+4 |`;return{title:`Magma Run`,bpm:132,key:64,minor:!0,bars:26,intro:2,ch:[{inst:`lead`,pan:-.1,echo:{delay:3,vol:.28,pan:.4},mml:`o5 l8 v13
          r1 | r1 |
          ${s}
          ${s}
          a4. >c e4 d c < | b4. g e2 | a4. >c e4 f e < | >d+4. c <b2 |
          g >c e g e c <g e | f+ a >d f+ e d <a f+ | b >d+ f+ a f+ d+ <b a | b2 r4 <b >d+ |`},{inst:`arp`,pan:.2,calm:!1,mml:`v9 q6
          ${t(n)} ${t(n)}
          [${[n,n,r,i,n,n,r,a].map(t).join(` `)}]2
          ${[o,n,o,a,r,i,a,a].map(t).join(` `)}`},{inst:`bass`,mml:`v13
          ${e(`E2`)} ${e(`E2`)}
          [${e(`E2`)} ${e(`E2`)} ${e(`C2`)} ${e(`D2`)} ${e(`E2`)} ${e(`E2`)} ${e(`C2`)} ${e(`B1`)}]2
          ${e(`A2`)} ${e(`E2`)} ${e(`A2`)} ${e(`B1`)} ${e(`C2`)} ${e(`D2`)} ${e(`B1`)} ${L(`B1 B2 B1 B2 C#2 D2 D#2 D#2`,8)} |`},{inst:`bass`,drums:`[k...k...k...k... |]2
          [[k...s...k.k.s... |]7 k.k.s.s.ttmmffSS |]2
          [k...s...k.k.s.k. |]7 k.k.s.s.SSSSrrrr |`},{inst:`bass`,pan:.3,calm:!1,drums:`h.h.h.h.h.h.h.h. | h.h.h.h.h.hhhhhh |
          [c.h.h.h.h.h.h.h. | [h.h.h.h.h.h.h.h. |]7]2
          c.h.o.h.h.h.o.h. | [h.h.o.h.h.h.o.h. |]7`}]}})(),boss:(()=>{let e=e=>`${nt(tt(e))}16 ${nt(tt(e))}16 ${nt(tt(e)+12)}8`,t=t=>`${[,,,,].fill(e(t)).join(` `)} |`,n=(t,n)=>`${e(t)} ${e(t)} ${e(n)} ${e(n)} |`,r=e=>`${ot(e,16,16)} |`,i=(e,t)=>`${ot(e,16,8)} ${ot(t,16,8)} |`,a=`C4 Eb4 G4`,o=`C4 Eb4 Ab4`,s=`B3 D4 G4`,c=`D4 F4 Bb4`,l=`C4 F4 Ab4`,u=`
    c4 g4 f+ g e-4 | d e- f g c2 | c4 a-4 g a- e-4 | d e- f d <b2 > |
    >c4 <g4 f+ g e-4 | f e- d e- c2 | a-4 e-4 b-4 f4 | g f e- d <b >d g4 |`;return{title:`Clash of Titans`,bpm:150,key:60,minor:!0,bars:25,intro:1,ch:[{inst:`brass`,pan:-.1,mml:`o5 l8 v13
          r1 |
          ${u}
          ${u}
          f4. a- >c4 <a-4 | g4. e- c2 | f4. a- >c4 d-4 < | b2 g4 d4 |
          >c4 e-4 <a-4 >c4 < | >d4 f4 <b-4 >d4 < | b >d g f e- d c <b | g16 a-16 g16 f+16 g4 f4 d4 |`},{inst:`harm`,pan:.25,mml:`l8 v9
          [r1 |]9
          ${L(`G4 Eb5`,2)} | ${L(`G4 Eb4`,2)} | ${L(`Ab4 C5`,2)} | ${L(`G4 B4`,2)} |
          ${L(`Eb5 C5`,2)} | ${L(`G4 Eb4`,2)} | ${L(`C5 D5`,2)} | ${L(`B4 G4`,2)} |
          ${L(`C5 Ab4`,2)} | ${L(`Eb5 G4`,2)} | ${L(`C5 F5`,2)} | ${L(`D5 B4`,2)} |
          ${L(`Eb5 C5`,2)} | ${L(`F5 D5`,2)} | ${L(`D5 G5`,2)} | ${L(`B4 D5`,2)} |`},{inst:`arp`,pan:.2,mml:`v8 q6
          r1 |
          [${r(a)} ${r(a)} ${r(o)} ${r(s)} ${r(a)} ${r(a)} ${i(o,c)} ${r(s)}]2
          ${r(l)} ${r(a)} ${i(l,`Db4 F4 Ab4`)} ${r(s)} ${r(o)} ${r(c)} ${r(s)} ${r(`B3 D4 F4`)}`},{inst:`bass`,mml:`v13
          ${L(`C2`,1)} |
          [${t(`C2`)} ${t(`C2`)} ${t(`Ab1`)} ${t(`G1`)} ${t(`C2`)} ${t(`C2`)} ${n(`Ab1`,`Bb1`)} ${t(`G1`)}]2
          ${t(`F2`)} ${t(`C2`)} ${t(`F2`)} ${t(`G1`)} ${t(`Ab1`)} ${t(`Bb1`)} ${t(`G1`)} ${t(`G1`)}`},{inst:`bass`,vol:.8,drums:`K.......t.t.mmff |
          [[k.k.s.k.k.k.s.k. |]7 kkkks.s.ttmmffSS |]2
          [k.k.s.k.k.kks.k. |]7 k.k.s.s.SSSSrrrr |`},{inst:`bass`,pan:.3,drums:`c............... |
          [[c.h.h.h.h.h.h.h. | h.h.h.h.h.h.h.h. | h.h.h.h.h.h.h.h. | h.h.h.h.h.h.h.h. |]2]2
          [c.h.o.h.h.h.o.h. | h.h.o.h.h.h.o.h. | h.h.o.h.h.h.o.h. | h.h.o.h.h.h.o.h. |]2`}]}})()};function lt(e){let t=``;for(let n=0;n<e.length;n++){let r=e[n];if(r!==`[`){t+=r;continue}let i=1,a=n+1;for(;a<e.length&&i;a++)e[a]===`[`?i++:e[a]===`]`&&i--;let o=lt(e.slice(n+1,a-1)),s=a;for(;s<e.length&&/\d/.test(e[s]);)s++;let c=s>a?Number(e.slice(a,s)):2;t+=` ${o} `.repeat(c),n=s-1}return t}var ut={c:0,d:2,e:4,f:5,g:7,a:9,b:11};function dt(e,t,n){let r=lt(e.replace(/;[^\n]*/g,``)),i=[],a=0,o=0,s=4,c=4,l=12,u=7,d=t.inst,f=!1,p=-1,m=e=>Error(`${n}: ${e} (step ${o}, bar ${Math.floor(o/16)+1}, near "${r.slice(Math.max(0,a-12),a+8)}")`),h=()=>{let e=a;for((r[e]===`-`||r[e]===`+`)&&e++;e<r.length&&/\d/.test(r[e]);)e++;if(e===a||e===a+1&&/[-+]/.test(r[a]))return null;let t=Number(r.slice(a,e));return a=e,t},g=e=>{let t=e,n=e/2;for(;r[a]===`.`;)t+=n,n/=2,a++;return t},_=()=>{let e=/\d/.test(r[a]??``)?h():0,t=g(e?16/e:c);for(;r[a]===`^`;){a++;let e=h();if(!e)throw m(`tie without a length`);t+=g(16/e)}return t},v=()=>{let e=r[a++],t=12*(s+1)+ut[e];for(;r[a]===`+`||r[a]===`#`||r[a]===`-`;)t+=r[a++]===`-`?-1:1;return t};for(;a<r.length;){let e=r[a];if(/\s/.test(e))a++;else if(e===`|`){if(a++,Math.abs(o/16-Math.round(o/16))>1e-6)throw m(`bar check failed`)}else if(e in ut){let e=v(),n=_();i.push({step:o,len:n*u/8,midi:[e],vol:l/15,inst:d,pan:t.pan??0,from:f&&p>=0?p:void 0}),f=!1,p=e,o+=n}else switch(a++,e){case`o`:s=h()??s;break;case`>`:s++;break;case`<`:s--;break;case`l`:{let e=h();if(!e)throw m(`l without a length`);c=g(16/e);break}case`v`:l=h()??l;break;case`q`:u=h()??u;break;case`@`:{let e=/^[a-z0-9]+/.exec(r.slice(a));if(!e)throw m(`@ without an instrument`);d=e[0],a+=e[0].length;break}case`r`:o+=_();break;case`/`:f=!0;break;case`(`:case`{`:{let n=e===`{`?`}`:`)`,c=s,f=[];for(;a<r.length&&r[a]!==n;){let e=r[a];if(e in ut)f.push(v());else if(e===`>`)s++,a++;else if(e===`<`)s--,a++;else if(e===`o`)a++,s=h()??s;else if(/\s/.test(e))a++;else throw m(`unexpected "${e}" in a chord`)}a++,s=c;let p=_();if(n===`}`)i.push({step:o,len:p*u/8,midi:f,vol:l/15,inst:d,pan:t.pan??0});else for(let e of f)i.push({step:o,len:p*u/8,midi:[e],vol:l/15,inst:d,pan:t.pan??0});o+=p;break}default:throw m(`unexpected "${e}"`)}}return{evs:i,steps:o}}function ft(e,t,n){let r=lt(e.replace(/;[^\n]*/g,``)),i=[],a=0;for(let e of r)if(!/\s/.test(e)){if(e===`|`){if(a%16)throw Error(`${n}: drum bar check failed at step ${a} (bar ${Math.floor(a/16)+1})`)}else{if(e!==`.`&&e!==`-`){if(!St[e])throw Error(`${n}: unknown drum "${e}"`);i.push({step:a,len:1,midi:[],vol:1,inst:`drum`,drum:e,pan:t.pan??0})}a++}}return{evs:i,steps:a}}var pt=new Map;function mt(e,t=!1,n=-1){let r=`${e}/${t}/${n}`,i=pt.get(r);if(i)return i;let a=ct[e],o=a.bars*16,s=(a.intro??0)*16,c=[];a.ch.forEach((r,i)=>{if(t&&r.calm===!1||n>=0&&i!==n)return;let l=`${e} ch${i} (${r.inst})`,u=r.drums===void 0?dt(r.mml??``,r,l):ft(r.drums,r,l);if(Math.abs(u.steps-o)>1e-6)throw Error(`${l}: ${u.steps/16} bars, the song has ${a.bars}`);let d=r.vol??1;for(let e of u.evs)c.push({...e,vol:e.vol*d,ch:i});if(r.echo)for(let e of u.evs){let t=e.step+r.echo.delay;t>=o&&(t=s+t-o),c.push({...e,step:t,vol:e.vol*d*r.echo.vol,pan:r.echo.pan??-(r.pan??0),ch:i,echo:!0})}}),c.sort((e,t)=>e.step-t.step);let l={def:a,evs:c,total:o,loopFrom:s,loopIdx:Math.max(0,c.findIndex(e=>e.step>=s))};return pt.set(r,l),l}var ht=e=>e**1.6;function gt(e,t,n,r,i){let a=ht(n.vol),o=F(n.midi[0]),s=n.pan,c=n.from===void 0?null:{f:F(n.from),to:o,glide:Math.min(.08,r*.4)},l=n.midi.length>1?n.midi.map(e=>e-n.midi[0]):void 0,u=r>.28,d=(n,i,u)=>Le(e,t,{wave:n,f:o,dur:r,vol:i*a,pan:s,arp:l,arpStep:1/30,...c,...u});switch(n.inst){case`lead`:d(`p25`,.15,{a:.006,d:.25,s:.65,r:.07,vib:u?14:0,vibDelay:.22,verb:.22});break;case`lead50`:d(`p50`,.1,{a:.008,d:.3,s:.7,r:.08,vib:u?12:0,vibDelay:.25,verb:.25});break;case`reed`:d(`p12`,.18,{a:.02,d:.25,s:.75,r:.08,vib:u?22:0,vibRate:6,vibDelay:.12,verb:.25});break;case`brass`:d(`p25`,.14,{a:.03,d:.25,s:.75,r:.1,vib:u?12:0,vibDelay:.2,verb:.25,...c??{f:o*.977,to:o,glide:.04}}),d(`p50`,.05,{f:o/2,to:void 0,glide:void 0,a:.03,d:.25,s:.75,r:.1});break;case`bell`:d(`p12`,.18,{a:.002,d:.9,s:0,r:.3,verb:.45,dur:Math.max(r,.6)}),d(`p50`,.06,{f:o*2,a:.002,d:.35,s:0,r:.2,verb:.45,dur:Math.max(r,.3)});break;case`mallet`:d(`p50`,.1,{a:.002,d:.16,s:0,r:.05,verb:.2,dur:Math.max(r,.15)}),d(`tri`,.06,{f:o*2,a:.002,d:.06,s:0,r:.03,dur:.08});break;case`steel`:d(`p25`,.2,{a:.002,d:.22,s:.25,r:.08,verb:.25,vib:u?10:0}),d(`p12`,.05,{f:o*3,a:.002,d:.05,s:0,r:.02,dur:.06});break;case`pluck`:d(`p25`,.09,{a:.002,d:.09,s:.15,r:.04,verb:.15});break;case`arp`:d(`p12`,.26,{a:.002,d:.12,s:.45,r:.04,verb:.2});break;case`harm`:d(`p50`,.09,{a:.01,d:.3,s:.6,r:.1,vib:u?10:0,vibDelay:.3,verb:.3});break;case`pad`:d(`p50`,.045,{a:.08,d:.4,s:.85,r:.25,detune:-6,verb:.4}),d(`p50`,.045,{a:.08,d:.4,s:.85,r:.25,detune:6,verb:.4});break;case`bass`:d(`tri`,.11,{a:.004,d:.15,s:.85,r:.04}),d(`p25`,.07,{f:o*2,a:.004,d:.1,s:.5,r:.04});break;case`sub`:d(`tri`,.17,{a:.01,d:.2,s:.8,r:.08}),d(`p50`,.03,{f:o*2,a:.01,d:.2,s:.5,r:.08});break;case`drum`:St[n.drum](e,t,i,s,n.vol)}}var _t=(e,t,n,r,i)=>{Le(e,t,{wave:`tri`,f:190,to:50,glide:.06,dur:.11,vol:.28*i,d:.1,s:.2,pan:r}),Le(e,t,{wave:`p25`,f:160,to:70,glide:.035,dur:.035,vol:.06*i,d:.035,pan:r}),Re(e,t,{hold:2,dur:.014,vol:.09*i,filter:`bandpass`,f:2500,d:.012,pan:r})},vt=(e,t,n,r,i)=>{Re(e,t,{dur:.13,vol:.15*i,filter:`bandpass`,f:2200,q:.6,d:.11,pan:r}),Le(e,t,{wave:`tri`,f:260,to:170,dur:.05,vol:.16*i,d:.05,pan:r})},yt=e=>(t,n,r,i,a)=>{Le(t,n,{wave:`tri`,f:e,to:e*.68,dur:.16,vol:.24*a,d:.15,pan:i}),Re(t,n,{dur:.03,vol:.04*a,filter:`lowpass`,f:1500,pan:i})},bt=(e,t,n,r,i)=>{Re(e,t,{kind:`metal`,dur:.03,vol:.06*i,filter:`bandpass`,f:3200,q:1.5,d:.025,pan:r}),Le(e,t,{wave:`tri`,f:620,to:520,dur:.025,vol:.12*i,pan:r})},xt=(e,t,n,r,i)=>{Le(e,t,{wave:`tri`,f:F(n-12),to:F(n-12)*.97,dur:.6,vol:.2*i,d:.5,s:0,r:.2,pan:r}),Re(e,t,{dur:.05,vol:.035*i,filter:`lowpass`,f:1200,pan:r})},St={k:_t,K:(e,t,n,r,i)=>_t(e,t,n,r,i*1.3),s:vt,S:(e,t,n,r,i)=>vt(e,t,n,r,i*1.3),g:(e,t,n,r,i)=>vt(e,t,n,r,i*.35),r:(e,t,n,r,i)=>{vt(e,t,n,r,i*.5),vt(e,t+.03,n,r,i*.5)},h:(e,t,n,r,i)=>Re(e,t,{kind:`metal`,dur:.03,vol:.075*i,filter:`highpass`,f:7e3,d:.025,pan:r}),o:(e,t,n,r,i)=>Re(e,t,{kind:`metal`,dur:.18,vol:.065*i,filter:`highpass`,f:6e3,d:.15,pan:r}),c:(e,t,n,r,i)=>{Re(e,t,{dur:1,vol:.08*i,filter:`highpass`,f:4e3,d:.9,pan:r}),Re(e,t,{kind:`metal`,dur:.6,vol:.03*i,filter:`highpass`,f:5e3,d:.5,pan:r})},b:(e,t,n,r,i)=>Re(e,t,{dur:.045,vol:.05*i,filter:`highpass`,f:5e3,a:.012,d:.03,pan:r}),x:(e,t,n,r,i)=>{Re(e,t,{kind:`metal`,dur:.015,vol:.06*i,filter:`bandpass`,f:2e3,q:2,d:.012,pan:r}),Le(e,t,{wave:`p12`,f:1e3,dur:.012,vol:.03*i,pan:r})},t:yt(230),m:yt(165),f:yt(115),d:(e,t,n,r,i)=>{Le(e,t,{wave:`tri`,f:150,to:100,dur:.18,vol:.24*i,d:.17,pan:r}),Le(e,t,{wave:`p50`,f:300,to:200,dur:.05,vol:.035*i,pan:r})},e:bt,E:(e,t,n,r,i)=>bt(e,t,n,r,i*1.4),p:xt,P:(e,t,n,r,i)=>xt(e,t,n,r,i*1.4)},Ct=class{id;calm;t0;c;out;dry;wet;idx=0;base=0;six;constructor(e,t,n,r,i=-1){this.id=t,this.calm=n,this.t0=r,this.c=mt(t,n,i);let a=e.ctx;this.dry=a.createGain(),this.wet=a.createGain(),this.dry.gain.value=0,this.wet.gain.value=0,this.dry.connect(e.music.dest),e.music.verb&&this.wet.connect(e.music.verb),this.out={ctx:a,dest:this.dry,verb:this.wet},this.six=60/(this.c.def.bpm*(n?.93:1))/4}fade(e,t,n){for(let r of[this.dry,this.wet])r.gain.cancelScheduledValues(t),r.gain.setValueAtTime(r.gain.value,t),r.gain.linearRampToValueAtTime(e,t+Math.max(.01,n))}disconnect(){this.dry.disconnect(),this.wet.disconnect()}timeOf(e){let t=this.c.def.swing&&Math.floor(e)%2==1?this.c.def.swing*this.six:0;return this.t0+e*this.six+t}schedule(e,t=-1/0,n=.05){let{evs:r,total:i,loopFrom:a,loopIdx:o}=this.c;if(r.length)for(let s=0;s<2e4;s++){if(this.idx>=r.length){if(i<=a)return;this.base+=i-a,this.idx=o}let s=r[this.idx],c=this.base+s.step,l=this.timeOf(c);if(l>=e)return;this.idx++,!(l<t-n)&&gt(this.out,l,s,s.len*this.six,this.c.def.key)}}},wt=new class{cur=null;old=[];want=null;wantCalm=!1;timer=0;play(e,t={}){let n=!!t.calm;(this.want!==e||this.wantCalm!==n)&&(this.want=e,this.wantCalm=n,Ue.whenReady(()=>this.start(t)))}playing(){return this.want}start(e){let t=Ue.live,n=t.ctx.currentTime;if(this.cur&&this.cur.id===this.want&&this.cur.calm===this.wantCalm)return;if(this.cur){let t=this.cur;t.fade(0,n,e.fade??1.2),this.old.push(t),window.setTimeout(()=>{this.old=this.old.filter(e=>e!==t),t.disconnect()},((e.fade??1.2)+.6)*1e3),this.cur=null}if(!this.want)return;let r=e.delay??0,i=new Ct(t,this.want,this.wantCalm,n+.06+r);i.fade(0,n,.01),i.fade(1,n+r,r>0?.05:1),this.cur=i;let a=ct[this.want];Ue.key={root:a.key,minor:a.minor,penta:a.penta},this.timer||=window.setInterval(()=>this.tick(),25)}tick(){let e=Ue.ctx;if(!e||e.state!==`running`)return;let t=e.currentTime;for(let e of[this.cur,...this.old])e&&Ue.musicOn&&e.schedule(t+.35,t)}},Tt=[{filter:`lowpass`,f:650,q:.5,vol:.045,sway:.034,swayHz:.13},{filter:`bandpass`,f:1800,q:.7,vol:.011,sway:.01,swayHz:.13,pan:.3}],Et=[{filter:`bandpass`,f:500,q:1.2,vol:.04,sway:.03,swayHz:.05,fSway:220,fSwayHz:.07}],Dt=[{filter:`highpass`,f:1800,q:.5,vol:.012,sway:.002,swayHz:.3},{hold:4,filter:`lowpass`,f:450,vol:.025}];function Ot(e,t){let n=t===`night`,r=t===`storm`;switch(e){case`lagoon`:return r?{beds:[...Tt,...Dt],sprinkles:{drop:9}}:{beds:n?Tt.map(e=>({...e,vol:e.vol*.7})):Tt,sprinkles:n?{cricket:1.6}:t===`day`?{gull:.07}:{}};case`desert`:return r?{beds:[{filter:`bandpass`,f:700,q:1,vol:.03,sway:.02,swayHz:.11,fSway:350,fSwayHz:.09},{filter:`highpass`,f:4e3,vol:.008,sway:.007,swayHz:.21}],sprinkles:{gust:.15}}:{beds:Et.map(e=>({...e,vol:e.vol*.7})),sprinkles:n?{cricket:1.2}:{}};case`snow`:return{beds:[{filter:`bandpass`,f:900,q:3,vol:r?.07:.045,sway:r?.05:.03,swayHz:.06,fSway:420,fSwayHz:.045}],sprinkles:{icicle:.12,...r?{gust:.2}:{}}};case`castle`:return r?{beds:[...Dt,...Et],sprinkles:{drop:7}}:{beds:Et,sprinkles:{crow:.05,...n?{cricket:1.4}:{}}};case`volcano`:return{beds:[{hold:40,filter:`lowpass`,f:170,vol:.028,sway:.012,swayHz:.1},{hold:8,filter:`bandpass`,f:500,q:.7,vol:.02,sway:.012,swayHz:.08},{hold:3,filter:`bandpass`,f:1200,q:.6,vol:.006,sway:.004,swayHz:.3}],sprinkles:{crackle:5,bubble:.35}}}}var kt=(e,t)=>e+Math.random()*(t-e);function At(e,t,n,r){let i=kt(-.8,.8);switch(t){case`gull`:for(let t=0;t<2;t++)Le(e,n,{wave:`p25`,f:1750,to:1250,dur:.16,vol:.016,a:.02,d:.15,s:.5,delay:t*.22,pan:i});break;case`cricket`:{let t=kt(3900,4600);for(let r=0;r<3;r++)Le(e,n,{wave:`p12`,f:t,dur:.022,vol:.009,d:.02,s:.6,delay:r*.05,pan:i});break}case`drop`:Le(e,n,{wave:`p50`,f:kt(1500,3500),to:kt(900,1400),dur:.015,vol:.012,d:.014,pan:i});break;case`crackle`:Re(e,n,{kind:`metal`,rate:kt(.8,2),dur:.01,vol:kt(.015,.035),filter:`highpass`,f:2e3,d:.008,pan:i});break;case`bubble`:{let t=kt(220,320);Le(e,n,{wave:`tri`,f:t,to:t*2.2,dur:.07,vol:.035,d:.06,pan:i});break}case`icicle`:{let t=[0,2,4,7,9][Math.floor(Math.random()*5)];Le(e,n,{wave:`p12`,f:F(r+24+t),dur:.4,vol:.008,d:.4,pan:i});break}case`crow`:for(let t=0;t<2;t++)Le(e,n,{wave:`p12`,f:720,to:520,dur:.14,vol:.014,a:.01,d:.12,s:.6,vib:80,vibRate:25,vibDelay:0,delay:t*.24,pan:i});break;case`gust`:Re(e,n,{dur:1.6,vol:.05,filter:`bandpass`,f:400,fTo:1600,q:1.5,a:.6,d:.6,s:.4,r:.4,pan:i,panTo:-i})}}var jt=class{g;sc;nodes=[];level;next={};constructor(e,t,n,r){this.g=e,this.sc=t;let i=e.ctx;this.level=i.createGain(),this.level.gain.value=0,this.level.gain.setValueAtTime(0,n),this.level.gain.linearRampToValueAtTime(1,n+r),this.level.connect(e.amb.dest);for(let e of t.beds)this.bed(e,n);for(let e of Object.keys(t.sprinkles))this.next[e]=n+kt(0,1/t.sprinkles[e])}bed(e,t){let n=this.g.ctx,r=n.createBufferSource();r.buffer=Me(`hiss`,e.hold??1),r.loop=!0;let i=n.createBiquadFilter();i.type=e.filter,i.frequency.value=e.f,i.Q.value=e.q??.7;let a=n.createGain();a.gain.value=e.vol,r.connect(i),i.connect(a);let o=a;if(e.pan){let t=n.createStereoPanner();t.pan.value=e.pan,a.connect(t),o=t}o.connect(this.level);let s=(e,r,i)=>{let a=n.createOscillator();a.frequency.value=e;let o=n.createGain();o.gain.value=r,a.connect(o),o.connect(i),a.start(t),this.nodes.push(a)};e.sway&&s(e.swayHz??.1,e.sway,a.gain),e.fSway&&s(e.fSwayHz??.07,e.fSway,i.frequency),r.start(t,Math.random()*.9),this.nodes.push(r)}schedule(e,t,n=-1/0){let r={ctx:this.g.ctx,dest:this.level,verb:null};for(let i of Object.keys(this.sc.sprinkles)){let a=this.sc.sprinkles[i],o=this.next[i];for(o<n&&(o=n+kt(0,1/a));o<e;)At(r,i,o,t),o+=-Math.log(1-Math.random())/a;this.next[i]=o}}stop(e,t){this.level.gain.cancelScheduledValues(e),this.level.gain.setValueAtTime(this.level.gain.value,e),this.level.gain.linearRampToValueAtTime(0,e+t);for(let n of this.nodes)n.stop(e+t+.05);window.setTimeout(()=>this.level.disconnect(),(t+.3)*1e3)}},Mt=new class{cur=null;key=``;timer=0;stop(){this.key=``,this.playing=``,this.cur&&Ue.ctx&&this.cur.stop(Ue.ctx.currentTime,.5),this.cur=null}playing=``;set(e,t){let n=`${e}/${t}`;n!==this.key&&(this.key=n,Ue.whenReady(()=>{if(this.key!==n||this.playing===n)return;this.playing=n;let r=Ue.live,i=r.ctx.currentTime;this.cur?.stop(i,1.5),this.cur=new jt(r,Ot(e,t),i,2),this.timer||=window.setInterval(()=>this.tick(),200)}))}tick(){let e=Ue.ctx;e&&e.state===`running`&&this.cur&&Ue.sfxOn&&this.cur.schedule(e.currentTime+.4,Ue.key.root,e.currentTime)}},Nt=(e,t,n)=>e<t?t:e>n?n:e,Pt=(e,t,n)=>e+(t-e)*n,Ft=(e,t,n,r)=>Pt(e,t,1-Math.exp(-n*r));function It(e,t,n,r,i,a,o,s,c,l){let u=Math.cos(a),d=Math.sin(a),f=Math.cos(o),p=Math.sin(o),m=t*16;e[m]=u*f*s,e[m+1]=p*s,e[m+2]=-d*f*s,e[m+3]=0,e[m+4]=-u*p*c,e[m+5]=f*c,e[m+6]=d*p*c,e[m+7]=0,e[m+8]=d*l,e[m+9]=0,e[m+10]=u*l,e[m+11]=0,e[m+12]=n,e[m+13]=r,e[m+14]=i,e[m+15]=1}function Lt(e,t,n,r,i){let a=t*3;e[a]=n,e[a+1]=r,e[a+2]=i}var Rt=class{widthPx;range;sensitivity;targetX=0;dragging=!1;pointer=-1;startPx=0;startTarget=0;keys=new Set;onFirstGesture=null;constructor(e,t,n,r=1.25){this.widthPx=t,this.range=n,this.sensitivity=r,e.addEventListener(`pointerdown`,t=>{this.onFirstGesture?.(),!t.target.closest(`button, .card, .panel, .map3d`)&&(this.dragging||(this.dragging=!0,this.pointer=t.pointerId,this.startPx=t.clientX,this.startTarget=this.targetX,e.setPointerCapture?.(t.pointerId)))}),e.addEventListener(`pointermove`,e=>{if(!this.dragging||e.pointerId!==this.pointer)return;let t=(e.clientX-this.startPx)/Math.max(1,this.widthPx());this.targetX=Nt(this.startTarget+t*this.range*2*this.sensitivity,-this.range,this.range)});let i=e=>{e.pointerId===this.pointer&&(this.dragging=!1)};e.addEventListener(`pointerup`,i),e.addEventListener(`pointercancel`,i),e.addEventListener(`lostpointercapture`,i),window.addEventListener(`keydown`,e=>{this.onFirstGesture?.(),this.keys.add(e.key.toLowerCase())}),window.addEventListener(`keyup`,e=>this.keys.delete(e.key.toLowerCase())),window.addEventListener(`blur`,()=>this.keys.clear())}update(e){let t=0;(this.keys.has(`arrowleft`)||this.keys.has(`a`)||this.keys.has(`q`))&&--t,(this.keys.has(`arrowright`)||this.keys.has(`d`))&&(t+=1),t!==0&&(this.targetX=Nt(this.targetX+t*13*e,-this.range,this.range))}reset(){this.targetX=0,this.dragging=!1}},zt=class{s;constructor(e){this.s=e|0||2654435769}next(){this.s=this.s+1831565813|0;let e=Math.imul(this.s^this.s>>>15,1|this.s);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}range(e,t){return e+(t-e)*this.next()}int(e,t){return Math.floor(this.range(e,t+1))}chance(e){return this.next()<e}pick(e){return e[Math.floor(this.next()*e.length)]}sign(){return this.next()<.5?-1:1}},Bt=`tinylegion.save.v1`,Vt=()=>({gold:0,upgrades:{recruits:0,forge:0,drill:0},unlocked:0,stars:{},mapSeen:1,kills:{},stats:{runs:0,kills:0,bosses:0,waves:0,bestArmy:0,bestRank:0},settings:{music:1,sfx:1,vibration:!0,quality:`high`},tutorialDone:!1,fails:{},endlessBest:0,relics:{},boosts:{},noAds:!1});function Ht(){let e=Vt();try{let t=localStorage.getItem(Bt);if(!t)return e;let n=JSON.parse(t),r={...e,...n,upgrades:{...e.upgrades,...n.upgrades},stars:{...n.stars},kills:{...n.kills},stats:{...e.stats,...n.stats},settings:{...e.settings,...n.settings},fails:{...n.fails},relics:{...n.relics},boosts:{...n.boosts}};n.tutorialDone===void 0&&(r.tutorialDone=(n.unlocked??0)>0||(n.endlessBest??0)>0),!n.settings&&n.muted&&(r.settings={...r.settings,music:0,sfx:0});let i=r.settings;for(let e of[`music`,`sfx`])typeof i[e]!=`number`&&(r.settings[e]=i[e]===!1?0:1);return delete r.muted,r}catch{return e}}function Ut(e){try{localStorage.setItem(Bt,JSON.stringify(e))}catch{}}var Wt={lagoon:{ground:2797765,groundAccent:16777215,groundStyle:`waves`,groundGlow:!1,laneStyle:`sandstone`,bridge:9272162,curbA:14829629,curbB:16249576,decor:`palm`,skyTint:13496059,skyTintAmount:0,weather:{}},desert:{ground:15121784,groundAccent:12881994,groundStyle:`dunes`,groundGlow:!1,laneStyle:`terracotta`,bridge:10511418,curbA:14239759,curbB:16180160,decor:`cactus`,skyTint:16768168,skyTintAmount:.45,weather:{storm:`sand`,night:`none`}},snow:{ground:15660540,groundAccent:12375018,groundStyle:`snow`,groundGlow:!1,laneStyle:`ice`,bridge:9084339,curbA:2450411,curbB:16777215,decor:`pine`,skyTint:14872831,skyTintAmount:.35,weather:{day:`snow`,dusk:`snow`,night:`snow`,storm:`snow`}},castle:{ground:3104087,groundAccent:7315608,groundStyle:`moat`,groundGlow:!1,laneStyle:`cobble`,bridge:5722958,curbA:3621201,curbB:16436245,decor:`tower`,skyTint:11122889,skyTintAmount:.3,weather:{}},volcano:{ground:2757131,groundAccent:16738816,groundStyle:`lava`,groundGlow:!0,laneStyle:`basalt`,bridge:1841431,curbA:1579035,curbB:16347926,decor:`spire`,skyTint:16747100,skyTintAmount:.4,weather:{day:`embers`,dusk:`embers`,night:`embers`,storm:`embers`}}},Gt={day:{sky:13496059,fogNear:24,fogFar:82,hemiSky:15398655,hemiGround:11770488,hemiIntensity:1.9,sun:16773852,sunIntensity:2.2,sunPos:[-4,10,6],weather:`none`,lightning:!1},dusk:{sky:16232585,fogNear:22,fogFar:78,hemiSky:16765350,hemiGround:8015470,hemiIntensity:1.55,sun:16751196,sunIntensity:2.1,sunPos:[-8,4,-4],weather:`none`,lightning:!1},night:{sky:1779015,fogNear:18,fogFar:70,hemiSky:7374016,hemiGround:2367288,hemiIntensity:1.25,sun:12899583,sunIntensity:1.1,sunPos:[5,9,3],weather:`fireflies`,lightning:!1},storm:{sky:9082534,fogNear:15,fogFar:62,hemiSky:12765910,hemiGround:4937059,hemiIntensity:1.5,sun:14673388,sunIntensity:.9,sunPos:[-3,10,2],weather:`rain`,lightning:!0}};function Kt(e,t,n){let r=e=>[e>>16&255,e>>8&255,e&255],[i,a,o]=r(e),[s,c,l]=r(t),u=(e,t)=>Math.round(e+(t-e)*n);return u(i,s)<<16|u(a,c)<<8|u(o,l)}function qt(e,t){let n=Wt[e],r=Gt[t],i=n.skyTintAmount*(t===`night`?.35:1);return{theme:n,mood:r,themeId:e,moodId:t,sky:Kt(r.sky,n.skyTint,i),weather:n.weather[t]??r.weather}}var Jt=1e3,Yt=1001,Xt=1002,Zt=1003,Qt=1004,$t=1005,en=1006,tn=1007,nn=1008,rn=1009,an=1010,on=1011,sn=1012,cn=1013,ln=1014,un=1015,dn=1016,fn=1017,pn=1018,mn=1020,hn=35902,gn=35899,_n=1021,vn=1022,yn=1023,bn=1026,xn=1027,Sn=1028,Cn=1029,wn=1030,Tn=1031,En=1033,Dn=33776,On=33777,kn=33778,An=33779,jn=35840,Mn=35841,Nn=35842,Pn=35843,Fn=36196,In=37492,Ln=37496,Rn=37488,zn=37489,Bn=37490,Vn=37491,Hn=37808,Un=37809,Wn=37810,Gn=37811,Kn=37812,qn=37813,Jn=37814,Yn=37815,Xn=37816,Zn=37817,Qn=37818,$n=37819,er=37820,tr=37821,nr=36492,rr=36494,ir=36495,ar=36283,or=36284,sr=36285,cr=36286,lr=2300,ur=2301,dr=2302,fr=2303,pr=2400,mr=2401,hr=2402,gr=3200,_r=`srgb`,vr=`srgb-linear`,yr=`linear`,br=`srgb`,xr=7680,Sr=35044,Cr=35048,wr=2e3;function Tr(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Er(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Dr(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Or(){let e=Dr(`canvas`);return e.style.display=`block`,e}var kr={};function Ar(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function jr(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function R(...e){e=jr(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function z(...e){e=jr(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Mr(...e){let t=e.join(` `);t in kr||(kr[t]=!0,R(...e))}function Nr(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var Pr={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},Fr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},Ir=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),Lr=1234567,Rr=Math.PI/180,zr=180/Math.PI;function Br(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Ir[e&255]+Ir[e>>8&255]+Ir[e>>16&255]+Ir[e>>24&255]+`-`+Ir[t&255]+Ir[t>>8&255]+`-`+Ir[t>>16&15|64]+Ir[t>>24&255]+`-`+Ir[n&63|128]+Ir[n>>8&255]+`-`+Ir[n>>16&255]+Ir[n>>24&255]+Ir[r&255]+Ir[r>>8&255]+Ir[r>>16&255]+Ir[r>>24&255]).toLowerCase()}function Vr(e,t,n){return Math.max(t,Math.min(n,e))}function Hr(e,t){return(e%t+t)%t}function Ur(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function Wr(e,t,n){return e===t?0:(n-e)/(t-e)}function Gr(e,t,n){return(1-n)*e+n*t}function Kr(e,t,n,r){return Gr(e,t,1-Math.exp(-n*r))}function qr(e,t=1){return t-Math.abs(Hr(e,t*2)-t)}function Jr(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function Yr(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function Xr(e,t){return e+Math.floor(Math.random()*(t-e+1))}function Zr(e,t){return e+Math.random()*(t-e)}function Qr(e){return e*(.5-Math.random())}function $r(e){e!==void 0&&(Lr=e);let t=Lr+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ei(e){return e*Rr}function ti(e){return e*zr}function ni(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function ri(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function ii(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function ai(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:R(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function oi(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function si(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var ci={DEG2RAD:Rr,RAD2DEG:zr,generateUUID:Br,clamp:Vr,euclideanModulo:Hr,mapLinear:Ur,inverseLerp:Wr,lerp:Gr,damp:Kr,pingpong:qr,smoothstep:Jr,smootherstep:Yr,randInt:Xr,randFloat:Zr,randFloatSpread:Qr,seededRandom:$r,degToRad:ei,radToDeg:ti,isPowerOfTwo:ni,ceilPowerOfTwo:ri,floorPowerOfTwo:ii,setQuaternionFromProperEuler:ai,normalize:si,denormalize:oi},B=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Vr(this.x,e.x,t.x),this.y=Vr(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Vr(this.x,e,t),this.y=Vr(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Vr(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Vr(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},li=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:R(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Vr(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},V=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(di.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(di.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Vr(this.x,e.x,t.x),this.y=Vr(this.y,e.y,t.y),this.z=Vr(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Vr(this.x,e,t),this.y=Vr(this.y,e,t),this.z=Vr(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Vr(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ui.copy(this).projectOnVector(e),this.sub(ui)}reflect(e){return this.sub(ui.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Vr(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ui=new V,di=new li,fi=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return Mr(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(pi.makeScale(e,t)),this}rotate(e){return Mr(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(pi.makeRotation(-e)),this}translate(e,t){return Mr(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(pi.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},pi=new fi,mi=new fi().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hi=new fi().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function gi(){let e={enabled:!0,workingColorSpace:vr,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=vi(e.r),e.g=vi(e.g),e.b=vi(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=yi(e.r),e.g=yi(e.g),e.b=yi(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?yr:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return Mr(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return Mr(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[vr]:{primaries:t,whitePoint:r,transfer:yr,toXYZ:mi,fromXYZ:hi,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:_r},outputColorSpaceConfig:{drawingBufferColorSpace:_r}},[_r]:{primaries:t,whitePoint:r,transfer:br,toXYZ:mi,fromXYZ:hi,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:_r}}}),e}var _i=gi();function vi(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function yi(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var bi,xi=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{bi===void 0&&(bi=Dr(`canvas`)),bi.width=e.width,bi.height=e.height;let t=bi.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=bi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Dr(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=vi(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(vi(t[e]/255)*255):t[e]=vi(t[e]);return{data:t,width:e.width,height:e.height}}return R(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Si=0,Ci=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Si++}),this.uuid=Br(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(wi(r[t].image)):e.push(wi(r[t]))}else e=wi(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function wi(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?xi.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(R(`Texture: Unable to serialize Texture.`),{})}var Ti=0,Ei=new V,Di=class e extends Fr{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=Yt,i=Yt,a=en,o=nn,s=yn,c=rn,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ti++}),this.uuid=Br(),this.name=``,this.source=new Ci(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new B(0,0),this.repeat=new B(1,1),this.center=new B(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fi,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ei).x}get height(){return this.source.getSize(Ei).y}get depth(){return this.source.getSize(Ei).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){R(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?R(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Jt:e.x-=Math.floor(e.x);break;case Yt:e.x=e.x<0?0:1;break;case Xt:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case Jt:e.y-=Math.floor(e.y);break;case Yt:e.y=e.y<0?0:1;break;case Xt:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Di.DEFAULT_IMAGE=null,Di.DEFAULT_MAPPING=300,Di.DEFAULT_ANISOTROPY=1;var Oi=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Vr(this.x,e.x,t.x),this.y=Vr(this.y,e.y,t.y),this.z=Vr(this.z,e.z,t.z),this.w=Vr(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Vr(this.x,e,t),this.y=Vr(this.y,e,t),this.z=Vr(this.z,e,t),this.w=Vr(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Vr(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ki=class extends Fr{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Oi(0,0,e,t),this.scissorTest=!1,this.viewport=new Oi(0,0,e,t),this.textures=[];let r=new Di({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:en,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Ci(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},Ai=class extends ki{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ji=class extends Di{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Yt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Mi=class extends Di{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Yt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},Ni=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Pi.setFromMatrixColumn(e,0).length(),i=1/Pi.setFromMatrixColumn(e,1).length(),a=1/Pi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ii,e,Li)}lookAt(e,t,n){let r=this.elements;return Bi.subVectors(e,t),Bi.lengthSq()===0&&(Bi.z=1),Bi.normalize(),Ri.crossVectors(n,Bi),Ri.lengthSq()===0&&(Math.abs(n.z)===1?Bi.x+=1e-4:Bi.z+=1e-4,Bi.normalize(),Ri.crossVectors(n,Bi)),Ri.normalize(),zi.crossVectors(Bi,Ri),r[0]=Ri.x,r[4]=zi.x,r[8]=Bi.x,r[1]=Ri.y,r[5]=zi.y,r[9]=Bi.y,r[2]=Ri.z,r[6]=zi.z,r[10]=Bi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],ee=r[10],te=r[14],j=r[3],ne=r[7],re=r[11],ie=r[15];return i[0]=a*x+o*T+s*k+c*j,i[4]=a*S+o*E+s*A+c*ne,i[8]=a*C+o*D+s*ee+c*re,i[12]=a*w+o*O+s*te+c*ie,i[1]=l*x+u*T+d*k+f*j,i[5]=l*S+u*E+d*A+f*ne,i[9]=l*C+u*D+d*ee+f*re,i[13]=l*w+u*O+d*te+f*ie,i[2]=p*x+m*T+h*k+g*j,i[6]=p*S+m*E+h*A+g*ne,i[10]=p*C+m*D+h*ee+g*re,i[14]=p*w+m*O+h*te+g*ie,i[3]=_*x+v*T+y*k+b*j,i[7]=_*S+v*E+y*A+b*ne,i[11]=_*C+v*D+y*ee+b*re,i[15]=_*w+v*O+y*te+b*ie,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=Pi.set(r[0],r[1],r[2]).length(),o=Pi.set(r[4],r[5],r[6]).length(),s=Pi.set(r[8],r[9],r[10]).length();i<0&&(a=-a),Fi.copy(this);let c=1/a,l=1/o,u=1/s;return Fi.elements[0]*=c,Fi.elements[1]*=c,Fi.elements[2]*=c,Fi.elements[4]*=l,Fi.elements[5]*=l,Fi.elements[6]*=l,Fi.elements[8]*=u,Fi.elements[9]*=u,Fi.elements[10]*=u,t.setFromRotationMatrix(Fi),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=wr,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=wr,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Pi=new V,Fi=new Ni,Ii=new V(0,0,0),Li=new V(1,1,1),Ri=new V,zi=new V,Bi=new V,Vi=new Ni,Hi=new li,Ui=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(Vr(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-Vr(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(Vr(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-Vr(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(Vr(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-Vr(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:R(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Vi.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vi,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hi.setFromEuler(this),this.setFromQuaternion(Hi,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ui.DEFAULT_ORDER=`XYZ`;var Wi=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},Gi=0,Ki=new V,qi=new li,Ji=new Ni,Yi=new V,Xi=new V,Zi=new V,Qi=new li,$i=new V(1,0,0),ea=new V(0,1,0),ta=new V(0,0,1),na={type:`added`},ra={type:`removed`},ia={type:`childadded`,child:null},aa={type:`childremoved`,child:null},oa=class e extends Fr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gi++}),this.uuid=Br(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new V,n=new Ui,r=new li,i=new V(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ni},normalMatrix:{value:new fi}}),this.matrix=new Ni,this.matrixWorld=new Ni,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wi,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qi.setFromAxisAngle(e,t),this.quaternion.multiply(qi),this}rotateOnWorldAxis(e,t){return qi.setFromAxisAngle(e,t),this.quaternion.premultiply(qi),this}rotateX(e){return this.rotateOnAxis($i,e)}rotateY(e){return this.rotateOnAxis(ea,e)}rotateZ(e){return this.rotateOnAxis(ta,e)}translateOnAxis(e,t){return Ki.copy(e).applyQuaternion(this.quaternion),this.position.add(Ki.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($i,e)}translateY(e){return this.translateOnAxis(ea,e)}translateZ(e){return this.translateOnAxis(ta,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ji.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Yi.copy(e):Yi.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Xi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ji.lookAt(Xi,Yi,this.up):Ji.lookAt(Yi,Xi,this.up),this.quaternion.setFromRotationMatrix(Ji),r&&(Ji.extractRotation(r.matrixWorld),qi.setFromRotationMatrix(Ji),this.quaternion.premultiply(qi.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(z(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(na),ia.child=e,this.dispatchEvent(ia),ia.child=null):z(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ra),aa.child=e,this.dispatchEvent(aa),aa.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ji.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ji.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ji),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(na),ia.child=e,this.dispatchEvent(ia),ia.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xi,e,Zi),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xi,Qi,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};oa.DEFAULT_UP=new V(0,1,0),oa.DEFAULT_MATRIX_AUTO_UPDATE=!0,oa.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var sa=class extends oa{constructor(){super(),this.isGroup=!0,this.type=`Group`}},ca={type:`move`},la=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new sa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new sa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new sa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ca)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new sa;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},ua={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},da={h:0,s:0,l:0},fa={h:0,s:0,l:0};function pa(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var H=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_r){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_i.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=_i.workingColorSpace){return this.r=e,this.g=t,this.b=n,_i.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=_i.workingColorSpace){if(e=Hr(e,1),t=Vr(t,0,1),n=Vr(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=pa(i,r,e+1/3),this.g=pa(i,r,e),this.b=pa(i,r,e-1/3)}return _i.colorSpaceToWorking(this,r),this}setStyle(e,t=_r){function n(t){t!==void 0&&parseFloat(t)<1&&R(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:R(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);R(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_r){let n=ua[e.toLowerCase()];return n===void 0?R(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vi(e.r),this.g=vi(e.g),this.b=vi(e.b),this}copyLinearToSRGB(e){return this.r=yi(e.r),this.g=yi(e.g),this.b=yi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_r){return _i.workingToColorSpace(ma.copy(this),e),Math.round(Vr(ma.r*255,0,255))*65536+Math.round(Vr(ma.g*255,0,255))*256+Math.round(Vr(ma.b*255,0,255))}getHexString(e=_r){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_i.workingColorSpace){_i.workingToColorSpace(ma.copy(this),t);let n=ma.r,r=ma.g,i=ma.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=_i.workingColorSpace){return _i.workingToColorSpace(ma.copy(this),t),e.r=ma.r,e.g=ma.g,e.b=ma.b,e}getStyle(e=_r){_i.workingToColorSpace(ma.copy(this),e);let t=ma.r,n=ma.g,r=ma.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(da),this.setHSL(da.h+e,da.s+t,da.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(da),e.getHSL(fa);let n=Gr(da.h,fa.h,t),r=Gr(da.s,fa.s,t),i=Gr(da.l,fa.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ma=new H;H.NAMES=ua;var ha=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new H(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ga=class extends oa{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ui,this.environmentIntensity=1,this.environmentRotation=new Ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},_a=new V,va=new V,ya=new V,ba=new V,xa=new V,Sa=new V,Ca=new V,wa=new V,Ta=new V,Ea=new V,Da=new Oi,Oa=new Oi,ka=new Oi,Aa=class e{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),_a.subVectors(e,t),r.cross(_a);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){_a.subVectors(r,t),va.subVectors(n,t),ya.subVectors(e,t);let a=_a.dot(_a),o=_a.dot(va),s=_a.dot(ya),c=va.dot(va),l=va.dot(ya),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,ba)!==null&&ba.x>=0&&ba.y>=0&&ba.x+ba.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,ba)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,ba.x),s.addScaledVector(a,ba.y),s.addScaledVector(o,ba.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Da.setScalar(0),Oa.setScalar(0),ka.setScalar(0),Da.fromBufferAttribute(e,t),Oa.fromBufferAttribute(e,n),ka.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Da,i.x),a.addScaledVector(Oa,i.y),a.addScaledVector(ka,i.z),a}static isFrontFacing(e,t,n,r){return _a.subVectors(n,t),va.subVectors(e,t),_a.cross(va).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _a.subVectors(this.c,this.b),va.subVectors(this.a,this.b),_a.cross(va).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;xa.subVectors(r,n),Sa.subVectors(i,n),wa.subVectors(e,n);let s=xa.dot(wa),c=Sa.dot(wa);if(s<=0&&c<=0)return t.copy(n);Ta.subVectors(e,r);let l=xa.dot(Ta),u=Sa.dot(Ta);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(xa,a);Ea.subVectors(e,i);let f=xa.dot(Ea),p=Sa.dot(Ea);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Sa,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Ca.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Ca,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(xa,a).addScaledVector(Sa,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ja=class{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Na.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Na.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Na.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Na):Na.fromBufferAttribute(r,t),Na.applyMatrix4(e.matrixWorld),this.expandByPoint(Na);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Pa.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Pa.copy(e.boundingBox)),Pa.applyMatrix4(e.matrixWorld),this.union(Pa)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Na),Na.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Va),Ha.subVectors(this.max,Va),Fa.subVectors(e.a,Va),Ia.subVectors(e.b,Va),La.subVectors(e.c,Va),Ra.subVectors(Ia,Fa),za.subVectors(La,Ia),Ba.subVectors(Fa,La);let t=[0,-Ra.z,Ra.y,0,-za.z,za.y,0,-Ba.z,Ba.y,Ra.z,0,-Ra.x,za.z,0,-za.x,Ba.z,0,-Ba.x,-Ra.y,Ra.x,0,-za.y,za.x,0,-Ba.y,Ba.x,0];return!Ga(t,Fa,Ia,La,Ha)||(t=[1,0,0,0,1,0,0,0,1],!Ga(t,Fa,Ia,La,Ha))?!1:(Ua.crossVectors(Ra,za),t=[Ua.x,Ua.y,Ua.z],Ga(t,Fa,Ia,La,Ha))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Na).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Na).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Ma[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ma[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ma[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ma[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ma[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ma[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ma[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ma[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ma)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ma=[new V,new V,new V,new V,new V,new V,new V,new V],Na=new V,Pa=new ja,Fa=new V,Ia=new V,La=new V,Ra=new V,za=new V,Ba=new V,Va=new V,Ha=new V,Ua=new V,Wa=new V;function Ga(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){Wa.fromArray(e,a);let o=i.x*Math.abs(Wa.x)+i.y*Math.abs(Wa.y)+i.z*Math.abs(Wa.z),s=t.dot(Wa),c=n.dot(Wa),l=r.dot(Wa);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var Ka=new V,qa=new B,Ja=0,Ya=class extends Fr{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ja++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Sr,this.updateRanges=[],this.gpuType=un,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)qa.fromBufferAttribute(this,t),qa.applyMatrix3(e),this.setXY(t,qa.x,qa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ka.fromBufferAttribute(this,t),Ka.applyMatrix3(e),this.setXYZ(t,Ka.x,Ka.y,Ka.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ka.fromBufferAttribute(this,t),Ka.applyMatrix4(e),this.setXYZ(t,Ka.x,Ka.y,Ka.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ka.fromBufferAttribute(this,t),Ka.applyNormalMatrix(e),this.setXYZ(t,Ka.x,Ka.y,Ka.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ka.fromBufferAttribute(this,t),Ka.transformDirection(e),this.setXYZ(t,Ka.x,Ka.y,Ka.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=oi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=si(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=oi(t,this.array)),t}setX(e,t){return this.normalized&&(t=si(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=oi(t,this.array)),t}setY(e,t){return this.normalized&&(t=si(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=oi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=si(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=oi(t,this.array)),t}setW(e,t){return this.normalized&&(t=si(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=si(t,this.array),n=si(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=si(t,this.array),n=si(n,this.array),r=si(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=si(t,this.array),n=si(n,this.array),r=si(r,this.array),i=si(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},Xa=class extends Ya{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Za=class extends Ya{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Qa=class extends Ya{constructor(e,t,n){super(new Float32Array(e),t,n)}},$a=new ja,eo=new V,to=new V,no=class{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?$a.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;eo.subVectors(e,this.center);let t=eo.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(eo,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(to.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(eo.copy(e.center).add(to)),this.expandByPoint(eo.copy(e.center).sub(to))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ro=0,io=new Ni,ao=new oa,oo=new V,so=new ja,co=new ja,lo=new V,uo=class e extends Fr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ro++}),this.uuid=Br(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Tr(e)?Za:Xa)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new fi().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return io.makeRotationFromQuaternion(e),this.applyMatrix4(io),this}rotateX(e){return io.makeRotationX(e),this.applyMatrix4(io),this}rotateY(e){return io.makeRotationY(e),this.applyMatrix4(io),this}rotateZ(e){return io.makeRotationZ(e),this.applyMatrix4(io),this}translate(e,t,n){return io.makeTranslation(e,t,n),this.applyMatrix4(io),this}scale(e,t,n){return io.makeScale(e,t,n),this.applyMatrix4(io),this}lookAt(e){return ao.lookAt(e),ao.updateMatrix(),this.applyMatrix4(ao.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(oo).negate(),this.translate(oo.x,oo.y,oo.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new Qa(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&R(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ja);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)z(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];so.setFromBufferAttribute(n),this.morphTargetsRelative?(lo.addVectors(this.boundingBox.min,so.min),this.boundingBox.expandByPoint(lo),lo.addVectors(this.boundingBox.max,so.max),this.boundingBox.expandByPoint(lo)):(this.boundingBox.expandByPoint(so.min),this.boundingBox.expandByPoint(so.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&z(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new no);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)z(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new V,1/0);else if(e){let n=this.boundingSphere.center;if(so.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];co.setFromBufferAttribute(n),this.morphTargetsRelative?(lo.addVectors(so.min,co.min),so.expandByPoint(lo),lo.addVectors(so.max,co.max),so.expandByPoint(lo)):(so.expandByPoint(co.min),so.expandByPoint(co.max))}so.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)lo.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(lo));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)lo.fromBufferAttribute(a,t),o&&(oo.fromBufferAttribute(e,t),lo.add(oo)),r=Math.max(r,n.distanceToSquared(lo))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&z(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){z(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new Ya(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new V,s[e]=new V;let c=new V,l=new V,u=new V,d=new B,f=new B,p=new B,m=new V,h=new V;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new V,y=new V,b=new V,x=new V;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new Ya(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new V,i=new V,a=new V,o=new V,s=new V,c=new V,l=new V,u=new V;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)lo.fromBufferAttribute(e,t),lo.normalize(),e.setXYZ(t,lo.x,lo.y,lo.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new Ya(a,r,i)}if(this.index===null)return R(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},fo=new V,po=new V,mo=new fi,ho=class{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=fo.subVectors(n,t).cross(po.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(fo),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||mo.getNormalMatrix(e),r=this.coplanarPoint(fo).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},go=0,_o=class extends Fr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:go++}),this.uuid=Br(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new H(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xr,this.stencilZFail=xr,this.stencilZPass=xr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){R(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?R(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new H().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new ho().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new B().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new B().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},vo=new V,yo=new V,bo=new V,xo=new V,So=class{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vo)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=vo.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vo.copy(this.origin).addScaledVector(this.direction,t),vo.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){yo.copy(e).add(t).multiplyScalar(.5),bo.copy(t).sub(e).normalize(),xo.copy(this.origin).sub(yo);let i=e.distanceTo(t)*.5,a=-this.direction.dot(bo),o=xo.dot(this.direction),s=-xo.dot(bo),c=xo.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(yo).addScaledVector(bo,d),f}intersectSphere(e,t){if(e.radius<0)return null;vo.subVectors(e.center,this.origin);let n=vo.dot(this.direction),r=vo.dot(vo)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,vo)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,ee,te,j;if(y>=b&&y>=x?(w=s,D=u,A=p,j=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,ee=_,te=v):(S=l,C=c,T=f,E=d,O=h,k=m,ee=v,te=_)):b>=x?(w=c,D=d,A=m,j=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,ee=v,te=g):(S=s,C=l,T=u,E=f,O=p,k=h,ee=g,te=v)):(w=l,D=f,A=h,j=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,ee=g,te=_):(S=c,C=s,T=d,E=u,O=m,k=p,ee=_,te=g)),w===0)return null;let ne=S/w,re=C/w,ie=1/w,ae=T-ne*D,oe=E-re*D,se=O-ne*A,ce=k-re*A,le=ee-ne*j,ue=te-re*j,de=le*ce-ue*se,fe=ae*ue-oe*le,pe=se*oe-ce*ae;if(r){if(de<0||fe<0||pe<0)return null}else if((de<0||fe<0||pe<0)&&(de>0||fe>0||pe>0))return null;let me=de+fe+pe;if(me===0)return null;let he=ie*(de*D+fe*A+pe*j);return(me>0?he<0:he>0)?null:this.at(he/me,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Co=class extends _o{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new H(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},wo=new Ni,To=new So,Eo=new no,Do=new V,Oo=new V,ko=new V,Ao=new V,jo=new V,Mo=new V,No=new V,Po=new V,Fo=class extends oa{constructor(e=new uo,t=new Co){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Mo.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(jo.fromBufferAttribute(s,e),a?Mo.addScaledVector(jo,r):Mo.addScaledVector(jo.sub(t),r))}t.add(Mo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Eo.copy(n.boundingSphere),Eo.applyMatrix4(i),To.copy(e.ray).recast(e.near),!(Eo.containsPoint(To.origin)===!1&&(To.intersectSphere(Eo,Do)===null||To.origin.distanceToSquared(Do)>(e.far-e.near)**2))&&(wo.copy(i).invert(),To.copy(e.ray).applyMatrix4(wo),(n.boundingBox===null||To.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,To)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Lo(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Lo(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Lo(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Lo(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function Io(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Po.copy(s),Po.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Po);return l<n.near||l>n.far?null:{distance:l,point:Po.clone(),object:e}}function Lo(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Oo),e.getVertexPosition(c,ko),e.getVertexPosition(l,Ao);let u=Io(e,t,n,r,Oo,ko,Ao,No);if(u){let e=new V;Aa.getBarycoord(No,Oo,ko,Ao,e),i&&(u.uv=Aa.getInterpolatedAttribute(i,s,c,l,e,new B)),a&&(u.uv1=Aa.getInterpolatedAttribute(a,s,c,l,e,new B)),o&&(u.normal=Aa.getInterpolatedAttribute(o,s,c,l,e,new V),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new V,materialIndex:0};Aa.getNormal(Oo,ko,Ao,t.normal),u.face=t,u.barycoord=e}return u}var Ro=class extends Di{constructor(e=null,t=1,n=1,r,i,a,o,s,c=Zt,l=Zt,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},zo=class extends Ya{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Bo=new Ni,Vo=new Ni,Ho=[],Uo=new ja,Wo=new Ni,Go=new Fo,Ko=new no,qo=class extends Fo{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new zo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,Wo)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ja),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Bo),Uo.copy(e.boundingBox).applyMatrix4(Bo),this.boundingBox.union(Uo)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new no),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Bo),Ko.copy(e.boundingSphere).applyMatrix4(Bo),this.boundingSphere.union(Ko)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Go.geometry=this.geometry,Go.material=this.material,Go.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ko.copy(this.boundingSphere),Ko.applyMatrix4(n),e.ray.intersectsSphere(Ko)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,Bo),Vo.multiplyMatrices(n,Bo),Go.matrixWorld=Vo,Go.raycast(e,Ho);for(let e=0,n=Ho.length;e<n;e++){let n=Ho[e];n.instanceId=i,n.object=this,t.push(n)}Ho.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new zo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ro(new Float32Array(r*this.count),r,this.count,Sn,un));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Jo=new no,Yo=new B(.5,.5),Xo=new V,Zo=class{constructor(e=new ho,t=new ho,n=new ho,r=new ho,i=new ho,a=new ho){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=wr,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Jo.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Jo.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Jo)}intersectsSprite(e){return Jo.center.set(0,0,0),Jo.radius=.7071067811865476+Yo.distanceTo(e.center),Jo.applyMatrix4(e.matrixWorld),this.intersectsSphere(Jo)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Xo.x=r.normal.x>0?e.max.x:e.min.x,Xo.y=r.normal.y>0?e.max.y:e.min.y,Xo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Xo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Qo=class extends Di{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},$o=class extends Di{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},es=class extends Di{constructor(e,t,n=ln,r,i,a,o=Zt,s=Zt,c,l=bn,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ci(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ts=class extends es{constructor(e,t=ln,n=301,r,i,a=Zt,o=Zt,s,c=bn){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ns=class extends Di{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},rs=class e extends uo{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Qa(c,3)),this.setAttribute(`normal`,new Qa(l,3)),this.setAttribute(`uv`,new Qa(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new V;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},is=class e extends uo{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new V,l=new B;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new Qa(a,3)),this.setAttribute(`normal`,new Qa(o,3)),this.setAttribute(`uv`,new Qa(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},as=class e extends uo{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new Qa(u,3)),this.setAttribute(`normal`,new Qa(d,3)),this.setAttribute(`uv`,new Qa(f,2));function _(){let a=new V,_=new V,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new B,m=new V,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},os=class e extends as{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ss=class e extends uo{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new Qa(i,3)),this.setAttribute(`normal`,new Qa(i.slice(),3)),this.setAttribute(`uv`,new Qa(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new V,r=new V,i=new V;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new V;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new V;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new V,t=new V,n=new V,r=new V,o=new B,s=new B,c=new B;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},cs=class e extends ss{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=1/n,i=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r];super(i,[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type=`DodecahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},ls=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){R(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new B:new V);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new V,r=[],i=[],a=[],o=new V,s=new Ni;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new V)}i[0]=new V,a[0]=new V;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(Vr(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(Vr(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},us=class extends ls{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new B){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ds=class extends us{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function fs(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var ps=new V,ms=new V,hs=new fs,gs=new fs,_s=new fs,vs=class extends ls{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new V){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(ms.subVectors(r[0],r[1]).add(r[0]),c=ms);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(ps.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=ps),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),hs.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),gs.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),_s.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(hs.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),gs.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),_s.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(hs.calc(s),gs.calc(s),_s.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new V().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function ys(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function bs(e,t){let n=1-e;return n*n*t}function xs(e,t){return 2*(1-e)*e*t}function Ss(e,t){return e*e*t}function Cs(e,t,n,r){return bs(e,t)+xs(e,n)+Ss(e,r)}function ws(e,t){let n=1-e;return n*n*n*t}function Ts(e,t){let n=1-e;return 3*n*n*e*t}function Es(e,t){return 3*(1-e)*e*e*t}function Ds(e,t){return e*e*e*t}function Os(e,t,n,r,i){return ws(e,t)+Ts(e,n)+Es(e,r)+Ds(e,i)}var ks=class extends ls{constructor(e=new B,t=new B,n=new B,r=new B){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new B){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Os(e,r.x,i.x,a.x,o.x),Os(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},As=class extends ls{constructor(e=new V,t=new V,n=new V,r=new V){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new V){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Os(e,r.x,i.x,a.x,o.x),Os(e,r.y,i.y,a.y,o.y),Os(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},js=class extends ls{constructor(e=new B,t=new B){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new B){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new B){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ms=class extends ls{constructor(e=new V,t=new V){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new V){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new V){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ns=class extends ls{constructor(e=new B,t=new B,n=new B){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new B){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Cs(e,r.x,i.x,a.x),Cs(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ps=class extends ls{constructor(e=new V,t=new V,n=new V){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new V){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Cs(e,r.x,i.x,a.x),Cs(e,r.y,i.y,a.y),Cs(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Fs=class extends ls{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new B){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(ys(o,s.x,c.x,l.x,u.x),ys(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new B().fromArray(n))}return this}},Is=Object.freeze({__proto__:null,ArcCurve:ds,CatmullRomCurve3:vs,CubicBezierCurve:ks,CubicBezierCurve3:As,EllipseCurve:us,LineCurve:js,LineCurve3:Ms,QuadraticBezierCurve:Ns,QuadraticBezierCurve3:Ps,SplineCurve:Fs}),Ls=class extends ls{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new Is[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new Is[n.type]().fromJSON(n))}return this}},Rs=class extends Ls{constructor(e){super(),this.type=`Path`,this.currentPoint=new B,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new js(this.currentPoint.clone(),new B(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new Ns(this.currentPoint.clone(),new B(e,t),new B(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new ks(this.currentPoint.clone(),new B(e,t),new B(n,r),new B(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new Fs([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new us(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},zs=class extends Rs{constructor(e){super(e),this.uuid=Br(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new Rs().fromJSON(n))}return this}};function Bs(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=Vs(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l;if(r&&(a=Js(e,t,a,n)),e.length>80*n){s=e[0],c=e[1];let t=s,r=c;for(let a=n;a<i;a+=n){let n=e[a],i=e[a+1];n<s&&(s=n),i<c&&(c=i),n>t&&(t=n),i>r&&(r=i)}l=Math.max(t-s,r-c),l=l===0?0:32767/l}return Us(a,o,n,s,c,l,0),o}function Vs(e,t,n,r,i){let a;if(i===vc(e,t,n,r)>0)for(let i=t;i<n;i+=r)a=hc(i/r|0,e[i],e[i+1],a);else for(let i=n-r;i>=t;i-=r)a=hc(i/r|0,e[i],e[i+1],a);return a&&sc(a,a.next)&&(gc(a),a=a.next),a}function Hs(e,t){if(!e)return e;t||=e;let n=e,r;do if(r=!1,!n.steiner&&(sc(n,n.next)||oc(n.prev,n,n.next)===0)){if(gc(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function Us(e,t,n,r,i,a,o){if(!e)return;!o&&a&&$s(e,r,i,a);let s=e;for(;e.prev!==e.next;){let c=e.prev,l=e.next;if(a?Gs(e,r,i,a):Ws(e))t.push(c.i,e.i,l.i),gc(e),e=l.next,s=l.next;else if(e=l,e===s){o?o===1?(e=Ks(Hs(e),t),Us(e,t,n,r,i,a,2)):o===2&&qs(e,t,n,r,i,a):Us(Hs(e),t,n,r,i,a,1);break}}}function Ws(e){let t=e.prev,n=e,r=e.next;if(oc(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=Math.min(i,a,o),d=Math.min(s,c,l),f=Math.max(i,a,o),p=Math.max(s,c,l),m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&ic(i,s,a,c,o,l,m.x,m.y)&&oc(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Gs(e,t,n,r){let i=e.prev,a=e,o=e.next;if(oc(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=Math.min(s,c,l),m=Math.min(u,d,f),h=Math.max(s,c,l),g=Math.max(u,d,f),_=tc(p,m,t,n,r),v=tc(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&ic(s,u,c,d,l,f,y.x,y.y)&&oc(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&ic(s,u,c,d,l,f,b.x,b.y)&&oc(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&ic(s,u,c,d,l,f,y.x,y.y)&&oc(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&ic(s,u,c,d,l,f,b.x,b.y)&&oc(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Ks(e,t){let n=e;do{let r=n.prev,i=n.next.next;!sc(r,i)&&cc(r,n,n.next,i)&&fc(r,i)&&fc(i,r)&&(t.push(r.i,n.i,i.i),gc(n),gc(n.next),n=e=i),n=n.next}while(n!==e);return Hs(n)}function qs(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&ac(o,e)){let s=mc(o,e);o=Hs(o,o.next),s=Hs(s,s.next),Us(o,t,n,r,i,a,0),Us(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function Js(e,t,n,r){let i=[];for(let n=0,a=t.length;n<a;n++){let o=Vs(e,t[n]*r,n<a-1?t[n+1]*r:e.length,r,!1);o===o.next&&(o.steiner=!0),i.push(nc(o))}i.sort(Ys);for(let e=0;e<i.length;e++)n=Xs(i[e],n);return n}function Ys(e,t){let n=e.x-t.x;return n===0&&(n=e.y-t.y,n===0&&(n=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),n}function Xs(e,t){let n=Zs(e,t);if(!n)return t;let r=mc(n,e);return Hs(r,r.next),Hs(n,n.next)}function Zs(e,t){let n=t,r=e.x,i=e.y,a=-1/0,o;if(sc(e,n))return n;do{if(sc(e,n.next))return n.next;if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){let e=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=r&&e>a&&(a=e,o=n.x<n.next.x?n:n.next,e===r))return o}n=n.next}while(n!==t);if(!o)return null;let s=o,c=o.x,l=o.y,u=1/0;n=o;do{if(r>=n.x&&n.x>=c&&r!==n.x&&rc(i<l?r:a,i,c,l,i<l?a:r,i,n.x,n.y)){let t=Math.abs(i-n.y)/(r-n.x);fc(n,e)&&(t<u||t===u&&(n.x>o.x||n.x===o.x&&Qs(o,n)))&&(o=n,u=t)}n=n.next}while(n!==s);return o}function Qs(e,t){return oc(e.prev,e,t.prev)<0&&oc(t.next,e,e.next)<0}function $s(e,t,n,r){let i=e;do i.z===0&&(i.z=tc(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,ec(i)}function ec(e){let t,n=1;do{let r=e,i;e=null;let a=null;for(t=0;r;){t++;let o=r,s=0;for(let e=0;e<n&&(s++,o=o.nextZ,o);e++);let c=n;for(;s>0||c>0&&o;)s!==0&&(c===0||!o||r.z<=o.z)?(i=r,r=r.nextZ,s--):(i=o,o=o.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;r=o}a.nextZ=null,n*=2}while(t>1);return e}function tc(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function nc(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function rc(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function ic(e,t,n,r,i,a,o,s){return(e!==o||t!==s)&&rc(e,t,n,r,i,a,o,s)}function ac(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!dc(e,t)&&(fc(e,t)&&fc(t,e)&&pc(e,t)&&(oc(e.prev,e,t.prev)||oc(e,t.prev,t))||sc(e,t)&&oc(e.prev,e,e.next)>0&&oc(t.prev,t,t.next)>0)}function oc(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function sc(e,t){return e.x===t.x&&e.y===t.y}function cc(e,t,n,r){let i=uc(oc(e,t,n)),a=uc(oc(e,t,r)),o=uc(oc(n,r,e)),s=uc(oc(n,r,t));return!!(i!==a&&o!==s||i===0&&lc(e,n,t)||a===0&&lc(e,r,t)||o===0&&lc(n,e,r)||s===0&&lc(n,t,r))}function lc(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function uc(e){return e>0?1:e<0?-1:0}function dc(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&cc(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function fc(e,t){return oc(e.prev,e,e.next)<0?oc(e,t,e.next)>=0&&oc(e,e.prev,t)>=0:oc(e,t,e.prev)<0||oc(e,e.next,t)<0}function pc(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function mc(e,t){let n=_c(e.i,e.x,e.y),r=_c(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function hc(e,t,n,r){let i=_c(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function gc(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function _c(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function vc(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var yc=class{static triangulate(e,t,n=2){return Bs(e,t,n)}},bc=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];xc(e),Sc(n,e);let a=e.length;t.forEach(xc);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,Sc(n,t[e]);let o=yc.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function xc(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function Sc(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var Cc=class e extends uo{constructor(e=new zs([new B(.5,.5),new B(-.5,.5),new B(-.5,-.5),new B(.5,-.5)]),t={}){super(),this.type=`ExtrudeGeometry`,this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],i=[];for(let t=0,n=e.length;t<n;t++){let n=e[t];a(n)}this.setAttribute(`position`,new Qa(r,3)),this.setAttribute(`uv`,new Qa(i,2)),this.computeVertexNormals();function a(e){let a=[],o=t.curveSegments===void 0?12:t.curveSegments,s=t.steps===void 0?1:t.steps,c=t.depth===void 0?1:t.depth,l=t.bevelEnabled===void 0||t.bevelEnabled,u=t.bevelThickness===void 0?.2:t.bevelThickness,d=t.bevelSize===void 0?u-.1:t.bevelSize,f=t.bevelOffset===void 0?0:t.bevelOffset,p=t.bevelSegments===void 0?3:t.bevelSegments,m=t.extrudePath,h=t.UVGenerator===void 0?wc:t.UVGenerator,g,_=!1,v,y,b,x;if(m){g=m.getSpacedPoints(s),_=!0,l=!1;let e=m.isCatmullRomCurve3?m.closed:!1;v=m.computeFrenetFrames(s,e),y=new V,b=new V,x=new V}l||(p=0,u=0,d=0,f=0);let S=e.extractPoints(o),C=S.shape,w=S.holes;if(!bc.isClockWise(C)){C=C.reverse();for(let e=0,t=w.length;e<t;e++){let t=w[e];bc.isClockWise(t)&&(w[e]=t.reverse())}}function T(e){let t=e[0];for(let n=1;n<=e.length;n++){let r=n%e.length,i=e[r],a=i.x-t.x,o=i.y-t.y,s=a*a+o*o,c=Math.max(Math.abs(i.x),Math.abs(i.y),Math.abs(t.x),Math.abs(t.y));s<=10000000000000001e-36*c*c?(e.splice(r,1),n--):t=i}}T(C),w.forEach(T);let E=w.length,D=C;for(let e=0;e<E;e++){let t=w[e];C=C.concat(t)}function O(e,t,n){return t||z(`ExtrudeGeometry: vec does not exist`),e.clone().addScaledVector(t,n)}let k=C.length;function A(e,t,n){let r,i,a,o=e.x-t.x,s=e.y-t.y,c=n.x-e.x,l=n.y-e.y,u=o*o+s*s,d=o*l-s*c;if(Math.abs(d)>2**-52){let d=Math.sqrt(u),f=Math.sqrt(c*c+l*l),p=t.x-s/d,m=t.y+o/d,h=n.x-l/f,g=n.y+c/f,_=((h-p)*l-(g-m)*c)/(o*l-s*c);r=p+o*_-e.x,i=m+s*_-e.y;let v=r*r+i*i;if(v<=2)return new B(r,i);a=Math.sqrt(v/2)}else{let e=!1;o>2**-52?c>2**-52&&(e=!0):o<-(2**-52)?c<-(2**-52)&&(e=!0):Math.sign(s)===Math.sign(l)&&(e=!0),e?(r=-s,i=o,a=Math.sqrt(u)):(r=o,i=s,a=Math.sqrt(u/2))}return new B(r/a,i/a)}let ee=[];for(let e=0,t=D.length,n=t-1,r=e+1;e<t;e++,n++,r++)n===t&&(n=0),r===t&&(r=0),ee[e]=A(D[e],D[n],D[r]);let te=[],j,ne=ee.concat();for(let e=0,t=E;e<t;e++){let t=w[e];j=[];for(let e=0,n=t.length,r=n-1,i=e+1;e<n;e++,r++,i++)r===n&&(r=0),i===n&&(i=0),j[e]=A(t[e],t[r],t[i]);te.push(j),ne=ne.concat(j)}let re;if(p===0)re=bc.triangulateShape(D,w);else{let e=[],t=[];for(let n=0;n<p;n++){let r=n/p,i=u*Math.cos(r*Math.PI/2),a=d*Math.sin(r*Math.PI/2)+f;for(let t=0,n=D.length;t<n;t++){let n=O(D[t],ee[t],a);le(n.x,n.y,-i),r===0&&e.push(n)}for(let e=0,n=E;e<n;e++){let n=w[e];j=te[e];let o=[];for(let e=0,t=n.length;e<t;e++){let t=O(n[e],j[e],a);le(t.x,t.y,-i),r===0&&o.push(t)}r===0&&t.push(o)}}re=bc.triangulateShape(e,t)}let ie=re.length,ae=d+f;for(let e=0;e<k;e++){let t=l?O(C[e],ne[e],ae):C[e];_?(b.copy(v.normals[0]).multiplyScalar(t.x),y.copy(v.binormals[0]).multiplyScalar(t.y),x.copy(g[0]).add(b).add(y),le(x.x,x.y,x.z)):le(t.x,t.y,0)}for(let e=1;e<=s;e++)for(let t=0;t<k;t++){let n=l?O(C[t],ne[t],ae):C[t];_?(b.copy(v.normals[e]).multiplyScalar(n.x),y.copy(v.binormals[e]).multiplyScalar(n.y),x.copy(g[e]).add(b).add(y),le(x.x,x.y,x.z)):le(n.x,n.y,c/s*e)}for(let e=p-1;e>=0;e--){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=D.length;e<t;e++){let t=O(D[e],ee[e],r);le(t.x,t.y,c+n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];j=te[e];for(let e=0,i=t.length;e<i;e++){let i=O(t[e],j[e],r);_?le(i.x,i.y+g[s-1].y,g[s-1].x+n):le(i.x,i.y,c+n)}}}oe(),se();function oe(){let e=r.length/3;if(l){let e=0,t=k*e;for(let e=0;e<ie;e++){let n=re[e];ue(n[2]+t,n[1]+t,n[0]+t)}e=s+p*2,t=k*e;for(let e=0;e<ie;e++){let n=re[e];ue(n[0]+t,n[1]+t,n[2]+t)}}else{for(let e=0;e<ie;e++){let t=re[e];ue(t[2],t[1],t[0])}for(let e=0;e<ie;e++){let t=re[e];ue(t[0]+k*s,t[1]+k*s,t[2]+k*s)}}n.addGroup(e,r.length/3-e,0)}function se(){let e=r.length/3,t=0;ce(D,t),t+=D.length;for(let e=0,n=w.length;e<n;e++){let n=w[e];ce(n,t),t+=n.length}n.addGroup(e,r.length/3-e,1)}function ce(e,t){let n=e.length;for(;--n>=0;){let r=n,i=n-1;i<0&&(i=e.length-1);for(let e=0,n=s+p*2;e<n;e++){let n=k*e,a=k*(e+1);de(t+r+n,t+i+n,t+i+a,t+r+a)}}}function le(e,t,n){a.push(e),a.push(t),a.push(n)}function ue(e,t,i){fe(e),fe(t),fe(i);let a=r.length/3,o=h.generateTopUV(n,r,a-3,a-2,a-1);pe(o[0]),pe(o[1]),pe(o[2])}function de(e,t,i,a){fe(e),fe(t),fe(a),fe(t),fe(i),fe(a);let o=r.length/3,s=h.generateSideWallUV(n,r,o-6,o-3,o-2,o-1);pe(s[0]),pe(s[1]),pe(s[3]),pe(s[1]),pe(s[2]),pe(s[3])}function fe(e){r.push(a[e*3+0]),r.push(a[e*3+1]),r.push(a[e*3+2])}function pe(e){i.push(e.x),i.push(e.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Tc(t,n,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Is[i.type]().fromJSON(i)),new e(r,t.options)}},wc={generateTopUV:function(e,t,n,r,i){let a=t[n*3],o=t[n*3+1],s=t[r*3],c=t[r*3+1],l=t[i*3],u=t[i*3+1];return[new B(a,o),new B(s,c),new B(l,u)]},generateSideWallUV:function(e,t,n,r,i,a){let o=t[n*3],s=t[n*3+1],c=t[n*3+2],l=t[r*3],u=t[r*3+1],d=t[r*3+2],f=t[i*3],p=t[i*3+1],m=t[i*3+2],h=t[a*3],g=t[a*3+1],_=t[a*3+2];return Math.abs(s-u)<Math.abs(o-l)?[new B(o,1-c),new B(l,1-d),new B(f,1-m),new B(h,1-_)]:[new B(s,1-c),new B(u,1-d),new B(p,1-m),new B(g,1-_)]}};function Tc(e,t,n){if(n.shapes=[],Array.isArray(e))for(let t=0,r=e.length;t<r;t++){let r=e[t];n.shapes.push(r.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}var Ec=class e extends ss{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Dc=class e extends ss{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type=`OctahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Oc=class e extends uo{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new Qa(p,3)),this.setAttribute(`normal`,new Qa(m,3)),this.setAttribute(`uv`,new Qa(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},kc=class e extends uo{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new V,p=new B;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new Qa(s,3)),this.setAttribute(`normal`,new Qa(c,3)),this.setAttribute(`uv`,new Qa(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Ac=class e extends uo{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new V,d=new V,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new Qa(p,3)),this.setAttribute(`normal`,new Qa(m,3)),this.setAttribute(`uv`,new Qa(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},jc=class e extends uo{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new V,f=new V,p=new V;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new Qa(c,3)),this.setAttribute(`normal`,new Qa(l,3)),this.setAttribute(`uv`,new Qa(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function Mc(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(Pc(i))i.isRenderTargetTexture?(R(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(Pc(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function Nc(e){let t={};for(let n=0;n<e.length;n++){let r=Mc(e[n]);for(let e in r)t[e]=r[e]}return t}function Pc(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Fc(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Ic(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:_i.workingColorSpace}var Lc={clone:Mc,merge:Nc},Rc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Bc=class extends _o{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rc,this.fragmentShader=zc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Mc(e.uniforms),this.uniformsGroups=Fc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new H().setHex(r.value);break;case`v2`:this.uniforms[n].value=new B().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new V().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Oi().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new fi().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new Ni().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Vc=class extends Bc{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Hc=class extends _o{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type=`MeshLambertMaterial`,this.color=new H(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new H(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new B(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Uc=class extends _o{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=gr,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Wc=class extends _o{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Gc(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function Kc(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var qc=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Jc=class extends qc{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:pr,endingEnd:pr}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case mr:i=e,o=2*t-n;break;case hr:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case mr:a=e,s=2*n-t;break;case hr:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Yc=class extends qc{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Xc=class extends qc{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Zc=class extends qc{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=el(n,t,g,y,r);i[p]=Qc(x,o,_,b,m)}return i}};function Qc(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function $c(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function el(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=Qc(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=$c(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var tl=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Gc(t,this.TimeBufferType),this.values=Gc(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Gc(e.times,Array),values:Gc(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),Kc(e.settings)&&(n.settings={inTangents:Gc(e.settings.inTangents,Array),outTangents:Gc(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Xc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Yc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Jc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Zc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case lr:t=this.InterpolantFactoryMethodDiscrete;break;case ur:t=this.InterpolantFactoryMethodLinear;break;case dr:t=this.InterpolantFactoryMethodSmooth;break;case fr:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return R(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return lr;case this.InterpolantFactoryMethodLinear:return ur;case this.InterpolantFactoryMethodSmooth:return dr;case this.InterpolantFactoryMethodBezier:return fr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Kc(this.settings)&&(nl(this.settings.inTangents,e),nl(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(z(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(z(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){z(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){z(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Er(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){z(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===dr,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Kc(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function nl(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}tl.prototype.ValueTypeName=``,tl.prototype.TimeBufferType=Float32Array,tl.prototype.ValueBufferType=Float32Array,tl.prototype.DefaultInterpolation=ur;var rl=class extends tl{constructor(e,t,n){super(e,t,n)}};rl.prototype.ValueTypeName=`bool`,rl.prototype.ValueBufferType=Array,rl.prototype.DefaultInterpolation=lr,rl.prototype.InterpolantFactoryMethodLinear=void 0,rl.prototype.InterpolantFactoryMethodSmooth=void 0;var il=class extends tl{constructor(e,t,n,r){super(e,t,n,r)}};il.prototype.ValueTypeName=`color`;var al=class extends tl{constructor(e,t,n,r){super(e,t,n,r)}};al.prototype.ValueTypeName=`number`;var ol=class extends qc{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)li.slerpFlat(i,0,a,c-o,a,c,s);return i}},sl=class extends tl{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new ol(this.times,this.values,this.getValueSize(),e)}};sl.prototype.ValueTypeName=`quaternion`,sl.prototype.InterpolantFactoryMethodSmooth=void 0;var cl=class extends tl{constructor(e,t,n){super(e,t,n)}};cl.prototype.ValueTypeName=`string`,cl.prototype.ValueBufferType=Array,cl.prototype.DefaultInterpolation=lr,cl.prototype.InterpolantFactoryMethodLinear=void 0,cl.prototype.InterpolantFactoryMethodSmooth=void 0;var ll=class extends tl{constructor(e,t,n,r){super(e,t,n,r)}};ll.prototype.ValueTypeName=`vector`;var ul=class extends oa{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new H(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},dl=class extends ul{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(oa.DEFAULT_UP),this.updateMatrix(),this.groundColor=new H(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},fl=new Ni,pl=new V,ml=new V,hl=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new B(512,512),this.mapType=rn,this.map=null,this.mapPass=null,this.matrix=new Ni,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zo,this._frameExtents=new B(1,1),this._viewportCount=1,this._viewports=[new Oi(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;pl.setFromMatrixPosition(e.matrixWorld),t.position.copy(pl),ml.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ml),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){fl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(fl,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(fl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},gl=new V,_l=new li,vl=new V,yl=class extends oa{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new Ni,this.projectionMatrix=new Ni,this.projectionMatrixInverse=new Ni,this.coordinateSystem=wr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(gl,_l,vl),vl.x===1&&vl.y===1&&vl.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(gl,_l,vl.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(gl,_l,vl),vl.x===1&&vl.y===1&&vl.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(gl,_l,vl.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},bl=new V,xl=new B,Sl=new B,Cl=class extends yl{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=zr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Rr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zr*2*Math.atan(Math.tan(Rr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){bl.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(bl.x,bl.y).multiplyScalar(-e/bl.z),bl.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(bl.x,bl.y).multiplyScalar(-e/bl.z)}getViewSize(e,t){return this.getViewBounds(e,xl,Sl),t.subVectors(Sl,xl)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Rr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},wl=class extends yl{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Tl=class extends hl{constructor(){super(new wl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},El=class extends ul{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(oa.DEFAULT_UP),this.updateMatrix(),this.target=new oa,this.shadow=new Tl}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Dl=class extends uo{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type=`InstancedBufferGeometry`,this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}},Ol=-90,kl=1,Al=class extends oa{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Cl(Ol,kl,e,t);r.layers=this.layers,this.add(r);let i=new Cl(Ol,kl,e,t);i.layers=this.layers,this.add(i);let a=new Cl(Ol,kl,e,t);a.layers=this.layers,this.add(a);let o=new Cl(Ol,kl,e,t);o.layers=this.layers,this.add(o);let s=new Cl(Ol,kl,e,t);s.layers=this.layers,this.add(s);let c=new Cl(Ol,kl,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},jl=class extends Cl{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Ml=`\\[\\]\\.:\\/`,Nl=RegExp(`[\\[\\]\\.:\\/]`,`g`),Pl=`[^\\[\\]\\.:\\/]`,Fl=`[^`+Ml.replace(`\\.`,``)+`]`,Il=`((?:WC+[\\/:])*)`.replace(`WC`,Pl),Ll=`(WCOD+)?`.replace(`WCOD`,Fl),Rl=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Pl),zl=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Pl),Bl=RegExp(`^`+Il+Ll+Rl+zl+`$`),Vl=[`material`,`materials`,`bones`,`map`],Hl=class{constructor(e,t,n){let r=n||Ul.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ul=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Nl,``)}static parseTrackName(e){let t=Bl.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Vl.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){R(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){z(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){z(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){z(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){z(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){z(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){z(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){z(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;z(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){z(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){z(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ul.Composite=Hl,Ul.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Ul.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Ul.prototype.GetterByBindingType=[Ul.prototype._getValue_direct,Ul.prototype._getValue_array,Ul.prototype._getValue_arrayElement,Ul.prototype._getValue_toArray],Ul.prototype.SetterByBindingTypeAndVersioning=[[Ul.prototype._setValue_direct,Ul.prototype._setValue_direct_setNeedsUpdate,Ul.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ul.prototype._setValue_array,Ul.prototype._setValue_array_setNeedsUpdate,Ul.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ul.prototype._setValue_arrayElement,Ul.prototype._setValue_arrayElement_setNeedsUpdate,Ul.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ul.prototype._setValue_fromArray,Ul.prototype._setValue_fromArray_setNeedsUpdate,Ul.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}};function Wl(e,t,n,r){let i=Gl(r);switch(n){case _n:return e*t;case Sn:return e*t/i.components*i.byteLength;case Cn:return e*t/i.components*i.byteLength;case wn:return e*t*2/i.components*i.byteLength;case Tn:return e*t*2/i.components*i.byteLength;case vn:return e*t*3/i.components*i.byteLength;case yn:return e*t*4/i.components*i.byteLength;case En:return e*t*4/i.components*i.byteLength;case Dn:case On:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case kn:case An:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Mn:case Pn:return Math.max(e,16)*Math.max(t,8)/4;case jn:case Nn:return Math.max(e,8)*Math.max(t,8)/2;case Fn:case In:case Rn:case zn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Ln:case Bn:case Vn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Hn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Un:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Wn:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Gn:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Kn:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case qn:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Jn:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Yn:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Xn:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Zn:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Qn:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case $n:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case er:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case tr:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case nr:case rr:case ir:return Math.ceil(e/4)*Math.ceil(t/4)*16;case ar:case or:return Math.ceil(e/4)*Math.ceil(t/4)*8;case sr:case cr:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Gl(e){switch(e){case rn:case an:return{byteLength:1,components:1};case sn:case on:case dn:return{byteLength:2,components:1};case fn:case pn:return{byteLength:2,components:4};case ln:case cn:case un:return{byteLength:4,components:1};case hn:case gn:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?R(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function Kl(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function ql(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Jl={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},U={common:{diffuse:{value:new H(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fi},alphaMap:{value:null},alphaMapTransform:{value:new fi},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fi}},envmap:{envMap:{value:null},envMapRotation:{value:new fi},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fi}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fi}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fi},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fi},normalScale:{value:new B(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fi},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fi}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fi}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fi}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new H(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new V},probesMax:{value:new V},probesResolution:{value:new V}},points:{diffuse:{value:new H(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fi},alphaTest:{value:0},uvTransform:{value:new fi}},sprite:{diffuse:{value:new H(16777215)},opacity:{value:1},center:{value:new B(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fi},alphaMap:{value:null},alphaMapTransform:{value:new fi},alphaTest:{value:0}}},Yl={basic:{uniforms:Nc([U.common,U.specularmap,U.envmap,U.aomap,U.lightmap,U.fog]),vertexShader:Jl.meshbasic_vert,fragmentShader:Jl.meshbasic_frag},lambert:{uniforms:Nc([U.common,U.specularmap,U.envmap,U.aomap,U.lightmap,U.emissivemap,U.bumpmap,U.normalmap,U.displacementmap,U.fog,U.lights,{emissive:{value:new H(0)},envMapIntensity:{value:1}}]),vertexShader:Jl.meshlambert_vert,fragmentShader:Jl.meshlambert_frag},phong:{uniforms:Nc([U.common,U.specularmap,U.envmap,U.aomap,U.lightmap,U.emissivemap,U.bumpmap,U.normalmap,U.displacementmap,U.fog,U.lights,{emissive:{value:new H(0)},specular:{value:new H(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Jl.meshphong_vert,fragmentShader:Jl.meshphong_frag},standard:{uniforms:Nc([U.common,U.envmap,U.aomap,U.lightmap,U.emissivemap,U.bumpmap,U.normalmap,U.displacementmap,U.roughnessmap,U.metalnessmap,U.fog,U.lights,{emissive:{value:new H(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jl.meshphysical_vert,fragmentShader:Jl.meshphysical_frag},toon:{uniforms:Nc([U.common,U.aomap,U.lightmap,U.emissivemap,U.bumpmap,U.normalmap,U.displacementmap,U.gradientmap,U.fog,U.lights,{emissive:{value:new H(0)}}]),vertexShader:Jl.meshtoon_vert,fragmentShader:Jl.meshtoon_frag},matcap:{uniforms:Nc([U.common,U.bumpmap,U.normalmap,U.displacementmap,U.fog,{matcap:{value:null}}]),vertexShader:Jl.meshmatcap_vert,fragmentShader:Jl.meshmatcap_frag},points:{uniforms:Nc([U.points,U.fog]),vertexShader:Jl.points_vert,fragmentShader:Jl.points_frag},dashed:{uniforms:Nc([U.common,U.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jl.linedashed_vert,fragmentShader:Jl.linedashed_frag},depth:{uniforms:Nc([U.common,U.displacementmap]),vertexShader:Jl.depth_vert,fragmentShader:Jl.depth_frag},normal:{uniforms:Nc([U.common,U.bumpmap,U.normalmap,U.displacementmap,{opacity:{value:1}}]),vertexShader:Jl.meshnormal_vert,fragmentShader:Jl.meshnormal_frag},sprite:{uniforms:Nc([U.sprite,U.fog]),vertexShader:Jl.sprite_vert,fragmentShader:Jl.sprite_frag},background:{uniforms:{uvTransform:{value:new fi},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jl.background_vert,fragmentShader:Jl.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new fi}},vertexShader:Jl.backgroundCube_vert,fragmentShader:Jl.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jl.cube_vert,fragmentShader:Jl.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jl.equirect_vert,fragmentShader:Jl.equirect_frag},distance:{uniforms:Nc([U.common,U.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jl.distance_vert,fragmentShader:Jl.distance_frag},shadow:{uniforms:Nc([U.lights,U.fog,{color:{value:new H(0)},opacity:{value:1}}]),vertexShader:Jl.shadow_vert,fragmentShader:Jl.shadow_frag}};Yl.physical={uniforms:Nc([Yl.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fi},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fi},clearcoatNormalScale:{value:new B(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fi},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fi},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fi},sheen:{value:0},sheenColor:{value:new H(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fi},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fi},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fi},transmissionSamplerSize:{value:new B},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fi},attenuationDistance:{value:0},attenuationColor:{value:new H(0)},specularColor:{value:new H(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fi},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fi},anisotropyVector:{value:new B},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fi}}]),vertexShader:Jl.meshphysical_vert,fragmentShader:Jl.meshphysical_frag};var Xl={r:0,b:0,g:0},Zl=new Ni,Ql=new fi;Ql.set(-1,0,0,0,1,0,0,0,1);function $l(e,t,n,r,i,a){let o=new H(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new Fo(new rs(1,1,1),new Bc({name:`BackgroundCubeMaterial`,uniforms:Mc(Yl.backgroundCube.uniforms),vertexShader:Yl.backgroundCube.vertexShader,fragmentShader:Yl.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Zl.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Ql),l.material.toneMapped=_i.getTransfer(i.colorSpace)!==br,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new Fo(new Oc(2,2),new Bc({name:`BackgroundMaterial`,uniforms:Mc(Yl.background.uniforms),vertexShader:Yl.background.vertexShader,fragmentShader:Yl.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=_i.getTransfer(i.colorSpace)!==br,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Xl,Ic(e)),n.buffers.color.setClear(Xl.r,Xl.g,Xl.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function eu(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function tu(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function nu(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(R(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&R(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function ru(e){let t=this,n=null,r=0,i=!1,a=!1,o=new ho,s=new fi,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var iu=4,au=6,ou=20,su=256,cu=new wl,lu=new H,uu=null,du=0,fu=0,pu=!1,mu=new V,hu=new V,gu=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=mu}=i;uu=this._renderer.getRenderTarget(),du=this._renderer.getActiveCubeFace(),fu=this._renderer.getActiveMipmapLevel(),pu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Su(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(uu,du,fu),this._renderer.xr.enabled=pu,e.scissorTest=!1,yu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),uu=this._renderer.getRenderTarget(),du=this._renderer.getActiveCubeFace(),fu=this._renderer.getActiveMipmapLevel(),pu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:dn,format:yn,colorSpace:vr,depthBuffer:!1},r=vu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vu(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=_u(r)),this._blurMaterial=xu(r,e,t),this._ggxMaterial=bu(r,e,t)}return r}_compileMaterial(e){let t=new Fo(new uo,e);this._renderer.compile(t,cu)}_sceneToCubeUV(e,t,n,r,i){let a=new Cl(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(lu),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Fo(new rs,new Co({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(lu),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;yu(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Su());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;yu(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,cu)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-iu?n-d+iu:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,yu(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,cu),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,yu(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,cu)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];yu(t,3*l*(r>this._lodMax-iu?r-this._lodMax+iu:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,cu)}};function _u(e){let t=[],n=[],r=e,i=e-iu+1+au;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?hu.set(1,r,n):e===1?hu.set(-n,1,-r):e===2?hu.set(-n,r,1):e===3?hu.set(-1,r,-n):e===4?hu.set(-n,-1,r):hu.set(n,r,-1),hu.toArray(l,(e*6+t)*3)}}let u=new uo;u.setAttribute(`position`,new Ya(c,3)),u.setAttribute(`outputDirection`,new Ya(l,3)),n.push(new Fo(u,null)),r>iu&&r--}return{lodMeshes:n,sizeLods:t}}function vu(e,t,n){let r=new Ai(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function yu(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function bu(e,t,n){return new Bc({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:su,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:wu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function xu(e,t,n){return new Bc({name:`SphericalGaussianBlur`,defines:{SAMPLES:ou,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:wu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Su(){return new Bc({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:wu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Cu(){return new Bc({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function wu(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Tu=class extends Ai{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Qo(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new rs(5,5,5),i=new Bc({name:`CubemapFromEquirect`,uniforms:Mc(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new Fo(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=en),new Al(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function Eu(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new Tu(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new gu(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new gu(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Du(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Mr(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Ou(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?Za:Xa)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function ku(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Au(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:z(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function ju(e,t,n){let r=new WeakMap,i=new Oi;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new ji(h,p,m,u);g.type=un,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new B(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Mu(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Nu={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Pu(e,t,n,r,i,a){let o=new Ai(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new uo;l.setAttribute(`position`,new Qa([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new Qa([0,2,0,0,2,0],2));let u=new Vc({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Fo(l,u),f=new wl(-1,1,1,-1,0,1),p=null,m=null,h=!1,g,_=null,v=[],y=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<v.length;n++){let r=v[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){v=e,y=v.length>0&&v[0].isRenderPass===!0;let t=o.width,n=o.height;v.length>0&&s===null&&(s=new Ai(t,n,{type:dn,depthBuffer:!1,stencilBuffer:!1}),c=new Ai(t,n,{type:dn,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<v.length;e++){let r=v[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&v.length===0)return!1;if(_=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return y===!1&&e.setRenderTarget(o),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return y},this.end=function(e,t){e.toneMapping=g,h=!0;let n=o,r=s;for(let i=0;i<v.length;i++){let a=v[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},_i.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=Nu[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(_),e.render(d,f),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var Fu=new Di,Iu=new es(1,1),Lu=new ji,Ru=new Mi,zu=new Qo,Bu=[],Vu=[],Hu=new Float32Array(16),Uu=new Float32Array(9),Wu=new Float32Array(4);function Gu(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Bu[i];if(a===void 0&&(a=new Float32Array(i),Bu[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Ku(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function qu(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Ju(e,t){let n=Vu[t];n===void 0&&(n=new Int32Array(t),Vu[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Yu(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Xu(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ku(n,t))return;e.uniform2fv(this.addr,t),qu(n,t)}}function Zu(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Ku(n,t))return;e.uniform3fv(this.addr,t),qu(n,t)}}function Qu(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ku(n,t))return;e.uniform4fv(this.addr,t),qu(n,t)}}function $u(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ku(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),qu(n,t)}else{if(Ku(n,r))return;Wu.set(r),e.uniformMatrix2fv(this.addr,!1,Wu),qu(n,r)}}function ed(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ku(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),qu(n,t)}else{if(Ku(n,r))return;Uu.set(r),e.uniformMatrix3fv(this.addr,!1,Uu),qu(n,r)}}function td(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ku(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),qu(n,t)}else{if(Ku(n,r))return;Hu.set(r),e.uniformMatrix4fv(this.addr,!1,Hu),qu(n,r)}}function nd(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function rd(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ku(n,t))return;e.uniform2iv(this.addr,t),qu(n,t)}}function id(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ku(n,t))return;e.uniform3iv(this.addr,t),qu(n,t)}}function ad(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ku(n,t))return;e.uniform4iv(this.addr,t),qu(n,t)}}function od(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function sd(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ku(n,t))return;e.uniform2uiv(this.addr,t),qu(n,t)}}function cd(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ku(n,t))return;e.uniform3uiv(this.addr,t),qu(n,t)}}function ld(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ku(n,t))return;e.uniform4uiv(this.addr,t),qu(n,t)}}function ud(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Iu.compareFunction=n.isReversedDepthBuffer()?518:515,a=Iu):a=Fu,n.setTexture2D(t||a,i)}function dd(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Ru,i)}function fd(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||zu,i)}function pd(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Lu,i)}function md(e){switch(e){case 5126:return Yu;case 35664:return Xu;case 35665:return Zu;case 35666:return Qu;case 35674:return $u;case 35675:return ed;case 35676:return td;case 5124:case 35670:return nd;case 35667:case 35671:return rd;case 35668:case 35672:return id;case 35669:case 35673:return ad;case 5125:return od;case 36294:return sd;case 36295:return cd;case 36296:return ld;case 35678:case 36198:case 36298:case 36306:case 35682:return ud;case 35679:case 36299:case 36307:return dd;case 35680:case 36300:case 36308:case 36293:return fd;case 36289:case 36303:case 36311:case 36292:return pd}}function hd(e,t){e.uniform1fv(this.addr,t)}function gd(e,t){let n=Gu(t,this.size,2);e.uniform2fv(this.addr,n)}function _d(e,t){let n=Gu(t,this.size,3);e.uniform3fv(this.addr,n)}function vd(e,t){let n=Gu(t,this.size,4);e.uniform4fv(this.addr,n)}function yd(e,t){let n=Gu(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function bd(e,t){let n=Gu(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function xd(e,t){let n=Gu(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Sd(e,t){e.uniform1iv(this.addr,t)}function Cd(e,t){e.uniform2iv(this.addr,t)}function wd(e,t){e.uniform3iv(this.addr,t)}function Td(e,t){e.uniform4iv(this.addr,t)}function Ed(e,t){e.uniform1uiv(this.addr,t)}function Dd(e,t){e.uniform2uiv(this.addr,t)}function Od(e,t){e.uniform3uiv(this.addr,t)}function kd(e,t){e.uniform4uiv(this.addr,t)}function Ad(e,t,n){let r=this.cache,i=t.length,a=Ju(n,i);Ku(r,a)||(e.uniform1iv(this.addr,a),qu(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Iu:Fu;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function jd(e,t,n){let r=this.cache,i=t.length,a=Ju(n,i);Ku(r,a)||(e.uniform1iv(this.addr,a),qu(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Ru,a[e])}function Md(e,t,n){let r=this.cache,i=t.length,a=Ju(n,i);Ku(r,a)||(e.uniform1iv(this.addr,a),qu(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||zu,a[e])}function Nd(e,t,n){let r=this.cache,i=t.length,a=Ju(n,i);Ku(r,a)||(e.uniform1iv(this.addr,a),qu(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Lu,a[e])}function Pd(e){switch(e){case 5126:return hd;case 35664:return gd;case 35665:return _d;case 35666:return vd;case 35674:return yd;case 35675:return bd;case 35676:return xd;case 5124:case 35670:return Sd;case 35667:case 35671:return Cd;case 35668:case 35672:return wd;case 35669:case 35673:return Td;case 5125:return Ed;case 36294:return Dd;case 36295:return Od;case 36296:return kd;case 35678:case 36198:case 36298:case 36306:case 35682:return Ad;case 35679:case 36299:case 36307:return jd;case 35680:case 36300:case 36308:case 36293:return Md;case 36289:case 36303:case 36311:case 36292:return Nd}}var Fd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=md(t.type)}},Id=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Pd(t.type)}},Ld=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Rd=/(\w+)(\])?(\[|\.)?/g;function zd(e,t){e.seq.push(t),e.map[t.id]=t}function Bd(e,t,n){let r=e.name,i=r.length;for(Rd.lastIndex=0;;){let a=Rd.exec(r),o=Rd.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){zd(n,l===void 0?new Fd(s,e,t):new Id(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Ld(s),zd(n,e)),n=e}}}var Vd=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Bd(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Hd(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Ud=37297,Wd=0;function Gd(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Kd=new fi;function qd(e){_i._getMatrix(Kd,_i.workingColorSpace,e);let t=`mat3( ${Kd.elements.map(e=>e.toFixed(4))} )`;switch(_i.getTransfer(e)){case yr:return[t,`LinearTransferOETF`];case br:return[t,`sRGBTransferOETF`];default:return R(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Jd(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Gd(e.getShaderSource(t),r)}return i}function Yd(e,t){let n=qd(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var Xd={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Zd(e,t){let n=Xd[t];return n===void 0?(R(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Qd=new V;function $d(){return _i.getLuminanceCoefficients(Qd),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Qd.x.toFixed(4)}, ${Qd.y.toFixed(4)}, ${Qd.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function ef(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(rf).join(`
`)}function tf(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function nf(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function rf(e){return e!==``}function af(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function of(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var sf=/^[ \t]*#include +<([\w\d./]+)>/gm;function cf(e){return e.replace(sf,uf)}var lf=new Map;function uf(e,t){let n=Jl[t];if(n===void 0){let e=lf.get(t);if(e!==void 0)n=Jl[e],R(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return cf(n)}var df=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ff(e){return e.replace(df,pf)}function pf(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function mf(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var hf={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function gf(e){return hf[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var _f={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function vf(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:_f[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var yf={302:`ENVMAP_MODE_REFRACTION`};function bf(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:yf[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var xf={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Sf(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:xf[e.combine]||`ENVMAP_BLENDING_NONE`}function Cf(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function wf(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=gf(n),l=vf(n),u=bf(n),d=Sf(n),f=Cf(n),p=ef(n),m=tf(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(rf).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(rf).join(`
`),_.length>0&&(_+=`
`)):(g=[mf(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(rf).join(`
`),_=[mf(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Jl.tonemapping_pars_fragment,n.toneMapping===0?``:Zd(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Jl.colorspace_pars_fragment,Yd(`linearToOutputTexel`,n.outputColorSpace),$d(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(rf).join(`
`)),o=cf(o),o=af(o,n),o=of(o,n),s=cf(s),s=af(s,n),s=of(s,n),o=ff(o),s=ff(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=Hd(i,i.VERTEX_SHADER,y),S=Hd(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=Jd(i,x,`vertex`),n=Jd(i,S,`fragment`);z(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):R(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new Vd(i,h),T=nf(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,Ud)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Wd++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var Tf=0,Ef=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Df(e),t.set(e,n)),n}},Df=class{constructor(e){this.id=Tf++,this.code=e,this.usedTimes=0}};function Of(e){return e===1030||e===37490||e===36285}function kf(e,t,n,r,i,a){let o=new Wi,s=new Ef,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&R(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=Yl[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,A=t.id}let ee=e.getRenderTarget(),te=e.state.buffers.depth.getReversed(),j=h.isInstancedMesh===!0,ne=h.isBatchedMesh===!0,re=!!i.map,ie=!!i.matcap,ae=!!x,oe=!!i.aoMap,se=!!i.lightMap,ce=!!i.bumpMap&&i.wireframe===!1,le=!!i.normalMap,ue=!!i.displacementMap,de=!!i.emissiveMap,fe=!!i.metalnessMap,pe=!!i.roughnessMap,me=i.anisotropy>0,he=i.clearcoat>0,ge=i.dispersion>0,_e=i.retroreflectivity>0,ve=i.iridescence>0,ye=i.sheen>0,be=i.transmission>0,xe=me&&!!i.anisotropyMap,Se=he&&!!i.clearcoatMap,Ce=he&&!!i.clearcoatNormalMap,we=he&&!!i.clearcoatRoughnessMap,Te=ve&&!!i.iridescenceMap,M=ve&&!!i.iridescenceThicknessMap,Ee=ye&&!!i.sheenColorMap,De=ye&&!!i.sheenRoughnessMap,Oe=!!i.specularMap,N=!!i.specularColorMap,ke=!!i.specularIntensityMap,P=be&&!!i.transmissionMap,Ae=be&&!!i.thicknessMap,je=!!i.gradientMap,Me=!!i.alphaMap,Ne=i.alphaTest>0,Pe=!!i.alphaHash,Fe=!!i.extensions,Ie=0;i.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Ie=e.toneMapping);let Le={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:ne,batchingColor:ne&&h._colorsTexture!==null,instancing:j,instancingColor:j&&h.instanceColor!==null,instancingMorph:j&&h.morphTexture!==null,outputColorSpace:ee===null?e.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:_i.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:re,matcap:ie,envMap:ae,envMapMode:ae&&x.mapping,envMapCubeUVHeight:S,aoMap:oe,lightMap:se,bumpMap:ce,normalMap:le,displacementMap:ue,emissiveMap:de,normalMapObjectSpace:le&&i.normalMapType===1,normalMapTangentSpace:le&&i.normalMapType===0,packedNormalMap:le&&i.normalMapType===0&&Of(i.normalMap.format),metalnessMap:fe,roughnessMap:pe,anisotropy:me,anisotropyMap:xe,clearcoat:he,clearcoatMap:Se,clearcoatNormalMap:Ce,clearcoatRoughnessMap:we,dispersion:ge,retroreflection:_e,iridescence:ve,iridescenceMap:Te,iridescenceThicknessMap:M,sheen:ye,sheenColorMap:Ee,sheenRoughnessMap:De,specularMap:Oe,specularColorMap:N,specularIntensityMap:ke,transmission:be,transmissionMap:P,thicknessMap:Ae,gradientMap:je,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Me,alphaTest:Ne,alphaHash:Pe,combine:i.combine,mapUv:re&&m(i.map.channel),aoMapUv:oe&&m(i.aoMap.channel),lightMapUv:se&&m(i.lightMap.channel),bumpMapUv:ce&&m(i.bumpMap.channel),normalMapUv:le&&m(i.normalMap.channel),displacementMapUv:ue&&m(i.displacementMap.channel),emissiveMapUv:de&&m(i.emissiveMap.channel),metalnessMapUv:fe&&m(i.metalnessMap.channel),roughnessMapUv:pe&&m(i.roughnessMap.channel),anisotropyMapUv:xe&&m(i.anisotropyMap.channel),clearcoatMapUv:Se&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:M&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:De&&m(i.sheenRoughnessMap.channel),specularMapUv:Oe&&m(i.specularMap.channel),specularColorMapUv:N&&m(i.specularColorMap.channel),specularIntensityMapUv:ke&&m(i.specularIntensityMap.channel),transmissionMapUv:P&&m(i.transmissionMap.channel),thicknessMapUv:Ae&&m(i.thicknessMap.channel),alphaMapUv:Me&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(le||me),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(re||Me),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&le===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:te,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ie,decodeVideoTexture:re&&i.map.isVideoTexture===!0&&_i.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:de&&i.emissiveMap.isVideoTexture===!0&&_i.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Fe&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Fe&&i.extensions.multiDraw===!0||ne)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Le.vertexUv1s=c.has(1),Le.vertexUv2s=c.has(2),Le.vertexUv3s=c.has(3),c.clear(),Le}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=Yl[t];n=Lc.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new wf(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function Af(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function jf(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Mf(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Nf(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||jf),r.length>1&&r.sort(t||Mf),i.length>1&&i.sort(t||Mf)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Pf(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Nf,e.set(t,[i])):n>=r.length?(i=new Nf,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Ff(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new V,color:new H};break;case`SpotLight`:n={position:new V,direction:new V,color:new H,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new V,color:new H,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new V,skyColor:new H,groundColor:new H};break;case`RectAreaLight`:n={color:new H,position:new V,halfWidth:new V,halfHeight:new V}}return e[t.id]=n,n}}}function If(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new B};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new B};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new B,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Lf=0;function Rf(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function zf(e){let t=new Ff,n=If(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new V);let i=new V,a=new Ni,o=new Ni;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Rf);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=U.LTC_FLOAT_1,r.rectAreaLTC2=U.LTC_FLOAT_2):(r.rectAreaLTC1=U.LTC_HALF_1,r.rectAreaLTC2=U.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=Lf++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function Bf(e){let t=new zf(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function Vf(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Bf(e),t.set(n,[a])):r>=i.length?(a=new Bf(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Hf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Uf=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Wf=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],Gf=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],Kf=new Ni,qf=new V,Jf=new V;function Yf(e,t,n){let r=new Zo,i=new B,a=new B,o=new Oi,s=new Uc,c=new Wc,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new Bc({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new B},radius:{value:4}},vertexShader:Hf,fragmentShader:Uf}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new uo;m.setAttribute(`position`,new Ya(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new Fo(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;this.type===2&&(R(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){R(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let m=d.getFrameExtents();i.multiply(m),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/m.x),i.x=a.x*m.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/m.y),i.y=a.y*m.y,d.mapSize.y=a.y));let h=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=h,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){R(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new Ai(i.x,i.y,{format:wn,type:dn,minFilter:en,magFilter:en,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new es(i.x,i.y,un),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=bn,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=Zt,d.map.depthTexture.magFilter=Zt}else l.isPointLight?(d.map=new Tu(i.x),d.map.depthTexture=new ts(i.x,ln)):(d.map=new Ai(i.x,i.y),d.map.depthTexture=new es(i.x,i.y,ln)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=bn,this.type===1?(d.map.depthTexture.compareFunction=h?518:515,d.map.depthTexture.minFilter=en,d.map.depthTexture.magFilter=en):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=Zt,d.map.depthTexture.magFilter=Zt);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let g=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);for(let t=0;t<g;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),qf.setFromMatrixPosition(l.matrixWorld),e.position.copy(qf),Jf.copy(e.position),Jf.add(Wf[t]),e.up.copy(Gf[t]),e.lookAt(Jf),e.updateMatrixWorld(),n.makeTranslation(-qf.x,-qf.y,-qf.z),Kf.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(Kf,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}r=d.getFrustum(t),b(n,s,i,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null?n.mapPass=new Ai(i.x,i.y,{format:wn,type:dn}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value.set(n.map.width,n.map.height),f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function y(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,x)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function b(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=y(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=y(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)b(c[e],i,a,o,s)}function x(e){e.target.removeEventListener(`dispose`,x);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Xf(e,t){function n(){let t=!1,n=new Oi,r=null,i=new Oi(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?fe(e.DEPTH_TEST):pe(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=Pr[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?fe(e.STENCIL_TEST):pe(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new H(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,ee=null,te=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,ne=0,re=e.getParameter(e.VERSION);re.indexOf(`WebGL`)===-1?re.indexOf(`OpenGL ES`)!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),j=ne>=2):(ne=parseFloat(/^WebGL (\d)/.exec(re)[1]),j=ne>=1);let ie=null,ae={},oe=e.getParameter(e.SCISSOR_BOX),se=e.getParameter(e.VIEWPORT),ce=new Oi().fromArray(oe),le=new Oi().fromArray(se);function ue(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let de={};de[e.TEXTURE_2D]=ue(e.TEXTURE_2D,e.TEXTURE_2D,1),de[e.TEXTURE_CUBE_MAP]=ue(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[e.TEXTURE_2D_ARRAY]=ue(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),de[e.TEXTURE_3D]=ue(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),fe(e.DEPTH_TEST),o.setFunc(3),xe(!1),Se(1),fe(e.CULL_FACE),ye(0);function fe(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function pe(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function me(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function he(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function ge(t){return h!==t&&(e.useProgram(t),h=t,!0)}let _e={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};_e[103]=e.MIN,_e[104]=e.MAX;let ve={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ye(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(pe(e.BLEND),g=!1);else if(g===!1&&(fe(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:z(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:z(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:z(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:z(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(_e[n],_e[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(ve[r],ve[i],ve[o],ve[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function be(t,n){t.side===2?pe(e.CULL_FACE):fe(e.CULL_FACE);let r=t.side===1;n&&(r=!r),xe(r),t.blending===1&&t.transparent===!1?ye(0):ye(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),we(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?fe(e.SAMPLE_ALPHA_TO_COVERAGE):pe(e.SAMPLE_ALPHA_TO_COVERAGE)}function xe(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function Se(t){t===0?pe(e.CULL_FACE):(fe(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function Ce(t){t!==k&&(j&&e.lineWidth(t),k=t)}function we(t,n,r){t?(fe(e.POLYGON_OFFSET_FILL),(A!==n||ee!==r)&&(A=n,ee=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):pe(e.POLYGON_OFFSET_FILL)}function Te(t){t?fe(e.SCISSOR_TEST):pe(e.SCISSOR_TEST)}function M(t){t===void 0&&(t=e.TEXTURE0+te-1),ie!==t&&(e.activeTexture(t),ie=t)}function Ee(t,n,r){r===void 0&&(r=ie===null?e.TEXTURE0+te-1:ie);let i=ae[r];i===void 0&&(i={type:void 0,texture:void 0},ae[r]=i),(i.type!==t||i.texture!==n)&&(ie!==r&&(e.activeTexture(r),ie=r),e.bindTexture(t,n||de[t]),i.type=t,i.texture=n)}function De(){let t=ae[ie];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Oe(){try{e.compressedTexImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function N(){try{e.compressedTexImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function ke(){try{e.texSubImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function P(){try{e.texSubImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Ae(){try{e.compressedTexSubImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function je(){try{e.compressedTexSubImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Me(){try{e.texStorage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Ne(){try{e.texStorage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Pe(){try{e.texImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Fe(){try{e.texImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Ie(t){return d[t]===void 0?e.getParameter(t):d[t]}function Le(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Re(t){ce.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ce.copy(t))}function F(t){le.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),le.copy(t))}function ze(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Be(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Ve(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},ie=null,ae={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new H(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,ee=null,ce.set(0,0,e.canvas.width,e.canvas.height),le.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:fe,disable:pe,bindFramebuffer:me,drawBuffers:he,useProgram:ge,setBlending:ye,setMaterial:be,setFlipSided:xe,setCullFace:Se,setLineWidth:Ce,setPolygonOffset:we,setScissorTest:Te,activeTexture:M,bindTexture:Ee,unbindTexture:De,compressedTexImage2D:Oe,compressedTexImage3D:N,texImage2D:Pe,texImage3D:Fe,pixelStorei:Le,getParameter:Ie,updateUBOMapping:ze,uniformBlockBinding:Be,texStorage2D:Me,texStorage3D:Ne,texSubImage2D:ke,texSubImage3D:P,compressedTexSubImage2D:Ae,compressedTexSubImage3D:je,scissor:Re,viewport:F,reset:Ve}}function Zf(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new B,u=new WeakMap,d=new Set,f,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function h(e,t){return m?new OffscreenCanvas(e,t):Dr(`canvas`)}function g(e,t,n){let r=1,i=Oe(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);f===void 0&&(f=h(n,a));let o=t?h(n,a):f;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),R(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&R(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function _(e){return e.generateMipmaps}function v(t){e.generateMipmap(t)}function y(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function b(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];R(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||R(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?yr:_i.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function x(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,R(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function S(e,t){return _(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function C(e){let t=e.target;t.removeEventListener(`dispose`,C),T(t),t.isVideoTexture&&u.delete(t),t.isHTMLTexture&&d.delete(t)}function w(e){let t=e.target;t.removeEventListener(`dispose`,w),D(t)}function T(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=p.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&E(e),Object.keys(i).length===0&&p.delete(n)}r.remove(e)}function E(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=p.get(i);delete a[n.__cacheKey],o.memory.textures--}function D(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let O=0;function k(){O=0}function A(){return O}function ee(e){O=e}function te(){let e=O;return e>=i.maxTextures&&R(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),O+=1,e}function j(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function ne(t,i){let a=r.get(t);if(t.isVideoTexture&&Ee(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)R(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)R(`WebGLRenderer: Texture marked for update but image is incomplete`);else{pe(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function re(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?pe(a,t,i):(t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i))}function ie(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?pe(a,t,i):n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function ae(t,i){let a=r.get(t);t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version?me(a,t,i):n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let oe={[Jt]:e.REPEAT,[Yt]:e.CLAMP_TO_EDGE,[Xt]:e.MIRRORED_REPEAT},se={[Zt]:e.NEAREST,[Qt]:e.NEAREST_MIPMAP_NEAREST,[$t]:e.NEAREST_MIPMAP_LINEAR,[en]:e.LINEAR,[tn]:e.LINEAR_MIPMAP_NEAREST,[nn]:e.LINEAR_MIPMAP_LINEAR},ce={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function le(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&R(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,oe[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,oe[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,oe[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,se[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,se[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,ce[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function ue(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,C));let i=n.source,a=p.get(i);a===void 0&&(a={},p.set(i,a));let s=j(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&E(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function de(e,t,n){return Math.floor(Math.floor(e/n)/t)}function fe(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=de(n.start,r.width,4),c=de(t.start,r.width,4);n.start<=i+1&&a===c&&de(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function pe(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=ue(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let f=r.get(u);if(u.version!==f.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=_i.getPrimaries(_i.workingColorSpace),r=o.colorSpace===``?null:_i.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=g(o.image,!1,i.maxTextureSize);t=De(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=b(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);le(c,o);let h,y=o.mipmaps,C=o.isVideoTexture!==!0,w=f.__version===void 0||l===!0,T=u.dataReady,E=S(o,t);if(o.isDepthTexture)m=x(o.format===xn,o.type),w&&(C?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture){if(y.length>0){C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else C?(w&&n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height),T&&fe(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){C&&w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,y[0].width,y[0].height,t.depth);for(let i=0,a=y.length;i<a;i++)if(h=y[i],o.format!==1023){if(r!==null){if(C){if(T){if(o.layerUpdates.size>0){let t=Wl(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0)}else R(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else C?T&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],o.format===1023?C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?R(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):C?T&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}}else if(o.isDataArrayTexture){if(C){if(w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,t.width,t.height,t.depth),T){if(o.layerUpdates.size>0){let i=Wl(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data)}else if(o.isData3DTexture)C?(w&&n.texStorage3D(e.TEXTURE_3D,E,m,t.width,t.height,t.depth),T&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(w){if(C)n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<E;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),d.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of d)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(y.length>0){if(C&&w){let t=Oe(y[0]);n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height)}for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(C){if(w){let r=Oe(t);n.texStorage2D(e.TEXTURE_2D,E,m,r.width,r.height)}T&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);_(o)&&v(c),f.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function me(t,o,s){if(o.image.length!==6)return;let c=ue(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=_i.getPrimaries(_i.workingColorSpace),r=o.colorSpace===``?null:_i.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=g(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=De(o,m[e]);let h=m[0],y=a.convert(o.format,o.colorSpace),x=a.convert(o.type),C=b(o.internalFormat,y,x,o.normalized,o.colorSpace),w=o.isVideoTexture!==!0,T=u.__version===void 0||c===!0,E=l.dataReady,D=S(o,h);le(e.TEXTURE_CUBE_MAP,o);let O;if(f){w&&T&&n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,h.width,h.height);for(let t=0;t<6;t++){O=m[t].mipmaps;for(let r=0;r<O.length;r++){let i=O[r];o.format===1023?w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,y,x,i.data):y===null?R(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):w?E&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,i.data)}}}else{if(O=o.mipmaps,w&&T){O.length>0&&D++;let t=Oe(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,t.width,t.height)}for(let t=0;t<6;t++)if(p){w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,y,x,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,m[t].width,m[t].height,0,y,x,m[t].data);for(let r=0;r<O.length;r++){let i=O[r].image[t].image;w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,i.width,i.height,0,y,x,i.data)}}else{w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,y,x,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,y,x,m[t]);for(let r=0;r<O.length;r++){let i=O[r];w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,y,x,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,y,x,i.image[t])}}}_(o)&&v(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function he(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=b(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),M(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,Te(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function ge(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=x(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;M(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Te(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Te(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=b(o.internalFormat,c,l,o.normalized,o.colorSpace);M(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Te(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Te(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function _e(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,(!l.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,C)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),le(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else ne(i.depthTexture,0);let u=l.__webglTexture,d=Te(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)M(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)M(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function ve(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)_e(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?_e(i.__webglFramebuffer[0],t,0):_e(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),ge(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),ge(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function ye(t,n,i){let a=r.get(t);n!==void 0&&he(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&ve(t)}function be(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,w);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&M(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=b(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=Te(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),ge(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),le(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)he(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else he(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);_(i)&&v(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),le(c,a),he(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),_(a)&&v(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),le(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)he(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else he(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);_(i)&&v(r),n.unbindTexture()}t.depthBuffer&&ve(t)}function xe(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(_(a)){let t=y(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),v(t),n.unbindTexture()}}}let Se=[],Ce=[];function we(t){if(t.samples>0){if(M(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(Se.length=0,Ce.length=0,Se.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(Se.push(l),Ce.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Ce)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Se))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Te(e){return Math.min(i.maxSamples,e.samples)}function M(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function Ee(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function De(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(_i.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&R(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):z(`WebGLTextures: Unsupported texture color space:`,n)),t}function Oe(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=te,this.resetTextureUnits=k,this.getTextureUnits=A,this.setTextureUnits=ee,this.setTexture2D=ne,this.setTexture2DArray=re,this.setTexture3D=ie,this.setTextureCube=ae,this.rebindTextures=ye,this.setupRenderTarget=be,this.updateRenderTargetMipmap=xe,this.updateMultisampleRenderTarget=we,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=he,this.useMultisampledRTT=M,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Qf(e,t){function n(n,r=``){let i,a=_i.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var $f=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ep=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,tp=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ns(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Bc({vertexShader:$f,fragmentShader:ep,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Fo(new Oc(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},np=class extends Fr{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new tp,g={},_=t.getContextAttributes(),v=null,y=null,b=[],x=[],S=new B,C=null,w=null,T=new Cl;T.viewport=new Oi;let E=new Cl;E.viewport=new Oi;let D=[T,E],O=new jl,k=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=b[e];return t===void 0&&(t=new la,b[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=b[e];return t===void 0&&(t=new la,b[e]=t),t.getGripSpace()},this.getHand=function(e){let t=b[e];return t===void 0&&(t=new la,b[e]=t),t.getHandSpace()};function ee(e){let t=x.indexOf(e.inputSource);if(t===-1)return;let n=b[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function te(){r.removeEventListener(`select`,ee),r.removeEventListener(`selectstart`,ee),r.removeEventListener(`selectend`,ee),r.removeEventListener(`squeeze`,ee),r.removeEventListener(`squeezestart`,ee),r.removeEventListener(`squeezeend`,ee),r.removeEventListener(`end`,te),r.removeEventListener(`inputsourceschange`,j);for(let e=0;e<b.length;e++){let t=x[e];t!==null&&(x[e]=null,b[e].disconnect(t))}k=null,A=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(v),f=null,d=null,u=null,r=null,y=null,le.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),w!==null){let e=w.camera;e.fov=w.fov,e.zoom=w.zoom,e.updateProjectionMatrix(),w=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&R(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&R(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,ee),r.addEventListener(`selectstart`,ee),r.addEventListener(`selectend`,ee),r.addEventListener(`squeeze`,ee),r.addEventListener(`squeezestart`,ee),r.addEventListener(`squeezeend`,ee),r.addEventListener(`end`,te),r.addEventListener(`inputsourceschange`,j),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?xn:bn,a=_.stencil?mn:ln);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Ai(d.textureWidth,d.textureHeight,{format:yn,type:rn,depthTexture:new es(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Ai(f.framebufferWidth,f.framebufferHeight,{format:yn,type:rn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),le.setContext(r),le.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function j(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=x.indexOf(n);r>=0&&(x[r]=null,b[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=x.indexOf(n);if(r===-1){for(let e=0;e<b.length;e++)if(e>=x.length){x.push(n),r=e;break}else if(x[e]===null){x[e]=n,r=e;break}if(r===-1)break}let i=b[r];i&&i.connect(n)}}let ne=new V,re=new V;function ie(e,t,n){ne.setFromMatrixPosition(t.matrixWorld),re.setFromMatrixPosition(n.matrixWorld);let r=ne.distanceTo(re),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function ae(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),O.near=E.near=T.near=t,O.far=E.far=T.far=n,(k!==O.near||A!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),k=O.near,A=O.far),O.layers.mask=e.layers.mask|6,T.layers.mask=O.layers.mask&-5,E.layers.mask=O.layers.mask&-3;let i=e.parent,a=O.cameras;ae(O,i);for(let e=0;e<a.length;e++)ae(a[e],i);a.length===2?ie(O,T,E):O.projectionMatrix.copy(T.projectionMatrix),w===null&&e.isPerspectiveCamera&&(w={camera:e,fov:e.fov,zoom:e.zoom}),oe(e,O,i)};function oe(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=zr*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(O)},this.getCameraTexture=function(e){return g[e]};let se=null;function ce(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let i=!1;t.length!==O.cameras.length&&(O.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(y,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(y))}let o=D[n];o===void 0&&(o=new Cl,o.layers.enable(n),o.viewport=new Oi,D[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(O.matrix.copy(o.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),i===!0&&O.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new ns,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<b.length;e++){let t=x[e],n=b[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}se&&se(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let le=new Kl;le.setAnimationLoop(ce),this.setAnimationLoop=function(e){se=e},this.dispose=function(){}}},rp=new Ni,ip=new fi;ip.set(-1,0,0,0,1,0,0,0,1);function ap(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Ic(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(rp.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(ip),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function op(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return z(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?R(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):R(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var sp=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),cp=null;function lp(){return cp===null&&(cp=new Ro(sp,16,16,wn,dn),cp.name=`DFG_LUT`,cp.minFilter=en,cp.magFilter=en,cp.wrapS=Yt,cp.wrapT=Yt,cp.generateMipmaps=!1,cp.needsUpdate=!0),cp}var up=class{constructor(e={}){let{canvas:t=Or(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=rn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([En,Tn,Cn]),g=new Set([rn,ln,sn,mn,fn,pn]),_=new Uint32Array(4),v=new Int32Array(4),y=new V,b=null,x=null,S=[],C=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,E=!1,D=null,O=null,k=null,A=null;this._outputColorSpace=_r;let ee=0,te=0,j=null,ne=-1,re=null,ie=new Oi,ae=new Oi,oe=null,se=new H(0),ce=0,le=t.width,ue=t.height,de=1,fe=null,pe=null,me=new Oi(0,0,le,ue),he=new Oi(0,0,le,ue),ge=!1,_e=new Zo,ve=!1,ye=!1,be=new Ni,xe=new V,Se=new Oi,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},we=!1;function Te(){return j===null?de:1}let M=n;function Ee(e,n){return t.getContext(e,n)}let De,Oe,N,ke,P,Ae,je,Me,Ne,Pe,Fe,Ie,Le,Re,F,ze,Be,Ve,He,Ue,We,Ge,Ke;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,Ye,!1),t.addEventListener(`webglcontextrestored`,I,!1),t.addEventListener(`webglcontextcreationerror`,Xe,!1),M===null){let t=`webgl2`;if(M=Ee(t,e),M===null)throw Ee(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}qe()}catch(e){throw t.removeEventListener(`webglcontextlost`,Ye,!1),t.removeEventListener(`webglcontextrestored`,I,!1),t.removeEventListener(`webglcontextcreationerror`,Xe,!1),z(`WebGLRenderer: `+e.message),e}function qe(){De=new Du(M),De.init(),We=new Qf(M,De),Oe=new nu(M,De,e,We),N=new Xf(M,De),Oe.reversedDepthBuffer&&d&&N.buffers.depth.setReversed(!0),O=M.createFramebuffer(),k=M.createFramebuffer(),A=M.createFramebuffer(),ke=new Au(M),P=new Af,Ae=new Zf(M,De,N,P,Oe,We,ke),je=new Eu(T),Me=new ql(M),Ge=new eu(M,Me),Ne=new Ou(M,Me,ke,Ge),Pe=new Mu(M,Ne,Me,Ge,ke),Ve=new ju(M,Oe,Ae),F=new ru(P),Fe=new kf(T,je,De,Oe,Ge,F),Ie=new ap(T,P),Le=new Pf,Re=new Vf(De),Be=new $l(T,je,N,Pe,p,s),ze=new Yf(T,Pe,Oe),Ke=new op(M,ke,Oe,N),He=new tu(M,De,ke),Ue=new ku(M,De,ke),ke.programs=Fe.programs,T.capabilities=Oe,T.extensions=De,T.properties=P,T.renderLists=Le,T.shadowMap=ze,T.state=N,T.info=ke}m!==1009&&(w=new Pu(m,t.width,t.height,o,r,i));let Je=new np(T,M);this.xr=Je,this.getContext=function(){return M},this.getContextAttributes=function(){return M.getContextAttributes()},this.forceContextLoss=function(){let e=De.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=De.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(e){e!==void 0&&(de=e,this.setSize(le,ue,!1))},this.getSize=function(e){return e.set(le,ue)},this.setSize=function(e,n,r=!0){Je.isPresenting?R(`WebGLRenderer: Can't change size while VR device is presenting.`):(le=e,ue=n,t.width=Math.floor(e*de),t.height=Math.floor(n*de),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(le*de,ue*de).floor()},this.setDrawingBufferSize=function(e,n,r){le=e,ue=n,de=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009)z(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){R(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}w.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(ie)},this.getViewport=function(e){return e.copy(me)},this.setViewport=function(e,t,n,r){e.isVector4?me.set(e.x,e.y,e.z,e.w):me.set(e,t,n,r),N.viewport(ie.copy(me).multiplyScalar(de).round())},this.getScissor=function(e){return e.copy(he)},this.setScissor=function(e,t,n,r){e.isVector4?he.set(e.x,e.y,e.z,e.w):he.set(e,t,n,r),N.scissor(ae.copy(he).multiplyScalar(de).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(e){N.setScissorTest(ge=e)},this.setOpaqueSort=function(e){fe=e},this.setTransparentSort=function(e){pe=e},this.getClearColor=function(e){return e.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor(...arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(j!==null){let t=j.texture.format;e=h.has(t)}if(e){let e=j.texture.type,t=g.has(e),n=Be.getClearColor(),r=Be.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,M.clearBufferuiv(M.COLOR,0,_)):(v[0]=i,v[1]=a,v[2]=o,v[3]=r,M.clearBufferiv(M.COLOR,0,v))}else r|=M.COLOR_BUFFER_BIT}t&&(r|=M.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=M.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&M.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),D=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,Ye,!1),t.removeEventListener(`webglcontextrestored`,I,!1),t.removeEventListener(`webglcontextcreationerror`,Xe,!1),Be.dispose(),Le.dispose(),Re.dispose(),P.dispose(),je.dispose(),Pe.dispose(),Ge.dispose(),Ke.dispose(),Fe.dispose(),Je.dispose(),Je.removeEventListener(`sessionstart`,rt),Je.removeEventListener(`sessionend`,L),it.stop()};function Ye(e){e.preventDefault(),Ar(`WebGLRenderer: Context Lost.`),E=!0}function I(){Ar(`WebGLRenderer: Context Restored.`),E=!1;let e=ke.autoReset,t=ze.enabled,n=ze.autoUpdate,r=ze.needsUpdate,i=ze.type;qe(),ke.autoReset=e,ze.enabled=t,ze.autoUpdate=n,ze.needsUpdate=r,ze.type=i}function Xe(e){z(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function Ze(e){let t=e.target;t.removeEventListener(`dispose`,Ze),Qe(t)}function Qe(e){$e(e),P.remove(e)}function $e(e){let t=P.get(e).programs;t!==void 0&&(t.forEach(function(e){Fe.releaseProgram(e)}),e.isShaderMaterial&&Fe.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Ce);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=mt(e,t,n,r,i);N.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Ne.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;Ge.setup(i,r,s,n,c);let h,g=He;if(c!==null&&(h=Me.get(c),g=Ue,g.setIndex(h)),i.isMesh)r.wireframe===!0?(N.setLineWidth(r.wireframeLinewidth*Te()),g.setMode(M.LINES)):g.setMode(M.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),N.setLineWidth(e*Te()),i.isLineSegments?g.setMode(M.LINES):i.isLineLoop?g.setMode(M.LINE_LOOP):g.setMode(M.LINE_STRIP)}else i.isPoints?g.setMode(M.POINTS):i.isSprite&&g.setMode(M.TRIANGLES);if(i.isBatchedMesh){if(De.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Me.get(c).bytesPerElement:1,o=P.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(M,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function et(e,t,n,r){D!==null&&e.isNodeMaterial&&D.setObject(r,e),ve===!0&&F.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,ut(e,t,r),e.side=0,e.needsUpdate=!0,ut(e,t,r),e.side=2):ut(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),D!==null&&D.renderStart(e,t,n),x=Re.get(n),x.init(t),C.push(x),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),x.setupLights(),D!==null&&D.updateLights(x.state.lightsArray),ye=this.localClippingEnabled,ve=F.init(this.clippingPlanes,ye),ve===!0&&F.setGlobalState(this.clippingPlanes,t),D!==null&&ze.render(x.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];et(o,n,t,e),r.add(o)}else et(i,n,t,e),r.add(i)}}),x=C.pop(),D!==null&&D.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=P.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}De.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let tt=null;function nt(e){tt&&tt(e)}function rt(){it.stop()}function L(){it.start()}let it=new Kl;it.setAnimationLoop(nt),typeof self<`u`&&it.setContext(self),this.setAnimationLoop=function(e){tt=e,Je.setAnimationLoop(e),e===null?it.stop():it.start()},Je.addEventListener(`sessionstart`,rt),Je.addEventListener(`sessionend`,L),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){z(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(E===!0)return;D!==null&&D.renderStart(e,t);let n=Je.enabled===!0&&Je.isPresenting===!0,r=w!==null&&(j===null||n)&&w.begin(T,j);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),Je.enabled===!0&&Je.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Je.cameraAutoUpdate===!0&&Je.updateCamera(t),t=Je.getCamera()),e.isScene===!0&&e.onBeforeRender(T,e,t,j),x=Re.get(e,C.length),x.init(t),x.state.textureUnits=Ae.getTextureUnits(),C.push(x),be.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),_e.setFromProjectionMatrix(be,wr,t.reversedDepth),ye=this.localClippingEnabled,ve=F.init(this.clippingPlanes,ye),b=Le.get(e,S.length),b.init(),S.push(b),Je.enabled===!0&&Je.isPresenting===!0){let e=T.xr.getDepthSensingMesh();e!==null&&at(e,t,-1/0,T.sortObjects)}at(e,t,0,T.sortObjects),b.finish(),D!==null&&D.updateLights(x.state.lightsArray),T.sortObjects===!0&&b.sort(fe,pe),we=Je.enabled===!1||Je.isPresenting===!1||Je.hasDepthSensing()===!1,we&&Be.addToRenderList(b,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ve===!0&&F.beginShadows();let i=x.state.shadowsArray;if(ze.render(i,e,t),ve===!0&&F.endShadows(),(r&&w.hasRenderPass())===!1){let n=b.opaque,r=b.transmissive;if(x.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];st(n,r,e,a)}we&&Be.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];ot(b,e,n,n.viewport)}}else r.length>0&&st(n,r,e,t),we&&Be.render(e),ot(b,e,t)}j!==null&&te===0&&(Ae.updateMultisampleRenderTarget(j),Ae.updateRenderTargetMipmap(j)),r&&w.end(T),e.isScene===!0&&e.onAfterRender(T,e,t),Ge.resetDefaultState(),ne=-1,re=null,C.pop(),C.length>0?(x=C[C.length-1],Ae.setTextureUnits(x.state.textureUnits),ve===!0&&F.setGlobalState(T.clippingPlanes,x.state.camera)):x=null,S.pop(),b=S.length>0?S[S.length-1]:null,D!==null&&D.renderEnd()};function at(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)x.pushLightProbeGrid(e);else if(e.isLight)x.pushLight(e),e.castShadow&&x.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(_e)){r&&Se.setFromMatrixPosition(e.matrixWorld).applyMatrix4(be);let i=Pe.update(e),a=e.material;a.visible&&b.push(e,i,a,n,Se.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(_e))){let i=Pe.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Se.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Se.copy(e.boundingSphere.center)),Se.applyMatrix4(e.matrixWorld).applyMatrix4(be)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&b.push(e,i,c,n,Se.z,s,t)}}else a.visible&&b.push(e,i,a,n,Se.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)at(i[e],t,n,r)}function ot(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;x.setupLightsView(n),ve===!0&&F.setGlobalState(T.clippingPlanes,n),r&&N.viewport(ie.copy(r)),i.length>0&&ct(i,t,n),a.length>0&&ct(a,t,n),o.length>0&&ct(o,t,n),N.buffers.depth.setTest(!0),N.buffers.depth.setMask(!0),N.buffers.color.setMask(!0),N.setPolygonOffset(!1)}function st(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[r.id]===void 0){let e=De.has(`EXT_color_buffer_half_float`)||De.has(`EXT_color_buffer_float`);x.state.transmissionRenderTarget[r.id]=new Ai(1,1,{generateMipmaps:!0,type:e?dn:rn,minFilter:nn,samples:Math.max(4,Oe.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:_i.workingColorSpace})}let a=x.state.transmissionRenderTarget[r.id],o=r.viewport||ie;a.setSize(o.z*T.transmissionResolutionScale,o.w*T.transmissionResolutionScale);let s=T.getRenderTarget(),c=T.getActiveCubeFace(),l=T.getActiveMipmapLevel();T.setRenderTarget(a),T.getClearColor(se),ce=T.getClearAlpha(),ce<1&&T.setClearColor(16777215,.5),T.clear(),we&&Be.render(n);let u=T.toneMapping;T.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),x.setupLightsView(r),ve===!0&&F.setGlobalState(T.clippingPlanes,r),ct(e,n,r),Ae.updateMultisampleRenderTarget(a),Ae.updateRenderTargetMipmap(a),De.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,lt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Ae.updateMultisampleRenderTarget(a),Ae.updateRenderTargetMipmap(a))}T.setRenderTarget(s,c,l),T.setClearColor(se,ce),d!==void 0&&(r.viewport=d),T.toneMapping=u}function ct(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&lt(o,t,n,s,l,c)}}function lt(e,t,n,r,i,a){D!==null&&i.isNodeMaterial&&D.setObject(e,i),e.onBeforeRender(T,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(T,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=2):T.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(T,t,n,r,i,a)}function ut(e,t,n){t.isScene!==!0&&(t=Ce);let r=P.get(e),i=x.state.lights,a=x.state.shadowsArray,o=i.state.version,s=Fe.getParameters(e,i.state,a,t,n,x.state.lightProbeGridArray),c=Fe.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=je.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,Ze),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return ft(e,s),d}else s.uniforms=Fe.getUniforms(e),D!==null&&e.isNodeMaterial&&D.build(e,n,s),e.onBeforeCompile(s,T),d=Fe.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=F.uniform),ft(e,s),r.needsLights=gt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=x.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function dt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Vd.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function ft(e,t){let n=P.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function pt(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];y.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(y))return n}return null}function mt(e,t,n,r,i){t.isScene!==!0&&(t=Ce),Ae.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=j===null?T.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:_i.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=je.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(h=T.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=P.get(r),y=x.state.lights;if(ve===!0&&(ye===!0||e!==re)){let t=e===re&&r.id===ne;F.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==F.numPlanes||v.numIntersection!==F.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=x.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;b===!0&&(S=ut(r,t,i),D&&r.isNodeMaterial&&D.onUpdateProgram(r,S,v));let C=!1,w=!1,E=!1,O=S.getUniforms(),k=v.uniforms;if(N.useProgram(S.program)&&(C=!0,w=!0,E=!0),r.id!==ne&&(ne=r.id,w=!0),v.needsLights){let e=pt(x.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,w=!0)}if(C||re!==e){N.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),O.setValue(M,`projectionMatrix`,e.projectionMatrix),O.setValue(M,`viewMatrix`,e.matrixWorldInverse);let t=O.map.cameraPosition;t!==void 0&&t.setValue(M,xe.setFromMatrixPosition(e.matrixWorld)),Oe.logarithmicDepthBuffer&&O.setValue(M,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&O.setValue(M,`isOrthographic`,e.isOrthographicCamera===!0),re!==e&&(re=e,w=!0,E=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&O.setValue(M,`sunShadowMap`,y.state.sunShadowMap,Ae),y.state.directionalShadowMap.length>0&&O.setValue(M,`directionalShadowMap`,y.state.directionalShadowMap,Ae),y.state.spotShadowMap.length>0&&O.setValue(M,`spotShadowMap`,y.state.spotShadowMap,Ae),y.state.pointShadowMap.length>0&&O.setValue(M,`pointShadowMap`,y.state.pointShadowMap,Ae)),i.isSkinnedMesh){O.setOptional(M,i,`bindMatrix`),O.setOptional(M,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),O.setValue(M,`boneTexture`,e.boneTexture,Ae))}i.isBatchedMesh&&(O.setOptional(M,i,`batchingTexture`),O.setValue(M,`batchingTexture`,i._matricesTexture,Ae),O.setOptional(M,i,`batchingIdTexture`),O.setValue(M,`batchingIdTexture`,i._indirectTexture,Ae),O.setOptional(M,i,`batchingColorTexture`),i._colorsTexture!==null&&O.setValue(M,`batchingColorTexture`,i._colorsTexture,Ae));let A=n.morphAttributes;if((A.position!==void 0||A.normal!==void 0||A.color!==void 0)&&Ve.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,O.setValue(M,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(k.envMapIntensity.value=t.environmentIntensity),k.dfgLUT!==void 0&&(k.dfgLUT.value=lp()),w){if(O.setValue(M,`toneMappingExposure`,T.toneMappingExposure),v.needsLights&&ht(k,E),a&&r.fog===!0&&Ie.refreshFogUniforms(k,a),Ie.refreshMaterialUniforms(k,r,de,ue,x.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;k.probesSH.value=e.texture,k.probesMin.value.copy(e.boundingBox.min),k.probesMax.value.copy(e.boundingBox.max),k.probesResolution.value.copy(e.resolution)}Vd.upload(M,dt(v),k,Ae)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Vd.upload(M,dt(v),k,Ae),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&O.setValue(M,`center`,i.center),O.setValue(M,`modelViewMatrix`,i.modelViewMatrix),O.setValue(M,`normalMatrix`,i.normalMatrix),O.setValue(M,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];Ke.update(n,S),Ke.bind(n,S)}}return S}function ht(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function gt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ee},this.getActiveMipmapLevel=function(){return te},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(e,t,n){let r=P.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),P.get(e.texture).__webglTexture=t,P.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=P.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){j=e,ee=t,te=n;let r=null,i=!1,a=!1;if(e){let o=P.get(e);if(o.__useDefaultFramebuffer!==void 0){N.bindFramebuffer(M.FRAMEBUFFER,o.__webglFramebuffer),ie.copy(e.viewport),ae.copy(e.scissor),oe=e.scissorTest,N.viewport(ie),N.scissor(ae),N.setScissorTest(oe),ne=-1;return}if(o.__webglFramebuffer===void 0)Ae.setupRenderTarget(e);else if(o.__hasExternalTextures)Ae.rebindTextures(e,P.get(e.texture).__webglTexture,P.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&P.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);Ae.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=P.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Ae.useMultisampledRTT(e)===!1?P.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,ie.copy(e.viewport),ae.copy(e.scissor),oe=e.scissorTest}else ie.copy(me).multiplyScalar(de).floor(),ae.copy(he).multiplyScalar(de).floor(),oe=ge;if(n!==0&&(r=O),N.bindFramebuffer(M.FRAMEBUFFER,r)&&N.drawBuffers(e,r),N.viewport(ie),N.scissor(ae),N.setScissorTest(oe),i){let r=P.get(e.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=P.get(e.textures[t]);M.framebufferTextureLayer(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=P.get(e.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,t.__webglTexture,n)}ne=-1};function _t(e){let t=P.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Oe.textureFormatReadable(e.format),t.__typeReadable=Oe.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){z(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=P.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){N.bindFramebuffer(M.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&M.readBuffer(M.COLOR_ATTACHMENT0+s);let u=_t(o);if(u.__formatReadable===!1){z(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){z(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&M.readPixels(t,n,r,i,We.convert(c),We.convert(l),a)}finally{let e=j===null?null:P.get(j).__webglFramebuffer;N.bindFramebuffer(M.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=P.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){N.bindFramebuffer(M.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&M.readBuffer(M.COLOR_ATTACHMENT0+s);let d=_t(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=M.createBuffer();M.bindBuffer(M.PIXEL_PACK_BUFFER,f),M.bufferData(M.PIXEL_PACK_BUFFER,a.byteLength,M.STREAM_READ),M.readPixels(t,n,r,i,We.convert(l),We.convert(u),0),M.bindBuffer(M.PIXEL_PACK_BUFFER,null);let p=j===null?null:P.get(j).__webglFramebuffer;N.bindFramebuffer(M.FRAMEBUFFER,p);let m=M.fenceSync(M.SYNC_GPU_COMMANDS_COMPLETE,0);return M.flush(),await Nr(M,m,4),M.bindBuffer(M.PIXEL_PACK_BUFFER,f),M.getBufferSubData(M.PIXEL_PACK_BUFFER,0,a),M.bindBuffer(M.PIXEL_PACK_BUFFER,null),M.deleteBuffer(f),M.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Ae.setTexture2D(e,0),M.copyTexSubImage2D(M.TEXTURE_2D,n,0,0,o,s,i,a),N.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=We.convert(t.format),_=We.convert(t.type),v;t.isData3DTexture?(Ae.setTexture3D(t,0),v=M.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Ae.setTexture2DArray(t,0),v=M.TEXTURE_2D_ARRAY):(Ae.setTexture2D(t,0),v=M.TEXTURE_2D),N.activeTexture(M.TEXTURE0),N.pixelStorei(M.UNPACK_FLIP_Y_WEBGL,t.flipY),N.pixelStorei(M.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),N.pixelStorei(M.UNPACK_ALIGNMENT,t.unpackAlignment);let y=N.getParameter(M.UNPACK_ROW_LENGTH),b=N.getParameter(M.UNPACK_IMAGE_HEIGHT),x=N.getParameter(M.UNPACK_SKIP_PIXELS),S=N.getParameter(M.UNPACK_SKIP_ROWS),C=N.getParameter(M.UNPACK_SKIP_IMAGES);N.pixelStorei(M.UNPACK_ROW_LENGTH,h.width),N.pixelStorei(M.UNPACK_IMAGE_HEIGHT,h.height),N.pixelStorei(M.UNPACK_SKIP_PIXELS,l),N.pixelStorei(M.UNPACK_SKIP_ROWS,u),N.pixelStorei(M.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=P.get(e),r=P.get(t),h=P.get(n.__renderTarget),g=P.get(r.__renderTarget);N.bindFramebuffer(M.READ_FRAMEBUFFER,h.__webglFramebuffer),N.bindFramebuffer(M.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,P.get(e).__webglTexture,i,d+n),M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,P.get(t).__webglTexture,a,m+n)),M.blitFramebuffer(l,u,o,s,f,p,o,s,M.DEPTH_BUFFER_BIT,M.NEAREST);N.bindFramebuffer(M.READ_FRAMEBUFFER,null),N.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||P.has(e)){let n=P.get(e),r=P.get(t);N.bindFramebuffer(M.READ_FRAMEBUFFER,k),N.bindFramebuffer(M.DRAW_FRAMEBUFFER,A);for(let e=0;e<c;e++)w?M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):M.framebufferTexture2D(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,n.__webglTexture,i),T?M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):M.framebufferTexture2D(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,r.__webglTexture,a),i===0?T?M.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):M.copyTexSubImage2D(v,a,f,p,l,u,o,s):M.blitFramebuffer(l,u,o,s,f,p,o,s,M.COLOR_BUFFER_BIT,M.NEAREST);N.bindFramebuffer(M.READ_FRAMEBUFFER,null),N.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?M.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?M.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):M.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?M.texSubImage2D(M.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?M.compressedTexSubImage2D(M.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):M.texSubImage2D(M.TEXTURE_2D,a,f,p,o,s,g,_,h);N.pixelStorei(M.UNPACK_ROW_LENGTH,y),N.pixelStorei(M.UNPACK_IMAGE_HEIGHT,b),N.pixelStorei(M.UNPACK_SKIP_PIXELS,x),N.pixelStorei(M.UNPACK_SKIP_ROWS,S),N.pixelStorei(M.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&M.generateMipmap(v),N.unbindTexture()},this.initRenderTarget=function(e){P.get(e).__webglFramebuffer===void 0&&Ae.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Ae.setTextureCube(e,0):e.isData3DTexture?Ae.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Ae.setTexture2DArray(e,0):Ae.setTexture2D(e,0),N.unbindTexture()},this.resetState=function(){ee=0,te=0,j=null,N.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return wr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=_i._getDrawingBufferColorSpace(e),t.unpackColorSpace=_i._getUnpackColorSpace()}},dp=[{speed:1.9,lat:1.2,radius:.3,scale:1.15},{speed:1.3,lat:.8,radius:.56,scale:1.75},{speed:1.6,lat:1.4,radius:1.7,scale:4},{speed:1.7,lat:.6,radius:.3,scale:1.15},{speed:1.2,lat:.7,radius:.45,scale:1.45},{speed:4.2,lat:2.4,radius:.3,scale:1.1},{speed:2,lat:1.3,radius:.3,scale:1.1},{speed:3.5,lat:2,radius:.34,scale:1.2},{speed:1.5,lat:.6,radius:.32,scale:1.25},{speed:1.3,lat:.9,radius:.42,scale:1.35},{speed:2.1,lat:1.3,radius:.24,scale:.75},{speed:1.6,lat:.6,radius:.32,scale:1.2},{speed:1.15,lat:.7,radius:.62,scale:1.95},{speed:2.6,lat:.4,radius:.3,scale:1.05},{speed:1.7,lat:1,radius:.32,scale:1.25},{speed:.9,lat:.5,radius:.62,scale:1.8},{speed:1.4,lat:.6,radius:.34,scale:1.3},{speed:1.7,lat:.8,radius:.5,scale:1.55},{speed:3,lat:1.6,radius:.26,scale:.85}],fp=9,pp=5,mp=-34,hp=6,gp=new Set([3,8,11,16]),_p=[{id:`ogre`,scale:4,radius:1.7,speed:1.6,hold:0,patience:0},{id:`golem`,scale:3.6,radius:1.6,speed:1.1,hold:0,patience:0},{id:`necro`,scale:3.4,radius:1.3,speed:1.4,hold:-18,patience:20},{id:`dragon`,scale:3.8,radius:1.8,speed:1.5,hold:-19,patience:15},{id:`kraken`,scale:3.4,radius:1.8,speed:1.2,hold:-17,patience:22},{id:`spider`,scale:3.3,radius:1.7,speed:1.3,hold:-18,patience:20},{id:`warking`,scale:3.2,radius:1.8,speed:1,hold:-20,patience:24}].map(e=>({...e,get name(){return O(C(`beast.${e.id}.name`))},get sub(){return C(`boss.${e.id}.sub`)}})),vp=.35,yp=3.4,bp=6,xp=bp*2,Sp=-60,Cp=Math.ceil(21-Sp),wp=xp*Cp,Tp=e=>Nt(Math.floor(e+bp),0,xp-1),Ep=e=>Nt(Math.floor(e-Sp),0,Cp-1),Dp=class{n=0;nextUid=1;nextGroup=0;uid=new Int32Array(a);type=new Uint8Array(a);x=new Float32Array(a);z=new Float32Array(a);hp=new Float64Array(a);maxHp=new Float64Array(a);speed=new Float32Array(a);lat=new Float32Array(a);radius=new Float32Array(a);bite=new Float64Array(a);scale=new Float32Array(a);slowT=new Float32Array(a);slowAmt=new Float32Array(a);burnT=new Float32Array(a);burnDps=new Float64Array(a);flash=new Float32Array(a);phase=new Float32Array(a);group=new Int16Array(a);aim=new Float32Array(a);contact=new Uint8Array(a);mode=new Uint8Array(a);modeT=new Float32Array(a);shield=new Float64Array(a);timer=new Float32Array(a);hold=new Float32Array(a);held=new Float32Array(a);kind=new Uint8Array(a);actT=new Float32Array(a);armor=new Float64Array(a);quiet=new Float32Array(a);buffT=new Float32Array(a);veiled=new Uint8Array(a);ward=new Uint8Array(a);owner=new Int32Array(a);guarded=new Uint8Array(a);bossList=[];packN=[];charge=new Uint8Array(a);banners=[];chasers=0;cellOf=new Int32Array(a);cellCount=new Int32Array(wp);cellStart=new Int32Array(wp+1);items=new Int32Array(a);sepX=new Float32Array(a);sepZ=new Float32Array(a);bosses=[];gCount=new Int32Array(64);gX=new Float32Array(64);gZ=new Float32Array(64);clear(){this.n=0,this.bosses.length=0,this.gCount.fill(0)}newGroup(){let e=this.nextGroup;return this.nextGroup=(this.nextGroup+1)%64,e}spawn(e,t,n,r,a,o=-1){if(this.n>=1800)return-1;let s=this.n++,c=dp[e];return this.uid[s]=this.nextUid++,this.type[s]=e,this.x[s]=t,this.z[s]=n,this.hp[s]=r,this.maxHp[s]=r,this.speed[s]=c.speed*g*(.9+Math.random()*.2),this.lat[s]=c.lat,this.radius[s]=c.radius,this.bite[s]=a,this.scale[s]=c.scale*i,this.slowT[s]=0,this.slowAmt[s]=0,this.burnT[s]=0,this.burnDps[s]=0,this.flash[s]=0,this.phase[s]=Math.random()*Math.PI*2,this.group[s]=o,this.aim[s]=(Math.random()-Math.random())*(e===1||e===4?.5:1),this.contact[s]=0,this.mode[s]=0,this.modeT[s]=0,this.shield[s]=0,this.timer[s]=1+Math.random()*1.5,this.hold[s]=1*(e===3?-13-Math.random()*5:e===11?-15-Math.random()*4:e===8?-20-Math.random()*4:e===16?-18-Math.random()*4:0),this.held[s]=0,this.kind[s]=0,this.actT[s]=0,this.armor[s]=0,this.quiet[s]=0,this.buffT[s]=0,this.veiled[s]=0,this.ward[s]=0,this.owner[s]=0,this.guarded[s]=0,this.charge[s]=0,s}makeBoss(e,t){let n=_p[t];this.kind[e]=t,this.scale[e]=n.scale,this.radius[e]=n.radius,this.speed[e]=n.speed,this.hold[e]=n.hold*1,this.timer[e]=2.5}updateGuards(e){let t=this.bossList;t.length=0;for(let e=0;e<this.n;e++)this.type[e]===2&&this.hp[e]>0&&this.kind[e]===2&&t.push(e);if(!t.length)return;let n=this.packN;n.length=t.length,n.fill(0);for(let e=0;e<this.n;e++){let r=this.owner[e];if(!(r===0||this.hp[e]<=0)){for(let e=0;e<t.length;e++)if(this.uid[t[e]]===r){n[e]++;break}}}for(let r=0;r<t.length;r++){let i=t[r],a=+(n[r]>0);this.guarded[i]&&!a&&(this.timer[i]=Math.max(this.timer[i],pp),e.bossExposed(i)),this.guarded[i]=a}}update(e,t){this.updateGuards(t);let n=t.squad,r=t.scroll,i=n.frontZ(),a=i-1.8,o=n.backZ(),s=n.bodies>0,c=t.time;this.chasers=0;let l=this.banners;l.length=0;for(let e=0;e<this.n;e++)this.type[e]===16&&this.hp[e]>0&&l.push(this.x[e],this.z[e]);for(let u=0;u<this.n;u++){if(this.hp[u]<=0)continue;if(this.ward[u]&&this.z[u]>i-fp&&(this.ward[u]=0,t.particles.burst(this.x[u],.7,this.z[u],4,4906624,3.2,.11,.45,4)),this.quiet[u]+=e,this.buffT[u]>0&&(this.buffT[u]-=e),l.length)for(let e=0;e<l.length;e+=2){let t=this.x[u]-l[e],n=this.z[u]-l[e+1];t*t+n*n<25&&(this.buffT[u]=.25)}let d=1;if(this.slowT[u]>0&&(this.slowT[u]-=e,d=1-this.slowAmt[u]),this.burnT[u]>0&&!this.guarded[u]&&(this.burnT[u]-=e,t.dmgBy[3]+=Math.min(this.hp[u],this.burnDps[u]*e),this.hp[u]-=this.burnDps[u]*e,this.hp[u]<=0)){t.killEnemy(u);continue}this.flash[u]>0&&(this.flash[u]-=e),this.actT[u]>0&&(this.actT[u]-=e);let f=this.type[u],p=f===2,m=this.radius[u],h=this.mode[u],g=this.lat[u];this.buffT[u]>0&&(d*=1.35),f===12&&this.quiet[u]>1.2&&this.hp[u]<this.maxHp[u]?this.hp[u]=Math.min(this.maxHp[u],this.hp[u]+this.maxHp[u]*.07*e):f===14?this.veiled[u]=+((c+this.phase[u])%3.2<1.3):f===13&&h===0?this.x[u]+=Math.cos(c*2.4+this.phase[u])*1.9*2.4*e:f===17&&!this.charge[u]&&h===0&&this.z[u]>-19&&(this.charge[u]=1,this.speed[u]*=3.2,this.lat[u]=.25);let _=t.wallAt(this.x[u]);if(h===0){if(this.hold[u]!==0&&this.z[u]>=this.hold[u]){this.held[u]+=e;let t=p?_p[this.kind[u]].patience:14;(this.held[u]>t||p&&this.hp[u]<this.maxHp[u]*.4)&&!this.guarded[u]&&(this.hold[u]=0)}else if(!(p&&this.contact[u])){let t=p?0:hp*Nt((mp-this.z[u])/8,0,1);this.z[u]+=(r+this.speed[u]*d+t)*e}_!==null&&this.z[u]+m>_&&(this.z[u]=_-m,t.wallContact(u,e)),(gp.has(f)||p)&&(this.timer[u]-=e,this.timer[u]<=0&&(this.timer[u]=t.enemyAbility(u))),this.z[u]<-26&&(g=0),this.hold[u]===0&&s&&this.z[u]-m>o+.6&&(this.mode[u]=1,this.modeT[u]=vp)}else h===1?(this.z[u]+=r*e,this.modeT[u]-=e,this.modeT[u]<=0&&(this.mode[u]=2),g=0,this.chasers++):(this.z[u]-=yp*d*e,g=4.5,this.z[u]+m<i-1.5&&(this.mode[u]=0),this.chasers++);if(g>0){let t=g*d*e,r=p?n.cx:n.cx+this.aim[u]*n.radius*.85;this.x[u]+=Nt(r-this.x[u],-t,t)}if(this.x[u]=Nt(this.x[u],-4+m*.5,4-m*.5),this.z[u]>19){if(p)this.z[u]=-52,this.mode[u]=0;else{this.hp[u]=0;continue}}if(s&&(_===null||this.z[u]+m<_-.15)&&this.z[u]+m>a){let r=n.nearest(this.x[u],this.z[u]);if(r>=0){let i=n.x[r]-this.x[u],a=n.z[r]-this.z[u],o=m+.2;i*i+a*a<o*o?t.enemyContact(u,r,e):p&&(this.contact[u]=0)}}}}buildGrid(){this.cellCount.fill(0),this.bosses.length=0,this.gCount.fill(0),this.gX.fill(0),this.gZ.fill(-999);for(let e=0;e<this.n;e++){if(this.hp[e]<=0){this.cellOf[e]=-1;continue}if(this.type[e]===2){this.bosses.push(e),this.cellOf[e]=-1;continue}let t=Tp(this.x[e])+Ep(this.z[e])*xp;this.cellOf[e]=t,this.cellCount[t]++;let n=this.group[e];n>=0&&this.mode[e]===0&&(this.gCount[n]++,this.gX[n]+=this.x[e],this.z[e]>this.gZ[n]&&(this.gZ[n]=this.z[e]))}let e=0;for(let t=0;t<wp;t++)this.cellStart[t]=e,e+=this.cellCount[t];this.cellStart[wp]=e;for(let e=0;e<this.n;e++){let t=this.cellOf[e];t>=0&&(this.items[this.cellStart[t]+--this.cellCount[t]]=e)}}queryHit(e,t,n,r){let i=.85,a=Tp(e-i),o=Tp(e+i),s=Ep(t-i),c=Ep(n+i);for(let i=s;i<=c;i++)for(let s=a;s<=o;s++){let a=s+i*xp;for(let i=this.cellStart[a],o=this.cellStart[a+1];i<o;i++){let a=this.items[i];if(this.hp[a]<=0||this.uid[a]===r||this.veiled[a]||this.ward[a])continue;let o=this.radius[a]+.07;if(Math.abs(this.x[a]-e)<o&&this.z[a]+o>t&&this.z[a]-o<n)return a}}for(let i=0;i<this.bosses.length;i++){let a=this.bosses[i];if(this.hp[a]<=0||this.uid[a]===r)continue;let o=this.radius[a]*1.35;if(Math.abs(this.x[a]-e)<o&&this.z[a]+o>t&&this.z[a]-o<n)return a}return-1}separate(e){let t=this.sepX,n=this.sepZ;t.fill(0,0,this.n),n.fill(0,0,this.n);for(let e=0;e<this.n;e++){if(this.hp[e]<=0||this.cellOf[e]<0)continue;let r=this.radius[e],i=Tp(this.x[e]-1),a=Tp(this.x[e]+1),o=Ep(this.z[e]-1),s=Ep(this.z[e]+1);for(let c=o;c<=s;c++)for(let o=i;o<=a;o++){let i=o+c*xp;for(let a=this.cellStart[i],o=this.cellStart[i+1];a<o;a++){let i=this.items[a];if(i<=e||this.hp[i]<=0)continue;let o=this.radius[i],s=(r+o)*.85,c=this.x[i]-this.x[e],l=this.z[i]-this.z[e],u=c*c+l*l;if(u>=s*s)continue;u<1e-6&&(c=Math.random()-.5,l=Math.random()-.5,u=c*c+l*l);let d=Math.sqrt(u),f=(s-d)/d,p=o*o/(r*r+o*o);t[e]-=c*f*p,n[e]-=l*f*p*.5,t[i]+=c*f*(1-p),n[i]+=l*f*(1-p)*.5}}}let r=1.6*e;for(let e=0;e<this.n;e++){if(t[e]===0&&n[e]===0)continue;let i=Math.hypot(t[e],n[e]),a=i>r?r/i:1,o=this.radius[e];this.x[e]=Nt(this.x[e]+t[e]*a,-4+o*.5,4-o*.5),this.z[e]+=n[e]*a}}collectNear(e,t,n,r,i=-1){let a=0,o=n*n,s=Tp(e-n-.6),c=Tp(e+n+.6),l=Ep(t-n-.6),u=Ep(t+n+.6);for(let n=l;n<=u&&a<r.length;n++)for(let l=s;l<=c&&a<r.length;l++){let s=l+n*xp;for(let n=this.cellStart[s],c=this.cellStart[s+1];n<c&&a<r.length;n++){let s=this.items[n];if(s===i||this.hp[s]<=0||this.veiled[s]||this.ward[s])continue;let c=this.x[s]-e,l=this.z[s]-t;c*c+l*l<=o&&(r[a++]=s)}}for(let o=0;o<this.bosses.length&&a<r.length;o++){let s=this.bosses[o];if(s===i||this.hp[s]<=0)continue;let c=this.x[s]-e,l=this.z[s]-t,u=n+this.radius[s];c*c+l*l<=u*u&&(r[a++]=s)}return a}compact(){let e=0;for(;e<this.n;){if(this.hp[e]>0){e++;continue}let t=--this.n;e!==t&&this.move(t,e)}}move(e,t){this.uid[t]=this.uid[e],this.type[t]=this.type[e],this.x[t]=this.x[e],this.z[t]=this.z[e],this.hp[t]=this.hp[e],this.maxHp[t]=this.maxHp[e],this.speed[t]=this.speed[e],this.lat[t]=this.lat[e],this.radius[t]=this.radius[e],this.bite[t]=this.bite[e],this.scale[t]=this.scale[e],this.slowT[t]=this.slowT[e],this.slowAmt[t]=this.slowAmt[e],this.burnT[t]=this.burnT[e],this.burnDps[t]=this.burnDps[e],this.flash[t]=this.flash[e],this.phase[t]=this.phase[e],this.group[t]=this.group[e],this.aim[t]=this.aim[e],this.contact[t]=this.contact[e],this.mode[t]=this.mode[e],this.modeT[t]=this.modeT[e],this.shield[t]=this.shield[e],this.timer[t]=this.timer[e],this.hold[t]=this.hold[e],this.held[t]=this.held[e],this.kind[t]=this.kind[e],this.actT[t]=this.actT[e],this.armor[t]=this.armor[e],this.quiet[t]=this.quiet[e],this.buffT[t]=this.buffT[e],this.veiled[t]=this.veiled[e],this.ward[t]=this.ward[e],this.owner[t]=this.owner[e],this.guarded[t]=this.guarded[e],this.charge[t]=this.charge[e]}},Op=1.4,kp=[`lagoon`,`desert`,`snow`,`castle`,`volcano`],Ap=[`day`,`day`,`dusk`,`day`,`storm`,`dusk`,`day`,`night`,`storm`,`night`],jp=3,Mp=e=>C(`theme.${e}`),Np=e=>C(`mood.${e}`),Pp={lagoon:`🏝️`,desert:`🏜️`,snow:`❄️`,castle:`🏰`,volcano:`🌋`},Fp={day:`☀️`,dusk:`🌅`,night:`🌙`,storm:`⛈️`},Ip=e=>[``,`I`,`II`,`III`,`IV`,`V`,`VI`,`VII`,`VIII`,`IX`,`X`][e]??String(e),Lp=(e,t)=>{let n=Math.imul(e^2654435769,2246822507)^Math.imul(t+1663821227,3266489909);return n^=n>>>15,Math.imul(n,668265263)>>>0||1};function Rp(e){let t=kp[(e-1)%kp.length],n=Math.floor((e-1)/kp.length),r=C(`island.${t}.${n%jp}`),i=Math.floor(n/jp);return i>0?`${r} ${Ip(i+1)}`:r}function zp(e){let t=Math.floor(e/10)+1,n=e%10+1,r=kp[(t-1)%kp.length],i=n===5||n===10,a=n===10?7:4+Math.floor((n-1)/3);return{index:e,world:t,level:n,label:`${t}-${n}`,island:Rp(t),theme:r,mood:Ap[n-1],waves:a,ramp:Math.min(Op,7.6/(a-1),.75+.035*(n-1)+Bp(t)),seed:Lp(t,n),boss:i?((t-1)*2+ +(n===10))%_p.length:-1}}function Bp(e){return .08*Math.min(e-1,4)+.2*(1-Math.exp(-Math.max(0,e-5)/8))}var Vp=(e,t)=>1+t*e.ramp,Hp=[[`lagoon`,`day`],[`desert`,`dusk`],[`castle`,`storm`],[`snow`,`night`],[`volcano`,`day`],[`lagoon`,`night`],[`desert`,`storm`],[`castle`,`dusk`],[`snow`,`day`],[`volcano`,`night`]];function Up(e){return Hp[Math.floor((e-1)/10)%Hp.length]}function Wp(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new uo,l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let e in d.morphAttributes){if(!i.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;o[e]===void 0&&(o[e]=[]),o[e].push(d.morphAttributes[e])}if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=Gp(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=Gp(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function Gp(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new Ya(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}var Kp=new H;function W(e,t){let n=e.index?e.toNonIndexed():e;n.hasAttribute(`uv`)&&n.deleteAttribute(`uv`),Kp.setHex(t);let r=n.getAttribute(`position`).count,i=new Float32Array(r*3);for(let e=0;e<r;e++)i[e*3]=Kp.r,i[e*3+1]=Kp.g,i[e*3+2]=Kp.b;return n.setAttribute(`color`,new Ya(i,3)),n}function G(e){let t=Wp(e,!1);if(!t)throw Error(`mergeGeometries failed`);return t.computeVertexNormals(),t.computeBoundingSphere(),t}var K=(e,t,n,r=8)=>new as(e,t,n,r),q=(e,t=1)=>new Ec(e,t),J=(e,t,n)=>new rs(e,t,n),qp=e=>new Ac(e,8,4,0,Math.PI*2,0,Math.PI/2),Y=(e,t,n=5)=>new os(e,t,n);function Jp(){return G([W(J(1.06,.14,1.06).translate(0,.07,0),7039851),W(J(1,.86,1).translate(0,.57,0),14277081),W(J(.84,.06,.84).translate(0,1.02,0),16777215)])}function Yp(){return G([W(K(.24,.24,.07,12).rotateX(Math.PI/2),n.gold),W(K(.15,.15,.1,12).rotateX(Math.PI/2),16639626)])}function Xp(){return G([W(J(1.1,.6,.75).translate(0,.3,0),n.chestWood),W(J(1.14,.26,.79).translate(0,.73,0),n.chestDark),W(J(.12,.9,.81).translate(-.36,.45,0),n.gold),W(J(.12,.9,.81).translate(.36,.45,0),n.gold),W(J(.18,.2,.06).translate(0,.56,.41),n.gold)])}function Zp(){return G([W(K(.16,.2,2.6).translate(0,1.3,0),n.post),W(q(.2,0).translate(0,2.72,0),n.gold)])}function Qp(){return G([W(J(1.08,.05,1.08).translate(0,.025,0),14427686),W(J(1,.1,1).translate(0,.06,0),3621201)])}function $p(){return G([W(Y(.1,.36,5).translate(0,.28,0),15067115)])}function em(){return G([W(new cs(.42,0),n.stone)])}function tm(){let e=[];for(let t=0;t<5;t++){let r=t/5*Math.PI*2;e.push(W(J(.9,.06,.28).translate(.45,0,0).rotateZ(-.35).rotateY(r).translate(.25,2.25,0),n.leaf))}return G([W(K(1.7,2.3,1.4,7).translate(0,-.5,0),n.sand),W(K(1.35,1.6,.35,7).translate(0,.35,0),n.grass),W(K(.08,.13,1.8,5).rotateZ(-.12).translate(.15,1.35,0),n.wood),...e,W(q(.45,0).translate(-.8,.6,.5),n.stone)])}function nm(){let e=(e,t,n)=>[W(K(.15,.17,n,7).translate(e,n/2+.1,t),5078031),W(K(.09,.09,.45,6).rotateZ(Math.PI/2).translate(e+.25,n*.55,t),5078031),W(K(.09,.09,.45,6).translate(e+.45,n*.55+.22,t),5078031),W(K(.08,.08,.35,6).rotateZ(Math.PI/2).translate(e-.22,n*.4,t),4153874),W(K(.08,.08,.35,6).translate(e-.38,n*.4+.17,t),4153874)];return G([W(K(1.6,2.2,1.2,7).translate(0,-.5,0),14725226),...e(.2,.1,1.6),...e(-.9,.6,1),W(q(.4,0).translate(.9,.2,.6),11565637),W(q(.28,0).translate(-.4,.15,-.8),13208917)])}function rm(){let e=(e,t,r)=>[W(K(.07*r,.09*r,.4*r,5).translate(e,.3*r,t),n.wood),W(Y(.55*r,.8*r,7).translate(e,.8*r,t),1332013),W(Y(.42*r,.7*r,7).translate(e,1.2*r,t),1467700),W(Y(.28*r,.6*r,7).translate(e,1.6*r,t),1409085),W(Y(.16*r,.25*r,7).translate(e,1.86*r,t),16777215)];return G([W(K(1.6,2.1,1.1,8).translate(0,-.45,0),15857145),W(q(.5,0).scale(1.4,.5,1).translate(.6,.15,.5),14870768),...e(.1,0,1.2),...e(-.8,.5,.85),...e(.9,-.5,.7)])}function im(){let e=[];for(let t=0;t<8;t++){let n=t/8*Math.PI*2;e.push(W(J(.22,.25,.22).translate(Math.cos(n)*.72,3.05,Math.sin(n)*.72),10265519))}return G([W(K(1.3,1.7,1.3,7).translate(0,-.55,0),5722958),W(K(.72,.8,2.9,10).translate(0,1.45,0),11051678),W(K(.82,.82,.12,10).translate(0,2.92,0),7893356),...e,W(Y(.9,1.3,10).translate(0,3.8,0),12131356),W(K(.03,.03,.8,4).translate(0,4.7,0),n.woodDark),W(J(.45,.28,.03).translate(.24,4.85,0),16436245),W(J(.2,.32,.05).translate(0,1.7,.76),2696484),W(J(.2,.32,.05).translate(0,2.3,-.76),2696484)])}function am(){return G([W(K(1.5,2,1,7).translate(0,-.45,0),2696484),W(Y(.55,2.6,6).translate(-.4,1.3,.1),1841431),W(Y(.42,1.8,6).translate(.55,.9,-.3),2696484),W(J(.06,1.2,.06).rotateZ(.15).translate(-.32,1.1,.45),16747008),W(J(.05,.8,.05).rotateZ(-.2).translate(.6,.8,.1),16738816),W(K(.35,.9,.9,7).translate(.8,.45,.8),4144966),W(K(.3,.3,.06,7).translate(.8,.92,.8),16734751)])}var om={palm:tm,cactus:nm,pine:rm,tower:im,spire:am};function sm(e){return(om[e]??tm)()}function cm(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(32,32,0,32,32,32);return n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.55,`rgba(255,255,255,0.6)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64),new $o(e)}var lm=e=>new cs(e,0);function um(){let e=[];for(let t=0;t<6;t++){let r=t/6*Math.PI*2+.3;e.push(W(J(.66,.04,.2).translate(.33,0,0).rotateZ(-.42).rotateY(r).translate(.2,1.32,0),t%2?n.leaf:4176208))}return G([W(K(.05,.09,1.34,6).translate(0,.67,0).rotateZ(-.15),n.wood),...e,W(q(.065,0).translate(.22,1.22,.07),7029795),W(q(.065,0).translate(.13,1.22,-.07),7029795)])}function dm(e,t){return G([W(q(.3,0).translate(0,.2,0),e),W(q(.22,0).translate(.26,.14,.08),t),W(q(.19,0).translate(-.22,.12,-.06),t)])}function fm(e,t){return G([W(lm(.3).scale(1,.72,1).translate(0,.16,0),e),W(lm(.17).translate(.3,.09,.12),t)])}function pm(){let e=5078031,t=4153874;return G([W(K(.12,.14,1.1,7).translate(0,.55,0),e),W(K(.07,.07,.3,6).rotateZ(Math.PI/2).translate(.2,.55,0),e),W(K(.07,.07,.34,6).translate(.34,.72,0),e),W(K(.06,.06,.24,6).rotateZ(Math.PI/2).translate(-.17,.4,0),t),W(K(.06,.06,.26,6).translate(-.28,.53,0),t),W(q(.06,0).translate(0,1.12,0),16020150)])}function mm(){return G([W(qp(1).scale(1.1,.32,.75),14462566),W(qp(.6).scale(1,.4,.8).translate(.8,0,.4),15253370)])}function hm(e){let t=e?16777215:1409085;return G([W(K(.06,.08,.3,5).translate(0,.15,0),n.wood),W(Y(.46,.62,7).translate(0,.55,0),1332013),W(Y(.36,.56,7).translate(0,.86,0),1467700),W(Y(.24,.46,7).translate(0,1.14,0),1409085),W(Y(.13,.2,7).translate(0,1.33,0),t)])}function gm(){return G([W(K(.07,.1,.55,6).translate(0,.27,0),n.woodDark),W(q(.42,0).translate(0,.82,0),4165434),W(q(.3,0).translate(.24,.7,.12),5025616),W(q(.26,0).translate(-.22,.95,-.1),3508787)])}function _m(){return G([W(J(.7,.5,.6).translate(0,.25,0),15852486),W(Y(.58,.42,4).rotateY(Math.PI/4).scale(1.18,1,1).translate(0,.71,0),11817770),W(J(.16,.26,.02).translate(0,.13,.31),5977112),W(J(.14,.12,.02).translate(.2,.32,.31),8246268),W(J(.1,.24,.1).translate(.18,.86,-.1),7893356)])}function vm(){return G([W(K(.05,.09,1,5).translate(0,.5,0),2696484),W(J(.04,.42,.04).rotateZ(.8).translate(.16,.7,0),2696484),W(J(.035,.34,.035).rotateZ(-.9).translate(-.13,.85,.02),1841431),W(J(.03,.26,.03).rotateX(.9).translate(0,.62,.1),1841431)])}function ym(){return G([W(lm(.32).scale(1,.8,1).translate(0,.2,0),2564125),W(J(.05,.05,.42).rotateY(.6).translate(0,.42,0),16742938),W(lm(.16).translate(.32,.1,.1),1841431)])}function bm(){return G([W(Y(.32,1.5,6).translate(0,.75,0),1841431),W(Y(.22,.9,6).translate(.34,.45,.12),2696484),W(J(.04,.7,.04).rotateZ(.12).translate(-.08,.6,.2),16747008)])}function xm(){return G([W(lm(.3).scale(.9,1.1,.9).translate(0,.28,0),13100791),W(lm(.18).translate(.28,.12,.1),14742270)])}function Sm(){return G([W(q(.26,1).translate(0,.24,0),16777215),W(q(.18,1).translate(0,.6,0),16777215),W(Y(.04,.16,5).rotateX(Math.PI/2).translate(0,.62,.22),16347926),W(K(.12,.12,.14,8).translate(0,.82,0),2042167),W(K(.18,.18,.02,8).translate(0,.75,0),2042167)])}function Cm(){let e=[];for(let t=0;t<4;t++){let n=.5-t*.06;e.push(W(K(n-.06,n,.55,10).translate(0,.55+t*.55,0),t%2?14427686:16777215))}return G([W(lm(.75).scale(1.2,.5,1.2).translate(0,.2,0),9146265),...e,W(K(.38,.38,.08,10).translate(0,2.62,0),3621201),W(K(.24,.24,.36,8).translate(0,2.84,0),16638023),W(Y(.32,.4,10).translate(0,3.22,0),14427686)])}function wm(){return G([W(Y(1.9,2.3,4).rotateY(Math.PI/4).translate(0,1.15,0),14923371),W(Y(.32,.39,4).rotateY(Math.PI/4).translate(0,2.15,0),n.gold),W(J(.4,.5,.05).translate(0,.25,1.35),5977112),W(Y(.85,1,4).rotateY(Math.PI/4).translate(1.9,.5,.9),14264668)])}function Tm(){return G([W(Y(1.8,3,7).translate(0,1.5,0),10273760),W(Y(.95,1.55,7).translate(0,2.25,0),16777215),W(Y(1.1,1.8,7).translate(1.4,.9,.6),12047594),W(Y(.55,.8,7).translate(1.4,1.4,.6),16777215)])}function Em(){let e=[W(J(1.5,1.7,1.5).translate(0,.85,0),11051678),W(J(1.62,.14,1.62).translate(0,1.72,0),7893356),W(J(.45,.7,.06).translate(0,.35,.76),4139540),W(K(.03,.03,.9,4).translate(0,2.2,0),n.woodDark),W(J(.5,.32,.03).translate(.27,2.45,0),2450411)];for(let t=0;t<4;t++){let n=t%2?.78:-.78,r=t<2?.78:-.78;e.push(W(K(.34,.38,2.3,9).translate(n,1.15,r),12104363)),e.push(W(Y(.44,.62,9).translate(n,2.6,r),12131356))}for(let t=0;t<4;t++)e.push(W(J(.22,.2,.22).translate(-.45+t*.3,1.89,.7),10265519));return G(e)}function Dm(){return G([W(K(.72,2.1,2.3,9).translate(0,1.15,0),3877412),W(K(.78,.78,.08,9).translate(0,2.32,0),2564125),W(K(.6,.6,.06,9).translate(0,2.33,0),16742938),W(J(.16,1.6,.06).rotateX(-.42).translate(0,1.5,.9),16738816),W(J(.12,1.2,.05).rotateZ(.5).rotateY(1.9).translate(.75,1.3,-.35),16747008)])}function Om(){return new as(.62,.72,.22,20).translate(0,.11,0)}function km(e){let t=new Oc(.86,.86).rotateX(-Math.PI/2).rotateY(Math.PI),n=t.getAttribute(`uv`);for(let t=0;t<n.count;t++)n.setX(t,(e-1+n.getX(t))/10);return t}function Am(){let e=new zs;for(let t=0;t<10;t++){let n=t%2?.055:.13,r=Math.PI/2+t*Math.PI/5;t===0?e.moveTo(Math.cos(r)*n,Math.sin(r)*n):e.lineTo(Math.cos(r)*n,Math.sin(r)*n)}return G([W(new Cc(e,{depth:.05,bevelEnabled:!1}).translate(0,0,-.025),16777215)])}function jm(){return new rs(.36,.06,.26).translate(0,.03,0)}function Mm(){return G([W(J(1,.07,.24),10578490),W(J(.96,.02,.2).translate(0,.04,0),11893831)])}function Nm(){return G([W(K(.06,.07,1.2,6).translate(0,0,0),7029795)])}function Pm(){return G([W(K(.025,.03,1.2,5).translate(0,.6,0),n.woodDark),W(J(.46,.3,.025).translate(.24,1.02,0),n.blue),W(J(.16,.1,.03).translate(.24,1.02,0),n.gold),W(q(.05,0).translate(0,1.22,0),n.gold)])}function Fm(){return G([W(K(.42,.3,1.7,6).rotateX(Math.PI/2).scale(1,.55,1).translate(0,.12,0),9132587),W(J(.62,.05,1.3).translate(0,.32,0),11893831),W(K(.03,.03,1.5,5).translate(0,1.05,-.05),n.woodDark),W(J(.03,.9,.7).translate(0,1.15,.3),16643811),W(J(.2,.12,.02).translate(.1,1.72,-.05),n.red)])}function Im(){return new Ec(1,1)}function Lm(e,t,n){let r=W(e,t),i=r.getAttribute(`position`).count,a=new Float32Array(i*4),o=new Float32Array(i*4),[s,c,l]=n.pivot??[0,0,0],[u,d,f]=n.act??[0,0,0],p=n.swing??0,m=n.kind??1;for(let e=0;e<i;e++){let t=e*4;a[t]=p,a[t+1]=u,a[t+2]=d,a[t+3]=f,o[t]=s,o[t+1]=c,o[t+2]=l,o[t+3]=m}return r.setAttribute(`aRig`,new Ya(a,4)),r.setAttribute(`aPivot`,new Ya(o,4)),r}var X=class{parts=[];on(e={}){return(t,n)=>{this.parts.push(Lm(t,n,e))}}build(e,t=0){let n=G(this.parts);if(t){n.translate(0,-t,0);let e=n.getAttribute(`aPivot`);for(let n=0;n<e.count;n++)e.setY(n,e.getY(n)-t)}n.computeBoundingBox();let r=Math.max(.4,n.boundingBox.max.y),i=n.getAttribute(`position`),a=n.getAttribute(`color`);for(let e=0;e<i.count;e++){let t=ci.clamp(i.getY(e)/r,0,1),n=.8+.2*Math.sqrt(t);a.setXYZ(e,a.getX(e)*n,a.getY(e)*n,a.getZ(e)*n)}return{geo:n,gait:e}}},Rm=new V(0,1,0),zm=new V,Bm=new li;function Z(e,t,n,r=n,i=6,a=!1){zm.set(t[0]-e[0],t[1]-e[1],t[2]-e[2]);let o=new as(r,n,zm.length(),i,1,a);return Bm.setFromUnitVectors(Rm,zm.normalize()),o.applyQuaternion(Bm),o.translate((e[0]+t[0])/2,(e[1]+t[1])/2,(e[2]+t[2])/2),o}var Q=(e,t,n=1)=>q(e,n).translate(t[0],t[1],t[2]),$=(e,t,n,r)=>J(e,t,n).translate(r[0],r[1],r[2]),Vm=(e,t,n,r,i=8)=>K(e,t,n,i).translate(r[0],r[1],r[2]),Hm=(e,t)=>new cs(e,0).translate(t[0],t[1],t[2]),Um=(e,t)=>new Dc(e,0).translate(t[0],t[1],t[2]),Wm=(e,t,n)=>new Oc(e,t).rotateY(Math.PI).translate(n[0],n[1],n[2]),Gm=e=>new Ac(e,7,3,0,Math.PI*2,0,Math.PI/2),Km=(e,t,n,r,i=8)=>new as(e,t,n,i,1,!0).translate(r[0],r[1],r[2]);function qm(e){let t=[];for(let n=1;n+1<e.length;n++){let r=e[0],i=e[n],a=e[n+1];t.push(...r,...i,...a,...r,...a,...i)}let n=new uo;return n.setAttribute(`position`,new Qa(t,3)),n.setAttribute(`normal`,new Qa(Array(t.length).fill(0),3)),n}function Jm(e,t,n,r){let i=Math.hypot(t[0],t[1],t[2])||1;return Z(e,[e[0]+t[0]/i*n,e[1]+t[1]/i*n,e[2]+t[2]/i*n],r,.002,4)}var Ym=.3,Xm=.505,Zm=.54,Qm=.645,$m=5977112,eh=3877402,th=2042167,nh=16638023;function rh(e,t){let n=t.wide??1,r=t.low??!1,i=t.stride??.6;for(let a of[-1,1]){let o=.064*a*n,s=e.on({pivot:[o,Ym,0],swing:a<0?i:-i});s(Z([o,Ym,0],[o,.07,.005],.054*n,.045*n,r?5:6,!0),t.legs),s($(.082*n,.07,.135,[o,.035,-.024]),t.boots)}let a=e.on();a($(.2*n,.08,.13,[0,.31,0]),t.legs),a(Vm(.124*n,.106*n,.2,[0,.43,0],r?6:8),t.torso),a(Km(.11*n,.11*n,.036,[0,.345,0],r?6:8),t.belt);let o=e.on({pivot:[0,Zm,0],swing:.05});o(Km(.042,.047,.05,[0,.545,0],r?5:6),t.skin),o(Q(.106,[0,Qm,0],+!r),t.skin);for(let e of[-1,1])o(Wm(.024,.036,[.037*e,.655,-.104]),t.eyes??th);return o}function ih(e,t,n,r,i={}){let a=i.w??1,o=.142*t*a,s=i.swing??.5,c=e.on({pivot:[o,Xm,0],swing:t<0?-s:s,act:i.act}),l=o+.014*t;return c(Z([o,Xm,0],[l,.335,-.012],.04,.034,i.low?4:5,!0),n),c(Um(.04,[l,.318,-.014]),r),c}function ah(e,t,n,r=.35){let i=e.on({pivot:[0,.44,-.02],swing:.04,act:[r,0,0]});return i(Z([.142,Xm,0],[.085,.405,-.13],.04,.034,5,!0),t),i(Um(.04,[.085,.4,-.142]),n),i(Z([-.142,Xm,0],[.025,.425,-.25],.04,.034,5,!0),t),i(Um(.04,[.025,.425,-.262]),n),i}var oh=[.035,.05,.06];function sh(e){let t=new X,r=rh(t,{skin:n.skin,legs:n.blueDark,boots:eh,torso:n.blue,belt:e});r(qp(.122).translate(0,.665,0),n.iron),r(Vm(.182,.182,.02,[0,.668,0],12),n.iron),ih(t,-1,n.blueLight,n.skin);let i=t.on({pivot:[.142,Xm,0],swing:.08,act:[-.35,0,0]});return i(Z([.142,Xm,0],[.168,.4,-.085],.04,.034,5),n.blueLight),i(Q(.037,[.168,.392,-.09],0),n.skin),i(Z([.168,.16,.28],[.168,.88,-.8],.016,.014,5),n.wood),i(Z([.168,.88,-.8],[.168,.965,-.92],.034,.002,4),n.iron),i($(.006,.07,.1,[.168,.84,-.69]),n.plume),t.build(oh)}function ch(e){let t=new X,r=rh(t,{skin:n.skin,legs:n.blueDark,boots:eh,torso:n.blue,belt:e});r(qp(.124).translate(0,.665,0),n.gold),r($(.035,.09,.15,[0,.79,.02]),n.plume),r($(.02,.06,.02,[0,.64,-.112]),n.gold),t.on()(Z([-.09,.36,.13],[-.03,.6,.11],.04,.045,6),$m);let i=ah(t,n.blueLight,n.skin);return i($(.045,.05,.34,[.055,.42,-.2]),n.wood),i($(.34,.03,.04,[.055,.44,-.35]),n.woodDark),i($(.3,.008,.008,[.055,.44,-.32]),16117985),i($(.012,.012,.2,[.055,.456,-.3]),n.gold),t.build(oh)}function lh(e){let t=new X,r=rh(t,{skin:n.skin,legs:n.blueDark,boots:eh,torso:n.blueDark,belt:e});r(Vm(.2,.2,.024,[0,.725,0],12),n.woodDark),r(Vm(.095,.112,.1,[0,.785,0],10),n.woodDark),r(Vm(.114,.114,.025,[0,.745,0],10),n.gold),r($(.014,.13,.04,[.09,.82,.05]),16777215);let i=t.on();i(Vm(.128,.158,.17,[0,.255,0],8),n.blueDark);for(let e of[.41,.47])i($(.022,.022,.012,[0,e,-.122]),n.gold);ih(t,-1,n.blue,n.skin);let a=t.on({pivot:[.142,Xm,0],swing:.05,act:[.6,0,0]});return a(Z([.142,Xm,0],[.16,.47,-.25],.04,.034,5),n.blue),a(Q(.037,[.16,.468,-.262],0),n.skin),a($(.034,.075,.045,[.16,.44,-.27]),n.wood),a($(.028,.028,.17,[.16,.482,-.34]),n.iron),t.build(oh)}function uh(e){let t=new X,r=rh(t,{skin:n.skin,legs:1981023,boots:eh,torso:2903942,belt:e});r(qp(.135).translate(0,.662,0),1981023),r(Vm(.162,.162,.02,[0,.666,0],12),1981023);let i=t.on();for(let e of[-1,1])i($(.05,.06,.03,[.06*e,.36,-.115]),$m);i(Z([-.11,.52,-.04],[.1,.35,-.1],.012,.012,4),$m);let a=ah(t,2903942,n.skin,.28);return a($(.06,.08,.28,[.055,.42,-.2]),2829099),a(K(.066,.066,.05,10).rotateZ(Math.PI/2).translate(.055,.36,-.16),2829099),a(K(.022,.022,.14,6).rotateX(Math.PI/2).translate(.055,.43,-.4),4144966),a($(.045,.06,.12,[.055,.405,-.02]),n.wood),t.build(oh)}function dh(e){let t=new X,r=rh(t,{skin:n.skin,legs:2042436,boots:1120295,torso:n.blue,belt:e});r(qp(.132).translate(0,.664,0),2042436),r($(.17,.042,.05,[0,.69,-.1]),n.eye);let i=t.on();i($(.27,.17,.21,[0,.45,0]),1120295),i($(.18,.2,.08,[0,.46,.13]),3359061);let a=ah(t,n.blue,1120295,.3);return a($(.05,.07,.3,[.055,.42,-.2]),1447446),a($(.026,.026,.2,[.055,.43,-.43]),1447446),a(K(.024,.024,.13,8).rotateX(Math.PI/2).translate(.055,.478,-.2),1447446),a($(.02,.02,.01,[.055,.478,-.27]),6333946),a($(.04,.09,.05,[.055,.355,-.19]),2500134),t.build(oh)}function fh(e){let t=new X,r=rh(t,{skin:14870768,legs:15265525,boots:9741240,torso:16317180,belt:e});r(Q(.13,[0,.655,0],1),16317180),r($(.17,.065,.05,[0,.665,-.108]),2282478);let i=t.on();for(let e of[-1,1])i(Q(.078,[.15*e,.52,0],0),n.blue);i($(.06,.04,.02,[0,.47,-.122]),2282478),i($(.16,.18,.08,[0,.46,.13]),9741240);let a=ah(t,14870768,9741240,.3);return a($(.06,.08,.34,[.055,.42,-.2]),14870768),a($(.036,.036,.18,[.055,.44,-.45]),4190463),a($(.02,.05,.08,[.09,.43,-.18]),2282478),t.build(oh)}function ph(e){let t=new X;for(let e of[-1,1]){let n=.1*e,r=t.on({pivot:[n,.38,0],swing:e<0?.38:-.38});r($(.1,.17,.13,[n,.29,0]),3621201),r($(.09,.15,.12,[n,.15,-.01]),4937059),r($(.13,.05,.19,[n,.075,-.02]),2042167),r(Q(.04,[n,.22,-.065],0),13863935)}let r=t.on();r($(.24,.08,.16,[0,.41,0]),2042167),r($(.36,.26,.26,[0,.57,0]),n.blue),r($(.15,.1,.03,[0,.59,-.14]),13863935),r($(.3,.05,.27,[0,.715,0]),e);let i=t.on({pivot:[0,.74,0],swing:.04});i($(.19,.13,.17,[0,.8,0]),2042167),i($(.15,.04,.03,[0,.81,-.09]),13863935),i($(.012,.14,.012,[-.07,.91,.04]),10265519);let a=t.on({pivot:[-.22,.66,0],swing:-.3});a($(.08,.22,.09,[-.24,.54,0]),3621201),a($(.1,.07,.1,[-.24,.41,-.01]),2042167);let o=t.on({pivot:[.22,.7,0],swing:.03,act:[.3,0,0]});return o($(.1,.1,.14,[.23,.7,0]),3621201),o(K(.058,.058,.38,10).rotateX(Math.PI/2).translate(.23,.71,-.17),4937059),o(Q(.062,[.23,.71,-.37],1),13863935),t.build([.025,.03,.02],.05)}function mh(e){let t=new X,r=15067115,i=3359061,a=1976635,o=16735631;for(let n of[-1,1]){let o=.095*n,s=t.on({pivot:[o,.42,0],swing:n<0?.34:-.34});s(Z([o,.42,0],[o,.25,-.025],.058,.05,6,!0),i),s(Q(.06,[o,.25,-.045],0),r),s($(.1,.18,.12,[o,.14,-.005]),r),s($(.104,.03,.124,[o,.21,-.005]),e),s($(.13,.05,.21,[o,.025,-.03]),a)}let s=t.on();s($(.22,.08,.15,[0,.45,0]),i),s(Vm(.15,.12,.13,[0,.53,0],8),a),s($(.3,.2,.22,[0,.66,0]),n.blue),s($(.22,.12,.035,[0,.67,-.12]),r),s(Q(.038,[0,.66,-.14],0),o),s($(.2,.2,.1,[0,.68,.15]),n.blue),s(K(.065,.065,.03,10).rotateX(Math.PI/2).translate(0,.69,.205),a),s(Q(.048,[0,.69,.215],1),o);let c=t.on({pivot:[0,.76,0],swing:.03});c($(.13,.1,.13,[0,.81,-.02]),r),c($(.11,.028,.02,[0,.815,-.09]),o),c($(.024,.05,.1,[0,.875,-.01]),e);for(let e of[-1,1]){let n=t.on({pivot:[.2*e,.7,0],swing:e<0?-.28:.28});n(Z([.2*e,.7,0],[.215*e,.5,-.02],.045,.04,5,!0),i),n($(.085,.13,.1,[.215*e,.47,-.025]),r),n(Um(.045,[.215*e,.39,-.03]),a)}let l=t.on({pivot:[0,.76,0],swing:.02,act:[.22,0,0]});for(let e of[-1,1]){let t=.2*e;l(q(.1,1).scale(1,.7,1.05).translate(t,.75,0),r),l($(.07,.065,.15,[t,.8,-.04]),r),l(K(.024,.024,.3,8).rotateX(Math.PI/2).translate(t,.8,-.24),6583435),l($(.012,.012,.28,[t,.827,-.22]),o),l(K(.034,.03,.04,8).rotateX(Math.PI/2).translate(t,.8,-.39),o)}return t.build([.03,.025,.02],0)}function hh(e){let t=new X,r=1976635,i=3462041,a=t.on();a(q(.125,1).scale(1,.62,1.2).translate(0,.44,0),n.blue),a(q(.11,1).scale(1,.55,1.1).translate(0,.4,0),r),a(Km(.127,.127,.026,[0,.425,0],12).scale(1,1,1.2),e),a(Q(.05,[0,.425,-.135],1),i),a(K(.032,.032,.012,8).rotateX(Math.PI/2).translate(0,.43,.15),7268279);for(let[e,n]of[[-1,-1],[1,-1],[-1,1],[1,1]]){let i=.2*e,o=.19*n;a(Z([.06*e,.43,.06*n],[i,.45,o],.016,.014,4,!0),r),a(new jc(.085,.015,5,14).rotateX(Math.PI/2).translate(i,.455,o),14870768),a(Vm(.018,.018,.03,[i,.45,o],6),r),t.on({kind:3,pivot:[i,.455,o],swing:10*e*n})($(.15,.007,.024,[i,.458,o]),r)}let o=t.on({pivot:[0,.35,0],act:[.3,0,0]});for(let e of[-1,1])o(K(.015,.015,.15,6).rotateX(Math.PI/2).translate(.03*e,.34,-.09),r),o(Q(.018,[.03*e,.34,-.17],0),i);return t.build([0,.05,.1])}function gh(e){let t=new X,r=t.on({pivot:[0,.6,0],swing:.07});r(K(.085,.21,.46,12).translate(0,.37,0),16317180),r(Vm(.215,.215,.03,[0,.145,0],12),e);let i=t.on();i(Vm(.12,.09,.15,[0,.645,0],10),n.blueLight),i(Vm(.125,.125,.025,[0,.575,0],10),16436245);let a=t.on({pivot:[0,.72,0],swing:.04});a(Q(.1,[0,.8,0],1),16708551);for(let e of[-1,1])a($(.02,.03,.01,[.034*e,.81,-.095]),2450411);t.on({kind:3,pivot:[0,.95,.03],swing:1.2})(new jc(.13,.02,5,18).rotateX(Math.PI/2.4).translate(0,.95,.03),16436245);for(let e of[-1,1])t.on({kind:2,pivot:[.06*e,.68,.09],swing:.3*e})(qm([[.06*e,.7,.09],[.36*e,.86,.16],[.42*e,.6,.2],[.28*e,.44,.16],[.08*e,.56,.1]]),16775126);let o=t.on({pivot:[-.13,.69,0],swing:-.25});o(Z([-.13,.69,0],[-.15,.52,-.03],.045,.035,5),16317180),o(Q(.034,[-.15,.505,-.035],0),16708551);let s=t.on({pivot:[.13,.69,0],swing:.06,act:[.45,0,0]});return s(Z([.13,.69,0],[.2,.54,-.06],.045,.035,5),16317180),s(Q(.034,[.2,.53,-.062],0),16708551),s(Z([.2,.1,-.06],[.2,1,-.06],.016,.016,5),16639626),s(new Dc(.075,0).translate(.2,1.06,-.06),16774054),t.build([0,.025,0],.06)}function _h(e){let t=new X,n=t.on({kind:0});n(Vm(.1,.12,.03,[0,.045,0],10),3359061),n(Vm(.028,.045,.3,[0,.2,0],6),4674921),n(Vm(.075,.035,.035,[0,.36,0],8),e),t.on()(Q(.13,[0,.6,0],1),1973067);let r=t.on({kind:3,pivot:[0,.6,0],swing:2.4});r(new jc(.19,.03,4,24).scale(1,1,.3).rotateX(Math.PI/2).translate(0,.6,0),9133302),r(new jc(.145,.016,4,20).scale(1,1,.4).rotateX(Math.PI/2).translate(0,.6,0),15591934),t.on({kind:3,pivot:[0,.6,0],swing:-3.1})(new jc(.27,.011,5,26).rotateZ(Math.PI/3).rotateX(Math.PI/2).translate(0,.6,0),16317180);let i=t.on({kind:3,pivot:[0,.6,0],swing:1.4});for(let e=0;e<3;e++){let t=e/3*Math.PI*2;i(Q(.03,[Math.cos(t)*.32,.6+.08*Math.sin(2*t),Math.sin(t)*.32],0),12891645)}return t.build([0,0,0],.03)}function vh(e){let t=new X,n=3003583,r=1013358,i=10090212;for(let e of[-1,1]){let n=.1*e,i=t.on({pivot:[n,.36,0],swing:e<0?.36:-.36});i(new Dc(.1,0).scale(1,1.6,1).translate(n,.2,0),r),i($(.14,.05,.2,[n,.03,-.03]),r)}let a=t.on();a(new Ec(.24,0).scale(1,1.05,.8).translate(0,.58,0),n),a(Q(.075,[0,.6,-.17],1),15531775),a($(.3,.04,.2,[0,.4,0]),e);for(let[e,t,r,o]of[[.12,.78,.1,.24],[-.1,.8,.12,.2],[.02,.84,.16,.28],[.2,.66,.12,.16],[-.2,.68,.1,.18]])a(Jm([e,t-.06,r],[e*.6,1,.5],o,.055),e>0?i:n);let o=t.on({pivot:[0,.78,-.02],swing:.04});o(new Ec(.1,0).translate(0,.86,-.04),i);for(let e of[-1,1])o(Wm(.035,.022,[.04*e,.87,-.135]),16777215);let s=t.on({pivot:[-.25,.68,0],swing:-.3});s(Z([-.25,.68,0],[-.3,.46,-.04],.05,.045,5),r),s(new Dc(.085,0).translate(-.31,.4,-.05),n);let c=t.on({pivot:[.25,.68,0],swing:.05,act:[.35,0,0]});return c(Z([.25,.68,0],[.29,.56,-.2],.05,.045,5),r),c(new Dc(.06,0).scale(1,1,2.6).translate(.29,.56,-.3),i),t.build([.03,.03,.02],.02)}function yh(e){let t=new X,n=16347926,r=14427686,i=16436245,a=t.on();a(q(.13,1).scale(.9,.85,1.45).translate(0,.45,0),n),a(q(.1,1).scale(.8,.7,1.2).translate(0,.41,-.03),i),a(Km(.12,.12,.025,[0,.45,.02],10),e);let o=t.on({pivot:[0,.5,-.14],swing:.06});o(Q(.08,[0,.56,-.2],1),n),o(Y(.035,.11,4).rotateX(-Math.PI/2).translate(0,.55,-.31),i);for(let e of[-1,1])o(Wm(.022,.022,[.035*e,.58,-.27]),2042167);for(let e=0;e<3;e++)o(Y(.02,.12-e*.02,4).rotateX(-.6+e*.25).translate(0,.63+e*.01,-.17+e*.05),e===1?i:r);for(let e of[-1,1]){let r=t.on({kind:2,pivot:[.08*e,.5,0],swing:.55*e});r(qm([[.08*e,.5,-.06],[.42*e,.68,-.02],[.5*e,.56,.1],[.36*e,.46,.14],[.1*e,.44,.1]]),n),r(qm([[.1*e,.51,-.03],[.3*e,.6,0],[.34*e,.53,.08],[.12*e,.47,.07]]),i)}let s=t.on({kind:4,pivot:[0,.44,.18],swing:.35});for(let[e,t]of[[-.06,r],[0,i],[.06,r]])s(qm([[e*.4,.45,.16],[e-.04,.4,.55],[e,.36,.7],[e+.04,.41,.55]]),t);return t.build([0,.05,.1])}function bh(e){let t=new X,n=15381256,r=rh(t,{skin:16639626,legs:n,boots:10576391,torso:16710083,belt:e});r(Q(.125,[0,.655,0],1),n),r($(.15,.03,.04,[0,.665,-.112]),4333574),r($(.03,.12,.04,[0,.62,-.112]),4333574),r(Y(.03,.14,4).translate(0,.83,0),16638023);let i=t.on();for(let e of[-1,1])i(Q(.075,[.15*e,.53,0],0),n);i(K(.2,.2,.025,14).rotateX(Math.PI/2).translate(0,.62,.13),16638023),i(K(.12,.12,.03,12).rotateX(Math.PI/2).translate(0,.62,.12),16775126);for(let e=0;e<8;e++){let t=e/8*Math.PI*2;i(Jm([Math.cos(t)*.19,.62+Math.sin(t)*.19,.13],[Math.cos(t),Math.sin(t),0],.1,.035),16436245)}i(qm([[-.12,.52,.09],[.12,.52,.09],[.16,.12,.2],[-.16,.12,.2]]),16777215),ih(t,-1,n,10576391);let a=ah(t,n,10576391,.25);return a(Z([.055,.42,.12],[.055,.46,-.62],.018,.014,6),16638023),a(new Dc(.045,0).scale(1,1,2.2).translate(.055,.46,-.68),16775126),t.build(oh)}function xh(e){let t=new X,n=1981066,r=t.on();r(q(.16,1).scale(1.2,.32,1.25).translate(0,.45,0),2450411),r(q(.13,1).scale(1.1,.25,1.1).translate(0,.42,.01),12573694),r(Km(.12,.12,.02,[0,.47,.02],10).scale(1.15,1,1.2),e);for(let e of[-1,1]){r(Q(.025,[.06*e,.47,-.18],0),16777215),r(Y(.025,.09,4).rotateX(-Math.PI/2).translate(.08*e,.44,-.24),n);let i=t.on({kind:2,pivot:[.14*e,.45,0],swing:.45*e});i(qm([[.14*e,.46,-.12],[.5*e,.47,.04],[.16*e,.44,.16]]),n),i(Q(.022,[.3*e,.475,0],0),8246268),i(Q(.018,[.4*e,.475,.03],0),8246268)}let i=t.on({kind:4,pivot:[0,.44,.18],swing:.5});return i(Z([0,.44,.18],[0,.42,.62],.014,.006,4),n),i(Q(.025,[0,.42,.63],0),8246268),t.build([0,.05,.1])}function Sh(e){let t=new X,r=13358561,i=1981066,a=t.on({pivot:[0,.6,0],swing:.06});a(K(.09,.22,.5,12).translate(0,.33,0),r),a(Vm(.225,.225,.035,[0,.1,0],12),i),a(Vm(.1,.1,.03,[0,.42,0],10),e),t.on()(Vm(.12,.09,.16,[0,.64,0],10),i);let o=t.on({pivot:[0,.72,0],swing:.04});o(Q(.095,[0,.79,0],1),n.skin),o(qp(.125).scale(1,1.2,1).translate(0,.8,.02),i),o(Y(.05,.16,6).rotateX(.5).translate(0,.95,.08),i);for(let e of[-1,1])o(Wm(.02,.025,[.033*e,.8,-.093]),9684477);o(Y(.06,.13,6).rotateX(Math.PI).translate(0,.7,-.08),16317180);for(let[e,n,r]of[[.3,.55,1.6],[.26,.7,-2.2]]){let i=t.on({kind:3,pivot:[0,n,0],swing:r});i(new jc(e,.014,4,28).rotateX(Math.PI/2.2).translate(0,n,0),16436245);for(let t=0;t<4;t++){let r=t/4*Math.PI*2;i($(.035,.035,.035,[Math.cos(r)*e,n,Math.sin(r)*e]),16708551)}}let s=t.on({pivot:[.13,.66,0],swing:.06,act:[.45,0,0]});return s(Z([.13,.66,0],[.19,.52,-.06],.04,.032,5),r),s(Z([.2,.08,-.06],[.2,.92,-.06],.015,.015,5),7877903),s(Y(.05,.07,6).rotateX(Math.PI).translate(.2,.96,-.06),12248829),s(Y(.05,.07,6).translate(.2,1.03,-.06),12248829),s(Vm(.055,.055,.015,[.2,1.07,-.06],8),16436245),t.build([0,.025,0],.04)}function Ch(e){let t=new X,n=4143670,r=2696484,i=16742938;for(let e of[-1,1]){let a=.12*e,o=t.on({pivot:[a,.38,0],swing:e<0?.3:-.3});o($(.14,.34,.16,[a,.2,0]),r),o($(.145,.03,.03,[a,.25,-.08]),i),o($(.17,.06,.22,[a,.03,-.03]),n)}let a=t.on();a($(.46,.36,.32,[0,.58,0]),n),a(Q(.09,[0,.6,-.15],1),16757575),a($(.04,.26,.02,[-.12,.6,-.162]),i),a($(.2,.03,.02,[.08,.68,-.162]),i),a($(.34,.05,.3,[0,.39,0]),e),a($(.05,.28,.02,[.07,.6,.162]),i),a($(.22,.04,.02,[-.05,.66,.162]),i),a($(.04,.16,.02,[-.14,.52,.162]),i),a(Q(.06,[0,.72,.15],0),16757575);for(let e of[-1,1])a(Hm(.13,[.26*e,.75,0]),r),a($(.02,.1,.02,[.3*e,.78,-.11]),i);let o=t.on({pivot:[0,.76,0],swing:.03});o(Hm(.11,[0,.84,-.02]),n);for(let e of[-1,1])o(Wm(.04,.025,[.045*e,.86,-.11]),i);let s=t.on({pivot:[-.28,.66,0],swing:-.25});s($(.1,.24,.12,[-.3,.52,0]),r),s(Hm(.1,[-.3,.36,-.02]),n);let c=t.on({pivot:[.28,.66,0],swing:.04,act:[.4,0,0]});return c($(.1,.22,.12,[.3,.55,-.04]),r),c(Hm(.09,[.3,.42,-.1]),n),c(Q(.055,[.3,.44,-.2],1),i),t.build([.035,.025,.02],0)}function wh(e){let t=new X,n=6514417,r=10859772,i=t.on({kind:4,pivot:[0,.4,0],swing:.4});i(Y(.13,.22,8).rotateX(Math.PI).translate(0,.33,.02),n),i(Y(.08,.18,7).rotateX(Math.PI-.5).translate(0,.2,.08),r),i(Y(.045,.14,6).rotateX(Math.PI-1.1).translate(0,.12,.16),14739455);let a=t.on();a(Vm(.13,.1,.18,[0,.52,0],10),n),a(Vm(.135,.135,.035,[0,.44,0],10),e),a(Vm(.08,.13,.08,[0,.43,0],10),16436245);let o=t.on({pivot:[0,.6,0],swing:.05});o(Q(.095,[0,.69,0],1),n),o(Vm(.11,.1,.09,[0,.78,0],10),16436245),o(Q(.03,[0,.79,-.1],0),15680580),o(Y(.03,.09,5).translate(0,.86,0),16436245);for(let e of[-1,1])o(Y(.025,.07,4).rotateZ(-1.2*e).translate(.1*e,.7,0),n),o(Wm(.026,.02,[.033*e,.7,-.093]),16777215);let s=t.on({pivot:[0,.56,-.02],swing:.04,act:[.35,0,0]});for(let e of[-1,1])s(Z([.13*e,.57,0],[.08*e,.53,-.2],.04,.034,5),n),s(Vm(.04,.04,.03,[.08*e,.53,-.18],6).rotateX(0),16436245),s(Q(.035,[.07*e,.53,-.23],0),r);return s(Q(.04,[0,.54,-.27],1),14739455),t.build([0,.05,.1])}function Th(e){let t=new X,n=t.on();for(let[e,t,r,i,a]of[[0,.47,0,.17,14239471],[.15,.43,.04,.12,11032055],[-.15,.44,.03,.12,11032055],[.07,.58,.05,.11,15772668],[-.08,.57,.06,.1,15235577],[0,.4,.13,.11,8266446]])n(Q(i,[e,t,r],1),a);n(Q(.08,[0,.48,-.12],1),16643327),n(Km(.16,.16,.02,[0,.42,0],12),e);for(let e of[-1,1])n(Wm(.03,.04,[.06*e,.53,-.16]),3868516);let r=t.on({kind:3,pivot:[0,.48,0],swing:1.8});for(let e=0;e<4;e++){let t=e/4*Math.PI*2;r(new Dc(.03,0).translate(Math.cos(t)*.3,.48+.07*Math.sin(3*t),Math.sin(t)*.3),16777215)}return t.build([0,.05,.1])}function Eh(e){let t=new X,n=1973067,r=3223169,i=rh(t,{skin:r,legs:n,boots:985646,torso:r,belt:e,eyes:14739455,wide:1.2});for(let e=0;e<5;e++){let t=e/5*Math.PI-Math.PI;i(Jm([Math.cos(t)*.07,.74,Math.sin(t)*.07+.01],[Math.cos(t)*.4,1,Math.sin(t)*.4],.12,.02),16638023)}let a=t.on();for(let[e,t,n]of[[.06,.47,-.12],[-.08,.41,-.11],[.1,.38,-.09],[-.03,.5,-.12],[.13,.5,.06],[-.12,.46,.08]])a(new Dc(.018,0).translate(e,t,n),16777215);for(let e of[-1,1])a(Q(.085,[.17*e,.53,0],0),n);ih(t,-1,r,n,{w:1.2});let o=t.on({pivot:[.17,.505,0],swing:.05,act:[.6,0,0]});return o(Z([.17,.505,0],[.19,.47,-.24],.045,.038,5),r),o(Q(.04,[.19,.465,-.26],0),n),o(Q(.07,[.19,.5,-.3],1),14739455),t.build(oh)}function Dh(e){let t=new X,n=t.on();n(Q(.2,[0,.5,0],2),16776171),n(K(.11,.11,.03,16).rotateX(Math.PI/2).translate(0,.5,-.19),3718648),n(K(.05,.05,.035,12).rotateX(Math.PI/2).translate(0,.5,-.2),988970),n(Q(.02,[.03,.53,-.215],0),16777215),n(Km(.205,.205,.025,[0,.36,0],14),e);for(let e=0;e<10;e++){let t=e/10*Math.PI*2;n(Jm([Math.cos(t)*.19,.5+Math.sin(t)*.19,.02],[Math.cos(t),Math.sin(t),0],.13,.04),e%2?16436245:16639626)}n(K(.08,.08,.02,12).rotateX(Math.PI/2).translate(0,.5,.2),16436245),t.on({kind:3,pivot:[0,.5,0],swing:1.4})(new jc(.3,.018,5,30).rotateX(Math.PI/2.3).translate(0,.5,0),16436245),t.on({kind:3,pivot:[0,.5,0],swing:-2.1})(new jc(.36,.012,5,30).rotateZ(Math.PI/4).rotateX(Math.PI/2).translate(0,.5,0),16639626);let r=t.on({kind:3,pivot:[0,.5,0],swing:1}),i=[15680580,16347926,16436245,2278750,3900150,11032055];return i.forEach((e,t)=>{let n=t/i.length*Math.PI*2;r(new Dc(.035,0).scale(1,1.6,1).translate(Math.cos(n)*.44,.5+.06*Math.sin(2*n),Math.sin(n)*.44),e)}),t.build([0,.05,.1])}var Oh=[sh,ch,lh,uh,dh,fh,ph,mh,hh,gh,_h,vh,yh,bh,xh,Sh,Ch,wh,Th,Eh,Dh];function kh(e,t){return Oh[Math.min(e,Oh.length-1)](t)}function Ah(e){for(let t of[-1,1])e(Y(.032,.14,4).rotateZ(-t*1.25).translate(.12*t,.645,.005),n.goblin)}function jh(){let e=new X,t=rh(e,{skin:n.goblin,legs:8330525,boots:4139540,torso:n.red,belt:$m,eyes:nh,low:!0,stride:.7});t(Gm(.12).translate(0,.665,0),n.iron);for(let e of[-1,1])t(Y(.025,.1,4).rotateZ(-e*.6).translate(.07*e,.77,0),n.bone);Ah(t),ih(e,-1,n.goblin,n.goblin,{low:!0,swing:.55});let r=ih(e,1,n.goblin,n.goblin,{low:!0,swing:.4,act:[2.3,0,0]});return r($(.024,.055,.3,[.156,.33,-.16]),13358561),r($(.03,.03,.08,[.156,.318,-.03]),n.wood),e.build([.04,.1,.12])}function Mh(){let e=new X,t=rh(e,{skin:n.goblin,legs:n.maroon,boots:4139540,torso:n.red,belt:4139540,eyes:nh,wide:1.4,stride:.5}),r=e.on();for(let e of[-1,1])r(Z([.15*e,.525,-.085],[0,.44,-.178],.022,.022,4),4139540),r(Z([0,.44,-.178],[-.14*e,.355,-.115],.022,.022,4),4139540);r(Q(.038,[0,.44,-.182],0),n.iron),r(qp(.095).scale(1.15,.7,1.05).translate(-.21,.525,0),n.iron),r(Y(.022,.08,4).translate(-.21,.58,0),n.bone),r(Q(.05,[.17,.33,-.15],0),n.bone),t(qp(.126).translate(0,.665,0),n.iron),t(Y(.04,.17,5).translate(0,.83,0),n.bone);for(let e of[-1,1])t(Y(.018,.07,4).translate(.045*e,.6,-.1),n.bone);ih(e,-1,n.goblin,n.goblin,{w:1.4,swing:.4});let i=ih(e,1,n.goblin,n.goblin,{w:1.4,swing:.3,act:[2.2,0,0]});i(Z([.214,.3,.02],[.23,.62,-.32],.028,.05,6),n.wood),i(Q(.088,[.232,.655,-.355],0),n.woodDark);for(let[e,t,r]of[[1,.2,0],[-1,.2,0],[0,1,-.3],[0,.3,-1]])i(Jm([.232,.655,-.355],[e,t,r],.13,.025),n.iron);return e.build([.035,.07,.08])}function Nh(){let e=new X,t=rh(e,{skin:n.goblin,legs:4153874,boots:4139540,torso:5078031,belt:$m,eyes:nh,low:!0});t(Y(.15,.27,7).translate(0,.72,.03),3560212),Ah(t);let r=e.on();r($(.22,.3,.02,[0,.4,.12]),3560212),r(Z([-.08,.34,.13],[-.02,.58,.11],.035,.04,6),$m);let i=e.on({pivot:[-.142,Xm,0],swing:.08});i(Z([-.142,Xm,0],[-.07,.47,-.24],.038,.033,4),3560212),i(Q(.036,[-.068,.468,-.25],0),n.goblin);let a=.21;return i(new jc(a,.014,4,12,Math.PI).rotateZ(-Math.PI/2).rotateY(Math.PI/2).translate(-.068,.468,-.04000000000000001),n.wood),i($(.006,2*a,.006,[-.068,.468,-.04000000000000001]),16117985),ih(e,1,3560212,n.goblin,{low:!0,swing:.3,act:[-.9,0,0]}),e.build([.035,.07,.06])}function Ph(){let e=new X,t=rh(e,{skin:n.goblin,legs:n.maroon,boots:4139540,torso:n.red,belt:$m,eyes:nh,wide:1.2,stride:.45});t(qp(.126).translate(0,.665,0),n.iron),t($(.02,.08,.16,[0,.79,.01]),n.redDark),Ah(t);let r=e.on({pivot:[-.17,Xm,0],swing:.05});r(Z([-.17,Xm,0],[-.08,.42,-.2],.042,.036,5),n.maroon),r(Q(.038,[-.075,.415,-.215],0),n.goblin);let i=e.on({pivot:[.17,Xm,0],swing:.12,act:[.7,0,0]});return i(Z([.17,Xm,0],[.19,.34,-.02],.042,.036,5),n.maroon),i(Q(.038,[.19,.325,-.025],0),n.goblin),i(Z([.19,.06,.05],[.19,1.02,-.12],.016,.014,5),n.wood),i(Z([.19,1.02,-.12],[.19,1.15,-.145],.035,.002,4),n.iron),e.build([.03,.06,.05])}function Fh(){let e=new X,t=e.on();t($(.62,.7,.07,[0,.45,0]),n.chestWood);for(let e of[-.155,.155])t($(.012,.66,.074,[e,.45,0]),n.chestDark);return t($(.66,.06,.09,[0,.79,0]),n.iron),t($(.66,.06,.09,[0,.11,0]),n.iron),t(Q(.075,[0,.46,-.05],1),n.gold),e.build([.03,.06,.05])}function Ih(){let e=new X,t=rh(e,{skin:n.goblin,legs:n.red,boots:4139540,torso:n.redLight,belt:$m,eyes:nh,low:!0,stride:.85});t($(.2,.035,.05,[0,.67,-.085]),2042167);for(let e of[-1,1])t(Wm(.05,.04,[.042*e,.67,-.112]),9684477);Ah(t);let r=e.on({pivot:[0,Xm,0],swing:.06});for(let e of[-1,1])r(Z([.142*e,Xm,0],[.1*e,.78,-.02],.038,.033,4),n.goblin);r(K(.13,.13,.27,8).rotateZ(Math.PI/2).translate(0,.87,-.02),12131356);for(let e of[-.085,.085])r(K(.134,.134,.03,8).rotateZ(Math.PI/2).translate(e,.87,-.02),2042167);return r($(.012,.1,.012,[0,1.03,-.02]),2042167),r(Q(.045,[0,1.09,-.02],0),16638023),e.build([.05,.12,.2])}function Lh(){let e=new X,t=n.bone;for(let n of[-1,1]){let r=.06*n,i=e.on({pivot:[r,Ym,0],swing:n<0?.7:-.7});i(Z([r,Ym,0],[r,.1,.005],.022,.02,4),t),i($(.05,.03,.1,[r,.065,-.02]),t)}let r=e.on();r($(.15,.05,.08,[0,.31,0]),t),r(Z([0,.31,.01],[0,.55,.01],.02,.02,4),t);for(let e=0;e<2;e++)r(new jc(.082-e*.014,.013,3,8).rotateX(Math.PI/2).translate(0,.41+e*.07,0),t);r($(.24,.03,.05,[0,.52,0]),t);let i=e.on({pivot:[0,.55,0],swing:.12});i(Q(.1,[0,.64,0],0),t),i($(.11,.04,.09,[0,.565,-.03]),t);for(let e of[-1,1])i($(.03,.03,.02,[.035*e,.65,-.09]),4906624);let a=e.on({pivot:[-.12,.52,0],swing:-.6});a(Z([-.12,.52,0],[-.13,.33,-.01],.018,.016,4),t),a(Q(.026,[-.13,.32,-.012],0),t);let o=e.on({pivot:[.12,.52,0],swing:.5,act:[2.2,0,0]});return o(Z([.12,.52,0],[.13,.33,-.01],.018,.016,4),t),o(Q(.026,[.13,.32,-.012],0),t),o($(.022,.04,.3,[.13,.33,-.17]),10105874),o($(.09,.015,.015,[.13,.33,-.03]),5722958),e.build([.03,.14,.06],.05)}function Rh(){let e=new X,t=7041664,r=4937059,i=e.on();i(q(.16,1).scale(.75,.68,1.55).translate(0,.33,.02),t),i(q(.12,1).scale(.7,.55,1.2).translate(0,.29,.02),10265519);for(let[t,n,i]of[[-.09,-.16,1],[.09,-.16,-1],[-.09,.2,-1],[.09,.2,1]]){let a=e.on({pivot:[t,.3,n],swing:.75*i});a(Z([t,.3,n],[t,.06,n-.02],.035,.028,4),r),a($(.05,.03,.07,[t,.03,n-.03]),3621201)}let a=e.on({pivot:[0,.38,-.2],swing:.12});a(Q(.085,[0,.42,-.3],0),t),a(Y(.05,.12,5).rotateX(-Math.PI/2).translate(0,.39,-.42),r),a(Q(.02,[0,.4,-.48],0),1120295);for(let e of[-1,1])a(Y(.03,.08,4).translate(.05*e,.52,-.28),r),a(Wm(.02,.018,[.035*e,.45,-.375]),nh);e.on({kind:4,pivot:[0,.36,.24],swing:.4})(Z([0,.36,.24],[0,.42,.42],.035,.012,4),t);let o=e.on({pivot:[0,.42,0],swing:.05,act:[.4,0,0]});o(Vm(.075,.065,.16,[0,.52,.02],6),n.red),o(Q(.075,[0,.66,0],0),n.goblin),o(Gm(.085).translate(0,.68,0),n.iron);for(let e of[-1,1])o(Y(.022,.09,4).rotateZ(-e*1.25).translate(.085*e,.665,0),n.goblin);return o(Z([.1,.5,.05],[.12,.62,-.45],.012,.01,4),n.wood),o(Z([.12,.62,-.45],[.125,.64,-.52],.025,.002,4),n.iron),e.build([.06,.05,.12])}function zh(){let e=new X,t=e.on({pivot:[0,.5,0],swing:.06});t(K(.09,.19,.42,9).translate(0,.28,0),7421714),t(Vm(.195,.195,.03,[0,.085,0],9),5078031);let r=Bh(e,n.goblin);r($(.17,.12,.04,[0,.655,-.1]),16708551);for(let e of[-1,1])r(Wm(.035,.025,[.04*e,.665,-.122]),1467700);for(let e=0;e<5;e++){let t=-.9+e*.45;r(Y(.025,.16,4).rotateZ(-t*.6).translate(Math.sin(t)*.09,.8,.02),e%2?15680580:16436245)}e.on()(new jc(.1,.018,4,10).rotateX(Math.PI/2).translate(0,.53,-.01),n.bone),ih(e,-1,7421714,n.goblin,{low:!0,swing:.3});let i=e.on({pivot:[.142,Xm,0],swing:.06,act:[-1.1,0,0]});return i(Z([.142,Xm,0],[.16,.37,-.06],.038,.032,4),7421714),i(Q(.036,[.16,.36,-.065],0),n.goblin),i(Z([.16,.06,-.06],[.16,.95,-.06],.016,.016,5),n.woodDark),i(Q(.07,[.16,1,-.06],1),4906624),i(new jc(.075,.012,4,10).translate(.16,1,-.06),n.bone),e.build([.03,.06,.05])}function Bh(e,t){e.on()(Vm(.11,.1,.16,[0,.46,0],8),7421714);let n=e.on({pivot:[0,Zm,0],swing:.06});return n(Km(.042,.047,.05,[0,.545,0],5),t),n(Q(.1,[0,Qm,0],1),t),Ah(n),n}function Vh(e){return()=>{let t=new X,n=t.on();n(q(.27,2).scale(1,.72,1).translate(0,.2,0),6660877),n(q(.2,1).scale(1,.55,1).translate(0,.27,.02),10741301);for(let[e,t,r,i]of[[.08,.18,.12,.04],[-.1,.12,.08,.03],[.02,.1,-.14,.025]])n(Q(i,[e,t,r],0),14285213);for(let e of[-1,1])n(Q(.055,[.08*e,.3,-.2],1),16777215),n(Q(.028,[.08*e,.3,-.245],0),1332013);let r=t.build([.07,.03,0]);r.geo.scale(e,e,e);let i=r.geo.getAttribute(`aPivot`);for(let t=0;t<i.count;t++)i.setXYZ(t,i.getX(t)*e,i.getY(t)*e,i.getZ(t)*e);return r}}function Hh(){let e=new X,t=rh(e,{skin:n.goblin,legs:7877903,boots:4139540,torso:10576391,belt:$m,eyes:nh,low:!0});t(Y(.13,.1,7).translate(0,.73,0),7877903),Ah(t),e.on()(Q(.06,[-.1,.33,.1],0),9584654),ih(e,-1,10576391,n.goblin,{low:!0,swing:.4});let r=e.on({pivot:[.142,Xm,0],swing:.1,act:[-2.4,0,0]});return r(Z([.142,Xm,0],[.16,.34,-.02],.038,.032,4),10576391),r(Q(.036,[.16,.33,-.025],0),n.goblin),r(Z([.16,.33,-.025],[.17,.12,-.08],.006,.006,3),16117985),r(Q(.035,[.17,.11,-.085],0),n.stone),e.build([.035,.07,.06])}function Uh(){let e=new X,t=7048739,r=5073690;for(let n of[-1,1]){let i=.11*n,a=e.on({pivot:[i,.36,0],swing:n<0?.4:-.4});a(Z([i,.36,0],[i*1.1,.07,.01],.09,.075,6),t),a($(.14,.06,.2,[i*1.1,.03,-.04]),r)}let i=e.on();i(q(.22,1).scale(1.05,.95,.9).translate(0,.52,.04),t),i(q(.16,1).scale(1,.8,.8).translate(0,.46,-.1),9416266),i($(.32,.07,.24,[0,.36,.02]),5977112);for(let[e,t,n]of[[.1,.62,-.14],[-.12,.56,-.15],[.16,.48,.12]])i(Q(.025,[e,t,n],0),r);for(let e=0;e<5;e++)i(Y(.04,.12,4).rotateX(.5).translate(-.12+e*.06,.72,.08),3560212);let a=e.on({pivot:[0,.66,-.08],swing:.08});a(Q(.1,[0,.7,-.17],1),t),a(Y(.035,.08,4).rotateX(-Math.PI/2).translate(0,.68,-.29),r);for(let e of[-1,1])a(Wm(.025,.02,[.04*e,.73,-.265]),16638023),a(Y(.016,.05,4).translate(.05*e,.6,-.24),n.bone);ih(e,-1,t,r,{w:1.6,swing:.45});let o=e.on({pivot:[.23,.58,0],swing:.3,act:[2,0,0]});return o(Z([.23,.58,0],[.26,.28,-.04],.05,.045,5),t),o(Q(.05,[.26,.26,-.045],0),r),o(Z([.26,.24,.05],[.28,.62,-.38],.04,.075,6),7877903),e.build([.04,.05,.1])}function Wh(){let e=new X,t=4144966,n=e.on();n(q(.09,1).scale(.9,1,1.1).translate(0,.35,0),t),n(Q(.07,[0,.42,-.07],1),5395035);for(let r of[-1,1])n(Y(.03,.09,4).translate(.04*r,.5,-.05),t),n(Wm(.02,.018,[.025*r,.43,-.135]),15680580),e.on({kind:2,pivot:[.06*r,.38,0],swing:.9*r})(qm([[.06*r,.4,-.04],[.3*r,.46,0],[.38*r,.33,.04],[.27*r,.3,.06],[.18*r,.33,.04],[.08*r,.32,.04]]),5774471);return e.build([.03,0,0])}function Gh(){let e=new X,t=14739455,n=e.on({pivot:[0,.5,0],swing:.08});n(K(.11,.2,.42,9).translate(0,.42,0),t),n(qp(.112).translate(0,.63,0),t);for(let e=0;e<6;e++){let t=e/6*Math.PI*2;n(Y(.045,.1,4).rotateX(Math.PI).translate(Math.cos(t)*.15,.17,Math.sin(t)*.15),13095678)}for(let e of[-1,1])n(Wm(.04,.055,[.045*e,.66,-.108]),1973067);n(Wm(.05,.035,[0,.58,-.105]),1973067);for(let n of[-1,1])e.on({pivot:[.12*n,.55,0],swing:.3*n,act:[-.9,0,0]})(Z([.12*n,.55,0],[.2*n,.45,-.14],.035,.02,5),t);return e.build([.05,.04,.05])}function Kh(){let e=new X,t=6583435,n=7048739;for(let[t,r,i]of[[-.16,-.12,1],[.16,-.12,-1],[-.16,.14,-1],[.16,.14,1]])e.on({pivot:[t,.16,r],swing:.35*i})(Z([t,.16,r],[t*1.1,.04,r],.05,.045,5),n);let r=e.on();r(qp(.27).scale(1,.8,1.15).translate(0,.14,0),t),r(Vm(.28,.28,.05,[0,.15,0],12).scale(1,1,1.15),3359061);for(let e=0;e<8;e++){let t=e/8*Math.PI*2;r(Jm([Math.cos(t)*.26,.16,Math.sin(t)*.3],[Math.cos(t),.2,Math.sin(t)],.08,.025),13358561)}for(let[e,t]of[[0,0],[.1,.1],[-.1,.1],[.1,-.1],[-.1,-.1]])r(Q(.025,[e,.36-Math.hypot(e,t)*.4,t],0),9741240);let i=e.on({pivot:[0,.2,-.28],swing:.1});i(Z([0,.19,-.26],[0,.24,-.38],.06,.055,6),n),i(Q(.075,[0,.26,-.42],1),n),i($(.13,.04,.08,[0,.3,-.42]),t);for(let e of[-1,1])i(Wm(.02,.02,[.035*e,.27,-.493]),nh);return e.build([.02,.03,0])}function qh(){let e=new X,t=rh(e,{skin:n.goblin,legs:n.maroon,boots:4139540,torso:n.red,belt:16436245,eyes:nh,low:!0});t(qp(.12).translate(0,.665,0),n.iron),t($(.02,.07,.14,[0,.78,.01]),16436245),Ah(t),ih(e,-1,n.red,n.goblin,{low:!0,swing:.3});let r=e.on({pivot:[.142,Xm,0],swing:.04});r(Z([.142,Xm,0],[.15,.4,-.06],.038,.032,4),n.red),r(Q(.036,[.15,.39,-.065],0),n.goblin),r(Z([.15,.1,-.06],[.15,1.35,-.06],.018,.016,5),n.woodDark),r(Y(.04,.08,4).translate(.15,1.39,-.06),16436245);let i=e.on({kind:2,pivot:[.15,1.2,-.06],swing:.25});return i(qm([[.15,1.3,-.06],[.6,1.28,-.06],[.56,1.06,-.06],[.6,.86,-.06],[.15,.9,-.06]]),12131356),i(qm([[.3,1.16,-.065],[.42,1.16,-.065],[.36,1,-.065]]),16436245),e.build([.03,.06,.05])}function Jh(){let e=new X,t=9584654,r=7877903,i=e.on();i(q(.2,1).scale(.8,.75,1.4).translate(0,.33,.02),t);for(let e=0;e<5;e++)i(Y(.03,.09,4).rotateX(.4).translate(0,.49,-.1+e*.07),4528643);for(let[t,n,i]of[[-.11,-.18,1],[.11,-.18,-1],[-.11,.2,-1],[.11,.2,1]]){let a=e.on({pivot:[t,.28,n],swing:.7*i});a(Z([t,.28,n],[t,.05,n-.02],.045,.035,4),r),a($(.06,.04,.07,[t,.03,n-.03]),1841431)}let a=e.on({pivot:[0,.33,-.22],swing:.1});a(Q(.12,[0,.33,-.33],1),t),a(K(.06,.07,.08,6).rotateX(Math.PI/2).translate(0,.3,-.46),16622767);for(let e of[-1,1])a(Y(.02,.12,4).rotateX(-1.2).rotateZ(-.3*e).translate(.07*e,.28,-.45),n.bone),a(Wm(.022,.02,[.05*e,.38,-.44]),15680580),a(Y(.03,.07,4).translate(.07*e,.45,-.28),r);let o=e.on({pivot:[0,.45,0],swing:.05,act:[.35,0,0]});return o(Vm(.075,.065,.16,[0,.55,.04],6),n.red),o(Q(.075,[0,.69,.02],0),n.goblin),o(Gm(.085).translate(0,.71,.02),n.iron),o(Z([.12,.55,.2],[.12,.5,-.6],.016,.012,4),n.wood),o(Y(.03,.1,4).rotateX(-Math.PI/2).translate(.12,.5,-.65),n.iron),e.build([.06,.05,.12])}function Yh(){let e=new X,t=e.on();t(q(.11,1).scale(1,.75,1.2).translate(0,.17,.05),2042167),t(Q(.07,[0,.16,-.1],1),1120295);for(let e of[-1,1])for(let n of[0,.03])t(Wm(.018,.018,[.025*e+n*e,.19+n,-.165]),15680580);for(let t=0;t<4;t++){let n=-.12+t*.08;for(let r of[-1,1]){let i=e.on({pivot:[.06*r,.17,n],swing:(t%2?.6:-.6)*r});i(Z([.06*r,.17,n],[.2*r,.24,n+(t-1.5)*.04],.012,.01,3),1120295),i(Z([.2*r,.24,n+(t-1.5)*.04],[.26*r,.02,n+(t-1.5)*.06],.01,.006,3),1120295)}}return e.build([.02,.03,0])}var Xh=[jh,Mh,null,Nh,Ph,Ih,Lh,Rh,zh,Vh(1),Vh(.55),Hh,Uh,Wh,Gh,Kh,qh,Jh,Yh];function Zh(e){let t=Xh[e];return t?t():null}function Qh(){let e=new X,t=n.ogre,r=n.ogreDark;for(let i of[-1,1]){let a=.17*i,o=a*1.05,s=e.on({pivot:[a,.46,0],swing:i<0?.42:-.42});s(Z([a,.46,0],[o,.2,.01],.13,.11,8),t),s(Z([o,.2,.01],[o,.11,0],.11,.1,8),r),s(Vm(.125,.125,.05,[o,.19,.01],8),$m),s($(.2,.09,.3,[o,.105,-.05]),r);for(let e of[-1,0,1])s(Q(.035,[o+e*.06,.09,-.21],0),n.bone)}let i=e.on();i(Vm(.3,.27,.12,[0,.5,0],12),$m),i($(.32,.3,.05,[0,.36,-.22]),n.maroon),i($(.36,.26,.05,[0,.38,.22]),n.maroon),i(Q(.07,[0,.5,-.28],1),n.gold),i(q(.37,2).scale(1.05,.95,.95).translate(0,.72,-.03),t),i(q(.34,2).scale(1.3,.78,.92).translate(0,.96,.03),r);for(let e of[-1,1])i(qp(.16).scale(1.1,.9,1.1).translate(.38*e,1.06,.02),n.iron),i(Q(.03,[.38*e,1.2,.02],0),n.gold);for(let e=0;e<7;e++){let t=-.9+e*.3;i(Y(.022,.08,4).rotateX(Math.PI).translate(Math.sin(t)*.27,1-Math.abs(Math.sin(t))*.03,-.28+(1-Math.cos(t))*.12),n.bone)}let a=e.on({pivot:[0,1.12,-.05],swing:.06});a(q(.22,2).scale(1,.92,.95).translate(0,1.25,-.1),t),a($(.3,.12,.2,[0,1.13,-.17]),t),a($(.24,.035,.02,[0,1.15,-.272]),4136221),a(Q(.05,[0,1.25,-.31],1),r);for(let e of[-1,1])a(Y(.03,.12,5).translate(.09*e,1.21,-.25),n.bone),a($(.06,.05,.02,[.075*e,1.29,-.29]),n.eye),a(J(.09,.03,.05).rotateZ(.35*e).translate(.075*e,1.335,-.28),r),a(Y(.05,.14,5).rotateZ(-e*1.3).translate(.23*e,1.27,-.08),t);a(Vm(.15,.16,.1,[0,1.45,-.08],10),n.gold);for(let e=0;e<5;e++){let t=e/5*Math.PI*2;a(Y(.035,.11,4).translate(Math.cos(t)*.13,1.54,-.08+Math.sin(t)*.13),n.gold)}a(Q(.035,[0,1.45,-.24],0),14427686);let o=e.on({pivot:[-.4,1,.02],swing:-.32,act:[.4,0,.25]});o(Z([-.4,1,.02],[-.5,.74,-.02],.12,.105,8),t),o(Z([-.5,.74,-.02],[-.53,.52,-.08],.105,.095,8),t),o(Vm(.11,.11,.08,[-.53,.58,-.07],8),$m),o(q(.13,1).translate(-.53,.45,-.1),r);let s=e.on({pivot:[.4,1,.02],swing:.18,act:[2.2,0,0]});s(Z([.4,1,.02],[.52,.76,-.08],.12,.105,8),t),s(Z([.52,.76,-.08],[.55,.6,-.3],.105,.095,8),t),s(q(.13,1).translate(.55,.57,-.34),r),s(Z([.55,.45,-.27],[.56,1.25,-.6],.05,.12,8),n.wood);let c=[.56,1.3,-.62];s(q(.17,1).scale(1,1.2,1).translate(c[0],c[1],c[2]),8145438);for(let e of[[1,.3,0],[-1,.3,0],[0,.3,-1],[0,.3,1],[0,1,0],[.7,-.2,-.7]])s(Jm(c,e,.26,.04),n.iron);return e.build([.05,.06,.03],.06)}function $h(){let e=new X,t=n.stone,r=7041664,i=16747546,a=5078031;for(let n of[-1,1]){let i=.19*n,a=e.on({pivot:[i,.48,0],swing:n<0?.32:-.32});a(Hm(.16,[i,.38,0]),r),a($(.22,.22,.24,[i,.18,0]),t),a($(.27,.08,.33,[i,.1,-.04]),r)}let o=e.on();o(Hm(.2,[0,.55,0]),r),o(new cs(.42,0).scale(1.25,.95,.85).translate(0,.84,0),t);for(let e of[-1,1])o(Hm(.2,[.42*e,1.1,.02]),r);o(J(.06,.3,.02).rotateZ(.4).translate(-.1,.84,-.345),i),o(J(.05,.22,.02).rotateZ(-.5).translate(.15,.78,-.335),i),o(Q(.07,[.02,.93,-.33],0),16756768),o(qp(.14).scale(1.3,.5,1).translate(.3,1.24,.05),a),o(qp(.1).scale(1.2,.5,1).translate(-.24,1.2,.12),a);let s=e.on({pivot:[0,1.18,0],swing:.05});s($(.3,.24,.26,[0,1.29,-.06]),r),s($(.34,.06,.07,[0,1.38,-.18]),t);for(let e of[-1,1])s($(.07,.04,.02,[.075*e,1.31,-.195]),16756768);for(let n of[-1,1]){let a=e.on({pivot:[.5*n,1.1,0],swing:n<0?-.28:.28,act:[2.6,0,0]});a(Hm(.17,[.56*n,.92,0]),t),a($(.24,.4,.26,[.6*n,.64,-.02]),r),a(J(.04,.16,.02).rotateZ(.3*n).translate(.6*n,.66,-.155),i),a(Hm(.2,[.62*n,.38,-.05]),t)}return e.build([.035,.05,0],.06)}function eg(){let e=new X,t=3018853,r=4988309,i=4906624,a=e.on({pivot:[0,.95,0],swing:.06});a(K(.2,.4,.84,12).translate(0,.56,0),t),a(Vm(.405,.405,.04,[0,.16,0],12),i);for(let e of[.4,.62])a($(.05,.05,.02,[0,e,-.33+(e-.4)*.17]),i);let o=e.on();o(Vm(.21,.24,.32,[0,1.02,0],12),r),o(new jc(.2,.035,6,14).rotateX(Math.PI/2).translate(0,1.18,0),t);for(let e=0;e<5;e++){let t=-.8+e*.4;o(Q(.04,[Math.sin(t)*.26,.9,-Math.cos(t)*.22],0),n.bone)}let s=e.on({pivot:[0,1.17,0],swing:.05});s(Q(.13,[0,1.27,-.04],1),n.bone),s($(.12,.05,.08,[0,1.18,-.08]),n.bone);for(let e of[-1,1])s($(.045,.035,.02,[.05*e,1.29,-.165]),i);s(Y(.21,.48,10).translate(0,1.38,.07),1973067);let c=e.on({kind:3,pivot:[0,.9,0],swing:1.6});for(let e=0;e<3;e++){let t=e/3*Math.PI*2;c(Q(.05,[Math.cos(t)*.56,.75+.18*e,Math.sin(t)*.56],0),i)}let l=e.on({pivot:[-.22,1.1,0],swing:-.15,act:[1.9,0,-.3]});l(Z([-.22,1.1,0],[-.32,.88,-.06],.07,.1,7),r),l(Q(.05,[-.33,.83,-.07],0),n.bone);let u=e.on({pivot:[.22,1.1,0],swing:.1,act:[.8,0,0]});u(Z([.22,1.1,0],[.34,.88,-.06],.07,.1,7),r),u(Q(.05,[.35,.84,-.07],0),n.bone),u(Z([.36,.15,-.06],[.36,1.55,-.08],.022,.022,5),4472892),u(Q(.1,[.36,1.63,-.08],1),i);for(let e of[-1,1])u(J(.02,.16,.02).rotateZ(.6*e).translate(.36+.06*e,1.56,-.08),n.bone);return e.build([.04,.03,0],.1)}function tg(){let e=new X,t=14427686,r=10033947,i=e.on();i(q(.34,2).scale(.9,.78,1.35).translate(0,.62,.1),t),i(q(.27,1).scale(.82,.62,1.15).translate(0,.52,.04),n.gold);for(let e=0;e<5;e++)i(Y(.04,.11,4).translate(0,.87-e*.012,-.12+e*.12),r);for(let t of[-1,1]){let i=e.on({pivot:[.18*t,.5,.1],swing:t<0?.15:-.15});i(Z([.18*t,.5,.1],[.2*t,.3,0],.07,.06,6),r),i($(.08,.05,.12,[.2*t,.28,-.05]),r);for(let e of[-1,1])i(Y(.015,.05,4).rotateX(-Math.PI/2).translate(.2*t+e*.025,.27,-.13),n.bone)}let a=e.on({pivot:[0,.78,-.22],swing:.1,act:[-.5,0,0]});a(Z([0,.74,-.22],[0,.98,-.5],.13,.09,8),t),a($(.22,.16,.3,[0,1.03,-.64]),t),a($(.16,.08,.2,[0,.99,-.82]),t),a($(.15,.05,.22,[0,.935,-.78]),r);for(let e of[-1,1]){a(Y(.03,.2,5).rotateX(.75).translate(.07*e,1.16,-.55),n.bone),a($(.05,.03,.02,[.07*e,1.07,-.792]),n.eye),a($(.02,.02,.02,[.04*e,1,-.925]),2042167);for(let t of[-.72,-.82])a(Y(.012,.035,3).rotateX(Math.PI).translate(.06*e,.945,t),n.bone)}for(let t of[-1,1]){let n=e.on({kind:2,pivot:[.2*t,.82,.05],swing:.6*t}),i=[.2*t,.82,.05],a=[.95*t,1.12,.2],o=[1.25*t,.95,.45];n(Z(i,a,.035,.022,5),r),n(Z(a,o,.022,.01,4),r),n(Z(a,[.75*t,.7,.58],.018,.01,4),r),n(qm([i,a,o,[.95*t,.78,.55],[.75*t,.7,.58],[.45*t,.72,.42],[.22*t,.74,.3]]),8330525)}let o=e.on({kind:4,pivot:[0,.6,.5],swing:.45});return o(Z([0,.62,.45],[0,.52,.85],.13,.08,7),t),o(Z([0,.52,.85],[0,.46,1.2],.08,.04,6),t),o(Y(.09,.16,4).rotateX(Math.PI/2+.2).translate(0,.45,1.29),r),e.build([.02,.04,0])}function ng(){let e=new X,t=8141549,n=12891645,r=e.on();r(q(.32,2).scale(1,1.15,1).translate(0,.62,.08),t),r(q(.22,1).scale(1.1,.6,1).translate(0,.36,-.02),5972406);for(let[e,t,i,a]of[[.14,.86,.16,.05],[-.12,.8,.22,.04],[.02,.95,.12,.035]])r(Q(a,[e,t,i],0),n);for(let e of[-1,1])r(Q(.09,[.13*e,.6,-.22],1),16707722),r($(.028,.1,.03,[.13*e,.6,-.31]),1120295),r($(.12,.03,.05,[.13*e,.7,-.27]).rotateZ(0),4988309);for(let r=0;r<6;r++){let i=-Math.PI/2+(r-2.5)*.62,a=Math.cos(i),o=Math.sin(i),s=r===2||r===3,c=e.on(s?{pivot:[a*.22,.3,o*.22],swing:.15,act:[-1,0,0]}:{kind:4,pivot:[a*.22,.3,o*.22],swing:.35}),l=[a*.22,.3,o*.22],u=[a*.45,.14,o*.45],d=[a*.68,.1,o*.62],f=[a*.8,.22,o*.7];c(Z(l,u,.085,.065,7),t),c(Z(u,d,.065,.04,6),t),c(Z(d,f,.04,.012,5),t),c(Q(.028,[(u[0]+d[0])/2,.08,(u[2]+d[2])/2],0),n)}return e.build([.03,.05,0])}function rg(){let e=new X,t=2042167,r=1120295,i=e.on();i(q(.26,2).scale(1,.85,1.25).translate(0,.55,.28),t),i(new Dc(.07,0).scale(1,.25,1.6).translate(0,.77,.3),14427686),i(q(.16,1).scale(1,.85,1.1).translate(0,.47,-.08),r),i(Q(.1,[0,.52,-.25],1),t);for(let[e,t]of[[-.04,.56],[.04,.56],[-.07,.51],[.07,.51],[0,.6]])i(Q(.018,[e,t,-.34],0),15680580);for(let e=0;e<5;e++)i(Y(.018,.07,4).translate(-.06+e*.03,.62,-.22),16436245);for(let e of[-1,1])i(Y(.022,.1,4).rotateX(-2.4).translate(.04*e,.44,-.33),n.bone);for(let t=0;t<4;t++){let n=-.16+t*.1;for(let i of[-1,1]){let a=t===0,o=e.on(a?{pivot:[.1*i,.48,n],swing:.4*i,act:[-1,0,0]}:{pivot:[.1*i,.48,n],swing:(t%2?.45:-.45)*i}),s=[.42*i,.82,n+(t-1.5)*.12],c=[.62*i,.02,n+(t-1.5)*.22];o(Z([.1*i,.48,n],s,.035,.028,5),r),o(Z(s,c,.028,.01,5),r),o(Q(.03,s,0),14427686)}}return e.build([.02,.04,0])}function ig(){let e=new X,t=9590828,r=5977112;for(let[i,a]of[[-.3,-.2],[.3,-.2],[-.3,.22],[.3,.22]]){let o=e.on({pivot:[i,.17,a],swing:.5});o(K(.17,.17,.05,12).rotateZ(Math.PI/2).translate(i,.17,a),r),o(K(.05,.05,.07,8).rotateZ(Math.PI/2).translate(i,.17,a),n.iron),o($(.03,.3,.03,[i,.17,a]),t)}let i=e.on();i($(.62,.18,.7,[0,.33,0]),t),i($(.66,.05,.74,[0,.44,0]),r);for(let e of[-.31,.31])i($(.04,.16,.7,[e,.52,0]),r);i($(.62,.16,.04,[0,.52,.35]),r);for(let e=0;e<3;e++)i(Y(.03,.12,4).translate(-.2+e*.2,.64,.35),n.iron);i(qm([[.33,.9,.1],[.33,.62,.1],[.33,.62,.34],[.33,.9,.34]]),12131356);let a=e.on({pivot:[0,.52,-.1],swing:.02,act:[.3,0,0]});a(K(.09,.11,.18,10).rotateX(Math.PI/2).translate(0,.56,-.12),r),a(K(.07,.085,.5,10).rotateX(Math.PI/2).translate(0,.62,-.35),11817737),a(Vm(.095,.095,.04,[0,.62,-.6],10).rotateX(0),14251782);let o=e.on({pivot:[0,.48,.18],swing:.04});o(Vm(.11,.09,.22,[0,.6,.18],8),8138002),o(qm([[-.12,.7,.22],[.12,.7,.22],[.16,.46,.3],[-.16,.46,.3]]),12131356),o(Q(.1,[0,.8,.16],1),n.goblin);for(let e of[-1,1])o(Y(.035,.15,4).rotateZ(-e*1.25).translate(.12*e,.8,.16),n.goblin);for(let e of[-1,1])o(Wm(.025,.02,[.035*e,.81,.064]),nh);o(Vm(.085,.09,.07,[0,.9,.16],8),n.gold);for(let e=0;e<5;e++){let t=e/5*Math.PI*2;o(Y(.02,.06,4).translate(Math.cos(t)*.08,.96,.16+Math.sin(t)*.08),n.gold)}return e.build([.02,.03,0])}function ag(){let e=[],t=[[0,0,0],[0,.03,.3],[0,.04,.6],[0,.06,.85],[0,.14,1]],n=[.13,.1,.075,.045,.012];for(let r=0;r<t.length-1;r++)e.push(W(Z(t[r],t[r+1],n[r],n[r+1],7),8141549));for(let t=1;t<8;t++)e.push(W(Q(.035*(1-t/10),[0,-.05,t*.11],0),14538494));return G(e)}var og=[Qh,$h,eg,tg,ng,rg,ig];function sg(e){return og[e%og.length]()}var cg=`
attribute vec4 aRig;
attribute vec4 aPivot;
attribute vec4 iAnim;
uniform vec3 uGait;
varying float vFlash;
mat3 rigRX(float a) { float c = cos(a), s = sin(a); return mat3(1.0, 0.0, 0.0, 0.0, c, s, 0.0, -s, c); }
mat3 rigRY(float a) { float c = cos(a), s = sin(a); return mat3(c, 0.0, -s, 0.0, 1.0, 0.0, s, 0.0, c); }
mat3 rigRZ(float a) { float c = cos(a), s = sin(a); return mat3(c, s, 0.0, -s, c, 0.0, 0.0, 0.0, 1.0); }
void rigPose(inout vec3 p, inout vec3 n) {
  float kind = aPivot.w;
  float ph = iAnim.x;
  float gait = iAnim.y;
  float act = iAnim.z;
  if (kind > 0.5) {
    vec3 piv = aPivot.xyz;
    float sw = aRig.x;
    mat3 L;
    if (kind < 1.5) L = rigRX(sw * sin(ph) * gait);
    else if (kind < 2.5) L = rigRZ(sw * sin(ph));
    else if (kind < 3.5) L = rigRY(sw * ph);
    else L = rigRY(sw * sin(ph) * gait);
    mat3 M = L * rigRX(aRig.y * act) * rigRY(aRig.z * act) * rigRZ(aRig.w * act);
    p = M * (p - piv) + piv;
    n = M * n;
    mat3 B = rigRZ(sin(ph) * uGait.y * gait) * rigRX(-uGait.z * gait);
    p = B * p;
    n = B * n;
    p.y += (0.5 + 0.5 * cos(2.0 * ph)) * uGait.x * gait;
  }
  float fx = iAnim.w;
  vFlash = max(fx, 0.0);
  if (fx < 0.0) {
    // Knocked down: tips over backwards on its base, then sinks into the bridge.
    float d = -fx;
    mat3 D = rigRX(min(1.0, d * 1.6) * 1.45);
    vec3 heel = vec3(0.0, 0.0, 0.16);
    p = D * (p - heel) + heel;
    n = D * n;
    p.y -= d * d * 0.5;
    vFlash = max(0.0, 0.55 - d * 4.0);
  }
}
`,lg=`tiny-legion-rig-1`;function ug(e){let t=new Hc({vertexColors:!0}),n={value:new V(e[0],e[1],e[2])};return t.onBeforeCompile=e=>{e.uniforms.uGait=n,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>\n${cg}`).replace(`#include <beginnormal_vertex>`,`vec3 objectNormal = vec3( normal );
vec3 rigP = vec3( position );
rigPose( rigP, objectNormal );`).replace(`#include <begin_vertex>`,`vec3 transformed = rigP;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying float vFlash;`).replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>
totalEmissiveRadiance += vec3( vFlash );`)},t.customProgramCacheKey=()=>lg,t}function dg(e,t){let n=new zo(new Float32Array(t*4),4);return n.setUsage(Cr),e.geometry.setAttribute(`iAnim`,n),n}function fg(e,t,n,r,i,a){let o=t*4;e[o]=n,e[o+1]=r,e[o+2]=i,e[o+3]=a}var pg=27,mg=10.6,hg=5.7,gg=.95,_g=1.17,vg=50*Math.PI/180,yg=6.3,bg=60,xg=Math.SQRT1_2,Sg=2/2.6,Cg=-15.5,wg=-3*Math.PI/4,Tg=.7,Eg=14275267,Dg=12,Og=(e,t)=>(t-e)*xg,kg=(e,t)=>-(e+t)*xg,Ag={lagoon:{land:7127626,bank:5216821,beach:15982512,halo:8381422,tile:16773584},desert:{land:15251818,bank:13210695,beach:16178340,halo:8381422,tile:13137482},snow:{land:16054783,bank:13229294,beach:14411762,halo:12119287,tile:12573694},castle:{land:8037227,bank:5931600,beach:13352863,halo:8381422,tile:11051678},volcano:{land:5978670,bank:3810332,beach:2826525,halo:16747084,tile:7038048}},jg={lagoon:[[`palm`,5],[`bush`,3],[`rock`,1.5]],desert:[[`cactus`,4],[`dune`,2],[`sandRock`,2.5]],snow:[[`pineSnow`,6],[`ice`,2],[`snowman`,.5]],castle:[[`oak`,4],[`house`,3],[`pine`,1.5],[`rock`,1]],volcano:[[`deadTree`,3],[`lavaRock`,4],[`spire`,3]]},Mg={lagoon:Cm,desert:wm,snow:Tm,castle:Em,volcano:Dm},Ng=null;function Pg(){if(!Ng){Ng={legion:kh(0,v[0].base),bosses:_p.map((e,t)=>sg(t))},Ng.legion.geo.userData.shared=!0;for(let e of Ng.bosses)e.geo.userData.shared=!0}return Ng}var Fg=null;function Ig(){if(Fg)return Fg;Fg={palm:um(),bush:dm(4168506,3115572),rock:fm(10265519,7041664),cactus:pm(),dune:mm(),sandRock:fm(13208917,11565637),pineSnow:hm(!0),ice:xm(),snowman:Sm(),oak:gm(),house:_m(),pine:hm(!1),deadTree:vm(),lavaRock:ym(),spire:bm()};for(let e of Object.values(Fg))e.userData.shared=!0;return Fg}var Lg=new oa,Rg=new Ni,zg=new Ni,Bg=new li().setFromEuler(new Ui(0,wg,0)),Vg=new V,Hg=15907642,Ug=3900150,Wg=11449535,Gg=14697786,Kg=12158341,qg=16436245,Jg=4937059;function Yg(e,t,n){let r=new qo(e,t,Math.max(1,n));return r.count=0,r.frustumCulled=!1,r}function Xg(e,t,n,r,i=0,a=1,o=a){Lg.position.set(t,n,r),Lg.rotation.set(0,i,0),Lg.scale.set(a,o,a),Lg.updateMatrix(),e.setMatrixAt(e.count++,Lg.matrix)}function Zg(){let e=document.createElement(`canvas`);e.width=1280,e.height=128;let t=e.getContext(`2d`);t.textAlign=`center`,t.textBaseline=`middle`,t.lineJoin=`round`;for(let e=1;e<=10;e++){t.font=`${e===10?74:88}px "Lilita One", "Arial Black", sans-serif`;let n=(e-.5)*128,r=69.12;t.lineWidth=16,t.strokeStyle=`#141a33`,t.strokeText(String(e),n,r),t.fillStyle=`#ffffff`,t.fillText(String(e),n,r)}let n=new $o(e);return n.colorSpace=_r,n.anisotropy=4,n}function Qg(){let e=document.createElement(`canvas`);e.width=e.height=256;let t=e.getContext(`2d`);t.fillStyle=`#1c9cc4`,t.fillRect(0,0,256,256),t.strokeStyle=`rgba(255,255,255,0.3)`,t.lineWidth=3,t.lineCap=`round`;for(let e=0;e<22;e++){let e=Math.random()*256,n=Math.random()*256,r=14+Math.random()*22;t.beginPath(),t.moveTo(e,n),t.quadraticCurveTo(e+r/2,n-6,e+r,n),t.stroke()}let n=new $o(e);return n.colorSpace=_r,n.wrapS=n.wrapT=Jt,n.repeat.set(40,40),n}var $g=e=>(e-1)*pg,e_=e=>1.4*Math.sin(e*2.1);function t_(e,t){let n=1.1+.6*(e*7%3-1),r=3.1*(1-.38*((t-4.5)/4.5)**2),i=-8.4+16.8/9*t,a=t===9?0:r*Math.sin(t+n);return[$g(e)+i,e_(e)+a]}var n_=class{scene=new ga;camera=new wl(-6.3,yg,10,-10,1,200);nodes=[];first=1;nodeBase=0;nodeAt(e){return this.nodes[e-this.nodeBase]}isleOf(e){return this.isles[e-this.first]}isles=[];current=0;target={u:0,v:0};follow=!0;width=1;height=1;root=new sa;mats={fig:new Hc({vertexColors:!0}),terrain:new Hc({vertexColors:!0}),decal:new Co({vertexColors:!0,transparent:!0,depthWrite:!1}),paint:new Hc({color:16777215}),mist:new Hc({color:16777215,flatShading:!0,transparent:!0,opacity:.55,depthWrite:!1}),cloud:new Hc({color:16777215,flatShading:!0,transparent:!0,opacity:.96}),smoke:new Hc({color:9407111,flatShading:!0,transparent:!0,opacity:.8,depthWrite:!1}),shadow:new Co({map:cm(),color:2042388,transparent:!0,opacity:.3,depthWrite:!1}),ring:new Co({color:16777215,transparent:!0,opacity:.8,depthWrite:!1}),number:new Co({map:Zg(),transparent:!0,depthWrite:!1})};curToken=null;water;waterTex=Qg();samples=[];puffs=[];mistMesh;cloudMesh;smokeMesh;volcanoes=[];legion;legionFlag;ring;time=0;walkS=0;walkTo=0;legionAt=0;revealWorld=0;revealT=-1;velU=0;velV=0;maxU=0;v3=new V;constructor(){this.scene.background=new H(13496059),this.scene.fog=new ha(13496059,64,94);let e=new dl(16777215,10467016,1.75),t=new El(16773337,2.1);t.position.set(-6,12,8),this.scene.add(e,t),this.water=new Fo(new Oc(400,400).rotateX(-Math.PI/2),new Hc({map:this.waterTex})),this.scene.add(this.water,this.root)}open(e,t){this.scene.remove(this.root),this.root.traverse(e=>{e instanceof Fo&&!e.geometry.userData.shared&&e.geometry.dispose()}),this.root=new sa,this.scene.add(this.root);let n=e.unlocked,r=Math.floor(n/10)+1,i=r+3,a=Math.max(1,r-Dg);this.first=a,this.nodeBase=(a-1)*10,this.current=n,this.revealWorld=r>e.mapSeen?r:0,this.revealT=-1,this.maxU=$g(r+2),this.isles=[],this.nodes=[];for(let t=a;t<=i;t++){let i=kp[(t-1)%kp.length],a=0;for(let r=0;r<10;r++){let i=(t-1)*10+r,o=zp(i),s=e.stars[String(i)]??0;a+=s;let[c,l]=t_(t,r);this.nodes.push({index:i,label:o.label,world:t,level:o.level,boss:o.boss,stars:s,state:i<n?`done`:i===n?`current`:`locked`,u:c,v:l,sample:0})}let o=t<=r?0:t===r+1?1:2;this.isles.push({world:t,theme:i,name:Rp(t),fog:o,stars:a,u:$g(t),v:e_(t)})}this.buildRoute(),this.buildTerrain(),this.buildRoad(),this.buildDecor(),this.buildPads(),this.buildFog(),this.buildLegion();let o=this.waitSample(t>=this.nodeBase&&t<n?t:n),s=this.nodeAt(n),c=[this.nodeAt(n-1),this.nodeAt(n+1)].filter(e=>e).reduce((e,t)=>e+t.v-s.v,0);this.side=c>0?-1:1,this.legionAt=o,this.walkS=o,this.walkTo=this.waitSample(n),this.rest=this.walkTo>o?0:1;let l=this.samples[o];this.target.u=l.u,this.target.v=l.v*.5,this.follow=!0,this.velU=this.velV=0,this.revealWorld&&this.walkTo===o&&(this.revealT=0);for(let e of this.root.children)e instanceof qo&&(e.visible=e.count>0);this.legion.visible=!0,this.placeCamera()}buildRoute(){let e=this.first===1,t=+!!e,n=e?[[Cg,t_(1,0)[1]+.4,2]]:[];for(let e of this.nodes)n.push([e.u,e.v,+(e.level===1&&e.world>this.first)]);let r=[],i=new Map;for(let e=0;e<n.length-1;e++){let a=n[Math.max(0,e-1)],o=n[e],s=n[e+1],c=n[Math.min(n.length-1,e+2)],l=Math.hypot(s[0]-o[0],s[1]-o[1]),u=Math.max(2,Math.ceil(l/.12)),d=s[2]===1?1:o[2]===2?2:0;e>=t&&i.set(e-t,r.length);for(let e=0;e<u;e++){let t=e/u,n=t*t,i=n*t,l=(e,r,a,o)=>.5*(2*r+(-e+a)*t+(2*e-5*r+4*a-o)*n+(-e+3*r-3*a+o)*i),f=l(a[0],o[0],s[0],c[0]),p=l(a[1],o[1],s[1],c[1]);r.push({u:f,v:p,kind:d,y:this.groundY(f,p,d)})}}let a=n[n.length-1];i.set(n.length-1-t,r.length),r.push({u:a[0],v:a[1],kind:0,y:_g}),this.nodes.forEach((e,t)=>e.sample=i.get(t)??0),this.samples=r}waitSample(e){let t=this.samples,n=e-this.nodeBase,r=(e,n)=>{let r=0;for(let i=e+1;i<=n;i++)r+=Math.hypot(t[i].u-t[i-1].u,t[i].v-t[i-1].v);return r},i=this.nodes[n].sample,a=n>0?this.nodes[n-1].sample:0,o=Math.min(Tg,.4*r(a,i));for(;i>0&&o>0;)o-=Math.hypot(t[i].u-t[i-1].u,t[i].v-t[i-1].v),i--;return i}insideness(e,t){let n=Nt(Math.round(e/pg)+1,this.first,this.first+this.isles.length-1),r=(e-$g(n))/mg,i=(t-e_(n))/hg;return Math.abs(r)**2.6+Math.abs(i)**2.6}groundY(e,t,n){if(n===0)return .97;let r=this.insideness(e,t);return r<.72?.97:r<1.15?gg+-.3999999999999999*((r-.72)/.43):.55}buildTerrain(){let e=[],t=[],n=[],r=[],i=new H;for(let a of this.isles){let o=new zt(a.world*92821+7),s=.04+o.next()*.04,c=.02+o.next()*.03,l=o.next()*6.28,u=o.next()*6.28,d=Ag[a.theme],f=(e,t)=>{let n=e/60*Math.PI*2,r=t*(1+s*Math.sin(3*n+l)+c*Math.sin(5*n+u)),i=Math.cos(n),o=Math.sin(n),d=a.u+mg*Math.sign(i)*Math.abs(i)**Sg*r,f=a.v+hg*Math.sign(o)*Math.abs(o)**Sg*r;return[Og(d,f),kg(d,f)]},p=(e,t,n,r,a=-1)=>{let[o,s,c]=n,l=(s[2]-o[2])*(c[0]-o[0])-(s[0]-o[0])*(c[2]-o[2])>=0?[o,s,c]:[o,c,s];i.setHex(r);for(let n of l)e.push(n[0],n[1],n[2]),a<0?t.push(i.r,i.g,i.b):t.push(i.r,i.g,i.b,a)},m=(e,t,n,r,i,a,o,s=-1)=>{for(let c=0;c<60;c++){let l=f(c,n),u=f(c+1,n),d=f(c,i),m=f(c+1,i);p(e,t,[[l[0],r,l[1]],[u[0],r,u[1]],[d[0],a,d[1]]],o,s),p(e,t,[[u[0],r,u[1]],[m[0],a,m[1]],[d[0],a,d[1]]],o,s)}},h=Og(a.u,a.v),g=kg(a.u,a.v);for(let n=0;n<60;n++){let r=f(n,.9),i=f(n+1,.9);p(e,t,[[h,gg,g],[r[0],gg,r[1]],[i[0],gg,i[1]]],d.land)}m(e,t,.9,gg,.95,.34,d.bank),m(e,t,.95,.34,1.05,.03,d.beach),m(n,r,1.05,.02,1.4,.015,d.halo,.5),m(n,r,1.04,.025,1.1,.025,16777215,.75)}let a=new uo;a.setAttribute(`position`,new Qa(e,3)),a.setAttribute(`color`,new Qa(t,3)),a.computeVertexNormals(),this.root.add(new Fo(a,this.mats.terrain));let o=new uo;o.setAttribute(`position`,new Qa(n,3)),o.setAttribute(`color`,new Qa(r,4));let s=new Fo(o,this.mats.decal);s.renderOrder=1,this.root.add(s)}buildRoad(){let e=this.samples,t=0,n=0,r=0;for(let r of e)r.kind===0?t++:n++;let i=Yg(jm(),this.mats.paint,Math.ceil(t/3)+8),a=Yg(Mm(),this.mats.fig,Math.ceil(n/2)+8),o=Yg(Nm(),this.mats.fig,Math.ceil(n/8)+8),s=new H,c=0,l=0;for(let t=1;t<e.length;t++){let n=e[t-1],u=e[t],d=Math.hypot(u.u-n.u,u.v-n.v);c+=d,l+=d;let f=u.kind===0?.48:.3;if(c<f||(c=0,this.nodes.some(e=>Math.hypot(e.u-u.u,e.v-u.v)<.75)))continue;let p=Og(u.u,u.v),m=kg(u.u,u.v),h=p-Og(n.u,n.v),g=m-kg(n.u,n.v),_=Math.atan2(h,g);if(u.kind===0){let e=this.isles[Nt(Math.round(u.u/pg)-(this.first-1),0,this.isles.length-1)];s.setHex(Ag[e.theme].tile).multiplyScalar(.92+Math.random()*.14),i.setColorAt(i.count,s),Xg(i,p,gg,m,_+(Math.random()-.5)*.25)}else if(Xg(a,p,u.y,m,_),l>1.6&&this.insideness(u.u,u.v)>1.05){l=0;let e=Math.cos(_)*.55,t=-Math.sin(_)*.55;Xg(o,p+e,u.y-.3,m+t),Xg(o,p-e,u.y-.3,m-t),r+=2}}if(i.instanceColor&&(i.instanceColor.needsUpdate=!0),this.root.add(i,a,o),this.first===1){let e=new Fo(Fm(),this.mats.fig),t=-17.1,n=this.samples[0].v+1.3;e.position.set(Og(t,n),0,kg(t,n)),e.rotation.y=Math.PI/4+.3,this.root.add(e)}}buildDecor(){let e=Ig(),t=[],n=[];for(let e of this.isles){let r=new zt(e.world*7919+101),i=this.samples.filter((t,n)=>n%3==0&&Math.abs(t.u-e.u)<11.6),a=this.nodes.filter(t=>t.world===e.world),o={theme:e.theme,u:e.u+6.4,v:e.v+3.2},s=-1;for(let t of[4.6,5.6,6.6,7.4])for(let n of[-3.4,-2.8,2.8,3.4]){let r=e.u+t,c=e.v+n;if(Math.abs(t/mg)**2.6+Math.abs(n/hg)**2.6>.62)continue;let l=1/0;for(let e of i)l=Math.min(l,Math.hypot(e.u-r,e.v-c));for(let e of a)l=Math.min(l,Math.hypot(e.u-r,e.v-c)-.5);l>s&&(s=l,o={theme:e.theme,u:r,v:c})}n.push(o);let c=jg[e.theme],l=c.reduce((e,[,t])=>e+t,0),u=0;for(let n=0;n<500&&u<24;n++){let n=r.next()*Math.PI*2,s=Math.sqrt(r.next())*.84,d=Math.cos(n),f=Math.sin(n),p=e.u+mg*Math.sign(d)*Math.abs(d)**Sg*s,m=e.v+hg*Math.sign(f)*Math.abs(f)**Sg*s;if(i.some(e=>Math.hypot(e.u-p,e.v-m)<1)||a.some(e=>Math.hypot(e.u-p,e.v-m)<1.35)||Math.hypot(o.u-p,o.v-m)<2.6||t.some(e=>Math.hypot(e.u-p,e.v-m)<.95))continue;let h=r.next()*l,g=c[0][0];for(let[e,t]of c)if((h-=t)<=0){g=e;break}t.push({kind:g,u:p,v:m,rot:r.next()*Math.PI*2,s:.85+r.next()*.4}),u++}}let r=new Map;for(let e of t)r.set(e.kind,[...r.get(e.kind)??[],e]);let i=Yg(new Oc(1,1).rotateX(-Math.PI/2),this.mats.shadow,t.length+64);i.renderOrder=1;for(let[t,n]of r){let r=Yg(e[t],this.mats.fig,n.length);for(let e of n){let t=Og(e.u,e.v),n=kg(e.u,e.v);Xg(r,t,gg,n,e.rot,e.s),Xg(i,t,.96,n,0,e.s*1.1)}this.root.add(r)}this.volcanoes=[];for(let e of kp){let t=n.filter(t=>t.theme===e);if(!t.length)continue;let r=Yg(Mg[e](),this.mats.fig,t.length);for(let n of t){let t=Og(n.u,n.v),a=kg(n.u,n.v);Xg(r,t,gg,a,wg+Math.PI,.82),Xg(i,t,.96,a,0,3.4),e===`volcano`&&this.volcanoes.push({x:t,y:2.877,z:a})}this.root.add(r)}this.root.add(i),this.smokeMesh=Yg(Im(),this.mats.smoke,this.volcanoes.length*7+1),this.root.add(this.smokeMesh)}buildPads(){let e=Yg(Om(),this.mats.paint,this.nodes.length),t=Yg(Pm(),this.mats.fig,this.nodes.length+1),n=Pg().bosses.map((e,t)=>{let n=new uo;for(let[t,r]of Object.entries(e.geo.attributes))n.setAttribute(t,r);n.boundingSphere=e.geo.boundingSphere;let r=Yg(n,this.bossMats[t],this.nodes.length);return this.bossAnim[t]=dg(r,this.nodes.length),r});this.bossMeshes=n;let r=Array.from({length:10},(e,t)=>Yg(km(t+1),this.mats.number,this.nodes.length)),i=Yg(Am(),this.mats.fig,this.nodes.length*3);this.curToken=null;let a=new H,o=new V;for(let s of this.nodes){let c=this.isleOf(s.world);if(c.fog===2)continue;let l=Og(s.u,s.v),u=kg(s.u,s.v),d=s.boss>=0,f=d?1.18:1,p=!c.fog;if(a.setHex(p?s.state===`done`?Hg:s.state===`current`?d?Gg:Ug:d?Kg:Wg:Eg),e.setColorAt(e.count,a),Xg(e,l,gg,u,0,f),p){let t=gg+.21999999999999997*f,n=r[s.level-1];if(Xg(n,l,t+.006,u,wg,f),s.state===`current`){let t=e=>new Ni().fromArray(e.instanceMatrix.array,(e.count-1)*16);this.curToken={meshes:[e,n],idx:[e.count-1,n.count-1],base:[t(e),t(n)]}}if(s.state===`done`){zg.compose(o.set(l,t,u),Bg,Vg.setScalar(f));for(let e=0;e<3;e++)o.set((1-e)*.34,e===1?.2:.14,.5).applyMatrix4(zg),a.setHex(e<s.stars?qg:Jg),i.setColorAt(i.count,a),Xg(i,o.x,o.y,o.z,wg,1.15)}}if(d&&!c.fog){if(s.state===`done`)Xg(t,l+.35,_g,u-.35,wg,1);else{let e=n[s.boss];Xg(e,Og(s.u+1.1,s.v),gg,kg(s.u+1.1,s.v),wg,s.level===10?1:.82)}}}e.instanceColor&&(e.instanceColor.needsUpdate=!0),i.instanceColor&&(i.instanceColor.needsUpdate=!0),this.root.add(e,...r,i,t,...n),this.legionFlag=t,this.flagBase=t.count,this.ring=new Fo(new kc(.78,.95,36).rotateX(-Math.PI/2),this.mats.ring),this.ring.renderOrder=2;let s=this.nodeAt(this.current);this.ring.position.set(Og(s.u,s.v),.99,kg(s.u,s.v)),this.root.add(this.ring)}buildFog(){this.puffs=[];for(let e of this.isles){let t=e.fog===2||e.world===this.revealWorld;if(!e.fog&&e.world!==this.revealWorld)continue;let n=new zt(e.world*31337+3),r=t?46:26;for(let i=0;i<r;i++){let r=n.next()*Math.PI*2,i=Math.sqrt(n.next())*1.15,a=Math.cos(r),o=Math.sin(r),s=e.u+mg*Math.sign(a)*Math.abs(a)**Sg*i,c=e.v+hg*Math.sign(o)*Math.abs(o)**Sg*i,l=Og(s,c),u=kg(s,c),d=Og(e.u,e.v),f=kg(e.u,e.v),p=Math.hypot(l-d,u-f)||1;this.puffs.push({x:l,z:u,y:(t?1.2:.9)+n.next()*(t?1.6:1.1),r:(t?1.6:1.2)+n.next()*(t?1.3:1),ph:n.next()*6.28,heavy:t,world:e.world,dx:(l-d)/p,dz:(u-f)/p,delay:n.next()*.7})}}let e=this.puffs.filter(e=>e.heavy).length;this.cloudMesh=Yg(Im(),this.mats.cloud,e),this.mistMesh=Yg(Im(),this.mats.mist,this.puffs.length-e),this.cloudMesh.renderOrder=3,this.mistMesh.renderOrder=3,this.root.add(this.cloudMesh,this.mistMesh)}buildLegion(){let e=Pg().legion,t=new uo;for(let[n,r]of Object.entries(e.geo.attributes))t.setAttribute(n,r);t.boundingSphere=e.geo.boundingSphere,this.legion=Yg(t,this.legionMat,5),this.legionAnim=dg(this.legion,5),this.root.add(this.legion)}get walking(){return this.walkS<this.walkTo}update(e){this.time+=e,this.dt=e;let t=this.time;if(this.walking){let t=this.samples,n=3.4*e;for(;n>0&&this.walkS<this.walkTo;){let e=t[Math.floor(this.walkS)],r=t[Math.min(t.length-1,Math.floor(this.walkS)+1)],i=Math.max(1e-4,Math.hypot(r.u-e.u,r.v-e.v)),a=i*(1-(this.walkS-Math.floor(this.walkS)));n>=a?(n-=a,this.walkS=Math.floor(this.walkS)+1):(this.walkS+=n/i,n=0)}this.walkS>=this.walkTo&&(this.walkS=this.walkTo,this.revealWorld&&(this.revealT=0))}if(this.legionAt=this.walkS,this.revealT>=0&&(this.revealT+=e),this.follow){let t=this.sampleAt(this.legionAt),n=1-Math.exp(-e*3);this.target.u+=(t.u-this.target.u)*n,this.target.v+=(t.v*.5-this.target.v)*n}else if(this.velU||this.velV){this.target.u+=this.velU*e,this.target.v+=this.velV*e;let t=Math.exp(-e*4);this.velU*=t,this.velV*=t,Math.abs(this.velU)+Math.abs(this.velV)<.05&&(this.velU=this.velV=0)}if(this.clampTarget(),this.animateLegion(t),this.animateClouds(t),this.animateSmoke(t),this.curToken){let e=this.curToken,n=.06+.06*Math.sin(t*3.2);e.meshes.forEach((t,r)=>{Rg.copy(e.base[r]),Rg.elements[13]+=n,t.setMatrixAt(e.idx[r],Rg),t.instanceMatrix.needsUpdate=!0})}let n=t%1.3/1.3;this.ring.scale.setScalar(1+n*.6),this.ring.material.opacity=.85*(1-n),this.waterTex.offset.x=t*.012%1,this.placeCamera()}sampleAt(e){let t=this.samples,n=Math.min(t.length-1,Math.floor(e)),r=Math.min(t.length-1,n+1),i=e-n,a=t[n],o=t[r];return{u:a.u+(o.u-a.u)*i,v:a.v+(o.v-a.v)*i,kind:a.kind,y:a.y+(o.y-a.y)*i}}animateLegion(e){let t=this.sampleAt(this.legionAt),n=this.sampleAt(Math.min(this.samples.length-1,this.legionAt+3)),r=this.walking,i=r?Math.atan2(Og(n.u,n.v)-Og(t.u,t.v),kg(n.u,n.v)-kg(t.u,t.v))+Math.PI:wg,a=t.y+.06;this.rest+=(+!r-this.rest)*Math.min(1,this.dt*3);let o=-.35*this.rest,s=this.side*1.3*this.rest,c=this.legion;c.count=0;let l=[[0,.05],[-.46,-.25],[.46,-.25],[-.28,.46],[.28,.46]],u=Math.cos(i),d=Math.sin(i);for(let n=0;n<l.length;n++){let[f,p]=l[n],m=r?Math.abs(Math.sin(e*10+n*1.3))*.12:Math.max(0,Math.sin(e*2.4+n))*.03,h=Og(t.u+o,t.v+s)+f*u+p*d,g=kg(t.u+o,t.v+s)-f*d+p*u;if(Xg(c,h,a+m*.4,g,i,1.05),fg(this.legionAnim.array,n,e*11+n*.4,r?1:.1,0,0),n===0){let e=this.legionFlag;e.count=this.flagBase,Xg(e,h+.12*u,a+m+.1,g-.12*d,i+Math.PI/2,.75),e.instanceMatrix.needsUpdate=!0}}c.instanceMatrix.needsUpdate=!0,this.legionAnim.needsUpdate=!0;for(let t=0;t<this.bossMeshes.length;t++){let n=this.bossMeshes[t],r=this.bossAnim[t].array;for(let i=0;i<n.count;i++)fg(r,i,e*(t===3?5:2.5)+i*1.7,t===3?1:.15,0,0);this.bossAnim[t].needsUpdate=!0}}legionMat=ug(Pg().legion.gait);bossMats=Pg().bosses.map(e=>ug(e.gait));legionAnim;bossAnim=[];bossMeshes=[];flagBase=0;rest=1;side=1;dt=0;animateClouds(e){let t=this.cloudMesh,n=this.mistMesh;t.count=0,n.count=0;for(let r of this.puffs){let i=0;r.world===this.revealWorld&&this.revealT>=0&&(i=Nt((this.revealT-r.delay)/1.8,0,1),i=i*i*(3-2*i));let a=r.r*(1-i)*(1+Math.sin(e*.8+r.ph)*.04),o=r.x+Math.sin(e*.25+r.ph)*.25+r.dx*i*5,s=r.z+Math.cos(e*.2+r.ph)*.25+r.dz*i*5,c=r.y+Math.sin(e*.6+r.ph)*.12+i*1.5;a<=.01||Xg(r.heavy?t:n,o,c,s,r.ph,a,a*.62)}t.instanceMatrix.needsUpdate=!0,n.instanceMatrix.needsUpdate=!0,t.visible=t.count>0,n.visible=n.count>0}animateSmoke(e){let t=this.smokeMesh;t.count=0;for(let n=0;n<this.volcanoes.length;n++){let r=this.volcanoes[n];for(let i=0;i<7;i++){let a=(e*.35+i/7+n*.13)%1,o=(.15+a*.5)*(a<.85?1:(1-a)/.15);Xg(t,r.x+Math.sin(i*2.1+e*.5)*.25*a,r.y+a*2.6,r.z-a*.6,i,o)}}t.instanceMatrix.needsUpdate=!0,t.visible=t.count>0}resize(e,t){this.width=Math.max(1,e),this.height=Math.max(1,t);let n=yg*(this.height/this.width);this.camera.left=-6.3,this.camera.right=yg,this.camera.top=n,this.camera.bottom=-n,this.camera.updateProjectionMatrix()}pan(e,t){let n=this.width/(2*yg);this.follow=!1,this.velU=this.velV=0,this.target.v-=e/n,this.target.u+=t/(n*Math.sin(vg)),this.clampTarget()}fling(e,t){let n=this.width/(2*yg);this.velV=-e/n,this.velU=t/(n*Math.sin(vg))}recenter(){this.follow=!0}clampTarget(){this.target.u=Nt(this.target.u,this.first===1?-11.5:$g(this.first),this.maxU),this.target.v=Nt(this.target.v,-4.5,4.5)}placeCamera(){let{u:e,v:t}=this.target,n=Og(e,t),r=kg(e,t),i=Math.cos(vg),a=Math.sin(vg);this.camera.position.set(n+xg*i*bg,gg+a*bg,r+xg*i*bg),this.camera.lookAt(n,gg,r),this.camera.updateMatrixWorld(),this.water.position.set(Math.round(n/10)*10,0,Math.round(r/10)*10)}toScreen(e,t,n,r){this.v3.set(Og(e,t),n,kg(e,t)).project(this.camera),r.x=(this.v3.x+1)*.5*this.width,r.y=(1-this.v3.y)*.5*this.height}labelY(e){return _g}},r_;(function(e){e.Small=`small`,e.Medium=`medium`})(r_||={});var i_;(function(e){e.General=`General`,e.ParentalGuidance=`ParentalGuidance`,e.Teen=`Teen`,e.MatureAudience=`MatureAudience`})(i_||={});var a_;(function(e){e.SizeChanged=`bannerAdSizeChanged`,e.Loaded=`bannerAdLoaded`,e.FailedToLoad=`bannerAdFailedToLoad`,e.Opened=`bannerAdOpened`,e.Closed=`bannerAdClosed`,e.AdImpression=`bannerAdImpression`,e.AdPaid=`bannerAdPaid`})(a_||={});var o_;(function(e){e.TOP_CENTER=`TOP_CENTER`,e.CENTER=`CENTER`,e.BOTTOM_CENTER=`BOTTOM_CENTER`})(o_||={});var s_;(function(e){e.BANNER=`BANNER`,e.FULL_BANNER=`FULL_BANNER`,e.LARGE_BANNER=`LARGE_BANNER`,e.MEDIUM_RECTANGLE=`MEDIUM_RECTANGLE`,e.LEADERBOARD=`LEADERBOARD`,e.ADAPTIVE_BANNER=`ADAPTIVE_BANNER`,e.SMART_BANNER=`SMART_BANNER`})(s_||={});var c_;(function(e){e.Loaded=`interstitialAdLoaded`,e.FailedToLoad=`interstitialAdFailedToLoad`,e.Showed=`interstitialAdShowed`,e.FailedToShow=`interstitialAdFailedToShow`,e.Dismissed=`interstitialAdDismissed`,e.AdImpression=`interstitialAdImpression`})(c_||={});var l_;(function(e){e.Loaded=`onRewardedInterstitialAdLoaded`,e.FailedToLoad=`onRewardedInterstitialAdFailedToLoad`,e.Showed=`onRewardedInterstitialAdShowed`,e.FailedToShow=`onRewardedInterstitialAdFailedToShow`,e.Dismissed=`onRewardedInterstitialAdDismissed`,e.Rewarded=`onRewardedInterstitialAdReward`,e.AdImpression=`onRewardedInterstitialAdImpression`})(l_||={});var u_;(function(e){e.adClicked=`onRewardedVideoAdClicked`,e.Loaded=`onRewardedVideoAdLoaded`,e.FailedToLoad=`onRewardedVideoAdFailedToLoad`,e.Showed=`onRewardedVideoAdShowed`,e.FailedToShow=`onRewardedVideoAdFailedToShow`,e.Dismissed=`onRewardedVideoAdDismissed`,e.Rewarded=`onRewardedVideoAdReward`,e.AdImpression=`onRewardedVideoAdImpression`})(u_||={});var d_;(function(e){e[e.DISABLED=0]=`DISABLED`,e[e.EEA=1]=`EEA`,e[e.NOT_EEA=2]=`NOT_EEA`,e[e.US=3]=`US`,e[e.OTHER=4]=`OTHER`})(d_||={});var f_;(function(e){e[e.Unknown=0]=`Unknown`,e[e.Estimated=1]=`Estimated`,e[e.PublisherProvided=2]=`PublisherProvided`,e[e.Precise=3]=`Precise`})(f_||={});var p_;(function(e){e.Loaded=`appOpenAdLoaded`,e.FailedToLoad=`appOpenAdFailedToLoad`,e.Opened=`appOpenAdOpened`,e.Closed=`appOpenAdClosed`,e.FailedToShow=`appOpenAdFailedToShow`,e.AdImpression=`appOpenAdImpression`})(p_||={});var m_;(function(e){e.Loaded=`nativeAdLoaded`,e.FailedToLoad=`nativeAdFailedToLoad`,e.Clicked=`nativeAdClicked`,e.AdImpression=`nativeAdImpression`,e.Opened=`nativeAdOpened`,e.Closed=`nativeAdClosed`,e.AdPaid=`nativeAdPaid`})(m_||={});var h_=pe(`AdMob`,{web:()=>e(()=>import(`./web-DvtRLrjK.js`).then(e=>new e.AdMobWeb),[])}),g_={banner:`ca-app-pub-3940256099942544/9214589741`,interstitial:`ca-app-pub-3940256099942544/1033173712`,rewarded:`ca-app-pub-3940256099942544/5224354917`},__=!0,v_=3e4,y_=6e5,b_=`tinylegion.lastAd`;function x_(){try{return Number(localStorage.getItem(b_))||0}catch{return 0}}var S_=new class{ready=!1;interReady=!1;rewardReady=!1;earned=!1;onClose=null;bannerMade=!1;bannerShown=!1;bannerWanted=!1;bannerRetry=0;free=!1;notifying=!1;privacyRequired=!1;lastAd=x_();bannerHeight=0;onChange=null;get native(){return fe.isNativePlatform()}get adFree(){return this.free}set adFree(e){this.free=e,this.banner(this.bannerWanted)}get privacyOptions(){return this.privacyRequired}async privacy(){try{await h_.showPrivacyOptionsForm()}catch{return}await this.init()}get canReward(){return this.rewardReady}async init(){if(this.native&&!this.ready)try{let e=await h_.requestConsentInfo();if(e.isConsentFormAvailable&&e.status===M.REQUIRED&&(e=await h_.showConsentForm()),this.privacyRequired=String(e.privacyOptionsRequirementStatus)===`REQUIRED`,!e.canRequestAds)return;await h_.initialize({initializeForTesting:__}),await h_.addListener(c_.Loaded,()=>this.interReady=!0),await h_.addListener(c_.Showed,()=>this.stampAd()),await h_.addListener(c_.FailedToLoad,()=>this.retry(()=>this.loadInterstitial())),await h_.addListener(c_.Dismissed,()=>this.closed()),await h_.addListener(c_.FailedToShow,()=>this.closed()),await h_.addListener(u_.Loaded,()=>{this.rewardReady=!0,this.notify()}),await h_.addListener(u_.Showed,()=>this.stampAd()),await h_.addListener(u_.FailedToLoad,()=>this.retry(()=>this.loadRewarded())),await h_.addListener(u_.Rewarded,()=>this.earned=!0),await h_.addListener(u_.Dismissed,()=>this.closed()),await h_.addListener(u_.FailedToShow,()=>this.closed()),await h_.addListener(a_.SizeChanged,e=>{this.bannerHeight=this.bannerShown?e.height:0,this.notify()}),await h_.addListener(a_.FailedToLoad,()=>this.bannerLost()),this.ready=!0,this.loadInterstitial(),this.loadRewarded(),this.bannerWanted&&this.banner(!0)}catch{}}banner(e){this.bannerWanted=e;let t=e&&!this.free;this.ready&&t!==this.bannerShown&&(this.bannerShown=t,t&&!this.bannerMade?(this.bannerMade=!0,h_.showBanner({adId:g_.banner,adSize:s_.ADAPTIVE_BANNER,position:o_.BOTTOM_CENTER,margin:0,isTesting:__}).catch(()=>this.bannerLost())):t?h_.resumeBanner().catch(()=>this.bannerLost()):(this.free?(this.bannerMade=!1,h_.removeBanner().catch(()=>void 0)):h_.hideBanner().catch(()=>void 0),this.bannerHeight=0,this.notify()))}bannerLost(){this.bannerMade=!1,this.bannerShown=!1,this.bannerHeight=0,this.notify(),window.clearTimeout(this.bannerRetry),this.bannerRetry=window.setTimeout(()=>this.banner(this.bannerWanted),v_)}notify(){this.notifying||(this.notifying=!0,queueMicrotask(()=>{this.notifying=!1,this.onChange?.()}))}stampAd(){this.lastAd=Date.now();try{localStorage.setItem(b_,String(this.lastAd))}catch{}}async interstitial(){let e=Date.now()-this.lastAd;if(!this.ready||!this.interReady||this.free||e>=0&&e<y_)return;this.interReady=!1;let t=this.waitClose();h_.showInterstitial().catch(()=>this.closed()),await t,this.loadInterstitial()}async rewarded(){if(!this.ready||!this.rewardReady)return!1;this.rewardReady=!1,this.earned=!1,this.notify();let e=this.waitClose();return h_.showRewardVideoAd().then(()=>this.earned=!0).catch(()=>this.closed()),await e,this.loadRewarded(),this.earned}loadInterstitial(){this.interReady=!1,h_.prepareInterstitial({adId:g_.interstitial,isTesting:__}).catch(()=>void 0)}loadRewarded(){this.rewardReady=!1,h_.prepareRewardVideoAd({adId:g_.rewarded,isTesting:__}).catch(()=>void 0)}retry(e){window.setTimeout(e,v_)}waitClose(){return new Promise(e=>{this.onClose=e,window.setTimeout(()=>{this.onClose===e&&this.closed()},12e4)})}closed(){let e=this.onClose;this.onClose=null,e?.()}},C_=256,w_=128,T_={captain:()=>[kh(1,v[1].base).geo],grunt:()=>[Zh(0).geo],brute:()=>[Zh(1).geo],archer:()=>[Zh(3).geo],shield:()=>[Zh(4).geo,Fh().geo.clone().translate(-.16,0,-.34)],kamikaze:()=>[Zh(5).geo],skeleton:()=>[Zh(6).geo],ogre:()=>[sg(0).geo],golem:()=>[sg(1).geo],necro:()=>[sg(2).geo],dragon:()=>[sg(3).geo],wolf:()=>[Zh(7).geo],shaman:()=>[Zh(8).geo],slime:()=>[Zh(9).geo],slinger:()=>[Zh(11).geo],troll:()=>[Zh(12).geo],bat:()=>[Zh(13).geo],ghost:()=>[Zh(14).geo],tortoise:()=>[Zh(15).geo],banner:()=>[Zh(16).geo],boar:()=>[Zh(17).geo],spiderling:()=>[Zh(18).geo],kraken:()=>[sg(4).geo],spider:()=>[sg(5).geo],warking:()=>[sg(6).geo]},E_=class{renderer;cache={};kit=null;warming=!1;constructor(e){this.renderer=e}get(e){return this.cache[e]??=this.render(e)}all(){for(let e of Object.keys(T_))this.get(e);return this.release(),this.cache}warm(e){if(this.warming)return;this.warming=!0;let t=e=>typeof window.requestIdleCallback==`function`?window.requestIdleCallback(e,{timeout:2e3}):setTimeout(e,200),n=()=>{let r=Object.keys(T_).find(e=>!this.cache[e]);r?(e()&&this.get(r),t(n)):(this.release(),this.warming=!1)};t(n)}render(e){let t=T_[e];if(!t)return``;let n=this.kit??=D_(),r=this.renderer,i=new sa,a=t();for(let e of a)i.add(new Fo(e,n.mat));n.scene.add(i);let o=new ja().setFromObject(i),s=o.getCenter(new V),c=o.getSize(new V),l=Math.max(c.y*.62,c.x*.55,.35)/Math.tan(ci.degToRad(14)),u=new V(-.45,.32,-1).normalize();n.cam.position.copy(s).addScaledVector(u,l),n.cam.lookAt(s);let d=r.getRenderTarget(),f=r.getClearColor(new H),p=r.getClearAlpha();r.setRenderTarget(n.rt),r.setClearColor(0,0),r.clear(),r.render(n.scene,n.cam),r.readRenderTargetPixels(n.rt,0,0,C_,C_,n.pixels),r.setRenderTarget(d),r.setClearColor(f,p);let m=n.bctx.createImageData(C_,C_);for(let e=0;e<C_;e++)m.data.set(n.pixels.subarray((255-e)*C_*4,(C_-e)*C_*4),e*C_*4);n.bctx.putImageData(m,0,0),n.sctx.clearRect(0,0,w_,w_),n.sctx.drawImage(n.big,0,0,w_,w_),n.scene.remove(i);for(let e of a)e.dispose();return n.small.toDataURL(`image/png`)}release(){this.kit&&!Object.keys(T_).some(e=>!this.cache[e])&&(this.kit.rt.dispose(),this.kit.mat.dispose(),this.kit=null)}};function D_(){let e=new Ai(C_,C_);e.texture.colorSpace=_r;let t=new ga;t.add(new dl(16777215,9075302,2.1));let n=new El(16773852,2.3);n.position.set(-3,5,-4),t.add(n);let r=document.createElement(`canvas`);r.width=r.height=C_;let i=document.createElement(`canvas`);i.width=i.height=w_;let a=i.getContext(`2d`);return a.imageSmoothingQuality=`high`,{rt:e,scene:t,big:r,small:i,sctx:a,cam:new Cl(28,1,.05,50),mat:new Hc({vertexColors:!0}),pixels:new Uint8Array(C_*C_*4),bctx:r.getContext(`2d`)}}var O_=.1,k_=.07,A_=60,j_=1.42,M_=A_*j_**15,N_=1500,P_=e=>Math.round(e<15?A_*j_**+e:M_+N_*(e-15)),F_=e=>1+e*O_,I_=e=>1+e*k_,L_=e=>12+e.recruits*3,R_=e=>e.recruits+e.forge+e.drill,z_=1/1.5,B_=e=>Math.round(350*V_(Math.floor(e/10)+1)),V_=e=>1+.2*(e-1),H_=e=>Math.round(8*e**1.6),U_=e=>Math.round(40+6*e),W_=[165,185,180,300,430,290,440,370,440,800],G_=1.25,K_=.6,q_=[];function J_(e){let t=0,n=[0,0,0];for(let r=q_.length;r<=e;r++){for(;;){let e=-1;for(let t=0;t<3;t++)(e<0||n[t]<n[e])&&(e=t);if(e<0||t<P_(n[e]))break;t-=P_(n[e]),n[e]++}q_.push(n[0]+n[1]+n[2]);let e=Math.floor(r/10)+1;t+=(W_[r%10]*V_(e)*G_+U_(r))*K_}}function Y_(e){return e>=q_.length&&(q_.length=0,J_(Math.max(e,200))),q_[e]}function X_(e){let t=Y_(e)/3;return{dmg:F_(t),rate:I_(t)}}var Z_=[{id:`club`,boss:0,apply:(e,t)=>e.dmgMult+=.04*t},{id:`stoneheart`,boss:1,apply:(e,t)=>e.armor+=.03*t},{id:`grimoire`,boss:2,apply:(e,t)=>e.critChance+=.03*t},{id:`scale`,boss:3,apply:(e,t)=>e.rangeMult*=1+.05*t},{id:`pearl`,boss:4,apply:(e,t)=>e.goldMult+=.06*t},{id:`silk`,boss:5,apply:(e,t)=>e.rateMult+=.03*t},{id:`crown`,boss:6,apply:()=>void 0}],Q_={club:.04,stoneheart:.03,grimoire:.03,scale:.05,pearl:.06,silk:.03,crown:2},$_=A(Z_,`relic`,[`name`]).map(e=>Object.assign(e,{desc:t=>e.id===`crown`?C(`relic.crown.desc`,{n:Q_.crown*t}):C(`relic.${e.id}.desc`,{v:x(Q_[e.id]*t)})})),ev=e=>$_.find(t=>t.boss===e);function tv(e,t){for(let n of $_){let r=t[n.id]??0;r>0&&n.apply(e,r)}}var nv=e=>2*(e.crown??0),rv=A([{id:`fanfare`,icon:`dmg`,price:150,apply:e=>e.dmgMult*=1.3},{id:`drums`,icon:`rate`,price:150,apply:e=>e.rateMult*=1.25},{id:`levy`,icon:`reinforce`,price:120,apply:()=>void 0,soldiers:1.5},{id:`blessing`,icon:`armor`,price:150,apply:e=>e.armor+=.25},{id:`purse`,icon:`gold`,price:200,apply:e=>e.goldMult+=.5}],`boost`,[`name`,`desc`]),iv=(e,t)=>Math.round(e.price*V_(Math.floor(t/10)+1));function av(e,t,n=0){for(let r=0;r<3;r++){let i=(e>>16-r*8&255)/255;t[n+r]=i<=.04045?i/12.92:((i+.055)/1.055)**2.4}}var ov=new Float32Array(3),sv=class{n=0;x=new Float32Array(o);y=new Float32Array(o);z=new Float32Array(o);vx=new Float32Array(o);vy=new Float32Array(o);vz=new Float32Array(o);life=new Float32Array(o);max=new Float32Array(o);size=new Float32Array(o);spin=new Float32Array(o);rgb=new Float32Array(o*3);clear(){this.n=0}density=1;burst(e,t,n,r,i,a=3.5,o=.12,s=.6,c=4){av(i,ov),r=Math.max(1,Math.round(r*this.density));for(let i=0;i<r;i++){if(this.n>=1800)return;let r=this.n++;this.x[r]=e,this.y[r]=t,this.z[r]=n,this.vx[r]=(Math.random()-.5)*2*a,this.vz[r]=(Math.random()-.5)*2*a,this.vy[r]=c+Math.random()*a;let i=s*(.7+Math.random()*.6);this.life[r]=i,this.max[r]=i,this.size[r]=o*(.7+Math.random()*.6),this.spin[r]=Math.random()*10,this.rgb[r*3]=ov[0],this.rgb[r*3+1]=ov[1],this.rgb[r*3+2]=ov[2]}}update(e,t){for(let n=this.n-1;n>=0;n--){if(this.life[n]-=e,this.life[n]<=0){this.remove(n);continue}this.vy[n]-=22*e,this.x[n]+=this.vx[n]*e,this.y[n]+=this.vy[n]*e,this.z[n]+=(this.vz[n]+t)*e;let r=this.size[n]*.5;this.y[n]<r&&(this.y[n]=r,this.vy[n]*=-.35,this.vx[n]*=.6,this.vz[n]*=.6)}}remove(e){let t=--this.n;e!==t&&(this.x[e]=this.x[t],this.y[e]=this.y[t],this.z[e]=this.z[t],this.vx[e]=this.vx[t],this.vy[e]=this.vy[t],this.vz[e]=this.vz[t],this.life[e]=this.life[t],this.max[e]=this.max[t],this.size[e]=this.size[t],this.spin[e]=this.spin[t],this.rgb[e*3]=this.rgb[t*3],this.rgb[e*3+1]=this.rgb[t*3+1],this.rgb[e*3+2]=this.rgb[t*3+2])}},cv=class{list=[];clear(){this.list.length=0}add(e,t,n,r,i,a=.9,o=1.1){this.list.length>50&&this.list.shift(),this.list.push({text:e,x:t,y:n,z:r,vy:2.6,life:o,max:o,size:a,r:(i>>16&255)/255,g:(i>>8&255)/255,b:(i&255)/255})}update(e){for(let t of this.list)t.life-=e,t.y+=t.vy*e,t.vy*=Math.max(0,1-2.5*e);this.list.length&&this.list[0].life<=0&&(this.list=this.list.filter(e=>e.life>0))}},lv=class{list=[];clear(){this.list.length=0}add(e,t,n,r){this.list.length>=48&&this.list.shift(),this.list.push({x1:e,z1:t,x2:n,z2:r,life:.14})}update(e,t){for(let n of this.list)n.life-=e,n.z1+=t*e,n.z2+=t*e;this.list.length&&this.list.some(e=>e.life<=0)&&(this.list=this.list.filter(e=>e.life>0))}},uv=34,dv=class{n=0;x=new Float32Array(s);z=new Float32Array(s);vx=new Float32Array(s);vz=new Float32Array(s);dmg=new Float64Array(s);life=new Float32Array(s);age=new Float32Array(s);aoe=new Float32Array(s);pierce=new Int8Array(s);flags=new Uint8Array(s);tier=new Uint8Array(s);lastHit=new Int32Array(s);clear(){this.n=0}fire(e,t,n,r,i,a=0,o=!1){let s=v[n],c=i.multishot,l=s.speed*i.speedMult,u=Math.max(s.aoe,i.explosive>0?.6+.35*i.explosive:0);for(let d=0;d<c;d++){if(this.n>=2200)return;let f=this.n++,p=a+(c>1?(d-(c-1)/2)*.075:0)+(Math.random()-.5)*.03;this.x[f]=e,this.z[f]=t,this.vx[f]=Math.sin(p)*l,this.vz[f]=-Math.cos(p)*l;let m=r,h=0;i.critChance>0&&Math.random()<i.critChance&&(m*=i.critMult,h|=1),i.frost>0&&(h|=2),i.burn>0&&(h|=4),o&&(h|=8),this.dmg[f]=m,this.life[f]=Math.min(s.range*i.rangeMult,uv)*1/l,this.age[f]=0,this.aoe[f]=u,this.pierce[f]=s.pierce+i.pierce+1,this.flags[f]=h,this.tier[f]=n,this.lastHit[f]=-1}}update(e,t){let n=t.enemies;for(let r=this.n-1;r>=0;r--){let i=this.z[r];this.x[r]+=this.vx[r]*e,this.z[r]+=this.vz[r]*e,this.life[r]-=e,this.age[r]+=e;let a=this.x[r],o=this.z[r];if(this.life[r]<=0||a<-5||a>5){this.remove(r);continue}let s=n.queryHit(a,Math.min(o,i),Math.max(o,i),this.lastHit[r]);if(s>=0){if(!t.hitEnemy(s,this.dmg[r],this.flags[r],this.aoe[r],a,o,this.tier[r])&&this.pierce[r]>0)this.pierce[r]--,this.lastHit[r]=n.uid[s];else{this.remove(r);continue}}!(this.flags[r]&8)&&t.props.hitTest(a,o,i,this.dmg[r],t)&&this.remove(r)}}remove(e){let t=--this.n;e!==t&&(this.x[e]=this.x[t],this.z[e]=this.z[t],this.vx[e]=this.vx[t],this.vz[e]=this.vz[t],this.dmg[e]=this.dmg[t],this.life[e]=this.life[t],this.age[e]=this.age[t],this.aoe[e]=this.aoe[t],this.pierce[e]=this.pierce[t],this.flags[e]=this.flags[t],this.tier[e]=this.tier[t],this.lastHit[e]=this.lastHit[t])}},fv=30,pv=2,mv=class e{n=new Float64Array(v.length);value=0;peak=0;topTier=0;keep=10;cx=0;radius=0;onRemove=null;bodies=0;x=new Float32Array(200);z=new Float32Array(200);cd=new Float32Array(200);shot=new Float32Array(200).fill(9);phase=new Float32Array(200);face=new Float32Array(200);tier=new Uint8Array(200);topScale=1;ox=new Float32Array(200);oz=new Float32Array(200);order=new Int32Array(200);orderN=-1;bx=new Float32Array(200);bz=new Float32Array(200);bcd=new Float32Array(200);bsh=new Float32Array(200);bph=new Float32Array(200);bfa=new Float32Array(200);bt=new Uint8Array(200);pick=[];constructor(){let e=f*.53;for(let t=0;t<200;t++){let n=e*Math.sqrt(t+.35),r=t*2.399963;this.ox[t]=Math.cos(r)*n,this.oz[t]=Math.sin(r)*n*.9}}cloneRanks(){let t=new e;return t.n.set(this.n),t.keep=this.keep,t.value=this.value,t.topTier=this.topTier,t}spread=1;depth=1;shift=0;reset(e,t=0,n=1){this.spread=n,this.depth=1,this.shift=0,this.n.fill(0),this.value=0,this.peak=0,this.topTier=0,this.keep=10,this.bodies=0,this.cx=t,this.gain(e,0,0),this.ensureOrder();for(let e=0;e<this.bodies;e++)this.x[e]=this.slotX(e),this.z[e]=this.slotZ(e)}parade(e,t,n,r){this.reset(0,t,n),this.depth=r;let i=0;for(let t of e)this.n[t.tier]=t.count,i+=t.count*ie(t.tier),this.topTier=Math.max(this.topTier,t.tier);this.value=this.peak=i,this.sync(`merge`,0,0),this.ensureOrder();let a=0;for(let e=0;e<this.bodies;e++)a+=this.ox[this.order[e]];this.shift=a/Math.max(1,this.bodies);for(let e=0;e<this.bodies;e++)this.x[e]=this.slotX(e),this.z[e]=this.slotZ(e)}gain(e,t,n){e=Math.floor(e),!(e<=0)&&(this.n[0]+=e,this.normalize(),this.sync(`merge`,t,n))}lose(e,t,n){if(e=Math.min(Math.floor(e),this.value),e<=0)return 0;let r=e;for(let e=0;e<=y&&r>0;e++){let t=Math.min(this.n[e],Math.floor(r/ie(e)));this.n[e]-=t,r-=t*ie(e)}if(r>0){let e=0;for(;e<=y&&this.n[e]<=0;)e++;if(e<=y){--this.n[e];let t=ie(e)-r;for(let n=e-1;n>=0;n--){let e=Math.max(0,Math.floor(t/ie(n)));this.n[n]+=e,t-=e*ie(n)}}}return this.normalize(),this.sync(`death`,t,n),e}setKeep(e){this.keep=e,this.normalize(),this.sync(`merge`,this.cx,0)}normalize(){for(let e=0;e<4;e++){let e=0;for(let t=0;t<=y;t++)this.n[t]>0&&(e=t);let t=Math.max(0,e-3);for(let n=t;n<e;n++)for(;this.n[n]<this.keep;){let e=n+1;for(;e<=y&&this.n[e]<=0;)e++;if(e>y)break;--this.n[e];for(let t=e-1;t>n;t--)this.n[t]+=9;this.n[n]+=10}for(let e=0;e<y;e++){let n=e<t?0:this.keep;if(this.n[e]>=n+10){let t=this.n[e]-n,r=t%10;this.n[e]=n+r,this.n[e+1]+=(t-r)/10}}let n=0;for(let e=0;e<=y;e++)this.n[e]>0&&(n=e);if(n===e)break}let e=0;this.topTier=0;for(let t=0;t<=y;t++)this.n[t]>0||(this.n[t]=0),e+=this.n[t]*ie(t),this.n[t]>0&&(this.topTier=t);this.value=e,this.peak=Math.max(this.peak,e)}sync(e,t,n){let r=0;for(let i=0;i<=y;i++){let a=i>=this.topTier-3-pv?Math.min(this.n[i],i===y||i===this.topTier?fv:this.keep+10-1):0;i===this.topTier&&(this.topScale=this.n[i]/Math.max(1,a));let o=this.pick;o.length=0;for(let e=0;e<this.bodies;e++)this.tier[e]===i&&o.push(e);if(o.length>a){o.sort((e,r)=>hv(this.x[e],this.z[e],t,n)-hv(this.x[r],this.z[r],t,n));for(let t=0;t<o.length-a;t++)this.onRemove?.(this.x[o[t]],this.z[o[t]],i,e);o.splice(0,o.length-a)}for(let e of o){if(r>=200)break;this.bx[r]=this.x[e],this.bz[r]=this.z[e],this.bcd[r]=this.cd[e],this.bsh[r]=this.shot[e],this.bph[r]=this.phase[e],this.bfa[r]=this.face[e],this.bt[r++]=i}for(let e=o.length;e<a&&r<200;e++)this.bx[r]=Nt(t+(Math.random()-.5)*1.2,-4,4),this.bz[r]=n+(Math.random()-.5)*1.2,this.bcd[r]=Math.random()*.4,this.bsh[r]=9,this.bph[r]=Math.random()*Math.PI*2,this.bfa[r]=0,this.bt[r++]=i}this.x.set(this.bx.subarray(0,r)),this.z.set(this.bz.subarray(0,r)),this.cd.set(this.bcd.subarray(0,r)),this.shot.set(this.bsh.subarray(0,r)),this.phase.set(this.bph.subarray(0,r)),this.face.set(this.bfa.subarray(0,r)),this.tier.set(this.bt.subarray(0,r)),this.bodies=r}ensureOrder(){let e=this.bodies;if(this.orderN===e)return;let t=Array.from({length:e},(e,t)=>t).sort((e,t)=>this.oz[e]-this.oz[t]);for(let n=0;n<e;n++)this.order[n]=t[n];this.orderN=e}placer=null;slotX(e){return this.placer?this.placer(e,this.bodies)[0]:Nt(this.cx+(this.ox[this.order[e]]-this.shift)*this.spread,-3.75,3.75)}slotZ(e){return this.placer?this.placer(e,this.bodies)[1]:this.oz[this.order[e]]*this.spread*this.depth}nearest(e,t){let n=-1,r=1/0;for(let i=0;i<this.bodies;i++){let a=hv(this.x[i],this.z[i],e,t);a<r&&(r=a,n=i)}return n}frontZ(){return this.placer?this.edgeZ(-1):-this.radius*.9}backZ(){return this.placer?this.edgeZ(1):this.radius*.9}edgeZ(e){let t=e<0?1/0:-1/0;for(let n=0;n<this.bodies;n++)t=e<0?Math.min(t,this.z[n]):Math.max(t,this.z[n]);return Number.isFinite(t)?t+e*.3:0}move(e,t){this.ensureOrder(),this.radius=f*.53*this.spread*Math.sqrt(Math.max(1,this.bodies)),this.cx=Ft(this.cx,Nt(t,-3.7,3.7),14,e);for(let t=0;t<this.bodies;t++){let n=this.slotX(t)-this.x[t],r=this.slotZ(t)-this.z[t],i=Math.hypot(n,r);if(i<1e-4)continue;let a=Math.min(i*12,17)*e,o=a>=i?1:a/i;this.x[t]+=n*o,this.z[t]+=r*o}}};function hv(e,t,n,r){let i=e-n,a=t-r;return i*i+a*a}var gv=[{body:`javelin`,glow:0,width:0,trail:0,flash:0,flashSize:0,spark:14070922,sparks:3,solid:!0},{body:`bolt`,glow:0,width:0,trail:0,flash:0,flashSize:0,spark:15067115,sparks:3,solid:!0},{body:`ball`,glow:16754253,width:.12,trail:.45,flash:16760944,flashSize:.55,spark:16765562,sparks:4,solid:!0},{body:`tracer`,glow:16747546,width:.12,trail:.9,flash:16765562,flashSize:.4,spark:16757575,sparks:3},{body:`tracer`,glow:16767050,width:.11,trail:1.7,flash:16773296,flashSize:.45,spark:16774048,sparks:4},{body:`beam`,glow:2282478,width:.3,trail:2.4,flash:9435391,flashSize:.5,spark:8386303,sparks:5},{body:`orb`,glow:13863935,width:.62,trail:1,flash:15055103,flashSize:.7,spark:13863935,sparks:8},{body:`beam`,glow:16735631,width:.34,trail:3.4,flash:16751285,flashSize:.7,spark:16748464,sparks:6},{body:`dart`,glow:3462041,width:.26,trail:1.1,flash:7268279,flashSize:.45,spark:7268279,sparks:5},{body:`star`,glow:16774054,width:.55,trail:1.3,flash:16775126,flashSize:.7,spark:16769126,sparks:8},{body:`void`,glow:9133302,width:.7,trail:.9,flash:10980346,flashSize:.8,spark:12891645,sparks:10},{body:`shard`,glow:3003583,width:.32,trail:1.7,flash:10090212,flashSize:.6,spark:6220500,sparks:6},{body:`orb`,glow:16738847,width:.75,trail:1.7,flash:16756839,flashSize:.8,spark:16755021,sparks:9},{body:`beam`,glow:16765503,width:.44,trail:4.4,flash:16773544,flashSize:.8,spark:16769126,sparks:6},{body:`ring`,glow:6333946,width:.55,trail:1,flash:12573694,flashSize:.6,spark:9684477,sparks:7},{body:`ring`,glow:12248829,width:.5,trail:1.5,flash:16777215,flashSize:.6,spark:14742270,sparks:7},{body:`rock`,glow:16731418,width:.7,trail:1.9,flash:16747085,flashSize:.9,spark:16742938,sparks:10,solid:!0},{body:`dart`,glow:8490232,width:.36,trail:1.6,flash:13095678,flashSize:.5,spark:10859772,sparks:5},{body:`orb`,glow:15235577,width:.9,trail:1.1,flash:16109822,flashSize:.9,spark:15772668,sparks:10},{body:`orb`,glow:13095678,width:.55,trail:3.4,flash:14739455,flashSize:.8,spark:14739455,sparks:8},{body:`star`,glow:16775126,width:.95,trail:1.6,flash:16777215,flashSize:1.1,spark:16774054,sparks:12,rainbow:!0}],_v=16732120,vv=8246268,yv=16742938;function bv(e,t,n){let r=r=>{let i=e>>r&255,a=t>>r&255;return Math.round(i+(a-i)*n)<<r};return r(16)|r(8)|r(0)}var xv=e=>e.rotateX(Math.PI/2);function Sv(e){switch(e){case`javelin`:return G([W(xv(K(.022,.022,.55,5)).translate(0,0,-.03),n.wood),W(xv(Y(.045,.13,4)).translate(0,0,.31),n.iron),W(xv(K(.028,.028,.04,5)).translate(0,0,.22),n.woodDark)]);case`bolt`:return G([W(xv(K(.02,.02,.45,5)).translate(0,0,-.03),n.wood),W(xv(Y(.04,.1,4)).translate(0,0,.24),n.iron),W(J(.09,.006,.11).translate(0,0,-.21),16117985),W(J(.006,.09,.11).translate(0,0,-.21),16117985)]);case`ball`:return G([W(q(.06,0),5395035)]);case`tracer`:return G([W(xv(K(.026,.026,.42,6)),16777215),W(q(.026,0).translate(0,0,.21),16777215)]);case`beam`:return G([W(xv(K(.018,.018,.62,6)),16777215)]);case`orb`:return G([W(q(.085,0),16777215)]);case`dart`:return G([W(new Dc(.06,0).scale(1,1,2.6),16777215)]);case`star`:{let e=new Dc(.11,0),t=new Dc(.11,0).rotateY(Math.PI/4).rotateX(Math.PI/4);return G([W(e,16774054),W(t,16769126)])}case`shard`:{let e=new Dc(.07,0).scale(1,1,2.8),t=new Dc(.035,0).scale(1,1,2).translate(.05,.02,-.06),n=new Dc(.035,0).scale(1,1,2).translate(-.05,-.02,-.06);return G([W(e,16777215),W(t,16777215),W(n,16777215)])}case`ring`:return G([W(new jc(.075,.022,4,10).rotateX(Math.PI/2),16777215)]);case`rock`:return G([W(new cs(.08,0),4144966),W(q(.05,0).translate(0,0,.03),16742938)]);default:return G([W(q(.065,0),1973067)])}}var Cv=[`javelin`,`bolt`,`ball`,`tracer`,`beam`,`orb`,`dart`,`star`,`void`,`shard`,`ring`,`rock`],wv=.85,Tv=25,Ev=22,Dv=.9,Ov=6,kv=1.2,Av=1.12,jv=4,Mv=class{list=[];dropped=0;picked=0;banked=0;run=0;runT=0;batch=0;batchT=0;clear(){this.list.length=0,this.dropped=this.picked=this.banked=0,this.run=this.runT=this.batch=this.batchT=0}drop(e,t,n,r){if(!(n<=0)){n*=Av,this.dropped+=n;for(let i of this.list)if(!(i.state>1||Math.abs(i.x-e)>wv||Math.abs(i.z-t)>wv||i.value*r>=Tv)){i.value+=n,i.bump=1;return}this.spawn(e,t,n,.6)}}burst(e,t,n,r,i){if(!(n<=0)){n*=Av,this.dropped+=n;for(let a=0;a<r;a++)this.spawn(e,t,n/r,i)}}spawn(e,t,n,r){if(this.list.length>=200){for(let e=this.list.length-1;e>=0;e--)if(this.list[e].state<=1){this.list[e].value+=n;return}return}let i=Math.random()*Math.PI*2,a=r*(.35+Math.random()*.65);this.list.push({x:e,y:.7,z:t,vx:Math.cos(i)*a*2.2,vy:5+Math.random()*2.5,vz:Math.sin(i)*a*1.6,value:n,state:0,t:0,phase:Math.random()*6.28,bump:0})}update(e,t){let n=t.squad,r=n.radius*.9+.35,i=n.radius+Dv,a=n.backZ()+kv,o=!1;for(let s of this.list){if(s.t+=e,s.bump>0&&(s.bump=Math.max(0,s.bump-e*4)),s.state===2){let t=Math.min(1,e*12);s.x+=(n.cx-s.x)*t,s.z+=-s.z*t,s.y+=(1.4-s.y)*t,s.t>.28&&(s.state=jv)}else if(s.state===3)s.z+=t.scroll*e,s.t>.4&&(s.state=jv);else{if(s.state===0?(s.vy-=Ev*e,s.x=Nt(s.x+s.vx*e,-3.7,3.7),s.y+=s.vy*e,s.z+=(s.vz+t.scroll)*e,s.y<=.22&&s.vy<0&&(s.y=.22,s.state=1,s.t=0)):s.z+=t.scroll*e,n.bodies>0&&s.state===1&&Math.abs(s.z)<i){let a=s.x-n.cx;Math.abs(a)<i&&(s.x-=Math.sign(a)*Math.min(Math.abs(a),Ov*e),a*a+s.z*s.z<r*r&&this.take(s,t))}s.state<=1&&s.z>a&&(s.state=3,s.t=0)}s.state===jv&&(o=!0)}if(o&&(this.list=this.list.filter(e=>e.state!==jv)),this.runT>0&&(this.runT-=e),this.batchT>0&&(this.batchT-=e,this.batchT<=0)){let e=this.batch*t.goldScale;e>=1&&t.floaters.add(`+${T(Math.floor(e))}`,n.cx,2.3,0,16498468,e>=20?1:.75),this.batch=0}}take(e,t){e.state=2,e.t=0,this.picked+=e.value,t.goldRun+=e.value,this.run=this.runT>0?this.run+1:0,this.runT=.6,this.batch+=e.value,this.batchT=.35,I.pickup(e.x,this.run,e.value*t.goldScale)}bankAll(e){for(let t of this.list)t.state>1||(e.goldRun+=t.value,this.banked+=t.value,t.state=2,t.t=0)}},Nv=420,Pv=.4,Fv=[[0,16774338],[.08,16765498],[.25,16747034],[.5,15746590],[.75,11740702],[1,4856336]];function Iv(e){for(let t=1;t<Fv.length;t++)if(e<=Fv[t][0]){let[n,r]=Fv[t-1],[i,a]=Fv[t];return bv(r,a,(e-n)/(i-n))}return Fv[Fv.length-1][1]}var Lv=class{n=0;x=new Float32Array(Nv);y=new Float32Array(Nv);z=new Float32Array(Nv);vx=new Float32Array(Nv);vy=new Float32Array(Nv);vz=new Float32Array(Nv);age=new Float32Array(Nv);life=new Float32Array(Nv);size=new Float32Array(Nv);kind=new Uint8Array(Nv);carpets=[];clear(){this.n=0,this.carpets.length=0}add(e,t,n,r,i,a,o,s,c){if(this.n>=Nv)return;let l=this.n++;this.x[l]=e,this.y[l]=t,this.z[l]=n,this.vx[l]=r,this.vy[l]=i,this.vz[l]=a,this.age[l]=0,this.life[l]=o,this.size[l]=s,this.kind[l]=c}jet(e,t,n,r,i){let a=Pv*(.9+Math.random()*.2),o=(Math.random()-.5)*.25,s=(Math.random()-.5)*.25;this.add(e+o,t,n+s,(r-e)/a,(.25-t)/a,(i-n)/a,a+.3+Math.random()*.2,.85+Math.random()*.5,0)}carpet(e,t,n,r){this.carpets.length>=4&&this.carpets.shift(),this.carpets.push({x:e,z:t,hw:n,hd:r,t:1.15,max:1.15})}update(e,t){if(e<=0)return;for(let n=this.carpets.length-1;n>=0;n--){let r=this.carpets[n];if(r.t-=e,r.t<=0){this.carpets.splice(n,1);continue}let i=r.t/r.max,a=(t?110:260)*(.35+.65*i)*e;for(;a>0&&!(a<1&&Math.random()>a);){a--;let e=r.x+(Math.random()*2-1)*r.hw,t=r.z+(Math.random()*2-1)*r.hd;Math.random()<.1?this.add(e,1,t,0,1.6+Math.random(),0,1.1+Math.random()*.6,.8+Math.random()*.4,2):this.add(e,.15,t,(Math.random()-.5)*.6,2.6+Math.random()*2.4,(Math.random()-.5)*.6,.38+Math.random()*.35,.7+Math.random()*.55,1)}}let n=0;for(let t=0;t<this.n;t++){if(this.age[t]+=e,this.age[t]>=this.life[t])continue;let r=this.kind[t];if(r===0&&this.y[t]<=.25&&this.vy[t]<0)this.vx[t]=this.vx[t]*.18+(Math.random()-.5)*2.5,this.vz[t]=this.vz[t]*.18+(Math.random()-.5)*2.5,this.vy[t]=1.5+Math.random()*1.5,this.kind[t]=1;else if(r===1){let n=Math.exp(-e*2.5);this.vx[t]*=n,this.vz[t]*=n,this.vy[t]+=2.5*e}else r===2&&(this.vy[t]+=.6*e);this.x[t]+=this.vx[t]*e,this.y[t]+=this.vy[t]*e,this.z[t]+=this.vz[t]*e,n!==t&&(this.x[n]=this.x[t],this.y[n]=this.y[t],this.z[n]=this.z[t],this.vx[n]=this.vx[t],this.vy[n]=this.vy[t],this.vz[n]=this.vz[t],this.age[n]=this.age[t],this.life[n]=this.life[t],this.size[n]=this.size[t],this.kind[n]=this.kind[t]),n++}this.n=n}draw(e){for(let t of this.carpets){let n=t.t/t.max;e.add(t.x,.3,t.z+t.hd,0,0,1,t.hw*2.6,t.hd*2,16738842,.55*n)}for(let t=0;t<this.n;t++){let n=this.age[t]/this.life[t],r=this.size[t],i=this.kind[t];if(i===2){e.add(this.x[t],this.y[t],this.z[t],0,1,0,r*(.7+1.3*n),0,bv(3814964,7038048,n),.38*(1-n));continue}let a=n>.75?(1-n)/.25:1,o=Math.hypot(this.vx[t],this.vy[t],this.vz[t]),s=i===0?Math.min(2.2,o*.07):.25+.35*(1-n);e.add(this.x[t],this.y[t],this.z[t],this.vx[t],this.vy[t],this.vz[t],r*(.45+.9*n),s,Iv(n),1.45*a)}}},Rv=`
attribute vec3 iPos;
attribute vec3 iDir;
attribute vec2 iSize;
attribute vec4 iColor;
uniform float fogNear;
uniform float fogFar;
varying vec2 vP;
varying vec2 vSize;
varying vec4 vColor;
varying float vFog;
void main() {
  vec4 mv = modelViewMatrix * vec4(iPos, 1.0);
  vec2 d = (modelViewMatrix * vec4(iDir, 0.0)).xy;
  float l = length(d);
  d = l > 1e-5 ? d / l : vec2(0.0, 1.0);
  vec2 n = vec2(-d.y, d.x);
  float hw = iSize.x * 0.5;
  // Seen end-on, a trail looks shorter: keep its projected length.
  float len = iSize.y * clamp(l, 0.12, 1.0);
  float along = mix(-hw, len + hw, position.y);
  float across = position.x * hw;
  mv.xy += n * across - d * along;
  gl_Position = projectionMatrix * mv;
  vP = vec2(across, along);
  vSize = vec2(hw, len);
  vColor = iColor;
  vFog = smoothstep(fogNear, fogFar, -mv.z);
}`,zv=`
varying vec2 vP;
varying vec2 vSize;
varying vec4 vColor;
varying float vFog;
void main() {
  float hw = vSize.x;
  float len = vSize.y;
  float t = vP.y;
  float d;
  float fade = 1.0;
  if (t < 0.0) d = length(vec2(vP.x, t)) / hw;
  else if (t <= len) {
    d = abs(vP.x) / hw;
    fade = len > 0.0 ? pow(1.0 - t / len, 1.3) : 1.0;
  } else {
    d = length(vec2(vP.x, t - len)) / hw;
    fade = len > 0.001 ? 0.0 : 1.0;
  }
  float core = clamp(1.0 - d, 0.0, 1.0);
  float a = clamp(pow(core, 1.4) * fade * vColor.a * (1.0 - vFog), 0.0, 1.0);
  if (a < 0.004) discard;
  // Saturated colour with a white-hot core: reads on bright sand and snow as well as at night.
  vec3 c = mix(vColor.rgb, vec3(1.0), pow(core, 4.0) * 0.5);
  gl_FragColor = vec4(c, a);
}`,Bv=class{max;mesh;geo;pos;dir;size;color;attrs;uniforms;n=0;constructor(e){this.max=e;let t=new uo;t.setAttribute(`position`,new Qa([-1,0,0,1,0,0,1,1,0,-1,1,0],3)),t.setIndex([0,1,2,0,2,3]),this.geo=new Dl,this.geo.index=t.index,this.geo.setAttribute(`position`,t.getAttribute(`position`)),this.pos=new Float32Array(e*3),this.dir=new Float32Array(e*3),this.size=new Float32Array(e*2),this.color=new Float32Array(e*4);let n=(e,t)=>new zo(e,t).setUsage(Cr);this.attrs=[n(this.pos,3),n(this.dir,3),n(this.size,2),n(this.color,4)],this.geo.setAttribute(`iPos`,this.attrs[0]),this.geo.setAttribute(`iDir`,this.attrs[1]),this.geo.setAttribute(`iSize`,this.attrs[2]),this.geo.setAttribute(`iColor`,this.attrs[3]),this.geo.instanceCount=0,this.uniforms={fogNear:{value:24},fogFar:{value:82}};let r=new Bc({uniforms:this.uniforms,vertexShader:Rv,fragmentShader:zv,transparent:!0,depthWrite:!1});this.mesh=new Fo(this.geo,r),this.mesh.frustumCulled=!1,this.mesh.renderOrder=15}setFog(e,t){this.uniforms.fogNear.value=e,this.uniforms.fogFar.value=t}begin(){this.n=0}add(e,t,n,r,i,a,o,s,c,l){if(this.n>=this.max||l<=.01)return;let u=this.n++,d=Math.hypot(r,i,a)||1;this.pos[u*3]=e,this.pos[u*3+1]=t,this.pos[u*3+2]=n,this.dir[u*3]=r/d,this.dir[u*3+1]=i/d,this.dir[u*3+2]=a/d,this.size[u*2]=o,this.size[u*2+1]=s,this.color[u*4]=(c>>16&255)/255,this.color[u*4+1]=(c>>8&255)/255,this.color[u*4+2]=(c&255)/255,this.color[u*4+3]=l}end(){this.geo.instanceCount=this.n,this.mesh.visible=this.n>0;let e=[3,3,2,4];this.attrs.forEach((t,n)=>{t.clearUpdateRanges(),t.addUpdateRange(0,this.n*e[n]),t.needsUpdate=!0})}},Vv=`0123456789+-×%?!.KMBTQiSxpOcNoDe`,Hv=80,Uv=112,Wv=class e{max;mesh;geo;center;size;glyph;color;aCenter;aSize;aGlyph;aColor;n=0;constructor(t=1400,n){this.max=t;let r=new Oc(1,1);this.geo=new Dl,this.geo.index=r.index,this.geo.setAttribute(`position`,r.getAttribute(`position`)),this.geo.setAttribute(`uv`,r.getAttribute(`uv`)),this.center=new Float32Array(t*3),this.size=new Float32Array(t*2),this.glyph=new Float32Array(t),this.color=new Float32Array(t*4),this.aCenter=new zo(this.center,3).setUsage(Cr),this.aSize=new zo(this.size,2).setUsage(Cr),this.aGlyph=new zo(this.glyph,1).setUsage(Cr),this.aColor=new zo(this.color,4).setUsage(Cr),this.geo.setAttribute(`iCenter`,this.aCenter),this.geo.setAttribute(`iSize`,this.aSize),this.geo.setAttribute(`iGlyph`,this.aGlyph),this.geo.setAttribute(`iColor`,this.aColor),this.geo.instanceCount=0;let i=new H().setHex(n.color,vr),a=new Bc({uniforms:{map:{value:e.atlas()},uCols:{value:32},fogColor:{value:i},fogNear:{value:n.near},fogFar:{value:n.far}},vertexShader:`
        attribute vec3 iCenter;
        attribute vec2 iSize;
        attribute float iGlyph;
        attribute vec4 iColor;
        uniform float uCols;
        uniform float fogNear;
        uniform float fogFar;
        varying vec2 vUv;
        varying vec4 vColor;
        varying float vFog;
        void main() {
          vec4 mv = modelViewMatrix * vec4(iCenter, 1.0);
          mv.xy += position.xy * iSize;
          gl_Position = projectionMatrix * mv;
          vUv = vec2((uv.x + iGlyph) / uCols, uv.y);
          vColor = iColor;
          vFog = smoothstep(fogNear, fogFar, -mv.z);
        }`,fragmentShader:`
        uniform sampler2D map;
        uniform vec3 fogColor;
        varying vec2 vUv;
        varying vec4 vColor;
        varying float vFog;
        void main() {
          vec4 t = texture2D(map, vUv);
          float a = t.a * vColor.a * (1.0 - vFog * 0.85);
          if (a < 0.02) discard;
          gl_FragColor = vec4(mix(t.rgb * vColor.rgb, fogColor, vFog), a);
        }`,transparent:!0,depthWrite:!1});this.mesh=new Fo(this.geo,a),this.mesh.frustumCulled=!1,this.mesh.renderOrder=20}setFog(e){let t=this.mesh.material.uniforms;t.fogColor.value.setHex(e.color,vr),t.fogNear.value=e.near,t.fogFar.value=e.far}static atlas(){let e=document.createElement(`canvas`);e.width=2560,e.height=Uv;let t=e.getContext(`2d`);t.font=`96px "Lilita One", "Arial Black", Impact, sans-serif`,t.textAlign=`center`,t.textBaseline=`middle`,t.lineJoin=`round`;for(let e=0;e<32;e++){let n=e*Hv+Hv/2;t.lineWidth=16,t.strokeStyle=`rgba(20,24,40,0.95)`,t.strokeText(Vv[e],n,60),t.fillStyle=`#ffffff`,t.fillText(Vv[e],n,60)}let n=new $o(e);return n.colorSpace=``,n.anisotropy=4,n}begin(){this.n=0}add(e,t,n,r,i,a=1,o=1,s=1,c=1){let l=Hv/Uv*i,u=l*.68,d=t-(e.length-1)*u/2;for(let t=0;t<e.length;t++,d+=u){let u=Vv.indexOf(e[t]);if(u<0||this.n>=this.max)continue;let f=this.n++;this.center[f*3]=d,this.center[f*3+1]=n,this.center[f*3+2]=r,this.size[f*2]=l,this.size[f*2+1]=i,this.glyph[f]=u,this.color[f*4]=a,this.color[f*4+1]=o,this.color[f*4+2]=s,this.color[f*4+3]=c}}end(){this.geo.instanceCount=this.n,this.mesh.visible=this.n>0,this.aCenter.needsUpdate=!0,this.aSize.needsUpdate=!0,this.aGlyph.needsUpdate=!0,this.aColor.needsUpdate=!0;for(let e of[this.aCenter,this.aSize,this.aGlyph,this.aColor])e.clearUpdateRanges(),e.addUpdateRange(0,this.n*e.itemSize)}};function Gv(e,t,n,r){let i=new qo(e,t,n);return i.instanceMatrix.setUsage(Cr),r&&(i.instanceColor=new zo(new Float32Array(n*3).fill(1),3),i.instanceColor.setUsage(Cr)),i.count=0,i.frustumCulled=!1,i}var Kv=(e,t)=>.48+.34*(e*.7%1)+Math.sin(t*2.2+e)*.06,qv=e=>e.instanceMatrix.array,Jv=e=>e.instanceColor.array;function Yv(e,t){e.count=t,e.visible=t>0,e.instanceMatrix.clearUpdateRanges(),e.instanceMatrix.addUpdateRange(0,t*16),e.instanceMatrix.needsUpdate=!0,e.instanceColor&&(e.instanceColor.clearUpdateRanges(),e.instanceColor.addUpdateRange(0,t*3),e.instanceColor.needsUpdate=!0)}var Xv=e=>{let t=[0,0,0];return av(e,t),t},Zv=v.map(e=>Xv(e.color)),Qv=Xv(16732120),$v=Xv(3900150),ey=Xv(16098596),ty=Xv(3900150),ny=Xv(15680580),ry=Xv(2278750),iy=Xv(15680580),ay=Xv(16347926),oy=Xv(9133302),sy=Xv(12513892),cy=[[1,1,1],[.3,.3,.34],[2.1,2.2,2.1]],ly=Xv(4139540),uy=[a,160,0,200,120,400,720,200,16,160,480,30,16,240,80,20,10,30,360],dy=900,fy=[1,1,1],py=[380,50,0,50,50,100,300,70,10,70,140,18,10,90,36,10,8,18,100],my=[12,8,4,11,9,20,14,17,7,6,9,10,6,15,5,5,9,15,18],hy=[1,.9,1.1,1.75,1.2,1,.8],gy=[4.5,3.4,2.2,5,3,4.5,2.5],_y=700,vy=16,yy=480,by=480,xy=.42,Sy=e=>1+2.2*(e-1)**3+1.2*(e-1)**2,Cy=(e,t,n)=>{let r=wy((n-e)/(t-e));return r*r*(3-2*r)},wy=e=>e<0?0:e>1?1:e;function Ty(e){e=(e%1+1)%1;let t=t=>{let n=(t+e*6)%6;return Math.round(255*(1-.75*Math.max(0,Math.min(n,4-n,1))))};return t(5)<<16|t(3)<<8|t(1)}function Ey(e,t){return t<0?0:e===6?t<.12?Cy(0,1,t/.12):1-Cy(.12,1,t):e===0||e===1||e===4?t<.55?Cy(0,1,t/.55):t<.7?1-1.4*((t-.55)/.15):-.4*(1-(t-.7)/.3):e===2?t<.3?Cy(0,1,t/.3):t<.75?1:1-(t-.75)/.25:e===3?t<.486?-.6*Cy(0,1,t/.486):t<.571?-.6+1.6*Cy(0,1,(t-.486)/.085):t<.914?1:1-(t-.914)/.086:t<.2?Cy(0,1,t/.2):t<.85?1:1-(t-.85)/.15}function Dy(e,t){let n=Gv(e.geo,ug(e.gait),t,!0),r=dg(n,t);return{mesh:n,anim:r.array,attr:r,cap:t,n:0}}function Oy(e){Yv(e.mesh,e.n),e.attr.clearUpdateRanges(),e.attr.addUpdateRange(0,e.n*4),e.attr.needsUpdate=!0}var ky=16,Ay=4.6,jy=-1.25,My=.35,Ny=class{text;ranks;enemyFigs;bossFigs;tentacles;slams=[];tm=new Ni;tq=new li;te=new Ui;tv=new V;ts=new V;shieldFig;corpses=[];zoneRound;zoneRoundFill;zoneRect;zoneRectFill;arrows;shadows;bodies=new Map;bodyCount=new Map;streaks;rings;ringList=[];fx={n:0,x:new Float32Array(dy),y:new Float32Array(dy),z:new Float32Array(dy),vx:new Float32Array(dy),vy:new Float32Array(dy),vz:new Float32Array(dy),life:new Float32Array(dy),max:new Float32Array(dy),w:new Float32Array(dy),l:new Float32Array(dy),hex:new Int32Array(dy),k:new Float32Array(dy)};fxBudget=0;lastT=0;flames=new Lv;mouth={x:0,y:0,z:0};lowFx=!1;particles;blocks;chests;coins;gatePanels;gatePosts;boulders;traps;wards;bossWards;spikes;rockBuf=new Float32Array(72);rocksInFlight=0;constructor(e,t){this.ranks=v.map((e,t)=>Dy(kh(t,e.base),94)),this.enemyFigs=uy.map((e,t)=>{let n=Zh(t);return n?Dy(n,e+py[t]):null}),this.bossFigs=_p.map((e,t)=>Dy(sg(t),3)),this.tentacles=Gv(ag(),new Hc({vertexColors:!0}),8,!1),this.shieldFig=Dy(Fh(),120);let n=e=>new Co({transparent:!0,opacity:e,depthWrite:!1}),r=new is(1,40).rotateX(-Math.PI/2),i=new Oc(1,1).rotateX(-Math.PI/2);this.zoneRound=Gv(r,n(.25),16,!0),this.zoneRoundFill=Gv(r,n(.45),16,!0),this.zoneRect=Gv(i,n(.25),16,!0),this.zoneRectFill=Gv(i,n(.45),16,!0);for(let e of[this.zoneRound,this.zoneRoundFill,this.zoneRect,this.zoneRectFill])e.renderOrder=2;this.arrows=Gv(Sv(`bolt`),new Hc({vertexColors:!0}),400,!0),this.shadows=Gv(new Oc(1,1).rotateX(-Math.PI/2),new Co({map:cm(),color:2759950,transparent:!0,opacity:.32,depthWrite:!1}),200+a+8,!1),this.shadows.renderOrder=1;let c=new Co({vertexColors:!0,toneMapped:!1}),l=new Hc({vertexColors:!0});for(let e of Cv){let t=e===`javelin`||e===`bolt`||e===`ball`;this.bodies.set(e,Gv(Sv(e),t?l:c,s,!0))}this.streaks=new Bv(s+dy+800),this.rings=Gv(new kc(.8,1,48).rotateX(-Math.PI/2),new Co({transparent:!0,depthWrite:!1,blending:2,toneMapped:!1}),24,!0),this.rings.renderOrder=3,this.particles=Gv(new rs(1,1,1),new Hc,o,!0),this.blocks=Gv(Jp(),new Hc({vertexColors:!0}),160,!0),this.chests=Gv(Xp(),new Hc({vertexColors:!0}),12,!0),this.coins=Gv(Yp(),new Hc({vertexColors:!0,emissive:5913344}),200,!0),this.gatePanels=Gv(new rs(1,1,1).translate(0,.5,0),new Co({transparent:!0,opacity:.5,depthWrite:!1}),12,!0),this.gatePosts=Gv(Zp(),new Hc({vertexColors:!0}),24,!1),this.boulders=Gv(em(),new Hc({vertexColors:!0}),28,!0),this.traps=Gv(Qp(),new Hc({vertexColors:!0}),vy,!0),this.wards=Gv(new Ec(1,1),new Co({color:2278750,transparent:!0,opacity:.16,depthWrite:!1}),yy,!1),this.wards.renderOrder=2,this.bossWards=Gv(new Ec(1,2),new Co({color:4906624,transparent:!0,opacity:.32,depthWrite:!1}),4,!1),this.bossWards.renderOrder=2,this.spikes=Gv($p(),new Hc({vertexColors:!0}),by,!1),this.text=new Wv(1400,t),e.add(this.shadows,...this.ranks.map(e=>e.mesh),...this.enemyFigs.filter(e=>!!e).map(e=>e.mesh),...this.bossFigs.map(e=>e.mesh),this.shieldFig.mesh,this.tentacles,this.zoneRound,this.zoneRoundFill,this.zoneRect,this.zoneRectFill,this.arrows,...this.bodies.values(),this.particles,this.blocks,this.chests,this.coins,this.gatePosts,this.gatePanels,this.boulders,this.traps,this.spikes,this.wards,this.bossWards,this.rings,this.streaks.mesh,this.text.mesh)}put(e,t,n,r,i,a,o,s,c,l,u=1,d=1,f=1,p=0){if(e.n>=e.cap)return;let m=e.n++;It(qv(e.mesh),m,t,n,r,i,p,a,a,a),fg(e.anim,m,o,s,c,l),Lt(Jv(e.mesh),m,u,d,f)}punch=1;splash=14742270;down(e,t,n,r,i,a,o,s,c,l=0,u=0,d=0,f=0,p=1/0){this.corpses.length>=_y&&this.corpses.shift(),this.corpses.push({fig:e,x:t,y:n,z:r,yaw:i,s:a,ph:o,t0:s,dur:c,vx:l,vy:u,vz:d,spin:f,land:p})}enemyDown(e,t){let n=e.enemies,r=n.type[t],i=n.mode[t]===2?0:Math.PI;if(r===2){let r=n.kind[t];this.down(this.bossFigs[r],n.x[t],r===3?1.2:0,n.z[t],Math.PI,n.scale[t],n.phase[t],e.time,1.3);return}let a=this.enemyFigs[r],o=r===13?1.05:r===14?.2:0;if(!a)return;let s=this.punch*(n.scale[t]>1.8?.6:1),c=n.x[t],l=Math.abs(c)<.4?Math.random()<.5?-1:1:Math.sign(c),u=l*(4+Math.random()*5)*s,d=(5+Math.random()*3.5)*Math.min(1.3,s),f=-(1.5+Math.random()*2.5)*s,p=l*(8+Math.random()*8),m=e=>(d+Math.sqrt(d*d+32*(o-e)))/ky,h=m(0),g=Math.abs(c+u*h)>Ay;this.down(a,c,o,n.z[t],i,n.scale[t],n.phase[t]+e.time*my[r],e.time,g?m(jy):h+My,u,d,f,p,g?1/0:h)}tentacleSlam(e,t,n){this.slams.length>=6&&this.slams.shift(),this.slams.push({x:e,z:t,hd:n,t0:this.lastT})}tentacle(e,t,n,r,i,a){this.te.set(-i,0,0),this.tq.setFromEuler(this.te),this.tv.set(t,.1-a,n-r-.6),this.ts.set(2.4,2.4,r*2+1.2),this.tm.compose(this.tv,this.tq,this.ts),this.tm.toArray(this.tentacles.instanceMatrix.array,e*16)}soldierDown(e,t,n,r){let i=v[r];this.down(this.ranks[r],t,i.hover?.65:0,n,0,h*i.scale,e.time*13,e.time,.5)}sync(e){let t=e.time,n=e.squad,r=e.enemies,i=qv(this.shadows),a=0,o=[...this.ranks,...this.bossFigs,this.shieldFig];for(let e of o)e.n=0;for(let e of this.enemyFigs)e&&(e.n=0);for(let e=0;e<n.bodies;e++){let r=n.tier[e],o=v[r],s=h*o.scale,c=n.phase[e]*.12+t*13,l=o.hover?Kv(n.phase[e],t):0,u=Math.max(0,1-n.shot[e]/.13);this.put(this.ranks[r],n.x[e],l,n.z[e],n.face[e],s,c,1,u,0),It(i,a++,n.x[e],.015,n.z[e],0,0,.62*s,1,.62*s)}let s=n.frontZ(),c=n.backZ(),u=qv(this.wards),d=qv(this.bossWards),f=0,p=0;for(let e=0;e<r.n;e++){if(r.hp[e]<=0)continue;let n=r.type[e],o=r.scale[e],l=r.mode[e];if(r.guarded[e]&&p<4){let n=.64*o*(1+.05*Math.sin(t*4));It(d,p++,r.x[e],.5*o,r.z[e],t*.6,0,n,n*1.1,n)}if(r.ward[e]&&f<yy){let n=.56*o*(1+.06*Math.sin(t*6+r.phase[e]));It(u,f++,r.x[e],.55*o,r.z[e],0,0,n,n*1.08,n)}let m=l===2?0:l===1?Math.PI*(r.modeT[e]/.35):Math.PI,h=r.flash[e]>0?n===2?.22:n===1||n===4?.42:.85:0,g=1,_=1,v=1;if(r.ward[e]||r.guarded[e])g=.7,_=1.55,v=.85;else if(r.burnT[e]>0)g=1.5,_=.78,v=.45;else if(r.slowT[e]>0)g=.6,_=.9,v=1.7;else if(r.veiled[e])g=1.7,_=1.8,v=2.4;else if(r.buffT[e]>0)g=1.35,_=1.12,v=.55;else if(n===12&&r.quiet[e]>1.2&&r.hp[e]<r.maxHp[e]){let e=1+.35*(.5+.5*Math.sin(t*9));g=.8,_=e,v=.8}let y=l===0&&r.hold[e]!==0&&r.z[e]>=r.hold[e];if(n===2){let n=r.kind[e],i=y||r.contact[e]>0,a=n===3||n===2?1:i?.25:1,s=r.actT[e]>0?1-r.actT[e]/hy[n]:-1,c=n===3?1.2+Math.sin(t*2.5)*.25:0;this.put(this.bossFigs[n],r.x[e],c,r.z[e],Math.PI,o,r.phase[e]+t*gy[n],a,Ey(n,s),h,g,_,v)}else{let i=this.enemyFigs[n];if(!i)continue;let a=l===2,u=r.phase[e]+t*my[n]*(a?1.4:1),d=l===1?.5:y?.15:a?1.25:1,f=0;n===3?f=y&&r.timer[e]<.7?1-r.timer[e]/.7:0:n===8||n===11?f=+(r.actT[e]>0):n===17?f=+!!r.charge[e]:n===14?f=Math.sin(t*3+r.phase[e])*.5+.5:n!==5&&n!==13&&n!==9&&n!==10&&n!==16&&n!==15&&(f=Cy(3.2,.5,a?r.z[e]-c:s-r.z[e]));let p=n===13?1.05+Math.sin(t*6+r.phase[e])*.12:n===14?.2+Math.sin(t*2+r.phase[e])*.1:0;if(this.put(i,r.x[e],p,r.z[e],m,r.veiled[e]?o*.92:o,u,d,f,h,g,_,v),n===4&&r.shield[e]>0){let t=a?-1:1;this.put(this.shieldFig,r.x[e],0,r.z[e]+t*.34*o,m,o,u,d,0,h,g,_,v)}}let b=n===2?o*.75:o*.55;It(i,a++,r.x[e],.015,r.z[e],0,0,b,1,b)}let m=this.corpses,g=0;for(let n=0;n<m.length;n++){let r=m[n],i=(t-r.t0)/r.dur,a=t-r.t0;if(i>=1||i<0)i>=1&&r.land===1/0&&r.vy!==0&&e.particles.burst(r.x+r.vx*r.dur,-1.1,r.z+(e.scroll+r.vz)*r.dur,7,this.splash,2.6,.11,.5,4.5);else if(m[g++]=r,r.vy===0)this.put(r.fig,r.x,r.y*(1-i*i),r.z+e.scroll*a,r.yaw,r.s,r.ph,0,0,-i);else if(a<r.land){let t=r.y+r.vy*a-.5*ky*a*a;this.put(r.fig,r.x+r.vx*a,t,r.z+(e.scroll+r.vz)*a,r.yaw,r.s,r.ph,0,0,-Math.min(1,i*1.6),1,1,1,r.spin*a)}else{let t=(a-r.land)/My;this.put(r.fig,r.x+r.vx*r.land,0,r.z+r.vz*r.land+e.scroll*a,r.yaw,r.s*(1-t*t),r.ph,0,0,-1,1,1,1,r.spin*r.land)}}m.length=g;for(let e of o)Oy(e);for(let e of this.enemyFigs)e&&Oy(e);Yv(this.shadows,a),Yv(this.wards,f),Yv(this.bossWards,p),this.wards.material.opacity=.16*Math.min(1,Math.sqrt(40/Math.max(1,f)));let _=e.hazards,y=qv(this.arrows),b=Jv(this.arrows);for(let e=0;e<_.n;e++)It(y,e,_.x[e],.55,_.z[e],Math.atan2(_.vx[e],_.vz[e]),0,1.2,1.2,1.5),Lt(b,e,ly[0],ly[1],ly[2]);Yv(this.arrows,_.n);let x=0,S=0,C=0,w=this.rockBuf,E=0;for(let e of _.zones){let n=1-e.t/e.max,r=e.kind===`rock`?iy:e.kind===`fire`?ay:e.kind===`slam`?oy:sy,i=1+.6*Math.max(0,n-.7)*Math.sin(t*40);if(e.round?(It(qv(this.zoneRound),x,e.x,.03,e.z,0,0,e.hw,1,e.hw),Lt(Jv(this.zoneRound),x,r[0]*i,r[1]*i,r[2]*i),It(qv(this.zoneRoundFill),x,e.x,.035,e.z,0,0,e.hw*n,1,e.hw*n),Lt(Jv(this.zoneRoundFill),x++,r[0],r[1],r[2])):(It(qv(this.zoneRect),S,e.x,.03,e.z,0,0,e.hw*2,1,e.hd*2),Lt(Jv(this.zoneRect),S,r[0]*i,r[1]*i,r[2]*i),It(qv(this.zoneRectFill),S,e.x,.035,e.z-e.hd+e.hd*n,0,0,e.hw*2,1,e.hd*2*n),Lt(Jv(this.zoneRectFill),S++,r[0],r[1],r[2])),(e.kind===`rock`||e.kind===`web`)&&C<12){let t=e.size??1,r=e.fromX+(e.x-e.fromX)*n,i=e.fromZ+(e.z-e.fromZ)*n,a=(3.2*(1-n)+.5)*Math.min(1,t+.3)+6*t*Math.sin(Math.PI*n),o=C*6;w[o]=r,w[o+1]=a,w[o+2]=i,w[o+3]=n*8,w[o+4]=t,w[o+5]=e.kind===`web`?2:e.tint??0,C++}if(e.kind===`slam`&&E<8){let r=n<.82?.95+.08*Math.sin(t*7+e.x):.95*(1-(n-.82)/.18);this.tentacle(E++,e.x,e.z,e.hd,r,0)}}for(let e=this.slams.length-1;e>=0;e--){let n=this.slams[e],r=t-n.t0;r>.7||r<0?this.slams.splice(e,1):E<8&&this.tentacle(E++,n.x,n.z,n.hd,0,r>.3?(r-.3)*2.2:0)}Yv(this.tentacles,E),Yv(this.zoneRound,x),Yv(this.zoneRoundFill,x),Yv(this.zoneRect,S),Yv(this.zoneRectFill,S),this.rocksInFlight=C;let D=this.streaks;D.begin();let O=e.projectiles,k=this.bodyCount;for(let e of Cv)k.set(e,0);for(let e=0;e<O.n;e++){let n=O.tier[e],r=v[n],i=gv[n],a=O.flags[e],o=a&1,s=o?1.5:1,c=this.bodies.get(i.body),u=k.get(i.body);if(u<2200){let a=i.body===`star`||i.body===`ring`||i.body===`rock`,d=a?t*9+e:Math.atan2(O.vx[e],O.vz[e]),f=i.body===`ball`||i.body===`orb`||i.body===`void`||a?r.thick*s:r.len*s;It(qv(c),u,O.x[e],l,O.z[e],d,i.body===`star`||i.body===`rock`?t*5+e:0,r.thick*s,r.thick*s,f);let p=i.solid?fy:o?Qv:Zv[n],m=i.solid?1:.55;Lt(Jv(c),u,p[0]+(1-p[0])*m,p[1]+(1-p[1])*m,p[2]+(1-p[2])*m),k.set(i.body,u+1)}let d=i.glow,f=i.width,p=i.trail;if(a&4&&(d=d?bv(d,yv,.5):yv,f=Math.max(f,.16),p=Math.max(p,.8)),a&2&&(d=d?bv(d,vv,.5):vv,f=Math.max(f,.14),p=Math.max(p,.7)),o&&(d=d?bv(d,_v,.6):_v,f=Math.max(f*1.4,.18),p=Math.max(p,.9)),i.rainbow&&!o&&(d=Ty(t*.6+e*.13)),d){let n=Math.min(1,O.age[e]/.08),r=i.body===`orb`||i.body===`void`?1+.15*Math.sin(t*30+e):1;D.add(O.x[e],l,O.z[e],O.vx[e],0,O.vz[e],f*r,p*n,d,.9)}}for(let e of Cv)Yv(this.bodies.get(e),k.get(e));let A=e.particles,ee=qv(this.particles),te=Jv(this.particles);for(let e=0;e<A.n;e++){let t=A.life[e]/A.max[e],n=A.size[e]*(.35+.65*t),r=A.spin[e]*(1-t)*3;It(ee,e,A.x[e],A.y[e],A.z[e],r,r*.7,n,n,n),Lt(te,e,A.rgb[e*3],A.rgb[e*3+1],A.rgb[e*3+2])}Yv(this.particles,A.n);let j=this.text;j.begin();let ne=qv(this.blocks),re=Jv(this.blocks),ie=qv(this.chests),ae=Jv(this.chests),oe=qv(this.gatePanels),se=Jv(this.gatePanels),ce=qv(this.gatePosts),le=qv(this.traps),ue=Jv(this.traps),de=qv(this.spikes),fe=0,pe=0,me=0,he=0,ge=0,_e=0;for(let n of e.props.list){let r=e.props.isAlive(n),i=r?Sy(n.pop):Math.max(0,n.fade/.3),a=n.flash>0?1.9:1;if(n.kind===`domino`||n.kind===`big`){if(fe>=160)continue;let e=n.kind===`domino`?$v:ey,t=r?0:(1-i)*.8;It(ne,fe,n.x,t,n.z,0,0,n.hw*2*i,n.h*i,n.hd*2*i),Lt(re,fe++,e[0]*a,e[1]*a,e[2]*a),r&&n.z>-46&&(n.kind===`domino`?j.add(`+${T(n.reward)}`,n.x,n.h+.42,n.z,.62):(j.add(`+${T(n.reward)}`,n.x,n.h+1,n.z,1.05),j.add(T(Math.ceil(n.hp)),n.x,n.h+.3,n.z,.6,1,.88,.4)))}else if(n.kind===`chest`){if(pe>=12)continue;let e=1.4*i;It(ie,pe,n.x,0,n.z,0,Math.sin(t*3)*.04,e,e,e),Lt(ae,pe++,a,a,a),r&&n.z>-46&&(j.add(`?`,n.x,n.h+1.15,n.z,1,1,.84,.25),j.add(T(Math.ceil(n.hp)),n.x,n.h+.4,n.z,.55,1,.92,.6))}else if(n.kind===`trap`){if(ge>=vy)continue;It(le,ge,n.x,0,n.z,0,0,n.hw*2*i,1,n.hd*2*i);let e=n.flash>0?1.6:1;Lt(ue,ge++,e,n.flash>0?.6:1,n.flash>0?.6:1);let r=Math.max(2,Math.floor(n.hw*2/xy)),a=Math.max(1,Math.floor(n.hd*2/xy));for(let e=0;e<r;e++)for(let o=0;o<a&&!(_e>=by);o++){let s=n.x-n.hw+(e+.5)*n.hw*2/r,c=n.z-n.hd+(o+.5)*n.hd*2/a,l=i*(.85+.25*Math.max(0,Math.sin(t*7+e*.9+o*1.7)));It(de,_e++,s,0,c,0,0,i,l,i)}}else if(n.kind===`gate`){if(me>=12)continue;let e=n.op===`x`?ry:n.value>0?ty:ny;if(It(oe,me,n.x,.05,n.z,0,0,(n.hw*2-.35)*i,n.h*i,.12),Lt(se,me++,e[0]*a,e[1]*a,e[2]*a),he+2<=24&&(It(ce,he++,n.x-n.hw+.1,0,n.z,0,0,1,i,1),It(ce,he++,n.x+n.hw-.1,0,n.z,0,0,1,i,1)),r&&n.z>-46){let e=n.op===`x`?`×${n.value}`:n.value>0?`+${T(n.value)}`:`-${T(-n.value)}`;j.add(e,n.x,1.25,n.z+.1,1.2)}}}Yv(this.blocks,fe),Yv(this.chests,pe);let ve=qv(this.coins),ye=Jv(this.coins),be=0,xe=e.goldScale;for(let n of e.coins.list){if(be>=200)break;let e=Math.min(2,.85+.3*Math.log2(1+n.value*xe/2))*(1+.3*n.bump),r=n.y;n.state===2?e*=Math.max(0,1-n.t/.28):n.state===3?e*=Math.max(0,1-n.t/.4):n.state!==0&&(r=.22+.06*Math.sin(t*4+n.phase));let i=t*(n.state===0?12:4)+n.phase;It(ve,be,n.x,r,n.z,i,0,e,e,e);let a=1+.5*n.bump;Lt(ye,be++,a,a,a)}Yv(this.coins,be),Yv(this.gatePanels,me),Yv(this.gatePosts,he),Yv(this.traps,ge),Yv(this.spikes,_e);for(let e=0;e<r.n;e++){let t=r.type[e];if(t!==1&&t!==4||r.hp[e]<=0||r.z[e]<-44)continue;let n=r.shield[e]>0;j.add(T(Math.ceil(r.hp[e]+Math.max(0,r.shield[e]))),r.x[e],1.35*r.scale[e],r.z[e],.52,1,n?.85:.7,n?.5:.7)}for(let e=0;e<64;e++){let t=r.gCount[e];t<6||r.gZ[e]<-44||j.add(`${t}`,r.gX[e]/t,1.45,r.gZ[e]-.6,.7,1,.82,.82)}for(let t of e.floaters.list){let e=Math.min(1,t.life/(t.max*.4));j.add(t.text,t.x,t.y,t.z,t.size,t.r,t.g,t.b,e)}j.end();let Se=qv(this.boulders),Ce=0;for(let t of e.rocks){if(Ce>=16)break;It(Se,Ce++,t.x,t.y,t.z,t.t*6,t.t*4,1,1,1)}let we=Jv(this.boulders);for(let e=0;e<Ce;e++)Lt(we,e,1,1,1);for(let e=0;e<this.rocksInFlight;e++){let t=e*6,n=this.rockBuf[t+3],r=2.2*this.rockBuf[t+4],i=cy[this.rockBuf[t+5]]??cy[0];Lt(we,Ce,i[0],i[1],i[2]),It(Se,Ce++,this.rockBuf[t],this.rockBuf[t+1],this.rockBuf[t+2],n,n*.6,r,r,r)}Yv(this.boulders,Ce);for(let t of e.bolts.list){let e=t.x1,n=t.z1,r=.5,i=Math.min(1,t.life/.14);for(let a=1;a<=4;a++){let o=a/4,s=a<4?.35:0,c=t.x1+(t.x2-t.x1)*o+(Math.random()-.5)*s,l=t.z1+(t.z2-t.z1)*o+(Math.random()-.5)*s,u=.5+(Math.random()-.5)*s,d=Math.hypot(c-e,u-r,l-n);D.add(c,u,l,c-e,u-r,l-n,.32,d,16773754,1.1*i),D.add(c,u,l,c-e,u-r,l-n,.09,d,16777215,1.4*i),e=c,r=u,n=l}}let Te=Math.min(.1,Math.max(0,t-this.lastT));this.lastT=t,this.fxBudget=this.lowFx?40:90;let M=this.fx,Ee=0;for(let t=0;t<M.n;t++){if(M.life[t]-=Te,M.life[t]<=0)continue;M.vy[t]-=9*Te*(M.l[t]>0),M.x[t]+=M.vx[t]*Te,M.y[t]+=M.vy[t]*Te,M.z[t]+=(M.vz[t]+e.scroll)*Te;let n=M.life[t]/M.max[t];D.add(M.x[t],M.y[t],M.z[t],M.vx[t],M.vy[t],M.vz[t],M.w[t]*(.5+.5*n),M.l[t],M.hex[t],M.k[t]*n),Ee!==t&&this.copyFx(t,Ee),Ee++}M.n=Ee,this.breath(e,t,Te,D),D.end();let De=this.ringList,Oe=0;for(let n=De.length-1;n>=0;n--){let r=De[n],i=(t-r.t0)/.38;if(i>=1||i<0){De.splice(n,1);continue}let a=1-(1-i)**2,o=r.r*(.3+.75*a);It(qv(this.rings),Oe,r.x,.06,r.z+e.scroll*(t-r.t0),0,0,o,1,o);let s=Xv(r.hex),c=(1-i)*(1-i)*1.4;Lt(Jv(this.rings),Oe++,s[0]*c,s[1]*c,s[2]*c)}Yv(this.rings,Oe)}dragonMouth(e,t){let n=e.enemies;for(let e of n.bosses){if(n.hp[e]<=0||n.kind[e]!==3)continue;let r=-.5*Ey(3,n.actT[e]>0?1-n.actT[e]/hy[3]:-1),i=Math.cos(r),a=Math.sin(r),o=n.scale[e];return this.mouth.x=n.x[e],this.mouth.y=1.2+Math.sin(t*2.5)*.25+(.78+.19*i+.71*a)*o,this.mouth.z=n.z[e]-(-.22+.19*a-.71*i)*o,!0}return!1}breath(e,t,n,r){let i=this.mouth;if(this.dragonMouth(e,t)){for(let a of e.hazards.zones){if(a.kind!==`fire`)continue;let e=1-a.t/a.max,o=1-Pv/a.max;if(e<o){let n=e/o;r.add(i.x,i.y,i.z,0,0,1,.3+1.2*n*n,0,bv(16742938,16769162,n),.45+.6*n+.15*Math.sin(t*37))}else{let t=Math.min(1,e+Pv/a.max);this.emitJet(a.x,a.hw,a.z-a.hd+2*a.hd*t,n)}}for(let e of this.flames.carpets)e.max-e.t<.35&&this.emitJet(e.x,e.hw,e.z+(Math.random()*2-1)*e.hd,n)}for(let e of this.flames.carpets){if(Math.random()>30*n*(e.t/e.max))continue;let t=e.x+(Math.random()*2-1)*e.hw,r=e.z+(Math.random()*2-1)*e.hd;this.spark(t,.4,r,(Math.random()-.5)*1.5,2+Math.random()*2.5,(Math.random()-.5)*1.5,.09,0,16760909,1.3,.6+Math.random()*.5)}this.flames.update(n,this.lowFx),this.flames.draw(r)}emitJet(e,t,n,r){let i=this.mouth,a=(this.lowFx?70:160)*r;for(;a>0&&!(a<1&&Math.random()>a);)a--,this.flames.jet(i.x,i.y,i.z,e+(Math.random()*2-1)*t*.85,n+(Math.random()-.5)*1.4);this.streaks.add(i.x,i.y,i.z,0,-.3,1,1.1,.5,16774084,1.3)}fireCarpet(e,t,n,r){this.flames.carpet(e,t,n,r)}clearFlames(){this.flames.clear()}copyFx(e,t){let n=this.fx;n.x[t]=n.x[e],n.y[t]=n.y[e],n.z[t]=n.z[e],n.vx[t]=n.vx[e],n.vy[t]=n.vy[e],n.vz[t]=n.vz[e],n.life[t]=n.life[e],n.max[t]=n.max[e],n.w[t]=n.w[e],n.l[t]=n.l[e],n.hex[t]=n.hex[e],n.k[t]=n.k[e]}spark(e,t,n,r,i,a,o,s,c,l,u){let d=this.fx;if(d.n>=dy||this.fxBudget<=0)return;this.fxBudget--;let f=d.n++;d.x[f]=e,d.y[f]=t,d.z[f]=n,d.vx[f]=r,d.vy[f]=i,d.vz[f]=a,d.life[f]=u,d.max[f]=u,d.w[f]=o,d.l[f]=s,d.hex[f]=c,d.k[f]=l}muzzle(e,t,n,r){let i=gv[r];!i.flash||this.fxBudget<=0||this.lowFx&&Math.random()<.6||this.spark(e,t,n,0,0,-1,i.flashSize,0,i.flash,1.1,.07)}impact(e,t,n,r,i){let a=gv[n]??gv[0],o=r&1?_v:r&4?yv:r&2?vv:a.spark;this.spark(e,l,t,0,0,0,a.glow?.5:.3,0,a.glow||o,.9,.08);let s=Math.min(this.fxBudget,this.lowFx?Math.ceil(a.sparks/2):a.sparks);for(let n=0;n<s;n++){let n=Math.random()*Math.PI*2,r=2+Math.random()*4;this.spark(e,l,t,Math.cos(n)*r,1.5+Math.random()*3,Math.sin(n)*r+1.5,.07,.22,o,1,.18+Math.random()*.15)}i>0&&this.ring(e,t,i,a.glow||16747069)}ring(e,t,n,r){this.ringList.length>=24&&this.ringList.shift(),this.ringList.push({x:e,z:t,r:n,t0:this.lastT,hex:r})}setFog(e){this.text.setFog(e),this.streaks.setFog(e.near,e.far)}},Py=480,Fy=13,Iy=12,Ly=-48,Ry=10,zy={rain:{count:420,color:12175062,sx:.025,sy:.6,sz:.025},snow:{count:380,color:16777215,sx:.08,sy:.08,sz:.08},embers:{count:260,color:16747069,sx:.07,sy:.07,sz:.07},fireflies:{count:110,color:15138698,sx:.08,sy:.08,sz:.08},sand:{count:380,color:14465418,sx:.06,sy:.035,sz:.06}},By=class{mesh;kind=`none`;n=0;x=new Float32Array(Py);y=new Float32Array(Py);z=new Float32Array(Py);ph=new Float32Array(Py);look=null;enabled=!0;constructor(){let e=new Co({color:16777215});this.mesh=new qo(new rs(1,1,1),e,Py),this.mesh.instanceMatrix.setUsage(Cr),this.mesh.frustumCulled=!1,this.mesh.count=0}set(e){if(this.kind=e,e===`none`||!this.enabled){this.n=0,this.look=null,this.mesh.count=0,this.mesh.visible=!1;return}this.look=zy[e],this.n=this.look.count;let t=[0,0,0];av(this.look.color,t),this.mesh.material.color.setRGB(t[0],t[1],t[2],vr);for(let t=0;t<this.n;t++)this.x[t]=(Math.random()*2-1)*Fy,this.y[t]=e===`fireflies`?.4+Math.random()*2.6:Math.random()*Iy,this.z[t]=Ly+Math.random()*58,this.ph[t]=Math.random()*Math.PI*2}update(e,t,n){let r=this.look;if(!r)return;let i=this.mesh.instanceMatrix.array,a=this.kind;for(let o=0;o<this.n;o++){this.z[o]+=t*e;let s=1;a===`rain`?(this.y[o]-=22*e,this.x[o]-=2.5*e):a===`snow`?(this.y[o]-=1.5*e,this.x[o]+=Math.sin(n*1.3+this.ph[o])*.6*e):a===`embers`?(this.y[o]+=(1.2+o%5*.3)*e,this.x[o]+=Math.sin(n*2+this.ph[o])*.5*e,s=.6+.4*Math.sin(n*6+this.ph[o])):a===`fireflies`?(this.x[o]+=Math.sin(n*.7+this.ph[o])*.8*e,this.y[o]+=Math.cos(n*.9+this.ph[o]*1.7)*.4*e,s=Math.max(0,Math.sin(n*2.2+this.ph[o]*3))):(this.x[o]-=10*e,this.y[o]+=Math.sin(n*3+this.ph[o])*.3*e),this.y[o]<0?this.y[o]+=Iy:(this.y[o]>Iy||a===`fireflies`&&this.y[o]>3.2)&&(this.y[o]=a===`fireflies`?.4:0),a===`fireflies`&&this.y[o]<.3&&(this.y[o]=.3),this.x[o]<-13?this.x[o]+=26:this.x[o]>Fy&&(this.x[o]-=26),this.z[o]>Ry&&(this.z[o]-=58),It(i,o,this.x[o],this.y[o],this.z[o],a===`rain`?.12:0,0,r.sx*s,r.sy*s,r.sz*s)}this.mesh.count=this.n,this.mesh.visible=this.n>0,this.mesh.instanceMatrix.needsUpdate=!0}},Vy=170,Hy=12,Uy=2.5,Wy=38,Gy=420,Ky=16,qy={color:13496059,near:24,far:82};function Jy(e,t){let n=document.createElement(`canvas`);return n.width=e,n.height=t,[n,n.getContext(`2d`)]}var Yy=e=>`#${e.toString(16).padStart(6,`0`)}`,Xy=(e,t)=>e+Math.random()*(t-e);function Zy(e){let[t,n]=Jy(256,256),r=(e,t,r,i,a,o)=>{n.fillStyle=e,n.fillRect(0,0,256,256);for(let e=0;e<4;e++)for(let s=0;s<4;s++)n.fillStyle=`hsl(${t+Xy(-3,3)}, ${r+Xy(-4,4)}%, ${i+Xy(-a,a)}%)`,n.fillRect(s*64+3,e*64+3,58,58),n.fillStyle=o,n.fillRect(s*64+3,e*64+3,58,6)};if(e===`sandstone`)r(`#b9a47f`,40,46,86,3,`rgba(255,255,255,0.18)`);else if(e===`terracotta`)r(`#9a6446`,24,42,70,4,`rgba(255,235,210,0.2)`);else if(e===`ice`){r(`#8fb2cf`,205,48,88,3,`rgba(255,255,255,0.45)`),n.strokeStyle=`rgba(255,255,255,0.7)`,n.lineWidth=1.5;for(let e=0;e<7;e++){n.beginPath();let e=Xy(0,256),t=Xy(0,256);n.moveTo(e,t);for(let r=0;r<4;r++)n.lineTo(e+=Xy(-18,18),t+=Xy(-18,18));n.stroke()}}else if(e===`cobble`){n.fillStyle=`#6b6b73`,n.fillRect(0,0,256,256);for(let e=0;e<5;e++)for(let t=-1;t<4;t++){let r=t*64+e%2*32+32+Xy(-3,3),i=e*51.2+25.6+Xy(-2,2);n.fillStyle=`hsl(220, ${Xy(4,8)}%, ${Xy(60,67)}%)`,n.beginPath(),n.ellipse(r,i,Xy(27,29),Xy(21,23),Xy(-.15,.15),0,Math.PI*2),n.fill(),n.fillStyle=`rgba(255,255,255,0.1)`,n.beginPath(),n.ellipse(r-4,i-6,15,7,0,0,Math.PI*2),n.fill()}}else{r(`#0f0f12`,20,5,26,3,`rgba(255,255,255,0.05)`),n.strokeStyle=`rgba(255,106,0,0.45)`,n.lineWidth=2;for(let e=1;e<4;e++)n.beginPath(),n.moveTo(e*64,0),n.lineTo(e*64,256),n.moveTo(0,e*64),n.lineTo(256,e*64),n.stroke()}for(let e=0;e<140;e++)n.fillStyle=`rgba(60,40,20,${Math.random()*.1})`,n.fillRect(Math.random()*256,Math.random()*256,2,2);let i=new $o(t);return i.colorSpace=_r,i.wrapS=i.wrapT=Jt,i.repeat.set(Uy,Wy),i.anisotropy=8,i}function Qy(e,t,n){let[r,i]=Jy(256,256);i.fillStyle=Yy(t),i.fillRect(0,0,256,256);let a=Yy(n),o=36;if(i.lineCap=`round`,e===`waves`||e===`moat`){i.strokeStyle=e===`waves`?`rgba(255,255,255,0.28)`:`${a}66`,i.lineWidth=3;for(let t=0;t<(e===`waves`?26:18);t++){let e=Xy(0,256),t=Xy(0,256),n=Xy(14,40);i.beginPath(),i.moveTo(e,t),i.quadraticCurveTo(e+n/2,t-6,e+n,t),i.stroke()}}else if(e===`dunes`){o=10,i.strokeStyle=`${a}88`,i.lineWidth=7;for(let e=0;e<9;e++){let t=Xy(0,256);i.beginPath();for(let n=-10;n<=266;n+=8)i.lineTo(n,t+Math.sin(n/256*Math.PI*2+e)*18);i.stroke()}}else if(e===`snow`){o=20;for(let e=0;e<22;e++)i.fillStyle=`${a}44`,i.beginPath(),i.ellipse(Xy(0,256),Xy(0,256),Xy(18,40),Xy(6,12),0,0,Math.PI*2),i.fill();for(let e=0;e<120;e++)i.fillStyle=`rgba(255,255,255,0.9)`,i.fillRect(Xy(0,256),Xy(0,256),1.5,1.5)}else{o=14,i.shadowColor=a,i.shadowBlur=10;for(let e=0;e<16;e++){i.strokeStyle=e%3?a:`#ffd166`,i.lineWidth=Xy(2,5),i.beginPath();let t=Xy(0,256),n=Xy(0,256);i.moveTo(t,n);for(let e=0;e<6;e++)i.lineTo(t+=Xy(-30,30),n+=Xy(-30,30));i.stroke()}}let s=new $o(r);return s.colorSpace=_r,s.wrapS=s.wrapT=Jt,s.repeat.set(o,o),[s,o]}var $y=class{renderer;scene=new ga;camera=new Cl(60,.5,.5,220);fog=new ha(qy.color,qy.near,qy.far);fogInfo={...qy};shake=0;hemi=new dl(15398655,11770488,1.9);sun=new El(16773852,2.2);laneMat=new Hc;groundMat=new Hc;bodyMat=new Hc;curbs;decor;weather=new By;deco=[];decorNear=!1;groundRepeat=36;travel=0;dprCap=1.5;low=!1;hemiBase=1.9;lightning=!1;boltT=6;flash=0;time=0;camBase=new V(0,12.5,9);pitch=.55;camMenu=new V(0,4.4,6.6);pitchMenu=.9;framing=0;frameFrom=0;frameTo=0;frameT=1;frameDur=1;camPos=new V;focusT=1;focusDur=1;baseFov=60;width=1;height=1;lastWeather=`none`;constructor(e){this.renderer=new up({canvas:e,antialias:!0,powerPreference:`high-performance`}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,this.dprCap)),this.scene.background=new H(qy.color),this.scene.fog=this.fog,this.sun.position.set(-4,10,6),this.scene.add(this.hemi,this.sun);let t=new Fo(new Oc(_*2,Vy).rotateX(-Math.PI/2),this.laneMat);t.position.set(0,0,Hy-Vy/2);let n=new Fo(new rs(_*2+.8,3.2,Vy),this.bodyMat);n.position.set(0,-1.62,Hy-Vy/2);let r=new Fo(new Oc(Gy,Gy).rotateX(-Math.PI/2),this.groundMat);r.position.set(0,-1.25,-120),this.scene.add(t,n,r),this.curbs=new qo(new rs(.5,.4,.98).translate(0,.2,0),new Hc,348);let i=this.curbs.instanceMatrix.array;for(let e=0;e<174;e++)for(let t=0;t<2;t++)It(i,e*2+t,(t?1:-1)*(_-.25),0,14-e,0,0,1,1,1);this.curbs.frustumCulled=!1,this.decor=new qo(sm(`palm`),new Hc({vertexColors:!0}),Ky),this.decor.frustumCulled=!1;for(let e=0;e<Ky;e++)this.deco.push({x:0,z:20-e/Ky*175,s:1,r:0});this.scene.add(this.curbs,this.decor,this.weather.mesh),this.setAmbiance(qt(`lagoon`,`day`))}setAmbiance(e){let{theme:t,mood:n}=e;this.scene.background.setHex(e.sky),this.fog.color.setHex(e.sky),this.fog.near=n.fogNear,this.fog.far=n.fogFar,this.fogInfo={color:e.sky,near:n.fogNear,far:n.fogFar},this.camera.far=n.fogFar+2,this.camera.updateProjectionMatrix(),this.hemi.color.setHex(n.hemiSky),this.hemi.groundColor.setHex(n.hemiGround),this.hemiBase=n.hemiIntensity,this.hemi.intensity=n.hemiIntensity,this.sun.color.setHex(n.sun),this.sun.intensity=n.sunIntensity,this.sun.position.set(...n.sunPos),this.lightning=n.lightning,this.flash=0;let r=Zy(t.laneStyle);this.laneMat.map?.dispose(),this.laneMat.map=r;let[i,a]=Qy(t.groundStyle,t.ground,t.groundAccent);this.groundMat.map?.dispose(),this.groundMat.map=i,this.groundRepeat=a,this.groundMat.emissiveMap=t.groundGlow?i:null,this.groundMat.emissive.setHex(t.groundGlow?16777215:0),this.groundMat.emissiveIntensity=t.groundGlow?.9:0,this.laneMat.needsUpdate=!0,this.groundMat.needsUpdate=!0,this.bodyMat.color.setHex(t.bridge);let o=new H(t.curbA),s=new H(t.curbB);for(let e=0;e<this.curbs.count;e++)this.curbs.setColorAt(e,Math.floor(e/2)%2?o:s);this.curbs.instanceColor.needsUpdate=!0;let c=this.decor.geometry;this.decor.geometry=sm(t.decor),c.dispose(),this.decorNear=t.decor===`tower`;for(let e=0;e<Ky;e++)this.placeDecor(e);this.lastWeather=e.weather,this.weather.set(e.weather),this.travelSync()}travelSync(){this.laneMat.map.offset.y=this.travel*Wy/Vy%1,this.groundMat.map.offset.y=this.travel*this.groundRepeat/Gy%1}placeDecor(e){let t=this.deco[e];t.x=(e%2?1:-1)*(this.decorNear?7+Math.random()*9:10+Math.random()*20),t.s=.7+Math.random()*1.1,t.r=Math.random()*Math.PI*2}setQuality(e){this.low=e,this.renderer.setPixelRatio(e?1:Math.min(window.devicePixelRatio,this.dprCap)),this.renderer.setSize(this.width,this.height,!1),this.weather.enabled=!e,this.weather.set(this.lastWeather)}lowerResolution(){return this.low||this.dprCap<=1||window.devicePixelRatio<=1?!1:(this.dprCap=Math.max(1,Math.min(this.dprCap,window.devicePixelRatio)-.25),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,this.dprCap)),this.renderer.setSize(this.width,this.height,!1),!0)}async warmUp(){let e=this.renderer;await e.compileAsync(this.scene,this.camera);let t=this.groundMat,n=t.emissiveMap;t.emissiveMap=t.map,t.needsUpdate=!0,await e.compileAsync(this.scene,this.camera),t.emissiveMap=n,t.needsUpdate=!0}focus(e=2.4){this.focusT=0,this.focusDur=e}battleShift=0;setBattleShift(e){this.battleShift=e}resize(e,t){if(e<1||t<1)return;this.width=e,this.height=t,this.renderer.setSize(e,t,!1);let n=e/t;this.camera.aspect=n;let r=Math.hypot(this.camBase.y,this.camBase.z),i=Math.atan((_+.3)/r),a=Nt(2*Math.atan(Math.tan(i)/n),50*Math.PI/180,78*Math.PI/180);this.camera.fov=a*180/Math.PI,this.baseFov=this.camera.fov;let o=Math.atan2(this.camBase.y,this.camBase.z-3.2);this.pitch=o-a/2;let s=Math.atan2(this.camMenu.y-.4,this.camMenu.z-.2);this.pitchMenu=s+Math.atan(.1*Math.tan(a/2)),this.camera.updateProjectionMatrix()}setFraming(e,t){let n=+!!e;t<=0?(this.framing=this.frameTo=n,this.frameT=1):n===this.frameTo&&this.frameT>=1&&this.framing===n||(this.frameFrom=this.framing,this.frameTo=n,this.frameT=0,this.frameDur=t)}update(e,t){this.time+=e,this.travel+=t*e,this.travelSync(),this.curbs.position.z=this.travel%2;let n=this.decor.instanceMatrix.array;for(let r=0;r<Ky;r++){let i=this.deco[r];i.z+=t*e,i.z>24&&(i.z-=175,this.placeDecor(r)),It(n,r,i.x,-1.2,i.z,i.r,0,i.s,i.s,i.s)}if(this.decor.instanceMatrix.needsUpdate=!0,this.weather.update(e,t,this.time),this.lightning&&e>0&&(this.boltT-=e,this.boltT<=0&&(this.boltT=5+Math.random()*7,this.flash=.4,I.thunder())),this.flash>0){this.flash-=e;let t=this.flash>.28||this.flash>.08&&this.flash<.16;this.hemi.intensity=this.hemiBase*(t?3:1)}else this.hemi.intensity!==this.hemiBase&&(this.hemi.intensity=this.hemiBase);if(this.frameT<1){this.frameT=Math.min(1,this.frameT+e/this.frameDur);let t=this.frameT,n=t<.5?4*t*t*t:1-(-2*t+2)**3/2;this.framing=this.frameFrom+(this.frameTo-this.frameFrom)*n}if(this.focusT<this.focusDur){this.focusT=Math.min(this.focusDur,this.focusT+e);let t=this.focusT/this.focusDur,n=(e,t,n)=>{let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)},r=n(0,.22,t)*(1-n(.65,1,t));this.camera.fov=this.baseFov*(1-.14*r),this.camera.updateProjectionMatrix()}let r=this.framing;this.camPos.lerpVectors(this.camBase,this.camMenu,r),this.camPos.z+=this.battleShift*(1-r);let i=this.pitch+(this.pitchMenu-this.pitch)*r;this.shake=Math.max(0,this.shake-e*2.2);let a=this.shake*this.shake*.5;this.camera.position.set(this.camPos.x+(Math.random()-.5)*a,this.camPos.y+(Math.random()-.5)*a,this.camPos.z),this.camera.rotation.set(-i+(Math.random()-.5)*a*.02,0,0)}addShake(e){this.shake=Math.min(1.2,this.shake+e)}render(){this.renderer.render(this.scene,this.camera)}},eb=e=>Math.max(6,Math.round(e.expectedArmy()*.25)),tb=A([{id:`dmg`,icon:`🗡️`,rarity:`common`,max:5,desc:(e,t)=>{let{now:n,next:r}=t.cardStats(`dmg`);return C(`card.dmg.desc`,{now:x(n.dmgMult-1),next:x(r.dmgMult-1)})},mod:(e,t)=>e.dmgMult+=.3*t},{id:`rate`,icon:`⏱️`,rarity:`common`,max:5,desc:(e,t)=>{let{now:n,next:r}=t.cardStats(`rate`);return C(`card.rate.desc`,{now:x(n.rateMult-1),next:x(r.rateMult-1)})},mod:(e,t)=>e.rateMult+=.2*t},{id:`reinforce`,icon:`➕`,rarity:`common`,max:99,instant:!0,desc:(e,t)=>C(`card.reinforce.desc`,{n:T(eb(t))}),use:e=>e.addSoldiers(eb(e))},{id:`range`,icon:`🔭`,rarity:`common`,max:3,desc:e=>C(`card.range.desc`,{from:D((e-1)*15),to:D(e*15)}),mod:(e,t)=>{e.rangeMult*=1+.15*t,e.speedMult*=1+.15*t}},{id:`gold`,icon:`💰`,rarity:`common`,max:3,desc:e=>C(`card.gold.desc`,{from:D((e-1)*40),to:D(e*40)}),mod:(e,t)=>e.goldMult+=.4*t},{id:`pierce`,icon:`📌`,rarity:`rare`,max:4,desc:e=>ee(`card.pierce.desc`,e),mod:(e,t)=>e.pierce+=t},{id:`crit`,icon:`🎯`,rarity:`rare`,max:4,desc:e=>C(`card.crit.desc`,{from:x((e-1)*.15),to:x(e*.15)}),mod:(e,t)=>e.critChance+=.15*t},{id:`frost`,icon:`❄️`,rarity:`rare`,max:2,tag:`frost`,desc:e=>C(`card.frost.desc`,{pct:D(e*25)}),mod:(e,t)=>e.frost=Math.max(e.frost,.25*t)},{id:`recruit`,icon:`📯`,rarity:`rare`,max:3,desc:(e,t)=>C(`card.recruit.desc`,{n:T(Math.max(2,Math.round(t.expectedArmy()*.05*e)))}),mod:(e,t)=>e.recruitPct+=.05*t},{id:`loot`,icon:`🎁`,rarity:`rare`,max:2,desc:e=>C(`card.loot.desc`,{pct:D(e*30)}),mod:(e,t)=>e.lootMult+=.3*t},{id:`armor`,icon:`🛡️`,rarity:`rare`,max:3,desc:e=>C(`card.armor.desc`,{from:x((e-1)*.2),to:x(e*.2)}),mod:(e,t)=>e.armor+=.2*t},{id:`academy`,icon:`🎖️`,rarity:`epic`,max:2,desc:e=>C(`card.academy.desc`,{n:10-4*e,was:10-4*(e-1)}),mod:(e,t)=>e.keep-=4*t},{id:`multishot`,icon:`🏹`,rarity:`epic`,max:3,desc:e=>C(`card.multishot.desc`,{n:e+1}),mod:(e,t)=>e.multishot+=t},{id:`explosive`,icon:`💣`,rarity:`epic`,max:3,tag:`powder`,desc:e=>C(`card.explosive.desc.${Math.min(3,e)}`),mod:(e,t)=>e.explosive+=t},{id:`chain`,icon:`⚡`,rarity:`epic`,max:3,tag:`storm`,desc:e=>C(`card.chain.desc`,{pct:x(.12*e)}),mod:(e,t)=>e.chain+=.12*t},{id:`fire`,icon:`🔥`,rarity:`epic`,max:2,tag:`fire`,desc:e=>C(`card.fire.desc.${Math.min(2,e)}`),mod:(e,t)=>e.burn+=t},{id:`catapult`,icon:`🪨`,rarity:`epic`,max:3,desc:e=>C(`card.catapult.desc.${Math.min(3,e)}`),mod:(e,t)=>e.catapult+=t},{id:`pact`,icon:`🩸`,rarity:`epic`,max:1,desc:()=>C(`card.pact.desc`),mod:e=>e.dmgMult*=2,use:e=>e.loseFraction(.4)}],`card`,[`name`]),nb=e=>tb.find(t=>t.id===e),rb={common:60,rare:30,epic:10},ib=new Set([`dmg`,`rate`,`pierce`,`crit`,`academy`,`multishot`,`explosive`,`chain`,`fire`,`catapult`]);function ab(e,t){let n=t.reduce((e,t)=>e+rb[t.rarity],0),r=e.next()*n,i=0;for(;i<t.length-1&&(r-=rb[t[i].rarity],!(r<=0));i++);return t.splice(i,1)[0]}function ob(e,t,n=3){let r=tb.filter(e=>e.instant||(t[e.id]??0)<e.max),i=[];for(;i.length<n&&r.length>0;)i.push(ab(e,r));if(!i.some(e=>ib.has(e.id))){let t=r.filter(e=>ib.has(e.id));t.length&&i.length&&(i[i.length-1]=ab(e,t))}return i}var sb=new Set([`pact`]);function cb(e,t){let n={...e},r=Object.entries(t);for(let[e,t]of r)sb.has(e)||nb(e)?.mod?.(n,t);for(let[e,t]of r)sb.has(e)&&nb(e)?.mod?.(n,t);return n}var lb=400,ub=class{zones=[];n=0;x=new Float32Array(lb);z=new Float32Array(lb);vx=new Float32Array(lb);vz=new Float32Array(lb);bite=new Float64Array(lb);life=new Float32Array(lb);clear(){this.zones.length=0,this.n=0}addZone(e){this.zones.length<16&&this.zones.push(e)}shoot(e,t,n,r,i,a=15){if(this.n>=lb)return;let o=n-e,s=r-t,c=Math.max(.01,Math.hypot(o,s)),l=this.n++;this.x[l]=e,this.z[l]=t,this.vx[l]=o/c*a,this.vz[l]=s/c*a,this.bite[l]=i,this.life[l]=4}update(e,t){if(this.zones.length){for(let n of this.zones)n.t-=e,n.t<=0&&t.zoneHit(n);this.zones=this.zones.filter(e=>e.t>0)}let n=t.squad,r=n.frontZ()-.4,i=n.backZ()+2;for(let a=this.n-1;a>=0;a--){if(this.x[a]+=this.vx[a]*e,this.z[a]+=this.vz[a]*e,this.life[a]-=e,this.life[a]<=0||this.z[a]>i){this.remove(a);continue}if(this.z[a]<r||n.bodies===0)continue;let o=n.nearest(this.x[a],this.z[a]);if(o<0)continue;let s=n.x[o]-this.x[a],c=n.z[o]-this.z[a];s*s+c*c<.16&&(t.arrowHit(this.bite[a],this.x[a],this.z[a]),this.remove(a))}}remove(e){let t=--this.n;e!==t&&(this.x[e]=this.x[t],this.z[e]=this.z[t],this.vx[e]=this.vx[t],this.vz[e]=this.vz[t],this.bite[e]=this.bite[t],this.life[e]=this.life[t])}},db=0,fb=1,pb=2,mb=class{list=[];pairSeq=0;clear(){this.list.length=0}make(e,t,n,r,i,a,o,s){let c={kind:e,x:t,z:n,hw:r,hd:i,h:a,hp:o,maxHp:o,reward:s,flash:0,pop:0,state:db,fade:0,op:`+`,value:0,pair:-1,cool:0,step:1,pumps:0};return this.list.push(c),c}addDomino(e,t,n,r){this.make(`domino`,e,t,.55,.4,.55,n,r)}addBig(e,t,n,r){this.make(`big`,e,t,1.05,.75,1.25,n,r)}addChest(e,t,n){this.make(`chest`,e,t,.72,.55,1.1,n,0)}addGates(e,t,n,r){let i=this.pairSeq++;for(let[a,o]of[[-2,t],[2,n]]){let t=this.make(`gate`,a,e,1.97,.2,2.2,1,0);t.op=o.op,t.value=o.value,t.pair=i,t.step=r}}addTrap(e,t,n,r,i){let a=this.make(`trap`,e,t,n,r,.3,1,0);a.value=i}isAlive(e){return e.state===db}update(e,t){let n=!1;for(let r of this.list)r.z+=t.scroll*e,r.pop=Math.min(1,r.pop+e*3.5),r.flash>0&&(r.flash-=e),r.cool>0&&(r.cool-=e),r.state===fb&&(r.fade-=e,r.fade<=0&&(r.state=pb)),r.kind===`gate`&&r.state===db&&r.z>=0&&this.triggerGate(r,t),r.z>10&&(r.state=pb),r.state===pb&&(n=!0);n&&(this.list=this.list.filter(e=>e.state!==pb))}triggerGate(e,t){let n=t.squad.cx,r=null;for(let t of this.list)t.pair===e.pair&&t.state===db&&(Math.abs(n-t.x)<=t.hw+.05&&(r=t),t.state=fb,t.fade=.35);r&&t.applyGate(r)}hitTest(e,t,n,r,i){for(let a of this.list)if(a.state===db&&a.kind!==`trap`&&Math.abs(e-a.x)<a.hw&&t<a.z+a.hd&&n>a.z-a.hd){if(this.onHit(a,r,i),a.kind===`gate`)continue;return!0}return!1}breakNow(e,t){e.state===db&&(e.hp=0,e.state=fb,e.fade=.25,t.breakProp(e))}onHit(e,t,n){e.flash=.07,e.kind===`gate`?e.cool<=0&&e.op===`+`&&(e.value+=e.step,e.cool=.2,e.pumps++,I.pump(e.x,e.pumps)):(e.hp-=t,I.blockHit(e.x,Math.max(0,e.hp)/e.maxHp),e.hp<=0&&(e.hp=0,e.state=fb,e.fade=.25,n.breakProp(e)))}};function hb(e){return{dmgMult:F_(e.forge),rateMult:I_(e.drill),rangeMult:1,speedMult:1,pierce:0,multishot:1,critChance:0,critMult:3,explosive:0,frost:0,burn:0,chain:0,lootMult:1,goldMult:1,armor:0,recruitPct:0,catapult:0,keep:10}}var gb=[`wolf`,`shaman`,`slime`,`slinger`,`bat`,`troll`,`ghost`,`tortoise`,`banner`,`boar`],_b=[7,12,16,21,27,34,42,50,59,68],vb=[2,2,3,3,4,4,5,5,6,6];function yb(e,t){let n=0;for(let r of e)n+=r.shots*Math.min(1,r.dmg/t);return n}function bb(e,t,n){let r=n;for(;yb(e,r)>t&&r<1e300;)r*=2;n=Math.max(n,r/2);for(let i=0;i<30;i++){let i=(n+r)/2;yb(e,i)>t?n=i:r=i}return r}var xb=e=>12*1.75**(e-1),Sb=e=>{let t=xb(e),n=Math.min(y,Math.max(0,Math.log10(t/2)));return t*1.6*1.25**n*1.13**(Math.min(e,24)-1)},Cb=(e,t)=>{let n=t>e?.8:.25;return e**(1-n)*Math.max(1,t)**+n},wb=e=>d*(1.4+.15*e+.006*e*e),Tb=280,Eb=540,Db=3,Ob=2.75;function kb(e,t,n,r){let i=r&&t>=3&&n.chance(.12)?{op:`x`,value:2}:{op:`+`,value:Math.max(3,Math.round(n.range(.08,.14)*e))},a=n.chance(.6)?{op:`+`,value:-Math.max(3,Math.round(n.range(.06,.12)*e))}:{op:`+`,value:Math.max(1,Math.round(.02*e))},o=Math.max(1,Math.round(.006*e));return n.chance(.5)?{left:i,right:a,step:o}:{left:a,right:i,step:o}}function Ab(e,n,r,i,a=0){let o=Sb(e)*(i.expect??1),s=Cb(o*1.6,i.power),c=Cb(o,i.single),l=i.heat??1,u=o**.15*Math.max(10,i.single)**.85*Math.sqrt(l),d=xb(e),f=i.reward??d,m=Math.min(Math.max(1,i.value),Math.sqrt(d*Math.max(1,i.value))),h=[],g=n.sign(),_=Math.max(1,Math.round(.06*t*c)),v=Math.max(1,Math.round(.012*f)),y=()=>({hp:Math.round(.9*t*c),reward:Math.max(4,Math.round(.12*f))}),b=wb(e)*l*s*Math.max(8,i.shots)/Math.max(1,i.single),x=Math.max(1,i.power/Math.max(1,i.single)),S=(e,t,n,r=!1)=>{let a=b*t,o=Math.round(Nt(a,6,r?Eb:Tb)),s=Math.max(1,i.minDmg);if(a>o&&i.weapons.length){let e=a/(Math.max(8,i.shots)*x);s=bb(i.weapons,o/(e*x),s)}let c=(r?.25:.15)*m/o,l=r?7.6:Nt(2.4+o*.03,2.4,7);h.push({t:e,kind:`group`,enemy:`grunt`,count:o,x:r?0:n,w:l,hp:s,bite:c,tide:r})},C=(e,t)=>{if(!t){let t=n.chance(.3);h.push({t:e,kind:`trap`,x:t?0:n.sign()*2.1,hw:t?1.5:2,hd:.8,dz:0});return}let r=n.int(3,5),i=n.sign();for(let t=0;t<r;t++,i=-i)h.push({t:e,kind:`trap`,x:i*2.1,hw:2,hd:.8,dz:t*7})},w=(e,t,n,r,i,a,o={})=>{h.push({t:e,kind:`group`,enemy:t,count:n,x:r,w:Nt(1.6+n*.12,1.6,6),hp:i,bite:a*m/n,...o})},T=Math.max(1,i.minDmg),E=(t,n)=>Math.max(12,u*(t+n*e)*p),D=(t,n)=>{let r=Nt(Math.round(1+e/3),1,6),i=Math.max(.5,.1*m/r);h.push({t,kind:`group`,enemy:`brute`,count:r,x:n,w:3.2,hp:E(.07,.003),bite:i})};h.push({t:.3,kind:`dominos`,x:g*Db,n:Math.min(14,6+Math.floor(e)),hp:_,reward:v});let O=1.6*c/Math.max(8,i.shots),k=(t,n,r)=>{switch(n){case`wolf`:return w(t,`wolf`,Math.round(Nt(b*.3,6,40)),r,T,.08);case`shaman`:return w(t+1.2,`shaman`,e>40?2:1,r,E(.03,.0012),.03);case`slime`:return w(t,`slime`,Math.round(Nt(b*.08,3,14)),r,T*4,.08);case`slinger`:return w(t+1,`slinger`,Math.round(Nt(2+e/12,2,6)),r,T*3,.05);case`bat`:return w(t,`bat`,Math.round(Nt(b*.35,8,50)),r,T*.8,.06);case`troll`:return w(t+.8,`troll`,e>55?2:1,r,E(.12,.004),.1);case`ghost`:return w(t,`ghost`,Math.round(Nt(4+e/15,4,12)),r,T*3,.06);case`tortoise`:return w(t+.6,`tortoise`,Math.round(Nt(1+e/30,1,4)),r,E(.06,.002),.08,{armor:O*.6});case`banner`:return w(t+1.4,`banner`,1,r,E(.05,.002),.03);default:return w(t,`boar`,Math.round(Nt(2+e/20,2,6)),r,E(.025,.001),.1)}},A=Math.min(gb.length,i.newcomers??0),ee=i.fresh??-1;if(r){let t=a>=2;S(1.4,t?.45:.65,0),h.push({t:3.2,kind:`big`,x:-g*Ob,...y()});let r=a===2,i=Math.round(r?Nt(b,40,240):Nt(b*(a===5?.3:.25),6,60)),o=[1,1,.7,.85,.9,.75,.8][a]??1,s=[1,1,.6,1,1,.7,.8][a]??1;return h.push({t:6,kind:`boss`,boss:a,hp:Math.round((7+.12*e)*u*o*(t?1:.85)),bite:Math.max(2,.05*m*s),ability:{zoneBite:.12*m,summonCount:i,summonHp:T*(r?1:2),summonBite:.06*m/i}}),S(9.5,t?.3:.45,n.range(-1.5,1.5)),e>=3&&!t&&D(13,n.range(-1.5,1.5)),h.push({t:15,kind:`dominos`,x:g*Db,n:8,hp:_,reward:v}),{events:h.sort((e,t)=>e.t-t.t),boss:!0}}let te=1;n.chance(.75)&&(h.push({t:te,kind:`gates`,...kb(f,e,n,i.value<d)}),te+=1);let j=Math.min(7,3+Math.floor(e/3)),ne=e>=2.5?Math.min(3,Math.floor((e-1)/2)):0;for(let r=0;r<j;r++){let a=r===j-1,o=a&&e>=1.7;te+=r===0?.1:n.range(3.4,4.6)+(o?1.2:0);let s=n.range(.8,1.2)*(o?1.35:a?1.3:1),l=n.range(-2,2);if(r<ne&&!o&&(D(te+1.1,n.range(-2,2)),s*=.65),r===1&&e>=2.2){let e=Math.round(Nt(b*.22*n.range(.8,1.2),4,60));w(te-.25,`kamikaze`,e,l,1.6*c/Math.max(8,i.shots),.08),s*=.8}if(r===0&&e>=3){let t=Math.round(Nt(3+e*.8,4,14));w(te+1.6,`archer`,t,n.range(-2.5,2.5),T*3,.06/6),s*=.85}if(r===Math.max(1,j-2)&&e>=4){let t=Math.round(Nt(2+e/2,3,10)),n=E(.06,.0025);w(te-.35,`shield`,t,l,n*.4,.08,{shield:n*.6}),s*=.8}if(A>0&&!o&&r>=1){let t=1+ +(e>45),i=r-1;if(i<t){let e=i===0&&ee>=0?ee:Math.min(A-1,Math.floor(n.next()*A));k(te+.4,gb[e],n.range(-2,2)),s*=.82}}S(te,s,l,o),r===1&&n.chance(.65)||r===3&&j>=5&&n.chance(.5)?h.push({t:te+1.4,kind:`gates`,...kb(f*.6,e,n,i.value<d)}):r>=1&&e>=1.8&&n.chance(.35)&&C(te+1.2,e>=2.5&&n.chance(.45)),r===0?h.push({t:te+.8,kind:`big`,x:n.sign()*Ob,...y()}):n.chance(.5)&&h.push({t:te+.5,kind:`dominos`,x:n.sign()*Db,n:n.int(4,8),hp:_,reward:v}),r===j-2&&n.chance(.45+.05*e)&&h.push({t:te+1.6,kind:`chest`,x:n.sign()*Ob,hp:Math.round(.8*t*c)})}return{events:h.sort((e,t)=>e.t-t.t),boss:!1}}var jb=.47,Mb=e=>{let t=e-1;if(t<=29)return 1+.75*t+.02*t*t;let n=t-29;return 39.57+jb*n+8.64*(1-Math.exp(-n/6))},Nb=e=>e%5==0,Pb=A([{id:`grunt`,hp:1,speed:3,damage:1},{id:`brute`,hp:4,speed:2,damage:4},{id:`archer`,hp:1,speed:2,damage:2},{id:`shield`,hp:3,speed:2,damage:3},{id:`kamikaze`,hp:1,speed:5,damage:3},{id:`skeleton`,hp:1,speed:3,damage:1},{id:`wolf`,hp:1,speed:5,damage:2},{id:`shaman`,hp:2,speed:2,damage:1},{id:`slime`,hp:2,speed:2,damage:2},{id:`slinger`,hp:1,speed:2,damage:2},{id:`bat`,hp:1,speed:4,damage:1},{id:`troll`,hp:5,speed:1,damage:4},{id:`ghost`,hp:2,speed:2,damage:2},{id:`tortoise`,hp:4,speed:1,damage:3},{id:`banner`,hp:2,speed:2,damage:1},{id:`boar`,hp:3,speed:3,damage:4},{id:`spiderling`,hp:1,speed:4,damage:1},{id:`ogre`,boss:!0,hp:5,speed:2,damage:5},{id:`golem`,boss:!0,hp:5,speed:1,damage:4},{id:`necro`,boss:!0,hp:4,speed:2,damage:3},{id:`dragon`,boss:!0,hp:5,speed:3,damage:5},{id:`kraken`,boss:!0,hp:5,speed:1,damage:5},{id:`spider`,boss:!0,hp:4,speed:2,damage:3},{id:`warking`,boss:!0,hp:5,speed:1,damage:4}],`beast`,[`name`,`role`,`lore`,`strength`,`weakness`]).map(e=>Object.defineProperty(e,"hint",{get:()=>b(`beast.${e.id}.hint`)?C(`beast.${e.id}.hint`):void 0,enumerable:!0})),Fb=[n.ogre,n.stone,7153881,14427686,8141549,2042167,11817737],Ib=[`grunt`,`brute`,`boss`,`archer`,`shield`,`kamikaze`,`skeleton`,`wolf`,`shaman`,`slime`,`slime`,`slinger`,`troll`,`bat`,`ghost`,`tortoise`,`banner`,`boar`,`spiderling`],Lb=[`pop`,`big`,`big`,`pop`,`pop`,`pop`,`bone`,`pop`,`pop`,`slime`,`slime`,`pop`,`big`,`bat`,`ghost`,`big`,`pop`,`pop`,`bug`],Rb=[n.red,n.maroon,0,n.red,n.red,n.red,n.bone,7893356,4906624,8702998,8702998,n.red,5078031,4144966,13095678,6583435,16436245,9584654,2042167],zb=.8,Bb=[`dmg.shots`,`dmg.blast`,`dmg.chain`,`dmg.burn`,`dmg.rock`,`dmg.kamikaze`];function Vb(e,t,r,i,a,o,s,c=-1){c>=0&&e.views.impact(o,s,c,i,a);let l=e.enemies,u=e.stats;return l.guarded[t]?(Ub(e,t,o,s),a>0&&Xb(e,o,s,a,r*.5,t),!0):l.shield[t]>0?(e.dmgBy[0]+=Math.min(r,l.shield[t]),l.shield[t]-=r,l.flash[t]=.06,l.shield[t]<=0?(e.particles.burst(l.x[t],.6,l.z[t]+.4,10,n.wood,3.5,.14,.6,3),I.blockBreak(`shield`,l.x[t])):I.shieldHit(l.x[t]),a>0&&(Hb(e,t,r*.5,1),Xb(e,o,s,a,r*.5,t)),!0):(Hb(e,t,r),l.hp[t]>0&&(i&2&&(l.slowT[t]=1.8,l.slowAmt[t]=Math.max(l.slowAmt[t],u.frost)),i&4&&(l.burnT[t]=2,l.burnDps[t]=Math.max(l.burnDps[t],r*.6*u.burn))),a>0&&Xb(e,o,s,a,r*.5,t),u.chain>0&&Math.random()<u.chain&&Zb(e,t,r*.8),!1)}function Hb(e,t,n,r=0){let i=e.enemies;i.hp[t]<=0||i.veiled[t]||i.ward[t]||(i.guarded[t]?Ub(e,t,i.x[t],i.z[t]+1):(i.armor[t]>0&&(n=Math.max(n*.12,n-i.armor[t])),i.buffT[t]>0&&(n*=.7),i.quiet[t]=0,e.dmgBy[r]+=Math.min(n,i.hp[t]),i.hp[t]-=n,i.flash[t]=.06,i.hp[t]<=0&&(e.views.punch=r===1||r===4||r===5?1.7:1,e.killEnemy(t),e.views.punch=1)))}function Ub(e,t,n,r){if(I.wardHit(n),Math.random()>.12)return;let i=e.enemies;e.particles.burst(n,1.2+Math.random()*.4*i.scale[t],r,2,4906624,2.2,.1,.32,2)}function Wb(e,t){let i=e.enemies;i.hp[t]=0,e.kills++,e.views.enemyDown(e,t);let a=i.type[t]===2?_p[i.kind[t]].id:Ib[i.type[t]];e.teleportTo===0&&(e.save.kills[a]=(e.save.kills[a]??0)+1),i.type[t]===2&&e.bossKills++,e.mode===`endless`&&i.type[t]!==2&&(e.killZ+=i.z[t],e.killN++);let o=i.x[t],s=i.z[t],c=i.type[t];if(e.streak++,e.streakT=1.1,c===5&&e.blasts.push({x:o,z:s,dmg:i.maxHp[t]*10}),c===2){e.bossAbility=null,e.hazards.zones.length=0,e.particles.burst(o,2,s,110,Fb[i.kind[t]],8,.32,1.3,8),e.particles.burst(o,2.5,s,50,n.gold,7,.22,1.3,9),e.world.addShake(1.2),e.freeze(.45,.22),I.bossDie(o),Qe(150);let r=e.mode===`endless`?Math.round((25+5*e.wave)*e.goldRate):Math.round(50+e.d*20);e.mode!==`tutorial`&&e.dropRelic(i.kind[t]),e.coins.burst(o,s,r,Nt(Math.round(r*e.goldScale/8),10,24),1.6),e.scrollTarget=u,e.teleportTo===0&&(wt.play(null,{fade:.35}),window.setTimeout(()=>e.state===`playing`&&e.landSong(),1400))}else if(c===1||c===12||c===15)e.particles.burst(o,.6,s,22,Rb[c],4.2,.17,.65,5),e.coins.drop(o,s,e.mode===`endless`?.25*e.goldRate:1,e.goldScale),e.world.addShake(.16),e.freeze(.045),I.enemyDie(`big`,o,e.streak);else{e.particles.burst(o,.45,s,7,Rb[c]??n.red,3.6,.115,.5,4);let a=c===3||c===4||c===8||c===11||c===16||c===17,l=d*(e.mode===`campaign`?r.horde:1);if(e.coins.drop(o,s,(a?.5:.04/l)*(e.mode===`endless`?.25*e.goldRate:1),e.goldScale),I.enemyDie(Lb[c]??`pop`,o,e.streak),c===9)for(let n=0;n<3;n++){let r=n/3*Math.PI*2+Math.random(),a=e.enemies.spawn(10,o+Math.cos(r)*.45,s+Math.sin(r)*.3,i.maxHp[t]*.3,i.bite[t]*.35,i.group[t]);a>=0&&(e.enemies.buffT[a]=i.buffT[t])}}}function Gb(e){let t=0;for(;e.blasts.length&&t++<300;){let t=e.blasts.pop();Xb(e,t.x,t.z,1.8,t.dmg,-1,5),e.particles.burst(t.x,.5,t.z,14,16747069,5,.15,.55,4.5),e.views.ring(t.x,t.z,1.8,16747069),e.world.addShake(.12),e.freeze(.035),I.explode(t.x,0)}}function Kb(e,t){let n=e.enemies,r=e.squad;if(r.bodies===0)return 1;let i=n.type[t];if(i===16)return 99;if(i===3){if(n.z[t]<-30)return .4;let i=r.cx+(Math.random()-.5)*r.radius*1.5;return e.hazards.shoot(n.x[t],n.z[t]+.3,i,0,n.bite[t]),I.arrow(n.x[t]),1.6+Math.random()*.6}if(i===8){if(n.z[t]<-34)return .5;let r=n.collectNear(n.x[t],n.z[t],4.5,e.near,t),i=0;for(let t=0;t<r;t++){let r=e.near[t];n.type[r]===2||n.hp[r]>=n.maxHp[r]||(n.hp[r]=Math.min(n.maxHp[r],n.hp[r]+n.maxHp[r]*.3),i++)}return i>0&&(e.views.ring(n.x[t],n.z[t],4.5,4906624),e.particles.burst(n.x[t],1.3,n.z[t],10,8843180,3,.1,.6,3),n.actT[t]=.6,I.heal(n.x[t])),3.2+Math.random()*.6}if(i===11)return n.z[t]<-30?.4:(e.hazards.addZone({kind:`rock`,x:r.cx+(Math.random()-.5)*r.radius*1.6,z:(Math.random()-.5)*r.radius,hw:1,hd:1,round:!0,t:1.15,max:1.15,bite:n.bite[t],fromX:n.x[t],fromZ:n.z[t],size:.4}),n.actT[t]=.5,I.sling(n.x[t]),3.6+Math.random()*1.2);let a=e.bossAbility;if(!a)return 99;let o=n.kind[t];if(o===1){if(n.z[t]<-34)return .5;let i=1.7;return e.hazards.addZone({kind:`rock`,x:r.cx+(Math.random()-.5)*1.2,z:0,hw:i,hd:i,round:!0,t:1.4,max:1.4,bite:a.zoneBite,fromX:n.x[t],fromZ:n.z[t]}),n.actT[t]=hy[1],I.heave(n.x[t]),3.2}if(o===3)return n.z[t]<-30?.5:(e.hazards.addZone({kind:`fire`,x:r.cx,z:0,hw:1.3,hd:r.radius+1.6,round:!1,t:1.25,max:1.25,bite:a.zoneBite*.85,fromX:n.x[t],fromZ:n.z[t]}),n.actT[t]=hy[3],I.breath(n.x[t]),3.6);if(o===4){if(n.z[t]<-32)return .5;let i=1.25+Math.random()*.5,o=Nt(r.cx+(Math.random()-.5)*1.6,-2.4,2.4);for(let s of[-1,1])e.hazards.addZone({kind:`slam`,x:o+s*i,z:-.5,hw:.85,hd:r.radius+2.6,round:!1,t:1.2,max:1.2,bite:a.zoneBite*.55,fromX:n.x[t],fromZ:n.z[t]});return n.actT[t]=hy[4],I.tentacles(n.x[t]),3.3}if(o===5){if(n.z[t]<-32)return .5;if(n.charge[t]^=1,n.actT[t]=hy[5],n.charge[t]){let r=e.enemies.newGroup();for(let i=0;i<a.summonCount;i++){let i=Nt(n.x[t]+(Math.random()-.5)*5,-3.7,3.7);e.enemies.spawn(18,i,n.z[t]+1+Math.random()*2.5,a.summonHp,a.summonBite,r)}return e.particles.burst(n.x[t],1,n.z[t]+1,20,2042167,4,.12,.7,4),I.skitter(n.x[t]),4.6}for(let i=0;i<3;i++)e.hazards.addZone({kind:`web`,x:r.cx+(i-1)*1.7+(Math.random()-.5)*.6,z:(Math.random()-.5)*r.radius,hw:1.15,hd:1.15,round:!0,t:1.1+i*.15,max:1.1+i*.15,bite:a.zoneBite*.35,fromX:n.x[t],fromZ:n.z[t],size:.45});return I.spit(n.x[t]),3.8}if(o===6){if(n.z[t]<-34)return .5;if(n.charge[t]^=1,n.actT[t]=hy[6],n.charge[t]){for(let i=0;i<3;i++){let o=1.05+i*.3;e.hazards.addZone({kind:`rock`,x:r.cx+(i-1)*1.7+(Math.random()-.5)*.8,z:(Math.random()-.5)*r.radius,hw:1.3,hd:1.3,round:!0,t:o,max:o,bite:a.zoneBite*.4,fromX:n.x[t],fromZ:n.z[t],size:.55,tint:1})}return I.cannon(n.x[t]),3.6}let i=e.enemies.newGroup();for(let r=0;r<a.summonCount;r++){let r=Nt(n.x[t]+(Math.random()-.5)*5,-3.7,3.7);e.enemies.spawn(0,r,n.z[t]+1.5+Math.random()*2.5,a.summonHp,a.summonBite,i)}return I.call(n.x[t]),4.2}if(o===2){if(n.z[t]<-32||n.guarded[t])return .5;if(n.hold[t]===0)return 99;let r=e.enemies.newGroup(),i=3+a.summonCount/30;for(let o=0;o<a.summonCount;o++){let o=Nt(n.x[t]+(Math.random()-.5)*7.4,-3.7,3.7),s=e.enemies.spawn(6,o,n.z[t]+1.5+Math.random()*i,a.summonHp,a.summonBite,r);s>=0&&(e.enemies.ward[s]=1,e.enemies.owner[s]=n.uid[t])}return e.particles.burst(n.x[t],2.5,n.z[t],40,4906624,5,.13,.9,5),n.guarded[t]=1,n.actT[t]=hy[2],I.raise(n.x[t]),5.5}return 99}function qb(e,t){let r=e.squad,i=0;for(let e=0;e<r.bodies;e++){let n=r.x[e]-t.x,a=r.z[e]-t.z;(t.round?n*n+a*a<t.hw*t.hw:Math.abs(n)<t.hw&&Math.abs(a)<t.hd)&&i++}if(t.kind===`rock`){let r=(t.size??1)<.8;e.particles.burst(t.x,.4,t.z,r?10:26,t.tint?4144966:n.stone,r?4:6,r?.14:.2,.7,5),e.views.ring(t.x,t.z,t.hw*1.2,t.tint?16747069:14078929),e.world.addShake(r?.15:.5),t.tint?I.explode(t.x,0):r?I.stone(t.x):I.thud(t.x)}else t.kind===`slam`?(e.views.tentacleSlam(t.x,t.z,t.hd),e.particles.burst(t.x,.5,t.z,24,6333946,5,.14,.7,4),e.views.ring(t.x,t.z+t.hd*.4,1.8,9684477),e.world.addShake(.6),I.splash(t.x)):t.kind===`web`?(e.particles.burst(t.x,.4,t.z,12,15067115,3,.1,.6,3),e.views.ring(t.x,t.z,t.hw*1.1,14285213),I.splat(t.x)):(e.views.fireCarpet(t.x,t.z,t.hw,t.hd),e.world.addShake(.35),I.fire(t.x));i!==0&&r.bodies!==0&&(e.biteAcc+=t.bite*(i/r.bodies)*(1-Math.min(zb,e.stats.armor)),Qe(80),Yb(e,t.x,t.z))}function Jb(e,t,n,r){e.stats.armor>0&&Math.random()<Math.min(zb,e.stats.armor)?e.particles.burst(n,.6,r,2,15067115,2,.08,.3,2):(e.biteAcc+=t,Yb(e,n,r))}function Yb(e,t=e.biteX,n=e.biteZ){if(e.teleportTo>0){e.biteAcc=0;return}if(e.biteAcc<1)return;let r=Math.floor(e.biteAcc);e.biteAcc-=r,$b(e,r,t,n)}function Xb(e,t,n,r,i,a,o=1){let s=e.enemies.collectNear(t,n,r,e.near,a);for(let t=0;t<s;t++)Hb(e,e.near[t],i,o);Math.random()<.25&&e.particles.burst(t,.4,n,3,16747069,2.5,.1,.35,2.5)}function Zb(e,t,n){let r=e.enemies,i=r.collectNear(r.x[t],r.z[t],3.5,e.near,t),a=r.x[t],o=r.z[t],s=Math.min(3,i);for(let t=0;t<s;t++){let i=e.near[t];e.bolts.add(a,o,r.x[i],r.z[i]),a=r.x[i],o=r.z[i],Hb(e,i,n,2)}s&&I.zap(r.x[t])}function Qb(e,t,r,i){let a=e.enemies,o=a.x[t],s=a.z[t];if(a.type[t]===2)a.contact[t]=1,a.actT[t]<=0&&(a.actT[t]=hy[a.kind[t]]),e.biteAcc+=i*a.bite[t]*(1-Math.min(zb,e.stats.armor)),e.world.addShake(i*1.6);else{e.leaks++,e.stats.armor>0&&Math.random()<Math.min(zb,e.stats.armor)?e.particles.burst(o,.6,s,2,15067115,2,.08,.3,2):e.biteAcc+=a.bite[t];let r=a.type[t]===5;e.particles.burst(o,.4,s,r?12:4,r?16747069:n.red,r?4:3,.12,.5,3),r&&I.explode(o,0),e.views.enemyDown(e,t),a.hp[t]=0,e.world.addShake(a.type[t]===1||r?.3:.04),(a.type[t]===1||r)&&Qe(40)}e.biteX=o,e.biteZ=s}function $b(e,t,n,r){e.squad.lose(t,n,r)>0&&I.soldierDie(n)}function ex(e,t){let r=e.squad;if(e.trapShowT>0&&(e.trapShowT-=t,e.trapShowT<=0&&e.trapShown>0&&(e.floaters.add(`-${T(e.trapShown)}`,r.cx,2.4,-1,16739179,.95),e.trapShown=0)),r.bodies===0||e.teleportTo>0)return;let i=r.frontZ()-.4,a=r.backZ()+.4;for(let o of e.props.list){if(o.kind!==`trap`||!e.props.isAlive(o)||o.z+o.hd<i||o.z-o.hd>a)continue;let s=0,c=0,l=0;for(let e=0;e<r.bodies;e++)Math.abs(r.x[e]-o.x)<o.hw+.12&&Math.abs(r.z[e]-o.z)<o.hd&&(s++,c+=r.x[e],l+=r.z[e]);if(s===0||(o.flash=.08,e.trapAcc+=o.value*r.value*(s/r.bodies)*e.scroll*t/(2*o.hd),e.trapAcc<1))continue;let u=Math.floor(e.trapAcc);e.trapAcc-=u,$b(e,u,c/s,l/s),I.trap(c/s),e.particles.burst(c/s,.35,l/s,5,13751771,3.2,.09,.4,4),e.particles.burst(c/s,.35,l/s,3,n.red,2.6,.1,.45,3.5),e.world.addShake(.06),e.trapShown+=u,e.trapShowT<=0&&(e.trapShowT=.35),Qe(15)}}function tx(e,t){let r=t.kind===`domino`?3900150:t.kind===`big`?16098596:n.chestWood;if(e.particles.burst(t.x,t.h*.6,t.z,t.kind===`domino`?8:24,r,4,t.kind===`domino`?.14:.22,.7,4),I.blockBreak(t.kind===`chest`?`chest`:t.kind===`big`?`big`:`block`,t.x),t.kind===`chest`){e.particles.burst(t.x,1,t.z,24,n.gold,5,.12,.9,6),e.coins.burst(t.x,t.z,15*e.goldRate,6,1),e.ui.banner(S(`banner.chest`),S(`banner.chestSub`),`chest`),e.queueCards(`chest`,.45),Qe(40);return}let i=Math.round(t.reward*e.stats.lootMult);e.addSoldiers(i,t.x,t.z),e.floaters.add(`+${T(i)}`,t.x,t.h+.9,t.z,8246268,t.kind===`big`?.95:.6),t.kind===`big`&&(Qe(30),e.world.addShake(.15))}function nx(e,t){let n=e.squad,r=t.op===`x`?n.value*(t.value-1):t.value>0?Math.round(t.value*e.stats.lootMult):t.value;if(r>0)I.gate(t.op===`x`,t.x),e.addSoldiers(r,t.x,0,!0),e.floaters.add(`+${T(r)}`,n.cx,2.4,-1,8246268,.95),Qe(25);else if(r<0){let t=Math.min(n.value,-r);$b(e,t,n.cx,n.frontZ()),e.floaters.add(`-${T(t)}`,n.cx,2.4,-1,16739179,.95),I.loss(n.cx),Qe(60),e.world.addShake(.3)}}var rx=`#141a33`,ix=e=>`<svg viewBox="0 0 48 48" aria-hidden="true"><g stroke="${rx}" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round">${e}</g></svg>`,ax={dmg:ix(`
    <path d="M38 4h6v6L23 31l-6-6z" fill="#e5e7eb"/>
    <path d="M11 22l15 15-3.5 3.5-15-15z" fill="#fbbf24"/>
    <path d="M13 31l4 4-7 7-4-4z" fill="#92582c"/>
    <circle cx="6.5" cy="41.5" r="3" fill="#fbbf24"/>`),rate:ix(`
    <rect x="20" y="3" width="8" height="6" rx="2" fill="#fbbf24"/>
    <path d="M37 11l3.5-3.5" fill="none"/>
    <circle cx="24" cy="27" r="17" fill="#fbbf24"/>
    <circle cx="24" cy="27" r="12.5" fill="#fff"/>
    <path d="M24 27v-9M24 27l6.5 4" fill="none"/>`),reinforce:ix(`
    <circle cx="24" cy="24" r="19" fill="#3b82f6"/>
    <path d="M20 11h8v9h9v8h-9v9h-8v-9h-9v-8h9z" fill="#fff"/>`),range:ix(`
    <path d="M4 37l7 7 15-15-7-7z" fill="#92582c"/>
    <path d="M17 24l7 7 17-17-7-7z" fill="#fbbf24"/>
    <path d="M32 5l11 11" stroke="#7dd3fc" stroke-width="5"/>
    <path d="M32 5l11 11" fill="none"/>`),gold:ix(`
    <path d="M18 14C12 20 7 26 7 33c0 7 7 10 17 10s17-3 17-10c0-7-5-13-11-19z" fill="#a16207"/>
    <path d="M18 14l-4-8h20l-4 8z" fill="#a16207"/>
    <circle cx="24" cy="31" r="7.5" fill="#fbbf24"/>
    <path d="M24 27v8" fill="none"/>`),pierce:ix(`
    <rect x="13" y="8" width="6" height="32" rx="2" fill="#a8a29e"/>
    <rect x="26" y="8" width="6" height="32" rx="2" fill="#a8a29e"/>
    <path d="M3 24h34" fill="none" stroke-width="3.5"/>
    <path d="M36 17l9 7-9 7z" fill="#e5e7eb"/>
    <path d="M3 24l-1-5M3 24l-1 5" fill="none"/>`),crit:ix(`
    <path d="M3 24c5-9 12-14 21-14s16 5 21 14c-5 9-12 14-21 14S8 33 3 24z" fill="#fff"/>
    <circle cx="24" cy="24" r="8.5" fill="#f59e0b"/>
    <circle cx="24" cy="24" r="3.5" fill="${rx}"/>
    <path d="M24 2v7M24 39v7" stroke="#ef4444" stroke-width="3"/>`),frost:ix(`
    <path d="M24 4v40M6.7 14l34.6 20M6.7 34l34.6-20" stroke-width="7"/>
    <path d="M24 4v40M6.7 14l34.6 20M6.7 34l34.6-20" stroke="#7dd3fc" stroke-width="3.5"/>
    <path d="M19 7l5 5 5-5M19 41l5-5 5 5" fill="none" stroke="#7dd3fc" stroke-width="3"/>
    <circle cx="24" cy="24" r="4" fill="#e0f2fe"/>`),recruit:ix(`
    <path d="M5 28h17l18-14v24L22 33H5z" fill="#fbbf24"/>
    <path d="M5 24v14" fill="none"/>
    <path d="M14 33c0 5 4 8 9 8" fill="none"/>
    <path d="M40 14v24" fill="none"/>`),loot:ix(`
    <rect x="5" y="21" width="38" height="21" rx="3" fill="#a0612b"/>
    <path d="M5 21c0-8 7-13 19-13s19 5 19 13z" fill="#6b3d17"/>
    <rect x="13" y="9" width="5" height="33" fill="#fbbf24"/>
    <rect x="30" y="9" width="5" height="33" fill="#fbbf24"/>
    <rect x="20" y="23" width="8" height="8" rx="1.5" fill="#fde047"/>`),armor:ix(`
    <path d="M24 3l17 6v13c0 11-7 19-17 23C14 41 7 33 7 22V9z" fill="#2563eb"/>
    <path d="M24 10l10 4v8c0 7-4 12-10 15-6-3-10-8-10-15v-8z" fill="#fbbf24"/>`),academy:ix(`
    <path d="M13 3h8l5 15h-8z" fill="#ef4444"/>
    <path d="M27 3h8l-5 15h-8z" fill="#3b82f6"/>
    <circle cx="24" cy="31" r="13" fill="#fbbf24"/>
    <path d="M24 23.5l2.3 4.8 5.2.8-3.8 3.6.9 5.2-4.6-2.5-4.6 2.5.9-5.2-3.8-3.6 5.2-.8z" fill="#fff"/>`),multishot:ix(`
    <path d="M7 41L37 11M7 41L42 28M7 41L20 6" fill="none" stroke-width="3"/>
    <path d="M37 11l-9 1 8 8z" fill="#e5e7eb"/>
    <path d="M42 28l-8-5-1 10z" fill="#e5e7eb"/>
    <path d="M20 6l-6 6 9 3z" fill="#e5e7eb"/>`),explosive:ix(`
    <circle cx="21" cy="29" r="15" fill="#334155"/>
    <path d="M28 12l6 6-4 4-6-6z" fill="#64748b"/>
    <path d="M33 13c2-4 5-6 8-5" fill="none"/>
    <path d="M42 2l1.3 3.2 3.2 1.3-3.2 1.3L42 11l-1.3-3.2-3.2-1.3 3.2-1.3z" fill="#fde047"/>
    <circle cx="15" cy="23" r="4" fill="#fff" stroke="none" opacity="0.35"/>`),chain:ix(`<path d="M29 2L9 27h12l-5 19 23-27H27z" fill="#fde047"/>`),fire:ix(`
    <path d="M24 2c3 9 15 13 15 26a15 15 0 0 1-30 0c0-7 4-12 8-16 0 5 2 9 5 10-1-8 0-14 2-20z" fill="#f97316"/>
    <path d="M24 25c2 4 7 6 7 11a7 7 0 0 1-14 0c0-4 3-7 7-11z" fill="#fde047"/>`),catapult:ix(`
    <path d="M14 30l7-14 14-3 9 10-4 15-15 4z" fill="#9ca3af"/>
    <path d="M24 18l3 9-7 6" fill="none"/>
    <path d="M3 14h10M2 22h8M5 30h6" fill="none"/>`),pact:ix(`
    <path d="M24 3c6 10 15 17 15 27a15 15 0 0 1-30 0c0-10 9-17 15-27z" fill="#dc2626"/>
    <path d="M17 30a7 7 0 0 0 7 7" fill="none" stroke="#fff" opacity="0.7"/>`),recruits:ix(`
    <path d="M8 31c0-11 7-19 16-19s16 8 16 19z" fill="#4b5563"/>
    <rect x="3" y="30" width="42" height="6" rx="2" fill="#374151"/>
    <path d="M21 12l3-8 3 8z" fill="#ef4444"/>`),forge:ix(`
    <path d="M5 27h32c0 4-4 7-10 7v5h6v5H13v-5h6v-5C11 34 5 31 5 27z" fill="#475569"/>
    <path d="M27 4l11 11-4 4-11-11z" fill="#9ca3af"/>
    <path d="M31 13l11 11-3 3-11-11z" fill="#92582c"/>`),drill:ix(`
    <path d="M8 18v15c0 4 7 7 16 7s16-3 16-7V18" fill="#dc2626"/>
    <ellipse cx="24" cy="18" rx="16" ry="6" fill="#fde68a"/>
    <path d="M10 24l7 13M24 25v15M38 24l-7 13" fill="none" stroke="#fbbf24"/>
    <path d="M30 3l9 9M18 3l-9 9" fill="none" stroke-width="3"/>`)};function ox(e,t){return ax[e]??t}var sx=`M24 4.5L30.2 17L44 19L34 28.7L36.3 42.5L24 36L11.7 42.5L14 28.7L4 19L17.8 17Z`;function cx(e){let[t,n]=e?[`#f59e0b`,`#fde047`]:[`#475569`,`#64748b`];return`<svg class="star-ic${e?` on`:``}" viewBox="0 0 48 48" aria-hidden="true"><path d="${sx}" fill="${t}"/><path d="M24 4.5L17.8 17L4 19L14 28.7L11.7 42.5L24 36Z" fill="${n}"/><path d="${sx}" fill="none" stroke="${rx}" stroke-width="3.6" stroke-linejoin="round"/></svg>`}var lx=class{map;lastView=``;badges=[];tags=[];pt={x:0,y:0};drag=null;suppressClick=!1;constructor(e,t){this.map=t;let n=e.querySelector(`.map-labels`);for(let e of t.nodes){if(t.isleOf(e.world).fog)continue;let r=document.createElement(`button`);r.className=`mnode ${e.state}${e.boss>=0?` boss`:``}`,r.dataset.act=`node`,r.dataset.arg=String(e.index),r.setAttribute(`aria-label`,S(`map.level`,{label:e.label})),e.state===`locked`&&(r.disabled=!0),n.appendChild(r),this.badges.push({el:r,node:e})}for(let e of t.isles){if(e.fog===2)continue;let t=document.createElement(`div`);t.className=`isle-tag3d${e.fog?` fogged`:``}`,t.innerHTML=e.fog?`<b>${S(`map.island`,{n:e.world})}</b><em>???</em><span>${S(`map.locked`,{n:e.world-1})}</span>`:`<b>${S(`map.island`,{n:e.world})}</b><em>${E(Rp(e.world)).replace(/-/g,`‑`)}</em><span>${cx(!0)} ${e.stars}/30</span>`,n.appendChild(t),this.tags.push({el:t,u:e.u-8.6,v:e.v-4.4,w:0})}e.addEventListener(`pointerdown`,e=>{this.suppressClick=!1,!e.target.closest(`.map-top, .map-pop, .map-go`)&&(this.drag={id:e.pointerId,x:e.clientX,y:e.clientY,t:performance.now(),moved:!1,vx:0,vy:0})}),e.addEventListener(`pointermove`,t=>{let n=this.drag;if(!n||t.pointerId!==n.id)return;let r=t.clientX-n.x,i=t.clientY-n.y;if(!n.moved){if(Math.hypot(r,i)<8)return;n.moved=!0,e.setPointerCapture?.(t.pointerId)}let a=performance.now(),o=Math.max(8,a-n.t)/1e3;this.map.pan(r,i),n.vx=n.vx*.5+r/o*.5,n.vy=n.vy*.5+i/o*.5,n.x=t.clientX,n.y=t.clientY,n.t=a});let r=e=>{let t=this.drag;t&&e.pointerId===t.id&&(this.drag=null,t.moved&&(this.suppressClick=!0,performance.now()-t.t<90&&this.map.fling(t.vx,t.vy)))};e.addEventListener(`pointerup`,r),e.addEventListener(`pointercancel`,r),e.addEventListener(`click`,e=>{this.suppressClick&&(this.suppressClick=!1,e.stopPropagation(),e.preventDefault())},!0)}sync(){let e=this.map,t=e.width,n=e.height,r=e.camera,i=`${r.position.x},${r.position.y},${r.position.z},${r.zoom},${t},${n}`;if(i===this.lastView)return;this.lastView=i;let a=this.pt;for(let{el:r,node:i}of this.badges){e.toScreen(i.u,i.v,e.labelY(i),a);let o=a.x>-60&&a.x<t+60&&a.y>-60&&a.y<n+60;r.style.visibility=o?``:`hidden`,o&&(r.style.transform=`translate(${a.x.toFixed(1)}px, ${a.y.toFixed(1)}px)`)}for(let r of this.tags){e.toScreen(r.u,r.v,.4,a);let i=a.y>-80&&a.y<n+80;if(r.el.style.visibility=i?``:`hidden`,!i)continue;r.w||=r.el.offsetWidth;let o=Math.min(Math.max(a.x,r.w/2+8),t-r.w/2-8);r.el.style.transform=`translate(${o.toFixed(1)}px, ${a.y.toFixed(1)}px) translate(-50%, -50%)`}}},ux=[{key:`recruits`,icon:`🪖`,desc:e=>S(`up.recruits.desc`,{from:12+e*3,to:12+(e+1)*3})},{key:`forge`,icon:`⚒️`,desc:e=>S(`up.forge.desc`,{from:x(e*O_),to:x((e+1)*O_)})},{key:`drill`,icon:`🥁`,desc:e=>S(`up.drill.desc`,{from:x(e*k_),to:x((e+1)*k_)})}],dx=[`#60a5fa`,`#f97316`,`#facc15`,`#ef4444`,`#a8a29e`,`#e879f9`],fx={range:`cards.role.range`,frost:`cards.role.frost`,armor:`cards.role.armor`,gold:`cards.role.gold`,loot:`cards.role.loot`,recruit:`cards.role.recruit`},px=e=>D(e>=.1?Math.round(e*100):j(Math.round(e*1e3)/10)),mx=(e,t)=>e===null?`<span class="card-impact">${S(fx[t]??`cards.noDps`)}</span>`:`<span class="card-impact ${e>0?`up`:`down`}">DPS ${e>0?`+`:`−`}${px(Math.abs(e))}</span>`,hx=4500,gx=`<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a5 5 0 0 0-5 5v1h10V7a5 5 0 0 0-5-5Zm-4 7.5a4 4 0 0 0 8 0Zm-2.5 5.2C6.6 13.7 9.2 13 12 13s5.4.7 6.5 1.7c.9.8 1.5 2.4 1.5 4.3v3H4v-3c0-1.9.6-3.5 1.5-4.3Z"/></svg>`,_x=`<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M5 3.5A2.5 2.5 0 0 1 7.5 1H19a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1H7.5a1 1 0 0 0 0 2H19a1 1 0 1 1 0 2H7.5A2.5 2.5 0 0 1 5 21.5Zm4 2.5v2h7V6Zm0 4v2h5v-2Z"/></svg>`,vx=`<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M10.3 2h3.4l.5 2.6a7.8 7.8 0 0 1 1.9 1.1l2.5-.9 1.7 2.9-2 1.7a7.9 7.9 0 0 1 0 2.2l2 1.7-1.7 2.9-2.5-.9a7.8 7.8 0 0 1-1.9 1.1l-.5 2.6h-3.4l-.5-2.6a7.8 7.8 0 0 1-1.9-1.1l-2.5.9-1.7-2.9 2-1.7a7.9 7.9 0 0 1 0-2.2l-2-1.7 1.7-2.9 2.5.9a7.8 7.8 0 0 1 1.9-1.1ZM12 8.6a3.4 3.4 0 1 0 0 6.8 3.4 3.4 0 0 0 0-6.8Z"/></svg>`,yx=`<svg viewBox="0 0 64 64" aria-hidden="true"><path fill="#fff" stroke="#141a33" stroke-width="3" stroke-linejoin="round" d="M26 6c3 0 5 2 5 5v17l2-1c3-1 6 0 7 2l1 2 2-1c3-1 6 1 6 4v1l2-1c3 0 5 2 5 5v9c0 9-7 16-16 16h-6c-6 0-10-3-13-8L11 39c-2-3-1-6 2-7 2-1 5 0 6 2l2 3V11c0-3 2-5 5-5Z"/></svg>`,bx=`<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#141a33"/><path d="M10 7.5v9l7-4.5z" fill="#fff"/></svg>`,xx=`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5.5M11.5 5.5L5 12l6.5 6.5" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>`,Sx=`<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="6.2" fill="none" stroke="currentColor" stroke-width="2.4"/><circle cx="12" cy="12" r="2.1" fill="currentColor"/><path d="M12 2.5v3.6M12 17.9v3.6M2.5 12h3.6M17.9 12h3.6" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>`,Cx=`<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="5" width="4" height="14" rx="1.5" fill="currentColor"/><rect x="14" y="5" width="4" height="14" rx="1.5" fill="currentColor"/></svg>`;function wx(e,t=!1){let n=Object.entries(e),r=Array.from({length:6},(e,t)=>{let r=n[t];if(!r)return`<span class="slot empty"></span>`;let i=nb(r[0]);return`<span class="slot ${i?.rarity??``}" title="${E(i?.name??``)}">${i?ox(i.id,i.icon):`?`}<i>${r[1]}</i></span>`}).join(``);return t?r:`<div class="slots">${r}</div>`}var Tx=[`👹`,`🗿`,`💀`,`🐉`,`🐙`,`🕷️`,`👑`];function Ex(e,t){e.classList.remove(t),requestAnimationFrame(()=>e.classList.add(t))}var Dx=e=>`<div class="pill gold"><i class="coin"></i><b>${T(e)}</b></div>`,Ox=(e,t=3)=>Array.from({length:t},(t,n)=>cx(n<e)).join(``),kx=class{root;g;hudEl;screen;bannerEl;armyEl;goldEl;waveEl;bossEl;bossFill;rankEl;rankName;rankFill;slotsEl;lastTier=-1;bossKind=0;dangerEl;streakEl;streakNum;lastStreak=0;actions={};bannerTimer=0;bannerBusy=!1;bannerQueue=[];lastArmy=-1;lastWave=``;lastDps=``;lastFill=``;lastGold=``;dpsEl;dpsTimer=0;fadeEl;fadeTimer=0;mapOverlay=null;current=``;coachEl;handEl;toastEl;vignetteEl;travelEl;travelFrom=1;autoNext=0;lastEnd=null;workshopFrom=`menu`;workshopTab=`up`;toastTimer=0;hasTutorial=!0;constructor(e,t){this.root=e,this.g=t,e.innerHTML=`
      <div id="hud" class="hidden">
        <div class="hud-top">
          <div class="pill army">${gx}<b id="army">0</b></div>
          <div class="wave-pill" id="wave"></div>
          <button class="round-btn" data-act="pause" aria-label="${S(`hud.pause`)}">${Cx}</button>
        </div>
        <div class="hud-row">
          <div class="pill gold"><i class="coin"></i><b id="gold">0</b></div>
          <div class="pill rank" id="rank"><span id="rankname"></span><div class="rank-bar"><i id="rankfill"></i></div></div>
        </div>
        <div class="slots mini" id="slots"></div>
        <div class="pill dps" id="dps" title="${S(`hud.dpsTitle`)}">${ox(`dmg`,``)}<b id="dpsv">0</b><small>/s</small><em id="dpsd"></em></div>
        <div id="bossbar" class="hidden"><span id="bossname"></span><div class="bar"><i id="bossfill"></i></div></div>
      </div>
      <div id="danger" aria-hidden="true"></div>
      <div id="streak" aria-live="off"><b></b><span>${S(`hud.streak`)}</span></div>
      <div id="fade" aria-hidden="true"></div>
      <div id="vignette" aria-hidden="true"></div>
      <div id="coach" class="hidden" role="status"><img alt="" /><p></p></div>
      <div id="hand" class="hidden" aria-hidden="true">${yx}</div>
      <div id="banner" role="status" aria-live="polite"></div>
      <div id="screen"></div>
      <div id="toast" role="status"></div>
      <div id="travel" class="hidden" role="status"><b></b><div class="travel-bar"><i></i></div></div>`,this.hudEl=e.querySelector(`#hud`),this.screen=e.querySelector(`#screen`),this.bannerEl=e.querySelector(`#banner`),this.armyEl=e.querySelector(`#army`),this.goldEl=e.querySelector(`#gold`),this.dpsEl=e.querySelector(`#dpsv`),this.waveEl=e.querySelector(`#wave`),this.bossEl=e.querySelector(`#bossbar`),this.bossFill=e.querySelector(`#bossfill`),this.rankEl=e.querySelector(`#rank`),this.rankName=e.querySelector(`#rankname`),this.rankFill=e.querySelector(`#rankfill`),this.slotsEl=e.querySelector(`#slots`),this.dangerEl=e.querySelector(`#danger`),this.streakEl=e.querySelector(`#streak`),this.streakNum=this.streakEl.querySelector(`b`),this.fadeEl=e.querySelector(`#fade`),this.coachEl=e.querySelector(`#coach`),this.handEl=e.querySelector(`#hand`),this.toastEl=e.querySelector(`#toast`),this.vignetteEl=e.querySelector(`#vignette`),this.travelEl=e.querySelector(`#travel`),e.addEventListener(`click`,e=>{let t=e.target.closest(`[data-act]`);if(!t||t.hasAttribute(`disabled`))return;I.unlock(),I.click();let n=t.dataset.act;n===`pause`?this.g.pause():this.actions[n]?.(t.dataset.arg)})}render(e,t,n=``,r=``,i=!1){this.cancelAutoNext();let a=r!==``&&r===this.current,o=a?this.screen.querySelector(`.panel, .cards-wrap`)?.scrollTop??0:0;if(this.mapOverlay=null,this.current=r,this.actions=t,this.screen.className=`show ${n}${a||i?` still`:``}`,this.screen.innerHTML=e,o>0){let e=this.screen.querySelector(`.panel, .cards-wrap`);e&&(e.scrollTop=o)}S_.banner(r===`menu`)}hideScreen(){this.cancelAutoNext(),this.mapOverlay=null,this.current=``,this.screen.className=``,this.screen.innerHTML=``,this.actions={},S_.banner(!1)}showHud(){this.hudEl.classList.remove(`hidden`),this.bossEl.classList.add(`hidden`),this.lastArmy=-1,this.lastTier=-1,this.lastWave=``}relabel(){this.root.querySelector(`[data-act="pause"]`)?.setAttribute(`aria-label`,S(`hud.pause`)),this.root.querySelector(`#dps`)?.setAttribute(`title`,S(`hud.dpsTitle`)),this.streakEl.querySelector(`span`).textContent=S(`hud.streak`),this.lastTier=-1,this.lastWave=``,this.setBoss(this.bossKind),this.updateSlots(this.g.held)}hideHud(){this.clearBanners(),this.hudEl.classList.add(`hidden`),this.dangerEl.classList.remove(`show`),this.streakEl.classList.remove(`show`),this.lastStreak=0}updateHud(e,t,n,r,i,a,o=!1){let s=T(a);s!==this.lastDps&&(this.lastDps=s,this.dpsEl.textContent=s),e!==this.lastArmy&&(e<this.lastArmy&&Ex(this.armyEl.parentElement,`hurt`),this.armyEl.textContent=T(e),this.lastArmy=e),r!==this.lastTier&&(this.lastTier=r,this.rankName.textContent=v[r].plural,this.rankEl.style.setProperty(`--rank`,`#${v[r].base.toString(16).padStart(6,`0`)}`),this.rankEl.title=r<y?S(`hud.nextRank`,{rank:v[r+1].plural}):S(`hud.topRank`));let c=`scaleX(${Math.round(i*100)/100})`;c!==this.lastFill&&(this.lastFill=c,this.rankFill.style.transform=c);let l=T(t);l!==this.lastGold&&(this.lastGold=l,this.goldEl.textContent=l);let u=this.g.lv,d=this.g.mode===`tutorial`?S(`hud.training`):u?`<small>${u.label}</small>${S(`hud.waveOf`,{wave:this.g.wave,total:this.g.totalWaves})}`:this.g.heatShown>=1.3?`<small>${S(`hud.horde`,{heat:j(Math.round(this.g.heatShown*10)/10)})}</small>${S(`hud.wave`,{wave:this.g.wave})}`:S(`hud.wave`,{wave:this.g.wave});d!==this.lastWave&&(this.waveEl.innerHTML=d,this.lastWave=d),n===null?this.bossEl.classList.add(`hidden`):(this.bossEl.classList.remove(`hidden`),this.bossEl.classList.toggle(`shielded`,o),this.bossFill.style.transform=`scaleX(${Math.max(0,Math.min(1,n)).toFixed(3)})`)}adButton(){return S_.canReward?`<button class="btn small gold-btn ad-btn" data-act="ad" aria-label="${S(`menu.adLabel`)}">${bx}+${T(B_(this.g.save.unlocked))}</button>`:``}adsChanged(){document.documentElement.style.setProperty(`--banner-h`,`${S_.bannerHeight}px`),this.current===`menu`?this.showMenu():this.current===`workshop`&&this.showWorkshop()}dpsDelta(e){if(!Number.isFinite(e)||Math.abs(e)<.01)return;let t=this.root.querySelector(`#dpsd`);t.textContent=`${e>0?`+`:`−`}${px(Math.abs(e))}`,t.className=e>0?`up show`:`down show`,window.clearTimeout(this.dpsTimer),this.dpsTimer=window.setTimeout(()=>t.classList.remove(`show`),2200)}dmgBreakdown(e){let t=0;for(let n=0;n<e.length;n++)t+=e[n];if(!(t>0))return``;let n=[],r=[];for(let i=0;i<e.length;i++){let a=e[i]/t;a<.005||(n.push(`<i style="width:${(a*100).toFixed(1)}%;background:${dx[i]}"></i>`),r.push(`<li><i style="background:${dx[i]}"></i>${S(Bb[i])} <b>${D(Math.round(a*100))}</b></li>`))}return`<div class="dmg">
        <div class="dmg-head"><span>${S(`dmg.title`)}</span><b>${T(t)}</b></div>
        <div class="dmg-bar">${n.join(``)}</div>
        <ul class="dmg-legend">${r.join(``)}</ul>
      </div>`}updateCombat(e,t){if(e!==this.lastStreak){let t=e>=15;this.streakEl.classList.toggle(`show`,t),t&&(this.streakNum.textContent=`×${e}`,Ex(this.streakEl,`bump`),this.streakEl.classList.toggle(`huge`,e>=100)),this.lastStreak=e}this.dangerEl.classList.toggle(`show`,t>0)}setBoss(e){this.bossKind=e,this.bossEl.querySelector(`#bossname`).textContent=_p[e].name}updateSlots(e){this.slotsEl.innerHTML=wx(e,!0)}fadeTo(e,t){clearTimeout(this.fadeTimer),this.fadeEl.style.background=`#${e.toString(16).padStart(6,`0`)}`,this.fadeEl.className=`on`,this.fadeTimer=window.setTimeout(()=>{t(),this.fadeEl.className=``},420)}cancelFade(){clearTimeout(this.fadeTimer),this.fadeEl.className=``}banner(e,t,n){let r=n===`boss`||n===`evolve`;this.bannerBusy&&!r?(this.bannerQueue.length>=2&&this.bannerQueue.shift(),this.bannerQueue.push({title:e,sub:t,kind:n})):this.showBanner(e,t,n,this.bannerQueue.length?1250:1900)}showBanner(e,t,n,r){this.bannerBusy=!0,this.bannerEl.className=``,this.bannerEl.offsetWidth,this.bannerEl.innerHTML=`<div class="b-title">${E(e)}</div>${t?`<div class="b-sub">${E(t)}</div>`:``}`,this.bannerEl.style.setProperty(`--banner-ms`,`${r}ms`),this.bannerEl.className=`show ${n}`,clearTimeout(this.bannerTimer),this.bannerTimer=window.setTimeout(()=>{this.bannerEl.className=``,this.bannerBusy=!1;let e=this.bannerQueue.shift();e&&this.showBanner(e.title,e.sub,e.kind,this.bannerQueue.length?1250:1700)},r)}clearBanners(){clearTimeout(this.bannerTimer),this.bannerQueue.length=0,this.bannerBusy=!1,this.bannerEl.className=``}showMenu(){let e=this.g.save,t=zp(e.unlocked),n=e.stats.runs===0,r=ux.some(t=>e.gold>=P_(e.upgrades[t.key]));this.render(`<div class="menu">
        <div class="menu-top">
          ${Dx(e.gold)}
          ${this.adButton()}
          <div class="menu-icons">
            <button class="round-btn" data-act="bestiary" aria-label="${S(`menu.bestiaryLabel`)}">${_x}</button>
            <button class="round-btn" data-act="settings" aria-label="${S(`menu.settingsLabel`)}">${vx}</button>
          </div>
        </div>
        <div class="logo"><span class="l1">TINY</span><span class="l2">LEGION</span></div>
        <p class="tagline">${S(`menu.tagline`)}</p>
        <div class="menu-gap"></div>
        ${n?`<p class="hint">${S(`menu.moveHint`)}</p>`:``}
        <div class="menu-buttons">
          <button class="btn gold-btn" data-act="levels">${S(`menu.campaign`)}<small>${e.tutorialDone?S(`menu.campaignNext`,{label:t.label,island:E(t.island)}):S(`menu.campaignFirst`)}</small></button>
          <button class="btn blue-btn" data-act="endless">${S(`menu.endless`)}<small>${e.endlessBest>0?S(`menu.endlessRecord`,{wave:e.endlessBest}):S(`menu.endlessFirst`)}</small></button>
          <button class="btn ghost-btn ${r?`has-news`:``}" data-act="workshop">${S(`menu.workshop`)}${r?`<small>${S(`menu.workshopNews`)}</small>`:``}</button>
        </div>
      </div>`,{levels:()=>this.g.playCampaign(),endless:()=>this.g.playEndless(),workshop:()=>this.showWorkshop(),bestiary:()=>this.showBestiary(),settings:()=>this.showSettings(`menu`),ad:()=>void this.g.watchAd()},`menu-screen`,`menu`,[`workshop`,`bestiary`,`settings-menu`,`endless-start`].includes(this.current))}showSettings(e){let t=this.g.save.settings,n=(e,t,n,r=S(`settings.on`),i=S(`settings.off`),a=``)=>`<div class="set-row"><span class="set-label">${t}${a?`<small>${a}</small>`:``}</span>
        <button class="toggle ${n?`on`:``}" data-act="${e}" role="switch" aria-checked="${n}" aria-label="${E(t)}">${n?r:i}</button></div>`,r=ne.map(e=>`<button class="lang ${e.id===k()?`on`:``}" data-act="lang" data-arg="${e.id}" lang="${e.id}" aria-pressed="${e.id===k()}">${e.name}</button>`).join(``),i=e=>e<=0?S(`settings.off`):x(e),a=(e,n)=>`<div class="set-row vol-row"><label class="set-label" for="vol-${e}">${n}</label>
        <div class="vol"><input type="range" id="vol-${e}" data-vol="${e}" min="0" max="100" step="5" value="${Math.round(t[e]*100)}" style="--v:${Math.round(t[e]*100)}%">
        <output for="vol-${e}">${i(t[e])}</output></div></div>`;this.render(`<div class="panel settings">
        <h2>${S(`settings.title`)}</h2>
        <div class="set-row lang-row"><span>${S(`settings.language`)}</span><div class="lang-pick">${r}</div></div>
        ${a(`music`,S(`settings.music`))}
        ${a(`sfx`,S(`settings.sfx`))}
        ${n(`vibration`,S(`settings.vibration`),t.vibration)}
        ${n(`quality`,S(`settings.quality`),t.quality===`high`,S(`settings.high`),S(`settings.low`),S(`settings.qualityHint`))}
        ${S_.native?n(`noads`,S(`settings.noAds`),this.g.save.noAds,S(`settings.yes`),S(`settings.no`)):``}
        ${S_.privacyOptions?`<button class="btn ghost-btn" data-act="privacy">${S(`settings.privacy`)}</button>`:``}
        ${e===`menu`&&this.hasTutorial?`<button class="btn ghost-btn" data-act="tutorial">${S(`settings.tutorial`)}</button>`:``}
        <button class="btn blue-btn" data-act="back">${S(`common.back`)}</button>
      </div>`,{lang:t=>{this.g.setLanguage(t),this.showSettings(e)},vibration:()=>{this.g.setSetting(`vibration`,!t.vibration),this.showSettings(e)},quality:()=>{this.g.setSetting(`quality`,t.quality===`high`?`low`:`high`),this.showSettings(e)},noads:()=>{this.g.setNoAds(!this.g.save.noAds),this.showSettings(e)},privacy:()=>void S_.privacy(),tutorial:()=>{this.g.save.tutorialDone=!1,this.showMenu(),this.g.playCampaign()},back:()=>e===`menu`?this.showMenu():this.showPause()},`dim`,`settings-${e}`);for(let e of this.screen.querySelectorAll(`input[data-vol]`)){let t=e.dataset.vol,n=e.parentElement.querySelector(`output`),r=()=>Number(e.value)/100;e.addEventListener(`input`,()=>{I.unlock();let a=r();e.style.setProperty(`--v`,`${e.value}%`),n.textContent=i(a),t===`music`?Ue.setMusic(a):Ue.setSfx(a)}),e.addEventListener(`change`,()=>{this.g.setSetting(t,r()),t===`sfx`&&I.coin()})}}showEndlessStart(){let e=this.g.save,t=this.g.endlessCheckpoints().map(t=>{let[n,r]=Up(t),i=H_(t);return`<button class="btn ${e.gold>=i?`gold-btn`:`ghost-btn`} start-row" data-act="from" data-arg="${t}" ${e.gold>=i?``:`disabled`}>
        <span>⏩ ${S(`endless.wave`,{wave:t})}<small>${Pp[n]} ${E(Mp(n))} · ${E(Np(r))}</small></span>
        <b><i class="coin"></i>${T(i)}</b>
      </button>`}).join(``);this.render(`<div class="panel endless-start">
        <h2>${S(`endless.title`)}</h2>
        <div class="ws-head">
          <div class="pill">${S(`endless.record`,{wave:e.endlessBest})}</div>
          ${Dx(e.gold)}
        </div>
        <button class="btn blue-btn start-row" data-act="from" data-arg="1"><span>${S(`endless.wave`,{wave:1})}<small>${S(`endless.classic`)}</small></span><b>${S(`endless.free`)}</b></button>
        ${t}
        <p class="hint">${S(`endless.hint`)}</p>
        <button class="btn ghost-btn" data-act="back">${S(`common.back`)}</button>
      </div>`,{from:e=>this.g.playEndlessFrom(Number(e)),back:()=>this.showMenu()},`dim`,`endless-start`)}teleport(e,t){if(!t){this.travelEl.classList.add(`hidden`);return}this.travelEl.classList.contains(`hidden`)&&(this.travelFrom=e),this.travelEl.classList.remove(`hidden`),this.travelEl.querySelector(`b`).textContent=S(`endless.travel`,{wave:e,target:t});let n=Math.min(1,Math.max(0,(e-this.travelFrom)/Math.max(1,t-this.travelFrom)));this.travelEl.querySelector(`.travel-bar i`).style.transform=`scaleX(${Math.round(n*100)/100})`}back(){let e=this.screen.querySelector(`.map-pop.show`);return e?(e.classList.remove(`show`),!0):[`workshop`,`bestiary`,`settings-menu`,`endless-start`,`settings-pause`].includes(this.current)?(this.actions.back?.(),!0):!1}coach(e,t=!1){if(this.handEl.classList.toggle(`hidden`,!t||!e),!e){this.coachEl.classList.add(`hidden`);return}let n=this.coachEl.querySelector(`img`);n.src||=this.g.portrait(`captain`),this.coachEl.querySelector(`p`).textContent=e,this.coachEl.classList.remove(`hidden`),this.coachEl.classList.remove(`pop`),this.coachEl.offsetWidth,this.coachEl.classList.add(`pop`)}toast(e){this.toastEl.textContent=e,this.toastEl.classList.add(`show`),clearTimeout(this.toastTimer),this.toastTimer=window.setTimeout(()=>this.toastEl.classList.remove(`show`),3200)}vignette(){this.vignetteEl.classList.remove(`show`),this.vignetteEl.offsetWidth,this.vignetteEl.classList.add(`show`)}leaveMenu(){let e=this.screen.querySelector(`.menu`);if(!e)return;let t=document.createElement(`div`);t.className=`menu-ghost`,t.inert=!0,t.appendChild(e.cloneNode(!0)),this.root.appendChild(t),t.offsetWidth,t.classList.add(`leaving`),window.setTimeout(()=>t.remove(),700)}showBestiary(){let e=this.g.save,t=e.stats,n=this.g.portraits(),r=Object.values(e.stars).reduce((e,t)=>e+t,0),i=e=>Array.from({length:5},(t,n)=>`<i class="${n<e?`on`:``}"></i>`).join(``),a=Pb.map(t=>{let r=e.kills[t.id]??0,a=r>0;return`<article class="beast ${a?``:`unknown`} ${t.boss?`boss`:``}">
        <div class="beast-head">
          <img src="${n[t.id]}" alt="" />
          <div class="beast-id">
            <b>${a?E(t.name):`???`}</b>
            <span class="beast-role">${E(t.role)}</span>
            <span class="beast-kills">${a?ee(`best.defeated`,r,{n:T(r)}):S(`best.never`)}</span>
          </div>
        </div>
        ${a?`
        <div class="beast-gauges">
          <span>${S(`best.hp`)}</span><div class="pips">${i(t.hp)}</div>
          <span>${S(`best.speed`)}</span><div class="pips">${i(t.speed)}</div>
          <span>${S(`best.damage`)}</span><div class="pips">${i(t.damage)}</div>
        </div>
        <p class="beast-lore">${E(t.lore)}</p>
        <p class="beast-line plus"><b>${S(`best.strength`)}</b> ${E(t.strength)}</p>
        <p class="beast-line minus"><b>${S(`best.weakness`)}</b> ${E(t.weakness)}</p>`:`<p class="beast-lore">${S(`best.unknown`)}</p>`}
      </article>`}).join(``),o=(e,t)=>`<li><b>${t}</b><span>${e}</span></li>`;this.render(`<div class="panel bestiary">
        <h2>${S(`best.title`)}</h2>
        <ul class="life-stats">
          ${o(S(`best.record`),e.endlessBest>0?S(`best.recordWave`,{wave:e.endlessBest}):`—`)}
          ${o(S(`best.kills`),T(t.kills))}
          ${o(S(`best.bosses`),String(t.bosses))}
          ${o(S(`best.runs`),String(t.runs))}
          ${o(S(`best.waves`),T(t.waves))}
          ${o(S(`best.army`),T(t.bestArmy))}
          ${o(S(`best.rank`),E(v[t.bestRank].plural))}
          ${o(S(`best.stars`),String(r))}
        </ul>
        <div class="beasts">${a}</div>
        <button class="btn ghost-btn" data-act="back">${S(`common.back`)}</button>
      </div>`,{back:()=>this.showMenu()},`dim`,`bestiary`)}showMap(e){let t=this.g.save,n=zp(e.current);this.render(`<div class="map3d">
        <div class="map-labels"></div>
        <div class="map-top">
          <button class="round-btn" data-act="back" aria-label="${S(`common.back`)}">${xx}</button>
          <h2>${S(`map.title`)}</h2>
          <button class="round-btn" data-act="recenter" aria-label="${S(`map.recenter`)}">${Sx}</button>
          ${Dx(t.gold)}
        </div>
        <button class="btn gold-btn map-go" data-act="node" data-arg="${n.index}">${S(`map.go`,{label:n.label})}</button>
        <div class="map-pop"></div>
      </div>`,{node:e=>this.levelPopup(Number(e)),play:e=>this.g.startRun(`campaign`,Number(e)),close:()=>this.screen.querySelector(`.map-pop`).classList.remove(`show`),recenter:()=>e.recenter(),back:()=>this.g.toMenu()},`map3d-screen`,`map`),this.mapOverlay=new lx(this.screen.querySelector(`.map3d`),e)}workshopGauge(e){let t=Y_(e),n=R_(this.g.save.upgrades),r=t-n,i=r<=0?`ok`:r<=3?`warn`:`hard`;return`<div class="pop-ws ${i}"><b>${C(`map.gauge.${i}`)}</b><span>${S(`map.gauge.text`,{want:t,mine:n})}</span></div>`}levelPopup(e){let t=zp(e),n=this.g.save.stars[String(e)]??0,r=this.screen.querySelector(`.map-pop`);r.innerHTML=`<div class="panel lv-pop${r.classList.contains(`show`)?` still`:``}">
        <div class="pop-label">${S(`map.level`,{label:t.label})}</div>
        <div class="pop-isle">${E(t.island)}</div>
        <div class="pop-tags">
          <span>${Pp[t.theme]} ${E(Mp(t.theme))}</span>
          <span>${Fp[t.mood]} ${E(Np(t.mood))}</span>
          <span>${S(`map.waves`,{n:t.waves})}</span>
        </div>
        ${t.boss>=0?`<div class="pop-boss">${Tx[t.boss]} ${S(`map.boss`,{name:E(_p[t.boss].name)})}</div>`:``}
        ${this.workshopGauge(e)}
        <div class="big-stars">${Ox(n)}</div>
        <button class="btn gold-btn" data-act="play" data-arg="${e}">${S(`common.play`)}</button>
        <button class="btn ghost-btn" data-act="close">${S(`common.close`)}</button>
      </div>`,r.classList.add(`show`)}showWorkshop(e=this.current===`workshop`?this.workshopFrom:`menu`,t=this.workshopTab){this.workshopFrom=e,this.workshopTab=t;let n=this.g.save,r=``;if(t===`up`)r=ux.map(e=>{let t=n.upgrades[e.key],r=P_(t),i=Array.from({length:15},(e,n)=>`<i class="${n<t?`on`:``}"></i>`).join(``),a=t>15?`<em class="pips-over">+${t-15}</em>`:``;return`<div class="up-row">
          <div class="up-icon">${ox(e.key,e.icon)}</div>
          <div class="up-body"><b>${C(`up.${e.key}.name`)}</b><span>${e.desc(t)}</span><div class="pips">${i}${a}</div></div>
          <button class="btn small gold-btn" data-act="buy" data-arg="${e.key}" ${n.gold<r?`disabled`:``}><i class="coin"></i>${T(r)}</button>
        </div>`}).join(``)+`<p class="hint">${S(`ws.hintUp`,{label:zp(n.unlocked).label,n:Y_(n.unlocked)})}</p>`;else if(t===`shop`)r=rv.map(e=>{let t=iv(e,n.unlocked),r=n.boosts[e.id]??0,i=r>=5;return`<div class="up-row">
          <div class="up-icon">${ox(e.icon,``)}</div>
          <div class="up-body"><b>${E(e.name)}</b><span>${S(`ws.boostDesc`,{desc:E(e.desc)})}</span>${r?`<em class="stock">${S(`ws.stock`,{n:r})}</em>`:``}</div>
          <button class="btn small gold-btn" data-act="boost" data-arg="${e.id}" ${i||n.gold<t?`disabled`:``}>${i?S(`ws.full`):`<i class="coin"></i>${T(t)}`}</button>
        </div>`}).join(``)+`<p class="hint">${S(`ws.hintShop`)}</p>`;else{let e=this.g.portraits();r=$_.map(t=>{let r=n.relics[t.id]??0,i=_p[t.boss],a=Pb.find(e=>e.id===i.id),o=Array.from({length:5},(e,t)=>cx(t<r)).join(``);return`<div class="up-row relic ${r?``:`unknown`}">
          <div class="up-icon"><img src="${e[i.id]}" alt="" /></div>
          <div class="up-body"><b>${r?E(t.name):`???`}</b><span>${r?E(t.desc(r)):S(`ws.relicLocked`,{boss:E(a?a.name:i.name)})}</span><div class="relic-stars">${o}</div></div>
        </div>`}).join(``)+`<p class="hint">${S(`ws.hintRelics`)}</p>`}let i=(e,n)=>`<button class="ws-tab ${t===e?`on`:``}" data-act="tab" data-arg="${e}" aria-pressed="${t===e}">${n}</button>`;this.render(`<div class="panel">
        <h2>${S(`ws.title`)}</h2>
        <div class="ws-head">
          ${Dx(n.gold)}
          ${this.adButton()}
          <div class="pill ws-level">${S(`ws.level`)} <b>${R_(n.upgrades)}</b></div>
        </div>
        <div class="ws-tabs">${i(`up`,S(`ws.tab.up`))}${i(`shop`,S(`ws.tab.shop`))}${i(`relics`,S(`ws.tab.relics`))}</div>
        <div class="ups">${r}</div>
        <button class="btn ghost-btn" data-act="back">${S(`common.back`)}</button>
      </div>`,{buy:t=>{let r=t;this.g.buyUpgrade(r,P_(n.upgrades[r])),this.showWorkshop(e,`up`),this.screen.querySelector(`[data-arg="${r}"]`)?.closest(`.up-row`)?.classList.add(`bought`);for(let e of this.screen.querySelectorAll(`.ws-head .pill`))e.classList.add(`bump`)},boost:t=>{t&&this.g.buyBoost(t)&&(this.showWorkshop(e,`shop`),this.screen.querySelector(`[data-arg="${t}"]`)?.closest(`.up-row`)?.classList.add(`bought`),this.screen.querySelector(`.ws-head .pill.gold`)?.classList.add(`bump`))},tab:t=>this.showWorkshop(e,t??`up`),back:()=>e===`end`&&this.lastEnd?this.showEnd(this.lastEnd,!1):this.showMenu(),ad:()=>void this.g.watchAd()},``,`workshop`)}showCards(e,t,n){this.clearBanners();let r=this.g.slotsUsed()>=6,i=e.map((e,t)=>{let n=this.g.held[e.id]??0,i=e.instant?`<span class="lvl">${S(`cards.instant`)}</span>`:n>0?`<span class="lvl">${S(`cards.levelUp`,{from:n,to:n+1})}</span>`:r?`<span class="lvl swap">${S(`cards.replaces`)}</span>`:`<span class="lvl new">${S(`cards.new`)}</span>`;return`<button class="card ${e.rarity}" data-act="pick" data-arg="${t}" style="--i:${t}">
        <span class="card-icon">${ox(e.id,e.icon)}</span>
        <span class="card-body">
          <span class="card-name">${E(e.name)}</span>
          <span class="card-desc">${E(e.desc(n+1,this.g))}</span>
          ${mx(this.g.cardDpsDelta(e),e.id)}
        </span>
        <span class="card-meta"><span class="rarity">${C(`cards.rarity.${e.rarity}`)}</span>${i}</span>
      </button>`}).join(``);this.render(`<div class="cards-wrap">
        <h2>${S(t===`chest`?`cards.chest`:`cards.title`)}</h2>
        ${this.g.mode===`tutorial`?`<p class="swap-intro">${S(`cards.tutorialIntro`)}</p>`:``}
        <div class="cards">${i}</div>
        <div class="card-actions">
          <button class="btn small ghost-btn" data-act="reroll" ${n>0?``:`disabled`}>${S(`cards.reroll`,{n})}</button>
          <button class="btn small ghost-btn" data-act="skip">${S(`cards.skip`)} <i class="coin"></i>+${this.g.skipGold()}</button>
        </div>
        <p class="slots-label">${S(`cards.hand`,{n:this.g.slotsUsed(),max:6})}</p>
        ${wx(this.g.held)}
      </div>`,{pick:t=>this.g.pickCard(e[Number(t)]),reroll:()=>this.g.reroll(),skip:()=>this.g.skipCards()},`dim`,`cards`),I.deal()}showReplace(e,t){let n=t.map((t,n)=>{let r=nb(t),i=this.g.held[t];return`<button class="card ${r.rarity} drop" data-act="drop" data-arg="${t}" style="--i:${n}">
        <span class="card-icon">${ox(r.id,r.icon)}</span>
        <span class="card-body">
          <span class="card-name">${E(r.name)}</span>
          <span class="card-desc">${S(`cards.dropLevel`,{n:i})}</span>
          ${mx(this.g.cardDpsDelta(e,t),``)}
        </span>
        <span class="card-meta"><span class="lvl swap">${S(`cards.drop`)}</span></span>
      </button>`}).join(``);this.render(`<div class="cards-wrap">
        <h2>${S(`cards.full`)}</h2>
        <p class="swap-intro">${S(`cards.swapIntro`,{card:E(e.name)})}</p>
        <div class="cards">${n}</div>
        <button class="btn small ghost-btn" data-act="keep">${S(`cards.keep`)} <i class="coin"></i>+${this.g.skipGold()}</button>
      </div>`,{drop:e=>this.g.replaceCard(e??null),keep:()=>this.g.replaceCard(null)},`dim`)}showPause(){this.render(`<div class="panel">
        <h2>${S(`pause.title`)}</h2>
        <p class="slots-label">${S(`cards.hand`,{n:this.g.slotsUsed(),max:6})}</p>
        ${wx(this.g.held)}
        <div class="dps-now">${ox(`dmg`,``)}<span>${S(`pause.dps`)}</span><b>${T(this.g.dps())}/s</b></div>
        ${this.dmgBreakdown(this.g.dmgBy)}
        <button class="btn blue-btn" data-act="resume">${S(`pause.resume`)}</button>
        <button class="btn ghost-btn" data-act="settings">${S(`pause.settings`)}</button>
        <button class="btn ghost-btn" data-act="quit">${this.g.mode===`tutorial`?S(`pause.skipTraining`):S(`pause.quit`)}</button>
      </div>`,{resume:()=>this.g.resume(),settings:()=>this.showSettings(`pause`),quit:()=>this.g.abandon()},`dim`,`pause`,this.current===`settings-pause`)}workshopTip(e){let t=R_(this.g.save.upgrades),n=Y_(e);return t>=n?`<p class="end-note">${S(`end.tipRetry`)}</p>`:`<p class="end-note">${S(`end.tipWorkshop`,{want:n,mine:t})}</p>
      <button class="btn gold-btn" data-act="workshop">${S(`end.goWorkshop`)}</button>`}cancelAutoNext(){this.autoNext&&window.clearTimeout(this.autoNext),this.autoNext=0,this.screen.querySelector(`.next-btn`)?.classList.remove(`counting`)}showEnd(e,t=!0){if(this.lastEnd=e,e.mode===`tutorial`){this.render(`<div class="panel end win">
          <h2>${e.victory?S(`end.trainingWon`):S(`end.trainingSkipped`)}</h2>
          <p class="end-note">${S(`end.trainingNote`)}</p>
          <ul class="stats">
            <li><span>${S(`end.kills`)}</span><b>${e.kills}</b></li>
            <li><span>${S(`end.gold`)}</span><b class="goldtxt"><i class="coin"></i>+${e.gold}</b></li>
          </ul>
          <button class="btn gold-btn" data-act="map">${S(`end.adventure`)}</button>
          <button class="btn blue-btn" data-act="endless">${S(`end.endless`)}</button>
        </div>`,{map:()=>this.g.openMap(),endless:()=>this.g.startRun(`endless`)},`dim`,`end`);return}let n=e.mode===`campaign`,r=zp(e.level),i=(e.level+1)%10==0,a=n&&e.victory&&!i,o=this.g.save,s=ux.some(e=>o.gold>=P_(o.upgrades[e.key])),c=`<li><span>${S(`end.gold`)}</span><b class="goldtxt"><i class="coin"></i>+${e.gold}</b></li>
      ${e.bonus>0?`<li><span>${S(`end.firstWin`)}</span><b class="goldtxt">+${e.bonus}</b></li>`:``}`;if(n&&e.victory){let n=a?zp(e.level+1):null;if(this.render(`<div class="panel end win">
          <h2>${S(`end.victory`)}</h2>
          <div class="big-stars${t?` pop`:``}">${Ox(e.stars)}</div>
          <ul class="stats">
            <li><span>${S(`end.level`)}</span><b>${r.label} · ${E(r.island)}</b></li>
            <li><span>${S(`end.peak`)}</span><b>${T(e.peak)}</b></li>
            ${c}
          </ul>
          ${this.dmgBreakdown(e.dmg)}
          ${n?`<button class="btn gold-btn next-btn ${t?`counting`:``}" data-act="next" style="--auto:${hx}ms">${S(`end.next`,{label:n.label})}</button>`:`<button class="btn gold-btn" data-act="map">${S(`end.sail`)}</button>`}
          <div class="end-row">
            <button class="btn small ghost-btn ${s?`has-news`:``}" data-act="workshop">${S(`end.workshop`)}</button>
            <button class="btn small ghost-btn" data-act="retry">${S(`end.retry`)}</button>
            ${n?`<button class="btn small ghost-btn" data-act="map">${S(`end.map`)}</button>`:``}
          </div>
        </div>`,{next:()=>this.g.withAd(()=>this.g.playLevel(e.level+1)),retry:()=>this.g.withAd(()=>this.g.playLevel(e.level)),map:()=>this.g.withAd(()=>this.g.openMap()),workshop:()=>this.showWorkshop(`end`)},`dim`,`end`,!t),t)for(let t=0;t<e.stars;t++)window.setTimeout(()=>this.current===`end`&&I.star(t),1300+250*t);a&&t&&(this.autoNext=window.setTimeout(()=>{this.autoNext=0,this.current===`end`&&this.g.withAd(()=>this.g.playLevel(e.level+1))},hx),this.screen.querySelector(`.panel`)?.addEventListener(`pointerdown`,e=>{e.target.closest(`.next-btn`)||this.cancelAutoNext()}));return}let l=e.mode===`endless`?S(`end.fallen`):S(`end.defeat`),u=n?`<li><span>${S(`end.level`)}</span><b>${r.label} · ${E(r.island)}</b></li>
           <li><span>${S(`end.wave`)}</span><b>${Math.min(e.wave,e.waves)} / ${e.waves}</b></li>`:`<li><span>${S(`end.waveReached`)}</span><b>${e.wave}${e.record?S(`end.newRecord`):``}</b></li>
           <li><span>${S(`end.record`)}</span><b>${e.best}</b></li>`;this.render(`<div class="panel end lose">
        <h2>${l}</h2>
        <ul class="stats">
          ${u}
          <li><span>${S(`end.kills`)}</span><b>${e.kills}</b></li>
          <li><span>${S(`end.rank`)}</span><b>${E(v[e.rank].plural)}</b></li>
          <li><span>${S(`end.peak`)}</span><b>${T(e.peak)}</b></li>
          ${c}
        </ul>
        ${this.dmgBreakdown(e.dmg)}
        ${n?this.workshopTip(e.level):``}
        <button class="btn blue-btn" data-act="retry">${S(`end.retry`)}</button>
        <button class="btn ghost-btn" data-act="${n?`map`:`menu`}">${S(n?`end.map`:`end.menu`)}</button>
      </div>`,{retry:()=>this.g.withAd(()=>n?this.g.playLevel(e.level):this.g.startRun(e.mode,e.level)),menu:()=>this.g.withAd(()=>this.g.toMenu()),map:()=>this.g.withAd(()=>this.g.openMap()),workshop:()=>this.showWorkshop(`end`)},`dim`,`end`,!t)}};function Ax(e){return jx(e,Mx(e,Nx(e)))}function jx(e,t){let n=3.7,r=e.squad.backZ()+.5,i=null;for(let t of e.props.list)t.kind!==`trap`||!e.props.isAlive(t)||t.z<-14||t.z-t.hd>r||(!i||t.z>i.z)&&(i=t);if(!i)return t;let a=i.hw+e.squad.radius*.85+.25;if(Math.abs(t-i.x)>=a)return t;let o=i.x-a,s=i.x+a;return Math.max(-3.7,Math.min(n,s<=n&&(t>=i.x||o<-3.7)?s:o))}function Mx(e,t){let n=3.7;for(let r of e.hazards.zones){let i=r.hw+e.squad.radius*.8+.3;if(Math.abs(t-r.x)>=i)continue;let a=r.x-i,o=r.x+i;t=o<=n&&(t>=r.x||a<-3.7)?o:a}return Math.max(-3.7,Math.min(n,t))}function Nx(e){let t=e.enemies,n=0,r=0,i=-99;for(let e=0;e<t.n;e++){if(t.hp[e]<=0||t.z[e]<-30||t.z[e]>0||t.mode[e]!==0)continue;let a=(t.type[e]===2?6:t.type[e]===1?3:1)/(1-t.z[e]*.15);n+=t.x[e]*a,r+=a,t.z[e]>i&&(i=t.z[e])}let a=null,o=-1/0,s=null,c=-1/0;for(let t of e.props.list)if(!(!e.props.isAlive(t)||t.z<-32)){if(t.kind===`gate`){let n=t.op===`x`?e.squad.value*(t.value-1):t.value;t.z>-12&&n>o&&(o=n,a=t.x)}else t.z>c&&(c=t.z,s=t.x)}if(a!==null)return a;if(r>0&&(i>-16||r>2.5))return n/r;let l=Px(e);return l===null?s===null?r>0?n/r:0:s:l}function Px(e){let t=0,n=null,r=e.coins.list;for(let e of r){if(e.state>1||e.z<-14||e.z>-1)continue;let i=0;for(let t of r)t.state<=1&&t.z>-14&&t.z<-1&&Math.abs(t.x-e.x)<1.2&&(i+=t.value);i>t&&(t=i,n=e.x)}return t*e.goldScale>=3?n:null}var Fx=2.5,Ix=e=>Math.min(e.rateMult,Fx),Lx=e=>e.rateMult/Ix(e);function Rx(e,t,n){let r=e.n,i=0;for(let e=0;e<=y;e++){if(r[e]<=0)continue;let a=v[e],o=r[e]*re(e);n&&(o*=(1+.6*(a.pierce+t.pierce+1))*(a.aoe>0?2.2:1)),i+=o}let a=1+t.critChance*(t.critMult-1),o=i*t.dmgMult*t.rateMult*t.multishot*a*(1+.2*t.burn);return n?o*(1+.8*t.explosive)*(1+2*t.chain)*(1+.1*t.burn)*(1+.5*t.catapult):o}function zx(e,t){let n=0;for(let t=0;t<e.bodies;t++)n+=v[e.tier[t]].rate;return n*Ix(t)*t.multishot}function Bx(e,t){let n=Array(v.length).fill(0);for(let t=0;t<e.bodies;t++)n[e.tier[t]]++;let r=[];for(let i=0;i<=y;i++){if(!n[i])continue;let a=v[i],o=i===e.topTier?e.topScale:1;r.push({shots:n[i]*a.rate*Ix(t)*t.multishot,dmg:re(i)/a.rate*t.dmgMult*Lx(t)*o})}return r}function Vx(e,t){let n=y;for(let t=0;t<e.bodies;t++)n=Math.min(n,e.tier[t]);return re(n)/v[n].rate*t.dmgMult*Lx(t)}function Hx(e){let t=e.save.settings;Ue.setSfx(t.sfx),Ue.setMusic(t.music),Ze(t.vibration),e.world.setQuality(t.quality===`low`),e.particles.density=t.quality===`low`?.5:1,e.views.lowFx=t.quality===`low`}function Ux(e,t,n){e.save.settings[t]=n,Hx(e),Ut(e.save)}function Wx(e){let t=e.save,n=t.pending;if(!n)return 0;delete t.pending,t.gold+=n.gold;let r=t.stats;return r.runs++,r.kills+=n.kills,r.bosses+=n.bosses,r.waves+=Math.max(0,n.wave-1),n.mode===`endless`&&n.wave>t.endlessBest&&(t.endlessBest=n.wave),Ut(t),n.gold}function Gx(e){e.state===`playing`&&e.pause(),e.ui.cancelAutoNext(),(e.state===`paused`||e.state===`cards`)&&e.mode!==`tutorial`&&(e.save.pending={gold:e.teleportTo>0?0:Math.round(e.goldRun*e.goldScale),kills:e.kills,bosses:e.bossKills,wave:e.wave,mode:e.mode}),Ut(e.save),Ue.suspend()}function Kx(e){if(e.ui.back())return!0;switch(e.state){case`playing`:return e.pause(),!0;case`paused`:return e.resume(),!0;case`cards`:return!0;case`over`:return e.withAd(()=>e.toMenu()),!0;case`map`:return e.toMenu(),!0;default:return!1}}var qx=(e,t)=>e.props.list.some(n=>n.kind===t&&e.props.isAlive(n)),Jx=[{text:`tuto.move`,hand:!0,min:1.5,done:(e,t)=>t.moved>5},{text:`tuto.shoot`,start:e=>{let t=e.squad.cx>0?-1:1;e.spawn({t:0,kind:`group`,enemy:`grunt`,count:8,x:2.2*t,w:1.6,hp:e.weakestShot(),bite:.5})},done:(e,t)=>t.t>3&&e.enemies.n===0},{text:`tuto.blocks`,start:e=>{let t={t:0,kind:`dominos`,x:2.4*(e.squad.cx>0?-1:1),n:3,hp:e.weakestShot()*6,reward:1};e.spawn(t)},done:(e,t)=>t.t>3&&!qx(e,`domino`)},{text:`tuto.evolve`,start:e=>e.spawn({t:0,kind:`big`,x:0,hp:e.weakestShot()*26,reward:40}),done:(e,t)=>!qx(e,`big`)&&(t.t>4&&e.squad.topTier<1&&e.addSoldiers(40),e.squad.topTier>=1),min:2},{text:`tuto.gates`,start:e=>{let t=Math.random()<.5,n={op:`+`,value:4},r={op:`+`,value:-4};e.spawn({t:0,kind:`gates`,left:t?n:r,right:t?r:n,step:1})},done:(e,t)=>t.t>3&&!qx(e,`gate`)},{text:`tuto.horde`,start:e=>{let t=e.weakestShot();e.spawn({t:0,kind:`group`,enemy:`grunt`,count:18,x:0,w:3.2,hp:t,bite:.5}),e.spawn({t:0,kind:`group`,enemy:`grunt`,count:8,x:-1.6,w:1.6,hp:t,bite:.5})},done:(e,t)=>t.t>3&&e.enemies.n===0,min:2.5},{text:`tuto.cards`,start:e=>e.offerTutorialCards(),done:e=>e.state===`playing`,min:.2},{text:`tuto.brute`,start:e=>{let t=e.weakestShot();e.spawn({t:0,kind:`group`,enemy:`brute`,count:1,x:0,w:1,hp:e.firePower(!1)*2.5,bite:4}),e.spawn({t:0,kind:`group`,enemy:`grunt`,count:10,x:0,w:3,hp:t,bite:.5})},done:(e,t)=>t.t>3&&e.enemies.n===0,min:2.5}],Yx=class{g;step=-1;t=0;moved=0;lastX=0;constructor(e){this.g=e}begin(){this.next()}update(e){let t=this.g;if(this.step<0||this.step>=Jx.length)return;this.t+=e,this.moved+=Math.abs(t.squad.cx-this.lastX),this.lastX=t.squad.cx,t.squad.value<8&&t.addSoldiers(12-t.squad.value);let n=Jx[this.step];this.t>=(n.min??1.2)&&n.done(t,this)&&this.next()}relabel(){let e=Jx[this.step];e&&this.g.ui.coach(S(e.text),!!e.hand)}next(){if(this.step++,this.t=0,this.moved=0,this.lastX=this.g.squad.cx,this.step>=Jx.length){this.g.ui.coach(null),this.g.finishTutorial();return}let e=Jx[this.step];this.g.ui.coach(S(e.text),!!e.hand),I.hint(),e.start?.(this.g,this)}},Xx=se({Game:()=>nS}),Zx={lagoon:14742270,desert:15324577,snow:16777215,castle:13101532,volcano:16742959},Qx=.2,$x=1.36,eS=1e300,tS={grunt:0,brute:1,archer:3,shield:4,kamikaze:5,wolf:7,shaman:8,slime:9,slinger:11,bat:13,troll:12,ghost:14,tortoise:15,banner:16,boar:17},nS=class{stage;world;views;ui;input;squad=new mv;enemies=new Dp;projectiles=new dv;props=new mb;coins=new Mv;particles=new sv;floaters=new cv;bolts=new lv;hazards=new ub;rocks=[];state=`menu`;mode=`endless`;save;stats;held={};base;level=0;lv=null;land=``;map=null;tutorial=null;teleportTo=0;heat=1;killZ=0;killN=0;leaks=0;heatToast=!1;adDue=!1;adBusy=!1;announced=new Set;marching=!1;chaining=!1;pauseOnStart=!1;runToasts=[];teleportBot=!1;get hordeHeat(){return this.mode===`campaign`?r.horde:this.mode===`endless`?$x*this.heat*1.06**Math.max(0,this.wave-25):1}get heatShown(){return this.mode===`endless`?this.hordeHeat/$x:1}walkFrom=-1;wave=0;totalWaves=0;d=1;time=0;scroll=u;kills=0;bossKills=0;travelWaves=0;dmgBy=new Float64Array(6);goldRun=0;rerolls=1;fps=60;slowT=0;bot=!1;timeScale=1;rng=new zt(1);cardRng=new zt(2);plan=null;waveT=0;eventIdx=0;clearT=0;waveDone=!1;scrollTarget=u;catapultT=0;biteAcc=0;trapAcc=0;trapShown=0;trapShowT=0;biteX=0;biteZ=0;bossAbility=null;blasts=[];streak=0;streakT=0;bestTier=0;cardQueue=[];cardTimer=0;cardSource=`wave`;offered=[];pending=null;swapChoices=[];hudT=0;last=performance.now();near=new Int32Array(48);rearOf=new Int32Array(200);stopT=0;stopK=1;stopCd=0;wallAt(e){return null}wallContact(e,t){}recovered=0;constructor(e,t,n,r=(e,t)=>new kx(e,t)){this.stage=e,this.save=Ht(),ae(this.save.settings.lang??te()),this.base=hb(this.save.upgrades),this.stats={...this.base},this.world=new $y(t),this.views=new Ny(this.world.scene,qy),this.portraitArt=new E_(this.world.renderer),this.ui=r(n,this),this.input=new Rt(e,()=>e.clientWidth,4),this.input.onFirstGesture=()=>I.unlock(),Hx(this),this.recovered=Wx(this),this.squad.onRemove=this.onSquadRemove;let i=()=>{this.world.resize(e.clientWidth,e.clientHeight),this.map?.resize(e.clientWidth,e.clientHeight)};new ResizeObserver(i).observe(e),i(),window.__game=this,this.world.warmUp().catch(()=>void 0),this.portraitArt.warm(()=>this.state===`menu`||this.state===`map`),S_.onChange=()=>this.ui.adsChanged(),S_.adFree=this.save.noAds,S_.init()}start(){this.toMenu(),this.recovered>0&&this.ui.toast(S(`toast.recovered`,{gold:this.recovered})),requestAnimationFrame(this.frame)}toMenu(){let e=this.state;this.clearRunToasts(),this.chaining=!1,this.ui.cancelFade(),this.clearField(),this.menuLegion(e===`menu`?this.squad.cx:0),this.setLand(`lagoon`,`day`,!1),this.world.setFraming(!0,e===`over`||e===`paused`?.8:0),wt.play(`menu`),this.state=`menu`,this.scrollTarget=2.2,this.ui.hideHud(),this.ui.showMenu()}playEndless(){this.save.tutorialDone&&this.endlessCheckpoints().length?this.ui.showEndlessStart():(this.ui.leaveMenu(),I.whoosh(),this.startRun(this.save.tutorialDone?`endless`:`tutorial`))}endlessCheckpoints(){let e=[];for(let t=11;t<this.save.endlessBest;t+=10)e.push(t);return e}playEndlessFrom(e){if(e>1){let t=H_(e);if(this.save.gold<t||!this.endlessCheckpoints().includes(e))return;this.save.gold-=t,Ut(this.save)}I.whoosh(),this.startRun(`endless`),e>1&&(this.teleportTo=e,this.teleportBot=this.bot,this.bot=!0,this.ui.teleport(this.wave,e))}arrive(){this.teleportTo=0,this.bot=this.teleportBot,this.goldRun=0,this.coins.clear(),this.kills=0,this.bossKills=0,this.travelWaves=this.wave-1,this.dmgBy.fill(0),this.killZ=this.killN=this.leaks=0,this.ui.teleport(0,0),this.ui.clearBanners(),I.land(),Qe(40)}autoPick(){if(this.pending){this.replaceCard(null);return}let e=this.slotsUsed()>=6,t=t=>({common:1,rare:2,epic:3})[t.rarity]+(this.held[t.id]?2.5:0)+(t.instant?.5:0)-(t.id===`pact`?4:0)-(e&&!t.instant&&!this.held[t.id]?6:0),n=this.offered[0];for(let e of this.offered)t(e)>t(n)&&(n=e);!n||t(n)<0?this.skipCards():this.pickCard(n)}playCampaign(){this.save.tutorialDone?this.openMap():(this.ui.leaveMenu(),I.whoosh(),this.startRun(`tutorial`))}spawn(e){this.spawnEvent(e)}offerTutorialCards(){this.openCards(`wave`)}finishTutorial(){this.save.tutorialDone=!0,this.goldRun+=50/this.goldScale,this.endRun(!0)}portraitArt;portraits(){return this.portraitArt.all()}portrait(e){return this.portraitArt.get(e)}openMap(){this.chaining=!1,this.ui.cancelFade(),this.clearField(),this.state=`map`,this.ui.hideHud(),this.map??=new n_,this.map.resize(this.stage.clientWidth,this.stage.clientHeight),this.map.open(this.save,this.walkFrom),this.walkFrom=-1;let e=Math.floor(this.save.unlocked/10)+1;e>this.save.mapSeen&&(this.save.mapSeen=e,Ut(this.save),I.land()),this.ui.showMap(this.map),wt.play(`menu`)}withAd(e){this.adBusy||(this.adDue?(this.adDue=!1,this.adBusy=!0,S_.interstitial().catch(()=>void 0).finally(()=>{this.adBusy=!1,e()})):e())}buyBoost(e){let t=rv.find(t=>t.id===e);if(!t)return!1;let n=iv(t,this.save.unlocked),r=this.save.boosts[e]??0;return this.save.gold<n||r>=5?!1:(this.save.gold-=n,this.save.boosts[e]=r+1,Ut(this.save),I.buy(),!0)}dropRelic(e){let t=ev(e);if(!t||this.teleportTo>0)return;let n=this.save.relics[t.id]??0;n>=5||n>0&&Math.random()>.3||(this.save.relics[t.id]=n+1,Ut(this.save),this.ui.banner(n===0?S(`banner.relic`):S(`banner.relicStars`,{stars:`★`.repeat(n+1)}),`${t.name} · ${t.desc(n+1)}`,`chest`),window.setTimeout(()=>I.relic(),1300))}async watchAd(){let e=B_(this.save.unlocked);await S_.rewarded()&&(this.save.gold+=e,Ut(this.save),I.reward(),this.ui.toast(S(`toast.adGold`,{gold:e})),this.ui.adsChanged())}playLevel(e){if(this.chaining)return;this.chaining=!0;let t=zp(e);this.ui.hideScreen(),I.whoosh(),this.ui.fadeTo(qt(t.theme,t.mood).sky,()=>this.startRun(`campaign`,e,!1))}startRun(e,t=0,r=!0){this.chaining=!1,this.mode=e,this.level=t,this.clearField(),this.base=hb(this.save.upgrades),tv(this.base,this.save.relics);let i=1,a=[];if(e!==`tutorial`){for(let e of rv)this.save.boosts[e.id]>0&&(this.save.boosts[e.id]--,e.apply(this.base),i*=e.soldiers??1,a.push(e.name));a.length&&Ut(this.save)}this.held={},this.travelWaves=0,this.stats=cb(this.base,this.held),this.lv=e===`campaign`?zp(t):null;let o=this.lv?this.lv.seed:Date.now()&2147483647;this.rng=new zt(o);let s=e===`campaign`?this.save.fails[String(t)]??0:0;this.cardRng=new zt((o^1540483477^Math.imul(s,2654435769))>>>0||1);let c=Math.min(2,Math.floor(s/2)),l=Math.round((L_(this.save.upgrades)+nv(this.save.relics))*i),d=Math.round(l*.3*c),f=this.state===`menu`,p=this.squad.topTier;if(this.squad.reset(l+d,f?this.squad.cx:0),f&&p>this.squad.topTier){let e=this.squad;for(let t=0;t<e.bodies;t++)this.particles.burst(e.x[t],.6,e.z[t],4,n.gold,2.5,.09,.6,3)}d>0&&this.runToasts.push(window.setTimeout(()=>this.ui.toast(S(`toast.reinforcements`,{n:d})),600)),a.length&&this.runToasts.push(window.setTimeout(()=>this.ui.toast(S(`toast.boosts`,{list:a.join(`, `)})),d>0?3600:600)),this.squad.setKeep(this.stats.keep),this.world.setFraming(!1,1.1),this.bestTier=this.squad.topTier,this.wave=0,this.totalWaves=this.lv?this.lv.waves:0;let[m,h]=this.lv?[this.lv.theme,this.lv.mood]:Up(1);this.setLand(m,h,r),this.landSong(),this.kills=0,this.bossKills=0,this.goldRun=0,this.rerolls=1,this.heat=1,this.killZ=this.killN=this.leaks=0,this.heatToast=!1,this.dmgBy.fill(0),this.catapultT=2,this.cardQueue=[],this.cardTimer=0,this.pending=null,this.input.reset(),this.state=`playing`,this.ui.hideScreen(),this.ui.showHud(),this.ui.updateSlots(this.held),this.tutorial=null,e===`tutorial`?(this.plan={events:[],boss:!1},this.wave=1,this.waveDone=!0,this.scrollTarget=u,this.tutorial=new Yx(this),this.tutorial.begin()):this.nextWave(),this.pauseOnStart&&(this.pauseOnStart=!1,this.pause())}pause(){this.state===`playing`&&(this.state=`paused`,this.ui.showPause())}resume(){this.state===`paused`&&(this.state=`playing`,this.ui.hideScreen())}abandon(){this.endRun(!1,!0)}setSetting(e,t){Ux(this,e,t)}setLanguage(e){this.save.settings.lang=e,Ut(this.save),ae(e),this.ui.relabel(),this.tutorial?.relabel()}clearRunToasts(){for(let e of this.runToasts)window.clearTimeout(e);this.runToasts.length=0}setNoAds(e){this.save.noAds=e,Ut(this.save),S_.adFree=e}onHide(){this.chaining&&(this.pauseOnStart=!0),Gx(this)}onShow(){Ue.resume()}onBack(){return Kx(this)}landSong(){let[e,t]=this.land.split(`/`);wt.play(e,{calm:t===`night`})}buyUpgrade(e,t){this.save.gold<t||(this.save.gold-=t,this.save.upgrades[e]++,Ut(this.save),I.upgrade(),this.state===`menu`&&this.menuLegion(this.squad.cx))}menuLegion(e){let t=L_(this.save.upgrades)+nv(this.save.relics),n=Math.min(y,this.save.stats.bestRank),r=[{tier:n,count:5},{tier:n-1,count:8},{tier:n-2,count:10}].filter(e=>e.tier>=0),i=r.reduce((e,t)=>e+t.count*ie(t.tier),0);n<=0||i<=t?this.squad.reset(t,e):this.squad.parade(r,e,1.6,1.4)}setLand(e,t,n){let r=`${e}/${t}`;if(r===this.land)return;this.land=r;let i=qt(e,t),a=()=>{Mt.set(e,t),this.world.setAmbiance(i),this.views.setFog(this.world.fogInfo),this.views.splash=Zx[e]};n?this.ui.fadeTo(i.sky,a):(this.ui.cancelFade(),a())}clearField(){this.views.clearFlames(),this.enemies.clear(),this.projectiles.clear(),this.props.clear(),this.coins.clear(),this.particles.clear(),this.floaters.clear(),this.bolts.clear(),this.hazards.clear(),this.blasts.length=0,this.bossAbility=null,this.rocks=[],this.biteAcc=0,this.streak=0,this.streakT=0}nextWave(){this.slowT>3&&this.world.lowerResolution()&&(this.slowT=0),this.wave++;let e=this.teleportTo>0&&this.wave>=this.teleportTo;e&&this.arrive();let t=this.lv,n=t?t.boss>=0&&this.wave===this.totalWaves:Nb(this.wave);if(this.d=t?Vp(t,this.wave-1):Mb(this.wave),this.wave>1&&this.stats.recruitPct>0){let e=Math.max(2,Math.round(this.expectedArmy()*this.stats.recruitPct));this.addSoldiers(e),this.floaters.add(`+${T(e)}`,this.squad.cx,2,0,8246268,.75)}let r=t?Math.max(0,t.boss):Math.max(0,this.wave/5-1)%_p.length,i=this.save.upgrades,a=t?X_(t.index):{dmg:1,rate:1},o=a.dmg/F_(i.forge),s=t?t.world:this.wave,l=t?vb:_b,d=l.filter(e=>s>=e).length,f=-1;if(t){let e=l.map((e,n)=>e===t.world?n:-1).filter(e=>e>=0);e.length&&t.level<=6&&(f=e[(t.level+this.wave)%e.length])}else d>0&&this.wave-l[d-1]<3&&(f=d-1);let p=a.rate/I_(i.drill),m=this.stats.rateMult,h=Math.min(m*p,Fx)/Math.min(m,Fx),g=o*p/h;this.plan=Ab(this.d,this.rng,n,{shots:this.shotsPerSecond()*h,minDmg:this.weakestShot()*g,weapons:this.weapons().map(e=>({shots:e.shots*h,dmg:e.dmg*g})),power:this.firePower(!0)*o*p,single:this.firePower(!1)*o*p,value:this.squad.value,expect:a.dmg*a.rate,heat:this.hordeHeat,reward:this.expectedArmy(),newcomers:d,fresh:n?-1:f},r);let _=1/0;for(let e of this.plan.events)_=Math.min(_,e.t);for(let e of this.plan.events)e.t=(e.t-_)*c+.15;!this.heatToast&&this.heatShown>=1.3&&this.teleportTo===0&&(this.heatToast=!0,this.ui.toast(S(`toast.hordeHarder`))),this.waveT=-.2,this.eventIdx=0,this.clearT=0,this.waveDone=!1,this.scrollTarget=u;let v=n?S(`banner.boss`):S(`banner.wave`,{wave:this.wave}),y=``,b=!1;if(t&&this.wave===1)v=S(`banner.level`,{label:t.label}),y=`${t.island} · ${Np(t.mood)}`;else if(t)y=`${this.wave} / ${this.totalWaves}`;else if(this.wave===1)y=S(`banner.endless`);else if((this.wave-1)%10==0){let[e,t]=Up(this.wave);this.setLand(e,t,!0),this.landSong(),y=S(`banner.newLand`,{land:Mp(e),mood:Np(t)}),b=!0,I.land()}if(!(this.teleportTo>0)&&(e&&(y=S(`banner.yourTurn`),b=!1),this.ui.banner(v,y,n?`boss`:b?`land`:`wave`),I.waveStart(),!n&&f>=0)){let e=Pb.find(e=>e.id===gb[f]);e&&!(this.save.kills[e.id]>0)&&!this.announced.has(e.id)&&(this.announced.add(e.id),this.ui.banner(S(`banner.newEnemy`),`${e.name} · ${e.hint??e.strength}`,`boss`))}}adaptHeat(){let e=this.killN+this.leaks;if(this.mode===`endless`&&this.teleportTo===0&&e>=20&&this.wave>=10){let t=this.killZ/Math.max(1,this.killN),n=this.leaks/e;n>.25?this.heat*=.8:n>.1||t>-10?this.heat*=.9:n<.03&&t<-22?this.heat*=1.15:n<.06&&t<-15&&(this.heat*=1.06),this.heat=Math.max(1,this.heat)}this.killZ=this.killN=this.leaks=0}waveCleared(){this.waveDone=!0,this.goldRun+=this.mode===`endless`?(12+3*Math.sqrt(this.wave))*z_:10+this.d*3,this.adaptHeat(),this.mode===`campaign`&&this.wave>=this.totalWaves?this.endRun(!0):this.teleportTo>0?this.queueCards(`wave`,.1):(I.waveClear(),this.ui.banner(S(`banner.cleared`),``,`clear`),this.queueCards(`wave`,.5))}endRun(e,t=!1){this.state=`over`,this.clearRunToasts();let n=this.teleportTo>0;n&&(this.teleportTo=0,this.bot=this.teleportBot,this.ui.teleport(0,0),this.goldRun=this.kills=this.bossKills=0),this.mode===`tutorial`&&(this.save.tutorialDone=!0,this.tutorial=null,this.ui.coach(null)),n||this.coins.bankAll(this);let r=this.mode===`campaign`&&e&&this.level>=this.save.unlocked?U_(this.level):0,i=Math.round(this.goldRun*this.goldScale)+r;this.save.gold+=i;let a=0;if(this.mode===`campaign`&&e){let e=this.squad.value/Math.max(1,this.squad.peak);a=e>=.9?3:e>=.6?2:1;let t=String(this.level);this.save.stars[t]=Math.max(this.save.stars[t]??0,a),delete this.save.fails[t],this.level>=this.save.unlocked&&(this.walkFrom=this.level),this.save.unlocked=Math.max(this.save.unlocked,this.level+1)}if(this.mode===`campaign`&&!e&&!(t&&this.wave<2)){let e=String(this.level);this.save.fails[e]=(this.save.fails[e]??0)+1}this.adDue=this.mode!==`tutorial`&&!(this.mode===`campaign`&&this.level<2),this.marching=this.mode===`campaign`&&e;let o=this.marching&&(this.level+1)%10!=0;this.marching&&(this.props.clear(),this.projectiles.clear(),this.hazards.clear());let s=this.save.stats;s.runs++,s.kills+=this.kills,s.bosses+=this.bossKills,n||(s.waves+=Math.max(0,(e?this.wave:this.wave-1)-this.travelWaves),s.bestArmy=Math.max(s.bestArmy,this.squad.peak),s.bestRank=Math.max(s.bestRank,this.bestTier));let c=!1;this.mode===`endless`&&this.wave>this.save.endlessBest&&(this.save.endlessBest=this.wave,c=!0),delete this.save.pending,Ut(this.save),e?I.victory():I.defeat(),o||wt.play(`menu`,{fade:.4,delay:2.6}),this.ui.hideHud(),this.ui.showEnd({victory:e,stars:a,record:c,gold:i,bonus:r,mode:this.mode,level:this.level,wave:this.wave,waves:this.totalWaves,kills:this.kills,peak:this.squad.peak,best:this.save.endlessBest,rank:this.bestTier,dmg:Array.from(this.dmgBy)})}queueCards(e,t){this.cardQueue.push(e),this.cardTimer=Math.max(this.cardTimer,t)}openCards(e){if(this.cardSource=e,this.offered=ob(this.cardRng,this.held),this.offered.length===0)this.afterCard();else if(this.state=`cards`,!(this.teleportTo>0)&&(this.ui.showCards(this.offered,e,this.rerolls),this.bot)){let e=this.offered,t=e[Math.floor(Math.random()*e.length)];setTimeout(()=>this.offered===e&&this.pickCard(t),250)}}reroll(){this.state!==`cards`||this.rerolls<=0||(this.rerolls--,I.reroll(),this.offered=ob(this.cardRng,this.held),this.ui.showCards(this.offered,this.cardSource,this.rerolls))}slotsUsed(){return Object.keys(this.held).length}cardStats(e){return{now:this.stats,next:cb(this.base,{...this.held,[e]:(this.held[e]??0)+1})}}dps(){return Rx(this.squad,this.stats,!0)}cardDpsDelta(e,t=null){let n=this.dps();if(!(n>0))return null;let r={...this.held};t&&delete r[t];let i=this.squad.cloneRanks(),a={expectedArmy:()=>this.expectedArmy(),addSoldiers:e=>i.gain(e,0,0),loseFraction:e=>void i.lose(Math.floor(i.value*e),0,0),cardStats:e=>this.cardStats(e)};if(e.instant)e.use?.(a);else{let t=r[e.id]??0;r[e.id]=t+1,t===0&&!this.held[e.id]&&e.use?.(a)}let o=cb(this.base,r);o.keep!==i.keep&&i.setKeep(o.keep);let s=Rx(i,o,!0)/n-1;return Math.abs(s)<.005?null:s}pickCard(e){if(this.state!==`cards`||this.pending)return;let t=this.dps();if(e.instant){e.use?.(this),this.finishPick(),this.ui.dpsDelta(this.dps()/t-1);return}let n=this.held[e.id]??0;n>0||this.slotsUsed()<6?(this.held[e.id]=n+1,n===0&&e.use?.(this),this.recomputeStats(),this.finishPick(),this.ui.dpsDelta(this.dps()/t-1)):(this.pending=e,this.swapChoices=Object.keys(this.held).sort(()=>Math.random()-.5).slice(0,3),this.ui.showReplace(e,this.swapChoices),this.bot&&setTimeout(()=>this.pending===e&&this.replaceCard(this.swapChoices[0]??null),250))}replaceCard(e){let t=this.pending;if(t&&this.state===`cards`){if(this.pending=null,e&&this.held[e]){let n=this.dps();delete this.held[e],this.held[t.id]=1,t.use?.(this),this.recomputeStats(),this.finishPick(),this.ui.dpsDelta(this.dps()/n-1)}else this.skipCards()}}skipGold(){return Math.round((10+Math.min(this.wave,12)*3)*this.goldRate*this.wealth)}get goldRate(){return this.mode===`endless`?z_:1}get wealth(){return this.lv?V_(this.lv.world):1}get goldScale(){return this.stats.goldMult*this.wealth}skipCards(){if(this.state!==`cards`)return;this.pending=null;let e=this.skipGold();this.goldRun+=e/this.goldScale,this.floaters.add(`+${e}`,this.squad.cx,2.4,0,16498468,.8),this.finishPick()}finishPick(){this.state=`playing`,I.card(),this.ui.hideScreen(),this.ui.updateSlots(this.held),this.afterCard()}recomputeStats(){this.stats=cb(this.base,this.held),this.squad.keep!==this.stats.keep&&(this.squad.setKeep(this.stats.keep),this.checkEvolution())}afterCard(){this.state=`playing`,this.squad.value<=0?this.endRun(!1):(this.cardSource===`wave`&&this.mode!==`tutorial`&&this.nextWave(),this.cardQueue.length&&(this.cardTimer=.3))}firePower(e){return Rx(this.squad,this.stats,e)}shotsPerSecond(){return zx(this.squad,this.stats)}weapons(){return Bx(this.squad,this.stats)}weakestShot(){return Vx(this.squad,this.stats)}expectedArmy(){let e=xb(this.d);return this.mode===`endless`?Math.min(e,Math.max(12,3*this.squad.value)):e}addSoldiers(e,t=this.squad.cx,n=2,r=!1){e=Math.min(Math.round(e),eS-this.squad.value),!(e<=0)&&(this.squad.gain(e,t,n),r||I.gain(e,t),this.checkEvolution())}loseFraction(e){let t=Math.floor(this.squad.value*e);t<=0||(this.squad.lose(t,this.squad.cx,this.squad.frontZ()),this.floaters.add(`-${T(t)}`,this.squad.cx,2.2,-1,16739179,.85))}checkEvolution(){let e=this.squad.topTier;if(e<=this.bestTier||(this.bestTier=e,this.state===`menu`))return;let t=v[e];this.ui.banner(S(`banner.evolve`),t.plural,`evolve`),this.particles.burst(this.squad.cx,1,0,40,t.base,5,.12,1,6),this.particles.burst(this.squad.cx,1,0,30,n.gold,4,.1,1,7),this.world.addShake(.45),this.freeze(.12),I.evolve(),Qe(70)}onSquadRemove=(e,t,r,i)=>{i===`merge`?this.particles.burst(e,.6,t,3,n.gold,2,.08,.5,3):(this.particles.burst(e,.4,t,4,v[r].base,3,.1,.5,3),this.views?.soldierDown(this,e,t,r))};hitEnemy(e,t,n,r,i,a,o=-1){return Vb(this,e,t,n,r,i,a,o)}killEnemy(e){Wb(this,e)}enemyAbility(e){return Kb(this,e)}bossExposed(e){let t=this.enemies;this.particles.burst(t.x[e],2.2,t.z[e],70,4906624,7,.16,.9,6),this.views.ring(t.x[e],t.z[e],3.2,4906624),!(this.teleportTo>0)&&(this.ui.banner(S(`boss.exposed`),S(`boss.exposedSub`),`clear`),this.world.addShake(.35),I.shatter(t.x[e]),Qe(50))}zoneHit(e){qb(this,e)}arrowHit(e,t,n){Jb(this,e,t,n)}enemyContact(e,t,n){Qb(this,e,t,n)}breakProp(e){tx(this,e)}applyGate(e){nx(this,e)}spawnEvent(e){switch(e.kind){case`group`:{let t=tS[e.enemy],n=this.enemies.newGroup(),r=t===1?1.2:e.tide?.5:.62;e.tide&&this.teleportTo===0&&(this.ui.banner(S(`banner.tide`),S(`banner.tideSub`,{n:e.count}),`boss`),I.tide(),this.world.addShake(.4),Qe(60));let i=Math.max(1,Math.round(e.w/r));for(let a=0;a<e.count;a++){let o=a%i,s=Math.floor(a/i),c=e.x-e.w/2+(o+.5)*(e.w/i)+(Math.random()-.5)*.25,l=-52-s*r*1.1+(Math.random()-.5)*.25,u=this.enemies.spawn(t,Nt(c,-3.7,3.7),l,e.hp,e.bite,n);u>=0&&e.shield&&(this.enemies.shield[u]=e.shield),u>=0&&e.armor&&(this.enemies.armor[u]=e.armor)}break}case`dominos`:for(let t=0;t<e.n;t++)this.props.addDomino(e.x,-52-t*1.15,e.hp,e.reward);break;case`big`:this.props.addBig(e.x,-52,e.hp,e.reward);break;case`chest`:this.props.addChest(e.x,-52,e.hp);break;case`gates`:this.props.addGates(-52,e.left,e.right,e.step);break;case`trap`:this.props.addTrap(e.x,-52-e.dz,e.hw,e.hd,m);break;case`boss`:{let t=this.enemies.spawn(2,0,-54,e.hp,e.bite);t>=0&&this.enemies.makeBoss(t,e.boss),this.bossAbility=e.ability;let n=_p[e.boss];if(this.scrollTarget=1.2,this.ui.setBoss(e.boss),this.teleportTo>0)break;this.ui.banner(n.name,n.sub,`boss`),this.ui.vignette(),t>=0&&(this.enemies.actT[t]=hy[e.boss]),this.world.focus(2.6),I.bossRoar(e.boss),wt.play(`boss`,{fade:.3,delay:1.1}),this.world.addShake(.5),Qe(80);break}}}fireSquad(e){let t=this.squad,n=this.stats,r=this.enemies,i=this.rearOf;i.fill(-1,0,t.bodies);let a=Math.max(1,Math.round(t.bodies*Qx)),o=t.frontZ(),s=t.backZ()+6,c=0;for(let e=0;e<r.n&&c<a;e++){if(r.hp[e]<=0||r.mode[e]===0||r.veiled[e]||r.ward[e]||r.z[e]<o||r.z[e]>s)continue;let n=-1,a=1/0;for(let o=0;o<t.bodies;o++){if(i[o]>=0)continue;let s=((t.x[o]-r.x[e])**2+(t.z[o]-r.z[e])**2)*(t.face[o]>1.5?.4:1)*(t.tier[o]===t.topTier&&t.topTier>0?4:1);s<a&&(a=s,n=o)}if(n<0)break;i[n]=e,c++}let l=0,u=0,d=Lx(n);for(let a=0;a<t.bodies;a++){let o=i[a],s=o>=0;if(t.face[a]=Ft(t.face[a],s?Math.PI:0,14,e),t.cd[a]-=e,t.shot[a]+=e,t.cd[a]>0)continue;let c=0;if(s){if(t.face[a]<2.5)continue;c=Math.atan2(r.x[o]-t.x[a],t.z[a]-r.z[o])}else if(t.face[a]>.6)continue;t.shot[a]=0;let f=t.tier[a],p=v[f],m=1/(p.rate*Ix(n));t.cd[a]+=m*(.8+Math.random()*.4),t.cd[a]<0&&(t.cd[a]=Math.random()*m);let g=f===t.topTier?t.topScale:1,_=s?-1:1;this.projectiles.fire(t.x[a],t.z[a]-.3*_,f,re(f)/p.rate*n.dmgMult*d*g,n,c,s);let y=h*p.scale;p.hover?this.views.muzzle(t.x[a],Kv(t.phase[a],this.time)+.32*y,t.z[a]-.22*y*_,f):this.views.muzzle(t.x[a]+.06*y*_,.43*y,t.z[a]-.48*y*_,f),l++,f>u&&(u=f)}l&&I.shoot(u,this.squad.cx)}updateCatapult(e){let t=this.stats.catapult;if(t>0&&(this.catapultT-=e,this.catapultT<=0)){this.catapultT=[4.5,3.2,2.2][Math.min(2,t-1)];let e=this.biggestThreat();if(e){let t=this.squad.cx,n=e.z+(this.scroll+1.8)*1;I.catapult(t),this.rocks.push({x:t,y:1.2,z:1,vx:(e.x-t)/1,vy:9.1/1,vz:(n-1)/1,t:0,dmg:this.firePower(!1)*.25})}}if(this.rocks.length){for(let t of this.rocks)t.t+=e,t.x+=t.vx*e,t.y+=t.vy*e,t.z+=t.vz*e,t.vy-=20*e,t.y<=.3&&t.vy<0&&(t.t=-1,Xb(this,t.x,t.z,2.4,t.dmg,-1,4),this.views.ring(t.x,t.z,2.4,14078929),this.particles.burst(t.x,.5,t.z,18,n.stone,5,.18,.8,5),I.explode(t.x,1),this.world.addShake(.25));this.rocks=this.rocks.filter(e=>e.t>=0)}}biggestThreat(){let e=this.enemies;for(let t of e.bosses)if(e.hp[t]>0)return{x:e.x[t],z:e.z[t]};let t=-1;for(let n=0;n<e.gCount.length;n++)e.gCount[n]>0&&e.gZ[n]>-40&&(t<0||e.gCount[n]>e.gCount[t])&&(t=n);if(t>=0)return{x:e.gX[t]/e.gCount[t],z:e.gZ[t]-.8};for(let t=0;t<e.n;t++)if(e.hp[t]>0&&e.z[t]>-40)return{x:e.x[t],z:e.z[t]};return null}update(e){this.time+=e,this.scroll=Ft(this.scroll,this.scrollTarget,1.5,e),this.bot?this.input.targetX=Ax(this):this.input.update(e),this.squad.move(e,this.input.targetX);let t=this.plan;for(this.waveT+=e;this.eventIdx<t.events.length&&t.events[this.eventIdx].t<=this.waveT;)this.spawnEvent(t.events[this.eventIdx++]);this.streakT>0&&(this.streakT-=e,this.streakT<=0&&(this.streak=0)),this.enemies.update(e,this),Yb(this),this.enemies.buildGrid(),this.enemies.separate(e),this.enemies.buildGrid(),this.fireSquad(e),this.projectiles.update(e,this),Gb(this),this.hazards.update(e,this),this.props.update(e,this),this.coins.update(e,this),ex(this,e),this.updateCatapult(e),this.particles.update(e,this.scroll),this.floaters.update(e),this.bolts.update(e,this.scroll),this.enemies.compact(),this.tutorial?.update(e),this.state===`playing`&&(this.squad.value<=0?this.endRun(!1):(!this.waveDone&&this.eventIdx>=t.events.length&&this.enemies.n===0&&(this.clearT+=e,this.clearT>.45&&this.waveCleared()),this.cardTimer>0&&(this.cardTimer-=e,this.cardTimer<=0&&this.cardQueue.length&&this.state===`playing`&&this.openCards(this.cardQueue.shift()))))}freeze(e,t=.04){if(this.teleportTo>0||this.state!==`playing`||e<=this.stopT)return;let n=e<=.08;n&&this.stopCd>0||(this.stopT=e,this.stopK=t,n&&(this.stopCd=.5))}fastForward(e){let t=1/45;for(let n=0;n<e;n+=t){if(this.state===`cards`&&(this.pending?this.replaceCard(this.swapChoices[Math.floor(Math.random()*this.swapChoices.length)]??null):this.pickCard(this.offered[Math.floor(Math.random()*this.offered.length)])),this.state!==`playing`)return;this.update(t)}}hud(e){if(this.hudT-=e,this.hudT>0)return;this.hudT=.1;let t=null,n=!1,r=this.enemies;for(let e of r.bosses)r.hp[e]<=0||(t=r.hp[e]/r.maxHp[e],n=r.guarded[e]===1);let i=this.squad.topTier,a=w(i),o=i<y?w(i+1):a,s=i<y?Nt((this.squad.value-a)/(o-a),0,1):1;this.ui.updateHud(this.squad.value,Math.floor(this.goldRun*this.goldScale),t,i,s,this.dps(),n),this.ui.updateCombat(this.streak,this.enemies.chasers)}frame=e=>{requestAnimationFrame(this.frame);let t=this.state===`paused`||this.state===`cards`||this.state===`over`&&!this.marching;if(e-this.last<(t&&this.teleportTo===0?250:1e3/62))return;let n=Math.min(.1,(e-this.last)/1e3);this.last=e,n>0&&!t&&(this.fps=this.fps*.95+1/n*.05),this.state===`playing`&&this.teleportTo===0&&(this.slowT=this.fps<45?this.slowT+n:0);let r=Math.min(n,1/20)*this.timeScale;if(this.stopCd>0&&(this.stopCd-=n),this.stopT>0&&(this.stopT-=n,this.state===`playing`&&(r*=this.stopK)),this.state===`map`&&this.map){this.map.update(Math.min(n,1/20)),this.ui.mapOverlay?.sync(),this.world.renderer.render(this.map.scene,this.map.camera);return}if(this.teleportTo>0&&(this.state===`playing`||this.state===`cards`)){let e=performance.now();for(;this.teleportTo>0&&performance.now()-e<14;)if(this.state===`cards`)this.autoPick();else if(this.state===`playing`)this.update(1/12);else break;this.teleportTo>0&&this.ui.teleport(this.wave,this.teleportTo),this.hud(n)}else if(this.state===`playing`){let e=Math.ceil(r/(1/45));for(let t=0;t<e&&this.state===`playing`;t++)this.update(r/e);this.hud(n)}else this.state===`menu`?(this.time+=r,this.scroll=Ft(this.scroll,this.scrollTarget,1.5,r),this.squad.move(r,Math.sin(this.time*.45)*(.9/this.squad.spread))):this.state===`over`&&this.marching&&(this.time+=r,this.scroll=Ft(this.scroll,u,1.5,r),this.squad.move(r,0),this.particles.update(r,this.scroll),this.floaters.update(r),this.bolts.update(r,this.scroll));let i=this.state===`playing`||this.state===`menu`||this.state===`over`&&this.marching;i||(this.world.shake=0),this.world.update(i?r:0,this.scroll),this.views.sync(this),this.world.render()}};export{nS as Game,M as n,me as r,Xx as t};