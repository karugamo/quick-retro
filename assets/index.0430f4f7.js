var Ad=Object.defineProperty,xd=Object.defineProperties;var Pd=Object.getOwnPropertyDescriptors;var Ua=Object.getOwnPropertySymbols;var Od=Object.prototype.hasOwnProperty,Md=Object.prototype.propertyIsEnumerable;var Ba=(t,e,n)=>e in t?Ad(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Wa=(t,e)=>{for(var n in e||(e={}))Od.call(e,n)&&Ba(t,n,e[n]);if(Ua)for(var n of Ua(e))Md.call(e,n)&&Ba(t,n,e[n]);return t},Ha=(t,e)=>xd(t,Pd(e));const Dd=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}};Dd();function _o(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const Ld="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Fd=_o(Ld);function bc(t){return!!t||t===""}function xi(t){if(M(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=_e(s)?Wd(s):xi(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(_e(t))return t;if(ge(t))return t}}const Ud=/;(?![^(]*\))/g,Bd=/:(.+)/;function Wd(t){const e={};return t.split(Ud).forEach(n=>{if(n){const s=n.split(Bd);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function jn(t){let e="";if(_e(t))e=t;else if(M(t))for(let n=0;n<t.length;n++){const s=jn(t[n]);s&&(e+=s+" ")}else if(ge(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const On=t=>_e(t)?t:t==null?"":M(t)||ge(t)&&(t.toString===Tc||!D(t.toString))?JSON.stringify(t,Cc,2):String(t),Cc=(t,e)=>e&&e.__v_isRef?Cc(t,e.value):Sn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:Ic(e)?{[`Set(${e.size})`]:[...e.values()]}:ge(e)&&!M(e)&&!Sc(e)?String(e):e,G={},Tn=[],Ke=()=>{},Hd=()=>!1,$d=/^on[^a-z]/,Pi=t=>$d.test(t),go=t=>t.startsWith("onUpdate:"),Ie=Object.assign,mo=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Vd=Object.prototype.hasOwnProperty,W=(t,e)=>Vd.call(t,e),M=Array.isArray,Sn=t=>Oi(t)==="[object Map]",Ic=t=>Oi(t)==="[object Set]",D=t=>typeof t=="function",_e=t=>typeof t=="string",yo=t=>typeof t=="symbol",ge=t=>t!==null&&typeof t=="object",wc=t=>ge(t)&&D(t.then)&&D(t.catch),Tc=Object.prototype.toString,Oi=t=>Tc.call(t),jd=t=>Oi(t).slice(8,-1),Sc=t=>Oi(t)==="[object Object]",vo=t=>_e(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Xs=_o(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Mi=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},qd=/-(\w)/g,Mn=Mi(t=>t.replace(qd,(e,n)=>n?n.toUpperCase():"")),zd=/\B([A-Z])/g,qn=Mi(t=>t.replace(zd,"-$1").toLowerCase()),Rc=Mi(t=>t.charAt(0).toUpperCase()+t.slice(1)),ur=Mi(t=>t?`on${Rc(t)}`:""),ms=(t,e)=>!Object.is(t,e),Zs=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ri=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Nr=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let $a;const Kd=()=>$a||($a=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let et;class Gd{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&et&&(this.parent=et,this.index=(et.scopes||(et.scopes=[])).push(this)-1)}run(e){if(this.active){const n=et;try{return et=this,e()}finally{et=n}}}on(){et=this}off(){et=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.active=!1}}}function Yd(t,e=et){e&&e.active&&e.effects.push(t)}const Eo=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Nc=t=>(t.w&Ot)>0,kc=t=>(t.n&Ot)>0,Qd=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Ot},Jd=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];Nc(i)&&!kc(i)?i.delete(t):e[n++]=i,i.w&=~Ot,i.n&=~Ot}e.length=n}},kr=new WeakMap;let os=0,Ot=1;const Ar=30;let Ve;const Yt=Symbol(""),xr=Symbol("");class bo{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Yd(this,s)}run(){if(!this.active)return this.fn();let e=Ve,n=kt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ve,Ve=this,kt=!0,Ot=1<<++os,os<=Ar?Qd(this):Va(this),this.fn()}finally{os<=Ar&&Jd(this),Ot=1<<--os,Ve=this.parent,kt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ve===this?this.deferStop=!0:this.active&&(Va(this),this.onStop&&this.onStop(),this.active=!1)}}function Va(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let kt=!0;const Ac=[];function zn(){Ac.push(kt),kt=!1}function Kn(){const t=Ac.pop();kt=t===void 0?!0:t}function De(t,e,n){if(kt&&Ve){let s=kr.get(t);s||kr.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=Eo()),xc(i)}}function xc(t,e){let n=!1;os<=Ar?kc(t)||(t.n|=Ot,n=!Nc(t)):n=!t.has(Ve),n&&(t.add(Ve),Ve.deps.push(t))}function pt(t,e,n,s,i,r){const o=kr.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&M(t))o.forEach((l,c)=>{(c==="length"||c>=s)&&a.push(l)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":M(t)?vo(n)&&a.push(o.get("length")):(a.push(o.get(Yt)),Sn(t)&&a.push(o.get(xr)));break;case"delete":M(t)||(a.push(o.get(Yt)),Sn(t)&&a.push(o.get(xr)));break;case"set":Sn(t)&&a.push(o.get(Yt));break}if(a.length===1)a[0]&&Pr(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Pr(Eo(l))}}function Pr(t,e){for(const n of M(t)?t:[...t])(n!==Ve||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const Xd=_o("__proto__,__v_isRef,__isVue"),Pc=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(yo)),Zd=Co(),ef=Co(!1,!0),tf=Co(!0),ja=nf();function nf(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=V(this);for(let r=0,o=this.length;r<o;r++)De(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(V)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){zn();const s=V(this)[e].apply(this,n);return Kn(),s}}),t}function Co(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?vf:Fc:e?Lc:Dc).get(s))return s;const o=M(s);if(!t&&o&&W(ja,i))return Reflect.get(ja,i,r);const a=Reflect.get(s,i,r);return(yo(i)?Pc.has(i):Xd(i))||(t||De(s,"get",i),e)?a:ve(a)?!o||!vo(i)?a.value:a:ge(a)?t?Uc(a):un(a):a}}const sf=Oc(),rf=Oc(!0);function Oc(t=!1){return function(n,s,i,r){let o=n[s];if(ys(o)&&ve(o)&&!ve(i))return!1;if(!t&&!ys(i)&&(Bc(i)||(i=V(i),o=V(o)),!M(n)&&ve(o)&&!ve(i)))return o.value=i,!0;const a=M(n)&&vo(s)?Number(s)<n.length:W(n,s),l=Reflect.set(n,s,i,r);return n===V(r)&&(a?ms(i,o)&&pt(n,"set",s,i):pt(n,"add",s,i)),l}}function of(t,e){const n=W(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&pt(t,"delete",e,void 0),s}function af(t,e){const n=Reflect.has(t,e);return(!yo(e)||!Pc.has(e))&&De(t,"has",e),n}function lf(t){return De(t,"iterate",M(t)?"length":Yt),Reflect.ownKeys(t)}const Mc={get:Zd,set:sf,deleteProperty:of,has:af,ownKeys:lf},cf={get:tf,set(t,e){return!0},deleteProperty(t,e){return!0}},uf=Ie({},Mc,{get:ef,set:rf}),Io=t=>t,Di=t=>Reflect.getPrototypeOf(t);function js(t,e,n=!1,s=!1){t=t.__v_raw;const i=V(t),r=V(e);e!==r&&!n&&De(i,"get",e),!n&&De(i,"get",r);const{has:o}=Di(i),a=s?Io:n?So:vs;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function qs(t,e=!1){const n=this.__v_raw,s=V(n),i=V(t);return t!==i&&!e&&De(s,"has",t),!e&&De(s,"has",i),t===i?n.has(t):n.has(t)||n.has(i)}function zs(t,e=!1){return t=t.__v_raw,!e&&De(V(t),"iterate",Yt),Reflect.get(t,"size",t)}function qa(t){t=V(t);const e=V(this);return Di(e).has.call(e,t)||(e.add(t),pt(e,"add",t,t)),this}function za(t,e){e=V(e);const n=V(this),{has:s,get:i}=Di(n);let r=s.call(n,t);r||(t=V(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?ms(e,o)&&pt(n,"set",t,e):pt(n,"add",t,e),this}function Ka(t){const e=V(this),{has:n,get:s}=Di(e);let i=n.call(e,t);i||(t=V(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&pt(e,"delete",t,void 0),r}function Ga(){const t=V(this),e=t.size!==0,n=t.clear();return e&&pt(t,"clear",void 0,void 0),n}function Ks(t,e){return function(s,i){const r=this,o=r.__v_raw,a=V(o),l=e?Io:t?So:vs;return!t&&De(a,"iterate",Yt),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function Gs(t,e,n){return function(...s){const i=this.__v_raw,r=V(i),o=Sn(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?Io:e?So:vs;return!e&&De(r,"iterate",l?xr:Yt),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Et(t){return function(...e){return t==="delete"?!1:this}}function hf(){const t={get(r){return js(this,r)},get size(){return zs(this)},has:qs,add:qa,set:za,delete:Ka,clear:Ga,forEach:Ks(!1,!1)},e={get(r){return js(this,r,!1,!0)},get size(){return zs(this)},has:qs,add:qa,set:za,delete:Ka,clear:Ga,forEach:Ks(!1,!0)},n={get(r){return js(this,r,!0)},get size(){return zs(this,!0)},has(r){return qs.call(this,r,!0)},add:Et("add"),set:Et("set"),delete:Et("delete"),clear:Et("clear"),forEach:Ks(!0,!1)},s={get(r){return js(this,r,!0,!0)},get size(){return zs(this,!0)},has(r){return qs.call(this,r,!0)},add:Et("add"),set:Et("set"),delete:Et("delete"),clear:Et("clear"),forEach:Ks(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Gs(r,!1,!1),n[r]=Gs(r,!0,!1),e[r]=Gs(r,!1,!0),s[r]=Gs(r,!0,!0)}),[t,n,e,s]}const[df,ff,pf,_f]=hf();function wo(t,e){const n=e?t?_f:pf:t?ff:df;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(W(n,i)&&i in s?n:s,i,r)}const gf={get:wo(!1,!1)},mf={get:wo(!1,!0)},yf={get:wo(!0,!1)},Dc=new WeakMap,Lc=new WeakMap,Fc=new WeakMap,vf=new WeakMap;function Ef(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function bf(t){return t.__v_skip||!Object.isExtensible(t)?0:Ef(jd(t))}function un(t){return ys(t)?t:To(t,!1,Mc,gf,Dc)}function Cf(t){return To(t,!1,uf,mf,Lc)}function Uc(t){return To(t,!0,cf,yf,Fc)}function To(t,e,n,s,i){if(!ge(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=bf(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function Rn(t){return ys(t)?Rn(t.__v_raw):!!(t&&t.__v_isReactive)}function ys(t){return!!(t&&t.__v_isReadonly)}function Bc(t){return!!(t&&t.__v_isShallow)}function Wc(t){return Rn(t)||ys(t)}function V(t){const e=t&&t.__v_raw;return e?V(e):t}function Hc(t){return ri(t,"__v_skip",!0),t}const vs=t=>ge(t)?un(t):t,So=t=>ge(t)?Uc(t):t;function $c(t){kt&&Ve&&(t=V(t),xc(t.dep||(t.dep=Eo())))}function Vc(t,e){t=V(t),t.dep&&Pr(t.dep)}function ve(t){return!!(t&&t.__v_isRef===!0)}function jc(t){return If(t,!1)}function If(t,e){return ve(t)?t:new wf(t,e)}class wf{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:V(e),this._value=n?e:vs(e)}get value(){return $c(this),this._value}set value(e){e=this.__v_isShallow?e:V(e),ms(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:vs(e),Vc(this))}}function Fe(t){return ve(t)?t.value:t}const Tf={get:(t,e,n)=>Fe(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return ve(i)&&!ve(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function qc(t){return Rn(t)?t:new Proxy(t,Tf)}class Sf{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new bo(e,()=>{this._dirty||(this._dirty=!0,Vc(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=V(this);return $c(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Rf(t,e,n=!1){let s,i;const r=D(t);return r?(s=t,i=Ke):(s=t.get,i=t.set),new Sf(s,i,r||!i,n)}function At(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){Li(r,e,n)}return i}function Be(t,e,n,s){if(D(t)){const r=At(t,e,n,s);return r&&wc(r)&&r.catch(o=>{Li(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(Be(t[r],e,n,s));return i}function Li(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){At(l,null,10,[t,o,a]);return}}Nf(t,n,i,s)}function Nf(t,e,n,s=!0){console.error(t)}let oi=!1,Or=!1;const Me=[];let lt=0;const cs=[];let as=null,En=0;const us=[];let Ct=null,bn=0;const zc=Promise.resolve();let Ro=null,Mr=null;function kf(t){const e=Ro||zc;return t?e.then(this?t.bind(this):t):e}function Af(t){let e=lt+1,n=Me.length;for(;e<n;){const s=e+n>>>1;Es(Me[s])<t?e=s+1:n=s}return e}function Kc(t){(!Me.length||!Me.includes(t,oi&&t.allowRecurse?lt+1:lt))&&t!==Mr&&(t.id==null?Me.push(t):Me.splice(Af(t.id),0,t),Gc())}function Gc(){!oi&&!Or&&(Or=!0,Ro=zc.then(Jc))}function xf(t){const e=Me.indexOf(t);e>lt&&Me.splice(e,1)}function Yc(t,e,n,s){M(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?s+1:s))&&n.push(t),Gc()}function Pf(t){Yc(t,as,cs,En)}function Of(t){Yc(t,Ct,us,bn)}function No(t,e=null){if(cs.length){for(Mr=e,as=[...new Set(cs)],cs.length=0,En=0;En<as.length;En++)as[En]();as=null,En=0,Mr=null,No(t,e)}}function Qc(t){if(us.length){const e=[...new Set(us)];if(us.length=0,Ct){Ct.push(...e);return}for(Ct=e,Ct.sort((n,s)=>Es(n)-Es(s)),bn=0;bn<Ct.length;bn++)Ct[bn]();Ct=null,bn=0}}const Es=t=>t.id==null?1/0:t.id;function Jc(t){Or=!1,oi=!0,No(t),Me.sort((n,s)=>Es(n)-Es(s));const e=Ke;try{for(lt=0;lt<Me.length;lt++){const n=Me[lt];n&&n.active!==!1&&At(n,null,14)}}finally{lt=0,Me.length=0,Qc(),oi=!1,Ro=null,(Me.length||cs.length||us.length)&&Jc(t)}}function Mf(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||G;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[u]||G;f?i=n.map(g=>g.trim()):h&&(i=n.map(Nr))}let a,l=s[a=ur(e)]||s[a=ur(Mn(e))];!l&&r&&(l=s[a=ur(qn(e))]),l&&Be(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Be(c,t,6,i)}}function Xc(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!D(t)){const l=c=>{const u=Xc(c,e,!0);u&&(a=!0,Ie(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(s.set(t,null),null):(M(r)?r.forEach(l=>o[l]=null):Ie(o,r),s.set(t,o),o)}function Fi(t,e){return!t||!Pi(e)?!1:(e=e.slice(2).replace(/Once$/,""),W(t,e[0].toLowerCase()+e.slice(1))||W(t,qn(e))||W(t,e))}let qe=null,Ui=null;function ai(t){const e=qe;return qe=t,Ui=t&&t.type.__scopeId||null,e}function Df(t){Ui=t}function Lf(){Ui=null}function Ff(t,e=qe,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&il(-1);const r=ai(e),o=t(...i);return ai(r),s._d&&il(1),o};return s._n=!0,s._c=!0,s._d=!0,s}function hr(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:g,ctx:b,inheritAttrs:S}=t;let N,U;const ae=ai(t);try{if(n.shapeFlag&4){const X=i||s;N=tt(u.call(X,X,h,r,g,f,b)),U=l}else{const X=e;N=tt(X.length>1?X(r,{attrs:l,slots:a,emit:c}):X(r,null)),U=e.props?l:Uf(l)}}catch(X){hs.length=0,Li(X,t,1),N=Ye(Ge)}let J=N;if(U&&S!==!1){const X=Object.keys(U),{shapeFlag:Ce}=J;X.length&&Ce&7&&(o&&X.some(go)&&(U=Bf(U,o)),J=en(J,U))}return n.dirs&&(J.dirs=J.dirs?J.dirs.concat(n.dirs):n.dirs),n.transition&&(J.transition=n.transition),N=J,ai(ae),N}const Uf=t=>{let e;for(const n in t)(n==="class"||n==="style"||Pi(n))&&((e||(e={}))[n]=t[n]);return e},Bf=(t,e)=>{const n={};for(const s in t)(!go(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Wf(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?Ya(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==s[f]&&!Fi(c,f))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Ya(s,o,c):!0:!!o;return!1}function Ya(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Fi(n,r))return!0}return!1}function Hf({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const $f=t=>t.__isSuspense;function Vf(t,e){e&&e.pendingBranch?M(t)?e.effects.push(...t):e.effects.push(t):Of(t)}function li(t,e){if(ye){let n=ye.provides;const s=ye.parent&&ye.parent.provides;s===n&&(n=ye.provides=Object.create(s)),n[t]=e}}function dt(t,e,n=!1){const s=ye||qe;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&D(e)?e.call(s.proxy):e}}function jf(t,e){return ko(t,null,{flush:"post"})}const Qa={};function dr(t,e,n){return ko(t,e,n)}function ko(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=G){const a=ye;let l,c=!1,u=!1;if(ve(t)?(l=()=>t.value,c=Bc(t)):Rn(t)?(l=()=>t,s=!0):M(t)?(u=!0,c=t.some(Rn),l=()=>t.map(U=>{if(ve(U))return U.value;if(Rn(U))return Kt(U);if(D(U))return At(U,a,2)})):D(t)?e?l=()=>At(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),Be(t,a,3,[f])}:l=Ke,e&&s){const U=l;l=()=>Kt(U())}let h,f=U=>{h=N.onStop=()=>{At(U,a,4)}};if(Cs)return f=Ke,e?n&&Be(e,a,3,[l(),u?[]:void 0,f]):l(),Ke;let g=u?[]:Qa;const b=()=>{if(!!N.active)if(e){const U=N.run();(s||c||(u?U.some((ae,J)=>ms(ae,g[J])):ms(U,g)))&&(h&&h(),Be(e,a,3,[U,g===Qa?void 0:g,f]),g=U)}else N.run()};b.allowRecurse=!!e;let S;i==="sync"?S=b:i==="post"?S=()=>Ne(b,a&&a.suspense):S=()=>{!a||a.isMounted?Pf(b):b()};const N=new bo(l,S);return e?n?b():g=N.run():i==="post"?Ne(N.run.bind(N),a&&a.suspense):N.run(),()=>{N.stop(),a&&a.scope&&mo(a.scope.effects,N)}}function qf(t,e,n){const s=this.proxy,i=_e(t)?t.includes(".")?Zc(s,t):()=>s[t]:t.bind(s,s);let r;D(e)?r=e:(r=e.handler,n=e);const o=ye;Dn(this);const a=ko(i,r.bind(s),n);return o?Dn(o):Jt(),a}function Zc(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function Kt(t,e){if(!ge(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),ve(t))Kt(t.value,e);else if(M(t))for(let n=0;n<t.length;n++)Kt(t[n],e);else if(Ic(t)||Sn(t))t.forEach(n=>{Kt(n,e)});else if(Sc(t))for(const n in t)Kt(t[n],e);return t}function zf(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ao(()=>{t.isMounted=!0}),su(()=>{t.isUnmounting=!0}),t}const Le=[Function,Array],Kf={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Le,onEnter:Le,onAfterEnter:Le,onEnterCancelled:Le,onBeforeLeave:Le,onLeave:Le,onAfterLeave:Le,onLeaveCancelled:Le,onBeforeAppear:Le,onAppear:Le,onAfterAppear:Le,onAppearCancelled:Le},setup(t,{slots:e}){const n=mu(),s=zf();let i;return()=>{const r=e.default&&tu(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const S of r)if(S.type!==Ge){o=S;break}}const a=V(t),{mode:l}=a;if(s.isLeaving)return fr(o);const c=Ja(o);if(!c)return fr(o);const u=Dr(c,a,s,n);Lr(c,u);const h=n.subTree,f=h&&Ja(h);let g=!1;const{getTransitionKey:b}=c.type;if(b){const S=b();i===void 0?i=S:S!==i&&(i=S,g=!0)}if(f&&f.type!==Ge&&(!qt(c,f)||g)){const S=Dr(f,a,s,n);if(Lr(f,S),l==="out-in")return s.isLeaving=!0,S.afterLeave=()=>{s.isLeaving=!1,n.update()},fr(o);l==="in-out"&&c.type!==Ge&&(S.delayLeave=(N,U,ae)=>{const J=eu(s,f);J[String(f.key)]=f,N._leaveCb=()=>{U(),N._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=ae})}return o}}},Gf=Kf;function eu(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Dr(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:g,onLeaveCancelled:b,onBeforeAppear:S,onAppear:N,onAfterAppear:U,onAppearCancelled:ae}=e,J=String(t.key),X=eu(n,t),Ce=(j,le)=>{j&&Be(j,s,9,le)},We={mode:r,persisted:o,beforeEnter(j){let le=a;if(!n.isMounted)if(i)le=S||a;else return;j._leaveCb&&j._leaveCb(!0);const se=X[J];se&&qt(t,se)&&se.el._leaveCb&&se.el._leaveCb(),Ce(le,[j])},enter(j){let le=l,se=c,xe=u;if(!n.isMounted)if(i)le=N||l,se=U||c,xe=ae||u;else return;let Pe=!1;const He=j._enterCb=_n=>{Pe||(Pe=!0,_n?Ce(xe,[j]):Ce(se,[j]),We.delayedLeave&&We.delayedLeave(),j._enterCb=void 0)};le?(le(j,He),le.length<=1&&He()):He()},leave(j,le){const se=String(t.key);if(j._enterCb&&j._enterCb(!0),n.isUnmounting)return le();Ce(h,[j]);let xe=!1;const Pe=j._leaveCb=He=>{xe||(xe=!0,le(),He?Ce(b,[j]):Ce(g,[j]),j._leaveCb=void 0,X[se]===t&&delete X[se])};X[se]=t,f?(f(j,Pe),f.length<=1&&Pe()):Pe()},clone(j){return Dr(j,e,n,s)}};return We}function fr(t){if(Bi(t))return t=en(t),t.children=null,t}function Ja(t){return Bi(t)?t.children?t.children[0]:void 0:t}function Lr(t,e){t.shapeFlag&6&&t.component?Lr(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function tu(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===de?(o.patchFlag&128&&i++,s=s.concat(tu(o.children,e,a))):(e||o.type!==Ge)&&s.push(a!=null?en(o,{key:a}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function Ut(t){return D(t)?{setup:t,name:t.name}:t}const Fr=t=>!!t.type.__asyncLoader,Bi=t=>t.type.__isKeepAlive;function Yf(t,e){nu(t,"a",e)}function Qf(t,e){nu(t,"da",e)}function nu(t,e,n=ye){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Wi(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Bi(i.parent.vnode)&&Jf(s,e,n,i),i=i.parent}}function Jf(t,e,n,s){const i=Wi(e,t,s,!0);xo(()=>{mo(s[e],i)},n)}function Wi(t,e,n=ye,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;zn(),Dn(n);const a=Be(e,n,t,o);return Jt(),Kn(),a});return s?i.unshift(r):i.push(r),r}}const mt=t=>(e,n=ye)=>(!Cs||t==="sp")&&Wi(t,e,n),Xf=mt("bm"),Ao=mt("m"),Zf=mt("bu"),ep=mt("u"),su=mt("bum"),xo=mt("um"),tp=mt("sp"),np=mt("rtg"),sp=mt("rtc");function ip(t,e=ye){Wi("ec",t,e)}let Ur=!0;function rp(t){const e=ru(t),n=t.proxy,s=t.ctx;Ur=!1,e.beforeCreate&&Xa(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:g,updated:b,activated:S,deactivated:N,beforeDestroy:U,beforeUnmount:ae,destroyed:J,unmounted:X,render:Ce,renderTracked:We,renderTriggered:j,errorCaptured:le,serverPrefetch:se,expose:xe,inheritAttrs:Pe,components:He,directives:_n,filters:Pa}=e;if(c&&op(c,s,null,t.appContext.config.unwrapInjectedRef),o)for(const ie in o){const Z=o[ie];D(Z)&&(s[ie]=Z.bind(n))}if(i){const ie=i.call(n,n);ge(ie)&&(t.data=un(ie))}if(Ur=!0,r)for(const ie in r){const Z=r[ie],ot=D(Z)?Z.bind(n,n):D(Z.get)?Z.get.bind(n,n):Ke,ar=!D(Z)&&D(Z.set)?Z.set.bind(n):Ke,es=Eu({get:ot,set:ar});Object.defineProperty(s,ie,{enumerable:!0,configurable:!0,get:()=>es.value,set:gn=>es.value=gn})}if(a)for(const ie in a)iu(a[ie],s,n,ie);if(l){const ie=D(l)?l.call(n):l;Reflect.ownKeys(ie).forEach(Z=>{li(Z,ie[Z])})}u&&Xa(u,t,"c");function Re(ie,Z){M(Z)?Z.forEach(ot=>ie(ot.bind(n))):Z&&ie(Z.bind(n))}if(Re(Xf,h),Re(Ao,f),Re(Zf,g),Re(ep,b),Re(Yf,S),Re(Qf,N),Re(ip,le),Re(sp,We),Re(np,j),Re(su,ae),Re(xo,X),Re(tp,se),M(xe))if(xe.length){const ie=t.exposed||(t.exposed={});xe.forEach(Z=>{Object.defineProperty(ie,Z,{get:()=>n[Z],set:ot=>n[Z]=ot})})}else t.exposed||(t.exposed={});Ce&&t.render===Ke&&(t.render=Ce),Pe!=null&&(t.inheritAttrs=Pe),He&&(t.components=He),_n&&(t.directives=_n)}function op(t,e,n=Ke,s=!1){M(t)&&(t=Br(t));for(const i in t){const r=t[i];let o;ge(r)?"default"in r?o=dt(r.from||i,r.default,!0):o=dt(r.from||i):o=dt(r),ve(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function Xa(t,e,n){Be(M(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function iu(t,e,n,s){const i=s.includes(".")?Zc(n,s):()=>n[s];if(_e(t)){const r=e[t];D(r)&&dr(i,r)}else if(D(t))dr(i,t.bind(n));else if(ge(t))if(M(t))t.forEach(r=>iu(r,e,n,s));else{const r=D(t.handler)?t.handler.bind(n):e[t.handler];D(r)&&dr(i,r,t)}}function ru(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>ci(l,c,o,!0)),ci(l,e,o)),r.set(e,l),l}function ci(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&ci(t,r,n,!0),i&&i.forEach(o=>ci(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=ap[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const ap={data:Za,props:$t,emits:$t,methods:$t,computed:$t,beforeCreate:Te,created:Te,beforeMount:Te,mounted:Te,beforeUpdate:Te,updated:Te,beforeDestroy:Te,beforeUnmount:Te,destroyed:Te,unmounted:Te,activated:Te,deactivated:Te,errorCaptured:Te,serverPrefetch:Te,components:$t,directives:$t,watch:cp,provide:Za,inject:lp};function Za(t,e){return e?t?function(){return Ie(D(t)?t.call(this,this):t,D(e)?e.call(this,this):e)}:e:t}function lp(t,e){return $t(Br(t),Br(e))}function Br(t){if(M(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Te(t,e){return t?[...new Set([].concat(t,e))]:e}function $t(t,e){return t?Ie(Ie(Object.create(null),t),e):e}function cp(t,e){if(!t)return e;if(!e)return t;const n=Ie(Object.create(null),t);for(const s in e)n[s]=Te(t[s],e[s]);return n}function up(t,e,n,s=!1){const i={},r={};ri(r,Hi,1),t.propsDefaults=Object.create(null),ou(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Cf(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function hp(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=V(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Fi(t.emitsOptions,f))continue;const g=e[f];if(l)if(W(r,f))g!==r[f]&&(r[f]=g,c=!0);else{const b=Mn(f);i[b]=Wr(l,a,b,g,t,!1)}else g!==r[f]&&(r[f]=g,c=!0)}}}else{ou(t,e,i,r)&&(c=!0);let u;for(const h in a)(!e||!W(e,h)&&((u=qn(h))===h||!W(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=Wr(l,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!W(e,h)&&!0)&&(delete r[h],c=!0)}c&&pt(t,"set","$attrs")}function ou(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Xs(l))continue;const c=e[l];let u;i&&W(i,u=Mn(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:Fi(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=V(n),c=a||G;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Wr(i,l,h,c[h],t,!W(c,h))}}return o}function Wr(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=W(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&D(l)){const{propsDefaults:c}=i;n in c?s=c[n]:(Dn(i),s=c[n]=l.call(null,e),Jt())}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===qn(n))&&(s=!0))}return s}function au(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!D(t)){const u=h=>{l=!0;const[f,g]=au(h,e,!0);Ie(o,f),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return s.set(t,Tn),Tn;if(M(r))for(let u=0;u<r.length;u++){const h=Mn(r[u]);el(h)&&(o[h]=G)}else if(r)for(const u in r){const h=Mn(u);if(el(h)){const f=r[u],g=o[h]=M(f)||D(f)?{type:f}:f;if(g){const b=sl(Boolean,g.type),S=sl(String,g.type);g[0]=b>-1,g[1]=S<0||b<S,(b>-1||W(g,"default"))&&a.push(h)}}}const c=[o,a];return s.set(t,c),c}function el(t){return t[0]!=="$"}function tl(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function nl(t,e){return tl(t)===tl(e)}function sl(t,e){return M(e)?e.findIndex(n=>nl(n,t)):D(e)&&nl(e,t)?0:-1}const lu=t=>t[0]==="_"||t==="$stable",Po=t=>M(t)?t.map(tt):[tt(t)],dp=(t,e,n)=>{const s=Ff((...i)=>Po(e(...i)),n);return s._c=!1,s},cu=(t,e,n)=>{const s=t._ctx;for(const i in t){if(lu(i))continue;const r=t[i];if(D(r))e[i]=dp(i,r,s);else if(r!=null){const o=Po(r);e[i]=()=>o}}},uu=(t,e)=>{const n=Po(e);t.slots.default=()=>n},fp=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=V(e),ri(e,"_",n)):cu(e,t.slots={})}else t.slots={},e&&uu(t,e);ri(t.slots,Hi,1)},pp=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=G;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(Ie(i,e),!n&&a===1&&delete i._):(r=!e.$stable,cu(e,i)),o=e}else e&&(uu(t,e),o={default:1});if(r)for(const a in i)!lu(a)&&!(a in o)&&delete i[a]};function hu(t,e){const n=qe;if(n===null)return t;const s=$i(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,c=G]=e[r];D(o)&&(o={mounted:o,updated:o}),o.deep&&Kt(a),i.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c})}return t}function Wt(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(zn(),Be(l,n,8,[t.el,a,t,e]),Kn())}}function du(){return{app:null,config:{isNativeTag:Hd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let _p=0;function gp(t,e){return function(s,i=null){D(s)||(s=Object.assign({},s)),i!=null&&!ge(i)&&(i=null);const r=du(),o=new Set;let a=!1;const l=r.app={_uid:_p++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:Lp,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&D(c.install)?(o.add(c),c.install(l,...u)):D(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const f=Ye(s,i);return f.appContext=r,u&&e?e(f,c):t(f,c,h),a=!0,l._container=c,c.__vue_app__=l,$i(f.component)||f.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l}};return l}}function Hr(t,e,n,s,i=!1){if(M(t)){t.forEach((f,g)=>Hr(f,e&&(M(e)?e[g]:e),n,s,i));return}if(Fr(s)&&!i)return;const r=s.shapeFlag&4?$i(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===G?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(_e(c)?(u[c]=null,W(h,c)&&(h[c]=null)):ve(c)&&(c.value=null)),D(l))At(l,a,12,[o,u]);else{const f=_e(l),g=ve(l);if(f||g){const b=()=>{if(t.f){const S=f?u[l]:l.value;i?M(S)&&mo(S,r):M(S)?S.includes(r)||S.push(r):f?(u[l]=[r],W(h,l)&&(h[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else f?(u[l]=o,W(h,l)&&(h[l]=o)):ve(l)&&(l.value=o,t.k&&(u[t.k]=o))};o?(b.id=-1,Ne(b,n)):b()}}}const Ne=Vf;function mp(t){return yp(t)}function yp(t,e){const n=Kd();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:g=Ke,cloneNode:b,insertStaticContent:S}=t,N=(d,p,_,y=null,m=null,I=null,T=!1,C=null,w=!!p.dynamicChildren)=>{if(d===p)return;d&&!qt(d,p)&&(y=Vs(d),vt(d,m,I,!0),d=null),p.patchFlag===-2&&(w=!1,p.dynamicChildren=null);const{type:v,ref:k,shapeFlag:R}=p;switch(v){case Oo:U(d,p,_,y);break;case Ge:ae(d,p,_,y);break;case ei:d==null&&J(p,_,y,T);break;case de:_n(d,p,_,y,m,I,T,C,w);break;default:R&1?We(d,p,_,y,m,I,T,C,w):R&6?Pa(d,p,_,y,m,I,T,C,w):(R&64||R&128)&&v.process(d,p,_,y,m,I,T,C,w,mn)}k!=null&&m&&Hr(k,d&&d.ref,I,p||d,!p)},U=(d,p,_,y)=>{if(d==null)s(p.el=a(p.children),_,y);else{const m=p.el=d.el;p.children!==d.children&&c(m,p.children)}},ae=(d,p,_,y)=>{d==null?s(p.el=l(p.children||""),_,y):p.el=d.el},J=(d,p,_,y)=>{[d.el,d.anchor]=S(d.children,p,_,y,d.el,d.anchor)},X=({el:d,anchor:p},_,y)=>{let m;for(;d&&d!==p;)m=f(d),s(d,_,y),d=m;s(p,_,y)},Ce=({el:d,anchor:p})=>{let _;for(;d&&d!==p;)_=f(d),i(d),d=_;i(p)},We=(d,p,_,y,m,I,T,C,w)=>{T=T||p.type==="svg",d==null?j(p,_,y,m,I,T,C,w):xe(d,p,m,I,T,C,w)},j=(d,p,_,y,m,I,T,C)=>{let w,v;const{type:k,props:R,shapeFlag:A,transition:P,patchFlag:H,dirs:ne}=d;if(d.el&&b!==void 0&&H===-1)w=d.el=b(d.el);else{if(w=d.el=o(d.type,I,R&&R.is,R),A&8?u(w,d.children):A&16&&se(d.children,w,null,y,m,I&&k!=="foreignObject",T,C),ne&&Wt(d,null,y,"created"),R){for(const ee in R)ee!=="value"&&!Xs(ee)&&r(w,ee,null,R[ee],I,d.children,y,m,at);"value"in R&&r(w,"value",null,R.value),(v=R.onVnodeBeforeMount)&&Ze(v,y,d)}le(w,d,d.scopeId,T,y)}ne&&Wt(d,null,y,"beforeMount");const z=(!m||m&&!m.pendingBranch)&&P&&!P.persisted;z&&P.beforeEnter(w),s(w,p,_),((v=R&&R.onVnodeMounted)||z||ne)&&Ne(()=>{v&&Ze(v,y,d),z&&P.enter(w),ne&&Wt(d,null,y,"mounted")},m)},le=(d,p,_,y,m)=>{if(_&&g(d,_),y)for(let I=0;I<y.length;I++)g(d,y[I]);if(m){let I=m.subTree;if(p===I){const T=m.vnode;le(d,T,T.scopeId,T.slotScopeIds,m.parent)}}},se=(d,p,_,y,m,I,T,C,w=0)=>{for(let v=w;v<d.length;v++){const k=d[v]=C?It(d[v]):tt(d[v]);N(null,k,p,_,y,m,I,T,C)}},xe=(d,p,_,y,m,I,T)=>{const C=p.el=d.el;let{patchFlag:w,dynamicChildren:v,dirs:k}=p;w|=d.patchFlag&16;const R=d.props||G,A=p.props||G;let P;_&&Ht(_,!1),(P=A.onVnodeBeforeUpdate)&&Ze(P,_,p,d),k&&Wt(p,d,_,"beforeUpdate"),_&&Ht(_,!0);const H=m&&p.type!=="foreignObject";if(v?Pe(d.dynamicChildren,v,C,_,y,H,I):T||ot(d,p,C,null,_,y,H,I,!1),w>0){if(w&16)He(C,p,R,A,_,y,m);else if(w&2&&R.class!==A.class&&r(C,"class",null,A.class,m),w&4&&r(C,"style",R.style,A.style,m),w&8){const ne=p.dynamicProps;for(let z=0;z<ne.length;z++){const ee=ne[z],$e=R[ee],yn=A[ee];(yn!==$e||ee==="value")&&r(C,ee,$e,yn,m,d.children,_,y,at)}}w&1&&d.children!==p.children&&u(C,p.children)}else!T&&v==null&&He(C,p,R,A,_,y,m);((P=A.onVnodeUpdated)||k)&&Ne(()=>{P&&Ze(P,_,p,d),k&&Wt(p,d,_,"updated")},y)},Pe=(d,p,_,y,m,I,T)=>{for(let C=0;C<p.length;C++){const w=d[C],v=p[C],k=w.el&&(w.type===de||!qt(w,v)||w.shapeFlag&70)?h(w.el):_;N(w,v,k,null,y,m,I,T,!0)}},He=(d,p,_,y,m,I,T)=>{if(_!==y){for(const C in y){if(Xs(C))continue;const w=y[C],v=_[C];w!==v&&C!=="value"&&r(d,C,v,w,T,p.children,m,I,at)}if(_!==G)for(const C in _)!Xs(C)&&!(C in y)&&r(d,C,_[C],null,T,p.children,m,I,at);"value"in y&&r(d,"value",_.value,y.value)}},_n=(d,p,_,y,m,I,T,C,w)=>{const v=p.el=d?d.el:a(""),k=p.anchor=d?d.anchor:a("");let{patchFlag:R,dynamicChildren:A,slotScopeIds:P}=p;P&&(C=C?C.concat(P):P),d==null?(s(v,_,y),s(k,_,y),se(p.children,_,k,m,I,T,C,w)):R>0&&R&64&&A&&d.dynamicChildren?(Pe(d.dynamicChildren,A,_,m,I,T,C),(p.key!=null||m&&p===m.subTree)&&fu(d,p,!0)):ot(d,p,_,k,m,I,T,C,w)},Pa=(d,p,_,y,m,I,T,C,w)=>{p.slotScopeIds=C,d==null?p.shapeFlag&512?m.ctx.activate(p,_,y,T,w):or(p,_,y,m,I,T,w):Re(d,p,w)},or=(d,p,_,y,m,I,T)=>{const C=d.component=Ap(d,y,m);if(Bi(d)&&(C.ctx.renderer=mn),xp(C),C.asyncDep){if(m&&m.registerDep(C,ie),!d.el){const w=C.subTree=Ye(Ge);ae(null,w,p,_)}return}ie(C,d,p,_,m,I,T)},Re=(d,p,_)=>{const y=p.component=d.component;if(Wf(d,p,_))if(y.asyncDep&&!y.asyncResolved){Z(y,p,_);return}else y.next=p,xf(y.update),y.update();else p.component=d.component,p.el=d.el,y.vnode=p},ie=(d,p,_,y,m,I,T)=>{const C=()=>{if(d.isMounted){let{next:k,bu:R,u:A,parent:P,vnode:H}=d,ne=k,z;Ht(d,!1),k?(k.el=H.el,Z(d,k,T)):k=H,R&&Zs(R),(z=k.props&&k.props.onVnodeBeforeUpdate)&&Ze(z,P,k,H),Ht(d,!0);const ee=hr(d),$e=d.subTree;d.subTree=ee,N($e,ee,h($e.el),Vs($e),d,m,I),k.el=ee.el,ne===null&&Hf(d,ee.el),A&&Ne(A,m),(z=k.props&&k.props.onVnodeUpdated)&&Ne(()=>Ze(z,P,k,H),m)}else{let k;const{el:R,props:A}=p,{bm:P,m:H,parent:ne}=d,z=Fr(p);if(Ht(d,!1),P&&Zs(P),!z&&(k=A&&A.onVnodeBeforeMount)&&Ze(k,ne,p),Ht(d,!0),R&&cr){const ee=()=>{d.subTree=hr(d),cr(R,d.subTree,d,m,null)};z?p.type.__asyncLoader().then(()=>!d.isUnmounted&&ee()):ee()}else{const ee=d.subTree=hr(d);N(null,ee,_,y,d,m,I),p.el=ee.el}if(H&&Ne(H,m),!z&&(k=A&&A.onVnodeMounted)){const ee=p;Ne(()=>Ze(k,ne,ee),m)}p.shapeFlag&256&&d.a&&Ne(d.a,m),d.isMounted=!0,p=_=y=null}},w=d.effect=new bo(C,()=>Kc(d.update),d.scope),v=d.update=w.run.bind(w);v.id=d.uid,Ht(d,!0),v()},Z=(d,p,_)=>{p.component=d;const y=d.vnode.props;d.vnode=p,d.next=null,hp(d,p.props,y,_),pp(d,p.children,_),zn(),No(void 0,d.update),Kn()},ot=(d,p,_,y,m,I,T,C,w=!1)=>{const v=d&&d.children,k=d?d.shapeFlag:0,R=p.children,{patchFlag:A,shapeFlag:P}=p;if(A>0){if(A&128){es(v,R,_,y,m,I,T,C,w);return}else if(A&256){ar(v,R,_,y,m,I,T,C,w);return}}P&8?(k&16&&at(v,m,I),R!==v&&u(_,R)):k&16?P&16?es(v,R,_,y,m,I,T,C,w):at(v,m,I,!0):(k&8&&u(_,""),P&16&&se(R,_,y,m,I,T,C,w))},ar=(d,p,_,y,m,I,T,C,w)=>{d=d||Tn,p=p||Tn;const v=d.length,k=p.length,R=Math.min(v,k);let A;for(A=0;A<R;A++){const P=p[A]=w?It(p[A]):tt(p[A]);N(d[A],P,_,null,m,I,T,C,w)}v>k?at(d,m,I,!0,!1,R):se(p,_,y,m,I,T,C,w,R)},es=(d,p,_,y,m,I,T,C,w)=>{let v=0;const k=p.length;let R=d.length-1,A=k-1;for(;v<=R&&v<=A;){const P=d[v],H=p[v]=w?It(p[v]):tt(p[v]);if(qt(P,H))N(P,H,_,null,m,I,T,C,w);else break;v++}for(;v<=R&&v<=A;){const P=d[R],H=p[A]=w?It(p[A]):tt(p[A]);if(qt(P,H))N(P,H,_,null,m,I,T,C,w);else break;R--,A--}if(v>R){if(v<=A){const P=A+1,H=P<k?p[P].el:y;for(;v<=A;)N(null,p[v]=w?It(p[v]):tt(p[v]),_,H,m,I,T,C,w),v++}}else if(v>A)for(;v<=R;)vt(d[v],m,I,!0),v++;else{const P=v,H=v,ne=new Map;for(v=H;v<=A;v++){const Oe=p[v]=w?It(p[v]):tt(p[v]);Oe.key!=null&&ne.set(Oe.key,v)}let z,ee=0;const $e=A-H+1;let yn=!1,Da=0;const ts=new Array($e);for(v=0;v<$e;v++)ts[v]=0;for(v=P;v<=R;v++){const Oe=d[v];if(ee>=$e){vt(Oe,m,I,!0);continue}let Xe;if(Oe.key!=null)Xe=ne.get(Oe.key);else for(z=H;z<=A;z++)if(ts[z-H]===0&&qt(Oe,p[z])){Xe=z;break}Xe===void 0?vt(Oe,m,I,!0):(ts[Xe-H]=v+1,Xe>=Da?Da=Xe:yn=!0,N(Oe,p[Xe],_,null,m,I,T,C,w),ee++)}const La=yn?vp(ts):Tn;for(z=La.length-1,v=$e-1;v>=0;v--){const Oe=H+v,Xe=p[Oe],Fa=Oe+1<k?p[Oe+1].el:y;ts[v]===0?N(null,Xe,_,Fa,m,I,T,C,w):yn&&(z<0||v!==La[z]?gn(Xe,_,Fa,2):z--)}}},gn=(d,p,_,y,m=null)=>{const{el:I,type:T,transition:C,children:w,shapeFlag:v}=d;if(v&6){gn(d.component.subTree,p,_,y);return}if(v&128){d.suspense.move(p,_,y);return}if(v&64){T.move(d,p,_,mn);return}if(T===de){s(I,p,_);for(let R=0;R<w.length;R++)gn(w[R],p,_,y);s(d.anchor,p,_);return}if(T===ei){X(d,p,_);return}if(y!==2&&v&1&&C)if(y===0)C.beforeEnter(I),s(I,p,_),Ne(()=>C.enter(I),m);else{const{leave:R,delayLeave:A,afterLeave:P}=C,H=()=>s(I,p,_),ne=()=>{R(I,()=>{H(),P&&P()})};A?A(I,H,ne):ne()}else s(I,p,_)},vt=(d,p,_,y=!1,m=!1)=>{const{type:I,props:T,ref:C,children:w,dynamicChildren:v,shapeFlag:k,patchFlag:R,dirs:A}=d;if(C!=null&&Hr(C,null,_,d,!0),k&256){p.ctx.deactivate(d);return}const P=k&1&&A,H=!Fr(d);let ne;if(H&&(ne=T&&T.onVnodeBeforeUnmount)&&Ze(ne,p,d),k&6)kd(d.component,_,y);else{if(k&128){d.suspense.unmount(_,y);return}P&&Wt(d,null,p,"beforeUnmount"),k&64?d.type.remove(d,p,_,m,mn,y):v&&(I!==de||R>0&&R&64)?at(v,p,_,!1,!0):(I===de&&R&384||!m&&k&16)&&at(w,p,_),y&&Oa(d)}(H&&(ne=T&&T.onVnodeUnmounted)||P)&&Ne(()=>{ne&&Ze(ne,p,d),P&&Wt(d,null,p,"unmounted")},_)},Oa=d=>{const{type:p,el:_,anchor:y,transition:m}=d;if(p===de){Nd(_,y);return}if(p===ei){Ce(d);return}const I=()=>{i(_),m&&!m.persisted&&m.afterLeave&&m.afterLeave()};if(d.shapeFlag&1&&m&&!m.persisted){const{leave:T,delayLeave:C}=m,w=()=>T(_,I);C?C(d.el,I,w):w()}else I()},Nd=(d,p)=>{let _;for(;d!==p;)_=f(d),i(d),d=_;i(p)},kd=(d,p,_)=>{const{bum:y,scope:m,update:I,subTree:T,um:C}=d;y&&Zs(y),m.stop(),I&&(I.active=!1,vt(T,d,p,_)),C&&Ne(C,p),Ne(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},at=(d,p,_,y=!1,m=!1,I=0)=>{for(let T=I;T<d.length;T++)vt(d[T],p,_,y,m)},Vs=d=>d.shapeFlag&6?Vs(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),Ma=(d,p,_)=>{d==null?p._vnode&&vt(p._vnode,null,null,!0):N(p._vnode||null,d,p,null,null,null,_),Qc(),p._vnode=d},mn={p:N,um:vt,m:gn,r:Oa,mt:or,mc:se,pc:ot,pbc:Pe,n:Vs,o:t};let lr,cr;return e&&([lr,cr]=e(mn)),{render:Ma,hydrate:lr,createApp:gp(Ma,lr)}}function Ht({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function fu(t,e,n=!1){const s=t.children,i=e.children;if(M(s)&&M(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=It(i[r]),a.el=o.el),n||fu(o,a))}}function vp(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const Ep=t=>t.__isTeleport,bp=Symbol(),de=Symbol(void 0),Oo=Symbol(void 0),Ge=Symbol(void 0),ei=Symbol(void 0),hs=[];let Qt=null;function te(t=!1){hs.push(Qt=t?null:[])}function Cp(){hs.pop(),Qt=hs[hs.length-1]||null}let ui=1;function il(t){ui+=t}function pu(t){return t.dynamicChildren=ui>0?Qt||Tn:null,Cp(),ui>0&&Qt&&Qt.push(t),t}function Ee(t,e,n,s,i,r){return pu(ce(t,e,n,s,i,r,!0))}function Mt(t,e,n,s,i){return pu(Ye(t,e,n,s,i,!0))}function Ip(t){return t?t.__v_isVNode===!0:!1}function qt(t,e){return t.type===e.type&&t.key===e.key}const Hi="__vInternal",_u=({key:t})=>t!=null?t:null,ti=({ref:t,ref_key:e,ref_for:n})=>t!=null?_e(t)||ve(t)||D(t)?{i:qe,r:t,k:e,f:!!n}:t:null;function ce(t,e=null,n=null,s=0,i=null,r=t===de?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&_u(e),ref:e&&ti(e),scopeId:Ui,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null};return a?(Mo(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=_e(n)?8:16),ui>0&&!o&&Qt&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Qt.push(l),l}const Ye=wp;function wp(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===bp)&&(t=Ge),Ip(t)){const a=en(t,e,!0);return n&&Mo(a,n),a}if(Dp(t)&&(t=t.__vccOpts),e){e=Tp(e);let{class:a,style:l}=e;a&&!_e(a)&&(e.class=jn(a)),ge(l)&&(Wc(l)&&!M(l)&&(l=Ie({},l)),e.style=xi(l))}const o=_e(t)?1:$f(t)?128:Ep(t)?64:ge(t)?4:D(t)?2:0;return ce(t,e,n,s,i,o,r,!0)}function Tp(t){return t?Wc(t)||Hi in t?Ie({},t):t:null}function en(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?Sp(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&_u(a),ref:e&&e.ref?n&&i?M(i)?i.concat(ti(e)):[i,ti(e)]:ti(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==de?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&en(t.ssContent),ssFallback:t.ssFallback&&en(t.ssFallback),el:t.el,anchor:t.anchor}}function gu(t=" ",e=0){return Ye(Oo,null,t,e)}function Ys(t="",e=!1){return e?(te(),Mt(Ge,null,t)):Ye(Ge,null,t)}function tt(t){return t==null||typeof t=="boolean"?Ye(Ge):M(t)?Ye(de,null,t.slice()):typeof t=="object"?It(t):Ye(Oo,null,String(t))}function It(t){return t.el===null||t.memo?t:en(t)}function Mo(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(M(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Mo(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Hi in e)?e._ctx=qe:i===3&&qe&&(qe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else D(e)?(e={default:e,_ctx:qe},n=32):(e=String(e),s&64?(n=16,e=[gu(e)]):n=8);t.children=e,t.shapeFlag|=n}function Sp(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=jn([e.class,s.class]));else if(i==="style")e.style=xi([e.style,s.style]);else if(Pi(i)){const r=e[i],o=s[i];o&&r!==o&&!(M(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function Ze(t,e,n,s=null){Be(t,e,7,[n,s])}function bs(t,e,n,s){let i;const r=n&&n[s];if(M(t)||_e(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(ge(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}const $r=t=>t?yu(t)?$i(t)||t.proxy:$r(t.parent):null,hi=Ie(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>$r(t.parent),$root:t=>$r(t.root),$emit:t=>t.emit,$options:t=>ru(t),$forceUpdate:t=>()=>Kc(t.update),$nextTick:t=>kf.bind(t.proxy),$watch:t=>qf.bind(t)}),Rp={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(s!==G&&W(s,e))return o[e]=1,s[e];if(i!==G&&W(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&W(c,e))return o[e]=3,r[e];if(n!==G&&W(n,e))return o[e]=4,n[e];Ur&&(o[e]=0)}}const u=hi[e];let h,f;if(u)return e==="$attrs"&&De(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==G&&W(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,W(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return i!==G&&W(i,e)?(i[e]=n,!0):s!==G&&W(s,e)?(s[e]=n,!0):W(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==G&&W(t,o)||e!==G&&W(e,o)||(a=r[0])&&W(a,o)||W(s,o)||W(hi,o)||W(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:W(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},Np=du();let kp=0;function Ap(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||Np,r={uid:kp++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Gd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:au(s,i),emitsOptions:Xc(s,i),emit:null,emitted:null,propsDefaults:G,inheritAttrs:s.inheritAttrs,ctx:G,data:G,props:G,attrs:G,slots:G,refs:G,setupState:G,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Mf.bind(null,r),t.ce&&t.ce(r),r}let ye=null;const mu=()=>ye||qe,Dn=t=>{ye=t,t.scope.on()},Jt=()=>{ye&&ye.scope.off(),ye=null};function yu(t){return t.vnode.shapeFlag&4}let Cs=!1;function xp(t,e=!1){Cs=e;const{props:n,children:s}=t.vnode,i=yu(t);up(t,n,i,e),fp(t,s);const r=i?Pp(t,e):void 0;return Cs=!1,r}function Pp(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Hc(new Proxy(t.ctx,Rp));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?Mp(t):null;Dn(t),zn();const r=At(s,t,0,[t.props,i]);if(Kn(),Jt(),wc(r)){if(r.then(Jt,Jt),e)return r.then(o=>{rl(t,o,e)}).catch(o=>{Li(o,t,0)});t.asyncDep=r}else rl(t,r,e)}else vu(t,e)}function rl(t,e,n){D(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ge(e)&&(t.setupState=qc(e)),vu(t,n)}let ol;function vu(t,e,n){const s=t.type;if(!t.render){if(!e&&ol&&!s.render){const i=s.template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=Ie(Ie({isCustomElement:r,delimiters:a},o),l);s.render=ol(i,c)}}t.render=s.render||Ke}Dn(t),zn(),rp(t),Kn(),Jt()}function Op(t){return new Proxy(t.attrs,{get(e,n){return De(t,"get","$attrs"),e[n]}})}function Mp(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=Op(t))},slots:t.slots,emit:t.emit,expose:e}}function $i(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(qc(Hc(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in hi)return hi[n](t)}}))}function Dp(t){return D(t)&&"__vccOpts"in t}const Eu=(t,e)=>Rf(t,e,Cs),Lp="3.2.33",Fp="http://www.w3.org/2000/svg",zt=typeof document!="undefined"?document:null,al=zt&&zt.createElement("template"),Up={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?zt.createElementNS(Fp,t):zt.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>zt.createTextNode(t),createComment:t=>zt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>zt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{al.innerHTML=s?`<svg>${t}</svg>`:t;const a=al.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Bp(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Wp(t,e,n){const s=t.style,i=_e(n);if(n&&!i){for(const r in n)Vr(s,r,n[r]);if(e&&!_e(e))for(const r in e)n[r]==null&&Vr(s,r,"")}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const ll=/\s*!important$/;function Vr(t,e,n){if(M(n))n.forEach(s=>Vr(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Hp(t,e);ll.test(n)?t.setProperty(qn(s),n.replace(ll,""),"important"):t[s]=n}}const cl=["Webkit","Moz","ms"],pr={};function Hp(t,e){const n=pr[e];if(n)return n;let s=Mn(e);if(s!=="filter"&&s in t)return pr[e]=s;s=Rc(s);for(let i=0;i<cl.length;i++){const r=cl[i]+s;if(r in t)return pr[e]=r}return e}const ul="http://www.w3.org/1999/xlink";function $p(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(ul,e.slice(6,e.length)):t.setAttributeNS(ul,e,n);else{const r=Fd(e);n==null||r&&!bc(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function Vp(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n==null?"":n;(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=bc(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[bu,jp]=(()=>{let t=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(t=()=>performance.now());const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let jr=0;const qp=Promise.resolve(),zp=()=>{jr=0},Kp=()=>jr||(qp.then(zp),jr=bu());function Cn(t,e,n,s){t.addEventListener(e,n,s)}function Gp(t,e,n,s){t.removeEventListener(e,n,s)}function Yp(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=Qp(e);if(s){const c=r[e]=Jp(s,i);Cn(t,a,c,l)}else o&&(Gp(t,a,o,l),r[e]=void 0)}}const hl=/(?:Once|Passive|Capture)$/;function Qp(t){let e;if(hl.test(t)){e={};let n;for(;n=t.match(hl);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[qn(t.slice(2)),e]}function Jp(t,e){const n=s=>{const i=s.timeStamp||bu();(jp||i>=n.attached-1)&&Be(Xp(s,n.value),e,5,[s])};return n.value=t,n.attached=Kp(),n}function Xp(t,e){if(M(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const dl=/^on[a-z]/,Zp=(t,e,n,s,i=!1,r,o,a,l)=>{e==="class"?Bp(t,s,i):e==="style"?Wp(t,n,s):Pi(e)?go(e)||Yp(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):e_(t,e,s,i))?Vp(t,e,s,r,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),$p(t,e,s,i))};function e_(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&dl.test(e)&&D(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||dl.test(e)&&_e(n)?!1:e in t}function Cu(t){const e=mu();if(!e)return;const n=()=>qr(e.subTree,t(e.proxy));jf(n),Ao(()=>{const s=new MutationObserver(n);s.observe(e.subTree.el.parentNode,{childList:!0}),xo(()=>s.disconnect())})}function qr(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{qr(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)fl(t.el,e);else if(t.type===de)t.children.forEach(n=>qr(n,e));else if(t.type===ei){let{el:n,anchor:s}=t;for(;n&&(fl(n,e),n!==s);)n=n.nextSibling}}function fl(t,e){if(t.nodeType===1){const n=t.style;for(const s in e)n.setProperty(`--${s}`,e[s])}}const t_={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Gf.props;const pl=t=>{const e=t.props["onUpdate:modelValue"];return M(e)?n=>Zs(e,n):e};function n_(t){t.target.composing=!0}function _l(t){const e=t.target;e.composing&&(e.composing=!1,s_(e,"input"))}function s_(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const Iu={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t._assign=pl(i);const r=s||i.props&&i.props.type==="number";Cn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n?a=a.trim():r&&(a=Nr(a)),t._assign(a)}),n&&Cn(t,"change",()=>{t.value=t.value.trim()}),e||(Cn(t,"compositionstart",n_),Cn(t,"compositionend",_l),Cn(t,"change",_l))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t._assign=pl(r),t.composing||document.activeElement===t&&(n||s&&t.value.trim()===e||(i||t.type==="number")&&Nr(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},i_=Ie({patchProp:Zp},Up);let gl;function r_(){return gl||(gl=mp(i_))}const o_=(...t)=>{const e=r_().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=a_(s);if(!i)return;const r=e._component;!D(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function a_(t){return _e(t)?document.querySelector(t):t}/**
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
 */const wu={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const E=function(t,e){if(!t)throw Gn(e)},Gn=function(t){return new Error("Firebase Database ("+wu.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Tu=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},l_=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Do={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let f=(a&15)<<2|c>>6,g=c&63;l||(g=64,o||(f=64)),s.push(n[u],n[h],n[f],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Tu(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):l_(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw Error();const f=r<<2|a>>4;if(s.push(f),c!==64){const g=a<<4&240|c>>2;if(s.push(g),h!==64){const b=c<<6&192|h;s.push(b)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Su=function(t){const e=Tu(t);return Do.encodeByteArray(e,!0)},Ru=function(t){return Su(t).replace(/\./g,"")},zr=function(t){try{return Do.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function c_(t){return Nu(void 0,t)}function Nu(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!u_(n)||(t[n]=Nu(t[n],e[n]));return t}function u_(t){return t!=="__proto__"}/**
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
 */class Os{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function we(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Lo(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(we())}function h_(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ku(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function d_(){const t=we();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Au(){return wu.NODE_ADMIN===!0}function f_(){return typeof indexedDB=="object"}function p_(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const __="FirebaseError";class Yn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=__,Object.setPrototypeOf(this,Yn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ms.prototype.create)}}class Ms{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?g_(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Yn(i,a,s)}}function g_(t,e){return t.replace(m_,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const m_=/\{\$([^}]+)}/g;/**
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
 */function Is(t){return JSON.parse(t)}function pe(t){return JSON.stringify(t)}/**
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
 */const xu=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Is(zr(r[0])||""),n=Is(zr(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},y_=function(t){const e=xu(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},v_=function(t){const e=xu(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function it(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ln(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Kr(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function di(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function fi(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(ml(r)&&ml(o)){if(!fi(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function ml(t){return t!==null&&typeof t=="object"}/**
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
 */function Qn(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class E_{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const f=(i<<5|i>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function b_(t,e){const n=new C_(t,e);return n.subscribe.bind(n)}class C_{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");I_(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=_r),i.error===void 0&&(i.error=_r),i.complete===void 0&&(i.complete=_r);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console!="undefined"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function I_(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function _r(){}function Vi(t,e){return`${t} failed: ${e} argument `}/**
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
 */const w_=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,E(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ji=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function ls(t,e){return new Promise((n,s)=>{t.onsuccess=i=>{n(i.target.result)},t.onerror=i=>{var r;s(`${e}: ${(r=i.target.error)===null||r===void 0?void 0:r.message}`)}})}class yl{constructor(e){this._db=e,this.objectStoreNames=this._db.objectStoreNames}transaction(e,n="readonly"){return new Pu(this._db.transaction.call(this._db,e,n))}createObjectStore(e,n){return new Ou(this._db.createObjectStore(e,n))}close(){this._db.close()}}class Pu{constructor(e){this._transaction=e,this.complete=new Promise((n,s)=>{this._transaction.oncomplete=function(){n()},this._transaction.onerror=()=>{s(this._transaction.error)},this._transaction.onabort=()=>{s(this._transaction.error)}})}objectStore(e){return new Ou(this._transaction.objectStore(e))}}class Ou{constructor(e){this._store=e}index(e){return new vl(this._store.index(e))}createIndex(e,n,s){return new vl(this._store.createIndex(e,n,s))}get(e){const n=this._store.get(e);return ls(n,"Error reading from IndexedDB")}put(e,n){const s=this._store.put(e,n);return ls(s,"Error writing to IndexedDB")}delete(e){const n=this._store.delete(e);return ls(n,"Error deleting from IndexedDB")}clear(){const e=this._store.clear();return ls(e,"Error clearing IndexedDB object store")}}class vl{constructor(e){this._index=e}get(e){const n=this._index.get(e);return ls(n,"Error reading from IndexedDB")}}function T_(t,e,n){return new Promise((s,i)=>{try{const r=indexedDB.open(t,e);r.onsuccess=o=>{s(new yl(o.target.result))},r.onerror=o=>{var a;i(`Error opening indexedDB: ${(a=o.target.error)===null||a===void 0?void 0:a.message}`)},r.onupgradeneeded=o=>{n(new yl(r.result),o.oldVersion,o.newVersion,new Pu(r.transaction))}}catch(r){i(`Error opening indexedDB: ${r.message}`)}})}class tn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Vt="[DEFAULT]";/**
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
 */class S_{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Os;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(N_(e))try{this.getOrInitializeService({instanceIdentifier:Vt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Vt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Vt){return this.instances.has(e)}getOptions(e=Vt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:R_(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Vt){return this.component?this.component.multipleInstances?e:Vt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function R_(t){return t===Vt?void 0:t}function N_(t){return t.instantiationMode==="EAGER"}/**
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
 */class k_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new S_(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var K;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(K||(K={}));const A_={debug:K.DEBUG,verbose:K.VERBOSE,info:K.INFO,warn:K.WARN,error:K.ERROR,silent:K.SILENT},x_=K.INFO,P_={[K.DEBUG]:"log",[K.VERBOSE]:"log",[K.INFO]:"info",[K.WARN]:"warn",[K.ERROR]:"error"},O_=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=P_[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Fo{constructor(e){this.name=e,this._logLevel=x_,this._logHandler=O_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in K))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?A_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,K.DEBUG,...e),this._logHandler(this,K.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,K.VERBOSE,...e),this._logHandler(this,K.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,K.INFO,...e),this._logHandler(this,K.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,K.WARN,...e),this._logHandler(this,K.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,K.ERROR,...e),this._logHandler(this,K.ERROR,...e)}}/**
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
 */class M_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(D_(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function D_(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Gr="@firebase/app",El="0.7.22";/**
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
 */const Uo=new Fo("@firebase/app"),L_="@firebase/app-compat",F_="@firebase/analytics-compat",U_="@firebase/analytics",B_="@firebase/app-check-compat",W_="@firebase/app-check",H_="@firebase/auth",$_="@firebase/auth-compat",V_="@firebase/database",j_="@firebase/database-compat",q_="@firebase/functions",z_="@firebase/functions-compat",K_="@firebase/installations",G_="@firebase/installations-compat",Y_="@firebase/messaging",Q_="@firebase/messaging-compat",J_="@firebase/performance",X_="@firebase/performance-compat",Z_="@firebase/remote-config",eg="@firebase/remote-config-compat",tg="@firebase/storage",ng="@firebase/storage-compat",sg="@firebase/firestore",ig="@firebase/firestore-compat",rg="firebase",og="9.7.0";/**
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
 */const Mu="[DEFAULT]",ag={[Gr]:"fire-core",[L_]:"fire-core-compat",[U_]:"fire-analytics",[F_]:"fire-analytics-compat",[W_]:"fire-app-check",[B_]:"fire-app-check-compat",[H_]:"fire-auth",[$_]:"fire-auth-compat",[V_]:"fire-rtdb",[j_]:"fire-rtdb-compat",[q_]:"fire-fn",[z_]:"fire-fn-compat",[K_]:"fire-iid",[G_]:"fire-iid-compat",[Y_]:"fire-fcm",[Q_]:"fire-fcm-compat",[J_]:"fire-perf",[X_]:"fire-perf-compat",[Z_]:"fire-rc",[eg]:"fire-rc-compat",[tg]:"fire-gcs",[ng]:"fire-gcs-compat",[sg]:"fire-fst",[ig]:"fire-fst-compat","fire-js":"fire-js",[rg]:"fire-js-all"};/**
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
 */const pi=new Map,Yr=new Map;function lg(t,e){try{t.container.addComponent(e)}catch(n){Uo.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Fn(t){const e=t.name;if(Yr.has(e))return Uo.debug(`There were multiple attempts to register component ${e}.`),!1;Yr.set(e,t);for(const n of pi.values())lg(n,t);return!0}function Bo(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const cg={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},nn=new Ms("app","Firebase",cg);/**
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
 */class ug{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new tn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw nn.create("app-deleted",{appName:this._name})}}/**
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
 */const Ds=og;function hg(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Mu,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw nn.create("bad-app-name",{appName:String(s)});const i=pi.get(s);if(i){if(fi(t,i.options)&&fi(n,i.config))return i;throw nn.create("duplicate-app",{appName:s})}const r=new k_(s);for(const a of Yr.values())r.addComponent(a);const o=new ug(t,n,r);return pi.set(s,o),o}function Du(t=Mu){const e=pi.get(t);if(!e)throw nn.create("no-app",{appName:t});return e}function xt(t,e,n){var s;let i=(s=ag[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Uo.warn(a.join(" "));return}Fn(new tn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const dg="firebase-heartbeat-database",fg=1,ws="firebase-heartbeat-store";let gr=null;function Lu(){return gr||(gr=T_(dg,fg,(t,e)=>{switch(e){case 0:t.createObjectStore(ws)}}).catch(t=>{throw nn.create("storage-open",{originalErrorMessage:t.message})})),gr}async function pg(t){try{return(await Lu()).transaction(ws).objectStore(ws).get(Fu(t))}catch(e){throw nn.create("storage-get",{originalErrorMessage:e.message})}}async function bl(t,e){try{const s=(await Lu()).transaction(ws,"readwrite");return await s.objectStore(ws).put(e,Fu(t)),s.complete}catch(n){throw nn.create("storage-set",{originalErrorMessage:n.message})}}function Fu(t){return`${t.name}!${t.options.appId}`}/**
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
 */const _g=1024,gg=30*24*60*60*1e3;class mg{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new vg(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Cl();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=gg}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Cl(),{heartbeatsToSend:n,unsentEntries:s}=yg(this._heartbeatsCache.heartbeats),i=Ru(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Cl(){return new Date().toISOString().substring(0,10)}function yg(t,e=_g){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Il(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Il(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class vg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return f_()?p_().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await pg(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return bl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return bl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Il(t){return Ru(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Eg(t){Fn(new tn("platform-logger",e=>new M_(e),"PRIVATE")),Fn(new tn("heartbeat",e=>new mg(e),"PRIVATE")),xt(Gr,El,t),xt(Gr,El,"esm2017"),xt("fire-js","")}Eg("");var bg="firebase",Cg="9.7.0";/**
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
 */xt(bg,Cg,"app");function Wo(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function Uu(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ig=Uu,Bu=new Ms("auth","Firebase",Uu());/**
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
 */const wl=new Fo("@firebase/auth");function ni(t,...e){wl.logLevel<=K.ERROR&&wl.error(`Auth (${Ds}): ${t}`,...e)}/**
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
 */function _t(t,...e){throw Ho(t,...e)}function nt(t,...e){return Ho(t,...e)}function wg(t,e,n){const s=Object.assign(Object.assign({},Ig()),{[e]:n});return new Ms("auth","Firebase",s).create(e,{appName:t.name})}function Ho(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Bu.create(t,...e)}function O(t,e,...n){if(!t)throw Ho(e,...n)}function ct(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ni(e),new Error(e)}function gt(t,e){t||ct(e)}/**
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
 */const Tl=new Map;function ut(t){gt(t instanceof Function,"Expected a class definition");let e=Tl.get(t);return e?(gt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Tl.set(t,e),e)}/**
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
 */function Tg(t,e){const n=Bo(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(fi(r,e!=null?e:{}))return i;_t(i,"already-initialized")}return n.initialize({options:e})}function Sg(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(ut);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Qr(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Rg(){return Sl()==="http:"||Sl()==="https:"}function Sl(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Ng(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Rg()||h_()||"connection"in navigator)?navigator.onLine:!0}function kg(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ls{constructor(e,n){this.shortDelay=e,this.longDelay=n,gt(n>e,"Short delay should be less than long delay!"),this.isMobile=Lo()||ku()}get(){return Ng()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function $o(t,e){gt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Wu{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;ct("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;ct("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;ct("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Ag={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const xg=new Ls(3e4,6e4);function Hu(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function qi(t,e,n,s,i={}){return $u(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Qn(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Wu.fetch()(ju(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function $u(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Ag),e);try{const i=new Pg(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw mr(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw mr(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw mr(t,"email-already-in-use",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw wg(t,u,c);_t(t,u)}}catch(i){if(i instanceof Yn)throw i;_t(t,"network-request-failed")}}async function Vu(t,e,n,s,i={}){const r=await qi(t,e,n,s,i);return"mfaPendingCredential"in r&&_t(t,"multi-factor-auth-required",{_serverResponse:r}),r}function ju(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?$o(t.config,i):`${t.config.apiScheme}://${i}`}class Pg{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(nt(this.auth,"network-request-failed")),xg.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function mr(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=nt(t,e,s);return i.customData._tokenResponse=n,i}/**
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
 */async function Og(t,e){return qi(t,"POST","/v1/accounts:delete",e)}async function Mg(t,e){return qi(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ds(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Dg(t,e=!1){const n=rt(t),s=await n.getIdToken(e),i=Vo(s);O(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:ds(yr(i.auth_time)),issuedAtTime:ds(yr(i.iat)),expirationTime:ds(yr(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function yr(t){return Number(t)*1e3}function Vo(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return ni("JWT malformed, contained fewer than 3 sections"),null;try{const i=zr(n);return i?JSON.parse(i):(ni("Failed to decode base64 JWT payload"),null)}catch(i){return ni("Caught error parsing JWT payload as JSON",i),null}}function Lg(t){const e=Vo(t);return O(e,"internal-error"),O(typeof e.exp!="undefined","internal-error"),O(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ts(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Yn&&Fg(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Fg({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Ug{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class qu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ds(this.lastLoginAt),this.creationTime=ds(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function _i(t){var e;const n=t.auth,s=await t.getIdToken(),i=await Ts(t,Mg(n,{idToken:s}));O(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Hg(r.providerUserInfo):[],a=Wg(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new qu(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function Bg(t){const e=rt(t);await _i(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Wg(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function Hg(t){return t.map(e=>{var{providerId:n}=e,s=Wo(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function $g(t,e){const n=await $u(t,{},async()=>{const s=Qn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=ju(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Wu.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Ss{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){O(e.idToken,"internal-error"),O(typeof e.idToken!="undefined","internal-error"),O(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):Lg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return O(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await $g(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Ss;return s&&(O(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(O(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(O(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ss,this.toJSON())}_performRefresh(){return ct("not implemented")}}/**
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
 */function bt(t,e){O(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Xt{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=Wo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ug(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new qu(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Ts(this,this.stsTokenManager.getToken(this.auth,e));return O(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Dg(this,e)}reload(){return Bg(this)}_assign(e){this!==e&&(O(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Xt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){O(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await _i(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ts(this,Og(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,g=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,b=(o=n.photoURL)!==null&&o!==void 0?o:void 0,S=(a=n.tenantId)!==null&&a!==void 0?a:void 0,N=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,U=(c=n.createdAt)!==null&&c!==void 0?c:void 0,ae=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:J,emailVerified:X,isAnonymous:Ce,providerData:We,stsTokenManager:j}=n;O(J&&j,e,"internal-error");const le=Ss.fromJSON(this.name,j);O(typeof J=="string",e,"internal-error"),bt(h,e.name),bt(f,e.name),O(typeof X=="boolean",e,"internal-error"),O(typeof Ce=="boolean",e,"internal-error"),bt(g,e.name),bt(b,e.name),bt(S,e.name),bt(N,e.name),bt(U,e.name),bt(ae,e.name);const se=new Xt({uid:J,auth:e,email:f,emailVerified:X,displayName:h,isAnonymous:Ce,photoURL:b,phoneNumber:g,tenantId:S,stsTokenManager:le,createdAt:U,lastLoginAt:ae});return We&&Array.isArray(We)&&(se.providerData=We.map(xe=>Object.assign({},xe))),N&&(se._redirectEventId=N),se}static async _fromIdTokenResponse(e,n,s=!1){const i=new Ss;i.updateFromServerResponse(n);const r=new Xt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await _i(r),r}}/**
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
 */class zu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}zu.type="NONE";const Rl=zu;/**
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
 */function si(t,e,n){return`firebase:${t}:${e}:${n}`}class Nn{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=si(this.userKey,i.apiKey,r),this.fullPersistenceKey=si("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Xt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Nn(ut(Rl),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||ut(Rl);const o=si(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=Xt._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Nn(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new Nn(r,e,s))}}/**
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
 */function Nl(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Yu(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ku(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ju(e))return"Blackberry";if(Xu(e))return"Webos";if(jo(e))return"Safari";if((e.includes("chrome/")||Gu(e))&&!e.includes("edge/"))return"Chrome";if(Qu(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Ku(t=we()){return/firefox\//i.test(t)}function jo(t=we()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Gu(t=we()){return/crios\//i.test(t)}function Yu(t=we()){return/iemobile/i.test(t)}function Qu(t=we()){return/android/i.test(t)}function Ju(t=we()){return/blackberry/i.test(t)}function Xu(t=we()){return/webos/i.test(t)}function zi(t=we()){return/iphone|ipad|ipod/i.test(t)}function Vg(t=we()){var e;return zi(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function jg(){return d_()&&document.documentMode===10}function Zu(t=we()){return zi(t)||Qu(t)||Xu(t)||Ju(t)||/windows phone/i.test(t)||Yu(t)}function qg(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function eh(t,e=[]){let n;switch(t){case"Browser":n=Nl(we());break;case"Worker":n=`${Nl(we())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ds}/${s}`}/**
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
 */class zg{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new kl(this),this.idTokenSubscription=new kl(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Bu,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ut(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await Nn.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let s=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,r=s==null?void 0:s._redirectEventId,o=await this.tryRedirectSignIn(e);(!i||i===r)&&(o==null?void 0:o.user)&&(s=o.user)}return s?s._redirectEventId?(O(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)):this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await _i(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=kg()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?rt(e):null;return n&&O(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&O(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ut(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ms("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ut(e)||this._popupRedirectResolver;O(n,this,"argument-error"),this.redirectPersistenceManager=await Nn.create(this,[ut(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return O(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return O(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=eh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function qo(t){return rt(t)}class kl{constructor(e){this.auth=e,this.observer=null,this.addObserver=b_(n=>this.observer=n)}get next(){return O(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class th{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ct("not implemented")}_getIdTokenResponse(e){return ct("not implemented")}_linkToIdToken(e,n){return ct("not implemented")}_getReauthenticationResolver(e){return ct("not implemented")}}/**
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
 */async function kn(t,e){return Vu(t,"POST","/v1/accounts:signInWithIdp",Hu(t,e))}/**
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
 */const Kg="http://localhost";class sn extends th{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new sn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):_t("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=Wo(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new sn(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return kn(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,kn(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,kn(e,n)}buildRequest(){const e={requestUri:Kg,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Qn(n)}return e}}/**
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
 */class nh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Fs extends nh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class wt extends Fs{constructor(){super("facebook.com")}static credential(e){return sn._fromParams({providerId:wt.PROVIDER_ID,signInMethod:wt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wt.credentialFromTaggedObject(e)}static credentialFromError(e){return wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wt.credential(e.oauthAccessToken)}catch{return null}}}wt.FACEBOOK_SIGN_IN_METHOD="facebook.com";wt.PROVIDER_ID="facebook.com";/**
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
 */class Tt extends Fs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return sn._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Tt.credentialFromTaggedObject(e)}static credentialFromError(e){return Tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Tt.credential(n,s)}catch{return null}}}Tt.GOOGLE_SIGN_IN_METHOD="google.com";Tt.PROVIDER_ID="google.com";/**
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
 */class St extends Fs{constructor(){super("github.com")}static credential(e){return sn._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return St.credentialFromTaggedObject(e)}static credentialFromError(e){return St.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return St.credential(e.oauthAccessToken)}catch{return null}}}St.GITHUB_SIGN_IN_METHOD="github.com";St.PROVIDER_ID="github.com";/**
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
 */class Rt extends Fs{constructor(){super("twitter.com")}static credential(e,n){return sn._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Rt.credentialFromTaggedObject(e)}static credentialFromError(e){return Rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Rt.credential(n,s)}catch{return null}}}Rt.TWITTER_SIGN_IN_METHOD="twitter.com";Rt.PROVIDER_ID="twitter.com";/**
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
 */async function Gg(t,e){return Vu(t,"POST","/v1/accounts:signUp",Hu(t,e))}/**
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
 */class Dt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await Xt._fromIdTokenResponse(e,s,i),o=Al(s);return new Dt({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=Al(s);return new Dt({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function Al(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function Yg(t){var e;const n=qo(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Dt({user:n.currentUser,providerId:null,operationType:"signIn"});const s=await Gg(n,{returnSecureToken:!0}),i=await Dt._fromIdTokenResponse(n,"signIn",s,!0);return await n._updateCurrentUser(i.user),i}/**
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
 */class gi extends Yn{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,gi.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new gi(e,n,s,i)}}function sh(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?gi._fromErrorAndOperation(t,r,e,s):r})}async function Qg(t,e,n=!1){const s=await Ts(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Dt._forOperation(t,"link",s)}/**
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
 */async function Jg(t,e,n=!1){const{auth:s}=t,i="reauthenticate";try{const r=await Ts(t,sh(s,i,e,t),n);O(r.idToken,s,"internal-error");const o=Vo(r.idToken);O(o,s,"internal-error");const{sub:a}=o;return O(t.uid===a,s,"user-mismatch"),Dt._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&_t(s,"user-mismatch"),r}}/**
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
 */async function Xg(t,e,n=!1){const s="signIn",i=await sh(t,s,e),r=await Dt._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}function Zg(t,e,n,s){return rt(t).onAuthStateChanged(e,n,s)}const mi="__sak";/**
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
 */class ih{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(mi,"1"),this.storage.removeItem(mi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function em(){const t=we();return jo(t)||zi(t)}const tm=1e3,nm=10;class rh extends ih{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=em()&&qg(),this.fallbackToPolling=Zu(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);jg()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,nm):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},tm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}rh.type="LOCAL";const sm=rh;/**
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
 */class oh extends ih{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}oh.type="SESSION";const ah=oh;/**
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
 */function im(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ki{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new Ki(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await im(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ki.receivers=[];/**
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
 */function zo(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class rm{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=zo("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const f=h;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(f.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function st(){return window}function om(t){st().location.href=t}/**
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
 */function lh(){return typeof st().WorkerGlobalScope!="undefined"&&typeof st().importScripts=="function"}async function am(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function lm(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function cm(){return lh()?self:null}/**
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
 */const ch="firebaseLocalStorageDb",um=1,yi="firebaseLocalStorage",uh="fbase_key";class Us{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Gi(t,e){return t.transaction([yi],e?"readwrite":"readonly").objectStore(yi)}function hm(){const t=indexedDB.deleteDatabase(ch);return new Us(t).toPromise()}function Jr(){const t=indexedDB.open(ch,um);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(yi,{keyPath:uh})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(yi)?e(s):(s.close(),await hm(),e(await Jr()))})})}async function xl(t,e,n){const s=Gi(t,!0).put({[uh]:e,value:n});return new Us(s).toPromise()}async function dm(t,e){const n=Gi(t,!1).get(e),s=await new Us(n).toPromise();return s===void 0?null:s.value}function Pl(t,e){const n=Gi(t,!0).delete(e);return new Us(n).toPromise()}const fm=800,pm=3;class hh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Jr(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>pm)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return lh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ki._getInstance(cm()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await am(),!this.activeServiceWorker)return;this.sender=new rm(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||lm()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Jr();return await xl(e,mi,"1"),await Pl(e,mi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>xl(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>dm(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Pl(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Gi(i,!1).getAll();return new Us(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),fm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}hh.type="LOCAL";const _m=hh;/**
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
 */function gm(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function mm(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=nt("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",gm().appendChild(s)})}function ym(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Ls(3e4,6e4);/**
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
 */function vm(t,e){return e?ut(e):(O(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ko extends th{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return kn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return kn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return kn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Em(t){return Xg(t.auth,new Ko(t),t.bypassAuthState)}function bm(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),Jg(n,new Ko(t),t.bypassAuthState)}async function Cm(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),Qg(n,new Ko(t),t.bypassAuthState)}/**
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
 */class dh{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Em;case"linkViaPopup":case"linkViaRedirect":return Cm;case"reauthViaPopup":case"reauthViaRedirect":return bm;default:_t(this.auth,"internal-error")}}resolve(e){gt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){gt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Im=new Ls(2e3,1e4);class In extends dh{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,In.currentPopupAction&&In.currentPopupAction.cancel(),In.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return O(e,this.auth,"internal-error"),e}async onExecution(){gt(this.filter.length===1,"Popup operations only handle one event");const e=zo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(nt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(nt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,In.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Im.get())};e()}}In.currentPopupAction=null;/**
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
 */const wm="pendingRedirect",vr=new Map;class Tm extends dh{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=vr.get(this.auth._key());if(!e){try{const s=await Sm(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}vr.set(this.auth._key(),e)}return this.bypassAuthState||vr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Sm(t,e){const n=Nm(e),s=Rm(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function Rm(t){return ut(t._redirectPersistence)}function Nm(t){return si(wm,t.config.apiKey,t.name)}async function km(t,e,n=!1){const s=qo(t),i=vm(s,e),o=await new Tm(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const Am=10*60*1e3;class xm{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Pm(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!fh(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(nt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Am&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ol(e))}saveEventToCache(e){this.cachedEventUids.add(Ol(e)),this.lastProcessedEventTime=Date.now()}}function Ol(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function fh({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Pm(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return fh(t);default:return!1}}/**
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
 */async function Om(t,e={}){return qi(t,"GET","/v1/projects",e)}/**
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
 */const Mm=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Dm=/^https?/;async function Lm(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Om(t);for(const n of e)try{if(Fm(n))return}catch{}_t(t,"unauthorized-domain")}function Fm(t){const e=Qr(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!Dm.test(n))return!1;if(Mm.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const Um=new Ls(3e4,6e4);function Ml(){const t=st().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Bm(t){return new Promise((e,n)=>{var s,i,r;function o(){Ml(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ml(),n(nt(t,"network-request-failed"))},timeout:Um.get()})}if(!((i=(s=st().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=st().gapi)===null||r===void 0)&&r.load)o();else{const a=ym("iframefcb");return st()[a]=()=>{gapi.load?o():n(nt(t,"network-request-failed"))},mm(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ii=null,e})}let ii=null;function Wm(t){return ii=ii||Bm(t),ii}/**
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
 */const Hm=new Ls(5e3,15e3),$m="__/auth/iframe",Vm="emulator/auth/iframe",jm={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},qm=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function zm(t){const e=t.config;O(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?$o(e,Vm):`https://${t.config.authDomain}/${$m}`,s={apiKey:e.apiKey,appName:t.name,v:Ds},i=qm.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${Qn(s).slice(1)}`}async function Km(t){const e=await Wm(t),n=st().gapi;return O(n,t,"internal-error"),e.open({where:document.body,url:zm(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:jm,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=nt(t,"network-request-failed"),a=st().setTimeout(()=>{r(o)},Hm.get());function l(){st().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const Gm={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ym=500,Qm=600,Jm="_blank",Xm="http://localhost";class Dl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Zm(t,e,n,s=Ym,i=Qm){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Gm),{width:s.toString(),height:i.toString(),top:r,left:o}),c=we().toLowerCase();n&&(a=Gu(c)?Jm:n),Ku(c)&&(e=e||Xm,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[g,b])=>`${f}${g}=${b},`,"");if(Vg(c)&&a!=="_self")return ey(e||"",a),new Dl(null);const h=window.open(e||"",a,u);O(h,t,"popup-blocked");try{h.focus()}catch{}return new Dl(h)}function ey(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const ty="__/auth/handler",ny="emulator/auth/handler";function Ll(t,e,n,s,i,r){O(t.config.authDomain,t,"auth-domain-config-required"),O(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Ds,eventId:i};if(e instanceof nh){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Kr(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(r||{}))o[l]=c}if(e instanceof Fs){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${sy(t)}?${Qn(a).slice(1)}`}function sy({config:t}){return t.emulator?$o(t,ny):`https://${t.authDomain}/${ty}`}/**
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
 */const Er="webStorageSupport";class iy{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ah,this._completeRedirectFn=km}async _openPopup(e,n,s,i){var r;gt((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=Ll(e,n,s,Qr(),i);return Zm(e,o,zo())}async _openRedirect(e,n,s,i){return await this._originValidation(e),om(Ll(e,n,s,Qr(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(gt(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await Km(e),s=new xm(e);return n.register("authEvent",i=>(O(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Er,{type:Er},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Er];o!==void 0&&n(!!o),_t(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Lm(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Zu()||jo()||zi()}}const ry=iy;var Fl="@firebase/auth",Ul="0.19.12";/**
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
 */class oy{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{var i;e(((i=s)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){O(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function ay(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function ly(t){Fn(new tn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=s.options;return((a,l)=>{O(r&&!r.includes(":"),"invalid-api-key",{appName:a.name}),O(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:r,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:eh(t)},u=new zg(a,l,c);return Sg(u,n),u})(s,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Fn(new tn("auth-internal",e=>{const n=qo(e.getProvider("auth").getImmediate());return(s=>new oy(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),xt(Fl,Ul,ay(t)),xt(Fl,Ul,"esm2017")}/**
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
 */function cy(t=Du()){const e=Bo(t,"auth");return e.isInitialized()?e.getImmediate():Tg(t,{popupRedirectResolver:ry,persistence:[_m,sm,ah]})}ly("Browser");const Bl="@firebase/database",Wl="0.12.8";/**
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
 */let ph="";function uy(t){ph=t}/**
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
 */class hy{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),pe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Is(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class dy{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return it(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const _h=function(t){try{if(typeof window!="undefined"&&typeof window[t]!="undefined"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new hy(e)}}catch{}return new dy},Gt=_h("localStorage"),Xr=_h("sessionStorage");/**
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
 */const An=new Fo("@firebase/database"),fy=function(){let t=1;return function(){return t++}}(),gh=function(t){const e=w_(t),n=new E_;n.update(e);const s=n.digest();return Do.encodeByteArray(s)},Bs=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Bs.apply(null,s):typeof s=="object"?e+=pe(s):e+=s,e+=" "}return e};let Zt=null,Hl=!0;const py=function(t,e){E(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(An.logLevel=K.VERBOSE,Zt=An.log.bind(An),e&&Xr.set("logging_enabled",!0)):typeof t=="function"?Zt=t:(Zt=null,Xr.remove("logging_enabled"))},me=function(...t){if(Hl===!0&&(Hl=!1,Zt===null&&Xr.get("logging_enabled")===!0&&py(!0)),Zt){const e=Bs.apply(null,t);Zt(e)}},Ws=function(t){return function(...e){me(t,...e)}},Zr=function(...t){const e="FIREBASE INTERNAL ERROR: "+Bs(...t);An.error(e)},rn=function(...t){const e=`FIREBASE FATAL ERROR: ${Bs(...t)}`;throw An.error(e),new Error(e)},Se=function(...t){const e="FIREBASE WARNING: "+Bs(...t);An.warn(e)},_y=function(){typeof window!="undefined"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Se("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Go=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},gy=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Un="[MIN_NAME]",on="[MAX_NAME]",hn=function(t,e){if(t===e)return 0;if(t===Un||e===on)return-1;if(e===Un||t===on)return 1;{const n=$l(t),s=$l(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},my=function(t,e){return t===e?0:t<e?-1:1},ns=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+pe(e))},Yo=function(t){if(typeof t!="object"||t===null)return pe(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=pe(e[s]),n+=":",n+=Yo(t[e[s]]);return n+="}",n},mh=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function be(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const yh=function(t){E(!Go(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let f=parseInt(u.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},yy=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},vy=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Ey(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const by=new RegExp("^-?(0*)\\d{1,10}$"),Cy=-2147483648,Iy=2147483647,$l=function(t){if(by.test(t)){const e=Number(t);if(e>=Cy&&e<=Iy)return e}return null},Jn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Se("Exception was thrown by user callback.",n),e},Math.floor(0))}},wy=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},fs=function(t,e){const n=setTimeout(t,e);return typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class Ty{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Se(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Sy{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(me("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Se(e)}}class eo{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}eo.OWNER="owner";/**
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
 */const Qo="5",vh="v",Eh="s",bh="r",Ch="f",Ih=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,wh="ls",Ry="p",to="ac",Th="websocket",Sh="long_polling";/**
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
 */class Ny{constructor(e,n,s,i,r=!1,o="",a=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Gt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Gt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function ky(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Rh(t,e,n){E(typeof e=="string","typeof type must == string"),E(typeof n=="object","typeof params must == object");let s;if(e===Th)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Sh)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);ky(t)&&(n.ns=t.namespace);const i=[];return be(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class Ay{constructor(){this.counters_={}}incrementCounter(e,n=1){it(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return c_(this.counters_)}}/**
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
 */const br={},Cr={};function Jo(t){const e=t.toString();return br[e]||(br[e]=new Ay),br[e]}function xy(t,e){const n=t.toString();return Cr[n]||(Cr[n]=e()),Cr[n]}/**
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
 */class Py{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Jn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Vl="start",Oy="close",My="pLPCommand",Dy="pRTLPCB",Nh="id",kh="pw",Ah="ser",Ly="cb",Fy="seg",Uy="ts",By="d",Wy="dframe",xh=1870,Ph=30,Hy=xh-Ph,$y=25e3,Vy=3e4;class wn{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ws(e),this.stats_=Jo(n),this.urlFn=l=>(this.appCheckToken&&(l[to]=this.appCheckToken),Rh(n,Sh,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Py(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Vy)),gy(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Xo((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Vl)this.id=a,this.password=l;else if(o===Oy)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Vl]="t",s[Ah]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Ly]=this.scriptTagHolder.uniqueCallbackIdentifier),s[vh]=Qo,this.transportSessionId&&(s[Eh]=this.transportSessionId),this.lastSessionId&&(s[wh]=this.lastSessionId),this.applicationId&&(s[Ry]=this.applicationId),this.appCheckToken&&(s[to]=this.appCheckToken),typeof location!="undefined"&&location.hostname&&Ih.test(location.hostname)&&(s[bh]=Ch);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){wn.forceAllow_=!0}static forceDisallow(){wn.forceDisallow_=!0}static isAvailable(){return wn.forceAllow_?!0:!wn.forceDisallow_&&typeof document!="undefined"&&document.createElement!=null&&!yy()&&!vy()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=pe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Su(n),i=mh(s,Hy);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[Wy]="t",s[Nh]=e,s[kh]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=pe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Xo{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=fy(),window[My+this.uniqueCallbackIdentifier]=e,window[Dy+this.uniqueCallbackIdentifier]=n,this.myIFrame=Xo.createIFrame_();let r="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const a=document.domain;r='<script>document.domain="'+a+'";<\/script>'}const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){me("frame writing exception"),a.stack&&me(a.stack),me(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||me("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Nh]=this.myID,e[kh]=this.myPW,e[Ah]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Ph+s.length<=xh;){const o=this.pendingSegs.shift();s=s+"&"+Fy+i+"="+o.seg+"&"+Uy+i+"="+o.ts+"&"+By+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor($y)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{me("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const jy=16384,qy=45e3;let vi=null;typeof MozWebSocket!="undefined"?vi=MozWebSocket:typeof WebSocket!="undefined"&&(vi=WebSocket);class je{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ws(this.connId),this.stats_=Jo(n),this.connURL=je.connectionURL_(n,o,a,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i){const r={};return r[vh]=Qo,typeof location!="undefined"&&location.hostname&&Ih.test(location.hostname)&&(r[bh]=Ch),n&&(r[Eh]=n),s&&(r[wh]=s),i&&(r[to]=i),Rh(e,Th,r)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Gt.set("previous_websocket_failure",!0);try{if(!Au()){const s={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new vi(this.connURL,[],s)}}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){je.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator!="undefined"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&vi!==null&&!je.forceDisallow_}static previouslyFailed(){return Gt.isInMemoryStorage||Gt.get("previous_websocket_failure")===!0}markConnectionHealthy(){Gt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Is(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(E(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=pe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=mh(n,jy);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(qy))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}je.responsesRequiredToBeHealthy=2;je.healthyTimeout=3e4;/**
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
 */class Zo{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[wn,je]}initTransports_(e){const n=je&&je.isAvailable();let s=n&&!je.previouslyFailed();if(e.webSocketOnly&&(n||Se("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[je];else{const i=this.transports_=[];for(const r of Zo.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r)}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}/**
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
 */const zy=6e4,Ky=5e3,Gy=10*1024,Yy=100*1024,Ir="t",jl="d",Qy="s",ql="r",Jy="e",zl="o",Kl="a",Gl="n",Yl="p",Xy="h";class Zy{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ws("c:"+this.id+":"),this.transportManager_=new Zo(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=fs(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Yy?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Gy?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ir in e){const n=e[Ir];n===Kl?this.upgradeIfSecondaryHealthy_():n===ql?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===zl&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ns("t",e),s=ns("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Yl,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Kl,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Gl,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ns("t",e),s=ns("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ns(Ir,e);if(jl in e){const s=e[jl];if(n===Xy)this.onHandshake_(s);else if(n===Gl){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Qy?this.onConnectionShutdown_(s):n===ql?this.onReset_(s):n===Jy?Zr("Server Error: "+s):n===zl?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Zr("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Qo!==s&&Se("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),fs(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(zy))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):fs(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Ky))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Yl,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Gt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Oh{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Mh{constructor(e){this.allowedEvents_=e,this.listeners_={},E(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){E(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Ei extends Mh{constructor(){super(["online"]),this.online_=!0,typeof window!="undefined"&&typeof window.addEventListener!="undefined"&&!Lo()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Ei}getInitialEvent(e){return E(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Ql=32,Jl=768;class q{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function $(){return new q("")}function L(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Lt(t){return t.pieces_.length-t.pieceNum_}function Q(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new q(t.pieces_,e)}function ea(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function ev(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Rs(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Dh(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new q(e,0)}function re(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof q)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new q(n,0)}function B(t){return t.pieceNum_>=t.pieces_.length}function ke(t,e){const n=L(t),s=L(e);if(n===null)return e;if(n===s)return ke(Q(t),Q(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function tv(t,e){const n=Rs(t,0),s=Rs(e,0);for(let i=0;i<n.length&&i<s.length;i++){const r=hn(n[i],s[i]);if(r!==0)return r}return n.length===s.length?0:n.length<s.length?-1:1}function ta(t,e){if(Lt(t)!==Lt(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Ue(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Lt(t)>Lt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class nv{constructor(e,n){this.errorPrefix_=n,this.parts_=Rs(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=ji(this.parts_[s]);Lh(this)}}function sv(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=ji(e),Lh(t)}function iv(t){const e=t.parts_.pop();t.byteLength_-=ji(e),t.parts_.length>0&&(t.byteLength_-=1)}function Lh(t){if(t.byteLength_>Jl)throw new Error(t.errorPrefix_+"has a key path longer than "+Jl+" bytes ("+t.byteLength_+").");if(t.parts_.length>Ql)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Ql+") or object contains a cycle "+jt(t))}function jt(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class na extends Mh{constructor(){super(["visible"]);let e,n;typeof document!="undefined"&&typeof document.addEventListener!="undefined"&&(typeof document.hidden!="undefined"?(n="visibilitychange",e="hidden"):typeof document.mozHidden!="undefined"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden!="undefined"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden!="undefined"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new na}getInitialEvent(e){return E(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const ss=1e3,rv=60*5*1e3,ov=3*1e3,Xl=30*1e3,av=1.3,lv=3e4,cv="server_kill",Zl=3;class ft extends Oh{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=ft.nextPersistentConnectionId_++,this.log_=Ws("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ss,this.maxReconnectDelay_=rv,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Au())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");na.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ei.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(pe(r)),E(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Os,s={p:e._path.toString(),q:e._queryObject},i={action:"g",request:s,onComplete:o=>{const a=o.d;o.s==="ok"?(this.onDataUpdate_(s.p,a,!1,null),n.resolve(a)):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_||setTimeout(()=>{const o=this.outstandingGets_[r];o===void 0||i!==o||(delete this.outstandingGets_[r],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),this.log_("get "+r+" timed out on connection"),n.reject(new Error("Client is offline.")))},ov),this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),E(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;ft.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&it(e,"w")){const s=Ln(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Se(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||v_(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Xl)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=y_(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+pe(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Zr("Unrecognized action received from server: "+pe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){E(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ss,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ss,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>lv&&(this.reconnectDelay_=ss),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*av)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+ft.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){E(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?me("getToken() completed but was canceled"):(me("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,a=new Zy(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,g=>{Se(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(cv)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Se(h),l())}}}interrupt(e){me("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){me("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Kr(this.interruptReasons_)&&(this.reconnectDelay_=ss,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Yo(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new q(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){me("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Zl&&(this.reconnectDelay_=Xl,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){me("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Zl&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+ph.replace(/\./g,"-")]=1,Lo()?e["framework.cordova"]=1:ku()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ei.getInstance().currentlyOnline();return Kr(this.interruptReasons_)&&e}}ft.nextPersistentConnectionId_=0;ft.nextConnectionId_=0;/**
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
 */class Yi{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new F(Un,e),i=new F(Un,n);return this.compare(s,i)!==0}minPost(){return F.MIN}}/**
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
 */let Qs;class Fh extends Yi{static get __EMPTY_NODE(){return Qs}static set __EMPTY_NODE(e){Qs=e}compare(e,n){return hn(e.name,n.name)}isDefinedOn(e){throw Gn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return F.MIN}maxPost(){return new F(on,Qs)}makePost(e,n){return E(typeof e=="string","KeyIndex indexValue must always be a string."),new F(e,Qs)}toString(){return".key"}}const xn=new Fh;/**
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
 */class Js{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class he{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s!=null?s:he.RED,this.left=i!=null?i:Ae.EMPTY_NODE,this.right=r!=null?r:Ae.EMPTY_NODE}copy(e,n,s,i,r){return new he(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ae.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Ae.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,he.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,he.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}he.RED=!0;he.BLACK=!1;class uv{copy(e,n,s,i,r){return this}insert(e,n,s){return new he(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ae{constructor(e,n=Ae.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ae(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,he.BLACK,null,null))}remove(e){return new Ae(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,he.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Js(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Js(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Js(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Js(this.root_,null,this.comparator_,!0,e)}}Ae.EMPTY_NODE=new uv;/**
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
 */function hv(t,e){return hn(t.name,e.name)}function sa(t,e){return hn(t,e)}/**
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
 */let no;function dv(t){no=t}const Uh=function(t){return typeof t=="number"?"number:"+yh(t):"string:"+t},Bh=function(t){if(t.isLeafNode()){const e=t.val();E(typeof e=="string"||typeof e=="number"||typeof e=="object"&&it(e,".sv"),"Priority must be a string or number.")}else E(t===no||t.isEmpty(),"priority of unexpected type.");E(t===no||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let ec;class ue{constructor(e,n=ue.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,E(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Bh(this.priorityNode_)}static set __childrenNodeConstructor(e){ec=e}static get __childrenNodeConstructor(){return ec}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ue(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ue.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return B(e)?this:L(e)===".priority"?this.priorityNode_:ue.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ue.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=L(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(E(s!==".priority"||Lt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,ue.__childrenNodeConstructor.EMPTY_NODE.updateChild(Q(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Uh(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=yh(this.value_):e+=this.value_,this.lazyHash_=gh(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ue.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ue.__childrenNodeConstructor?-1:(E(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=ue.VALUE_TYPE_ORDER.indexOf(n),r=ue.VALUE_TYPE_ORDER.indexOf(s);return E(i>=0,"Unknown leaf type: "+n),E(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ue.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Wh,Hh;function fv(t){Wh=t}function pv(t){Hh=t}class _v extends Yi{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?hn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return F.MIN}maxPost(){return new F(on,new ue("[PRIORITY-POST]",Hh))}makePost(e,n){const s=Wh(e);return new F(n,new ue("[PRIORITY-POST]",s))}toString(){return".priority"}}const oe=new _v;/**
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
 */const gv=Math.log(2);class mv{constructor(e){const n=r=>parseInt(Math.log(r)/gv,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const bi=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let h,f;if(u===0)return null;if(u===1)return h=t[l],f=n?n(h):h,new he(f,h.node,he.BLACK,null,null);{const g=parseInt(u/2,10)+l,b=i(l,g),S=i(g+1,c);return h=t[g],f=n?n(h):h,new he(f,h.node,he.BLACK,b,S)}},r=function(l){let c=null,u=null,h=t.length;const f=function(b,S){const N=h-b,U=h;h-=b;const ae=i(N+1,U),J=t[N],X=n?n(J):J;g(new he(X,J.node,S,null,ae))},g=function(b){c?(c.left=b,c=b):(u=b,c=b)};for(let b=0;b<l.count;++b){const S=l.nextBitIsOne(),N=Math.pow(2,l.count-(b+1));S?f(N,he.BLACK):(f(N,he.BLACK),f(N,he.RED))}return u},o=new mv(t.length),a=r(o);return new Ae(s||e,a)};/**
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
 */let wr;const vn={};class ht{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return E(vn&&oe,"ChildrenNode.ts has not been loaded"),wr=wr||new ht({".priority":vn},{".priority":oe}),wr}get(e){const n=Ln(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ae?n:null}hasIndex(e){return it(this.indexSet_,e.toString())}addIndex(e,n){E(e!==xn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(F.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=bi(s,e.getCompare()):a=vn;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new ht(u,c)}addToIndexes(e,n){const s=di(this.indexes_,(i,r)=>{const o=Ln(this.indexSet_,r);if(E(o,"Missing index implementation for "+r),i===vn)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(F.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),bi(a,o.getCompare())}else return vn;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new F(e.name,a))),l.insert(e,e.node)}});return new ht(s,this.indexSet_)}removeFromIndexes(e,n){const s=di(this.indexes_,i=>{if(i===vn)return i;{const r=n.get(e.name);return r?i.remove(new F(e.name,r)):i}});return new ht(s,this.indexSet_)}}/**
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
 */let is;class x{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Bh(this.priorityNode_),this.children_.isEmpty()&&E(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return is||(is=new x(new Ae(sa),null,ht.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||is}updatePriority(e){return this.children_.isEmpty()?this:new x(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?is:n}}getChild(e){const n=L(e);return n===null?this:this.getImmediateChild(n).getChild(Q(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(E(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new F(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?is:this.priorityNode_;return new x(i,o,r)}}updateChild(e,n){const s=L(e);if(s===null)return n;{E(L(e)!==".priority"||Lt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(Q(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(oe,(o,a)=>{n[o]=a.val(e),s++,r&&x.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Uh(this.getPriority().val())+":"),this.forEachChild(oe,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":gh(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new F(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new F(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new F(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,F.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,F.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Hs?-1:0}withIndex(e){if(e===xn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new x(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===xn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(oe),i=n.getIterator(oe);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===xn?null:this.indexMap_.get(e.toString())}}x.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class yv extends x{constructor(){super(new Ae(sa),x.EMPTY_NODE,ht.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return x.EMPTY_NODE}isEmpty(){return!1}}const Hs=new yv;Object.defineProperties(F,{MIN:{value:new F(Un,x.EMPTY_NODE)},MAX:{value:new F(on,Hs)}});Fh.__EMPTY_NODE=x.EMPTY_NODE;ue.__childrenNodeConstructor=x;dv(Hs);pv(Hs);/**
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
 */const vv=!0;function fe(t,e=null){if(t===null)return x.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),E(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ue(n,fe(e))}if(!(t instanceof Array)&&vv){const n=[];let s=!1;if(be(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=fe(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new F(o,l)))}}),n.length===0)return x.EMPTY_NODE;const r=bi(n,hv,o=>o.name,sa);if(s){const o=bi(n,oe.getCompare());return new x(r,fe(e),new ht({".priority":o},{".priority":oe}))}else return new x(r,fe(e),ht.Default)}else{let n=x.EMPTY_NODE;return be(t,(s,i)=>{if(it(t,s)&&s.substring(0,1)!=="."){const r=fe(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(fe(e))}}fv(fe);/**
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
 */class Ev extends Yi{constructor(e){super(),this.indexPath_=e,E(!B(e)&&L(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?hn(e.name,n.name):r}makePost(e,n){const s=fe(e),i=x.EMPTY_NODE.updateChild(this.indexPath_,s);return new F(n,i)}maxPost(){const e=x.EMPTY_NODE.updateChild(this.indexPath_,Hs);return new F(on,e)}toString(){return Rs(this.indexPath_,0).join("/")}}/**
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
 */class bv extends Yi{compare(e,n){const s=e.node.compareTo(n.node);return s===0?hn(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return F.MIN}maxPost(){return F.MAX}makePost(e,n){const s=fe(e);return new F(n,s)}toString(){return".value"}}const Cv=new bv;/**
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
 */const tc="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Iv=function(){let t=0;const e=[];return function(n){const s=n===t;t=n;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=tc.charAt(n%64),n=Math.floor(n/64);E(n===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=tc.charAt(e[i]);return E(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */function $h(t){return{type:"value",snapshotNode:t}}function Bn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Ns(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ks(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function wv(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class ia{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){E(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(Ns(n,a)):E(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Bn(n,s)):o.trackChildChange(ks(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(oe,(i,r)=>{n.hasChild(i)||s.trackChildChange(Ns(i,r))}),n.isLeafNode()||n.forEachChild(oe,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(ks(i,r,o))}else s.trackChildChange(Bn(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?x.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class As{constructor(e){this.indexedFilter_=new ia(e.getIndex()),this.index_=e.getIndex(),this.startPost_=As.getStartPost_(e),this.endPost_=As.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,s,i,r,o){return this.matches(new F(n,s))||(s=x.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=x.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(x.EMPTY_NODE);const r=this;return n.forEachChild(oe,(o,a)=>{r.matches(new F(o,a))||(i=i.updateImmediateChild(o,x.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class Tv{constructor(e){this.rangedFilter_=new As(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new F(n,s))||(s=x.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=x.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=x.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();let l;if(this.reverse_?l=this.index_.compare(this.rangedFilter_.getStartPost(),a)<=0:l=this.index_.compare(a,this.rangedFilter_.getEndPost())<=0,l)i=i.updateImmediateChild(a.name,a.node),o++;else break}}else{i=n.withIndex(this.index_),i=i.updatePriority(x.EMPTY_NODE);let r,o,a,l;if(this.reverse_){l=i.getReverseIterator(this.index_),r=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const h=this.index_.getCompare();a=(f,g)=>h(g,f)}else l=i.getIterator(this.index_),r=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),a=this.index_.getCompare();let c=0,u=!1;for(;l.hasNext();){const h=l.getNext();!u&&a(r,h)<=0&&(u=!0),u&&c<this.limit_&&a(h,o)<=0?c++:i=i.updateImmediateChild(h.name,x.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(f,g)=>h(g,f)}else o=this.index_.getCompare();const a=e;E(a.numChildren()===this.limit_,"");const l=new F(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const h=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const g=f==null?1:o(f,l);if(u&&!s.isEmpty()&&g>=0)return r!=null&&r.trackChildChange(ks(n,s,h)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(Ns(n,h));const S=a.updateImmediateChild(n,x.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r!=null&&r.trackChildChange(Bn(f.name,f.node)),S.updateImmediateChild(f.name,f.node)):S}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(Ns(c.name,c.node)),r.trackChildChange(Bn(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,x.EMPTY_NODE)):e}}/**
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
 */class ra{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=oe}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return E(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return E(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Un}hasEnd(){return this.endSet_}getIndexEndValue(){return E(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return E(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:on}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return E(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===oe}copy(){const e=new ra;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Sv(t){return t.loadsAllData()?new ia(t.getIndex()):t.hasLimit()?new Tv(t):new As(t)}function nc(t){const e={};if(t.isDefault())return e;let n;return t.index_===oe?n="$priority":t.index_===Cv?n="$value":t.index_===xn?n="$key":(E(t.index_ instanceof Ev,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=pe(n),t.startSet_&&(e.startAt=pe(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+pe(t.indexStartName_))),t.endSet_&&(e.endAt=pe(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+pe(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function sc(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==oe&&(e.i=t.index_.toString()),e}/**
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
 */class Ci extends Oh{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Ws("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(E(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Ci.getListenId_(e,s),a={};this.listens_[o]=a;const l=nc(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),Ln(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(e,n){const s=Ci.getListenId_(e,n);delete this.listens_[s]}get(e){const n=nc(e._queryParams),s=e._path.toString(),i=new Os;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Qn(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Is(a.responseText)}catch{Se("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&Se("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class Rv{constructor(){this.rootNode_=x.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Ii(){return{value:null,children:new Map}}function Vh(t,e,n){if(B(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=L(e);t.children.has(s)||t.children.set(s,Ii());const i=t.children.get(s);e=Q(e),Vh(i,e,n)}}function so(t,e,n){t.value!==null?n(e,t.value):Nv(t,(s,i)=>{const r=new q(e.toString()+"/"+s);so(i,r,n)})}function Nv(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class kv{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&be(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
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
 */const ic=10*1e3,Av=30*1e3,xv=5*60*1e3;class Pv{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new kv(e);const s=ic+(Av-ic)*Math.random();fs(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;be(e,(i,r)=>{r>0&&it(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),fs(this.reportStats_.bind(this),Math.floor(Math.random()*2*xv))}}/**
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
 */var ze;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ze||(ze={}));function oa(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function aa(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function la(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class wi{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=ze.ACK_USER_WRITE,this.source=oa()}operationForChild(e){if(B(this.path)){if(this.affectedTree.value!=null)return E(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new q(e));return new wi($(),n,this.revert)}}else return E(L(this.path)===e,"operationForChild called for unrelated child."),new wi(Q(this.path),this.affectedTree,this.revert)}}/**
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
 */class xs{constructor(e,n){this.source=e,this.path=n,this.type=ze.LISTEN_COMPLETE}operationForChild(e){return B(this.path)?new xs(this.source,$()):new xs(this.source,Q(this.path))}}/**
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
 */class an{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=ze.OVERWRITE}operationForChild(e){return B(this.path)?new an(this.source,$(),this.snap.getImmediateChild(e)):new an(this.source,Q(this.path),this.snap)}}/**
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
 */class Wn{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=ze.MERGE}operationForChild(e){if(B(this.path)){const n=this.children.subtree(new q(e));return n.isEmpty()?null:n.value?new an(this.source,$(),n.value):new Wn(this.source,$(),n)}else return E(L(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Wn(this.source,Q(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class ln{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(B(e))return this.isFullyInitialized()&&!this.filtered_;const n=L(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class Ov{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Mv(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(wv(o.childName,o.snapshotNode))}),rs(t,i,"child_removed",e,s,n),rs(t,i,"child_added",e,s,n),rs(t,i,"child_moved",r,s,n),rs(t,i,"child_changed",e,s,n),rs(t,i,"value",e,s,n),i}function rs(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>Lv(t,a,l)),o.forEach(a=>{const l=Dv(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function Dv(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Lv(t,e,n){if(e.childName==null||n.childName==null)throw Gn("Should only compare child_ events.");const s=new F(e.childName,e.snapshotNode),i=new F(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
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
 */function Qi(t,e){return{eventCache:t,serverCache:e}}function ps(t,e,n,s){return Qi(new ln(e,n,s),t.serverCache)}function jh(t,e,n,s){return Qi(t.eventCache,new ln(e,n,s))}function io(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function cn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Tr;const Fv=()=>(Tr||(Tr=new Ae(my)),Tr);class Y{constructor(e,n=Fv()){this.value=e,this.children=n}static fromObject(e){let n=new Y(null);return be(e,(s,i)=>{n=n.set(new q(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:$(),value:this.value};if(B(e))return null;{const s=L(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(Q(e),n);return r!=null?{path:re(new q(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(B(e))return this;{const n=L(e),s=this.children.get(n);return s!==null?s.subtree(Q(e)):new Y(null)}}set(e,n){if(B(e))return new Y(n,this.children);{const s=L(e),r=(this.children.get(s)||new Y(null)).set(Q(e),n),o=this.children.insert(s,r);return new Y(this.value,o)}}remove(e){if(B(e))return this.children.isEmpty()?new Y(null):new Y(null,this.children);{const n=L(e),s=this.children.get(n);if(s){const i=s.remove(Q(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new Y(null):new Y(this.value,r)}else return this}}get(e){if(B(e))return this.value;{const n=L(e),s=this.children.get(n);return s?s.get(Q(e)):null}}setTree(e,n){if(B(e))return n;{const s=L(e),r=(this.children.get(s)||new Y(null)).setTree(Q(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new Y(this.value,o)}}fold(e){return this.fold_($(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(re(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,$(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(B(e))return null;{const r=L(e),o=this.children.get(r);return o?o.findOnPath_(Q(e),re(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,$(),n)}foreachOnPath_(e,n,s){if(B(e))return this;{this.value&&s(n,this.value);const i=L(e),r=this.children.get(i);return r?r.foreachOnPath_(Q(e),re(n,i),s):new Y(null)}}foreach(e){this.foreach_($(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(re(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class Qe{constructor(e){this.writeTree_=e}static empty(){return new Qe(new Y(null))}}function _s(t,e,n){if(B(e))return new Qe(new Y(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=ke(i,e);return r=r.updateChild(o,n),new Qe(t.writeTree_.set(i,r))}else{const i=new Y(n),r=t.writeTree_.setTree(e,i);return new Qe(r)}}}function ro(t,e,n){let s=t;return be(n,(i,r)=>{s=_s(s,re(e,i),r)}),s}function rc(t,e){if(B(e))return Qe.empty();{const n=t.writeTree_.setTree(e,new Y(null));return new Qe(n)}}function oo(t,e){return dn(t,e)!=null}function dn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(ke(n.path,e)):null}function oc(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(oe,(s,i)=>{e.push(new F(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new F(s,i.value))}),e}function Pt(t,e){if(B(e))return t;{const n=dn(t,e);return n!=null?new Qe(new Y(n)):new Qe(t.writeTree_.subtree(e))}}function ao(t){return t.writeTree_.isEmpty()}function Hn(t,e){return qh($(),t.writeTree_,e)}function qh(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(E(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=qh(re(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(re(t,".priority"),s)),n}}/**
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
 */function ca(t,e){return Yh(e,t)}function Uv(t,e,n,s,i){E(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=_s(t.visibleWrites,e,n)),t.lastWriteId=s}function Bv(t,e,n,s){E(s>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:s,visible:!0}),t.visibleWrites=ro(t.visibleWrites,e,n),t.lastWriteId=s}function Wv(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function Hv(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);E(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&$v(a,s.path)?i=!1:Ue(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return Vv(t),!0;if(s.snap)t.visibleWrites=rc(t.visibleWrites,s.path);else{const a=s.children;be(a,l=>{t.visibleWrites=rc(t.visibleWrites,re(s.path,l))})}return!0}else return!1}function $v(t,e){if(t.snap)return Ue(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Ue(re(t.path,n),e))return!0;return!1}function Vv(t){t.visibleWrites=zh(t.allWrites,jv,$()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function jv(t){return t.visible}function zh(t,e,n){let s=Qe.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)Ue(n,o)?(a=ke(n,o),s=_s(s,a,r.snap)):Ue(o,n)&&(a=ke(o,n),s=_s(s,$(),r.snap.getChild(a)));else if(r.children){if(Ue(n,o))a=ke(n,o),s=ro(s,a,r.children);else if(Ue(o,n))if(a=ke(o,n),B(a))s=ro(s,$(),r.children);else{const l=Ln(r.children,L(a));if(l){const c=l.getChild(Q(a));s=_s(s,$(),c)}}}else throw Gn("WriteRecord should have .snap or .children")}}return s}function Kh(t,e,n,s,i){if(!s&&!i){const r=dn(t.visibleWrites,e);if(r!=null)return r;{const o=Pt(t.visibleWrites,e);if(ao(o))return n;if(n==null&&!oo(o,$()))return null;{const a=n||x.EMPTY_NODE;return Hn(o,a)}}}else{const r=Pt(t.visibleWrites,e);if(!i&&ao(r))return n;if(!i&&n==null&&!oo(r,$()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(Ue(c.path,e)||Ue(e,c.path))},a=zh(t.allWrites,o,e),l=n||x.EMPTY_NODE;return Hn(a,l)}}}function qv(t,e,n){let s=x.EMPTY_NODE;const i=dn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(oe,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Pt(t.visibleWrites,e);return n.forEachChild(oe,(o,a)=>{const l=Hn(Pt(r,new q(o)),a);s=s.updateImmediateChild(o,l)}),oc(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Pt(t.visibleWrites,e);return oc(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function zv(t,e,n,s,i){E(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=re(e,n);if(oo(t.visibleWrites,r))return null;{const o=Pt(t.visibleWrites,r);return ao(o)?i.getChild(n):Hn(o,i.getChild(n))}}function Kv(t,e,n,s){const i=re(e,n),r=dn(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Pt(t.visibleWrites,i);return Hn(o,s.getNode().getImmediateChild(n))}else return null}function Gv(t,e){return dn(t.visibleWrites,e)}function Yv(t,e,n,s,i,r,o){let a;const l=Pt(t.visibleWrites,e),c=dn(l,$());if(c!=null)a=c;else if(n!=null)a=Hn(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),f=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let g=f.getNext();for(;g&&u.length<i;)h(g,s)!==0&&u.push(g),g=f.getNext();return u}else return[]}function Qv(){return{visibleWrites:Qe.empty(),allWrites:[],lastWriteId:-1}}function Ti(t,e,n,s){return Kh(t.writeTree,t.treePath,e,n,s)}function ua(t,e){return qv(t.writeTree,t.treePath,e)}function ac(t,e,n,s){return zv(t.writeTree,t.treePath,e,n,s)}function Si(t,e){return Gv(t.writeTree,re(t.treePath,e))}function Jv(t,e,n,s,i,r){return Yv(t.writeTree,t.treePath,e,n,s,i,r)}function ha(t,e,n){return Kv(t.writeTree,t.treePath,e,n)}function Gh(t,e){return Yh(re(t.treePath,e),t.writeTree)}function Yh(t,e){return{treePath:t,writeTree:e}}/**
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
 */class Xv{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;E(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),E(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,ks(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,Ns(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Bn(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,ks(s,e.snapshotNode,i.oldSnap));else throw Gn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class Zv{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Qh=new Zv;class da{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new ln(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ha(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:cn(this.viewCache_),r=Jv(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function eE(t){return{filter:t}}function tE(t,e){E(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),E(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function nE(t,e,n,s,i){const r=new Xv;let o,a;if(n.type===ze.OVERWRITE){const c=n;c.source.fromUser?o=lo(t,e,c.path,c.snap,s,i,r):(E(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!B(c.path),o=Ri(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===ze.MERGE){const c=n;c.source.fromUser?o=iE(t,e,c.path,c.children,s,i,r):(E(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=co(t,e,c.path,c.children,s,i,a,r))}else if(n.type===ze.ACK_USER_WRITE){const c=n;c.revert?o=aE(t,e,c.path,s,i,r):o=rE(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===ze.LISTEN_COMPLETE)o=oE(t,e,n.path,s,r);else throw Gn("Unknown operation type: "+n.type);const l=r.getChanges();return sE(e,o,l),{viewCache:o,changes:l}}function sE(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=io(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push($h(io(e)))}}function Jh(t,e,n,s,i,r){const o=e.eventCache;if(Si(s,n)!=null)return e;{let a,l;if(B(n))if(E(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=cn(e),u=c instanceof x?c:x.EMPTY_NODE,h=ua(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Ti(s,cn(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=L(n);if(c===".priority"){E(Lt(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=ac(s,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=Q(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=ac(s,n,o.getNode(),l);f!=null?h=o.getNode().getImmediateChild(c).updateChild(u,f):h=o.getNode().getImmediateChild(c)}else h=ha(s,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,i,r):a=o.getNode()}}return ps(e,a,o.isFullyInitialized()||B(n),t.filter.filtersNodes())}}function Ri(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(B(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const g=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),g,null)}else{const g=L(n);if(!l.isCompleteForPath(n)&&Lt(n)>1)return e;const b=Q(n),N=l.getNode().getImmediateChild(g).updateChild(b,s);g===".priority"?c=u.updatePriority(l.getNode(),N):c=u.updateChild(l.getNode(),g,N,b,Qh,null)}const h=jh(e,c,l.isFullyInitialized()||B(n),u.filtersNodes()),f=new da(i,h,r);return Jh(t,h,n,i,f,a)}function lo(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new da(i,e,r);if(B(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=ps(e,c,!0,t.filter.filtersNodes());else{const h=L(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=ps(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=Q(n),g=a.getNode().getImmediateChild(h);let b;if(B(f))b=s;else{const S=u.getCompleteChild(h);S!=null?ea(f)===".priority"&&S.getChild(Dh(f)).isEmpty()?b=S:b=S.updateChild(f,s):b=x.EMPTY_NODE}if(g.equals(b))l=e;else{const S=t.filter.updateChild(a.getNode(),h,b,f,u,o);l=ps(e,S,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function lc(t,e){return t.eventCache.isCompleteForChild(e)}function iE(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=re(n,l);lc(e,L(u))&&(a=lo(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=re(n,l);lc(e,L(u))||(a=lo(t,a,u,c,i,r,o))}),a}function cc(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function co(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;B(n)?c=s:c=new Y(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const g=e.serverCache.getNode().getImmediateChild(h),b=cc(t,g,f);l=Ri(t,l,new q(h),b,i,r,o,a)}}),c.children.inorderTraversal((h,f)=>{const g=!e.serverCache.isCompleteForChild(h)&&f.value===void 0;if(!u.hasChild(h)&&!g){const b=e.serverCache.getNode().getImmediateChild(h),S=cc(t,b,f);l=Ri(t,l,new q(h),S,i,r,o,a)}}),l}function rE(t,e,n,s,i,r,o){if(Si(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(B(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Ri(t,e,n,l.getNode().getChild(n),i,r,a,o);if(B(n)){let c=new Y(null);return l.getNode().forEachChild(xn,(u,h)=>{c=c.set(new q(u),h)}),co(t,e,n,c,i,r,a,o)}else return e}else{let c=new Y(null);return s.foreach((u,h)=>{const f=re(n,u);l.isCompleteForPath(f)&&(c=c.set(u,l.getNode().getChild(f)))}),co(t,e,n,c,i,r,a,o)}}function oE(t,e,n,s,i){const r=e.serverCache,o=jh(e,r.getNode(),r.isFullyInitialized()||B(n),r.isFiltered());return Jh(t,o,n,s,Qh,i)}function aE(t,e,n,s,i,r){let o;if(Si(s,n)!=null)return e;{const a=new da(s,e,i),l=e.eventCache.getNode();let c;if(B(n)||L(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Ti(s,cn(e));else{const h=e.serverCache.getNode();E(h instanceof x,"serverChildren would be complete if leaf node"),u=ua(s,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=L(n);let h=ha(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,Q(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,x.EMPTY_NODE,Q(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ti(s,cn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Si(s,$())!=null,ps(e,c,o,t.filter.filtersNodes())}}/**
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
 */class lE{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new ia(s.getIndex()),r=Sv(s);this.processor_=eE(r);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(x.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(x.EMPTY_NODE,a.getNode(),null),u=new ln(l,o.isFullyInitialized(),i.filtersNodes()),h=new ln(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Qi(h,u),this.eventGenerator_=new Ov(this.query_)}get query(){return this.query_}}function cE(t){return t.viewCache_.serverCache.getNode()}function uE(t,e){const n=cn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!B(e)&&!n.getImmediateChild(L(e)).isEmpty())?n.getChild(e):null}function uc(t){return t.eventRegistrations_.length===0}function hE(t,e){t.eventRegistrations_.push(e)}function hc(t,e,n){const s=[];if(n){E(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function dc(t,e,n,s){e.type===ze.MERGE&&e.source.queryId!==null&&(E(cn(t.viewCache_),"We should always have a full cache before handling merges"),E(io(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=nE(t.processor_,i,e,n,s);return tE(t.processor_,r.viewCache),E(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Xh(t,r.changes,r.viewCache.eventCache.getNode(),null)}function dE(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(oe,(r,o)=>{s.push(Bn(r,o))}),n.isFullyInitialized()&&s.push($h(n.getNode())),Xh(t,s,n.getNode(),e)}function Xh(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return Mv(t.eventGenerator_,e,n,i)}/**
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
 */let Ni;class fE{constructor(){this.views=new Map}}function pE(t){E(!Ni,"__referenceConstructor has already been defined"),Ni=t}function _E(){return E(Ni,"Reference.ts has not been loaded"),Ni}function gE(t){return t.views.size===0}function fa(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return E(r!=null,"SyncTree gave us an op for an invalid query."),dc(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(dc(o,e,n,s));return r}}function mE(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=Ti(n,i?s:null),l=!1;a?l=!0:s instanceof x?(a=ua(n,s),l=!1):(a=x.EMPTY_NODE,l=!1);const c=Qi(new ln(a,l,!1),new ln(s,i,!1));return new lE(e,c)}return o}function yE(t,e,n,s,i,r){const o=mE(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),hE(o,n),dE(o,n)}function vE(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=Ft(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(hc(c,n,s)),uc(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(hc(l,n,s)),uc(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!Ft(t)&&r.push(new(_E())(e._repo,e._path)),{removed:r,events:o}}function Zh(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Pn(t,e){let n=null;for(const s of t.views.values())n=n||uE(s,e);return n}function ed(t,e){if(e._queryParams.loadsAllData())return Ji(t);{const s=e._queryIdentifier;return t.views.get(s)}}function td(t,e){return ed(t,e)!=null}function Ft(t){return Ji(t)!=null}function Ji(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let ki;function EE(t){E(!ki,"__referenceConstructor has already been defined"),ki=t}function bE(){return E(ki,"Reference.ts has not been loaded"),ki}let CE=1;class fc{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Y(null),this.pendingWriteTree_=Qv(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function nd(t,e,n,s,i){return Uv(t.pendingWriteTree_,e,n,s,i),i?Xn(t,new an(oa(),e,n)):[]}function IE(t,e,n,s){Bv(t.pendingWriteTree_,e,n,s);const i=Y.fromObject(n);return Xn(t,new Wn(oa(),e,i))}function Nt(t,e,n=!1){const s=Wv(t.pendingWriteTree_,e);if(Hv(t.pendingWriteTree_,e)){let r=new Y(null);return s.snap!=null?r=r.set($(),!0):be(s.children,o=>{r=r.set(new q(o),!0)}),Xn(t,new wi(s.path,r,n))}else return[]}function Xi(t,e,n){return Xn(t,new an(aa(),e,n))}function wE(t,e,n){const s=Y.fromObject(n);return Xn(t,new Wn(aa(),e,s))}function TE(t,e){return Xn(t,new xs(aa(),e))}function SE(t,e,n){const s=_a(t,n);if(s){const i=ga(s),r=i.path,o=i.queryId,a=ke(r,e),l=new xs(la(o),a);return ma(t,r,l)}else return[]}function uo(t,e,n,s){const i=e._path,r=t.syncPointTree_.get(i);let o=[];if(r&&(e._queryIdentifier==="default"||td(r,e))){const a=vE(r,e,n,s);gE(r)&&(t.syncPointTree_=t.syncPointTree_.remove(i));const l=a.removed;o=a.events;const c=l.findIndex(h=>h._queryParams.loadsAllData())!==-1,u=t.syncPointTree_.findOnPath(i,(h,f)=>Ft(f));if(c&&!u){const h=t.syncPointTree_.subtree(i);if(!h.isEmpty()){const f=kE(h);for(let g=0;g<f.length;++g){const b=f[g],S=b.query,N=rd(t,b);t.listenProvider_.startListening(gs(S),Ai(t,S),N.hashFn,N.onComplete)}}}!u&&l.length>0&&!s&&(c?t.listenProvider_.stopListening(gs(e),null):l.forEach(h=>{const f=t.queryToTagMap.get(Zi(h));t.listenProvider_.stopListening(gs(h),f)})),AE(t,l)}return o}function RE(t,e,n,s){const i=_a(t,s);if(i!=null){const r=ga(i),o=r.path,a=r.queryId,l=ke(o,e),c=new an(la(a),l,n);return ma(t,o,c)}else return[]}function NE(t,e,n,s){const i=_a(t,s);if(i){const r=ga(i),o=r.path,a=r.queryId,l=ke(o,e),c=Y.fromObject(n),u=new Wn(la(a),l,c);return ma(t,o,u)}else return[]}function pc(t,e,n){const s=e._path;let i=null,r=!1;t.syncPointTree_.foreachOnPath(s,(h,f)=>{const g=ke(h,s);i=i||Pn(f,g),r=r||Ft(f)});let o=t.syncPointTree_.get(s);o?(r=r||Ft(o),i=i||Pn(o,$())):(o=new fE,t.syncPointTree_=t.syncPointTree_.set(s,o));let a;i!=null?a=!0:(a=!1,i=x.EMPTY_NODE,t.syncPointTree_.subtree(s).foreachChild((f,g)=>{const b=Pn(g,$());b&&(i=i.updateImmediateChild(f,b))}));const l=td(o,e);if(!l&&!e._queryParams.loadsAllData()){const h=Zi(e);E(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const f=xE();t.queryToTagMap.set(h,f),t.tagToQueryMap.set(f,h)}const c=ca(t.pendingWriteTree_,s);let u=yE(o,e,n,c,i,a);if(!l&&!r){const h=ed(o,e);u=u.concat(PE(t,e,h))}return u}function pa(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=ke(o,e),c=Pn(a,l);if(c)return c});return Kh(i,e,r,n,!0)}function Xn(t,e){return sd(e,t.syncPointTree_,null,ca(t.pendingWriteTree_,$()))}function sd(t,e,n,s){if(B(t.path))return id(t,e,n,s);{const i=e.get($());n==null&&i!=null&&(n=Pn(i,$()));let r=[];const o=L(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=Gh(s,o);r=r.concat(sd(a,l,c,u))}return i&&(r=r.concat(fa(i,t,s,n))),r}}function id(t,e,n,s){const i=e.get($());n==null&&i!=null&&(n=Pn(i,$()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=Gh(s,o),u=t.operationForChild(o);u&&(r=r.concat(id(u,a,l,c)))}),i&&(r=r.concat(fa(i,t,s,n))),r}function rd(t,e){const n=e.query,s=Ai(t,n);return{hashFn:()=>(cE(e)||x.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?SE(t,n._path,s):TE(t,n._path);{const r=Ey(i,n);return uo(t,n,null,r)}}}}function Ai(t,e){const n=Zi(e);return t.queryToTagMap.get(n)}function Zi(t){return t._path.toString()+"$"+t._queryIdentifier}function _a(t,e){return t.tagToQueryMap.get(e)}function ga(t){const e=t.indexOf("$");return E(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new q(t.substr(0,e))}}function ma(t,e,n){const s=t.syncPointTree_.get(e);E(s,"Missing sync point for query tag that we're tracking");const i=ca(t.pendingWriteTree_,e);return fa(s,n,i,null)}function kE(t){return t.fold((e,n,s)=>{if(n&&Ft(n))return[Ji(n)];{let i=[];return n&&(i=Zh(n)),be(s,(r,o)=>{i=i.concat(o)}),i}})}function gs(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(bE())(t._repo,t._path):t}function AE(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Zi(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function xE(){return CE++}function PE(t,e,n){const s=e._path,i=Ai(t,e),r=rd(t,n),o=t.listenProvider_.startListening(gs(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)E(!Ft(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,h)=>{if(!B(c)&&u&&Ft(u))return[Ji(u).query];{let f=[];return u&&(f=f.concat(Zh(u).map(g=>g.query))),be(h,(g,b)=>{f=f.concat(b)}),f}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(gs(u),Ai(t,u))}}return o}/**
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
 */class ya{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new ya(n)}node(){return this.node_}}class va{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=re(this.path_,e);return new va(this.syncTree_,n)}node(){return pa(this.syncTree_,this.path_)}}const OE=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},_c=function(t,e,n){if(!t||typeof t!="object")return t;if(E(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return ME(t[".sv"],e,n);if(typeof t[".sv"]=="object")return DE(t[".sv"],e);E(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},ME=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:E(!1,"Unexpected server value: "+t)}},DE=function(t,e,n){t.hasOwnProperty("increment")||E(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&E(!1,"Unexpected increment value: "+s);const i=e.node();if(E(i!==null&&typeof i!="undefined","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},od=function(t,e,n,s){return Ea(e,new va(n,t),s)},ad=function(t,e,n){return Ea(t,new ya(e),n)};function Ea(t,e,n){const s=t.getPriority().val(),i=_c(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=_c(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new ue(a,fe(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new ue(i))),o.forEachChild(oe,(a,l)=>{const c=Ea(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class ba{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Ca(t,e){let n=e instanceof q?e:new q(e),s=t,i=L(n);for(;i!==null;){const r=Ln(s.node.children,i)||{children:{},childCount:0};s=new ba(i,s,r),n=Q(n),i=L(n)}return s}function Zn(t){return t.node.value}function ld(t,e){t.node.value=e,ho(t)}function cd(t){return t.node.childCount>0}function LE(t){return Zn(t)===void 0&&!cd(t)}function er(t,e){be(t.node.children,(n,s)=>{e(new ba(n,t,s))})}function ud(t,e,n,s){n&&!s&&e(t),er(t,i=>{ud(i,e,!0,s)}),n&&s&&e(t)}function FE(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function $s(t){return new q(t.parent===null?t.name:$s(t.parent)+"/"+t.name)}function ho(t){t.parent!==null&&UE(t.parent,t.name,t)}function UE(t,e,n){const s=LE(n),i=it(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,ho(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,ho(t))}/**
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
 */const BE=/[\[\].#$\/\u0000-\u001F\u007F]/,WE=/[\[\].#$\u0000-\u001F\u007F]/,Sr=10*1024*1024,Ia=function(t){return typeof t=="string"&&t.length!==0&&!BE.test(t)},hd=function(t){return typeof t=="string"&&t.length!==0&&!WE.test(t)},HE=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),hd(t)},$E=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Go(t)||t&&typeof t=="object"&&it(t,".sv")},dd=function(t,e,n,s){s&&e===void 0||tr(Vi(t,"value"),e,n)},tr=function(t,e,n){const s=n instanceof q?new nv(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+jt(s));if(typeof e=="function")throw new Error(t+"contains a function "+jt(s)+" with contents = "+e.toString());if(Go(e))throw new Error(t+"contains "+e.toString()+" "+jt(s));if(typeof e=="string"&&e.length>Sr/3&&ji(e)>Sr)throw new Error(t+"contains a string greater than "+Sr+" utf8 bytes "+jt(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(be(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Ia(o)))throw new Error(t+" contains an invalid key ("+o+") "+jt(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);sv(s,o),tr(t,a,s),iv(s)}),i&&r)throw new Error(t+' contains ".value" child '+jt(s)+" in addition to actual children.")}},VE=function(t,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const r=Rs(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!Ia(r[o]))throw new Error(t+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(tv);let i=null;for(n=0;n<e.length;n++){if(s=e[n],i!==null&&Ue(i,s))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},jE=function(t,e,n,s){if(s&&e===void 0)return;const i=Vi(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];be(e,(o,a)=>{const l=new q(o);if(tr(i,a,re(n,l)),ea(l)===".priority"&&!$E(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(l)}),VE(i,r)},fd=function(t,e,n,s){if(!(s&&n===void 0)&&!hd(n))throw new Error(Vi(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},qE=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),fd(t,e,n,s)},wa=function(t,e){if(L(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},zE=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Ia(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!HE(n))throw new Error(Vi(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class KE{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function nr(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!ta(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function pd(t,e,n){nr(t,n),_d(t,s=>ta(s,e))}function Je(t,e,n){nr(t,n),_d(t,s=>Ue(s,e)||Ue(e,s))}function _d(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(GE(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function GE(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Zt&&me("event: "+n.toString()),Jn(s)}}}/**
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
 */const YE="repo_interrupt",QE=25;class JE{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new KE,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ii(),this.transactionQueueTree_=new ba,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function XE(t,e,n){if(t.stats_=Jo(t.repoInfo_),t.forceRestClient_||wy())t.server_=new Ci(t.repoInfo_,(s,i,r,o)=>{gc(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>mc(t,!0),0);else{if(typeof n!="undefined"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{pe(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new ft(t.repoInfo_,e,(s,i,r,o)=>{gc(t,s,i,r,o)},s=>{mc(t,s)},s=>{ZE(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=xy(t.repoInfo_,()=>new Pv(t.stats_,t.server_)),t.infoData_=new Rv,t.infoSyncTree_=new fc({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=Xi(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Ta(t,"connected",!1),t.serverSyncTree_=new fc({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);Je(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function gd(t){const n=t.infoData_.getNode(new q(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function sr(t){return OE({timestamp:gd(t)})}function gc(t,e,n,s,i){t.dataUpdateCount++;const r=new q(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=di(n,c=>fe(c));o=NE(t.serverSyncTree_,r,l,i)}else{const l=fe(n);o=RE(t.serverSyncTree_,r,l,i)}else if(s){const l=di(n,c=>fe(c));o=wE(t.serverSyncTree_,r,l)}else{const l=fe(n);o=Xi(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=$n(t,r)),Je(t.eventQueue_,a,o)}function mc(t,e){Ta(t,"connected",e),e===!1&&nb(t)}function ZE(t,e){be(e,(n,s)=>{Ta(t,n,s)})}function Ta(t,e,n){const s=new q("/.info/"+e),i=fe(n);t.infoData_.updateSnapshot(s,i);const r=Xi(t.infoSyncTree_,s,i);Je(t.eventQueue_,s,r)}function Sa(t){return t.nextWriteId_++}function eb(t,e,n,s,i){ir(t,"set",{path:e.toString(),value:n,priority:s});const r=sr(t),o=fe(n,s),a=pa(t.serverSyncTree_,e),l=ad(o,a,r),c=Sa(t),u=nd(t.serverSyncTree_,e,l,c,!0);nr(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(f,g)=>{const b=f==="ok";b||Se("set at "+e+" failed: "+f);const S=Nt(t.serverSyncTree_,c,!b);Je(t.eventQueue_,e,S),fo(t,i,f,g)});const h=Na(t,e);$n(t,h),Je(t.eventQueue_,h,[])}function tb(t,e,n,s){ir(t,"update",{path:e.toString(),value:n});let i=!0;const r=sr(t),o={};if(be(n,(a,l)=>{i=!1,o[a]=od(re(e,a),fe(l),t.serverSyncTree_,r)}),i)me("update() called with empty data.  Don't do anything."),fo(t,s,"ok",void 0);else{const a=Sa(t),l=IE(t.serverSyncTree_,e,o,a);nr(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,u)=>{const h=c==="ok";h||Se("update at "+e+" failed: "+c);const f=Nt(t.serverSyncTree_,a,!h),g=f.length>0?$n(t,e):e;Je(t.eventQueue_,g,f),fo(t,s,c,u)}),be(n,c=>{const u=Na(t,re(e,c));$n(t,u)}),Je(t.eventQueue_,e,[])}}function nb(t){ir(t,"onDisconnectEvents");const e=sr(t),n=Ii();so(t.onDisconnect_,$(),(i,r)=>{const o=od(i,r,t.serverSyncTree_,e);Vh(n,i,o)});let s=[];so(n,$(),(i,r)=>{s=s.concat(Xi(t.serverSyncTree_,i,r));const o=Na(t,i);$n(t,o)}),t.onDisconnect_=Ii(),Je(t.eventQueue_,$(),s)}function sb(t,e,n){let s;L(e._path)===".info"?s=pc(t.infoSyncTree_,e,n):s=pc(t.serverSyncTree_,e,n),pd(t.eventQueue_,e._path,s)}function yc(t,e,n){let s;L(e._path)===".info"?s=uo(t.infoSyncTree_,e,n):s=uo(t.serverSyncTree_,e,n),pd(t.eventQueue_,e._path,s)}function ib(t){t.persistentConnection_&&t.persistentConnection_.interrupt(YE)}function ir(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),me(n,...e)}function fo(t,e,n,s){e&&Jn(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function md(t,e,n){return pa(t.serverSyncTree_,e,n)||x.EMPTY_NODE}function Ra(t,e=t.transactionQueueTree_){if(e||rr(t,e),Zn(e)){const n=vd(t,e);E(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&rb(t,$s(e),n)}else cd(e)&&er(e,n=>{Ra(t,n)})}function rb(t,e,n){const s=n.map(c=>c.currentWriteId),i=md(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];E(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=ke(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{ir(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(Nt(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();rr(t,Ca(t.transactionQueueTree_,e)),Ra(t,t.transactionQueueTree_),Je(t.eventQueue_,e,u);for(let f=0;f<h.length;f++)Jn(h[f])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Se("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}$n(t,e)}},o)}function $n(t,e){const n=yd(t,e),s=$s(n),i=vd(t,n);return ob(t,i,s),s}function ob(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=ke(n,l.path);let u=!1,h;if(E(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(Nt(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=QE)u=!0,h="maxretry",i=i.concat(Nt(t.serverSyncTree_,l.currentWriteId,!0));else{const f=md(t,l.path,o);l.currentInputSnapshot=f;const g=e[a].update(f.val());if(g!==void 0){tr("transaction failed: Data returned ",g,l.path);let b=fe(g);typeof g=="object"&&g!=null&&it(g,".priority")||(b=b.updatePriority(f.getPriority()));const N=l.currentWriteId,U=sr(t),ae=ad(b,f,U);l.currentOutputSnapshotRaw=b,l.currentOutputSnapshotResolved=ae,l.currentWriteId=Sa(t),o.splice(o.indexOf(N),1),i=i.concat(nd(t.serverSyncTree_,l.path,ae,l.currentWriteId,l.applyLocally)),i=i.concat(Nt(t.serverSyncTree_,N,!0))}else u=!0,h="nodata",i=i.concat(Nt(t.serverSyncTree_,l.currentWriteId,!0))}Je(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}rr(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)Jn(s[a]);Ra(t,t.transactionQueueTree_)}function yd(t,e){let n,s=t.transactionQueueTree_;for(n=L(e);n!==null&&Zn(s)===void 0;)s=Ca(s,n),e=Q(e),n=L(e);return s}function vd(t,e){const n=[];return Ed(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Ed(t,e,n){const s=Zn(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);er(e,i=>{Ed(t,i,n)})}function rr(t,e){const n=Zn(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,ld(e,n.length>0?n:void 0)}er(e,s=>{rr(t,s)})}function Na(t,e){const n=$s(yd(t,e)),s=Ca(t.transactionQueueTree_,e);return FE(s,i=>{Rr(t,i)}),Rr(t,s),ud(s,i=>{Rr(t,i)}),n}function Rr(t,e){const n=Zn(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(E(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(E(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Nt(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?ld(e,void 0):n.length=r+1,Je(t.eventQueue_,$s(e),i);for(let o=0;o<s.length;o++)Jn(s[o])}}/**
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
 */function ab(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function lb(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Se(`Invalid query segment '${n}' in query '${t}'`)}return e}const vc=function(t,e){const n=cb(t),s=n.namespace;n.domain==="firebase.com"&&rn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&rn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||_y();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Ny(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new q(n.pathString)}},cb=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=ab(t.substring(u,h)));const f=lb(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const g=e.slice(0,c);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const b=e.indexOf(".");s=e.substring(0,b).toLowerCase(),n=e.substring(b+1),r=s}"ns"in f&&(r=f.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
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
 */class bd{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+pe(this.snapshot.exportVal())}}class Cd{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class ub{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return E(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class ka{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return B(this._path)?null:ea(this._path)}get ref(){return new yt(this._repo,this._path)}get _queryIdentifier(){const e=sc(this._queryParams),n=Yo(e);return n==="{}"?"default":n}get _queryObject(){return sc(this._queryParams)}isEqual(e){if(e=rt(e),!(e instanceof ka))return!1;const n=this._repo===e._repo,s=ta(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+ev(this._path)}}class yt extends ka{constructor(e,n){super(e,n,new ra,!1)}get parent(){const e=Dh(this._path);return e===null?null:new yt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ps{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new q(e),s=Vn(this.ref,e);return new Ps(this._node.getChild(n),s,oe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Ps(i,Vn(this.ref,s),oe)))}hasChild(e){const n=new q(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function fn(t,e){return t=rt(t),t._checkNotDeleted("ref"),e!==void 0?Vn(t._root,e):t._root}function Vn(t,e){return t=rt(t),L(t._path)===null?qE("child","path",e,!1):fd("child","path",e,!1),new yt(t._repo,re(t._path,e))}function Id(t,e){t=rt(t),wa("push",t._path),dd("push",e,t._path,!0);const n=gd(t._repo),s=Iv(n),i=Vn(t,s),r=Vn(t,s);let o;return e!=null?o=wd(r,e).then(()=>r):o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function hb(t){return wa("remove",t._path),wd(t,null)}function wd(t,e){t=rt(t),wa("set",t._path),dd("set",e,t._path,!1);const n=new Os;return eb(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Td(t,e){jE("update",e,t._path,!1);const n=new Os;return tb(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}class Aa{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new bd("value",this,new Ps(e.snapshotNode,new yt(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Cd(this,e,n):null}matches(e){return e instanceof Aa?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class xa{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Cd(this,e,n):null}createEvent(e,n){E(e.childName!=null,"Child events should have a childName.");const s=Vn(new yt(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new bd(e.type,this,new Ps(e.snapshotNode,s,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof xa?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function db(t,e,n,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const l=n,c=(u,h)=>{yc(t._repo,t,a),l(u,h)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new ub(n,r||void 0),a=e==="value"?new Aa(o):new xa(e,o);return sb(t._repo,t,a),()=>yc(t._repo,t,a)}function Sd(t,e,n,s){return db(t,"value",e,n,s)}pE(yt);EE(yt);/**
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
 */const fb="FIREBASE_DATABASE_EMULATOR_HOST",po={};let pb=!1;function _b(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||rn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),me("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=vc(r,i),a=o.repoInfo,l,c;typeof process!="undefined"&&process.env&&(c=process.env[fb]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=vc(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new eo(eo.OWNER):new Sy(t.name,t.options,e);zE("Invalid Firebase Database URL",o),B(o.path)||rn("Database URL must point to the root of a Firebase Database (not including a child path).");const h=mb(a,t,u,new Ty(t.name,n));return new yb(h,t)}function gb(t,e){const n=po[e];(!n||n[t.key]!==t)&&rn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),ib(t),delete n[t.key]}function mb(t,e,n,s){let i=po[e.name];i||(i={},po[e.name]=i);let r=i[t.toURLString()];return r&&rn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new JE(t,pb,n,s),i[t.toURLString()]=r,r}class yb{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(XE(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new yt(this._repo,$())),this._rootInternal}_delete(){return this._rootInternal!==null&&(gb(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&rn("Cannot call "+e+" on a deleted database.")}}function vb(t=Du(),e){return Bo(t,"database").getImmediate({identifier:e})}/**
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
 */function Eb(t){uy(Ds),Fn(new tn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return _b(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),xt(Bl,Wl,t),xt(Bl,Wl,"esm2017")}ft.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};ft.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Eb();const bb={apiKey:"AIzaSyAsXHXd9Spu67AO6DV06x2E_EnVOIAu9UU",authDomain:"quick-retro.firebaseapp.com",projectId:"quick-retro",storageBucket:"quick-retro.appspot.com",messagingSenderId:"293134428599",appId:"1:293134428599:web:bad71d4fedbda8080ce032",databaseURL:"https://quick-retro-default-rtdb.europe-west1.firebasedatabase.app"},Cb=hg(bb),pn=vb(Cb);function Ib(){const t=un({});return Sd(fn(pn,"boards"),e=>{Object.entries(e.val()).forEach(([n,s])=>{t[n]=s})}),t}function wb(t){const e=un({loading:!0});return Sd(fn(pn,`boards/${t}`),n=>{e.exists=n.exists(),e.loading=!1,e.exists&&Object.entries(n.val()).forEach(([s,i])=>{e[s]=i})}),e}function Tb(t,e){const n=fn(pn,`boards/${t}`);Td(n,{cardsHidden:e})}function Sb(t,e){const n=fn(pn,`boards/${t}`);Td(n,{title:e})}function Rb(t,e,n){const s=fn(pn,`boards/${t}/columns/${e}/cards`);Id(s,n)}function Nb(t,e,n){hb(fn(pn,`boards/${t}/columns/${e}/cards/${n}`))}async function kb(t,e){const n=fn(pn,"boards");return(await Id(n,{author:t,cardsHidden:!0,title:"",columns:e.columns.map(i=>Ha(Wa({},i),{cards:{}}))})).key}function Ab(){const t=un({}),e=cy();return Yg(e).catch(n=>{console.error(n)}),Zg(e,n=>{n&&Object.entries(n).forEach(([s,i])=>{t[s]=i})}),t}var Bt=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n};const xb=Ut({props:{text:null,onClick:null},setup(t){return(e,n)=>(te(),Ee("button",{onClick:n[0]||(n[0]=(...s)=>t.onClick&&t.onClick(...s))},On(t.text),1))}});var Pb=Bt(xb,[["__scopeId","data-v-f7270f9a"]]);const Ob=Ut({props:{text:null,color:null,author:null,onDelete:null,id:null},setup(t){const{author:e}=t;Cu(r=>({"0156c4d7":t.color}));const s=dt("user").uid===e,i=dt("board");return(r,o)=>{var a;return te(),Ee("li",{class:jn({hidden:!s&&((a=Fe(i))==null?void 0:a.cardsHidden)})},[ce("button",{onClick:o[0]||(o[0]=l=>t.onDelete(t.id))},"\u2716"),gu(" "+On(t.text),1)],2)}}});var Mb=Bt(Ob,[["__scopeId","data-v-a430bb28"]]);const Db=Ut({props:{title:null,color:null,boardId:null,columnId:null,cards:null},setup(t){const{columnId:e,boardId:n}=t;Cu(a=>({"62139bba":t.color}));const s=un({inputText:""}),i=dt("user");function r(a){a.preventDefault(),s.inputText.trim()!==""&&(!(i!=null&&i.uid)||(Rb(n,e,{text:s.inputText,author:i.uid}),s.inputText=""))}function o(a){Nb(n,e,a)}return(a,l)=>(te(),Ee("section",null,[ce("h2",null,On(t.title),1),ce("ul",null,[(te(!0),Ee(de,null,bs(t.cards,(c,u)=>(te(),Mt(Mb,{id:u,author:c.author,text:c.text,color:t.color,onDelete:o},null,8,["id","author","text","color"]))),256))]),ce("form",{target:"#",onSubmit:r},[hu(ce("input",{placeholder:"Add new card","onUpdate:modelValue":l[0]||(l[0]=c=>Fe(s).inputText=c)},null,512),[[Iu,Fe(s).inputText]])],32)]))}});var Lb=Bt(Db,[["__scopeId","data-v-345fc8cf"]]);const Fb={class:"board"},Ub={class:"columns"},Bb={class:"options"},Wb=Ut({setup(t){const e=dt("board"),n=dt("boardId");function s(){Tb(n,!e.cardsHidden)}function i(){return e.cardsHidden?"Show all cards":"Hide other cards"}function r(c){c.key==="Enter"&&c.preventDefault()}function o(c){const u=(c==null?void 0:c.target).value.trim();Sb(n,u),l.value=u||"Untitled Retro"}function a(){l.value==="Untitled Retro"&&(l.value="")}const l=jc(e.title||"Untitled Retro");return(c,u)=>(te(),Ee(de,null,[ce("div",Fb,[hu(ce("input",{class:jn({untitled:l.value==="Untitled Retro"}),"onUpdate:modelValue":u[0]||(u[0]=h=>l.value=h),onKeypress:r,onFocusout:o,onFocusin:a},null,34),[[Iu,l.value]]),ce("section",Ub,[(te(!0),Ee(de,null,bs(Fe(e).columns,(h,f)=>{var g;return te(),Mt(Lb,{cards:(g=h.cards)!=null?g:[],"column-id":String(f),"board-id":Fe(n),key:String(f),title:h.title,color:h.color},null,8,["cards","column-id","board-id","title","color"])}),128))])]),ce("section",Bb,[Ye(Pb,{"on-click":s,text:i()},null,8,["text"])])],64))}});var Hb=Bt(Wb,[["__scopeId","data-v-4063f246"]]);const $b={},Vb={class:"loader"};function jb(t,e){return te(),Ee("div",Vb,"Loading...")}var qb=Bt($b,[["render",jb],["__scopeId","data-v-840bd5c8"]]);const zb={key:0},Kb={key:1},Gb={key:1},Yb=Ut({props:{boardId:null},setup(t){const{boardId:e}=t,n=wb(e);return li("boardId",e),li("board",n),(s,i)=>(te(),Ee(de,null,[Fe(n).loading?Ys("",!0):(te(),Ee("main",zb,[Fe(n).exists?(te(),Mt(Hb,{key:0})):Ys("",!0),Fe(n).exists?Ys("",!0):(te(),Ee("div",Kb,"Couldn't find board"))])),Fe(n).loading?(te(),Ee("main",Gb,[Ye(qb)])):Ys("",!0)],64))}});var Qb=Bt(Yb,[["__scopeId","data-v-b2bd279e"]]);const Jb={class:"columns"},Xb=Ut({props:{board:null,isTemplate:{type:Boolean}},setup(t){return(e,n)=>(te(),Ee("div",{class:jn(["board",{template:t.isTemplate}])},[ce("h3",null,On(t.board.title||"Untitled Retro"),1),ce("div",Jb,[(te(!0),Ee(de,null,bs(t.board.columns,s=>(te(),Ee("div",{class:"column",style:xi({backgroundColor:s.color})},On(s.title),5))),256))])],2))}});var Ec=Bt(Xb,[["__scopeId","data-v-3db063ea"]]);const Zb=[{title:"Mad Sad Glad",columns:[{title:"Mad",color:"#f44336"},{title:"Sad",color:"#e91e63"},{title:"Glad",color:"#9c27b0"}]},{title:"Start Stop Continue",columns:[{title:"Start",color:"#2196f3"},{title:"Stop",color:"#ff9800"},{title:"Continue",color:"#009688"}]},{title:"Sailboat",columns:[{title:"What is the wind pushing our sails that make us go fast",color:"#f44336"},{title:"What anchors are holding us back",color:"#e91e63"},{title:"What rocks are ahead of us that risk our future",color:"#9c27b0"},{title:"What is our ideal island destination",color:"#673ab7"}]}];const Rd=t=>(Df("data-v-35590a66"),t=t(),Lf(),t),eC={class:"container"},tC=Rd(()=>ce("h2",null,"start a new board",-1)),nC=Rd(()=>ce("h2",null,"your boards",-1)),sC=Ut({props:{navigateToBoard:null},setup(t){const{navigateToBoard:e}=t,n=Ib(),s=dt("user"),i=Eu(()=>Object.fromEntries(Object.entries(n).filter(([o,a])=>a.author===(s==null?void 0:s.uid))));async function r(o){if(!(s!=null&&s.uid))return;const a=await kb(s.uid,o);a&&e(a)}return(o,a)=>(te(),Ee("div",eC,[ce("main",null,[ce("h1",null,"\u{1F680} quick retro "+On("")+"\u{1F680}",1),tC,ce("section",null,[(te(!0),Ee(de,null,bs(Fe(Zb),l=>(te(),Mt(Ec,{onClick:c=>r(l),board:l,"is-template":!0},null,8,["onClick","board"]))),256))]),nC,ce("section",null,[(te(!0),Ee(de,null,bs(Fe(i),(l,c)=>(te(),Mt(Ec,{onClick:u=>t.navigateToBoard(c),board:l,"is-template":!1},null,8,["onClick","board"]))),256))])])]))}});var iC=Bt(sC,[["__scopeId","data-v-35590a66"]]);const rC=Ut({setup(t){const e=jc(window.location.hash.slice(1));function n(i){console.log("navigating to board",i),history.pushState({},"",`#${i}`),e.value=i}addEventListener("popstate",()=>{console.log(window.location.hash.slice(1)),e.value=window.location.hash.slice(1)});const s=Ab();return li("user",s),(i,r)=>e.value&&e.value.length>0?(te(),Mt(Qb,{key:0,boardId:e.value},null,8,["boardId"])):(te(),Mt(iC,{key:1,"navigate-to-board":n}))}});o_(rC).mount("#app");
