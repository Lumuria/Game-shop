/*! For license information please see main.6227930b.js.LICENSE.txt */
(()=>{var e={43:(e,t,r)=>{"use strict";e.exports=r(202)},153:(e,t,r)=>{"use strict";var n=r(43),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var n,a={},c=null,u=null;for(n in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,n)&&!s.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:o,type:e,key:c,ref:u,props:a,_owner:l.current}}t.Fragment=a,t.jsx=c,t.jsxs=c},202:(e,t)=>{"use strict";var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),s=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),f=Symbol.iterator;var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,g={};function v(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||m}function y(){}function b(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||m}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=v.prototype;var x=b.prototype=new y;x.constructor=b,h(x,v.prototype),x.isPureReactComponent=!0;var w=Array.isArray,k=Object.prototype.hasOwnProperty,S={current:null},j={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,n){var o,a={},i=null,l=null;if(null!=t)for(o in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)k.call(t,o)&&!j.hasOwnProperty(o)&&(a[o]=t[o]);var s=arguments.length-2;if(1===s)a.children=n;else if(1<s){for(var c=Array(s),u=0;u<s;u++)c[u]=arguments[u+2];a.children=c}if(e&&e.defaultProps)for(o in s=e.defaultProps)void 0===a[o]&&(a[o]=s[o]);return{$$typeof:r,type:e,key:i,ref:l,props:a,_owner:S.current}}function E(e){return"object"===typeof e&&null!==e&&e.$$typeof===r}var _=/\/+/g;function P(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(e){return t[e]})}(""+e.key):t.toString(36)}function T(e,t,o,a,i){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s=!1;if(null===e)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case r:case n:s=!0}}if(s)return i=i(s=e),e=""===a?"."+P(s,0):a,w(i)?(o="",null!=e&&(o=e.replace(_,"$&/")+"/"),T(i,t,o,"",function(e){return e})):null!=i&&(E(i)&&(i=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,o+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(_,"$&/")+"/")+e)),t.push(i)),1;if(s=0,a=""===a?".":a+":",w(e))for(var c=0;c<e.length;c++){var u=a+P(l=e[c],c);s+=T(l,t,o,u,i)}else if(u=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"===typeof u)for(e=u.call(e),c=0;!(l=e.next()).done;)s+=T(l=l.value,t,o,u=a+P(l,c++),i);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function R(e,t,r){if(null==e)return e;var n=[],o=0;return T(e,n,"","",function(e){return t.call(r,e,o++)}),n}function z(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)},function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var O={current:null},N={transition:null},$={ReactCurrentDispatcher:O,ReactCurrentBatchConfig:N,ReactCurrentOwner:S};function L(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:R,forEach:function(e,t,r){R(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return R(e,function(){t++}),t},toArray:function(e){return R(e,function(e){return e})||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=o,t.Profiler=i,t.PureComponent=b,t.StrictMode=a,t.Suspense=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,t.act=L,t.cloneElement=function(e,t,n){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=h({},e.props),a=e.key,i=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,l=S.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in t)k.call(t,c)&&!j.hasOwnProperty(c)&&(o[c]=void 0===t[c]&&void 0!==s?s[c]:t[c])}var c=arguments.length-2;if(1===c)o.children=n;else if(1<c){s=Array(c);for(var u=0;u<c;u++)s[u]=arguments[u+2];o.children=s}return{$$typeof:r,type:e.type,key:a,ref:i,props:o,_owner:l}},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=C,t.createFactory=function(e){var t=C.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:z}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=N.transition;N.transition={};try{e()}finally{N.transition=t}},t.unstable_act=L,t.useCallback=function(e,t){return O.current.useCallback(e,t)},t.useContext=function(e){return O.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return O.current.useDeferredValue(e)},t.useEffect=function(e,t){return O.current.useEffect(e,t)},t.useId=function(){return O.current.useId()},t.useImperativeHandle=function(e,t,r){return O.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return O.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return O.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return O.current.useMemo(e,t)},t.useReducer=function(e,t,r){return O.current.useReducer(e,t,r)},t.useRef=function(e){return O.current.useRef(e)},t.useState=function(e){return O.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return O.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return O.current.useTransition()},t.version="18.3.1"},234:(e,t)=>{"use strict";function r(e,t){var r=e.length;e.push(t);e:for(;0<r;){var n=r-1>>>1,o=e[n];if(!(0<a(o,t)))break e;e[n]=t,e[r]=o,r=n}}function n(e){return 0===e.length?null:e[0]}function o(e){if(0===e.length)return null;var t=e[0],r=e.pop();if(r!==t){e[0]=r;e:for(var n=0,o=e.length,i=o>>>1;n<i;){var l=2*(n+1)-1,s=e[l],c=l+1,u=e[c];if(0>a(s,r))c<o&&0>a(u,s)?(e[n]=u,e[c]=r,n=c):(e[n]=s,e[l]=r,n=l);else{if(!(c<o&&0>a(u,r)))break e;e[n]=u,e[c]=r,n=c}}}return t}function a(e,t){var r=e.sortIndex-t.sortIndex;return 0!==r?r:e.id-t.id}if("object"===typeof performance&&"function"===typeof performance.now){var i=performance;t.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();t.unstable_now=function(){return l.now()-s}}var c=[],u=[],d=1,p=null,f=3,m=!1,h=!1,g=!1,v="function"===typeof setTimeout?setTimeout:null,y="function"===typeof clearTimeout?clearTimeout:null,b="undefined"!==typeof setImmediate?setImmediate:null;function x(e){for(var t=n(u);null!==t;){if(null===t.callback)o(u);else{if(!(t.startTime<=e))break;o(u),t.sortIndex=t.expirationTime,r(c,t)}t=n(u)}}function w(e){if(g=!1,x(e),!h)if(null!==n(c))h=!0,N(k);else{var t=n(u);null!==t&&$(w,t.startTime-e)}}function k(e,r){h=!1,g&&(g=!1,y(E),E=-1),m=!0;var a=f;try{for(x(r),p=n(c);null!==p&&(!(p.expirationTime>r)||e&&!T());){var i=p.callback;if("function"===typeof i){p.callback=null,f=p.priorityLevel;var l=i(p.expirationTime<=r);r=t.unstable_now(),"function"===typeof l?p.callback=l:p===n(c)&&o(c),x(r)}else o(c);p=n(c)}if(null!==p)var s=!0;else{var d=n(u);null!==d&&$(w,d.startTime-r),s=!1}return s}finally{p=null,f=a,m=!1}}"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var S,j=!1,C=null,E=-1,_=5,P=-1;function T(){return!(t.unstable_now()-P<_)}function R(){if(null!==C){var e=t.unstable_now();P=e;var r=!0;try{r=C(!0,e)}finally{r?S():(j=!1,C=null)}}else j=!1}if("function"===typeof b)S=function(){b(R)};else if("undefined"!==typeof MessageChannel){var z=new MessageChannel,O=z.port2;z.port1.onmessage=R,S=function(){O.postMessage(null)}}else S=function(){v(R,0)};function N(e){C=e,j||(j=!0,S())}function $(e,r){E=v(function(){e(t.unstable_now())},r)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){h||m||(h=!0,N(k))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var r=f;f=t;try{return e()}finally{f=r}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var r=f;f=e;try{return t()}finally{f=r}},t.unstable_scheduleCallback=function(e,o,a){var i=t.unstable_now();switch("object"===typeof a&&null!==a?a="number"===typeof(a=a.delay)&&0<a?i+a:i:a=i,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5e3}return e={id:d++,callback:o,priorityLevel:e,startTime:a,expirationTime:l=a+l,sortIndex:-1},a>i?(e.sortIndex=a,r(u,e),null===n(c)&&e===n(u)&&(g?(y(E),E=-1):g=!0,$(w,a-i))):(e.sortIndex=l,r(c,e),h||m||(h=!0,N(k))),e},t.unstable_shouldYield=T,t.unstable_wrapCallback=function(e){var t=f;return function(){var r=f;f=t;try{return e.apply(this,arguments)}finally{f=r}}}},324:e=>{e.exports=function(e,t,r,n){var o=r?r.call(n,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),s=0;s<a.length;s++){var c=a[s];if(!l(c))return!1;var u=e[c],d=t[c];if(!1===(o=r?r.call(n,u,d,c):void 0)||void 0===o&&u!==d)return!1}return!0}},391:(e,t,r)=>{"use strict";var n=r(950);t.createRoot=n.createRoot,t.hydrateRoot=n.hydrateRoot},579:(e,t,r)=>{"use strict";e.exports=r(153)},730:(e,t,r)=>{"use strict";var n=r(43),o=r(853);function a(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,l={};function s(e,t){c(e,t),c(e+"Capture",t)}function c(e,t){for(l[e]=t,e=0;e<t.length;e++)i.add(t[e])}var u=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),d=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,f={},m={};function h(e,t,r,n,o,a,i){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=n,this.attributeNamespace=o,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=i}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){g[e]=new h(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];g[t]=new h(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){g[e]=new h(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){g[e]=new h(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){g[e]=new h(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){g[e]=new h(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){g[e]=new h(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){g[e]=new h(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){g[e]=new h(e,5,!1,e.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function y(e){return e[1].toUpperCase()}function b(e,t,r,n){var o=g.hasOwnProperty(t)?g[t]:null;(null!==o?0!==o.type:n||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,r,n){if(null===t||"undefined"===typeof t||function(e,t,r,n){if(null!==r&&0===r.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!n&&(null!==r?!r.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,r,n))return!0;if(n)return!1;if(null!==r)switch(r.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,r,o,n)&&(r=null),n||null===o?function(e){return!!d.call(m,e)||!d.call(f,e)&&(p.test(e)?m[e]=!0:(f[e]=!0,!1))}(t)&&(null===r?e.removeAttribute(t):e.setAttribute(t,""+r)):o.mustUseProperty?e[o.propertyName]=null===r?3!==o.type&&"":r:(t=o.attributeName,n=o.attributeNamespace,null===r?e.removeAttribute(t):(r=3===(o=o.type)||4===o&&!0===r?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(v,y);g[t]=new h(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(v,y);g[t]=new h(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(v,y);g[t]=new h(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){g[e]=new h(e,1,!1,e.toLowerCase(),null,!1,!1)}),g.xlinkHref=new h("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){g[e]=new h(e,1,!1,e.toLowerCase(),null,!0,!0)});var x=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for("react.element"),k=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),E=Symbol.for("react.provider"),_=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),R=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),O=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var N=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var $=Symbol.iterator;function L(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=$&&e[$]||e["@@iterator"])?e:null}var D,I=Object.assign;function F(e){if(void 0===D)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);D=t&&t[1]||""}return"\n"+D+e}var A=!1;function M(e,t){if(!e||A)return"";A=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var n=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){n=c}e.call(t.prototype)}else{try{throw Error()}catch(c){n=c}e()}}catch(c){if(c&&n&&"string"===typeof c.stack){for(var o=c.stack.split("\n"),a=n.stack.split("\n"),i=o.length-1,l=a.length-1;1<=i&&0<=l&&o[i]!==a[l];)l--;for(;1<=i&&0<=l;i--,l--)if(o[i]!==a[l]){if(1!==i||1!==l)do{if(i--,0>--l||o[i]!==a[l]){var s="\n"+o[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}}while(1<=i&&0<=l);break}}}finally{A=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?F(e):""}function U(e){switch(e.tag){case 5:return F(e.type);case 16:return F("Lazy");case 13:return F("Suspense");case 19:return F("SuspenseList");case 0:case 2:case 15:return e=M(e.type,!1);case 11:return e=M(e.type.render,!1);case 1:return e=M(e.type,!0);default:return""}}function B(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case S:return"Fragment";case k:return"Portal";case C:return"Profiler";case j:return"StrictMode";case T:return"Suspense";case R:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case _:return(e.displayName||"Context")+".Consumer";case E:return(e._context.displayName||"Context")+".Provider";case P:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case z:return null!==(t=e.displayName||null)?t:B(e.type)||"Memo";case O:t=e._payload,e=e._init;try{return B(e(t))}catch(r){}}return null}function H(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return B(t);case 8:return t===j?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof t)return t.displayName||t.name||null;if("string"===typeof t)return t}return null}function W(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function V(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function G(e){e._valueTracker||(e._valueTracker=function(e){var t=V(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof r&&"function"===typeof r.get&&"function"===typeof r.set){var o=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(e){n=""+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function K(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=V(e)?e.checked?"true":"false":e.value),(e=n)!==r&&(t.setValue(e),!0)}function X(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function Q(e,t){var r=t.checked;return I({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=r?r:e._wrapperState.initialChecked})}function q(e,t){var r=null==t.defaultValue?"":t.defaultValue,n=null!=t.checked?t.checked:t.defaultChecked;r=W(null!=t.value?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function Y(e,t){null!=(t=t.checked)&&b(e,"checked",t,!1)}function Z(e,t){Y(e,t);var r=W(t.value),n=t.type;if(null!=r)"number"===n?(0===r&&""===e.value||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if("submit"===n||"reset"===n)return void e.removeAttribute("value");t.hasOwnProperty("value")?ee(e,t.type,r):t.hasOwnProperty("defaultValue")&&ee(e,t.type,W(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function J(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!("submit"!==n&&"reset"!==n||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}""!==(r=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==r&&(e.name=r)}function ee(e,t,r){"number"===t&&X(e.ownerDocument)===e||(null==r?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var te=Array.isArray;function re(e,t,r,n){if(e=e.options,t){t={};for(var o=0;o<r.length;o++)t["$"+r[o]]=!0;for(r=0;r<e.length;r++)o=t.hasOwnProperty("$"+e[r].value),e[r].selected!==o&&(e[r].selected=o),o&&n&&(e[r].defaultSelected=!0)}else{for(r=""+W(r),t=null,o=0;o<e.length;o++){if(e[o].value===r)return e[o].selected=!0,void(n&&(e[o].defaultSelected=!0));null!==t||e[o].disabled||(t=e[o])}null!==t&&(t.selected=!0)}}function ne(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(a(91));return I({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function oe(e,t){var r=t.value;if(null==r){if(r=t.children,t=t.defaultValue,null!=r){if(null!=t)throw Error(a(92));if(te(r)){if(1<r.length)throw Error(a(93));r=r[0]}t=r}null==t&&(t=""),r=t}e._wrapperState={initialValue:W(r)}}function ae(e,t){var r=W(t.value),n=W(t.defaultValue);null!=r&&((r=""+r)!==e.value&&(e.value=r),null==t.defaultValue&&e.defaultValue!==r&&(e.defaultValue=r)),null!=n&&(e.defaultValue=""+n)}function ie(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function le(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function se(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?le(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ce,ue,de=(ue=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ce=ce||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ce.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,r,n){MSApp.execUnsafeLocalFunction(function(){return ue(e,t)})}:ue);function pe(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&3===r.nodeType)return void(r.nodeValue=t)}e.textContent=t}var fe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},me=["Webkit","ms","Moz","O"];function he(e,t,r){return null==t||"boolean"===typeof t||""===t?"":r||"number"!==typeof t||0===t||fe.hasOwnProperty(e)&&fe[e]?(""+t).trim():t+"px"}function ge(e,t){for(var r in e=e.style,t)if(t.hasOwnProperty(r)){var n=0===r.indexOf("--"),o=he(r,t[r],n);"float"===r&&(r="cssFloat"),n?e.setProperty(r,o):e[r]=o}}Object.keys(fe).forEach(function(e){me.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),fe[t]=fe[e]})});var ve=I({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ye(e,t){if(t){if(ve[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(a(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(a(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(a(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(a(62))}}function be(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xe=null;function we(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var ke=null,Se=null,je=null;function Ce(e){if(e=xo(e)){if("function"!==typeof ke)throw Error(a(280));var t=e.stateNode;t&&(t=ko(t),ke(e.stateNode,e.type,t))}}function Ee(e){Se?je?je.push(e):je=[e]:Se=e}function _e(){if(Se){var e=Se,t=je;if(je=Se=null,Ce(e),t)for(e=0;e<t.length;e++)Ce(t[e])}}function Pe(e,t){return e(t)}function Te(){}var Re=!1;function ze(e,t,r){if(Re)return e(t,r);Re=!0;try{return Pe(e,t,r)}finally{Re=!1,(null!==Se||null!==je)&&(Te(),_e())}}function Oe(e,t){var r=e.stateNode;if(null===r)return null;var n=ko(r);if(null===n)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(n=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!n;break e;default:e=!1}if(e)return null;if(r&&"function"!==typeof r)throw Error(a(231,t,typeof r));return r}var Ne=!1;if(u)try{var $e={};Object.defineProperty($e,"passive",{get:function(){Ne=!0}}),window.addEventListener("test",$e,$e),window.removeEventListener("test",$e,$e)}catch(ue){Ne=!1}function Le(e,t,r,n,o,a,i,l,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(r,c)}catch(u){this.onError(u)}}var De=!1,Ie=null,Fe=!1,Ae=null,Me={onError:function(e){De=!0,Ie=e}};function Ue(e,t,r,n,o,a,i,l,s){De=!1,Ie=null,Le.apply(Me,arguments)}function Be(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(r=t.return),e=t.return}while(e)}return 3===t.tag?r:null}function He(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function We(e){if(Be(e)!==e)throw Error(a(188))}function Ve(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=Be(e)))throw Error(a(188));return t!==e?null:e}for(var r=e,n=t;;){var o=r.return;if(null===o)break;var i=o.alternate;if(null===i){if(null!==(n=o.return)){r=n;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===r)return We(o),e;if(i===n)return We(o),t;i=i.sibling}throw Error(a(188))}if(r.return!==n.return)r=o,n=i;else{for(var l=!1,s=o.child;s;){if(s===r){l=!0,r=o,n=i;break}if(s===n){l=!0,n=o,r=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===r){l=!0,r=i,n=o;break}if(s===n){l=!0,n=i,r=o;break}s=s.sibling}if(!l)throw Error(a(189))}}if(r.alternate!==n)throw Error(a(190))}if(3!==r.tag)throw Error(a(188));return r.stateNode.current===r?e:t}(e))?Ge(e):null}function Ge(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=Ge(e);if(null!==t)return t;e=e.sibling}return null}var Ke=o.unstable_scheduleCallback,Xe=o.unstable_cancelCallback,Qe=o.unstable_shouldYield,qe=o.unstable_requestPaint,Ye=o.unstable_now,Ze=o.unstable_getCurrentPriorityLevel,Je=o.unstable_ImmediatePriority,et=o.unstable_UserBlockingPriority,tt=o.unstable_NormalPriority,rt=o.unstable_LowPriority,nt=o.unstable_IdlePriority,ot=null,at=null;var it=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(lt(e)/st|0)|0},lt=Math.log,st=Math.LN2;var ct=64,ut=4194304;function dt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function pt(e,t){var r=e.pendingLanes;if(0===r)return 0;var n=0,o=e.suspendedLanes,a=e.pingedLanes,i=268435455&r;if(0!==i){var l=i&~o;0!==l?n=dt(l):0!==(a&=i)&&(n=dt(a))}else 0!==(i=r&~o)?n=dt(i):0!==a&&(n=dt(a));if(0===n)return 0;if(0!==t&&t!==n&&0===(t&o)&&((o=n&-n)>=(a=t&-t)||16===o&&0!==(4194240&a)))return t;if(0!==(4&n)&&(n|=16&r),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=n;0<t;)o=1<<(r=31-it(t)),n|=e[r],t&=~o;return n}function ft(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function mt(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function ht(){var e=ct;return 0===(4194240&(ct<<=1))&&(ct=64),e}function gt(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function vt(e,t,r){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-it(t)]=r}function yt(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-it(r),o=1<<n;o&t|e[n]&t&&(e[n]|=t),r&=~o}}var bt=0;function xt(e){return 1<(e&=-e)?4<e?0!==(268435455&e)?16:536870912:4:1}var wt,kt,St,jt,Ct,Et=!1,_t=[],Pt=null,Tt=null,Rt=null,zt=new Map,Ot=new Map,Nt=[],$t="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lt(e,t){switch(e){case"focusin":case"focusout":Pt=null;break;case"dragenter":case"dragleave":Tt=null;break;case"mouseover":case"mouseout":Rt=null;break;case"pointerover":case"pointerout":zt.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ot.delete(t.pointerId)}}function Dt(e,t,r,n,o,a){return null===e||e.nativeEvent!==a?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:a,targetContainers:[o]},null!==t&&(null!==(t=xo(t))&&kt(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,null!==o&&-1===t.indexOf(o)&&t.push(o),e)}function It(e){var t=bo(e.target);if(null!==t){var r=Be(t);if(null!==r)if(13===(t=r.tag)){if(null!==(t=He(r)))return e.blockedOn=t,void Ct(e.priority,function(){St(r)})}else if(3===t&&r.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===r.tag?r.stateNode.containerInfo:null)}e.blockedOn=null}function Ft(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var r=Qt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==r)return null!==(t=xo(r))&&kt(t),e.blockedOn=r,!1;var n=new(r=e.nativeEvent).constructor(r.type,r);xe=n,r.target.dispatchEvent(n),xe=null,t.shift()}return!0}function At(e,t,r){Ft(e)&&r.delete(t)}function Mt(){Et=!1,null!==Pt&&Ft(Pt)&&(Pt=null),null!==Tt&&Ft(Tt)&&(Tt=null),null!==Rt&&Ft(Rt)&&(Rt=null),zt.forEach(At),Ot.forEach(At)}function Ut(e,t){e.blockedOn===t&&(e.blockedOn=null,Et||(Et=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Mt)))}function Bt(e){function t(t){return Ut(t,e)}if(0<_t.length){Ut(_t[0],e);for(var r=1;r<_t.length;r++){var n=_t[r];n.blockedOn===e&&(n.blockedOn=null)}}for(null!==Pt&&Ut(Pt,e),null!==Tt&&Ut(Tt,e),null!==Rt&&Ut(Rt,e),zt.forEach(t),Ot.forEach(t),r=0;r<Nt.length;r++)(n=Nt[r]).blockedOn===e&&(n.blockedOn=null);for(;0<Nt.length&&null===(r=Nt[0]).blockedOn;)It(r),null===r.blockedOn&&Nt.shift()}var Ht=x.ReactCurrentBatchConfig,Wt=!0;function Vt(e,t,r,n){var o=bt,a=Ht.transition;Ht.transition=null;try{bt=1,Kt(e,t,r,n)}finally{bt=o,Ht.transition=a}}function Gt(e,t,r,n){var o=bt,a=Ht.transition;Ht.transition=null;try{bt=4,Kt(e,t,r,n)}finally{bt=o,Ht.transition=a}}function Kt(e,t,r,n){if(Wt){var o=Qt(e,t,r,n);if(null===o)Wn(e,t,n,Xt,r),Lt(e,n);else if(function(e,t,r,n,o){switch(t){case"focusin":return Pt=Dt(Pt,e,t,r,n,o),!0;case"dragenter":return Tt=Dt(Tt,e,t,r,n,o),!0;case"mouseover":return Rt=Dt(Rt,e,t,r,n,o),!0;case"pointerover":var a=o.pointerId;return zt.set(a,Dt(zt.get(a)||null,e,t,r,n,o)),!0;case"gotpointercapture":return a=o.pointerId,Ot.set(a,Dt(Ot.get(a)||null,e,t,r,n,o)),!0}return!1}(o,e,t,r,n))n.stopPropagation();else if(Lt(e,n),4&t&&-1<$t.indexOf(e)){for(;null!==o;){var a=xo(o);if(null!==a&&wt(a),null===(a=Qt(e,t,r,n))&&Wn(e,t,n,Xt,r),a===o)break;o=a}null!==o&&n.stopPropagation()}else Wn(e,t,n,null,r)}}var Xt=null;function Qt(e,t,r,n){if(Xt=null,null!==(e=bo(e=we(n))))if(null===(t=Be(e)))e=null;else if(13===(r=t.tag)){if(null!==(e=He(t)))return e;e=null}else if(3===r){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Xt=e,null}function qt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ze()){case Je:return 1;case et:return 4;case tt:case rt:return 16;case nt:return 536870912;default:return 16}default:return 16}}var Yt=null,Zt=null,Jt=null;function er(){if(Jt)return Jt;var e,t,r=Zt,n=r.length,o="value"in Yt?Yt.value:Yt.textContent,a=o.length;for(e=0;e<n&&r[e]===o[e];e++);var i=n-e;for(t=1;t<=i&&r[n-t]===o[a-t];t++);return Jt=o.slice(e,1<t?1-t:void 0)}function tr(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function rr(){return!0}function nr(){return!1}function or(e){function t(t,r,n,o,a){for(var i in this._reactName=t,this._targetInst=n,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(i)&&(t=e[i],this[i]=t?t(o):o[i]);return this.isDefaultPrevented=(null!=o.defaultPrevented?o.defaultPrevented:!1===o.returnValue)?rr:nr,this.isPropagationStopped=nr,this}return I(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=rr)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=rr)},persist:function(){},isPersistent:rr}),t}var ar,ir,lr,sr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cr=or(sr),ur=I({},sr,{view:0,detail:0}),dr=or(ur),pr=I({},ur,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jr,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==lr&&(lr&&"mousemove"===e.type?(ar=e.screenX-lr.screenX,ir=e.screenY-lr.screenY):ir=ar=0,lr=e),ar)},movementY:function(e){return"movementY"in e?e.movementY:ir}}),fr=or(pr),mr=or(I({},pr,{dataTransfer:0})),hr=or(I({},ur,{relatedTarget:0})),gr=or(I({},sr,{animationName:0,elapsedTime:0,pseudoElement:0})),vr=I({},sr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),yr=or(vr),br=or(I({},sr,{data:0})),xr={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wr={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kr={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sr(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=kr[e])&&!!t[e]}function jr(){return Sr}var Cr=I({},ur,{key:function(e){if(e.key){var t=xr[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=tr(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?wr[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jr,charCode:function(e){return"keypress"===e.type?tr(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?tr(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),Er=or(Cr),_r=or(I({},pr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Pr=or(I({},ur,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jr})),Tr=or(I({},sr,{propertyName:0,elapsedTime:0,pseudoElement:0})),Rr=I({},pr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),zr=or(Rr),Or=[9,13,27,32],Nr=u&&"CompositionEvent"in window,$r=null;u&&"documentMode"in document&&($r=document.documentMode);var Lr=u&&"TextEvent"in window&&!$r,Dr=u&&(!Nr||$r&&8<$r&&11>=$r),Ir=String.fromCharCode(32),Fr=!1;function Ar(e,t){switch(e){case"keyup":return-1!==Or.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mr(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Ur=!1;var Br={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Br[e.type]:"textarea"===t}function Wr(e,t,r,n){Ee(n),0<(t=Gn(t,"onChange")).length&&(r=new cr("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var Vr=null,Gr=null;function Kr(e){Fn(e,0)}function Xr(e){if(K(wo(e)))return e}function Qr(e,t){if("change"===e)return t}var qr=!1;if(u){var Yr;if(u){var Zr="oninput"in document;if(!Zr){var Jr=document.createElement("div");Jr.setAttribute("oninput","return;"),Zr="function"===typeof Jr.oninput}Yr=Zr}else Yr=!1;qr=Yr&&(!document.documentMode||9<document.documentMode)}function en(){Vr&&(Vr.detachEvent("onpropertychange",tn),Gr=Vr=null)}function tn(e){if("value"===e.propertyName&&Xr(Gr)){var t=[];Wr(t,Gr,e,we(e)),ze(Kr,t)}}function rn(e,t,r){"focusin"===e?(en(),Gr=r,(Vr=t).attachEvent("onpropertychange",tn)):"focusout"===e&&en()}function nn(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Xr(Gr)}function on(e,t){if("click"===e)return Xr(t)}function an(e,t){if("input"===e||"change"===e)return Xr(t)}var ln="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function sn(e,t){if(ln(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var o=r[n];if(!d.call(t,o)||!ln(e[o],t[o]))return!1}return!0}function cn(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function un(e,t){var r,n=cn(e);for(e=0;n;){if(3===n.nodeType){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=cn(n)}}function dn(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?dn(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function pn(){for(var e=window,t=X();t instanceof e.HTMLIFrameElement;){try{var r="string"===typeof t.contentWindow.location.href}catch(n){r=!1}if(!r)break;t=X((e=t.contentWindow).document)}return t}function fn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function mn(e){var t=pn(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&dn(r.ownerDocument.documentElement,r)){if(null!==n&&fn(r))if(t=n.start,void 0===(e=n.end)&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if((e=(t=r.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var o=r.textContent.length,a=Math.min(n.start,o);n=void 0===n.end?a:Math.min(n.end,o),!e.extend&&a>n&&(o=n,n=a,a=o),o=un(r,a);var i=un(r,n);o&&i&&(1!==e.rangeCount||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&((t=t.createRange()).setStart(o.node,o.offset),e.removeAllRanges(),a>n?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}for(t=[],e=r;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"===typeof r.focus&&r.focus(),r=0;r<t.length;r++)(e=t[r]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var hn=u&&"documentMode"in document&&11>=document.documentMode,gn=null,vn=null,yn=null,bn=!1;function xn(e,t,r){var n=r.window===r?r.document:9===r.nodeType?r:r.ownerDocument;bn||null==gn||gn!==X(n)||("selectionStart"in(n=gn)&&fn(n)?n={start:n.selectionStart,end:n.selectionEnd}:n={anchorNode:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset},yn&&sn(yn,n)||(yn=n,0<(n=Gn(vn,"onSelect")).length&&(t=new cr("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=gn)))}function wn(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var kn={animationend:wn("Animation","AnimationEnd"),animationiteration:wn("Animation","AnimationIteration"),animationstart:wn("Animation","AnimationStart"),transitionend:wn("Transition","TransitionEnd")},Sn={},jn={};function Cn(e){if(Sn[e])return Sn[e];if(!kn[e])return e;var t,r=kn[e];for(t in r)if(r.hasOwnProperty(t)&&t in jn)return Sn[e]=r[t];return e}u&&(jn=document.createElement("div").style,"AnimationEvent"in window||(delete kn.animationend.animation,delete kn.animationiteration.animation,delete kn.animationstart.animation),"TransitionEvent"in window||delete kn.transitionend.transition);var En=Cn("animationend"),_n=Cn("animationiteration"),Pn=Cn("animationstart"),Tn=Cn("transitionend"),Rn=new Map,zn="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function On(e,t){Rn.set(e,t),s(t,[e])}for(var Nn=0;Nn<zn.length;Nn++){var $n=zn[Nn];On($n.toLowerCase(),"on"+($n[0].toUpperCase()+$n.slice(1)))}On(En,"onAnimationEnd"),On(_n,"onAnimationIteration"),On(Pn,"onAnimationStart"),On("dblclick","onDoubleClick"),On("focusin","onFocus"),On("focusout","onBlur"),On(Tn,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),s("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),s("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),s("onBeforeInput",["compositionend","keypress","textInput","paste"]),s("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ln="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dn=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ln));function In(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,function(e,t,r,n,o,i,l,s,c){if(Ue.apply(this,arguments),De){if(!De)throw Error(a(198));var u=Ie;De=!1,Ie=null,Fe||(Fe=!0,Ae=u)}}(n,t,void 0,e),e.currentTarget=null}function Fn(e,t){t=0!==(4&t);for(var r=0;r<e.length;r++){var n=e[r],o=n.event;n=n.listeners;e:{var a=void 0;if(t)for(var i=n.length-1;0<=i;i--){var l=n[i],s=l.instance,c=l.currentTarget;if(l=l.listener,s!==a&&o.isPropagationStopped())break e;In(o,l,c),a=s}else for(i=0;i<n.length;i++){if(s=(l=n[i]).instance,c=l.currentTarget,l=l.listener,s!==a&&o.isPropagationStopped())break e;In(o,l,c),a=s}}}if(Fe)throw e=Ae,Fe=!1,Ae=null,e}function An(e,t){var r=t[go];void 0===r&&(r=t[go]=new Set);var n=e+"__bubble";r.has(n)||(Hn(t,e,2,!1),r.add(n))}function Mn(e,t,r){var n=0;t&&(n|=4),Hn(r,e,n,t)}var Un="_reactListening"+Math.random().toString(36).slice(2);function Bn(e){if(!e[Un]){e[Un]=!0,i.forEach(function(t){"selectionchange"!==t&&(Dn.has(t)||Mn(t,!1,e),Mn(t,!0,e))});var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Un]||(t[Un]=!0,Mn("selectionchange",!1,t))}}function Hn(e,t,r,n){switch(qt(t)){case 1:var o=Vt;break;case 4:o=Gt;break;default:o=Kt}r=o.bind(null,t,r,e),o=void 0,!Ne||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(o=!0),n?void 0!==o?e.addEventListener(t,r,{capture:!0,passive:o}):e.addEventListener(t,r,!0):void 0!==o?e.addEventListener(t,r,{passive:o}):e.addEventListener(t,r,!1)}function Wn(e,t,r,n,o){var a=n;if(0===(1&t)&&0===(2&t)&&null!==n)e:for(;;){if(null===n)return;var i=n.tag;if(3===i||4===i){var l=n.stateNode.containerInfo;if(l===o||8===l.nodeType&&l.parentNode===o)break;if(4===i)for(i=n.return;null!==i;){var s=i.tag;if((3===s||4===s)&&((s=i.stateNode.containerInfo)===o||8===s.nodeType&&s.parentNode===o))return;i=i.return}for(;null!==l;){if(null===(i=bo(l)))return;if(5===(s=i.tag)||6===s){n=a=i;continue e}l=l.parentNode}}n=n.return}ze(function(){var n=a,o=we(r),i=[];e:{var l=Rn.get(e);if(void 0!==l){var s=cr,c=e;switch(e){case"keypress":if(0===tr(r))break e;case"keydown":case"keyup":s=Er;break;case"focusin":c="focus",s=hr;break;case"focusout":c="blur",s=hr;break;case"beforeblur":case"afterblur":s=hr;break;case"click":if(2===r.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":s=fr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":s=mr;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":s=Pr;break;case En:case _n:case Pn:s=gr;break;case Tn:s=Tr;break;case"scroll":s=dr;break;case"wheel":s=zr;break;case"copy":case"cut":case"paste":s=yr;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":s=_r}var u=0!==(4&t),d=!u&&"scroll"===e,p=u?null!==l?l+"Capture":null:l;u=[];for(var f,m=n;null!==m;){var h=(f=m).stateNode;if(5===f.tag&&null!==h&&(f=h,null!==p&&(null!=(h=Oe(m,p))&&u.push(Vn(m,h,f)))),d)break;m=m.return}0<u.length&&(l=new s(l,c,null,r,o),i.push({event:l,listeners:u}))}}if(0===(7&t)){if(s="mouseout"===e||"pointerout"===e,(!(l="mouseover"===e||"pointerover"===e)||r===xe||!(c=r.relatedTarget||r.fromElement)||!bo(c)&&!c[ho])&&(s||l)&&(l=o.window===o?o:(l=o.ownerDocument)?l.defaultView||l.parentWindow:window,s?(s=n,null!==(c=(c=r.relatedTarget||r.toElement)?bo(c):null)&&(c!==(d=Be(c))||5!==c.tag&&6!==c.tag)&&(c=null)):(s=null,c=n),s!==c)){if(u=fr,h="onMouseLeave",p="onMouseEnter",m="mouse","pointerout"!==e&&"pointerover"!==e||(u=_r,h="onPointerLeave",p="onPointerEnter",m="pointer"),d=null==s?l:wo(s),f=null==c?l:wo(c),(l=new u(h,m+"leave",s,r,o)).target=d,l.relatedTarget=f,h=null,bo(o)===n&&((u=new u(p,m+"enter",c,r,o)).target=f,u.relatedTarget=d,h=u),d=h,s&&c)e:{for(p=c,m=0,f=u=s;f;f=Kn(f))m++;for(f=0,h=p;h;h=Kn(h))f++;for(;0<m-f;)u=Kn(u),m--;for(;0<f-m;)p=Kn(p),f--;for(;m--;){if(u===p||null!==p&&u===p.alternate)break e;u=Kn(u),p=Kn(p)}u=null}else u=null;null!==s&&Xn(i,l,s,u,!1),null!==c&&null!==d&&Xn(i,d,c,u,!0)}if("select"===(s=(l=n?wo(n):window).nodeName&&l.nodeName.toLowerCase())||"input"===s&&"file"===l.type)var g=Qr;else if(Hr(l))if(qr)g=an;else{g=nn;var v=rn}else(s=l.nodeName)&&"input"===s.toLowerCase()&&("checkbox"===l.type||"radio"===l.type)&&(g=on);switch(g&&(g=g(e,n))?Wr(i,g,r,o):(v&&v(e,l,n),"focusout"===e&&(v=l._wrapperState)&&v.controlled&&"number"===l.type&&ee(l,"number",l.value)),v=n?wo(n):window,e){case"focusin":(Hr(v)||"true"===v.contentEditable)&&(gn=v,vn=n,yn=null);break;case"focusout":yn=vn=gn=null;break;case"mousedown":bn=!0;break;case"contextmenu":case"mouseup":case"dragend":bn=!1,xn(i,r,o);break;case"selectionchange":if(hn)break;case"keydown":case"keyup":xn(i,r,o)}var y;if(Nr)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Ur?Ar(e,r)&&(b="onCompositionEnd"):"keydown"===e&&229===r.keyCode&&(b="onCompositionStart");b&&(Dr&&"ko"!==r.locale&&(Ur||"onCompositionStart"!==b?"onCompositionEnd"===b&&Ur&&(y=er()):(Zt="value"in(Yt=o)?Yt.value:Yt.textContent,Ur=!0)),0<(v=Gn(n,b)).length&&(b=new br(b,e,null,r,o),i.push({event:b,listeners:v}),y?b.data=y:null!==(y=Mr(r))&&(b.data=y))),(y=Lr?function(e,t){switch(e){case"compositionend":return Mr(t);case"keypress":return 32!==t.which?null:(Fr=!0,Ir);case"textInput":return(e=t.data)===Ir&&Fr?null:e;default:return null}}(e,r):function(e,t){if(Ur)return"compositionend"===e||!Nr&&Ar(e,t)?(e=er(),Jt=Zt=Yt=null,Ur=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Dr&&"ko"!==t.locale?null:t.data}}(e,r))&&(0<(n=Gn(n,"onBeforeInput")).length&&(o=new br("onBeforeInput","beforeinput",null,r,o),i.push({event:o,listeners:n}),o.data=y))}Fn(i,t)})}function Vn(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Gn(e,t){for(var r=t+"Capture",n=[];null!==e;){var o=e,a=o.stateNode;5===o.tag&&null!==a&&(o=a,null!=(a=Oe(e,r))&&n.unshift(Vn(e,a,o)),null!=(a=Oe(e,t))&&n.push(Vn(e,a,o))),e=e.return}return n}function Kn(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Xn(e,t,r,n,o){for(var a=t._reactName,i=[];null!==r&&r!==n;){var l=r,s=l.alternate,c=l.stateNode;if(null!==s&&s===n)break;5===l.tag&&null!==c&&(l=c,o?null!=(s=Oe(r,a))&&i.unshift(Vn(r,s,l)):o||null!=(s=Oe(r,a))&&i.push(Vn(r,s,l))),r=r.return}0!==i.length&&e.push({event:t,listeners:i})}var Qn=/\r\n?/g,qn=/\u0000|\uFFFD/g;function Yn(e){return("string"===typeof e?e:""+e).replace(Qn,"\n").replace(qn,"")}function Zn(e,t,r){if(t=Yn(t),Yn(e)!==t&&r)throw Error(a(425))}function Jn(){}var eo=null,to=null;function ro(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var no="function"===typeof setTimeout?setTimeout:void 0,oo="function"===typeof clearTimeout?clearTimeout:void 0,ao="function"===typeof Promise?Promise:void 0,io="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof ao?function(e){return ao.resolve(null).then(e).catch(lo)}:no;function lo(e){setTimeout(function(){throw e})}function so(e,t){var r=t,n=0;do{var o=r.nextSibling;if(e.removeChild(r),o&&8===o.nodeType)if("/$"===(r=o.data)){if(0===n)return e.removeChild(o),void Bt(t);n--}else"$"!==r&&"$?"!==r&&"$!"!==r||n++;r=o}while(r);Bt(t)}function co(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function uo(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var r=e.data;if("$"===r||"$!"===r||"$?"===r){if(0===t)return e;t--}else"/$"===r&&t++}e=e.previousSibling}return null}var po=Math.random().toString(36).slice(2),fo="__reactFiber$"+po,mo="__reactProps$"+po,ho="__reactContainer$"+po,go="__reactEvents$"+po,vo="__reactListeners$"+po,yo="__reactHandles$"+po;function bo(e){var t=e[fo];if(t)return t;for(var r=e.parentNode;r;){if(t=r[ho]||r[fo]){if(r=t.alternate,null!==t.child||null!==r&&null!==r.child)for(e=uo(e);null!==e;){if(r=e[fo])return r;e=uo(e)}return t}r=(e=r).parentNode}return null}function xo(e){return!(e=e[fo]||e[ho])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function wo(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(a(33))}function ko(e){return e[mo]||null}var So=[],jo=-1;function Co(e){return{current:e}}function Eo(e){0>jo||(e.current=So[jo],So[jo]=null,jo--)}function _o(e,t){jo++,So[jo]=e.current,e.current=t}var Po={},To=Co(Po),Ro=Co(!1),zo=Po;function Oo(e,t){var r=e.type.contextTypes;if(!r)return Po;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var o,a={};for(o in r)a[o]=t[o];return n&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function No(e){return null!==(e=e.childContextTypes)&&void 0!==e}function $o(){Eo(Ro),Eo(To)}function Lo(e,t,r){if(To.current!==Po)throw Error(a(168));_o(To,t),_o(Ro,r)}function Do(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,"function"!==typeof n.getChildContext)return r;for(var o in n=n.getChildContext())if(!(o in t))throw Error(a(108,H(e)||"Unknown",o));return I({},r,n)}function Io(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Po,zo=To.current,_o(To,e),_o(Ro,Ro.current),!0}function Fo(e,t,r){var n=e.stateNode;if(!n)throw Error(a(169));r?(e=Do(e,t,zo),n.__reactInternalMemoizedMergedChildContext=e,Eo(Ro),Eo(To),_o(To,e)):Eo(Ro),_o(Ro,r)}var Ao=null,Mo=!1,Uo=!1;function Bo(e){null===Ao?Ao=[e]:Ao.push(e)}function Ho(){if(!Uo&&null!==Ao){Uo=!0;var e=0,t=bt;try{var r=Ao;for(bt=1;e<r.length;e++){var n=r[e];do{n=n(!0)}while(null!==n)}Ao=null,Mo=!1}catch(o){throw null!==Ao&&(Ao=Ao.slice(e+1)),Ke(Je,Ho),o}finally{bt=t,Uo=!1}}return null}var Wo=[],Vo=0,Go=null,Ko=0,Xo=[],Qo=0,qo=null,Yo=1,Zo="";function Jo(e,t){Wo[Vo++]=Ko,Wo[Vo++]=Go,Go=e,Ko=t}function ea(e,t,r){Xo[Qo++]=Yo,Xo[Qo++]=Zo,Xo[Qo++]=qo,qo=e;var n=Yo;e=Zo;var o=32-it(n)-1;n&=~(1<<o),r+=1;var a=32-it(t)+o;if(30<a){var i=o-o%5;a=(n&(1<<i)-1).toString(32),n>>=i,o-=i,Yo=1<<32-it(t)+o|r<<o|n,Zo=a+e}else Yo=1<<a|r<<o|n,Zo=e}function ta(e){null!==e.return&&(Jo(e,1),ea(e,1,0))}function ra(e){for(;e===Go;)Go=Wo[--Vo],Wo[Vo]=null,Ko=Wo[--Vo],Wo[Vo]=null;for(;e===qo;)qo=Xo[--Qo],Xo[Qo]=null,Zo=Xo[--Qo],Xo[Qo]=null,Yo=Xo[--Qo],Xo[Qo]=null}var na=null,oa=null,aa=!1,ia=null;function la(e,t){var r=zc(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,null===(t=e.deletions)?(e.deletions=[r],e.flags|=16):t.push(r)}function sa(e,t){switch(e.tag){case 5:var r=e.type;return null!==(t=1!==t.nodeType||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,na=e,oa=co(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,na=e,oa=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(r=null!==qo?{id:Yo,overflow:Zo}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},(r=zc(18,null,null,0)).stateNode=t,r.return=e,e.child=r,na=e,oa=null,!0);default:return!1}}function ca(e){return 0!==(1&e.mode)&&0===(128&e.flags)}function ua(e){if(aa){var t=oa;if(t){var r=t;if(!sa(e,t)){if(ca(e))throw Error(a(418));t=co(r.nextSibling);var n=na;t&&sa(e,t)?la(n,r):(e.flags=-4097&e.flags|2,aa=!1,na=e)}}else{if(ca(e))throw Error(a(418));e.flags=-4097&e.flags|2,aa=!1,na=e}}}function da(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;na=e}function pa(e){if(e!==na)return!1;if(!aa)return da(e),aa=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!ro(e.type,e.memoizedProps)),t&&(t=oa)){if(ca(e))throw fa(),Error(a(418));for(;t;)la(e,t),t=co(t.nextSibling)}if(da(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(a(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var r=e.data;if("/$"===r){if(0===t){oa=co(e.nextSibling);break e}t--}else"$"!==r&&"$!"!==r&&"$?"!==r||t++}e=e.nextSibling}oa=null}}else oa=na?co(e.stateNode.nextSibling):null;return!0}function fa(){for(var e=oa;e;)e=co(e.nextSibling)}function ma(){oa=na=null,aa=!1}function ha(e){null===ia?ia=[e]:ia.push(e)}var ga=x.ReactCurrentBatchConfig;function va(e,t,r){if(null!==(e=r.ref)&&"function"!==typeof e&&"object"!==typeof e){if(r._owner){if(r=r._owner){if(1!==r.tag)throw Error(a(309));var n=r.stateNode}if(!n)throw Error(a(147,e));var o=n,i=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===i?t.ref:(t=function(e){var t=o.refs;null===e?delete t[i]:t[i]=e},t._stringRef=i,t)}if("string"!==typeof e)throw Error(a(284));if(!r._owner)throw Error(a(290,e))}return e}function ya(e,t){throw e=Object.prototype.toString.call(t),Error(a(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ba(e){return(0,e._init)(e._payload)}function xa(e){function t(t,r){if(e){var n=t.deletions;null===n?(t.deletions=[r],t.flags|=16):n.push(r)}}function r(r,n){if(!e)return null;for(;null!==n;)t(r,n),n=n.sibling;return null}function n(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function o(e,t){return(e=Nc(e,t)).index=0,e.sibling=null,e}function i(t,r,n){return t.index=n,e?null!==(n=t.alternate)?(n=n.index)<r?(t.flags|=2,r):n:(t.flags|=2,r):(t.flags|=1048576,r)}function l(t){return e&&null===t.alternate&&(t.flags|=2),t}function s(e,t,r,n){return null===t||6!==t.tag?((t=Ic(r,e.mode,n)).return=e,t):((t=o(t,r)).return=e,t)}function c(e,t,r,n){var a=r.type;return a===S?d(e,t,r.props.children,n,r.key):null!==t&&(t.elementType===a||"object"===typeof a&&null!==a&&a.$$typeof===O&&ba(a)===t.type)?((n=o(t,r.props)).ref=va(e,t,r),n.return=e,n):((n=$c(r.type,r.key,r.props,null,e.mode,n)).ref=va(e,t,r),n.return=e,n)}function u(e,t,r,n){return null===t||4!==t.tag||t.stateNode.containerInfo!==r.containerInfo||t.stateNode.implementation!==r.implementation?((t=Fc(r,e.mode,n)).return=e,t):((t=o(t,r.children||[])).return=e,t)}function d(e,t,r,n,a){return null===t||7!==t.tag?((t=Lc(r,e.mode,n,a)).return=e,t):((t=o(t,r)).return=e,t)}function p(e,t,r){if("string"===typeof t&&""!==t||"number"===typeof t)return(t=Ic(""+t,e.mode,r)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case w:return(r=$c(t.type,t.key,t.props,null,e.mode,r)).ref=va(e,null,t),r.return=e,r;case k:return(t=Fc(t,e.mode,r)).return=e,t;case O:return p(e,(0,t._init)(t._payload),r)}if(te(t)||L(t))return(t=Lc(t,e.mode,r,null)).return=e,t;ya(e,t)}return null}function f(e,t,r,n){var o=null!==t?t.key:null;if("string"===typeof r&&""!==r||"number"===typeof r)return null!==o?null:s(e,t,""+r,n);if("object"===typeof r&&null!==r){switch(r.$$typeof){case w:return r.key===o?c(e,t,r,n):null;case k:return r.key===o?u(e,t,r,n):null;case O:return f(e,t,(o=r._init)(r._payload),n)}if(te(r)||L(r))return null!==o?null:d(e,t,r,n,null);ya(e,r)}return null}function m(e,t,r,n,o){if("string"===typeof n&&""!==n||"number"===typeof n)return s(t,e=e.get(r)||null,""+n,o);if("object"===typeof n&&null!==n){switch(n.$$typeof){case w:return c(t,e=e.get(null===n.key?r:n.key)||null,n,o);case k:return u(t,e=e.get(null===n.key?r:n.key)||null,n,o);case O:return m(e,t,r,(0,n._init)(n._payload),o)}if(te(n)||L(n))return d(t,e=e.get(r)||null,n,o,null);ya(t,n)}return null}function h(o,a,l,s){for(var c=null,u=null,d=a,h=a=0,g=null;null!==d&&h<l.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var v=f(o,d,l[h],s);if(null===v){null===d&&(d=g);break}e&&d&&null===v.alternate&&t(o,d),a=i(v,a,h),null===u?c=v:u.sibling=v,u=v,d=g}if(h===l.length)return r(o,d),aa&&Jo(o,h),c;if(null===d){for(;h<l.length;h++)null!==(d=p(o,l[h],s))&&(a=i(d,a,h),null===u?c=d:u.sibling=d,u=d);return aa&&Jo(o,h),c}for(d=n(o,d);h<l.length;h++)null!==(g=m(d,o,h,l[h],s))&&(e&&null!==g.alternate&&d.delete(null===g.key?h:g.key),a=i(g,a,h),null===u?c=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(o,e)}),aa&&Jo(o,h),c}function g(o,l,s,c){var u=L(s);if("function"!==typeof u)throw Error(a(150));if(null==(s=u.call(s)))throw Error(a(151));for(var d=u=null,h=l,g=l=0,v=null,y=s.next();null!==h&&!y.done;g++,y=s.next()){h.index>g?(v=h,h=null):v=h.sibling;var b=f(o,h,y.value,c);if(null===b){null===h&&(h=v);break}e&&h&&null===b.alternate&&t(o,h),l=i(b,l,g),null===d?u=b:d.sibling=b,d=b,h=v}if(y.done)return r(o,h),aa&&Jo(o,g),u;if(null===h){for(;!y.done;g++,y=s.next())null!==(y=p(o,y.value,c))&&(l=i(y,l,g),null===d?u=y:d.sibling=y,d=y);return aa&&Jo(o,g),u}for(h=n(o,h);!y.done;g++,y=s.next())null!==(y=m(h,o,g,y.value,c))&&(e&&null!==y.alternate&&h.delete(null===y.key?g:y.key),l=i(y,l,g),null===d?u=y:d.sibling=y,d=y);return e&&h.forEach(function(e){return t(o,e)}),aa&&Jo(o,g),u}return function e(n,a,i,s){if("object"===typeof i&&null!==i&&i.type===S&&null===i.key&&(i=i.props.children),"object"===typeof i&&null!==i){switch(i.$$typeof){case w:e:{for(var c=i.key,u=a;null!==u;){if(u.key===c){if((c=i.type)===S){if(7===u.tag){r(n,u.sibling),(a=o(u,i.props.children)).return=n,n=a;break e}}else if(u.elementType===c||"object"===typeof c&&null!==c&&c.$$typeof===O&&ba(c)===u.type){r(n,u.sibling),(a=o(u,i.props)).ref=va(n,u,i),a.return=n,n=a;break e}r(n,u);break}t(n,u),u=u.sibling}i.type===S?((a=Lc(i.props.children,n.mode,s,i.key)).return=n,n=a):((s=$c(i.type,i.key,i.props,null,n.mode,s)).ref=va(n,a,i),s.return=n,n=s)}return l(n);case k:e:{for(u=i.key;null!==a;){if(a.key===u){if(4===a.tag&&a.stateNode.containerInfo===i.containerInfo&&a.stateNode.implementation===i.implementation){r(n,a.sibling),(a=o(a,i.children||[])).return=n,n=a;break e}r(n,a);break}t(n,a),a=a.sibling}(a=Fc(i,n.mode,s)).return=n,n=a}return l(n);case O:return e(n,a,(u=i._init)(i._payload),s)}if(te(i))return h(n,a,i,s);if(L(i))return g(n,a,i,s);ya(n,i)}return"string"===typeof i&&""!==i||"number"===typeof i?(i=""+i,null!==a&&6===a.tag?(r(n,a.sibling),(a=o(a,i)).return=n,n=a):(r(n,a),(a=Ic(i,n.mode,s)).return=n,n=a),l(n)):r(n,a)}}var wa=xa(!0),ka=xa(!1),Sa=Co(null),ja=null,Ca=null,Ea=null;function _a(){Ea=Ca=ja=null}function Pa(e){var t=Sa.current;Eo(Sa),e._currentValue=t}function Ta(e,t,r){for(;null!==e;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==n&&(n.childLanes|=t)):null!==n&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function Ra(e,t){ja=e,Ea=Ca=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(bl=!0),e.firstContext=null)}function za(e){var t=e._currentValue;if(Ea!==e)if(e={context:e,memoizedValue:t,next:null},null===Ca){if(null===ja)throw Error(a(308));Ca=e,ja.dependencies={lanes:0,firstContext:e}}else Ca=Ca.next=e;return t}var Oa=null;function Na(e){null===Oa?Oa=[e]:Oa.push(e)}function $a(e,t,r,n){var o=t.interleaved;return null===o?(r.next=r,Na(t)):(r.next=o.next,o.next=r),t.interleaved=r,La(e,n)}function La(e,t){e.lanes|=t;var r=e.alternate;for(null!==r&&(r.lanes|=t),r=e,e=e.return;null!==e;)e.childLanes|=t,null!==(r=e.alternate)&&(r.childLanes|=t),r=e,e=e.return;return 3===r.tag?r.stateNode:null}var Da=!1;function Ia(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Fa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Aa(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ma(e,t,r){var n=e.updateQueue;if(null===n)return null;if(n=n.shared,0!==(2&Ps)){var o=n.pending;return null===o?t.next=t:(t.next=o.next,o.next=t),n.pending=t,La(e,r)}return null===(o=n.interleaved)?(t.next=t,Na(n)):(t.next=o.next,o.next=t),n.interleaved=t,La(e,r)}function Ua(e,t,r){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194240&r))){var n=t.lanes;r|=n&=e.pendingLanes,t.lanes=r,yt(e,r)}}function Ba(e,t){var r=e.updateQueue,n=e.alternate;if(null!==n&&r===(n=n.updateQueue)){var o=null,a=null;if(null!==(r=r.firstBaseUpdate)){do{var i={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};null===a?o=a=i:a=a.next=i,r=r.next}while(null!==r);null===a?o=a=t:a=a.next=t}else o=a=t;return r={baseState:n.baseState,firstBaseUpdate:o,lastBaseUpdate:a,shared:n.shared,effects:n.effects},void(e.updateQueue=r)}null===(e=r.lastBaseUpdate)?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Ha(e,t,r,n){var o=e.updateQueue;Da=!1;var a=o.firstBaseUpdate,i=o.lastBaseUpdate,l=o.shared.pending;if(null!==l){o.shared.pending=null;var s=l,c=s.next;s.next=null,null===i?a=c:i.next=c,i=s;var u=e.alternate;null!==u&&((l=(u=u.updateQueue).lastBaseUpdate)!==i&&(null===l?u.firstBaseUpdate=c:l.next=c,u.lastBaseUpdate=s))}if(null!==a){var d=o.baseState;for(i=0,u=c=s=null,l=a;;){var p=l.lane,f=l.eventTime;if((n&p)===p){null!==u&&(u=u.next={eventTime:f,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var m=e,h=l;switch(p=t,f=r,h.tag){case 1:if("function"===typeof(m=h.payload)){d=m.call(f,d,p);break e}d=m;break e;case 3:m.flags=-65537&m.flags|128;case 0:if(null===(p="function"===typeof(m=h.payload)?m.call(f,d,p):m)||void 0===p)break e;d=I({},d,p);break e;case 2:Da=!0}}null!==l.callback&&0!==l.lane&&(e.flags|=64,null===(p=o.effects)?o.effects=[l]:p.push(l))}else f={eventTime:f,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},null===u?(c=u=f,s=d):u=u.next=f,i|=p;if(null===(l=l.next)){if(null===(l=o.shared.pending))break;l=(p=l).next,p.next=null,o.lastBaseUpdate=p,o.shared.pending=null}}if(null===u&&(s=d),o.baseState=s,o.firstBaseUpdate=c,o.lastBaseUpdate=u,null!==(t=o.shared.interleaved)){o=t;do{i|=o.lane,o=o.next}while(o!==t)}else null===a&&(o.shared.lanes=0);Ds|=i,e.lanes=i,e.memoizedState=d}}function Wa(e,t,r){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var n=e[t],o=n.callback;if(null!==o){if(n.callback=null,n=r,"function"!==typeof o)throw Error(a(191,o));o.call(n)}}}var Va={},Ga=Co(Va),Ka=Co(Va),Xa=Co(Va);function Qa(e){if(e===Va)throw Error(a(174));return e}function qa(e,t){switch(_o(Xa,t),_o(Ka,e),_o(Ga,Va),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:se(null,"");break;default:t=se(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Eo(Ga),_o(Ga,t)}function Ya(){Eo(Ga),Eo(Ka),Eo(Xa)}function Za(e){Qa(Xa.current);var t=Qa(Ga.current),r=se(t,e.type);t!==r&&(_o(Ka,e),_o(Ga,r))}function Ja(e){Ka.current===e&&(Eo(Ga),Eo(Ka))}var ei=Co(0);function ti(e){for(var t=e;null!==t;){if(13===t.tag){var r=t.memoizedState;if(null!==r&&(null===(r=r.dehydrated)||"$?"===r.data||"$!"===r.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ri=[];function ni(){for(var e=0;e<ri.length;e++)ri[e]._workInProgressVersionPrimary=null;ri.length=0}var oi=x.ReactCurrentDispatcher,ai=x.ReactCurrentBatchConfig,ii=0,li=null,si=null,ci=null,ui=!1,di=!1,pi=0,fi=0;function mi(){throw Error(a(321))}function hi(e,t){if(null===t)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!ln(e[r],t[r]))return!1;return!0}function gi(e,t,r,n,o,i){if(ii=i,li=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,oi.current=null===e||null===e.memoizedState?Ji:el,e=r(n,o),di){i=0;do{if(di=!1,pi=0,25<=i)throw Error(a(301));i+=1,ci=si=null,t.updateQueue=null,oi.current=tl,e=r(n,o)}while(di)}if(oi.current=Zi,t=null!==si&&null!==si.next,ii=0,ci=si=li=null,ui=!1,t)throw Error(a(300));return e}function vi(){var e=0!==pi;return pi=0,e}function yi(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===ci?li.memoizedState=ci=e:ci=ci.next=e,ci}function bi(){if(null===si){var e=li.alternate;e=null!==e?e.memoizedState:null}else e=si.next;var t=null===ci?li.memoizedState:ci.next;if(null!==t)ci=t,si=e;else{if(null===e)throw Error(a(310));e={memoizedState:(si=e).memoizedState,baseState:si.baseState,baseQueue:si.baseQueue,queue:si.queue,next:null},null===ci?li.memoizedState=ci=e:ci=ci.next=e}return ci}function xi(e,t){return"function"===typeof t?t(e):t}function wi(e){var t=bi(),r=t.queue;if(null===r)throw Error(a(311));r.lastRenderedReducer=e;var n=si,o=n.baseQueue,i=r.pending;if(null!==i){if(null!==o){var l=o.next;o.next=i.next,i.next=l}n.baseQueue=o=i,r.pending=null}if(null!==o){i=o.next,n=n.baseState;var s=l=null,c=null,u=i;do{var d=u.lane;if((ii&d)===d)null!==c&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),n=u.hasEagerState?u.eagerState:e(n,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};null===c?(s=c=p,l=n):c=c.next=p,li.lanes|=d,Ds|=d}u=u.next}while(null!==u&&u!==i);null===c?l=n:c.next=s,ln(n,t.memoizedState)||(bl=!0),t.memoizedState=n,t.baseState=l,t.baseQueue=c,r.lastRenderedState=n}if(null!==(e=r.interleaved)){o=e;do{i=o.lane,li.lanes|=i,Ds|=i,o=o.next}while(o!==e)}else null===o&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function ki(e){var t=bi(),r=t.queue;if(null===r)throw Error(a(311));r.lastRenderedReducer=e;var n=r.dispatch,o=r.pending,i=t.memoizedState;if(null!==o){r.pending=null;var l=o=o.next;do{i=e(i,l.action),l=l.next}while(l!==o);ln(i,t.memoizedState)||(bl=!0),t.memoizedState=i,null===t.baseQueue&&(t.baseState=i),r.lastRenderedState=i}return[i,n]}function Si(){}function ji(e,t){var r=li,n=bi(),o=t(),i=!ln(n.memoizedState,o);if(i&&(n.memoizedState=o,bl=!0),n=n.queue,Di(_i.bind(null,r,n,e),[e]),n.getSnapshot!==t||i||null!==ci&&1&ci.memoizedState.tag){if(r.flags|=2048,zi(9,Ei.bind(null,r,n,o,t),void 0,null),null===Ts)throw Error(a(349));0!==(30&ii)||Ci(r,t,o)}return o}function Ci(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},null===(t=li.updateQueue)?(t={lastEffect:null,stores:null},li.updateQueue=t,t.stores=[e]):null===(r=t.stores)?t.stores=[e]:r.push(e)}function Ei(e,t,r,n){t.value=r,t.getSnapshot=n,Pi(t)&&Ti(e)}function _i(e,t,r){return r(function(){Pi(t)&&Ti(e)})}function Pi(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!ln(e,r)}catch(n){return!0}}function Ti(e){var t=La(e,1);null!==t&&rc(t,e,1,-1)}function Ri(e){var t=yi();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xi,lastRenderedState:e},t.queue=e,e=e.dispatch=Xi.bind(null,li,e),[t.memoizedState,e]}function zi(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},null===(t=li.updateQueue)?(t={lastEffect:null,stores:null},li.updateQueue=t,t.lastEffect=e.next=e):null===(r=t.lastEffect)?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e),e}function Oi(){return bi().memoizedState}function Ni(e,t,r,n){var o=yi();li.flags|=e,o.memoizedState=zi(1|t,r,void 0,void 0===n?null:n)}function $i(e,t,r,n){var o=bi();n=void 0===n?null:n;var a=void 0;if(null!==si){var i=si.memoizedState;if(a=i.destroy,null!==n&&hi(n,i.deps))return void(o.memoizedState=zi(t,r,a,n))}li.flags|=e,o.memoizedState=zi(1|t,r,a,n)}function Li(e,t){return Ni(8390656,8,e,t)}function Di(e,t){return $i(2048,8,e,t)}function Ii(e,t){return $i(4,2,e,t)}function Fi(e,t){return $i(4,4,e,t)}function Ai(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Mi(e,t,r){return r=null!==r&&void 0!==r?r.concat([e]):null,$i(4,4,Ai.bind(null,t,e),r)}function Ui(){}function Bi(e,t){var r=bi();t=void 0===t?null:t;var n=r.memoizedState;return null!==n&&null!==t&&hi(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function Hi(e,t){var r=bi();t=void 0===t?null:t;var n=r.memoizedState;return null!==n&&null!==t&&hi(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function Wi(e,t,r){return 0===(21&ii)?(e.baseState&&(e.baseState=!1,bl=!0),e.memoizedState=r):(ln(r,t)||(r=ht(),li.lanes|=r,Ds|=r,e.baseState=!0),t)}function Vi(e,t){var r=bt;bt=0!==r&&4>r?r:4,e(!0);var n=ai.transition;ai.transition={};try{e(!1),t()}finally{bt=r,ai.transition=n}}function Gi(){return bi().memoizedState}function Ki(e,t,r){var n=tc(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},Qi(e))qi(t,r);else if(null!==(r=$a(e,t,r,n))){rc(r,e,n,ec()),Yi(r,t,n)}}function Xi(e,t,r){var n=tc(e),o={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(Qi(e))qi(t,o);else{var a=e.alternate;if(0===e.lanes&&(null===a||0===a.lanes)&&null!==(a=t.lastRenderedReducer))try{var i=t.lastRenderedState,l=a(i,r);if(o.hasEagerState=!0,o.eagerState=l,ln(l,i)){var s=t.interleaved;return null===s?(o.next=o,Na(t)):(o.next=s.next,s.next=o),void(t.interleaved=o)}}catch(c){}null!==(r=$a(e,t,o,n))&&(rc(r,e,n,o=ec()),Yi(r,t,n))}}function Qi(e){var t=e.alternate;return e===li||null!==t&&t===li}function qi(e,t){di=ui=!0;var r=e.pending;null===r?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Yi(e,t,r){if(0!==(4194240&r)){var n=t.lanes;r|=n&=e.pendingLanes,t.lanes=r,yt(e,r)}}var Zi={readContext:za,useCallback:mi,useContext:mi,useEffect:mi,useImperativeHandle:mi,useInsertionEffect:mi,useLayoutEffect:mi,useMemo:mi,useReducer:mi,useRef:mi,useState:mi,useDebugValue:mi,useDeferredValue:mi,useTransition:mi,useMutableSource:mi,useSyncExternalStore:mi,useId:mi,unstable_isNewReconciler:!1},Ji={readContext:za,useCallback:function(e,t){return yi().memoizedState=[e,void 0===t?null:t],e},useContext:za,useEffect:Li,useImperativeHandle:function(e,t,r){return r=null!==r&&void 0!==r?r.concat([e]):null,Ni(4194308,4,Ai.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Ni(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ni(4,2,e,t)},useMemo:function(e,t){var r=yi();return t=void 0===t?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=yi();return t=void 0!==r?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=Ki.bind(null,li,e),[n.memoizedState,e]},useRef:function(e){return e={current:e},yi().memoizedState=e},useState:Ri,useDebugValue:Ui,useDeferredValue:function(e){return yi().memoizedState=e},useTransition:function(){var e=Ri(!1),t=e[0];return e=Vi.bind(null,e[1]),yi().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=li,o=yi();if(aa){if(void 0===r)throw Error(a(407));r=r()}else{if(r=t(),null===Ts)throw Error(a(349));0!==(30&ii)||Ci(n,t,r)}o.memoizedState=r;var i={value:r,getSnapshot:t};return o.queue=i,Li(_i.bind(null,n,i,e),[e]),n.flags|=2048,zi(9,Ei.bind(null,n,i,r,t),void 0,null),r},useId:function(){var e=yi(),t=Ts.identifierPrefix;if(aa){var r=Zo;t=":"+t+"R"+(r=(Yo&~(1<<32-it(Yo)-1)).toString(32)+r),0<(r=pi++)&&(t+="H"+r.toString(32)),t+=":"}else t=":"+t+"r"+(r=fi++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},el={readContext:za,useCallback:Bi,useContext:za,useEffect:Di,useImperativeHandle:Mi,useInsertionEffect:Ii,useLayoutEffect:Fi,useMemo:Hi,useReducer:wi,useRef:Oi,useState:function(){return wi(xi)},useDebugValue:Ui,useDeferredValue:function(e){return Wi(bi(),si.memoizedState,e)},useTransition:function(){return[wi(xi)[0],bi().memoizedState]},useMutableSource:Si,useSyncExternalStore:ji,useId:Gi,unstable_isNewReconciler:!1},tl={readContext:za,useCallback:Bi,useContext:za,useEffect:Di,useImperativeHandle:Mi,useInsertionEffect:Ii,useLayoutEffect:Fi,useMemo:Hi,useReducer:ki,useRef:Oi,useState:function(){return ki(xi)},useDebugValue:Ui,useDeferredValue:function(e){var t=bi();return null===si?t.memoizedState=e:Wi(t,si.memoizedState,e)},useTransition:function(){return[ki(xi)[0],bi().memoizedState]},useMutableSource:Si,useSyncExternalStore:ji,useId:Gi,unstable_isNewReconciler:!1};function rl(e,t){if(e&&e.defaultProps){for(var r in t=I({},t),e=e.defaultProps)void 0===t[r]&&(t[r]=e[r]);return t}return t}function nl(e,t,r,n){r=null===(r=r(n,t=e.memoizedState))||void 0===r?t:I({},t,r),e.memoizedState=r,0===e.lanes&&(e.updateQueue.baseState=r)}var ol={isMounted:function(e){return!!(e=e._reactInternals)&&Be(e)===e},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=ec(),o=tc(e),a=Aa(n,o);a.payload=t,void 0!==r&&null!==r&&(a.callback=r),null!==(t=Ma(e,a,o))&&(rc(t,e,o,n),Ua(t,e,o))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=ec(),o=tc(e),a=Aa(n,o);a.tag=1,a.payload=t,void 0!==r&&null!==r&&(a.callback=r),null!==(t=Ma(e,a,o))&&(rc(t,e,o,n),Ua(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=ec(),n=tc(e),o=Aa(r,n);o.tag=2,void 0!==t&&null!==t&&(o.callback=t),null!==(t=Ma(e,o,n))&&(rc(t,e,n,r),Ua(t,e,n))}};function al(e,t,r,n,o,a,i){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(n,a,i):!t.prototype||!t.prototype.isPureReactComponent||(!sn(r,n)||!sn(o,a))}function il(e,t,r){var n=!1,o=Po,a=t.contextType;return"object"===typeof a&&null!==a?a=za(a):(o=No(t)?zo:To.current,a=(n=null!==(n=t.contextTypes)&&void 0!==n)?Oo(e,o):Po),t=new t(r,a),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=ol,e.stateNode=t,t._reactInternals=e,n&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=a),t}function ll(e,t,r,n){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(r,n),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&ol.enqueueReplaceState(t,t.state,null)}function sl(e,t,r,n){var o=e.stateNode;o.props=r,o.state=e.memoizedState,o.refs={},Ia(e);var a=t.contextType;"object"===typeof a&&null!==a?o.context=za(a):(a=No(t)?zo:To.current,o.context=Oo(e,a)),o.state=e.memoizedState,"function"===typeof(a=t.getDerivedStateFromProps)&&(nl(e,t,a,r),o.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof o.getSnapshotBeforeUpdate||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||(t=o.state,"function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount(),t!==o.state&&ol.enqueueReplaceState(o,o.state,null),Ha(e,r,o,n),o.state=e.memoizedState),"function"===typeof o.componentDidMount&&(e.flags|=4194308)}function cl(e,t){try{var r="",n=t;do{r+=U(n),n=n.return}while(n);var o=r}catch(a){o="\nError generating stack: "+a.message+"\n"+a.stack}return{value:e,source:t,stack:o,digest:null}}function ul(e,t,r){return{value:e,source:null,stack:null!=r?r:null,digest:null!=t?t:null}}function dl(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var pl="function"===typeof WeakMap?WeakMap:Map;function fl(e,t,r){(r=Aa(-1,r)).tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){Ws||(Ws=!0,Vs=n),dl(0,t)},r}function ml(e,t,r){(r=Aa(-1,r)).tag=3;var n=e.type.getDerivedStateFromError;if("function"===typeof n){var o=t.value;r.payload=function(){return n(o)},r.callback=function(){dl(0,t)}}var a=e.stateNode;return null!==a&&"function"===typeof a.componentDidCatch&&(r.callback=function(){dl(0,t),"function"!==typeof n&&(null===Gs?Gs=new Set([this]):Gs.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),r}function hl(e,t,r){var n=e.pingCache;if(null===n){n=e.pingCache=new pl;var o=new Set;n.set(t,o)}else void 0===(o=n.get(t))&&(o=new Set,n.set(t,o));o.has(r)||(o.add(r),e=Cc.bind(null,e,t,r),t.then(e,e))}function gl(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function vl(e,t,r,n,o){return 0===(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,1===r.tag&&(null===r.alternate?r.tag=17:((t=Aa(-1,1)).tag=2,Ma(r,t,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var yl=x.ReactCurrentOwner,bl=!1;function xl(e,t,r,n){t.child=null===e?ka(t,null,r,n):wa(t,e.child,r,n)}function wl(e,t,r,n,o){r=r.render;var a=t.ref;return Ra(t,o),n=gi(e,t,r,n,a,o),r=vi(),null===e||bl?(aa&&r&&ta(t),t.flags|=1,xl(e,t,n,o),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Wl(e,t,o))}function kl(e,t,r,n,o){if(null===e){var a=r.type;return"function"!==typeof a||Oc(a)||void 0!==a.defaultProps||null!==r.compare||void 0!==r.defaultProps?((e=$c(r.type,null,n,t,t.mode,o)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=a,Sl(e,t,a,n,o))}if(a=e.child,0===(e.lanes&o)){var i=a.memoizedProps;if((r=null!==(r=r.compare)?r:sn)(i,n)&&e.ref===t.ref)return Wl(e,t,o)}return t.flags|=1,(e=Nc(a,n)).ref=t.ref,e.return=t,t.child=e}function Sl(e,t,r,n,o){if(null!==e){var a=e.memoizedProps;if(sn(a,n)&&e.ref===t.ref){if(bl=!1,t.pendingProps=n=a,0===(e.lanes&o))return t.lanes=e.lanes,Wl(e,t,o);0!==(131072&e.flags)&&(bl=!0)}}return El(e,t,r,n,o)}function jl(e,t,r){var n=t.pendingProps,o=n.children,a=null!==e?e.memoizedState:null;if("hidden"===n.mode)if(0===(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},_o(Ns,Os),Os|=r;else{if(0===(1073741824&r))return e=null!==a?a.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,_o(Ns,Os),Os|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=null!==a?a.baseLanes:r,_o(Ns,Os),Os|=n}else null!==a?(n=a.baseLanes|r,t.memoizedState=null):n=r,_o(Ns,Os),Os|=n;return xl(e,t,o,r),t.child}function Cl(e,t){var r=t.ref;(null===e&&null!==r||null!==e&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function El(e,t,r,n,o){var a=No(r)?zo:To.current;return a=Oo(t,a),Ra(t,o),r=gi(e,t,r,n,a,o),n=vi(),null===e||bl?(aa&&n&&ta(t),t.flags|=1,xl(e,t,r,o),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Wl(e,t,o))}function _l(e,t,r,n,o){if(No(r)){var a=!0;Io(t)}else a=!1;if(Ra(t,o),null===t.stateNode)Hl(e,t),il(t,r,n),sl(t,r,n,o),n=!0;else if(null===e){var i=t.stateNode,l=t.memoizedProps;i.props=l;var s=i.context,c=r.contextType;"object"===typeof c&&null!==c?c=za(c):c=Oo(t,c=No(r)?zo:To.current);var u=r.getDerivedStateFromProps,d="function"===typeof u||"function"===typeof i.getSnapshotBeforeUpdate;d||"function"!==typeof i.UNSAFE_componentWillReceiveProps&&"function"!==typeof i.componentWillReceiveProps||(l!==n||s!==c)&&ll(t,i,n,c),Da=!1;var p=t.memoizedState;i.state=p,Ha(t,n,i,o),s=t.memoizedState,l!==n||p!==s||Ro.current||Da?("function"===typeof u&&(nl(t,r,u,n),s=t.memoizedState),(l=Da||al(t,r,l,n,p,s,c))?(d||"function"!==typeof i.UNSAFE_componentWillMount&&"function"!==typeof i.componentWillMount||("function"===typeof i.componentWillMount&&i.componentWillMount(),"function"===typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount()),"function"===typeof i.componentDidMount&&(t.flags|=4194308)):("function"===typeof i.componentDidMount&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=s),i.props=n,i.state=s,i.context=c,n=l):("function"===typeof i.componentDidMount&&(t.flags|=4194308),n=!1)}else{i=t.stateNode,Fa(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:rl(t.type,l),i.props=c,d=t.pendingProps,p=i.context,"object"===typeof(s=r.contextType)&&null!==s?s=za(s):s=Oo(t,s=No(r)?zo:To.current);var f=r.getDerivedStateFromProps;(u="function"===typeof f||"function"===typeof i.getSnapshotBeforeUpdate)||"function"!==typeof i.UNSAFE_componentWillReceiveProps&&"function"!==typeof i.componentWillReceiveProps||(l!==d||p!==s)&&ll(t,i,n,s),Da=!1,p=t.memoizedState,i.state=p,Ha(t,n,i,o);var m=t.memoizedState;l!==d||p!==m||Ro.current||Da?("function"===typeof f&&(nl(t,r,f,n),m=t.memoizedState),(c=Da||al(t,r,c,n,p,m,s)||!1)?(u||"function"!==typeof i.UNSAFE_componentWillUpdate&&"function"!==typeof i.componentWillUpdate||("function"===typeof i.componentWillUpdate&&i.componentWillUpdate(n,m,s),"function"===typeof i.UNSAFE_componentWillUpdate&&i.UNSAFE_componentWillUpdate(n,m,s)),"function"===typeof i.componentDidUpdate&&(t.flags|=4),"function"===typeof i.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof i.componentDidUpdate||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof i.getSnapshotBeforeUpdate||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=m),i.props=n,i.state=m,i.context=s,n=c):("function"!==typeof i.componentDidUpdate||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof i.getSnapshotBeforeUpdate||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),n=!1)}return Pl(e,t,r,n,a,o)}function Pl(e,t,r,n,o,a){Cl(e,t);var i=0!==(128&t.flags);if(!n&&!i)return o&&Fo(t,r,!1),Wl(e,t,a);n=t.stateNode,yl.current=t;var l=i&&"function"!==typeof r.getDerivedStateFromError?null:n.render();return t.flags|=1,null!==e&&i?(t.child=wa(t,e.child,null,a),t.child=wa(t,null,l,a)):xl(e,t,l,a),t.memoizedState=n.state,o&&Fo(t,r,!0),t.child}function Tl(e){var t=e.stateNode;t.pendingContext?Lo(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Lo(0,t.context,!1),qa(e,t.containerInfo)}function Rl(e,t,r,n,o){return ma(),ha(o),t.flags|=256,xl(e,t,r,n),t.child}var zl,Ol,Nl,$l,Ll={dehydrated:null,treeContext:null,retryLane:0};function Dl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Il(e,t,r){var n,o=t.pendingProps,i=ei.current,l=!1,s=0!==(128&t.flags);if((n=s)||(n=(null===e||null!==e.memoizedState)&&0!==(2&i)),n?(l=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(i|=1),_o(ei,1&i),null===e)return ua(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0===(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(s=o.children,e=o.fallback,l?(o=t.mode,l=t.child,s={mode:"hidden",children:s},0===(1&o)&&null!==l?(l.childLanes=0,l.pendingProps=s):l=Dc(s,o,0,null),e=Lc(e,o,r,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Dl(r),t.memoizedState=Ll,e):Fl(t,s));if(null!==(i=e.memoizedState)&&null!==(n=i.dehydrated))return function(e,t,r,n,o,i,l){if(r)return 256&t.flags?(t.flags&=-257,Al(e,t,l,n=ul(Error(a(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(i=n.fallback,o=t.mode,n=Dc({mode:"visible",children:n.children},o,0,null),(i=Lc(i,o,l,null)).flags|=2,n.return=t,i.return=t,n.sibling=i,t.child=n,0!==(1&t.mode)&&wa(t,e.child,null,l),t.child.memoizedState=Dl(l),t.memoizedState=Ll,i);if(0===(1&t.mode))return Al(e,t,l,null);if("$!"===o.data){if(n=o.nextSibling&&o.nextSibling.dataset)var s=n.dgst;return n=s,Al(e,t,l,n=ul(i=Error(a(419)),n,void 0))}if(s=0!==(l&e.childLanes),bl||s){if(null!==(n=Ts)){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}0!==(o=0!==(o&(n.suspendedLanes|l))?0:o)&&o!==i.retryLane&&(i.retryLane=o,La(e,o),rc(n,e,o,-1))}return hc(),Al(e,t,l,n=ul(Error(a(421))))}return"$?"===o.data?(t.flags|=128,t.child=e.child,t=_c.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,oa=co(o.nextSibling),na=t,aa=!0,ia=null,null!==e&&(Xo[Qo++]=Yo,Xo[Qo++]=Zo,Xo[Qo++]=qo,Yo=e.id,Zo=e.overflow,qo=t),t=Fl(t,n.children),t.flags|=4096,t)}(e,t,s,o,n,i,r);if(l){l=o.fallback,s=t.mode,n=(i=e.child).sibling;var c={mode:"hidden",children:o.children};return 0===(1&s)&&t.child!==i?((o=t.child).childLanes=0,o.pendingProps=c,t.deletions=null):(o=Nc(i,c)).subtreeFlags=14680064&i.subtreeFlags,null!==n?l=Nc(n,l):(l=Lc(l,s,r,null)).flags|=2,l.return=t,o.return=t,o.sibling=l,t.child=o,o=l,l=t.child,s=null===(s=e.child.memoizedState)?Dl(r):{baseLanes:s.baseLanes|r,cachePool:null,transitions:s.transitions},l.memoizedState=s,l.childLanes=e.childLanes&~r,t.memoizedState=Ll,o}return e=(l=e.child).sibling,o=Nc(l,{mode:"visible",children:o.children}),0===(1&t.mode)&&(o.lanes=r),o.return=t,o.sibling=null,null!==e&&(null===(r=t.deletions)?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=o,t.memoizedState=null,o}function Fl(e,t){return(t=Dc({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Al(e,t,r,n){return null!==n&&ha(n),wa(t,e.child,null,r),(e=Fl(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Ml(e,t,r){e.lanes|=t;var n=e.alternate;null!==n&&(n.lanes|=t),Ta(e.return,t,r)}function Ul(e,t,r,n,o){var a=e.memoizedState;null===a?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:o}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=n,a.tail=r,a.tailMode=o)}function Bl(e,t,r){var n=t.pendingProps,o=n.revealOrder,a=n.tail;if(xl(e,t,n.children,r),0!==(2&(n=ei.current)))n=1&n|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Ml(e,r,t);else if(19===e.tag)Ml(e,r,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(_o(ei,n),0===(1&t.mode))t.memoizedState=null;else switch(o){case"forwards":for(r=t.child,o=null;null!==r;)null!==(e=r.alternate)&&null===ti(e)&&(o=r),r=r.sibling;null===(r=o)?(o=t.child,t.child=null):(o=r.sibling,r.sibling=null),Ul(t,!1,o,r,a);break;case"backwards":for(r=null,o=t.child,t.child=null;null!==o;){if(null!==(e=o.alternate)&&null===ti(e)){t.child=o;break}e=o.sibling,o.sibling=r,r=o,o=e}Ul(t,!0,r,null,a);break;case"together":Ul(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Hl(e,t){0===(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Wl(e,t,r){if(null!==e&&(t.dependencies=e.dependencies),Ds|=t.lanes,0===(r&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(a(153));if(null!==t.child){for(r=Nc(e=t.child,e.pendingProps),t.child=r,r.return=t;null!==e.sibling;)e=e.sibling,(r=r.sibling=Nc(e,e.pendingProps)).return=t;r.sibling=null}return t.child}function Vl(e,t){if(!aa)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;null!==t;)null!==t.alternate&&(r=t),t=t.sibling;null===r?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;null!==r;)null!==r.alternate&&(n=r),r=r.sibling;null===n?t||null===e.tail?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Gl(e){var t=null!==e.alternate&&e.alternate.child===e.child,r=0,n=0;if(t)for(var o=e.child;null!==o;)r|=o.lanes|o.childLanes,n|=14680064&o.subtreeFlags,n|=14680064&o.flags,o.return=e,o=o.sibling;else for(o=e.child;null!==o;)r|=o.lanes|o.childLanes,n|=o.subtreeFlags,n|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function Kl(e,t,r){var n=t.pendingProps;switch(ra(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Gl(t),null;case 1:case 17:return No(t.type)&&$o(),Gl(t),null;case 3:return n=t.stateNode,Ya(),Eo(Ro),Eo(To),ni(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),null!==e&&null!==e.child||(pa(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==ia&&(ic(ia),ia=null))),Ol(e,t),Gl(t),null;case 5:Ja(t);var o=Qa(Xa.current);if(r=t.type,null!==e&&null!=t.stateNode)Nl(e,t,r,n,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(null===t.stateNode)throw Error(a(166));return Gl(t),null}if(e=Qa(Ga.current),pa(t)){n=t.stateNode,r=t.type;var i=t.memoizedProps;switch(n[fo]=t,n[mo]=i,e=0!==(1&t.mode),r){case"dialog":An("cancel",n),An("close",n);break;case"iframe":case"object":case"embed":An("load",n);break;case"video":case"audio":for(o=0;o<Ln.length;o++)An(Ln[o],n);break;case"source":An("error",n);break;case"img":case"image":case"link":An("error",n),An("load",n);break;case"details":An("toggle",n);break;case"input":q(n,i),An("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!i.multiple},An("invalid",n);break;case"textarea":oe(n,i),An("invalid",n)}for(var s in ye(r,i),o=null,i)if(i.hasOwnProperty(s)){var c=i[s];"children"===s?"string"===typeof c?n.textContent!==c&&(!0!==i.suppressHydrationWarning&&Zn(n.textContent,c,e),o=["children",c]):"number"===typeof c&&n.textContent!==""+c&&(!0!==i.suppressHydrationWarning&&Zn(n.textContent,c,e),o=["children",""+c]):l.hasOwnProperty(s)&&null!=c&&"onScroll"===s&&An("scroll",n)}switch(r){case"input":G(n),J(n,i,!0);break;case"textarea":G(n),ie(n);break;case"select":case"option":break;default:"function"===typeof i.onClick&&(n.onclick=Jn)}n=o,t.updateQueue=n,null!==n&&(t.flags|=4)}else{s=9===o.nodeType?o:o.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=le(r)),"http://www.w3.org/1999/xhtml"===e?"script"===r?((e=s.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"===typeof n.is?e=s.createElement(r,{is:n.is}):(e=s.createElement(r),"select"===r&&(s=e,n.multiple?s.multiple=!0:n.size&&(s.size=n.size))):e=s.createElementNS(e,r),e[fo]=t,e[mo]=n,zl(e,t,!1,!1),t.stateNode=e;e:{switch(s=be(r,n),r){case"dialog":An("cancel",e),An("close",e),o=n;break;case"iframe":case"object":case"embed":An("load",e),o=n;break;case"video":case"audio":for(o=0;o<Ln.length;o++)An(Ln[o],e);o=n;break;case"source":An("error",e),o=n;break;case"img":case"image":case"link":An("error",e),An("load",e),o=n;break;case"details":An("toggle",e),o=n;break;case"input":q(e,n),o=Q(e,n),An("invalid",e);break;case"option":default:o=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},o=I({},n,{value:void 0}),An("invalid",e);break;case"textarea":oe(e,n),o=ne(e,n),An("invalid",e)}for(i in ye(r,o),c=o)if(c.hasOwnProperty(i)){var u=c[i];"style"===i?ge(e,u):"dangerouslySetInnerHTML"===i?null!=(u=u?u.__html:void 0)&&de(e,u):"children"===i?"string"===typeof u?("textarea"!==r||""!==u)&&pe(e,u):"number"===typeof u&&pe(e,""+u):"suppressContentEditableWarning"!==i&&"suppressHydrationWarning"!==i&&"autoFocus"!==i&&(l.hasOwnProperty(i)?null!=u&&"onScroll"===i&&An("scroll",e):null!=u&&b(e,i,u,s))}switch(r){case"input":G(e),J(e,n,!1);break;case"textarea":G(e),ie(e);break;case"option":null!=n.value&&e.setAttribute("value",""+W(n.value));break;case"select":e.multiple=!!n.multiple,null!=(i=n.value)?re(e,!!n.multiple,i,!1):null!=n.defaultValue&&re(e,!!n.multiple,n.defaultValue,!0);break;default:"function"===typeof o.onClick&&(e.onclick=Jn)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return Gl(t),null;case 6:if(e&&null!=t.stateNode)$l(e,t,e.memoizedProps,n);else{if("string"!==typeof n&&null===t.stateNode)throw Error(a(166));if(r=Qa(Xa.current),Qa(Ga.current),pa(t)){if(n=t.stateNode,r=t.memoizedProps,n[fo]=t,(i=n.nodeValue!==r)&&null!==(e=na))switch(e.tag){case 3:Zn(n.nodeValue,r,0!==(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Zn(n.nodeValue,r,0!==(1&e.mode))}i&&(t.flags|=4)}else(n=(9===r.nodeType?r:r.ownerDocument).createTextNode(n))[fo]=t,t.stateNode=n}return Gl(t),null;case 13:if(Eo(ei),n=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(aa&&null!==oa&&0!==(1&t.mode)&&0===(128&t.flags))fa(),ma(),t.flags|=98560,i=!1;else if(i=pa(t),null!==n&&null!==n.dehydrated){if(null===e){if(!i)throw Error(a(318));if(!(i=null!==(i=t.memoizedState)?i.dehydrated:null))throw Error(a(317));i[fo]=t}else ma(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Gl(t),i=!1}else null!==ia&&(ic(ia),ia=null),i=!0;if(!i)return 65536&t.flags?t:null}return 0!==(128&t.flags)?(t.lanes=r,t):((n=null!==n)!==(null!==e&&null!==e.memoizedState)&&n&&(t.child.flags|=8192,0!==(1&t.mode)&&(null===e||0!==(1&ei.current)?0===$s&&($s=3):hc())),null!==t.updateQueue&&(t.flags|=4),Gl(t),null);case 4:return Ya(),Ol(e,t),null===e&&Bn(t.stateNode.containerInfo),Gl(t),null;case 10:return Pa(t.type._context),Gl(t),null;case 19:if(Eo(ei),null===(i=t.memoizedState))return Gl(t),null;if(n=0!==(128&t.flags),null===(s=i.rendering))if(n)Vl(i,!1);else{if(0!==$s||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(s=ti(e))){for(t.flags|=128,Vl(i,!1),null!==(n=s.updateQueue)&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;null!==r;)e=n,(i=r).flags&=14680066,null===(s=i.alternate)?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return _o(ei,1&ei.current|2),t.child}e=e.sibling}null!==i.tail&&Ye()>Bs&&(t.flags|=128,n=!0,Vl(i,!1),t.lanes=4194304)}else{if(!n)if(null!==(e=ti(s))){if(t.flags|=128,n=!0,null!==(r=e.updateQueue)&&(t.updateQueue=r,t.flags|=4),Vl(i,!0),null===i.tail&&"hidden"===i.tailMode&&!s.alternate&&!aa)return Gl(t),null}else 2*Ye()-i.renderingStartTime>Bs&&1073741824!==r&&(t.flags|=128,n=!0,Vl(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(null!==(r=i.last)?r.sibling=s:t.child=s,i.last=s)}return null!==i.tail?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Ye(),t.sibling=null,r=ei.current,_o(ei,n?1&r|2:1&r),t):(Gl(t),null);case 22:case 23:return dc(),n=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==n&&(t.flags|=8192),n&&0!==(1&t.mode)?0!==(1073741824&Os)&&(Gl(t),6&t.subtreeFlags&&(t.flags|=8192)):Gl(t),null;case 24:case 25:return null}throw Error(a(156,t.tag))}function Xl(e,t){switch(ra(t),t.tag){case 1:return No(t.type)&&$o(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Ya(),Eo(Ro),Eo(To),ni(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 5:return Ja(t),null;case 13:if(Eo(ei),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(a(340));ma()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Eo(ei),null;case 4:return Ya(),null;case 10:return Pa(t.type._context),null;case 22:case 23:return dc(),null;default:return null}}zl=function(e,t){for(var r=t.child;null!==r;){if(5===r.tag||6===r.tag)e.appendChild(r.stateNode);else if(4!==r.tag&&null!==r.child){r.child.return=r,r=r.child;continue}if(r===t)break;for(;null===r.sibling;){if(null===r.return||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},Ol=function(){},Nl=function(e,t,r,n){var o=e.memoizedProps;if(o!==n){e=t.stateNode,Qa(Ga.current);var a,i=null;switch(r){case"input":o=Q(e,o),n=Q(e,n),i=[];break;case"select":o=I({},o,{value:void 0}),n=I({},n,{value:void 0}),i=[];break;case"textarea":o=ne(e,o),n=ne(e,n),i=[];break;default:"function"!==typeof o.onClick&&"function"===typeof n.onClick&&(e.onclick=Jn)}for(u in ye(r,n),r=null,o)if(!n.hasOwnProperty(u)&&o.hasOwnProperty(u)&&null!=o[u])if("style"===u){var s=o[u];for(a in s)s.hasOwnProperty(a)&&(r||(r={}),r[a]="")}else"dangerouslySetInnerHTML"!==u&&"children"!==u&&"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(l.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in n){var c=n[u];if(s=null!=o?o[u]:void 0,n.hasOwnProperty(u)&&c!==s&&(null!=c||null!=s))if("style"===u)if(s){for(a in s)!s.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(r||(r={}),r[a]="");for(a in c)c.hasOwnProperty(a)&&s[a]!==c[a]&&(r||(r={}),r[a]=c[a])}else r||(i||(i=[]),i.push(u,r)),r=c;else"dangerouslySetInnerHTML"===u?(c=c?c.__html:void 0,s=s?s.__html:void 0,null!=c&&s!==c&&(i=i||[]).push(u,c)):"children"===u?"string"!==typeof c&&"number"!==typeof c||(i=i||[]).push(u,""+c):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&(l.hasOwnProperty(u)?(null!=c&&"onScroll"===u&&An("scroll",e),i||s===c||(i=[])):(i=i||[]).push(u,c))}r&&(i=i||[]).push("style",r);var u=i;(t.updateQueue=u)&&(t.flags|=4)}},$l=function(e,t,r,n){r!==n&&(t.flags|=4)};var Ql=!1,ql=!1,Yl="function"===typeof WeakSet?WeakSet:Set,Zl=null;function Jl(e,t){var r=e.ref;if(null!==r)if("function"===typeof r)try{r(null)}catch(n){jc(e,t,n)}else r.current=null}function es(e,t,r){try{r()}catch(n){jc(e,t,n)}}var ts=!1;function rs(e,t,r){var n=t.updateQueue;if(null!==(n=null!==n?n.lastEffect:null)){var o=n=n.next;do{if((o.tag&e)===e){var a=o.destroy;o.destroy=void 0,void 0!==a&&es(t,r,a)}o=o.next}while(o!==n)}}function ns(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function os(e){var t=e.ref;if(null!==t){var r=e.stateNode;e.tag,e=r,"function"===typeof t?t(e):t.current=e}}function as(e){var t=e.alternate;null!==t&&(e.alternate=null,as(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[fo],delete t[mo],delete t[go],delete t[vo],delete t[yo])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function is(e){return 5===e.tag||3===e.tag||4===e.tag}function ls(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||is(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ss(e,t,r){var n=e.tag;if(5===n||6===n)e=e.stateNode,t?8===r.nodeType?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(8===r.nodeType?(t=r.parentNode).insertBefore(e,r):(t=r).appendChild(e),null!==(r=r._reactRootContainer)&&void 0!==r||null!==t.onclick||(t.onclick=Jn));else if(4!==n&&null!==(e=e.child))for(ss(e,t,r),e=e.sibling;null!==e;)ss(e,t,r),e=e.sibling}function cs(e,t,r){var n=e.tag;if(5===n||6===n)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(4!==n&&null!==(e=e.child))for(cs(e,t,r),e=e.sibling;null!==e;)cs(e,t,r),e=e.sibling}var us=null,ds=!1;function ps(e,t,r){for(r=r.child;null!==r;)fs(e,t,r),r=r.sibling}function fs(e,t,r){if(at&&"function"===typeof at.onCommitFiberUnmount)try{at.onCommitFiberUnmount(ot,r)}catch(l){}switch(r.tag){case 5:ql||Jl(r,t);case 6:var n=us,o=ds;us=null,ps(e,t,r),ds=o,null!==(us=n)&&(ds?(e=us,r=r.stateNode,8===e.nodeType?e.parentNode.removeChild(r):e.removeChild(r)):us.removeChild(r.stateNode));break;case 18:null!==us&&(ds?(e=us,r=r.stateNode,8===e.nodeType?so(e.parentNode,r):1===e.nodeType&&so(e,r),Bt(e)):so(us,r.stateNode));break;case 4:n=us,o=ds,us=r.stateNode.containerInfo,ds=!0,ps(e,t,r),us=n,ds=o;break;case 0:case 11:case 14:case 15:if(!ql&&(null!==(n=r.updateQueue)&&null!==(n=n.lastEffect))){o=n=n.next;do{var a=o,i=a.destroy;a=a.tag,void 0!==i&&(0!==(2&a)||0!==(4&a))&&es(r,t,i),o=o.next}while(o!==n)}ps(e,t,r);break;case 1:if(!ql&&(Jl(r,t),"function"===typeof(n=r.stateNode).componentWillUnmount))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(l){jc(r,t,l)}ps(e,t,r);break;case 21:ps(e,t,r);break;case 22:1&r.mode?(ql=(n=ql)||null!==r.memoizedState,ps(e,t,r),ql=n):ps(e,t,r);break;default:ps(e,t,r)}}function ms(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var r=e.stateNode;null===r&&(r=e.stateNode=new Yl),t.forEach(function(t){var n=Pc.bind(null,e,t);r.has(t)||(r.add(t),t.then(n,n))})}}function hs(e,t){var r=t.deletions;if(null!==r)for(var n=0;n<r.length;n++){var o=r[n];try{var i=e,l=t,s=l;e:for(;null!==s;){switch(s.tag){case 5:us=s.stateNode,ds=!1;break e;case 3:case 4:us=s.stateNode.containerInfo,ds=!0;break e}s=s.return}if(null===us)throw Error(a(160));fs(i,l,o),us=null,ds=!1;var c=o.alternate;null!==c&&(c.return=null),o.return=null}catch(u){jc(o,t,u)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)gs(t,e),t=t.sibling}function gs(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(hs(t,e),vs(e),4&n){try{rs(3,e,e.return),ns(3,e)}catch(g){jc(e,e.return,g)}try{rs(5,e,e.return)}catch(g){jc(e,e.return,g)}}break;case 1:hs(t,e),vs(e),512&n&&null!==r&&Jl(r,r.return);break;case 5:if(hs(t,e),vs(e),512&n&&null!==r&&Jl(r,r.return),32&e.flags){var o=e.stateNode;try{pe(o,"")}catch(g){jc(e,e.return,g)}}if(4&n&&null!=(o=e.stateNode)){var i=e.memoizedProps,l=null!==r?r.memoizedProps:i,s=e.type,c=e.updateQueue;if(e.updateQueue=null,null!==c)try{"input"===s&&"radio"===i.type&&null!=i.name&&Y(o,i),be(s,l);var u=be(s,i);for(l=0;l<c.length;l+=2){var d=c[l],p=c[l+1];"style"===d?ge(o,p):"dangerouslySetInnerHTML"===d?de(o,p):"children"===d?pe(o,p):b(o,d,p,u)}switch(s){case"input":Z(o,i);break;case"textarea":ae(o,i);break;case"select":var f=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var m=i.value;null!=m?re(o,!!i.multiple,m,!1):f!==!!i.multiple&&(null!=i.defaultValue?re(o,!!i.multiple,i.defaultValue,!0):re(o,!!i.multiple,i.multiple?[]:"",!1))}o[mo]=i}catch(g){jc(e,e.return,g)}}break;case 6:if(hs(t,e),vs(e),4&n){if(null===e.stateNode)throw Error(a(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(g){jc(e,e.return,g)}}break;case 3:if(hs(t,e),vs(e),4&n&&null!==r&&r.memoizedState.isDehydrated)try{Bt(t.containerInfo)}catch(g){jc(e,e.return,g)}break;case 4:default:hs(t,e),vs(e);break;case 13:hs(t,e),vs(e),8192&(o=e.child).flags&&(i=null!==o.memoizedState,o.stateNode.isHidden=i,!i||null!==o.alternate&&null!==o.alternate.memoizedState||(Us=Ye())),4&n&&ms(e);break;case 22:if(d=null!==r&&null!==r.memoizedState,1&e.mode?(ql=(u=ql)||d,hs(t,e),ql=u):hs(t,e),vs(e),8192&n){if(u=null!==e.memoizedState,(e.stateNode.isHidden=u)&&!d&&0!==(1&e.mode))for(Zl=e,d=e.child;null!==d;){for(p=Zl=d;null!==Zl;){switch(m=(f=Zl).child,f.tag){case 0:case 11:case 14:case 15:rs(4,f,f.return);break;case 1:Jl(f,f.return);var h=f.stateNode;if("function"===typeof h.componentWillUnmount){n=f,r=f.return;try{t=n,h.props=t.memoizedProps,h.state=t.memoizedState,h.componentWillUnmount()}catch(g){jc(n,r,g)}}break;case 5:Jl(f,f.return);break;case 22:if(null!==f.memoizedState){ws(p);continue}}null!==m?(m.return=f,Zl=m):ws(p)}d=d.sibling}e:for(d=null,p=e;;){if(5===p.tag){if(null===d){d=p;try{o=p.stateNode,u?"function"===typeof(i=o.style).setProperty?i.setProperty("display","none","important"):i.display="none":(s=p.stateNode,l=void 0!==(c=p.memoizedProps.style)&&null!==c&&c.hasOwnProperty("display")?c.display:null,s.style.display=he("display",l))}catch(g){jc(e,e.return,g)}}}else if(6===p.tag){if(null===d)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(g){jc(e,e.return,g)}}else if((22!==p.tag&&23!==p.tag||null===p.memoizedState||p===e)&&null!==p.child){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;null===p.sibling;){if(null===p.return||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:hs(t,e),vs(e),4&n&&ms(e);case 21:}}function vs(e){var t=e.flags;if(2&t){try{e:{for(var r=e.return;null!==r;){if(is(r)){var n=r;break e}r=r.return}throw Error(a(160))}switch(n.tag){case 5:var o=n.stateNode;32&n.flags&&(pe(o,""),n.flags&=-33),cs(e,ls(e),o);break;case 3:case 4:var i=n.stateNode.containerInfo;ss(e,ls(e),i);break;default:throw Error(a(161))}}catch(l){jc(e,e.return,l)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function ys(e,t,r){Zl=e,bs(e,t,r)}function bs(e,t,r){for(var n=0!==(1&e.mode);null!==Zl;){var o=Zl,a=o.child;if(22===o.tag&&n){var i=null!==o.memoizedState||Ql;if(!i){var l=o.alternate,s=null!==l&&null!==l.memoizedState||ql;l=Ql;var c=ql;if(Ql=i,(ql=s)&&!c)for(Zl=o;null!==Zl;)s=(i=Zl).child,22===i.tag&&null!==i.memoizedState?ks(o):null!==s?(s.return=i,Zl=s):ks(o);for(;null!==a;)Zl=a,bs(a,t,r),a=a.sibling;Zl=o,Ql=l,ql=c}xs(e)}else 0!==(8772&o.subtreeFlags)&&null!==a?(a.return=o,Zl=a):xs(e)}}function xs(e){for(;null!==Zl;){var t=Zl;if(0!==(8772&t.flags)){var r=t.alternate;try{if(0!==(8772&t.flags))switch(t.tag){case 0:case 11:case 15:ql||ns(5,t);break;case 1:var n=t.stateNode;if(4&t.flags&&!ql)if(null===r)n.componentDidMount();else{var o=t.elementType===t.type?r.memoizedProps:rl(t.type,r.memoizedProps);n.componentDidUpdate(o,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;null!==i&&Wa(t,i,n);break;case 3:var l=t.updateQueue;if(null!==l){if(r=null,null!==t.child)switch(t.child.tag){case 5:case 1:r=t.child.stateNode}Wa(t,l,r)}break;case 5:var s=t.stateNode;if(null===r&&4&t.flags){r=s;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var u=t.alternate;if(null!==u){var d=u.memoizedState;if(null!==d){var p=d.dehydrated;null!==p&&Bt(p)}}}break;default:throw Error(a(163))}ql||512&t.flags&&os(t)}catch(f){jc(t,t.return,f)}}if(t===e){Zl=null;break}if(null!==(r=t.sibling)){r.return=t.return,Zl=r;break}Zl=t.return}}function ws(e){for(;null!==Zl;){var t=Zl;if(t===e){Zl=null;break}var r=t.sibling;if(null!==r){r.return=t.return,Zl=r;break}Zl=t.return}}function ks(e){for(;null!==Zl;){var t=Zl;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{ns(4,t)}catch(s){jc(t,r,s)}break;case 1:var n=t.stateNode;if("function"===typeof n.componentDidMount){var o=t.return;try{n.componentDidMount()}catch(s){jc(t,o,s)}}var a=t.return;try{os(t)}catch(s){jc(t,a,s)}break;case 5:var i=t.return;try{os(t)}catch(s){jc(t,i,s)}}}catch(s){jc(t,t.return,s)}if(t===e){Zl=null;break}var l=t.sibling;if(null!==l){l.return=t.return,Zl=l;break}Zl=t.return}}var Ss,js=Math.ceil,Cs=x.ReactCurrentDispatcher,Es=x.ReactCurrentOwner,_s=x.ReactCurrentBatchConfig,Ps=0,Ts=null,Rs=null,zs=0,Os=0,Ns=Co(0),$s=0,Ls=null,Ds=0,Is=0,Fs=0,As=null,Ms=null,Us=0,Bs=1/0,Hs=null,Ws=!1,Vs=null,Gs=null,Ks=!1,Xs=null,Qs=0,qs=0,Ys=null,Zs=-1,Js=0;function ec(){return 0!==(6&Ps)?Ye():-1!==Zs?Zs:Zs=Ye()}function tc(e){return 0===(1&e.mode)?1:0!==(2&Ps)&&0!==zs?zs&-zs:null!==ga.transition?(0===Js&&(Js=ht()),Js):0!==(e=bt)?e:e=void 0===(e=window.event)?16:qt(e.type)}function rc(e,t,r,n){if(50<qs)throw qs=0,Ys=null,Error(a(185));vt(e,r,n),0!==(2&Ps)&&e===Ts||(e===Ts&&(0===(2&Ps)&&(Is|=r),4===$s&&lc(e,zs)),nc(e,n),1===r&&0===Ps&&0===(1&t.mode)&&(Bs=Ye()+500,Mo&&Ho()))}function nc(e,t){var r=e.callbackNode;!function(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,o=e.expirationTimes,a=e.pendingLanes;0<a;){var i=31-it(a),l=1<<i,s=o[i];-1===s?0!==(l&r)&&0===(l&n)||(o[i]=ft(l,t)):s<=t&&(e.expiredLanes|=l),a&=~l}}(e,t);var n=pt(e,e===Ts?zs:0);if(0===n)null!==r&&Xe(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(null!=r&&Xe(r),1===t)0===e.tag?function(e){Mo=!0,Bo(e)}(sc.bind(null,e)):Bo(sc.bind(null,e)),io(function(){0===(6&Ps)&&Ho()}),r=null;else{switch(xt(n)){case 1:r=Je;break;case 4:r=et;break;case 16:default:r=tt;break;case 536870912:r=nt}r=Tc(r,oc.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function oc(e,t){if(Zs=-1,Js=0,0!==(6&Ps))throw Error(a(327));var r=e.callbackNode;if(kc()&&e.callbackNode!==r)return null;var n=pt(e,e===Ts?zs:0);if(0===n)return null;if(0!==(30&n)||0!==(n&e.expiredLanes)||t)t=gc(e,n);else{t=n;var o=Ps;Ps|=2;var i=mc();for(Ts===e&&zs===t||(Hs=null,Bs=Ye()+500,pc(e,t));;)try{yc();break}catch(s){fc(e,s)}_a(),Cs.current=i,Ps=o,null!==Rs?t=0:(Ts=null,zs=0,t=$s)}if(0!==t){if(2===t&&(0!==(o=mt(e))&&(n=o,t=ac(e,o))),1===t)throw r=Ls,pc(e,0),lc(e,n),nc(e,Ye()),r;if(6===t)lc(e,n);else{if(o=e.current.alternate,0===(30&n)&&!function(e){for(var t=e;;){if(16384&t.flags){var r=t.updateQueue;if(null!==r&&null!==(r=r.stores))for(var n=0;n<r.length;n++){var o=r[n],a=o.getSnapshot;o=o.value;try{if(!ln(a(),o))return!1}catch(l){return!1}}}if(r=t.child,16384&t.subtreeFlags&&null!==r)r.return=t,t=r;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(o)&&(2===(t=gc(e,n))&&(0!==(i=mt(e))&&(n=i,t=ac(e,i))),1===t))throw r=Ls,pc(e,0),lc(e,n),nc(e,Ye()),r;switch(e.finishedWork=o,e.finishedLanes=n,t){case 0:case 1:throw Error(a(345));case 2:case 5:wc(e,Ms,Hs);break;case 3:if(lc(e,n),(130023424&n)===n&&10<(t=Us+500-Ye())){if(0!==pt(e,0))break;if(((o=e.suspendedLanes)&n)!==n){ec(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=no(wc.bind(null,e,Ms,Hs),t);break}wc(e,Ms,Hs);break;case 4:if(lc(e,n),(4194240&n)===n)break;for(t=e.eventTimes,o=-1;0<n;){var l=31-it(n);i=1<<l,(l=t[l])>o&&(o=l),n&=~i}if(n=o,10<(n=(120>(n=Ye()-n)?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*js(n/1960))-n)){e.timeoutHandle=no(wc.bind(null,e,Ms,Hs),n);break}wc(e,Ms,Hs);break;default:throw Error(a(329))}}}return nc(e,Ye()),e.callbackNode===r?oc.bind(null,e):null}function ac(e,t){var r=As;return e.current.memoizedState.isDehydrated&&(pc(e,t).flags|=256),2!==(e=gc(e,t))&&(t=Ms,Ms=r,null!==t&&ic(t)),e}function ic(e){null===Ms?Ms=e:Ms.push.apply(Ms,e)}function lc(e,t){for(t&=~Fs,t&=~Is,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-it(t),n=1<<r;e[r]=-1,t&=~n}}function sc(e){if(0!==(6&Ps))throw Error(a(327));kc();var t=pt(e,0);if(0===(1&t))return nc(e,Ye()),null;var r=gc(e,t);if(0!==e.tag&&2===r){var n=mt(e);0!==n&&(t=n,r=ac(e,n))}if(1===r)throw r=Ls,pc(e,0),lc(e,t),nc(e,Ye()),r;if(6===r)throw Error(a(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wc(e,Ms,Hs),nc(e,Ye()),null}function cc(e,t){var r=Ps;Ps|=1;try{return e(t)}finally{0===(Ps=r)&&(Bs=Ye()+500,Mo&&Ho())}}function uc(e){null!==Xs&&0===Xs.tag&&0===(6&Ps)&&kc();var t=Ps;Ps|=1;var r=_s.transition,n=bt;try{if(_s.transition=null,bt=1,e)return e()}finally{bt=n,_s.transition=r,0===(6&(Ps=t))&&Ho()}}function dc(){Os=Ns.current,Eo(Ns)}function pc(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(-1!==r&&(e.timeoutHandle=-1,oo(r)),null!==Rs)for(r=Rs.return;null!==r;){var n=r;switch(ra(n),n.tag){case 1:null!==(n=n.type.childContextTypes)&&void 0!==n&&$o();break;case 3:Ya(),Eo(Ro),Eo(To),ni();break;case 5:Ja(n);break;case 4:Ya();break;case 13:case 19:Eo(ei);break;case 10:Pa(n.type._context);break;case 22:case 23:dc()}r=r.return}if(Ts=e,Rs=e=Nc(e.current,null),zs=Os=t,$s=0,Ls=null,Fs=Is=Ds=0,Ms=As=null,null!==Oa){for(t=0;t<Oa.length;t++)if(null!==(n=(r=Oa[t]).interleaved)){r.interleaved=null;var o=n.next,a=r.pending;if(null!==a){var i=a.next;a.next=o,n.next=i}r.pending=n}Oa=null}return e}function fc(e,t){for(;;){var r=Rs;try{if(_a(),oi.current=Zi,ui){for(var n=li.memoizedState;null!==n;){var o=n.queue;null!==o&&(o.pending=null),n=n.next}ui=!1}if(ii=0,ci=si=li=null,di=!1,pi=0,Es.current=null,null===r||null===r.return){$s=1,Ls=t,Rs=null;break}e:{var i=e,l=r.return,s=r,c=t;if(t=zs,s.flags|=32768,null!==c&&"object"===typeof c&&"function"===typeof c.then){var u=c,d=s,p=d.tag;if(0===(1&d.mode)&&(0===p||11===p||15===p)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=gl(l);if(null!==m){m.flags&=-257,vl(m,l,s,0,t),1&m.mode&&hl(i,u,t),c=u;var h=(t=m).updateQueue;if(null===h){var g=new Set;g.add(c),t.updateQueue=g}else h.add(c);break e}if(0===(1&t)){hl(i,u,t),hc();break e}c=Error(a(426))}else if(aa&&1&s.mode){var v=gl(l);if(null!==v){0===(65536&v.flags)&&(v.flags|=256),vl(v,l,s,0,t),ha(cl(c,s));break e}}i=c=cl(c,s),4!==$s&&($s=2),null===As?As=[i]:As.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t,Ba(i,fl(0,c,t));break e;case 1:s=c;var y=i.type,b=i.stateNode;if(0===(128&i.flags)&&("function"===typeof y.getDerivedStateFromError||null!==b&&"function"===typeof b.componentDidCatch&&(null===Gs||!Gs.has(b)))){i.flags|=65536,t&=-t,i.lanes|=t,Ba(i,ml(i,s,t));break e}}i=i.return}while(null!==i)}xc(r)}catch(x){t=x,Rs===r&&null!==r&&(Rs=r=r.return);continue}break}}function mc(){var e=Cs.current;return Cs.current=Zi,null===e?Zi:e}function hc(){0!==$s&&3!==$s&&2!==$s||($s=4),null===Ts||0===(268435455&Ds)&&0===(268435455&Is)||lc(Ts,zs)}function gc(e,t){var r=Ps;Ps|=2;var n=mc();for(Ts===e&&zs===t||(Hs=null,pc(e,t));;)try{vc();break}catch(o){fc(e,o)}if(_a(),Ps=r,Cs.current=n,null!==Rs)throw Error(a(261));return Ts=null,zs=0,$s}function vc(){for(;null!==Rs;)bc(Rs)}function yc(){for(;null!==Rs&&!Qe();)bc(Rs)}function bc(e){var t=Ss(e.alternate,e,Os);e.memoizedProps=e.pendingProps,null===t?xc(e):Rs=t,Es.current=null}function xc(e){var t=e;do{var r=t.alternate;if(e=t.return,0===(32768&t.flags)){if(null!==(r=Kl(r,t,Os)))return void(Rs=r)}else{if(null!==(r=Xl(r,t)))return r.flags&=32767,void(Rs=r);if(null===e)return $s=6,void(Rs=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(Rs=t);Rs=t=e}while(null!==t);0===$s&&($s=5)}function wc(e,t,r){var n=bt,o=_s.transition;try{_s.transition=null,bt=1,function(e,t,r,n){do{kc()}while(null!==Xs);if(0!==(6&Ps))throw Error(a(327));r=e.finishedWork;var o=e.finishedLanes;if(null===r)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(a(177));e.callbackNode=null,e.callbackPriority=0;var i=r.lanes|r.childLanes;if(function(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var o=31-it(r),a=1<<o;t[o]=0,n[o]=-1,e[o]=-1,r&=~a}}(e,i),e===Ts&&(Rs=Ts=null,zs=0),0===(2064&r.subtreeFlags)&&0===(2064&r.flags)||Ks||(Ks=!0,Tc(tt,function(){return kc(),null})),i=0!==(15990&r.flags),0!==(15990&r.subtreeFlags)||i){i=_s.transition,_s.transition=null;var l=bt;bt=1;var s=Ps;Ps|=4,Es.current=null,function(e,t){if(eo=Wt,fn(e=pn())){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{var n=(r=(r=e.ownerDocument)&&r.defaultView||window).getSelection&&r.getSelection();if(n&&0!==n.rangeCount){r=n.anchorNode;var o=n.anchorOffset,i=n.focusNode;n=n.focusOffset;try{r.nodeType,i.nodeType}catch(w){r=null;break e}var l=0,s=-1,c=-1,u=0,d=0,p=e,f=null;t:for(;;){for(var m;p!==r||0!==o&&3!==p.nodeType||(s=l+o),p!==i||0!==n&&3!==p.nodeType||(c=l+n),3===p.nodeType&&(l+=p.nodeValue.length),null!==(m=p.firstChild);)f=p,p=m;for(;;){if(p===e)break t;if(f===r&&++u===o&&(s=l),f===i&&++d===n&&(c=l),null!==(m=p.nextSibling))break;f=(p=f).parentNode}p=m}r=-1===s||-1===c?null:{start:s,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(to={focusedElem:e,selectionRange:r},Wt=!1,Zl=t;null!==Zl;)if(e=(t=Zl).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,Zl=e;else for(;null!==Zl;){t=Zl;try{var h=t.alternate;if(0!==(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==h){var g=h.memoizedProps,v=h.memoizedState,y=t.stateNode,b=y.getSnapshotBeforeUpdate(t.elementType===t.type?g:rl(t.type,g),v);y.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var x=t.stateNode.containerInfo;1===x.nodeType?x.textContent="":9===x.nodeType&&x.documentElement&&x.removeChild(x.documentElement);break;default:throw Error(a(163))}}catch(w){jc(t,t.return,w)}if(null!==(e=t.sibling)){e.return=t.return,Zl=e;break}Zl=t.return}h=ts,ts=!1}(e,r),gs(r,e),mn(to),Wt=!!eo,to=eo=null,e.current=r,ys(r,e,o),qe(),Ps=s,bt=l,_s.transition=i}else e.current=r;if(Ks&&(Ks=!1,Xs=e,Qs=o),i=e.pendingLanes,0===i&&(Gs=null),function(e){if(at&&"function"===typeof at.onCommitFiberRoot)try{at.onCommitFiberRoot(ot,e,void 0,128===(128&e.current.flags))}catch(t){}}(r.stateNode),nc(e,Ye()),null!==t)for(n=e.onRecoverableError,r=0;r<t.length;r++)o=t[r],n(o.value,{componentStack:o.stack,digest:o.digest});if(Ws)throw Ws=!1,e=Vs,Vs=null,e;0!==(1&Qs)&&0!==e.tag&&kc(),i=e.pendingLanes,0!==(1&i)?e===Ys?qs++:(qs=0,Ys=e):qs=0,Ho()}(e,t,r,n)}finally{_s.transition=o,bt=n}return null}function kc(){if(null!==Xs){var e=xt(Qs),t=_s.transition,r=bt;try{if(_s.transition=null,bt=16>e?16:e,null===Xs)var n=!1;else{if(e=Xs,Xs=null,Qs=0,0!==(6&Ps))throw Error(a(331));var o=Ps;for(Ps|=4,Zl=e.current;null!==Zl;){var i=Zl,l=i.child;if(0!==(16&Zl.flags)){var s=i.deletions;if(null!==s){for(var c=0;c<s.length;c++){var u=s[c];for(Zl=u;null!==Zl;){var d=Zl;switch(d.tag){case 0:case 11:case 15:rs(8,d,i)}var p=d.child;if(null!==p)p.return=d,Zl=p;else for(;null!==Zl;){var f=(d=Zl).sibling,m=d.return;if(as(d),d===u){Zl=null;break}if(null!==f){f.return=m,Zl=f;break}Zl=m}}}var h=i.alternate;if(null!==h){var g=h.child;if(null!==g){h.child=null;do{var v=g.sibling;g.sibling=null,g=v}while(null!==g)}}Zl=i}}if(0!==(2064&i.subtreeFlags)&&null!==l)l.return=i,Zl=l;else e:for(;null!==Zl;){if(0!==(2048&(i=Zl).flags))switch(i.tag){case 0:case 11:case 15:rs(9,i,i.return)}var y=i.sibling;if(null!==y){y.return=i.return,Zl=y;break e}Zl=i.return}}var b=e.current;for(Zl=b;null!==Zl;){var x=(l=Zl).child;if(0!==(2064&l.subtreeFlags)&&null!==x)x.return=l,Zl=x;else e:for(l=b;null!==Zl;){if(0!==(2048&(s=Zl).flags))try{switch(s.tag){case 0:case 11:case 15:ns(9,s)}}catch(k){jc(s,s.return,k)}if(s===l){Zl=null;break e}var w=s.sibling;if(null!==w){w.return=s.return,Zl=w;break e}Zl=s.return}}if(Ps=o,Ho(),at&&"function"===typeof at.onPostCommitFiberRoot)try{at.onPostCommitFiberRoot(ot,e)}catch(k){}n=!0}return n}finally{bt=r,_s.transition=t}}return!1}function Sc(e,t,r){e=Ma(e,t=fl(0,t=cl(r,t),1),1),t=ec(),null!==e&&(vt(e,1,t),nc(e,t))}function jc(e,t,r){if(3===e.tag)Sc(e,e,r);else for(;null!==t;){if(3===t.tag){Sc(t,e,r);break}if(1===t.tag){var n=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof n.componentDidCatch&&(null===Gs||!Gs.has(n))){t=Ma(t,e=ml(t,e=cl(r,e),1),1),e=ec(),null!==t&&(vt(t,1,e),nc(t,e));break}}t=t.return}}function Cc(e,t,r){var n=e.pingCache;null!==n&&n.delete(t),t=ec(),e.pingedLanes|=e.suspendedLanes&r,Ts===e&&(zs&r)===r&&(4===$s||3===$s&&(130023424&zs)===zs&&500>Ye()-Us?pc(e,0):Fs|=r),nc(e,t)}function Ec(e,t){0===t&&(0===(1&e.mode)?t=1:(t=ut,0===(130023424&(ut<<=1))&&(ut=4194304)));var r=ec();null!==(e=La(e,t))&&(vt(e,t,r),nc(e,r))}function _c(e){var t=e.memoizedState,r=0;null!==t&&(r=t.retryLane),Ec(e,r)}function Pc(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,o=e.memoizedState;null!==o&&(r=o.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(a(314))}null!==n&&n.delete(t),Ec(e,r)}function Tc(e,t){return Ke(e,t)}function Rc(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zc(e,t,r,n){return new Rc(e,t,r,n)}function Oc(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Nc(e,t){var r=e.alternate;return null===r?((r=zc(e.tag,t,e.key,e.mode)).elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=14680064&e.flags,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function $c(e,t,r,n,o,i){var l=2;if(n=e,"function"===typeof e)Oc(e)&&(l=1);else if("string"===typeof e)l=5;else e:switch(e){case S:return Lc(r.children,o,i,t);case j:l=8,o|=8;break;case C:return(e=zc(12,r,t,2|o)).elementType=C,e.lanes=i,e;case T:return(e=zc(13,r,t,o)).elementType=T,e.lanes=i,e;case R:return(e=zc(19,r,t,o)).elementType=R,e.lanes=i,e;case N:return Dc(r,o,i,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case E:l=10;break e;case _:l=9;break e;case P:l=11;break e;case z:l=14;break e;case O:l=16,n=null;break e}throw Error(a(130,null==e?e:typeof e,""))}return(t=zc(l,r,t,o)).elementType=e,t.type=n,t.lanes=i,t}function Lc(e,t,r,n){return(e=zc(7,e,n,t)).lanes=r,e}function Dc(e,t,r,n){return(e=zc(22,e,n,t)).elementType=N,e.lanes=r,e.stateNode={isHidden:!1},e}function Ic(e,t,r){return(e=zc(6,e,null,t)).lanes=r,e}function Fc(e,t,r){return(t=zc(4,null!==e.children?e.children:[],e.key,t)).lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ac(e,t,r,n,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gt(0),this.expirationTimes=gt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gt(0),this.identifierPrefix=n,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Mc(e,t,r,n,o,a,i,l,s){return e=new Ac(e,t,r,l,s),1===t?(t=1,!0===a&&(t|=8)):t=0,a=zc(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ia(a),e}function Uc(e){if(!e)return Po;e:{if(Be(e=e._reactInternals)!==e||1!==e.tag)throw Error(a(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(No(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(a(171))}if(1===e.tag){var r=e.type;if(No(r))return Do(e,r,t)}return t}function Bc(e,t,r,n,o,a,i,l,s){return(e=Mc(r,n,!0,e,0,a,0,l,s)).context=Uc(null),r=e.current,(a=Aa(n=ec(),o=tc(r))).callback=void 0!==t&&null!==t?t:null,Ma(r,a,o),e.current.lanes=o,vt(e,o,n),nc(e,n),e}function Hc(e,t,r,n){var o=t.current,a=ec(),i=tc(o);return r=Uc(r),null===t.context?t.context=r:t.pendingContext=r,(t=Aa(a,i)).payload={element:e},null!==(n=void 0===n?null:n)&&(t.callback=n),null!==(e=Ma(o,t,i))&&(rc(e,o,i,a),Ua(e,o,i)),i}function Wc(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Vc(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var r=e.retryLane;e.retryLane=0!==r&&r<t?r:t}}function Gc(e,t){Vc(e,t),(e=e.alternate)&&Vc(e,t)}Ss=function(e,t,r){if(null!==e)if(e.memoizedProps!==t.pendingProps||Ro.current)bl=!0;else{if(0===(e.lanes&r)&&0===(128&t.flags))return bl=!1,function(e,t,r){switch(t.tag){case 3:Tl(t),ma();break;case 5:Za(t);break;case 1:No(t.type)&&Io(t);break;case 4:qa(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,o=t.memoizedProps.value;_o(Sa,n._currentValue),n._currentValue=o;break;case 13:if(null!==(n=t.memoizedState))return null!==n.dehydrated?(_o(ei,1&ei.current),t.flags|=128,null):0!==(r&t.child.childLanes)?Il(e,t,r):(_o(ei,1&ei.current),null!==(e=Wl(e,t,r))?e.sibling:null);_o(ei,1&ei.current);break;case 19:if(n=0!==(r&t.childLanes),0!==(128&e.flags)){if(n)return Bl(e,t,r);t.flags|=128}if(null!==(o=t.memoizedState)&&(o.rendering=null,o.tail=null,o.lastEffect=null),_o(ei,ei.current),n)break;return null;case 22:case 23:return t.lanes=0,jl(e,t,r)}return Wl(e,t,r)}(e,t,r);bl=0!==(131072&e.flags)}else bl=!1,aa&&0!==(1048576&t.flags)&&ea(t,Ko,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;Hl(e,t),e=t.pendingProps;var o=Oo(t,To.current);Ra(t,r),o=gi(null,t,n,e,o,r);var i=vi();return t.flags|=1,"object"===typeof o&&null!==o&&"function"===typeof o.render&&void 0===o.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,No(n)?(i=!0,Io(t)):i=!1,t.memoizedState=null!==o.state&&void 0!==o.state?o.state:null,Ia(t),o.updater=ol,t.stateNode=o,o._reactInternals=t,sl(t,n,e,r),t=Pl(null,t,n,!0,i,r)):(t.tag=0,aa&&i&&ta(t),xl(null,t,o,r),t=t.child),t;case 16:n=t.elementType;e:{switch(Hl(e,t),e=t.pendingProps,n=(o=n._init)(n._payload),t.type=n,o=t.tag=function(e){if("function"===typeof e)return Oc(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===P)return 11;if(e===z)return 14}return 2}(n),e=rl(n,e),o){case 0:t=El(null,t,n,e,r);break e;case 1:t=_l(null,t,n,e,r);break e;case 11:t=wl(null,t,n,e,r);break e;case 14:t=kl(null,t,n,rl(n.type,e),r);break e}throw Error(a(306,n,""))}return t;case 0:return n=t.type,o=t.pendingProps,El(e,t,n,o=t.elementType===n?o:rl(n,o),r);case 1:return n=t.type,o=t.pendingProps,_l(e,t,n,o=t.elementType===n?o:rl(n,o),r);case 3:e:{if(Tl(t),null===e)throw Error(a(387));n=t.pendingProps,o=(i=t.memoizedState).element,Fa(e,t),Ha(t,n,null,r);var l=t.memoizedState;if(n=l.element,i.isDehydrated){if(i={element:n,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,256&t.flags){t=Rl(e,t,n,r,o=cl(Error(a(423)),t));break e}if(n!==o){t=Rl(e,t,n,r,o=cl(Error(a(424)),t));break e}for(oa=co(t.stateNode.containerInfo.firstChild),na=t,aa=!0,ia=null,r=ka(t,null,n,r),t.child=r;r;)r.flags=-3&r.flags|4096,r=r.sibling}else{if(ma(),n===o){t=Wl(e,t,r);break e}xl(e,t,n,r)}t=t.child}return t;case 5:return Za(t),null===e&&ua(t),n=t.type,o=t.pendingProps,i=null!==e?e.memoizedProps:null,l=o.children,ro(n,o)?l=null:null!==i&&ro(n,i)&&(t.flags|=32),Cl(e,t),xl(e,t,l,r),t.child;case 6:return null===e&&ua(t),null;case 13:return Il(e,t,r);case 4:return qa(t,t.stateNode.containerInfo),n=t.pendingProps,null===e?t.child=wa(t,null,n,r):xl(e,t,n,r),t.child;case 11:return n=t.type,o=t.pendingProps,wl(e,t,n,o=t.elementType===n?o:rl(n,o),r);case 7:return xl(e,t,t.pendingProps,r),t.child;case 8:case 12:return xl(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,_o(Sa,n._currentValue),n._currentValue=l,null!==i)if(ln(i.value,l)){if(i.children===o.children&&!Ro.current){t=Wl(e,t,r);break e}}else for(null!==(i=t.child)&&(i.return=t);null!==i;){var s=i.dependencies;if(null!==s){l=i.child;for(var c=s.firstContext;null!==c;){if(c.context===n){if(1===i.tag){(c=Aa(-1,r&-r)).tag=2;var u=i.updateQueue;if(null!==u){var d=(u=u.shared).pending;null===d?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}i.lanes|=r,null!==(c=i.alternate)&&(c.lanes|=r),Ta(i.return,r,t),s.lanes|=r;break}c=c.next}}else if(10===i.tag)l=i.type===t.type?null:i.child;else if(18===i.tag){if(null===(l=i.return))throw Error(a(341));l.lanes|=r,null!==(s=l.alternate)&&(s.lanes|=r),Ta(l,r,t),l=i.sibling}else l=i.child;if(null!==l)l.return=i;else for(l=i;null!==l;){if(l===t){l=null;break}if(null!==(i=l.sibling)){i.return=l.return,l=i;break}l=l.return}i=l}xl(e,t,o.children,r),t=t.child}return t;case 9:return o=t.type,n=t.pendingProps.children,Ra(t,r),n=n(o=za(o)),t.flags|=1,xl(e,t,n,r),t.child;case 14:return o=rl(n=t.type,t.pendingProps),kl(e,t,n,o=rl(n.type,o),r);case 15:return Sl(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:rl(n,o),Hl(e,t),t.tag=1,No(n)?(e=!0,Io(t)):e=!1,Ra(t,r),il(t,n,o),sl(t,n,o,r),Pl(null,t,n,!0,e,r);case 19:return Bl(e,t,r);case 22:return jl(e,t,r)}throw Error(a(156,t.tag))};var Kc="function"===typeof reportError?reportError:function(e){console.error(e)};function Xc(e){this._internalRoot=e}function Qc(e){this._internalRoot=e}function qc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Yc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Zc(){}function Jc(e,t,r,n,o){var a=r._reactRootContainer;if(a){var i=a;if("function"===typeof o){var l=o;o=function(){var e=Wc(i);l.call(e)}}Hc(t,i,e,o)}else i=function(e,t,r,n,o){if(o){if("function"===typeof n){var a=n;n=function(){var e=Wc(i);a.call(e)}}var i=Bc(t,n,e,0,null,!1,0,"",Zc);return e._reactRootContainer=i,e[ho]=i.current,Bn(8===e.nodeType?e.parentNode:e),uc(),i}for(;o=e.lastChild;)e.removeChild(o);if("function"===typeof n){var l=n;n=function(){var e=Wc(s);l.call(e)}}var s=Mc(e,0,!1,null,0,!1,0,"",Zc);return e._reactRootContainer=s,e[ho]=s.current,Bn(8===e.nodeType?e.parentNode:e),uc(function(){Hc(t,s,r,n)}),s}(r,t,e,o,n);return Wc(i)}Qc.prototype.render=Xc.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(a(409));Hc(e,t,null,null)},Qc.prototype.unmount=Xc.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;uc(function(){Hc(null,e,null,null)}),t[ho]=null}},Qc.prototype.unstable_scheduleHydration=function(e){if(e){var t=jt();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Nt.length&&0!==t&&t<Nt[r].priority;r++);Nt.splice(r,0,e),0===r&&It(e)}},wt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=dt(t.pendingLanes);0!==r&&(yt(t,1|r),nc(t,Ye()),0===(6&Ps)&&(Bs=Ye()+500,Ho()))}break;case 13:uc(function(){var t=La(e,1);if(null!==t){var r=ec();rc(t,e,1,r)}}),Gc(e,1)}},kt=function(e){if(13===e.tag){var t=La(e,134217728);if(null!==t)rc(t,e,134217728,ec());Gc(e,134217728)}},St=function(e){if(13===e.tag){var t=tc(e),r=La(e,t);if(null!==r)rc(r,e,t,ec());Gc(e,t)}},jt=function(){return bt},Ct=function(e,t){var r=bt;try{return bt=e,t()}finally{bt=r}},ke=function(e,t,r){switch(t){case"input":if(Z(e,r),t=r.name,"radio"===r.type&&null!=t){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var o=ko(n);if(!o)throw Error(a(90));K(n),Z(n,o)}}}break;case"textarea":ae(e,r);break;case"select":null!=(t=r.value)&&re(e,!!r.multiple,t,!1)}},Pe=cc,Te=uc;var eu={usingClientEntryPoint:!1,Events:[xo,wo,ko,Ee,_e,cc]},tu={findFiberByHostInstance:bo,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ru={bundleType:tu.bundleType,version:tu.version,rendererPackageName:tu.rendererPackageName,rendererConfig:tu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:x.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=Ve(e))?null:e.stateNode},findFiberByHostInstance:tu.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var nu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nu.isDisabled&&nu.supportsFiber)try{ot=nu.inject(ru),at=nu}catch(ue){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eu,t.createPortal=function(e,t){var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!qc(t))throw Error(a(200));return function(e,t,r){var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:k,key:null==n?null:""+n,children:e,containerInfo:t,implementation:r}}(e,t,null,r)},t.createRoot=function(e,t){if(!qc(e))throw Error(a(299));var r=!1,n="",o=Kc;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(r=!0),void 0!==t.identifierPrefix&&(n=t.identifierPrefix),void 0!==t.onRecoverableError&&(o=t.onRecoverableError)),t=Mc(e,1,!1,null,0,r,0,n,o),e[ho]=t.current,Bn(8===e.nodeType?e.parentNode:e),new Xc(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(a(188));throw e=Object.keys(e).join(","),Error(a(268,e))}return e=null===(e=Ve(t))?null:e.stateNode},t.flushSync=function(e){return uc(e)},t.hydrate=function(e,t,r){if(!Yc(t))throw Error(a(200));return Jc(null,e,t,!0,r)},t.hydrateRoot=function(e,t,r){if(!qc(e))throw Error(a(405));var n=null!=r&&r.hydratedSources||null,o=!1,i="",l=Kc;if(null!==r&&void 0!==r&&(!0===r.unstable_strictMode&&(o=!0),void 0!==r.identifierPrefix&&(i=r.identifierPrefix),void 0!==r.onRecoverableError&&(l=r.onRecoverableError)),t=Bc(t,null,e,1,null!=r?r:null,o,0,i,l),e[ho]=t.current,Bn(e),n)for(e=0;e<n.length;e++)o=(o=(r=n[e])._getVersion)(r._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[r,o]:t.mutableSourceEagerHydrationData.push(r,o);return new Qc(t)},t.render=function(e,t,r){if(!Yc(t))throw Error(a(200));return Jc(null,e,t,!1,r)},t.unmountComponentAtNode=function(e){if(!Yc(e))throw Error(a(40));return!!e._reactRootContainer&&(uc(function(){Jc(null,null,e,!1,function(){e._reactRootContainer=null,e[ho]=null})}),!0)},t.unstable_batchedUpdates=cc,t.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!Yc(r))throw Error(a(200));if(null==e||void 0===e._reactInternals)throw Error(a(38));return Jc(e,t,r,!1,n)},t.version="18.3.1-next-f1338f8080-20240426"},853:(e,t,r)=>{"use strict";e.exports=r(234)},950:(e,t,r)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=r(730)}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.m=e,r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;r.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"===typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"===typeof n.then)return n}var a=Object.create(null);r.r(a);var i={};e=e||[null,t({}),t([]),t(t)];for(var l=2&o&&n;("object"==typeof l||"function"==typeof l)&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach(e=>i[e]=()=>n[e]);return i.default=()=>n,r.d(a,i),a}})(),r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce((t,n)=>(r.f[n](e,t),t),[])),r.u=e=>"static/js/"+e+".baf6ec1d.chunk.js",r.miniCssF=e=>{},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={},t="gaming-ecommerce-site:";r.l=(n,o,a,i)=>{if(e[n])e[n].push(o);else{var l,s;if(void 0!==a)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+a){l=d;break}}l||(s=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.setAttribute("data-webpack",t+a),l.src=n),e[n]=[o];var p=(t,r)=>{l.onerror=l.onload=null,clearTimeout(f);var o=e[n];if(delete e[n],l.parentNode&&l.parentNode.removeChild(l),o&&o.forEach(e=>e(r)),t)return t(r)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),s&&document.head.appendChild(l)}}})(),r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="/Game-shop/",(()=>{var e={792:0};r.f.j=(t,n)=>{var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var a=new Promise((r,n)=>o=e[t]=[r,n]);n.push(o[2]=a);var i=r.p+r.u(t),l=new Error;r.l(i,n=>{if(r.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,o[1](l)}},"chunk-"+t,t)}};var t=(t,n)=>{var o,a,i=n[0],l=n[1],s=n[2],c=0;if(i.some(t=>0!==e[t])){for(o in l)r.o(l,o)&&(r.m[o]=l[o]);if(s)s(r)}for(t&&t(n);c<i.length;c++)a=i[c],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0},n=self.webpackChunkgaming_ecommerce_site=self.webpackChunkgaming_ecommerce_site||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),r.nc=void 0,(()=>{"use strict";var e,t=r(43),n=r.t(t,2),o=r(391),a=r(950),i=r.t(a,2);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(e||(e={}));const s="popstate";function c(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function u(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(r){}}}function d(e,t){return{usr:e.state,key:e.key,idx:t}}function p(e,t,r,n){return void 0===r&&(r=null),l({pathname:"string"===typeof e?e:e.pathname,search:"",hash:""},"string"===typeof t?m(t):t,{state:r,key:t&&t.key||n||Math.random().toString(36).substr(2,8)})}function f(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&"?"!==r&&(t+="?"===r.charAt(0)?r:"?"+r),n&&"#"!==n&&(t+="#"===n.charAt(0)?n:"#"+n),t}function m(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function h(t,r,n,o){void 0===o&&(o={});let{window:a=document.defaultView,v5Compat:i=!1}=o,u=a.history,m=e.Pop,h=null,g=v();function v(){return(u.state||{idx:null}).idx}function y(){m=e.Pop;let t=v(),r=null==t?null:t-g;g=t,h&&h({action:m,location:x.location,delta:r})}function b(e){let t="null"!==a.location.origin?a.location.origin:a.location.href,r="string"===typeof e?e:f(e);return r=r.replace(/ $/,"%20"),c(t,"No window.location.(origin|href) available to create URL for href: "+r),new URL(r,t)}null==g&&(g=0,u.replaceState(l({},u.state,{idx:g}),""));let x={get action(){return m},get location(){return t(a,u)},listen(e){if(h)throw new Error("A history only accepts one active listener");return a.addEventListener(s,y),h=e,()=>{a.removeEventListener(s,y),h=null}},createHref:e=>r(a,e),createURL:b,encodeLocation(e){let t=b(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(t,r){m=e.Push;let o=p(x.location,t,r);n&&n(o,t),g=v()+1;let l=d(o,g),s=x.createHref(o);try{u.pushState(l,"",s)}catch(c){if(c instanceof DOMException&&"DataCloneError"===c.name)throw c;a.location.assign(s)}i&&h&&h({action:m,location:x.location,delta:1})},replace:function(t,r){m=e.Replace;let o=p(x.location,t,r);n&&n(o,t),g=v();let a=d(o,g),l=x.createHref(o);u.replaceState(a,"",l),i&&h&&h({action:m,location:x.location,delta:0})},go:e=>u.go(e)};return x}var g;!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(g||(g={}));new Set(["lazy","caseSensitive","path","id","index","children"]);function v(e,t,r){return void 0===r&&(r="/"),y(e,t,r,!1)}function y(e,t,r,n){let o=O(("string"===typeof t?m(t):t).pathname||"/",r);if(null==o)return null;let a=b(e);!function(e){e.sort((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let r=e.length===t.length&&e.slice(0,-1).every((e,r)=>e===t[r]);return r?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)))}(a);let i=null;for(let l=0;null==i&&l<a.length;++l){let e=z(o);i=T(a[l],e,n)}return i}function b(e,t,r,n){void 0===t&&(t=[]),void 0===r&&(r=[]),void 0===n&&(n="");let o=(e,o,a)=>{let i={relativePath:void 0===a?e.path||"":a,caseSensitive:!0===e.caseSensitive,childrenIndex:o,route:e};i.relativePath.startsWith("/")&&(c(i.relativePath.startsWith(n),'Absolute route path "'+i.relativePath+'" nested under path "'+n+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),i.relativePath=i.relativePath.slice(n.length));let l=I([n,i.relativePath]),s=r.concat(i);e.children&&e.children.length>0&&(c(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+l+'".'),b(e.children,t,s,l)),(null!=e.path||e.index)&&t.push({path:l,score:P(l,e.index),routesMeta:s})};return e.forEach((e,t)=>{var r;if(""!==e.path&&null!=(r=e.path)&&r.includes("?"))for(let n of x(e.path))o(e,t,n);else o(e,t)}),t}function x(e){let t=e.split("/");if(0===t.length)return[];let[r,...n]=t,o=r.endsWith("?"),a=r.replace(/\?$/,"");if(0===n.length)return o?[a,""]:[a];let i=x(n.join("/")),l=[];return l.push(...i.map(e=>""===e?a:[a,e].join("/"))),o&&l.push(...i),l.map(t=>e.startsWith("/")&&""===t?"/":t)}const w=/^:[\w-]+$/,k=3,S=2,j=1,C=10,E=-2,_=e=>"*"===e;function P(e,t){let r=e.split("/"),n=r.length;return r.some(_)&&(n+=E),t&&(n+=S),r.filter(e=>!_(e)).reduce((e,t)=>e+(w.test(t)?k:""===t?j:C),n)}function T(e,t,r){void 0===r&&(r=!1);let{routesMeta:n}=e,o={},a="/",i=[];for(let l=0;l<n.length;++l){let e=n[l],s=l===n.length-1,c="/"===a?t:t.slice(a.length)||"/",u=R({path:e.relativePath,caseSensitive:e.caseSensitive,end:s},c),d=e.route;if(!u&&s&&r&&!n[n.length-1].route.index&&(u=R({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},c)),!u)return null;Object.assign(o,u.params),i.push({params:o,pathname:I([a,u.pathname]),pathnameBase:F(I([a,u.pathnameBase])),route:d}),"/"!==u.pathnameBase&&(a=I([a,u.pathnameBase]))}return i}function R(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=function(e,t,r){void 0===t&&(t=!1);void 0===r&&(r=!0);u("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let n=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(e,t,r)=>(n.push({paramName:t,isOptional:null!=r}),r?"/?([^\\/]+)?":"/([^\\/]+)"));e.endsWith("*")?(n.push({paramName:"*"}),o+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?o+="\\/*$":""!==e&&"/"!==e&&(o+="(?:(?=\\/|$))");let a=new RegExp(o,t?void 0:"i");return[a,n]}(e.path,e.caseSensitive,e.end),o=t.match(r);if(!o)return null;let a=o[0],i=a.replace(/(.)\/+$/,"$1"),l=o.slice(1);return{params:n.reduce((e,t,r)=>{let{paramName:n,isOptional:o}=t;if("*"===n){let e=l[r]||"";i=a.slice(0,a.length-e.length).replace(/(.)\/+$/,"$1")}const s=l[r];return e[n]=o&&!s?void 0:(s||"").replace(/%2F/g,"/"),e},{}),pathname:a,pathnameBase:i,pattern:e}}function z(e){try{return e.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(t){return u(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function O(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&"/"!==n?null:e.slice(r)||"/"}function N(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the `to."+r+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function $(e){return e.filter((e,t)=>0===t||e.route.path&&e.route.path.length>0)}function L(e,t){let r=$(e);return t?r.map((e,t)=>t===r.length-1?e.pathname:e.pathnameBase):r.map(e=>e.pathnameBase)}function D(e,t,r,n){let o;void 0===n&&(n=!1),"string"===typeof e?o=m(e):(o=l({},e),c(!o.pathname||!o.pathname.includes("?"),N("?","pathname","search",o)),c(!o.pathname||!o.pathname.includes("#"),N("#","pathname","hash",o)),c(!o.search||!o.search.includes("#"),N("#","search","hash",o)));let a,i=""===e||""===o.pathname,s=i?"/":o.pathname;if(null==s)a=r;else{let e=t.length-1;if(!n&&s.startsWith("..")){let t=s.split("/");for(;".."===t[0];)t.shift(),e-=1;o.pathname=t.join("/")}a=e>=0?t[e]:"/"}let u=function(e,t){void 0===t&&(t="/");let{pathname:r,search:n="",hash:o=""}="string"===typeof e?m(e):e,a=r?r.startsWith("/")?r:function(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(e=>{".."===e?r.length>1&&r.pop():"."!==e&&r.push(e)}),r.length>1?r.join("/"):"/"}(r,t):t;return{pathname:a,search:A(n),hash:M(o)}}(o,a),d=s&&"/"!==s&&s.endsWith("/"),p=(i||"."===s)&&r.endsWith("/");return u.pathname.endsWith("/")||!d&&!p||(u.pathname+="/"),u}const I=e=>e.join("/").replace(/\/\/+/g,"/"),F=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),A=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",M=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";Error;function U(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}const B=["post","put","patch","delete"],H=(new Set(B),["get",...B]);new Set(H),new Set([301,302,303,307,308]),new Set([307,308]);Symbol("deferred");function W(){return W=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},W.apply(this,arguments)}const V=t.createContext(null);const G=t.createContext(null);const K=t.createContext(null);const X=t.createContext(null);const Q=t.createContext({outlet:null,matches:[],isDataRoute:!1});const q=t.createContext(null);function Y(){return null!=t.useContext(X)}function Z(){return Y()||c(!1),t.useContext(X).location}function J(e){t.useContext(K).static||t.useLayoutEffect(e)}function ee(){let{isDataRoute:e}=t.useContext(Q);return e?function(){let{router:e}=ue(se.UseNavigateStable),r=pe(ce.UseNavigateStable),n=t.useRef(!1);return J(()=>{n.current=!0}),t.useCallback(function(t,o){void 0===o&&(o={}),n.current&&("number"===typeof t?e.navigate(t):e.navigate(t,W({fromRouteId:r},o)))},[e,r])}():function(){Y()||c(!1);let e=t.useContext(V),{basename:r,future:n,navigator:o}=t.useContext(K),{matches:a}=t.useContext(Q),{pathname:i}=Z(),l=JSON.stringify(L(a,n.v7_relativeSplatPath)),s=t.useRef(!1);return J(()=>{s.current=!0}),t.useCallback(function(t,n){if(void 0===n&&(n={}),!s.current)return;if("number"===typeof t)return void o.go(t);let a=D(t,JSON.parse(l),i,"path"===n.relative);null==e&&"/"!==r&&(a.pathname="/"===a.pathname?r:I([r,a.pathname])),(n.replace?o.replace:o.push)(a,n.state,n)},[r,o,l,i,e])}()}function te(e,r){let{relative:n}=void 0===r?{}:r,{future:o}=t.useContext(K),{matches:a}=t.useContext(Q),{pathname:i}=Z(),l=JSON.stringify(L(a,o.v7_relativeSplatPath));return t.useMemo(()=>D(e,JSON.parse(l),i,"path"===n),[e,l,i,n])}function re(r,n,o,a){Y()||c(!1);let{navigator:i}=t.useContext(K),{matches:l}=t.useContext(Q),s=l[l.length-1],u=s?s.params:{},d=(s&&s.pathname,s?s.pathnameBase:"/");s&&s.route;let p,f=Z();if(n){var h;let e="string"===typeof n?m(n):n;"/"===d||(null==(h=e.pathname)?void 0:h.startsWith(d))||c(!1),p=e}else p=f;let g=p.pathname||"/",y=g;if("/"!==d){let e=d.replace(/^\//,"").split("/");y="/"+g.replace(/^\//,"").split("/").slice(e.length).join("/")}let b=v(r,{pathname:y});let x=le(b&&b.map(e=>Object.assign({},e,{params:Object.assign({},u,e.params),pathname:I([d,i.encodeLocation?i.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?d:I([d,i.encodeLocation?i.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])})),l,o,a);return n&&x?t.createElement(X.Provider,{value:{location:W({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:e.Pop}},x):x}function ne(){let e=function(){var e;let r=t.useContext(q),n=de(ce.UseRouteError),o=pe(ce.UseRouteError);if(void 0!==r)return r;return null==(e=n.errors)?void 0:e[o]}(),r=U(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:o};return t.createElement(t.Fragment,null,t.createElement("h2",null,"Unexpected Application Error!"),t.createElement("h3",{style:{fontStyle:"italic"}},r),n?t.createElement("pre",{style:a},n):null,null)}const oe=t.createElement(ne,null);class ae extends t.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?t.createElement(Q.Provider,{value:this.props.routeContext},t.createElement(q.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ie(e){let{routeContext:r,match:n,children:o}=e,a=t.useContext(V);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),t.createElement(Q.Provider,{value:r},o)}function le(e,r,n,o){var a;if(void 0===r&&(r=[]),void 0===n&&(n=null),void 0===o&&(o=null),null==e){var i;if(!n)return null;if(n.errors)e=n.matches;else{if(!(null!=(i=o)&&i.v7_partialHydration&&0===r.length&&!n.initialized&&n.matches.length>0))return null;e=n.matches}}let l=e,s=null==(a=n)?void 0:a.errors;if(null!=s){let e=l.findIndex(e=>e.route.id&&void 0!==(null==s?void 0:s[e.route.id]));e>=0||c(!1),l=l.slice(0,Math.min(l.length,e+1))}let u=!1,d=-1;if(n&&o&&o.v7_partialHydration)for(let t=0;t<l.length;t++){let e=l[t];if((e.route.HydrateFallback||e.route.hydrateFallbackElement)&&(d=t),e.route.id){let{loaderData:t,errors:r}=n,o=e.route.loader&&void 0===t[e.route.id]&&(!r||void 0===r[e.route.id]);if(e.route.lazy||o){u=!0,l=d>=0?l.slice(0,d+1):[l[0]];break}}}return l.reduceRight((e,o,a)=>{let i,c=!1,p=null,f=null;var m;n&&(i=s&&o.route.id?s[o.route.id]:void 0,p=o.route.errorElement||oe,u&&(d<0&&0===a?(m="route-fallback",!1||fe[m]||(fe[m]=!0),c=!0,f=null):d===a&&(c=!0,f=o.route.hydrateFallbackElement||null)));let h=r.concat(l.slice(0,a+1)),g=()=>{let r;return r=i?p:c?f:o.route.Component?t.createElement(o.route.Component,null):o.route.element?o.route.element:e,t.createElement(ie,{match:o,routeContext:{outlet:e,matches:h,isDataRoute:null!=n},children:r})};return n&&(o.route.ErrorBoundary||o.route.errorElement||0===a)?t.createElement(ae,{location:n.location,revalidation:n.revalidation,component:p,error:i,children:g(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):g()},null)}var se=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(se||{}),ce=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ce||{});function ue(e){let r=t.useContext(V);return r||c(!1),r}function de(e){let r=t.useContext(G);return r||c(!1),r}function pe(e){let r=function(){let e=t.useContext(Q);return e||c(!1),e}(),n=r.matches[r.matches.length-1];return n.route.id||c(!1),n.route.id}const fe={};function me(e,t){null==e||e.v7_startTransition,void 0===(null==e?void 0:e.v7_relativeSplatPath)&&(!t||t.v7_relativeSplatPath),t&&(t.v7_fetcherPersist,t.v7_normalizeFormMethod,t.v7_partialHydration,t.v7_skipActionErrorRevalidation)}n.startTransition;function he(e){c(!1)}function ge(r){let{basename:n="/",children:o=null,location:a,navigationType:i=e.Pop,navigator:l,static:s=!1,future:u}=r;Y()&&c(!1);let d=n.replace(/^\/*/,"/"),p=t.useMemo(()=>({basename:d,navigator:l,static:s,future:W({v7_relativeSplatPath:!1},u)}),[d,u,l,s]);"string"===typeof a&&(a=m(a));let{pathname:f="/",search:h="",hash:g="",state:v=null,key:y="default"}=a,b=t.useMemo(()=>{let e=O(f,d);return null==e?null:{location:{pathname:e,search:h,hash:g,state:v,key:y},navigationType:i}},[d,f,h,g,v,y,i]);return null==b?null:t.createElement(K.Provider,{value:p},t.createElement(X.Provider,{children:o,value:b}))}function ve(e){let{children:t,location:r}=e;return re(ye(t),r)}new Promise(()=>{});t.Component;function ye(e,r){void 0===r&&(r=[]);let n=[];return t.Children.forEach(e,(e,o)=>{if(!t.isValidElement(e))return;let a=[...r,o];if(e.type===t.Fragment)return void n.push.apply(n,ye(e.props.children,a));e.type!==he&&c(!1),e.props.index&&e.props.children&&c(!1);let i={id:e.props.id||a.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(i.children=ye(e.props.children,a)),n.push(i)}),n}function be(){return be=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},be.apply(this,arguments)}function xe(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);const we=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"];try{window.__reactRouterVersion="6"}catch(Pc){}new Map;const ke=n.startTransition;i.flushSync,n.useId;function Se(e){let{basename:r,children:n,future:o,window:a}=e,i=t.useRef();var l;null==i.current&&(i.current=(void 0===(l={window:a,v5Compat:!0})&&(l={}),h(function(e,t){let{pathname:r,search:n,hash:o}=e.location;return p("",{pathname:r,search:n,hash:o},t.state&&t.state.usr||null,t.state&&t.state.key||"default")},function(e,t){return"string"===typeof t?t:f(t)},null,l)));let s=i.current,[c,u]=t.useState({action:s.action,location:s.location}),{v7_startTransition:d}=o||{},m=t.useCallback(e=>{d&&ke?ke(()=>u(e)):u(e)},[u,d]);return t.useLayoutEffect(()=>s.listen(m),[s,m]),t.useEffect(()=>me(o),[o]),t.createElement(ge,{basename:r,children:n,location:c.location,navigationType:c.action,navigator:s,future:o})}function je(e){let{basename:r,children:n,future:o,window:a}=e,i=t.useRef();var l;null==i.current&&(i.current=(void 0===(l={window:a,v5Compat:!0})&&(l={}),h(function(e,t){let{pathname:r="/",search:n="",hash:o=""}=m(e.location.hash.substr(1));return r.startsWith("/")||r.startsWith(".")||(r="/"+r),p("",{pathname:r,search:n,hash:o},t.state&&t.state.usr||null,t.state&&t.state.key||"default")},function(e,t){let r=e.document.querySelector("base"),n="";if(r&&r.getAttribute("href")){let t=e.location.href,r=t.indexOf("#");n=-1===r?t:t.slice(0,r)}return n+"#"+("string"===typeof t?t:f(t))},function(e,t){u("/"===e.pathname.charAt(0),"relative pathnames are not supported in hash history.push("+JSON.stringify(t)+")")},l)));let s=i.current,[c,d]=t.useState({action:s.action,location:s.location}),{v7_startTransition:g}=o||{},v=t.useCallback(e=>{g&&ke?ke(()=>d(e)):d(e)},[d,g]);return t.useLayoutEffect(()=>s.listen(v),[s,v]),t.useEffect(()=>me(o),[o]),t.createElement(ge,{basename:r,children:n,location:c.location,navigationType:c.action,navigator:s,future:o})}const Ce="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement,Ee=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,_e=t.forwardRef(function(e,r){let n,{onClick:o,relative:a,reloadDocument:i,replace:l,state:s,target:u,to:d,preventScrollReset:p,viewTransition:m}=e,h=xe(e,we),{basename:g}=t.useContext(K),v=!1;if("string"===typeof d&&Ee.test(d)&&(n=d,Ce))try{let e=new URL(window.location.href),t=d.startsWith("//")?new URL(e.protocol+d):new URL(d),r=O(t.pathname,g);t.origin===e.origin&&null!=r?d=r+t.search+t.hash:v=!0}catch(Pc){}let y=function(e,r){let{relative:n}=void 0===r?{}:r;Y()||c(!1);let{basename:o,navigator:a}=t.useContext(K),{hash:i,pathname:l,search:s}=te(e,{relative:n}),u=l;return"/"!==o&&(u="/"===l?o:I([o,l])),a.createHref({pathname:u,search:s,hash:i})}(d,{relative:a}),b=function(e,r){let{target:n,replace:o,state:a,preventScrollReset:i,relative:l,viewTransition:s}=void 0===r?{}:r,c=ee(),u=Z(),d=te(e,{relative:l});return t.useCallback(t=>{if(function(e,t){return 0===e.button&&(!t||"_self"===t)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)}(t,n)){t.preventDefault();let r=void 0!==o?o:f(u)===f(d);c(e,{replace:r,state:a,preventScrollReset:i,relative:l,viewTransition:s})}},[u,c,d,o,a,n,e,i,l,s])}(d,{replace:l,state:s,target:u,preventScrollReset:p,relative:a,viewTransition:m});return t.createElement("a",be({},h,{href:n||y,onClick:v||i?o:function(e){o&&o(e),e.defaultPrevented||b(e)},ref:r,target:u}))});var Pe,Te;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Pe||(Pe={})),function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(Te||(Te={}));function Re(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function ze(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,i,l=[],s=!0,c=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;s=!1}else for(;!(s=(n=a.call(r)).done)&&(l.push(n.value),l.length!==t);s=!0);}catch(e){c=!0,o=e}finally{try{if(!s&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(c)throw o}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return Re(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Re(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Oe(e){return Oe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Oe(e)}function Ne(e){var t=function(e,t){if("object"!=Oe(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=Oe(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==Oe(t)?t:t+""}function $e(e,t,r){return(t=Ne(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Le(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,Ne(n.key),n)}}var De=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34);/g,Ie={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"'},Fe=function(e){return Ie[e]};var Ae,Me={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:function(e){return e.replace(De,Fe)}},Ue=(0,t.createContext)();var Be=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.usedNamespaces={}}return function(e,t,r){t&&Le(e.prototype,t),r&&Le(e,r),Object.defineProperty(e,"prototype",{writable:!1})}(e,[{key:"addUsedNamespaces",value:function(e){var t=this;e.forEach(function(e){t.usedNamespaces[e]||(t.usedNamespaces[e]=!0)})}},{key:"getUsedNamespaces",value:function(){return Object.keys(this.usedNamespaces)}}]),e}();function He(){return Ae}function We(){if(console&&console.warn){for(var e,t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];"string"===typeof r[0]&&(r[0]="react-i18next:: ".concat(r[0])),(e=console).warn.apply(e,r)}}var Ve={};function Ge(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];"string"===typeof t[0]&&Ve[t[0]]||("string"===typeof t[0]&&(Ve[t[0]]=new Date),We.apply(void 0,t))}function Ke(e,t,r){e.loadNamespaces(t,function(){if(e.isInitialized)r();else{e.on("initialized",function t(){setTimeout(function(){e.off("initialized",t)},0),r()})}})}function Xe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function Qe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Xe(Object(r),!0).forEach(function(t){$e(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Xe(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function qe(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=r.i18n,o=(0,t.useContext)(Ue)||{},a=o.i18n,i=o.defaultNS,l=n||a||He();if(l&&!l.reportNamespaces&&(l.reportNamespaces=new Be),!l){Ge("You will need to pass in an i18next instance by using initReactI18next");var s=function(e){return Array.isArray(e)?e[e.length-1]:e},c=[s,{},!1];return c.t=s,c.i18n={},c.ready=!1,c}l.options.react&&void 0!==l.options.react.wait&&Ge("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var u=Qe(Qe(Qe({},Me),l.options.react),r),d=u.useSuspense,p=u.keyPrefix,f=e||i||l.options&&l.options.defaultNS;f="string"===typeof f?[f]:f||["translation"],l.reportNamespaces.addUsedNamespaces&&l.reportNamespaces.addUsedNamespaces(f);var m=(l.isInitialized||l.initializedStoreOnce)&&f.every(function(e){return function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return t.languages&&t.languages.length?void 0!==t.options.ignoreJSONStructure?t.hasLoadedNamespace(e,{precheck:function(t,n){if(r.bindI18n&&r.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!n(t.isLanguageChangingTo,e))return!1}}):function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=t.languages[0],o=!!t.options&&t.options.fallbackLng,a=t.languages[t.languages.length-1];if("cimode"===n.toLowerCase())return!0;var i=function(e,r){var n=t.services.backendConnector.state["".concat(e,"|").concat(r)];return-1===n||2===n};return!(r.bindI18n&&r.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!i(t.isLanguageChangingTo,e))&&(!!t.hasResourceBundle(n,e)||!(t.services.backendConnector.backend&&(!t.options.resources||t.options.partialBundledLanguages))||!(!i(n,e)||o&&!i(a,e)))}(e,t,r):(Ge("i18n.languages were undefined or empty",t.languages),!0)}(e,l,u)});function h(){return l.getFixedT(null,"fallback"===u.nsMode?f:f[0],p)}var g=ze((0,t.useState)(h),2),v=g[0],y=g[1],b=f.join(),x=function(e,r){var n=(0,t.useRef)();return(0,t.useEffect)(function(){n.current=r?n.current:e},[e,r]),n.current}(b),w=(0,t.useRef)(!0);(0,t.useEffect)(function(){var e=u.bindI18n,t=u.bindI18nStore;function r(){w.current&&y(h)}return w.current=!0,m||d||Ke(l,f,function(){w.current&&y(h)}),m&&x&&x!==b&&w.current&&y(h),e&&l&&l.on(e,r),t&&l&&l.store.on(t,r),function(){w.current=!1,e&&l&&e.split(" ").forEach(function(e){return l.off(e,r)}),t&&l&&t.split(" ").forEach(function(e){return l.store.off(e,r)})}},[l,b]);var k=(0,t.useRef)(!0);(0,t.useEffect)(function(){w.current&&!k.current&&y(h),k.current=!1},[l]);var S=[v,l,m];if(S.t=v,S.i18n=l,S.ready=m,m)return S;if(!m&&!d)return S;throw new Promise(function(e){Ke(l,f,function(){e()})})}var Ye=function(){return Ye=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},Ye.apply(this,arguments)};Object.create;function Ze(e,t,r){if(r||2===arguments.length)for(var n,o=0,a=t.length;o<a;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var Je=r(324),et=r.n(Je),tt="-ms-",rt="-moz-",nt="-webkit-",ot="comm",at="rule",it="decl",lt="@keyframes",st=Math.abs,ct=String.fromCharCode,ut=Object.assign;function dt(e){return e.trim()}function pt(e,t){return(e=t.exec(e))?e[0]:e}function ft(e,t,r){return e.replace(t,r)}function mt(e,t,r){return e.indexOf(t,r)}function ht(e,t){return 0|e.charCodeAt(t)}function gt(e,t,r){return e.slice(t,r)}function vt(e){return e.length}function yt(e){return e.length}function bt(e,t){return t.push(e),e}function xt(e,t){return e.filter(function(e){return!pt(e,t)})}var wt=1,kt=1,St=0,jt=0,Ct=0,Et="";function _t(e,t,r,n,o,a,i,l){return{value:e,root:t,parent:r,type:n,props:o,children:a,line:wt,column:kt,length:i,return:"",siblings:l}}function Pt(e,t){return ut(_t("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Tt(e){for(;e.root;)e=Pt(e.root,{children:[e]});bt(e,e.siblings)}function Rt(){return Ct=jt>0?ht(Et,--jt):0,kt--,10===Ct&&(kt=1,wt--),Ct}function zt(){return Ct=jt<St?ht(Et,jt++):0,kt++,10===Ct&&(kt=1,wt++),Ct}function Ot(){return ht(Et,jt)}function Nt(){return jt}function $t(e,t){return gt(Et,e,t)}function Lt(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Dt(e){return wt=kt=1,St=vt(Et=e),jt=0,[]}function It(e){return Et="",e}function Ft(e){return dt($t(jt-1,Ut(91===e?e+2:40===e?e+1:e)))}function At(e){for(;(Ct=Ot())&&Ct<33;)zt();return Lt(e)>2||Lt(Ct)>3?"":" "}function Mt(e,t){for(;--t&&zt()&&!(Ct<48||Ct>102||Ct>57&&Ct<65||Ct>70&&Ct<97););return $t(e,Nt()+(t<6&&32==Ot()&&32==zt()))}function Ut(e){for(;zt();)switch(Ct){case e:return jt;case 34:case 39:34!==e&&39!==e&&Ut(Ct);break;case 40:41===e&&Ut(e);break;case 92:zt()}return jt}function Bt(e,t){for(;zt()&&e+Ct!==57&&(e+Ct!==84||47!==Ot()););return"/*"+$t(t,jt-1)+"*"+ct(47===e?e:zt())}function Ht(e){for(;!Lt(Ot());)zt();return $t(e,jt)}function Wt(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function Vt(e,t,r,n){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case it:return e.return=e.return||e.value;case ot:return"";case lt:return e.return=e.value+"{"+Wt(e.children,n)+"}";case at:if(!vt(e.value=e.props.join(",")))return""}return vt(r=Wt(e.children,n))?e.return=e.value+"{"+r+"}":""}function Gt(e,t,r){switch(function(e,t){return 45^ht(e,0)?(((t<<2^ht(e,0))<<2^ht(e,1))<<2^ht(e,2))<<2^ht(e,3):0}(e,t)){case 5103:return nt+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return nt+e+e;case 4789:return rt+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return nt+e+rt+e+tt+e+e;case 5936:switch(ht(e,t+11)){case 114:return nt+e+tt+ft(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return nt+e+tt+ft(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return nt+e+tt+ft(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return nt+e+tt+e+e;case 6165:return nt+e+tt+"flex-"+e+e;case 5187:return nt+e+ft(e,/(\w+).+(:[^]+)/,nt+"box-$1$2"+tt+"flex-$1$2")+e;case 5443:return nt+e+tt+"flex-item-"+ft(e,/flex-|-self/g,"")+(pt(e,/flex-|baseline/)?"":tt+"grid-row-"+ft(e,/flex-|-self/g,""))+e;case 4675:return nt+e+tt+"flex-line-pack"+ft(e,/align-content|flex-|-self/g,"")+e;case 5548:return nt+e+tt+ft(e,"shrink","negative")+e;case 5292:return nt+e+tt+ft(e,"basis","preferred-size")+e;case 6060:return nt+"box-"+ft(e,"-grow","")+nt+e+tt+ft(e,"grow","positive")+e;case 4554:return nt+ft(e,/([^-])(transform)/g,"$1"+nt+"$2")+e;case 6187:return ft(ft(ft(e,/(zoom-|grab)/,nt+"$1"),/(image-set)/,nt+"$1"),e,"")+e;case 5495:case 3959:return ft(e,/(image-set\([^]*)/,nt+"$1$`$1");case 4968:return ft(ft(e,/(.+:)(flex-)?(.*)/,nt+"box-pack:$3"+tt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+nt+e+e;case 4200:if(!pt(e,/flex-|baseline/))return tt+"grid-column-align"+gt(e,t)+e;break;case 2592:case 3360:return tt+ft(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(e,r){return t=r,pt(e.props,/grid-\w+-end/)})?~mt(e+(r=r[t].value),"span",0)?e:tt+ft(e,"-start","")+e+tt+"grid-row-span:"+(~mt(r,"span",0)?pt(r,/\d+/):+pt(r,/\d+/)-+pt(e,/\d+/))+";":tt+ft(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(e){return pt(e.props,/grid-\w+-start/)})?e:tt+ft(ft(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return ft(e,/(.+)-inline(.+)/,nt+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(vt(e)-1-t>6)switch(ht(e,t+1)){case 109:if(45!==ht(e,t+4))break;case 102:return ft(e,/(.+:)(.+)-([^]+)/,"$1"+nt+"$2-$3$1"+rt+(108==ht(e,t+3)?"$3":"$2-$3"))+e;case 115:return~mt(e,"stretch",0)?Gt(ft(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return ft(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,r,n,o,a,i,l){return tt+r+":"+n+l+(o?tt+r+"-span:"+(a?i:+i-+n)+l:"")+e});case 4949:if(121===ht(e,t+6))return ft(e,":",":"+nt)+e;break;case 6444:switch(ht(e,45===ht(e,14)?18:11)){case 120:return ft(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+nt+(45===ht(e,14)?"inline-":"")+"box$3$1"+nt+"$2$3$1"+tt+"$2box$3")+e;case 100:return ft(e,":",":"+tt)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ft(e,"scroll-","scroll-snap-")+e}return e}function Kt(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case it:return void(e.return=Gt(e.value,e.length,r));case lt:return Wt([Pt(e,{value:ft(e.value,"@","@"+nt)})],n);case at:if(e.length)return function(e,t){return e.map(t).join("")}(r=e.props,function(t){switch(pt(t,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Tt(Pt(e,{props:[ft(t,/:(read-\w+)/,":-moz-$1")]})),Tt(Pt(e,{props:[t]})),ut(e,{props:xt(r,n)});break;case"::placeholder":Tt(Pt(e,{props:[ft(t,/:(plac\w+)/,":"+nt+"input-$1")]})),Tt(Pt(e,{props:[ft(t,/:(plac\w+)/,":-moz-$1")]})),Tt(Pt(e,{props:[ft(t,/:(plac\w+)/,tt+"input-$1")]})),Tt(Pt(e,{props:[t]})),ut(e,{props:xt(r,n)})}return""})}}function Xt(e){return It(Qt("",null,null,null,[""],e=Dt(e),0,[0],e))}function Qt(e,t,r,n,o,a,i,l,s){for(var c=0,u=0,d=i,p=0,f=0,m=0,h=1,g=1,v=1,y=0,b="",x=o,w=a,k=n,S=b;g;)switch(m=y,y=zt()){case 40:if(108!=m&&58==ht(S,d-1)){-1!=mt(S+=ft(Ft(y),"&","&\f"),"&\f",st(c?l[c-1]:0))&&(v=-1);break}case 34:case 39:case 91:S+=Ft(y);break;case 9:case 10:case 13:case 32:S+=At(m);break;case 92:S+=Mt(Nt()-1,7);continue;case 47:switch(Ot()){case 42:case 47:bt(Yt(Bt(zt(),Nt()),t,r,s),s);break;default:S+="/"}break;case 123*h:l[c++]=vt(S)*v;case 125*h:case 59:case 0:switch(y){case 0:case 125:g=0;case 59+u:-1==v&&(S=ft(S,/\f/g,"")),f>0&&vt(S)-d&&bt(f>32?Zt(S+";",n,r,d-1,s):Zt(ft(S," ","")+";",n,r,d-2,s),s);break;case 59:S+=";";default:if(bt(k=qt(S,t,r,c,u,o,l,b,x=[],w=[],d,a),a),123===y)if(0===u)Qt(S,t,k,k,x,a,d,l,w);else switch(99===p&&110===ht(S,3)?100:p){case 100:case 108:case 109:case 115:Qt(e,k,k,n&&bt(qt(e,k,k,0,0,o,l,b,o,x=[],d,w),w),o,w,d,l,n?x:w);break;default:Qt(S,k,k,k,[""],w,0,l,w)}}c=u=f=0,h=v=1,b=S="",d=i;break;case 58:d=1+vt(S),f=m;default:if(h<1)if(123==y)--h;else if(125==y&&0==h++&&125==Rt())continue;switch(S+=ct(y),y*h){case 38:v=u>0?1:(S+="\f",-1);break;case 44:l[c++]=(vt(S)-1)*v,v=1;break;case 64:45===Ot()&&(S+=Ft(zt())),p=Ot(),u=d=vt(b=S+=Ht(Nt())),y++;break;case 45:45===m&&2==vt(S)&&(h=0)}}return a}function qt(e,t,r,n,o,a,i,l,s,c,u,d){for(var p=o-1,f=0===o?a:[""],m=yt(f),h=0,g=0,v=0;h<n;++h)for(var y=0,b=gt(e,p+1,p=st(g=i[h])),x=e;y<m;++y)(x=dt(g>0?f[y]+" "+b:ft(b,/&\f/g,f[y])))&&(s[v++]=x);return _t(e,t,r,0===o?at:l,s,c,u,d)}function Yt(e,t,r,n){return _t(e,t,r,ot,ct(Ct),gt(e,2,-2),0,n)}function Zt(e,t,r,n,o){return _t(e,t,r,it,gt(e,0,n),gt(e,n+1,-1),n,o)}var Jt={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},er="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/Game-shop",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"/Game-shop",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"/Game-shop",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",tr="active",rr="data-styled-version",nr="6.1.19",or="/*!sc*/\n",ar="undefined"!=typeof window&&"undefined"!=typeof document,ir=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/Game-shop",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/Game-shop",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/Game-shop",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"/Game-shop",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/Game-shop",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/Game-shop",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/Game-shop",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/Game-shop",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"/Game-shop",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/Game-shop",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)),lr=(new Set,Object.freeze([])),sr=Object.freeze({});function cr(e,t,r){return void 0===r&&(r=sr),e.theme!==r.theme&&e.theme||t||r.theme}var ur=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),dr=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,pr=/(^-|-$)/g;function fr(e){return e.replace(dr,"-").replace(pr,"")}var mr=/(a)(d)/gi,hr=function(e){return String.fromCharCode(e+(e>25?39:97))};function gr(e){var t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=hr(t%52)+r;return(hr(t%52)+r).replace(mr,"$1-$2")}var vr,yr=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},br=function(e){return yr(5381,e)};function xr(e){return gr(br(e)>>>0)}function wr(e){return e.displayName||e.name||"Component"}function kr(e){return"string"==typeof e&&!0}var Sr="function"==typeof Symbol&&Symbol.for,jr=Sr?Symbol.for("react.memo"):60115,Cr=Sr?Symbol.for("react.forward_ref"):60112,Er={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},_r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Pr={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Tr=((vr={})[Cr]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},vr[jr]=Pr,vr);function Rr(e){return("type"in(t=e)&&t.type.$$typeof)===jr?Pr:"$$typeof"in e?Tr[e.$$typeof]:Er;var t}var zr=Object.defineProperty,Or=Object.getOwnPropertyNames,Nr=Object.getOwnPropertySymbols,$r=Object.getOwnPropertyDescriptor,Lr=Object.getPrototypeOf,Dr=Object.prototype;function Ir(e,t,r){if("string"!=typeof t){if(Dr){var n=Lr(t);n&&n!==Dr&&Ir(e,n,r)}var o=Or(t);Nr&&(o=o.concat(Nr(t)));for(var a=Rr(e),i=Rr(t),l=0;l<o.length;++l){var s=o[l];if(!(s in _r||r&&r[s]||i&&s in i||a&&s in a)){var c=$r(t,s);try{zr(e,s,c)}catch(e){}}}}return e}function Fr(e){return"function"==typeof e}function Ar(e){return"object"==typeof e&&"styledComponentId"in e}function Mr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Ur(e,t){if(0===e.length)return"";for(var r=e[0],n=1;n<e.length;n++)r+=t?t+e[n]:e[n];return r}function Br(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Hr(e,t,r){if(void 0===r&&(r=!1),!r&&!Br(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=Hr(e[n],t[n]);else if(Br(t))for(var n in t)e[n]=Hr(e[n],t[n]);return e}function Wr(e,t){Object.defineProperty(e,"toString",{value:t})}function Vr(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Gr=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,r=0;r<e;r++)t+=this.groupSizes[r];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var r=this.groupSizes,n=r.length,o=n;e>=o;)if((o<<=1)<0)throw Vr(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var a=n;a<o;a++)this.groupSizes[a]=0}for(var i=this.indexOfGroup(e+1),l=(a=0,t.length);a<l;a++)this.tag.insertRule(i,t[a])&&(this.groupSizes[e]++,i++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],r=this.indexOfGroup(e),n=r+t;this.groupSizes[e]=0;for(var o=r;o<n;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var r=this.groupSizes[e],n=this.indexOfGroup(e),o=n+r,a=n;a<o;a++)t+="".concat(this.tag.getRule(a)).concat(or);return t},e}(),Kr=new Map,Xr=new Map,Qr=1,qr=function(e){if(Kr.has(e))return Kr.get(e);for(;Xr.has(Qr);)Qr++;var t=Qr++;return Kr.set(e,t),Xr.set(t,e),t},Yr=function(e,t){Qr=t+1,Kr.set(e,t),Xr.set(t,e)},Zr="style[".concat(er,"][").concat(rr,'="').concat(nr,'"]'),Jr=new RegExp("^".concat(er,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),en=function(e,t,r){for(var n,o=r.split(","),a=0,i=o.length;a<i;a++)(n=o[a])&&e.registerName(t,n)},tn=function(e,t){for(var r,n=(null!==(r=t.textContent)&&void 0!==r?r:"").split(or),o=[],a=0,i=n.length;a<i;a++){var l=n[a].trim();if(l){var s=l.match(Jr);if(s){var c=0|parseInt(s[1],10),u=s[2];0!==c&&(Yr(u,c),en(e,u,s[3]),e.getTag().insertRules(c,o)),o.length=0}else o.push(l)}}},rn=function(e){for(var t=document.querySelectorAll(Zr),r=0,n=t.length;r<n;r++){var o=t[r];o&&o.getAttribute(er)!==tr&&(tn(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function nn(){return r.nc}var on=function(e){var t=document.head,r=e||t,n=document.createElement("style"),o=function(e){var t=Array.from(e.querySelectorAll("style[".concat(er,"]")));return t[t.length-1]}(r),a=void 0!==o?o.nextSibling:null;n.setAttribute(er,tr),n.setAttribute(rr,nr);var i=nn();return i&&n.setAttribute("nonce",i),r.insertBefore(n,a),n},an=function(){function e(e){this.element=on(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,r=0,n=t.length;r<n;r++){var o=t[r];if(o.ownerNode===e)return o}throw Vr(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),ln=function(){function e(e){this.element=on(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var r=document.createTextNode(t);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),sn=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),cn=ar,un={isServer:!ar,useCSSOMInjection:!ir},dn=function(){function e(e,t,r){void 0===e&&(e=sr),void 0===t&&(t={});var n=this;this.options=Ye(Ye({},un),e),this.gs=t,this.names=new Map(r),this.server=!!e.isServer,!this.server&&ar&&cn&&(cn=!1,rn(this)),Wr(this,function(){return function(e){for(var t=e.getTag(),r=t.length,n="",o=function(r){var o=function(e){return Xr.get(e)}(r);if(void 0===o)return"continue";var a=e.names.get(o),i=t.getGroup(r);if(void 0===a||!a.size||0===i.length)return"continue";var l="".concat(er,".g").concat(r,'[id="').concat(o,'"]'),s="";void 0!==a&&a.forEach(function(e){e.length>0&&(s+="".concat(e,","))}),n+="".concat(i).concat(l,'{content:"').concat(s,'"}').concat(or)},a=0;a<r;a++)o(a);return n}(n)})}return e.registerId=function(e){return qr(e)},e.prototype.rehydrate=function(){!this.server&&ar&&rn(this)},e.prototype.reconstructWithOptions=function(t,r){return void 0===r&&(r=!0),new e(Ye(Ye({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,r=e.target;return e.isServer?new sn(r):t?new an(r):new ln(r)}(this.options),new Gr(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(qr(e),this.names.has(e))this.names.get(e).add(t);else{var r=new Set;r.add(t),this.names.set(e,r)}},e.prototype.insertRules=function(e,t,r){this.registerName(e,t),this.getTag().insertRules(qr(e),r)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(qr(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),pn=/&/g,fn=/^\s*\/\/.*$/gm;function mn(e,t){return e.map(function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map(function(e){return"".concat(t," ").concat(e)})),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=mn(e.children,t)),e})}function hn(e){var t,r,n,o=void 0===e?sr:e,a=o.options,i=void 0===a?sr:a,l=o.plugins,s=void 0===l?lr:l,c=function(e,n,o){return o.startsWith(r)&&o.endsWith(r)&&o.replaceAll(r,"").length>0?".".concat(t):e},u=s.slice();u.push(function(e){e.type===at&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(pn,r).replace(n,c))}),i.prefix&&u.push(Kt),u.push(Vt);var d=function(e,o,a,l){void 0===o&&(o=""),void 0===a&&(a=""),void 0===l&&(l="&"),t=l,r=o,n=new RegExp("\\".concat(r,"\\b"),"g");var s=e.replace(fn,""),c=Xt(a||o?"".concat(a," ").concat(o," { ").concat(s," }"):s);i.namespace&&(c=mn(c,i.namespace));var d,p=[];return Wt(c,function(e){var t=yt(e);return function(r,n,o,a){for(var i="",l=0;l<t;l++)i+=e[l](r,n,o,a)||"";return i}}(u.concat((d=function(e){return p.push(e)},function(e){e.root||(e=e.return)&&d(e)})))),p};return d.hash=s.length?s.reduce(function(e,t){return t.name||Vr(15),yr(e,t.name)},5381).toString():"",d}var gn=new dn,vn=hn(),yn=t.createContext({shouldForwardProp:void 0,styleSheet:gn,stylis:vn}),bn=(yn.Consumer,t.createContext(void 0));function xn(){return(0,t.useContext)(yn)}function wn(e){var r=(0,t.useState)(e.stylisPlugins),n=r[0],o=r[1],a=xn().styleSheet,i=(0,t.useMemo)(function(){var t=a;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t},[e.disableCSSOMInjection,e.sheet,e.target,a]),l=(0,t.useMemo)(function(){return hn({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:n})},[e.enableVendorPrefixes,e.namespace,n]);(0,t.useEffect)(function(){et()(n,e.stylisPlugins)||o(e.stylisPlugins)},[e.stylisPlugins]);var s=(0,t.useMemo)(function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:i,stylis:l}},[e.shouldForwardProp,i,l]);return t.createElement(yn.Provider,{value:s},t.createElement(bn.Provider,{value:l},e.children))}var kn=function(){function e(e,t){var r=this;this.inject=function(e,t){void 0===t&&(t=vn);var n=r.name+t.hash;e.hasNameForId(r.id,n)||e.insertRules(r.id,n,t(r.rules,n,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,Wr(this,function(){throw Vr(12,String(r.name))})}return e.prototype.getName=function(e){return void 0===e&&(e=vn),this.name+e.hash},e}(),Sn=function(e){return e>="A"&&e<="Z"};function jn(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(1===r&&"-"===n&&"-"===e[0])return e;Sn(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var Cn=function(e){return null==e||!1===e||""===e},En=function(e){var t,r,n=[];for(var o in e){var a=e[o];e.hasOwnProperty(o)&&!Cn(a)&&(Array.isArray(a)&&a.isCss||Fr(a)?n.push("".concat(jn(o),":"),a,";"):Br(a)?n.push.apply(n,Ze(Ze(["".concat(o," {")],En(a),!1),["}"],!1)):n.push("".concat(jn(o),": ").concat((t=o,null==(r=a)||"boolean"==typeof r||""===r?"":"number"!=typeof r||0===r||t in Jt||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function _n(e,t,r,n){return Cn(e)?[]:Ar(e)?[".".concat(e.styledComponentId)]:Fr(e)?!Fr(o=e)||o.prototype&&o.prototype.isReactComponent||!t?[e]:_n(e(t),t,r,n):e instanceof kn?r?(e.inject(r,n),[e.getName(n)]):[e]:Br(e)?En(e):Array.isArray(e)?Array.prototype.concat.apply(lr,e.map(function(e){return _n(e,t,r,n)})):[e.toString()];var o}function Pn(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(Fr(r)&&!Ar(r))return!1}return!0}var Tn=br(nr),Rn=function(){function e(e,t,r){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===r||r.isStatic)&&Pn(e),this.componentId=t,this.baseHash=yr(Tn,t),this.baseStyle=r,dn.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,r){var n=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))n=Mr(n,this.staticRulesId);else{var o=Ur(_n(this.rules,e,t,r)),a=gr(yr(this.baseHash,o)>>>0);if(!t.hasNameForId(this.componentId,a)){var i=r(o,".".concat(a),void 0,this.componentId);t.insertRules(this.componentId,a,i)}n=Mr(n,a),this.staticRulesId=a}else{for(var l=yr(this.baseHash,r.hash),s="",c=0;c<this.rules.length;c++){var u=this.rules[c];if("string"==typeof u)s+=u;else if(u){var d=Ur(_n(u,e,t,r));l=yr(l,d+c),s+=d}}if(s){var p=gr(l>>>0);t.hasNameForId(this.componentId,p)||t.insertRules(this.componentId,p,r(s,".".concat(p),void 0,this.componentId)),n=Mr(n,p)}}return n},e}(),zn=t.createContext(void 0);zn.Consumer;function On(e){var r=t.useContext(zn),n=(0,t.useMemo)(function(){return function(e,t){if(!e)throw Vr(14);if(Fr(e))return e(t);if(Array.isArray(e)||"object"!=typeof e)throw Vr(8);return t?Ye(Ye({},t),e):e}(e.theme,r)},[e.theme,r]);return e.children?t.createElement(zn.Provider,{value:n},e.children):null}var Nn={};new Set;function $n(e,r,n){var o=Ar(e),a=e,i=!kr(e),l=r.attrs,s=void 0===l?lr:l,c=r.componentId,u=void 0===c?function(e,t){var r="string"!=typeof e?"sc":fr(e);Nn[r]=(Nn[r]||0)+1;var n="".concat(r,"-").concat(xr(nr+r+Nn[r]));return t?"".concat(t,"-").concat(n):n}(r.displayName,r.parentComponentId):c,d=r.displayName,p=void 0===d?function(e){return kr(e)?"styled.".concat(e):"Styled(".concat(wr(e),")")}(e):d,f=r.displayName&&r.componentId?"".concat(fr(r.displayName),"-").concat(r.componentId):r.componentId||u,m=o&&a.attrs?a.attrs.concat(s).filter(Boolean):s,h=r.shouldForwardProp;if(o&&a.shouldForwardProp){var g=a.shouldForwardProp;if(r.shouldForwardProp){var v=r.shouldForwardProp;h=function(e,t){return g(e,t)&&v(e,t)}}else h=g}var y=new Rn(n,f,o?a.componentStyle:void 0);function b(e,r){return function(e,r,n){var o=e.attrs,a=e.componentStyle,i=e.defaultProps,l=e.foldedComponentIds,s=e.styledComponentId,c=e.target,u=t.useContext(zn),d=xn(),p=e.shouldForwardProp||d.shouldForwardProp,f=cr(r,u,i)||sr,m=function(e,t,r){for(var n,o=Ye(Ye({},t),{className:void 0,theme:r}),a=0;a<e.length;a+=1){var i=Fr(n=e[a])?n(o):n;for(var l in i)o[l]="className"===l?Mr(o[l],i[l]):"style"===l?Ye(Ye({},o[l]),i[l]):i[l]}return t.className&&(o.className=Mr(o.className,t.className)),o}(o,r,f),h=m.as||c,g={};for(var v in m)void 0===m[v]||"$"===v[0]||"as"===v||"theme"===v&&m.theme===f||("forwardedAs"===v?g.as=m.forwardedAs:p&&!p(v,h)||(g[v]=m[v]));var y=function(e,t){var r=xn();return e.generateAndInjectStyles(t,r.styleSheet,r.stylis)}(a,m),b=Mr(l,s);return y&&(b+=" "+y),m.className&&(b+=" "+m.className),g[kr(h)&&!ur.has(h)?"class":"className"]=b,n&&(g.ref=n),(0,t.createElement)(h,g)}(x,e,r)}b.displayName=p;var x=t.forwardRef(b);return x.attrs=m,x.componentStyle=y,x.displayName=p,x.shouldForwardProp=h,x.foldedComponentIds=o?Mr(a.foldedComponentIds,a.styledComponentId):"",x.styledComponentId=f,x.target=o?a.target:e,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=o?function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];for(var n=0,o=t;n<o.length;n++)Hr(e,o[n],!0);return e}({},a.defaultProps,e):e}}),Wr(x,function(){return".".concat(x.styledComponentId)}),i&&Ir(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function Ln(e,t){for(var r=[e[0]],n=0,o=t.length;n<o;n+=1)r.push(t[n],e[n+1]);return r}var Dn=function(e){return Object.assign(e,{isCss:!0})};function In(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(Fr(e)||Br(e))return Dn(_n(Ln(lr,Ze([e],t,!0))));var n=e;return 0===t.length&&1===n.length&&"string"==typeof n[0]?_n(n):Dn(_n(Ln(n,t)))}function Fn(e,t,r){if(void 0===r&&(r=sr),!t)throw Vr(1,t);var n=function(n){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return e(t,r,In.apply(void 0,Ze([n],o,!1)))};return n.attrs=function(n){return Fn(e,t,Ye(Ye({},r),{attrs:Array.prototype.concat(r.attrs,n).filter(Boolean)}))},n.withConfig=function(n){return Fn(e,t,Ye(Ye({},r),n))},n}var An=function(e){return Fn($n,e)},Mn=An;ur.forEach(function(e){Mn[e]=An(e)});!function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Pn(e),dn.registerId(this.componentId+1)}e.prototype.createStyles=function(e,t,r,n){var o=n(Ur(_n(this.rules,t,r,n)),""),a=this.componentId+e;r.insertRules(a,a,o)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,r,n){e>2&&dn.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,t,r,n)}}();function Un(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=Ur(In.apply(void 0,Ze([e],t,!1))),o=xr(n);return new kn(o,n)}(function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var r=nn(),n=Ur([r&&'nonce="'.concat(r,'"'),"".concat(er,'="true"'),"".concat(rr,'="').concat(nr,'"')].filter(Boolean)," ");return"<style ".concat(n,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw Vr(2);return e._emitSheetCSS()},this.getStyleElement=function(){var r;if(e.sealed)throw Vr(2);var n=e.instance.toString();if(!n)return[];var o=((r={})[er]="",r[rr]=nr,r.dangerouslySetInnerHTML={__html:n},r),a=nn();return a&&(o.nonce=a),[t.createElement("style",Ye({},o,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new dn({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw Vr(2);return t.createElement(wn,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw Vr(3)}})(),"__sc-".concat(er,"__");var Bn=r(579);const Hn=(0,t.createContext)(void 0),Wn=()=>{const e=(0,t.useContext)(Hn);if(void 0===e)throw new Error("useAuth must be used within an AuthProvider");return e},Vn=(0,t.createContext)({language:"en",changeLanguage:()=>{},isRTL:!1}),Gn=()=>{const e=(0,t.useContext)(Vn);if(void 0===e)throw new Error("useLanguage must be used within a LanguageProvider");return e},Kn=(0,t.createContext)({theme:"light",toggleTheme:()=>{}}),Xn=(0,t.createContext)({cartItems:[],addToCart:()=>{},removeFromCart:()=>{},updateQuantity:()=>{},clearCart:()=>{},totalItems:0,totalPrice:0}),Qn=()=>{const e=(0,t.useContext)(Xn);if(void 0===e)throw new Error("useCart must be used within a CartProvider");return e},qn=Mn.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${e=>{let{$isOpen:t}=e;return t?"flex":"none"}};
  justify-content: center;
  align-items: center;
  z-index: 1000;
`,Yn=Mn.div`
  background-color: var(--surface-color);
  border-radius: 12px;
  padding: 2rem;
  max-width: 600px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
`,Zn=Mn.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border-color);
`,Jn=Mn.h2`
  margin: 0;
  color: var(--text-primary);
`,eo=Mn.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--text-secondary);
  padding: 0.5rem;
  border-radius: 50%;

  &:hover {
    background-color: var(--background-color);
  }
`,to=Mn.div`
  display: flex;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid var(--border-color);

  &:last-child {
    border-bottom: none;
  }
`,ro=Mn.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 1rem;
`,no=Mn.div`
  flex: 1;
`,oo=Mn.h4`
  margin: 0 0 0.5rem;
  color: var(--text-primary);
  font-size: 0.9rem;
`,ao=Mn.span`
  color: var(--primary-color);
  font-weight: bold;
`,io=Mn.div`
  display: flex;
  align-items: center;
  margin: 0 1rem;
`,lo=Mn.button`
  background-color: var(--primary-color);
  color: white;
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: var(--secondary-color);
  }

  &:disabled {
    background-color: var(--border-color);
    cursor: not-allowed;
  }
`,so=Mn.span`
  margin: 0 0.5rem;
  font-weight: bold;
  min-width: 20px;
  text-align: center;
`,co=Mn.button`
  background: none;
  border: none;
  color: var(--error-color);
  cursor: pointer;
  padding: 0.5rem;

  &:hover {
    background-color: var(--background-color);
    border-radius: 4px;
  }
`,uo=Mn.div`
  text-align: center;
  padding: 2rem;
  color: var(--text-secondary);
`,po=Mn.div`
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid var(--border-color);
`,fo=Mn.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: var(--text-primary);
`,mo=Mn.button`
  width: 100%;
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: var(--secondary-color);
  }

  &:disabled {
    background-color: var(--border-color);
    cursor: not-allowed;
  }
`,ho=e=>{let{isOpen:t,onClose:r}=e;const{t:n}=qe(),{cartItems:o,updateQuantity:a,removeFromCart:i,totalPrice:l}=Qn();return(0,Bn.jsx)(qn,{$isOpen:t,onClick:e=>{e.target===e.currentTarget&&r()},children:(0,Bn.jsxs)(Yn,{children:[(0,Bn.jsxs)(Zn,{children:[(0,Bn.jsx)(Jn,{children:n("cart.title")}),(0,Bn.jsx)(eo,{onClick:r,children:"\xd7"})]}),0===o.length?(0,Bn.jsx)(uo,{children:(0,Bn.jsx)("p",{children:n("cart.empty")})}):(0,Bn.jsxs)(Bn.Fragment,{children:[o.map(e=>(0,Bn.jsxs)(to,{children:[(0,Bn.jsx)(ro,{src:e.product.image,alt:e.product.name}),(0,Bn.jsxs)(no,{children:[(0,Bn.jsx)(oo,{children:e.product.name}),(0,Bn.jsxs)(ao,{children:["$",e.product.discountPrice||e.product.price]})]}),(0,Bn.jsxs)(io,{children:[(0,Bn.jsx)(lo,{onClick:()=>a(e.product.id,e.quantity-1),disabled:e.quantity<=1,children:"-"}),(0,Bn.jsx)(so,{children:e.quantity}),(0,Bn.jsx)(lo,{onClick:()=>a(e.product.id,e.quantity+1),children:"+"})]}),(0,Bn.jsx)(co,{onClick:()=>i(e.product.id),children:"\ud83d\uddd1\ufe0f"})]},e.product.id)),(0,Bn.jsxs)(po,{children:[(0,Bn.jsxs)(fo,{children:[(0,Bn.jsxs)("span",{children:[n("cart.total"),":"]}),(0,Bn.jsxs)("span",{children:["$",l.toFixed(2)]})]}),(0,Bn.jsx)(mo,{children:n("cart.checkout")})]})]})]})})},go={colors:{surface:"#fff",border:"#ddd",textSecondary:"#888",hover:"#eee",text:"#222",background:"#f9f9f9",primary:"#007bff",primaryHover:"#0056b3",error:"#ff4444"}},vo=Mn.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
`,yo=Mn.div`
  background: ${e=>e.theme.colors.surface};
  border-radius: 16px;
  padding: 2rem;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.3);
  border: 1px solid ${e=>e.theme.colors.border};
  position: relative;
`,bo=Mn.button`
  position: absolute;
  top: 1rem; right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${e=>e.theme.colors.textSecondary};
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.2s;

  &:hover {
    background: ${e=>e.theme.colors.hover};
    color: ${e=>e.theme.colors.text};
  }
`,xo=Mn.h2`
  color: ${e=>e.theme.colors.text};
  margin-bottom: 1.5rem;
  text-align: center;
  font-size: 1.5rem;
`,wo=Mn.div`
  display: flex;
  margin-bottom: 1.5rem;
  border-radius: 8px;
  background: ${e=>e.theme.colors.background};
  padding: 4px;
`,ko=Mn.button`
  flex: 1;
  padding: 0.75rem;
  border: none;
  background: ${e=>e.$active?e.theme.colors.primary:"transparent"};
  color: ${e=>e.$active?"white":e.theme.colors.text};
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s;

  &:hover {
    background: ${e=>e.$active?e.theme.colors.primary:e.theme.colors.hover};
  }
`,So=Mn.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,jo=Mn.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Co=Mn.label`
  color: ${e=>e.theme.colors.text};
  font-weight: 500;
  font-size: 0.9rem;
`,Eo=Mn.input`
  padding: 0.75rem;
  border: 1px solid ${e=>e.theme.colors.border};
  border-radius: 8px;
  background: ${e=>e.theme.colors.background};
  color: ${e=>e.theme.colors.text};
  font-size: 1rem;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary};
    box-shadow: 0 0 0 3px ${e=>`${e.theme.colors.primary}33`};
  }

  &::placeholder {
    color: ${e=>e.theme.colors.textSecondary};
  }
`,_o=Mn.button`
  background: ${e=>e.theme.colors.primary};
  color: white;
  border: none;
  padding: 0.875rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  margin-top: 0.5rem;

  &:hover {
    background: ${e=>e.theme.colors.primaryHover};
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`,Po=Mn.div`
  color: ${e=>e.theme.colors.error||"#ff4444"};
  font-size: 0.875rem;
  text-align: center;
  margin-top: 0.5rem;
`,To=Mn.div`
  width: 20px;
  height: 20px;
  border: 2px solid transparent;
  border-top: 2px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`,Ro=e=>{let{isOpen:r,onClose:n}=e;const[o,a]=(0,t.useState)("login"),[i,l]=(0,t.useState)({username:"",email:"",password:"",confirmPassword:""}),[s,c]=(0,t.useState)(""),[u,d]=(0,t.useState)(!1),{login:p,register:f}={login:async(e,t)=>!0,register:async(e,t,r)=>!0},{isRTL:m}={isRTL:!1},{t:h}={t:e=>({login:"\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644",register:"\u0625\u0646\u0634\u0627\u0621 \u062d\u0633\u0627\u0628",username:"\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645",enterUsername:"\u0623\u062f\u062e\u0644 \u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645",email:"\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a",enterEmail:"\u0623\u062f\u062e\u0644 \u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a",password:"\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631",enterPassword:"\u0623\u062f\u062e\u0644 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631",confirmPassword:"\u062a\u0623\u0643\u064a\u062f \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631",loginSuccess:"\u062a\u0645 \u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644 \u0628\u0646\u062c\u0627\u062d",invalidCredentials:"\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645 \u0623\u0648 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u063a\u064a\u0631 \u0635\u062d\u064a\u062d\u0629",passwordMismatch:"\u0643\u0644\u0645\u0627\u062a \u0627\u0644\u0645\u0631\u0648\u0631 \u063a\u064a\u0631 \u0645\u062a\u0637\u0627\u0628\u0642\u0629",registerSuccess:"\u062a\u0645 \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u062d\u0633\u0627\u0628 \u0628\u0646\u062c\u0627\u062d",userExists:"\u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645 \u0645\u0648\u062c\u0648\u062f \u0645\u0633\u0628\u0642\u0627\u064b",genericError:"\u062d\u062f\u062b \u062e\u0637\u0623\u060c \u064a\u0631\u062c\u0649 \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629 \u0645\u0631\u0629 \u0623\u062e\u0631\u0649"}[e]||e)},{showToast:g}={showToast:(e,t)=>alert(`${t.toUpperCase()}: ${e}`)},v=e=>{l(t=>({...t,[e.target.name]:e.target.value})),c("")};return r?(0,Bn.jsx)(On,{theme:go,children:(0,Bn.jsx)(vo,{onClick:n,children:(0,Bn.jsxs)(yo,{onClick:e=>e.stopPropagation(),dir:m?"rtl":"ltr",children:[(0,Bn.jsx)(bo,{onClick:n,children:"\xd7"}),(0,Bn.jsx)(xo,{children:h("login"===o?"login":"register")}),(0,Bn.jsxs)(wo,{children:[(0,Bn.jsx)(ko,{$active:"login"===o,onClick:()=>a("login"),type:"button",children:h("login")}),(0,Bn.jsx)(ko,{$active:"register"===o,onClick:()=>a("register"),type:"button",children:h("register")})]}),(0,Bn.jsxs)(So,{onSubmit:async e=>{e.preventDefault(),c(""),d(!0);try{if("login"===o){await p(i.username,i.password)?(g(h("loginSuccess"),"success"),n()):c(h("invalidCredentials"))}else{if(i.password!==i.confirmPassword)return c(h("passwordMismatch")),void d(!1);await f(i.username,i.email,i.password)?(g(h("registerSuccess"),"success"),n()):c(h("userExists"))}}catch{c(h("genericError"))}finally{d(!1)}},children:[(0,Bn.jsxs)(jo,{children:[(0,Bn.jsx)(Co,{children:h("username")}),(0,Bn.jsx)(Eo,{type:"text",name:"username",value:i.username,onChange:v,placeholder:h("enterUsername"),required:!0})]}),"register"===o&&(0,Bn.jsxs)(jo,{children:[(0,Bn.jsx)(Co,{children:h("email")}),(0,Bn.jsx)(Eo,{type:"email",name:"email",value:i.email,onChange:v,placeholder:h("enterEmail"),required:!0})]}),(0,Bn.jsxs)(jo,{children:[(0,Bn.jsx)(Co,{children:h("password")}),(0,Bn.jsx)(Eo,{type:"password",name:"password",value:i.password,onChange:v,placeholder:h("enterPassword"),required:!0})]}),"register"===o&&(0,Bn.jsxs)(jo,{children:[(0,Bn.jsx)(Co,{children:h("confirmPassword")}),(0,Bn.jsx)(Eo,{type:"password",name:"confirmPassword",value:i.confirmPassword,onChange:v,placeholder:h("confirmPassword"),required:!0})]}),s&&(0,Bn.jsx)(Po,{children:s}),(0,Bn.jsx)(_o,{type:"submit",disabled:u,children:u?(0,Bn.jsx)(To,{}):h("login"===o?"login":"register")})]})]})})}):null},zo=Mn.div`
  position: relative;
`,Oo=Mn.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: ${e=>e.theme.colors.surface};
  border: 1px solid ${e=>e.theme.colors.border};
  border-radius: 8px;
  padding: 0.5rem 0.75rem;
  cursor: pointer;
  transition: all 0.2s;
  color: ${e=>e.theme.colors.text};

  &:hover {
    background: ${e=>e.theme.colors.hover};
    border-color: ${e=>e.theme.colors.primary};
  }
`,No=Mn.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${e=>e.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 0.875rem;
`,$o=Mn.span`
  font-weight: 500;
  max-width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: 768px) {
    display: none;
  }
`,Lo=Mn.span`
  transition: transform 0.2s;
  transform: ${e=>e.isOpen?"rotate(180deg)":"rotate(0deg)"};
`,Do=Mn.div`
  position: absolute;
  top: calc(100% + 0.5rem);
  ${e=>e.isRTL?"left: 0;":"right: 0;"}
  background: ${e=>e.theme.colors.surface};
  border: 1px solid ${e=>e.theme.colors.border};
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  min-width: 200px;
  z-index: 1000;
  opacity: ${e=>e.isOpen?1:0};
  visibility: ${e=>e.isOpen?"visible":"hidden"};
  transform: ${e=>e.isOpen?"translateY(0)":"translateY(-10px)"};
  transition: all 0.2s;
`,Io=Mn.div`
  padding: 1rem;
  border-bottom: 1px solid ${e=>e.theme.colors.border};
`,Fo=Mn.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`,Ao=Mn.div`
  flex: 1;
`,Mo=Mn.div`
  font-weight: 600;
  color: ${e=>e.theme.colors.text};
  font-size: 0.9rem;
`,Uo=Mn.div`
  font-size: 0.8rem;
  color: ${e=>e.theme.colors.textSecondary};
  margin-top: 0.25rem;
`,Bo=Mn.div`
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  background: ${e=>e.isAdmin?"#ff6b35":"#4CAF50"};
  color: white;
  font-weight: 500;
  text-align: center;
  margin-top: 0.5rem;
`,Ho=Mn.ul`
  list-style: none;
  padding: 0.5rem 0;
  margin: 0;
`,Wo=Mn.li`
  padding: 0;
`,Vo=Mn.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  background: none;
  border: none;
  color: ${e=>e.theme.colors.text};
  cursor: pointer;
  transition: all 0.2s;
  text-align: left;
  font-size: 0.9rem;

  &:hover {
    background: ${e=>e.theme.colors.hover};
  }

  &.danger {
    color: ${e=>e.theme.colors.error||"#ff4444"};
  }
`,Go=Mn.span`
  font-size: 1.1rem;
  width: 20px;
  text-align: center;
`,Ko=Mn.div`
  height: 1px;
  background: ${e=>e.theme.colors.border};
  margin: 0.5rem 0;
`,Xo=e=>{let{onOpenProfile:r}=e;const[n,o]=(0,t.useState)(!1),a=(0,t.useRef)(null),{user:i,logout:l,isAdmin:s}=Wn(),{isRTL:c}=Gn(),{t:u}=qe(),d=ee();(0,t.useEffect)(()=>{const e=e=>{a.current&&!a.current.contains(e.target)&&o(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);if(!i)return null;const p=e=>e.split(" ").map(e=>e[0]).join("").toUpperCase().slice(0,2);return(0,Bn.jsxs)(zo,{ref:a,children:[(0,Bn.jsxs)(Oo,{onClick:()=>o(!n),children:[(0,Bn.jsx)(No,{children:i.avatar?(0,Bn.jsx)("img",{src:i.avatar,alt:i.username,style:{width:"100%",height:"100%",borderRadius:"50%"}}):p(i.username)}),(0,Bn.jsx)($o,{children:i.username}),(0,Bn.jsx)(Lo,{isOpen:n,children:"\u25bc"})]}),(0,Bn.jsxs)(Do,{isOpen:n,isRTL:c,children:[(0,Bn.jsx)(Io,{children:(0,Bn.jsxs)(Fo,{children:[(0,Bn.jsx)(No,{children:i.avatar?(0,Bn.jsx)("img",{src:i.avatar,alt:i.username,style:{width:"100%",height:"100%",borderRadius:"50%"}}):p(i.username)}),(0,Bn.jsxs)(Ao,{children:[(0,Bn.jsx)(Mo,{children:i.username}),(0,Bn.jsx)(Uo,{children:i.email}),(0,Bn.jsx)(Bo,{isAdmin:s(),children:s()?u("admin")||"\u0645\u062f\u064a\u0631":u("user")||"\u0645\u0633\u062a\u062e\u062f\u0645"})]})]})}),(0,Bn.jsxs)(Ho,{children:[(0,Bn.jsx)(Wo,{children:(0,Bn.jsxs)(Vo,{onClick:()=>{r&&r(),o(!1)},children:[(0,Bn.jsx)(Go,{children:"\ud83d\udc64"}),u("profile")||"\u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0634\u062e\u0635\u064a"]})}),(0,Bn.jsx)(Wo,{children:(0,Bn.jsxs)(Vo,{onClick:()=>d("/orders"),children:[(0,Bn.jsx)(Go,{children:"\ud83d\udce6"}),u("myOrders")||"\u0637\u0644\u0628\u0627\u062a\u064a"]})}),(0,Bn.jsx)(Wo,{children:(0,Bn.jsxs)(Vo,{onClick:()=>d("/wishlist"),children:[(0,Bn.jsx)(Go,{children:"\u2764\ufe0f"}),u("wishlist")||"\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0623\u0645\u0646\u064a\u0627\u062a"]})}),(0,Bn.jsx)(Wo,{children:(0,Bn.jsxs)(Vo,{onClick:()=>d("/settings"),children:[(0,Bn.jsx)(Go,{children:"\u2699\ufe0f"}),u("settings")||"\u0627\u0644\u0625\u0639\u062f\u0627\u062f\u0627\u062a"]})}),s()&&(0,Bn.jsxs)(Bn.Fragment,{children:[(0,Bn.jsx)(Ko,{}),(0,Bn.jsx)(Wo,{children:(0,Bn.jsxs)(Vo,{onClick:()=>{d("/admin"),o(!1)},children:[(0,Bn.jsx)(Go,{children:"\ud83d\udee0\ufe0f"}),u("adminPanel")||"\u0644\u0648\u062d\u0629 \u0627\u0644\u0625\u062f\u0627\u0631\u0629"]})})]}),(0,Bn.jsx)(Ko,{}),(0,Bn.jsx)(Wo,{children:(0,Bn.jsxs)(Vo,{onClick:()=>{l(),o(!1),d("/")},className:"danger",children:[(0,Bn.jsx)(Go,{children:"\ud83d\udeaa"}),u("logout")||"\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062e\u0631\u0648\u062c"]})})]})]})]})},Qo=Mn.div`
  position: relative;
`,qo=Mn.button`
  background: none;
  border: none;
  color: ${e=>e.theme.colors.text};
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  position: relative;
  transition: all 0.2s;

  &:hover {
    background: ${e=>e.theme.colors.hover};
  }
`,Yo=Mn.span`
  position: absolute;
  top: -2px;
  right: -2px;
  background: #ff4444;
  color: white;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  font-size: 0.7rem;
  font-weight: 600;
  display: ${e=>e.count>0?"flex":"none"};
  align-items: center;
  justify-content: center;
`,Zo=Mn.div`
  position: absolute;
  top: calc(100% + 0.5rem);
  ${e=>e.isRTL?"left: 0;":"right: 0;"}
  background: ${e=>e.theme.colors.surface};
  border: 1px solid ${e=>e.theme.colors.border};
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  width: 350px;
  max-height: 400px;
  z-index: 1000;
  opacity: ${e=>e.isOpen?1:0};
  visibility: ${e=>e.isOpen?"visible":"hidden"};
  transform: ${e=>e.isOpen?"translateY(0)":"translateY(-10px)"};
  transition: all 0.2s;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 300px;
    ${e=>e.isRTL?"left: -250px;":"right: -250px;"}
  }
`,Jo=Mn.div`
  padding: 1rem;
  border-bottom: 1px solid ${e=>e.theme.colors.border};
  display: flex;
  justify-content: space-between;
  align-items: center;
`,ea=Mn.h3`
  color: ${e=>e.theme.colors.text};
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
`,ta=Mn.button`
  background: none;
  border: none;
  color: ${e=>e.theme.colors.primary};
  font-size: 0.8rem;
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  transition: all 0.2s;

  &:hover {
    background: ${e=>e.theme.colors.hover};
  }
`,ra=Mn.div`
  max-height: 300px;
  overflow-y: auto;
`,na=Mn.div`
  padding: 1rem;
  border-bottom: 1px solid ${e=>e.theme.colors.border};
  cursor: pointer;
  transition: all 0.2s;
   background: ${e=>e.isRead?"transparent":`${e.theme.colors.primary}10`};

  &:hover {
    background: ${e=>e.theme.colors.hover};
  }

  &:last-child {
     border-bottom: none;
  }
`,oa=Mn.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  background: ${e=>{switch(e.type){case"order":return"#4CAF50";case"promotion":return"#ff9800";case"system":return"#2196F3";case"warning":return"#f44336";default:return"#666"}}};
  color: white;
`,aa=Mn.div`
  flex: 1;
`,ia=Mn.div`
  color: ${e=>e.theme.colors.text};
  font-size: 0.9rem;
  line-height: 1.4;
  margin-bottom: 0.25rem;
`,la=Mn.div`
  color: ${e=>e.theme.colors.textSecondary};
  font-size: 0.8rem;
`,sa=Mn.div`
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
`,ca=Mn.div`
  padding: 2rem;
  text-align: center;
  color: ${e=>e.theme.colors.textSecondary};
  font-size: 0.9rem;
`,ua=()=>{const[e,r]=(0,t.useState)(!1),[n,o]=(0,t.useState)([]),a=(0,t.useRef)(null),{user:i}=Wn(),{isRTL:l}=Gn(),{t:s}=qe(),c=[{id:"1",type:"order",message:"\u062a\u0645 \u062a\u0623\u0643\u064a\u062f \u0637\u0644\u0628\u0643 #001 \u0648\u0633\u064a\u062a\u0645 \u0634\u062d\u0646\u0647 \u0642\u0631\u064a\u0628\u0627\u064b",time:"5 \u062f\u0642\u0627\u0626\u0642",isRead:!1},{id:"2",type:"promotion",message:"\u062e\u0635\u0645 25% \u0639\u0644\u0649 \u062c\u0645\u064a\u0639 \u0628\u0631\u0627\u0645\u062c Adobe - \u0639\u0631\u0636 \u0645\u062d\u062f\u0648\u062f!",time:"1 \u0633\u0627\u0639\u0629",isRead:!1},{id:"3",type:"system",message:"\u062a\u0645 \u062a\u062d\u062f\u064a\u062b \u0646\u0638\u0627\u0645 \u0627\u0644\u0623\u0645\u0627\u0646 - \u064a\u0631\u062c\u0649 \u0645\u0631\u0627\u062c\u0639\u0629 \u0625\u0639\u062f\u0627\u062f\u0627\u062a\u0643",time:"3 \u0633\u0627\u0639\u0627\u062a",isRead:!0},{id:"4",type:"order",message:"\u062a\u0645 \u062a\u0633\u0644\u064a\u0645 \u0637\u0644\u0628\u0643 #002 \u0628\u0646\u062c\u0627\u062d",time:"1 \u064a\u0648\u0645",isRead:!0},{id:"5",type:"warning",message:"\u0627\u0646\u062a\u0628\u0647: \u0645\u062d\u0627\u0648\u0644\u0629 \u062f\u062e\u0648\u0644 \u0645\u0634\u0628\u0648\u0647\u0629 \u0625\u0644\u0649 \u062d\u0633\u0627\u0628\u0643",time:"2 \u0623\u064a\u0627\u0645",isRead:!1}];(0,t.useEffect)(()=>{i&&o(c)},[i]),(0,t.useEffect)(()=>{const e=e=>{a.current&&!a.current.contains(e.target)&&r(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);const u=n.filter(e=>!e.isRead).length,d=e=>{switch(e){case"order":return"\ud83d\udce6";case"promotion":return"\ud83c\udf89";case"system":return"\u2699\ufe0f";case"warning":return"\u26a0\ufe0f";default:return"\ud83d\udce2"}};return i?(0,Bn.jsxs)(Qo,{ref:a,children:[(0,Bn.jsxs)(qo,{onClick:()=>r(!e),children:["\ud83d\udd14",(0,Bn.jsx)(Yo,{count:u,children:u>9?"9+":u})]}),(0,Bn.jsxs)(Zo,{isOpen:e,isRTL:l,children:[(0,Bn.jsxs)(Jo,{children:[(0,Bn.jsx)(ea,{children:s("notifications")||"\u0627\u0644\u0625\u0634\u0639\u0627\u0631\u0627\u062a"}),u>0&&(0,Bn.jsx)(ta,{onClick:()=>{o(e=>e.map(e=>({...e,isRead:!0})))},children:s("markAllRead")||"\u062a\u062d\u062f\u064a\u062f \u0627\u0644\u0643\u0644 \u0643\u0645\u0642\u0631\u0648\u0621"})]}),(0,Bn.jsx)(ra,{children:0===n.length?(0,Bn.jsx)(ca,{children:s("noNotifications")||"\u0644\u0627 \u062a\u0648\u062c\u062f \u0625\u0634\u0639\u0627\u0631\u0627\u062a"}):n.map(e=>{return(0,Bn.jsx)(na,{isRead:e.isRead,onClick:()=>{return t=e.id,void o(e=>e.map(e=>e.id===t?{...e,isRead:!0}:e));var t},children:(0,Bn.jsxs)(sa,{children:[(0,Bn.jsx)(oa,{type:e.type,children:d(e.type)}),(0,Bn.jsxs)(aa,{children:[(0,Bn.jsx)(ia,{children:e.message}),(0,Bn.jsx)(la,{children:(t=e.time,`${s("since")||"\u0645\u0646\u0630"} ${t}`)})]})]})},e.id);var t})})]})]}):null},da=Mn.header`
  background-color: var(--surface-color);
  box-shadow: 0 2px 4px var(--shadow-color);
  position: sticky;
  top: 0;
  z-index: 100;
`,pa=Mn.div`
   display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid var(--border-color);
`,fa=Mn.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--primary-color);
`,ma=Mn.div`
  flex: 1;
  max-width: 500px;
  margin: 0 1rem;
  position: relative;

  @media (max-width: 768px) {
    display: none;
  }
`,ha=Mn.input`
  width: 100%;
  padding: 0.5rem 1rem;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  background-color: var(--background-color);
  color: var(--text-primary);

  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }
`,ga=Mn.div`
  display: flex;
  align-items: center;
`,va=Mn.button`
  background: none;
  border: none;
  color: var(--text-primary);
  margin-left: 1rem;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  &:hover {
    color: var(--primary-color);
  }
`,ya=Mn.span`
  background-color: var(--secondary-color);
  color: white;
  border-radius: 50%;
  padding: 0.1rem 0.4rem;
  font-size: 0.7rem;
  position: absolute;
  top: -5px;
  right: -5px;
`,ba=Mn.nav`
  padding: 0.5rem 1rem;
`,xa=Mn.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  overflow-x: auto;

  @media (max-width: 768px) {
    justify-content: space-between;
  }
`,wa=Mn.li`
  margin-right: 1.5rem;
  white-space: nowrap;

  &:last-child {
    margin-right: 0;
  }
`,ka=Mn.a`
  color: var(--text-primary);
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 0;
  position: relative;

  &:hover {
    color: var(--primary-color);
  }

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--primary-color);
    transition: width 0.3s ease;
  }

  &:hover:after {
    width: 100%;
  }
`,Sa=Mn(va)`
  @media (min-width: 769px) {
    display: none;
  }
`,ja=Mn(va)`
  position: relative;
`,Ca=Mn(va)`
  position: relative;
`,Ea=e=>{let{onSearchClick:r}=e;const{t:n}=qe(),{theme:o,toggleTheme:a}=(()=>{const e=(0,t.useContext)(Kn);if(void 0===e)throw new Error("useTheme must be used within a ThemeProvider");return e})(),{language:i,changeLanguage:l,isRTL:s}=Gn(),{totalItems:c}=Qn(),{user:u}=Wn(),[d,p]=(0,t.useState)(!1),[f,m]=(0,t.useState)(!1);return(0,Bn.jsxs)(da,{children:[(0,Bn.jsxs)(pa,{children:[(0,Bn.jsx)(fa,{children:n("app.name")}),(0,Bn.jsx)(ma,{children:(0,Bn.jsx)(ha,{placeholder:n("nav.search"),onClick:r,readOnly:!0})}),(0,Bn.jsxs)(ga,{children:[(0,Bn.jsx)(Sa,{"aria-label":n("nav.search"),onClick:r,children:(0,Bn.jsx)("span",{children:"\ud83d\udd0d"})}),(0,Bn.jsxs)(ja,{onClick:()=>{l("en"===i?"ar":"en")},children:[(0,Bn.jsx)("span",{children:"en"===i?"AR":"EN"}),(0,Bn.jsx)("small",{children:n("nav.language")})]}),(0,Bn.jsxs)(Ca,{onClick:a,children:[(0,Bn.jsx)("span",{children:"light"===o?"\ud83c\udf19":"\u2600\ufe0f"}),(0,Bn.jsx)("small",{children:n("nav.theme")})]}),(0,Bn.jsx)(ua,{}),u?(0,Bn.jsx)(Xo,{}):(0,Bn.jsxs)(va,{"aria-label":n("nav.account"),onClick:()=>{u||m(!0)},children:[(0,Bn.jsx)("span",{children:"\ud83d\udc64"}),(0,Bn.jsx)("small",{children:n("nav.account")})]}),(0,Bn.jsxs)(va,{"aria-label":n("nav.cart"),style:{position:"relative"},onClick:()=>{p(!0)},children:[(0,Bn.jsx)("span",{children:"\ud83d\uded2"}),(0,Bn.jsx)(ya,{children:c}),(0,Bn.jsx)("small",{children:n("nav.cart")})]})]})]}),(0,Bn.jsx)(ba,{children:(0,Bn.jsxs)(xa,{children:[(0,Bn.jsx)(wa,{children:(0,Bn.jsx)(ka,{href:"/",children:n("nav.home")})}),(0,Bn.jsx)(wa,{children:(0,Bn.jsx)(ka,{href:"/store",children:n("nav.store")})}),(0,Bn.jsx)(wa,{children:(0,Bn.jsx)(ka,{href:"/pc-builder",children:n("nav.pcBuilder")})}),(0,Bn.jsx)(wa,{children:(0,Bn.jsx)(ka,{href:"/premium-software",children:n("nav.premiumSoftware")||"\u0627\u0644\u0628\u0631\u0627\u0645\u062c \u0627\u0644\u0645\u062f\u0641\u0648\u0639\u0629"})}),(0,Bn.jsx)(wa,{children:(0,Bn.jsx)(ka,{href:"/store/games",children:n("categories.games")})}),(0,Bn.jsx)(wa,{children:(0,Bn.jsx)(ka,{href:"/store/accessories",children:n("categories.accessories")})}),(0,Bn.jsx)(wa,{children:(0,Bn.jsx)(ka,{href:"/store/components",children:n("categories.components")})}),(0,Bn.jsx)(wa,{children:(0,Bn.jsx)(ka,{href:"/store/peripherals",children:n("categories.peripherals")})})]})}),(0,Bn.jsx)(ho,{isOpen:d,onClose:()=>p(!1)}),(0,Bn.jsx)(Ro,{isOpen:f,onClose:()=>m(!1)})]})},_a=Mn.div`
  min-height: 100vh;
  background: ${e=>e.theme.colors.background};
`,Pa=Mn.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
`,Ta=Mn.div`
  background: ${e=>e.theme.colors.surface};
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
  border: 1px solid ${e=>e.theme.colors.border};
`,Ra=Mn.h1`
  color: ${e=>e.theme.colors.text};
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`,za=Mn.p`
  color: ${e=>e.theme.colors.textSecondary};
  font-size: 1.1rem;
`,Oa=Mn.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`,Na=Mn.div`
  background: ${e=>e.theme.colors.surface};
  border: 1px solid ${e=>e.theme.colors.border};
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  }
`,$a=Mn.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`,La=Mn.div`
  font-size: 2rem;
  font-weight: 700;
  color: ${e=>e.theme.colors.primary};
  margin-bottom: 0.5rem;
`,Da=Mn.div`
  color: ${e=>e.theme.colors.textSecondary};
  font-weight: 500;
`,Ia=Mn.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid ${e=>e.theme.colors.border};
`,Fa=Mn.button`
  padding: 1rem 1.5rem;
  border: none;
  background: none;
  color: ${e=>e.active?e.theme.colors.primary:e.theme.colors.textSecondary};
  font-weight: 600;
  cursor: pointer;
  border-bottom: 2px solid ${e=>e.active?e.theme.colors.primary:"transparent"};
  transition: all 0.2s;

  &:hover {
    color: ${e=>e.theme.colors.primary};
  }
`,Aa=Mn.div`
  background: ${e=>e.theme.colors.surface};
  border: 1px solid ${e=>e.theme.colors.border};
  border-radius: 12px;
  padding: 2rem;
`,Ma=Mn.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  gap: 1rem;
`,Ua=Mn.input`
  flex: 1;
  min-width: 250px;
  padding: 0.75rem;
  border: 1px solid ${e=>e.theme.colors.border};
  border-radius: 8px;
  background: ${e=>e.theme.colors.background};
  color: ${e=>e.theme.colors.text};

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary};
  }
`,Ba=Mn.button`
  background: ${e=>e.theme.colors.primary};
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${e=>e.theme.colors.primaryHover};
    transform: translateY(-1px);
  }
`,Ha=Mn.table`
  width: 100%;
  border-collapse: collapse;
`,Wa=Mn.th`
  background: ${e=>e.theme.colors.background};
  color: ${e=>e.theme.colors.text};
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  border-bottom: 2px solid ${e=>e.theme.colors.border};
`,Va=Mn.tr`
  &:hover {
    background: ${e=>e.theme.colors.hover};
  }
`,Ga=Mn.td`
  padding: 1rem;
  border-bottom: 1px solid ${e=>e.theme.colors.border};
  color: ${e=>e.theme.colors.text};
`,Ka=Mn.span`
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
  color: white;
  background: ${e=>{switch(e.status){case"active":return"#4CAF50";case"pending":return"#ff9800";case"completed":return"#2196F3";case"cancelled":return"#f44336";default:return"#666"}}};
`,Xa=Mn.div`
  display: flex;
  gap: 0.5rem;
`,Qa=Mn.button`
  padding: 0.5rem 0.75rem;
  border: 1px solid ${e=>e.theme.colors.border};
  background: ${e=>e.theme.colors.surface};
  color: ${e=>e.theme.colors.text};
  border-radius: 6px;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${e=>e.theme.colors.hover};
  }

  &.danger {
    border-color: #f44336;
    color: #f44336;

    &:hover {
      background: #f44336;
      color: white;
    }
  }

  &.primary {
    border-color: ${e=>e.theme.colors.primary};
    color: ${e=>e.theme.colors.primary};

    &:hover {
      background: ${e=>e.theme.colors.primary};
      color: white;
    }
  }
`,qa=Mn.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: ${e=>e.isOpen?"flex":"none"};
  align-items: center;
  justify-content: center;
  z-index: 1000;
`,Ya=Mn.div`
  background: ${e=>e.theme.colors.surface};
  border-radius: 12px;
  padding: 2rem;
  width: 90%;
  max-width: 500px;
  max-height: 80vh;
  overflow-y: auto;
`,Za=Mn.h3`
  color: ${e=>e.theme.colors.text};
  margin-bottom: 1.5rem;
`,Ja=Mn.div`
  margin-bottom: 1rem;
`,ei=Mn.label`
  display: block;
  color: ${e=>e.theme.colors.text};
  font-weight: 500;
  margin-bottom: 0.5rem;
`,ti=Mn.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${e=>e.theme.colors.border};
  border-radius: 8px;
  background: ${e=>e.theme.colors.background};
  color: ${e=>e.theme.colors.text};

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary};
  }
`,ri=Mn.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${e=>e.theme.colors.border};
  border-radius: 8px;
  background: ${e=>e.theme.colors.background};
  color: ${e=>e.theme.colors.text};
  min-height: 100px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary};
  }
`,ni=Mn.select`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${e=>e.theme.colors.border};
  border-radius: 8px;
  background: ${e=>e.theme.colors.background};
  color: ${e=>e.theme.colors.text};

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary};
  }
`,oi=()=>{const[e,r]=(0,t.useState)("dashboard"),[n,o]=(0,t.useState)(!1),[a,i]=(0,t.useState)("product"),[l,s]=(0,t.useState)(""),{user:c,isAdmin:u}=Wn(),{isRTL:d}=Gn(),{t:p}=qe(),f=ee();(0,t.useEffect)(()=>{c&&u()||f("/")},[c,u,f]);const m={totalUsers:1250,totalOrders:890,totalProducts:156,totalRevenue:45600},h=[{id:"1",user:"\u0623\u062d\u0645\u062f \u0645\u062d\u0645\u062f",product:"Adobe Creative Suite",amount:599,status:"completed",date:"2024-01-15"},{id:"2",user:"\u0641\u0627\u0637\u0645\u0629 \u0623\u062d\u0645\u062f",product:"Microsoft Office",amount:299,status:"pending",date:"2024-01-14"},{id:"3",user:"\u0645\u062d\u0645\u062f \u0639\u0644\u064a",product:"AutoCAD 2024",amount:1299,status:"active",date:"2024-01-13"}],g=[{id:"1",name:"\u0623\u062d\u0645\u062f \u0645\u062d\u0645\u062f",email:"ahmed@example.com",role:"user",status:"active",joinDate:"2023-12-01"},{id:"2",name:"\u0641\u0627\u0637\u0645\u0629 \u0623\u062d\u0645\u062f",email:"fatima@example.com",role:"user",status:"active",joinDate:"2023-11-15"},{id:"3",name:"\u0645\u062d\u0645\u062f \u0639\u0644\u064a",email:"mohammed@example.com",role:"admin",status:"active",joinDate:"2023-10-20"}],v=[{id:"1",name:"Adobe Creative Suite 2024",category:"design",price:599,stock:100,status:"active"},{id:"2",name:"Microsoft Office 365",category:"productivity",price:299,stock:200,status:"active"},{id:"3",name:"AutoCAD 2024",category:"engineering",price:1299,stock:50,status:"active"}],y=e=>{i(e),o(!0)},b=()=>(0,Bn.jsxs)(Aa,{children:[(0,Bn.jsxs)(Ma,{children:[(0,Bn.jsx)(Ua,{placeholder:p("searchUsers")||"\u0627\u0644\u0628\u062d\u062b \u0641\u064a \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645\u064a\u0646...",value:l,onChange:e=>s(e.target.value)}),(0,Bn.jsx)(Ba,{onClick:()=>y("user"),children:p("addUser")||"\u0625\u0636\u0627\u0641\u0629 \u0645\u0633\u062a\u062e\u062f\u0645"})]}),(0,Bn.jsxs)(Ha,{children:[(0,Bn.jsx)("thead",{children:(0,Bn.jsxs)("tr",{children:[(0,Bn.jsx)(Wa,{children:p("name")||"\u0627\u0644\u0627\u0633\u0645"}),(0,Bn.jsx)(Wa,{children:p("email")||"\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a"}),(0,Bn.jsx)(Wa,{children:p("role")||"\u0627\u0644\u062f\u0648\u0631"}),(0,Bn.jsx)(Wa,{children:p("status")||"\u0627\u0644\u062d\u0627\u0644\u0629"}),(0,Bn.jsx)(Wa,{children:p("joinDate")||"\u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0627\u0646\u0636\u0645\u0627\u0645"}),(0,Bn.jsx)(Wa,{children:p("actions")||"\u0627\u0644\u0625\u062c\u0631\u0627\u0621\u0627\u062a"})]})}),(0,Bn.jsx)("tbody",{children:g.map(e=>(0,Bn.jsxs)(Va,{children:[(0,Bn.jsx)(Ga,{children:e.name}),(0,Bn.jsx)(Ga,{children:e.email}),(0,Bn.jsx)(Ga,{children:"admin"===e.role?"\u0645\u062f\u064a\u0631":"\u0645\u0633\u062a\u062e\u062f\u0645"}),(0,Bn.jsx)(Ga,{children:(0,Bn.jsx)(Ka,{status:e.status,children:"active"===e.status?"\u0646\u0634\u0637":"\u063a\u064a\u0631 \u0646\u0634\u0637"})}),(0,Bn.jsx)(Ga,{children:e.joinDate}),(0,Bn.jsx)(Ga,{children:(0,Bn.jsxs)(Xa,{children:[(0,Bn.jsx)(Qa,{className:"primary",children:p("edit")||"\u062a\u0639\u062f\u064a\u0644"}),(0,Bn.jsx)(Qa,{className:"danger",children:p("delete")||"\u062d\u0630\u0641"})]})})]},e.id))})]})]});return c&&"function"===typeof u?u()?(0,Bn.jsxs)(_a,{dir:d?"rtl":"ltr",children:[(0,Bn.jsx)(Ea,{}),(0,Bn.jsxs)(Pa,{children:[(0,Bn.jsxs)(Ta,{children:[(0,Bn.jsx)(Ra,{children:p("adminPanel")||"\u0644\u0648\u062d\u0629 \u0627\u0644\u0625\u062f\u0627\u0631\u0629"}),(0,Bn.jsx)(za,{children:p("adminWelcome")||"\u0645\u0631\u062d\u0628\u0627\u064b \u0628\u0643 \u0641\u064a \u0644\u0648\u062d\u0629 \u0627\u0644\u062a\u062d\u0643\u0645 \u0627\u0644\u0625\u062f\u0627\u0631\u064a\u0629"})]}),(0,Bn.jsxs)(Ia,{children:[(0,Bn.jsx)(Fa,{active:"dashboard"===e,onClick:()=>r("dashboard"),children:p("dashboard")||"\u0644\u0648\u062d\u0629 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a"}),(0,Bn.jsx)(Fa,{active:"users"===e,onClick:()=>r("users"),children:p("users")||"\u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645\u0648\u0646"}),(0,Bn.jsx)(Fa,{active:"products"===e,onClick:()=>r("products"),children:p("products")||"\u0627\u0644\u0645\u0646\u062a\u062c\u0627\u062a"}),(0,Bn.jsx)(Fa,{active:"orders"===e,onClick:()=>r("orders"),children:p("orders")||"\u0627\u0644\u0637\u0644\u0628\u0627\u062a"})]}),"dashboard"===e&&(0,Bn.jsxs)(Bn.Fragment,{children:[(0,Bn.jsxs)(Oa,{children:[(0,Bn.jsxs)(Na,{children:[(0,Bn.jsx)($a,{children:"\ud83d\udc65"}),(0,Bn.jsx)(La,{children:m.totalUsers.toLocaleString()}),(0,Bn.jsx)(Da,{children:p("totalUsers")||"\u0625\u062c\u0645\u0627\u0644\u064a \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645\u064a\u0646"})]}),(0,Bn.jsxs)(Na,{children:[(0,Bn.jsx)($a,{children:"\ud83d\udce6"}),(0,Bn.jsx)(La,{children:m.totalOrders.toLocaleString()}),(0,Bn.jsx)(Da,{children:p("totalOrders")||"\u0625\u062c\u0645\u0627\u0644\u064a \u0627\u0644\u0637\u0644\u0628\u0627\u062a"})]}),(0,Bn.jsxs)(Na,{children:[(0,Bn.jsx)($a,{children:"\ud83d\udecd\ufe0f"}),(0,Bn.jsx)(La,{children:m.totalProducts.toLocaleString()}),(0,Bn.jsx)(Da,{children:p("totalProducts")||"\u0625\u062c\u0645\u0627\u0644\u064a \u0627\u0644\u0645\u0646\u062a\u062c\u0627\u062a"})]}),(0,Bn.jsxs)(Na,{children:[(0,Bn.jsx)($a,{children:"\ud83d\udcb0"}),(0,Bn.jsxs)(La,{children:["$",m.totalRevenue.toLocaleString()]}),(0,Bn.jsx)(Da,{children:p("totalRevenue")||"\u0625\u062c\u0645\u0627\u0644\u064a \u0627\u0644\u0625\u064a\u0631\u0627\u062f\u0627\u062a"})]})]}),(0,Bn.jsxs)(Aa,{children:[(0,Bn.jsx)("h3",{style:{marginBottom:"1.5rem",color:"var(--text-primary)"},children:p("recentOrders")||"\u0627\u0644\u0637\u0644\u0628\u0627\u062a \u0627\u0644\u0623\u062e\u064a\u0631\u0629"}),(0,Bn.jsxs)(Ha,{children:[(0,Bn.jsx)("thead",{children:(0,Bn.jsxs)("tr",{children:[(0,Bn.jsx)(Wa,{children:p("orderId")||"\u0631\u0642\u0645 \u0627\u0644\u0637\u0644\u0628"}),(0,Bn.jsx)(Wa,{children:p("customer")||"\u0627\u0644\u0639\u0645\u064a\u0644"}),(0,Bn.jsx)(Wa,{children:p("product")||"\u0627\u0644\u0645\u0646\u062a\u062c"}),(0,Bn.jsx)(Wa,{children:p("amount")||"\u0627\u0644\u0645\u0628\u0644\u063a"}),(0,Bn.jsx)(Wa,{children:p("status")||"\u0627\u0644\u062d\u0627\u0644\u0629"}),(0,Bn.jsx)(Wa,{children:p("date")||"\u0627\u0644\u062a\u0627\u0631\u064a\u062e"})]})}),(0,Bn.jsx)("tbody",{children:h.map(e=>(0,Bn.jsxs)(Va,{children:[(0,Bn.jsxs)(Ga,{children:["#",e.id]}),(0,Bn.jsx)(Ga,{children:e.user}),(0,Bn.jsx)(Ga,{children:e.product}),(0,Bn.jsxs)(Ga,{children:["$",e.amount]}),(0,Bn.jsx)(Ga,{children:(0,Bn.jsx)(Ka,{status:e.status,children:"completed"===e.status?"\u0645\u0643\u062a\u0645\u0644":"pending"===e.status?"\u0645\u0639\u0644\u0642":"\u0646\u0634\u0637"})}),(0,Bn.jsx)(Ga,{children:e.date})]},e.id))})]})]})]}),"users"===e&&b(),"products"===e&&(0,Bn.jsxs)(Aa,{children:[(0,Bn.jsxs)(Ma,{children:[(0,Bn.jsx)(Ua,{placeholder:p("searchProducts")||"\u0627\u0644\u0628\u062d\u062b \u0641\u064a \u0627\u0644\u0645\u0646\u062a\u062c\u0627\u062a...",value:l,onChange:e=>s(e.target.value)}),(0,Bn.jsx)(Ba,{onClick:()=>y("product"),children:p("addProduct")||"\u0625\u0636\u0627\u0641\u0629 \u0645\u0646\u062a\u062c"})]}),(0,Bn.jsxs)(Ha,{children:[(0,Bn.jsx)("thead",{children:(0,Bn.jsxs)("tr",{children:[(0,Bn.jsx)(Wa,{children:p("name")||"\u0627\u0644\u0627\u0633\u0645"}),(0,Bn.jsx)(Wa,{children:p("category")||"\u0627\u0644\u0641\u0626\u0629"}),(0,Bn.jsx)(Wa,{children:p("price")||"\u0627\u0644\u0633\u0639\u0631"}),(0,Bn.jsx)(Wa,{children:p("stock")||"\u0627\u0644\u0645\u062e\u0632\u0648\u0646"}),(0,Bn.jsx)(Wa,{children:p("status")||"\u0627\u0644\u062d\u0627\u0644\u0629"}),(0,Bn.jsx)(Wa,{children:p("actions")||"\u0627\u0644\u0625\u062c\u0631\u0627\u0621\u0627\u062a"})]})}),(0,Bn.jsx)("tbody",{children:v.map(e=>(0,Bn.jsxs)(Va,{children:[(0,Bn.jsx)(Ga,{children:e.name}),(0,Bn.jsx)(Ga,{children:e.category}),(0,Bn.jsxs)(Ga,{children:["$",e.price]}),(0,Bn.jsx)(Ga,{children:e.stock}),(0,Bn.jsx)(Ga,{children:(0,Bn.jsx)(Ka,{status:e.status,children:"active"===e.status?"\u0646\u0634\u0637":"\u063a\u064a\u0631 \u0646\u0634\u0637"})}),(0,Bn.jsx)(Ga,{children:(0,Bn.jsxs)(Xa,{children:[(0,Bn.jsx)(Qa,{className:"primary",children:p("edit")||"\u062a\u0639\u062f\u064a\u0644"}),(0,Bn.jsx)(Qa,{className:"danger",children:p("delete")||"\u062d\u0630\u0641"})]})})]},e.id))})]})]}),"orders"===e&&b()," ",(0,Bn.jsx)(qa,{isOpen:n,onClick:()=>o(!1),children:(0,Bn.jsxs)(Ya,{onClick:e=>e.stopPropagation(),children:[(0,Bn.jsxs)(Za,{children:["product"===a&&(p("addProduct")||"\u0625\u0636\u0627\u0641\u0629 \u0645\u0646\u062a\u062c"),"user"===a&&(p("addUser")||"\u0625\u0636\u0627\u0641\u0629 \u0645\u0633\u062a\u062e\u062f\u0645"),"order"===a&&(p("addOrder")||"\u0625\u0636\u0627\u0641\u0629 \u0637\u0644\u0628")]}),"product"===a&&(0,Bn.jsxs)(Bn.Fragment,{children:[(0,Bn.jsxs)(Ja,{children:[(0,Bn.jsx)(ei,{children:p("productName")||"\u0627\u0633\u0645 \u0627\u0644\u0645\u0646\u062a\u062c"}),(0,Bn.jsx)(ti,{type:"text",placeholder:p("enterProductName")||"\u0623\u062f\u062e\u0644 \u0627\u0633\u0645 \u0627\u0644\u0645\u0646\u062a\u062c"})]}),(0,Bn.jsxs)(Ja,{children:[(0,Bn.jsx)(ei,{children:p("category")||"\u0627\u0644\u0641\u0626\u0629"}),(0,Bn.jsxs)(ni,{children:[(0,Bn.jsx)("option",{value:"design",children:p("design")||"\u0627\u0644\u062a\u0635\u0645\u064a\u0645"}),(0,Bn.jsx)("option",{value:"productivity",children:p("productivity")||"\u0627\u0644\u0625\u0646\u062a\u0627\u062c\u064a\u0629"}),(0,Bn.jsx)("option",{value:"engineering",children:p("engineering")||"\u0627\u0644\u0647\u0646\u062f\u0633\u0629"})]})]}),(0,Bn.jsxs)(Ja,{children:[(0,Bn.jsx)(ei,{children:p("price")||"\u0627\u0644\u0633\u0639\u0631"}),(0,Bn.jsx)(ti,{type:"number",placeholder:"0.00"})]}),(0,Bn.jsxs)(Ja,{children:[(0,Bn.jsx)(ei,{children:p("description")||"\u0627\u0644\u0648\u0635\u0641"}),(0,Bn.jsx)(ri,{placeholder:p("enterDescription")||"\u0623\u062f\u062e\u0644 \u0648\u0635\u0641 \u0627\u0644\u0645\u0646\u062a\u062c"})]})]}),"user"===a&&(0,Bn.jsxs)(Bn.Fragment,{children:[(0,Bn.jsxs)(Ja,{children:[(0,Bn.jsx)(ei,{children:p("name")||"\u0627\u0644\u0627\u0633\u0645"}),(0,Bn.jsx)(ti,{type:"text",placeholder:p("enterName")||"\u0623\u062f\u062e\u0644 \u0627\u0644\u0627\u0633\u0645"})]}),(0,Bn.jsxs)(Ja,{children:[(0,Bn.jsx)(ei,{children:p("email")||"\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a"}),(0,Bn.jsx)(ti,{type:"email",placeholder:p("enterEmail")||"\u0623\u062f\u062e\u0644 \u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a"})]}),(0,Bn.jsxs)(Ja,{children:[(0,Bn.jsx)(ei,{children:p("role")||"\u0627\u0644\u062f\u0648\u0631"}),(0,Bn.jsxs)(ni,{children:[(0,Bn.jsx)("option",{value:"user",children:p("user")||"\u0645\u0633\u062a\u062e\u062f\u0645"}),(0,Bn.jsx)("option",{value:"admin",children:p("admin")||"\u0645\u062f\u064a\u0631"})]})]})]}),(0,Bn.jsxs)(Xa,{style:{marginTop:"1.5rem",justifyContent:"flex-end"},children:[(0,Bn.jsx)(Qa,{onClick:()=>o(!1),children:p("cancel")||"\u0625\u0644\u063a\u0627\u0621"}),(0,Bn.jsx)(Qa,{className:"primary",children:p("save")||"\u062d\u0641\u0638"})]})]})})]})]}):(0,Bn.jsx)("div",{style:{padding:"2rem",textAlign:"center"},children:"\u0644\u064a\u0633 \u0644\u062f\u064a\u0643 \u0635\u0644\u0627\u062d\u064a\u0627\u062a \u0627\u0644\u0648\u0635\u0648\u0644."}):(0,Bn.jsx)("div",{style:{padding:"2rem",textAlign:"center"},children:"\u062c\u0627\u0631\u064a \u0627\u0644\u062a\u062d\u0642\u0642 \u0645\u0646 \u0627\u0644\u0635\u0644\u0627\u062d\u064a\u0627\u062a..."})},ai=Mn.footer`
  background-color: var(--surface-color);
  color: var(--text-primary);
  padding: 2rem 0;
  margin-top: 3rem;
  border-top: 1px solid var(--border-color);
`,ii=Mn.div`
  display: grid;
   grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`,li=Mn.div`
  h3 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: var(--primary-color);
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 0.5rem;
  }

  a {
    color: var(--text-secondary);
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: var(--primary-color);
    }
  }
`,si=Mn.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: var(--background-color);
    color: var(--text-primary);
    transition: all 0.3s ease;

    &:hover {
      background-color: var(--primary-color);
      color: white;
    }
  }
`,ci=Mn.div`
  text-align: center;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid var(--border-color);
  color: var(--text-secondary);
  font-size: 0.9rem;
`,ui=()=>{const{t:e}=qe(),{isRTL:t}=Gn();return(0,Bn.jsxs)(ai,{children:[(0,Bn.jsxs)(ii,{children:[(0,Bn.jsxs)(li,{children:[(0,Bn.jsx)("h3",{children:e("app.name")}),(0,Bn.jsx)("p",{children:e("app.tagline")}),(0,Bn.jsxs)(si,{children:[(0,Bn.jsx)("a",{href:"#","aria-label":"Facebook",children:"\ud83d\udcf1"}),(0,Bn.jsx)("a",{href:"#","aria-label":"Twitter",children:"\ud83d\udc26"}),(0,Bn.jsx)("a",{href:"#","aria-label":"Instagram",children:"\ud83d\udcf7"}),(0,Bn.jsx)("a",{href:"#","aria-label":"YouTube",children:"\ud83d\udcfa"})]})]}),(0,Bn.jsxs)(li,{children:[(0,Bn.jsx)("h3",{children:e("nav.store")}),(0,Bn.jsxs)("ul",{children:[(0,Bn.jsx)("li",{children:(0,Bn.jsx)("a",{href:"/store/games",children:e("categories.games")})}),(0,Bn.jsx)("li",{children:(0,Bn.jsx)("a",{href:"/store/accessories",children:e("categories.accessories")})}),(0,Bn.jsx)("li",{children:(0,Bn.jsx)("a",{href:"/store/components",children:e("categories.components")})}),(0,Bn.jsx)("li",{children:(0,Bn.jsx)("a",{href:"/store/peripherals",children:e("categories.peripherals")})})]})]}),(0,Bn.jsxs)(li,{children:[(0,Bn.jsx)("h3",{children:e("footer.support")}),(0,Bn.jsxs)("ul",{children:[(0,Bn.jsx)("li",{children:(0,Bn.jsx)("a",{href:"/contact",children:e("footer.contact")})}),(0,Bn.jsx)("li",{children:(0,Bn.jsx)("a",{href:"/faq",children:e("footer.faq")})}),(0,Bn.jsx)("li",{children:(0,Bn.jsx)("a",{href:"/support",children:e("footer.support")})}),(0,Bn.jsx)("li",{children:(0,Bn.jsx)("a",{href:"/about",children:e("footer.about")})})]})]}),(0,Bn.jsxs)(li,{children:[(0,Bn.jsx)("h3",{children:e("account.title")}),(0,Bn.jsxs)("ul",{children:[(0,Bn.jsx)("li",{children:(0,Bn.jsx)("a",{href:"/account/login",children:e("account.login")})}),(0,Bn.jsx)("li",{children:(0,Bn.jsx)("a",{href:"/account/register",children:e("account.register")})}),(0,Bn.jsx)("li",{children:(0,Bn.jsx)("a",{href:"/account/orders",children:e("account.orders")})}),(0,Bn.jsx)("li",{children:(0,Bn.jsx)("a",{href:"/account/wishlist",children:e("account.wishlist")})})]})]})]}),(0,Bn.jsxs)(ci,{children:[(0,Bn.jsx)("div",{className:"container",children:e("footer.copyright")}),(0,Bn.jsxs)("div",{className:"container mt-1",children:[(0,Bn.jsx)("a",{href:"/terms",children:e("footer.terms")})," | ",(0,Bn.jsx)("a",{href:"/privacy",children:e("footer.privacy")})]})]})]})},di=Un`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`,pi=Un`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`,fi=(Mn.div`
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: ${e=>{let{type:t}=e;return"success"===t?"#4CAF50":"error"===t?"#f44336":"warning"===t?"#ff9800":"#2196F3"}};
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  animation: ${di} 0.3s ease-out;
  max-width: 300px;
  word-wrap: break-word;

  &.closing {
    animation: ${pi} 0.3s ease-out;
  }
`,Mn.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  float: right;
  margin-left: 10px;
  padding: 0;
  line-height: 1;

  &:hover {
    opacity: 0.8;
  }
`,(0,t.createContext)(void 0)),mi=()=>{const e=(0,t.useContext)(fi);if(!e)throw new Error("useToast must be used within a ToastProvider");return e},hi=Mn.div`
  background-color: var(--surface-color);
  border-radius: 8px;
  box-shadow: 0 2px 8px var(--shadow-color);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px var(--shadow-color);
  }
`,gi=Mn.div`
  position: relative;
  padding-top: 75%; /* 4:3 Aspect Ratio */
  overflow: hidden;
`,vi=Mn.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${hi}:hover & {
    transform: scale(1.05);
  }
`,yi=Mn.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`,bi=Mn.span`
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.7rem;
  font-weight: bold;
  text-transform: uppercase;
  color: white;
  background-color: ${e=>{let{type:t}=e;return"new"===t?"var(--primary-color)":"sale"===t?"var(--secondary-color)":"var(--error-color)"}};
`,xi=Mn.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`,wi=Mn.span`
  color: var(--text-secondary);
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
`,ki=Mn.h3`
  margin: 0 0 0.5rem;
  font-size: 1rem;
  color: var(--text-primary);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`,Si=Mn.div`
  display: flex;
  align-items: center;
  margin-top: auto;
  padding-top: 0.5rem;
`,ji=Mn.span`
  font-weight: bold;
  font-size: 1.1rem;
  color: var(--text-primary);
`,Ci=Mn.span`
  text-decoration: line-through;
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-left: 0.5rem;
`,Ei=Mn.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`,_i=Mn.button`
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${e=>{let{$primary:t}=e;return t?"var(--primary-color)":"transparent"}};
  color: ${e=>{let{$primary:t}=e;return t?"white":"var(--text-primary)"}};
  border: ${e=>{let{$primary:t}=e;return t?"none":"1px solid var(--border-color)"}};

  &:hover {
    background-color: ${e=>{let{$primary:t}=e;return t?"var(--primary-color)":"var(--background-color)"}};
  }

  &:disabled {
    background-color: var(--border-color);
    color: var(--text-secondary);
    cursor: not-allowed;
  }
`,Pi=Mn(_i)`
  flex: 1;
`,Ti=Mn(_i)`
  margin-left: 0.5rem;
  width: 40px;
  height: 40px;
`,Ri=e=>{let{product:t}=e;const{t:r}=qe(),{addToCart:n}=Qn(),{showToast:o}=mi(),a={RTX3080:"https://images.nvidia.com/rdp/graphics/rtx-3080/gallery/rtx-3080-gallery-03-1920x1080.jpg",Headset:"https://www.logitechg.com/assets/69971/1/logitech-g-pro-x-wireless-headset-gallery-1.jpg",PS5:"https://www.playstation.com/content/dam/pscom/ps5/ps5-digital-edition/ps5-digital-edition-hero-01.jpg",Monitor:"https://www.dell.com/sites/csimages/App-Merchandizing_Images/all/monitors-ultrasharp-u2723qe-front.png",Xbox:"https://compass-ssl.xbox.com/assets/28/2d/282d381b-4c51-48af-b9e6-0446d57c6e6c.jpg?n=Xbox-Series-X_Home-0_Xbox-Cloud-Gaming_1083x609.jpg",Mouse:"https://www.razer.com/assets/images/products/deathadder-v3-pro/gallery/deathadder-v3-pro-gallery-01.png",RAM:"https://www.corsair.com/medias/sys_master/images/images/h0e/h18/9046716647966/-CMW32GX4M2C3200C16-01.png",Ryzen9:"https://www.amd.com/system/files/2022-08/amd-ryzen-9-7950x-hero.png"}[t.name]||t.image;return(0,Bn.jsxs)(hi,{children:[(0,Bn.jsxs)(gi,{children:[(0,Bn.jsx)(vi,{src:a,alt:t.name}),(0,Bn.jsxs)(yi,{children:[t.isNew&&(0,Bn.jsx)(bi,{type:"new",children:r("product.new")}),t.discountPrice&&(0,Bn.jsx)(bi,{type:"sale",children:r("product.sale")}),!t.inStock&&(0,Bn.jsx)(bi,{type:"out",children:r("product.outOfStock")})]})]}),(0,Bn.jsxs)(xi,{children:[(0,Bn.jsx)(wi,{children:r(`categories.${t.category.toLowerCase()}`)}),(0,Bn.jsx)(ki,{children:t.name}),(0,Bn.jsxs)(Si,{children:[(0,Bn.jsx)(ji,{children:t.discountPrice?`$${t.discountPrice}`:`$${t.price}`}),t.discountPrice&&(0,Bn.jsxs)(Ci,{children:["$",t.price]})]}),(0,Bn.jsxs)(Ei,{children:[(0,Bn.jsx)(Pi,{$primary:!0,onClick:()=>{n(t,1),o(`${t.name} ${r("cart.addedToCart")}`,"success")},disabled:!t.inStock,children:t.inStock?r("product.addToCart"):r("product.outOfStock")}),(0,Bn.jsx)(Ti,{children:"\u2764\ufe0f"})]})]})]})},zi=Mn.div`
  margin: 2rem 0;
`,Oi=Mn.h2`
  margin-bottom: 1.5rem;
  color: var(--text-primary);
  font-size: 1.8rem;
`,Ni=Mn.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,$i=Mn.div`
  text-align: center;
  padding: 3rem 0;
  color: var(--text-secondary);
  font-size: 1.2rem;
`,Li=e=>{let{products:t,title:r}=e;const{t:n}=qe();return(0,Bn.jsxs)(zi,{children:[r&&(0,Bn.jsx)(Oi,{children:r}),t.length>0?(0,Bn.jsx)(Ni,{children:t.map(e=>(0,Bn.jsx)(Ri,{product:e},e.id))}):(0,Bn.jsx)($i,{children:n("product.noProductsFound")})]})},Di=Mn.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${e=>{let{$isOpen:t}=e;return t?"flex":"none"}};
  justify-content: center;
  align-items: flex-start;
  padding-top: 10vh;
  z-index: 1000;
`,Ii=Mn.div`
  background-color: var(--surface-color);
  border-radius: 12px;
  padding: 1.5rem;
  max-width: 600px;
  width: 90%;
  max-height: 70vh;
  overflow-y: auto;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  position: relative;
`,Fi=Mn.input`
  width: 100%;
  padding: 1rem;
  border: 2px solid var(--border-color);
  border-radius: 8px;
  font-size: 1rem;
  background-color: var(--background-color);
  color: var(--text-primary);
  margin-bottom: 1rem;

  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }
`,Ai=Mn.div`
  max-height: 400px;
  overflow-y: auto;
`,Mi=Mn.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid var(--border-color);
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--background-color);
  }

  &:last-child {
    border-bottom: none;
  }
`,Ui=Mn.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 1rem;
`,Bi=Mn.div`
  flex: 1;
`,Hi=Mn.h4`
  margin: 0 0 0.5rem;
  color: var(--text-primary);
  font-size: 0.9rem;
`,Wi=Mn.span`
  color: var(--text-secondary);
  font-size: 0.8rem;
`,Vi=Mn.span`
  color: var(--primary-color);
  font-weight: bold;
  margin-left: 1rem;
`,Gi=Mn.div`
  text-align: center;
  padding: 2rem;
  color: var(--text-secondary);
`,Ki=Mn.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--text-secondary);
  padding: 0.5rem;
  border-radius: 50%;

  &:hover {
    background-color: var(--background-color);
  }
`,Xi=e=>{let{isOpen:r,onClose:n,products:o}=e;const{t:a}=qe(),[i,l]=(0,t.useState)(""),[s,c]=(0,t.useState)([]);(0,t.useEffect)(()=>{if(""===i.trim())return void c([]);const e=o.filter(e=>e.name.toLowerCase().includes(i.toLowerCase())||e.category.toLowerCase().includes(i.toLowerCase())||e.description.toLowerCase().includes(i.toLowerCase()));c(e)},[i,o]);const u=()=>{l(""),c([]),n()};return(0,Bn.jsx)(Di,{$isOpen:r,onClick:e=>{e.target===e.currentTarget&&n()},children:(0,Bn.jsxs)(Ii,{children:[(0,Bn.jsx)(Ki,{onClick:u,children:"\xd7"}),(0,Bn.jsx)(Fi,{type:"text",placeholder:a("search.placeholder"),value:i,onChange:e=>l(e.target.value),autoFocus:!0}),(0,Bn.jsxs)(Ai,{children:[""!==i.trim()&&0===s.length&&(0,Bn.jsx)(Gi,{children:(0,Bn.jsx)("p",{children:a("search.noResults")})}),s.map(e=>(0,Bn.jsxs)(Mi,{onClick:u,children:[(0,Bn.jsx)(Ui,{src:e.image,alt:e.name}),(0,Bn.jsxs)(Bi,{children:[(0,Bn.jsx)(Hi,{children:e.name}),(0,Bn.jsx)(Wi,{children:a(`categories.${e.category.toLowerCase()}`)})]}),(0,Bn.jsxs)(Vi,{children:["$",e.discountPrice||e.price]})]},e.id))]})]})})},Qi=[{id:"1",name:"PlayStation 5 Digital Edition",category:"games",price:399.99,image:"https://via.placeholder.com/300x300?text=PS5",description:"Next-gen gaming console with lightning-fast loading times and stunning graphics.",inStock:!0,isNew:!0,isFeatured:!0},{id:"3",name:"Logitech G Pro X Gaming Headset",category:"accessories",price:129.99,discountPrice:99.99,image:"https://via.placeholder.com/300x300?text=Headset",description:"Professional-grade gaming headset with Blue VO!CE microphone technology.",inStock:!0,isFeatured:!0},{id:"4",name:"NVIDIA GeForce RTX 3080",category:"components",price:699.99,image:"https://via.placeholder.com/300x300?text=RTX3080",description:"High-end graphics card for ultimate gaming performance.",inStock:!1,isFeatured:!0},{id:"7",name:'Samsung Odyssey G7 32" Gaming Monitor',category:"peripherals",price:799.99,discountPrice:649.99,image:"https://via.placeholder.com/300x300?text=Monitor",description:"Curved QLED gaming monitor with 240Hz refresh rate and 1ms response time.",inStock:!0,isFeatured:!0}],qi=[{id:"2",name:"Xbox Series X",category:"games",price:499.99,image:"https://via.placeholder.com/300x300?text=Xbox",description:"The most powerful Xbox ever with 4K gaming and high frame rates.",inStock:!0},{id:"6",name:"Razer DeathAdder V2 Gaming Mouse",category:"peripherals",price:69.99,image:"https://via.placeholder.com/300x300?text=Mouse",description:"High-precision gaming mouse with optical switches.",inStock:!0},{id:"5",name:"AMD Ryzen 9 5900X",category:"components",price:549.99,discountPrice:499.99,image:"https://via.placeholder.com/300x300?text=Ryzen9",description:"12-core, 24-thread processor for demanding tasks and gaming.",inStock:!0},{id:"8",name:"Corsair Vengeance RGB Pro 32GB RAM",category:"components",price:159.99,image:"https://via.placeholder.com/300x300?text=RAM",description:"High-performance DDR4 memory with RGB lighting.",inStock:!0}],Yi=Mn.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`,Zi=Mn.main`
  flex: 1;
  padding: 2rem 0;
`,Ji=Mn.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`,el=Mn.section`
  position: relative;
  height: 500px;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://via.placeholder.com/1920x500?text=Gaming+Store');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;
  border-radius: 8px;
  overflow: hidden;
  
  @media (max-width: 768px) {
    height: 300px;
  }
`,tl=Mn.div`
  text-align: center;
  color: white;
  max-width: 800px;
  padding: 0 2rem;
`,rl=Mn.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,nl=Mn.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,ol=Mn(_e)`
  display: inline-block;
  background-color: var(--primary-color);
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 4px;
  font-weight: bold;
  text-decoration: none;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: var(--secondary-color);
  }
`,al=Mn.section`
  margin-bottom: 3rem;
`,il=Mn.h2`
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  color: var(--text-primary);
`,ll=Mn.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`,sl=Mn(_e)`
  position: relative;
  height: 200px;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: 1.5rem;
  text-align: center;
  transition: transform 0.3s ease;
  background-size: cover;
  background-position: center;
  
  &:hover {
    transform: translateY(-5px);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
`,cl=Mn.span`
  position: relative;
  z-index: 2;
`,ul=Mn.section`
  background-color: var(--surface-color);
  border-radius: 8px;
  padding: 2rem;
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`,dl=Mn.div`
  flex: 1;
  padding-right: 2rem;
  
  @media (max-width: 768px) {
    padding-right: 0;
    padding-bottom: 1.5rem;
    text-align: center;
  }
`,pl=Mn.h2`
  margin-bottom: 1rem;
  font-size: 1.8rem;
  color: var(--text-primary);
`,fl=Mn.p`
  margin-bottom: 1.5rem;
  color: var(--text-secondary);
  line-height: 1.6;
`,ml=Mn(_e)`
  display: inline-block;
  background-color: var(--primary-color);
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 4px;
  font-weight: bold;
  text-decoration: none;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: var(--secondary-color);
  }
`,hl=Mn.div`
  flex: 1;
  height: 300px;
  background-image: url('https://via.placeholder.com/600x300?text=Build+Your+PC');
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  
  @media (max-width: 768px) {
    width: 100%;
    height: 200px;
  }
`,gl=()=>{const{t:e}=qe(),[r,n]=(0,t.useState)(!1),o=[...Qi,...qi];return(0,Bn.jsxs)(Yi,{children:[(0,Bn.jsx)(Ea,{onSearchClick:()=>n(!0)}),(0,Bn.jsxs)(Zi,{children:[(0,Bn.jsx)(el,{children:(0,Bn.jsxs)(tl,{children:[(0,Bn.jsx)(rl,{children:e("app.name")}),(0,Bn.jsx)(nl,{children:e("app.tagline")}),(0,Bn.jsx)(ol,{to:"/store",children:e("nav.store")})]})}),(0,Bn.jsxs)(Ji,{children:[(0,Bn.jsxs)(al,{children:[(0,Bn.jsx)(il,{children:e("home.browseCategories")}),(0,Bn.jsxs)(ll,{children:[(0,Bn.jsx)(sl,{to:"/store/games",style:{backgroundImage:"url(https://via.placeholder.com/300x200?text=Games)"},children:(0,Bn.jsx)(cl,{children:e("categories.games")})}),(0,Bn.jsx)(sl,{to:"/store/accessories",style:{backgroundImage:"url(https://via.placeholder.com/300x200?text=Accessories)"},children:(0,Bn.jsx)(cl,{children:e("categories.accessories")})}),(0,Bn.jsx)(sl,{to:"/store/components",style:{backgroundImage:"url(https://via.placeholder.com/300x200?text=Components)"},children:(0,Bn.jsx)(cl,{children:e("categories.components")})}),(0,Bn.jsx)(sl,{to:"/store/peripherals",style:{backgroundImage:"url(https://via.placeholder.com/300x200?text=Peripherals)"},children:(0,Bn.jsx)(cl,{children:e("categories.peripherals")})})]})]}),(0,Bn.jsx)(Li,{products:Qi,title:e("home.featuredProducts")}),(0,Bn.jsxs)(ul,{children:[(0,Bn.jsxs)(dl,{children:[(0,Bn.jsx)(pl,{children:e("pcBuilder.title")}),(0,Bn.jsx)(fl,{children:e("home.pcBuilderPromo")}),(0,Bn.jsx)(ml,{to:"/pc-builder",children:e("home.startBuilding")})]}),(0,Bn.jsx)(hl,{})]}),(0,Bn.jsx)(Li,{products:qi,title:e("home.bestSellers")})]})]}),(0,Bn.jsx)(ui,{}),(0,Bn.jsx)(Xi,{isOpen:r,onClose:()=>n(!1),products:o})]})},vl=(0,t.createContext)({components:{processor:null,motherboard:null,memory:null,graphics:null,storage:null,powerSupply:null,case:null,cooling:null},addComponent:()=>{},removeComponent:()=>{},clearComponents:()=>{},getCompatibilityScore:()=>0,getPowerConsumption:()=>0,getPerformanceScore:()=>0,getTotalPrice:()=>0}),yl={processor:[{id:"cpu1",type:"processor",name:"Intel Core i9-12900K",brand:"Intel",price:589.99,image:"https://via.placeholder.com/150?text=i9-12900K",specifications:{cores:"16 (8P+8E)",threads:"24",baseFrequency:"3.2 GHz",boostFrequency:"5.2 GHz",socket:"LGA1700",tdp:"125W"},powerConsumption:125,performanceScore:95},{id:"cpu2",type:"processor",name:"AMD Ryzen 9 5950X",brand:"AMD",price:549.99,image:"https://via.placeholder.com/150?text=Ryzen9-5950X",specifications:{cores:"16",threads:"32",baseFrequency:"3.4 GHz",boostFrequency:"4.9 GHz",socket:"AM4",tdp:"105W"},powerConsumption:105,performanceScore:92}],motherboard:[{id:"mb1",type:"motherboard",name:"ASUS ROG Maximus Z690 Hero",brand:"ASUS",price:599.99,image:"https://via.placeholder.com/150?text=Z690-Hero",specifications:{chipset:"Intel Z690",socket:"LGA1700",formFactor:"ATX",memorySlots:"4",maxMemory:"128GB"},compatibleWith:{memoryType:["DDR5"],processorBrand:["Intel"]},powerConsumption:35,performanceScore:90},{id:"mb2",type:"motherboard",name:"MSI MPG X570 Gaming Pro Carbon WiFi",brand:"MSI",price:269.99,image:"https://via.placeholder.com/150?text=X570-Gaming",specifications:{chipset:"AMD X570",socket:"AM4",formFactor:"ATX",memorySlots:"4",maxMemory:"128GB"},compatibleWith:{memoryType:["DDR4"],processorBrand:["AMD"]},powerConsumption:30,performanceScore:85}],memory:[{id:"ram1",type:"memory",name:"Corsair Dominator Platinum RGB 32GB DDR5",brand:"Corsair",price:329.99,image:"https://via.placeholder.com/150?text=DDR5-RAM",specifications:{capacity:"32GB (2x16GB)",type:"DDR5",speed:"5200MHz",casLatency:"CL38"},powerConsumption:15,performanceScore:90},{id:"ram2",type:"memory",name:"G.Skill Trident Z RGB 32GB DDR4",brand:"G.Skill",price:159.99,image:"https://via.placeholder.com/150?text=DDR4-RAM",specifications:{capacity:"32GB (2x16GB)",type:"DDR4",speed:"3600MHz",casLatency:"CL16"},powerConsumption:12,performanceScore:80}],graphics:[{id:"gpu1",type:"graphics",name:"NVIDIA GeForce RTX 3080 Ti",brand:"NVIDIA",price:1199.99,image:"https://via.placeholder.com/150?text=RTX3080Ti",specifications:{memory:"12GB GDDR6X",coreClock:"1365 MHz",boostClock:"1665 MHz",interface:"PCIe 4.0 x16"},powerConsumption:350,performanceScore:95},{id:"gpu2",type:"graphics",name:"AMD Radeon RX 6900 XT",brand:"AMD",price:999.99,image:"https://via.placeholder.com/150?text=RX6900XT",specifications:{memory:"16GB GDDR6",coreClock:"1825 MHz",boostClock:"2250 MHz",interface:"PCIe 4.0 x16"},powerConsumption:300,performanceScore:90}],storage:[{id:"ssd1",type:"storage",name:"Samsung 980 PRO 2TB NVMe SSD",brand:"Samsung",price:279.99,image:"https://via.placeholder.com/150?text=980PRO",specifications:{capacity:"2TB",interface:"PCIe 4.0 x4",readSpeed:"7000 MB/s",writeSpeed:"5100 MB/s"},powerConsumption:8,performanceScore:95},{id:"ssd2",type:"storage",name:"WD Black SN850 1TB NVMe SSD",brand:"Western Digital",price:149.99,image:"https://via.placeholder.com/150?text=SN850",specifications:{capacity:"1TB",interface:"PCIe 4.0 x4",readSpeed:"7000 MB/s",writeSpeed:"5300 MB/s"},powerConsumption:7,performanceScore:92}],powerSupply:[{id:"psu1",type:"powerSupply",name:"Corsair HX1000i Platinum",brand:"Corsair",price:269.99,image:"https://via.placeholder.com/150?text=HX1000i",specifications:{wattage:"1000W",efficiency:"80+ Platinum",modular:"Full",fanSize:"140mm"},powerConsumption:0,performanceScore:90},{id:"psu2",type:"powerSupply",name:"EVGA SuperNOVA 850 G5",brand:"EVGA",price:149.99,image:"https://via.placeholder.com/150?text=SuperNOVA850",specifications:{wattage:"850W",efficiency:"80+ Gold",modular:"Full",fanSize:"135mm"},powerConsumption:0,performanceScore:85}],case:[{id:"case1",type:"case",name:"Lian Li PC-O11 Dynamic",brand:"Lian Li",price:149.99,image:"https://via.placeholder.com/150?text=PC-O11",specifications:{formFactor:"Mid Tower",motherboardSupport:"E-ATX, ATX, Micro-ATX, Mini-ITX",dimensions:"445mm x 272mm x 446mm",weight:"9.7kg"},powerConsumption:0,performanceScore:0},{id:"case2",type:"case",name:"Corsair 5000D Airflow",brand:"Corsair",price:164.99,image:"https://via.placeholder.com/150?text=5000D",specifications:{formFactor:"Mid Tower",motherboardSupport:"ATX, Micro-ATX, Mini-ITX",dimensions:"520mm x 245mm x 520mm",weight:"12.1kg"},powerConsumption:0,performanceScore:0}],cooling:[{id:"cool1",type:"cooling",name:"NZXT Kraken X73 RGB",brand:"NZXT",price:179.99,image:"https://via.placeholder.com/150?text=KrakenX73",specifications:{type:"Liquid",radiatorSize:"360mm",fanSize:"3x 120mm",rgb:"Yes"},powerConsumption:15,performanceScore:90},{id:"cool2",type:"cooling",name:"Noctua NH-D15",brand:"Noctua",price:99.99,image:"https://via.placeholder.com/150?text=NH-D15",specifications:{type:"Air",height:"165mm",fanSize:"2x 140mm",rgb:"No"},powerConsumption:5,performanceScore:85}]},bl=Mn.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`,xl=Mn.main`
  flex: 1;
  padding: 2rem 0;
`,wl=Mn.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`,kl=Mn.h1`
  margin-bottom: 1.5rem;
  color: var(--text-primary);
`,Sl=Mn.p`
  margin-bottom: 2rem;
  color: var(--text-secondary);
  font-size: 1.1rem;
`,jl=Mn.div`
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 2rem;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`,Cl=Mn.div``,El=Mn.div`
  margin-bottom: 2rem;
`,_l=Mn.h2`
  margin-bottom: 1rem;
  font-size: 1.5rem;
  color: var(--text-primary);
`,Pl=Mn.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Tl=Mn.div`
  background-color: var(--surface-color);
  border: 2px solid ${e=>e.selected?"var(--primary-color)":"var(--border-color)"};
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px var(--shadow-color);
  }
`,Rl=Mn.div`
  width: 80px;
  height: 80px;
  margin-right: 1rem;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`,zl=Mn.div`
  flex-grow: 1;
`,Ol=Mn.h3`
  margin: 0 0 0.5rem;
  font-size: 1rem;
`,Nl=Mn.p`
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`,$l=Mn.p`
  font-weight: bold;
  color: var(--primary-color);
`,Ll=Mn.div`
  position: sticky;
  top: 2rem;
`,Dl=Mn.div`
  background-color: var(--surface-color);
  border-radius: 8px;
  box-shadow: 0 2px 8px var(--shadow-color);
  padding: 1.5rem;
  margin-bottom: 1.5rem;
`,Il=Mn.h2`
  margin: 0 0 1rem;
  font-size: 1.3rem;
`,Fl=Mn.div`
  text-align: center;
  margin-bottom: 1.5rem;
`,Al=Mn.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: bold;
  color: white;
  background: ${e=>e.score>=80?"var(--success-color)":e.score>=50?"var(--warning-color)":"var(--error-color)"};
`,Ml=Mn.p`
  font-size: 1.1rem;
  color: var(--text-primary);
`,Ul=Mn.div`
  margin-bottom: 1.5rem;
`,Bl=Mn.div`
  display: flex;
  justify-content: space-between;
  padding: 0.8rem 0;
  border-bottom: 1px solid var(--border-color);

  &:last-child {
    border-bottom: none;
  }
`,Hl=Mn.span`
  color: var(--text-secondary);
`,Wl=Mn.span`
  font-weight: bold;
  color: var(--text-primary);
`,Vl=Mn.button`
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 4px;
  padding: 1rem;
  width: 100%;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: opacity 0.3s ease;
  margin-bottom: 1rem;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    background-color: var(--border-color);
    cursor: not-allowed;
  }
`,Gl=Mn(Vl)`
  background-color: transparent;
  color: var(--primary-color);
  border: 1px solid var(--primary-color);

  &:hover {
    background-color: var(--primary-color);
    color: white;
  }
`,Kl=()=>{const{t:e}=qe(),{components:r,addComponent:n,removeComponent:o,getCompatibilityScore:a,getPowerConsumption:i,getPerformanceScore:l,getTotalPrice:s}=(()=>{const e=(0,t.useContext)(vl);if(void 0===e)throw new Error("usePCBuilder must be used within a PCBuilderProvider");return e})(),{addToCart:c}=Qn(),u=a(),d=i(),p=l(),f=s(),m=Object.values(r).some(e=>null!==e);return(0,Bn.jsxs)(bl,{children:[(0,Bn.jsx)(Ea,{}),(0,Bn.jsx)(xl,{children:(0,Bn.jsxs)(wl,{children:[(0,Bn.jsx)(kl,{children:e("pcBuilder.title")}),(0,Bn.jsx)(Sl,{children:e("pcBuilder.subtitle")}),(0,Bn.jsxs)(jl,{children:[(0,Bn.jsx)(Cl,{children:Object.keys(yl).map(t=>(0,Bn.jsxs)(El,{children:[(0,Bn.jsx)(_l,{children:e(`pcBuilder.${t}`)}),(0,Bn.jsx)(Pl,{children:yl[t].map(e=>{var a;return(0,Bn.jsxs)(Tl,{selected:(null===(a=r[t])||void 0===a?void 0:a.id)===e.id,onClick:()=>((e,t)=>{var a;(null===(a=r[e])||void 0===a?void 0:a.id)===t.id?o(e):n(e,t)})(t,e),children:[(0,Bn.jsx)(Rl,{children:(0,Bn.jsx)("img",{src:e.image,alt:e.name})}),(0,Bn.jsxs)(zl,{children:[(0,Bn.jsx)(Ol,{children:e.name}),(0,Bn.jsx)(Nl,{children:e.brand}),(0,Bn.jsxs)($l,{children:["$",e.price.toFixed(2)]})]})]},e.id)})})]},t))}),(0,Bn.jsx)(Ll,{children:(0,Bn.jsxs)(Dl,{children:[(0,Bn.jsx)(Il,{children:e("pcBuilder.compatibility")}),(0,Bn.jsxs)(Fl,{children:[(0,Bn.jsxs)(Al,{score:u,children:[u,"%"]}),(0,Bn.jsx)(Ml,{children:e("pcBuilder.compatibilityScore")})]}),(0,Bn.jsxs)(Ul,{children:[(0,Bn.jsxs)(Bl,{children:[(0,Bn.jsx)(Hl,{children:e("pcBuilder.powerConsumption")}),(0,Bn.jsxs)(Wl,{children:[d," W"]})]}),(0,Bn.jsxs)(Bl,{children:[(0,Bn.jsx)(Hl,{children:e("pcBuilder.performanceEstimate")}),(0,Bn.jsxs)(Wl,{children:[p,"/100"]})]}),(0,Bn.jsxs)(Bl,{children:[(0,Bn.jsx)(Hl,{children:e("cart.total")}),(0,Bn.jsxs)(Wl,{children:["$",f.toFixed(2)]})]})]}),(0,Bn.jsx)(Vl,{onClick:()=>{Object.values(r).forEach(e=>{e&&c({id:e.id,name:e.name,category:e.type,price:e.price,image:e.image,description:`${e.brand} ${e.name}`,inStock:!0},1)})},disabled:!m,children:e("pcBuilder.addToCart")}),(0,Bn.jsx)(Gl,{disabled:!m,children:e("pcBuilder.saveConfig")}),(0,Bn.jsx)(Gl,{disabled:!m,children:e("pcBuilder.shareConfig")})]})})]})]})}),(0,Bn.jsx)(ui,{})]})},Xl=Mn.div`
  background-color: var(--background-color);
  color: var(--text-primary);
  min-height: 100vh;
  padding: 2rem;
`,Ql=Mn.section`
  text-align: center;
  margin-bottom: 2rem;
`,ql=Mn.h1`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
`,Yl=Mn.p`
  font-size: 1.2rem;
  color: var(--text-secondary);
`,Zl=Mn.section`
  max-width: 1200px;
  margin: 0 auto;
`,Jl=Mn.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
  align-items: center;
`,es=Mn.button`
  padding: 0.6rem 1.2rem;
  background-color: ${e=>{let{active:t}=e;return t?"var(--primary-color)":"transparent"}};
  color: ${e=>{let{active:t}=e;return t?"white":"var(--text-primary)"}};
  border: 1px solid var(--primary-color);
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--primary-color);
    color: white;
  }
`,ts=Mn.input`
  flex-grow: 1;
  padding: 0.6rem 1rem;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  background-color: var(--surface-color);
  color: var(--text-primary);

  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }
`,rs=Mn.div`
  font-size: 2rem;
  text-align: center;
  padding: 4rem;
`,ns=Mn.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`,os=Mn.div`
  background-color: var(--surface-color);
  border-radius: 8px;
  box-shadow: 0 2px 8px var(--shadow-color);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,as=Mn.div`
  background-image: url(${e=>{let{image:t}=e;return t}});
  background-size: cover;
  background-position: center;
  height: 180px;
  position: relative;
`,is=Mn.span`
  position: absolute;
  top: 8px;
  left: 8px;
  background-color: ${e=>{let{type:t}=e;return"premium"===t?"gold":"trial"===t?"dodgerblue":"subscription"===t?"mediumseagreen":"gray"}};
  color: white;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  font-weight: bold;
  font-size: 0.75rem;
`,ls=Mn.div`
  padding: 1rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`,ss=Mn.h3`
  margin: 0 0 0.5rem;
  font-size: 1.2rem;
`,cs=Mn.p`
  flex-grow: 1;
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
`,us=Mn.ul`
  list-style-type: disc;
  margin: 0 0 1rem 1.2rem;
  padding: 0;
  font-size: 0.85rem;
  color: var(--text-secondary);
`,ds=Mn.li``,ps=Mn.div`
  margin-bottom: 1rem;
`,fs=Mn.div`
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
`,ms=Mn.span`
  font-weight: bold;
  color: var(--text-primary);
  font-size: 1.1rem;
`,hs=Mn.span`
  text-decoration: line-through;
  color: var(--text-secondary);
  font-size: 0.9rem;
`,gs=Mn.span`
  background-color: var(--error-color);
  color: white;
  border-radius: 4px;
  padding: 0.1rem 0.4rem;
  font-size: 0.75rem;
`,vs=Mn.div`
  display: flex;
  gap: 1rem;
`,ys=Mn.button`
  flex-grow: 1;
  background-color: var(--primary-color);
  border: none;
  color: white;
  padding: 0.7rem;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--secondary-color);
  }
`,bs=Mn.button`
  background-color: transparent;
  border: 1px solid var(--primary-color);
  color: var(--primary-color);
  padding: 0.7rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--primary-color);
    color: white;
  }
`,xs=()=>{const[e,r]=(0,t.useState)([]),[n,o]=(0,t.useState)([]),[a,i]=(0,t.useState)("all"),[l,s]=(0,t.useState)(""),[c,u]=(0,t.useState)(!0),{isRTL:d}=Gn(),{t:p}=qe(),{user:f}=Wn(),{addToCart:m}=Qn(),{showToast:h}=mi(),g=[{id:"all",name:p("allCategories")||"\u0627\u0644\u0643\u0644"},{id:"design",name:p("design")||"\u062a\u0635\u0645\u064a\u0645"},{id:"utility",name:p("utility")||"\u0623\u062f\u0648\u0627\u062a"},{id:"security",name:p("security")||"\u0623\u0645\u0627\u0646"}],v=[{id:"sw1",name:"\u0628\u0631\u0646\u0627\u0645\u062c \u0641\u0648\u062a\u0648\u0634\u0648\u0628",description:"\u0628\u0631\u0646\u0627\u0645\u062c \u062a\u062d\u0631\u064a\u0631 \u0627\u0644\u0635\u0648\u0631 \u0627\u0644\u0627\u062d\u062a\u0631\u0627\u0641\u064a",image:"/images/photoshop.jpg",type:"premium",features:["\u062a\u0639\u062f\u064a\u0644 \u0645\u062a\u0642\u062f\u0645 \u0644\u0644\u0635\u0648\u0631","\u062f\u0639\u0645 \u0627\u0644\u0637\u0628\u0642\u0627\u062a","\u0623\u062f\u0648\u0627\u062a \u0627\u062d\u062a\u0631\u0627\u0641\u064a\u0629"],currentPrice:99.99,originalPrice:149.99,discount:33,category:"design"},{id:"sw2",name:"\u0628\u0631\u0646\u0627\u0645\u062c \u062a\u062c\u0631\u064a\u0628\u064a",description:"\u0646\u0633\u062e\u0629 \u062a\u062c\u0631\u064a\u0628\u064a\u0629 \u0645\u062c\u0627\u0646\u064a\u0629",image:"/images/trial.jpg",type:"trial",features:["\u0645\u062f\u0629 30 \u064a\u0648\u0645","\u062a\u062c\u0631\u0628\u0629 \u0643\u0627\u0645\u0644\u0629"],currentPrice:0,category:"utility"},{id:"sw3",name:"\u0628\u0631\u0646\u0627\u0645\u062c \u0623\u0645\u0627\u0646",description:"\u062d\u0645\u0627\u064a\u0629 \u0645\u062a\u0642\u062f\u0645\u0629 \u0644\u062c\u0647\u0627\u0632\u0643",image:"/images/security.jpg",type:"subscription",features:["\u0645\u0643\u0627\u0641\u062d\u0629 \u0641\u064a\u0631\u0648\u0633\u0627\u062a","\u062c\u062f\u0627\u0631 \u062d\u0645\u0627\u064a\u0629","\u062a\u062d\u062f\u064a\u062b\u0627\u062a \u062a\u0644\u0642\u0627\u0626\u064a\u0629"],currentPrice:49.99,originalPrice:59.99,discount:17,category:"security"}];(0,t.useEffect)(()=>{setTimeout(()=>{r(v),o(v),u(!1)},1e3)},[]),(0,t.useEffect)(()=>{let t=e;"all"!==a&&(t=t.filter(e=>e.category===a)),l&&(t=t.filter(e=>e.name.toLowerCase().includes(l.toLowerCase())||e.description.toLowerCase().includes(l.toLowerCase()))),o(t)},[e,a,l]);const y=e=>{switch(e){case"premium":return p("premium")||"\u0645\u062f\u0641\u0648\u0639";case"trial":return p("trial")||"\u062a\u062c\u0631\u064a\u0628\u064a";case"subscription":return p("subscription")||"\u0627\u0634\u062a\u0631\u0627\u0643";default:return""}};return(0,Bn.jsxs)(Xl,{dir:d?"rtl":"ltr",children:[(0,Bn.jsx)(Ea,{}),(0,Bn.jsxs)(Ql,{children:[(0,Bn.jsx)(ql,{children:p("premiumSoftware")||"\u0627\u0644\u0628\u0631\u0627\u0645\u062c \u0627\u0644\u0645\u062f\u0641\u0648\u0639\u0629"}),(0,Bn.jsx)(Yl,{children:p("premiumSoftwareDescription")||"\u0627\u0643\u062a\u0634\u0641 \u0645\u062c\u0645\u0648\u0639\u0629 \u0648\u0627\u0633\u0639\u0629 \u0645\u0646 \u0627\u0644\u0628\u0631\u0627\u0645\u062c \u0627\u0644\u0645\u062a\u062e\u0635\u0635\u0629 \u0648\u0627\u0644\u0623\u062f\u0648\u0627\u062a \u0627\u0644\u0627\u062d\u062a\u0631\u0627\u0641\u064a\u0629"})]}),(0,Bn.jsxs)(Zl,{children:[(0,Bn.jsxs)(Jl,{children:[g.map(e=>(0,Bn.jsx)(es,{active:a===e.id,onClick:()=>i(e.id),children:e.name},e.id)),(0,Bn.jsx)(ts,{type:"text",placeholder:p("searchSoftware")||"\u0627\u0644\u0628\u062d\u062b \u0641\u064a \u0627\u0644\u0628\u0631\u0627\u0645\u062c...",value:l,onChange:e=>s(e.target.value)})]}),c?(0,Bn.jsx)(rs,{children:"\u23f3"}):(0,Bn.jsx)(ns,{children:n.map(e=>(0,Bn.jsxs)(os,{children:[(0,Bn.jsx)(as,{image:e.image,children:(0,Bn.jsx)(is,{type:e.type,children:y(e.type)})}),(0,Bn.jsxs)(ls,{children:[(0,Bn.jsx)(ss,{children:e.name}),(0,Bn.jsx)(cs,{children:e.description}),(0,Bn.jsx)(us,{children:e.features.slice(0,3).map((e,t)=>(0,Bn.jsx)(ds,{children:e},t))}),(0,Bn.jsx)(ps,{children:(0,Bn.jsxs)(fs,{children:[(0,Bn.jsxs)(ms,{children:["$",e.currentPrice]}),e.originalPrice&&(0,Bn.jsxs)(hs,{children:["$",e.originalPrice]}),e.discount&&(0,Bn.jsxs)(gs,{children:["-",e.discount,"%"]})]})}),(0,Bn.jsxs)(vs,{children:["trial"===e.type?(0,Bn.jsx)(ys,{onClick:()=>{f?h(p("trialStarted")||"\u062a\u0645 \u0628\u062f\u0621 \u0627\u0644\u0646\u0633\u062e\u0629 \u0627\u0644\u062a\u062c\u0631\u064a\u0628\u064a\u0629","success"):h(p("loginRequired")||"\u064a\u0631\u062c\u0649 \u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644 \u0623\u0648\u0644\u0627\u064b","info")},children:p("startTrial")||"\u0628\u062f\u0621 \u0627\u0644\u062a\u062c\u0631\u0628\u0629"}):(0,Bn.jsx)(ys,{onClick:()=>(e=>{f?(m({id:e.id,name:e.name,price:e.currentPrice,image:e.image,description:e.description,category:"software",inStock:!0},1),h(p("addedToCart")||"\u062a\u0645 \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0628\u0631\u0646\u0627\u0645\u062c \u0625\u0644\u0649 \u0627\u0644\u0633\u0644\u0629","success")):h(p("loginRequired")||"\u064a\u0631\u062c\u0649 \u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644 \u0623\u0648\u0644\u0627\u064b","info")})(e),children:p("addToCart")||"\u0625\u0636\u0627\u0641\u0629 \u0644\u0644\u0633\u0644\u0629"}),(0,Bn.jsx)(bs,{children:p("viewDetails")||"\u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644"})]})]})]},e.id))}),0===n.length&&!c&&(0,Bn.jsx)("div",{style:{textAlign:"center",padding:"3rem",color:"#666"},children:p("noSoftwareFound")||"\u0644\u0645 \u064a\u062a\u0645 \u0627\u0644\u0639\u062b\u0648\u0631 \u0639\u0644\u0649 \u0628\u0631\u0627\u0645\u062c"})]}),(0,Bn.jsx)(ui,{})]})},ws=Mn.div`
  min-height: 100vh;
  background: var(--background-color);
`,ks=Mn.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`,Ss=Mn.div`
  background: var(--surface-color);
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
  border: 1px solid var(--border-color);
  text-align: center;
`,js=Mn.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3rem;
  font-weight: 700;
  margin: 0 auto 1rem;
  position: relative;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`,Cs=Mn.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`,Es=Mn.h1`
  color: var(--text-primary);
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`,_s=Mn.p`
  color: var(--text-secondary);
  font-size: 1.1rem;
  margin-bottom: 1rem;
`,Ps=Mn.div`
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  background: ${e=>e.isAdmin?"#ff6b35":"#4CAF50"};
  color: white;
  font-weight: 600;
  font-size: 0.9rem;
`,Ts=Mn.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid var(--border-color);
`,Rs=Mn.button`
  padding: 1rem 1.5rem;
  border: none;
  background: none;
  color: ${e=>e.active?"var(--primary-color)":"var(--text-secondary)"};
  font-weight: 600;
  cursor: pointer;
  border-bottom: 2px solid ${e=>e.active?"var(--primary-color)":"transparent"};
  transition: all 0.2s;

  &:hover {
    color: var(--primary-color);
  }
`,zs=Mn.div`
  background: var(--surface-color);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 2rem;
`,Os=Mn.div`
  margin-bottom: 1.5rem;
`,Ns=Mn.label`
  display: block;
  color: var(--text-primary);
  font-weight: 600;
  margin-bottom: 0.5rem;
`,$s=Mn.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background: var(--background-color);
  color: var(--text-primary);
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px var(--primary-color)20;
  }
`,Ls=Mn.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background: var(--background-color);
  color: var(--text-primary);
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px var(--primary-color)20;
  }
`,Ds=Mn.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 2rem;
`,Is=Mn.button`
  padding: 0.75rem 1.5rem;
  border: 1px solid ${e=>"primary"===e.variant?"var(--primary-color)":"var(--border-color)"};
  background: ${e=>"primary"===e.variant?"var(--primary-color)":"var(--surface-color)"};
  color: ${e=>"primary"===e.variant?"white":"var(--text-primary)"};
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${e=>"primary"===e.variant?"var(--primary-color)":"var(--surface-color)"};
    transform: translateY(-1px);
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`,Fs=Mn.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`,As=Mn.div`
  background: var(--surface-color);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
`,Ms=Mn.div`
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
`,Us=Mn.div`
  color: var(--text-secondary);
  font-size: 0.9rem;
`,Bs=Mn.div`
  background: var(--surface-color);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1rem;
`,Hs=Mn.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`,Ws=Mn.span`
  font-weight: 600;
  color: var(--text-primary);
`,Vs=Mn.span`
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
  color: white;
  background: ${e=>{switch(e.status){case"completed":return"#4CAF50";case"pending":return"#ff9800";case"cancelled":return"#f44336";default:return"#666"}}};
`,Gs=Mn.div`
  color: var(--text-secondary);
  font-size: 0.9rem;
`,Ks=()=>{const[e,r]=(0,t.useState)("profile"),[n,o]=(0,t.useState)(!1),[a,i]=(0,t.useState)({username:"",email:"",bio:"",phone:"",address:""}),{user:l,updateProfile:s,isAdmin:c}=Wn(),{isRTL:u}=Gn(),{t:d}=qe(),{showToast:p}=mi();(0,t.useEffect)(()=>{l&&i({username:l.username||"",email:l.email||"",bio:"",phone:"",address:""})},[l]);const f=e=>{i({...a,[e.target.name]:e.target.value})},m=12,h=2450,g=8,v=5;return l?(0,Bn.jsxs)(ws,{dir:u?"rtl":"ltr",children:[(0,Bn.jsx)(Ea,{}),(0,Bn.jsxs)(ks,{children:[(0,Bn.jsxs)(Ss,{children:[(0,Bn.jsxs)(js,{children:[l.avatar?(0,Bn.jsx)("img",{src:l.avatar,alt:l.username,style:{width:"100%",height:"100%",borderRadius:"50%"}}):(y=l.username,y.split(" ").map(e=>e[0]).join("").toUpperCase().slice(0,2)),(0,Bn.jsx)(Cs,{type:"file",accept:"image/*"})]}),(0,Bn.jsx)(Es,{children:l.username}),(0,Bn.jsx)(_s,{children:l.email}),(0,Bn.jsx)(Ps,{isAdmin:c(),children:c()?d("admin")||"\u0645\u062f\u064a\u0631":d("user")||"\u0645\u0633\u062a\u062e\u062f\u0645"})]}),(0,Bn.jsxs)(Ts,{children:[(0,Bn.jsx)(Rs,{active:"profile"===e,onClick:()=>r("profile"),children:d("personalInfo")||"\u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0627\u0644\u0634\u062e\u0635\u064a\u0629"}),(0,Bn.jsx)(Rs,{active:"orders"===e,onClick:()=>r("orders"),children:d("ordersAndStats")||"\u0627\u0644\u0637\u0644\u0628\u0627\u062a \u0648\u0627\u0644\u0625\u062d\u0635\u0627\u0626\u064a\u0627\u062a"}),(0,Bn.jsx)(Rs,{active:"security"===e,onClick:()=>r("security"),children:d("security")||"\u0627\u0644\u0623\u0645\u0627\u0646"})]}),(0,Bn.jsxs)(zs,{children:["profile"===e&&(0,Bn.jsxs)(Bn.Fragment,{children:[(0,Bn.jsxs)(Os,{children:[(0,Bn.jsx)(Ns,{children:d("username")||"\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645"}),(0,Bn.jsx)($s,{name:"username",value:a.username,onChange:f,disabled:!n})]}),(0,Bn.jsxs)(Os,{children:[(0,Bn.jsx)(Ns,{children:d("email")||"\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a"}),(0,Bn.jsx)($s,{name:"email",value:a.email,onChange:f,disabled:!n})]}),(0,Bn.jsxs)(Os,{children:[(0,Bn.jsx)(Ns,{children:d("bio")||"\u0646\u0628\u0630\u0629 \u0634\u062e\u0635\u064a\u0629"}),(0,Bn.jsx)(Ls,{name:"bio",value:a.bio,onChange:f,placeholder:d("enterBio")||"\u0623\u062f\u062e\u0644 \u0646\u0628\u0630\u0629 \u0639\u0646\u0643...",disabled:!n})]}),(0,Bn.jsxs)(Os,{children:[(0,Bn.jsx)(Ns,{children:d("phone")||"\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062a\u0641"}),(0,Bn.jsx)($s,{name:"phone",value:a.phone,onChange:f,disabled:!n})]}),(0,Bn.jsxs)(Os,{children:[(0,Bn.jsx)(Ns,{children:d("address")||"\u0627\u0644\u0639\u0646\u0648\u0627\u0646"}),(0,Bn.jsx)(Ls,{name:"address",value:a.address,onChange:f,placeholder:d("enterAddress")||"\u0623\u062f\u062e\u0644 \u0639\u0646\u0648\u0627\u0646\u0643...",disabled:!n})]}),(0,Bn.jsx)(Ds,{children:n?(0,Bn.jsxs)(Bn.Fragment,{children:[(0,Bn.jsx)(Is,{variant:"secondary",onClick:()=>o(!1),children:d("cancel")||"\u0625\u0644\u063a\u0627\u0621"}),(0,Bn.jsx)(Is,{variant:"primary",onClick:async()=>{await s({username:a.username,email:a.email})?(p(d("profileUpdated")||"\u062a\u0645 \u062a\u062d\u062f\u064a\u062b \u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0634\u062e\u0635\u064a \u0628\u0646\u062c\u0627\u062d","success"),o(!1)):p(d("updateFailed")||"\u0641\u0634\u0644 \u0641\u064a \u062a\u062d\u062f\u064a\u062b \u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0634\u062e\u0635\u064a","error")},children:d("save")||"\u062d\u0641\u0638"})]}):(0,Bn.jsx)(Is,{variant:"primary",onClick:()=>o(!0),children:d("edit")||"\u062a\u0639\u062f\u064a\u0644"})})]}),"orders"===e&&(0,Bn.jsxs)(Bn.Fragment,{children:[(0,Bn.jsxs)(Fs,{children:[(0,Bn.jsxs)(As,{children:[(0,Bn.jsx)(Ms,{children:m}),(0,Bn.jsx)(Us,{children:d("totalOrders")||"\u0625\u062c\u0645\u0627\u0644\u064a \u0627\u0644\u0637\u0644\u0628\u0627\u062a"})]}),(0,Bn.jsxs)(As,{children:[(0,Bn.jsxs)(Ms,{children:["$",h]}),(0,Bn.jsx)(Us,{children:d("totalSpent")||"\u0625\u062c\u0645\u0627\u0644\u064a \u0627\u0644\u0645\u0628\u0644\u063a \u0627\u0644\u0645\u0646\u0641\u0642"})]}),(0,Bn.jsxs)(As,{children:[(0,Bn.jsx)(Ms,{children:g}),(0,Bn.jsx)(Us,{children:d("wishlistItems")||"\u0639\u0646\u0627\u0635\u0631 \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0623\u0645\u0646\u064a\u0627\u062a"})]}),(0,Bn.jsxs)(As,{children:[(0,Bn.jsx)(Ms,{children:v}),(0,Bn.jsx)(Us,{children:d("reviewsWritten")||"\u0627\u0644\u062a\u0642\u064a\u064a\u0645\u0627\u062a \u0627\u0644\u0645\u0643\u062a\u0648\u0628\u0629"})]})]}),(0,Bn.jsx)("h3",{style:{marginBottom:"1.5rem",color:"var(--text-primary)"},children:d("recentOrders")||"\u0627\u0644\u0637\u0644\u0628\u0627\u062a \u0627\u0644\u0623\u062e\u064a\u0631\u0629"}),[{id:"001",product:"Adobe Creative Suite",amount:599,status:"completed",date:"2024-01-15"},{id:"002",product:"Microsoft Office",amount:299,status:"pending",date:"2024-01-10"},{id:"003",product:"AutoCAD 2024",amount:1299,status:"completed",date:"2024-01-05"}].map(e=>(0,Bn.jsxs)(Bs,{children:[(0,Bn.jsxs)(Hs,{children:[(0,Bn.jsxs)(Ws,{children:["#",d("order")||"\u0637\u0644\u0628"," ",e.id]}),(0,Bn.jsx)(Vs,{status:e.status,children:"completed"===e.status?"\u0645\u0643\u062a\u0645\u0644":"pending"===e.status?"\u0645\u0639\u0644\u0642":"\u0645\u0644\u063a\u064a"})]}),(0,Bn.jsxs)(Gs,{children:[(0,Bn.jsx)("div",{children:(0,Bn.jsx)("strong",{children:e.product})}),(0,Bn.jsxs)("div",{children:[d("amount")||"\u0627\u0644\u0645\u0628\u0644\u063a",": $",e.amount]}),(0,Bn.jsxs)("div",{children:[d("date")||"\u0627\u0644\u062a\u0627\u0631\u064a\u062e",": ",e.date]})]})]},e.id))]}),"security"===e&&(0,Bn.jsx)("div",{style:{textAlign:"center",padding:"2rem",color:"#666"},children:d("securitySettings")||"\u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0627\u0644\u0623\u0645\u0627\u0646 \u0642\u064a\u062f \u0627\u0644\u062a\u0637\u0648\u064a\u0631"})]})]}),(0,Bn.jsx)(ui,{})]}):null;var y},Xs=Mn.div`
  background-color: var(--surface-color);
  border-radius: 8px;
  box-shadow: 0 2px 8px var(--shadow-color);
  padding: 1.5rem;
   margin-bottom: 1.5rem;
`,Qs=Mn.h3`
  margin: 0 0 1rem;
  color: var(--text-primary);
  font-size: 1.2rem;
`,qs=Mn.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,Ys=Mn.li`
  margin-bottom: 0.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`,Zs=Mn.button`
  background: none;
  border: none;
  text-align: left;
  padding: 0.5rem 0;
  width: 100%;
  cursor: pointer;
  color: ${e=>{let{active:t}=e;return t?"var(--primary-color)":"var(--text-primary)"}};
  font-weight: ${e=>{let{active:t}=e;return t?"bold":"normal"}};
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--primary-color);
  }
`,Js=Mn.span`
  background-color: var(--background-color);
  color: var(--text-secondary);
  border-radius: 12px;
  padding: 0.1rem 0.5rem;
  font-size: 0.8rem;
  margin-left: 0.5rem;
`,ec=e=>{let{categories:t,selectedCategory:r,onSelectCategory:n}=e;const{t:o}=qe();return(0,Bn.jsxs)(Xs,{children:[(0,Bn.jsx)(Qs,{children:o("store.categories")}),(0,Bn.jsxs)(qs,{children:[(0,Bn.jsx)(Ys,{children:(0,Bn.jsxs)(Zs,{active:null===r,onClick:()=>n(null),children:[o("store.allCategories"),(0,Bn.jsx)(Js,{children:t.length})]})}),t.map(e=>(0,Bn.jsx)(Ys,{children:(0,Bn.jsxs)(Zs,{active:r===e,onClick:()=>n(e),children:[o(`categories.${e.toLowerCase()}`),(0,Bn.jsx)(Js,{children:"10"})," "]})},e))]})]})},tc=Mn.div`
  background-color: var(--surface-color);
  border-radius: 8px;
  box-shadow: 0 2px 8px var(--shadow-color);
  padding: 1.5rem;
  margin-bottom: 1.5rem;
`,rc=Mn.h3`
  margin: 0 0 1rem;
  color: var(--text-primary);
  font-size: 1.2rem;
`,nc=Mn.div`
  margin-bottom: 1rem;
`,oc=Mn.div`
  position: relative;
  height: 6px;
  background-color: var(--border-color);
  border-radius: 3px;
  margin: 1.5rem 0;
`,ac=Mn.div`
  position: absolute;
  height: 100%;
  background-color: var(--primary-color);
  border-radius: 3px;
  left: ${e=>e.left}%;
  width: ${e=>e.width}%;
`,ic=Mn.div`
  position: absolute;
  width: 18px;
  height: 18px;
  background-color: var(--primary-color);
  border-radius: 50%;
  top: 50%;
  left: ${e=>e.position}%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  z-index: 2;
`,lc=Mn.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,sc=Mn.div`
  display: flex;
  align-items: center;
`,cc=Mn.span`
  color: var(--text-secondary);
  margin-right: 0.5rem;
  font-size: 0.9rem;
`,uc=Mn.input`
  width: 80px;
  padding: 0.5rem;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  background-color: var(--background-color);
  color: var(--text-primary);
  text-align: center;

  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }
`,dc=Mn.span`
  margin: 0 0.5rem;
  color: var(--text-secondary);
`,pc=Mn.button`
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  cursor: pointer;
  transition: opacity 0.3s ease;
  margin-top: 1rem;
  width: 100%;

  &:hover {
    opacity: 0.9;
  }
`,fc=e=>{let{minPrice:r,maxPrice:n,currentMin:o,currentMax:a,onPriceChange:i}=e;const{t:l}=qe(),[s,c]=t.useState(o),[u,d]=t.useState(a),p=n-r,f=(s-r)/p*100,m=(u-r)/p*100,h=m-f;return(0,Bn.jsxs)(tc,{children:[(0,Bn.jsx)(rc,{children:l("store.priceRange")}),(0,Bn.jsxs)(nc,{children:[(0,Bn.jsxs)(oc,{children:[(0,Bn.jsx)(ac,{left:f,width:h}),(0,Bn.jsx)(ic,{position:f}),(0,Bn.jsx)(ic,{position:m})]}),(0,Bn.jsxs)(lc,{children:[(0,Bn.jsxs)(sc,{children:[(0,Bn.jsx)(cc,{children:l("store.min")}),(0,Bn.jsx)(uc,{type:"number",value:s,onChange:e=>{const t=parseInt(e.target.value);!isNaN(t)&&t>=r&&t<=u&&c(t)},min:r,max:u})]}),(0,Bn.jsx)(dc,{children:"-"}),(0,Bn.jsxs)(sc,{children:[(0,Bn.jsx)(cc,{children:l("store.max")}),(0,Bn.jsx)(uc,{type:"number",value:u,onChange:e=>{const t=parseInt(e.target.value);!isNaN(t)&&t<=n&&t>=s&&d(t)},min:s,max:n})]})]})]}),(0,Bn.jsx)(pc,{onClick:()=>{i(s,u)},children:l("store.applyFilter")})]})},mc=[{id:"1",name:"PlayStation 5 Digital Edition",category:"games",price:399.99,image:"https://upload.wikimedia.org/wikipedia/commons/0/0e/PlayStation_5_Console_and_DualSense_Controller.jpg",description:"Next-gen gaming console with lightning-fast loading times and stunning graphics.",inStock:!0,isNew:!0},{id:"2",name:"Xbox Series X",category:"games",price:499.99,image:"https://upload.wikimedia.org/wikipedia/commons/4/43/Xbox_Series_X_and_Controller.png",description:"The most powerful Xbox ever with 4K gaming and high frame rates.",inStock:!0},{id:"3",name:"Logitech G Pro X Gaming Headset",category:"accessories",price:129.99,discountPrice:99.99,image:"https://resource.logitechg.com/content/dam/gaming/en/products/g-pro-x/g-pro-x-headset-gallery-1.png",description:"Professional-grade gaming headset with Blue VO!CE microphone technology.",inStock:!0},{id:"4",name:"NVIDIA GeForce RTX 3080",category:"components",price:699.99,image:"https://images.nvidia.com/geforce/gallery/rtx-3080/gallery-01.png",description:"High-end graphics card for ultimate gaming performance.",inStock:!1},{id:"5",name:"AMD Ryzen 9 5900X",category:"components",price:549.99,discountPrice:499.99,image:"https://upload.wikimedia.org/wikipedia/commons/3/3e/AMD_Ryzen_9_5900X_Processor.png",description:"12-core, 24-thread processor for demanding tasks and gaming.",inStock:!0},{id:"6",name:"Razer DeathAdder V2 Gaming Mouse",category:"peripherals",price:69.99,image:"https://assets2.razerzone.com/images/pnx.assets/2b48496fa03c3d0be28aa4fa4f4edc9d/deathadder-v2-gallery-01.jpg",description:"High-precision gaming mouse with optical switches.",inStock:!0},{id:"7",name:'Samsung Odyssey G7 32" Gaming Monitor',category:"peripherals",price:799.99,discountPrice:649.99,image:"https://images.samsung.com/is/image/samsung/p6pim/levant/odyssey-g7-lc32g75tqsnxza-frontblack-282842214?$720_576_PNG$",description:"Curved QLED gaming monitor with 240Hz refresh rate and 1ms response time.",inStock:!0},{id:"8",name:"Corsair Vengeance RGB Pro 32GB RAM",category:"components",price:159.99,image:"https://www.corsair.com/medias/sys_master/images/images/h24/h8d/9135015649886/-CH-256A-CPD-32GB-DDR4-3600MHz-C16-VE_RGB_PRO-DIMM.png",description:"High-performance DDR4 memory with RGB lighting.",inStock:!0}],hc=Mn.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`,gc=Mn.main`
  flex: 1;
  padding: 2rem 0;
`,vc=Mn.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`,yc=Mn.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,bc=Mn.aside`
  @media (max-width: 768px) {
    display: none;
  }
`,xc=Mn.div`
  display: none;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    display: block;
  }
`,wc=Mn.button`
  background-color: var(--surface-color);
  border: 1px solid var(--border-color);
  color: var(--text-primary);
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  &:hover {
    background-color: var(--background-color);
  }
`,kc=Mn.span`
  margin-right: 0.5rem;
`,Sc=()=>{const{t:e}=qe(),[r,n]=t.useState(null),[o,a]=t.useState({min:0,max:1e3}),[i,l]=t.useState(!1),s=Array.from(new Set(mc.map(e=>e.category))),c=(e,t)=>{a({min:e,max:t})},u=mc.filter(e=>{var t;const n=null!==(t=e.discountPrice)&&void 0!==t?t:e.price,a=!r||e.category===r,i=n>=o.min&&n<=o.max;return a&&i});return(0,Bn.jsxs)(hc,{children:[(0,Bn.jsx)(Ea,{}),(0,Bn.jsx)(gc,{children:(0,Bn.jsxs)(vc,{children:[(0,Bn.jsx)("h1",{children:e("nav.store")||"Store"}),(0,Bn.jsxs)(xc,{children:[(0,Bn.jsxs)(wc,{onClick:()=>{l(e=>!e)},children:[(0,Bn.jsx)(kc,{children:"\ud83d\udd0d"}),e("store.filters")||"Filters"]}),i&&(0,Bn.jsxs)(Bn.Fragment,{children:[(0,Bn.jsx)(ec,{categories:s,selectedCategory:r,onSelectCategory:n}),(0,Bn.jsx)(fc,{minPrice:0,maxPrice:1e3,currentMin:o.min,currentMax:o.max,onPriceChange:c})]})]}),(0,Bn.jsxs)(yc,{children:[(0,Bn.jsxs)(bc,{children:[(0,Bn.jsx)(ec,{categories:s,selectedCategory:r,onSelectCategory:n}),(0,Bn.jsx)(fc,{minPrice:0,maxPrice:1e3,currentMin:o.min,currentMax:o.max,onPriceChange:c})]}),(0,Bn.jsx)("div",{children:(0,Bn.jsx)(Li,{products:u,title:r?e(`categories.${r.toLowerCase()}`)||r:e("store.allProducts")||"All Products"})})]})]})}),(0,Bn.jsx)(ui,{})]})};const jc=function(){const{i18n:e,t:r}=qe();return(0,t.useEffect)(()=>{const t=navigator.language.startsWith("ar")?"ar":"en";e.changeLanguage(t)},[e]),(0,Bn.jsxs)(je,{children:[(0,Bn.jsxs)("div",{style:{padding:"10px",textAlign:"center"},children:[(0,Bn.jsx)("button",{onClick:()=>e.changeLanguage("en"),style:{margin:"0 10px",padding:"5px 15px"},children:"English"}),(0,Bn.jsx)("button",{onClick:()=>e.changeLanguage("ar"),style:{margin:"0 10px",padding:"5px 15px"},children:"\u0627\u0644\u0639\u0631\u0628\u064a\u0629"})]}),(0,Bn.jsxs)("nav",{style:{marginBottom:20,textAlign:"center"},children:[(0,Bn.jsx)(_e,{to:"/",style:{margin:"0 10px"},children:r("nav.home","Home")}),(0,Bn.jsx)(_e,{to:"/store",style:{margin:"0 10px"},children:r("nav.store","Store")}),(0,Bn.jsx)(_e,{to:"/pc-builder",style:{margin:"0 10px"},children:r("nav.pcBuilder","PC Builder")}),(0,Bn.jsx)(_e,{to:"/cart",style:{margin:"0 10px"},children:r("nav.cart","Cart")}),(0,Bn.jsx)(_e,{to:"/admin",style:{margin:"0 10px"},children:r("nav.admin","Admin")}),(0,Bn.jsx)(_e,{to:"/profile",style:{margin:"0 10px"},children:r("nav.profile","Profile")}),(0,Bn.jsx)(_e,{to:"/premium-software",style:{margin:"0 10px"},children:r("nav.premiumSoftware","Premium Software")})]}),(0,Bn.jsxs)(ve,{children:[(0,Bn.jsx)(he,{path:"/",element:(0,Bn.jsx)(gl,{})}),(0,Bn.jsx)(he,{path:"/store",element:(0,Bn.jsx)(Sc,{})}),(0,Bn.jsx)(he,{path:"/pc-builder",element:(0,Bn.jsx)(Kl,{})}),(0,Bn.jsx)(he,{path:"/cart",element:(0,Bn.jsx)("div",{style:{textAlign:"center"},children:(0,Bn.jsx)("h2",{children:"Cart Page"})})}),(0,Bn.jsx)(he,{path:"/admin",element:(0,Bn.jsx)(oi,{})}),(0,Bn.jsx)(he,{path:"/profile",element:(0,Bn.jsx)(Ks,{})}),(0,Bn.jsx)(he,{path:"/premium-software",element:(0,Bn.jsx)(xs,{})})]})]})},Cc=document.getElementById("root");if(!Cc)throw new Error("Failed to find the root element");o.createRoot(Cc).render((0,Bn.jsx)(t.StrictMode,{children:(0,Bn.jsx)(Se,{children:(0,Bn.jsx)(jc,{})})}));const Ec=e=>{e&&e instanceof Function&&r.e(453).then(r.bind(r,453)).then(t=>{let{getCLS:r,getFID:n,getFCP:o,getLCP:a,getTTFB:i}=t;r(e),n(e),o(e),a(e),i(e)})},_c=document.getElementById("root");if(!_c)throw new Error("Root container not found. Make sure your HTML has a <div id='root'></div>");o.createRoot(_c).render((0,Bn.jsx)(t.StrictMode,{children:(0,Bn.jsx)(jc,{})})),Ec()})()})();
//# sourceMappingURL=main.6227930b.js.map