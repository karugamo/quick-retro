var b_=Object.defineProperty,y_=Object.defineProperties;var w_=Object.getOwnPropertyDescriptors;var fu=Object.getOwnPropertySymbols;var C_=Object.prototype.hasOwnProperty,E_=Object.prototype.propertyIsEnumerable;var pu=(t,e,n)=>e in t?b_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,gu=(t,e)=>{for(var n in e||(e={}))C_.call(e,n)&&pu(t,n,e[n]);if(fu)for(var n of fu(e))E_.call(e,n)&&pu(t,n,e[n]);return t},mu=(t,e)=>y_(t,w_(e));var T_=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var pN=T_((Et,Tt)=>{const I_=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}};I_();function $l(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const S_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",x_=$l(S_);function Lh(t){return!!t||t===""}function Ao(t){if(Q(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=et(r)?A_(r):Ao(r);if(i)for(const s in i)e[s]=i[s]}return e}else{if(et(t))return t;if(He(t))return t}}const R_=/;(?![^(]*\))/g,P_=/:(.+)/;function A_(t){const e={};return t.split(R_).forEach(n=>{if(n){const r=n.split(P_);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Qr(t){let e="";if(et(t))e=t;else if(Q(t))for(let n=0;n<t.length;n++){const r=Qr(t[n]);r&&(e+=r+" ")}else if(He(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Fr=t=>et(t)?t:t==null?"":Q(t)||He(t)&&(t.toString===Uh||!ne(t.toString))?JSON.stringify(t,Fh,2):String(t),Fh=(t,e)=>e&&e.__v_isRef?Fh(t,e.value):Ar(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:$h(e)?{[`Set(${e.size})`]:[...e.values()]}:He(e)&&!Q(e)&&!Hh(e)?String(e):e,Re={},Pr=[],Dt=()=>{},N_=()=>!1,k_=/^on[^a-z]/,No=t=>k_.test(t),Bl=t=>t.startsWith("onUpdate:"),st=Object.assign,Ul=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},O_=Object.prototype.hasOwnProperty,pe=(t,e)=>O_.call(t,e),Q=Array.isArray,Ar=t=>ko(t)==="[object Map]",$h=t=>ko(t)==="[object Set]",ne=t=>typeof t=="function",et=t=>typeof t=="string",Hl=t=>typeof t=="symbol",He=t=>t!==null&&typeof t=="object",Bh=t=>He(t)&&ne(t.then)&&ne(t.catch),Uh=Object.prototype.toString,ko=t=>Uh.call(t),M_=t=>ko(t).slice(8,-1),Hh=t=>ko(t)==="[object Object]",zl=t=>et(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ws=$l(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Oo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},D_=/-(\w)/g,$r=Oo(t=>t.replace(D_,(e,n)=>n?n.toUpperCase():"")),L_=/\B([A-Z])/g,Zr=Oo(t=>t.replace(L_,"-$1").toLowerCase()),zh=Oo(t=>t.charAt(0).toUpperCase()+t.slice(1)),_a=Oo(t=>t?`on${zh(t)}`:""),Wi=(t,e)=>!Object.is(t,e),js=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Zs=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},eo=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let _u;const F_=()=>_u||(_u=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Wt;class $_{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Wt&&(this.parent=Wt,this.index=(Wt.scopes||(Wt.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Wt;try{return Wt=this,e()}finally{Wt=n}}}on(){Wt=this}off(){Wt=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.active=!1}}}function B_(t,e=Wt){e&&e.active&&e.effects.push(t)}const Wl=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Wh=t=>(t.w&Rn)>0,jh=t=>(t.n&Rn)>0,U_=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Rn},H_=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const i=e[r];Wh(i)&&!jh(i)?i.delete(t):e[n++]=i,i.w&=~Rn,i.n&=~Rn}e.length=n}},za=new WeakMap;let Ri=0,Rn=1;const Wa=30;let kt;const Qn=Symbol(""),ja=Symbol("");class jl{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,B_(this,r)}run(){if(!this.active)return this.fn();let e=kt,n=Cn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=kt,kt=this,Cn=!0,Rn=1<<++Ri,Ri<=Wa?U_(this):vu(this),this.fn()}finally{Ri<=Wa&&H_(this),Rn=1<<--Ri,kt=this.parent,Cn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){kt===this?this.deferStop=!0:this.active&&(vu(this),this.onStop&&this.onStop(),this.active=!1)}}function vu(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Cn=!0;const Vh=[];function ei(){Vh.push(Cn),Cn=!1}function ti(){const t=Vh.pop();Cn=t===void 0?!0:t}function St(t,e,n){if(Cn&&kt){let r=za.get(t);r||za.set(t,r=new Map);let i=r.get(n);i||r.set(n,i=Wl()),qh(i)}}function qh(t,e){let n=!1;Ri<=Wa?jh(t)||(t.n|=Rn,n=!Wh(t)):n=!t.has(kt),n&&(t.add(kt),kt.deps.push(t))}function nn(t,e,n,r,i,s){const o=za.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&Q(t))o.forEach((l,c)=>{(c==="length"||c>=r)&&a.push(l)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":Q(t)?zl(n)&&a.push(o.get("length")):(a.push(o.get(Qn)),Ar(t)&&a.push(o.get(ja)));break;case"delete":Q(t)||(a.push(o.get(Qn)),Ar(t)&&a.push(o.get(ja)));break;case"set":Ar(t)&&a.push(o.get(Qn));break}if(a.length===1)a[0]&&Va(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Va(Wl(l))}}function Va(t,e){for(const n of Q(t)?t:[...t])(n!==kt||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const z_=$l("__proto__,__v_isRef,__isVue"),Kh=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(Hl)),W_=Vl(),j_=Vl(!1,!0),V_=Vl(!0),bu=q_();function q_(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=ve(this);for(let s=0,o=this.length;s<o;s++)St(r,"get",s+"");const i=r[e](...n);return i===-1||i===!1?r[e](...n.map(ve)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){ei();const r=ve(this)[e].apply(this,n);return ti(),r}}),t}function Vl(t=!1,e=!1){return function(r,i,s){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&s===(t?e?lv:Qh:e?Jh:Xh).get(r))return r;const o=Q(r);if(!t&&o&&pe(bu,i))return Reflect.get(bu,i,s);const a=Reflect.get(r,i,s);return(Hl(i)?Kh.has(i):z_(i))||(t||St(r,"get",i),e)?a:Xe(a)?!o||!zl(i)?a.value:a:He(a)?t?Gl(a):gr(a):a}}const K_=Gh(),G_=Gh(!0);function Gh(t=!1){return function(n,r,i,s){let o=n[r];if(ji(o)&&Xe(o)&&!Xe(i))return!1;if(!t&&!ji(i)&&(Zh(i)||(i=ve(i),o=ve(o)),!Q(n)&&Xe(o)&&!Xe(i)))return o.value=i,!0;const a=Q(n)&&zl(r)?Number(r)<n.length:pe(n,r),l=Reflect.set(n,r,i,s);return n===ve(s)&&(a?Wi(i,o)&&nn(n,"set",r,i):nn(n,"add",r,i)),l}}function Y_(t,e){const n=pe(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&nn(t,"delete",e,void 0),r}function X_(t,e){const n=Reflect.has(t,e);return(!Hl(e)||!Kh.has(e))&&St(t,"has",e),n}function J_(t){return St(t,"iterate",Q(t)?"length":Qn),Reflect.ownKeys(t)}const Yh={get:W_,set:K_,deleteProperty:Y_,has:X_,ownKeys:J_},Q_={get:V_,set(t,e){return!0},deleteProperty(t,e){return!0}},Z_=st({},Yh,{get:j_,set:G_}),ql=t=>t,Mo=t=>Reflect.getPrototypeOf(t);function Ss(t,e,n=!1,r=!1){t=t.__v_raw;const i=ve(t),s=ve(e);e!==s&&!n&&St(i,"get",e),!n&&St(i,"get",s);const{has:o}=Mo(i),a=r?ql:n?Xl:Vi;if(o.call(i,e))return a(t.get(e));if(o.call(i,s))return a(t.get(s));t!==i&&t.get(e)}function xs(t,e=!1){const n=this.__v_raw,r=ve(n),i=ve(t);return t!==i&&!e&&St(r,"has",t),!e&&St(r,"has",i),t===i?n.has(t):n.has(t)||n.has(i)}function Rs(t,e=!1){return t=t.__v_raw,!e&&St(ve(t),"iterate",Qn),Reflect.get(t,"size",t)}function yu(t){t=ve(t);const e=ve(this);return Mo(e).has.call(e,t)||(e.add(t),nn(e,"add",t,t)),this}function wu(t,e){e=ve(e);const n=ve(this),{has:r,get:i}=Mo(n);let s=r.call(n,t);s||(t=ve(t),s=r.call(n,t));const o=i.call(n,t);return n.set(t,e),s?Wi(e,o)&&nn(n,"set",t,e):nn(n,"add",t,e),this}function Cu(t){const e=ve(this),{has:n,get:r}=Mo(e);let i=n.call(e,t);i||(t=ve(t),i=n.call(e,t)),r&&r.call(e,t);const s=e.delete(t);return i&&nn(e,"delete",t,void 0),s}function Eu(){const t=ve(this),e=t.size!==0,n=t.clear();return e&&nn(t,"clear",void 0,void 0),n}function Ps(t,e){return function(r,i){const s=this,o=s.__v_raw,a=ve(o),l=e?ql:t?Xl:Vi;return!t&&St(a,"iterate",Qn),o.forEach((c,u)=>r.call(i,l(c),l(u),s))}}function As(t,e,n){return function(...r){const i=this.__v_raw,s=ve(i),o=Ar(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...r),u=n?ql:e?Xl:Vi;return!e&&St(s,"iterate",l?ja:Qn),{next(){const{value:d,done:h}=c.next();return h?{value:d,done:h}:{value:a?[u(d[0]),u(d[1])]:u(d),done:h}},[Symbol.iterator](){return this}}}}function dn(t){return function(...e){return t==="delete"?!1:this}}function ev(){const t={get(s){return Ss(this,s)},get size(){return Rs(this)},has:xs,add:yu,set:wu,delete:Cu,clear:Eu,forEach:Ps(!1,!1)},e={get(s){return Ss(this,s,!1,!0)},get size(){return Rs(this)},has:xs,add:yu,set:wu,delete:Cu,clear:Eu,forEach:Ps(!1,!0)},n={get(s){return Ss(this,s,!0)},get size(){return Rs(this,!0)},has(s){return xs.call(this,s,!0)},add:dn("add"),set:dn("set"),delete:dn("delete"),clear:dn("clear"),forEach:Ps(!0,!1)},r={get(s){return Ss(this,s,!0,!0)},get size(){return Rs(this,!0)},has(s){return xs.call(this,s,!0)},add:dn("add"),set:dn("set"),delete:dn("delete"),clear:dn("clear"),forEach:Ps(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=As(s,!1,!1),n[s]=As(s,!0,!1),e[s]=As(s,!1,!0),r[s]=As(s,!0,!0)}),[t,n,e,r]}const[tv,nv,rv,iv]=ev();function Kl(t,e){const n=e?t?iv:rv:t?nv:tv;return(r,i,s)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(pe(n,i)&&i in r?n:r,i,s)}const sv={get:Kl(!1,!1)},ov={get:Kl(!1,!0)},av={get:Kl(!0,!1)},Xh=new WeakMap,Jh=new WeakMap,Qh=new WeakMap,lv=new WeakMap;function cv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function uv(t){return t.__v_skip||!Object.isExtensible(t)?0:cv(M_(t))}function gr(t){return ji(t)?t:Yl(t,!1,Yh,sv,Xh)}function dv(t){return Yl(t,!1,Z_,ov,Jh)}function Gl(t){return Yl(t,!0,Q_,av,Qh)}function Yl(t,e,n,r,i){if(!He(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=i.get(t);if(s)return s;const o=uv(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return i.set(t,a),a}function Nr(t){return ji(t)?Nr(t.__v_raw):!!(t&&t.__v_isReactive)}function ji(t){return!!(t&&t.__v_isReadonly)}function Zh(t){return!!(t&&t.__v_isShallow)}function ef(t){return Nr(t)||ji(t)}function ve(t){const e=t&&t.__v_raw;return e?ve(e):t}function tf(t){return Zs(t,"__v_skip",!0),t}const Vi=t=>He(t)?gr(t):t,Xl=t=>He(t)?Gl(t):t;function nf(t){Cn&&kt&&(t=ve(t),qh(t.dep||(t.dep=Wl())))}function rf(t,e){t=ve(t),t.dep&&Va(t.dep)}function Xe(t){return!!(t&&t.__v_isRef===!0)}function he(t){return hv(t,!1)}function hv(t,e){return Xe(t)?t:new fv(t,e)}class fv{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ve(e),this._value=n?e:Vi(e)}get value(){return nf(this),this._value}set value(e){e=this.__v_isShallow?e:ve(e),Wi(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:Vi(e),rf(this))}}function Ct(t){return Xe(t)?t.value:t}const pv={get:(t,e,n)=>Ct(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return Xe(i)&&!Xe(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function sf(t){return Nr(t)?t:new Proxy(t,pv)}class gv{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function Do(t,e,n){const r=t[e];return Xe(r)?r:new gv(t,e,n)}class mv{constructor(e,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new jl(e,()=>{this._dirty||(this._dirty=!0,rf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const e=ve(this);return nf(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function _v(t,e,n=!1){let r,i;const s=ne(t);return s?(r=t,i=Dt):(r=t.get,i=t.set),new mv(r,i,s||!i,n)}function En(t,e,n,r){let i;try{i=r?t(...r):t()}catch(s){Lo(s,e,n)}return i}function At(t,e,n,r){if(ne(t)){const s=En(t,e,n,r);return s&&Bh(s)&&s.catch(o=>{Lo(o,e,n)}),s}const i=[];for(let s=0;s<t.length;s++)i.push(At(t[s],e,n,r));return i}function Lo(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=n;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){En(l,null,10,[t,o,a]);return}}vv(t,n,i,r)}function vv(t,e,n,r=!0){console.error(t)}let to=!1,qa=!1;const wt=[];let Jt=0;const ki=[];let Pi=null,Tr=0;const Oi=[];let gn=null,Ir=0;const of=Promise.resolve();let Jl=null,Ka=null;function af(t){const e=Jl||of;return t?e.then(this?t.bind(this):t):e}function bv(t){let e=Jt+1,n=wt.length;for(;e<n;){const r=e+n>>>1;qi(wt[r])<t?e=r+1:n=r}return e}function lf(t){(!wt.length||!wt.includes(t,to&&t.allowRecurse?Jt+1:Jt))&&t!==Ka&&(t.id==null?wt.push(t):wt.splice(bv(t.id),0,t),cf())}function cf(){!to&&!qa&&(qa=!0,Jl=of.then(hf))}function yv(t){const e=wt.indexOf(t);e>Jt&&wt.splice(e,1)}function uf(t,e,n,r){Q(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?r+1:r))&&n.push(t),cf()}function wv(t){uf(t,Pi,ki,Tr)}function Cv(t){uf(t,gn,Oi,Ir)}function Ql(t,e=null){if(ki.length){for(Ka=e,Pi=[...new Set(ki)],ki.length=0,Tr=0;Tr<Pi.length;Tr++)Pi[Tr]();Pi=null,Tr=0,Ka=null,Ql(t,e)}}function df(t){if(Oi.length){const e=[...new Set(Oi)];if(Oi.length=0,gn){gn.push(...e);return}for(gn=e,gn.sort((n,r)=>qi(n)-qi(r)),Ir=0;Ir<gn.length;Ir++)gn[Ir]();gn=null,Ir=0}}const qi=t=>t.id==null?1/0:t.id;function hf(t){qa=!1,to=!0,Ql(t),wt.sort((n,r)=>qi(n)-qi(r));const e=Dt;try{for(Jt=0;Jt<wt.length;Jt++){const n=wt[Jt];n&&n.active!==!1&&En(n,null,14)}}finally{Jt=0,wt.length=0,df(),to=!1,Jl=null,(wt.length||ki.length||Oi.length)&&hf(t)}}function Ev(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Re;let i=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:h}=r[u]||Re;h?i=n.map(_=>_.trim()):d&&(i=n.map(eo))}let a,l=r[a=_a(e)]||r[a=_a($r(e))];!l&&s&&(l=r[a=_a(Zr(e))]),l&&At(l,t,6,i);const c=r[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,At(c,t,6,i)}}function ff(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(i!==void 0)return i;const s=t.emits;let o={},a=!1;if(!ne(t)){const l=c=>{const u=ff(c,e,!0);u&&(a=!0,st(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(r.set(t,null),null):(Q(s)?s.forEach(l=>o[l]=null):st(o,s),r.set(t,o),o)}function Fo(t,e){return!t||!No(e)?!1:(e=e.slice(2).replace(/Once$/,""),pe(t,e[0].toLowerCase()+e.slice(1))||pe(t,Zr(e))||pe(t,e))}let ft=null,$o=null;function no(t){const e=ft;return ft=t,$o=t&&t.type.__scopeId||null,e}function Tv(t){$o=t}function Iv(){$o=null}function Zl(t,e=ft,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&Ou(-1);const s=no(e),o=t(...i);return no(s),r._d&&Ou(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function va(t){const{type:e,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:d,data:h,setupState:_,ctx:g,inheritAttrs:C}=t;let b,O;const H=no(t);try{if(n.shapeFlag&4){const z=i||r;b=jt(u.call(z,z,d,s,_,h,g)),O=l}else{const z=e;b=jt(z.length>1?z(s,{attrs:l,slots:a,emit:c}):z(s,null)),O=e.props?l:Sv(l)}}catch(z){Mi.length=0,Lo(z,t,1),b=Ze(It)}let V=b;if(O&&C!==!1){const z=Object.keys(O),{shapeFlag:X}=V;z.length&&X&7&&(o&&z.some(Bl)&&(O=xv(O,o)),V=sr(V,O))}return n.dirs&&(V.dirs=V.dirs?V.dirs.concat(n.dirs):n.dirs),n.transition&&(V.transition=n.transition),b=V,no(H),b}const Sv=t=>{let e;for(const n in t)(n==="class"||n==="style"||No(n))&&((e||(e={}))[n]=t[n]);return e},xv=(t,e)=>{const n={};for(const r in t)(!Bl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Rv(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Tu(r,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const h=u[d];if(o[h]!==r[h]&&!Fo(c,h))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Tu(r,o,c):!0:!!o;return!1}function Tu(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!Fo(n,s))return!0}return!1}function Pv({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Av=t=>t.__isSuspense;function Nv(t,e){e&&e.pendingBranch?Q(t)?e.effects.push(...t):e.effects.push(t):Cv(t)}function Br(t,e){if(it){let n=it.provides;const r=it.parent&&it.parent.provides;r===n&&(n=it.provides=Object.create(r)),n[t]=e}}function qe(t,e,n=!1){const r=it||ft;if(r){const i=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&ne(e)?e.call(r.proxy):e}}function Ur(t,e){return Bo(t,null,e)}function kv(t,e){return Bo(t,null,{flush:"post"})}const Iu={};function Tn(t,e,n){return Bo(t,e,n)}function Bo(t,e,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:o}=Re){const a=it;let l,c=!1,u=!1;if(Xe(t)?(l=()=>t.value,c=Zh(t)):Nr(t)?(l=()=>t,r=!0):Q(t)?(u=!0,c=t.some(Nr),l=()=>t.map(O=>{if(Xe(O))return O.value;if(Nr(O))return qn(O);if(ne(O))return En(O,a,2)})):ne(t)?e?l=()=>En(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return d&&d(),At(t,a,3,[h])}:l=Dt,e&&r){const O=l;l=()=>qn(O())}let d,h=O=>{d=b.onStop=()=>{En(O,a,4)}};if(Yi)return h=Dt,e?n&&At(e,a,3,[l(),u?[]:void 0,h]):l(),Dt;let _=u?[]:Iu;const g=()=>{if(!!b.active)if(e){const O=b.run();(r||c||(u?O.some((H,V)=>Wi(H,_[V])):Wi(O,_)))&&(d&&d(),At(e,a,3,[O,_===Iu?void 0:_,h]),_=O)}else b.run()};g.allowRecurse=!!e;let C;i==="sync"?C=g:i==="post"?C=()=>vt(g,a&&a.suspense):C=()=>{!a||a.isMounted?wv(g):g()};const b=new jl(l,C);return e?n?g():_=b.run():i==="post"?vt(b.run.bind(b),a&&a.suspense):b.run(),()=>{b.stop(),a&&a.scope&&Ul(a.scope.effects,b)}}function Ov(t,e,n){const r=this.proxy,i=et(t)?t.includes(".")?pf(r,t):()=>r[t]:t.bind(r,r);let s;ne(e)?s=e:(s=e.handler,n=e);const o=it;Hr(this);const a=Bo(i,s.bind(r),n);return o?Hr(o):er(),a}function pf(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function qn(t,e){if(!He(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Xe(t))qn(t.value,e);else if(Q(t))for(let n=0;n<t.length;n++)qn(t[n],e);else if($h(t)||Ar(t))t.forEach(n=>{qn(n,e)});else if(Hh(t))for(const n in t)qn(t[n],e);return t}function Mv(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ni(()=>{t.isMounted=!0}),Wo(()=>{t.isUnmounting=!0}),t}const Rt=[Function,Array],Dv={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Rt,onEnter:Rt,onAfterEnter:Rt,onEnterCancelled:Rt,onBeforeLeave:Rt,onLeave:Rt,onAfterLeave:Rt,onLeaveCancelled:Rt,onBeforeAppear:Rt,onAppear:Rt,onAfterAppear:Rt,onAppearCancelled:Rt},setup(t,{slots:e}){const n=ic(),r=Mv();let i;return()=>{const s=e.default&&_f(e.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){for(const C of s)if(C.type!==It){o=C;break}}const a=ve(t),{mode:l}=a;if(r.isLeaving)return ba(o);const c=Su(o);if(!c)return ba(o);const u=Ga(c,a,r,n);Ya(c,u);const d=n.subTree,h=d&&Su(d);let _=!1;const{getTransitionKey:g}=c.type;if(g){const C=g();i===void 0?i=C:C!==i&&(i=C,_=!0)}if(h&&h.type!==It&&(!jn(c,h)||_)){const C=Ga(h,a,r,n);if(Ya(h,C),l==="out-in")return r.isLeaving=!0,C.afterLeave=()=>{r.isLeaving=!1,n.update()},ba(o);l==="in-out"&&c.type!==It&&(C.delayLeave=(b,O,H)=>{const V=mf(r,h);V[String(h.key)]=h,b._leaveCb=()=>{O(),b._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=H})}return o}}},gf=Dv;function mf(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Ga(t,e,n,r){const{appear:i,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:d,onLeave:h,onAfterLeave:_,onLeaveCancelled:g,onBeforeAppear:C,onAppear:b,onAfterAppear:O,onAppearCancelled:H}=e,V=String(t.key),z=mf(n,t),X=(E,S)=>{E&&At(E,r,9,S)},me={mode:s,persisted:o,beforeEnter(E){let S=a;if(!n.isMounted)if(i)S=C||a;else return;E._leaveCb&&E._leaveCb(!0);const D=z[V];D&&jn(t,D)&&D.el._leaveCb&&D.el._leaveCb(),X(S,[E])},enter(E){let S=l,D=c,q=u;if(!n.isMounted)if(i)S=b||l,D=O||c,q=H||u;else return;let Z=!1;const L=E._enterCb=re=>{Z||(Z=!0,re?X(q,[E]):X(D,[E]),me.delayedLeave&&me.delayedLeave(),E._enterCb=void 0)};S?(S(E,L),S.length<=1&&L()):L()},leave(E,S){const D=String(t.key);if(E._enterCb&&E._enterCb(!0),n.isUnmounting)return S();X(d,[E]);let q=!1;const Z=E._leaveCb=L=>{q||(q=!0,S(),L?X(g,[E]):X(_,[E]),E._leaveCb=void 0,z[D]===t&&delete z[D])};z[D]=t,h?(h(E,Z),h.length<=1&&Z()):Z()},clone(E){return Ga(E,e,n,r)}};return me}function ba(t){if(Uo(t))return t=sr(t),t.children=null,t}function Su(t){return Uo(t)?t.children?t.children[0]:void 0:t}function Ya(t,e){t.shapeFlag&6&&t.component?Ya(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function _f(t,e=!1,n){let r=[],i=0;for(let s=0;s<t.length;s++){let o=t[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===Le?(o.patchFlag&128&&i++,r=r.concat(_f(o.children,e,a))):(e||o.type!==It)&&r.push(a!=null?sr(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function Be(t){return ne(t)?{setup:t,name:t.name}:t}const ro=t=>!!t.type.__asyncLoader,Uo=t=>t.type.__isKeepAlive;function Lv(t,e){vf(t,"a",e)}function Fv(t,e){vf(t,"da",e)}function vf(t,e,n=it){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Ho(e,r,n),n){let i=n.parent;for(;i&&i.parent;)Uo(i.parent.vnode)&&$v(r,e,n,i),i=i.parent}}function $v(t,e,n,r){const i=Ho(e,t,r,!0);ec(()=>{Ul(r[e],i)},n)}function Ho(t,e,n=it,r=!1){if(n){const i=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;ei(),Hr(n);const a=At(e,n,t,o);return er(),ti(),a});return r?i.unshift(s):i.push(s),s}}const on=t=>(e,n=it)=>(!Yi||t==="sp")&&Ho(t,e,n),zo=on("bm"),ni=on("m"),Bv=on("bu"),Uv=on("u"),Wo=on("bum"),ec=on("um"),Hv=on("sp"),zv=on("rtg"),Wv=on("rtc");function jv(t,e=it){Ho("ec",t,e)}let Xa=!0;function Vv(t){const e=yf(t),n=t.proxy,r=t.ctx;Xa=!1,e.beforeCreate&&xu(e.beforeCreate,t,"bc");const{data:i,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:h,beforeUpdate:_,updated:g,activated:C,deactivated:b,beforeDestroy:O,beforeUnmount:H,destroyed:V,unmounted:z,render:X,renderTracked:me,renderTriggered:E,errorCaptured:S,serverPrefetch:D,expose:q,inheritAttrs:Z,components:L,directives:re,filters:ye}=e;if(c&&qv(c,r,null,t.appContext.config.unwrapInjectedRef),o)for(const fe in o){const ie=o[fe];ne(ie)&&(r[fe]=ie.bind(n))}if(i){const fe=i.call(n,n);He(fe)&&(t.data=gr(fe))}if(Xa=!0,s)for(const fe in s){const ie=s[fe],Ue=ne(ie)?ie.bind(n,n):ne(ie.get)?ie.get.bind(n,n):Dt,mt=!ne(ie)&&ne(ie.set)?ie.set.bind(n):Dt,Me=de({get:Ue,set:mt});Object.defineProperty(r,fe,{enumerable:!0,configurable:!0,get:()=>Me.value,set:ct=>Me.value=ct})}if(a)for(const fe in a)bf(a[fe],r,n,fe);if(l){const fe=ne(l)?l.call(n):l;Reflect.ownKeys(fe).forEach(ie=>{Br(ie,fe[ie])})}u&&xu(u,t,"c");function ce(fe,ie){Q(ie)?ie.forEach(Ue=>fe(Ue.bind(n))):ie&&fe(ie.bind(n))}if(ce(zo,d),ce(ni,h),ce(Bv,_),ce(Uv,g),ce(Lv,C),ce(Fv,b),ce(jv,S),ce(Wv,me),ce(zv,E),ce(Wo,H),ce(ec,z),ce(Hv,D),Q(q))if(q.length){const fe=t.exposed||(t.exposed={});q.forEach(ie=>{Object.defineProperty(fe,ie,{get:()=>n[ie],set:Ue=>n[ie]=Ue})})}else t.exposed||(t.exposed={});X&&t.render===Dt&&(t.render=X),Z!=null&&(t.inheritAttrs=Z),L&&(t.components=L),re&&(t.directives=re)}function qv(t,e,n=Dt,r=!1){Q(t)&&(t=Ja(t));for(const i in t){const s=t[i];let o;He(s)?"default"in s?o=qe(s.from||i,s.default,!0):o=qe(s.from||i):o=qe(s),Xe(o)&&r?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function xu(t,e,n){At(Q(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function bf(t,e,n,r){const i=r.includes(".")?pf(n,r):()=>n[r];if(et(t)){const s=e[t];ne(s)&&Tn(i,s)}else if(ne(t))Tn(i,t.bind(n));else if(He(t))if(Q(t))t.forEach(s=>bf(s,e,n,r));else{const s=ne(t.handler)?t.handler.bind(n):e[t.handler];ne(s)&&Tn(i,s,t)}}function yf(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!i.length&&!n&&!r?l=e:(l={},i.length&&i.forEach(c=>io(l,c,o,!0)),io(l,e,o)),s.set(e,l),l}function io(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&io(t,s,n,!0),i&&i.forEach(o=>io(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Kv[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Kv={data:Ru,props:Hn,emits:Hn,methods:Hn,computed:Hn,beforeCreate:dt,created:dt,beforeMount:dt,mounted:dt,beforeUpdate:dt,updated:dt,beforeDestroy:dt,beforeUnmount:dt,destroyed:dt,unmounted:dt,activated:dt,deactivated:dt,errorCaptured:dt,serverPrefetch:dt,components:Hn,directives:Hn,watch:Yv,provide:Ru,inject:Gv};function Ru(t,e){return e?t?function(){return st(ne(t)?t.call(this,this):t,ne(e)?e.call(this,this):e)}:e:t}function Gv(t,e){return Hn(Ja(t),Ja(e))}function Ja(t){if(Q(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function dt(t,e){return t?[...new Set([].concat(t,e))]:e}function Hn(t,e){return t?st(st(Object.create(null),t),e):e}function Yv(t,e){if(!t)return e;if(!e)return t;const n=st(Object.create(null),t);for(const r in e)n[r]=dt(t[r],e[r]);return n}function Xv(t,e,n,r=!1){const i={},s={};Zs(s,jo,1),t.propsDefaults=Object.create(null),wf(t,e,i,s);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=r?i:dv(i):t.type.props?t.props=i:t.props=s,t.attrs=s}function Jv(t,e,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=t,a=ve(i),[l]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let h=u[d];if(Fo(t.emitsOptions,h))continue;const _=e[h];if(l)if(pe(s,h))_!==s[h]&&(s[h]=_,c=!0);else{const g=$r(h);i[g]=Qa(l,a,g,_,t,!1)}else _!==s[h]&&(s[h]=_,c=!0)}}}else{wf(t,e,i,s)&&(c=!0);let u;for(const d in a)(!e||!pe(e,d)&&((u=Zr(d))===d||!pe(e,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(i[d]=Qa(l,a,d,void 0,t,!0)):delete i[d]);if(s!==a)for(const d in s)(!e||!pe(e,d)&&!0)&&(delete s[d],c=!0)}c&&nn(t,"set","$attrs")}function wf(t,e,n,r){const[i,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Ws(l))continue;const c=e[l];let u;i&&pe(i,u=$r(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:Fo(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(s){const l=ve(n),c=a||Re;for(let u=0;u<s.length;u++){const d=s[u];n[d]=Qa(i,l,d,c[d],t,!pe(c,d))}}return o}function Qa(t,e,n,r,i,s){const o=t[n];if(o!=null){const a=pe(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&ne(l)){const{propsDefaults:c}=i;n in c?r=c[n]:(Hr(i),r=c[n]=l.call(null,e),er())}else r=l}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===Zr(n))&&(r=!0))}return r}function Cf(t,e,n=!1){const r=e.propsCache,i=r.get(t);if(i)return i;const s=t.props,o={},a=[];let l=!1;if(!ne(t)){const u=d=>{l=!0;const[h,_]=Cf(d,e,!0);st(o,h),_&&a.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return r.set(t,Pr),Pr;if(Q(s))for(let u=0;u<s.length;u++){const d=$r(s[u]);Pu(d)&&(o[d]=Re)}else if(s)for(const u in s){const d=$r(u);if(Pu(d)){const h=s[u],_=o[d]=Q(h)||ne(h)?{type:h}:h;if(_){const g=ku(Boolean,_.type),C=ku(String,_.type);_[0]=g>-1,_[1]=C<0||g<C,(g>-1||pe(_,"default"))&&a.push(d)}}}const c=[o,a];return r.set(t,c),c}function Pu(t){return t[0]!=="$"}function Au(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Nu(t,e){return Au(t)===Au(e)}function ku(t,e){return Q(e)?e.findIndex(n=>Nu(n,t)):ne(e)&&Nu(e,t)?0:-1}const Ef=t=>t[0]==="_"||t==="$stable",tc=t=>Q(t)?t.map(jt):[jt(t)],Qv=(t,e,n)=>{const r=Zl((...i)=>tc(e(...i)),n);return r._c=!1,r},Tf=(t,e,n)=>{const r=t._ctx;for(const i in t){if(Ef(i))continue;const s=t[i];if(ne(s))e[i]=Qv(i,s,r);else if(s!=null){const o=tc(s);e[i]=()=>o}}},If=(t,e)=>{const n=tc(e);t.slots.default=()=>n},Zv=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ve(e),Zs(e,"_",n)):Tf(e,t.slots={})}else t.slots={},e&&If(t,e);Zs(t.slots,jo,1)},eb=(t,e,n)=>{const{vnode:r,slots:i}=t;let s=!0,o=Re;if(r.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(st(i,e),!n&&a===1&&delete i._):(s=!e.$stable,Tf(e,i)),o=e}else e&&(If(t,e),o={default:1});if(s)for(const a in i)!Ef(a)&&!(a in o)&&delete i[a]};function tb(t,e){const n=ft;if(n===null)return t;const r=qo(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,l,c=Re]=e[s];ne(o)&&(o={mounted:o,updated:o}),o.deep&&qn(a),i.push({dir:o,instance:r,value:a,oldValue:void 0,arg:l,modifiers:c})}return t}function $n(t,e,n,r){const i=t.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let l=a.dir[r];l&&(ei(),At(l,n,8,[t.el,a,t,e]),ti())}}function Sf(){return{app:null,config:{isNativeTag:N_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let nb=0;function rb(t,e){return function(r,i=null){ne(r)||(r=Object.assign({},r)),i!=null&&!He(i)&&(i=null);const s=Sf(),o=new Set;let a=!1;const l=s.app={_uid:nb++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:Cb,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&ne(c.install)?(o.add(c),c.install(l,...u)):ne(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,d){if(!a){const h=Ze(r,i);return h.appContext=s,u&&e?e(h,c):t(h,c,d),a=!0,l._container=c,c.__vue_app__=l,qo(h.component)||h.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function Za(t,e,n,r,i=!1){if(Q(t)){t.forEach((h,_)=>Za(h,e&&(Q(e)?e[_]:e),n,r,i));return}if(ro(r)&&!i)return;const s=r.shapeFlag&4?qo(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Re?a.refs={}:a.refs,d=a.setupState;if(c!=null&&c!==l&&(et(c)?(u[c]=null,pe(d,c)&&(d[c]=null)):Xe(c)&&(c.value=null)),ne(l))En(l,a,12,[o,u]);else{const h=et(l),_=Xe(l);if(h||_){const g=()=>{if(t.f){const C=h?u[l]:l.value;i?Q(C)&&Ul(C,s):Q(C)?C.includes(s)||C.push(s):h?(u[l]=[s],pe(d,l)&&(d[l]=u[l])):(l.value=[s],t.k&&(u[t.k]=l.value))}else h?(u[l]=o,pe(d,l)&&(d[l]=o)):Xe(l)&&(l.value=o,t.k&&(u[t.k]=o))};o?(g.id=-1,vt(g,n)):g()}}}const vt=Nv;function ib(t){return sb(t)}function sb(t,e){const n=F_();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:h,setScopeId:_=Dt,cloneNode:g,insertStaticContent:C}=t,b=(f,p,v,y=null,w=null,A=null,M=!1,R=null,N=!!p.dynamicChildren)=>{if(f===p)return;f&&!jn(f,p)&&(y=cn(f),ut(f,w,A,!0),f=null),p.patchFlag===-2&&(N=!1,p.dynamicChildren=null);const{type:T,ref:U,shapeFlag:$}=p;switch(T){case nc:O(f,p,v,y);break;case It:H(f,p,v,y);break;case Vs:f==null&&V(p,v,y,M);break;case Le:re(f,p,v,y,w,A,M,R,N);break;default:$&1?me(f,p,v,y,w,A,M,R,N):$&6?ye(f,p,v,y,w,A,M,R,N):($&64||$&128)&&T.process(f,p,v,y,w,A,M,R,N,xt)}U!=null&&w&&Za(U,f&&f.ref,A,p||f,!p)},O=(f,p,v,y)=>{if(f==null)r(p.el=a(p.children),v,y);else{const w=p.el=f.el;p.children!==f.children&&c(w,p.children)}},H=(f,p,v,y)=>{f==null?r(p.el=l(p.children||""),v,y):p.el=f.el},V=(f,p,v,y)=>{[f.el,f.anchor]=C(f.children,p,v,y,f.el,f.anchor)},z=({el:f,anchor:p},v,y)=>{let w;for(;f&&f!==p;)w=h(f),r(f,v,y),f=w;r(p,v,y)},X=({el:f,anchor:p})=>{let v;for(;f&&f!==p;)v=h(f),i(f),f=v;i(p)},me=(f,p,v,y,w,A,M,R,N)=>{M=M||p.type==="svg",f==null?E(p,v,y,w,A,M,R,N):q(f,p,w,A,M,R,N)},E=(f,p,v,y,w,A,M,R)=>{let N,T;const{type:U,props:$,shapeFlag:B,transition:K,patchFlag:ae,dirs:we}=f;if(f.el&&g!==void 0&&ae===-1)N=f.el=g(f.el);else{if(N=f.el=o(f.type,A,$&&$.is,$),B&8?u(N,f.children):B&16&&D(f.children,N,null,y,w,A&&U!=="foreignObject",M,R),we&&$n(f,null,y,"created"),$){for(const Ce in $)Ce!=="value"&&!Ws(Ce)&&s(N,Ce,null,$[Ce],A,f.children,y,w,Ke);"value"in $&&s(N,"value",null,$.value),(T=$.onVnodeBeforeMount)&&Ht(T,y,f)}S(N,f,f.scopeId,M,y)}we&&$n(f,null,y,"beforeMount");const ue=(!w||w&&!w.pendingBranch)&&K&&!K.persisted;ue&&K.beforeEnter(N),r(N,p,v),((T=$&&$.onVnodeMounted)||ue||we)&&vt(()=>{T&&Ht(T,y,f),ue&&K.enter(N),we&&$n(f,null,y,"mounted")},w)},S=(f,p,v,y,w)=>{if(v&&_(f,v),y)for(let A=0;A<y.length;A++)_(f,y[A]);if(w){let A=w.subTree;if(p===A){const M=w.vnode;S(f,M,M.scopeId,M.slotScopeIds,w.parent)}}},D=(f,p,v,y,w,A,M,R,N=0)=>{for(let T=N;T<f.length;T++){const U=f[T]=R?mn(f[T]):jt(f[T]);b(null,U,p,v,y,w,A,M,R)}},q=(f,p,v,y,w,A,M)=>{const R=p.el=f.el;let{patchFlag:N,dynamicChildren:T,dirs:U}=p;N|=f.patchFlag&16;const $=f.props||Re,B=p.props||Re;let K;v&&Bn(v,!1),(K=B.onVnodeBeforeUpdate)&&Ht(K,v,p,f),U&&$n(p,f,v,"beforeUpdate"),v&&Bn(v,!0);const ae=w&&p.type!=="foreignObject";if(T?Z(f.dynamicChildren,T,R,v,y,ae,A):M||Ue(f,p,R,null,v,y,ae,A,!1),N>0){if(N&16)L(R,p,$,B,v,y,w);else if(N&2&&$.class!==B.class&&s(R,"class",null,B.class,w),N&4&&s(R,"style",$.style,B.style,w),N&8){const we=p.dynamicProps;for(let ue=0;ue<we.length;ue++){const Ce=we[ue],I=$[Ce],F=B[Ce];(F!==I||Ce==="value")&&s(R,Ce,I,F,w,f.children,v,y,Ke)}}N&1&&f.children!==p.children&&u(R,p.children)}else!M&&T==null&&L(R,p,$,B,v,y,w);((K=B.onVnodeUpdated)||U)&&vt(()=>{K&&Ht(K,v,p,f),U&&$n(p,f,v,"updated")},y)},Z=(f,p,v,y,w,A,M)=>{for(let R=0;R<p.length;R++){const N=f[R],T=p[R],U=N.el&&(N.type===Le||!jn(N,T)||N.shapeFlag&70)?d(N.el):v;b(N,T,U,null,y,w,A,M,!0)}},L=(f,p,v,y,w,A,M)=>{if(v!==y){for(const R in y){if(Ws(R))continue;const N=y[R],T=v[R];N!==T&&R!=="value"&&s(f,R,T,N,M,p.children,w,A,Ke)}if(v!==Re)for(const R in v)!Ws(R)&&!(R in y)&&s(f,R,v[R],null,M,p.children,w,A,Ke);"value"in y&&s(f,"value",v.value,y.value)}},re=(f,p,v,y,w,A,M,R,N)=>{const T=p.el=f?f.el:a(""),U=p.anchor=f?f.anchor:a("");let{patchFlag:$,dynamicChildren:B,slotScopeIds:K}=p;K&&(R=R?R.concat(K):K),f==null?(r(T,v,y),r(U,v,y),D(p.children,v,U,w,A,M,R,N)):$>0&&$&64&&B&&f.dynamicChildren?(Z(f.dynamicChildren,B,v,w,A,M,R),(p.key!=null||w&&p===w.subTree)&&xf(f,p,!0)):Ue(f,p,v,U,w,A,M,R,N)},ye=(f,p,v,y,w,A,M,R,N)=>{p.slotScopeIds=R,f==null?p.shapeFlag&512?w.ctx.activate(p,v,y,M,N):Se(p,v,y,w,A,M,N):ce(f,p,N)},Se=(f,p,v,y,w,A,M)=>{const R=f.component=mb(f,y,w);if(Uo(f)&&(R.ctx.renderer=xt),_b(R),R.asyncDep){if(w&&w.registerDep(R,fe),!f.el){const N=R.subTree=Ze(It);H(null,N,p,v)}return}fe(R,f,p,v,w,A,M)},ce=(f,p,v)=>{const y=p.component=f.component;if(Rv(f,p,v))if(y.asyncDep&&!y.asyncResolved){ie(y,p,v);return}else y.next=p,yv(y.update),y.update();else p.component=f.component,p.el=f.el,y.vnode=p},fe=(f,p,v,y,w,A,M)=>{const R=()=>{if(f.isMounted){let{next:U,bu:$,u:B,parent:K,vnode:ae}=f,we=U,ue;Bn(f,!1),U?(U.el=ae.el,ie(f,U,M)):U=ae,$&&js($),(ue=U.props&&U.props.onVnodeBeforeUpdate)&&Ht(ue,K,U,ae),Bn(f,!0);const Ce=va(f),I=f.subTree;f.subTree=Ce,b(I,Ce,d(I.el),cn(I),f,w,A),U.el=Ce.el,we===null&&Pv(f,Ce.el),B&&vt(B,w),(ue=U.props&&U.props.onVnodeUpdated)&&vt(()=>Ht(ue,K,U,ae),w)}else{let U;const{el:$,props:B}=p,{bm:K,m:ae,parent:we}=f,ue=ro(p);if(Bn(f,!1),K&&js(K),!ue&&(U=B&&B.onVnodeBeforeMount)&&Ht(U,we,p),Bn(f,!0),$&&Mn){const Ce=()=>{f.subTree=va(f),Mn($,f.subTree,f,w,null)};ue?p.type.__asyncLoader().then(()=>!f.isUnmounted&&Ce()):Ce()}else{const Ce=f.subTree=va(f);b(null,Ce,v,y,f,w,A),p.el=Ce.el}if(ae&&vt(ae,w),!ue&&(U=B&&B.onVnodeMounted)){const Ce=p;vt(()=>Ht(U,we,Ce),w)}p.shapeFlag&256&&f.a&&vt(f.a,w),f.isMounted=!0,p=v=y=null}},N=f.effect=new jl(R,()=>lf(f.update),f.scope),T=f.update=N.run.bind(N);T.id=f.uid,Bn(f,!0),T()},ie=(f,p,v)=>{p.component=f;const y=f.vnode.props;f.vnode=p,f.next=null,Jv(f,p.props,y,v),eb(f,p.children,v),ei(),Ql(void 0,f.update),ti()},Ue=(f,p,v,y,w,A,M,R,N=!1)=>{const T=f&&f.children,U=f?f.shapeFlag:0,$=p.children,{patchFlag:B,shapeFlag:K}=p;if(B>0){if(B&128){Me(T,$,v,y,w,A,M,R,N);return}else if(B&256){mt(T,$,v,y,w,A,M,R,N);return}}K&8?(U&16&&Ke(T,w,A),$!==T&&u(v,$)):U&16?K&16?Me(T,$,v,y,w,A,M,R,N):Ke(T,w,A,!0):(U&8&&u(v,""),K&16&&D($,v,y,w,A,M,R,N))},mt=(f,p,v,y,w,A,M,R,N)=>{f=f||Pr,p=p||Pr;const T=f.length,U=p.length,$=Math.min(T,U);let B;for(B=0;B<$;B++){const K=p[B]=N?mn(p[B]):jt(p[B]);b(f[B],K,v,null,w,A,M,R,N)}T>U?Ke(f,w,A,!0,!1,$):D(p,v,y,w,A,M,R,N,$)},Me=(f,p,v,y,w,A,M,R,N)=>{let T=0;const U=p.length;let $=f.length-1,B=U-1;for(;T<=$&&T<=B;){const K=f[T],ae=p[T]=N?mn(p[T]):jt(p[T]);if(jn(K,ae))b(K,ae,v,null,w,A,M,R,N);else break;T++}for(;T<=$&&T<=B;){const K=f[$],ae=p[B]=N?mn(p[B]):jt(p[B]);if(jn(K,ae))b(K,ae,v,null,w,A,M,R,N);else break;$--,B--}if(T>$){if(T<=B){const K=B+1,ae=K<U?p[K].el:y;for(;T<=B;)b(null,p[T]=N?mn(p[T]):jt(p[T]),v,ae,w,A,M,R,N),T++}}else if(T>B)for(;T<=$;)ut(f[T],w,A,!0),T++;else{const K=T,ae=T,we=new Map;for(T=ae;T<=B;T++){const be=p[T]=N?mn(p[T]):jt(p[T]);be.key!=null&&we.set(be.key,T)}let ue,Ce=0;const I=B-ae+1;let F=!1,G=0;const ge=new Array(I);for(T=0;T<I;T++)ge[T]=0;for(T=K;T<=$;T++){const be=f[T];if(Ce>=I){ut(be,w,A,!0);continue}let De;if(be.key!=null)De=we.get(be.key);else for(ue=ae;ue<=B;ue++)if(ge[ue-ae]===0&&jn(be,p[ue])){De=ue;break}De===void 0?ut(be,w,A,!0):(ge[De-ae]=T+1,De>=G?G=De:F=!0,b(be,p[De],v,null,w,A,M,R,N),Ce++)}const Oe=F?ob(ge):Pr;for(ue=Oe.length-1,T=I-1;T>=0;T--){const be=ae+T,De=p[be],Ee=be+1<U?p[be+1].el:y;ge[T]===0?b(null,De,v,Ee,w,A,M,R,N):F&&(ue<0||T!==Oe[ue]?ct(De,v,Ee,2):ue--)}}},ct=(f,p,v,y,w=null)=>{const{el:A,type:M,transition:R,children:N,shapeFlag:T}=f;if(T&6){ct(f.component.subTree,p,v,y);return}if(T&128){f.suspense.move(p,v,y);return}if(T&64){M.move(f,p,v,xt);return}if(M===Le){r(A,p,v);for(let $=0;$<N.length;$++)ct(N[$],p,v,y);r(f.anchor,p,v);return}if(M===Vs){z(f,p,v);return}if(y!==2&&T&1&&R)if(y===0)R.beforeEnter(A),r(A,p,v),vt(()=>R.enter(A),w);else{const{leave:$,delayLeave:B,afterLeave:K}=R,ae=()=>r(A,p,v),we=()=>{$(A,()=>{ae(),K&&K()})};B?B(A,ae,we):we()}else r(A,p,v)},ut=(f,p,v,y=!1,w=!1)=>{const{type:A,props:M,ref:R,children:N,dynamicChildren:T,shapeFlag:U,patchFlag:$,dirs:B}=f;if(R!=null&&Za(R,null,v,f,!0),U&256){p.ctx.deactivate(f);return}const K=U&1&&B,ae=!ro(f);let we;if(ae&&(we=M&&M.onVnodeBeforeUnmount)&&Ht(we,p,f),U&6)mi(f.component,v,y);else{if(U&128){f.suspense.unmount(v,y);return}K&&$n(f,null,p,"beforeUnmount"),U&64?f.type.remove(f,p,v,w,xt,y):T&&(A!==Le||$>0&&$&64)?Ke(T,p,v,!1,!0):(A===Le&&$&384||!w&&U&16)&&Ke(N,p,v),y&&br(f)}(ae&&(we=M&&M.onVnodeUnmounted)||K)&&vt(()=>{we&&Ht(we,p,f),K&&$n(f,null,p,"unmounted")},v)},br=f=>{const{type:p,el:v,anchor:y,transition:w}=f;if(p===Le){gi(v,y);return}if(p===Vs){X(f);return}const A=()=>{i(v),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(f.shapeFlag&1&&w&&!w.persisted){const{leave:M,delayLeave:R}=w,N=()=>M(v,A);R?R(f.el,A,N):N()}else A()},gi=(f,p)=>{let v;for(;f!==p;)v=h(f),i(f),f=v;i(p)},mi=(f,p,v)=>{const{bum:y,scope:w,update:A,subTree:M,um:R}=f;y&&js(y),w.stop(),A&&(A.active=!1,ut(M,f,p,v)),R&&vt(R,p),vt(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Ke=(f,p,v,y=!1,w=!1,A=0)=>{for(let M=A;M<f.length;M++)ut(f[M],p,v,y,w)},cn=f=>f.shapeFlag&6?cn(f.component.subTree):f.shapeFlag&128?f.suspense.next():h(f.anchor||f.el),yr=(f,p,v)=>{f==null?p._vnode&&ut(p._vnode,null,null,!0):b(p._vnode||null,f,p,null,null,null,v),df(),p._vnode=f},xt={p:b,um:ut,m:ct,r:br,mt:Se,mc:D,pc:Ue,pbc:Z,n:cn,o:t};let On,Mn;return e&&([On,Mn]=e(xt)),{render:yr,hydrate:On,createApp:rb(yr,On)}}function Bn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function xf(t,e,n=!1){const r=t.children,i=e.children;if(Q(r)&&Q(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=mn(i[s]),a.el=o.el),n||xf(o,a))}}function ob(t){const e=t.slice(),n=[0];let r,i,s,o,a;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(i=n[n.length-1],t[i]<c){e[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}const ab=t=>t.__isTeleport,lb=Symbol(),Le=Symbol(void 0),nc=Symbol(void 0),It=Symbol(void 0),Vs=Symbol(void 0),Mi=[];let Zn=null;function Te(t=!1){Mi.push(Zn=t?null:[])}function cb(){Mi.pop(),Zn=Mi[Mi.length-1]||null}let so=1;function Ou(t){so+=t}function Rf(t){return t.dynamicChildren=so>0?Zn||Pr:null,cb(),so>0&&Zn&&Zn.push(t),t}function Je(t,e,n,r,i,s){return Rf(Qe(t,e,n,r,i,s,!0))}function Kt(t,e,n,r,i){return Rf(Ze(t,e,n,r,i,!0))}function Ki(t){return t?t.__v_isVNode===!0:!1}function jn(t,e){return t.type===e.type&&t.key===e.key}const jo="__vInternal",Pf=({key:t})=>t!=null?t:null,qs=({ref:t,ref_key:e,ref_for:n})=>t!=null?et(t)||Xe(t)||ne(t)?{i:ft,r:t,k:e,f:!!n}:t:null;function Qe(t,e=null,n=null,r=0,i=null,s=t===Le?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Pf(e),ref:e&&qs(e),scopeId:$o,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null};return a?(rc(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=et(n)?8:16),so>0&&!o&&Zn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Zn.push(l),l}const Ze=ub;function ub(t,e=null,n=null,r=0,i=null,s=!1){if((!t||t===lb)&&(t=It),Ki(t)){const a=sr(t,e,!0);return n&&rc(a,n),a}if(wb(t)&&(t=t.__vccOpts),e){e=db(e);let{class:a,style:l}=e;a&&!et(a)&&(e.class=Qr(a)),He(l)&&(ef(l)&&!Q(l)&&(l=st({},l)),e.style=Ao(l))}const o=et(t)?1:Av(t)?128:ab(t)?64:He(t)?4:ne(t)?2:0;return Qe(t,e,n,r,i,o,s,!0)}function db(t){return t?ef(t)||jo in t?st({},t):t:null}function sr(t,e,n=!1){const{props:r,ref:i,patchFlag:s,children:o}=t,a=e?Af(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Pf(a),ref:e&&e.ref?n&&i?Q(i)?i.concat(qs(e)):[i,qs(e)]:qs(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Le?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&sr(t.ssContent),ssFallback:t.ssFallback&&sr(t.ssFallback),el:t.el,anchor:t.anchor}}function Vo(t=" ",e=0){return Ze(nc,null,t,e)}function Ai(t="",e=!1){return e?(Te(),Kt(It,null,t)):Ze(It,null,t)}function jt(t){return t==null||typeof t=="boolean"?Ze(It):Q(t)?Ze(Le,null,t.slice()):typeof t=="object"?mn(t):Ze(nc,null,String(t))}function mn(t){return t.el===null||t.memo?t:sr(t)}function rc(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(Q(e))n=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),rc(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(jo in e)?e._ctx=ft:i===3&&ft&&(ft.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ne(e)?(e={default:e,_ctx:ft},n=32):(e=String(e),r&64?(n=16,e=[Vo(e)]):n=8);t.children=e,t.shapeFlag|=n}function Af(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=Qr([e.class,r.class]));else if(i==="style")e.style=Ao([e.style,r.style]);else if(No(i)){const s=e[i],o=r[i];o&&s!==o&&!(Q(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function Ht(t,e,n,r=null){At(t,e,7,[n,r])}function Gi(t,e,n,r){let i;const s=n&&n[r];if(Q(t)||et(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,s&&s[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,s&&s[o])}else if(He(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,s&&s[a])}}else i=[];return n&&(n[r]=i),i}function hb(t,e,n={},r,i){if(ft.isCE||ft.parent&&ro(ft.parent)&&ft.parent.isCE)return Ze("slot",e==="default"?null:{name:e},r&&r());let s=t[e];s&&s._c&&(s._d=!1),Te();const o=s&&Nf(s(n)),a=Kt(Le,{key:n.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function Nf(t){return t.some(e=>Ki(e)?!(e.type===It||e.type===Le&&!Nf(e.children)):!0)?t:null}const el=t=>t?kf(t)?qo(t)||t.proxy:el(t.parent):null,oo=st(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>el(t.parent),$root:t=>el(t.root),$emit:t=>t.emit,$options:t=>yf(t),$forceUpdate:t=>()=>lf(t.update),$nextTick:t=>af.bind(t.proxy),$watch:t=>Ov.bind(t)}),fb={get({_:t},e){const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return i[e];case 4:return n[e];case 3:return s[e]}else{if(r!==Re&&pe(r,e))return o[e]=1,r[e];if(i!==Re&&pe(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&pe(c,e))return o[e]=3,s[e];if(n!==Re&&pe(n,e))return o[e]=4,n[e];Xa&&(o[e]=0)}}const u=oo[e];let d,h;if(u)return e==="$attrs"&&St(t,"get",e),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==Re&&pe(n,e))return o[e]=4,n[e];if(h=l.config.globalProperties,pe(h,e))return h[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:s}=t;return i!==Re&&pe(i,e)?(i[e]=n,!0):r!==Re&&pe(r,e)?(r[e]=n,!0):pe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!n[o]||t!==Re&&pe(t,o)||e!==Re&&pe(e,o)||(a=s[0])&&pe(a,o)||pe(r,o)||pe(oo,o)||pe(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:pe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},pb=Sf();let gb=0;function mb(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||pb,s={uid:gb++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new $_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Cf(r,i),emitsOptions:ff(r,i),emit:null,emitted:null,propsDefaults:Re,inheritAttrs:r.inheritAttrs,ctx:Re,data:Re,props:Re,attrs:Re,slots:Re,refs:Re,setupState:Re,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Ev.bind(null,s),t.ce&&t.ce(s),s}let it=null;const ic=()=>it||ft,Hr=t=>{it=t,t.scope.on()},er=()=>{it&&it.scope.off(),it=null};function kf(t){return t.vnode.shapeFlag&4}let Yi=!1;function _b(t,e=!1){Yi=e;const{props:n,children:r}=t.vnode,i=kf(t);Xv(t,n,i,e),Zv(t,r);const s=i?vb(t,e):void 0;return Yi=!1,s}function vb(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=tf(new Proxy(t.ctx,fb));const{setup:r}=n;if(r){const i=t.setupContext=r.length>1?yb(t):null;Hr(t),ei();const s=En(r,t,0,[t.props,i]);if(ti(),er(),Bh(s)){if(s.then(er,er),e)return s.then(o=>{Mu(t,o,e)}).catch(o=>{Lo(o,t,0)});t.asyncDep=s}else Mu(t,s,e)}else Of(t,e)}function Mu(t,e,n){ne(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:He(e)&&(t.setupState=sf(e)),Of(t,n)}let Du;function Of(t,e,n){const r=t.type;if(!t.render){if(!e&&Du&&!r.render){const i=r.template;if(i){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,c=st(st({isCustomElement:s,delimiters:a},o),l);r.render=Du(i,c)}}t.render=r.render||Dt}Hr(t),ei(),Vv(t),ti(),er()}function bb(t){return new Proxy(t.attrs,{get(e,n){return St(t,"get","$attrs"),e[n]}})}function yb(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=bb(t))},slots:t.slots,emit:t.emit,expose:e}}function qo(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(sf(tf(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in oo)return oo[n](t)}}))}function wb(t){return ne(t)&&"__vccOpts"in t}const de=(t,e)=>_v(t,e,Yi);function k(t,e,n){const r=arguments.length;return r===2?He(e)&&!Q(e)?Ki(e)?Ze(t,null,[e]):Ze(t,e):Ze(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ki(n)&&(n=[n]),Ze(t,e,n))}const Cb="3.2.33",Eb="http://www.w3.org/2000/svg",Vn=typeof document!="undefined"?document:null,Lu=Vn&&Vn.createElement("template"),Tb={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e?Vn.createElementNS(Eb,t):Vn.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>Vn.createTextNode(t),createComment:t=>Vn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Vn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{Lu.innerHTML=r?`<svg>${t}</svg>`:t;const a=Lu.content;if(r){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Ib(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Sb(t,e,n){const r=t.style,i=et(n);if(n&&!i){for(const s in n)tl(r,s,n[s]);if(e&&!et(e))for(const s in e)n[s]==null&&tl(r,s,"")}else{const s=r.display;i?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=s)}}const Fu=/\s*!important$/;function tl(t,e,n){if(Q(n))n.forEach(r=>tl(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=xb(t,e);Fu.test(n)?t.setProperty(Zr(r),n.replace(Fu,""),"important"):t[r]=n}}const $u=["Webkit","Moz","ms"],ya={};function xb(t,e){const n=ya[e];if(n)return n;let r=$r(e);if(r!=="filter"&&r in t)return ya[e]=r;r=zh(r);for(let i=0;i<$u.length;i++){const s=$u[i]+r;if(s in t)return ya[e]=s}return e}const Bu="http://www.w3.org/1999/xlink";function Rb(t,e,n,r,i){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Bu,e.slice(6,e.length)):t.setAttributeNS(Bu,e,n);else{const s=x_(e);n==null||s&&!Lh(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function Pb(t,e,n,r,i,s,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,i,s),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n==null?"":n;(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Lh(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[Mf,Ab]=(()=>{let t=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(t=()=>performance.now());const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let nl=0;const Nb=Promise.resolve(),kb=()=>{nl=0},Ob=()=>nl||(Nb.then(kb),nl=Mf());function Sr(t,e,n,r){t.addEventListener(e,n,r)}function Mb(t,e,n,r){t.removeEventListener(e,n,r)}function Db(t,e,n,r,i=null){const s=t._vei||(t._vei={}),o=s[e];if(r&&o)o.value=r;else{const[a,l]=Lb(e);if(r){const c=s[e]=Fb(r,i);Sr(t,a,c,l)}else o&&(Mb(t,a,o,l),s[e]=void 0)}}const Uu=/(?:Once|Passive|Capture)$/;function Lb(t){let e;if(Uu.test(t)){e={};let n;for(;n=t.match(Uu);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[Zr(t.slice(2)),e]}function Fb(t,e){const n=r=>{const i=r.timeStamp||Mf();(Ab||i>=n.attached-1)&&At($b(r,n.value),e,5,[r])};return n.value=t,n.attached=Ob(),n}function $b(t,e){if(Q(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const Hu=/^on[a-z]/,Bb=(t,e,n,r,i=!1,s,o,a,l)=>{e==="class"?Ib(t,r,i):e==="style"?Sb(t,n,r):No(e)?Bl(e)||Db(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Ub(t,e,r,i))?Pb(t,e,r,s,o,a,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Rb(t,e,r,i))};function Ub(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Hu.test(e)&&ne(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Hu.test(e)&&et(n)?!1:e in t}function sc(t){const e=ic();if(!e)return;const n=()=>rl(e.subTree,t(e.proxy));kv(n),ni(()=>{const r=new MutationObserver(n);r.observe(e.subTree.el.parentNode,{childList:!0}),ec(()=>r.disconnect())})}function rl(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{rl(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)zu(t.el,e);else if(t.type===Le)t.children.forEach(n=>rl(n,e));else if(t.type===Vs){let{el:n,anchor:r}=t;for(;n&&(zu(n,e),n!==r);)n=n.nextSibling}}function zu(t,e){if(t.nodeType===1){const n=t.style;for(const r in e)n.setProperty(`--${r}`,e[r])}}const hn="transition",bi="animation",Xi=(t,{slots:e})=>k(gf,Hb(t),e);Xi.displayName="Transition";const Df={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Xi.props=st({},gf.props,Df);const Un=(t,e=[])=>{Q(t)?t.forEach(n=>n(...e)):t&&t(...e)},Wu=t=>t?Q(t)?t.some(e=>e.length>1):t.length>1:!1;function Hb(t){const e={};for(const L in t)L in Df||(e[L]=t[L]);if(t.css===!1)return e;const{name:n="v",type:r,duration:i,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:_=`${n}-leave-to`}=t,g=zb(i),C=g&&g[0],b=g&&g[1],{onBeforeEnter:O,onEnter:H,onEnterCancelled:V,onLeave:z,onLeaveCancelled:X,onBeforeAppear:me=O,onAppear:E=H,onAppearCancelled:S=V}=e,D=(L,re,ye)=>{Cr(L,re?u:a),Cr(L,re?c:o),ye&&ye()},q=(L,re)=>{Cr(L,_),Cr(L,h),re&&re()},Z=L=>(re,ye)=>{const Se=L?E:H,ce=()=>D(re,L,ye);Un(Se,[re,ce]),ju(()=>{Cr(re,L?l:s),fn(re,L?u:a),Wu(Se)||Vu(re,r,C,ce)})};return st(e,{onBeforeEnter(L){Un(O,[L]),fn(L,s),fn(L,o)},onBeforeAppear(L){Un(me,[L]),fn(L,l),fn(L,c)},onEnter:Z(!1),onAppear:Z(!0),onLeave(L,re){const ye=()=>q(L,re);fn(L,d),Vb(),fn(L,h),ju(()=>{Cr(L,d),fn(L,_),Wu(z)||Vu(L,r,b,ye)}),Un(z,[L,ye])},onEnterCancelled(L){D(L,!1),Un(V,[L])},onAppearCancelled(L){D(L,!0),Un(S,[L])},onLeaveCancelled(L){q(L),Un(X,[L])}})}function zb(t){if(t==null)return null;if(He(t))return[wa(t.enter),wa(t.leave)];{const e=wa(t);return[e,e]}}function wa(t){return eo(t)}function fn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function Cr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function ju(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Wb=0;function Vu(t,e,n,r){const i=t._endId=++Wb,s=()=>{i===t._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:l}=jb(t,e);if(!o)return r();const c=o+"end";let u=0;const d=()=>{t.removeEventListener(c,h),s()},h=_=>{_.target===t&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},a+1),t.addEventListener(c,h)}function jb(t,e){const n=window.getComputedStyle(t),r=g=>(n[g]||"").split(", "),i=r(hn+"Delay"),s=r(hn+"Duration"),o=qu(i,s),a=r(bi+"Delay"),l=r(bi+"Duration"),c=qu(a,l);let u=null,d=0,h=0;e===hn?o>0&&(u=hn,d=o,h=s.length):e===bi?c>0&&(u=bi,d=c,h=l.length):(d=Math.max(o,c),u=d>0?o>c?hn:bi:null,h=u?u===hn?s.length:l.length:0);const _=u===hn&&/\b(transform|all)(,|$)/.test(n[hn+"Property"]);return{type:u,timeout:d,propCount:h,hasTransform:_}}function qu(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Ku(n)+Ku(t[r])))}function Ku(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function Vb(){return document.body.offsetHeight}const Gu=t=>{const e=t.props["onUpdate:modelValue"];return Q(e)?n=>js(e,n):e};function qb(t){t.target.composing=!0}function Yu(t){const e=t.target;e.composing&&(e.composing=!1,Kb(e,"input"))}function Kb(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const Gb={created(t,{modifiers:{lazy:e,trim:n,number:r}},i){t._assign=Gu(i);const s=r||i.props&&i.props.type==="number";Sr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n?a=a.trim():s&&(a=eo(a)),t._assign(a)}),n&&Sr(t,"change",()=>{t.value=t.value.trim()}),e||(Sr(t,"compositionstart",qb),Sr(t,"compositionend",Yu),Sr(t,"change",Yu))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:i}},s){if(t._assign=Gu(s),t.composing||document.activeElement===t&&(n||r&&t.value.trim()===e||(i||t.type==="number")&&eo(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},Yb=st({patchProp:Bb},Tb);let Xu;function Xb(){return Xu||(Xu=ib(Yb))}const Jb=(...t)=>{const e=Xb().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=Qb(r);if(!i)return;const s=e._component;!ne(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Qb(t){return et(t)?document.querySelector(t):t}/**
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
 */const Lf={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const P=function(t,e){if(!t)throw ri(e)},ri=function(t){return new Error("Firebase Database ("+Lf.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Ff=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Zb=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},oc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=s>>2,d=(s&3)<<4|a>>4;let h=(a&15)<<2|c>>6,_=c&63;l||(_=64,o||(h=64)),r.push(n[u],n[d],n[h],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ff(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Zb(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||d==null)throw Error();const h=s<<2|a>>4;if(r.push(h),c!==64){const _=a<<4&240|c>>2;if(r.push(_),d!==64){const g=c<<6&192|d;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},$f=function(t){const e=Ff(t);return oc.encodeByteArray(e,!0)},Bf=function(t){return $f(t).replace(/\./g,"")},il=function(t){try{return oc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ey(t){return Uf(void 0,t)}function Uf(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!ty(n)||(t[n]=Uf(t[n],e[n]));return t}function ty(t){return t!=="__proto__"}/**
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
 */function lt(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ac(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(lt())}function ny(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Hf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ry(){const t=lt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function zf(){return Lf.NODE_ADMIN===!0}function iy(){return typeof indexedDB=="object"}function sy(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const oy="FirebaseError";class ii extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=oy,Object.setPrototypeOf(this,ii.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,us.prototype.create)}}class us{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?ay(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ii(i,a,r)}}function ay(t,e){return t.replace(ly,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const ly=/\{\$([^}]+)}/g;/**
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
 */function Ji(t){return JSON.parse(t)}function Ve(t){return JSON.stringify(t)}/**
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
 */const Wf=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Ji(il(s[0])||""),n=Ji(il(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},cy=function(t){const e=Wf(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},uy=function(t){const e=Wf(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Gt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function zr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function sl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ao(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function lo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Ju(s)&&Ju(o)){if(!lo(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Ju(t){return t!==null&&typeof t=="object"}/**
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
 */function si(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
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
 */class dy{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const h=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^s&(o^a),u=1518500249):(c=s^o^a,u=1859775393):d<60?(c=s&o|a&(s|o),u=2400959708):(c=s^o^a,u=3395469782);const h=(i<<5|i>>>27)+c+l+u+r[d]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function hy(t,e){const n=new fy(t,e);return n.subscribe.bind(n)}class fy{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");py(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ca),i.error===void 0&&(i.error=Ca),i.complete===void 0&&(i.complete=Ca);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function py(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ca(){}function Ko(t,e){return`${t} failed: ${e} argument `}/**
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
 */const gy=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,P(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Go=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Ut(t){return t&&t._delegate?t._delegate:t}/**
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
 */function Ni(t,e){return new Promise((n,r)=>{t.onsuccess=i=>{n(i.target.result)},t.onerror=i=>{var s;r(`${e}: ${(s=i.target.error)===null||s===void 0?void 0:s.message}`)}})}class Qu{constructor(e){this._db=e,this.objectStoreNames=this._db.objectStoreNames}transaction(e,n="readonly"){return new jf(this._db.transaction.call(this._db,e,n))}createObjectStore(e,n){return new Vf(this._db.createObjectStore(e,n))}close(){this._db.close()}}class jf{constructor(e){this._transaction=e,this.complete=new Promise((n,r)=>{this._transaction.oncomplete=function(){n()},this._transaction.onerror=()=>{r(this._transaction.error)},this._transaction.onabort=()=>{r(this._transaction.error)}})}objectStore(e){return new Vf(this._transaction.objectStore(e))}}class Vf{constructor(e){this._store=e}index(e){return new Zu(this._store.index(e))}createIndex(e,n,r){return new Zu(this._store.createIndex(e,n,r))}get(e){const n=this._store.get(e);return Ni(n,"Error reading from IndexedDB")}put(e,n){const r=this._store.put(e,n);return Ni(r,"Error writing to IndexedDB")}delete(e){const n=this._store.delete(e);return Ni(n,"Error deleting from IndexedDB")}clear(){const e=this._store.clear();return Ni(e,"Error clearing IndexedDB object store")}}class Zu{constructor(e){this._index=e}get(e){const n=this._index.get(e);return Ni(n,"Error reading from IndexedDB")}}function my(t,e,n){return new Promise((r,i)=>{try{const s=indexedDB.open(t,e);s.onsuccess=o=>{r(new Qu(o.target.result))},s.onerror=o=>{var a;i(`Error opening indexedDB: ${(a=o.target.error)===null||a===void 0?void 0:a.message}`)},s.onupgradeneeded=o=>{n(new Qu(s.result),o.oldVersion,o.newVersion,new jf(s.transaction))}}catch(s){i(`Error opening indexedDB: ${s.message}`)}})}class or{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const zn="[DEFAULT]";/**
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
 */class _y{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new cs;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(by(e))try{this.getOrInitializeService({instanceIdentifier:zn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=zn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=zn){return this.instances.has(e)}getOptions(e=zn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:vy(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=zn){return this.component?this.component.multipleInstances?e:zn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function vy(t){return t===zn?void 0:t}function by(t){return t.instantiationMode==="EAGER"}/**
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
 */class yy{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new _y(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var xe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(xe||(xe={}));const wy={debug:xe.DEBUG,verbose:xe.VERBOSE,info:xe.INFO,warn:xe.WARN,error:xe.ERROR,silent:xe.SILENT},Cy=xe.INFO,Ey={[xe.DEBUG]:"log",[xe.VERBOSE]:"log",[xe.INFO]:"info",[xe.WARN]:"warn",[xe.ERROR]:"error"},Ty=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Ey[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class lc{constructor(e){this.name=e,this._logLevel=Cy,this._logHandler=Ty,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in xe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?wy[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,xe.DEBUG,...e),this._logHandler(this,xe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,xe.VERBOSE,...e),this._logHandler(this,xe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,xe.INFO,...e),this._logHandler(this,xe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,xe.WARN,...e),this._logHandler(this,xe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,xe.ERROR,...e),this._logHandler(this,xe.ERROR,...e)}}/**
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
 */class Iy{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Sy(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Sy(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ol="@firebase/app",ed="0.7.22";/**
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
 */const cc=new lc("@firebase/app"),xy="@firebase/app-compat",Ry="@firebase/analytics-compat",Py="@firebase/analytics",Ay="@firebase/app-check-compat",Ny="@firebase/app-check",ky="@firebase/auth",Oy="@firebase/auth-compat",My="@firebase/database",Dy="@firebase/database-compat",Ly="@firebase/functions",Fy="@firebase/functions-compat",$y="@firebase/installations",By="@firebase/installations-compat",Uy="@firebase/messaging",Hy="@firebase/messaging-compat",zy="@firebase/performance",Wy="@firebase/performance-compat",jy="@firebase/remote-config",Vy="@firebase/remote-config-compat",qy="@firebase/storage",Ky="@firebase/storage-compat",Gy="@firebase/firestore",Yy="@firebase/firestore-compat",Xy="firebase",Jy="9.7.0";/**
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
 */const qf="[DEFAULT]",Qy={[ol]:"fire-core",[xy]:"fire-core-compat",[Py]:"fire-analytics",[Ry]:"fire-analytics-compat",[Ny]:"fire-app-check",[Ay]:"fire-app-check-compat",[ky]:"fire-auth",[Oy]:"fire-auth-compat",[My]:"fire-rtdb",[Dy]:"fire-rtdb-compat",[Ly]:"fire-fn",[Fy]:"fire-fn-compat",[$y]:"fire-iid",[By]:"fire-iid-compat",[Uy]:"fire-fcm",[Hy]:"fire-fcm-compat",[zy]:"fire-perf",[Wy]:"fire-perf-compat",[jy]:"fire-rc",[Vy]:"fire-rc-compat",[qy]:"fire-gcs",[Ky]:"fire-gcs-compat",[Gy]:"fire-fst",[Yy]:"fire-fst-compat","fire-js":"fire-js",[Xy]:"fire-js-all"};/**
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
 */const co=new Map,al=new Map;function Zy(t,e){try{t.container.addComponent(e)}catch(n){cc.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Wr(t){const e=t.name;if(al.has(e))return cc.debug(`There were multiple attempts to register component ${e}.`),!1;al.set(e,t);for(const n of co.values())Zy(n,t);return!0}function uc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const e0={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},ar=new us("app","Firebase",e0);/**
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
 */class t0{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new or("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ar.create("app-deleted",{appName:this._name})}}/**
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
 */const ds=Jy;function n0(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:qf,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw ar.create("bad-app-name",{appName:String(r)});const i=co.get(r);if(i){if(lo(t,i.options)&&lo(n,i.config))return i;throw ar.create("duplicate-app",{appName:r})}const s=new yy(r);for(const a of al.values())s.addComponent(a);const o=new t0(t,n,s);return co.set(r,o),o}function Kf(t=qf){const e=co.get(t);if(!e)throw ar.create("no-app",{appName:t});return e}function In(t,e,n){var r;let i=(r=Qy[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),cc.warn(a.join(" "));return}Wr(new or(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const r0="firebase-heartbeat-database",i0=1,Qi="firebase-heartbeat-store";let Ea=null;function Gf(){return Ea||(Ea=my(r0,i0,(t,e)=>{switch(e){case 0:t.createObjectStore(Qi)}}).catch(t=>{throw ar.create("storage-open",{originalErrorMessage:t.message})})),Ea}async function s0(t){try{return(await Gf()).transaction(Qi).objectStore(Qi).get(Yf(t))}catch(e){throw ar.create("storage-get",{originalErrorMessage:e.message})}}async function td(t,e){try{const r=(await Gf()).transaction(Qi,"readwrite");return await r.objectStore(Qi).put(e,Yf(t)),r.complete}catch(n){throw ar.create("storage-set",{originalErrorMessage:n.message})}}function Yf(t){return`${t.name}!${t.options.appId}`}/**
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
 */const o0=1024,a0=30*24*60*60*1e3;class l0{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new u0(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=nd();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=a0}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=nd(),{heartbeatsToSend:n,unsentEntries:r}=c0(this._heartbeatsCache.heartbeats),i=Bf(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function nd(){return new Date().toISOString().substring(0,10)}function c0(t,e=o0){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),rd(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),rd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class u0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return iy()?sy().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await s0(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return td(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return td(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function rd(t){return Bf(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function d0(t){Wr(new or("platform-logger",e=>new Iy(e),"PRIVATE")),Wr(new or("heartbeat",e=>new l0(e),"PRIVATE")),In(ol,ed,t),In(ol,ed,"esm2017"),In("fire-js","")}d0("");var h0="firebase",f0="9.7.0";/**
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
 */In(h0,f0,"app");function dc(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Xf(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const p0=Xf,Jf=new us("auth","Firebase",Xf());/**
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
 */const id=new lc("@firebase/auth");function Ks(t,...e){id.logLevel<=xe.ERROR&&id.error(`Auth (${ds}): ${t}`,...e)}/**
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
 */function rn(t,...e){throw hc(t,...e)}function Vt(t,...e){return hc(t,...e)}function g0(t,e,n){const r=Object.assign(Object.assign({},p0()),{[e]:n});return new us("auth","Firebase",r).create(e,{appName:t.name})}function hc(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Jf.create(t,...e)}function ee(t,e,...n){if(!t)throw hc(e,...n)}function Qt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ks(e),new Error(e)}function sn(t,e){t||Qt(e)}/**
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
 */const sd=new Map;function Zt(t){sn(t instanceof Function,"Expected a class definition");let e=sd.get(t);return e?(sn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,sd.set(t,e),e)}/**
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
 */function m0(t,e){const n=uc(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(lo(s,e!=null?e:{}))return i;rn(i,"already-initialized")}return n.initialize({options:e})}function _0(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Zt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function ll(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function v0(){return od()==="http:"||od()==="https:"}function od(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function b0(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(v0()||ny()||"connection"in navigator)?navigator.onLine:!0}function y0(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class hs{constructor(e,n){this.shortDelay=e,this.longDelay=n,sn(n>e,"Short delay should be less than long delay!"),this.isMobile=ac()||Hf()}get(){return b0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */class Qf{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Qt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Qt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Qt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const w0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const C0=new hs(3e4,6e4);function Zf(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Yo(t,e,n,r,i={}){return ep(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=si(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Qf.fetch()(np(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function ep(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},w0),e);try{const i=new E0(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ta(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ta(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ta(t,"email-already-in-use",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw g0(t,u,c);rn(t,u)}}catch(i){if(i instanceof ii)throw i;rn(t,"network-request-failed")}}async function tp(t,e,n,r,i={}){const s=await Yo(t,e,n,r,i);return"mfaPendingCredential"in s&&rn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function np(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?fc(t.config,i):`${t.config.apiScheme}://${i}`}class E0{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Vt(this.auth,"network-request-failed")),C0.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ta(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Vt(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function T0(t,e){return Yo(t,"POST","/v1/accounts:delete",e)}async function I0(t,e){return Yo(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Di(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function S0(t,e=!1){const n=Ut(t),r=await n.getIdToken(e),i=pc(r);ee(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Di(Ia(i.auth_time)),issuedAtTime:Di(Ia(i.iat)),expirationTime:Di(Ia(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ia(t){return Number(t)*1e3}function pc(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ks("JWT malformed, contained fewer than 3 sections"),null;try{const i=il(n);return i?JSON.parse(i):(Ks("Failed to decode base64 JWT payload"),null)}catch(i){return Ks("Caught error parsing JWT payload as JSON",i),null}}function x0(t){const e=pc(t);return ee(e,"internal-error"),ee(typeof e.exp!="undefined","internal-error"),ee(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Zi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof ii&&R0(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function R0({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class P0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class rp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Di(this.lastLoginAt),this.creationTime=Di(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function uo(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Zi(t,I0(n,{idToken:r}));ee(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?k0(s.providerUserInfo):[],a=N0(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new rp(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function A0(t){const e=Ut(t);await uo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function N0(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function k0(t){return t.map(e=>{var{providerId:n}=e,r=dc(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function O0(t,e){const n=await ep(t,{},async()=>{const r=si({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=np(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Qf.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class es{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ee(e.idToken,"internal-error"),ee(typeof e.idToken!="undefined","internal-error"),ee(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):x0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ee(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await O0(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new es;return r&&(ee(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(ee(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(ee(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new es,this.toJSON())}_performRefresh(){return Qt("not implemented")}}/**
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
 */function pn(t,e){ee(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class tr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=dc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new P0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new rp(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Zi(this,this.stsTokenManager.getToken(this.auth,e));return ee(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return S0(this,e)}reload(){return A0(this)}_assign(e){this!==e&&(ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new tr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await uo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Zi(this,T0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,c,u;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,_=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,C=(a=n.tenantId)!==null&&a!==void 0?a:void 0,b=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,O=(c=n.createdAt)!==null&&c!==void 0?c:void 0,H=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:V,emailVerified:z,isAnonymous:X,providerData:me,stsTokenManager:E}=n;ee(V&&E,e,"internal-error");const S=es.fromJSON(this.name,E);ee(typeof V=="string",e,"internal-error"),pn(d,e.name),pn(h,e.name),ee(typeof z=="boolean",e,"internal-error"),ee(typeof X=="boolean",e,"internal-error"),pn(_,e.name),pn(g,e.name),pn(C,e.name),pn(b,e.name),pn(O,e.name),pn(H,e.name);const D=new tr({uid:V,auth:e,email:h,emailVerified:z,displayName:d,isAnonymous:X,photoURL:g,phoneNumber:_,tenantId:C,stsTokenManager:S,createdAt:O,lastLoginAt:H});return me&&Array.isArray(me)&&(D.providerData=me.map(q=>Object.assign({},q))),b&&(D._redirectEventId=b),D}static async _fromIdTokenResponse(e,n,r=!1){const i=new es;i.updateFromServerResponse(n);const s=new tr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await uo(s),s}}/**
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
 */class ip{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ip.type="NONE";const ad=ip;/**
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
 */function Gs(t,e,n){return`firebase:${t}:${e}:${n}`}class kr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Gs(this.userKey,i.apiKey,s),this.fullPersistenceKey=Gs("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?tr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new kr(Zt(ad),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Zt(ad);const o=Gs(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const d=tr._fromJSON(e,u);c!==s&&(a=d),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new kr(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new kr(s,e,r))}}/**
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
 */function ld(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ap(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(sp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(cp(e))return"Blackberry";if(up(e))return"Webos";if(gc(e))return"Safari";if((e.includes("chrome/")||op(e))&&!e.includes("edge/"))return"Chrome";if(lp(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function sp(t=lt()){return/firefox\//i.test(t)}function gc(t=lt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function op(t=lt()){return/crios\//i.test(t)}function ap(t=lt()){return/iemobile/i.test(t)}function lp(t=lt()){return/android/i.test(t)}function cp(t=lt()){return/blackberry/i.test(t)}function up(t=lt()){return/webos/i.test(t)}function Xo(t=lt()){return/iphone|ipad|ipod/i.test(t)}function M0(t=lt()){var e;return Xo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function D0(){return ry()&&document.documentMode===10}function dp(t=lt()){return Xo(t)||lp(t)||up(t)||cp(t)||/windows phone/i.test(t)||ap(t)}function L0(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function hp(t,e=[]){let n;switch(t){case"Browser":n=ld(lt());break;case"Worker":n=`${ld(lt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ds}/${r}`}/**
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
 */class F0{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new cd(this),this.idTokenSubscription=new cd(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Jf,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Zt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await kr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let r=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,s=r==null?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);(!i||i===s)&&(o==null?void 0:o.user)&&(r=o.user)}return r?r._redirectEventId?(ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)):this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await uo(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=y0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ut(e):null;return n&&ee(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Zt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new us("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Zt(e)||this._popupRedirectResolver;ee(n,this,"argument-error"),this.redirectPersistenceManager=await kr.create(this,[Zt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return ee(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=hp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function mc(t){return Ut(t)}class cd{constructor(e){this.auth=e,this.observer=null,this.addObserver=hy(n=>this.observer=n)}get next(){return ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class fp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Qt("not implemented")}_getIdTokenResponse(e){return Qt("not implemented")}_linkToIdToken(e,n){return Qt("not implemented")}_getReauthenticationResolver(e){return Qt("not implemented")}}/**
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
 */async function Or(t,e){return tp(t,"POST","/v1/accounts:signInWithIdp",Zf(t,e))}/**
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
 */const $0="http://localhost";class lr extends fp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new lr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):rn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=dc(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new lr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Or(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Or(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Or(e,n)}buildRequest(){const e={requestUri:$0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=si(n)}return e}}/**
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
 */class pp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class fs extends pp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class _n extends fs{constructor(){super("facebook.com")}static credential(e){return lr._fromParams({providerId:_n.PROVIDER_ID,signInMethod:_n.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _n.credentialFromTaggedObject(e)}static credentialFromError(e){return _n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _n.credential(e.oauthAccessToken)}catch{return null}}}_n.FACEBOOK_SIGN_IN_METHOD="facebook.com";_n.PROVIDER_ID="facebook.com";/**
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
 */class vn extends fs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return lr._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return vn.credentialFromTaggedObject(e)}static credentialFromError(e){return vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return vn.credential(n,r)}catch{return null}}}vn.GOOGLE_SIGN_IN_METHOD="google.com";vn.PROVIDER_ID="google.com";/**
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
 */class bn extends fs{constructor(){super("github.com")}static credential(e){return lr._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bn.credential(e.oauthAccessToken)}catch{return null}}}bn.GITHUB_SIGN_IN_METHOD="github.com";bn.PROVIDER_ID="github.com";/**
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
 */class yn extends fs{constructor(){super("twitter.com")}static credential(e,n){return lr._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return yn.credentialFromTaggedObject(e)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return yn.credential(n,r)}catch{return null}}}yn.TWITTER_SIGN_IN_METHOD="twitter.com";yn.PROVIDER_ID="twitter.com";/**
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
 */async function B0(t,e){return tp(t,"POST","/v1/accounts:signUp",Zf(t,e))}/**
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
 */class Pn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await tr._fromIdTokenResponse(e,r,i),o=ud(r);return new Pn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=ud(r);return new Pn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function ud(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function U0(t){var e;const n=mc(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Pn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await B0(n,{returnSecureToken:!0}),i=await Pn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
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
 */class ho extends ii{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ho.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ho(e,n,r,i)}}function gp(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ho._fromErrorAndOperation(t,s,e,r):s})}async function H0(t,e,n=!1){const r=await Zi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Pn._forOperation(t,"link",r)}/**
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
 */async function z0(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Zi(t,gp(r,i,e,t),n);ee(s.idToken,r,"internal-error");const o=pc(s.idToken);ee(o,r,"internal-error");const{sub:a}=o;return ee(t.uid===a,r,"user-mismatch"),Pn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&rn(r,"user-mismatch"),s}}/**
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
 */async function W0(t,e,n=!1){const r="signIn",i=await gp(t,r,e),s=await Pn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function j0(t,e,n,r){return Ut(t).onAuthStateChanged(e,n,r)}const fo="__sak";/**
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
 */class mp{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(fo,"1"),this.storage.removeItem(fo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function V0(){const t=lt();return gc(t)||Xo(t)}const q0=1e3,K0=10;class _p extends mp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=V0()&&L0(),this.fallbackToPolling=dp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);D0()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,K0):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},q0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}_p.type="LOCAL";const G0=_p;/**
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
 */class vp extends mp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}vp.type="SESSION";const bp=vp;/**
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
 */function Y0(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Jo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Jo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await Y0(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Jo.receivers=[];/**
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
 */class X0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=_c("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(u),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function qt(){return window}function J0(t){qt().location.href=t}/**
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
 */function yp(){return typeof qt().WorkerGlobalScope!="undefined"&&typeof qt().importScripts=="function"}async function Q0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Z0(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function ew(){return yp()?self:null}/**
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
 */const wp="firebaseLocalStorageDb",tw=1,po="firebaseLocalStorage",Cp="fbase_key";class ps{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Qo(t,e){return t.transaction([po],e?"readwrite":"readonly").objectStore(po)}function nw(){const t=indexedDB.deleteDatabase(wp);return new ps(t).toPromise()}function cl(){const t=indexedDB.open(wp,tw);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(po,{keyPath:Cp})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(po)?e(r):(r.close(),await nw(),e(await cl()))})})}async function dd(t,e,n){const r=Qo(t,!0).put({[Cp]:e,value:n});return new ps(r).toPromise()}async function rw(t,e){const n=Qo(t,!1).get(e),r=await new ps(n).toPromise();return r===void 0?null:r.value}function hd(t,e){const n=Qo(t,!0).delete(e);return new ps(n).toPromise()}const iw=800,sw=3;class Ep{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await cl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>sw)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return yp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Jo._getInstance(ew()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Q0(),!this.activeServiceWorker)return;this.sender=new X0(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Z0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await cl();return await dd(e,fo,"1"),await hd(e,fo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>dd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>rw(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>hd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Qo(i,!1).getAll();return new ps(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),iw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ep.type="LOCAL";const ow=Ep;/**
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
 */function aw(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function lw(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Vt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",aw().appendChild(r)})}function cw(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new hs(3e4,6e4);/**
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
 */function uw(t,e){return e?Zt(e):(ee(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class vc extends fp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Or(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Or(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Or(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function dw(t){return W0(t.auth,new vc(t),t.bypassAuthState)}function hw(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),z0(n,new vc(t),t.bypassAuthState)}async function fw(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),H0(n,new vc(t),t.bypassAuthState)}/**
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
 */class Tp{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return dw;case"linkViaPopup":case"linkViaRedirect":return fw;case"reauthViaPopup":case"reauthViaRedirect":return hw;default:rn(this.auth,"internal-error")}}resolve(e){sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const pw=new hs(2e3,1e4);class xr extends Tp{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,xr.currentPopupAction&&xr.currentPopupAction.cancel(),xr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ee(e,this.auth,"internal-error"),e}async onExecution(){sn(this.filter.length===1,"Popup operations only handle one event");const e=_c();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Vt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Vt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,xr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Vt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,pw.get())};e()}}xr.currentPopupAction=null;/**
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
 */const gw="pendingRedirect",Sa=new Map;class mw extends Tp{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Sa.get(this.auth._key());if(!e){try{const r=await _w(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Sa.set(this.auth._key(),e)}return this.bypassAuthState||Sa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function _w(t,e){const n=bw(e),r=vw(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function vw(t){return Zt(t._redirectPersistence)}function bw(t){return Gs(gw,t.config.apiKey,t.name)}async function yw(t,e,n=!1){const r=mc(t),i=uw(r,e),o=await new mw(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const ww=10*60*1e3;class Cw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ew(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Ip(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Vt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ww&&this.cachedEventUids.clear(),this.cachedEventUids.has(fd(e))}saveEventToCache(e){this.cachedEventUids.add(fd(e)),this.lastProcessedEventTime=Date.now()}}function fd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ip({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Ew(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ip(t);default:return!1}}/**
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
 */async function Tw(t,e={}){return Yo(t,"GET","/v1/projects",e)}/**
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
 */const Iw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Sw=/^https?/;async function xw(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Tw(t);for(const n of e)try{if(Rw(n))return}catch{}rn(t,"unauthorized-domain")}function Rw(t){const e=ll(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Sw.test(n))return!1;if(Iw.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Pw=new hs(3e4,6e4);function pd(){const t=qt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Aw(t){return new Promise((e,n)=>{var r,i,s;function o(){pd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{pd(),n(Vt(t,"network-request-failed"))},timeout:Pw.get()})}if(!((i=(r=qt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=qt().gapi)===null||s===void 0)&&s.load)o();else{const a=cw("iframefcb");return qt()[a]=()=>{gapi.load?o():n(Vt(t,"network-request-failed"))},lw(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ys=null,e})}let Ys=null;function Nw(t){return Ys=Ys||Aw(t),Ys}/**
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
 */const kw=new hs(5e3,15e3),Ow="__/auth/iframe",Mw="emulator/auth/iframe",Dw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Lw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Fw(t){const e=t.config;ee(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?fc(e,Mw):`https://${t.config.authDomain}/${Ow}`,r={apiKey:e.apiKey,appName:t.name,v:ds},i=Lw.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${si(r).slice(1)}`}async function $w(t){const e=await Nw(t),n=qt().gapi;return ee(n,t,"internal-error"),e.open({where:document.body,url:Fw(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Dw,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Vt(t,"network-request-failed"),a=qt().setTimeout(()=>{s(o)},kw.get());function l(){qt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const Bw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Uw=500,Hw=600,zw="_blank",Ww="http://localhost";class gd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function jw(t,e,n,r=Uw,i=Hw){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Bw),{width:r.toString(),height:i.toString(),top:s,left:o}),c=lt().toLowerCase();n&&(a=op(c)?zw:n),sp(c)&&(e=e||Ww,l.scrollbars="yes");const u=Object.entries(l).reduce((h,[_,g])=>`${h}${_}=${g},`,"");if(M0(c)&&a!=="_self")return Vw(e||"",a),new gd(null);const d=window.open(e||"",a,u);ee(d,t,"popup-blocked");try{d.focus()}catch{}return new gd(d)}function Vw(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const qw="__/auth/handler",Kw="emulator/auth/handler";function md(t,e,n,r,i,s){ee(t.config.authDomain,t,"auth-domain-config-required"),ee(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ds,eventId:i};if(e instanceof pp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",sl(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(s||{}))o[l]=c}if(e instanceof fs){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${Gw(t)}?${si(a).slice(1)}`}function Gw({config:t}){return t.emulator?fc(t,Kw):`https://${t.authDomain}/${qw}`}/**
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
 */const xa="webStorageSupport";class Yw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=bp,this._completeRedirectFn=yw}async _openPopup(e,n,r,i){var s;sn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=md(e,n,r,ll(),i);return jw(e,o,_c())}async _openRedirect(e,n,r,i){return await this._originValidation(e),J0(md(e,n,r,ll(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(sn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await $w(e),r=new Cw(e);return n.register("authEvent",i=>(ee(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(xa,{type:xa},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[xa];o!==void 0&&n(!!o),rn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=xw(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return dp()||gc()||Xo()}}const Xw=Yw;var _d="@firebase/auth",vd="0.19.12";/**
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
 */class Jw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Qw(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Zw(t){Wr(new or("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{ee(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),ee(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:hp(t)},u=new F0(a,l,c);return _0(u,n),u})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Wr(new or("auth-internal",e=>{const n=mc(e.getProvider("auth").getImmediate());return(r=>new Jw(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),In(_d,vd,Qw(t)),In(_d,vd,"esm2017")}/**
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
 */function eC(t=Kf()){const e=uc(t,"auth");return e.isInitialized()?e.getImmediate():m0(t,{popupRedirectResolver:Xw,persistence:[ow,G0,bp]})}Zw("Browser");const bd="@firebase/database",yd="0.12.8";/**
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
 */let Sp="";function tC(t){Sp=t}/**
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
 */class nC{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ve(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ji(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class rC{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Gt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const xp=function(t){try{if(typeof window!="undefined"&&typeof window[t]!="undefined"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new nC(e)}}catch{}return new rC},Kn=xp("localStorage"),ul=xp("sessionStorage");/**
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
 */const Mr=new lc("@firebase/database"),iC=function(){let t=1;return function(){return t++}}(),Rp=function(t){const e=gy(t),n=new dy;n.update(e);const r=n.digest();return oc.encodeByteArray(r)},gs=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=gs.apply(null,r):typeof r=="object"?e+=Ve(r):e+=r,e+=" "}return e};let nr=null,wd=!0;const sC=function(t,e){P(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Mr.logLevel=xe.VERBOSE,nr=Mr.log.bind(Mr),e&&ul.set("logging_enabled",!0)):typeof t=="function"?nr=t:(nr=null,ul.remove("logging_enabled"))},rt=function(...t){if(wd===!0&&(wd=!1,nr===null&&ul.get("logging_enabled")===!0&&sC(!0)),nr){const e=gs.apply(null,t);nr(e)}},ms=function(t){return function(...e){rt(t,...e)}},dl=function(...t){const e="FIREBASE INTERNAL ERROR: "+gs(...t);Mr.error(e)},cr=function(...t){const e=`FIREBASE FATAL ERROR: ${gs(...t)}`;throw Mr.error(e),new Error(e)},gt=function(...t){const e="FIREBASE WARNING: "+gs(...t);Mr.warn(e)},oC=function(){typeof window!="undefined"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&gt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},bc=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},aC=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},jr="[MIN_NAME]",ur="[MAX_NAME]",mr=function(t,e){if(t===e)return 0;if(t===jr||e===ur)return-1;if(e===jr||t===ur)return 1;{const n=Cd(t),r=Cd(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},lC=function(t,e){return t===e?0:t<e?-1:1},yi=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ve(e))},yc=function(t){if(typeof t!="object"||t===null)return Ve(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Ve(e[r]),n+=":",n+=yc(t[e[r]]);return n+="}",n},Pp=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function ot(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Ap=function(t){P(!bc(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let h=parseInt(u.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},cC=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},uC=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function dC(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const hC=new RegExp("^-?(0*)\\d{1,10}$"),fC=-2147483648,pC=2147483647,Cd=function(t){if(hC.test(t)){const e=Number(t);if(e>=fC&&e<=pC)return e}return null},oi=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw gt("Exception was thrown by user callback.",n),e},Math.floor(0))}},gC=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Li=function(t,e){const n=setTimeout(t,e);return typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class mC{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){gt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class _C{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(rt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',gt(e)}}class hl{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}hl.OWNER="owner";/**
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
 */const wc="5",Np="v",kp="s",Op="r",Mp="f",Dp=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Lp="ls",vC="p",fl="ac",Fp="websocket",$p="long_polling";/**
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
 */class bC{constructor(e,n,r,i,s=!1,o="",a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Kn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Kn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function yC(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Bp(t,e,n){P(typeof e=="string","typeof type must == string"),P(typeof n=="object","typeof params must == object");let r;if(e===Fp)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===$p)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);yC(t)&&(n.ns=t.namespace);const i=[];return ot(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class wC{constructor(){this.counters_={}}incrementCounter(e,n=1){Gt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return ey(this.counters_)}}/**
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
 */const Ra={},Pa={};function Cc(t){const e=t.toString();return Ra[e]||(Ra[e]=new wC),Ra[e]}function CC(t,e){const n=t.toString();return Pa[n]||(Pa[n]=e()),Pa[n]}/**
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
 */class EC{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&oi(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Ed="start",TC="close",IC="pLPCommand",SC="pRTLPCB",Up="id",Hp="pw",zp="ser",xC="cb",RC="seg",PC="ts",AC="d",NC="dframe",Wp=1870,jp=30,kC=Wp-jp,OC=25e3,MC=3e4;class Rr{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ms(e),this.stats_=Cc(n),this.urlFn=l=>(this.appCheckToken&&(l[fl]=this.appCheckToken),Bp(n,$p,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new EC(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(MC)),aC(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ec((...s)=>{const[o,a,l,c,u]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Ed)this.id=a,this.password=l;else if(o===TC)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Ed]="t",r[zp]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[xC]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Np]=wc,this.transportSessionId&&(r[kp]=this.transportSessionId),this.lastSessionId&&(r[Lp]=this.lastSessionId),this.applicationId&&(r[vC]=this.applicationId),this.appCheckToken&&(r[fl]=this.appCheckToken),typeof location!="undefined"&&location.hostname&&Dp.test(location.hostname)&&(r[Op]=Mp);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Rr.forceAllow_=!0}static forceDisallow(){Rr.forceDisallow_=!0}static isAvailable(){return Rr.forceAllow_?!0:!Rr.forceDisallow_&&typeof document!="undefined"&&document.createElement!=null&&!cC()&&!uC()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ve(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=$f(n),i=Pp(r,kC);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[NC]="t",r[Up]=e,r[Hp]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ve(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Ec{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=iC(),window[IC+this.uniqueCallbackIdentifier]=e,window[SC+this.uniqueCallbackIdentifier]=n,this.myIFrame=Ec.createIFrame_();let s="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const a=document.domain;s='<script>document.domain="'+a+'";<\/script>'}const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){rt("frame writing exception"),a.stack&&rt(a.stack),rt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||rt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Up]=this.myID,e[Hp]=this.myPW,e[zp]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+jp+r.length<=Wp;){const o=this.pendingSegs.shift();r=r+"&"+RC+i+"="+o.seg+"&"+PC+i+"="+o.ts+"&"+AC+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(OC)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{rt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const DC=16384,LC=45e3;let go=null;typeof MozWebSocket!="undefined"?go=MozWebSocket:typeof WebSocket!="undefined"&&(go=WebSocket);class Ot{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ms(this.connId),this.stats_=Cc(n),this.connURL=Ot.connectionURL_(n,o,a,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i){const s={};return s[Np]=wc,typeof location!="undefined"&&location.hostname&&Dp.test(location.hostname)&&(s[Op]=Mp),n&&(s[kp]=n),r&&(s[Lp]=r),i&&(s[fl]=i),Bp(e,Fp,s)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Kn.set("previous_websocket_failure",!0);try{if(!zf()){const r={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new go(this.connURL,[],r)}}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Ot.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator!="undefined"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&go!==null&&!Ot.forceDisallow_}static previouslyFailed(){return Kn.isInMemoryStorage||Kn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Kn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Ji(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(P(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Ve(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Pp(n,DC);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(LC))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ot.responsesRequiredToBeHealthy=2;Ot.healthyTimeout=3e4;/**
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
 */class Tc{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Rr,Ot]}initTransports_(e){const n=Ot&&Ot.isAvailable();let r=n&&!Ot.previouslyFailed();if(e.webSocketOnly&&(n||gt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Ot];else{const i=this.transports_=[];for(const s of Tc.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s)}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}/**
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
 */const FC=6e4,$C=5e3,BC=10*1024,UC=100*1024,Aa="t",Td="d",HC="s",Id="r",zC="e",Sd="o",xd="a",Rd="n",Pd="p",WC="h";class jC{constructor(e,n,r,i,s,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ms("c:"+this.id+":"),this.transportManager_=new Tc(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Li(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>UC?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>BC?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Aa in e){const n=e[Aa];n===xd?this.upgradeIfSecondaryHealthy_():n===Id?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Sd&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=yi("t",e),r=yi("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Pd,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:xd,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Rd,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=yi("t",e),r=yi("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=yi(Aa,e);if(Td in e){const r=e[Td];if(n===WC)this.onHandshake_(r);else if(n===Rd){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===HC?this.onConnectionShutdown_(r):n===Id?this.onReset_(r):n===zC?dl("Server Error: "+r):n===Sd?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):dl("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),wc!==r&&gt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Li(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(FC))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Li(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor($C))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Pd,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Kn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Vp{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class qp{constructor(e){this.allowedEvents_=e,this.listeners_={},P(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){P(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class mo extends qp{constructor(){super(["online"]),this.online_=!0,typeof window!="undefined"&&typeof window.addEventListener!="undefined"&&!ac()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new mo}getInitialEvent(e){return P(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Ad=32,Nd=768;class Ie{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function _e(){return new Ie("")}function se(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function An(t){return t.pieces_.length-t.pieceNum_}function Ae(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Ie(t.pieces_,e)}function Ic(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function VC(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function ts(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Kp(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Ie(e,0)}function Fe(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Ie)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new Ie(n,0)}function le(t){return t.pieceNum_>=t.pieces_.length}function pt(t,e){const n=se(t),r=se(e);if(n===null)return e;if(n===r)return pt(Ae(t),Ae(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function qC(t,e){const n=ts(t,0),r=ts(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=mr(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function Sc(t,e){if(An(t)!==An(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Pt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(An(t)>An(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class KC{constructor(e,n){this.errorPrefix_=n,this.parts_=ts(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Go(this.parts_[r]);Gp(this)}}function GC(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Go(e),Gp(t)}function YC(t){const e=t.parts_.pop();t.byteLength_-=Go(e),t.parts_.length>0&&(t.byteLength_-=1)}function Gp(t){if(t.byteLength_>Nd)throw new Error(t.errorPrefix_+"has a key path longer than "+Nd+" bytes ("+t.byteLength_+").");if(t.parts_.length>Ad)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Ad+") or object contains a cycle "+Wn(t))}function Wn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class xc extends qp{constructor(){super(["visible"]);let e,n;typeof document!="undefined"&&typeof document.addEventListener!="undefined"&&(typeof document.hidden!="undefined"?(n="visibilitychange",e="hidden"):typeof document.mozHidden!="undefined"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden!="undefined"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden!="undefined"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new xc}getInitialEvent(e){return P(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const wi=1e3,XC=60*5*1e3,JC=3*1e3,kd=30*1e3,QC=1.3,ZC=3e4,eE="server_kill",Od=3;class tn extends Vp{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=tn.nextPersistentConnectionId_++,this.log_=ms("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=wi,this.maxReconnectDelay_=XC,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!zf())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");xc.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&mo.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Ve(s)),P(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new cs,r={p:e._path.toString(),q:e._queryObject},i={action:"g",request:r,onComplete:o=>{const a=o.d;o.s==="ok"?(this.onDataUpdate_(r.p,a,!1,null),n.resolve(a)):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_||setTimeout(()=>{const o=this.outstandingGets_[s];o===void 0||i!==o||(delete this.outstandingGets_[s],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),this.log_("get "+s+" timed out on connection"),n.reject(new Error("Client is offline.")))},JC),this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),P(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),P(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;tn.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Gt(e,"w")){const r=zr(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();gt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||uy(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=kd)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=cy(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),P(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ve(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):dl("Unrecognized action received from server: "+Ve(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){P(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=wi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=wi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>ZC&&(this.reconnectDelay_=wi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*QC)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+tn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(d){P(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?rt("getToken() completed but was canceled"):(rt("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,a=new jC(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,_=>{gt(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(eE)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&gt(d),l())}}}interrupt(e){rt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){rt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],sl(this.interruptReasons_)&&(this.reconnectDelay_=wi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>yc(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new Ie(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){rt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Od&&(this.reconnectDelay_=kd,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){rt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Od&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Sp.replace(/\./g,"-")]=1,ac()?e["framework.cordova"]=1:Hf()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=mo.getInstance().currentlyOnline();return sl(this.interruptReasons_)&&e}}tn.nextPersistentConnectionId_=0;tn.nextConnectionId_=0;/**
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
 */class Zo{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new oe(jr,e),i=new oe(jr,n);return this.compare(r,i)!==0}minPost(){return oe.MIN}}/**
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
 */let Ns;class Yp extends Zo{static get __EMPTY_NODE(){return Ns}static set __EMPTY_NODE(e){Ns=e}compare(e,n){return mr(e.name,n.name)}isDefinedOn(e){throw ri("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return oe.MIN}maxPost(){return new oe(ur,Ns)}makePost(e,n){return P(typeof e=="string","KeyIndex indexValue must always be a string."),new oe(e,Ns)}toString(){return".key"}}const Dr=new Yp;/**
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
 */class ks{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ye{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:Ye.RED,this.left=i!=null?i:bt.EMPTY_NODE,this.right=s!=null?s:bt.EMPTY_NODE}copy(e,n,r,i,s){return new Ye(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return bt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return bt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ye.RED=!0;Ye.BLACK=!1;class tE{copy(e,n,r,i,s){return this}insert(e,n,r){return new Ye(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class bt{constructor(e,n=bt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new bt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ye.BLACK,null,null))}remove(e){return new bt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ye.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ks(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ks(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ks(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ks(this.root_,null,this.comparator_,!0,e)}}bt.EMPTY_NODE=new tE;/**
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
 */function nE(t,e){return mr(t.name,e.name)}function Rc(t,e){return mr(t,e)}/**
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
 */let pl;function rE(t){pl=t}const Xp=function(t){return typeof t=="number"?"number:"+Ap(t):"string:"+t},Jp=function(t){if(t.isLeafNode()){const e=t.val();P(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Gt(e,".sv"),"Priority must be a string or number.")}else P(t===pl||t.isEmpty(),"priority of unexpected type.");P(t===pl||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Md;class Ge{constructor(e,n=Ge.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,P(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Jp(this.priorityNode_)}static set __childrenNodeConstructor(e){Md=e}static get __childrenNodeConstructor(){return Md}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ge(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ge.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return le(e)?this:se(e)===".priority"?this.priorityNode_:Ge.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ge.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=se(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(P(r!==".priority"||An(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Ge.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ae(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Xp(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Ap(this.value_):e+=this.value_,this.lazyHash_=Rp(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ge.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ge.__childrenNodeConstructor?-1:(P(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Ge.VALUE_TYPE_ORDER.indexOf(n),s=Ge.VALUE_TYPE_ORDER.indexOf(r);return P(i>=0,"Unknown leaf type: "+n),P(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ge.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Qp,Zp;function iE(t){Qp=t}function sE(t){Zp=t}class oE extends Zo{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?mr(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return oe.MIN}maxPost(){return new oe(ur,new Ge("[PRIORITY-POST]",Zp))}makePost(e,n){const r=Qp(e);return new oe(n,new Ge("[PRIORITY-POST]",r))}toString(){return".priority"}}const $e=new oE;/**
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
 */const aE=Math.log(2);class lE{constructor(e){const n=s=>parseInt(Math.log(s)/aE,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const _o=function(t,e,n,r){t.sort(e);const i=function(l,c){const u=c-l;let d,h;if(u===0)return null;if(u===1)return d=t[l],h=n?n(d):d,new Ye(h,d.node,Ye.BLACK,null,null);{const _=parseInt(u/2,10)+l,g=i(l,_),C=i(_+1,c);return d=t[_],h=n?n(d):d,new Ye(h,d.node,Ye.BLACK,g,C)}},s=function(l){let c=null,u=null,d=t.length;const h=function(g,C){const b=d-g,O=d;d-=g;const H=i(b+1,O),V=t[b],z=n?n(V):V;_(new Ye(z,V.node,C,null,H))},_=function(g){c?(c.left=g,c=g):(u=g,c=g)};for(let g=0;g<l.count;++g){const C=l.nextBitIsOne(),b=Math.pow(2,l.count-(g+1));C?h(b,Ye.BLACK):(h(b,Ye.BLACK),h(b,Ye.RED))}return u},o=new lE(t.length),a=s(o);return new bt(r||e,a)};/**
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
 */let Na;const Er={};class en{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return P(Er&&$e,"ChildrenNode.ts has not been loaded"),Na=Na||new en({".priority":Er},{".priority":$e}),Na}get(e){const n=zr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof bt?n:null}hasIndex(e){return Gt(this.indexSet_,e.toString())}addIndex(e,n){P(e!==Dr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(oe.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=_o(r,e.getCompare()):a=Er;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new en(u,c)}addToIndexes(e,n){const r=ao(this.indexes_,(i,s)=>{const o=zr(this.indexSet_,s);if(P(o,"Missing index implementation for "+s),i===Er)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(oe.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),_o(a,o.getCompare())}else return Er;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new oe(e.name,a))),l.insert(e,e.node)}});return new en(r,this.indexSet_)}removeFromIndexes(e,n){const r=ao(this.indexes_,i=>{if(i===Er)return i;{const s=n.get(e.name);return s?i.remove(new oe(e.name,s)):i}});return new en(r,this.indexSet_)}}/**
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
 */let Ci;class Y{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Jp(this.priorityNode_),this.children_.isEmpty()&&P(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ci||(Ci=new Y(new bt(Rc),null,en.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ci}updatePriority(e){return this.children_.isEmpty()?this:new Y(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ci:n}}getChild(e){const n=se(e);return n===null?this:this.getImmediateChild(n).getChild(Ae(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(P(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new oe(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Ci:this.priorityNode_;return new Y(i,o,s)}}updateChild(e,n){const r=se(e);if(r===null)return n;{P(se(e)!==".priority"||An(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Ae(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild($e,(o,a)=>{n[o]=a.val(e),r++,s&&Y.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Xp(this.getPriority().val())+":"),this.forEachChild($e,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Rp(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new oe(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new oe(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new oe(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,oe.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,oe.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===_s?-1:0}withIndex(e){if(e===Dr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new Y(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Dr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator($e),i=n.getIterator($e);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Dr?null:this.indexMap_.get(e.toString())}}Y.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class cE extends Y{constructor(){super(new bt(Rc),Y.EMPTY_NODE,en.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Y.EMPTY_NODE}isEmpty(){return!1}}const _s=new cE;Object.defineProperties(oe,{MIN:{value:new oe(jr,Y.EMPTY_NODE)},MAX:{value:new oe(ur,_s)}});Yp.__EMPTY_NODE=Y.EMPTY_NODE;Ge.__childrenNodeConstructor=Y;rE(_s);sE(_s);/**
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
 */const uE=!0;function je(t,e=null){if(t===null)return Y.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),P(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ge(n,je(e))}if(!(t instanceof Array)&&uE){const n=[];let r=!1;if(ot(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=je(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new oe(o,l)))}}),n.length===0)return Y.EMPTY_NODE;const s=_o(n,nE,o=>o.name,Rc);if(r){const o=_o(n,$e.getCompare());return new Y(s,je(e),new en({".priority":o},{".priority":$e}))}else return new Y(s,je(e),en.Default)}else{let n=Y.EMPTY_NODE;return ot(t,(r,i)=>{if(Gt(t,r)&&r.substring(0,1)!=="."){const s=je(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(je(e))}}iE(je);/**
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
 */class dE extends Zo{constructor(e){super(),this.indexPath_=e,P(!le(e)&&se(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?mr(e.name,n.name):s}makePost(e,n){const r=je(e),i=Y.EMPTY_NODE.updateChild(this.indexPath_,r);return new oe(n,i)}maxPost(){const e=Y.EMPTY_NODE.updateChild(this.indexPath_,_s);return new oe(ur,e)}toString(){return ts(this.indexPath_,0).join("/")}}/**
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
 */class hE extends Zo{compare(e,n){const r=e.node.compareTo(n.node);return r===0?mr(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return oe.MIN}maxPost(){return oe.MAX}makePost(e,n){const r=je(e);return new oe(n,r)}toString(){return".value"}}const fE=new hE;/**
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
 */const Dd="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",pE=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=Dd.charAt(n%64),n=Math.floor(n/64);P(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Dd.charAt(e[i]);return P(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */function eg(t){return{type:"value",snapshotNode:t}}function Vr(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ns(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function rs(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function gE(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Pc{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){P(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(ns(n,a)):P(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Vr(n,r)):o.trackChildChange(rs(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild($e,(i,s)=>{n.hasChild(i)||r.trackChildChange(ns(i,s))}),n.isLeafNode()||n.forEachChild($e,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(rs(i,s,o))}else r.trackChildChange(Vr(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?Y.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class is{constructor(e){this.indexedFilter_=new Pc(e.getIndex()),this.index_=e.getIndex(),this.startPost_=is.getStartPost_(e),this.endPost_=is.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,r,i,s,o){return this.matches(new oe(n,r))||(r=Y.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=Y.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(Y.EMPTY_NODE);const s=this;return n.forEachChild($e,(o,a)=>{s.matches(new oe(o,a))||(i=i.updateImmediateChild(o,Y.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class mE{constructor(e){this.rangedFilter_=new is(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new oe(n,r))||(r=Y.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=Y.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=Y.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();let l;if(this.reverse_?l=this.index_.compare(this.rangedFilter_.getStartPost(),a)<=0:l=this.index_.compare(a,this.rangedFilter_.getEndPost())<=0,l)i=i.updateImmediateChild(a.name,a.node),o++;else break}}else{i=n.withIndex(this.index_),i=i.updatePriority(Y.EMPTY_NODE);let s,o,a,l;if(this.reverse_){l=i.getReverseIterator(this.index_),s=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const d=this.index_.getCompare();a=(h,_)=>d(_,h)}else l=i.getIterator(this.index_),s=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),a=this.index_.getCompare();let c=0,u=!1;for(;l.hasNext();){const d=l.getNext();!u&&a(s,d)<=0&&(u=!0),u&&c<this.limit_&&a(d,o)<=0?c++:i=i.updateImmediateChild(d.name,Y.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,_)=>d(_,h)}else o=this.index_.getCompare();const a=e;P(a.numChildren()===this.limit_,"");const l=new oe(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const _=h==null?1:o(h,l);if(u&&!r.isEmpty()&&_>=0)return s!=null&&s.trackChildChange(rs(n,r,d)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(ns(n,d));const C=a.updateImmediateChild(n,Y.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(Vr(h.name,h.node)),C.updateImmediateChild(h.name,h.node)):C}}else return r.isEmpty()?e:u&&o(c,l)>=0?(s!=null&&(s.trackChildChange(ns(c.name,c.node)),s.trackChildChange(Vr(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,Y.EMPTY_NODE)):e}}/**
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
 */class Ac{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=$e}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return P(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return P(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:jr}hasEnd(){return this.endSet_}getIndexEndValue(){return P(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return P(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ur}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return P(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===$e}copy(){const e=new Ac;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function _E(t){return t.loadsAllData()?new Pc(t.getIndex()):t.hasLimit()?new mE(t):new is(t)}function Ld(t){const e={};if(t.isDefault())return e;let n;return t.index_===$e?n="$priority":t.index_===fE?n="$value":t.index_===Dr?n="$key":(P(t.index_ instanceof dE,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ve(n),t.startSet_&&(e.startAt=Ve(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+Ve(t.indexStartName_))),t.endSet_&&(e.endAt=Ve(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+Ve(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Fd(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==$e&&(e.i=t.index_.toString()),e}/**
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
 */class vo extends Vp{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=ms("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(P(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=vo.getListenId_(e,r),a={};this.listens_[o]=a;const l=Ld(e._queryParams);this.restRequest_(s+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(s,d,!1,r),zr(this.listens_,o)===a){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",i(h,null)}})}unlisten(e,n){const r=vo.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Ld(e._queryParams),r=e._path.toString(),i=new cs;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+si(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Ji(a.responseText)}catch{gt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&gt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class vE{constructor(){this.rootNode_=Y.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function bo(){return{value:null,children:new Map}}function tg(t,e,n){if(le(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=se(e);t.children.has(r)||t.children.set(r,bo());const i=t.children.get(r);e=Ae(e),tg(i,e,n)}}function gl(t,e,n){t.value!==null?n(e,t.value):bE(t,(r,i)=>{const s=new Ie(e.toString()+"/"+r);gl(i,s,n)})}function bE(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class yE{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&ot(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const $d=10*1e3,wE=30*1e3,CE=5*60*1e3;class EE{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new yE(e);const r=$d+(wE-$d)*Math.random();Li(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;ot(e,(i,s)=>{s>0&&Gt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Li(this.reportStats_.bind(this),Math.floor(Math.random()*2*CE))}}/**
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
 */var Mt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Mt||(Mt={}));function Nc(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function kc(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Oc(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class yo{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Mt.ACK_USER_WRITE,this.source=Nc()}operationForChild(e){if(le(this.path)){if(this.affectedTree.value!=null)return P(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Ie(e));return new yo(_e(),n,this.revert)}}else return P(se(this.path)===e,"operationForChild called for unrelated child."),new yo(Ae(this.path),this.affectedTree,this.revert)}}/**
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
 */class ss{constructor(e,n){this.source=e,this.path=n,this.type=Mt.LISTEN_COMPLETE}operationForChild(e){return le(this.path)?new ss(this.source,_e()):new ss(this.source,Ae(this.path))}}/**
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
 */class dr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Mt.OVERWRITE}operationForChild(e){return le(this.path)?new dr(this.source,_e(),this.snap.getImmediateChild(e)):new dr(this.source,Ae(this.path),this.snap)}}/**
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
 */class qr{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Mt.MERGE}operationForChild(e){if(le(this.path)){const n=this.children.subtree(new Ie(e));return n.isEmpty()?null:n.value?new dr(this.source,_e(),n.value):new qr(this.source,_e(),n)}else return P(se(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new qr(this.source,Ae(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Nn{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(le(e))return this.isFullyInitialized()&&!this.filtered_;const n=se(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class TE{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function IE(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(gE(o.childName,o.snapshotNode))}),Ei(t,i,"child_removed",e,r,n),Ei(t,i,"child_added",e,r,n),Ei(t,i,"child_moved",s,r,n),Ei(t,i,"child_changed",e,r,n),Ei(t,i,"value",e,r,n),i}function Ei(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>xE(t,a,l)),o.forEach(a=>{const l=SE(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function SE(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function xE(t,e,n){if(e.childName==null||n.childName==null)throw ri("Should only compare child_ events.");const r=new oe(e.childName,e.snapshotNode),i=new oe(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function ea(t,e){return{eventCache:t,serverCache:e}}function Fi(t,e,n,r){return ea(new Nn(e,n,r),t.serverCache)}function ng(t,e,n,r){return ea(t.eventCache,new Nn(e,n,r))}function wo(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function hr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let ka;const RE=()=>(ka||(ka=new bt(lC)),ka);class Pe{constructor(e,n=RE()){this.value=e,this.children=n}static fromObject(e){let n=new Pe(null);return ot(e,(r,i)=>{n=n.set(new Ie(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:_e(),value:this.value};if(le(e))return null;{const r=se(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Ae(e),n);return s!=null?{path:Fe(new Ie(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(le(e))return this;{const n=se(e),r=this.children.get(n);return r!==null?r.subtree(Ae(e)):new Pe(null)}}set(e,n){if(le(e))return new Pe(n,this.children);{const r=se(e),s=(this.children.get(r)||new Pe(null)).set(Ae(e),n),o=this.children.insert(r,s);return new Pe(this.value,o)}}remove(e){if(le(e))return this.children.isEmpty()?new Pe(null):new Pe(null,this.children);{const n=se(e),r=this.children.get(n);if(r){const i=r.remove(Ae(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Pe(null):new Pe(this.value,s)}else return this}}get(e){if(le(e))return this.value;{const n=se(e),r=this.children.get(n);return r?r.get(Ae(e)):null}}setTree(e,n){if(le(e))return n;{const r=se(e),s=(this.children.get(r)||new Pe(null)).setTree(Ae(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Pe(this.value,o)}}fold(e){return this.fold_(_e(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Fe(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,_e(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(le(e))return null;{const s=se(e),o=this.children.get(s);return o?o.findOnPath_(Ae(e),Fe(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,_e(),n)}foreachOnPath_(e,n,r){if(le(e))return this;{this.value&&r(n,this.value);const i=se(e),s=this.children.get(i);return s?s.foreachOnPath_(Ae(e),Fe(n,i),r):new Pe(null)}}foreach(e){this.foreach_(_e(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Fe(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class Lt{constructor(e){this.writeTree_=e}static empty(){return new Lt(new Pe(null))}}function $i(t,e,n){if(le(e))return new Lt(new Pe(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=pt(i,e);return s=s.updateChild(o,n),new Lt(t.writeTree_.set(i,s))}else{const i=new Pe(n),s=t.writeTree_.setTree(e,i);return new Lt(s)}}}function ml(t,e,n){let r=t;return ot(n,(i,s)=>{r=$i(r,Fe(e,i),s)}),r}function Bd(t,e){if(le(e))return Lt.empty();{const n=t.writeTree_.setTree(e,new Pe(null));return new Lt(n)}}function _l(t,e){return _r(t,e)!=null}function _r(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(pt(n.path,e)):null}function Ud(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild($e,(r,i)=>{e.push(new oe(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new oe(r,i.value))}),e}function Sn(t,e){if(le(e))return t;{const n=_r(t,e);return n!=null?new Lt(new Pe(n)):new Lt(t.writeTree_.subtree(e))}}function vl(t){return t.writeTree_.isEmpty()}function Kr(t,e){return rg(_e(),t.writeTree_,e)}function rg(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(P(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=rg(Fe(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Fe(t,".priority"),r)),n}}/**
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
 */function ta(t,e){return ag(e,t)}function PE(t,e,n,r,i){P(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=$i(t.visibleWrites,e,n)),t.lastWriteId=r}function AE(t,e,n,r){P(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=ml(t.visibleWrites,e,n),t.lastWriteId=r}function NE(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function kE(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);P(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&OE(a,r.path)?i=!1:Pt(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return ME(t),!0;if(r.snap)t.visibleWrites=Bd(t.visibleWrites,r.path);else{const a=r.children;ot(a,l=>{t.visibleWrites=Bd(t.visibleWrites,Fe(r.path,l))})}return!0}else return!1}function OE(t,e){if(t.snap)return Pt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Pt(Fe(t.path,n),e))return!0;return!1}function ME(t){t.visibleWrites=ig(t.allWrites,DE,_e()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function DE(t){return t.visible}function ig(t,e,n){let r=Lt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)Pt(n,o)?(a=pt(n,o),r=$i(r,a,s.snap)):Pt(o,n)&&(a=pt(o,n),r=$i(r,_e(),s.snap.getChild(a)));else if(s.children){if(Pt(n,o))a=pt(n,o),r=ml(r,a,s.children);else if(Pt(o,n))if(a=pt(o,n),le(a))r=ml(r,_e(),s.children);else{const l=zr(s.children,se(a));if(l){const c=l.getChild(Ae(a));r=$i(r,_e(),c)}}}else throw ri("WriteRecord should have .snap or .children")}}return r}function sg(t,e,n,r,i){if(!r&&!i){const s=_r(t.visibleWrites,e);if(s!=null)return s;{const o=Sn(t.visibleWrites,e);if(vl(o))return n;if(n==null&&!_l(o,_e()))return null;{const a=n||Y.EMPTY_NODE;return Kr(o,a)}}}else{const s=Sn(t.visibleWrites,e);if(!i&&vl(s))return n;if(!i&&n==null&&!_l(s,_e()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(Pt(c.path,e)||Pt(e,c.path))},a=ig(t.allWrites,o,e),l=n||Y.EMPTY_NODE;return Kr(a,l)}}}function LE(t,e,n){let r=Y.EMPTY_NODE;const i=_r(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild($e,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Sn(t.visibleWrites,e);return n.forEachChild($e,(o,a)=>{const l=Kr(Sn(s,new Ie(o)),a);r=r.updateImmediateChild(o,l)}),Ud(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Sn(t.visibleWrites,e);return Ud(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function FE(t,e,n,r,i){P(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Fe(e,n);if(_l(t.visibleWrites,s))return null;{const o=Sn(t.visibleWrites,s);return vl(o)?i.getChild(n):Kr(o,i.getChild(n))}}function $E(t,e,n,r){const i=Fe(e,n),s=_r(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Sn(t.visibleWrites,i);return Kr(o,r.getNode().getImmediateChild(n))}else return null}function BE(t,e){return _r(t.visibleWrites,e)}function UE(t,e,n,r,i,s,o){let a;const l=Sn(t.visibleWrites,e),c=_r(l,_e());if(c!=null)a=c;else if(n!=null)a=Kr(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),h=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let _=h.getNext();for(;_&&u.length<i;)d(_,r)!==0&&u.push(_),_=h.getNext();return u}else return[]}function HE(){return{visibleWrites:Lt.empty(),allWrites:[],lastWriteId:-1}}function Co(t,e,n,r){return sg(t.writeTree,t.treePath,e,n,r)}function Mc(t,e){return LE(t.writeTree,t.treePath,e)}function Hd(t,e,n,r){return FE(t.writeTree,t.treePath,e,n,r)}function Eo(t,e){return BE(t.writeTree,Fe(t.treePath,e))}function zE(t,e,n,r,i,s){return UE(t.writeTree,t.treePath,e,n,r,i,s)}function Dc(t,e,n){return $E(t.writeTree,t.treePath,e,n)}function og(t,e){return ag(Fe(t.treePath,e),t.writeTree)}function ag(t,e){return{treePath:t,writeTree:e}}/**
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
 */class WE{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;P(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),P(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,rs(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,ns(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Vr(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,rs(r,e.snapshotNode,i.oldSnap));else throw ri("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class jE{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const lg=new jE;class Lc{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Nn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Dc(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:hr(this.viewCache_),s=zE(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function VE(t){return{filter:t}}function qE(t,e){P(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),P(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function KE(t,e,n,r,i){const s=new WE;let o,a;if(n.type===Mt.OVERWRITE){const c=n;c.source.fromUser?o=bl(t,e,c.path,c.snap,r,i,s):(P(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!le(c.path),o=To(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===Mt.MERGE){const c=n;c.source.fromUser?o=YE(t,e,c.path,c.children,r,i,s):(P(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=yl(t,e,c.path,c.children,r,i,a,s))}else if(n.type===Mt.ACK_USER_WRITE){const c=n;c.revert?o=QE(t,e,c.path,r,i,s):o=XE(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===Mt.LISTEN_COMPLETE)o=JE(t,e,n.path,r,s);else throw ri("Unknown operation type: "+n.type);const l=s.getChanges();return GE(e,o,l),{viewCache:o,changes:l}}function GE(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=wo(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(eg(wo(e)))}}function cg(t,e,n,r,i,s){const o=e.eventCache;if(Eo(r,n)!=null)return e;{let a,l;if(le(n))if(P(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=hr(e),u=c instanceof Y?c:Y.EMPTY_NODE,d=Mc(r,u);a=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const c=Co(r,hr(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=se(n);if(c===".priority"){P(An(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const d=Hd(r,n,u,l);d!=null?a=t.filter.updatePriority(u,d):a=o.getNode()}else{const u=Ae(n);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const h=Hd(r,n,o.getNode(),l);h!=null?d=o.getNode().getImmediateChild(c).updateChild(u,h):d=o.getNode().getImmediateChild(c)}else d=Dc(r,c,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),c,d,u,i,s):a=o.getNode()}}return Fi(e,a,o.isFullyInitialized()||le(n),t.filter.filtersNodes())}}function To(t,e,n,r,i,s,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(le(n))c=u.updateFullNode(l.getNode(),r,null);else if(u.filtersNodes()&&!l.isFiltered()){const _=l.getNode().updateChild(n,r);c=u.updateFullNode(l.getNode(),_,null)}else{const _=se(n);if(!l.isCompleteForPath(n)&&An(n)>1)return e;const g=Ae(n),b=l.getNode().getImmediateChild(_).updateChild(g,r);_===".priority"?c=u.updatePriority(l.getNode(),b):c=u.updateChild(l.getNode(),_,b,g,lg,null)}const d=ng(e,c,l.isFullyInitialized()||le(n),u.filtersNodes()),h=new Lc(i,d,s);return cg(t,d,n,i,h,a)}function bl(t,e,n,r,i,s,o){const a=e.eventCache;let l,c;const u=new Lc(i,e,s);if(le(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Fi(e,c,!0,t.filter.filtersNodes());else{const d=se(n);if(d===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=Fi(e,c,a.isFullyInitialized(),a.isFiltered());else{const h=Ae(n),_=a.getNode().getImmediateChild(d);let g;if(le(h))g=r;else{const C=u.getCompleteChild(d);C!=null?Ic(h)===".priority"&&C.getChild(Kp(h)).isEmpty()?g=C:g=C.updateChild(h,r):g=Y.EMPTY_NODE}if(_.equals(g))l=e;else{const C=t.filter.updateChild(a.getNode(),d,g,h,u,o);l=Fi(e,C,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function zd(t,e){return t.eventCache.isCompleteForChild(e)}function YE(t,e,n,r,i,s,o){let a=e;return r.foreach((l,c)=>{const u=Fe(n,l);zd(e,se(u))&&(a=bl(t,a,u,c,i,s,o))}),r.foreach((l,c)=>{const u=Fe(n,l);zd(e,se(u))||(a=bl(t,a,u,c,i,s,o))}),a}function Wd(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function yl(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;le(n)?c=r:c=new Pe(null).setTree(n,r);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,h)=>{if(u.hasChild(d)){const _=e.serverCache.getNode().getImmediateChild(d),g=Wd(t,_,h);l=To(t,l,new Ie(d),g,i,s,o,a)}}),c.children.inorderTraversal((d,h)=>{const _=!e.serverCache.isCompleteForChild(d)&&h.value===void 0;if(!u.hasChild(d)&&!_){const g=e.serverCache.getNode().getImmediateChild(d),C=Wd(t,g,h);l=To(t,l,new Ie(d),C,i,s,o,a)}}),l}function XE(t,e,n,r,i,s,o){if(Eo(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(le(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return To(t,e,n,l.getNode().getChild(n),i,s,a,o);if(le(n)){let c=new Pe(null);return l.getNode().forEachChild(Dr,(u,d)=>{c=c.set(new Ie(u),d)}),yl(t,e,n,c,i,s,a,o)}else return e}else{let c=new Pe(null);return r.foreach((u,d)=>{const h=Fe(n,u);l.isCompleteForPath(h)&&(c=c.set(u,l.getNode().getChild(h)))}),yl(t,e,n,c,i,s,a,o)}}function JE(t,e,n,r,i){const s=e.serverCache,o=ng(e,s.getNode(),s.isFullyInitialized()||le(n),s.isFiltered());return cg(t,o,n,r,lg,i)}function QE(t,e,n,r,i,s){let o;if(Eo(r,n)!=null)return e;{const a=new Lc(r,e,i),l=e.eventCache.getNode();let c;if(le(n)||se(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Co(r,hr(e));else{const d=e.serverCache.getNode();P(d instanceof Y,"serverChildren would be complete if leaf node"),u=Mc(r,d)}u=u,c=t.filter.updateFullNode(l,u,s)}else{const u=se(n);let d=Dc(r,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=t.filter.updateChild(l,u,d,Ae(n),a,s):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,Y.EMPTY_NODE,Ae(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Co(r,hr(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||Eo(r,_e())!=null,Fi(e,c,o,t.filter.filtersNodes())}}/**
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
 */class ZE{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Pc(r.getIndex()),s=_E(r);this.processor_=VE(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(Y.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(Y.EMPTY_NODE,a.getNode(),null),u=new Nn(l,o.isFullyInitialized(),i.filtersNodes()),d=new Nn(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=ea(d,u),this.eventGenerator_=new TE(this.query_)}get query(){return this.query_}}function eT(t){return t.viewCache_.serverCache.getNode()}function tT(t){return wo(t.viewCache_)}function nT(t,e){const n=hr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!le(e)&&!n.getImmediateChild(se(e)).isEmpty())?n.getChild(e):null}function jd(t){return t.eventRegistrations_.length===0}function rT(t,e){t.eventRegistrations_.push(e)}function Vd(t,e,n){const r=[];if(n){P(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function qd(t,e,n,r){e.type===Mt.MERGE&&e.source.queryId!==null&&(P(hr(t.viewCache_),"We should always have a full cache before handling merges"),P(wo(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=KE(t.processor_,i,e,n,r);return qE(t.processor_,s.viewCache),P(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,ug(t,s.changes,s.viewCache.eventCache.getNode(),null)}function iT(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild($e,(s,o)=>{r.push(Vr(s,o))}),n.isFullyInitialized()&&r.push(eg(n.getNode())),ug(t,r,n.getNode(),e)}function ug(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return IE(t.eventGenerator_,e,n,i)}/**
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
 */let Io;class dg{constructor(){this.views=new Map}}function sT(t){P(!Io,"__referenceConstructor has already been defined"),Io=t}function oT(){return P(Io,"Reference.ts has not been loaded"),Io}function aT(t){return t.views.size===0}function Fc(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return P(s!=null,"SyncTree gave us an op for an invalid query."),qd(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(qd(o,e,n,r));return s}}function hg(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Co(n,i?r:null),l=!1;a?l=!0:r instanceof Y?(a=Mc(n,r),l=!1):(a=Y.EMPTY_NODE,l=!1);const c=ea(new Nn(a,l,!1),new Nn(r,i,!1));return new ZE(e,c)}return o}function lT(t,e,n,r,i,s){const o=hg(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),rT(o,n),iT(o,n)}function cT(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=kn(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(Vd(c,n,r)),jd(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(Vd(l,n,r)),jd(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!kn(t)&&s.push(new(oT())(e._repo,e._path)),{removed:s,events:o}}function fg(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function xn(t,e){let n=null;for(const r of t.views.values())n=n||nT(r,e);return n}function pg(t,e){if(e._queryParams.loadsAllData())return na(t);{const r=e._queryIdentifier;return t.views.get(r)}}function gg(t,e){return pg(t,e)!=null}function kn(t){return na(t)!=null}function na(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let So;function uT(t){P(!So,"__referenceConstructor has already been defined"),So=t}function dT(){return P(So,"Reference.ts has not been loaded"),So}let hT=1;class Kd{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Pe(null),this.pendingWriteTree_=HE(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function mg(t,e,n,r,i){return PE(t.pendingWriteTree_,e,n,r,i),i?ai(t,new dr(Nc(),e,n)):[]}function fT(t,e,n,r){AE(t.pendingWriteTree_,e,n,r);const i=Pe.fromObject(n);return ai(t,new qr(Nc(),e,i))}function wn(t,e,n=!1){const r=NE(t.pendingWriteTree_,e);if(kE(t.pendingWriteTree_,e)){let s=new Pe(null);return r.snap!=null?s=s.set(_e(),!0):ot(r.children,o=>{s=s.set(new Ie(o),!0)}),ai(t,new yo(r.path,s,n))}else return[]}function vs(t,e,n){return ai(t,new dr(kc(),e,n))}function pT(t,e,n){const r=Pe.fromObject(n);return ai(t,new qr(kc(),e,r))}function gT(t,e){return ai(t,new ss(kc(),e))}function mT(t,e,n){const r=Bc(t,n);if(r){const i=Uc(r),s=i.path,o=i.queryId,a=pt(s,e),l=new ss(Oc(o),a);return Hc(t,s,l)}else return[]}function wl(t,e,n,r){const i=e._path,s=t.syncPointTree_.get(i);let o=[];if(s&&(e._queryIdentifier==="default"||gg(s,e))){const a=cT(s,e,n,r);aT(s)&&(t.syncPointTree_=t.syncPointTree_.remove(i));const l=a.removed;o=a.events;const c=l.findIndex(d=>d._queryParams.loadsAllData())!==-1,u=t.syncPointTree_.findOnPath(i,(d,h)=>kn(h));if(c&&!u){const d=t.syncPointTree_.subtree(i);if(!d.isEmpty()){const h=yT(d);for(let _=0;_<h.length;++_){const g=h[_],C=g.query,b=bg(t,g);t.listenProvider_.startListening(Bi(C),xo(t,C),b.hashFn,b.onComplete)}}}!u&&l.length>0&&!r&&(c?t.listenProvider_.stopListening(Bi(e),null):l.forEach(d=>{const h=t.queryToTagMap.get(ra(d));t.listenProvider_.stopListening(Bi(d),h)})),wT(t,l)}return o}function _T(t,e,n,r){const i=Bc(t,r);if(i!=null){const s=Uc(i),o=s.path,a=s.queryId,l=pt(o,e),c=new dr(Oc(a),l,n);return Hc(t,o,c)}else return[]}function vT(t,e,n,r){const i=Bc(t,r);if(i){const s=Uc(i),o=s.path,a=s.queryId,l=pt(o,e),c=Pe.fromObject(n),u=new qr(Oc(a),l,c);return Hc(t,o,u)}else return[]}function Gd(t,e,n){const r=e._path;let i=null,s=!1;t.syncPointTree_.foreachOnPath(r,(d,h)=>{const _=pt(d,r);i=i||xn(h,_),s=s||kn(h)});let o=t.syncPointTree_.get(r);o?(s=s||kn(o),i=i||xn(o,_e())):(o=new dg,t.syncPointTree_=t.syncPointTree_.set(r,o));let a;i!=null?a=!0:(a=!1,i=Y.EMPTY_NODE,t.syncPointTree_.subtree(r).foreachChild((h,_)=>{const g=xn(_,_e());g&&(i=i.updateImmediateChild(h,g))}));const l=gg(o,e);if(!l&&!e._queryParams.loadsAllData()){const d=ra(e);P(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const h=CT();t.queryToTagMap.set(d,h),t.tagToQueryMap.set(h,d)}const c=ta(t.pendingWriteTree_,r);let u=lT(o,e,n,c,i,a);if(!l&&!s){const d=pg(o,e);u=u.concat(ET(t,e,d))}return u}function $c(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=pt(o,e),c=xn(a,l);if(c)return c});return sg(i,e,s,n,!0)}function bT(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const d=pt(c,n);r=r||xn(u,d)});let i=t.syncPointTree_.get(n);i?r=r||xn(i,_e()):(i=new dg,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new Nn(r,!0,!1):null,a=ta(t.pendingWriteTree_,e._path),l=hg(i,e,a,s?o.getNode():Y.EMPTY_NODE,s);return tT(l)}function ai(t,e){return _g(e,t.syncPointTree_,null,ta(t.pendingWriteTree_,_e()))}function _g(t,e,n,r){if(le(t.path))return vg(t,e,n,r);{const i=e.get(_e());n==null&&i!=null&&(n=xn(i,_e()));let s=[];const o=se(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=og(r,o);s=s.concat(_g(a,l,c,u))}return i&&(s=s.concat(Fc(i,t,r,n))),s}}function vg(t,e,n,r){const i=e.get(_e());n==null&&i!=null&&(n=xn(i,_e()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=og(r,o),u=t.operationForChild(o);u&&(s=s.concat(vg(u,a,l,c)))}),i&&(s=s.concat(Fc(i,t,r,n))),s}function bg(t,e){const n=e.query,r=xo(t,n);return{hashFn:()=>(eT(e)||Y.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?mT(t,n._path,r):gT(t,n._path);{const s=dC(i,n);return wl(t,n,null,s)}}}}function xo(t,e){const n=ra(e);return t.queryToTagMap.get(n)}function ra(t){return t._path.toString()+"$"+t._queryIdentifier}function Bc(t,e){return t.tagToQueryMap.get(e)}function Uc(t){const e=t.indexOf("$");return P(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Ie(t.substr(0,e))}}function Hc(t,e,n){const r=t.syncPointTree_.get(e);P(r,"Missing sync point for query tag that we're tracking");const i=ta(t.pendingWriteTree_,e);return Fc(r,n,i,null)}function yT(t){return t.fold((e,n,r)=>{if(n&&kn(n))return[na(n)];{let i=[];return n&&(i=fg(n)),ot(r,(s,o)=>{i=i.concat(o)}),i}})}function Bi(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(dT())(t._repo,t._path):t}function wT(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=ra(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function CT(){return hT++}function ET(t,e,n){const r=e._path,i=xo(t,e),s=bg(t,n),o=t.listenProvider_.startListening(Bi(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)P(!kn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,d)=>{if(!le(c)&&u&&kn(u))return[na(u).query];{let h=[];return u&&(h=h.concat(fg(u).map(_=>_.query))),ot(d,(_,g)=>{h=h.concat(g)}),h}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(Bi(u),xo(t,u))}}return o}/**
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
 */class zc{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new zc(n)}node(){return this.node_}}class Wc{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Fe(this.path_,e);return new Wc(this.syncTree_,n)}node(){return $c(this.syncTree_,this.path_)}}const TT=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Yd=function(t,e,n){if(!t||typeof t!="object")return t;if(P(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return IT(t[".sv"],e,n);if(typeof t[".sv"]=="object")return ST(t[".sv"],e);P(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},IT=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:P(!1,"Unexpected server value: "+t)}},ST=function(t,e,n){t.hasOwnProperty("increment")||P(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&P(!1,"Unexpected increment value: "+r);const i=e.node();if(P(i!==null&&typeof i!="undefined","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},yg=function(t,e,n,r){return jc(e,new Wc(n,t),r)},wg=function(t,e,n){return jc(t,new zc(e),n)};function jc(t,e,n){const r=t.getPriority().val(),i=Yd(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=Yd(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Ge(a,je(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Ge(i))),o.forEachChild($e,(a,l)=>{const c=jc(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
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
 */class Vc{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function qc(t,e){let n=e instanceof Ie?e:new Ie(e),r=t,i=se(n);for(;i!==null;){const s=zr(r.node.children,i)||{children:{},childCount:0};r=new Vc(i,r,s),n=Ae(n),i=se(n)}return r}function li(t){return t.node.value}function Cg(t,e){t.node.value=e,Cl(t)}function Eg(t){return t.node.childCount>0}function xT(t){return li(t)===void 0&&!Eg(t)}function ia(t,e){ot(t.node.children,(n,r)=>{e(new Vc(n,t,r))})}function Tg(t,e,n,r){n&&!r&&e(t),ia(t,i=>{Tg(i,e,!0,r)}),n&&r&&e(t)}function RT(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function bs(t){return new Ie(t.parent===null?t.name:bs(t.parent)+"/"+t.name)}function Cl(t){t.parent!==null&&PT(t.parent,t.name,t)}function PT(t,e,n){const r=xT(n),i=Gt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Cl(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Cl(t))}/**
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
 */const AT=/[\[\].#$\/\u0000-\u001F\u007F]/,NT=/[\[\].#$\u0000-\u001F\u007F]/,Oa=10*1024*1024,Kc=function(t){return typeof t=="string"&&t.length!==0&&!AT.test(t)},Ig=function(t){return typeof t=="string"&&t.length!==0&&!NT.test(t)},kT=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Ig(t)},OT=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!bc(t)||t&&typeof t=="object"&&Gt(t,".sv")},Sg=function(t,e,n,r){r&&e===void 0||sa(Ko(t,"value"),e,n)},sa=function(t,e,n){const r=n instanceof Ie?new KC(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Wn(r));if(typeof e=="function")throw new Error(t+"contains a function "+Wn(r)+" with contents = "+e.toString());if(bc(e))throw new Error(t+"contains "+e.toString()+" "+Wn(r));if(typeof e=="string"&&e.length>Oa/3&&Go(e)>Oa)throw new Error(t+"contains a string greater than "+Oa+" utf8 bytes "+Wn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(ot(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Kc(o)))throw new Error(t+" contains an invalid key ("+o+") "+Wn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);GC(r,o),sa(t,a,r),YC(r)}),i&&s)throw new Error(t+' contains ".value" child '+Wn(r)+" in addition to actual children.")}},MT=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=ts(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!Kc(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(qC);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&Pt(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},DT=function(t,e,n,r){if(r&&e===void 0)return;const i=Ko(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];ot(e,(o,a)=>{const l=new Ie(o);if(sa(i,a,Fe(n,l)),Ic(l)===".priority"&&!OT(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),MT(i,s)},xg=function(t,e,n,r){if(!(r&&n===void 0)&&!Ig(n))throw new Error(Ko(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},LT=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),xg(t,e,n,r)},Gc=function(t,e){if(se(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},FT=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Kc(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!kT(n))throw new Error(Ko(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class $T{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function oa(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Sc(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Yc(t,e,n){oa(t,n),Rg(t,r=>Sc(r,e))}function Ft(t,e,n){oa(t,n),Rg(t,r=>Pt(r,e)||Pt(e,r))}function Rg(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(BT(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function BT(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();nr&&rt("event: "+n.toString()),oi(r)}}}/**
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
 */const UT="repo_interrupt",HT=25;class zT{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new $T,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=bo(),this.transactionQueueTree_=new Vc,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function WT(t,e,n){if(t.stats_=Cc(t.repoInfo_),t.forceRestClient_||gC())t.server_=new vo(t.repoInfo_,(r,i,s,o)=>{Xd(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Jd(t,!0),0);else{if(typeof n!="undefined"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ve(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new tn(t.repoInfo_,e,(r,i,s,o)=>{Xd(t,r,i,s,o)},r=>{Jd(t,r)},r=>{jT(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=CC(t.repoInfo_,()=>new EE(t.stats_,t.server_)),t.infoData_=new vE,t.infoSyncTree_=new Kd({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=vs(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Xc(t,"connected",!1),t.serverSyncTree_=new Kd({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const c=o(a,l);Ft(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function Pg(t){const n=t.infoData_.getNode(new Ie(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function aa(t){return TT({timestamp:Pg(t)})}function Xd(t,e,n,r,i){t.dataUpdateCount++;const s=new Ie(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=ao(n,c=>je(c));o=vT(t.serverSyncTree_,s,l,i)}else{const l=je(n);o=_T(t.serverSyncTree_,s,l,i)}else if(r){const l=ao(n,c=>je(c));o=pT(t.serverSyncTree_,s,l)}else{const l=je(n);o=vs(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Gr(t,s)),Ft(t.eventQueue_,a,o)}function Jd(t,e){Xc(t,"connected",e),e===!1&&GT(t)}function jT(t,e){ot(e,(n,r)=>{Xc(t,n,r)})}function Xc(t,e,n){const r=new Ie("/.info/"+e),i=je(n);t.infoData_.updateSnapshot(r,i);const s=vs(t.infoSyncTree_,r,i);Ft(t.eventQueue_,r,s)}function Jc(t){return t.nextWriteId_++}function VT(t,e){const n=bT(t.serverSyncTree_,e);return n!=null?Promise.resolve(n):t.server_.get(e).then(r=>{const i=je(r).withIndex(e._queryParams.getIndex()),s=vs(t.serverSyncTree_,e._path,i);return Yc(t.eventQueue_,e._path,s),Promise.resolve(i)},r=>(ys(t,"get for query "+Ve(e)+" failed: "+r),Promise.reject(new Error(r))))}function qT(t,e,n,r,i){ys(t,"set",{path:e.toString(),value:n,priority:r});const s=aa(t),o=je(n,r),a=$c(t.serverSyncTree_,e),l=wg(o,a,s),c=Jc(t),u=mg(t.serverSyncTree_,e,l,c,!0);oa(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(h,_)=>{const g=h==="ok";g||gt("set at "+e+" failed: "+h);const C=wn(t.serverSyncTree_,c,!g);Ft(t.eventQueue_,e,C),El(t,i,h,_)});const d=Zc(t,e);Gr(t,d),Ft(t.eventQueue_,d,[])}function KT(t,e,n,r){ys(t,"update",{path:e.toString(),value:n});let i=!0;const s=aa(t),o={};if(ot(n,(a,l)=>{i=!1,o[a]=yg(Fe(e,a),je(l),t.serverSyncTree_,s)}),i)rt("update() called with empty data.  Don't do anything."),El(t,r,"ok",void 0);else{const a=Jc(t),l=fT(t.serverSyncTree_,e,o,a);oa(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,u)=>{const d=c==="ok";d||gt("update at "+e+" failed: "+c);const h=wn(t.serverSyncTree_,a,!d),_=h.length>0?Gr(t,e):e;Ft(t.eventQueue_,_,h),El(t,r,c,u)}),ot(n,c=>{const u=Zc(t,Fe(e,c));Gr(t,u)}),Ft(t.eventQueue_,e,[])}}function GT(t){ys(t,"onDisconnectEvents");const e=aa(t),n=bo();gl(t.onDisconnect_,_e(),(i,s)=>{const o=yg(i,s,t.serverSyncTree_,e);tg(n,i,o)});let r=[];gl(n,_e(),(i,s)=>{r=r.concat(vs(t.serverSyncTree_,i,s));const o=Zc(t,i);Gr(t,o)}),t.onDisconnect_=bo(),Ft(t.eventQueue_,_e(),r)}function YT(t,e,n){let r;se(e._path)===".info"?r=Gd(t.infoSyncTree_,e,n):r=Gd(t.serverSyncTree_,e,n),Yc(t.eventQueue_,e._path,r)}function Qd(t,e,n){let r;se(e._path)===".info"?r=wl(t.infoSyncTree_,e,n):r=wl(t.serverSyncTree_,e,n),Yc(t.eventQueue_,e._path,r)}function XT(t){t.persistentConnection_&&t.persistentConnection_.interrupt(UT)}function ys(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),rt(n,...e)}function El(t,e,n,r){e&&oi(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function Ag(t,e,n){return $c(t.serverSyncTree_,e,n)||Y.EMPTY_NODE}function Qc(t,e=t.transactionQueueTree_){if(e||la(t,e),li(e)){const n=kg(t,e);P(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&JT(t,bs(e),n)}else Eg(e)&&ia(e,n=>{Qc(t,n)})}function JT(t,e,n){const r=n.map(c=>c.currentWriteId),i=Ag(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];P(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=pt(e,u.path);s=s.updateChild(d,u.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{ys(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let h=0;h<n.length;h++)n[h].status=2,u=u.concat(wn(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&d.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();la(t,qc(t.transactionQueueTree_,e)),Qc(t,t.transactionQueueTree_),Ft(t.eventQueue_,e,u);for(let h=0;h<d.length;h++)oi(d[h])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{gt("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}Gr(t,e)}},o)}function Gr(t,e){const n=Ng(t,e),r=bs(n),i=kg(t,n);return QT(t,i,r),r}function QT(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=pt(n,l.path);let u=!1,d;if(P(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,i=i.concat(wn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=HT)u=!0,d="maxretry",i=i.concat(wn(t.serverSyncTree_,l.currentWriteId,!0));else{const h=Ag(t,l.path,o);l.currentInputSnapshot=h;const _=e[a].update(h.val());if(_!==void 0){sa("transaction failed: Data returned ",_,l.path);let g=je(_);typeof _=="object"&&_!=null&&Gt(_,".priority")||(g=g.updatePriority(h.getPriority()));const b=l.currentWriteId,O=aa(t),H=wg(g,h,O);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=H,l.currentWriteId=Jc(t),o.splice(o.indexOf(b),1),i=i.concat(mg(t.serverSyncTree_,l.path,H,l.currentWriteId,l.applyLocally)),i=i.concat(wn(t.serverSyncTree_,b,!0))}else u=!0,d="nodata",i=i.concat(wn(t.serverSyncTree_,l.currentWriteId,!0))}Ft(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(d),!1,null))))}la(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)oi(r[a]);Qc(t,t.transactionQueueTree_)}function Ng(t,e){let n,r=t.transactionQueueTree_;for(n=se(e);n!==null&&li(r)===void 0;)r=qc(r,n),e=Ae(e),n=se(e);return r}function kg(t,e){const n=[];return Og(t,e,n),n.sort((r,i)=>r.order-i.order),n}function Og(t,e,n){const r=li(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);ia(e,i=>{Og(t,i,n)})}function la(t,e){const n=li(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,Cg(e,n.length>0?n:void 0)}ia(e,r=>{la(t,r)})}function Zc(t,e){const n=bs(Ng(t,e)),r=qc(t.transactionQueueTree_,e);return RT(r,i=>{Ma(t,i)}),Ma(t,r),Tg(r,i=>{Ma(t,i)}),n}function Ma(t,e){const n=li(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(P(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(P(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(wn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Cg(e,void 0):n.length=s+1,Ft(t.eventQueue_,bs(e),i);for(let o=0;o<r.length;o++)oi(r[o])}}/**
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
 */function ZT(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function eI(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):gt(`Invalid query segment '${n}' in query '${t}'`)}return e}const Zd=function(t,e){const n=tI(t),r=n.namespace;n.domain==="firebase.com"&&cr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&cr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||oC();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new bC(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new Ie(n.pathString)}},tI=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(u,d)),u<d&&(i=ZT(t.substring(u,d)));const h=eI(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const g=e.indexOf(".");r=e.substring(0,g).toLowerCase(),n=e.substring(g+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */class Mg{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ve(this.snapshot.exportVal())}}class Dg{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class nI{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return P(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class eu{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return le(this._path)?null:Ic(this._path)}get ref(){return new Yt(this._repo,this._path)}get _queryIdentifier(){const e=Fd(this._queryParams),n=yc(e);return n==="{}"?"default":n}get _queryObject(){return Fd(this._queryParams)}isEqual(e){if(e=Ut(e),!(e instanceof eu))return!1;const n=this._repo===e._repo,r=Sc(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+VC(this._path)}}class Yt extends eu{constructor(e,n){super(e,n,new Ac,!1)}get parent(){const e=Kp(this._path);return e===null?null:new Yt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Yr{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Ie(e),r=Xr(this.ref,e);return new Yr(this._node.getChild(n),r,$e)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Yr(i,Xr(this.ref,r),$e)))}hasChild(e){const n=new Ie(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function $t(t,e){return t=Ut(t),t._checkNotDeleted("ref"),e!==void 0?Xr(t._root,e):t._root}function Xr(t,e){return t=Ut(t),se(t._path)===null?LT("child","path",e,!1):xg("child","path",e,!1),new Yt(t._repo,Fe(t._path,e))}function tu(t,e){t=Ut(t),Gc("push",t._path),Sg("push",e,t._path,!0);const n=Pg(t._repo),r=pE(n),i=Xr(t,r),s=Xr(t,r);let o;return e!=null?o=nu(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function rI(t){return Gc("remove",t._path),nu(t,null)}function nu(t,e){t=Ut(t),Gc("set",t._path),Sg("set",e,t._path,!1);const n=new cs;return qT(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Lg(t,e){DT("update",e,t._path,!1);const n=new cs;return KT(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function Fg(t){return t=Ut(t),VT(t._repo,t).then(e=>new Yr(e,new Yt(t._repo,t._path),t._queryParams.getIndex()))}class ru{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new Mg("value",this,new Yr(e.snapshotNode,new Yt(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Dg(this,e,n):null}matches(e){return e instanceof ru?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class iu{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Dg(this,e,n):null}createEvent(e,n){P(e.childName!=null,"Child events should have a childName.");const r=Xr(new Yt(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new Mg(e.type,this,new Yr(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof iu?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function iI(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,c=(u,d)=>{Qd(t._repo,t,a),l(u,d)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new nI(n,s||void 0),a=e==="value"?new ru(o):new iu(e,o);return YT(t._repo,t,a),()=>Qd(t._repo,t,a)}function Tl(t,e,n,r){return iI(t,"value",e,n,r)}sT(Yt);uT(Yt);/**
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
 */const sI="FIREBASE_DATABASE_EMULATOR_HOST",Il={};let oI=!1;function aI(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||cr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),rt("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Zd(s,i),a=o.repoInfo,l,c;typeof process!="undefined"&&process.env&&(c=process.env[sI]),c?(l=!0,s=`http://${c}?ns=${a.namespace}`,o=Zd(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new hl(hl.OWNER):new _C(t.name,t.options,e);FT("Invalid Firebase Database URL",o),le(o.path)||cr("Database URL must point to the root of a Firebase Database (not including a child path).");const d=cI(a,t,u,new mC(t.name,n));return new uI(d,t)}function lI(t,e){const n=Il[e];(!n||n[t.key]!==t)&&cr(`Database ${e}(${t.repoInfo_}) has already been deleted.`),XT(t),delete n[t.key]}function cI(t,e,n,r){let i=Il[e.name];i||(i={},Il[e.name]=i);let s=i[t.toURLString()];return s&&cr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new zT(t,oI,n,r),i[t.toURLString()]=s,s}class uI{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(WT(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Yt(this._repo,_e())),this._rootInternal}_delete(){return this._rootInternal!==null&&(lI(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&cr("Cannot call "+e+" on a deleted database.")}}function dI(t=Kf(),e){return uc(t,"database").getImmediate({identifier:e})}/**
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
 */function hI(t){tC(ds),Wr(new or("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return aI(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),In(bd,yd,t),In(bd,yd,"esm2017")}tn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};tn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};hI();const fI={apiKey:"AIzaSyAsXHXd9Spu67AO6DV06x2E_EnVOIAu9UU",authDomain:"quick-retro.firebaseapp.com",projectId:"quick-retro",storageBucket:"quick-retro.appspot.com",messagingSenderId:"293134428599",appId:"1:293134428599:web:bad71d4fedbda8080ce032",databaseURL:"https://quick-retro-default-rtdb.europe-west1.firebasedatabase.app"},pI=n0(fI),Bt=dI(pI),Os=gr({});function gI(t){if(!t)return Os;const e=$t(Bt,`users/${t}/boards`),n={};Tl(e,r,s);function r(o){const a=o.exists()?Object.values(o.val()):[];for(const l of a){if(n[l])continue;const c=Tl($t(Bt,`boards/${l}`),i.bind(null,l),s);n[l]=c}for(const l in n)a.includes(l)||(n[l](),delete n[l],console.log("delete",l),delete Os[l])}function i(o,a){Os[o]=a.val()}function s(o){console.error(o)}return Os}function mI(t){const e=gr({loading:!0});Tl($t(Bt,`boards/${t}`),r=>{e.exists=r.exists(),e.loading=!1,e.exists&&Object.entries(r.val()).forEach(([i,s])=>{e[i]=s})},n);function n(r){console.log(r),e.exists=!1,e.loading=!1}return e}function _I(t,e){const n=$t(Bt,`boards/${t}`);Lg(n,{cardsHidden:e})}function vI(t,e){const n=$t(Bt,`boards/${t}`);Lg(n,{title:e})}function bI(t,e,n){const r=$t(Bt,`boards/${t}/columns/${e}/cards`);tu(r,n)}function yI(t,e,n){rI($t(Bt,`boards/${t}/columns/${e}/cards/${n}`))}async function wI(t,e){const n=$t(Bt,"boards"),r=await tu(n,{author:t,cardsHidden:!0,title:"",columns:e.columns.map(i=>mu(gu({},i),{cards:{}}))});if(!!r.key)return await $g(t,r.key),r.key}async function CI(t,e){const n=$t(Bt,`users/${t}/boards`),r=await Fg(n);if(!r.exists())return;const i=Object.fromEntries(Object.entries(r.val()).filter(([s,o])=>e!==o));await nu(n,i)}async function $g(t,e){const n=await Fg($t(Bt,`users/${t}/boards`));if((n.exists()?Object.values(n.val()):[]).includes(e))return;const i=$t(Bt,`users/${t}/boards`);await tu(i,e)}function EI(){const t=gr({}),e=eC();return U0(e).catch(n=>{console.error(n)}),j0(e,n=>{n&&Object.entries(n).forEach(([r,i])=>{t[r]=i})}),t}var an=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n};const TI=Be({props:{text:null},setup(t){return(e,n)=>(Te(),Je("button",null,Fr(t.text),1))}});var II=an(TI,[["__scopeId","data-v-1ee2b704"]]);function SI(t,e){const n=t.trim().split(/\s+/g),r={top:n[0]};switch(n.length){case 1:r.right=n[0],r.bottom=n[0],r.left=n[0];break;case 2:r.right=n[1],r.left=n[1],r.bottom=n[0];break;case 3:r.right=n[1],r.bottom=n[2],r.left=n[1];break;case 4:r.right=n[1],r.bottom=n[2],r.left=n[3];break;default:throw new Error("[seemly/getMargin]:"+t+" is not a valid value.")}return e===void 0?r:r[e]}var eh={black:"#000",silver:"#C0C0C0",gray:"#808080",white:"#FFF",maroon:"#800000",red:"#F00",purple:"#800080",fuchsia:"#F0F",green:"#008000",lime:"#0F0",olive:"#808000",yellow:"#FF0",navy:"#000080",blue:"#00F",teal:"#008080",aqua:"#0FF",transparent:"#0000"};const ci="^\\s*",ui="\\s*$",Gn="\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*",Yn="([0-9A-Fa-f])",Xn="([0-9A-Fa-f]{2})",xI=new RegExp(`${ci}rgb\\s*\\(${Gn},${Gn},${Gn}\\)${ui}`),RI=new RegExp(`${ci}rgba\\s*\\(${Gn},${Gn},${Gn},${Gn}\\)${ui}`),PI=new RegExp(`${ci}#${Yn}${Yn}${Yn}${ui}`),AI=new RegExp(`${ci}#${Xn}${Xn}${Xn}${ui}`),NI=new RegExp(`${ci}#${Yn}${Yn}${Yn}${Yn}${ui}`),kI=new RegExp(`${ci}#${Xn}${Xn}${Xn}${Xn}${ui}`);function _t(t){return parseInt(t,16)}function fr(t){try{let e;if(e=AI.exec(t))return[_t(e[1]),_t(e[2]),_t(e[3]),1];if(e=xI.exec(t))return[at(e[1]),at(e[5]),at(e[9]),1];if(e=RI.exec(t))return[at(e[1]),at(e[5]),at(e[9]),Ui(e[13])];if(e=PI.exec(t))return[_t(e[1]+e[1]),_t(e[2]+e[2]),_t(e[3]+e[3]),1];if(e=kI.exec(t))return[_t(e[1]),_t(e[2]),_t(e[3]),Ui(_t(e[4])/255)];if(e=NI.exec(t))return[_t(e[1]+e[1]),_t(e[2]+e[2]),_t(e[3]+e[3]),Ui(_t(e[4]+e[4])/255)];if(t in eh)return fr(eh[t]);throw new Error(`[seemly/rgba]: Invalid color value ${t}.`)}catch(e){throw e}}function OI(t){return t>1?1:t<0?0:t}function Sl(t,e,n,r){return`rgba(${at(t)}, ${at(e)}, ${at(n)}, ${OI(r)})`}function Da(t,e,n,r,i){return at((t*e*(1-r)+n*r)/i)}function MI(t,e){Array.isArray(t)||(t=fr(t)),Array.isArray(e)||(e=fr(e));const n=t[3],r=e[3],i=Ui(n+r-n*r);return Sl(Da(t[0],n,e[0],r,i),Da(t[1],n,e[1],r,i),Da(t[2],n,e[2],r,i),i)}function La(t,e){const[n,r,i,s=1]=Array.isArray(t)?t:fr(t);return e.alpha?Sl(n,r,i,e.alpha):Sl(n,r,i,s)}function Ms(t,e){const[n,r,i,s=1]=Array.isArray(t)?t:fr(t),{lightness:o=1,alpha:a=1}=e;return DI([n*o,r*o,i*o,s*a])}function Ui(t){const e=Math.round(Number(t)*100)/100;return e>1?1:e<0?0:e}function at(t){const e=Math.round(Number(t));return e>255?255:e<0?0:e}function DI(t){const[e,n,r]=t;return 3 in t?`rgba(${at(e)}, ${at(n)}, ${at(r)}, ${Ui(t[3])})`:`rgba(${at(e)}, ${at(n)}, ${at(r)}, 1)`}function ht(t,...e){if(Array.isArray(t))t.forEach(n=>ht(n,...e));else return t(...e)}function LI(t,e){throw new Error(`[naive/${t}]: ${e}`)}function ca(t){return t.some(e=>Ki(e)?!(e.type===It||e.type===Le&&!ca(e.children)):!0)?t:null}function Xs(t,e){return t&&ca(t())||e()}function FI(t,e,n){return t&&ca(t(e))||n(e)}function Ds(t,e){const n=t&&ca(t());return e(n||null)}function $I(t){let e=0;for(let n=0;n<t.length;++n)t[n]==="&"&&++e;return e}const Bg=/\s*,(?![^(]*\))\s*/g,BI=/\s+/g;function UI(t,e){const n=[];return e.split(Bg).forEach(r=>{let i=$I(r);if(i){if(i===1){t.forEach(o=>{n.push(r.replace("&",o))});return}}else{t.forEach(o=>{n.push((o&&o+" ")+r)});return}let s=[r];for(;i--;){const o=[];s.forEach(a=>{t.forEach(l=>{o.push(a.replace("&",l))})}),s=o}s.forEach(o=>n.push(o))}),n}function HI(t,e){const n=[];return e.split(Bg).forEach(r=>{t.forEach(i=>{n.push((i&&i+" ")+r)})}),n}function zI(t){let e=[""];return t.forEach(n=>{n=n&&n.trim(),n&&(n.includes("&")?e=UI(e,n):e=HI(e,n))}),e.join(", ").replace(BI," ")}function th(t){if(!t)return;const e=t.parentElement;e&&e.removeChild(t)}function ua(t){return document.querySelector(`style[cssr-id="${t}"]`)}function WI(t){const e=document.createElement("style");return e.setAttribute("cssr-id",t),e}function Ls(t){return t?/^\s*@(s|m)/.test(t):!1}const jI=/[A-Z]/g;function Ug(t){return t.replace(jI,e=>"-"+e.toLowerCase())}function VI(t,e="  "){return typeof t=="object"&&t!==null?` {
`+Object.entries(t).map(n=>e+`  ${Ug(n[0])}: ${n[1]};`).join(`
`)+`
`+e+"}":`: ${t};`}function qI(t,e,n){return typeof t=="function"?t({context:e.context,props:n}):t}function nh(t,e,n,r){if(!e)return"";const i=qI(e,n,r);if(!i)return"";if(typeof i=="string")return`${t} {
${i}
}`;const s=Object.keys(i);if(s.length===0)return n.config.keepEmptyBlock?t+` {
}`:"";const o=t?[t+" {"]:[];return s.forEach(a=>{const l=i[a];if(a==="raw"){o.push(`
`+l+`
`);return}a=Ug(a),l!=null&&o.push(`  ${a}${VI(l)}`)}),t&&o.push("}"),o.join(`
`)}function xl(t,e,n){!t||t.forEach(r=>{if(Array.isArray(r))xl(r,e,n);else if(typeof r=="function"){const i=r(e);Array.isArray(i)?xl(i,e,n):i&&n(i)}else r&&n(r)})}function Hg(t,e,n,r,i,s){const o=t.$;let a="";if(!o||typeof o=="string")Ls(o)?a=o:e.push(o);else if(typeof o=="function"){const u=o({context:r.context,props:i});Ls(u)?a=u:e.push(u)}else if(o.before&&o.before(r.context),!o.$||typeof o.$=="string")Ls(o.$)?a=o.$:e.push(o.$);else if(o.$){const u=o.$({context:r.context,props:i});Ls(u)?a=u:e.push(u)}const l=zI(e),c=nh(l,t.props,r,i);a?(n.push(`${a} {`),s&&c&&s.insertRule(`${a} {
${c}
}
`)):(s&&c&&s.insertRule(c),!s&&c.length&&n.push(c)),t.children&&xl(t.children,{context:r.context,props:i},u=>{if(typeof u=="string"){const d=nh(l,{raw:u},r,i);s?s.insertRule(d):n.push(d)}else Hg(u,e,n,r,i,s)}),e.pop(),a&&n.push("}"),o&&o.after&&o.after(r.context)}function zg(t,e,n,r=!1){const i=[];return Hg(t,[],i,e,n,r?t.instance.__styleSheet:void 0),r?"":i.join(`

`)}function Rl(t){for(var e=0,n,r=0,i=t.length;i>=4;++r,i-=4)n=t.charCodeAt(r)&255|(t.charCodeAt(++r)&255)<<8|(t.charCodeAt(++r)&255)<<16|(t.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,e=(n&65535)*1540483477+((n>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(i){case 3:e^=(t.charCodeAt(r+2)&255)<<16;case 2:e^=(t.charCodeAt(r+1)&255)<<8;case 1:e^=t.charCodeAt(r)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}typeof window!="undefined"&&(window.__cssrContext={});function KI(t,e,n){const{els:r}=e;if(n===void 0)r.forEach(th),e.els=[];else{const i=ua(n);i&&r.includes(i)&&(th(i),e.els=r.filter(s=>s!==i))}}function rh(t,e){t.push(e)}function GI(t,e,n,r,i,s,o,a,l){if(s&&!l){if(n===void 0){console.error("[css-render/mount]: `id` is required in `silent` mode.");return}const h=window.__cssrContext;h[n]||(h[n]=!0,zg(e,t,r,s));return}let c;if(n===void 0&&(c=e.render(r),n=Rl(c)),l){l.adapter(n,c!=null?c:e.render(r));return}const u=ua(n);if(u!==null&&!o)return u;const d=u!=null?u:WI(n);if(c===void 0&&(c=e.render(r)),d.textContent=c,u!==null)return u;if(a){const h=document.head.querySelector(`meta[name="${a}"]`);if(h)return document.head.insertBefore(d,h),rh(e.els,d),d}return i?document.head.insertBefore(d,document.head.querySelector("style, link")):document.head.appendChild(d),rh(e.els,d),d}function YI(t){return zg(this,this.instance,t)}function XI(t={}){const{id:e,ssr:n,props:r,head:i=!1,silent:s=!1,force:o=!1,anchorMetaName:a}=t;return GI(this.instance,this,e,r,i,s,o,a,n)}function JI(t={}){const{id:e}=t;KI(this.instance,this,e)}const Fs=function(t,e,n,r){return{instance:t,$:e,props:n,children:r,els:[],render:YI,mount:XI,unmount:JI}},QI=function(t,e,n,r){return Array.isArray(e)?Fs(t,{$:null},null,e):Array.isArray(n)?Fs(t,e,null,n):Array.isArray(r)?Fs(t,e,n,r):Fs(t,e,n,null)};function ZI(t={}){let e=null;const n={c:(...r)=>QI(n,...r),use:(r,...i)=>r.install(n,...i),find:ua,context:{},config:t,get __styleSheet(){if(!e){const r=document.createElement("style");return document.head.appendChild(r),e=document.styleSheets[document.styleSheets.length-1],e}return e}};return n}function eS(t,e){if(t===void 0)return!1;if(e){const{context:{ids:n}}=e;return n.has(t)}return ua(t)!==null}function tS(t){let e=".",n="__",r="--",i;if(t){let g=t.blockPrefix;g&&(e=g),g=t.elementPrefix,g&&(n=g),g=t.modifierPrefix,g&&(r=g)}const s={install(g){i=g.c;const C=g.context;C.bem={},C.bem.b=null,C.bem.els=null}};function o(g){let C,b;return{before(O){C=O.bem.b,b=O.bem.els,O.bem.els=null},after(O){O.bem.b=C,O.bem.els=b},$({context:O,props:H}){return g=typeof g=="string"?g:g({context:O,props:H}),O.bem.b=g,`${(H==null?void 0:H.bPrefix)||e}${O.bem.b}`}}}function a(g){let C;return{before(b){C=b.bem.els},after(b){b.bem.els=C},$({context:b,props:O}){return g=typeof g=="string"?g:g({context:b,props:O}),b.bem.els=g.split(",").map(H=>H.trim()),b.bem.els.map(H=>`${(O==null?void 0:O.bPrefix)||e}${b.bem.b}${n}${H}`).join(", ")}}}function l(g){return{$({context:C,props:b}){g=typeof g=="string"?g:g({context:C,props:b});const O=g.split(",").map(z=>z.trim());function H(z){return O.map(X=>`&${(b==null?void 0:b.bPrefix)||e}${C.bem.b}${z!==void 0?`${n}${z}`:""}${r}${X}`).join(", ")}const V=C.bem.els;return V!==null?H(V[0]):H()}}}function c(g){return{$({context:C,props:b}){g=typeof g=="string"?g:g({context:C,props:b});const O=C.bem.els;return`&:not(${(b==null?void 0:b.bPrefix)||e}${C.bem.b}${O!==null&&O.length>0?`${n}${O[0]}`:""}${r}${g})`}}}return Object.assign(s,{cB:(...g)=>i(o(g[0]),g[1],g[2]),cE:(...g)=>i(a(g[0]),g[1],g[2]),cM:(...g)=>i(l(g[0]),g[1],g[2]),cNotM:(...g)=>i(c(g[0]),g[1],g[2])}),s}function Js(t,e){return t+(e==="default"?"":e.replace(/^[a-z]/,n=>n.toUpperCase()))}Js("abc","def");const nS="n",rS=`.${nS}-`,iS="__",sS="--",Wg=ZI(),jg=tS({blockPrefix:rS,elementPrefix:iS,modifierPrefix:sS});Wg.use(jg);const{c:te,find:mN}=Wg,{cB:Ne,cE:j,cM:yt,cNotM:Ti}=jg;function ih(t){const e=de(t),n=he(e.value);return Tn(e,r=>{n.value=r}),typeof t=="function"?n:{__v_isRef:!0,get value(){return n.value},set value(r){t.set(r)}}}const oS={mousemoveoutside:new WeakMap,clickoutside:new WeakMap};function aS(t,e,n){if(t==="mousemoveoutside"){const r=i=>{e.contains(i.target)||n(i)};return{mousemove:r,touchstart:r}}else if(t==="clickoutside"){let r=!1;const i=o=>{r=!e.contains(o.target)},s=o=>{!r||e.contains(o.target)||n(o)};return{mousedown:i,mouseup:s,touchstart:i,touchend:s}}return console.error(`[evtd/create-trap-handler]: name \`${t}\` is invalid. This could be a bug of evtd.`),{}}function Vg(t,e,n){const r=oS[t];let i=r.get(e);i===void 0&&r.set(e,i=new WeakMap);let s=i.get(n);return s===void 0&&i.set(n,s=aS(t,e,n)),s}function lS(t,e,n,r){if(t==="mousemoveoutside"||t==="clickoutside"){const i=Vg(t,e,n);return Object.keys(i).forEach(s=>{Jn(s,document,i[s],r)}),!0}return!1}function cS(t,e,n,r){if(t==="mousemoveoutside"||t==="clickoutside"){const i=Vg(t,e,n);return Object.keys(i).forEach(s=>{Xt(s,document,i[s],r)}),!0}return!1}function uS(){if(typeof window=="undefined")return{on:()=>{},off:()=>{}};const t=new WeakMap,e=new WeakMap;function n(){t.set(this,!0)}function r(){t.set(this,!0),e.set(this,!0)}function i(E,S,D){const q=E[S];return E[S]=function(){return D.apply(E,arguments),q.apply(E,arguments)},E}function s(E,S){E[S]=Event.prototype[S]}const o=new WeakMap,a=Object.getOwnPropertyDescriptor(Event.prototype,"currentTarget");function l(){var E;return(E=o.get(this))!==null&&E!==void 0?E:null}function c(E,S){a!==void 0&&Object.defineProperty(E,"currentTarget",{configurable:!0,enumerable:!0,get:S!=null?S:a.get})}const u={bubble:{},capture:{}},d={};function h(){const E=function(S){const{type:D,eventPhase:q,target:Z,bubbles:L}=S;if(q===2)return;const re=q===1?"capture":"bubble";let ye=Z;const Se=[];for(;ye===null&&(ye=window),Se.push(ye),ye!==window;)ye=ye.parentNode||null;const ce=u.capture[D],fe=u.bubble[D];if(i(S,"stopPropagation",n),i(S,"stopImmediatePropagation",r),c(S,l),re==="capture"){if(ce===void 0)return;for(let ie=Se.length-1;ie>=0&&!t.has(S);--ie){const Ue=Se[ie],mt=ce.get(Ue);if(mt!==void 0){o.set(S,Ue);for(const Me of mt){if(e.has(S))break;Me(S)}}if(ie===0&&!L&&fe!==void 0){const Me=fe.get(Ue);if(Me!==void 0)for(const ct of Me){if(e.has(S))break;ct(S)}}}}else if(re==="bubble"){if(fe===void 0)return;for(let ie=0;ie<Se.length&&!t.has(S);++ie){const Ue=Se[ie],mt=fe.get(Ue);if(mt!==void 0){o.set(S,Ue);for(const Me of mt){if(e.has(S))break;Me(S)}}}}s(S,"stopPropagation"),s(S,"stopImmediatePropagation"),c(S)};return E.displayName="evtdUnifiedHandler",E}function _(){const E=function(S){const{type:D,eventPhase:q}=S;if(q!==2)return;const Z=d[D];Z!==void 0&&Z.forEach(L=>L(S))};return E.displayName="evtdUnifiedWindowEventHandler",E}const g=h(),C=_();function b(E,S){const D=u[E];return D[S]===void 0&&(D[S]=new Map,window.addEventListener(S,g,E==="capture")),D[S]}function O(E){return d[E]===void 0&&(d[E]=new Set,window.addEventListener(E,C)),d[E]}function H(E,S){let D=E.get(S);return D===void 0&&E.set(S,D=new Set),D}function V(E,S,D,q){const Z=u[S][D];if(Z!==void 0){const L=Z.get(E);if(L!==void 0&&L.has(q))return!0}return!1}function z(E,S){const D=d[E];return!!(D!==void 0&&D.has(S))}function X(E,S,D,q){let Z;if(typeof q=="object"&&q.once===!0?Z=ce=>{me(E,S,Z,q),D(ce)}:Z=D,lS(E,S,Z,q))return;const re=q===!0||typeof q=="object"&&q.capture===!0?"capture":"bubble",ye=b(re,E),Se=H(ye,S);if(Se.has(Z)||Se.add(Z),S===window){const ce=O(E);ce.has(Z)||ce.add(Z)}}function me(E,S,D,q){if(cS(E,S,D,q))return;const L=q===!0||typeof q=="object"&&q.capture===!0,re=L?"capture":"bubble",ye=b(re,E),Se=H(ye,S);if(S===window&&!V(S,L?"bubble":"capture",E,D)&&z(E,D)){const fe=d[E];fe.delete(D),fe.size===0&&(window.removeEventListener(E,C),d[E]=void 0)}Se.has(D)&&Se.delete(D),Se.size===0&&ye.delete(S),ye.size===0&&(window.removeEventListener(E,g,re==="capture"),u[re][E]=void 0)}return{on:X,off:me}}const{on:Jn,off:Xt}=uS();function dS(t,e){return Tn(t,n=>{n!==void 0&&(e.value=n)}),de(()=>t.value===void 0?e.value:t.value)}function hS(){const t=he(!1);return ni(()=>{t.value=!0}),Gl(t)}const fS=(typeof window=="undefined"?!1:/iPad|iPhone|iPod/.test(navigator.platform)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!window.MSStream;function pS(){return fS}const qg=Symbol("@css-render/vue3-ssr");function gS(t,e){return`<style cssr-id="${t}">
${e}
</style>`}function mS(t,e){const n=qe(qg,null);if(n===null){console.error("[css-render/vue3-ssr]: no ssr context found.");return}const{styles:r,ids:i}=n;i.has(t)||r!==null&&(i.add(t),r.push(gS(t,e)))}function da(){const t=qe(qg,null);if(t!==null)return{adapter:mS,context:t}}function sh(t,e){console.error(`[vueuc/${t}]: ${e}`)}var rr=[],_S=function(){return rr.some(function(t){return t.activeTargets.length>0})},vS=function(){return rr.some(function(t){return t.skippedTargets.length>0})},oh="ResizeObserver loop completed with undelivered notifications.",bS=function(){var t;typeof ErrorEvent=="function"?t=new ErrorEvent("error",{message:oh}):(t=document.createEvent("Event"),t.initEvent("error",!1,!1),t.message=oh),window.dispatchEvent(t)},os;(function(t){t.BORDER_BOX="border-box",t.CONTENT_BOX="content-box",t.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box"})(os||(os={}));var ir=function(t){return Object.freeze(t)},yS=function(){function t(e,n){this.inlineSize=e,this.blockSize=n,ir(this)}return t}(),Kg=function(){function t(e,n,r,i){return this.x=e,this.y=n,this.width=r,this.height=i,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,ir(this)}return t.prototype.toJSON=function(){var e=this,n=e.x,r=e.y,i=e.top,s=e.right,o=e.bottom,a=e.left,l=e.width,c=e.height;return{x:n,y:r,top:i,right:s,bottom:o,left:a,width:l,height:c}},t.fromRect=function(e){return new t(e.x,e.y,e.width,e.height)},t}(),su=function(t){return t instanceof SVGElement&&"getBBox"in t},Gg=function(t){if(su(t)){var e=t.getBBox(),n=e.width,r=e.height;return!n&&!r}var i=t,s=i.offsetWidth,o=i.offsetHeight;return!(s||o||t.getClientRects().length)},ah=function(t){var e,n;if(t instanceof Element)return!0;var r=(n=(e=t)===null||e===void 0?void 0:e.ownerDocument)===null||n===void 0?void 0:n.defaultView;return!!(r&&t instanceof r.Element)},wS=function(t){switch(t.tagName){case"INPUT":if(t.type!=="image")break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1},Hi=typeof window!="undefined"?window:{},$s=new WeakMap,lh=/auto|scroll/,CS=/^tb|vertical/,ES=/msie|trident/i.test(Hi.navigator&&Hi.navigator.userAgent),zt=function(t){return parseFloat(t||"0")},Lr=function(t,e,n){return t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=!1),new yS((n?e:t)||0,(n?t:e)||0)},ch=ir({devicePixelContentBoxSize:Lr(),borderBoxSize:Lr(),contentBoxSize:Lr(),contentRect:new Kg(0,0,0,0)}),Yg=function(t,e){if(e===void 0&&(e=!1),$s.has(t)&&!e)return $s.get(t);if(Gg(t))return $s.set(t,ch),ch;var n=getComputedStyle(t),r=su(t)&&t.ownerSVGElement&&t.getBBox(),i=!ES&&n.boxSizing==="border-box",s=CS.test(n.writingMode||""),o=!r&&lh.test(n.overflowY||""),a=!r&&lh.test(n.overflowX||""),l=r?0:zt(n.paddingTop),c=r?0:zt(n.paddingRight),u=r?0:zt(n.paddingBottom),d=r?0:zt(n.paddingLeft),h=r?0:zt(n.borderTopWidth),_=r?0:zt(n.borderRightWidth),g=r?0:zt(n.borderBottomWidth),C=r?0:zt(n.borderLeftWidth),b=d+c,O=l+u,H=C+_,V=h+g,z=a?t.offsetHeight-V-t.clientHeight:0,X=o?t.offsetWidth-H-t.clientWidth:0,me=i?b+H:0,E=i?O+V:0,S=r?r.width:zt(n.width)-me-X,D=r?r.height:zt(n.height)-E-z,q=S+b+X+H,Z=D+O+z+V,L=ir({devicePixelContentBoxSize:Lr(Math.round(S*devicePixelRatio),Math.round(D*devicePixelRatio),s),borderBoxSize:Lr(q,Z,s),contentBoxSize:Lr(S,D,s),contentRect:new Kg(d,l,S,D)});return $s.set(t,L),L},Xg=function(t,e,n){var r=Yg(t,n),i=r.borderBoxSize,s=r.contentBoxSize,o=r.devicePixelContentBoxSize;switch(e){case os.DEVICE_PIXEL_CONTENT_BOX:return o;case os.BORDER_BOX:return i;default:return s}},TS=function(){function t(e){var n=Yg(e);this.target=e,this.contentRect=n.contentRect,this.borderBoxSize=ir([n.borderBoxSize]),this.contentBoxSize=ir([n.contentBoxSize]),this.devicePixelContentBoxSize=ir([n.devicePixelContentBoxSize])}return t}(),Jg=function(t){if(Gg(t))return 1/0;for(var e=0,n=t.parentNode;n;)e+=1,n=n.parentNode;return e},IS=function(){var t=1/0,e=[];rr.forEach(function(o){if(o.activeTargets.length!==0){var a=[];o.activeTargets.forEach(function(c){var u=new TS(c.target),d=Jg(c.target);a.push(u),c.lastReportedSize=Xg(c.target,c.observedBox),d<t&&(t=d)}),e.push(function(){o.callback.call(o.observer,a,o.observer)}),o.activeTargets.splice(0,o.activeTargets.length)}});for(var n=0,r=e;n<r.length;n++){var i=r[n];i()}return t},uh=function(t){rr.forEach(function(n){n.activeTargets.splice(0,n.activeTargets.length),n.skippedTargets.splice(0,n.skippedTargets.length),n.observationTargets.forEach(function(i){i.isActive()&&(Jg(i.target)>t?n.activeTargets.push(i):n.skippedTargets.push(i))})})},SS=function(){var t=0;for(uh(t);_S();)t=IS(),uh(t);return vS()&&bS(),t>0},Fa,Qg=[],xS=function(){return Qg.splice(0).forEach(function(t){return t()})},RS=function(t){if(!Fa){var e=0,n=document.createTextNode(""),r={characterData:!0};new MutationObserver(function(){return xS()}).observe(n,r),Fa=function(){n.textContent=""+(e?e--:e++)}}Qg.push(t),Fa()},PS=function(t){RS(function(){requestAnimationFrame(t)})},Qs=0,AS=function(){return!!Qs},NS=250,kS={attributes:!0,characterData:!0,childList:!0,subtree:!0},dh=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],hh=function(t){return t===void 0&&(t=0),Date.now()+t},$a=!1,OS=function(){function t(){var e=this;this.stopped=!0,this.listener=function(){return e.schedule()}}return t.prototype.run=function(e){var n=this;if(e===void 0&&(e=NS),!$a){$a=!0;var r=hh(e);PS(function(){var i=!1;try{i=SS()}finally{if($a=!1,e=r-hh(),!AS())return;i?n.run(1e3):e>0?n.run(e):n.start()}})}},t.prototype.schedule=function(){this.stop(),this.run()},t.prototype.observe=function(){var e=this,n=function(){return e.observer&&e.observer.observe(document.body,kS)};document.body?n():Hi.addEventListener("DOMContentLoaded",n)},t.prototype.start=function(){var e=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),dh.forEach(function(n){return Hi.addEventListener(n,e.listener,!0)}))},t.prototype.stop=function(){var e=this;this.stopped||(this.observer&&this.observer.disconnect(),dh.forEach(function(n){return Hi.removeEventListener(n,e.listener,!0)}),this.stopped=!0)},t}(),Pl=new OS,fh=function(t){!Qs&&t>0&&Pl.start(),Qs+=t,!Qs&&Pl.stop()},MS=function(t){return!su(t)&&!wS(t)&&getComputedStyle(t).display==="inline"},DS=function(){function t(e,n){this.target=e,this.observedBox=n||os.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return t.prototype.isActive=function(){var e=Xg(this.target,this.observedBox,!0);return MS(this.target)&&(this.lastReportedSize=e),this.lastReportedSize.inlineSize!==e.inlineSize||this.lastReportedSize.blockSize!==e.blockSize},t}(),LS=function(){function t(e,n){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=e,this.callback=n}return t}(),Bs=new WeakMap,ph=function(t,e){for(var n=0;n<t.length;n+=1)if(t[n].target===e)return n;return-1},Us=function(){function t(){}return t.connect=function(e,n){var r=new LS(e,n);Bs.set(e,r)},t.observe=function(e,n,r){var i=Bs.get(e),s=i.observationTargets.length===0;ph(i.observationTargets,n)<0&&(s&&rr.push(i),i.observationTargets.push(new DS(n,r&&r.box)),fh(1),Pl.schedule())},t.unobserve=function(e,n){var r=Bs.get(e),i=ph(r.observationTargets,n),s=r.observationTargets.length===1;i>=0&&(s&&rr.splice(rr.indexOf(r),1),r.observationTargets.splice(i,1),fh(-1))},t.disconnect=function(e){var n=this,r=Bs.get(e);r.observationTargets.slice().forEach(function(i){return n.unobserve(e,i.target)}),r.activeTargets.splice(0,r.activeTargets.length)},t}(),FS=function(){function t(e){if(arguments.length===0)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if(typeof e!="function")throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");Us.connect(this,e)}return t.prototype.observe=function(e,n){if(arguments.length===0)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!ah(e))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");Us.observe(this,e,n)},t.prototype.unobserve=function(e){if(arguments.length===0)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!ah(e))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");Us.unobserve(this,e)},t.prototype.disconnect=function(){Us.disconnect(this)},t.toString=function(){return"function ResizeObserver () { [polyfill code] }"},t}();class $S{constructor(){this.handleResize=this.handleResize.bind(this),this.observer=new FS(this.handleResize),this.elHandlersMap=new Map}handleResize(e){for(const n of e){const r=this.elHandlersMap.get(n.target);r!==void 0&&r(n)}}registerHandler(e,n){this.elHandlersMap.set(e,n),this.observer.observe(e)}unregisterHandler(e){!this.elHandlersMap.has(e)||(this.elHandlersMap.delete(e),this.observer.unobserve(e))}}var gh=new $S,Al=Be({name:"ResizeObserver",props:{onResize:Function},setup(t){return{registered:!1,handleResize(e){const{onResize:n}=t;n!==void 0&&n(e)}}},mounted(){const t=this.$el;if(t===void 0){sh("resize-observer","$el does not exist.");return}if(t.nextElementSibling!==t.nextSibling&&t.nodeType===3&&t.nodeValue!==""){sh("resize-observer","$el can not be observed (it may be a text node).");return}t.nextElementSibling!==null&&(gh.registerHandler(t.nextElementSibling,this.handleResize),this.registered=!0)},beforeUnmount(){this.registered&&gh.unregisterHandler(this.$el.nextElementSibling)},render(){return hb(this.$slots,"default")}});const mh="n-form-item";function BS(t,{defaultSize:e="medium",mergedSize:n,mergedDisabled:r}={}){const i=qe(mh,null);Br(mh,null);const s=de(n?()=>n(i):()=>{const{size:l}=t;if(l)return l;if(i){const{mergedSize:c}=i;if(c.value!==void 0)return c.value}return e}),o=de(r?()=>r(i):()=>{const{disabled:l}=t;return l!==void 0?l:i?i.disabled.value:!1}),a=de(()=>{const{status:l}=t;return l||(i==null?void 0:i.mergedValidationStatus.value)});return Wo(()=>{i&&i.restoreValidation()}),{mergedSizeRef:s,mergedDisabledRef:o,mergedStatusRef:a,nTriggerFormBlur(){i&&i.handleContentBlur()},nTriggerFormChange(){i&&i.handleContentChange()},nTriggerFormFocus(){i&&i.handleContentFocus()},nTriggerFormInput(){i&&i.handleContentInput()}}}var US=typeof global=="object"&&global&&global.Object===Object&&global,Zg=US,HS=typeof self=="object"&&self&&self.Object===Object&&self,zS=Zg||HS||Function("return this")(),di=zS,WS=di.Symbol,Jr=WS,em=Object.prototype,jS=em.hasOwnProperty,VS=em.toString,Ii=Jr?Jr.toStringTag:void 0;function qS(t){var e=jS.call(t,Ii),n=t[Ii];try{t[Ii]=void 0;var r=!0}catch{}var i=VS.call(t);return r&&(e?t[Ii]=n:delete t[Ii]),i}var KS=Object.prototype,GS=KS.toString;function YS(t){return GS.call(t)}var XS="[object Null]",JS="[object Undefined]",_h=Jr?Jr.toStringTag:void 0;function ws(t){return t==null?t===void 0?JS:XS:_h&&_h in Object(t)?qS(t):YS(t)}function hi(t){return t!=null&&typeof t=="object"}var QS="[object Symbol]";function ZS(t){return typeof t=="symbol"||hi(t)&&ws(t)==QS}function ex(t,e){for(var n=-1,r=t==null?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i}var tx=Array.isArray,Ro=tx,nx=1/0,vh=Jr?Jr.prototype:void 0,bh=vh?vh.toString:void 0;function tm(t){if(typeof t=="string")return t;if(Ro(t))return ex(t,tm)+"";if(ZS(t))return bh?bh.call(t):"";var e=t+"";return e=="0"&&1/t==-nx?"-0":e}function vr(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}function nm(t){return t}var rx="[object AsyncFunction]",ix="[object Function]",sx="[object GeneratorFunction]",ox="[object Proxy]";function ou(t){if(!vr(t))return!1;var e=ws(t);return e==ix||e==sx||e==rx||e==ox}var ax=di["__core-js_shared__"],Ba=ax,yh=function(){var t=/[^.]+$/.exec(Ba&&Ba.keys&&Ba.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function lx(t){return!!yh&&yh in t}var cx=Function.prototype,ux=cx.toString;function dx(t){if(t!=null){try{return ux.call(t)}catch{}try{return t+""}catch{}}return""}var hx=/[\\^$.*+?()[\]{}|]/g,fx=/^\[object .+?Constructor\]$/,px=Function.prototype,gx=Object.prototype,mx=px.toString,_x=gx.hasOwnProperty,vx=RegExp("^"+mx.call(_x).replace(hx,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function bx(t){if(!vr(t)||lx(t))return!1;var e=ou(t)?vx:fx;return e.test(dx(t))}function yx(t,e){return t==null?void 0:t[e]}function au(t,e){var n=yx(t,e);return bx(n)?n:void 0}var wh=Object.create,wx=function(){function t(){}return function(e){if(!vr(e))return{};if(wh)return wh(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}(),Cx=wx;function Ex(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}function Tx(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e}var Ix=800,Sx=16,xx=Date.now;function Rx(t){var e=0,n=0;return function(){var r=xx(),i=Sx-(r-n);if(n=r,i>0){if(++e>=Ix)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}function Px(t){return function(){return t}}var Ax=function(){try{var t=au(Object,"defineProperty");return t({},"",{}),t}catch{}}(),Po=Ax,Nx=Po?function(t,e){return Po(t,"toString",{configurable:!0,enumerable:!1,value:Px(e),writable:!0})}:nm,kx=Nx,Ox=Rx(kx),Mx=Ox,Dx=9007199254740991,Lx=/^(?:0|[1-9]\d*)$/;function rm(t,e){var n=typeof t;return e=e==null?Dx:e,!!e&&(n=="number"||n!="symbol"&&Lx.test(t))&&t>-1&&t%1==0&&t<e}function lu(t,e,n){e=="__proto__"&&Po?Po(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}function ha(t,e){return t===e||t!==t&&e!==e}var Fx=Object.prototype,$x=Fx.hasOwnProperty;function Bx(t,e,n){var r=t[e];(!($x.call(t,e)&&ha(r,n))||n===void 0&&!(e in t))&&lu(t,e,n)}function Ux(t,e,n,r){var i=!n;n||(n={});for(var s=-1,o=e.length;++s<o;){var a=e[s],l=r?r(n[a],t[a],a,n,t):void 0;l===void 0&&(l=t[a]),i?lu(n,a,l):Bx(n,a,l)}return n}var Ch=Math.max;function Hx(t,e,n){return e=Ch(e===void 0?t.length-1:e,0),function(){for(var r=arguments,i=-1,s=Ch(r.length-e,0),o=Array(s);++i<s;)o[i]=r[e+i];i=-1;for(var a=Array(e+1);++i<e;)a[i]=r[i];return a[e]=n(o),Ex(t,this,a)}}function zx(t,e){return Mx(Hx(t,e,nm),t+"")}var Wx=9007199254740991;function im(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=Wx}function cu(t){return t!=null&&im(t.length)&&!ou(t)}function jx(t,e,n){if(!vr(n))return!1;var r=typeof e;return(r=="number"?cu(n)&&rm(e,n.length):r=="string"&&e in n)?ha(n[e],t):!1}function Vx(t){return zx(function(e,n){var r=-1,i=n.length,s=i>1?n[i-1]:void 0,o=i>2?n[2]:void 0;for(s=t.length>3&&typeof s=="function"?(i--,s):void 0,o&&jx(n[0],n[1],o)&&(s=i<3?void 0:s,i=1),e=Object(e);++r<i;){var a=n[r];a&&t(e,a,r,s)}return e})}var qx=Object.prototype;function sm(t){var e=t&&t.constructor,n=typeof e=="function"&&e.prototype||qx;return t===n}function Kx(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}var Gx="[object Arguments]";function Eh(t){return hi(t)&&ws(t)==Gx}var om=Object.prototype,Yx=om.hasOwnProperty,Xx=om.propertyIsEnumerable,Jx=Eh(function(){return arguments}())?Eh:function(t){return hi(t)&&Yx.call(t,"callee")&&!Xx.call(t,"callee")},Nl=Jx;function Qx(){return!1}var am=typeof Et=="object"&&Et&&!Et.nodeType&&Et,Th=am&&typeof Tt=="object"&&Tt&&!Tt.nodeType&&Tt,Zx=Th&&Th.exports===am,Ih=Zx?di.Buffer:void 0,eR=Ih?Ih.isBuffer:void 0,tR=eR||Qx,lm=tR,nR="[object Arguments]",rR="[object Array]",iR="[object Boolean]",sR="[object Date]",oR="[object Error]",aR="[object Function]",lR="[object Map]",cR="[object Number]",uR="[object Object]",dR="[object RegExp]",hR="[object Set]",fR="[object String]",pR="[object WeakMap]",gR="[object ArrayBuffer]",mR="[object DataView]",_R="[object Float32Array]",vR="[object Float64Array]",bR="[object Int8Array]",yR="[object Int16Array]",wR="[object Int32Array]",CR="[object Uint8Array]",ER="[object Uint8ClampedArray]",TR="[object Uint16Array]",IR="[object Uint32Array]",ke={};ke[_R]=ke[vR]=ke[bR]=ke[yR]=ke[wR]=ke[CR]=ke[ER]=ke[TR]=ke[IR]=!0;ke[nR]=ke[rR]=ke[gR]=ke[iR]=ke[mR]=ke[sR]=ke[oR]=ke[aR]=ke[lR]=ke[cR]=ke[uR]=ke[dR]=ke[hR]=ke[fR]=ke[pR]=!1;function SR(t){return hi(t)&&im(t.length)&&!!ke[ws(t)]}function xR(t){return function(e){return t(e)}}var cm=typeof Et=="object"&&Et&&!Et.nodeType&&Et,zi=cm&&typeof Tt=="object"&&Tt&&!Tt.nodeType&&Tt,RR=zi&&zi.exports===cm,Ua=RR&&Zg.process,PR=function(){try{var t=zi&&zi.require&&zi.require("util").types;return t||Ua&&Ua.binding&&Ua.binding("util")}catch{}}(),Sh=PR,xh=Sh&&Sh.isTypedArray,AR=xh?xR(xh):SR,um=AR,NR=Object.prototype,kR=NR.hasOwnProperty;function OR(t,e){var n=Ro(t),r=!n&&Nl(t),i=!n&&!r&&lm(t),s=!n&&!r&&!i&&um(t),o=n||r||i||s,a=o?Kx(t.length,String):[],l=a.length;for(var c in t)(e||kR.call(t,c))&&!(o&&(c=="length"||i&&(c=="offset"||c=="parent")||s&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||rm(c,l)))&&a.push(c);return a}function MR(t,e){return function(n){return t(e(n))}}function DR(t){var e=[];if(t!=null)for(var n in Object(t))e.push(n);return e}var LR=Object.prototype,FR=LR.hasOwnProperty;function $R(t){if(!vr(t))return DR(t);var e=sm(t),n=[];for(var r in t)r=="constructor"&&(e||!FR.call(t,r))||n.push(r);return n}function dm(t){return cu(t)?OR(t,!0):$R(t)}var BR=au(Object,"create"),as=BR;function UR(){this.__data__=as?as(null):{},this.size=0}function HR(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var zR="__lodash_hash_undefined__",WR=Object.prototype,jR=WR.hasOwnProperty;function VR(t){var e=this.__data__;if(as){var n=e[t];return n===zR?void 0:n}return jR.call(e,t)?e[t]:void 0}var qR=Object.prototype,KR=qR.hasOwnProperty;function GR(t){var e=this.__data__;return as?e[t]!==void 0:KR.call(e,t)}var YR="__lodash_hash_undefined__";function XR(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=as&&e===void 0?YR:e,this}function pr(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}pr.prototype.clear=UR;pr.prototype.delete=HR;pr.prototype.get=VR;pr.prototype.has=GR;pr.prototype.set=XR;function JR(){this.__data__=[],this.size=0}function fa(t,e){for(var n=t.length;n--;)if(ha(t[n][0],e))return n;return-1}var QR=Array.prototype,ZR=QR.splice;function e1(t){var e=this.__data__,n=fa(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():ZR.call(e,n,1),--this.size,!0}function t1(t){var e=this.__data__,n=fa(e,t);return n<0?void 0:e[n][1]}function n1(t){return fa(this.__data__,t)>-1}function r1(t,e){var n=this.__data__,r=fa(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}function ln(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}ln.prototype.clear=JR;ln.prototype.delete=e1;ln.prototype.get=t1;ln.prototype.has=n1;ln.prototype.set=r1;var i1=au(di,"Map"),hm=i1;function s1(){this.size=0,this.__data__={hash:new pr,map:new(hm||ln),string:new pr}}function o1(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function pa(t,e){var n=t.__data__;return o1(e)?n[typeof e=="string"?"string":"hash"]:n.map}function a1(t){var e=pa(this,t).delete(t);return this.size-=e?1:0,e}function l1(t){return pa(this,t).get(t)}function c1(t){return pa(this,t).has(t)}function u1(t,e){var n=pa(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this}function fi(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}fi.prototype.clear=s1;fi.prototype.delete=a1;fi.prototype.get=l1;fi.prototype.has=c1;fi.prototype.set=u1;function d1(t){return t==null?"":tm(t)}var h1=MR(Object.getPrototypeOf,Object),fm=h1,f1="[object Object]",p1=Function.prototype,g1=Object.prototype,pm=p1.toString,m1=g1.hasOwnProperty,_1=pm.call(Object);function v1(t){if(!hi(t)||ws(t)!=f1)return!1;var e=fm(t);if(e===null)return!0;var n=m1.call(e,"constructor")&&e.constructor;return typeof n=="function"&&n instanceof n&&pm.call(n)==_1}function b1(t,e,n){var r=-1,i=t.length;e<0&&(e=-e>i?0:i+e),n=n>i?i:n,n<0&&(n+=i),i=e>n?0:n-e>>>0,e>>>=0;for(var s=Array(i);++r<i;)s[r]=t[r+e];return s}function y1(t,e,n){var r=t.length;return n=n===void 0?r:n,!e&&n>=r?t:b1(t,e,n)}var w1="\\ud800-\\udfff",C1="\\u0300-\\u036f",E1="\\ufe20-\\ufe2f",T1="\\u20d0-\\u20ff",I1=C1+E1+T1,S1="\\ufe0e\\ufe0f",x1="\\u200d",R1=RegExp("["+x1+w1+I1+S1+"]");function gm(t){return R1.test(t)}function P1(t){return t.split("")}var mm="\\ud800-\\udfff",A1="\\u0300-\\u036f",N1="\\ufe20-\\ufe2f",k1="\\u20d0-\\u20ff",O1=A1+N1+k1,M1="\\ufe0e\\ufe0f",D1="["+mm+"]",kl="["+O1+"]",Ol="\\ud83c[\\udffb-\\udfff]",L1="(?:"+kl+"|"+Ol+")",_m="[^"+mm+"]",vm="(?:\\ud83c[\\udde6-\\uddff]){2}",bm="[\\ud800-\\udbff][\\udc00-\\udfff]",F1="\\u200d",ym=L1+"?",wm="["+M1+"]?",$1="(?:"+F1+"(?:"+[_m,vm,bm].join("|")+")"+wm+ym+")*",B1=wm+ym+$1,U1="(?:"+[_m+kl+"?",kl,vm,bm,D1].join("|")+")",H1=RegExp(Ol+"(?="+Ol+")|"+U1+B1,"g");function z1(t){return t.match(H1)||[]}function W1(t){return gm(t)?z1(t):P1(t)}function j1(t){return function(e){e=d1(e);var n=gm(e)?W1(e):void 0,r=n?n[0]:e.charAt(0),i=n?y1(n,1).join(""):e.slice(1);return r[t]()+i}}var V1=j1("toUpperCase"),q1=V1;function K1(){this.__data__=new ln,this.size=0}function G1(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}function Y1(t){return this.__data__.get(t)}function X1(t){return this.__data__.has(t)}var J1=200;function Q1(t,e){var n=this.__data__;if(n instanceof ln){var r=n.__data__;if(!hm||r.length<J1-1)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new fi(r)}return n.set(t,e),this.size=n.size,this}function pi(t){var e=this.__data__=new ln(t);this.size=e.size}pi.prototype.clear=K1;pi.prototype.delete=G1;pi.prototype.get=Y1;pi.prototype.has=X1;pi.prototype.set=Q1;var Cm=typeof Et=="object"&&Et&&!Et.nodeType&&Et,Rh=Cm&&typeof Tt=="object"&&Tt&&!Tt.nodeType&&Tt,Z1=Rh&&Rh.exports===Cm,Ph=Z1?di.Buffer:void 0,Ah=Ph?Ph.allocUnsafe:void 0;function eP(t,e){if(e)return t.slice();var n=t.length,r=Ah?Ah(n):new t.constructor(n);return t.copy(r),r}var tP=di.Uint8Array,Nh=tP;function nP(t){var e=new t.constructor(t.byteLength);return new Nh(e).set(new Nh(t)),e}function rP(t,e){var n=e?nP(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}function iP(t){return typeof t.constructor=="function"&&!sm(t)?Cx(fm(t)):{}}function sP(t){return function(e,n,r){for(var i=-1,s=Object(e),o=r(e),a=o.length;a--;){var l=o[t?a:++i];if(n(s[l],l,s)===!1)break}return e}}var oP=sP(),aP=oP;function Ml(t,e,n){(n!==void 0&&!ha(t[e],n)||n===void 0&&!(e in t))&&lu(t,e,n)}function lP(t){return hi(t)&&cu(t)}function Dl(t,e){if(!(e==="constructor"&&typeof t[e]=="function")&&e!="__proto__")return t[e]}function cP(t){return Ux(t,dm(t))}function uP(t,e,n,r,i,s,o){var a=Dl(t,n),l=Dl(e,n),c=o.get(l);if(c){Ml(t,n,c);return}var u=s?s(a,l,n+"",t,e,o):void 0,d=u===void 0;if(d){var h=Ro(l),_=!h&&lm(l),g=!h&&!_&&um(l);u=l,h||_||g?Ro(a)?u=a:lP(a)?u=Tx(a):_?(d=!1,u=eP(l,!0)):g?(d=!1,u=rP(l,!0)):u=[]:v1(l)||Nl(l)?(u=a,Nl(a)?u=cP(a):(!vr(a)||ou(a))&&(u=iP(l))):d=!1}d&&(o.set(l,u),i(u,l,r,s,o),o.delete(l)),Ml(t,n,u)}function Em(t,e,n,r,i){t!==e&&aP(e,function(s,o){if(i||(i=new pi),vr(s))uP(t,e,o,n,Em,r,i);else{var a=r?r(Dl(t,o),s,o+"",t,e,i):void 0;a===void 0&&(a=s),Ml(t,o,a)}},dm)}var dP=Vx(function(t,e,n){Em(t,e,n)}),Hs=dP,ga={fontFamily:'v-sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',fontFamilyMono:"v-mono, SFMono-Regular, Menlo, Consolas, Courier, monospace",fontWeight:"400",fontWeightStrong:"500",cubicBezierEaseInOut:"cubic-bezier(.4, 0, .2, 1)",cubicBezierEaseOut:"cubic-bezier(0, 0, .2, 1)",cubicBezierEaseIn:"cubic-bezier(.4, 0, 1, 1)",borderRadius:"3px",borderRadiusSmall:"2px",fontSize:"14px",fontSizeTiny:"12px",fontSizeSmall:"14px",fontSizeMedium:"14px",fontSizeLarge:"15px",fontSizeHuge:"16px",lineHeight:"1.6",heightTiny:"22px",heightSmall:"28px",heightMedium:"34px",heightLarge:"40px",heightHuge:"46px"};const{fontSize:hP,fontFamily:fP,lineHeight:pP}=ga;var Tm=te("body",`
 margin: 0;
 font-size: ${hP};
 font-family: ${fP};
 line-height: ${pP};
 -webkit-text-size-adjust: 100%;
 -webkit-tap-highlight-color: transparent;
`,[te("input",`
 font-family: inherit;
 font-size: inherit;
 `)]);const Cs="n-config-provider",ls="naive-ui-style";function Es(t,e,n,r,i,s){const o=da();if(n){const c=()=>{const u=s==null?void 0:s.value;n.mount({id:u===void 0?e:u+e,head:!0,props:{bPrefix:u?`.${u}-`:void 0},anchorMetaName:ls,ssr:o}),Tm.mount({id:"n-global",head:!0,anchorMetaName:ls,ssr:o})};o?c():zo(c)}const a=qe(Cs,null);return de(()=>{var c;const{theme:{common:u,self:d,peers:h={}}={},themeOverrides:_={},builtinThemeOverrides:g={}}=i,{common:C,peers:b}=_,{common:O=void 0,[t]:{common:H=void 0,self:V=void 0,peers:z={}}={}}=(a==null?void 0:a.mergedThemeRef.value)||{},{common:X=void 0,[t]:me={}}=(a==null?void 0:a.mergedThemeOverridesRef.value)||{},{common:E,peers:S={}}=me,D=Hs({},u||H||O||r.common,X,E,C),q=Hs((c=d||V||r.self)===null||c===void 0?void 0:c(D),g,me,_);return{common:D,self:q,peers:Hs({},r.peers,z,h),peerOverrides:Hs({},S,b)}})}Es.props={theme:Object,themeOverrides:Object,builtinThemeOverrides:Object};const gP="n";function Im(t={},e={defaultBordered:!0}){const n=qe(Cs,null);return{inlineThemeDisabled:n==null?void 0:n.inlineThemeDisabled,mergedRtlRef:n==null?void 0:n.mergedRtlRef,mergedComponentPropsRef:n==null?void 0:n.mergedComponentPropsRef,mergedBreakpointsRef:n==null?void 0:n.mergedBreakpointsRef,mergedBorderedRef:de(()=>{var r,i;const{bordered:s}=t;return s!==void 0?s:(i=(r=n==null?void 0:n.mergedBorderedRef.value)!==null&&r!==void 0?r:e.defaultBordered)!==null&&i!==void 0?i:!0}),mergedClsPrefixRef:de(()=>(n==null?void 0:n.mergedClsPrefixRef.value)||gP),namespaceRef:de(()=>n==null?void 0:n.mergedNamespaceRef.value)}}const mP={name:"en-US",global:{undo:"Undo",redo:"Redo",confirm:"Confirm"},Popconfirm:{positiveText:"Confirm",negativeText:"Cancel"},Cascader:{placeholder:"Please Select",loading:"Loading",loadingRequiredMessage:t=>`Please load all ${t}'s descendants before checking it.`},Time:{dateFormat:"yyyy-MM-dd",dateTimeFormat:"yyyy-MM-dd HH:mm:ss"},DatePicker:{yearFormat:"yyyy",monthFormat:"MMM",dayFormat:"eeeeee",yearTypeFormat:"yyyy",monthTypeFormat:"yyyy-MM",dateFormat:"yyyy-MM-dd",dateTimeFormat:"yyyy-MM-dd HH:mm:ss",quarterFormat:"yyyy-qqq",clear:"Clear",now:"Now",confirm:"Confirm",selectTime:"Select Time",selectDate:"Select Date",datePlaceholder:"Select Date",datetimePlaceholder:"Select Date and Time",monthPlaceholder:"Select Month",yearPlaceholder:"Select Year",quarterPlaceholder:"Select Quarter",startDatePlaceholder:"Start Date",endDatePlaceholder:"End Date",startDatetimePlaceholder:"Start Date and Time",endDatetimePlaceholder:"End Date and Time",startMonthPlaceholder:"Start Month",endMonthPlaceholder:"End Month",monthBeforeYear:!0,firstDayOfWeek:6,today:"Today"},DataTable:{checkTableAll:"Select all in the table",uncheckTableAll:"Unselect all in the table",confirm:"Confirm",clear:"Clear"},Transfer:{sourceTitle:"Source",targetTitle:"Target"},Empty:{description:"No Data"},Select:{placeholder:"Please Select"},TimePicker:{placeholder:"Select Time",positiveText:"OK",negativeText:"Cancel",now:"Now"},Pagination:{goto:"Goto",selectionSuffix:"page"},DynamicTags:{add:"Add"},Log:{loading:"Loading"},Input:{placeholder:"Please Input"},InputNumber:{placeholder:"Please Input"},DynamicInput:{create:"Create"},ThemeEditor:{title:"Theme Editor",clearAllVars:"Clear All Variables",clearSearch:"Clear Search",filterCompName:"Filter Component Name",filterVarName:"Filter Variable Name",import:"Import",export:"Export",restore:"Reset to Default"},Image:{tipPrevious:"Previous picture (\u2190)",tipNext:"Next picture (\u2192)",tipCounterclockwise:"Counterclockwise",tipClockwise:"Clockwise",tipZoomOut:"Zoom out",tipZoomIn:"Zoom in",tipClose:"Close (Esc)"}};var _P=mP;function Ha(t){return function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,r=t.formats[n]||t.formats[t.defaultWidth];return r}}function Si(t){return function(e,n){var r=n||{},i=r.context?String(r.context):"standalone",s;if(i==="formatting"&&t.formattingValues){var o=t.defaultFormattingWidth||t.defaultWidth,a=r.width?String(r.width):o;s=t.formattingValues[a]||t.formattingValues[o]}else{var l=t.defaultWidth,c=r.width?String(r.width):t.defaultWidth;s=t.values[c]||t.values[l]}var u=t.argumentCallback?t.argumentCallback(e):e;return s[u]}}function vP(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.match(t.matchPattern);if(!r)return null;var i=r[0],s=e.match(t.parsePattern);if(!s)return null;var o=t.valueCallback?t.valueCallback(s[0]):s[0];o=n.valueCallback?n.valueCallback(o):o;var a=e.slice(i.length);return{value:o,rest:a}}}function xi(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.width,i=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],s=e.match(i);if(!s)return null;var o=s[0],a=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],l=Array.isArray(a)?yP(a,function(d){return d.test(o)}):bP(a,function(d){return d.test(o)}),c;c=t.valueCallback?t.valueCallback(l):l,c=n.valueCallback?n.valueCallback(c):c;var u=e.slice(o.length);return{value:c,rest:u}}}function bP(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function yP(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}var wP={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},CP=function(t,e,n){var r,i=wP[t];return typeof i=="string"?r=i:e===1?r=i.one:r=i.other.replace("{{count}}",e.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},EP=CP,TP={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},IP={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},SP={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},xP={date:Ha({formats:TP,defaultWidth:"full"}),time:Ha({formats:IP,defaultWidth:"full"}),dateTime:Ha({formats:SP,defaultWidth:"full"})},RP=xP,PP={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},AP=function(t,e,n,r){return PP[t]},NP=AP,kP={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},OP={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},MP={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},DP={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},LP={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},FP={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},$P=function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},BP={ordinalNumber:$P,era:Si({values:kP,defaultWidth:"wide"}),quarter:Si({values:OP,defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:Si({values:MP,defaultWidth:"wide"}),day:Si({values:DP,defaultWidth:"wide"}),dayPeriod:Si({values:LP,defaultWidth:"wide",formattingValues:FP,defaultFormattingWidth:"wide"})},UP=BP,HP=/^(\d+)(th|st|nd|rd)?/i,zP=/\d+/i,WP={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},jP={any:[/^b/i,/^(a|c)/i]},VP={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},qP={any:[/1/i,/2/i,/3/i,/4/i]},KP={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},GP={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},YP={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},XP={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},JP={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},QP={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},ZP={ordinalNumber:vP({matchPattern:HP,parsePattern:zP,valueCallback:function(t){return parseInt(t,10)}}),era:xi({matchPatterns:WP,defaultMatchWidth:"wide",parsePatterns:jP,defaultParseWidth:"any"}),quarter:xi({matchPatterns:VP,defaultMatchWidth:"wide",parsePatterns:qP,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:xi({matchPatterns:KP,defaultMatchWidth:"wide",parsePatterns:GP,defaultParseWidth:"any"}),day:xi({matchPatterns:YP,defaultMatchWidth:"wide",parsePatterns:XP,defaultParseWidth:"any"}),dayPeriod:xi({matchPatterns:JP,defaultMatchWidth:"any",parsePatterns:QP,defaultParseWidth:"any"})},eA=ZP,tA={code:"en-US",formatDistance:EP,formatLong:RP,formatRelative:NP,localize:UP,match:eA,options:{weekStartsOn:0,firstWeekContainsDate:1}},nA=tA;const rA={name:"en-US",locale:nA};var iA=rA;function sA(t){const{mergedLocaleRef:e,mergedDateLocaleRef:n}=qe(Cs,null)||{},r=de(()=>{var s,o;return(o=(s=e==null?void 0:e.value)===null||s===void 0?void 0:s[t])!==null&&o!==void 0?o:_P[t]});return{dateLocaleRef:de(()=>{var s;return(s=n==null?void 0:n.value)!==null&&s!==void 0?s:iA}),localeRef:r}}function uu(t,e,n){if(!e)return;const r=da(),i=()=>{const s=n==null?void 0:n.value;e.mount({id:s===void 0?t:s+t,head:!0,anchorMetaName:ls,props:{bPrefix:s?`.${s}-`:void 0},ssr:r}),Tm.mount({id:"n-global",head:!0,anchorMetaName:ls,ssr:r})};r?i():zo(i)}function Sm(t,e,n,r){var i;n||LI("useThemeClass","cssVarsRef is not passed");const s=(i=qe(Cs,null))===null||i===void 0?void 0:i.mergedThemeHashRef,o=he(""),a=da();let l;const c=`__${t}`,u=()=>{let d=c;const h=e?e.value:void 0,_=s==null?void 0:s.value;_&&(d+="-"+_),h&&(d+="-"+h);const{themeOverrides:g,builtinThemeOverrides:C}=r;g&&(d+="-"+Rl(JSON.stringify(g))),C&&(d+="-"+Rl(JSON.stringify(C))),o.value=d,l=()=>{const b=n.value;let O="";for(const H in b)O+=`${H}: ${b[H]};`;te(`.${d}`,O).mount({id:d,ssr:a}),l=void 0}};return Ur(()=>{u()}),{themeClass:o,onRender:()=>{l==null||l()}}}function oA(t,e){return Be({name:q1(t),setup(){var n;const r=(n=qe(Cs,null))===null||n===void 0?void 0:n.mergedIconsRef;return()=>{var i;const s=(i=r==null?void 0:r.value)===null||i===void 0?void 0:i[t];return s?s():e}}})}var aA=Be({name:"Eye",render(){return k("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},k("path",{d:"M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}),k("circle",{cx:"256",cy:"256",r:"80",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"}))}}),lA=Be({name:"EyeOff",render(){return k("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},k("path",{d:"M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448z",fill:"currentColor"}),k("path",{d:"M255.66 384c-41.49 0-81.5-12.28-118.92-36.5c-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 0 0 .14-2.94L93.5 161.38a2 2 0 0 0-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0 0 75.8-12.58a2 2 0 0 0 .77-3.31l-21.58-21.58a4 4 0 0 0-3.83-1a204.8 204.8 0 0 1-51.16 6.47z",fill:"currentColor"}),k("path",{d:"M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 0 0-74.89 12.83a2 2 0 0 0-.75 3.31l21.55 21.55a4 4 0 0 0 3.88 1a192.82 192.82 0 0 1 50.21-6.69c40.69 0 80.58 12.43 118.55 37c34.71 22.4 65.74 53.88 89.76 91a.13.13 0 0 1 0 .16a310.72 310.72 0 0 1-64.12 72.73a2 2 0 0 0-.15 2.95l19.9 19.89a2 2 0 0 0 2.7.13a343.49 343.49 0 0 0 68.64-78.48a32.2 32.2 0 0 0-.1-34.78z",fill:"currentColor"}),k("path",{d:"M256 160a95.88 95.88 0 0 0-21.37 2.4a2 2 0 0 0-1 3.38l112.59 112.56a2 2 0 0 0 3.38-1A96 96 0 0 0 256 160z",fill:"currentColor"}),k("path",{d:"M165.78 233.66a2 2 0 0 0-3.38 1a96 96 0 0 0 115 115a2 2 0 0 0 1-3.38z",fill:"currentColor"}))}}),cA=Be({name:"ChevronDown",render(){return k("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},k("path",{d:"M3.14645 5.64645C3.34171 5.45118 3.65829 5.45118 3.85355 5.64645L8 9.79289L12.1464 5.64645C12.3417 5.45118 12.6583 5.45118 12.8536 5.64645C13.0488 5.84171 13.0488 6.15829 12.8536 6.35355L8.35355 10.8536C8.15829 11.0488 7.84171 11.0488 7.64645 10.8536L3.14645 6.35355C2.95118 6.15829 2.95118 5.84171 3.14645 5.64645Z",fill:"currentColor"}))}}),uA=oA("clear",k("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},k("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},k("g",{fill:"currentColor","fill-rule":"nonzero"},k("path",{d:"M8,2 C11.3137085,2 14,4.6862915 14,8 C14,11.3137085 11.3137085,14 8,14 C4.6862915,14 2,11.3137085 2,8 C2,4.6862915 4.6862915,2 8,2 Z M6.5343055,5.83859116 C6.33943736,5.70359511 6.07001296,5.72288026 5.89644661,5.89644661 L5.89644661,5.89644661 L5.83859116,5.9656945 C5.70359511,6.16056264 5.72288026,6.42998704 5.89644661,6.60355339 L5.89644661,6.60355339 L7.293,8 L5.89644661,9.39644661 L5.83859116,9.4656945 C5.70359511,9.66056264 5.72288026,9.92998704 5.89644661,10.1035534 L5.89644661,10.1035534 L5.9656945,10.1614088 C6.16056264,10.2964049 6.42998704,10.2771197 6.60355339,10.1035534 L6.60355339,10.1035534 L8,8.707 L9.39644661,10.1035534 L9.4656945,10.1614088 C9.66056264,10.2964049 9.92998704,10.2771197 10.1035534,10.1035534 L10.1035534,10.1035534 L10.1614088,10.0343055 C10.2964049,9.83943736 10.2771197,9.57001296 10.1035534,9.39644661 L10.1035534,9.39644661 L8.707,8 L10.1035534,6.60355339 L10.1614088,6.5343055 C10.2964049,6.33943736 10.2771197,6.07001296 10.1035534,5.89644661 L10.1035534,5.89644661 L10.0343055,5.83859116 C9.83943736,5.70359511 9.57001296,5.72288026 9.39644661,5.89644661 L9.39644661,5.89644661 L8,7.293 L6.60355339,5.89644661 Z"}))))),xm=Be({name:"BaseIconSwitchTransition",setup(t,{slots:e}){const n=hS();return()=>k(Xi,{name:"icon-switch-transition",appear:n.value},e)}}),dA=Ne("base-icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[te("svg",{height:"1em",width:"1em"})]),du=Be({name:"BaseIcon",props:{role:String,ariaLabel:String,ariaDisabled:{type:Boolean,default:void 0},ariaHidden:{type:Boolean,default:void 0},clsPrefix:{type:String,required:!0},onClick:Function,onMousedown:Function,onMouseup:Function},setup(t){uu("-base-icon",dA,Do(t,"clsPrefix"))},render(){return k("i",{class:`${this.clsPrefix}-base-icon`,onClick:this.onClick,onMousedown:this.onMousedown,onMouseup:this.onMouseup,role:this.role,"aria-label":this.ariaLabel,"aria-hidden":this.ariaHidden,"aria-disabled":this.ariaDisabled},this.$slots)}});const{cubicBezierEaseInOut:hA}=ga;function Ll({originalTransform:t="",left:e=0,top:n=0,transition:r=`all .3s ${hA} !important`}={}){return[te("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to",{transform:t+" scale(0.75)",left:e,top:n,opacity:0}),te("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from",{transform:`scale(1) ${t}`,left:e,top:n,opacity:1}),te("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active",{transformOrigin:"center",position:"absolute",left:e,top:n,transition:r})]}var fA=te([te("@keyframes loading-container-rotate",`
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
 `),Ne("base-loading",`
 position: relative;
 line-height: 0;
 width: 1em;
 height: 1em;
 `,[j("transition-wrapper",`
 position: absolute;
 width: 100%;
 height: 100%;
 `,[Ll()]),j("container",`
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
 `,[j("svg",`
 stroke: var(--n-text-color);
 fill: transparent;
 position: absolute;
 height: 100%;
 overflow: hidden;
 `),j("container-layer",`
 position: absolute;
 width: 100%;
 height: 100%;
 animation: loading-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 `,[j("container-layer-left",`
 display: inline-flex;
 position: relative;
 width: 50%;
 height: 100%;
 overflow: hidden;
 `,[j("svg",`
 animation: loading-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 width: 200%;
 `)]),j("container-layer-patch",`
 position: absolute;
 top: 0;
 left: 47.5%;
 box-sizing: border-box;
 width: 5%;
 height: 100%;
 overflow: hidden;
 `,[j("svg",`
 left: -900%;
 width: 2000%;
 transform: rotate(180deg);
 `)]),j("container-layer-right",`
 display: inline-flex;
 position: relative;
 width: 50%;
 height: 100%;
 overflow: hidden;
 `,[j("svg",`
 animation: loading-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 left: -100%;
 width: 200%;
 `)])])]),j("placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[Ll({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})])])]),pA=Be({name:"BaseLoading",props:{clsPrefix:{type:String,required:!0},scale:{type:Number,default:1},radius:{type:Number,default:100},strokeWidth:{type:Number,default:28},stroke:{type:String,default:void 0},show:{type:Boolean,default:!0}},setup(t){uu("-base-loading",fA,Do(t,"clsPrefix"))},render(){const{clsPrefix:t,radius:e,strokeWidth:n,stroke:r,scale:i}=this,s=e/i;return k("div",{class:`${t}-base-loading`,role:"img","aria-label":"loading"},k(xm,null,{default:()=>this.show?k("div",{key:"icon",class:`${t}-base-loading__transition-wrapper`},k("div",{class:`${t}-base-loading__container`},k("div",{class:`${t}-base-loading__container-layer`},k("div",{class:`${t}-base-loading__container-layer-left`},k("svg",{class:`${t}-base-loading__svg`,viewBox:`0 0 ${2*s} ${2*s}`,xmlns:"http://www.w3.org/2000/svg",style:{color:r}},k("circle",{fill:"none",stroke:"currentColor","stroke-width":n,"stroke-linecap":"round",cx:s,cy:s,r:e-n/2,"stroke-dasharray":4.91*e,"stroke-dashoffset":2.46*e}))),k("div",{class:`${t}-base-loading__container-layer-patch`},k("svg",{class:`${t}-base-loading__svg`,viewBox:`0 0 ${2*s} ${2*s}`,xmlns:"http://www.w3.org/2000/svg",style:{color:r}},k("circle",{fill:"none",stroke:"currentColor","stroke-width":n,"stroke-linecap":"round",cx:s,cy:s,r:e-n/2,"stroke-dasharray":4.91*e,"stroke-dashoffset":2.46*e}))),k("div",{class:`${t}-base-loading__container-layer-right`},k("svg",{class:`${t}-base-loading__svg`,viewBox:`0 0 ${2*s} ${2*s}`,xmlns:"http://www.w3.org/2000/svg",style:{color:r}},k("circle",{fill:"none",stroke:"currentColor","stroke-width":n,"stroke-linecap":"round",cx:s,cy:s,r:e-n/2,"stroke-dasharray":4.91*e,"stroke-dashoffset":2.46*e})))))):k("div",{key:"placeholder",class:`${t}-base-loading__placeholder`},this.$slots)}))}});const W={neutralBase:"#FFF",neutralInvertBase:"#000",neutralTextBase:"#000",neutralPopover:"#fff",neutralCard:"#fff",neutralModal:"#fff",neutralBody:"#fff",alpha1:"0.82",alpha2:"0.72",alpha3:"0.38",alpha4:"0.24",alpha5:"0.18",alphaClose:"0.52",alphaDisabled:"0.5",alphaDisabledInput:"0.02",alphaPending:"0.05",alphaTablePending:"0.02",alphaPressed:"0.07",alphaAvatar:"0.2",alphaRail:"0.14",alphaProgressRail:".08",alphaBorder:"0.12",alphaDivider:"0.06",alphaInput:"0",alphaAction:"0.02",alphaTab:"0.04",alphaScrollbar:"0.25",alphaScrollbarHover:"0.4",alphaCode:"0.05",alphaTag:"0.02",primaryHover:"#36ad6a",primaryDefault:"#18a058",primaryActive:"#0c7a43",primarySuppl:"#36ad6a",infoHover:"#4098fc",infoDefault:"#2080f0",infoActive:"#1060c9",infoSuppl:"#4098fc",errorHover:"#de576d",errorDefault:"#d03050",errorActive:"#ab1f3f",errorSuppl:"#de576d",warningHover:"#fcb040",warningDefault:"#f0a020",warningActive:"#c97c10",warningSuppl:"#fcb040",successHover:"#36ad6a",successDefault:"#18a058",successActive:"#0c7a43",successSuppl:"#36ad6a"},gA=fr(W.neutralBase),Rm=fr(W.neutralInvertBase),mA="rgba("+Rm.slice(0,3).join(", ")+", ";function kh(t){return mA+String(t)+")"}function nt(t){const e=Array.from(Rm);return e[3]=Number(t),MI(gA,e)}const _A=Object.assign(Object.assign({name:"common"},ga),{baseColor:W.neutralBase,primaryColor:W.primaryDefault,primaryColorHover:W.primaryHover,primaryColorPressed:W.primaryActive,primaryColorSuppl:W.primarySuppl,infoColor:W.infoDefault,infoColorHover:W.infoHover,infoColorPressed:W.infoActive,infoColorSuppl:W.infoSuppl,successColor:W.successDefault,successColorHover:W.successHover,successColorPressed:W.successActive,successColorSuppl:W.successSuppl,warningColor:W.warningDefault,warningColorHover:W.warningHover,warningColorPressed:W.warningActive,warningColorSuppl:W.warningSuppl,errorColor:W.errorDefault,errorColorHover:W.errorHover,errorColorPressed:W.errorActive,errorColorSuppl:W.errorSuppl,textColorBase:W.neutralTextBase,textColor1:"rgb(31, 34, 37)",textColor2:"rgb(51, 54, 57)",textColor3:"rgb(118, 124, 130)",textColorDisabled:nt(W.alpha4),placeholderColor:nt(W.alpha4),placeholderColorDisabled:nt(W.alpha5),iconColor:nt(W.alpha4),iconColorHover:Ms(nt(W.alpha4),{lightness:.75}),iconColorPressed:Ms(nt(W.alpha4),{lightness:.9}),iconColorDisabled:nt(W.alpha5),opacity1:W.alpha1,opacity2:W.alpha2,opacity3:W.alpha3,opacity4:W.alpha4,opacity5:W.alpha5,dividerColor:"rgb(239, 239, 245)",borderColor:"rgb(224, 224, 230)",closeColor:nt(Number(W.alphaClose)),closeColorHover:nt(Number(W.alphaClose)*1.25),closeColorPressed:nt(Number(W.alphaClose)*.8),closeColorDisabled:nt(W.alpha4),clearColor:nt(W.alpha4),clearColorHover:Ms(nt(W.alpha4),{lightness:.75}),clearColorPressed:Ms(nt(W.alpha4),{lightness:.9}),scrollbarColor:kh(W.alphaScrollbar),scrollbarColorHover:kh(W.alphaScrollbarHover),scrollbarWidth:"5px",scrollbarHeight:"5px",scrollbarBorderRadius:"5px",progressRailColor:nt(W.alphaProgressRail),railColor:"rgb(219, 219, 223)",popoverColor:W.neutralPopover,tableColor:W.neutralCard,cardColor:W.neutralCard,modalColor:W.neutralModal,bodyColor:W.neutralBody,tagColor:"rgb(250, 250, 252)",avatarColor:nt(W.alphaAvatar),invertedColor:"rgb(0, 20, 40)",inputColor:nt(W.alphaInput),codeColor:"rgb(244, 244, 248)",tabColor:"rgb(247, 247, 250)",actionColor:"rgb(250, 250, 252)",tableHeaderColor:"rgb(250, 250, 252)",hoverColor:"rgb(243, 243, 245)",tableColorHover:"rgba(0, 0, 100, 0.03)",tableColorStriped:"rgba(0, 0, 100, 0.02)",pressedColor:"rgb(237, 237, 239)",opacityDisabled:W.alphaDisabled,inputColorDisabled:"rgb(250, 250, 252)",buttonColor2:"rgba(46, 51, 56, .05)",buttonColor2Hover:"rgba(46, 51, 56, .09)",buttonColor2Pressed:"rgba(46, 51, 56, .13)",boxShadow1:"0 1px 2px -2px rgba(0, 0, 0, .08), 0 3px 6px 0 rgba(0, 0, 0, .06), 0 5px 12px 4px rgba(0, 0, 0, .04)",boxShadow2:"0 3px 6px -4px rgba(0, 0, 0, .12), 0 6px 16px 0 rgba(0, 0, 0, .08), 0 9px 28px 8px rgba(0, 0, 0, .05)",boxShadow3:"0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)"});var Pm=_A;const vA=t=>{const{scrollbarColor:e,scrollbarColorHover:n}=t;return{color:e,colorHover:n}},bA={name:"Scrollbar",common:Pm,self:vA};var yA=bA;const{cubicBezierEaseInOut:Oh}=ga;function wA({name:t="fade-in",enterDuration:e="0.2s",leaveDuration:n="0.2s",enterCubicBezier:r=Oh,leaveCubicBezier:i=Oh}={}){return[te(`&.${t}-transition-enter-active`,{transition:`all ${e} ${r}!important`}),te(`&.${t}-transition-leave-active`,{transition:`all ${n} ${i}!important`}),te(`&.${t}-transition-enter-from, &.${t}-transition-leave-to`,{opacity:0}),te(`&.${t}-transition-leave-from, &.${t}-transition-enter-to`,{opacity:1})]}var CA=Ne("scrollbar",`
 overflow: hidden;
 position: relative;
 z-index: auto;
 height: 100%;
 width: 100%;
`,[te(">",[Ne("scrollbar-container",`
 width: 100%;
 overflow: scroll;
 height: 100%;
 max-height: inherit;
 scrollbar-width: none;
 `,[te("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `),te(">",[Ne("scrollbar-content",`
 box-sizing: border-box;
 min-width: 100%;
 `)])]),Ne("scrollbar-rail",`
 position: absolute;
 pointer-events: none;
 user-select: none;
 `,[yt("horizontal",`
 left: 2px;
 right: 2px;
 bottom: 4px;
 height: var(--n-scrollbar-height);
 `,[te(">",[j("scrollbar",`
 height: var(--n-scrollbar-height);
 border-radius: var(--n-scrollbar-border-radius);
 right: 0;
 `)])]),yt("vertical",`
 right: 4px;
 top: 2px;
 bottom: 2px;
 width: var(--n-scrollbar-width);
 `,[te(">",[j("scrollbar",`
 width: var(--n-scrollbar-width);
 border-radius: var(--n-scrollbar-border-radius);
 bottom: 0;
 `)])]),yt("disabled",[te(">",[j("scrollbar",{pointerEvents:"none"})])]),te(">",[j("scrollbar",`
 position: absolute;
 cursor: pointer;
 pointer-events: all;
 background-color: var(--n-scrollbar-color);
 transition: background-color .2s var(--n-scrollbar-bezier);
 `,[wA(),te("&:hover",{backgroundColor:"var(--n-scrollbar-color-hover)"})])])])])]);const EA=Object.assign(Object.assign({},Es.props),{size:{type:Number,default:5},duration:{type:Number,default:0},scrollable:{type:Boolean,default:!0},xScrollable:Boolean,useUnifiedContainer:Boolean,triggerDisplayManually:Boolean,container:Function,content:Function,containerClass:String,containerStyle:[String,Object],contentClass:String,contentStyle:[String,Object],horizontalRailStyle:[String,Object],verticalRailStyle:[String,Object],onScroll:Function,onWheel:Function,onResize:Function,internalOnUpdateScrollLeft:Function}),TA=Be({name:"Scrollbar",props:EA,inheritAttrs:!1,setup(t){const{mergedClsPrefixRef:e,inlineThemeDisabled:n}=Im(t),r=he(null),i=he(null),s=he(null),o=he(null),a=he(null),l=he(null),c=he(null),u=he(null),d=he(null),h=he(null),_=he(null),g=he(0),C=he(0),b=he(!1),O=he(!1);let H=!1,V=!1,z,X,me=0,E=0,S=0,D=0;const q=pS(),Z=de(()=>{const{value:I}=u,{value:F}=l,{value:G}=h;return I===null||F===null||G===null?0:Math.min(I,G*I/F+t.size*1.5)}),L=de(()=>`${Z.value}px`),re=de(()=>{const{value:I}=d,{value:F}=c,{value:G}=_;return I===null||F===null||G===null?0:G*I/F+t.size*1.5}),ye=de(()=>`${re.value}px`),Se=de(()=>{const{value:I}=u,{value:F}=g,{value:G}=l,{value:ge}=h;if(I===null||G===null||ge===null)return 0;{const Oe=G-I;return Oe?F/Oe*(ge-Z.value):0}}),ce=de(()=>`${Se.value}px`),fe=de(()=>{const{value:I}=d,{value:F}=C,{value:G}=c,{value:ge}=_;if(I===null||G===null||ge===null)return 0;{const Oe=G-I;return Oe?F/Oe*(ge-re.value):0}}),ie=de(()=>`${fe.value}px`),Ue=de(()=>{const{value:I}=u,{value:F}=l;return I!==null&&F!==null&&F>I}),mt=de(()=>{const{value:I}=d,{value:F}=c;return I!==null&&F!==null&&F>I}),Me=de(()=>{const{container:I}=t;return I?I():i.value}),ct=de(()=>{const{content:I}=t;return I?I():s.value}),ut=M,br=I=>{const{onResize:F}=t;F&&F(I),M()},gi=(I,F)=>{if(!t.scrollable)return;if(typeof I=="number"){Ke(I,F!=null?F:0,0,!1,"auto");return}const{left:G,top:ge,index:Oe,elSize:be,position:De,behavior:Ee,el:Nt,debounce:un=!0}=I;(G!==void 0||ge!==void 0)&&Ke(G!=null?G:0,ge!=null?ge:0,0,!1,Ee),Nt!==void 0?Ke(0,Nt.offsetTop,Nt.offsetHeight,un,Ee):Oe!==void 0&&be!==void 0?Ke(0,Oe*be,be,un,Ee):De==="bottom"?Ke(0,Number.MAX_SAFE_INTEGER,0,!1,Ee):De==="top"&&Ke(0,0,0,!1,Ee)},mi=(I,F)=>{if(!t.scrollable)return;const{value:G}=Me;!G||(typeof I=="object"?G.scrollBy(I):G.scrollBy(I,F||0))};function Ke(I,F,G,ge,Oe){const{value:be}=Me;if(!!be){if(ge){const{scrollTop:De,offsetHeight:Ee}=be;if(F>De){F+G<=De+Ee||be.scrollTo({left:I,top:F+G-Ee,behavior:Oe});return}}be.scrollTo({left:I,top:F,behavior:Oe})}}function cn(){f(),p(),M()}function yr(){xt()}function xt(){On(),Mn()}function On(){X!==void 0&&window.clearTimeout(X),X=window.setTimeout(()=>{O.value=!1},t.duration)}function Mn(){z!==void 0&&window.clearTimeout(z),z=window.setTimeout(()=>{b.value=!1},t.duration)}function f(){z!==void 0&&window.clearTimeout(z),b.value=!0}function p(){X!==void 0&&window.clearTimeout(X),O.value=!0}function v(I){const{onScroll:F}=t;F&&F(I),y()}function y(){const{value:I}=Me;I&&(g.value=I.scrollTop,C.value=I.scrollLeft)}function w(){const{value:I}=ct;I&&(l.value=I.offsetHeight,c.value=I.offsetWidth);const{value:F}=Me;F&&(u.value=F.offsetHeight,d.value=F.offsetWidth);const{value:G}=a,{value:ge}=o;G&&(_.value=G.offsetWidth),ge&&(h.value=ge.offsetHeight)}function A(){const{value:I}=Me;I&&(g.value=I.scrollTop,C.value=I.scrollLeft,u.value=I.offsetHeight,d.value=I.offsetWidth,l.value=I.scrollHeight,c.value=I.scrollWidth);const{value:F}=a,{value:G}=o;F&&(_.value=F.offsetWidth),G&&(h.value=G.offsetHeight)}function M(){!t.scrollable||(t.useUnifiedContainer?A():(w(),y()))}function R(I){var F;return!(!((F=r.value)===null||F===void 0)&&F.contains(I.target))}function N(I){I.preventDefault(),I.stopPropagation(),V=!0,Jn("mousemove",window,T,!0),Jn("mouseup",window,U,!0),E=C.value,S=I.clientX}function T(I){if(!V)return;z!==void 0&&window.clearTimeout(z),X!==void 0&&window.clearTimeout(X);const{value:F}=d,{value:G}=c,{value:ge}=re;if(F===null||G===null)return;const be=(I.clientX-S)*(G-F)/(F-ge),De=G-F;let Ee=E+be;Ee=Math.min(De,Ee),Ee=Math.max(Ee,0);const{value:Nt}=Me;if(Nt){Nt.scrollLeft=Ee;const{internalOnUpdateScrollLeft:un}=t;un&&un(Ee)}}function U(I){I.preventDefault(),I.stopPropagation(),Xt("mousemove",window,T,!0),Xt("mouseup",window,U,!0),V=!1,M(),R(I)&&xt()}function $(I){I.preventDefault(),I.stopPropagation(),H=!0,Jn("mousemove",window,B,!0),Jn("mouseup",window,K,!0),me=g.value,D=I.clientY}function B(I){if(!H)return;z!==void 0&&window.clearTimeout(z),X!==void 0&&window.clearTimeout(X);const{value:F}=u,{value:G}=l,{value:ge}=Z;if(F===null||G===null)return;const be=(I.clientY-D)*(G-F)/(F-ge),De=G-F;let Ee=me+be;Ee=Math.min(De,Ee),Ee=Math.max(Ee,0);const{value:Nt}=Me;Nt&&(Nt.scrollTop=Ee)}function K(I){I.preventDefault(),I.stopPropagation(),Xt("mousemove",window,B,!0),Xt("mouseup",window,K,!0),H=!1,M(),R(I)&&xt()}Ur(()=>{const{value:I}=mt,{value:F}=Ue,{value:G}=e,{value:ge}=a,{value:Oe}=o;ge&&(I?ge.classList.remove(`${G}-scrollbar-rail--disabled`):ge.classList.add(`${G}-scrollbar-rail--disabled`)),Oe&&(F?Oe.classList.remove(`${G}-scrollbar-rail--disabled`):Oe.classList.add(`${G}-scrollbar-rail--disabled`))}),ni(()=>{t.container||M()}),Wo(()=>{z!==void 0&&window.clearTimeout(z),X!==void 0&&window.clearTimeout(X),Xt("mousemove",window,B,!0),Xt("mouseup",window,K,!0)});const ae=Es("Scrollbar","-scrollbar",CA,yA,t,e),we=de(()=>{const{common:{cubicBezierEaseInOut:I,scrollbarBorderRadius:F,scrollbarHeight:G,scrollbarWidth:ge},self:{color:Oe,colorHover:be}}=ae.value;return{"--n-scrollbar-bezier":I,"--n-scrollbar-color":Oe,"--n-scrollbar-color-hover":be,"--n-scrollbar-border-radius":F,"--n-scrollbar-width":ge,"--n-scrollbar-height":G}}),ue=n?Sm("scrollbar",void 0,we,t):void 0;return Object.assign(Object.assign({},{scrollTo:gi,scrollBy:mi,sync:M,syncUnifiedContainer:A,handleMouseEnterWrapper:cn,handleMouseLeaveWrapper:yr}),{mergedClsPrefix:e,containerScrollTop:g,wrapperRef:r,containerRef:i,contentRef:s,yRailRef:o,xRailRef:a,needYBar:Ue,needXBar:mt,yBarSizePx:L,xBarSizePx:ye,yBarTopPx:ce,xBarLeftPx:ie,isShowXBar:b,isShowYBar:O,isIos:q,handleScroll:v,handleContentResize:ut,handleContainerResize:br,handleYScrollMouseDown:$,handleXScrollMouseDown:N,cssVars:n?void 0:we,themeClass:ue==null?void 0:ue.themeClass,onRender:ue==null?void 0:ue.onRender})},render(){var t;const{$slots:e,mergedClsPrefix:n,triggerDisplayManually:r}=this;if(!this.scrollable)return(t=e.default)===null||t===void 0?void 0:t.call(e);const i=()=>{var s,o;return(s=this.onRender)===null||s===void 0||s.call(this),k("div",Af(this.$attrs,{role:"none",ref:"wrapperRef",class:[`${n}-scrollbar`,this.themeClass],style:this.cssVars,onMouseenter:r?void 0:this.handleMouseEnterWrapper,onMouseleave:r?void 0:this.handleMouseLeaveWrapper}),[this.container?(o=e.default)===null||o===void 0?void 0:o.call(e):k("div",{role:"none",ref:"containerRef",class:[`${n}-scrollbar-container`,this.containerClass],style:this.containerStyle,onScroll:this.handleScroll,onWheel:this.onWheel},k(Al,{onResize:this.handleContentResize},{default:()=>k("div",{ref:"contentRef",role:"none",style:[{width:this.xScrollable?"fit-content":null},this.contentStyle],class:[`${n}-scrollbar-content`,this.contentClass]},e)})),k("div",{ref:"yRailRef",class:`${n}-scrollbar-rail ${n}-scrollbar-rail--vertical`,style:this.horizontalRailStyle,"aria-hidden":!0},k(Xi,{name:"fade-in-transition"},{default:()=>this.needYBar&&this.isShowYBar&&!this.isIos?k("div",{class:`${n}-scrollbar-rail__scrollbar`,style:{height:this.yBarSizePx,top:this.yBarTopPx},onMousedown:this.handleYScrollMouseDown}):null})),k("div",{ref:"xRailRef",class:`${n}-scrollbar-rail ${n}-scrollbar-rail--horizontal`,style:this.verticalRailStyle,"aria-hidden":!0},k(Xi,{name:"fade-in-transition"},{default:()=>this.needXBar&&this.isShowXBar&&!this.isIos?k("div",{class:`${n}-scrollbar-rail__scrollbar`,style:{width:this.xBarSizePx,left:this.xBarLeftPx},onMousedown:this.handleXScrollMouseDown}):null}))])};return this.container?i():k(Al,{onResize:this.handleContainerResize},{default:i})}});var IA=TA;function SA(t,e,n){if(!e)return;const r=da(),i=de(()=>{const{value:o}=e;if(!o)return;const a=o[t];if(!!a)return a}),s=()=>{Ur(()=>{const{value:o}=n,a=`${o}${t}Rtl`;if(eS(a,r))return;const{value:l}=i;!l||l.style.mount({id:a,head:!0,anchorMetaName:ls,props:{bPrefix:o?`.${o}-`:void 0},ssr:r})})};return r?s():zo(s),i}var xA=Ne("base-clear",`
 flex-shrink: 0;
 height: 1em;
 width: 1em;
 position: relative;
`,[te(">",[j("clear",`
 font-size: var(--n-clear-size);
 cursor: pointer;
 color: var(--n-clear-color);
 transition: color .3s var(--n-bezier);
 `,[te("&:hover",`
 color: var(--n-clear-color-hover)!important;
 `),te("&:active",`
 color: var(--n-clear-color-pressed)!important;
 `)]),j("placeholder",`
 display: flex;
 `),j("clear, placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[Ll({originalTransform:"translateX(-50%) translateY(-50%)",left:"50%",top:"50%"})])])]),Fl=Be({name:"BaseClear",props:{clsPrefix:{type:String,required:!0},show:Boolean,onClear:Function},setup(t){return uu("-base-clear",xA,Do(t,"clsPrefix")),{handleMouseDown(e){e.preventDefault()}}},render(){const{clsPrefix:t}=this;return k("div",{class:`${t}-base-clear`},k(xm,null,{default:()=>{var e,n;return this.show?k(du,{clsPrefix:t,key:"dismiss",class:`${t}-base-clear__clear`,onClick:this.onClear,onMousedown:this.handleMouseDown,"data-clear":!0},{default:()=>k(uA,null)}):k("div",{key:"icon",class:`${t}-base-clear__placeholder`},(n=(e=this.$slots).default)===null||n===void 0?void 0:n.call(e))}}))}}),RA=Be({name:"InternalSelectionSuffix",props:{clsPrefix:{type:String,required:!0},showArrow:{type:Boolean,default:void 0},showClear:{type:Boolean,default:void 0},loading:{type:Boolean,default:!1},onClear:Function},setup(t,{slots:e}){return()=>{const{clsPrefix:n}=t;return k(pA,{clsPrefix:n,class:`${n}-base-suffix`,strokeWidth:24,scale:.85,show:t.loading},{default:()=>t.showArrow?k(Fl,{clsPrefix:n,show:t.showClear,onClear:t.onClear},{default:()=>k(du,{clsPrefix:n,class:`${n}-base-suffix__arrow`},{default:()=>Xs(e.default,()=>[k(cA,null)])})}):null})}}}),PA={paddingTiny:"0 8px",paddingSmall:"0 10px",paddingMedium:"0 12px",paddingLarge:"0 14px",clearSize:"16px"};const AA=t=>{const{textColor2:e,textColor3:n,textColorDisabled:r,primaryColor:i,primaryColorHover:s,inputColor:o,inputColorDisabled:a,borderColor:l,warningColor:c,warningColorHover:u,errorColor:d,errorColorHover:h,borderRadius:_,lineHeight:g,fontSizeTiny:C,fontSizeSmall:b,fontSizeMedium:O,fontSizeLarge:H,heightTiny:V,heightSmall:z,heightMedium:X,heightLarge:me,actionColor:E,clearColor:S,clearColorHover:D,clearColorPressed:q,placeholderColor:Z,placeholderColorDisabled:L,iconColor:re,iconColorDisabled:ye,iconColorHover:Se,iconColorPressed:ce}=t;return Object.assign(Object.assign({},PA),{countTextColor:n,heightTiny:V,heightSmall:z,heightMedium:X,heightLarge:me,fontSizeTiny:C,fontSizeSmall:b,fontSizeMedium:O,fontSizeLarge:H,lineHeight:g,lineHeightTextarea:g,borderRadius:_,iconSize:"16px",groupLabelColor:E,groupLabelTextColor:e,textColor:e,textColorDisabled:r,textDecorationColor:e,caretColor:i,placeholderColor:Z,placeholderColorDisabled:L,color:o,colorDisabled:a,colorFocus:o,groupLabelBorder:`1px solid ${l}`,border:`1px solid ${l}`,borderHover:`1px solid ${s}`,borderDisabled:`1px solid ${l}`,borderFocus:`1px solid ${s}`,boxShadowFocus:`0 0 0 2px ${La(i,{alpha:.2})}`,loadingColor:i,loadingColorWarning:c,borderWarning:`1px solid ${c}`,borderHoverWarning:`1px solid ${u}`,colorFocusWarning:o,borderFocusWarning:`1px solid ${u}`,boxShadowFocusWarning:`0 0 0 2px ${La(c,{alpha:.2})}`,caretColorWarning:c,loadingColorError:d,borderError:`1px solid ${d}`,borderHoverError:`1px solid ${h}`,colorFocusError:o,borderFocusError:`1px solid ${h}`,boxShadowFocusError:`0 0 0 2px ${La(d,{alpha:.2})}`,caretColorError:d,clearColor:S,clearColorHover:D,clearColorPressed:q,iconColor:re,iconColorDisabled:ye,iconColorHover:Se,iconColorPressed:ce,suffixTextColor:e})},NA={name:"Input",common:Pm,self:AA};var kA=NA;const Am="n-input";function OA(t){let e=0;for(const n of t)e++;return e}function zs(t){return["",void 0,null].includes(t)}var Mh=Be({name:"InputWordCount",setup(t,{slots:e}){const{mergedValueRef:n,maxlengthRef:r,mergedClsPrefixRef:i}=qe(Am),s=de(()=>{const{value:o}=n;return o===null||Array.isArray(o)?0:OA(o)});return()=>{const{value:o}=r,{value:a}=n;return k("span",{class:`${i.value}-input-word-count`},FI(e.default,{value:a===null||Array.isArray(a)?"":a},()=>[o===void 0?s.value:`${s.value} / ${o}`]))}}}),MA=Ne("input",`
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
`,[j("input, textarea",`
 overflow: hidden;
 flex-grow: 1;
 position: relative;
 `),j("input-el, textarea-el, input-mirror, textarea-mirror, separator, placeholder",`
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
 `),j("input-el, textarea-el",`
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
 `),te("&::placeholder","color: #0000;"),te("&:-webkit-autofill ~",[j("placeholder","display: none;")])]),yt("round",[Ti("textarea","border-radius: calc(var(--n-height) / 2);")]),j("placeholder",`
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
 `)]),yt("textarea",[j("placeholder","overflow: visible;")]),Ti("autosize","width: 100%;"),yt("autosize",[j("textarea-el, input-el",`
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 `)]),Ne("input-wrapper",`
 overflow: hidden;
 display: inline-flex;
 flex-grow: 1;
 position: relative;
 padding-left: var(--n-padding-left);
 padding-right: var(--n-padding-right);
 `),j("input-mirror",`
 padding: 0;
 height: var(--n-height);
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: nowrap;
 pointer-events: none;
 `),j("input-el",`
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[te("+",[j("placeholder",`
 display: flex;
 align-items: center; 
 `)])]),Ti("textarea",[j("placeholder","white-space: nowrap;")]),j("eye",`
 transition: color .3s var(--n-bezier);
 `),yt("textarea","width: 100%;",[Ne("input-word-count",`
 position: absolute;
 right: var(--n-padding-right);
 bottom: var(--n-padding-vertical);
 `),yt("resizable",[Ne("input-wrapper",`
 resize: vertical;
 min-height: var(--n-height);
 `)]),j("textarea",`
 position: static;
 `),j("textarea-el, textarea-mirror, placeholder",`
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
 `),j("textarea-mirror",`
 width: 100%;
 pointer-events: none;
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre-wrap;
 overflow-wrap: break-word;
 `)]),yt("pair",[j("input-el, placeholder","text-align: center;"),j("separator",`
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `,[Ne("icon",`
 color: var(--n-icon-color);
 `),Ne("base-icon",`
 color: var(--n-icon-color);
 `)])]),yt("disabled",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[j("border","border: var(--n-border-disabled);"),j("input-el, textarea-el",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 text-decoration-color: var(--n-text-color-disabled);
 `),j("placeholder","color: var(--n-placeholder-color-disabled);"),j("separator","color: var(--n-text-color-disabled);",[Ne("icon",`
 color: var(--n-icon-color-disabled);
 `),Ne("base-icon",`
 color: var(--n-icon-color-disabled);
 `)]),j("suffix, prefix","color: var(--n-text-color-disabled);",[Ne("icon",`
 color: var(--n-icon-color-disabled);
 `),Ne("internal-icon",`
 color: var(--n-icon-color-disabled);
 `)])]),Ti("disabled",[j("eye",`
 display: flex;
 align-items: center;
 justify-content: center;
 color: var(--n-icon-color);
 cursor: pointer;
 `,[te("&:hover",`
 color: var(--n-icon-color-hover);
 `),te("&:active",`
 color: var(--n-icon-color-pressed);
 `),Ne("icon",[te("&:hover",`
 color: var(--n-icon-color-hover);
 `),te("&:active",`
 color: var(--n-icon-color-pressed);
 `)])]),te("&:hover",[j("state-border","border: var(--n-border-hover);")]),yt("focus","background-color: var(--n-color-focus);",[j("state-border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),j("border, state-border",`
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
 `),j("state-border",`
 border-color: #0000;
 z-index: 1;
 `),j("prefix","margin-right: 4px;"),j("suffix",`
 margin-left: 4px;
 `),j("suffix, prefix",`
 transition: color .3s var(--n-bezier);
 flex-wrap: nowrap;
 flex-shrink: 0;
 line-height: var(--n-height);
 white-space: nowrap;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 color: var(--n-suffix-text-color);
 `,[Ne("base-loading",`
 font-size: var(--n-icon-size);
 margin: 0 2px;
 color: var(--n-loading-color);
 `),Ne("base-clear",`
 font-size: var(--n-icon-size);
 `,[j("placeholder",[Ne("base-icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)])]),te(">",[Ne("icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)]),Ne("base-icon",`
 font-size: var(--n-icon-size);
 `)]),Ne("input-word-count",`
 pointer-events: none;
 line-height: 1.5;
 font-size: .85em;
 color: var(--n-count-text-color);
 transition: color .3s var(--n-bezier);
 margin-left: 4px;
 font-variant: tabular-nums;
 `),["warning","error"].map(t=>yt(`${t}-status`,[Ti("disabled",[Ne("base-loading",`
 color: var(--n-loading-color-${t})
 `),j("input-el, textarea-el",`
 caret-color: var(--n-caret-color-${t});
 `),j("state-border",`
 border: var(--n-border-${t});
 `),te("&:hover",[j("state-border",`
 border: var(--n-border-hover-${t});
 `)]),te("&:focus",`
 background-color: var(--n-color-focus-${t});
 `,[j("state-border",`
 box-shadow: var(--n-box-shadow-focus-${t});
 border: var(--n-border-focus-${t});
 `)]),yt("focus",`
 background-color: var(--n-color-focus-${t});
 `,[j("state-border",`
 box-shadow: var(--n-box-shadow-focus-${t});
 border: var(--n-border-focus-${t});
 `)])])]))]);const DA=Object.assign(Object.assign({},Es.props),{bordered:{type:Boolean,default:void 0},type:{type:String,default:"text"},placeholder:[Array,String],defaultValue:{type:[String,Array],default:null},value:[String,Array],disabled:{type:Boolean,default:void 0},size:String,rows:{type:[Number,String],default:3},round:Boolean,minlength:[String,Number],maxlength:[String,Number],clearable:Boolean,autosize:{type:[Boolean,Object],default:!1},pair:Boolean,separator:String,readonly:{type:[String,Boolean],default:!1},passivelyActivated:Boolean,showPasswordOn:String,stateful:{type:Boolean,default:!0},autofocus:Boolean,inputProps:Object,resizable:{type:Boolean,default:!0},showCount:Boolean,loading:{type:Boolean,default:void 0},onMousedown:Function,onKeydown:Function,onKeyup:Function,onInput:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClick:[Function,Array],onChange:[Function,Array],onClear:[Function,Array],status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],textDecoration:[String,Array],attrSize:{type:Number,default:20},onInputBlur:[Function,Array],onInputFocus:[Function,Array],onDeactivate:[Function,Array],onActivate:[Function,Array],onWrapperFocus:[Function,Array],onWrapperBlur:[Function,Array],internalDeactivateOnEnter:Boolean,internalForceFocus:Boolean,internalLoadingBeforeSuffix:Boolean,showPasswordToggle:Boolean});var LA=Be({name:"Input",props:DA,setup(t){const{mergedClsPrefixRef:e,mergedBorderedRef:n,inlineThemeDisabled:r,mergedRtlRef:i}=Im(t),s=Es("Input","-input",MA,kA,t,e),o=he(null),a=he(null),l=he(null),c=he(null),u=he(null),d=he(null),h=he(null),{localeRef:_}=sA("Input"),g=he(t.defaultValue),C=Do(t,"value"),b=dS(C,g),O=BS(t),{mergedSizeRef:H,mergedDisabledRef:V,mergedStatusRef:z}=O,X=he(!1),me=he(!1),E=he(!1),S=he(!1);let D=null;const q=de(()=>{const{placeholder:m,pair:x}=t;return x?Array.isArray(m)?m:m===void 0?["",""]:[m,m]:m===void 0?[_.value.placeholder]:[m]}),Z=de(()=>{const{value:m}=E,{value:x}=b,{value:J}=q;return!m&&(zs(x)||Array.isArray(x)&&zs(x[0]))&&J[0]}),L=de(()=>{const{value:m}=E,{value:x}=b,{value:J}=q;return!m&&J[1]&&(zs(x)||Array.isArray(x)&&zs(x[1]))}),re=ih(()=>t.internalForceFocus||X.value),ye=ih(()=>{if(V.value||t.readonly||!t.clearable||!re.value&&!me.value)return!1;const{value:m}=b,{value:x}=re;return t.pair?!!(Array.isArray(m)&&(m[0]||m[1]))&&(me.value||x):!!m&&(me.value||x)}),Se=de(()=>{const{showPasswordOn:m}=t;if(m)return m;if(t.showPasswordToggle)return"click"}),ce=he(!1),fe=de(()=>{const{textDecoration:m}=t;return m?Array.isArray(m)?m.map(x=>({textDecoration:x})):[{textDecoration:m}]:["",""]}),ie=he(void 0),Ue=()=>{var m,x;if(t.type==="textarea"){const{autosize:J}=t;if(J&&(ie.value=(x=(m=h.value)===null||m===void 0?void 0:m.$el)===null||x===void 0?void 0:x.offsetWidth),!a.value||typeof J=="boolean")return;const{paddingTop:ze,paddingBottom:We,lineHeight:tt}=window.getComputedStyle(a.value),Dn=Number(ze.slice(0,-2)),Ln=Number(We.slice(0,-2)),Fn=Number(tt.slice(0,-2)),{value:_i}=l;if(!_i)return;if(J.minRows){const vi=Math.max(J.minRows,1),ma=`${Dn+Ln+Fn*vi}px`;_i.style.minHeight=ma}if(J.maxRows){const vi=`${Dn+Ln+Fn*J.maxRows}px`;_i.style.maxHeight=vi}}},mt=de(()=>{const{maxlength:m}=t;return m===void 0?void 0:Number(m)});ni(()=>{const{value:m}=b;Array.isArray(m)||Ee(m)});const Me=ic().proxy;function ct(m){const{onUpdateValue:x,"onUpdate:value":J,onInput:ze}=t,{nTriggerFormInput:We}=O;x&&ht(x,m),J&&ht(J,m),ze&&ht(ze,m),g.value=m,We()}function ut(m){const{onChange:x}=t,{nTriggerFormChange:J}=O;x&&ht(x,m),g.value=m,J()}function br(m){const{onBlur:x}=t,{nTriggerFormBlur:J}=O;x&&ht(x,m),J()}function gi(m){const{onFocus:x}=t,{nTriggerFormFocus:J}=O;x&&ht(x,m),J()}function mi(m){const{onClear:x}=t;x&&ht(x,m)}function Ke(m){const{onInputBlur:x}=t;x&&ht(x,m)}function cn(m){const{onInputFocus:x}=t;x&&ht(x,m)}function yr(){const{onDeactivate:m}=t;m&&ht(m)}function xt(){const{onActivate:m}=t;m&&ht(m)}function On(m){const{onClick:x}=t;x&&ht(x,m)}function Mn(m){const{onWrapperFocus:x}=t;x&&ht(x,m)}function f(m){const{onWrapperBlur:x}=t;x&&ht(x,m)}function p(){E.value=!0}function v(m){E.value=!1,m.target===d.value?y(m,1):y(m,0)}function y(m,x=0,J="input"){const ze=m.target.value;if(Ee(ze),t.type==="textarea"){const{value:tt}=h;tt&&tt.syncUnifiedContainer()}if(D=ze,E.value)return;const We=ze;if(!t.pair)J==="input"?ct(We):ut(We);else{let{value:tt}=b;Array.isArray(tt)?tt=[...tt]:tt=["",""],tt[x]=We,J==="input"?ct(tt):ut(tt)}Me.$forceUpdate()}function w(m){Ke(m),m.relatedTarget===o.value&&yr(),m.relatedTarget!==null&&(m.relatedTarget===u.value||m.relatedTarget===d.value||m.relatedTarget===a.value)||(S.value=!1),N(m,"blur")}function A(m){cn(m),X.value=!0,S.value=!0,xt(),N(m,"focus")}function M(m){t.passivelyActivated&&(f(m),N(m,"blur"))}function R(m){t.passivelyActivated&&(X.value=!0,Mn(m),N(m,"focus"))}function N(m,x){m.relatedTarget!==null&&(m.relatedTarget===u.value||m.relatedTarget===d.value||m.relatedTarget===a.value||m.relatedTarget===o.value)||(x==="focus"?(gi(m),X.value=!0):x==="blur"&&(br(m),X.value=!1))}function T(m,x){y(m,x,"change")}function U(m){On(m)}function $(m){mi(m),t.pair?(ct(["",""]),ut(["",""])):(ct(""),ut(""))}function B(m){const{onMousedown:x}=t;x&&x(m);const{tagName:J}=m.target;if(J!=="INPUT"&&J!=="TEXTAREA"){if(t.resizable){const{value:ze}=o;if(ze){const{left:We,top:tt,width:Dn,height:Ln}=ze.getBoundingClientRect(),Fn=14;if(We+Dn-Fn<m.clientX&&m.clientY<We+Dn&&tt+Ln-Fn<m.clientY&&m.clientY<tt+Ln)return}}m.preventDefault(),X.value||G()}}function K(){var m;me.value=!0,t.type==="textarea"&&((m=h.value)===null||m===void 0||m.handleMouseEnterWrapper())}function ae(){var m;me.value=!1,t.type==="textarea"&&((m=h.value)===null||m===void 0||m.handleMouseLeaveWrapper())}function we(){V.value||Se.value==="click"&&(ce.value=!ce.value)}function ue(m){if(V.value)return;m.preventDefault();const x=ze=>{ze.preventDefault(),Xt("mouseup",document,x)};if(Jn("mouseup",document,x),Se.value!=="mousedown")return;ce.value=!0;const J=()=>{ce.value=!1,Xt("mouseup",document,J)};Jn("mouseup",document,J)}function Ce(m){var x;switch((x=t.onKeydown)===null||x===void 0||x.call(t,m),m.code){case"Escape":F();break;case"Enter":case"NumpadEnter":I(m);break}}function I(m){var x,J;if(t.passivelyActivated){const{value:ze}=S;if(ze){t.internalDeactivateOnEnter&&F();return}m.preventDefault(),t.type==="textarea"?(x=a.value)===null||x===void 0||x.focus():(J=u.value)===null||J===void 0||J.focus()}}function F(){t.passivelyActivated&&(S.value=!1,af(()=>{var m;(m=o.value)===null||m===void 0||m.focus()}))}function G(){var m,x,J;V.value||(t.passivelyActivated?(m=o.value)===null||m===void 0||m.focus():((x=a.value)===null||x===void 0||x.focus(),(J=u.value)===null||J===void 0||J.focus()))}function ge(){var m;!((m=o.value)===null||m===void 0)&&m.contains(document.activeElement)&&document.activeElement.blur()}function Oe(){var m,x;(m=a.value)===null||m===void 0||m.select(),(x=u.value)===null||x===void 0||x.select()}function be(){V.value||(a.value?a.value.focus():u.value&&u.value.focus())}function De(){const{value:m}=o;(m==null?void 0:m.contains(document.activeElement))&&m!==document.activeElement&&F()}function Ee(m){const{type:x,pair:J,autosize:ze}=t;if(!J&&ze)if(x==="textarea"){const{value:We}=l;We&&(We.textContent=(m!=null?m:"")+`\r
`)}else{const{value:We}=c;We&&(m?We.textContent=m:We.innerHTML="&nbsp;")}}function Nt(){Ue()}const un=he({top:"0"});function Om(m){var x;const{scrollTop:J}=m.target;un.value.top=`${-J}px`,(x=h.value)===null||x===void 0||x.syncUnifiedContainer()}let Ts=null;Ur(()=>{const{autosize:m,type:x}=t;m&&x==="textarea"?Ts=Tn(b,J=>{!Array.isArray(J)&&J!==D&&Ee(J)}):Ts==null||Ts()});let Is=null;Ur(()=>{t.type==="textarea"?Is=Tn(b,m=>{var x;!Array.isArray(m)&&m!==D&&((x=h.value)===null||x===void 0||x.syncUnifiedContainer())}):Is==null||Is()}),Br(Am,{mergedValueRef:b,maxlengthRef:mt,mergedClsPrefixRef:e});const Mm={wrapperElRef:o,inputElRef:u,textareaElRef:a,isCompositing:E,focus:G,blur:ge,select:Oe,deactivate:De,activate:be},Dm=SA("Input",i,e),hu=de(()=>{const{value:m}=H,{common:{cubicBezierEaseInOut:x},self:{color:J,borderRadius:ze,textColor:We,caretColor:tt,caretColorError:Dn,caretColorWarning:Ln,textDecorationColor:Fn,border:_i,borderDisabled:vi,borderHover:ma,borderFocus:Lm,placeholderColor:Fm,placeholderColorDisabled:$m,lineHeightTextarea:Bm,colorDisabled:Um,colorFocus:Hm,textColorDisabled:zm,boxShadowFocus:Wm,iconSize:jm,colorFocusWarning:Vm,boxShadowFocusWarning:qm,borderWarning:Km,borderFocusWarning:Gm,borderHoverWarning:Ym,colorFocusError:Xm,boxShadowFocusError:Jm,borderError:Qm,borderFocusError:Zm,borderHoverError:e_,clearSize:t_,clearColor:n_,clearColorHover:r_,clearColorPressed:i_,iconColor:s_,iconColorDisabled:o_,suffixTextColor:a_,countTextColor:l_,iconColorHover:c_,iconColorPressed:u_,loadingColor:d_,loadingColorError:h_,loadingColorWarning:f_,[Js("padding",m)]:p_,[Js("fontSize",m)]:g_,[Js("height",m)]:m_}}=s.value,{left:__,right:v_}=SI(p_);return{"--n-bezier":x,"--n-count-text-color":l_,"--n-color":J,"--n-font-size":g_,"--n-border-radius":ze,"--n-height":m_,"--n-padding-left":__,"--n-padding-right":v_,"--n-text-color":We,"--n-caret-color":tt,"--n-text-decoration-color":Fn,"--n-border":_i,"--n-border-disabled":vi,"--n-border-hover":ma,"--n-border-focus":Lm,"--n-placeholder-color":Fm,"--n-placeholder-color-disabled":$m,"--n-icon-size":jm,"--n-line-height-textarea":Bm,"--n-color-disabled":Um,"--n-color-focus":Hm,"--n-text-color-disabled":zm,"--n-box-shadow-focus":Wm,"--n-loading-color":d_,"--n-caret-color-warning":Ln,"--n-color-focus-warning":Vm,"--n-box-shadow-focus-warning":qm,"--n-border-warning":Km,"--n-border-focus-warning":Gm,"--n-border-hover-warning":Ym,"--n-loading-color-warning":f_,"--n-caret-color-error":Dn,"--n-color-focus-error":Xm,"--n-box-shadow-focus-error":Jm,"--n-border-error":Qm,"--n-border-focus-error":Zm,"--n-border-hover-error":e_,"--n-loading-color-error":h_,"--n-clear-color":n_,"--n-clear-size":t_,"--n-clear-color-hover":r_,"--n-clear-color-pressed":i_,"--n-icon-color":s_,"--n-icon-color-hover":c_,"--n-icon-color-pressed":u_,"--n-icon-color-disabled":o_,"--n-suffix-text-color":a_}}),wr=r?Sm("input",de(()=>{const{value:m}=H;return m[0]}),hu,t):void 0;return Object.assign(Object.assign({},Mm),{wrapperElRef:o,inputElRef:u,inputMirrorElRef:c,inputEl2Ref:d,textareaElRef:a,textareaMirrorElRef:l,textareaScrollbarInstRef:h,rtlEnabled:Dm,uncontrolledValue:g,mergedValue:b,passwordVisible:ce,mergedPlaceholder:q,showPlaceholder1:Z,showPlaceholder2:L,mergedFocus:re,isComposing:E,activated:S,showClearButton:ye,mergedSize:H,mergedDisabled:V,textDecorationStyle:fe,mergedClsPrefix:e,mergedBordered:n,mergedShowPasswordOn:Se,placeholderStyle:un,mergedStatus:z,textAreaScrollContainerWidth:ie,handleTextAreaScroll:Om,handleCompositionStart:p,handleCompositionEnd:v,handleInput:y,handleInputBlur:w,handleInputFocus:A,handleWrapperBlur:M,handleWrapperFocus:R,handleMouseEnter:K,handleMouseLeave:ae,handleMouseDown:B,handleChange:T,handleClick:U,handleClear:$,handlePasswordToggleClick:we,handlePasswordToggleMousedown:ue,handleWrapperKeyDown:Ce,handleTextAreaMirrorResize:Nt,getTextareaScrollContainer:()=>a.value,mergedTheme:s,cssVars:r?void 0:hu,themeClass:wr==null?void 0:wr.themeClass,onRender:wr==null?void 0:wr.onRender})},render(){const{mergedClsPrefix:t,mergedStatus:e,themeClass:n,onRender:r,$slots:i}=this;return r==null||r(),k("div",{ref:"wrapperElRef",class:[`${t}-input`,n,e&&`${t}-input--${e}-status`,{[`${t}-input--rtl`]:this.rtlEnabled,[`${t}-input--disabled`]:this.mergedDisabled,[`${t}-input--textarea`]:this.type==="textarea",[`${t}-input--resizable`]:this.resizable&&!this.autosize,[`${t}-input--autosize`]:this.autosize,[`${t}-input--round`]:this.round&&this.type!=="textarea",[`${t}-input--pair`]:this.pair,[`${t}-input--focus`]:this.mergedFocus,[`${t}-input--stateful`]:this.stateful}],style:this.cssVars,tabindex:!this.mergedDisabled&&this.passivelyActivated&&!this.activated?0:void 0,onFocus:this.handleWrapperFocus,onBlur:this.handleWrapperBlur,onClick:this.handleClick,onMousedown:this.handleMouseDown,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd,onKeyup:this.onKeyup,onKeydown:this.handleWrapperKeyDown},k("div",{class:`${t}-input-wrapper`},Ds(i.prefix,s=>s&&k("div",{class:`${t}-input__prefix`},s)),this.type==="textarea"?k(IA,{ref:"textareaScrollbarInstRef",class:`${t}-input__textarea`,container:this.getTextareaScrollContainer,triggerDisplayManually:!0,useUnifiedContainer:!0},{default:()=>{const{textAreaScrollContainerWidth:s}=this,o={width:this.autosize&&s&&`${s}px`};return k(Le,null,k("textarea",Object.assign({},this.inputProps,{ref:"textareaElRef",class:`${t}-input__textarea-el`,autofocus:this.autofocus,rows:Number(this.rows),placeholder:this.placeholder,value:this.mergedValue,disabled:this.mergedDisabled,maxlength:this.maxlength,minlength:this.minlength,readonly:this.readonly,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,style:[this.textDecorationStyle[0],o],onBlur:this.handleInputBlur,onFocus:this.handleInputFocus,onInput:this.handleInput,onChange:this.handleChange,onScroll:this.handleTextAreaScroll})),this.showPlaceholder1?k("div",{class:`${t}-input__placeholder`,style:[this.placeholderStyle,o],key:"placeholder"},this.mergedPlaceholder[0]):null,this.autosize?k(Al,{onResize:this.handleTextAreaMirrorResize},{default:()=>k("div",{ref:"textareaMirrorElRef",class:`${t}-input__textarea-mirror`,key:"mirror"})}):null)}}):k("div",{class:`${t}-input__input`},k("input",Object.assign({type:this.type==="password"&&this.mergedShowPasswordOn&&this.passwordVisible?"text":this.type},this.inputProps,{ref:"inputElRef",class:`${t}-input__input-el`,style:this.textDecorationStyle[0],tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[0],disabled:this.mergedDisabled,maxlength:this.maxlength,minlength:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[0]:this.mergedValue,readonly:this.readonly,autofocus:this.autofocus,size:this.attrSize,onBlur:this.handleInputBlur,onFocus:this.handleInputFocus,onInput:s=>this.handleInput(s,0),onChange:s=>this.handleChange(s,0)})),this.showPlaceholder1?k("div",{class:`${t}-input__placeholder`},k("span",null,this.mergedPlaceholder[0])):null,this.autosize?k("div",{class:`${t}-input__input-mirror`,key:"mirror",ref:"inputMirrorElRef"},"\xA0"):null),!this.pair&&Ds(i.suffix,s=>s||this.clearable||this.showCount||this.mergedShowPasswordOn||this.loading!==void 0?k("div",{class:`${t}-input__suffix`},[Ds(i.clear,o=>(this.clearable||o)&&k(Fl,{clsPrefix:t,show:this.showClearButton,onClear:this.handleClear},{default:()=>o})),this.internalLoadingBeforeSuffix?null:s,this.loading!==void 0?k(RA,{clsPrefix:t,loading:this.loading,showArrow:!1,showClear:!1,style:this.cssVars}):null,this.internalLoadingBeforeSuffix?s:null,this.showCount&&this.type!=="textarea"?k(Mh,null,{default:o=>{var a;return(a=i.count)===null||a===void 0?void 0:a.call(i,o)}}):null,this.mergedShowPasswordOn&&this.type==="password"?k(du,{clsPrefix:t,class:`${t}-input__eye`,onMousedown:this.handlePasswordToggleMousedown,onClick:this.handlePasswordToggleClick},{default:()=>this.passwordVisible?Xs(i["password-visible-icon"],()=>[k(aA,null)]):Xs(i["password-invisible-icon"],()=>[k(lA,null)])}):null]):null)),this.pair?k("span",{class:`${t}-input__separator`},Xs(i.separator,()=>[this.separator])):null,this.pair?k("div",{class:`${t}-input-wrapper`},k("div",{class:`${t}-input__input`},k("input",{ref:"inputEl2Ref",type:this.type,class:`${t}-input__input-el`,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[1],disabled:this.mergedDisabled,maxlength:this.maxlength,minlength:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[1]:void 0,readonly:this.readonly,style:this.textDecorationStyle[1],onBlur:this.handleInputBlur,onFocus:this.handleInputFocus,onInput:s=>this.handleInput(s,1),onChange:s=>this.handleChange(s,1)}),this.showPlaceholder2?k("div",{class:`${t}-input__placeholder`},k("span",null,this.mergedPlaceholder[1])):null),Ds(i.suffix,s=>(this.clearable||s)&&k("div",{class:`${t}-input__suffix`},[this.clearable&&k(Fl,{clsPrefix:t,show:this.showClearButton,onClear:this.handleClear},{default:()=>{var o;return(o=i.clear)===null||o===void 0?void 0:o.call(i)}}),s]))):null,this.mergedBordered?k("div",{class:`${t}-input__border`}):null,this.mergedBordered?k("div",{class:`${t}-input__state-border`}):null,this.showCount&&this.type==="textarea"?k(Mh,null,{default:s=>{var o;return(o=i.count)===null||o===void 0?void 0:o.call(i,s)}}):null)}});const FA=Be({props:{color:null},setup(t){return sc(e=>({"190e8038":t.color||"white"})),(e,n)=>(Te(),Je("button",null,"\u2716"))}});var Nm=an(FA,[["__scopeId","data-v-1f8d5a2e"]]);const $A=Vo("\u2716"),BA=Be({props:{text:null,color:null,author:null,onDelete:null,id:null},setup(t){const{author:e}=t;sc(s=>({"6ea6424b":t.color}));const r=qe("user").uid===e,i=qe("board");return(s,o)=>{var a;return Te(),Je("li",{class:Qr({hidden:!r&&((a=Ct(i))==null?void 0:a.cardsHidden)})},[Ze(Nm,{onClick:o[0]||(o[0]=l=>t.onDelete(String(t.id)))},{default:Zl(()=>[$A]),_:1}),Vo(" "+Fr(t.text),1)],2)}}});var UA=an(BA,[["__scopeId","data-v-3028bc20"]]);const HA={class:"input-container"},zA=Be({props:{title:null,color:null,boardId:null,columnId:null,cards:null},setup(t){const{columnId:e,boardId:n}=t;sc(l=>({d88ae56e:t.color}));const r=gr({inputText:""}),i=qe("user");function s(){r.inputText.trim()!==""&&(!(i!=null&&i.uid)||(bI(n,e,{text:r.inputText,author:i.uid}),r.inputText=""))}function o(l){yI(n,e,l)}function a(l){l.metaKey&&l.key==="Enter"&&(l.preventDefault(),s())}return(l,c)=>(Te(),Je("section",null,[Qe("h2",null,Fr(t.title),1),Qe("ul",null,[(Te(!0),Je(Le,null,Gi(t.cards,(u,d)=>(Te(),Kt(UA,{id:d,author:u.author,text:u.text,color:t.color,onDelete:o},null,8,["id","author","text","color"]))),256))]),Qe("div",HA,[Ze(Ct(LA),{class:"input",value:Ct(r).inputText,"onUpdate:value":c[0]||(c[0]=u=>Ct(r).inputText=u),type:"textarea",autosize:"",placeholder:"Add new card",onKeydown:a},null,8,["value"]),Qe("button",{class:"save-button",onClick:s},"save")])]))}});var WA=an(zA,[["__scopeId","data-v-1fbd23f2"]]);const jA={class:"board"},VA={class:"columns"},qA={class:"options"},KA=Be({setup(t){const e=qe("board"),n=qe("boardId"),r=qe("user");Ur(()=>{r.uid&&$g(r.uid,n)});function i(){_I(n,!e.cardsHidden)}function s(){return e.cardsHidden?"Show all cards":"Hide other cards"}function o(u){u.key==="Enter"&&(u.target.blur(),u.preventDefault())}function a(u){const d=(u==null?void 0:u.target).value.trim();vI(n,d),c.value=d||"Untitled Retro"}function l(){c.value==="Untitled Retro"&&(c.value="")}const c=he(e.title||"Untitled Retro");return Tn(e,u=>{c.value=u.title||"Untitled Retro"}),(u,d)=>(Te(),Je(Le,null,[Qe("div",jA,[tb(Qe("input",{class:Qr({untitled:c.value==="Untitled Retro"}),"onUpdate:modelValue":d[0]||(d[0]=h=>c.value=h),onKeypress:o,onFocusout:a,onFocusin:l},null,34),[[Gb,c.value]]),Qe("section",VA,[(Te(!0),Je(Le,null,Gi(Ct(e).columns,(h,_)=>{var g;return Te(),Kt(WA,{cards:(g=h.cards)!=null?g:[],"column-id":String(_),"board-id":Ct(n),key:String(_),title:h.title,color:h.color},null,8,["cards","column-id","board-id","title","color"])}),128))])]),Qe("section",qA,[Ze(II,{onClick:i,text:s()},null,8,["text"])])],64))}});var GA=an(KA,[["__scopeId","data-v-a2bc0e1e"]]);const YA={},XA={class:"loader"};function JA(t,e){return Te(),Je("div",XA,"Loading...")}var QA=an(YA,[["render",JA],["__scopeId","data-v-840bd5c8"]]);const ZA={key:0},eN={key:1},tN={key:1},nN=Be({props:{boardId:null},setup(t){const{boardId:e}=t,n=mI(e);return Br("boardId",e),Br("board",n),(r,i)=>(Te(),Je(Le,null,[Ct(n).loading?Ai("",!0):(Te(),Je("main",ZA,[Ct(n).exists?(Te(),Kt(GA,{key:0})):Ai("",!0),Ct(n).exists?Ai("",!0):(Te(),Je("div",eN,"Couldn't find board"))])),Ct(n).loading?(Te(),Je("main",tN,[Ze(QA)])):Ai("",!0)],64))}});var rN=an(nN,[["__scopeId","data-v-b2bd279e"]]);const iN=Vo("\u2716"),sN={class:"columns"},oN=Be({props:{board:null,isTemplate:{type:Boolean}},emits:["delete"],setup(t,{emit:e}){function n(r){r.stopPropagation(),e("delete")}return(r,i)=>(Te(),Je("div",{class:Qr(["board",{template:t.isTemplate}])},[t.isTemplate?Ai("",!0):(Te(),Kt(Nm,{key:0,color:"black",onClick:n},{default:Zl(()=>[iN]),_:1})),Qe("h3",null,Fr(t.board.title||"Untitled Retro"),1),Qe("div",sN,[(Te(!0),Je(Le,null,Gi(t.board.columns,s=>(Te(),Je("div",{class:"column",style:Ao({backgroundColor:s.color})},Fr(s.title),5))),256))])],2))}});var Dh=an(oN,[["__scopeId","data-v-4421a504"]]);const aN=[{title:"Mad Sad Glad",columns:[{title:"Mad",color:"#f44336"},{title:"Sad",color:"#e91e63"},{title:"Glad",color:"#9c27b0"}]},{title:"Start Stop Continue",columns:[{title:"Start",color:"#2196f3"},{title:"Stop",color:"#ff9800"},{title:"Continue",color:"#009688"}]},{title:"Sailboat",columns:[{title:"What is the wind pushing our sails that make us go fast",color:"#f44336"},{title:"What anchors are holding us back",color:"#e91e63"},{title:"What rocks are ahead of us that risk our future",color:"#9c27b0"},{title:"What is our ideal island destination",color:"#673ab7"}]}],km=t=>(Tv("data-v-591383d7"),t=t(),Iv(),t),lN={class:"container"},cN=km(()=>Qe("h2",null,"start a new board",-1)),uN=km(()=>Qe("h2",null,"your boards",-1)),dN=Be({props:{navigateToBoard:null},setup(t){const{navigateToBoard:e}=t,n=qe("user"),r=de(()=>gI(n.uid));function i(o){CI(n.uid,o)}async function s(o){if(!(n!=null&&n.uid))return;const a=await wI(n.uid,o);a&&e(a)}return(o,a)=>(Te(),Je("div",lN,[Qe("main",null,[Qe("h1",null,"\u{1F680} quick retro "+Fr("")+"\u{1F680}",1),cN,Qe("section",null,[(Te(!0),Je(Le,null,Gi(Ct(aN),l=>(Te(),Kt(Dh,{onClick:c=>s(l),board:l,"is-template":!0},null,8,["onClick","board"]))),256))]),uN,Qe("section",null,[(Te(!0),Je(Le,null,Gi(Ct(r),(l,c)=>(Te(),Kt(Dh,{onClick:u=>t.navigateToBoard(c),onDelete:u=>i(c),board:l,"is-template":!1},null,8,["onClick","onDelete","board"]))),256))])])]))}});var hN=an(dN,[["__scopeId","data-v-591383d7"]]);const fN=Be({setup(t){const e=he(window.location.hash.slice(1));function n(i){console.log("navigating to board",i),history.pushState({},"",`#${i}`),e.value=i}addEventListener("popstate",()=>{console.log(window.location.hash.slice(1)),e.value=window.location.hash.slice(1)});const r=EI();return Br("user",r),(i,s)=>e.value&&e.value.length>0?(Te(),Kt(rN,{key:0,boardId:e.value},null,8,["boardId"])):(Te(),Kt(hN,{key:1,"navigate-to-board":n}))}});Jb(fN).mount("#app")});export default pN();
