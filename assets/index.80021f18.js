const dd=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}};dd();function Kr(t,e){const n=Object.create(null),i=t.split(",");for(let s=0;s<i.length;s++)n[i[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const fd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",pd=Kr(fd);function tc(t){return!!t||t===""}function Gr(t){if(M(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=he(i)?md(i):Gr(i);if(s)for(const r in s)e[r]=s[r]}return e}else{if(he(t))return t;if(de(t))return t}}const _d=/;(?![^(]*\))/g,gd=/:(.+)/;function md(t){const e={};return t.split(_d).forEach(n=>{if(n){const i=n.split(gd);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Yr(t){let e="";if(he(t))e=t;else if(M(t))for(let n=0;n<t.length;n++){const i=Yr(t[n]);i&&(e+=i+" ")}else if(de(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const nc=t=>he(t)?t:t==null?"":M(t)||de(t)&&(t.toString===oc||!D(t.toString))?JSON.stringify(t,ic,2):String(t),ic=(t,e)=>e&&e.__v_isRef?ic(t,e.value):gn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s])=>(n[`${i} =>`]=s,n),{})}:sc(e)?{[`Set(${e.size})`]:[...e.values()]}:de(e)&&!M(e)&&!ac(e)?String(e):e,K={},_n=[],$e=()=>{},yd=()=>!1,vd=/^on[^a-z]/,ms=t=>vd.test(t),Qr=t=>t.startsWith("onUpdate:"),ye=Object.assign,Jr=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Ed=Object.prototype.hasOwnProperty,B=(t,e)=>Ed.call(t,e),M=Array.isArray,gn=t=>ys(t)==="[object Map]",sc=t=>ys(t)==="[object Set]",D=t=>typeof t=="function",he=t=>typeof t=="string",Xr=t=>typeof t=="symbol",de=t=>t!==null&&typeof t=="object",rc=t=>de(t)&&D(t.then)&&D(t.catch),oc=Object.prototype.toString,ys=t=>oc.call(t),Cd=t=>ys(t).slice(8,-1),ac=t=>ys(t)==="[object Object]",Zr=t=>he(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Li=Kr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),vs=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Id=/-(\w)/g,bn=vs(t=>t.replace(Id,(e,n)=>n?n.toUpperCase():"")),bd=/\B([A-Z])/g,Pn=vs(t=>t.replace(bd,"-$1").toLowerCase()),lc=vs(t=>t.charAt(0).toUpperCase()+t.slice(1)),qs=vs(t=>t?`on${lc(t)}`:""),ji=(t,e)=>!Object.is(t,e),Fi=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},qi=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},cr=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Ia;const wd=()=>Ia||(Ia=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Ke;class Td{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Ke&&(this.parent=Ke,this.index=(Ke.scopes||(Ke.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Ke;try{return Ke=this,e()}finally{Ke=n}}}on(){Ke=this}off(){Ke=this.parent}stop(e){if(this.active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.active=!1}}}function Sd(t,e=Ke){e&&e.active&&e.effects.push(t)}const eo=t=>{const e=new Set(t);return e.w=0,e.n=0,e},cc=t=>(t.w&Nt)>0,uc=t=>(t.n&Nt)>0,Rd=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Nt},Nd=t=>{const{deps:e}=t;if(e.length){let n=0;for(let i=0;i<e.length;i++){const s=e[i];cc(s)&&!uc(s)?s.delete(t):e[n++]=s,s.w&=~Nt,s.n&=~Nt}e.length=n}},ur=new WeakMap;let Kn=0,Nt=1;const hr=30;let Ue;const Vt=Symbol(""),dr=Symbol("");class to{constructor(e,n=null,i){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Sd(this,i)}run(){if(!this.active)return this.fn();let e=Ue,n=bt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ue,Ue=this,bt=!0,Nt=1<<++Kn,Kn<=hr?Rd(this):ba(this),this.fn()}finally{Kn<=hr&&Nd(this),Nt=1<<--Kn,Ue=this.parent,bt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ue===this?this.deferStop=!0:this.active&&(ba(this),this.onStop&&this.onStop(),this.active=!1)}}function ba(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let bt=!0;const hc=[];function xn(){hc.push(bt),bt=!1}function On(){const t=hc.pop();bt=t===void 0?!0:t}function xe(t,e,n){if(bt&&Ue){let i=ur.get(t);i||ur.set(t,i=new Map);let s=i.get(n);s||i.set(n,s=eo()),dc(s)}}function dc(t,e){let n=!1;Kn<=hr?uc(t)||(t.n|=Nt,n=!cc(t)):n=!t.has(Ue),n&&(t.add(Ue),Ue.deps.push(t))}function at(t,e,n,i,s,r){const o=ur.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&M(t))o.forEach((l,c)=>{(c==="length"||c>=i)&&a.push(l)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":M(t)?Zr(n)&&a.push(o.get("length")):(a.push(o.get(Vt)),gn(t)&&a.push(o.get(dr)));break;case"delete":M(t)||(a.push(o.get(Vt)),gn(t)&&a.push(o.get(dr)));break;case"set":gn(t)&&a.push(o.get(Vt));break}if(a.length===1)a[0]&&fr(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);fr(eo(l))}}function fr(t,e){for(const n of M(t)?t:[...t])(n!==Ue||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const Ad=Kr("__proto__,__v_isRef,__isVue"),fc=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(Xr)),kd=no(),Pd=no(!1,!0),xd=no(!0),wa=Od();function Od(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=j(this);for(let r=0,o=this.length;r<o;r++)xe(i,"get",r+"");const s=i[e](...n);return s===-1||s===!1?i[e](...n.map(j)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){xn();const i=j(this)[e].apply(this,n);return On(),i}}),t}function no(t=!1,e=!1){return function(i,s,r){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&r===(t?e?Yd:yc:e?mc:gc).get(i))return i;const o=M(i);if(!t&&o&&B(wa,s))return Reflect.get(wa,s,r);const a=Reflect.get(i,s,r);return(Xr(s)?fc.has(s):Ad(s))||(t||xe(i,"get",s),e)?a:me(a)?!o||!Zr(s)?a.value:a:de(a)?t?vc(a):Mn(a):a}}const Md=pc(),Dd=pc(!0);function pc(t=!1){return function(n,i,s,r){let o=n[i];if(si(o)&&me(o)&&!me(s))return!1;if(!t&&!si(s)&&(Ec(s)||(s=j(s),o=j(o)),!M(n)&&me(o)&&!me(s)))return o.value=s,!0;const a=M(n)&&Zr(i)?Number(i)<n.length:B(n,i),l=Reflect.set(n,i,s,r);return n===j(r)&&(a?ji(s,o)&&at(n,"set",i,s):at(n,"add",i,s)),l}}function Ld(t,e){const n=B(t,e);t[e];const i=Reflect.deleteProperty(t,e);return i&&n&&at(t,"delete",e,void 0),i}function Fd(t,e){const n=Reflect.has(t,e);return(!Xr(e)||!fc.has(e))&&xe(t,"has",e),n}function Ud(t){return xe(t,"iterate",M(t)?"length":Vt),Reflect.ownKeys(t)}const _c={get:kd,set:Md,deleteProperty:Ld,has:Fd,ownKeys:Ud},Wd={get:xd,set(t,e){return!0},deleteProperty(t,e){return!0}},Bd=ye({},_c,{get:Pd,set:Dd}),io=t=>t,Es=t=>Reflect.getPrototypeOf(t);function Ai(t,e,n=!1,i=!1){t=t.__v_raw;const s=j(t),r=j(e);e!==r&&!n&&xe(s,"get",e),!n&&xe(s,"get",r);const{has:o}=Es(s),a=i?io:n?ao:oo;if(o.call(s,e))return a(t.get(e));if(o.call(s,r))return a(t.get(r));t!==s&&t.get(e)}function ki(t,e=!1){const n=this.__v_raw,i=j(n),s=j(t);return t!==s&&!e&&xe(i,"has",t),!e&&xe(i,"has",s),t===s?n.has(t):n.has(t)||n.has(s)}function Pi(t,e=!1){return t=t.__v_raw,!e&&xe(j(t),"iterate",Vt),Reflect.get(t,"size",t)}function Ta(t){t=j(t);const e=j(this);return Es(e).has.call(e,t)||(e.add(t),at(e,"add",t,t)),this}function Sa(t,e){e=j(e);const n=j(this),{has:i,get:s}=Es(n);let r=i.call(n,t);r||(t=j(t),r=i.call(n,t));const o=s.call(n,t);return n.set(t,e),r?ji(e,o)&&at(n,"set",t,e):at(n,"add",t,e),this}function Ra(t){const e=j(this),{has:n,get:i}=Es(e);let s=n.call(e,t);s||(t=j(t),s=n.call(e,t)),i&&i.call(e,t);const r=e.delete(t);return s&&at(e,"delete",t,void 0),r}function Na(){const t=j(this),e=t.size!==0,n=t.clear();return e&&at(t,"clear",void 0,void 0),n}function xi(t,e){return function(i,s){const r=this,o=r.__v_raw,a=j(o),l=e?io:t?ao:oo;return!t&&xe(a,"iterate",Vt),o.forEach((c,u)=>i.call(s,l(c),l(u),r))}}function Oi(t,e,n){return function(...i){const s=this.__v_raw,r=j(s),o=gn(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...i),u=n?io:e?ao:oo;return!e&&xe(r,"iterate",l?dr:Vt),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function _t(t){return function(...e){return t==="delete"?!1:this}}function Hd(){const t={get(r){return Ai(this,r)},get size(){return Pi(this)},has:ki,add:Ta,set:Sa,delete:Ra,clear:Na,forEach:xi(!1,!1)},e={get(r){return Ai(this,r,!1,!0)},get size(){return Pi(this)},has:ki,add:Ta,set:Sa,delete:Ra,clear:Na,forEach:xi(!1,!0)},n={get(r){return Ai(this,r,!0)},get size(){return Pi(this,!0)},has(r){return ki.call(this,r,!0)},add:_t("add"),set:_t("set"),delete:_t("delete"),clear:_t("clear"),forEach:xi(!0,!1)},i={get(r){return Ai(this,r,!0,!0)},get size(){return Pi(this,!0)},has(r){return ki.call(this,r,!0)},add:_t("add"),set:_t("set"),delete:_t("delete"),clear:_t("clear"),forEach:xi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Oi(r,!1,!1),n[r]=Oi(r,!0,!1),e[r]=Oi(r,!1,!0),i[r]=Oi(r,!0,!0)}),[t,n,e,i]}const[Vd,$d,jd,qd]=Hd();function so(t,e){const n=e?t?qd:jd:t?$d:Vd;return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(B(n,s)&&s in i?n:i,s,r)}const zd={get:so(!1,!1)},Kd={get:so(!1,!0)},Gd={get:so(!0,!1)},gc=new WeakMap,mc=new WeakMap,yc=new WeakMap,Yd=new WeakMap;function Qd(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Jd(t){return t.__v_skip||!Object.isExtensible(t)?0:Qd(Cd(t))}function Mn(t){return si(t)?t:ro(t,!1,_c,zd,gc)}function Xd(t){return ro(t,!1,Bd,Kd,mc)}function vc(t){return ro(t,!0,Wd,Gd,yc)}function ro(t,e,n,i,s){if(!de(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=s.get(t);if(r)return r;const o=Jd(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return s.set(t,a),a}function mn(t){return si(t)?mn(t.__v_raw):!!(t&&t.__v_isReactive)}function si(t){return!!(t&&t.__v_isReadonly)}function Ec(t){return!!(t&&t.__v_isShallow)}function Cc(t){return mn(t)||si(t)}function j(t){const e=t&&t.__v_raw;return e?j(e):t}function Ic(t){return qi(t,"__v_skip",!0),t}const oo=t=>de(t)?Mn(t):t,ao=t=>de(t)?vc(t):t;function Zd(t){bt&&Ue&&(t=j(t),dc(t.dep||(t.dep=eo())))}function ef(t,e){t=j(t),t.dep&&fr(t.dep)}function me(t){return!!(t&&t.__v_isRef===!0)}function zi(t){return me(t)?t.value:t}const tf={get:(t,e,n)=>zi(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return me(s)&&!me(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function bc(t){return mn(t)?t:new Proxy(t,tf)}class nf{constructor(e,n,i,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new to(e,()=>{this._dirty||(this._dirty=!0,ef(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const e=j(this);return Zd(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function sf(t,e,n=!1){let i,s;const r=D(t);return r?(i=t,s=$e):(i=t.get,s=t.set),new nf(i,s,r||!s,n)}function wt(t,e,n,i){let s;try{s=i?t(...i):t()}catch(r){Cs(r,e,n)}return s}function Me(t,e,n,i){if(D(t)){const r=wt(t,e,n,i);return r&&rc(r)&&r.catch(o=>{Cs(o,e,n)}),r}const s=[];for(let r=0;r<t.length;r++)s.push(Me(t[r],e,n,i));return s}function Cs(t,e,n,i=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){wt(l,null,10,[t,o,a]);return}}rf(t,n,s,i)}function rf(t,e,n,i=!0){console.error(t)}let Ki=!1,pr=!1;const Pe=[];let et=0;const Qn=[];let Gn=null,un=0;const Jn=[];let mt=null,hn=0;const wc=Promise.resolve();let lo=null,_r=null;function of(t){const e=lo||wc;return t?e.then(this?t.bind(this):t):e}function af(t){let e=et+1,n=Pe.length;for(;e<n;){const i=e+n>>>1;ri(Pe[i])<t?e=i+1:n=i}return e}function Tc(t){(!Pe.length||!Pe.includes(t,Ki&&t.allowRecurse?et+1:et))&&t!==_r&&(t.id==null?Pe.push(t):Pe.splice(af(t.id),0,t),Sc())}function Sc(){!Ki&&!pr&&(pr=!0,lo=wc.then(Ac))}function lf(t){const e=Pe.indexOf(t);e>et&&Pe.splice(e,1)}function Rc(t,e,n,i){M(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?i+1:i))&&n.push(t),Sc()}function cf(t){Rc(t,Gn,Qn,un)}function uf(t){Rc(t,mt,Jn,hn)}function co(t,e=null){if(Qn.length){for(_r=e,Gn=[...new Set(Qn)],Qn.length=0,un=0;un<Gn.length;un++)Gn[un]();Gn=null,un=0,_r=null,co(t,e)}}function Nc(t){if(Jn.length){const e=[...new Set(Jn)];if(Jn.length=0,mt){mt.push(...e);return}for(mt=e,mt.sort((n,i)=>ri(n)-ri(i)),hn=0;hn<mt.length;hn++)mt[hn]();mt=null,hn=0}}const ri=t=>t.id==null?1/0:t.id;function Ac(t){pr=!1,Ki=!0,co(t),Pe.sort((n,i)=>ri(n)-ri(i));const e=$e;try{for(et=0;et<Pe.length;et++){const n=Pe[et];n&&n.active!==!1&&wt(n,null,14)}}finally{et=0,Pe.length=0,Nc(),Ki=!1,lo=null,(Pe.length||Qn.length||Jn.length)&&Ac(t)}}function hf(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||K;let s=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=i[u]||K;f?s=n.map(g=>g.trim()):h&&(s=n.map(cr))}let a,l=i[a=qs(e)]||i[a=qs(bn(e))];!l&&r&&(l=i[a=qs(Pn(e))]),l&&Me(l,t,6,s);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Me(c,t,6,s)}}function kc(t,e,n=!1){const i=e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},a=!1;if(!D(t)){const l=c=>{const u=kc(c,e,!0);u&&(a=!0,ye(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(i.set(t,null),null):(M(r)?r.forEach(l=>o[l]=null):ye(o,r),i.set(t,o),o)}function Is(t,e){return!t||!ms(e)?!1:(e=e.slice(2).replace(/Once$/,""),B(t,e[0].toLowerCase()+e.slice(1))||B(t,Pn(e))||B(t,e))}let Be=null,Pc=null;function Gi(t){const e=Be;return Be=t,Pc=t&&t.type.__scopeId||null,e}function df(t,e=Be,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&Ua(-1);const r=Gi(e),o=t(...s);return Gi(r),i._d&&Ua(1),o};return i._n=!0,i._c=!0,i._d=!0,i}function zs(t){const{type:e,vnode:n,proxy:i,withProxy:s,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:g,ctx:C,inheritAttrs:S}=t;let N,U;const re=Gi(t);try{if(n.shapeFlag&4){const J=s||i;N=Ge(u.call(J,J,h,r,g,f,C)),U=l}else{const J=e;N=Ge(J.length>1?J(r,{attrs:l,slots:a,emit:c}):J(r,null)),U=e.props?l:ff(l)}}catch(J){Xn.length=0,Cs(J,t,1),N=Tt(rt)}let Q=N;if(U&&S!==!1){const J=Object.keys(U),{shapeFlag:_e}=Q;J.length&&_e&7&&(o&&J.some(Qr)&&(U=pf(U,o)),Q=Gt(Q,U))}return n.dirs&&(Q.dirs=Q.dirs?Q.dirs.concat(n.dirs):n.dirs),n.transition&&(Q.transition=n.transition),N=Q,Gi(re),N}const ff=t=>{let e;for(const n in t)(n==="class"||n==="style"||ms(n))&&((e||(e={}))[n]=t[n]);return e},pf=(t,e)=>{const n={};for(const i in t)(!Qr(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function _f(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Aa(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==i[f]&&!Is(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Aa(i,o,c):!0:!!o;return!1}function Aa(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==t[r]&&!Is(n,r))return!0}return!1}function gf({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const mf=t=>t.__isSuspense;function yf(t,e){e&&e.pendingBranch?M(t)?e.effects.push(...t):e.effects.push(t):uf(t)}function xc(t,e){if(pe){let n=pe.provides;const i=pe.parent&&pe.parent.provides;i===n&&(n=pe.provides=Object.create(i)),n[t]=e}}function Ui(t,e,n=!1){const i=pe||Be;if(i){const s=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&D(e)?e.call(i.proxy):e}}function vf(t,e){return uo(t,null,{flush:"post"})}const ka={};function Ks(t,e,n){return uo(t,e,n)}function uo(t,e,{immediate:n,deep:i,flush:s,onTrack:r,onTrigger:o}=K){const a=pe;let l,c=!1,u=!1;if(me(t)?(l=()=>t.value,c=Ec(t)):mn(t)?(l=()=>t,i=!0):M(t)?(u=!0,c=t.some(mn),l=()=>t.map(U=>{if(me(U))return U.value;if(mn(U))return Wt(U);if(D(U))return wt(U,a,2)})):D(t)?e?l=()=>wt(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),Me(t,a,3,[f])}:l=$e,e&&i){const U=l;l=()=>Wt(U())}let h,f=U=>{h=N.onStop=()=>{wt(U,a,4)}};if(ai)return f=$e,e?n&&Me(e,a,3,[l(),u?[]:void 0,f]):l(),$e;let g=u?[]:ka;const C=()=>{if(!!N.active)if(e){const U=N.run();(i||c||(u?U.some((re,Q)=>ji(re,g[Q])):ji(U,g)))&&(h&&h(),Me(e,a,3,[U,g===ka?void 0:g,f]),g=U)}else N.run()};C.allowRecurse=!!e;let S;s==="sync"?S=C:s==="post"?S=()=>Ie(C,a&&a.suspense):S=()=>{!a||a.isMounted?cf(C):C()};const N=new to(l,S);return e?n?C():g=N.run():s==="post"?Ie(N.run.bind(N),a&&a.suspense):N.run(),()=>{N.stop(),a&&a.scope&&Jr(a.scope.effects,N)}}function Ef(t,e,n){const i=this.proxy,s=he(t)?t.includes(".")?Oc(i,t):()=>i[t]:t.bind(i,i);let r;D(e)?r=e:(r=e.handler,n=e);const o=pe;wn(this);const a=uo(s,r.bind(i),n);return o?wn(o):qt(),a}function Oc(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}function Wt(t,e){if(!de(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),me(t))Wt(t.value,e);else if(M(t))for(let n=0;n<t.length;n++)Wt(t[n],e);else if(sc(t)||gn(t))t.forEach(n=>{Wt(n,e)});else if(ac(t))for(const n in t)Wt(t[n],e);return t}function Cf(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return fo(()=>{t.isMounted=!0}),Fc(()=>{t.isUnmounting=!0}),t}const Oe=[Function,Array],If={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Oe,onEnter:Oe,onAfterEnter:Oe,onEnterCancelled:Oe,onBeforeLeave:Oe,onLeave:Oe,onAfterLeave:Oe,onLeaveCancelled:Oe,onBeforeAppear:Oe,onAppear:Oe,onAfterAppear:Oe,onAppearCancelled:Oe},setup(t,{slots:e}){const n=Xc(),i=Cf();let s;return()=>{const r=e.default&&Dc(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const S of r)if(S.type!==rt){o=S;break}}const a=j(t),{mode:l}=a;if(i.isLeaving)return Gs(o);const c=Pa(o);if(!c)return Gs(o);const u=gr(c,a,i,n);mr(c,u);const h=n.subTree,f=h&&Pa(h);let g=!1;const{getTransitionKey:C}=c.type;if(C){const S=C();s===void 0?s=S:S!==s&&(s=S,g=!0)}if(f&&f.type!==rt&&(!Ft(c,f)||g)){const S=gr(f,a,i,n);if(mr(f,S),l==="out-in")return i.isLeaving=!0,S.afterLeave=()=>{i.isLeaving=!1,n.update()},Gs(o);l==="in-out"&&c.type!==rt&&(S.delayLeave=(N,U,re)=>{const Q=Mc(i,f);Q[String(f.key)]=f,N._leaveCb=()=>{U(),N._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=re})}return o}}},bf=If;function Mc(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function gr(t,e,n,i){const{appear:s,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:g,onLeaveCancelled:C,onBeforeAppear:S,onAppear:N,onAfterAppear:U,onAppearCancelled:re}=e,Q=String(t.key),J=Mc(n,t),_e=($,oe)=>{$&&Me($,i,9,oe)},De={mode:r,persisted:o,beforeEnter($){let oe=a;if(!n.isMounted)if(s)oe=S||a;else return;$._leaveCb&&$._leaveCb(!0);const ne=J[Q];ne&&Ft(t,ne)&&ne.el._leaveCb&&ne.el._leaveCb(),_e(oe,[$])},enter($){let oe=l,ne=c,Ne=u;if(!n.isMounted)if(s)oe=N||l,ne=U||c,Ne=re||u;else return;let Ae=!1;const Le=$._enterCb=rn=>{Ae||(Ae=!0,rn?_e(Ne,[$]):_e(ne,[$]),De.delayedLeave&&De.delayedLeave(),$._enterCb=void 0)};oe?(oe($,Le),oe.length<=1&&Le()):Le()},leave($,oe){const ne=String(t.key);if($._enterCb&&$._enterCb(!0),n.isUnmounting)return oe();_e(h,[$]);let Ne=!1;const Ae=$._leaveCb=Le=>{Ne||(Ne=!0,oe(),Le?_e(C,[$]):_e(g,[$]),$._leaveCb=void 0,J[ne]===t&&delete J[ne])};J[ne]=t,f?(f($,Ae),f.length<=1&&Ae()):Ae()},clone($){return gr($,e,n,i)}};return De}function Gs(t){if(bs(t))return t=Gt(t),t.children=null,t}function Pa(t){return bs(t)?t.children?t.children[0]:void 0:t}function mr(t,e){t.shapeFlag&6&&t.component?mr(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Dc(t,e=!1,n){let i=[],s=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===be?(o.patchFlag&128&&s++,i=i.concat(Dc(o.children,e,a))):(e||o.type!==rt)&&i.push(a!=null?Gt(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function ho(t){return D(t)?{setup:t,name:t.name}:t}const yr=t=>!!t.type.__asyncLoader,bs=t=>t.type.__isKeepAlive;function wf(t,e){Lc(t,"a",e)}function Tf(t,e){Lc(t,"da",e)}function Lc(t,e,n=pe){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ws(e,i,n),n){let s=n.parent;for(;s&&s.parent;)bs(s.parent.vnode)&&Sf(i,e,n,s),s=s.parent}}function Sf(t,e,n,i){const s=ws(e,t,i,!0);po(()=>{Jr(i[e],s)},n)}function ws(t,e,n=pe,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;xn(),wn(n);const a=Me(e,n,t,o);return qt(),On(),a});return i?s.unshift(r):s.push(r),r}}const ht=t=>(e,n=pe)=>(!ai||t==="sp")&&ws(t,e,n),Rf=ht("bm"),fo=ht("m"),Nf=ht("bu"),Af=ht("u"),Fc=ht("bum"),po=ht("um"),kf=ht("sp"),Pf=ht("rtg"),xf=ht("rtc");function Of(t,e=pe){ws("ec",t,e)}let vr=!0;function Mf(t){const e=Wc(t),n=t.proxy,i=t.ctx;vr=!1,e.beforeCreate&&xa(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:g,updated:C,activated:S,deactivated:N,beforeDestroy:U,beforeUnmount:re,destroyed:Q,unmounted:J,render:_e,renderTracked:De,renderTriggered:$,errorCaptured:oe,serverPrefetch:ne,expose:Ne,inheritAttrs:Ae,components:Le,directives:rn,filters:ga}=e;if(c&&Df(c,i,null,t.appContext.config.unwrapInjectedRef),o)for(const ie in o){const X=o[ie];D(X)&&(i[ie]=X.bind(n))}if(s){const ie=s.call(n,n);de(ie)&&(t.data=Mn(ie))}if(vr=!0,r)for(const ie in r){const X=r[ie],Xe=D(X)?X.bind(n,n):D(X.get)?X.get.bind(n,n):$e,Vs=!D(X)&&D(X.set)?X.set.bind(n):$e,Hn=dp({get:Xe,set:Vs});Object.defineProperty(i,ie,{enumerable:!0,configurable:!0,get:()=>Hn.value,set:on=>Hn.value=on})}if(a)for(const ie in a)Uc(a[ie],i,n,ie);if(l){const ie=D(l)?l.call(n):l;Reflect.ownKeys(ie).forEach(X=>{xc(X,ie[X])})}u&&xa(u,t,"c");function Ce(ie,X){M(X)?X.forEach(Xe=>ie(Xe.bind(n))):X&&ie(X.bind(n))}if(Ce(Rf,h),Ce(fo,f),Ce(Nf,g),Ce(Af,C),Ce(wf,S),Ce(Tf,N),Ce(Of,oe),Ce(xf,De),Ce(Pf,$),Ce(Fc,re),Ce(po,J),Ce(kf,ne),M(Ne))if(Ne.length){const ie=t.exposed||(t.exposed={});Ne.forEach(X=>{Object.defineProperty(ie,X,{get:()=>n[X],set:Xe=>n[X]=Xe})})}else t.exposed||(t.exposed={});_e&&t.render===$e&&(t.render=_e),Ae!=null&&(t.inheritAttrs=Ae),Le&&(t.components=Le),rn&&(t.directives=rn)}function Df(t,e,n=$e,i=!1){M(t)&&(t=Er(t));for(const s in t){const r=t[s];let o;de(r)?"default"in r?o=Ui(r.from||s,r.default,!0):o=Ui(r.from||s):o=Ui(r),me(o)&&i?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function xa(t,e,n){Me(M(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function Uc(t,e,n,i){const s=i.includes(".")?Oc(n,i):()=>n[i];if(he(t)){const r=e[t];D(r)&&Ks(s,r)}else if(D(t))Ks(s,t.bind(n));else if(de(t))if(M(t))t.forEach(r=>Uc(r,e,n,i));else{const r=D(t.handler)?t.handler.bind(n):e[t.handler];D(r)&&Ks(s,r,t)}}function Wc(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!n&&!i?l=e:(l={},s.length&&s.forEach(c=>Yi(l,c,o,!0)),Yi(l,e,o)),r.set(e,l),l}function Yi(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&Yi(t,r,n,!0),s&&s.forEach(o=>Yi(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=Lf[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Lf={data:Oa,props:Mt,emits:Mt,methods:Mt,computed:Mt,beforeCreate:Ee,created:Ee,beforeMount:Ee,mounted:Ee,beforeUpdate:Ee,updated:Ee,beforeDestroy:Ee,beforeUnmount:Ee,destroyed:Ee,unmounted:Ee,activated:Ee,deactivated:Ee,errorCaptured:Ee,serverPrefetch:Ee,components:Mt,directives:Mt,watch:Uf,provide:Oa,inject:Ff};function Oa(t,e){return e?t?function(){return ye(D(t)?t.call(this,this):t,D(e)?e.call(this,this):e)}:e:t}function Ff(t,e){return Mt(Er(t),Er(e))}function Er(t){if(M(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ee(t,e){return t?[...new Set([].concat(t,e))]:e}function Mt(t,e){return t?ye(ye(Object.create(null),t),e):e}function Uf(t,e){if(!t)return e;if(!e)return t;const n=ye(Object.create(null),t);for(const i in e)n[i]=Ee(t[i],e[i]);return n}function Wf(t,e,n,i=!1){const s={},r={};qi(r,Ts,1),t.propsDefaults=Object.create(null),Bc(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:Xd(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function Bf(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,a=j(s),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Is(t.emitsOptions,f))continue;const g=e[f];if(l)if(B(r,f))g!==r[f]&&(r[f]=g,c=!0);else{const C=bn(f);s[C]=Cr(l,a,C,g,t,!1)}else g!==r[f]&&(r[f]=g,c=!0)}}}else{Bc(t,e,s,r)&&(c=!0);let u;for(const h in a)(!e||!B(e,h)&&((u=Pn(h))===h||!B(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=Cr(l,a,h,void 0,t,!0)):delete s[h]);if(r!==a)for(const h in r)(!e||!B(e,h)&&!0)&&(delete r[h],c=!0)}c&&at(t,"set","$attrs")}function Bc(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Li(l))continue;const c=e[l];let u;s&&B(s,u=bn(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:Is(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=j(n),c=a||K;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Cr(s,l,h,c[h],t,!B(c,h))}}return o}function Cr(t,e,n,i,s,r){const o=t[n];if(o!=null){const a=B(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&D(l)){const{propsDefaults:c}=s;n in c?i=c[n]:(wn(s),i=c[n]=l.call(null,e),qt())}else i=l}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Pn(n))&&(i=!0))}return i}function Hc(t,e,n=!1){const i=e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},a=[];let l=!1;if(!D(t)){const u=h=>{l=!0;const[f,g]=Hc(h,e,!0);ye(o,f),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return i.set(t,_n),_n;if(M(r))for(let u=0;u<r.length;u++){const h=bn(r[u]);Ma(h)&&(o[h]=K)}else if(r)for(const u in r){const h=bn(u);if(Ma(h)){const f=r[u],g=o[h]=M(f)||D(f)?{type:f}:f;if(g){const C=Fa(Boolean,g.type),S=Fa(String,g.type);g[0]=C>-1,g[1]=S<0||C<S,(C>-1||B(g,"default"))&&a.push(h)}}}const c=[o,a];return i.set(t,c),c}function Ma(t){return t[0]!=="$"}function Da(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function La(t,e){return Da(t)===Da(e)}function Fa(t,e){return M(e)?e.findIndex(n=>La(n,t)):D(e)&&La(e,t)?0:-1}const Vc=t=>t[0]==="_"||t==="$stable",_o=t=>M(t)?t.map(Ge):[Ge(t)],Hf=(t,e,n)=>{const i=df((...s)=>_o(e(...s)),n);return i._c=!1,i},$c=(t,e,n)=>{const i=t._ctx;for(const s in t){if(Vc(s))continue;const r=t[s];if(D(r))e[s]=Hf(s,r,i);else if(r!=null){const o=_o(r);e[s]=()=>o}}},jc=(t,e)=>{const n=_o(e);t.slots.default=()=>n},Vf=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=j(e),qi(e,"_",n)):$c(e,t.slots={})}else t.slots={},e&&jc(t,e);qi(t.slots,Ts,1)},$f=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=K;if(i.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(ye(s,e),!n&&a===1&&delete s._):(r=!e.$stable,$c(e,s)),o=e}else e&&(jc(t,e),o={default:1});if(r)for(const a in s)!Vc(a)&&!(a in o)&&delete s[a]};function jf(t,e){const n=Be;if(n===null)return t;const i=Ss(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,c=K]=e[r];D(o)&&(o={mounted:o,updated:o}),o.deep&&Wt(a),s.push({dir:o,instance:i,value:a,oldValue:void 0,arg:l,modifiers:c})}return t}function xt(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(xn(),Me(l,n,8,[t.el,a,t,e]),On())}}function qc(){return{app:null,config:{isNativeTag:yd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let qf=0;function zf(t,e){return function(i,s=null){D(i)||(i=Object.assign({},i)),s!=null&&!de(s)&&(s=null);const r=qc(),o=new Set;let a=!1;const l=r.app={_uid:qf++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:fp,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&D(c.install)?(o.add(c),c.install(l,...u)):D(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const f=Tt(i,s);return f.appContext=r,u&&e?e(f,c):t(f,c,h),a=!0,l._container=c,c.__vue_app__=l,Ss(f.component)||f.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l}};return l}}function Ir(t,e,n,i,s=!1){if(M(t)){t.forEach((f,g)=>Ir(f,e&&(M(e)?e[g]:e),n,i,s));return}if(yr(i)&&!s)return;const r=i.shapeFlag&4?Ss(i.component)||i.component.proxy:i.el,o=s?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===K?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(he(c)?(u[c]=null,B(h,c)&&(h[c]=null)):me(c)&&(c.value=null)),D(l))wt(l,a,12,[o,u]);else{const f=he(l),g=me(l);if(f||g){const C=()=>{if(t.f){const S=f?u[l]:l.value;s?M(S)&&Jr(S,r):M(S)?S.includes(r)||S.push(r):f?(u[l]=[r],B(h,l)&&(h[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else f?(u[l]=o,B(h,l)&&(h[l]=o)):me(l)&&(l.value=o,t.k&&(u[t.k]=o))};o?(C.id=-1,Ie(C,n)):C()}}}const Ie=yf;function Kf(t){return Gf(t)}function Gf(t,e){const n=wd();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:g=$e,cloneNode:C,insertStaticContent:S}=t,N=(d,p,_,y=null,m=null,b=null,T=!1,I=null,w=!!p.dynamicChildren)=>{if(d===p)return;d&&!Ft(d,p)&&(y=Ni(d),pt(d,m,b,!0),d=null),p.patchFlag===-2&&(w=!1,p.dynamicChildren=null);const{type:v,ref:A,shapeFlag:R}=p;switch(v){case go:U(d,p,_,y);break;case rt:re(d,p,_,y);break;case Wi:d==null&&Q(p,_,y,T);break;case be:rn(d,p,_,y,m,b,T,I,w);break;default:R&1?De(d,p,_,y,m,b,T,I,w):R&6?ga(d,p,_,y,m,b,T,I,w):(R&64||R&128)&&v.process(d,p,_,y,m,b,T,I,w,an)}A!=null&&m&&Ir(A,d&&d.ref,b,p||d,!p)},U=(d,p,_,y)=>{if(d==null)i(p.el=a(p.children),_,y);else{const m=p.el=d.el;p.children!==d.children&&c(m,p.children)}},re=(d,p,_,y)=>{d==null?i(p.el=l(p.children||""),_,y):p.el=d.el},Q=(d,p,_,y)=>{[d.el,d.anchor]=S(d.children,p,_,y,d.el,d.anchor)},J=({el:d,anchor:p},_,y)=>{let m;for(;d&&d!==p;)m=f(d),i(d,_,y),d=m;i(p,_,y)},_e=({el:d,anchor:p})=>{let _;for(;d&&d!==p;)_=f(d),s(d),d=_;s(p)},De=(d,p,_,y,m,b,T,I,w)=>{T=T||p.type==="svg",d==null?$(p,_,y,m,b,T,I,w):Ne(d,p,m,b,T,I,w)},$=(d,p,_,y,m,b,T,I)=>{let w,v;const{type:A,props:R,shapeFlag:k,transition:x,patchFlag:H,dirs:te}=d;if(d.el&&C!==void 0&&H===-1)w=d.el=C(d.el);else{if(w=d.el=o(d.type,b,R&&R.is,R),k&8?u(w,d.children):k&16&&ne(d.children,w,null,y,m,b&&A!=="foreignObject",T,I),te&&xt(d,null,y,"created"),R){for(const Z in R)Z!=="value"&&!Li(Z)&&r(w,Z,null,R[Z],b,d.children,y,m,Ze);"value"in R&&r(w,"value",null,R.value),(v=R.onVnodeBeforeMount)&&ze(v,y,d)}oe(w,d,d.scopeId,T,y)}te&&xt(d,null,y,"beforeMount");const q=(!m||m&&!m.pendingBranch)&&x&&!x.persisted;q&&x.beforeEnter(w),i(w,p,_),((v=R&&R.onVnodeMounted)||q||te)&&Ie(()=>{v&&ze(v,y,d),q&&x.enter(w),te&&xt(d,null,y,"mounted")},m)},oe=(d,p,_,y,m)=>{if(_&&g(d,_),y)for(let b=0;b<y.length;b++)g(d,y[b]);if(m){let b=m.subTree;if(p===b){const T=m.vnode;oe(d,T,T.scopeId,T.slotScopeIds,m.parent)}}},ne=(d,p,_,y,m,b,T,I,w=0)=>{for(let v=w;v<d.length;v++){const A=d[v]=I?yt(d[v]):Ge(d[v]);N(null,A,p,_,y,m,b,T,I)}},Ne=(d,p,_,y,m,b,T)=>{const I=p.el=d.el;let{patchFlag:w,dynamicChildren:v,dirs:A}=p;w|=d.patchFlag&16;const R=d.props||K,k=p.props||K;let x;_&&Ot(_,!1),(x=k.onVnodeBeforeUpdate)&&ze(x,_,p,d),A&&xt(p,d,_,"beforeUpdate"),_&&Ot(_,!0);const H=m&&p.type!=="foreignObject";if(v?Ae(d.dynamicChildren,v,I,_,y,H,b):T||Xe(d,p,I,null,_,y,H,b,!1),w>0){if(w&16)Le(I,p,R,k,_,y,m);else if(w&2&&R.class!==k.class&&r(I,"class",null,k.class,m),w&4&&r(I,"style",R.style,k.style,m),w&8){const te=p.dynamicProps;for(let q=0;q<te.length;q++){const Z=te[q],Fe=R[Z],ln=k[Z];(ln!==Fe||Z==="value")&&r(I,Z,Fe,ln,m,d.children,_,y,Ze)}}w&1&&d.children!==p.children&&u(I,p.children)}else!T&&v==null&&Le(I,p,R,k,_,y,m);((x=k.onVnodeUpdated)||A)&&Ie(()=>{x&&ze(x,_,p,d),A&&xt(p,d,_,"updated")},y)},Ae=(d,p,_,y,m,b,T)=>{for(let I=0;I<p.length;I++){const w=d[I],v=p[I],A=w.el&&(w.type===be||!Ft(w,v)||w.shapeFlag&70)?h(w.el):_;N(w,v,A,null,y,m,b,T,!0)}},Le=(d,p,_,y,m,b,T)=>{if(_!==y){for(const I in y){if(Li(I))continue;const w=y[I],v=_[I];w!==v&&I!=="value"&&r(d,I,v,w,T,p.children,m,b,Ze)}if(_!==K)for(const I in _)!Li(I)&&!(I in y)&&r(d,I,_[I],null,T,p.children,m,b,Ze);"value"in y&&r(d,"value",_.value,y.value)}},rn=(d,p,_,y,m,b,T,I,w)=>{const v=p.el=d?d.el:a(""),A=p.anchor=d?d.anchor:a("");let{patchFlag:R,dynamicChildren:k,slotScopeIds:x}=p;x&&(I=I?I.concat(x):x),d==null?(i(v,_,y),i(A,_,y),ne(p.children,_,A,m,b,T,I,w)):R>0&&R&64&&k&&d.dynamicChildren?(Ae(d.dynamicChildren,k,_,m,b,T,I),(p.key!=null||m&&p===m.subTree)&&zc(d,p,!0)):Xe(d,p,_,A,m,b,T,I,w)},ga=(d,p,_,y,m,b,T,I,w)=>{p.slotScopeIds=I,d==null?p.shapeFlag&512?m.ctx.activate(p,_,y,T,w):Hs(p,_,y,m,b,T,w):Ce(d,p,w)},Hs=(d,p,_,y,m,b,T)=>{const I=d.component=op(d,y,m);if(bs(d)&&(I.ctx.renderer=an),ap(I),I.asyncDep){if(m&&m.registerDep(I,ie),!d.el){const w=I.subTree=Tt(rt);re(null,w,p,_)}return}ie(I,d,p,_,m,b,T)},Ce=(d,p,_)=>{const y=p.component=d.component;if(_f(d,p,_))if(y.asyncDep&&!y.asyncResolved){X(y,p,_);return}else y.next=p,lf(y.update),y.update();else p.component=d.component,p.el=d.el,y.vnode=p},ie=(d,p,_,y,m,b,T)=>{const I=()=>{if(d.isMounted){let{next:A,bu:R,u:k,parent:x,vnode:H}=d,te=A,q;Ot(d,!1),A?(A.el=H.el,X(d,A,T)):A=H,R&&Fi(R),(q=A.props&&A.props.onVnodeBeforeUpdate)&&ze(q,x,A,H),Ot(d,!0);const Z=zs(d),Fe=d.subTree;d.subTree=Z,N(Fe,Z,h(Fe.el),Ni(Fe),d,m,b),A.el=Z.el,te===null&&gf(d,Z.el),k&&Ie(k,m),(q=A.props&&A.props.onVnodeUpdated)&&Ie(()=>ze(q,x,A,H),m)}else{let A;const{el:R,props:k}=p,{bm:x,m:H,parent:te}=d,q=yr(p);if(Ot(d,!1),x&&Fi(x),!q&&(A=k&&k.onVnodeBeforeMount)&&ze(A,te,p),Ot(d,!0),R&&js){const Z=()=>{d.subTree=zs(d),js(R,d.subTree,d,m,null)};q?p.type.__asyncLoader().then(()=>!d.isUnmounted&&Z()):Z()}else{const Z=d.subTree=zs(d);N(null,Z,_,y,d,m,b),p.el=Z.el}if(H&&Ie(H,m),!q&&(A=k&&k.onVnodeMounted)){const Z=p;Ie(()=>ze(A,te,Z),m)}p.shapeFlag&256&&d.a&&Ie(d.a,m),d.isMounted=!0,p=_=y=null}},w=d.effect=new to(I,()=>Tc(d.update),d.scope),v=d.update=w.run.bind(w);v.id=d.uid,Ot(d,!0),v()},X=(d,p,_)=>{p.component=d;const y=d.vnode.props;d.vnode=p,d.next=null,Bf(d,p.props,y,_),$f(d,p.children,_),xn(),co(void 0,d.update),On()},Xe=(d,p,_,y,m,b,T,I,w=!1)=>{const v=d&&d.children,A=d?d.shapeFlag:0,R=p.children,{patchFlag:k,shapeFlag:x}=p;if(k>0){if(k&128){Hn(v,R,_,y,m,b,T,I,w);return}else if(k&256){Vs(v,R,_,y,m,b,T,I,w);return}}x&8?(A&16&&Ze(v,m,b),R!==v&&u(_,R)):A&16?x&16?Hn(v,R,_,y,m,b,T,I,w):Ze(v,m,b,!0):(A&8&&u(_,""),x&16&&ne(R,_,y,m,b,T,I,w))},Vs=(d,p,_,y,m,b,T,I,w)=>{d=d||_n,p=p||_n;const v=d.length,A=p.length,R=Math.min(v,A);let k;for(k=0;k<R;k++){const x=p[k]=w?yt(p[k]):Ge(p[k]);N(d[k],x,_,null,m,b,T,I,w)}v>A?Ze(d,m,b,!0,!1,R):ne(p,_,y,m,b,T,I,w,R)},Hn=(d,p,_,y,m,b,T,I,w)=>{let v=0;const A=p.length;let R=d.length-1,k=A-1;for(;v<=R&&v<=k;){const x=d[v],H=p[v]=w?yt(p[v]):Ge(p[v]);if(Ft(x,H))N(x,H,_,null,m,b,T,I,w);else break;v++}for(;v<=R&&v<=k;){const x=d[R],H=p[k]=w?yt(p[k]):Ge(p[k]);if(Ft(x,H))N(x,H,_,null,m,b,T,I,w);else break;R--,k--}if(v>R){if(v<=k){const x=k+1,H=x<A?p[x].el:y;for(;v<=k;)N(null,p[v]=w?yt(p[v]):Ge(p[v]),_,H,m,b,T,I,w),v++}}else if(v>k)for(;v<=R;)pt(d[v],m,b,!0),v++;else{const x=v,H=v,te=new Map;for(v=H;v<=k;v++){const ke=p[v]=w?yt(p[v]):Ge(p[v]);ke.key!=null&&te.set(ke.key,v)}let q,Z=0;const Fe=k-H+1;let ln=!1,va=0;const Vn=new Array(Fe);for(v=0;v<Fe;v++)Vn[v]=0;for(v=x;v<=R;v++){const ke=d[v];if(Z>=Fe){pt(ke,m,b,!0);continue}let qe;if(ke.key!=null)qe=te.get(ke.key);else for(q=H;q<=k;q++)if(Vn[q-H]===0&&Ft(ke,p[q])){qe=q;break}qe===void 0?pt(ke,m,b,!0):(Vn[qe-H]=v+1,qe>=va?va=qe:ln=!0,N(ke,p[qe],_,null,m,b,T,I,w),Z++)}const Ea=ln?Yf(Vn):_n;for(q=Ea.length-1,v=Fe-1;v>=0;v--){const ke=H+v,qe=p[ke],Ca=ke+1<A?p[ke+1].el:y;Vn[v]===0?N(null,qe,_,Ca,m,b,T,I,w):ln&&(q<0||v!==Ea[q]?on(qe,_,Ca,2):q--)}}},on=(d,p,_,y,m=null)=>{const{el:b,type:T,transition:I,children:w,shapeFlag:v}=d;if(v&6){on(d.component.subTree,p,_,y);return}if(v&128){d.suspense.move(p,_,y);return}if(v&64){T.move(d,p,_,an);return}if(T===be){i(b,p,_);for(let R=0;R<w.length;R++)on(w[R],p,_,y);i(d.anchor,p,_);return}if(T===Wi){J(d,p,_);return}if(y!==2&&v&1&&I)if(y===0)I.beforeEnter(b),i(b,p,_),Ie(()=>I.enter(b),m);else{const{leave:R,delayLeave:k,afterLeave:x}=I,H=()=>i(b,p,_),te=()=>{R(b,()=>{H(),x&&x()})};k?k(b,H,te):te()}else i(b,p,_)},pt=(d,p,_,y=!1,m=!1)=>{const{type:b,props:T,ref:I,children:w,dynamicChildren:v,shapeFlag:A,patchFlag:R,dirs:k}=d;if(I!=null&&Ir(I,null,_,d,!0),A&256){p.ctx.deactivate(d);return}const x=A&1&&k,H=!yr(d);let te;if(H&&(te=T&&T.onVnodeBeforeUnmount)&&ze(te,p,d),A&6)hd(d.component,_,y);else{if(A&128){d.suspense.unmount(_,y);return}x&&xt(d,null,p,"beforeUnmount"),A&64?d.type.remove(d,p,_,m,an,y):v&&(b!==be||R>0&&R&64)?Ze(v,p,_,!1,!0):(b===be&&R&384||!m&&A&16)&&Ze(w,p,_),y&&ma(d)}(H&&(te=T&&T.onVnodeUnmounted)||x)&&Ie(()=>{te&&ze(te,p,d),x&&xt(d,null,p,"unmounted")},_)},ma=d=>{const{type:p,el:_,anchor:y,transition:m}=d;if(p===be){ud(_,y);return}if(p===Wi){_e(d);return}const b=()=>{s(_),m&&!m.persisted&&m.afterLeave&&m.afterLeave()};if(d.shapeFlag&1&&m&&!m.persisted){const{leave:T,delayLeave:I}=m,w=()=>T(_,b);I?I(d.el,b,w):w()}else b()},ud=(d,p)=>{let _;for(;d!==p;)_=f(d),s(d),d=_;s(p)},hd=(d,p,_)=>{const{bum:y,scope:m,update:b,subTree:T,um:I}=d;y&&Fi(y),m.stop(),b&&(b.active=!1,pt(T,d,p,_)),I&&Ie(I,p),Ie(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Ze=(d,p,_,y=!1,m=!1,b=0)=>{for(let T=b;T<d.length;T++)pt(d[T],p,_,y,m)},Ni=d=>d.shapeFlag&6?Ni(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),ya=(d,p,_)=>{d==null?p._vnode&&pt(p._vnode,null,null,!0):N(p._vnode||null,d,p,null,null,null,_),Nc(),p._vnode=d},an={p:N,um:pt,m:on,r:ma,mt:Hs,mc:ne,pc:Xe,pbc:Ae,n:Ni,o:t};let $s,js;return e&&([$s,js]=e(an)),{render:ya,hydrate:$s,createApp:zf(ya,$s)}}function Ot({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function zc(t,e,n=!1){const i=t.children,s=e.children;if(M(i)&&M(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=yt(s[r]),a.el=o.el),n||zc(o,a))}}function Yf(t){const e=t.slice(),n=[0];let i,s,r,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(s=n[n.length-1],t[s]<c){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const Qf=t=>t.__isTeleport,Jf=Symbol(),be=Symbol(void 0),go=Symbol(void 0),rt=Symbol(void 0),Wi=Symbol(void 0),Xn=[];let $t=null;function jt(t=!1){Xn.push($t=t?null:[])}function Xf(){Xn.pop(),$t=Xn[Xn.length-1]||null}let Qi=1;function Ua(t){Qi+=t}function Kc(t){return t.dynamicChildren=Qi>0?$t||_n:null,Xf(),Qi>0&&$t&&$t.push(t),t}function oi(t,e,n,i,s,r){return Kc(tt(t,e,n,i,s,r,!0))}function Gc(t,e,n,i,s){return Kc(Tt(t,e,n,i,s,!0))}function Zf(t){return t?t.__v_isVNode===!0:!1}function Ft(t,e){return t.type===e.type&&t.key===e.key}const Ts="__vInternal",Yc=({key:t})=>t!=null?t:null,Bi=({ref:t,ref_key:e,ref_for:n})=>t!=null?he(t)||me(t)||D(t)?{i:Be,r:t,k:e,f:!!n}:t:null;function tt(t,e=null,n=null,i=0,s=null,r=t===be?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Yc(e),ref:e&&Bi(e),scopeId:Pc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null};return a?(mo(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=he(n)?8:16),Qi>0&&!o&&$t&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&$t.push(l),l}const Tt=ep;function ep(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===Jf)&&(t=rt),Zf(t)){const a=Gt(t,e,!0);return n&&mo(a,n),a}if(hp(t)&&(t=t.__vccOpts),e){e=tp(e);let{class:a,style:l}=e;a&&!he(a)&&(e.class=Yr(a)),de(l)&&(Cc(l)&&!M(l)&&(l=ye({},l)),e.style=Gr(l))}const o=he(t)?1:mf(t)?128:Qf(t)?64:de(t)?4:D(t)?2:0;return tt(t,e,n,i,s,o,r,!0)}function tp(t){return t?Cc(t)||Ts in t?ye({},t):t:null}function Gt(t,e,n=!1){const{props:i,ref:s,patchFlag:r,children:o}=t,a=e?np(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Yc(a),ref:e&&e.ref?n&&s?M(s)?s.concat(Bi(e)):[s,Bi(e)]:Bi(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==be?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Gt(t.ssContent),ssFallback:t.ssFallback&&Gt(t.ssFallback),el:t.el,anchor:t.anchor}}function Qc(t=" ",e=0){return Tt(go,null,t,e)}function Ge(t){return t==null||typeof t=="boolean"?Tt(rt):M(t)?Tt(be,null,t.slice()):typeof t=="object"?yt(t):Tt(go,null,String(t))}function yt(t){return t.el===null||t.memo?t:Gt(t)}function mo(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(M(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),mo(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Ts in e)?e._ctx=Be:s===3&&Be&&(Be.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else D(e)?(e={default:e,_ctx:Be},n=32):(e=String(e),i&64?(n=16,e=[Qc(e)]):n=8);t.children=e,t.shapeFlag|=n}function np(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Yr([e.class,i.class]));else if(s==="style")e.style=Gr([e.style,i.style]);else if(ms(s)){const r=e[s],o=i[s];o&&r!==o&&!(M(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function ze(t,e,n,i=null){Me(t,e,7,[n,i])}function Jc(t,e,n,i){let s;const r=n&&n[i];if(M(t)||he(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,r&&r[o])}else if(de(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=e(t[c],c,a,r&&r[a])}}else s=[];return n&&(n[i]=s),s}const br=t=>t?Zc(t)?Ss(t)||t.proxy:br(t.parent):null,Ji=ye(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>br(t.parent),$root:t=>br(t.root),$emit:t=>t.emit,$options:t=>Wc(t),$forceUpdate:t=>()=>Tc(t.update),$nextTick:t=>of.bind(t.proxy),$watch:t=>Ef.bind(t)}),ip={get({_:t},e){const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(i!==K&&B(i,e))return o[e]=1,i[e];if(s!==K&&B(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&B(c,e))return o[e]=3,r[e];if(n!==K&&B(n,e))return o[e]=4,n[e];vr&&(o[e]=0)}}const u=Ji[e];let h,f;if(u)return e==="$attrs"&&xe(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==K&&B(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,B(f,e))return f[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return s!==K&&B(s,e)?(s[e]=n,!0):i!==K&&B(i,e)?(i[e]=n,!0):B(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!n[o]||t!==K&&B(t,o)||e!==K&&B(e,o)||(a=r[0])&&B(a,o)||B(i,o)||B(Ji,o)||B(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:B(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},sp=qc();let rp=0;function op(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||sp,r={uid:rp++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Td(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Hc(i,s),emitsOptions:kc(i,s),emit:null,emitted:null,propsDefaults:K,inheritAttrs:i.inheritAttrs,ctx:K,data:K,props:K,attrs:K,slots:K,refs:K,setupState:K,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=hf.bind(null,r),t.ce&&t.ce(r),r}let pe=null;const Xc=()=>pe||Be,wn=t=>{pe=t,t.scope.on()},qt=()=>{pe&&pe.scope.off(),pe=null};function Zc(t){return t.vnode.shapeFlag&4}let ai=!1;function ap(t,e=!1){ai=e;const{props:n,children:i}=t.vnode,s=Zc(t);Wf(t,n,s,e),Vf(t,i);const r=s?lp(t,e):void 0;return ai=!1,r}function lp(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Ic(new Proxy(t.ctx,ip));const{setup:i}=n;if(i){const s=t.setupContext=i.length>1?up(t):null;wn(t),xn();const r=wt(i,t,0,[t.props,s]);if(On(),qt(),rc(r)){if(r.then(qt,qt),e)return r.then(o=>{Wa(t,o,e)}).catch(o=>{Cs(o,t,0)});t.asyncDep=r}else Wa(t,r,e)}else eu(t,e)}function Wa(t,e,n){D(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:de(e)&&(t.setupState=bc(e)),eu(t,n)}let Ba;function eu(t,e,n){const i=t.type;if(!t.render){if(!e&&Ba&&!i.render){const s=i.template;if(s){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=i,c=ye(ye({isCustomElement:r,delimiters:a},o),l);i.render=Ba(s,c)}}t.render=i.render||$e}wn(t),xn(),Mf(t),On(),qt()}function cp(t){return new Proxy(t.attrs,{get(e,n){return xe(t,"get","$attrs"),e[n]}})}function up(t){const e=i=>{t.exposed=i||{}};let n;return{get attrs(){return n||(n=cp(t))},slots:t.slots,emit:t.emit,expose:e}}function Ss(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(bc(Ic(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ji)return Ji[n](t)}}))}function hp(t){return D(t)&&"__vccOpts"in t}const dp=(t,e)=>sf(t,e,ai),fp="3.2.33",pp="http://www.w3.org/2000/svg",Ut=typeof document!="undefined"?document:null,Ha=Ut&&Ut.createElement("template"),_p={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e?Ut.createElementNS(pp,t):Ut.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>Ut.createTextNode(t),createComment:t=>Ut.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ut.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{Ha.innerHTML=i?`<svg>${t}</svg>`:t;const a=Ha.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function gp(t,e,n){const i=t._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function mp(t,e,n){const i=t.style,s=he(n);if(n&&!s){for(const r in n)wr(i,r,n[r]);if(e&&!he(e))for(const r in e)n[r]==null&&wr(i,r,"")}else{const r=i.display;s?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=r)}}const Va=/\s*!important$/;function wr(t,e,n){if(M(n))n.forEach(i=>wr(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=yp(t,e);Va.test(n)?t.setProperty(Pn(i),n.replace(Va,""),"important"):t[i]=n}}const $a=["Webkit","Moz","ms"],Ys={};function yp(t,e){const n=Ys[e];if(n)return n;let i=bn(e);if(i!=="filter"&&i in t)return Ys[e]=i;i=lc(i);for(let s=0;s<$a.length;s++){const r=$a[s]+i;if(r in t)return Ys[e]=r}return e}const ja="http://www.w3.org/1999/xlink";function vp(t,e,n,i,s){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(ja,e.slice(6,e.length)):t.setAttributeNS(ja,e,n);else{const r=pd(e);n==null||r&&!tc(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function Ep(t,e,n,i,s,r,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,s,r),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n==null?"":n;(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=tc(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[tu,Cp]=(()=>{let t=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(t=()=>performance.now());const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let Tr=0;const Ip=Promise.resolve(),bp=()=>{Tr=0},wp=()=>Tr||(Ip.then(bp),Tr=tu());function dn(t,e,n,i){t.addEventListener(e,n,i)}function Tp(t,e,n,i){t.removeEventListener(e,n,i)}function Sp(t,e,n,i,s=null){const r=t._vei||(t._vei={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=Rp(e);if(i){const c=r[e]=Np(i,s);dn(t,a,c,l)}else o&&(Tp(t,a,o,l),r[e]=void 0)}}const qa=/(?:Once|Passive|Capture)$/;function Rp(t){let e;if(qa.test(t)){e={};let n;for(;n=t.match(qa);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[Pn(t.slice(2)),e]}function Np(t,e){const n=i=>{const s=i.timeStamp||tu();(Cp||s>=n.attached-1)&&Me(Ap(i,n.value),e,5,[i])};return n.value=t,n.attached=wp(),n}function Ap(t,e){if(M(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const za=/^on[a-z]/,kp=(t,e,n,i,s=!1,r,o,a,l)=>{e==="class"?gp(t,i,s):e==="style"?mp(t,n,i):ms(e)?Qr(e)||Sp(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Pp(t,e,i,s))?Ep(t,e,i,r,o,a,l):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),vp(t,e,i,s))};function Pp(t,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&za.test(e)&&D(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||za.test(e)&&he(n)?!1:e in t}function nu(t){const e=Xc();if(!e)return;const n=()=>Sr(e.subTree,t(e.proxy));vf(n),fo(()=>{const i=new MutationObserver(n);i.observe(e.subTree.el.parentNode,{childList:!0}),po(()=>i.disconnect())})}function Sr(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{Sr(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)Ka(t.el,e);else if(t.type===be)t.children.forEach(n=>Sr(n,e));else if(t.type===Wi){let{el:n,anchor:i}=t;for(;n&&(Ka(n,e),n!==i);)n=n.nextSibling}}function Ka(t,e){if(t.nodeType===1){const n=t.style;for(const i in e)n.setProperty(`--${i}`,e[i])}}const xp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};bf.props;const Ga=t=>{const e=t.props["onUpdate:modelValue"];return M(e)?n=>Fi(e,n):e};function Op(t){t.target.composing=!0}function Ya(t){const e=t.target;e.composing&&(e.composing=!1,Mp(e,"input"))}function Mp(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const Dp={created(t,{modifiers:{lazy:e,trim:n,number:i}},s){t._assign=Ga(s);const r=i||s.props&&s.props.type==="number";dn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n?a=a.trim():r&&(a=cr(a)),t._assign(a)}),n&&dn(t,"change",()=>{t.value=t.value.trim()}),e||(dn(t,"compositionstart",Op),dn(t,"compositionend",Ya),dn(t,"change",Ya))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:i,number:s}},r){if(t._assign=Ga(r),t.composing||document.activeElement===t&&(n||i&&t.value.trim()===e||(s||t.type==="number")&&cr(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},Lp=ye({patchProp:kp},_p);let Qa;function Fp(){return Qa||(Qa=Kf(Lp))}const Up=(...t)=>{const e=Fp().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=Wp(i);if(!s)return;const r=e._component;!D(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Wp(t){return he(t)?document.querySelector(t):t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iu={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E=function(t,e){if(!t)throw Dn(e)},Dn=function(t){return new Error("Firebase Database ("+iu.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const su=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Bp=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},yo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let f=(a&15)<<2|c>>6,g=c&63;l||(g=64,o||(f=64)),i.push(n[u],n[h],n[f],n[g])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(su(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Bp(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||a==null||c==null||h==null)throw Error();const f=r<<2|a>>4;if(i.push(f),c!==64){const g=a<<4&240|c>>2;if(i.push(g),h!==64){const C=c<<6&192|h;i.push(C)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},ru=function(t){const e=su(t);return yo.encodeByteArray(e,!0)},ou=function(t){return ru(t).replace(/\./g,"")},Rr=function(t){try{return yo.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hp(t){return au(void 0,t)}function au(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Vp(n)||(t[n]=au(t[n],e[n]));return t}function Vp(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function vo(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ve())}function $p(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function lu(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function jp(){const t=ve();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function cu(){return iu.NODE_ADMIN===!0}function qp(){return typeof indexedDB=="object"}function zp(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kp="FirebaseError";class Ln extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=Kp,Object.setPrototypeOf(this,Ln.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,yi.prototype.create)}}class yi{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?Gp(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Ln(s,a,i)}}function Gp(t,e){return t.replace(Yp,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Yp=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(t){return JSON.parse(t)}function ue(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uu=function(t){let e={},n={},i={},s="";try{const r=t.split(".");e=li(Rr(r[0])||""),n=li(Rr(r[1])||""),s=r[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:s}},Qp=function(t){const e=uu(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Jp=function(t){const e=uu(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Tn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Nr(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Xi(t,e,n){const i={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=e.call(n,t[s],s,t));return i}function Zi(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(Ja(r)&&Ja(o)){if(!Zi(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function Ja(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)i[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)i[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=i[h-3]^i[h-8]^i[h-14]^i[h-16];i[h]=(f<<1|f>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const f=(s<<5|s>>>27)+c+l+u+i[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=f}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<n;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function Zp(t,e){const n=new e_(t,e);return n.subscribe.bind(n)}class e_{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let s;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");t_(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:i},s.next===void 0&&(s.next=Qs),s.error===void 0&&(s.error=Qs),s.complete===void 0&&(s.complete=Qs);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console!="undefined"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function t_(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Qs(){}function Eo(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n_=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,E(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Ns=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Je(t){return t&&t._delegate?t._delegate:t}/**
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
 */function Yn(t,e){return new Promise((n,i)=>{t.onsuccess=s=>{n(s.target.result)},t.onerror=s=>{var r;i(`${e}: ${(r=s.target.error)===null||r===void 0?void 0:r.message}`)}})}class Xa{constructor(e){this._db=e,this.objectStoreNames=this._db.objectStoreNames}transaction(e,n="readonly"){return new hu(this._db.transaction.call(this._db,e,n))}createObjectStore(e,n){return new du(this._db.createObjectStore(e,n))}close(){this._db.close()}}class hu{constructor(e){this._transaction=e,this.complete=new Promise((n,i)=>{this._transaction.oncomplete=function(){n()},this._transaction.onerror=()=>{i(this._transaction.error)},this._transaction.onabort=()=>{i(this._transaction.error)}})}objectStore(e){return new du(this._transaction.objectStore(e))}}class du{constructor(e){this._store=e}index(e){return new Za(this._store.index(e))}createIndex(e,n,i){return new Za(this._store.createIndex(e,n,i))}get(e){const n=this._store.get(e);return Yn(n,"Error reading from IndexedDB")}put(e,n){const i=this._store.put(e,n);return Yn(i,"Error writing to IndexedDB")}delete(e){const n=this._store.delete(e);return Yn(n,"Error deleting from IndexedDB")}clear(){const e=this._store.clear();return Yn(e,"Error clearing IndexedDB object store")}}class Za{constructor(e){this._index=e}get(e){const n=this._index.get(e);return Yn(n,"Error reading from IndexedDB")}}function i_(t,e,n){return new Promise((i,s)=>{try{const r=indexedDB.open(t,e);r.onsuccess=o=>{i(new Xa(o.target.result))},r.onerror=o=>{var a;s(`Error opening indexedDB: ${(a=o.target.error)===null||a===void 0?void 0:a.message}`)},r.onupgradeneeded=o=>{n(new Xa(r.result),o.oldVersion,o.newVersion,new hu(r.transaction))}}catch(r){s(`Error opening indexedDB: ${r.message}`)}})}class Yt{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Dt="[DEFAULT]";/**
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
 */class s_{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new Rs;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(o_(e))try{this.getOrInitializeService({instanceIdentifier:Dt})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=Dt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Dt){return this.instances.has(e)}getOptions(e=Dt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(!!i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:r_(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Dt){return this.component?this.component.multipleInstances?e:Dt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function r_(t){return t===Dt?void 0:t}function o_(t){return t.instantiationMode==="EAGER"}/**
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
 */class a_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new s_(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var z;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(z||(z={}));const l_={debug:z.DEBUG,verbose:z.VERBOSE,info:z.INFO,warn:z.WARN,error:z.ERROR,silent:z.SILENT},c_=z.INFO,u_={[z.DEBUG]:"log",[z.VERBOSE]:"log",[z.INFO]:"info",[z.WARN]:"warn",[z.ERROR]:"error"},h_=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=u_[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Co{constructor(e){this.name=e,this._logLevel=c_,this._logHandler=h_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?l_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,z.DEBUG,...e),this._logHandler(this,z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,z.VERBOSE,...e),this._logHandler(this,z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,z.INFO,...e),this._logHandler(this,z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,z.WARN,...e),this._logHandler(this,z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,z.ERROR,...e),this._logHandler(this,z.ERROR,...e)}}/**
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
 */class d_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(f_(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function f_(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ar="@firebase/app",el="0.7.22";/**
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
 */const Io=new Co("@firebase/app"),p_="@firebase/app-compat",__="@firebase/analytics-compat",g_="@firebase/analytics",m_="@firebase/app-check-compat",y_="@firebase/app-check",v_="@firebase/auth",E_="@firebase/auth-compat",C_="@firebase/database",I_="@firebase/database-compat",b_="@firebase/functions",w_="@firebase/functions-compat",T_="@firebase/installations",S_="@firebase/installations-compat",R_="@firebase/messaging",N_="@firebase/messaging-compat",A_="@firebase/performance",k_="@firebase/performance-compat",P_="@firebase/remote-config",x_="@firebase/remote-config-compat",O_="@firebase/storage",M_="@firebase/storage-compat",D_="@firebase/firestore",L_="@firebase/firestore-compat",F_="firebase",U_="9.7.0";/**
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
 */const fu="[DEFAULT]",W_={[Ar]:"fire-core",[p_]:"fire-core-compat",[g_]:"fire-analytics",[__]:"fire-analytics-compat",[y_]:"fire-app-check",[m_]:"fire-app-check-compat",[v_]:"fire-auth",[E_]:"fire-auth-compat",[C_]:"fire-rtdb",[I_]:"fire-rtdb-compat",[b_]:"fire-fn",[w_]:"fire-fn-compat",[T_]:"fire-iid",[S_]:"fire-iid-compat",[R_]:"fire-fcm",[N_]:"fire-fcm-compat",[A_]:"fire-perf",[k_]:"fire-perf-compat",[P_]:"fire-rc",[x_]:"fire-rc-compat",[O_]:"fire-gcs",[M_]:"fire-gcs-compat",[D_]:"fire-fst",[L_]:"fire-fst-compat","fire-js":"fire-js",[F_]:"fire-js-all"};/**
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
 */const es=new Map,kr=new Map;function B_(t,e){try{t.container.addComponent(e)}catch(n){Io.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Sn(t){const e=t.name;if(kr.has(e))return Io.debug(`There were multiple attempts to register component ${e}.`),!1;kr.set(e,t);for(const n of es.values())B_(n,t);return!0}function bo(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const H_={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},Qt=new yi("app","Firebase",H_);/**
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
 */class V_{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Yt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Qt.create("app-deleted",{appName:this._name})}}/**
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
 */const vi=U_;function $_(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:fu,automaticDataCollectionEnabled:!1},e),i=n.name;if(typeof i!="string"||!i)throw Qt.create("bad-app-name",{appName:String(i)});const s=es.get(i);if(s){if(Zi(t,s.options)&&Zi(n,s.config))return s;throw Qt.create("duplicate-app",{appName:i})}const r=new a_(i);for(const a of kr.values())r.addComponent(a);const o=new V_(t,n,r);return es.set(i,o),o}function pu(t=fu){const e=es.get(t);if(!e)throw Qt.create("no-app",{appName:t});return e}function St(t,e,n){var i;let s=(i=W_[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Io.warn(a.join(" "));return}Sn(new Yt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const j_="firebase-heartbeat-database",q_=1,ci="firebase-heartbeat-store";let Js=null;function _u(){return Js||(Js=i_(j_,q_,(t,e)=>{switch(e){case 0:t.createObjectStore(ci)}}).catch(t=>{throw Qt.create("storage-open",{originalErrorMessage:t.message})})),Js}async function z_(t){try{return(await _u()).transaction(ci).objectStore(ci).get(gu(t))}catch(e){throw Qt.create("storage-get",{originalErrorMessage:e.message})}}async function tl(t,e){try{const i=(await _u()).transaction(ci,"readwrite");return await i.objectStore(ci).put(e,gu(t)),i.complete}catch(n){throw Qt.create("storage-set",{originalErrorMessage:n.message})}}function gu(t){return`${t.name}!${t.options.appId}`}/**
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
 */const K_=1024,G_=30*24*60*60*1e3;class Y_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new J_(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=nl();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=G_}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=nl(),{heartbeatsToSend:n,unsentEntries:i}=Q_(this._heartbeatsCache.heartbeats),s=ou(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function nl(){return new Date().toISOString().substring(0,10)}function Q_(t,e=K_){const n=[];let i=t.slice();for(const s of t){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),il(n)>e){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),il(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class J_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return qp()?zp().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await z_(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return tl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return tl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function il(t){return ou(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function X_(t){Sn(new Yt("platform-logger",e=>new d_(e),"PRIVATE")),Sn(new Yt("heartbeat",e=>new Y_(e),"PRIVATE")),St(Ar,el,t),St(Ar,el,"esm2017"),St("fire-js","")}X_("");var Z_="firebase",eg="9.7.0";/**
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
 */St(Z_,eg,"app");function wo(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]]);return n}function mu(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const tg=mu,yu=new yi("auth","Firebase",mu());/**
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
 */const sl=new Co("@firebase/auth");function Hi(t,...e){sl.logLevel<=z.ERROR&&sl.error(`Auth (${vi}): ${t}`,...e)}/**
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
 */function lt(t,...e){throw To(t,...e)}function Ye(t,...e){return To(t,...e)}function ng(t,e,n){const i=Object.assign(Object.assign({},tg()),{[e]:n});return new yi("auth","Firebase",i).create(e,{appName:t.name})}function To(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return yu.create(t,...e)}function O(t,e,...n){if(!t)throw To(e,...n)}function nt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Hi(e),new Error(e)}function ct(t,e){t||nt(e)}/**
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
 */const rl=new Map;function it(t){ct(t instanceof Function,"Expected a class definition");let e=rl.get(t);return e?(ct(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,rl.set(t,e),e)}/**
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
 */function ig(t,e){const n=bo(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),r=n.getOptions();if(Zi(r,e!=null?e:{}))return s;lt(s,"already-initialized")}return n.initialize({options:e})}function sg(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(it);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Pr(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function rg(){return ol()==="http:"||ol()==="https:"}function ol(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function og(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(rg()||$p()||"connection"in navigator)?navigator.onLine:!0}function ag(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ei{constructor(e,n){this.shortDelay=e,this.longDelay=n,ct(n>e,"Short delay should be less than long delay!"),this.isMobile=vo()||lu()}get(){return og()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function So(t,e){ct(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class vu{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;nt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;nt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;nt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const lg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const cg=new Ei(3e4,6e4);function Eu(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function As(t,e,n,i,s={}){return Cu(t,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=Fn(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),vu.fetch()(bu(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function Cu(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},lg),e);try{const s=new ug(t),r=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Xs(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Xs(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Xs(t,"email-already-in-use",o);const u=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw ng(t,u,c);lt(t,u)}}catch(s){if(s instanceof Ln)throw s;lt(t,"network-request-failed")}}async function Iu(t,e,n,i,s={}){const r=await As(t,e,n,i,s);return"mfaPendingCredential"in r&&lt(t,"multi-factor-auth-required",{_serverResponse:r}),r}function bu(t,e,n,i){const s=`${e}${n}?${i}`;return t.config.emulator?So(t.config,s):`${t.config.apiScheme}://${s}`}class ug{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(Ye(this.auth,"network-request-failed")),cg.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Xs(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=Ye(t,e,i);return s.customData._tokenResponse=n,s}/**
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
 */async function hg(t,e){return As(t,"POST","/v1/accounts:delete",e)}async function dg(t,e){return As(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Zn(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function fg(t,e=!1){const n=Je(t),i=await n.getIdToken(e),s=Ro(i);O(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:Zn(Zs(s.auth_time)),issuedAtTime:Zn(Zs(s.iat)),expirationTime:Zn(Zs(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Zs(t){return Number(t)*1e3}function Ro(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return Hi("JWT malformed, contained fewer than 3 sections"),null;try{const s=Rr(n);return s?JSON.parse(s):(Hi("Failed to decode base64 JWT payload"),null)}catch(s){return Hi("Caught error parsing JWT payload as JSON",s),null}}function pg(t){const e=Ro(t);return O(e,"internal-error"),O(typeof e.exp!="undefined","internal-error"),O(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ui(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof Ln&&_g(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function _g({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class gg{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class wu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Zn(this.lastLoginAt),this.creationTime=Zn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ts(t){var e;const n=t.auth,i=await t.getIdToken(),s=await ui(t,dg(n,{idToken:i}));O(s==null?void 0:s.users.length,n,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?vg(r.providerUserInfo):[],a=yg(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new wu(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function mg(t){const e=Je(t);await ts(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function yg(t,e){return[...t.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function vg(t){return t.map(e=>{var{providerId:n}=e,i=wo(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function Eg(t,e){const n=await Cu(t,{},async()=>{const i=Fn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=t.config,o=bu(t,s,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",vu.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class hi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){O(e.idToken,"internal-error"),O(typeof e.idToken!="undefined","internal-error"),O(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):pg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return O(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:s,expiresIn:r}=await Eg(e,n);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:s,expirationTime:r}=n,o=new hi;return i&&(O(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(O(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(O(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new hi,this.toJSON())}_performRefresh(){return nt("not implemented")}}/**
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
 */function gt(t,e){O(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class zt{constructor(e){var{uid:n,auth:i,stsTokenManager:s}=e,r=wo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new gg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new wu(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await ui(this,this.stsTokenManager.getToken(this.auth,e));return O(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return fg(this,e)}reload(){return mg(this)}_assign(e){this!==e&&(O(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new zt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){O(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await ts(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ui(this,hg(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,s,r,o,a,l,c,u;const h=(i=n.displayName)!==null&&i!==void 0?i:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,g=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,S=(a=n.tenantId)!==null&&a!==void 0?a:void 0,N=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,U=(c=n.createdAt)!==null&&c!==void 0?c:void 0,re=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:Q,emailVerified:J,isAnonymous:_e,providerData:De,stsTokenManager:$}=n;O(Q&&$,e,"internal-error");const oe=hi.fromJSON(this.name,$);O(typeof Q=="string",e,"internal-error"),gt(h,e.name),gt(f,e.name),O(typeof J=="boolean",e,"internal-error"),O(typeof _e=="boolean",e,"internal-error"),gt(g,e.name),gt(C,e.name),gt(S,e.name),gt(N,e.name),gt(U,e.name),gt(re,e.name);const ne=new zt({uid:Q,auth:e,email:f,emailVerified:J,displayName:h,isAnonymous:_e,photoURL:C,phoneNumber:g,tenantId:S,stsTokenManager:oe,createdAt:U,lastLoginAt:re});return De&&Array.isArray(De)&&(ne.providerData=De.map(Ne=>Object.assign({},Ne))),N&&(ne._redirectEventId=N),ne}static async _fromIdTokenResponse(e,n,i=!1){const s=new hi;s.updateFromServerResponse(n);const r=new zt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await ts(r),r}}/**
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
 */class Tu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Tu.type="NONE";const al=Tu;/**
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
 */function Vi(t,e,n){return`firebase:${t}:${e}:${n}`}class yn{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=Vi(this.userKey,s.apiKey,r),this.fullPersistenceKey=Vi("persistence",s.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?zt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new yn(it(al),e,i);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=s[0]||it(al);const o=Vi(i,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=zt._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new yn(r,e,i):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new yn(r,e,i))}}/**
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
 */function ll(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Nu(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Su(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ku(e))return"Blackberry";if(Pu(e))return"Webos";if(No(e))return"Safari";if((e.includes("chrome/")||Ru(e))&&!e.includes("edge/"))return"Chrome";if(Au(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Su(t=ve()){return/firefox\//i.test(t)}function No(t=ve()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ru(t=ve()){return/crios\//i.test(t)}function Nu(t=ve()){return/iemobile/i.test(t)}function Au(t=ve()){return/android/i.test(t)}function ku(t=ve()){return/blackberry/i.test(t)}function Pu(t=ve()){return/webos/i.test(t)}function ks(t=ve()){return/iphone|ipad|ipod/i.test(t)}function Cg(t=ve()){var e;return ks(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Ig(){return jp()&&document.documentMode===10}function xu(t=ve()){return ks(t)||Au(t)||Pu(t)||ku(t)||/windows phone/i.test(t)||Nu(t)}function bg(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Ou(t,e=[]){let n;switch(t){case"Browser":n=ll(ve());break;case"Worker":n=`${ll(ve())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${vi}/${i}`}/**
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
 */class wg{constructor(e,n,i){this.app=e,this.heartbeatServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new cl(this),this.idTokenSubscription=new cl(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=yu,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=it(n)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await yn.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let i=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,r=i==null?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(e);(!s||s===r)&&(o==null?void 0:o.user)&&(i=o.user)}return i?i._redirectEventId?(O(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)):this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ts(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ag()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Je(e):null;return n&&O(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&O(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(it(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new yi("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&it(e)||this._popupRedirectResolver;O(n,this,"argument-error"),this.redirectPersistenceManager=await yn.create(this,[it(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,s){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return O(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,i,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return O(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ou(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return i&&(n["X-Firebase-Client"]=i),n}}function Ao(t){return Je(t)}class cl{constructor(e){this.auth=e,this.observer=null,this.addObserver=Zp(n=>this.observer=n)}get next(){return O(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class Mu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return nt("not implemented")}_getIdTokenResponse(e){return nt("not implemented")}_linkToIdToken(e,n){return nt("not implemented")}_getReauthenticationResolver(e){return nt("not implemented")}}/**
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
 */async function vn(t,e){return Iu(t,"POST","/v1/accounts:signInWithIdp",Eu(t,e))}/**
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
 */const Tg="http://localhost";class Jt extends Mu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Jt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):lt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=n,r=wo(n,["providerId","signInMethod"]);if(!i||!s)return null;const o=new Jt(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return vn(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,vn(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,vn(e,n)}buildRequest(){const e={requestUri:Tg,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Fn(n)}return e}}/**
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
 */class Du{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ci extends Du{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class vt extends Ci{constructor(){super("facebook.com")}static credential(e){return Jt._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vt.credentialFromTaggedObject(e)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vt.credential(e.oauthAccessToken)}catch{return null}}}vt.FACEBOOK_SIGN_IN_METHOD="facebook.com";vt.PROVIDER_ID="facebook.com";/**
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
 */class Et extends Ci{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Jt._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Et.credentialFromTaggedObject(e)}static credentialFromError(e){return Et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return Et.credential(n,i)}catch{return null}}}Et.GOOGLE_SIGN_IN_METHOD="google.com";Et.PROVIDER_ID="google.com";/**
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
 */class Ct extends Ci{constructor(){super("github.com")}static credential(e){return Jt._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ct.credentialFromTaggedObject(e)}static credentialFromError(e){return Ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ct.credential(e.oauthAccessToken)}catch{return null}}}Ct.GITHUB_SIGN_IN_METHOD="github.com";Ct.PROVIDER_ID="github.com";/**
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
 */class It extends Ci{constructor(){super("twitter.com")}static credential(e,n){return Jt._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return It.credentialFromTaggedObject(e)}static credentialFromError(e){return It.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return It.credential(n,i)}catch{return null}}}It.TWITTER_SIGN_IN_METHOD="twitter.com";It.PROVIDER_ID="twitter.com";/**
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
 */async function Sg(t,e){return Iu(t,"POST","/v1/accounts:signUp",Eu(t,e))}/**
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
 */class At{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,s=!1){const r=await zt._fromIdTokenResponse(e,i,s),o=ul(i);return new At({user:r,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const s=ul(i);return new At({user:e,providerId:s,_tokenResponse:i,operationType:n})}}function ul(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function Rg(t){var e;const n=Ao(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new At({user:n.currentUser,providerId:null,operationType:"signIn"});const i=await Sg(n,{returnSecureToken:!0}),s=await At._fromIdTokenResponse(n,"signIn",i,!0);return await n._updateCurrentUser(s.user),s}/**
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
 */class ns extends Ln{constructor(e,n,i,s){var r;super(n.code,n.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,ns.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,s){return new ns(e,n,i,s)}}function Lu(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?ns._fromErrorAndOperation(t,r,e,i):r})}async function Ng(t,e,n=!1){const i=await ui(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return At._forOperation(t,"link",i)}/**
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
 */async function Ag(t,e,n=!1){const{auth:i}=t,s="reauthenticate";try{const r=await ui(t,Lu(i,s,e,t),n);O(r.idToken,i,"internal-error");const o=Ro(r.idToken);O(o,i,"internal-error");const{sub:a}=o;return O(t.uid===a,i,"user-mismatch"),At._forOperation(t,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&lt(i,"user-mismatch"),r}}/**
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
 */async function kg(t,e,n=!1){const i="signIn",s=await Lu(t,i,e),r=await At._fromIdTokenResponse(t,i,s);return n||await t._updateCurrentUser(r.user),r}function Pg(t,e,n,i){return Je(t).onAuthStateChanged(e,n,i)}const is="__sak";/**
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
 */class Fu{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(is,"1"),this.storage.removeItem(is),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function xg(){const t=ve();return No(t)||ks(t)}const Og=1e3,Mg=10;class Uu extends Fu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=xg()&&bg(),this.fallbackToPolling=xu(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),s=this.localCache[n];i!==s&&e(n,s,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);Ig()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Mg):s()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},Og)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Uu.type="LOCAL";const Dg=Uu;/**
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
 */class Wu extends Fu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Wu.type="SESSION";const Bu=Wu;/**
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
 */function Lg(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ps{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const i=new Ps(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:s,data:r}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await Lg(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ps.receivers=[];/**
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
 */function ko(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Fg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=ko("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(h){const f=h;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(f.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Qe(){return window}function Ug(t){Qe().location.href=t}/**
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
 */function Hu(){return typeof Qe().WorkerGlobalScope!="undefined"&&typeof Qe().importScripts=="function"}async function Wg(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Bg(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Hg(){return Hu()?self:null}/**
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
 */const Vu="firebaseLocalStorageDb",Vg=1,ss="firebaseLocalStorage",$u="fbase_key";class Ii{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function xs(t,e){return t.transaction([ss],e?"readwrite":"readonly").objectStore(ss)}function $g(){const t=indexedDB.deleteDatabase(Vu);return new Ii(t).toPromise()}function xr(){const t=indexedDB.open(Vu,Vg);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(ss,{keyPath:$u})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(ss)?e(i):(i.close(),await $g(),e(await xr()))})})}async function hl(t,e,n){const i=xs(t,!0).put({[$u]:e,value:n});return new Ii(i).toPromise()}async function jg(t,e){const n=xs(t,!1).get(e),i=await new Ii(n).toPromise();return i===void 0?null:i.value}function dl(t,e){const n=xs(t,!0).delete(e);return new Ii(n).toPromise()}const qg=800,zg=3;class ju{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await xr(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>zg)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Hu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ps._getInstance(Hg()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Wg(),!this.activeServiceWorker)return;this.sender=new Fg(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);!i||((e=i[0])===null||e===void 0?void 0:e.fulfilled)&&((n=i[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Bg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await xr();return await hl(e,is,"1"),await dl(e,is),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>hl(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>jg(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>dl(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=xs(s,!1).getAll();return new Ii(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),qg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ju.type="LOCAL";const Kg=ju;/**
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
 */function Gg(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Yg(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=s=>{const r=Ye("internal-error");r.customData=s,n(r)},i.type="text/javascript",i.charset="UTF-8",Gg().appendChild(i)})}function Qg(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Ei(3e4,6e4);/**
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
 */function Jg(t,e){return e?it(e):(O(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Po extends Mu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return vn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return vn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return vn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Xg(t){return kg(t.auth,new Po(t),t.bypassAuthState)}function Zg(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),Ag(n,new Po(t),t.bypassAuthState)}async function em(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),Ng(n,new Po(t),t.bypassAuthState)}/**
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
 */class qu{constructor(e,n,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Xg;case"linkViaPopup":case"linkViaRedirect":return em;case"reauthViaPopup":case"reauthViaRedirect":return Zg;default:lt(this.auth,"internal-error")}}resolve(e){ct(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ct(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const tm=new Ei(2e3,1e4);class fn extends qu{constructor(e,n,i,s,r){super(e,n,s,r),this.provider=i,this.authWindow=null,this.pollId=null,fn.currentPopupAction&&fn.currentPopupAction.cancel(),fn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return O(e,this.auth,"internal-error"),e}async onExecution(){ct(this.filter.length===1,"Popup operations only handle one event");const e=ko();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ye(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ye(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,fn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ye(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,tm.get())};e()}}fn.currentPopupAction=null;/**
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
 */const nm="pendingRedirect",er=new Map;class im extends qu{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=er.get(this.auth._key());if(!e){try{const i=await sm(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}er.set(this.auth._key(),e)}return this.bypassAuthState||er.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function sm(t,e){const n=om(e),i=rm(t);if(!await i._isAvailable())return!1;const s=await i._get(n)==="true";return await i._remove(n),s}function rm(t){return it(t._redirectPersistence)}function om(t){return Vi(nm,t.config.apiKey,t.name)}async function am(t,e,n=!1){const i=Ao(t),s=Jg(i,e),o=await new im(i,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
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
 */const lm=10*60*1e3;class cm{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!um(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!zu(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(Ye(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=lm&&this.cachedEventUids.clear(),this.cachedEventUids.has(fl(e))}saveEventToCache(e){this.cachedEventUids.add(fl(e)),this.lastProcessedEventTime=Date.now()}}function fl(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function zu({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function um(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return zu(t);default:return!1}}/**
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
 */async function hm(t,e={}){return As(t,"GET","/v1/projects",e)}/**
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
 */const dm=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,fm=/^https?/;async function pm(t){if(t.config.emulator)return;const{authorizedDomains:e}=await hm(t);for(const n of e)try{if(_m(n))return}catch{}lt(t,"unauthorized-domain")}function _m(t){const e=Pr(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!fm.test(n))return!1;if(dm.test(t))return i===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const gm=new Ei(3e4,6e4);function pl(){const t=Qe().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function mm(t){return new Promise((e,n)=>{var i,s,r;function o(){pl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{pl(),n(Ye(t,"network-request-failed"))},timeout:gm.get()})}if(!((s=(i=Qe().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=Qe().gapi)===null||r===void 0)&&r.load)o();else{const a=Qg("iframefcb");return Qe()[a]=()=>{gapi.load?o():n(Ye(t,"network-request-failed"))},Yg(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw $i=null,e})}let $i=null;function ym(t){return $i=$i||mm(t),$i}/**
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
 */const vm=new Ei(5e3,15e3),Em="__/auth/iframe",Cm="emulator/auth/iframe",Im={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},bm=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function wm(t){const e=t.config;O(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?So(e,Cm):`https://${t.config.authDomain}/${Em}`,i={apiKey:e.apiKey,appName:t.name,v:vi},s=bm.get(t.config.apiHost);s&&(i.eid=s);const r=t._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${Fn(i).slice(1)}`}async function Tm(t){const e=await ym(t),n=Qe().gapi;return O(n,t,"internal-error"),e.open({where:document.body,url:wm(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Im,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=Ye(t,"network-request-failed"),a=Qe().setTimeout(()=>{r(o)},vm.get());function l(){Qe().clearTimeout(a),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const Sm={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Rm=500,Nm=600,Am="_blank",km="http://localhost";class _l{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Pm(t,e,n,i=Rm,s=Nm){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Sm),{width:i.toString(),height:s.toString(),top:r,left:o}),c=ve().toLowerCase();n&&(a=Ru(c)?Am:n),Su(c)&&(e=e||km,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[g,C])=>`${f}${g}=${C},`,"");if(Cg(c)&&a!=="_self")return xm(e||"",a),new _l(null);const h=window.open(e||"",a,u);O(h,t,"popup-blocked");try{h.focus()}catch{}return new _l(h)}function xm(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const Om="__/auth/handler",Mm="emulator/auth/handler";function gl(t,e,n,i,s,r){O(t.config.authDomain,t,"auth-domain-config-required"),O(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:vi,eventId:s};if(e instanceof Du){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Nr(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(r||{}))o[l]=c}if(e instanceof Ci){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${Dm(t)}?${Fn(a).slice(1)}`}function Dm({config:t}){return t.emulator?So(t,Mm):`https://${t.authDomain}/${Om}`}/**
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
 */const tr="webStorageSupport";class Lm{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Bu,this._completeRedirectFn=am}async _openPopup(e,n,i,s){var r;ct((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=gl(e,n,i,Pr(),s);return Pm(e,o,ko())}async _openRedirect(e,n,i,s){return await this._originValidation(e),Ug(gl(e,n,i,Pr(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:r}=this.eventManagers[n];return s?Promise.resolve(s):(ct(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await Tm(e),i=new cm(e);return n.register("authEvent",s=>(O(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(tr,{type:tr},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[tr];o!==void 0&&n(!!o),lt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=pm(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return xu()||No()||ks()}}const Fm=Lm;var ml="@firebase/auth",yl="0.19.12";/**
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
 */class Um{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{var s;e(((s=i)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){O(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Wm(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Bm(t){Sn(new Yt("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=i.options;return((a,l)=>{O(r&&!r.includes(":"),"invalid-api-key",{appName:a.name}),O(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:r,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ou(t)},u=new wg(a,l,c);return sg(u,n),u})(i,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),Sn(new Yt("auth-internal",e=>{const n=Ao(e.getProvider("auth").getImmediate());return(i=>new Um(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),St(ml,yl,Wm(t)),St(ml,yl,"esm2017")}/**
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
 */function Hm(t=pu()){const e=bo(t,"auth");return e.isInitialized()?e.getImmediate():ig(t,{popupRedirectResolver:Fm,persistence:[Kg,Dg,Bu]})}Bm("Browser");const vl="@firebase/database",El="0.12.8";/**
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
 */let Ku="";function Vm(t){Ku=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ue(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:li(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return dt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gu=function(t){try{if(typeof window!="undefined"&&typeof window[t]!="undefined"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new $m(e)}}catch{}return new jm},Bt=Gu("localStorage"),Or=Gu("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const En=new Co("@firebase/database"),qm=function(){let t=1;return function(){return t++}}(),Yu=function(t){const e=n_(t),n=new Xp;n.update(e);const i=n.digest();return yo.encodeByteArray(i)},bi=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=bi.apply(null,i):typeof i=="object"?e+=ue(i):e+=i,e+=" "}return e};let Kt=null,Cl=!0;const zm=function(t,e){E(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(En.logLevel=z.VERBOSE,Kt=En.log.bind(En),e&&Or.set("logging_enabled",!0)):typeof t=="function"?Kt=t:(Kt=null,Or.remove("logging_enabled"))},ge=function(...t){if(Cl===!0&&(Cl=!1,Kt===null&&Or.get("logging_enabled")===!0&&zm(!0)),Kt){const e=bi.apply(null,t);Kt(e)}},wi=function(t){return function(...e){ge(t,...e)}},Mr=function(...t){const e="FIREBASE INTERNAL ERROR: "+bi(...t);En.error(e)},Xt=function(...t){const e=`FIREBASE FATAL ERROR: ${bi(...t)}`;throw En.error(e),new Error(e)},Se=function(...t){const e="FIREBASE WARNING: "+bi(...t);En.warn(e)},Km=function(){typeof window!="undefined"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Se("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Qu=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Gm=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Rn="[MIN_NAME]",Zt="[MAX_NAME]",Un=function(t,e){if(t===e)return 0;if(t===Rn||e===Zt)return-1;if(e===Rn||t===Zt)return 1;{const n=Il(t),i=Il(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},Ym=function(t,e){return t===e?0:t<e?-1:1},$n=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ue(e))},xo=function(t){if(typeof t!="object"||t===null)return ue(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=ue(e[i]),n+=":",n+=xo(t[e[i]]);return n+="}",n},Ju=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let s=0;s<n;s+=e)s+e>n?i.push(t.substring(s,n)):i.push(t.substring(s,s+e));return i};function Re(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Xu=function(t){E(!Qu(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let s,r,o,a,l;t===0?(r=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),i),r=a+i,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-i-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let f=parseInt(u.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},Qm=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Jm=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Xm(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const i=new Error(t+" at "+e._path.toString()+": "+n);return i.code=t.toUpperCase(),i}const Zm=new RegExp("^-?(0*)\\d{1,10}$"),ey=-2147483648,ty=2147483647,Il=function(t){if(Zm.test(t)){const e=Number(t);if(e>=ey&&e<=ty)return e}return null},Wn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Se("Exception was thrown by user callback.",n),e},Math.floor(0))}},ny=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ei=function(t,e){const n=setTimeout(t,e);return typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class iy{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){Se(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ge("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Se(e)}}class Dr{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Dr.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oo="5",Zu="v",eh="s",th="r",nh="f",ih=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,sh="ls",ry="p",Lr="ac",rh="websocket",oh="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(e,n,i,s,r=!1,o="",a=!1){this.secure=n,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Bt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Bt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function ay(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function ah(t,e,n){E(typeof e=="string","typeof type must == string"),E(typeof n=="object","typeof params must == object");let i;if(e===rh)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===oh)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);ay(t)&&(n.ns=t.namespace);const s=[];return Re(n,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(){this.counters_={}}incrementCounter(e,n=1){dt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Hp(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nr={},ir={};function Mo(t){const e=t.toString();return nr[e]||(nr[e]=new ly),nr[e]}function cy(t,e){const n=t.toString();return ir[n]||(ir[n]=e()),ir[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uy{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&Wn(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bl="start",hy="close",dy="pLPCommand",fy="pRTLPCB",lh="id",ch="pw",uh="ser",py="cb",_y="seg",gy="ts",my="d",yy="dframe",hh=1870,dh=30,vy=hh-dh,Ey=25e3,Cy=3e4;class pn{constructor(e,n,i,s,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=wi(e),this.stats_=Mo(n),this.urlFn=l=>(this.appCheckToken&&(l[Lr]=this.appCheckToken),ah(n,oh,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new uy(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Cy)),Gm(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Do((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===bl)this.id=a,this.password=l;else if(o===hy)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[bl]="t",i[uh]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[py]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Zu]=Oo,this.transportSessionId&&(i[eh]=this.transportSessionId),this.lastSessionId&&(i[sh]=this.lastSessionId),this.applicationId&&(i[ry]=this.applicationId),this.appCheckToken&&(i[Lr]=this.appCheckToken),typeof location!="undefined"&&location.hostname&&ih.test(location.hostname)&&(i[th]=nh);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){pn.forceAllow_=!0}static forceDisallow(){pn.forceDisallow_=!0}static isAvailable(){return pn.forceAllow_?!0:!pn.forceDisallow_&&typeof document!="undefined"&&document.createElement!=null&&!Qm()&&!Jm()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ue(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=ru(n),s=Ju(i,vy);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[yy]="t",i[lh]=e,i[ch]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ue(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Do{constructor(e,n,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=qm(),window[dy+this.uniqueCallbackIdentifier]=e,window[fy+this.uniqueCallbackIdentifier]=n,this.myIFrame=Do.createIFrame_();let r="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const a=document.domain;r='<script>document.domain="'+a+'";<\/script>'}const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){ge("frame writing exception"),a.stack&&ge(a.stack),ge(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ge("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[lh]=this.myID,e[ch]=this.myPW,e[uh]=this.currentSerial;let n=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+dh+i.length<=hh;){const o=this.pendingSegs.shift();i=i+"&"+_y+s+"="+o.seg+"&"+gy+s+"="+o.ts+"&"+my+s+"="+o.d,s++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(i,Math.floor(Ey)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{ge("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iy=16384,by=45e3;let rs=null;typeof MozWebSocket!="undefined"?rs=MozWebSocket:typeof WebSocket!="undefined"&&(rs=WebSocket);class We{constructor(e,n,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=wi(this.connId),this.stats_=Mo(n),this.connURL=We.connectionURL_(n,o,a,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,s){const r={};return r[Zu]=Oo,typeof location!="undefined"&&location.hostname&&ih.test(location.hostname)&&(r[th]=nh),n&&(r[eh]=n),i&&(r[sh]=i),s&&(r[Lr]=s),ah(e,rh,r)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Bt.set("previous_websocket_failure",!0);try{if(!cu()){const i={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new rs(this.connURL,[],i)}}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){We.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator!="undefined"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&rs!==null&&!We.forceDisallow_}static previouslyFailed(){return Bt.isInMemoryStorage||Bt.get("previous_websocket_failure")===!0}markConnectionHealthy(){Bt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=li(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(E(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=ue(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Ju(n,Iy);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(by))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}We.responsesRequiredToBeHealthy=2;We.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[pn,We]}initTransports_(e){const n=We&&We.isAvailable();let i=n&&!We.previouslyFailed();if(e.webSocketOnly&&(n||Se("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[We];else{const s=this.transports_=[];for(const r of Lo.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r)}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wy=6e4,Ty=5e3,Sy=10*1024,Ry=100*1024,sr="t",wl="d",Ny="s",Tl="r",Ay="e",Sl="o",Rl="a",Nl="n",Al="p",ky="h";class Py{constructor(e,n,i,s,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=wi("c:"+this.id+":"),this.transportManager_=new Lo(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=ei(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Ry?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Sy?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(sr in e){const n=e[sr];n===Rl?this.upgradeIfSecondaryHealthy_():n===Tl?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Sl&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=$n("t",e),i=$n("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Al,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Rl,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Nl,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=$n("t",e),i=$n("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=$n(sr,e);if(wl in e){const i=e[wl];if(n===ky)this.onHandshake_(i);else if(n===Nl){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Ny?this.onConnectionShutdown_(i):n===Tl?this.onReset_(i):n===Ay?Mr("Server Error: "+i):n===Sl?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Mr("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Oo!==i&&Se("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),ei(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(wy))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ei(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Ty))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Al,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Bt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{put(e,n,i,s){}merge(e,n,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(e){this.allowedEvents_=e,this.listeners_={},E(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const s=this.getInitialEvent(e);s&&n.apply(i,s)}off(e,n,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===n&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){E(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os extends ph{constructor(){super(["online"]),this.online_=!0,typeof window!="undefined"&&typeof window.addEventListener!="undefined"&&!vo()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new os}getInitialEvent(e){return E(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kl=32,Pl=768;class G{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function V(){return new G("")}function L(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function kt(t){return t.pieces_.length-t.pieceNum_}function Y(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new G(t.pieces_,e)}function _h(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function xy(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function gh(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function mh(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new G(e,0)}function ae(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof G)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&n.push(i[s])}return new G(n,0)}function W(t){return t.pieceNum_>=t.pieces_.length}function we(t,e){const n=L(t),i=L(e);if(n===null)return e;if(n===i)return we(Y(t),Y(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Fo(t,e){if(kt(t)!==kt(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function He(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(kt(t)>kt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class Oy{constructor(e,n){this.errorPrefix_=n,this.parts_=gh(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Ns(this.parts_[i]);yh(this)}}function My(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Ns(e),yh(t)}function Dy(t){const e=t.parts_.pop();t.byteLength_-=Ns(e),t.parts_.length>0&&(t.byteLength_-=1)}function yh(t){if(t.byteLength_>Pl)throw new Error(t.errorPrefix_+"has a key path longer than "+Pl+" bytes ("+t.byteLength_+").");if(t.parts_.length>kl)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+kl+") or object contains a cycle "+Lt(t))}function Lt(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo extends ph{constructor(){super(["visible"]);let e,n;typeof document!="undefined"&&typeof document.addEventListener!="undefined"&&(typeof document.hidden!="undefined"?(n="visibilitychange",e="hidden"):typeof document.mozHidden!="undefined"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden!="undefined"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden!="undefined"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new Uo}getInitialEvent(e){return E(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jn=1e3,Ly=60*5*1e3,Fy=3*1e3,xl=30*1e3,Uy=1.3,Wy=3e4,By="server_kill",Ol=3;class ot extends fh{constructor(e,n,i,s,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=ot.nextPersistentConnectionId_++,this.log_=wi("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=jn,this.maxReconnectDelay_=Ly,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!cu())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Uo.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&os.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const s=++this.requestNumber_,r={r:s,a:e,b:n};this.log_(ue(r)),E(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const n=new Rs,i={p:e._path.toString(),q:e._queryObject},s={action:"g",request:i,onComplete:o=>{const a=o.d;o.s==="ok"?(this.onDataUpdate_(i.p,a,!1,null),n.resolve(a)):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_||setTimeout(()=>{const o=this.outstandingGets_[r];o===void 0||s!==o||(delete this.outstandingGets_[r],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),this.log_("get "+r+" timed out on connection"),n.reject(new Error("Client is offline.")))},Fy),this.connected_&&this.sendGet_(r),n.promise}listen(e,n,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),E(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;ot.warnOnListenWarnings_(l,n),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&dt(e,"w")){const i=Tn(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Se(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Jp(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=xl)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Qp(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,n)}sendUnlisten_(e,n,i,s){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,s){const r={p:n,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,i,s){this.putInternal("p",e,n,i,s)}merge(e,n,i,s){this.putInternal("m",e,n,i,s)}putInternal(e,n,i,s,r){this.initConnection_();const o={p:n,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ue(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Mr("Unrecognized action received from server: "+ue(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){E(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=jn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=jn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Wy&&(this.reconnectDelay_=jn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Uy)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+ot.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(h){E(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?ge("getToken() completed but was canceled"):(ge("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,a=new Py(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,g=>{Se(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(By)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Se(h),l())}}}interrupt(e){ge("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ge("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Nr(this.interruptReasons_)&&(this.reconnectDelay_=jn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(r=>xo(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const i=new G(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(n),r.delete(n),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,n){ge("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ol&&(this.reconnectDelay_=xl,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ge("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ol&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Ku.replace(/\./g,"-")]=1,vo()?e["framework.cordova"]=1:lu()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=os.getInstance().currentlyOnline();return Nr(this.interruptReasons_)&&e}}ot.nextPersistentConnectionId_=0;ot.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Os{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new F(Rn,e),s=new F(Rn,n);return this.compare(i,s)!==0}minPost(){return F.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mi;class vh extends Os{static get __EMPTY_NODE(){return Mi}static set __EMPTY_NODE(e){Mi=e}compare(e,n){return Un(e.name,n.name)}isDefinedOn(e){throw Dn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return F.MIN}maxPost(){return new F(Zt,Mi)}makePost(e,n){return E(typeof e=="string","KeyIndex indexValue must always be a string."),new F(e,Mi)}toString(){return".key"}}const Cn=new vh;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e,n,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ce{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i!=null?i:ce.RED,this.left=s!=null?s:Te.EMPTY_NODE,this.right=r!=null?r:Te.EMPTY_NODE}copy(e,n,i,s,r){return new ce(e!=null?e:this.key,n!=null?n:this.value,i!=null?i:this.color,s!=null?s:this.left,r!=null?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Te.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,s;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return Te.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ce.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ce.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ce.RED=!0;ce.BLACK=!1;class Hy{copy(e,n,i,s,r){return this}insert(e,n,i){return new ce(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Te{constructor(e,n=Te.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Te(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ce.BLACK,null,null))}remove(e){return new Te(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ce.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,s=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Di(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Di(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Di(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Di(this.root_,null,this.comparator_,!0,e)}}Te.EMPTY_NODE=new Hy;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vy(t,e){return Un(t.name,e.name)}function Wo(t,e){return Un(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fr;function $y(t){Fr=t}const Eh=function(t){return typeof t=="number"?"number:"+Xu(t):"string:"+t},Ch=function(t){if(t.isLeafNode()){const e=t.val();E(typeof e=="string"||typeof e=="number"||typeof e=="object"&&dt(e,".sv"),"Priority must be a string or number.")}else E(t===Fr||t.isEmpty(),"priority of unexpected type.");E(t===Fr||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ml;class le{constructor(e,n=le.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,E(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Ch(this.priorityNode_)}static set __childrenNodeConstructor(e){Ml=e}static get __childrenNodeConstructor(){return Ml}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new le(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:le.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return W(e)?this:L(e)===".priority"?this.priorityNode_:le.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:le.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=L(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(E(i!==".priority"||kt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,le.__childrenNodeConstructor.EMPTY_NODE.updateChild(Y(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Eh(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Xu(this.value_):e+=this.value_,this.lazyHash_=Yu(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===le.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof le.__childrenNodeConstructor?-1:(E(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,s=le.VALUE_TYPE_ORDER.indexOf(n),r=le.VALUE_TYPE_ORDER.indexOf(i);return E(s>=0,"Unknown leaf type: "+n),E(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}le.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ih,bh;function jy(t){Ih=t}function qy(t){bh=t}class zy extends Os{compare(e,n){const i=e.node.getPriority(),s=n.node.getPriority(),r=i.compareTo(s);return r===0?Un(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return F.MIN}maxPost(){return new F(Zt,new le("[PRIORITY-POST]",bh))}makePost(e,n){const i=Ih(e);return new F(n,new le("[PRIORITY-POST]",i))}toString(){return".priority"}}const se=new zy;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ky=Math.log(2);class Gy{constructor(e){const n=r=>parseInt(Math.log(r)/Ky,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const as=function(t,e,n,i){t.sort(e);const s=function(l,c){const u=c-l;let h,f;if(u===0)return null;if(u===1)return h=t[l],f=n?n(h):h,new ce(f,h.node,ce.BLACK,null,null);{const g=parseInt(u/2,10)+l,C=s(l,g),S=s(g+1,c);return h=t[g],f=n?n(h):h,new ce(f,h.node,ce.BLACK,C,S)}},r=function(l){let c=null,u=null,h=t.length;const f=function(C,S){const N=h-C,U=h;h-=C;const re=s(N+1,U),Q=t[N],J=n?n(Q):Q;g(new ce(J,Q.node,S,null,re))},g=function(C){c?(c.left=C,c=C):(u=C,c=C)};for(let C=0;C<l.count;++C){const S=l.nextBitIsOne(),N=Math.pow(2,l.count-(C+1));S?f(N,ce.BLACK):(f(N,ce.BLACK),f(N,ce.RED))}return u},o=new Gy(t.length),a=r(o);return new Te(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rr;const cn={};class st{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return E(cn&&se,"ChildrenNode.ts has not been loaded"),rr=rr||new st({".priority":cn},{".priority":se}),rr}get(e){const n=Tn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Te?n:null}hasIndex(e){return dt(this.indexSet_,e.toString())}addIndex(e,n){E(e!==Cn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=n.getIterator(F.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=as(i,e.getCompare()):a=cn;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new st(u,c)}addToIndexes(e,n){const i=Xi(this.indexes_,(s,r)=>{const o=Tn(this.indexSet_,r);if(E(o,"Missing index implementation for "+r),s===cn)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(F.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),as(a,o.getCompare())}else return cn;else{const a=n.get(e.name);let l=s;return a&&(l=l.remove(new F(e.name,a))),l.insert(e,e.node)}});return new st(i,this.indexSet_)}removeFromIndexes(e,n){const i=Xi(this.indexes_,s=>{if(s===cn)return s;{const r=n.get(e.name);return r?s.remove(new F(e.name,r)):s}});return new st(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qn;class P{constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Ch(this.priorityNode_),this.children_.isEmpty()&&E(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return qn||(qn=new P(new Te(Wo),null,st.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||qn}updatePriority(e){return this.children_.isEmpty()?this:new P(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?qn:n}}getChild(e){const n=L(e);return n===null?this:this.getImmediateChild(n).getChild(Y(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(E(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new F(e,n);let s,r;n.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?qn:this.priorityNode_;return new P(s,o,r)}}updateChild(e,n){const i=L(e);if(i===null)return n;{E(L(e)!==".priority"||kt(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(Y(e),n);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,s=0,r=!0;if(this.forEachChild(se,(o,a)=>{n[o]=a.val(e),i++,r&&P.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Eh(this.getPriority().val())+":"),this.forEachChild(se,(n,i)=>{const s=i.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":Yu(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new F(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new F(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new F(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,F.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,F.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ti?-1:0}withIndex(e){if(e===Cn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new P(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Cn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(se),s=n.getIterator(se);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Cn?null:this.indexMap_.get(e.toString())}}P.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Yy extends P{constructor(){super(new Te(Wo),P.EMPTY_NODE,st.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return P.EMPTY_NODE}isEmpty(){return!1}}const Ti=new Yy;Object.defineProperties(F,{MIN:{value:new F(Rn,P.EMPTY_NODE)},MAX:{value:new F(Zt,Ti)}});vh.__EMPTY_NODE=P.EMPTY_NODE;le.__childrenNodeConstructor=P;$y(Ti);qy(Ti);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qy=!0;function fe(t,e=null){if(t===null)return P.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),E(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new le(n,fe(e))}if(!(t instanceof Array)&&Qy){const n=[];let i=!1;if(Re(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=fe(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),n.push(new F(o,l)))}}),n.length===0)return P.EMPTY_NODE;const r=as(n,Vy,o=>o.name,Wo);if(i){const o=as(n,se.getCompare());return new P(r,fe(e),new st({".priority":o},{".priority":se}))}else return new P(r,fe(e),st.Default)}else{let n=P.EMPTY_NODE;return Re(t,(i,s)=>{if(dt(t,i)&&i.substring(0,1)!=="."){const r=fe(s);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(i,r))}}),n.updatePriority(fe(e))}}jy(fe);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jy extends Os{constructor(e){super(),this.indexPath_=e,E(!W(e)&&L(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),s=this.extractChild(n.node),r=i.compareTo(s);return r===0?Un(e.name,n.name):r}makePost(e,n){const i=fe(e),s=P.EMPTY_NODE.updateChild(this.indexPath_,i);return new F(n,s)}maxPost(){const e=P.EMPTY_NODE.updateChild(this.indexPath_,Ti);return new F(Zt,e)}toString(){return gh(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy extends Os{compare(e,n){const i=e.node.compareTo(n.node);return i===0?Un(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return F.MIN}maxPost(){return F.MAX}makePost(e,n){const i=fe(e);return new F(n,i)}toString(){return".value"}}const Zy=new Xy;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dl="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",ev=function(){let t=0;const e=[];return function(n){const i=n===t;t=n;let s;const r=new Array(8);for(s=7;s>=0;s--)r[s]=Dl.charAt(n%64),n=Math.floor(n/64);E(n===0,"Cannot push at time == 0");let o=r.join("");if(i){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)o+=Dl.charAt(e[s]);return E(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wh(t){return{type:"value",snapshotNode:t}}function Nn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function di(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function fi(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function tv(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(e){this.index_=e}updateChild(e,n,i,s,r,o){E(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(s).equals(i.getChild(s))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(n)?o.trackChildChange(di(n,a)):E(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Nn(n,i)):o.trackChildChange(fi(n,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(n,i).withIndex(this.index_)}updateFullNode(e,n,i){return i!=null&&(e.isLeafNode()||e.forEachChild(se,(s,r)=>{n.hasChild(s)||i.trackChildChange(di(s,r))}),n.isLeafNode()||n.forEachChild(se,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(fi(s,r,o))}else i.trackChildChange(Nn(s,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?P.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e){this.indexedFilter_=new Bo(e.getIndex()),this.index_=e.getIndex(),this.startPost_=pi.getStartPost_(e),this.endPost_=pi.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,i,s,r,o){return this.matches(new F(n,i))||(i=P.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,i,s,r,o)}updateFullNode(e,n,i){n.isLeafNode()&&(n=P.EMPTY_NODE);let s=n.withIndex(this.index_);s=s.updatePriority(P.EMPTY_NODE);const r=this;return n.forEachChild(se,(o,a)=>{r.matches(new F(o,a))||(s=s.updateImmediateChild(o,P.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{constructor(e){this.rangedFilter_=new pi(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,i,s,r,o){return this.rangedFilter_.matches(new F(n,i))||(i=P.EMPTY_NODE),e.getImmediateChild(n).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,i,s,r,o):this.fullLimitUpdateChild_(e,n,i,r,o)}updateFullNode(e,n,i){let s;if(n.isLeafNode()||n.isEmpty())s=P.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){s=P.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();let l;if(this.reverse_?l=this.index_.compare(this.rangedFilter_.getStartPost(),a)<=0:l=this.index_.compare(a,this.rangedFilter_.getEndPost())<=0,l)s=s.updateImmediateChild(a.name,a.node),o++;else break}}else{s=n.withIndex(this.index_),s=s.updatePriority(P.EMPTY_NODE);let r,o,a,l;if(this.reverse_){l=s.getReverseIterator(this.index_),r=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const h=this.index_.getCompare();a=(f,g)=>h(g,f)}else l=s.getIterator(this.index_),r=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),a=this.index_.getCompare();let c=0,u=!1;for(;l.hasNext();){const h=l.getNext();!u&&a(r,h)<=0&&(u=!0),u&&c<this.limit_&&a(h,o)<=0?c++:s=s.updateImmediateChild(h.name,P.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,i,s,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(f,g)=>h(g,f)}else o=this.index_.getCompare();const a=e;E(a.numChildren()===this.limit_,"");const l=new F(n,i),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const h=a.getImmediateChild(n);let f=s.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=s.getChildAfterChild(this.index_,f,this.reverse_);const g=f==null?1:o(f,l);if(u&&!i.isEmpty()&&g>=0)return r!=null&&r.trackChildChange(fi(n,i,h)),a.updateImmediateChild(n,i);{r!=null&&r.trackChildChange(di(n,h));const S=a.updateImmediateChild(n,P.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r!=null&&r.trackChildChange(Nn(f.name,f.node)),S.updateImmediateChild(f.name,f.node)):S}}else return i.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(di(c.name,c.node)),r.trackChildChange(Nn(n,i))),a.updateImmediateChild(n,i).updateImmediateChild(c.name,P.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=se}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return E(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return E(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Rn}hasEnd(){return this.endSet_}getIndexEndValue(){return E(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return E(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Zt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return E(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===se}copy(){const e=new Ho;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function iv(t){return t.loadsAllData()?new Bo(t.getIndex()):t.hasLimit()?new nv(t):new pi(t)}function Ll(t){const e={};if(t.isDefault())return e;let n;return t.index_===se?n="$priority":t.index_===Zy?n="$value":t.index_===Cn?n="$key":(E(t.index_ instanceof Jy,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ue(n),t.startSet_&&(e.startAt=ue(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+ue(t.indexStartName_))),t.endSet_&&(e.endAt=ue(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+ue(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Fl(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==se&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls extends fh{constructor(e,n,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=wi("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(E(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=ls.getListenId_(e,i),a={};this.listens_[o]=a;const l=Ll(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,i),Tn(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",s(f,null)}})}unlisten(e,n){const i=ls.getListenId_(e,n);delete this.listens_[i]}get(e){const n=Ll(e._queryParams),i=e._path.toString(),s=new Rs;return this.restRequest_(i+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(n.auth=s.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Fn(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=li(a.responseText)}catch{Se("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&Se("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv{constructor(){this.rootNode_=P.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cs(){return{value:null,children:new Map}}function Th(t,e,n){if(W(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=L(e);t.children.has(i)||t.children.set(i,cs());const s=t.children.get(i);e=Y(e),Th(s,e,n)}}function Ur(t,e,n){t.value!==null?n(e,t.value):rv(t,(i,s)=>{const r=new G(e.toString()+"/"+i);Ur(s,r,n)})}function rv(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ov{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Re(this.last_,(i,s)=>{n[i]=n[i]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ul=10*1e3,av=30*1e3,lv=5*60*1e3;class cv{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new ov(e);const i=Ul+(av-Ul)*Math.random();ei(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;Re(e,(s,r)=>{r>0&&dt(this.statsToReport_,s)&&(n[s]=r,i=!0)}),i&&this.server_.reportStats(n),ei(this.reportStats_.bind(this),Math.floor(Math.random()*2*lv))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ve;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ve||(Ve={}));function Sh(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Vo(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function $o(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=Ve.ACK_USER_WRITE,this.source=Sh()}operationForChild(e){if(W(this.path)){if(this.affectedTree.value!=null)return E(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new G(e));return new us(V(),n,this.revert)}}else return E(L(this.path)===e,"operationForChild called for unrelated child."),new us(Y(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e,n){this.source=e,this.path=n,this.type=Ve.LISTEN_COMPLETE}operationForChild(e){return W(this.path)?new _i(this.source,V()):new _i(this.source,Y(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=Ve.OVERWRITE}operationForChild(e){return W(this.path)?new en(this.source,V(),this.snap.getImmediateChild(e)):new en(this.source,Y(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=Ve.MERGE}operationForChild(e){if(W(this.path)){const n=this.children.subtree(new G(e));return n.isEmpty()?null:n.value?new en(this.source,V(),n.value):new gi(this.source,V(),n)}else return E(L(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new gi(this.source,Y(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(W(e))return this.isFullyInitialized()&&!this.filtered_;const n=L(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uv{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function hv(t,e,n,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(tv(o.childName,o.snapshotNode))}),zn(t,s,"child_removed",e,i,n),zn(t,s,"child_added",e,i,n),zn(t,s,"child_moved",r,i,n),zn(t,s,"child_changed",e,i,n),zn(t,s,"value",e,i,n),s}function zn(t,e,n,i,s,r){const o=i.filter(a=>a.type===n);o.sort((a,l)=>fv(t,a,l)),o.forEach(a=>{const l=dv(t,a,r);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function dv(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function fv(t,e,n){if(e.childName==null||n.childName==null)throw Dn("Should only compare child_ events.");const i=new F(e.childName,e.snapshotNode),s=new F(n.childName,n.snapshotNode);return t.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ms(t,e){return{eventCache:t,serverCache:e}}function ti(t,e,n,i){return Ms(new tn(e,n,i),t.serverCache)}function Rh(t,e,n,i){return Ms(t.eventCache,new tn(e,n,i))}function Wr(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function nn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let or;const pv=()=>(or||(or=new Te(Ym)),or);class ee{constructor(e,n=pv()){this.value=e,this.children=n}static fromObject(e){let n=new ee(null);return Re(e,(i,s)=>{n=n.set(new G(i),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:V(),value:this.value};if(W(e))return null;{const i=L(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(Y(e),n);return r!=null?{path:ae(new G(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(W(e))return this;{const n=L(e),i=this.children.get(n);return i!==null?i.subtree(Y(e)):new ee(null)}}set(e,n){if(W(e))return new ee(n,this.children);{const i=L(e),r=(this.children.get(i)||new ee(null)).set(Y(e),n),o=this.children.insert(i,r);return new ee(this.value,o)}}remove(e){if(W(e))return this.children.isEmpty()?new ee(null):new ee(null,this.children);{const n=L(e),i=this.children.get(n);if(i){const s=i.remove(Y(e));let r;return s.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,s),this.value===null&&r.isEmpty()?new ee(null):new ee(this.value,r)}else return this}}get(e){if(W(e))return this.value;{const n=L(e),i=this.children.get(n);return i?i.get(Y(e)):null}}setTree(e,n){if(W(e))return n;{const i=L(e),r=(this.children.get(i)||new ee(null)).setTree(Y(e),n);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new ee(this.value,o)}}fold(e){return this.fold_(V(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(ae(e,s),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,V(),n)}findOnPath_(e,n,i){const s=this.value?i(n,this.value):!1;if(s)return s;if(W(e))return null;{const r=L(e),o=this.children.get(r);return o?o.findOnPath_(Y(e),ae(n,r),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,V(),n)}foreachOnPath_(e,n,i){if(W(e))return this;{this.value&&i(n,this.value);const s=L(e),r=this.children.get(s);return r?r.foreachOnPath_(Y(e),ae(n,s),i):new ee(null)}}foreach(e){this.foreach_(V(),e)}foreach_(e,n){this.children.inorderTraversal((i,s)=>{s.foreach_(ae(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e){this.writeTree_=e}static empty(){return new je(new ee(null))}}function ni(t,e,n){if(W(e))return new je(new ee(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=we(s,e);return r=r.updateChild(o,n),new je(t.writeTree_.set(s,r))}else{const s=new ee(n),r=t.writeTree_.setTree(e,s);return new je(r)}}}function Wl(t,e,n){let i=t;return Re(n,(s,r)=>{i=ni(i,ae(e,s),r)}),i}function Bl(t,e){if(W(e))return je.empty();{const n=t.writeTree_.setTree(e,new ee(null));return new je(n)}}function Br(t,e){return sn(t,e)!=null}function sn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(we(n.path,e)):null}function Hl(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(se,(i,s)=>{e.push(new F(i,s))}):t.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new F(i,s.value))}),e}function Rt(t,e){if(W(e))return t;{const n=sn(t,e);return n!=null?new je(new ee(n)):new je(t.writeTree_.subtree(e))}}function Hr(t){return t.writeTree_.isEmpty()}function An(t,e){return Nh(V(),t.writeTree_,e)}function Nh(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(E(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):n=Nh(ae(t,s),r,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(ae(t,".priority"),i)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jo(t,e){return xh(e,t)}function _v(t,e,n,i,s){E(i>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:s}),s&&(t.visibleWrites=ni(t.visibleWrites,e,n)),t.lastWriteId=i}function gv(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function mv(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);E(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let s=i.visible,r=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&yv(a,i.path)?s=!1:He(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return vv(t),!0;if(i.snap)t.visibleWrites=Bl(t.visibleWrites,i.path);else{const a=i.children;Re(a,l=>{t.visibleWrites=Bl(t.visibleWrites,ae(i.path,l))})}return!0}else return!1}function yv(t,e){if(t.snap)return He(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&He(ae(t.path,n),e))return!0;return!1}function vv(t){t.visibleWrites=Ah(t.allWrites,Ev,V()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Ev(t){return t.visible}function Ah(t,e,n){let i=je.empty();for(let s=0;s<t.length;++s){const r=t[s];if(e(r)){const o=r.path;let a;if(r.snap)He(n,o)?(a=we(n,o),i=ni(i,a,r.snap)):He(o,n)&&(a=we(o,n),i=ni(i,V(),r.snap.getChild(a)));else if(r.children){if(He(n,o))a=we(n,o),i=Wl(i,a,r.children);else if(He(o,n))if(a=we(o,n),W(a))i=Wl(i,V(),r.children);else{const l=Tn(r.children,L(a));if(l){const c=l.getChild(Y(a));i=ni(i,V(),c)}}}else throw Dn("WriteRecord should have .snap or .children")}}return i}function kh(t,e,n,i,s){if(!i&&!s){const r=sn(t.visibleWrites,e);if(r!=null)return r;{const o=Rt(t.visibleWrites,e);if(Hr(o))return n;if(n==null&&!Br(o,V()))return null;{const a=n||P.EMPTY_NODE;return An(o,a)}}}else{const r=Rt(t.visibleWrites,e);if(!s&&Hr(r))return n;if(!s&&n==null&&!Br(r,V()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(He(c.path,e)||He(e,c.path))},a=Ah(t.allWrites,o,e),l=n||P.EMPTY_NODE;return An(a,l)}}}function Cv(t,e,n){let i=P.EMPTY_NODE;const s=sn(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(se,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(n){const r=Rt(t.visibleWrites,e);return n.forEachChild(se,(o,a)=>{const l=An(Rt(r,new G(o)),a);i=i.updateImmediateChild(o,l)}),Hl(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=Rt(t.visibleWrites,e);return Hl(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function Iv(t,e,n,i,s){E(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=ae(e,n);if(Br(t.visibleWrites,r))return null;{const o=Rt(t.visibleWrites,r);return Hr(o)?s.getChild(n):An(o,s.getChild(n))}}function bv(t,e,n,i){const s=ae(e,n),r=sn(t.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(n)){const o=Rt(t.visibleWrites,s);return An(o,i.getNode().getImmediateChild(n))}else return null}function wv(t,e){return sn(t.visibleWrites,e)}function Tv(t,e,n,i,s,r,o){let a;const l=Rt(t.visibleWrites,e),c=sn(l,V());if(c!=null)a=c;else if(n!=null)a=An(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),f=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let g=f.getNext();for(;g&&u.length<s;)h(g,i)!==0&&u.push(g),g=f.getNext();return u}else return[]}function Sv(){return{visibleWrites:je.empty(),allWrites:[],lastWriteId:-1}}function hs(t,e,n,i){return kh(t.writeTree,t.treePath,e,n,i)}function qo(t,e){return Cv(t.writeTree,t.treePath,e)}function Vl(t,e,n,i){return Iv(t.writeTree,t.treePath,e,n,i)}function ds(t,e){return wv(t.writeTree,ae(t.treePath,e))}function Rv(t,e,n,i,s,r){return Tv(t.writeTree,t.treePath,e,n,i,s,r)}function zo(t,e,n){return bv(t.writeTree,t.treePath,e,n)}function Ph(t,e){return xh(ae(t.treePath,e),t.writeTree)}function xh(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nv{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;E(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),E(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(i,fi(i,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(i,di(i,s.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(i,Nn(i,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(i,fi(i,e.snapshotNode,s.oldSnap));else throw Dn("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const Oh=new Av;class Ko{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new tn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return zo(this.writes_,e,i)}}getChildAfterChild(e,n,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:nn(this.viewCache_),r=Rv(this.writes_,s,n,1,i,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kv(t){return{filter:t}}function Pv(t,e){E(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),E(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function xv(t,e,n,i,s){const r=new Nv;let o,a;if(n.type===Ve.OVERWRITE){const c=n;c.source.fromUser?o=Vr(t,e,c.path,c.snap,i,s,r):(E(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!W(c.path),o=fs(t,e,c.path,c.snap,i,s,a,r))}else if(n.type===Ve.MERGE){const c=n;c.source.fromUser?o=Mv(t,e,c.path,c.children,i,s,r):(E(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=$r(t,e,c.path,c.children,i,s,a,r))}else if(n.type===Ve.ACK_USER_WRITE){const c=n;c.revert?o=Fv(t,e,c.path,i,s,r):o=Dv(t,e,c.path,c.affectedTree,i,s,r)}else if(n.type===Ve.LISTEN_COMPLETE)o=Lv(t,e,n.path,i,r);else throw Dn("Unknown operation type: "+n.type);const l=r.getChanges();return Ov(e,o,l),{viewCache:o,changes:l}}function Ov(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Wr(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(wh(Wr(e)))}}function Mh(t,e,n,i,s,r){const o=e.eventCache;if(ds(i,n)!=null)return e;{let a,l;if(W(n))if(E(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=nn(e),u=c instanceof P?c:P.EMPTY_NODE,h=qo(i,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=hs(i,nn(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=L(n);if(c===".priority"){E(kt(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=Vl(i,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=Y(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=Vl(i,n,o.getNode(),l);f!=null?h=o.getNode().getImmediateChild(c).updateChild(u,f):h=o.getNode().getImmediateChild(c)}else h=zo(i,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,s,r):a=o.getNode()}}return ti(e,a,o.isFullyInitialized()||W(n),t.filter.filtersNodes())}}function fs(t,e,n,i,s,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(W(n))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const g=l.getNode().updateChild(n,i);c=u.updateFullNode(l.getNode(),g,null)}else{const g=L(n);if(!l.isCompleteForPath(n)&&kt(n)>1)return e;const C=Y(n),N=l.getNode().getImmediateChild(g).updateChild(C,i);g===".priority"?c=u.updatePriority(l.getNode(),N):c=u.updateChild(l.getNode(),g,N,C,Oh,null)}const h=Rh(e,c,l.isFullyInitialized()||W(n),u.filtersNodes()),f=new Ko(s,h,r);return Mh(t,h,n,s,f,a)}function Vr(t,e,n,i,s,r,o){const a=e.eventCache;let l,c;const u=new Ko(s,e,r);if(W(n))c=t.filter.updateFullNode(e.eventCache.getNode(),i,o),l=ti(e,c,!0,t.filter.filtersNodes());else{const h=L(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),i),l=ti(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=Y(n),g=a.getNode().getImmediateChild(h);let C;if(W(f))C=i;else{const S=u.getCompleteChild(h);S!=null?_h(f)===".priority"&&S.getChild(mh(f)).isEmpty()?C=S:C=S.updateChild(f,i):C=P.EMPTY_NODE}if(g.equals(C))l=e;else{const S=t.filter.updateChild(a.getNode(),h,C,f,u,o);l=ti(e,S,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function $l(t,e){return t.eventCache.isCompleteForChild(e)}function Mv(t,e,n,i,s,r,o){let a=e;return i.foreach((l,c)=>{const u=ae(n,l);$l(e,L(u))&&(a=Vr(t,a,u,c,s,r,o))}),i.foreach((l,c)=>{const u=ae(n,l);$l(e,L(u))||(a=Vr(t,a,u,c,s,r,o))}),a}function jl(t,e,n){return n.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function $r(t,e,n,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;W(n)?c=i:c=new ee(null).setTree(n,i);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const g=e.serverCache.getNode().getImmediateChild(h),C=jl(t,g,f);l=fs(t,l,new G(h),C,s,r,o,a)}}),c.children.inorderTraversal((h,f)=>{const g=!e.serverCache.isCompleteForChild(h)&&f.value===void 0;if(!u.hasChild(h)&&!g){const C=e.serverCache.getNode().getImmediateChild(h),S=jl(t,C,f);l=fs(t,l,new G(h),S,s,r,o,a)}}),l}function Dv(t,e,n,i,s,r,o){if(ds(s,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(W(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return fs(t,e,n,l.getNode().getChild(n),s,r,a,o);if(W(n)){let c=new ee(null);return l.getNode().forEachChild(Cn,(u,h)=>{c=c.set(new G(u),h)}),$r(t,e,n,c,s,r,a,o)}else return e}else{let c=new ee(null);return i.foreach((u,h)=>{const f=ae(n,u);l.isCompleteForPath(f)&&(c=c.set(u,l.getNode().getChild(f)))}),$r(t,e,n,c,s,r,a,o)}}function Lv(t,e,n,i,s){const r=e.serverCache,o=Rh(e,r.getNode(),r.isFullyInitialized()||W(n),r.isFiltered());return Mh(t,o,n,i,Oh,s)}function Fv(t,e,n,i,s,r){let o;if(ds(i,n)!=null)return e;{const a=new Ko(i,e,s),l=e.eventCache.getNode();let c;if(W(n)||L(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=hs(i,nn(e));else{const h=e.serverCache.getNode();E(h instanceof P,"serverChildren would be complete if leaf node"),u=qo(i,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=L(n);let h=zo(i,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,Y(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,P.EMPTY_NODE,Y(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=hs(i,nn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||ds(i,V())!=null,ti(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uv{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new Bo(i.getIndex()),r=iv(i);this.processor_=kv(r);const o=n.serverCache,a=n.eventCache,l=s.updateFullNode(P.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(P.EMPTY_NODE,a.getNode(),null),u=new tn(l,o.isFullyInitialized(),s.filtersNodes()),h=new tn(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Ms(h,u),this.eventGenerator_=new uv(this.query_)}get query(){return this.query_}}function Wv(t){return t.viewCache_.serverCache.getNode()}function Bv(t,e){const n=nn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!W(e)&&!n.getImmediateChild(L(e)).isEmpty())?n.getChild(e):null}function ql(t){return t.eventRegistrations_.length===0}function Hv(t,e){t.eventRegistrations_.push(e)}function zl(t,e,n){const i=[];if(n){E(e==null,"A cancel should cancel all event registrations.");const s=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=s}else t.eventRegistrations_=[];return i}function Kl(t,e,n,i){e.type===Ve.MERGE&&e.source.queryId!==null&&(E(nn(t.viewCache_),"We should always have a full cache before handling merges"),E(Wr(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,r=xv(t.processor_,s,e,n,i);return Pv(t.processor_,r.viewCache),E(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Dh(t,r.changes,r.viewCache.eventCache.getNode(),null)}function Vv(t,e){const n=t.viewCache_.eventCache,i=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(se,(r,o)=>{i.push(Nn(r,o))}),n.isFullyInitialized()&&i.push(wh(n.getNode())),Dh(t,i,n.getNode(),e)}function Dh(t,e,n,i){const s=i?[i]:t.eventRegistrations_;return hv(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ps;class $v{constructor(){this.views=new Map}}function jv(t){E(!ps,"__referenceConstructor has already been defined"),ps=t}function qv(){return E(ps,"Reference.ts has not been loaded"),ps}function zv(t){return t.views.size===0}function Go(t,e,n,i){const s=e.source.queryId;if(s!==null){const r=t.views.get(s);return E(r!=null,"SyncTree gave us an op for an invalid query."),Kl(r,e,n,i)}else{let r=[];for(const o of t.views.values())r=r.concat(Kl(o,e,n,i));return r}}function Kv(t,e,n,i,s){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=hs(n,s?i:null),l=!1;a?l=!0:i instanceof P?(a=qo(n,i),l=!1):(a=P.EMPTY_NODE,l=!1);const c=Ms(new tn(a,l,!1),new tn(i,s,!1));return new Uv(e,c)}return o}function Gv(t,e,n,i,s,r){const o=Kv(t,e,i,s,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Hv(o,n),Vv(o,n)}function Yv(t,e,n,i){const s=e._queryIdentifier,r=[];let o=[];const a=Pt(t);if(s==="default")for(const[l,c]of t.views.entries())o=o.concat(zl(c,n,i)),ql(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(s);l&&(o=o.concat(zl(l,n,i)),ql(l)&&(t.views.delete(s),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!Pt(t)&&r.push(new(qv())(e._repo,e._path)),{removed:r,events:o}}function Lh(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function In(t,e){let n=null;for(const i of t.views.values())n=n||Bv(i,e);return n}function Fh(t,e){if(e._queryParams.loadsAllData())return Ds(t);{const i=e._queryIdentifier;return t.views.get(i)}}function Uh(t,e){return Fh(t,e)!=null}function Pt(t){return Ds(t)!=null}function Ds(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _s;function Qv(t){E(!_s,"__referenceConstructor has already been defined"),_s=t}function Jv(){return E(_s,"Reference.ts has not been loaded"),_s}let Xv=1;class Gl{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ee(null),this.pendingWriteTree_=Sv(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Wh(t,e,n,i,s){return _v(t.pendingWriteTree_,e,n,i,s),s?Si(t,new en(Sh(),e,n)):[]}function Ht(t,e,n=!1){const i=gv(t.pendingWriteTree_,e);if(mv(t.pendingWriteTree_,e)){let r=new ee(null);return i.snap!=null?r=r.set(V(),!0):Re(i.children,o=>{r=r.set(new G(o),!0)}),Si(t,new us(i.path,r,n))}else return[]}function Ls(t,e,n){return Si(t,new en(Vo(),e,n))}function Zv(t,e,n){const i=ee.fromObject(n);return Si(t,new gi(Vo(),e,i))}function eE(t,e){return Si(t,new _i(Vo(),e))}function tE(t,e,n){const i=Qo(t,n);if(i){const s=Jo(i),r=s.path,o=s.queryId,a=we(r,e),l=new _i($o(o),a);return Xo(t,r,l)}else return[]}function jr(t,e,n,i){const s=e._path,r=t.syncPointTree_.get(s);let o=[];if(r&&(e._queryIdentifier==="default"||Uh(r,e))){const a=Yv(r,e,n,i);zv(r)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const l=a.removed;o=a.events;const c=l.findIndex(h=>h._queryParams.loadsAllData())!==-1,u=t.syncPointTree_.findOnPath(s,(h,f)=>Pt(f));if(c&&!u){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const f=sE(h);for(let g=0;g<f.length;++g){const C=f[g],S=C.query,N=Vh(t,C);t.listenProvider_.startListening(ii(S),gs(t,S),N.hashFn,N.onComplete)}}}!u&&l.length>0&&!i&&(c?t.listenProvider_.stopListening(ii(e),null):l.forEach(h=>{const f=t.queryToTagMap.get(Fs(h));t.listenProvider_.stopListening(ii(h),f)})),rE(t,l)}return o}function nE(t,e,n,i){const s=Qo(t,i);if(s!=null){const r=Jo(s),o=r.path,a=r.queryId,l=we(o,e),c=new en($o(a),l,n);return Xo(t,o,c)}else return[]}function iE(t,e,n,i){const s=Qo(t,i);if(s){const r=Jo(s),o=r.path,a=r.queryId,l=we(o,e),c=ee.fromObject(n),u=new gi($o(a),l,c);return Xo(t,o,u)}else return[]}function Yl(t,e,n){const i=e._path;let s=null,r=!1;t.syncPointTree_.foreachOnPath(i,(h,f)=>{const g=we(h,i);s=s||In(f,g),r=r||Pt(f)});let o=t.syncPointTree_.get(i);o?(r=r||Pt(o),s=s||In(o,V())):(o=new $v,t.syncPointTree_=t.syncPointTree_.set(i,o));let a;s!=null?a=!0:(a=!1,s=P.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((f,g)=>{const C=In(g,V());C&&(s=s.updateImmediateChild(f,C))}));const l=Uh(o,e);if(!l&&!e._queryParams.loadsAllData()){const h=Fs(e);E(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const f=oE();t.queryToTagMap.set(h,f),t.tagToQueryMap.set(f,h)}const c=jo(t.pendingWriteTree_,i);let u=Gv(o,e,n,c,s,a);if(!l&&!r){const h=Fh(o,e);u=u.concat(aE(t,e,h))}return u}function Yo(t,e,n){const s=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=we(o,e),c=In(a,l);if(c)return c});return kh(s,e,r,n,!0)}function Si(t,e){return Bh(e,t.syncPointTree_,null,jo(t.pendingWriteTree_,V()))}function Bh(t,e,n,i){if(W(t.path))return Hh(t,e,n,i);{const s=e.get(V());n==null&&s!=null&&(n=In(s,V()));let r=[];const o=L(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=Ph(i,o);r=r.concat(Bh(a,l,c,u))}return s&&(r=r.concat(Go(s,t,i,n))),r}}function Hh(t,e,n,i){const s=e.get(V());n==null&&s!=null&&(n=In(s,V()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=Ph(i,o),u=t.operationForChild(o);u&&(r=r.concat(Hh(u,a,l,c)))}),s&&(r=r.concat(Go(s,t,i,n))),r}function Vh(t,e){const n=e.query,i=gs(t,n);return{hashFn:()=>(Wv(e)||P.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?tE(t,n._path,i):eE(t,n._path);{const r=Xm(s,n);return jr(t,n,null,r)}}}}function gs(t,e){const n=Fs(e);return t.queryToTagMap.get(n)}function Fs(t){return t._path.toString()+"$"+t._queryIdentifier}function Qo(t,e){return t.tagToQueryMap.get(e)}function Jo(t){const e=t.indexOf("$");return E(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new G(t.substr(0,e))}}function Xo(t,e,n){const i=t.syncPointTree_.get(e);E(i,"Missing sync point for query tag that we're tracking");const s=jo(t.pendingWriteTree_,e);return Go(i,n,s,null)}function sE(t){return t.fold((e,n,i)=>{if(n&&Pt(n))return[Ds(n)];{let s=[];return n&&(s=Lh(n)),Re(i,(r,o)=>{s=s.concat(o)}),s}})}function ii(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Jv())(t._repo,t._path):t}function rE(t,e){for(let n=0;n<e.length;++n){const i=e[n];if(!i._queryParams.loadsAllData()){const s=Fs(i),r=t.queryToTagMap.get(s);t.queryToTagMap.delete(s),t.tagToQueryMap.delete(r)}}}function oE(){return Xv++}function aE(t,e,n){const i=e._path,s=gs(t,e),r=Vh(t,n),o=t.listenProvider_.startListening(ii(e),s,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(i);if(s)E(!Pt(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,h)=>{if(!W(c)&&u&&Pt(u))return[Ds(u).query];{let f=[];return u&&(f=f.concat(Lh(u).map(g=>g.query))),Re(h,(g,C)=>{f=f.concat(C)}),f}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(ii(u),gs(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Zo(n)}node(){return this.node_}}class ea{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ae(this.path_,e);return new ea(this.syncTree_,n)}node(){return Yo(this.syncTree_,this.path_)}}const lE=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Ql=function(t,e,n){if(!t||typeof t!="object")return t;if(E(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return cE(t[".sv"],e,n);if(typeof t[".sv"]=="object")return uE(t[".sv"],e);E(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},cE=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:E(!1,"Unexpected server value: "+t)}},uE=function(t,e,n){t.hasOwnProperty("increment")||E(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&E(!1,"Unexpected increment value: "+i);const s=e.node();if(E(s!==null&&typeof s!="undefined","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},hE=function(t,e,n,i){return ta(e,new ea(n,t),i)},$h=function(t,e,n){return ta(t,new Zo(e),n)};function ta(t,e,n){const i=t.getPriority().val(),s=Ql(i,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=Ql(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new le(a,fe(s)):t}else{const o=t;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new le(s))),o.forEachChild(se,(a,l)=>{const c=ta(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function ia(t,e){let n=e instanceof G?e:new G(e),i=t,s=L(n);for(;s!==null;){const r=Tn(i.node.children,s)||{children:{},childCount:0};i=new na(s,i,r),n=Y(n),s=L(n)}return i}function Bn(t){return t.node.value}function jh(t,e){t.node.value=e,qr(t)}function qh(t){return t.node.childCount>0}function dE(t){return Bn(t)===void 0&&!qh(t)}function Us(t,e){Re(t.node.children,(n,i)=>{e(new na(n,t,i))})}function zh(t,e,n,i){n&&!i&&e(t),Us(t,s=>{zh(s,e,!0,i)}),n&&i&&e(t)}function fE(t,e,n){let i=n?t:t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Ri(t){return new G(t.parent===null?t.name:Ri(t.parent)+"/"+t.name)}function qr(t){t.parent!==null&&pE(t.parent,t.name,t)}function pE(t,e,n){const i=dE(n),s=dt(t.node.children,e);i&&s?(delete t.node.children[e],t.node.childCount--,qr(t)):!i&&!s&&(t.node.children[e]=n.node,t.node.childCount++,qr(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _E=/[\[\].#$\/\u0000-\u001F\u007F]/,gE=/[\[\].#$\u0000-\u001F\u007F]/,ar=10*1024*1024,Kh=function(t){return typeof t=="string"&&t.length!==0&&!_E.test(t)},Gh=function(t){return typeof t=="string"&&t.length!==0&&!gE.test(t)},mE=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Gh(t)},Yh=function(t,e,n,i){i&&e===void 0||sa(Eo(t,"value"),e,n)},sa=function(t,e,n){const i=n instanceof G?new Oy(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Lt(i));if(typeof e=="function")throw new Error(t+"contains a function "+Lt(i)+" with contents = "+e.toString());if(Qu(e))throw new Error(t+"contains "+e.toString()+" "+Lt(i));if(typeof e=="string"&&e.length>ar/3&&Ns(e)>ar)throw new Error(t+"contains a string greater than "+ar+" utf8 bytes "+Lt(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(Re(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Kh(o)))throw new Error(t+" contains an invalid key ("+o+") "+Lt(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);My(i,o),sa(t,a,i),Dy(i)}),s&&r)throw new Error(t+' contains ".value" child '+Lt(i)+" in addition to actual children.")}},Qh=function(t,e,n,i){if(!(i&&n===void 0)&&!Gh(n))throw new Error(Eo(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},yE=function(t,e,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Qh(t,e,n,i)},ra=function(t,e){if(L(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},vE=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Kh(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!mE(n))throw new Error(Eo(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EE{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function oa(t,e){let n=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();n!==null&&!Fo(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(s)}n&&t.eventLists_.push(n)}function Jh(t,e,n){oa(t,n),Xh(t,i=>Fo(i,e))}function ut(t,e,n){oa(t,n),Xh(t,i=>He(i,e)||He(e,i))}function Xh(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const s=t.eventLists_[i];if(s){const r=s.path;e(r)?(CE(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function CE(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();Kt&&ge("event: "+n.toString()),Wn(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IE="repo_interrupt",bE=25;class wE{constructor(e,n,i,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new EE,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=cs(),this.transactionQueueTree_=new na,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function TE(t,e,n){if(t.stats_=Mo(t.repoInfo_),t.forceRestClient_||ny())t.server_=new ls(t.repoInfo_,(i,s,r,o)=>{Jl(t,i,s,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Xl(t,!0),0);else{if(typeof n!="undefined"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ue(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new ot(t.repoInfo_,e,(i,s,r,o)=>{Jl(t,i,s,r,o)},i=>{Xl(t,i)},i=>{SE(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=cy(t.repoInfo_,()=>new cv(t.stats_,t.server_)),t.infoData_=new sv,t.infoSyncTree_=new Gl({startListening:(i,s,r,o)=>{let a=[];const l=t.infoData_.getNode(i._path);return l.isEmpty()||(a=Ls(t.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),la(t,"connected",!1),t.serverSyncTree_=new Gl({startListening:(i,s,r,o)=>(t.server_.listen(i,r,s,(a,l)=>{const c=o(a,l);ut(t.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{t.server_.unlisten(i,s)}})}function Zh(t){const n=t.infoData_.getNode(new G(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function aa(t){return lE({timestamp:Zh(t)})}function Jl(t,e,n,i,s){t.dataUpdateCount++;const r=new G(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(i){const l=Xi(n,c=>fe(c));o=iE(t.serverSyncTree_,r,l,s)}else{const l=fe(n);o=nE(t.serverSyncTree_,r,l,s)}else if(i){const l=Xi(n,c=>fe(c));o=Zv(t.serverSyncTree_,r,l)}else{const l=fe(n);o=Ls(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Ws(t,r)),ut(t.eventQueue_,a,o)}function Xl(t,e){la(t,"connected",e),e===!1&&NE(t)}function SE(t,e){Re(e,(n,i)=>{la(t,n,i)})}function la(t,e,n){const i=new G("/.info/"+e),s=fe(n);t.infoData_.updateSnapshot(i,s);const r=Ls(t.infoSyncTree_,i,s);ut(t.eventQueue_,i,r)}function ed(t){return t.nextWriteId_++}function RE(t,e,n,i,s){ca(t,"set",{path:e.toString(),value:n,priority:i});const r=aa(t),o=fe(n,i),a=Yo(t.serverSyncTree_,e),l=$h(o,a,r),c=ed(t),u=Wh(t.serverSyncTree_,e,l,c,!0);oa(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(f,g)=>{const C=f==="ok";C||Se("set at "+e+" failed: "+f);const S=Ht(t.serverSyncTree_,c,!C);ut(t.eventQueue_,e,S),PE(t,s,f,g)});const h=rd(t,e);Ws(t,h),ut(t.eventQueue_,h,[])}function NE(t){ca(t,"onDisconnectEvents");const e=aa(t),n=cs();Ur(t.onDisconnect_,V(),(s,r)=>{const o=hE(s,r,t.serverSyncTree_,e);Th(n,s,o)});let i=[];Ur(n,V(),(s,r)=>{i=i.concat(Ls(t.serverSyncTree_,s,r));const o=rd(t,s);Ws(t,o)}),t.onDisconnect_=cs(),ut(t.eventQueue_,V(),i)}function AE(t,e,n){let i;L(e._path)===".info"?i=Yl(t.infoSyncTree_,e,n):i=Yl(t.serverSyncTree_,e,n),Jh(t.eventQueue_,e._path,i)}function Zl(t,e,n){let i;L(e._path)===".info"?i=jr(t.infoSyncTree_,e,n):i=jr(t.serverSyncTree_,e,n),Jh(t.eventQueue_,e._path,i)}function kE(t){t.persistentConnection_&&t.persistentConnection_.interrupt(IE)}function ca(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ge(n,...e)}function PE(t,e,n,i){e&&Wn(()=>{if(n==="ok")e(null);else{const s=(n||"error").toUpperCase();let r=s;i&&(r+=": "+i);const o=new Error(r);o.code=s,e(o)}})}function td(t,e,n){return Yo(t.serverSyncTree_,e,n)||P.EMPTY_NODE}function ua(t,e=t.transactionQueueTree_){if(e||Bs(t,e),Bn(e)){const n=id(t,e);E(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&xE(t,Ri(e),n)}else qh(e)&&Us(e,n=>{ua(t,n)})}function xE(t,e,n){const i=n.map(c=>c.currentWriteId),s=td(t,e,i);let r=s;const o=s.hash();for(let c=0;c<n.length;c++){const u=n[c];E(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=we(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{ca(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(Ht(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Bs(t,ia(t.transactionQueueTree_,e)),ua(t,t.transactionQueueTree_),ut(t.eventQueue_,e,u);for(let f=0;f<h.length;f++)Wn(h[f])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Se("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Ws(t,e)}},o)}function Ws(t,e){const n=nd(t,e),i=Ri(n),s=id(t,n);return OE(t,s,i),i}function OE(t,e,n){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=we(n,l.path);let u=!1,h;if(E(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,s=s.concat(Ht(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=bE)u=!0,h="maxretry",s=s.concat(Ht(t.serverSyncTree_,l.currentWriteId,!0));else{const f=td(t,l.path,o);l.currentInputSnapshot=f;const g=e[a].update(f.val());if(g!==void 0){sa("transaction failed: Data returned ",g,l.path);let C=fe(g);typeof g=="object"&&g!=null&&dt(g,".priority")||(C=C.updatePriority(f.getPriority()));const N=l.currentWriteId,U=aa(t),re=$h(C,f,U);l.currentOutputSnapshotRaw=C,l.currentOutputSnapshotResolved=re,l.currentWriteId=ed(t),o.splice(o.indexOf(N),1),s=s.concat(Wh(t.serverSyncTree_,l.path,re,l.currentWriteId,l.applyLocally)),s=s.concat(Ht(t.serverSyncTree_,N,!0))}else u=!0,h="nodata",s=s.concat(Ht(t.serverSyncTree_,l.currentWriteId,!0))}ut(t.eventQueue_,n,s),s=[],u&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(h),!1,null))))}Bs(t,t.transactionQueueTree_);for(let a=0;a<i.length;a++)Wn(i[a]);ua(t,t.transactionQueueTree_)}function nd(t,e){let n,i=t.transactionQueueTree_;for(n=L(e);n!==null&&Bn(i)===void 0;)i=ia(i,n),e=Y(e),n=L(e);return i}function id(t,e){const n=[];return sd(t,e,n),n.sort((i,s)=>i.order-s.order),n}function sd(t,e,n){const i=Bn(e);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);Us(e,s=>{sd(t,s,n)})}function Bs(t,e){const n=Bn(e);if(n){let i=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[i]=n[s],i++);n.length=i,jh(e,n.length>0?n:void 0)}Us(e,i=>{Bs(t,i)})}function rd(t,e){const n=Ri(nd(t,e)),i=ia(t.transactionQueueTree_,e);return fE(i,s=>{lr(t,s)}),lr(t,i),zh(i,s=>{lr(t,s)}),n}function lr(t,e){const n=Bn(e);if(n){const i=[];let s=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(E(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(E(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(Ht(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?jh(e,void 0):n.length=r+1,ut(t.eventQueue_,Ri(e),s);for(let o=0;o<i.length;o++)Wn(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ME(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let s=n[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function DE(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Se(`Invalid query segment '${n}' in query '${t}'`)}return e}const ec=function(t,e){const n=LE(t),i=n.namespace;n.domain==="firebase.com"&&Xt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&Xt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Km();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new oy(n.host,n.secure,i,s,e,"",i!==n.subdomain),path:new G(n.pathString)}},LE=function(t){let e="",n="",i="",s="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(s=ME(t.substring(u,h)));const f=DE(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const g=e.slice(0,c);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const C=e.indexOf(".");i=e.substring(0,C).toLowerCase(),n=e.substring(C+1),r=i}"ns"in f&&(r=f.ns)}return{host:e,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(e,n,i,s){this.eventType=e,this.eventRegistration=n,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ue(this.snapshot.exportVal())}}class ad{constructor(e,n,i){this.eventRegistration=e,this.error=n,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return E(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class ha{constructor(e,n,i,s){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=s}get key(){return W(this._path)?null:_h(this._path)}get ref(){return new ft(this._repo,this._path)}get _queryIdentifier(){const e=Fl(this._queryParams),n=xo(e);return n==="{}"?"default":n}get _queryObject(){return Fl(this._queryParams)}isEqual(e){if(e=Je(e),!(e instanceof ha))return!1;const n=this._repo===e._repo,i=Fo(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+xy(this._path)}}class ft extends ha{constructor(e,n){super(e,n,new Ho,!1)}get parent(){const e=mh(this._path);return e===null?null:new ft(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class mi{constructor(e,n,i){this._node=e,this.ref=n,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new G(e),i=kn(this.ref,e);return new mi(this._node.getChild(n),i,se)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new mi(s,kn(this.ref,i),se)))}hasChild(e){const n=new G(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function da(t,e){return t=Je(t),t._checkNotDeleted("ref"),e!==void 0?kn(t._root,e):t._root}function kn(t,e){return t=Je(t),L(t._path)===null?yE("child","path",e,!1):Qh("child","path",e,!1),new ft(t._repo,ae(t._path,e))}function UE(t,e){t=Je(t),ra("push",t._path),Yh("push",e,t._path,!0);const n=Zh(t._repo),i=ev(n),s=kn(t,i),r=kn(t,i);let o;return e!=null?o=ld(r,e).then(()=>r):o=Promise.resolve(r),s.then=o.then.bind(o),s.catch=o.then.bind(o,void 0),s}function WE(t){return ra("remove",t._path),ld(t,null)}function ld(t,e){t=Je(t),ra("set",t._path),Yh("set",e,t._path,!1);const n=new Rs;return RE(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class fa{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const i=n._queryParams.getIndex();return new od("value",this,new mi(e.snapshotNode,new ft(n._repo,n._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new ad(this,e,n):null}matches(e){return e instanceof fa?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class pa{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new ad(this,e,n):null}createEvent(e,n){E(e.childName!=null,"Child events should have a childName.");const i=kn(new ft(n._repo,n._path),e.childName),s=n._queryParams.getIndex();return new od(e.type,this,new mi(e.snapshotNode,i,s),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof pa?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function BE(t,e,n,i,s){let r;if(typeof i=="object"&&(r=void 0,s=i),typeof i=="function"&&(r=i),s&&s.onlyOnce){const l=n,c=(u,h)=>{Zl(t._repo,t,a),l(u,h)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new FE(n,r||void 0),a=e==="value"?new fa(o):new pa(e,o);return AE(t._repo,t,a),()=>Zl(t._repo,t,a)}function HE(t,e,n,i){return BE(t,"value",e,n,i)}jv(ft);Qv(ft);/**
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
 */const VE="FIREBASE_DATABASE_EMULATOR_HOST",zr={};let $E=!1;function jE(t,e,n,i,s){let r=i||t.options.databaseURL;r===void 0&&(t.options.projectId||Xt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ge("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=ec(r,s),a=o.repoInfo,l,c;typeof process!="undefined"&&process.env&&(c=process.env[VE]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=ec(r,s),a=o.repoInfo):l=!o.repoInfo.secure;const u=s&&l?new Dr(Dr.OWNER):new sy(t.name,t.options,e);vE("Invalid Firebase Database URL",o),W(o.path)||Xt("Database URL must point to the root of a Firebase Database (not including a child path).");const h=zE(a,t,u,new iy(t.name,n));return new KE(h,t)}function qE(t,e){const n=zr[e];(!n||n[t.key]!==t)&&Xt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),kE(t),delete n[t.key]}function zE(t,e,n,i){let s=zr[e.name];s||(s={},zr[e.name]=s);let r=s[t.toURLString()];return r&&Xt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new wE(t,$E,n,i),s[t.toURLString()]=r,r}class KE{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(TE(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ft(this._repo,V())),this._rootInternal}_delete(){return this._rootInternal!==null&&(qE(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Xt("Cannot call "+e+" on a deleted database.")}}function GE(t=pu(),e){return bo(t,"database").getImmediate({identifier:e})}/**
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
 */function YE(t){Vm(vi),Sn(new Yt("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return jE(i,s,r,n)},"PUBLIC").setMultipleInstances(!0)),St(vl,El,t),St(vl,El,"esm2017")}ot.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};ot.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};YE();const QE={apiKey:"AIzaSyAsXHXd9Spu67AO6DV06x2E_EnVOIAu9UU",authDomain:"quick-retro.firebaseapp.com",projectId:"quick-retro",storageBucket:"quick-retro.appspot.com",messagingSenderId:"293134428599",appId:"1:293134428599:web:bad71d4fedbda8080ce032",databaseURL:"https://quick-retro-default-rtdb.europe-west1.firebasedatabase.app"},JE=$_(QE),_a=GE(JE);function XE(t){const e=Mn({});return HE(da(_a,t),n=>{Object.entries(n.val()).forEach(([i,s])=>{e[i]=s})}),e}function ZE(t,e,n){const i=da(_a,`${t}/columns/${e}/cards`);UE(i,n)}function eC(t,e,n){WE(da(_a,`${t}/columns/${e}/cards/${n}`))}function tC(){const t=Mn({}),e=Hm();return Rg(e).catch(n=>{console.error(n)}),Pg(e,n=>{console.log("auth status",n),n&&Object.entries(n).forEach(([i,s])=>{t[i]=s})}),t}var cd=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n};const nC=ho({props:{text:null,color:null,onDelete:null,id:null},setup(t){return nu(e=>({d60dc1b2:t.color})),(e,n)=>(jt(),oi("li",null,[tt("button",{onClick:n[0]||(n[0]=i=>t.onDelete(t.id))},"\u2716"),Qc(" "+nc(t.text),1)]))}});var iC=cd(nC,[["__scopeId","data-v-60e85460"]]);const sC=ho({props:{title:null,color:null,boardId:null,columnId:null,cards:null},setup(t){const{columnId:e,boardId:n}=t;nu(a=>({da01826e:t.color}));const i=Mn({inputText:""}),s=Ui("user");function r(a){a.preventDefault(),i.inputText.trim()!==""&&(!(s!=null&&s.uid)||(ZE(n,e,{text:i.inputText,author:s.uid}),i.inputText=""))}function o(a){eC(n,e,a)}return(a,l)=>(jt(),oi("section",null,[tt("h2",null,nc(t.title),1),tt("ul",null,[(jt(!0),oi(be,null,Jc(t.cards,(c,u)=>(jt(),Gc(iC,{id:u,text:c.text,color:t.color,onDelete:o},null,8,["id","text","color"]))),256))]),tt("form",{target:"#",onSubmit:r},[jf(tt("input",{"onUpdate:modelValue":l[0]||(l[0]=c=>zi(i).inputText=c)},null,512),[[Dp,zi(i).inputText]])],32)]))}});var rC=cd(sC,[["__scopeId","data-v-0c5389f8"]]);const oC=tt("h1",null,"\u{1F680} quick retro \u{1F680}",-1),aC=ho({setup(t){const e="1",n=XE(e),i=tC();return xc("user",i),(s,r)=>(jt(),oi(be,null,[oC,tt("main",null,[(jt(!0),oi(be,null,Jc(zi(n).columns,o=>(jt(),Gc(rC,{cards:o.cards,"column-id":o.id,"board-id":e,key:o.id,title:o.title,color:o.color},null,8,["cards","column-id","title","color"]))),128))])],64))}});Up(aC).mount("#app");
