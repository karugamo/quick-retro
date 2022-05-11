var E_=Object.defineProperty,T_=Object.defineProperties;var I_=Object.getOwnPropertyDescriptors;var pu=Object.getOwnPropertySymbols;var S_=Object.prototype.hasOwnProperty,x_=Object.prototype.propertyIsEnumerable;var gu=(t,e,n)=>e in t?E_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,mu=(t,e)=>{for(var n in e||(e={}))S_.call(e,n)&&gu(t,n,e[n]);if(pu)for(var n of pu(e))x_.call(e,n)&&gu(t,n,e[n]);return t},_u=(t,e)=>T_(t,I_(e));var R_=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var _k=R_((Et,Tt)=>{const P_=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}};P_();function $l(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const A_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",k_=$l(A_);function $h(t){return!!t||t===""}function Ao(t){if(Q(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=et(r)?M_(r):Ao(r);if(i)for(const s in i)e[s]=i[s]}return e}else{if(et(t))return t;if(ze(t))return t}}const N_=/;(?![^(]*\))/g,O_=/:(.+)/;function M_(t){const e={};return t.split(N_).forEach(n=>{if(n){const r=n.split(O_);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function ei(t){let e="";if(et(t))e=t;else if(Q(t))for(let n=0;n<t.length;n++){const r=ei(t[n]);r&&(e+=r+" ")}else if(ze(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Br=t=>et(t)?t:t==null?"":Q(t)||ze(t)&&(t.toString===zh||!ne(t.toString))?JSON.stringify(t,Bh,2):String(t),Bh=(t,e)=>e&&e.__v_isRef?Bh(t,e.value):Nr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:Uh(e)?{[`Set(${e.size})`]:[...e.values()]}:ze(e)&&!Q(e)&&!Wh(e)?String(e):e,Re={},kr=[],Ft=()=>{},D_=()=>!1,L_=/^on[^a-z]/,ko=t=>L_.test(t),Bl=t=>t.startsWith("onUpdate:"),st=Object.assign,Ul=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},F_=Object.prototype.hasOwnProperty,pe=(t,e)=>F_.call(t,e),Q=Array.isArray,Nr=t=>No(t)==="[object Map]",Uh=t=>No(t)==="[object Set]",ne=t=>typeof t=="function",et=t=>typeof t=="string",Hl=t=>typeof t=="symbol",ze=t=>t!==null&&typeof t=="object",Hh=t=>ze(t)&&ne(t.then)&&ne(t.catch),zh=Object.prototype.toString,No=t=>zh.call(t),$_=t=>No(t).slice(8,-1),Wh=t=>No(t)==="[object Object]",zl=t=>et(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ws=$l(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Oo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},B_=/-(\w)/g,Ur=Oo(t=>t.replace(B_,(e,n)=>n?n.toUpperCase():"")),U_=/\B([A-Z])/g,ti=Oo(t=>t.replace(U_,"-$1").toLowerCase()),jh=Oo(t=>t.charAt(0).toUpperCase()+t.slice(1)),_a=Oo(t=>t?`on${jh(t)}`:""),Wi=(t,e)=>!Object.is(t,e),js=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Zs=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},eo=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let vu;const H_=()=>vu||(vu=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let jt;class z_{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&jt&&(this.parent=jt,this.index=(jt.scopes||(jt.scopes=[])).push(this)-1)}run(e){if(this.active){const n=jt;try{return jt=this,e()}finally{jt=n}}}on(){jt=this}off(){jt=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.active=!1}}}function W_(t,e=jt){e&&e.active&&e.effects.push(t)}const Wl=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Vh=t=>(t.w&Rn)>0,qh=t=>(t.n&Rn)>0,j_=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Rn},V_=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const i=e[r];Vh(i)&&!qh(i)?i.delete(t):e[n++]=i,i.w&=~Rn,i.n&=~Rn}e.length=n}},za=new WeakMap;let Pi=0,Rn=1;const Wa=30;let Mt;const er=Symbol(""),ja=Symbol("");class jl{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,W_(this,r)}run(){if(!this.active)return this.fn();let e=Mt,n=Cn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Mt,Mt=this,Cn=!0,Rn=1<<++Pi,Pi<=Wa?j_(this):bu(this),this.fn()}finally{Pi<=Wa&&V_(this),Rn=1<<--Pi,Mt=this.parent,Cn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Mt===this?this.deferStop=!0:this.active&&(bu(this),this.onStop&&this.onStop(),this.active=!1)}}function bu(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Cn=!0;const Kh=[];function ni(){Kh.push(Cn),Cn=!1}function ri(){const t=Kh.pop();Cn=t===void 0?!0:t}function St(t,e,n){if(Cn&&Mt){let r=za.get(t);r||za.set(t,r=new Map);let i=r.get(n);i||r.set(n,i=Wl()),Gh(i)}}function Gh(t,e){let n=!1;Pi<=Wa?qh(t)||(t.n|=Rn,n=!Vh(t)):n=!t.has(Mt),n&&(t.add(Mt),Mt.deps.push(t))}function nn(t,e,n,r,i,s){const o=za.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&Q(t))o.forEach((l,c)=>{(c==="length"||c>=r)&&a.push(l)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":Q(t)?zl(n)&&a.push(o.get("length")):(a.push(o.get(er)),Nr(t)&&a.push(o.get(ja)));break;case"delete":Q(t)||(a.push(o.get(er)),Nr(t)&&a.push(o.get(ja)));break;case"set":Nr(t)&&a.push(o.get(er));break}if(a.length===1)a[0]&&Va(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Va(Wl(l))}}function Va(t,e){for(const n of Q(t)?t:[...t])(n!==Mt||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const q_=$l("__proto__,__v_isRef,__isVue"),Yh=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(Hl)),K_=Vl(),G_=Vl(!1,!0),Y_=Vl(!0),yu=X_();function X_(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=be(this);for(let s=0,o=this.length;s<o;s++)St(r,"get",s+"");const i=r[e](...n);return i===-1||i===!1?r[e](...n.map(be)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){ni();const r=be(this)[e].apply(this,n);return ri(),r}}),t}function Vl(t=!1,e=!1){return function(r,i,s){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&s===(t?e?hv:ef:e?Zh:Qh).get(r))return r;const o=Q(r);if(!t&&o&&pe(yu,i))return Reflect.get(yu,i,s);const a=Reflect.get(r,i,s);return(Hl(i)?Yh.has(i):q_(i))||(t||St(r,"get",i),e)?a:Ze(a)?!o||!zl(i)?a.value:a:ze(a)?t?Gl(a):On(a):a}}const J_=Xh(),Q_=Xh(!0);function Xh(t=!1){return function(n,r,i,s){let o=n[r];if(ji(o)&&Ze(o)&&!Ze(i))return!1;if(!t&&!ji(i)&&(tf(i)||(i=be(i),o=be(o)),!Q(n)&&Ze(o)&&!Ze(i)))return o.value=i,!0;const a=Q(n)&&zl(r)?Number(r)<n.length:pe(n,r),l=Reflect.set(n,r,i,s);return n===be(s)&&(a?Wi(i,o)&&nn(n,"set",r,i):nn(n,"add",r,i)),l}}function Z_(t,e){const n=pe(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&nn(t,"delete",e,void 0),r}function ev(t,e){const n=Reflect.has(t,e);return(!Hl(e)||!Yh.has(e))&&St(t,"has",e),n}function tv(t){return St(t,"iterate",Q(t)?"length":er),Reflect.ownKeys(t)}const Jh={get:K_,set:J_,deleteProperty:Z_,has:ev,ownKeys:tv},nv={get:Y_,set(t,e){return!0},deleteProperty(t,e){return!0}},rv=st({},Jh,{get:G_,set:Q_}),ql=t=>t,Mo=t=>Reflect.getPrototypeOf(t);function Ss(t,e,n=!1,r=!1){t=t.__v_raw;const i=be(t),s=be(e);e!==s&&!n&&St(i,"get",e),!n&&St(i,"get",s);const{has:o}=Mo(i),a=r?ql:n?Xl:Vi;if(o.call(i,e))return a(t.get(e));if(o.call(i,s))return a(t.get(s));t!==i&&t.get(e)}function xs(t,e=!1){const n=this.__v_raw,r=be(n),i=be(t);return t!==i&&!e&&St(r,"has",t),!e&&St(r,"has",i),t===i?n.has(t):n.has(t)||n.has(i)}function Rs(t,e=!1){return t=t.__v_raw,!e&&St(be(t),"iterate",er),Reflect.get(t,"size",t)}function wu(t){t=be(t);const e=be(this);return Mo(e).has.call(e,t)||(e.add(t),nn(e,"add",t,t)),this}function Cu(t,e){e=be(e);const n=be(this),{has:r,get:i}=Mo(n);let s=r.call(n,t);s||(t=be(t),s=r.call(n,t));const o=i.call(n,t);return n.set(t,e),s?Wi(e,o)&&nn(n,"set",t,e):nn(n,"add",t,e),this}function Eu(t){const e=be(this),{has:n,get:r}=Mo(e);let i=n.call(e,t);i||(t=be(t),i=n.call(e,t)),r&&r.call(e,t);const s=e.delete(t);return i&&nn(e,"delete",t,void 0),s}function Tu(){const t=be(this),e=t.size!==0,n=t.clear();return e&&nn(t,"clear",void 0,void 0),n}function Ps(t,e){return function(r,i){const s=this,o=s.__v_raw,a=be(o),l=e?ql:t?Xl:Vi;return!t&&St(a,"iterate",er),o.forEach((c,u)=>r.call(i,l(c),l(u),s))}}function As(t,e,n){return function(...r){const i=this.__v_raw,s=be(i),o=Nr(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...r),u=n?ql:e?Xl:Vi;return!e&&St(s,"iterate",l?ja:er),{next(){const{value:d,done:h}=c.next();return h?{value:d,done:h}:{value:a?[u(d[0]),u(d[1])]:u(d),done:h}},[Symbol.iterator](){return this}}}}function dn(t){return function(...e){return t==="delete"?!1:this}}function iv(){const t={get(s){return Ss(this,s)},get size(){return Rs(this)},has:xs,add:wu,set:Cu,delete:Eu,clear:Tu,forEach:Ps(!1,!1)},e={get(s){return Ss(this,s,!1,!0)},get size(){return Rs(this)},has:xs,add:wu,set:Cu,delete:Eu,clear:Tu,forEach:Ps(!1,!0)},n={get(s){return Ss(this,s,!0)},get size(){return Rs(this,!0)},has(s){return xs.call(this,s,!0)},add:dn("add"),set:dn("set"),delete:dn("delete"),clear:dn("clear"),forEach:Ps(!0,!1)},r={get(s){return Ss(this,s,!0,!0)},get size(){return Rs(this,!0)},has(s){return xs.call(this,s,!0)},add:dn("add"),set:dn("set"),delete:dn("delete"),clear:dn("clear"),forEach:Ps(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=As(s,!1,!1),n[s]=As(s,!0,!1),e[s]=As(s,!1,!0),r[s]=As(s,!0,!0)}),[t,n,e,r]}const[sv,ov,av,lv]=iv();function Kl(t,e){const n=e?t?lv:av:t?ov:sv;return(r,i,s)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(pe(n,i)&&i in r?n:r,i,s)}const cv={get:Kl(!1,!1)},uv={get:Kl(!1,!0)},dv={get:Kl(!0,!1)},Qh=new WeakMap,Zh=new WeakMap,ef=new WeakMap,hv=new WeakMap;function fv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function pv(t){return t.__v_skip||!Object.isExtensible(t)?0:fv($_(t))}function On(t){return ji(t)?t:Yl(t,!1,Jh,cv,Qh)}function gv(t){return Yl(t,!1,rv,uv,Zh)}function Gl(t){return Yl(t,!0,nv,dv,ef)}function Yl(t,e,n,r,i){if(!ze(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=i.get(t);if(s)return s;const o=pv(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return i.set(t,a),a}function Or(t){return ji(t)?Or(t.__v_raw):!!(t&&t.__v_isReactive)}function ji(t){return!!(t&&t.__v_isReadonly)}function tf(t){return!!(t&&t.__v_isShallow)}function nf(t){return Or(t)||ji(t)}function be(t){const e=t&&t.__v_raw;return e?be(e):t}function rf(t){return Zs(t,"__v_skip",!0),t}const Vi=t=>ze(t)?On(t):t,Xl=t=>ze(t)?Gl(t):t;function sf(t){Cn&&Mt&&(t=be(t),Gh(t.dep||(t.dep=Wl())))}function of(t,e){t=be(t),t.dep&&Va(t.dep)}function Ze(t){return!!(t&&t.__v_isRef===!0)}function de(t){return mv(t,!1)}function mv(t,e){return Ze(t)?t:new _v(t,e)}class _v{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:be(e),this._value=n?e:Vi(e)}get value(){return sf(this),this._value}set value(e){e=this.__v_isShallow?e:be(e),Wi(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:Vi(e),of(this))}}function Ve(t){return Ze(t)?t.value:t}const vv={get:(t,e,n)=>Ve(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return Ze(i)&&!Ze(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function af(t){return Or(t)?t:new Proxy(t,vv)}class bv{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function Do(t,e,n){const r=t[e];return Ze(r)?r:new bv(t,e,n)}class yv{constructor(e,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new jl(e,()=>{this._dirty||(this._dirty=!0,of(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const e=be(this);return sf(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function lf(t,e,n=!1){let r,i;const s=ne(t);return s?(r=t,i=Ft):(r=t.get,i=t.set),new yv(r,i,s||!i,n)}function En(t,e,n,r){let i;try{i=r?t(...r):t()}catch(s){Lo(s,e,n)}return i}function At(t,e,n,r){if(ne(t)){const s=En(t,e,n,r);return s&&Hh(s)&&s.catch(o=>{Lo(o,e,n)}),s}const i=[];for(let s=0;s<t.length;s++)i.push(At(t[s],e,n,r));return i}function Lo(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=n;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){En(l,null,10,[t,o,a]);return}}wv(t,n,i,r)}function wv(t,e,n,r=!0){console.error(t)}let to=!1,qa=!1;const Ct=[];let Jt=0;const Ni=[];let Ai=null,Sr=0;const Oi=[];let gn=null,xr=0;const cf=Promise.resolve();let Jl=null,Ka=null;function uf(t){const e=Jl||cf;return t?e.then(this?t.bind(this):t):e}function Cv(t){let e=Jt+1,n=Ct.length;for(;e<n;){const r=e+n>>>1;qi(Ct[r])<t?e=r+1:n=r}return e}function df(t){(!Ct.length||!Ct.includes(t,to&&t.allowRecurse?Jt+1:Jt))&&t!==Ka&&(t.id==null?Ct.push(t):Ct.splice(Cv(t.id),0,t),hf())}function hf(){!to&&!qa&&(qa=!0,Jl=cf.then(gf))}function Ev(t){const e=Ct.indexOf(t);e>Jt&&Ct.splice(e,1)}function ff(t,e,n,r){Q(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?r+1:r))&&n.push(t),hf()}function Tv(t){ff(t,Ai,Ni,Sr)}function Iv(t){ff(t,gn,Oi,xr)}function Ql(t,e=null){if(Ni.length){for(Ka=e,Ai=[...new Set(Ni)],Ni.length=0,Sr=0;Sr<Ai.length;Sr++)Ai[Sr]();Ai=null,Sr=0,Ka=null,Ql(t,e)}}function pf(t){if(Oi.length){const e=[...new Set(Oi)];if(Oi.length=0,gn){gn.push(...e);return}for(gn=e,gn.sort((n,r)=>qi(n)-qi(r)),xr=0;xr<gn.length;xr++)gn[xr]();gn=null,xr=0}}const qi=t=>t.id==null?1/0:t.id;function gf(t){qa=!1,to=!0,Ql(t),Ct.sort((n,r)=>qi(n)-qi(r));const e=Ft;try{for(Jt=0;Jt<Ct.length;Jt++){const n=Ct[Jt];n&&n.active!==!1&&En(n,null,14)}}finally{Jt=0,Ct.length=0,pf(),to=!1,Jl=null,(Ct.length||Ni.length||Oi.length)&&gf(t)}}function Sv(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Re;let i=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:h}=r[u]||Re;h?i=n.map(_=>_.trim()):d&&(i=n.map(eo))}let a,l=r[a=_a(e)]||r[a=_a(Ur(e))];!l&&s&&(l=r[a=_a(ti(e))]),l&&At(l,t,6,i);const c=r[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,At(c,t,6,i)}}function mf(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(i!==void 0)return i;const s=t.emits;let o={},a=!1;if(!ne(t)){const l=c=>{const u=mf(c,e,!0);u&&(a=!0,st(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(r.set(t,null),null):(Q(s)?s.forEach(l=>o[l]=null):st(o,s),r.set(t,o),o)}function Fo(t,e){return!t||!ko(e)?!1:(e=e.slice(2).replace(/Once$/,""),pe(t,e[0].toLowerCase()+e.slice(1))||pe(t,ti(e))||pe(t,e))}let pt=null,$o=null;function no(t){const e=pt;return pt=t,$o=t&&t.type.__scopeId||null,e}function xv(t){$o=t}function Rv(){$o=null}function Zl(t,e=pt,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&Mu(-1);const s=no(e),o=t(...i);return no(s),r._d&&Mu(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function va(t){const{type:e,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:d,data:h,setupState:_,ctx:g,inheritAttrs:C}=t;let b,S;const F=no(t);try{if(n.shapeFlag&4){const U=i||r;b=Vt(u.call(U,U,d,s,_,h,g)),S=l}else{const U=e;b=Vt(U.length>1?U(s,{attrs:l,slots:a,emit:c}):U(s,null)),S=e.props?l:Pv(l)}}catch(U){Mi.length=0,Lo(U,t,1),b=Ge(It)}let z=b;if(S&&C!==!1){const U=Object.keys(S),{shapeFlag:X}=z;U.length&&X&7&&(o&&U.some(Bl)&&(S=Av(S,o)),z=ar(z,S))}return n.dirs&&(z.dirs=z.dirs?z.dirs.concat(n.dirs):n.dirs),n.transition&&(z.transition=n.transition),b=z,no(F),b}const Pv=t=>{let e;for(const n in t)(n==="class"||n==="style"||ko(n))&&((e||(e={}))[n]=t[n]);return e},Av=(t,e)=>{const n={};for(const r in t)(!Bl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function kv(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Iu(r,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const h=u[d];if(o[h]!==r[h]&&!Fo(c,h))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Iu(r,o,c):!0:!!o;return!1}function Iu(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!Fo(n,s))return!0}return!1}function Nv({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Ov=t=>t.__isSuspense;function Mv(t,e){e&&e.pendingBranch?Q(t)?e.effects.push(...t):e.effects.push(t):Iv(t)}function Hr(t,e){if(it){let n=it.provides;const r=it.parent&&it.parent.provides;r===n&&(n=it.provides=Object.create(r)),n[t]=e}}function Ye(t,e,n=!1){const r=it||pt;if(r){const i=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&ne(e)?e.call(r.proxy):e}}function zr(t,e){return Bo(t,null,e)}function Dv(t,e){return Bo(t,null,{flush:"post"})}const Su={};function Tn(t,e,n){return Bo(t,e,n)}function Bo(t,e,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:o}=Re){const a=it;let l,c=!1,u=!1;if(Ze(t)?(l=()=>t.value,c=tf(t)):Or(t)?(l=()=>t,r=!0):Q(t)?(u=!0,c=t.some(Or),l=()=>t.map(S=>{if(Ze(S))return S.value;if(Or(S))return Kn(S);if(ne(S))return En(S,a,2)})):ne(t)?e?l=()=>En(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return d&&d(),At(t,a,3,[h])}:l=Ft,e&&r){const S=l;l=()=>Kn(S())}let d,h=S=>{d=b.onStop=()=>{En(S,a,4)}};if(Yi)return h=Ft,e?n&&At(e,a,3,[l(),u?[]:void 0,h]):l(),Ft;let _=u?[]:Su;const g=()=>{if(!!b.active)if(e){const S=b.run();(r||c||(u?S.some((F,z)=>Wi(F,_[z])):Wi(S,_)))&&(d&&d(),At(e,a,3,[S,_===Su?void 0:_,h]),_=S)}else b.run()};g.allowRecurse=!!e;let C;i==="sync"?C=g:i==="post"?C=()=>bt(g,a&&a.suspense):C=()=>{!a||a.isMounted?Tv(g):g()};const b=new jl(l,C);return e?n?g():_=b.run():i==="post"?bt(b.run.bind(b),a&&a.suspense):b.run(),()=>{b.stop(),a&&a.scope&&Ul(a.scope.effects,b)}}function Lv(t,e,n){const r=this.proxy,i=et(t)?t.includes(".")?_f(r,t):()=>r[t]:t.bind(r,r);let s;ne(e)?s=e:(s=e.handler,n=e);const o=it;Wr(this);const a=Bo(i,s.bind(r),n);return o?Wr(o):nr(),a}function _f(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function Kn(t,e){if(!ze(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ze(t))Kn(t.value,e);else if(Q(t))for(let n=0;n<t.length;n++)Kn(t[n],e);else if(Uh(t)||Nr(t))t.forEach(n=>{Kn(n,e)});else if(Wh(t))for(const n in t)Kn(t[n],e);return t}function Fv(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return _r(()=>{t.isMounted=!0}),Wo(()=>{t.isUnmounting=!0}),t}const Rt=[Function,Array],$v={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Rt,onEnter:Rt,onAfterEnter:Rt,onEnterCancelled:Rt,onBeforeLeave:Rt,onLeave:Rt,onAfterLeave:Rt,onLeaveCancelled:Rt,onBeforeAppear:Rt,onAppear:Rt,onAfterAppear:Rt,onAppearCancelled:Rt},setup(t,{slots:e}){const n=ic(),r=Fv();let i;return()=>{const s=e.default&&yf(e.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){for(const C of s)if(C.type!==It){o=C;break}}const a=be(t),{mode:l}=a;if(r.isLeaving)return ba(o);const c=xu(o);if(!c)return ba(o);const u=Ga(c,a,r,n);Ya(c,u);const d=n.subTree,h=d&&xu(d);let _=!1;const{getTransitionKey:g}=c.type;if(g){const C=g();i===void 0?i=C:C!==i&&(i=C,_=!0)}if(h&&h.type!==It&&(!Vn(c,h)||_)){const C=Ga(h,a,r,n);if(Ya(h,C),l==="out-in")return r.isLeaving=!0,C.afterLeave=()=>{r.isLeaving=!1,n.update()},ba(o);l==="in-out"&&c.type!==It&&(C.delayLeave=(b,S,F)=>{const z=bf(r,h);z[String(h.key)]=h,b._leaveCb=()=>{S(),b._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=F})}return o}}},vf=$v;function bf(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Ga(t,e,n,r){const{appear:i,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:d,onLeave:h,onAfterLeave:_,onLeaveCancelled:g,onBeforeAppear:C,onAppear:b,onAfterAppear:S,onAppearCancelled:F}=e,z=String(t.key),U=bf(n,t),X=(E,x)=>{E&&At(E,r,9,x)},me={mode:s,persisted:o,beforeEnter(E){let x=a;if(!n.isMounted)if(i)x=C||a;else return;E._leaveCb&&E._leaveCb(!0);const D=U[z];D&&Vn(t,D)&&D.el._leaveCb&&D.el._leaveCb(),X(x,[E])},enter(E){let x=l,D=c,q=u;if(!n.isMounted)if(i)x=b||l,D=S||c,q=F||u;else return;let Z=!1;const L=E._enterCb=re=>{Z||(Z=!0,re?X(q,[E]):X(D,[E]),me.delayedLeave&&me.delayedLeave(),E._enterCb=void 0)};x?(x(E,L),x.length<=1&&L()):L()},leave(E,x){const D=String(t.key);if(E._enterCb&&E._enterCb(!0),n.isUnmounting)return x();X(d,[E]);let q=!1;const Z=E._leaveCb=L=>{q||(q=!0,x(),L?X(g,[E]):X(_,[E]),E._leaveCb=void 0,U[D]===t&&delete U[D])};U[D]=t,h?(h(E,Z),h.length<=1&&Z()):Z()},clone(E){return Ga(E,e,n,r)}};return me}function ba(t){if(Uo(t))return t=ar(t),t.children=null,t}function xu(t){return Uo(t)?t.children?t.children[0]:void 0:t}function Ya(t,e){t.shapeFlag&6&&t.component?Ya(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function yf(t,e=!1,n){let r=[],i=0;for(let s=0;s<t.length;s++){let o=t[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===Fe?(o.patchFlag&128&&i++,r=r.concat(yf(o.children,e,a))):(e||o.type!==It)&&r.push(a!=null?ar(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function Me(t){return ne(t)?{setup:t,name:t.name}:t}const ro=t=>!!t.type.__asyncLoader,Uo=t=>t.type.__isKeepAlive;function Bv(t,e){wf(t,"a",e)}function Uv(t,e){wf(t,"da",e)}function wf(t,e,n=it){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Ho(e,r,n),n){let i=n.parent;for(;i&&i.parent;)Uo(i.parent.vnode)&&Hv(r,e,n,i),i=i.parent}}function Hv(t,e,n,r){const i=Ho(e,t,r,!0);ec(()=>{Ul(r[e],i)},n)}function Ho(t,e,n=it,r=!1){if(n){const i=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;ni(),Wr(n);const a=At(e,n,t,o);return nr(),ri(),a});return r?i.unshift(s):i.push(s),s}}const on=t=>(e,n=it)=>(!Yi||t==="sp")&&Ho(t,e,n),zo=on("bm"),_r=on("m"),zv=on("bu"),Wv=on("u"),Wo=on("bum"),ec=on("um"),jv=on("sp"),Vv=on("rtg"),qv=on("rtc");function Kv(t,e=it){Ho("ec",t,e)}let Xa=!0;function Gv(t){const e=Ef(t),n=t.proxy,r=t.ctx;Xa=!1,e.beforeCreate&&Ru(e.beforeCreate,t,"bc");const{data:i,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:h,beforeUpdate:_,updated:g,activated:C,deactivated:b,beforeDestroy:S,beforeUnmount:F,destroyed:z,unmounted:U,render:X,renderTracked:me,renderTriggered:E,errorCaptured:x,serverPrefetch:D,expose:q,inheritAttrs:Z,components:L,directives:re,filters:we}=e;if(c&&Yv(c,r,null,t.appContext.config.unwrapInjectedRef),o)for(const fe in o){const ie=o[fe];ne(ie)&&(r[fe]=ie.bind(n))}if(i){const fe=i.call(n,n);ze(fe)&&(t.data=On(fe))}if(Xa=!0,s)for(const fe in s){const ie=s[fe],Ue=ne(ie)?ie.bind(n,n):ne(ie.get)?ie.get.bind(n,n):Ft,_t=!ne(ie)&&ne(ie.set)?ie.set.bind(n):Ft,De=he({get:Ue,set:_t});Object.defineProperty(r,fe,{enumerable:!0,configurable:!0,get:()=>De.value,set:ut=>De.value=ut})}if(a)for(const fe in a)Cf(a[fe],r,n,fe);if(l){const fe=ne(l)?l.call(n):l;Reflect.ownKeys(fe).forEach(ie=>{Hr(ie,fe[ie])})}u&&Ru(u,t,"c");function ce(fe,ie){Q(ie)?ie.forEach(Ue=>fe(Ue.bind(n))):ie&&fe(ie.bind(n))}if(ce(zo,d),ce(_r,h),ce(zv,_),ce(Wv,g),ce(Bv,C),ce(Uv,b),ce(Kv,x),ce(qv,me),ce(Vv,E),ce(Wo,F),ce(ec,U),ce(jv,D),Q(q))if(q.length){const fe=t.exposed||(t.exposed={});q.forEach(ie=>{Object.defineProperty(fe,ie,{get:()=>n[ie],set:Ue=>n[ie]=Ue})})}else t.exposed||(t.exposed={});X&&t.render===Ft&&(t.render=X),Z!=null&&(t.inheritAttrs=Z),L&&(t.components=L),re&&(t.directives=re)}function Yv(t,e,n=Ft,r=!1){Q(t)&&(t=Ja(t));for(const i in t){const s=t[i];let o;ze(s)?"default"in s?o=Ye(s.from||i,s.default,!0):o=Ye(s.from||i):o=Ye(s),Ze(o)&&r?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function Ru(t,e,n){At(Q(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Cf(t,e,n,r){const i=r.includes(".")?_f(n,r):()=>n[r];if(et(t)){const s=e[t];ne(s)&&Tn(i,s)}else if(ne(t))Tn(i,t.bind(n));else if(ze(t))if(Q(t))t.forEach(s=>Cf(s,e,n,r));else{const s=ne(t.handler)?t.handler.bind(n):e[t.handler];ne(s)&&Tn(i,s,t)}}function Ef(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!i.length&&!n&&!r?l=e:(l={},i.length&&i.forEach(c=>io(l,c,o,!0)),io(l,e,o)),s.set(e,l),l}function io(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&io(t,s,n,!0),i&&i.forEach(o=>io(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Xv[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Xv={data:Pu,props:zn,emits:zn,methods:zn,computed:zn,beforeCreate:ht,created:ht,beforeMount:ht,mounted:ht,beforeUpdate:ht,updated:ht,beforeDestroy:ht,beforeUnmount:ht,destroyed:ht,unmounted:ht,activated:ht,deactivated:ht,errorCaptured:ht,serverPrefetch:ht,components:zn,directives:zn,watch:Qv,provide:Pu,inject:Jv};function Pu(t,e){return e?t?function(){return st(ne(t)?t.call(this,this):t,ne(e)?e.call(this,this):e)}:e:t}function Jv(t,e){return zn(Ja(t),Ja(e))}function Ja(t){if(Q(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ht(t,e){return t?[...new Set([].concat(t,e))]:e}function zn(t,e){return t?st(st(Object.create(null),t),e):e}function Qv(t,e){if(!t)return e;if(!e)return t;const n=st(Object.create(null),t);for(const r in e)n[r]=ht(t[r],e[r]);return n}function Zv(t,e,n,r=!1){const i={},s={};Zs(s,jo,1),t.propsDefaults=Object.create(null),Tf(t,e,i,s);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=r?i:gv(i):t.type.props?t.props=i:t.props=s,t.attrs=s}function eb(t,e,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=t,a=be(i),[l]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let h=u[d];if(Fo(t.emitsOptions,h))continue;const _=e[h];if(l)if(pe(s,h))_!==s[h]&&(s[h]=_,c=!0);else{const g=Ur(h);i[g]=Qa(l,a,g,_,t,!1)}else _!==s[h]&&(s[h]=_,c=!0)}}}else{Tf(t,e,i,s)&&(c=!0);let u;for(const d in a)(!e||!pe(e,d)&&((u=ti(d))===d||!pe(e,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(i[d]=Qa(l,a,d,void 0,t,!0)):delete i[d]);if(s!==a)for(const d in s)(!e||!pe(e,d)&&!0)&&(delete s[d],c=!0)}c&&nn(t,"set","$attrs")}function Tf(t,e,n,r){const[i,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Ws(l))continue;const c=e[l];let u;i&&pe(i,u=Ur(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:Fo(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(s){const l=be(n),c=a||Re;for(let u=0;u<s.length;u++){const d=s[u];n[d]=Qa(i,l,d,c[d],t,!pe(c,d))}}return o}function Qa(t,e,n,r,i,s){const o=t[n];if(o!=null){const a=pe(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&ne(l)){const{propsDefaults:c}=i;n in c?r=c[n]:(Wr(i),r=c[n]=l.call(null,e),nr())}else r=l}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===ti(n))&&(r=!0))}return r}function If(t,e,n=!1){const r=e.propsCache,i=r.get(t);if(i)return i;const s=t.props,o={},a=[];let l=!1;if(!ne(t)){const u=d=>{l=!0;const[h,_]=If(d,e,!0);st(o,h),_&&a.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return r.set(t,kr),kr;if(Q(s))for(let u=0;u<s.length;u++){const d=Ur(s[u]);Au(d)&&(o[d]=Re)}else if(s)for(const u in s){const d=Ur(u);if(Au(d)){const h=s[u],_=o[d]=Q(h)||ne(h)?{type:h}:h;if(_){const g=Ou(Boolean,_.type),C=Ou(String,_.type);_[0]=g>-1,_[1]=C<0||g<C,(g>-1||pe(_,"default"))&&a.push(d)}}}const c=[o,a];return r.set(t,c),c}function Au(t){return t[0]!=="$"}function ku(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Nu(t,e){return ku(t)===ku(e)}function Ou(t,e){return Q(e)?e.findIndex(n=>Nu(n,t)):ne(e)&&Nu(e,t)?0:-1}const Sf=t=>t[0]==="_"||t==="$stable",tc=t=>Q(t)?t.map(Vt):[Vt(t)],tb=(t,e,n)=>{const r=Zl((...i)=>tc(e(...i)),n);return r._c=!1,r},xf=(t,e,n)=>{const r=t._ctx;for(const i in t){if(Sf(i))continue;const s=t[i];if(ne(s))e[i]=tb(i,s,r);else if(s!=null){const o=tc(s);e[i]=()=>o}}},Rf=(t,e)=>{const n=tc(e);t.slots.default=()=>n},nb=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=be(e),Zs(e,"_",n)):xf(e,t.slots={})}else t.slots={},e&&Rf(t,e);Zs(t.slots,jo,1)},rb=(t,e,n)=>{const{vnode:r,slots:i}=t;let s=!0,o=Re;if(r.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(st(i,e),!n&&a===1&&delete i._):(s=!e.$stable,xf(e,i)),o=e}else e&&(Rf(t,e),o={default:1});if(s)for(const a in i)!Sf(a)&&!(a in o)&&delete i[a]};function ib(t,e){const n=pt;if(n===null)return t;const r=qo(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,l,c=Re]=e[s];ne(o)&&(o={mounted:o,updated:o}),o.deep&&Kn(a),i.push({dir:o,instance:r,value:a,oldValue:void 0,arg:l,modifiers:c})}return t}function Bn(t,e,n,r){const i=t.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let l=a.dir[r];l&&(ni(),At(l,n,8,[t.el,a,t,e]),ri())}}function Pf(){return{app:null,config:{isNativeTag:D_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let sb=0;function ob(t,e){return function(r,i=null){ne(r)||(r=Object.assign({},r)),i!=null&&!ze(i)&&(i=null);const s=Pf(),o=new Set;let a=!1;const l=s.app={_uid:sb++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:Ib,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&ne(c.install)?(o.add(c),c.install(l,...u)):ne(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,d){if(!a){const h=Ge(r,i);return h.appContext=s,u&&e?e(h,c):t(h,c,d),a=!0,l._container=c,c.__vue_app__=l,qo(h.component)||h.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function Za(t,e,n,r,i=!1){if(Q(t)){t.forEach((h,_)=>Za(h,e&&(Q(e)?e[_]:e),n,r,i));return}if(ro(r)&&!i)return;const s=r.shapeFlag&4?qo(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Re?a.refs={}:a.refs,d=a.setupState;if(c!=null&&c!==l&&(et(c)?(u[c]=null,pe(d,c)&&(d[c]=null)):Ze(c)&&(c.value=null)),ne(l))En(l,a,12,[o,u]);else{const h=et(l),_=Ze(l);if(h||_){const g=()=>{if(t.f){const C=h?u[l]:l.value;i?Q(C)&&Ul(C,s):Q(C)?C.includes(s)||C.push(s):h?(u[l]=[s],pe(d,l)&&(d[l]=u[l])):(l.value=[s],t.k&&(u[t.k]=l.value))}else h?(u[l]=o,pe(d,l)&&(d[l]=o)):Ze(l)&&(l.value=o,t.k&&(u[t.k]=o))};o?(g.id=-1,bt(g,n)):g()}}}const bt=Mv;function ab(t){return lb(t)}function lb(t,e){const n=H_();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:h,setScopeId:_=Ft,cloneNode:g,insertStaticContent:C}=t,b=(f,p,v,y=null,w=null,k=null,M=!1,P=null,N=!!p.dynamicChildren)=>{if(f===p)return;f&&!Vn(f,p)&&(y=cn(f),dt(f,w,k,!0),f=null),p.patchFlag===-2&&(N=!1,p.dynamicChildren=null);const{type:T,ref:W,shapeFlag:B}=p;switch(T){case nc:S(f,p,v,y);break;case It:F(f,p,v,y);break;case Vs:f==null&&z(p,v,y,M);break;case Fe:re(f,p,v,y,w,k,M,P,N);break;default:B&1?me(f,p,v,y,w,k,M,P,N):B&6?we(f,p,v,y,w,k,M,P,N):(B&64||B&128)&&T.process(f,p,v,y,w,k,M,P,N,xt)}W!=null&&w&&Za(W,f&&f.ref,k,p||f,!p)},S=(f,p,v,y)=>{if(f==null)r(p.el=a(p.children),v,y);else{const w=p.el=f.el;p.children!==f.children&&c(w,p.children)}},F=(f,p,v,y)=>{f==null?r(p.el=l(p.children||""),v,y):p.el=f.el},z=(f,p,v,y)=>{[f.el,f.anchor]=C(f.children,p,v,y,f.el,f.anchor)},U=({el:f,anchor:p},v,y)=>{let w;for(;f&&f!==p;)w=h(f),r(f,v,y),f=w;r(p,v,y)},X=({el:f,anchor:p})=>{let v;for(;f&&f!==p;)v=h(f),i(f),f=v;i(p)},me=(f,p,v,y,w,k,M,P,N)=>{M=M||p.type==="svg",f==null?E(p,v,y,w,k,M,P,N):q(f,p,w,k,M,P,N)},E=(f,p,v,y,w,k,M,P)=>{let N,T;const{type:W,props:B,shapeFlag:H,transition:K,patchFlag:ae,dirs:Ce}=f;if(f.el&&g!==void 0&&ae===-1)N=f.el=g(f.el);else{if(N=f.el=o(f.type,k,B&&B.is,B),H&8?u(N,f.children):H&16&&D(f.children,N,null,y,w,k&&W!=="foreignObject",M,P),Ce&&Bn(f,null,y,"created"),B){for(const Ee in B)Ee!=="value"&&!Ws(Ee)&&s(N,Ee,null,B[Ee],k,f.children,y,w,Xe);"value"in B&&s(N,"value",null,B.value),(T=B.onVnodeBeforeMount)&&zt(T,y,f)}x(N,f,f.scopeId,M,y)}Ce&&Bn(f,null,y,"beforeMount");const ue=(!w||w&&!w.pendingBranch)&&K&&!K.persisted;ue&&K.beforeEnter(N),r(N,p,v),((T=B&&B.onVnodeMounted)||ue||Ce)&&bt(()=>{T&&zt(T,y,f),ue&&K.enter(N),Ce&&Bn(f,null,y,"mounted")},w)},x=(f,p,v,y,w)=>{if(v&&_(f,v),y)for(let k=0;k<y.length;k++)_(f,y[k]);if(w){let k=w.subTree;if(p===k){const M=w.vnode;x(f,M,M.scopeId,M.slotScopeIds,w.parent)}}},D=(f,p,v,y,w,k,M,P,N=0)=>{for(let T=N;T<f.length;T++){const W=f[T]=P?mn(f[T]):Vt(f[T]);b(null,W,p,v,y,w,k,M,P)}},q=(f,p,v,y,w,k,M)=>{const P=p.el=f.el;let{patchFlag:N,dynamicChildren:T,dirs:W}=p;N|=f.patchFlag&16;const B=f.props||Re,H=p.props||Re;let K;v&&Un(v,!1),(K=H.onVnodeBeforeUpdate)&&zt(K,v,p,f),W&&Bn(p,f,v,"beforeUpdate"),v&&Un(v,!0);const ae=w&&p.type!=="foreignObject";if(T?Z(f.dynamicChildren,T,P,v,y,ae,k):M||Ue(f,p,P,null,v,y,ae,k,!1),N>0){if(N&16)L(P,p,B,H,v,y,w);else if(N&2&&B.class!==H.class&&s(P,"class",null,H.class,w),N&4&&s(P,"style",B.style,H.style,w),N&8){const Ce=p.dynamicProps;for(let ue=0;ue<Ce.length;ue++){const Ee=Ce[ue],I=B[Ee],$=H[Ee];($!==I||Ee==="value")&&s(P,Ee,I,$,w,f.children,v,y,Xe)}}N&1&&f.children!==p.children&&u(P,p.children)}else!M&&T==null&&L(P,p,B,H,v,y,w);((K=H.onVnodeUpdated)||W)&&bt(()=>{K&&zt(K,v,p,f),W&&Bn(p,f,v,"updated")},y)},Z=(f,p,v,y,w,k,M)=>{for(let P=0;P<p.length;P++){const N=f[P],T=p[P],W=N.el&&(N.type===Fe||!Vn(N,T)||N.shapeFlag&70)?d(N.el):v;b(N,T,W,null,y,w,k,M,!0)}},L=(f,p,v,y,w,k,M)=>{if(v!==y){for(const P in y){if(Ws(P))continue;const N=y[P],T=v[P];N!==T&&P!=="value"&&s(f,P,T,N,M,p.children,w,k,Xe)}if(v!==Re)for(const P in v)!Ws(P)&&!(P in y)&&s(f,P,v[P],null,M,p.children,w,k,Xe);"value"in y&&s(f,"value",v.value,y.value)}},re=(f,p,v,y,w,k,M,P,N)=>{const T=p.el=f?f.el:a(""),W=p.anchor=f?f.anchor:a("");let{patchFlag:B,dynamicChildren:H,slotScopeIds:K}=p;K&&(P=P?P.concat(K):K),f==null?(r(T,v,y),r(W,v,y),D(p.children,v,W,w,k,M,P,N)):B>0&&B&64&&H&&f.dynamicChildren?(Z(f.dynamicChildren,H,v,w,k,M,P),(p.key!=null||w&&p===w.subTree)&&Af(f,p,!0)):Ue(f,p,v,W,w,k,M,P,N)},we=(f,p,v,y,w,k,M,P,N)=>{p.slotScopeIds=P,f==null?p.shapeFlag&512?w.ctx.activate(p,v,y,M,N):Se(p,v,y,w,k,M,N):ce(f,p,N)},Se=(f,p,v,y,w,k,M)=>{const P=f.component=bb(f,y,w);if(Uo(f)&&(P.ctx.renderer=xt),yb(P),P.asyncDep){if(w&&w.registerDep(P,fe),!f.el){const N=P.subTree=Ge(It);F(null,N,p,v)}return}fe(P,f,p,v,w,k,M)},ce=(f,p,v)=>{const y=p.component=f.component;if(kv(f,p,v))if(y.asyncDep&&!y.asyncResolved){ie(y,p,v);return}else y.next=p,Ev(y.update),y.update();else p.component=f.component,p.el=f.el,y.vnode=p},fe=(f,p,v,y,w,k,M)=>{const P=()=>{if(f.isMounted){let{next:W,bu:B,u:H,parent:K,vnode:ae}=f,Ce=W,ue;Un(f,!1),W?(W.el=ae.el,ie(f,W,M)):W=ae,B&&js(B),(ue=W.props&&W.props.onVnodeBeforeUpdate)&&zt(ue,K,W,ae),Un(f,!0);const Ee=va(f),I=f.subTree;f.subTree=Ee,b(I,Ee,d(I.el),cn(I),f,w,k),W.el=Ee.el,Ce===null&&Nv(f,Ee.el),H&&bt(H,w),(ue=W.props&&W.props.onVnodeUpdated)&&bt(()=>zt(ue,K,W,ae),w)}else{let W;const{el:B,props:H}=p,{bm:K,m:ae,parent:Ce}=f,ue=ro(p);if(Un(f,!1),K&&js(K),!ue&&(W=H&&H.onVnodeBeforeMount)&&zt(W,Ce,p),Un(f,!0),B&&Dn){const Ee=()=>{f.subTree=va(f),Dn(B,f.subTree,f,w,null)};ue?p.type.__asyncLoader().then(()=>!f.isUnmounted&&Ee()):Ee()}else{const Ee=f.subTree=va(f);b(null,Ee,v,y,f,w,k),p.el=Ee.el}if(ae&&bt(ae,w),!ue&&(W=H&&H.onVnodeMounted)){const Ee=p;bt(()=>zt(W,Ce,Ee),w)}p.shapeFlag&256&&f.a&&bt(f.a,w),f.isMounted=!0,p=v=y=null}},N=f.effect=new jl(P,()=>df(f.update),f.scope),T=f.update=N.run.bind(N);T.id=f.uid,Un(f,!0),T()},ie=(f,p,v)=>{p.component=f;const y=f.vnode.props;f.vnode=p,f.next=null,eb(f,p.props,y,v),rb(f,p.children,v),ni(),Ql(void 0,f.update),ri()},Ue=(f,p,v,y,w,k,M,P,N=!1)=>{const T=f&&f.children,W=f?f.shapeFlag:0,B=p.children,{patchFlag:H,shapeFlag:K}=p;if(H>0){if(H&128){De(T,B,v,y,w,k,M,P,N);return}else if(H&256){_t(T,B,v,y,w,k,M,P,N);return}}K&8?(W&16&&Xe(T,w,k),B!==T&&u(v,B)):W&16?K&16?De(T,B,v,y,w,k,M,P,N):Xe(T,w,k,!0):(W&8&&u(v,""),K&16&&D(B,v,y,w,k,M,P,N))},_t=(f,p,v,y,w,k,M,P,N)=>{f=f||kr,p=p||kr;const T=f.length,W=p.length,B=Math.min(T,W);let H;for(H=0;H<B;H++){const K=p[H]=N?mn(p[H]):Vt(p[H]);b(f[H],K,v,null,w,k,M,P,N)}T>W?Xe(f,w,k,!0,!1,B):D(p,v,y,w,k,M,P,N,B)},De=(f,p,v,y,w,k,M,P,N)=>{let T=0;const W=p.length;let B=f.length-1,H=W-1;for(;T<=B&&T<=H;){const K=f[T],ae=p[T]=N?mn(p[T]):Vt(p[T]);if(Vn(K,ae))b(K,ae,v,null,w,k,M,P,N);else break;T++}for(;T<=B&&T<=H;){const K=f[B],ae=p[H]=N?mn(p[H]):Vt(p[H]);if(Vn(K,ae))b(K,ae,v,null,w,k,M,P,N);else break;B--,H--}if(T>B){if(T<=H){const K=H+1,ae=K<W?p[K].el:y;for(;T<=H;)b(null,p[T]=N?mn(p[T]):Vt(p[T]),v,ae,w,k,M,P,N),T++}}else if(T>H)for(;T<=B;)dt(f[T],w,k,!0),T++;else{const K=T,ae=T,Ce=new Map;for(T=ae;T<=H;T++){const ye=p[T]=N?mn(p[T]):Vt(p[T]);ye.key!=null&&Ce.set(ye.key,T)}let ue,Ee=0;const I=H-ae+1;let $=!1,G=0;const ge=new Array(I);for(T=0;T<I;T++)ge[T]=0;for(T=K;T<=B;T++){const ye=f[T];if(Ee>=I){dt(ye,w,k,!0);continue}let Le;if(ye.key!=null)Le=Ce.get(ye.key);else for(ue=ae;ue<=H;ue++)if(ge[ue-ae]===0&&Vn(ye,p[ue])){Le=ue;break}Le===void 0?dt(ye,w,k,!0):(ge[Le-ae]=T+1,Le>=G?G=Le:$=!0,b(ye,p[Le],v,null,w,k,M,P,N),Ee++)}const Oe=$?cb(ge):kr;for(ue=Oe.length-1,T=I-1;T>=0;T--){const ye=ae+T,Le=p[ye],Te=ye+1<W?p[ye+1].el:y;ge[T]===0?b(null,Le,v,Te,w,k,M,P,N):$&&(ue<0||T!==Oe[ue]?ut(Le,v,Te,2):ue--)}}},ut=(f,p,v,y,w=null)=>{const{el:k,type:M,transition:P,children:N,shapeFlag:T}=f;if(T&6){ut(f.component.subTree,p,v,y);return}if(T&128){f.suspense.move(p,v,y);return}if(T&64){M.move(f,p,v,xt);return}if(M===Fe){r(k,p,v);for(let B=0;B<N.length;B++)ut(N[B],p,v,y);r(f.anchor,p,v);return}if(M===Vs){U(f,p,v);return}if(y!==2&&T&1&&P)if(y===0)P.beforeEnter(k),r(k,p,v),bt(()=>P.enter(k),w);else{const{leave:B,delayLeave:H,afterLeave:K}=P,ae=()=>r(k,p,v),Ce=()=>{B(k,()=>{ae(),K&&K()})};H?H(k,ae,Ce):Ce()}else r(k,p,v)},dt=(f,p,v,y=!1,w=!1)=>{const{type:k,props:M,ref:P,children:N,dynamicChildren:T,shapeFlag:W,patchFlag:B,dirs:H}=f;if(P!=null&&Za(P,null,v,f,!0),W&256){p.ctx.deactivate(f);return}const K=W&1&&H,ae=!ro(f);let Ce;if(ae&&(Ce=M&&M.onVnodeBeforeUnmount)&&zt(Ce,p,f),W&6)_i(f.component,v,y);else{if(W&128){f.suspense.unmount(v,y);return}K&&Bn(f,null,p,"beforeUnmount"),W&64?f.type.remove(f,p,v,w,xt,y):T&&(k!==Fe||B>0&&B&64)?Xe(T,p,v,!1,!0):(k===Fe&&B&384||!w&&W&16)&&Xe(N,p,v),y&&wr(f)}(ae&&(Ce=M&&M.onVnodeUnmounted)||K)&&bt(()=>{Ce&&zt(Ce,p,f),K&&Bn(f,null,p,"unmounted")},v)},wr=f=>{const{type:p,el:v,anchor:y,transition:w}=f;if(p===Fe){mi(v,y);return}if(p===Vs){X(f);return}const k=()=>{i(v),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(f.shapeFlag&1&&w&&!w.persisted){const{leave:M,delayLeave:P}=w,N=()=>M(v,k);P?P(f.el,k,N):N()}else k()},mi=(f,p)=>{let v;for(;f!==p;)v=h(f),i(f),f=v;i(p)},_i=(f,p,v)=>{const{bum:y,scope:w,update:k,subTree:M,um:P}=f;y&&js(y),w.stop(),k&&(k.active=!1,dt(M,f,p,v)),P&&bt(P,p),bt(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Xe=(f,p,v,y=!1,w=!1,k=0)=>{for(let M=k;M<f.length;M++)dt(f[M],p,v,y,w)},cn=f=>f.shapeFlag&6?cn(f.component.subTree):f.shapeFlag&128?f.suspense.next():h(f.anchor||f.el),Cr=(f,p,v)=>{f==null?p._vnode&&dt(p._vnode,null,null,!0):b(p._vnode||null,f,p,null,null,null,v),pf(),p._vnode=f},xt={p:b,um:dt,m:ut,r:wr,mt:Se,mc:D,pc:Ue,pbc:Z,n:cn,o:t};let Mn,Dn;return e&&([Mn,Dn]=e(xt)),{render:Cr,hydrate:Mn,createApp:ob(Cr,Mn)}}function Un({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Af(t,e,n=!1){const r=t.children,i=e.children;if(Q(r)&&Q(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=mn(i[s]),a.el=o.el),n||Af(o,a))}}function cb(t){const e=t.slice(),n=[0];let r,i,s,o,a;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(i=n[n.length-1],t[i]<c){e[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}const ub=t=>t.__isTeleport,db=Symbol(),Fe=Symbol(void 0),nc=Symbol(void 0),It=Symbol(void 0),Vs=Symbol(void 0),Mi=[];let tr=null;function _e(t=!1){Mi.push(tr=t?null:[])}function hb(){Mi.pop(),tr=Mi[Mi.length-1]||null}let so=1;function Mu(t){so+=t}function kf(t){return t.dynamicChildren=so>0?tr||kr:null,hb(),so>0&&tr&&tr.push(t),t}function He(t,e,n,r,i,s){return kf(lt(t,e,n,r,i,s,!0))}function Bt(t,e,n,r,i){return kf(Ge(t,e,n,r,i,!0))}function Ki(t){return t?t.__v_isVNode===!0:!1}function Vn(t,e){return t.type===e.type&&t.key===e.key}const jo="__vInternal",Nf=({key:t})=>t!=null?t:null,qs=({ref:t,ref_key:e,ref_for:n})=>t!=null?et(t)||Ze(t)||ne(t)?{i:pt,r:t,k:e,f:!!n}:t:null;function lt(t,e=null,n=null,r=0,i=null,s=t===Fe?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Nf(e),ref:e&&qs(e),scopeId:$o,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null};return a?(rc(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=et(n)?8:16),so>0&&!o&&tr&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&tr.push(l),l}const Ge=fb;function fb(t,e=null,n=null,r=0,i=null,s=!1){if((!t||t===db)&&(t=It),Ki(t)){const a=ar(t,e,!0);return n&&rc(a,n),a}if(Tb(t)&&(t=t.__vccOpts),e){e=pb(e);let{class:a,style:l}=e;a&&!et(a)&&(e.class=ei(a)),ze(l)&&(nf(l)&&!Q(l)&&(l=st({},l)),e.style=Ao(l))}const o=et(t)?1:Ov(t)?128:ub(t)?64:ze(t)?4:ne(t)?2:0;return lt(t,e,n,r,i,o,s,!0)}function pb(t){return t?nf(t)||jo in t?st({},t):t:null}function ar(t,e,n=!1){const{props:r,ref:i,patchFlag:s,children:o}=t,a=e?Of(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Nf(a),ref:e&&e.ref?n&&i?Q(i)?i.concat(qs(e)):[i,qs(e)]:qs(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Fe?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ar(t.ssContent),ssFallback:t.ssFallback&&ar(t.ssFallback),el:t.el,anchor:t.anchor}}function Vo(t=" ",e=0){return Ge(nc,null,t,e)}function Gn(t="",e=!1){return e?(_e(),Bt(It,null,t)):Ge(It,null,t)}function Vt(t){return t==null||typeof t=="boolean"?Ge(It):Q(t)?Ge(Fe,null,t.slice()):typeof t=="object"?mn(t):Ge(nc,null,String(t))}function mn(t){return t.el===null||t.memo?t:ar(t)}function rc(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(Q(e))n=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),rc(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(jo in e)?e._ctx=pt:i===3&&pt&&(pt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ne(e)?(e={default:e,_ctx:pt},n=32):(e=String(e),r&64?(n=16,e=[Vo(e)]):n=8);t.children=e,t.shapeFlag|=n}function Of(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=ei([e.class,r.class]));else if(i==="style")e.style=Ao([e.style,r.style]);else if(ko(i)){const s=e[i],o=r[i];o&&s!==o&&!(Q(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function zt(t,e,n,r=null){At(t,e,7,[n,r])}function Gi(t,e,n,r){let i;const s=n&&n[r];if(Q(t)||et(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,s&&s[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,s&&s[o])}else if(ze(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,s&&s[a])}}else i=[];return n&&(n[r]=i),i}function gb(t,e,n={},r,i){if(pt.isCE||pt.parent&&ro(pt.parent)&&pt.parent.isCE)return Ge("slot",e==="default"?null:{name:e},r&&r());let s=t[e];s&&s._c&&(s._d=!1),_e();const o=s&&Mf(s(n)),a=Bt(Fe,{key:n.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function Mf(t){return t.some(e=>Ki(e)?!(e.type===It||e.type===Fe&&!Mf(e.children)):!0)?t:null}const el=t=>t?Df(t)?qo(t)||t.proxy:el(t.parent):null,oo=st(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>el(t.parent),$root:t=>el(t.root),$emit:t=>t.emit,$options:t=>Ef(t),$forceUpdate:t=>()=>df(t.update),$nextTick:t=>uf.bind(t.proxy),$watch:t=>Lv.bind(t)}),mb={get({_:t},e){const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return i[e];case 4:return n[e];case 3:return s[e]}else{if(r!==Re&&pe(r,e))return o[e]=1,r[e];if(i!==Re&&pe(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&pe(c,e))return o[e]=3,s[e];if(n!==Re&&pe(n,e))return o[e]=4,n[e];Xa&&(o[e]=0)}}const u=oo[e];let d,h;if(u)return e==="$attrs"&&St(t,"get",e),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==Re&&pe(n,e))return o[e]=4,n[e];if(h=l.config.globalProperties,pe(h,e))return h[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:s}=t;return i!==Re&&pe(i,e)?(i[e]=n,!0):r!==Re&&pe(r,e)?(r[e]=n,!0):pe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!n[o]||t!==Re&&pe(t,o)||e!==Re&&pe(e,o)||(a=s[0])&&pe(a,o)||pe(r,o)||pe(oo,o)||pe(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:pe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},_b=Pf();let vb=0;function bb(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||_b,s={uid:vb++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new z_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:If(r,i),emitsOptions:mf(r,i),emit:null,emitted:null,propsDefaults:Re,inheritAttrs:r.inheritAttrs,ctx:Re,data:Re,props:Re,attrs:Re,slots:Re,refs:Re,setupState:Re,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Sv.bind(null,s),t.ce&&t.ce(s),s}let it=null;const ic=()=>it||pt,Wr=t=>{it=t,t.scope.on()},nr=()=>{it&&it.scope.off(),it=null};function Df(t){return t.vnode.shapeFlag&4}let Yi=!1;function yb(t,e=!1){Yi=e;const{props:n,children:r}=t.vnode,i=Df(t);Zv(t,n,i,e),nb(t,r);const s=i?wb(t,e):void 0;return Yi=!1,s}function wb(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=rf(new Proxy(t.ctx,mb));const{setup:r}=n;if(r){const i=t.setupContext=r.length>1?Eb(t):null;Wr(t),ni();const s=En(r,t,0,[t.props,i]);if(ri(),nr(),Hh(s)){if(s.then(nr,nr),e)return s.then(o=>{Du(t,o,e)}).catch(o=>{Lo(o,t,0)});t.asyncDep=s}else Du(t,s,e)}else Lf(t,e)}function Du(t,e,n){ne(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ze(e)&&(t.setupState=af(e)),Lf(t,n)}let Lu;function Lf(t,e,n){const r=t.type;if(!t.render){if(!e&&Lu&&!r.render){const i=r.template;if(i){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,c=st(st({isCustomElement:s,delimiters:a},o),l);r.render=Lu(i,c)}}t.render=r.render||Ft}Wr(t),ni(),Gv(t),ri(),nr()}function Cb(t){return new Proxy(t.attrs,{get(e,n){return St(t,"get","$attrs"),e[n]}})}function Eb(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=Cb(t))},slots:t.slots,emit:t.emit,expose:e}}function qo(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(af(rf(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in oo)return oo[n](t)}}))}function Tb(t){return ne(t)&&"__vccOpts"in t}const he=(t,e)=>lf(t,e,Yi);function O(t,e,n){const r=arguments.length;return r===2?ze(e)&&!Q(e)?Ki(e)?Ge(t,null,[e]):Ge(t,e):Ge(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ki(n)&&(n=[n]),Ge(t,e,n))}const Ib="3.2.33",Sb="http://www.w3.org/2000/svg",qn=typeof document!="undefined"?document:null,Fu=qn&&qn.createElement("template"),xb={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e?qn.createElementNS(Sb,t):qn.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>qn.createTextNode(t),createComment:t=>qn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>qn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{Fu.innerHTML=r?`<svg>${t}</svg>`:t;const a=Fu.content;if(r){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Rb(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Pb(t,e,n){const r=t.style,i=et(n);if(n&&!i){for(const s in n)tl(r,s,n[s]);if(e&&!et(e))for(const s in e)n[s]==null&&tl(r,s,"")}else{const s=r.display;i?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=s)}}const $u=/\s*!important$/;function tl(t,e,n){if(Q(n))n.forEach(r=>tl(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Ab(t,e);$u.test(n)?t.setProperty(ti(r),n.replace($u,""),"important"):t[r]=n}}const Bu=["Webkit","Moz","ms"],ya={};function Ab(t,e){const n=ya[e];if(n)return n;let r=Ur(e);if(r!=="filter"&&r in t)return ya[e]=r;r=jh(r);for(let i=0;i<Bu.length;i++){const s=Bu[i]+r;if(s in t)return ya[e]=s}return e}const Uu="http://www.w3.org/1999/xlink";function kb(t,e,n,r,i){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Uu,e.slice(6,e.length)):t.setAttributeNS(Uu,e,n);else{const s=k_(e);n==null||s&&!$h(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function Nb(t,e,n,r,i,s,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,i,s),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n==null?"":n;(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=$h(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[Ff,Ob]=(()=>{let t=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(t=()=>performance.now());const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let nl=0;const Mb=Promise.resolve(),Db=()=>{nl=0},Lb=()=>nl||(Mb.then(Db),nl=Ff());function Rr(t,e,n,r){t.addEventListener(e,n,r)}function Fb(t,e,n,r){t.removeEventListener(e,n,r)}function $b(t,e,n,r,i=null){const s=t._vei||(t._vei={}),o=s[e];if(r&&o)o.value=r;else{const[a,l]=Bb(e);if(r){const c=s[e]=Ub(r,i);Rr(t,a,c,l)}else o&&(Fb(t,a,o,l),s[e]=void 0)}}const Hu=/(?:Once|Passive|Capture)$/;function Bb(t){let e;if(Hu.test(t)){e={};let n;for(;n=t.match(Hu);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[ti(t.slice(2)),e]}function Ub(t,e){const n=r=>{const i=r.timeStamp||Ff();(Ob||i>=n.attached-1)&&At(Hb(r,n.value),e,5,[r])};return n.value=t,n.attached=Lb(),n}function Hb(t,e){if(Q(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const zu=/^on[a-z]/,zb=(t,e,n,r,i=!1,s,o,a,l)=>{e==="class"?Rb(t,r,i):e==="style"?Pb(t,n,r):ko(e)?Bl(e)||$b(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Wb(t,e,r,i))?Nb(t,e,r,s,o,a,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),kb(t,e,r,i))};function Wb(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&zu.test(e)&&ne(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||zu.test(e)&&et(n)?!1:e in t}function sc(t){const e=ic();if(!e)return;const n=()=>rl(e.subTree,t(e.proxy));Dv(n),_r(()=>{const r=new MutationObserver(n);r.observe(e.subTree.el.parentNode,{childList:!0}),ec(()=>r.disconnect())})}function rl(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{rl(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)Wu(t.el,e);else if(t.type===Fe)t.children.forEach(n=>rl(n,e));else if(t.type===Vs){let{el:n,anchor:r}=t;for(;n&&(Wu(n,e),n!==r);)n=n.nextSibling}}function Wu(t,e){if(t.nodeType===1){const n=t.style;for(const r in e)n.setProperty(`--${r}`,e[r])}}const hn="transition",yi="animation",Xi=(t,{slots:e})=>O(vf,jb(t),e);Xi.displayName="Transition";const $f={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Xi.props=st({},vf.props,$f);const Hn=(t,e=[])=>{Q(t)?t.forEach(n=>n(...e)):t&&t(...e)},ju=t=>t?Q(t)?t.some(e=>e.length>1):t.length>1:!1;function jb(t){const e={};for(const L in t)L in $f||(e[L]=t[L]);if(t.css===!1)return e;const{name:n="v",type:r,duration:i,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:_=`${n}-leave-to`}=t,g=Vb(i),C=g&&g[0],b=g&&g[1],{onBeforeEnter:S,onEnter:F,onEnterCancelled:z,onLeave:U,onLeaveCancelled:X,onBeforeAppear:me=S,onAppear:E=F,onAppearCancelled:x=z}=e,D=(L,re,we)=>{Tr(L,re?u:a),Tr(L,re?c:o),we&&we()},q=(L,re)=>{Tr(L,_),Tr(L,h),re&&re()},Z=L=>(re,we)=>{const Se=L?E:F,ce=()=>D(re,L,we);Hn(Se,[re,ce]),Vu(()=>{Tr(re,L?l:s),fn(re,L?u:a),ju(Se)||qu(re,r,C,ce)})};return st(e,{onBeforeEnter(L){Hn(S,[L]),fn(L,s),fn(L,o)},onBeforeAppear(L){Hn(me,[L]),fn(L,l),fn(L,c)},onEnter:Z(!1),onAppear:Z(!0),onLeave(L,re){const we=()=>q(L,re);fn(L,d),Gb(),fn(L,h),Vu(()=>{Tr(L,d),fn(L,_),ju(U)||qu(L,r,b,we)}),Hn(U,[L,we])},onEnterCancelled(L){D(L,!1),Hn(z,[L])},onAppearCancelled(L){D(L,!0),Hn(x,[L])},onLeaveCancelled(L){q(L),Hn(X,[L])}})}function Vb(t){if(t==null)return null;if(ze(t))return[wa(t.enter),wa(t.leave)];{const e=wa(t);return[e,e]}}function wa(t){return eo(t)}function fn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function Tr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function Vu(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let qb=0;function qu(t,e,n,r){const i=t._endId=++qb,s=()=>{i===t._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:l}=Kb(t,e);if(!o)return r();const c=o+"end";let u=0;const d=()=>{t.removeEventListener(c,h),s()},h=_=>{_.target===t&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},a+1),t.addEventListener(c,h)}function Kb(t,e){const n=window.getComputedStyle(t),r=g=>(n[g]||"").split(", "),i=r(hn+"Delay"),s=r(hn+"Duration"),o=Ku(i,s),a=r(yi+"Delay"),l=r(yi+"Duration"),c=Ku(a,l);let u=null,d=0,h=0;e===hn?o>0&&(u=hn,d=o,h=s.length):e===yi?c>0&&(u=yi,d=c,h=l.length):(d=Math.max(o,c),u=d>0?o>c?hn:yi:null,h=u?u===hn?s.length:l.length:0);const _=u===hn&&/\b(transform|all)(,|$)/.test(n[hn+"Property"]);return{type:u,timeout:d,propCount:h,hasTransform:_}}function Ku(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Gu(n)+Gu(t[r])))}function Gu(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function Gb(){return document.body.offsetHeight}const Yu=t=>{const e=t.props["onUpdate:modelValue"];return Q(e)?n=>js(e,n):e};function Yb(t){t.target.composing=!0}function Xu(t){const e=t.target;e.composing&&(e.composing=!1,Xb(e,"input"))}function Xb(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const Jb={created(t,{modifiers:{lazy:e,trim:n,number:r}},i){t._assign=Yu(i);const s=r||i.props&&i.props.type==="number";Rr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n?a=a.trim():s&&(a=eo(a)),t._assign(a)}),n&&Rr(t,"change",()=>{t.value=t.value.trim()}),e||(Rr(t,"compositionstart",Yb),Rr(t,"compositionend",Xu),Rr(t,"change",Xu))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:i}},s){if(t._assign=Yu(s),t.composing||document.activeElement===t&&(n||r&&t.value.trim()===e||(i||t.type==="number")&&eo(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},Qb=st({patchProp:zb},xb);let Ju;function Zb(){return Ju||(Ju=ab(Qb))}const ey=(...t)=>{const e=Zb().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=ty(r);if(!i)return;const s=e._component;!ne(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function ty(t){return et(t)?document.querySelector(t):t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bf={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A=function(t,e){if(!t)throw ii(e)},ii=function(t){return new Error("Firebase Database ("+Bf.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uf=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ny=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},oc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=s>>2,d=(s&3)<<4|a>>4;let h=(a&15)<<2|c>>6,_=c&63;l||(_=64,o||(h=64)),r.push(n[u],n[d],n[h],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Uf(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ny(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||d==null)throw Error();const h=s<<2|a>>4;if(r.push(h),c!==64){const _=a<<4&240|c>>2;if(r.push(_),d!==64){const g=c<<6&192|d;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Hf=function(t){const e=Uf(t);return oc.encodeByteArray(e,!0)},zf=function(t){return Hf(t).replace(/\./g,"")},il=function(t){try{return oc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ry(t){return Wf(void 0,t)}function Wf(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!iy(n)||(t[n]=Wf(t[n],e[n]));return t}function iy(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ac(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ct())}function sy(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function jf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function oy(){const t=ct();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Vf(){return Bf.NODE_ADMIN===!0}function ay(){return typeof indexedDB=="object"}function ly(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cy="FirebaseError";class si extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=cy,Object.setPrototypeOf(this,si.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,us.prototype.create)}}class us{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?uy(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new si(i,a,r)}}function uy(t,e){return t.replace(dy,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const dy=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ji(t){return JSON.parse(t)}function Ke(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qf=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Ji(il(s[0])||""),n=Ji(il(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},hy=function(t){const e=qf(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},fy=function(t){const e=qf(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function jr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function sl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ao(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function lo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Qu(s)&&Qu(o)){if(!lo(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Qu(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class py{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const h=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^s&(o^a),u=1518500249):(c=s^o^a,u=1859775393):d<60?(c=s&o|a&(s|o),u=2400959708):(c=s^o^a,u=3395469782);const h=(i<<5|i>>>27)+c+l+u+r[d]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function gy(t,e){const n=new my(t,e);return n.subscribe.bind(n)}class my{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");_y(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ca),i.error===void 0&&(i.error=Ca),i.complete===void 0&&(i.complete=Ca);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function _y(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ca(){}function Ko(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vy=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,A(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Go=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(t){return t&&t._delegate?t._delegate:t}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ki(t,e){return new Promise((n,r)=>{t.onsuccess=i=>{n(i.target.result)},t.onerror=i=>{var s;r(`${e}: ${(s=i.target.error)===null||s===void 0?void 0:s.message}`)}})}class Zu{constructor(e){this._db=e,this.objectStoreNames=this._db.objectStoreNames}transaction(e,n="readonly"){return new Kf(this._db.transaction.call(this._db,e,n))}createObjectStore(e,n){return new Gf(this._db.createObjectStore(e,n))}close(){this._db.close()}}class Kf{constructor(e){this._transaction=e,this.complete=new Promise((n,r)=>{this._transaction.oncomplete=function(){n()},this._transaction.onerror=()=>{r(this._transaction.error)},this._transaction.onabort=()=>{r(this._transaction.error)}})}objectStore(e){return new Gf(this._transaction.objectStore(e))}}class Gf{constructor(e){this._store=e}index(e){return new ed(this._store.index(e))}createIndex(e,n,r){return new ed(this._store.createIndex(e,n,r))}get(e){const n=this._store.get(e);return ki(n,"Error reading from IndexedDB")}put(e,n){const r=this._store.put(e,n);return ki(r,"Error writing to IndexedDB")}delete(e){const n=this._store.delete(e);return ki(n,"Error deleting from IndexedDB")}clear(){const e=this._store.clear();return ki(e,"Error clearing IndexedDB object store")}}class ed{constructor(e){this._index=e}get(e){const n=this._index.get(e);return ki(n,"Error reading from IndexedDB")}}function by(t,e,n){return new Promise((r,i)=>{try{const s=indexedDB.open(t,e);s.onsuccess=o=>{r(new Zu(o.target.result))},s.onerror=o=>{var a;i(`Error opening indexedDB: ${(a=o.target.error)===null||a===void 0?void 0:a.message}`)},s.onupgradeneeded=o=>{n(new Zu(s.result),o.oldVersion,o.newVersion,new Kf(s.transaction))}}catch(s){i(`Error opening indexedDB: ${s.message}`)}})}class lr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new cs;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Cy(e))try{this.getOrInitializeService({instanceIdentifier:Wn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Wn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Wn){return this.instances.has(e)}getOptions(e=Wn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:wy(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Wn){return this.component?this.component.multipleInstances?e:Wn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function wy(t){return t===Wn?void 0:t}function Cy(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new yy(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(xe||(xe={}));const Ty={debug:xe.DEBUG,verbose:xe.VERBOSE,info:xe.INFO,warn:xe.WARN,error:xe.ERROR,silent:xe.SILENT},Iy=xe.INFO,Sy={[xe.DEBUG]:"log",[xe.VERBOSE]:"log",[xe.INFO]:"info",[xe.WARN]:"warn",[xe.ERROR]:"error"},xy=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Sy[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class lc{constructor(e){this.name=e,this._logLevel=Iy,this._logHandler=xy,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in xe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ty[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,xe.DEBUG,...e),this._logHandler(this,xe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,xe.VERBOSE,...e),this._logHandler(this,xe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,xe.INFO,...e),this._logHandler(this,xe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,xe.WARN,...e),this._logHandler(this,xe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,xe.ERROR,...e),this._logHandler(this,xe.ERROR,...e)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ry{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Py(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Py(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ol="@firebase/app",td="0.7.22";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cc=new lc("@firebase/app"),Ay="@firebase/app-compat",ky="@firebase/analytics-compat",Ny="@firebase/analytics",Oy="@firebase/app-check-compat",My="@firebase/app-check",Dy="@firebase/auth",Ly="@firebase/auth-compat",Fy="@firebase/database",$y="@firebase/database-compat",By="@firebase/functions",Uy="@firebase/functions-compat",Hy="@firebase/installations",zy="@firebase/installations-compat",Wy="@firebase/messaging",jy="@firebase/messaging-compat",Vy="@firebase/performance",qy="@firebase/performance-compat",Ky="@firebase/remote-config",Gy="@firebase/remote-config-compat",Yy="@firebase/storage",Xy="@firebase/storage-compat",Jy="@firebase/firestore",Qy="@firebase/firestore-compat",Zy="firebase",e0="9.7.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yf="[DEFAULT]",t0={[ol]:"fire-core",[Ay]:"fire-core-compat",[Ny]:"fire-analytics",[ky]:"fire-analytics-compat",[My]:"fire-app-check",[Oy]:"fire-app-check-compat",[Dy]:"fire-auth",[Ly]:"fire-auth-compat",[Fy]:"fire-rtdb",[$y]:"fire-rtdb-compat",[By]:"fire-fn",[Uy]:"fire-fn-compat",[Hy]:"fire-iid",[zy]:"fire-iid-compat",[Wy]:"fire-fcm",[jy]:"fire-fcm-compat",[Vy]:"fire-perf",[qy]:"fire-perf-compat",[Ky]:"fire-rc",[Gy]:"fire-rc-compat",[Yy]:"fire-gcs",[Xy]:"fire-gcs-compat",[Jy]:"fire-fst",[Qy]:"fire-fst-compat","fire-js":"fire-js",[Zy]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const co=new Map,al=new Map;function n0(t,e){try{t.container.addComponent(e)}catch(n){cc.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Vr(t){const e=t.name;if(al.has(e))return cc.debug(`There were multiple attempts to register component ${e}.`),!1;al.set(e,t);for(const n of co.values())n0(n,t);return!0}function uc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r0={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},cr=new us("app","Firebase",r0);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i0{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new lr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw cr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds=e0;function s0(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Yf,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw cr.create("bad-app-name",{appName:String(r)});const i=co.get(r);if(i){if(lo(t,i.options)&&lo(n,i.config))return i;throw cr.create("duplicate-app",{appName:r})}const s=new Ey(r);for(const a of al.values())s.addComponent(a);const o=new i0(t,n,s);return co.set(r,o),o}function Xf(t=Yf){const e=co.get(t);if(!e)throw cr.create("no-app",{appName:t});return e}function In(t,e,n){var r;let i=(r=t0[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),cc.warn(a.join(" "));return}Vr(new lr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o0="firebase-heartbeat-database",a0=1,Qi="firebase-heartbeat-store";let Ea=null;function Jf(){return Ea||(Ea=by(o0,a0,(t,e)=>{switch(e){case 0:t.createObjectStore(Qi)}}).catch(t=>{throw cr.create("storage-open",{originalErrorMessage:t.message})})),Ea}async function l0(t){try{return(await Jf()).transaction(Qi).objectStore(Qi).get(Qf(t))}catch(e){throw cr.create("storage-get",{originalErrorMessage:e.message})}}async function nd(t,e){try{const r=(await Jf()).transaction(Qi,"readwrite");return await r.objectStore(Qi).put(e,Qf(t)),r.complete}catch(n){throw cr.create("storage-set",{originalErrorMessage:n.message})}}function Qf(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c0=1024,u0=30*24*60*60*1e3;class d0{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new f0(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=rd();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=u0}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=rd(),{heartbeatsToSend:n,unsentEntries:r}=h0(this._heartbeatsCache.heartbeats),i=zf(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function rd(){return new Date().toISOString().substring(0,10)}function h0(t,e=c0){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),id(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),id(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class f0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ay()?ly().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await l0(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return nd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return nd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function id(t){return zf(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p0(t){Vr(new lr("platform-logger",e=>new Ry(e),"PRIVATE")),Vr(new lr("heartbeat",e=>new d0(e),"PRIVATE")),In(ol,td,t),In(ol,td,"esm2017"),In("fire-js","")}p0("");var g0="firebase",m0="9.7.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */In(g0,m0,"app");function dc(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Zf(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const _0=Zf,ep=new us("auth","Firebase",Zf());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sd=new lc("@firebase/auth");function Ks(t,...e){sd.logLevel<=xe.ERROR&&sd.error(`Auth (${ds}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(t,...e){throw hc(t,...e)}function qt(t,...e){return hc(t,...e)}function v0(t,e,n){const r=Object.assign(Object.assign({},_0()),{[e]:n});return new us("auth","Firebase",r).create(e,{appName:t.name})}function hc(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return ep.create(t,...e)}function ee(t,e,...n){if(!t)throw hc(e,...n)}function Qt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ks(e),new Error(e)}function sn(t,e){t||Qt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const od=new Map;function Zt(t){sn(t instanceof Function,"Expected a class definition");let e=od.get(t);return e?(sn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,od.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b0(t,e){const n=uc(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(lo(s,e!=null?e:{}))return i;rn(i,"already-initialized")}return n.initialize({options:e})}function y0(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Zt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ll(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function w0(){return ad()==="http:"||ad()==="https:"}function ad(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C0(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(w0()||sy()||"connection"in navigator)?navigator.onLine:!0}function E0(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e,n){this.shortDelay=e,this.longDelay=n,sn(n>e,"Short delay should be less than long delay!"),this.isMobile=ac()||jf()}get(){return C0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fc(t,e){sn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Qt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Qt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Qt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I0=new hs(3e4,6e4);function np(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Yo(t,e,n,r,i={}){return rp(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=oi(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),tp.fetch()(sp(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function rp(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},T0),e);try{const i=new S0(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ta(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ta(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ta(t,"email-already-in-use",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw v0(t,u,c);rn(t,u)}}catch(i){if(i instanceof si)throw i;rn(t,"network-request-failed")}}async function ip(t,e,n,r,i={}){const s=await Yo(t,e,n,r,i);return"mfaPendingCredential"in s&&rn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function sp(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?fc(t.config,i):`${t.config.apiScheme}://${i}`}class S0{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(qt(this.auth,"network-request-failed")),I0.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ta(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=qt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function x0(t,e){return Yo(t,"POST","/v1/accounts:delete",e)}async function R0(t,e){return Yo(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Di(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function P0(t,e=!1){const n=Ht(t),r=await n.getIdToken(e),i=pc(r);ee(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Di(Ia(i.auth_time)),issuedAtTime:Di(Ia(i.iat)),expirationTime:Di(Ia(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ia(t){return Number(t)*1e3}function pc(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ks("JWT malformed, contained fewer than 3 sections"),null;try{const i=il(n);return i?JSON.parse(i):(Ks("Failed to decode base64 JWT payload"),null)}catch(i){return Ks("Caught error parsing JWT payload as JSON",i),null}}function A0(t){const e=pc(t);return ee(e,"internal-error"),ee(typeof e.exp!="undefined","internal-error"),ee(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof si&&k0(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function k0({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Di(this.lastLoginAt),this.creationTime=Di(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uo(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Zi(t,R0(n,{idToken:r}));ee(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?D0(s.providerUserInfo):[],a=M0(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new op(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function O0(t){const e=Ht(t);await uo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function M0(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function D0(t){return t.map(e=>{var{providerId:n}=e,r=dc(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L0(t,e){const n=await rp(t,{},async()=>{const r=oi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=sp(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",tp.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ee(e.idToken,"internal-error"),ee(typeof e.idToken!="undefined","internal-error"),ee(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):A0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ee(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await L0(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new es;return r&&(ee(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(ee(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(ee(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new es,this.toJSON())}_performRefresh(){return Qt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pn(t,e){ee(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class rr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=dc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new N0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new op(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Zi(this,this.stsTokenManager.getToken(this.auth,e));return ee(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return P0(this,e)}reload(){return O0(this)}_assign(e){this!==e&&(ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new rr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await uo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Zi(this,x0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,c,u;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,_=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,C=(a=n.tenantId)!==null&&a!==void 0?a:void 0,b=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,S=(c=n.createdAt)!==null&&c!==void 0?c:void 0,F=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:z,emailVerified:U,isAnonymous:X,providerData:me,stsTokenManager:E}=n;ee(z&&E,e,"internal-error");const x=es.fromJSON(this.name,E);ee(typeof z=="string",e,"internal-error"),pn(d,e.name),pn(h,e.name),ee(typeof U=="boolean",e,"internal-error"),ee(typeof X=="boolean",e,"internal-error"),pn(_,e.name),pn(g,e.name),pn(C,e.name),pn(b,e.name),pn(S,e.name),pn(F,e.name);const D=new rr({uid:z,auth:e,email:h,emailVerified:U,displayName:d,isAnonymous:X,photoURL:g,phoneNumber:_,tenantId:C,stsTokenManager:x,createdAt:S,lastLoginAt:F});return me&&Array.isArray(me)&&(D.providerData=me.map(q=>Object.assign({},q))),b&&(D._redirectEventId=b),D}static async _fromIdTokenResponse(e,n,r=!1){const i=new es;i.updateFromServerResponse(n);const s=new rr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await uo(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ap.type="NONE";const ld=ap;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gs(t,e,n){return`firebase:${t}:${e}:${n}`}class Mr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Gs(this.userKey,i.apiKey,s),this.fullPersistenceKey=Gs("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?rr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Mr(Zt(ld),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Zt(ld);const o=Gs(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const d=rr._fromJSON(e,u);c!==s&&(a=d),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Mr(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Mr(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(up(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(lp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(hp(e))return"Blackberry";if(fp(e))return"Webos";if(gc(e))return"Safari";if((e.includes("chrome/")||cp(e))&&!e.includes("edge/"))return"Chrome";if(dp(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function lp(t=ct()){return/firefox\//i.test(t)}function gc(t=ct()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function cp(t=ct()){return/crios\//i.test(t)}function up(t=ct()){return/iemobile/i.test(t)}function dp(t=ct()){return/android/i.test(t)}function hp(t=ct()){return/blackberry/i.test(t)}function fp(t=ct()){return/webos/i.test(t)}function Xo(t=ct()){return/iphone|ipad|ipod/i.test(t)}function F0(t=ct()){var e;return Xo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function $0(){return oy()&&document.documentMode===10}function pp(t=ct()){return Xo(t)||dp(t)||fp(t)||hp(t)||/windows phone/i.test(t)||up(t)}function B0(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gp(t,e=[]){let n;switch(t){case"Browser":n=cd(ct());break;case"Worker":n=`${cd(ct())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ds}/${r}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U0{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ud(this),this.idTokenSubscription=new ud(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ep,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Zt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Mr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let r=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,s=r==null?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);(!i||i===s)&&(o==null?void 0:o.user)&&(r=o.user)}return r?r._redirectEventId?(ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)):this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await uo(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=E0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ht(e):null;return n&&ee(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Zt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new us("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Zt(e)||this._popupRedirectResolver;ee(n,this,"argument-error"),this.redirectPersistenceManager=await Mr.create(this,[Zt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return ee(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=gp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function mc(t){return Ht(t)}class ud{constructor(e){this.auth=e,this.observer=null,this.addObserver=gy(n=>this.observer=n)}get next(){return ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Qt("not implemented")}_getIdTokenResponse(e){return Qt("not implemented")}_linkToIdToken(e,n){return Qt("not implemented")}_getReauthenticationResolver(e){return Qt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dr(t,e){return ip(t,"POST","/v1/accounts:signInWithIdp",np(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H0="http://localhost";class ur extends mp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ur(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):rn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=dc(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ur(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Dr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Dr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Dr(e,n)}buildRequest(){const e={requestUri:H0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=oi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs extends _p{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n extends fs{constructor(){super("facebook.com")}static credential(e){return ur._fromParams({providerId:_n.PROVIDER_ID,signInMethod:_n.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _n.credentialFromTaggedObject(e)}static credentialFromError(e){return _n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _n.credential(e.oauthAccessToken)}catch{return null}}}_n.FACEBOOK_SIGN_IN_METHOD="facebook.com";_n.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn extends fs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ur._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return vn.credentialFromTaggedObject(e)}static credentialFromError(e){return vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return vn.credential(n,r)}catch{return null}}}vn.GOOGLE_SIGN_IN_METHOD="google.com";vn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn extends fs{constructor(){super("github.com")}static credential(e){return ur._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bn.credential(e.oauthAccessToken)}catch{return null}}}bn.GITHUB_SIGN_IN_METHOD="github.com";bn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn extends fs{constructor(){super("twitter.com")}static credential(e,n){return ur._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return yn.credentialFromTaggedObject(e)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return yn.credential(n,r)}catch{return null}}}yn.TWITTER_SIGN_IN_METHOD="twitter.com";yn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z0(t,e){return ip(t,"POST","/v1/accounts:signUp",np(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await rr._fromIdTokenResponse(e,r,i),o=dd(r);return new Pn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=dd(r);return new Pn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function dd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W0(t){var e;const n=mc(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Pn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await z0(n,{returnSecureToken:!0}),i=await Pn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho extends si{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ho.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ho(e,n,r,i)}}function vp(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ho._fromErrorAndOperation(t,s,e,r):s})}async function j0(t,e,n=!1){const r=await Zi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Pn._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V0(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Zi(t,vp(r,i,e,t),n);ee(s.idToken,r,"internal-error");const o=pc(s.idToken);ee(o,r,"internal-error");const{sub:a}=o;return ee(t.uid===a,r,"user-mismatch"),Pn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&rn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q0(t,e,n=!1){const r="signIn",i=await vp(t,r,e),s=await Pn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function K0(t,e,n,r){return Ht(t).onAuthStateChanged(e,n,r)}const fo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(fo,"1"),this.storage.removeItem(fo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G0(){const t=ct();return gc(t)||Xo(t)}const Y0=1e3,X0=10;class yp extends bp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=G0()&&B0(),this.fallbackToPolling=pp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);$0()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,X0):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Y0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}yp.type="LOCAL";const J0=yp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wp extends bp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}wp.type="SESSION";const Cp=wp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q0(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Jo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await Q0(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Jo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _c(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=_c("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(u),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(){return window}function ew(t){Kt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ep(){return typeof Kt().WorkerGlobalScope!="undefined"&&typeof Kt().importScripts=="function"}async function tw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function nw(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function rw(){return Ep()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tp="firebaseLocalStorageDb",iw=1,po="firebaseLocalStorage",Ip="fbase_key";class ps{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Qo(t,e){return t.transaction([po],e?"readwrite":"readonly").objectStore(po)}function sw(){const t=indexedDB.deleteDatabase(Tp);return new ps(t).toPromise()}function cl(){const t=indexedDB.open(Tp,iw);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(po,{keyPath:Ip})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(po)?e(r):(r.close(),await sw(),e(await cl()))})})}async function hd(t,e,n){const r=Qo(t,!0).put({[Ip]:e,value:n});return new ps(r).toPromise()}async function ow(t,e){const n=Qo(t,!1).get(e),r=await new ps(n).toPromise();return r===void 0?null:r.value}function fd(t,e){const n=Qo(t,!0).delete(e);return new ps(n).toPromise()}const aw=800,lw=3;class Sp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await cl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>lw)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ep()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Jo._getInstance(rw()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await tw(),!this.activeServiceWorker)return;this.sender=new Z0(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||nw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await cl();return await hd(e,fo,"1"),await fd(e,fo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>hd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>ow(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>fd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Qo(i,!1).getAll();return new ps(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),aw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Sp.type="LOCAL";const cw=Sp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uw(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function dw(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=qt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",uw().appendChild(r)})}function hw(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new hs(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fw(t,e){return e?Zt(e):(ee(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc extends mp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Dr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Dr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Dr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function pw(t){return q0(t.auth,new vc(t),t.bypassAuthState)}function gw(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),V0(n,new vc(t),t.bypassAuthState)}async function mw(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),j0(n,new vc(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return pw;case"linkViaPopup":case"linkViaRedirect":return mw;case"reauthViaPopup":case"reauthViaRedirect":return gw;default:rn(this.auth,"internal-error")}}resolve(e){sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _w=new hs(2e3,1e4);class Pr extends xp{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Pr.currentPopupAction&&Pr.currentPopupAction.cancel(),Pr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ee(e,this.auth,"internal-error"),e}async onExecution(){sn(this.filter.length===1,"Popup operations only handle one event");const e=_c();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(qt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(qt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Pr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(qt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,_w.get())};e()}}Pr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vw="pendingRedirect",Sa=new Map;class bw extends xp{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Sa.get(this.auth._key());if(!e){try{const r=await yw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Sa.set(this.auth._key(),e)}return this.bypassAuthState||Sa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function yw(t,e){const n=Cw(e),r=ww(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function ww(t){return Zt(t._redirectPersistence)}function Cw(t){return Gs(vw,t.config.apiKey,t.name)}async function Ew(t,e,n=!1){const r=mc(t),i=fw(r,e),o=await new bw(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tw=10*60*1e3;class Iw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Sw(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Rp(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(qt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Tw&&this.cachedEventUids.clear(),this.cachedEventUids.has(pd(e))}saveEventToCache(e){this.cachedEventUids.add(pd(e)),this.lastProcessedEventTime=Date.now()}}function pd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Rp({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Sw(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Rp(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xw(t,e={}){return Yo(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Pw=/^https?/;async function Aw(t){if(t.config.emulator)return;const{authorizedDomains:e}=await xw(t);for(const n of e)try{if(kw(n))return}catch{}rn(t,"unauthorized-domain")}function kw(t){const e=ll(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Pw.test(n))return!1;if(Rw.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nw=new hs(3e4,6e4);function gd(){const t=Kt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Ow(t){return new Promise((e,n)=>{var r,i,s;function o(){gd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{gd(),n(qt(t,"network-request-failed"))},timeout:Nw.get()})}if(!((i=(r=Kt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Kt().gapi)===null||s===void 0)&&s.load)o();else{const a=hw("iframefcb");return Kt()[a]=()=>{gapi.load?o():n(qt(t,"network-request-failed"))},dw(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ys=null,e})}let Ys=null;function Mw(t){return Ys=Ys||Ow(t),Ys}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dw=new hs(5e3,15e3),Lw="__/auth/iframe",Fw="emulator/auth/iframe",$w={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Bw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Uw(t){const e=t.config;ee(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?fc(e,Fw):`https://${t.config.authDomain}/${Lw}`,r={apiKey:e.apiKey,appName:t.name,v:ds},i=Bw.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${oi(r).slice(1)}`}async function Hw(t){const e=await Mw(t),n=Kt().gapi;return ee(n,t,"internal-error"),e.open({where:document.body,url:Uw(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:$w,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=qt(t,"network-request-failed"),a=Kt().setTimeout(()=>{s(o)},Dw.get());function l(){Kt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ww=500,jw=600,Vw="_blank",qw="http://localhost";class md{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Kw(t,e,n,r=Ww,i=jw){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},zw),{width:r.toString(),height:i.toString(),top:s,left:o}),c=ct().toLowerCase();n&&(a=cp(c)?Vw:n),lp(c)&&(e=e||qw,l.scrollbars="yes");const u=Object.entries(l).reduce((h,[_,g])=>`${h}${_}=${g},`,"");if(F0(c)&&a!=="_self")return Gw(e||"",a),new md(null);const d=window.open(e||"",a,u);ee(d,t,"popup-blocked");try{d.focus()}catch{}return new md(d)}function Gw(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yw="__/auth/handler",Xw="emulator/auth/handler";function _d(t,e,n,r,i,s){ee(t.config.authDomain,t,"auth-domain-config-required"),ee(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ds,eventId:i};if(e instanceof _p){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",sl(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(s||{}))o[l]=c}if(e instanceof fs){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${Jw(t)}?${oi(a).slice(1)}`}function Jw({config:t}){return t.emulator?fc(t,Xw):`https://${t.authDomain}/${Yw}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xa="webStorageSupport";class Qw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Cp,this._completeRedirectFn=Ew}async _openPopup(e,n,r,i){var s;sn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=_d(e,n,r,ll(),i);return Kw(e,o,_c())}async _openRedirect(e,n,r,i){return await this._originValidation(e),ew(_d(e,n,r,ll(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(sn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Hw(e),r=new Iw(e);return n.register("authEvent",i=>(ee(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(xa,{type:xa},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[xa];o!==void 0&&n(!!o),rn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Aw(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return pp()||gc()||Xo()}}const Zw=Qw;var vd="@firebase/auth",bd="0.19.12";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function nC(t){Vr(new lr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{ee(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),ee(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:gp(t)},u=new U0(a,l,c);return y0(u,n),u})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Vr(new lr("auth-internal",e=>{const n=mc(e.getProvider("auth").getImmediate());return(r=>new eC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),In(vd,bd,tC(t)),In(vd,bd,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rC(t=Xf()){const e=uc(t,"auth");return e.isInitialized()?e.getImmediate():b0(t,{popupRedirectResolver:Zw,persistence:[cw,J0,Cp]})}nC("Browser");const yd="@firebase/database",wd="0.12.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pp="";function iC(t){Pp=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ke(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ji(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oC{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Gt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ap=function(t){try{if(typeof window!="undefined"&&typeof window[t]!="undefined"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new sC(e)}}catch{}return new oC},Yn=Ap("localStorage"),ul=Ap("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lr=new lc("@firebase/database"),aC=function(){let t=1;return function(){return t++}}(),kp=function(t){const e=vy(t),n=new py;n.update(e);const r=n.digest();return oc.encodeByteArray(r)},gs=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=gs.apply(null,r):typeof r=="object"?e+=Ke(r):e+=r,e+=" "}return e};let ir=null,Cd=!0;const lC=function(t,e){A(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Lr.logLevel=xe.VERBOSE,ir=Lr.log.bind(Lr),e&&ul.set("logging_enabled",!0)):typeof t=="function"?ir=t:(ir=null,ul.remove("logging_enabled"))},rt=function(...t){if(Cd===!0&&(Cd=!1,ir===null&&ul.get("logging_enabled")===!0&&lC(!0)),ir){const e=gs.apply(null,t);ir(e)}},ms=function(t){return function(...e){rt(t,...e)}},dl=function(...t){const e="FIREBASE INTERNAL ERROR: "+gs(...t);Lr.error(e)},dr=function(...t){const e=`FIREBASE FATAL ERROR: ${gs(...t)}`;throw Lr.error(e),new Error(e)},mt=function(...t){const e="FIREBASE WARNING: "+gs(...t);Lr.warn(e)},cC=function(){typeof window!="undefined"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&mt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},bc=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},uC=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},qr="[MIN_NAME]",hr="[MAX_NAME]",vr=function(t,e){if(t===e)return 0;if(t===qr||e===hr)return-1;if(e===qr||t===hr)return 1;{const n=Ed(t),r=Ed(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},dC=function(t,e){return t===e?0:t<e?-1:1},wi=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ke(e))},yc=function(t){if(typeof t!="object"||t===null)return Ke(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Ke(e[r]),n+=":",n+=yc(t[e[r]]);return n+="}",n},Np=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function ot(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Op=function(t){A(!bc(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let h=parseInt(u.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},hC=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},fC=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function pC(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const gC=new RegExp("^-?(0*)\\d{1,10}$"),mC=-2147483648,_C=2147483647,Ed=function(t){if(gC.test(t)){const e=Number(t);if(e>=mC&&e<=_C)return e}return null},ai=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw mt("Exception was thrown by user callback.",n),e},Math.floor(0))}},vC=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Li=function(t,e){const n=setTimeout(t,e);return typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bC{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){mt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yC{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(rt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',mt(e)}}class hl{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}hl.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wc="5",Mp="v",Dp="s",Lp="r",Fp="f",$p=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Bp="ls",wC="p",fl="ac",Up="websocket",Hp="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CC{constructor(e,n,r,i,s=!1,o="",a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Yn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Yn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function EC(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function zp(t,e,n){A(typeof e=="string","typeof type must == string"),A(typeof n=="object","typeof params must == object");let r;if(e===Up)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Hp)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);EC(t)&&(n.ns=t.namespace);const i=[];return ot(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC{constructor(){this.counters_={}}incrementCounter(e,n=1){Gt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return ry(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ra={},Pa={};function Cc(t){const e=t.toString();return Ra[e]||(Ra[e]=new TC),Ra[e]}function IC(t,e){const n=t.toString();return Pa[n]||(Pa[n]=e()),Pa[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SC{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&ai(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Td="start",xC="close",RC="pLPCommand",PC="pRTLPCB",Wp="id",jp="pw",Vp="ser",AC="cb",kC="seg",NC="ts",OC="d",MC="dframe",qp=1870,Kp=30,DC=qp-Kp,LC=25e3,FC=3e4;class Ar{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ms(e),this.stats_=Cc(n),this.urlFn=l=>(this.appCheckToken&&(l[fl]=this.appCheckToken),zp(n,Hp,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new SC(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(FC)),uC(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ec((...s)=>{const[o,a,l,c,u]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Td)this.id=a,this.password=l;else if(o===xC)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Td]="t",r[Vp]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[AC]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Mp]=wc,this.transportSessionId&&(r[Dp]=this.transportSessionId),this.lastSessionId&&(r[Bp]=this.lastSessionId),this.applicationId&&(r[wC]=this.applicationId),this.appCheckToken&&(r[fl]=this.appCheckToken),typeof location!="undefined"&&location.hostname&&$p.test(location.hostname)&&(r[Lp]=Fp);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ar.forceAllow_=!0}static forceDisallow(){Ar.forceDisallow_=!0}static isAvailable(){return Ar.forceAllow_?!0:!Ar.forceDisallow_&&typeof document!="undefined"&&document.createElement!=null&&!hC()&&!fC()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ke(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Hf(n),i=Np(r,DC);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[MC]="t",r[Wp]=e,r[jp]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ke(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Ec{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=aC(),window[RC+this.uniqueCallbackIdentifier]=e,window[PC+this.uniqueCallbackIdentifier]=n,this.myIFrame=Ec.createIFrame_();let s="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const a=document.domain;s='<script>document.domain="'+a+'";<\/script>'}const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){rt("frame writing exception"),a.stack&&rt(a.stack),rt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||rt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Wp]=this.myID,e[jp]=this.myPW,e[Vp]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Kp+r.length<=qp;){const o=this.pendingSegs.shift();r=r+"&"+kC+i+"="+o.seg+"&"+NC+i+"="+o.ts+"&"+OC+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(LC)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{rt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $C=16384,BC=45e3;let go=null;typeof MozWebSocket!="undefined"?go=MozWebSocket:typeof WebSocket!="undefined"&&(go=WebSocket);class Dt{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ms(this.connId),this.stats_=Cc(n),this.connURL=Dt.connectionURL_(n,o,a,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i){const s={};return s[Mp]=wc,typeof location!="undefined"&&location.hostname&&$p.test(location.hostname)&&(s[Lp]=Fp),n&&(s[Dp]=n),r&&(s[Bp]=r),i&&(s[fl]=i),zp(e,Up,s)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Yn.set("previous_websocket_failure",!0);try{if(!Vf()){const r={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new go(this.connURL,[],r)}}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Dt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator!="undefined"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&go!==null&&!Dt.forceDisallow_}static previouslyFailed(){return Yn.isInMemoryStorage||Yn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Yn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Ji(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(A(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Ke(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Np(n,$C);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(BC))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Dt.responsesRequiredToBeHealthy=2;Dt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ar,Dt]}initTransports_(e){const n=Dt&&Dt.isAvailable();let r=n&&!Dt.previouslyFailed();if(e.webSocketOnly&&(n||mt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Dt];else{const i=this.transports_=[];for(const s of Tc.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s)}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UC=6e4,HC=5e3,zC=10*1024,WC=100*1024,Aa="t",Id="d",jC="s",Sd="r",VC="e",xd="o",Rd="a",Pd="n",Ad="p",qC="h";class KC{constructor(e,n,r,i,s,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ms("c:"+this.id+":"),this.transportManager_=new Tc(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Li(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>WC?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>zC?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Aa in e){const n=e[Aa];n===Rd?this.upgradeIfSecondaryHealthy_():n===Sd?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===xd&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=wi("t",e),r=wi("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Ad,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Rd,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Pd,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=wi("t",e),r=wi("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=wi(Aa,e);if(Id in e){const r=e[Id];if(n===qC)this.onHandshake_(r);else if(n===Pd){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===jC?this.onConnectionShutdown_(r):n===Sd?this.onReset_(r):n===VC?dl("Server Error: "+r):n===xd?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):dl("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),wc!==r&&mt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Li(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(UC))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Li(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(HC))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Ad,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Yn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gp{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yp{constructor(e){this.allowedEvents_=e,this.listeners_={},A(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){A(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo extends Yp{constructor(){super(["online"]),this.online_=!0,typeof window!="undefined"&&typeof window.addEventListener!="undefined"&&!ac()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new mo}getInitialEvent(e){return A(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kd=32,Nd=768;class Ie{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ve(){return new Ie("")}function se(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function An(t){return t.pieces_.length-t.pieceNum_}function Ae(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Ie(t.pieces_,e)}function Ic(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function GC(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function ts(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Xp(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Ie(e,0)}function $e(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Ie)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new Ie(n,0)}function le(t){return t.pieceNum_>=t.pieces_.length}function gt(t,e){const n=se(t),r=se(e);if(n===null)return e;if(n===r)return gt(Ae(t),Ae(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function YC(t,e){const n=ts(t,0),r=ts(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=vr(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function Sc(t,e){if(An(t)!==An(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Pt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(An(t)>An(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class XC{constructor(e,n){this.errorPrefix_=n,this.parts_=ts(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Go(this.parts_[r]);Jp(this)}}function JC(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Go(e),Jp(t)}function QC(t){const e=t.parts_.pop();t.byteLength_-=Go(e),t.parts_.length>0&&(t.byteLength_-=1)}function Jp(t){if(t.byteLength_>Nd)throw new Error(t.errorPrefix_+"has a key path longer than "+Nd+" bytes ("+t.byteLength_+").");if(t.parts_.length>kd)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+kd+") or object contains a cycle "+jn(t))}function jn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc extends Yp{constructor(){super(["visible"]);let e,n;typeof document!="undefined"&&typeof document.addEventListener!="undefined"&&(typeof document.hidden!="undefined"?(n="visibilitychange",e="hidden"):typeof document.mozHidden!="undefined"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden!="undefined"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden!="undefined"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new xc}getInitialEvent(e){return A(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci=1e3,ZC=60*5*1e3,eE=3*1e3,Od=30*1e3,tE=1.3,nE=3e4,rE="server_kill",Md=3;class tn extends Gp{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=tn.nextPersistentConnectionId_++,this.log_=ms("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ci,this.maxReconnectDelay_=ZC,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Vf())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");xc.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&mo.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Ke(s)),A(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new cs,r={p:e._path.toString(),q:e._queryObject},i={action:"g",request:r,onComplete:o=>{const a=o.d;o.s==="ok"?(this.onDataUpdate_(r.p,a,!1,null),n.resolve(a)):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_||setTimeout(()=>{const o=this.outstandingGets_[s];o===void 0||i!==o||(delete this.outstandingGets_[s],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),this.log_("get "+s+" timed out on connection"),n.reject(new Error("Client is offline.")))},eE),this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),A(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),A(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;tn.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Gt(e,"w")){const r=jr(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();mt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||fy(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Od)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=hy(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),A(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ke(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):dl("Unrecognized action received from server: "+Ke(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){A(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ci,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ci,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>nE&&(this.reconnectDelay_=Ci),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*tE)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+tn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(d){A(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?rt("getToken() completed but was canceled"):(rt("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,a=new KC(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,_=>{mt(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(rE)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&mt(d),l())}}}interrupt(e){rt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){rt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],sl(this.interruptReasons_)&&(this.reconnectDelay_=Ci,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>yc(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new Ie(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){rt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Md&&(this.reconnectDelay_=Od,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){rt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Md&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Pp.replace(/\./g,"-")]=1,ac()?e["framework.cordova"]=1:jf()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=mo.getInstance().currentlyOnline();return sl(this.interruptReasons_)&&e}}tn.nextPersistentConnectionId_=0;tn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new oe(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new oe(qr,e),i=new oe(qr,n);return this.compare(r,i)!==0}minPost(){return oe.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ks;class Qp extends Zo{static get __EMPTY_NODE(){return ks}static set __EMPTY_NODE(e){ks=e}compare(e,n){return vr(e.name,n.name)}isDefinedOn(e){throw ii("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return oe.MIN}maxPost(){return new oe(hr,ks)}makePost(e,n){return A(typeof e=="string","KeyIndex indexValue must always be a string."),new oe(e,ks)}toString(){return".key"}}const Fr=new Qp;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Qe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:Qe.RED,this.left=i!=null?i:yt.EMPTY_NODE,this.right=s!=null?s:yt.EMPTY_NODE}copy(e,n,r,i,s){return new Qe(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return yt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return yt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Qe.RED=!0;Qe.BLACK=!1;class iE{copy(e,n,r,i,s){return this}insert(e,n,r){return new Qe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class yt{constructor(e,n=yt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new yt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Qe.BLACK,null,null))}remove(e){return new yt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Qe.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ns(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ns(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ns(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ns(this.root_,null,this.comparator_,!0,e)}}yt.EMPTY_NODE=new iE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sE(t,e){return vr(t.name,e.name)}function Rc(t,e){return vr(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pl;function oE(t){pl=t}const Zp=function(t){return typeof t=="number"?"number:"+Op(t):"string:"+t},eg=function(t){if(t.isLeafNode()){const e=t.val();A(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Gt(e,".sv"),"Priority must be a string or number.")}else A(t===pl||t.isEmpty(),"priority of unexpected type.");A(t===pl||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dd;class Je{constructor(e,n=Je.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,A(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),eg(this.priorityNode_)}static set __childrenNodeConstructor(e){Dd=e}static get __childrenNodeConstructor(){return Dd}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Je(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Je.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return le(e)?this:se(e)===".priority"?this.priorityNode_:Je.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Je.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=se(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(A(r!==".priority"||An(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Je.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ae(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Zp(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Op(this.value_):e+=this.value_,this.lazyHash_=kp(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Je.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Je.__childrenNodeConstructor?-1:(A(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Je.VALUE_TYPE_ORDER.indexOf(n),s=Je.VALUE_TYPE_ORDER.indexOf(r);return A(i>=0,"Unknown leaf type: "+n),A(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Je.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tg,ng;function aE(t){tg=t}function lE(t){ng=t}class cE extends Zo{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?vr(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return oe.MIN}maxPost(){return new oe(hr,new Je("[PRIORITY-POST]",ng))}makePost(e,n){const r=tg(e);return new oe(n,new Je("[PRIORITY-POST]",r))}toString(){return".priority"}}const Be=new cE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uE=Math.log(2);class dE{constructor(e){const n=s=>parseInt(Math.log(s)/uE,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const _o=function(t,e,n,r){t.sort(e);const i=function(l,c){const u=c-l;let d,h;if(u===0)return null;if(u===1)return d=t[l],h=n?n(d):d,new Qe(h,d.node,Qe.BLACK,null,null);{const _=parseInt(u/2,10)+l,g=i(l,_),C=i(_+1,c);return d=t[_],h=n?n(d):d,new Qe(h,d.node,Qe.BLACK,g,C)}},s=function(l){let c=null,u=null,d=t.length;const h=function(g,C){const b=d-g,S=d;d-=g;const F=i(b+1,S),z=t[b],U=n?n(z):z;_(new Qe(U,z.node,C,null,F))},_=function(g){c?(c.left=g,c=g):(u=g,c=g)};for(let g=0;g<l.count;++g){const C=l.nextBitIsOne(),b=Math.pow(2,l.count-(g+1));C?h(b,Qe.BLACK):(h(b,Qe.BLACK),h(b,Qe.RED))}return u},o=new dE(t.length),a=s(o);return new yt(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ka;const Ir={};class en{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return A(Ir&&Be,"ChildrenNode.ts has not been loaded"),ka=ka||new en({".priority":Ir},{".priority":Be}),ka}get(e){const n=jr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof yt?n:null}hasIndex(e){return Gt(this.indexSet_,e.toString())}addIndex(e,n){A(e!==Fr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(oe.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=_o(r,e.getCompare()):a=Ir;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new en(u,c)}addToIndexes(e,n){const r=ao(this.indexes_,(i,s)=>{const o=jr(this.indexSet_,s);if(A(o,"Missing index implementation for "+s),i===Ir)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(oe.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),_o(a,o.getCompare())}else return Ir;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new oe(e.name,a))),l.insert(e,e.node)}});return new en(r,this.indexSet_)}removeFromIndexes(e,n){const r=ao(this.indexes_,i=>{if(i===Ir)return i;{const s=n.get(e.name);return s?i.remove(new oe(e.name,s)):i}});return new en(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ei;class Y{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&eg(this.priorityNode_),this.children_.isEmpty()&&A(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ei||(Ei=new Y(new yt(Rc),null,en.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ei}updatePriority(e){return this.children_.isEmpty()?this:new Y(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ei:n}}getChild(e){const n=se(e);return n===null?this:this.getImmediateChild(n).getChild(Ae(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(A(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new oe(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Ei:this.priorityNode_;return new Y(i,o,s)}}updateChild(e,n){const r=se(e);if(r===null)return n;{A(se(e)!==".priority"||An(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Ae(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Be,(o,a)=>{n[o]=a.val(e),r++,s&&Y.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Zp(this.getPriority().val())+":"),this.forEachChild(Be,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":kp(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new oe(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new oe(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new oe(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,oe.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,oe.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===_s?-1:0}withIndex(e){if(e===Fr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new Y(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Fr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Be),i=n.getIterator(Be);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Fr?null:this.indexMap_.get(e.toString())}}Y.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class hE extends Y{constructor(){super(new yt(Rc),Y.EMPTY_NODE,en.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Y.EMPTY_NODE}isEmpty(){return!1}}const _s=new hE;Object.defineProperties(oe,{MIN:{value:new oe(qr,Y.EMPTY_NODE)},MAX:{value:new oe(hr,_s)}});Qp.__EMPTY_NODE=Y.EMPTY_NODE;Je.__childrenNodeConstructor=Y;oE(_s);lE(_s);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fE=!0;function qe(t,e=null){if(t===null)return Y.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),A(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Je(n,qe(e))}if(!(t instanceof Array)&&fE){const n=[];let r=!1;if(ot(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=qe(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new oe(o,l)))}}),n.length===0)return Y.EMPTY_NODE;const s=_o(n,sE,o=>o.name,Rc);if(r){const o=_o(n,Be.getCompare());return new Y(s,qe(e),new en({".priority":o},{".priority":Be}))}else return new Y(s,qe(e),en.Default)}else{let n=Y.EMPTY_NODE;return ot(t,(r,i)=>{if(Gt(t,r)&&r.substring(0,1)!=="."){const s=qe(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(qe(e))}}aE(qe);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE extends Zo{constructor(e){super(),this.indexPath_=e,A(!le(e)&&se(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?vr(e.name,n.name):s}makePost(e,n){const r=qe(e),i=Y.EMPTY_NODE.updateChild(this.indexPath_,r);return new oe(n,i)}maxPost(){const e=Y.EMPTY_NODE.updateChild(this.indexPath_,_s);return new oe(hr,e)}toString(){return ts(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE extends Zo{compare(e,n){const r=e.node.compareTo(n.node);return r===0?vr(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return oe.MIN}maxPost(){return oe.MAX}makePost(e,n){const r=qe(e);return new oe(n,r)}toString(){return".value"}}const mE=new gE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ld="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",_E=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=Ld.charAt(n%64),n=Math.floor(n/64);A(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Ld.charAt(e[i]);return A(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rg(t){return{type:"value",snapshotNode:t}}function Kr(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ns(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function rs(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function vE(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){A(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(ns(n,a)):A(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Kr(n,r)):o.trackChildChange(rs(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Be,(i,s)=>{n.hasChild(i)||r.trackChildChange(ns(i,s))}),n.isLeafNode()||n.forEachChild(Be,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(rs(i,s,o))}else r.trackChildChange(Kr(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?Y.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e){this.indexedFilter_=new Pc(e.getIndex()),this.index_=e.getIndex(),this.startPost_=is.getStartPost_(e),this.endPost_=is.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,r,i,s,o){return this.matches(new oe(n,r))||(r=Y.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=Y.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(Y.EMPTY_NODE);const s=this;return n.forEachChild(Be,(o,a)=>{s.matches(new oe(o,a))||(i=i.updateImmediateChild(o,Y.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bE{constructor(e){this.rangedFilter_=new is(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new oe(n,r))||(r=Y.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=Y.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=Y.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();let l;if(this.reverse_?l=this.index_.compare(this.rangedFilter_.getStartPost(),a)<=0:l=this.index_.compare(a,this.rangedFilter_.getEndPost())<=0,l)i=i.updateImmediateChild(a.name,a.node),o++;else break}}else{i=n.withIndex(this.index_),i=i.updatePriority(Y.EMPTY_NODE);let s,o,a,l;if(this.reverse_){l=i.getReverseIterator(this.index_),s=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const d=this.index_.getCompare();a=(h,_)=>d(_,h)}else l=i.getIterator(this.index_),s=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),a=this.index_.getCompare();let c=0,u=!1;for(;l.hasNext();){const d=l.getNext();!u&&a(s,d)<=0&&(u=!0),u&&c<this.limit_&&a(d,o)<=0?c++:i=i.updateImmediateChild(d.name,Y.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,_)=>d(_,h)}else o=this.index_.getCompare();const a=e;A(a.numChildren()===this.limit_,"");const l=new oe(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const _=h==null?1:o(h,l);if(u&&!r.isEmpty()&&_>=0)return s!=null&&s.trackChildChange(rs(n,r,d)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(ns(n,d));const C=a.updateImmediateChild(n,Y.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(Kr(h.name,h.node)),C.updateImmediateChild(h.name,h.node)):C}}else return r.isEmpty()?e:u&&o(c,l)>=0?(s!=null&&(s.trackChildChange(ns(c.name,c.node)),s.trackChildChange(Kr(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,Y.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Be}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return A(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return A(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:qr}hasEnd(){return this.endSet_}getIndexEndValue(){return A(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return A(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:hr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return A(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Be}copy(){const e=new Ac;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function yE(t){return t.loadsAllData()?new Pc(t.getIndex()):t.hasLimit()?new bE(t):new is(t)}function Fd(t){const e={};if(t.isDefault())return e;let n;return t.index_===Be?n="$priority":t.index_===mE?n="$value":t.index_===Fr?n="$key":(A(t.index_ instanceof pE,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ke(n),t.startSet_&&(e.startAt=Ke(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+Ke(t.indexStartName_))),t.endSet_&&(e.endAt=Ke(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+Ke(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function $d(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Be&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo extends Gp{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=ms("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(A(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=vo.getListenId_(e,r),a={};this.listens_[o]=a;const l=Fd(e._queryParams);this.restRequest_(s+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(s,d,!1,r),jr(this.listens_,o)===a){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",i(h,null)}})}unlisten(e,n){const r=vo.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Fd(e._queryParams),r=e._path.toString(),i=new cs;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+oi(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Ji(a.responseText)}catch{mt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&mt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wE{constructor(){this.rootNode_=Y.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bo(){return{value:null,children:new Map}}function ig(t,e,n){if(le(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=se(e);t.children.has(r)||t.children.set(r,bo());const i=t.children.get(r);e=Ae(e),ig(i,e,n)}}function gl(t,e,n){t.value!==null?n(e,t.value):CE(t,(r,i)=>{const s=new Ie(e.toString()+"/"+r);gl(i,s,n)})}function CE(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EE{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&ot(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bd=10*1e3,TE=30*1e3,IE=5*60*1e3;class SE{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new EE(e);const r=Bd+(TE-Bd)*Math.random();Li(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;ot(e,(i,s)=>{s>0&&Gt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Li(this.reportStats_.bind(this),Math.floor(Math.random()*2*IE))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Lt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Lt||(Lt={}));function kc(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Nc(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Oc(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Lt.ACK_USER_WRITE,this.source=kc()}operationForChild(e){if(le(this.path)){if(this.affectedTree.value!=null)return A(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Ie(e));return new yo(ve(),n,this.revert)}}else return A(se(this.path)===e,"operationForChild called for unrelated child."),new yo(Ae(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e,n){this.source=e,this.path=n,this.type=Lt.LISTEN_COMPLETE}operationForChild(e){return le(this.path)?new ss(this.source,ve()):new ss(this.source,Ae(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Lt.OVERWRITE}operationForChild(e){return le(this.path)?new fr(this.source,ve(),this.snap.getImmediateChild(e)):new fr(this.source,Ae(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Lt.MERGE}operationForChild(e){if(le(this.path)){const n=this.children.subtree(new Ie(e));return n.isEmpty()?null:n.value?new fr(this.source,ve(),n.value):new Gr(this.source,ve(),n)}else return A(se(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Gr(this.source,Ae(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(le(e))return this.isFullyInitialized()&&!this.filtered_;const n=se(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function RE(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(vE(o.childName,o.snapshotNode))}),Ti(t,i,"child_removed",e,r,n),Ti(t,i,"child_added",e,r,n),Ti(t,i,"child_moved",s,r,n),Ti(t,i,"child_changed",e,r,n),Ti(t,i,"value",e,r,n),i}function Ti(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>AE(t,a,l)),o.forEach(a=>{const l=PE(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function PE(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function AE(t,e,n){if(e.childName==null||n.childName==null)throw ii("Should only compare child_ events.");const r=new oe(e.childName,e.snapshotNode),i=new oe(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ea(t,e){return{eventCache:t,serverCache:e}}function Fi(t,e,n,r){return ea(new kn(e,n,r),t.serverCache)}function sg(t,e,n,r){return ea(t.eventCache,new kn(e,n,r))}function wo(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function pr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Na;const kE=()=>(Na||(Na=new yt(dC)),Na);class Pe{constructor(e,n=kE()){this.value=e,this.children=n}static fromObject(e){let n=new Pe(null);return ot(e,(r,i)=>{n=n.set(new Ie(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ve(),value:this.value};if(le(e))return null;{const r=se(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Ae(e),n);return s!=null?{path:$e(new Ie(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(le(e))return this;{const n=se(e),r=this.children.get(n);return r!==null?r.subtree(Ae(e)):new Pe(null)}}set(e,n){if(le(e))return new Pe(n,this.children);{const r=se(e),s=(this.children.get(r)||new Pe(null)).set(Ae(e),n),o=this.children.insert(r,s);return new Pe(this.value,o)}}remove(e){if(le(e))return this.children.isEmpty()?new Pe(null):new Pe(null,this.children);{const n=se(e),r=this.children.get(n);if(r){const i=r.remove(Ae(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Pe(null):new Pe(this.value,s)}else return this}}get(e){if(le(e))return this.value;{const n=se(e),r=this.children.get(n);return r?r.get(Ae(e)):null}}setTree(e,n){if(le(e))return n;{const r=se(e),s=(this.children.get(r)||new Pe(null)).setTree(Ae(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Pe(this.value,o)}}fold(e){return this.fold_(ve(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_($e(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,ve(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(le(e))return null;{const s=se(e),o=this.children.get(s);return o?o.findOnPath_(Ae(e),$e(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ve(),n)}foreachOnPath_(e,n,r){if(le(e))return this;{this.value&&r(n,this.value);const i=se(e),s=this.children.get(i);return s?s.foreachOnPath_(Ae(e),$e(n,i),r):new Pe(null)}}foreach(e){this.foreach_(ve(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_($e(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e){this.writeTree_=e}static empty(){return new $t(new Pe(null))}}function $i(t,e,n){if(le(e))return new $t(new Pe(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=gt(i,e);return s=s.updateChild(o,n),new $t(t.writeTree_.set(i,s))}else{const i=new Pe(n),s=t.writeTree_.setTree(e,i);return new $t(s)}}}function ml(t,e,n){let r=t;return ot(n,(i,s)=>{r=$i(r,$e(e,i),s)}),r}function Ud(t,e){if(le(e))return $t.empty();{const n=t.writeTree_.setTree(e,new Pe(null));return new $t(n)}}function _l(t,e){return br(t,e)!=null}function br(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(gt(n.path,e)):null}function Hd(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Be,(r,i)=>{e.push(new oe(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new oe(r,i.value))}),e}function Sn(t,e){if(le(e))return t;{const n=br(t,e);return n!=null?new $t(new Pe(n)):new $t(t.writeTree_.subtree(e))}}function vl(t){return t.writeTree_.isEmpty()}function Yr(t,e){return og(ve(),t.writeTree_,e)}function og(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(A(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=og($e(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild($e(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ta(t,e){return ug(e,t)}function NE(t,e,n,r,i){A(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=$i(t.visibleWrites,e,n)),t.lastWriteId=r}function OE(t,e,n,r){A(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=ml(t.visibleWrites,e,n),t.lastWriteId=r}function ME(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function DE(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);A(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&LE(a,r.path)?i=!1:Pt(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return FE(t),!0;if(r.snap)t.visibleWrites=Ud(t.visibleWrites,r.path);else{const a=r.children;ot(a,l=>{t.visibleWrites=Ud(t.visibleWrites,$e(r.path,l))})}return!0}else return!1}function LE(t,e){if(t.snap)return Pt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Pt($e(t.path,n),e))return!0;return!1}function FE(t){t.visibleWrites=ag(t.allWrites,$E,ve()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function $E(t){return t.visible}function ag(t,e,n){let r=$t.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)Pt(n,o)?(a=gt(n,o),r=$i(r,a,s.snap)):Pt(o,n)&&(a=gt(o,n),r=$i(r,ve(),s.snap.getChild(a)));else if(s.children){if(Pt(n,o))a=gt(n,o),r=ml(r,a,s.children);else if(Pt(o,n))if(a=gt(o,n),le(a))r=ml(r,ve(),s.children);else{const l=jr(s.children,se(a));if(l){const c=l.getChild(Ae(a));r=$i(r,ve(),c)}}}else throw ii("WriteRecord should have .snap or .children")}}return r}function lg(t,e,n,r,i){if(!r&&!i){const s=br(t.visibleWrites,e);if(s!=null)return s;{const o=Sn(t.visibleWrites,e);if(vl(o))return n;if(n==null&&!_l(o,ve()))return null;{const a=n||Y.EMPTY_NODE;return Yr(o,a)}}}else{const s=Sn(t.visibleWrites,e);if(!i&&vl(s))return n;if(!i&&n==null&&!_l(s,ve()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(Pt(c.path,e)||Pt(e,c.path))},a=ag(t.allWrites,o,e),l=n||Y.EMPTY_NODE;return Yr(a,l)}}}function BE(t,e,n){let r=Y.EMPTY_NODE;const i=br(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Be,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Sn(t.visibleWrites,e);return n.forEachChild(Be,(o,a)=>{const l=Yr(Sn(s,new Ie(o)),a);r=r.updateImmediateChild(o,l)}),Hd(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Sn(t.visibleWrites,e);return Hd(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function UE(t,e,n,r,i){A(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=$e(e,n);if(_l(t.visibleWrites,s))return null;{const o=Sn(t.visibleWrites,s);return vl(o)?i.getChild(n):Yr(o,i.getChild(n))}}function HE(t,e,n,r){const i=$e(e,n),s=br(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Sn(t.visibleWrites,i);return Yr(o,r.getNode().getImmediateChild(n))}else return null}function zE(t,e){return br(t.visibleWrites,e)}function WE(t,e,n,r,i,s,o){let a;const l=Sn(t.visibleWrites,e),c=br(l,ve());if(c!=null)a=c;else if(n!=null)a=Yr(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),h=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let _=h.getNext();for(;_&&u.length<i;)d(_,r)!==0&&u.push(_),_=h.getNext();return u}else return[]}function jE(){return{visibleWrites:$t.empty(),allWrites:[],lastWriteId:-1}}function Co(t,e,n,r){return lg(t.writeTree,t.treePath,e,n,r)}function Mc(t,e){return BE(t.writeTree,t.treePath,e)}function zd(t,e,n,r){return UE(t.writeTree,t.treePath,e,n,r)}function Eo(t,e){return zE(t.writeTree,$e(t.treePath,e))}function VE(t,e,n,r,i,s){return WE(t.writeTree,t.treePath,e,n,r,i,s)}function Dc(t,e,n){return HE(t.writeTree,t.treePath,e,n)}function cg(t,e){return ug($e(t.treePath,e),t.writeTree)}function ug(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qE{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;A(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),A(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,rs(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,ns(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Kr(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,rs(r,e.snapshotNode,i.oldSnap));else throw ii("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KE{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const dg=new KE;class Lc{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new kn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Dc(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:pr(this.viewCache_),s=VE(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GE(t){return{filter:t}}function YE(t,e){A(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),A(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function XE(t,e,n,r,i){const s=new qE;let o,a;if(n.type===Lt.OVERWRITE){const c=n;c.source.fromUser?o=bl(t,e,c.path,c.snap,r,i,s):(A(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!le(c.path),o=To(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===Lt.MERGE){const c=n;c.source.fromUser?o=QE(t,e,c.path,c.children,r,i,s):(A(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=yl(t,e,c.path,c.children,r,i,a,s))}else if(n.type===Lt.ACK_USER_WRITE){const c=n;c.revert?o=tT(t,e,c.path,r,i,s):o=ZE(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===Lt.LISTEN_COMPLETE)o=eT(t,e,n.path,r,s);else throw ii("Unknown operation type: "+n.type);const l=s.getChanges();return JE(e,o,l),{viewCache:o,changes:l}}function JE(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=wo(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(rg(wo(e)))}}function hg(t,e,n,r,i,s){const o=e.eventCache;if(Eo(r,n)!=null)return e;{let a,l;if(le(n))if(A(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=pr(e),u=c instanceof Y?c:Y.EMPTY_NODE,d=Mc(r,u);a=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const c=Co(r,pr(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=se(n);if(c===".priority"){A(An(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const d=zd(r,n,u,l);d!=null?a=t.filter.updatePriority(u,d):a=o.getNode()}else{const u=Ae(n);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const h=zd(r,n,o.getNode(),l);h!=null?d=o.getNode().getImmediateChild(c).updateChild(u,h):d=o.getNode().getImmediateChild(c)}else d=Dc(r,c,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),c,d,u,i,s):a=o.getNode()}}return Fi(e,a,o.isFullyInitialized()||le(n),t.filter.filtersNodes())}}function To(t,e,n,r,i,s,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(le(n))c=u.updateFullNode(l.getNode(),r,null);else if(u.filtersNodes()&&!l.isFiltered()){const _=l.getNode().updateChild(n,r);c=u.updateFullNode(l.getNode(),_,null)}else{const _=se(n);if(!l.isCompleteForPath(n)&&An(n)>1)return e;const g=Ae(n),b=l.getNode().getImmediateChild(_).updateChild(g,r);_===".priority"?c=u.updatePriority(l.getNode(),b):c=u.updateChild(l.getNode(),_,b,g,dg,null)}const d=sg(e,c,l.isFullyInitialized()||le(n),u.filtersNodes()),h=new Lc(i,d,s);return hg(t,d,n,i,h,a)}function bl(t,e,n,r,i,s,o){const a=e.eventCache;let l,c;const u=new Lc(i,e,s);if(le(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Fi(e,c,!0,t.filter.filtersNodes());else{const d=se(n);if(d===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=Fi(e,c,a.isFullyInitialized(),a.isFiltered());else{const h=Ae(n),_=a.getNode().getImmediateChild(d);let g;if(le(h))g=r;else{const C=u.getCompleteChild(d);C!=null?Ic(h)===".priority"&&C.getChild(Xp(h)).isEmpty()?g=C:g=C.updateChild(h,r):g=Y.EMPTY_NODE}if(_.equals(g))l=e;else{const C=t.filter.updateChild(a.getNode(),d,g,h,u,o);l=Fi(e,C,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Wd(t,e){return t.eventCache.isCompleteForChild(e)}function QE(t,e,n,r,i,s,o){let a=e;return r.foreach((l,c)=>{const u=$e(n,l);Wd(e,se(u))&&(a=bl(t,a,u,c,i,s,o))}),r.foreach((l,c)=>{const u=$e(n,l);Wd(e,se(u))||(a=bl(t,a,u,c,i,s,o))}),a}function jd(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function yl(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;le(n)?c=r:c=new Pe(null).setTree(n,r);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,h)=>{if(u.hasChild(d)){const _=e.serverCache.getNode().getImmediateChild(d),g=jd(t,_,h);l=To(t,l,new Ie(d),g,i,s,o,a)}}),c.children.inorderTraversal((d,h)=>{const _=!e.serverCache.isCompleteForChild(d)&&h.value===void 0;if(!u.hasChild(d)&&!_){const g=e.serverCache.getNode().getImmediateChild(d),C=jd(t,g,h);l=To(t,l,new Ie(d),C,i,s,o,a)}}),l}function ZE(t,e,n,r,i,s,o){if(Eo(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(le(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return To(t,e,n,l.getNode().getChild(n),i,s,a,o);if(le(n)){let c=new Pe(null);return l.getNode().forEachChild(Fr,(u,d)=>{c=c.set(new Ie(u),d)}),yl(t,e,n,c,i,s,a,o)}else return e}else{let c=new Pe(null);return r.foreach((u,d)=>{const h=$e(n,u);l.isCompleteForPath(h)&&(c=c.set(u,l.getNode().getChild(h)))}),yl(t,e,n,c,i,s,a,o)}}function eT(t,e,n,r,i){const s=e.serverCache,o=sg(e,s.getNode(),s.isFullyInitialized()||le(n),s.isFiltered());return hg(t,o,n,r,dg,i)}function tT(t,e,n,r,i,s){let o;if(Eo(r,n)!=null)return e;{const a=new Lc(r,e,i),l=e.eventCache.getNode();let c;if(le(n)||se(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Co(r,pr(e));else{const d=e.serverCache.getNode();A(d instanceof Y,"serverChildren would be complete if leaf node"),u=Mc(r,d)}u=u,c=t.filter.updateFullNode(l,u,s)}else{const u=se(n);let d=Dc(r,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=t.filter.updateChild(l,u,d,Ae(n),a,s):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,Y.EMPTY_NODE,Ae(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Co(r,pr(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||Eo(r,ve())!=null,Fi(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nT{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Pc(r.getIndex()),s=yE(r);this.processor_=GE(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(Y.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(Y.EMPTY_NODE,a.getNode(),null),u=new kn(l,o.isFullyInitialized(),i.filtersNodes()),d=new kn(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=ea(d,u),this.eventGenerator_=new xE(this.query_)}get query(){return this.query_}}function rT(t){return t.viewCache_.serverCache.getNode()}function iT(t){return wo(t.viewCache_)}function sT(t,e){const n=pr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!le(e)&&!n.getImmediateChild(se(e)).isEmpty())?n.getChild(e):null}function Vd(t){return t.eventRegistrations_.length===0}function oT(t,e){t.eventRegistrations_.push(e)}function qd(t,e,n){const r=[];if(n){A(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Kd(t,e,n,r){e.type===Lt.MERGE&&e.source.queryId!==null&&(A(pr(t.viewCache_),"We should always have a full cache before handling merges"),A(wo(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=XE(t.processor_,i,e,n,r);return YE(t.processor_,s.viewCache),A(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,fg(t,s.changes,s.viewCache.eventCache.getNode(),null)}function aT(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Be,(s,o)=>{r.push(Kr(s,o))}),n.isFullyInitialized()&&r.push(rg(n.getNode())),fg(t,r,n.getNode(),e)}function fg(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return RE(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Io;class pg{constructor(){this.views=new Map}}function lT(t){A(!Io,"__referenceConstructor has already been defined"),Io=t}function cT(){return A(Io,"Reference.ts has not been loaded"),Io}function uT(t){return t.views.size===0}function Fc(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return A(s!=null,"SyncTree gave us an op for an invalid query."),Kd(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Kd(o,e,n,r));return s}}function gg(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Co(n,i?r:null),l=!1;a?l=!0:r instanceof Y?(a=Mc(n,r),l=!1):(a=Y.EMPTY_NODE,l=!1);const c=ea(new kn(a,l,!1),new kn(r,i,!1));return new nT(e,c)}return o}function dT(t,e,n,r,i,s){const o=gg(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),oT(o,n),aT(o,n)}function hT(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=Nn(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(qd(c,n,r)),Vd(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(qd(l,n,r)),Vd(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!Nn(t)&&s.push(new(cT())(e._repo,e._path)),{removed:s,events:o}}function mg(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function xn(t,e){let n=null;for(const r of t.views.values())n=n||sT(r,e);return n}function _g(t,e){if(e._queryParams.loadsAllData())return na(t);{const r=e._queryIdentifier;return t.views.get(r)}}function vg(t,e){return _g(t,e)!=null}function Nn(t){return na(t)!=null}function na(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let So;function fT(t){A(!So,"__referenceConstructor has already been defined"),So=t}function pT(){return A(So,"Reference.ts has not been loaded"),So}let gT=1;class Gd{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Pe(null),this.pendingWriteTree_=jE(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function bg(t,e,n,r,i){return NE(t.pendingWriteTree_,e,n,r,i),i?li(t,new fr(kc(),e,n)):[]}function mT(t,e,n,r){OE(t.pendingWriteTree_,e,n,r);const i=Pe.fromObject(n);return li(t,new Gr(kc(),e,i))}function wn(t,e,n=!1){const r=ME(t.pendingWriteTree_,e);if(DE(t.pendingWriteTree_,e)){let s=new Pe(null);return r.snap!=null?s=s.set(ve(),!0):ot(r.children,o=>{s=s.set(new Ie(o),!0)}),li(t,new yo(r.path,s,n))}else return[]}function vs(t,e,n){return li(t,new fr(Nc(),e,n))}function _T(t,e,n){const r=Pe.fromObject(n);return li(t,new Gr(Nc(),e,r))}function vT(t,e){return li(t,new ss(Nc(),e))}function bT(t,e,n){const r=Bc(t,n);if(r){const i=Uc(r),s=i.path,o=i.queryId,a=gt(s,e),l=new ss(Oc(o),a);return Hc(t,s,l)}else return[]}function wl(t,e,n,r){const i=e._path,s=t.syncPointTree_.get(i);let o=[];if(s&&(e._queryIdentifier==="default"||vg(s,e))){const a=hT(s,e,n,r);uT(s)&&(t.syncPointTree_=t.syncPointTree_.remove(i));const l=a.removed;o=a.events;const c=l.findIndex(d=>d._queryParams.loadsAllData())!==-1,u=t.syncPointTree_.findOnPath(i,(d,h)=>Nn(h));if(c&&!u){const d=t.syncPointTree_.subtree(i);if(!d.isEmpty()){const h=ET(d);for(let _=0;_<h.length;++_){const g=h[_],C=g.query,b=Cg(t,g);t.listenProvider_.startListening(Bi(C),xo(t,C),b.hashFn,b.onComplete)}}}!u&&l.length>0&&!r&&(c?t.listenProvider_.stopListening(Bi(e),null):l.forEach(d=>{const h=t.queryToTagMap.get(ra(d));t.listenProvider_.stopListening(Bi(d),h)})),TT(t,l)}return o}function yT(t,e,n,r){const i=Bc(t,r);if(i!=null){const s=Uc(i),o=s.path,a=s.queryId,l=gt(o,e),c=new fr(Oc(a),l,n);return Hc(t,o,c)}else return[]}function wT(t,e,n,r){const i=Bc(t,r);if(i){const s=Uc(i),o=s.path,a=s.queryId,l=gt(o,e),c=Pe.fromObject(n),u=new Gr(Oc(a),l,c);return Hc(t,o,u)}else return[]}function Yd(t,e,n){const r=e._path;let i=null,s=!1;t.syncPointTree_.foreachOnPath(r,(d,h)=>{const _=gt(d,r);i=i||xn(h,_),s=s||Nn(h)});let o=t.syncPointTree_.get(r);o?(s=s||Nn(o),i=i||xn(o,ve())):(o=new pg,t.syncPointTree_=t.syncPointTree_.set(r,o));let a;i!=null?a=!0:(a=!1,i=Y.EMPTY_NODE,t.syncPointTree_.subtree(r).foreachChild((h,_)=>{const g=xn(_,ve());g&&(i=i.updateImmediateChild(h,g))}));const l=vg(o,e);if(!l&&!e._queryParams.loadsAllData()){const d=ra(e);A(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const h=IT();t.queryToTagMap.set(d,h),t.tagToQueryMap.set(h,d)}const c=ta(t.pendingWriteTree_,r);let u=dT(o,e,n,c,i,a);if(!l&&!s){const d=_g(o,e);u=u.concat(ST(t,e,d))}return u}function $c(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=gt(o,e),c=xn(a,l);if(c)return c});return lg(i,e,s,n,!0)}function CT(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const d=gt(c,n);r=r||xn(u,d)});let i=t.syncPointTree_.get(n);i?r=r||xn(i,ve()):(i=new pg,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new kn(r,!0,!1):null,a=ta(t.pendingWriteTree_,e._path),l=gg(i,e,a,s?o.getNode():Y.EMPTY_NODE,s);return iT(l)}function li(t,e){return yg(e,t.syncPointTree_,null,ta(t.pendingWriteTree_,ve()))}function yg(t,e,n,r){if(le(t.path))return wg(t,e,n,r);{const i=e.get(ve());n==null&&i!=null&&(n=xn(i,ve()));let s=[];const o=se(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=cg(r,o);s=s.concat(yg(a,l,c,u))}return i&&(s=s.concat(Fc(i,t,r,n))),s}}function wg(t,e,n,r){const i=e.get(ve());n==null&&i!=null&&(n=xn(i,ve()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=cg(r,o),u=t.operationForChild(o);u&&(s=s.concat(wg(u,a,l,c)))}),i&&(s=s.concat(Fc(i,t,r,n))),s}function Cg(t,e){const n=e.query,r=xo(t,n);return{hashFn:()=>(rT(e)||Y.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?bT(t,n._path,r):vT(t,n._path);{const s=pC(i,n);return wl(t,n,null,s)}}}}function xo(t,e){const n=ra(e);return t.queryToTagMap.get(n)}function ra(t){return t._path.toString()+"$"+t._queryIdentifier}function Bc(t,e){return t.tagToQueryMap.get(e)}function Uc(t){const e=t.indexOf("$");return A(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Ie(t.substr(0,e))}}function Hc(t,e,n){const r=t.syncPointTree_.get(e);A(r,"Missing sync point for query tag that we're tracking");const i=ta(t.pendingWriteTree_,e);return Fc(r,n,i,null)}function ET(t){return t.fold((e,n,r)=>{if(n&&Nn(n))return[na(n)];{let i=[];return n&&(i=mg(n)),ot(r,(s,o)=>{i=i.concat(o)}),i}})}function Bi(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(pT())(t._repo,t._path):t}function TT(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=ra(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function IT(){return gT++}function ST(t,e,n){const r=e._path,i=xo(t,e),s=Cg(t,n),o=t.listenProvider_.startListening(Bi(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)A(!Nn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,d)=>{if(!le(c)&&u&&Nn(u))return[na(u).query];{let h=[];return u&&(h=h.concat(mg(u).map(_=>_.query))),ot(d,(_,g)=>{h=h.concat(g)}),h}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(Bi(u),xo(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new zc(n)}node(){return this.node_}}class Wc{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=$e(this.path_,e);return new Wc(this.syncTree_,n)}node(){return $c(this.syncTree_,this.path_)}}const xT=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Xd=function(t,e,n){if(!t||typeof t!="object")return t;if(A(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return RT(t[".sv"],e,n);if(typeof t[".sv"]=="object")return PT(t[".sv"],e);A(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},RT=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:A(!1,"Unexpected server value: "+t)}},PT=function(t,e,n){t.hasOwnProperty("increment")||A(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&A(!1,"Unexpected increment value: "+r);const i=e.node();if(A(i!==null&&typeof i!="undefined","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},Eg=function(t,e,n,r){return jc(e,new Wc(n,t),r)},Tg=function(t,e,n){return jc(t,new zc(e),n)};function jc(t,e,n){const r=t.getPriority().val(),i=Xd(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=Xd(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Je(a,qe(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Je(i))),o.forEachChild(Be,(a,l)=>{const c=jc(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function qc(t,e){let n=e instanceof Ie?e:new Ie(e),r=t,i=se(n);for(;i!==null;){const s=jr(r.node.children,i)||{children:{},childCount:0};r=new Vc(i,r,s),n=Ae(n),i=se(n)}return r}function ci(t){return t.node.value}function Ig(t,e){t.node.value=e,Cl(t)}function Sg(t){return t.node.childCount>0}function AT(t){return ci(t)===void 0&&!Sg(t)}function ia(t,e){ot(t.node.children,(n,r)=>{e(new Vc(n,t,r))})}function xg(t,e,n,r){n&&!r&&e(t),ia(t,i=>{xg(i,e,!0,r)}),n&&r&&e(t)}function kT(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function bs(t){return new Ie(t.parent===null?t.name:bs(t.parent)+"/"+t.name)}function Cl(t){t.parent!==null&&NT(t.parent,t.name,t)}function NT(t,e,n){const r=AT(n),i=Gt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Cl(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Cl(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OT=/[\[\].#$\/\u0000-\u001F\u007F]/,MT=/[\[\].#$\u0000-\u001F\u007F]/,Oa=10*1024*1024,Kc=function(t){return typeof t=="string"&&t.length!==0&&!OT.test(t)},Rg=function(t){return typeof t=="string"&&t.length!==0&&!MT.test(t)},DT=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Rg(t)},LT=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!bc(t)||t&&typeof t=="object"&&Gt(t,".sv")},Pg=function(t,e,n,r){r&&e===void 0||sa(Ko(t,"value"),e,n)},sa=function(t,e,n){const r=n instanceof Ie?new XC(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+jn(r));if(typeof e=="function")throw new Error(t+"contains a function "+jn(r)+" with contents = "+e.toString());if(bc(e))throw new Error(t+"contains "+e.toString()+" "+jn(r));if(typeof e=="string"&&e.length>Oa/3&&Go(e)>Oa)throw new Error(t+"contains a string greater than "+Oa+" utf8 bytes "+jn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(ot(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Kc(o)))throw new Error(t+" contains an invalid key ("+o+") "+jn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);JC(r,o),sa(t,a,r),QC(r)}),i&&s)throw new Error(t+' contains ".value" child '+jn(r)+" in addition to actual children.")}},FT=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=ts(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!Kc(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(YC);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&Pt(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},$T=function(t,e,n,r){if(r&&e===void 0)return;const i=Ko(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];ot(e,(o,a)=>{const l=new Ie(o);if(sa(i,a,$e(n,l)),Ic(l)===".priority"&&!LT(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),FT(i,s)},Ag=function(t,e,n,r){if(!(r&&n===void 0)&&!Rg(n))throw new Error(Ko(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},BT=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Ag(t,e,n,r)},Gc=function(t,e){if(se(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},UT=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Kc(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!DT(n))throw new Error(Ko(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HT{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function oa(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Sc(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Yc(t,e,n){oa(t,n),kg(t,r=>Sc(r,e))}function Ut(t,e,n){oa(t,n),kg(t,r=>Pt(r,e)||Pt(e,r))}function kg(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(zT(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function zT(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();ir&&rt("event: "+n.toString()),ai(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WT="repo_interrupt",jT=25;class VT{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new HT,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=bo(),this.transactionQueueTree_=new Vc,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function qT(t,e,n){if(t.stats_=Cc(t.repoInfo_),t.forceRestClient_||vC())t.server_=new vo(t.repoInfo_,(r,i,s,o)=>{Jd(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Qd(t,!0),0);else{if(typeof n!="undefined"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ke(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new tn(t.repoInfo_,e,(r,i,s,o)=>{Jd(t,r,i,s,o)},r=>{Qd(t,r)},r=>{KT(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=IC(t.repoInfo_,()=>new SE(t.stats_,t.server_)),t.infoData_=new wE,t.infoSyncTree_=new Gd({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=vs(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Xc(t,"connected",!1),t.serverSyncTree_=new Gd({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const c=o(a,l);Ut(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function Ng(t){const n=t.infoData_.getNode(new Ie(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function aa(t){return xT({timestamp:Ng(t)})}function Jd(t,e,n,r,i){t.dataUpdateCount++;const s=new Ie(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=ao(n,c=>qe(c));o=wT(t.serverSyncTree_,s,l,i)}else{const l=qe(n);o=yT(t.serverSyncTree_,s,l,i)}else if(r){const l=ao(n,c=>qe(c));o=_T(t.serverSyncTree_,s,l)}else{const l=qe(n);o=vs(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Xr(t,s)),Ut(t.eventQueue_,a,o)}function Qd(t,e){Xc(t,"connected",e),e===!1&&JT(t)}function KT(t,e){ot(e,(n,r)=>{Xc(t,n,r)})}function Xc(t,e,n){const r=new Ie("/.info/"+e),i=qe(n);t.infoData_.updateSnapshot(r,i);const s=vs(t.infoSyncTree_,r,i);Ut(t.eventQueue_,r,s)}function Jc(t){return t.nextWriteId_++}function GT(t,e){const n=CT(t.serverSyncTree_,e);return n!=null?Promise.resolve(n):t.server_.get(e).then(r=>{const i=qe(r).withIndex(e._queryParams.getIndex()),s=vs(t.serverSyncTree_,e._path,i);return Yc(t.eventQueue_,e._path,s),Promise.resolve(i)},r=>(ys(t,"get for query "+Ke(e)+" failed: "+r),Promise.reject(new Error(r))))}function YT(t,e,n,r,i){ys(t,"set",{path:e.toString(),value:n,priority:r});const s=aa(t),o=qe(n,r),a=$c(t.serverSyncTree_,e),l=Tg(o,a,s),c=Jc(t),u=bg(t.serverSyncTree_,e,l,c,!0);oa(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(h,_)=>{const g=h==="ok";g||mt("set at "+e+" failed: "+h);const C=wn(t.serverSyncTree_,c,!g);Ut(t.eventQueue_,e,C),El(t,i,h,_)});const d=Zc(t,e);Xr(t,d),Ut(t.eventQueue_,d,[])}function XT(t,e,n,r){ys(t,"update",{path:e.toString(),value:n});let i=!0;const s=aa(t),o={};if(ot(n,(a,l)=>{i=!1,o[a]=Eg($e(e,a),qe(l),t.serverSyncTree_,s)}),i)rt("update() called with empty data.  Don't do anything."),El(t,r,"ok",void 0);else{const a=Jc(t),l=mT(t.serverSyncTree_,e,o,a);oa(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,u)=>{const d=c==="ok";d||mt("update at "+e+" failed: "+c);const h=wn(t.serverSyncTree_,a,!d),_=h.length>0?Xr(t,e):e;Ut(t.eventQueue_,_,h),El(t,r,c,u)}),ot(n,c=>{const u=Zc(t,$e(e,c));Xr(t,u)}),Ut(t.eventQueue_,e,[])}}function JT(t){ys(t,"onDisconnectEvents");const e=aa(t),n=bo();gl(t.onDisconnect_,ve(),(i,s)=>{const o=Eg(i,s,t.serverSyncTree_,e);ig(n,i,o)});let r=[];gl(n,ve(),(i,s)=>{r=r.concat(vs(t.serverSyncTree_,i,s));const o=Zc(t,i);Xr(t,o)}),t.onDisconnect_=bo(),Ut(t.eventQueue_,ve(),r)}function QT(t,e,n){let r;se(e._path)===".info"?r=Yd(t.infoSyncTree_,e,n):r=Yd(t.serverSyncTree_,e,n),Yc(t.eventQueue_,e._path,r)}function Zd(t,e,n){let r;se(e._path)===".info"?r=wl(t.infoSyncTree_,e,n):r=wl(t.serverSyncTree_,e,n),Yc(t.eventQueue_,e._path,r)}function ZT(t){t.persistentConnection_&&t.persistentConnection_.interrupt(WT)}function ys(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),rt(n,...e)}function El(t,e,n,r){e&&ai(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function Og(t,e,n){return $c(t.serverSyncTree_,e,n)||Y.EMPTY_NODE}function Qc(t,e=t.transactionQueueTree_){if(e||la(t,e),ci(e)){const n=Dg(t,e);A(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&eI(t,bs(e),n)}else Sg(e)&&ia(e,n=>{Qc(t,n)})}function eI(t,e,n){const r=n.map(c=>c.currentWriteId),i=Og(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];A(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=gt(e,u.path);s=s.updateChild(d,u.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{ys(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let h=0;h<n.length;h++)n[h].status=2,u=u.concat(wn(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&d.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();la(t,qc(t.transactionQueueTree_,e)),Qc(t,t.transactionQueueTree_),Ut(t.eventQueue_,e,u);for(let h=0;h<d.length;h++)ai(d[h])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{mt("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}Xr(t,e)}},o)}function Xr(t,e){const n=Mg(t,e),r=bs(n),i=Dg(t,n);return tI(t,i,r),r}function tI(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=gt(n,l.path);let u=!1,d;if(A(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,i=i.concat(wn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=jT)u=!0,d="maxretry",i=i.concat(wn(t.serverSyncTree_,l.currentWriteId,!0));else{const h=Og(t,l.path,o);l.currentInputSnapshot=h;const _=e[a].update(h.val());if(_!==void 0){sa("transaction failed: Data returned ",_,l.path);let g=qe(_);typeof _=="object"&&_!=null&&Gt(_,".priority")||(g=g.updatePriority(h.getPriority()));const b=l.currentWriteId,S=aa(t),F=Tg(g,h,S);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=F,l.currentWriteId=Jc(t),o.splice(o.indexOf(b),1),i=i.concat(bg(t.serverSyncTree_,l.path,F,l.currentWriteId,l.applyLocally)),i=i.concat(wn(t.serverSyncTree_,b,!0))}else u=!0,d="nodata",i=i.concat(wn(t.serverSyncTree_,l.currentWriteId,!0))}Ut(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(d),!1,null))))}la(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)ai(r[a]);Qc(t,t.transactionQueueTree_)}function Mg(t,e){let n,r=t.transactionQueueTree_;for(n=se(e);n!==null&&ci(r)===void 0;)r=qc(r,n),e=Ae(e),n=se(e);return r}function Dg(t,e){const n=[];return Lg(t,e,n),n.sort((r,i)=>r.order-i.order),n}function Lg(t,e,n){const r=ci(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);ia(e,i=>{Lg(t,i,n)})}function la(t,e){const n=ci(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,Ig(e,n.length>0?n:void 0)}ia(e,r=>{la(t,r)})}function Zc(t,e){const n=bs(Mg(t,e)),r=qc(t.transactionQueueTree_,e);return kT(r,i=>{Ma(t,i)}),Ma(t,r),xg(r,i=>{Ma(t,i)}),n}function Ma(t,e){const n=ci(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(A(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(A(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(wn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Ig(e,void 0):n.length=s+1,Ut(t.eventQueue_,bs(e),i);for(let o=0;o<r.length;o++)ai(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nI(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function rI(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):mt(`Invalid query segment '${n}' in query '${t}'`)}return e}const eh=function(t,e){const n=iI(t),r=n.namespace;n.domain==="firebase.com"&&dr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&dr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||cC();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new CC(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new Ie(n.pathString)}},iI=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(u,d)),u<d&&(i=nI(t.substring(u,d)));const h=rI(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const g=e.indexOf(".");r=e.substring(0,g).toLowerCase(),n=e.substring(g+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ke(this.snapshot.exportVal())}}class $g{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return A(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return le(this._path)?null:Ic(this._path)}get ref(){return new Yt(this._repo,this._path)}get _queryIdentifier(){const e=$d(this._queryParams),n=yc(e);return n==="{}"?"default":n}get _queryObject(){return $d(this._queryParams)}isEqual(e){if(e=Ht(e),!(e instanceof eu))return!1;const n=this._repo===e._repo,r=Sc(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+GC(this._path)}}class Yt extends eu{constructor(e,n){super(e,n,new Ac,!1)}get parent(){const e=Xp(this._path);return e===null?null:new Yt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Jr{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Ie(e),r=Qr(this.ref,e);return new Jr(this._node.getChild(n),r,Be)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Jr(i,Qr(this.ref,r),Be)))}hasChild(e){const n=new Ie(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function kt(t,e){return t=Ht(t),t._checkNotDeleted("ref"),e!==void 0?Qr(t._root,e):t._root}function Qr(t,e){return t=Ht(t),se(t._path)===null?BT("child","path",e,!1):Ag("child","path",e,!1),new Yt(t._repo,$e(t._path,e))}function tu(t,e){t=Ht(t),Gc("push",t._path),Pg("push",e,t._path,!0);const n=Ng(t._repo),r=_E(n),i=Qr(t,r),s=Qr(t,r);let o;return e!=null?o=nu(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function oI(t){return Gc("remove",t._path),nu(t,null)}function nu(t,e){t=Ht(t),Gc("set",t._path),Pg("set",e,t._path,!1);const n=new cs;return YT(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function ru(t,e){$T("update",e,t._path,!1);const n=new cs;return XT(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function Bg(t){return t=Ht(t),GT(t._repo,t).then(e=>new Jr(e,new Yt(t._repo,t._path),t._queryParams.getIndex()))}class iu{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new Fg("value",this,new Jr(e.snapshotNode,new Yt(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new $g(this,e,n):null}matches(e){return e instanceof iu?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class su{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new $g(this,e,n):null}createEvent(e,n){A(e.childName!=null,"Child events should have a childName.");const r=Qr(new Yt(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new Fg(e.type,this,new Jr(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof su?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function aI(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,c=(u,d)=>{Zd(t._repo,t,a),l(u,d)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new sI(n,s||void 0),a=e==="value"?new iu(o):new su(e,o);return QT(t._repo,t,a),()=>Zd(t._repo,t,a)}function Tl(t,e,n,r){return aI(t,"value",e,n,r)}lT(Yt);fT(Yt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lI="FIREBASE_DATABASE_EMULATOR_HOST",Il={};let cI=!1;function uI(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||dr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),rt("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=eh(s,i),a=o.repoInfo,l,c;typeof process!="undefined"&&process.env&&(c=process.env[lI]),c?(l=!0,s=`http://${c}?ns=${a.namespace}`,o=eh(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new hl(hl.OWNER):new yC(t.name,t.options,e);UT("Invalid Firebase Database URL",o),le(o.path)||dr("Database URL must point to the root of a Firebase Database (not including a child path).");const d=hI(a,t,u,new bC(t.name,n));return new fI(d,t)}function dI(t,e){const n=Il[e];(!n||n[t.key]!==t)&&dr(`Database ${e}(${t.repoInfo_}) has already been deleted.`),ZT(t),delete n[t.key]}function hI(t,e,n,r){let i=Il[e.name];i||(i={},Il[e.name]=i);let s=i[t.toURLString()];return s&&dr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new VT(t,cI,n,r),i[t.toURLString()]=s,s}class fI{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(qT(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Yt(this._repo,ve())),this._rootInternal}_delete(){return this._rootInternal!==null&&(dI(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&dr("Cannot call "+e+" on a deleted database.")}}function pI(t=Xf(),e){return uc(t,"database").getImmediate({identifier:e})}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gI(t){iC(ds),Vr(new lr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return uI(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),In(yd,wd,t),In(yd,wd,"esm2017")}tn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};tn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};gI();const mI={apiKey:"AIzaSyAsXHXd9Spu67AO6DV06x2E_EnVOIAu9UU",authDomain:"quick-retro.firebaseapp.com",projectId:"quick-retro",storageBucket:"quick-retro.appspot.com",messagingSenderId:"293134428599",appId:"1:293134428599:web:bad71d4fedbda8080ce032",databaseURL:"https://quick-retro-default-rtdb.europe-west1.firebasedatabase.app"},_I=s0(mI),Nt=pI(_I),Os=On({});function vI(t){if(!t)return Os;const e=kt(Nt,`users/${t}/boards`),n={};Tl(e,r,s);function r(o){const a=o.exists()?Object.values(o.val()):[];for(const l of a){if(n[l])continue;const c=Tl(kt(Nt,`boards/${l}`),i.bind(null,l),s);n[l]=c}for(const l in n)a.includes(l)||(n[l](),delete n[l],console.log("delete",l),delete Os[l])}function i(o,a){Os[o]=a.val()}function s(o){console.error(o)}return Os}function bI(t){const e=On({loading:!0});Tl(kt(Nt,`boards/${t}`),r=>{e.exists=r.exists(),e.loading=!1,e.exists&&Object.entries(r.val()).forEach(([i,s])=>{e[i]=s})},n);function n(r){console.log(r),e.exists=!1,e.loading=!1}return e}function yI(t,e){const n=kt(Nt,`boards/${t}`);ru(n,{cardsHidden:e})}function wI(t,e){const n=kt(Nt,`boards/${t}`);ru(n,{title:e})}function CI(t,e,n){const r=kt(Nt,`boards/${t}/columns/${e}/cards`);tu(r,n)}function Ug(t,e,n){oI(kt(Nt,`boards/${t}/columns/${e}/cards/${n}`))}function th(t,e,n,r){ru(kt(Nt,`boards/${t}/columns/${e}/cards/${n}`),r)}async function EI(t,e){const n=kt(Nt,"boards"),r=await tu(n,{author:t,cardsHidden:!0,title:"",columns:e.columns.map(i=>_u(mu({},i),{cards:{}}))});if(!!r.key)return await Hg(t,r.key),r.key}async function TI(t,e){const n=kt(Nt,`users/${t}/boards`),r=await Bg(n);if(!r.exists())return;const i=Object.fromEntries(Object.entries(r.val()).filter(([s,o])=>e!==o));await nu(n,i)}async function Hg(t,e){const n=await Bg(kt(Nt,`users/${t}/boards`));if((n.exists()?Object.values(n.val()):[]).includes(e))return;const i=kt(Nt,`users/${t}/boards`);await tu(i,e)}function II(){const t=On({}),e=rC();return W0(e).catch(n=>{console.error(n)}),K0(e,n=>{n&&Object.entries(n).forEach(([r,i])=>{t[r]=i})}),t}var an=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n};const SI=Me({props:{text:null},setup(t){return(e,n)=>(_e(),He("button",null,Br(t.text),1))}});var xI=an(SI,[["__scopeId","data-v-1ee2b704"]]);function RI(t,e){const n=t.trim().split(/\s+/g),r={top:n[0]};switch(n.length){case 1:r.right=n[0],r.bottom=n[0],r.left=n[0];break;case 2:r.right=n[1],r.left=n[1],r.bottom=n[0];break;case 3:r.right=n[1],r.bottom=n[2],r.left=n[1];break;case 4:r.right=n[1],r.bottom=n[2],r.left=n[3];break;default:throw new Error("[seemly/getMargin]:"+t+" is not a valid value.")}return e===void 0?r:r[e]}var nh={black:"#000",silver:"#C0C0C0",gray:"#808080",white:"#FFF",maroon:"#800000",red:"#F00",purple:"#800080",fuchsia:"#F0F",green:"#008000",lime:"#0F0",olive:"#808000",yellow:"#FF0",navy:"#000080",blue:"#00F",teal:"#008080",aqua:"#0FF",transparent:"#0000"};const ui="^\\s*",di="\\s*$",Xn="\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*",Jn="([0-9A-Fa-f])",Qn="([0-9A-Fa-f]{2})",PI=new RegExp(`${ui}rgb\\s*\\(${Xn},${Xn},${Xn}\\)${di}`),AI=new RegExp(`${ui}rgba\\s*\\(${Xn},${Xn},${Xn},${Xn}\\)${di}`),kI=new RegExp(`${ui}#${Jn}${Jn}${Jn}${di}`),NI=new RegExp(`${ui}#${Qn}${Qn}${Qn}${di}`),OI=new RegExp(`${ui}#${Jn}${Jn}${Jn}${Jn}${di}`),MI=new RegExp(`${ui}#${Qn}${Qn}${Qn}${Qn}${di}`);function vt(t){return parseInt(t,16)}function gr(t){try{let e;if(e=NI.exec(t))return[vt(e[1]),vt(e[2]),vt(e[3]),1];if(e=PI.exec(t))return[at(e[1]),at(e[5]),at(e[9]),1];if(e=AI.exec(t))return[at(e[1]),at(e[5]),at(e[9]),Ui(e[13])];if(e=kI.exec(t))return[vt(e[1]+e[1]),vt(e[2]+e[2]),vt(e[3]+e[3]),1];if(e=MI.exec(t))return[vt(e[1]),vt(e[2]),vt(e[3]),Ui(vt(e[4])/255)];if(e=OI.exec(t))return[vt(e[1]+e[1]),vt(e[2]+e[2]),vt(e[3]+e[3]),Ui(vt(e[4]+e[4])/255)];if(t in nh)return gr(nh[t]);throw new Error(`[seemly/rgba]: Invalid color value ${t}.`)}catch(e){throw e}}function DI(t){return t>1?1:t<0?0:t}function Sl(t,e,n,r){return`rgba(${at(t)}, ${at(e)}, ${at(n)}, ${DI(r)})`}function Da(t,e,n,r,i){return at((t*e*(1-r)+n*r)/i)}function LI(t,e){Array.isArray(t)||(t=gr(t)),Array.isArray(e)||(e=gr(e));const n=t[3],r=e[3],i=Ui(n+r-n*r);return Sl(Da(t[0],n,e[0],r,i),Da(t[1],n,e[1],r,i),Da(t[2],n,e[2],r,i),i)}function La(t,e){const[n,r,i,s=1]=Array.isArray(t)?t:gr(t);return e.alpha?Sl(n,r,i,e.alpha):Sl(n,r,i,s)}function Ms(t,e){const[n,r,i,s=1]=Array.isArray(t)?t:gr(t),{lightness:o=1,alpha:a=1}=e;return FI([n*o,r*o,i*o,s*a])}function Ui(t){const e=Math.round(Number(t)*100)/100;return e>1?1:e<0?0:e}function at(t){const e=Math.round(Number(t));return e>255?255:e<0?0:e}function FI(t){const[e,n,r]=t;return 3 in t?`rgba(${at(e)}, ${at(n)}, ${at(r)}, ${Ui(t[3])})`:`rgba(${at(e)}, ${at(n)}, ${at(r)}, 1)`}function ft(t,...e){if(Array.isArray(t))t.forEach(n=>ft(n,...e));else return t(...e)}function $I(t,e){throw new Error(`[naive/${t}]: ${e}`)}function ca(t){return t.some(e=>Ki(e)?!(e.type===It||e.type===Fe&&!ca(e.children)):!0)?t:null}function Xs(t,e){return t&&ca(t())||e()}function BI(t,e,n){return t&&ca(t(e))||n(e)}function Ds(t,e){const n=t&&ca(t());return e(n||null)}function UI(t){let e=0;for(let n=0;n<t.length;++n)t[n]==="&"&&++e;return e}const zg=/\s*,(?![^(]*\))\s*/g,HI=/\s+/g;function zI(t,e){const n=[];return e.split(zg).forEach(r=>{let i=UI(r);if(i){if(i===1){t.forEach(o=>{n.push(r.replace("&",o))});return}}else{t.forEach(o=>{n.push((o&&o+" ")+r)});return}let s=[r];for(;i--;){const o=[];s.forEach(a=>{t.forEach(l=>{o.push(a.replace("&",l))})}),s=o}s.forEach(o=>n.push(o))}),n}function WI(t,e){const n=[];return e.split(zg).forEach(r=>{t.forEach(i=>{n.push((i&&i+" ")+r)})}),n}function jI(t){let e=[""];return t.forEach(n=>{n=n&&n.trim(),n&&(n.includes("&")?e=zI(e,n):e=WI(e,n))}),e.join(", ").replace(HI," ")}function rh(t){if(!t)return;const e=t.parentElement;e&&e.removeChild(t)}function ua(t){return document.querySelector(`style[cssr-id="${t}"]`)}function VI(t){const e=document.createElement("style");return e.setAttribute("cssr-id",t),e}function Ls(t){return t?/^\s*@(s|m)/.test(t):!1}const qI=/[A-Z]/g;function Wg(t){return t.replace(qI,e=>"-"+e.toLowerCase())}function KI(t,e="  "){return typeof t=="object"&&t!==null?` {
`+Object.entries(t).map(n=>e+`  ${Wg(n[0])}: ${n[1]};`).join(`
`)+`
`+e+"}":`: ${t};`}function GI(t,e,n){return typeof t=="function"?t({context:e.context,props:n}):t}function ih(t,e,n,r){if(!e)return"";const i=GI(e,n,r);if(!i)return"";if(typeof i=="string")return`${t} {
${i}
}`;const s=Object.keys(i);if(s.length===0)return n.config.keepEmptyBlock?t+` {
}`:"";const o=t?[t+" {"]:[];return s.forEach(a=>{const l=i[a];if(a==="raw"){o.push(`
`+l+`
`);return}a=Wg(a),l!=null&&o.push(`  ${a}${KI(l)}`)}),t&&o.push("}"),o.join(`
`)}function xl(t,e,n){!t||t.forEach(r=>{if(Array.isArray(r))xl(r,e,n);else if(typeof r=="function"){const i=r(e);Array.isArray(i)?xl(i,e,n):i&&n(i)}else r&&n(r)})}function jg(t,e,n,r,i,s){const o=t.$;let a="";if(!o||typeof o=="string")Ls(o)?a=o:e.push(o);else if(typeof o=="function"){const u=o({context:r.context,props:i});Ls(u)?a=u:e.push(u)}else if(o.before&&o.before(r.context),!o.$||typeof o.$=="string")Ls(o.$)?a=o.$:e.push(o.$);else if(o.$){const u=o.$({context:r.context,props:i});Ls(u)?a=u:e.push(u)}const l=jI(e),c=ih(l,t.props,r,i);a?(n.push(`${a} {`),s&&c&&s.insertRule(`${a} {
${c}
}
`)):(s&&c&&s.insertRule(c),!s&&c.length&&n.push(c)),t.children&&xl(t.children,{context:r.context,props:i},u=>{if(typeof u=="string"){const d=ih(l,{raw:u},r,i);s?s.insertRule(d):n.push(d)}else jg(u,e,n,r,i,s)}),e.pop(),a&&n.push("}"),o&&o.after&&o.after(r.context)}function Vg(t,e,n,r=!1){const i=[];return jg(t,[],i,e,n,r?t.instance.__styleSheet:void 0),r?"":i.join(`

`)}function Rl(t){for(var e=0,n,r=0,i=t.length;i>=4;++r,i-=4)n=t.charCodeAt(r)&255|(t.charCodeAt(++r)&255)<<8|(t.charCodeAt(++r)&255)<<16|(t.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,e=(n&65535)*1540483477+((n>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(i){case 3:e^=(t.charCodeAt(r+2)&255)<<16;case 2:e^=(t.charCodeAt(r+1)&255)<<8;case 1:e^=t.charCodeAt(r)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}typeof window!="undefined"&&(window.__cssrContext={});function YI(t,e,n){const{els:r}=e;if(n===void 0)r.forEach(rh),e.els=[];else{const i=ua(n);i&&r.includes(i)&&(rh(i),e.els=r.filter(s=>s!==i))}}function sh(t,e){t.push(e)}function XI(t,e,n,r,i,s,o,a,l){if(s&&!l){if(n===void 0){console.error("[css-render/mount]: `id` is required in `silent` mode.");return}const h=window.__cssrContext;h[n]||(h[n]=!0,Vg(e,t,r,s));return}let c;if(n===void 0&&(c=e.render(r),n=Rl(c)),l){l.adapter(n,c!=null?c:e.render(r));return}const u=ua(n);if(u!==null&&!o)return u;const d=u!=null?u:VI(n);if(c===void 0&&(c=e.render(r)),d.textContent=c,u!==null)return u;if(a){const h=document.head.querySelector(`meta[name="${a}"]`);if(h)return document.head.insertBefore(d,h),sh(e.els,d),d}return i?document.head.insertBefore(d,document.head.querySelector("style, link")):document.head.appendChild(d),sh(e.els,d),d}function JI(t){return Vg(this,this.instance,t)}function QI(t={}){const{id:e,ssr:n,props:r,head:i=!1,silent:s=!1,force:o=!1,anchorMetaName:a}=t;return XI(this.instance,this,e,r,i,s,o,a,n)}function ZI(t={}){const{id:e}=t;YI(this.instance,this,e)}const Fs=function(t,e,n,r){return{instance:t,$:e,props:n,children:r,els:[],render:JI,mount:QI,unmount:ZI}},eS=function(t,e,n,r){return Array.isArray(e)?Fs(t,{$:null},null,e):Array.isArray(n)?Fs(t,e,null,n):Array.isArray(r)?Fs(t,e,n,r):Fs(t,e,n,null)};function tS(t={}){let e=null;const n={c:(...r)=>eS(n,...r),use:(r,...i)=>r.install(n,...i),find:ua,context:{},config:t,get __styleSheet(){if(!e){const r=document.createElement("style");return document.head.appendChild(r),e=document.styleSheets[document.styleSheets.length-1],e}return e}};return n}function nS(t,e){if(t===void 0)return!1;if(e){const{context:{ids:n}}=e;return n.has(t)}return ua(t)!==null}function rS(t){let e=".",n="__",r="--",i;if(t){let g=t.blockPrefix;g&&(e=g),g=t.elementPrefix,g&&(n=g),g=t.modifierPrefix,g&&(r=g)}const s={install(g){i=g.c;const C=g.context;C.bem={},C.bem.b=null,C.bem.els=null}};function o(g){let C,b;return{before(S){C=S.bem.b,b=S.bem.els,S.bem.els=null},after(S){S.bem.b=C,S.bem.els=b},$({context:S,props:F}){return g=typeof g=="string"?g:g({context:S,props:F}),S.bem.b=g,`${(F==null?void 0:F.bPrefix)||e}${S.bem.b}`}}}function a(g){let C;return{before(b){C=b.bem.els},after(b){b.bem.els=C},$({context:b,props:S}){return g=typeof g=="string"?g:g({context:b,props:S}),b.bem.els=g.split(",").map(F=>F.trim()),b.bem.els.map(F=>`${(S==null?void 0:S.bPrefix)||e}${b.bem.b}${n}${F}`).join(", ")}}}function l(g){return{$({context:C,props:b}){g=typeof g=="string"?g:g({context:C,props:b});const S=g.split(",").map(U=>U.trim());function F(U){return S.map(X=>`&${(b==null?void 0:b.bPrefix)||e}${C.bem.b}${U!==void 0?`${n}${U}`:""}${r}${X}`).join(", ")}const z=C.bem.els;return z!==null?F(z[0]):F()}}}function c(g){return{$({context:C,props:b}){g=typeof g=="string"?g:g({context:C,props:b});const S=C.bem.els;return`&:not(${(b==null?void 0:b.bPrefix)||e}${C.bem.b}${S!==null&&S.length>0?`${n}${S[0]}`:""}${r}${g})`}}}return Object.assign(s,{cB:(...g)=>i(o(g[0]),g[1],g[2]),cE:(...g)=>i(a(g[0]),g[1],g[2]),cM:(...g)=>i(l(g[0]),g[1],g[2]),cNotM:(...g)=>i(c(g[0]),g[1],g[2])}),s}function Js(t,e){return t+(e==="default"?"":e.replace(/^[a-z]/,n=>n.toUpperCase()))}Js("abc","def");const iS="n",sS=`.${iS}-`,oS="__",aS="--",qg=tS(),Kg=rS({blockPrefix:sS,elementPrefix:oS,modifierPrefix:aS});qg.use(Kg);const{c:te,find:bk}=qg,{cB:ke,cE:V,cM:wt,cNotM:Ii}=Kg;function oh(t){const e=he(t),n=de(e.value);return Tn(e,r=>{n.value=r}),typeof t=="function"?n:{__v_isRef:!0,get value(){return n.value},set value(r){t.set(r)}}}const lS={mousemoveoutside:new WeakMap,clickoutside:new WeakMap};function cS(t,e,n){if(t==="mousemoveoutside"){const r=i=>{e.contains(i.target)||n(i)};return{mousemove:r,touchstart:r}}else if(t==="clickoutside"){let r=!1;const i=o=>{r=!e.contains(o.target)},s=o=>{!r||e.contains(o.target)||n(o)};return{mousedown:i,mouseup:s,touchstart:i,touchend:s}}return console.error(`[evtd/create-trap-handler]: name \`${t}\` is invalid. This could be a bug of evtd.`),{}}function Gg(t,e,n){const r=lS[t];let i=r.get(e);i===void 0&&r.set(e,i=new WeakMap);let s=i.get(n);return s===void 0&&i.set(n,s=cS(t,e,n)),s}function uS(t,e,n,r){if(t==="mousemoveoutside"||t==="clickoutside"){const i=Gg(t,e,n);return Object.keys(i).forEach(s=>{Zn(s,document,i[s],r)}),!0}return!1}function dS(t,e,n,r){if(t==="mousemoveoutside"||t==="clickoutside"){const i=Gg(t,e,n);return Object.keys(i).forEach(s=>{Xt(s,document,i[s],r)}),!0}return!1}function hS(){if(typeof window=="undefined")return{on:()=>{},off:()=>{}};const t=new WeakMap,e=new WeakMap;function n(){t.set(this,!0)}function r(){t.set(this,!0),e.set(this,!0)}function i(E,x,D){const q=E[x];return E[x]=function(){return D.apply(E,arguments),q.apply(E,arguments)},E}function s(E,x){E[x]=Event.prototype[x]}const o=new WeakMap,a=Object.getOwnPropertyDescriptor(Event.prototype,"currentTarget");function l(){var E;return(E=o.get(this))!==null&&E!==void 0?E:null}function c(E,x){a!==void 0&&Object.defineProperty(E,"currentTarget",{configurable:!0,enumerable:!0,get:x!=null?x:a.get})}const u={bubble:{},capture:{}},d={};function h(){const E=function(x){const{type:D,eventPhase:q,target:Z,bubbles:L}=x;if(q===2)return;const re=q===1?"capture":"bubble";let we=Z;const Se=[];for(;we===null&&(we=window),Se.push(we),we!==window;)we=we.parentNode||null;const ce=u.capture[D],fe=u.bubble[D];if(i(x,"stopPropagation",n),i(x,"stopImmediatePropagation",r),c(x,l),re==="capture"){if(ce===void 0)return;for(let ie=Se.length-1;ie>=0&&!t.has(x);--ie){const Ue=Se[ie],_t=ce.get(Ue);if(_t!==void 0){o.set(x,Ue);for(const De of _t){if(e.has(x))break;De(x)}}if(ie===0&&!L&&fe!==void 0){const De=fe.get(Ue);if(De!==void 0)for(const ut of De){if(e.has(x))break;ut(x)}}}}else if(re==="bubble"){if(fe===void 0)return;for(let ie=0;ie<Se.length&&!t.has(x);++ie){const Ue=Se[ie],_t=fe.get(Ue);if(_t!==void 0){o.set(x,Ue);for(const De of _t){if(e.has(x))break;De(x)}}}}s(x,"stopPropagation"),s(x,"stopImmediatePropagation"),c(x)};return E.displayName="evtdUnifiedHandler",E}function _(){const E=function(x){const{type:D,eventPhase:q}=x;if(q!==2)return;const Z=d[D];Z!==void 0&&Z.forEach(L=>L(x))};return E.displayName="evtdUnifiedWindowEventHandler",E}const g=h(),C=_();function b(E,x){const D=u[E];return D[x]===void 0&&(D[x]=new Map,window.addEventListener(x,g,E==="capture")),D[x]}function S(E){return d[E]===void 0&&(d[E]=new Set,window.addEventListener(E,C)),d[E]}function F(E,x){let D=E.get(x);return D===void 0&&E.set(x,D=new Set),D}function z(E,x,D,q){const Z=u[x][D];if(Z!==void 0){const L=Z.get(E);if(L!==void 0&&L.has(q))return!0}return!1}function U(E,x){const D=d[E];return!!(D!==void 0&&D.has(x))}function X(E,x,D,q){let Z;if(typeof q=="object"&&q.once===!0?Z=ce=>{me(E,x,Z,q),D(ce)}:Z=D,uS(E,x,Z,q))return;const re=q===!0||typeof q=="object"&&q.capture===!0?"capture":"bubble",we=b(re,E),Se=F(we,x);if(Se.has(Z)||Se.add(Z),x===window){const ce=S(E);ce.has(Z)||ce.add(Z)}}function me(E,x,D,q){if(dS(E,x,D,q))return;const L=q===!0||typeof q=="object"&&q.capture===!0,re=L?"capture":"bubble",we=b(re,E),Se=F(we,x);if(x===window&&!z(x,L?"bubble":"capture",E,D)&&U(E,D)){const fe=d[E];fe.delete(D),fe.size===0&&(window.removeEventListener(E,C),d[E]=void 0)}Se.has(D)&&Se.delete(D),Se.size===0&&we.delete(x),we.size===0&&(window.removeEventListener(E,g,re==="capture"),u[re][E]=void 0)}return{on:X,off:me}}const{on:Zn,off:Xt}=hS();function fS(t,e){return Tn(t,n=>{n!==void 0&&(e.value=n)}),he(()=>t.value===void 0?e.value:t.value)}function pS(){const t=de(!1);return _r(()=>{t.value=!0}),Gl(t)}const gS=(typeof window=="undefined"?!1:/iPad|iPhone|iPod/.test(navigator.platform)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!window.MSStream;function mS(){return gS}const Yg=Symbol("@css-render/vue3-ssr");function _S(t,e){return`<style cssr-id="${t}">
${e}
</style>`}function vS(t,e){const n=Ye(Yg,null);if(n===null){console.error("[css-render/vue3-ssr]: no ssr context found.");return}const{styles:r,ids:i}=n;i.has(t)||r!==null&&(i.add(t),r.push(_S(t,e)))}function da(){const t=Ye(Yg,null);if(t!==null)return{adapter:vS,context:t}}function ah(t,e){console.error(`[vueuc/${t}]: ${e}`)}var sr=[],bS=function(){return sr.some(function(t){return t.activeTargets.length>0})},yS=function(){return sr.some(function(t){return t.skippedTargets.length>0})},lh="ResizeObserver loop completed with undelivered notifications.",wS=function(){var t;typeof ErrorEvent=="function"?t=new ErrorEvent("error",{message:lh}):(t=document.createEvent("Event"),t.initEvent("error",!1,!1),t.message=lh),window.dispatchEvent(t)},os;(function(t){t.BORDER_BOX="border-box",t.CONTENT_BOX="content-box",t.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box"})(os||(os={}));var or=function(t){return Object.freeze(t)},CS=function(){function t(e,n){this.inlineSize=e,this.blockSize=n,or(this)}return t}(),Xg=function(){function t(e,n,r,i){return this.x=e,this.y=n,this.width=r,this.height=i,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,or(this)}return t.prototype.toJSON=function(){var e=this,n=e.x,r=e.y,i=e.top,s=e.right,o=e.bottom,a=e.left,l=e.width,c=e.height;return{x:n,y:r,top:i,right:s,bottom:o,left:a,width:l,height:c}},t.fromRect=function(e){return new t(e.x,e.y,e.width,e.height)},t}(),ou=function(t){return t instanceof SVGElement&&"getBBox"in t},Jg=function(t){if(ou(t)){var e=t.getBBox(),n=e.width,r=e.height;return!n&&!r}var i=t,s=i.offsetWidth,o=i.offsetHeight;return!(s||o||t.getClientRects().length)},ch=function(t){var e,n;if(t instanceof Element)return!0;var r=(n=(e=t)===null||e===void 0?void 0:e.ownerDocument)===null||n===void 0?void 0:n.defaultView;return!!(r&&t instanceof r.Element)},ES=function(t){switch(t.tagName){case"INPUT":if(t.type!=="image")break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1},Hi=typeof window!="undefined"?window:{},$s=new WeakMap,uh=/auto|scroll/,TS=/^tb|vertical/,IS=/msie|trident/i.test(Hi.navigator&&Hi.navigator.userAgent),Wt=function(t){return parseFloat(t||"0")},$r=function(t,e,n){return t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=!1),new CS((n?e:t)||0,(n?t:e)||0)},dh=or({devicePixelContentBoxSize:$r(),borderBoxSize:$r(),contentBoxSize:$r(),contentRect:new Xg(0,0,0,0)}),Qg=function(t,e){if(e===void 0&&(e=!1),$s.has(t)&&!e)return $s.get(t);if(Jg(t))return $s.set(t,dh),dh;var n=getComputedStyle(t),r=ou(t)&&t.ownerSVGElement&&t.getBBox(),i=!IS&&n.boxSizing==="border-box",s=TS.test(n.writingMode||""),o=!r&&uh.test(n.overflowY||""),a=!r&&uh.test(n.overflowX||""),l=r?0:Wt(n.paddingTop),c=r?0:Wt(n.paddingRight),u=r?0:Wt(n.paddingBottom),d=r?0:Wt(n.paddingLeft),h=r?0:Wt(n.borderTopWidth),_=r?0:Wt(n.borderRightWidth),g=r?0:Wt(n.borderBottomWidth),C=r?0:Wt(n.borderLeftWidth),b=d+c,S=l+u,F=C+_,z=h+g,U=a?t.offsetHeight-z-t.clientHeight:0,X=o?t.offsetWidth-F-t.clientWidth:0,me=i?b+F:0,E=i?S+z:0,x=r?r.width:Wt(n.width)-me-X,D=r?r.height:Wt(n.height)-E-U,q=x+b+X+F,Z=D+S+U+z,L=or({devicePixelContentBoxSize:$r(Math.round(x*devicePixelRatio),Math.round(D*devicePixelRatio),s),borderBoxSize:$r(q,Z,s),contentBoxSize:$r(x,D,s),contentRect:new Xg(d,l,x,D)});return $s.set(t,L),L},Zg=function(t,e,n){var r=Qg(t,n),i=r.borderBoxSize,s=r.contentBoxSize,o=r.devicePixelContentBoxSize;switch(e){case os.DEVICE_PIXEL_CONTENT_BOX:return o;case os.BORDER_BOX:return i;default:return s}},SS=function(){function t(e){var n=Qg(e);this.target=e,this.contentRect=n.contentRect,this.borderBoxSize=or([n.borderBoxSize]),this.contentBoxSize=or([n.contentBoxSize]),this.devicePixelContentBoxSize=or([n.devicePixelContentBoxSize])}return t}(),em=function(t){if(Jg(t))return 1/0;for(var e=0,n=t.parentNode;n;)e+=1,n=n.parentNode;return e},xS=function(){var t=1/0,e=[];sr.forEach(function(o){if(o.activeTargets.length!==0){var a=[];o.activeTargets.forEach(function(c){var u=new SS(c.target),d=em(c.target);a.push(u),c.lastReportedSize=Zg(c.target,c.observedBox),d<t&&(t=d)}),e.push(function(){o.callback.call(o.observer,a,o.observer)}),o.activeTargets.splice(0,o.activeTargets.length)}});for(var n=0,r=e;n<r.length;n++){var i=r[n];i()}return t},hh=function(t){sr.forEach(function(n){n.activeTargets.splice(0,n.activeTargets.length),n.skippedTargets.splice(0,n.skippedTargets.length),n.observationTargets.forEach(function(i){i.isActive()&&(em(i.target)>t?n.activeTargets.push(i):n.skippedTargets.push(i))})})},RS=function(){var t=0;for(hh(t);bS();)t=xS(),hh(t);return yS()&&wS(),t>0},Fa,tm=[],PS=function(){return tm.splice(0).forEach(function(t){return t()})},AS=function(t){if(!Fa){var e=0,n=document.createTextNode(""),r={characterData:!0};new MutationObserver(function(){return PS()}).observe(n,r),Fa=function(){n.textContent=""+(e?e--:e++)}}tm.push(t),Fa()},kS=function(t){AS(function(){requestAnimationFrame(t)})},Qs=0,NS=function(){return!!Qs},OS=250,MS={attributes:!0,characterData:!0,childList:!0,subtree:!0},fh=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],ph=function(t){return t===void 0&&(t=0),Date.now()+t},$a=!1,DS=function(){function t(){var e=this;this.stopped=!0,this.listener=function(){return e.schedule()}}return t.prototype.run=function(e){var n=this;if(e===void 0&&(e=OS),!$a){$a=!0;var r=ph(e);kS(function(){var i=!1;try{i=RS()}finally{if($a=!1,e=r-ph(),!NS())return;i?n.run(1e3):e>0?n.run(e):n.start()}})}},t.prototype.schedule=function(){this.stop(),this.run()},t.prototype.observe=function(){var e=this,n=function(){return e.observer&&e.observer.observe(document.body,MS)};document.body?n():Hi.addEventListener("DOMContentLoaded",n)},t.prototype.start=function(){var e=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),fh.forEach(function(n){return Hi.addEventListener(n,e.listener,!0)}))},t.prototype.stop=function(){var e=this;this.stopped||(this.observer&&this.observer.disconnect(),fh.forEach(function(n){return Hi.removeEventListener(n,e.listener,!0)}),this.stopped=!0)},t}(),Pl=new DS,gh=function(t){!Qs&&t>0&&Pl.start(),Qs+=t,!Qs&&Pl.stop()},LS=function(t){return!ou(t)&&!ES(t)&&getComputedStyle(t).display==="inline"},FS=function(){function t(e,n){this.target=e,this.observedBox=n||os.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return t.prototype.isActive=function(){var e=Zg(this.target,this.observedBox,!0);return LS(this.target)&&(this.lastReportedSize=e),this.lastReportedSize.inlineSize!==e.inlineSize||this.lastReportedSize.blockSize!==e.blockSize},t}(),$S=function(){function t(e,n){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=e,this.callback=n}return t}(),Bs=new WeakMap,mh=function(t,e){for(var n=0;n<t.length;n+=1)if(t[n].target===e)return n;return-1},Us=function(){function t(){}return t.connect=function(e,n){var r=new $S(e,n);Bs.set(e,r)},t.observe=function(e,n,r){var i=Bs.get(e),s=i.observationTargets.length===0;mh(i.observationTargets,n)<0&&(s&&sr.push(i),i.observationTargets.push(new FS(n,r&&r.box)),gh(1),Pl.schedule())},t.unobserve=function(e,n){var r=Bs.get(e),i=mh(r.observationTargets,n),s=r.observationTargets.length===1;i>=0&&(s&&sr.splice(sr.indexOf(r),1),r.observationTargets.splice(i,1),gh(-1))},t.disconnect=function(e){var n=this,r=Bs.get(e);r.observationTargets.slice().forEach(function(i){return n.unobserve(e,i.target)}),r.activeTargets.splice(0,r.activeTargets.length)},t}(),BS=function(){function t(e){if(arguments.length===0)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if(typeof e!="function")throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");Us.connect(this,e)}return t.prototype.observe=function(e,n){if(arguments.length===0)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!ch(e))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");Us.observe(this,e,n)},t.prototype.unobserve=function(e){if(arguments.length===0)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!ch(e))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");Us.unobserve(this,e)},t.prototype.disconnect=function(){Us.disconnect(this)},t.toString=function(){return"function ResizeObserver () { [polyfill code] }"},t}();class US{constructor(){this.handleResize=this.handleResize.bind(this),this.observer=new BS(this.handleResize),this.elHandlersMap=new Map}handleResize(e){for(const n of e){const r=this.elHandlersMap.get(n.target);r!==void 0&&r(n)}}registerHandler(e,n){this.elHandlersMap.set(e,n),this.observer.observe(e)}unregisterHandler(e){!this.elHandlersMap.has(e)||(this.elHandlersMap.delete(e),this.observer.unobserve(e))}}var _h=new US,Al=Me({name:"ResizeObserver",props:{onResize:Function},setup(t){return{registered:!1,handleResize(e){const{onResize:n}=t;n!==void 0&&n(e)}}},mounted(){const t=this.$el;if(t===void 0){ah("resize-observer","$el does not exist.");return}if(t.nextElementSibling!==t.nextSibling&&t.nodeType===3&&t.nodeValue!==""){ah("resize-observer","$el can not be observed (it may be a text node).");return}t.nextElementSibling!==null&&(_h.registerHandler(t.nextElementSibling,this.handleResize),this.registered=!0)},beforeUnmount(){this.registered&&_h.unregisterHandler(this.$el.nextElementSibling)},render(){return gb(this.$slots,"default")}});const vh="n-form-item";function HS(t,{defaultSize:e="medium",mergedSize:n,mergedDisabled:r}={}){const i=Ye(vh,null);Hr(vh,null);const s=he(n?()=>n(i):()=>{const{size:l}=t;if(l)return l;if(i){const{mergedSize:c}=i;if(c.value!==void 0)return c.value}return e}),o=he(r?()=>r(i):()=>{const{disabled:l}=t;return l!==void 0?l:i?i.disabled.value:!1}),a=he(()=>{const{status:l}=t;return l||(i==null?void 0:i.mergedValidationStatus.value)});return Wo(()=>{i&&i.restoreValidation()}),{mergedSizeRef:s,mergedDisabledRef:o,mergedStatusRef:a,nTriggerFormBlur(){i&&i.handleContentBlur()},nTriggerFormChange(){i&&i.handleContentChange()},nTriggerFormFocus(){i&&i.handleContentFocus()},nTriggerFormInput(){i&&i.handleContentInput()}}}var zS=typeof global=="object"&&global&&global.Object===Object&&global,nm=zS,WS=typeof self=="object"&&self&&self.Object===Object&&self,jS=nm||WS||Function("return this")(),hi=jS,VS=hi.Symbol,Zr=VS,rm=Object.prototype,qS=rm.hasOwnProperty,KS=rm.toString,Si=Zr?Zr.toStringTag:void 0;function GS(t){var e=qS.call(t,Si),n=t[Si];try{t[Si]=void 0;var r=!0}catch{}var i=KS.call(t);return r&&(e?t[Si]=n:delete t[Si]),i}var YS=Object.prototype,XS=YS.toString;function JS(t){return XS.call(t)}var QS="[object Null]",ZS="[object Undefined]",bh=Zr?Zr.toStringTag:void 0;function ws(t){return t==null?t===void 0?ZS:QS:bh&&bh in Object(t)?GS(t):JS(t)}function fi(t){return t!=null&&typeof t=="object"}var ex="[object Symbol]";function tx(t){return typeof t=="symbol"||fi(t)&&ws(t)==ex}function nx(t,e){for(var n=-1,r=t==null?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i}var rx=Array.isArray,Ro=rx,ix=1/0,yh=Zr?Zr.prototype:void 0,wh=yh?yh.toString:void 0;function im(t){if(typeof t=="string")return t;if(Ro(t))return nx(t,im)+"";if(tx(t))return wh?wh.call(t):"";var e=t+"";return e=="0"&&1/t==-ix?"-0":e}function yr(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}function sm(t){return t}var sx="[object AsyncFunction]",ox="[object Function]",ax="[object GeneratorFunction]",lx="[object Proxy]";function au(t){if(!yr(t))return!1;var e=ws(t);return e==ox||e==ax||e==sx||e==lx}var cx=hi["__core-js_shared__"],Ba=cx,Ch=function(){var t=/[^.]+$/.exec(Ba&&Ba.keys&&Ba.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function ux(t){return!!Ch&&Ch in t}var dx=Function.prototype,hx=dx.toString;function fx(t){if(t!=null){try{return hx.call(t)}catch{}try{return t+""}catch{}}return""}var px=/[\\^$.*+?()[\]{}|]/g,gx=/^\[object .+?Constructor\]$/,mx=Function.prototype,_x=Object.prototype,vx=mx.toString,bx=_x.hasOwnProperty,yx=RegExp("^"+vx.call(bx).replace(px,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function wx(t){if(!yr(t)||ux(t))return!1;var e=au(t)?yx:gx;return e.test(fx(t))}function Cx(t,e){return t==null?void 0:t[e]}function lu(t,e){var n=Cx(t,e);return wx(n)?n:void 0}var Eh=Object.create,Ex=function(){function t(){}return function(e){if(!yr(e))return{};if(Eh)return Eh(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}(),Tx=Ex;function Ix(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}function Sx(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e}var xx=800,Rx=16,Px=Date.now;function Ax(t){var e=0,n=0;return function(){var r=Px(),i=Rx-(r-n);if(n=r,i>0){if(++e>=xx)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}function kx(t){return function(){return t}}var Nx=function(){try{var t=lu(Object,"defineProperty");return t({},"",{}),t}catch{}}(),Po=Nx,Ox=Po?function(t,e){return Po(t,"toString",{configurable:!0,enumerable:!1,value:kx(e),writable:!0})}:sm,Mx=Ox,Dx=Ax(Mx),Lx=Dx,Fx=9007199254740991,$x=/^(?:0|[1-9]\d*)$/;function om(t,e){var n=typeof t;return e=e==null?Fx:e,!!e&&(n=="number"||n!="symbol"&&$x.test(t))&&t>-1&&t%1==0&&t<e}function cu(t,e,n){e=="__proto__"&&Po?Po(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}function ha(t,e){return t===e||t!==t&&e!==e}var Bx=Object.prototype,Ux=Bx.hasOwnProperty;function Hx(t,e,n){var r=t[e];(!(Ux.call(t,e)&&ha(r,n))||n===void 0&&!(e in t))&&cu(t,e,n)}function zx(t,e,n,r){var i=!n;n||(n={});for(var s=-1,o=e.length;++s<o;){var a=e[s],l=r?r(n[a],t[a],a,n,t):void 0;l===void 0&&(l=t[a]),i?cu(n,a,l):Hx(n,a,l)}return n}var Th=Math.max;function Wx(t,e,n){return e=Th(e===void 0?t.length-1:e,0),function(){for(var r=arguments,i=-1,s=Th(r.length-e,0),o=Array(s);++i<s;)o[i]=r[e+i];i=-1;for(var a=Array(e+1);++i<e;)a[i]=r[i];return a[e]=n(o),Ix(t,this,a)}}function jx(t,e){return Lx(Wx(t,e,sm),t+"")}var Vx=9007199254740991;function am(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=Vx}function uu(t){return t!=null&&am(t.length)&&!au(t)}function qx(t,e,n){if(!yr(n))return!1;var r=typeof e;return(r=="number"?uu(n)&&om(e,n.length):r=="string"&&e in n)?ha(n[e],t):!1}function Kx(t){return jx(function(e,n){var r=-1,i=n.length,s=i>1?n[i-1]:void 0,o=i>2?n[2]:void 0;for(s=t.length>3&&typeof s=="function"?(i--,s):void 0,o&&qx(n[0],n[1],o)&&(s=i<3?void 0:s,i=1),e=Object(e);++r<i;){var a=n[r];a&&t(e,a,r,s)}return e})}var Gx=Object.prototype;function lm(t){var e=t&&t.constructor,n=typeof e=="function"&&e.prototype||Gx;return t===n}function Yx(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}var Xx="[object Arguments]";function Ih(t){return fi(t)&&ws(t)==Xx}var cm=Object.prototype,Jx=cm.hasOwnProperty,Qx=cm.propertyIsEnumerable,Zx=Ih(function(){return arguments}())?Ih:function(t){return fi(t)&&Jx.call(t,"callee")&&!Qx.call(t,"callee")},kl=Zx;function eR(){return!1}var um=typeof Et=="object"&&Et&&!Et.nodeType&&Et,Sh=um&&typeof Tt=="object"&&Tt&&!Tt.nodeType&&Tt,tR=Sh&&Sh.exports===um,xh=tR?hi.Buffer:void 0,nR=xh?xh.isBuffer:void 0,rR=nR||eR,dm=rR,iR="[object Arguments]",sR="[object Array]",oR="[object Boolean]",aR="[object Date]",lR="[object Error]",cR="[object Function]",uR="[object Map]",dR="[object Number]",hR="[object Object]",fR="[object RegExp]",pR="[object Set]",gR="[object String]",mR="[object WeakMap]",_R="[object ArrayBuffer]",vR="[object DataView]",bR="[object Float32Array]",yR="[object Float64Array]",wR="[object Int8Array]",CR="[object Int16Array]",ER="[object Int32Array]",TR="[object Uint8Array]",IR="[object Uint8ClampedArray]",SR="[object Uint16Array]",xR="[object Uint32Array]",Ne={};Ne[bR]=Ne[yR]=Ne[wR]=Ne[CR]=Ne[ER]=Ne[TR]=Ne[IR]=Ne[SR]=Ne[xR]=!0;Ne[iR]=Ne[sR]=Ne[_R]=Ne[oR]=Ne[vR]=Ne[aR]=Ne[lR]=Ne[cR]=Ne[uR]=Ne[dR]=Ne[hR]=Ne[fR]=Ne[pR]=Ne[gR]=Ne[mR]=!1;function RR(t){return fi(t)&&am(t.length)&&!!Ne[ws(t)]}function PR(t){return function(e){return t(e)}}var hm=typeof Et=="object"&&Et&&!Et.nodeType&&Et,zi=hm&&typeof Tt=="object"&&Tt&&!Tt.nodeType&&Tt,AR=zi&&zi.exports===hm,Ua=AR&&nm.process,kR=function(){try{var t=zi&&zi.require&&zi.require("util").types;return t||Ua&&Ua.binding&&Ua.binding("util")}catch{}}(),Rh=kR,Ph=Rh&&Rh.isTypedArray,NR=Ph?PR(Ph):RR,fm=NR,OR=Object.prototype,MR=OR.hasOwnProperty;function DR(t,e){var n=Ro(t),r=!n&&kl(t),i=!n&&!r&&dm(t),s=!n&&!r&&!i&&fm(t),o=n||r||i||s,a=o?Yx(t.length,String):[],l=a.length;for(var c in t)(e||MR.call(t,c))&&!(o&&(c=="length"||i&&(c=="offset"||c=="parent")||s&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||om(c,l)))&&a.push(c);return a}function LR(t,e){return function(n){return t(e(n))}}function FR(t){var e=[];if(t!=null)for(var n in Object(t))e.push(n);return e}var $R=Object.prototype,BR=$R.hasOwnProperty;function UR(t){if(!yr(t))return FR(t);var e=lm(t),n=[];for(var r in t)r=="constructor"&&(e||!BR.call(t,r))||n.push(r);return n}function pm(t){return uu(t)?DR(t,!0):UR(t)}var HR=lu(Object,"create"),as=HR;function zR(){this.__data__=as?as(null):{},this.size=0}function WR(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var jR="__lodash_hash_undefined__",VR=Object.prototype,qR=VR.hasOwnProperty;function KR(t){var e=this.__data__;if(as){var n=e[t];return n===jR?void 0:n}return qR.call(e,t)?e[t]:void 0}var GR=Object.prototype,YR=GR.hasOwnProperty;function XR(t){var e=this.__data__;return as?e[t]!==void 0:YR.call(e,t)}var JR="__lodash_hash_undefined__";function QR(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=as&&e===void 0?JR:e,this}function mr(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}mr.prototype.clear=zR;mr.prototype.delete=WR;mr.prototype.get=KR;mr.prototype.has=XR;mr.prototype.set=QR;function ZR(){this.__data__=[],this.size=0}function fa(t,e){for(var n=t.length;n--;)if(ha(t[n][0],e))return n;return-1}var e1=Array.prototype,t1=e1.splice;function n1(t){var e=this.__data__,n=fa(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():t1.call(e,n,1),--this.size,!0}function r1(t){var e=this.__data__,n=fa(e,t);return n<0?void 0:e[n][1]}function i1(t){return fa(this.__data__,t)>-1}function s1(t,e){var n=this.__data__,r=fa(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}function ln(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}ln.prototype.clear=ZR;ln.prototype.delete=n1;ln.prototype.get=r1;ln.prototype.has=i1;ln.prototype.set=s1;var o1=lu(hi,"Map"),gm=o1;function a1(){this.size=0,this.__data__={hash:new mr,map:new(gm||ln),string:new mr}}function l1(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function pa(t,e){var n=t.__data__;return l1(e)?n[typeof e=="string"?"string":"hash"]:n.map}function c1(t){var e=pa(this,t).delete(t);return this.size-=e?1:0,e}function u1(t){return pa(this,t).get(t)}function d1(t){return pa(this,t).has(t)}function h1(t,e){var n=pa(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this}function pi(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}pi.prototype.clear=a1;pi.prototype.delete=c1;pi.prototype.get=u1;pi.prototype.has=d1;pi.prototype.set=h1;function f1(t){return t==null?"":im(t)}var p1=LR(Object.getPrototypeOf,Object),mm=p1,g1="[object Object]",m1=Function.prototype,_1=Object.prototype,_m=m1.toString,v1=_1.hasOwnProperty,b1=_m.call(Object);function y1(t){if(!fi(t)||ws(t)!=g1)return!1;var e=mm(t);if(e===null)return!0;var n=v1.call(e,"constructor")&&e.constructor;return typeof n=="function"&&n instanceof n&&_m.call(n)==b1}function w1(t,e,n){var r=-1,i=t.length;e<0&&(e=-e>i?0:i+e),n=n>i?i:n,n<0&&(n+=i),i=e>n?0:n-e>>>0,e>>>=0;for(var s=Array(i);++r<i;)s[r]=t[r+e];return s}function C1(t,e,n){var r=t.length;return n=n===void 0?r:n,!e&&n>=r?t:w1(t,e,n)}var E1="\\ud800-\\udfff",T1="\\u0300-\\u036f",I1="\\ufe20-\\ufe2f",S1="\\u20d0-\\u20ff",x1=T1+I1+S1,R1="\\ufe0e\\ufe0f",P1="\\u200d",A1=RegExp("["+P1+E1+x1+R1+"]");function vm(t){return A1.test(t)}function k1(t){return t.split("")}var bm="\\ud800-\\udfff",N1="\\u0300-\\u036f",O1="\\ufe20-\\ufe2f",M1="\\u20d0-\\u20ff",D1=N1+O1+M1,L1="\\ufe0e\\ufe0f",F1="["+bm+"]",Nl="["+D1+"]",Ol="\\ud83c[\\udffb-\\udfff]",$1="(?:"+Nl+"|"+Ol+")",ym="[^"+bm+"]",wm="(?:\\ud83c[\\udde6-\\uddff]){2}",Cm="[\\ud800-\\udbff][\\udc00-\\udfff]",B1="\\u200d",Em=$1+"?",Tm="["+L1+"]?",U1="(?:"+B1+"(?:"+[ym,wm,Cm].join("|")+")"+Tm+Em+")*",H1=Tm+Em+U1,z1="(?:"+[ym+Nl+"?",Nl,wm,Cm,F1].join("|")+")",W1=RegExp(Ol+"(?="+Ol+")|"+z1+H1,"g");function j1(t){return t.match(W1)||[]}function V1(t){return vm(t)?j1(t):k1(t)}function q1(t){return function(e){e=f1(e);var n=vm(e)?V1(e):void 0,r=n?n[0]:e.charAt(0),i=n?C1(n,1).join(""):e.slice(1);return r[t]()+i}}var K1=q1("toUpperCase"),G1=K1;function Y1(){this.__data__=new ln,this.size=0}function X1(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}function J1(t){return this.__data__.get(t)}function Q1(t){return this.__data__.has(t)}var Z1=200;function eP(t,e){var n=this.__data__;if(n instanceof ln){var r=n.__data__;if(!gm||r.length<Z1-1)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new pi(r)}return n.set(t,e),this.size=n.size,this}function gi(t){var e=this.__data__=new ln(t);this.size=e.size}gi.prototype.clear=Y1;gi.prototype.delete=X1;gi.prototype.get=J1;gi.prototype.has=Q1;gi.prototype.set=eP;var Im=typeof Et=="object"&&Et&&!Et.nodeType&&Et,Ah=Im&&typeof Tt=="object"&&Tt&&!Tt.nodeType&&Tt,tP=Ah&&Ah.exports===Im,kh=tP?hi.Buffer:void 0,Nh=kh?kh.allocUnsafe:void 0;function nP(t,e){if(e)return t.slice();var n=t.length,r=Nh?Nh(n):new t.constructor(n);return t.copy(r),r}var rP=hi.Uint8Array,Oh=rP;function iP(t){var e=new t.constructor(t.byteLength);return new Oh(e).set(new Oh(t)),e}function sP(t,e){var n=e?iP(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}function oP(t){return typeof t.constructor=="function"&&!lm(t)?Tx(mm(t)):{}}function aP(t){return function(e,n,r){for(var i=-1,s=Object(e),o=r(e),a=o.length;a--;){var l=o[t?a:++i];if(n(s[l],l,s)===!1)break}return e}}var lP=aP(),cP=lP;function Ml(t,e,n){(n!==void 0&&!ha(t[e],n)||n===void 0&&!(e in t))&&cu(t,e,n)}function uP(t){return fi(t)&&uu(t)}function Dl(t,e){if(!(e==="constructor"&&typeof t[e]=="function")&&e!="__proto__")return t[e]}function dP(t){return zx(t,pm(t))}function hP(t,e,n,r,i,s,o){var a=Dl(t,n),l=Dl(e,n),c=o.get(l);if(c){Ml(t,n,c);return}var u=s?s(a,l,n+"",t,e,o):void 0,d=u===void 0;if(d){var h=Ro(l),_=!h&&dm(l),g=!h&&!_&&fm(l);u=l,h||_||g?Ro(a)?u=a:uP(a)?u=Sx(a):_?(d=!1,u=nP(l,!0)):g?(d=!1,u=sP(l,!0)):u=[]:y1(l)||kl(l)?(u=a,kl(a)?u=dP(a):(!yr(a)||au(a))&&(u=oP(l))):d=!1}d&&(o.set(l,u),i(u,l,r,s,o),o.delete(l)),Ml(t,n,u)}function Sm(t,e,n,r,i){t!==e&&cP(e,function(s,o){if(i||(i=new gi),yr(s))hP(t,e,o,n,Sm,r,i);else{var a=r?r(Dl(t,o),s,o+"",t,e,i):void 0;a===void 0&&(a=s),Ml(t,o,a)}},pm)}var fP=Kx(function(t,e,n){Sm(t,e,n)}),Hs=fP,ga={fontFamily:'v-sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',fontFamilyMono:"v-mono, SFMono-Regular, Menlo, Consolas, Courier, monospace",fontWeight:"400",fontWeightStrong:"500",cubicBezierEaseInOut:"cubic-bezier(.4, 0, .2, 1)",cubicBezierEaseOut:"cubic-bezier(0, 0, .2, 1)",cubicBezierEaseIn:"cubic-bezier(.4, 0, 1, 1)",borderRadius:"3px",borderRadiusSmall:"2px",fontSize:"14px",fontSizeTiny:"12px",fontSizeSmall:"14px",fontSizeMedium:"14px",fontSizeLarge:"15px",fontSizeHuge:"16px",lineHeight:"1.6",heightTiny:"22px",heightSmall:"28px",heightMedium:"34px",heightLarge:"40px",heightHuge:"46px"};const{fontSize:pP,fontFamily:gP,lineHeight:mP}=ga;var xm=te("body",`
 margin: 0;
 font-size: ${pP};
 font-family: ${gP};
 line-height: ${mP};
 -webkit-text-size-adjust: 100%;
 -webkit-tap-highlight-color: transparent;
`,[te("input",`
 font-family: inherit;
 font-size: inherit;
 `)]);const Cs="n-config-provider",ls="naive-ui-style";function Es(t,e,n,r,i,s){const o=da();if(n){const c=()=>{const u=s==null?void 0:s.value;n.mount({id:u===void 0?e:u+e,head:!0,props:{bPrefix:u?`.${u}-`:void 0},anchorMetaName:ls,ssr:o}),xm.mount({id:"n-global",head:!0,anchorMetaName:ls,ssr:o})};o?c():zo(c)}const a=Ye(Cs,null);return he(()=>{var c;const{theme:{common:u,self:d,peers:h={}}={},themeOverrides:_={},builtinThemeOverrides:g={}}=i,{common:C,peers:b}=_,{common:S=void 0,[t]:{common:F=void 0,self:z=void 0,peers:U={}}={}}=(a==null?void 0:a.mergedThemeRef.value)||{},{common:X=void 0,[t]:me={}}=(a==null?void 0:a.mergedThemeOverridesRef.value)||{},{common:E,peers:x={}}=me,D=Hs({},u||F||S||r.common,X,E,C),q=Hs((c=d||z||r.self)===null||c===void 0?void 0:c(D),g,me,_);return{common:D,self:q,peers:Hs({},r.peers,U,h),peerOverrides:Hs({},x,b)}})}Es.props={theme:Object,themeOverrides:Object,builtinThemeOverrides:Object};const _P="n";function Rm(t={},e={defaultBordered:!0}){const n=Ye(Cs,null);return{inlineThemeDisabled:n==null?void 0:n.inlineThemeDisabled,mergedRtlRef:n==null?void 0:n.mergedRtlRef,mergedComponentPropsRef:n==null?void 0:n.mergedComponentPropsRef,mergedBreakpointsRef:n==null?void 0:n.mergedBreakpointsRef,mergedBorderedRef:he(()=>{var r,i;const{bordered:s}=t;return s!==void 0?s:(i=(r=n==null?void 0:n.mergedBorderedRef.value)!==null&&r!==void 0?r:e.defaultBordered)!==null&&i!==void 0?i:!0}),mergedClsPrefixRef:he(()=>(n==null?void 0:n.mergedClsPrefixRef.value)||_P),namespaceRef:he(()=>n==null?void 0:n.mergedNamespaceRef.value)}}const vP={name:"en-US",global:{undo:"Undo",redo:"Redo",confirm:"Confirm"},Popconfirm:{positiveText:"Confirm",negativeText:"Cancel"},Cascader:{placeholder:"Please Select",loading:"Loading",loadingRequiredMessage:t=>`Please load all ${t}'s descendants before checking it.`},Time:{dateFormat:"yyyy-MM-dd",dateTimeFormat:"yyyy-MM-dd HH:mm:ss"},DatePicker:{yearFormat:"yyyy",monthFormat:"MMM",dayFormat:"eeeeee",yearTypeFormat:"yyyy",monthTypeFormat:"yyyy-MM",dateFormat:"yyyy-MM-dd",dateTimeFormat:"yyyy-MM-dd HH:mm:ss",quarterFormat:"yyyy-qqq",clear:"Clear",now:"Now",confirm:"Confirm",selectTime:"Select Time",selectDate:"Select Date",datePlaceholder:"Select Date",datetimePlaceholder:"Select Date and Time",monthPlaceholder:"Select Month",yearPlaceholder:"Select Year",quarterPlaceholder:"Select Quarter",startDatePlaceholder:"Start Date",endDatePlaceholder:"End Date",startDatetimePlaceholder:"Start Date and Time",endDatetimePlaceholder:"End Date and Time",startMonthPlaceholder:"Start Month",endMonthPlaceholder:"End Month",monthBeforeYear:!0,firstDayOfWeek:6,today:"Today"},DataTable:{checkTableAll:"Select all in the table",uncheckTableAll:"Unselect all in the table",confirm:"Confirm",clear:"Clear"},Transfer:{sourceTitle:"Source",targetTitle:"Target"},Empty:{description:"No Data"},Select:{placeholder:"Please Select"},TimePicker:{placeholder:"Select Time",positiveText:"OK",negativeText:"Cancel",now:"Now"},Pagination:{goto:"Goto",selectionSuffix:"page"},DynamicTags:{add:"Add"},Log:{loading:"Loading"},Input:{placeholder:"Please Input"},InputNumber:{placeholder:"Please Input"},DynamicInput:{create:"Create"},ThemeEditor:{title:"Theme Editor",clearAllVars:"Clear All Variables",clearSearch:"Clear Search",filterCompName:"Filter Component Name",filterVarName:"Filter Variable Name",import:"Import",export:"Export",restore:"Reset to Default"},Image:{tipPrevious:"Previous picture (\u2190)",tipNext:"Next picture (\u2192)",tipCounterclockwise:"Counterclockwise",tipClockwise:"Clockwise",tipZoomOut:"Zoom out",tipZoomIn:"Zoom in",tipClose:"Close (Esc)"}};var bP=vP;function Ha(t){return function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,r=t.formats[n]||t.formats[t.defaultWidth];return r}}function xi(t){return function(e,n){var r=n||{},i=r.context?String(r.context):"standalone",s;if(i==="formatting"&&t.formattingValues){var o=t.defaultFormattingWidth||t.defaultWidth,a=r.width?String(r.width):o;s=t.formattingValues[a]||t.formattingValues[o]}else{var l=t.defaultWidth,c=r.width?String(r.width):t.defaultWidth;s=t.values[c]||t.values[l]}var u=t.argumentCallback?t.argumentCallback(e):e;return s[u]}}function yP(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.match(t.matchPattern);if(!r)return null;var i=r[0],s=e.match(t.parsePattern);if(!s)return null;var o=t.valueCallback?t.valueCallback(s[0]):s[0];o=n.valueCallback?n.valueCallback(o):o;var a=e.slice(i.length);return{value:o,rest:a}}}function Ri(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.width,i=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],s=e.match(i);if(!s)return null;var o=s[0],a=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],l=Array.isArray(a)?CP(a,function(d){return d.test(o)}):wP(a,function(d){return d.test(o)}),c;c=t.valueCallback?t.valueCallback(l):l,c=n.valueCallback?n.valueCallback(c):c;var u=e.slice(o.length);return{value:c,rest:u}}}function wP(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function CP(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}var EP={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},TP=function(t,e,n){var r,i=EP[t];return typeof i=="string"?r=i:e===1?r=i.one:r=i.other.replace("{{count}}",e.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},IP=TP,SP={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},xP={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},RP={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},PP={date:Ha({formats:SP,defaultWidth:"full"}),time:Ha({formats:xP,defaultWidth:"full"}),dateTime:Ha({formats:RP,defaultWidth:"full"})},AP=PP,kP={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},NP=function(t,e,n,r){return kP[t]},OP=NP,MP={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},DP={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},LP={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},FP={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},$P={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},BP={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},UP=function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},HP={ordinalNumber:UP,era:xi({values:MP,defaultWidth:"wide"}),quarter:xi({values:DP,defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:xi({values:LP,defaultWidth:"wide"}),day:xi({values:FP,defaultWidth:"wide"}),dayPeriod:xi({values:$P,defaultWidth:"wide",formattingValues:BP,defaultFormattingWidth:"wide"})},zP=HP,WP=/^(\d+)(th|st|nd|rd)?/i,jP=/\d+/i,VP={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},qP={any:[/^b/i,/^(a|c)/i]},KP={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},GP={any:[/1/i,/2/i,/3/i,/4/i]},YP={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},XP={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},JP={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},QP={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},ZP={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},eA={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},tA={ordinalNumber:yP({matchPattern:WP,parsePattern:jP,valueCallback:function(t){return parseInt(t,10)}}),era:Ri({matchPatterns:VP,defaultMatchWidth:"wide",parsePatterns:qP,defaultParseWidth:"any"}),quarter:Ri({matchPatterns:KP,defaultMatchWidth:"wide",parsePatterns:GP,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:Ri({matchPatterns:YP,defaultMatchWidth:"wide",parsePatterns:XP,defaultParseWidth:"any"}),day:Ri({matchPatterns:JP,defaultMatchWidth:"wide",parsePatterns:QP,defaultParseWidth:"any"}),dayPeriod:Ri({matchPatterns:ZP,defaultMatchWidth:"any",parsePatterns:eA,defaultParseWidth:"any"})},nA=tA,rA={code:"en-US",formatDistance:IP,formatLong:AP,formatRelative:OP,localize:zP,match:nA,options:{weekStartsOn:0,firstWeekContainsDate:1}},iA=rA;const sA={name:"en-US",locale:iA};var oA=sA;function aA(t){const{mergedLocaleRef:e,mergedDateLocaleRef:n}=Ye(Cs,null)||{},r=he(()=>{var s,o;return(o=(s=e==null?void 0:e.value)===null||s===void 0?void 0:s[t])!==null&&o!==void 0?o:bP[t]});return{dateLocaleRef:he(()=>{var s;return(s=n==null?void 0:n.value)!==null&&s!==void 0?s:oA}),localeRef:r}}function du(t,e,n){if(!e)return;const r=da(),i=()=>{const s=n==null?void 0:n.value;e.mount({id:s===void 0?t:s+t,head:!0,anchorMetaName:ls,props:{bPrefix:s?`.${s}-`:void 0},ssr:r}),xm.mount({id:"n-global",head:!0,anchorMetaName:ls,ssr:r})};r?i():zo(i)}function Pm(t,e,n,r){var i;n||$I("useThemeClass","cssVarsRef is not passed");const s=(i=Ye(Cs,null))===null||i===void 0?void 0:i.mergedThemeHashRef,o=de(""),a=da();let l;const c=`__${t}`,u=()=>{let d=c;const h=e?e.value:void 0,_=s==null?void 0:s.value;_&&(d+="-"+_),h&&(d+="-"+h);const{themeOverrides:g,builtinThemeOverrides:C}=r;g&&(d+="-"+Rl(JSON.stringify(g))),C&&(d+="-"+Rl(JSON.stringify(C))),o.value=d,l=()=>{const b=n.value;let S="";for(const F in b)S+=`${F}: ${b[F]};`;te(`.${d}`,S).mount({id:d,ssr:a}),l=void 0}};return zr(()=>{u()}),{themeClass:o,onRender:()=>{l==null||l()}}}function lA(t,e){return Me({name:G1(t),setup(){var n;const r=(n=Ye(Cs,null))===null||n===void 0?void 0:n.mergedIconsRef;return()=>{var i;const s=(i=r==null?void 0:r.value)===null||i===void 0?void 0:i[t];return s?s():e}}})}var cA=Me({name:"Eye",render(){return O("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},O("path",{d:"M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}),O("circle",{cx:"256",cy:"256",r:"80",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"}))}}),uA=Me({name:"EyeOff",render(){return O("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},O("path",{d:"M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448z",fill:"currentColor"}),O("path",{d:"M255.66 384c-41.49 0-81.5-12.28-118.92-36.5c-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 0 0 .14-2.94L93.5 161.38a2 2 0 0 0-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0 0 75.8-12.58a2 2 0 0 0 .77-3.31l-21.58-21.58a4 4 0 0 0-3.83-1a204.8 204.8 0 0 1-51.16 6.47z",fill:"currentColor"}),O("path",{d:"M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 0 0-74.89 12.83a2 2 0 0 0-.75 3.31l21.55 21.55a4 4 0 0 0 3.88 1a192.82 192.82 0 0 1 50.21-6.69c40.69 0 80.58 12.43 118.55 37c34.71 22.4 65.74 53.88 89.76 91a.13.13 0 0 1 0 .16a310.72 310.72 0 0 1-64.12 72.73a2 2 0 0 0-.15 2.95l19.9 19.89a2 2 0 0 0 2.7.13a343.49 343.49 0 0 0 68.64-78.48a32.2 32.2 0 0 0-.1-34.78z",fill:"currentColor"}),O("path",{d:"M256 160a95.88 95.88 0 0 0-21.37 2.4a2 2 0 0 0-1 3.38l112.59 112.56a2 2 0 0 0 3.38-1A96 96 0 0 0 256 160z",fill:"currentColor"}),O("path",{d:"M165.78 233.66a2 2 0 0 0-3.38 1a96 96 0 0 0 115 115a2 2 0 0 0 1-3.38z",fill:"currentColor"}))}}),dA=Me({name:"ChevronDown",render(){return O("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},O("path",{d:"M3.14645 5.64645C3.34171 5.45118 3.65829 5.45118 3.85355 5.64645L8 9.79289L12.1464 5.64645C12.3417 5.45118 12.6583 5.45118 12.8536 5.64645C13.0488 5.84171 13.0488 6.15829 12.8536 6.35355L8.35355 10.8536C8.15829 11.0488 7.84171 11.0488 7.64645 10.8536L3.14645 6.35355C2.95118 6.15829 2.95118 5.84171 3.14645 5.64645Z",fill:"currentColor"}))}}),hA=lA("clear",O("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},O("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},O("g",{fill:"currentColor","fill-rule":"nonzero"},O("path",{d:"M8,2 C11.3137085,2 14,4.6862915 14,8 C14,11.3137085 11.3137085,14 8,14 C4.6862915,14 2,11.3137085 2,8 C2,4.6862915 4.6862915,2 8,2 Z M6.5343055,5.83859116 C6.33943736,5.70359511 6.07001296,5.72288026 5.89644661,5.89644661 L5.89644661,5.89644661 L5.83859116,5.9656945 C5.70359511,6.16056264 5.72288026,6.42998704 5.89644661,6.60355339 L5.89644661,6.60355339 L7.293,8 L5.89644661,9.39644661 L5.83859116,9.4656945 C5.70359511,9.66056264 5.72288026,9.92998704 5.89644661,10.1035534 L5.89644661,10.1035534 L5.9656945,10.1614088 C6.16056264,10.2964049 6.42998704,10.2771197 6.60355339,10.1035534 L6.60355339,10.1035534 L8,8.707 L9.39644661,10.1035534 L9.4656945,10.1614088 C9.66056264,10.2964049 9.92998704,10.2771197 10.1035534,10.1035534 L10.1035534,10.1035534 L10.1614088,10.0343055 C10.2964049,9.83943736 10.2771197,9.57001296 10.1035534,9.39644661 L10.1035534,9.39644661 L8.707,8 L10.1035534,6.60355339 L10.1614088,6.5343055 C10.2964049,6.33943736 10.2771197,6.07001296 10.1035534,5.89644661 L10.1035534,5.89644661 L10.0343055,5.83859116 C9.83943736,5.70359511 9.57001296,5.72288026 9.39644661,5.89644661 L9.39644661,5.89644661 L8,7.293 L6.60355339,5.89644661 Z"}))))),Am=Me({name:"BaseIconSwitchTransition",setup(t,{slots:e}){const n=pS();return()=>O(Xi,{name:"icon-switch-transition",appear:n.value},e)}}),fA=ke("base-icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[te("svg",{height:"1em",width:"1em"})]),hu=Me({name:"BaseIcon",props:{role:String,ariaLabel:String,ariaDisabled:{type:Boolean,default:void 0},ariaHidden:{type:Boolean,default:void 0},clsPrefix:{type:String,required:!0},onClick:Function,onMousedown:Function,onMouseup:Function},setup(t){du("-base-icon",fA,Do(t,"clsPrefix"))},render(){return O("i",{class:`${this.clsPrefix}-base-icon`,onClick:this.onClick,onMousedown:this.onMousedown,onMouseup:this.onMouseup,role:this.role,"aria-label":this.ariaLabel,"aria-hidden":this.ariaHidden,"aria-disabled":this.ariaDisabled},this.$slots)}});const{cubicBezierEaseInOut:pA}=ga;function Ll({originalTransform:t="",left:e=0,top:n=0,transition:r=`all .3s ${pA} !important`}={}){return[te("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to",{transform:t+" scale(0.75)",left:e,top:n,opacity:0}),te("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from",{transform:`scale(1) ${t}`,left:e,top:n,opacity:1}),te("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active",{transformOrigin:"center",position:"absolute",left:e,top:n,transition:r})]}var gA=te([te("@keyframes loading-container-rotate",`
 to {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
 }
 `),te("@keyframes loading-layer-rotate",`
 12.5% {
 -webkit-transform: rotate(135deg);
 transform: rotate(135deg);
 }
 25% {
 -webkit-transform: rotate(270deg);
 transform: rotate(270deg);
 }
 37.5% {
 -webkit-transform: rotate(405deg);
 transform: rotate(405deg);
 }
 50% {
 -webkit-transform: rotate(540deg);
 transform: rotate(540deg);
 }
 62.5% {
 -webkit-transform: rotate(675deg);
 transform: rotate(675deg);
 }
 75% {
 -webkit-transform: rotate(810deg);
 transform: rotate(810deg);
 }
 87.5% {
 -webkit-transform: rotate(945deg);
 transform: rotate(945deg);
 }
 100% {
 -webkit-transform: rotate(1080deg);
 transform: rotate(1080deg);
 } 
 `),te("@keyframes loading-left-spin",`
 from {
 -webkit-transform: rotate(265deg);
 transform: rotate(265deg);
 }
 50% {
 -webkit-transform: rotate(130deg);
 transform: rotate(130deg);
 }
 to {
 -webkit-transform: rotate(265deg);
 transform: rotate(265deg);
 }
 `),te("@keyframes loading-right-spin",`
 from {
 -webkit-transform: rotate(-265deg);
 transform: rotate(-265deg);
 }
 50% {
 -webkit-transform: rotate(-130deg);
 transform: rotate(-130deg);
 }
 to {
 -webkit-transform: rotate(-265deg);
 transform: rotate(-265deg);
 }
 `),ke("base-loading",`
 position: relative;
 line-height: 0;
 width: 1em;
 height: 1em;
 `,[V("transition-wrapper",`
 position: absolute;
 width: 100%;
 height: 100%;
 `,[Ll()]),V("container",`
 display: inline-flex;
 position: relative;
 direction: ltr;
 line-height: 0;
 animation: loading-container-rotate 1568.2352941176ms linear infinite;
 font-size: 0;
 letter-spacing: 0;
 white-space: nowrap;
 opacity: 1;
 width: 100%;
 height: 100%;
 `,[V("svg",`
 stroke: var(--n-text-color);
 fill: transparent;
 position: absolute;
 height: 100%;
 overflow: hidden;
 `),V("container-layer",`
 position: absolute;
 width: 100%;
 height: 100%;
 animation: loading-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 `,[V("container-layer-left",`
 display: inline-flex;
 position: relative;
 width: 50%;
 height: 100%;
 overflow: hidden;
 `,[V("svg",`
 animation: loading-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 width: 200%;
 `)]),V("container-layer-patch",`
 position: absolute;
 top: 0;
 left: 47.5%;
 box-sizing: border-box;
 width: 5%;
 height: 100%;
 overflow: hidden;
 `,[V("svg",`
 left: -900%;
 width: 2000%;
 transform: rotate(180deg);
 `)]),V("container-layer-right",`
 display: inline-flex;
 position: relative;
 width: 50%;
 height: 100%;
 overflow: hidden;
 `,[V("svg",`
 animation: loading-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 left: -100%;
 width: 200%;
 `)])])]),V("placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[Ll({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})])])]),mA=Me({name:"BaseLoading",props:{clsPrefix:{type:String,required:!0},scale:{type:Number,default:1},radius:{type:Number,default:100},strokeWidth:{type:Number,default:28},stroke:{type:String,default:void 0},show:{type:Boolean,default:!0}},setup(t){du("-base-loading",gA,Do(t,"clsPrefix"))},render(){const{clsPrefix:t,radius:e,strokeWidth:n,stroke:r,scale:i}=this,s=e/i;return O("div",{class:`${t}-base-loading`,role:"img","aria-label":"loading"},O(Am,null,{default:()=>this.show?O("div",{key:"icon",class:`${t}-base-loading__transition-wrapper`},O("div",{class:`${t}-base-loading__container`},O("div",{class:`${t}-base-loading__container-layer`},O("div",{class:`${t}-base-loading__container-layer-left`},O("svg",{class:`${t}-base-loading__svg`,viewBox:`0 0 ${2*s} ${2*s}`,xmlns:"http://www.w3.org/2000/svg",style:{color:r}},O("circle",{fill:"none",stroke:"currentColor","stroke-width":n,"stroke-linecap":"round",cx:s,cy:s,r:e-n/2,"stroke-dasharray":4.91*e,"stroke-dashoffset":2.46*e}))),O("div",{class:`${t}-base-loading__container-layer-patch`},O("svg",{class:`${t}-base-loading__svg`,viewBox:`0 0 ${2*s} ${2*s}`,xmlns:"http://www.w3.org/2000/svg",style:{color:r}},O("circle",{fill:"none",stroke:"currentColor","stroke-width":n,"stroke-linecap":"round",cx:s,cy:s,r:e-n/2,"stroke-dasharray":4.91*e,"stroke-dashoffset":2.46*e}))),O("div",{class:`${t}-base-loading__container-layer-right`},O("svg",{class:`${t}-base-loading__svg`,viewBox:`0 0 ${2*s} ${2*s}`,xmlns:"http://www.w3.org/2000/svg",style:{color:r}},O("circle",{fill:"none",stroke:"currentColor","stroke-width":n,"stroke-linecap":"round",cx:s,cy:s,r:e-n/2,"stroke-dasharray":4.91*e,"stroke-dashoffset":2.46*e})))))):O("div",{key:"placeholder",class:`${t}-base-loading__placeholder`},this.$slots)}))}});const j={neutralBase:"#FFF",neutralInvertBase:"#000",neutralTextBase:"#000",neutralPopover:"#fff",neutralCard:"#fff",neutralModal:"#fff",neutralBody:"#fff",alpha1:"0.82",alpha2:"0.72",alpha3:"0.38",alpha4:"0.24",alpha5:"0.18",alphaClose:"0.52",alphaDisabled:"0.5",alphaDisabledInput:"0.02",alphaPending:"0.05",alphaTablePending:"0.02",alphaPressed:"0.07",alphaAvatar:"0.2",alphaRail:"0.14",alphaProgressRail:".08",alphaBorder:"0.12",alphaDivider:"0.06",alphaInput:"0",alphaAction:"0.02",alphaTab:"0.04",alphaScrollbar:"0.25",alphaScrollbarHover:"0.4",alphaCode:"0.05",alphaTag:"0.02",primaryHover:"#36ad6a",primaryDefault:"#18a058",primaryActive:"#0c7a43",primarySuppl:"#36ad6a",infoHover:"#4098fc",infoDefault:"#2080f0",infoActive:"#1060c9",infoSuppl:"#4098fc",errorHover:"#de576d",errorDefault:"#d03050",errorActive:"#ab1f3f",errorSuppl:"#de576d",warningHover:"#fcb040",warningDefault:"#f0a020",warningActive:"#c97c10",warningSuppl:"#fcb040",successHover:"#36ad6a",successDefault:"#18a058",successActive:"#0c7a43",successSuppl:"#36ad6a"},_A=gr(j.neutralBase),km=gr(j.neutralInvertBase),vA="rgba("+km.slice(0,3).join(", ")+", ";function Mh(t){return vA+String(t)+")"}function nt(t){const e=Array.from(km);return e[3]=Number(t),LI(_A,e)}const bA=Object.assign(Object.assign({name:"common"},ga),{baseColor:j.neutralBase,primaryColor:j.primaryDefault,primaryColorHover:j.primaryHover,primaryColorPressed:j.primaryActive,primaryColorSuppl:j.primarySuppl,infoColor:j.infoDefault,infoColorHover:j.infoHover,infoColorPressed:j.infoActive,infoColorSuppl:j.infoSuppl,successColor:j.successDefault,successColorHover:j.successHover,successColorPressed:j.successActive,successColorSuppl:j.successSuppl,warningColor:j.warningDefault,warningColorHover:j.warningHover,warningColorPressed:j.warningActive,warningColorSuppl:j.warningSuppl,errorColor:j.errorDefault,errorColorHover:j.errorHover,errorColorPressed:j.errorActive,errorColorSuppl:j.errorSuppl,textColorBase:j.neutralTextBase,textColor1:"rgb(31, 34, 37)",textColor2:"rgb(51, 54, 57)",textColor3:"rgb(118, 124, 130)",textColorDisabled:nt(j.alpha4),placeholderColor:nt(j.alpha4),placeholderColorDisabled:nt(j.alpha5),iconColor:nt(j.alpha4),iconColorHover:Ms(nt(j.alpha4),{lightness:.75}),iconColorPressed:Ms(nt(j.alpha4),{lightness:.9}),iconColorDisabled:nt(j.alpha5),opacity1:j.alpha1,opacity2:j.alpha2,opacity3:j.alpha3,opacity4:j.alpha4,opacity5:j.alpha5,dividerColor:"rgb(239, 239, 245)",borderColor:"rgb(224, 224, 230)",closeColor:nt(Number(j.alphaClose)),closeColorHover:nt(Number(j.alphaClose)*1.25),closeColorPressed:nt(Number(j.alphaClose)*.8),closeColorDisabled:nt(j.alpha4),clearColor:nt(j.alpha4),clearColorHover:Ms(nt(j.alpha4),{lightness:.75}),clearColorPressed:Ms(nt(j.alpha4),{lightness:.9}),scrollbarColor:Mh(j.alphaScrollbar),scrollbarColorHover:Mh(j.alphaScrollbarHover),scrollbarWidth:"5px",scrollbarHeight:"5px",scrollbarBorderRadius:"5px",progressRailColor:nt(j.alphaProgressRail),railColor:"rgb(219, 219, 223)",popoverColor:j.neutralPopover,tableColor:j.neutralCard,cardColor:j.neutralCard,modalColor:j.neutralModal,bodyColor:j.neutralBody,tagColor:"rgb(250, 250, 252)",avatarColor:nt(j.alphaAvatar),invertedColor:"rgb(0, 20, 40)",inputColor:nt(j.alphaInput),codeColor:"rgb(244, 244, 248)",tabColor:"rgb(247, 247, 250)",actionColor:"rgb(250, 250, 252)",tableHeaderColor:"rgb(250, 250, 252)",hoverColor:"rgb(243, 243, 245)",tableColorHover:"rgba(0, 0, 100, 0.03)",tableColorStriped:"rgba(0, 0, 100, 0.02)",pressedColor:"rgb(237, 237, 239)",opacityDisabled:j.alphaDisabled,inputColorDisabled:"rgb(250, 250, 252)",buttonColor2:"rgba(46, 51, 56, .05)",buttonColor2Hover:"rgba(46, 51, 56, .09)",buttonColor2Pressed:"rgba(46, 51, 56, .13)",boxShadow1:"0 1px 2px -2px rgba(0, 0, 0, .08), 0 3px 6px 0 rgba(0, 0, 0, .06), 0 5px 12px 4px rgba(0, 0, 0, .04)",boxShadow2:"0 3px 6px -4px rgba(0, 0, 0, .12), 0 6px 16px 0 rgba(0, 0, 0, .08), 0 9px 28px 8px rgba(0, 0, 0, .05)",boxShadow3:"0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)"});var Nm=bA;const yA=t=>{const{scrollbarColor:e,scrollbarColorHover:n}=t;return{color:e,colorHover:n}},wA={name:"Scrollbar",common:Nm,self:yA};var CA=wA;const{cubicBezierEaseInOut:Dh}=ga;function EA({name:t="fade-in",enterDuration:e="0.2s",leaveDuration:n="0.2s",enterCubicBezier:r=Dh,leaveCubicBezier:i=Dh}={}){return[te(`&.${t}-transition-enter-active`,{transition:`all ${e} ${r}!important`}),te(`&.${t}-transition-leave-active`,{transition:`all ${n} ${i}!important`}),te(`&.${t}-transition-enter-from, &.${t}-transition-leave-to`,{opacity:0}),te(`&.${t}-transition-leave-from, &.${t}-transition-enter-to`,{opacity:1})]}var TA=ke("scrollbar",`
 overflow: hidden;
 position: relative;
 z-index: auto;
 height: 100%;
 width: 100%;
`,[te(">",[ke("scrollbar-container",`
 width: 100%;
 overflow: scroll;
 height: 100%;
 max-height: inherit;
 scrollbar-width: none;
 `,[te("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `),te(">",[ke("scrollbar-content",`
 box-sizing: border-box;
 min-width: 100%;
 `)])]),ke("scrollbar-rail",`
 position: absolute;
 pointer-events: none;
 user-select: none;
 `,[wt("horizontal",`
 left: 2px;
 right: 2px;
 bottom: 4px;
 height: var(--n-scrollbar-height);
 `,[te(">",[V("scrollbar",`
 height: var(--n-scrollbar-height);
 border-radius: var(--n-scrollbar-border-radius);
 right: 0;
 `)])]),wt("vertical",`
 right: 4px;
 top: 2px;
 bottom: 2px;
 width: var(--n-scrollbar-width);
 `,[te(">",[V("scrollbar",`
 width: var(--n-scrollbar-width);
 border-radius: var(--n-scrollbar-border-radius);
 bottom: 0;
 `)])]),wt("disabled",[te(">",[V("scrollbar",{pointerEvents:"none"})])]),te(">",[V("scrollbar",`
 position: absolute;
 cursor: pointer;
 pointer-events: all;
 background-color: var(--n-scrollbar-color);
 transition: background-color .2s var(--n-scrollbar-bezier);
 `,[EA(),te("&:hover",{backgroundColor:"var(--n-scrollbar-color-hover)"})])])])])]);const IA=Object.assign(Object.assign({},Es.props),{size:{type:Number,default:5},duration:{type:Number,default:0},scrollable:{type:Boolean,default:!0},xScrollable:Boolean,useUnifiedContainer:Boolean,triggerDisplayManually:Boolean,container:Function,content:Function,containerClass:String,containerStyle:[String,Object],contentClass:String,contentStyle:[String,Object],horizontalRailStyle:[String,Object],verticalRailStyle:[String,Object],onScroll:Function,onWheel:Function,onResize:Function,internalOnUpdateScrollLeft:Function}),SA=Me({name:"Scrollbar",props:IA,inheritAttrs:!1,setup(t){const{mergedClsPrefixRef:e,inlineThemeDisabled:n}=Rm(t),r=de(null),i=de(null),s=de(null),o=de(null),a=de(null),l=de(null),c=de(null),u=de(null),d=de(null),h=de(null),_=de(null),g=de(0),C=de(0),b=de(!1),S=de(!1);let F=!1,z=!1,U,X,me=0,E=0,x=0,D=0;const q=mS(),Z=he(()=>{const{value:I}=u,{value:$}=l,{value:G}=h;return I===null||$===null||G===null?0:Math.min(I,G*I/$+t.size*1.5)}),L=he(()=>`${Z.value}px`),re=he(()=>{const{value:I}=d,{value:$}=c,{value:G}=_;return I===null||$===null||G===null?0:G*I/$+t.size*1.5}),we=he(()=>`${re.value}px`),Se=he(()=>{const{value:I}=u,{value:$}=g,{value:G}=l,{value:ge}=h;if(I===null||G===null||ge===null)return 0;{const Oe=G-I;return Oe?$/Oe*(ge-Z.value):0}}),ce=he(()=>`${Se.value}px`),fe=he(()=>{const{value:I}=d,{value:$}=C,{value:G}=c,{value:ge}=_;if(I===null||G===null||ge===null)return 0;{const Oe=G-I;return Oe?$/Oe*(ge-re.value):0}}),ie=he(()=>`${fe.value}px`),Ue=he(()=>{const{value:I}=u,{value:$}=l;return I!==null&&$!==null&&$>I}),_t=he(()=>{const{value:I}=d,{value:$}=c;return I!==null&&$!==null&&$>I}),De=he(()=>{const{container:I}=t;return I?I():i.value}),ut=he(()=>{const{content:I}=t;return I?I():s.value}),dt=M,wr=I=>{const{onResize:$}=t;$&&$(I),M()},mi=(I,$)=>{if(!t.scrollable)return;if(typeof I=="number"){Xe(I,$!=null?$:0,0,!1,"auto");return}const{left:G,top:ge,index:Oe,elSize:ye,position:Le,behavior:Te,el:Ot,debounce:un=!0}=I;(G!==void 0||ge!==void 0)&&Xe(G!=null?G:0,ge!=null?ge:0,0,!1,Te),Ot!==void 0?Xe(0,Ot.offsetTop,Ot.offsetHeight,un,Te):Oe!==void 0&&ye!==void 0?Xe(0,Oe*ye,ye,un,Te):Le==="bottom"?Xe(0,Number.MAX_SAFE_INTEGER,0,!1,Te):Le==="top"&&Xe(0,0,0,!1,Te)},_i=(I,$)=>{if(!t.scrollable)return;const{value:G}=De;!G||(typeof I=="object"?G.scrollBy(I):G.scrollBy(I,$||0))};function Xe(I,$,G,ge,Oe){const{value:ye}=De;if(!!ye){if(ge){const{scrollTop:Le,offsetHeight:Te}=ye;if($>Le){$+G<=Le+Te||ye.scrollTo({left:I,top:$+G-Te,behavior:Oe});return}}ye.scrollTo({left:I,top:$,behavior:Oe})}}function cn(){f(),p(),M()}function Cr(){xt()}function xt(){Mn(),Dn()}function Mn(){X!==void 0&&window.clearTimeout(X),X=window.setTimeout(()=>{S.value=!1},t.duration)}function Dn(){U!==void 0&&window.clearTimeout(U),U=window.setTimeout(()=>{b.value=!1},t.duration)}function f(){U!==void 0&&window.clearTimeout(U),b.value=!0}function p(){X!==void 0&&window.clearTimeout(X),S.value=!0}function v(I){const{onScroll:$}=t;$&&$(I),y()}function y(){const{value:I}=De;I&&(g.value=I.scrollTop,C.value=I.scrollLeft)}function w(){const{value:I}=ut;I&&(l.value=I.offsetHeight,c.value=I.offsetWidth);const{value:$}=De;$&&(u.value=$.offsetHeight,d.value=$.offsetWidth);const{value:G}=a,{value:ge}=o;G&&(_.value=G.offsetWidth),ge&&(h.value=ge.offsetHeight)}function k(){const{value:I}=De;I&&(g.value=I.scrollTop,C.value=I.scrollLeft,u.value=I.offsetHeight,d.value=I.offsetWidth,l.value=I.scrollHeight,c.value=I.scrollWidth);const{value:$}=a,{value:G}=o;$&&(_.value=$.offsetWidth),G&&(h.value=G.offsetHeight)}function M(){!t.scrollable||(t.useUnifiedContainer?k():(w(),y()))}function P(I){var $;return!(!(($=r.value)===null||$===void 0)&&$.contains(I.target))}function N(I){I.preventDefault(),I.stopPropagation(),z=!0,Zn("mousemove",window,T,!0),Zn("mouseup",window,W,!0),E=C.value,x=I.clientX}function T(I){if(!z)return;U!==void 0&&window.clearTimeout(U),X!==void 0&&window.clearTimeout(X);const{value:$}=d,{value:G}=c,{value:ge}=re;if($===null||G===null)return;const ye=(I.clientX-x)*(G-$)/($-ge),Le=G-$;let Te=E+ye;Te=Math.min(Le,Te),Te=Math.max(Te,0);const{value:Ot}=De;if(Ot){Ot.scrollLeft=Te;const{internalOnUpdateScrollLeft:un}=t;un&&un(Te)}}function W(I){I.preventDefault(),I.stopPropagation(),Xt("mousemove",window,T,!0),Xt("mouseup",window,W,!0),z=!1,M(),P(I)&&xt()}function B(I){I.preventDefault(),I.stopPropagation(),F=!0,Zn("mousemove",window,H,!0),Zn("mouseup",window,K,!0),me=g.value,D=I.clientY}function H(I){if(!F)return;U!==void 0&&window.clearTimeout(U),X!==void 0&&window.clearTimeout(X);const{value:$}=u,{value:G}=l,{value:ge}=Z;if($===null||G===null)return;const ye=(I.clientY-D)*(G-$)/($-ge),Le=G-$;let Te=me+ye;Te=Math.min(Le,Te),Te=Math.max(Te,0);const{value:Ot}=De;Ot&&(Ot.scrollTop=Te)}function K(I){I.preventDefault(),I.stopPropagation(),Xt("mousemove",window,H,!0),Xt("mouseup",window,K,!0),F=!1,M(),P(I)&&xt()}zr(()=>{const{value:I}=_t,{value:$}=Ue,{value:G}=e,{value:ge}=a,{value:Oe}=o;ge&&(I?ge.classList.remove(`${G}-scrollbar-rail--disabled`):ge.classList.add(`${G}-scrollbar-rail--disabled`)),Oe&&($?Oe.classList.remove(`${G}-scrollbar-rail--disabled`):Oe.classList.add(`${G}-scrollbar-rail--disabled`))}),_r(()=>{t.container||M()}),Wo(()=>{U!==void 0&&window.clearTimeout(U),X!==void 0&&window.clearTimeout(X),Xt("mousemove",window,H,!0),Xt("mouseup",window,K,!0)});const ae=Es("Scrollbar","-scrollbar",TA,CA,t,e),Ce=he(()=>{const{common:{cubicBezierEaseInOut:I,scrollbarBorderRadius:$,scrollbarHeight:G,scrollbarWidth:ge},self:{color:Oe,colorHover:ye}}=ae.value;return{"--n-scrollbar-bezier":I,"--n-scrollbar-color":Oe,"--n-scrollbar-color-hover":ye,"--n-scrollbar-border-radius":$,"--n-scrollbar-width":ge,"--n-scrollbar-height":G}}),ue=n?Pm("scrollbar",void 0,Ce,t):void 0;return Object.assign(Object.assign({},{scrollTo:mi,scrollBy:_i,sync:M,syncUnifiedContainer:k,handleMouseEnterWrapper:cn,handleMouseLeaveWrapper:Cr}),{mergedClsPrefix:e,containerScrollTop:g,wrapperRef:r,containerRef:i,contentRef:s,yRailRef:o,xRailRef:a,needYBar:Ue,needXBar:_t,yBarSizePx:L,xBarSizePx:we,yBarTopPx:ce,xBarLeftPx:ie,isShowXBar:b,isShowYBar:S,isIos:q,handleScroll:v,handleContentResize:dt,handleContainerResize:wr,handleYScrollMouseDown:B,handleXScrollMouseDown:N,cssVars:n?void 0:Ce,themeClass:ue==null?void 0:ue.themeClass,onRender:ue==null?void 0:ue.onRender})},render(){var t;const{$slots:e,mergedClsPrefix:n,triggerDisplayManually:r}=this;if(!this.scrollable)return(t=e.default)===null||t===void 0?void 0:t.call(e);const i=()=>{var s,o;return(s=this.onRender)===null||s===void 0||s.call(this),O("div",Of(this.$attrs,{role:"none",ref:"wrapperRef",class:[`${n}-scrollbar`,this.themeClass],style:this.cssVars,onMouseenter:r?void 0:this.handleMouseEnterWrapper,onMouseleave:r?void 0:this.handleMouseLeaveWrapper}),[this.container?(o=e.default)===null||o===void 0?void 0:o.call(e):O("div",{role:"none",ref:"containerRef",class:[`${n}-scrollbar-container`,this.containerClass],style:this.containerStyle,onScroll:this.handleScroll,onWheel:this.onWheel},O(Al,{onResize:this.handleContentResize},{default:()=>O("div",{ref:"contentRef",role:"none",style:[{width:this.xScrollable?"fit-content":null},this.contentStyle],class:[`${n}-scrollbar-content`,this.contentClass]},e)})),O("div",{ref:"yRailRef",class:`${n}-scrollbar-rail ${n}-scrollbar-rail--vertical`,style:this.horizontalRailStyle,"aria-hidden":!0},O(Xi,{name:"fade-in-transition"},{default:()=>this.needYBar&&this.isShowYBar&&!this.isIos?O("div",{class:`${n}-scrollbar-rail__scrollbar`,style:{height:this.yBarSizePx,top:this.yBarTopPx},onMousedown:this.handleYScrollMouseDown}):null})),O("div",{ref:"xRailRef",class:`${n}-scrollbar-rail ${n}-scrollbar-rail--horizontal`,style:this.verticalRailStyle,"aria-hidden":!0},O(Xi,{name:"fade-in-transition"},{default:()=>this.needXBar&&this.isShowXBar&&!this.isIos?O("div",{class:`${n}-scrollbar-rail__scrollbar`,style:{width:this.xBarSizePx,left:this.xBarLeftPx},onMousedown:this.handleXScrollMouseDown}):null}))])};return this.container?i():O(Al,{onResize:this.handleContainerResize},{default:i})}});var xA=SA;function RA(t,e,n){if(!e)return;const r=da(),i=he(()=>{const{value:o}=e;if(!o)return;const a=o[t];if(!!a)return a}),s=()=>{zr(()=>{const{value:o}=n,a=`${o}${t}Rtl`;if(nS(a,r))return;const{value:l}=i;!l||l.style.mount({id:a,head:!0,anchorMetaName:ls,props:{bPrefix:o?`.${o}-`:void 0},ssr:r})})};return r?s():zo(s),i}var PA=ke("base-clear",`
 flex-shrink: 0;
 height: 1em;
 width: 1em;
 position: relative;
`,[te(">",[V("clear",`
 font-size: var(--n-clear-size);
 cursor: pointer;
 color: var(--n-clear-color);
 transition: color .3s var(--n-bezier);
 `,[te("&:hover",`
 color: var(--n-clear-color-hover)!important;
 `),te("&:active",`
 color: var(--n-clear-color-pressed)!important;
 `)]),V("placeholder",`
 display: flex;
 `),V("clear, placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[Ll({originalTransform:"translateX(-50%) translateY(-50%)",left:"50%",top:"50%"})])])]),Fl=Me({name:"BaseClear",props:{clsPrefix:{type:String,required:!0},show:Boolean,onClear:Function},setup(t){return du("-base-clear",PA,Do(t,"clsPrefix")),{handleMouseDown(e){e.preventDefault()}}},render(){const{clsPrefix:t}=this;return O("div",{class:`${t}-base-clear`},O(Am,null,{default:()=>{var e,n;return this.show?O(hu,{clsPrefix:t,key:"dismiss",class:`${t}-base-clear__clear`,onClick:this.onClear,onMousedown:this.handleMouseDown,"data-clear":!0},{default:()=>O(hA,null)}):O("div",{key:"icon",class:`${t}-base-clear__placeholder`},(n=(e=this.$slots).default)===null||n===void 0?void 0:n.call(e))}}))}}),AA=Me({name:"InternalSelectionSuffix",props:{clsPrefix:{type:String,required:!0},showArrow:{type:Boolean,default:void 0},showClear:{type:Boolean,default:void 0},loading:{type:Boolean,default:!1},onClear:Function},setup(t,{slots:e}){return()=>{const{clsPrefix:n}=t;return O(mA,{clsPrefix:n,class:`${n}-base-suffix`,strokeWidth:24,scale:.85,show:t.loading},{default:()=>t.showArrow?O(Fl,{clsPrefix:n,show:t.showClear,onClear:t.onClear},{default:()=>O(hu,{clsPrefix:n,class:`${n}-base-suffix__arrow`},{default:()=>Xs(e.default,()=>[O(dA,null)])})}):null})}}}),kA={paddingTiny:"0 8px",paddingSmall:"0 10px",paddingMedium:"0 12px",paddingLarge:"0 14px",clearSize:"16px"};const NA=t=>{const{textColor2:e,textColor3:n,textColorDisabled:r,primaryColor:i,primaryColorHover:s,inputColor:o,inputColorDisabled:a,borderColor:l,warningColor:c,warningColorHover:u,errorColor:d,errorColorHover:h,borderRadius:_,lineHeight:g,fontSizeTiny:C,fontSizeSmall:b,fontSizeMedium:S,fontSizeLarge:F,heightTiny:z,heightSmall:U,heightMedium:X,heightLarge:me,actionColor:E,clearColor:x,clearColorHover:D,clearColorPressed:q,placeholderColor:Z,placeholderColorDisabled:L,iconColor:re,iconColorDisabled:we,iconColorHover:Se,iconColorPressed:ce}=t;return Object.assign(Object.assign({},kA),{countTextColor:n,heightTiny:z,heightSmall:U,heightMedium:X,heightLarge:me,fontSizeTiny:C,fontSizeSmall:b,fontSizeMedium:S,fontSizeLarge:F,lineHeight:g,lineHeightTextarea:g,borderRadius:_,iconSize:"16px",groupLabelColor:E,groupLabelTextColor:e,textColor:e,textColorDisabled:r,textDecorationColor:e,caretColor:i,placeholderColor:Z,placeholderColorDisabled:L,color:o,colorDisabled:a,colorFocus:o,groupLabelBorder:`1px solid ${l}`,border:`1px solid ${l}`,borderHover:`1px solid ${s}`,borderDisabled:`1px solid ${l}`,borderFocus:`1px solid ${s}`,boxShadowFocus:`0 0 0 2px ${La(i,{alpha:.2})}`,loadingColor:i,loadingColorWarning:c,borderWarning:`1px solid ${c}`,borderHoverWarning:`1px solid ${u}`,colorFocusWarning:o,borderFocusWarning:`1px solid ${u}`,boxShadowFocusWarning:`0 0 0 2px ${La(c,{alpha:.2})}`,caretColorWarning:c,loadingColorError:d,borderError:`1px solid ${d}`,borderHoverError:`1px solid ${h}`,colorFocusError:o,borderFocusError:`1px solid ${h}`,boxShadowFocusError:`0 0 0 2px ${La(d,{alpha:.2})}`,caretColorError:d,clearColor:x,clearColorHover:D,clearColorPressed:q,iconColor:re,iconColorDisabled:we,iconColorHover:Se,iconColorPressed:ce,suffixTextColor:e})},OA={name:"Input",common:Nm,self:NA};var MA=OA;const Om="n-input";function DA(t){let e=0;for(const n of t)e++;return e}function zs(t){return["",void 0,null].includes(t)}var Lh=Me({name:"InputWordCount",setup(t,{slots:e}){const{mergedValueRef:n,maxlengthRef:r,mergedClsPrefixRef:i}=Ye(Om),s=he(()=>{const{value:o}=n;return o===null||Array.isArray(o)?0:DA(o)});return()=>{const{value:o}=r,{value:a}=n;return O("span",{class:`${i.value}-input-word-count`},BI(e.default,{value:a===null||Array.isArray(a)?"":a},()=>[o===void 0?s.value:`${s.value} / ${o}`]))}}}),LA=ke("input",`
 max-width: 100%;
 cursor: text;
 line-height: 1.5;
 z-index: auto;
 outline: none;
 box-sizing: border-box;
 position: relative;
 display: inline-flex;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color .3s var(--n-bezier);
 font-size: var(--n-font-size);
 --n-padding-vertical: calc((var(--n-height) - 1.5 * var(--n-font-size)) / 2);
`,[V("input, textarea",`
 overflow: hidden;
 flex-grow: 1;
 position: relative;
 `),V("input-el, textarea-el, input-mirror, textarea-mirror, separator, placeholder",`
 box-sizing: border-box;
 font-size: inherit;
 line-height: 1.5;
 font-family: inherit;
 border: none;
 outline: none;
 background-color: #0000;
 text-align: inherit;
 transition:
 caret-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier);
 `),V("input-el, textarea-el",`
 -webkit-appearance: none;
 scrollbar-width: none;
 width: 100%;
 min-width: 0;
 text-decoration-color: var(--n-text-decoration-color);
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 background-color: transparent;
 `,[te("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `),te("&::placeholder","color: #0000;"),te("&:-webkit-autofill ~",[V("placeholder","display: none;")])]),wt("round",[Ii("textarea","border-radius: calc(var(--n-height) / 2);")]),V("placeholder",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: hidden;
 color: var(--n-placeholder-color);
 `,[te("span",`
 width: 100%;
 display: inline-block;
 `)]),wt("textarea",[V("placeholder","overflow: visible;")]),Ii("autosize","width: 100%;"),wt("autosize",[V("textarea-el, input-el",`
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 `)]),ke("input-wrapper",`
 overflow: hidden;
 display: inline-flex;
 flex-grow: 1;
 position: relative;
 padding-left: var(--n-padding-left);
 padding-right: var(--n-padding-right);
 `),V("input-mirror",`
 padding: 0;
 height: var(--n-height);
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: nowrap;
 pointer-events: none;
 `),V("input-el",`
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[te("+",[V("placeholder",`
 display: flex;
 align-items: center; 
 `)])]),Ii("textarea",[V("placeholder","white-space: nowrap;")]),V("eye",`
 transition: color .3s var(--n-bezier);
 `),wt("textarea","width: 100%;",[ke("input-word-count",`
 position: absolute;
 right: var(--n-padding-right);
 bottom: var(--n-padding-vertical);
 `),wt("resizable",[ke("input-wrapper",`
 resize: vertical;
 min-height: var(--n-height);
 `)]),V("textarea",`
 position: static;
 `),V("textarea-el, textarea-mirror, placeholder",`
 height: 100%;
 left: var(--n-padding-left);
 right: var(--n-padding-right);
 padding-left: 0;
 padding-right: 0;
 padding-top: var(--n-padding-vertical);
 padding-bottom: var(--n-padding-vertical);
 word-break: break-word;
 display: inline-block;
 vertical-align: bottom;
 box-sizing: border-box;
 line-height: var(--n-line-height-textarea);
 margin: 0;
 resize: none;
 white-space: pre-wrap;
 `),V("textarea-mirror",`
 width: 100%;
 pointer-events: none;
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre-wrap;
 overflow-wrap: break-word;
 `)]),wt("pair",[V("input-el, placeholder","text-align: center;"),V("separator",`
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `,[ke("icon",`
 color: var(--n-icon-color);
 `),ke("base-icon",`
 color: var(--n-icon-color);
 `)])]),wt("disabled",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[V("border","border: var(--n-border-disabled);"),V("input-el, textarea-el",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 text-decoration-color: var(--n-text-color-disabled);
 `),V("placeholder","color: var(--n-placeholder-color-disabled);"),V("separator","color: var(--n-text-color-disabled);",[ke("icon",`
 color: var(--n-icon-color-disabled);
 `),ke("base-icon",`
 color: var(--n-icon-color-disabled);
 `)]),V("suffix, prefix","color: var(--n-text-color-disabled);",[ke("icon",`
 color: var(--n-icon-color-disabled);
 `),ke("internal-icon",`
 color: var(--n-icon-color-disabled);
 `)])]),Ii("disabled",[V("eye",`
 display: flex;
 align-items: center;
 justify-content: center;
 color: var(--n-icon-color);
 cursor: pointer;
 `,[te("&:hover",`
 color: var(--n-icon-color-hover);
 `),te("&:active",`
 color: var(--n-icon-color-pressed);
 `),ke("icon",[te("&:hover",`
 color: var(--n-icon-color-hover);
 `),te("&:active",`
 color: var(--n-icon-color-pressed);
 `)])]),te("&:hover",[V("state-border","border: var(--n-border-hover);")]),wt("focus","background-color: var(--n-color-focus);",[V("state-border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),V("border, state-border",`
 box-sizing: border-box;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: inherit;
 border: var(--n-border);
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),V("state-border",`
 border-color: #0000;
 z-index: 1;
 `),V("prefix","margin-right: 4px;"),V("suffix",`
 margin-left: 4px;
 `),V("suffix, prefix",`
 transition: color .3s var(--n-bezier);
 flex-wrap: nowrap;
 flex-shrink: 0;
 line-height: var(--n-height);
 white-space: nowrap;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 color: var(--n-suffix-text-color);
 `,[ke("base-loading",`
 font-size: var(--n-icon-size);
 margin: 0 2px;
 color: var(--n-loading-color);
 `),ke("base-clear",`
 font-size: var(--n-icon-size);
 `,[V("placeholder",[ke("base-icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)])]),te(">",[ke("icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)]),ke("base-icon",`
 font-size: var(--n-icon-size);
 `)]),ke("input-word-count",`
 pointer-events: none;
 line-height: 1.5;
 font-size: .85em;
 color: var(--n-count-text-color);
 transition: color .3s var(--n-bezier);
 margin-left: 4px;
 font-variant: tabular-nums;
 `),["warning","error"].map(t=>wt(`${t}-status`,[Ii("disabled",[ke("base-loading",`
 color: var(--n-loading-color-${t})
 `),V("input-el, textarea-el",`
 caret-color: var(--n-caret-color-${t});
 `),V("state-border",`
 border: var(--n-border-${t});
 `),te("&:hover",[V("state-border",`
 border: var(--n-border-hover-${t});
 `)]),te("&:focus",`
 background-color: var(--n-color-focus-${t});
 `,[V("state-border",`
 box-shadow: var(--n-box-shadow-focus-${t});
 border: var(--n-border-focus-${t});
 `)]),wt("focus",`
 background-color: var(--n-color-focus-${t});
 `,[V("state-border",`
 box-shadow: var(--n-box-shadow-focus-${t});
 border: var(--n-border-focus-${t});
 `)])])]))]);const FA=Object.assign(Object.assign({},Es.props),{bordered:{type:Boolean,default:void 0},type:{type:String,default:"text"},placeholder:[Array,String],defaultValue:{type:[String,Array],default:null},value:[String,Array],disabled:{type:Boolean,default:void 0},size:String,rows:{type:[Number,String],default:3},round:Boolean,minlength:[String,Number],maxlength:[String,Number],clearable:Boolean,autosize:{type:[Boolean,Object],default:!1},pair:Boolean,separator:String,readonly:{type:[String,Boolean],default:!1},passivelyActivated:Boolean,showPasswordOn:String,stateful:{type:Boolean,default:!0},autofocus:Boolean,inputProps:Object,resizable:{type:Boolean,default:!0},showCount:Boolean,loading:{type:Boolean,default:void 0},onMousedown:Function,onKeydown:Function,onKeyup:Function,onInput:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClick:[Function,Array],onChange:[Function,Array],onClear:[Function,Array],status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],textDecoration:[String,Array],attrSize:{type:Number,default:20},onInputBlur:[Function,Array],onInputFocus:[Function,Array],onDeactivate:[Function,Array],onActivate:[Function,Array],onWrapperFocus:[Function,Array],onWrapperBlur:[Function,Array],internalDeactivateOnEnter:Boolean,internalForceFocus:Boolean,internalLoadingBeforeSuffix:Boolean,showPasswordToggle:Boolean});var $A=Me({name:"Input",props:FA,setup(t){const{mergedClsPrefixRef:e,mergedBorderedRef:n,inlineThemeDisabled:r,mergedRtlRef:i}=Rm(t),s=Es("Input","-input",LA,MA,t,e),o=de(null),a=de(null),l=de(null),c=de(null),u=de(null),d=de(null),h=de(null),{localeRef:_}=aA("Input"),g=de(t.defaultValue),C=Do(t,"value"),b=fS(C,g),S=HS(t),{mergedSizeRef:F,mergedDisabledRef:z,mergedStatusRef:U}=S,X=de(!1),me=de(!1),E=de(!1),x=de(!1);let D=null;const q=he(()=>{const{placeholder:m,pair:R}=t;return R?Array.isArray(m)?m:m===void 0?["",""]:[m,m]:m===void 0?[_.value.placeholder]:[m]}),Z=he(()=>{const{value:m}=E,{value:R}=b,{value:J}=q;return!m&&(zs(R)||Array.isArray(R)&&zs(R[0]))&&J[0]}),L=he(()=>{const{value:m}=E,{value:R}=b,{value:J}=q;return!m&&J[1]&&(zs(R)||Array.isArray(R)&&zs(R[1]))}),re=oh(()=>t.internalForceFocus||X.value),we=oh(()=>{if(z.value||t.readonly||!t.clearable||!re.value&&!me.value)return!1;const{value:m}=b,{value:R}=re;return t.pair?!!(Array.isArray(m)&&(m[0]||m[1]))&&(me.value||R):!!m&&(me.value||R)}),Se=he(()=>{const{showPasswordOn:m}=t;if(m)return m;if(t.showPasswordToggle)return"click"}),ce=de(!1),fe=he(()=>{const{textDecoration:m}=t;return m?Array.isArray(m)?m.map(R=>({textDecoration:R})):[{textDecoration:m}]:["",""]}),ie=de(void 0),Ue=()=>{var m,R;if(t.type==="textarea"){const{autosize:J}=t;if(J&&(ie.value=(R=(m=h.value)===null||m===void 0?void 0:m.$el)===null||R===void 0?void 0:R.offsetWidth),!a.value||typeof J=="boolean")return;const{paddingTop:We,paddingBottom:je,lineHeight:tt}=window.getComputedStyle(a.value),Ln=Number(We.slice(0,-2)),Fn=Number(je.slice(0,-2)),$n=Number(tt.slice(0,-2)),{value:vi}=l;if(!vi)return;if(J.minRows){const bi=Math.max(J.minRows,1),ma=`${Ln+Fn+$n*bi}px`;vi.style.minHeight=ma}if(J.maxRows){const bi=`${Ln+Fn+$n*J.maxRows}px`;vi.style.maxHeight=bi}}},_t=he(()=>{const{maxlength:m}=t;return m===void 0?void 0:Number(m)});_r(()=>{const{value:m}=b;Array.isArray(m)||Te(m)});const De=ic().proxy;function ut(m){const{onUpdateValue:R,"onUpdate:value":J,onInput:We}=t,{nTriggerFormInput:je}=S;R&&ft(R,m),J&&ft(J,m),We&&ft(We,m),g.value=m,je()}function dt(m){const{onChange:R}=t,{nTriggerFormChange:J}=S;R&&ft(R,m),g.value=m,J()}function wr(m){const{onBlur:R}=t,{nTriggerFormBlur:J}=S;R&&ft(R,m),J()}function mi(m){const{onFocus:R}=t,{nTriggerFormFocus:J}=S;R&&ft(R,m),J()}function _i(m){const{onClear:R}=t;R&&ft(R,m)}function Xe(m){const{onInputBlur:R}=t;R&&ft(R,m)}function cn(m){const{onInputFocus:R}=t;R&&ft(R,m)}function Cr(){const{onDeactivate:m}=t;m&&ft(m)}function xt(){const{onActivate:m}=t;m&&ft(m)}function Mn(m){const{onClick:R}=t;R&&ft(R,m)}function Dn(m){const{onWrapperFocus:R}=t;R&&ft(R,m)}function f(m){const{onWrapperBlur:R}=t;R&&ft(R,m)}function p(){E.value=!0}function v(m){E.value=!1,m.target===d.value?y(m,1):y(m,0)}function y(m,R=0,J="input"){const We=m.target.value;if(Te(We),t.type==="textarea"){const{value:tt}=h;tt&&tt.syncUnifiedContainer()}if(D=We,E.value)return;const je=We;if(!t.pair)J==="input"?ut(je):dt(je);else{let{value:tt}=b;Array.isArray(tt)?tt=[...tt]:tt=["",""],tt[R]=je,J==="input"?ut(tt):dt(tt)}De.$forceUpdate()}function w(m){Xe(m),m.relatedTarget===o.value&&Cr(),m.relatedTarget!==null&&(m.relatedTarget===u.value||m.relatedTarget===d.value||m.relatedTarget===a.value)||(x.value=!1),N(m,"blur")}function k(m){cn(m),X.value=!0,x.value=!0,xt(),N(m,"focus")}function M(m){t.passivelyActivated&&(f(m),N(m,"blur"))}function P(m){t.passivelyActivated&&(X.value=!0,Dn(m),N(m,"focus"))}function N(m,R){m.relatedTarget!==null&&(m.relatedTarget===u.value||m.relatedTarget===d.value||m.relatedTarget===a.value||m.relatedTarget===o.value)||(R==="focus"?(mi(m),X.value=!0):R==="blur"&&(wr(m),X.value=!1))}function T(m,R){y(m,R,"change")}function W(m){Mn(m)}function B(m){_i(m),t.pair?(ut(["",""]),dt(["",""])):(ut(""),dt(""))}function H(m){const{onMousedown:R}=t;R&&R(m);const{tagName:J}=m.target;if(J!=="INPUT"&&J!=="TEXTAREA"){if(t.resizable){const{value:We}=o;if(We){const{left:je,top:tt,width:Ln,height:Fn}=We.getBoundingClientRect(),$n=14;if(je+Ln-$n<m.clientX&&m.clientY<je+Ln&&tt+Fn-$n<m.clientY&&m.clientY<tt+Fn)return}}m.preventDefault(),X.value||G()}}function K(){var m;me.value=!0,t.type==="textarea"&&((m=h.value)===null||m===void 0||m.handleMouseEnterWrapper())}function ae(){var m;me.value=!1,t.type==="textarea"&&((m=h.value)===null||m===void 0||m.handleMouseLeaveWrapper())}function Ce(){z.value||Se.value==="click"&&(ce.value=!ce.value)}function ue(m){if(z.value)return;m.preventDefault();const R=We=>{We.preventDefault(),Xt("mouseup",document,R)};if(Zn("mouseup",document,R),Se.value!=="mousedown")return;ce.value=!0;const J=()=>{ce.value=!1,Xt("mouseup",document,J)};Zn("mouseup",document,J)}function Ee(m){var R;switch((R=t.onKeydown)===null||R===void 0||R.call(t,m),m.code){case"Escape":$();break;case"Enter":case"NumpadEnter":I(m);break}}function I(m){var R,J;if(t.passivelyActivated){const{value:We}=x;if(We){t.internalDeactivateOnEnter&&$();return}m.preventDefault(),t.type==="textarea"?(R=a.value)===null||R===void 0||R.focus():(J=u.value)===null||J===void 0||J.focus()}}function $(){t.passivelyActivated&&(x.value=!1,uf(()=>{var m;(m=o.value)===null||m===void 0||m.focus()}))}function G(){var m,R,J;z.value||(t.passivelyActivated?(m=o.value)===null||m===void 0||m.focus():((R=a.value)===null||R===void 0||R.focus(),(J=u.value)===null||J===void 0||J.focus()))}function ge(){var m;!((m=o.value)===null||m===void 0)&&m.contains(document.activeElement)&&document.activeElement.blur()}function Oe(){var m,R;(m=a.value)===null||m===void 0||m.select(),(R=u.value)===null||R===void 0||R.select()}function ye(){z.value||(a.value?a.value.focus():u.value&&u.value.focus())}function Le(){const{value:m}=o;(m==null?void 0:m.contains(document.activeElement))&&m!==document.activeElement&&$()}function Te(m){const{type:R,pair:J,autosize:We}=t;if(!J&&We)if(R==="textarea"){const{value:je}=l;je&&(je.textContent=(m!=null?m:"")+`\r
`)}else{const{value:je}=c;je&&(m?je.textContent=m:je.innerHTML="&nbsp;")}}function Ot(){Ue()}const un=de({top:"0"});function Fm(m){var R;const{scrollTop:J}=m.target;un.value.top=`${-J}px`,(R=h.value)===null||R===void 0||R.syncUnifiedContainer()}let Ts=null;zr(()=>{const{autosize:m,type:R}=t;m&&R==="textarea"?Ts=Tn(b,J=>{!Array.isArray(J)&&J!==D&&Te(J)}):Ts==null||Ts()});let Is=null;zr(()=>{t.type==="textarea"?Is=Tn(b,m=>{var R;!Array.isArray(m)&&m!==D&&((R=h.value)===null||R===void 0||R.syncUnifiedContainer())}):Is==null||Is()}),Hr(Om,{mergedValueRef:b,maxlengthRef:_t,mergedClsPrefixRef:e});const $m={wrapperElRef:o,inputElRef:u,textareaElRef:a,isCompositing:E,focus:G,blur:ge,select:Oe,deactivate:Le,activate:ye},Bm=RA("Input",i,e),fu=he(()=>{const{value:m}=F,{common:{cubicBezierEaseInOut:R},self:{color:J,borderRadius:We,textColor:je,caretColor:tt,caretColorError:Ln,caretColorWarning:Fn,textDecorationColor:$n,border:vi,borderDisabled:bi,borderHover:ma,borderFocus:Um,placeholderColor:Hm,placeholderColorDisabled:zm,lineHeightTextarea:Wm,colorDisabled:jm,colorFocus:Vm,textColorDisabled:qm,boxShadowFocus:Km,iconSize:Gm,colorFocusWarning:Ym,boxShadowFocusWarning:Xm,borderWarning:Jm,borderFocusWarning:Qm,borderHoverWarning:Zm,colorFocusError:e_,boxShadowFocusError:t_,borderError:n_,borderFocusError:r_,borderHoverError:i_,clearSize:s_,clearColor:o_,clearColorHover:a_,clearColorPressed:l_,iconColor:c_,iconColorDisabled:u_,suffixTextColor:d_,countTextColor:h_,iconColorHover:f_,iconColorPressed:p_,loadingColor:g_,loadingColorError:m_,loadingColorWarning:__,[Js("padding",m)]:v_,[Js("fontSize",m)]:b_,[Js("height",m)]:y_}}=s.value,{left:w_,right:C_}=RI(v_);return{"--n-bezier":R,"--n-count-text-color":h_,"--n-color":J,"--n-font-size":b_,"--n-border-radius":We,"--n-height":y_,"--n-padding-left":w_,"--n-padding-right":C_,"--n-text-color":je,"--n-caret-color":tt,"--n-text-decoration-color":$n,"--n-border":vi,"--n-border-disabled":bi,"--n-border-hover":ma,"--n-border-focus":Um,"--n-placeholder-color":Hm,"--n-placeholder-color-disabled":zm,"--n-icon-size":Gm,"--n-line-height-textarea":Wm,"--n-color-disabled":jm,"--n-color-focus":Vm,"--n-text-color-disabled":qm,"--n-box-shadow-focus":Km,"--n-loading-color":g_,"--n-caret-color-warning":Fn,"--n-color-focus-warning":Ym,"--n-box-shadow-focus-warning":Xm,"--n-border-warning":Jm,"--n-border-focus-warning":Qm,"--n-border-hover-warning":Zm,"--n-loading-color-warning":__,"--n-caret-color-error":Ln,"--n-color-focus-error":e_,"--n-box-shadow-focus-error":t_,"--n-border-error":n_,"--n-border-focus-error":r_,"--n-border-hover-error":i_,"--n-loading-color-error":m_,"--n-clear-color":o_,"--n-clear-size":s_,"--n-clear-color-hover":a_,"--n-clear-color-pressed":l_,"--n-icon-color":c_,"--n-icon-color-hover":f_,"--n-icon-color-pressed":p_,"--n-icon-color-disabled":u_,"--n-suffix-text-color":d_}}),Er=r?Pm("input",he(()=>{const{value:m}=F;return m[0]}),fu,t):void 0;return Object.assign(Object.assign({},$m),{wrapperElRef:o,inputElRef:u,inputMirrorElRef:c,inputEl2Ref:d,textareaElRef:a,textareaMirrorElRef:l,textareaScrollbarInstRef:h,rtlEnabled:Bm,uncontrolledValue:g,mergedValue:b,passwordVisible:ce,mergedPlaceholder:q,showPlaceholder1:Z,showPlaceholder2:L,mergedFocus:re,isComposing:E,activated:x,showClearButton:we,mergedSize:F,mergedDisabled:z,textDecorationStyle:fe,mergedClsPrefix:e,mergedBordered:n,mergedShowPasswordOn:Se,placeholderStyle:un,mergedStatus:U,textAreaScrollContainerWidth:ie,handleTextAreaScroll:Fm,handleCompositionStart:p,handleCompositionEnd:v,handleInput:y,handleInputBlur:w,handleInputFocus:k,handleWrapperBlur:M,handleWrapperFocus:P,handleMouseEnter:K,handleMouseLeave:ae,handleMouseDown:H,handleChange:T,handleClick:W,handleClear:B,handlePasswordToggleClick:Ce,handlePasswordToggleMousedown:ue,handleWrapperKeyDown:Ee,handleTextAreaMirrorResize:Ot,getTextareaScrollContainer:()=>a.value,mergedTheme:s,cssVars:r?void 0:fu,themeClass:Er==null?void 0:Er.themeClass,onRender:Er==null?void 0:Er.onRender})},render(){const{mergedClsPrefix:t,mergedStatus:e,themeClass:n,onRender:r,$slots:i}=this;return r==null||r(),O("div",{ref:"wrapperElRef",class:[`${t}-input`,n,e&&`${t}-input--${e}-status`,{[`${t}-input--rtl`]:this.rtlEnabled,[`${t}-input--disabled`]:this.mergedDisabled,[`${t}-input--textarea`]:this.type==="textarea",[`${t}-input--resizable`]:this.resizable&&!this.autosize,[`${t}-input--autosize`]:this.autosize,[`${t}-input--round`]:this.round&&this.type!=="textarea",[`${t}-input--pair`]:this.pair,[`${t}-input--focus`]:this.mergedFocus,[`${t}-input--stateful`]:this.stateful}],style:this.cssVars,tabindex:!this.mergedDisabled&&this.passivelyActivated&&!this.activated?0:void 0,onFocus:this.handleWrapperFocus,onBlur:this.handleWrapperBlur,onClick:this.handleClick,onMousedown:this.handleMouseDown,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd,onKeyup:this.onKeyup,onKeydown:this.handleWrapperKeyDown},O("div",{class:`${t}-input-wrapper`},Ds(i.prefix,s=>s&&O("div",{class:`${t}-input__prefix`},s)),this.type==="textarea"?O(xA,{ref:"textareaScrollbarInstRef",class:`${t}-input__textarea`,container:this.getTextareaScrollContainer,triggerDisplayManually:!0,useUnifiedContainer:!0},{default:()=>{const{textAreaScrollContainerWidth:s}=this,o={width:this.autosize&&s&&`${s}px`};return O(Fe,null,O("textarea",Object.assign({},this.inputProps,{ref:"textareaElRef",class:`${t}-input__textarea-el`,autofocus:this.autofocus,rows:Number(this.rows),placeholder:this.placeholder,value:this.mergedValue,disabled:this.mergedDisabled,maxlength:this.maxlength,minlength:this.minlength,readonly:this.readonly,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,style:[this.textDecorationStyle[0],o],onBlur:this.handleInputBlur,onFocus:this.handleInputFocus,onInput:this.handleInput,onChange:this.handleChange,onScroll:this.handleTextAreaScroll})),this.showPlaceholder1?O("div",{class:`${t}-input__placeholder`,style:[this.placeholderStyle,o],key:"placeholder"},this.mergedPlaceholder[0]):null,this.autosize?O(Al,{onResize:this.handleTextAreaMirrorResize},{default:()=>O("div",{ref:"textareaMirrorElRef",class:`${t}-input__textarea-mirror`,key:"mirror"})}):null)}}):O("div",{class:`${t}-input__input`},O("input",Object.assign({type:this.type==="password"&&this.mergedShowPasswordOn&&this.passwordVisible?"text":this.type},this.inputProps,{ref:"inputElRef",class:`${t}-input__input-el`,style:this.textDecorationStyle[0],tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[0],disabled:this.mergedDisabled,maxlength:this.maxlength,minlength:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[0]:this.mergedValue,readonly:this.readonly,autofocus:this.autofocus,size:this.attrSize,onBlur:this.handleInputBlur,onFocus:this.handleInputFocus,onInput:s=>this.handleInput(s,0),onChange:s=>this.handleChange(s,0)})),this.showPlaceholder1?O("div",{class:`${t}-input__placeholder`},O("span",null,this.mergedPlaceholder[0])):null,this.autosize?O("div",{class:`${t}-input__input-mirror`,key:"mirror",ref:"inputMirrorElRef"},"\xA0"):null),!this.pair&&Ds(i.suffix,s=>s||this.clearable||this.showCount||this.mergedShowPasswordOn||this.loading!==void 0?O("div",{class:`${t}-input__suffix`},[Ds(i.clear,o=>(this.clearable||o)&&O(Fl,{clsPrefix:t,show:this.showClearButton,onClear:this.handleClear},{default:()=>o})),this.internalLoadingBeforeSuffix?null:s,this.loading!==void 0?O(AA,{clsPrefix:t,loading:this.loading,showArrow:!1,showClear:!1,style:this.cssVars}):null,this.internalLoadingBeforeSuffix?s:null,this.showCount&&this.type!=="textarea"?O(Lh,null,{default:o=>{var a;return(a=i.count)===null||a===void 0?void 0:a.call(i,o)}}):null,this.mergedShowPasswordOn&&this.type==="password"?O(hu,{clsPrefix:t,class:`${t}-input__eye`,onMousedown:this.handlePasswordToggleMousedown,onClick:this.handlePasswordToggleClick},{default:()=>this.passwordVisible?Xs(i["password-visible-icon"],()=>[O(cA,null)]):Xs(i["password-invisible-icon"],()=>[O(uA,null)])}):null]):null)),this.pair?O("span",{class:`${t}-input__separator`},Xs(i.separator,()=>[this.separator])):null,this.pair?O("div",{class:`${t}-input-wrapper`},O("div",{class:`${t}-input__input`},O("input",{ref:"inputEl2Ref",type:this.type,class:`${t}-input__input-el`,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[1],disabled:this.mergedDisabled,maxlength:this.maxlength,minlength:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[1]:void 0,readonly:this.readonly,style:this.textDecorationStyle[1],onBlur:this.handleInputBlur,onFocus:this.handleInputFocus,onInput:s=>this.handleInput(s,1),onChange:s=>this.handleChange(s,1)}),this.showPlaceholder2?O("div",{class:`${t}-input__placeholder`},O("span",null,this.mergedPlaceholder[1])):null),Ds(i.suffix,s=>(this.clearable||s)&&O("div",{class:`${t}-input__suffix`},[this.clearable&&O(Fl,{clsPrefix:t,show:this.showClearButton,onClear:this.handleClear},{default:()=>{var o;return(o=i.clear)===null||o===void 0?void 0:o.call(i)}}),s]))):null,this.mergedBordered?O("div",{class:`${t}-input__border`}):null,this.mergedBordered?O("div",{class:`${t}-input__state-border`}):null,this.showCount&&this.type==="textarea"?O(Lh,null,{default:s=>{var o;return(o=i.count)===null||o===void 0?void 0:o.call(i,s)}}):null)}});const BA={class:"input-container"},Mm=Me({props:{color:null,placeholder:null,initialValue:null,autofocus:{type:Boolean},saveOnBlur:{type:Boolean}},emits:["save","blur"],setup(t,{emit:e}){const{color:n,placeholder:r,initialValue:i="",autofocus:s=!1,saveOnBlur:o=!1}=t;sc(_=>({"5103599a":t.color}));const a=de(),l=On({inputText:i,isFocused:!1});function c(){e("save",l.inputText),o||(l.inputText="")}function u(_){_.metaKey&&_.key==="Enter"&&(_.preventDefault(),c())}function d(){l.isFocused=!1,o&&c()}function h(){l.isFocused=!0}return s&&_r(()=>{var _,g;(g=(_=a.value).focus)==null||g.call(_)}),(_,g)=>(_e(),He("div",BA,[Ge(Ve($A),{class:"input",ref_key:"inputRef",ref:a,value:Ve(l).inputText,"onUpdate:value":g[0]||(g[0]=C=>Ve(l).inputText=C),type:"textarea",autosize:"",placeholder:t.placeholder,onKeydown:u,onFocus:h,onBlur:d},null,8,["value","placeholder"]),Ve(l).isFocused?(_e(),He("button",{key:0,class:"save-button",onClick:c}," save ")):Gn("",!0)]))}}),UA=Me({props:{color:null},emits:["delete"],setup(t,{emit:e}){sc(r=>({"01342c23":t.color||"white"}));function n(r){r.stopPropagation(),e("delete")}return(r,i)=>(_e(),He("button",{onClick:n},"\u2716"))}});var Dm=an(UA,[["__scopeId","data-v-34b96e48"]]);const HA=Vo("\u2716"),zA=Me({props:{text:null,color:null,author:null,onDelete:null,id:null,boardId:null,columnId:null},setup(t){const e=t;sc(S=>({"0136c24c":Ve(r),"24f2da82":Ve(b)}));const{author:n,color:r,boardId:i,columnId:s,id:o}=e,a=On({isEditing:!1}),l=Ye("user"),c=l.uid===n,u=Ye("board");function d(){!c||(a.isEditing=!0)}function h(S){!(l!=null&&l.uid)||(a.isEditing=!1,th(i,s,String(o),{text:S}))}function _(S){var F;(F=S.dataTransfer)==null||F.setData("application/json",JSON.stringify({boardId:i,columnId:s,cardId:o,text:e.text}))}function g(S){S.preventDefault()}function C(S){var z,U;const F=JSON.parse((U=(z=S.dataTransfer)==null?void 0:z.getData("application/json"))!=null?U:"{}");F.cardId!==o&&(th(i,s,String(o),{text:e.text+`

--------

`+F.text}),Ug(F.boardId,F.columnId,F.cardId))}const b=lf(()=>c?"text":"default");return(S,F)=>{var z;return Ve(a).isEditing?(_e(),Bt(Mm,{key:1,"initial-value":e.text,placeholder:"Edit card",color:Ve(r),autofocus:"","save-on-blur":"",onSave:h},null,8,["initial-value","color"])):(_e(),He("li",{key:0,draggable:"true",onDragstart:_,onDragover:g,onClick:d,onDrop:C,class:ei({hidden:!c&&((z=Ve(u))==null?void 0:z.cardsHidden)})},[Ge(Dm,{onDelete:F[0]||(F[0]=U=>t.onDelete(String(Ve(o))))},{default:Zl(()=>[HA]),_:1}),Vo(" "+Br(e.text),1)],34))}}});var WA=an(zA,[["__scopeId","data-v-7f6c0a06"]]);const jA={key:0,class:"spacer"},VA=Me({props:{title:null,color:null,boardId:null,columnId:null,cards:null},setup(t){const{columnId:e,boardId:n}=t,r=Ye("user");function i(o){o.trim()!==""&&(!(r!=null&&r.uid)||CI(n,e,{text:o,author:r.uid}))}function s(o){Ug(n,e,o)}return(o,a)=>(_e(),He("section",null,[lt("h2",null,Br(t.title),1),lt("ul",null,[(_e(!0),He(Fe,null,Gi(t.cards,(l,c)=>(_e(),Bt(WA,{id:c,key:c,author:l.author,text:l.text,color:t.color,onDelete:s,"board-id":t.boardId,"column-id":t.columnId},null,8,["id","author","text","color","board-id","column-id"]))),128))]),Object.keys(t.cards).length>0?(_e(),He("div",jA)):Gn("",!0),Ge(Mm,{color:t.color,placeholder:"Add new card",onSave:i},null,8,["color"])]))}});var qA=an(VA,[["__scopeId","data-v-7467a982"]]);const KA={class:"board"},GA={class:"columns"},YA={class:"options"},XA=Me({setup(t){const e=Ye("board"),n=Ye("boardId"),r=Ye("user");zr(()=>{r.uid&&Hg(r.uid,n)});function i(){yI(n,!e.cardsHidden)}function s(){return e.cardsHidden?"Show all cards":"Hide other cards"}function o(u){u.key==="Enter"&&(u.target.blur(),u.preventDefault())}function a(u){const d=(u==null?void 0:u.target).value.trim();wI(n,d),c.value=d||"Untitled Retro"}function l(){c.value==="Untitled Retro"&&(c.value="")}const c=de(e.title||"Untitled Retro");return Tn(e,u=>{c.value=u.title||"Untitled Retro"}),(u,d)=>(_e(),He(Fe,null,[lt("div",KA,[ib(lt("input",{class:ei({untitled:c.value==="Untitled Retro"}),"onUpdate:modelValue":d[0]||(d[0]=h=>c.value=h),onKeypress:o,onFocusout:a,onFocusin:l},null,34),[[Jb,c.value]]),lt("section",GA,[(_e(!0),He(Fe,null,Gi(Ve(e).columns,(h,_)=>{var g;return _e(),Bt(qA,{cards:(g=h.cards)!=null?g:[],"column-id":String(_),"board-id":Ve(n),key:String(_),title:h.title,color:h.color},null,8,["cards","column-id","board-id","title","color"])}),128))])]),lt("section",YA,[Ge(xI,{onClick:i,text:s()},null,8,["text"])])],64))}});var JA=an(XA,[["__scopeId","data-v-a2bc0e1e"]]);const QA={},ZA={class:"loader"};function ek(t,e){return _e(),He("div",ZA,"Loading...")}var tk=an(QA,[["render",ek],["__scopeId","data-v-840bd5c8"]]);const nk={key:0},rk={key:1},ik={key:1},sk=Me({props:{boardId:null},setup(t){const{boardId:e}=t,n=bI(e);return Hr("boardId",e),Hr("board",n),(r,i)=>(_e(),He(Fe,null,[Ve(n).loading?Gn("",!0):(_e(),He("main",nk,[Ve(n).exists?(_e(),Bt(JA,{key:0})):Gn("",!0),Ve(n).exists?Gn("",!0):(_e(),He("div",rk,"Couldn't find board"))])),Ve(n).loading?(_e(),He("main",ik,[Ge(tk)])):Gn("",!0)],64))}});var ok=an(sk,[["__scopeId","data-v-b2bd279e"]]);const ak=Vo("\u2716"),lk={class:"columns"},ck=Me({props:{board:null,isTemplate:{type:Boolean}},emits:["delete"],setup(t,{emit:e}){function n(r){r.stopPropagation(),e("delete")}return(r,i)=>(_e(),He("div",{class:ei(["board",{template:t.isTemplate}])},[t.isTemplate?Gn("",!0):(_e(),Bt(Dm,{key:0,color:"black",onClick:n},{default:Zl(()=>[ak]),_:1})),lt("h3",null,Br(t.board.title||"Untitled Retro"),1),lt("div",lk,[(_e(!0),He(Fe,null,Gi(t.board.columns,s=>{var o;return _e(),He("div",{class:"column",style:Ao([{backgroundColor:s.color},{height:t.isTemplate?"100%":`${Math.min((Object.keys((o=s==null?void 0:s.cards)!=null?o:{}).length+1)*20,100)}%`}])},Br(s.title),5)}),256))])],2))}});var Fh=an(ck,[["__scopeId","data-v-205c438c"]]);const uk=[{title:"Mad Sad Glad",columns:[{title:"Mad",color:"#f44336"},{title:"Sad",color:"#e91e63"},{title:"Glad",color:"#9c27b0"}]},{title:"Start Stop Continue",columns:[{title:"Start",color:"#2196f3"},{title:"Stop",color:"#ff9800"},{title:"Continue",color:"#009688"}]},{title:"Sailboat",columns:[{title:"What is the wind pushing our sails that make us go fast",color:"#f44336"},{title:"What anchors are holding us back",color:"#e91e63"},{title:"What rocks are ahead of us that risk our future",color:"#9c27b0"},{title:"What is our ideal island destination",color:"#673ab7"}]}],Lm=t=>(xv("data-v-591383d7"),t=t(),Rv(),t),dk={class:"container"},hk=Lm(()=>lt("h2",null,"start a new board",-1)),fk=Lm(()=>lt("h2",null,"your boards",-1)),pk=Me({props:{navigateToBoard:null},setup(t){const{navigateToBoard:e}=t,n=Ye("user"),r=he(()=>vI(n.uid));function i(o){TI(n.uid,o)}async function s(o){if(!(n!=null&&n.uid))return;const a=await EI(n.uid,o);a&&e(a)}return(o,a)=>(_e(),He("div",dk,[lt("main",null,[lt("h1",null,"\u{1F680} quick retro "+Br("")+"\u{1F680}",1),hk,lt("section",null,[(_e(!0),He(Fe,null,Gi(Ve(uk),l=>(_e(),Bt(Fh,{onClick:c=>s(l),board:l,"is-template":!0},null,8,["onClick","board"]))),256))]),fk,lt("section",null,[(_e(!0),He(Fe,null,Gi(Ve(r),(l,c)=>(_e(),Bt(Fh,{onClick:u=>t.navigateToBoard(c),onDelete:u=>i(c),board:l,"is-template":!1},null,8,["onClick","onDelete","board"]))),256))])])]))}});var gk=an(pk,[["__scopeId","data-v-591383d7"]]);const mk=Me({setup(t){const e=de(window.location.hash.slice(1));function n(i){console.log("navigating to board",i),history.pushState({},"",`#${i}`),e.value=i}addEventListener("popstate",()=>{console.log(window.location.hash.slice(1)),e.value=window.location.hash.slice(1)});const r=II();return Hr("user",r),(i,s)=>e.value&&e.value.length>0?(_e(),Bt(ok,{key:0,boardId:e.value},null,8,["boardId"])):(_e(),Bt(gk,{key:1,"navigate-to-board":n}))}});ey(mk).mount("#app")});export default _k();
