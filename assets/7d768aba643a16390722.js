(this.webpackJsonp=this.webpackJsonp||[]).push([[16],{6085:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.getSelectionText=d;t.contextMenuCallbackNative=function(e){var t=d();if("TEXTAREA"===e.target.tagName||"INPUT"===e.target.tagName){if("checkbox"!==e.target.type)return(0,o.openContextMenu)(e,(function(e){return r.createElement(u.default,s({},e,{text:t}))}),{enableSpellCheck:!0})}else{if("none"===window.getComputedStyle(e.target).getPropertyValue("-webkit-user-select")){e.preventDefault();return}var n,f,c,p=e.target;do{null!=p.src&&(f=p.src);if(null!=p.href){n=p.href;c=p.textContent}p=p.parentNode}while(null!=p);if(null!=f)return(0,o.openContextMenu)(e,(function(e){return r.createElement(l.default,s({},e,{src:f}))}));if(null!=n)return(0,o.openContextMenu)(e,(function(e){return r.createElement(a.default,s({},e,{href:n,textContent:c}))}));if(t)return(0,o.openContextMenu)(e,(function(e){return r.createElement(i.default,s({},e,{text:t}))}))}
e.preventDefault();return null};t.contextMenuCallbackWeb=function(e){var t=!1;if("INPUT"===e.target.tagName||"TEXTAREA"===e.target.tagName)t=!0;else if(null!=e.target.closest&&null!=e.target.closest("[contenteditable=true]"))t=!0;else if(d())t=!0;else{var n,r,o=e.target;do{null!=o.src&&(n=o.src);null!=o.href&&(r=o.href);o=o.parentNode}while(null!=o);null==r&&null==n||(t=!0)}t||e.preventDefault()};var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=c(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var l=o?Object.getOwnPropertyDescriptor(e,u):null;l&&(l.get||l.set)?Object.defineProperty(r,u,l):r[u]=e[u]}r.default=e;n&&n.set(e,r);return r}(n(0)),o=n(254),u=f(n(9330)),l=f(n(9520)),a=f(n(9521)),i=f(n(9522));function f(e){return e&&e.__esModule?e:{default:e}}function c(e){
if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(c=function(e){return e?n:t})(e)}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function d(){var e="";window.getSelection?e=window.getSelection().toString():document.selection&&"Control"!==document.selection.type&&(e=document.selection.createRange().text);return e}},9179:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e,t){var n,r=null!==(n=a.default.getLastSelectedChannelId())&&void 0!==n?n:null;if(!c.default.embedded||null==e||""===e)return null;if(null!=e&&(0,l.isStickerAssetUrl)(e))return null;if(null!=e&&(0,u.isRoleIconAssetUrl)(e))return null;return[b(o.MenuItem,{id:"copy-native-link",label:p.default.Messages.COPY_LINK,action:function(){i.default.track(d.AnalyticEvents.CONTEXT_MENU_LINK_COPIED,{
href:e,channel_id:r});s.default.copy(e)}},"copy-native-link"),b(o.MenuItem,{id:"open-native-link",label:p.default.Messages.OPEN_LINK,action:function(n){return function(n){i.default.track(d.AnalyticEvents.CONTEXT_MENU_LINK_OPENED,{href:e,channel_id:r});(0,f.handleClick)({href:e,trusted:(0,f.isLinkTrusted)(e,t),shouldConfirm:!0},n)}(n)}},"open-native-link")]};!function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=y(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var l=o?Object.getOwnPropertyDescriptor(e,u):null;l&&(l.get||l.set)?Object.defineProperty(r,u,l):r[u]=e[u]}r.default=e;n&&n.set(e,r)}(n(0));var r,o=n(174),u=n(6300),l=n(340),a=v(n(33)),i=v(n(15)),f=n(585),c=v(n(19)),s=v(n(48)),d=n(1),p=v(n(4));function v(e){return e&&e.__esModule?e:{default:e}}function y(e){
if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(y=function(e){return e?n:t})(e)}function b(e,t,n,o){r||(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var u=e&&e.defaultProps,l=arguments.length-3;t||0===l||(t={children:void 0});if(1===l)t.children=o;else if(l>1){for(var a=new Array(l),i=0;i<l;i++)a[i]=arguments[i+3];t.children=a}if(t&&u)for(var f in u)void 0===t[f]&&(t[f]=u[f]);else t||(t=u||{});return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}},9250:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){return u.default.embedded&&null!=e&&0!==(null==e?void 0:e.length)?[f(o.MenuItem,{id:"search-google",label:l.default.Messages.SEARCH_WITH_GOOGLE,action:function(){return window.open("https://www.google.com/search?q="+encodeURIComponent(e),"_blank")}})]:null};!function(e,t){if(!t&&e&&e.__esModule)return e
;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=i(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var l=o?Object.getOwnPropertyDescriptor(e,u):null;l&&(l.get||l.set)?Object.defineProperty(r,u,l):r[u]=e[u]}r.default=e;n&&n.set(e,r)}(n(0));var r,o=n(174),u=a(n(19)),l=a(n(4));function a(e){return e&&e.__esModule?e:{default:e}}function i(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(i=function(e){return e?n:t})(e)}function f(e,t,n,o){r||(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var u=e&&e.defaultProps,l=arguments.length-3;t||0===l||(t={children:void 0});if(1===l)t.children=o;else if(l>1){for(var a=new Array(l),i=0;i<l;i++)a[i]=arguments[i+3];t.children=a}if(t&&u)for(var f in u)void 0===t[f]&&(t[f]=u[f]);else t||(t=u||{});return{$$typeof:r,type:e,
key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}},9281:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0;var r=u(n(3)),o=u(n(2));n(1);function u(e){return e&&e.__esModule?e:{default:e}}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1;r.configurable=!0;"value"in r&&(r.writable=!0);Object.defineProperty(e,r.key,r)}}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e})(e,t)}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var f={expressionSuggestionsEnabled:!0},c=function(e){!function(e,t){e.prototype=Object.create(t.prototype);e.prototype.constructor=e;a(e,t)}(t,e);function t(){return e.apply(this,arguments)||this}var n=t.prototype;n.initialize=function(e){null!=e&&(f=e)};n.getState=function(){return f}
;!function(e,t,n){t&&l(e.prototype,t);n&&l(e,n)}(t,[{key:"expressionSuggestionsEnabled",get:function(){return f.expressionSuggestionsEnabled}}]);return t}(r.default.PersistedStore);c.persistKey="ExpressionSuggestionsPersistedStore";var s=new c(o.default,{EXPRESSION_SUGGESTIONS_TOGGLE:function(e){f=i({},f,{expressionSuggestionsEnabled:!f.expressionSuggestionsEnabled})}});t.default=s},9328:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0;var r=a(n(3)),o=a(n(30)),u=a(n(2)),l=n(1333);n(1);function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e})(e,t)}var f=!0,c=new Set;function s(){o.default.set("SpellcheckStore",{enabled:f,learnedWords:c})}var d=new(function(e){!function(e,t){e.prototype=Object.create(t.prototype);e.prototype.constructor=e;i(e,t)}(t,e);function t(){return e.apply(this,arguments)||this}var n=t.prototype;n.initialize=function(){
var e=o.default.get("SpellcheckStore");if(null!=e){f=e.enabled;c=new Set(e.learnedWords);(0,l.setEnabled)(f);(0,l.setLearnedWords)(c)}};n.isEnabled=function(){return f};return t}(r.default.Store))(u.default,{SPELLCHECK_TOGGLE:function(e){return function(){f=!f;(0,l.setEnabled)(f);s()}()},SPELLCHECK_LEARN_WORD:function(e){var t=e.word;c.add(t.toLocaleLowerCase());(0,l.setLearnedWords)(c);s()},I18N_LOAD_SUCCESS:function(e){var t=e.locale;(0,l.setAppLocale)(t)}});t.default=d},9330:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=b;var r,o=v(n(0)),u=n(254),l=v(n(174)),a=d(n(9331)),i=d(n(9332)),f=d(n(19)),c=d(n(48)),s=d(n(4));function d(e){return e&&e.__esModule?e:{default:e}}function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(p=function(e){return e?n:t})(e)}function v(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=p(t)
;if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var l=o?Object.getOwnPropertyDescriptor(e,u):null;l&&(l.get||l.set)?Object.defineProperty(r,u,l):r[u]=e[u]}r.default=e;n&&n.set(e,r);return r}function y(e,t,n,o){r||(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var u=e&&e.defaultProps,l=arguments.length-3;t||0===l||(t={children:void 0});if(1===l)t.children=o;else if(l>1){for(var a=new Array(l),i=0;i<l;i++)a[i]=arguments[i+3];t.children=a}if(t&&u)for(var f in u)void 0===t[f]&&(t[f]=u[f]);else t||(t=u||{});return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function b(e){var t=e.text,n=e.target,r=e.onHeightUpdate,d=e.onSelect,p=o.useCallback((function(){(0,u.closeContextMenu)();if(n instanceof HTMLElement){n.focus();setTimeout((function(){return n.focus()}),0)}}),[n]),v=(0,i.default)({text:t,target:n,
onHeightUpdate:r}),b=v[0],g=v[1],_=(0,a.default)();if(!f.default.embedded)return null;if(!(n instanceof HTMLInputElement||n instanceof HTMLTextAreaElement))return null;var M=""!==t?[y(l.MenuItem,{id:"copy",label:s.default.Messages.COPY,hint:f.default.isOSX()?"⌘C":"Ctrl+C",action:function(){return c.default.copy(t)}}),y(l.MenuItem,{id:"cut",label:s.default.Messages.CUT,hint:f.default.isOSX()?"⌘X":"Ctrl+X",action:function(){return setTimeout((function(){return c.default.cut()}),0)}})]:null;return y(l.default,{navId:"textarea-context",onClose:p,"aria-label":s.default.Messages.TEXTAREA_ACTIONS_MENU_LABEL,onSelect:d},void 0,y(l.MenuGroup,{},void 0,_),y(l.MenuGroup,{},void 0,b),y(l.MenuGroup,{},void 0,g),y(l.MenuGroup,{},void 0,M,y(l.MenuItem,{id:"paste",label:s.default.Messages.PASTE,hint:f.default.isOSX()?"⌘V":"Ctrl+V",action:function(){return setTimeout((function(){return c.default.paste()}),0)}})))}b.displayName="NativeTextAreaContextMenu"},9331:function(e,t,n){"use strict"
;Object.defineProperty(t,"__esModule",{value:!0});t.default=v;!function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=d(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var l=o?Object.getOwnPropertyDescriptor(e,u):null;l&&(l.get||l.set)?Object.defineProperty(r,u,l):r[u]=e[u]}r.default=e;n&&n.set(e,r)}(n(0));var r,o=n(3),u=n(9437),l=s(n(9281)),a=n(174),i=s(n(15)),f=n(1),c=s(n(4));function s(e){return e&&e.__esModule?e:{default:e}}function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(d=function(e){return e?n:t})(e)}function p(e,t,n,o){r||(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var u=e&&e.defaultProps,l=arguments.length-3;t||0===l||(t={children:void 0});if(1===l)t.children=o;else if(l>1){
for(var a=new Array(l),i=0;i<l;i++)a[i]=arguments[i+3];t.children=a}if(t&&u)for(var f in u)void 0===t[f]&&(t[f]=u[f]);else t||(t=u||{});return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function v(){var e=(0,o.useStateFromStores)([l.default],(function(){return l.default.expressionSuggestionsEnabled}));return p(a.MenuCheckboxItem,{id:"sticker-suggestions",label:c.default.Messages.AUTO_SUGGEST_STICKERS,checked:e,action:function(){i.default.track(f.AnalyticEvents.STICKER_SUGGESTIONS_ENABLED_TOGGLED,{enabled:!e,location:{object:f.AnalyticsObjects.CONTEXT_MENU}});(0,u.toggleExpressionSuggestionsEnabled)()}})}v.displayName="useExpressionSuggestionItems"},9332:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){var t=e.text,n=void 0===t?"":t,r=e.target,p=(0,u.useStateFromStores)([i.default],(function(){return i.default.isEnabled()})),v=o.useRef(b({},e,{spellcheckEnabled:p}));v.current=b({},e,{spellcheckEnabled:p})
;var g=o.useRef(!1),_=o.useState(!1),M=_[0],O=_[1],h=o.useState([]),E=h[0],m=h[1],S=o.useCallback((function(){var e=v.current,t=e.spellcheckEnabled,n=e.text,r=e.onHeightUpdate;t&&(0,c.isSupported)()&&Promise.all([(0,c.isMisspelled)(n,!0),(0,c.getCorrections)(n,!0)]).then((function(e){var t=e[0],n=e[1];if(g.current){O(t);m(n);r()}}))}),[]),w=o.useCallback((function(){if(r instanceof HTMLInputElement||r instanceof HTMLTextAreaElement){var e=r.selectionStart,t=r.selectionEnd,n=r.value;r.value="";r.value=n;if("email"!==r.type){r.selectionStart=e;r.selectionEnd=t}}}),[r]);o.useEffect((function(){(0,c.addResultListener)(S);g.current=!0;return function(){g.current=!1;(0,c.removeResultListener)(S)}}),[S]);o.useEffect((function(){S()}),[n,p,S]);if(!(0,c.isSupported)())return[null,null];var P=E.map((function(e,t){return y(a.MenuItem,{id:"correction-"+t,label:e,action:function(){(0,c.replaceWithCorrection)(e);r.focus()}})})),j=o.createElement(o.Fragment,null,M?y(a.MenuItem,{
id:"add-to-dictionary",label:d.default.Messages.ADD_TO_DICTIONARY,action:function(){(0,l.learnWord)(n);w()}}):null,y(a.MenuCheckboxItem,{id:"spellcheck",label:d.default.Messages.SPELLCHECK,checked:p,action:function(){(0,l.toggleSpellcheck)();w()}}),p?y(a.MenuItem,{id:"languages",label:d.default.Messages.LANGUAGES,action:function(){return window.open(f.default.getArticleURL(s.HelpdeskArticles.SPELLCHECK))}}):null);return[P,j]};var r,o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=v(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var l=o?Object.getOwnPropertyDescriptor(e,u):null;l&&(l.get||l.set)?Object.defineProperty(r,u,l):r[u]=e[u]}r.default=e;n&&n.set(e,r);return r}(n(0)),u=n(3),l=n(9519),a=n(174),i=p(n(9328)),f=p(n(90)),c=n(1333),s=n(1),d=p(n(4));function p(e){
return e&&e.__esModule?e:{default:e}}function v(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(v=function(e){return e?n:t})(e)}function y(e,t,n,o){r||(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var u=e&&e.defaultProps,l=arguments.length-3;t||0===l||(t={children:void 0});if(1===l)t.children=o;else if(l>1){for(var a=new Array(l),i=0;i<l;i++)a[i]=arguments[i+3];t.children=a}if(t&&u)for(var f in u)void 0===t[f]&&(t[f]=u[f]);else t||(t=u||{});return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}},9372:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){var t,n=null!==(t=a.default.getLastSelectedChannelId())&&void 0!==t?t:null
;if(!f.default.embedded||null==e||!(r=e,o=new URL(r),c=h(r),("https://media.discordapp.net"===o.origin||"https://cdn.discordapp.com"===o.origin)&&!r.startsWith("https://media.discordapp.net/stickers")&&!(0,l.isRoleIconAssetUrl)(r)&&null!=c&&M.has(c)))return null;var r,o,c;var v=function(e){var t=new URL(e);return"https://cdn.discordapp.com"===t.origin?e:"https://cdn.discordapp.com"+t.pathname}(e),y=function(){var t=_(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.prev=0;t.next=3;return s.default.saveImage(v);case 3:i.default.track(d.AnalyticEvents.CONTEXT_MENU_IMAGE_SAVED,{url:e,channel_id:n});t.next=10;break;case 6:t.prev=6;t.t0=t.catch(0);i.default.track(d.AnalyticEvents.CONTEXT_MENU_IMAGE_SAVE_FAILED,{url:e,channel_id:n});m(p.default.Messages.ERROR_SAVING_IMAGE,t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(){return t.apply(this,arguments)}}(),g=function(){
var t=_(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.prev=0;t.next=3;return s.default.copyImage(v);case 3:i.default.track(d.AnalyticEvents.CONTEXT_MENU_IMAGE_COPIED,{url:e,channel_id:n});t.next=10;break;case 6:t.prev=6;t.t0=t.catch(0);m(p.default.Messages.ERROR_COPYING_IMAGE,t.t0);i.default.track(d.AnalyticEvents.CONTEXT_MENU_IMAGE_COPY_FAILED,{url:e,channel_id:n});case 10:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(){return t.apply(this,arguments)}}();return[s.default.canCopyImage()&&E(e)?b(u.MenuItem,{id:"copy-image",label:p.default.Messages.COPY_IMAGE_MENU_ITEM,action:g},"copy-image"):null,b(u.MenuItem,{id:"save-image",label:p.default.Messages.SAVE_IMAGE_MENU_ITEM,action:y},"save-image")]};!function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=y(t);if(n&&n.has(e))return n.get(e)
;var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var l=o?Object.getOwnPropertyDescriptor(e,u):null;l&&(l.get||l.set)?Object.defineProperty(r,u,l):r[u]=e[u]}r.default=e;n&&n.set(e,r)}(n(0));var r,o=v(n(176)),u=n(174),l=n(6300),a=v(n(33)),i=v(n(15)),f=v(n(19)),c=v(n(171)),s=v(n(48)),d=n(1),p=v(n(4));function v(e){return e&&e.__esModule?e:{default:e}}function y(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(y=function(e){return e?n:t})(e)}function b(e,t,n,o){r||(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var u=e&&e.defaultProps,l=arguments.length-3;t||0===l||(t={children:void 0});if(1===l)t.children=o;else if(l>1){for(var a=new Array(l),i=0;i<l;i++)a[i]=arguments[i+3];t.children=a}if(t&&u)for(var f in u)void 0===t[f]&&(t[f]=u[f]);else t||(t=u||{});return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}
function g(e,t,n,r,o,u,l){try{var a=e[u](l),i=a.value}catch(e){n(e);return}a.done?t(i):Promise.resolve(i).then(r,o)}function _(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var u=e.apply(t,n);function l(e){g(u,r,o,l,a,"next",e)}function a(e){g(u,r,o,l,a,"throw",e)}l(void 0)}))}}var M=new Set(["jpg","jpeg","png","webp","gif","tiff","bmp"]),O=new Set(["jpg","jpeg","png"]),h=function(e){var t;return null===(t=new URL(e).pathname.split(".").pop())||void 0===t?void 0:t.toLowerCase()};function E(e){var t=h(e);return null!=t&&O.has(t)}function m(e,t){o.default.show({title:p.default.Messages.ERROR,body:e});c.default.captureException(t)}},9437:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.toggleExpressionSuggestionsEnabled=void 0;var r,o=(r=n(2))&&r.__esModule?r:{default:r},u=n(1);t.toggleExpressionSuggestionsEnabled=function(){o.default.dispatch({type:u.ActionTypes.EXPRESSION_SUGGESTIONS_TOGGLE})}},9519:function(e,t,n){
"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.toggleSpellcheck=function(){o.default.dispatch({type:u.ActionTypes.SPELLCHECK_TOGGLE})};t.learnWord=function(e){o.default.dispatch({type:u.ActionTypes.SPELLCHECK_LEARN_WORD,word:e})};var r,o=(r=n(2))&&r.__esModule?r:{default:r},u=n(1)},9520:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=v;d(n(0));var r,o=n(254),u=d(n(174)),l=c(n(19)),a=c(n(9372)),i=c(n(9179)),f=c(n(4));function c(e){return e&&e.__esModule?e:{default:e}}function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(s=function(e){return e?n:t})(e)}function d(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=s(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){
var l=o?Object.getOwnPropertyDescriptor(e,u):null;l&&(l.get||l.set)?Object.defineProperty(r,u,l):r[u]=e[u]}r.default=e;n&&n.set(e,r);return r}function p(e,t,n,o){r||(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var u=e&&e.defaultProps,l=arguments.length-3;t||0===l||(t={children:void 0});if(1===l)t.children=o;else if(l>1){for(var a=new Array(l),i=0;i<l;i++)a[i]=arguments[i+3];t.children=a}if(t&&u)for(var f in u)void 0===t[f]&&(t[f]=u[f]);else t||(t=u||{});return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function v(e){var t=e.src,n=e.onSelect,r=(0,a.default)(t),c=(0,i.default)(t,null);return l.default.embedded?p(u.default,{navId:"image-context",onClose:o.closeContextMenu,"aria-label":f.default.Messages.IMAGE_ACTIONS_MENU_LABEL,onSelect:n},void 0,p(u.MenuGroup,{},void 0,r),p(u.MenuGroup,{},void 0,c)):null}v.displayName="NativeImageContextMenu"},9521:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0})
;t.default=p;s(n(0));var r,o=n(254),u=s(n(174)),l=f(n(19)),a=f(n(9179)),i=f(n(4));function f(e){return e&&e.__esModule?e:{default:e}}function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(c=function(e){return e?n:t})(e)}function s(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=c(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var l=o?Object.getOwnPropertyDescriptor(e,u):null;l&&(l.get||l.set)?Object.defineProperty(r,u,l):r[u]=e[u]}r.default=e;n&&n.set(e,r);return r}function d(e,t,n,o){r||(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var u=e&&e.defaultProps,l=arguments.length-3;t||0===l||(t={children:void 0});if(1===l)t.children=o;else if(l>1){for(var a=new Array(l),i=0;i<l;i++)a[i]=arguments[i+3];t.children=a}
if(t&&u)for(var f in u)void 0===t[f]&&(t[f]=u[f]);else t||(t=u||{});return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function p(e){var t=e.href,n=e.textContent,r=e.onSelect,f=(0,a.default)(t,n);return l.default.embedded?null==f?null:d(u.default,{navId:"image-context",onClose:o.closeContextMenu,"aria-label":i.default.Messages.IMAGE_ACTIONS_MENU_LABEL,onSelect:r},void 0,d(u.MenuGroup,{},void 0,f)):null}p.displayName="NativeLinkContextMenu"},9522:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=v;d(n(0));var r,o=n(254),u=d(n(174)),l=c(n(19)),a=c(n(48)),i=c(n(9250)),f=c(n(4));function c(e){return e&&e.__esModule?e:{default:e}}function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(s=function(e){return e?n:t})(e)}function d(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=s(t);if(n&&n.has(e))return n.get(e)
;var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var l=o?Object.getOwnPropertyDescriptor(e,u):null;l&&(l.get||l.set)?Object.defineProperty(r,u,l):r[u]=e[u]}r.default=e;n&&n.set(e,r);return r}function p(e,t,n,o){r||(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var u=e&&e.defaultProps,l=arguments.length-3;t||0===l||(t={children:void 0});if(1===l)t.children=o;else if(l>1){for(var a=new Array(l),i=0;i<l;i++)a[i]=arguments[i+3];t.children=a}if(t&&u)for(var f in u)void 0===t[f]&&(t[f]=u[f]);else t||(t=u||{});return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function v(e){var t=e.text,n=e.onSelect,r=(0,i.default)(t);return l.default.embedded?p(u.default,{navId:"text-context",onClose:o.closeContextMenu,"aria-label":f.default.Messages.TEXT_ACTIONS_MENU_LABEL,onSelect:n},void 0,p(u.MenuGroup,{},void 0,r),p(u.MenuGroup,{},void 0,p(u.MenuItem,{
id:"copy",label:f.default.Messages.COPY,action:function(){return a.default.copy(t)}}))):null}v.displayName="NativeTextContextMenu"}}]);
//# sourceMappingURL=7d768aba643a16390722.js.map