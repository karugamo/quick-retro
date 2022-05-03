const _d=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}};_d();function co(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const gd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",md=co(gd);function pc(t){return!!t||t===""}function uo(t){if(M(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=de(s)?Ed(s):uo(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(de(t))return t;if(fe(t))return t}}const yd=/;(?![^(]*\))/g,vd=/:(.+)/;function Ed(t){const e={};return t.split(yd).forEach(n=>{if(n){const s=n.split(vd);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function wi(t){let e="";if(de(t))e=t;else if(M(t))for(let n=0;n<t.length;n++){const s=wi(t[n]);s&&(e+=s+" ")}else if(fe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const ho=t=>de(t)?t:t==null?"":M(t)||fe(t)&&(t.toString===yc||!D(t.toString))?JSON.stringify(t,_c,2):String(t),_c=(t,e)=>e&&e.__v_isRef?_c(t,e.value):En(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:gc(e)?{[`Set(${e.size})`]:[...e.values()]}:fe(e)&&!M(e)&&!vc(e)?String(e):e,G={},vn=[],ze=()=>{},Id=()=>!1,Cd=/^on[^a-z]/,Ti=t=>Cd.test(t),fo=t=>t.startsWith("onUpdate:"),Ie=Object.assign,po=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},bd=Object.prototype.hasOwnProperty,H=(t,e)=>bd.call(t,e),M=Array.isArray,En=t=>Si(t)==="[object Map]",gc=t=>Si(t)==="[object Set]",D=t=>typeof t=="function",de=t=>typeof t=="string",_o=t=>typeof t=="symbol",fe=t=>t!==null&&typeof t=="object",mc=t=>fe(t)&&D(t.then)&&D(t.catch),yc=Object.prototype.toString,Si=t=>yc.call(t),wd=t=>Si(t).slice(8,-1),vc=t=>Si(t)==="[object Object]",go=t=>de(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,js=co(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ri=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Td=/-(\w)/g,Rn=Ri(t=>t.replace(Td,(e,n)=>n?n.toUpperCase():"")),Sd=/\B([A-Z])/g,Fn=Ri(t=>t.replace(Sd,"-$1").toLowerCase()),Ec=Ri(t=>t.charAt(0).toUpperCase()+t.slice(1)),rr=Ri(t=>t?`on${Ec(t)}`:""),Xs=(t,e)=>!Object.is(t,e),qs=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Zs=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},br=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let La;const Rd=()=>La||(La=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Xe;class Nd{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Xe&&(this.parent=Xe,this.index=(Xe.scopes||(Xe.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Xe;try{return Xe=this,e()}finally{Xe=n}}}on(){Xe=this}off(){Xe=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.active=!1}}}function Ad(t,e=Xe){e&&e.active&&e.effects.push(t)}const mo=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Ic=t=>(t.w&Ot)>0,Cc=t=>(t.n&Ot)>0,kd=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Ot},xd=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];Ic(i)&&!Cc(i)?i.delete(t):e[n++]=i,i.w&=~Ot,i.n&=~Ot}e.length=n}},wr=new WeakMap;let Zn=0,Ot=1;const Tr=30;let Be;const zt=Symbol(""),Sr=Symbol("");class yo{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Ad(this,s)}run(){if(!this.active)return this.fn();let e=Be,n=Nt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Be,Be=this,Nt=!0,Ot=1<<++Zn,Zn<=Tr?kd(this):Fa(this),this.fn()}finally{Zn<=Tr&&xd(this),Ot=1<<--Zn,Be=this.parent,Nt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Be===this?this.deferStop=!0:this.active&&(Fa(this),this.onStop&&this.onStop(),this.active=!1)}}function Fa(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Nt=!0;const bc=[];function Un(){bc.push(Nt),Nt=!1}function Wn(){const t=bc.pop();Nt=t===void 0?!0:t}function Me(t,e,n){if(Nt&&Be){let s=wr.get(t);s||wr.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=mo()),wc(i)}}function wc(t,e){let n=!1;Zn<=Tr?Cc(t)||(t.n|=Ot,n=!Ic(t)):n=!t.has(Be),n&&(t.add(Be),Be.deps.push(t))}function ft(t,e,n,s,i,r){const o=wr.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&M(t))o.forEach((l,c)=>{(c==="length"||c>=s)&&a.push(l)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":M(t)?go(n)&&a.push(o.get("length")):(a.push(o.get(zt)),En(t)&&a.push(o.get(Sr)));break;case"delete":M(t)||(a.push(o.get(zt)),En(t)&&a.push(o.get(Sr)));break;case"set":En(t)&&a.push(o.get(zt));break}if(a.length===1)a[0]&&Rr(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Rr(mo(l))}}function Rr(t,e){for(const n of M(t)?t:[...t])(n!==Be||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const Pd=co("__proto__,__v_isRef,__isVue"),Tc=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(_o)),Od=vo(),Md=vo(!1,!0),Dd=vo(!0),Ua=Ld();function Ld(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=j(this);for(let r=0,o=this.length;r<o;r++)Me(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(j)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Un();const s=j(this)[e].apply(this,n);return Wn(),s}}),t}function vo(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?Xd:kc:e?Ac:Nc).get(s))return s;const o=M(s);if(!t&&o&&H(Ua,i))return Reflect.get(Ua,i,r);const a=Reflect.get(s,i,r);return(_o(i)?Tc.has(i):Pd(i))||(t||Me(s,"get",i),e)?a:Ee(a)?!o||!go(i)?a.value:a:fe(a)?t?xc(a):Hn(a):a}}const Fd=Sc(),Ud=Sc(!0);function Sc(t=!1){return function(n,s,i,r){let o=n[s];if(hs(o)&&Ee(o)&&!Ee(i))return!1;if(!t&&!hs(i)&&(Pc(i)||(i=j(i),o=j(o)),!M(n)&&Ee(o)&&!Ee(i)))return o.value=i,!0;const a=M(n)&&go(s)?Number(s)<n.length:H(n,s),l=Reflect.set(n,s,i,r);return n===j(r)&&(a?Xs(i,o)&&ft(n,"set",s,i):ft(n,"add",s,i)),l}}function Wd(t,e){const n=H(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&ft(t,"delete",e,void 0),s}function Hd(t,e){const n=Reflect.has(t,e);return(!_o(e)||!Tc.has(e))&&Me(t,"has",e),n}function Bd(t){return Me(t,"iterate",M(t)?"length":zt),Reflect.ownKeys(t)}const Rc={get:Od,set:Fd,deleteProperty:Wd,has:Hd,ownKeys:Bd},$d={get:Dd,set(t,e){return!0},deleteProperty(t,e){return!0}},Vd=Ie({},Rc,{get:Md,set:Ud}),Eo=t=>t,Ni=t=>Reflect.getPrototypeOf(t);function Fs(t,e,n=!1,s=!1){t=t.__v_raw;const i=j(t),r=j(e);e!==r&&!n&&Me(i,"get",e),!n&&Me(i,"get",r);const{has:o}=Ni(i),a=s?Eo:n?wo:bo;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function Us(t,e=!1){const n=this.__v_raw,s=j(n),i=j(t);return t!==i&&!e&&Me(s,"has",t),!e&&Me(s,"has",i),t===i?n.has(t):n.has(t)||n.has(i)}function Ws(t,e=!1){return t=t.__v_raw,!e&&Me(j(t),"iterate",zt),Reflect.get(t,"size",t)}function Wa(t){t=j(t);const e=j(this);return Ni(e).has.call(e,t)||(e.add(t),ft(e,"add",t,t)),this}function Ha(t,e){e=j(e);const n=j(this),{has:s,get:i}=Ni(n);let r=s.call(n,t);r||(t=j(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?Xs(e,o)&&ft(n,"set",t,e):ft(n,"add",t,e),this}function Ba(t){const e=j(this),{has:n,get:s}=Ni(e);let i=n.call(e,t);i||(t=j(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&ft(e,"delete",t,void 0),r}function $a(){const t=j(this),e=t.size!==0,n=t.clear();return e&&ft(t,"clear",void 0,void 0),n}function Hs(t,e){return function(s,i){const r=this,o=r.__v_raw,a=j(o),l=e?Eo:t?wo:bo;return!t&&Me(a,"iterate",zt),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function Bs(t,e,n){return function(...s){const i=this.__v_raw,r=j(i),o=En(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?Eo:e?wo:bo;return!e&&Me(r,"iterate",l?Sr:zt),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function vt(t){return function(...e){return t==="delete"?!1:this}}function jd(){const t={get(r){return Fs(this,r)},get size(){return Ws(this)},has:Us,add:Wa,set:Ha,delete:Ba,clear:$a,forEach:Hs(!1,!1)},e={get(r){return Fs(this,r,!1,!0)},get size(){return Ws(this)},has:Us,add:Wa,set:Ha,delete:Ba,clear:$a,forEach:Hs(!1,!0)},n={get(r){return Fs(this,r,!0)},get size(){return Ws(this,!0)},has(r){return Us.call(this,r,!0)},add:vt("add"),set:vt("set"),delete:vt("delete"),clear:vt("clear"),forEach:Hs(!0,!1)},s={get(r){return Fs(this,r,!0,!0)},get size(){return Ws(this,!0)},has(r){return Us.call(this,r,!0)},add:vt("add"),set:vt("set"),delete:vt("delete"),clear:vt("clear"),forEach:Hs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Bs(r,!1,!1),n[r]=Bs(r,!0,!1),e[r]=Bs(r,!1,!0),s[r]=Bs(r,!0,!0)}),[t,n,e,s]}const[qd,zd,Kd,Gd]=jd();function Io(t,e){const n=e?t?Gd:Kd:t?zd:qd;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(H(n,i)&&i in s?n:s,i,r)}const Yd={get:Io(!1,!1)},Qd={get:Io(!1,!0)},Jd={get:Io(!0,!1)},Nc=new WeakMap,Ac=new WeakMap,kc=new WeakMap,Xd=new WeakMap;function Zd(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ef(t){return t.__v_skip||!Object.isExtensible(t)?0:Zd(wd(t))}function Hn(t){return hs(t)?t:Co(t,!1,Rc,Yd,Nc)}function tf(t){return Co(t,!1,Vd,Qd,Ac)}function xc(t){return Co(t,!0,$d,Jd,kc)}function Co(t,e,n,s,i){if(!fe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=ef(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function In(t){return hs(t)?In(t.__v_raw):!!(t&&t.__v_isReactive)}function hs(t){return!!(t&&t.__v_isReadonly)}function Pc(t){return!!(t&&t.__v_isShallow)}function Oc(t){return In(t)||hs(t)}function j(t){const e=t&&t.__v_raw;return e?j(e):t}function Mc(t){return Zs(t,"__v_skip",!0),t}const bo=t=>fe(t)?Hn(t):t,wo=t=>fe(t)?xc(t):t;function nf(t){Nt&&Be&&(t=j(t),wc(t.dep||(t.dep=mo())))}function sf(t,e){t=j(t),t.dep&&Rr(t.dep)}function Ee(t){return!!(t&&t.__v_isRef===!0)}function Oe(t){return Ee(t)?t.value:t}const rf={get:(t,e,n)=>Oe(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Ee(i)&&!Ee(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Dc(t){return In(t)?t:new Proxy(t,rf)}class of{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new yo(e,()=>{this._dirty||(this._dirty=!0,sf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=j(this);return nf(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function af(t,e,n=!1){let s,i;const r=D(t);return r?(s=t,i=ze):(s=t.get,i=t.set),new of(s,i,r||!i,n)}function At(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){Ai(r,e,n)}return i}function Fe(t,e,n,s){if(D(t)){const r=At(t,e,n,s);return r&&mc(r)&&r.catch(o=>{Ai(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(Fe(t[r],e,n,s));return i}function Ai(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){At(l,null,10,[t,o,a]);return}}lf(t,n,i,s)}function lf(t,e,n,s=!0){console.error(t)}let ei=!1,Nr=!1;const Pe=[];let lt=0;const ss=[];let es=null,pn=0;const is=[];let It=null,_n=0;const Lc=Promise.resolve();let To=null,Ar=null;function cf(t){const e=To||Lc;return t?e.then(this?t.bind(this):t):e}function uf(t){let e=lt+1,n=Pe.length;for(;e<n;){const s=e+n>>>1;ds(Pe[s])<t?e=s+1:n=s}return e}function Fc(t){(!Pe.length||!Pe.includes(t,ei&&t.allowRecurse?lt+1:lt))&&t!==Ar&&(t.id==null?Pe.push(t):Pe.splice(uf(t.id),0,t),Uc())}function Uc(){!ei&&!Nr&&(Nr=!0,To=Lc.then(Bc))}function hf(t){const e=Pe.indexOf(t);e>lt&&Pe.splice(e,1)}function Wc(t,e,n,s){M(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?s+1:s))&&n.push(t),Uc()}function df(t){Wc(t,es,ss,pn)}function ff(t){Wc(t,It,is,_n)}function So(t,e=null){if(ss.length){for(Ar=e,es=[...new Set(ss)],ss.length=0,pn=0;pn<es.length;pn++)es[pn]();es=null,pn=0,Ar=null,So(t,e)}}function Hc(t){if(is.length){const e=[...new Set(is)];if(is.length=0,It){It.push(...e);return}for(It=e,It.sort((n,s)=>ds(n)-ds(s)),_n=0;_n<It.length;_n++)It[_n]();It=null,_n=0}}const ds=t=>t.id==null?1/0:t.id;function Bc(t){Nr=!1,ei=!0,So(t),Pe.sort((n,s)=>ds(n)-ds(s));const e=ze;try{for(lt=0;lt<Pe.length;lt++){const n=Pe[lt];n&&n.active!==!1&&At(n,null,14)}}finally{lt=0,Pe.length=0,Hc(),ei=!1,To=null,(Pe.length||ss.length||is.length)&&Bc(t)}}function pf(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||G;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[u]||G;f?i=n.map(g=>g.trim()):h&&(i=n.map(br))}let a,l=s[a=rr(e)]||s[a=rr(Rn(e))];!l&&r&&(l=s[a=rr(Fn(e))]),l&&Fe(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Fe(c,t,6,i)}}function $c(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!D(t)){const l=c=>{const u=$c(c,e,!0);u&&(a=!0,Ie(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(s.set(t,null),null):(M(r)?r.forEach(l=>o[l]=null):Ie(o,r),s.set(t,o),o)}function ki(t,e){return!t||!Ti(e)?!1:(e=e.slice(2).replace(/Once$/,""),H(t,e[0].toLowerCase()+e.slice(1))||H(t,Fn(e))||H(t,e))}let Ve=null,Vc=null;function ti(t){const e=Ve;return Ve=t,Vc=t&&t.type.__scopeId||null,e}function _f(t,e=Ve,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Xa(-1);const r=ti(e),o=t(...i);return ti(r),s._d&&Xa(1),o};return s._n=!0,s._c=!0,s._d=!0,s}function or(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:g,ctx:I,inheritAttrs:S}=t;let N,U;const oe=ti(t);try{if(n.shapeFlag&4){const X=i||s;N=Ze(u.call(X,X,h,r,g,f,I)),U=l}else{const X=e;N=Ze(X.length>1?X(r,{attrs:l,slots:a,emit:c}):X(r,null)),U=e.props?l:gf(l)}}catch(X){rs.length=0,Ai(X,t,1),N=tt(Ke)}let J=N;if(U&&S!==!1){const X=Object.keys(U),{shapeFlag:me}=J;X.length&&me&7&&(o&&X.some(fo)&&(U=mf(U,o)),J=Jt(J,U))}return n.dirs&&(J.dirs=J.dirs?J.dirs.concat(n.dirs):n.dirs),n.transition&&(J.transition=n.transition),N=J,ti(oe),N}const gf=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ti(n))&&((e||(e={}))[n]=t[n]);return e},mf=(t,e)=>{const n={};for(const s in t)(!fo(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function yf(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?Va(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==s[f]&&!ki(c,f))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Va(s,o,c):!0:!!o;return!1}function Va(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!ki(n,r))return!0}return!1}function vf({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Ef=t=>t.__isSuspense;function If(t,e){e&&e.pendingBranch?M(t)?e.effects.push(...t):e.effects.push(t):ff(t)}function zs(t,e){if(_e){let n=_e.provides;const s=_e.parent&&_e.parent.provides;s===n&&(n=_e.provides=Object.create(s)),n[t]=e}}function kt(t,e,n=!1){const s=_e||Ve;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&D(e)?e.call(s.proxy):e}}function Cf(t,e){return Ro(t,null,{flush:"post"})}const ja={};function ar(t,e,n){return Ro(t,e,n)}function Ro(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=G){const a=_e;let l,c=!1,u=!1;if(Ee(t)?(l=()=>t.value,c=Pc(t)):In(t)?(l=()=>t,s=!0):M(t)?(u=!0,c=t.some(In),l=()=>t.map(U=>{if(Ee(U))return U.value;if(In(U))return jt(U);if(D(U))return At(U,a,2)})):D(t)?e?l=()=>At(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),Fe(t,a,3,[f])}:l=ze,e&&s){const U=l;l=()=>jt(U())}let h,f=U=>{h=N.onStop=()=>{At(U,a,4)}};if(fs)return f=ze,e?n&&Fe(e,a,3,[l(),u?[]:void 0,f]):l(),ze;let g=u?[]:ja;const I=()=>{if(!!N.active)if(e){const U=N.run();(s||c||(u?U.some((oe,J)=>Xs(oe,g[J])):Xs(U,g)))&&(h&&h(),Fe(e,a,3,[U,g===ja?void 0:g,f]),g=U)}else N.run()};I.allowRecurse=!!e;let S;i==="sync"?S=I:i==="post"?S=()=>Se(I,a&&a.suspense):S=()=>{!a||a.isMounted?df(I):I()};const N=new yo(l,S);return e?n?I():g=N.run():i==="post"?Se(N.run.bind(N),a&&a.suspense):N.run(),()=>{N.stop(),a&&a.scope&&po(a.scope.effects,N)}}function bf(t,e,n){const s=this.proxy,i=de(t)?t.includes(".")?jc(s,t):()=>s[t]:t.bind(s,s);let r;D(e)?r=e:(r=e.handler,n=e);const o=_e;Nn(this);const a=Ro(i,r.bind(s),n);return o?Nn(o):Gt(),a}function jc(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function jt(t,e){if(!fe(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ee(t))jt(t.value,e);else if(M(t))for(let n=0;n<t.length;n++)jt(t[n],e);else if(gc(t)||En(t))t.forEach(n=>{jt(n,e)});else if(vc(t))for(const n in t)jt(t[n],e);return t}function wf(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return No(()=>{t.isMounted=!0}),Gc(()=>{t.isUnmounting=!0}),t}const De=[Function,Array],Tf={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:De,onEnter:De,onAfterEnter:De,onEnterCancelled:De,onBeforeLeave:De,onLeave:De,onAfterLeave:De,onLeaveCancelled:De,onBeforeAppear:De,onAppear:De,onAfterAppear:De,onAppearCancelled:De},setup(t,{slots:e}){const n=lu(),s=wf();let i;return()=>{const r=e.default&&zc(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const S of r)if(S.type!==Ke){o=S;break}}const a=j(t),{mode:l}=a;if(s.isLeaving)return lr(o);const c=qa(o);if(!c)return lr(o);const u=kr(c,a,s,n);xr(c,u);const h=n.subTree,f=h&&qa(h);let g=!1;const{getTransitionKey:I}=c.type;if(I){const S=I();i===void 0?i=S:S!==i&&(i=S,g=!0)}if(f&&f.type!==Ke&&(!$t(c,f)||g)){const S=kr(f,a,s,n);if(xr(f,S),l==="out-in")return s.isLeaving=!0,S.afterLeave=()=>{s.isLeaving=!1,n.update()},lr(o);l==="in-out"&&c.type!==Ke&&(S.delayLeave=(N,U,oe)=>{const J=qc(s,f);J[String(f.key)]=f,N._leaveCb=()=>{U(),N._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=oe})}return o}}},Sf=Tf;function qc(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function kr(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:g,onLeaveCancelled:I,onBeforeAppear:S,onAppear:N,onAfterAppear:U,onAppearCancelled:oe}=e,J=String(t.key),X=qc(n,t),me=(V,ae)=>{V&&Fe(V,s,9,ae)},Ue={mode:r,persisted:o,beforeEnter(V){let ae=a;if(!n.isMounted)if(i)ae=S||a;else return;V._leaveCb&&V._leaveCb(!0);const ne=X[J];ne&&$t(t,ne)&&ne.el._leaveCb&&ne.el._leaveCb(),me(ae,[V])},enter(V){let ae=l,ne=c,Ae=u;if(!n.isMounted)if(i)ae=N||l,ne=U||c,Ae=oe||u;else return;let ke=!1;const We=V._enterCb=cn=>{ke||(ke=!0,cn?me(Ae,[V]):me(ne,[V]),Ue.delayedLeave&&Ue.delayedLeave(),V._enterCb=void 0)};ae?(ae(V,We),ae.length<=1&&We()):We()},leave(V,ae){const ne=String(t.key);if(V._enterCb&&V._enterCb(!0),n.isUnmounting)return ae();me(h,[V]);let Ae=!1;const ke=V._leaveCb=We=>{Ae||(Ae=!0,ae(),We?me(I,[V]):me(g,[V]),V._leaveCb=void 0,X[ne]===t&&delete X[ne])};X[ne]=t,f?(f(V,ke),f.length<=1&&ke()):ke()},clone(V){return kr(V,e,n,s)}};return Ue}function lr(t){if(xi(t))return t=Jt(t),t.children=null,t}function qa(t){return xi(t)?t.children?t.children[0]:void 0:t}function xr(t,e){t.shapeFlag&6&&t.component?xr(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function zc(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===ye?(o.patchFlag&128&&i++,s=s.concat(zc(o.children,e,a))):(e||o.type!==Ke)&&s.push(a!=null?Jt(o,{key:a}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function ws(t){return D(t)?{setup:t,name:t.name}:t}const Pr=t=>!!t.type.__asyncLoader,xi=t=>t.type.__isKeepAlive;function Rf(t,e){Kc(t,"a",e)}function Nf(t,e){Kc(t,"da",e)}function Kc(t,e,n=_e){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Pi(e,s,n),n){let i=n.parent;for(;i&&i.parent;)xi(i.parent.vnode)&&Af(s,e,n,i),i=i.parent}}function Af(t,e,n,s){const i=Pi(e,t,s,!0);Ao(()=>{po(s[e],i)},n)}function Pi(t,e,n=_e,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Un(),Nn(n);const a=Fe(e,n,t,o);return Gt(),Wn(),a});return s?i.unshift(r):i.push(r),r}}const gt=t=>(e,n=_e)=>(!fs||t==="sp")&&Pi(t,e,n),kf=gt("bm"),No=gt("m"),xf=gt("bu"),Pf=gt("u"),Gc=gt("bum"),Ao=gt("um"),Of=gt("sp"),Mf=gt("rtg"),Df=gt("rtc");function Lf(t,e=_e){Pi("ec",t,e)}let Or=!0;function Ff(t){const e=Qc(t),n=t.proxy,s=t.ctx;Or=!1,e.beforeCreate&&za(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:g,updated:I,activated:S,deactivated:N,beforeDestroy:U,beforeUnmount:oe,destroyed:J,unmounted:X,render:me,renderTracked:Ue,renderTriggered:V,errorCaptured:ae,serverPrefetch:ne,expose:Ae,inheritAttrs:ke,components:We,directives:cn,filters:ka}=e;if(c&&Uf(c,s,null,t.appContext.config.unwrapInjectedRef),o)for(const se in o){const Z=o[se];D(Z)&&(s[se]=Z.bind(n))}if(i){const se=i.call(n,n);fe(se)&&(t.data=Hn(se))}if(Or=!0,r)for(const se in r){const Z=r[se],ot=D(Z)?Z.bind(n,n):D(Z.get)?Z.get.bind(n,n):ze,nr=!D(Z)&&D(Z.set)?Z.set.bind(n):ze,Kn=_p({get:ot,set:nr});Object.defineProperty(s,se,{enumerable:!0,configurable:!0,get:()=>Kn.value,set:un=>Kn.value=un})}if(a)for(const se in a)Yc(a[se],s,n,se);if(l){const se=D(l)?l.call(n):l;Reflect.ownKeys(se).forEach(Z=>{zs(Z,se[Z])})}u&&za(u,t,"c");function Te(se,Z){M(Z)?Z.forEach(ot=>se(ot.bind(n))):Z&&se(Z.bind(n))}if(Te(kf,h),Te(No,f),Te(xf,g),Te(Pf,I),Te(Rf,S),Te(Nf,N),Te(Lf,ae),Te(Df,Ue),Te(Mf,V),Te(Gc,oe),Te(Ao,X),Te(Of,ne),M(Ae))if(Ae.length){const se=t.exposed||(t.exposed={});Ae.forEach(Z=>{Object.defineProperty(se,Z,{get:()=>n[Z],set:ot=>n[Z]=ot})})}else t.exposed||(t.exposed={});me&&t.render===ze&&(t.render=me),ke!=null&&(t.inheritAttrs=ke),We&&(t.components=We),cn&&(t.directives=cn)}function Uf(t,e,n=ze,s=!1){M(t)&&(t=Mr(t));for(const i in t){const r=t[i];let o;fe(r)?"default"in r?o=kt(r.from||i,r.default,!0):o=kt(r.from||i):o=kt(r),Ee(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function za(t,e,n){Fe(M(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Yc(t,e,n,s){const i=s.includes(".")?jc(n,s):()=>n[s];if(de(t)){const r=e[t];D(r)&&ar(i,r)}else if(D(t))ar(i,t.bind(n));else if(fe(t))if(M(t))t.forEach(r=>Yc(r,e,n,s));else{const r=D(t.handler)?t.handler.bind(n):e[t.handler];D(r)&&ar(i,r,t)}}function Qc(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>ni(l,c,o,!0)),ni(l,e,o)),r.set(e,l),l}function ni(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&ni(t,r,n,!0),i&&i.forEach(o=>ni(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Wf[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Wf={data:Ka,props:Wt,emits:Wt,methods:Wt,computed:Wt,beforeCreate:be,created:be,beforeMount:be,mounted:be,beforeUpdate:be,updated:be,beforeDestroy:be,beforeUnmount:be,destroyed:be,unmounted:be,activated:be,deactivated:be,errorCaptured:be,serverPrefetch:be,components:Wt,directives:Wt,watch:Bf,provide:Ka,inject:Hf};function Ka(t,e){return e?t?function(){return Ie(D(t)?t.call(this,this):t,D(e)?e.call(this,this):e)}:e:t}function Hf(t,e){return Wt(Mr(t),Mr(e))}function Mr(t){if(M(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function be(t,e){return t?[...new Set([].concat(t,e))]:e}function Wt(t,e){return t?Ie(Ie(Object.create(null),t),e):e}function Bf(t,e){if(!t)return e;if(!e)return t;const n=Ie(Object.create(null),t);for(const s in e)n[s]=be(t[s],e[s]);return n}function $f(t,e,n,s=!1){const i={},r={};Zs(r,Oi,1),t.propsDefaults=Object.create(null),Jc(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:tf(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function Vf(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=j(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(ki(t.emitsOptions,f))continue;const g=e[f];if(l)if(H(r,f))g!==r[f]&&(r[f]=g,c=!0);else{const I=Rn(f);i[I]=Dr(l,a,I,g,t,!1)}else g!==r[f]&&(r[f]=g,c=!0)}}}else{Jc(t,e,i,r)&&(c=!0);let u;for(const h in a)(!e||!H(e,h)&&((u=Fn(h))===h||!H(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=Dr(l,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!H(e,h)&&!0)&&(delete r[h],c=!0)}c&&ft(t,"set","$attrs")}function Jc(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(js(l))continue;const c=e[l];let u;i&&H(i,u=Rn(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:ki(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=j(n),c=a||G;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Dr(i,l,h,c[h],t,!H(c,h))}}return o}function Dr(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=H(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&D(l)){const{propsDefaults:c}=i;n in c?s=c[n]:(Nn(i),s=c[n]=l.call(null,e),Gt())}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===Fn(n))&&(s=!0))}return s}function Xc(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!D(t)){const u=h=>{l=!0;const[f,g]=Xc(h,e,!0);Ie(o,f),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return s.set(t,vn),vn;if(M(r))for(let u=0;u<r.length;u++){const h=Rn(r[u]);Ga(h)&&(o[h]=G)}else if(r)for(const u in r){const h=Rn(u);if(Ga(h)){const f=r[u],g=o[h]=M(f)||D(f)?{type:f}:f;if(g){const I=Ja(Boolean,g.type),S=Ja(String,g.type);g[0]=I>-1,g[1]=S<0||I<S,(I>-1||H(g,"default"))&&a.push(h)}}}const c=[o,a];return s.set(t,c),c}function Ga(t){return t[0]!=="$"}function Ya(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Qa(t,e){return Ya(t)===Ya(e)}function Ja(t,e){return M(e)?e.findIndex(n=>Qa(n,t)):D(e)&&Qa(e,t)?0:-1}const Zc=t=>t[0]==="_"||t==="$stable",ko=t=>M(t)?t.map(Ze):[Ze(t)],jf=(t,e,n)=>{const s=_f((...i)=>ko(e(...i)),n);return s._c=!1,s},eu=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Zc(i))continue;const r=t[i];if(D(r))e[i]=jf(i,r,s);else if(r!=null){const o=ko(r);e[i]=()=>o}}},tu=(t,e)=>{const n=ko(e);t.slots.default=()=>n},qf=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=j(e),Zs(e,"_",n)):eu(e,t.slots={})}else t.slots={},e&&tu(t,e);Zs(t.slots,Oi,1)},zf=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=G;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(Ie(i,e),!n&&a===1&&delete i._):(r=!e.$stable,eu(e,i)),o=e}else e&&(tu(t,e),o={default:1});if(r)for(const a in i)!Zc(a)&&!(a in o)&&delete i[a]};function Kf(t,e){const n=Ve;if(n===null)return t;const s=Mi(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,c=G]=e[r];D(o)&&(o={mounted:o,updated:o}),o.deep&&jt(a),i.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c})}return t}function Ft(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(Un(),Fe(l,n,8,[t.el,a,t,e]),Wn())}}function nu(){return{app:null,config:{isNativeTag:Id,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Gf=0;function Yf(t,e){return function(s,i=null){D(s)||(s=Object.assign({},s)),i!=null&&!fe(i)&&(i=null);const r=nu(),o=new Set;let a=!1;const l=r.app={_uid:Gf++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:gp,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&D(c.install)?(o.add(c),c.install(l,...u)):D(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const f=tt(s,i);return f.appContext=r,u&&e?e(f,c):t(f,c,h),a=!0,l._container=c,c.__vue_app__=l,Mi(f.component)||f.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l}};return l}}function Lr(t,e,n,s,i=!1){if(M(t)){t.forEach((f,g)=>Lr(f,e&&(M(e)?e[g]:e),n,s,i));return}if(Pr(s)&&!i)return;const r=s.shapeFlag&4?Mi(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===G?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(de(c)?(u[c]=null,H(h,c)&&(h[c]=null)):Ee(c)&&(c.value=null)),D(l))At(l,a,12,[o,u]);else{const f=de(l),g=Ee(l);if(f||g){const I=()=>{if(t.f){const S=f?u[l]:l.value;i?M(S)&&po(S,r):M(S)?S.includes(r)||S.push(r):f?(u[l]=[r],H(h,l)&&(h[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else f?(u[l]=o,H(h,l)&&(h[l]=o)):Ee(l)&&(l.value=o,t.k&&(u[t.k]=o))};o?(I.id=-1,Se(I,n)):I()}}}const Se=If;function Qf(t){return Jf(t)}function Jf(t,e){const n=Rd();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:g=ze,cloneNode:I,insertStaticContent:S}=t,N=(d,p,_,y=null,m=null,b=null,T=!1,C=null,w=!!p.dynamicChildren)=>{if(d===p)return;d&&!$t(d,p)&&(y=Ls(d),yt(d,m,b,!0),d=null),p.patchFlag===-2&&(w=!1,p.dynamicChildren=null);const{type:v,ref:A,shapeFlag:R}=p;switch(v){case xo:U(d,p,_,y);break;case Ke:oe(d,p,_,y);break;case Ks:d==null&&J(p,_,y,T);break;case ye:cn(d,p,_,y,m,b,T,C,w);break;default:R&1?Ue(d,p,_,y,m,b,T,C,w):R&6?ka(d,p,_,y,m,b,T,C,w):(R&64||R&128)&&v.process(d,p,_,y,m,b,T,C,w,hn)}A!=null&&m&&Lr(A,d&&d.ref,b,p||d,!p)},U=(d,p,_,y)=>{if(d==null)s(p.el=a(p.children),_,y);else{const m=p.el=d.el;p.children!==d.children&&c(m,p.children)}},oe=(d,p,_,y)=>{d==null?s(p.el=l(p.children||""),_,y):p.el=d.el},J=(d,p,_,y)=>{[d.el,d.anchor]=S(d.children,p,_,y,d.el,d.anchor)},X=({el:d,anchor:p},_,y)=>{let m;for(;d&&d!==p;)m=f(d),s(d,_,y),d=m;s(p,_,y)},me=({el:d,anchor:p})=>{let _;for(;d&&d!==p;)_=f(d),i(d),d=_;i(p)},Ue=(d,p,_,y,m,b,T,C,w)=>{T=T||p.type==="svg",d==null?V(p,_,y,m,b,T,C,w):Ae(d,p,m,b,T,C,w)},V=(d,p,_,y,m,b,T,C)=>{let w,v;const{type:A,props:R,shapeFlag:k,transition:P,patchFlag:B,dirs:te}=d;if(d.el&&I!==void 0&&B===-1)w=d.el=I(d.el);else{if(w=d.el=o(d.type,b,R&&R.is,R),k&8?u(w,d.children):k&16&&ne(d.children,w,null,y,m,b&&A!=="foreignObject",T,C),te&&Ft(d,null,y,"created"),R){for(const ee in R)ee!=="value"&&!js(ee)&&r(w,ee,null,R[ee],b,d.children,y,m,at);"value"in R&&r(w,"value",null,R.value),(v=R.onVnodeBeforeMount)&&Je(v,y,d)}ae(w,d,d.scopeId,T,y)}te&&Ft(d,null,y,"beforeMount");const z=(!m||m&&!m.pendingBranch)&&P&&!P.persisted;z&&P.beforeEnter(w),s(w,p,_),((v=R&&R.onVnodeMounted)||z||te)&&Se(()=>{v&&Je(v,y,d),z&&P.enter(w),te&&Ft(d,null,y,"mounted")},m)},ae=(d,p,_,y,m)=>{if(_&&g(d,_),y)for(let b=0;b<y.length;b++)g(d,y[b]);if(m){let b=m.subTree;if(p===b){const T=m.vnode;ae(d,T,T.scopeId,T.slotScopeIds,m.parent)}}},ne=(d,p,_,y,m,b,T,C,w=0)=>{for(let v=w;v<d.length;v++){const A=d[v]=C?Ct(d[v]):Ze(d[v]);N(null,A,p,_,y,m,b,T,C)}},Ae=(d,p,_,y,m,b,T)=>{const C=p.el=d.el;let{patchFlag:w,dynamicChildren:v,dirs:A}=p;w|=d.patchFlag&16;const R=d.props||G,k=p.props||G;let P;_&&Ut(_,!1),(P=k.onVnodeBeforeUpdate)&&Je(P,_,p,d),A&&Ft(p,d,_,"beforeUpdate"),_&&Ut(_,!0);const B=m&&p.type!=="foreignObject";if(v?ke(d.dynamicChildren,v,C,_,y,B,b):T||ot(d,p,C,null,_,y,B,b,!1),w>0){if(w&16)We(C,p,R,k,_,y,m);else if(w&2&&R.class!==k.class&&r(C,"class",null,k.class,m),w&4&&r(C,"style",R.style,k.style,m),w&8){const te=p.dynamicProps;for(let z=0;z<te.length;z++){const ee=te[z],He=R[ee],dn=k[ee];(dn!==He||ee==="value")&&r(C,ee,He,dn,m,d.children,_,y,at)}}w&1&&d.children!==p.children&&u(C,p.children)}else!T&&v==null&&We(C,p,R,k,_,y,m);((P=k.onVnodeUpdated)||A)&&Se(()=>{P&&Je(P,_,p,d),A&&Ft(p,d,_,"updated")},y)},ke=(d,p,_,y,m,b,T)=>{for(let C=0;C<p.length;C++){const w=d[C],v=p[C],A=w.el&&(w.type===ye||!$t(w,v)||w.shapeFlag&70)?h(w.el):_;N(w,v,A,null,y,m,b,T,!0)}},We=(d,p,_,y,m,b,T)=>{if(_!==y){for(const C in y){if(js(C))continue;const w=y[C],v=_[C];w!==v&&C!=="value"&&r(d,C,v,w,T,p.children,m,b,at)}if(_!==G)for(const C in _)!js(C)&&!(C in y)&&r(d,C,_[C],null,T,p.children,m,b,at);"value"in y&&r(d,"value",_.value,y.value)}},cn=(d,p,_,y,m,b,T,C,w)=>{const v=p.el=d?d.el:a(""),A=p.anchor=d?d.anchor:a("");let{patchFlag:R,dynamicChildren:k,slotScopeIds:P}=p;P&&(C=C?C.concat(P):P),d==null?(s(v,_,y),s(A,_,y),ne(p.children,_,A,m,b,T,C,w)):R>0&&R&64&&k&&d.dynamicChildren?(ke(d.dynamicChildren,k,_,m,b,T,C),(p.key!=null||m&&p===m.subTree)&&su(d,p,!0)):ot(d,p,_,A,m,b,T,C,w)},ka=(d,p,_,y,m,b,T,C,w)=>{p.slotScopeIds=C,d==null?p.shapeFlag&512?m.ctx.activate(p,_,y,T,w):tr(p,_,y,m,b,T,w):Te(d,p,w)},tr=(d,p,_,y,m,b,T)=>{const C=d.component=cp(d,y,m);if(xi(d)&&(C.ctx.renderer=hn),up(C),C.asyncDep){if(m&&m.registerDep(C,se),!d.el){const w=C.subTree=tt(Ke);oe(null,w,p,_)}return}se(C,d,p,_,m,b,T)},Te=(d,p,_)=>{const y=p.component=d.component;if(yf(d,p,_))if(y.asyncDep&&!y.asyncResolved){Z(y,p,_);return}else y.next=p,hf(y.update),y.update();else p.component=d.component,p.el=d.el,y.vnode=p},se=(d,p,_,y,m,b,T)=>{const C=()=>{if(d.isMounted){let{next:A,bu:R,u:k,parent:P,vnode:B}=d,te=A,z;Ut(d,!1),A?(A.el=B.el,Z(d,A,T)):A=B,R&&qs(R),(z=A.props&&A.props.onVnodeBeforeUpdate)&&Je(z,P,A,B),Ut(d,!0);const ee=or(d),He=d.subTree;d.subTree=ee,N(He,ee,h(He.el),Ls(He),d,m,b),A.el=ee.el,te===null&&vf(d,ee.el),k&&Se(k,m),(z=A.props&&A.props.onVnodeUpdated)&&Se(()=>Je(z,P,A,B),m)}else{let A;const{el:R,props:k}=p,{bm:P,m:B,parent:te}=d,z=Pr(p);if(Ut(d,!1),P&&qs(P),!z&&(A=k&&k.onVnodeBeforeMount)&&Je(A,te,p),Ut(d,!0),R&&ir){const ee=()=>{d.subTree=or(d),ir(R,d.subTree,d,m,null)};z?p.type.__asyncLoader().then(()=>!d.isUnmounted&&ee()):ee()}else{const ee=d.subTree=or(d);N(null,ee,_,y,d,m,b),p.el=ee.el}if(B&&Se(B,m),!z&&(A=k&&k.onVnodeMounted)){const ee=p;Se(()=>Je(A,te,ee),m)}p.shapeFlag&256&&d.a&&Se(d.a,m),d.isMounted=!0,p=_=y=null}},w=d.effect=new yo(C,()=>Fc(d.update),d.scope),v=d.update=w.run.bind(w);v.id=d.uid,Ut(d,!0),v()},Z=(d,p,_)=>{p.component=d;const y=d.vnode.props;d.vnode=p,d.next=null,Vf(d,p.props,y,_),zf(d,p.children,_),Un(),So(void 0,d.update),Wn()},ot=(d,p,_,y,m,b,T,C,w=!1)=>{const v=d&&d.children,A=d?d.shapeFlag:0,R=p.children,{patchFlag:k,shapeFlag:P}=p;if(k>0){if(k&128){Kn(v,R,_,y,m,b,T,C,w);return}else if(k&256){nr(v,R,_,y,m,b,T,C,w);return}}P&8?(A&16&&at(v,m,b),R!==v&&u(_,R)):A&16?P&16?Kn(v,R,_,y,m,b,T,C,w):at(v,m,b,!0):(A&8&&u(_,""),P&16&&ne(R,_,y,m,b,T,C,w))},nr=(d,p,_,y,m,b,T,C,w)=>{d=d||vn,p=p||vn;const v=d.length,A=p.length,R=Math.min(v,A);let k;for(k=0;k<R;k++){const P=p[k]=w?Ct(p[k]):Ze(p[k]);N(d[k],P,_,null,m,b,T,C,w)}v>A?at(d,m,b,!0,!1,R):ne(p,_,y,m,b,T,C,w,R)},Kn=(d,p,_,y,m,b,T,C,w)=>{let v=0;const A=p.length;let R=d.length-1,k=A-1;for(;v<=R&&v<=k;){const P=d[v],B=p[v]=w?Ct(p[v]):Ze(p[v]);if($t(P,B))N(P,B,_,null,m,b,T,C,w);else break;v++}for(;v<=R&&v<=k;){const P=d[R],B=p[k]=w?Ct(p[k]):Ze(p[k]);if($t(P,B))N(P,B,_,null,m,b,T,C,w);else break;R--,k--}if(v>R){if(v<=k){const P=k+1,B=P<A?p[P].el:y;for(;v<=k;)N(null,p[v]=w?Ct(p[v]):Ze(p[v]),_,B,m,b,T,C,w),v++}}else if(v>k)for(;v<=R;)yt(d[v],m,b,!0),v++;else{const P=v,B=v,te=new Map;for(v=B;v<=k;v++){const xe=p[v]=w?Ct(p[v]):Ze(p[v]);xe.key!=null&&te.set(xe.key,v)}let z,ee=0;const He=k-B+1;let dn=!1,Oa=0;const Gn=new Array(He);for(v=0;v<He;v++)Gn[v]=0;for(v=P;v<=R;v++){const xe=d[v];if(ee>=He){yt(xe,m,b,!0);continue}let Qe;if(xe.key!=null)Qe=te.get(xe.key);else for(z=B;z<=k;z++)if(Gn[z-B]===0&&$t(xe,p[z])){Qe=z;break}Qe===void 0?yt(xe,m,b,!0):(Gn[Qe-B]=v+1,Qe>=Oa?Oa=Qe:dn=!0,N(xe,p[Qe],_,null,m,b,T,C,w),ee++)}const Ma=dn?Xf(Gn):vn;for(z=Ma.length-1,v=He-1;v>=0;v--){const xe=B+v,Qe=p[xe],Da=xe+1<A?p[xe+1].el:y;Gn[v]===0?N(null,Qe,_,Da,m,b,T,C,w):dn&&(z<0||v!==Ma[z]?un(Qe,_,Da,2):z--)}}},un=(d,p,_,y,m=null)=>{const{el:b,type:T,transition:C,children:w,shapeFlag:v}=d;if(v&6){un(d.component.subTree,p,_,y);return}if(v&128){d.suspense.move(p,_,y);return}if(v&64){T.move(d,p,_,hn);return}if(T===ye){s(b,p,_);for(let R=0;R<w.length;R++)un(w[R],p,_,y);s(d.anchor,p,_);return}if(T===Ks){X(d,p,_);return}if(y!==2&&v&1&&C)if(y===0)C.beforeEnter(b),s(b,p,_),Se(()=>C.enter(b),m);else{const{leave:R,delayLeave:k,afterLeave:P}=C,B=()=>s(b,p,_),te=()=>{R(b,()=>{B(),P&&P()})};k?k(b,B,te):te()}else s(b,p,_)},yt=(d,p,_,y=!1,m=!1)=>{const{type:b,props:T,ref:C,children:w,dynamicChildren:v,shapeFlag:A,patchFlag:R,dirs:k}=d;if(C!=null&&Lr(C,null,_,d,!0),A&256){p.ctx.deactivate(d);return}const P=A&1&&k,B=!Pr(d);let te;if(B&&(te=T&&T.onVnodeBeforeUnmount)&&Je(te,p,d),A&6)pd(d.component,_,y);else{if(A&128){d.suspense.unmount(_,y);return}P&&Ft(d,null,p,"beforeUnmount"),A&64?d.type.remove(d,p,_,m,hn,y):v&&(b!==ye||R>0&&R&64)?at(v,p,_,!1,!0):(b===ye&&R&384||!m&&A&16)&&at(w,p,_),y&&xa(d)}(B&&(te=T&&T.onVnodeUnmounted)||P)&&Se(()=>{te&&Je(te,p,d),P&&Ft(d,null,p,"unmounted")},_)},xa=d=>{const{type:p,el:_,anchor:y,transition:m}=d;if(p===ye){fd(_,y);return}if(p===Ks){me(d);return}const b=()=>{i(_),m&&!m.persisted&&m.afterLeave&&m.afterLeave()};if(d.shapeFlag&1&&m&&!m.persisted){const{leave:T,delayLeave:C}=m,w=()=>T(_,b);C?C(d.el,b,w):w()}else b()},fd=(d,p)=>{let _;for(;d!==p;)_=f(d),i(d),d=_;i(p)},pd=(d,p,_)=>{const{bum:y,scope:m,update:b,subTree:T,um:C}=d;y&&qs(y),m.stop(),b&&(b.active=!1,yt(T,d,p,_)),C&&Se(C,p),Se(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},at=(d,p,_,y=!1,m=!1,b=0)=>{for(let T=b;T<d.length;T++)yt(d[T],p,_,y,m)},Ls=d=>d.shapeFlag&6?Ls(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),Pa=(d,p,_)=>{d==null?p._vnode&&yt(p._vnode,null,null,!0):N(p._vnode||null,d,p,null,null,null,_),Hc(),p._vnode=d},hn={p:N,um:yt,m:un,r:xa,mt:tr,mc:ne,pc:ot,pbc:ke,n:Ls,o:t};let sr,ir;return e&&([sr,ir]=e(hn)),{render:Pa,hydrate:sr,createApp:Yf(Pa,sr)}}function Ut({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function su(t,e,n=!1){const s=t.children,i=e.children;if(M(s)&&M(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=Ct(i[r]),a.el=o.el),n||su(o,a))}}function Xf(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const Zf=t=>t.__isTeleport,ep=Symbol(),ye=Symbol(void 0),xo=Symbol(void 0),Ke=Symbol(void 0),Ks=Symbol(void 0),rs=[];let Kt=null;function ve(t=!1){rs.push(Kt=t?null:[])}function tp(){rs.pop(),Kt=rs[rs.length-1]||null}let si=1;function Xa(t){si+=t}function iu(t){return t.dynamicChildren=si>0?Kt||vn:null,tp(),si>0&&Kt&&Kt.push(t),t}function je(t,e,n,s,i,r){return iu(et(t,e,n,s,i,r,!0))}function Ts(t,e,n,s,i){return iu(tt(t,e,n,s,i,!0))}function np(t){return t?t.__v_isVNode===!0:!1}function $t(t,e){return t.type===e.type&&t.key===e.key}const Oi="__vInternal",ru=({key:t})=>t!=null?t:null,Gs=({ref:t,ref_key:e,ref_for:n})=>t!=null?de(t)||Ee(t)||D(t)?{i:Ve,r:t,k:e,f:!!n}:t:null;function et(t,e=null,n=null,s=0,i=null,r=t===ye?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ru(e),ref:e&&Gs(e),scopeId:Vc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null};return a?(Po(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=de(n)?8:16),si>0&&!o&&Kt&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Kt.push(l),l}const tt=sp;function sp(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===ep)&&(t=Ke),np(t)){const a=Jt(t,e,!0);return n&&Po(a,n),a}if(pp(t)&&(t=t.__vccOpts),e){e=ip(e);let{class:a,style:l}=e;a&&!de(a)&&(e.class=wi(a)),fe(l)&&(Oc(l)&&!M(l)&&(l=Ie({},l)),e.style=uo(l))}const o=de(t)?1:Ef(t)?128:Zf(t)?64:fe(t)?4:D(t)?2:0;return et(t,e,n,s,i,o,r,!0)}function ip(t){return t?Oc(t)||Oi in t?Ie({},t):t:null}function Jt(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?rp(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&ru(a),ref:e&&e.ref?n&&i?M(i)?i.concat(Gs(e)):[i,Gs(e)]:Gs(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ye?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Jt(t.ssContent),ssFallback:t.ssFallback&&Jt(t.ssFallback),el:t.el,anchor:t.anchor}}function ou(t=" ",e=0){return tt(xo,null,t,e)}function ts(t="",e=!1){return e?(ve(),Ts(Ke,null,t)):tt(Ke,null,t)}function Ze(t){return t==null||typeof t=="boolean"?tt(Ke):M(t)?tt(ye,null,t.slice()):typeof t=="object"?Ct(t):tt(xo,null,String(t))}function Ct(t){return t.el===null||t.memo?t:Jt(t)}function Po(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(M(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Po(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Oi in e)?e._ctx=Ve:i===3&&Ve&&(Ve.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else D(e)?(e={default:e,_ctx:Ve},n=32):(e=String(e),s&64?(n=16,e=[ou(e)]):n=8);t.children=e,t.shapeFlag|=n}function rp(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=wi([e.class,s.class]));else if(i==="style")e.style=uo([e.style,s.style]);else if(Ti(i)){const r=e[i],o=s[i];o&&r!==o&&!(M(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function Je(t,e,n,s=null){Fe(t,e,7,[n,s])}function au(t,e,n,s){let i;const r=n&&n[s];if(M(t)||de(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(fe(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}const Fr=t=>t?cu(t)?Mi(t)||t.proxy:Fr(t.parent):null,ii=Ie(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Fr(t.parent),$root:t=>Fr(t.root),$emit:t=>t.emit,$options:t=>Qc(t),$forceUpdate:t=>()=>Fc(t.update),$nextTick:t=>cf.bind(t.proxy),$watch:t=>bf.bind(t)}),op={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(s!==G&&H(s,e))return o[e]=1,s[e];if(i!==G&&H(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&H(c,e))return o[e]=3,r[e];if(n!==G&&H(n,e))return o[e]=4,n[e];Or&&(o[e]=0)}}const u=ii[e];let h,f;if(u)return e==="$attrs"&&Me(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==G&&H(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,H(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return i!==G&&H(i,e)?(i[e]=n,!0):s!==G&&H(s,e)?(s[e]=n,!0):H(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==G&&H(t,o)||e!==G&&H(e,o)||(a=r[0])&&H(a,o)||H(s,o)||H(ii,o)||H(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:H(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},ap=nu();let lp=0;function cp(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||ap,r={uid:lp++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Nd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Xc(s,i),emitsOptions:$c(s,i),emit:null,emitted:null,propsDefaults:G,inheritAttrs:s.inheritAttrs,ctx:G,data:G,props:G,attrs:G,slots:G,refs:G,setupState:G,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=pf.bind(null,r),t.ce&&t.ce(r),r}let _e=null;const lu=()=>_e||Ve,Nn=t=>{_e=t,t.scope.on()},Gt=()=>{_e&&_e.scope.off(),_e=null};function cu(t){return t.vnode.shapeFlag&4}let fs=!1;function up(t,e=!1){fs=e;const{props:n,children:s}=t.vnode,i=cu(t);$f(t,n,i,e),qf(t,s);const r=i?hp(t,e):void 0;return fs=!1,r}function hp(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Mc(new Proxy(t.ctx,op));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?fp(t):null;Nn(t),Un();const r=At(s,t,0,[t.props,i]);if(Wn(),Gt(),mc(r)){if(r.then(Gt,Gt),e)return r.then(o=>{Za(t,o,e)}).catch(o=>{Ai(o,t,0)});t.asyncDep=r}else Za(t,r,e)}else uu(t,e)}function Za(t,e,n){D(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:fe(e)&&(t.setupState=Dc(e)),uu(t,n)}let el;function uu(t,e,n){const s=t.type;if(!t.render){if(!e&&el&&!s.render){const i=s.template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=Ie(Ie({isCustomElement:r,delimiters:a},o),l);s.render=el(i,c)}}t.render=s.render||ze}Nn(t),Un(),Ff(t),Wn(),Gt()}function dp(t){return new Proxy(t.attrs,{get(e,n){return Me(t,"get","$attrs"),e[n]}})}function fp(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=dp(t))},slots:t.slots,emit:t.emit,expose:e}}function Mi(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Dc(Mc(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ii)return ii[n](t)}}))}function pp(t){return D(t)&&"__vccOpts"in t}const _p=(t,e)=>af(t,e,fs),gp="3.2.33",mp="http://www.w3.org/2000/svg",Vt=typeof document!="undefined"?document:null,tl=Vt&&Vt.createElement("template"),yp={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?Vt.createElementNS(mp,t):Vt.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Vt.createTextNode(t),createComment:t=>Vt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Vt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{tl.innerHTML=s?`<svg>${t}</svg>`:t;const a=tl.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function vp(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Ep(t,e,n){const s=t.style,i=de(n);if(n&&!i){for(const r in n)Ur(s,r,n[r]);if(e&&!de(e))for(const r in e)n[r]==null&&Ur(s,r,"")}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const nl=/\s*!important$/;function Ur(t,e,n){if(M(n))n.forEach(s=>Ur(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Ip(t,e);nl.test(n)?t.setProperty(Fn(s),n.replace(nl,""),"important"):t[s]=n}}const sl=["Webkit","Moz","ms"],cr={};function Ip(t,e){const n=cr[e];if(n)return n;let s=Rn(e);if(s!=="filter"&&s in t)return cr[e]=s;s=Ec(s);for(let i=0;i<sl.length;i++){const r=sl[i]+s;if(r in t)return cr[e]=r}return e}const il="http://www.w3.org/1999/xlink";function Cp(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(il,e.slice(6,e.length)):t.setAttributeNS(il,e,n);else{const r=md(e);n==null||r&&!pc(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function bp(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n==null?"":n;(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=pc(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[hu,wp]=(()=>{let t=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(t=()=>performance.now());const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let Wr=0;const Tp=Promise.resolve(),Sp=()=>{Wr=0},Rp=()=>Wr||(Tp.then(Sp),Wr=hu());function gn(t,e,n,s){t.addEventListener(e,n,s)}function Np(t,e,n,s){t.removeEventListener(e,n,s)}function Ap(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=kp(e);if(s){const c=r[e]=xp(s,i);gn(t,a,c,l)}else o&&(Np(t,a,o,l),r[e]=void 0)}}const rl=/(?:Once|Passive|Capture)$/;function kp(t){let e;if(rl.test(t)){e={};let n;for(;n=t.match(rl);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[Fn(t.slice(2)),e]}function xp(t,e){const n=s=>{const i=s.timeStamp||hu();(wp||i>=n.attached-1)&&Fe(Pp(s,n.value),e,5,[s])};return n.value=t,n.attached=Rp(),n}function Pp(t,e){if(M(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const ol=/^on[a-z]/,Op=(t,e,n,s,i=!1,r,o,a,l)=>{e==="class"?vp(t,s,i):e==="style"?Ep(t,n,s):Ti(e)?fo(e)||Ap(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Mp(t,e,s,i))?bp(t,e,s,r,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Cp(t,e,s,i))};function Mp(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&ol.test(e)&&D(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||ol.test(e)&&de(n)?!1:e in t}function du(t){const e=lu();if(!e)return;const n=()=>Hr(e.subTree,t(e.proxy));Cf(n),No(()=>{const s=new MutationObserver(n);s.observe(e.subTree.el.parentNode,{childList:!0}),Ao(()=>s.disconnect())})}function Hr(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{Hr(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)al(t.el,e);else if(t.type===ye)t.children.forEach(n=>Hr(n,e));else if(t.type===Ks){let{el:n,anchor:s}=t;for(;n&&(al(n,e),n!==s);)n=n.nextSibling}}function al(t,e){if(t.nodeType===1){const n=t.style;for(const s in e)n.setProperty(`--${s}`,e[s])}}const Dp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Sf.props;const ll=t=>{const e=t.props["onUpdate:modelValue"];return M(e)?n=>qs(e,n):e};function Lp(t){t.target.composing=!0}function cl(t){const e=t.target;e.composing&&(e.composing=!1,Fp(e,"input"))}function Fp(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const Up={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t._assign=ll(i);const r=s||i.props&&i.props.type==="number";gn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n?a=a.trim():r&&(a=br(a)),t._assign(a)}),n&&gn(t,"change",()=>{t.value=t.value.trim()}),e||(gn(t,"compositionstart",Lp),gn(t,"compositionend",cl),gn(t,"change",cl))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t._assign=ll(r),t.composing||document.activeElement===t&&(n||s&&t.value.trim()===e||(i||t.type==="number")&&br(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},Wp=Ie({patchProp:Op},yp);let ul;function Hp(){return ul||(ul=Qf(Wp))}const Bp=(...t)=>{const e=Hp().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=$p(s);if(!i)return;const r=e._component;!D(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function $p(t){return de(t)?document.querySelector(t):t}/**
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
 */const fu={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const E=function(t,e){if(!t)throw Bn(e)},Bn=function(t){return new Error("Firebase Database ("+fu.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const pu=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Vp=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Oo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let f=(a&15)<<2|c>>6,g=c&63;l||(g=64,o||(f=64)),s.push(n[u],n[h],n[f],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(pu(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Vp(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw Error();const f=r<<2|a>>4;if(s.push(f),c!==64){const g=a<<4&240|c>>2;if(s.push(g),h!==64){const I=c<<6&192|h;s.push(I)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},_u=function(t){const e=pu(t);return Oo.encodeByteArray(e,!0)},gu=function(t){return _u(t).replace(/\./g,"")},Br=function(t){try{return Oo.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function jp(t){return mu(void 0,t)}function mu(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!qp(n)||(t[n]=mu(t[n],e[n]));return t}function qp(t){return t!=="__proto__"}/**
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
 */class Ss{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Ce(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Mo(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ce())}function zp(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function yu(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Kp(){const t=Ce();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function vu(){return fu.NODE_ADMIN===!0}function Gp(){return typeof indexedDB=="object"}function Yp(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const Qp="FirebaseError";class $n extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Qp,Object.setPrototypeOf(this,$n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Rs.prototype.create)}}class Rs{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Jp(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new $n(i,a,s)}}function Jp(t,e){return t.replace(Xp,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Xp=/\{\$([^}]+)}/g;/**
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
 */function ps(t){return JSON.parse(t)}function he(t){return JSON.stringify(t)}/**
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
 */const Eu=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=ps(Br(r[0])||""),n=ps(Br(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},Zp=function(t){const e=Eu(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},e_=function(t){const e=Eu(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function it(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function An(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function $r(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ri(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function oi(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(hl(r)&&hl(o)){if(!oi(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function hl(t){return t!==null&&typeof t=="object"}/**
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
 */function Vn(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class t_{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const f=(i<<5|i>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function n_(t,e){const n=new s_(t,e);return n.subscribe.bind(n)}class s_{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");i_(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=ur),i.error===void 0&&(i.error=ur),i.complete===void 0&&(i.complete=ur);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console!="undefined"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function i_(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ur(){}function Di(t,e){return`${t} failed: ${e} argument `}/**
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
 */const r_=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,E(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Li=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function rt(t){return t&&t._delegate?t._delegate:t}/**
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
 */function ns(t,e){return new Promise((n,s)=>{t.onsuccess=i=>{n(i.target.result)},t.onerror=i=>{var r;s(`${e}: ${(r=i.target.error)===null||r===void 0?void 0:r.message}`)}})}class dl{constructor(e){this._db=e,this.objectStoreNames=this._db.objectStoreNames}transaction(e,n="readonly"){return new Iu(this._db.transaction.call(this._db,e,n))}createObjectStore(e,n){return new Cu(this._db.createObjectStore(e,n))}close(){this._db.close()}}class Iu{constructor(e){this._transaction=e,this.complete=new Promise((n,s)=>{this._transaction.oncomplete=function(){n()},this._transaction.onerror=()=>{s(this._transaction.error)},this._transaction.onabort=()=>{s(this._transaction.error)}})}objectStore(e){return new Cu(this._transaction.objectStore(e))}}class Cu{constructor(e){this._store=e}index(e){return new fl(this._store.index(e))}createIndex(e,n,s){return new fl(this._store.createIndex(e,n,s))}get(e){const n=this._store.get(e);return ns(n,"Error reading from IndexedDB")}put(e,n){const s=this._store.put(e,n);return ns(s,"Error writing to IndexedDB")}delete(e){const n=this._store.delete(e);return ns(n,"Error deleting from IndexedDB")}clear(){const e=this._store.clear();return ns(e,"Error clearing IndexedDB object store")}}class fl{constructor(e){this._index=e}get(e){const n=this._index.get(e);return ns(n,"Error reading from IndexedDB")}}function o_(t,e,n){return new Promise((s,i)=>{try{const r=indexedDB.open(t,e);r.onsuccess=o=>{s(new dl(o.target.result))},r.onerror=o=>{var a;i(`Error opening indexedDB: ${(a=o.target.error)===null||a===void 0?void 0:a.message}`)},r.onupgradeneeded=o=>{n(new dl(r.result),o.oldVersion,o.newVersion,new Iu(r.transaction))}}catch(r){i(`Error opening indexedDB: ${r.message}`)}})}class Xt{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ht="[DEFAULT]";/**
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
 */class a_{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Ss;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(c_(e))try{this.getOrInitializeService({instanceIdentifier:Ht})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Ht){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ht){return this.instances.has(e)}getOptions(e=Ht){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:l_(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ht){return this.component?this.component.multipleInstances?e:Ht:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function l_(t){return t===Ht?void 0:t}function c_(t){return t.instantiationMode==="EAGER"}/**
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
 */class u_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new a_(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var K;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(K||(K={}));const h_={debug:K.DEBUG,verbose:K.VERBOSE,info:K.INFO,warn:K.WARN,error:K.ERROR,silent:K.SILENT},d_=K.INFO,f_={[K.DEBUG]:"log",[K.VERBOSE]:"log",[K.INFO]:"info",[K.WARN]:"warn",[K.ERROR]:"error"},p_=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=f_[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Do{constructor(e){this.name=e,this._logLevel=d_,this._logHandler=p_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in K))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?h_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,K.DEBUG,...e),this._logHandler(this,K.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,K.VERBOSE,...e),this._logHandler(this,K.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,K.INFO,...e),this._logHandler(this,K.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,K.WARN,...e),this._logHandler(this,K.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,K.ERROR,...e),this._logHandler(this,K.ERROR,...e)}}/**
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
 */class __{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(g_(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function g_(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Vr="@firebase/app",pl="0.7.22";/**
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
 */const Lo=new Do("@firebase/app"),m_="@firebase/app-compat",y_="@firebase/analytics-compat",v_="@firebase/analytics",E_="@firebase/app-check-compat",I_="@firebase/app-check",C_="@firebase/auth",b_="@firebase/auth-compat",w_="@firebase/database",T_="@firebase/database-compat",S_="@firebase/functions",R_="@firebase/functions-compat",N_="@firebase/installations",A_="@firebase/installations-compat",k_="@firebase/messaging",x_="@firebase/messaging-compat",P_="@firebase/performance",O_="@firebase/performance-compat",M_="@firebase/remote-config",D_="@firebase/remote-config-compat",L_="@firebase/storage",F_="@firebase/storage-compat",U_="@firebase/firestore",W_="@firebase/firestore-compat",H_="firebase",B_="9.7.0";/**
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
 */const bu="[DEFAULT]",$_={[Vr]:"fire-core",[m_]:"fire-core-compat",[v_]:"fire-analytics",[y_]:"fire-analytics-compat",[I_]:"fire-app-check",[E_]:"fire-app-check-compat",[C_]:"fire-auth",[b_]:"fire-auth-compat",[w_]:"fire-rtdb",[T_]:"fire-rtdb-compat",[S_]:"fire-fn",[R_]:"fire-fn-compat",[N_]:"fire-iid",[A_]:"fire-iid-compat",[k_]:"fire-fcm",[x_]:"fire-fcm-compat",[P_]:"fire-perf",[O_]:"fire-perf-compat",[M_]:"fire-rc",[D_]:"fire-rc-compat",[L_]:"fire-gcs",[F_]:"fire-gcs-compat",[U_]:"fire-fst",[W_]:"fire-fst-compat","fire-js":"fire-js",[H_]:"fire-js-all"};/**
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
 */const ai=new Map,jr=new Map;function V_(t,e){try{t.container.addComponent(e)}catch(n){Lo.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function kn(t){const e=t.name;if(jr.has(e))return Lo.debug(`There were multiple attempts to register component ${e}.`),!1;jr.set(e,t);for(const n of ai.values())V_(n,t);return!0}function Fo(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const j_={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},Zt=new Rs("app","Firebase",j_);/**
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
 */class q_{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Xt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Zt.create("app-deleted",{appName:this._name})}}/**
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
 */const Ns=B_;function z_(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:bu,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw Zt.create("bad-app-name",{appName:String(s)});const i=ai.get(s);if(i){if(oi(t,i.options)&&oi(n,i.config))return i;throw Zt.create("duplicate-app",{appName:s})}const r=new u_(s);for(const a of jr.values())r.addComponent(a);const o=new q_(t,n,r);return ai.set(s,o),o}function wu(t=bu){const e=ai.get(t);if(!e)throw Zt.create("no-app",{appName:t});return e}function xt(t,e,n){var s;let i=(s=$_[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Lo.warn(a.join(" "));return}kn(new Xt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const K_="firebase-heartbeat-database",G_=1,_s="firebase-heartbeat-store";let hr=null;function Tu(){return hr||(hr=o_(K_,G_,(t,e)=>{switch(e){case 0:t.createObjectStore(_s)}}).catch(t=>{throw Zt.create("storage-open",{originalErrorMessage:t.message})})),hr}async function Y_(t){try{return(await Tu()).transaction(_s).objectStore(_s).get(Su(t))}catch(e){throw Zt.create("storage-get",{originalErrorMessage:e.message})}}async function _l(t,e){try{const s=(await Tu()).transaction(_s,"readwrite");return await s.objectStore(_s).put(e,Su(t)),s.complete}catch(n){throw Zt.create("storage-set",{originalErrorMessage:n.message})}}function Su(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Q_=1024,J_=30*24*60*60*1e3;class X_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new eg(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=gl();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=J_}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=gl(),{heartbeatsToSend:n,unsentEntries:s}=Z_(this._heartbeatsCache.heartbeats),i=gu(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function gl(){return new Date().toISOString().substring(0,10)}function Z_(t,e=Q_){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),ml(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ml(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class eg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Gp()?Yp().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Y_(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return _l(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return _l(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ml(t){return gu(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function tg(t){kn(new Xt("platform-logger",e=>new __(e),"PRIVATE")),kn(new Xt("heartbeat",e=>new X_(e),"PRIVATE")),xt(Vr,pl,t),xt(Vr,pl,"esm2017"),xt("fire-js","")}tg("");var ng="firebase",sg="9.7.0";/**
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
 */xt(ng,sg,"app");function Uo(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function Ru(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ig=Ru,Nu=new Rs("auth","Firebase",Ru());/**
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
 */const yl=new Do("@firebase/auth");function Ys(t,...e){yl.logLevel<=K.ERROR&&yl.error(`Auth (${Ns}): ${t}`,...e)}/**
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
 */function pt(t,...e){throw Wo(t,...e)}function nt(t,...e){return Wo(t,...e)}function rg(t,e,n){const s=Object.assign(Object.assign({},ig()),{[e]:n});return new Rs("auth","Firebase",s).create(e,{appName:t.name})}function Wo(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Nu.create(t,...e)}function O(t,e,...n){if(!t)throw Wo(e,...n)}function ct(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ys(e),new Error(e)}function _t(t,e){t||ct(e)}/**
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
 */const vl=new Map;function ut(t){_t(t instanceof Function,"Expected a class definition");let e=vl.get(t);return e?(_t(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,vl.set(t,e),e)}/**
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
 */function og(t,e){const n=Fo(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(oi(r,e!=null?e:{}))return i;pt(i,"already-initialized")}return n.initialize({options:e})}function ag(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(ut);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function qr(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function lg(){return El()==="http:"||El()==="https:"}function El(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function cg(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(lg()||zp()||"connection"in navigator)?navigator.onLine:!0}function ug(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class As{constructor(e,n){this.shortDelay=e,this.longDelay=n,_t(n>e,"Short delay should be less than long delay!"),this.isMobile=Mo()||yu()}get(){return cg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ho(t,e){_t(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Au{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;ct("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;ct("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;ct("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const hg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const dg=new As(3e4,6e4);function ku(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Fi(t,e,n,s,i={}){return xu(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Vn(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Au.fetch()(Ou(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function xu(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},hg),e);try{const i=new fg(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw dr(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw dr(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw dr(t,"email-already-in-use",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw rg(t,u,c);pt(t,u)}}catch(i){if(i instanceof $n)throw i;pt(t,"network-request-failed")}}async function Pu(t,e,n,s,i={}){const r=await Fi(t,e,n,s,i);return"mfaPendingCredential"in r&&pt(t,"multi-factor-auth-required",{_serverResponse:r}),r}function Ou(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?Ho(t.config,i):`${t.config.apiScheme}://${i}`}class fg{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(nt(this.auth,"network-request-failed")),dg.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function dr(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=nt(t,e,s);return i.customData._tokenResponse=n,i}/**
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
 */async function pg(t,e){return Fi(t,"POST","/v1/accounts:delete",e)}async function _g(t,e){return Fi(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function os(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function gg(t,e=!1){const n=rt(t),s=await n.getIdToken(e),i=Bo(s);O(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:os(fr(i.auth_time)),issuedAtTime:os(fr(i.iat)),expirationTime:os(fr(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function fr(t){return Number(t)*1e3}function Bo(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Ys("JWT malformed, contained fewer than 3 sections"),null;try{const i=Br(n);return i?JSON.parse(i):(Ys("Failed to decode base64 JWT payload"),null)}catch(i){return Ys("Caught error parsing JWT payload as JSON",i),null}}function mg(t){const e=Bo(t);return O(e,"internal-error"),O(typeof e.exp!="undefined","internal-error"),O(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function gs(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof $n&&yg(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function yg({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class vg{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Mu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=os(this.lastLoginAt),this.creationTime=os(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function li(t){var e;const n=t.auth,s=await t.getIdToken(),i=await gs(t,_g(n,{idToken:s}));O(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Cg(r.providerUserInfo):[],a=Ig(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Mu(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function Eg(t){const e=rt(t);await li(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ig(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function Cg(t){return t.map(e=>{var{providerId:n}=e,s=Uo(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function bg(t,e){const n=await xu(t,{},async()=>{const s=Vn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=Ou(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Au.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class ms{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){O(e.idToken,"internal-error"),O(typeof e.idToken!="undefined","internal-error"),O(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):mg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return O(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await bg(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new ms;return s&&(O(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(O(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(O(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ms,this.toJSON())}_performRefresh(){return ct("not implemented")}}/**
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
 */function Et(t,e){O(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Yt{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=Uo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new vg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Mu(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await gs(this,this.stsTokenManager.getToken(this.auth,e));return O(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return gg(this,e)}reload(){return Eg(this)}_assign(e){this!==e&&(O(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Yt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){O(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await li(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await gs(this,pg(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,g=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,I=(o=n.photoURL)!==null&&o!==void 0?o:void 0,S=(a=n.tenantId)!==null&&a!==void 0?a:void 0,N=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,U=(c=n.createdAt)!==null&&c!==void 0?c:void 0,oe=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:J,emailVerified:X,isAnonymous:me,providerData:Ue,stsTokenManager:V}=n;O(J&&V,e,"internal-error");const ae=ms.fromJSON(this.name,V);O(typeof J=="string",e,"internal-error"),Et(h,e.name),Et(f,e.name),O(typeof X=="boolean",e,"internal-error"),O(typeof me=="boolean",e,"internal-error"),Et(g,e.name),Et(I,e.name),Et(S,e.name),Et(N,e.name),Et(U,e.name),Et(oe,e.name);const ne=new Yt({uid:J,auth:e,email:f,emailVerified:X,displayName:h,isAnonymous:me,photoURL:I,phoneNumber:g,tenantId:S,stsTokenManager:ae,createdAt:U,lastLoginAt:oe});return Ue&&Array.isArray(Ue)&&(ne.providerData=Ue.map(Ae=>Object.assign({},Ae))),N&&(ne._redirectEventId=N),ne}static async _fromIdTokenResponse(e,n,s=!1){const i=new ms;i.updateFromServerResponse(n);const r=new Yt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await li(r),r}}/**
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
 */class Du{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Du.type="NONE";const Il=Du;/**
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
 */function Qs(t,e,n){return`firebase:${t}:${e}:${n}`}class Cn{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Qs(this.userKey,i.apiKey,r),this.fullPersistenceKey=Qs("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Yt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Cn(ut(Il),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||ut(Il);const o=Qs(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=Yt._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Cn(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new Cn(r,e,s))}}/**
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
 */function Cl(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Uu(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Lu(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Hu(e))return"Blackberry";if(Bu(e))return"Webos";if($o(e))return"Safari";if((e.includes("chrome/")||Fu(e))&&!e.includes("edge/"))return"Chrome";if(Wu(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Lu(t=Ce()){return/firefox\//i.test(t)}function $o(t=Ce()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Fu(t=Ce()){return/crios\//i.test(t)}function Uu(t=Ce()){return/iemobile/i.test(t)}function Wu(t=Ce()){return/android/i.test(t)}function Hu(t=Ce()){return/blackberry/i.test(t)}function Bu(t=Ce()){return/webos/i.test(t)}function Ui(t=Ce()){return/iphone|ipad|ipod/i.test(t)}function wg(t=Ce()){var e;return Ui(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Tg(){return Kp()&&document.documentMode===10}function $u(t=Ce()){return Ui(t)||Wu(t)||Bu(t)||Hu(t)||/windows phone/i.test(t)||Uu(t)}function Sg(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Vu(t,e=[]){let n;switch(t){case"Browser":n=Cl(Ce());break;case"Worker":n=`${Cl(Ce())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ns}/${s}`}/**
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
 */class Rg{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new bl(this),this.idTokenSubscription=new bl(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Nu,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ut(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await Cn.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let s=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,r=s==null?void 0:s._redirectEventId,o=await this.tryRedirectSignIn(e);(!i||i===r)&&(o==null?void 0:o.user)&&(s=o.user)}return s?s._redirectEventId?(O(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)):this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await li(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ug()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?rt(e):null;return n&&O(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&O(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ut(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Rs("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ut(e)||this._popupRedirectResolver;O(n,this,"argument-error"),this.redirectPersistenceManager=await Cn.create(this,[ut(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return O(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return O(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Vu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Vo(t){return rt(t)}class bl{constructor(e){this.auth=e,this.observer=null,this.addObserver=n_(n=>this.observer=n)}get next(){return O(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class ju{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ct("not implemented")}_getIdTokenResponse(e){return ct("not implemented")}_linkToIdToken(e,n){return ct("not implemented")}_getReauthenticationResolver(e){return ct("not implemented")}}/**
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
 */async function bn(t,e){return Pu(t,"POST","/v1/accounts:signInWithIdp",ku(t,e))}/**
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
 */const Ng="http://localhost";class en extends ju{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new en(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):pt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=Uo(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new en(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return bn(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,bn(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,bn(e,n)}buildRequest(){const e={requestUri:Ng,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Vn(n)}return e}}/**
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
 */class qu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ks extends qu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class bt extends ks{constructor(){super("facebook.com")}static credential(e){return en._fromParams({providerId:bt.PROVIDER_ID,signInMethod:bt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bt.credentialFromTaggedObject(e)}static credentialFromError(e){return bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bt.credential(e.oauthAccessToken)}catch{return null}}}bt.FACEBOOK_SIGN_IN_METHOD="facebook.com";bt.PROVIDER_ID="facebook.com";/**
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
 */class wt extends ks{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return en._fromParams({providerId:wt.PROVIDER_ID,signInMethod:wt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return wt.credentialFromTaggedObject(e)}static credentialFromError(e){return wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return wt.credential(n,s)}catch{return null}}}wt.GOOGLE_SIGN_IN_METHOD="google.com";wt.PROVIDER_ID="google.com";/**
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
 */class Tt extends ks{constructor(){super("github.com")}static credential(e){return en._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tt.credentialFromTaggedObject(e)}static credentialFromError(e){return Tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tt.credential(e.oauthAccessToken)}catch{return null}}}Tt.GITHUB_SIGN_IN_METHOD="github.com";Tt.PROVIDER_ID="github.com";/**
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
 */class St extends ks{constructor(){super("twitter.com")}static credential(e,n){return en._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return St.credentialFromTaggedObject(e)}static credentialFromError(e){return St.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return St.credential(n,s)}catch{return null}}}St.TWITTER_SIGN_IN_METHOD="twitter.com";St.PROVIDER_ID="twitter.com";/**
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
 */async function Ag(t,e){return Pu(t,"POST","/v1/accounts:signUp",ku(t,e))}/**
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
 */class Mt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await Yt._fromIdTokenResponse(e,s,i),o=wl(s);return new Mt({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=wl(s);return new Mt({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function wl(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function kg(t){var e;const n=Vo(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Mt({user:n.currentUser,providerId:null,operationType:"signIn"});const s=await Ag(n,{returnSecureToken:!0}),i=await Mt._fromIdTokenResponse(n,"signIn",s,!0);return await n._updateCurrentUser(i.user),i}/**
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
 */class ci extends $n{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,ci.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new ci(e,n,s,i)}}function zu(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?ci._fromErrorAndOperation(t,r,e,s):r})}async function xg(t,e,n=!1){const s=await gs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Mt._forOperation(t,"link",s)}/**
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
 */async function Pg(t,e,n=!1){const{auth:s}=t,i="reauthenticate";try{const r=await gs(t,zu(s,i,e,t),n);O(r.idToken,s,"internal-error");const o=Bo(r.idToken);O(o,s,"internal-error");const{sub:a}=o;return O(t.uid===a,s,"user-mismatch"),Mt._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&pt(s,"user-mismatch"),r}}/**
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
 */async function Og(t,e,n=!1){const s="signIn",i=await zu(t,s,e),r=await Mt._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}function Mg(t,e,n,s){return rt(t).onAuthStateChanged(e,n,s)}const ui="__sak";/**
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
 */class Ku{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ui,"1"),this.storage.removeItem(ui),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Dg(){const t=Ce();return $o(t)||Ui(t)}const Lg=1e3,Fg=10;class Gu extends Ku{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Dg()&&Sg(),this.fallbackToPolling=$u(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);Tg()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Fg):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},Lg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Gu.type="LOCAL";const Ug=Gu;/**
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
 */class Yu extends Ku{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Yu.type="SESSION";const Qu=Yu;/**
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
 */function Wg(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Wi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new Wi(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await Wg(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Wi.receivers=[];/**
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
 */function jo(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Hg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=jo("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const f=h;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(f.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function st(){return window}function Bg(t){st().location.href=t}/**
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
 */function Ju(){return typeof st().WorkerGlobalScope!="undefined"&&typeof st().importScripts=="function"}async function $g(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Vg(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function jg(){return Ju()?self:null}/**
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
 */const Xu="firebaseLocalStorageDb",qg=1,hi="firebaseLocalStorage",Zu="fbase_key";class xs{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Hi(t,e){return t.transaction([hi],e?"readwrite":"readonly").objectStore(hi)}function zg(){const t=indexedDB.deleteDatabase(Xu);return new xs(t).toPromise()}function zr(){const t=indexedDB.open(Xu,qg);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(hi,{keyPath:Zu})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(hi)?e(s):(s.close(),await zg(),e(await zr()))})})}async function Tl(t,e,n){const s=Hi(t,!0).put({[Zu]:e,value:n});return new xs(s).toPromise()}async function Kg(t,e){const n=Hi(t,!1).get(e),s=await new xs(n).toPromise();return s===void 0?null:s.value}function Sl(t,e){const n=Hi(t,!0).delete(e);return new xs(n).toPromise()}const Gg=800,Yg=3;class eh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await zr(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>Yg)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ju()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Wi._getInstance(jg()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await $g(),!this.activeServiceWorker)return;this.sender=new Hg(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Vg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await zr();return await Tl(e,ui,"1"),await Sl(e,ui),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Tl(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>Kg(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Sl(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Hi(i,!1).getAll();return new xs(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Gg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}eh.type="LOCAL";const Qg=eh;/**
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
 */function Jg(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Xg(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=nt("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",Jg().appendChild(s)})}function Zg(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new As(3e4,6e4);/**
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
 */function em(t,e){return e?ut(e):(O(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class qo extends ju{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return bn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return bn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return bn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function tm(t){return Og(t.auth,new qo(t),t.bypassAuthState)}function nm(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),Pg(n,new qo(t),t.bypassAuthState)}async function sm(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),xg(n,new qo(t),t.bypassAuthState)}/**
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
 */class th{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return tm;case"linkViaPopup":case"linkViaRedirect":return sm;case"reauthViaPopup":case"reauthViaRedirect":return nm;default:pt(this.auth,"internal-error")}}resolve(e){_t(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){_t(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const im=new As(2e3,1e4);class mn extends th{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,mn.currentPopupAction&&mn.currentPopupAction.cancel(),mn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return O(e,this.auth,"internal-error"),e}async onExecution(){_t(this.filter.length===1,"Popup operations only handle one event");const e=jo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(nt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(nt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,mn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,im.get())};e()}}mn.currentPopupAction=null;/**
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
 */const rm="pendingRedirect",pr=new Map;class om extends th{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=pr.get(this.auth._key());if(!e){try{const s=await am(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}pr.set(this.auth._key(),e)}return this.bypassAuthState||pr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function am(t,e){const n=cm(e),s=lm(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function lm(t){return ut(t._redirectPersistence)}function cm(t){return Qs(rm,t.config.apiKey,t.name)}async function um(t,e,n=!1){const s=Vo(t),i=em(s,e),o=await new om(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const hm=10*60*1e3;class dm{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!fm(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!nh(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(nt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=hm&&this.cachedEventUids.clear(),this.cachedEventUids.has(Rl(e))}saveEventToCache(e){this.cachedEventUids.add(Rl(e)),this.lastProcessedEventTime=Date.now()}}function Rl(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function nh({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function fm(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return nh(t);default:return!1}}/**
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
 */async function pm(t,e={}){return Fi(t,"GET","/v1/projects",e)}/**
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
 */const _m=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,gm=/^https?/;async function mm(t){if(t.config.emulator)return;const{authorizedDomains:e}=await pm(t);for(const n of e)try{if(ym(n))return}catch{}pt(t,"unauthorized-domain")}function ym(t){const e=qr(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!gm.test(n))return!1;if(_m.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const vm=new As(3e4,6e4);function Nl(){const t=st().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Em(t){return new Promise((e,n)=>{var s,i,r;function o(){Nl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Nl(),n(nt(t,"network-request-failed"))},timeout:vm.get()})}if(!((i=(s=st().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=st().gapi)===null||r===void 0)&&r.load)o();else{const a=Zg("iframefcb");return st()[a]=()=>{gapi.load?o():n(nt(t,"network-request-failed"))},Xg(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Js=null,e})}let Js=null;function Im(t){return Js=Js||Em(t),Js}/**
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
 */const Cm=new As(5e3,15e3),bm="__/auth/iframe",wm="emulator/auth/iframe",Tm={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Sm=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Rm(t){const e=t.config;O(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ho(e,wm):`https://${t.config.authDomain}/${bm}`,s={apiKey:e.apiKey,appName:t.name,v:Ns},i=Sm.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${Vn(s).slice(1)}`}async function Nm(t){const e=await Im(t),n=st().gapi;return O(n,t,"internal-error"),e.open({where:document.body,url:Rm(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Tm,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=nt(t,"network-request-failed"),a=st().setTimeout(()=>{r(o)},Cm.get());function l(){st().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const Am={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},km=500,xm=600,Pm="_blank",Om="http://localhost";class Al{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Mm(t,e,n,s=km,i=xm){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Am),{width:s.toString(),height:i.toString(),top:r,left:o}),c=Ce().toLowerCase();n&&(a=Fu(c)?Pm:n),Lu(c)&&(e=e||Om,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[g,I])=>`${f}${g}=${I},`,"");if(wg(c)&&a!=="_self")return Dm(e||"",a),new Al(null);const h=window.open(e||"",a,u);O(h,t,"popup-blocked");try{h.focus()}catch{}return new Al(h)}function Dm(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const Lm="__/auth/handler",Fm="emulator/auth/handler";function kl(t,e,n,s,i,r){O(t.config.authDomain,t,"auth-domain-config-required"),O(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Ns,eventId:i};if(e instanceof qu){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",$r(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(r||{}))o[l]=c}if(e instanceof ks){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${Um(t)}?${Vn(a).slice(1)}`}function Um({config:t}){return t.emulator?Ho(t,Fm):`https://${t.authDomain}/${Lm}`}/**
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
 */const _r="webStorageSupport";class Wm{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Qu,this._completeRedirectFn=um}async _openPopup(e,n,s,i){var r;_t((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=kl(e,n,s,qr(),i);return Mm(e,o,jo())}async _openRedirect(e,n,s,i){return await this._originValidation(e),Bg(kl(e,n,s,qr(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(_t(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await Nm(e),s=new dm(e);return n.register("authEvent",i=>(O(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(_r,{type:_r},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[_r];o!==void 0&&n(!!o),pt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=mm(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return $u()||$o()||Ui()}}const Hm=Wm;var xl="@firebase/auth",Pl="0.19.12";/**
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
 */class Bm{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{var i;e(((i=s)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){O(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function $m(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Vm(t){kn(new Xt("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=s.options;return((a,l)=>{O(r&&!r.includes(":"),"invalid-api-key",{appName:a.name}),O(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:r,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Vu(t)},u=new Rg(a,l,c);return ag(u,n),u})(s,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),kn(new Xt("auth-internal",e=>{const n=Vo(e.getProvider("auth").getImmediate());return(s=>new Bm(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),xt(xl,Pl,$m(t)),xt(xl,Pl,"esm2017")}/**
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
 */function jm(t=wu()){const e=Fo(t,"auth");return e.isInitialized()?e.getImmediate():og(t,{popupRedirectResolver:Hm,persistence:[Qg,Ug,Qu]})}Vm("Browser");const Ol="@firebase/database",Ml="0.12.8";/**
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
 */let sh="";function qm(t){sh=t}/**
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
 */class zm{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),he(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ps(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Km{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return it(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const ih=function(t){try{if(typeof window!="undefined"&&typeof window[t]!="undefined"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new zm(e)}}catch{}return new Km},qt=ih("localStorage"),Kr=ih("sessionStorage");/**
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
 */const wn=new Do("@firebase/database"),Gm=function(){let t=1;return function(){return t++}}(),rh=function(t){const e=r_(t),n=new t_;n.update(e);const s=n.digest();return Oo.encodeByteArray(s)},Ps=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Ps.apply(null,s):typeof s=="object"?e+=he(s):e+=s,e+=" "}return e};let Qt=null,Dl=!0;const Ym=function(t,e){E(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(wn.logLevel=K.VERBOSE,Qt=wn.log.bind(wn),e&&Kr.set("logging_enabled",!0)):typeof t=="function"?Qt=t:(Qt=null,Kr.remove("logging_enabled"))},pe=function(...t){if(Dl===!0&&(Dl=!1,Qt===null&&Kr.get("logging_enabled")===!0&&Ym(!0)),Qt){const e=Ps.apply(null,t);Qt(e)}},Os=function(t){return function(...e){pe(t,...e)}},Gr=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ps(...t);wn.error(e)},tn=function(...t){const e=`FIREBASE FATAL ERROR: ${Ps(...t)}`;throw wn.error(e),new Error(e)},we=function(...t){const e="FIREBASE WARNING: "+Ps(...t);wn.warn(e)},Qm=function(){typeof window!="undefined"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&we("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},zo=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Jm=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},xn="[MIN_NAME]",nn="[MAX_NAME]",an=function(t,e){if(t===e)return 0;if(t===xn||e===nn)return-1;if(e===xn||t===nn)return 1;{const n=Ll(t),s=Ll(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},Xm=function(t,e){return t===e?0:t<e?-1:1},Yn=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+he(e))},Ko=function(t){if(typeof t!="object"||t===null)return he(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=he(e[s]),n+=":",n+=Ko(t[e[s]]);return n+="}",n},oh=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function ge(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const ah=function(t){E(!zo(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let f=parseInt(u.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},Zm=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},ey=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function ty(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const ny=new RegExp("^-?(0*)\\d{1,10}$"),sy=-2147483648,iy=2147483647,Ll=function(t){if(ny.test(t)){const e=Number(t);if(e>=sy&&e<=iy)return e}return null},jn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw we("Exception was thrown by user callback.",n),e},Math.floor(0))}},ry=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},as=function(t,e){const n=setTimeout(t,e);return typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class oy{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){we(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class ay{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(pe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',we(e)}}class Yr{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Yr.OWNER="owner";/**
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
 */const Go="5",lh="v",ch="s",uh="r",hh="f",dh=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,fh="ls",ly="p",Qr="ac",ph="websocket",_h="long_polling";/**
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
 */class cy{constructor(e,n,s,i,r=!1,o="",a=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=qt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&qt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function uy(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function gh(t,e,n){E(typeof e=="string","typeof type must == string"),E(typeof n=="object","typeof params must == object");let s;if(e===ph)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===_h)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);uy(t)&&(n.ns=t.namespace);const i=[];return ge(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class hy{constructor(){this.counters_={}}incrementCounter(e,n=1){it(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return jp(this.counters_)}}/**
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
 */const gr={},mr={};function Yo(t){const e=t.toString();return gr[e]||(gr[e]=new hy),gr[e]}function dy(t,e){const n=t.toString();return mr[n]||(mr[n]=e()),mr[n]}/**
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
 */class fy{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&jn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Fl="start",py="close",_y="pLPCommand",gy="pRTLPCB",mh="id",yh="pw",vh="ser",my="cb",yy="seg",vy="ts",Ey="d",Iy="dframe",Eh=1870,Ih=30,Cy=Eh-Ih,by=25e3,wy=3e4;class yn{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Os(e),this.stats_=Yo(n),this.urlFn=l=>(this.appCheckToken&&(l[Qr]=this.appCheckToken),gh(n,_h,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new fy(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(wy)),Jm(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Qo((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Fl)this.id=a,this.password=l;else if(o===py)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Fl]="t",s[vh]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[my]=this.scriptTagHolder.uniqueCallbackIdentifier),s[lh]=Go,this.transportSessionId&&(s[ch]=this.transportSessionId),this.lastSessionId&&(s[fh]=this.lastSessionId),this.applicationId&&(s[ly]=this.applicationId),this.appCheckToken&&(s[Qr]=this.appCheckToken),typeof location!="undefined"&&location.hostname&&dh.test(location.hostname)&&(s[uh]=hh);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){yn.forceAllow_=!0}static forceDisallow(){yn.forceDisallow_=!0}static isAvailable(){return yn.forceAllow_?!0:!yn.forceDisallow_&&typeof document!="undefined"&&document.createElement!=null&&!Zm()&&!ey()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=he(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=_u(n),i=oh(s,Cy);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[Iy]="t",s[mh]=e,s[yh]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=he(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Qo{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Gm(),window[_y+this.uniqueCallbackIdentifier]=e,window[gy+this.uniqueCallbackIdentifier]=n,this.myIFrame=Qo.createIFrame_();let r="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const a=document.domain;r='<script>document.domain="'+a+'";<\/script>'}const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){pe("frame writing exception"),a.stack&&pe(a.stack),pe(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||pe("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[mh]=this.myID,e[yh]=this.myPW,e[vh]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Ih+s.length<=Eh;){const o=this.pendingSegs.shift();s=s+"&"+yy+i+"="+o.seg+"&"+vy+i+"="+o.ts+"&"+Ey+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(by)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{pe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const Ty=16384,Sy=45e3;let di=null;typeof MozWebSocket!="undefined"?di=MozWebSocket:typeof WebSocket!="undefined"&&(di=WebSocket);class $e{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Os(this.connId),this.stats_=Yo(n),this.connURL=$e.connectionURL_(n,o,a,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i){const r={};return r[lh]=Go,typeof location!="undefined"&&location.hostname&&dh.test(location.hostname)&&(r[uh]=hh),n&&(r[ch]=n),s&&(r[fh]=s),i&&(r[Qr]=i),gh(e,ph,r)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,qt.set("previous_websocket_failure",!0);try{if(!vu()){const s={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new di(this.connURL,[],s)}}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){$e.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator!="undefined"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&di!==null&&!$e.forceDisallow_}static previouslyFailed(){return qt.isInMemoryStorage||qt.get("previous_websocket_failure")===!0}markConnectionHealthy(){qt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=ps(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(E(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=he(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=oh(n,Ty);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Sy))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}$e.responsesRequiredToBeHealthy=2;$e.healthyTimeout=3e4;/**
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
 */class Jo{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[yn,$e]}initTransports_(e){const n=$e&&$e.isAvailable();let s=n&&!$e.previouslyFailed();if(e.webSocketOnly&&(n||we("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[$e];else{const i=this.transports_=[];for(const r of Jo.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r)}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}/**
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
 */const Ry=6e4,Ny=5e3,Ay=10*1024,ky=100*1024,yr="t",Ul="d",xy="s",Wl="r",Py="e",Hl="o",Bl="a",$l="n",Vl="p",Oy="h";class My{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Os("c:"+this.id+":"),this.transportManager_=new Jo(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=as(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>ky?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Ay?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(yr in e){const n=e[yr];n===Bl?this.upgradeIfSecondaryHealthy_():n===Wl?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Hl&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Yn("t",e),s=Yn("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Vl,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Bl,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:$l,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Yn("t",e),s=Yn("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Yn(yr,e);if(Ul in e){const s=e[Ul];if(n===Oy)this.onHandshake_(s);else if(n===$l){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===xy?this.onConnectionShutdown_(s):n===Wl?this.onReset_(s):n===Py?Gr("Server Error: "+s):n===Hl?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Gr("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Go!==s&&we("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),as(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Ry))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):as(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Ny))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Vl,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(qt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Ch{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class bh{constructor(e){this.allowedEvents_=e,this.listeners_={},E(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){E(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class fi extends bh{constructor(){super(["online"]),this.online_=!0,typeof window!="undefined"&&typeof window.addEventListener!="undefined"&&!Mo()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new fi}getInitialEvent(e){return E(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const jl=32,ql=768;class q{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function $(){return new q("")}function L(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Dt(t){return t.pieces_.length-t.pieceNum_}function Q(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new q(t.pieces_,e)}function Xo(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Dy(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function ys(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function wh(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new q(e,0)}function ie(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof q)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new q(n,0)}function W(t){return t.pieceNum_>=t.pieces_.length}function Re(t,e){const n=L(t),s=L(e);if(n===null)return e;if(n===s)return Re(Q(t),Q(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Ly(t,e){const n=ys(t,0),s=ys(e,0);for(let i=0;i<n.length&&i<s.length;i++){const r=an(n[i],s[i]);if(r!==0)return r}return n.length===s.length?0:n.length<s.length?-1:1}function Zo(t,e){if(Dt(t)!==Dt(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Le(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Dt(t)>Dt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class Fy{constructor(e,n){this.errorPrefix_=n,this.parts_=ys(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Li(this.parts_[s]);Th(this)}}function Uy(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Li(e),Th(t)}function Wy(t){const e=t.parts_.pop();t.byteLength_-=Li(e),t.parts_.length>0&&(t.byteLength_-=1)}function Th(t){if(t.byteLength_>ql)throw new Error(t.errorPrefix_+"has a key path longer than "+ql+" bytes ("+t.byteLength_+").");if(t.parts_.length>jl)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+jl+") or object contains a cycle "+Bt(t))}function Bt(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class ea extends bh{constructor(){super(["visible"]);let e,n;typeof document!="undefined"&&typeof document.addEventListener!="undefined"&&(typeof document.hidden!="undefined"?(n="visibilitychange",e="hidden"):typeof document.mozHidden!="undefined"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden!="undefined"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden!="undefined"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new ea}getInitialEvent(e){return E(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Qn=1e3,Hy=60*5*1e3,By=3*1e3,zl=30*1e3,$y=1.3,Vy=3e4,jy="server_kill",Kl=3;class dt extends Ch{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=dt.nextPersistentConnectionId_++,this.log_=Os("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Qn,this.maxReconnectDelay_=Hy,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!vu())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ea.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&fi.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(he(r)),E(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Ss,s={p:e._path.toString(),q:e._queryObject},i={action:"g",request:s,onComplete:o=>{const a=o.d;o.s==="ok"?(this.onDataUpdate_(s.p,a,!1,null),n.resolve(a)):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_||setTimeout(()=>{const o=this.outstandingGets_[r];o===void 0||i!==o||(delete this.outstandingGets_[r],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),this.log_("get "+r+" timed out on connection"),n.reject(new Error("Client is offline.")))},By),this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),E(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;dt.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&it(e,"w")){const s=An(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();we(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||e_(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=zl)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Zp(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+he(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Gr("Unrecognized action received from server: "+he(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){E(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Qn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Qn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Vy&&(this.reconnectDelay_=Qn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*$y)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+dt.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){E(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?pe("getToken() completed but was canceled"):(pe("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,a=new My(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,g=>{we(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(jy)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&we(h),l())}}}interrupt(e){pe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){pe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],$r(this.interruptReasons_)&&(this.reconnectDelay_=Qn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Ko(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new q(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){pe("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Kl&&(this.reconnectDelay_=zl,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){pe("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Kl&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+sh.replace(/\./g,"-")]=1,Mo()?e["framework.cordova"]=1:yu()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=fi.getInstance().currentlyOnline();return $r(this.interruptReasons_)&&e}}dt.nextPersistentConnectionId_=0;dt.nextConnectionId_=0;/**
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
 */class F{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new F(e,n)}}/**
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
 */class Bi{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new F(xn,e),i=new F(xn,n);return this.compare(s,i)!==0}minPost(){return F.MIN}}/**
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
 */let $s;class Sh extends Bi{static get __EMPTY_NODE(){return $s}static set __EMPTY_NODE(e){$s=e}compare(e,n){return an(e.name,n.name)}isDefinedOn(e){throw Bn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return F.MIN}maxPost(){return new F(nn,$s)}makePost(e,n){return E(typeof e=="string","KeyIndex indexValue must always be a string."),new F(e,$s)}toString(){return".key"}}const Tn=new Sh;/**
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
 */class Vs{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ce{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s!=null?s:ce.RED,this.left=i!=null?i:Ne.EMPTY_NODE,this.right=r!=null?r:Ne.EMPTY_NODE}copy(e,n,s,i,r){return new ce(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ne.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Ne.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ce.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ce.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ce.RED=!0;ce.BLACK=!1;class qy{copy(e,n,s,i,r){return this}insert(e,n,s){return new ce(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ne{constructor(e,n=Ne.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ne(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ce.BLACK,null,null))}remove(e){return new Ne(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ce.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Vs(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Vs(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Vs(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Vs(this.root_,null,this.comparator_,!0,e)}}Ne.EMPTY_NODE=new qy;/**
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
 */function zy(t,e){return an(t.name,e.name)}function ta(t,e){return an(t,e)}/**
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
 */let Jr;function Ky(t){Jr=t}const Rh=function(t){return typeof t=="number"?"number:"+ah(t):"string:"+t},Nh=function(t){if(t.isLeafNode()){const e=t.val();E(typeof e=="string"||typeof e=="number"||typeof e=="object"&&it(e,".sv"),"Priority must be a string or number.")}else E(t===Jr||t.isEmpty(),"priority of unexpected type.");E(t===Jr||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Gl;class le{constructor(e,n=le.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,E(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Nh(this.priorityNode_)}static set __childrenNodeConstructor(e){Gl=e}static get __childrenNodeConstructor(){return Gl}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new le(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:le.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return W(e)?this:L(e)===".priority"?this.priorityNode_:le.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:le.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=L(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(E(s!==".priority"||Dt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,le.__childrenNodeConstructor.EMPTY_NODE.updateChild(Q(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Rh(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=ah(this.value_):e+=this.value_,this.lazyHash_=rh(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===le.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof le.__childrenNodeConstructor?-1:(E(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=le.VALUE_TYPE_ORDER.indexOf(n),r=le.VALUE_TYPE_ORDER.indexOf(s);return E(i>=0,"Unknown leaf type: "+n),E(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}le.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Ah,kh;function Gy(t){Ah=t}function Yy(t){kh=t}class Qy extends Bi{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?an(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return F.MIN}maxPost(){return new F(nn,new le("[PRIORITY-POST]",kh))}makePost(e,n){const s=Ah(e);return new F(n,new le("[PRIORITY-POST]",s))}toString(){return".priority"}}const re=new Qy;/**
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
 */const Jy=Math.log(2);class Xy{constructor(e){const n=r=>parseInt(Math.log(r)/Jy,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const pi=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let h,f;if(u===0)return null;if(u===1)return h=t[l],f=n?n(h):h,new ce(f,h.node,ce.BLACK,null,null);{const g=parseInt(u/2,10)+l,I=i(l,g),S=i(g+1,c);return h=t[g],f=n?n(h):h,new ce(f,h.node,ce.BLACK,I,S)}},r=function(l){let c=null,u=null,h=t.length;const f=function(I,S){const N=h-I,U=h;h-=I;const oe=i(N+1,U),J=t[N],X=n?n(J):J;g(new ce(X,J.node,S,null,oe))},g=function(I){c?(c.left=I,c=I):(u=I,c=I)};for(let I=0;I<l.count;++I){const S=l.nextBitIsOne(),N=Math.pow(2,l.count-(I+1));S?f(N,ce.BLACK):(f(N,ce.BLACK),f(N,ce.RED))}return u},o=new Xy(t.length),a=r(o);return new Ne(s||e,a)};/**
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
 */let vr;const fn={};class ht{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return E(fn&&re,"ChildrenNode.ts has not been loaded"),vr=vr||new ht({".priority":fn},{".priority":re}),vr}get(e){const n=An(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ne?n:null}hasIndex(e){return it(this.indexSet_,e.toString())}addIndex(e,n){E(e!==Tn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(F.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=pi(s,e.getCompare()):a=fn;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new ht(u,c)}addToIndexes(e,n){const s=ri(this.indexes_,(i,r)=>{const o=An(this.indexSet_,r);if(E(o,"Missing index implementation for "+r),i===fn)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(F.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),pi(a,o.getCompare())}else return fn;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new F(e.name,a))),l.insert(e,e.node)}});return new ht(s,this.indexSet_)}removeFromIndexes(e,n){const s=ri(this.indexes_,i=>{if(i===fn)return i;{const r=n.get(e.name);return r?i.remove(new F(e.name,r)):i}});return new ht(s,this.indexSet_)}}/**
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
 */let Jn;class x{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Nh(this.priorityNode_),this.children_.isEmpty()&&E(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Jn||(Jn=new x(new Ne(ta),null,ht.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Jn}updatePriority(e){return this.children_.isEmpty()?this:new x(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Jn:n}}getChild(e){const n=L(e);return n===null?this:this.getImmediateChild(n).getChild(Q(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(E(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new F(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Jn:this.priorityNode_;return new x(i,o,r)}}updateChild(e,n){const s=L(e);if(s===null)return n;{E(L(e)!==".priority"||Dt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(Q(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(re,(o,a)=>{n[o]=a.val(e),s++,r&&x.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Rh(this.getPriority().val())+":"),this.forEachChild(re,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":rh(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new F(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new F(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new F(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,F.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,F.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ms?-1:0}withIndex(e){if(e===Tn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new x(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Tn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(re),i=n.getIterator(re);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Tn?null:this.indexMap_.get(e.toString())}}x.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Zy extends x{constructor(){super(new Ne(ta),x.EMPTY_NODE,ht.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return x.EMPTY_NODE}isEmpty(){return!1}}const Ms=new Zy;Object.defineProperties(F,{MIN:{value:new F(xn,x.EMPTY_NODE)},MAX:{value:new F(nn,Ms)}});Sh.__EMPTY_NODE=x.EMPTY_NODE;le.__childrenNodeConstructor=x;Ky(Ms);Yy(Ms);/**
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
 */const ev=!0;function ue(t,e=null){if(t===null)return x.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),E(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new le(n,ue(e))}if(!(t instanceof Array)&&ev){const n=[];let s=!1;if(ge(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=ue(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new F(o,l)))}}),n.length===0)return x.EMPTY_NODE;const r=pi(n,zy,o=>o.name,ta);if(s){const o=pi(n,re.getCompare());return new x(r,ue(e),new ht({".priority":o},{".priority":re}))}else return new x(r,ue(e),ht.Default)}else{let n=x.EMPTY_NODE;return ge(t,(s,i)=>{if(it(t,s)&&s.substring(0,1)!=="."){const r=ue(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(ue(e))}}Gy(ue);/**
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
 */class tv extends Bi{constructor(e){super(),this.indexPath_=e,E(!W(e)&&L(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?an(e.name,n.name):r}makePost(e,n){const s=ue(e),i=x.EMPTY_NODE.updateChild(this.indexPath_,s);return new F(n,i)}maxPost(){const e=x.EMPTY_NODE.updateChild(this.indexPath_,Ms);return new F(nn,e)}toString(){return ys(this.indexPath_,0).join("/")}}/**
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
 */class nv extends Bi{compare(e,n){const s=e.node.compareTo(n.node);return s===0?an(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return F.MIN}maxPost(){return F.MAX}makePost(e,n){const s=ue(e);return new F(n,s)}toString(){return".value"}}const sv=new nv;/**
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
 */const Yl="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",iv=function(){let t=0;const e=[];return function(n){const s=n===t;t=n;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=Yl.charAt(n%64),n=Math.floor(n/64);E(n===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Yl.charAt(e[i]);return E(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */function xh(t){return{type:"value",snapshotNode:t}}function Pn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function vs(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Es(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function rv(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class na{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){E(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(vs(n,a)):E(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Pn(n,s)):o.trackChildChange(Es(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(re,(i,r)=>{n.hasChild(i)||s.trackChildChange(vs(i,r))}),n.isLeafNode()||n.forEachChild(re,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Es(i,r,o))}else s.trackChildChange(Pn(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?x.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Is{constructor(e){this.indexedFilter_=new na(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Is.getStartPost_(e),this.endPost_=Is.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,s,i,r,o){return this.matches(new F(n,s))||(s=x.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=x.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(x.EMPTY_NODE);const r=this;return n.forEachChild(re,(o,a)=>{r.matches(new F(o,a))||(i=i.updateImmediateChild(o,x.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class ov{constructor(e){this.rangedFilter_=new Is(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new F(n,s))||(s=x.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=x.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=x.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();let l;if(this.reverse_?l=this.index_.compare(this.rangedFilter_.getStartPost(),a)<=0:l=this.index_.compare(a,this.rangedFilter_.getEndPost())<=0,l)i=i.updateImmediateChild(a.name,a.node),o++;else break}}else{i=n.withIndex(this.index_),i=i.updatePriority(x.EMPTY_NODE);let r,o,a,l;if(this.reverse_){l=i.getReverseIterator(this.index_),r=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const h=this.index_.getCompare();a=(f,g)=>h(g,f)}else l=i.getIterator(this.index_),r=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),a=this.index_.getCompare();let c=0,u=!1;for(;l.hasNext();){const h=l.getNext();!u&&a(r,h)<=0&&(u=!0),u&&c<this.limit_&&a(h,o)<=0?c++:i=i.updateImmediateChild(h.name,x.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(f,g)=>h(g,f)}else o=this.index_.getCompare();const a=e;E(a.numChildren()===this.limit_,"");const l=new F(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const h=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const g=f==null?1:o(f,l);if(u&&!s.isEmpty()&&g>=0)return r!=null&&r.trackChildChange(Es(n,s,h)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(vs(n,h));const S=a.updateImmediateChild(n,x.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r!=null&&r.trackChildChange(Pn(f.name,f.node)),S.updateImmediateChild(f.name,f.node)):S}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(vs(c.name,c.node)),r.trackChildChange(Pn(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,x.EMPTY_NODE)):e}}/**
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
 */class sa{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=re}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return E(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return E(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:xn}hasEnd(){return this.endSet_}getIndexEndValue(){return E(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return E(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:nn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return E(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===re}copy(){const e=new sa;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function av(t){return t.loadsAllData()?new na(t.getIndex()):t.hasLimit()?new ov(t):new Is(t)}function Ql(t){const e={};if(t.isDefault())return e;let n;return t.index_===re?n="$priority":t.index_===sv?n="$value":t.index_===Tn?n="$key":(E(t.index_ instanceof tv,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=he(n),t.startSet_&&(e.startAt=he(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+he(t.indexStartName_))),t.endSet_&&(e.endAt=he(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+he(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Jl(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==re&&(e.i=t.index_.toString()),e}/**
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
 */class _i extends Ch{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Os("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(E(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=_i.getListenId_(e,s),a={};this.listens_[o]=a;const l=Ql(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),An(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(e,n){const s=_i.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Ql(e._queryParams),s=e._path.toString(),i=new Ss;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Vn(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=ps(a.responseText)}catch{we("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&we("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class lv{constructor(){this.rootNode_=x.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function gi(){return{value:null,children:new Map}}function Ph(t,e,n){if(W(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=L(e);t.children.has(s)||t.children.set(s,gi());const i=t.children.get(s);e=Q(e),Ph(i,e,n)}}function Xr(t,e,n){t.value!==null?n(e,t.value):cv(t,(s,i)=>{const r=new q(e.toString()+"/"+s);Xr(i,r,n)})}function cv(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class uv{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&ge(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
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
 */const Xl=10*1e3,hv=30*1e3,dv=5*60*1e3;class fv{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new uv(e);const s=Xl+(hv-Xl)*Math.random();as(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;ge(e,(i,r)=>{r>0&&it(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),as(this.reportStats_.bind(this),Math.floor(Math.random()*2*dv))}}/**
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
 */var qe;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(qe||(qe={}));function ia(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function ra(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function oa(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class mi{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=qe.ACK_USER_WRITE,this.source=ia()}operationForChild(e){if(W(this.path)){if(this.affectedTree.value!=null)return E(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new q(e));return new mi($(),n,this.revert)}}else return E(L(this.path)===e,"operationForChild called for unrelated child."),new mi(Q(this.path),this.affectedTree,this.revert)}}/**
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
 */class Cs{constructor(e,n){this.source=e,this.path=n,this.type=qe.LISTEN_COMPLETE}operationForChild(e){return W(this.path)?new Cs(this.source,$()):new Cs(this.source,Q(this.path))}}/**
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
 */class sn{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=qe.OVERWRITE}operationForChild(e){return W(this.path)?new sn(this.source,$(),this.snap.getImmediateChild(e)):new sn(this.source,Q(this.path),this.snap)}}/**
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
 */class On{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=qe.MERGE}operationForChild(e){if(W(this.path)){const n=this.children.subtree(new q(e));return n.isEmpty()?null:n.value?new sn(this.source,$(),n.value):new On(this.source,$(),n)}else return E(L(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new On(this.source,Q(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class rn{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(W(e))return this.isFullyInitialized()&&!this.filtered_;const n=L(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class pv{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function _v(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(rv(o.childName,o.snapshotNode))}),Xn(t,i,"child_removed",e,s,n),Xn(t,i,"child_added",e,s,n),Xn(t,i,"child_moved",r,s,n),Xn(t,i,"child_changed",e,s,n),Xn(t,i,"value",e,s,n),i}function Xn(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>mv(t,a,l)),o.forEach(a=>{const l=gv(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function gv(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function mv(t,e,n){if(e.childName==null||n.childName==null)throw Bn("Should only compare child_ events.");const s=new F(e.childName,e.snapshotNode),i=new F(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
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
 */function $i(t,e){return{eventCache:t,serverCache:e}}function ls(t,e,n,s){return $i(new rn(e,n,s),t.serverCache)}function Oh(t,e,n,s){return $i(t.eventCache,new rn(e,n,s))}function Zr(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function on(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Er;const yv=()=>(Er||(Er=new Ne(Xm)),Er);class Y{constructor(e,n=yv()){this.value=e,this.children=n}static fromObject(e){let n=new Y(null);return ge(e,(s,i)=>{n=n.set(new q(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:$(),value:this.value};if(W(e))return null;{const s=L(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(Q(e),n);return r!=null?{path:ie(new q(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(W(e))return this;{const n=L(e),s=this.children.get(n);return s!==null?s.subtree(Q(e)):new Y(null)}}set(e,n){if(W(e))return new Y(n,this.children);{const s=L(e),r=(this.children.get(s)||new Y(null)).set(Q(e),n),o=this.children.insert(s,r);return new Y(this.value,o)}}remove(e){if(W(e))return this.children.isEmpty()?new Y(null):new Y(null,this.children);{const n=L(e),s=this.children.get(n);if(s){const i=s.remove(Q(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new Y(null):new Y(this.value,r)}else return this}}get(e){if(W(e))return this.value;{const n=L(e),s=this.children.get(n);return s?s.get(Q(e)):null}}setTree(e,n){if(W(e))return n;{const s=L(e),r=(this.children.get(s)||new Y(null)).setTree(Q(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new Y(this.value,o)}}fold(e){return this.fold_($(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(ie(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,$(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(W(e))return null;{const r=L(e),o=this.children.get(r);return o?o.findOnPath_(Q(e),ie(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,$(),n)}foreachOnPath_(e,n,s){if(W(e))return this;{this.value&&s(n,this.value);const i=L(e),r=this.children.get(i);return r?r.foreachOnPath_(Q(e),ie(n,i),s):new Y(null)}}foreach(e){this.foreach_($(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(ie(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class Ge{constructor(e){this.writeTree_=e}static empty(){return new Ge(new Y(null))}}function cs(t,e,n){if(W(e))return new Ge(new Y(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Re(i,e);return r=r.updateChild(o,n),new Ge(t.writeTree_.set(i,r))}else{const i=new Y(n),r=t.writeTree_.setTree(e,i);return new Ge(r)}}}function eo(t,e,n){let s=t;return ge(n,(i,r)=>{s=cs(s,ie(e,i),r)}),s}function Zl(t,e){if(W(e))return Ge.empty();{const n=t.writeTree_.setTree(e,new Y(null));return new Ge(n)}}function to(t,e){return ln(t,e)!=null}function ln(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Re(n.path,e)):null}function ec(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(re,(s,i)=>{e.push(new F(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new F(s,i.value))}),e}function Pt(t,e){if(W(e))return t;{const n=ln(t,e);return n!=null?new Ge(new Y(n)):new Ge(t.writeTree_.subtree(e))}}function no(t){return t.writeTree_.isEmpty()}function Mn(t,e){return Mh($(),t.writeTree_,e)}function Mh(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(E(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Mh(ie(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(ie(t,".priority"),s)),n}}/**
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
 */function aa(t,e){return Uh(e,t)}function vv(t,e,n,s,i){E(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=cs(t.visibleWrites,e,n)),t.lastWriteId=s}function Ev(t,e,n,s){E(s>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:s,visible:!0}),t.visibleWrites=eo(t.visibleWrites,e,n),t.lastWriteId=s}function Iv(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function Cv(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);E(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&bv(a,s.path)?i=!1:Le(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return wv(t),!0;if(s.snap)t.visibleWrites=Zl(t.visibleWrites,s.path);else{const a=s.children;ge(a,l=>{t.visibleWrites=Zl(t.visibleWrites,ie(s.path,l))})}return!0}else return!1}function bv(t,e){if(t.snap)return Le(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Le(ie(t.path,n),e))return!0;return!1}function wv(t){t.visibleWrites=Dh(t.allWrites,Tv,$()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Tv(t){return t.visible}function Dh(t,e,n){let s=Ge.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)Le(n,o)?(a=Re(n,o),s=cs(s,a,r.snap)):Le(o,n)&&(a=Re(o,n),s=cs(s,$(),r.snap.getChild(a)));else if(r.children){if(Le(n,o))a=Re(n,o),s=eo(s,a,r.children);else if(Le(o,n))if(a=Re(o,n),W(a))s=eo(s,$(),r.children);else{const l=An(r.children,L(a));if(l){const c=l.getChild(Q(a));s=cs(s,$(),c)}}}else throw Bn("WriteRecord should have .snap or .children")}}return s}function Lh(t,e,n,s,i){if(!s&&!i){const r=ln(t.visibleWrites,e);if(r!=null)return r;{const o=Pt(t.visibleWrites,e);if(no(o))return n;if(n==null&&!to(o,$()))return null;{const a=n||x.EMPTY_NODE;return Mn(o,a)}}}else{const r=Pt(t.visibleWrites,e);if(!i&&no(r))return n;if(!i&&n==null&&!to(r,$()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(Le(c.path,e)||Le(e,c.path))},a=Dh(t.allWrites,o,e),l=n||x.EMPTY_NODE;return Mn(a,l)}}}function Sv(t,e,n){let s=x.EMPTY_NODE;const i=ln(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(re,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Pt(t.visibleWrites,e);return n.forEachChild(re,(o,a)=>{const l=Mn(Pt(r,new q(o)),a);s=s.updateImmediateChild(o,l)}),ec(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Pt(t.visibleWrites,e);return ec(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Rv(t,e,n,s,i){E(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=ie(e,n);if(to(t.visibleWrites,r))return null;{const o=Pt(t.visibleWrites,r);return no(o)?i.getChild(n):Mn(o,i.getChild(n))}}function Nv(t,e,n,s){const i=ie(e,n),r=ln(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Pt(t.visibleWrites,i);return Mn(o,s.getNode().getImmediateChild(n))}else return null}function Av(t,e){return ln(t.visibleWrites,e)}function kv(t,e,n,s,i,r,o){let a;const l=Pt(t.visibleWrites,e),c=ln(l,$());if(c!=null)a=c;else if(n!=null)a=Mn(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),f=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let g=f.getNext();for(;g&&u.length<i;)h(g,s)!==0&&u.push(g),g=f.getNext();return u}else return[]}function xv(){return{visibleWrites:Ge.empty(),allWrites:[],lastWriteId:-1}}function yi(t,e,n,s){return Lh(t.writeTree,t.treePath,e,n,s)}function la(t,e){return Sv(t.writeTree,t.treePath,e)}function tc(t,e,n,s){return Rv(t.writeTree,t.treePath,e,n,s)}function vi(t,e){return Av(t.writeTree,ie(t.treePath,e))}function Pv(t,e,n,s,i,r){return kv(t.writeTree,t.treePath,e,n,s,i,r)}function ca(t,e,n){return Nv(t.writeTree,t.treePath,e,n)}function Fh(t,e){return Uh(ie(t.treePath,e),t.writeTree)}function Uh(t,e){return{treePath:t,writeTree:e}}/**
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
 */class Ov{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;E(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),E(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Es(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,vs(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Pn(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Es(s,e.snapshotNode,i.oldSnap));else throw Bn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class Mv{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Wh=new Mv;class ua{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new rn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ca(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:on(this.viewCache_),r=Pv(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function Dv(t){return{filter:t}}function Lv(t,e){E(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),E(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Fv(t,e,n,s,i){const r=new Ov;let o,a;if(n.type===qe.OVERWRITE){const c=n;c.source.fromUser?o=so(t,e,c.path,c.snap,s,i,r):(E(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!W(c.path),o=Ei(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===qe.MERGE){const c=n;c.source.fromUser?o=Wv(t,e,c.path,c.children,s,i,r):(E(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=io(t,e,c.path,c.children,s,i,a,r))}else if(n.type===qe.ACK_USER_WRITE){const c=n;c.revert?o=$v(t,e,c.path,s,i,r):o=Hv(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===qe.LISTEN_COMPLETE)o=Bv(t,e,n.path,s,r);else throw Bn("Unknown operation type: "+n.type);const l=r.getChanges();return Uv(e,o,l),{viewCache:o,changes:l}}function Uv(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Zr(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(xh(Zr(e)))}}function Hh(t,e,n,s,i,r){const o=e.eventCache;if(vi(s,n)!=null)return e;{let a,l;if(W(n))if(E(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=on(e),u=c instanceof x?c:x.EMPTY_NODE,h=la(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=yi(s,on(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=L(n);if(c===".priority"){E(Dt(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=tc(s,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=Q(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=tc(s,n,o.getNode(),l);f!=null?h=o.getNode().getImmediateChild(c).updateChild(u,f):h=o.getNode().getImmediateChild(c)}else h=ca(s,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,i,r):a=o.getNode()}}return ls(e,a,o.isFullyInitialized()||W(n),t.filter.filtersNodes())}}function Ei(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(W(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const g=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),g,null)}else{const g=L(n);if(!l.isCompleteForPath(n)&&Dt(n)>1)return e;const I=Q(n),N=l.getNode().getImmediateChild(g).updateChild(I,s);g===".priority"?c=u.updatePriority(l.getNode(),N):c=u.updateChild(l.getNode(),g,N,I,Wh,null)}const h=Oh(e,c,l.isFullyInitialized()||W(n),u.filtersNodes()),f=new ua(i,h,r);return Hh(t,h,n,i,f,a)}function so(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new ua(i,e,r);if(W(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=ls(e,c,!0,t.filter.filtersNodes());else{const h=L(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=ls(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=Q(n),g=a.getNode().getImmediateChild(h);let I;if(W(f))I=s;else{const S=u.getCompleteChild(h);S!=null?Xo(f)===".priority"&&S.getChild(wh(f)).isEmpty()?I=S:I=S.updateChild(f,s):I=x.EMPTY_NODE}if(g.equals(I))l=e;else{const S=t.filter.updateChild(a.getNode(),h,I,f,u,o);l=ls(e,S,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function nc(t,e){return t.eventCache.isCompleteForChild(e)}function Wv(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=ie(n,l);nc(e,L(u))&&(a=so(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=ie(n,l);nc(e,L(u))||(a=so(t,a,u,c,i,r,o))}),a}function sc(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function io(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;W(n)?c=s:c=new Y(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const g=e.serverCache.getNode().getImmediateChild(h),I=sc(t,g,f);l=Ei(t,l,new q(h),I,i,r,o,a)}}),c.children.inorderTraversal((h,f)=>{const g=!e.serverCache.isCompleteForChild(h)&&f.value===void 0;if(!u.hasChild(h)&&!g){const I=e.serverCache.getNode().getImmediateChild(h),S=sc(t,I,f);l=Ei(t,l,new q(h),S,i,r,o,a)}}),l}function Hv(t,e,n,s,i,r,o){if(vi(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(W(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Ei(t,e,n,l.getNode().getChild(n),i,r,a,o);if(W(n)){let c=new Y(null);return l.getNode().forEachChild(Tn,(u,h)=>{c=c.set(new q(u),h)}),io(t,e,n,c,i,r,a,o)}else return e}else{let c=new Y(null);return s.foreach((u,h)=>{const f=ie(n,u);l.isCompleteForPath(f)&&(c=c.set(u,l.getNode().getChild(f)))}),io(t,e,n,c,i,r,a,o)}}function Bv(t,e,n,s,i){const r=e.serverCache,o=Oh(e,r.getNode(),r.isFullyInitialized()||W(n),r.isFiltered());return Hh(t,o,n,s,Wh,i)}function $v(t,e,n,s,i,r){let o;if(vi(s,n)!=null)return e;{const a=new ua(s,e,i),l=e.eventCache.getNode();let c;if(W(n)||L(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=yi(s,on(e));else{const h=e.serverCache.getNode();E(h instanceof x,"serverChildren would be complete if leaf node"),u=la(s,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=L(n);let h=ca(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,Q(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,x.EMPTY_NODE,Q(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=yi(s,on(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||vi(s,$())!=null,ls(e,c,o,t.filter.filtersNodes())}}/**
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
 */class Vv{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new na(s.getIndex()),r=av(s);this.processor_=Dv(r);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(x.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(x.EMPTY_NODE,a.getNode(),null),u=new rn(l,o.isFullyInitialized(),i.filtersNodes()),h=new rn(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=$i(h,u),this.eventGenerator_=new pv(this.query_)}get query(){return this.query_}}function jv(t){return t.viewCache_.serverCache.getNode()}function qv(t,e){const n=on(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!W(e)&&!n.getImmediateChild(L(e)).isEmpty())?n.getChild(e):null}function ic(t){return t.eventRegistrations_.length===0}function zv(t,e){t.eventRegistrations_.push(e)}function rc(t,e,n){const s=[];if(n){E(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function oc(t,e,n,s){e.type===qe.MERGE&&e.source.queryId!==null&&(E(on(t.viewCache_),"We should always have a full cache before handling merges"),E(Zr(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=Fv(t.processor_,i,e,n,s);return Lv(t.processor_,r.viewCache),E(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Bh(t,r.changes,r.viewCache.eventCache.getNode(),null)}function Kv(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(re,(r,o)=>{s.push(Pn(r,o))}),n.isFullyInitialized()&&s.push(xh(n.getNode())),Bh(t,s,n.getNode(),e)}function Bh(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return _v(t.eventGenerator_,e,n,i)}/**
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
 */let Ii;class Gv{constructor(){this.views=new Map}}function Yv(t){E(!Ii,"__referenceConstructor has already been defined"),Ii=t}function Qv(){return E(Ii,"Reference.ts has not been loaded"),Ii}function Jv(t){return t.views.size===0}function ha(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return E(r!=null,"SyncTree gave us an op for an invalid query."),oc(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(oc(o,e,n,s));return r}}function Xv(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=yi(n,i?s:null),l=!1;a?l=!0:s instanceof x?(a=la(n,s),l=!1):(a=x.EMPTY_NODE,l=!1);const c=$i(new rn(a,l,!1),new rn(s,i,!1));return new Vv(e,c)}return o}function Zv(t,e,n,s,i,r){const o=Xv(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),zv(o,n),Kv(o,n)}function eE(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=Lt(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(rc(c,n,s)),ic(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(rc(l,n,s)),ic(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!Lt(t)&&r.push(new(Qv())(e._repo,e._path)),{removed:r,events:o}}function $h(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Sn(t,e){let n=null;for(const s of t.views.values())n=n||qv(s,e);return n}function Vh(t,e){if(e._queryParams.loadsAllData())return Vi(t);{const s=e._queryIdentifier;return t.views.get(s)}}function jh(t,e){return Vh(t,e)!=null}function Lt(t){return Vi(t)!=null}function Vi(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Ci;function tE(t){E(!Ci,"__referenceConstructor has already been defined"),Ci=t}function nE(){return E(Ci,"Reference.ts has not been loaded"),Ci}let sE=1;class ac{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Y(null),this.pendingWriteTree_=xv(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function qh(t,e,n,s,i){return vv(t.pendingWriteTree_,e,n,s,i),i?qn(t,new sn(ia(),e,n)):[]}function iE(t,e,n,s){Ev(t.pendingWriteTree_,e,n,s);const i=Y.fromObject(n);return qn(t,new On(ia(),e,i))}function Rt(t,e,n=!1){const s=Iv(t.pendingWriteTree_,e);if(Cv(t.pendingWriteTree_,e)){let r=new Y(null);return s.snap!=null?r=r.set($(),!0):ge(s.children,o=>{r=r.set(new q(o),!0)}),qn(t,new mi(s.path,r,n))}else return[]}function ji(t,e,n){return qn(t,new sn(ra(),e,n))}function rE(t,e,n){const s=Y.fromObject(n);return qn(t,new On(ra(),e,s))}function oE(t,e){return qn(t,new Cs(ra(),e))}function aE(t,e,n){const s=fa(t,n);if(s){const i=pa(s),r=i.path,o=i.queryId,a=Re(r,e),l=new Cs(oa(o),a);return _a(t,r,l)}else return[]}function ro(t,e,n,s){const i=e._path,r=t.syncPointTree_.get(i);let o=[];if(r&&(e._queryIdentifier==="default"||jh(r,e))){const a=eE(r,e,n,s);Jv(r)&&(t.syncPointTree_=t.syncPointTree_.remove(i));const l=a.removed;o=a.events;const c=l.findIndex(h=>h._queryParams.loadsAllData())!==-1,u=t.syncPointTree_.findOnPath(i,(h,f)=>Lt(f));if(c&&!u){const h=t.syncPointTree_.subtree(i);if(!h.isEmpty()){const f=uE(h);for(let g=0;g<f.length;++g){const I=f[g],S=I.query,N=Gh(t,I);t.listenProvider_.startListening(us(S),bi(t,S),N.hashFn,N.onComplete)}}}!u&&l.length>0&&!s&&(c?t.listenProvider_.stopListening(us(e),null):l.forEach(h=>{const f=t.queryToTagMap.get(qi(h));t.listenProvider_.stopListening(us(h),f)})),hE(t,l)}return o}function lE(t,e,n,s){const i=fa(t,s);if(i!=null){const r=pa(i),o=r.path,a=r.queryId,l=Re(o,e),c=new sn(oa(a),l,n);return _a(t,o,c)}else return[]}function cE(t,e,n,s){const i=fa(t,s);if(i){const r=pa(i),o=r.path,a=r.queryId,l=Re(o,e),c=Y.fromObject(n),u=new On(oa(a),l,c);return _a(t,o,u)}else return[]}function lc(t,e,n){const s=e._path;let i=null,r=!1;t.syncPointTree_.foreachOnPath(s,(h,f)=>{const g=Re(h,s);i=i||Sn(f,g),r=r||Lt(f)});let o=t.syncPointTree_.get(s);o?(r=r||Lt(o),i=i||Sn(o,$())):(o=new Gv,t.syncPointTree_=t.syncPointTree_.set(s,o));let a;i!=null?a=!0:(a=!1,i=x.EMPTY_NODE,t.syncPointTree_.subtree(s).foreachChild((f,g)=>{const I=Sn(g,$());I&&(i=i.updateImmediateChild(f,I))}));const l=jh(o,e);if(!l&&!e._queryParams.loadsAllData()){const h=qi(e);E(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const f=dE();t.queryToTagMap.set(h,f),t.tagToQueryMap.set(f,h)}const c=aa(t.pendingWriteTree_,s);let u=Zv(o,e,n,c,i,a);if(!l&&!r){const h=Vh(o,e);u=u.concat(fE(t,e,h))}return u}function da(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Re(o,e),c=Sn(a,l);if(c)return c});return Lh(i,e,r,n,!0)}function qn(t,e){return zh(e,t.syncPointTree_,null,aa(t.pendingWriteTree_,$()))}function zh(t,e,n,s){if(W(t.path))return Kh(t,e,n,s);{const i=e.get($());n==null&&i!=null&&(n=Sn(i,$()));let r=[];const o=L(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=Fh(s,o);r=r.concat(zh(a,l,c,u))}return i&&(r=r.concat(ha(i,t,s,n))),r}}function Kh(t,e,n,s){const i=e.get($());n==null&&i!=null&&(n=Sn(i,$()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=Fh(s,o),u=t.operationForChild(o);u&&(r=r.concat(Kh(u,a,l,c)))}),i&&(r=r.concat(ha(i,t,s,n))),r}function Gh(t,e){const n=e.query,s=bi(t,n);return{hashFn:()=>(jv(e)||x.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?aE(t,n._path,s):oE(t,n._path);{const r=ty(i,n);return ro(t,n,null,r)}}}}function bi(t,e){const n=qi(e);return t.queryToTagMap.get(n)}function qi(t){return t._path.toString()+"$"+t._queryIdentifier}function fa(t,e){return t.tagToQueryMap.get(e)}function pa(t){const e=t.indexOf("$");return E(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new q(t.substr(0,e))}}function _a(t,e,n){const s=t.syncPointTree_.get(e);E(s,"Missing sync point for query tag that we're tracking");const i=aa(t.pendingWriteTree_,e);return ha(s,n,i,null)}function uE(t){return t.fold((e,n,s)=>{if(n&&Lt(n))return[Vi(n)];{let i=[];return n&&(i=$h(n)),ge(s,(r,o)=>{i=i.concat(o)}),i}})}function us(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(nE())(t._repo,t._path):t}function hE(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=qi(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function dE(){return sE++}function fE(t,e,n){const s=e._path,i=bi(t,e),r=Gh(t,n),o=t.listenProvider_.startListening(us(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)E(!Lt(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,h)=>{if(!W(c)&&u&&Lt(u))return[Vi(u).query];{let f=[];return u&&(f=f.concat($h(u).map(g=>g.query))),ge(h,(g,I)=>{f=f.concat(I)}),f}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(us(u),bi(t,u))}}return o}/**
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
 */class ga{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new ga(n)}node(){return this.node_}}class ma{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ie(this.path_,e);return new ma(this.syncTree_,n)}node(){return da(this.syncTree_,this.path_)}}const pE=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},cc=function(t,e,n){if(!t||typeof t!="object")return t;if(E(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return _E(t[".sv"],e,n);if(typeof t[".sv"]=="object")return gE(t[".sv"],e);E(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},_E=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:E(!1,"Unexpected server value: "+t)}},gE=function(t,e,n){t.hasOwnProperty("increment")||E(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&E(!1,"Unexpected increment value: "+s);const i=e.node();if(E(i!==null&&typeof i!="undefined","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Yh=function(t,e,n,s){return ya(e,new ma(n,t),s)},Qh=function(t,e,n){return ya(t,new ga(e),n)};function ya(t,e,n){const s=t.getPriority().val(),i=cc(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=cc(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new le(a,ue(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new le(i))),o.forEachChild(re,(a,l)=>{const c=ya(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class va{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Ea(t,e){let n=e instanceof q?e:new q(e),s=t,i=L(n);for(;i!==null;){const r=An(s.node.children,i)||{children:{},childCount:0};s=new va(i,s,r),n=Q(n),i=L(n)}return s}function zn(t){return t.node.value}function Jh(t,e){t.node.value=e,oo(t)}function Xh(t){return t.node.childCount>0}function mE(t){return zn(t)===void 0&&!Xh(t)}function zi(t,e){ge(t.node.children,(n,s)=>{e(new va(n,t,s))})}function Zh(t,e,n,s){n&&!s&&e(t),zi(t,i=>{Zh(i,e,!0,s)}),n&&s&&e(t)}function yE(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Ds(t){return new q(t.parent===null?t.name:Ds(t.parent)+"/"+t.name)}function oo(t){t.parent!==null&&vE(t.parent,t.name,t)}function vE(t,e,n){const s=mE(n),i=it(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,oo(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,oo(t))}/**
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
 */const EE=/[\[\].#$\/\u0000-\u001F\u007F]/,IE=/[\[\].#$\u0000-\u001F\u007F]/,Ir=10*1024*1024,Ia=function(t){return typeof t=="string"&&t.length!==0&&!EE.test(t)},ed=function(t){return typeof t=="string"&&t.length!==0&&!IE.test(t)},CE=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),ed(t)},bE=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!zo(t)||t&&typeof t=="object"&&it(t,".sv")},td=function(t,e,n,s){s&&e===void 0||Ki(Di(t,"value"),e,n)},Ki=function(t,e,n){const s=n instanceof q?new Fy(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Bt(s));if(typeof e=="function")throw new Error(t+"contains a function "+Bt(s)+" with contents = "+e.toString());if(zo(e))throw new Error(t+"contains "+e.toString()+" "+Bt(s));if(typeof e=="string"&&e.length>Ir/3&&Li(e)>Ir)throw new Error(t+"contains a string greater than "+Ir+" utf8 bytes "+Bt(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(ge(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Ia(o)))throw new Error(t+" contains an invalid key ("+o+") "+Bt(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Uy(s,o),Ki(t,a,s),Wy(s)}),i&&r)throw new Error(t+' contains ".value" child '+Bt(s)+" in addition to actual children.")}},wE=function(t,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const r=ys(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!Ia(r[o]))throw new Error(t+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(Ly);let i=null;for(n=0;n<e.length;n++){if(s=e[n],i!==null&&Le(i,s))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},TE=function(t,e,n,s){if(s&&e===void 0)return;const i=Di(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];ge(e,(o,a)=>{const l=new q(o);if(Ki(i,a,ie(n,l)),Xo(l)===".priority"&&!bE(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(l)}),wE(i,r)},nd=function(t,e,n,s){if(!(s&&n===void 0)&&!ed(n))throw new Error(Di(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},SE=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),nd(t,e,n,s)},Ca=function(t,e){if(L(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},RE=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Ia(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!CE(n))throw new Error(Di(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class NE{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Gi(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Zo(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function sd(t,e,n){Gi(t,n),id(t,s=>Zo(s,e))}function Ye(t,e,n){Gi(t,n),id(t,s=>Le(s,e)||Le(e,s))}function id(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(AE(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function AE(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Qt&&pe("event: "+n.toString()),jn(s)}}}/**
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
 */const kE="repo_interrupt",xE=25;class PE{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new NE,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=gi(),this.transactionQueueTree_=new va,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function OE(t,e,n){if(t.stats_=Yo(t.repoInfo_),t.forceRestClient_||ry())t.server_=new _i(t.repoInfo_,(s,i,r,o)=>{uc(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>hc(t,!0),0);else{if(typeof n!="undefined"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{he(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new dt(t.repoInfo_,e,(s,i,r,o)=>{uc(t,s,i,r,o)},s=>{hc(t,s)},s=>{ME(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=dy(t.repoInfo_,()=>new fv(t.stats_,t.server_)),t.infoData_=new lv,t.infoSyncTree_=new ac({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=ji(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),ba(t,"connected",!1),t.serverSyncTree_=new ac({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);Ye(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function rd(t){const n=t.infoData_.getNode(new q(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Yi(t){return pE({timestamp:rd(t)})}function uc(t,e,n,s,i){t.dataUpdateCount++;const r=new q(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=ri(n,c=>ue(c));o=cE(t.serverSyncTree_,r,l,i)}else{const l=ue(n);o=lE(t.serverSyncTree_,r,l,i)}else if(s){const l=ri(n,c=>ue(c));o=rE(t.serverSyncTree_,r,l)}else{const l=ue(n);o=ji(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Dn(t,r)),Ye(t.eventQueue_,a,o)}function hc(t,e){ba(t,"connected",e),e===!1&&FE(t)}function ME(t,e){ge(e,(n,s)=>{ba(t,n,s)})}function ba(t,e,n){const s=new q("/.info/"+e),i=ue(n);t.infoData_.updateSnapshot(s,i);const r=ji(t.infoSyncTree_,s,i);Ye(t.eventQueue_,s,r)}function wa(t){return t.nextWriteId_++}function DE(t,e,n,s,i){Qi(t,"set",{path:e.toString(),value:n,priority:s});const r=Yi(t),o=ue(n,s),a=da(t.serverSyncTree_,e),l=Qh(o,a,r),c=wa(t),u=qh(t.serverSyncTree_,e,l,c,!0);Gi(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(f,g)=>{const I=f==="ok";I||we("set at "+e+" failed: "+f);const S=Rt(t.serverSyncTree_,c,!I);Ye(t.eventQueue_,e,S),ao(t,i,f,g)});const h=Sa(t,e);Dn(t,h),Ye(t.eventQueue_,h,[])}function LE(t,e,n,s){Qi(t,"update",{path:e.toString(),value:n});let i=!0;const r=Yi(t),o={};if(ge(n,(a,l)=>{i=!1,o[a]=Yh(ie(e,a),ue(l),t.serverSyncTree_,r)}),i)pe("update() called with empty data.  Don't do anything."),ao(t,s,"ok",void 0);else{const a=wa(t),l=iE(t.serverSyncTree_,e,o,a);Gi(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,u)=>{const h=c==="ok";h||we("update at "+e+" failed: "+c);const f=Rt(t.serverSyncTree_,a,!h),g=f.length>0?Dn(t,e):e;Ye(t.eventQueue_,g,f),ao(t,s,c,u)}),ge(n,c=>{const u=Sa(t,ie(e,c));Dn(t,u)}),Ye(t.eventQueue_,e,[])}}function FE(t){Qi(t,"onDisconnectEvents");const e=Yi(t),n=gi();Xr(t.onDisconnect_,$(),(i,r)=>{const o=Yh(i,r,t.serverSyncTree_,e);Ph(n,i,o)});let s=[];Xr(n,$(),(i,r)=>{s=s.concat(ji(t.serverSyncTree_,i,r));const o=Sa(t,i);Dn(t,o)}),t.onDisconnect_=gi(),Ye(t.eventQueue_,$(),s)}function UE(t,e,n){let s;L(e._path)===".info"?s=lc(t.infoSyncTree_,e,n):s=lc(t.serverSyncTree_,e,n),sd(t.eventQueue_,e._path,s)}function dc(t,e,n){let s;L(e._path)===".info"?s=ro(t.infoSyncTree_,e,n):s=ro(t.serverSyncTree_,e,n),sd(t.eventQueue_,e._path,s)}function WE(t){t.persistentConnection_&&t.persistentConnection_.interrupt(kE)}function Qi(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),pe(n,...e)}function ao(t,e,n,s){e&&jn(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function od(t,e,n){return da(t.serverSyncTree_,e,n)||x.EMPTY_NODE}function Ta(t,e=t.transactionQueueTree_){if(e||Ji(t,e),zn(e)){const n=ld(t,e);E(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&HE(t,Ds(e),n)}else Xh(e)&&zi(e,n=>{Ta(t,n)})}function HE(t,e,n){const s=n.map(c=>c.currentWriteId),i=od(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];E(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Re(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Qi(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(Rt(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Ji(t,Ea(t.transactionQueueTree_,e)),Ta(t,t.transactionQueueTree_),Ye(t.eventQueue_,e,u);for(let f=0;f<h.length;f++)jn(h[f])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{we("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Dn(t,e)}},o)}function Dn(t,e){const n=ad(t,e),s=Ds(n),i=ld(t,n);return BE(t,i,s),s}function BE(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Re(n,l.path);let u=!1,h;if(E(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(Rt(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=xE)u=!0,h="maxretry",i=i.concat(Rt(t.serverSyncTree_,l.currentWriteId,!0));else{const f=od(t,l.path,o);l.currentInputSnapshot=f;const g=e[a].update(f.val());if(g!==void 0){Ki("transaction failed: Data returned ",g,l.path);let I=ue(g);typeof g=="object"&&g!=null&&it(g,".priority")||(I=I.updatePriority(f.getPriority()));const N=l.currentWriteId,U=Yi(t),oe=Qh(I,f,U);l.currentOutputSnapshotRaw=I,l.currentOutputSnapshotResolved=oe,l.currentWriteId=wa(t),o.splice(o.indexOf(N),1),i=i.concat(qh(t.serverSyncTree_,l.path,oe,l.currentWriteId,l.applyLocally)),i=i.concat(Rt(t.serverSyncTree_,N,!0))}else u=!0,h="nodata",i=i.concat(Rt(t.serverSyncTree_,l.currentWriteId,!0))}Ye(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}Ji(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)jn(s[a]);Ta(t,t.transactionQueueTree_)}function ad(t,e){let n,s=t.transactionQueueTree_;for(n=L(e);n!==null&&zn(s)===void 0;)s=Ea(s,n),e=Q(e),n=L(e);return s}function ld(t,e){const n=[];return cd(t,e,n),n.sort((s,i)=>s.order-i.order),n}function cd(t,e,n){const s=zn(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);zi(e,i=>{cd(t,i,n)})}function Ji(t,e){const n=zn(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Jh(e,n.length>0?n:void 0)}zi(e,s=>{Ji(t,s)})}function Sa(t,e){const n=Ds(ad(t,e)),s=Ea(t.transactionQueueTree_,e);return yE(s,i=>{Cr(t,i)}),Cr(t,s),Zh(s,i=>{Cr(t,i)}),n}function Cr(t,e){const n=zn(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(E(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(E(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Rt(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Jh(e,void 0):n.length=r+1,Ye(t.eventQueue_,Ds(e),i);for(let o=0;o<s.length;o++)jn(s[o])}}/**
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
 */function $E(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function VE(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):we(`Invalid query segment '${n}' in query '${t}'`)}return e}const fc=function(t,e){const n=jE(t),s=n.namespace;n.domain==="firebase.com"&&tn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&tn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Qm();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new cy(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new q(n.pathString)}},jE=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=$E(t.substring(u,h)));const f=VE(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const g=e.slice(0,c);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const I=e.indexOf(".");s=e.substring(0,I).toLowerCase(),n=e.substring(I+1),r=s}"ns"in f&&(r=f.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
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
 */class ud{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+he(this.snapshot.exportVal())}}class hd{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class qE{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return E(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Ra{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return W(this._path)?null:Xo(this._path)}get ref(){return new mt(this._repo,this._path)}get _queryIdentifier(){const e=Jl(this._queryParams),n=Ko(e);return n==="{}"?"default":n}get _queryObject(){return Jl(this._queryParams)}isEqual(e){if(e=rt(e),!(e instanceof Ra))return!1;const n=this._repo===e._repo,s=Zo(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Dy(this._path)}}class mt extends Ra{constructor(e,n){super(e,n,new sa,!1)}get parent(){const e=wh(this._path);return e===null?null:new mt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class bs{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new q(e),s=Ln(this.ref,e);return new bs(this._node.getChild(n),s,re)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new bs(i,Ln(this.ref,s),re)))}hasChild(e){const n=new q(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Xi(t,e){return t=rt(t),t._checkNotDeleted("ref"),e!==void 0?Ln(t._root,e):t._root}function Ln(t,e){return t=rt(t),L(t._path)===null?SE("child","path",e,!1):nd("child","path",e,!1),new mt(t._repo,ie(t._path,e))}function zE(t,e){t=rt(t),Ca("push",t._path),td("push",e,t._path,!0);const n=rd(t._repo),s=iv(n),i=Ln(t,s),r=Ln(t,s);let o;return e!=null?o=dd(r,e).then(()=>r):o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function KE(t){return Ca("remove",t._path),dd(t,null)}function dd(t,e){t=rt(t),Ca("set",t._path),td("set",e,t._path,!1);const n=new Ss;return DE(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function GE(t,e){TE("update",e,t._path,!1);const n=new Ss;return LE(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}class Na{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new ud("value",this,new bs(e.snapshotNode,new mt(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new hd(this,e,n):null}matches(e){return e instanceof Na?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Aa{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new hd(this,e,n):null}createEvent(e,n){E(e.childName!=null,"Child events should have a childName.");const s=Ln(new mt(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new ud(e.type,this,new bs(e.snapshotNode,s,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Aa?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function YE(t,e,n,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const l=n,c=(u,h)=>{dc(t._repo,t,a),l(u,h)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new qE(n,r||void 0),a=e==="value"?new Na(o):new Aa(e,o);return UE(t._repo,t,a),()=>dc(t._repo,t,a)}function QE(t,e,n,s){return YE(t,"value",e,n,s)}Yv(mt);tE(mt);/**
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
 */const JE="FIREBASE_DATABASE_EMULATOR_HOST",lo={};let XE=!1;function ZE(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||tn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),pe("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=fc(r,i),a=o.repoInfo,l,c;typeof process!="undefined"&&process.env&&(c=process.env[JE]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=fc(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new Yr(Yr.OWNER):new ay(t.name,t.options,e);RE("Invalid Firebase Database URL",o),W(o.path)||tn("Database URL must point to the root of a Firebase Database (not including a child path).");const h=tI(a,t,u,new oy(t.name,n));return new nI(h,t)}function eI(t,e){const n=lo[e];(!n||n[t.key]!==t)&&tn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),WE(t),delete n[t.key]}function tI(t,e,n,s){let i=lo[e.name];i||(i={},lo[e.name]=i);let r=i[t.toURLString()];return r&&tn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new PE(t,XE,n,s),i[t.toURLString()]=r,r}class nI{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(OE(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new mt(this._repo,$())),this._rootInternal}_delete(){return this._rootInternal!==null&&(eI(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&tn("Cannot call "+e+" on a deleted database.")}}function sI(t=wu(),e){return Fo(t,"database").getImmediate({identifier:e})}/**
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
 */function iI(t){qm(Ns),kn(new Xt("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return ZE(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),xt(Ol,Ml,t),xt(Ol,Ml,"esm2017")}dt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};dt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};iI();const rI={apiKey:"AIzaSyAsXHXd9Spu67AO6DV06x2E_EnVOIAu9UU",authDomain:"quick-retro.firebaseapp.com",projectId:"quick-retro",storageBucket:"quick-retro.appspot.com",messagingSenderId:"293134428599",appId:"1:293134428599:web:bad71d4fedbda8080ce032",databaseURL:"https://quick-retro-default-rtdb.europe-west1.firebasedatabase.app"},oI=z_(rI),Zi=sI(oI);function aI(t){const e=Hn({loading:!0});return QE(Xi(Zi,`boards/${t}`),n=>{e.exists=n.exists(),e.loading=!1,e.exists&&Object.entries(n.val()).forEach(([s,i])=>{e[s]=i})}),e}function lI(t,e){const n=Xi(Zi,`boards/${t}`);GE(n,{cardsHidden:e})}function cI(t,e,n){const s=Xi(Zi,`boards/${t}/columns/${e}/cards`);zE(s,n)}function uI(t,e,n){KE(Xi(Zi,`boards/${t}/columns/${e}/cards/${n}`))}function hI(){const t=Hn({}),e=jm();return kg(e).catch(n=>{console.error(n)}),Mg(e,n=>{n&&Object.entries(n).forEach(([s,i])=>{t[s]=i})}),t}var er=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n};const dI=ws({props:{text:null,color:null,author:null,onDelete:null,id:null},setup(t){const{author:e}=t;du(r=>({"26d6cd06":t.color}));const s=kt("user").uid===e,i=kt("board");return(r,o)=>{var a;return ve(),je("li",{class:wi({hidden:!s&&((a=Oe(i))==null?void 0:a.cardsHidden)})},[et("button",{onClick:o[0]||(o[0]=l=>t.onDelete(t.id))},"\u2716"),ou(" "+ho(t.text),1)],2)}}});var fI=er(dI,[["__scopeId","data-v-7a5d75d4"]]);const pI=ws({props:{title:null,color:null,boardId:null,columnId:null,cards:null},setup(t){const{columnId:e,boardId:n}=t;du(a=>({"62139bba":t.color}));const s=Hn({inputText:""}),i=kt("user");function r(a){a.preventDefault(),s.inputText.trim()!==""&&(!(i!=null&&i.uid)||(cI(n,e,{text:s.inputText,author:i.uid}),s.inputText=""))}function o(a){uI(n,e,a)}return(a,l)=>(ve(),je("section",null,[et("h2",null,ho(t.title),1),et("ul",null,[(ve(!0),je(ye,null,au(t.cards,(c,u)=>(ve(),Ts(fI,{id:u,author:c.author,text:c.text,color:t.color,onDelete:o},null,8,["id","author","text","color"]))),256))]),et("form",{target:"#",onSubmit:r},[Kf(et("input",{placeholder:"Add new card","onUpdate:modelValue":l[0]||(l[0]=c=>Oe(s).inputText=c)},null,512),[[Up,Oe(s).inputText]])],32)]))}});var _I=er(pI,[["__scopeId","data-v-345fc8cf"]]);const gI={class:"options"},mI=ws({setup(t){const e=kt("board"),n=kt("boardID");function s(){lI(n,!e.cardsHidden)}return(i,r)=>(ve(),je(ye,null,[(ve(!0),je(ye,null,au(Oe(e).columns,(o,a)=>(ve(),Ts(_I,{cards:o.cards,"column-id":String(a),"board-id":Oe(n),key:String(a),title:o.title,color:o.color},null,8,["cards","column-id","board-id","title","color"]))),128)),et("section",gI,[et("button",{onClick:s},ho(Oe(e).cardsHidden?"Show all cards":"Hide other cards"),1)])],64))}});var yI=er(mI,[["__scopeId","data-v-b73dc23e"]]);const vI={},EI={class:"loader"};function II(t,e){return ve(),je("div",EI,"Loading...")}var CI=er(vI,[["render",II],["__scopeId","data-v-840bd5c8"]]);const bI={key:0},wI={key:1},TI={key:1},SI=ws({props:{boardId:null},setup(t){const{boardId:e}=t,n=aI(e),s=hI();return zs("user",s),zs("boardId",e),zs("board",n),(i,r)=>(ve(),je(ye,null,[Oe(n).loading?ts("",!0):(ve(),je("main",bI,[Oe(n).exists?(ve(),Ts(yI,{key:0})):ts("",!0),Oe(n).exists?ts("",!0):(ve(),je("div",wI,"Couldn't find board"))])),Oe(n).loading?(ve(),je("main",TI,[tt(CI)])):ts("",!0)],64))}});const RI=et("h1",null,"\u{1F680} quick retro \u{1F680}",-1),NI=ws({setup(t){const e=window.location.pathname.split("/").pop();return(n,s)=>(ve(),je(ye,null,[RI,Oe(e).length>0?(ve(),Ts(SI,{key:0,boardId:Oe(e)},null,8,["boardId"])):ts("",!0)],64))}});Bp(NI).mount("#app");
