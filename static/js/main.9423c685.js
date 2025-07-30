/*! For license information please see main.9423c685.js.LICENSE.txt */
(()=>{var e={43:(e,t,r)=>{"use strict";e.exports=r(202)},153:(e,t,r)=>{"use strict";var n=r(43),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var n,a={},c=null,u=null;for(n in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,n)&&!s.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:o,type:e,key:c,ref:u,props:a,_owner:l.current}}t.Fragment=a,t.jsx=c,t.jsxs=c},202:(e,t)=>{"use strict";var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),s=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),f=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function v(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||h}function y(){}function b(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=v.prototype;var x=b.prototype=new y;x.constructor=b,m(x,v.prototype),x.isPureReactComponent=!0;var w=Array.isArray,S=Object.prototype.hasOwnProperty,k={current:null},j={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,n){var o,a={},i=null,l=null;if(null!=t)for(o in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)S.call(t,o)&&!j.hasOwnProperty(o)&&(a[o]=t[o]);var s=arguments.length-2;if(1===s)a.children=n;else if(1<s){for(var c=Array(s),u=0;u<s;u++)c[u]=arguments[u+2];a.children=c}if(e&&e.defaultProps)for(o in s=e.defaultProps)void 0===a[o]&&(a[o]=s[o]);return{$$typeof:r,type:e,key:i,ref:l,props:a,_owner:k.current}}function E(e){return"object"===typeof e&&null!==e&&e.$$typeof===r}var P=/\/+/g;function O(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(e){return t[e]})}(""+e.key):t.toString(36)}function _(e,t,o,a,i){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s=!1;if(null===e)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case r:case n:s=!0}}if(s)return i=i(s=e),e=""===a?"."+O(s,0):a,w(i)?(o="",null!=e&&(o=e.replace(P,"$&/")+"/"),_(i,t,o,"",function(e){return e})):null!=i&&(E(i)&&(i=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,o+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(P,"$&/")+"/")+e)),t.push(i)),1;if(s=0,a=""===a?".":a+":",w(e))for(var c=0;c<e.length;c++){var u=a+O(l=e[c],c);s+=_(l,t,o,u,i)}else if(u=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"===typeof u)for(e=u.call(e),c=0;!(l=e.next()).done;)s+=_(l=l.value,t,o,u=a+O(l,c++),i);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function R(e,t,r){if(null==e)return e;var n=[],o=0;return _(e,n,"","",function(e){return t.call(r,e,o++)}),n}function N(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)},function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var T={current:null},L={transition:null},z={ReactCurrentDispatcher:T,ReactCurrentBatchConfig:L,ReactCurrentOwner:k};function D(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:R,forEach:function(e,t,r){R(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return R(e,function(){t++}),t},toArray:function(e){return R(e,function(e){return e})||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=o,t.Profiler=i,t.PureComponent=b,t.StrictMode=a,t.Suspense=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=z,t.act=D,t.cloneElement=function(e,t,n){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=m({},e.props),a=e.key,i=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,l=k.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in t)S.call(t,c)&&!j.hasOwnProperty(c)&&(o[c]=void 0===t[c]&&void 0!==s?s[c]:t[c])}var c=arguments.length-2;if(1===c)o.children=n;else if(1<c){s=Array(c);for(var u=0;u<c;u++)s[u]=arguments[u+2];o.children=s}return{$$typeof:r,type:e.type,key:a,ref:i,props:o,_owner:l}},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=C,t.createFactory=function(e){var t=C.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:N}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=L.transition;L.transition={};try{e()}finally{L.transition=t}},t.unstable_act=D,t.useCallback=function(e,t){return T.current.useCallback(e,t)},t.useContext=function(e){return T.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return T.current.useDeferredValue(e)},t.useEffect=function(e,t){return T.current.useEffect(e,t)},t.useId=function(){return T.current.useId()},t.useImperativeHandle=function(e,t,r){return T.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return T.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return T.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return T.current.useMemo(e,t)},t.useReducer=function(e,t,r){return T.current.useReducer(e,t,r)},t.useRef=function(e){return T.current.useRef(e)},t.useState=function(e){return T.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return T.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return T.current.useTransition()},t.version="18.3.1"},234:(e,t)=>{"use strict";function r(e,t){var r=e.length;e.push(t);e:for(;0<r;){var n=r-1>>>1,o=e[n];if(!(0<a(o,t)))break e;e[n]=t,e[r]=o,r=n}}function n(e){return 0===e.length?null:e[0]}function o(e){if(0===e.length)return null;var t=e[0],r=e.pop();if(r!==t){e[0]=r;e:for(var n=0,o=e.length,i=o>>>1;n<i;){var l=2*(n+1)-1,s=e[l],c=l+1,u=e[c];if(0>a(s,r))c<o&&0>a(u,s)?(e[n]=u,e[c]=r,n=c):(e[n]=s,e[l]=r,n=l);else{if(!(c<o&&0>a(u,r)))break e;e[n]=u,e[c]=r,n=c}}}return t}function a(e,t){var r=e.sortIndex-t.sortIndex;return 0!==r?r:e.id-t.id}if("object"===typeof performance&&"function"===typeof performance.now){var i=performance;t.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();t.unstable_now=function(){return l.now()-s}}var c=[],u=[],d=1,p=null,f=3,h=!1,m=!1,g=!1,v="function"===typeof setTimeout?setTimeout:null,y="function"===typeof clearTimeout?clearTimeout:null,b="undefined"!==typeof setImmediate?setImmediate:null;function x(e){for(var t=n(u);null!==t;){if(null===t.callback)o(u);else{if(!(t.startTime<=e))break;o(u),t.sortIndex=t.expirationTime,r(c,t)}t=n(u)}}function w(e){if(g=!1,x(e),!m)if(null!==n(c))m=!0,L(S);else{var t=n(u);null!==t&&z(w,t.startTime-e)}}function S(e,r){m=!1,g&&(g=!1,y(E),E=-1),h=!0;var a=f;try{for(x(r),p=n(c);null!==p&&(!(p.expirationTime>r)||e&&!_());){var i=p.callback;if("function"===typeof i){p.callback=null,f=p.priorityLevel;var l=i(p.expirationTime<=r);r=t.unstable_now(),"function"===typeof l?p.callback=l:p===n(c)&&o(c),x(r)}else o(c);p=n(c)}if(null!==p)var s=!0;else{var d=n(u);null!==d&&z(w,d.startTime-r),s=!1}return s}finally{p=null,f=a,h=!1}}"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var k,j=!1,C=null,E=-1,P=5,O=-1;function _(){return!(t.unstable_now()-O<P)}function R(){if(null!==C){var e=t.unstable_now();O=e;var r=!0;try{r=C(!0,e)}finally{r?k():(j=!1,C=null)}}else j=!1}if("function"===typeof b)k=function(){b(R)};else if("undefined"!==typeof MessageChannel){var N=new MessageChannel,T=N.port2;N.port1.onmessage=R,k=function(){T.postMessage(null)}}else k=function(){v(R,0)};function L(e){C=e,j||(j=!0,k())}function z(e,r){E=v(function(){e(t.unstable_now())},r)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){m||h||(m=!0,L(S))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var r=f;f=t;try{return e()}finally{f=r}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var r=f;f=e;try{return t()}finally{f=r}},t.unstable_scheduleCallback=function(e,o,a){var i=t.unstable_now();switch("object"===typeof a&&null!==a?a="number"===typeof(a=a.delay)&&0<a?i+a:i:a=i,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5e3}return e={id:d++,callback:o,priorityLevel:e,startTime:a,expirationTime:l=a+l,sortIndex:-1},a>i?(e.sortIndex=a,r(u,e),null===n(c)&&e===n(u)&&(g?(y(E),E=-1):g=!0,z(w,a-i))):(e.sortIndex=l,r(c,e),m||h||(m=!0,L(S))),e},t.unstable_shouldYield=_,t.unstable_wrapCallback=function(e){var t=f;return function(){var r=f;f=t;try{return e.apply(this,arguments)}finally{f=r}}}},324:e=>{e.exports=function(e,t,r,n){var o=r?r.call(n,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),s=0;s<a.length;s++){var c=a[s];if(!l(c))return!1;var u=e[c],d=t[c];if(!1===(o=r?r.call(n,u,d,c):void 0)||void 0===o&&u!==d)return!1}return!0}},391:(e,t,r)=>{"use strict";var n=r(950);t.H=n.createRoot,n.hydrateRoot},579:(e,t,r)=>{"use strict";e.exports=r(153)},730:(e,t,r)=>{"use strict";var n=r(43),o=r(853);function a(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,l={};function s(e,t){c(e,t),c(e+"Capture",t)}function c(e,t){for(l[e]=t,e=0;e<t.length;e++)i.add(t[e])}var u=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),d=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,f={},h={};function m(e,t,r,n,o,a,i){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=n,this.attributeNamespace=o,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=i}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){g[e]=new m(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];g[t]=new m(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){g[e]=new m(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){g[e]=new m(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){g[e]=new m(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){g[e]=new m(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){g[e]=new m(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){g[e]=new m(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){g[e]=new m(e,5,!1,e.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function y(e){return e[1].toUpperCase()}function b(e,t,r,n){var o=g.hasOwnProperty(t)?g[t]:null;(null!==o?0!==o.type:n||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,r,n){if(null===t||"undefined"===typeof t||function(e,t,r,n){if(null!==r&&0===r.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!n&&(null!==r?!r.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,r,n))return!0;if(n)return!1;if(null!==r)switch(r.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,r,o,n)&&(r=null),n||null===o?function(e){return!!d.call(h,e)||!d.call(f,e)&&(p.test(e)?h[e]=!0:(f[e]=!0,!1))}(t)&&(null===r?e.removeAttribute(t):e.setAttribute(t,""+r)):o.mustUseProperty?e[o.propertyName]=null===r?3!==o.type&&"":r:(t=o.attributeName,n=o.attributeNamespace,null===r?e.removeAttribute(t):(r=3===(o=o.type)||4===o&&!0===r?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(v,y);g[t]=new m(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(v,y);g[t]=new m(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(v,y);g[t]=new m(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!1,!1)}),g.xlinkHref=new m("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!0,!0)});var x=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for("react.element"),S=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),E=Symbol.for("react.provider"),P=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),R=Symbol.for("react.suspense_list"),N=Symbol.for("react.memo"),T=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var L=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var z=Symbol.iterator;function D(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=z&&e[z]||e["@@iterator"])?e:null}var I,$=Object.assign;function F(e){if(void 0===I)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);I=t&&t[1]||""}return"\n"+I+e}var A=!1;function M(e,t){if(!e||A)return"";A=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var n=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){n=c}e.call(t.prototype)}else{try{throw Error()}catch(c){n=c}e()}}catch(c){if(c&&n&&"string"===typeof c.stack){for(var o=c.stack.split("\n"),a=n.stack.split("\n"),i=o.length-1,l=a.length-1;1<=i&&0<=l&&o[i]!==a[l];)l--;for(;1<=i&&0<=l;i--,l--)if(o[i]!==a[l]){if(1!==i||1!==l)do{if(i--,0>--l||o[i]!==a[l]){var s="\n"+o[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}}while(1<=i&&0<=l);break}}}finally{A=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?F(e):""}function U(e){switch(e.tag){case 5:return F(e.type);case 16:return F("Lazy");case 13:return F("Suspense");case 19:return F("SuspenseList");case 0:case 2:case 15:return e=M(e.type,!1);case 11:return e=M(e.type.render,!1);case 1:return e=M(e.type,!0);default:return""}}function B(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case k:return"Fragment";case S:return"Portal";case C:return"Profiler";case j:return"StrictMode";case _:return"Suspense";case R:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case P:return(e.displayName||"Context")+".Consumer";case E:return(e._context.displayName||"Context")+".Provider";case O:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case N:return null!==(t=e.displayName||null)?t:B(e.type)||"Memo";case T:t=e._payload,e=e._init;try{return B(e(t))}catch(r){}}return null}function H(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return B(t);case 8:return t===j?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof t)return t.displayName||t.name||null;if("string"===typeof t)return t}return null}function V(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function W(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function G(e){e._valueTracker||(e._valueTracker=function(e){var t=W(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof r&&"function"===typeof r.get&&"function"===typeof r.set){var o=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(e){n=""+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function K(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=W(e)?e.checked?"true":"false":e.value),(e=n)!==r&&(t.setValue(e),!0)}function q(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function Q(e,t){var r=t.checked;return $({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=r?r:e._wrapperState.initialChecked})}function X(e,t){var r=null==t.defaultValue?"":t.defaultValue,n=null!=t.checked?t.checked:t.defaultChecked;r=V(null!=t.value?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function Y(e,t){null!=(t=t.checked)&&b(e,"checked",t,!1)}function J(e,t){Y(e,t);var r=V(t.value),n=t.type;if(null!=r)"number"===n?(0===r&&""===e.value||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if("submit"===n||"reset"===n)return void e.removeAttribute("value");t.hasOwnProperty("value")?ee(e,t.type,r):t.hasOwnProperty("defaultValue")&&ee(e,t.type,V(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function Z(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!("submit"!==n&&"reset"!==n||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}""!==(r=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==r&&(e.name=r)}function ee(e,t,r){"number"===t&&q(e.ownerDocument)===e||(null==r?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var te=Array.isArray;function re(e,t,r,n){if(e=e.options,t){t={};for(var o=0;o<r.length;o++)t["$"+r[o]]=!0;for(r=0;r<e.length;r++)o=t.hasOwnProperty("$"+e[r].value),e[r].selected!==o&&(e[r].selected=o),o&&n&&(e[r].defaultSelected=!0)}else{for(r=""+V(r),t=null,o=0;o<e.length;o++){if(e[o].value===r)return e[o].selected=!0,void(n&&(e[o].defaultSelected=!0));null!==t||e[o].disabled||(t=e[o])}null!==t&&(t.selected=!0)}}function ne(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(a(91));return $({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function oe(e,t){var r=t.value;if(null==r){if(r=t.children,t=t.defaultValue,null!=r){if(null!=t)throw Error(a(92));if(te(r)){if(1<r.length)throw Error(a(93));r=r[0]}t=r}null==t&&(t=""),r=t}e._wrapperState={initialValue:V(r)}}function ae(e,t){var r=V(t.value),n=V(t.defaultValue);null!=r&&((r=""+r)!==e.value&&(e.value=r),null==t.defaultValue&&e.defaultValue!==r&&(e.defaultValue=r)),null!=n&&(e.defaultValue=""+n)}function ie(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function le(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function se(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?le(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ce,ue,de=(ue=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ce=ce||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ce.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,r,n){MSApp.execUnsafeLocalFunction(function(){return ue(e,t)})}:ue);function pe(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&3===r.nodeType)return void(r.nodeValue=t)}e.textContent=t}var fe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},he=["Webkit","ms","Moz","O"];function me(e,t,r){return null==t||"boolean"===typeof t||""===t?"":r||"number"!==typeof t||0===t||fe.hasOwnProperty(e)&&fe[e]?(""+t).trim():t+"px"}function ge(e,t){for(var r in e=e.style,t)if(t.hasOwnProperty(r)){var n=0===r.indexOf("--"),o=me(r,t[r],n);"float"===r&&(r="cssFloat"),n?e.setProperty(r,o):e[r]=o}}Object.keys(fe).forEach(function(e){he.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),fe[t]=fe[e]})});var ve=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ye(e,t){if(t){if(ve[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(a(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(a(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(a(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(a(62))}}function be(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xe=null;function we(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Se=null,ke=null,je=null;function Ce(e){if(e=xo(e)){if("function"!==typeof Se)throw Error(a(280));var t=e.stateNode;t&&(t=So(t),Se(e.stateNode,e.type,t))}}function Ee(e){ke?je?je.push(e):je=[e]:ke=e}function Pe(){if(ke){var e=ke,t=je;if(je=ke=null,Ce(e),t)for(e=0;e<t.length;e++)Ce(t[e])}}function Oe(e,t){return e(t)}function _e(){}var Re=!1;function Ne(e,t,r){if(Re)return e(t,r);Re=!0;try{return Oe(e,t,r)}finally{Re=!1,(null!==ke||null!==je)&&(_e(),Pe())}}function Te(e,t){var r=e.stateNode;if(null===r)return null;var n=So(r);if(null===n)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(n=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!n;break e;default:e=!1}if(e)return null;if(r&&"function"!==typeof r)throw Error(a(231,t,typeof r));return r}var Le=!1;if(u)try{var ze={};Object.defineProperty(ze,"passive",{get:function(){Le=!0}}),window.addEventListener("test",ze,ze),window.removeEventListener("test",ze,ze)}catch(ue){Le=!1}function De(e,t,r,n,o,a,i,l,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(r,c)}catch(u){this.onError(u)}}var Ie=!1,$e=null,Fe=!1,Ae=null,Me={onError:function(e){Ie=!0,$e=e}};function Ue(e,t,r,n,o,a,i,l,s){Ie=!1,$e=null,De.apply(Me,arguments)}function Be(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(r=t.return),e=t.return}while(e)}return 3===t.tag?r:null}function He(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function Ve(e){if(Be(e)!==e)throw Error(a(188))}function We(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=Be(e)))throw Error(a(188));return t!==e?null:e}for(var r=e,n=t;;){var o=r.return;if(null===o)break;var i=o.alternate;if(null===i){if(null!==(n=o.return)){r=n;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===r)return Ve(o),e;if(i===n)return Ve(o),t;i=i.sibling}throw Error(a(188))}if(r.return!==n.return)r=o,n=i;else{for(var l=!1,s=o.child;s;){if(s===r){l=!0,r=o,n=i;break}if(s===n){l=!0,n=o,r=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===r){l=!0,r=i,n=o;break}if(s===n){l=!0,n=i,r=o;break}s=s.sibling}if(!l)throw Error(a(189))}}if(r.alternate!==n)throw Error(a(190))}if(3!==r.tag)throw Error(a(188));return r.stateNode.current===r?e:t}(e))?Ge(e):null}function Ge(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=Ge(e);if(null!==t)return t;e=e.sibling}return null}var Ke=o.unstable_scheduleCallback,qe=o.unstable_cancelCallback,Qe=o.unstable_shouldYield,Xe=o.unstable_requestPaint,Ye=o.unstable_now,Je=o.unstable_getCurrentPriorityLevel,Ze=o.unstable_ImmediatePriority,et=o.unstable_UserBlockingPriority,tt=o.unstable_NormalPriority,rt=o.unstable_LowPriority,nt=o.unstable_IdlePriority,ot=null,at=null;var it=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(lt(e)/st|0)|0},lt=Math.log,st=Math.LN2;var ct=64,ut=4194304;function dt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function pt(e,t){var r=e.pendingLanes;if(0===r)return 0;var n=0,o=e.suspendedLanes,a=e.pingedLanes,i=268435455&r;if(0!==i){var l=i&~o;0!==l?n=dt(l):0!==(a&=i)&&(n=dt(a))}else 0!==(i=r&~o)?n=dt(i):0!==a&&(n=dt(a));if(0===n)return 0;if(0!==t&&t!==n&&0===(t&o)&&((o=n&-n)>=(a=t&-t)||16===o&&0!==(4194240&a)))return t;if(0!==(4&n)&&(n|=16&r),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=n;0<t;)o=1<<(r=31-it(t)),n|=e[r],t&=~o;return n}function ft(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function ht(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function mt(){var e=ct;return 0===(4194240&(ct<<=1))&&(ct=64),e}function gt(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function vt(e,t,r){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-it(t)]=r}function yt(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-it(r),o=1<<n;o&t|e[n]&t&&(e[n]|=t),r&=~o}}var bt=0;function xt(e){return 1<(e&=-e)?4<e?0!==(268435455&e)?16:536870912:4:1}var wt,St,kt,jt,Ct,Et=!1,Pt=[],Ot=null,_t=null,Rt=null,Nt=new Map,Tt=new Map,Lt=[],zt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Dt(e,t){switch(e){case"focusin":case"focusout":Ot=null;break;case"dragenter":case"dragleave":_t=null;break;case"mouseover":case"mouseout":Rt=null;break;case"pointerover":case"pointerout":Nt.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Tt.delete(t.pointerId)}}function It(e,t,r,n,o,a){return null===e||e.nativeEvent!==a?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:a,targetContainers:[o]},null!==t&&(null!==(t=xo(t))&&St(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,null!==o&&-1===t.indexOf(o)&&t.push(o),e)}function $t(e){var t=bo(e.target);if(null!==t){var r=Be(t);if(null!==r)if(13===(t=r.tag)){if(null!==(t=He(r)))return e.blockedOn=t,void Ct(e.priority,function(){kt(r)})}else if(3===t&&r.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===r.tag?r.stateNode.containerInfo:null)}e.blockedOn=null}function Ft(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var r=Qt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==r)return null!==(t=xo(r))&&St(t),e.blockedOn=r,!1;var n=new(r=e.nativeEvent).constructor(r.type,r);xe=n,r.target.dispatchEvent(n),xe=null,t.shift()}return!0}function At(e,t,r){Ft(e)&&r.delete(t)}function Mt(){Et=!1,null!==Ot&&Ft(Ot)&&(Ot=null),null!==_t&&Ft(_t)&&(_t=null),null!==Rt&&Ft(Rt)&&(Rt=null),Nt.forEach(At),Tt.forEach(At)}function Ut(e,t){e.blockedOn===t&&(e.blockedOn=null,Et||(Et=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Mt)))}function Bt(e){function t(t){return Ut(t,e)}if(0<Pt.length){Ut(Pt[0],e);for(var r=1;r<Pt.length;r++){var n=Pt[r];n.blockedOn===e&&(n.blockedOn=null)}}for(null!==Ot&&Ut(Ot,e),null!==_t&&Ut(_t,e),null!==Rt&&Ut(Rt,e),Nt.forEach(t),Tt.forEach(t),r=0;r<Lt.length;r++)(n=Lt[r]).blockedOn===e&&(n.blockedOn=null);for(;0<Lt.length&&null===(r=Lt[0]).blockedOn;)$t(r),null===r.blockedOn&&Lt.shift()}var Ht=x.ReactCurrentBatchConfig,Vt=!0;function Wt(e,t,r,n){var o=bt,a=Ht.transition;Ht.transition=null;try{bt=1,Kt(e,t,r,n)}finally{bt=o,Ht.transition=a}}function Gt(e,t,r,n){var o=bt,a=Ht.transition;Ht.transition=null;try{bt=4,Kt(e,t,r,n)}finally{bt=o,Ht.transition=a}}function Kt(e,t,r,n){if(Vt){var o=Qt(e,t,r,n);if(null===o)Vn(e,t,n,qt,r),Dt(e,n);else if(function(e,t,r,n,o){switch(t){case"focusin":return Ot=It(Ot,e,t,r,n,o),!0;case"dragenter":return _t=It(_t,e,t,r,n,o),!0;case"mouseover":return Rt=It(Rt,e,t,r,n,o),!0;case"pointerover":var a=o.pointerId;return Nt.set(a,It(Nt.get(a)||null,e,t,r,n,o)),!0;case"gotpointercapture":return a=o.pointerId,Tt.set(a,It(Tt.get(a)||null,e,t,r,n,o)),!0}return!1}(o,e,t,r,n))n.stopPropagation();else if(Dt(e,n),4&t&&-1<zt.indexOf(e)){for(;null!==o;){var a=xo(o);if(null!==a&&wt(a),null===(a=Qt(e,t,r,n))&&Vn(e,t,n,qt,r),a===o)break;o=a}null!==o&&n.stopPropagation()}else Vn(e,t,n,null,r)}}var qt=null;function Qt(e,t,r,n){if(qt=null,null!==(e=bo(e=we(n))))if(null===(t=Be(e)))e=null;else if(13===(r=t.tag)){if(null!==(e=He(t)))return e;e=null}else if(3===r){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return qt=e,null}function Xt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Je()){case Ze:return 1;case et:return 4;case tt:case rt:return 16;case nt:return 536870912;default:return 16}default:return 16}}var Yt=null,Jt=null,Zt=null;function er(){if(Zt)return Zt;var e,t,r=Jt,n=r.length,o="value"in Yt?Yt.value:Yt.textContent,a=o.length;for(e=0;e<n&&r[e]===o[e];e++);var i=n-e;for(t=1;t<=i&&r[n-t]===o[a-t];t++);return Zt=o.slice(e,1<t?1-t:void 0)}function tr(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function rr(){return!0}function nr(){return!1}function or(e){function t(t,r,n,o,a){for(var i in this._reactName=t,this._targetInst=n,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(i)&&(t=e[i],this[i]=t?t(o):o[i]);return this.isDefaultPrevented=(null!=o.defaultPrevented?o.defaultPrevented:!1===o.returnValue)?rr:nr,this.isPropagationStopped=nr,this}return $(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=rr)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=rr)},persist:function(){},isPersistent:rr}),t}var ar,ir,lr,sr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cr=or(sr),ur=$({},sr,{view:0,detail:0}),dr=or(ur),pr=$({},ur,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jr,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==lr&&(lr&&"mousemove"===e.type?(ar=e.screenX-lr.screenX,ir=e.screenY-lr.screenY):ir=ar=0,lr=e),ar)},movementY:function(e){return"movementY"in e?e.movementY:ir}}),fr=or(pr),hr=or($({},pr,{dataTransfer:0})),mr=or($({},ur,{relatedTarget:0})),gr=or($({},sr,{animationName:0,elapsedTime:0,pseudoElement:0})),vr=$({},sr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),yr=or(vr),br=or($({},sr,{data:0})),xr={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wr={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sr={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kr(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=Sr[e])&&!!t[e]}function jr(){return kr}var Cr=$({},ur,{key:function(e){if(e.key){var t=xr[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=tr(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?wr[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jr,charCode:function(e){return"keypress"===e.type?tr(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?tr(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),Er=or(Cr),Pr=or($({},pr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Or=or($({},ur,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jr})),_r=or($({},sr,{propertyName:0,elapsedTime:0,pseudoElement:0})),Rr=$({},pr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Nr=or(Rr),Tr=[9,13,27,32],Lr=u&&"CompositionEvent"in window,zr=null;u&&"documentMode"in document&&(zr=document.documentMode);var Dr=u&&"TextEvent"in window&&!zr,Ir=u&&(!Lr||zr&&8<zr&&11>=zr),$r=String.fromCharCode(32),Fr=!1;function Ar(e,t){switch(e){case"keyup":return-1!==Tr.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mr(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Ur=!1;var Br={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Br[e.type]:"textarea"===t}function Vr(e,t,r,n){Ee(n),0<(t=Gn(t,"onChange")).length&&(r=new cr("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var Wr=null,Gr=null;function Kr(e){Fn(e,0)}function qr(e){if(K(wo(e)))return e}function Qr(e,t){if("change"===e)return t}var Xr=!1;if(u){var Yr;if(u){var Jr="oninput"in document;if(!Jr){var Zr=document.createElement("div");Zr.setAttribute("oninput","return;"),Jr="function"===typeof Zr.oninput}Yr=Jr}else Yr=!1;Xr=Yr&&(!document.documentMode||9<document.documentMode)}function en(){Wr&&(Wr.detachEvent("onpropertychange",tn),Gr=Wr=null)}function tn(e){if("value"===e.propertyName&&qr(Gr)){var t=[];Vr(t,Gr,e,we(e)),Ne(Kr,t)}}function rn(e,t,r){"focusin"===e?(en(),Gr=r,(Wr=t).attachEvent("onpropertychange",tn)):"focusout"===e&&en()}function nn(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return qr(Gr)}function on(e,t){if("click"===e)return qr(t)}function an(e,t){if("input"===e||"change"===e)return qr(t)}var ln="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function sn(e,t){if(ln(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var o=r[n];if(!d.call(t,o)||!ln(e[o],t[o]))return!1}return!0}function cn(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function un(e,t){var r,n=cn(e);for(e=0;n;){if(3===n.nodeType){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=cn(n)}}function dn(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?dn(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function pn(){for(var e=window,t=q();t instanceof e.HTMLIFrameElement;){try{var r="string"===typeof t.contentWindow.location.href}catch(n){r=!1}if(!r)break;t=q((e=t.contentWindow).document)}return t}function fn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function hn(e){var t=pn(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&dn(r.ownerDocument.documentElement,r)){if(null!==n&&fn(r))if(t=n.start,void 0===(e=n.end)&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if((e=(t=r.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var o=r.textContent.length,a=Math.min(n.start,o);n=void 0===n.end?a:Math.min(n.end,o),!e.extend&&a>n&&(o=n,n=a,a=o),o=un(r,a);var i=un(r,n);o&&i&&(1!==e.rangeCount||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&((t=t.createRange()).setStart(o.node,o.offset),e.removeAllRanges(),a>n?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}for(t=[],e=r;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"===typeof r.focus&&r.focus(),r=0;r<t.length;r++)(e=t[r]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var mn=u&&"documentMode"in document&&11>=document.documentMode,gn=null,vn=null,yn=null,bn=!1;function xn(e,t,r){var n=r.window===r?r.document:9===r.nodeType?r:r.ownerDocument;bn||null==gn||gn!==q(n)||("selectionStart"in(n=gn)&&fn(n)?n={start:n.selectionStart,end:n.selectionEnd}:n={anchorNode:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset},yn&&sn(yn,n)||(yn=n,0<(n=Gn(vn,"onSelect")).length&&(t=new cr("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=gn)))}function wn(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Sn={animationend:wn("Animation","AnimationEnd"),animationiteration:wn("Animation","AnimationIteration"),animationstart:wn("Animation","AnimationStart"),transitionend:wn("Transition","TransitionEnd")},kn={},jn={};function Cn(e){if(kn[e])return kn[e];if(!Sn[e])return e;var t,r=Sn[e];for(t in r)if(r.hasOwnProperty(t)&&t in jn)return kn[e]=r[t];return e}u&&(jn=document.createElement("div").style,"AnimationEvent"in window||(delete Sn.animationend.animation,delete Sn.animationiteration.animation,delete Sn.animationstart.animation),"TransitionEvent"in window||delete Sn.transitionend.transition);var En=Cn("animationend"),Pn=Cn("animationiteration"),On=Cn("animationstart"),_n=Cn("transitionend"),Rn=new Map,Nn="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tn(e,t){Rn.set(e,t),s(t,[e])}for(var Ln=0;Ln<Nn.length;Ln++){var zn=Nn[Ln];Tn(zn.toLowerCase(),"on"+(zn[0].toUpperCase()+zn.slice(1)))}Tn(En,"onAnimationEnd"),Tn(Pn,"onAnimationIteration"),Tn(On,"onAnimationStart"),Tn("dblclick","onDoubleClick"),Tn("focusin","onFocus"),Tn("focusout","onBlur"),Tn(_n,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),s("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),s("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),s("onBeforeInput",["compositionend","keypress","textInput","paste"]),s("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Dn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),In=new Set("cancel close invalid load scroll toggle".split(" ").concat(Dn));function $n(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,function(e,t,r,n,o,i,l,s,c){if(Ue.apply(this,arguments),Ie){if(!Ie)throw Error(a(198));var u=$e;Ie=!1,$e=null,Fe||(Fe=!0,Ae=u)}}(n,t,void 0,e),e.currentTarget=null}function Fn(e,t){t=0!==(4&t);for(var r=0;r<e.length;r++){var n=e[r],o=n.event;n=n.listeners;e:{var a=void 0;if(t)for(var i=n.length-1;0<=i;i--){var l=n[i],s=l.instance,c=l.currentTarget;if(l=l.listener,s!==a&&o.isPropagationStopped())break e;$n(o,l,c),a=s}else for(i=0;i<n.length;i++){if(s=(l=n[i]).instance,c=l.currentTarget,l=l.listener,s!==a&&o.isPropagationStopped())break e;$n(o,l,c),a=s}}}if(Fe)throw e=Ae,Fe=!1,Ae=null,e}function An(e,t){var r=t[go];void 0===r&&(r=t[go]=new Set);var n=e+"__bubble";r.has(n)||(Hn(t,e,2,!1),r.add(n))}function Mn(e,t,r){var n=0;t&&(n|=4),Hn(r,e,n,t)}var Un="_reactListening"+Math.random().toString(36).slice(2);function Bn(e){if(!e[Un]){e[Un]=!0,i.forEach(function(t){"selectionchange"!==t&&(In.has(t)||Mn(t,!1,e),Mn(t,!0,e))});var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Un]||(t[Un]=!0,Mn("selectionchange",!1,t))}}function Hn(e,t,r,n){switch(Xt(t)){case 1:var o=Wt;break;case 4:o=Gt;break;default:o=Kt}r=o.bind(null,t,r,e),o=void 0,!Le||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(o=!0),n?void 0!==o?e.addEventListener(t,r,{capture:!0,passive:o}):e.addEventListener(t,r,!0):void 0!==o?e.addEventListener(t,r,{passive:o}):e.addEventListener(t,r,!1)}function Vn(e,t,r,n,o){var a=n;if(0===(1&t)&&0===(2&t)&&null!==n)e:for(;;){if(null===n)return;var i=n.tag;if(3===i||4===i){var l=n.stateNode.containerInfo;if(l===o||8===l.nodeType&&l.parentNode===o)break;if(4===i)for(i=n.return;null!==i;){var s=i.tag;if((3===s||4===s)&&((s=i.stateNode.containerInfo)===o||8===s.nodeType&&s.parentNode===o))return;i=i.return}for(;null!==l;){if(null===(i=bo(l)))return;if(5===(s=i.tag)||6===s){n=a=i;continue e}l=l.parentNode}}n=n.return}Ne(function(){var n=a,o=we(r),i=[];e:{var l=Rn.get(e);if(void 0!==l){var s=cr,c=e;switch(e){case"keypress":if(0===tr(r))break e;case"keydown":case"keyup":s=Er;break;case"focusin":c="focus",s=mr;break;case"focusout":c="blur",s=mr;break;case"beforeblur":case"afterblur":s=mr;break;case"click":if(2===r.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":s=fr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":s=hr;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":s=Or;break;case En:case Pn:case On:s=gr;break;case _n:s=_r;break;case"scroll":s=dr;break;case"wheel":s=Nr;break;case"copy":case"cut":case"paste":s=yr;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":s=Pr}var u=0!==(4&t),d=!u&&"scroll"===e,p=u?null!==l?l+"Capture":null:l;u=[];for(var f,h=n;null!==h;){var m=(f=h).stateNode;if(5===f.tag&&null!==m&&(f=m,null!==p&&(null!=(m=Te(h,p))&&u.push(Wn(h,m,f)))),d)break;h=h.return}0<u.length&&(l=new s(l,c,null,r,o),i.push({event:l,listeners:u}))}}if(0===(7&t)){if(s="mouseout"===e||"pointerout"===e,(!(l="mouseover"===e||"pointerover"===e)||r===xe||!(c=r.relatedTarget||r.fromElement)||!bo(c)&&!c[mo])&&(s||l)&&(l=o.window===o?o:(l=o.ownerDocument)?l.defaultView||l.parentWindow:window,s?(s=n,null!==(c=(c=r.relatedTarget||r.toElement)?bo(c):null)&&(c!==(d=Be(c))||5!==c.tag&&6!==c.tag)&&(c=null)):(s=null,c=n),s!==c)){if(u=fr,m="onMouseLeave",p="onMouseEnter",h="mouse","pointerout"!==e&&"pointerover"!==e||(u=Pr,m="onPointerLeave",p="onPointerEnter",h="pointer"),d=null==s?l:wo(s),f=null==c?l:wo(c),(l=new u(m,h+"leave",s,r,o)).target=d,l.relatedTarget=f,m=null,bo(o)===n&&((u=new u(p,h+"enter",c,r,o)).target=f,u.relatedTarget=d,m=u),d=m,s&&c)e:{for(p=c,h=0,f=u=s;f;f=Kn(f))h++;for(f=0,m=p;m;m=Kn(m))f++;for(;0<h-f;)u=Kn(u),h--;for(;0<f-h;)p=Kn(p),f--;for(;h--;){if(u===p||null!==p&&u===p.alternate)break e;u=Kn(u),p=Kn(p)}u=null}else u=null;null!==s&&qn(i,l,s,u,!1),null!==c&&null!==d&&qn(i,d,c,u,!0)}if("select"===(s=(l=n?wo(n):window).nodeName&&l.nodeName.toLowerCase())||"input"===s&&"file"===l.type)var g=Qr;else if(Hr(l))if(Xr)g=an;else{g=nn;var v=rn}else(s=l.nodeName)&&"input"===s.toLowerCase()&&("checkbox"===l.type||"radio"===l.type)&&(g=on);switch(g&&(g=g(e,n))?Vr(i,g,r,o):(v&&v(e,l,n),"focusout"===e&&(v=l._wrapperState)&&v.controlled&&"number"===l.type&&ee(l,"number",l.value)),v=n?wo(n):window,e){case"focusin":(Hr(v)||"true"===v.contentEditable)&&(gn=v,vn=n,yn=null);break;case"focusout":yn=vn=gn=null;break;case"mousedown":bn=!0;break;case"contextmenu":case"mouseup":case"dragend":bn=!1,xn(i,r,o);break;case"selectionchange":if(mn)break;case"keydown":case"keyup":xn(i,r,o)}var y;if(Lr)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Ur?Ar(e,r)&&(b="onCompositionEnd"):"keydown"===e&&229===r.keyCode&&(b="onCompositionStart");b&&(Ir&&"ko"!==r.locale&&(Ur||"onCompositionStart"!==b?"onCompositionEnd"===b&&Ur&&(y=er()):(Jt="value"in(Yt=o)?Yt.value:Yt.textContent,Ur=!0)),0<(v=Gn(n,b)).length&&(b=new br(b,e,null,r,o),i.push({event:b,listeners:v}),y?b.data=y:null!==(y=Mr(r))&&(b.data=y))),(y=Dr?function(e,t){switch(e){case"compositionend":return Mr(t);case"keypress":return 32!==t.which?null:(Fr=!0,$r);case"textInput":return(e=t.data)===$r&&Fr?null:e;default:return null}}(e,r):function(e,t){if(Ur)return"compositionend"===e||!Lr&&Ar(e,t)?(e=er(),Zt=Jt=Yt=null,Ur=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ir&&"ko"!==t.locale?null:t.data}}(e,r))&&(0<(n=Gn(n,"onBeforeInput")).length&&(o=new br("onBeforeInput","beforeinput",null,r,o),i.push({event:o,listeners:n}),o.data=y))}Fn(i,t)})}function Wn(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Gn(e,t){for(var r=t+"Capture",n=[];null!==e;){var o=e,a=o.stateNode;5===o.tag&&null!==a&&(o=a,null!=(a=Te(e,r))&&n.unshift(Wn(e,a,o)),null!=(a=Te(e,t))&&n.push(Wn(e,a,o))),e=e.return}return n}function Kn(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function qn(e,t,r,n,o){for(var a=t._reactName,i=[];null!==r&&r!==n;){var l=r,s=l.alternate,c=l.stateNode;if(null!==s&&s===n)break;5===l.tag&&null!==c&&(l=c,o?null!=(s=Te(r,a))&&i.unshift(Wn(r,s,l)):o||null!=(s=Te(r,a))&&i.push(Wn(r,s,l))),r=r.return}0!==i.length&&e.push({event:t,listeners:i})}var Qn=/\r\n?/g,Xn=/\u0000|\uFFFD/g;function Yn(e){return("string"===typeof e?e:""+e).replace(Qn,"\n").replace(Xn,"")}function Jn(e,t,r){if(t=Yn(t),Yn(e)!==t&&r)throw Error(a(425))}function Zn(){}var eo=null,to=null;function ro(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var no="function"===typeof setTimeout?setTimeout:void 0,oo="function"===typeof clearTimeout?clearTimeout:void 0,ao="function"===typeof Promise?Promise:void 0,io="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof ao?function(e){return ao.resolve(null).then(e).catch(lo)}:no;function lo(e){setTimeout(function(){throw e})}function so(e,t){var r=t,n=0;do{var o=r.nextSibling;if(e.removeChild(r),o&&8===o.nodeType)if("/$"===(r=o.data)){if(0===n)return e.removeChild(o),void Bt(t);n--}else"$"!==r&&"$?"!==r&&"$!"!==r||n++;r=o}while(r);Bt(t)}function co(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function uo(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var r=e.data;if("$"===r||"$!"===r||"$?"===r){if(0===t)return e;t--}else"/$"===r&&t++}e=e.previousSibling}return null}var po=Math.random().toString(36).slice(2),fo="__reactFiber$"+po,ho="__reactProps$"+po,mo="__reactContainer$"+po,go="__reactEvents$"+po,vo="__reactListeners$"+po,yo="__reactHandles$"+po;function bo(e){var t=e[fo];if(t)return t;for(var r=e.parentNode;r;){if(t=r[mo]||r[fo]){if(r=t.alternate,null!==t.child||null!==r&&null!==r.child)for(e=uo(e);null!==e;){if(r=e[fo])return r;e=uo(e)}return t}r=(e=r).parentNode}return null}function xo(e){return!(e=e[fo]||e[mo])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function wo(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(a(33))}function So(e){return e[ho]||null}var ko=[],jo=-1;function Co(e){return{current:e}}function Eo(e){0>jo||(e.current=ko[jo],ko[jo]=null,jo--)}function Po(e,t){jo++,ko[jo]=e.current,e.current=t}var Oo={},_o=Co(Oo),Ro=Co(!1),No=Oo;function To(e,t){var r=e.type.contextTypes;if(!r)return Oo;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var o,a={};for(o in r)a[o]=t[o];return n&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Lo(e){return null!==(e=e.childContextTypes)&&void 0!==e}function zo(){Eo(Ro),Eo(_o)}function Do(e,t,r){if(_o.current!==Oo)throw Error(a(168));Po(_o,t),Po(Ro,r)}function Io(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,"function"!==typeof n.getChildContext)return r;for(var o in n=n.getChildContext())if(!(o in t))throw Error(a(108,H(e)||"Unknown",o));return $({},r,n)}function $o(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Oo,No=_o.current,Po(_o,e),Po(Ro,Ro.current),!0}function Fo(e,t,r){var n=e.stateNode;if(!n)throw Error(a(169));r?(e=Io(e,t,No),n.__reactInternalMemoizedMergedChildContext=e,Eo(Ro),Eo(_o),Po(_o,e)):Eo(Ro),Po(Ro,r)}var Ao=null,Mo=!1,Uo=!1;function Bo(e){null===Ao?Ao=[e]:Ao.push(e)}function Ho(){if(!Uo&&null!==Ao){Uo=!0;var e=0,t=bt;try{var r=Ao;for(bt=1;e<r.length;e++){var n=r[e];do{n=n(!0)}while(null!==n)}Ao=null,Mo=!1}catch(o){throw null!==Ao&&(Ao=Ao.slice(e+1)),Ke(Ze,Ho),o}finally{bt=t,Uo=!1}}return null}var Vo=[],Wo=0,Go=null,Ko=0,qo=[],Qo=0,Xo=null,Yo=1,Jo="";function Zo(e,t){Vo[Wo++]=Ko,Vo[Wo++]=Go,Go=e,Ko=t}function ea(e,t,r){qo[Qo++]=Yo,qo[Qo++]=Jo,qo[Qo++]=Xo,Xo=e;var n=Yo;e=Jo;var o=32-it(n)-1;n&=~(1<<o),r+=1;var a=32-it(t)+o;if(30<a){var i=o-o%5;a=(n&(1<<i)-1).toString(32),n>>=i,o-=i,Yo=1<<32-it(t)+o|r<<o|n,Jo=a+e}else Yo=1<<a|r<<o|n,Jo=e}function ta(e){null!==e.return&&(Zo(e,1),ea(e,1,0))}function ra(e){for(;e===Go;)Go=Vo[--Wo],Vo[Wo]=null,Ko=Vo[--Wo],Vo[Wo]=null;for(;e===Xo;)Xo=qo[--Qo],qo[Qo]=null,Jo=qo[--Qo],qo[Qo]=null,Yo=qo[--Qo],qo[Qo]=null}var na=null,oa=null,aa=!1,ia=null;function la(e,t){var r=Nc(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,null===(t=e.deletions)?(e.deletions=[r],e.flags|=16):t.push(r)}function sa(e,t){switch(e.tag){case 5:var r=e.type;return null!==(t=1!==t.nodeType||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,na=e,oa=co(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,na=e,oa=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(r=null!==Xo?{id:Yo,overflow:Jo}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},(r=Nc(18,null,null,0)).stateNode=t,r.return=e,e.child=r,na=e,oa=null,!0);default:return!1}}function ca(e){return 0!==(1&e.mode)&&0===(128&e.flags)}function ua(e){if(aa){var t=oa;if(t){var r=t;if(!sa(e,t)){if(ca(e))throw Error(a(418));t=co(r.nextSibling);var n=na;t&&sa(e,t)?la(n,r):(e.flags=-4097&e.flags|2,aa=!1,na=e)}}else{if(ca(e))throw Error(a(418));e.flags=-4097&e.flags|2,aa=!1,na=e}}}function da(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;na=e}function pa(e){if(e!==na)return!1;if(!aa)return da(e),aa=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!ro(e.type,e.memoizedProps)),t&&(t=oa)){if(ca(e))throw fa(),Error(a(418));for(;t;)la(e,t),t=co(t.nextSibling)}if(da(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(a(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var r=e.data;if("/$"===r){if(0===t){oa=co(e.nextSibling);break e}t--}else"$"!==r&&"$!"!==r&&"$?"!==r||t++}e=e.nextSibling}oa=null}}else oa=na?co(e.stateNode.nextSibling):null;return!0}function fa(){for(var e=oa;e;)e=co(e.nextSibling)}function ha(){oa=na=null,aa=!1}function ma(e){null===ia?ia=[e]:ia.push(e)}var ga=x.ReactCurrentBatchConfig;function va(e,t,r){if(null!==(e=r.ref)&&"function"!==typeof e&&"object"!==typeof e){if(r._owner){if(r=r._owner){if(1!==r.tag)throw Error(a(309));var n=r.stateNode}if(!n)throw Error(a(147,e));var o=n,i=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===i?t.ref:(t=function(e){var t=o.refs;null===e?delete t[i]:t[i]=e},t._stringRef=i,t)}if("string"!==typeof e)throw Error(a(284));if(!r._owner)throw Error(a(290,e))}return e}function ya(e,t){throw e=Object.prototype.toString.call(t),Error(a(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ba(e){return(0,e._init)(e._payload)}function xa(e){function t(t,r){if(e){var n=t.deletions;null===n?(t.deletions=[r],t.flags|=16):n.push(r)}}function r(r,n){if(!e)return null;for(;null!==n;)t(r,n),n=n.sibling;return null}function n(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function o(e,t){return(e=Lc(e,t)).index=0,e.sibling=null,e}function i(t,r,n){return t.index=n,e?null!==(n=t.alternate)?(n=n.index)<r?(t.flags|=2,r):n:(t.flags|=2,r):(t.flags|=1048576,r)}function l(t){return e&&null===t.alternate&&(t.flags|=2),t}function s(e,t,r,n){return null===t||6!==t.tag?((t=$c(r,e.mode,n)).return=e,t):((t=o(t,r)).return=e,t)}function c(e,t,r,n){var a=r.type;return a===k?d(e,t,r.props.children,n,r.key):null!==t&&(t.elementType===a||"object"===typeof a&&null!==a&&a.$$typeof===T&&ba(a)===t.type)?((n=o(t,r.props)).ref=va(e,t,r),n.return=e,n):((n=zc(r.type,r.key,r.props,null,e.mode,n)).ref=va(e,t,r),n.return=e,n)}function u(e,t,r,n){return null===t||4!==t.tag||t.stateNode.containerInfo!==r.containerInfo||t.stateNode.implementation!==r.implementation?((t=Fc(r,e.mode,n)).return=e,t):((t=o(t,r.children||[])).return=e,t)}function d(e,t,r,n,a){return null===t||7!==t.tag?((t=Dc(r,e.mode,n,a)).return=e,t):((t=o(t,r)).return=e,t)}function p(e,t,r){if("string"===typeof t&&""!==t||"number"===typeof t)return(t=$c(""+t,e.mode,r)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case w:return(r=zc(t.type,t.key,t.props,null,e.mode,r)).ref=va(e,null,t),r.return=e,r;case S:return(t=Fc(t,e.mode,r)).return=e,t;case T:return p(e,(0,t._init)(t._payload),r)}if(te(t)||D(t))return(t=Dc(t,e.mode,r,null)).return=e,t;ya(e,t)}return null}function f(e,t,r,n){var o=null!==t?t.key:null;if("string"===typeof r&&""!==r||"number"===typeof r)return null!==o?null:s(e,t,""+r,n);if("object"===typeof r&&null!==r){switch(r.$$typeof){case w:return r.key===o?c(e,t,r,n):null;case S:return r.key===o?u(e,t,r,n):null;case T:return f(e,t,(o=r._init)(r._payload),n)}if(te(r)||D(r))return null!==o?null:d(e,t,r,n,null);ya(e,r)}return null}function h(e,t,r,n,o){if("string"===typeof n&&""!==n||"number"===typeof n)return s(t,e=e.get(r)||null,""+n,o);if("object"===typeof n&&null!==n){switch(n.$$typeof){case w:return c(t,e=e.get(null===n.key?r:n.key)||null,n,o);case S:return u(t,e=e.get(null===n.key?r:n.key)||null,n,o);case T:return h(e,t,r,(0,n._init)(n._payload),o)}if(te(n)||D(n))return d(t,e=e.get(r)||null,n,o,null);ya(t,n)}return null}function m(o,a,l,s){for(var c=null,u=null,d=a,m=a=0,g=null;null!==d&&m<l.length;m++){d.index>m?(g=d,d=null):g=d.sibling;var v=f(o,d,l[m],s);if(null===v){null===d&&(d=g);break}e&&d&&null===v.alternate&&t(o,d),a=i(v,a,m),null===u?c=v:u.sibling=v,u=v,d=g}if(m===l.length)return r(o,d),aa&&Zo(o,m),c;if(null===d){for(;m<l.length;m++)null!==(d=p(o,l[m],s))&&(a=i(d,a,m),null===u?c=d:u.sibling=d,u=d);return aa&&Zo(o,m),c}for(d=n(o,d);m<l.length;m++)null!==(g=h(d,o,m,l[m],s))&&(e&&null!==g.alternate&&d.delete(null===g.key?m:g.key),a=i(g,a,m),null===u?c=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(o,e)}),aa&&Zo(o,m),c}function g(o,l,s,c){var u=D(s);if("function"!==typeof u)throw Error(a(150));if(null==(s=u.call(s)))throw Error(a(151));for(var d=u=null,m=l,g=l=0,v=null,y=s.next();null!==m&&!y.done;g++,y=s.next()){m.index>g?(v=m,m=null):v=m.sibling;var b=f(o,m,y.value,c);if(null===b){null===m&&(m=v);break}e&&m&&null===b.alternate&&t(o,m),l=i(b,l,g),null===d?u=b:d.sibling=b,d=b,m=v}if(y.done)return r(o,m),aa&&Zo(o,g),u;if(null===m){for(;!y.done;g++,y=s.next())null!==(y=p(o,y.value,c))&&(l=i(y,l,g),null===d?u=y:d.sibling=y,d=y);return aa&&Zo(o,g),u}for(m=n(o,m);!y.done;g++,y=s.next())null!==(y=h(m,o,g,y.value,c))&&(e&&null!==y.alternate&&m.delete(null===y.key?g:y.key),l=i(y,l,g),null===d?u=y:d.sibling=y,d=y);return e&&m.forEach(function(e){return t(o,e)}),aa&&Zo(o,g),u}return function e(n,a,i,s){if("object"===typeof i&&null!==i&&i.type===k&&null===i.key&&(i=i.props.children),"object"===typeof i&&null!==i){switch(i.$$typeof){case w:e:{for(var c=i.key,u=a;null!==u;){if(u.key===c){if((c=i.type)===k){if(7===u.tag){r(n,u.sibling),(a=o(u,i.props.children)).return=n,n=a;break e}}else if(u.elementType===c||"object"===typeof c&&null!==c&&c.$$typeof===T&&ba(c)===u.type){r(n,u.sibling),(a=o(u,i.props)).ref=va(n,u,i),a.return=n,n=a;break e}r(n,u);break}t(n,u),u=u.sibling}i.type===k?((a=Dc(i.props.children,n.mode,s,i.key)).return=n,n=a):((s=zc(i.type,i.key,i.props,null,n.mode,s)).ref=va(n,a,i),s.return=n,n=s)}return l(n);case S:e:{for(u=i.key;null!==a;){if(a.key===u){if(4===a.tag&&a.stateNode.containerInfo===i.containerInfo&&a.stateNode.implementation===i.implementation){r(n,a.sibling),(a=o(a,i.children||[])).return=n,n=a;break e}r(n,a);break}t(n,a),a=a.sibling}(a=Fc(i,n.mode,s)).return=n,n=a}return l(n);case T:return e(n,a,(u=i._init)(i._payload),s)}if(te(i))return m(n,a,i,s);if(D(i))return g(n,a,i,s);ya(n,i)}return"string"===typeof i&&""!==i||"number"===typeof i?(i=""+i,null!==a&&6===a.tag?(r(n,a.sibling),(a=o(a,i)).return=n,n=a):(r(n,a),(a=$c(i,n.mode,s)).return=n,n=a),l(n)):r(n,a)}}var wa=xa(!0),Sa=xa(!1),ka=Co(null),ja=null,Ca=null,Ea=null;function Pa(){Ea=Ca=ja=null}function Oa(e){var t=ka.current;Eo(ka),e._currentValue=t}function _a(e,t,r){for(;null!==e;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==n&&(n.childLanes|=t)):null!==n&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function Ra(e,t){ja=e,Ea=Ca=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(bl=!0),e.firstContext=null)}function Na(e){var t=e._currentValue;if(Ea!==e)if(e={context:e,memoizedValue:t,next:null},null===Ca){if(null===ja)throw Error(a(308));Ca=e,ja.dependencies={lanes:0,firstContext:e}}else Ca=Ca.next=e;return t}var Ta=null;function La(e){null===Ta?Ta=[e]:Ta.push(e)}function za(e,t,r,n){var o=t.interleaved;return null===o?(r.next=r,La(t)):(r.next=o.next,o.next=r),t.interleaved=r,Da(e,n)}function Da(e,t){e.lanes|=t;var r=e.alternate;for(null!==r&&(r.lanes|=t),r=e,e=e.return;null!==e;)e.childLanes|=t,null!==(r=e.alternate)&&(r.childLanes|=t),r=e,e=e.return;return 3===r.tag?r.stateNode:null}var Ia=!1;function $a(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Fa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Aa(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ma(e,t,r){var n=e.updateQueue;if(null===n)return null;if(n=n.shared,0!==(2&Os)){var o=n.pending;return null===o?t.next=t:(t.next=o.next,o.next=t),n.pending=t,Da(e,r)}return null===(o=n.interleaved)?(t.next=t,La(n)):(t.next=o.next,o.next=t),n.interleaved=t,Da(e,r)}function Ua(e,t,r){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194240&r))){var n=t.lanes;r|=n&=e.pendingLanes,t.lanes=r,yt(e,r)}}function Ba(e,t){var r=e.updateQueue,n=e.alternate;if(null!==n&&r===(n=n.updateQueue)){var o=null,a=null;if(null!==(r=r.firstBaseUpdate)){do{var i={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};null===a?o=a=i:a=a.next=i,r=r.next}while(null!==r);null===a?o=a=t:a=a.next=t}else o=a=t;return r={baseState:n.baseState,firstBaseUpdate:o,lastBaseUpdate:a,shared:n.shared,effects:n.effects},void(e.updateQueue=r)}null===(e=r.lastBaseUpdate)?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Ha(e,t,r,n){var o=e.updateQueue;Ia=!1;var a=o.firstBaseUpdate,i=o.lastBaseUpdate,l=o.shared.pending;if(null!==l){o.shared.pending=null;var s=l,c=s.next;s.next=null,null===i?a=c:i.next=c,i=s;var u=e.alternate;null!==u&&((l=(u=u.updateQueue).lastBaseUpdate)!==i&&(null===l?u.firstBaseUpdate=c:l.next=c,u.lastBaseUpdate=s))}if(null!==a){var d=o.baseState;for(i=0,u=c=s=null,l=a;;){var p=l.lane,f=l.eventTime;if((n&p)===p){null!==u&&(u=u.next={eventTime:f,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var h=e,m=l;switch(p=t,f=r,m.tag){case 1:if("function"===typeof(h=m.payload)){d=h.call(f,d,p);break e}d=h;break e;case 3:h.flags=-65537&h.flags|128;case 0:if(null===(p="function"===typeof(h=m.payload)?h.call(f,d,p):h)||void 0===p)break e;d=$({},d,p);break e;case 2:Ia=!0}}null!==l.callback&&0!==l.lane&&(e.flags|=64,null===(p=o.effects)?o.effects=[l]:p.push(l))}else f={eventTime:f,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},null===u?(c=u=f,s=d):u=u.next=f,i|=p;if(null===(l=l.next)){if(null===(l=o.shared.pending))break;l=(p=l).next,p.next=null,o.lastBaseUpdate=p,o.shared.pending=null}}if(null===u&&(s=d),o.baseState=s,o.firstBaseUpdate=c,o.lastBaseUpdate=u,null!==(t=o.shared.interleaved)){o=t;do{i|=o.lane,o=o.next}while(o!==t)}else null===a&&(o.shared.lanes=0);Is|=i,e.lanes=i,e.memoizedState=d}}function Va(e,t,r){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var n=e[t],o=n.callback;if(null!==o){if(n.callback=null,n=r,"function"!==typeof o)throw Error(a(191,o));o.call(n)}}}var Wa={},Ga=Co(Wa),Ka=Co(Wa),qa=Co(Wa);function Qa(e){if(e===Wa)throw Error(a(174));return e}function Xa(e,t){switch(Po(qa,t),Po(Ka,e),Po(Ga,Wa),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:se(null,"");break;default:t=se(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Eo(Ga),Po(Ga,t)}function Ya(){Eo(Ga),Eo(Ka),Eo(qa)}function Ja(e){Qa(qa.current);var t=Qa(Ga.current),r=se(t,e.type);t!==r&&(Po(Ka,e),Po(Ga,r))}function Za(e){Ka.current===e&&(Eo(Ga),Eo(Ka))}var ei=Co(0);function ti(e){for(var t=e;null!==t;){if(13===t.tag){var r=t.memoizedState;if(null!==r&&(null===(r=r.dehydrated)||"$?"===r.data||"$!"===r.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ri=[];function ni(){for(var e=0;e<ri.length;e++)ri[e]._workInProgressVersionPrimary=null;ri.length=0}var oi=x.ReactCurrentDispatcher,ai=x.ReactCurrentBatchConfig,ii=0,li=null,si=null,ci=null,ui=!1,di=!1,pi=0,fi=0;function hi(){throw Error(a(321))}function mi(e,t){if(null===t)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!ln(e[r],t[r]))return!1;return!0}function gi(e,t,r,n,o,i){if(ii=i,li=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,oi.current=null===e||null===e.memoizedState?Zi:el,e=r(n,o),di){i=0;do{if(di=!1,pi=0,25<=i)throw Error(a(301));i+=1,ci=si=null,t.updateQueue=null,oi.current=tl,e=r(n,o)}while(di)}if(oi.current=Ji,t=null!==si&&null!==si.next,ii=0,ci=si=li=null,ui=!1,t)throw Error(a(300));return e}function vi(){var e=0!==pi;return pi=0,e}function yi(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===ci?li.memoizedState=ci=e:ci=ci.next=e,ci}function bi(){if(null===si){var e=li.alternate;e=null!==e?e.memoizedState:null}else e=si.next;var t=null===ci?li.memoizedState:ci.next;if(null!==t)ci=t,si=e;else{if(null===e)throw Error(a(310));e={memoizedState:(si=e).memoizedState,baseState:si.baseState,baseQueue:si.baseQueue,queue:si.queue,next:null},null===ci?li.memoizedState=ci=e:ci=ci.next=e}return ci}function xi(e,t){return"function"===typeof t?t(e):t}function wi(e){var t=bi(),r=t.queue;if(null===r)throw Error(a(311));r.lastRenderedReducer=e;var n=si,o=n.baseQueue,i=r.pending;if(null!==i){if(null!==o){var l=o.next;o.next=i.next,i.next=l}n.baseQueue=o=i,r.pending=null}if(null!==o){i=o.next,n=n.baseState;var s=l=null,c=null,u=i;do{var d=u.lane;if((ii&d)===d)null!==c&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),n=u.hasEagerState?u.eagerState:e(n,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};null===c?(s=c=p,l=n):c=c.next=p,li.lanes|=d,Is|=d}u=u.next}while(null!==u&&u!==i);null===c?l=n:c.next=s,ln(n,t.memoizedState)||(bl=!0),t.memoizedState=n,t.baseState=l,t.baseQueue=c,r.lastRenderedState=n}if(null!==(e=r.interleaved)){o=e;do{i=o.lane,li.lanes|=i,Is|=i,o=o.next}while(o!==e)}else null===o&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Si(e){var t=bi(),r=t.queue;if(null===r)throw Error(a(311));r.lastRenderedReducer=e;var n=r.dispatch,o=r.pending,i=t.memoizedState;if(null!==o){r.pending=null;var l=o=o.next;do{i=e(i,l.action),l=l.next}while(l!==o);ln(i,t.memoizedState)||(bl=!0),t.memoizedState=i,null===t.baseQueue&&(t.baseState=i),r.lastRenderedState=i}return[i,n]}function ki(){}function ji(e,t){var r=li,n=bi(),o=t(),i=!ln(n.memoizedState,o);if(i&&(n.memoizedState=o,bl=!0),n=n.queue,Ii(Pi.bind(null,r,n,e),[e]),n.getSnapshot!==t||i||null!==ci&&1&ci.memoizedState.tag){if(r.flags|=2048,Ni(9,Ei.bind(null,r,n,o,t),void 0,null),null===_s)throw Error(a(349));0!==(30&ii)||Ci(r,t,o)}return o}function Ci(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},null===(t=li.updateQueue)?(t={lastEffect:null,stores:null},li.updateQueue=t,t.stores=[e]):null===(r=t.stores)?t.stores=[e]:r.push(e)}function Ei(e,t,r,n){t.value=r,t.getSnapshot=n,Oi(t)&&_i(e)}function Pi(e,t,r){return r(function(){Oi(t)&&_i(e)})}function Oi(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!ln(e,r)}catch(n){return!0}}function _i(e){var t=Da(e,1);null!==t&&rc(t,e,1,-1)}function Ri(e){var t=yi();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xi,lastRenderedState:e},t.queue=e,e=e.dispatch=qi.bind(null,li,e),[t.memoizedState,e]}function Ni(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},null===(t=li.updateQueue)?(t={lastEffect:null,stores:null},li.updateQueue=t,t.lastEffect=e.next=e):null===(r=t.lastEffect)?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e),e}function Ti(){return bi().memoizedState}function Li(e,t,r,n){var o=yi();li.flags|=e,o.memoizedState=Ni(1|t,r,void 0,void 0===n?null:n)}function zi(e,t,r,n){var o=bi();n=void 0===n?null:n;var a=void 0;if(null!==si){var i=si.memoizedState;if(a=i.destroy,null!==n&&mi(n,i.deps))return void(o.memoizedState=Ni(t,r,a,n))}li.flags|=e,o.memoizedState=Ni(1|t,r,a,n)}function Di(e,t){return Li(8390656,8,e,t)}function Ii(e,t){return zi(2048,8,e,t)}function $i(e,t){return zi(4,2,e,t)}function Fi(e,t){return zi(4,4,e,t)}function Ai(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Mi(e,t,r){return r=null!==r&&void 0!==r?r.concat([e]):null,zi(4,4,Ai.bind(null,t,e),r)}function Ui(){}function Bi(e,t){var r=bi();t=void 0===t?null:t;var n=r.memoizedState;return null!==n&&null!==t&&mi(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function Hi(e,t){var r=bi();t=void 0===t?null:t;var n=r.memoizedState;return null!==n&&null!==t&&mi(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function Vi(e,t,r){return 0===(21&ii)?(e.baseState&&(e.baseState=!1,bl=!0),e.memoizedState=r):(ln(r,t)||(r=mt(),li.lanes|=r,Is|=r,e.baseState=!0),t)}function Wi(e,t){var r=bt;bt=0!==r&&4>r?r:4,e(!0);var n=ai.transition;ai.transition={};try{e(!1),t()}finally{bt=r,ai.transition=n}}function Gi(){return bi().memoizedState}function Ki(e,t,r){var n=tc(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},Qi(e))Xi(t,r);else if(null!==(r=za(e,t,r,n))){rc(r,e,n,ec()),Yi(r,t,n)}}function qi(e,t,r){var n=tc(e),o={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(Qi(e))Xi(t,o);else{var a=e.alternate;if(0===e.lanes&&(null===a||0===a.lanes)&&null!==(a=t.lastRenderedReducer))try{var i=t.lastRenderedState,l=a(i,r);if(o.hasEagerState=!0,o.eagerState=l,ln(l,i)){var s=t.interleaved;return null===s?(o.next=o,La(t)):(o.next=s.next,s.next=o),void(t.interleaved=o)}}catch(c){}null!==(r=za(e,t,o,n))&&(rc(r,e,n,o=ec()),Yi(r,t,n))}}function Qi(e){var t=e.alternate;return e===li||null!==t&&t===li}function Xi(e,t){di=ui=!0;var r=e.pending;null===r?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Yi(e,t,r){if(0!==(4194240&r)){var n=t.lanes;r|=n&=e.pendingLanes,t.lanes=r,yt(e,r)}}var Ji={readContext:Na,useCallback:hi,useContext:hi,useEffect:hi,useImperativeHandle:hi,useInsertionEffect:hi,useLayoutEffect:hi,useMemo:hi,useReducer:hi,useRef:hi,useState:hi,useDebugValue:hi,useDeferredValue:hi,useTransition:hi,useMutableSource:hi,useSyncExternalStore:hi,useId:hi,unstable_isNewReconciler:!1},Zi={readContext:Na,useCallback:function(e,t){return yi().memoizedState=[e,void 0===t?null:t],e},useContext:Na,useEffect:Di,useImperativeHandle:function(e,t,r){return r=null!==r&&void 0!==r?r.concat([e]):null,Li(4194308,4,Ai.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Li(4194308,4,e,t)},useInsertionEffect:function(e,t){return Li(4,2,e,t)},useMemo:function(e,t){var r=yi();return t=void 0===t?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=yi();return t=void 0!==r?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=Ki.bind(null,li,e),[n.memoizedState,e]},useRef:function(e){return e={current:e},yi().memoizedState=e},useState:Ri,useDebugValue:Ui,useDeferredValue:function(e){return yi().memoizedState=e},useTransition:function(){var e=Ri(!1),t=e[0];return e=Wi.bind(null,e[1]),yi().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=li,o=yi();if(aa){if(void 0===r)throw Error(a(407));r=r()}else{if(r=t(),null===_s)throw Error(a(349));0!==(30&ii)||Ci(n,t,r)}o.memoizedState=r;var i={value:r,getSnapshot:t};return o.queue=i,Di(Pi.bind(null,n,i,e),[e]),n.flags|=2048,Ni(9,Ei.bind(null,n,i,r,t),void 0,null),r},useId:function(){var e=yi(),t=_s.identifierPrefix;if(aa){var r=Jo;t=":"+t+"R"+(r=(Yo&~(1<<32-it(Yo)-1)).toString(32)+r),0<(r=pi++)&&(t+="H"+r.toString(32)),t+=":"}else t=":"+t+"r"+(r=fi++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},el={readContext:Na,useCallback:Bi,useContext:Na,useEffect:Ii,useImperativeHandle:Mi,useInsertionEffect:$i,useLayoutEffect:Fi,useMemo:Hi,useReducer:wi,useRef:Ti,useState:function(){return wi(xi)},useDebugValue:Ui,useDeferredValue:function(e){return Vi(bi(),si.memoizedState,e)},useTransition:function(){return[wi(xi)[0],bi().memoizedState]},useMutableSource:ki,useSyncExternalStore:ji,useId:Gi,unstable_isNewReconciler:!1},tl={readContext:Na,useCallback:Bi,useContext:Na,useEffect:Ii,useImperativeHandle:Mi,useInsertionEffect:$i,useLayoutEffect:Fi,useMemo:Hi,useReducer:Si,useRef:Ti,useState:function(){return Si(xi)},useDebugValue:Ui,useDeferredValue:function(e){var t=bi();return null===si?t.memoizedState=e:Vi(t,si.memoizedState,e)},useTransition:function(){return[Si(xi)[0],bi().memoizedState]},useMutableSource:ki,useSyncExternalStore:ji,useId:Gi,unstable_isNewReconciler:!1};function rl(e,t){if(e&&e.defaultProps){for(var r in t=$({},t),e=e.defaultProps)void 0===t[r]&&(t[r]=e[r]);return t}return t}function nl(e,t,r,n){r=null===(r=r(n,t=e.memoizedState))||void 0===r?t:$({},t,r),e.memoizedState=r,0===e.lanes&&(e.updateQueue.baseState=r)}var ol={isMounted:function(e){return!!(e=e._reactInternals)&&Be(e)===e},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=ec(),o=tc(e),a=Aa(n,o);a.payload=t,void 0!==r&&null!==r&&(a.callback=r),null!==(t=Ma(e,a,o))&&(rc(t,e,o,n),Ua(t,e,o))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=ec(),o=tc(e),a=Aa(n,o);a.tag=1,a.payload=t,void 0!==r&&null!==r&&(a.callback=r),null!==(t=Ma(e,a,o))&&(rc(t,e,o,n),Ua(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=ec(),n=tc(e),o=Aa(r,n);o.tag=2,void 0!==t&&null!==t&&(o.callback=t),null!==(t=Ma(e,o,n))&&(rc(t,e,n,r),Ua(t,e,n))}};function al(e,t,r,n,o,a,i){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(n,a,i):!t.prototype||!t.prototype.isPureReactComponent||(!sn(r,n)||!sn(o,a))}function il(e,t,r){var n=!1,o=Oo,a=t.contextType;return"object"===typeof a&&null!==a?a=Na(a):(o=Lo(t)?No:_o.current,a=(n=null!==(n=t.contextTypes)&&void 0!==n)?To(e,o):Oo),t=new t(r,a),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=ol,e.stateNode=t,t._reactInternals=e,n&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=a),t}function ll(e,t,r,n){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(r,n),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&ol.enqueueReplaceState(t,t.state,null)}function sl(e,t,r,n){var o=e.stateNode;o.props=r,o.state=e.memoizedState,o.refs={},$a(e);var a=t.contextType;"object"===typeof a&&null!==a?o.context=Na(a):(a=Lo(t)?No:_o.current,o.context=To(e,a)),o.state=e.memoizedState,"function"===typeof(a=t.getDerivedStateFromProps)&&(nl(e,t,a,r),o.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof o.getSnapshotBeforeUpdate||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||(t=o.state,"function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount(),t!==o.state&&ol.enqueueReplaceState(o,o.state,null),Ha(e,r,o,n),o.state=e.memoizedState),"function"===typeof o.componentDidMount&&(e.flags|=4194308)}function cl(e,t){try{var r="",n=t;do{r+=U(n),n=n.return}while(n);var o=r}catch(a){o="\nError generating stack: "+a.message+"\n"+a.stack}return{value:e,source:t,stack:o,digest:null}}function ul(e,t,r){return{value:e,source:null,stack:null!=r?r:null,digest:null!=t?t:null}}function dl(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var pl="function"===typeof WeakMap?WeakMap:Map;function fl(e,t,r){(r=Aa(-1,r)).tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){Vs||(Vs=!0,Ws=n),dl(0,t)},r}function hl(e,t,r){(r=Aa(-1,r)).tag=3;var n=e.type.getDerivedStateFromError;if("function"===typeof n){var o=t.value;r.payload=function(){return n(o)},r.callback=function(){dl(0,t)}}var a=e.stateNode;return null!==a&&"function"===typeof a.componentDidCatch&&(r.callback=function(){dl(0,t),"function"!==typeof n&&(null===Gs?Gs=new Set([this]):Gs.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),r}function ml(e,t,r){var n=e.pingCache;if(null===n){n=e.pingCache=new pl;var o=new Set;n.set(t,o)}else void 0===(o=n.get(t))&&(o=new Set,n.set(t,o));o.has(r)||(o.add(r),e=Cc.bind(null,e,t,r),t.then(e,e))}function gl(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function vl(e,t,r,n,o){return 0===(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,1===r.tag&&(null===r.alternate?r.tag=17:((t=Aa(-1,1)).tag=2,Ma(r,t,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var yl=x.ReactCurrentOwner,bl=!1;function xl(e,t,r,n){t.child=null===e?Sa(t,null,r,n):wa(t,e.child,r,n)}function wl(e,t,r,n,o){r=r.render;var a=t.ref;return Ra(t,o),n=gi(e,t,r,n,a,o),r=vi(),null===e||bl?(aa&&r&&ta(t),t.flags|=1,xl(e,t,n,o),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Vl(e,t,o))}function Sl(e,t,r,n,o){if(null===e){var a=r.type;return"function"!==typeof a||Tc(a)||void 0!==a.defaultProps||null!==r.compare||void 0!==r.defaultProps?((e=zc(r.type,null,n,t,t.mode,o)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=a,kl(e,t,a,n,o))}if(a=e.child,0===(e.lanes&o)){var i=a.memoizedProps;if((r=null!==(r=r.compare)?r:sn)(i,n)&&e.ref===t.ref)return Vl(e,t,o)}return t.flags|=1,(e=Lc(a,n)).ref=t.ref,e.return=t,t.child=e}function kl(e,t,r,n,o){if(null!==e){var a=e.memoizedProps;if(sn(a,n)&&e.ref===t.ref){if(bl=!1,t.pendingProps=n=a,0===(e.lanes&o))return t.lanes=e.lanes,Vl(e,t,o);0!==(131072&e.flags)&&(bl=!0)}}return El(e,t,r,n,o)}function jl(e,t,r){var n=t.pendingProps,o=n.children,a=null!==e?e.memoizedState:null;if("hidden"===n.mode)if(0===(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Po(Ls,Ts),Ts|=r;else{if(0===(1073741824&r))return e=null!==a?a.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Po(Ls,Ts),Ts|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=null!==a?a.baseLanes:r,Po(Ls,Ts),Ts|=n}else null!==a?(n=a.baseLanes|r,t.memoizedState=null):n=r,Po(Ls,Ts),Ts|=n;return xl(e,t,o,r),t.child}function Cl(e,t){var r=t.ref;(null===e&&null!==r||null!==e&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function El(e,t,r,n,o){var a=Lo(r)?No:_o.current;return a=To(t,a),Ra(t,o),r=gi(e,t,r,n,a,o),n=vi(),null===e||bl?(aa&&n&&ta(t),t.flags|=1,xl(e,t,r,o),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Vl(e,t,o))}function Pl(e,t,r,n,o){if(Lo(r)){var a=!0;$o(t)}else a=!1;if(Ra(t,o),null===t.stateNode)Hl(e,t),il(t,r,n),sl(t,r,n,o),n=!0;else if(null===e){var i=t.stateNode,l=t.memoizedProps;i.props=l;var s=i.context,c=r.contextType;"object"===typeof c&&null!==c?c=Na(c):c=To(t,c=Lo(r)?No:_o.current);var u=r.getDerivedStateFromProps,d="function"===typeof u||"function"===typeof i.getSnapshotBeforeUpdate;d||"function"!==typeof i.UNSAFE_componentWillReceiveProps&&"function"!==typeof i.componentWillReceiveProps||(l!==n||s!==c)&&ll(t,i,n,c),Ia=!1;var p=t.memoizedState;i.state=p,Ha(t,n,i,o),s=t.memoizedState,l!==n||p!==s||Ro.current||Ia?("function"===typeof u&&(nl(t,r,u,n),s=t.memoizedState),(l=Ia||al(t,r,l,n,p,s,c))?(d||"function"!==typeof i.UNSAFE_componentWillMount&&"function"!==typeof i.componentWillMount||("function"===typeof i.componentWillMount&&i.componentWillMount(),"function"===typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount()),"function"===typeof i.componentDidMount&&(t.flags|=4194308)):("function"===typeof i.componentDidMount&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=s),i.props=n,i.state=s,i.context=c,n=l):("function"===typeof i.componentDidMount&&(t.flags|=4194308),n=!1)}else{i=t.stateNode,Fa(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:rl(t.type,l),i.props=c,d=t.pendingProps,p=i.context,"object"===typeof(s=r.contextType)&&null!==s?s=Na(s):s=To(t,s=Lo(r)?No:_o.current);var f=r.getDerivedStateFromProps;(u="function"===typeof f||"function"===typeof i.getSnapshotBeforeUpdate)||"function"!==typeof i.UNSAFE_componentWillReceiveProps&&"function"!==typeof i.componentWillReceiveProps||(l!==d||p!==s)&&ll(t,i,n,s),Ia=!1,p=t.memoizedState,i.state=p,Ha(t,n,i,o);var h=t.memoizedState;l!==d||p!==h||Ro.current||Ia?("function"===typeof f&&(nl(t,r,f,n),h=t.memoizedState),(c=Ia||al(t,r,c,n,p,h,s)||!1)?(u||"function"!==typeof i.UNSAFE_componentWillUpdate&&"function"!==typeof i.componentWillUpdate||("function"===typeof i.componentWillUpdate&&i.componentWillUpdate(n,h,s),"function"===typeof i.UNSAFE_componentWillUpdate&&i.UNSAFE_componentWillUpdate(n,h,s)),"function"===typeof i.componentDidUpdate&&(t.flags|=4),"function"===typeof i.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof i.componentDidUpdate||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof i.getSnapshotBeforeUpdate||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=h),i.props=n,i.state=h,i.context=s,n=c):("function"!==typeof i.componentDidUpdate||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof i.getSnapshotBeforeUpdate||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),n=!1)}return Ol(e,t,r,n,a,o)}function Ol(e,t,r,n,o,a){Cl(e,t);var i=0!==(128&t.flags);if(!n&&!i)return o&&Fo(t,r,!1),Vl(e,t,a);n=t.stateNode,yl.current=t;var l=i&&"function"!==typeof r.getDerivedStateFromError?null:n.render();return t.flags|=1,null!==e&&i?(t.child=wa(t,e.child,null,a),t.child=wa(t,null,l,a)):xl(e,t,l,a),t.memoizedState=n.state,o&&Fo(t,r,!0),t.child}function _l(e){var t=e.stateNode;t.pendingContext?Do(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Do(0,t.context,!1),Xa(e,t.containerInfo)}function Rl(e,t,r,n,o){return ha(),ma(o),t.flags|=256,xl(e,t,r,n),t.child}var Nl,Tl,Ll,zl,Dl={dehydrated:null,treeContext:null,retryLane:0};function Il(e){return{baseLanes:e,cachePool:null,transitions:null}}function $l(e,t,r){var n,o=t.pendingProps,i=ei.current,l=!1,s=0!==(128&t.flags);if((n=s)||(n=(null===e||null!==e.memoizedState)&&0!==(2&i)),n?(l=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(i|=1),Po(ei,1&i),null===e)return ua(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0===(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(s=o.children,e=o.fallback,l?(o=t.mode,l=t.child,s={mode:"hidden",children:s},0===(1&o)&&null!==l?(l.childLanes=0,l.pendingProps=s):l=Ic(s,o,0,null),e=Dc(e,o,r,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Il(r),t.memoizedState=Dl,e):Fl(t,s));if(null!==(i=e.memoizedState)&&null!==(n=i.dehydrated))return function(e,t,r,n,o,i,l){if(r)return 256&t.flags?(t.flags&=-257,Al(e,t,l,n=ul(Error(a(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(i=n.fallback,o=t.mode,n=Ic({mode:"visible",children:n.children},o,0,null),(i=Dc(i,o,l,null)).flags|=2,n.return=t,i.return=t,n.sibling=i,t.child=n,0!==(1&t.mode)&&wa(t,e.child,null,l),t.child.memoizedState=Il(l),t.memoizedState=Dl,i);if(0===(1&t.mode))return Al(e,t,l,null);if("$!"===o.data){if(n=o.nextSibling&&o.nextSibling.dataset)var s=n.dgst;return n=s,Al(e,t,l,n=ul(i=Error(a(419)),n,void 0))}if(s=0!==(l&e.childLanes),bl||s){if(null!==(n=_s)){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}0!==(o=0!==(o&(n.suspendedLanes|l))?0:o)&&o!==i.retryLane&&(i.retryLane=o,Da(e,o),rc(n,e,o,-1))}return mc(),Al(e,t,l,n=ul(Error(a(421))))}return"$?"===o.data?(t.flags|=128,t.child=e.child,t=Pc.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,oa=co(o.nextSibling),na=t,aa=!0,ia=null,null!==e&&(qo[Qo++]=Yo,qo[Qo++]=Jo,qo[Qo++]=Xo,Yo=e.id,Jo=e.overflow,Xo=t),t=Fl(t,n.children),t.flags|=4096,t)}(e,t,s,o,n,i,r);if(l){l=o.fallback,s=t.mode,n=(i=e.child).sibling;var c={mode:"hidden",children:o.children};return 0===(1&s)&&t.child!==i?((o=t.child).childLanes=0,o.pendingProps=c,t.deletions=null):(o=Lc(i,c)).subtreeFlags=14680064&i.subtreeFlags,null!==n?l=Lc(n,l):(l=Dc(l,s,r,null)).flags|=2,l.return=t,o.return=t,o.sibling=l,t.child=o,o=l,l=t.child,s=null===(s=e.child.memoizedState)?Il(r):{baseLanes:s.baseLanes|r,cachePool:null,transitions:s.transitions},l.memoizedState=s,l.childLanes=e.childLanes&~r,t.memoizedState=Dl,o}return e=(l=e.child).sibling,o=Lc(l,{mode:"visible",children:o.children}),0===(1&t.mode)&&(o.lanes=r),o.return=t,o.sibling=null,null!==e&&(null===(r=t.deletions)?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=o,t.memoizedState=null,o}function Fl(e,t){return(t=Ic({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Al(e,t,r,n){return null!==n&&ma(n),wa(t,e.child,null,r),(e=Fl(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Ml(e,t,r){e.lanes|=t;var n=e.alternate;null!==n&&(n.lanes|=t),_a(e.return,t,r)}function Ul(e,t,r,n,o){var a=e.memoizedState;null===a?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:o}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=n,a.tail=r,a.tailMode=o)}function Bl(e,t,r){var n=t.pendingProps,o=n.revealOrder,a=n.tail;if(xl(e,t,n.children,r),0!==(2&(n=ei.current)))n=1&n|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Ml(e,r,t);else if(19===e.tag)Ml(e,r,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(Po(ei,n),0===(1&t.mode))t.memoizedState=null;else switch(o){case"forwards":for(r=t.child,o=null;null!==r;)null!==(e=r.alternate)&&null===ti(e)&&(o=r),r=r.sibling;null===(r=o)?(o=t.child,t.child=null):(o=r.sibling,r.sibling=null),Ul(t,!1,o,r,a);break;case"backwards":for(r=null,o=t.child,t.child=null;null!==o;){if(null!==(e=o.alternate)&&null===ti(e)){t.child=o;break}e=o.sibling,o.sibling=r,r=o,o=e}Ul(t,!0,r,null,a);break;case"together":Ul(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Hl(e,t){0===(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Vl(e,t,r){if(null!==e&&(t.dependencies=e.dependencies),Is|=t.lanes,0===(r&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(a(153));if(null!==t.child){for(r=Lc(e=t.child,e.pendingProps),t.child=r,r.return=t;null!==e.sibling;)e=e.sibling,(r=r.sibling=Lc(e,e.pendingProps)).return=t;r.sibling=null}return t.child}function Wl(e,t){if(!aa)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;null!==t;)null!==t.alternate&&(r=t),t=t.sibling;null===r?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;null!==r;)null!==r.alternate&&(n=r),r=r.sibling;null===n?t||null===e.tail?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Gl(e){var t=null!==e.alternate&&e.alternate.child===e.child,r=0,n=0;if(t)for(var o=e.child;null!==o;)r|=o.lanes|o.childLanes,n|=14680064&o.subtreeFlags,n|=14680064&o.flags,o.return=e,o=o.sibling;else for(o=e.child;null!==o;)r|=o.lanes|o.childLanes,n|=o.subtreeFlags,n|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function Kl(e,t,r){var n=t.pendingProps;switch(ra(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Gl(t),null;case 1:case 17:return Lo(t.type)&&zo(),Gl(t),null;case 3:return n=t.stateNode,Ya(),Eo(Ro),Eo(_o),ni(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),null!==e&&null!==e.child||(pa(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==ia&&(ic(ia),ia=null))),Tl(e,t),Gl(t),null;case 5:Za(t);var o=Qa(qa.current);if(r=t.type,null!==e&&null!=t.stateNode)Ll(e,t,r,n,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(null===t.stateNode)throw Error(a(166));return Gl(t),null}if(e=Qa(Ga.current),pa(t)){n=t.stateNode,r=t.type;var i=t.memoizedProps;switch(n[fo]=t,n[ho]=i,e=0!==(1&t.mode),r){case"dialog":An("cancel",n),An("close",n);break;case"iframe":case"object":case"embed":An("load",n);break;case"video":case"audio":for(o=0;o<Dn.length;o++)An(Dn[o],n);break;case"source":An("error",n);break;case"img":case"image":case"link":An("error",n),An("load",n);break;case"details":An("toggle",n);break;case"input":X(n,i),An("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!i.multiple},An("invalid",n);break;case"textarea":oe(n,i),An("invalid",n)}for(var s in ye(r,i),o=null,i)if(i.hasOwnProperty(s)){var c=i[s];"children"===s?"string"===typeof c?n.textContent!==c&&(!0!==i.suppressHydrationWarning&&Jn(n.textContent,c,e),o=["children",c]):"number"===typeof c&&n.textContent!==""+c&&(!0!==i.suppressHydrationWarning&&Jn(n.textContent,c,e),o=["children",""+c]):l.hasOwnProperty(s)&&null!=c&&"onScroll"===s&&An("scroll",n)}switch(r){case"input":G(n),Z(n,i,!0);break;case"textarea":G(n),ie(n);break;case"select":case"option":break;default:"function"===typeof i.onClick&&(n.onclick=Zn)}n=o,t.updateQueue=n,null!==n&&(t.flags|=4)}else{s=9===o.nodeType?o:o.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=le(r)),"http://www.w3.org/1999/xhtml"===e?"script"===r?((e=s.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"===typeof n.is?e=s.createElement(r,{is:n.is}):(e=s.createElement(r),"select"===r&&(s=e,n.multiple?s.multiple=!0:n.size&&(s.size=n.size))):e=s.createElementNS(e,r),e[fo]=t,e[ho]=n,Nl(e,t,!1,!1),t.stateNode=e;e:{switch(s=be(r,n),r){case"dialog":An("cancel",e),An("close",e),o=n;break;case"iframe":case"object":case"embed":An("load",e),o=n;break;case"video":case"audio":for(o=0;o<Dn.length;o++)An(Dn[o],e);o=n;break;case"source":An("error",e),o=n;break;case"img":case"image":case"link":An("error",e),An("load",e),o=n;break;case"details":An("toggle",e),o=n;break;case"input":X(e,n),o=Q(e,n),An("invalid",e);break;case"option":default:o=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},o=$({},n,{value:void 0}),An("invalid",e);break;case"textarea":oe(e,n),o=ne(e,n),An("invalid",e)}for(i in ye(r,o),c=o)if(c.hasOwnProperty(i)){var u=c[i];"style"===i?ge(e,u):"dangerouslySetInnerHTML"===i?null!=(u=u?u.__html:void 0)&&de(e,u):"children"===i?"string"===typeof u?("textarea"!==r||""!==u)&&pe(e,u):"number"===typeof u&&pe(e,""+u):"suppressContentEditableWarning"!==i&&"suppressHydrationWarning"!==i&&"autoFocus"!==i&&(l.hasOwnProperty(i)?null!=u&&"onScroll"===i&&An("scroll",e):null!=u&&b(e,i,u,s))}switch(r){case"input":G(e),Z(e,n,!1);break;case"textarea":G(e),ie(e);break;case"option":null!=n.value&&e.setAttribute("value",""+V(n.value));break;case"select":e.multiple=!!n.multiple,null!=(i=n.value)?re(e,!!n.multiple,i,!1):null!=n.defaultValue&&re(e,!!n.multiple,n.defaultValue,!0);break;default:"function"===typeof o.onClick&&(e.onclick=Zn)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return Gl(t),null;case 6:if(e&&null!=t.stateNode)zl(e,t,e.memoizedProps,n);else{if("string"!==typeof n&&null===t.stateNode)throw Error(a(166));if(r=Qa(qa.current),Qa(Ga.current),pa(t)){if(n=t.stateNode,r=t.memoizedProps,n[fo]=t,(i=n.nodeValue!==r)&&null!==(e=na))switch(e.tag){case 3:Jn(n.nodeValue,r,0!==(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Jn(n.nodeValue,r,0!==(1&e.mode))}i&&(t.flags|=4)}else(n=(9===r.nodeType?r:r.ownerDocument).createTextNode(n))[fo]=t,t.stateNode=n}return Gl(t),null;case 13:if(Eo(ei),n=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(aa&&null!==oa&&0!==(1&t.mode)&&0===(128&t.flags))fa(),ha(),t.flags|=98560,i=!1;else if(i=pa(t),null!==n&&null!==n.dehydrated){if(null===e){if(!i)throw Error(a(318));if(!(i=null!==(i=t.memoizedState)?i.dehydrated:null))throw Error(a(317));i[fo]=t}else ha(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Gl(t),i=!1}else null!==ia&&(ic(ia),ia=null),i=!0;if(!i)return 65536&t.flags?t:null}return 0!==(128&t.flags)?(t.lanes=r,t):((n=null!==n)!==(null!==e&&null!==e.memoizedState)&&n&&(t.child.flags|=8192,0!==(1&t.mode)&&(null===e||0!==(1&ei.current)?0===zs&&(zs=3):mc())),null!==t.updateQueue&&(t.flags|=4),Gl(t),null);case 4:return Ya(),Tl(e,t),null===e&&Bn(t.stateNode.containerInfo),Gl(t),null;case 10:return Oa(t.type._context),Gl(t),null;case 19:if(Eo(ei),null===(i=t.memoizedState))return Gl(t),null;if(n=0!==(128&t.flags),null===(s=i.rendering))if(n)Wl(i,!1);else{if(0!==zs||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(s=ti(e))){for(t.flags|=128,Wl(i,!1),null!==(n=s.updateQueue)&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;null!==r;)e=n,(i=r).flags&=14680066,null===(s=i.alternate)?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return Po(ei,1&ei.current|2),t.child}e=e.sibling}null!==i.tail&&Ye()>Bs&&(t.flags|=128,n=!0,Wl(i,!1),t.lanes=4194304)}else{if(!n)if(null!==(e=ti(s))){if(t.flags|=128,n=!0,null!==(r=e.updateQueue)&&(t.updateQueue=r,t.flags|=4),Wl(i,!0),null===i.tail&&"hidden"===i.tailMode&&!s.alternate&&!aa)return Gl(t),null}else 2*Ye()-i.renderingStartTime>Bs&&1073741824!==r&&(t.flags|=128,n=!0,Wl(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(null!==(r=i.last)?r.sibling=s:t.child=s,i.last=s)}return null!==i.tail?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Ye(),t.sibling=null,r=ei.current,Po(ei,n?1&r|2:1&r),t):(Gl(t),null);case 22:case 23:return dc(),n=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==n&&(t.flags|=8192),n&&0!==(1&t.mode)?0!==(1073741824&Ts)&&(Gl(t),6&t.subtreeFlags&&(t.flags|=8192)):Gl(t),null;case 24:case 25:return null}throw Error(a(156,t.tag))}function ql(e,t){switch(ra(t),t.tag){case 1:return Lo(t.type)&&zo(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Ya(),Eo(Ro),Eo(_o),ni(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 5:return Za(t),null;case 13:if(Eo(ei),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(a(340));ha()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Eo(ei),null;case 4:return Ya(),null;case 10:return Oa(t.type._context),null;case 22:case 23:return dc(),null;default:return null}}Nl=function(e,t){for(var r=t.child;null!==r;){if(5===r.tag||6===r.tag)e.appendChild(r.stateNode);else if(4!==r.tag&&null!==r.child){r.child.return=r,r=r.child;continue}if(r===t)break;for(;null===r.sibling;){if(null===r.return||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},Tl=function(){},Ll=function(e,t,r,n){var o=e.memoizedProps;if(o!==n){e=t.stateNode,Qa(Ga.current);var a,i=null;switch(r){case"input":o=Q(e,o),n=Q(e,n),i=[];break;case"select":o=$({},o,{value:void 0}),n=$({},n,{value:void 0}),i=[];break;case"textarea":o=ne(e,o),n=ne(e,n),i=[];break;default:"function"!==typeof o.onClick&&"function"===typeof n.onClick&&(e.onclick=Zn)}for(u in ye(r,n),r=null,o)if(!n.hasOwnProperty(u)&&o.hasOwnProperty(u)&&null!=o[u])if("style"===u){var s=o[u];for(a in s)s.hasOwnProperty(a)&&(r||(r={}),r[a]="")}else"dangerouslySetInnerHTML"!==u&&"children"!==u&&"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(l.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in n){var c=n[u];if(s=null!=o?o[u]:void 0,n.hasOwnProperty(u)&&c!==s&&(null!=c||null!=s))if("style"===u)if(s){for(a in s)!s.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(r||(r={}),r[a]="");for(a in c)c.hasOwnProperty(a)&&s[a]!==c[a]&&(r||(r={}),r[a]=c[a])}else r||(i||(i=[]),i.push(u,r)),r=c;else"dangerouslySetInnerHTML"===u?(c=c?c.__html:void 0,s=s?s.__html:void 0,null!=c&&s!==c&&(i=i||[]).push(u,c)):"children"===u?"string"!==typeof c&&"number"!==typeof c||(i=i||[]).push(u,""+c):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&(l.hasOwnProperty(u)?(null!=c&&"onScroll"===u&&An("scroll",e),i||s===c||(i=[])):(i=i||[]).push(u,c))}r&&(i=i||[]).push("style",r);var u=i;(t.updateQueue=u)&&(t.flags|=4)}},zl=function(e,t,r,n){r!==n&&(t.flags|=4)};var Ql=!1,Xl=!1,Yl="function"===typeof WeakSet?WeakSet:Set,Jl=null;function Zl(e,t){var r=e.ref;if(null!==r)if("function"===typeof r)try{r(null)}catch(n){jc(e,t,n)}else r.current=null}function es(e,t,r){try{r()}catch(n){jc(e,t,n)}}var ts=!1;function rs(e,t,r){var n=t.updateQueue;if(null!==(n=null!==n?n.lastEffect:null)){var o=n=n.next;do{if((o.tag&e)===e){var a=o.destroy;o.destroy=void 0,void 0!==a&&es(t,r,a)}o=o.next}while(o!==n)}}function ns(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function os(e){var t=e.ref;if(null!==t){var r=e.stateNode;e.tag,e=r,"function"===typeof t?t(e):t.current=e}}function as(e){var t=e.alternate;null!==t&&(e.alternate=null,as(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[fo],delete t[ho],delete t[go],delete t[vo],delete t[yo])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function is(e){return 5===e.tag||3===e.tag||4===e.tag}function ls(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||is(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ss(e,t,r){var n=e.tag;if(5===n||6===n)e=e.stateNode,t?8===r.nodeType?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(8===r.nodeType?(t=r.parentNode).insertBefore(e,r):(t=r).appendChild(e),null!==(r=r._reactRootContainer)&&void 0!==r||null!==t.onclick||(t.onclick=Zn));else if(4!==n&&null!==(e=e.child))for(ss(e,t,r),e=e.sibling;null!==e;)ss(e,t,r),e=e.sibling}function cs(e,t,r){var n=e.tag;if(5===n||6===n)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(4!==n&&null!==(e=e.child))for(cs(e,t,r),e=e.sibling;null!==e;)cs(e,t,r),e=e.sibling}var us=null,ds=!1;function ps(e,t,r){for(r=r.child;null!==r;)fs(e,t,r),r=r.sibling}function fs(e,t,r){if(at&&"function"===typeof at.onCommitFiberUnmount)try{at.onCommitFiberUnmount(ot,r)}catch(l){}switch(r.tag){case 5:Xl||Zl(r,t);case 6:var n=us,o=ds;us=null,ps(e,t,r),ds=o,null!==(us=n)&&(ds?(e=us,r=r.stateNode,8===e.nodeType?e.parentNode.removeChild(r):e.removeChild(r)):us.removeChild(r.stateNode));break;case 18:null!==us&&(ds?(e=us,r=r.stateNode,8===e.nodeType?so(e.parentNode,r):1===e.nodeType&&so(e,r),Bt(e)):so(us,r.stateNode));break;case 4:n=us,o=ds,us=r.stateNode.containerInfo,ds=!0,ps(e,t,r),us=n,ds=o;break;case 0:case 11:case 14:case 15:if(!Xl&&(null!==(n=r.updateQueue)&&null!==(n=n.lastEffect))){o=n=n.next;do{var a=o,i=a.destroy;a=a.tag,void 0!==i&&(0!==(2&a)||0!==(4&a))&&es(r,t,i),o=o.next}while(o!==n)}ps(e,t,r);break;case 1:if(!Xl&&(Zl(r,t),"function"===typeof(n=r.stateNode).componentWillUnmount))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(l){jc(r,t,l)}ps(e,t,r);break;case 21:ps(e,t,r);break;case 22:1&r.mode?(Xl=(n=Xl)||null!==r.memoizedState,ps(e,t,r),Xl=n):ps(e,t,r);break;default:ps(e,t,r)}}function hs(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var r=e.stateNode;null===r&&(r=e.stateNode=new Yl),t.forEach(function(t){var n=Oc.bind(null,e,t);r.has(t)||(r.add(t),t.then(n,n))})}}function ms(e,t){var r=t.deletions;if(null!==r)for(var n=0;n<r.length;n++){var o=r[n];try{var i=e,l=t,s=l;e:for(;null!==s;){switch(s.tag){case 5:us=s.stateNode,ds=!1;break e;case 3:case 4:us=s.stateNode.containerInfo,ds=!0;break e}s=s.return}if(null===us)throw Error(a(160));fs(i,l,o),us=null,ds=!1;var c=o.alternate;null!==c&&(c.return=null),o.return=null}catch(u){jc(o,t,u)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)gs(t,e),t=t.sibling}function gs(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ms(t,e),vs(e),4&n){try{rs(3,e,e.return),ns(3,e)}catch(g){jc(e,e.return,g)}try{rs(5,e,e.return)}catch(g){jc(e,e.return,g)}}break;case 1:ms(t,e),vs(e),512&n&&null!==r&&Zl(r,r.return);break;case 5:if(ms(t,e),vs(e),512&n&&null!==r&&Zl(r,r.return),32&e.flags){var o=e.stateNode;try{pe(o,"")}catch(g){jc(e,e.return,g)}}if(4&n&&null!=(o=e.stateNode)){var i=e.memoizedProps,l=null!==r?r.memoizedProps:i,s=e.type,c=e.updateQueue;if(e.updateQueue=null,null!==c)try{"input"===s&&"radio"===i.type&&null!=i.name&&Y(o,i),be(s,l);var u=be(s,i);for(l=0;l<c.length;l+=2){var d=c[l],p=c[l+1];"style"===d?ge(o,p):"dangerouslySetInnerHTML"===d?de(o,p):"children"===d?pe(o,p):b(o,d,p,u)}switch(s){case"input":J(o,i);break;case"textarea":ae(o,i);break;case"select":var f=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var h=i.value;null!=h?re(o,!!i.multiple,h,!1):f!==!!i.multiple&&(null!=i.defaultValue?re(o,!!i.multiple,i.defaultValue,!0):re(o,!!i.multiple,i.multiple?[]:"",!1))}o[ho]=i}catch(g){jc(e,e.return,g)}}break;case 6:if(ms(t,e),vs(e),4&n){if(null===e.stateNode)throw Error(a(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(g){jc(e,e.return,g)}}break;case 3:if(ms(t,e),vs(e),4&n&&null!==r&&r.memoizedState.isDehydrated)try{Bt(t.containerInfo)}catch(g){jc(e,e.return,g)}break;case 4:default:ms(t,e),vs(e);break;case 13:ms(t,e),vs(e),8192&(o=e.child).flags&&(i=null!==o.memoizedState,o.stateNode.isHidden=i,!i||null!==o.alternate&&null!==o.alternate.memoizedState||(Us=Ye())),4&n&&hs(e);break;case 22:if(d=null!==r&&null!==r.memoizedState,1&e.mode?(Xl=(u=Xl)||d,ms(t,e),Xl=u):ms(t,e),vs(e),8192&n){if(u=null!==e.memoizedState,(e.stateNode.isHidden=u)&&!d&&0!==(1&e.mode))for(Jl=e,d=e.child;null!==d;){for(p=Jl=d;null!==Jl;){switch(h=(f=Jl).child,f.tag){case 0:case 11:case 14:case 15:rs(4,f,f.return);break;case 1:Zl(f,f.return);var m=f.stateNode;if("function"===typeof m.componentWillUnmount){n=f,r=f.return;try{t=n,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(g){jc(n,r,g)}}break;case 5:Zl(f,f.return);break;case 22:if(null!==f.memoizedState){ws(p);continue}}null!==h?(h.return=f,Jl=h):ws(p)}d=d.sibling}e:for(d=null,p=e;;){if(5===p.tag){if(null===d){d=p;try{o=p.stateNode,u?"function"===typeof(i=o.style).setProperty?i.setProperty("display","none","important"):i.display="none":(s=p.stateNode,l=void 0!==(c=p.memoizedProps.style)&&null!==c&&c.hasOwnProperty("display")?c.display:null,s.style.display=me("display",l))}catch(g){jc(e,e.return,g)}}}else if(6===p.tag){if(null===d)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(g){jc(e,e.return,g)}}else if((22!==p.tag&&23!==p.tag||null===p.memoizedState||p===e)&&null!==p.child){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;null===p.sibling;){if(null===p.return||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:ms(t,e),vs(e),4&n&&hs(e);case 21:}}function vs(e){var t=e.flags;if(2&t){try{e:{for(var r=e.return;null!==r;){if(is(r)){var n=r;break e}r=r.return}throw Error(a(160))}switch(n.tag){case 5:var o=n.stateNode;32&n.flags&&(pe(o,""),n.flags&=-33),cs(e,ls(e),o);break;case 3:case 4:var i=n.stateNode.containerInfo;ss(e,ls(e),i);break;default:throw Error(a(161))}}catch(l){jc(e,e.return,l)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function ys(e,t,r){Jl=e,bs(e,t,r)}function bs(e,t,r){for(var n=0!==(1&e.mode);null!==Jl;){var o=Jl,a=o.child;if(22===o.tag&&n){var i=null!==o.memoizedState||Ql;if(!i){var l=o.alternate,s=null!==l&&null!==l.memoizedState||Xl;l=Ql;var c=Xl;if(Ql=i,(Xl=s)&&!c)for(Jl=o;null!==Jl;)s=(i=Jl).child,22===i.tag&&null!==i.memoizedState?Ss(o):null!==s?(s.return=i,Jl=s):Ss(o);for(;null!==a;)Jl=a,bs(a,t,r),a=a.sibling;Jl=o,Ql=l,Xl=c}xs(e)}else 0!==(8772&o.subtreeFlags)&&null!==a?(a.return=o,Jl=a):xs(e)}}function xs(e){for(;null!==Jl;){var t=Jl;if(0!==(8772&t.flags)){var r=t.alternate;try{if(0!==(8772&t.flags))switch(t.tag){case 0:case 11:case 15:Xl||ns(5,t);break;case 1:var n=t.stateNode;if(4&t.flags&&!Xl)if(null===r)n.componentDidMount();else{var o=t.elementType===t.type?r.memoizedProps:rl(t.type,r.memoizedProps);n.componentDidUpdate(o,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;null!==i&&Va(t,i,n);break;case 3:var l=t.updateQueue;if(null!==l){if(r=null,null!==t.child)switch(t.child.tag){case 5:case 1:r=t.child.stateNode}Va(t,l,r)}break;case 5:var s=t.stateNode;if(null===r&&4&t.flags){r=s;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var u=t.alternate;if(null!==u){var d=u.memoizedState;if(null!==d){var p=d.dehydrated;null!==p&&Bt(p)}}}break;default:throw Error(a(163))}Xl||512&t.flags&&os(t)}catch(f){jc(t,t.return,f)}}if(t===e){Jl=null;break}if(null!==(r=t.sibling)){r.return=t.return,Jl=r;break}Jl=t.return}}function ws(e){for(;null!==Jl;){var t=Jl;if(t===e){Jl=null;break}var r=t.sibling;if(null!==r){r.return=t.return,Jl=r;break}Jl=t.return}}function Ss(e){for(;null!==Jl;){var t=Jl;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{ns(4,t)}catch(s){jc(t,r,s)}break;case 1:var n=t.stateNode;if("function"===typeof n.componentDidMount){var o=t.return;try{n.componentDidMount()}catch(s){jc(t,o,s)}}var a=t.return;try{os(t)}catch(s){jc(t,a,s)}break;case 5:var i=t.return;try{os(t)}catch(s){jc(t,i,s)}}}catch(s){jc(t,t.return,s)}if(t===e){Jl=null;break}var l=t.sibling;if(null!==l){l.return=t.return,Jl=l;break}Jl=t.return}}var ks,js=Math.ceil,Cs=x.ReactCurrentDispatcher,Es=x.ReactCurrentOwner,Ps=x.ReactCurrentBatchConfig,Os=0,_s=null,Rs=null,Ns=0,Ts=0,Ls=Co(0),zs=0,Ds=null,Is=0,$s=0,Fs=0,As=null,Ms=null,Us=0,Bs=1/0,Hs=null,Vs=!1,Ws=null,Gs=null,Ks=!1,qs=null,Qs=0,Xs=0,Ys=null,Js=-1,Zs=0;function ec(){return 0!==(6&Os)?Ye():-1!==Js?Js:Js=Ye()}function tc(e){return 0===(1&e.mode)?1:0!==(2&Os)&&0!==Ns?Ns&-Ns:null!==ga.transition?(0===Zs&&(Zs=mt()),Zs):0!==(e=bt)?e:e=void 0===(e=window.event)?16:Xt(e.type)}function rc(e,t,r,n){if(50<Xs)throw Xs=0,Ys=null,Error(a(185));vt(e,r,n),0!==(2&Os)&&e===_s||(e===_s&&(0===(2&Os)&&($s|=r),4===zs&&lc(e,Ns)),nc(e,n),1===r&&0===Os&&0===(1&t.mode)&&(Bs=Ye()+500,Mo&&Ho()))}function nc(e,t){var r=e.callbackNode;!function(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,o=e.expirationTimes,a=e.pendingLanes;0<a;){var i=31-it(a),l=1<<i,s=o[i];-1===s?0!==(l&r)&&0===(l&n)||(o[i]=ft(l,t)):s<=t&&(e.expiredLanes|=l),a&=~l}}(e,t);var n=pt(e,e===_s?Ns:0);if(0===n)null!==r&&qe(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(null!=r&&qe(r),1===t)0===e.tag?function(e){Mo=!0,Bo(e)}(sc.bind(null,e)):Bo(sc.bind(null,e)),io(function(){0===(6&Os)&&Ho()}),r=null;else{switch(xt(n)){case 1:r=Ze;break;case 4:r=et;break;case 16:default:r=tt;break;case 536870912:r=nt}r=_c(r,oc.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function oc(e,t){if(Js=-1,Zs=0,0!==(6&Os))throw Error(a(327));var r=e.callbackNode;if(Sc()&&e.callbackNode!==r)return null;var n=pt(e,e===_s?Ns:0);if(0===n)return null;if(0!==(30&n)||0!==(n&e.expiredLanes)||t)t=gc(e,n);else{t=n;var o=Os;Os|=2;var i=hc();for(_s===e&&Ns===t||(Hs=null,Bs=Ye()+500,pc(e,t));;)try{yc();break}catch(s){fc(e,s)}Pa(),Cs.current=i,Os=o,null!==Rs?t=0:(_s=null,Ns=0,t=zs)}if(0!==t){if(2===t&&(0!==(o=ht(e))&&(n=o,t=ac(e,o))),1===t)throw r=Ds,pc(e,0),lc(e,n),nc(e,Ye()),r;if(6===t)lc(e,n);else{if(o=e.current.alternate,0===(30&n)&&!function(e){for(var t=e;;){if(16384&t.flags){var r=t.updateQueue;if(null!==r&&null!==(r=r.stores))for(var n=0;n<r.length;n++){var o=r[n],a=o.getSnapshot;o=o.value;try{if(!ln(a(),o))return!1}catch(l){return!1}}}if(r=t.child,16384&t.subtreeFlags&&null!==r)r.return=t,t=r;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(o)&&(2===(t=gc(e,n))&&(0!==(i=ht(e))&&(n=i,t=ac(e,i))),1===t))throw r=Ds,pc(e,0),lc(e,n),nc(e,Ye()),r;switch(e.finishedWork=o,e.finishedLanes=n,t){case 0:case 1:throw Error(a(345));case 2:case 5:wc(e,Ms,Hs);break;case 3:if(lc(e,n),(130023424&n)===n&&10<(t=Us+500-Ye())){if(0!==pt(e,0))break;if(((o=e.suspendedLanes)&n)!==n){ec(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=no(wc.bind(null,e,Ms,Hs),t);break}wc(e,Ms,Hs);break;case 4:if(lc(e,n),(4194240&n)===n)break;for(t=e.eventTimes,o=-1;0<n;){var l=31-it(n);i=1<<l,(l=t[l])>o&&(o=l),n&=~i}if(n=o,10<(n=(120>(n=Ye()-n)?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*js(n/1960))-n)){e.timeoutHandle=no(wc.bind(null,e,Ms,Hs),n);break}wc(e,Ms,Hs);break;default:throw Error(a(329))}}}return nc(e,Ye()),e.callbackNode===r?oc.bind(null,e):null}function ac(e,t){var r=As;return e.current.memoizedState.isDehydrated&&(pc(e,t).flags|=256),2!==(e=gc(e,t))&&(t=Ms,Ms=r,null!==t&&ic(t)),e}function ic(e){null===Ms?Ms=e:Ms.push.apply(Ms,e)}function lc(e,t){for(t&=~Fs,t&=~$s,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-it(t),n=1<<r;e[r]=-1,t&=~n}}function sc(e){if(0!==(6&Os))throw Error(a(327));Sc();var t=pt(e,0);if(0===(1&t))return nc(e,Ye()),null;var r=gc(e,t);if(0!==e.tag&&2===r){var n=ht(e);0!==n&&(t=n,r=ac(e,n))}if(1===r)throw r=Ds,pc(e,0),lc(e,t),nc(e,Ye()),r;if(6===r)throw Error(a(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wc(e,Ms,Hs),nc(e,Ye()),null}function cc(e,t){var r=Os;Os|=1;try{return e(t)}finally{0===(Os=r)&&(Bs=Ye()+500,Mo&&Ho())}}function uc(e){null!==qs&&0===qs.tag&&0===(6&Os)&&Sc();var t=Os;Os|=1;var r=Ps.transition,n=bt;try{if(Ps.transition=null,bt=1,e)return e()}finally{bt=n,Ps.transition=r,0===(6&(Os=t))&&Ho()}}function dc(){Ts=Ls.current,Eo(Ls)}function pc(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(-1!==r&&(e.timeoutHandle=-1,oo(r)),null!==Rs)for(r=Rs.return;null!==r;){var n=r;switch(ra(n),n.tag){case 1:null!==(n=n.type.childContextTypes)&&void 0!==n&&zo();break;case 3:Ya(),Eo(Ro),Eo(_o),ni();break;case 5:Za(n);break;case 4:Ya();break;case 13:case 19:Eo(ei);break;case 10:Oa(n.type._context);break;case 22:case 23:dc()}r=r.return}if(_s=e,Rs=e=Lc(e.current,null),Ns=Ts=t,zs=0,Ds=null,Fs=$s=Is=0,Ms=As=null,null!==Ta){for(t=0;t<Ta.length;t++)if(null!==(n=(r=Ta[t]).interleaved)){r.interleaved=null;var o=n.next,a=r.pending;if(null!==a){var i=a.next;a.next=o,n.next=i}r.pending=n}Ta=null}return e}function fc(e,t){for(;;){var r=Rs;try{if(Pa(),oi.current=Ji,ui){for(var n=li.memoizedState;null!==n;){var o=n.queue;null!==o&&(o.pending=null),n=n.next}ui=!1}if(ii=0,ci=si=li=null,di=!1,pi=0,Es.current=null,null===r||null===r.return){zs=1,Ds=t,Rs=null;break}e:{var i=e,l=r.return,s=r,c=t;if(t=Ns,s.flags|=32768,null!==c&&"object"===typeof c&&"function"===typeof c.then){var u=c,d=s,p=d.tag;if(0===(1&d.mode)&&(0===p||11===p||15===p)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=gl(l);if(null!==h){h.flags&=-257,vl(h,l,s,0,t),1&h.mode&&ml(i,u,t),c=u;var m=(t=h).updateQueue;if(null===m){var g=new Set;g.add(c),t.updateQueue=g}else m.add(c);break e}if(0===(1&t)){ml(i,u,t),mc();break e}c=Error(a(426))}else if(aa&&1&s.mode){var v=gl(l);if(null!==v){0===(65536&v.flags)&&(v.flags|=256),vl(v,l,s,0,t),ma(cl(c,s));break e}}i=c=cl(c,s),4!==zs&&(zs=2),null===As?As=[i]:As.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t,Ba(i,fl(0,c,t));break e;case 1:s=c;var y=i.type,b=i.stateNode;if(0===(128&i.flags)&&("function"===typeof y.getDerivedStateFromError||null!==b&&"function"===typeof b.componentDidCatch&&(null===Gs||!Gs.has(b)))){i.flags|=65536,t&=-t,i.lanes|=t,Ba(i,hl(i,s,t));break e}}i=i.return}while(null!==i)}xc(r)}catch(x){t=x,Rs===r&&null!==r&&(Rs=r=r.return);continue}break}}function hc(){var e=Cs.current;return Cs.current=Ji,null===e?Ji:e}function mc(){0!==zs&&3!==zs&&2!==zs||(zs=4),null===_s||0===(268435455&Is)&&0===(268435455&$s)||lc(_s,Ns)}function gc(e,t){var r=Os;Os|=2;var n=hc();for(_s===e&&Ns===t||(Hs=null,pc(e,t));;)try{vc();break}catch(o){fc(e,o)}if(Pa(),Os=r,Cs.current=n,null!==Rs)throw Error(a(261));return _s=null,Ns=0,zs}function vc(){for(;null!==Rs;)bc(Rs)}function yc(){for(;null!==Rs&&!Qe();)bc(Rs)}function bc(e){var t=ks(e.alternate,e,Ts);e.memoizedProps=e.pendingProps,null===t?xc(e):Rs=t,Es.current=null}function xc(e){var t=e;do{var r=t.alternate;if(e=t.return,0===(32768&t.flags)){if(null!==(r=Kl(r,t,Ts)))return void(Rs=r)}else{if(null!==(r=ql(r,t)))return r.flags&=32767,void(Rs=r);if(null===e)return zs=6,void(Rs=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(Rs=t);Rs=t=e}while(null!==t);0===zs&&(zs=5)}function wc(e,t,r){var n=bt,o=Ps.transition;try{Ps.transition=null,bt=1,function(e,t,r,n){do{Sc()}while(null!==qs);if(0!==(6&Os))throw Error(a(327));r=e.finishedWork;var o=e.finishedLanes;if(null===r)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(a(177));e.callbackNode=null,e.callbackPriority=0;var i=r.lanes|r.childLanes;if(function(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var o=31-it(r),a=1<<o;t[o]=0,n[o]=-1,e[o]=-1,r&=~a}}(e,i),e===_s&&(Rs=_s=null,Ns=0),0===(2064&r.subtreeFlags)&&0===(2064&r.flags)||Ks||(Ks=!0,_c(tt,function(){return Sc(),null})),i=0!==(15990&r.flags),0!==(15990&r.subtreeFlags)||i){i=Ps.transition,Ps.transition=null;var l=bt;bt=1;var s=Os;Os|=4,Es.current=null,function(e,t){if(eo=Vt,fn(e=pn())){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{var n=(r=(r=e.ownerDocument)&&r.defaultView||window).getSelection&&r.getSelection();if(n&&0!==n.rangeCount){r=n.anchorNode;var o=n.anchorOffset,i=n.focusNode;n=n.focusOffset;try{r.nodeType,i.nodeType}catch(w){r=null;break e}var l=0,s=-1,c=-1,u=0,d=0,p=e,f=null;t:for(;;){for(var h;p!==r||0!==o&&3!==p.nodeType||(s=l+o),p!==i||0!==n&&3!==p.nodeType||(c=l+n),3===p.nodeType&&(l+=p.nodeValue.length),null!==(h=p.firstChild);)f=p,p=h;for(;;){if(p===e)break t;if(f===r&&++u===o&&(s=l),f===i&&++d===n&&(c=l),null!==(h=p.nextSibling))break;f=(p=f).parentNode}p=h}r=-1===s||-1===c?null:{start:s,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(to={focusedElem:e,selectionRange:r},Vt=!1,Jl=t;null!==Jl;)if(e=(t=Jl).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,Jl=e;else for(;null!==Jl;){t=Jl;try{var m=t.alternate;if(0!==(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==m){var g=m.memoizedProps,v=m.memoizedState,y=t.stateNode,b=y.getSnapshotBeforeUpdate(t.elementType===t.type?g:rl(t.type,g),v);y.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var x=t.stateNode.containerInfo;1===x.nodeType?x.textContent="":9===x.nodeType&&x.documentElement&&x.removeChild(x.documentElement);break;default:throw Error(a(163))}}catch(w){jc(t,t.return,w)}if(null!==(e=t.sibling)){e.return=t.return,Jl=e;break}Jl=t.return}m=ts,ts=!1}(e,r),gs(r,e),hn(to),Vt=!!eo,to=eo=null,e.current=r,ys(r,e,o),Xe(),Os=s,bt=l,Ps.transition=i}else e.current=r;if(Ks&&(Ks=!1,qs=e,Qs=o),i=e.pendingLanes,0===i&&(Gs=null),function(e){if(at&&"function"===typeof at.onCommitFiberRoot)try{at.onCommitFiberRoot(ot,e,void 0,128===(128&e.current.flags))}catch(t){}}(r.stateNode),nc(e,Ye()),null!==t)for(n=e.onRecoverableError,r=0;r<t.length;r++)o=t[r],n(o.value,{componentStack:o.stack,digest:o.digest});if(Vs)throw Vs=!1,e=Ws,Ws=null,e;0!==(1&Qs)&&0!==e.tag&&Sc(),i=e.pendingLanes,0!==(1&i)?e===Ys?Xs++:(Xs=0,Ys=e):Xs=0,Ho()}(e,t,r,n)}finally{Ps.transition=o,bt=n}return null}function Sc(){if(null!==qs){var e=xt(Qs),t=Ps.transition,r=bt;try{if(Ps.transition=null,bt=16>e?16:e,null===qs)var n=!1;else{if(e=qs,qs=null,Qs=0,0!==(6&Os))throw Error(a(331));var o=Os;for(Os|=4,Jl=e.current;null!==Jl;){var i=Jl,l=i.child;if(0!==(16&Jl.flags)){var s=i.deletions;if(null!==s){for(var c=0;c<s.length;c++){var u=s[c];for(Jl=u;null!==Jl;){var d=Jl;switch(d.tag){case 0:case 11:case 15:rs(8,d,i)}var p=d.child;if(null!==p)p.return=d,Jl=p;else for(;null!==Jl;){var f=(d=Jl).sibling,h=d.return;if(as(d),d===u){Jl=null;break}if(null!==f){f.return=h,Jl=f;break}Jl=h}}}var m=i.alternate;if(null!==m){var g=m.child;if(null!==g){m.child=null;do{var v=g.sibling;g.sibling=null,g=v}while(null!==g)}}Jl=i}}if(0!==(2064&i.subtreeFlags)&&null!==l)l.return=i,Jl=l;else e:for(;null!==Jl;){if(0!==(2048&(i=Jl).flags))switch(i.tag){case 0:case 11:case 15:rs(9,i,i.return)}var y=i.sibling;if(null!==y){y.return=i.return,Jl=y;break e}Jl=i.return}}var b=e.current;for(Jl=b;null!==Jl;){var x=(l=Jl).child;if(0!==(2064&l.subtreeFlags)&&null!==x)x.return=l,Jl=x;else e:for(l=b;null!==Jl;){if(0!==(2048&(s=Jl).flags))try{switch(s.tag){case 0:case 11:case 15:ns(9,s)}}catch(S){jc(s,s.return,S)}if(s===l){Jl=null;break e}var w=s.sibling;if(null!==w){w.return=s.return,Jl=w;break e}Jl=s.return}}if(Os=o,Ho(),at&&"function"===typeof at.onPostCommitFiberRoot)try{at.onPostCommitFiberRoot(ot,e)}catch(S){}n=!0}return n}finally{bt=r,Ps.transition=t}}return!1}function kc(e,t,r){e=Ma(e,t=fl(0,t=cl(r,t),1),1),t=ec(),null!==e&&(vt(e,1,t),nc(e,t))}function jc(e,t,r){if(3===e.tag)kc(e,e,r);else for(;null!==t;){if(3===t.tag){kc(t,e,r);break}if(1===t.tag){var n=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof n.componentDidCatch&&(null===Gs||!Gs.has(n))){t=Ma(t,e=hl(t,e=cl(r,e),1),1),e=ec(),null!==t&&(vt(t,1,e),nc(t,e));break}}t=t.return}}function Cc(e,t,r){var n=e.pingCache;null!==n&&n.delete(t),t=ec(),e.pingedLanes|=e.suspendedLanes&r,_s===e&&(Ns&r)===r&&(4===zs||3===zs&&(130023424&Ns)===Ns&&500>Ye()-Us?pc(e,0):Fs|=r),nc(e,t)}function Ec(e,t){0===t&&(0===(1&e.mode)?t=1:(t=ut,0===(130023424&(ut<<=1))&&(ut=4194304)));var r=ec();null!==(e=Da(e,t))&&(vt(e,t,r),nc(e,r))}function Pc(e){var t=e.memoizedState,r=0;null!==t&&(r=t.retryLane),Ec(e,r)}function Oc(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,o=e.memoizedState;null!==o&&(r=o.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(a(314))}null!==n&&n.delete(t),Ec(e,r)}function _c(e,t){return Ke(e,t)}function Rc(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nc(e,t,r,n){return new Rc(e,t,r,n)}function Tc(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Lc(e,t){var r=e.alternate;return null===r?((r=Nc(e.tag,t,e.key,e.mode)).elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=14680064&e.flags,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function zc(e,t,r,n,o,i){var l=2;if(n=e,"function"===typeof e)Tc(e)&&(l=1);else if("string"===typeof e)l=5;else e:switch(e){case k:return Dc(r.children,o,i,t);case j:l=8,o|=8;break;case C:return(e=Nc(12,r,t,2|o)).elementType=C,e.lanes=i,e;case _:return(e=Nc(13,r,t,o)).elementType=_,e.lanes=i,e;case R:return(e=Nc(19,r,t,o)).elementType=R,e.lanes=i,e;case L:return Ic(r,o,i,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case E:l=10;break e;case P:l=9;break e;case O:l=11;break e;case N:l=14;break e;case T:l=16,n=null;break e}throw Error(a(130,null==e?e:typeof e,""))}return(t=Nc(l,r,t,o)).elementType=e,t.type=n,t.lanes=i,t}function Dc(e,t,r,n){return(e=Nc(7,e,n,t)).lanes=r,e}function Ic(e,t,r,n){return(e=Nc(22,e,n,t)).elementType=L,e.lanes=r,e.stateNode={isHidden:!1},e}function $c(e,t,r){return(e=Nc(6,e,null,t)).lanes=r,e}function Fc(e,t,r){return(t=Nc(4,null!==e.children?e.children:[],e.key,t)).lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ac(e,t,r,n,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gt(0),this.expirationTimes=gt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gt(0),this.identifierPrefix=n,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Mc(e,t,r,n,o,a,i,l,s){return e=new Ac(e,t,r,l,s),1===t?(t=1,!0===a&&(t|=8)):t=0,a=Nc(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},$a(a),e}function Uc(e){if(!e)return Oo;e:{if(Be(e=e._reactInternals)!==e||1!==e.tag)throw Error(a(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Lo(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(a(171))}if(1===e.tag){var r=e.type;if(Lo(r))return Io(e,r,t)}return t}function Bc(e,t,r,n,o,a,i,l,s){return(e=Mc(r,n,!0,e,0,a,0,l,s)).context=Uc(null),r=e.current,(a=Aa(n=ec(),o=tc(r))).callback=void 0!==t&&null!==t?t:null,Ma(r,a,o),e.current.lanes=o,vt(e,o,n),nc(e,n),e}function Hc(e,t,r,n){var o=t.current,a=ec(),i=tc(o);return r=Uc(r),null===t.context?t.context=r:t.pendingContext=r,(t=Aa(a,i)).payload={element:e},null!==(n=void 0===n?null:n)&&(t.callback=n),null!==(e=Ma(o,t,i))&&(rc(e,o,i,a),Ua(e,o,i)),i}function Vc(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Wc(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var r=e.retryLane;e.retryLane=0!==r&&r<t?r:t}}function Gc(e,t){Wc(e,t),(e=e.alternate)&&Wc(e,t)}ks=function(e,t,r){if(null!==e)if(e.memoizedProps!==t.pendingProps||Ro.current)bl=!0;else{if(0===(e.lanes&r)&&0===(128&t.flags))return bl=!1,function(e,t,r){switch(t.tag){case 3:_l(t),ha();break;case 5:Ja(t);break;case 1:Lo(t.type)&&$o(t);break;case 4:Xa(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,o=t.memoizedProps.value;Po(ka,n._currentValue),n._currentValue=o;break;case 13:if(null!==(n=t.memoizedState))return null!==n.dehydrated?(Po(ei,1&ei.current),t.flags|=128,null):0!==(r&t.child.childLanes)?$l(e,t,r):(Po(ei,1&ei.current),null!==(e=Vl(e,t,r))?e.sibling:null);Po(ei,1&ei.current);break;case 19:if(n=0!==(r&t.childLanes),0!==(128&e.flags)){if(n)return Bl(e,t,r);t.flags|=128}if(null!==(o=t.memoizedState)&&(o.rendering=null,o.tail=null,o.lastEffect=null),Po(ei,ei.current),n)break;return null;case 22:case 23:return t.lanes=0,jl(e,t,r)}return Vl(e,t,r)}(e,t,r);bl=0!==(131072&e.flags)}else bl=!1,aa&&0!==(1048576&t.flags)&&ea(t,Ko,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;Hl(e,t),e=t.pendingProps;var o=To(t,_o.current);Ra(t,r),o=gi(null,t,n,e,o,r);var i=vi();return t.flags|=1,"object"===typeof o&&null!==o&&"function"===typeof o.render&&void 0===o.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Lo(n)?(i=!0,$o(t)):i=!1,t.memoizedState=null!==o.state&&void 0!==o.state?o.state:null,$a(t),o.updater=ol,t.stateNode=o,o._reactInternals=t,sl(t,n,e,r),t=Ol(null,t,n,!0,i,r)):(t.tag=0,aa&&i&&ta(t),xl(null,t,o,r),t=t.child),t;case 16:n=t.elementType;e:{switch(Hl(e,t),e=t.pendingProps,n=(o=n._init)(n._payload),t.type=n,o=t.tag=function(e){if("function"===typeof e)return Tc(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===O)return 11;if(e===N)return 14}return 2}(n),e=rl(n,e),o){case 0:t=El(null,t,n,e,r);break e;case 1:t=Pl(null,t,n,e,r);break e;case 11:t=wl(null,t,n,e,r);break e;case 14:t=Sl(null,t,n,rl(n.type,e),r);break e}throw Error(a(306,n,""))}return t;case 0:return n=t.type,o=t.pendingProps,El(e,t,n,o=t.elementType===n?o:rl(n,o),r);case 1:return n=t.type,o=t.pendingProps,Pl(e,t,n,o=t.elementType===n?o:rl(n,o),r);case 3:e:{if(_l(t),null===e)throw Error(a(387));n=t.pendingProps,o=(i=t.memoizedState).element,Fa(e,t),Ha(t,n,null,r);var l=t.memoizedState;if(n=l.element,i.isDehydrated){if(i={element:n,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,256&t.flags){t=Rl(e,t,n,r,o=cl(Error(a(423)),t));break e}if(n!==o){t=Rl(e,t,n,r,o=cl(Error(a(424)),t));break e}for(oa=co(t.stateNode.containerInfo.firstChild),na=t,aa=!0,ia=null,r=Sa(t,null,n,r),t.child=r;r;)r.flags=-3&r.flags|4096,r=r.sibling}else{if(ha(),n===o){t=Vl(e,t,r);break e}xl(e,t,n,r)}t=t.child}return t;case 5:return Ja(t),null===e&&ua(t),n=t.type,o=t.pendingProps,i=null!==e?e.memoizedProps:null,l=o.children,ro(n,o)?l=null:null!==i&&ro(n,i)&&(t.flags|=32),Cl(e,t),xl(e,t,l,r),t.child;case 6:return null===e&&ua(t),null;case 13:return $l(e,t,r);case 4:return Xa(t,t.stateNode.containerInfo),n=t.pendingProps,null===e?t.child=wa(t,null,n,r):xl(e,t,n,r),t.child;case 11:return n=t.type,o=t.pendingProps,wl(e,t,n,o=t.elementType===n?o:rl(n,o),r);case 7:return xl(e,t,t.pendingProps,r),t.child;case 8:case 12:return xl(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,Po(ka,n._currentValue),n._currentValue=l,null!==i)if(ln(i.value,l)){if(i.children===o.children&&!Ro.current){t=Vl(e,t,r);break e}}else for(null!==(i=t.child)&&(i.return=t);null!==i;){var s=i.dependencies;if(null!==s){l=i.child;for(var c=s.firstContext;null!==c;){if(c.context===n){if(1===i.tag){(c=Aa(-1,r&-r)).tag=2;var u=i.updateQueue;if(null!==u){var d=(u=u.shared).pending;null===d?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}i.lanes|=r,null!==(c=i.alternate)&&(c.lanes|=r),_a(i.return,r,t),s.lanes|=r;break}c=c.next}}else if(10===i.tag)l=i.type===t.type?null:i.child;else if(18===i.tag){if(null===(l=i.return))throw Error(a(341));l.lanes|=r,null!==(s=l.alternate)&&(s.lanes|=r),_a(l,r,t),l=i.sibling}else l=i.child;if(null!==l)l.return=i;else for(l=i;null!==l;){if(l===t){l=null;break}if(null!==(i=l.sibling)){i.return=l.return,l=i;break}l=l.return}i=l}xl(e,t,o.children,r),t=t.child}return t;case 9:return o=t.type,n=t.pendingProps.children,Ra(t,r),n=n(o=Na(o)),t.flags|=1,xl(e,t,n,r),t.child;case 14:return o=rl(n=t.type,t.pendingProps),Sl(e,t,n,o=rl(n.type,o),r);case 15:return kl(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:rl(n,o),Hl(e,t),t.tag=1,Lo(n)?(e=!0,$o(t)):e=!1,Ra(t,r),il(t,n,o),sl(t,n,o,r),Ol(null,t,n,!0,e,r);case 19:return Bl(e,t,r);case 22:return jl(e,t,r)}throw Error(a(156,t.tag))};var Kc="function"===typeof reportError?reportError:function(e){console.error(e)};function qc(e){this._internalRoot=e}function Qc(e){this._internalRoot=e}function Xc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Yc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Jc(){}function Zc(e,t,r,n,o){var a=r._reactRootContainer;if(a){var i=a;if("function"===typeof o){var l=o;o=function(){var e=Vc(i);l.call(e)}}Hc(t,i,e,o)}else i=function(e,t,r,n,o){if(o){if("function"===typeof n){var a=n;n=function(){var e=Vc(i);a.call(e)}}var i=Bc(t,n,e,0,null,!1,0,"",Jc);return e._reactRootContainer=i,e[mo]=i.current,Bn(8===e.nodeType?e.parentNode:e),uc(),i}for(;o=e.lastChild;)e.removeChild(o);if("function"===typeof n){var l=n;n=function(){var e=Vc(s);l.call(e)}}var s=Mc(e,0,!1,null,0,!1,0,"",Jc);return e._reactRootContainer=s,e[mo]=s.current,Bn(8===e.nodeType?e.parentNode:e),uc(function(){Hc(t,s,r,n)}),s}(r,t,e,o,n);return Vc(i)}Qc.prototype.render=qc.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(a(409));Hc(e,t,null,null)},Qc.prototype.unmount=qc.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;uc(function(){Hc(null,e,null,null)}),t[mo]=null}},Qc.prototype.unstable_scheduleHydration=function(e){if(e){var t=jt();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Lt.length&&0!==t&&t<Lt[r].priority;r++);Lt.splice(r,0,e),0===r&&$t(e)}},wt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=dt(t.pendingLanes);0!==r&&(yt(t,1|r),nc(t,Ye()),0===(6&Os)&&(Bs=Ye()+500,Ho()))}break;case 13:uc(function(){var t=Da(e,1);if(null!==t){var r=ec();rc(t,e,1,r)}}),Gc(e,1)}},St=function(e){if(13===e.tag){var t=Da(e,134217728);if(null!==t)rc(t,e,134217728,ec());Gc(e,134217728)}},kt=function(e){if(13===e.tag){var t=tc(e),r=Da(e,t);if(null!==r)rc(r,e,t,ec());Gc(e,t)}},jt=function(){return bt},Ct=function(e,t){var r=bt;try{return bt=e,t()}finally{bt=r}},Se=function(e,t,r){switch(t){case"input":if(J(e,r),t=r.name,"radio"===r.type&&null!=t){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var o=So(n);if(!o)throw Error(a(90));K(n),J(n,o)}}}break;case"textarea":ae(e,r);break;case"select":null!=(t=r.value)&&re(e,!!r.multiple,t,!1)}},Oe=cc,_e=uc;var eu={usingClientEntryPoint:!1,Events:[xo,wo,So,Ee,Pe,cc]},tu={findFiberByHostInstance:bo,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ru={bundleType:tu.bundleType,version:tu.version,rendererPackageName:tu.rendererPackageName,rendererConfig:tu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:x.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=We(e))?null:e.stateNode},findFiberByHostInstance:tu.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var nu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nu.isDisabled&&nu.supportsFiber)try{ot=nu.inject(ru),at=nu}catch(ue){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eu,t.createPortal=function(e,t){var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Xc(t))throw Error(a(200));return function(e,t,r){var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:S,key:null==n?null:""+n,children:e,containerInfo:t,implementation:r}}(e,t,null,r)},t.createRoot=function(e,t){if(!Xc(e))throw Error(a(299));var r=!1,n="",o=Kc;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(r=!0),void 0!==t.identifierPrefix&&(n=t.identifierPrefix),void 0!==t.onRecoverableError&&(o=t.onRecoverableError)),t=Mc(e,1,!1,null,0,r,0,n,o),e[mo]=t.current,Bn(8===e.nodeType?e.parentNode:e),new qc(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(a(188));throw e=Object.keys(e).join(","),Error(a(268,e))}return e=null===(e=We(t))?null:e.stateNode},t.flushSync=function(e){return uc(e)},t.hydrate=function(e,t,r){if(!Yc(t))throw Error(a(200));return Zc(null,e,t,!0,r)},t.hydrateRoot=function(e,t,r){if(!Xc(e))throw Error(a(405));var n=null!=r&&r.hydratedSources||null,o=!1,i="",l=Kc;if(null!==r&&void 0!==r&&(!0===r.unstable_strictMode&&(o=!0),void 0!==r.identifierPrefix&&(i=r.identifierPrefix),void 0!==r.onRecoverableError&&(l=r.onRecoverableError)),t=Bc(t,null,e,1,null!=r?r:null,o,0,i,l),e[mo]=t.current,Bn(e),n)for(e=0;e<n.length;e++)o=(o=(r=n[e])._getVersion)(r._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[r,o]:t.mutableSourceEagerHydrationData.push(r,o);return new Qc(t)},t.render=function(e,t,r){if(!Yc(t))throw Error(a(200));return Zc(null,e,t,!1,r)},t.unmountComponentAtNode=function(e){if(!Yc(e))throw Error(a(40));return!!e._reactRootContainer&&(uc(function(){Zc(null,null,e,!1,function(){e._reactRootContainer=null,e[mo]=null})}),!0)},t.unstable_batchedUpdates=cc,t.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!Yc(r))throw Error(a(200));if(null==e||void 0===e._reactInternals)throw Error(a(38));return Zc(e,t,r,!1,n)},t.version="18.3.1-next-f1338f8080-20240426"},853:(e,t,r)=>{"use strict";e.exports=r(234)},950:(e,t,r)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=r(730)}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.m=e,r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;r.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"===typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"===typeof n.then)return n}var a=Object.create(null);r.r(a);var i={};e=e||[null,t({}),t([]),t(t)];for(var l=2&o&&n;("object"==typeof l||"function"==typeof l)&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach(e=>i[e]=()=>n[e]);return i.default=()=>n,r.d(a,i),a}})(),r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce((t,n)=>(r.f[n](e,t),t),[])),r.u=e=>"static/js/"+e+".baf6ec1d.chunk.js",r.miniCssF=e=>{},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={},t="gaming-ecommerce-site:";r.l=(n,o,a,i)=>{if(e[n])e[n].push(o);else{var l,s;if(void 0!==a)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+a){l=d;break}}l||(s=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.setAttribute("data-webpack",t+a),l.src=n),e[n]=[o];var p=(t,r)=>{l.onerror=l.onload=null,clearTimeout(f);var o=e[n];if(delete e[n],l.parentNode&&l.parentNode.removeChild(l),o&&o.forEach(e=>e(r)),t)return t(r)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),s&&document.head.appendChild(l)}}})(),r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="/Game-shop/",(()=>{var e={792:0};r.f.j=(t,n)=>{var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var a=new Promise((r,n)=>o=e[t]=[r,n]);n.push(o[2]=a);var i=r.p+r.u(t),l=new Error;r.l(i,n=>{if(r.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,o[1](l)}},"chunk-"+t,t)}};var t=(t,n)=>{var o,a,i=n[0],l=n[1],s=n[2],c=0;if(i.some(t=>0!==e[t])){for(o in l)r.o(l,o)&&(r.m[o]=l[o]);if(s)s(r)}for(t&&t(n);c<i.length;c++)a=i[c],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0},n=self.webpackChunkgaming_ecommerce_site=self.webpackChunkgaming_ecommerce_site||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),r.nc=void 0,(()=>{"use strict";var e=r(43),t=r.t(e,2),n=r(391);function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e){var t=function(e,t){if("object"!=o(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==o(t)?t:t+""}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,i(n.key),n)}}function s(e,t,r){return t&&l(e.prototype,t),r&&l(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e,t){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},u(e,t)}function d(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&u(e,t)}function p(e,t){if(t&&("object"==o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return c(e)}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}function h(e,t,r){return(t=i(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function m(e){if(Array.isArray(e))return e}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function v(e,t){if(e){if("string"==typeof e)return g(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?g(e,t):void 0}}function y(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function b(e){return m(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||v(e)||y()}function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach(function(t){h(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var S={type:"logger",log:function(e){this.output("log",e)},warn:function(e){this.output("warn",e)},error:function(e){this.output("error",e)},output:function(e,t){console&&console[e]&&console[e].apply(console,t)}},k=function(){function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};a(this,e),this.init(t,r)}return s(e,[{key:"init",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.prefix=t.prefix||"i18next:",this.logger=e||S,this.options=t,this.debug=t.debug}},{key:"setDebug",value:function(e){this.debug=e}},{key:"log",value:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return this.forward(t,"log","",!0)}},{key:"warn",value:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return this.forward(t,"warn","",!0)}},{key:"error",value:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return this.forward(t,"error","")}},{key:"deprecate",value:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return this.forward(t,"warn","WARNING DEPRECATED: ",!0)}},{key:"forward",value:function(e,t,r,n){return n&&!this.debug?null:("string"===typeof e[0]&&(e[0]="".concat(r).concat(this.prefix," ").concat(e[0])),this.logger[t](e))}},{key:"create",value:function(t){return new e(this.logger,w(w({},{prefix:"".concat(this.prefix,":").concat(t,":")}),this.options))}},{key:"clone",value:function(t){return(t=t||this.options).prefix=t.prefix||this.prefix,new e(this.logger,t)}}]),e}(),j=new k,C=function(){function e(){a(this,e),this.observers={}}return s(e,[{key:"on",value:function(e,t){var r=this;return e.split(" ").forEach(function(e){r.observers[e]=r.observers[e]||[],r.observers[e].push(t)}),this}},{key:"off",value:function(e,t){this.observers[e]&&(t?this.observers[e]=this.observers[e].filter(function(e){return e!==t}):delete this.observers[e])}},{key:"emit",value:function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];this.observers[e]&&[].concat(this.observers[e]).forEach(function(e){e.apply(void 0,r)});this.observers["*"]&&[].concat(this.observers["*"]).forEach(function(t){t.apply(t,[e].concat(r))})}}]),e}();function E(){var e,t,r=new Promise(function(r,n){e=r,t=n});return r.resolve=e,r.reject=t,r}function P(e){return null==e?"":""+e}function O(e,t,r){function n(e){return e&&e.indexOf("###")>-1?e.replace(/###/g,"."):e}function o(){return!e||"string"===typeof e}for(var a="string"!==typeof t?[].concat(t):t.split(".");a.length>1;){if(o())return{};var i=n(a.shift());!e[i]&&r&&(e[i]=new r),e=Object.prototype.hasOwnProperty.call(e,i)?e[i]:{}}return o()?{}:{obj:e,k:n(a.shift())}}function _(e,t,r){var n=O(e,t,Object);n.obj[n.k]=r}function R(e,t){var r=O(e,t),n=r.obj,o=r.k;if(n)return n[o]}function N(e,t,r){for(var n in t)"__proto__"!==n&&"constructor"!==n&&(n in e?"string"===typeof e[n]||e[n]instanceof String||"string"===typeof t[n]||t[n]instanceof String?r&&(e[n]=t[n]):N(e[n],t[n],r):e[n]=t[n]);return e}function T(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}var L={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};function z(e){return"string"===typeof e?e.replace(/[&<>"'\/]/g,function(e){return L[e]}):e}var D="undefined"!==typeof window&&window.navigator&&"undefined"===typeof window.navigator.userAgentData&&window.navigator.userAgent&&window.navigator.userAgent.indexOf("MSIE")>-1,I=[" ",",","?","!",";"];function $(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:".";if(e){if(e[t])return e[t];for(var n=t.split(r),o=e,a=0;a<n.length;++a){if(!o)return;if("string"===typeof o[n[a]]&&a+1<n.length)return;if(void 0===o[n[a]]){for(var i=2,l=n.slice(a,a+i).join(r),s=o[l];void 0===s&&n.length>a+i;)i++,s=o[l=n.slice(a,a+i).join(r)];if(void 0===s)return;if(null===s)return null;if(t.endsWith(l)){if("string"===typeof s)return s;if(l&&"string"===typeof s[l])return s[l]}var c=n.slice(a+i).join(r);return c?$(s,c,r):void 0}o=o[n[a]]}return o}}function F(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function A(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?F(Object(r),!0).forEach(function(t){h(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function M(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var r,n=f(e);if(t){var o=f(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return p(this,r)}}var U=function(e){d(r,e);var t=M(r);function r(e){var n,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{ns:["translation"],defaultNS:"translation"};return a(this,r),n=t.call(this),D&&C.call(c(n)),n.data=e||{},n.options=o,void 0===n.options.keySeparator&&(n.options.keySeparator="."),void 0===n.options.ignoreJSONStructure&&(n.options.ignoreJSONStructure=!0),n}return s(r,[{key:"addNamespaces",value:function(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}},{key:"removeNamespaces",value:function(e){var t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)}},{key:"getResource",value:function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=void 0!==n.keySeparator?n.keySeparator:this.options.keySeparator,a=void 0!==n.ignoreJSONStructure?n.ignoreJSONStructure:this.options.ignoreJSONStructure,i=[e,t];r&&"string"!==typeof r&&(i=i.concat(r)),r&&"string"===typeof r&&(i=i.concat(o?r.split(o):r)),e.indexOf(".")>-1&&(i=e.split("."));var l=R(this.data,i);return l||!a||"string"!==typeof r?l:$(this.data&&this.data[e]&&this.data[e][t],r,o)}},{key:"addResource",value:function(e,t,r,n){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{silent:!1},a=this.options.keySeparator;void 0===a&&(a=".");var i=[e,t];r&&(i=i.concat(a?r.split(a):r)),e.indexOf(".")>-1&&(n=t,t=(i=e.split("."))[1]),this.addNamespaces(t),_(this.data,i,n),o.silent||this.emit("added",e,t,r,n)}},{key:"addResources",value:function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{silent:!1};for(var o in r)"string"!==typeof r[o]&&"[object Array]"!==Object.prototype.toString.apply(r[o])||this.addResource(e,t,o,r[o],{silent:!0});n.silent||this.emit("added",e,t,r)}},{key:"addResourceBundle",value:function(e,t,r,n,o){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{silent:!1},i=[e,t];e.indexOf(".")>-1&&(n=r,r=t,t=(i=e.split("."))[1]),this.addNamespaces(t);var l=R(this.data,i)||{};n?N(l,r,o):l=A(A({},l),r),_(this.data,i,l),a.silent||this.emit("added",e,t,r)}},{key:"removeResourceBundle",value:function(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit("removed",e,t)}},{key:"hasResourceBundle",value:function(e,t){return void 0!==this.getResource(e,t)}},{key:"getResourceBundle",value:function(e,t){return t||(t=this.options.defaultNS),"v1"===this.options.compatibilityAPI?A(A({},{}),this.getResource(e,t)):this.getResource(e,t)}},{key:"getDataByLanguage",value:function(e){return this.data[e]}},{key:"hasLanguageSomeTranslations",value:function(e){var t=this.getDataByLanguage(e);return!!(t&&Object.keys(t)||[]).find(function(e){return t[e]&&Object.keys(t[e]).length>0})}},{key:"toJSON",value:function(){return this.data}}]),r}(C),B={processors:{},addPostProcessor:function(e){this.processors[e.name]=e},handle:function(e,t,r,n,o){var a=this;return e.forEach(function(e){a.processors[e]&&(t=a.processors[e].process(t,r,n,o))}),t}};function H(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function V(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?H(Object(r),!0).forEach(function(t){h(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):H(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function W(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var r,n=f(e);if(t){var o=f(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return p(this,r)}}var G={},K=function(e){d(r,e);var t=W(r);function r(e){var n,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return a(this,r),n=t.call(this),D&&C.call(c(n)),function(e,t,r){e.forEach(function(e){t[e]&&(r[e]=t[e])})}(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,c(n)),n.options=o,void 0===n.options.keySeparator&&(n.options.keySeparator="."),n.logger=j.create("translator"),n}return s(r,[{key:"changeLanguage",value:function(e){e&&(this.language=e)}},{key:"exists",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{interpolation:{}};if(void 0===e||null===e)return!1;var r=this.resolve(e,t);return r&&void 0!==r.res}},{key:"extractFromKey",value:function(e,t){var r=void 0!==t.nsSeparator?t.nsSeparator:this.options.nsSeparator;void 0===r&&(r=":");var n=void 0!==t.keySeparator?t.keySeparator:this.options.keySeparator,o=t.ns||this.options.defaultNS||[],a=r&&e.indexOf(r)>-1,i=!this.options.userDefinedKeySeparator&&!t.keySeparator&&!this.options.userDefinedNsSeparator&&!t.nsSeparator&&!function(e,t,r){t=t||"",r=r||"";var n=I.filter(function(e){return t.indexOf(e)<0&&r.indexOf(e)<0});if(0===n.length)return!0;var o=new RegExp("(".concat(n.map(function(e){return"?"===e?"\\?":e}).join("|"),")")),a=!o.test(e);if(!a){var i=e.indexOf(r);i>0&&!o.test(e.substring(0,i))&&(a=!0)}return a}(e,r,n);if(a&&!i){var l=e.match(this.interpolator.nestingRegexp);if(l&&l.length>0)return{key:e,namespaces:o};var s=e.split(r);(r!==n||r===n&&this.options.ns.indexOf(s[0])>-1)&&(o=s.shift()),e=s.join(n)}return"string"===typeof o&&(o=[o]),{key:e,namespaces:o}}},{key:"translate",value:function(e,t,n){var a=this;if("object"!==o(t)&&this.options.overloadTranslationOptionHandler&&(t=this.options.overloadTranslationOptionHandler(arguments)),t||(t={}),void 0===e||null===e)return"";Array.isArray(e)||(e=[String(e)]);var i=void 0!==t.returnDetails?t.returnDetails:this.options.returnDetails,l=void 0!==t.keySeparator?t.keySeparator:this.options.keySeparator,s=this.extractFromKey(e[e.length-1],t),c=s.key,u=s.namespaces,d=u[u.length-1],p=t.lng||this.language,f=t.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(p&&"cimode"===p.toLowerCase()){if(f){var h=t.nsSeparator||this.options.nsSeparator;return i?{res:"".concat(d).concat(h).concat(c),usedKey:c,exactUsedKey:c,usedLng:p,usedNS:d}:"".concat(d).concat(h).concat(c)}return i?{res:c,usedKey:c,exactUsedKey:c,usedLng:p,usedNS:d}:c}var m=this.resolve(e,t),g=m&&m.res,v=m&&m.usedKey||c,y=m&&m.exactUsedKey||c,b=Object.prototype.toString.apply(g),x=void 0!==t.joinArrays?t.joinArrays:this.options.joinArrays,w=!this.i18nFormat||this.i18nFormat.handleAsObject;if(w&&g&&("string"!==typeof g&&"boolean"!==typeof g&&"number"!==typeof g)&&["[object Number]","[object Function]","[object RegExp]"].indexOf(b)<0&&("string"!==typeof x||"[object Array]"!==b)){if(!t.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");var S=this.options.returnedObjectHandler?this.options.returnedObjectHandler(v,g,V(V({},t),{},{ns:u})):"key '".concat(c," (").concat(this.language,")' returned an object instead of string.");return i?(m.res=S,m):S}if(l){var k="[object Array]"===b,j=k?[]:{},C=k?y:v;for(var E in g)if(Object.prototype.hasOwnProperty.call(g,E)){var P="".concat(C).concat(l).concat(E);j[E]=this.translate(P,V(V({},t),{joinArrays:!1,ns:u})),j[E]===P&&(j[E]=g[E])}g=j}}else if(w&&"string"===typeof x&&"[object Array]"===b)(g=g.join(x))&&(g=this.extendTranslation(g,e,t,n));else{var O=!1,_=!1,R=void 0!==t.count&&"string"!==typeof t.count,N=r.hasDefaultValue(t),T=R?this.pluralResolver.getSuffix(p,t.count,t):"",L=t["defaultValue".concat(T)]||t.defaultValue;!this.isValidLookup(g)&&N&&(O=!0,g=L),this.isValidLookup(g)||(_=!0,g=c);var z=(t.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&_?void 0:g,D=N&&L!==g&&this.options.updateMissing;if(_||O||D){if(this.logger.log(D?"updateKey":"missingKey",p,d,c,D?L:g),l){var I=this.resolve(c,V(V({},t),{},{keySeparator:!1}));I&&I.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}var $=[],F=this.languageUtils.getFallbackCodes(this.options.fallbackLng,t.lng||this.language);if("fallback"===this.options.saveMissingTo&&F&&F[0])for(var A=0;A<F.length;A++)$.push(F[A]);else"all"===this.options.saveMissingTo?$=this.languageUtils.toResolveHierarchy(t.lng||this.language):$.push(t.lng||this.language);var M=function(e,r,n){var o=N&&n!==g?n:z;a.options.missingKeyHandler?a.options.missingKeyHandler(e,d,r,o,D,t):a.backendConnector&&a.backendConnector.saveMissing&&a.backendConnector.saveMissing(e,d,r,o,D,t),a.emit("missingKey",e,d,r,g)};this.options.saveMissing&&(this.options.saveMissingPlurals&&R?$.forEach(function(e){a.pluralResolver.getSuffixes(e,t).forEach(function(r){M([e],c+r,t["defaultValue".concat(r)]||L)})}):M($,c,L))}g=this.extendTranslation(g,e,t,m,n),_&&g===c&&this.options.appendNamespaceToMissingKey&&(g="".concat(d,":").concat(c)),(_||O)&&this.options.parseMissingKeyHandler&&(g="v1"!==this.options.compatibilityAPI?this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?"".concat(d,":").concat(c):c,O?g:void 0):this.options.parseMissingKeyHandler(g))}return i?(m.res=g,m):g}},{key:"extendTranslation",value:function(e,t,r,n,o){var a=this;if(this.i18nFormat&&this.i18nFormat.parse)e=this.i18nFormat.parse(e,V(V({},this.options.interpolation.defaultVariables),r),n.usedLng,n.usedNS,n.usedKey,{resolved:n});else if(!r.skipInterpolation){r.interpolation&&this.interpolator.init(V(V({},r),{interpolation:V(V({},this.options.interpolation),r.interpolation)}));var i,l="string"===typeof e&&(r&&r.interpolation&&void 0!==r.interpolation.skipOnVariables?r.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);if(l){var s=e.match(this.interpolator.nestingRegexp);i=s&&s.length}var c=r.replace&&"string"!==typeof r.replace?r.replace:r;if(this.options.interpolation.defaultVariables&&(c=V(V({},this.options.interpolation.defaultVariables),c)),e=this.interpolator.interpolate(e,c,r.lng||this.language,r),l){var u=e.match(this.interpolator.nestingRegexp);i<(u&&u.length)&&(r.nest=!1)}!r.lng&&"v1"!==this.options.compatibilityAPI&&n&&n.res&&(r.lng=n.usedLng),!1!==r.nest&&(e=this.interpolator.nest(e,function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return o&&o[0]===n[0]&&!r.context?(a.logger.warn("It seems you are nesting recursively key: ".concat(n[0]," in key: ").concat(t[0])),null):a.translate.apply(a,n.concat([t]))},r)),r.interpolation&&this.interpolator.reset()}var d=r.postProcess||this.options.postProcess,p="string"===typeof d?[d]:d;return void 0!==e&&null!==e&&p&&p.length&&!1!==r.applyPostProcessor&&(e=B.handle(p,e,t,this.options&&this.options.postProcessPassResolved?V({i18nResolved:n},r):r,this)),e}},{key:"resolve",value:function(e){var t,r,n,o,a,i=this,l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"string"===typeof e&&(e=[e]),e.forEach(function(e){if(!i.isValidLookup(t)){var s=i.extractFromKey(e,l),c=s.key;r=c;var u=s.namespaces;i.options.fallbackNS&&(u=u.concat(i.options.fallbackNS));var d=void 0!==l.count&&"string"!==typeof l.count,p=d&&!l.ordinal&&0===l.count&&i.pluralResolver.shouldUseIntlApi(),f=void 0!==l.context&&("string"===typeof l.context||"number"===typeof l.context)&&""!==l.context,h=l.lngs?l.lngs:i.languageUtils.toResolveHierarchy(l.lng||i.language,l.fallbackLng);u.forEach(function(e){i.isValidLookup(t)||(a=e,!G["".concat(h[0],"-").concat(e)]&&i.utils&&i.utils.hasLoadedNamespace&&!i.utils.hasLoadedNamespace(a)&&(G["".concat(h[0],"-").concat(e)]=!0,i.logger.warn('key "'.concat(r,'" for languages "').concat(h.join(", "),'" won\'t get resolved as namespace "').concat(a,'" was not yet loaded'),"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),h.forEach(function(r){if(!i.isValidLookup(t)){o=r;var a,s=[c];if(i.i18nFormat&&i.i18nFormat.addLookupKeys)i.i18nFormat.addLookupKeys(s,c,r,e,l);else{var u;d&&(u=i.pluralResolver.getSuffix(r,l.count,l));var h="".concat(i.options.pluralSeparator,"zero");if(d&&(s.push(c+u),p&&s.push(c+h)),f){var m="".concat(c).concat(i.options.contextSeparator).concat(l.context);s.push(m),d&&(s.push(m+u),p&&s.push(m+h))}}for(;a=s.pop();)i.isValidLookup(t)||(n=a,t=i.getResource(r,e,a,l))}}))})}}),{res:t,usedKey:r,exactUsedKey:n,usedLng:o,usedNS:a}}},{key:"isValidLookup",value:function(e){return void 0!==e&&!(!this.options.returnNull&&null===e)&&!(!this.options.returnEmptyString&&""===e)}},{key:"getResource",value:function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(e,t,r,n):this.resourceStore.getResource(e,t,r,n)}}],[{key:"hasDefaultValue",value:function(e){var t="defaultValue";for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&t===r.substring(0,12)&&void 0!==e[r])return!0;return!1}}]),r}(C);function q(e){return e.charAt(0).toUpperCase()+e.slice(1)}var Q=function(){function e(t){a(this,e),this.options=t,this.supportedLngs=this.options.supportedLngs||!1,this.logger=j.create("languageUtils")}return s(e,[{key:"getScriptPartFromCode",value:function(e){if(!e||e.indexOf("-")<0)return null;var t=e.split("-");return 2===t.length?null:(t.pop(),"x"===t[t.length-1].toLowerCase()?null:this.formatLanguageCode(t.join("-")))}},{key:"getLanguagePartFromCode",value:function(e){if(!e||e.indexOf("-")<0)return e;var t=e.split("-");return this.formatLanguageCode(t[0])}},{key:"formatLanguageCode",value:function(e){if("string"===typeof e&&e.indexOf("-")>-1){var t=["hans","hant","latn","cyrl","cans","mong","arab"],r=e.split("-");return this.options.lowerCaseLng?r=r.map(function(e){return e.toLowerCase()}):2===r.length?(r[0]=r[0].toLowerCase(),r[1]=r[1].toUpperCase(),t.indexOf(r[1].toLowerCase())>-1&&(r[1]=q(r[1].toLowerCase()))):3===r.length&&(r[0]=r[0].toLowerCase(),2===r[1].length&&(r[1]=r[1].toUpperCase()),"sgn"!==r[0]&&2===r[2].length&&(r[2]=r[2].toUpperCase()),t.indexOf(r[1].toLowerCase())>-1&&(r[1]=q(r[1].toLowerCase())),t.indexOf(r[2].toLowerCase())>-1&&(r[2]=q(r[2].toLowerCase()))),r.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}},{key:"isSupportedCode",value:function(e){return("languageOnly"===this.options.load||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}},{key:"getBestMatchFromCodes",value:function(e){var t,r=this;return e?(e.forEach(function(e){if(!t){var n=r.formatLanguageCode(e);r.options.supportedLngs&&!r.isSupportedCode(n)||(t=n)}}),!t&&this.options.supportedLngs&&e.forEach(function(e){if(!t){var n=r.getLanguagePartFromCode(e);if(r.isSupportedCode(n))return t=n;t=r.options.supportedLngs.find(function(e){return e===n?e:e.indexOf("-")<0&&n.indexOf("-")<0?void 0:0===e.indexOf(n)?e:void 0})}}),t||(t=this.getFallbackCodes(this.options.fallbackLng)[0]),t):null}},{key:"getFallbackCodes",value:function(e,t){if(!e)return[];if("function"===typeof e&&(e=e(t)),"string"===typeof e&&(e=[e]),"[object Array]"===Object.prototype.toString.apply(e))return e;if(!t)return e.default||[];var r=e[t];return r||(r=e[this.getScriptPartFromCode(t)]),r||(r=e[this.formatLanguageCode(t)]),r||(r=e[this.getLanguagePartFromCode(t)]),r||(r=e.default),r||[]}},{key:"toResolveHierarchy",value:function(e,t){var r=this,n=this.getFallbackCodes(t||this.options.fallbackLng||[],e),o=[],a=function(e){e&&(r.isSupportedCode(e)?o.push(e):r.logger.warn("rejecting language code not found in supportedLngs: ".concat(e)))};return"string"===typeof e&&e.indexOf("-")>-1?("languageOnly"!==this.options.load&&a(this.formatLanguageCode(e)),"languageOnly"!==this.options.load&&"currentOnly"!==this.options.load&&a(this.getScriptPartFromCode(e)),"currentOnly"!==this.options.load&&a(this.getLanguagePartFromCode(e))):"string"===typeof e&&a(this.formatLanguageCode(e)),n.forEach(function(e){o.indexOf(e)<0&&a(r.formatLanguageCode(e))}),o}}]),e}(),X=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],Y={1:function(e){return Number(e>1)},2:function(e){return Number(1!=e)},3:function(e){return 0},4:function(e){return Number(e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2)},5:function(e){return Number(0==e?0:1==e?1:2==e?2:e%100>=3&&e%100<=10?3:e%100>=11?4:5)},6:function(e){return Number(1==e?0:e>=2&&e<=4?1:2)},7:function(e){return Number(1==e?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2)},8:function(e){return Number(1==e?0:2==e?1:8!=e&&11!=e?2:3)},9:function(e){return Number(e>=2)},10:function(e){return Number(1==e?0:2==e?1:e<7?2:e<11?3:4)},11:function(e){return Number(1==e||11==e?0:2==e||12==e?1:e>2&&e<20?2:3)},12:function(e){return Number(e%10!=1||e%100==11)},13:function(e){return Number(0!==e)},14:function(e){return Number(1==e?0:2==e?1:3==e?2:3)},15:function(e){return Number(e%10==1&&e%100!=11?0:e%10>=2&&(e%100<10||e%100>=20)?1:2)},16:function(e){return Number(e%10==1&&e%100!=11?0:0!==e?1:2)},17:function(e){return Number(1==e||e%10==1&&e%100!=11?0:1)},18:function(e){return Number(0==e?0:1==e?1:2)},19:function(e){return Number(1==e?0:0==e||e%100>1&&e%100<11?1:e%100>10&&e%100<20?2:3)},20:function(e){return Number(1==e?0:0==e||e%100>0&&e%100<20?1:2)},21:function(e){return Number(e%100==1?1:e%100==2?2:e%100==3||e%100==4?3:0)},22:function(e){return Number(1==e?0:2==e?1:(e<0||e>10)&&e%10==0?2:3)}},J=["v1","v2","v3"],Z={zero:0,one:1,two:2,few:3,many:4,other:5};var ee=function(){function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};a(this,e),this.languageUtils=t,this.options=r,this.logger=j.create("pluralResolver"),this.options.compatibilityJSON&&"v4"!==this.options.compatibilityJSON||"undefined"!==typeof Intl&&Intl.PluralRules||(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=function(){var e={};return X.forEach(function(t){t.lngs.forEach(function(r){e[r]={numbers:t.nr,plurals:Y[t.fc]}})}),e}()}return s(e,[{key:"addRule",value:function(e,t){this.rules[e]=t}},{key:"getRule",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(this.shouldUseIntlApi())try{return new Intl.PluralRules(e,{type:t.ordinal?"ordinal":"cardinal"})}catch(r){return}return this.rules[e]||this.rules[this.languageUtils.getLanguagePartFromCode(e)]}},{key:"needsPlural",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=this.getRule(e,t);return this.shouldUseIntlApi()?r&&r.resolvedOptions().pluralCategories.length>1:r&&r.numbers.length>1}},{key:"getPluralFormsOfKey",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.getSuffixes(e,r).map(function(e){return"".concat(t).concat(e)})}},{key:"getSuffixes",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this.getRule(e,r);return n?this.shouldUseIntlApi()?n.resolvedOptions().pluralCategories.sort(function(e,t){return Z[e]-Z[t]}).map(function(e){return"".concat(t.options.prepend).concat(e)}):n.numbers.map(function(n){return t.getSuffix(e,n,r)}):[]}},{key:"getSuffix",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=this.getRule(e,r);return n?this.shouldUseIntlApi()?"".concat(this.options.prepend).concat(n.select(t)):this.getSuffixRetroCompatible(n,t):(this.logger.warn("no plural rule found for: ".concat(e)),"")}},{key:"getSuffixRetroCompatible",value:function(e,t){var r=this,n=e.noAbs?e.plurals(t):e.plurals(Math.abs(t)),o=e.numbers[n];this.options.simplifyPluralSuffix&&2===e.numbers.length&&1===e.numbers[0]&&(2===o?o="plural":1===o&&(o=""));var a=function(){return r.options.prepend&&o.toString()?r.options.prepend+o.toString():o.toString()};return"v1"===this.options.compatibilityJSON?1===o?"":"number"===typeof o?"_plural_".concat(o.toString()):a():"v2"===this.options.compatibilityJSON||this.options.simplifyPluralSuffix&&2===e.numbers.length&&1===e.numbers[0]?a():this.options.prepend&&n.toString()?this.options.prepend+n.toString():n.toString()}},{key:"shouldUseIntlApi",value:function(){return!J.includes(this.options.compatibilityJSON)}}]),e}();function te(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function re(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?te(Object(r),!0).forEach(function(t){h(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):te(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function ne(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:".",o=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],a=function(e,t,r){var n=R(e,r);return void 0!==n?n:R(t,r)}(e,t,r);return!a&&o&&"string"===typeof r&&void 0===(a=$(e,r,n))&&(a=$(t,r,n)),a}var oe=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a(this,e),this.logger=j.create("interpolator"),this.options=t,this.format=t.interpolation&&t.interpolation.format||function(e){return e},this.init(t)}return s(e,[{key:"init",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});var t=e.interpolation;this.escape=void 0!==t.escape?t.escape:z,this.escapeValue=void 0===t.escapeValue||t.escapeValue,this.useRawValueToEscape=void 0!==t.useRawValueToEscape&&t.useRawValueToEscape,this.prefix=t.prefix?T(t.prefix):t.prefixEscaped||"{{",this.suffix=t.suffix?T(t.suffix):t.suffixEscaped||"}}",this.formatSeparator=t.formatSeparator?t.formatSeparator:t.formatSeparator||",",this.unescapePrefix=t.unescapeSuffix?"":t.unescapePrefix||"-",this.unescapeSuffix=this.unescapePrefix?"":t.unescapeSuffix||"",this.nestingPrefix=t.nestingPrefix?T(t.nestingPrefix):t.nestingPrefixEscaped||T("$t("),this.nestingSuffix=t.nestingSuffix?T(t.nestingSuffix):t.nestingSuffixEscaped||T(")"),this.nestingOptionsSeparator=t.nestingOptionsSeparator?t.nestingOptionsSeparator:t.nestingOptionsSeparator||",",this.maxReplaces=t.maxReplaces?t.maxReplaces:1e3,this.alwaysFormat=void 0!==t.alwaysFormat&&t.alwaysFormat,this.resetRegExp()}},{key:"reset",value:function(){this.options&&this.init(this.options)}},{key:"resetRegExp",value:function(){var e="".concat(this.prefix,"(.+?)").concat(this.suffix);this.regexp=new RegExp(e,"g");var t="".concat(this.prefix).concat(this.unescapePrefix,"(.+?)").concat(this.unescapeSuffix).concat(this.suffix);this.regexpUnescape=new RegExp(t,"g");var r="".concat(this.nestingPrefix,"(.+?)").concat(this.nestingSuffix);this.nestingRegexp=new RegExp(r,"g")}},{key:"interpolate",value:function(e,t,r,n){var o,a,i,l=this,s=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{};function c(e){return e.replace(/\$/g,"$$$$")}var u=function(e){if(e.indexOf(l.formatSeparator)<0){var o=ne(t,s,e,l.options.keySeparator,l.options.ignoreJSONStructure);return l.alwaysFormat?l.format(o,void 0,r,re(re(re({},n),t),{},{interpolationkey:e})):o}var a=e.split(l.formatSeparator),i=a.shift().trim(),c=a.join(l.formatSeparator).trim();return l.format(ne(t,s,i,l.options.keySeparator,l.options.ignoreJSONStructure),c,r,re(re(re({},n),t),{},{interpolationkey:i}))};this.resetRegExp();var d=n&&n.missingInterpolationHandler||this.options.missingInterpolationHandler,p=n&&n.interpolation&&void 0!==n.interpolation.skipOnVariables?n.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:function(e){return c(e)}},{regex:this.regexp,safeValue:function(e){return l.escapeValue?c(l.escape(e)):c(e)}}].forEach(function(t){for(i=0;o=t.regex.exec(e);){var r=o[1].trim();if(void 0===(a=u(r)))if("function"===typeof d){var s=d(e,o,n);a="string"===typeof s?s:""}else if(n&&Object.prototype.hasOwnProperty.call(n,r))a="";else{if(p){a=o[0];continue}l.logger.warn("missed to pass in variable ".concat(r," for interpolating ").concat(e)),a=""}else"string"===typeof a||l.useRawValueToEscape||(a=P(a));var c=t.safeValue(a);if(e=e.replace(o[0],c),p?(t.regex.lastIndex+=a.length,t.regex.lastIndex-=o[0].length):t.regex.lastIndex=0,++i>=l.maxReplaces)break}}),e}},{key:"nest",value:function(e,t){var r,n,o,a=this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};function l(e,t){var r=this.nestingOptionsSeparator;if(e.indexOf(r)<0)return e;var n=e.split(new RegExp("".concat(r,"[ ]*{"))),a="{".concat(n[1]);e=n[0];var i=(a=this.interpolate(a,o)).match(/'/g),l=a.match(/"/g);(i&&i.length%2===0&&!l||l.length%2!==0)&&(a=a.replace(/'/g,'"'));try{o=JSON.parse(a),t&&(o=re(re({},t),o))}catch(s){return this.logger.warn("failed parsing options string in nesting for key ".concat(e),s),"".concat(e).concat(r).concat(a)}return delete o.defaultValue,e}for(;r=this.nestingRegexp.exec(e);){var s=[];(o=(o=re({},i)).replace&&"string"!==typeof o.replace?o.replace:o).applyPostProcessor=!1,delete o.defaultValue;var c=!1;if(-1!==r[0].indexOf(this.formatSeparator)&&!/{.*}/.test(r[1])){var u=r[1].split(this.formatSeparator).map(function(e){return e.trim()});r[1]=u.shift(),s=u,c=!0}if((n=t(l.call(this,r[1].trim(),o),o))&&r[0]===e&&"string"!==typeof n)return n;"string"!==typeof n&&(n=P(n)),n||(this.logger.warn("missed to resolve ".concat(r[1]," for nesting ").concat(e)),n=""),c&&(n=s.reduce(function(e,t){return a.format(e,t,i.lng,re(re({},i),{},{interpolationkey:r[1].trim()}))},n.trim())),e=e.replace(r[0],n),this.regexp.lastIndex=0}return e}}]),e}();function ae(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function ie(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ae(Object(r),!0).forEach(function(t){h(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ae(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function le(e){var t={};return function(r,n,o){var a=n+JSON.stringify(o),i=t[a];return i||(i=e(n,o),t[a]=i),i(r)}}var se=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a(this,e),this.logger=j.create("formatter"),this.options=t,this.formats={number:le(function(e,t){var r=new Intl.NumberFormat(e,ie({},t));return function(e){return r.format(e)}}),currency:le(function(e,t){var r=new Intl.NumberFormat(e,ie(ie({},t),{},{style:"currency"}));return function(e){return r.format(e)}}),datetime:le(function(e,t){var r=new Intl.DateTimeFormat(e,ie({},t));return function(e){return r.format(e)}}),relativetime:le(function(e,t){var r=new Intl.RelativeTimeFormat(e,ie({},t));return function(e){return r.format(e,t.range||"day")}}),list:le(function(e,t){var r=new Intl.ListFormat(e,ie({},t));return function(e){return r.format(e)}})},this.init(t)}return s(e,[{key:"init",value:function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{interpolation:{}}).interpolation;this.formatSeparator=t.formatSeparator?t.formatSeparator:t.formatSeparator||","}},{key:"add",value:function(e,t){this.formats[e.toLowerCase().trim()]=t}},{key:"addCached",value:function(e,t){this.formats[e.toLowerCase().trim()]=le(t)}},{key:"format",value:function(e,t,r){var n=this,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=t.split(this.formatSeparator).reduce(function(e,t){var a=function(e){var t=e.toLowerCase().trim(),r={};if(e.indexOf("(")>-1){var n=e.split("(");t=n[0].toLowerCase().trim();var o=n[1].substring(0,n[1].length-1);"currency"===t&&o.indexOf(":")<0?r.currency||(r.currency=o.trim()):"relativetime"===t&&o.indexOf(":")<0?r.range||(r.range=o.trim()):o.split(";").forEach(function(e){if(e){var t=b(e.split(":")),n=t[0],o=t.slice(1).join(":").trim().replace(/^'+|'+$/g,"");r[n.trim()]||(r[n.trim()]=o),"false"===o&&(r[n.trim()]=!1),"true"===o&&(r[n.trim()]=!0),isNaN(o)||(r[n.trim()]=parseInt(o,10))}})}return{formatName:t,formatOptions:r}}(t),i=a.formatName,l=a.formatOptions;if(n.formats[i]){var s=e;try{var c=o&&o.formatParams&&o.formatParams[o.interpolationkey]||{},u=c.locale||c.lng||o.locale||o.lng||r;s=n.formats[i](e,u,ie(ie(ie({},l),o),c))}catch(d){n.logger.warn(d)}return s}return n.logger.warn("there was no format function for ".concat(i)),e},e);return a}}]),e}();function ce(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function ue(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ce(Object(r),!0).forEach(function(t){h(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ce(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function de(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var r,n=f(e);if(t){var o=f(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return p(this,r)}}var pe=function(e){d(r,e);var t=de(r);function r(e,n,o){var i,l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return a(this,r),i=t.call(this),D&&C.call(c(i)),i.backend=e,i.store=n,i.services=o,i.languageUtils=o.languageUtils,i.options=l,i.logger=j.create("backendConnector"),i.waitingReads=[],i.maxParallelReads=l.maxParallelReads||10,i.readingCalls=0,i.maxRetries=l.maxRetries>=0?l.maxRetries:5,i.retryTimeout=l.retryTimeout>=1?l.retryTimeout:350,i.state={},i.queue=[],i.backend&&i.backend.init&&i.backend.init(o,l.backend,l),i}return s(r,[{key:"queueLoad",value:function(e,t,r,n){var o=this,a={},i={},l={},s={};return e.forEach(function(e){var n=!0;t.forEach(function(t){var l="".concat(e,"|").concat(t);!r.reload&&o.store.hasResourceBundle(e,t)?o.state[l]=2:o.state[l]<0||(1===o.state[l]?void 0===i[l]&&(i[l]=!0):(o.state[l]=1,n=!1,void 0===i[l]&&(i[l]=!0),void 0===a[l]&&(a[l]=!0),void 0===s[t]&&(s[t]=!0)))}),n||(l[e]=!0)}),(Object.keys(a).length||Object.keys(i).length)&&this.queue.push({pending:i,pendingCount:Object.keys(i).length,loaded:{},errors:[],callback:n}),{toLoad:Object.keys(a),pending:Object.keys(i),toLoadLanguages:Object.keys(l),toLoadNamespaces:Object.keys(s)}}},{key:"loaded",value:function(e,t,r){var n=e.split("|"),o=n[0],a=n[1];t&&this.emit("failedLoading",o,a,t),r&&this.store.addResourceBundle(o,a,r),this.state[e]=t?-1:2;var i={};this.queue.forEach(function(r){!function(e,t,r,n){var o=O(e,t,Object),a=o.obj,i=o.k;a[i]=a[i]||[],n&&(a[i]=a[i].concat(r)),n||a[i].push(r)}(r.loaded,[o],a),function(e,t){void 0!==e.pending[t]&&(delete e.pending[t],e.pendingCount--)}(r,e),t&&r.errors.push(t),0!==r.pendingCount||r.done||(Object.keys(r.loaded).forEach(function(e){i[e]||(i[e]={});var t=r.loaded[e];t.length&&t.forEach(function(t){void 0===i[e][t]&&(i[e][t]=!0)})}),r.done=!0,r.errors.length?r.callback(r.errors):r.callback())}),this.emit("loaded",i),this.queue=this.queue.filter(function(e){return!e.done})}},{key:"read",value:function(e,t,r){var n=this,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:this.retryTimeout,i=arguments.length>5?arguments[5]:void 0;if(!e.length)return i(null,{});if(this.readingCalls>=this.maxParallelReads)this.waitingReads.push({lng:e,ns:t,fcName:r,tried:o,wait:a,callback:i});else{this.readingCalls++;var l=function(l,s){if(n.readingCalls--,n.waitingReads.length>0){var c=n.waitingReads.shift();n.read(c.lng,c.ns,c.fcName,c.tried,c.wait,c.callback)}l&&s&&o<n.maxRetries?setTimeout(function(){n.read.call(n,e,t,r,o+1,2*a,i)},a):i(l,s)},s=this.backend[r].bind(this.backend);if(2!==s.length)return s(e,t,l);try{var c=s(e,t);c&&"function"===typeof c.then?c.then(function(e){return l(null,e)}).catch(l):l(null,c)}catch(u){l(u)}}}},{key:"prepareLoading",value:function(e,t){var r=this,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),o&&o();"string"===typeof e&&(e=this.languageUtils.toResolveHierarchy(e)),"string"===typeof t&&(t=[t]);var a=this.queueLoad(e,t,n,o);if(!a.toLoad.length)return a.pending.length||o(),null;a.toLoad.forEach(function(e){r.loadOne(e)})}},{key:"load",value:function(e,t,r){this.prepareLoading(e,t,{},r)}},{key:"reload",value:function(e,t,r){this.prepareLoading(e,t,{reload:!0},r)}},{key:"loadOne",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=e.split("|"),o=n[0],a=n[1];this.read(o,a,"read",void 0,void 0,function(n,i){n&&t.logger.warn("".concat(r,"loading namespace ").concat(a," for language ").concat(o," failed"),n),!n&&i&&t.logger.log("".concat(r,"loaded namespace ").concat(a," for language ").concat(o),i),t.loaded(e,n,i)})}},{key:"saveMissing",value:function(e,t,r,n,o){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},i=arguments.length>6&&void 0!==arguments[6]?arguments[6]:function(){};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(t))this.logger.warn('did not save key "'.concat(r,'" as the namespace "').concat(t,'" was not yet loaded'),"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");else if(void 0!==r&&null!==r&&""!==r){if(this.backend&&this.backend.create){var l=ue(ue({},a),{},{isUpdate:o}),s=this.backend.create.bind(this.backend);if(s.length<6)try{var c;(c=5===s.length?s(e,t,r,n,l):s(e,t,r,n))&&"function"===typeof c.then?c.then(function(e){return i(null,e)}).catch(i):i(null,c)}catch(u){i(u)}else s(e,t,r,n,i,l)}e&&e[0]&&this.store.addResource(e[0],t,r,n)}}}]),r}(C);function fe(){return{debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!0,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:function(e){var t={};if("object"===o(e[1])&&(t=e[1]),"string"===typeof e[1]&&(t.defaultValue=e[1]),"string"===typeof e[2]&&(t.tDescription=e[2]),"object"===o(e[2])||"object"===o(e[3])){var r=e[3]||e[2];Object.keys(r).forEach(function(e){t[e]=r[e]})}return t},interpolation:{escapeValue:!0,format:function(e,t,r,n){return e},prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}}function he(e){return"string"===typeof e.ns&&(e.ns=[e.ns]),"string"===typeof e.fallbackLng&&(e.fallbackLng=[e.fallbackLng]),"string"===typeof e.fallbackNS&&(e.fallbackNS=[e.fallbackNS]),e.supportedLngs&&e.supportedLngs.indexOf("cimode")<0&&(e.supportedLngs=e.supportedLngs.concat(["cimode"])),e}function me(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function ge(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?me(Object(r),!0).forEach(function(t){h(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):me(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function ve(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var r,n=f(e);if(t){var o=f(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return p(this,r)}}function ye(){}var be=function(e){d(r,e);var t=ve(r);function r(){var e,n,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;if(a(this,r),e=t.call(this),D&&C.call(c(e)),e.options=he(o),e.services={},e.logger=j,e.modules={external:[]},n=c(e),Object.getOwnPropertyNames(Object.getPrototypeOf(n)).forEach(function(e){"function"===typeof n[e]&&(n[e]=n[e].bind(n))}),i&&!e.isInitialized&&!o.isClone){if(!e.options.initImmediate)return e.init(o,i),p(e,c(e));setTimeout(function(){e.init(o,i)},0)}return e}return s(r,[{key:"init",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0;"function"===typeof t&&(r=t,t={}),!t.defaultNS&&!1!==t.defaultNS&&t.ns&&("string"===typeof t.ns?t.defaultNS=t.ns:t.ns.indexOf("translation")<0&&(t.defaultNS=t.ns[0]));var n=fe();function o(e){return e?"function"===typeof e?new e:e:null}if(this.options=ge(ge(ge({},n),this.options),he(t)),"v1"!==this.options.compatibilityAPI&&(this.options.interpolation=ge(ge({},n.interpolation),this.options.interpolation)),void 0!==t.keySeparator&&(this.options.userDefinedKeySeparator=t.keySeparator),void 0!==t.nsSeparator&&(this.options.userDefinedNsSeparator=t.nsSeparator),!this.options.isClone){var a;this.modules.logger?j.init(o(this.modules.logger),this.options):j.init(null,this.options),this.modules.formatter?a=this.modules.formatter:"undefined"!==typeof Intl&&(a=se);var i=new Q(this.options);this.store=new U(this.options.resources,this.options);var l=this.services;l.logger=j,l.resourceStore=this.store,l.languageUtils=i,l.pluralResolver=new ee(i,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),!a||this.options.interpolation.format&&this.options.interpolation.format!==n.interpolation.format||(l.formatter=o(a),l.formatter.init(l,this.options),this.options.interpolation.format=l.formatter.format.bind(l.formatter)),l.interpolator=new oe(this.options),l.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},l.backendConnector=new pe(o(this.modules.backend),l.resourceStore,l,this.options),l.backendConnector.on("*",function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];e.emit.apply(e,[t].concat(n))}),this.modules.languageDetector&&(l.languageDetector=o(this.modules.languageDetector),l.languageDetector.init&&l.languageDetector.init(l,this.options.detection,this.options)),this.modules.i18nFormat&&(l.i18nFormat=o(this.modules.i18nFormat),l.i18nFormat.init&&l.i18nFormat.init(this)),this.translator=new K(this.services,this.options),this.translator.on("*",function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];e.emit.apply(e,[t].concat(n))}),this.modules.external.forEach(function(t){t.init&&t.init(e)})}if(this.format=this.options.interpolation.format,r||(r=ye),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){var s=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);s.length>0&&"dev"!==s[0]&&(this.options.lng=s[0])}this.services.languageDetector||this.options.lng||this.logger.warn("init: no languageDetector is used and no lng is defined");["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(function(t){e[t]=function(){var r;return(r=e.store)[t].apply(r,arguments)}});["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(function(t){e[t]=function(){var r;return(r=e.store)[t].apply(r,arguments),e}});var c=E(),u=function(){var t=function(t,n){e.isInitialized&&!e.initializedStoreOnce&&e.logger.warn("init: i18next is already initialized. You should call init just once!"),e.isInitialized=!0,e.options.isClone||e.logger.log("initialized",e.options),e.emit("initialized",e.options),c.resolve(n),r(t,n)};if(e.languages&&"v1"!==e.options.compatibilityAPI&&!e.isInitialized)return t(null,e.t.bind(e));e.changeLanguage(e.options.lng,t)};return this.options.resources||!this.options.initImmediate?u():setTimeout(u,0),c}},{key:"loadResources",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:ye,n="string"===typeof e?e:this.language;if("function"===typeof e&&(r=e),!this.options.resources||this.options.partialBundledLanguages){if(n&&"cimode"===n.toLowerCase())return r();var o=[],a=function(e){e&&t.services.languageUtils.toResolveHierarchy(e).forEach(function(e){o.indexOf(e)<0&&o.push(e)})};if(n)a(n);else this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(function(e){return a(e)});this.options.preload&&this.options.preload.forEach(function(e){return a(e)}),this.services.backendConnector.load(o,this.options.ns,function(e){e||t.resolvedLanguage||!t.language||t.setResolvedLanguage(t.language),r(e)})}else r(null)}},{key:"reloadResources",value:function(e,t,r){var n=E();return e||(e=this.languages),t||(t=this.options.ns),r||(r=ye),this.services.backendConnector.reload(e,t,function(e){n.resolve(),r(e)}),n}},{key:"use",value:function(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return"backend"===e.type&&(this.modules.backend=e),("logger"===e.type||e.log&&e.warn&&e.error)&&(this.modules.logger=e),"languageDetector"===e.type&&(this.modules.languageDetector=e),"i18nFormat"===e.type&&(this.modules.i18nFormat=e),"postProcessor"===e.type&&B.addPostProcessor(e),"formatter"===e.type&&(this.modules.formatter=e),"3rdParty"===e.type&&this.modules.external.push(e),this}},{key:"setResolvedLanguage",value:function(e){if(e&&this.languages&&!(["cimode","dev"].indexOf(e)>-1))for(var t=0;t<this.languages.length;t++){var r=this.languages[t];if(!(["cimode","dev"].indexOf(r)>-1)&&this.store.hasLanguageSomeTranslations(r)){this.resolvedLanguage=r;break}}}},{key:"changeLanguage",value:function(e,t){var r=this;this.isLanguageChangingTo=e;var n=E();this.emit("languageChanging",e);var o=function(e){r.language=e,r.languages=r.services.languageUtils.toResolveHierarchy(e),r.resolvedLanguage=void 0,r.setResolvedLanguage(e)},a=function(a){e||a||!r.services.languageDetector||(a=[]);var i="string"===typeof a?a:r.services.languageUtils.getBestMatchFromCodes(a);i&&(r.language||o(i),r.translator.language||r.translator.changeLanguage(i),r.services.languageDetector&&r.services.languageDetector.cacheUserLanguage&&r.services.languageDetector.cacheUserLanguage(i)),r.loadResources(i,function(e){!function(e,a){a?(o(a),r.translator.changeLanguage(a),r.isLanguageChangingTo=void 0,r.emit("languageChanged",a),r.logger.log("languageChanged",a)):r.isLanguageChangingTo=void 0,n.resolve(function(){return r.t.apply(r,arguments)}),t&&t(e,function(){return r.t.apply(r,arguments)})}(e,i)})};return e||!this.services.languageDetector||this.services.languageDetector.async?!e&&this.services.languageDetector&&this.services.languageDetector.async?0===this.services.languageDetector.detect.length?this.services.languageDetector.detect().then(a):this.services.languageDetector.detect(a):a(e):a(this.services.languageDetector.detect()),n}},{key:"getFixedT",value:function(e,t,r){var n=this,a=function e(t,a){var i;if("object"!==o(a)){for(var l=arguments.length,s=new Array(l>2?l-2:0),c=2;c<l;c++)s[c-2]=arguments[c];i=n.options.overloadTranslationOptionHandler([t,a].concat(s))}else i=ge({},a);i.lng=i.lng||e.lng,i.lngs=i.lngs||e.lngs,i.ns=i.ns||e.ns,i.keyPrefix=i.keyPrefix||r||e.keyPrefix;var u,d=n.options.keySeparator||".";return u=i.keyPrefix&&Array.isArray(t)?t.map(function(e){return"".concat(i.keyPrefix).concat(d).concat(e)}):i.keyPrefix?"".concat(i.keyPrefix).concat(d).concat(t):t,n.t(u,i)};return"string"===typeof e?a.lng=e:a.lngs=e,a.ns=t,a.keyPrefix=r,a}},{key:"t",value:function(){var e;return this.translator&&(e=this.translator).translate.apply(e,arguments)}},{key:"exists",value:function(){var e;return this.translator&&(e=this.translator).exists.apply(e,arguments)}},{key:"setDefaultNamespace",value:function(e){this.options.defaultNS=e}},{key:"hasLoadedNamespace",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;var n=this.resolvedLanguage||this.languages[0],o=!!this.options&&this.options.fallbackLng,a=this.languages[this.languages.length-1];if("cimode"===n.toLowerCase())return!0;var i=function(e,r){var n=t.services.backendConnector.state["".concat(e,"|").concat(r)];return-1===n||2===n};if(r.precheck){var l=r.precheck(this,i);if(void 0!==l)return l}return!!this.hasResourceBundle(n,e)||(!(this.services.backendConnector.backend&&(!this.options.resources||this.options.partialBundledLanguages))||!(!i(n,e)||o&&!i(a,e)))}},{key:"loadNamespaces",value:function(e,t){var r=this,n=E();return this.options.ns?("string"===typeof e&&(e=[e]),e.forEach(function(e){r.options.ns.indexOf(e)<0&&r.options.ns.push(e)}),this.loadResources(function(e){n.resolve(),t&&t(e)}),n):(t&&t(),Promise.resolve())}},{key:"loadLanguages",value:function(e,t){var r=E();"string"===typeof e&&(e=[e]);var n=this.options.preload||[],o=e.filter(function(e){return n.indexOf(e)<0});return o.length?(this.options.preload=n.concat(o),this.loadResources(function(e){r.resolve(),t&&t(e)}),r):(t&&t(),Promise.resolve())}},{key:"dir",value:function(e){if(e||(e=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!e)return"rtl";var t=this.services&&this.services.languageUtils||new Q(fe());return["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"].indexOf(t.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}},{key:"cloneInstance",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:ye,o=ge(ge(ge({},this.options),t),{isClone:!0}),a=new r(o);void 0===t.debug&&void 0===t.prefix||(a.logger=a.logger.clone(t));return["store","services","language"].forEach(function(t){a[t]=e[t]}),a.services=ge({},this.services),a.services.utils={hasLoadedNamespace:a.hasLoadedNamespace.bind(a)},a.translator=new K(a.services,a.options),a.translator.on("*",function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];a.emit.apply(a,[e].concat(r))}),a.init(o,n),a.translator.options=a.options,a.translator.backendConnector.services.utils={hasLoadedNamespace:a.hasLoadedNamespace.bind(a)},a}},{key:"toJSON",value:function(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}]),r}(C);h(be,"createInstance",function(){return new be(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},arguments.length>1?arguments[1]:void 0)});var xe=be.createInstance();xe.createInstance=be.createInstance;xe.createInstance,xe.dir,xe.init,xe.loadResources,xe.reloadResources,xe.use,xe.changeLanguage,xe.getFixedT,xe.t,xe.exists,xe.setDefaultNamespace,xe.hasLoadedNamespace,xe.loadNamespaces,xe.loadLanguages;var we=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34);/g,Se={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"'},ke=function(e){return Se[e]};function je(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function Ce(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?je(Object(r),!0).forEach(function(t){h(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):je(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var Ee,Pe={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:function(e){return e.replace(we,ke)}},Oe=(0,e.createContext)();var _e=function(){function e(){a(this,e),this.usedNamespaces={}}return s(e,[{key:"addUsedNamespaces",value:function(e){var t=this;e.forEach(function(e){t.usedNamespaces[e]||(t.usedNamespaces[e]=!0)})}},{key:"getUsedNamespaces",value:function(){return Object.keys(this.usedNamespaces)}}]),e}();function Re(){return Ee}var Ne={type:"3rdParty",init:function(e){!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Pe=Ce(Ce({},Pe),e)}(e.options.react),function(e){Ee=e}(e)}};var Te=[],Le=Te.forEach,ze=Te.slice;var De=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,Ie=function(e,t,r,n){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{path:"/",sameSite:"strict"};r&&(o.expires=new Date,o.expires.setTime(o.expires.getTime()+60*r*1e3)),n&&(o.domain=n),document.cookie=function(e,t,r){var n=r||{};n.path=n.path||"/";var o=e+"="+encodeURIComponent(t);if(n.maxAge>0){var a=n.maxAge-0;if(isNaN(a))throw new Error("maxAge should be a Number");o+="; Max-Age="+Math.floor(a)}if(n.domain){if(!De.test(n.domain))throw new TypeError("option domain is invalid");o+="; Domain="+n.domain}if(n.path){if(!De.test(n.path))throw new TypeError("option path is invalid");o+="; Path="+n.path}if(n.expires){if("function"!==typeof n.expires.toUTCString)throw new TypeError("option expires is invalid");o+="; Expires="+n.expires.toUTCString()}if(n.httpOnly&&(o+="; HttpOnly"),n.secure&&(o+="; Secure"),n.sameSite)switch("string"===typeof n.sameSite?n.sameSite.toLowerCase():n.sameSite){case!0:o+="; SameSite=Strict";break;case"lax":o+="; SameSite=Lax";break;case"strict":o+="; SameSite=Strict";break;case"none":o+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return o}(e,encodeURIComponent(t),o)},$e=function(e){for(var t=e+"=",r=document.cookie.split(";"),n=0;n<r.length;n++){for(var o=r[n];" "===o.charAt(0);)o=o.substring(1,o.length);if(0===o.indexOf(t))return o.substring(t.length,o.length)}return null},Fe={name:"cookie",lookup:function(e){var t;if(e.lookupCookie&&"undefined"!==typeof document){var r=$e(e.lookupCookie);r&&(t=r)}return t},cacheUserLanguage:function(e,t){t.lookupCookie&&"undefined"!==typeof document&&Ie(t.lookupCookie,e,t.cookieMinutes,t.cookieDomain,t.cookieOptions)}},Ae={name:"querystring",lookup:function(e){var t;if("undefined"!==typeof window)for(var r=window.location.search.substring(1).split("&"),n=0;n<r.length;n++){var o=r[n].indexOf("=");if(o>0)r[n].substring(0,o)===e.lookupQuerystring&&(t=r[n].substring(o+1))}return t}},Me=null,Ue=function(){if(null!==Me)return Me;try{Me="undefined"!==window&&null!==window.localStorage;var e="i18next.translate.boo";window.localStorage.setItem(e,"foo"),window.localStorage.removeItem(e)}catch(t){Me=!1}return Me},Be={name:"localStorage",lookup:function(e){var t;if(e.lookupLocalStorage&&Ue()){var r=window.localStorage.getItem(e.lookupLocalStorage);r&&(t=r)}return t},cacheUserLanguage:function(e,t){t.lookupLocalStorage&&Ue()&&window.localStorage.setItem(t.lookupLocalStorage,e)}},He=null,Ve=function(){if(null!==He)return He;try{He="undefined"!==window&&null!==window.sessionStorage;var e="i18next.translate.boo";window.sessionStorage.setItem(e,"foo"),window.sessionStorage.removeItem(e)}catch(t){He=!1}return He},We={name:"sessionStorage",lookup:function(e){var t;if(e.lookupSessionStorage&&Ve()){var r=window.sessionStorage.getItem(e.lookupSessionStorage);r&&(t=r)}return t},cacheUserLanguage:function(e,t){t.lookupSessionStorage&&Ve()&&window.sessionStorage.setItem(t.lookupSessionStorage,e)}},Ge={name:"navigator",lookup:function(e){var t=[];if("undefined"!==typeof navigator){if(navigator.languages)for(var r=0;r<navigator.languages.length;r++)t.push(navigator.languages[r]);navigator.userLanguage&&t.push(navigator.userLanguage),navigator.language&&t.push(navigator.language)}return t.length>0?t:void 0}},Ke={name:"htmlTag",lookup:function(e){var t,r=e.htmlTag||("undefined"!==typeof document?document.documentElement:null);return r&&"function"===typeof r.getAttribute&&(t=r.getAttribute("lang")),t}},qe={name:"path",lookup:function(e){var t;if("undefined"!==typeof window){var r=window.location.pathname.match(/\/([a-zA-Z-]*)/g);if(r instanceof Array)if("number"===typeof e.lookupFromPathIndex){if("string"!==typeof r[e.lookupFromPathIndex])return;t=r[e.lookupFromPathIndex].replace("/","")}else t=r[0].replace("/","")}return t}},Qe={name:"subdomain",lookup:function(e){var t;if("undefined"!==typeof window){var r=window.location.href.match(/(?:http[s]*\:\/\/)*(.*?)\.(?=[^\/]*\..{2,5})/gi);r instanceof Array&&(t="number"===typeof e.lookupFromSubdomainIndex?r[e.lookupFromSubdomainIndex].replace("http://","").replace("https://","").replace(".",""):r[0].replace("http://","").replace("https://","").replace(".",""))}return t}};var Xe=function(){function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};a(this,e),this.type="languageDetector",this.detectors={},this.init(t,r)}return s(e,[{key:"init",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.services=e,this.options=function(e){return Le.call(ze.call(arguments,1),function(t){if(t)for(var r in t)void 0===e[r]&&(e[r]=t[r])}),e}(t,this.options||{},{order:["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"],lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"]}),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=r,this.addDetector(Fe),this.addDetector(Ae),this.addDetector(Be),this.addDetector(We),this.addDetector(Ge),this.addDetector(Ke),this.addDetector(qe),this.addDetector(Qe)}},{key:"addDetector",value:function(e){this.detectors[e.name]=e}},{key:"detect",value:function(e){var t=this;e||(e=this.options.order);var r=[];return e.forEach(function(e){if(t.detectors[e]){var n=t.detectors[e].lookup(t.options);n&&"string"===typeof n&&(n=[n]),n&&(r=r.concat(n))}}),this.services.languageUtils.getBestMatchFromCodes?r:r.length>0?r[0]:null}},{key:"cacheUserLanguage",value:function(e,t){var r=this;t||(t=this.options.caches),t&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(e)>-1||t.forEach(function(t){r.detectors[t]&&r.detectors[t].cacheUserLanguage(e,r.options)}))}}]),e}();Xe.type="languageDetector";const Ye=Xe,Je={en:{translation:JSON.parse('{"app":{"name":"GameTech Store","tagline":"Your Ultimate Gaming & PC Building Destination"},"nav":{"home":"Home","store":"Store","pcBuilder":"PC Builder","account":"Account","cart":"Cart","search":"Search","language":"Language","theme":"Theme"},"categories":{"games":"Games","accessories":"Accessories","components":"Components","peripherals":"Peripherals"},"pcBuilder":{"title":"Build Your PC","subtitle":"Select components and check compatibility","processor":"Processor","motherboard":"Motherboard","memory":"Memory","graphics":"Graphics Card","storage":"Storage","powerSupply":"Power Supply","case":"Case","cooling":"Cooling","compatibility":"Compatibility","compatibilityScore":"Compatibility Score","powerConsumption":"Power Consumption","performanceEstimate":"Performance Estimate","saveConfig":"Save Configuration","shareConfig":"Share Configuration","addToCart":"Add All to Cart"},"product":{"addToCart":"Add to Cart","addToWishlist":"Add to Wishlist","compare":"Compare","specifications":"Specifications","reviews":"Reviews","relatedProducts":"Related Products","inStock":"In Stock","outOfStock":"Out of Stock","quantity":"Quantity","new":"NEW","sale":"SALE"},"cart":{"title":"Shopping Cart","empty":"Your cart is empty","continueShopping":"Continue Shopping","checkout":"Checkout","total":"Total","subtotal":"Subtotal","tax":"Tax","shipping":"Shipping","discount":"Discount","promoCode":"Promo Code","apply":"Apply","addedToCart":"added to cart"},"account":{"login":"Login","register":"Register","profile":"Profile","orders":"Orders","wishlist":"Wishlist","savedConfigs":"Saved Configurations","notifications":"Notifications","logout":"Logout"},"footer":{"about":"About Us","contact":"Contact","faq":"FAQ","support":"Support","terms":"Terms & Conditions","privacy":"Privacy Policy","copyright":"\xa9 2025 GameTech Store. All rights reserved."},"theme":{"light":"Light Mode","dark":"Dark Mode"},"language":{"en":"English","ar":"\u0627\u0644\u0639\u0631\u0628\u064a\u0629"},"search":{"placeholder":"Search products...","noResults":"No products found"},"home":{"browseCategories":"Browse Categories","featuredProducts":"Featured Products","bestSellers":"Best Sellers","pcBuilderPromo":"Create your perfect gaming setup with our PC Builder tool. Choose compatible components and get performance estimates.","startBuilding":"Start Building"}}')},ar:{translation:JSON.parse('{"app":{"name":"\u0645\u062a\u062c\u0631 \u062c\u064a\u0645 \u062a\u0643","tagline":"\u0648\u062c\u0647\u062a\u0643 \u0627\u0644\u0645\u062b\u0627\u0644\u064a\u0629 \u0644\u0644\u0623\u0644\u0639\u0627\u0628 \u0648\u0628\u0646\u0627\u0621 \u0627\u0644\u062d\u0648\u0627\u0633\u064a\u0628"},"nav":{"home":"\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629","store":"\u0627\u0644\u0645\u062a\u062c\u0631","pcBuilder":"\u0627\u0628\u0646\u064a \u062d\u0627\u0633\u0648\u0628\u064a","account":"\u0627\u0644\u062d\u0633\u0627\u0628","cart":"\u0633\u0644\u0629 \u0627\u0644\u062a\u0633\u0648\u0642","search":"\u0628\u062d\u062b","language":"\u0627\u0644\u0644\u063a\u0629","theme":"\u0627\u0644\u0645\u0638\u0647\u0631"},"categories":{"games":"\u0627\u0644\u0623\u0644\u0639\u0627\u0628","accessories":"\u0627\u0644\u0645\u0644\u062d\u0642\u0627\u062a","components":"\u0627\u0644\u0642\u0637\u0639","peripherals":"\u0627\u0644\u0625\u0643\u0633\u0633\u0648\u0627\u0631\u0627\u062a"},"pcBuilder":{"title":"\u0627\u0628\u0646\u064a \u062d\u0627\u0633\u0648\u0628\u0643","subtitle":"\u0627\u062e\u062a\u0631 \u0627\u0644\u0645\u0643\u0648\u0646\u0627\u062a \u0648\u062a\u062d\u0642\u0642 \u0645\u0646 \u0627\u0644\u062a\u0648\u0627\u0641\u0642","processor":"\u0627\u0644\u0645\u0639\u0627\u0644\u062c","motherboard":"\u0627\u0644\u0644\u0648\u062d\u0629 \u0627\u0644\u0623\u0645","memory":"\u0627\u0644\u0630\u0627\u0643\u0631\u0629","graphics":"\u0628\u0637\u0627\u0642\u0629 \u0627\u0644\u0631\u0633\u0648\u0645\u064a\u0627\u062a","storage":"\u0627\u0644\u062a\u062e\u0632\u064a\u0646","powerSupply":"\u0645\u0632\u0648\u062f \u0627\u0644\u0637\u0627\u0642\u0629","case":"\u0627\u0644\u0647\u064a\u0643\u0644","cooling":"\u0627\u0644\u062a\u0628\u0631\u064a\u062f","compatibility":"\u0627\u0644\u062a\u0648\u0627\u0641\u0642","compatibilityScore":"\u0646\u0633\u0628\u0629 \u0627\u0644\u062a\u0648\u0627\u0641\u0642","powerConsumption":"\u0627\u0633\u062a\u0647\u0644\u0627\u0643 \u0627\u0644\u0637\u0627\u0642\u0629","performanceEstimate":"\u062a\u0642\u062f\u064a\u0631 \u0627\u0644\u0623\u062f\u0627\u0621","saveConfig":"\u062d\u0641\u0638 \u0627\u0644\u062a\u0643\u0648\u064a\u0646","shareConfig":"\u0645\u0634\u0627\u0631\u0643\u0629 \u0627\u0644\u062a\u0643\u0648\u064a\u0646","addToCart":"\u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0643\u0644 \u0625\u0644\u0649 \u0627\u0644\u0633\u0644\u0629"},"product":{"addToCart":"\u0625\u0636\u0627\u0641\u0629 \u0625\u0644\u0649 \u0627\u0644\u0633\u0644\u0629","addToWishlist":"\u0625\u0636\u0627\u0641\u0629 \u0625\u0644\u0649 \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0631\u063a\u0628\u0627\u062a","compare":"\u0645\u0642\u0627\u0631\u0646\u0629","specifications":"\u0627\u0644\u0645\u0648\u0627\u0635\u0641\u0627\u062a","reviews":"\u0627\u0644\u062a\u0642\u064a\u064a\u0645\u0627\u062a","relatedProducts":"\u0645\u0646\u062a\u062c\u0627\u062a \u0630\u0627\u062a \u0635\u0644\u0629","inStock":"\u0645\u062a\u0648\u0641\u0631","outOfStock":"\u063a\u064a\u0631 \u0645\u062a\u0648\u0641\u0631","quantity":"\u0627\u0644\u0643\u0645\u064a\u0629","new":"\u062c\u062f\u064a\u062f","sale":"\u062a\u062e\u0641\u064a\u0636"},"cart":{"title":"\u0633\u0644\u0629 \u0627\u0644\u062a\u0633\u0648\u0642","empty":"\u0633\u0644\u0629 \u0627\u0644\u062a\u0633\u0648\u0642 \u0641\u0627\u0631\u063a\u0629","continueShopping":"\u0645\u062a\u0627\u0628\u0639\u0629 \u0627\u0644\u062a\u0633\u0648\u0642","checkout":"\u0625\u062a\u0645\u0627\u0645 \u0627\u0644\u0634\u0631\u0627\u0621","total":"\u0627\u0644\u0645\u062c\u0645\u0648\u0639","subtotal":"\u0627\u0644\u0645\u062c\u0645\u0648\u0639 \u0627\u0644\u0641\u0631\u0639\u064a","tax":"\u0627\u0644\u0636\u0631\u064a\u0628\u0629","shipping":"\u0627\u0644\u0634\u062d\u0646","discount":"\u0627\u0644\u062e\u0635\u0645","promoCode":"\u0631\u0645\u0632 \u0627\u0644\u062e\u0635\u0645","apply":"\u062a\u0637\u0628\u064a\u0642","addedToCart":"\u062a\u0645 \u0625\u0636\u0627\u0641\u062a\u0647 \u0625\u0644\u0649 \u0627\u0644\u0633\u0644\u0629"},"account":{"login":"\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644","register":"\u0625\u0646\u0634\u0627\u0621 \u062d\u0633\u0627\u0628","profile":"\u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0634\u062e\u0635\u064a","orders":"\u0627\u0644\u0637\u0644\u0628\u0627\u062a","wishlist":"\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0631\u063a\u0628\u0627\u062a","savedConfigs":"\u0627\u0644\u062a\u0643\u0648\u064a\u0646\u0627\u062a \u0627\u0644\u0645\u062d\u0641\u0648\u0638\u0629","notifications":"\u0627\u0644\u0625\u0634\u0639\u0627\u0631\u0627\u062a","logout":"\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062e\u0631\u0648\u062c"},"footer":{"about":"\u0645\u0646 \u0646\u062d\u0646","contact":"\u0627\u062a\u0635\u0644 \u0628\u0646\u0627","faq":"\u0627\u0644\u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629","support":"\u0627\u0644\u062f\u0639\u0645","terms":"\u0627\u0644\u0634\u0631\u0648\u0637 \u0648\u0627\u0644\u0623\u062d\u0643\u0627\u0645","privacy":"\u0633\u064a\u0627\u0633\u0629 \u0627\u0644\u062e\u0635\u0648\u0635\u064a\u0629","copyright":"\xa9 2025 \u0645\u062a\u062c\u0631 \u062c\u064a\u0645 \u062a\u0643. \u062c\u0645\u064a\u0639 \u0627\u0644\u062d\u0642\u0648\u0642 \u0645\u062d\u0641\u0648\u0638\u0629."},"theme":{"light":"\u0627\u0644\u0648\u0636\u0639 \u0627\u0644\u0641\u0627\u062a\u062d","dark":"\u0627\u0644\u0648\u0636\u0639 \u0627\u0644\u0645\u0638\u0644\u0645"},"language":{"en":"English","ar":"\u0627\u0644\u0639\u0631\u0628\u064a\u0629"},"search":{"placeholder":"\u0627\u0644\u0628\u062d\u062b \u0639\u0646 \u0627\u0644\u0645\u0646\u062a\u062c\u0627\u062a...","noResults":"\u0644\u0645 \u064a\u062a\u0645 \u0627\u0644\u0639\u062b\u0648\u0631 \u0639\u0644\u0649 \u0645\u0646\u062a\u062c\u0627\u062a"},"home":{"browseCategories":"\u062a\u0635\u0641\u062d \u0627\u0644\u0641\u0626\u0627\u062a","featuredProducts":"\u0627\u0644\u0645\u0646\u062a\u062c\u0627\u062a \u0627\u0644\u0645\u0645\u064a\u0632\u0629","bestSellers":"\u0627\u0644\u0623\u0643\u062b\u0631 \u0645\u0628\u064a\u0639\u0627\u064b","pcBuilderPromo":"\u0623\u0646\u0634\u0626 \u0625\u0639\u062f\u0627\u062f \u0627\u0644\u0623\u0644\u0639\u0627\u0628 \u0627\u0644\u0645\u062b\u0627\u0644\u064a \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0623\u062f\u0627\u0629 \u0628\u0646\u0627\u0621 \u0627\u0644\u062d\u0627\u0633\u0648\u0628. \u0627\u062e\u062a\u0631 \u0627\u0644\u0645\u0643\u0648\u0646\u0627\u062a \u0627\u0644\u0645\u062a\u0648\u0627\u0641\u0642\u0629 \u0648\u0627\u062d\u0635\u0644 \u0639\u0644\u0649 \u062a\u0642\u062f\u064a\u0631\u0627\u062a \u0627\u0644\u0623\u062f\u0627\u0621.","startBuilding":"\u0627\u0628\u062f\u0623 \u0627\u0644\u0628\u0646\u0627\u0621"}}')}};xe.use(Ye).use(Ne).init({resources:Je,fallbackLng:"en",debug:!1,interpolation:{escapeValue:!1},detection:{order:["localStorage","navigator","htmlTag"],caches:["localStorage"]}});var Ze,et=r(950),tt=r.t(et,2);function rt(){return rt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},rt.apply(this,arguments)}!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(Ze||(Ze={}));const nt="popstate";function ot(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function at(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(r){}}}function it(e,t){return{usr:e.state,key:e.key,idx:t}}function lt(e,t,r,n){return void 0===r&&(r=null),rt({pathname:"string"===typeof e?e:e.pathname,search:"",hash:""},"string"===typeof t?ct(t):t,{state:r,key:t&&t.key||n||Math.random().toString(36).substr(2,8)})}function st(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&"?"!==r&&(t+="?"===r.charAt(0)?r:"?"+r),n&&"#"!==n&&(t+="#"===n.charAt(0)?n:"#"+n),t}function ct(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function ut(e,t,r,n){void 0===n&&(n={});let{window:o=document.defaultView,v5Compat:a=!1}=n,i=o.history,l=Ze.Pop,s=null,c=u();function u(){return(i.state||{idx:null}).idx}function d(){l=Ze.Pop;let e=u(),t=null==e?null:e-c;c=e,s&&s({action:l,location:f.location,delta:t})}function p(e){let t="null"!==o.location.origin?o.location.origin:o.location.href,r="string"===typeof e?e:st(e);return r=r.replace(/ $/,"%20"),ot(t,"No window.location.(origin|href) available to create URL for href: "+r),new URL(r,t)}null==c&&(c=0,i.replaceState(rt({},i.state,{idx:c}),""));let f={get action(){return l},get location(){return e(o,i)},listen(e){if(s)throw new Error("A history only accepts one active listener");return o.addEventListener(nt,d),s=e,()=>{o.removeEventListener(nt,d),s=null}},createHref:e=>t(o,e),createURL:p,encodeLocation(e){let t=p(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){l=Ze.Push;let n=lt(f.location,e,t);r&&r(n,e),c=u()+1;let d=it(n,c),p=f.createHref(n);try{i.pushState(d,"",p)}catch(h){if(h instanceof DOMException&&"DataCloneError"===h.name)throw h;o.location.assign(p)}a&&s&&s({action:l,location:f.location,delta:1})},replace:function(e,t){l=Ze.Replace;let n=lt(f.location,e,t);r&&r(n,e),c=u();let o=it(n,c),d=f.createHref(n);i.replaceState(o,"",d),a&&s&&s({action:l,location:f.location,delta:0})},go:e=>i.go(e)};return f}var dt;!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(dt||(dt={}));new Set(["lazy","caseSensitive","path","id","index","children"]);function pt(e,t,r){return void 0===r&&(r="/"),ft(e,t,r,!1)}function ft(e,t,r,n){let o=Pt(("string"===typeof t?ct(t):t).pathname||"/",r);if(null==o)return null;let a=ht(e);!function(e){e.sort((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let r=e.length===t.length&&e.slice(0,-1).every((e,r)=>e===t[r]);return r?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)))}(a);let i=null;for(let l=0;null==i&&l<a.length;++l){let e=Et(o);i=jt(a[l],e,n)}return i}function ht(e,t,r,n){void 0===t&&(t=[]),void 0===r&&(r=[]),void 0===n&&(n="");let o=(e,o,a)=>{let i={relativePath:void 0===a?e.path||"":a,caseSensitive:!0===e.caseSensitive,childrenIndex:o,route:e};i.relativePath.startsWith("/")&&(ot(i.relativePath.startsWith(n),'Absolute route path "'+i.relativePath+'" nested under path "'+n+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),i.relativePath=i.relativePath.slice(n.length));let l=Tt([n,i.relativePath]),s=r.concat(i);e.children&&e.children.length>0&&(ot(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+l+'".'),ht(e.children,t,s,l)),(null!=e.path||e.index)&&t.push({path:l,score:kt(l,e.index),routesMeta:s})};return e.forEach((e,t)=>{var r;if(""!==e.path&&null!=(r=e.path)&&r.includes("?"))for(let n of mt(e.path))o(e,t,n);else o(e,t)}),t}function mt(e){let t=e.split("/");if(0===t.length)return[];let[r,...n]=t,o=r.endsWith("?"),a=r.replace(/\?$/,"");if(0===n.length)return o?[a,""]:[a];let i=mt(n.join("/")),l=[];return l.push(...i.map(e=>""===e?a:[a,e].join("/"))),o&&l.push(...i),l.map(t=>e.startsWith("/")&&""===t?"/":t)}const gt=/^:[\w-]+$/,vt=3,yt=2,bt=1,xt=10,wt=-2,St=e=>"*"===e;function kt(e,t){let r=e.split("/"),n=r.length;return r.some(St)&&(n+=wt),t&&(n+=yt),r.filter(e=>!St(e)).reduce((e,t)=>e+(gt.test(t)?vt:""===t?bt:xt),n)}function jt(e,t,r){void 0===r&&(r=!1);let{routesMeta:n}=e,o={},a="/",i=[];for(let l=0;l<n.length;++l){let e=n[l],s=l===n.length-1,c="/"===a?t:t.slice(a.length)||"/",u=Ct({path:e.relativePath,caseSensitive:e.caseSensitive,end:s},c),d=e.route;if(!u&&s&&r&&!n[n.length-1].route.index&&(u=Ct({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},c)),!u)return null;Object.assign(o,u.params),i.push({params:o,pathname:Tt([a,u.pathname]),pathnameBase:Lt(Tt([a,u.pathnameBase])),route:d}),"/"!==u.pathnameBase&&(a=Tt([a,u.pathnameBase]))}return i}function Ct(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=function(e,t,r){void 0===t&&(t=!1);void 0===r&&(r=!0);at("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let n=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(e,t,r)=>(n.push({paramName:t,isOptional:null!=r}),r?"/?([^\\/]+)?":"/([^\\/]+)"));e.endsWith("*")?(n.push({paramName:"*"}),o+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?o+="\\/*$":""!==e&&"/"!==e&&(o+="(?:(?=\\/|$))");let a=new RegExp(o,t?void 0:"i");return[a,n]}(e.path,e.caseSensitive,e.end),o=t.match(r);if(!o)return null;let a=o[0],i=a.replace(/(.)\/+$/,"$1"),l=o.slice(1);return{params:n.reduce((e,t,r)=>{let{paramName:n,isOptional:o}=t;if("*"===n){let e=l[r]||"";i=a.slice(0,a.length-e.length).replace(/(.)\/+$/,"$1")}const s=l[r];return e[n]=o&&!s?void 0:(s||"").replace(/%2F/g,"/"),e},{}),pathname:a,pathnameBase:i,pattern:e}}function Et(e){try{return e.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(t){return at(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function Pt(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&"/"!==n?null:e.slice(r)||"/"}function Ot(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the `to."+r+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function _t(e){return e.filter((e,t)=>0===t||e.route.path&&e.route.path.length>0)}function Rt(e,t){let r=_t(e);return t?r.map((e,t)=>t===r.length-1?e.pathname:e.pathnameBase):r.map(e=>e.pathnameBase)}function Nt(e,t,r,n){let o;void 0===n&&(n=!1),"string"===typeof e?o=ct(e):(o=rt({},e),ot(!o.pathname||!o.pathname.includes("?"),Ot("?","pathname","search",o)),ot(!o.pathname||!o.pathname.includes("#"),Ot("#","pathname","hash",o)),ot(!o.search||!o.search.includes("#"),Ot("#","search","hash",o)));let a,i=""===e||""===o.pathname,l=i?"/":o.pathname;if(null==l)a=r;else{let e=t.length-1;if(!n&&l.startsWith("..")){let t=l.split("/");for(;".."===t[0];)t.shift(),e-=1;o.pathname=t.join("/")}a=e>=0?t[e]:"/"}let s=function(e,t){void 0===t&&(t="/");let{pathname:r,search:n="",hash:o=""}="string"===typeof e?ct(e):e,a=r?r.startsWith("/")?r:function(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(e=>{".."===e?r.length>1&&r.pop():"."!==e&&r.push(e)}),r.length>1?r.join("/"):"/"}(r,t):t;return{pathname:a,search:zt(n),hash:Dt(o)}}(o,a),c=l&&"/"!==l&&l.endsWith("/"),u=(i||"."===l)&&r.endsWith("/");return s.pathname.endsWith("/")||!c&&!u||(s.pathname+="/"),s}const Tt=e=>e.join("/").replace(/\/\/+/g,"/"),Lt=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),zt=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",Dt=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";Error;function It(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}const $t=["post","put","patch","delete"],Ft=(new Set($t),["get",...$t]);new Set(Ft),new Set([301,302,303,307,308]),new Set([307,308]);Symbol("deferred");function At(){return At=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},At.apply(this,arguments)}const Mt=e.createContext(null);const Ut=e.createContext(null);const Bt=e.createContext(null);const Ht=e.createContext(null);const Vt=e.createContext({outlet:null,matches:[],isDataRoute:!1});const Wt=e.createContext(null);function Gt(){return null!=e.useContext(Ht)}function Kt(){return Gt()||ot(!1),e.useContext(Ht).location}function qt(t){e.useContext(Bt).static||e.useLayoutEffect(t)}function Qt(){let{isDataRoute:t}=e.useContext(Vt);return t?function(){let{router:t}=or(rr.UseNavigateStable),r=ir(nr.UseNavigateStable),n=e.useRef(!1);return qt(()=>{n.current=!0}),e.useCallback(function(e,o){void 0===o&&(o={}),n.current&&("number"===typeof e?t.navigate(e):t.navigate(e,At({fromRouteId:r},o)))},[t,r])}():function(){Gt()||ot(!1);let t=e.useContext(Mt),{basename:r,future:n,navigator:o}=e.useContext(Bt),{matches:a}=e.useContext(Vt),{pathname:i}=Kt(),l=JSON.stringify(Rt(a,n.v7_relativeSplatPath)),s=e.useRef(!1);qt(()=>{s.current=!0});let c=e.useCallback(function(e,n){if(void 0===n&&(n={}),!s.current)return;if("number"===typeof e)return void o.go(e);let a=Nt(e,JSON.parse(l),i,"path"===n.relative);null==t&&"/"!==r&&(a.pathname="/"===a.pathname?r:Tt([r,a.pathname])),(n.replace?o.replace:o.push)(a,n.state,n)},[r,o,l,i,t]);return c}()}function Xt(t,r,n,o){Gt()||ot(!1);let{navigator:a}=e.useContext(Bt),{matches:i}=e.useContext(Vt),l=i[i.length-1],s=l?l.params:{},c=(l&&l.pathname,l?l.pathnameBase:"/");l&&l.route;let u,d=Kt();if(r){var p;let e="string"===typeof r?ct(r):r;"/"===c||(null==(p=e.pathname)?void 0:p.startsWith(c))||ot(!1),u=e}else u=d;let f=u.pathname||"/",h=f;if("/"!==c){let e=c.replace(/^\//,"").split("/");h="/"+f.replace(/^\//,"").split("/").slice(e.length).join("/")}let m=pt(t,{pathname:h});let g=tr(m&&m.map(e=>Object.assign({},e,{params:Object.assign({},s,e.params),pathname:Tt([c,a.encodeLocation?a.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?c:Tt([c,a.encodeLocation?a.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])})),i,n,o);return r&&g?e.createElement(Ht.Provider,{value:{location:At({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Ze.Pop}},g):g}function Yt(){let t=function(){var t;let r=e.useContext(Wt),n=ar(nr.UseRouteError),o=ir(nr.UseRouteError);if(void 0!==r)return r;return null==(t=n.errors)?void 0:t[o]}(),r=It(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,o="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:o};return e.createElement(e.Fragment,null,e.createElement("h2",null,"Unexpected Application Error!"),e.createElement("h3",{style:{fontStyle:"italic"}},r),n?e.createElement("pre",{style:a},n):null,null)}const Jt=e.createElement(Yt,null);class Zt extends e.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?e.createElement(Vt.Provider,{value:this.props.routeContext},e.createElement(Wt.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function er(t){let{routeContext:r,match:n,children:o}=t,a=e.useContext(Mt);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),e.createElement(Vt.Provider,{value:r},o)}function tr(t,r,n,o){var a;if(void 0===r&&(r=[]),void 0===n&&(n=null),void 0===o&&(o=null),null==t){var i;if(!n)return null;if(n.errors)t=n.matches;else{if(!(null!=(i=o)&&i.v7_partialHydration&&0===r.length&&!n.initialized&&n.matches.length>0))return null;t=n.matches}}let l=t,s=null==(a=n)?void 0:a.errors;if(null!=s){let e=l.findIndex(e=>e.route.id&&void 0!==(null==s?void 0:s[e.route.id]));e>=0||ot(!1),l=l.slice(0,Math.min(l.length,e+1))}let c=!1,u=-1;if(n&&o&&o.v7_partialHydration)for(let e=0;e<l.length;e++){let t=l[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(u=e),t.route.id){let{loaderData:e,errors:r}=n,o=t.route.loader&&void 0===e[t.route.id]&&(!r||void 0===r[t.route.id]);if(t.route.lazy||o){c=!0,l=u>=0?l.slice(0,u+1):[l[0]];break}}}return l.reduceRight((t,o,a)=>{let i,d=!1,p=null,f=null;var h;n&&(i=s&&o.route.id?s[o.route.id]:void 0,p=o.route.errorElement||Jt,c&&(u<0&&0===a?(h="route-fallback",!1||lr[h]||(lr[h]=!0),d=!0,f=null):u===a&&(d=!0,f=o.route.hydrateFallbackElement||null)));let m=r.concat(l.slice(0,a+1)),g=()=>{let r;return r=i?p:d?f:o.route.Component?e.createElement(o.route.Component,null):o.route.element?o.route.element:t,e.createElement(er,{match:o,routeContext:{outlet:t,matches:m,isDataRoute:null!=n},children:r})};return n&&(o.route.ErrorBoundary||o.route.errorElement||0===a)?e.createElement(Zt,{location:n.location,revalidation:n.revalidation,component:p,error:i,children:g(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):g()},null)}var rr=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(rr||{}),nr=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(nr||{});function or(t){let r=e.useContext(Mt);return r||ot(!1),r}function ar(t){let r=e.useContext(Ut);return r||ot(!1),r}function ir(t){let r=function(){let t=e.useContext(Vt);return t||ot(!1),t}(),n=r.matches[r.matches.length-1];return n.route.id||ot(!1),n.route.id}const lr={};function sr(e,t){null==e||e.v7_startTransition,void 0===(null==e?void 0:e.v7_relativeSplatPath)&&(!t||t.v7_relativeSplatPath),t&&(t.v7_fetcherPersist,t.v7_normalizeFormMethod,t.v7_partialHydration,t.v7_skipActionErrorRevalidation)}t.startTransition;function cr(e){ot(!1)}function ur(t){let{basename:r="/",children:n=null,location:o,navigationType:a=Ze.Pop,navigator:i,static:l=!1,future:s}=t;Gt()&&ot(!1);let c=r.replace(/^\/*/,"/"),u=e.useMemo(()=>({basename:c,navigator:i,static:l,future:At({v7_relativeSplatPath:!1},s)}),[c,s,i,l]);"string"===typeof o&&(o=ct(o));let{pathname:d="/",search:p="",hash:f="",state:h=null,key:m="default"}=o,g=e.useMemo(()=>{let e=Pt(d,c);return null==e?null:{location:{pathname:e,search:p,hash:f,state:h,key:m},navigationType:a}},[c,d,p,f,h,m,a]);return null==g?null:e.createElement(Bt.Provider,{value:u},e.createElement(Ht.Provider,{children:n,value:g}))}function dr(e){let{children:t,location:r}=e;return Xt(pr(t),r)}new Promise(()=>{});e.Component;function pr(t,r){void 0===r&&(r=[]);let n=[];return e.Children.forEach(t,(t,o)=>{if(!e.isValidElement(t))return;let a=[...r,o];if(t.type===e.Fragment)return void n.push.apply(n,pr(t.props.children,a));t.type!==cr&&ot(!1),t.props.index&&t.props.children&&ot(!1);let i={id:t.props.id||a.join("-"),caseSensitive:t.props.caseSensitive,element:t.props.element,Component:t.props.Component,index:t.props.index,path:t.props.path,loader:t.props.loader,action:t.props.action,errorElement:t.props.errorElement,ErrorBoundary:t.props.ErrorBoundary,hasErrorBoundary:null!=t.props.ErrorBoundary||null!=t.props.errorElement,shouldRevalidate:t.props.shouldRevalidate,handle:t.props.handle,lazy:t.props.lazy};t.props.children&&(i.children=pr(t.props.children,a)),n.push(i)}),n}new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);try{window.__reactRouterVersion="6"}catch(Uu){}new Map;const fr=t.startTransition;tt.flushSync,t.useId;function hr(t){let{basename:r,children:n,future:o,window:a}=t,i=e.useRef();var l;null==i.current&&(i.current=(void 0===(l={window:a,v5Compat:!0})&&(l={}),ut(function(e,t){let{pathname:r,search:n,hash:o}=e.location;return lt("",{pathname:r,search:n,hash:o},t.state&&t.state.usr||null,t.state&&t.state.key||"default")},function(e,t){return"string"===typeof t?t:st(t)},null,l)));let s=i.current,[c,u]=e.useState({action:s.action,location:s.location}),{v7_startTransition:d}=o||{},p=e.useCallback(e=>{d&&fr?fr(()=>u(e)):u(e)},[u,d]);return e.useLayoutEffect(()=>s.listen(p),[s,p]),e.useEffect(()=>sr(o),[o]),e.createElement(ur,{basename:r,children:n,location:c.location,navigationType:c.action,navigator:s,future:o})}"undefined"!==typeof window&&"undefined"!==typeof window.document&&window.document.createElement;var mr,gr;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(mr||(mr={})),function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(gr||(gr={}));var vr=r(579);const yr=(0,e.createContext)({theme:"light",toggleTheme:()=>{}}),br=t=>{let{children:r}=t;const[n,o]=(0,e.useState)("light");(0,e.useEffect)(()=>{const e=localStorage.getItem("theme");if(e)o(e),document.documentElement.setAttribute("data-theme",e);else{const e=window.matchMedia("(prefers-color-scheme: dark)").matches;o(e?"dark":"light"),document.documentElement.setAttribute("data-theme",e?"dark":"light")}},[]);return(0,vr.jsx)(yr.Provider,{value:{theme:n,toggleTheme:()=>{const e="light"===n?"dark":"light";o(e),localStorage.setItem("theme",e),document.documentElement.setAttribute("data-theme",e)}},children:r})};function xr(e,t){return m(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,i,l=[],s=!0,c=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;s=!1}else for(;!(s=(n=a.call(r)).done)&&(l.push(n.value),l.length!==t);s=!0);}catch(e){c=!0,o=e}finally{try{if(!s&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(c)throw o}}return l}}(e,t)||v(e,t)||y()}function wr(){if(console&&console.warn){for(var e,t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];"string"===typeof r[0]&&(r[0]="react-i18next:: ".concat(r[0])),(e=console).warn.apply(e,r)}}var Sr={};function kr(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];"string"===typeof t[0]&&Sr[t[0]]||("string"===typeof t[0]&&(Sr[t[0]]=new Date),wr.apply(void 0,t))}function jr(e,t,r){e.loadNamespaces(t,function(){if(e.isInitialized)r();else{e.on("initialized",function t(){setTimeout(function(){e.off("initialized",t)},0),r()})}})}function Cr(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function Er(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Cr(Object(r),!0).forEach(function(t){h(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Cr(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function Pr(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=r.i18n,o=(0,e.useContext)(Oe)||{},a=o.i18n,i=o.defaultNS,l=n||a||Re();if(l&&!l.reportNamespaces&&(l.reportNamespaces=new _e),!l){kr("You will need to pass in an i18next instance by using initReactI18next");var s=function(e){return Array.isArray(e)?e[e.length-1]:e},c=[s,{},!1];return c.t=s,c.i18n={},c.ready=!1,c}l.options.react&&void 0!==l.options.react.wait&&kr("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var u=Er(Er(Er({},Pe),l.options.react),r),d=u.useSuspense,p=u.keyPrefix,f=t||i||l.options&&l.options.defaultNS;f="string"===typeof f?[f]:f||["translation"],l.reportNamespaces.addUsedNamespaces&&l.reportNamespaces.addUsedNamespaces(f);var h=(l.isInitialized||l.initializedStoreOnce)&&f.every(function(e){return function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return t.languages&&t.languages.length?void 0!==t.options.ignoreJSONStructure?t.hasLoadedNamespace(e,{precheck:function(t,n){if(r.bindI18n&&r.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!n(t.isLanguageChangingTo,e))return!1}}):function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=t.languages[0],o=!!t.options&&t.options.fallbackLng,a=t.languages[t.languages.length-1];if("cimode"===n.toLowerCase())return!0;var i=function(e,r){var n=t.services.backendConnector.state["".concat(e,"|").concat(r)];return-1===n||2===n};return!(r.bindI18n&&r.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!i(t.isLanguageChangingTo,e))&&(!!t.hasResourceBundle(n,e)||!(t.services.backendConnector.backend&&(!t.options.resources||t.options.partialBundledLanguages))||!(!i(n,e)||o&&!i(a,e)))}(e,t,r):(kr("i18n.languages were undefined or empty",t.languages),!0)}(e,l,u)});function m(){return l.getFixedT(null,"fallback"===u.nsMode?f:f[0],p)}var g=xr((0,e.useState)(m),2),v=g[0],y=g[1],b=f.join(),x=function(t,r){var n=(0,e.useRef)();return(0,e.useEffect)(function(){n.current=r?n.current:t},[t,r]),n.current}(b),w=(0,e.useRef)(!0);(0,e.useEffect)(function(){var e=u.bindI18n,t=u.bindI18nStore;function r(){w.current&&y(m)}return w.current=!0,h||d||jr(l,f,function(){w.current&&y(m)}),h&&x&&x!==b&&w.current&&y(m),e&&l&&l.on(e,r),t&&l&&l.store.on(t,r),function(){w.current=!1,e&&l&&e.split(" ").forEach(function(e){return l.off(e,r)}),t&&l&&t.split(" ").forEach(function(e){return l.store.off(e,r)})}},[l,b]);var S=(0,e.useRef)(!0);(0,e.useEffect)(function(){w.current&&!S.current&&y(m),S.current=!1},[l]);var k=[v,l,h];if(k.t=v,k.i18n=l,k.ready=h,h)return k;if(!h&&!d)return k;throw new Promise(function(e){jr(l,f,function(){e()})})}const Or=(0,e.createContext)({language:"en",changeLanguage:()=>{},isRTL:!1}),_r=t=>{let{children:r}=t;const{i18n:n}=Pr(),[o,a]=(0,e.useState)(n.language||"en"),[i,l]=(0,e.useState)("ar"===n.language);(0,e.useEffect)(()=>{document.documentElement.dir=i?"rtl":"ltr",document.documentElement.lang=o},[i,o]);return(0,vr.jsx)(Or.Provider,{value:{language:o,changeLanguage:e=>{n.changeLanguage(e),a(e),l("ar"===e),localStorage.setItem("language",e)},isRTL:i},children:r})},Rr=(0,e.createContext)({cartItems:[],addToCart:()=>{},removeFromCart:()=>{},updateQuantity:()=>{},clearCart:()=>{},totalItems:0,totalPrice:0}),Nr=t=>{let{children:r}=t;const[n,o]=(0,e.useState)([]),a=e=>{o(t=>t.filter(t=>t.product.id!==e))},i=n.reduce((e,t)=>e+t.quantity,0),l=n.reduce((e,t)=>e+(t.product.discountPrice||t.product.price)*t.quantity,0);return(0,vr.jsx)(Rr.Provider,{value:{cartItems:n,addToCart:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;o(r=>r.find(t=>t.product.id===e.id)?r.map(r=>r.product.id===e.id?{...r,quantity:r.quantity+t}:r):[...r,{product:e,quantity:t}])},removeFromCart:a,updateQuantity:(e,t)=>{t<=0?a(e):o(r=>r.map(r=>r.product.id===e?{...r,quantity:t}:r))},clearCart:()=>{o([])},totalItems:i,totalPrice:l},children:r})},Tr=(0,e.createContext)({components:{processor:null,motherboard:null,memory:null,graphics:null,storage:null,powerSupply:null,case:null,cooling:null},addComponent:()=>{},removeComponent:()=>{},clearComponents:()=>{},getCompatibilityScore:()=>0,getPowerConsumption:()=>0,getPerformanceScore:()=>0,getTotalPrice:()=>0}),Lr=t=>{let{children:r}=t;const[n,o]=(0,e.useState)({processor:null,motherboard:null,memory:null,graphics:null,storage:null,powerSupply:null,case:null,cooling:null}),a=()=>Object.values(n).reduce((e,t)=>e+((null===t||void 0===t?void 0:t.powerConsumption)||0),0);return(0,vr.jsx)(Tr.Provider,{value:{components:n,addComponent:(e,t)=>{o(r=>({...r,[e]:t}))},removeComponent:e=>{o(t=>({...t,[e]:null}))},clearComponents:()=>{o({processor:null,motherboard:null,memory:null,graphics:null,storage:null,powerSupply:null,case:null,cooling:null})},getCompatibilityScore:()=>{const{processor:e,motherboard:t,memory:r,graphics:o,powerSupply:i}=n;if(!e&&!t&&!r&&!o&&!i)return 0;let l=100,s=0;var c;(e&&t&&(s++,e.specifications.socket!==t.specifications.socket&&(l-=25)),r&&t)&&(s++,null!==(c=t.compatibleWith)&&void 0!==c&&c.memoryType.includes(r.specifications.type)||(l-=20));if(i){const e=a(),t=parseInt(i.specifications.wattage);e>0&&t>0&&(s++,e>t?l-=30:e>.8*t&&(l-=10))}return 0===s?0:Math.max(0,l)},getPowerConsumption:a,getPerformanceScore:()=>{const{processor:e,graphics:t,memory:r}=n;if(!e&&!t&&!r)return 0;let o=0,a=0;return e&&(o+=e.performanceScore||0,a++),t&&(o+=t.performanceScore||0,a++),r&&(o+=r.performanceScore||0,a++),a>0?Math.round(o/a):0},getTotalPrice:()=>Object.values(n).reduce((e,t)=>e+((null===t||void 0===t?void 0:t.price)||0),0)},children:r})};var zr=function(){return zr=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},zr.apply(this,arguments)};Object.create;function Dr(e,t,r){if(r||2===arguments.length)for(var n,o=0,a=t.length;o<a;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var Ir=r(324),$r=r.n(Ir),Fr="-ms-",Ar="-moz-",Mr="-webkit-",Ur="comm",Br="rule",Hr="decl",Vr="@keyframes",Wr=Math.abs,Gr=String.fromCharCode,Kr=Object.assign;function qr(e){return e.trim()}function Qr(e,t){return(e=t.exec(e))?e[0]:e}function Xr(e,t,r){return e.replace(t,r)}function Yr(e,t,r){return e.indexOf(t,r)}function Jr(e,t){return 0|e.charCodeAt(t)}function Zr(e,t,r){return e.slice(t,r)}function en(e){return e.length}function tn(e){return e.length}function rn(e,t){return t.push(e),e}function nn(e,t){return e.filter(function(e){return!Qr(e,t)})}var on=1,an=1,ln=0,sn=0,cn=0,un="";function dn(e,t,r,n,o,a,i,l){return{value:e,root:t,parent:r,type:n,props:o,children:a,line:on,column:an,length:i,return:"",siblings:l}}function pn(e,t){return Kr(dn("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function fn(e){for(;e.root;)e=pn(e.root,{children:[e]});rn(e,e.siblings)}function hn(){return cn=sn>0?Jr(un,--sn):0,an--,10===cn&&(an=1,on--),cn}function mn(){return cn=sn<ln?Jr(un,sn++):0,an++,10===cn&&(an=1,on++),cn}function gn(){return Jr(un,sn)}function vn(){return sn}function yn(e,t){return Zr(un,e,t)}function bn(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function xn(e){return on=an=1,ln=en(un=e),sn=0,[]}function wn(e){return un="",e}function Sn(e){return qr(yn(sn-1,Cn(91===e?e+2:40===e?e+1:e)))}function kn(e){for(;(cn=gn())&&cn<33;)mn();return bn(e)>2||bn(cn)>3?"":" "}function jn(e,t){for(;--t&&mn()&&!(cn<48||cn>102||cn>57&&cn<65||cn>70&&cn<97););return yn(e,vn()+(t<6&&32==gn()&&32==mn()))}function Cn(e){for(;mn();)switch(cn){case e:return sn;case 34:case 39:34!==e&&39!==e&&Cn(cn);break;case 40:41===e&&Cn(e);break;case 92:mn()}return sn}function En(e,t){for(;mn()&&e+cn!==57&&(e+cn!==84||47!==gn()););return"/*"+yn(t,sn-1)+"*"+Gr(47===e?e:mn())}function Pn(e){for(;!bn(gn());)mn();return yn(e,sn)}function On(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function _n(e,t,r,n){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case Hr:return e.return=e.return||e.value;case Ur:return"";case Vr:return e.return=e.value+"{"+On(e.children,n)+"}";case Br:if(!en(e.value=e.props.join(",")))return""}return en(r=On(e.children,n))?e.return=e.value+"{"+r+"}":""}function Rn(e,t,r){switch(function(e,t){return 45^Jr(e,0)?(((t<<2^Jr(e,0))<<2^Jr(e,1))<<2^Jr(e,2))<<2^Jr(e,3):0}(e,t)){case 5103:return Mr+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Mr+e+e;case 4789:return Ar+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Mr+e+Ar+e+Fr+e+e;case 5936:switch(Jr(e,t+11)){case 114:return Mr+e+Fr+Xr(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Mr+e+Fr+Xr(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Mr+e+Fr+Xr(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Mr+e+Fr+e+e;case 6165:return Mr+e+Fr+"flex-"+e+e;case 5187:return Mr+e+Xr(e,/(\w+).+(:[^]+)/,Mr+"box-$1$2"+Fr+"flex-$1$2")+e;case 5443:return Mr+e+Fr+"flex-item-"+Xr(e,/flex-|-self/g,"")+(Qr(e,/flex-|baseline/)?"":Fr+"grid-row-"+Xr(e,/flex-|-self/g,""))+e;case 4675:return Mr+e+Fr+"flex-line-pack"+Xr(e,/align-content|flex-|-self/g,"")+e;case 5548:return Mr+e+Fr+Xr(e,"shrink","negative")+e;case 5292:return Mr+e+Fr+Xr(e,"basis","preferred-size")+e;case 6060:return Mr+"box-"+Xr(e,"-grow","")+Mr+e+Fr+Xr(e,"grow","positive")+e;case 4554:return Mr+Xr(e,/([^-])(transform)/g,"$1"+Mr+"$2")+e;case 6187:return Xr(Xr(Xr(e,/(zoom-|grab)/,Mr+"$1"),/(image-set)/,Mr+"$1"),e,"")+e;case 5495:case 3959:return Xr(e,/(image-set\([^]*)/,Mr+"$1$`$1");case 4968:return Xr(Xr(e,/(.+:)(flex-)?(.*)/,Mr+"box-pack:$3"+Fr+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Mr+e+e;case 4200:if(!Qr(e,/flex-|baseline/))return Fr+"grid-column-align"+Zr(e,t)+e;break;case 2592:case 3360:return Fr+Xr(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(e,r){return t=r,Qr(e.props,/grid-\w+-end/)})?~Yr(e+(r=r[t].value),"span",0)?e:Fr+Xr(e,"-start","")+e+Fr+"grid-row-span:"+(~Yr(r,"span",0)?Qr(r,/\d+/):+Qr(r,/\d+/)-+Qr(e,/\d+/))+";":Fr+Xr(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(e){return Qr(e.props,/grid-\w+-start/)})?e:Fr+Xr(Xr(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Xr(e,/(.+)-inline(.+)/,Mr+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(en(e)-1-t>6)switch(Jr(e,t+1)){case 109:if(45!==Jr(e,t+4))break;case 102:return Xr(e,/(.+:)(.+)-([^]+)/,"$1"+Mr+"$2-$3$1"+Ar+(108==Jr(e,t+3)?"$3":"$2-$3"))+e;case 115:return~Yr(e,"stretch",0)?Rn(Xr(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return Xr(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,r,n,o,a,i,l){return Fr+r+":"+n+l+(o?Fr+r+"-span:"+(a?i:+i-+n)+l:"")+e});case 4949:if(121===Jr(e,t+6))return Xr(e,":",":"+Mr)+e;break;case 6444:switch(Jr(e,45===Jr(e,14)?18:11)){case 120:return Xr(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Mr+(45===Jr(e,14)?"inline-":"")+"box$3$1"+Mr+"$2$3$1"+Fr+"$2box$3")+e;case 100:return Xr(e,":",":"+Fr)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Xr(e,"scroll-","scroll-snap-")+e}return e}function Nn(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case Hr:return void(e.return=Rn(e.value,e.length,r));case Vr:return On([pn(e,{value:Xr(e.value,"@","@"+Mr)})],n);case Br:if(e.length)return function(e,t){return e.map(t).join("")}(r=e.props,function(t){switch(Qr(t,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":fn(pn(e,{props:[Xr(t,/:(read-\w+)/,":-moz-$1")]})),fn(pn(e,{props:[t]})),Kr(e,{props:nn(r,n)});break;case"::placeholder":fn(pn(e,{props:[Xr(t,/:(plac\w+)/,":"+Mr+"input-$1")]})),fn(pn(e,{props:[Xr(t,/:(plac\w+)/,":-moz-$1")]})),fn(pn(e,{props:[Xr(t,/:(plac\w+)/,Fr+"input-$1")]})),fn(pn(e,{props:[t]})),Kr(e,{props:nn(r,n)})}return""})}}function Tn(e){return wn(Ln("",null,null,null,[""],e=xn(e),0,[0],e))}function Ln(e,t,r,n,o,a,i,l,s){for(var c=0,u=0,d=i,p=0,f=0,h=0,m=1,g=1,v=1,y=0,b="",x=o,w=a,S=n,k=b;g;)switch(h=y,y=mn()){case 40:if(108!=h&&58==Jr(k,d-1)){-1!=Yr(k+=Xr(Sn(y),"&","&\f"),"&\f",Wr(c?l[c-1]:0))&&(v=-1);break}case 34:case 39:case 91:k+=Sn(y);break;case 9:case 10:case 13:case 32:k+=kn(h);break;case 92:k+=jn(vn()-1,7);continue;case 47:switch(gn()){case 42:case 47:rn(Dn(En(mn(),vn()),t,r,s),s);break;default:k+="/"}break;case 123*m:l[c++]=en(k)*v;case 125*m:case 59:case 0:switch(y){case 0:case 125:g=0;case 59+u:-1==v&&(k=Xr(k,/\f/g,"")),f>0&&en(k)-d&&rn(f>32?In(k+";",n,r,d-1,s):In(Xr(k," ","")+";",n,r,d-2,s),s);break;case 59:k+=";";default:if(rn(S=zn(k,t,r,c,u,o,l,b,x=[],w=[],d,a),a),123===y)if(0===u)Ln(k,t,S,S,x,a,d,l,w);else switch(99===p&&110===Jr(k,3)?100:p){case 100:case 108:case 109:case 115:Ln(e,S,S,n&&rn(zn(e,S,S,0,0,o,l,b,o,x=[],d,w),w),o,w,d,l,n?x:w);break;default:Ln(k,S,S,S,[""],w,0,l,w)}}c=u=f=0,m=v=1,b=k="",d=i;break;case 58:d=1+en(k),f=h;default:if(m<1)if(123==y)--m;else if(125==y&&0==m++&&125==hn())continue;switch(k+=Gr(y),y*m){case 38:v=u>0?1:(k+="\f",-1);break;case 44:l[c++]=(en(k)-1)*v,v=1;break;case 64:45===gn()&&(k+=Sn(mn())),p=gn(),u=d=en(b=k+=Pn(vn())),y++;break;case 45:45===h&&2==en(k)&&(m=0)}}return a}function zn(e,t,r,n,o,a,i,l,s,c,u,d){for(var p=o-1,f=0===o?a:[""],h=tn(f),m=0,g=0,v=0;m<n;++m)for(var y=0,b=Zr(e,p+1,p=Wr(g=i[m])),x=e;y<h;++y)(x=qr(g>0?f[y]+" "+b:Xr(b,/&\f/g,f[y])))&&(s[v++]=x);return dn(e,t,r,0===o?Br:l,s,c,u,d)}function Dn(e,t,r,n){return dn(e,t,r,Ur,Gr(cn),Zr(e,2,-2),0,n)}function In(e,t,r,n,o){return dn(e,t,r,Hr,Zr(e,0,n),Zr(e,n+1,-1),n,o)}var $n={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Fn="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/Game-shop",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"/Game-shop",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"/Game-shop",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",An="active",Mn="data-styled-version",Un="6.1.19",Bn="/*!sc*/\n",Hn="undefined"!=typeof window&&"undefined"!=typeof document,Vn=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/Game-shop",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/Game-shop",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/Game-shop",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"/Game-shop",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/Game-shop",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/Game-shop",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/Game-shop",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/Game-shop",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"/Game-shop",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/Game-shop",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)),Wn={},Gn=(new Set,Object.freeze([])),Kn=Object.freeze({});function qn(e,t,r){return void 0===r&&(r=Kn),e.theme!==r.theme&&e.theme||t||r.theme}var Qn=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Xn=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Yn=/(^-|-$)/g;function Jn(e){return e.replace(Xn,"-").replace(Yn,"")}var Zn=/(a)(d)/gi,eo=function(e){return String.fromCharCode(e+(e>25?39:97))};function to(e){var t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=eo(t%52)+r;return(eo(t%52)+r).replace(Zn,"$1-$2")}var ro,no=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},oo=function(e){return no(5381,e)};function ao(e){return to(oo(e)>>>0)}function io(e){return e.displayName||e.name||"Component"}function lo(e){return"string"==typeof e&&!0}var so="function"==typeof Symbol&&Symbol.for,co=so?Symbol.for("react.memo"):60115,uo=so?Symbol.for("react.forward_ref"):60112,po={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},fo={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ho={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},mo=((ro={})[uo]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ro[co]=ho,ro);function go(e){return("type"in(t=e)&&t.type.$$typeof)===co?ho:"$$typeof"in e?mo[e.$$typeof]:po;var t}var vo=Object.defineProperty,yo=Object.getOwnPropertyNames,bo=Object.getOwnPropertySymbols,xo=Object.getOwnPropertyDescriptor,wo=Object.getPrototypeOf,So=Object.prototype;function ko(e,t,r){if("string"!=typeof t){if(So){var n=wo(t);n&&n!==So&&ko(e,n,r)}var o=yo(t);bo&&(o=o.concat(bo(t)));for(var a=go(e),i=go(t),l=0;l<o.length;++l){var s=o[l];if(!(s in fo||r&&r[s]||i&&s in i||a&&s in a)){var c=xo(t,s);try{vo(e,s,c)}catch(e){}}}}return e}function jo(e){return"function"==typeof e}function Co(e){return"object"==typeof e&&"styledComponentId"in e}function Eo(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Po(e,t){if(0===e.length)return"";for(var r=e[0],n=1;n<e.length;n++)r+=t?t+e[n]:e[n];return r}function Oo(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function _o(e,t,r){if(void 0===r&&(r=!1),!r&&!Oo(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=_o(e[n],t[n]);else if(Oo(t))for(var n in t)e[n]=_o(e[n],t[n]);return e}function Ro(e,t){Object.defineProperty(e,"toString",{value:t})}function No(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var To=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,r=0;r<e;r++)t+=this.groupSizes[r];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var r=this.groupSizes,n=r.length,o=n;e>=o;)if((o<<=1)<0)throw No(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var a=n;a<o;a++)this.groupSizes[a]=0}for(var i=this.indexOfGroup(e+1),l=(a=0,t.length);a<l;a++)this.tag.insertRule(i,t[a])&&(this.groupSizes[e]++,i++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],r=this.indexOfGroup(e),n=r+t;this.groupSizes[e]=0;for(var o=r;o<n;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var r=this.groupSizes[e],n=this.indexOfGroup(e),o=n+r,a=n;a<o;a++)t+="".concat(this.tag.getRule(a)).concat(Bn);return t},e}(),Lo=new Map,zo=new Map,Do=1,Io=function(e){if(Lo.has(e))return Lo.get(e);for(;zo.has(Do);)Do++;var t=Do++;return Lo.set(e,t),zo.set(t,e),t},$o=function(e,t){Do=t+1,Lo.set(e,t),zo.set(t,e)},Fo="style[".concat(Fn,"][").concat(Mn,'="').concat(Un,'"]'),Ao=new RegExp("^".concat(Fn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Mo=function(e,t,r){for(var n,o=r.split(","),a=0,i=o.length;a<i;a++)(n=o[a])&&e.registerName(t,n)},Uo=function(e,t){for(var r,n=(null!==(r=t.textContent)&&void 0!==r?r:"").split(Bn),o=[],a=0,i=n.length;a<i;a++){var l=n[a].trim();if(l){var s=l.match(Ao);if(s){var c=0|parseInt(s[1],10),u=s[2];0!==c&&($o(u,c),Mo(e,u,s[3]),e.getTag().insertRules(c,o)),o.length=0}else o.push(l)}}},Bo=function(e){for(var t=document.querySelectorAll(Fo),r=0,n=t.length;r<n;r++){var o=t[r];o&&o.getAttribute(Fn)!==An&&(Uo(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function Ho(){return r.nc}var Vo=function(e){var t=document.head,r=e||t,n=document.createElement("style"),o=function(e){var t=Array.from(e.querySelectorAll("style[".concat(Fn,"]")));return t[t.length-1]}(r),a=void 0!==o?o.nextSibling:null;n.setAttribute(Fn,An),n.setAttribute(Mn,Un);var i=Ho();return i&&n.setAttribute("nonce",i),r.insertBefore(n,a),n},Wo=function(){function e(e){this.element=Vo(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,r=0,n=t.length;r<n;r++){var o=t[r];if(o.ownerNode===e)return o}throw No(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),Go=function(){function e(e){this.element=Vo(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var r=document.createTextNode(t);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),Ko=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),qo=Hn,Qo={isServer:!Hn,useCSSOMInjection:!Vn},Xo=function(){function e(e,t,r){void 0===e&&(e=Kn),void 0===t&&(t={});var n=this;this.options=zr(zr({},Qo),e),this.gs=t,this.names=new Map(r),this.server=!!e.isServer,!this.server&&Hn&&qo&&(qo=!1,Bo(this)),Ro(this,function(){return function(e){for(var t=e.getTag(),r=t.length,n="",o=function(r){var o=function(e){return zo.get(e)}(r);if(void 0===o)return"continue";var a=e.names.get(o),i=t.getGroup(r);if(void 0===a||!a.size||0===i.length)return"continue";var l="".concat(Fn,".g").concat(r,'[id="').concat(o,'"]'),s="";void 0!==a&&a.forEach(function(e){e.length>0&&(s+="".concat(e,","))}),n+="".concat(i).concat(l,'{content:"').concat(s,'"}').concat(Bn)},a=0;a<r;a++)o(a);return n}(n)})}return e.registerId=function(e){return Io(e)},e.prototype.rehydrate=function(){!this.server&&Hn&&Bo(this)},e.prototype.reconstructWithOptions=function(t,r){return void 0===r&&(r=!0),new e(zr(zr({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,r=e.target;return e.isServer?new Ko(r):t?new Wo(r):new Go(r)}(this.options),new To(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(Io(e),this.names.has(e))this.names.get(e).add(t);else{var r=new Set;r.add(t),this.names.set(e,r)}},e.prototype.insertRules=function(e,t,r){this.registerName(e,t),this.getTag().insertRules(Io(e),r)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(Io(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Yo=/&/g,Jo=/^\s*\/\/.*$/gm;function Zo(e,t){return e.map(function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map(function(e){return"".concat(t," ").concat(e)})),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=Zo(e.children,t)),e})}function ea(e){var t,r,n,o=void 0===e?Kn:e,a=o.options,i=void 0===a?Kn:a,l=o.plugins,s=void 0===l?Gn:l,c=function(e,n,o){return o.startsWith(r)&&o.endsWith(r)&&o.replaceAll(r,"").length>0?".".concat(t):e},u=s.slice();u.push(function(e){e.type===Br&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(Yo,r).replace(n,c))}),i.prefix&&u.push(Nn),u.push(_n);var d=function(e,o,a,l){void 0===o&&(o=""),void 0===a&&(a=""),void 0===l&&(l="&"),t=l,r=o,n=new RegExp("\\".concat(r,"\\b"),"g");var s=e.replace(Jo,""),c=Tn(a||o?"".concat(a," ").concat(o," { ").concat(s," }"):s);i.namespace&&(c=Zo(c,i.namespace));var d,p=[];return On(c,function(e){var t=tn(e);return function(r,n,o,a){for(var i="",l=0;l<t;l++)i+=e[l](r,n,o,a)||"";return i}}(u.concat((d=function(e){return p.push(e)},function(e){e.root||(e=e.return)&&d(e)})))),p};return d.hash=s.length?s.reduce(function(e,t){return t.name||No(15),no(e,t.name)},5381).toString():"",d}var ta=new Xo,ra=ea(),na=e.createContext({shouldForwardProp:void 0,styleSheet:ta,stylis:ra}),oa=(na.Consumer,e.createContext(void 0));function aa(){return(0,e.useContext)(na)}function ia(t){var r=(0,e.useState)(t.stylisPlugins),n=r[0],o=r[1],a=aa().styleSheet,i=(0,e.useMemo)(function(){var e=a;return t.sheet?e=t.sheet:t.target&&(e=e.reconstructWithOptions({target:t.target},!1)),t.disableCSSOMInjection&&(e=e.reconstructWithOptions({useCSSOMInjection:!1})),e},[t.disableCSSOMInjection,t.sheet,t.target,a]),l=(0,e.useMemo)(function(){return ea({options:{namespace:t.namespace,prefix:t.enableVendorPrefixes},plugins:n})},[t.enableVendorPrefixes,t.namespace,n]);(0,e.useEffect)(function(){$r()(n,t.stylisPlugins)||o(t.stylisPlugins)},[t.stylisPlugins]);var s=(0,e.useMemo)(function(){return{shouldForwardProp:t.shouldForwardProp,styleSheet:i,stylis:l}},[t.shouldForwardProp,i,l]);return e.createElement(na.Provider,{value:s},e.createElement(oa.Provider,{value:l},t.children))}var la=function(){function e(e,t){var r=this;this.inject=function(e,t){void 0===t&&(t=ra);var n=r.name+t.hash;e.hasNameForId(r.id,n)||e.insertRules(r.id,n,t(r.rules,n,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,Ro(this,function(){throw No(12,String(r.name))})}return e.prototype.getName=function(e){return void 0===e&&(e=ra),this.name+e.hash},e}(),sa=function(e){return e>="A"&&e<="Z"};function ca(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(1===r&&"-"===n&&"-"===e[0])return e;sa(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var ua=function(e){return null==e||!1===e||""===e},da=function(e){var t,r,n=[];for(var o in e){var a=e[o];e.hasOwnProperty(o)&&!ua(a)&&(Array.isArray(a)&&a.isCss||jo(a)?n.push("".concat(ca(o),":"),a,";"):Oo(a)?n.push.apply(n,Dr(Dr(["".concat(o," {")],da(a),!1),["}"],!1)):n.push("".concat(ca(o),": ").concat((t=o,null==(r=a)||"boolean"==typeof r||""===r?"":"number"!=typeof r||0===r||t in $n||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function pa(e,t,r,n){return ua(e)?[]:Co(e)?[".".concat(e.styledComponentId)]:jo(e)?!jo(o=e)||o.prototype&&o.prototype.isReactComponent||!t?[e]:pa(e(t),t,r,n):e instanceof la?r?(e.inject(r,n),[e.getName(n)]):[e]:Oo(e)?da(e):Array.isArray(e)?Array.prototype.concat.apply(Gn,e.map(function(e){return pa(e,t,r,n)})):[e.toString()];var o}function fa(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(jo(r)&&!Co(r))return!1}return!0}var ha=oo(Un),ma=function(){function e(e,t,r){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===r||r.isStatic)&&fa(e),this.componentId=t,this.baseHash=no(ha,t),this.baseStyle=r,Xo.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,r){var n=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))n=Eo(n,this.staticRulesId);else{var o=Po(pa(this.rules,e,t,r)),a=to(no(this.baseHash,o)>>>0);if(!t.hasNameForId(this.componentId,a)){var i=r(o,".".concat(a),void 0,this.componentId);t.insertRules(this.componentId,a,i)}n=Eo(n,a),this.staticRulesId=a}else{for(var l=no(this.baseHash,r.hash),s="",c=0;c<this.rules.length;c++){var u=this.rules[c];if("string"==typeof u)s+=u;else if(u){var d=Po(pa(u,e,t,r));l=no(l,d+c),s+=d}}if(s){var p=to(l>>>0);t.hasNameForId(this.componentId,p)||t.insertRules(this.componentId,p,r(s,".".concat(p),void 0,this.componentId)),n=Eo(n,p)}}return n},e}(),ga=e.createContext(void 0);ga.Consumer;function va(t){var r=e.useContext(ga),n=(0,e.useMemo)(function(){return function(e,t){if(!e)throw No(14);if(jo(e))return e(t);if(Array.isArray(e)||"object"!=typeof e)throw No(8);return t?zr(zr({},t),e):e}(t.theme,r)},[t.theme,r]);return t.children?e.createElement(ga.Provider,{value:n},t.children):null}var ya={};new Set;function ba(t,r,n){var o=Co(t),a=t,i=!lo(t),l=r.attrs,s=void 0===l?Gn:l,c=r.componentId,u=void 0===c?function(e,t){var r="string"!=typeof e?"sc":Jn(e);ya[r]=(ya[r]||0)+1;var n="".concat(r,"-").concat(ao(Un+r+ya[r]));return t?"".concat(t,"-").concat(n):n}(r.displayName,r.parentComponentId):c,d=r.displayName,p=void 0===d?function(e){return lo(e)?"styled.".concat(e):"Styled(".concat(io(e),")")}(t):d,f=r.displayName&&r.componentId?"".concat(Jn(r.displayName),"-").concat(r.componentId):r.componentId||u,h=o&&a.attrs?a.attrs.concat(s).filter(Boolean):s,m=r.shouldForwardProp;if(o&&a.shouldForwardProp){var g=a.shouldForwardProp;if(r.shouldForwardProp){var v=r.shouldForwardProp;m=function(e,t){return g(e,t)&&v(e,t)}}else m=g}var y=new ma(n,f,o?a.componentStyle:void 0);function b(t,r){return function(t,r,n){var o=t.attrs,a=t.componentStyle,i=t.defaultProps,l=t.foldedComponentIds,s=t.styledComponentId,c=t.target,u=e.useContext(ga),d=aa(),p=t.shouldForwardProp||d.shouldForwardProp,f=qn(r,u,i)||Kn,h=function(e,t,r){for(var n,o=zr(zr({},t),{className:void 0,theme:r}),a=0;a<e.length;a+=1){var i=jo(n=e[a])?n(o):n;for(var l in i)o[l]="className"===l?Eo(o[l],i[l]):"style"===l?zr(zr({},o[l]),i[l]):i[l]}return t.className&&(o.className=Eo(o.className,t.className)),o}(o,r,f),m=h.as||c,g={};for(var v in h)void 0===h[v]||"$"===v[0]||"as"===v||"theme"===v&&h.theme===f||("forwardedAs"===v?g.as=h.forwardedAs:p&&!p(v,m)||(g[v]=h[v]));var y=function(e,t){var r=aa();return e.generateAndInjectStyles(t,r.styleSheet,r.stylis)}(a,h),b=Eo(l,s);return y&&(b+=" "+y),h.className&&(b+=" "+h.className),g[lo(m)&&!Qn.has(m)?"class":"className"]=b,n&&(g.ref=n),(0,e.createElement)(m,g)}(x,t,r)}b.displayName=p;var x=e.forwardRef(b);return x.attrs=h,x.componentStyle=y,x.displayName=p,x.shouldForwardProp=m,x.foldedComponentIds=o?Eo(a.foldedComponentIds,a.styledComponentId):"",x.styledComponentId=f,x.target=o?a.target:t,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=o?function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];for(var n=0,o=t;n<o.length;n++)_o(e,o[n],!0);return e}({},a.defaultProps,e):e}}),Ro(x,function(){return".".concat(x.styledComponentId)}),i&&ko(x,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function xa(e,t){for(var r=[e[0]],n=0,o=t.length;n<o;n+=1)r.push(t[n],e[n+1]);return r}var wa=function(e){return Object.assign(e,{isCss:!0})};function Sa(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(jo(e)||Oo(e))return wa(pa(xa(Gn,Dr([e],t,!0))));var n=e;return 0===t.length&&1===n.length&&"string"==typeof n[0]?pa(n):wa(pa(xa(n,t)))}function ka(e,t,r){if(void 0===r&&(r=Kn),!t)throw No(1,t);var n=function(n){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return e(t,r,Sa.apply(void 0,Dr([n],o,!1)))};return n.attrs=function(n){return ka(e,t,zr(zr({},r),{attrs:Array.prototype.concat(r.attrs,n).filter(Boolean)}))},n.withConfig=function(n){return ka(e,t,zr(zr({},r),n))},n}var ja=function(e){return ka(ba,e)},Ca=ja;Qn.forEach(function(e){Ca[e]=ja(e)});var Ea=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=fa(e),Xo.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,r,n){var o=n(Po(pa(this.rules,t,r,n)),""),a=this.componentId+e;r.insertRules(a,a,o)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,r,n){e>2&&Xo.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,t,r,n)},e}();function Pa(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=Po(Sa.apply(void 0,Dr([e],t,!1))),o=ao(n);return new la(o,n)}(function(){function t(){var t=this;this._emitSheetCSS=function(){var e=t.instance.toString();if(!e)return"";var r=Ho(),n=Po([r&&'nonce="'.concat(r,'"'),"".concat(Fn,'="true"'),"".concat(Mn,'="').concat(Un,'"')].filter(Boolean)," ");return"<style ".concat(n,">").concat(e,"</style>")},this.getStyleTags=function(){if(t.sealed)throw No(2);return t._emitSheetCSS()},this.getStyleElement=function(){var r;if(t.sealed)throw No(2);var n=t.instance.toString();if(!n)return[];var o=((r={})[Fn]="",r[Mn]=Un,r.dangerouslySetInnerHTML={__html:n},r),a=Ho();return a&&(o.nonce=a),[e.createElement("style",zr({},o,{key:"sc-0-0"}))]},this.seal=function(){t.sealed=!0},this.instance=new Xo({isServer:!0}),this.sealed=!1}t.prototype.collectStyles=function(t){if(this.sealed)throw No(2);return e.createElement(ia,{sheet:this.instance},t)},t.prototype.interleaveWithNodeStream=function(e){throw No(3)}})(),"__sc-".concat(Fn,"__");const Oa=Pa`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`,_a=Pa`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`,Ra=Ca.div`
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: ${e=>{let{type:t}=e;return"success"===t?"#4CAF50":"error"===t?"#f44336":"warning"===t?"#ff9800":"#2196F3"}};
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  animation: ${Oa} 0.3s ease-out;
  max-width: 300px;
  word-wrap: break-word;

  &.closing {
    animation: ${_a} 0.3s ease-out;
  }
`,Na=Ca.button`
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
`,Ta=t=>{let{message:r,type:n="info",duration:o=3e3,onClose:a}=t;return(0,e.useEffect)(()=>{const e=setTimeout(()=>{a()},o);return()=>clearTimeout(e)},[o,a]),(0,vr.jsxs)(Ra,{type:n,children:[(0,vr.jsx)(Na,{onClick:a,children:"\xd7"}),r]})},La=(0,e.createContext)(void 0),za=()=>{const t=(0,e.useContext)(La);if(!t)throw new Error("useToast must be used within a ToastProvider");return t},Da=t=>{let{children:r}=t;const[n,o]=(0,e.useState)([]);return(0,vr.jsxs)(La.Provider,{value:{showToast:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"info";const r=Date.now().toString(),n={id:r,message:e,type:t};o(e=>[...e,n]),setTimeout(()=>{o(e=>e.filter(e=>e.id!==r))},3e3)}},children:[r,n.map(e=>(0,vr.jsx)(Ta,{message:e.message,type:e.type,onClose:()=>{return t=e.id,void o(e=>e.filter(e=>e.id!==t));var t}},e.id))]})},Ia=(0,e.createContext)(void 0),$a=()=>{const t=(0,e.useContext)(Ia);if(void 0===t)throw new Error("useAuth must be used within an AuthProvider");return t},Fa=t=>{let{children:r}=t;const[n,o]=(0,e.useState)(null),[a,i]=(0,e.useState)(!0);(0,e.useEffect)(()=>{const e=localStorage.getItem("user");if(e)try{o(JSON.parse(e))}catch(t){console.error("Error parsing saved user:",t),localStorage.removeItem("user")}i(!1)},[]);const l={user:n,isLoading:a,login:async(e,t)=>{i(!0);try{await new Promise(e=>setTimeout(e,1e3));const r=[{id:"1",username:"admin",email:"admin@example.com",password:"admin123",role:"admin",avatar:"",createdAt:(new Date).toISOString()},{id:"2",username:"user",email:"user@example.com",password:"user123",role:"user",avatar:"",createdAt:(new Date).toISOString()}].find(r=>r.username===e&&r.password===t);if(r){const{password:e,...t}=r;return o(t),localStorage.setItem("user",JSON.stringify(t)),!0}return!1}catch(r){return console.error("Login error:",r),!1}finally{i(!1)}},register:async(e,t,r)=>{i(!0);try{await new Promise(e=>setTimeout(e,1e3));const n=JSON.parse(localStorage.getItem("registeredUsers")||"[]");if(n.some(r=>r.username===e||r.email===t))return!1;const a={id:Date.now().toString(),username:e,email:t,role:"user",avatar:"",createdAt:(new Date).toISOString()};return n.push({...a,password:r}),localStorage.setItem("registeredUsers",JSON.stringify(n)),o(a),localStorage.setItem("user",JSON.stringify(a)),!0}catch(n){return console.error("Registration error:",n),!1}finally{i(!1)}},logout:()=>{o(null),localStorage.removeItem("user")},isAdmin:()=>"admin"===(null===n||void 0===n?void 0:n.role),updateProfile:async e=>{if(!n)return!1;try{const t={...n,...e};return o(t),localStorage.setItem("user",JSON.stringify(t)),!0}catch(t){return console.error("Profile update error:",t),!1}}};return(0,vr.jsx)(Ia.Provider,{value:l,children:r})},Aa=(function(t){for(var r=[],n=1;n<arguments.length;n++)r[n-1]=arguments[n];var o=Sa.apply(void 0,Dr([t],r,!1)),a="sc-global-".concat(ao(JSON.stringify(o))),i=new Ea(o,a),l=function(t){var r=aa(),n=e.useContext(ga),o=e.useRef(r.styleSheet.allocateGSInstance(a)).current;return r.styleSheet.server&&s(o,t,r.styleSheet,n,r.stylis),e.useLayoutEffect(function(){if(!r.styleSheet.server)return s(o,t,r.styleSheet,n,r.stylis),function(){return i.removeStyles(o,r.styleSheet)}},[o,t,r.styleSheet,n,r.stylis]),null};function s(e,t,r,n,o){if(i.isStatic)i.renderStyles(e,Wn,r,o);else{var a=zr(zr({},t),{theme:qn(t,n,l.defaultProps)});i.renderStyles(e,a,r,o)}}return e.memo(l)})`
  :root {
    /* Light Theme Colors */
    --primary-color: #3f51b5;
    --secondary-color: #f50057;
    --background-color: #f5f5f5;
    --surface-color: #ffffff;
    --text-primary: #212121;
    --text-secondary: #757575;
    --border-color: #e0e0e0;
    --success-color: #4caf50;
    --warning-color: #ff9800;
    --error-color: #f44336;
    --shadow-color: rgba(0, 0, 0, 0.1);
  }

  [data-theme='dark'] {
    /* Dark Theme Colors */
    --primary-color: #7986cb;
    --secondary-color: #ff4081;
    --background-color: #121212;
    --surface-color: #1e1e1e;
    --text-primary: #ffffff;
    --text-secondary: #b0b0b0;
    --border-color: #333333;
    --success-color: #81c784;
    --warning-color: #ffb74d;
    --error-color: #e57373;
    --shadow-color: rgba(0, 0, 0, 0.3);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }

  body {
    font-family: 'Roboto', 'Tajawal', sans-serif;
    background-color: var(--background-color);
    color: var(--text-primary);
    transition: all 0.3s ease;
    min-height: 100vh;
  }

  /* RTL Support */
  body[dir="rtl"] {
    font-family: 'Tajawal', 'Roboto', sans-serif;
  }

  a {
    color: var(--primary-color);
    text-decoration: none;
    transition: color 0.3s ease;
  }

  a:hover {
    color: var(--secondary-color);
  }

  button {
    cursor: pointer;
    font-family: inherit;
  }

  /* Responsive Typography */
  h1 {
    font-size: 2.5rem;
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  h2 {
    font-size: 2rem;
    
    @media (max-width: 768px) {
      font-size: 1.75rem;
    }
  }

  h3 {
    font-size: 1.75rem;
    
    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  h4 {
    font-size: 1.5rem;
    
    @media (max-width: 768px) {
      font-size: 1.25rem;
    }
  }

  /* Container */
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  /* Grid System */
  .grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 1rem;
  }

  /* Responsive Grid */
  @media (max-width: 992px) {
    .grid {
      grid-template-columns: repeat(6, 1fr);
    }
  }

  @media (max-width: 576px) {
    .grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  /* Utility Classes */
  .text-center {
    text-align: center;
  }

  .mt-1 {
    margin-top: 0.5rem;
  }

  .mt-2 {
    margin-top: 1rem;
  }

  .mt-3 {
    margin-top: 1.5rem;
  }

  .mt-4 {
    margin-top: 2rem;
  }

  .mb-1 {
    margin-bottom: 0.5rem;
  }

  .mb-2 {
    margin-bottom: 1rem;
  }

  .mb-3 {
    margin-bottom: 1.5rem;
  }

  .mb-4 {
    margin-bottom: 2rem;
  }

  /* Animations */
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .fade-in {
    animation: fadeIn 0.3s ease-in;
  }
`,Ma=Aa,Ua=()=>{const t=(0,e.useContext)(Or);if(void 0===t)throw new Error("useLanguage must be used within a LanguageProvider");return t},Ba=()=>{const t=(0,e.useContext)(Rr);if(void 0===t)throw new Error("useCart must be used within a CartProvider");return t},Ha=Ca.div`
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
`,Va=Ca.div`
  background-color: var(--surface-color);
  border-radius: 12px;
  padding: 2rem;
  max-width: 600px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
`,Wa=Ca.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border-color);
`,Ga=Ca.h2`
  margin: 0;
  color: var(--text-primary);
`,Ka=Ca.button`
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
`,qa=Ca.div`
  display: flex;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid var(--border-color);

  &:last-child {
    border-bottom: none;
  }
`,Qa=Ca.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 1rem;
`,Xa=Ca.div`
  flex: 1;
`,Ya=Ca.h4`
  margin: 0 0 0.5rem;
  color: var(--text-primary);
  font-size: 0.9rem;
`,Ja=Ca.span`
  color: var(--primary-color);
  font-weight: bold;
`,Za=Ca.div`
  display: flex;
  align-items: center;
  margin: 0 1rem;
`,ei=Ca.button`
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
`,ti=Ca.span`
  margin: 0 0.5rem;
  font-weight: bold;
  min-width: 20px;
  text-align: center;
`,ri=Ca.button`
  background: none;
  border: none;
  color: var(--error-color);
  cursor: pointer;
  padding: 0.5rem;

  &:hover {
    background-color: var(--background-color);
    border-radius: 4px;
  }
`,ni=Ca.div`
  text-align: center;
  padding: 2rem;
  color: var(--text-secondary);
`,oi=Ca.div`
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid var(--border-color);
`,ai=Ca.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: var(--text-primary);
`,ii=Ca.button`
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
`,li=e=>{let{isOpen:t,onClose:r}=e;const{t:n}=Pr(),{cartItems:o,updateQuantity:a,removeFromCart:i,totalPrice:l}=Ba();return(0,vr.jsx)(Ha,{$isOpen:t,onClick:e=>{e.target===e.currentTarget&&r()},children:(0,vr.jsxs)(Va,{children:[(0,vr.jsxs)(Wa,{children:[(0,vr.jsx)(Ga,{children:n("cart.title")}),(0,vr.jsx)(Ka,{onClick:r,children:"\xd7"})]}),0===o.length?(0,vr.jsx)(ni,{children:(0,vr.jsx)("p",{children:n("cart.empty")})}):(0,vr.jsxs)(vr.Fragment,{children:[o.map(e=>(0,vr.jsxs)(qa,{children:[(0,vr.jsx)(Qa,{src:e.product.image,alt:e.product.name}),(0,vr.jsxs)(Xa,{children:[(0,vr.jsx)(Ya,{children:e.product.name}),(0,vr.jsxs)(Ja,{children:["$",e.product.discountPrice||e.product.price]})]}),(0,vr.jsxs)(Za,{children:[(0,vr.jsx)(ei,{onClick:()=>a(e.product.id,e.quantity-1),disabled:e.quantity<=1,children:"-"}),(0,vr.jsx)(ti,{children:e.quantity}),(0,vr.jsx)(ei,{onClick:()=>a(e.product.id,e.quantity+1),children:"+"})]}),(0,vr.jsx)(ri,{onClick:()=>i(e.product.id),children:"\ud83d\uddd1\ufe0f"})]},e.product.id)),(0,vr.jsxs)(oi,{children:[(0,vr.jsxs)(ai,{children:[(0,vr.jsxs)("span",{children:[n("cart.total"),":"]}),(0,vr.jsxs)("span",{children:["$",l.toFixed(2)]})]}),(0,vr.jsx)(ii,{children:n("cart.checkout")})]})]})]})})},si={colors:{surface:"#fff",border:"#ddd",textSecondary:"#888",hover:"#eee",text:"#222",background:"#f9f9f9",primary:"#007bff",primaryHover:"#0056b3",error:"#ff4444"}},ci=Ca.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
`,ui=Ca.div`
  background: ${e=>e.theme.colors.surface};
  border-radius: 16px;
  padding: 2rem;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.3);
  border: 1px solid ${e=>e.theme.colors.border};
  position: relative;
`,di=Ca.button`
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
`,pi=Ca.h2`
  color: ${e=>e.theme.colors.text};
  margin-bottom: 1.5rem;
  text-align: center;
  font-size: 1.5rem;
`,fi=Ca.div`
  display: flex;
  margin-bottom: 1.5rem;
  border-radius: 8px;
  background: ${e=>e.theme.colors.background};
  padding: 4px;
`,hi=Ca.button`
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
`,mi=Ca.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,gi=Ca.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,vi=Ca.label`
  color: ${e=>e.theme.colors.text};
  font-weight: 500;
  font-size: 0.9rem;
`,yi=Ca.input`
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
`,bi=Ca.button`
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
`,xi=Ca.div`
  color: ${e=>e.theme.colors.error||"#ff4444"};
  font-size: 0.875rem;
  text-align: center;
  margin-top: 0.5rem;
`,wi=Ca.div`
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
`,Si=t=>{let{isOpen:r,onClose:n}=t;const[o,a]=(0,e.useState)("login"),[i,l]=(0,e.useState)({username:"",email:"",password:"",confirmPassword:""}),[s,c]=(0,e.useState)(""),[u,d]=(0,e.useState)(!1),{login:p,register:f}={login:async(e,t)=>!0,register:async(e,t,r)=>!0},{isRTL:h}={isRTL:!1},{t:m}={t:e=>({login:"\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644",register:"\u0625\u0646\u0634\u0627\u0621 \u062d\u0633\u0627\u0628",username:"\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645",enterUsername:"\u0623\u062f\u062e\u0644 \u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645",email:"\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a",enterEmail:"\u0623\u062f\u062e\u0644 \u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a",password:"\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631",enterPassword:"\u0623\u062f\u062e\u0644 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631",confirmPassword:"\u062a\u0623\u0643\u064a\u062f \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631",loginSuccess:"\u062a\u0645 \u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644 \u0628\u0646\u062c\u0627\u062d",invalidCredentials:"\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645 \u0623\u0648 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u063a\u064a\u0631 \u0635\u062d\u064a\u062d\u0629",passwordMismatch:"\u0643\u0644\u0645\u0627\u062a \u0627\u0644\u0645\u0631\u0648\u0631 \u063a\u064a\u0631 \u0645\u062a\u0637\u0627\u0628\u0642\u0629",registerSuccess:"\u062a\u0645 \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u062d\u0633\u0627\u0628 \u0628\u0646\u062c\u0627\u062d",userExists:"\u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645 \u0645\u0648\u062c\u0648\u062f \u0645\u0633\u0628\u0642\u0627\u064b",genericError:"\u062d\u062f\u062b \u062e\u0637\u0623\u060c \u064a\u0631\u062c\u0649 \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629 \u0645\u0631\u0629 \u0623\u062e\u0631\u0649"}[e]||e)},{showToast:g}={showToast:(e,t)=>alert(`${t.toUpperCase()}: ${e}`)},v=e=>{l(t=>({...t,[e.target.name]:e.target.value})),c("")};return r?(0,vr.jsx)(va,{theme:si,children:(0,vr.jsx)(ci,{onClick:n,children:(0,vr.jsxs)(ui,{onClick:e=>e.stopPropagation(),dir:h?"rtl":"ltr",children:[(0,vr.jsx)(di,{onClick:n,children:"\xd7"}),(0,vr.jsx)(pi,{children:m("login"===o?"login":"register")}),(0,vr.jsxs)(fi,{children:[(0,vr.jsx)(hi,{$active:"login"===o,onClick:()=>a("login"),type:"button",children:m("login")}),(0,vr.jsx)(hi,{$active:"register"===o,onClick:()=>a("register"),type:"button",children:m("register")})]}),(0,vr.jsxs)(mi,{onSubmit:async e=>{e.preventDefault(),c(""),d(!0);try{if("login"===o){await p(i.username,i.password)?(g(m("loginSuccess"),"success"),n()):c(m("invalidCredentials"))}else{if(i.password!==i.confirmPassword)return c(m("passwordMismatch")),void d(!1);await f(i.username,i.email,i.password)?(g(m("registerSuccess"),"success"),n()):c(m("userExists"))}}catch{c(m("genericError"))}finally{d(!1)}},children:[(0,vr.jsxs)(gi,{children:[(0,vr.jsx)(vi,{children:m("username")}),(0,vr.jsx)(yi,{type:"text",name:"username",value:i.username,onChange:v,placeholder:m("enterUsername"),required:!0})]}),"register"===o&&(0,vr.jsxs)(gi,{children:[(0,vr.jsx)(vi,{children:m("email")}),(0,vr.jsx)(yi,{type:"email",name:"email",value:i.email,onChange:v,placeholder:m("enterEmail"),required:!0})]}),(0,vr.jsxs)(gi,{children:[(0,vr.jsx)(vi,{children:m("password")}),(0,vr.jsx)(yi,{type:"password",name:"password",value:i.password,onChange:v,placeholder:m("enterPassword"),required:!0})]}),"register"===o&&(0,vr.jsxs)(gi,{children:[(0,vr.jsx)(vi,{children:m("confirmPassword")}),(0,vr.jsx)(yi,{type:"password",name:"confirmPassword",value:i.confirmPassword,onChange:v,placeholder:m("confirmPassword"),required:!0})]}),s&&(0,vr.jsx)(xi,{children:s}),(0,vr.jsx)(bi,{type:"submit",disabled:u,children:u?(0,vr.jsx)(wi,{}):m("login"===o?"login":"register")})]})]})})}):null},ki=Ca.div`
  position: relative;
`,ji=Ca.button`
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
`,Ci=Ca.div`
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
`,Ei=Ca.span`
  font-weight: 500;
  max-width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: 768px) {
    display: none;
  }
`,Pi=Ca.span`
  transition: transform 0.2s;
  transform: ${e=>e.isOpen?"rotate(180deg)":"rotate(0deg)"};
`,Oi=Ca.div`
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
`,_i=Ca.div`
  padding: 1rem;
  border-bottom: 1px solid ${e=>e.theme.colors.border};
`,Ri=Ca.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`,Ni=Ca.div`
  flex: 1;
`,Ti=Ca.div`
  font-weight: 600;
  color: ${e=>e.theme.colors.text};
  font-size: 0.9rem;
`,Li=Ca.div`
  font-size: 0.8rem;
  color: ${e=>e.theme.colors.textSecondary};
  margin-top: 0.25rem;
`,zi=Ca.div`
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  background: ${e=>e.isAdmin?"#ff6b35":"#4CAF50"};
  color: white;
  font-weight: 500;
  text-align: center;
  margin-top: 0.5rem;
`,Di=Ca.ul`
  list-style: none;
  padding: 0.5rem 0;
  margin: 0;
`,Ii=Ca.li`
  padding: 0;
`,$i=Ca.button`
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
`,Fi=Ca.span`
  font-size: 1.1rem;
  width: 20px;
  text-align: center;
`,Ai=Ca.div`
  height: 1px;
  background: ${e=>e.theme.colors.border};
  margin: 0.5rem 0;
`,Mi=t=>{let{onOpenProfile:r}=t;const[n,o]=(0,e.useState)(!1),a=(0,e.useRef)(null),{user:i,logout:l,isAdmin:s}=$a(),{isRTL:c}=Ua(),{t:u}=Pr(),d=Qt();(0,e.useEffect)(()=>{const e=e=>{a.current&&!a.current.contains(e.target)&&o(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);if(!i)return null;const p=e=>e.split(" ").map(e=>e[0]).join("").toUpperCase().slice(0,2);return(0,vr.jsxs)(ki,{ref:a,children:[(0,vr.jsxs)(ji,{onClick:()=>o(!n),children:[(0,vr.jsx)(Ci,{children:i.avatar?(0,vr.jsx)("img",{src:i.avatar,alt:i.username,style:{width:"100%",height:"100%",borderRadius:"50%"}}):p(i.username)}),(0,vr.jsx)(Ei,{children:i.username}),(0,vr.jsx)(Pi,{isOpen:n,children:"\u25bc"})]}),(0,vr.jsxs)(Oi,{isOpen:n,isRTL:c,children:[(0,vr.jsx)(_i,{children:(0,vr.jsxs)(Ri,{children:[(0,vr.jsx)(Ci,{children:i.avatar?(0,vr.jsx)("img",{src:i.avatar,alt:i.username,style:{width:"100%",height:"100%",borderRadius:"50%"}}):p(i.username)}),(0,vr.jsxs)(Ni,{children:[(0,vr.jsx)(Ti,{children:i.username}),(0,vr.jsx)(Li,{children:i.email}),(0,vr.jsx)(zi,{isAdmin:s(),children:s()?u("admin")||"\u0645\u062f\u064a\u0631":u("user")||"\u0645\u0633\u062a\u062e\u062f\u0645"})]})]})}),(0,vr.jsxs)(Di,{children:[(0,vr.jsx)(Ii,{children:(0,vr.jsxs)($i,{onClick:()=>{r&&r(),o(!1)},children:[(0,vr.jsx)(Fi,{children:"\ud83d\udc64"}),u("profile")||"\u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0634\u062e\u0635\u064a"]})}),(0,vr.jsx)(Ii,{children:(0,vr.jsxs)($i,{onClick:()=>d("/orders"),children:[(0,vr.jsx)(Fi,{children:"\ud83d\udce6"}),u("myOrders")||"\u0637\u0644\u0628\u0627\u062a\u064a"]})}),(0,vr.jsx)(Ii,{children:(0,vr.jsxs)($i,{onClick:()=>d("/wishlist"),children:[(0,vr.jsx)(Fi,{children:"\u2764\ufe0f"}),u("wishlist")||"\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0623\u0645\u0646\u064a\u0627\u062a"]})}),(0,vr.jsx)(Ii,{children:(0,vr.jsxs)($i,{onClick:()=>d("/settings"),children:[(0,vr.jsx)(Fi,{children:"\u2699\ufe0f"}),u("settings")||"\u0627\u0644\u0625\u0639\u062f\u0627\u062f\u0627\u062a"]})}),s()&&(0,vr.jsxs)(vr.Fragment,{children:[(0,vr.jsx)(Ai,{}),(0,vr.jsx)(Ii,{children:(0,vr.jsxs)($i,{onClick:()=>{d("/admin"),o(!1)},children:[(0,vr.jsx)(Fi,{children:"\ud83d\udee0\ufe0f"}),u("adminPanel")||"\u0644\u0648\u062d\u0629 \u0627\u0644\u0625\u062f\u0627\u0631\u0629"]})})]}),(0,vr.jsx)(Ai,{}),(0,vr.jsx)(Ii,{children:(0,vr.jsxs)($i,{onClick:()=>{l(),o(!1),d("/")},className:"danger",children:[(0,vr.jsx)(Fi,{children:"\ud83d\udeaa"}),u("logout")||"\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062e\u0631\u0648\u062c"]})})]})]})]})},Ui=Ca.div`
  position: relative;
`,Bi=Ca.button`
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
`,Hi=Ca.span`
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
`,Vi=Ca.div`
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
`,Wi=Ca.div`
  padding: 1rem;
  border-bottom: 1px solid ${e=>e.theme.colors.border};
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Gi=Ca.h3`
  color: ${e=>e.theme.colors.text};
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
`,Ki=Ca.button`
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
`,qi=Ca.div`
  max-height: 300px;
  overflow-y: auto;
`,Qi=Ca.div`
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
`,Xi=Ca.div`
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
`,Yi=Ca.div`
  flex: 1;
`,Ji=Ca.div`
  color: ${e=>e.theme.colors.text};
  font-size: 0.9rem;
  line-height: 1.4;
  margin-bottom: 0.25rem;
`,Zi=Ca.div`
  color: ${e=>e.theme.colors.textSecondary};
  font-size: 0.8rem;
`,el=Ca.div`
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
`,tl=Ca.div`
  padding: 2rem;
  text-align: center;
  color: ${e=>e.theme.colors.textSecondary};
  font-size: 0.9rem;
`,rl=()=>{const[t,r]=(0,e.useState)(!1),[n,o]=(0,e.useState)([]),a=(0,e.useRef)(null),{user:i}=$a(),{isRTL:l}=Ua(),{t:s}=Pr(),c=[{id:"1",type:"order",message:"\u062a\u0645 \u062a\u0623\u0643\u064a\u062f \u0637\u0644\u0628\u0643 #001 \u0648\u0633\u064a\u062a\u0645 \u0634\u062d\u0646\u0647 \u0642\u0631\u064a\u0628\u0627\u064b",time:"5 \u062f\u0642\u0627\u0626\u0642",isRead:!1},{id:"2",type:"promotion",message:"\u062e\u0635\u0645 25% \u0639\u0644\u0649 \u062c\u0645\u064a\u0639 \u0628\u0631\u0627\u0645\u062c Adobe - \u0639\u0631\u0636 \u0645\u062d\u062f\u0648\u062f!",time:"1 \u0633\u0627\u0639\u0629",isRead:!1},{id:"3",type:"system",message:"\u062a\u0645 \u062a\u062d\u062f\u064a\u062b \u0646\u0638\u0627\u0645 \u0627\u0644\u0623\u0645\u0627\u0646 - \u064a\u0631\u062c\u0649 \u0645\u0631\u0627\u062c\u0639\u0629 \u0625\u0639\u062f\u0627\u062f\u0627\u062a\u0643",time:"3 \u0633\u0627\u0639\u0627\u062a",isRead:!0},{id:"4",type:"order",message:"\u062a\u0645 \u062a\u0633\u0644\u064a\u0645 \u0637\u0644\u0628\u0643 #002 \u0628\u0646\u062c\u0627\u062d",time:"1 \u064a\u0648\u0645",isRead:!0},{id:"5",type:"warning",message:"\u0627\u0646\u062a\u0628\u0647: \u0645\u062d\u0627\u0648\u0644\u0629 \u062f\u062e\u0648\u0644 \u0645\u0634\u0628\u0648\u0647\u0629 \u0625\u0644\u0649 \u062d\u0633\u0627\u0628\u0643",time:"2 \u0623\u064a\u0627\u0645",isRead:!1}];(0,e.useEffect)(()=>{i&&o(c)},[i]),(0,e.useEffect)(()=>{const e=e=>{a.current&&!a.current.contains(e.target)&&r(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);const u=n.filter(e=>!e.isRead).length,d=e=>{switch(e){case"order":return"\ud83d\udce6";case"promotion":return"\ud83c\udf89";case"system":return"\u2699\ufe0f";case"warning":return"\u26a0\ufe0f";default:return"\ud83d\udce2"}};return i?(0,vr.jsxs)(Ui,{ref:a,children:[(0,vr.jsxs)(Bi,{onClick:()=>r(!t),children:["\ud83d\udd14",(0,vr.jsx)(Hi,{count:u,children:u>9?"9+":u})]}),(0,vr.jsxs)(Vi,{isOpen:t,isRTL:l,children:[(0,vr.jsxs)(Wi,{children:[(0,vr.jsx)(Gi,{children:s("notifications")||"\u0627\u0644\u0625\u0634\u0639\u0627\u0631\u0627\u062a"}),u>0&&(0,vr.jsx)(Ki,{onClick:()=>{o(e=>e.map(e=>({...e,isRead:!0})))},children:s("markAllRead")||"\u062a\u062d\u062f\u064a\u062f \u0627\u0644\u0643\u0644 \u0643\u0645\u0642\u0631\u0648\u0621"})]}),(0,vr.jsx)(qi,{children:0===n.length?(0,vr.jsx)(tl,{children:s("noNotifications")||"\u0644\u0627 \u062a\u0648\u062c\u062f \u0625\u0634\u0639\u0627\u0631\u0627\u062a"}):n.map(e=>{return(0,vr.jsx)(Qi,{isRead:e.isRead,onClick:()=>{return t=e.id,void o(e=>e.map(e=>e.id===t?{...e,isRead:!0}:e));var t},children:(0,vr.jsxs)(el,{children:[(0,vr.jsx)(Xi,{type:e.type,children:d(e.type)}),(0,vr.jsxs)(Yi,{children:[(0,vr.jsx)(Ji,{children:e.message}),(0,vr.jsx)(Zi,{children:(t=e.time,`${s("since")||"\u0645\u0646\u0630"} ${t}`)})]})]})},e.id);var t})})]})]}):null},nl=Ca.header`
  background-color: var(--surface-color);
  box-shadow: 0 2px 4px var(--shadow-color);
  position: sticky;
  top: 0;
  z-index: 100;
`,ol=Ca.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid var(--border-color);
`,al=Ca.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--primary-color);
`,il=Ca.div`
  flex: 1;
  max-width: 500px;
  margin: 0 1rem;
  position: relative;

  @media (max-width: 768px) {
    display: none;
  }
`,ll=Ca.input`
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
`,sl=Ca.div`
  display: flex;
  align-items: center;
`,cl=Ca.button`
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
`,ul=Ca.span`
  background-color: var(--secondary-color);
  color: white;
  border-radius: 50%;
  padding: 0.1rem 0.4rem;
  font-size: 0.7rem;
  position: absolute;
  top: -5px;
  right: -5px;
`,dl=Ca.nav`
  padding: 0.5rem 1rem;
`,pl=Ca.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  overflow-x: auto;

  @media (max-width: 768px) {
    justify-content: space-between;
  }
`,fl=Ca.li`
  margin-right: 1.5rem;
  white-space: nowrap;

  &:last-child {
    margin-right: 0;
  }
`,hl=Ca.a`
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
`,ml=Ca(cl)`
  @media (min-width: 769px) {
    display: none;
  }
`,gl=Ca(cl)`
  position: relative;
`,vl=Ca(cl)`
  position: relative;
`,yl=t=>{let{onSearchClick:r}=t;const{t:n}=Pr(),{theme:o,toggleTheme:a}=(()=>{const t=(0,e.useContext)(yr);if(void 0===t)throw new Error("useTheme must be used within a ThemeProvider");return t})(),{language:i,changeLanguage:l,isRTL:s}=Ua(),{totalItems:c}=Ba(),{user:u}=$a(),[d,p]=(0,e.useState)(!1),[f,h]=(0,e.useState)(!1);return(0,vr.jsxs)(nl,{children:[(0,vr.jsxs)(ol,{children:[(0,vr.jsx)(al,{children:n("app.name")}),(0,vr.jsx)(il,{children:(0,vr.jsx)(ll,{placeholder:n("nav.search"),onClick:r,readOnly:!0})}),(0,vr.jsxs)(sl,{children:[(0,vr.jsx)(ml,{"aria-label":n("nav.search"),onClick:r,children:(0,vr.jsx)("span",{children:"\ud83d\udd0d"})}),(0,vr.jsxs)(gl,{onClick:()=>{l("en"===i?"ar":"en")},children:[(0,vr.jsx)("span",{children:"en"===i?"AR":"EN"}),(0,vr.jsx)("small",{children:n("nav.language")})]}),(0,vr.jsxs)(vl,{onClick:a,children:[(0,vr.jsx)("span",{children:"light"===o?"\ud83c\udf19":"\u2600\ufe0f"}),(0,vr.jsx)("small",{children:n("nav.theme")})]}),(0,vr.jsx)(rl,{}),u?(0,vr.jsx)(Mi,{}):(0,vr.jsxs)(cl,{"aria-label":n("nav.account"),onClick:()=>{u||h(!0)},children:[(0,vr.jsx)("span",{children:"\ud83d\udc64"}),(0,vr.jsx)("small",{children:n("nav.account")})]}),(0,vr.jsxs)(cl,{"aria-label":n("nav.cart"),style:{position:"relative"},onClick:()=>{p(!0)},children:[(0,vr.jsx)("span",{children:"\ud83d\uded2"}),(0,vr.jsx)(ul,{children:c}),(0,vr.jsx)("small",{children:n("nav.cart")})]})]})]}),(0,vr.jsx)(dl,{children:(0,vr.jsxs)(pl,{children:[(0,vr.jsx)(fl,{children:(0,vr.jsx)(hl,{href:"/",children:n("nav.home")})}),(0,vr.jsx)(fl,{children:(0,vr.jsx)(hl,{href:"/store",children:n("nav.store")})}),(0,vr.jsx)(fl,{children:(0,vr.jsx)(hl,{href:"/pc-builder",children:n("nav.pcBuilder")})}),(0,vr.jsx)(fl,{children:(0,vr.jsx)(hl,{href:"/premium-software",children:n("nav.premiumSoftware")||"\u0627\u0644\u0628\u0631\u0627\u0645\u062c \u0627\u0644\u0645\u062f\u0641\u0648\u0639\u0629"})}),(0,vr.jsx)(fl,{children:(0,vr.jsx)(hl,{href:"/store/games",children:n("categories.games")})}),(0,vr.jsx)(fl,{children:(0,vr.jsx)(hl,{href:"/store/accessories",children:n("categories.accessories")})}),(0,vr.jsx)(fl,{children:(0,vr.jsx)(hl,{href:"/store/components",children:n("categories.components")})}),(0,vr.jsx)(fl,{children:(0,vr.jsx)(hl,{href:"/store/peripherals",children:n("categories.peripherals")})})]})}),(0,vr.jsx)(li,{isOpen:d,onClose:()=>p(!1)}),(0,vr.jsx)(Si,{isOpen:f,onClose:()=>h(!1)})]})},bl=Ca.footer`
  background-color: var(--surface-color);
  color: var(--text-primary);
  padding: 2rem 0;
  margin-top: 3rem;
  border-top: 1px solid var(--border-color);
`,xl=Ca.div`
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
`,wl=Ca.div`
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
`,Sl=Ca.div`
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
`,kl=Ca.div`
  text-align: center;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid var(--border-color);
  color: var(--text-secondary);
  font-size: 0.9rem;
`,jl=()=>{const{t:e}=Pr(),{isRTL:t}=Ua();return(0,vr.jsxs)(bl,{children:[(0,vr.jsxs)(xl,{children:[(0,vr.jsxs)(wl,{children:[(0,vr.jsx)("h3",{children:e("app.name")}),(0,vr.jsx)("p",{children:e("app.tagline")}),(0,vr.jsxs)(Sl,{children:[(0,vr.jsx)("a",{href:"#","aria-label":"Facebook",children:"\ud83d\udcf1"}),(0,vr.jsx)("a",{href:"#","aria-label":"Twitter",children:"\ud83d\udc26"}),(0,vr.jsx)("a",{href:"#","aria-label":"Instagram",children:"\ud83d\udcf7"}),(0,vr.jsx)("a",{href:"#","aria-label":"YouTube",children:"\ud83d\udcfa"})]})]}),(0,vr.jsxs)(wl,{children:[(0,vr.jsx)("h3",{children:e("nav.store")}),(0,vr.jsxs)("ul",{children:[(0,vr.jsx)("li",{children:(0,vr.jsx)("a",{href:"/store/games",children:e("categories.games")})}),(0,vr.jsx)("li",{children:(0,vr.jsx)("a",{href:"/store/accessories",children:e("categories.accessories")})}),(0,vr.jsx)("li",{children:(0,vr.jsx)("a",{href:"/store/components",children:e("categories.components")})}),(0,vr.jsx)("li",{children:(0,vr.jsx)("a",{href:"/store/peripherals",children:e("categories.peripherals")})})]})]}),(0,vr.jsxs)(wl,{children:[(0,vr.jsx)("h3",{children:e("footer.support")}),(0,vr.jsxs)("ul",{children:[(0,vr.jsx)("li",{children:(0,vr.jsx)("a",{href:"/contact",children:e("footer.contact")})}),(0,vr.jsx)("li",{children:(0,vr.jsx)("a",{href:"/faq",children:e("footer.faq")})}),(0,vr.jsx)("li",{children:(0,vr.jsx)("a",{href:"/support",children:e("footer.support")})}),(0,vr.jsx)("li",{children:(0,vr.jsx)("a",{href:"/about",children:e("footer.about")})})]})]}),(0,vr.jsxs)(wl,{children:[(0,vr.jsx)("h3",{children:e("account.title")}),(0,vr.jsxs)("ul",{children:[(0,vr.jsx)("li",{children:(0,vr.jsx)("a",{href:"/account/login",children:e("account.login")})}),(0,vr.jsx)("li",{children:(0,vr.jsx)("a",{href:"/account/register",children:e("account.register")})}),(0,vr.jsx)("li",{children:(0,vr.jsx)("a",{href:"/account/orders",children:e("account.orders")})}),(0,vr.jsx)("li",{children:(0,vr.jsx)("a",{href:"/account/wishlist",children:e("account.wishlist")})})]})]})]}),(0,vr.jsxs)(kl,{children:[(0,vr.jsx)("div",{className:"container",children:e("footer.copyright")}),(0,vr.jsxs)("div",{className:"container mt-1",children:[(0,vr.jsx)("a",{href:"/terms",children:e("footer.terms")})," | ",(0,vr.jsx)("a",{href:"/privacy",children:e("footer.privacy")})]})]})]})},Cl=Ca.div`
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
`,El=Ca.div`
  position: relative;
  padding-top: 75%; /* 4:3 Aspect Ratio */
  overflow: hidden;
`,Pl=Ca.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${Cl}:hover & {
    transform: scale(1.05);
  }
`,Ol=Ca.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`,_l=Ca.span`
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.7rem;
  font-weight: bold;
  text-transform: uppercase;
  color: white;
  background-color: ${e=>{let{type:t}=e;return"new"===t?"var(--primary-color)":"sale"===t?"var(--secondary-color)":"var(--error-color)"}};
`,Rl=Ca.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`,Nl=Ca.span`
  color: var(--text-secondary);
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
`,Tl=Ca.h3`
  margin: 0 0 0.5rem;
  font-size: 1rem;
  color: var(--text-primary);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`,Ll=Ca.div`
  display: flex;
  align-items: center;
  margin-top: auto;
  padding-top: 0.5rem;
`,zl=Ca.span`
  font-weight: bold;
  font-size: 1.1rem;
  color: var(--text-primary);
`,Dl=Ca.span`
  text-decoration: line-through;
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-left: 0.5rem;
`,Il=Ca.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`,$l=Ca.button`
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
`,Fl=Ca($l)`
  flex: 1;
`,Al=Ca($l)`
  margin-left: 0.5rem;
  width: 40px;
  height: 40px;
`,Ml=e=>{let{product:t}=e;const{t:r}=Pr(),{addToCart:n}=Ba(),{showToast:o}=za(),a={RTX3080:"https://images.nvidia.com/rdp/graphics/rtx-3080/gallery/rtx-3080-gallery-03-1920x1080.jpg",Headset:"https://www.logitechg.com/assets/69971/1/logitech-g-pro-x-wireless-headset-gallery-1.jpg",PS5:"https://www.playstation.com/content/dam/pscom/ps5/ps5-digital-edition/ps5-digital-edition-hero-01.jpg",Monitor:"https://www.dell.com/sites/csimages/App-Merchandizing_Images/all/monitors-ultrasharp-u2723qe-front.png",Xbox:"https://compass-ssl.xbox.com/assets/28/2d/282d381b-4c51-48af-b9e6-0446d57c6e6c.jpg?n=Xbox-Series-X_Home-0_Xbox-Cloud-Gaming_1083x609.jpg",Mouse:"https://www.razer.com/assets/images/products/deathadder-v3-pro/gallery/deathadder-v3-pro-gallery-01.png",RAM:"https://www.corsair.com/medias/sys_master/images/images/h0e/h18/9046716647966/-CMW32GX4M2C3200C16-01.png",Ryzen9:"https://www.amd.com/system/files/2022-08/amd-ryzen-9-7950x-hero.png"}[t.name]||t.image;return(0,vr.jsxs)(Cl,{children:[(0,vr.jsxs)(El,{children:[(0,vr.jsx)(Pl,{src:a,alt:t.name}),(0,vr.jsxs)(Ol,{children:[t.isNew&&(0,vr.jsx)(_l,{type:"new",children:r("product.new")}),t.discountPrice&&(0,vr.jsx)(_l,{type:"sale",children:r("product.sale")}),!t.inStock&&(0,vr.jsx)(_l,{type:"out",children:r("product.outOfStock")})]})]}),(0,vr.jsxs)(Rl,{children:[(0,vr.jsx)(Nl,{children:r(`categories.${t.category.toLowerCase()}`)}),(0,vr.jsx)(Tl,{children:t.name}),(0,vr.jsxs)(Ll,{children:[(0,vr.jsx)(zl,{children:t.discountPrice?`$${t.discountPrice}`:`$${t.price}`}),t.discountPrice&&(0,vr.jsxs)(Dl,{children:["$",t.price]})]}),(0,vr.jsxs)(Il,{children:[(0,vr.jsx)(Fl,{$primary:!0,onClick:()=>{n(t,1),o(`${t.name} ${r("cart.addedToCart")}`,"success")},disabled:!t.inStock,children:t.inStock?r("product.addToCart"):r("product.outOfStock")}),(0,vr.jsx)(Al,{children:"\u2764\ufe0f"})]})]})]})},Ul=Ca.div`
  margin: 2rem 0;
`,Bl=Ca.h2`
  margin-bottom: 1.5rem;
  color: var(--text-primary);
  font-size: 1.8rem;
`,Hl=Ca.div`
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
`,Vl=Ca.div`
  text-align: center;
  padding: 3rem 0;
  color: var(--text-secondary);
  font-size: 1.2rem;
`,Wl=e=>{let{products:t,title:r}=e;const{t:n}=Pr();return(0,vr.jsxs)(Ul,{children:[r&&(0,vr.jsx)(Bl,{children:r}),t.length>0?(0,vr.jsx)(Hl,{children:t.map(e=>(0,vr.jsx)(Ml,{product:e},e.id))}):(0,vr.jsx)(Vl,{children:n("product.noProductsFound")})]})},Gl=Ca.div`
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
`,Kl=Ca.div`
  background-color: var(--surface-color);
  border-radius: 12px;
  padding: 1.5rem;
  max-width: 600px;
  width: 90%;
  max-height: 70vh;
  overflow-y: auto;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  position: relative;
`,ql=Ca.input`
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
`,Ql=Ca.div`
  max-height: 400px;
  overflow-y: auto;
`,Xl=Ca.div`
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
`,Yl=Ca.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 1rem;
`,Jl=Ca.div`
  flex: 1;
`,Zl=Ca.h4`
  margin: 0 0 0.5rem;
  color: var(--text-primary);
  font-size: 0.9rem;
`,es=Ca.span`
  color: var(--text-secondary);
  font-size: 0.8rem;
`,ts=Ca.span`
  color: var(--primary-color);
  font-weight: bold;
  margin-left: 1rem;
`,rs=Ca.div`
  text-align: center;
  padding: 2rem;
  color: var(--text-secondary);
`,ns=Ca.button`
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
`,os=t=>{let{isOpen:r,onClose:n,products:o}=t;const{t:a}=Pr(),[i,l]=(0,e.useState)(""),[s,c]=(0,e.useState)([]);(0,e.useEffect)(()=>{if(""===i.trim())return void c([]);const e=o.filter(e=>e.name.toLowerCase().includes(i.toLowerCase())||e.category.toLowerCase().includes(i.toLowerCase())||e.description.toLowerCase().includes(i.toLowerCase()));c(e)},[i,o]);const u=()=>{l(""),c([]),n()};return(0,vr.jsx)(Gl,{$isOpen:r,onClick:e=>{e.target===e.currentTarget&&n()},children:(0,vr.jsxs)(Kl,{children:[(0,vr.jsx)(ns,{onClick:u,children:"\xd7"}),(0,vr.jsx)(ql,{type:"text",placeholder:a("search.placeholder"),value:i,onChange:e=>l(e.target.value),autoFocus:!0}),(0,vr.jsxs)(Ql,{children:[""!==i.trim()&&0===s.length&&(0,vr.jsx)(rs,{children:(0,vr.jsx)("p",{children:a("search.noResults")})}),s.map(e=>(0,vr.jsxs)(Xl,{onClick:u,children:[(0,vr.jsx)(Yl,{src:e.image,alt:e.name}),(0,vr.jsxs)(Jl,{children:[(0,vr.jsx)(Zl,{children:e.name}),(0,vr.jsx)(es,{children:a(`categories.${e.category.toLowerCase()}`)})]}),(0,vr.jsxs)(ts,{children:["$",e.discountPrice||e.price]})]},e.id))]})]})})},as=[{id:"1",name:"PlayStation 5 Digital Edition",category:"games",price:399.99,image:"https://via.placeholder.com/300x300?text=PS5",description:"Next-gen gaming console with lightning-fast loading times and stunning graphics.",inStock:!0,isNew:!0,isFeatured:!0},{id:"3",name:"Logitech G Pro X Gaming Headset",category:"accessories",price:129.99,discountPrice:99.99,image:"https://via.placeholder.com/300x300?text=Headset",description:"Professional-grade gaming headset with Blue VO!CE microphone technology.",inStock:!0,isFeatured:!0},{id:"4",name:"NVIDIA GeForce RTX 3080",category:"components",price:699.99,image:"https://via.placeholder.com/300x300?text=RTX3080",description:"High-end graphics card for ultimate gaming performance.",inStock:!1,isFeatured:!0},{id:"7",name:'Samsung Odyssey G7 32" Gaming Monitor',category:"peripherals",price:799.99,discountPrice:649.99,image:"https://via.placeholder.com/300x300?text=Monitor",description:"Curved QLED gaming monitor with 240Hz refresh rate and 1ms response time.",inStock:!0,isFeatured:!0}],is=[{id:"2",name:"Xbox Series X",category:"games",price:499.99,image:"https://via.placeholder.com/300x300?text=Xbox",description:"The most powerful Xbox ever with 4K gaming and high frame rates.",inStock:!0},{id:"6",name:"Razer DeathAdder V2 Gaming Mouse",category:"peripherals",price:69.99,image:"https://via.placeholder.com/300x300?text=Mouse",description:"High-precision gaming mouse with optical switches.",inStock:!0},{id:"5",name:"AMD Ryzen 9 5900X",category:"components",price:549.99,discountPrice:499.99,image:"https://via.placeholder.com/300x300?text=Ryzen9",description:"12-core, 24-thread processor for demanding tasks and gaming.",inStock:!0},{id:"8",name:"Corsair Vengeance RGB Pro 32GB RAM",category:"components",price:159.99,image:"https://via.placeholder.com/300x300?text=RAM",description:"High-performance DDR4 memory with RGB lighting.",inStock:!0}],ls=Ca.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`,ss=Ca.main`
  flex: 1;
  padding: 2rem 0;
`,cs=Ca.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`,us=Ca.section`
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
`,ds=Ca.div`
  text-align: center;
  color: white;
  max-width: 800px;
  padding: 0 2rem;
`,ps=Ca.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,fs=Ca.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,hs=Ca.a`
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
`,ms=Ca.section`
  margin-bottom: 3rem;
`,gs=Ca.h2`
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  color: var(--text-primary);
`,vs=Ca.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`,ys=Ca.a`
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
`,bs=Ca.span`
  position: relative;
  z-index: 2;
`,xs=Ca.section`
  background-color: var(--surface-color);
  border-radius: 8px;
  padding: 2rem;
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`,ws=Ca.div`
  flex: 1;
  padding-right: 2rem;
  
  @media (max-width: 768px) {
    padding-right: 0;
    padding-bottom: 1.5rem;
    text-align: center;
  }
`,Ss=Ca.h2`
  margin-bottom: 1rem;
  font-size: 1.8rem;
  color: var(--text-primary);
`,ks=Ca.p`
  margin-bottom: 1.5rem;
  color: var(--text-secondary);
  line-height: 1.6;
`,js=Ca.a`
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
`,Cs=Ca.div`
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
`,Es=()=>{const{t:t}=Pr(),[r,n]=(0,e.useState)(!1),o=[...as,...is];return(0,vr.jsxs)(ls,{children:[(0,vr.jsx)(yl,{onSearchClick:()=>n(!0)}),(0,vr.jsxs)(ss,{children:[(0,vr.jsx)(us,{children:(0,vr.jsxs)(ds,{children:[(0,vr.jsx)(ps,{children:t("app.name")}),(0,vr.jsx)(fs,{children:t("app.tagline")}),(0,vr.jsx)(hs,{href:"/store",children:t("nav.store")})]})}),(0,vr.jsxs)(cs,{children:[(0,vr.jsxs)(ms,{children:[(0,vr.jsx)(gs,{children:t("home.browseCategories")}),(0,vr.jsxs)(vs,{children:[(0,vr.jsx)(ys,{href:"/store/games",style:{backgroundImage:"url(https://via.placeholder.com/300x200?text=Games)"},children:(0,vr.jsx)(bs,{children:t("categories.games")})}),(0,vr.jsx)(ys,{href:"/store/accessories",style:{backgroundImage:"url(https://via.placeholder.com/300x200?text=Accessories)"},children:(0,vr.jsx)(bs,{children:t("categories.accessories")})}),(0,vr.jsx)(ys,{href:"/store/components",style:{backgroundImage:"url(https://via.placeholder.com/300x200?text=Components)"},children:(0,vr.jsx)(bs,{children:t("categories.components")})}),(0,vr.jsx)(ys,{href:"/store/peripherals",style:{backgroundImage:"url(https://via.placeholder.com/300x200?text=Peripherals)"},children:(0,vr.jsx)(bs,{children:t("categories.peripherals")})})]})]}),(0,vr.jsx)(Wl,{products:as,title:t("home.featuredProducts")}),(0,vr.jsxs)(xs,{children:[(0,vr.jsxs)(ws,{children:[(0,vr.jsx)(Ss,{children:t("pcBuilder.title")}),(0,vr.jsx)(ks,{children:t("home.pcBuilderPromo")}),(0,vr.jsx)(js,{href:"/pc-builder",children:t("home.startBuilding")})]}),(0,vr.jsx)(Cs,{})]}),(0,vr.jsx)(Wl,{products:is,title:t("home.bestSellers")})]})]}),(0,vr.jsx)(jl,{}),(0,vr.jsx)(os,{isOpen:r,onClose:()=>n(!1),products:o})]})},Ps=Ca.div`
  background-color: var(--surface-color);
  border-radius: 8px;
  box-shadow: 0 2px 8px var(--shadow-color);
  padding: 1.5rem;
  margin-bottom: 1.5rem;
`,Os=Ca.h3`
  margin: 0 0 1rem;
  color: var(--text-primary);
  font-size: 1.2rem;
`,_s=Ca.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,Rs=Ca.li`
  margin-bottom: 0.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`,Ns=Ca.button`
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
`,Ts=Ca.span`
  background-color: var(--background-color);
  color: var(--text-secondary);
  border-radius: 12px;
  padding: 0.1rem 0.5rem;
  font-size: 0.8rem;
  margin-left: 0.5rem;
`,Ls=e=>{let{categories:t,selectedCategory:r,onSelectCategory:n}=e;const{t:o}=Pr();return(0,vr.jsxs)(Ps,{children:[(0,vr.jsx)(Os,{children:o("store.categories")}),(0,vr.jsxs)(_s,{children:[(0,vr.jsx)(Rs,{children:(0,vr.jsxs)(Ns,{active:null===r,onClick:()=>n(null),children:[o("store.allCategories"),(0,vr.jsx)(Ts,{children:t.length})]})}),t.map(e=>(0,vr.jsx)(Rs,{children:(0,vr.jsxs)(Ns,{active:r===e,onClick:()=>n(e),children:[o(`categories.${e.toLowerCase()}`),(0,vr.jsx)(Ts,{children:"10"})," "]})},e))]})]})},zs=Ca.div`
  background-color: var(--surface-color);
  border-radius: 8px;
  box-shadow: 0 2px 8px var(--shadow-color);
  padding: 1.5rem;
  margin-bottom: 1.5rem;
`,Ds=Ca.h3`
  margin: 0 0 1rem;
  color: var(--text-primary);
  font-size: 1.2rem;
`,Is=Ca.div`
  margin-bottom: 1rem;
`,$s=Ca.div`
  position: relative;
  height: 6px;
  background-color: var(--border-color);
  border-radius: 3px;
  margin: 1.5rem 0;
`,Fs=Ca.div`
  position: absolute;
  height: 100%;
  background-color: var(--primary-color);
  border-radius: 3px;
  left: ${e=>e.left}%;
  width: ${e=>e.width}%;
`,As=Ca.div`
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
`,Ms=Ca.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Us=Ca.div`
  display: flex;
  align-items: center;
`,Bs=Ca.span`
  color: var(--text-secondary);
  margin-right: 0.5rem;
  font-size: 0.9rem;
`,Hs=Ca.input`
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
`,Vs=Ca.span`
  margin: 0 0.5rem;
  color: var(--text-secondary);
`,Ws=Ca.button`
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
`,Gs=t=>{let{minPrice:r,maxPrice:n,currentMin:o,currentMax:a,onPriceChange:i}=t;const{t:l}=Pr(),[s,c]=e.useState(o),[u,d]=e.useState(a),p=n-r,f=(s-r)/p*100,h=(u-r)/p*100,m=h-f;return(0,vr.jsxs)(zs,{children:[(0,vr.jsx)(Ds,{children:l("store.priceRange")}),(0,vr.jsxs)(Is,{children:[(0,vr.jsxs)($s,{children:[(0,vr.jsx)(Fs,{left:f,width:m}),(0,vr.jsx)(As,{position:f}),(0,vr.jsx)(As,{position:h})]}),(0,vr.jsxs)(Ms,{children:[(0,vr.jsxs)(Us,{children:[(0,vr.jsx)(Bs,{children:l("store.min")}),(0,vr.jsx)(Hs,{type:"number",value:s,onChange:e=>{const t=parseInt(e.target.value);!isNaN(t)&&t>=r&&t<=u&&c(t)},min:r,max:u})]}),(0,vr.jsx)(Vs,{children:"-"}),(0,vr.jsxs)(Us,{children:[(0,vr.jsx)(Bs,{children:l("store.max")}),(0,vr.jsx)(Hs,{type:"number",value:u,onChange:e=>{const t=parseInt(e.target.value);!isNaN(t)&&t<=n&&t>=s&&d(t)},min:s,max:n})]})]})]}),(0,vr.jsx)(Ws,{onClick:()=>{i(s,u)},children:l("store.applyFilter")})]})},Ks=[{id:"1",name:"PlayStation 5 Digital Edition",category:"games",price:399.99,image:"https://upload.wikimedia.org/wikipedia/commons/0/0e/PlayStation_5_Console_and_DualSense_Controller.jpg",description:"Next-gen gaming console with lightning-fast loading times and stunning graphics.",inStock:!0,isNew:!0},{id:"2",name:"Xbox Series X",category:"games",price:499.99,image:"https://upload.wikimedia.org/wikipedia/commons/4/43/Xbox_Series_X_and_Controller.png",description:"The most powerful Xbox ever with 4K gaming and high frame rates.",inStock:!0},{id:"3",name:"Logitech G Pro X Gaming Headset",category:"accessories",price:129.99,discountPrice:99.99,image:"https://resource.logitechg.com/content/dam/gaming/en/products/g-pro-x/g-pro-x-headset-gallery-1.png",description:"Professional-grade gaming headset with Blue VO!CE microphone technology.",inStock:!0},{id:"4",name:"NVIDIA GeForce RTX 3080",category:"components",price:699.99,image:"https://images.nvidia.com/geforce/gallery/rtx-3080/gallery-01.png",description:"High-end graphics card for ultimate gaming performance.",inStock:!1},{id:"5",name:"AMD Ryzen 9 5900X",category:"components",price:549.99,discountPrice:499.99,image:"https://upload.wikimedia.org/wikipedia/commons/3/3e/AMD_Ryzen_9_5900X_Processor.png",description:"12-core, 24-thread processor for demanding tasks and gaming.",inStock:!0},{id:"6",name:"Razer DeathAdder V2 Gaming Mouse",category:"peripherals",price:69.99,image:"https://assets2.razerzone.com/images/pnx.assets/2b48496fa03c3d0be28aa4fa4f4edc9d/deathadder-v2-gallery-01.jpg",description:"High-precision gaming mouse with optical switches.",inStock:!0},{id:"7",name:'Samsung Odyssey G7 32" Gaming Monitor',category:"peripherals",price:799.99,discountPrice:649.99,image:"https://images.samsung.com/is/image/samsung/p6pim/levant/odyssey-g7-lc32g75tqsnxza-frontblack-282842214?$720_576_PNG$",description:"Curved QLED gaming monitor with 240Hz refresh rate and 1ms response time.",inStock:!0},{id:"8",name:"Corsair Vengeance RGB Pro 32GB RAM",category:"components",price:159.99,image:"https://www.corsair.com/medias/sys_master/images/images/h24/h8d/9135015649886/-CH-256A-CPD-32GB-DDR4-3600MHz-C16-VE_RGB_PRO-DIMM.png",description:"High-performance DDR4 memory with RGB lighting.",inStock:!0}],qs=Ca.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`,Qs=Ca.main`
  flex: 1;
  padding: 2rem 0;
`,Xs=Ca.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`,Ys=Ca.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Js=Ca.aside`
  @media (max-width: 768px) {
    display: none;
  }
`,Zs=Ca.div`
  display: none;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    display: block;
  }
`,ec=Ca.button`
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
`,tc=Ca.span`
  margin-right: 0.5rem;
`,rc=()=>{const{t:t}=Pr(),[r,n]=e.useState(null),[o,a]=e.useState({min:0,max:1e3}),[i,l]=e.useState(!1),s=Ks.filter(e=>{const t=!r||e.category===r,n=(e.discountPrice||e.price)>=o.min&&(e.discountPrice||e.price)<=o.max;return t&&n}),c=Array.from(new Set(Ks.map(e=>e.category))),u=(e,t)=>{a({min:e,max:t})};return(0,vr.jsxs)(qs,{children:[(0,vr.jsx)(yl,{}),(0,vr.jsx)(Qs,{children:(0,vr.jsxs)(Xs,{children:[(0,vr.jsx)("h1",{children:t("nav.store")}),(0,vr.jsxs)(Zs,{children:[(0,vr.jsxs)(ec,{onClick:()=>{l(!i)},children:[(0,vr.jsx)(tc,{children:"\ud83d\udd0d"}),t("store.filters")]}),i&&(0,vr.jsxs)(vr.Fragment,{children:[(0,vr.jsx)(Ls,{categories:c,selectedCategory:r,onSelectCategory:n}),(0,vr.jsx)(Gs,{minPrice:0,maxPrice:1e3,currentMin:o.min,currentMax:o.max,onPriceChange:u})]})]}),(0,vr.jsxs)(Ys,{children:[(0,vr.jsxs)(Js,{children:[(0,vr.jsx)(Ls,{categories:c,selectedCategory:r,onSelectCategory:n}),(0,vr.jsx)(Gs,{minPrice:0,maxPrice:1e3,currentMin:o.min,currentMax:o.max,onPriceChange:u})]}),(0,vr.jsx)("div",{children:(0,vr.jsx)(Wl,{products:s,title:t(r?`categories.${r.toLowerCase()}`:"store.allProducts")})})]})]})}),(0,vr.jsx)(jl,{})]})},nc={processor:[{id:"cpu1",type:"processor",name:"Intel Core i9-12900K",brand:"Intel",price:589.99,image:"https://via.placeholder.com/150?text=i9-12900K",specifications:{cores:"16 (8P+8E)",threads:"24",baseFrequency:"3.2 GHz",boostFrequency:"5.2 GHz",socket:"LGA1700",tdp:"125W"},powerConsumption:125,performanceScore:95},{id:"cpu2",type:"processor",name:"AMD Ryzen 9 5950X",brand:"AMD",price:549.99,image:"https://via.placeholder.com/150?text=Ryzen9-5950X",specifications:{cores:"16",threads:"32",baseFrequency:"3.4 GHz",boostFrequency:"4.9 GHz",socket:"AM4",tdp:"105W"},powerConsumption:105,performanceScore:92}],motherboard:[{id:"mb1",type:"motherboard",name:"ASUS ROG Maximus Z690 Hero",brand:"ASUS",price:599.99,image:"https://via.placeholder.com/150?text=Z690-Hero",specifications:{chipset:"Intel Z690",socket:"LGA1700",formFactor:"ATX",memorySlots:"4",maxMemory:"128GB"},compatibleWith:{memoryType:["DDR5"],processorBrand:["Intel"]},powerConsumption:35,performanceScore:90},{id:"mb2",type:"motherboard",name:"MSI MPG X570 Gaming Pro Carbon WiFi",brand:"MSI",price:269.99,image:"https://via.placeholder.com/150?text=X570-Gaming",specifications:{chipset:"AMD X570",socket:"AM4",formFactor:"ATX",memorySlots:"4",maxMemory:"128GB"},compatibleWith:{memoryType:["DDR4"],processorBrand:["AMD"]},powerConsumption:30,performanceScore:85}],memory:[{id:"ram1",type:"memory",name:"Corsair Dominator Platinum RGB 32GB DDR5",brand:"Corsair",price:329.99,image:"https://via.placeholder.com/150?text=DDR5-RAM",specifications:{capacity:"32GB (2x16GB)",type:"DDR5",speed:"5200MHz",casLatency:"CL38"},powerConsumption:15,performanceScore:90},{id:"ram2",type:"memory",name:"G.Skill Trident Z RGB 32GB DDR4",brand:"G.Skill",price:159.99,image:"https://via.placeholder.com/150?text=DDR4-RAM",specifications:{capacity:"32GB (2x16GB)",type:"DDR4",speed:"3600MHz",casLatency:"CL16"},powerConsumption:12,performanceScore:80}],graphics:[{id:"gpu1",type:"graphics",name:"NVIDIA GeForce RTX 3080 Ti",brand:"NVIDIA",price:1199.99,image:"https://via.placeholder.com/150?text=RTX3080Ti",specifications:{memory:"12GB GDDR6X",coreClock:"1365 MHz",boostClock:"1665 MHz",interface:"PCIe 4.0 x16"},powerConsumption:350,performanceScore:95},{id:"gpu2",type:"graphics",name:"AMD Radeon RX 6900 XT",brand:"AMD",price:999.99,image:"https://via.placeholder.com/150?text=RX6900XT",specifications:{memory:"16GB GDDR6",coreClock:"1825 MHz",boostClock:"2250 MHz",interface:"PCIe 4.0 x16"},powerConsumption:300,performanceScore:90}],storage:[{id:"ssd1",type:"storage",name:"Samsung 980 PRO 2TB NVMe SSD",brand:"Samsung",price:279.99,image:"https://via.placeholder.com/150?text=980PRO",specifications:{capacity:"2TB",interface:"PCIe 4.0 x4",readSpeed:"7000 MB/s",writeSpeed:"5100 MB/s"},powerConsumption:8,performanceScore:95},{id:"ssd2",type:"storage",name:"WD Black SN850 1TB NVMe SSD",brand:"Western Digital",price:149.99,image:"https://via.placeholder.com/150?text=SN850",specifications:{capacity:"1TB",interface:"PCIe 4.0 x4",readSpeed:"7000 MB/s",writeSpeed:"5300 MB/s"},powerConsumption:7,performanceScore:92}],powerSupply:[{id:"psu1",type:"powerSupply",name:"Corsair HX1000i Platinum",brand:"Corsair",price:269.99,image:"https://via.placeholder.com/150?text=HX1000i",specifications:{wattage:"1000W",efficiency:"80+ Platinum",modular:"Full",fanSize:"140mm"},powerConsumption:0,performanceScore:90},{id:"psu2",type:"powerSupply",name:"EVGA SuperNOVA 850 G5",brand:"EVGA",price:149.99,image:"https://via.placeholder.com/150?text=SuperNOVA850",specifications:{wattage:"850W",efficiency:"80+ Gold",modular:"Full",fanSize:"135mm"},powerConsumption:0,performanceScore:85}],case:[{id:"case1",type:"case",name:"Lian Li PC-O11 Dynamic",brand:"Lian Li",price:149.99,image:"https://via.placeholder.com/150?text=PC-O11",specifications:{formFactor:"Mid Tower",motherboardSupport:"E-ATX, ATX, Micro-ATX, Mini-ITX",dimensions:"445mm x 272mm x 446mm",weight:"9.7kg"},powerConsumption:0,performanceScore:0},{id:"case2",type:"case",name:"Corsair 5000D Airflow",brand:"Corsair",price:164.99,image:"https://via.placeholder.com/150?text=5000D",specifications:{formFactor:"Mid Tower",motherboardSupport:"ATX, Micro-ATX, Mini-ITX",dimensions:"520mm x 245mm x 520mm",weight:"12.1kg"},powerConsumption:0,performanceScore:0}],cooling:[{id:"cool1",type:"cooling",name:"NZXT Kraken X73 RGB",brand:"NZXT",price:179.99,image:"https://via.placeholder.com/150?text=KrakenX73",specifications:{type:"Liquid",radiatorSize:"360mm",fanSize:"3x 120mm",rgb:"Yes"},powerConsumption:15,performanceScore:90},{id:"cool2",type:"cooling",name:"Noctua NH-D15",brand:"Noctua",price:99.99,image:"https://via.placeholder.com/150?text=NH-D15",specifications:{type:"Air",height:"165mm",fanSize:"2x 140mm",rgb:"No"},powerConsumption:5,performanceScore:85}]},oc=Ca.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`,ac=Ca.main`
  flex: 1;
  padding: 2rem 0;
`,ic=Ca.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`,lc=Ca.h1`
  margin-bottom: 1.5rem;
  color: var(--text-primary);
`,sc=Ca.p`
  margin-bottom: 2rem;
  color: var(--text-secondary);
  font-size: 1.1rem;
`,cc=Ca.div`
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 2rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`,uc=Ca.div``,dc=Ca.div`
  margin-bottom: 2rem;
`,pc=Ca.h2`
  margin-bottom: 1rem;
  font-size: 1.5rem;
  color: var(--text-primary);
`,fc=Ca.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,hc=Ca.div`
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
`,mc=Ca.div`
  width: 80px;
  height: 80px;
  margin-right: 1rem;
  flex-shrink: 0;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`,gc=Ca.div`
  flex-grow: 1;
`,vc=Ca.h3`
  margin: 0 0 0.5rem;
  font-size: 1rem;
`,yc=Ca.p`
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`,bc=Ca.p`
  font-weight: bold;
  color: var(--primary-color);
`,xc=Ca.div`
  position: sticky;
  top: 2rem;
`,wc=Ca.div`
  background-color: var(--surface-color);
  border-radius: 8px;
  box-shadow: 0 2px 8px var(--shadow-color);
  padding: 1.5rem;
  margin-bottom: 1.5rem;
`,Sc=Ca.h2`
  margin: 0 0 1rem;
  font-size: 1.3rem;
`,kc=Ca.div`
  text-align: center;
  margin-bottom: 1.5rem;
`,jc=Ca.div`
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
`,Cc=Ca.p`
  font-size: 1.1rem;
  color: var(--text-primary);
`,Ec=Ca.div`
  margin-bottom: 1.5rem;
`,Pc=Ca.div`
  display: flex;
  justify-content: space-between;
  padding: 0.8rem 0;
  border-bottom: 1px solid var(--border-color);
  
  &:last-child {
    border-bottom: none;
  }
`,Oc=Ca.span`
  color: var(--text-secondary);
`,_c=Ca.span`
  font-weight: bold;
  color: var(--text-primary);
`,Rc=Ca.button`
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
`,Nc=Ca(Rc)`
  background-color: transparent;
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
  
  &:hover {
    background-color: var(--primary-color);
    color: white;
  }
`,Tc=()=>{const{t:t}=Pr(),{components:r,addComponent:n,removeComponent:o,getCompatibilityScore:a,getPowerConsumption:i,getPerformanceScore:l,getTotalPrice:s}=(()=>{const t=(0,e.useContext)(Tr);if(void 0===t)throw new Error("usePCBuilder must be used within a PCBuilderProvider");return t})(),{addToCart:c}=Ba(),u=a(),d=i(),p=l(),f=s(),h=Object.values(r).some(e=>null!==e);return(0,vr.jsxs)(oc,{children:[(0,vr.jsx)(yl,{}),(0,vr.jsx)(ac,{children:(0,vr.jsxs)(ic,{children:[(0,vr.jsx)(lc,{children:t("pcBuilder.title")}),(0,vr.jsx)(sc,{children:t("pcBuilder.subtitle")}),(0,vr.jsxs)(cc,{children:[(0,vr.jsx)(uc,{children:Object.keys(nc).map(e=>(0,vr.jsxs)(dc,{children:[(0,vr.jsx)(pc,{children:t(`pcBuilder.${e}`)}),(0,vr.jsx)(fc,{children:nc[e].map(t=>{var a;return(0,vr.jsxs)(hc,{selected:(null===(a=r[e])||void 0===a?void 0:a.id)===t.id,onClick:()=>((e,t)=>{var a;(null===(a=r[e])||void 0===a?void 0:a.id)===t.id?o(e):n(e,t)})(e,t),children:[(0,vr.jsx)(mc,{children:(0,vr.jsx)("img",{src:t.image,alt:t.name})}),(0,vr.jsxs)(gc,{children:[(0,vr.jsx)(vc,{children:t.name}),(0,vr.jsx)(yc,{children:t.brand}),(0,vr.jsxs)(bc,{children:["$",t.price.toFixed(2)]})]})]},t.id)})})]},e))}),(0,vr.jsx)(xc,{children:(0,vr.jsxs)(wc,{children:[(0,vr.jsx)(Sc,{children:t("pcBuilder.compatibility")}),(0,vr.jsxs)(kc,{children:[(0,vr.jsxs)(jc,{score:u,children:[u,"%"]}),(0,vr.jsx)(Cc,{children:t("pcBuilder.compatibilityScore")})]}),(0,vr.jsxs)(Ec,{children:[(0,vr.jsxs)(Pc,{children:[(0,vr.jsx)(Oc,{children:t("pcBuilder.powerConsumption")}),(0,vr.jsxs)(_c,{children:[d," W"]})]}),(0,vr.jsxs)(Pc,{children:[(0,vr.jsx)(Oc,{children:t("pcBuilder.performanceEstimate")}),(0,vr.jsxs)(_c,{children:[p,"/100"]})]}),(0,vr.jsxs)(Pc,{children:[(0,vr.jsx)(Oc,{children:t("cart.total")}),(0,vr.jsxs)(_c,{children:["$",f.toFixed(2)]})]})]}),(0,vr.jsx)(Rc,{onClick:()=>{Object.values(r).forEach(e=>{e&&c({id:e.id,name:e.name,category:e.type,price:e.price,image:e.image,description:`${e.brand} ${e.name}`,inStock:!0},1)})},disabled:!h,children:t("pcBuilder.addToCart")}),(0,vr.jsx)(Nc,{disabled:!h,children:t("pcBuilder.saveConfig")}),(0,vr.jsx)(Nc,{disabled:!h,children:t("pcBuilder.shareConfig")})]})})]})]})}),(0,vr.jsx)(jl,{})]})},Lc=Ca.div`
  background-color: var(--background-color);
  color: var(--text-primary);
  min-height: 100vh;
  padding: 2rem;
`,zc=Ca.section`
  text-align: center;
  margin-bottom: 2rem;
`,Dc=Ca.h1`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
`,Ic=Ca.p`
  font-size: 1.2rem;
  color: var(--text-secondary);
`,$c=Ca.section`
  max-width: 1200px;
  margin: 0 auto;
`,Fc=Ca.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
  align-items: center;
`,Ac=Ca.button`
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
`,Mc=Ca.input`
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
`,Uc=Ca.div`
  font-size: 2rem;
  text-align: center;
  padding: 4rem;
`,Bc=Ca.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`,Hc=Ca.div`
  background-color: var(--surface-color);
  border-radius: 8px;
  box-shadow: 0 2px 8px var(--shadow-color);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,Vc=Ca.div`
  background-image: url(${e=>{let{image:t}=e;return t}});
  background-size: cover;
  background-position: center;
  height: 180px;
  position: relative;
`,Wc=Ca.span`
  position: absolute;
  top: 8px;
  left: 8px;
  background-color: ${e=>{let{type:t}=e;return"premium"===t?"gold":"trial"===t?"dodgerblue":"subscription"===t?"mediumseagreen":"gray"}};
  color: white;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  font-weight: bold;
  font-size: 0.75rem;
`,Gc=Ca.div`
  padding: 1rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`,Kc=Ca.h3`
  margin: 0 0 0.5rem;
  font-size: 1.2rem;
`,qc=Ca.p`
  flex-grow: 1;
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
`,Qc=Ca.ul`
  list-style-type: disc;
  margin: 0 0 1rem 1.2rem;
  padding: 0;
  font-size: 0.85rem;
  color: var(--text-secondary);
`,Xc=Ca.li``,Yc=Ca.div`
  margin-bottom: 1rem;
`,Jc=Ca.div`
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
`,Zc=Ca.span`
  font-weight: bold;
  color: var(--text-primary);
  font-size: 1.1rem;
`,eu=Ca.span`
  text-decoration: line-through;
  color: var(--text-secondary);
  font-size: 0.9rem;
`,tu=Ca.span`
  background-color: var(--error-color);
  color: white;
  border-radius: 4px;
  padding: 0.1rem 0.4rem;
  font-size: 0.75rem;
`,ru=Ca.div`
  display: flex;
  gap: 1rem;
`,nu=Ca.button`
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
`,ou=Ca.button`
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
`,au=()=>{const[t,r]=(0,e.useState)([]),[n,o]=(0,e.useState)([]),[a,i]=(0,e.useState)("all"),[l,s]=(0,e.useState)(""),[c,u]=(0,e.useState)(!0),{isRTL:d}=Ua(),{t:p}=Pr(),{user:f}=$a(),{addToCart:h}=Ba(),{showToast:m}=za(),g=[{id:"all",name:p("allCategories")||"\u0627\u0644\u0643\u0644"},{id:"design",name:p("design")||"\u062a\u0635\u0645\u064a\u0645"},{id:"utility",name:p("utility")||"\u0623\u062f\u0648\u0627\u062a"},{id:"security",name:p("security")||"\u0623\u0645\u0627\u0646"}],v=[{id:"sw1",name:"\u0628\u0631\u0646\u0627\u0645\u062c \u0641\u0648\u062a\u0648\u0634\u0648\u0628",description:"\u0628\u0631\u0646\u0627\u0645\u062c \u062a\u062d\u0631\u064a\u0631 \u0627\u0644\u0635\u0648\u0631 \u0627\u0644\u0627\u062d\u062a\u0631\u0627\u0641\u064a",image:"/images/photoshop.jpg",type:"premium",features:["\u062a\u0639\u062f\u064a\u0644 \u0645\u062a\u0642\u062f\u0645 \u0644\u0644\u0635\u0648\u0631","\u062f\u0639\u0645 \u0627\u0644\u0637\u0628\u0642\u0627\u062a","\u0623\u062f\u0648\u0627\u062a \u0627\u062d\u062a\u0631\u0627\u0641\u064a\u0629"],currentPrice:99.99,originalPrice:149.99,discount:33,category:"design"},{id:"sw2",name:"\u0628\u0631\u0646\u0627\u0645\u062c \u062a\u062c\u0631\u064a\u0628\u064a",description:"\u0646\u0633\u062e\u0629 \u062a\u062c\u0631\u064a\u0628\u064a\u0629 \u0645\u062c\u0627\u0646\u064a\u0629",image:"/images/trial.jpg",type:"trial",features:["\u0645\u062f\u0629 30 \u064a\u0648\u0645","\u062a\u062c\u0631\u0628\u0629 \u0643\u0627\u0645\u0644\u0629"],currentPrice:0,category:"utility"},{id:"sw3",name:"\u0628\u0631\u0646\u0627\u0645\u062c \u0623\u0645\u0627\u0646",description:"\u062d\u0645\u0627\u064a\u0629 \u0645\u062a\u0642\u062f\u0645\u0629 \u0644\u062c\u0647\u0627\u0632\u0643",image:"/images/security.jpg",type:"subscription",features:["\u0645\u0643\u0627\u0641\u062d\u0629 \u0641\u064a\u0631\u0648\u0633\u0627\u062a","\u062c\u062f\u0627\u0631 \u062d\u0645\u0627\u064a\u0629","\u062a\u062d\u062f\u064a\u062b\u0627\u062a \u062a\u0644\u0642\u0627\u0626\u064a\u0629"],currentPrice:49.99,originalPrice:59.99,discount:17,category:"security"}];(0,e.useEffect)(()=>{setTimeout(()=>{r(v),o(v),u(!1)},1e3)},[]),(0,e.useEffect)(()=>{let e=t;"all"!==a&&(e=e.filter(e=>e.category===a)),l&&(e=e.filter(e=>e.name.toLowerCase().includes(l.toLowerCase())||e.description.toLowerCase().includes(l.toLowerCase()))),o(e)},[t,a,l]);const y=e=>{switch(e){case"premium":return p("premium")||"\u0645\u062f\u0641\u0648\u0639";case"trial":return p("trial")||"\u062a\u062c\u0631\u064a\u0628\u064a";case"subscription":return p("subscription")||"\u0627\u0634\u062a\u0631\u0627\u0643";default:return""}};return(0,vr.jsxs)(Lc,{dir:d?"rtl":"ltr",children:[(0,vr.jsx)(yl,{}),(0,vr.jsxs)(zc,{children:[(0,vr.jsx)(Dc,{children:p("premiumSoftware")||"\u0627\u0644\u0628\u0631\u0627\u0645\u062c \u0627\u0644\u0645\u062f\u0641\u0648\u0639\u0629"}),(0,vr.jsx)(Ic,{children:p("premiumSoftwareDescription")||"\u0627\u0643\u062a\u0634\u0641 \u0645\u062c\u0645\u0648\u0639\u0629 \u0648\u0627\u0633\u0639\u0629 \u0645\u0646 \u0627\u0644\u0628\u0631\u0627\u0645\u062c \u0627\u0644\u0645\u062a\u062e\u0635\u0635\u0629 \u0648\u0627\u0644\u0623\u062f\u0648\u0627\u062a \u0627\u0644\u0627\u062d\u062a\u0631\u0627\u0641\u064a\u0629"})]}),(0,vr.jsxs)($c,{children:[(0,vr.jsxs)(Fc,{children:[g.map(e=>(0,vr.jsx)(Ac,{active:a===e.id,onClick:()=>i(e.id),children:e.name},e.id)),(0,vr.jsx)(Mc,{type:"text",placeholder:p("searchSoftware")||"\u0627\u0644\u0628\u062d\u062b \u0641\u064a \u0627\u0644\u0628\u0631\u0627\u0645\u062c...",value:l,onChange:e=>s(e.target.value)})]}),c?(0,vr.jsx)(Uc,{children:"\u23f3"}):(0,vr.jsx)(Bc,{children:n.map(e=>(0,vr.jsxs)(Hc,{children:[(0,vr.jsx)(Vc,{image:e.image,children:(0,vr.jsx)(Wc,{type:e.type,children:y(e.type)})}),(0,vr.jsxs)(Gc,{children:[(0,vr.jsx)(Kc,{children:e.name}),(0,vr.jsx)(qc,{children:e.description}),(0,vr.jsx)(Qc,{children:e.features.slice(0,3).map((e,t)=>(0,vr.jsx)(Xc,{children:e},t))}),(0,vr.jsx)(Yc,{children:(0,vr.jsxs)(Jc,{children:[(0,vr.jsxs)(Zc,{children:["$",e.currentPrice]}),e.originalPrice&&(0,vr.jsxs)(eu,{children:["$",e.originalPrice]}),e.discount&&(0,vr.jsxs)(tu,{children:["-",e.discount,"%"]})]})}),(0,vr.jsxs)(ru,{children:["trial"===e.type?(0,vr.jsx)(nu,{onClick:()=>{f?m(p("trialStarted")||"\u062a\u0645 \u0628\u062f\u0621 \u0627\u0644\u0646\u0633\u062e\u0629 \u0627\u0644\u062a\u062c\u0631\u064a\u0628\u064a\u0629","success"):m(p("loginRequired")||"\u064a\u0631\u062c\u0649 \u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644 \u0623\u0648\u0644\u0627\u064b","info")},children:p("startTrial")||"\u0628\u062f\u0621 \u0627\u0644\u062a\u062c\u0631\u0628\u0629"}):(0,vr.jsx)(nu,{onClick:()=>(e=>{f?(h({id:e.id,name:e.name,price:e.currentPrice,image:e.image,description:e.description,category:"software",inStock:!0},1),m(p("addedToCart")||"\u062a\u0645 \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0628\u0631\u0646\u0627\u0645\u062c \u0625\u0644\u0649 \u0627\u0644\u0633\u0644\u0629","success")):m(p("loginRequired")||"\u064a\u0631\u062c\u0649 \u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644 \u0623\u0648\u0644\u0627\u064b","info")})(e),children:p("addToCart")||"\u0625\u0636\u0627\u0641\u0629 \u0644\u0644\u0633\u0644\u0629"}),(0,vr.jsx)(ou,{children:p("viewDetails")||"\u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644"})]})]})]},e.id))}),0===n.length&&!c&&(0,vr.jsx)("div",{style:{textAlign:"center",padding:"3rem",color:"#666"},children:p("noSoftwareFound")||"\u0644\u0645 \u064a\u062a\u0645 \u0627\u0644\u0639\u062b\u0648\u0631 \u0639\u0644\u0649 \u0628\u0631\u0627\u0645\u062c"})]}),(0,vr.jsx)(jl,{})]})},iu=Ca.div`
  min-height: 100vh;
  background: ${e=>e.theme.colors.background};
`,lu=Ca.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
`,su=Ca.div`
  background: ${e=>e.theme.colors.surface};
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
  border: 1px solid ${e=>e.theme.colors.border};
`,cu=Ca.h1`
  color: ${e=>e.theme.colors.text};
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`,uu=Ca.p`
  color: ${e=>e.theme.colors.textSecondary};
  font-size: 1.1rem;
`,du=Ca.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`,pu=Ca.div`
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
`,fu=Ca.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`,hu=Ca.div`
  font-size: 2rem;
  font-weight: 700;
  color: ${e=>e.theme.colors.primary};
  margin-bottom: 0.5rem;
`,mu=Ca.div`
  color: ${e=>e.theme.colors.textSecondary};
  font-weight: 500;
`,gu=Ca.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid ${e=>e.theme.colors.border};
`,vu=Ca.button`
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
`,yu=Ca.div`
  background: ${e=>e.theme.colors.surface};
  border: 1px solid ${e=>e.theme.colors.border};
  border-radius: 12px;
  padding: 2rem;
`,bu=Ca.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  gap: 1rem;
`,xu=Ca.input`
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
`,wu=Ca.button`
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
`,Su=Ca.table`
  width: 100%;
  border-collapse: collapse;
`,ku=Ca.th`
  background: ${e=>e.theme.colors.background};
  color: ${e=>e.theme.colors.text};
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  border-bottom: 2px solid ${e=>e.theme.colors.border};
`,ju=Ca.tr`
  &:hover {
    background: ${e=>e.theme.colors.hover};
  }
`,Cu=Ca.td`
  padding: 1rem;
  border-bottom: 1px solid ${e=>e.theme.colors.border};
  color: ${e=>e.theme.colors.text};
`,Eu=Ca.span`
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
  color: white;
  background: ${e=>{switch(e.status){case"active":return"#4CAF50";case"pending":return"#ff9800";case"completed":return"#2196F3";case"cancelled":return"#f44336";default:return"#666"}}};
`,Pu=Ca.div`
  display: flex;
  gap: 0.5rem;
`,Ou=Ca.button`
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
`,_u=Ca.div`
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
`,Ru=Ca.div`
  background: ${e=>e.theme.colors.surface};
  border-radius: 12px;
  padding: 2rem;
  width: 90%;
  max-width: 500px;
  max-height: 80vh;
  overflow-y: auto;
`,Nu=Ca.h3`
  color: ${e=>e.theme.colors.text};
  margin-bottom: 1.5rem;
`,Tu=Ca.div`
  margin-bottom: 1rem;
`,Lu=Ca.label`
  display: block;
  color: ${e=>e.theme.colors.text};
  font-weight: 500;
  margin-bottom: 0.5rem;
`,zu=Ca.input`
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
`,Du=Ca.textarea`
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
`,Iu=Ca.select`
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
`,$u=()=>{const[t,r]=(0,e.useState)("dashboard"),[n,o]=(0,e.useState)(!1),[a,i]=(0,e.useState)("product"),[l,s]=(0,e.useState)(""),{user:c,isAdmin:u}=$a(),{isRTL:d}=Ua(),{t:p}=Pr(),f=Qt();(0,e.useEffect)(()=>{c&&u()||f("/")},[c,u,f]);const h={totalUsers:1250,totalOrders:890,totalProducts:156,totalRevenue:45600},m=[{id:"1",user:"\u0623\u062d\u0645\u062f \u0645\u062d\u0645\u062f",product:"Adobe Creative Suite",amount:599,status:"completed",date:"2024-01-15"},{id:"2",user:"\u0641\u0627\u0637\u0645\u0629 \u0623\u062d\u0645\u062f",product:"Microsoft Office",amount:299,status:"pending",date:"2024-01-14"},{id:"3",user:"\u0645\u062d\u0645\u062f \u0639\u0644\u064a",product:"AutoCAD 2024",amount:1299,status:"active",date:"2024-01-13"}],g=[{id:"1",name:"\u0623\u062d\u0645\u062f \u0645\u062d\u0645\u062f",email:"ahmed@example.com",role:"user",status:"active",joinDate:"2023-12-01"},{id:"2",name:"\u0641\u0627\u0637\u0645\u0629 \u0623\u062d\u0645\u062f",email:"fatima@example.com",role:"user",status:"active",joinDate:"2023-11-15"},{id:"3",name:"\u0645\u062d\u0645\u062f \u0639\u0644\u064a",email:"mohammed@example.com",role:"admin",status:"active",joinDate:"2023-10-20"}],v=[{id:"1",name:"Adobe Creative Suite 2024",category:"design",price:599,stock:100,status:"active"},{id:"2",name:"Microsoft Office 365",category:"productivity",price:299,stock:200,status:"active"},{id:"3",name:"AutoCAD 2024",category:"engineering",price:1299,stock:50,status:"active"}],y=e=>{i(e),o(!0)},b=()=>(0,vr.jsxs)(yu,{children:[(0,vr.jsxs)(bu,{children:[(0,vr.jsx)(xu,{placeholder:p("searchUsers")||"\u0627\u0644\u0628\u062d\u062b \u0641\u064a \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645\u064a\u0646...",value:l,onChange:e=>s(e.target.value)}),(0,vr.jsx)(wu,{onClick:()=>y("user"),children:p("addUser")||"\u0625\u0636\u0627\u0641\u0629 \u0645\u0633\u062a\u062e\u062f\u0645"})]}),(0,vr.jsxs)(Su,{children:[(0,vr.jsx)("thead",{children:(0,vr.jsxs)("tr",{children:[(0,vr.jsx)(ku,{children:p("name")||"\u0627\u0644\u0627\u0633\u0645"}),(0,vr.jsx)(ku,{children:p("email")||"\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a"}),(0,vr.jsx)(ku,{children:p("role")||"\u0627\u0644\u062f\u0648\u0631"}),(0,vr.jsx)(ku,{children:p("status")||"\u0627\u0644\u062d\u0627\u0644\u0629"}),(0,vr.jsx)(ku,{children:p("joinDate")||"\u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0627\u0646\u0636\u0645\u0627\u0645"}),(0,vr.jsx)(ku,{children:p("actions")||"\u0627\u0644\u0625\u062c\u0631\u0627\u0621\u0627\u062a"})]})}),(0,vr.jsx)("tbody",{children:g.map(e=>(0,vr.jsxs)(ju,{children:[(0,vr.jsx)(Cu,{children:e.name}),(0,vr.jsx)(Cu,{children:e.email}),(0,vr.jsx)(Cu,{children:"admin"===e.role?"\u0645\u062f\u064a\u0631":"\u0645\u0633\u062a\u062e\u062f\u0645"}),(0,vr.jsx)(Cu,{children:(0,vr.jsx)(Eu,{status:e.status,children:"active"===e.status?"\u0646\u0634\u0637":"\u063a\u064a\u0631 \u0646\u0634\u0637"})}),(0,vr.jsx)(Cu,{children:e.joinDate}),(0,vr.jsx)(Cu,{children:(0,vr.jsxs)(Pu,{children:[(0,vr.jsx)(Ou,{className:"primary",children:p("edit")||"\u062a\u0639\u062f\u064a\u0644"}),(0,vr.jsx)(Ou,{className:"danger",children:p("delete")||"\u062d\u0630\u0641"})]})})]},e.id))})]})]});return c&&u()?(0,vr.jsxs)(iu,{dir:d?"rtl":"ltr",children:[(0,vr.jsx)(yl,{}),(0,vr.jsxs)(lu,{children:[(0,vr.jsxs)(su,{children:[(0,vr.jsx)(cu,{children:p("adminPanel")||"\u0644\u0648\u062d\u0629 \u0627\u0644\u0625\u062f\u0627\u0631\u0629"}),(0,vr.jsx)(uu,{children:p("adminWelcome")||"\u0645\u0631\u062d\u0628\u0627\u064b \u0628\u0643 \u0641\u064a \u0644\u0648\u062d\u0629 \u0627\u0644\u062a\u062d\u0643\u0645 \u0627\u0644\u0625\u062f\u0627\u0631\u064a\u0629"})]}),(0,vr.jsxs)(gu,{children:[(0,vr.jsx)(vu,{active:"dashboard"===t,onClick:()=>r("dashboard"),children:p("dashboard")||"\u0644\u0648\u062d\u0629 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a"}),(0,vr.jsx)(vu,{active:"users"===t,onClick:()=>r("users"),children:p("users")||"\u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645\u0648\u0646"}),(0,vr.jsx)(vu,{active:"products"===t,onClick:()=>r("products"),children:p("products")||"\u0627\u0644\u0645\u0646\u062a\u062c\u0627\u062a"}),(0,vr.jsx)(vu,{active:"orders"===t,onClick:()=>r("orders"),children:p("orders")||"\u0627\u0644\u0637\u0644\u0628\u0627\u062a"})]}),"dashboard"===t&&(0,vr.jsxs)(vr.Fragment,{children:[(0,vr.jsxs)(du,{children:[(0,vr.jsxs)(pu,{children:[(0,vr.jsx)(fu,{children:"\ud83d\udc65"}),(0,vr.jsx)(hu,{children:h.totalUsers.toLocaleString()}),(0,vr.jsx)(mu,{children:p("totalUsers")||"\u0625\u062c\u0645\u0627\u0644\u064a \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645\u064a\u0646"})]}),(0,vr.jsxs)(pu,{children:[(0,vr.jsx)(fu,{children:"\ud83d\udce6"}),(0,vr.jsx)(hu,{children:h.totalOrders.toLocaleString()}),(0,vr.jsx)(mu,{children:p("totalOrders")||"\u0625\u062c\u0645\u0627\u0644\u064a \u0627\u0644\u0637\u0644\u0628\u0627\u062a"})]}),(0,vr.jsxs)(pu,{children:[(0,vr.jsx)(fu,{children:"\ud83d\udecd\ufe0f"}),(0,vr.jsx)(hu,{children:h.totalProducts.toLocaleString()}),(0,vr.jsx)(mu,{children:p("totalProducts")||"\u0625\u062c\u0645\u0627\u0644\u064a \u0627\u0644\u0645\u0646\u062a\u062c\u0627\u062a"})]}),(0,vr.jsxs)(pu,{children:[(0,vr.jsx)(fu,{children:"\ud83d\udcb0"}),(0,vr.jsxs)(hu,{children:["$",h.totalRevenue.toLocaleString()]}),(0,vr.jsx)(mu,{children:p("totalRevenue")||"\u0625\u062c\u0645\u0627\u0644\u064a \u0627\u0644\u0625\u064a\u0631\u0627\u062f\u0627\u062a"})]})]}),(0,vr.jsxs)(yu,{children:[(0,vr.jsx)("h3",{style:{marginBottom:"1.5rem",color:"var(--text-primary)"},children:p("recentOrders")||"\u0627\u0644\u0637\u0644\u0628\u0627\u062a \u0627\u0644\u0623\u062e\u064a\u0631\u0629"}),(0,vr.jsxs)(Su,{children:[(0,vr.jsx)("thead",{children:(0,vr.jsxs)("tr",{children:[(0,vr.jsx)(ku,{children:p("orderId")||"\u0631\u0642\u0645 \u0627\u0644\u0637\u0644\u0628"}),(0,vr.jsx)(ku,{children:p("customer")||"\u0627\u0644\u0639\u0645\u064a\u0644"}),(0,vr.jsx)(ku,{children:p("product")||"\u0627\u0644\u0645\u0646\u062a\u062c"}),(0,vr.jsx)(ku,{children:p("amount")||"\u0627\u0644\u0645\u0628\u0644\u063a"}),(0,vr.jsx)(ku,{children:p("status")||"\u0627\u0644\u062d\u0627\u0644\u0629"}),(0,vr.jsx)(ku,{children:p("date")||"\u0627\u0644\u062a\u0627\u0631\u064a\u062e"})]})}),(0,vr.jsx)("tbody",{children:m.map(e=>(0,vr.jsxs)(ju,{children:[(0,vr.jsxs)(Cu,{children:["#",e.id]}),(0,vr.jsx)(Cu,{children:e.user}),(0,vr.jsx)(Cu,{children:e.product}),(0,vr.jsxs)(Cu,{children:["$",e.amount]}),(0,vr.jsx)(Cu,{children:(0,vr.jsx)(Eu,{status:e.status,children:"completed"===e.status?"\u0645\u0643\u062a\u0645\u0644":"pending"===e.status?"\u0645\u0639\u0644\u0642":"\u0646\u0634\u0637"})}),(0,vr.jsx)(Cu,{children:e.date})]},e.id))})]})]})]}),"users"===t&&b(),"products"===t&&(0,vr.jsxs)(yu,{children:[(0,vr.jsxs)(bu,{children:[(0,vr.jsx)(xu,{placeholder:p("searchProducts")||"\u0627\u0644\u0628\u062d\u062b \u0641\u064a \u0627\u0644\u0645\u0646\u062a\u062c\u0627\u062a...",value:l,onChange:e=>s(e.target.value)}),(0,vr.jsx)(wu,{onClick:()=>y("product"),children:p("addProduct")||"\u0625\u0636\u0627\u0641\u0629 \u0645\u0646\u062a\u062c"})]}),(0,vr.jsxs)(Su,{children:[(0,vr.jsx)("thead",{children:(0,vr.jsxs)("tr",{children:[(0,vr.jsx)(ku,{children:p("name")||"\u0627\u0644\u0627\u0633\u0645"}),(0,vr.jsx)(ku,{children:p("category")||"\u0627\u0644\u0641\u0626\u0629"}),(0,vr.jsx)(ku,{children:p("price")||"\u0627\u0644\u0633\u0639\u0631"}),(0,vr.jsx)(ku,{children:p("stock")||"\u0627\u0644\u0645\u062e\u0632\u0648\u0646"}),(0,vr.jsx)(ku,{children:p("status")||"\u0627\u0644\u062d\u0627\u0644\u0629"}),(0,vr.jsx)(ku,{children:p("actions")||"\u0627\u0644\u0625\u062c\u0631\u0627\u0621\u0627\u062a"})]})}),(0,vr.jsx)("tbody",{children:v.map(e=>(0,vr.jsxs)(ju,{children:[(0,vr.jsx)(Cu,{children:e.name}),(0,vr.jsx)(Cu,{children:e.category}),(0,vr.jsxs)(Cu,{children:["$",e.price]}),(0,vr.jsx)(Cu,{children:e.stock}),(0,vr.jsx)(Cu,{children:(0,vr.jsx)(Eu,{status:e.status,children:"active"===e.status?"\u0646\u0634\u0637":"\u063a\u064a\u0631 \u0646\u0634\u0637"})}),(0,vr.jsx)(Cu,{children:(0,vr.jsxs)(Pu,{children:[(0,vr.jsx)(Ou,{className:"primary",children:p("edit")||"\u062a\u0639\u062f\u064a\u0644"}),(0,vr.jsx)(Ou,{className:"danger",children:p("delete")||"\u062d\u0630\u0641"})]})})]},e.id))})]})]}),"orders"===t&&b()," ",(0,vr.jsx)(_u,{isOpen:n,onClick:()=>o(!1),children:(0,vr.jsxs)(Ru,{onClick:e=>e.stopPropagation(),children:[(0,vr.jsxs)(Nu,{children:["product"===a&&(p("addProduct")||"\u0625\u0636\u0627\u0641\u0629 \u0645\u0646\u062a\u062c"),"user"===a&&(p("addUser")||"\u0625\u0636\u0627\u0641\u0629 \u0645\u0633\u062a\u062e\u062f\u0645"),"order"===a&&(p("addOrder")||"\u0625\u0636\u0627\u0641\u0629 \u0637\u0644\u0628")]}),"product"===a&&(0,vr.jsxs)(vr.Fragment,{children:[(0,vr.jsxs)(Tu,{children:[(0,vr.jsx)(Lu,{children:p("productName")||"\u0627\u0633\u0645 \u0627\u0644\u0645\u0646\u062a\u062c"}),(0,vr.jsx)(zu,{type:"text",placeholder:p("enterProductName")||"\u0623\u062f\u062e\u0644 \u0627\u0633\u0645 \u0627\u0644\u0645\u0646\u062a\u062c"})]}),(0,vr.jsxs)(Tu,{children:[(0,vr.jsx)(Lu,{children:p("category")||"\u0627\u0644\u0641\u0626\u0629"}),(0,vr.jsxs)(Iu,{children:[(0,vr.jsx)("option",{value:"design",children:p("design")||"\u0627\u0644\u062a\u0635\u0645\u064a\u0645"}),(0,vr.jsx)("option",{value:"productivity",children:p("productivity")||"\u0627\u0644\u0625\u0646\u062a\u0627\u062c\u064a\u0629"}),(0,vr.jsx)("option",{value:"engineering",children:p("engineering")||"\u0627\u0644\u0647\u0646\u062f\u0633\u0629"})]})]}),(0,vr.jsxs)(Tu,{children:[(0,vr.jsx)(Lu,{children:p("price")||"\u0627\u0644\u0633\u0639\u0631"}),(0,vr.jsx)(zu,{type:"number",placeholder:"0.00"})]}),(0,vr.jsxs)(Tu,{children:[(0,vr.jsx)(Lu,{children:p("description")||"\u0627\u0644\u0648\u0635\u0641"}),(0,vr.jsx)(Du,{placeholder:p("enterDescription")||"\u0623\u062f\u062e\u0644 \u0648\u0635\u0641 \u0627\u0644\u0645\u0646\u062a\u062c"})]})]}),"user"===a&&(0,vr.jsxs)(vr.Fragment,{children:[(0,vr.jsxs)(Tu,{children:[(0,vr.jsx)(Lu,{children:p("name")||"\u0627\u0644\u0627\u0633\u0645"}),(0,vr.jsx)(zu,{type:"text",placeholder:p("enterName")||"\u0623\u062f\u062e\u0644 \u0627\u0644\u0627\u0633\u0645"})]}),(0,vr.jsxs)(Tu,{children:[(0,vr.jsx)(Lu,{children:p("email")||"\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a"}),(0,vr.jsx)(zu,{type:"email",placeholder:p("enterEmail")||"\u0623\u062f\u062e\u0644 \u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a"})]}),(0,vr.jsxs)(Tu,{children:[(0,vr.jsx)(Lu,{children:p("role")||"\u0627\u0644\u062f\u0648\u0631"}),(0,vr.jsxs)(Iu,{children:[(0,vr.jsx)("option",{value:"user",children:p("user")||"\u0645\u0633\u062a\u062e\u062f\u0645"}),(0,vr.jsx)("option",{value:"admin",children:p("admin")||"\u0645\u062f\u064a\u0631"})]})]})]}),(0,vr.jsxs)(Pu,{style:{marginTop:"1.5rem",justifyContent:"flex-end"},children:[(0,vr.jsx)(Ou,{onClick:()=>o(!1),children:p("cancel")||"\u0625\u0644\u063a\u0627\u0621"}),(0,vr.jsx)(Ou,{className:"primary",children:p("save")||"\u062d\u0641\u0638"})]})]})})]})]}):null};const Fu=function(){return(0,vr.jsx)(hr,{basename:"/Game-shop",children:(0,vr.jsx)(_r,{children:(0,vr.jsx)(br,{children:(0,vr.jsx)(Fa,{children:(0,vr.jsx)(Nr,{children:(0,vr.jsx)(Lr,{children:(0,vr.jsxs)(Da,{children:[(0,vr.jsx)(Ma,{}),(0,vr.jsxs)(dr,{children:[(0,vr.jsx)(cr,{path:"/",element:(0,vr.jsx)(Es,{})}),(0,vr.jsx)(cr,{path:"/store",element:(0,vr.jsx)(rc,{})}),(0,vr.jsx)(cr,{path:"/pc-builder",element:(0,vr.jsx)(Tc,{})}),(0,vr.jsx)(cr,{path:"/premium-software",element:(0,vr.jsx)(au,{})}),(0,vr.jsx)(cr,{path:"/admin",element:(0,vr.jsx)($u,{})})]})]})})})})})})})},Au=e=>{e&&e instanceof Function&&r.e(453).then(r.bind(r,453)).then(t=>{let{getCLS:r,getFID:n,getFCP:o,getLCP:a,getTTFB:i}=t;r(e),n(e),o(e),a(e),i(e)})},Mu=document.getElementById("root");(0,n.H)(Mu).render((0,vr.jsx)(e.StrictMode,{children:(0,vr.jsx)(Fu,{})})),Au()})()})();
//# sourceMappingURL=main.9423c685.js.map