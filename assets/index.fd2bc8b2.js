const yu=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}};yu();function Ji(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const Cu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",vu=Ji(Cu);function Ll(t){return!!t||t===""}function Zi(t){if(k(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=ae(s)?wu(s):Zi(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(ae(t))return t;if(ce(t))return t}}const Eu=/;(?![^(]*\))/g,bu=/:(.+)/;function wu(t){const e={};return t.split(Eu).forEach(n=>{if(n){const s=n.split(bu);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function er(t){let e="";if(ae(t))e=t;else if(k(t))for(let n=0;n<t.length;n++){const s=er(t[n]);s&&(e+=s+" ")}else if(ce(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Bl=t=>ae(t)?t:t==null?"":k(t)||ce(t)&&(t.toString===$l||!M(t.toString))?JSON.stringify(t,Hl,2):String(t),Hl=(t,e)=>e&&e.__v_isRef?Hl(t,e.value):Yt(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:Wl(e)?{[`Set(${e.size})`]:[...e.values()]}:ce(e)&&!k(e)&&!Vl(e)?String(e):e,q={},Gt=[],We=()=>{},Iu=()=>!1,Tu=/^on[^a-z]/,ks=t=>Tu.test(t),tr=t=>t.startsWith("onUpdate:"),ge=Object.assign,nr=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Su=Object.prototype.hasOwnProperty,H=(t,e)=>Su.call(t,e),k=Array.isArray,Yt=t=>Ms(t)==="[object Map]",Wl=t=>Ms(t)==="[object Set]",M=t=>typeof t=="function",ae=t=>typeof t=="string",sr=t=>typeof t=="symbol",ce=t=>t!==null&&typeof t=="object",Ul=t=>ce(t)&&M(t.then)&&M(t.catch),$l=Object.prototype.toString,Ms=t=>$l.call(t),xu=t=>Ms(t).slice(8,-1),Vl=t=>Ms(t)==="[object Object]",ir=t=>ae(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,os=Ji(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ds=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Nu=/-(\w)/g,tn=Ds(t=>t.replace(Nu,(e,n)=>n?n.toUpperCase():"")),Ru=/\B([A-Z])/g,cn=Ds(t=>t.replace(Ru,"-$1").toLowerCase()),jl=Ds(t=>t.charAt(0).toUpperCase()+t.slice(1)),si=Ds(t=>t?`on${jl(t)}`:""),us=(t,e)=>!Object.is(t,e),ls=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},hs=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},mi=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let mo;const Au=()=>mo||(mo=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let je;class Pu{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&je&&(this.parent=je,this.index=(je.scopes||(je.scopes=[])).push(this)-1)}run(e){if(this.active){const n=je;try{return je=this,e()}finally{je=n}}}on(){je=this}off(){je=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.active=!1}}}function Ou(t,e=je){e&&e.active&&e.effects.push(t)}const rr=t=>{const e=new Set(t);return e.w=0,e.n=0,e},ql=t=>(t.w&ft)>0,zl=t=>(t.n&ft)>0,ku=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=ft},Mu=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];ql(i)&&!zl(i)?i.delete(t):e[n++]=i,i.w&=~ft,i.n&=~ft}e.length=n}},yi=new WeakMap;let bn=0,ft=1;const Ci=30;let De;const St=Symbol(""),vi=Symbol("");class or{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Ou(this,s)}run(){if(!this.active)return this.fn();let e=De,n=at;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=De,De=this,at=!0,ft=1<<++bn,bn<=Ci?ku(this):yo(this),this.fn()}finally{bn<=Ci&&Mu(this),ft=1<<--bn,De=this.parent,at=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){De===this?this.deferStop=!0:this.active&&(yo(this),this.onStop&&this.onStop(),this.active=!1)}}function yo(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let at=!0;const Kl=[];function un(){Kl.push(at),at=!1}function hn(){const t=Kl.pop();at=t===void 0?!0:t}function Re(t,e,n){if(at&&De){let s=yi.get(t);s||yi.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=rr()),Gl(i)}}function Gl(t,e){let n=!1;bn<=Ci?zl(t)||(t.n|=ft,n=!ql(t)):n=!t.has(De),n&&(t.add(De),De.deps.push(t))}function Ze(t,e,n,s,i,r){const o=yi.get(t);if(!o)return;let l=[];if(e==="clear")l=[...o.values()];else if(n==="length"&&k(t))o.forEach((a,c)=>{(c==="length"||c>=s)&&l.push(a)});else switch(n!==void 0&&l.push(o.get(n)),e){case"add":k(t)?ir(n)&&l.push(o.get("length")):(l.push(o.get(St)),Yt(t)&&l.push(o.get(vi)));break;case"delete":k(t)||(l.push(o.get(St)),Yt(t)&&l.push(o.get(vi)));break;case"set":Yt(t)&&l.push(o.get(St));break}if(l.length===1)l[0]&&Ei(l[0]);else{const a=[];for(const c of l)c&&a.push(...c);Ei(rr(a))}}function Ei(t,e){for(const n of k(t)?t:[...t])(n!==De||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const Du=Ji("__proto__,__v_isRef,__isVue"),Yl=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(sr)),Fu=lr(),Lu=lr(!1,!0),Bu=lr(!0),Co=Hu();function Hu(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=$(this);for(let r=0,o=this.length;r<o;r++)Re(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map($)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){un();const s=$(this)[e].apply(this,n);return hn(),s}}),t}function lr(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?th:ea:e?Zl:Jl).get(s))return s;const o=k(s);if(!t&&o&&H(Co,i))return Reflect.get(Co,i,r);const l=Reflect.get(s,i,r);return(sr(i)?Yl.has(i):Du(i))||(t||Re(s,"get",i),e)?l:_e(l)?!o||!ir(i)?l.value:l:ce(l)?t?ta(l):qn(l):l}}const Wu=Ql(),Uu=Ql(!0);function Ql(t=!1){return function(n,s,i,r){let o=n[s];if(On(o)&&_e(o)&&!_e(i))return!1;if(!t&&!On(i)&&(na(i)||(i=$(i),o=$(o)),!k(n)&&_e(o)&&!_e(i)))return o.value=i,!0;const l=k(n)&&ir(s)?Number(s)<n.length:H(n,s),a=Reflect.set(n,s,i,r);return n===$(r)&&(l?us(i,o)&&Ze(n,"set",s,i):Ze(n,"add",s,i)),a}}function $u(t,e){const n=H(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Ze(t,"delete",e,void 0),s}function Vu(t,e){const n=Reflect.has(t,e);return(!sr(e)||!Yl.has(e))&&Re(t,"has",e),n}function ju(t){return Re(t,"iterate",k(t)?"length":St),Reflect.ownKeys(t)}const Xl={get:Fu,set:Wu,deleteProperty:$u,has:Vu,ownKeys:ju},qu={get:Bu,set(t,e){return!0},deleteProperty(t,e){return!0}},zu=ge({},Xl,{get:Lu,set:Uu}),ar=t=>t,Fs=t=>Reflect.getPrototypeOf(t);function Zn(t,e,n=!1,s=!1){t=t.__v_raw;const i=$(t),r=$(e);e!==r&&!n&&Re(i,"get",e),!n&&Re(i,"get",r);const{has:o}=Fs(i),l=s?ar:n?fr:hr;if(o.call(i,e))return l(t.get(e));if(o.call(i,r))return l(t.get(r));t!==i&&t.get(e)}function es(t,e=!1){const n=this.__v_raw,s=$(n),i=$(t);return t!==i&&!e&&Re(s,"has",t),!e&&Re(s,"has",i),t===i?n.has(t):n.has(t)||n.has(i)}function ts(t,e=!1){return t=t.__v_raw,!e&&Re($(t),"iterate",St),Reflect.get(t,"size",t)}function vo(t){t=$(t);const e=$(this);return Fs(e).has.call(e,t)||(e.add(t),Ze(e,"add",t,t)),this}function Eo(t,e){e=$(e);const n=$(this),{has:s,get:i}=Fs(n);let r=s.call(n,t);r||(t=$(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?us(e,o)&&Ze(n,"set",t,e):Ze(n,"add",t,e),this}function bo(t){const e=$(this),{has:n,get:s}=Fs(e);let i=n.call(e,t);i||(t=$(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&Ze(e,"delete",t,void 0),r}function wo(){const t=$(this),e=t.size!==0,n=t.clear();return e&&Ze(t,"clear",void 0,void 0),n}function ns(t,e){return function(s,i){const r=this,o=r.__v_raw,l=$(o),a=e?ar:t?fr:hr;return!t&&Re(l,"iterate",St),o.forEach((c,h)=>s.call(i,a(c),a(h),r))}}function ss(t,e,n){return function(...s){const i=this.__v_raw,r=$(i),o=Yt(r),l=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,c=i[t](...s),h=n?ar:e?fr:hr;return!e&&Re(r,"iterate",a?vi:St),{next(){const{value:u,done:d}=c.next();return d?{value:u,done:d}:{value:l?[h(u[0]),h(u[1])]:h(u),done:d}},[Symbol.iterator](){return this}}}}function rt(t){return function(...e){return t==="delete"?!1:this}}function Ku(){const t={get(r){return Zn(this,r)},get size(){return ts(this)},has:es,add:vo,set:Eo,delete:bo,clear:wo,forEach:ns(!1,!1)},e={get(r){return Zn(this,r,!1,!0)},get size(){return ts(this)},has:es,add:vo,set:Eo,delete:bo,clear:wo,forEach:ns(!1,!0)},n={get(r){return Zn(this,r,!0)},get size(){return ts(this,!0)},has(r){return es.call(this,r,!0)},add:rt("add"),set:rt("set"),delete:rt("delete"),clear:rt("clear"),forEach:ns(!0,!1)},s={get(r){return Zn(this,r,!0,!0)},get size(){return ts(this,!0)},has(r){return es.call(this,r,!0)},add:rt("add"),set:rt("set"),delete:rt("delete"),clear:rt("clear"),forEach:ns(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=ss(r,!1,!1),n[r]=ss(r,!0,!1),e[r]=ss(r,!1,!0),s[r]=ss(r,!0,!0)}),[t,n,e,s]}const[Gu,Yu,Qu,Xu]=Ku();function cr(t,e){const n=e?t?Xu:Qu:t?Yu:Gu;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(H(n,i)&&i in s?n:s,i,r)}const Ju={get:cr(!1,!1)},Zu={get:cr(!1,!0)},eh={get:cr(!0,!1)},Jl=new WeakMap,Zl=new WeakMap,ea=new WeakMap,th=new WeakMap;function nh(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function sh(t){return t.__v_skip||!Object.isExtensible(t)?0:nh(xu(t))}function qn(t){return On(t)?t:ur(t,!1,Xl,Ju,Jl)}function ih(t){return ur(t,!1,zu,Zu,Zl)}function ta(t){return ur(t,!0,qu,eh,ea)}function ur(t,e,n,s,i){if(!ce(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=sh(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function Qt(t){return On(t)?Qt(t.__v_raw):!!(t&&t.__v_isReactive)}function On(t){return!!(t&&t.__v_isReadonly)}function na(t){return!!(t&&t.__v_isShallow)}function sa(t){return Qt(t)||On(t)}function $(t){const e=t&&t.__v_raw;return e?$(e):t}function ia(t){return hs(t,"__v_skip",!0),t}const hr=t=>ce(t)?qn(t):t,fr=t=>ce(t)?ta(t):t;function rh(t){at&&De&&(t=$(t),Gl(t.dep||(t.dep=rr())))}function oh(t,e){t=$(t),t.dep&&Ei(t.dep)}function _e(t){return!!(t&&t.__v_isRef===!0)}function fs(t){return _e(t)?t.value:t}const lh={get:(t,e,n)=>fs(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return _e(i)&&!_e(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function ra(t){return Qt(t)?t:new Proxy(t,lh)}class ah{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new or(e,()=>{this._dirty||(this._dirty=!0,oh(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=$(this);return rh(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function ch(t,e,n=!1){let s,i;const r=M(t);return r?(s=t,i=We):(s=t.get,i=t.set),new ah(s,i,r||!i,n)}function ct(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){Ls(r,e,n)}return i}function Pe(t,e,n,s){if(M(t)){const r=ct(t,e,n,s);return r&&Ul(r)&&r.catch(o=>{Ls(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(Pe(t[r],e,n,s));return i}function Ls(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,l=n;for(;r;){const c=r.ec;if(c){for(let h=0;h<c.length;h++)if(c[h](t,o,l)===!1)return}r=r.parent}const a=e.appContext.config.errorHandler;if(a){ct(a,null,10,[t,o,l]);return}}uh(t,n,i,s)}function uh(t,e,n,s=!0){console.error(t)}let ds=!1,bi=!1;const Ne=[];let Ge=0;const Tn=[];let wn=null,jt=0;const Sn=[];let ot=null,qt=0;const oa=Promise.resolve();let dr=null,wi=null;function hh(t){const e=dr||oa;return t?e.then(this?t.bind(this):t):e}function fh(t){let e=Ge+1,n=Ne.length;for(;e<n;){const s=e+n>>>1;kn(Ne[s])<t?e=s+1:n=s}return e}function la(t){(!Ne.length||!Ne.includes(t,ds&&t.allowRecurse?Ge+1:Ge))&&t!==wi&&(t.id==null?Ne.push(t):Ne.splice(fh(t.id),0,t),aa())}function aa(){!ds&&!bi&&(bi=!0,dr=oa.then(ha))}function dh(t){const e=Ne.indexOf(t);e>Ge&&Ne.splice(e,1)}function ca(t,e,n,s){k(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?s+1:s))&&n.push(t),aa()}function ph(t){ca(t,wn,Tn,jt)}function _h(t){ca(t,ot,Sn,qt)}function pr(t,e=null){if(Tn.length){for(wi=e,wn=[...new Set(Tn)],Tn.length=0,jt=0;jt<wn.length;jt++)wn[jt]();wn=null,jt=0,wi=null,pr(t,e)}}function ua(t){if(Sn.length){const e=[...new Set(Sn)];if(Sn.length=0,ot){ot.push(...e);return}for(ot=e,ot.sort((n,s)=>kn(n)-kn(s)),qt=0;qt<ot.length;qt++)ot[qt]();ot=null,qt=0}}const kn=t=>t.id==null?1/0:t.id;function ha(t){bi=!1,ds=!0,pr(t),Ne.sort((n,s)=>kn(n)-kn(s));const e=We;try{for(Ge=0;Ge<Ne.length;Ge++){const n=Ne[Ge];n&&n.active!==!1&&ct(n,null,14)}}finally{Ge=0,Ne.length=0,ua(),ds=!1,dr=null,(Ne.length||Tn.length||Sn.length)&&ha(t)}}function gh(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||q;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const h=`${o==="modelValue"?"model":o}Modifiers`,{number:u,trim:d}=s[h]||q;d?i=n.map(g=>g.trim()):u&&(i=n.map(mi))}let l,a=s[l=si(e)]||s[l=si(tn(e))];!a&&r&&(a=s[l=si(cn(e))]),a&&Pe(a,t,6,i);const c=s[l+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Pe(c,t,6,i)}}function fa(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!M(t)){const a=c=>{const h=fa(c,e,!0);h&&(l=!0,ge(o,h))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!r&&!l?(s.set(t,null),null):(k(r)?r.forEach(a=>o[a]=null):ge(o,r),s.set(t,o),o)}function Bs(t,e){return!t||!ks(e)?!1:(e=e.slice(2).replace(/Once$/,""),H(t,e[0].toLowerCase()+e.slice(1))||H(t,cn(e))||H(t,e))}let Le=null,da=null;function ps(t){const e=Le;return Le=t,da=t&&t.type.__scopeId||null,e}function mh(t,e=Le,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&ko(-1);const r=ps(e),o=t(...i);return ps(r),s._d&&ko(1),o};return s._n=!0,s._c=!0,s._d=!0,s}function ii(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:l,attrs:a,emit:c,render:h,renderCache:u,data:d,setupState:g,ctx:w,inheritAttrs:x}=t;let N,B;const ue=ps(t);try{if(n.shapeFlag&4){const Z=i||s;N=qe(h.call(Z,Z,u,r,g,d,w)),B=a}else{const Z=e;N=qe(Z.length>1?Z(r,{attrs:a,slots:l,emit:c}):Z(r,null)),B=e.props?a:yh(a)}}catch(Z){xn.length=0,Ls(Z,t,1),N=ut(Xe)}let ne=N;if(B&&x!==!1){const Z=Object.keys(B),{shapeFlag:Te}=ne;Z.length&&Te&7&&(o&&Z.some(tr)&&(B=Ch(B,o)),ne=Pt(ne,B))}return n.dirs&&(ne.dirs=ne.dirs?ne.dirs.concat(n.dirs):n.dirs),n.transition&&(ne.transition=n.transition),N=ne,ps(ue),N}const yh=t=>{let e;for(const n in t)(n==="class"||n==="style"||ks(n))&&((e||(e={}))[n]=t[n]);return e},Ch=(t,e)=>{const n={};for(const s in t)(!tr(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function vh(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:a}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return s?Io(s,o,c):!!o;if(a&8){const h=e.dynamicProps;for(let u=0;u<h.length;u++){const d=h[u];if(o[d]!==s[d]&&!Bs(c,d))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?Io(s,o,c):!0:!!o;return!1}function Io(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Bs(n,r))return!0}return!1}function Eh({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const bh=t=>t.__isSuspense;function wh(t,e){e&&e.pendingBranch?k(t)?e.effects.push(...t):e.effects.push(t):_h(t)}function Ih(t,e){if(de){let n=de.provides;const s=de.parent&&de.parent.provides;s===n&&(n=de.provides=Object.create(s)),n[t]=e}}function ri(t,e,n=!1){const s=de||Le;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&M(e)?e.call(s.proxy):e}}function Th(t,e){return _r(t,null,{flush:"post"})}const To={};function oi(t,e,n){return _r(t,e,n)}function _r(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=q){const l=de;let a,c=!1,h=!1;if(_e(t)?(a=()=>t.value,c=na(t)):Qt(t)?(a=()=>t,s=!0):k(t)?(h=!0,c=t.some(Qt),a=()=>t.map(B=>{if(_e(B))return B.value;if(Qt(B))return wt(B);if(M(B))return ct(B,l,2)})):M(t)?e?a=()=>ct(t,l,2):a=()=>{if(!(l&&l.isUnmounted))return u&&u(),Pe(t,l,3,[d])}:a=We,e&&s){const B=a;a=()=>wt(B())}let u,d=B=>{u=N.onStop=()=>{ct(B,l,4)}};if(Dn)return d=We,e?n&&Pe(e,l,3,[a(),h?[]:void 0,d]):a(),We;let g=h?[]:To;const w=()=>{if(!!N.active)if(e){const B=N.run();(s||c||(h?B.some((ue,ne)=>us(ue,g[ne])):us(B,g)))&&(u&&u(),Pe(e,l,3,[B,g===To?void 0:g,d]),g=B)}else N.run()};w.allowRecurse=!!e;let x;i==="sync"?x=w:i==="post"?x=()=>Ce(w,l&&l.suspense):x=()=>{!l||l.isMounted?ph(w):w()};const N=new or(a,x);return e?n?w():g=N.run():i==="post"?Ce(N.run.bind(N),l&&l.suspense):N.run(),()=>{N.stop(),l&&l.scope&&nr(l.scope.effects,N)}}function Sh(t,e,n){const s=this.proxy,i=ae(t)?t.includes(".")?pa(s,t):()=>s[t]:t.bind(s,s);let r;M(e)?r=e:(r=e.handler,n=e);const o=de;nn(this);const l=_r(i,r.bind(s),n);return o?nn(o):Rt(),l}function pa(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function wt(t,e){if(!ce(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),_e(t))wt(t.value,e);else if(k(t))for(let n=0;n<t.length;n++)wt(t[n],e);else if(Wl(t)||Yt(t))t.forEach(n=>{wt(n,e)});else if(Vl(t))for(const n in t)wt(t[n],e);return t}function xh(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return mr(()=>{t.isMounted=!0}),ya(()=>{t.isUnmounting=!0}),t}const Ae=[Function,Array],Nh={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ae,onEnter:Ae,onAfterEnter:Ae,onEnterCancelled:Ae,onBeforeLeave:Ae,onLeave:Ae,onAfterLeave:Ae,onLeaveCancelled:Ae,onBeforeAppear:Ae,onAppear:Ae,onAfterAppear:Ae,onAppearCancelled:Ae},setup(t,{slots:e}){const n=ka(),s=xh();let i;return()=>{const r=e.default&&ga(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const x of r)if(x.type!==Xe){o=x;break}}const l=$(t),{mode:a}=l;if(s.isLeaving)return li(o);const c=So(o);if(!c)return li(o);const h=Ii(c,l,s,n);Ti(c,h);const u=n.subTree,d=u&&So(u);let g=!1;const{getTransitionKey:w}=c.type;if(w){const x=w();i===void 0?i=x:x!==i&&(i=x,g=!0)}if(d&&d.type!==Xe&&(!Et(c,d)||g)){const x=Ii(d,l,s,n);if(Ti(d,x),a==="out-in")return s.isLeaving=!0,x.afterLeave=()=>{s.isLeaving=!1,n.update()},li(o);a==="in-out"&&c.type!==Xe&&(x.delayLeave=(N,B,ue)=>{const ne=_a(s,d);ne[String(d.key)]=d,N._leaveCb=()=>{B(),N._leaveCb=void 0,delete h.delayedLeave},h.delayedLeave=ue})}return o}}},Rh=Nh;function _a(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Ii(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:l,onEnter:a,onAfterEnter:c,onEnterCancelled:h,onBeforeLeave:u,onLeave:d,onAfterLeave:g,onLeaveCancelled:w,onBeforeAppear:x,onAppear:N,onAfterAppear:B,onAppearCancelled:ue}=e,ne=String(t.key),Z=_a(n,t),Te=(V,he)=>{V&&Pe(V,s,9,he)},_t={mode:r,persisted:o,beforeEnter(V){let he=l;if(!n.isMounted)if(i)he=x||l;else return;V._leaveCb&&V._leaveCb(!0);const se=Z[ne];se&&Et(t,se)&&se.el._leaveCb&&se.el._leaveCb(),Te(he,[V])},enter(V){let he=a,se=c,Oe=h;if(!n.isMounted)if(i)he=N||a,se=B||c,Oe=ue||h;else return;let Se=!1;const ke=V._enterCb=Ht=>{Se||(Se=!0,Ht?Te(Oe,[V]):Te(se,[V]),_t.delayedLeave&&_t.delayedLeave(),V._enterCb=void 0)};he?(he(V,ke),he.length<=1&&ke()):ke()},leave(V,he){const se=String(t.key);if(V._enterCb&&V._enterCb(!0),n.isUnmounting)return he();Te(u,[V]);let Oe=!1;const Se=V._leaveCb=ke=>{Oe||(Oe=!0,he(),ke?Te(w,[V]):Te(g,[V]),V._leaveCb=void 0,Z[se]===t&&delete Z[se])};Z[se]=t,d?(d(V,Se),d.length<=1&&Se()):Se()},clone(V){return Ii(V,e,n,s)}};return _t}function li(t){if(Hs(t))return t=Pt(t),t.children=null,t}function So(t){return Hs(t)?t.children?t.children[0]:void 0:t}function Ti(t,e){t.shapeFlag&6&&t.component?Ti(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function ga(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===ve?(o.patchFlag&128&&i++,s=s.concat(ga(o.children,e,l))):(e||o.type!==Xe)&&s.push(l!=null?Pt(o,{key:l}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function gr(t){return M(t)?{setup:t,name:t.name}:t}const Si=t=>!!t.type.__asyncLoader,Hs=t=>t.type.__isKeepAlive;function Ah(t,e){ma(t,"a",e)}function Ph(t,e){ma(t,"da",e)}function ma(t,e,n=de){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Ws(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Hs(i.parent.vnode)&&Oh(s,e,n,i),i=i.parent}}function Oh(t,e,n,s){const i=Ws(e,t,s,!0);yr(()=>{nr(s[e],i)},n)}function Ws(t,e,n=de,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;un(),nn(n);const l=Pe(e,n,t,o);return Rt(),hn(),l});return s?i.unshift(r):i.push(r),r}}const tt=t=>(e,n=de)=>(!Dn||t==="sp")&&Ws(t,e,n),kh=tt("bm"),mr=tt("m"),Mh=tt("bu"),Dh=tt("u"),ya=tt("bum"),yr=tt("um"),Fh=tt("sp"),Lh=tt("rtg"),Bh=tt("rtc");function Hh(t,e=de){Ws("ec",t,e)}let xi=!0;function Wh(t){const e=va(t),n=t.proxy,s=t.ctx;xi=!1,e.beforeCreate&&xo(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:a,inject:c,created:h,beforeMount:u,mounted:d,beforeUpdate:g,updated:w,activated:x,deactivated:N,beforeDestroy:B,beforeUnmount:ue,destroyed:ne,unmounted:Z,render:Te,renderTracked:_t,renderTriggered:V,errorCaptured:he,serverPrefetch:se,expose:Oe,inheritAttrs:Se,components:ke,directives:Ht,filters:uo}=e;if(c&&Uh(c,s,null,t.appContext.config.unwrapInjectedRef),o)for(const ee in o){const Y=o[ee];M(Y)&&(s[ee]=Y.bind(n))}if(i){const ee=i.call(n,n);ce(ee)&&(t.data=qn(ee))}if(xi=!0,r)for(const ee in r){const Y=r[ee],ze=M(Y)?Y.bind(n,n):M(Y.get)?Y.get.bind(n,n):We,ei=!M(Y)&&M(Y.set)?Y.set.bind(n):We,gn=Cf({get:ze,set:ei});Object.defineProperty(s,ee,{enumerable:!0,configurable:!0,get:()=>gn.value,set:Wt=>gn.value=Wt})}if(l)for(const ee in l)Ca(l[ee],s,n,ee);if(a){const ee=M(a)?a.call(n):a;Reflect.ownKeys(ee).forEach(Y=>{Ih(Y,ee[Y])})}h&&xo(h,t,"c");function ye(ee,Y){k(Y)?Y.forEach(ze=>ee(ze.bind(n))):Y&&ee(Y.bind(n))}if(ye(kh,u),ye(mr,d),ye(Mh,g),ye(Dh,w),ye(Ah,x),ye(Ph,N),ye(Hh,he),ye(Bh,_t),ye(Lh,V),ye(ya,ue),ye(yr,Z),ye(Fh,se),k(Oe))if(Oe.length){const ee=t.exposed||(t.exposed={});Oe.forEach(Y=>{Object.defineProperty(ee,Y,{get:()=>n[Y],set:ze=>n[Y]=ze})})}else t.exposed||(t.exposed={});Te&&t.render===We&&(t.render=Te),Se!=null&&(t.inheritAttrs=Se),ke&&(t.components=ke),Ht&&(t.directives=Ht)}function Uh(t,e,n=We,s=!1){k(t)&&(t=Ni(t));for(const i in t){const r=t[i];let o;ce(r)?"default"in r?o=ri(r.from||i,r.default,!0):o=ri(r.from||i):o=ri(r),_e(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:l=>o.value=l}):e[i]=o}}function xo(t,e,n){Pe(k(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ca(t,e,n,s){const i=s.includes(".")?pa(n,s):()=>n[s];if(ae(t)){const r=e[t];M(r)&&oi(i,r)}else if(M(t))oi(i,t.bind(n));else if(ce(t))if(k(t))t.forEach(r=>Ca(r,e,n,s));else{const r=M(t.handler)?t.handler.bind(n):e[t.handler];M(r)&&oi(i,r,t)}}function va(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let a;return l?a=l:!i.length&&!n&&!s?a=e:(a={},i.length&&i.forEach(c=>_s(a,c,o,!0)),_s(a,e,o)),r.set(e,a),a}function _s(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&_s(t,r,n,!0),i&&i.forEach(o=>_s(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=$h[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const $h={data:No,props:yt,emits:yt,methods:yt,computed:yt,beforeCreate:me,created:me,beforeMount:me,mounted:me,beforeUpdate:me,updated:me,beforeDestroy:me,beforeUnmount:me,destroyed:me,unmounted:me,activated:me,deactivated:me,errorCaptured:me,serverPrefetch:me,components:yt,directives:yt,watch:jh,provide:No,inject:Vh};function No(t,e){return e?t?function(){return ge(M(t)?t.call(this,this):t,M(e)?e.call(this,this):e)}:e:t}function Vh(t,e){return yt(Ni(t),Ni(e))}function Ni(t){if(k(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function me(t,e){return t?[...new Set([].concat(t,e))]:e}function yt(t,e){return t?ge(ge(Object.create(null),t),e):e}function jh(t,e){if(!t)return e;if(!e)return t;const n=ge(Object.create(null),t);for(const s in e)n[s]=me(t[s],e[s]);return n}function qh(t,e,n,s=!1){const i={},r={};hs(r,Us,1),t.propsDefaults=Object.create(null),Ea(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:ih(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function zh(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=$(i),[a]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let u=0;u<h.length;u++){let d=h[u];if(Bs(t.emitsOptions,d))continue;const g=e[d];if(a)if(H(r,d))g!==r[d]&&(r[d]=g,c=!0);else{const w=tn(d);i[w]=Ri(a,l,w,g,t,!1)}else g!==r[d]&&(r[d]=g,c=!0)}}}else{Ea(t,e,i,r)&&(c=!0);let h;for(const u in l)(!e||!H(e,u)&&((h=cn(u))===u||!H(e,h)))&&(a?n&&(n[u]!==void 0||n[h]!==void 0)&&(i[u]=Ri(a,l,u,void 0,t,!0)):delete i[u]);if(r!==l)for(const u in r)(!e||!H(e,u)&&!0)&&(delete r[u],c=!0)}c&&Ze(t,"set","$attrs")}function Ea(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let a in e){if(os(a))continue;const c=e[a];let h;i&&H(i,h=tn(a))?!r||!r.includes(h)?n[h]=c:(l||(l={}))[h]=c:Bs(t.emitsOptions,a)||(!(a in s)||c!==s[a])&&(s[a]=c,o=!0)}if(r){const a=$(n),c=l||q;for(let h=0;h<r.length;h++){const u=r[h];n[u]=Ri(i,a,u,c[u],t,!H(c,u))}}return o}function Ri(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=H(o,"default");if(l&&s===void 0){const a=o.default;if(o.type!==Function&&M(a)){const{propsDefaults:c}=i;n in c?s=c[n]:(nn(i),s=c[n]=a.call(null,e),Rt())}else s=a}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===cn(n))&&(s=!0))}return s}function ba(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let a=!1;if(!M(t)){const h=u=>{a=!0;const[d,g]=ba(u,e,!0);ge(o,d),g&&l.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!r&&!a)return s.set(t,Gt),Gt;if(k(r))for(let h=0;h<r.length;h++){const u=tn(r[h]);Ro(u)&&(o[u]=q)}else if(r)for(const h in r){const u=tn(h);if(Ro(u)){const d=r[h],g=o[u]=k(d)||M(d)?{type:d}:d;if(g){const w=Oo(Boolean,g.type),x=Oo(String,g.type);g[0]=w>-1,g[1]=x<0||w<x,(w>-1||H(g,"default"))&&l.push(u)}}}const c=[o,l];return s.set(t,c),c}function Ro(t){return t[0]!=="$"}function Ao(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Po(t,e){return Ao(t)===Ao(e)}function Oo(t,e){return k(e)?e.findIndex(n=>Po(n,t)):M(e)&&Po(e,t)?0:-1}const wa=t=>t[0]==="_"||t==="$stable",Cr=t=>k(t)?t.map(qe):[qe(t)],Kh=(t,e,n)=>{const s=mh((...i)=>Cr(e(...i)),n);return s._c=!1,s},Ia=(t,e,n)=>{const s=t._ctx;for(const i in t){if(wa(i))continue;const r=t[i];if(M(r))e[i]=Kh(i,r,s);else if(r!=null){const o=Cr(r);e[i]=()=>o}}},Ta=(t,e)=>{const n=Cr(e);t.slots.default=()=>n},Gh=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=$(e),hs(e,"_",n)):Ia(e,t.slots={})}else t.slots={},e&&Ta(t,e);hs(t.slots,Us,1)},Yh=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=q;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:(ge(i,e),!n&&l===1&&delete i._):(r=!e.$stable,Ia(e,i)),o=e}else e&&(Ta(t,e),o={default:1});if(r)for(const l in i)!wa(l)&&!(l in o)&&delete i[l]};function Qh(t,e){const n=Le;if(n===null)return t;const s=$s(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,l,a,c=q]=e[r];M(o)&&(o={mounted:o,updated:o}),o.deep&&wt(l),i.push({dir:o,instance:s,value:l,oldValue:void 0,arg:a,modifiers:c})}return t}function gt(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let a=l.dir[s];a&&(un(),Pe(a,n,8,[t.el,l,t,e]),hn())}}function Sa(){return{app:null,config:{isNativeTag:Iu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Xh=0;function Jh(t,e){return function(s,i=null){M(s)||(s=Object.assign({},s)),i!=null&&!ce(i)&&(i=null);const r=Sa(),o=new Set;let l=!1;const a=r.app={_uid:Xh++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:vf,get config(){return r.config},set config(c){},use(c,...h){return o.has(c)||(c&&M(c.install)?(o.add(c),c.install(a,...h)):M(c)&&(o.add(c),c(a,...h))),a},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),a},component(c,h){return h?(r.components[c]=h,a):r.components[c]},directive(c,h){return h?(r.directives[c]=h,a):r.directives[c]},mount(c,h,u){if(!l){const d=ut(s,i);return d.appContext=r,h&&e?e(d,c):t(d,c,u),l=!0,a._container=c,c.__vue_app__=a,$s(d.component)||d.component.proxy}},unmount(){l&&(t(null,a._container),delete a._container.__vue_app__)},provide(c,h){return r.provides[c]=h,a}};return a}}function Ai(t,e,n,s,i=!1){if(k(t)){t.forEach((d,g)=>Ai(d,e&&(k(e)?e[g]:e),n,s,i));return}if(Si(s)&&!i)return;const r=s.shapeFlag&4?$s(s.component)||s.component.proxy:s.el,o=i?null:r,{i:l,r:a}=t,c=e&&e.r,h=l.refs===q?l.refs={}:l.refs,u=l.setupState;if(c!=null&&c!==a&&(ae(c)?(h[c]=null,H(u,c)&&(u[c]=null)):_e(c)&&(c.value=null)),M(a))ct(a,l,12,[o,h]);else{const d=ae(a),g=_e(a);if(d||g){const w=()=>{if(t.f){const x=d?h[a]:a.value;i?k(x)&&nr(x,r):k(x)?x.includes(r)||x.push(r):d?(h[a]=[r],H(u,a)&&(u[a]=h[a])):(a.value=[r],t.k&&(h[t.k]=a.value))}else d?(h[a]=o,H(u,a)&&(u[a]=o)):_e(a)&&(a.value=o,t.k&&(h[t.k]=o))};o?(w.id=-1,Ce(w,n)):w()}}}const Ce=wh;function Zh(t){return ef(t)}function ef(t,e){const n=Au();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:a,setText:c,setElementText:h,parentNode:u,nextSibling:d,setScopeId:g=We,cloneNode:w,insertStaticContent:x}=t,N=(f,p,_,y=null,m=null,b=null,T=!1,E=null,I=!!p.dynamicChildren)=>{if(f===p)return;f&&!Et(f,p)&&(y=Jn(f),it(f,m,b,!0),f=null),p.patchFlag===-2&&(I=!1,p.dynamicChildren=null);const{type:C,ref:R,shapeFlag:S}=p;switch(C){case vr:B(f,p,_,y);break;case Xe:ue(f,p,_,y);break;case as:f==null&&ne(p,_,y,T);break;case ve:Ht(f,p,_,y,m,b,T,E,I);break;default:S&1?_t(f,p,_,y,m,b,T,E,I):S&6?uo(f,p,_,y,m,b,T,E,I):(S&64||S&128)&&C.process(f,p,_,y,m,b,T,E,I,Ut)}R!=null&&m&&Ai(R,f&&f.ref,b,p||f,!p)},B=(f,p,_,y)=>{if(f==null)s(p.el=l(p.children),_,y);else{const m=p.el=f.el;p.children!==f.children&&c(m,p.children)}},ue=(f,p,_,y)=>{f==null?s(p.el=a(p.children||""),_,y):p.el=f.el},ne=(f,p,_,y)=>{[f.el,f.anchor]=x(f.children,p,_,y,f.el,f.anchor)},Z=({el:f,anchor:p},_,y)=>{let m;for(;f&&f!==p;)m=d(f),s(f,_,y),f=m;s(p,_,y)},Te=({el:f,anchor:p})=>{let _;for(;f&&f!==p;)_=d(f),i(f),f=_;i(p)},_t=(f,p,_,y,m,b,T,E,I)=>{T=T||p.type==="svg",f==null?V(p,_,y,m,b,T,E,I):Oe(f,p,m,b,T,E,I)},V=(f,p,_,y,m,b,T,E)=>{let I,C;const{type:R,props:S,shapeFlag:A,transition:O,patchFlag:W,dirs:J}=f;if(f.el&&w!==void 0&&W===-1)I=f.el=w(f.el);else{if(I=f.el=o(f.type,b,S&&S.is,S),A&8?h(I,f.children):A&16&&se(f.children,I,null,y,m,b&&R!=="foreignObject",T,E),J&&gt(f,null,y,"created"),S){for(const Q in S)Q!=="value"&&!os(Q)&&r(I,Q,null,S[Q],b,f.children,y,m,Ke);"value"in S&&r(I,"value",null,S.value),(C=S.onVnodeBeforeMount)&&Ve(C,y,f)}he(I,f,f.scopeId,T,y)}J&&gt(f,null,y,"beforeMount");const j=(!m||m&&!m.pendingBranch)&&O&&!O.persisted;j&&O.beforeEnter(I),s(I,p,_),((C=S&&S.onVnodeMounted)||j||J)&&Ce(()=>{C&&Ve(C,y,f),j&&O.enter(I),J&&gt(f,null,y,"mounted")},m)},he=(f,p,_,y,m)=>{if(_&&g(f,_),y)for(let b=0;b<y.length;b++)g(f,y[b]);if(m){let b=m.subTree;if(p===b){const T=m.vnode;he(f,T,T.scopeId,T.slotScopeIds,m.parent)}}},se=(f,p,_,y,m,b,T,E,I=0)=>{for(let C=I;C<f.length;C++){const R=f[C]=E?lt(f[C]):qe(f[C]);N(null,R,p,_,y,m,b,T,E)}},Oe=(f,p,_,y,m,b,T)=>{const E=p.el=f.el;let{patchFlag:I,dynamicChildren:C,dirs:R}=p;I|=f.patchFlag&16;const S=f.props||q,A=p.props||q;let O;_&&mt(_,!1),(O=A.onVnodeBeforeUpdate)&&Ve(O,_,p,f),R&&gt(p,f,_,"beforeUpdate"),_&&mt(_,!0);const W=m&&p.type!=="foreignObject";if(C?Se(f.dynamicChildren,C,E,_,y,W,b):T||ze(f,p,E,null,_,y,W,b,!1),I>0){if(I&16)ke(E,p,S,A,_,y,m);else if(I&2&&S.class!==A.class&&r(E,"class",null,A.class,m),I&4&&r(E,"style",S.style,A.style,m),I&8){const J=p.dynamicProps;for(let j=0;j<J.length;j++){const Q=J[j],Me=S[Q],$t=A[Q];($t!==Me||Q==="value")&&r(E,Q,Me,$t,m,f.children,_,y,Ke)}}I&1&&f.children!==p.children&&h(E,p.children)}else!T&&C==null&&ke(E,p,S,A,_,y,m);((O=A.onVnodeUpdated)||R)&&Ce(()=>{O&&Ve(O,_,p,f),R&&gt(p,f,_,"updated")},y)},Se=(f,p,_,y,m,b,T)=>{for(let E=0;E<p.length;E++){const I=f[E],C=p[E],R=I.el&&(I.type===ve||!Et(I,C)||I.shapeFlag&70)?u(I.el):_;N(I,C,R,null,y,m,b,T,!0)}},ke=(f,p,_,y,m,b,T)=>{if(_!==y){for(const E in y){if(os(E))continue;const I=y[E],C=_[E];I!==C&&E!=="value"&&r(f,E,C,I,T,p.children,m,b,Ke)}if(_!==q)for(const E in _)!os(E)&&!(E in y)&&r(f,E,_[E],null,T,p.children,m,b,Ke);"value"in y&&r(f,"value",_.value,y.value)}},Ht=(f,p,_,y,m,b,T,E,I)=>{const C=p.el=f?f.el:l(""),R=p.anchor=f?f.anchor:l("");let{patchFlag:S,dynamicChildren:A,slotScopeIds:O}=p;O&&(E=E?E.concat(O):O),f==null?(s(C,_,y),s(R,_,y),se(p.children,_,R,m,b,T,E,I)):S>0&&S&64&&A&&f.dynamicChildren?(Se(f.dynamicChildren,A,_,m,b,T,E),(p.key!=null||m&&p===m.subTree)&&xa(f,p,!0)):ze(f,p,_,R,m,b,T,E,I)},uo=(f,p,_,y,m,b,T,E,I)=>{p.slotScopeIds=E,f==null?p.shapeFlag&512?m.ctx.activate(p,_,y,T,I):Zs(p,_,y,m,b,T,I):ye(f,p,I)},Zs=(f,p,_,y,m,b,T)=>{const E=f.component=df(f,y,m);if(Hs(f)&&(E.ctx.renderer=Ut),pf(E),E.asyncDep){if(m&&m.registerDep(E,ee),!f.el){const I=E.subTree=ut(Xe);ue(null,I,p,_)}return}ee(E,f,p,_,m,b,T)},ye=(f,p,_)=>{const y=p.component=f.component;if(vh(f,p,_))if(y.asyncDep&&!y.asyncResolved){Y(y,p,_);return}else y.next=p,dh(y.update),y.update();else p.component=f.component,p.el=f.el,y.vnode=p},ee=(f,p,_,y,m,b,T)=>{const E=()=>{if(f.isMounted){let{next:R,bu:S,u:A,parent:O,vnode:W}=f,J=R,j;mt(f,!1),R?(R.el=W.el,Y(f,R,T)):R=W,S&&ls(S),(j=R.props&&R.props.onVnodeBeforeUpdate)&&Ve(j,O,R,W),mt(f,!0);const Q=ii(f),Me=f.subTree;f.subTree=Q,N(Me,Q,u(Me.el),Jn(Me),f,m,b),R.el=Q.el,J===null&&Eh(f,Q.el),A&&Ce(A,m),(j=R.props&&R.props.onVnodeUpdated)&&Ce(()=>Ve(j,O,R,W),m)}else{let R;const{el:S,props:A}=p,{bm:O,m:W,parent:J}=f,j=Si(p);if(mt(f,!1),O&&ls(O),!j&&(R=A&&A.onVnodeBeforeMount)&&Ve(R,J,p),mt(f,!0),S&&ni){const Q=()=>{f.subTree=ii(f),ni(S,f.subTree,f,m,null)};j?p.type.__asyncLoader().then(()=>!f.isUnmounted&&Q()):Q()}else{const Q=f.subTree=ii(f);N(null,Q,_,y,f,m,b),p.el=Q.el}if(W&&Ce(W,m),!j&&(R=A&&A.onVnodeMounted)){const Q=p;Ce(()=>Ve(R,J,Q),m)}p.shapeFlag&256&&f.a&&Ce(f.a,m),f.isMounted=!0,p=_=y=null}},I=f.effect=new or(E,()=>la(f.update),f.scope),C=f.update=I.run.bind(I);C.id=f.uid,mt(f,!0),C()},Y=(f,p,_)=>{p.component=f;const y=f.vnode.props;f.vnode=p,f.next=null,zh(f,p.props,y,_),Yh(f,p.children,_),un(),pr(void 0,f.update),hn()},ze=(f,p,_,y,m,b,T,E,I=!1)=>{const C=f&&f.children,R=f?f.shapeFlag:0,S=p.children,{patchFlag:A,shapeFlag:O}=p;if(A>0){if(A&128){gn(C,S,_,y,m,b,T,E,I);return}else if(A&256){ei(C,S,_,y,m,b,T,E,I);return}}O&8?(R&16&&Ke(C,m,b),S!==C&&h(_,S)):R&16?O&16?gn(C,S,_,y,m,b,T,E,I):Ke(C,m,b,!0):(R&8&&h(_,""),O&16&&se(S,_,y,m,b,T,E,I))},ei=(f,p,_,y,m,b,T,E,I)=>{f=f||Gt,p=p||Gt;const C=f.length,R=p.length,S=Math.min(C,R);let A;for(A=0;A<S;A++){const O=p[A]=I?lt(p[A]):qe(p[A]);N(f[A],O,_,null,m,b,T,E,I)}C>R?Ke(f,m,b,!0,!1,S):se(p,_,y,m,b,T,E,I,S)},gn=(f,p,_,y,m,b,T,E,I)=>{let C=0;const R=p.length;let S=f.length-1,A=R-1;for(;C<=S&&C<=A;){const O=f[C],W=p[C]=I?lt(p[C]):qe(p[C]);if(Et(O,W))N(O,W,_,null,m,b,T,E,I);else break;C++}for(;C<=S&&C<=A;){const O=f[S],W=p[A]=I?lt(p[A]):qe(p[A]);if(Et(O,W))N(O,W,_,null,m,b,T,E,I);else break;S--,A--}if(C>S){if(C<=A){const O=A+1,W=O<R?p[O].el:y;for(;C<=A;)N(null,p[C]=I?lt(p[C]):qe(p[C]),_,W,m,b,T,E,I),C++}}else if(C>A)for(;C<=S;)it(f[C],m,b,!0),C++;else{const O=C,W=C,J=new Map;for(C=W;C<=A;C++){const xe=p[C]=I?lt(p[C]):qe(p[C]);xe.key!=null&&J.set(xe.key,C)}let j,Q=0;const Me=A-W+1;let $t=!1,po=0;const mn=new Array(Me);for(C=0;C<Me;C++)mn[C]=0;for(C=O;C<=S;C++){const xe=f[C];if(Q>=Me){it(xe,m,b,!0);continue}let $e;if(xe.key!=null)$e=J.get(xe.key);else for(j=W;j<=A;j++)if(mn[j-W]===0&&Et(xe,p[j])){$e=j;break}$e===void 0?it(xe,m,b,!0):(mn[$e-W]=C+1,$e>=po?po=$e:$t=!0,N(xe,p[$e],_,null,m,b,T,E,I),Q++)}const _o=$t?tf(mn):Gt;for(j=_o.length-1,C=Me-1;C>=0;C--){const xe=W+C,$e=p[xe],go=xe+1<R?p[xe+1].el:y;mn[C]===0?N(null,$e,_,go,m,b,T,E,I):$t&&(j<0||C!==_o[j]?Wt($e,_,go,2):j--)}}},Wt=(f,p,_,y,m=null)=>{const{el:b,type:T,transition:E,children:I,shapeFlag:C}=f;if(C&6){Wt(f.component.subTree,p,_,y);return}if(C&128){f.suspense.move(p,_,y);return}if(C&64){T.move(f,p,_,Ut);return}if(T===ve){s(b,p,_);for(let S=0;S<I.length;S++)Wt(I[S],p,_,y);s(f.anchor,p,_);return}if(T===as){Z(f,p,_);return}if(y!==2&&C&1&&E)if(y===0)E.beforeEnter(b),s(b,p,_),Ce(()=>E.enter(b),m);else{const{leave:S,delayLeave:A,afterLeave:O}=E,W=()=>s(b,p,_),J=()=>{S(b,()=>{W(),O&&O()})};A?A(b,W,J):J()}else s(b,p,_)},it=(f,p,_,y=!1,m=!1)=>{const{type:b,props:T,ref:E,children:I,dynamicChildren:C,shapeFlag:R,patchFlag:S,dirs:A}=f;if(E!=null&&Ai(E,null,_,f,!0),R&256){p.ctx.deactivate(f);return}const O=R&1&&A,W=!Si(f);let J;if(W&&(J=T&&T.onVnodeBeforeUnmount)&&Ve(J,p,f),R&6)mu(f.component,_,y);else{if(R&128){f.suspense.unmount(_,y);return}O&&gt(f,null,p,"beforeUnmount"),R&64?f.type.remove(f,p,_,m,Ut,y):C&&(b!==ve||S>0&&S&64)?Ke(C,p,_,!1,!0):(b===ve&&S&384||!m&&R&16)&&Ke(I,p,_),y&&ho(f)}(W&&(J=T&&T.onVnodeUnmounted)||O)&&Ce(()=>{J&&Ve(J,p,f),O&&gt(f,null,p,"unmounted")},_)},ho=f=>{const{type:p,el:_,anchor:y,transition:m}=f;if(p===ve){gu(_,y);return}if(p===as){Te(f);return}const b=()=>{i(_),m&&!m.persisted&&m.afterLeave&&m.afterLeave()};if(f.shapeFlag&1&&m&&!m.persisted){const{leave:T,delayLeave:E}=m,I=()=>T(_,b);E?E(f.el,b,I):I()}else b()},gu=(f,p)=>{let _;for(;f!==p;)_=d(f),i(f),f=_;i(p)},mu=(f,p,_)=>{const{bum:y,scope:m,update:b,subTree:T,um:E}=f;y&&ls(y),m.stop(),b&&(b.active=!1,it(T,f,p,_)),E&&Ce(E,p),Ce(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Ke=(f,p,_,y=!1,m=!1,b=0)=>{for(let T=b;T<f.length;T++)it(f[T],p,_,y,m)},Jn=f=>f.shapeFlag&6?Jn(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),fo=(f,p,_)=>{f==null?p._vnode&&it(p._vnode,null,null,!0):N(p._vnode||null,f,p,null,null,null,_),ua(),p._vnode=f},Ut={p:N,um:it,m:Wt,r:ho,mt:Zs,mc:se,pc:ze,pbc:Se,n:Jn,o:t};let ti,ni;return e&&([ti,ni]=e(Ut)),{render:fo,hydrate:ti,createApp:Jh(fo,ti)}}function mt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function xa(t,e,n=!1){const s=t.children,i=e.children;if(k(s)&&k(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=lt(i[r]),l.el=o.el),n||xa(o,l))}}function tf(t){const e=t.slice(),n=[0];let s,i,r,o,l;const a=t.length;for(s=0;s<a;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<c?r=l+1:o=l;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const nf=t=>t.__isTeleport,sf=Symbol(),ve=Symbol(void 0),vr=Symbol(void 0),Xe=Symbol(void 0),as=Symbol(void 0),xn=[];let xt=null;function Nt(t=!1){xn.push(xt=t?null:[])}function rf(){xn.pop(),xt=xn[xn.length-1]||null}let gs=1;function ko(t){gs+=t}function Na(t){return t.dynamicChildren=gs>0?xt||Gt:null,rf(),gs>0&&xt&&xt.push(t),t}function Mn(t,e,n,s,i,r){return Na(Ye(t,e,n,s,i,r,!0))}function Ra(t,e,n,s,i){return Na(ut(t,e,n,s,i,!0))}function of(t){return t?t.__v_isVNode===!0:!1}function Et(t,e){return t.type===e.type&&t.key===e.key}const Us="__vInternal",Aa=({key:t})=>t!=null?t:null,cs=({ref:t,ref_key:e,ref_for:n})=>t!=null?ae(t)||_e(t)||M(t)?{i:Le,r:t,k:e,f:!!n}:t:null;function Ye(t,e=null,n=null,s=0,i=null,r=t===ve?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Aa(e),ref:e&&cs(e),scopeId:da,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null};return l?(Er(a,n),r&128&&t.normalize(a)):n&&(a.shapeFlag|=ae(n)?8:16),gs>0&&!o&&xt&&(a.patchFlag>0||r&6)&&a.patchFlag!==32&&xt.push(a),a}const ut=lf;function lf(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===sf)&&(t=Xe),of(t)){const l=Pt(t,e,!0);return n&&Er(l,n),l}if(yf(t)&&(t=t.__vccOpts),e){e=af(e);let{class:l,style:a}=e;l&&!ae(l)&&(e.class=er(l)),ce(a)&&(sa(a)&&!k(a)&&(a=ge({},a)),e.style=Zi(a))}const o=ae(t)?1:bh(t)?128:nf(t)?64:ce(t)?4:M(t)?2:0;return Ye(t,e,n,s,i,o,r,!0)}function af(t){return t?sa(t)||Us in t?ge({},t):t:null}function Pt(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,l=e?cf(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&Aa(l),ref:e&&e.ref?n&&i?k(i)?i.concat(cs(e)):[i,cs(e)]:cs(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ve?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Pt(t.ssContent),ssFallback:t.ssFallback&&Pt(t.ssFallback),el:t.el,anchor:t.anchor}}function Pa(t=" ",e=0){return ut(vr,null,t,e)}function qe(t){return t==null||typeof t=="boolean"?ut(Xe):k(t)?ut(ve,null,t.slice()):typeof t=="object"?lt(t):ut(vr,null,String(t))}function lt(t){return t.el===null||t.memo?t:Pt(t)}function Er(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(k(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Er(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Us in e)?e._ctx=Le:i===3&&Le&&(Le.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else M(e)?(e={default:e,_ctx:Le},n=32):(e=String(e),s&64?(n=16,e=[Pa(e)]):n=8);t.children=e,t.shapeFlag|=n}function cf(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=er([e.class,s.class]));else if(i==="style")e.style=Zi([e.style,s.style]);else if(ks(i)){const r=e[i],o=s[i];o&&r!==o&&!(k(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function Ve(t,e,n,s=null){Pe(t,e,7,[n,s])}function Oa(t,e,n,s){let i;const r=n&&n[s];if(k(t)||ae(t)){i=new Array(t.length);for(let o=0,l=t.length;o<l;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(ce(t))if(t[Symbol.iterator])i=Array.from(t,(o,l)=>e(o,l,void 0,r&&r[l]));else{const o=Object.keys(t);i=new Array(o.length);for(let l=0,a=o.length;l<a;l++){const c=o[l];i[l]=e(t[c],c,l,r&&r[l])}}else i=[];return n&&(n[s]=i),i}const Pi=t=>t?Ma(t)?$s(t)||t.proxy:Pi(t.parent):null,ms=ge(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Pi(t.parent),$root:t=>Pi(t.root),$emit:t=>t.emit,$options:t=>va(t),$forceUpdate:t=>()=>la(t.update),$nextTick:t=>hh.bind(t.proxy),$watch:t=>Sh.bind(t)}),uf={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:a}=t;let c;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(s!==q&&H(s,e))return o[e]=1,s[e];if(i!==q&&H(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&H(c,e))return o[e]=3,r[e];if(n!==q&&H(n,e))return o[e]=4,n[e];xi&&(o[e]=0)}}const h=ms[e];let u,d;if(h)return e==="$attrs"&&Re(t,"get",e),h(t);if((u=l.__cssModules)&&(u=u[e]))return u;if(n!==q&&H(n,e))return o[e]=4,n[e];if(d=a.config.globalProperties,H(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return i!==q&&H(i,e)?(i[e]=n,!0):s!==q&&H(s,e)?(s[e]=n,!0):H(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==q&&H(t,o)||e!==q&&H(e,o)||(l=r[0])&&H(l,o)||H(s,o)||H(ms,o)||H(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:H(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},hf=Sa();let ff=0;function df(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||hf,r={uid:ff++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Pu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ba(s,i),emitsOptions:fa(s,i),emit:null,emitted:null,propsDefaults:q,inheritAttrs:s.inheritAttrs,ctx:q,data:q,props:q,attrs:q,slots:q,refs:q,setupState:q,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=gh.bind(null,r),t.ce&&t.ce(r),r}let de=null;const ka=()=>de||Le,nn=t=>{de=t,t.scope.on()},Rt=()=>{de&&de.scope.off(),de=null};function Ma(t){return t.vnode.shapeFlag&4}let Dn=!1;function pf(t,e=!1){Dn=e;const{props:n,children:s}=t.vnode,i=Ma(t);qh(t,n,i,e),Gh(t,s);const r=i?_f(t,e):void 0;return Dn=!1,r}function _f(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=ia(new Proxy(t.ctx,uf));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?mf(t):null;nn(t),un();const r=ct(s,t,0,[t.props,i]);if(hn(),Rt(),Ul(r)){if(r.then(Rt,Rt),e)return r.then(o=>{Mo(t,o,e)}).catch(o=>{Ls(o,t,0)});t.asyncDep=r}else Mo(t,r,e)}else Da(t,e)}function Mo(t,e,n){M(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ce(e)&&(t.setupState=ra(e)),Da(t,n)}let Do;function Da(t,e,n){const s=t.type;if(!t.render){if(!e&&Do&&!s.render){const i=s.template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:a}=s,c=ge(ge({isCustomElement:r,delimiters:l},o),a);s.render=Do(i,c)}}t.render=s.render||We}nn(t),un(),Wh(t),hn(),Rt()}function gf(t){return new Proxy(t.attrs,{get(e,n){return Re(t,"get","$attrs"),e[n]}})}function mf(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=gf(t))},slots:t.slots,emit:t.emit,expose:e}}function $s(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(ra(ia(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ms)return ms[n](t)}}))}function yf(t){return M(t)&&"__vccOpts"in t}const Cf=(t,e)=>ch(t,e,Dn),vf="3.2.33",Ef="http://www.w3.org/2000/svg",bt=typeof document!="undefined"?document:null,Fo=bt&&bt.createElement("template"),bf={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?bt.createElementNS(Ef,t):bt.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>bt.createTextNode(t),createComment:t=>bt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>bt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Fo.innerHTML=s?`<svg>${t}</svg>`:t;const l=Fo.content;if(s){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function wf(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function If(t,e,n){const s=t.style,i=ae(n);if(n&&!i){for(const r in n)Oi(s,r,n[r]);if(e&&!ae(e))for(const r in e)n[r]==null&&Oi(s,r,"")}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const Lo=/\s*!important$/;function Oi(t,e,n){if(k(n))n.forEach(s=>Oi(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Tf(t,e);Lo.test(n)?t.setProperty(cn(s),n.replace(Lo,""),"important"):t[s]=n}}const Bo=["Webkit","Moz","ms"],ai={};function Tf(t,e){const n=ai[e];if(n)return n;let s=tn(e);if(s!=="filter"&&s in t)return ai[e]=s;s=jl(s);for(let i=0;i<Bo.length;i++){const r=Bo[i]+s;if(r in t)return ai[e]=r}return e}const Ho="http://www.w3.org/1999/xlink";function Sf(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Ho,e.slice(6,e.length)):t.setAttributeNS(Ho,e,n);else{const r=vu(e);n==null||r&&!Ll(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function xf(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const a=n==null?"":n;(t.value!==a||t.tagName==="OPTION")&&(t.value=a),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Ll(n):n==null&&a==="string"?(n="",l=!0):a==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}const[Fa,Nf]=(()=>{let t=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(t=()=>performance.now());const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let ki=0;const Rf=Promise.resolve(),Af=()=>{ki=0},Pf=()=>ki||(Rf.then(Af),ki=Fa());function zt(t,e,n,s){t.addEventListener(e,n,s)}function Of(t,e,n,s){t.removeEventListener(e,n,s)}function kf(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[l,a]=Mf(e);if(s){const c=r[e]=Df(s,i);zt(t,l,c,a)}else o&&(Of(t,l,o,a),r[e]=void 0)}}const Wo=/(?:Once|Passive|Capture)$/;function Mf(t){let e;if(Wo.test(t)){e={};let n;for(;n=t.match(Wo);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[cn(t.slice(2)),e]}function Df(t,e){const n=s=>{const i=s.timeStamp||Fa();(Nf||i>=n.attached-1)&&Pe(Ff(s,n.value),e,5,[s])};return n.value=t,n.attached=Pf(),n}function Ff(t,e){if(k(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Uo=/^on[a-z]/,Lf=(t,e,n,s,i=!1,r,o,l,a)=>{e==="class"?wf(t,s,i):e==="style"?If(t,n,s):ks(e)?tr(e)||kf(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Bf(t,e,s,i))?xf(t,e,s,r,o,l,a):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Sf(t,e,s,i))};function Bf(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Uo.test(e)&&M(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Uo.test(e)&&ae(n)?!1:e in t}function La(t){const e=ka();if(!e)return;const n=()=>Mi(e.subTree,t(e.proxy));Th(n),mr(()=>{const s=new MutationObserver(n);s.observe(e.subTree.el.parentNode,{childList:!0}),yr(()=>s.disconnect())})}function Mi(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{Mi(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)$o(t.el,e);else if(t.type===ve)t.children.forEach(n=>Mi(n,e));else if(t.type===as){let{el:n,anchor:s}=t;for(;n&&($o(n,e),n!==s);)n=n.nextSibling}}function $o(t,e){if(t.nodeType===1){const n=t.style;for(const s in e)n.setProperty(`--${s}`,e[s])}}const Hf={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Rh.props;const Vo=t=>{const e=t.props["onUpdate:modelValue"];return k(e)?n=>ls(e,n):e};function Wf(t){t.target.composing=!0}function jo(t){const e=t.target;e.composing&&(e.composing=!1,Uf(e,"input"))}function Uf(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const $f={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t._assign=Vo(i);const r=s||i.props&&i.props.type==="number";zt(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n?l=l.trim():r&&(l=mi(l)),t._assign(l)}),n&&zt(t,"change",()=>{t.value=t.value.trim()}),e||(zt(t,"compositionstart",Wf),zt(t,"compositionend",jo),zt(t,"change",jo))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t._assign=Vo(r),t.composing||document.activeElement===t&&(n||s&&t.value.trim()===e||(i||t.type==="number")&&mi(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},Vf=ge({patchProp:Lf},bf);let qo;function jf(){return qo||(qo=Zh(Vf))}const qf=(...t)=>{const e=jf().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=zf(s);if(!i)return;const r=e._component;!M(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function zf(t){return ae(t)?document.querySelector(t):t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ba={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v=function(t,e){if(!t)throw fn(e)},fn=function(t){return new Error("Firebase Database ("+Ba.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ha=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Kf=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(a>>10)),e[s++]=String.fromCharCode(56320+(a&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},br={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,h=r>>2,u=(r&3)<<4|l>>4;let d=(l&15)<<2|c>>6,g=c&63;a||(g=64,o||(d=64)),s.push(n[h],n[u],n[d],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ha(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Kf(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const u=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||c==null||u==null)throw Error();const d=r<<2|l>>4;if(s.push(d),c!==64){const g=l<<4&240|c>>2;if(s.push(g),u!==64){const w=c<<6&192|u;s.push(w)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Wa=function(t){const e=Ha(t);return br.encodeByteArray(e,!0)},Ua=function(t){return Wa(t).replace(/\./g,"")},zo=function(t){try{return br.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gf(t){return $a(void 0,t)}function $a(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Yf(n)||(t[n]=$a(t[n],e[n]));return t}function Yf(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qf(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Va(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Qf())}function Xf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ja(){return Ba.NODE_ADMIN===!0}function Jf(){return typeof indexedDB=="object"}function Zf(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ed="FirebaseError";class wr extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=ed,Object.setPrototypeOf(this,wr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qa.prototype.create)}}class qa{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?td(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new wr(i,l,s)}}function td(t,e){return t.replace(nd,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const nd=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(t){return JSON.parse(t)}function le(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const za=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Fn(zo(r[0])||""),n=Fn(zo(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},sd=function(t){const e=za(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},id=function(t){const e=za(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function sn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Ko(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ys(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Di(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Go(r)&&Go(o)){if(!Di(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Go(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rd(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)s[u]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let u=0;u<16;u++)s[u]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let u=16;u<80;u++){const d=s[u-3]^s[u-8]^s[u-14]^s[u-16];s[u]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,h;for(let u=0;u<80;u++){u<40?u<20?(c=l^r&(o^l),h=1518500249):(c=r^o^l,h=1859775393):u<60?(c=r&o|l&(r|o),h=2400959708):(c=r^o^l,h=3395469782);const d=(i<<5|i>>>27)+c+a+h+s[u]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Ir(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ld=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,v(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},js=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function zn(t){return t&&t._delegate?t._delegate:t}/**
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
 */function In(t,e){return new Promise((n,s)=>{t.onsuccess=i=>{n(i.target.result)},t.onerror=i=>{var r;s(`${e}: ${(r=i.target.error)===null||r===void 0?void 0:r.message}`)}})}class Yo{constructor(e){this._db=e,this.objectStoreNames=this._db.objectStoreNames}transaction(e,n="readonly"){return new Ka(this._db.transaction.call(this._db,e,n))}createObjectStore(e,n){return new Ga(this._db.createObjectStore(e,n))}close(){this._db.close()}}class Ka{constructor(e){this._transaction=e,this.complete=new Promise((n,s)=>{this._transaction.oncomplete=function(){n()},this._transaction.onerror=()=>{s(this._transaction.error)},this._transaction.onabort=()=>{s(this._transaction.error)}})}objectStore(e){return new Ga(this._transaction.objectStore(e))}}class Ga{constructor(e){this._store=e}index(e){return new Qo(this._store.index(e))}createIndex(e,n,s){return new Qo(this._store.createIndex(e,n,s))}get(e){const n=this._store.get(e);return In(n,"Error reading from IndexedDB")}put(e,n){const s=this._store.put(e,n);return In(s,"Error writing to IndexedDB")}delete(e){const n=this._store.delete(e);return In(n,"Error deleting from IndexedDB")}clear(){const e=this._store.clear();return In(e,"Error clearing IndexedDB object store")}}class Qo{constructor(e){this._index=e}get(e){const n=this._index.get(e);return In(n,"Error reading from IndexedDB")}}function ad(t,e,n){return new Promise((s,i)=>{try{const r=indexedDB.open(t,e);r.onsuccess=o=>{s(new Yo(o.target.result))},r.onerror=o=>{var l;i(`Error opening indexedDB: ${(l=o.target.error)===null||l===void 0?void 0:l.message}`)},r.onupgradeneeded=o=>{n(new Yo(r.result),o.oldVersion,o.newVersion,new Ka(r.transaction))}}catch(r){i(`Error opening indexedDB: ${r.message}`)}})}class Ln{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ct="[DEFAULT]";/**
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
 */class cd{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Vs;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(hd(e))try{this.getOrInitializeService({instanceIdentifier:Ct})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Ct){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ct){return this.instances.has(e)}getOptions(e=Ct){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:ud(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ct){return this.component?this.component.multipleInstances?e:Ct:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ud(t){return t===Ct?void 0:t}function hd(t){return t.instantiationMode==="EAGER"}/**
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
 */class fd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new cd(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var K;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(K||(K={}));const dd={debug:K.DEBUG,verbose:K.VERBOSE,info:K.INFO,warn:K.WARN,error:K.ERROR,silent:K.SILENT},pd=K.INFO,_d={[K.DEBUG]:"log",[K.VERBOSE]:"log",[K.INFO]:"info",[K.WARN]:"warn",[K.ERROR]:"error"},gd=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=_d[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ya{constructor(e){this.name=e,this._logLevel=pd,this._logHandler=gd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in K))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?dd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,K.DEBUG,...e),this._logHandler(this,K.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,K.VERBOSE,...e),this._logHandler(this,K.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,K.INFO,...e),this._logHandler(this,K.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,K.WARN,...e),this._logHandler(this,K.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,K.ERROR,...e),this._logHandler(this,K.ERROR,...e)}}/**
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
 */class md{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(yd(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function yd(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Fi="@firebase/app",Xo="0.7.22";/**
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
 */const Tr=new Ya("@firebase/app"),Cd="@firebase/app-compat",vd="@firebase/analytics-compat",Ed="@firebase/analytics",bd="@firebase/app-check-compat",wd="@firebase/app-check",Id="@firebase/auth",Td="@firebase/auth-compat",Sd="@firebase/database",xd="@firebase/database-compat",Nd="@firebase/functions",Rd="@firebase/functions-compat",Ad="@firebase/installations",Pd="@firebase/installations-compat",Od="@firebase/messaging",kd="@firebase/messaging-compat",Md="@firebase/performance",Dd="@firebase/performance-compat",Fd="@firebase/remote-config",Ld="@firebase/remote-config-compat",Bd="@firebase/storage",Hd="@firebase/storage-compat",Wd="@firebase/firestore",Ud="@firebase/firestore-compat",$d="firebase",Vd="9.7.0";/**
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
 */const Qa="[DEFAULT]",jd={[Fi]:"fire-core",[Cd]:"fire-core-compat",[Ed]:"fire-analytics",[vd]:"fire-analytics-compat",[wd]:"fire-app-check",[bd]:"fire-app-check-compat",[Id]:"fire-auth",[Td]:"fire-auth-compat",[Sd]:"fire-rtdb",[xd]:"fire-rtdb-compat",[Nd]:"fire-fn",[Rd]:"fire-fn-compat",[Ad]:"fire-iid",[Pd]:"fire-iid-compat",[Od]:"fire-fcm",[kd]:"fire-fcm-compat",[Md]:"fire-perf",[Dd]:"fire-perf-compat",[Fd]:"fire-rc",[Ld]:"fire-rc-compat",[Bd]:"fire-gcs",[Hd]:"fire-gcs-compat",[Wd]:"fire-fst",[Ud]:"fire-fst-compat","fire-js":"fire-js",[$d]:"fire-js-all"};/**
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
 */const Cs=new Map,Li=new Map;function qd(t,e){try{t.container.addComponent(e)}catch(n){Tr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function vs(t){const e=t.name;if(Li.has(e))return Tr.debug(`There were multiple attempts to register component ${e}.`),!1;Li.set(e,t);for(const n of Cs.values())qd(n,t);return!0}function zd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Kd={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},Ot=new qa("app","Firebase",Kd);/**
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
 */class Gd{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ln("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ot.create("app-deleted",{appName:this._name})}}/**
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
 */const Yd=Vd;function Qd(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Qa,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw Ot.create("bad-app-name",{appName:String(s)});const i=Cs.get(s);if(i){if(Di(t,i.options)&&Di(n,i.config))return i;throw Ot.create("duplicate-app",{appName:s})}const r=new fd(s);for(const l of Li.values())r.addComponent(l);const o=new Gd(t,n,r);return Cs.set(s,o),o}function Xd(t=Qa){const e=Cs.get(t);if(!e)throw Ot.create("no-app",{appName:t});return e}function Xt(t,e,n){var s;let i=(s=jd[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Tr.warn(l.join(" "));return}vs(new Ln(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Jd="firebase-heartbeat-database",Zd=1,Bn="firebase-heartbeat-store";let ci=null;function Xa(){return ci||(ci=ad(Jd,Zd,(t,e)=>{switch(e){case 0:t.createObjectStore(Bn)}}).catch(t=>{throw Ot.create("storage-open",{originalErrorMessage:t.message})})),ci}async function ep(t){try{return(await Xa()).transaction(Bn).objectStore(Bn).get(Ja(t))}catch(e){throw Ot.create("storage-get",{originalErrorMessage:e.message})}}async function Jo(t,e){try{const s=(await Xa()).transaction(Bn,"readwrite");return await s.objectStore(Bn).put(e,Ja(t)),s.complete}catch(n){throw Ot.create("storage-set",{originalErrorMessage:n.message})}}function Ja(t){return`${t.name}!${t.options.appId}`}/**
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
 */const tp=1024,np=30*24*60*60*1e3;class sp{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new rp(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Zo();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=np}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Zo(),{heartbeatsToSend:n,unsentEntries:s}=ip(this._heartbeatsCache.heartbeats),i=Ua(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Zo(){return new Date().toISOString().substring(0,10)}function ip(t,e=tp){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),el(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),el(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class rp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Jf()?Zf().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await ep(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Jo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Jo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function el(t){return Ua(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function op(t){vs(new Ln("platform-logger",e=>new md(e),"PRIVATE")),vs(new Ln("heartbeat",e=>new sp(e),"PRIVATE")),Xt(Fi,Xo,t),Xt(Fi,Xo,"esm2017"),Xt("fire-js","")}op("");var lp="firebase",ap="9.7.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xt(lp,ap,"app");const tl="@firebase/database",nl="0.12.8";/**
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
 */let Za="";function cp(t){Za=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),le(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Fn(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return nt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ec=function(t){try{if(typeof window!="undefined"&&typeof window[t]!="undefined"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new up(e)}}catch{}return new hp},It=ec("localStorage"),Bi=ec("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt=new Ya("@firebase/database"),fp=function(){let t=1;return function(){return t++}}(),tc=function(t){const e=ld(t),n=new od;n.update(e);const s=n.digest();return br.encodeByteArray(s)},Kn=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Kn.apply(null,s):typeof s=="object"?e+=le(s):e+=s,e+=" "}return e};let At=null,sl=!0;const dp=function(t,e){v(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Jt.logLevel=K.VERBOSE,At=Jt.log.bind(Jt),e&&Bi.set("logging_enabled",!0)):typeof t=="function"?At=t:(At=null,Bi.remove("logging_enabled"))},pe=function(...t){if(sl===!0&&(sl=!1,At===null&&Bi.get("logging_enabled")===!0&&dp(!0)),At){const e=Kn.apply(null,t);At(e)}},Gn=function(t){return function(...e){pe(t,...e)}},Hi=function(...t){const e="FIREBASE INTERNAL ERROR: "+Kn(...t);Jt.error(e)},kt=function(...t){const e=`FIREBASE FATAL ERROR: ${Kn(...t)}`;throw Jt.error(e),new Error(e)},we=function(...t){const e="FIREBASE WARNING: "+Kn(...t);Jt.warn(e)},pp=function(){typeof window!="undefined"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&we("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},nc=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},_p=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},rn="[MIN_NAME]",Mt="[MAX_NAME]",dn=function(t,e){if(t===e)return 0;if(t===rn||e===Mt)return-1;if(e===rn||t===Mt)return 1;{const n=il(t),s=il(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},gp=function(t,e){return t===e?0:t<e?-1:1},yn=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+le(e))},Sr=function(t){if(typeof t!="object"||t===null)return le(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=le(e[s]),n+=":",n+=Sr(t[e[s]]);return n+="}",n},sc=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Ie(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const ic=function(t){v(!nc(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,a;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(a=n;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const h=c.join("");let u="";for(a=0;a<64;a+=8){let d=parseInt(h.substr(a,8),2).toString(16);d.length===1&&(d="0"+d),u=u+d}return u.toLowerCase()},mp=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},yp=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Cp(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const vp=new RegExp("^-?(0*)\\d{1,10}$"),Ep=-2147483648,bp=2147483647,il=function(t){if(vp.test(t)){const e=Number(t);if(e>=Ep&&e<=bp)return e}return null},pn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw we("Exception was thrown by user callback.",n),e},Math.floor(0))}},wp=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Nn=function(t,e){const n=setTimeout(t,e);return typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class Ip{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){we(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tp{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(pe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',we(e)}}class Wi{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Wi.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xr="5",rc="v",oc="s",lc="r",ac="f",cc=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,uc="ls",Sp="p",Ui="ac",hc="websocket",fc="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp{constructor(e,n,s,i,r=!1,o="",l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=It.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&It.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Np(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function dc(t,e,n){v(typeof e=="string","typeof type must == string"),v(typeof n=="object","typeof params must == object");let s;if(e===hc)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===fc)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Np(t)&&(n.ns=t.namespace);const i=[];return Ie(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rp{constructor(){this.counters_={}}incrementCounter(e,n=1){nt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Gf(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ui={},hi={};function Nr(t){const e=t.toString();return ui[e]||(ui[e]=new Rp),ui[e]}function Ap(t,e){const n=t.toString();return hi[n]||(hi[n]=e()),hi[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&pn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rl="start",Op="close",kp="pLPCommand",Mp="pRTLPCB",pc="id",_c="pw",gc="ser",Dp="cb",Fp="seg",Lp="ts",Bp="d",Hp="dframe",mc=1870,yc=30,Wp=mc-yc,Up=25e3,$p=3e4;class Kt{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Gn(e),this.stats_=Nr(n),this.urlFn=a=>(this.appCheckToken&&(a[Ui]=this.appCheckToken),dc(n,fc,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Pp(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor($p)),_p(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Rr((...r)=>{const[o,l,a,c,h]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===rl)this.id=l,this.password=a;else if(o===Op)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[rl]="t",s[gc]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Dp]=this.scriptTagHolder.uniqueCallbackIdentifier),s[rc]=xr,this.transportSessionId&&(s[oc]=this.transportSessionId),this.lastSessionId&&(s[uc]=this.lastSessionId),this.applicationId&&(s[Sp]=this.applicationId),this.appCheckToken&&(s[Ui]=this.appCheckToken),typeof location!="undefined"&&location.hostname&&cc.test(location.hostname)&&(s[lc]=ac);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Kt.forceAllow_=!0}static forceDisallow(){Kt.forceDisallow_=!0}static isAvailable(){return Kt.forceAllow_?!0:!Kt.forceDisallow_&&typeof document!="undefined"&&document.createElement!=null&&!mp()&&!yp()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=le(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Wa(n),i=sc(s,Wp);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[Hp]="t",s[pc]=e,s[_c]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=le(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Rr{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=fp(),window[kp+this.uniqueCallbackIdentifier]=e,window[Mp+this.uniqueCallbackIdentifier]=n,this.myIFrame=Rr.createIFrame_();let r="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const l=document.domain;r='<script>document.domain="'+l+'";<\/script>'}const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){pe("frame writing exception"),l.stack&&pe(l.stack),pe(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||pe("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[pc]=this.myID,e[_c]=this.myPW,e[gc]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+yc+s.length<=mc;){const o=this.pendingSegs.shift();s=s+"&"+Fp+i+"="+o.seg+"&"+Lp+i+"="+o.ts+"&"+Bp+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(Up)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{pe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vp=16384,jp=45e3;let Es=null;typeof MozWebSocket!="undefined"?Es=MozWebSocket:typeof WebSocket!="undefined"&&(Es=WebSocket);class Fe{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Gn(this.connId),this.stats_=Nr(n),this.connURL=Fe.connectionURL_(n,o,l,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i){const r={};return r[rc]=xr,typeof location!="undefined"&&location.hostname&&cc.test(location.hostname)&&(r[lc]=ac),n&&(r[oc]=n),s&&(r[uc]=s),i&&(r[Ui]=i),dc(e,hc,r)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,It.set("previous_websocket_failure",!0);try{if(!ja()){const s={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new Es(this.connURL,[],s)}}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Fe.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator!="undefined"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Es!==null&&!Fe.forceDisallow_}static previouslyFailed(){return It.isInMemoryStorage||It.get("previous_websocket_failure")===!0}markConnectionHealthy(){It.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Fn(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(v(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=le(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=sc(n,Vp);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(jp))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Fe.responsesRequiredToBeHealthy=2;Fe.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Kt,Fe]}initTransports_(e){const n=Fe&&Fe.isAvailable();let s=n&&!Fe.previouslyFailed();if(e.webSocketOnly&&(n||we("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Fe];else{const i=this.transports_=[];for(const r of Ar.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r)}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qp=6e4,zp=5e3,Kp=10*1024,Gp=100*1024,fi="t",ol="d",Yp="s",ll="r",Qp="e",al="o",cl="a",ul="n",hl="p",Xp="h";class Jp{constructor(e,n,s,i,r,o,l,a,c,h){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Gn("c:"+this.id+":"),this.transportManager_=new Ar(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Nn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Gp?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Kp?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(fi in e){const n=e[fi];n===cl?this.upgradeIfSecondaryHealthy_():n===ll?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===al&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=yn("t",e),s=yn("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:hl,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:cl,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:ul,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=yn("t",e),s=yn("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=yn(fi,e);if(ol in e){const s=e[ol];if(n===Xp)this.onHandshake_(s);else if(n===ul){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Yp?this.onConnectionShutdown_(s):n===ll?this.onReset_(s):n===Qp?Hi("Server Error: "+s):n===al?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Hi("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),xr!==s&&we("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Nn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(qp))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Nn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(zp))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:hl,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(It.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(e){this.allowedEvents_=e,this.listeners_={},v(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){v(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs extends vc{constructor(){super(["online"]),this.online_=!0,typeof window!="undefined"&&typeof window.addEventListener!="undefined"&&!Va()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new bs}getInitialEvent(e){return v(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fl=32,dl=768;class z{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function U(){return new z("")}function D(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function dt(t){return t.pieces_.length-t.pieceNum_}function G(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new z(t.pieces_,e)}function Ec(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Zp(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function bc(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function wc(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new z(e,0)}function ie(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof z)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new z(n,0)}function L(t){return t.pieceNum_>=t.pieces_.length}function Ee(t,e){const n=D(t),s=D(e);if(n===null)return e;if(n===s)return Ee(G(t),G(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Pr(t,e){if(dt(t)!==dt(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Be(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(dt(t)>dt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class e_{constructor(e,n){this.errorPrefix_=n,this.parts_=bc(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=js(this.parts_[s]);Ic(this)}}function t_(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=js(e),Ic(t)}function n_(t){const e=t.parts_.pop();t.byteLength_-=js(e),t.parts_.length>0&&(t.byteLength_-=1)}function Ic(t){if(t.byteLength_>dl)throw new Error(t.errorPrefix_+"has a key path longer than "+dl+" bytes ("+t.byteLength_+").");if(t.parts_.length>fl)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+fl+") or object contains a cycle "+vt(t))}function vt(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or extends vc{constructor(){super(["visible"]);let e,n;typeof document!="undefined"&&typeof document.addEventListener!="undefined"&&(typeof document.hidden!="undefined"?(n="visibilitychange",e="hidden"):typeof document.mozHidden!="undefined"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden!="undefined"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden!="undefined"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Or}getInitialEvent(e){return v(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cn=1e3,s_=60*5*1e3,i_=3*1e3,pl=30*1e3,r_=1.3,o_=3e4,l_="server_kill",_l=3;class Je extends Cc{constructor(e,n,s,i,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Je.nextPersistentConnectionId_++,this.log_=Gn("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Cn,this.maxReconnectDelay_=s_,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!ja())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Or.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&bs.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(le(r)),v(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Vs,s={p:e._path.toString(),q:e._queryObject},i={action:"g",request:s,onComplete:o=>{const l=o.d;o.s==="ok"?(this.onDataUpdate_(s.p,l,!1,null),n.resolve(l)):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_||setTimeout(()=>{const o=this.outstandingGets_[r];o===void 0||i!==o||(delete this.outstandingGets_[r],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),this.log_("get "+r+" timed out on connection"),n.reject(new Error("Client is offline.")))},i_),this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),v(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),v(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;Je.warnOnListenWarnings_(a,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&nt(e,"w")){const s=sn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();we(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||id(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=pl)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=sd(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),v(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+le(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Hi("Unrecognized action received from server: "+le(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){v(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Cn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Cn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>o_&&(this.reconnectDelay_=Cn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*r_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Je.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,s())},c=function(u){v(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(u)};this.realtime_={close:a,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,d]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?pe("getToken() completed but was canceled"):(pe("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=d&&d.token,l=new Jp(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,g=>{we(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(l_)},r))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&we(u),a())}}}interrupt(e){pe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){pe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ko(this.interruptReasons_)&&(this.reconnectDelay_=Cn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Sr(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new z(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){pe("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=_l&&(this.reconnectDelay_=pl,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){pe("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=_l&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Za.replace(/\./g,"-")]=1,Va()?e["framework.cordova"]=1:Xf()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=bs.getInstance().currentlyOnline();return Ko(this.interruptReasons_)&&e}}Je.nextPersistentConnectionId_=0;Je.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class qs{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new F(rn,e),i=new F(rn,n);return this.compare(s,i)!==0}minPost(){return F.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let is;class Tc extends qs{static get __EMPTY_NODE(){return is}static set __EMPTY_NODE(e){is=e}compare(e,n){return dn(e.name,n.name)}isDefinedOn(e){throw fn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return F.MIN}maxPost(){return new F(Mt,is)}makePost(e,n){return v(typeof e=="string","KeyIndex indexValue must always be a string."),new F(e,is)}toString(){return".key"}}const Zt=new Tc;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class oe{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s!=null?s:oe.RED,this.left=i!=null?i:be.EMPTY_NODE,this.right=r!=null?r:be.EMPTY_NODE}copy(e,n,s,i,r){return new oe(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return be.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return be.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,oe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,oe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}oe.RED=!0;oe.BLACK=!1;class a_{copy(e,n,s,i,r){return this}insert(e,n,s){return new oe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class be{constructor(e,n=be.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new be(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,oe.BLACK,null,null))}remove(e){return new be(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,oe.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new rs(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new rs(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new rs(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new rs(this.root_,null,this.comparator_,!0,e)}}be.EMPTY_NODE=new a_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c_(t,e){return dn(t.name,e.name)}function kr(t,e){return dn(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $i;function u_(t){$i=t}const Sc=function(t){return typeof t=="number"?"number:"+ic(t):"string:"+t},xc=function(t){if(t.isLeafNode()){const e=t.val();v(typeof e=="string"||typeof e=="number"||typeof e=="object"&&nt(e,".sv"),"Priority must be a string or number.")}else v(t===$i||t.isEmpty(),"priority of unexpected type.");v(t===$i||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gl;class re{constructor(e,n=re.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,v(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),xc(this.priorityNode_)}static set __childrenNodeConstructor(e){gl=e}static get __childrenNodeConstructor(){return gl}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new re(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:re.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return L(e)?this:D(e)===".priority"?this.priorityNode_:re.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:re.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=D(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(v(s!==".priority"||dt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,re.__childrenNodeConstructor.EMPTY_NODE.updateChild(G(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Sc(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=ic(this.value_):e+=this.value_,this.lazyHash_=tc(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===re.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof re.__childrenNodeConstructor?-1:(v(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=re.VALUE_TYPE_ORDER.indexOf(n),r=re.VALUE_TYPE_ORDER.indexOf(s);return v(i>=0,"Unknown leaf type: "+n),v(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}re.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nc,Rc;function h_(t){Nc=t}function f_(t){Rc=t}class d_ extends qs{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?dn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return F.MIN}maxPost(){return new F(Mt,new re("[PRIORITY-POST]",Rc))}makePost(e,n){const s=Nc(e);return new F(n,new re("[PRIORITY-POST]",s))}toString(){return".priority"}}const te=new d_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p_=Math.log(2);class __{constructor(e){const n=r=>parseInt(Math.log(r)/p_,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ws=function(t,e,n,s){t.sort(e);const i=function(a,c){const h=c-a;let u,d;if(h===0)return null;if(h===1)return u=t[a],d=n?n(u):u,new oe(d,u.node,oe.BLACK,null,null);{const g=parseInt(h/2,10)+a,w=i(a,g),x=i(g+1,c);return u=t[g],d=n?n(u):u,new oe(d,u.node,oe.BLACK,w,x)}},r=function(a){let c=null,h=null,u=t.length;const d=function(w,x){const N=u-w,B=u;u-=w;const ue=i(N+1,B),ne=t[N],Z=n?n(ne):ne;g(new oe(Z,ne.node,x,null,ue))},g=function(w){c?(c.left=w,c=w):(h=w,c=w)};for(let w=0;w<a.count;++w){const x=a.nextBitIsOne(),N=Math.pow(2,a.count-(w+1));x?d(N,oe.BLACK):(d(N,oe.BLACK),d(N,oe.RED))}return h},o=new __(t.length),l=r(o);return new be(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let di;const Vt={};class Qe{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return v(Vt&&te,"ChildrenNode.ts has not been loaded"),di=di||new Qe({".priority":Vt},{".priority":te}),di}get(e){const n=sn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof be?n:null}hasIndex(e){return nt(this.indexSet_,e.toString())}addIndex(e,n){v(e!==Zt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(F.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=ws(s,e.getCompare()):l=Vt;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const h=Object.assign({},this.indexes_);return h[a]=l,new Qe(h,c)}addToIndexes(e,n){const s=ys(this.indexes_,(i,r)=>{const o=sn(this.indexSet_,r);if(v(o,"Missing index implementation for "+r),i===Vt)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(F.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),ws(l,o.getCompare())}else return Vt;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new F(e.name,l))),a.insert(e,e.node)}});return new Qe(s,this.indexSet_)}removeFromIndexes(e,n){const s=ys(this.indexes_,i=>{if(i===Vt)return i;{const r=n.get(e.name);return r?i.remove(new F(e.name,r)):i}});return new Qe(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vn;class P{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&xc(this.priorityNode_),this.children_.isEmpty()&&v(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return vn||(vn=new P(new be(kr),null,Qe.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||vn}updatePriority(e){return this.children_.isEmpty()?this:new P(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?vn:n}}getChild(e){const n=D(e);return n===null?this:this.getImmediateChild(n).getChild(G(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(v(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new F(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?vn:this.priorityNode_;return new P(i,o,r)}}updateChild(e,n){const s=D(e);if(s===null)return n;{v(D(e)!==".priority"||dt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(G(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(te,(o,l)=>{n[o]=l.val(e),s++,r&&P.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Sc(this.getPriority().val())+":"),this.forEachChild(te,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":tc(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new F(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new F(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new F(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,F.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,F.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Yn?-1:0}withIndex(e){if(e===Zt||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new P(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Zt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(te),i=n.getIterator(te);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Zt?null:this.indexMap_.get(e.toString())}}P.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class g_ extends P{constructor(){super(new be(kr),P.EMPTY_NODE,Qe.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return P.EMPTY_NODE}isEmpty(){return!1}}const Yn=new g_;Object.defineProperties(F,{MIN:{value:new F(rn,P.EMPTY_NODE)},MAX:{value:new F(Mt,Yn)}});Tc.__EMPTY_NODE=P.EMPTY_NODE;re.__childrenNodeConstructor=P;u_(Yn);f_(Yn);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m_=!0;function fe(t,e=null){if(t===null)return P.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),v(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new re(n,fe(e))}if(!(t instanceof Array)&&m_){const n=[];let s=!1;if(Ie(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=fe(l);a.isEmpty()||(s=s||!a.getPriority().isEmpty(),n.push(new F(o,a)))}}),n.length===0)return P.EMPTY_NODE;const r=ws(n,c_,o=>o.name,kr);if(s){const o=ws(n,te.getCompare());return new P(r,fe(e),new Qe({".priority":o},{".priority":te}))}else return new P(r,fe(e),Qe.Default)}else{let n=P.EMPTY_NODE;return Ie(t,(s,i)=>{if(nt(t,s)&&s.substring(0,1)!=="."){const r=fe(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(fe(e))}}h_(fe);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_ extends qs{constructor(e){super(),this.indexPath_=e,v(!L(e)&&D(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?dn(e.name,n.name):r}makePost(e,n){const s=fe(e),i=P.EMPTY_NODE.updateChild(this.indexPath_,s);return new F(n,i)}maxPost(){const e=P.EMPTY_NODE.updateChild(this.indexPath_,Yn);return new F(Mt,e)}toString(){return bc(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_ extends qs{compare(e,n){const s=e.node.compareTo(n.node);return s===0?dn(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return F.MIN}maxPost(){return F.MAX}makePost(e,n){const s=fe(e);return new F(n,s)}toString(){return".value"}}const v_=new C_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ml="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",E_=function(){let t=0;const e=[];return function(n){const s=n===t;t=n;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=ml.charAt(n%64),n=Math.floor(n/64);v(n===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=ml.charAt(e[i]);return v(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ac(t){return{type:"value",snapshotNode:t}}function on(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Hn(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Wn(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function b_(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){v(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(Hn(n,l)):v(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(on(n,s)):o.trackChildChange(Wn(n,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(te,(i,r)=>{n.hasChild(i)||s.trackChildChange(Hn(i,r))}),n.isLeafNode()||n.forEachChild(te,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Wn(i,r,o))}else s.trackChildChange(on(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?P.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e){this.indexedFilter_=new Mr(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Un.getStartPost_(e),this.endPost_=Un.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,s,i,r,o){return this.matches(new F(n,s))||(s=P.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=P.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(P.EMPTY_NODE);const r=this;return n.forEachChild(te,(o,l)=>{r.matches(new F(o,l))||(i=i.updateImmediateChild(o,P.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(e){this.rangedFilter_=new Un(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new F(n,s))||(s=P.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=P.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=P.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();let a;if(this.reverse_?a=this.index_.compare(this.rangedFilter_.getStartPost(),l)<=0:a=this.index_.compare(l,this.rangedFilter_.getEndPost())<=0,a)i=i.updateImmediateChild(l.name,l.node),o++;else break}}else{i=n.withIndex(this.index_),i=i.updatePriority(P.EMPTY_NODE);let r,o,l,a;if(this.reverse_){a=i.getReverseIterator(this.index_),r=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const u=this.index_.getCompare();l=(d,g)=>u(g,d)}else a=i.getIterator(this.index_),r=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),l=this.index_.getCompare();let c=0,h=!1;for(;a.hasNext();){const u=a.getNext();!h&&l(r,u)<=0&&(h=!0),h&&c<this.limit_&&l(u,o)<=0?c++:i=i.updateImmediateChild(u.name,P.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const u=this.index_.getCompare();o=(d,g)=>u(g,d)}else o=this.index_.getCompare();const l=e;v(l.numChildren()===this.limit_,"");const a=new F(n,s),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),h=this.rangedFilter_.matches(a);if(l.hasChild(n)){const u=l.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||l.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const g=d==null?1:o(d,a);if(h&&!s.isEmpty()&&g>=0)return r!=null&&r.trackChildChange(Wn(n,s,u)),l.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(Hn(n,u));const x=l.updateImmediateChild(n,P.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(on(d.name,d.node)),x.updateImmediateChild(d.name,d.node)):x}}else return s.isEmpty()?e:h&&o(c,a)>=0?(r!=null&&(r.trackChildChange(Hn(c.name,c.node)),r.trackChildChange(on(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(c.name,P.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=te}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return v(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return v(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:rn}hasEnd(){return this.endSet_}getIndexEndValue(){return v(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return v(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Mt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return v(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===te}copy(){const e=new Dr;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function I_(t){return t.loadsAllData()?new Mr(t.getIndex()):t.hasLimit()?new w_(t):new Un(t)}function yl(t){const e={};if(t.isDefault())return e;let n;return t.index_===te?n="$priority":t.index_===v_?n="$value":t.index_===Zt?n="$key":(v(t.index_ instanceof y_,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=le(n),t.startSet_&&(e.startAt=le(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+le(t.indexStartName_))),t.endSet_&&(e.endAt=le(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+le(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Cl(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==te&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is extends Cc{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Gn("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(v(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Is.getListenId_(e,s),l={};this.listens_[o]=l;const a=yl(e._queryParams);this.restRequest_(r+".json",a,(c,h)=>{let u=h;if(c===404&&(u=null,c=null),c===null&&this.onDataUpdate_(r,u,!1,s),sn(this.listens_,o)===l){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=Is.getListenId_(e,n);delete this.listens_[s]}get(e){const n=yl(e._queryParams),s=e._path.toString(),i=new Vs;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+rd(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Fn(l.responseText)}catch{we("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,a)}else l.status!==401&&l.status!==404&&we("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(){this.rootNode_=P.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ts(){return{value:null,children:new Map}}function Pc(t,e,n){if(L(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=D(e);t.children.has(s)||t.children.set(s,Ts());const i=t.children.get(s);e=G(e),Pc(i,e,n)}}function Vi(t,e,n){t.value!==null?n(e,t.value):S_(t,(s,i)=>{const r=new z(e.toString()+"/"+s);Vi(i,r,n)})}function S_(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ie(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vl=10*1e3,N_=30*1e3,R_=5*60*1e3;class A_{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new x_(e);const s=vl+(N_-vl)*Math.random();Nn(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Ie(e,(i,r)=>{r>0&&nt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Nn(this.reportStats_.bind(this),Math.floor(Math.random()*2*R_))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var He;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(He||(He={}));function Oc(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Fr(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Lr(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=He.ACK_USER_WRITE,this.source=Oc()}operationForChild(e){if(L(this.path)){if(this.affectedTree.value!=null)return v(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new z(e));return new Ss(U(),n,this.revert)}}else return v(D(this.path)===e,"operationForChild called for unrelated child."),new Ss(G(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e,n){this.source=e,this.path=n,this.type=He.LISTEN_COMPLETE}operationForChild(e){return L(this.path)?new $n(this.source,U()):new $n(this.source,G(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=He.OVERWRITE}operationForChild(e){return L(this.path)?new Dt(this.source,U(),this.snap.getImmediateChild(e)):new Dt(this.source,G(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=He.MERGE}operationForChild(e){if(L(this.path)){const n=this.children.subtree(new z(e));return n.isEmpty()?null:n.value?new Dt(this.source,U(),n.value):new Vn(this.source,U(),n)}else return v(D(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Vn(this.source,G(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(L(e))return this.isFullyInitialized()&&!this.filtered_;const n=D(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function O_(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(b_(o.childName,o.snapshotNode))}),En(t,i,"child_removed",e,s,n),En(t,i,"child_added",e,s,n),En(t,i,"child_moved",r,s,n),En(t,i,"child_changed",e,s,n),En(t,i,"value",e,s,n),i}function En(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,a)=>M_(t,l,a)),o.forEach(l=>{const a=k_(t,l,r);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,t.query_))})})}function k_(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function M_(t,e,n){if(e.childName==null||n.childName==null)throw fn("Should only compare child_ events.");const s=new F(e.childName,e.snapshotNode),i=new F(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zs(t,e){return{eventCache:t,serverCache:e}}function Rn(t,e,n,s){return zs(new Ft(e,n,s),t.serverCache)}function kc(t,e,n,s){return zs(t.eventCache,new Ft(e,n,s))}function ji(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Lt(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pi;const D_=()=>(pi||(pi=new be(gp)),pi);class X{constructor(e,n=D_()){this.value=e,this.children=n}static fromObject(e){let n=new X(null);return Ie(e,(s,i)=>{n=n.set(new z(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:U(),value:this.value};if(L(e))return null;{const s=D(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(G(e),n);return r!=null?{path:ie(new z(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(L(e))return this;{const n=D(e),s=this.children.get(n);return s!==null?s.subtree(G(e)):new X(null)}}set(e,n){if(L(e))return new X(n,this.children);{const s=D(e),r=(this.children.get(s)||new X(null)).set(G(e),n),o=this.children.insert(s,r);return new X(this.value,o)}}remove(e){if(L(e))return this.children.isEmpty()?new X(null):new X(null,this.children);{const n=D(e),s=this.children.get(n);if(s){const i=s.remove(G(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new X(null):new X(this.value,r)}else return this}}get(e){if(L(e))return this.value;{const n=D(e),s=this.children.get(n);return s?s.get(G(e)):null}}setTree(e,n){if(L(e))return n;{const s=D(e),r=(this.children.get(s)||new X(null)).setTree(G(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new X(this.value,o)}}fold(e){return this.fold_(U(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(ie(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,U(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(L(e))return null;{const r=D(e),o=this.children.get(r);return o?o.findOnPath_(G(e),ie(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,U(),n)}foreachOnPath_(e,n,s){if(L(e))return this;{this.value&&s(n,this.value);const i=D(e),r=this.children.get(i);return r?r.foreachOnPath_(G(e),ie(n,i),s):new X(null)}}foreach(e){this.foreach_(U(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(ie(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e){this.writeTree_=e}static empty(){return new Ue(new X(null))}}function An(t,e,n){if(L(e))return new Ue(new X(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Ee(i,e);return r=r.updateChild(o,n),new Ue(t.writeTree_.set(i,r))}else{const i=new X(n),r=t.writeTree_.setTree(e,i);return new Ue(r)}}}function El(t,e,n){let s=t;return Ie(n,(i,r)=>{s=An(s,ie(e,i),r)}),s}function bl(t,e){if(L(e))return Ue.empty();{const n=t.writeTree_.setTree(e,new X(null));return new Ue(n)}}function qi(t,e){return Bt(t,e)!=null}function Bt(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ee(n.path,e)):null}function wl(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(te,(s,i)=>{e.push(new F(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new F(s,i.value))}),e}function ht(t,e){if(L(e))return t;{const n=Bt(t,e);return n!=null?new Ue(new X(n)):new Ue(t.writeTree_.subtree(e))}}function zi(t){return t.writeTree_.isEmpty()}function ln(t,e){return Mc(U(),t.writeTree_,e)}function Mc(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(v(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Mc(ie(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(ie(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Br(t,e){return Bc(e,t)}function F_(t,e,n,s,i){v(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=An(t.visibleWrites,e,n)),t.lastWriteId=s}function L_(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function B_(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);v(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&H_(l,s.path)?i=!1:Be(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return W_(t),!0;if(s.snap)t.visibleWrites=bl(t.visibleWrites,s.path);else{const l=s.children;Ie(l,a=>{t.visibleWrites=bl(t.visibleWrites,ie(s.path,a))})}return!0}else return!1}function H_(t,e){if(t.snap)return Be(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Be(ie(t.path,n),e))return!0;return!1}function W_(t){t.visibleWrites=Dc(t.allWrites,U_,U()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function U_(t){return t.visible}function Dc(t,e,n){let s=Ue.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)Be(n,o)?(l=Ee(n,o),s=An(s,l,r.snap)):Be(o,n)&&(l=Ee(o,n),s=An(s,U(),r.snap.getChild(l)));else if(r.children){if(Be(n,o))l=Ee(n,o),s=El(s,l,r.children);else if(Be(o,n))if(l=Ee(o,n),L(l))s=El(s,U(),r.children);else{const a=sn(r.children,D(l));if(a){const c=a.getChild(G(l));s=An(s,U(),c)}}}else throw fn("WriteRecord should have .snap or .children")}}return s}function Fc(t,e,n,s,i){if(!s&&!i){const r=Bt(t.visibleWrites,e);if(r!=null)return r;{const o=ht(t.visibleWrites,e);if(zi(o))return n;if(n==null&&!qi(o,U()))return null;{const l=n||P.EMPTY_NODE;return ln(o,l)}}}else{const r=ht(t.visibleWrites,e);if(!i&&zi(r))return n;if(!i&&n==null&&!qi(r,U()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(Be(c.path,e)||Be(e,c.path))},l=Dc(t.allWrites,o,e),a=n||P.EMPTY_NODE;return ln(l,a)}}}function $_(t,e,n){let s=P.EMPTY_NODE;const i=Bt(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(te,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=ht(t.visibleWrites,e);return n.forEachChild(te,(o,l)=>{const a=ln(ht(r,new z(o)),l);s=s.updateImmediateChild(o,a)}),wl(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=ht(t.visibleWrites,e);return wl(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function V_(t,e,n,s,i){v(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=ie(e,n);if(qi(t.visibleWrites,r))return null;{const o=ht(t.visibleWrites,r);return zi(o)?i.getChild(n):ln(o,i.getChild(n))}}function j_(t,e,n,s){const i=ie(e,n),r=Bt(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=ht(t.visibleWrites,i);return ln(o,s.getNode().getImmediateChild(n))}else return null}function q_(t,e){return Bt(t.visibleWrites,e)}function z_(t,e,n,s,i,r,o){let l;const a=ht(t.visibleWrites,e),c=Bt(a,U());if(c!=null)l=c;else if(n!=null)l=ln(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const h=[],u=o.getCompare(),d=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let g=d.getNext();for(;g&&h.length<i;)u(g,s)!==0&&h.push(g),g=d.getNext();return h}else return[]}function K_(){return{visibleWrites:Ue.empty(),allWrites:[],lastWriteId:-1}}function xs(t,e,n,s){return Fc(t.writeTree,t.treePath,e,n,s)}function Hr(t,e){return $_(t.writeTree,t.treePath,e)}function Il(t,e,n,s){return V_(t.writeTree,t.treePath,e,n,s)}function Ns(t,e){return q_(t.writeTree,ie(t.treePath,e))}function G_(t,e,n,s,i,r){return z_(t.writeTree,t.treePath,e,n,s,i,r)}function Wr(t,e,n){return j_(t.writeTree,t.treePath,e,n)}function Lc(t,e){return Bc(ie(t.treePath,e),t.writeTree)}function Bc(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y_{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;v(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),v(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Wn(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,Hn(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,on(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Wn(s,e.snapshotNode,i.oldSnap));else throw fn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Hc=new Q_;class Ur{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Ft(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Wr(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Lt(this.viewCache_),r=G_(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X_(t){return{filter:t}}function J_(t,e){v(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),v(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Z_(t,e,n,s,i){const r=new Y_;let o,l;if(n.type===He.OVERWRITE){const c=n;c.source.fromUser?o=Ki(t,e,c.path,c.snap,s,i,r):(v(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!L(c.path),o=Rs(t,e,c.path,c.snap,s,i,l,r))}else if(n.type===He.MERGE){const c=n;c.source.fromUser?o=tg(t,e,c.path,c.children,s,i,r):(v(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=Gi(t,e,c.path,c.children,s,i,l,r))}else if(n.type===He.ACK_USER_WRITE){const c=n;c.revert?o=ig(t,e,c.path,s,i,r):o=ng(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===He.LISTEN_COMPLETE)o=sg(t,e,n.path,s,r);else throw fn("Unknown operation type: "+n.type);const a=r.getChanges();return eg(e,o,a),{viewCache:o,changes:a}}function eg(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=ji(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Ac(ji(e)))}}function Wc(t,e,n,s,i,r){const o=e.eventCache;if(Ns(s,n)!=null)return e;{let l,a;if(L(n))if(v(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Lt(e),h=c instanceof P?c:P.EMPTY_NODE,u=Hr(s,h);l=t.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const c=xs(s,Lt(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=D(n);if(c===".priority"){v(dt(n)===1,"Can't have a priority with additional path components");const h=o.getNode();a=e.serverCache.getNode();const u=Il(s,n,h,a);u!=null?l=t.filter.updatePriority(h,u):l=o.getNode()}else{const h=G(n);let u;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const d=Il(s,n,o.getNode(),a);d!=null?u=o.getNode().getImmediateChild(c).updateChild(h,d):u=o.getNode().getImmediateChild(c)}else u=Wr(s,c,e.serverCache);u!=null?l=t.filter.updateChild(o.getNode(),c,u,h,i,r):l=o.getNode()}}return Rn(e,l,o.isFullyInitialized()||L(n),t.filter.filtersNodes())}}function Rs(t,e,n,s,i,r,o,l){const a=e.serverCache;let c;const h=o?t.filter:t.filter.getIndexedFilter();if(L(n))c=h.updateFullNode(a.getNode(),s,null);else if(h.filtersNodes()&&!a.isFiltered()){const g=a.getNode().updateChild(n,s);c=h.updateFullNode(a.getNode(),g,null)}else{const g=D(n);if(!a.isCompleteForPath(n)&&dt(n)>1)return e;const w=G(n),N=a.getNode().getImmediateChild(g).updateChild(w,s);g===".priority"?c=h.updatePriority(a.getNode(),N):c=h.updateChild(a.getNode(),g,N,w,Hc,null)}const u=kc(e,c,a.isFullyInitialized()||L(n),h.filtersNodes()),d=new Ur(i,u,r);return Wc(t,u,n,i,d,l)}function Ki(t,e,n,s,i,r,o){const l=e.eventCache;let a,c;const h=new Ur(i,e,r);if(L(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),a=Rn(e,c,!0,t.filter.filtersNodes());else{const u=D(n);if(u===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),a=Rn(e,c,l.isFullyInitialized(),l.isFiltered());else{const d=G(n),g=l.getNode().getImmediateChild(u);let w;if(L(d))w=s;else{const x=h.getCompleteChild(u);x!=null?Ec(d)===".priority"&&x.getChild(wc(d)).isEmpty()?w=x:w=x.updateChild(d,s):w=P.EMPTY_NODE}if(g.equals(w))a=e;else{const x=t.filter.updateChild(l.getNode(),u,w,d,h,o);a=Rn(e,x,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Tl(t,e){return t.eventCache.isCompleteForChild(e)}function tg(t,e,n,s,i,r,o){let l=e;return s.foreach((a,c)=>{const h=ie(n,a);Tl(e,D(h))&&(l=Ki(t,l,h,c,i,r,o))}),s.foreach((a,c)=>{const h=ie(n,a);Tl(e,D(h))||(l=Ki(t,l,h,c,i,r,o))}),l}function Sl(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Gi(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;L(n)?c=s:c=new X(null).setTree(n,s);const h=e.serverCache.getNode();return c.children.inorderTraversal((u,d)=>{if(h.hasChild(u)){const g=e.serverCache.getNode().getImmediateChild(u),w=Sl(t,g,d);a=Rs(t,a,new z(u),w,i,r,o,l)}}),c.children.inorderTraversal((u,d)=>{const g=!e.serverCache.isCompleteForChild(u)&&d.value===void 0;if(!h.hasChild(u)&&!g){const w=e.serverCache.getNode().getImmediateChild(u),x=Sl(t,w,d);a=Rs(t,a,new z(u),x,i,r,o,l)}}),a}function ng(t,e,n,s,i,r,o){if(Ns(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(s.value!=null){if(L(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return Rs(t,e,n,a.getNode().getChild(n),i,r,l,o);if(L(n)){let c=new X(null);return a.getNode().forEachChild(Zt,(h,u)=>{c=c.set(new z(h),u)}),Gi(t,e,n,c,i,r,l,o)}else return e}else{let c=new X(null);return s.foreach((h,u)=>{const d=ie(n,h);a.isCompleteForPath(d)&&(c=c.set(h,a.getNode().getChild(d)))}),Gi(t,e,n,c,i,r,l,o)}}function sg(t,e,n,s,i){const r=e.serverCache,o=kc(e,r.getNode(),r.isFullyInitialized()||L(n),r.isFiltered());return Wc(t,o,n,s,Hc,i)}function ig(t,e,n,s,i,r){let o;if(Ns(s,n)!=null)return e;{const l=new Ur(s,e,i),a=e.eventCache.getNode();let c;if(L(n)||D(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=xs(s,Lt(e));else{const u=e.serverCache.getNode();v(u instanceof P,"serverChildren would be complete if leaf node"),h=Hr(s,u)}h=h,c=t.filter.updateFullNode(a,h,r)}else{const h=D(n);let u=Wr(s,h,e.serverCache);u==null&&e.serverCache.isCompleteForChild(h)&&(u=a.getImmediateChild(h)),u!=null?c=t.filter.updateChild(a,h,u,G(n),l,r):e.eventCache.getNode().hasChild(h)?c=t.filter.updateChild(a,h,P.EMPTY_NODE,G(n),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=xs(s,Lt(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Ns(s,U())!=null,Rn(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Mr(s.getIndex()),r=I_(s);this.processor_=X_(r);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(P.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(P.EMPTY_NODE,l.getNode(),null),h=new Ft(a,o.isFullyInitialized(),i.filtersNodes()),u=new Ft(c,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=zs(u,h),this.eventGenerator_=new P_(this.query_)}get query(){return this.query_}}function og(t){return t.viewCache_.serverCache.getNode()}function lg(t,e){const n=Lt(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!L(e)&&!n.getImmediateChild(D(e)).isEmpty())?n.getChild(e):null}function xl(t){return t.eventRegistrations_.length===0}function ag(t,e){t.eventRegistrations_.push(e)}function Nl(t,e,n){const s=[];if(n){v(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function Rl(t,e,n,s){e.type===He.MERGE&&e.source.queryId!==null&&(v(Lt(t.viewCache_),"We should always have a full cache before handling merges"),v(ji(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=Z_(t.processor_,i,e,n,s);return J_(t.processor_,r.viewCache),v(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Uc(t,r.changes,r.viewCache.eventCache.getNode(),null)}function cg(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(te,(r,o)=>{s.push(on(r,o))}),n.isFullyInitialized()&&s.push(Ac(n.getNode())),Uc(t,s,n.getNode(),e)}function Uc(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return O_(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let As;class ug{constructor(){this.views=new Map}}function hg(t){v(!As,"__referenceConstructor has already been defined"),As=t}function fg(){return v(As,"Reference.ts has not been loaded"),As}function dg(t){return t.views.size===0}function $r(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return v(r!=null,"SyncTree gave us an op for an invalid query."),Rl(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Rl(o,e,n,s));return r}}function pg(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=xs(n,i?s:null),a=!1;l?a=!0:s instanceof P?(l=Hr(n,s),a=!1):(l=P.EMPTY_NODE,a=!1);const c=zs(new Ft(l,a,!1),new Ft(s,i,!1));return new rg(e,c)}return o}function _g(t,e,n,s,i,r){const o=pg(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),ag(o,n),cg(o,n)}function gg(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const l=pt(t);if(i==="default")for(const[a,c]of t.views.entries())o=o.concat(Nl(c,n,s)),xl(c)&&(t.views.delete(a),c.query._queryParams.loadsAllData()||r.push(c.query));else{const a=t.views.get(i);a&&(o=o.concat(Nl(a,n,s)),xl(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!pt(t)&&r.push(new(fg())(e._repo,e._path)),{removed:r,events:o}}function $c(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function en(t,e){let n=null;for(const s of t.views.values())n=n||lg(s,e);return n}function Vc(t,e){if(e._queryParams.loadsAllData())return Ks(t);{const s=e._queryIdentifier;return t.views.get(s)}}function jc(t,e){return Vc(t,e)!=null}function pt(t){return Ks(t)!=null}function Ks(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ps;function mg(t){v(!Ps,"__referenceConstructor has already been defined"),Ps=t}function yg(){return v(Ps,"Reference.ts has not been loaded"),Ps}let Cg=1;class Al{constructor(e){this.listenProvider_=e,this.syncPointTree_=new X(null),this.pendingWriteTree_=K_(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function qc(t,e,n,s,i){return F_(t.pendingWriteTree_,e,n,s,i),i?Qn(t,new Dt(Oc(),e,n)):[]}function Tt(t,e,n=!1){const s=L_(t.pendingWriteTree_,e);if(B_(t.pendingWriteTree_,e)){let r=new X(null);return s.snap!=null?r=r.set(U(),!0):Ie(s.children,o=>{r=r.set(new z(o),!0)}),Qn(t,new Ss(s.path,r,n))}else return[]}function Gs(t,e,n){return Qn(t,new Dt(Fr(),e,n))}function vg(t,e,n){const s=X.fromObject(n);return Qn(t,new Vn(Fr(),e,s))}function Eg(t,e){return Qn(t,new $n(Fr(),e))}function bg(t,e,n){const s=jr(t,n);if(s){const i=qr(s),r=i.path,o=i.queryId,l=Ee(r,e),a=new $n(Lr(o),l);return zr(t,r,a)}else return[]}function Yi(t,e,n,s){const i=e._path,r=t.syncPointTree_.get(i);let o=[];if(r&&(e._queryIdentifier==="default"||jc(r,e))){const l=gg(r,e,n,s);dg(r)&&(t.syncPointTree_=t.syncPointTree_.remove(i));const a=l.removed;o=l.events;const c=a.findIndex(u=>u._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(i,(u,d)=>pt(d));if(c&&!h){const u=t.syncPointTree_.subtree(i);if(!u.isEmpty()){const d=Tg(u);for(let g=0;g<d.length;++g){const w=d[g],x=w.query,N=Gc(t,w);t.listenProvider_.startListening(Pn(x),Os(t,x),N.hashFn,N.onComplete)}}}!h&&a.length>0&&!s&&(c?t.listenProvider_.stopListening(Pn(e),null):a.forEach(u=>{const d=t.queryToTagMap.get(Ys(u));t.listenProvider_.stopListening(Pn(u),d)})),Sg(t,a)}return o}function wg(t,e,n,s){const i=jr(t,s);if(i!=null){const r=qr(i),o=r.path,l=r.queryId,a=Ee(o,e),c=new Dt(Lr(l),a,n);return zr(t,o,c)}else return[]}function Ig(t,e,n,s){const i=jr(t,s);if(i){const r=qr(i),o=r.path,l=r.queryId,a=Ee(o,e),c=X.fromObject(n),h=new Vn(Lr(l),a,c);return zr(t,o,h)}else return[]}function Pl(t,e,n){const s=e._path;let i=null,r=!1;t.syncPointTree_.foreachOnPath(s,(u,d)=>{const g=Ee(u,s);i=i||en(d,g),r=r||pt(d)});let o=t.syncPointTree_.get(s);o?(r=r||pt(o),i=i||en(o,U())):(o=new ug,t.syncPointTree_=t.syncPointTree_.set(s,o));let l;i!=null?l=!0:(l=!1,i=P.EMPTY_NODE,t.syncPointTree_.subtree(s).foreachChild((d,g)=>{const w=en(g,U());w&&(i=i.updateImmediateChild(d,w))}));const a=jc(o,e);if(!a&&!e._queryParams.loadsAllData()){const u=Ys(e);v(!t.queryToTagMap.has(u),"View does not exist, but we have a tag");const d=xg();t.queryToTagMap.set(u,d),t.tagToQueryMap.set(d,u)}const c=Br(t.pendingWriteTree_,s);let h=_g(o,e,n,c,i,l);if(!a&&!r){const u=Vc(o,e);h=h.concat(Ng(t,e,u))}return h}function Vr(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Ee(o,e),c=en(l,a);if(c)return c});return Fc(i,e,r,n,!0)}function Qn(t,e){return zc(e,t.syncPointTree_,null,Br(t.pendingWriteTree_,U()))}function zc(t,e,n,s){if(L(t.path))return Kc(t,e,n,s);{const i=e.get(U());n==null&&i!=null&&(n=en(i,U()));let r=[];const o=D(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const c=n?n.getImmediateChild(o):null,h=Lc(s,o);r=r.concat(zc(l,a,c,h))}return i&&(r=r.concat($r(i,t,s,n))),r}}function Kc(t,e,n,s){const i=e.get(U());n==null&&i!=null&&(n=en(i,U()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,c=Lc(s,o),h=t.operationForChild(o);h&&(r=r.concat(Kc(h,l,a,c)))}),i&&(r=r.concat($r(i,t,s,n))),r}function Gc(t,e){const n=e.query,s=Os(t,n);return{hashFn:()=>(og(e)||P.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?bg(t,n._path,s):Eg(t,n._path);{const r=Cp(i,n);return Yi(t,n,null,r)}}}}function Os(t,e){const n=Ys(e);return t.queryToTagMap.get(n)}function Ys(t){return t._path.toString()+"$"+t._queryIdentifier}function jr(t,e){return t.tagToQueryMap.get(e)}function qr(t){const e=t.indexOf("$");return v(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new z(t.substr(0,e))}}function zr(t,e,n){const s=t.syncPointTree_.get(e);v(s,"Missing sync point for query tag that we're tracking");const i=Br(t.pendingWriteTree_,e);return $r(s,n,i,null)}function Tg(t){return t.fold((e,n,s)=>{if(n&&pt(n))return[Ks(n)];{let i=[];return n&&(i=$c(n)),Ie(s,(r,o)=>{i=i.concat(o)}),i}})}function Pn(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(yg())(t._repo,t._path):t}function Sg(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Ys(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function xg(){return Cg++}function Ng(t,e,n){const s=e._path,i=Os(t,e),r=Gc(t,n),o=t.listenProvider_.startListening(Pn(e),i,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(s);if(i)v(!pt(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,h,u)=>{if(!L(c)&&h&&pt(h))return[Ks(h).query];{let d=[];return h&&(d=d.concat($c(h).map(g=>g.query))),Ie(u,(g,w)=>{d=d.concat(w)}),d}});for(let c=0;c<a.length;++c){const h=a[c];t.listenProvider_.stopListening(Pn(h),Os(t,h))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Kr(n)}node(){return this.node_}}class Gr{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ie(this.path_,e);return new Gr(this.syncTree_,n)}node(){return Vr(this.syncTree_,this.path_)}}const Rg=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Ol=function(t,e,n){if(!t||typeof t!="object")return t;if(v(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Ag(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Pg(t[".sv"],e);v(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Ag=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:v(!1,"Unexpected server value: "+t)}},Pg=function(t,e,n){t.hasOwnProperty("increment")||v(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&v(!1,"Unexpected increment value: "+s);const i=e.node();if(v(i!==null&&typeof i!="undefined","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Og=function(t,e,n,s){return Yr(e,new Gr(n,t),s)},Yc=function(t,e,n){return Yr(t,new Kr(e),n)};function Yr(t,e,n){const s=t.getPriority().val(),i=Ol(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=Ol(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new re(l,fe(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new re(i))),o.forEachChild(te,(l,a)=>{const c=Yr(a,e.getImmediateChild(l),n);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Xr(t,e){let n=e instanceof z?e:new z(e),s=t,i=D(n);for(;i!==null;){const r=sn(s.node.children,i)||{children:{},childCount:0};s=new Qr(i,s,r),n=G(n),i=D(n)}return s}function _n(t){return t.node.value}function Qc(t,e){t.node.value=e,Qi(t)}function Xc(t){return t.node.childCount>0}function kg(t){return _n(t)===void 0&&!Xc(t)}function Qs(t,e){Ie(t.node.children,(n,s)=>{e(new Qr(n,t,s))})}function Jc(t,e,n,s){n&&!s&&e(t),Qs(t,i=>{Jc(i,e,!0,s)}),n&&s&&e(t)}function Mg(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Xn(t){return new z(t.parent===null?t.name:Xn(t.parent)+"/"+t.name)}function Qi(t){t.parent!==null&&Dg(t.parent,t.name,t)}function Dg(t,e,n){const s=kg(n),i=nt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Qi(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Qi(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fg=/[\[\].#$\/\u0000-\u001F\u007F]/,Lg=/[\[\].#$\u0000-\u001F\u007F]/,_i=10*1024*1024,Zc=function(t){return typeof t=="string"&&t.length!==0&&!Fg.test(t)},eu=function(t){return typeof t=="string"&&t.length!==0&&!Lg.test(t)},Bg=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),eu(t)},tu=function(t,e,n,s){s&&e===void 0||Jr(Ir(t,"value"),e,n)},Jr=function(t,e,n){const s=n instanceof z?new e_(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+vt(s));if(typeof e=="function")throw new Error(t+"contains a function "+vt(s)+" with contents = "+e.toString());if(nc(e))throw new Error(t+"contains "+e.toString()+" "+vt(s));if(typeof e=="string"&&e.length>_i/3&&js(e)>_i)throw new Error(t+"contains a string greater than "+_i+" utf8 bytes "+vt(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Ie(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Zc(o)))throw new Error(t+" contains an invalid key ("+o+") "+vt(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);t_(s,o),Jr(t,l,s),n_(s)}),i&&r)throw new Error(t+' contains ".value" child '+vt(s)+" in addition to actual children.")}},nu=function(t,e,n,s){if(!(s&&n===void 0)&&!eu(n))throw new Error(Ir(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Hg=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),nu(t,e,n,s)},Zr=function(t,e){if(D(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},Wg=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Zc(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Bg(n))throw new Error(Ir(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function eo(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Pr(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function su(t,e,n){eo(t,n),iu(t,s=>Pr(s,e))}function et(t,e,n){eo(t,n),iu(t,s=>Be(s,e)||Be(e,s))}function iu(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?($g(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function $g(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();At&&pe("event: "+n.toString()),pn(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vg="repo_interrupt",jg=25;class qg{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Ug,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ts(),this.transactionQueueTree_=new Qr,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function zg(t,e,n){if(t.stats_=Nr(t.repoInfo_),t.forceRestClient_||wp())t.server_=new Is(t.repoInfo_,(s,i,r,o)=>{kl(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Ml(t,!0),0);else{if(typeof n!="undefined"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{le(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Je(t.repoInfo_,e,(s,i,r,o)=>{kl(t,s,i,r,o)},s=>{Ml(t,s)},s=>{Kg(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=Ap(t.repoInfo_,()=>new A_(t.stats_,t.server_)),t.infoData_=new T_,t.infoSyncTree_=new Al({startListening:(s,i,r,o)=>{let l=[];const a=t.infoData_.getNode(s._path);return a.isEmpty()||(l=Gs(t.infoSyncTree_,s._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),no(t,"connected",!1),t.serverSyncTree_=new Al({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,a)=>{const c=o(l,a);et(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function ru(t){const n=t.infoData_.getNode(new z(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function to(t){return Rg({timestamp:ru(t)})}function kl(t,e,n,s,i){t.dataUpdateCount++;const r=new z(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const a=ys(n,c=>fe(c));o=Ig(t.serverSyncTree_,r,a,i)}else{const a=fe(n);o=wg(t.serverSyncTree_,r,a,i)}else if(s){const a=ys(n,c=>fe(c));o=vg(t.serverSyncTree_,r,a)}else{const a=fe(n);o=Gs(t.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=Xs(t,r)),et(t.eventQueue_,l,o)}function Ml(t,e){no(t,"connected",e),e===!1&&Yg(t)}function Kg(t,e){Ie(e,(n,s)=>{no(t,n,s)})}function no(t,e,n){const s=new z("/.info/"+e),i=fe(n);t.infoData_.updateSnapshot(s,i);const r=Gs(t.infoSyncTree_,s,i);et(t.eventQueue_,s,r)}function ou(t){return t.nextWriteId_++}function Gg(t,e,n,s,i){so(t,"set",{path:e.toString(),value:n,priority:s});const r=to(t),o=fe(n,s),l=Vr(t.serverSyncTree_,e),a=Yc(o,l,r),c=ou(t),h=qc(t.serverSyncTree_,e,a,c,!0);eo(t.eventQueue_,h),t.server_.put(e.toString(),o.val(!0),(d,g)=>{const w=d==="ok";w||we("set at "+e+" failed: "+d);const x=Tt(t.serverSyncTree_,c,!w);et(t.eventQueue_,e,x),Jg(t,i,d,g)});const u=hu(t,e);Xs(t,u),et(t.eventQueue_,u,[])}function Yg(t){so(t,"onDisconnectEvents");const e=to(t),n=Ts();Vi(t.onDisconnect_,U(),(i,r)=>{const o=Og(i,r,t.serverSyncTree_,e);Pc(n,i,o)});let s=[];Vi(n,U(),(i,r)=>{s=s.concat(Gs(t.serverSyncTree_,i,r));const o=hu(t,i);Xs(t,o)}),t.onDisconnect_=Ts(),et(t.eventQueue_,U(),s)}function Qg(t,e,n){let s;D(e._path)===".info"?s=Pl(t.infoSyncTree_,e,n):s=Pl(t.serverSyncTree_,e,n),su(t.eventQueue_,e._path,s)}function Dl(t,e,n){let s;D(e._path)===".info"?s=Yi(t.infoSyncTree_,e,n):s=Yi(t.serverSyncTree_,e,n),su(t.eventQueue_,e._path,s)}function Xg(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Vg)}function so(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),pe(n,...e)}function Jg(t,e,n,s){e&&pn(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function lu(t,e,n){return Vr(t.serverSyncTree_,e,n)||P.EMPTY_NODE}function io(t,e=t.transactionQueueTree_){if(e||Js(t,e),_n(e)){const n=cu(t,e);v(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Zg(t,Xn(e),n)}else Xc(e)&&Qs(e,n=>{io(t,n)})}function Zg(t,e,n){const s=n.map(c=>c.currentWriteId),i=lu(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const h=n[c];v(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const u=Ee(e,h.path);r=r.updateChild(u,h.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;t.server_.put(a.toString(),l,c=>{so(t,"transaction put response",{path:a.toString(),status:c});let h=[];if(c==="ok"){const u=[];for(let d=0;d<n.length;d++)n[d].status=2,h=h.concat(Tt(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&u.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Js(t,Xr(t.transactionQueueTree_,e)),io(t,t.transactionQueueTree_),et(t.eventQueue_,e,h);for(let d=0;d<u.length;d++)pn(u[d])}else{if(c==="datastale")for(let u=0;u<n.length;u++)n[u].status===3?n[u].status=4:n[u].status=0;else{we("transaction at "+a.toString()+" failed: "+c);for(let u=0;u<n.length;u++)n[u].status=4,n[u].abortReason=c}Xs(t,e)}},o)}function Xs(t,e){const n=au(t,e),s=Xn(n),i=cu(t,n);return em(t,i,s),s}function em(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=Ee(n,a.path);let h=!1,u;if(v(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)h=!0,u=a.abortReason,i=i.concat(Tt(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=jg)h=!0,u="maxretry",i=i.concat(Tt(t.serverSyncTree_,a.currentWriteId,!0));else{const d=lu(t,a.path,o);a.currentInputSnapshot=d;const g=e[l].update(d.val());if(g!==void 0){Jr("transaction failed: Data returned ",g,a.path);let w=fe(g);typeof g=="object"&&g!=null&&nt(g,".priority")||(w=w.updatePriority(d.getPriority()));const N=a.currentWriteId,B=to(t),ue=Yc(w,d,B);a.currentOutputSnapshotRaw=w,a.currentOutputSnapshotResolved=ue,a.currentWriteId=ou(t),o.splice(o.indexOf(N),1),i=i.concat(qc(t.serverSyncTree_,a.path,ue,a.currentWriteId,a.applyLocally)),i=i.concat(Tt(t.serverSyncTree_,N,!0))}else h=!0,u="nodata",i=i.concat(Tt(t.serverSyncTree_,a.currentWriteId,!0))}et(t.eventQueue_,n,i),i=[],h&&(e[l].status=2,function(d){setTimeout(d,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(u==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(u),!1,null))))}Js(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)pn(s[l]);io(t,t.transactionQueueTree_)}function au(t,e){let n,s=t.transactionQueueTree_;for(n=D(e);n!==null&&_n(s)===void 0;)s=Xr(s,n),e=G(e),n=D(e);return s}function cu(t,e){const n=[];return uu(t,e,n),n.sort((s,i)=>s.order-i.order),n}function uu(t,e,n){const s=_n(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Qs(e,i=>{uu(t,i,n)})}function Js(t,e){const n=_n(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Qc(e,n.length>0?n:void 0)}Qs(e,s=>{Js(t,s)})}function hu(t,e){const n=Xn(au(t,e)),s=Xr(t.transactionQueueTree_,e);return Mg(s,i=>{gi(t,i)}),gi(t,s),Jc(s,i=>{gi(t,i)}),n}function gi(t,e){const n=_n(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(v(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(v(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Tt(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Qc(e,void 0):n.length=r+1,et(t.eventQueue_,Xn(e),i);for(let o=0;o<s.length;o++)pn(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tm(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function nm(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):we(`Invalid query segment '${n}' in query '${t}'`)}return e}const Fl=function(t,e){const n=sm(t),s=n.namespace;n.domain==="firebase.com"&&kt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&kt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||pp();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new xp(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new z(n.pathString)}},sm=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",a=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let h=t.indexOf("/");h===-1&&(h=t.length);let u=t.indexOf("?");u===-1&&(u=t.length),e=t.substring(0,Math.min(h,u)),h<u&&(i=tm(t.substring(h,u)));const d=nm(t.substring(Math.min(t.length,u)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const g=e.slice(0,c);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const w=e.indexOf(".");s=e.substring(0,w).toLowerCase(),n=e.substring(w+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:a,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+le(this.snapshot.exportVal())}}class du{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return v(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return L(this._path)?null:Ec(this._path)}get ref(){return new st(this._repo,this._path)}get _queryIdentifier(){const e=Cl(this._queryParams),n=Sr(e);return n==="{}"?"default":n}get _queryObject(){return Cl(this._queryParams)}isEqual(e){if(e=zn(e),!(e instanceof ro))return!1;const n=this._repo===e._repo,s=Pr(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Zp(this._path)}}class st extends ro{constructor(e,n){super(e,n,new Dr,!1)}get parent(){const e=wc(this._path);return e===null?null:new st(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class jn{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new z(e),s=an(this.ref,e);return new jn(this._node.getChild(n),s,te)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new jn(i,an(this.ref,s),te)))}hasChild(e){const n=new z(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function oo(t,e){return t=zn(t),t._checkNotDeleted("ref"),e!==void 0?an(t._root,e):t._root}function an(t,e){return t=zn(t),D(t._path)===null?Hg("child","path",e,!1):nu("child","path",e,!1),new st(t._repo,ie(t._path,e))}function rm(t,e){t=zn(t),Zr("push",t._path),tu("push",e,t._path,!0);const n=ru(t._repo),s=E_(n),i=an(t,s),r=an(t,s);let o;return e!=null?o=pu(r,e).then(()=>r):o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function om(t){return Zr("remove",t._path),pu(t,null)}function pu(t,e){t=zn(t),Zr("set",t._path),tu("set",e,t._path,!1);const n=new Vs;return Gg(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class lo{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new fu("value",this,new jn(e.snapshotNode,new st(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new du(this,e,n):null}matches(e){return e instanceof lo?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class ao{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new du(this,e,n):null}createEvent(e,n){v(e.childName!=null,"Child events should have a childName.");const s=an(new st(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new fu(e.type,this,new jn(e.snapshotNode,s,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof ao?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function lm(t,e,n,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const a=n,c=(h,u)=>{Dl(t._repo,t,l),a(h,u)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new im(n,r||void 0),l=e==="value"?new lo(o):new ao(e,o);return Qg(t._repo,t,l),()=>Dl(t._repo,t,l)}function am(t,e,n,s){return lm(t,"value",e,n,s)}hg(st);mg(st);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cm="FIREBASE_DATABASE_EMULATOR_HOST",Xi={};let um=!1;function hm(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||kt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),pe("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Fl(r,i),l=o.repoInfo,a,c;typeof process!="undefined"&&process.env&&(c=process.env[cm]),c?(a=!0,r=`http://${c}?ns=${l.namespace}`,o=Fl(r,i),l=o.repoInfo):a=!o.repoInfo.secure;const h=i&&a?new Wi(Wi.OWNER):new Tp(t.name,t.options,e);Wg("Invalid Firebase Database URL",o),L(o.path)||kt("Database URL must point to the root of a Firebase Database (not including a child path).");const u=dm(l,t,h,new Ip(t.name,n));return new pm(u,t)}function fm(t,e){const n=Xi[e];(!n||n[t.key]!==t)&&kt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Xg(t),delete n[t.key]}function dm(t,e,n,s){let i=Xi[e.name];i||(i={},Xi[e.name]=i);let r=i[t.toURLString()];return r&&kt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new qg(t,um,n,s),i[t.toURLString()]=r,r}class pm{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(zg(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new st(this._repo,U())),this._rootInternal}_delete(){return this._rootInternal!==null&&(fm(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&kt("Cannot call "+e+" on a deleted database.")}}function _m(t=Xd(),e){return zd(t,"database").getImmediate({identifier:e})}/**
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
 */function gm(t){cp(Yd),vs(new Ln("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return hm(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),Xt(tl,nl,t),Xt(tl,nl,"esm2017")}Je.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Je.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};gm();const mm={apiKey:"AIzaSyAsXHXd9Spu67AO6DV06x2E_EnVOIAu9UU",authDomain:"quick-retro.firebaseapp.com",projectId:"quick-retro",storageBucket:"quick-retro.appspot.com",messagingSenderId:"293134428599",appId:"1:293134428599:web:bad71d4fedbda8080ce032",databaseURL:"https://quick-retro-default-rtdb.europe-west1.firebasedatabase.app"},ym=Qd(mm),co=_m(ym);function Cm(t){const e=qn({});return am(oo(co,t),n=>{Object.entries(n.val()).forEach(([s,i])=>{e[s]=i})}),e}function vm(t,e,n){const s=oo(co,`${t}/columns/${e}/cards`);rm(s,{text:n})}function Em(t,e,n){om(oo(co,`${t}/columns/${e}/cards/${n}`))}var _u=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n};const bm=gr({props:{text:null,color:null,onDelete:null,id:null},setup(t){return La(e=>({d60dc1b2:t.color})),(e,n)=>(Nt(),Mn("li",null,[Ye("button",{onClick:n[0]||(n[0]=s=>t.onDelete(t.id))},"\u2716"),Pa(" "+Bl(t.text),1)]))}});var wm=_u(bm,[["__scopeId","data-v-60e85460"]]);const Im=gr({props:{title:null,color:null,boardId:null,columnId:null,cards:null},setup(t){const{columnId:e,boardId:n}=t;La(o=>({"7341fd68":t.color}));const s=qn({inputText:""});function i(o){o.preventDefault(),s.inputText.trim()!==""&&(vm(n,e,s.inputText),s.inputText="")}function r(o){Em(n,e,o)}return(o,l)=>(Nt(),Mn("section",null,[Ye("h2",null,Bl(t.title),1),Ye("ul",null,[(Nt(!0),Mn(ve,null,Oa(t.cards,(a,c)=>(Nt(),Ra(wm,{id:c,text:a.text,color:t.color,onDelete:r},null,8,["id","text","color"]))),256))]),Ye("form",{target:"#",onSubmit:i},[Qh(Ye("input",{"onUpdate:modelValue":l[0]||(l[0]=a=>fs(s).inputText=a)},null,512),[[$f,fs(s).inputText]])],32)]))}});var Tm=_u(Im,[["__scopeId","data-v-41716e98"]]);const Sm=Ye("h1",null,"\u{1F680} quick retro \u{1F680}",-1),xm=gr({setup(t){const e="1",n=Cm(e);return(s,i)=>(Nt(),Mn(ve,null,[Sm,Ye("main",null,[(Nt(!0),Mn(ve,null,Oa(fs(n).columns,r=>(Nt(),Ra(Tm,{cards:r.cards,"column-id":r.id,"board-id":e,key:r.id,title:r.title,color:r.color},null,8,["cards","column-id","title","color"]))),128))])],64))}});qf(xm).mount("#app");
