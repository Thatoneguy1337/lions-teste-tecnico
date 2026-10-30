(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))d(p);new MutationObserver(p=>{for(const h of p)if(h.type==="childList")for(const j of h.addedNodes)j.tagName==="LINK"&&j.rel==="modulepreload"&&d(j)}).observe(document,{childList:!0,subtree:!0});function s(p){const h={};return p.integrity&&(h.integrity=p.integrity),p.referrerPolicy&&(h.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?h.credentials="include":p.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function d(p){if(p.ep)return;p.ep=!0;const h=s(p);fetch(p.href,h)}})();function ju(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var bl={exports:{}},Wr={},Sl={exports:{}},ue={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K1;function r2(){if(K1)return ue;K1=1;var o=Symbol.for("react.element"),u=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),h=Symbol.for("react.provider"),j=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),L=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),P=Symbol.iterator;function F(x){return x===null||typeof x!="object"?null:(x=P&&x[P]||x["@@iterator"],typeof x=="function"?x:null)}var I={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B=Object.assign,U={};function J(x,z,re){this.props=x,this.context=z,this.refs=U,this.updater=re||I}J.prototype.isReactComponent={},J.prototype.setState=function(x,z){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,z,"setState")},J.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function de(){}de.prototype=J.prototype;function Q(x,z,re){this.props=x,this.context=z,this.refs=U,this.updater=re||I}var xe=Q.prototype=new de;xe.constructor=Q,B(xe,J.prototype),xe.isPureReactComponent=!0;var me=Array.isArray,pe=Object.prototype.hasOwnProperty,oe={current:null},Y={key:!0,ref:!0,__self:!0,__source:!0};function ee(x,z,re){var G,se={},ce=null,fe=null;if(z!=null)for(G in z.ref!==void 0&&(fe=z.ref),z.key!==void 0&&(ce=""+z.key),z)pe.call(z,G)&&!Y.hasOwnProperty(G)&&(se[G]=z[G]);var ne=arguments.length-2;if(ne===1)se.children=re;else if(1<ne){for(var ye=Array(ne),ze=0;ze<ne;ze++)ye[ze]=arguments[ze+2];se.children=ye}if(x&&x.defaultProps)for(G in ne=x.defaultProps,ne)se[G]===void 0&&(se[G]=ne[G]);return{$$typeof:o,type:x,key:ce,ref:fe,props:se,_owner:oe.current}}function Ce(x,z){return{$$typeof:o,type:x.type,key:z,ref:x.ref,props:x.props,_owner:x._owner}}function Se(x){return typeof x=="object"&&x!==null&&x.$$typeof===o}function Re(x){var z={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(re){return z[re]})}var T=/\/+/g;function M(x,z){return typeof x=="object"&&x!==null&&x.key!=null?Re(""+x.key):z.toString(36)}function ie(x,z,re,G,se){var ce=typeof x;(ce==="undefined"||ce==="boolean")&&(x=null);var fe=!1;if(x===null)fe=!0;else switch(ce){case"string":case"number":fe=!0;break;case"object":switch(x.$$typeof){case o:case u:fe=!0}}if(fe)return fe=x,se=se(fe),x=G===""?"."+M(fe,0):G,me(se)?(re="",x!=null&&(re=x.replace(T,"$&/")+"/"),ie(se,z,re,"",function(ze){return ze})):se!=null&&(Se(se)&&(se=Ce(se,re+(!se.key||fe&&fe.key===se.key?"":(""+se.key).replace(T,"$&/")+"/")+x)),z.push(se)),1;if(fe=0,G=G===""?".":G+":",me(x))for(var ne=0;ne<x.length;ne++){ce=x[ne];var ye=G+M(ce,ne);fe+=ie(ce,z,re,ye,se)}else if(ye=F(x),typeof ye=="function")for(x=ye.call(x),ne=0;!(ce=x.next()).done;)ce=ce.value,ye=G+M(ce,ne++),fe+=ie(ce,z,re,ye,se);else if(ce==="object")throw z=String(x),Error("Objects are not valid as a React child (found: "+(z==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":z)+"). If you meant to render a collection of children, use an array instead.");return fe}function we(x,z,re){if(x==null)return x;var G=[],se=0;return ie(x,G,"","",function(ce){return z.call(re,ce,se++)}),G}function be(x){if(x._status===-1){var z=x._result;z=z(),z.then(function(re){(x._status===0||x._status===-1)&&(x._status=1,x._result=re)},function(re){(x._status===0||x._status===-1)&&(x._status=2,x._result=re)}),x._status===-1&&(x._status=0,x._result=z)}if(x._status===1)return x._result.default;throw x._result}var le={current:null},O={transition:null},K={ReactCurrentDispatcher:le,ReactCurrentBatchConfig:O,ReactCurrentOwner:oe};function D(){throw Error("act(...) is not supported in production builds of React.")}return ue.Children={map:we,forEach:function(x,z,re){we(x,function(){z.apply(this,arguments)},re)},count:function(x){var z=0;return we(x,function(){z++}),z},toArray:function(x){return we(x,function(z){return z})||[]},only:function(x){if(!Se(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},ue.Component=J,ue.Fragment=s,ue.Profiler=p,ue.PureComponent=Q,ue.StrictMode=d,ue.Suspense=b,ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=K,ue.act=D,ue.cloneElement=function(x,z,re){if(x==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+x+".");var G=B({},x.props),se=x.key,ce=x.ref,fe=x._owner;if(z!=null){if(z.ref!==void 0&&(ce=z.ref,fe=oe.current),z.key!==void 0&&(se=""+z.key),x.type&&x.type.defaultProps)var ne=x.type.defaultProps;for(ye in z)pe.call(z,ye)&&!Y.hasOwnProperty(ye)&&(G[ye]=z[ye]===void 0&&ne!==void 0?ne[ye]:z[ye])}var ye=arguments.length-2;if(ye===1)G.children=re;else if(1<ye){ne=Array(ye);for(var ze=0;ze<ye;ze++)ne[ze]=arguments[ze+2];G.children=ne}return{$$typeof:o,type:x.type,key:se,ref:ce,props:G,_owner:fe}},ue.createContext=function(x){return x={$$typeof:j,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},x.Provider={$$typeof:h,_context:x},x.Consumer=x},ue.createElement=ee,ue.createFactory=function(x){var z=ee.bind(null,x);return z.type=x,z},ue.createRef=function(){return{current:null}},ue.forwardRef=function(x){return{$$typeof:C,render:x}},ue.isValidElement=Se,ue.lazy=function(x){return{$$typeof:w,_payload:{_status:-1,_result:x},_init:be}},ue.memo=function(x,z){return{$$typeof:L,type:x,compare:z===void 0?null:z}},ue.startTransition=function(x){var z=O.transition;O.transition={};try{x()}finally{O.transition=z}},ue.unstable_act=D,ue.useCallback=function(x,z){return le.current.useCallback(x,z)},ue.useContext=function(x){return le.current.useContext(x)},ue.useDebugValue=function(){},ue.useDeferredValue=function(x){return le.current.useDeferredValue(x)},ue.useEffect=function(x,z){return le.current.useEffect(x,z)},ue.useId=function(){return le.current.useId()},ue.useImperativeHandle=function(x,z,re){return le.current.useImperativeHandle(x,z,re)},ue.useInsertionEffect=function(x,z){return le.current.useInsertionEffect(x,z)},ue.useLayoutEffect=function(x,z){return le.current.useLayoutEffect(x,z)},ue.useMemo=function(x,z){return le.current.useMemo(x,z)},ue.useReducer=function(x,z,re){return le.current.useReducer(x,z,re)},ue.useRef=function(x){return le.current.useRef(x)},ue.useState=function(x){return le.current.useState(x)},ue.useSyncExternalStore=function(x,z,re){return le.current.useSyncExternalStore(x,z,re)},ue.useTransition=function(){return le.current.useTransition()},ue.version="18.3.1",ue}var J1;function Wl(){return J1||(J1=1,Sl.exports=r2()),Sl.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z1;function i2(){if(Z1)return Wr;Z1=1;var o=Wl(),u=Symbol.for("react.element"),s=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,p=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function j(C,b,L){var w,P={},F=null,I=null;L!==void 0&&(F=""+L),b.key!==void 0&&(F=""+b.key),b.ref!==void 0&&(I=b.ref);for(w in b)d.call(b,w)&&!h.hasOwnProperty(w)&&(P[w]=b[w]);if(C&&C.defaultProps)for(w in b=C.defaultProps,b)P[w]===void 0&&(P[w]=b[w]);return{$$typeof:u,type:C,key:F,ref:I,props:P,_owner:p.current}}return Wr.Fragment=s,Wr.jsx=j,Wr.jsxs=j,Wr}var X1;function o2(){return X1||(X1=1,bl.exports=i2()),bl.exports}var l=o2(),A=Wl();const ut=ju(A);var mo={},jl={exports:{}},it={},Cl={exports:{}},zl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eu;function a2(){return eu||(eu=1,(function(o){function u(O,K){var D=O.length;O.push(K);e:for(;0<D;){var x=D-1>>>1,z=O[x];if(0<p(z,K))O[x]=K,O[D]=z,D=x;else break e}}function s(O){return O.length===0?null:O[0]}function d(O){if(O.length===0)return null;var K=O[0],D=O.pop();if(D!==K){O[0]=D;e:for(var x=0,z=O.length,re=z>>>1;x<re;){var G=2*(x+1)-1,se=O[G],ce=G+1,fe=O[ce];if(0>p(se,D))ce<z&&0>p(fe,se)?(O[x]=fe,O[ce]=D,x=ce):(O[x]=se,O[G]=D,x=G);else if(ce<z&&0>p(fe,D))O[x]=fe,O[ce]=D,x=ce;else break e}}return K}function p(O,K){var D=O.sortIndex-K.sortIndex;return D!==0?D:O.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var h=performance;o.unstable_now=function(){return h.now()}}else{var j=Date,C=j.now();o.unstable_now=function(){return j.now()-C}}var b=[],L=[],w=1,P=null,F=3,I=!1,B=!1,U=!1,J=typeof setTimeout=="function"?setTimeout:null,de=typeof clearTimeout=="function"?clearTimeout:null,Q=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function xe(O){for(var K=s(L);K!==null;){if(K.callback===null)d(L);else if(K.startTime<=O)d(L),K.sortIndex=K.expirationTime,u(b,K);else break;K=s(L)}}function me(O){if(U=!1,xe(O),!B)if(s(b)!==null)B=!0,be(pe);else{var K=s(L);K!==null&&le(me,K.startTime-O)}}function pe(O,K){B=!1,U&&(U=!1,de(ee),ee=-1),I=!0;var D=F;try{for(xe(K),P=s(b);P!==null&&(!(P.expirationTime>K)||O&&!Re());){var x=P.callback;if(typeof x=="function"){P.callback=null,F=P.priorityLevel;var z=x(P.expirationTime<=K);K=o.unstable_now(),typeof z=="function"?P.callback=z:P===s(b)&&d(b),xe(K)}else d(b);P=s(b)}if(P!==null)var re=!0;else{var G=s(L);G!==null&&le(me,G.startTime-K),re=!1}return re}finally{P=null,F=D,I=!1}}var oe=!1,Y=null,ee=-1,Ce=5,Se=-1;function Re(){return!(o.unstable_now()-Se<Ce)}function T(){if(Y!==null){var O=o.unstable_now();Se=O;var K=!0;try{K=Y(!0,O)}finally{K?M():(oe=!1,Y=null)}}else oe=!1}var M;if(typeof Q=="function")M=function(){Q(T)};else if(typeof MessageChannel<"u"){var ie=new MessageChannel,we=ie.port2;ie.port1.onmessage=T,M=function(){we.postMessage(null)}}else M=function(){J(T,0)};function be(O){Y=O,oe||(oe=!0,M())}function le(O,K){ee=J(function(){O(o.unstable_now())},K)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(O){O.callback=null},o.unstable_continueExecution=function(){B||I||(B=!0,be(pe))},o.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ce=0<O?Math.floor(1e3/O):5},o.unstable_getCurrentPriorityLevel=function(){return F},o.unstable_getFirstCallbackNode=function(){return s(b)},o.unstable_next=function(O){switch(F){case 1:case 2:case 3:var K=3;break;default:K=F}var D=F;F=K;try{return O()}finally{F=D}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(O,K){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var D=F;F=O;try{return K()}finally{F=D}},o.unstable_scheduleCallback=function(O,K,D){var x=o.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?x+D:x):D=x,O){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=D+z,O={id:w++,callback:K,priorityLevel:O,startTime:D,expirationTime:z,sortIndex:-1},D>x?(O.sortIndex=D,u(L,O),s(b)===null&&O===s(L)&&(U?(de(ee),ee=-1):U=!0,le(me,D-x))):(O.sortIndex=z,u(b,O),B||I||(B=!0,be(pe))),O},o.unstable_shouldYield=Re,o.unstable_wrapCallback=function(O){var K=F;return function(){var D=F;F=K;try{return O.apply(this,arguments)}finally{F=D}}}})(zl)),zl}var tu;function l2(){return tu||(tu=1,Cl.exports=a2()),Cl.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nu;function s2(){if(nu)return it;nu=1;var o=Wl(),u=l2();function s(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d=new Set,p={};function h(e,t){j(e,t),j(e+"Capture",t)}function j(e,t){for(p[e]=t,e=0;e<t.length;e++)d.add(t[e])}var C=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),b=Object.prototype.hasOwnProperty,L=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},P={};function F(e){return b.call(P,e)?!0:b.call(w,e)?!1:L.test(e)?P[e]=!0:(w[e]=!0,!1)}function I(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function B(e,t,n,r){if(t===null||typeof t>"u"||I(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function U(e,t,n,r,i,a,c){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=c}var J={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){J[e]=new U(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];J[t]=new U(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){J[e]=new U(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){J[e]=new U(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){J[e]=new U(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){J[e]=new U(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){J[e]=new U(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){J[e]=new U(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){J[e]=new U(e,5,!1,e.toLowerCase(),null,!1,!1)});var de=/[\-:]([a-z])/g;function Q(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(de,Q);J[t]=new U(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(de,Q);J[t]=new U(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(de,Q);J[t]=new U(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){J[e]=new U(e,1,!1,e.toLowerCase(),null,!1,!1)}),J.xlinkHref=new U("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){J[e]=new U(e,1,!1,e.toLowerCase(),null,!0,!0)});function xe(e,t,n,r){var i=J.hasOwnProperty(t)?J[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(B(t,n,i,r)&&(n=null),r||i===null?F(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var me=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,pe=Symbol.for("react.element"),oe=Symbol.for("react.portal"),Y=Symbol.for("react.fragment"),ee=Symbol.for("react.strict_mode"),Ce=Symbol.for("react.profiler"),Se=Symbol.for("react.provider"),Re=Symbol.for("react.context"),T=Symbol.for("react.forward_ref"),M=Symbol.for("react.suspense"),ie=Symbol.for("react.suspense_list"),we=Symbol.for("react.memo"),be=Symbol.for("react.lazy"),le=Symbol.for("react.offscreen"),O=Symbol.iterator;function K(e){return e===null||typeof e!="object"?null:(e=O&&e[O]||e["@@iterator"],typeof e=="function"?e:null)}var D=Object.assign,x;function z(e){if(x===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);x=t&&t[1]||""}return`
`+x+e}var re=!1;function G(e,t){if(!e||re)return"";re=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(k){var r=k}Reflect.construct(e,[],t)}else{try{t.call()}catch(k){r=k}e.call(t.prototype)}else{try{throw Error()}catch(k){r=k}e()}}catch(k){if(k&&r&&typeof k.stack=="string"){for(var i=k.stack.split(`
`),a=r.stack.split(`
`),c=i.length-1,f=a.length-1;1<=c&&0<=f&&i[c]!==a[f];)f--;for(;1<=c&&0<=f;c--,f--)if(i[c]!==a[f]){if(c!==1||f!==1)do if(c--,f--,0>f||i[c]!==a[f]){var m=`
`+i[c].replace(" at new "," at ");return e.displayName&&m.includes("<anonymous>")&&(m=m.replace("<anonymous>",e.displayName)),m}while(1<=c&&0<=f);break}}}finally{re=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?z(e):""}function se(e){switch(e.tag){case 5:return z(e.type);case 16:return z("Lazy");case 13:return z("Suspense");case 19:return z("SuspenseList");case 0:case 2:case 15:return e=G(e.type,!1),e;case 11:return e=G(e.type.render,!1),e;case 1:return e=G(e.type,!0),e;default:return""}}function ce(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Y:return"Fragment";case oe:return"Portal";case Ce:return"Profiler";case ee:return"StrictMode";case M:return"Suspense";case ie:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Re:return(e.displayName||"Context")+".Consumer";case Se:return(e._context.displayName||"Context")+".Provider";case T:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case we:return t=e.displayName||null,t!==null?t:ce(e.type)||"Memo";case be:t=e._payload,e=e._init;try{return ce(e(t))}catch{}}return null}function fe(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ce(t);case 8:return t===ee?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ne(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ye(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ze(e){var t=ye(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(c){r=""+c,a.call(this,c)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(c){r=""+c},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ri(e){e._valueTracker||(e._valueTracker=ze(e))}function ns(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ye(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ii(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Mo(e,t){var n=t.checked;return D({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function rs(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ne(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function is(e,t){t=t.checked,t!=null&&xe(e,"checked",t,!1)}function _o(e,t){is(e,t);var n=ne(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Po(e,t.type,n):t.hasOwnProperty("defaultValue")&&Po(e,t.type,ne(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function os(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Po(e,t,n){(t!=="number"||ii(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ar=Array.isArray;function En(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ne(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Lo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(s(91));return D({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function as(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(s(92));if(ar(n)){if(1<n.length)throw Error(s(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ne(n)}}function ls(e,t){var n=ne(t.value),r=ne(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ss(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function us(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ro(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?us(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var oi,cs=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(oi=oi||document.createElement("div"),oi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=oi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function lr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var sr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},lc=["Webkit","ms","Moz","O"];Object.keys(sr).forEach(function(e){lc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),sr[t]=sr[e]})});function ds(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||sr.hasOwnProperty(e)&&sr[e]?(""+t).trim():t+"px"}function ps(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ds(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var sc=D({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function To(e,t){if(t){if(sc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(s(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(s(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(s(61))}if(t.style!=null&&typeof t.style!="object")throw Error(s(62))}}function Io(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fo=null;function Oo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ao=null,Mn=null,_n=null;function fs(e){if(e=_r(e)){if(typeof Ao!="function")throw Error(s(280));var t=e.stateNode;t&&(t=Ei(t),Ao(e.stateNode,e.type,t))}}function ms(e){Mn?_n?_n.push(e):_n=[e]:Mn=e}function hs(){if(Mn){var e=Mn,t=_n;if(_n=Mn=null,fs(e),t)for(e=0;e<t.length;e++)fs(t[e])}}function gs(e,t){return e(t)}function xs(){}var $o=!1;function vs(e,t,n){if($o)return e(t,n);$o=!0;try{return gs(e,t,n)}finally{$o=!1,(Mn!==null||_n!==null)&&(xs(),hs())}}function ur(e,t){var n=e.stateNode;if(n===null)return null;var r=Ei(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(s(231,t,typeof n));return n}var Do=!1;if(C)try{var cr={};Object.defineProperty(cr,"passive",{get:function(){Do=!0}}),window.addEventListener("test",cr,cr),window.removeEventListener("test",cr,cr)}catch{Do=!1}function uc(e,t,n,r,i,a,c,f,m){var k=Array.prototype.slice.call(arguments,3);try{t.apply(n,k)}catch(E){this.onError(E)}}var dr=!1,ai=null,li=!1,Vo=null,cc={onError:function(e){dr=!0,ai=e}};function dc(e,t,n,r,i,a,c,f,m){dr=!1,ai=null,uc.apply(cc,arguments)}function pc(e,t,n,r,i,a,c,f,m){if(dc.apply(this,arguments),dr){if(dr){var k=ai;dr=!1,ai=null}else throw Error(s(198));li||(li=!0,Vo=k)}}function dn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ys(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ws(e){if(dn(e)!==e)throw Error(s(188))}function fc(e){var t=e.alternate;if(!t){if(t=dn(e),t===null)throw Error(s(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return ws(i),e;if(a===r)return ws(i),t;a=a.sibling}throw Error(s(188))}if(n.return!==r.return)n=i,r=a;else{for(var c=!1,f=i.child;f;){if(f===n){c=!0,n=i,r=a;break}if(f===r){c=!0,r=i,n=a;break}f=f.sibling}if(!c){for(f=a.child;f;){if(f===n){c=!0,n=a,r=i;break}if(f===r){c=!0,r=a,n=i;break}f=f.sibling}if(!c)throw Error(s(189))}}if(n.alternate!==r)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function ks(e){return e=fc(e),e!==null?bs(e):null}function bs(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=bs(e);if(t!==null)return t;e=e.sibling}return null}var Ss=u.unstable_scheduleCallback,js=u.unstable_cancelCallback,mc=u.unstable_shouldYield,hc=u.unstable_requestPaint,Ie=u.unstable_now,gc=u.unstable_getCurrentPriorityLevel,Bo=u.unstable_ImmediatePriority,Cs=u.unstable_UserBlockingPriority,si=u.unstable_NormalPriority,xc=u.unstable_LowPriority,zs=u.unstable_IdlePriority,ui=null,Et=null;function vc(e){if(Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(ui,e,void 0,(e.current.flags&128)===128)}catch{}}var yt=Math.clz32?Math.clz32:kc,yc=Math.log,wc=Math.LN2;function kc(e){return e>>>=0,e===0?32:31-(yc(e)/wc|0)|0}var ci=64,di=4194304;function pr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function pi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,c=n&268435455;if(c!==0){var f=c&~i;f!==0?r=pr(f):(a&=c,a!==0&&(r=pr(a)))}else c=n&~i,c!==0?r=pr(c):a!==0&&(r=pr(a));if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-yt(t),i=1<<n,r|=e[n],t&=~i;return r}function bc(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sc(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var c=31-yt(a),f=1<<c,m=i[c];m===-1?((f&n)===0||(f&r)!==0)&&(i[c]=bc(f,t)):m<=t&&(e.expiredLanes|=f),a&=~f}}function Ho(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ns(){var e=ci;return ci<<=1,(ci&4194240)===0&&(ci=64),e}function Uo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function fr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-yt(t),e[t]=n}function jc(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-yt(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function Wo(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-yt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ke=0;function Es(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Ms,qo,_s,Ps,Ls,Qo=!1,fi=[],Bt=null,Ht=null,Ut=null,mr=new Map,hr=new Map,Wt=[],Cc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Rs(e,t){switch(e){case"focusin":case"focusout":Bt=null;break;case"dragenter":case"dragleave":Ht=null;break;case"mouseover":case"mouseout":Ut=null;break;case"pointerover":case"pointerout":mr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":hr.delete(t.pointerId)}}function gr(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=_r(t),t!==null&&qo(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function zc(e,t,n,r,i){switch(t){case"focusin":return Bt=gr(Bt,e,t,n,r,i),!0;case"dragenter":return Ht=gr(Ht,e,t,n,r,i),!0;case"mouseover":return Ut=gr(Ut,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return mr.set(a,gr(mr.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,hr.set(a,gr(hr.get(a)||null,e,t,n,r,i)),!0}return!1}function Ts(e){var t=pn(e.target);if(t!==null){var n=dn(t);if(n!==null){if(t=n.tag,t===13){if(t=ys(n),t!==null){e.blockedOn=t,Ls(e.priority,function(){_s(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function mi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Go(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Fo=r,n.target.dispatchEvent(r),Fo=null}else return t=_r(n),t!==null&&qo(t),e.blockedOn=n,!1;t.shift()}return!0}function Is(e,t,n){mi(e)&&n.delete(t)}function Nc(){Qo=!1,Bt!==null&&mi(Bt)&&(Bt=null),Ht!==null&&mi(Ht)&&(Ht=null),Ut!==null&&mi(Ut)&&(Ut=null),mr.forEach(Is),hr.forEach(Is)}function xr(e,t){e.blockedOn===t&&(e.blockedOn=null,Qo||(Qo=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,Nc)))}function vr(e){function t(i){return xr(i,e)}if(0<fi.length){xr(fi[0],e);for(var n=1;n<fi.length;n++){var r=fi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Bt!==null&&xr(Bt,e),Ht!==null&&xr(Ht,e),Ut!==null&&xr(Ut,e),mr.forEach(t),hr.forEach(t),n=0;n<Wt.length;n++)r=Wt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Wt.length&&(n=Wt[0],n.blockedOn===null);)Ts(n),n.blockedOn===null&&Wt.shift()}var Pn=me.ReactCurrentBatchConfig,hi=!0;function Ec(e,t,n,r){var i=ke,a=Pn.transition;Pn.transition=null;try{ke=1,Yo(e,t,n,r)}finally{ke=i,Pn.transition=a}}function Mc(e,t,n,r){var i=ke,a=Pn.transition;Pn.transition=null;try{ke=4,Yo(e,t,n,r)}finally{ke=i,Pn.transition=a}}function Yo(e,t,n,r){if(hi){var i=Go(e,t,n,r);if(i===null)pa(e,t,r,gi,n),Rs(e,r);else if(zc(i,e,t,n,r))r.stopPropagation();else if(Rs(e,r),t&4&&-1<Cc.indexOf(e)){for(;i!==null;){var a=_r(i);if(a!==null&&Ms(a),a=Go(e,t,n,r),a===null&&pa(e,t,r,gi,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else pa(e,t,r,null,n)}}var gi=null;function Go(e,t,n,r){if(gi=null,e=Oo(r),e=pn(e),e!==null)if(t=dn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ys(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return gi=e,null}function Fs(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(gc()){case Bo:return 1;case Cs:return 4;case si:case xc:return 16;case zs:return 536870912;default:return 16}default:return 16}}var qt=null,Ko=null,xi=null;function Os(){if(xi)return xi;var e,t=Ko,n=t.length,r,i="value"in qt?qt.value:qt.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var c=n-e;for(r=1;r<=c&&t[n-r]===i[a-r];r++);return xi=i.slice(e,1<r?1-r:void 0)}function vi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function yi(){return!0}function As(){return!1}function ot(e){function t(n,r,i,a,c){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=c,this.currentTarget=null;for(var f in e)e.hasOwnProperty(f)&&(n=e[f],this[f]=n?n(a):a[f]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?yi:As,this.isPropagationStopped=As,this}return D(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=yi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=yi)},persist:function(){},isPersistent:yi}),t}var Ln={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jo=ot(Ln),yr=D({},Ln,{view:0,detail:0}),_c=ot(yr),Zo,Xo,wr,wi=D({},yr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ta,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==wr&&(wr&&e.type==="mousemove"?(Zo=e.screenX-wr.screenX,Xo=e.screenY-wr.screenY):Xo=Zo=0,wr=e),Zo)},movementY:function(e){return"movementY"in e?e.movementY:Xo}}),$s=ot(wi),Pc=D({},wi,{dataTransfer:0}),Lc=ot(Pc),Rc=D({},yr,{relatedTarget:0}),ea=ot(Rc),Tc=D({},Ln,{animationName:0,elapsedTime:0,pseudoElement:0}),Ic=ot(Tc),Fc=D({},Ln,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Oc=ot(Fc),Ac=D({},Ln,{data:0}),Ds=ot(Ac),$c={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Dc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bc(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Vc[e])?!!t[e]:!1}function ta(){return Bc}var Hc=D({},yr,{key:function(e){if(e.key){var t=$c[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=vi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Dc[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ta,charCode:function(e){return e.type==="keypress"?vi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?vi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Uc=ot(Hc),Wc=D({},wi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vs=ot(Wc),qc=D({},yr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ta}),Qc=ot(qc),Yc=D({},Ln,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gc=ot(Yc),Kc=D({},wi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Jc=ot(Kc),Zc=[9,13,27,32],na=C&&"CompositionEvent"in window,kr=null;C&&"documentMode"in document&&(kr=document.documentMode);var Xc=C&&"TextEvent"in window&&!kr,Bs=C&&(!na||kr&&8<kr&&11>=kr),Hs=" ",Us=!1;function Ws(e,t){switch(e){case"keyup":return Zc.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Rn=!1;function ed(e,t){switch(e){case"compositionend":return qs(t);case"keypress":return t.which!==32?null:(Us=!0,Hs);case"textInput":return e=t.data,e===Hs&&Us?null:e;default:return null}}function td(e,t){if(Rn)return e==="compositionend"||!na&&Ws(e,t)?(e=Os(),xi=Ko=qt=null,Rn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Bs&&t.locale!=="ko"?null:t.data;default:return null}}var nd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!nd[e.type]:t==="textarea"}function Ys(e,t,n,r){ms(r),t=Ci(t,"onChange"),0<t.length&&(n=new Jo("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var br=null,Sr=null;function rd(e){p0(e,0)}function ki(e){var t=An(e);if(ns(t))return e}function id(e,t){if(e==="change")return t}var Gs=!1;if(C){var ra;if(C){var ia="oninput"in document;if(!ia){var Ks=document.createElement("div");Ks.setAttribute("oninput","return;"),ia=typeof Ks.oninput=="function"}ra=ia}else ra=!1;Gs=ra&&(!document.documentMode||9<document.documentMode)}function Js(){br&&(br.detachEvent("onpropertychange",Zs),Sr=br=null)}function Zs(e){if(e.propertyName==="value"&&ki(Sr)){var t=[];Ys(t,Sr,e,Oo(e)),vs(rd,t)}}function od(e,t,n){e==="focusin"?(Js(),br=t,Sr=n,br.attachEvent("onpropertychange",Zs)):e==="focusout"&&Js()}function ad(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ki(Sr)}function ld(e,t){if(e==="click")return ki(t)}function sd(e,t){if(e==="input"||e==="change")return ki(t)}function ud(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var wt=typeof Object.is=="function"?Object.is:ud;function jr(e,t){if(wt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!b.call(t,i)||!wt(e[i],t[i]))return!1}return!0}function Xs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function e0(e,t){var n=Xs(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Xs(n)}}function t0(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?t0(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function n0(){for(var e=window,t=ii();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ii(e.document)}return t}function oa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function cd(e){var t=n0(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&t0(n.ownerDocument.documentElement,n)){if(r!==null&&oa(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=e0(n,a);var c=e0(n,r);i&&c&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==c.node||e.focusOffset!==c.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(c.node,c.offset)):(t.setEnd(c.node,c.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var dd=C&&"documentMode"in document&&11>=document.documentMode,Tn=null,aa=null,Cr=null,la=!1;function r0(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;la||Tn==null||Tn!==ii(r)||(r=Tn,"selectionStart"in r&&oa(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Cr&&jr(Cr,r)||(Cr=r,r=Ci(aa,"onSelect"),0<r.length&&(t=new Jo("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Tn)))}function bi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var In={animationend:bi("Animation","AnimationEnd"),animationiteration:bi("Animation","AnimationIteration"),animationstart:bi("Animation","AnimationStart"),transitionend:bi("Transition","TransitionEnd")},sa={},i0={};C&&(i0=document.createElement("div").style,"AnimationEvent"in window||(delete In.animationend.animation,delete In.animationiteration.animation,delete In.animationstart.animation),"TransitionEvent"in window||delete In.transitionend.transition);function Si(e){if(sa[e])return sa[e];if(!In[e])return e;var t=In[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in i0)return sa[e]=t[n];return e}var o0=Si("animationend"),a0=Si("animationiteration"),l0=Si("animationstart"),s0=Si("transitionend"),u0=new Map,c0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qt(e,t){u0.set(e,t),h(t,[e])}for(var ua=0;ua<c0.length;ua++){var ca=c0[ua],pd=ca.toLowerCase(),fd=ca[0].toUpperCase()+ca.slice(1);Qt(pd,"on"+fd)}Qt(o0,"onAnimationEnd"),Qt(a0,"onAnimationIteration"),Qt(l0,"onAnimationStart"),Qt("dblclick","onDoubleClick"),Qt("focusin","onFocus"),Qt("focusout","onBlur"),Qt(s0,"onTransitionEnd"),j("onMouseEnter",["mouseout","mouseover"]),j("onMouseLeave",["mouseout","mouseover"]),j("onPointerEnter",["pointerout","pointerover"]),j("onPointerLeave",["pointerout","pointerover"]),h("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),h("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),h("onBeforeInput",["compositionend","keypress","textInput","paste"]),h("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),md=new Set("cancel close invalid load scroll toggle".split(" ").concat(zr));function d0(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,pc(r,t,void 0,e),e.currentTarget=null}function p0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var c=r.length-1;0<=c;c--){var f=r[c],m=f.instance,k=f.currentTarget;if(f=f.listener,m!==a&&i.isPropagationStopped())break e;d0(i,f,k),a=m}else for(c=0;c<r.length;c++){if(f=r[c],m=f.instance,k=f.currentTarget,f=f.listener,m!==a&&i.isPropagationStopped())break e;d0(i,f,k),a=m}}}if(li)throw e=Vo,li=!1,Vo=null,e}function Ne(e,t){var n=t[va];n===void 0&&(n=t[va]=new Set);var r=e+"__bubble";n.has(r)||(f0(t,e,2,!1),n.add(r))}function da(e,t,n){var r=0;t&&(r|=4),f0(n,e,r,t)}var ji="_reactListening"+Math.random().toString(36).slice(2);function Nr(e){if(!e[ji]){e[ji]=!0,d.forEach(function(n){n!=="selectionchange"&&(md.has(n)||da(n,!1,e),da(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ji]||(t[ji]=!0,da("selectionchange",!1,t))}}function f0(e,t,n,r){switch(Fs(t)){case 1:var i=Ec;break;case 4:i=Mc;break;default:i=Yo}n=i.bind(null,t,n,e),i=void 0,!Do||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function pa(e,t,n,r,i){var a=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var c=r.tag;if(c===3||c===4){var f=r.stateNode.containerInfo;if(f===i||f.nodeType===8&&f.parentNode===i)break;if(c===4)for(c=r.return;c!==null;){var m=c.tag;if((m===3||m===4)&&(m=c.stateNode.containerInfo,m===i||m.nodeType===8&&m.parentNode===i))return;c=c.return}for(;f!==null;){if(c=pn(f),c===null)return;if(m=c.tag,m===5||m===6){r=a=c;continue e}f=f.parentNode}}r=r.return}vs(function(){var k=a,E=Oo(n),_=[];e:{var N=u0.get(e);if(N!==void 0){var $=Jo,H=e;switch(e){case"keypress":if(vi(n)===0)break e;case"keydown":case"keyup":$=Uc;break;case"focusin":H="focus",$=ea;break;case"focusout":H="blur",$=ea;break;case"beforeblur":case"afterblur":$=ea;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":$=$s;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":$=Lc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":$=Qc;break;case o0:case a0:case l0:$=Ic;break;case s0:$=Gc;break;case"scroll":$=_c;break;case"wheel":$=Jc;break;case"copy":case"cut":case"paste":$=Oc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":$=Vs}var W=(t&4)!==0,Fe=!W&&e==="scroll",v=W?N!==null?N+"Capture":null:N;W=[];for(var g=k,y;g!==null;){y=g;var R=y.stateNode;if(y.tag===5&&R!==null&&(y=R,v!==null&&(R=ur(g,v),R!=null&&W.push(Er(g,R,y)))),Fe)break;g=g.return}0<W.length&&(N=new $(N,H,null,n,E),_.push({event:N,listeners:W}))}}if((t&7)===0){e:{if(N=e==="mouseover"||e==="pointerover",$=e==="mouseout"||e==="pointerout",N&&n!==Fo&&(H=n.relatedTarget||n.fromElement)&&(pn(H)||H[Rt]))break e;if(($||N)&&(N=E.window===E?E:(N=E.ownerDocument)?N.defaultView||N.parentWindow:window,$?(H=n.relatedTarget||n.toElement,$=k,H=H?pn(H):null,H!==null&&(Fe=dn(H),H!==Fe||H.tag!==5&&H.tag!==6)&&(H=null)):($=null,H=k),$!==H)){if(W=$s,R="onMouseLeave",v="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(W=Vs,R="onPointerLeave",v="onPointerEnter",g="pointer"),Fe=$==null?N:An($),y=H==null?N:An(H),N=new W(R,g+"leave",$,n,E),N.target=Fe,N.relatedTarget=y,R=null,pn(E)===k&&(W=new W(v,g+"enter",H,n,E),W.target=y,W.relatedTarget=Fe,R=W),Fe=R,$&&H)t:{for(W=$,v=H,g=0,y=W;y;y=Fn(y))g++;for(y=0,R=v;R;R=Fn(R))y++;for(;0<g-y;)W=Fn(W),g--;for(;0<y-g;)v=Fn(v),y--;for(;g--;){if(W===v||v!==null&&W===v.alternate)break t;W=Fn(W),v=Fn(v)}W=null}else W=null;$!==null&&m0(_,N,$,W,!1),H!==null&&Fe!==null&&m0(_,Fe,H,W,!0)}}e:{if(N=k?An(k):window,$=N.nodeName&&N.nodeName.toLowerCase(),$==="select"||$==="input"&&N.type==="file")var q=id;else if(Qs(N))if(Gs)q=sd;else{q=ad;var Z=od}else($=N.nodeName)&&$.toLowerCase()==="input"&&(N.type==="checkbox"||N.type==="radio")&&(q=ld);if(q&&(q=q(e,k))){Ys(_,q,n,E);break e}Z&&Z(e,N,k),e==="focusout"&&(Z=N._wrapperState)&&Z.controlled&&N.type==="number"&&Po(N,"number",N.value)}switch(Z=k?An(k):window,e){case"focusin":(Qs(Z)||Z.contentEditable==="true")&&(Tn=Z,aa=k,Cr=null);break;case"focusout":Cr=aa=Tn=null;break;case"mousedown":la=!0;break;case"contextmenu":case"mouseup":case"dragend":la=!1,r0(_,n,E);break;case"selectionchange":if(dd)break;case"keydown":case"keyup":r0(_,n,E)}var X;if(na)e:{switch(e){case"compositionstart":var te="onCompositionStart";break e;case"compositionend":te="onCompositionEnd";break e;case"compositionupdate":te="onCompositionUpdate";break e}te=void 0}else Rn?Ws(e,n)&&(te="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(te="onCompositionStart");te&&(Bs&&n.locale!=="ko"&&(Rn||te!=="onCompositionStart"?te==="onCompositionEnd"&&Rn&&(X=Os()):(qt=E,Ko="value"in qt?qt.value:qt.textContent,Rn=!0)),Z=Ci(k,te),0<Z.length&&(te=new Ds(te,e,null,n,E),_.push({event:te,listeners:Z}),X?te.data=X:(X=qs(n),X!==null&&(te.data=X)))),(X=Xc?ed(e,n):td(e,n))&&(k=Ci(k,"onBeforeInput"),0<k.length&&(E=new Ds("onBeforeInput","beforeinput",null,n,E),_.push({event:E,listeners:k}),E.data=X))}p0(_,t)})}function Er(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ci(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=ur(e,n),a!=null&&r.unshift(Er(e,a,i)),a=ur(e,t),a!=null&&r.push(Er(e,a,i))),e=e.return}return r}function Fn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function m0(e,t,n,r,i){for(var a=t._reactName,c=[];n!==null&&n!==r;){var f=n,m=f.alternate,k=f.stateNode;if(m!==null&&m===r)break;f.tag===5&&k!==null&&(f=k,i?(m=ur(n,a),m!=null&&c.unshift(Er(n,m,f))):i||(m=ur(n,a),m!=null&&c.push(Er(n,m,f)))),n=n.return}c.length!==0&&e.push({event:t,listeners:c})}var hd=/\r\n?/g,gd=/\u0000|\uFFFD/g;function h0(e){return(typeof e=="string"?e:""+e).replace(hd,`
`).replace(gd,"")}function zi(e,t,n){if(t=h0(t),h0(e)!==t&&n)throw Error(s(425))}function Ni(){}var fa=null,ma=null;function ha(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ga=typeof setTimeout=="function"?setTimeout:void 0,xd=typeof clearTimeout=="function"?clearTimeout:void 0,g0=typeof Promise=="function"?Promise:void 0,vd=typeof queueMicrotask=="function"?queueMicrotask:typeof g0<"u"?function(e){return g0.resolve(null).then(e).catch(yd)}:ga;function yd(e){setTimeout(function(){throw e})}function xa(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),vr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);vr(t)}function Yt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function x0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var On=Math.random().toString(36).slice(2),Mt="__reactFiber$"+On,Mr="__reactProps$"+On,Rt="__reactContainer$"+On,va="__reactEvents$"+On,wd="__reactListeners$"+On,kd="__reactHandles$"+On;function pn(e){var t=e[Mt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Rt]||n[Mt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=x0(e);e!==null;){if(n=e[Mt])return n;e=x0(e)}return t}e=n,n=e.parentNode}return null}function _r(e){return e=e[Mt]||e[Rt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function An(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(s(33))}function Ei(e){return e[Mr]||null}var ya=[],$n=-1;function Gt(e){return{current:e}}function Ee(e){0>$n||(e.current=ya[$n],ya[$n]=null,$n--)}function je(e,t){$n++,ya[$n]=e.current,e.current=t}var Kt={},Qe=Gt(Kt),Xe=Gt(!1),fn=Kt;function Dn(e,t){var n=e.type.contextTypes;if(!n)return Kt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function et(e){return e=e.childContextTypes,e!=null}function Mi(){Ee(Xe),Ee(Qe)}function v0(e,t,n){if(Qe.current!==Kt)throw Error(s(168));je(Qe,t),je(Xe,n)}function y0(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(s(108,fe(e)||"Unknown",i));return D({},n,r)}function _i(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Kt,fn=Qe.current,je(Qe,e),je(Xe,Xe.current),!0}function w0(e,t,n){var r=e.stateNode;if(!r)throw Error(s(169));n?(e=y0(e,t,fn),r.__reactInternalMemoizedMergedChildContext=e,Ee(Xe),Ee(Qe),je(Qe,e)):Ee(Xe),je(Xe,n)}var Tt=null,Pi=!1,wa=!1;function k0(e){Tt===null?Tt=[e]:Tt.push(e)}function bd(e){Pi=!0,k0(e)}function Jt(){if(!wa&&Tt!==null){wa=!0;var e=0,t=ke;try{var n=Tt;for(ke=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Tt=null,Pi=!1}catch(i){throw Tt!==null&&(Tt=Tt.slice(e+1)),Ss(Bo,Jt),i}finally{ke=t,wa=!1}}return null}var Vn=[],Bn=0,Li=null,Ri=0,pt=[],ft=0,mn=null,It=1,Ft="";function hn(e,t){Vn[Bn++]=Ri,Vn[Bn++]=Li,Li=e,Ri=t}function b0(e,t,n){pt[ft++]=It,pt[ft++]=Ft,pt[ft++]=mn,mn=e;var r=It;e=Ft;var i=32-yt(r)-1;r&=~(1<<i),n+=1;var a=32-yt(t)+i;if(30<a){var c=i-i%5;a=(r&(1<<c)-1).toString(32),r>>=c,i-=c,It=1<<32-yt(t)+i|n<<i|r,Ft=a+e}else It=1<<a|n<<i|r,Ft=e}function ka(e){e.return!==null&&(hn(e,1),b0(e,1,0))}function ba(e){for(;e===Li;)Li=Vn[--Bn],Vn[Bn]=null,Ri=Vn[--Bn],Vn[Bn]=null;for(;e===mn;)mn=pt[--ft],pt[ft]=null,Ft=pt[--ft],pt[ft]=null,It=pt[--ft],pt[ft]=null}var at=null,lt=null,_e=!1,kt=null;function S0(e,t){var n=xt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function j0(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,at=e,lt=Yt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,at=e,lt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=mn!==null?{id:It,overflow:Ft}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=xt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,at=e,lt=null,!0):!1;default:return!1}}function Sa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ja(e){if(_e){var t=lt;if(t){var n=t;if(!j0(e,t)){if(Sa(e))throw Error(s(418));t=Yt(n.nextSibling);var r=at;t&&j0(e,t)?S0(r,n):(e.flags=e.flags&-4097|2,_e=!1,at=e)}}else{if(Sa(e))throw Error(s(418));e.flags=e.flags&-4097|2,_e=!1,at=e}}}function C0(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;at=e}function Ti(e){if(e!==at)return!1;if(!_e)return C0(e),_e=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ha(e.type,e.memoizedProps)),t&&(t=lt)){if(Sa(e))throw z0(),Error(s(418));for(;t;)S0(e,t),t=Yt(t.nextSibling)}if(C0(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){lt=Yt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}lt=null}}else lt=at?Yt(e.stateNode.nextSibling):null;return!0}function z0(){for(var e=lt;e;)e=Yt(e.nextSibling)}function Hn(){lt=at=null,_e=!1}function Ca(e){kt===null?kt=[e]:kt.push(e)}var Sd=me.ReactCurrentBatchConfig;function Pr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(s(309));var r=n.stateNode}if(!r)throw Error(s(147,e));var i=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(c){var f=i.refs;c===null?delete f[a]:f[a]=c},t._stringRef=a,t)}if(typeof e!="string")throw Error(s(284));if(!n._owner)throw Error(s(290,e))}return e}function Ii(e,t){throw e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function N0(e){var t=e._init;return t(e._payload)}function E0(e){function t(v,g){if(e){var y=v.deletions;y===null?(v.deletions=[g],v.flags|=16):y.push(g)}}function n(v,g){if(!e)return null;for(;g!==null;)t(v,g),g=g.sibling;return null}function r(v,g){for(v=new Map;g!==null;)g.key!==null?v.set(g.key,g):v.set(g.index,g),g=g.sibling;return v}function i(v,g){return v=an(v,g),v.index=0,v.sibling=null,v}function a(v,g,y){return v.index=y,e?(y=v.alternate,y!==null?(y=y.index,y<g?(v.flags|=2,g):y):(v.flags|=2,g)):(v.flags|=1048576,g)}function c(v){return e&&v.alternate===null&&(v.flags|=2),v}function f(v,g,y,R){return g===null||g.tag!==6?(g=gl(y,v.mode,R),g.return=v,g):(g=i(g,y),g.return=v,g)}function m(v,g,y,R){var q=y.type;return q===Y?E(v,g,y.props.children,R,y.key):g!==null&&(g.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===be&&N0(q)===g.type)?(R=i(g,y.props),R.ref=Pr(v,g,y),R.return=v,R):(R=oo(y.type,y.key,y.props,null,v.mode,R),R.ref=Pr(v,g,y),R.return=v,R)}function k(v,g,y,R){return g===null||g.tag!==4||g.stateNode.containerInfo!==y.containerInfo||g.stateNode.implementation!==y.implementation?(g=xl(y,v.mode,R),g.return=v,g):(g=i(g,y.children||[]),g.return=v,g)}function E(v,g,y,R,q){return g===null||g.tag!==7?(g=Sn(y,v.mode,R,q),g.return=v,g):(g=i(g,y),g.return=v,g)}function _(v,g,y){if(typeof g=="string"&&g!==""||typeof g=="number")return g=gl(""+g,v.mode,y),g.return=v,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case pe:return y=oo(g.type,g.key,g.props,null,v.mode,y),y.ref=Pr(v,null,g),y.return=v,y;case oe:return g=xl(g,v.mode,y),g.return=v,g;case be:var R=g._init;return _(v,R(g._payload),y)}if(ar(g)||K(g))return g=Sn(g,v.mode,y,null),g.return=v,g;Ii(v,g)}return null}function N(v,g,y,R){var q=g!==null?g.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return q!==null?null:f(v,g,""+y,R);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case pe:return y.key===q?m(v,g,y,R):null;case oe:return y.key===q?k(v,g,y,R):null;case be:return q=y._init,N(v,g,q(y._payload),R)}if(ar(y)||K(y))return q!==null?null:E(v,g,y,R,null);Ii(v,y)}return null}function $(v,g,y,R,q){if(typeof R=="string"&&R!==""||typeof R=="number")return v=v.get(y)||null,f(g,v,""+R,q);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case pe:return v=v.get(R.key===null?y:R.key)||null,m(g,v,R,q);case oe:return v=v.get(R.key===null?y:R.key)||null,k(g,v,R,q);case be:var Z=R._init;return $(v,g,y,Z(R._payload),q)}if(ar(R)||K(R))return v=v.get(y)||null,E(g,v,R,q,null);Ii(g,R)}return null}function H(v,g,y,R){for(var q=null,Z=null,X=g,te=g=0,Ue=null;X!==null&&te<y.length;te++){X.index>te?(Ue=X,X=null):Ue=X.sibling;var ge=N(v,X,y[te],R);if(ge===null){X===null&&(X=Ue);break}e&&X&&ge.alternate===null&&t(v,X),g=a(ge,g,te),Z===null?q=ge:Z.sibling=ge,Z=ge,X=Ue}if(te===y.length)return n(v,X),_e&&hn(v,te),q;if(X===null){for(;te<y.length;te++)X=_(v,y[te],R),X!==null&&(g=a(X,g,te),Z===null?q=X:Z.sibling=X,Z=X);return _e&&hn(v,te),q}for(X=r(v,X);te<y.length;te++)Ue=$(X,v,te,y[te],R),Ue!==null&&(e&&Ue.alternate!==null&&X.delete(Ue.key===null?te:Ue.key),g=a(Ue,g,te),Z===null?q=Ue:Z.sibling=Ue,Z=Ue);return e&&X.forEach(function(ln){return t(v,ln)}),_e&&hn(v,te),q}function W(v,g,y,R){var q=K(y);if(typeof q!="function")throw Error(s(150));if(y=q.call(y),y==null)throw Error(s(151));for(var Z=q=null,X=g,te=g=0,Ue=null,ge=y.next();X!==null&&!ge.done;te++,ge=y.next()){X.index>te?(Ue=X,X=null):Ue=X.sibling;var ln=N(v,X,ge.value,R);if(ln===null){X===null&&(X=Ue);break}e&&X&&ln.alternate===null&&t(v,X),g=a(ln,g,te),Z===null?q=ln:Z.sibling=ln,Z=ln,X=Ue}if(ge.done)return n(v,X),_e&&hn(v,te),q;if(X===null){for(;!ge.done;te++,ge=y.next())ge=_(v,ge.value,R),ge!==null&&(g=a(ge,g,te),Z===null?q=ge:Z.sibling=ge,Z=ge);return _e&&hn(v,te),q}for(X=r(v,X);!ge.done;te++,ge=y.next())ge=$(X,v,te,ge.value,R),ge!==null&&(e&&ge.alternate!==null&&X.delete(ge.key===null?te:ge.key),g=a(ge,g,te),Z===null?q=ge:Z.sibling=ge,Z=ge);return e&&X.forEach(function(n2){return t(v,n2)}),_e&&hn(v,te),q}function Fe(v,g,y,R){if(typeof y=="object"&&y!==null&&y.type===Y&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case pe:e:{for(var q=y.key,Z=g;Z!==null;){if(Z.key===q){if(q=y.type,q===Y){if(Z.tag===7){n(v,Z.sibling),g=i(Z,y.props.children),g.return=v,v=g;break e}}else if(Z.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===be&&N0(q)===Z.type){n(v,Z.sibling),g=i(Z,y.props),g.ref=Pr(v,Z,y),g.return=v,v=g;break e}n(v,Z);break}else t(v,Z);Z=Z.sibling}y.type===Y?(g=Sn(y.props.children,v.mode,R,y.key),g.return=v,v=g):(R=oo(y.type,y.key,y.props,null,v.mode,R),R.ref=Pr(v,g,y),R.return=v,v=R)}return c(v);case oe:e:{for(Z=y.key;g!==null;){if(g.key===Z)if(g.tag===4&&g.stateNode.containerInfo===y.containerInfo&&g.stateNode.implementation===y.implementation){n(v,g.sibling),g=i(g,y.children||[]),g.return=v,v=g;break e}else{n(v,g);break}else t(v,g);g=g.sibling}g=xl(y,v.mode,R),g.return=v,v=g}return c(v);case be:return Z=y._init,Fe(v,g,Z(y._payload),R)}if(ar(y))return H(v,g,y,R);if(K(y))return W(v,g,y,R);Ii(v,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,g!==null&&g.tag===6?(n(v,g.sibling),g=i(g,y),g.return=v,v=g):(n(v,g),g=gl(y,v.mode,R),g.return=v,v=g),c(v)):n(v,g)}return Fe}var Un=E0(!0),M0=E0(!1),Fi=Gt(null),Oi=null,Wn=null,za=null;function Na(){za=Wn=Oi=null}function Ea(e){var t=Fi.current;Ee(Fi),e._currentValue=t}function Ma(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function qn(e,t){Oi=e,za=Wn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(tt=!0),e.firstContext=null)}function mt(e){var t=e._currentValue;if(za!==e)if(e={context:e,memoizedValue:t,next:null},Wn===null){if(Oi===null)throw Error(s(308));Wn=e,Oi.dependencies={lanes:0,firstContext:e}}else Wn=Wn.next=e;return t}var gn=null;function _a(e){gn===null?gn=[e]:gn.push(e)}function _0(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,_a(t)):(n.next=i.next,i.next=n),t.interleaved=n,Ot(e,r)}function Ot(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Zt=!1;function Pa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function P0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function At(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Xt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(he&2)!==0){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Ot(e,n)}return i=r.interleaved,i===null?(t.next=t,_a(r)):(t.next=i.next,i.next=t),r.interleaved=t,Ot(e,n)}function Ai(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Wo(e,n)}}function L0(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var c={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=c:a=a.next=c,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function $i(e,t,n,r){var i=e.updateQueue;Zt=!1;var a=i.firstBaseUpdate,c=i.lastBaseUpdate,f=i.shared.pending;if(f!==null){i.shared.pending=null;var m=f,k=m.next;m.next=null,c===null?a=k:c.next=k,c=m;var E=e.alternate;E!==null&&(E=E.updateQueue,f=E.lastBaseUpdate,f!==c&&(f===null?E.firstBaseUpdate=k:f.next=k,E.lastBaseUpdate=m))}if(a!==null){var _=i.baseState;c=0,E=k=m=null,f=a;do{var N=f.lane,$=f.eventTime;if((r&N)===N){E!==null&&(E=E.next={eventTime:$,lane:0,tag:f.tag,payload:f.payload,callback:f.callback,next:null});e:{var H=e,W=f;switch(N=t,$=n,W.tag){case 1:if(H=W.payload,typeof H=="function"){_=H.call($,_,N);break e}_=H;break e;case 3:H.flags=H.flags&-65537|128;case 0:if(H=W.payload,N=typeof H=="function"?H.call($,_,N):H,N==null)break e;_=D({},_,N);break e;case 2:Zt=!0}}f.callback!==null&&f.lane!==0&&(e.flags|=64,N=i.effects,N===null?i.effects=[f]:N.push(f))}else $={eventTime:$,lane:N,tag:f.tag,payload:f.payload,callback:f.callback,next:null},E===null?(k=E=$,m=_):E=E.next=$,c|=N;if(f=f.next,f===null){if(f=i.shared.pending,f===null)break;N=f,f=N.next,N.next=null,i.lastBaseUpdate=N,i.shared.pending=null}}while(!0);if(E===null&&(m=_),i.baseState=m,i.firstBaseUpdate=k,i.lastBaseUpdate=E,t=i.shared.interleaved,t!==null){i=t;do c|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);yn|=c,e.lanes=c,e.memoizedState=_}}function R0(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(s(191,i));i.call(r)}}}var Lr={},_t=Gt(Lr),Rr=Gt(Lr),Tr=Gt(Lr);function xn(e){if(e===Lr)throw Error(s(174));return e}function La(e,t){switch(je(Tr,t),je(Rr,e),je(_t,Lr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ro(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ro(t,e)}Ee(_t),je(_t,t)}function Qn(){Ee(_t),Ee(Rr),Ee(Tr)}function T0(e){xn(Tr.current);var t=xn(_t.current),n=Ro(t,e.type);t!==n&&(je(Rr,e),je(_t,n))}function Ra(e){Rr.current===e&&(Ee(_t),Ee(Rr))}var Pe=Gt(0);function Di(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ta=[];function Ia(){for(var e=0;e<Ta.length;e++)Ta[e]._workInProgressVersionPrimary=null;Ta.length=0}var Vi=me.ReactCurrentDispatcher,Fa=me.ReactCurrentBatchConfig,vn=0,Le=null,$e=null,Be=null,Bi=!1,Ir=!1,Fr=0,jd=0;function Ye(){throw Error(s(321))}function Oa(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!wt(e[n],t[n]))return!1;return!0}function Aa(e,t,n,r,i,a){if(vn=a,Le=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Vi.current=e===null||e.memoizedState===null?Ed:Md,e=n(r,i),Ir){a=0;do{if(Ir=!1,Fr=0,25<=a)throw Error(s(301));a+=1,Be=$e=null,t.updateQueue=null,Vi.current=_d,e=n(r,i)}while(Ir)}if(Vi.current=Wi,t=$e!==null&&$e.next!==null,vn=0,Be=$e=Le=null,Bi=!1,t)throw Error(s(300));return e}function $a(){var e=Fr!==0;return Fr=0,e}function Pt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Be===null?Le.memoizedState=Be=e:Be=Be.next=e,Be}function ht(){if($e===null){var e=Le.alternate;e=e!==null?e.memoizedState:null}else e=$e.next;var t=Be===null?Le.memoizedState:Be.next;if(t!==null)Be=t,$e=e;else{if(e===null)throw Error(s(310));$e=e,e={memoizedState:$e.memoizedState,baseState:$e.baseState,baseQueue:$e.baseQueue,queue:$e.queue,next:null},Be===null?Le.memoizedState=Be=e:Be=Be.next=e}return Be}function Or(e,t){return typeof t=="function"?t(e):t}function Da(e){var t=ht(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var r=$e,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var c=i.next;i.next=a.next,a.next=c}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var f=c=null,m=null,k=a;do{var E=k.lane;if((vn&E)===E)m!==null&&(m=m.next={lane:0,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null}),r=k.hasEagerState?k.eagerState:e(r,k.action);else{var _={lane:E,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null};m===null?(f=m=_,c=r):m=m.next=_,Le.lanes|=E,yn|=E}k=k.next}while(k!==null&&k!==a);m===null?c=r:m.next=f,wt(r,t.memoizedState)||(tt=!0),t.memoizedState=r,t.baseState=c,t.baseQueue=m,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do a=i.lane,Le.lanes|=a,yn|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Va(e){var t=ht(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var c=i=i.next;do a=e(a,c.action),c=c.next;while(c!==i);wt(a,t.memoizedState)||(tt=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function I0(){}function F0(e,t){var n=Le,r=ht(),i=t(),a=!wt(r.memoizedState,i);if(a&&(r.memoizedState=i,tt=!0),r=r.queue,Ba($0.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||Be!==null&&Be.memoizedState.tag&1){if(n.flags|=2048,Ar(9,A0.bind(null,n,r,i,t),void 0,null),He===null)throw Error(s(349));(vn&30)!==0||O0(n,t,i)}return i}function O0(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Le.updateQueue,t===null?(t={lastEffect:null,stores:null},Le.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function A0(e,t,n,r){t.value=n,t.getSnapshot=r,D0(t)&&V0(e)}function $0(e,t,n){return n(function(){D0(t)&&V0(e)})}function D0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!wt(e,n)}catch{return!0}}function V0(e){var t=Ot(e,1);t!==null&&Ct(t,e,1,-1)}function B0(e){var t=Pt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Or,lastRenderedState:e},t.queue=e,e=e.dispatch=Nd.bind(null,Le,e),[t.memoizedState,e]}function Ar(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Le.updateQueue,t===null?(t={lastEffect:null,stores:null},Le.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function H0(){return ht().memoizedState}function Hi(e,t,n,r){var i=Pt();Le.flags|=e,i.memoizedState=Ar(1|t,n,void 0,r===void 0?null:r)}function Ui(e,t,n,r){var i=ht();r=r===void 0?null:r;var a=void 0;if($e!==null){var c=$e.memoizedState;if(a=c.destroy,r!==null&&Oa(r,c.deps)){i.memoizedState=Ar(t,n,a,r);return}}Le.flags|=e,i.memoizedState=Ar(1|t,n,a,r)}function U0(e,t){return Hi(8390656,8,e,t)}function Ba(e,t){return Ui(2048,8,e,t)}function W0(e,t){return Ui(4,2,e,t)}function q0(e,t){return Ui(4,4,e,t)}function Q0(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Y0(e,t,n){return n=n!=null?n.concat([e]):null,Ui(4,4,Q0.bind(null,t,e),n)}function Ha(){}function G0(e,t){var n=ht();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Oa(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function K0(e,t){var n=ht();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Oa(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function J0(e,t,n){return(vn&21)===0?(e.baseState&&(e.baseState=!1,tt=!0),e.memoizedState=n):(wt(n,t)||(n=Ns(),Le.lanes|=n,yn|=n,e.baseState=!0),t)}function Cd(e,t){var n=ke;ke=n!==0&&4>n?n:4,e(!0);var r=Fa.transition;Fa.transition={};try{e(!1),t()}finally{ke=n,Fa.transition=r}}function Z0(){return ht().memoizedState}function zd(e,t,n){var r=rn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},X0(e))e1(t,n);else if(n=_0(e,t,n,r),n!==null){var i=Ze();Ct(n,e,r,i),t1(n,t,r)}}function Nd(e,t,n){var r=rn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(X0(e))e1(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var c=t.lastRenderedState,f=a(c,n);if(i.hasEagerState=!0,i.eagerState=f,wt(f,c)){var m=t.interleaved;m===null?(i.next=i,_a(t)):(i.next=m.next,m.next=i),t.interleaved=i;return}}catch{}finally{}n=_0(e,t,i,r),n!==null&&(i=Ze(),Ct(n,e,r,i),t1(n,t,r))}}function X0(e){var t=e.alternate;return e===Le||t!==null&&t===Le}function e1(e,t){Ir=Bi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function t1(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Wo(e,n)}}var Wi={readContext:mt,useCallback:Ye,useContext:Ye,useEffect:Ye,useImperativeHandle:Ye,useInsertionEffect:Ye,useLayoutEffect:Ye,useMemo:Ye,useReducer:Ye,useRef:Ye,useState:Ye,useDebugValue:Ye,useDeferredValue:Ye,useTransition:Ye,useMutableSource:Ye,useSyncExternalStore:Ye,useId:Ye,unstable_isNewReconciler:!1},Ed={readContext:mt,useCallback:function(e,t){return Pt().memoizedState=[e,t===void 0?null:t],e},useContext:mt,useEffect:U0,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Hi(4194308,4,Q0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Hi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Hi(4,2,e,t)},useMemo:function(e,t){var n=Pt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Pt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=zd.bind(null,Le,e),[r.memoizedState,e]},useRef:function(e){var t=Pt();return e={current:e},t.memoizedState=e},useState:B0,useDebugValue:Ha,useDeferredValue:function(e){return Pt().memoizedState=e},useTransition:function(){var e=B0(!1),t=e[0];return e=Cd.bind(null,e[1]),Pt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Le,i=Pt();if(_e){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),He===null)throw Error(s(349));(vn&30)!==0||O0(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,U0($0.bind(null,r,a,e),[e]),r.flags|=2048,Ar(9,A0.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=Pt(),t=He.identifierPrefix;if(_e){var n=Ft,r=It;n=(r&~(1<<32-yt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Fr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=jd++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Md={readContext:mt,useCallback:G0,useContext:mt,useEffect:Ba,useImperativeHandle:Y0,useInsertionEffect:W0,useLayoutEffect:q0,useMemo:K0,useReducer:Da,useRef:H0,useState:function(){return Da(Or)},useDebugValue:Ha,useDeferredValue:function(e){var t=ht();return J0(t,$e.memoizedState,e)},useTransition:function(){var e=Da(Or)[0],t=ht().memoizedState;return[e,t]},useMutableSource:I0,useSyncExternalStore:F0,useId:Z0,unstable_isNewReconciler:!1},_d={readContext:mt,useCallback:G0,useContext:mt,useEffect:Ba,useImperativeHandle:Y0,useInsertionEffect:W0,useLayoutEffect:q0,useMemo:K0,useReducer:Va,useRef:H0,useState:function(){return Va(Or)},useDebugValue:Ha,useDeferredValue:function(e){var t=ht();return $e===null?t.memoizedState=e:J0(t,$e.memoizedState,e)},useTransition:function(){var e=Va(Or)[0],t=ht().memoizedState;return[e,t]},useMutableSource:I0,useSyncExternalStore:F0,useId:Z0,unstable_isNewReconciler:!1};function bt(e,t){if(e&&e.defaultProps){t=D({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ua(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:D({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var qi={isMounted:function(e){return(e=e._reactInternals)?dn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ze(),i=rn(e),a=At(r,i);a.payload=t,n!=null&&(a.callback=n),t=Xt(e,a,i),t!==null&&(Ct(t,e,i,r),Ai(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ze(),i=rn(e),a=At(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Xt(e,a,i),t!==null&&(Ct(t,e,i,r),Ai(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ze(),r=rn(e),i=At(n,r);i.tag=2,t!=null&&(i.callback=t),t=Xt(e,i,r),t!==null&&(Ct(t,e,r,n),Ai(t,e,r))}};function n1(e,t,n,r,i,a,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,c):t.prototype&&t.prototype.isPureReactComponent?!jr(n,r)||!jr(i,a):!0}function r1(e,t,n){var r=!1,i=Kt,a=t.contextType;return typeof a=="object"&&a!==null?a=mt(a):(i=et(t)?fn:Qe.current,r=t.contextTypes,a=(r=r!=null)?Dn(e,i):Kt),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=qi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function i1(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&qi.enqueueReplaceState(t,t.state,null)}function Wa(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Pa(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=mt(a):(a=et(t)?fn:Qe.current,i.context=Dn(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Ua(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&qi.enqueueReplaceState(i,i.state,null),$i(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Yn(e,t){try{var n="",r=t;do n+=se(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function qa(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Qa(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Pd=typeof WeakMap=="function"?WeakMap:Map;function o1(e,t,n){n=At(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Xi||(Xi=!0,sl=r),Qa(e,t)},n}function a1(e,t,n){n=At(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Qa(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){Qa(e,t),typeof r!="function"&&(tn===null?tn=new Set([this]):tn.add(this));var c=t.stack;this.componentDidCatch(t.value,{componentStack:c!==null?c:""})}),n}function l1(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Pd;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Wd.bind(null,e,t,n),t.then(e,e))}function s1(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function u1(e,t,n,r,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=At(-1,1),t.tag=2,Xt(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var Ld=me.ReactCurrentOwner,tt=!1;function Je(e,t,n,r){t.child=e===null?M0(t,null,n,r):Un(t,e.child,n,r)}function c1(e,t,n,r,i){n=n.render;var a=t.ref;return qn(t,i),r=Aa(e,t,n,r,a,i),n=$a(),e!==null&&!tt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,$t(e,t,i)):(_e&&n&&ka(t),t.flags|=1,Je(e,t,r,i),t.child)}function d1(e,t,n,r,i){if(e===null){var a=n.type;return typeof a=="function"&&!hl(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,p1(e,t,a,r,i)):(e=oo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,(e.lanes&i)===0){var c=a.memoizedProps;if(n=n.compare,n=n!==null?n:jr,n(c,r)&&e.ref===t.ref)return $t(e,t,i)}return t.flags|=1,e=an(a,r),e.ref=t.ref,e.return=t,t.child=e}function p1(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(jr(a,r)&&e.ref===t.ref)if(tt=!1,t.pendingProps=r=a,(e.lanes&i)!==0)(e.flags&131072)!==0&&(tt=!0);else return t.lanes=e.lanes,$t(e,t,i)}return Ya(e,t,n,r,i)}function f1(e,t,n){var r=t.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},je(Kn,st),st|=n;else{if((n&1073741824)===0)return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,je(Kn,st),st|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,je(Kn,st),st|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,je(Kn,st),st|=r;return Je(e,t,i,n),t.child}function m1(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ya(e,t,n,r,i){var a=et(n)?fn:Qe.current;return a=Dn(t,a),qn(t,i),n=Aa(e,t,n,r,a,i),r=$a(),e!==null&&!tt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,$t(e,t,i)):(_e&&r&&ka(t),t.flags|=1,Je(e,t,n,i),t.child)}function h1(e,t,n,r,i){if(et(n)){var a=!0;_i(t)}else a=!1;if(qn(t,i),t.stateNode===null)Yi(e,t),r1(t,n,r),Wa(t,n,r,i),r=!0;else if(e===null){var c=t.stateNode,f=t.memoizedProps;c.props=f;var m=c.context,k=n.contextType;typeof k=="object"&&k!==null?k=mt(k):(k=et(n)?fn:Qe.current,k=Dn(t,k));var E=n.getDerivedStateFromProps,_=typeof E=="function"||typeof c.getSnapshotBeforeUpdate=="function";_||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(f!==r||m!==k)&&i1(t,c,r,k),Zt=!1;var N=t.memoizedState;c.state=N,$i(t,r,c,i),m=t.memoizedState,f!==r||N!==m||Xe.current||Zt?(typeof E=="function"&&(Ua(t,n,E,r),m=t.memoizedState),(f=Zt||n1(t,n,f,r,N,m,k))?(_||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(t.flags|=4194308)):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=m),c.props=r,c.state=m,c.context=k,r=f):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{c=t.stateNode,P0(e,t),f=t.memoizedProps,k=t.type===t.elementType?f:bt(t.type,f),c.props=k,_=t.pendingProps,N=c.context,m=n.contextType,typeof m=="object"&&m!==null?m=mt(m):(m=et(n)?fn:Qe.current,m=Dn(t,m));var $=n.getDerivedStateFromProps;(E=typeof $=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(f!==_||N!==m)&&i1(t,c,r,m),Zt=!1,N=t.memoizedState,c.state=N,$i(t,r,c,i);var H=t.memoizedState;f!==_||N!==H||Xe.current||Zt?(typeof $=="function"&&(Ua(t,n,$,r),H=t.memoizedState),(k=Zt||n1(t,n,k,r,N,H,m)||!1)?(E||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(r,H,m),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(r,H,m)),typeof c.componentDidUpdate=="function"&&(t.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof c.componentDidUpdate!="function"||f===e.memoizedProps&&N===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&N===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=H),c.props=r,c.state=H,c.context=m,r=k):(typeof c.componentDidUpdate!="function"||f===e.memoizedProps&&N===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&N===e.memoizedState||(t.flags|=1024),r=!1)}return Ga(e,t,n,r,a,i)}function Ga(e,t,n,r,i,a){m1(e,t);var c=(t.flags&128)!==0;if(!r&&!c)return i&&w0(t,n,!1),$t(e,t,a);r=t.stateNode,Ld.current=t;var f=c&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&c?(t.child=Un(t,e.child,null,a),t.child=Un(t,null,f,a)):Je(e,t,f,a),t.memoizedState=r.state,i&&w0(t,n,!0),t.child}function g1(e){var t=e.stateNode;t.pendingContext?v0(e,t.pendingContext,t.pendingContext!==t.context):t.context&&v0(e,t.context,!1),La(e,t.containerInfo)}function x1(e,t,n,r,i){return Hn(),Ca(i),t.flags|=256,Je(e,t,n,r),t.child}var Ka={dehydrated:null,treeContext:null,retryLane:0};function Ja(e){return{baseLanes:e,cachePool:null,transitions:null}}function v1(e,t,n){var r=t.pendingProps,i=Pe.current,a=!1,c=(t.flags&128)!==0,f;if((f=c)||(f=e!==null&&e.memoizedState===null?!1:(i&2)!==0),f?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),je(Pe,i&1),e===null)return ja(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(c=r.children,e=r.fallback,a?(r=t.mode,a=t.child,c={mode:"hidden",children:c},(r&1)===0&&a!==null?(a.childLanes=0,a.pendingProps=c):a=ao(c,r,0,null),e=Sn(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Ja(n),t.memoizedState=Ka,e):Za(t,c));if(i=e.memoizedState,i!==null&&(f=i.dehydrated,f!==null))return Rd(e,t,c,r,f,i,n);if(a){a=r.fallback,c=t.mode,i=e.child,f=i.sibling;var m={mode:"hidden",children:r.children};return(c&1)===0&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=m,t.deletions=null):(r=an(i,m),r.subtreeFlags=i.subtreeFlags&14680064),f!==null?a=an(f,a):(a=Sn(a,c,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,c=e.child.memoizedState,c=c===null?Ja(n):{baseLanes:c.baseLanes|n,cachePool:null,transitions:c.transitions},a.memoizedState=c,a.childLanes=e.childLanes&~n,t.memoizedState=Ka,r}return a=e.child,e=a.sibling,r=an(a,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Za(e,t){return t=ao({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Qi(e,t,n,r){return r!==null&&Ca(r),Un(t,e.child,null,n),e=Za(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Rd(e,t,n,r,i,a,c){if(n)return t.flags&256?(t.flags&=-257,r=qa(Error(s(422))),Qi(e,t,c,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=ao({mode:"visible",children:r.children},i,0,null),a=Sn(a,i,c,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,(t.mode&1)!==0&&Un(t,e.child,null,c),t.child.memoizedState=Ja(c),t.memoizedState=Ka,a);if((t.mode&1)===0)return Qi(e,t,c,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var f=r.dgst;return r=f,a=Error(s(419)),r=qa(a,r,void 0),Qi(e,t,c,r)}if(f=(c&e.childLanes)!==0,tt||f){if(r=He,r!==null){switch(c&-c){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|c))!==0?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,Ot(e,i),Ct(r,e,i,-1))}return ml(),r=qa(Error(s(421))),Qi(e,t,c,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=qd.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,lt=Yt(i.nextSibling),at=t,_e=!0,kt=null,e!==null&&(pt[ft++]=It,pt[ft++]=Ft,pt[ft++]=mn,It=e.id,Ft=e.overflow,mn=t),t=Za(t,r.children),t.flags|=4096,t)}function y1(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ma(e.return,t,n)}function Xa(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function w1(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(Je(e,t,r.children,n),r=Pe.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&y1(e,n,t);else if(e.tag===19)y1(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(je(Pe,r),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Di(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Xa(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Di(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Xa(t,!0,n,null,a);break;case"together":Xa(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Yi(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function $t(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),yn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=an(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=an(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Td(e,t,n){switch(t.tag){case 3:g1(t),Hn();break;case 5:T0(t);break;case 1:et(t.type)&&_i(t);break;case 4:La(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;je(Fi,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(je(Pe,Pe.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?v1(e,t,n):(je(Pe,Pe.current&1),e=$t(e,t,n),e!==null?e.sibling:null);je(Pe,Pe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return w1(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),je(Pe,Pe.current),r)break;return null;case 22:case 23:return t.lanes=0,f1(e,t,n)}return $t(e,t,n)}var k1,el,b1,S1;k1=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},el=function(){},b1=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,xn(_t.current);var a=null;switch(n){case"input":i=Mo(e,i),r=Mo(e,r),a=[];break;case"select":i=D({},i,{value:void 0}),r=D({},r,{value:void 0}),a=[];break;case"textarea":i=Lo(e,i),r=Lo(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ni)}To(n,r);var c;n=null;for(k in i)if(!r.hasOwnProperty(k)&&i.hasOwnProperty(k)&&i[k]!=null)if(k==="style"){var f=i[k];for(c in f)f.hasOwnProperty(c)&&(n||(n={}),n[c]="")}else k!=="dangerouslySetInnerHTML"&&k!=="children"&&k!=="suppressContentEditableWarning"&&k!=="suppressHydrationWarning"&&k!=="autoFocus"&&(p.hasOwnProperty(k)?a||(a=[]):(a=a||[]).push(k,null));for(k in r){var m=r[k];if(f=i!=null?i[k]:void 0,r.hasOwnProperty(k)&&m!==f&&(m!=null||f!=null))if(k==="style")if(f){for(c in f)!f.hasOwnProperty(c)||m&&m.hasOwnProperty(c)||(n||(n={}),n[c]="");for(c in m)m.hasOwnProperty(c)&&f[c]!==m[c]&&(n||(n={}),n[c]=m[c])}else n||(a||(a=[]),a.push(k,n)),n=m;else k==="dangerouslySetInnerHTML"?(m=m?m.__html:void 0,f=f?f.__html:void 0,m!=null&&f!==m&&(a=a||[]).push(k,m)):k==="children"?typeof m!="string"&&typeof m!="number"||(a=a||[]).push(k,""+m):k!=="suppressContentEditableWarning"&&k!=="suppressHydrationWarning"&&(p.hasOwnProperty(k)?(m!=null&&k==="onScroll"&&Ne("scroll",e),a||f===m||(a=[])):(a=a||[]).push(k,m))}n&&(a=a||[]).push("style",n);var k=a;(t.updateQueue=k)&&(t.flags|=4)}},S1=function(e,t,n,r){n!==r&&(t.flags|=4)};function $r(e,t){if(!_e)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ge(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Id(e,t,n){var r=t.pendingProps;switch(ba(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ge(t),null;case 1:return et(t.type)&&Mi(),Ge(t),null;case 3:return r=t.stateNode,Qn(),Ee(Xe),Ee(Qe),Ia(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ti(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,kt!==null&&(dl(kt),kt=null))),el(e,t),Ge(t),null;case 5:Ra(t);var i=xn(Tr.current);if(n=t.type,e!==null&&t.stateNode!=null)b1(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(s(166));return Ge(t),null}if(e=xn(_t.current),Ti(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[Mt]=t,r[Mr]=a,e=(t.mode&1)!==0,n){case"dialog":Ne("cancel",r),Ne("close",r);break;case"iframe":case"object":case"embed":Ne("load",r);break;case"video":case"audio":for(i=0;i<zr.length;i++)Ne(zr[i],r);break;case"source":Ne("error",r);break;case"img":case"image":case"link":Ne("error",r),Ne("load",r);break;case"details":Ne("toggle",r);break;case"input":rs(r,a),Ne("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},Ne("invalid",r);break;case"textarea":as(r,a),Ne("invalid",r)}To(n,a),i=null;for(var c in a)if(a.hasOwnProperty(c)){var f=a[c];c==="children"?typeof f=="string"?r.textContent!==f&&(a.suppressHydrationWarning!==!0&&zi(r.textContent,f,e),i=["children",f]):typeof f=="number"&&r.textContent!==""+f&&(a.suppressHydrationWarning!==!0&&zi(r.textContent,f,e),i=["children",""+f]):p.hasOwnProperty(c)&&f!=null&&c==="onScroll"&&Ne("scroll",r)}switch(n){case"input":ri(r),os(r,a,!0);break;case"textarea":ri(r),ss(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=Ni)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{c=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=us(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=c.createElement(n,{is:r.is}):(e=c.createElement(n),n==="select"&&(c=e,r.multiple?c.multiple=!0:r.size&&(c.size=r.size))):e=c.createElementNS(e,n),e[Mt]=t,e[Mr]=r,k1(e,t,!1,!1),t.stateNode=e;e:{switch(c=Io(n,r),n){case"dialog":Ne("cancel",e),Ne("close",e),i=r;break;case"iframe":case"object":case"embed":Ne("load",e),i=r;break;case"video":case"audio":for(i=0;i<zr.length;i++)Ne(zr[i],e);i=r;break;case"source":Ne("error",e),i=r;break;case"img":case"image":case"link":Ne("error",e),Ne("load",e),i=r;break;case"details":Ne("toggle",e),i=r;break;case"input":rs(e,r),i=Mo(e,r),Ne("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=D({},r,{value:void 0}),Ne("invalid",e);break;case"textarea":as(e,r),i=Lo(e,r),Ne("invalid",e);break;default:i=r}To(n,i),f=i;for(a in f)if(f.hasOwnProperty(a)){var m=f[a];a==="style"?ps(e,m):a==="dangerouslySetInnerHTML"?(m=m?m.__html:void 0,m!=null&&cs(e,m)):a==="children"?typeof m=="string"?(n!=="textarea"||m!=="")&&lr(e,m):typeof m=="number"&&lr(e,""+m):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(p.hasOwnProperty(a)?m!=null&&a==="onScroll"&&Ne("scroll",e):m!=null&&xe(e,a,m,c))}switch(n){case"input":ri(e),os(e,r,!1);break;case"textarea":ri(e),ss(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ne(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?En(e,!!r.multiple,a,!1):r.defaultValue!=null&&En(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ni)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ge(t),null;case 6:if(e&&t.stateNode!=null)S1(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(s(166));if(n=xn(Tr.current),xn(_t.current),Ti(t)){if(r=t.stateNode,n=t.memoizedProps,r[Mt]=t,(a=r.nodeValue!==n)&&(e=at,e!==null))switch(e.tag){case 3:zi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&zi(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Mt]=t,t.stateNode=r}return Ge(t),null;case 13:if(Ee(Pe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(_e&&lt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)z0(),Hn(),t.flags|=98560,a=!1;else if(a=Ti(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(s(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(s(317));a[Mt]=t}else Hn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ge(t),a=!1}else kt!==null&&(dl(kt),kt=null),a=!0;if(!a)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Pe.current&1)!==0?De===0&&(De=3):ml())),t.updateQueue!==null&&(t.flags|=4),Ge(t),null);case 4:return Qn(),el(e,t),e===null&&Nr(t.stateNode.containerInfo),Ge(t),null;case 10:return Ea(t.type._context),Ge(t),null;case 17:return et(t.type)&&Mi(),Ge(t),null;case 19:if(Ee(Pe),a=t.memoizedState,a===null)return Ge(t),null;if(r=(t.flags&128)!==0,c=a.rendering,c===null)if(r)$r(a,!1);else{if(De!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(c=Di(e),c!==null){for(t.flags|=128,$r(a,!1),r=c.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,c=a.alternate,c===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=c.childLanes,a.lanes=c.lanes,a.child=c.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=c.memoizedProps,a.memoizedState=c.memoizedState,a.updateQueue=c.updateQueue,a.type=c.type,e=c.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return je(Pe,Pe.current&1|2),t.child}e=e.sibling}a.tail!==null&&Ie()>Jn&&(t.flags|=128,r=!0,$r(a,!1),t.lanes=4194304)}else{if(!r)if(e=Di(c),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),$r(a,!0),a.tail===null&&a.tailMode==="hidden"&&!c.alternate&&!_e)return Ge(t),null}else 2*Ie()-a.renderingStartTime>Jn&&n!==1073741824&&(t.flags|=128,r=!0,$r(a,!1),t.lanes=4194304);a.isBackwards?(c.sibling=t.child,t.child=c):(n=a.last,n!==null?n.sibling=c:t.child=c,a.last=c)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Ie(),t.sibling=null,n=Pe.current,je(Pe,r?n&1|2:n&1),t):(Ge(t),null);case 22:case 23:return fl(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(st&1073741824)!==0&&(Ge(t),t.subtreeFlags&6&&(t.flags|=8192)):Ge(t),null;case 24:return null;case 25:return null}throw Error(s(156,t.tag))}function Fd(e,t){switch(ba(t),t.tag){case 1:return et(t.type)&&Mi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Qn(),Ee(Xe),Ee(Qe),Ia(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Ra(t),null;case 13:if(Ee(Pe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));Hn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ee(Pe),null;case 4:return Qn(),null;case 10:return Ea(t.type._context),null;case 22:case 23:return fl(),null;case 24:return null;default:return null}}var Gi=!1,Ke=!1,Od=typeof WeakSet=="function"?WeakSet:Set,V=null;function Gn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Te(e,t,r)}else n.current=null}function tl(e,t,n){try{n()}catch(r){Te(e,t,r)}}var j1=!1;function Ad(e,t){if(fa=hi,e=n0(),oa(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var c=0,f=-1,m=-1,k=0,E=0,_=e,N=null;t:for(;;){for(var $;_!==n||i!==0&&_.nodeType!==3||(f=c+i),_!==a||r!==0&&_.nodeType!==3||(m=c+r),_.nodeType===3&&(c+=_.nodeValue.length),($=_.firstChild)!==null;)N=_,_=$;for(;;){if(_===e)break t;if(N===n&&++k===i&&(f=c),N===a&&++E===r&&(m=c),($=_.nextSibling)!==null)break;_=N,N=_.parentNode}_=$}n=f===-1||m===-1?null:{start:f,end:m}}else n=null}n=n||{start:0,end:0}}else n=null;for(ma={focusedElem:e,selectionRange:n},hi=!1,V=t;V!==null;)if(t=V,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,V=e;else for(;V!==null;){t=V;try{var H=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(H!==null){var W=H.memoizedProps,Fe=H.memoizedState,v=t.stateNode,g=v.getSnapshotBeforeUpdate(t.elementType===t.type?W:bt(t.type,W),Fe);v.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(s(163))}}catch(R){Te(t,t.return,R)}if(e=t.sibling,e!==null){e.return=t.return,V=e;break}V=t.return}return H=j1,j1=!1,H}function Dr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&tl(t,n,a)}i=i.next}while(i!==r)}}function Ki(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function nl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function C1(e){var t=e.alternate;t!==null&&(e.alternate=null,C1(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Mt],delete t[Mr],delete t[va],delete t[wd],delete t[kd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function z1(e){return e.tag===5||e.tag===3||e.tag===4}function N1(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||z1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function rl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ni));else if(r!==4&&(e=e.child,e!==null))for(rl(e,t,n),e=e.sibling;e!==null;)rl(e,t,n),e=e.sibling}function il(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(il(e,t,n),e=e.sibling;e!==null;)il(e,t,n),e=e.sibling}var We=null,St=!1;function en(e,t,n){for(n=n.child;n!==null;)E1(e,t,n),n=n.sibling}function E1(e,t,n){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(ui,n)}catch{}switch(n.tag){case 5:Ke||Gn(n,t);case 6:var r=We,i=St;We=null,en(e,t,n),We=r,St=i,We!==null&&(St?(e=We,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):We.removeChild(n.stateNode));break;case 18:We!==null&&(St?(e=We,n=n.stateNode,e.nodeType===8?xa(e.parentNode,n):e.nodeType===1&&xa(e,n),vr(e)):xa(We,n.stateNode));break;case 4:r=We,i=St,We=n.stateNode.containerInfo,St=!0,en(e,t,n),We=r,St=i;break;case 0:case 11:case 14:case 15:if(!Ke&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,c=a.destroy;a=a.tag,c!==void 0&&((a&2)!==0||(a&4)!==0)&&tl(n,t,c),i=i.next}while(i!==r)}en(e,t,n);break;case 1:if(!Ke&&(Gn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(f){Te(n,t,f)}en(e,t,n);break;case 21:en(e,t,n);break;case 22:n.mode&1?(Ke=(r=Ke)||n.memoizedState!==null,en(e,t,n),Ke=r):en(e,t,n);break;default:en(e,t,n)}}function M1(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Od),t.forEach(function(r){var i=Qd.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function jt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,c=t,f=c;e:for(;f!==null;){switch(f.tag){case 5:We=f.stateNode,St=!1;break e;case 3:We=f.stateNode.containerInfo,St=!0;break e;case 4:We=f.stateNode.containerInfo,St=!0;break e}f=f.return}if(We===null)throw Error(s(160));E1(a,c,i),We=null,St=!1;var m=i.alternate;m!==null&&(m.return=null),i.return=null}catch(k){Te(i,t,k)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)_1(t,e),t=t.sibling}function _1(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(jt(t,e),Lt(e),r&4){try{Dr(3,e,e.return),Ki(3,e)}catch(W){Te(e,e.return,W)}try{Dr(5,e,e.return)}catch(W){Te(e,e.return,W)}}break;case 1:jt(t,e),Lt(e),r&512&&n!==null&&Gn(n,n.return);break;case 5:if(jt(t,e),Lt(e),r&512&&n!==null&&Gn(n,n.return),e.flags&32){var i=e.stateNode;try{lr(i,"")}catch(W){Te(e,e.return,W)}}if(r&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,c=n!==null?n.memoizedProps:a,f=e.type,m=e.updateQueue;if(e.updateQueue=null,m!==null)try{f==="input"&&a.type==="radio"&&a.name!=null&&is(i,a),Io(f,c);var k=Io(f,a);for(c=0;c<m.length;c+=2){var E=m[c],_=m[c+1];E==="style"?ps(i,_):E==="dangerouslySetInnerHTML"?cs(i,_):E==="children"?lr(i,_):xe(i,E,_,k)}switch(f){case"input":_o(i,a);break;case"textarea":ls(i,a);break;case"select":var N=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var $=a.value;$!=null?En(i,!!a.multiple,$,!1):N!==!!a.multiple&&(a.defaultValue!=null?En(i,!!a.multiple,a.defaultValue,!0):En(i,!!a.multiple,a.multiple?[]:"",!1))}i[Mr]=a}catch(W){Te(e,e.return,W)}}break;case 6:if(jt(t,e),Lt(e),r&4){if(e.stateNode===null)throw Error(s(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(W){Te(e,e.return,W)}}break;case 3:if(jt(t,e),Lt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{vr(t.containerInfo)}catch(W){Te(e,e.return,W)}break;case 4:jt(t,e),Lt(e);break;case 13:jt(t,e),Lt(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(ll=Ie())),r&4&&M1(e);break;case 22:if(E=n!==null&&n.memoizedState!==null,e.mode&1?(Ke=(k=Ke)||E,jt(t,e),Ke=k):jt(t,e),Lt(e),r&8192){if(k=e.memoizedState!==null,(e.stateNode.isHidden=k)&&!E&&(e.mode&1)!==0)for(V=e,E=e.child;E!==null;){for(_=V=E;V!==null;){switch(N=V,$=N.child,N.tag){case 0:case 11:case 14:case 15:Dr(4,N,N.return);break;case 1:Gn(N,N.return);var H=N.stateNode;if(typeof H.componentWillUnmount=="function"){r=N,n=N.return;try{t=r,H.props=t.memoizedProps,H.state=t.memoizedState,H.componentWillUnmount()}catch(W){Te(r,n,W)}}break;case 5:Gn(N,N.return);break;case 22:if(N.memoizedState!==null){R1(_);continue}}$!==null?($.return=N,V=$):R1(_)}E=E.sibling}e:for(E=null,_=e;;){if(_.tag===5){if(E===null){E=_;try{i=_.stateNode,k?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(f=_.stateNode,m=_.memoizedProps.style,c=m!=null&&m.hasOwnProperty("display")?m.display:null,f.style.display=ds("display",c))}catch(W){Te(e,e.return,W)}}}else if(_.tag===6){if(E===null)try{_.stateNode.nodeValue=k?"":_.memoizedProps}catch(W){Te(e,e.return,W)}}else if((_.tag!==22&&_.tag!==23||_.memoizedState===null||_===e)&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===e)break e;for(;_.sibling===null;){if(_.return===null||_.return===e)break e;E===_&&(E=null),_=_.return}E===_&&(E=null),_.sibling.return=_.return,_=_.sibling}}break;case 19:jt(t,e),Lt(e),r&4&&M1(e);break;case 21:break;default:jt(t,e),Lt(e)}}function Lt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(z1(n)){var r=n;break e}n=n.return}throw Error(s(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(lr(i,""),r.flags&=-33);var a=N1(e);il(e,a,i);break;case 3:case 4:var c=r.stateNode.containerInfo,f=N1(e);rl(e,f,c);break;default:throw Error(s(161))}}catch(m){Te(e,e.return,m)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function $d(e,t,n){V=e,P1(e)}function P1(e,t,n){for(var r=(e.mode&1)!==0;V!==null;){var i=V,a=i.child;if(i.tag===22&&r){var c=i.memoizedState!==null||Gi;if(!c){var f=i.alternate,m=f!==null&&f.memoizedState!==null||Ke;f=Gi;var k=Ke;if(Gi=c,(Ke=m)&&!k)for(V=i;V!==null;)c=V,m=c.child,c.tag===22&&c.memoizedState!==null?T1(i):m!==null?(m.return=c,V=m):T1(i);for(;a!==null;)V=a,P1(a),a=a.sibling;V=i,Gi=f,Ke=k}L1(e)}else(i.subtreeFlags&8772)!==0&&a!==null?(a.return=i,V=a):L1(e)}}function L1(e){for(;V!==null;){var t=V;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ke||Ki(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ke)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:bt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&R0(t,a,r);break;case 3:var c=t.updateQueue;if(c!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}R0(t,c,n)}break;case 5:var f=t.stateNode;if(n===null&&t.flags&4){n=f;var m=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":m.autoFocus&&n.focus();break;case"img":m.src&&(n.src=m.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var k=t.alternate;if(k!==null){var E=k.memoizedState;if(E!==null){var _=E.dehydrated;_!==null&&vr(_)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(s(163))}Ke||t.flags&512&&nl(t)}catch(N){Te(t,t.return,N)}}if(t===e){V=null;break}if(n=t.sibling,n!==null){n.return=t.return,V=n;break}V=t.return}}function R1(e){for(;V!==null;){var t=V;if(t===e){V=null;break}var n=t.sibling;if(n!==null){n.return=t.return,V=n;break}V=t.return}}function T1(e){for(;V!==null;){var t=V;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ki(4,t)}catch(m){Te(t,n,m)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(m){Te(t,i,m)}}var a=t.return;try{nl(t)}catch(m){Te(t,a,m)}break;case 5:var c=t.return;try{nl(t)}catch(m){Te(t,c,m)}}}catch(m){Te(t,t.return,m)}if(t===e){V=null;break}var f=t.sibling;if(f!==null){f.return=t.return,V=f;break}V=t.return}}var Dd=Math.ceil,Ji=me.ReactCurrentDispatcher,ol=me.ReactCurrentOwner,gt=me.ReactCurrentBatchConfig,he=0,He=null,Oe=null,qe=0,st=0,Kn=Gt(0),De=0,Vr=null,yn=0,Zi=0,al=0,Br=null,nt=null,ll=0,Jn=1/0,Dt=null,Xi=!1,sl=null,tn=null,eo=!1,nn=null,to=0,Hr=0,ul=null,no=-1,ro=0;function Ze(){return(he&6)!==0?Ie():no!==-1?no:no=Ie()}function rn(e){return(e.mode&1)===0?1:(he&2)!==0&&qe!==0?qe&-qe:Sd.transition!==null?(ro===0&&(ro=Ns()),ro):(e=ke,e!==0||(e=window.event,e=e===void 0?16:Fs(e.type)),e)}function Ct(e,t,n,r){if(50<Hr)throw Hr=0,ul=null,Error(s(185));fr(e,n,r),((he&2)===0||e!==He)&&(e===He&&((he&2)===0&&(Zi|=n),De===4&&on(e,qe)),rt(e,r),n===1&&he===0&&(t.mode&1)===0&&(Jn=Ie()+500,Pi&&Jt()))}function rt(e,t){var n=e.callbackNode;Sc(e,t);var r=pi(e,e===He?qe:0);if(r===0)n!==null&&js(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&js(n),t===1)e.tag===0?bd(F1.bind(null,e)):k0(F1.bind(null,e)),vd(function(){(he&6)===0&&Jt()}),n=null;else{switch(Es(r)){case 1:n=Bo;break;case 4:n=Cs;break;case 16:n=si;break;case 536870912:n=zs;break;default:n=si}n=U1(n,I1.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function I1(e,t){if(no=-1,ro=0,(he&6)!==0)throw Error(s(327));var n=e.callbackNode;if(Zn()&&e.callbackNode!==n)return null;var r=pi(e,e===He?qe:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=io(e,r);else{t=r;var i=he;he|=2;var a=A1();(He!==e||qe!==t)&&(Dt=null,Jn=Ie()+500,kn(e,t));do try{Hd();break}catch(f){O1(e,f)}while(!0);Na(),Ji.current=a,he=i,Oe!==null?t=0:(He=null,qe=0,t=De)}if(t!==0){if(t===2&&(i=Ho(e),i!==0&&(r=i,t=cl(e,i))),t===1)throw n=Vr,kn(e,0),on(e,r),rt(e,Ie()),n;if(t===6)on(e,r);else{if(i=e.current.alternate,(r&30)===0&&!Vd(i)&&(t=io(e,r),t===2&&(a=Ho(e),a!==0&&(r=a,t=cl(e,a))),t===1))throw n=Vr,kn(e,0),on(e,r),rt(e,Ie()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(s(345));case 2:bn(e,nt,Dt);break;case 3:if(on(e,r),(r&130023424)===r&&(t=ll+500-Ie(),10<t)){if(pi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ze(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ga(bn.bind(null,e,nt,Dt),t);break}bn(e,nt,Dt);break;case 4:if(on(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var c=31-yt(r);a=1<<c,c=t[c],c>i&&(i=c),r&=~a}if(r=i,r=Ie()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Dd(r/1960))-r,10<r){e.timeoutHandle=ga(bn.bind(null,e,nt,Dt),r);break}bn(e,nt,Dt);break;case 5:bn(e,nt,Dt);break;default:throw Error(s(329))}}}return rt(e,Ie()),e.callbackNode===n?I1.bind(null,e):null}function cl(e,t){var n=Br;return e.current.memoizedState.isDehydrated&&(kn(e,t).flags|=256),e=io(e,t),e!==2&&(t=nt,nt=n,t!==null&&dl(t)),e}function dl(e){nt===null?nt=e:nt.push.apply(nt,e)}function Vd(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!wt(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function on(e,t){for(t&=~al,t&=~Zi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-yt(t),r=1<<n;e[n]=-1,t&=~r}}function F1(e){if((he&6)!==0)throw Error(s(327));Zn();var t=pi(e,0);if((t&1)===0)return rt(e,Ie()),null;var n=io(e,t);if(e.tag!==0&&n===2){var r=Ho(e);r!==0&&(t=r,n=cl(e,r))}if(n===1)throw n=Vr,kn(e,0),on(e,t),rt(e,Ie()),n;if(n===6)throw Error(s(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,bn(e,nt,Dt),rt(e,Ie()),null}function pl(e,t){var n=he;he|=1;try{return e(t)}finally{he=n,he===0&&(Jn=Ie()+500,Pi&&Jt())}}function wn(e){nn!==null&&nn.tag===0&&(he&6)===0&&Zn();var t=he;he|=1;var n=gt.transition,r=ke;try{if(gt.transition=null,ke=1,e)return e()}finally{ke=r,gt.transition=n,he=t,(he&6)===0&&Jt()}}function fl(){st=Kn.current,Ee(Kn)}function kn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,xd(n)),Oe!==null)for(n=Oe.return;n!==null;){var r=n;switch(ba(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Mi();break;case 3:Qn(),Ee(Xe),Ee(Qe),Ia();break;case 5:Ra(r);break;case 4:Qn();break;case 13:Ee(Pe);break;case 19:Ee(Pe);break;case 10:Ea(r.type._context);break;case 22:case 23:fl()}n=n.return}if(He=e,Oe=e=an(e.current,null),qe=st=t,De=0,Vr=null,al=Zi=yn=0,nt=Br=null,gn!==null){for(t=0;t<gn.length;t++)if(n=gn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var c=a.next;a.next=i,r.next=c}n.pending=r}gn=null}return e}function O1(e,t){do{var n=Oe;try{if(Na(),Vi.current=Wi,Bi){for(var r=Le.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Bi=!1}if(vn=0,Be=$e=Le=null,Ir=!1,Fr=0,ol.current=null,n===null||n.return===null){De=1,Vr=t,Oe=null;break}e:{var a=e,c=n.return,f=n,m=t;if(t=qe,f.flags|=32768,m!==null&&typeof m=="object"&&typeof m.then=="function"){var k=m,E=f,_=E.tag;if((E.mode&1)===0&&(_===0||_===11||_===15)){var N=E.alternate;N?(E.updateQueue=N.updateQueue,E.memoizedState=N.memoizedState,E.lanes=N.lanes):(E.updateQueue=null,E.memoizedState=null)}var $=s1(c);if($!==null){$.flags&=-257,u1($,c,f,a,t),$.mode&1&&l1(a,k,t),t=$,m=k;var H=t.updateQueue;if(H===null){var W=new Set;W.add(m),t.updateQueue=W}else H.add(m);break e}else{if((t&1)===0){l1(a,k,t),ml();break e}m=Error(s(426))}}else if(_e&&f.mode&1){var Fe=s1(c);if(Fe!==null){(Fe.flags&65536)===0&&(Fe.flags|=256),u1(Fe,c,f,a,t),Ca(Yn(m,f));break e}}a=m=Yn(m,f),De!==4&&(De=2),Br===null?Br=[a]:Br.push(a),a=c;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var v=o1(a,m,t);L0(a,v);break e;case 1:f=m;var g=a.type,y=a.stateNode;if((a.flags&128)===0&&(typeof g.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(tn===null||!tn.has(y)))){a.flags|=65536,t&=-t,a.lanes|=t;var R=a1(a,f,t);L0(a,R);break e}}a=a.return}while(a!==null)}D1(n)}catch(q){t=q,Oe===n&&n!==null&&(Oe=n=n.return);continue}break}while(!0)}function A1(){var e=Ji.current;return Ji.current=Wi,e===null?Wi:e}function ml(){(De===0||De===3||De===2)&&(De=4),He===null||(yn&268435455)===0&&(Zi&268435455)===0||on(He,qe)}function io(e,t){var n=he;he|=2;var r=A1();(He!==e||qe!==t)&&(Dt=null,kn(e,t));do try{Bd();break}catch(i){O1(e,i)}while(!0);if(Na(),he=n,Ji.current=r,Oe!==null)throw Error(s(261));return He=null,qe=0,De}function Bd(){for(;Oe!==null;)$1(Oe)}function Hd(){for(;Oe!==null&&!mc();)$1(Oe)}function $1(e){var t=H1(e.alternate,e,st);e.memoizedProps=e.pendingProps,t===null?D1(e):Oe=t,ol.current=null}function D1(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=Id(n,t,st),n!==null){Oe=n;return}}else{if(n=Fd(n,t),n!==null){n.flags&=32767,Oe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{De=6,Oe=null;return}}if(t=t.sibling,t!==null){Oe=t;return}Oe=t=e}while(t!==null);De===0&&(De=5)}function bn(e,t,n){var r=ke,i=gt.transition;try{gt.transition=null,ke=1,Ud(e,t,n,r)}finally{gt.transition=i,ke=r}return null}function Ud(e,t,n,r){do Zn();while(nn!==null);if((he&6)!==0)throw Error(s(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(s(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(jc(e,a),e===He&&(Oe=He=null,qe=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||eo||(eo=!0,U1(si,function(){return Zn(),null})),a=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||a){a=gt.transition,gt.transition=null;var c=ke;ke=1;var f=he;he|=4,ol.current=null,Ad(e,n),_1(n,e),cd(ma),hi=!!fa,ma=fa=null,e.current=n,$d(n),hc(),he=f,ke=c,gt.transition=a}else e.current=n;if(eo&&(eo=!1,nn=e,to=i),a=e.pendingLanes,a===0&&(tn=null),vc(n.stateNode),rt(e,Ie()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Xi)throw Xi=!1,e=sl,sl=null,e;return(to&1)!==0&&e.tag!==0&&Zn(),a=e.pendingLanes,(a&1)!==0?e===ul?Hr++:(Hr=0,ul=e):Hr=0,Jt(),null}function Zn(){if(nn!==null){var e=Es(to),t=gt.transition,n=ke;try{if(gt.transition=null,ke=16>e?16:e,nn===null)var r=!1;else{if(e=nn,nn=null,to=0,(he&6)!==0)throw Error(s(331));var i=he;for(he|=4,V=e.current;V!==null;){var a=V,c=a.child;if((V.flags&16)!==0){var f=a.deletions;if(f!==null){for(var m=0;m<f.length;m++){var k=f[m];for(V=k;V!==null;){var E=V;switch(E.tag){case 0:case 11:case 15:Dr(8,E,a)}var _=E.child;if(_!==null)_.return=E,V=_;else for(;V!==null;){E=V;var N=E.sibling,$=E.return;if(C1(E),E===k){V=null;break}if(N!==null){N.return=$,V=N;break}V=$}}}var H=a.alternate;if(H!==null){var W=H.child;if(W!==null){H.child=null;do{var Fe=W.sibling;W.sibling=null,W=Fe}while(W!==null)}}V=a}}if((a.subtreeFlags&2064)!==0&&c!==null)c.return=a,V=c;else e:for(;V!==null;){if(a=V,(a.flags&2048)!==0)switch(a.tag){case 0:case 11:case 15:Dr(9,a,a.return)}var v=a.sibling;if(v!==null){v.return=a.return,V=v;break e}V=a.return}}var g=e.current;for(V=g;V!==null;){c=V;var y=c.child;if((c.subtreeFlags&2064)!==0&&y!==null)y.return=c,V=y;else e:for(c=g;V!==null;){if(f=V,(f.flags&2048)!==0)try{switch(f.tag){case 0:case 11:case 15:Ki(9,f)}}catch(q){Te(f,f.return,q)}if(f===c){V=null;break e}var R=f.sibling;if(R!==null){R.return=f.return,V=R;break e}V=f.return}}if(he=i,Jt(),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(ui,e)}catch{}r=!0}return r}finally{ke=n,gt.transition=t}}return!1}function V1(e,t,n){t=Yn(n,t),t=o1(e,t,1),e=Xt(e,t,1),t=Ze(),e!==null&&(fr(e,1,t),rt(e,t))}function Te(e,t,n){if(e.tag===3)V1(e,e,n);else for(;t!==null;){if(t.tag===3){V1(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(tn===null||!tn.has(r))){e=Yn(n,e),e=a1(t,e,1),t=Xt(t,e,1),e=Ze(),t!==null&&(fr(t,1,e),rt(t,e));break}}t=t.return}}function Wd(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ze(),e.pingedLanes|=e.suspendedLanes&n,He===e&&(qe&n)===n&&(De===4||De===3&&(qe&130023424)===qe&&500>Ie()-ll?kn(e,0):al|=n),rt(e,t)}function B1(e,t){t===0&&((e.mode&1)===0?t=1:(t=di,di<<=1,(di&130023424)===0&&(di=4194304)));var n=Ze();e=Ot(e,t),e!==null&&(fr(e,t,n),rt(e,n))}function qd(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),B1(e,n)}function Qd(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(s(314))}r!==null&&r.delete(t),B1(e,n)}var H1;H1=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Xe.current)tt=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return tt=!1,Td(e,t,n);tt=(e.flags&131072)!==0}else tt=!1,_e&&(t.flags&1048576)!==0&&b0(t,Ri,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Yi(e,t),e=t.pendingProps;var i=Dn(t,Qe.current);qn(t,n),i=Aa(null,t,r,e,i,n);var a=$a();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,et(r)?(a=!0,_i(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Pa(t),i.updater=qi,t.stateNode=i,i._reactInternals=t,Wa(t,r,e,n),t=Ga(null,t,r,!0,a,n)):(t.tag=0,_e&&a&&ka(t),Je(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Yi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Gd(r),e=bt(r,e),i){case 0:t=Ya(null,t,r,e,n);break e;case 1:t=h1(null,t,r,e,n);break e;case 11:t=c1(null,t,r,e,n);break e;case 14:t=d1(null,t,r,bt(r.type,e),n);break e}throw Error(s(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:bt(r,i),Ya(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:bt(r,i),h1(e,t,r,i,n);case 3:e:{if(g1(t),e===null)throw Error(s(387));r=t.pendingProps,a=t.memoizedState,i=a.element,P0(e,t),$i(t,r,null,n);var c=t.memoizedState;if(r=c.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:c.cache,pendingSuspenseBoundaries:c.pendingSuspenseBoundaries,transitions:c.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=Yn(Error(s(423)),t),t=x1(e,t,r,n,i);break e}else if(r!==i){i=Yn(Error(s(424)),t),t=x1(e,t,r,n,i);break e}else for(lt=Yt(t.stateNode.containerInfo.firstChild),at=t,_e=!0,kt=null,n=M0(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Hn(),r===i){t=$t(e,t,n);break e}Je(e,t,r,n)}t=t.child}return t;case 5:return T0(t),e===null&&ja(t),r=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,c=i.children,ha(r,i)?c=null:a!==null&&ha(r,a)&&(t.flags|=32),m1(e,t),Je(e,t,c,n),t.child;case 6:return e===null&&ja(t),null;case 13:return v1(e,t,n);case 4:return La(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Un(t,null,r,n):Je(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:bt(r,i),c1(e,t,r,i,n);case 7:return Je(e,t,t.pendingProps,n),t.child;case 8:return Je(e,t,t.pendingProps.children,n),t.child;case 12:return Je(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,c=i.value,je(Fi,r._currentValue),r._currentValue=c,a!==null)if(wt(a.value,c)){if(a.children===i.children&&!Xe.current){t=$t(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var f=a.dependencies;if(f!==null){c=a.child;for(var m=f.firstContext;m!==null;){if(m.context===r){if(a.tag===1){m=At(-1,n&-n),m.tag=2;var k=a.updateQueue;if(k!==null){k=k.shared;var E=k.pending;E===null?m.next=m:(m.next=E.next,E.next=m),k.pending=m}}a.lanes|=n,m=a.alternate,m!==null&&(m.lanes|=n),Ma(a.return,n,t),f.lanes|=n;break}m=m.next}}else if(a.tag===10)c=a.type===t.type?null:a.child;else if(a.tag===18){if(c=a.return,c===null)throw Error(s(341));c.lanes|=n,f=c.alternate,f!==null&&(f.lanes|=n),Ma(c,n,t),c=a.sibling}else c=a.child;if(c!==null)c.return=a;else for(c=a;c!==null;){if(c===t){c=null;break}if(a=c.sibling,a!==null){a.return=c.return,c=a;break}c=c.return}a=c}Je(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,qn(t,n),i=mt(i),r=r(i),t.flags|=1,Je(e,t,r,n),t.child;case 14:return r=t.type,i=bt(r,t.pendingProps),i=bt(r.type,i),d1(e,t,r,i,n);case 15:return p1(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:bt(r,i),Yi(e,t),t.tag=1,et(r)?(e=!0,_i(t)):e=!1,qn(t,n),r1(t,r,i),Wa(t,r,i,n),Ga(null,t,r,!0,e,n);case 19:return w1(e,t,n);case 22:return f1(e,t,n)}throw Error(s(156,t.tag))};function U1(e,t){return Ss(e,t)}function Yd(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xt(e,t,n,r){return new Yd(e,t,n,r)}function hl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Gd(e){if(typeof e=="function")return hl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===T)return 11;if(e===we)return 14}return 2}function an(e,t){var n=e.alternate;return n===null?(n=xt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function oo(e,t,n,r,i,a){var c=2;if(r=e,typeof e=="function")hl(e)&&(c=1);else if(typeof e=="string")c=5;else e:switch(e){case Y:return Sn(n.children,i,a,t);case ee:c=8,i|=8;break;case Ce:return e=xt(12,n,t,i|2),e.elementType=Ce,e.lanes=a,e;case M:return e=xt(13,n,t,i),e.elementType=M,e.lanes=a,e;case ie:return e=xt(19,n,t,i),e.elementType=ie,e.lanes=a,e;case le:return ao(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Se:c=10;break e;case Re:c=9;break e;case T:c=11;break e;case we:c=14;break e;case be:c=16,r=null;break e}throw Error(s(130,e==null?e:typeof e,""))}return t=xt(c,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function Sn(e,t,n,r){return e=xt(7,e,r,t),e.lanes=n,e}function ao(e,t,n,r){return e=xt(22,e,r,t),e.elementType=le,e.lanes=n,e.stateNode={isHidden:!1},e}function gl(e,t,n){return e=xt(6,e,null,t),e.lanes=n,e}function xl(e,t,n){return t=xt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Kd(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Uo(0),this.expirationTimes=Uo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Uo(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function vl(e,t,n,r,i,a,c,f,m){return e=new Kd(e,t,n,f,m),t===1?(t=1,a===!0&&(t|=8)):t=0,a=xt(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Pa(a),e}function Jd(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:oe,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function W1(e){if(!e)return Kt;e=e._reactInternals;e:{if(dn(e)!==e||e.tag!==1)throw Error(s(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(et(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(s(171))}if(e.tag===1){var n=e.type;if(et(n))return y0(e,n,t)}return t}function q1(e,t,n,r,i,a,c,f,m){return e=vl(n,r,!0,e,i,a,c,f,m),e.context=W1(null),n=e.current,r=Ze(),i=rn(n),a=At(r,i),a.callback=t??null,Xt(n,a,i),e.current.lanes=i,fr(e,i,r),rt(e,r),e}function lo(e,t,n,r){var i=t.current,a=Ze(),c=rn(i);return n=W1(n),t.context===null?t.context=n:t.pendingContext=n,t=At(a,c),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Xt(i,t,c),e!==null&&(Ct(e,i,c,a),Ai(e,i,c)),c}function so(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Q1(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function yl(e,t){Q1(e,t),(e=e.alternate)&&Q1(e,t)}function Zd(){return null}var Y1=typeof reportError=="function"?reportError:function(e){console.error(e)};function wl(e){this._internalRoot=e}uo.prototype.render=wl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));lo(e,t,null,null)},uo.prototype.unmount=wl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;wn(function(){lo(null,e,null,null)}),t[Rt]=null}};function uo(e){this._internalRoot=e}uo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ps();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Wt.length&&t!==0&&t<Wt[n].priority;n++);Wt.splice(n,0,e),n===0&&Ts(e)}};function kl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function co(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function G1(){}function Xd(e,t,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var k=so(c);a.call(k)}}var c=q1(t,r,e,0,null,!1,!1,"",G1);return e._reactRootContainer=c,e[Rt]=c.current,Nr(e.nodeType===8?e.parentNode:e),wn(),c}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var f=r;r=function(){var k=so(m);f.call(k)}}var m=vl(e,0,!1,null,null,!1,!1,"",G1);return e._reactRootContainer=m,e[Rt]=m.current,Nr(e.nodeType===8?e.parentNode:e),wn(function(){lo(t,m,n,r)}),m}function po(e,t,n,r,i){var a=n._reactRootContainer;if(a){var c=a;if(typeof i=="function"){var f=i;i=function(){var m=so(c);f.call(m)}}lo(t,c,e,i)}else c=Xd(n,t,e,i,r);return so(c)}Ms=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=pr(t.pendingLanes);n!==0&&(Wo(t,n|1),rt(t,Ie()),(he&6)===0&&(Jn=Ie()+500,Jt()))}break;case 13:wn(function(){var r=Ot(e,1);if(r!==null){var i=Ze();Ct(r,e,1,i)}}),yl(e,1)}},qo=function(e){if(e.tag===13){var t=Ot(e,134217728);if(t!==null){var n=Ze();Ct(t,e,134217728,n)}yl(e,134217728)}},_s=function(e){if(e.tag===13){var t=rn(e),n=Ot(e,t);if(n!==null){var r=Ze();Ct(n,e,t,r)}yl(e,t)}},Ps=function(){return ke},Ls=function(e,t){var n=ke;try{return ke=e,t()}finally{ke=n}},Ao=function(e,t,n){switch(t){case"input":if(_o(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ei(r);if(!i)throw Error(s(90));ns(r),_o(r,i)}}}break;case"textarea":ls(e,n);break;case"select":t=n.value,t!=null&&En(e,!!n.multiple,t,!1)}},gs=pl,xs=wn;var e2={usingClientEntryPoint:!1,Events:[_r,An,Ei,ms,hs,pl]},Ur={findFiberByHostInstance:pn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},t2={bundleType:Ur.bundleType,version:Ur.version,rendererPackageName:Ur.rendererPackageName,rendererConfig:Ur.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:me.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ks(e),e===null?null:e.stateNode},findFiberByHostInstance:Ur.findFiberByHostInstance||Zd,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fo.isDisabled&&fo.supportsFiber)try{ui=fo.inject(t2),Et=fo}catch{}}return it.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=e2,it.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!kl(t))throw Error(s(200));return Jd(e,t,null,n)},it.createRoot=function(e,t){if(!kl(e))throw Error(s(299));var n=!1,r="",i=Y1;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=vl(e,1,!1,null,null,n,!1,r,i),e[Rt]=t.current,Nr(e.nodeType===8?e.parentNode:e),new wl(t)},it.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=ks(t),e=e===null?null:e.stateNode,e},it.flushSync=function(e){return wn(e)},it.hydrate=function(e,t,n){if(!co(t))throw Error(s(200));return po(null,e,t,!0,n)},it.hydrateRoot=function(e,t,n){if(!kl(e))throw Error(s(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",c=Y1;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(c=n.onRecoverableError)),t=q1(t,null,e,1,n??null,i,!1,a,c),e[Rt]=t.current,Nr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new uo(t)},it.render=function(e,t,n){if(!co(t))throw Error(s(200));return po(null,e,t,!1,n)},it.unmountComponentAtNode=function(e){if(!co(e))throw Error(s(40));return e._reactRootContainer?(wn(function(){po(null,null,e,!1,function(){e._reactRootContainer=null,e[Rt]=null})}),!0):!1},it.unstable_batchedUpdates=pl,it.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!co(n))throw Error(s(200));if(e==null||e._reactInternals===void 0)throw Error(s(38));return po(e,t,n,!1,r)},it.version="18.3.1-next-f1338f8080-20240426",it}var ru;function u2(){if(ru)return jl.exports;ru=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(u){console.error(u)}}return o(),jl.exports=s2(),jl.exports}var iu;function c2(){if(iu)return mo;iu=1;var o=u2();return mo.createRoot=o.createRoot,mo.hydrateRoot=o.hydrateRoot,mo}var d2=c2();const p2=ju(d2);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f2=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Cu=(...o)=>o.filter((u,s,d)=>!!u&&u.trim()!==""&&d.indexOf(u)===s).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var m2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h2=A.forwardRef(({color:o="currentColor",size:u=24,strokeWidth:s=2,absoluteStrokeWidth:d,className:p="",children:h,iconNode:j,...C},b)=>A.createElement("svg",{ref:b,...m2,width:u,height:u,stroke:o,strokeWidth:d?Number(s)*24/Number(u):s,className:Cu("lucide",p),...C},[...j.map(([L,w])=>A.createElement(L,w)),...Array.isArray(h)?h:[h]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dt=(o,u)=>{const s=A.forwardRef(({className:d,...p},h)=>A.createElement(h2,{ref:h,iconNode:u,className:Cu(`lucide-${f2(o)}`,d),...p}));return s.displayName=`${o}`,s};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g2=dt("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kr=dt("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const So=dt("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zu=dt("CalendarDays",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x2=dt("CarFront",[["path",{d:"m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8",key:"1imjwt"}],["path",{d:"M7 14h.01",key:"1qa3f1"}],["path",{d:"M17 14h.01",key:"7oqj8z"}],["rect",{width:"18",height:"8",x:"3",y:"10",rx:"2",key:"a7itu8"}],["path",{d:"M5 18v2",key:"ppbyun"}],["path",{d:"M19 18v2",key:"gy7782"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v2=dt("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y2=dt("Clock3",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16.5 12",key:"1aq6pp"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w2=dt("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k2=dt("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ql=dt("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b2=dt("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S2=dt("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nl=dt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);var Me="-ms-",Jr="-moz-",ve="-webkit-",Nu="comm",jo="rule",Ql="decl",j2="@import",C2="@namespace",Eu="@keyframes",z2="@layer",Mu=Math.abs,Yl=String.fromCharCode,Fl=Object.assign;function N2(o,u){return Ve(o,0)^45?(((u<<2^Ve(o,0))<<2^Ve(o,1))<<2^Ve(o,2))<<2^Ve(o,3):0}function _u(o){return o.trim()}function Vt(o,u){return(o=u.exec(o))?o[0]:o}function ae(o,u,s){return o.replace(u,s)}function go(o,u,s){return o.indexOf(u,s)}function Ve(o,u){return o.charCodeAt(u)|0}function Nn(o,u,s){return o.slice(u,s)}function zt(o){return o.length}function Pu(o){return o.length}function Yr(o,u){return u.push(o),o}function E2(o,u){return o.map(u).join("")}function ou(o,u){return o.filter(function(s){return!Vt(s,u)})}var Co=1,tr=1,Lu=0,vt=0,Ae=0,ir="";function zo(o,u,s,d,p,h,j,C){return{value:o,root:u,parent:s,type:d,props:p,children:h,line:Co,column:tr,length:j,return:"",siblings:C}}function sn(o,u){return Fl(zo("",null,null,"",null,null,0,o.siblings),o,{length:-o.length},u)}function Xn(o){for(;o.root;)o=sn(o.root,{children:[o]});Yr(o,o.siblings)}function M2(){return Ae}function _2(){return Ae=vt>0?Ve(ir,--vt):0,tr--,Ae===10&&(tr=1,Co--),Ae}function Nt(){return Ae=vt<Lu?Ve(ir,vt++):0,tr++,Ae===10&&(tr=1,Co++),Ae}function un(){return Ve(ir,vt)}function xo(){return vt}function No(o,u){return Nn(ir,o,u)}function Xr(o){switch(o){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function P2(o){return Co=tr=1,Lu=zt(ir=o),vt=0,[]}function L2(o){return ir="",o}function El(o){return _u(No(vt-1,Ol(o===91?o+2:o===40?o+1:o)))}function R2(o){for(;(Ae=un())&&Ae<33;)Nt();return Xr(o)>2||Xr(Ae)>3?"":" "}function T2(o,u){for(;--u&&Nt()&&!(Ae<48||Ae>102||Ae>57&&Ae<65||Ae>70&&Ae<97););return No(o,xo()+(u<6&&un()==32&&Nt()==32))}function Ol(o){for(;Nt();)switch(Ae){case o:return vt;case 34:case 39:o!==34&&o!==39&&Ol(Ae);break;case 40:o===41&&Ol(o);break;case 92:Nt();break}return vt}function I2(o,u){for(;Nt()&&o+Ae!==57;)if(o+Ae===84&&un()===47)break;return"/*"+No(u,vt-1)+"*"+Yl(o===47?o:Nt())}function F2(o){for(;!Xr(un());)Nt();return No(o,vt)}function O2(o){return L2(vo("",null,null,null,[""],o=P2(o),0,[0],o))}function vo(o,u,s,d,p,h,j,C,b){for(var L=0,w=0,P=j,F=0,I=0,B=0,U=1,J=1,de=1,Q=0,xe="",me=p,pe=h,oe=d,Y=xe;J;)switch(B=Q,Q=Nt()){case 40:if(B!=108&&Ve(Y,P-1)==58){go(Y+=ae(El(Q),"&","&\f"),"&\f",Mu(L?C[L-1]:0))!=-1&&(de=-1);break}case 34:case 39:case 91:Y+=El(Q);break;case 9:case 10:case 13:case 32:Y+=R2(B);break;case 92:Y+=T2(xo()-1,7);continue;case 47:switch(un()){case 42:case 47:Yr(A2(I2(Nt(),xo()),u,s,b),b),(Xr(B||1)==5||Xr(un()||1)==5)&&zt(Y)&&Nn(Y,-1,void 0)!==" "&&(Y+=" ");break;default:Y+="/"}break;case 123*U:C[L++]=zt(Y)*de;case 125*U:case 59:case 0:switch(Q){case 0:case 125:J=0;case 59+w:de==-1&&(Y=ae(Y,/\f/g,"")),I>0&&(zt(Y)-P||U===0&&B===47)&&Yr(I>32?lu(Y+";",d,s,P-1,b):lu(ae(Y," ","")+";",d,s,P-2,b),b);break;case 59:Y+=";";default:if(Yr(oe=au(Y,u,s,L,w,p,C,xe,me=[],pe=[],P,h),h),Q===123)if(w===0)vo(Y,u,oe,oe,me,h,P,C,pe);else{switch(F){case 99:if(Ve(Y,3)===110)break;case 108:if(Ve(Y,2)===97)break;default:w=0;case 100:case 109:case 115:}w?vo(o,oe,oe,d&&Yr(au(o,oe,oe,0,0,p,C,xe,p,me=[],P,pe),pe),p,pe,P,C,d?me:pe):vo(Y,oe,oe,oe,[""],pe,0,C,pe)}}L=w=I=0,U=de=1,xe=Y="",P=j;break;case 58:P=1+zt(Y),I=B;default:if(U<1){if(Q==123)--U;else if(Q==125&&U++==0&&_2()==125)continue}switch(Y+=Yl(Q),Q*U){case 38:de=w>0?1:(Y+="\f",-1);break;case 44:C[L++]=(zt(Y)-1)*de,de=1;break;case 64:un()===45&&(Y+=El(Nt())),F=un(),w=P=zt(xe=Y+=F2(xo())),Q++;break;case 45:B===45&&zt(Y)==2&&(U=0)}}return h}function au(o,u,s,d,p,h,j,C,b,L,w,P){for(var F=p-1,I=p===0?h:[""],B=Pu(I),U=0,J=0,de=0;U<d;++U)for(var Q=0,xe=Nn(o,F+1,F=Mu(J=j[U])),me=o;Q<B;++Q)(me=_u(J>0?I[Q]+" "+xe:ae(xe,/&\f/g,I[Q])))&&(b[de++]=me);return zo(o,u,s,p===0?jo:C,b,L,w,P)}function A2(o,u,s,d){return zo(o,u,s,Nu,Yl(M2()),Nn(o,2,-2),0,d)}function lu(o,u,s,d,p){return zo(o,u,s,Ql,Nn(o,0,d),Nn(o,d+1,-1),d,p)}function Ru(o,u,s){switch(N2(o,u)){case 5103:return ve+"print-"+o+o;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return ve+o+o;case 4855:return ve+o.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+o;case 4789:return Jr+o+o;case 5349:case 4246:case 4810:case 6968:case 2756:return ve+o+Jr+o+Me+o+o;case 5936:switch(Ve(o,u+11)){case 114:return ve+o+Me+ae(o,/[svh]\w+-[tblr]{2}/,"tb")+o;case 108:return ve+o+Me+ae(o,/[svh]\w+-[tblr]{2}/,"tb-rl")+o;case 45:return ve+o+Me+ae(o,/[svh]\w+-[tblr]{2}/,"lr")+o}case 6828:case 4268:case 2903:return ve+o+Me+o+o;case 6165:return ve+o+Me+"flex-"+o+o;case 5187:return ve+o+ae(o,/(\w+).+(:[^]+)/,ve+"box-$1$2"+Me+"flex-$1$2")+o;case 5443:return ve+o+Me+"flex-item-"+ae(o,/flex-|-self/g,"")+(Vt(o,/flex-|baseline/)?"":Me+"grid-row-"+ae(o,/flex-|-self/g,""))+o;case 4675:return ve+o+Me+"flex-line-pack"+ae(o,/align-content|flex-|-self/g,"")+o;case 5548:return ve+o+Me+ae(o,"shrink","negative")+o;case 5292:return ve+o+Me+ae(o,"basis","preferred-size")+o;case 6060:return ve+"box-"+ae(o,"-grow","")+ve+o+Me+ae(o,"grow","positive")+o;case 4554:return ve+ae(o,/([^-])(transform)/g,"$1"+ve+"$2")+o;case 6187:return ae(ae(ae(o,/(zoom-|grab)/,ve+"$1"),/(image-set)/,ve+"$1"),o,"")+o;case 5495:case 3959:return ae(o,/(image-set\([^]*)/,ve+"$1$`$1");case 4968:return ae(ae(o,/(.+:)(flex-)?(.*)/,ve+"box-pack:$3"+Me+"flex-pack:$3"),/space-between/,"justify")+ve+o+o;case 4200:if(!Vt(o,/flex-|baseline/))return Me+"grid-column-align"+Nn(o,u)+o;break;case 2592:case 3360:return Me+ae(o,"template-","")+o;case 4384:case 3616:return s&&s.some(function(d,p){return u=p,Vt(d.props,/grid-\w+-end/)})?~go(o+(s=s[u].value),"span",0)?o:Me+ae(o,"-start","")+o+Me+"grid-row-span:"+(~go(s,"span",0)?Vt(s,/\d+/):+Vt(s,/\d+/)-+Vt(o,/\d+/))+";":Me+ae(o,"-start","")+o;case 4896:case 4128:return s&&s.some(function(d){return Vt(d.props,/grid-\w+-start/)})?o:Me+ae(ae(o,"-end","-span"),"span ","")+o;case 4095:case 3583:case 4068:case 2532:return ae(o,/(.+)-inline(.+)/,ve+"$1$2")+o;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(zt(o)-1-u>6)switch(Ve(o,u+1)){case 109:if(Ve(o,u+4)!==45)break;case 102:return ae(o,/(.+:)(.+)-([^]+)/,"$1"+ve+"$2-$3$1"+Jr+(Ve(o,u+3)==108?"$3":"$2-$3"))+o;case 115:return~go(o,"stretch",0)?Ru(ae(o,"stretch","fill-available"),u,s)+o:o}break;case 5152:case 5920:return ae(o,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(d,p,h,j,C,b,L){return Me+p+":"+h+L+(j?Me+p+"-span:"+(C?b:+b-+h)+L:"")+o});case 4949:if(Ve(o,u+6)===121)return ae(o,":",":"+ve)+o;break;case 6444:switch(Ve(o,Ve(o,14)===45?18:11)){case 120:return ae(o,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ve+(Ve(o,14)===45?"inline-":"")+"box$3$1"+ve+"$2$3$1"+Me+"$2box$3")+o;case 100:return ae(o,":",":"+Me)+o}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ae(o,"scroll-","scroll-snap-")+o}return o}function ko(o,u){for(var s="",d=0;d<o.length;d++)s+=u(o[d],d,o,u)||"";return s}function $2(o,u,s,d){switch(o.type){case z2:if(o.children.length)break;case j2:case C2:case Ql:return o.return=o.return||o.value;case Nu:return"";case Eu:return o.return=o.value+"{"+ko(o.children,d)+"}";case jo:if(!zt(o.value=o.props.join(",")))return""}return zt(s=ko(o.children,d))?o.return=o.value+"{"+s+"}":""}function D2(o){var u=Pu(o);return function(s,d,p,h){for(var j="",C=0;C<u;C++)j+=o[C](s,d,p,h)||"";return j}}function V2(o){return function(u){u.root||(u=u.return)&&o(u)}}function B2(o,u,s,d){if(o.length>-1&&!o.return)switch(o.type){case Ql:o.return=Ru(o.value,o.length,s);return;case Eu:return ko([sn(o,{value:ae(o.value,"@","@"+ve)})],d);case jo:if(o.length)return E2(s=o.props,function(p){switch(Vt(p,d=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Xn(sn(o,{props:[ae(p,/:(read-\w+)/,":"+Jr+"$1")]})),Xn(sn(o,{props:[p]})),Fl(o,{props:ou(s,d)});break;case"::placeholder":Xn(sn(o,{props:[ae(p,/:(plac\w+)/,":"+ve+"input-$1")]})),Xn(sn(o,{props:[ae(p,/:(plac\w+)/,":"+Jr+"$1")]})),Xn(sn(o,{props:[ae(p,/:(plac\w+)/,Me+"input-$1")]})),Xn(sn(o,{props:[p]})),Fl(o,{props:ou(s,d)});break}return""})}}var er={};function or(o,...u){return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${o} for more information.${u.length>0?` Args: ${u.join(", ")}`:""}`)}var Ml,_l;const nr=typeof process<"u"&&er!==void 0&&(er.REACT_APP_SC_ATTR||er.SC_ATTR)||"data-styled",Tu="active",Iu="data-styled-version",Eo="6.6.0",Gl=`/*!sc*/
`,Zr=typeof window<"u"&&typeof document<"u";if(!ut.createContext)throw or(19);function su(o){if(typeof process<"u"&&er!==void 0){const u=er[o];if(u!==void 0&&u!=="")return u!=="false"}}const H2=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:(_l=(Ml=su("REACT_APP_SC_DISABLE_SPEEDY"))!==null&&Ml!==void 0?Ml:su("SC_DISABLE_SPEEDY"))!==null&&_l!==void 0?_l:typeof process<"u"&&er!==void 0&&!1),U2="sc-keyframes-",W2={};let yo=new Map,bo=new Map,wo=1;const ho=o=>{if(yo.has(o))return yo.get(o);for(;bo.has(wo);)wo++;const u=wo++;return yo.set(o,u),bo.set(u,o),u},q2=o=>bo.get(o),Q2=(o,u)=>{wo=u+1,yo.set(o,u),bo.set(u,o)},Kl=Object.freeze([]),rr=Object.freeze({});function Fu(o,u,s=rr){return o.theme!==s.theme&&o.theme||u||s.theme}const Y2=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,G2=/(^-|-$)/g;function Ou(o){return o.replace(Y2,"-").replace(G2,"")}const K2=/(a)(d)/gi,uu=o=>String.fromCharCode(o+(o>25?39:97));function Au(o){let u,s="";for(u=Math.abs(o);u>52;u=u/52|0)s=uu(u%52)+s;return(uu(u%52)+s).replace(K2,"$1-$2")}const Al=5381,zn=(o,u)=>{let s=u.length;for(;s;)o=33*o^u.charCodeAt(--s);return o},$u=o=>zn(Al,o);function Du(o){return Au($u(o)>>>0)}function J2(o){return o.displayName||o.name||"Component"}function $l(o){return typeof o=="string"&&!0}function Z2(o){return $l(o)?`styled.${o}`:`Styled(${J2(o)})`}const Vu=Symbol.for("react.memo"),X2=Symbol.for("react.forward_ref"),ep={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},tp={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Bu={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},np={[X2]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[Vu]:Bu};function cu(o){return("type"in(u=o)&&u.type.$$typeof)===Vu?Bu:"$$typeof"in o?np[o.$$typeof]:ep;var u}const rp=Object.defineProperty,ip=Object.getOwnPropertyNames,op=Object.getOwnPropertySymbols,ap=Object.getOwnPropertyDescriptor,lp=Object.getPrototypeOf,sp=Object.prototype;function Hu(o,u,s){if(typeof u!="string"){const d=lp(u);d&&d!==sp&&Hu(o,d,s);const p=ip(u).concat(op(u)),h=cu(o),j=cu(u);for(let C=0;C<p.length;++C){const b=p[C];if(!(b in tp||s&&s[b]||j&&b in j||h&&b in h)){const L=ap(u,b);try{rp(o,b,L)}catch{}}}}return o}function ti(o){return typeof o=="function"}const up=Symbol.for("react.forward_ref");function Jl(o){return o!=null&&(typeof o=="object"||typeof o=="function")&&o.$$typeof===up&&"styledComponentId"in o}function Gr(o,u){return o&&u?o+" "+u:o||u||""}function Dl(o,u){return o.join("")}function ei(o){return o!==null&&typeof o=="object"&&o.constructor.name===Object.name&&!("props"in o&&o.$$typeof)}function Vl(o,u,s=!1){if(!s&&!ei(o)&&!Array.isArray(o))return u;if(Array.isArray(u))for(let d=0;d<u.length;d++)o[d]=Vl(o[d],u[d]);else if(ei(u))for(const d in u)o[d]=Vl(o[d],u[d]);return o}function Uu(o,u){Object.defineProperty(o,"toString",{value:u})}const cp=class{constructor(o){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=o,this._cGroup=0,this._cIndex=0}indexOfGroup(o){if(o===this._cGroup)return this._cIndex;let u=this._cIndex;if(o>this._cGroup)for(let s=this._cGroup;s<o;s++)u+=this.groupSizes[s];else for(let s=this._cGroup-1;s>=o;s--)u-=this.groupSizes[s];return this._cGroup=o,this._cIndex=u,u}insertRules(o,u){if(o>=this.groupSizes.length){const p=this.groupSizes,h=p.length;let j=h;for(;o>=j;)if(j<<=1,j<0)throw or(16,`${o}`);this.groupSizes=new Uint32Array(j),this.groupSizes.set(p),this.length=j;for(let C=h;C<j;C++)this.groupSizes[C]=0}let s=this.indexOfGroup(o+1),d=0;for(let p=0,h=u.length;p<h;p++)this.tag.insertRule(s,u[p])&&(this.groupSizes[o]++,s++,d++);d>0&&this._cGroup>o&&(this._cIndex+=d)}clearGroup(o){if(o<this.length){const u=this.groupSizes[o],s=this.indexOfGroup(o),d=s+u;this.groupSizes[o]=0;for(let p=s;p<d;p++)this.tag.deleteRule(s);u>0&&this._cGroup>o&&(this._cIndex-=u)}}getGroup(o){let u="";if(o>=this.length||this.groupSizes[o]===0)return u;const s=this.groupSizes[o],d=this.indexOfGroup(o),p=d+s;for(let h=d;h<p;h++)u+=this.tag.getRule(h)+Gl;return u}},dp=`style[${nr}][${Iu}="${Eo}"]`,pp=new RegExp(`^${nr}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),du=o=>typeof ShadowRoot<"u"&&o instanceof ShadowRoot||"host"in o&&o.nodeType===11,Bl=o=>{if(!o)return document;if(du(o))return o;if("getRootNode"in o){const u=o.getRootNode();if(du(u))return u}return document},fp=(o,u,s)=>{const d=s.split(",");let p;for(let h=0,j=d.length;h<j;h++)(p=d[h])&&o.registerName(u,p)},mp=(o,u)=>{var s;const d=((s=u.textContent)!==null&&s!==void 0?s:"").split(Gl),p=[];for(let h=0,j=d.length;h<j;h++){const C=d[h].trim();if(!C)continue;const b=C.match(pp);if(b){const L=0|parseInt(b[1],10),w=b[2];L!==0&&(Q2(w,L),fp(o,w,b[3]),o.getTag().insertRules(L,p)),p.length=0}else p.push(C)}},Pl=o=>{const s=Bl(o.options.target).querySelectorAll(dp);for(let d=0,p=s.length;d<p;d++){const h=s[d];h&&h.getAttribute(nr)!==Tu&&(mp(o,h),h.parentNode&&h.parentNode.removeChild(h))}};let qr=!1;function hp(){if(qr!==!1)return qr;if(typeof document<"u"){const o=document.head.querySelector('meta[property="csp-nonce"]');if(o)return qr=o.nonce||o.getAttribute("content")||void 0;const u=document.head.querySelector('meta[name="sc-nonce"]');if(u)return qr=u.getAttribute("content")||void 0}return qr=typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0}const Wu=(o,u)=>{if(typeof document>"u")throw or(20);const s=document.head,d=o||s,p=document.createElement("style"),h=(b=>{const L=Array.from(b.querySelectorAll(`style[${nr}]`));return L[L.length-1]})(d),j=h!==void 0?h.nextSibling:null;p.setAttribute(nr,Tu),p.setAttribute(Iu,Eo);const C=u||hp();return C&&p.setAttribute("nonce",C),d.insertBefore(p,j),p},gp=class{constructor(o,u){this.element=Wu(o,u),this.element.appendChild(document.createTextNode("")),this.sheet=(s=>{var d;if(s.sheet)return s.sheet;const p=(d=s.getRootNode().styleSheets)!==null&&d!==void 0?d:document.styleSheets;for(let h=0,j=p.length;h<j;h++){const C=p[h];if(C.ownerNode===s)return C}throw or(17)})(this.element),this.length=0}insertRule(o,u){try{return this.sheet.insertRule(u,o),this.length++,!0}catch{return!1}}deleteRule(o){this.sheet.deleteRule(o),this.length--}getRule(o){const u=this.sheet.cssRules[o];return u&&u.cssText?u.cssText:""}},xp=class{constructor(o,u){this.element=Wu(o,u),this.nodes=this.element.childNodes,this.length=0}insertRule(o,u){if(o<=this.length&&o>=0){const s=document.createTextNode(u);return this.element.insertBefore(s,this.nodes[o]||null),this.length++,!0}return!1}deleteRule(o){this.element.removeChild(this.nodes[o]),this.length--}getRule(o){return o<this.length?this.nodes[o].textContent:""}};let pu=Zr;const vp={isServer:!Zr,useCSSOMInjection:!H2};class ni{static registerId(u){return ho(u)}constructor(u=rr,s={},d){this.options=Object.assign(Object.assign({},vp),u),this.gs=s,this.keyframeIds=new Set,this.names=new Map(d),this.server=!!u.isServer,!this.server&&Zr&&pu&&(pu=!1,Pl(this)),Uu(this,()=>(p=>{const h=p.getTag(),{length:j}=h;let C="";for(let b=0;b<j;b++){const L=q2(b);if(L===void 0)continue;const w=p.names.get(L);if(w===void 0||!w.size)continue;const P=h.getGroup(b);if(P.length===0)continue;const F=nr+".g"+b+'[id="'+L+'"]';let I="";for(const B of w)B.length>0&&(I+=B+",");C+=P+F+'{content:"'+I+'"}'+Gl}return C})(this))}rehydrate(){!this.server&&Zr&&Pl(this)}reconstructWithOptions(u,s=!0){const d=new ni(Object.assign(Object.assign({},this.options),u),this.gs,s&&this.names||void 0);return d.keyframeIds=new Set(this.keyframeIds),!this.server&&Zr&&u.target!==this.options.target&&Bl(this.options.target)!==Bl(u.target)&&Pl(d),d}allocateGSInstance(u){return this.gs[u]=(this.gs[u]||0)+1}getTag(){return this.tag||(this.tag=(u=(({useCSSOMInjection:s,target:d,nonce:p})=>s?new gp(d,p):new xp(d,p))(this.options),new cp(u)));var u}hasNameForId(u,s){var d,p;return(p=(d=this.names.get(u))===null||d===void 0?void 0:d.has(s))!==null&&p!==void 0&&p}registerName(u,s){ho(u),u.startsWith(U2)&&this.keyframeIds.add(u);const d=this.names.get(u);d?d.add(s):this.names.set(u,new Set([s]))}insertRules(u,s,d){this.registerName(u,s),this.getTag().insertRules(ho(u),d)}clearNames(u){this.names.has(u)&&this.names.get(u).clear()}clearRules(u){this.getTag().clearGroup(ho(u)),this.clearNames(u)}clearTag(){this.tag=void 0}}const qu=new WeakSet,yp={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function wp(o,u){return u==null||typeof u=="boolean"||u===""?"":typeof u!="number"||u===0||o in yp||o.startsWith("--")?String(u).trim():u+"px"}const Cn=47;function fu(o){if(o.charCodeAt(0)===45&&o.charCodeAt(1)===45)return o;let u="";for(let s=0;s<o.length;s++){const d=o.charCodeAt(s);u+=d>=65&&d<=90?"-"+String.fromCharCode(d+32):o[s]}return u.startsWith("ms-")?"-"+u:u}const kp=Symbol.for("sc-keyframes");function bp(o){return typeof o=="object"&&o!==null&&kp in o}function Qu(o){return ti(o)&&!(o.prototype&&o.prototype.isReactComponent)}const Yu=o=>o==null||o===!1||o==="",Sp=Symbol.for("react.client.reference");function mu(o){return o.$$typeof===Sp}function Gu(o,u){for(const s in o){const d=o[s];o.hasOwnProperty(s)&&!Yu(d)&&(Array.isArray(d)&&qu.has(d)||ti(d)?u.push(fu(s)+":",d,";"):ei(d)?(u.push(s+" {"),Gu(d,u),u.push("}")):u.push(fu(s)+": "+wp(s,d)+";"))}}function cn(o,u,s,d,p=[]){if(Yu(o))return p;const h=typeof o;if(h==="string")return p.push(o),p;if(h==="function"){if(mu(o))return p;if(Qu(o)&&u){const j=o(u);return cn(j,u,s,d,p)}return p.push(o),p}if(Array.isArray(o)){for(let j=0;j<o.length;j++)cn(o[j],u,s,d,p);return p}return Jl(o)?(p.push(`.${o.styledComponentId}`),p):bp(o)?(s?(o.inject(s,d),p.push(o.getName(d))):p.push(o),p):mu(o)?p:ei(o)?o.toString!==Object.prototype.toString?(p.push(o.toString()),p):(Gu(o,p),p):(p.push(o.toString()),p)}const jp=$u(Eo);class Cp{constructor(u,s,d){this.rules=u,this.componentId=s,this.baseHash=zn(jp,s),this.baseStyle=d,ni.registerId(s)}generateAndInjectStyles(u,s,d){let p=this.baseStyle?this.baseStyle.generateAndInjectStyles(u,s,d):"";{let h="";for(let j=0;j<this.rules.length;j++){const C=this.rules[j];if(typeof C=="string")h+=C;else if(C)if(Qu(C)){const b=C(u);typeof b=="string"?h+=b:b!=null&&b!==!1&&(h+=Dl(cn(b,u,s,d)))}else h+=Dl(cn(C,u,s,d))}if(h){this.dynamicNameCache||(this.dynamicNameCache=new Map);const j=d.hash?d.hash+h:h;let C=this.dynamicNameCache.get(j);if(!C){if(C=Au(zn(zn(this.baseHash,d.hash),h)>>>0),this.dynamicNameCache.size>=200){const b=this.dynamicNameCache.keys().next().value;b!==void 0&&this.dynamicNameCache.delete(b)}this.dynamicNameCache.set(j,C)}if(!s.hasNameForId(this.componentId,C)){const b=d(h,"."+C,void 0,this.componentId);s.insertRules(this.componentId,C,b)}p=Gr(p,C)}}return p}}const zp=/&/g;function Ku(o,u){let s=0;for(;--u>=0&&o.charCodeAt(u)===92;)s++;return!(1&~s)}function Ll(o){const u=o.length;let s="",d=0,p=0,h=0,j=!1,C=!1;for(let b=0;b<u;b++){const L=o.charCodeAt(b);if(h!==0||j||L!==Cn||o.charCodeAt(b+1)!==42)if(j)L===42&&o.charCodeAt(b+1)===Cn&&(j=!1,b++);else if(L!==34&&L!==39||Ku(o,b)){if(h===0)if(L===123)p++;else if(L===125){if(p--,p<0){C=!0;let w=b+1;for(;w<u;){const P=o.charCodeAt(w);if(P===59||P===10)break;w++}w<u&&o.charCodeAt(w)===59&&w++,p=0,b=w-1,d=w;continue}p===0&&(s+=o.substring(d,b+1),d=b+1)}else L===59&&p===0&&(s+=o.substring(d,b+1),d=b+1)}else h===0?h=L:h===L&&(h=0);else j=!0,b++}return C||p!==0||h!==0?(d<u&&p===0&&h===0&&(s+=o.substring(d)),s):o}function Ju(o,u){const s=u+" ",d=","+s;for(let p=0;p<o.length;p++){const h=o[p];if(h.type==="rule"){h.value=(s+h.value).replaceAll(",",d);const j=h.props,C=[];for(let b=0;b<j.length;b++)C[b]=s+j[b];h.props=C}Array.isArray(h.children)&&h.type!=="@keyframes"&&Ju(h.children,u)}return o}function Np({options:o=rr,plugins:u=Kl}=rr){let s,d,p;const h=(F,I,B)=>B.startsWith(d)&&B.endsWith(d)&&B.replaceAll(d,"").length>0?`.${s}`:F,j=u.slice();j.push(F=>{F.type===jo&&F.value.includes("&")&&(p||(p=new RegExp(`\\${d}\\b`,"g")),F.props[0]=F.props[0].replace(zp,d).replace(p,h))}),o.prefix&&j.push(B2),j.push($2);let C=[];const b=D2(j.concat(V2(F=>C.push(F)))),L=(F,I="",B="",U="&")=>{s=U,d=I,p=void 0;const J=(function(Q){const xe=Q.indexOf("//")!==-1,me=Q.indexOf("}")!==-1;if(!xe&&!me)return Q;if(!xe)return Ll(Q);const pe=Q.length;let oe="",Y=0,ee=0,Ce=0,Se=0,Re=0,T=!1;for(;ee<pe;){const M=Q.charCodeAt(ee);if(M!==34&&M!==39||Ku(Q,ee))if(Ce===0)if(M===Cn&&ee+1<pe&&Q.charCodeAt(ee+1)===42){for(ee+=2;ee+1<pe&&(Q.charCodeAt(ee)!==42||Q.charCodeAt(ee+1)!==Cn);)ee++;ee+=2}else if(M!==40)if(M!==41)if(Se>0)ee++;else if(M===42&&ee+1<pe&&Q.charCodeAt(ee+1)===Cn)oe+=Q.substring(Y,ee),ee+=2,Y=ee,T=!0;else if(M===Cn&&ee+1<pe&&Q.charCodeAt(ee+1)===Cn){for(oe+=Q.substring(Y,ee);ee<pe&&Q.charCodeAt(ee)!==10;)ee++;Y=ee,T=!0}else M===123?Re++:M===125&&Re--,ee++;else Se>0&&Se--,ee++;else Se++,ee++;else ee++;else Ce===0?Ce=M:Ce===M&&(Ce=0),ee++}return T?(Y<pe&&(oe+=Q.substring(Y)),Re===0?oe:Ll(oe)):Re===0?Q:Ll(Q)})(F);let de=O2(B||I?B+" "+I+" { "+J+" }":J);return o.namespace&&(de=Ju(de,o.namespace)),C=[],ko(de,b),C},w=o;let P=Al;for(let F=0;F<u.length;F++)u[F].name||or(15),P=zn(P,u[F].name);return w!=null&&w.namespace&&(P=zn(P,w.namespace)),w!=null&&w.prefix&&(P=zn(P,"p")),L.hash=P!==Al?P.toString():"",L}const Ep=new ni,Mp=Np(),Zu=ut.createContext({shouldForwardProp:void 0,styleSheet:Ep,stylis:Mp,stylisPlugins:void 0});Zu.Consumer;function Xu(){return ut.useContext(Zu)}const Zl=ut.createContext(void 0);Zl.Consumer;const Rl={};function _p(o,u){const s=typeof o!="string"?"sc":Ou(o);Rl[s]=(Rl[s]||0)+1;const d=s+"-"+Du(Eo+s+Rl[s]);return u?u+"-"+d:d}function Pp(o,u,s){const d=Jl(o),p=o,h=!$l(o),{attrs:j=Kl,componentId:C=_p(u.displayName,u.parentComponentId),displayName:b=Z2(o)}=u,L=u.displayName&&u.componentId?Ou(u.displayName)+"-"+u.componentId:u.componentId||C,w=d&&p.attrs?p.attrs.concat(j).filter(Boolean):j;let{shouldForwardProp:P}=u;if(d&&p.shouldForwardProp){const U=p.shouldForwardProp;if(u.shouldForwardProp){const J=u.shouldForwardProp;P=(de,Q)=>U(de,Q)&&J(de,Q)}else P=U}const F=new Cp(s,L,d?p.componentStyle:void 0);function I(U,J){return(function(de,Q,xe){const{attrs:me,componentStyle:pe,defaultProps:oe,foldedComponentIds:Y,styledComponentId:ee,target:Ce}=de,Se=ut.useContext(Zl),Re=Xu(),T=de.shouldForwardProp||Re.shouldForwardProp,M=Fu(Q,Se,oe)||rr,[ie,we]=(function(x,z,re){const G=Object.assign(Object.assign({},z),{className:void 0,theme:re});let se=null;const ce=x.length>1;for(let fe=0;fe<x.length;fe++){const ne=x[fe],ye=ti(ne)?ne(ce?Object.assign({},G):G):ne;for(const ze in ye)ze==="className"?G.className=Gr(G.className,ye[ze]):ze==="style"?G.style=Object.assign(Object.assign({},G.style),ye[ze]):ye[ze]===void 0?ze in G&&(G[ze]!==void 0&&(se||(se=[])).push(ze),G[ze]=void 0):G[ze]=ye[ze]}return"className"in z&&typeof z.className=="string"&&(G.className=Gr(G.className,z.className)),[G,se]})(me,Q,M),be=pe.generateAndInjectStyles(ie,Re.styleSheet,Re.stylis),le=ie.as||Ce,O=$l(le),K=(function(x,z,re,G,se,ce){const fe={};for(const ne in x)ne[0]==="$"||ne==="as"||ne==="theme"&&x.theme===re||(ne==="forwardedAs"?x.forwardedAs!==void 0&&(fe.as=x.forwardedAs):x[ne]===void 0?ne==="className"||se||ce!==null&&ce.indexOf(ne)!==-1||G&&!G(ne,z)||(fe[ne]=void 0):G&&!G(ne,z)||(fe[ne]=x[ne]));return fe})(ie,le,M,T,O,we);let D=Gr(Y,ee);return be&&(D+=" "+be),ie.className&&(D+=" "+ie.className),K[O&&le.includes("-")?"class":"className"]=D,xe&&(K.ref=xe),A.createElement(le,K)})(B,U,J)}I.displayName=b;let B=ut.forwardRef(I);return B.attrs=w,B.componentStyle=F,B.displayName=b,B.shouldForwardProp=P,B.foldedComponentIds=d?Gr(p.foldedComponentIds,p.styledComponentId):"",B.styledComponentId=L,B.target=d?p.target:o,Object.defineProperty(B,"defaultProps",{get(){return this._foldedDefaultProps},set(U){this._foldedDefaultProps=d?(function(J,...de){for(const Q of de)Vl(J,Q,!0);return J})({},p.defaultProps,U):U}}),Uu(B,()=>`.${B.styledComponentId}`),h&&Hu(B,o,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),B}var Lp=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function hu(o,u){const s=[o[0]];for(let d=0,p=u.length;d<p;d+=1)s.push(u[d],o[d+1]);return s}const gu=o=>(qu.add(o),o);function ec(o,...u){if(ti(o)||ei(o))return gu(cn(hu(Kl,[o,...u])));const s=o;return u.length===0&&s.length===1&&typeof s[0]=="string"?cn(s):gu(cn(hu(s,u)))}function Hl(o,u,s=rr){if(!u)throw or(1,u);const d=(p,...h)=>o(u,s,ec(p,...h));return d.attrs=p=>Hl(o,u,Object.assign(Object.assign({},s),{attrs:Array.prototype.concat(s.attrs,p).filter(Boolean)})),d.withConfig=p=>Hl(o,u,Object.assign(Object.assign({},s),p)),d}const tc=o=>Hl(Pp,o),S=tc;Lp.forEach(o=>{S[o]=tc(o)});class Rp{constructor(u,s){this.instanceRules=new Map,this.rules=u,this.componentId=s,this.isStatic=(function(d){for(let p=0;p<d.length;p+=1){const h=d[p];if(ti(h)&&!Jl(h))return!1}return!0})(u),ni.registerId(this.componentId)}removeStyles(u,s){this.instanceRules.delete(u),this.rebuildGroup(s)}renderStyles(u,s,d,p){const h=this.componentId;if(this.isStatic){if(d.hasNameForId(h,h+u))this.instanceRules.has(u)||this.computeRules(u,s,d,p);else{const C=this.computeRules(u,s,d,p);d.insertRules(h,C.name,C.rules)}return}const j=this.instanceRules.get(u);if(this.computeRules(u,s,d,p),!d.server&&j){const C=j.rules,b=this.instanceRules.get(u).rules;if(C.length===b.length){let L=!0;for(let w=0;w<C.length;w++)if(C[w]!==b[w]){L=!1;break}if(L)return}}this.rebuildGroup(d)}computeRules(u,s,d,p){const h=Dl(cn(this.rules,s,d,p)),j={name:this.componentId+u,rules:p(h,"")};return this.instanceRules.set(u,j),j}rebuildGroup(u){const s=this.componentId;u.clearRules(s);for(const d of this.instanceRules.values())u.insertRules(s,d.name,d.rules)}}function nc(o,...u){const s=ec(o,...u),d=`sc-global-${Du(JSON.stringify(s))}`,p=new Rp(s,d),h=C=>{const b=Xu(),L=ut.useContext(Zl);let w;{const P=ut.useRef(null);P.current===null&&(P.current=b.styleSheet.allocateGSInstance(d)),w=P.current}b.styleSheet.server&&j(w,C,b.styleSheet,L,b.stylis);{const P=p.isStatic?[w,b.styleSheet,p]:[w,C,b.styleSheet,L,b.stylis,p],F=ut.useRef(p);ut.useLayoutEffect(()=>{b.styleSheet.server||(F.current!==p&&(b.styleSheet.clearRules(d),F.current=p),j(w,C,b.styleSheet,L,b.stylis))},P),ut.useLayoutEffect(()=>()=>{b.styleSheet.server||p.removeStyles(w,b.styleSheet)},[w,b.styleSheet,p])}return b.styleSheet.server&&p.instanceRules.delete(w),null};function j(C,b,L,w,P){if(p.isStatic)p.renderStyles(C,W2,L,P);else{const F=Object.assign(Object.assign({},b),{theme:Fu(b,w,h.defaultProps)});p.renderStyles(C,F,L,P)}}return ut.memo(h)}const Tp=nc`
  @import url("https://fonts.googleapis.com/css2?family=Anton&family=Montserrat:wght@400;500;600;700;800;900&display=swap");

  :root {
    font-family: Montserrat, Arial, sans-serif;
    color: #141414;
    background: #fff;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    --lions-red: #c6f36b;
    --lions-dark: #11120f;
    --lions-yellow: #c6f36b;
  }

  * { box-sizing: border-box; }
  html { min-height: 100%; scroll-behavior: smooth; background: #11120f; }
  body { min-width: 320px; min-height: 100vh; margin: 0; overflow-x: clip; background: #11120f; }
  #root { min-height: 100vh; display: flex; flex-direction: column; }
  #root > main { flex: 1 0 auto; }
  img, video { max-width: 100%; }
  button, input, select { font: inherit; }
  button, a { -webkit-tap-highlight-color: transparent; }
  a { color: inherit; text-decoration: none; }
  button:focus-visible, a:focus-visible, input:focus-visible, select:focus-visible {
    outline: 3px solid #c6f36b;
    outline-offset: 3px;
  }
  ::selection { background: #c6f36b; color: #11120f; }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      scroll-behavior: auto !important;
      animation-duration: .01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: .01ms !important;
    }
  }
`,rc=S.div`
  width: min(100% - 32px, 560px);
  margin: 0 auto;
  @media (min-width: 701px) { width: min(100% - 48px, 1240px); }
`,Ip=S.header`
  position: sticky;
  top: 0;
  z-index: ${({$menuOpen:o})=>o?20:8};
  color: #fff;
  background: #11120f;
  transition: background .2s ease;
  @media (min-width: 701px) {
    margin-bottom: -67px;
    background: ${({$scrolled:o})=>o?"#11120f":"linear-gradient(180deg, rgba(17,18,15,.57), transparent)"};
  }
`,Fp=S.nav`
  width: calc(100% - 32px);
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin: auto;

  @media (min-width: 701px) {
    width: min(100% - 48px, 1210px);
    min-height: 67px;
  }
`,xu=S.a`
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  line-height: 0;
  img {
    display: block;
    width: 72px;
    height: 22px;
  }
`,Op=S.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(13px, 2vw, 29px);
  margin-left: auto;

  a {
    white-space: nowrap;
    font-size: 12px;
    font-weight: 700;
    text-shadow: 0 1px 4px rgba(0,0,0,.5);
    transition: color .18s ease;
  }
  a:hover { color: var(--lions-yellow); }

  display: none;
  @media (min-width: 1100px) { display: flex; }
`,vu=S.div`
  display: none;
  flex: 0 0 auto;
  align-items: center;
  gap: 9px;
  a {
    width: 28px;
    height: 28px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: #fff;
    color: #111;
    font-size: 17px;
    font-weight: 800;
  }
  @media (min-width: 701px) { display: flex; }
`,Ap=S.button`
  display: grid;
  place-items: center;
  min-width: 44px;
  min-height: 44px;
  padding: 8px;
  border: 0;
  background: rgba(0,0,0,.32);
  color: #fff;
  cursor: pointer;
  @media (min-width: 1100px) { display: none; }
`,$p=S.div`
  display: block;
  padding: 7px 16px 14px;
  background: #11120f;
  opacity: ${({$open:o})=>o?1:0};
  visibility: ${({$open:o})=>o?"visible":"hidden"};
  pointer-events: ${({$open:o})=>o?"auto":"none"};
  transition: opacity .25s ease, transform .25s ease, visibility .25s;

  .menu-head { display: none; }
  nav a {
    display: block;
    padding: 13px 0;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
  }

  @media (max-width: 700px) {
    position: fixed;
    z-index: 21;
    inset: 20px 20px 0;
    overflow-y: auto;
    padding: 16px 0 24px;
    box-shadow: 0 0 0 100vmax #11120f;
    transform: ${({$open:o})=>o?"translateY(0) scale(1)":"translateY(-12px) scale(.98)"};
    transition: opacity .25s ease, transform .25s ease, visibility .25s;

    .menu-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 16px 14px;
    }
    .menu-head > a img { width: 72px; height: 22px; }
    .menu-close {
      width: 30px;
      height: 30px;
      display: grid;
      place-items: center;
      padding: 0;
      border: 1px solid #c6f36b;
      border-radius: 4px;
      background: transparent;
      color: #fff;
      cursor: pointer;
    }
    nav a {
      padding: 13px 8px;
      border-bottom: 1px solid #373737;
      text-align: center;
      font-size: 16px;
      font-weight: 500;
    }
    & .menu-social {
      display: flex;
      justify-content: center;
      margin-top: 16px;
    }
  }

  @media (min-width: 701px) and (max-width: 1099px) {
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
  }

  @media (min-width: 1100px) { display: none; }
`,Dp=S.section`
  position: relative;
  isolation: isolate;
  overflow: hidden;
  height: auto;
  min-height: 0;
  padding-bottom: 24px;
  background: #f5f5f5;
  color: #111;

  @media (min-width: 701px) {
    height: min(790px, max(650px, 100svh));
    min-height: 650px;
    padding-bottom: 0;
    background: #25231e;
    color: #fff;
  }
`,Vp=S.div`
  position: absolute;
  z-index: -1;
  inset: 0;
  height: 505px;
  overflow: hidden;
  background: linear-gradient(90deg, rgba(0,0,0,.18), transparent 58%, rgba(0,0,0,.1));

  &::before {
    position: absolute;
    inset: 0;
    content: "";
    background: #3a3831 url("${({$image:o})=>o}") center 53% / cover no-repeat;
    animation: hero-zoom 8s ease-out both;
  }
  @keyframes hero-zoom { from { transform: scale(1.035); } to { transform: scale(1); } }

  &::after {
    position: absolute;
    inset: 0;
    content: "";
    background: linear-gradient(90deg, rgba(0,0,0,.08), transparent 58%, rgba(0,0,0,.1));
    pointer-events: none;
  }
  &::before { background-position: center; }
  &::after { background: linear-gradient(180deg, rgba(0,0,0,.3), transparent 65%); }
  @media (min-width: 701px) {
    height: 100%;
    &::after { background: linear-gradient(90deg, rgba(0,0,0,.08), transparent 58%, rgba(0,0,0,.1)); }
  }
`,Bp=S(rc)`
  min-height: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 0;
  padding-top: 348px;
  padding-bottom: 0;

  @media (min-width: 701px) {
    min-height: 100%;
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-items: center;
    gap: clamp(20px, 3vw, 44px);
    padding-top: 68px;
    padding-bottom: 62px;
  }
  @media (min-width: 901px) {
    grid-template-columns: minmax(0, 1fr) minmax(330px, 38%);
  }
`,Hp=S.form`
  position: fixed;
  z-index: 10;
  top: 50%;
  left: 5px;
  width: min(320px, calc(100vw - 10px));
  max-height: calc(100dvh - 16px);
  overflow-y: auto;
  transform: ${({$open:o})=>o?"translate(0, -50%)":"translate(calc(-100% - 12px), -50%)"};
  transition: transform .3s ease;
  padding: 58px 16px 15px;
  border-radius: 0 16px 16px 0;
  background: var(--lions-red);
  box-shadow: 0 8px 26px rgba(0,0,0,.2);
  color: var(--lions-dark);

  .drawer-close {
    position: absolute;
    top: 9px;
    right: 9px;
    width: 44px;
    min-height: 44px;
    margin: 0;
    padding: 0;
    border-radius: 50%;
    background: #fff;
    color: #171717;
    cursor: pointer;
  }

  h2 {
    margin: 3px 0 13px;
    text-align: center;
    font-size: 24px;
    font-weight: 900;
    line-height: 1.05;
    text-transform: uppercase;
  }
  h2 strong { display: block; color: var(--lions-dark); }
  .demo-label {
    margin: -4px 3px 8px;
    color: rgba(17,18,15,.82);
    font-size: 10px;
    line-height: 1.45;
    text-align: center;
  }
  .lead-cars {
    height: 100px;
    display: grid;
    place-items: center;
    margin: 0 0 7px;
    color: var(--lions-dark);
    font-family: Anton, Impact, sans-serif;
    font-size: 29px;
    letter-spacing: .03em;
  }
  .lead-cars span { font-size: 18px; font-family: Montserrat, sans-serif; font-weight: 800; }
  .fields { display: grid; gap: 6px; }
  input, select {
    width: 100%;
    min-height: 44px;
    padding: 0 12px;
    border: 0;
    border-radius: 3px;
    background: rgba(255,255,255,.93);
    color: #333;
    font-size: 14px;
  }
  input::placeholder { color: #626262; }
  button {
    width: 58%;
    min-height: 44px;
    display: block;
    margin: 8px auto 0;
    border: 0;
    border-radius: 3px;
    background: var(--lions-yellow);
    color: #16120a;
    cursor: pointer;
    font-size: 12px;
    font-weight: 900;
    letter-spacing: .04em;
    text-transform: uppercase;
  }
  button:hover { background: #b2df5d; }
  .notice { margin: 8px 3px 0; font-size: 9px; line-height: 1.45; }
  .notice a { text-decoration: underline; font-weight: 700; }

  @media (max-width: 700px) {
    z-index: 12;
    top: 50%;
    left: 50%;
    width: min(400px, calc(100vw - 32px));
    max-height: calc(100dvh - 16px);
    padding: 48px 16px 18px;
    border-radius: 16px;
    transform: ${({$open:o})=>o?"translate(-50%, -50%)":"translate(-50%, calc(-50% - 24px))"};
    opacity: ${({$open:o})=>o?1:0};
    visibility: ${({$open:o})=>o?"visible":"hidden"};
    pointer-events: ${({$open:o})=>o?"auto":"none"};
    box-shadow: 0 7px 25px rgba(0,0,0,.18);
  }
`,Up=S.button`
  display: none;

  @media (max-width: 700px) {
    position: fixed;
    z-index: 11;
    inset: 0;
    display: block;
    width: 100%;
    height: 100%;
    padding: 0;
    border: 0;
    background: rgba(0,0,0,.68);
    cursor: default;
  }
`,Wp=S.div`
  max-width: 440px;
  align-self: center;
  text-shadow: 0 2px 12px rgba(0,0,0,.58);
  .eyebrow { margin: 0 0 12px; font-size: 11px; font-weight: 800; letter-spacing: .14em; text-transform: uppercase; }
  h1 {
    margin: 0;
    font-family: Anton, Impact, sans-serif;
    font-size: clamp(40px, 5vw, 68px);
    font-weight: 400;
    line-height: .96;
    text-transform: uppercase;
  }
  p { max-width: 350px; margin: 15px 0 0; font-size: 13px; font-weight: 600; line-height: 1.55; }
  a {
    display: inline-flex;
    align-items: center;
    gap: 9px;
    margin-top: 18px;
    padding: 11px 16px;
    background: var(--lions-red);
    font-size: 11px;
    font-weight: 800;
    text-transform: uppercase;
    text-shadow: none;
  }
  display: none;
  @media (min-width: 901px) { display: block; }
`,qp=S.div`
  min-height: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 12px;
  margin: 0;
  border-radius: 0 0 8px 8px;
  background: rgba(255,255,255,.82);
  color: #171717;
  text-align: center;

  .small { margin: 0 0 4px; font-size: 15px; font-weight: 700; letter-spacing: .24em; text-transform: uppercase; }
  h2 {
    margin: 0;
    color: var(--lions-red);
    font-family: Anton, Impact, sans-serif;
    font-size: clamp(51px, 6vw, 88px);
    font-weight: 400;
    line-height: .92;
    text-transform: uppercase;
  }
  .details { margin: 17px 0 0; font-size: 12px; font-weight: 700; line-height: 1.5; }
  .tags { display: flex; flex-wrap: wrap; justify-content: center; gap: 7px; margin-top: 17px; }
  .tags span { padding: 8px 10px; border-radius: 20px; background: #c6f36b; color: #11120f; font-size: 9px; font-weight: 900; }
  .tags span:nth-child(2) { background: #c6f36b; color: #11120f; }
  .disclaimer { margin: 15px 0 0; font-size: 10px; letter-spacing: .05em; }
  .small { font-size: 11px; }
  h2 { font-size: clamp(44px, 14vw, 68px); }
  .details { margin-top: 10px; }
  @media (min-width: 701px) {
    min-height: 330px;
    padding: 26px clamp(18px, 2vw, 35px);
    border-radius: 0;
    .small { font-size: 15px; }
    h2 { font-size: clamp(51px, 6vw, 88px); }
    .details { margin-top: 17px; }
  }
  @media (min-width: 901px) {
    min-height: 410px;
    margin-top: -68px;
    margin-bottom: -62px;
  }
`,yu=S.button`
  position: absolute;
  z-index: 4;
  top: 165px;
  ${({$side:o})=>o}: 18px;
  width: 44px;
  height: 44px;
  display: grid;
  place-items: center;
  transform: translateY(-50%);
  border: 0;
  border-radius: 4px;
  background: rgba(0,0,0,.27);
  color: #fff;
  cursor: pointer;
  &:hover { background: var(--lions-red); color: var(--lions-dark); }
  @media (min-width: 701px) {
    top: 50%;
    width: 44px;
    height: 44px;
  }
`,Qp=S.div`
  position: absolute;
  z-index: 4;
  right: 0;
  bottom: 12px;
  left: 0;
  display: flex;
  justify-content: center;
  gap: 9px;
  button {
    width: 44px;
    height: 44px;
    padding: 0;
    border: 0;
    display: grid;
    place-items: center;
    background: transparent;
    cursor: pointer;
  }
  button::before {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: rgba(255,255,255,.8);
    content: "";
  }
  button[aria-current="true"]::before { background: var(--lions-red); }
  @media (min-width: 701px) { bottom: 17px; }
`,Yp=S.section`
  padding: 10px 12px 32px;
  background: #11120f;
  color: #fff;
  @media (min-width: 701px) { padding-bottom: 54px; }
`,Gp=S.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-auto-rows: 180px;
  gap: 8px;
  .category-card:last-child { grid-column: 1 / -1; }
  @media (min-width: 701px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-template-rows: repeat(2, minmax(230px, 19vw));
    .utility { grid-row: auto; }
    .sedan { grid-column: 3; grid-row: 1 / 3; }
    .category-card:last-child { grid-column: auto; }
  }
`,Kp=S.a`
  position: relative;
  min-width: 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  overflow: hidden;
  background: #333;
  isolation: isolate;
  text-align: center;
  &::before {
    position: absolute;
    z-index: -1;
    inset: 0;
    content: "";
    background: url("${({$image:o})=>o}") center / cover no-repeat;
    transition: transform .35s ease;
  }
  &::after {
    position: absolute;
    z-index: 0;
    inset: 25% 0 0;
    content: "";
    background: linear-gradient(transparent, rgba(0,0,0,.9));
    pointer-events: none;
  }
  &:hover::before { transform: scale(1.05); }
  .content { position: relative; z-index: 1; padding: 20px; }
  h3 { margin: 0 0 13px; font-size: clamp(17px, 2vw, 24px); font-weight: 800; }
  span {
    min-width: 122px;
    min-height: 40px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 9px 16px;
    border: 1px solid #fff;
    color: #fff;
    font-size: 12px;
    font-weight: 800;
  }
  &:hover span { background: var(--lions-red); border-color: var(--lions-red); }
`,Jp=S.section`
  padding: 0;
  background: #11120f;
  scroll-margin-top: 20px;
`,Zp=S.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 22px;
  .eyebrow { margin: 0 0 7px; color: var(--lions-red); font-size: 10px; font-weight: 800; letter-spacing: .14em; text-transform: uppercase; }
  h2 { margin: 0; font-size: clamp(25px, 4vw, 37px); font-weight: 800; letter-spacing: -.05em; }
  p { max-width: 350px; margin: 0; color: #686868; font-size: 11px; line-height: 1.6; }
  @media (max-width: 600px) { align-items: flex-start; flex-direction: column; }
`,Xp=S.section`
  padding: 38px 0 42px;
  background: #11120f;
  color: #fff;

  .catalog-link {
    width: fit-content;
    min-height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 9px;
    margin: 26px auto 0;
    padding: 0 18px;
    border: 1px solid rgba(255,255,255,.65);
    color: #fff;
    font-size: 12px;
    font-weight: 800;
    transition: background .2s ease, border-color .2s ease;
  }

  .catalog-link:hover {
    border-color: var(--lions-red);
    background: var(--lions-red);
  }

  @media (min-width: 701px) {
    padding: 48px 0 56px;
  }

  @media (max-width: 520px) {
    padding: 30px 0 36px;
  }
`;S.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  margin-bottom: 22px;
  .chips { display: flex; flex-wrap: wrap; gap: 7px; }
  input {
    width: 215px;
    height: 38px;
    padding: 0 12px;
    border: 1px solid #ddd;
    background: #fff;
    font-size: 11px;
  }
  @media (max-width: 600px) {
    align-items: stretch;
    flex-direction: column-reverse;
    input { width: 100%; }
  }
`;S.button`
  min-height: 34px;
  padding: 0 13px;
  border: 1px solid ${({$active:o})=>o?"var(--lions-red)":"#d3d3d3"};
  background: ${({$active:o})=>o?"var(--lions-red)":"#fff"};
  color: ${({$active:o})=>o?"var(--lions-dark)":"#333"};
  cursor: pointer;
  font-size: 10px;
  font-weight: 700;
`;const ef=S.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0,1fr));
  gap: 14px;
  @media (max-width: 820px) { grid-template-columns: repeat(2,minmax(0,1fr)); }
  @media (max-width: 520px) { grid-template-columns: 1fr; }
`,tf=S.div`
  overflow: hidden;
  width: 100%;
  background: #11120f;

  video {
    width: 100%;
    display: block;
    aspect-ratio: 16 / 9;
    background: #11120f;
    object-fit: cover;
    @media (max-width: 700px) {
      height: auto;
      max-height: calc(100svh - 60px);
      aspect-ratio: 9 / 16;
    }
  }

  p {
    margin: 0;
    padding: 12px 16px;
    color: #fff;
    font-size: 13px;
    text-align: center;
  }
`,nf=S.article`
  overflow: hidden;
  border: 1px solid #e6e6e6;
  background: #fff;
  transition: box-shadow .18s ease, transform .18s ease;
  &:hover { transform: translateY(-3px); box-shadow: 0 10px 25px rgba(0,0,0,.11); }
  .photo { height: 190px; position: relative; background: #e7e7e7; }
  .photo img { width: 100%; height: 100%; display: block; object-fit: cover; }
  .tag { position: absolute; top: 10px; left: 10px; padding: 6px 8px; background: var(--lions-red); color: var(--lions-dark); font-size: 9px; font-weight: 800; text-transform: uppercase; }
  .body { padding: 15px; }
  .meta { display: flex; justify-content: space-between; gap: 8px; color: #666; font-size: 10px; }
  h3 { margin: 8px 0 3px; font-size: 17px; }
  .version { margin: 0; color: #626262; font-size: 11px; }
  .price { margin-top: 15px; padding-top: 12px; border-top: 1px solid #eee; font-size: 19px; font-weight: 800; }
  .price small { display: block; margin-bottom: 4px; color: #777; font-size: 9px; font-weight: 500; }
`,rf=S.section`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  align-items: center;
  gap: 25px;
  padding: 40px 16px;
  background:
    linear-gradient(90deg, rgba(0,0,0,.64), rgba(0,0,0,.08)),
    url("${({$image:o})=>o}") center 44% / cover no-repeat;
  color: #fff;
  .copy { max-width: 520px; }
  .copy > span { font-size: 11px; font-weight: 800; letter-spacing: .12em; text-transform: uppercase; }
  h2 { margin: 12px 0 0; font-size: clamp(32px, 9vw, 42px); font-weight: 800; line-height: 1.06; }
  p { margin: 12px 0 0; font-size: 14px; line-height: 1.65; }
  @media (min-width: 701px) {
    min-height: 450px;
    padding: 55px max(24px, calc((100vw - 1200px) / 2));
    h2 { font-size: clamp(33px, 5vw, 54px); }
  }
  @media (min-width: 901px) {
    grid-template-columns: minmax(0, 1fr) 315px;
    gap: 42px;
  }
`,of=S.form`
  padding: 23px;
  border-radius: 12px;
  background: #fff;
  color: #141414;
  box-shadow: 0 8px 26px rgba(0,0,0,.16);
  h3 { margin: 0; font-size: 19px; font-weight: 800; line-height: 1.2; }
  p { margin: 8px 0 17px; color: #666; font-size: 10px; }
  label { display: block; margin-bottom: 6px; font-size: 10px; font-weight: 700; }
  input {
    width: 100%;
    height: 44px;
    padding: 0 12px;
    border: 0;
    border-radius: 7px;
    background: #e8edf4;
    font-size: 12px;
  }
  button {
    width: 100%;
    height: 42px;
    margin-top: 12px;
    border: 0;
    border-radius: 7px;
    background: var(--lions-red);
    color: var(--lions-dark);
    cursor: pointer;
    font-size: 11px;
    font-weight: 800;
  }
  button:hover { background: #b2df5d; color: var(--lions-dark); }
  .notice { margin: 12px 0 0; color: #555; font-size: 10px; line-height: 1.5; }
  .notice a { color: var(--lions-red); font-weight: 800; text-decoration: underline; }
`,af=S.a`
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  padding: 0 19px;
  background: var(--lions-red);
  color: var(--lions-dark);
  font-size: 11px;
  font-weight: 800;
  text-transform: uppercase;
  &:hover { background: #b2df5d; }
`,lf=S.footer`
  padding: 34px 16px 18px;
  background: #11120f;
  color: #fff;
  text-align: center;

  nav {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 12px 24px;
  }
  nav a {
    color: #fff;
    font-size: 14px;
    line-height: 1.5;
    text-underline-offset: 4px;
  }
  nav a:hover { text-decoration: underline; }
  .company { margin: 14px 0 0; font-size: 13px; line-height: 1.5; }
  .credit {
    margin: 18px 0 0;
    padding-top: 12px;
    border-top: 1px solid #252525;
    color: rgba(255,255,255,.72);
    font-size: 12px;
  }
`,sf=S.a`
  position: fixed;
  z-index: 9;
  right: 20px;
  bottom: 16px;
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 10px;
  overflow: hidden;
  border-radius: 32px;
  background: #19c66a;
  color: #fff;
  box-shadow: 0 4px 14px rgba(0,0,0,.3);
  text-decoration: none;
  transition: width .25s ease, background-color .25s ease, color .25s ease;

  svg {
    position: relative;
    z-index: 1;
    flex: 0 0 32px;
    width: 32px;
    height: 32px;
    padding: 2px;
    border-radius: 50%;
    transition: background-color .25s ease;
  }
  span {
    max-width: 0;
    margin-left: 0;
    overflow: hidden;
    color: #19c66a;
    font-size: 15px;
    font-weight: 800;
    white-space: nowrap;
    opacity: 0;
    transition: max-width .25s ease, margin-left .25s ease, opacity .2s ease;
  }
  svg path:first-child {
    fill: none;
    stroke: currentColor;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
  svg path:last-child { fill: currentColor; }

  @media (hover: hover) {
    &:hover,
    &:focus-visible {
      width: 208px;
      background: #ddf8c7;
      color: #19c66a;
      outline: none;
    }
    &:hover svg,
    &:focus-visible svg { background: #fff; }
    &:hover span,
    &:focus-visible span {
      max-width: 140px;
      margin-left: 10px;
      opacity: 1;
    }
  }

  &:focus-visible {
    outline: 3px solid #111;
    outline-offset: 3px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    svg, span { transition: none; }
  }
`,uf=S.button`
  position: fixed;
  z-index: 9;
  bottom: 16px;
  left: 26px;
  min-height: 64px;
  display: ${({$open:o})=>o?"none":"flex"};
  align-items: center;
  gap: 0;
  padding: 0 0 0 64px;
  border: 0;
  border-radius: 36px;
  background: transparent;
  color: #fff;
  cursor: pointer;
  box-shadow: none;
  text-align: left;

  .badge-icon {
    position: absolute;
    left: 0;
    width: 64px;
    height: 64px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: var(--lions-red);
    box-shadow: 0 3px 12px rgba(0,0,0,.3);
  }
  .car-icon { position: absolute; bottom: 11px; left: 10px; }
  .tag-icon { position: absolute; top: 10px; right: 9px; fill: #fff; color: #fff; }
  .offer-label {
    min-height: 42px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 4px 12px 4px 8px;
    border-radius: 0 24px 24px 0;
    background: #292929;
    font-size: 9px;
    font-weight: 700;
    line-height: 1.12;
    text-transform: uppercase;
    white-space: nowrap;
  }
  .offer-label strong { font-size: 13px; font-weight: 900; }
`,cf=S.button`
  position: fixed;
  z-index: 9;
  top: 50%;
  left: 0;
  width: 42px;
  height: 240px;
  display: grid;
  place-items: center;
  padding: 12px 0;
  border: 0;
  border-radius: 16px 0 0 16px;
  background: var(--lions-red);
  color: var(--lions-dark);
  cursor: pointer;
  font-size: 12px;
  font-weight: 900;
  text-transform: uppercase;
  writing-mode: vertical-rl;
  transform: translateY(-50%) rotate(180deg);
  transition: width .2s ease, background-color .2s ease;

  &:hover { width: 48px; background: #b2df5d; }
  &:focus-visible { outline-offset: -4px; }
`,df="#BB0A30",pf=A.forwardRef(function({title:u="Audi",color:s="currentColor",size:d=24,...p},h){return s==="default"&&(s=df),l.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:d,height:d,fill:s,viewBox:"0 0 24 24",ref:h,...p,children:[l.jsx("title",{children:u}),l.jsx("path",{d:"M19.848,7.848c-0.992,0-1.902,0.348-2.616,0.928c-0.714-0.58-1.624-0.928-2.616-0.928 c-0.992,0-1.902,0.348-2.616,0.928c-0.714-0.58-1.624-0.928-2.616-0.928c-0.992,0-1.902,0.348-2.616,0.928 c-0.714-0.58-1.624-0.928-2.616-0.928C1.859,7.848,0,9.707,0,12s1.859,4.152,4.152,4.152c0.992,0,1.902-0.348,2.616-0.928 c0.714,0.58,1.624,0.928,2.616,0.928c0.992,0,1.902-0.348,2.616-0.928c0.714,0.58,1.624,0.928,2.616,0.928 c0.992,0,1.902-0.348,2.616-0.928c0.714,0.58,1.624,0.928,2.616,0.928C22.141,16.152,24,14.293,24,12S22.141,7.848,19.848,7.848z M17.232,13.866c-0.376-0.526-0.598-1.17-0.598-1.866c0-0.696,0.222-1.34,0.598-1.866c0.376,0.526,0.598,1.17,0.598,1.866 C17.83,12.696,17.608,13.34,17.232,13.866z M12,13.866c-0.376-0.526-0.598-1.17-0.598-1.866c0-0.696,0.222-1.34,0.598-1.866 c0.376,0.526,0.598,1.17,0.598,1.866C12.598,12.696,12.376,13.34,12,13.866z M6.768,13.866C6.392,13.34,6.17,12.696,6.17,12 c0-0.696,0.222-1.34,0.598-1.866C7.144,10.66,7.366,11.304,7.366,12C7.366,12.696,7.144,13.34,6.768,13.866z M0.938,12 c0-1.775,1.439-3.214,3.214-3.214c0.736,0,1.414,0.248,1.956,0.665C5.56,10.154,5.232,11.039,5.232,12 c0,0.961,0.328,1.846,0.876,2.549c-0.542,0.416-1.22,0.665-1.956,0.665C2.377,15.214,0.938,13.775,0.938,12z M7.428,14.549 C7.976,13.846,8.304,12.961,8.304,12c0-0.961-0.328-1.846-0.876-2.549c0.542-0.416,1.22-0.665,1.956-0.665 c0.736,0,1.414,0.248,1.956,0.665c-0.549,0.704-0.876,1.588-0.876,2.549c0,0.961,0.328,1.846,0.876,2.549 c-0.542,0.416-1.22,0.665-1.956,0.665C8.648,15.214,7.97,14.966,7.428,14.549z M12.66,14.549c0.549-0.704,0.876-1.588,0.876-2.549 c0-0.961-0.328-1.846-0.876-2.55c0.542-0.416,1.22-0.665,1.956-0.665s1.414,0.248,1.956,0.665 c-0.549,0.704-0.876,1.588-0.876,2.549c0,0.961,0.328,1.846,0.876,2.549c-0.542,0.416-1.22,0.665-1.956,0.665 C13.88,15.214,13.202,14.966,12.66,14.549z M19.848,15.214c-0.736,0-1.414-0.248-1.956-0.665c0.548-0.704,0.876-1.588,0.876-2.549 c0-0.961-0.328-1.846-0.876-2.549c0.542-0.416,1.22-0.665,1.956-0.665c1.775,0,3.214,1.439,3.214,3.214 S21.623,15.214,19.848,15.214z"})]})}),ff="#0066B1",mf=A.forwardRef(function({title:u="BMW",color:s="currentColor",size:d=24,...p},h){return s==="default"&&(s=ff),l.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:d,height:d,fill:s,viewBox:"0 0 24 24",ref:h,...p,children:[l.jsx("title",{children:u}),l.jsx("path",{d:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 .78C18.196.78 23.219 5.803 23.219 12c0 6.196-5.022 11.219-11.219 11.219C5.803 23.219.781 18.196.781 12S5.804.78 12 .78zm-.678.63c-.33.014-.66.042-.992.078l-.107 2.944a9.95 9.95 0 0 1 .71-.094l.07-1.988-.013-.137.043.13.664 1.489h.606l.664-1.488.04-.131-.01.137.07 1.988c.232.022.473.054.71.094l-.109-2.944a14.746 14.746 0 0 0-.992-.078l-.653 1.625-.023.12-.023-.12-.655-1.625zm6.696 1.824l-1.543 2.428c.195.15.452.371.617.522l1.453-.754.092-.069-.069.094-.752 1.453c.163.175.398.458.53.63l2.43-1.544a16.135 16.135 0 0 0-.46-.568L18.777 6.44l-.105.092.078-.115.68-1.356-.48-.48-1.356.68-.115.078.091-.106 1.018-1.539c-.18-.152-.351-.291-.57-.46zM5.5 3.785c-.36.037-.638.283-1.393 1.125a18.97 18.97 0 0 0-.757.914l2.074 1.967c.687-.76.966-1.042 1.508-1.613.383-.405.6-.87.216-1.317-.208-.242-.558-.295-.85-.175l-.028.01.01-.026a.7.7 0 0 0-.243-.734.724.724 0 0 0-.537-.15zm.006.615c.136-.037.277.06.308.2.032.14-.056.272-.154.382-.22.25-1.031 1.098-1.031 1.098l-.402-.383c.417-.51.861-.974 1.062-1.158a.55.55 0 0 1 .217-.139zM12 4.883a7.114 7.114 0 0 0-7.08 6.388v.002a7.122 7.122 0 0 0 8.516 7.697 7.112 7.112 0 0 0 5.68-6.97A7.122 7.122 0 0 0 12 4.885v-.002zm-5.537.242c.047 0 .096.013.14.043.088.059.128.16.106.26-.026.119-.125.231-.205.318l-1.045 1.12-.42-.4s.787-.832 1.045-1.099c.102-.106.168-.17.238-.205a.331.331 0 0 1 .14-.037zM12 5.818A6.175 6.175 0 0 1 18.182 12H12v6.182A6.175 6.175 0 0 1 5.818 12H12V5.818Z"})]})}),hf="#CD9834",gf=A.forwardRef(function({title:u="Chevrolet",color:s="currentColor",size:d=24,...p},h){return s==="default"&&(s=hf),l.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:d,height:d,fill:s,viewBox:"0 0 24 24",ref:h,...p,children:[l.jsx("title",{children:u}),l.jsx("path",{d:"M23.905 9.784H15.92V8.246a.157.157 0 00-.157-.158H8.238a.157.157 0 00-.157.158v1.538H2.358c-.087 0-.193.07-.237.158L.02 14.058c-.045.088-.011.157.077.157H8.08v1.54c0 .086.07.157.157.157h7.525c.087 0 .157-.07.157-.157v-1.54h5.723c.087 0 .193-.07.238-.157l2.1-4.116c.045-.087.011-.158-.076-.158m-2.494.996l-1.244 2.437h-5.232v1.708H9.07v-1.708H2.595L3.84 10.78h5.232V9.073h5.864v1.707z"})]})}),xf="#DA291C",vf=A.forwardRef(function({title:u="Citroën",color:s="currentColor",size:d=24,...p},h){return s==="default"&&(s=xf),l.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:d,height:d,fill:s,viewBox:"0 0 24 24",ref:h,...p,children:[l.jsx("title",{children:u}),l.jsx("path",{d:"M12 0C6.684 0 2.292 5.38 2.292 12S6.652 24 12 24c5.347 0 9.708-5.38 9.708-12S17.316 0 12 0zM4.106 16.233c-.19-.604-.35-1.241-.414-1.878L12 8.18l8.371 6.175a12.334 12.334 0 0 1-.413 1.878v.032h-.032L12 10.345zm.923 2.101-.032-.032L12 13.114l7.003 5.188v.032c-1.655 2.897-4.202 4.616-6.987 4.616s-5.363-1.751-6.987-4.616zM12 5.347l-8.53 6.335v-.032c.063-2.674.954-5.284 2.61-7.385C7.67 2.324 9.772 1.21 12 1.21c2.228 0 4.36 1.114 5.92 3.055 1.56 1.942 2.515 4.616 2.61 7.417v.032l-.031-.032z"})]})}),yf="#00529B",wf=A.forwardRef(function({title:u="DAF",color:s="currentColor",size:d=24,...p},h){return s==="default"&&(s=yf),l.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:d,height:d,fill:s,viewBox:"0 0 24 24",ref:h,...p,children:[l.jsx("title",{children:u}),l.jsx("path",{d:"M19.649 12.782h-2.643V8.723H24v1.183h-4.351v.723h4.277v1.147h-4.277zm-7.51-3.039l-1.831 3.05H7.76l2.414-4.07h3.924l2.424 4.07h-5.364l.64-1.06h1.534zM.004 12.785V8.741h4.99c1.62 0 2.773.738 2.773 1.994 0 1.196-.914 2.05-2.82 2.05zm4.008-1.034c.621 0 .985-.53.985-.935 0-.413-.325-.896-.967-.896H2.671v1.831zM0 13.731h23.926v1.546H0Z"})]})}),kf="#CC0000",bf=A.forwardRef(function({title:u="Ducati",color:s="currentColor",size:d=24,...p},h){return s==="default"&&(s=kf),l.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:d,height:d,fill:s,viewBox:"0 0 24 24",ref:h,...p,children:[l.jsx("title",{children:u}),l.jsx("path",{d:"M23.14 3.895c-.326-1.307-1.96-2.001-3.103-2.45C17.302.383 13.382-.19 10.401.056c-2.94.245-6.738 1.062-8.575 2.45-.531.409-.899.776-1.021 1.715C.56 6.222 1.499 9.203 2.07 11c.163-.082.367-.327.857-.572.98-.49 2.164-.817 3.267-1.02 3.96-.817 9.473-.9 13.597-.9.49 0 .98 0 1.43.042.449 0 .98.04 1.429.04l.245-1.102c.204-1.02.49-2.573.245-3.593zM5.95 5.528c-.531 1.674-2.083 1.43-3.634 1.43L3.05 3.69c.326-.04.898 0 1.265 0 .45 0 .776 0 1.144.123.612.245.735.98.49 1.715zm1.837 1.51c-.898.042-1.715-.162-1.551-1.142.04-.245.449-2.124.49-2.206h1.306c-.04.368-.204.94-.286 1.307-.04.245-.081.408-.122.654-.04.204-.123.571.204.49.204-.041.245-.286.286-.49.122-.572.327-1.47.408-1.96H9.83c-.04.326-.163.816-.245 1.143-.204 1.062-.204 2.123-1.797 2.205zm3.308 0c-1.103 0-1.511-.693-1.266-1.755.367-1.756 2.205-1.92 2.94-1.51.408.244.49.53.408 1.102h-1.225c0-.164.041-.327-.081-.409-.123-.081-.327 0-.409.082-.204.204-.53 1.43-.286 1.593.286.204.49-.205.531-.409h1.225c-.081.817-.816 1.348-1.837 1.307zm4.165-.08v-.49h-.94l-.244.53H12.81c.04-.122.735-1.43.857-1.633l.899-1.634h1.715l.367 3.267c-.286-.04-1.225 0-1.388-.04zm3.757-2.41c-.082.163-.245.98-.286 1.184-.082.327-.164.858-.286 1.184h-1.307c-.04-.204.49-2.123.49-2.409h-.816l.204-.898h2.98c0 .122-.163.816-.204.898l-.775.041zm1.837 2.41h-1.347L20.2 3.69h1.306l-.653 3.267zm-2.327 2.94c-1.266.122-2.45.244-3.635.408-2.245.326-4.573.898-6.451 1.674-1.593.694-3.88 2.082-3.88 4.165 0 .326.041.326.286.694.368.53.858 1.266 1.225 1.756 1.184 1.51 3.308 4.124 4.982 5.063.49.286.898.49 1.51.204.45-.204.9-.53 1.226-.776 2.164-1.755 4.982-5.349 6.288-7.758.899-1.674 1.715-3.716 2.287-5.676-.368-.04-3.47.204-3.838.245zM15.219 5.61V4.425c-.082.082-.49 1.021-.53 1.185zM4.194 4.425l-.408 1.797c.571.041.735-.327.816-.776.123-.49.286-1.061-.408-1.02z"})]})}),Sf="#941711",jf=A.forwardRef(function({title:u="Fiat",color:s="currentColor",size:d=24,...p},h){return s==="default"&&(s=Sf),l.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:d,height:d,fill:s,viewBox:"0 0 24 24",ref:h,...p,children:[l.jsx("title",{children:u}),l.jsx("path",{d:"M21.175 6.25c.489 1.148.726 2.442.726 3.956 0 .818-.068 1.69-.206 2.666-.286 2.01-1.048 4.11-1.75 5.494-.114.223-.205.371-.388.533-.32.282-.602.352-.706.291-.084-.05-.131-.302-.114-.673.014-.316.089-.55.204-.924a36.261 36.261 0 0 0 1.2-5.416c.385-2.664.37-5.06-.201-6.52a2.224 2.224 0 0 0-.22-.427c-.062-.09-.106-.136-.106-.136-1.181-1.183-4.37-1.776-7.56-1.776-3.19 0-6.378.593-7.558 1.776 0 0-.045.045-.106.136a2.122 2.122 0 0 0-.221.426c-.572 1.46-.586 3.857-.201 6.521.26 1.807.672 3.72 1.227 5.504.096.307.158.516.173.84.016.369-.03.62-.114.67-.104.06-.389-.01-.71-.295-.23-.205-.345-.405-.49-.701-.68-1.385-1.393-3.397-1.667-5.323a18.884 18.884 0 0 1-.206-2.666c0-1.514.238-2.807.726-3.954.367-.86.983-1.58 1.782-2.083a13.892 13.892 0 0 1 6.526-2.122 13.9 13.9 0 0 1 .815-.026h.02c.274 0 .548.01.818.026 2.282.138 4.539.873 6.525 2.122a4.583 4.583 0 0 1 1.782 2.082zm-4.763 14.526c-.088.019-.361.083-.632.157-.243.067-.483.12-.597.143a16.51 16.51 0 0 1-3.115.285h-.028c-1.117 0-2.177-.103-3.114-.285a9.23 9.23 0 0 1-.56-.133 14.987 14.987 0 0 0-.604-.148c-.418-.095-.796-.163-.817-.083-.025.093.162.288.401.472.056.042.195.14.357.22.15.073.32.128.386.15 1.098.355 2.346.502 3.941.502h.022c1.563 0 2.794-.142 3.877-.483.371-.117.59-.211.853-.42.22-.174.385-.353.361-.44-.02-.075-.348-.021-.731.063zm-2.508-10.313c-.145-.81-.32-1.432-.518-1.85l-.002-.004h-.021l-.682-.006h-.01l-.027 2.998h1.426l-.001-.01c0-.005-.056-.522-.165-1.128zm5.76 1.687c-.322 2.228-.88 4.623-1.66 6.701-.13.35-.248.48-.53.7a6.23 6.23 0 0 1-2.431 1.028c-.897.175-1.908.272-2.974.272h-.029a15.66 15.66 0 0 1-2.973-.272 6.23 6.23 0 0 1-2.433-1.028c-.282-.22-.399-.35-.527-.7-.782-2.078-1.34-4.473-1.661-6.701-.373-2.577-.35-4.847.18-6.202.067-.17.138-.292.19-.369.046-.065.078-.1.078-.1 1.068-1.07 4.06-1.652 7.16-1.652 3.101 0 6.093.582 7.16 1.653 0 0 .032.033.078.1.052.076.124.197.19.368.531 1.355.554 3.625.182 6.202zM8.904 7.565L6.222 7.55l.267 9.337 1.122.012-.016-4.25h1.014v-1.097H7.595V8.66h1.31V7.564zm1.876-.02l-1.365.003.181 9.35h1.157l.027-9.352zm3.448.014h-2.732l.108 9.334h1.092l.009-4.222h1.418l.002.007c.128.797.138 4.171.138 4.205v.015h1.063l.009-.479c.048-2.42.13-6.469-1.107-8.86zm4.32-.013l-3.344.013v1.077h.998v.01l-.042 8.252h1.132l.275-8.262h.981v-1.09zM23.975 12c0 6.617-5.372 12-11.976 12C5.397 24 .025 18.617.025 12S5.397 0 12 0c6.604 0 11.976 5.383 11.976 12zm-.33-.008C23.64 5.561 18.418.33 11.998.33 5.642.33.46 5.463.358 11.811a1.71 1.71 0 0 1 .684-.78c.655-.388.834-1.385.893-1.981l.012-.062c-.039.395-.07.79-.07 1.218 0 .832.07 1.718.21 2.708.412 2.9 1.813 6.007 2.637 6.958l.046.05.192.202.007.006c2.01 1.647 3.857 2.23 7.061 2.23h.022c3.203 0 5.05-.583 7.06-2.23l.009-.006.185-.197.052-.056c.826-.954 2.226-4.057 2.638-6.957.14-.99.209-1.876.209-2.708 0-.454-.021-.89-.064-1.309l.006.006c.06.597.379 2.141.995 2.586.21.152.375.317.503.503z"})]})}),Cf="#00274E",zf=A.forwardRef(function({title:u="Ford",color:s="currentColor",size:d=24,...p},h){return s==="default"&&(s=Cf),l.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:d,height:d,fill:s,viewBox:"0 0 24 24",ref:h,...p,children:[l.jsx("title",{children:u}),l.jsx("path",{d:"M12 8.236C5.872 8.236.905 9.93.905 12.002S5.872 15.767 12 15.767c6.127 0 11.094-1.693 11.094-3.765 0-2.073-4.967-3.766-11.094-3.766zm-5.698 6.24c-.656.005-1.233-.4-1.3-1.101a1.415 1.415 0 0 1 .294-1.02c.195-.254.525-.465.804-.517.09-.017.213-.006.264.054.079.093.056.194-.023.234-.213.109-.47.295-.597.55a.675.675 0 0 0 .034.696c.263.397.997.408 1.679-.225.169-.156.32-.304.473-.48.3-.344.4-.47.8-1.024.005-.006.006-.014.004-.018-.003-.007-.009-.01-.02-.01-.267.007-.5.087-.725.255-.065.048-.159.041-.2-.021-.046-.07-.013-.163.062-.215.363-.253.76-.298 1.166-.367 0 0 .028.002.051-.03.167-.213.292-.405.47-.621.178-.22.41-.42.586-.572.246-.212.404-.283.564-.37.043-.022-.005-.049-.018-.049-.896-.168-1.827-.386-2.717-.056-.616.23-.887.718-.757 1.045.093.231.397.27.683.13a1.55 1.55 0 0 0 .611-.544c.087-.134.27-.038.171.195-.26.611-.757 1.097-1.363 1.118-.516.016-.849-.363-.848-.831.002-.924 1.03-1.532 2.11-1.622 1.301-.108 2.533.239 3.825.395.989.12 1.938.123 2.932-.106.118-.025.2.05.193.168-.01.172-.143.337-.47.516-.373.204-.763.266-1.17.27-.984.008-1.901-.376-2.85-.582.002.041.012.091-.023.117-.525.388-1 .782-1.318 1.334-.011.013-.005.025.013.024.277-.015.525-.022.783-.042.045-.004.047-.015.043-.048a.64.64 0 0 1 .2-.558c.172-.153.387-.17.53-.06.16.126.147.353.058.523a.63.63 0 0 1-.382.31s-.03.006-.026.034c.006.043.2.151.217.18.017.027.008.07-.021.102a.123.123 0 0 1-.095.045c-.033 0-.053-.012-.096-.035a.92.92 0 0 1-.27-.217c-.024-.031-.037-.032-.099-.029-.279.017-.714.059-1.009.096-.071.008-.082.022-.096.047-.47.775-.972 1.61-1.523 2.17-.592.6-1.083.758-1.604.762zM19.05 10.71c-.091.158-1.849 2.834-1.96 3.11-.035.088-.04.155-.004.204.092.124.297.051.425-.038.381-.262.645-.58.937-.858.017-.013.046-.018.065 0 .043.04.106.091.15.137a.04.04 0 0 1 .002.057 5.873 5.873 0 0 1-.904.911c-.47.364-.939.457-1.172.224a.508.508 0 0 1-.14-.316c-.002-.057-.031-.06-.058-.034-.278.275-.76.579-1.198.362-.366-.18-.451-.618-.383-.986.001-.008-.006-.06-.051-.03a1.28 1.28 0 0 1-.3.162.853.853 0 0 1-.366.077.518.518 0 0 1-.451-.253.759.759 0 0 1-.095-.347c-.001-.011-.017-.032-.033-.005-.3.457-.579.899-.875 1.363-.016.022-.03.036-.06.037l-.587.001c-.036 0-.053-.028-.034-.063.104-.2.674-1.03 1.06-1.736.107-.194.085-.294.019-.337-.083-.054-.248.027-.387.133-.379.287-.697.735-.859.935-.095.117-.185.291-.433.56-.391.425-.91.669-1.408.5a.848.848 0 0 1-.546-.58c-.015-.052-.044-.066-.073-.032-.08.1-.245.249-.383.342-.015.011-.052.033-.084.017a.851.851 0 0 1-.152-.199.07.07 0 0 1 .016-.08c.197-.173.305-.271.391-.38.064-.08.113-.17.17-.315.12-.302.393-.866.938-1.158a1.81 1.81 0 0 1 .652-.219c.1-.01.183.002.213.08.011.033.039.105.056.158.011.032.003.057-.035.071-.32.122-.643.311-.865.61-.253.338-.321.746-.152.98.123.17.322.2.514.139.29-.092.538-.363.666-.663.138-.329.16-.717.058-1.059-.016-.059-.001-.104.037-.136.077-.063.184-.112.215-.128a.14.14 0 0 1 .182.045c.106.157.163.378.17.607.006.049.026.05.05.025.19-.202.366-.418.568-.58.185-.147.422-.267.643-.262.286.006.428.2.419.546-.001.044.03.04.051.011a1.19 1.19 0 0 1 .24-.264c.198-.163.4-.236.611-.222.26.02.468.257.425.527a.53.53 0 0 1-.281.406.362.362 0 0 1-.405-.044.336.336 0 0 1-.096-.322c.005-.025-.027-.048-.054-.02-.254.264-.273.606-.107.76.183.17.458.056.658-.075.366-.239.65-.563.979-.813.218-.166.467-.314.746-.351a.87.87 0 0 1 .454.052c.2.081.326.25.342.396.004.043.036.048.063.01.158-.246 1.005-1.517 1.075-1.65.02-.041.044-.047.089-.047h.606c.035 0 .051.02.036.047zm-2.32 2.204a.053.053 0 0 0-.003.04c.003.02.03.04.056.05.01.003.015.01.004.032-.075.16-.143.252-.237.391a1.472 1.472 0 0 1-.3.325c-.178.147-.424.307-.628.2-.09-.047-.13-.174-.127-.276.004-.288.132-.584.369-.875.288-.355.607-.539.816-.438.216.103.148.354.05.55zm-5.949-1.881a.398.398 0 0 1 .132-.345c.057-.05.133-.062.18-.022.052.045.027.157-.026.234a.43.43 0 0 1-.245.177c-.018.004-.034-.004-.041-.044zM12 7.5C5.34 7.5 0 9.497 0 12c0 2.488 5.383 4.5 12 4.5s12-2.02 12-4.5-5.383-4.5-12-4.5zm0 8.608C5.649 16.108.5 14.27.5 12.002.5 9.733 5.65 7.895 12 7.895s11.498 1.838 11.498 4.107c0 2.268-5.148 4.106-11.498 4.106z"})]})}),Nf="#E40521",Ef=A.forwardRef(function({title:u="Honda",color:s="currentColor",size:d=24,...p},h){return s==="default"&&(s=Nf),l.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:d,height:d,fill:s,viewBox:"0 0 24 24",ref:h,...p,children:[l.jsx("title",{children:u}),l.jsx("path",{d:"M23.902 6.87c-.33-3.218-2.47-3.895-4.354-4.204-.946-.16-2.63-.3-3.716-.34-.946-.06-3.168-.09-3.835-.09-.657 0-2.89.03-3.835.09-1.076.04-2.77.18-3.716.34C2.563 2.985.42 3.66.092 6.87c-.08.877-.1 2.023-.09 3.248.03 2.031.2 3.406.3 4.363.07.657.338 2.62.687 3.636.478 1.395.916 1.803 1.424 2.222.937.757 2.471.996 2.79 1.056 1.733.31 5.24.368 6.784.368 1.544 0 5.05-.05 6.784-.368.329-.06 1.863-.29 2.79-1.056.508-.419.946-.827 1.424-2.222.35-1.016.628-2.979.698-3.636.1-.957.279-2.332.299-4.363.04-1.225.01-2.371-.08-3.248m-1.176 5.4c-.19 2.57-.418 4.104-.747 5.22-.29.976-.637 1.623-1.165 2.092-.867.787-2.063.956-2.76 1.056-1.514.23-4.055.3-6.057.3-2.002 0-4.543-.08-6.057-.3-.697-.1-1.893-.269-2.76-1.056-.518-.469-.876-1.126-1.155-2.093-.329-1.105-.558-2.65-.747-5.22-.11-1.543-.09-4.054.08-5.4.258-2.011 1.255-3.018 3.387-3.396.996-.18 2.34-.31 3.606-.37 1.016-.07 2.7-.1 3.636-.09.936-.01 2.62.03 3.636.09 1.275.06 2.61.19 3.606.37 2.142.378 3.139 1.395 3.388 3.397.199 1.345.229 3.856.11 5.4m-5.202-8.39c-.548 2.462-.767 3.588-1.216 5.37-.428 1.715-.767 3.298-1.335 4.065-.587.777-1.365.947-1.893 1.006-.279.03-.478.04-1.066.05-.596 0-.796-.02-1.075-.05-.528-.06-1.315-.229-1.892-1.006-.578-.767-.907-2.35-1.335-4.064-.47-1.773-.678-2.91-1.236-5.37 0 0-.548.02-.797.04-.329.02-.588.05-.867.09.343 5.372.692 11.079 1.126 16.13a21.983 21.983 0 002.39.169c.33-1.266.748-3.02 1.207-3.767.378-.608.966-.677 1.295-.717.518-.07.956-.08 1.165-.08.2-.01.637 0 1.165.08.33.05.917.11 1.295.717.47.747.877 2.5 1.206 3.766 0 0 .358-.01 1.165-.05.41-.018.82-.058 1.226-.12.458-5.39.785-10.728 1.126-16.128-.28-.04-.538-.07-.867-.09-.23-.02-.787-.04-.787-.04z"})]})}),Mf="#273A60",_f=A.forwardRef(function({title:u="Husqvarna",color:s="currentColor",size:d=24,...p},h){return s==="default"&&(s=Mf),l.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:d,height:d,fill:s,viewBox:"0 0 24 24",ref:h,...p,children:[l.jsx("title",{children:u}),l.jsx("path",{d:"M12 0c1.022 0 1.687.18 1.968.242-.14 1.307-.1 2.354 0 2.657.34 1.005 2.276 1.474 3.058 1.011.86-.522.664-2.11.664-3.156 0 0 1.268.3 2.046.593.632.238 1.563.703 1.563.703.185 1.324.01 3.282-1.292 3.946.982.985 1.312 2.152 1.732 4.304.34 1.93.26 3.28.24 4.405-.1 1.53-.1 2.355-.46 3.743-.52 1.589-.829 2.335-1.883 3.439C17.496 24.132 14.007 24 12 23.998c-2.007.002-5.494.134-7.635-2.111-1.055-1.104-1.363-1.85-1.883-3.439-.36-1.388-.36-2.213-.46-3.743-.021-1.125-.1-2.474.24-4.405.42-2.154.75-3.319 1.732-4.304-1.302-.664-1.477-2.622-1.292-3.946 0 0 .933-.465 1.563-.703C5.043 1.055 6.31.754 6.31.754c0 1.047-.196 2.632.664 3.156.782.461 2.716-.006 3.058-1.011.1-.303.14-1.35 0-2.657C10.313.18 10.979 0 12 0m-.003 21.125c2.342 0 3.09 0 4.251-.322.4-.142 1.122-.342 1.644-1.167.96-1.65.96-4.748.96-6.235 0-1.49 0-4.124-.96-5.754-.52-.844-1.233-1.078-1.644-1.186-1.186-.316-1.948-.297-4.251-.302h.001c-2.303.005-3.065-.014-4.251.302-.41.11-1.122.342-1.644 1.186-.96 1.63-.96 4.266-.96 5.754s0 4.586.96 6.235c.52.825 1.241 1.025 1.644 1.167 1.16.324 1.909.322 4.25.322zM12 14.458c2.004 0 1.96.002 1.96.644v4.053h2.724V7.928H13.96V11.3c0 .664.044.662-1.96.662h.002c-2.003 0-1.96.002-1.96-.662V7.928H7.321v11.23h2.721v-4.056c0-.644-.04-.644 1.958-.644z"})]})}),Pf="#002C5E",Lf=A.forwardRef(function({title:u="Hyundai",color:s="currentColor",size:d=24,...p},h){return s==="default"&&(s=Pf),l.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:d,height:d,fill:s,viewBox:"0 0 24 24",ref:h,...p,children:[l.jsx("title",{children:u}),l.jsx("path",{d:"M12 18.1622c-6.6275 0-12-2.7586-12-6.163 0-3.4028 5.3725-6.1614 12-6.1614 6.6278 0 12 2.7586 12 6.1614 0 3.4044-5.3722 6.163-12 6.163zM7.6023 7.17C3.701 7.9784.973 9.8302.973 11.9844c0 1.1929.8382 2.2932 2.248 3.1757.1174.0724.1941.0862.251.0826.1019-.006.1593-.0698.201-.146.028-.0485.0631-.1225.0972-.1968.4601-1.0834 2.0776-4.8333 4.2023-7.3758a1.1775 1.1775 0 0 0 .1048-.1461c.046-.084.0356-.1513.0006-.192-.0593-.0647-.2247-.065-.4756-.016zM9.742 8.8995c-1.1728 2.8492 1.0473 2.4961 1.6478 2.3637 1.0203-.2258 1.9944-.6128 2.7746-.925 2.2216-.8887 3.4012-1.7804 3.7925-2.123a1.9839 1.9839 0 0 0 .1076-.0988c.0557-.058.0976-.1192.0976-.2002 0-.0936-.081-.1687-.2374-.2231-.012-.0049-.0517-.021-.0641-.025-1.698-.5415-3.724-.8563-5.9016-.8563-.0168 0-.0586-.0022-.1169 0-.2608.0078-.5509.0664-.787.1888-.7777.4049-1.1163 1.4235-1.313 1.899zm10.5851.0037c-.0268.0487-.0612.1224-.0962.1974-.4599 1.0826-2.0774 4.831-4.2018 7.3733-.0515.063-.0796.1031-.1042.1467-.0492.0846-.0388.1535 0 .1935.0572.0641.2235.0654.474.0157 3.8998-.81 6.628-2.6606 6.628-4.8149 0-1.1925-.836-2.2928-2.2472-3.1745-.1161-.073-.1934-.0871-.25-.083-.1028.0067-.16.0699-.2026.1458zM14.258 15.099c1.173-2.849-1.0483-2.494-1.6467-2.3622-1.0218.225-1.996.613-2.7757.924-2.2226.8883-3.4017 1.782-3.7944 2.1234-.0468.0428-.0833.0742-.1066.0995-.0564.0573-.0967.1178-.0967.2007 0 .0923.08.1688.2362.2229.012.0048.0511.0213.0657.0255 1.696.54 3.722.8557 5.9.8557.0177 0 .0592.0016.1178 0 .2609-.0081.5522-.0677.7871-.1888.7781-.4052 1.1169-1.4234 1.3133-1.9007z"})]})}),Rf="#1554FF",Tf=A.forwardRef(function({title:u="IVECO",color:s="currentColor",size:d=24,...p},h){return s==="default"&&(s=Rf),l.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:d,height:d,fill:s,viewBox:"0 0 24 24",ref:h,...p,children:[l.jsx("title",{children:u}),l.jsx("path",{d:"M.084 10.059a.084.084 0 0 0-.084.084v3.574c0 .046.038.084.084.084h.912a.083.083 0 0 0 .082-.084v-3.574a.083.083 0 0 0-.082-.084zm1.775 0c-.062 0-.105.058-.076.11l1.895 3.257.011.02c.195.306.577.495 1.002.494.426-.001.807-.196.997-.508L7.75 10.17c.028-.046-.007-.111-.076-.111H6.658a.086.086 0 0 0-.074.039l-1.857 2.925c-.017.028-.064.023-.079.006L2.936 10.1a.085.085 0 0 0-.077-.04zm7.598 0c-.73-.001-1.324.488-1.324 1.091v1.557c0 .603.594 1.094 1.324 1.094h3.049a.082.082 0 0 0 .082-.084v-.733a.082.082 0 0 0-.082-.084H9.234c-.017 0-.03-.015-.03-.033V10.99c0-.017.013-.033.03-.033h3.272a.08.08 0 0 0 .082-.082v-.732a.082.082 0 0 0-.082-.084zm5.443 0c-.73-.001-1.324.488-1.324 1.091v1.557c0 .603.594 1.094 1.324 1.094h3.05a.084.084 0 0 0 .083-.084v-.733a.084.084 0 0 0-.084-.084h-3.271c-.018 0-.032-.015-.032-.033V10.99c0-.017.014-.033.032-.033h3.271a.082.082 0 0 0 .084-.082v-.732a.084.084 0 0 0-.084-.084zm5.334 0c-.73 0-1.324.49-1.324 1.093v1.555c0 .603.594 1.094 1.324 1.094h2.442c.73 0 1.324-.49 1.324-1.094v-1.555c0-.603-.594-1.093-1.324-1.093zm-.226.898h2.879c.015 0 .027.012.027.027v1.889a.027.027 0 0 1-.027.027h-2.88a.027.027 0 0 1-.027-.027v-1.889c0-.015.013-.027.028-.027zm-10.215.56a.05.05 0 0 0-.049.051v.73c0 .028.022.052.049.052h2.72a.05.05 0 0 0 .05-.051v-.73a.05.05 0 0 0-.05-.051z"})]})}),If="#000000",Ff=A.forwardRef(function({title:u="Jeep",color:s="currentColor",size:d=24,...p},h){return s==="default"&&(s=If),l.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:d,height:d,fill:s,viewBox:"0 0 24 24",ref:h,...p,children:[l.jsx("title",{children:u}),l.jsx("path",{d:"M4.1651 7.1687v5.2011c0 .6762-.444 1.0777-1.1628 1.0777-.7185 0-1.0992-.5283-1.0992-1.0992v-.9299H0v.9514c0 .972.296 2.7068 3.0235 2.7068 2.7272 0 3.1082-1.8614 3.1082-2.7488V7.1687Zm4.9177 2.1562c-1.7973 0-2.6003 1.6485-2.6003 3.0657 0 1.4168.9094 2.7912 2.7695 2.7912 1.6285.021 2.707-1.0361 2.707-1.8187h-1.7977s-.2113.5078-.8458.5078c-.6343 0-.9934-.3596-.9934-1.2265h3.6576c0-2.7277-1.3526-3.3195-2.897-3.3195zm5.8471 0c-1.7968 0-2.6007 1.6485-2.6007 3.0657 0 1.4168.9094 2.7912 2.7705 2.7912 1.628.021 2.7067-1.0361 2.7067-1.8187h-1.7978s-.2116.5078-.8454.5078c-.6348 0-.9942-.3596-.9942-1.2265h3.6574c0-2.7277-1.3523-3.3195-2.8965-3.3195zm6.7435.0635c-.9132 0-1.3186.4962-1.3401.522-.1283.1538-.2875.3165-.2875-.0782v-.2959h-1.8193v7.295h1.8398V14.822c0-.148.1478-.126.2543 0 .1063.1277.5711.4443 1.3752.4443C23.155 15.2663 24 13.9978 24 12.264c0-2.2415-1.4162-2.8757-2.3266-2.8756Zm-12.401 1.1203c.6766 0 .972.5073.972 1.0365H8.3843c0-.5718.2327-1.0365.8882-1.0365zm5.8468 0c.6767 0 .9724.5073.9724 1.0365H14.231c0-.5718.2332-1.0365.8883-1.0365zm5.9204.296c.9318 0 1.1.7189 1.1 1.4593 0 .74-.1272 1.7124-1.0141 1.7124-.8884 0-1.1212-.5709-1.1017-1.6486.022-1.0788.4441-1.523 1.0158-1.523zm2.2813 4.5664a.5855.5855 0 0 0-.5856.5857c0 .3233.2617.5856.5856.5856.3218 0 .585-.2623.585-.5856 0-.3233-.2632-.5857-.585-.5857zm0 .062a.524.524 0 0 1 .5236.5237c0 .2884-.2346.5246-.5236.5246a.5258.5258 0 0 1-.525-.5246c0-.289.2352-.5236.525-.5236zm-.2108.2024v.6208h.0725v-.2689h.1764l.1159.269h.0806l-.1216-.2873c.0386-.0133.0514-.0227.072-.0447.0266-.0287.0434-.0739.0434-.115 0-.1034-.0796-.174-.195-.174zm.0705.0676h.1722c.072 0 .1177.041.1177.1045 0 .072-.0485.1168-.1278.1168h-.1621z"})]})}),Of="#05141F",Af=A.forwardRef(function({title:u="Kia",color:s="currentColor",size:d=24,...p},h){return s==="default"&&(s=Of),l.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:d,height:d,fill:s,viewBox:"0 0 24 24",ref:h,...p,children:[l.jsx("title",{children:u}),l.jsx("path",{d:"M13.923 14.175c0 .046.015.072.041.072a.123.123 0 0 0 .058-.024l7.48-4.854a.72.72 0 0 1 .432-.13h1.644c.252 0 .422.168.422.42v3.139c0 .38-.084.6-.42.801l-1.994 1.2a.137.137 0 0 1-.067.024c-.024 0-.048-.019-.048-.088v-3.663c0-.043-.012-.071-.041-.071a.113.113 0 0 0-.058.024l-5.466 3.551a.733.733 0 0 1-.42.127h-3.624c-.254 0-.422-.168-.422-.422V9.757c0-.033-.015-.064-.044-.064a.118.118 0 0 0-.057.024L7.732 11.88c-.036.024-.046.041-.046.058 0 .014.008.029.032.055l2.577 2.575c.034.034.058.06.058.089 0 .024-.039.043-.084.043H7.94c-.183 0-.324-.026-.423-.125l-1.562-1.56a.067.067 0 0 0-.048-.024.103.103 0 0 0-.048.015l-2.61 1.57a.72.72 0 0 1-.423.122H.425C.168 14.7 0 14.53 0 14.279v-3.08c0-.38.084-.6.422-.8L2.43 9.192a.103.103 0 0 1 .052-.016c.032 0 .048.03.048.1V13.4c0 .043.01.063.041.063a.144.144 0 0 0 .06-.024L9.407 9.36a.733.733 0 0 1 .446-.124h3.648c.252 0 .422.168.422.42l-.002 4.518z"})]})}),$f="#FF6600",Df=A.forwardRef(function({title:u="KTM",color:s="currentColor",size:d=24,...p},h){return s==="default"&&(s=$f),l.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:d,height:d,fill:s,viewBox:"0 0 24 24",ref:h,...p,children:[l.jsx("title",{children:u}),l.jsx("path",{d:"M0 15.735h3.354l.843-2.06 1.55 2.06h7.225l2.234-2.081-.372 2.081h2.83L20 13.675l-.32 2.06h3.052L24 9.99h-3.068l-2.486 2.191.48-2.19h-2.942l-3.209 3.216 1.342-3.938h4.907l.225-1.003H6.381l-.378 1.003h4.732l-1.994 5.054-1.572-2.066L9.886 9.99H7.612l-2.787 2.23.938-2.23H2.44L0 15.735Z"})]})}),Vf="#E40045",Bf=A.forwardRef(function({title:u="MAN",color:s="currentColor",size:d=24,...p},h){return s==="default"&&(s=Vf),l.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:d,height:d,fill:s,viewBox:"0 0 24 24",ref:h,...p,children:[l.jsx("title",{children:u}),l.jsx("path",{d:"M10.979 14.943h2.05L15.46 18.7h-2.054l-.263-.409h-2.278l-.264.41H8.548zm1.025 1.568l-.458.711h.916l-.458-.712zM0 17.372C0 10.704 5.372 5.3 12 5.3s12 5.405 12 12.073c0 .449-.024.892-.072 1.328H22.58c.054-.435.082-.878.082-1.328 0-5.924-4.774-10.726-10.662-10.726-5.889 0-10.661 4.802-10.661 10.726 0 .45.027.893.08 1.328H.073A12.254 12.274 0 0 1 0 17.372zm2.237-2.43h1.83l1.22 1.228 1.22-1.227h1.831V18.7H6.363v-1.38l-1.075 1.082-1.076-1.082v1.38H2.237v-3.757zm13.42 0h1.927l2.17 1.62v-1.62h1.975V18.7h-1.942l-2.156-1.605V18.7h-1.975Z"})]})}),Hf="#101010",Uf=A.forwardRef(function({title:u="Mazda",color:s="currentColor",size:d=24,...p},h){return s==="default"&&(s=Hf),l.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:d,height:d,fill:s,viewBox:"0 0 24 24",ref:h,...p,children:[l.jsx("title",{children:u}),l.jsx("path",{d:"M11.999 12.876c-.036 0-.105-.046-.222-.26a7.531 7.531 0 00-1.975-2.353A8.255 8.255 0 007.7 9.065a17.945 17.945 0 00-.345-.136c-1.012-.4-2.061-.813-3.035-1.377A8.982 8.982 0 014 7.362c.194-.34.42-.665.67-.962a6.055 6.055 0 011.253-1.131 7.126 7.126 0 011.618-.806c1.218-.434 2.677-.647 4.458-.649 1.783.002 3.241.215 4.459.65a7.097 7.097 0 011.619.805c.471.319.892.699 1.253 1.13.25.298.475.623.67.963-.103.064-.212.129-.32.192-.976.564-2.023.977-3.037 1.376l-.345.136a8.26 8.26 0 00-2.1 1.198 7.519 7.519 0 00-1.975 2.354c-.117.213-.187.259-.224.259m0 7.072c-1.544-.002-2.798-.129-3.83-.387-1.013-.252-1.855-.64-2.576-1.188a5.792 5.792 0 01-1.392-1.537 7.607 7.607 0 01-.81-1.768 10.298 10.298 0 01-.467-2.983c0-.674.047-1.313.135-1.901 1.106.596 2.153.895 3.08 1.16l.215.06c1.29.371 2.314.857 3.135 1.488.475.368.89.793 1.23 1.264.369.508.663 1.088.877 1.725.096.289.2.468.403.468.207 0 .308-.18.405-.468a6.124 6.124 0 012.107-2.988c.82-.632 1.845-1.118 3.135-1.489l.216-.06c.926-.265 1.973-.564 3.078-1.16.09.589.136 1.227.136 1.9 0 .458-.046 1.664-.465 2.984a7.626 7.626 0 01-.809 1.768 5.789 5.789 0 01-1.396 1.537c-.723.548-1.565.936-2.574 1.188-1.035.258-2.288.385-3.833.387m9.692-14.556c-1.909-2.05-4.99-2.99-9.692-2.995-4.7.005-7.781.944-9.69 2.994C.89 6.913 0 9.018 0 11.874c0 1.579.39 5.6 3.564 7.676 1.9 1.242 4.354 2.046 8.435 2.052 4.083-.006 6.536-.81 8.437-2.052C23.609 17.474 24 13.452 24 11.874c0-2.848-.897-4.968-2.31-6.483Z"})]})}),Wf="#E60012",qf=A.forwardRef(function({title:u="Mitsubishi",color:s="currentColor",size:d=24,...p},h){return s==="default"&&(s=Wf),l.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:d,height:d,fill:s,viewBox:"0 0 24 24",ref:h,...p,children:[l.jsx("title",{children:u}),l.jsx("path",{d:"M8 22.38H0l4-6.92h8zm8 0h8l-4-6.92h-8zm0-13.84l-4-6.92-4 6.92 4 6.92Z"})]})}),Qf="#C3002F",Yf=A.forwardRef(function({title:u="Nissan",color:s="currentColor",size:d=24,...p},h){return s==="default"&&(s=Qf),l.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:d,height:d,fill:s,viewBox:"0 0 24 24",ref:h,...p,children:[l.jsx("title",{children:u}),l.jsx("path",{d:"M20.576 14.955l-.01.028c-1.247 3.643-4.685 6.086-8.561 6.086-3.876 0-7.32-2.448-8.562-6.09l-.01-.029H.71v.329l1.133.133c.7.08.847.39 1.038.78l.048.096c1.638 3.495 5.204 5.752 9.08 5.752 3.877 0 7.443-2.257 9.081-5.747l.048-.095c.19-.39.338-.7 1.038-.781l1.134-.134v-.328zM3.443 9.012c1.247-3.643 4.686-6.09 8.562-6.09 3.876 0 7.319 2.447 8.562 6.09l.01.028h2.728v-.328l-1.134-.133c-.7-.081-.847-.39-1.038-.781l-.047-.096C19.448 4.217 15.88 1.96 12.005 1.96c-3.881 0-7.443 2.257-9.081 5.752l-.048.095c-.19.39-.338.7-1.038.781l-1.133.133v.329h2.724zm13.862 1.586l-1.743 2.795h.752l.31-.5h2.033l.31.5h.747l-1.743-2.795zm1.033 1.766h-1.395l.7-1.124zm2.81-1.066l2.071 2.095H24v-2.795h-.614v2.085l-2.062-2.085h-.795v2.795h.619zM0 13.393h.619v-2.095l2.076 2.095h.781v-2.795h-.619v2.085L.795 10.598H0zm4.843-2.795h.619v2.795h-.62zm4.486 2.204c-.02.005-.096.005-.124.005H6.743v.572h2.5c.019 0 .167 0 .195-.005.51-.048.743-.472.743-.843 0-.381-.243-.79-.705-.833-.09-.01-.166-.01-.2-.01H7.643a.83.83 0 0 1-.181-.014c-.129-.034-.176-.148-.176-.243 0-.086.047-.2.18-.238a.68.68 0 0 1 .172-.014h2.357v-.562H7.6c-.1 0-.176.004-.238.014a.792.792 0 0 0-.695.805c0 .343.214.743.685.81.086.009.205.009.258.009H9.2c.029 0 .1 0 .114.005.181.023.243.157.243.276a.262.262 0 0 1-.228.266zm4.657 0c-.02.005-.096.005-.129.005H11.4v.572h2.5c.019 0 .167 0 .195-.005.51-.048.743-.472.743-.843 0-.381-.243-.79-.705-.833-.09-.01-.166-.01-.2-.01H12.3a.83.83 0 0 1-.181-.014c-.129-.034-.176-.148-.176-.243 0-.086.047-.2.18-.238a.68.68 0 0 1 .172-.014h2.357v-.562h-2.395c-.1 0-.176.004-.238.014a.792.792 0 0 0-.695.805c0 .343.214.743.686.81.085.009.204.009.257.009h1.59c.029 0 .1 0 .114.005.181.023.243.157.243.276a.267.267 0 0 1-.228.266Z"})]})}),Gf="#000000",Kf=A.forwardRef(function({title:u="Peugeot",color:s="currentColor",size:d=24,...p},h){return s==="default"&&(s=Gf),l.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:d,height:d,fill:s,viewBox:"0 0 24 24",ref:h,...p,children:[l.jsx("title",{children:u}),l.jsx("path",{d:"M12.0001 0c3.499 0 7.1308.2987 10.8171.9349.055 1.4778.1175 3.762.0126 5.7004-.2349 4.3217-1.1861 7.676-2.9943 10.5564-1.8026 2.872-4.5938 5.3416-7.8354 6.8083-3.2416-1.4667-6.0331-3.9362-7.8356-6.8083-1.808-2.8804-2.7594-6.2348-2.9941-10.5564-.1053-1.9383-.0427-4.2226.0124-5.7004C4.8691.2987 8.5011 0 12.0001 0zm0 .4163c-3.4494 0-6.9514.2933-10.4139.8722-.076 2.1923-.076 3.9367-.0005 5.3243.2305 4.248 1.1619 7.5394 2.9309 10.3575 1.7688 2.8179 4.421 5.1457 7.4835 6.5718 3.0622-1.4261 5.7147-3.7539 7.4835-6.5718 1.769-2.8182 2.7001-6.1095 2.9309-10.3575.0755-1.3876.0755-3.132-.0005-5.3243C18.9515.7096 15.4493.4163 12.0001.4163zM11.97 13.0361s.0681.4045.0888.5218c.0116.0665.0141.0843-.0027.1495-.0477.1695-.3633 1.59-.5385 2.6258-.0822.4767-.1533.9498-.1947 1.3546-.0234.23-.0158.2851.0449.4892.172.5767.8082 2.0834.9304 2.3581a.3288.3288 0 0 1 .0257.0951l.0459.3553c-.2038-.3081-1.3115-2.3458-1.7465-3.4742-.0513-.1329-.0612-.1984-.0044-.4428.3025-1.2962 1.1211-3.4992 1.3511-4.0324zm-1.6153-3.1317c.0312.0913.2909.9805.3107 1.1919.016.1174.0133.149-.0284.2614-.2276.606-.9159 2.1129-1.1814 2.6161-.059.1107-.1145.1828-.2256.2958-.2535.2582-.7386.7462-1.039 1.0192-.1091.0993-.1385.1841-.1607.3126-.0358.2063-.0713.5584-.0812.7402-.0086.1599.0173.2347.1064.3931.5294.9451 2.2966 3.1194 2.8001 3.576.0365.0331.0632.0553.1402.1065.074.0494.3154.2061.3154.2061a.085.085 0 0 1 .0239.0257l.0874.1539c-.2256-.1123-.5874-.2928-.7742-.3929a.7527.7527 0 0 1-.1249-.0845c-.5896-.4902-2.3963-2.6064-2.9277-3.49-.1325-.2206-.1461-.292-.1283-.5008.0333-.3887.0849-.8774.1301-1.0916.0274-.1292.0558-.2051.1547-.3192.7533-.8648 2.2059-2.7743 2.6293-3.5908.0471-.0924.0511-.1245.0521-.2117.0027-.253-.078-.7457-.0992-.8702a.2385.2385 0 0 1-.0025-.0591l.0228-.2877zm4.931-.4748c.0812.0377.2137.0801.2732.1502.9366.9784 1.6856 1.9929 1.8356 2.2603.0289.0514.0486.1028.0558.1616.1683 1.4269.0237 2.9385-.3201 4.2535-.0311.1186-.0659.1794-.1799.2651-.7607.5713-2.5689 2.0716-3.176 2.6297a.996.996 0 0 0-.1718.2088c-.153.2511-.3419.6012-.462.825-.1234-.2696-.3924-.9273-.4847-1.1931-.0301-.0867-.0355-.1322-.0037-.2483.1505-.5512.862-2.1538 1.0005-2.4436-.0018.0372.0063.1347-.0079.1693-.0624.1895-.445 1.4526-.5227 2.0003-.0173.1218-.0158.1547 0 .2743.0341.2557.1868.7247.1868.7247.0174-.0414.1887-.3836.309-.4774.7089-.6984 2.1971-1.9725 3.0499-2.6638.0958-.0776.1315-.1295.1528-.2767.1056-.7254.1362-2.0275.0726-2.9751a1.012 1.012 0 0 0-.1708-.5003c-.231-.3417-.5072-.6651-.926-1.0805a.4152.4152 0 0 1-.1157-.2187c-.1222-.6524-.3949-1.8453-.3949-1.8453zm-7.9201 1.5091a.3306.3306 0 0 1 .1794-.0067c.267.0642.8322.2029 1.2594.3123.06.0153.1347.0714.1666.1245l.093.1549a.1822.1822 0 0 1 .0059.1774 21.7947 21.7947 0 0 1-.3055.5651l-.0886.1583c-.1631.2896-.3254.5691-.4176.7161-.0607.0971-.0945.1401-.2026.1784-.4203.148-.9423.3249-1.2525.4255-.0634.0205-.0849.0591-.0726.1295.0222.1282.0938.5636.1212.6906.0101.0469.0476.0843.1172.0709.1834-.0348.6715-.1544.6715-.1544s-.1439.1332-.23.2117a.1456.1456 0 0 1-.0545.0324c-.133.0445-.4578.1356-.559.1579-.079.017-.1293-.0141-.1496-.1035 0 0-.1385-.59-.1885-.7907a1.552 1.552 0 0 0-.0254-.0872c-.0375-.1161-.1276-.3444-.1784-.464a.108.108 0 0 1-.0087-.044c.0015-.1366.0267-.4415.0267-.4415s.2989.2804.4435.3817c.0326.023.0521.0277.0921.0175.1987-.0511.6555-.2024.9062-.2962a.3475.3475 0 0 0 .1463-.1048c.2594-.3135.5846-.8013.7725-1.1692a.2194.2194 0 0 0 .0146-.1631l-.0405-.1334c-.0118-.039-.0531-.083-.0911-.0976a34.0249 34.0249 0 0 0-1.1999-.4329l.0489-.0155zm8.7416-3.7975a.407.407 0 0 1 .2994.0069c.7409.3113 1.9867 1.0437 2.6792 1.5596.0669.0499.0935.0843.1111.1648.1626.7402.2243 1.8845.1219 2.8478-.0074.0692-.0212.1107-.0573.1846-.4388.8981-.9326 1.7434-1.4524 2.3954.0078-.0807.0446-.4617.0471-.6834a.0765.0765 0 0 1 .0304-.0605 9.0576 9.0576 0 0 0 .304-.2468c.0365-.0316.0568-.0553.0758-.086.2117-.3425.5903-1.0595.7428-1.4909a.787.787 0 0 0 .0429-.3281c-.0489-.6011-.1431-1.434-.2836-1.9776a.3337.3337 0 0 0-.1703-.2147c-.1212-.0623-.3588-.1707-.9-.3879a.7631.7631 0 0 1-.2068-.1238c-.3549-.2985-.9097-.7459-1.2549-1.0034a.4301.4301 0 0 0-.3527-.0749 21.4993 21.4993 0 0 0-.7517.1856c-.0612.0166-.0854.018-.1486.0106-.1009-.0117-.3007-.0275-.382-.0336.5871-.2761 1.152-.5142 1.5057-.6437zM8.274 12.0001c-.1836.3024-.403.6236-.5689.8243a.1988.1988 0 0 1-.0834.0588 14.1489 14.1489 0 0 1-.7063.2382l1.3586-1.1213zm-2.4267-.397l-.1083.7484-.3685-.4329c.0671-.1455.2633-.2829.4768-.3155zm-.6866-1.6986l-.133.0838c-.0333.0212-.0424.0304-.0563.0595a2.6968 2.6968 0 0 1-.0856.1616c-.0091.0158-.0336.0403-.0466.0504a16.6112 16.6112 0 0 1-.4773.3533c-.0089.0062-.0202.0035-.0279-.004-.0165-.0166-.0859-.0954-.0982-.1139a.0823.0823 0 0 1-.0151-.0489 2.0329 2.0329 0 0 1 .0062-.1337c.0039-.0509.0185-.0751.0805-.1394.0693-.0719.1449-.1475.2243-.2251.1947-.1641.6863-.5633 1.5642-1.1904a.1927.1927 0 0 0 .0437-.0423c.0921-.1244.354-.4644.4186-.5452a.1928.1928 0 0 1 .0308-.0311 2.4849 2.4849 0 0 1 .2595-.1833c.2445-.1542.7181-.4354.9834-.5898l-.1007.124c-.0056.0055-.0111.0106-.0167.0163a42.2875 42.2875 0 0 0-.5625.4314c-.0286.0227-.04.0425-.0466.0783-.0227.1266-.0605.367-.0716.5001-.0032.039-.02.0583-.0597.0744-.173.0704-.3781.1445-.5439.211-.0356.0141-.0454.0195-.0664.0356-.0166.0128-.2369.2098-.2369.2098s.479-.1181.6547-.1579c.042-.0094.06-.0069.0987.0114.0363.0168.0967.0408.1286.0524.0489.018.0748.0172.1288.0054.1979-.0442.5308-.1233.708-.1695.0921-.024.1424-.0489.2204-.1035.0849-.0591.2999-.2205.2999-.2205s-.004.0285-.0069.0443a.0591.0591 0 0 1-.0161.0318 3.986 3.986 0 0 1-.1581.1777c-.0871.0902-.1392.1223-.2485.168-.5035.21-1.3638.5362-2.0091.7598-.0423.0148-.0606.0269-.0919.059-.0341.0346-.0795.085-.0795.085s.5262.0383.6868.0568c.0521.0059.0893.023.1291.0573.132.1137.5691.5641.6999.7205 0 0-1.2426.2068-1.8184.3499-.0711.0175-.1066.0628-.1227.1198-.0476.1675-.1599.7062-.1599.7062s-.04-.0128-.0958-.045c-.0383-.022-.0577-.0403-.0997-.0847-.1362-.144-.3601-.4198-.4677-.5796-.0316-.0472-.0449-.1072-.0054-.1554.1167-.1438.3512-.4062.4805-.5411.0138-.0146.0313-.04.0499-.0766.0498-.1032.1038-.3175.1282-.4139zm8.0217-2.8166a.1805.1805 0 0 1 .1083.0148l.2564.1228a.0935.0935 0 0 1 .0503.0628c.0348.1468.0775.3412.1061.5065a.2993.2993 0 0 1-.036.1994c-.1061.1846-.324.5166-.446.695-.0271.04-.0304.0885-.022.1361.0553.3059.2858 1.374.2858 1.374l-.1451-.1322a.2102.2102 0 0 1-.0602-.0917c-.1032-.3022-.2962-.9335-.385-1.2406a.1588.1588 0 0 1 .0299-.145c.1513-.1838.3717-.4778.5005-.6641.036-.0524.0479-.1102.0267-.1534a4.6142 4.6142 0 0 0-.1273-.2369.1058.1058 0 0 0-.0597-.0489l-.174-.0558a.1452.1452 0 0 0-.093.0017c-.3791.1376-.8889.336-1.2009.4655-.0457.019-.0644.0205-.1197.0121-.0903-.0133-.3534-.0605-.4825-.0847a.0344.0344 0 0 1-.023-.0511l.153-.2654a.1474.1474 0 0 1 .0955-.0704c.4922-.1123 1.143-.2413 1.7619-.3505zM7.7369 8.3065a.0544.0544 0 0 1 .0548.0326c.0309.072.0225.1523-.0074.2209-.0116.028-.0474.0551-.0767.0616l-.2456.0546a.0227.0227 0 0 1-.0274-.0237l.023-.2886a.04.04 0 0 1 .0365-.0366l.2428-.0208zm2.7941-1.8543a.0366.0366 0 0 1 .0321.0549l-.5987 1.032a.2643.2643 0 0 1-.1552.126l-1.1227.3516a1.6503 1.6503 0 0 1-.3761.0712c-.249.0188-.9886.042-.9886.042l.0162-.0351a.0741.0741 0 0 1 .038-.0368l.35-.1487a.169.169 0 0 0 .0666-.0502l.5405-.6661c.0289-.0356.0666-.0697.1069-.0909.357-.1881.992-.4705 1.4368-.6192a.5085.5085 0 0 1 .1426-.0235l.5116-.0072zm-.6002-1.1984c1.2389-.109 2.9153-.1386 4.5168-.0173a.837.837 0 0 1 .2638.064c.5247.2209 1.4556.7042 2.4906 1.2969a.7764.7764 0 0 1 .1281.0917c.2742.2419.9689.9535.9689.9535l-.2167-.043a.2282.2282 0 0 1-.0844-.0351c-.4383-.2948-1.0782-.6785-1.6145-.949a.5915.5915 0 0 0-.2034-.0598 14.6895 14.6895 0 0 0-.8443-.0618c-.1138-.0047-.1913-.0237-.3026-.0803-.2127-.108-.728-.342-.9847-.44-.1098-.042-.1658-.0519-.2734-.0502-.441.0064-1.4457.0385-1.9588.0704a.2445.2445 0 0 1-.0521-.0025l-.2445-.0383c.6935-.1196 2.4077-.2725 3.1172-.3098l-.2887-.0966a.596.596 0 0 0-.1728-.0299c-.9698-.0218-2.3036-.0178-3.4321.067a.6098.6098 0 0 0-.2021.0504c-.3228.1419-1.11.5692-1.8994 1.0081-.2546.1416-.529.2952-.7731.4326 0 0 .0985-.1268.1175-.1515.0168-.0215.0219-.0255.0447-.0403.1018-.0684.4109-.2678.5343-.3585.2377-.1794.6128-.4956.8364-.6916a.6677.6677 0 0 0 .1288-.1529c.0723-.1171.1513-.2441.1999-.3145.0414-.0611.1123-.1038.2006-.1117zM4.655 2.404c.306-.0316.477.0875.477.3975v.1715c0 .3172-.171.4455-.477.4774a71.2552 71.2552 0 0 0-1.269.144v.4687c-.0886.0109-.1774.0218-.266.0331V2.5814a70.6625 70.6625 0 0 1 1.535-.1774zm14.2032-.0491a71.245 71.245 0 0 1 2.022.2263v.2444a68.7666 68.7666 0 0 0-.8741-.105v1.2707a94.0383 94.0383 0 0 0-.2663-.0299V2.6906a68.3322 68.3322 0 0 0-.8815-.0914v-.2443zM7.6494 2.1558v.2441a71.8527 71.8527 0 0 0-1.6641.1223v.3731a68.5725 68.5725 0 0 1 1.48-.1107v.2444a70.5409 70.5409 0 0 0-1.48.1104v.4094a69.7002 69.7002 0 0 1 1.6641-.1223v.2441a70.9377 70.9377 0 0 0-1.9245.145v-1.515a70.5346 70.5346 0 0 1 1.9245-.1448zm8.6326.4149c0-.3397.1683-.4097.5476-.384.3332.023.6658.0479.9988.0756.3295.0272.5469.1198.5469.4665v.6765c0 .3402-.1878.4015-.5469.3719a72.5525 72.5525 0 0 0-.9988-.0754c-.3628-.0245-.5476-.0946-.5476-.4546v-.6765zm-2.5812-.5284c.6426.0153 1.285.0395 1.9274.0726v.2441a70.7366 70.7366 0 0 0-1.6666-.0657v.3728c.4943.0139.9884.0327 1.4823.0567v.2444a70.4407 70.4407 0 0 0-1.4822-.0566v.4092a69.1564 69.1564 0 0 1 1.6666.066v.2441a71.29 71.29 0 0 0-1.9274-.0726v-1.515zm-3.344-.0013v1.0958c0 .3467-.1819.4228-.5484.4341a68.0289 68.0289 0 0 0-.9573.0361c-.3401.0153-.5479-.0494-.5479-.3926V2.1186l.2606-.0133v1.142c0 .0694.0595.126.1385.1223a70.1195 70.1195 0 0 1 1.2547-.0475c.0795-.0022.1323-.063.1323-.1324v-1.142c.089-.0025.1781-.0047.2675-.0067zm6.3245.3802c-.0792-.0054-.1387.0502-.1387.1295v.7491c0 .0694.0595.1423.1387.1478.4321.0287.8638.0613 1.2954.0978.0691.0059.1382-.0576.1382-.1268v-.7493c0-.0791-.0691-.1445-.1382-.1505a70.1864 70.1864 0 0 0-1.2954-.0976zm-5.1721-.3976c.479-.0035.958-.0017 1.4368.0047v.2441a72.1473 72.1473 0 0 0-1.536-.004c-.0693.0007-.1387.0608-.1387.1302v.759c0 .0694.0693.1381.1387.1374.4593-.004.9183-.0032 1.3776.002v-.4094a66.592 66.592 0 0 0-.7994-.0042v-.2443c.3534 0 .7068.0027 1.0602.0079v.8976a71.1228 71.1228 0 0 0-1.4896-.0064c-.3635.0025-.5484-.0603-.5484-.4136v-.6602c0-.3299.1651-.4383.4988-.4408zm-6.7546.6162l-.0206.0004a70.2289 70.2289 0 0 0-1.348.1522V3.35a71.0344 71.0344 0 0 1 1.348-.152c.0689-.0074.138-.0704.138-.1364v-.3068c0-.0694-.0691-.1218-.138-.1146l.0206-.0004z"})]})}),Jf="#FFCC33",Zf=A.forwardRef(function({title:u="Renault",color:s="currentColor",size:d=24,...p},h){return s==="default"&&(s=Jf),l.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:d,height:d,fill:s,viewBox:"0 0 24 24",ref:h,...p,children:[l.jsx("title",{children:u}),l.jsx("path",{d:"M17.463 11.99l-4.097-7.692-.924 1.707 3.213 5.985-5.483 10.283L4.69 11.99 11.096 0H9.27L2.882 11.99 9.269 24h1.807zm3.655 0L14.711 0h-1.807L6.517 11.99l4.117 7.712.904-1.707-3.193-6.005 5.463-10.263L19.29 11.99 12.904 24h1.807Z"})]})}),Xf="#041E42",e3=A.forwardRef(function({title:u="Scania",color:s="currentColor",size:d=24,...p},h){return s==="default"&&(s=Xf),l.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:d,height:d,fill:s,viewBox:"0 0 24 24",ref:h,...p,children:[l.jsx("title",{children:u}),l.jsx("path",{d:"M12 .6c-2.167 0-4.264.667-6.019 1.888a32.768 32.768 0 0 1-2.167-.48A12.262 12.262 0 0 0 0 8.615a32.75 32.75 0 0 1 1.5 1.636c-.3705 4.3908 2.0301 8.5486 6.018 10.423.247.699.47 1.404.668 2.117a12.266 12.266 0 0 0 7.629 0c.197-.713.42-1.419.667-2.118 3.9876-1.8737 6.3882-6.0307 6.018-10.421.482-.563.982-1.11 1.5-1.636a12.261 12.261 0 0 0-3.814-6.609c-.716.185-1.439.345-2.167.481A10.535 10.535 0 0 0 12 .6zm0 .642c1.806 0 3.562.494 5.086 1.407a32.724 32.724 0 0 1-10.172 0A9.896 9.896 0 0 1 12 1.242zM3.994 2.715c.431.107.865.204 1.301.293a10.537 10.537 0 0 0-3.687 6.387c-.295-.332-.597-.659-.904-.98a11.619 11.619 0 0 1 3.29-5.7zm16.012 0a11.62 11.62 0 0 1 3.29 5.7c-.307.321-.609.648-.904.98a10.537 10.537 0 0 0-3.687-6.387c.436-.089.87-.186 1.301-.293zm-13.873.454a33.353 33.353 0 0 0 11.734 0 9.885 9.885 0 0 1 3.966 6.873 33.352 33.352 0 0 0-5.866 10.16 9.89 9.89 0 0 1-7.935 0 33.367 33.367 0 0 0-5.866-10.16 9.895 9.895 0 0 1 3.967-6.873zm6.018.867a.662.662 0 0 0-.448 1.132.652.652 0 0 0-.971.573.652.652 0 0 0 1.03.535c-.241.404-.606.944-1.13.944-.547 0-.811-.228-1.052-.633a.548.548 0 0 0 .318-.021c.316-.105.493-.423.404-.823-.079-.354-.456-.55-.799-.45a.637.637 0 0 0-.291.18.698.698 0 0 0 .064-.519c-.098-.349-.512-.628-.873-.574l1.415 3.475c-.073.078-.18.196-.256.329-.302-.153-.909-.379-1.514-.135a1.553 1.553 0 0 0-.522.349c-.45.45-.676 1.2-.793 1.731a8.3307 8.3307 0 0 0-.08.415c.188-.141.31-.23.424-.306.102-.068.2-.124.336-.194.247-.127.583-.264.886-.264.163 0 .347.043.472.148.045.037.405.543 1.114.729.666.175.68.287.69.377 0 0-.116.19-.367.365a2.685 2.685 0 0 0-.346-.445c-.331-.346-.862-.532-1.296-.529-.413.004-.718.192-1.526.192-.82 0-1.39-.207-1.81-.454-.302-.164-.52-.37-.723-.535.108.263.213.472.307.684.07.151.327.667.648.947.413.35.822.465 1.224.465.408 0 .81-.119 1.206-.236.39-.116.766-.228 1.142-.228.487 0 .752.163.964.294a6.196 6.196 0 0 1-.225.15c-.3.191-.539.262-.771.262-.286 0-.801-.15-1.25-.33a1.2368 1.2368 0 0 0-.006.102v.116c0 .253.041.557.326.85.123.125.275.222.454.29.187.07.407.105.646.117-.109.1-.211.194-.31.316-.24.296-.435.692-.435 1.202 0 .262.046.481.111.691.047.149.093.284.157.445l.212-.255c.004-.004.236-.278.555-.51a2.98 2.98 0 0 0-.326 1.325c0 1.012.563 1.834 1.332 2.48 0 0 .183.163.312.263-.003-.162 0-.267 0-.408 0-.493.08-1.448.405-2.025.035.135.075.334.11.558.045.298.081.641.081.94 0 .496-.072.863-.156 1.127-.098.304-.18.42-.255.547a3.34 3.34 0 0 0 .882-.09 2.3 2.3 0 0 0 1.72-1.555c.09-.283.136-.596.136-.94 0-.198-.018-.403-.046-.603l-.024-.16c.055.044.093.085.14.138.18.207.343.524.343 1.036 0 .175-.01.445-.084.749.174-.058.351-.163.52-.27.204-.13.397-.284.572-.46.48-.48.811-1.117.818-1.845.005-.475-.096-.855-.32-1.299-.024-.048-.052-.097-.077-.146.052.022.101.05.147.08.255.164.42.424.53.718.066.177.114.35.147.554.074-.09.162-.212.262-.385.201-.348.414-.883.414-1.647 0-.375-.049-.806-.22-1.255a2.883 2.883 0 0 0-.85-1.202c.2643.0287.511.146.7.333.125.126.223.28.313.452l.095.19c.009-.093.008-.123.01-.204-.02-1.351-.397-2.34-1.626-2.978l-.007-.004c.43-.488.638-1.038.783-1.63-.296-.075-.843-.138-1.673.25l1.32-3.254c-.362-.054-.775.225-.873.574a.695.695 0 0 0 .065.519.642.642 0 0 0-.292-.181c-.343-.1-.72.097-.8.451-.088.4.089.718.405.822.134.04.177.045.318.021-.241.405-.494.629-1.041.629-.524 0-.892-.535-1.133-.94 0 0 .246.122.385.122a.651.651 0 0 0 .645-.657.652.652 0 0 0-.645-.658.634.634 0 0 0-.33.093.694.694 0 0 0 .202-.481.651.651 0 0 0-.645-.658zm3.608 3.585h.147l-.047.14c-.151.447-.629 1.516-1.802 1.779l.005.022.05.247c.497-.092.817-.303 1.107-.555.742.361 1.242.961 1.42 1.76l.034.157a.668.668 0 0 0-.114-.1 1.345 1.345 0 0 0-.719-.194c-.262 0-.489.063-.602.102.186.159.337.297.471.431.41.411.677.803.837 1.235.12.326.18.67.18 1.048 0 .403-.072.772-.213 1.098-.011.026-.04.092-.052.127a.706.706 0 0 0-.044-.126c-.341-.72-.91-.872-1.328-.872-.07 0-.13.004-.184.008l.006.01c.278.428.698 1.075.698 1.87 0 .26-.048.516-.142.759a2.4 2.4 0 0 1-.55.83c-.118.117-.222.214-.397.333l-.1.071a.465.465 0 0 0 .02-.12c.024-.897-.475-1.61-1.272-1.827l.018.076c.087.353.186.752.186 1.292 0 .583-.145 1.066-.43 1.436a1.954 1.954 0 0 1-.688.556 2.23 2.23 0 0 1-.652.219l-.109.018c.011-.014.034-.063.045-.087a1.0898 1.0898 0 0 0 .054-.161c.124-.455.127-1.001.127-1.069 0-.845-.21-1.618-.336-2.08l-.026-.098c-.1.074-.166.14-.211.186l-.02.021c-.263.263-.455.723-.57 1.367-.035.197-.052.362-.07.537l-.013.195-.003.121s-.072-.08-.09-.098a4.643 4.643 0 0 1-.188-.204 3.207 3.207 0 0 1-.483-.71 2.495 2.495 0 0 1-.177-.482 2.302 2.302 0 0 1-.07-.561c0-1.062.641-1.774.918-2.058l-.09.016a3.31 3.31 0 0 0-.326.08 2.172 2.172 0 0 0-.546.252 3.171 3.171 0 0 0-.603.513s-.018-.083-.021-.107a2.518 2.518 0 0 1-.04-.391c0-.441.168-.833.5-1.163.312-.313.551-.413 1.265-.712l.218-.091-.314.043c-.438.062-.638.09-1.009.09-.525 0-.887-.107-1.106-.327a.75.75 0 0 1-.123-.158 1.549 1.549 0 0 1-.117-.243l.272.099c.054.017.117.036.17.05a1.9 1.9 0 0 0 .49.07c.444 0 .804-.194 1.24-.508.182-.13.336-.258.456-.378.182-.182.221-.28.222-.297-.008-.269-.016-.523-.951-.768a1.782 1.782 0 0 1-.913-.59.8119.8119 0 0 0-.063-.068 1.046 1.046 0 0 0-.682-.229c-.196 0-.409.043-.651.132a4.7942 4.7942 0 0 0-.395.166l-.108.05.036-.113c.04-.132.085-.252.144-.391.05-.118.1-.22.156-.314.184-.31.412-.522.676-.629.138-.056.288-.084.447-.084.385 0 .732.167.875.247.01.71.438 1.12.93 1.12a.856.856 0 0 0 .643-.275c.121-.122.196-.258.244-.366.039-.087.067-.15.07-.2l.005.001a.496.496 0 0 1 .211.132l.236-.21a1.118 1.118 0 0 0-.401-.264 1.424 1.424 0 0 0-.464-.098 1.68 1.68 0 0 0-.36.026c-.123.02-.222.048-.396.048a.693.693 0 0 1-.358-.09 1.73 1.73 0 0 1 .525-.535l.006-.004h3.817l.074.003a3.287 3.287 0 0 0-.747.655l.215.17c.498-.622 1.272-1.01 2.02-1.01v.001zm-.457.494c-.621.08-1.182.635-1.182.635l.127.27c.293-.062.521-.22.69-.389.248-.248.347-.437.365-.516zm-5.542.543l.138.038c.055.016.132.032.207.042l.036.006.007.035a.27.27 0 0 0 .072.144.302.302 0 0 0 .43 0 .297.297 0 0 0 .088-.196l.002-.048.047-.002a2.6025 2.6025 0 0 1 .22 0l.117.008-.018.07a.852.852 0 0 1-.228.425.609.609 0 0 1-.469.192.578.578 0 0 1-.41-.175.81.81 0 0 1-.219-.43l-.02-.109zm4.513 1.49l-.133.416c.085.098.148.19.2.267.146.214.238.41.29.614.05.2.056.392.056.57 0 .142-.015.285-.046.425-.022.101-.053.21-.079.293-.024.08-.079.226-.079.226s-.008-.165-.023-.255-.029-.186-.053-.264a1.437 1.437 0 0 0-.353-.604 1.41 1.41 0 0 0-.35-.253 1.821 1.821 0 0 0-.284-.118c.022.083.045.173.07.28.064.276.093.504.093.716 0 .337-.075.622-.232.871a1.323 1.323 0 0 1-.187.234 2.039 2.039 0 0 1-.386.316c.036-.06.065-.122.1-.193.042-.087.068-.18.087-.248.186-.657-.121-1.063-.37-1.312a2.3783 2.3783 0 0 0-.103-.098c-.004.092-.008.184-.014.277-.022.318-.08.68-.35.948a1.942 1.942 0 0 1-.139.13c-.052.042-.111.092-.19.14.033-.064.06-.096.11-.218a.97.97 0 0 0-.029-.78l-.34.183c.01.025.017.052.024.076a.71.71 0 0 1-.086.577c-.05.08-.115.16-.204.25-.079.077-.162.152-.235.218l-.156.141.139-.001c.15-.002.35-.01.563-.047.34-.062.605-.192.813-.4a1.34 1.34 0 0 0 .218-.287c-.01.11-.037.222-.084.34a2.265 2.265 0 0 1-.239.436c-.065.095-.138.2-.232.315l-.086.105.134-.02c.162-.023.323-.056.48-.098a1.742 1.742 0 0 0 1.078-.777c.1-.158.172-.323.218-.504a2.35 2.35 0 0 0 .066-.696c.03.052.057.109.083.172.054.136.09.29.11.47.01.112.016.235.016.385v.03c0 .144 0 .281-.011.436l-.011.152.103-.112c.134-.147.279-.315.427-.55a2.543 2.543 0 0 0 .332-1.978 2.31 2.31 0 0 0-.359-.76 3.15 3.15 0 0 0-.349-.417l-.018-.019zm-3.275.165a.5.5 0 0 0-.215.049c.273.029.341.113.467.238.066.067.129.138.194.204.12.12.231.219.436.219a.613.613 0 0 0 .157-.022.981.981 0 0 0 .305-.141.528.528 0 0 1-.203.041c-.511 0-.663-.588-1.14-.588h-.001zm-5.83.1c.06.038.186.127.365.2.167.07.343.135.55.184.278.065.586.097.94.097.326 0 .717-.052 1.162-.153.143-.032.292-.062.413-.062.215 0 .424.035.578.116.153.082.261.17.395.279a2.71 2.71 0 0 0-.48-.071c-.143-.01-.34.003-.465.022-.28.041-.525.114-.783.19l-.03.01c-.39.115-.759.224-1.123.224-.422 0-.803-.157-1.101-.455-.065-.065-.171-.17-.242-.27a1.994 1.994 0 0 1-.179-.31v-.001zm-3.061.567a32.694 32.694 0 0 1 5.084 8.805 9.895 9.895 0 0 1-5.086-8.647c0-.054 0-.106.002-.158zm19.786 0l.002.157a9.895 9.895 0 0 1-5.086 8.648 32.665 32.665 0 0 1 5.085-8.805h-.001zM8.313 21.007a10.535 10.535 0 0 0 7.375 0c-.14.423-.273.847-.396 1.274a11.616 11.616 0 0 1-6.583 0 33.2233 33.2233 0 0 0-.397-1.273l.001-.001z"})]})}),t3="#013C74",n3=A.forwardRef(function({title:u="Subaru",color:s="currentColor",size:d=24,...p},h){return s==="default"&&(s=t3),l.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:d,height:d,fill:s,viewBox:"0 0 24 24",ref:h,...p,children:[l.jsx("title",{children:u}),l.jsx("path",{d:"M12 4.983c3.004 0 6.224.612 8.786 2.239C22.451 8.286 24 9.9 24 12.002c0 2.456-2.097 4.242-4.106 5.287-2.391 1.238-5.216 1.728-7.894 1.728-3.003 0-6.217-.605-8.78-2.238C1.556 15.714 0 14.101 0 12.003 0 9.536 2.092 7.757 4.106 6.71 6.504 5.474 9.323 4.983 12 4.983zm-.025.746c-2.793 0-5.802.523-8.225 1.983-1.524.912-3.03 2.347-3.03 4.253 0 2.239 2.04 3.806 3.864 4.706 2.258 1.102 4.897 1.53 7.391 1.53 2.798 0 5.809-.523 8.232-1.983 1.517-.918 3.029-2.346 3.029-4.253 0-2.243-2.035-3.813-3.864-4.705-2.258-1.104-4.898-1.53-7.397-1.53zm-10.54 4.686l4.597-.784 1.384-3.003L8.794 9.63l4.596.784-4.596.792-1.378 3.01-1.384-3.01zm10.106 2.289l2.028-.356.605-1.359.606 1.359 2.028.356-2.028.35-.606 1.36-.605-1.36zm4.196-3.621l2.028-.35.605-1.365.606 1.364 2.028.35-2.028.357-.606 1.36-.606-1.36zM13.57 15.51l2.02-.35.607-1.365.612 1.365 2.027.35-2.027.357-.612 1.36-.606-1.36zm-6.23.491l2.028-.35.612-1.366.605 1.366 2.028.35-2.028.357-.605 1.359-.612-1.359zm10.196-3.353l2.022-.357.605-1.359.612 1.359 2.028.357-2.028.35-.612 1.357-.606-1.357Z"})]})}),r3="#E30613",i3=A.forwardRef(function({title:u="Suzuki",color:s="currentColor",size:d=24,...p},h){return s==="default"&&(s=r3),l.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:d,height:d,fill:s,viewBox:"0 0 24 24",ref:h,...p,children:[l.jsx("title",{children:u}),l.jsx("path",{d:"M17.369 19.995C13.51 22.39 12 24 12 24L.105 15.705s5.003-3.715 9.186-.87l5.61 3.882.683-.453L.106 7.321s2.226-.65 6.524-3.315C10.49 1.609 12 0 12 0l11.895 8.296s-5.003 3.715-9.187.87L9.1 5.281l-.683.454L23.893 16.68s-2.224.649-6.524 3.315Z"})]})}),o3="#EB0A1E",a3=A.forwardRef(function({title:u="Toyota",color:s="currentColor",size:d=24,...p},h){return s==="default"&&(s=o3),l.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:d,height:d,fill:s,viewBox:"0 0 24 24",ref:h,...p,children:[l.jsx("title",{children:u}),l.jsx("path",{d:"M12 3.848C5.223 3.848 0 7.298 0 12c0 4.702 5.224 8.152 12 8.152S24 16.702 24 12c0-4.702-5.223-8.152-12-8.152zm7.334 3.839c0 1.08-1.725 1.913-4.488 2.246-.26-2.58-1.005-4.279-1.963-4.913 2.948.184 6.45 1.227 6.45 2.667zM12 16.401c-.96 0-1.746-1.5-1.808-4.389.577.047 1.18.072 1.808.072.628 0 1.23-.025 1.807-.072-.061 2.89-.847 4.389-1.807 4.389zm0-6.308c-.59 0-1.155-.019-1.69-.054.261-1.728.92-3.15 1.69-3.15.77 0 1.428 1.422 1.689 3.15-.535.034-1.099.054-1.689.054zm-.882-5.075c-.956.633-1.706 2.333-1.964 4.915C6.391 9.6 4.665 8.767 4.665 7.687c0-1.44 3.504-2.49 6.453-2.669zM2.037 11.68a5.265 5.265 0 011.048-3.164c.27 1.547 2.522 2.881 5.972 3.37V12c0 3.772.879 6.203 2.087 6.97-5.107-.321-9.107-3.48-9.107-7.29zm10.823 7.29c1.207-.767 2.087-3.198 2.087-6.97v-.115c3.447-.488 5.704-1.826 5.972-3.37a5.26 5.26 0 011.049 3.165c-.004 3.81-4.008 6.969-9.109 7.29z"})]})}),l3="#151F5D",s3=A.forwardRef(function({title:u="Volkswagen",color:s="currentColor",size:d=24,...p},h){return s==="default"&&(s=l3),l.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:d,height:d,fill:s,viewBox:"0 0 24 24",ref:h,...p,children:[l.jsx("title",{children:u}),l.jsx("path",{d:"M12 0C5.36 0 0 5.36 0 12S5.36 24 12 24 24 18.64 24 12 18.64 0 12 0M12 1.41C13.2 1.41 14.36 1.63 15.43 2L12.13 9.13C12.09 9.17 12.09 9.26 12 9.26S11.91 9.17 11.87 9.13L8.57 2C9.64 1.63 10.8 1.42 12 1.42M6.9 2.74L10.72 10.97C10.8 11.14 10.89 11.19 11 11.19H13C13.12 11.19 13.2 11.14 13.29 10.97L17.06 2.74C18.64 3.64 20 4.93 20.96 6.47L15.6 16.84C15.56 16.93 15.5 16.97 15.47 16.97C15.39 16.97 15.39 16.89 15.34 16.84L13.29 12.3C13.2 12.13 13.12 12.09 13 12.09H11C10.89 12.09 10.8 12.13 10.71 12.3L8.66 16.84C8.61 16.89 8.62 16.97 8.53 16.97C8.44 16.97 8.44 16.89 8.4 16.84L3 6.47C3.94 4.93 5.32 3.64 6.9 2.74M2.06 8.53L8.23 20.53C8.31 20.7 8.4 20.83 8.62 20.83C8.83 20.83 8.91 20.7 9 20.53L11.87 14.14C11.91 14.06 11.96 14 12 14C12.09 14 12.09 14.1 12.13 14.14L15.04 20.53C15.13 20.7 15.21 20.83 15.43 20.83C15.64 20.83 15.73 20.7 15.81 20.53L22 8.53C22.37 9.6 22.59 10.76 22.59 12C22.54 17.79 17.79 22.59 12 22.59C6.21 22.59 1.46 17.79 1.46 12C1.46 10.8 1.67 9.65 2.06 8.53Z"})]})}),u3="#003057",c3=A.forwardRef(function({title:u="Volvo",color:s="currentColor",size:d=24,...p},h){return s==="default"&&(s=u3),l.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:d,height:d,fill:s,viewBox:"0 0 24 24",ref:h,...p,children:[l.jsx("title",{children:u}),l.jsx("path",{d:"M10.873 12.584h.49l-.001-1.452h-.489v-.322h1.94v.322h-.483v1.451h.449c.415 0 .687-.274.687-.646h.32v.972h-2.913v-.325zm4.313.327h1.134l.962-1.779h.482v-.322h-1.45v.322h.419l-.701 1.295-.71-1.295h.51l-.002-.322h-2.104v.322h.482l.978 1.779zM5.073 10.81H2.968v.322h.481l.98 1.779h1.133l.962-1.779h.482v-.322h-1.45v.322h.418l-.7 1.295-.71-1.295h.509v-.322zm3.707-.044c.975 0 1.498.486 1.498 1.096 0 .618-.494 1.111-1.493 1.111-.999 0-1.497-.493-1.497-1.111 0-.61.517-1.096 1.492-1.096zm.017.33c-.333-.005-.527.348-.534.753-.006.39.15.784.506.79.366.007.524-.39.53-.772.008-.405-.168-.764-.502-.77zm10.738-.33c.974 0 1.497.486 1.497 1.096 0 .618-.493 1.111-1.492 1.111-1 0-1.498-.493-1.498-1.111 0-.61.518-1.096 1.493-1.096zm-.517 1.083c-.007.39.15.784.506.79.366.007.524-.39.53-.772.008-.405-.168-.764-.502-.77-.333-.006-.527.347-.534.752zm2.857-6.667L20.656 6.4A10.26 10.26 0 0 1 22.308 12c0 5.693-4.615 10.308-10.308 10.308S1.692 17.693 1.692 12 6.307 1.692 12 1.692c2.07 0 3.996.61 5.611 1.66l1.219-1.219A11.944 11.944 0 0 0 12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12c0-2.533-.785-4.882-2.125-6.818zM18.036.472v.337c.728.394 1.413.859 2.047 1.382l-1.71 1.71a10.29 10.29 0 0 1 1.735 1.732l1.708-1.708c.524.636.989 1.322 1.384 2.038h.328V.473h-5.492z"})]})}),d3="#E60012",p3=A.forwardRef(function({title:u="Yamaha Motor Corporation",color:s="currentColor",size:d=24,...p},h){return s==="default"&&(s=d3),l.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:d,height:d,fill:s,viewBox:"0 0 24 24",ref:h,...p,children:[l.jsx("title",{children:u}),l.jsx("path",{d:"M12 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0zm0 .57C18.315.57 23.43 5.685 23.43 12c0 6.31-5.115 11.43-11.43 11.43C5.69 23.43.57 18.314.57 12 .57 5.69 5.69.57 12 .57zm0 .234c-.1 0-.183.06-.218.147l-.492 1.551A9.523 9.523 0 002.475 12c0 1.48.337 2.885.94 4.136l-1.1 1.206a.241.241 0 00-.015.262.246.246 0 00.238.115l1.592-.353a9.52 9.52 0 007.87 4.16c3.27 0 6.16-1.652 7.874-4.16l1.592.353a.236.236 0 00.23-.123.234.234 0 00-.016-.262l-1.1-1.198A9.431 9.431 0 0021.526 12a9.523 9.523 0 00-8.815-9.498L12.218.947A.237.237 0 0012 .804zm-.003.25c.024 0 .048.02.056.043l1.02 3.354a1.2 1.2 0 00-.48.957c0 .389.19.734.48.952h-.004c.436.326.718.846.718 1.429v1.12l4.326-2.497.476.825-4.802 2.77v.965l.834.48 4.802-2.774.476.825-4.326 2.5.972.56c.508.294.818.798.882 1.338v-.004a1.193 1.193 0 001.655.953l2.393 2.56c.02.02.02.047.008.07-.016.025-.04.033-.068.029l-3.413-.794a1.193 1.193 0 00-1.65-.957l.003-.004c-.5.215-1.091.199-1.6-.095l-.968-.56v4.994h-.952v-5.545l-.834-.48-.833.48v5.545h-.953V15.1l-.972.555c-.508.294-1.1.31-1.6.096l.004.004a1.193 1.193 0 00-1.651.957l-3.413.793a.054.054 0 01-.063-.028c-.016-.02-.012-.047.008-.067l2.397-2.56c.333.143.73.135 1.067-.064.338-.194.544-.528.588-.889v.004c.063-.54.373-1.044.88-1.337l.97-.56-4.327-2.496.477-.826 4.802 2.774.833-.484v-.964l-4.802-2.77.476-.826 4.326 2.496V7.79c0-.583.282-1.103.719-1.429h-.004c.29-.214.476-.56.476-.952 0-.393-.19-.738-.48-.957l1.02-3.353c.008-.028.031-.044.051-.044zm.004 5.902a.833.833 0 00-.833.833v1.67L12 9.94l.833-.48V7.789a.833.833 0 00-.833-.833zm0 4.084l-.833.48v.964l.833.476.833-.48v-.96zm-2.62 1.516l-1.444.833a.833.833 0 00-.306 1.14.822.822 0 00.723.412.83.83 0 00.416-.111l1.445-.834v-.96zm5.243 0l-.833.48V14l1.445.834a.834.834 0 00.833-1.445z"})]})}),ct=[{id:1,slug:"honda-hr-v-touring-2023",brand:"Honda",model:"HR-V",version:"1.5 DI i-VTEC Touring",year:2023,mileage:18400,price:164900,transmission:"Automático",fuel:"Flex",category:"SUV",imageUrl:"https://images.unsplash.com/photo-1606611013016-969c19ba27bb?auto=format&fit=crop&w=1200&q=85",featured:!0},{id:2,slug:"toyota-corolla-xei-2022",brand:"Toyota",model:"Corolla",version:"2.0 VVT-iE XEI",year:2022,mileage:26700,price:132900,transmission:"Automático",fuel:"Flex",category:"Sedã",imageUrl:"https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=1200&q=85",featured:!0},{id:3,slug:"jeep-compass-limited-2023",brand:"Jeep",model:"Compass",version:"1.3 T270 Limited",year:2023,mileage:21300,price:158900,transmission:"Automático",fuel:"Flex",category:"SUV",imageUrl:"https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1200&q=85",featured:!0},{id:4,slug:"volkswagen-t-cross-highline-2022",brand:"Volkswagen",model:"T-Cross",version:"1.4 250 TSI Highline",year:2022,mileage:30800,price:124900,transmission:"Automático",fuel:"Flex",category:"SUV",imageUrl:"https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=85",featured:!1},{id:5,slug:"chevrolet-onix-premier-2023",brand:"Chevrolet",model:"Onix",version:"1.0 Turbo Premier",year:2023,mileage:16500,price:89900,transmission:"Automático",fuel:"Flex",category:"Hatch",imageUrl:"https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=85",featured:!1},{id:6,slug:"hyundai-creta-platinum-2022",brand:"Hyundai",model:"Creta",version:"1.0 TGDI Platinum",year:2022,mileage:33700,price:119900,transmission:"Automático",fuel:"Flex",category:"SUV",imageUrl:"https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=85",featured:!1},{id:7,slug:"fiat-strada-endurance-2023",brand:"Fiat",model:"Strada",version:"1.3 Firefly Endurance",year:2023,mileage:22100,price:99900,transmission:"Manual",fuel:"Flex",category:"Utilitários",imageUrl:"https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=85",featured:!1}],f3=S.main`
  min-height: 65vh;
  background: #f7f7f7;
`,m3=S.section`
  padding: 48px 16px 42px;
  background:
    radial-gradient(ellipse at 85% 20%, rgba(198, 243, 107, .22), transparent 38%),
    #11120f;
  color: #fff;

  > div {
    width: min(100%, 1120px);
    margin: 0 auto;
  }

  .eyebrow {
    margin: 0 0 10px;
    color: #c6f36b;
    font-size: 11px;
    font-weight: 800;
    letter-spacing: .12em;
    text-transform: uppercase;
  }

  h1 {
    max-width: 780px;
    margin: 0;
    font-size: clamp(32px, 8vw, 58px);
    font-weight: 800;
    letter-spacing: -.045em;
    line-height: 1.05;
  }

  .summary {
    max-width: 680px;
    margin: 16px 0 0;
    color: rgba(255,255,255,.82);
    font-size: 15px;
    line-height: 1.7;
  }

  @media (min-width: 701px) {
    padding: 92px 24px 64px;
  }
`,h3=S.div`
  width: min(100% - 32px, 1120px);
  margin: 0 auto;
  padding: 24px 0 56px;

  @media (min-width: 701px) {
    width: min(100% - 48px, 1120px);
    padding: 38px 0 72px;
  }
`,Ul=S.section`
  margin-top: 30px;

  h2 {
    margin: 0;
    font-size: clamp(22px, 5vw, 30px);
    font-weight: 800;
    letter-spacing: -.035em;
  }

  > p {
    max-width: 760px;
    margin: 10px 0 0;
    color: #5e5e5e;
    font-size: 14px;
    line-height: 1.7;
  }
`,g3=S.main`
  min-height: calc(100vh - 60px);
  padding: 38px 16px 64px;
  background:
    radial-gradient(ellipse at 90% 0, rgba(198, 243, 107, .16), transparent 34%),
    #11120f;
  color: #fff;

  .financing-content {
    width: min(100%, 1120px);
    margin: 0 auto;
  }

  h1 {
    margin: 0;
    color: #fff;
    font-size: clamp(26px, 5vw, 36px);
    font-weight: 900;
    letter-spacing: -.035em;
    text-align: center;
  }

  .mode-switch {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;
    margin: 24px auto 16px;
  }

  .mode-switch span {
    font-size: 15px;
    font-weight: 600;
  }

  .mode-switch button {
    min-width: 92px;
    min-height: 42px;
    padding: 0 15px;
    border: 2px solid #fff;
    border-radius: 7px;
    background: transparent;
    color: #fff;
    cursor: pointer;
    font-size: 13px;
    font-weight: 800;
    transition: background .18s ease, color .18s ease;
  }

  .mode-switch button.active {
    background: #fff;
    color: #111;
  }

  .financing-card {
    width: min(100%, 780px);
    margin: 0 auto;
    padding: 20px;
    border-radius: 9px;
    background: #fff;
    color: #111;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  form > strong {
    padding: 7px 0 2px;
    font-size: 15px;
    font-weight: 800;
    text-align: center;
  }

  .field-grid {
    display: grid;
    gap: 10px;
  }

  .two-columns {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .three-columns {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  label {
    min-width: 0;
    position: relative;
    display: block;
  }

  input,
  select {
    width: 100%;
    min-width: 0;
    min-height: 44px;
    padding: 10px 12px;
    border: 2px solid #d8d8d8;
    border-radius: 7px;
    background: #fff;
    color: #111;
    font: inherit;
    font-size: 12px;
  }

  input::placeholder,
  select:invalid {
    color: #777;
    font-weight: 600;
  }

  input:focus,
  select:focus,
  button:focus-visible {
    outline: 2px solid #c6f36b;
    outline-offset: 2px;
  }

  .vehicle-value {
    padding: 12px;
    border-radius: 7px;
    background: #111;
    color: #fff;
    font-size: 13px;
    font-weight: 700;
    line-height: 1.4;
    text-align: center;
  }

  .installments {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }

  .installments button {
    width: 64px;
    min-height: 38px;
    border: 2px solid #d8d8d8;
    border-radius: 7px;
    background: #fff;
    color: #111;
    cursor: pointer;
    font-size: 13px;
    font-weight: 800;
  }

  .installments button.active {
    border-color: #111;
    background: #111;
    color: #fff;
  }

  .submit-button {
    min-height: 48px;
    border: 0;
    border-radius: 7px;
    background: #111;
    color: #fff;
    cursor: pointer;
    font: inherit;
    font-size: 14px;
    font-weight: 900;
  }

  .submit-button:hover {
    background: #c6f36b;
    color: #11120f;
  }

  .disclaimer,
  .form-status {
    margin: 0;
    color: #777;
    font-size: 10px;
    line-height: 1.55;
    text-align: center;
  }

  .form-status {
    padding: 10px;
    border-radius: 6px;
    background: #f0f0f0;
    color: #222;
    font-size: 12px;
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    clip-path: inset(50%);
  }

  @media (min-width: 720px) {
    padding-top: 54px;

    h1 {
      font-size: 38px;
    }

    .financing-card {
      padding: 24px;
    }

    form > strong {
      font-size: 17px;
    }
  }

  @media (max-width: 520px) {
    padding: 30px 12px 48px;

    .financing-card {
      padding: 14px;
    }

    .two-columns,
    .three-columns {
      grid-template-columns: minmax(0, 1fr);
    }

    .mode-switch {
      gap: 8px;
    }

    .mode-switch button {
      min-width: 76px;
    }
  }
`,x3=S.div`
  padding: 20px;
  border: 1px solid #e5e5e5;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 8px 24px rgba(0,0,0,.04);

  @media (min-width: 701px) { padding: 28px; }
`,v3=S.form`
  display: grid;
  gap: 15px;

  @media (min-width: 700px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  label {
    display: grid;
    gap: 7px;
    color: #333;
    font-size: 12px;
    font-weight: 700;
  }

  input, select, textarea {
    width: 100%;
    min-height: 46px;
    padding: 11px 12px;
    border: 1px solid #cfcfcf;
    border-radius: 5px;
    background: #fff;
    color: #171717;
    font-size: 14px;
  }

  textarea { min-height: 100px; resize: vertical; }
  .wide { grid-column: 1 / -1; }

  button, .button-link {
    width: fit-content;
    min-height: 46px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 9px;
    padding: 0 18px;
    border: 0;
    border-radius: 5px;
    background: #c6f36b;
    color: #11120f;
    cursor: pointer;
    font-size: 13px;
    font-weight: 800;
  }

  button:hover, .button-link:hover { background: #b2df5d; }

  .form-status {
    grid-column: 1 / -1;
    margin: 0;
    padding: 12px;
    border-radius: 5px;
    background: #f1f1f1;
    color: #333;
    font-size: 13px;
    line-height: 1.6;
  }
`,y3=S.div`
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr;

  @media (min-width: 620px) { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  @media (min-width: 950px) { grid-template-columns: repeat(3, minmax(0, 1fr)); }
`,wu=S.article`
  padding: 20px;
  border: 1px solid #e5e5e5;
  border-radius: 9px;
  background: #fff;

  .icon {
    width: 40px;
    height: 40px;
    display: grid;
    place-items: center;
    margin-bottom: 15px;
    border-radius: 50%;
    background: rgba(198, 243, 107, .18);
    color: #11120f;
  }

  h3 { margin: 0; font-size: 16px; }
  p { margin: 8px 0 0; color: #626262; font-size: 13px; line-height: 1.6; }
`,w3=S.main`
  min-height: 65vh;
  padding: 36px 16px 56px;
  background: #11120f;
  color: #fff;

  .stores-content {
    width: min(100%, 1012px);
    margin: 0 auto;
  }

  h1 {
    margin: 0;
    text-align: center;
    font-size: clamp(22px, 4vw, 30px);
    font-weight: 800;
    letter-spacing: -.02em;
    line-height: 1.2;
    text-transform: uppercase;
  }

  .stores-note {
    margin: 0 0 20px;
    color: #aaa;
    font-size: 11px;
    line-height: 1.5;
    text-align: center;
  }

  .store-region + .store-region {
    margin-top: 42px;
  }

  h1,
  .region-title {
    margin: 0 0 14px;
    text-align: center;
    font-size: clamp(18px, 3vw, 24px);
    font-weight: 800;
    letter-spacing: -.02em;
    line-height: 1.2;
    text-transform: uppercase;
  }

  @media (min-width: 701px) {
    padding: 56px 24px 72px;

    .stores-note {
      margin-bottom: 20px;
    }

    .store-region + .store-region {
      margin-top: 48px;
    }
  }
`,ic=S.main`
  min-height: min(820px, calc(100vh - 72px));
  display: grid;
  grid-template-columns: minmax(390px, .92fr) minmax(0, 1.08fr);
  overflow: hidden;
  background: #11120f;
  color: #fff;

  .appointment-form-panel {
    width: min(100% - 48px, 368px);
    align-self: center;
    justify-self: end;
    margin: 30px 12% 30px 24px;
  }

  h1 {
    margin: 0 0 22px;
    font-size: clamp(26px, 3vw, 32px);
    font-weight: 800;
    letter-spacing: -.035em;
    line-height: 1.15;
  }

  form {
    display: grid;
    gap: 16px;
  }

  fieldset {
    min-width: 0;
    display: grid;
    gap: 8px;
    margin: 0;
    padding: 0;
    border: 0;
  }

  legend {
    margin-bottom: 4px;
    padding: 0;
    font-size: 14px;
    font-weight: 500;
  }

  .form-row {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 7px;
  }

  label {
    min-width: 0;
    position: relative;
    display: block;
  }

  input,
  select {
    width: 100%;
    height: 38px;
    padding: 0 10px;
    border: 1px solid #2e2e2e;
    border-radius: 5px;
    outline: none;
    background: #1b1b1b;
    color: #f7f7f7;
    font: inherit;
    font-size: 12px;
  }

  input::placeholder,
  select:invalid {
    color: #777;
  }

  input:focus,
  select:focus {
    border-color: #aaa;
  }

  select {
    appearance: auto;
  }

  .icon-field {
    display: flex;
    align-items: center;
    gap: 8px;
    padding-left: 9px;
    border-radius: 5px;
    background: #1b1b1b;
    color: #ddd;
  }

  .icon-field svg {
    flex: 0 0 auto;
  }

  .icon-field input,
  .icon-field select {
    min-width: 0;
    border-color: #555;
    background: transparent;
  }

  button {
    min-height: 39px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border: 0;
    border-radius: 6px;
    background: #fff;
    color: #171717;
    cursor: pointer;
    font: inherit;
    font-size: 14px;
    transition: background .2s ease, transform .2s ease;
  }

  button:hover {
    transform: translateY(-1px);
    background: #e8e8e8;
  }

  .demo-disclaimer {
    margin: -7px 0 0;
    color: #929292;
    font-size: 10px;
    line-height: 1.5;
  }

  .form-status {
    margin: -6px 0 0;
    color: #fff;
    font-size: 12px;
    line-height: 1.5;
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    clip-path: inset(50%);
  }

  .appointment-story {
    min-height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    overflow: hidden;
    padding: 54px 7%;
    isolation: isolate;
  }

  .photo-wall,
  .photo-wall::after {
    position: absolute;
    inset: 0;
  }

  .photo-wall {
    z-index: -1;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 10px;
    transform: scale(1.03);
  }

  .photo-wall::after {
    content: "";
    background: rgba(0, 0, 0, .78);
  }

  .photo-wall img {
    width: 100%;
    height: 100%;
    min-height: 0;
    object-fit: cover;
    filter: grayscale(1);
  }

  .story-copy {
    position: relative;
    z-index: 1;
    width: min(100%, 620px);
    margin: 0 auto;
  }

  .story-copy h2 {
    margin: 0;
    font-size: clamp(30px, 4vw, 48px);
    font-weight: 800;
    letter-spacing: -.045em;
    line-height: 1.08;
    text-transform: uppercase;
  }

  .story-copy p {
    margin: 24px 0 0;
    color: rgba(255,255,255,.9);
    font-size: 15px;
    line-height: 1.55;
  }

  &.visit-appointment {
    grid-template-columns: minmax(390px, .82fr) minmax(0, 1.18fr);
  }

  &.visit-appointment .appointment-form-panel {
    width: min(100% - 56px, 420px);
    justify-self: center;
    margin: 32px auto;
    padding: 30px;
    border: 1px solid rgba(198, 243, 107, .22);
    border-top: 3px solid #c6f36b;
    border-radius: 12px;
    background: #181a15;
    box-shadow: 0 18px 48px rgba(0, 0, 0, .28);
  }

  &.visit-appointment .appointment-eyebrow,
  &.visit-appointment .story-eyebrow {
    margin: 0 0 9px;
    color: #c6f36b;
    font-size: 10px;
    font-weight: 800;
    letter-spacing: .14em;
    text-transform: uppercase;
  }

  &.visit-appointment h1 {
    margin-bottom: 24px;
    font-size: clamp(28px, 3vw, 36px);
  }

  &.visit-appointment legend {
    color: #c6f36b;
    font-weight: 700;
  }

  &.visit-appointment input,
  &.visit-appointment select {
    height: 44px;
    border-color: #363a30;
    background-color: #11120f;
  }

  &.visit-appointment input:focus,
  &.visit-appointment select:focus {
    border-color: #c6f36b;
  }

  &.visit-appointment .icon-field {
    background: #11120f;
    color: #c6f36b;
  }

  &.visit-appointment .icon-field input,
  &.visit-appointment .icon-field select {
    border-color: #363a30;
  }

  &.visit-appointment button {
    min-height: 46px;
    background: #c6f36b;
    color: #11120f;
    font-weight: 800;
  }

  &.visit-appointment button:hover {
    background: #b2df5d;
  }

  &.visit-appointment .story-copy {
    padding: 32px;
    border-left: 3px solid #c6f36b;
    border-radius: 0 10px 10px 0;
    background: rgba(17, 18, 15, .76);
    backdrop-filter: blur(5px);
  }

  &.visit-appointment .story-copy .story-eyebrow {
    margin-bottom: 14px;
  }

  @media (max-width: 900px) {
    min-height: 0;
    grid-template-columns: minmax(0, 1fr);

    .appointment-form-panel {
      width: min(100% - 40px, 430px);
      margin: 48px auto;
    }

    .appointment-story {
      min-height: 390px;
      padding: 56px 24px;
    }
  }

  @media (max-width: 480px) {
    .appointment-form-panel {
      margin: 38px auto;
    }

    &.visit-appointment .appointment-form-panel {
      width: min(100% - 32px, 420px);
      padding: 22px;
    }

    &.visit-appointment .form-row {
      grid-template-columns: minmax(0, 1fr);
    }

    &.visit-appointment .story-copy {
      padding: 22px;
    }

    .appointment-story {
      min-height: 340px;
    }

    .story-copy p {
      font-size: 14px;
    }
  }

  @media (max-width: 700px) {
    .appointment-story {
      display: none;
    }
  }
`,k3=S.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 18px;

  @media (min-width: 620px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px;
  }

  @media (min-width: 980px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 24px;

    > :last-child:nth-child(3n + 1) {
      grid-column: 2;
    }
  }
`,b3=S.article`
  overflow: hidden;
  border-radius: 10px;
  background: #fff;
  color: #111;

  img {
    width: calc(100% - 28px);
    height: 164px;
    display: block;
    margin: 14px auto 0;
    border-radius: 7px;
    background: #d7d7d7;
    filter: grayscale(1);
    object-fit: cover;
  }

  .coming-soon-art {
    width: calc(100% - 28px);
    height: 164px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    margin: 14px auto 0;
    border-radius: 7px;
    background: #111;
    color: #fff;
    text-align: center;
    text-transform: uppercase;
  }

  .coming-soon-art strong {
    font-size: clamp(24px, 4vw, 34px);
    font-weight: 900;
    line-height: 1;
  }

  .coming-soon-art span {
    font-size: 9px;
    letter-spacing: .08em;
  }

  .store-details {
    min-height: 126px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px 16px 16px;
    text-align: center;
  }

  h3 {
    margin: 0;
    font-size: 16px;
    font-weight: 800;
    line-height: 1.15;
    text-transform: uppercase;
  }

  p {
    margin: 18px 0 0;
    color: #383838;
    font-size: 11px;
    line-height: 1.35;
    text-transform: uppercase;
  }
`;S.div`
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr;
  @media (min-width: 600px) { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  @media (min-width: 950px) { grid-template-columns: repeat(3, minmax(0, 1fr)); }
`;S.article`
  overflow: hidden;
  border: 1px solid #e3e3e3;
  border-radius: 9px;
  background: #fff;

  img {
    width: 100%;
    height: 190px;
    display: block;
    object-fit: cover;
    background: #e6e6e6;
  }

  .details { padding: 15px; }
  .label {
    display: inline-block;
    padding: 5px 7px;
    border-radius: 3px;
    background: #fff0c2;
    color: #493c13;
    font-size: 9px;
    font-weight: 800;
    letter-spacing: .04em;
    text-transform: uppercase;
  }
  h3 { margin: 10px 0 3px; font-size: 17px; }
  p { margin: 5px 0 0; color: #626262; font-size: 12px; line-height: 1.55; }
  .price { margin-top: 12px; color: #111; font-size: 17px; font-weight: 800; }
  .price small { display: block; margin-bottom: 3px; color: #666; font-size: 10px; font-weight: 500; }
`;const oc=S.a`
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 16px;
  color: #a00007;
  font-size: 13px;
  font-weight: 800;
  text-decoration: underline;
  text-underline-offset: 3px;
`;S.p`
  margin: 0;
  padding: 18px;
  border: 1px dashed #aaa;
  border-radius: 8px;
  color: #555;
  font-size: 14px;
  line-height: 1.6;
`;const S3=S.main`
  min-height: 70vh;
  padding-bottom: 80px;
  background: #11120f;
  color: #fff;
`,j3=S.section`
  position: relative;
  overflow: hidden;
  padding: 60px 16px 52px;
  background:
    radial-gradient(ellipse at 82% 0, rgba(198, 243, 107, .14), transparent 38%),
    linear-gradient(135deg, #171a13, #11120f 65%);

  &::after {
    position: absolute;
    right: -70px;
    bottom: -180px;
    width: 360px;
    height: 360px;
    border: 1px solid rgba(198, 243, 107, .1);
    border-radius: 50%;
    content: "";
    pointer-events: none;
  }

  .catalog-intro-content {
    position: relative;
    z-index: 1;
    width: min(100%, 1240px);
    margin: 0 auto;
  }

  .eyebrow {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 0 0 14px;
    color: #c6f36b;
    font-size: 11px;
    font-weight: 800;
    letter-spacing: .14em;
    text-transform: uppercase;
  }

  .eyebrow span {
    width: 34px;
    height: 1px;
    background: #c6f36b;
  }

  h1 {
    max-width: 760px;
    margin: 0;
    font-size: clamp(36px, 7vw, 64px);
    font-weight: 800;
    letter-spacing: -.055em;
    line-height: 1;
  }

  h1 em {
    color: #c6f36b;
    font-style: normal;
  }

  .summary {
    max-width: 560px;
    margin: 16px 0 0;
    color: #b9bcb2;
    font-size: 14px;
    line-height: 1.7;
  }

  @media (min-width: 701px) {
    padding: 84px 24px 58px;
  }

  @media (max-width: 480px) {
    padding: 48px 20px 38px;
    h1 { font-size: clamp(36px, 11vw, 48px); }
  }
`,C3=S.div`
  width: min(100%, 650px);
  min-height: 58px;
  display: flex;
  align-items: center;
  gap: 14px;
  margin: 28px 0 0;
  padding: 0 8px 0 18px;
  border: 1px solid #34382f;
  border-radius: 8px;
  background: rgba(17, 18, 15, .84);
  color: #c6f36b;
  box-shadow: 0 12px 30px rgba(0, 0, 0, .18);

  input {
    width: 100%;
    min-width: 0;
    border: 0;
    outline: 0;
    background: transparent;
    color: #fff;
    font-size: 14px;
  }

  input::placeholder { color: #92958b; }
  input:focus-visible { outline: 0; }
  &:focus-within { border-color: rgba(198, 243, 107, .75); }

  .search-hint {
    flex: 0 0 auto;
    display: grid;
    min-height: 42px;
    place-items: center;
    padding: 0 17px;
    border-radius: 6px;
    background: #c6f36b;
    color: #11120f;
    font-size: 11px;
    font-weight: 800;
  }

  @media (max-width: 420px) {
    min-height: 54px;
    gap: 9px;
    padding-left: 13px;
    .search-hint { min-height: 38px; padding: 0 11px; }
  }
`,z3=S.div`
  width: min(100% - 32px, 1240px);
  display: grid;
  gap: 28px;
  margin: 0 auto;
  padding-top: 32px;

  @media (min-width: 701px) {
    width: min(100% - 48px, 1240px);
    grid-template-columns: 260px minmax(0, 1fr);
    align-items: start;
    gap: 32px;
  }
`,N3=S.aside`
  display: grid;
  align-content: start;
  gap: 20px;
  padding: 22px;
  border: 1px solid #30342b;
  border-radius: 10px;
  background: linear-gradient(145deg, #191b16, #141510);
  box-shadow: 0 14px 36px rgba(0, 0, 0, .16);

  @media (min-width: 701px) {
    position: sticky;
    top: 88px;
  }

  .filter-heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    padding-bottom: 16px;
    border-bottom: 1px solid #30342b;
  }

  h2 {
    margin: 0;
    font-size: 17px;
    font-weight: 800;
  }

  .filter-heading button {
    padding: 4px 0;
    border: 0;
    background: transparent;
    color: #c6f36b;
    cursor: pointer;
    font-size: 11px;
    font-weight: 700;
    white-space: nowrap;
  }

  .filter-heading button:disabled {
    color: #777;
    cursor: default;
  }

  > label, fieldset label {
    display: grid;
    gap: 8px;
    color: #e7e7e7;
    font-size: 12px;
    font-weight: 700;
  }

  select {
    width: 100%;
    min-height: 42px;
    padding: 0 10px;
    border: 1px solid #383b33;
    border-radius: 6px;
    background: #11120f;
    color: #fff;
    font-size: 12px;
  }

  select:focus-visible {
    border-color: #c6f36b;
    outline-color: #c6f36b;
  }

  fieldset {
    min-width: 0;
    margin: 0;
    padding: 0;
    border: 0;
  }

  legend {
    margin-bottom: 8px;
    color: #e7e7e7;
    font-size: 12px;
    font-weight: 700;
  }

  .model-year-filter legend {
    margin-bottom: 5px;
  }

  .year-slider {
    position: relative;
    height: 22px;
    display: flex;
    align-items: center;
  }

  .year-track {
    position: absolute;
    right: 7px;
    left: 7px;
    height: 3px;
    background: #414141;
  }

  .year-track span {
    position: absolute;
    top: 0;
    bottom: 0;
    background: #c6f36b;
  }

  .year-slider input {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 22px;
    margin: 0;
    padding: 0;
    appearance: none;
    border: 0;
    background: transparent;
    pointer-events: none;
    cursor: pointer;
  }

  .year-slider input::-webkit-slider-runnable-track {
    height: 3px;
    background: transparent;
  }

  .year-slider input::-moz-range-track {
    height: 3px;
    background: transparent;
  }

  .year-slider input::-webkit-slider-thumb {
    width: 14px;
    height: 14px;
    appearance: none;
    border: 2px solid #fff;
    border-radius: 50%;
    background: #fff;
    cursor: pointer;
    pointer-events: auto;
  }

  .year-slider input::-moz-range-thumb {
    width: 10px;
    height: 10px;
    border: 2px solid #fff;
    border-radius: 50%;
    background: #fff;
    cursor: pointer;
    pointer-events: auto;
  }

  .year-slider input:focus-visible {
    outline: none;
  }

  .year-slider input:focus-visible::-webkit-slider-thumb {
    outline: 2px solid #c6f36b;
    outline-offset: 3px;
  }

  .year-slider input:focus-visible::-moz-range-thumb {
    outline: 2px solid #c6f36b;
    outline-offset: 3px;
  }

  .year-slider-labels {
    display: flex;
    justify-content: space-between;
    color: #bcbcbc;
    font-size: 10px;
  }
`,E3=S.section`
  min-width: 0;

  .results-heading {
    display: flex;
    align-items: end;
    justify-content: space-between;
    gap: 16px;
    margin: 0 0 18px;
  }

  .results-heading .eyebrow {
    margin: 0 0 5px;
    color: #c6f36b;
    font-size: 10px;
    font-weight: 800;
    letter-spacing: .12em;
    text-transform: uppercase;
  }

  .results-heading h2 {
    margin: 0;
    font-size: clamp(20px, 3vw, 25px);
    font-weight: 800;
    letter-spacing: -.035em;
  }

  .result-count {
    flex: 0 0 auto;
    margin: 0;
    padding: 8px 12px;
    border: 1px solid #34382f;
    border-radius: 999px;
    color: #bdbdbd;
    font-size: 11px;
  }

  .result-count strong {
    margin-right: 4px;
    color: #c6f36b;
    font-size: 13px;
  }

  .catalog-disclaimer {
    margin: 22px 0 0;
    color: #999;
    font-size: 11px;
    line-height: 1.65;
  }

  @media (max-width: 480px) {
    .results-heading { align-items: start; }
    .result-count { padding: 7px 9px; font-size: 10px; }
  }
`,M3=S.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media (min-width: 560px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1180px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`,_3=S.article`
  min-width: 0;
  overflow: hidden;
  border: 1px solid #30342b;
  border-radius: 10px;
  background: #191b16;
  box-shadow: 0 12px 32px rgba(0, 0, 0, .16);
  transition: transform .2s ease, border-color .2s ease, box-shadow .2s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(198, 243, 107, .55);
    box-shadow: 0 20px 42px rgba(0, 0, 0, .28);
  }

  .vehicle-image {
    position: relative;
    overflow: hidden;
    aspect-ratio: 16 / 10;
    background: #22251e;
  }

  .vehicle-image::after {
    position: absolute;
    inset: 45% 0 0;
    background: linear-gradient(transparent, rgba(17, 18, 15, .58));
    content: "";
    pointer-events: none;
  }

  .vehicle-image img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    transition: transform .35s ease;
  }

  &:hover .vehicle-image img {
    transform: scale(1.04);
  }

  .demo-badge,
  .year-badge {
    position: absolute;
    z-index: 1;
    top: 12px;
    display: inline-flex;
    align-items: center;
    min-height: 27px;
    padding: 0 10px;
    border: 1px solid rgba(255, 255, 255, .18);
    border-radius: 999px;
    background: rgba(17, 18, 15, .78);
    color: #fff;
    font-size: 9px;
    font-weight: 700;
    backdrop-filter: blur(8px);
  }

  .demo-badge { left: 12px; }
  .year-badge {
    right: 12px;
    border-color: rgba(198, 243, 107, .45);
    color: #c6f36b;
  }

  .details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 285px;
    padding: 18px;
  }

  .eyebrow {
    margin: 0 0 5px;
    color: #c6f36b;
    font-size: 10px;
    font-weight: 800;
    letter-spacing: .08em;
    text-transform: uppercase;
  }

  h2 {
    margin: 0;
    font-size: 23px;
    font-weight: 800;
    letter-spacing: -.025em;
  }

  .version {
    margin: 4px 0 0;
    color: #bdbdbd;
    font-size: 12px;
  }

  .specs {
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
    margin-top: 15px;
  }

  .specs span {
    padding: 7px 9px;
    border: 1px solid #35392f;
    border-radius: 5px;
    background: #141610;
    color: #d3d7cc;
    font-size: 10px;
  }

  .price {
    margin: 18px 0 16px;
    color: #fff;
    font-size: 21px;
    font-weight: 800;
  }

  .price small {
    display: block;
    margin-bottom: 4px;
    color: #a8aca0;
    font-size: 10px;
    font-weight: 500;
  }

  .vehicle-cta {
    width: 100%;
    min-height: 43px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: auto;
    padding: 0 12px;
    border-radius: 6px;
    background: #c6f36b;
    color: #11120f;
    font-size: 11px;
    font-weight: 800;
    text-align: center;
  }

  .vehicle-cta:hover { background: #b2df5d; }

  .vehicle-cta:focus-visible {
    outline-color: #c6f36b;
    outline-offset: 3px;
  }
`,P3=S.div`
  padding: 36px 20px;
  border: 1px dashed #42483a;
  border-radius: 10px;
  background: #191b16;
  text-align: center;

  h2 { margin: 0; font-size: 20px; }
  p { margin: 9px 0 17px; color: #bdbdbd; font-size: 13px; line-height: 1.6; }

  button {
    min-height: 42px;
    padding: 0 15px;
    border: 0;
    border-radius: 4px;
    background: #c6f36b;
    color: #11120f;
    cursor: pointer;
    font-size: 12px;
    font-weight: 800;
  }
`,L3=S.main`
  min-height: 100vh;
  padding: 18px 0 64px;
  background: #11120f;
  color: #fff;

  .fipe-header {
    width: min(100% - 32px, 976px);
    margin: 0 auto;
  }

  h1 {
    margin: 0 0 14px;
    font-size: clamp(24px, 4vw, 30px);
    font-weight: 900;
    line-height: 1.15;
    text-align: center;
  }

  .fipe-disclaimer {
    width: min(100% - 32px, 976px);
    margin: 18px auto 0;
    color: #aaa;
    font-size: 11px;
    text-align: center;
  }

  @media (min-width: 701px) {
    padding-top: 72px;
  }
`,R3=S.nav`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
  margin-bottom: 15px;

  button {
    min-width: 0;
    min-height: 42px;
    padding: 0 8px;
    border: 2px solid #fff;
    border-radius: 6px;
    background: #fff;
    color: #11120f;
    cursor: pointer;
    font-size: 12px;
    font-weight: 900;
    text-transform: uppercase;
    transition: background-color .18s ease, color .18s ease;
  }

  button.active,
  button:hover {
    background: #c6f36b;
    border-color: #c6f36b;
    color: #11120f;
  }

  button:focus-visible { outline: 3px solid #c6f36b; outline-offset: 3px; }

  @media (min-width: 701px) {
    gap: 16px;
    button { min-height: 43px; }
  }
`,T3=S.div`
  min-height: 40px;
  display: flex;
  align-items: stretch;
  overflow: hidden;
  border-radius: 6px;
  background: #fff;
  color: #111;

  span {
    width: 40px;
    min-height: 40px;
    display: grid;
    place-items: center;
    flex: 0 0 auto;
    border-radius: 5px;
    background: #11120f;
    color: #fff;
  }

  input {
    width: 100%;
    min-width: 0;
    padding: 0 10px;
    border: 0;
    outline: none;
    background: transparent;
    color: #171717;
    font-size: 12px;
    font-weight: 800;
  }

  input::placeholder { color: #777; opacity: 1; }
  &:focus-within { outline: 2px solid #c6f36b; outline-offset: 2px; }
`,I3=S.div`
  width: min(100% - 32px, 976px);
  margin: 26px auto 0;
`,F3=S.section`
  scroll-margin-top: 90px;
  margin-top: 25px;

  h2 {
    margin: 0 0 14px;
    font-size: 13px;
    font-weight: 900;
    text-align: center;
    text-transform: uppercase;
  }

  .brand-row {
    display: grid;
    grid-template-columns: minmax(0, 656px) 150px;
    align-items: center;
    justify-content: center;
    gap: 16px;
  }

  .other-brands {
    min-height: 46px;
    padding: 0 10px;
    border: 2px solid #fff;
    border-radius: 5px;
    background: transparent;
    color: #fff;
    cursor: pointer;
    font-size: 11px;
    font-weight: 900;
    text-transform: uppercase;
  }

  .other-brands:hover { background: #fff; color: #11120f; }
  .other-brands:focus-visible { outline: 3px solid #c6f36b; outline-offset: 3px; }

  @media (max-width: 620px) {
    margin-top: 30px;
    h2 { margin-bottom: 10px; }
    .brand-row { grid-template-columns: minmax(0, 1fr); gap: 12px; }
    .other-brands { width: 100%; min-height: 42px; }
  }
`,O3=S.div`
  width: min(656px, 100%);
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: stretch;
  gap: 8px 10px;

  button {
    width: 64px;
    flex: 0 0 64px;
    min-height: 48px;
    display: grid;
    place-items: center;
    padding: 4px;
    border: 0;
    background: transparent;
    color: #fff;
    cursor: pointer;
    font-size: clamp(10px, 1.2vw, 14px);
    font-weight: 900;
    text-align: center;
    overflow-wrap: anywhere;
    transition: color .18s ease, transform .18s ease;
  }

  .brand-icon {
    display: block;
    width: min(44px, 100%);
    height: 36px;
    fill: currentColor;
  }

  button:hover {
    color: #c6f36b;
    transform: translateY(-2px);
  }

  button:focus-visible { outline: 2px solid #c6f36b; outline-offset: 1px; }
  .empty-brands { grid-column: 1 / -1; margin: 0; color: #aaa; font-size: 13px; }

  @media (min-width: 621px) {
    button { min-height: 52px; font-size: 13px; }
    .brand-icon { width: min(52px, 100%); height: 42px; }
  }

  @media (max-width: 620px) {
    width: 100%;
    justify-content: center;
    button { width: 56px; flex-basis: 56px; }
  }

  @media (max-width: 380px) {
    button { width: 48px; flex-basis: 48px; }
  }
`,A3=S.main`
  min-height: 75vh;
  padding: 18px 0 64px;
  background: #f5f5f5;
  color: #111;

  .utilities-intro {
    padding: 0 16px 38px;
    text-align: center;
  }

  h1 {
    margin: 0;
    font-size: clamp(24px, 4vw, 34px);
    font-weight: 900;
    line-height: 1.15;
    text-transform: uppercase;
  }

  .utilities-intro p {
    max-width: 700px;
    margin: 18px auto 0;
    color: #777;
    font-size: 15px;
    line-height: 1.65;
  }

  .empty-state {
    margin: 0;
    padding: 24px 18px;
    color: #626262;
    font-size: 14px;
    text-align: center;
  }

  .disclaimer {
    margin: 16px 0 0;
    padding: 0 12px;
    color: #777;
    font-size: 12px;
    line-height: 1.6;
  }

  @media (min-width: 701px) {
    padding-top: 72px;
    .utilities-intro { padding-bottom: 40px; }
  }
`,$3=S.div`
  width: min(100%, 330px);
  min-height: 38px;
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 30px auto 0;
  padding: 0 12px;
  border: 1px solid #888;
  border-radius: 7px;
  background: #fff;
  color: #111;

  input {
    width: 100%;
    min-width: 0;
    min-height: 36px;
    padding: 0;
    border: 0;
    outline: none;
    background: transparent;
    color: #111;
    font-size: 11px;
  }

  input::placeholder { color: #777; opacity: 1; }
  svg { flex: 0 0 auto; }
`,D3=S.section`
  width: min(100% - 32px, 1188px);
  margin: 0 auto;

  details { background: #fff; }
  summary {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    min-height: 62px;
    padding: 0 20px;
    cursor: pointer;
    list-style: none;
  }
  summary::-webkit-details-marker { display: none; }
  summary:focus-visible { outline: 3px solid #c6f36b; outline-offset: -3px; }
  .chevron {
    width: 9px;
    height: 9px;
    flex: 0 0 auto;
    border-top: 2px solid currentColor;
    border-left: 2px solid currentColor;
    transform: translateY(2px) rotate(45deg);
    transition: transform .18s ease;
  }
  details:not([open]) > summary .chevron { transform: translateY(-2px) rotate(225deg); }

  > .category {
    overflow: hidden;
    border: 1px solid #222;
    border-radius: 6px;
  }
  > .category > summary {
    border-bottom: 1px solid #333;
    font-size: 16px;
    font-weight: 600;
  }
  > .category:not([open]) > summary { border-bottom: 0; }

  .brands {
    display: grid;
    gap: 9px;
    padding: 0 19px 19px;
  }
  .brand {
    overflow: hidden;
    border: 1px solid #e1e1e1;
    border-radius: 7px;
  }
  .brand > summary {
    min-height: 61px;
    padding: 0 19px;
    font-size: 15px;
    font-weight: 600;
  }
  .models {
    display: grid;
    gap: 7px;
    padding: 0 12px 12px;
  }
  .model {
    overflow: hidden;
    border: 1px solid #e5e5e5;
    border-radius: 5px;
    background: #fafafa;
  }
  .model > summary {
    min-height: 48px;
    padding: 0 14px;
    font-size: 13px;
    font-weight: 600;
  }
  .model ul {
    display: grid;
    gap: 0;
    margin: 0;
    padding: 0 14px 8px;
    list-style: none;
  }
  .model li {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    padding: 10px 0;
    border-top: 1px solid #e8e8e8;
    color: #555;
    font-size: 12px;
  }
  .disclaimer { text-align: center; }

  @media (max-width: 600px) {
    width: min(100% - 24px, 1188px);
    .brands { padding: 0 10px 10px; }
    > .category > summary { min-height: 56px; padding: 0 15px; }
    .brand > summary { min-height: 54px; padding: 0 14px; }
  }

  @media (prefers-reduced-motion: reduce) {
    .chevron { transition: none; }
  }
`,ac="https://lionsseminovos.com.br/",Xl=[{name:"Lions Seminovos Nova Iguaçu",address:"Av. Carlos Marques Rollo, 137 - Imperador, Nova Iguaçu - RJ, 26225-290",image:"photo-1486406146926-c627a92ad1ab"},{name:"Lions Seminovos Nova Iguaçu - Dutra",address:"Rod. Pres. Dutra, 12900 - Jardim Tropical, Nova Iguaçu - RJ, 26010-700",image:"photo-1487958449943-2429e8be8625"},{name:"Lions Seminovos Intendente Magalhães",address:"Estrada Intendente Magalhães, 462 - Madureira, Rio de Janeiro - RJ, 21331-720",image:"photo-1511818966892-d7d671e672a2"},{name:"Lions Seminovos Niterói",address:"RJ-104, 2620 - Baldeador, Niterói - RJ, 24140-005",image:"photo-1486406146926-c627a92ad1ab"},{name:"Lions Seminovos Barra Mansa",address:"Consulte o endereço atualizado no site oficial.",image:"photo-1497366754035-f200968a6e72"},{name:"Lions Seminovos Campo Grande",address:"Estr. Rio do A, 2211 - Campo Grande, Rio de Janeiro - RJ, 23080-300",image:"photo-1497366811353-6870744d04b2"}],es=[{name:"Lions Seminovos Vila Prudente",address:"Consulte endereço e horários no site oficial.",image:"photo-1486406146926-c627a92ad1ab"},{name:"Lions Seminovos Osasco",address:"Consulte endereço e horários no site oficial.",image:"photo-1487958449943-2429e8be8625"},{name:"Lions Seminovos Santo Amaro",address:"Consulte endereço e horários no site oficial.",image:"photo-1511818966892-d7d671e672a2"},{name:"Lions Seminovos São Bernardo do Campo",address:"Consulte endereço e horários no site oficial.",image:"photo-1497366754035-f200968a6e72"},{name:"Lions Seminovos São Miguel",address:"Consulte endereço e horários no site oficial.",image:"photo-1497366811353-6870744d04b2"},{name:"Lions Seminovos Mogi das Cruzes",address:"Unidade em breve.",image:"photo-1486406146926-c627a92ad1ab",comingSoon:!0},{name:"Lions Seminovos Limeira",address:"Consulte endereço e horários no site oficial.",image:"photo-1487958449943-2429e8be8625"},{name:"Lions Seminovos Piracicaba",address:"Consulte endereço e horários no site oficial.",image:"photo-1511818966892-d7d671e672a2"},{name:"Lions Seminovos Campinas",address:"Consulte endereço e horários no site oficial.",image:"photo-1497366754035-f200968a6e72"},{name:"Lions Seminovos Indaiatuba",address:"Consulte endereço e horários no site oficial.",image:"photo-1497366811353-6870744d04b2"}],ts=[{name:"Lions Seminovos Orlando",address:"Consulte endereço e horários no site oficial.",image:"photo-1486406146926-c627a92ad1ab"},{name:"Lions Seminovos Miami",address:"Consulte endereço e horários no site oficial.",image:"photo-1487958449943-2429e8be8625"}],ku={"/financiamento":{title:"Financiamento",summary:"Uma página demonstrativa para conhecer a área de financiamento. Nenhuma proposta ou análise de crédito é feita aqui."},"/fipe":{title:"Consulta FIPE",summary:"Veja como seria a área de consulta. Esta demonstração não consulta nem exibe valores FIPE."},"/lojas":{title:"Lojas",summary:"Encontre uma unidade Lions Seminovos no Rio de Janeiro."},"/pos-venda":{title:"Pós-venda",summary:"Área demonstrativa de pós-venda, sem abertura de solicitações ou acesso a dados de atendimento."},"/estoque":{title:"Nosso Catálogo",summary:"Veículos de exemplo para avaliação da interface. A lista não representa o estoque disponível da loja."},"/agende-sua-visita":{title:"Agende sua visita",summary:"Formulário de demonstração. Nenhuma visita será marcada e nenhum dado será enviado ou armazenado."}};function V3({onSubmit:o}){const[u,s]=A.useState(!1),d=p=>{o(p),s(!0)};return l.jsxs(l.Fragment,{children:[l.jsxs(Ul,{children:[l.jsx("h2",{children:"Pedido de visita demonstrativo"}),l.jsx("p",{children:"Os campos existem apenas para demonstrar a interface. Não informe dados reais: não há envio, confirmação, agendamento ou armazenamento."})]}),l.jsxs(Ul,{children:[l.jsx(x3,{children:l.jsxs(v3,{onSubmit:d,children:[l.jsxs("label",{children:["Nome para demonstração",l.jsx("input",{name:"name",autoComplete:"off",placeholder:"Nome de exemplo",required:!0})]}),l.jsxs("label",{children:["Veículo de interesse (opcional)",l.jsx("input",{name:"vehicle",autoComplete:"off",placeholder:"Modelo de exemplo"})]}),l.jsxs("label",{children:["E-mail de exemplo",l.jsx("input",{name:"email",type:"email",autoComplete:"off",placeholder:"exemplo@email.com",required:!0})]}),l.jsxs("label",{children:["Telefone de exemplo",l.jsx("input",{name:"phone",type:"tel",autoComplete:"off",placeholder:"(00) 00000-0000",required:!0})]}),l.jsxs("button",{type:"submit",children:[l.jsx(zu,{size:16,"aria-hidden":"true"})," Testar formulário"]}),u&&l.jsx("p",{className:"form-status",role:"status",children:"Demonstração local: nenhuma visita foi agendada e nenhum dado foi enviado ou salvo."})]})}),l.jsxs(oc,{href:ac,target:"_blank",rel:"noreferrer",children:["Consulte os canais oficiais ",l.jsx(So,{size:16,"aria-hidden":"true"})]})]})]})}function B3(){const[o,u]=A.useState("fipe"),[s,d]=A.useState(""),[p,h]=A.useState(""),[j,C]=A.useState(60),[b,L]=A.useState(!1),w=ct.find(I=>String(I.id)===s),F=(I=>[...new Set(I)].sort((B,U)=>B.localeCompare(U,"pt-BR")))(ct.map(I=>I.brand));return l.jsx(g3,{children:l.jsxs("div",{className:"financing-content",children:[l.jsx("h1",{children:"Simule seu financiamento"}),l.jsxs("div",{className:"mode-switch",role:"group","aria-label":"Escolha como simular",children:[l.jsx("span",{children:"Simular por:"}),l.jsx("button",{type:"button",className:o==="values"?"active":"","aria-pressed":o==="values",onClick:()=>{u("values"),L(!1)},children:"Valores"}),l.jsx("button",{type:"button",className:o==="fipe"?"active":"","aria-pressed":o==="fipe",onClick:()=>{u("fipe"),L(!1)},children:"FIPE"})]}),l.jsx("div",{className:"financing-card",children:l.jsxs("form",{onSubmit:I=>{I.preventDefault(),L(!0)},children:[l.jsx("strong",{children:"Dados para simulação demonstrativa"}),l.jsxs("div",{className:"field-grid two-columns",children:[l.jsxs("label",{children:[l.jsx("span",{className:"visually-hidden",children:"Nome"}),l.jsx("input",{name:"name",autoComplete:"off",placeholder:"Seu nome (não informe dados reais)",required:!0})]}),l.jsxs("label",{children:[l.jsx("span",{className:"visually-hidden",children:"Telefone"}),l.jsx("input",{name:"phone",type:"tel",autoComplete:"off",placeholder:"Telefone demonstrativo",required:!0})]}),l.jsxs("label",{children:[l.jsx("span",{className:"visually-hidden",children:"E-mail"}),l.jsx("input",{name:"email",type:"email",autoComplete:"off",placeholder:"Email demonstrativo",required:!0})]}),l.jsxs("label",{children:[l.jsx("span",{className:"visually-hidden",children:"Loja"}),l.jsxs("select",{name:"store",defaultValue:"",required:!0,children:[l.jsx("option",{value:"",disabled:!0,children:"Selecione uma loja"}),[...Xl,...es,...ts].map(I=>l.jsx("option",{value:I.name,children:I.name},I.name))]})]})]}),l.jsx("strong",{children:"Simulador de financiamento"}),o==="fipe"?l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"field-grid two-columns",children:[l.jsxs("label",{children:[l.jsx("span",{className:"visually-hidden",children:"Tipo de veículo"}),l.jsx("select",{"aria-label":"Tipo de veículo",defaultValue:"car",children:l.jsx("option",{value:"car",children:"Carro"})})]}),l.jsxs("label",{children:[l.jsx("span",{className:"visually-hidden",children:"Marca"}),l.jsxs("select",{"aria-label":"Marca",value:p||(w==null?void 0:w.brand)||"",onChange:I=>{h(I.target.value);const B=ct.find(U=>U.brand===I.target.value);d(B?String(B.id):"")},children:[l.jsx("option",{value:"",disabled:!0,children:"Marca"}),F.map(I=>l.jsx("option",{value:I,children:I},I))]})]})]}),l.jsxs("div",{className:"field-grid three-columns",children:[l.jsxs("label",{children:[l.jsx("span",{className:"visually-hidden",children:"Modelo"}),l.jsxs("select",{"aria-label":"Modelo",value:(w==null?void 0:w.id)??"",onChange:I=>{const B=ct.find(U=>String(U.id)===I.target.value);d(I.target.value),B&&h(B.brand)},required:!0,children:[l.jsx("option",{value:"",disabled:!0,children:"Modelo"}),ct.filter(I=>!p&&!w||I.brand===(p||(w==null?void 0:w.brand))).map(I=>l.jsx("option",{value:I.id,children:I.model},I.id))]})]}),l.jsxs("label",{children:[l.jsx("span",{className:"visually-hidden",children:"Ano"}),l.jsxs("select",{"aria-label":"Ano",value:(w==null?void 0:w.year)??"",disabled:!w,children:[l.jsx("option",{value:"",disabled:!0,children:"Ano"}),w&&l.jsx("option",{value:w.year,children:w.year})]})]}),l.jsxs("label",{children:[l.jsx("span",{className:"visually-hidden",children:"Versão"}),l.jsxs("select",{"aria-label":"Versão",value:(w==null?void 0:w.version)??"",disabled:!w,children:[l.jsx("option",{value:"",disabled:!0,children:"Versão"}),w&&l.jsx("option",{value:w.version,children:w.version})]})]})]}),l.jsx("div",{className:"vehicle-value",children:w?`Valor de referência do mock: ${new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(Number(w.price))}`:"Escolha um veículo do mock"})]}):l.jsxs("div",{className:"field-grid two-columns",children:[l.jsxs("label",{children:[l.jsx("span",{className:"visually-hidden",children:"Valor a financiar"}),l.jsx("input",{type:"number",name:"amount",min:"1",step:"1000",placeholder:"Valor a ser financiado",required:!0})]}),l.jsxs("label",{children:[l.jsx("span",{className:"visually-hidden",children:"Valor de entrada"}),l.jsx("input",{type:"number",name:"downPayment",min:"0",step:"1000",placeholder:"Valor de entrada",required:!0})]})]}),l.jsx("strong",{children:"Quantidade de parcelas"}),l.jsx("div",{className:"installments",role:"group","aria-label":"Quantidade de parcelas",children:[12,24,36,48,60].map(I=>l.jsxs("button",{type:"button",className:j===I?"active":"","aria-pressed":j===I,onClick:()=>C(I),children:[I,"x"]},I))}),l.jsx("button",{className:"submit-button",type:"submit",children:"Ver demonstração"}),l.jsx("p",{className:"disclaimer",children:"Protótipo local: não consulta a Tabela FIPE, não calcula parcelas nem analisa crédito. Não informe dados pessoais; nada é enviado ou armazenado."}),b&&l.jsx("p",{className:"form-status",role:"status",children:"Demonstração local concluída. Para uma simulação real, acesse os canais oficiais da Lions."})]})})]})})}function H3(){const[o,u]=A.useState(!1),s=[...Xl,...es,...ts],d=["photo-1552519507-da3b142c6e3d","photo-1503376780353-7e6692767b70","photo-1519641471654-76ce0107ad1b","photo-1606611013016-969c19ba27bb","photo-1621007947382-bb3c3994e3fb","photo-1511919884226-fd3cad34687c"];return l.jsxs(ic,{className:"visit-appointment",children:[l.jsxs("section",{className:"appointment-form-panel",children:[l.jsx("p",{className:"appointment-eyebrow",children:"Atendimento personalizado"}),l.jsx("h1",{children:"Agende sua visita"}),l.jsxs("form",{onSubmit:p=>{p.preventDefault(),u(!0)},children:[l.jsxs("fieldset",{children:[l.jsx("legend",{children:"Dados pessoais"}),l.jsxs("div",{className:"form-row",children:[l.jsxs("label",{children:[l.jsx("span",{className:"visually-hidden",children:"Nome completo"}),l.jsx("input",{name:"name",autoComplete:"off",placeholder:"Nome completo",required:!0})]}),l.jsxs("label",{children:[l.jsx("span",{className:"visually-hidden",children:"Telefone"}),l.jsx("input",{name:"phone",type:"tel",autoComplete:"off",placeholder:"Telefone",required:!0})]})]}),l.jsxs("label",{children:[l.jsx("span",{className:"visually-hidden",children:"E-mail"}),l.jsx("input",{name:"email",type:"email",autoComplete:"off",placeholder:"E-mail",required:!0})]})]}),l.jsxs("fieldset",{children:[l.jsx("legend",{children:"Loja"}),l.jsxs("label",{className:"icon-field",children:[l.jsx(w2,{size:19,"aria-hidden":"true"}),l.jsx("span",{className:"visually-hidden",children:"Selecione uma loja"}),l.jsxs("select",{name:"store",defaultValue:"",required:!0,children:[l.jsx("option",{value:"",disabled:!0,children:"Loja mais próxima"}),s.map(p=>l.jsx("option",{value:p.name,children:p.name},p.name))]})]}),l.jsxs("div",{className:"form-row",children:[l.jsxs("label",{className:"icon-field",children:[l.jsx(zu,{size:18,"aria-hidden":"true"}),l.jsx("span",{className:"visually-hidden",children:"Data"}),l.jsx("input",{name:"date",type:"date","aria-label":"Data",required:!0})]}),l.jsxs("label",{className:"icon-field",children:[l.jsx(y2,{size:18,"aria-hidden":"true"}),l.jsx("span",{className:"visually-hidden",children:"Horário"}),l.jsxs("select",{name:"time",defaultValue:"",required:!0,"aria-label":"Horário",children:[l.jsx("option",{value:"",disabled:!0,children:"Horário"}),["09:00","10:00","11:00","13:00","14:00","15:00","16:00","17:00"].map(p=>l.jsx("option",{value:p,children:p},p))]})]})]})]}),l.jsxs("button",{type:"submit",children:["Agendar visita ",l.jsx(Kr,{size:18,"aria-hidden":"true"})]}),l.jsx("p",{className:"demo-disclaimer",children:"Demonstração local: os dados não são enviados nem armazenados e nenhuma visita será agendada."}),o&&l.jsx("p",{className:"form-status",role:"status",children:"Este formulário é apenas demonstrativo. Para agendar uma visita real, acesse os canais oficiais."})]})]}),l.jsxs("section",{className:"appointment-story","aria-labelledby":"appointment-story-title",children:[l.jsx("div",{className:"photo-wall","aria-hidden":"true",children:d.map(p=>l.jsx("img",{src:`https://images.unsplash.com/${p}?auto=format&fit=crop&w=800&q=80`,alt:"",loading:"lazy"},p))}),l.jsxs("div",{className:"story-copy",children:[l.jsx("p",{className:"story-eyebrow",children:"Sua próxima história começa aqui"}),l.jsxs("h2",{id:"appointment-story-title",children:["A Lions está com você",l.jsx("br",{}),"em cada encontro"]}),l.jsx("p",{children:"Na Lions, cada visita é pensada para você. Um momento exclusivo, com atendimento humano e atenção aos detalhes que realmente importam. Agende quando for melhor para você. Estamos prontos para receber, ouvir e ajudar no que for preciso."})]})]})]})}function U3(){const[o,u]=A.useState(!1),s=["photo-1519641471654-76ce0107ad1b","photo-1606611013016-969c19ba27bb","photo-1552519507-da3b142c6e3d","photo-1621007947382-bb3c3994e3fb","photo-1511919884226-fd3cad34687c","photo-1503376780353-7e6692767b70"];return l.jsxs(ic,{children:[l.jsxs("section",{className:"appointment-form-panel",children:[l.jsx("h1",{children:"Agende seu pós-venda"}),l.jsxs("form",{onSubmit:d=>{d.preventDefault(),u(!0)},children:[l.jsxs("fieldset",{children:[l.jsx("legend",{children:"Dados do proprietário"}),l.jsxs("label",{children:[l.jsx("span",{className:"visually-hidden",children:"CPF ou CNPJ"}),l.jsx("input",{name:"document",type:"text",inputMode:"numeric",autoComplete:"off",placeholder:"CPF / CNPJ","aria-label":"CPF ou CNPJ demonstrativo",required:!0})]})]}),l.jsxs("button",{type:"submit",children:["Continuar ",l.jsx(Kr,{size:18,"aria-hidden":"true"})]}),l.jsx("p",{className:"demo-disclaimer",children:"Demonstração local: não informe um documento real. Nenhuma consulta será realizada."}),o&&l.jsx("p",{className:"form-status",role:"status",children:"A consulta de pós-venda não está disponível nesta demonstração. Acesse os canais oficiais da Lions."})]})]}),l.jsxs("section",{className:"appointment-story","aria-labelledby":"post-sale-story-title",children:[l.jsx("div",{className:"photo-wall","aria-hidden":"true",children:s.map((d,p)=>l.jsx("img",{src:`https://images.unsplash.com/${d}?auto=format&fit=crop&w=800&q=80`,alt:"",loading:"lazy"},`${d}-${p}`))}),l.jsxs("div",{className:"story-copy",children:[l.jsx("h2",{id:"post-sale-story-title",children:"Sua jornada com a Lions não termina na entrega"}),l.jsx("p",{children:"A compra de um carro é apenas o começo da sua jornada. O pós-venda Lions foi pensado para estar ao seu lado no dia a dia, com atenção aos detalhes e suporte quando você precisar."})]})]})]})}function W3(){const[s,d]=A.useState(""),[p,h]=A.useState(""),[j,C]=A.useState(""),[b,L]=A.useState(""),[w,P]=A.useState(2014),[F,I]=A.useState(2026),[B,U]=A.useState(""),J=T=>[...new Set(T)].sort((M,ie)=>M.localeCompare(ie,"pt-BR")),de=J(ct.map(T=>T.brand)),Q=J(ct.map(T=>T.model)),xe=J(ct.map(T=>T.fuel)),me=J(ct.map(T=>T.category)),pe=s.trim().toLocaleLowerCase("pt-BR"),oe=12,Y=(w-2014)/oe*100,ee=(F-2014)/oe*100,Ce=ct.filter(T=>{const M=`${T.brand} ${T.model} ${T.version}`.toLocaleLowerCase("pt-BR");return(!pe||M.includes(pe))&&(!p||T.brand===p)&&(!j||T.model===j)&&(!b||T.fuel===b)&&T.year>=w&&T.year<=F&&(!B||T.category===B)}),Se=!!(s||p||j||b||w>2014||F<2026||B),Re=()=>{d(""),h(""),C(""),L(""),P(2014),I(2026),U("")};return l.jsxs(S3,{children:[l.jsx(j3,{children:l.jsxs("div",{className:"catalog-intro-content",children:[l.jsxs("p",{className:"eyebrow",children:["Lions Seminovos ",l.jsx("span",{})]}),l.jsxs("h1",{children:["Encontre seu ",l.jsx("em",{children:"próximo carro"})]}),l.jsx("p",{className:"summary",children:"Explore nosso catálogo demonstrativo e encontre o modelo ideal para sua próxima jornada."}),l.jsxs(C3,{role:"search","aria-label":"Buscar veículos",children:[l.jsx(ql,{size:20,"aria-hidden":"true"}),l.jsx("input",{type:"search",value:s,onChange:T=>d(T.target.value),placeholder:"Busque por marca, modelo ou versão","aria-label":"Buscar por marca, modelo ou versão"}),l.jsx("span",{className:"search-hint",children:"Buscar"})]})]})}),l.jsxs(z3,{children:[l.jsxs(N3,{"aria-label":"Filtros de veículos",children:[l.jsxs("div",{className:"filter-heading",children:[l.jsx("h2",{children:"Filtros"}),l.jsx("button",{type:"button",onClick:Re,disabled:!Se,children:"Limpar filtros"})]}),l.jsxs("label",{children:["Marca",l.jsxs("select",{value:p,onChange:T=>h(T.target.value),children:[l.jsx("option",{value:"",children:"Todas as marcas"}),de.map(T=>l.jsx("option",{value:T,children:T},T))]})]}),l.jsxs("label",{children:["Modelo",l.jsxs("select",{value:j,onChange:T=>C(T.target.value),children:[l.jsx("option",{value:"",children:"Todos os modelos"}),Q.map(T=>l.jsx("option",{value:T,children:T},T))]})]}),l.jsxs("label",{children:["Combustível",l.jsxs("select",{value:b,onChange:T=>L(T.target.value),children:[l.jsx("option",{value:"",children:"Todos"}),xe.map(T=>l.jsx("option",{value:T,children:T},T))]})]}),l.jsxs("fieldset",{className:"model-year-filter",children:[l.jsxs("legend",{children:["Ano modelo - ",w," / ",F]}),l.jsxs("div",{className:"year-slider","aria-label":"Intervalo de ano modelo",children:[l.jsx("div",{className:"year-track","aria-hidden":"true",children:l.jsx("span",{style:{left:`${Y}%`,right:`${100-ee}%`}})}),l.jsx("input",{type:"range",min:2014,max:2026,value:w,"aria-label":"Ano modelo inicial",onChange:T=>P(Math.min(Number(T.target.value),F))}),l.jsx("input",{type:"range",min:2014,max:2026,value:F,"aria-label":"Ano modelo final",onChange:T=>I(Math.max(Number(T.target.value),w))})]}),l.jsxs("div",{className:"year-slider-labels","aria-hidden":"true",children:[l.jsx("span",{children:2014}),l.jsx("span",{children:2026})]})]}),l.jsxs("label",{children:["Carroceria",l.jsxs("select",{value:B,onChange:T=>U(T.target.value),children:[l.jsx("option",{value:"",children:"Todas"}),me.map(T=>l.jsx("option",{value:T,children:T},T))]})]})]}),l.jsxs(E3,{"aria-live":"polite",children:[l.jsxs("div",{className:"results-heading",children:[l.jsxs("div",{children:[l.jsx("p",{className:"eyebrow",children:"Seleção Lions"}),l.jsx("h2",{children:"Veículos do catálogo"})]}),l.jsxs("p",{className:"result-count",children:[l.jsx("strong",{children:Ce.length}),Ce.length===1?" veículo":" veículos"]})]}),Ce.length?l.jsx(M3,{children:Ce.map(T=>l.jsxs(_3,{children:[l.jsxs("div",{className:"vehicle-image",children:[l.jsx("img",{src:T.imageUrl,alt:`Imagem ilustrativa de ${T.brand} ${T.model}`,loading:"lazy"}),l.jsx("span",{className:"demo-badge",children:"Veículo exemplo"}),l.jsx("span",{className:"year-badge",children:T.year})]}),l.jsxs("div",{className:"details",children:[l.jsx("p",{className:"eyebrow",children:T.brand}),l.jsx("h2",{children:T.model}),l.jsx("p",{className:"version",children:T.version}),l.jsxs("div",{className:"specs",children:[l.jsxs("span",{children:[T.mileage.toLocaleString("pt-BR")," km"]}),l.jsx("span",{children:T.fuel}),l.jsx("span",{children:T.transmission})]}),l.jsxs("p",{className:"price",children:[l.jsx("small",{children:"Preço de exemplo — não é oferta"}),Number(T.price).toLocaleString("pt-BR",{style:"currency",currency:"BRL"})]}),l.jsxs("a",{className:"vehicle-cta",href:"/agende-sua-visita",children:["Agendar visita ",l.jsx(So,{size:16,"aria-hidden":"true"})]})]})]},T.id))}):l.jsxs(P3,{role:"status",children:[l.jsx("h2",{children:"Nenhum veículo encontrado"}),l.jsx("p",{children:"Tente ajustar ou limpar os filtros para ver os exemplos disponíveis."}),l.jsx("button",{type:"button",onClick:Re,children:"Limpar filtros"})]}),l.jsx("p",{className:"catalog-disclaimer",children:"Demonstração com dados locais. Veículos, características e preços são fictícios e não representam disponibilidade, oferta ou venda real. Nenhum contato ou agendamento é enviado por esta página."})]})]})]})}function q3(){const[o,u]=A.useState(""),s=j=>j.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLocaleLowerCase("pt-BR"),d=s(o.trim()),p=ct.filter(j=>s(`${j.brand} ${j.model} ${j.version} ${j.year}`).includes(d)),h=[...new Set(p.map(j=>j.brand))].sort((j,C)=>j.localeCompare(C,"pt-BR"));return l.jsxs(A3,{children:[l.jsxs("header",{className:"utilities-intro",children:[l.jsx("h1",{children:"VEJA TODAS AS CATEGORIAS DE UBER DISPONÍVEIS"}),l.jsx("p",{children:"Aqui você encontra todos os carros que podem ser cadastrados no app da Uber de acordo com a categoria. Aproveite e confira a melhor opção para o seu custo benefício."}),l.jsxs($3,{role:"search","aria-label":"Pesquisar veículos",children:[l.jsx("input",{type:"search",value:o,onChange:j=>u(j.target.value),placeholder:"Pesquisar por marca, ou modelo ou ano","aria-label":"Pesquisar por marca, modelo ou ano"}),l.jsx(ql,{size:20,"aria-hidden":"true"})]})]}),l.jsxs(D3,{"aria-live":"polite",children:[l.jsxs("details",{className:"category",open:!0,children:[l.jsxs("summary",{children:[l.jsx("span",{children:"Black"}),l.jsx("span",{className:"chevron","aria-hidden":"true"})]}),l.jsx("div",{className:"brands",children:h.length>0?h.map(j=>{const C=p.filter(L=>L.brand===j),b=[...new Set(C.map(L=>L.model))].sort((L,w)=>L.localeCompare(w,"pt-BR"));return l.jsxs("details",{className:"brand",children:[l.jsxs("summary",{children:[l.jsx("span",{children:j}),l.jsx("span",{className:"chevron","aria-hidden":"true"})]}),l.jsx("div",{className:"models",children:b.map(L=>{const w=C.filter(P=>P.model===L).sort((P,F)=>F.year-P.year);return l.jsxs("details",{className:"model",children:[l.jsxs("summary",{children:[l.jsx("span",{children:L}),l.jsx("span",{className:"chevron","aria-hidden":"true"})]}),l.jsx("ul",{children:w.map(P=>l.jsxs("li",{children:[l.jsx("span",{children:P.version}),l.jsx("span",{children:P.year})]},P.id))})]},L)})})]},j)}):l.jsx("p",{className:"empty-state",children:"Nenhum veículo encontrado. Tente outra marca, modelo ou ano."})})]}),l.jsx("p",{className:"disclaimer",children:"Os veículos exibidos são exemplos do catálogo demonstrativo. Confirme diretamente com a Uber a elegibilidade de cada modelo e ano antes de se cadastrar."})]})]})}const bu=[{id:"carros",label:"Carros",title:"Principais marcas de carros",popular:["Fiat","Peugeot","Renault","Citroën","Volkswagen","Chevrolet","Kia","Honda","Toyota","Hyundai","JAC","Mitsubishi","Audi","BMW","Ford","Chery","BYD"],other:["Nissan","Jeep","Volvo","Subaru","Suzuki"]},{id:"motos",label:"Motos",title:"Principais marcas de motos",popular:["BMW","Yamaha","Suzuki","Honda","Ducati"],other:["Kawasaki","KTM","Husqvarna","Dafra","Shineray"]},{id:"caminhoes",label:"Caminhões",title:"Principais marcas de caminhões",popular:["Volvo","Scania","Volkswagen","Iveco","Ford","DAF","MAN"],other:["Agrale","International","Sinotruk"]}],Tl={Audi:pf,BMW:mf,Chevrolet:gf,Citroën:vf,DAF:wf,Ducati:bf,Fiat:jf,Ford:zf,Honda:Ef,Husqvarna:_f,Hyundai:Lf,Iveco:Tf,Jeep:Ff,Kia:Af,KTM:Df,MAN:Bf,Mazda:Uf,Mitsubishi:qf,Nissan:Yf,Peugeot:Kf,Renault:Zf,Scania:e3,Subaru:n3,Suzuki:i3,Toyota:a3,Volkswagen:s3,Volvo:c3,Yamaha:p3};function Q3(){const[o,u]=A.useState("carros"),[s,d]=A.useState(""),[p,h]=A.useState([]),j=s.trim().normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLocaleLowerCase("pt-BR"),C=w=>{var P;u(w),(P=document.getElementById(`fipe-${w}`))==null||P.scrollIntoView({behavior:"smooth",block:"start"})},b=w=>{h(P=>P.includes(w)?P.filter(F=>F!==w):[...P,w])},L=w=>{if(!j)return!0;const P=ct.filter(F=>F.brand===w).map(F=>`${F.model} ${F.version} ${F.year}`);return[w,...P].some(F=>F.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLocaleLowerCase("pt-BR").includes(j))};return l.jsxs(L3,{children:[l.jsxs("header",{className:"fipe-header",children:[l.jsx("h1",{children:"TABELA FIPE"}),l.jsx(R3,{"aria-label":"Categorias da tabela FIPE",children:bu.map(w=>l.jsx("button",{type:"button",className:o===w.id?"active":"","aria-pressed":o===w.id,onClick:()=>C(w.id),children:w.label},w.id))}),l.jsxs(T3,{role:"search","aria-label":"Pesquisar marcas e modelos",children:[l.jsx("span",{"aria-hidden":"true",children:l.jsx(ql,{size:19,"aria-hidden":"true"})}),l.jsx("input",{type:"search",value:s,onChange:w=>d(w.target.value),placeholder:"PESQUISE POR MARCA OU MODELO","aria-label":"Pesquise por marca ou modelo"})]})]}),l.jsx(I3,{children:bu.map(w=>{const P=[...w.popular,...p.includes(w.id)?w.other:[]].filter(I=>Tl[I]!==void 0&&L(I)),F=w.other.some(I=>Tl[I]!==void 0);return l.jsxs(F3,{id:`fipe-${w.id}`,children:[l.jsx("h2",{children:w.title}),l.jsxs("div",{className:"brand-row",children:[l.jsxs(O3,{"aria-label":w.title,children:[P.map(I=>{const B=Tl[I];return B?l.jsx("button",{type:"button","aria-label":`Pesquisar ${I}`,title:I,onClick:()=>d(I),children:l.jsx(B,{className:"brand-icon",color:"white","aria-hidden":"true"})},I):null}),P.length===0&&l.jsx("p",{className:"empty-brands",children:"Nenhuma marca ou modelo encontrado."})]}),F&&l.jsx("button",{type:"button",className:"other-brands","aria-expanded":p.includes(w.id),onClick:()=>b(w.id),children:p.includes(w.id)?"Menos marcas":"Outras marcas"})]})]},w.id)})}),l.jsx("p",{className:"fipe-disclaimer",children:"Demonstração visual: a busca não consulta a Tabela FIPE nem retorna valores."})]})}function Y3({path:o}){return o==="/agende-sua-visita"?l.jsx(V3,{onSubmit:u=>u.preventDefault()}):l.jsx(Ul,{children:l.jsxs(y3,{children:[l.jsxs(wu,{children:[l.jsx("div",{className:"icon",children:l.jsx(S2,{size:20,"aria-hidden":"true"})}),l.jsx("h3",{children:"Informações de pós-venda"}),l.jsx("p",{children:"Não há solicitação de atendimento, consulta de serviço ou acompanhamento de protocolo nesta página demonstrativa."}),l.jsxs(oc,{href:ac,target:"_blank",rel:"noreferrer",children:["Acessar o canal oficial ",l.jsx(So,{size:16,"aria-hidden":"true"})]})]}),l.jsxs(wu,{children:[l.jsx("div",{className:"icon",children:l.jsx(v2,{size:20,"aria-hidden":"true"})}),l.jsx("h3",{children:"Sem integração de atendimento"}),l.jsx("p",{children:"Este protótipo não se conecta a sistemas, registros ou equipes de pós-venda."})]})]})})}function G3(){const o=[{name:"Rio de Janeiro",stores:Xl},{name:"São Paulo",stores:es},{name:"Flórida",stores:ts}];return l.jsx(w3,{children:l.jsxs("div",{className:"stores-content",children:[l.jsx("p",{className:"stores-note",children:"Imagens ilustrativas. Confirme endereços e horários no site oficial."}),o.map((u,s)=>l.jsxs("section",{className:"store-region","aria-labelledby":`region-${s}`,children:[s===0?l.jsx("h1",{id:`region-${s}`,children:u.name}):l.jsx("h2",{className:"region-title",id:`region-${s}`,children:u.name}),l.jsx(k3,{children:u.stores.map(d=>l.jsxs(b3,{className:"comingSoon"in d&&d.comingSoon?"coming-soon":void 0,children:["comingSoon"in d&&d.comingSoon?l.jsxs("div",{className:"coming-soon-art","aria-label":"Unidade em breve",children:[l.jsx("strong",{children:"EM BREVE"}),l.jsx("span",{children:"Lions Seminovos"})]}):l.jsx("img",{src:`https://images.unsplash.com/${d.image}?auto=format&fit=crop&w=900&q=80`,alt:`Imagem ilustrativa de uma unidade ${d.name}`,loading:"lazy"}),l.jsxs("div",{className:"store-details",children:[l.jsx("h3",{children:d.name}),l.jsx("p",{children:d.address})]})]},d.name))})]},u.name))]})})}function K3({path:o}){if(o==="/estoque")return l.jsx(W3,{});if(o==="/utilitarios")return l.jsx(q3,{});if(o==="/fipe")return l.jsx(Q3,{});if(o==="/lojas")return l.jsx(G3,{});if(o==="/financiamento")return l.jsx(B3,{});if(o==="/agende-sua-visita")return l.jsx(H3,{});if(o==="/pos-venda")return l.jsx(U3,{});const u=ku[o]??ku["/estoque"];return l.jsxs(f3,{children:[l.jsx(m3,{children:l.jsxs("div",{children:[l.jsx("p",{className:"eyebrow",children:"Lions Seminovos"}),l.jsx("h1",{children:u.title}),l.jsx("p",{className:"summary",children:u.summary})]})}),l.jsx(h3,{children:l.jsx(Y3,{path:o})})]})}const jn="https://lionsseminovos.com.br/",Il=[{label:"Financiamento",href:"/financiamento"},{label:"FIPE",href:"/fipe"},{label:"Lojas",href:"/lojas"},{label:"Pós-venda",href:"/pos-venda"},{label:"Catálogo",href:"/estoque?pagina=1"},{label:"Agende sua visita",href:"/agende-sua-visita"},{label:"Utilitários",href:"/utilitarios"}],Su="https://dmmfmlu2mykln.cloudfront.net/site/home/videoTeste/04526e36ecca4c9aae4080a844028fc5.m3u8",J3="https://cdn.jsdelivr.net/npm/hls.js@1.5.18/dist/hls.min.js",Z3=o=>new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(Number(o)),X3=o=>`${new Intl.NumberFormat("pt-BR").format(o)} km`,Qr=[{image:"https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=2000&q=88",eyebrow:"Uma nova estrada começa aqui",title:["Carros","para sua","história"],detail:"Encontre seu próximo seminovo com a experiência Lions.",label:"Seminovos"},{image:"https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2000&q=88",eyebrow:"A escolha certa para seguir em frente",title:["Seu próximo","capítulo","começa aqui"],detail:"Diversas opções para você escolher com tranquilidade.",label:"Seu próximo carro"},{image:"https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=2000&q=88",eyebrow:"Mais caminhos. Mais possibilidades.",title:["Vem de","Lions","Seminovos"],detail:"Explore a vitrine demonstrativa e encontre um novo destino.",label:"Lions Seminovos"}],e4=[{label:"Utilitários",className:"utility",image:"https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1200&q=85"},{label:"SUV",image:"https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=900&q=85"},{label:"Hatch",image:"https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=900&q=85"},{label:"Sedan",className:"sedan",image:"https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=1200&q=85"}];function t4(){const[o,u]=A.useState(0),[s,d]=A.useState(!1),[p,h]=A.useState(!1),[j,C]=A.useState(!1),[b,L]=A.useState(()=>typeof window<"u"&&window.matchMedia("(max-width: 700px)").matches),[w,P]=A.useState(()=>typeof window>"u"||!window.matchMedia("(max-width: 700px)").matches),[F,I]=A.useState(!1),[B,U]=A.useState(!1),J=A.useRef(null),de=A.useRef(null),Q=A.useRef(null),xe=A.useRef(null),me=A.useRef(null),pe=A.useRef(null),oe=A.useRef(null);A.useEffect(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const M=window.setInterval(()=>{u(ie=>(ie+1)%Qr.length)},6500);return()=>window.clearInterval(M)},[]),A.useEffect(()=>{const M=window.matchMedia("(max-width: 700px)"),ie=we=>{L(we.matches),P(!we.matches)};return M.addEventListener("change",ie),()=>M.removeEventListener("change",ie)},[]),A.useEffect(()=>{const M=()=>C(window.scrollY>10);return M(),window.addEventListener("scroll",M,{passive:!0}),()=>window.removeEventListener("scroll",M)},[]),A.useEffect(()=>{var we;if(!s||!b)return;const M=document.body.style.overflow,ie=be=>{be.key==="Escape"&&d(!1)};return document.body.style.overflow="hidden",document.addEventListener("keydown",ie),(we=pe.current)==null||we.focus(),()=>{var be;document.body.style.overflow=M,document.removeEventListener("keydown",ie),(be=me.current)==null||be.focus()}},[b,s]),A.useEffect(()=>{J.current&&(J.current.inert=!w)},[w]),A.useEffect(()=>{var we;if(!b||!w)return;const M=document.body.style.overflow,ie=be=>{be.key==="Escape"&&Ce()};return document.body.style.overflow="hidden",document.addEventListener("keydown",ie),(we=de.current)==null||we.focus(),()=>{document.body.style.overflow=M,document.removeEventListener("keydown",ie)}},[b,w]),A.useEffect(()=>{const M=oe.current;if(!M)return;if(M.canPlayType("application/vnd.apple.mpegurl")){M.src=Su;return}let ie=!1,we;const be=()=>{const le=window.Hls;if(!le||!le.isSupported()){U(!0);return}we=new le,we.loadSource(Su),we.attachMedia(M),we.on(le.Events.ERROR,(O,K)=>{K.fatal&&!ie&&U(!0)})};if(window.Hls)be();else{const le=document.createElement("script");le.src=J3,le.async=!0,le.onload=()=>{ie||be()},le.onerror=()=>{ie||U(!0)},document.head.appendChild(le)}return()=>{ie=!0,we==null||we.destroy()}},[]);function Y(M){u(ie=>(ie+M+Qr.length)%Qr.length)}function ee(M){M.preventDefault(),h(!0)}function Ce(){P(!1),window.requestAnimationFrame(()=>{var M;(M=b?Q.current:xe.current)==null||M.focus()})}const Se=Qr[o],Re=window.location.pathname.replace(/\/+$/,"")||"/",T=Re==="/";return l.jsxs(l.Fragment,{children:[l.jsx(Tp,{}),l.jsxs(Ip,{$scrolled:j,$menuOpen:s,children:[l.jsxs(Fp,{"aria-label":"Navegação principal",children:[l.jsx(xu,{href:"/","aria-label":"Lions - início",children:l.jsx("img",{src:"/lions-logo.svg",alt:""})}),l.jsx(Op,{children:Il.map(M=>l.jsx("a",{href:M.href,children:M.label},M.href))}),l.jsxs(vu,{"aria-label":"Redes sociais",children:[l.jsx("a",{href:"https://www.instagram.com/lionsseminovos",target:"_blank",rel:"noreferrer","aria-label":"Instagram",children:"◎"}),l.jsx("a",{href:"https://www.facebook.com/lionsseminovos",target:"_blank",rel:"noreferrer","aria-label":"Facebook",children:"f"})]}),l.jsx(Ap,{ref:me,type:"button","aria-label":s?"Fechar menu":"Abrir menu","aria-expanded":s,onClick:()=>d(M=>!M),children:s?l.jsx(Nl,{size:21}):l.jsx(k2,{size:21})})]}),l.jsxs($p,{$open:s,"aria-hidden":!s,role:"dialog","aria-modal":b&&s?!0:void 0,"aria-label":"Menu principal",children:[l.jsxs("div",{className:"menu-head",children:[l.jsx(xu,{href:"/",onClick:()=>d(!1),"aria-label":"Lions - início",children:l.jsx("img",{src:"/lions-logo.svg",alt:""})}),l.jsx("button",{ref:pe,className:"menu-close",type:"button","aria-label":"Fechar menu",onClick:()=>d(!1),children:l.jsx(Nl,{size:21})})]}),l.jsx("nav",{"aria-label":"Menu principal",children:Il.map(M=>l.jsx("a",{href:M.href,onClick:()=>d(!1),children:M.label},M.href))}),l.jsxs(vu,{className:"menu-social","aria-label":"Redes sociais",children:[l.jsx("a",{href:"https://www.instagram.com/lionsseminovos",target:"_blank",rel:"noreferrer","aria-label":"Instagram",children:"◎"}),l.jsx("a",{href:"https://www.facebook.com/lionsseminovos",target:"_blank",rel:"noreferrer","aria-label":"Facebook",children:"f"})]})]})]}),T?l.jsxs("main",{children:[l.jsxs(Dp,{id:"inicio",children:[l.jsx(Vp,{$image:Se.image}),l.jsxs(Bp,{children:[l.jsxs(Wp,{children:[l.jsx("p",{className:"eyebrow",children:Se.eyebrow}),l.jsx("h1",{children:Se.label}),l.jsx("p",{children:Se.detail}),l.jsxs("a",{href:"/estoque?pagina=1",children:["Ver seminovos ",l.jsx(Kr,{size:15})]})]}),l.jsxs(qp,{"aria-live":"polite",children:[l.jsx("p",{className:"small",children:Se.title[0]}),l.jsx("h2",{children:Se.title.slice(1).map(M=>l.jsxs("span",{children:[M,l.jsx("br",{})]},M))}),l.jsx("p",{className:"details",children:Se.detail}),l.jsxs("div",{className:"tags",children:[l.jsx("span",{children:"SEMINOVOS"}),l.jsx("span",{children:"PROCEDÊNCIA"})]}),l.jsx("p",{className:"disclaimer",children:"*CONSULTE O ESTOQUE NO SITE OFICIAL"})]})]}),l.jsx(yu,{type:"button",$side:"left","aria-label":"Campanha anterior",onClick:()=>Y(-1),children:l.jsx(g2,{size:20})}),l.jsx(yu,{type:"button",$side:"right","aria-label":"Próxima campanha",onClick:()=>Y(1),children:l.jsx(Kr,{size:20})}),l.jsx(Qp,{"aria-label":"Selecionar campanha",children:Qr.map((M,ie)=>l.jsx("button",{type:"button","aria-label":`Mostrar campanha ${ie+1}`,"aria-current":o===ie,onClick:()=>u(ie)},M.label))})]}),l.jsx(Yp,{id:"categorias",children:l.jsx(Gp,{children:e4.map(M=>l.jsx(Kp,{href:M.label==="Utilitários"?"/utilitarios":"/estoque?pagina=1",className:`category-card ${M.className??""}`,$image:M.image,children:l.jsxs("div",{className:"content",children:[l.jsx("h3",{children:M.label}),l.jsx("span",{children:"Conferir"})]})},M.label))})}),l.jsx(Xp,{children:l.jsxs(rc,{children:[l.jsxs(Zp,{children:[l.jsxs("div",{children:[l.jsx("p",{className:"eyebrow",children:"Vitrine Lions"}),l.jsx("h2",{children:"Encontre seu próximo carro"})]}),l.jsx("p",{children:"Veículos de demonstração preenchidos com os dados mock do projeto."})]}),l.jsx(ef,{children:ct.map(M=>l.jsxs(nf,{children:[l.jsxs("div",{className:"photo",children:[l.jsx("img",{src:M.imageUrl,alt:`${M.brand} ${M.model}`,loading:"lazy"}),M.featured&&l.jsx("span",{className:"tag",children:"Destaque"})]}),l.jsxs("div",{className:"body",children:[l.jsxs("div",{className:"meta",children:[l.jsx("span",{children:M.year}),l.jsx("span",{children:X3(M.mileage)})]}),l.jsxs("h3",{children:[M.brand," ",M.model]}),l.jsxs("p",{className:"version",children:[M.version," · ",M.transmission]}),l.jsxs("div",{className:"price",children:[l.jsx("small",{children:"Preço demonstrativo"}),Z3(M.price)]})]})]},M.id))}),l.jsxs("a",{className:"catalog-link",href:"/estoque?pagina=1",children:["Ver catálogo completo ",l.jsx(Kr,{size:16,"aria-hidden":"true"})]})]})}),l.jsx(Jp,{id:"catalogo",children:l.jsxs(tf,{children:[l.jsx("video",{ref:oe,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,preload:"metadata",onError:()=>U(!0),"aria-label":"Vídeo da vitrine Lions Seminovos",children:"Seu navegador não consegue reproduzir este vídeo."}),B&&l.jsx("p",{role:"status",children:"Não foi possível reproduzir o vídeo neste navegador."})]})}),l.jsxs(rf,{id:"financiamento",$image:"https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1800&q=85",children:[l.jsxs("div",{className:"copy",children:[l.jsx("span",{children:"Financiamento Lions"}),l.jsx("h2",{children:"Seu próximo carro começa com uma boa escolha."}),l.jsx("p",{children:"Veja como funciona a jornada de financiamento e fale com a loja para conhecer as condições."}),l.jsxs(af,{href:"/financiamento",children:["Saiba mais ",l.jsx(So,{size:15})]})]}),l.jsxs(of,{onSubmit:M=>{M.preventDefault(),I(!0)},children:[l.jsx("h3",{children:"Faça uma simulação demonstrativa"}),l.jsx("p",{children:"Etapa visual apenas. Não informe dados pessoais: não há consulta, aprovação ou envio."}),l.jsx("label",{htmlFor:"finance-demo",children:"Etapa demonstrativa"}),l.jsx("input",{id:"finance-demo",name:"finance-demo",value:"Sem consulta de crédito",readOnly:!0}),l.jsx("button",{type:"submit",children:F?"Demonstração visualizada":"Ver demonstração"}),F&&l.jsxs("p",{className:"notice",role:"status",children:["Não consultamos crédito nesta demonstração. Para uma análise real, acesse o"," ",l.jsx("a",{href:jn,target:"_blank",rel:"noreferrer",children:"site oficial da Lions"}),"."]})]})]})]}):l.jsx(K3,{path:Re}),T&&b&&w&&l.jsx(Up,{type:"button","aria-label":"Fechar formulário de desconto",onClick:Ce}),T&&l.jsxs(Hp,{id:"lead-drawer",ref:J,$open:w,"aria-hidden":!w,role:"dialog","aria-modal":b&&w?!0:void 0,"aria-labelledby":"lead-drawer-title",onSubmit:ee,children:[l.jsx("button",{ref:de,className:"drawer-close",type:"button","aria-label":b?"Fechar formulário de desconto":"Recolher formulário de desconto",onClick:Ce,children:l.jsx(Nl,{size:14})}),l.jsxs("h2",{id:"lead-drawer-title",children:["Ganhe um desconto de até ",l.jsx("strong",{children:"R$ 3.000,00"})]}),l.jsx("p",{className:"demo-label",children:"Protótipo para avaliação: oferta ilustrativa, não envie dados reais. Nada será enviado ou salvo."}),l.jsxs("div",{className:"lead-cars","aria-hidden":"true",children:["LIONS ",l.jsx("span",{children:"SEMINOVOS"})]}),l.jsxs("div",{className:"fields",children:[l.jsx("input",{"aria-label":"Seu nome",name:"name",placeholder:"Seu nome",autoComplete:"name",required:!0}),l.jsx("input",{"aria-label":"Telefone",name:"phone",type:"tel",placeholder:"Telefone",autoComplete:"tel",required:!0}),l.jsx("input",{"aria-label":"E-mail",name:"email",type:"email",placeholder:"Email",autoComplete:"email",required:!0}),l.jsx("select",{"aria-label":"Loja demonstrativa",name:"store",defaultValue:"demo",children:l.jsx("option",{value:"demo",children:"Sem unidade real cadastrada (demonstração)"})})]}),l.jsx("button",{type:"submit",children:p?"Demonstração visualizada":"Solicitar"}),l.jsx("p",{className:"notice",role:p?"status":void 0,children:p?l.jsxs(l.Fragment,{children:["Demonstração local: nada foi enviado ou salvo. Para contato real, acesse o ",l.jsx("a",{href:jn,target:"_blank",rel:"noreferrer",children:"site oficial"}),"."]}):l.jsxs(l.Fragment,{children:["Formulário demonstrativo: nada será enviado ou salvo. ",l.jsx("a",{href:jn,target:"_blank",rel:"noreferrer",children:"Consulte o site oficial"}),"."]})})]}),T&&!b&&!w&&l.jsx(cf,{ref:xe,type:"button","aria-label":"Abrir formulário de desconto","aria-controls":"lead-drawer","aria-expanded":!1,onClick:()=>P(!0),children:"Seu desconto está aqui!"}),l.jsxs(lf,{children:[l.jsxs("nav",{"aria-label":"Links institucionais",children:[Il.map(M=>l.jsx("a",{href:M.href,children:M.label},M.href)),l.jsx("a",{href:`${jn}trabalhe_conosco`,children:"Trabalhe conosco"}),l.jsx("a",{href:`${jn}parceiro`,children:"Parceiro de negócio"}),l.jsx("a",{href:`${jn}termos-de-uso`,children:"Termos de uso"})]}),l.jsx("p",{className:"company",children:"LIONS PRE-OWNED S. A. - 19.826.203/0001-60"}),l.jsx("p",{className:"credit",children:"Feito por Victor Guterres"})]}),T&&b&&l.jsxs(uf,{ref:Q,type:"button","aria-label":"Abrir promoção de desconto de R$ 3.000",$open:w,"aria-controls":"lead-drawer","aria-expanded":w,onClick:()=>P(!0),children:[l.jsxs("span",{className:"badge-icon","aria-hidden":"true",children:[l.jsx(x2,{className:"car-icon",size:29,strokeWidth:2.6}),l.jsx(b2,{className:"tag-icon",size:22,strokeWidth:2.8})]}),l.jsxs("span",{className:"offer-label",children:[l.jsx("span",{children:"Voucher de"}),l.jsx("strong",{children:"R$ 3.000"})]})]}),T&&l.jsxs(sf,{href:jn,target:"_blank",rel:"noreferrer","aria-label":"Fale com a Lions pelo site oficial",children:[l.jsxs("svg",{viewBox:"0 0 32 32","aria-hidden":"true",children:[l.jsx("path",{d:"M16 3.5a12.1 12.1 0 0 0-10.4 18.3L4 28l6.4-1.6A12.1 12.1 0 1 0 16 3.5Z"}),l.jsx("path",{d:"M12.1 10.1c.3-.6.6-.6 1-.6h.7c.2 0 .5.1.6.5l1 2.4c.1.3.1.5-.1.7l-.8 1c-.2.2-.3.4-.1.7.3.6 1.1 1.8 2.4 2.8 1.6 1.2 2.8 1.6 3.3 1.8.4.2.6.1.8-.2l1.1-1.3c.2-.3.5-.3.8-.2l2.2 1.1c.3.2.5.3.5.5 0 .3-.2 1.6-1.2 2.4-.8.8-1.9 1.1-3.1.9-1.1-.2-2.6-.7-4.5-1.8-2.4-1.4-4.2-3.5-5.2-5.1-.9-1.5-1.4-3-1.3-4.1.1-1 .6-1.8 1.1-2.4Z"})]}),l.jsx("span",{children:"Quero comprar"})]})]})}const n4=nc`
  :root {
    font-family: "DM Sans", sans-serif;
    color: #181a15;
    background: #f5f5f0;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-optical-sizing: auto;
    scroll-behavior: smooth;
    --ink: #181a15;
    --dark: #11120f;
    --muted: #73766c;
    --lime: #c6f36b;
    --paper: #f5f5f0;
  }

  * { box-sizing: border-box; }
  body { min-width: 320px; margin: 0; }
  button, input, select, textarea { font: inherit; }
  button, a { -webkit-tap-highlight-color: transparent; }
  a { color: inherit; text-decoration: none; }
  button:focus-visible, a:focus-visible, input:focus-visible, select:focus-visible, textarea:focus-visible {
    outline: 3px solid #85b737;
    outline-offset: 3px;
  }
  ::selection { background: #c6f36b; color: #11120f; }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      scroll-behavior: auto !important;
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
`;S.div`
  width: min(100% - 80px, 1240px);
  margin: 0 auto;

  @media (max-width: 720px) {
    width: min(100% - 40px, 560px);
  }
`;S.header`
  position: absolute;
  z-index: 5;
  inset: 0 0 auto;
  color: #fff;
`;S.nav`
  min-height: 88px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.13);
`;S.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  flex: 0 0 auto;
`;S.span`
  width: 39px;
  height: 39px;
  display: grid;
  place-items: center;
  overflow: hidden;
  border-radius: 12px;
  background: var(--lime);
  color: var(--dark);
  font-family: Manrope, sans-serif;
  font-size: 24px;
  font-weight: 800;
  letter-spacing: -.08em;
`;S.span`
  display: grid;
  gap: 1px;
  line-height: 1;

  strong {
    font-family: Manrope, sans-serif;
    font-size: 19px;
    font-weight: 800;
    letter-spacing: 0.14em;
  }

  span {
    color: var(--lime);
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 0.25em;
  }
`;S.div`
  display: flex;
  align-items: center;
  gap: clamp(24px, 4vw, 55px);

  @media (max-width: 850px) {
    display: none;
  }
`;S.a`
  color: rgba(255, 255, 255, 0.76);
  font-size: 13px;
  transition: color 160ms ease;

  &:hover { color: var(--lime); }
`;S.a`
  display: inline-flex;
  align-items: center;
  gap: 11px;
  padding: 12px 16px;
  border: 1px solid rgba(255, 255, 255, 0.24);
  border-radius: 3px;
  font-size: 12px;
  font-weight: 600;
  transition: background 160ms ease, color 160ms ease;

  &:hover { background: var(--lime); border-color: var(--lime); color: var(--dark); }

  @media (max-width: 850px) { display: none; }
`;S.button`
  display: none;
  color: #fff;
  background: transparent;
  border: 0;
  padding: 9px;
  cursor: pointer;

  @media (max-width: 850px) { display: grid; place-items: center; }
`;S.div`
  display: grid;
  gap: 2px;
  padding: 10px;
  border: 1px solid rgba(255,255,255,.1);
  background: #1b1d18;

  a { padding: 13px; font-size: 14px; }
  a:hover { color: var(--lime); }
`;S.section`
  min-height: 745px;
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
  isolation: isolate;
  color: #fff;
  background: #10110e;

  @media (max-width: 720px) {
    min-height: 780px;
    align-items: flex-start;
  }
`;S.div`
  position: absolute;
  z-index: -1;
  inset: 0;
  overflow: hidden;
  background: #10110e url("${({$poster:o})=>o}") center 58% / cover no-repeat;

  &::after {
    position: absolute;
    inset: 0;
    content: "";
    background:
      linear-gradient(90deg, #11120f 2%, rgba(17, 18, 15, .91) 27%, rgba(17, 18, 15, .58) 55%, rgba(17, 18, 15, .18) 100%),
      linear-gradient(0deg, rgba(17, 18, 15, .73), transparent 42%);
    pointer-events: none;
  }

  video {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    opacity: .76;
  }

  video::-webkit-media-controls-panel { background-image: linear-gradient(transparent, rgba(0,0,0,.7)); }

  @media (max-width: 720px) {
    &::after {
      background:
        linear-gradient(90deg, rgba(17, 18, 15, .88), rgba(17, 18, 15, .43)),
        linear-gradient(0deg, #11120f 1%, transparent 58%);
    }
  }
`;S.div`
  width: min(100%, 620px);
  padding-top: 89px;
  padding-bottom: 24px;

  h1 {
    margin: 23px 0 18px;
    font-family: Manrope, sans-serif;
    font-size: clamp(52px, 6.6vw, 82px);
    font-weight: 600;
    letter-spacing: -0.075em;
    line-height: .99;
  }

  h1 em, em { color: var(--lime); font-style: normal; }

  > p {
    max-width: 420px;
    margin: 0;
    color: rgba(255, 255, 255, .67);
    font-size: 15px;
    line-height: 1.8;
  }

  @media (max-width: 720px) {
    padding-top: 165px;
    h1 { font-size: clamp(52px, 12vw, 72px); }
    > p { max-width: 360px; font-size: 14px; }
  }
`;S.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--lime);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: .13em;
  text-transform: uppercase;

  span { width: 24px; height: 1px; background: var(--lime); }
`;S.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 23px;
  margin-top: 30px;
`;S.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  min-height: 50px;
  padding: 0 19px;
  background: var(--lime);
  color: var(--dark);
  font-size: 12px;
  font-weight: 700;
  transition: background 160ms ease, transform 160ms ease;

  &:hover { background: #d7ff8c; transform: translateY(-2px); }
`;S.a`
  display: inline-flex;
  align-items: center;
  gap: 9px;
  color: rgba(255,255,255,.82);
  font-size: 12px;

  &:hover { color: var(--lime); }
`;S.div`
  display: flex;
  flex-wrap: wrap;
  gap: 34px;
  margin-top: 58px;
  padding-top: 22px;
  border-top: 1px solid rgba(255, 255, 255, .17);

  @media (max-width: 720px) { gap: 20px; margin-top: 40px; }
`;S.div`
  display: grid;
  gap: 5px;
  strong { font-family: Manrope, sans-serif; font-size: 15px; font-weight: 700; }
  span { color: rgba(255,255,255,.52); font-size: 10px; }
`;S.div`
  position: absolute;
  right: 0;
  bottom: 40px;
  display: flex;
  align-items: center;
  gap: 9px;
  color: rgba(255,255,255,.75);
  font-size: 11px;

  span { width: 7px; height: 7px; border-radius: 50%; background: var(--lime); }

  @media (max-width: 720px) { display: none; }
`;S.section`
  background: #e9ebdf;

  > div {
    min-height: 84px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 18px 30px;
  }

  @media (max-width: 720px) { padding: 18px 0; }
`;S.section`
  overflow: hidden;
  padding: 75px 0 78px;
  background: #11120f;
  color: #fff;
  scroll-margin-top: 20px;

  @media (max-width: 720px) { padding: 54px 0 58px; }
`;S.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 25px;
  margin-bottom: 27px;

  h2 {
    margin: 0;
    font-family: Manrope, sans-serif;
    font-size: clamp(32px, 4vw, 46px);
    font-weight: 600;
    letter-spacing: -.06em;
  }

  h2 em { color: var(--lime); font-style: normal; }
  p { max-width: 430px; margin: 10px 0 0; color: rgba(255,255,255,.55); font-size: 12px; line-height: 1.7; }
  > div > span { color: var(--lime); }

  @media (max-width: 580px) {
    align-items: flex-end;
    h2 { font-size: clamp(29px, 8vw, 36px); }
  }
`;S.div`
  display: flex;
  flex: 0 0 auto;
  gap: 9px;
`;S.button`
  width: 43px;
  height: 43px;
  display: grid;
  place-items: center;
  border: 1px solid rgba(255,255,255,.3);
  background: transparent;
  color: #fff;
  cursor: pointer;
  transition: background 150ms ease, color 150ms ease, border-color 150ms ease;
  &:hover { border-color: var(--lime); background: var(--lime); color: var(--dark); }
  &:focus-visible { outline-color: var(--lime); }
  @media (max-width: 580px) { width: 37px; height: 37px; }
`;S.div`
  overflow-x: auto;
  overscroll-behavior-inline: contain;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  scrollbar-width: thin;
  scrollbar-color: #66734d #252720;

  &::-webkit-scrollbar { height: 5px; }
  &::-webkit-scrollbar-track { background: #252720; }
  &::-webkit-scrollbar-thumb { background: #66734d; }

  &:focus-visible { outline-color: var(--lime); }
`;S.div`
  display: flex;
  align-items: stretch;
  gap: 18px;
  width: max-content;
  padding: 0 0 17px;

  > div {
    width: clamp(275px, 29vw, 360px);
    scroll-snap-align: start;
  }

  > div > article { height: 100%; }

  @media (max-width: 580px) {
    gap: 12px;
    > div { width: min(82vw, 340px); }
  }
`;S.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #41443a;
  font-size: 12px;
  font-weight: 600;
  svg { color: #778a4e; }
`;S.section`
  padding: 112px 0 96px;
  background: var(--paper);
  scroll-margin-top: 24px;

  @media (max-width: 720px) { padding: 74px 0 65px; }
`;S.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 40px;
  margin-bottom: 43px;

  > p {
    width: 270px;
    margin: 0 0 6px;
    color: var(--muted);
    font-size: 13px;
    line-height: 1.8;
  }

  @media (max-width: 720px) {
    display: block;
    margin-bottom: 30px;
    > p { width: auto; margin-top: 18px; }
  }
`;S.div``;S.span`
  display: block;
  margin-bottom: 15px;
  color: #718748;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .15em;
  text-transform: uppercase;
`;S.h2`
  margin: 0;
  font-family: Manrope, sans-serif;
  font-size: clamp(36px, 5vw, 56px);
  font-weight: 600;
  letter-spacing: -.065em;
  line-height: 1.08;
  em { color: #858b79; font-style: normal; }
`;S.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  margin-bottom: 27px;

  .categories { display: flex; flex-wrap: wrap; gap: 8px; }
  .search {
    width: 238px;
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 0 12px;
    border-bottom: 1px solid #d5d7ce;
    color: #73766c;
  }
  .search input {
    width: 100%;
    padding: 11px 0;
    border: 0;
    outline: 0;
    background: transparent;
    color: var(--ink);
    font-size: 11px;
  }
  .search input:focus-visible { outline: 0; }

  @media (max-width: 720px) {
    align-items: stretch;
    flex-direction: column-reverse;
    .search { width: 100%; }
  }
`;S.button`
  min-height: 35px;
  padding: 0 14px;
  border: 1px solid ${({$active:o})=>o?"var(--dark)":"#dedfd7"};
  border-radius: 99px;
  background: ${({$active:o})=>o?"var(--dark)":"transparent"};
  color: ${({$active:o})=>o?"#fff":"#6e7168"};
  cursor: pointer;
  font-size: 11px;
  transition: background 140ms ease, color 140ms ease;
  &:hover { border-color: var(--dark); color: ${({$active:o})=>o?"#fff":"var(--dark)"}; }
`;S.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;

  @media (max-width: 900px) { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  @media (max-width: 580px) { grid-template-columns: 1fr; gap: 13px; }
`;const r4=S.article`
  overflow: hidden;
  background: #fff;
  border: 1px solid #e8e9e2;
  transition: box-shadow 180ms ease, transform 180ms ease;
  &:hover { box-shadow: 0 16px 35px rgba(38,42,29,.09); transform: translateY(-3px); }
`;S.div`
  height: 205px;
  position: relative;
  overflow: hidden;
  background: #e5e6e1;
  > img { width: 100%; height: 100%; display: block; object-fit: cover; transition: transform 350ms ease; }
  ${r4}:hover & > img { transform: scale(1.035); }
  .category {
    position: absolute;
    right: 12px;
    bottom: 12px;
    padding: 6px 9px;
    background: rgba(255,255,255,.91);
    color: #363930;
    font-size: 9px;
    font-weight: 600;
  }
`;S.span`
  position: absolute;
  top: 13px;
  left: 13px;
  padding: 7px 9px;
  background: var(--lime);
  color: #22261c;
  font-size: 9px;
  font-weight: 700;
`;S.div`
  padding: 18px 18px 16px;
  .year { color: #777a71; font-size: 10px; }
  .version { margin: 4px 0 0; color: #777a71; font-size: 11px; }
  .price-row { display: flex; align-items: flex-end; justify-content: space-between; margin-top: 17px; }
  .price-row small { display: block; margin-bottom: 3px; color: #777a71; font-size: 9px; }
  .price-row > a {
    width: 34px;
    height: 34px;
    display: grid;
    place-items: center;
    border: 1px solid #e2e4dc;
    transition: background 150ms ease;
  }
  .price-row > a:hover { background: var(--lime); border-color: var(--lime); }
`;S.h3`
  margin: 6px 0 0;
  font-family: Manrope, sans-serif;
  font-size: 17px;
  font-weight: 700;
  letter-spacing: -.04em;
`;S.div`
  display: flex;
  gap: 15px;
  margin-top: 15px;
  padding-bottom: 14px;
  border-bottom: 1px solid #eeefe9;
  color: #64675e;
  font-size: 10px;
  span { display: inline-flex; align-items: center; gap: 6px; }
  svg { color: #858b79; }
`;S.strong`
  font-family: Manrope, sans-serif;
  font-size: 19px;
  letter-spacing: -.045em;
`;S.div`
  padding: 42px 24px;
  border: 1px solid #e3e5dc;
  color: #5e6256;
  text-align: center;
  font-size: 13px;
  line-height: 1.6;
`;S.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-top: 27px;
  color: #777a71;
  font-size: 11px;
  a { display: inline-flex; align-items: center; gap: 8px; color: #393c33; font-weight: 600; }
  a:hover { color: #778a4e; }

  @media (max-width: 580px) { align-items: flex-start; flex-direction: column; }
`;S.section`
  padding: 105px 0;
  background: #e9ebdf;
  > div { display: grid; grid-template-columns: 1.02fr .98fr; align-items: center; gap: clamp(45px, 8vw, 105px); }

  @media (max-width: 760px) {
    padding: 70px 0;
    > div { grid-template-columns: 1fr; gap: 38px; }
  }
`;S.div`
  position: relative;
  height: 525px;
  background: #d1d3c8;
  img { width: 100%; height: 100%; display: block; object-fit: cover; }
  .image-note {
    position: absolute;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 16px 19px;
    background: var(--lime);
    color: #20231a;
    font-family: Manrope, sans-serif;
    font-size: 13px;
    font-weight: 700;
  }
  .image-note span { font-size: 9px; font-weight: 600; letter-spacing: .1em; }

  @media (max-width: 760px) { height: min(440px, 100vw); }
`;S.div`
  > p { max-width: 450px; margin: 21px 0 26px; color: #686b62; font-size: 13px; line-height: 1.9; }
  .official-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-top: 29px;
    padding-bottom: 7px;
    border-bottom: 1px solid #aeb39f;
    font-size: 12px;
    font-weight: 700;
  }
  .official-link:hover { border-color: #667841; color: #667841; }
`;const i4=S.h2`
  max-width: 560px;
  margin: 0;
  font-family: Manrope, sans-serif;
  font-size: clamp(35px, 4.5vw, 52px);
  font-weight: 600;
  letter-spacing: -.065em;
  line-height: 1.11;
  em { color: #858b79; font-style: normal; }
`;S.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 23px;
`;S.div`
  display: grid;
  gap: 8px;
  padding-top: 15px;
  border-top: 1px solid #cdd0c2;
  span { color: #87956b; font-size: 9px; font-weight: 700; letter-spacing: .1em; }
  strong { font-size: 12px; }
  small { color: #777a71; font-size: 10px; line-height: 1.6; }
`;S.section`
  padding: 110px 0;
  background: var(--dark);
  color: #fff;
  scroll-margin-top: 0;

  @media (max-width: 720px) { padding: 72px 0; }
`;S.div`
  display: grid;
  grid-template-columns: .85fr 1.15fr;
  align-items: start;
  gap: clamp(44px, 9vw, 125px);

  .appointment-copy { padding-top: 38px; }
  .appointment-copy > p { max-width: 390px; margin: 20px 0 37px; color: rgba(255,255,255,.56); font-size: 13px; line-height: 1.9; }
  .appointment-copy ${i4} { font-size: clamp(38px, 4.6vw, 56px); }
  @media (max-width: 820px) { grid-template-columns: 1fr; gap: 39px; .appointment-copy { padding-top: 0; } }
`;S.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin: 19px 0;
  .icon { width: 42px; height: 42px; display: grid; place-items: center; flex: 0 0 auto; border: 1px solid rgba(255,255,255,.13); color: var(--lime); }
  strong, span { display: block; }
  strong { margin-bottom: 4px; font-size: 12px; }
  span { color: rgba(255,255,255,.5); font-size: 10px; }
`;S.div`
  padding: clamp(22px, 4vw, 39px);
  background: #f5f5f0;
  color: var(--ink);
  .form-heading > span { color: #718748; font-size: 9px; font-weight: 700; letter-spacing: .16em; text-transform: uppercase; }
  .form-heading h3 { margin: 9px 0 5px; font-family: Manrope, sans-serif; font-size: 27px; letter-spacing: -.05em; }
  .form-heading p { margin: 0 0 23px; color: #777a71; font-size: 11px; }
`;S.form`
  .privacy { margin: 12px 0 0; color: #898c82; font-size: 9px; line-height: 1.6; }
  .privacy a { color: #4a6031; font-weight: 700; text-decoration: underline; text-underline-offset: 2px; }
`;S.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px 13px;
  @media (max-width: 500px) { grid-template-columns: 1fr; }
`;S.div`
  min-width: 0;
  ${({$full:o})=>o&&"grid-column: 1 / -1;"}

  @media (max-width: 500px) { grid-column: auto; }
`;S.label`
  display: block;
  margin-bottom: 7px;
  color: #4a4d44;
  font-size: 10px;
  font-weight: 600;
  span { margin-left: 4px; color: #96998f; font-size: 9px; font-weight: 400; }
`;S.input`
  width: 100%;
  min-height: 43px;
  padding: 0 12px;
  border: 1px solid #dfe1d7;
  border-radius: 0;
  background: #fff;
  color: var(--ink);
  font-size: 11px;
  &::placeholder { color: #a4a69e; }
`;S.div`
  position: relative;
  svg { position: absolute; top: 13px; right: 11px; pointer-events: none; color: #7e8178; }
`;S.select`
  width: 100%;
  min-height: 43px;
  padding: 0 34px 0 12px;
  border: 1px solid #dfe1d7;
  border-radius: 0;
  appearance: none;
  background: #fff;
  color: #44473e;
  font-size: 11px;
`;S.textarea`
  width: 100%;
  min-height: 72px;
  padding: 11px 12px;
  border: 1px solid #dfe1d7;
  border-radius: 0;
  resize: vertical;
  background: #fff;
  color: var(--ink);
  font-size: 11px;
  &::placeholder { color: #a4a69e; }
`;S.button`
  width: 100%;
  min-height: 47px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 18px;
  padding: 0 15px;
  border: 0;
  background: var(--lime);
  color: #22261c;
  cursor: pointer;
  font-size: 11px;
  font-weight: 700;
  transition: background 150ms ease;
  &:hover:not(:disabled) { background: #d6ff8c; }
  &:disabled { cursor: wait; opacity: .75; }
`;S.p`
  display: flex;
  align-items: center;
  gap: 7px;
  margin: 12px 0 0;
  color: #426322;
  font-size: 11px;
`;S.footer`
  padding: 49px 0 22px;
  background: #0c0d0b;
  color: #fff;
  .footer-main { display: flex; align-items: flex-start; justify-content: space-between; gap: 30px; padding-bottom: 39px; }
  .footer-brand p { max-width: 210px; margin: 14px 0 0; color: rgba(255,255,255,.46); font-size: 11px; line-height: 1.7; }
  .back-top { display: inline-flex; align-items: center; gap: 7px; color: rgba(255,255,255,.65); font-size: 10px; }
  .back-top:hover { color: var(--lime); }
  @media (max-width: 720px) {
    .footer-main { flex-wrap: wrap; }
    .back-top { width: 100%; }
  }
`;S.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 13px 22px;
  padding-top: 12px;
  a { display: inline-flex; align-items: center; gap: 4px; color: rgba(255,255,255,.62); font-size: 10px; }
  a:hover { color: var(--lime); }
  @media (max-width: 720px) { order: 1; width: 100%; }
`;S.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding-top: 17px;
  border-top: 1px solid rgba(255,255,255,.11);
  color: rgba(255,255,255,.38);
  font-size: 9px;
  @media (max-width: 580px) { flex-direction: column; gap: 8px; }
`;p2.createRoot(document.getElementById("root")).render(l.jsxs(ut.StrictMode,{children:[l.jsx(n4,{}),l.jsx(t4,{})]}));
