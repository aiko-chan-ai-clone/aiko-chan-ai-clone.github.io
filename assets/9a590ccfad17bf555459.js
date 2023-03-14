(this.webpackJsonp=this.webpackJsonp||[]).push([[2],{6112:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e,t){switch(t.type){case u.ActionType.NAVIGATE_UP:return function(e,t){return o({},e,{focusedIndex:Math.max(0,e.focusedIndex-1)})}(e);case u.ActionType.NAVIGATE_DOWN:return function(e,t){return o({},e,{focusedIndex:Math.min(e.focusedIndex+1,e.itemCount-1)})}(e);case u.ActionType.NAVIGATE_START:return function(e,t){return o({},e,{focusedIndex:0})}(e);case u.ActionType.NAVIGATE_END:return function(e,t){return o({},e,{focusedIndex:e.itemCount-1})}(e);case r.UPDATE_ITEM_COUNT:return function(e,t){var n=t.itemCount;return o({},e,{itemCount:n,focusedIndex:Math.min(n-1,e.focusedIndex)})}(e,t);case r.SET_FOCUSED_INDEX:return function(e,t){var n=t.index;return o({},e,{focusedIndex:Math.max(0,Math.min(n,e.itemCount-1))})}(e,t);case u.ActionType.SELECT_FOCUSED_ITEM:return e;default:
console.warn("Listbox navigator was given an unhandled action "+t.type)}return e};t.ListActionType=void 0;var r,u=n(295);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}t.ListActionType=r;!function(e){e.UPDATE_ITEM_COUNT="UPDATE_ITEM_COUNT";e.SET_FOCUSED_INDEX="SET_FOCUSED_INDEX"}(r||(t.ListActionType=r={}))},6113:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e,t){switch(t.type){case u.ActionType.NAVIGATE_UP:return function(e,t){var n=c(e),r=a(e);if(null==r)return e;var u=(i(r,n)-1)%r.length;u<0&&(u=r.length-1);if(null==r[u])return e;var s=o({},e,{focusPath:[].concat(e.focusPath.slice(0,-1),[r[u].key])});return o({},s,{focusIndex:f(s)})}(e);case u.ActionType.NAVIGATE_DOWN:return function(e,t){var n=c(e),r=a(e);if(null==r)return e;var u=(i(r,n)+1)%r.length;if(null==r[u])return e
;var s=o({},e,{focusPath:[].concat(e.focusPath.slice(0,-1),[r[u].key])});return o({},s,{focusIndex:f(s)})}(e);case u.ActionType.NAVIGATE_IN:return function(e,t){var n,r=c(e),u=a(e);if(null==u)return e;var s=u[i(u,r)],l=null==s||null===(n=s.children)||void 0===n?void 0:n[0];if(null==l)return e;var d=o({},e,{focusPath:[].concat(e.focusPath,[l.key])});return o({},d,{focusIndex:f(d)})}(e);case u.ActionType.NAVIGATE_OUT:return function(e,t){if(e.focusPath.length<=1)return e;var n=o({},e,{focusPath:e.focusPath.slice(0,-1)});return o({},n,{focusIndex:f(n)})}(e);case r.UPDATE_ITEMS:return function(e,t){var n=t.items,r=o({},e,{items:n,focusPath:s(n,e.focusPath)});return o({},r,{focusIndex:f(r)})}(e,t);case r.SET_FOCUS_PATH:return function(e,t){var n=t.path,r=o({},e,{focusPath:s(e.items,n)});return o({},r,{focusIndex:f(r)})}(e,t);case u.ActionType.SELECT_FOCUSED_ITEM:return e;default:throw new Error("Menu navigator was given an unhandled action "+t.type)}return e};t.MenuActionType=void 0
;var r,u=n(295);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}t.MenuActionType=r;!function(e){e.UPDATE_ITEMS="UPDATE_ITEMS";e.SET_FOCUS_PATH="SET_FOCUS_PATH"}(r||(t.MenuActionType=r={}));function i(e,t){return e.findIndex((function(e){return t===e.key}))}function c(e){return e.focusPath[e.focusPath.length-1]}function a(e){for(var t=e.items,n=0;n<e.focusPath.length-1;n++){if(null==t)return;t=t[i(t,e.focusPath[n])].children}return t}function s(e,t){for(var n=e,r=[],u=0;u<t.length&&null!=n;u++){var o=t[u],c=i(n,o);if(c<0||c>=n.length){var a=n[0];null!=a&&r.push(a.key);break}r.push(o);n=n[c].children}return r}function f(e){var t=c(e),n=a(e);return null==n?-1:i(n,t)}},6270:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={ActionType:!0,useGridNavigator:!0,useListNavigator:!0,useMenuNavigator:!0,
useTreeNavigator:!0,Path:!0};Object.defineProperty(t,"ActionType",{enumerable:!0,get:function(){return u.ActionType}});Object.defineProperty(t,"useGridNavigator",{enumerable:!0,get:function(){return o.default}});Object.defineProperty(t,"useListNavigator",{enumerable:!0,get:function(){return i.default}});Object.defineProperty(t,"useMenuNavigator",{enumerable:!0,get:function(){return c.default}});Object.defineProperty(t,"useTreeNavigator",{enumerable:!0,get:function(){return a.default}});Object.defineProperty(t,"Path",{enumerable:!0,get:function(){return s.Path}});var u=n(295),o=l(n(6741));Object.keys(o).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(r,e)||e in t&&t[e]===o[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}}))}));var i=l(n(6743));Object.keys(i).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(r,e)||e in t&&t[e]===i[e]||Object.defineProperty(t,e,{enumerable:!0,
get:function(){return i[e]}}))}));var c=l(n(6745));Object.keys(c).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(r,e)||e in t&&t[e]===c[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return c[e]}}))}));var a=l(n(6746));Object.keys(a).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(r,e)||e in t&&t[e]===a[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return a[e]}}))}));var s=n(6113);function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}function l(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var r={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=u?Object.getOwnPropertyDescriptor(e,o):null
;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=e[o]}r.default=e;n&&n.set(e,r);return r}},6741:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){var t=e.navId,n=e.columnCounts,c=e.focusedX,a=void 0===c?0:c,d=e.focusedY,p=void 0===d?0:d,T=e.onSelect,y=e.prepareFocus,A=e.getNewFocusPosition,E=e.maintainFocusPosition,v=void 0===E||E,I=e.enabled,N=void 0===I||I,_=e.onDispatch,O=e.autoFocusElement,m=void 0===O||O,b=e.useVirtualFocus,g=void 0!==b&&b,P=r.useCallback((function(e,t){var n=(0,u.default)(e,t);null!=_&&_(e,n,t);return n}),[_]),h=r.useReducer(P,{focusedX:a,focusedY:p,columnCounts:n}),S=h[0],C=h[1],D=S.columnCounts,M=S.focusedX,x=S.focusedY,F=r.useState((function(){return(0,i.throttle)(C,16)}))[0];r.useEffect((function(){C({type:u.GridActionType.UPDATE_COLUMN_COUNTS,columnCounts:n})}),[n]);return function(e){
var t=e.navId,n=e.columnCounts,c=e.focusedX,a=e.focusedY,d=e.onSelect,p=e.prepareFocus,T=e.getNewFocusPosition,y=e.dispatch,A=e.maintainFocusPosition,E=e.enabled,v=e.autoFocusElement,I=e.useVirtualFocus,N=r.useRef();N.current=E;var _=l(f(t,c,a)),O=r.useState(!1),m=O[0],b=O[1],g=r.useState(!1),P=g[0],h=g[1],S=r.useState(!1),C=S[0],D=S[1],M=r.useState((function(){return new i.HandlerMemoizer((function(e){var t=e.split(",").map(Number),n=t[0],r=t[1];return function(){b(!0);y({type:u.GridActionType.SET_FOCUSED_POSITION,x:n,y:r})}}))}))[0];r.useEffect((function(){return function(){return M.clean()}}),[M]);var x=r.useCallback((function(e){if(!N.current||!v)return!1;e.focus()}),[v]),F=r.useCallback((function(e,n){var r=f(t,e,n);(null!=p?p(e,n,r):Promise.resolve()).then((function(){var e=l(r);if(null!=e){x(e);h(!1)}else requestAnimationFrame((function(){return h(!0)}))}))}),[t,p,x]),G=r.useCallback((function(e){void 0===e&&(e=!0);var n=null!=T?T(c,a):[c,a],r=n[0],o=n[1];if(r!==c||o!==a){y({
type:u.GridActionType.SET_FOCUSED_POSITION,x:r,y:o});if(!e){D(!0);return}}var i=l(f(t,r,o));if(null!=i){D(!0);x(i)}}),[y,c,a,T,t,x]),w=r.useState(!1),U=w[0],k=w[1];r.useEffect((function(){if(U&&m){k(!1);var e=l(f(t,c,a));if(null==e){b(!1);var n=l(f(t));null!=n&&x(n)}else x(e)}}),[t,U,m,x,c,a]);var j=r.useCallback((function(e){N.current&&null==e&&k(!0)}),[]);r.useEffect((function(){if(m&&P&&null!=_){x(_);h(!1)}}),[P,_]);r.useEffect((function(){if(m){C||F(c,a);D(!1)}}),[c,a]);var V=r.useCallback((function(e){if(N.current)if(I||!s.includes(e.key)||e.shiftKey||e.altKey||e.metaKey||e.ctrlKey||e.currentTarget!==e.target){var t,r=function(e){switch(e.key){case o.Keys.ENTER:return o.ActionType.SELECT_FOCUSED_ITEM;case o.Keys.UP:return o.ActionType.NAVIGATE_UP;case o.Keys.DOWN:return o.ActionType.NAVIGATE_DOWN;case o.Keys.RIGHT:return o.ActionType.NAVIGATE_RIGHT;case o.Keys.LEFT:return o.ActionType.NAVIGATE_LEFT;case o.Keys.HOME:
return e.ctrlKey?o.ActionType.NAVIGATE_START:o.ActionType.NAVIGATE_INLINE_START;case o.Keys.END:return e.ctrlKey?o.ActionType.NAVIGATE_END:o.ActionType.NAVIGATE_INLINE_END}return}(e);switch(r){case o.ActionType.NAVIGATE_UP:case o.ActionType.NAVIGATE_DOWN:case o.ActionType.NAVIGATE_RIGHT:case o.ActionType.NAVIGATE_LEFT:case o.ActionType.NAVIGATE_INLINE_START:case o.ActionType.NAVIGATE_INLINE_END:case o.ActionType.NAVIGATE_START:case o.ActionType.NAVIGATE_END:if(!(0===n.length||0===c&&0===a&&r===o.ActionType.NAVIGATE_LEFT)){e.preventDefault();e.stopPropagation()}y({type:r});return;case o.ActionType.SELECT_FOCUSED_ITEM:if(v&&!(t=_,(null==t?void 0:t.ownerDocument.activeElement)===t))return;if(e.repeat)return;e.preventDefault();e.stopPropagation();y({type:r});null!=d?d(c,a,e):null!=_&&_.click()}}else{e.preventDefault();e.stopPropagation();G()}}),[G,y,v,_,d,c,a]),L=r.useCallback((function(e){if(e.currentTarget!==e.target){if(!m){b(!0);D(!0)}return!1}if(m){G(!1);return!1}
A&&null!=_?F(c,a):G(!0)}),[m,A,_,G,F,c,a]),K=r.useCallback((function(e){if(e.target!==e.currentTarget){if(e.currentTarget.contains(e.relatedTarget))return!1;b(!1)}}),[]),R=r.useMemo((function(){return Math.max.apply(Math,n)}),[n]),W=r.useCallback((function(){return{role:"grid","aria-rowcount":n.length,"aria-colcount":R,tabIndex:m&&A?-1:0,"data-ref-id":t,onKeyDown:V,onFocus:L,onBlur:K}}),[n.length,R,m,A,t,V,L,K]),X=r.useCallback((function(e,n){var r={role:"gridcell","aria-rowindex":n+1,"aria-colindex":e+1,id:(0,i.makeGridId)(t,e,n),tabIndex:A&&e===c&&n===a?0:-1,onFocus:M.get(e+","+n)};e===c&&n===a&&(r.ref=j);return r}),[t,A,c,a,M,j]),Y=r.useCallback((function(e){return{role:"row","aria-rowindex":e+1}}),[]);return r.useMemo((function(){return{dispatch:y,getContainerProps:W,getItemProps:X,getRowProps:Y}}),[y,W,X,Y])}({navId:t,columnCounts:D,focusedX:M,focusedY:x,dispatch:F,onSelect:T,prepareFocus:y,getNewFocusPosition:A,maintainFocusPosition:v,enabled:N,autoFocusElement:m,
useVirtualFocus:g})};Object.defineProperty(t,"GridActionType",{enumerable:!0,get:function(){return u.GridActionType}});var r=a(n(0)),u=a(n(6742)),o=n(295),i=n(339);function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(c=function(e){return e?n:t})(e)}function a(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=c(t);if(n&&n.has(e))return n.get(e);var r={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=u?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=e[o]}r.default=e;n&&n.set(e,r);return r}var s=[o.Keys.TAB];function f(e,t,n){return null!=t&&null!=n?"#"+(0,i.makeGridId)(e,t,n):"[data-ref-id="+e+"]"}function l(e){return document.querySelector(e)}},6742:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0})
;t.default=function(e,t){switch(t.type){case u.ActionType.NAVIGATE_UP:return function(e,t){var n=i(0,e.focusedY-1);return o({},e,{focusedX:c(e.columnCounts[n]-1,e.focusedX),focusedY:n})}(e);case u.ActionType.NAVIGATE_DOWN:return function(e,t){var n=c(e.focusedY+1,e.columnCounts.length-1);return o({},e,{focusedX:c(e.columnCounts[n]-1,e.focusedX),focusedY:n})}(e);case u.ActionType.NAVIGATE_RIGHT:return function(e,t){var n=!(e.focusedY===e.columnCounts.length-1)&&e.focusedX+1===e.columnCounts[e.focusedY],r=n?0:c(e.focusedX+1,e.columnCounts[e.focusedY]-1),u=n?e.focusedY+1:e.focusedY;return o({},e,{focusedX:r,focusedY:u})}(e);case u.ActionType.NAVIGATE_LEFT:return function(e,t){var n=!(0===e.focusedY)&&0===e.focusedX,r=n?e.focusedY-1:e.focusedY,u=n?e.columnCounts[r]-1:i(0,e.focusedX-1);return o({},e,{focusedX:u,focusedY:r})}(e);case u.ActionType.NAVIGATE_INLINE_START:return function(e,t){return o({},e,{focusedX:0})}(e);case u.ActionType.NAVIGATE_INLINE_END:return function(e,t){
return o({},e,{focusedX:e.columnCounts[e.focusedY]-1})}(e);case u.ActionType.NAVIGATE_START:return function(e,t){return o({},e,{focusedX:0,focusedY:0})}(e);case u.ActionType.NAVIGATE_END:return function(e,t){var n=e.columnCounts.length-1;return o({},e,{focusedX:e.columnCounts[n]-1,focusedY:n})}(e);case r.UPDATE_COLUMN_COUNTS:return function(e,t){var n=t.columnCounts,r=c(i(0,n.length-1),e.focusedY);return o({},e,{columnCounts:n,focusedX:c(null==n[r]?0:n[r]-1,e.focusedX),focusedY:r})}(e,t);case r.SET_FOCUSED_POSITION:return function(e,t){var n=t.x,r=i(0,c(t.y,e.columnCounts.length-1));return o({},e,{focusedX:i(0,c(n,e.columnCounts[r]-1)),focusedY:r})}(e,t);case u.ActionType.SELECT_FOCUSED_ITEM:return e;default:console.warn("Grid navigator was given an unhandled action "+t.type)}return e};t.GridActionType=void 0;var r,u=n(295);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
;for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}t.GridActionType=r;!function(e){e.UPDATE_COLUMN_COUNTS="UPDATE_COLUMN_COUNTS";e.SET_FOCUSED_POSITION="SET_FOCUSED_POSITION"}(r||(t.GridActionType=r={}));function i(e,t){return Number.isNaN(e)?t:Number.isNaN(t)?e:Math.max(e,t)}function c(e,t){return Number.isNaN(e)?t:Number.isNaN(t)?e:Math.min(e,t)}},6743:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.useSparseListNavigator=function(e){var t=e.navId,n=e.items,u=e.focusedIndex,i=void 0===u?0:u,a=e.onSelect,s=e.setFocus,f=e.getNewFocusIndex,l=e.maintainFocusPosition,d=void 0===l||l,p=e.includeSetSizes,y=void 0===p||p,A=e.focusOnMount,E=void 0===A||A,v=e.enabled,I=void 0===v||v,N=e.onDispatch,_=e.makeId,O=e.getIndexFromId,m=r.useCallback((function(e,t){var n=(0,o.default)(e,t);null!=N&&N(e,n,t);return n}),[N]),b=r.useReducer(m,{focusedIndex:i,itemCount:n.length,items:n
}),g=b[0],P=b[1],h=g.itemCount,S=g.focusedIndex,C=r.useState((function(){return(0,c.throttle)(P,16)}))[0];r.useEffect((function(){P({type:o.SparseListActionType.UPDATE_ITEMS,items:n})}),[n]);return T({navId:t,itemCount:h,focusedIndex:S,dispatch:C,onSelect:a,setFocus:s,getNewFocusIndex:f,maintainFocusPosition:d,includeSetSizes:y,focusOnMount:E,enabled:I,makeId:_,getIndexFromId:O})};t.default=function(e){var t=e.navId,n=e.itemCount,o=e.focusedIndex,i=void 0===o?0:o,a=e.onSelect,s=e.setFocus,f=e.getNewFocusIndex,l=e.maintainFocusPosition,d=void 0===l||l,p=e.includeSetSizes,y=void 0===p||p,A=e.focusOnMount,E=void 0===A||A,v=e.enabled,I=void 0===v||v,N=e.onDispatch,_=r.useCallback((function(e,t){var n=(0,u.default)(e,t);null!=N&&N(e,n,t);return n}),[N]),O=r.useReducer(_,{focusedIndex:i,itemCount:n}),m=O[0],b=O[1],g=m.itemCount,P=m.focusedIndex,h=r.useState((function(){return(0,c.throttle)(b,16)}))[0];r.useEffect((function(){b({type:u.ListActionType.UPDATE_ITEM_COUNT,itemCount:n})}),[n])
;return T({navId:t,itemCount:g,focusedIndex:P,dispatch:h,onSelect:a,setFocus:s,getNewFocusIndex:f,maintainFocusPosition:d,includeSetSizes:y,focusOnMount:E,enabled:I})};Object.defineProperty(t,"ListAction",{enumerable:!0,get:function(){return u.ListAction}});Object.defineProperty(t,"ListActionType",{enumerable:!0,get:function(){return u.ListActionType}});Object.defineProperty(t,"SparseListAction",{enumerable:!0,get:function(){return o.SparseListAction}});Object.defineProperty(t,"SparseListState",{enumerable:!0,get:function(){return o.SparseListState}});var r=s(n(0)),u=s(n(6112)),o=s(n(6744)),i=n(295),c=n(339);function a(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(a=function(e){return e?n:t})(e)}function s(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=a(t);if(n&&n.has(e))return n.get(e);var r={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor
;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=u?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=e[o]}r.default=e;n&&n.set(e,r);return r}var f=[i.Keys.TAB,i.Keys.UP,i.Keys.DOWN];function l(e,t,n){return null!=n?"#"+e(t,n):"#"+t}function d(e){return document.querySelector(e)}function p(e){var t;null===(t=document.getElementById(e))||void 0===t||t.focus()}function T(e){var t=e.navId,n=e.itemCount,o=e.focusedIndex,a=e.onSelect,s=e.setFocus,T=void 0===s?p:s,y=e.getNewFocusIndex,A=e.dispatch,E=e.maintainFocusPosition,v=e.includeSetSizes,I=e.focusOnMount,N=e.enabled,_=e.makeId,O=void 0===_?c.makeId:_,m=e.getIndexFromId,b=r.useRef(n),g=r.useRef(m);g.current=m;b.current=n;var P=r.useRef();r.useEffect((function(){P.current=N}),[N]);var h=r.useState(!1),S=h[0],C=h[1],D=r.useState((function(){return new c.HandlerMemoizer((function(e){return function(){var t=null!=g.current&&"string"==typeof e?g.current(e):e
;"number"!=typeof t||t<0||A({type:u.ListActionType.SET_FOCUSED_INDEX,index:t})}}))}))[0];r.useEffect((function(){return function(){return D.clean()}}),[D]);var M=r.useCallback((function(e,t){P.current&&T(e,t)}),[T]),x=r.useState(!0),F=x[0],G=x[1];r.useEffect((function(){!F||I?M(O(t,o),o):G(!1)}),[o]);var w=r.useCallback((function(e){void 0===e&&(e=!0);var n=null!=y?y(o):o;n!==o&&A({type:u.ListActionType.SET_FOCUSED_INDEX,index:n});e&&M(O(t,n),n)}),[O,o,y,A,t,M]),U=r.useCallback((function(e){if(P.current)if(!f.includes(e.key)||e.shiftKey||e.altKey||e.metaKey||e.ctrlKey||e.currentTarget!==e.target){var n,r=function(e){switch(e.key){case i.Keys.ENTER:case i.Keys.SPACE:return i.ActionType.SELECT_FOCUSED_ITEM;case i.Keys.UP:return i.ActionType.NAVIGATE_UP;case i.Keys.DOWN:return i.ActionType.NAVIGATE_DOWN;case i.Keys.HOME:return i.ActionType.NAVIGATE_START;case i.Keys.END:return i.ActionType.NAVIGATE_END}}(e);switch(r){case i.ActionType.NAVIGATE_UP:case i.ActionType.NAVIGATE_DOWN:
case i.ActionType.NAVIGATE_START:case i.ActionType.NAVIGATE_END:e.preventDefault();e.stopPropagation();A({type:r});return;case i.ActionType.SELECT_FOCUSED_ITEM:var u=d(l(O,t,o));if(!(n=u,(null==n?void 0:n.ownerDocument.activeElement)===n))return;if(e.repeat)return;e.preventDefault();e.stopPropagation();A({type:r});if(null!=a){a(o);return}null==u||u.click()}}else{e.preventDefault();e.stopPropagation();w()}}),[O,t,A,o,w,a]),k=r.useCallback((function(){!S&&C(!0)}),[S]),j=r.useCallback((function(){S||(E?M(O(t,o),o):w(!0))}),[O,t,M,E,S,o,w]),V=r.useCallback((function(e){e.currentTarget.contains(e.relatedTarget)||requestAnimationFrame((function(){null!=d(l(O,t,o))?C(!1):M(t)}))}),[O,t,o,M]),L=r.useRef(null);r.useLayoutEffect((function(){var e=L.current;if(null!=e){e.addEventListener("focusin",k);e.addEventListener("focus",j);e.addEventListener("focusout",V);return function(){e.removeEventListener("focusin",k);e.removeEventListener("focus",j);e.removeEventListener("focusout",V)}}}),[j,k,V])
;var K=r.useCallback((function(){return{role:"list",tabIndex:S&&E?-1:0,id:t,onKeyDown:U,ref:L}}),[t,S,U,E]),R=r.useCallback((function(e){var n=e.index;return{role:"listitem","aria-setsize":v?b.current:void 0,"aria-posinset":v?n+1:void 0,id:O(t,n),tabIndex:E&&n===o?0:-1,onFocus:D.get(null!=g.current?O(t,n):n)}}),[O,t,o,E,D,v]);return r.useMemo((function(){return{dispatch:A,getContainerProps:K,getItemProps:R}}),[A,K,R])}},6744:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e,t){switch(t.type){case o.ActionType.NAVIGATE_UP:return function(e,t){for(var n=e.items,r=e.focusedIndex,u=-1,o=r-1;o>0;o--)if(void 0!==n[o]){u=o;break}return i({},e,{focusedIndex:Math.max(0,u)})}(e);case o.ActionType.NAVIGATE_DOWN:return function(e,t){for(var n=e.items,r=e.itemCount,u=e.focusedIndex,o=1/0,c=u+1;c<r-1;c++)if(void 0!==n[c]){o=c;break}return i({},e,{focusedIndex:Math.min(o,r-1)})}(e);case o.ActionType.NAVIGATE_START:return function(e,t){
for(var n=e.items,r=e.itemCount,u=0,o=0;o<r;o++)if(void 0!==n[o]){u=o;break}return i({},e,{focusedIndex:u})}(e);case o.ActionType.NAVIGATE_END:return function(e,t){for(var n=e.items,r=e.itemCount,u=r,o=r-1;o>0;o--)if(void 0!==n[o]){u=o;break}return i({},e,{focusedIndex:u})}(e);case r.UPDATE_ITEMS:return function(e,t){var n=t.items,r=n.length,u=e.items[e.focusedIndex],o=n.indexOf(u);return i({},e,{itemCount:r,items:n,focusedIndex:-1===o?Math.min(e.focusedIndex,r):o})}(e,t);case u.ListActionType.SET_FOCUSED_INDEX:return function(e,t){var n=t.index;return i({},e,{focusedIndex:Math.max(0,Math.min(n,e.itemCount-1))})}(e,t);case o.ActionType.SELECT_FOCUSED_ITEM:return e;default:console.warn("SparseListReducer was given an unhandled action "+t.type)}return e};t.SparseListActionType=void 0;var r,u=n(6112),o=n(295);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e
}).apply(this,arguments)}t.SparseListActionType=r;!function(e){e.UPDATE_ITEMS="UPDATE_ITEMS"}(r||(t.SparseListActionType=r={}))},6745:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){var t=e.navId,n=e.items,c=e.initialFocusPath,a=e.onSelect,s=e.enabled,f=void 0===s||s,l=e.closeMenu,d=r.useRef(f);r.useLayoutEffect((function(){d.current=f}),[f]);var p=r.useReducer(u.default,{items:n,focusPath:c,focusIndex:-1}),T=p[0],y=p[1],A=r.useMemo((function(){return(0,i.throttle)(y,30)}),[y]);r.useEffect((function(){y({type:u.MenuActionType.UPDATE_ITEMS,items:n})}),[n]);var E=T.focusPath,v=r.useState(!1),I=v[0],N=v[1],_=r.useState(!1),O=_[0],m=_[1],b=r.useState((function(){return{onItemFocusMemoizer:new i.HandlerMemoizer((function(e){return function(){N(!0);y({type:u.MenuActionType.SET_FOCUS_PATH,path:e.split("--")})}})),onItemMouseEnterMemoizer:new i.HandlerMemoizer((function(e){return function(){m(!1);y({type:u.MenuActionType.SET_FOCUS_PATH,
path:e.split("--")})}}))}}))[0],g=b.onItemFocusMemoizer,P=b.onItemMouseEnterMemoizer,h=r.useCallback((function(e){var n;if(d.current){if(e.key===o.Keys.ESCAPE&&null!=l){e.stopPropagation();e.preventDefault();l()}var r,u,c=function(e){switch(e.key){case o.Keys.ENTER:case o.Keys.SPACE:return o.ActionType.SELECT_FOCUSED_ITEM;case o.Keys.UP:return o.ActionType.NAVIGATE_UP;case o.Keys.DOWN:return o.ActionType.NAVIGATE_DOWN;case o.Keys.RIGHT:return o.ActionType.NAVIGATE_IN;case o.Keys.LEFT:return o.ActionType.NAVIGATE_OUT}return}(e);switch(c){case o.ActionType.NAVIGATE_UP:case o.ActionType.NAVIGATE_DOWN:case o.ActionType.NAVIGATE_IN:case o.ActionType.NAVIGATE_OUT:e.preventDefault();e.stopPropagation();m(!0);A({type:c});return;case o.ActionType.SELECT_FOCUSED_ITEM:if(e.repeat)return;if(e.target.tabIndex>=0)return;e.preventDefault();e.stopPropagation();m(!1);A({type:c});if(null!=a){a(E);return}var s=null!==(n=e.target.ownerDocument)&&void 0!==n?n:document,f=(r=s,u=function(e,t){
return null!=t?""+(0,i.makeId)(e,t.join("--")):e}(t,E),r.getElementById(u));null==f||f.click()}}}),[A,t,E,a]),S=r.useCallback((function(){I||N(!0)}),[I]),C=r.useCallback((function(e){if(e.target!==e.currentTarget){if(e.currentTarget.contains(e.relatedTarget))return;I&&N(!1)}}),[I]),D=r.useCallback((function(){y({type:u.MenuActionType.SET_FOCUS_PATH,path:[]});N(!1)}),[]),M=r.useCallback((function(e){return e.every((function(e,t){return E[t]===e}))}),[E]),x=r.useCallback((function(){return{role:"menu",id:t,tabIndex:-1,onKeyDown:h,onFocus:S,onBlur:C,onMouseLeave:D,"aria-activedescendant":E.length>0?(0,i.makeId)(t,E.join("--")):void 0}}),[t,h,S,C,D,E]),F=r.useCallback((function(e){var n=e.path;return{role:"menu",tabIndex:-1,"aria-activedescendant":M(n)?(0,i.makeId)(t,E.join("--")):void 0,focusIndex:T.focusIndex,isUsingKeyboardNavigation:O}}),[t,E,M,T.focusIndex,O]),G=r.useCallback((function(e){var n=e.path,r=e.role,u=void 0===r?"menuitem":r,o=n.join("--");return{role:u,id:(0,
i.makeId)(t,o),tabIndex:-1,onFocus:g.get(o),onMouseEnter:P.get(o)}}),[t,g,P]);return r.useMemo((function(){return{dispatch:A,getContainerProps:x,getSubmenuProps:F,getItemProps:G,isFocused:M}}),[A,x,F,G,M])};Object.defineProperty(t,"MenuActionType",{enumerable:!0,get:function(){return u.MenuActionType}});Object.defineProperty(t,"MenuItem",{enumerable:!0,get:function(){return u.MenuItem}});var r=a(n(0)),u=a(n(6113)),o=n(295),i=n(339);function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(c=function(e){return e?n:t})(e)}function a(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=c(t);if(n&&n.has(e))return n.get(e);var r={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=u?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=e[o]}r.default=e;n&&n.set(e,r)
;return r}},6746:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){var t=e.nodes,n=e.rootIds,c=e.navId,a=e.enabled,l=void 0===a||a,d=e.onSelect,p=r.useReducer(u.default,void 0,(function(){return(0,u.treeReducerInitializer)(t,n)})),T=p[0],y=p[1],A=r.useState((function(){return(0,i.throttle)(y,16)}))[0],E=r.useState((function(){return new u.TreeNavigatorStore(T)}))[0];E._updateState(T);var v=r.useState(!1),I=v[0],N=v[1],_=r.useState(!1),O=_[0],m=_[1],b=r.useRef();b.current=l;var g=E.getFocusedIndex(),P=E.getFocusedNode(),h=f(s(c,g)),S=r.useState((function(){return new i.HandlerMemoizer((function(e){return function(){m(!0);A({type:u.TreeActionType.SET_FOCUSED_NODE,nodeId:e})}}))}))[0];r.useEffect((function(){return function(){return S.clean()}}),[S]);var C=r.useCallback((function(e){if(!b.current)return!1;e.ownerDocument.activeElement!==e&&e.focus()}),[]);r.useEffect((function(){A({type:u.TreeActionType.UPDATE_NODES,newNodes:t,rootIds:n})
}),[t,n,A]);r.useEffect((function(){if(O)if(I)N(!1);else{var e=f(s(c,g));null!=e&&C(e)}}),[g]);var D=r.useCallback((function(e){if(b.current){var t,n=function(e){switch(e.key){case o.Keys.ENTER:case o.Keys.SPACE:return o.ActionType.SELECT_FOCUSED_ITEM;case o.Keys.UP:return o.ActionType.NAVIGATE_UP;case o.Keys.DOWN:return o.ActionType.NAVIGATE_DOWN;case o.Keys.LEFT:return o.ActionType.NAVIGATE_LEFT;case o.Keys.RIGHT:return o.ActionType.NAVIGATE_RIGHT;case o.Keys.HOME:return o.ActionType.NAVIGATE_START;case o.Keys.END:return o.ActionType.NAVIGATE_END}return}(e);switch(n){case o.ActionType.NAVIGATE_UP:case o.ActionType.NAVIGATE_DOWN:case o.ActionType.NAVIGATE_LEFT:case o.ActionType.NAVIGATE_RIGHT:case o.ActionType.NAVIGATE_START:case o.ActionType.NAVIGATE_END:e.preventDefault();e.stopPropagation();A({type:n});return;case o.ActionType.SELECT_FOCUSED_ITEM:if(!(t=h,(null==t?void 0:t.ownerDocument.activeElement)===t))return;if(e.repeat)return;e.preventDefault();e.stopPropagation();A({type:n})
;null!=d?null!=P&&d(P):null!=h&&h.click()}}}),[A,P,h,d]),M=r.useCallback((function(){if(!O){m(!0);N(!0)}}),[O]),x=r.useCallback((function(e){if(e.target!==e.currentTarget){if(e.currentTarget.contains(e.relatedTarget))return!1;O&&m(!1)}}),[O]),F=r.useCallback((function(){return{role:"tree","data-ref-id":c,tabIndex:-1,onKeyDown:D,onFocus:M,onBlur:x}}),[D,x,M,c]),G=r.useCallback((function(e){var t,n=e.id,r=E.getNode(n),u=null!==(t=E.getVisibleNodeIndex(n))&&void 0!==t?t:-1,o=null!=r&&r.children.length>0,a={role:"treeitem",tabIndex:u===g?0:-1,"aria-setsize":E.getVisibleNodeCount(),"aria-posinset":u+1,"data-ref-id":(0,i.makeId)(c,u),onFocus:S.get(n)};o&&(a["aria-expanded"]=null!=r&&r.expanded);return a}),[c,g,E,S]);return{store:E,dispatch:A,getContainerProps:F,getItemProps:G}};Object.defineProperty(t,"TreeActionType",{enumerable:!0,get:function(){return u.TreeActionType}});Object.defineProperty(t,"TreeNode",{enumerable:!0,get:function(){return u.TreeNode}})
;var r=a(n(0)),u=a(n(6747)),o=n(295),i=n(339);function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(c=function(e){return e?n:t})(e)}function a(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=c(t);if(n&&n.has(e))return n.get(e);var r={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=u?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=e[o]}r.default=e;n&&n.set(e,r);return r}function s(e,t){return null!=t?"[data-ref-id="+(0,i.makeId)(e,t)+"]":"[data-ref-id="+e+"]"}function f(e){return document.querySelector(e)}},6747:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e,t){switch(t.type){case u.ActionType.NAVIGATE_UP:return function(e,t){return i({},e,{focusedIndex:Math.max(0,e.focusedIndex-1)})}(e)
;case u.ActionType.NAVIGATE_DOWN:return function(e,t){return i({},e,{focusedIndex:Math.min(e.visibleNodeList.length-1,e.focusedIndex+1)})}(e);case u.ActionType.NAVIGATE_START:return function(e,t){return i({},e,{focusedIndex:0})}(e);case u.ActionType.NAVIGATE_END:return function(e,t){return i({},e,{focusedIndex:Math.max(0,e.visibleNodeList.length-1)})}(e);case u.ActionType.NAVIGATE_LEFT:return function(e,t){var n=a(e);if(null==n)return e;if(n.expanded)return f(e,n.id,i({},n,{expanded:!1}));if(null!=n.parent){var r,u=null!==(r=s(e,n.parent))&&void 0!==r?r:0;return i({},e,{focusedIndex:u})}return e}(e);case u.ActionType.NAVIGATE_RIGHT:return function(e,t){var n=a(e);if(null==n)return e;var r=n.children.length>0;if(r&&!n.expanded)return f(e,n.id,i({},n,{expanded:!0}));if(r&&n.expanded){var u,o=null!==(u=s(e,n.children[0]))&&void 0!==u?u:0;return i({},e,{focusedIndex:o})}return e}(e);case r.UPDATE_NODE:return function(e,t){var n=t.node;return f(e,n.id,n)}(e,t);case r.UPDATE_NODES:
return function(e,t){var n=t.newNodes,r=t.rootIds;return function(e,t,n){var r,u=a(e),o=i({},e,{nodes:t,rootIds:n});o.visibleNodeList=l(o);return i({},o,{focusedIndex:null!=u&&null!==(r=s(o,u.id))&&void 0!==r?r:0})}(e,n,r)}(e,t);case r.REMOVE_NODE:return function(e,t){var n=t.node,r=e.nodes,u=n.id,c=(r[u],function(e,t){if(null==e)return{};var n,r,u={},o=Object.keys(e);for(r=0;r<o.length;r++){n=o[r];t.indexOf(n)>=0||(u[n]=e[n])}return u}(r,[u].map(o)));return i({},e,{nodes:c,visibleNodeList:l(e),focusedIndex:Math.min(e.visibleNodeList.length-1,e.focusedIndex)})}(e,t);case r.SET_FOCUSED_NODE:return function(e,t){var n,r=t.nodeId,u=null!==(n=s(e,r))&&void 0!==n?n:0;return i({},e,{focusedIndex:u})}(e,t);case u.ActionType.SELECT_FOCUSED_ITEM:return e;default:console.warn("Tree navigator was given an unhandled action "+t.type)}return e};t.treeReducerInitializer=function(e,t){var n={nodes:e,rootIds:t,visibleNodeList:[],focusedIndex:0};n.visibleNodeList=l(n);return n}
;t.TreeNavigatorStore=t.TreeActionType=void 0;var r,u=n(295);function o(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}t.TreeActionType=r;!function(e){e.UPDATE_NODE="UPDATE_NODE";e.UPDATE_NODES="UPDATE_NODES";e.REMOVE_NODE="REMOVE_NODE";e.SET_FOCUSED_NODE="SET_FOCUSED_NODE"}(r||(t.TreeActionType=r={}));function c(e,t){return e.nodes[t]}function a(e){return c(e,e.visibleNodeList[e.focusedIndex])}function s(e,t){if(null!=t){var n=e.visibleNodeList.indexOf(t);return-1===n?void 0:n}}function f(e,t,n){
var r,u,o=a(e),c=i({},e,{nodes:i({},e.nodes,(r={},r[t]=n,r))});c.visibleNodeList=l(c);return i({},c,{focusedIndex:null!=o&&null!==(u=s(c,o.id))&&void 0!==u?u:0})}function l(e){var t=[];e.rootIds.forEach((function(n){Array.prototype.push.apply(t,function e(t,n){if(null==n)return[];var r=c(t,n);if(null==r)return[];if(!r.expanded||0===r.children.length)return[n];var u=[n];r.children.forEach((function(n){var r=e(t,n);Array.prototype.push.apply(u,r)}));return u}(e,n))}));return t}var d=function(){function e(e){this.state=e}var t=e.prototype;t._updateState=function(e){this.state=e};t.getNodes=function(){return this.state.nodes};t.getNode=function(e){return c(this.state,e)};t.getVisibleNodeIndex=function(e){return s(this.state,e)};t.getVisibleNodeCount=function(){return this.state.visibleNodeList.length};t.getFocusedIndex=function(){return this.state.focusedIndex};t.getFocusedNode=function(){return a(this.state)};t.isHighlighted=function(e){var t=this.getFocusedNode();return null!=t&&t.id===e
};return e}();t.TreeNavigatorStore=d}}]);
//# sourceMappingURL=9a590ccfad17bf555459.js.map