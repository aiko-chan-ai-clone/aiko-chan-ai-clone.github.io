!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};t[n].call(o.exports,o,o.exports,r);o.l=!0;return o.exports}r.m=t;r.c=e;r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})};r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"});Object.defineProperty(t,"__esModule",{value:!0})};r.t=function(t,e){1&e&&(t=r(t));if(8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);r.r(n);Object.defineProperty(n,"default",{enumerable:!0,value:t});if(2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n};r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};r.d(e,"a",e);return e};r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)};r.p="/assets/";r(r.s=0)}([function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0})
;e.default=e.SpeakingFlags=void 0;function n(t){var e="function"==typeof Map?new Map:void 0;return(n=function(t){if(null===t||!(r=t,-1!==Function.toString.call(r).indexOf("[native code]")))return t;var r;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return o(t,arguments,c(this).constructor)}n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}});return i(n,t)})(t)}function o(t,e,r){return(o=u()?Reflect.construct:function(t,e,r){var n=[null];n.push.apply(n,e);var o=new(Function.bind.apply(t,n));r&&i(o,r.prototype);return o}).apply(null,arguments)}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(t){return!1}}function i(t,e){
return(i=Object.setPrototypeOf||function(t,e){t.__proto__=e;return t})(t,e)}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var f;e.SpeakingFlags=f;!function(t){t[t.NONE=0]="NONE";t[t.VOICE=1]="VOICE";t[t.SOUNDSHARE=2]="SOUNDSHARE";t[t.PRIORITY=4]="PRIORITY"}(f||(e.SpeakingFlags=f={}));if("undefined"!=typeof AudioWorkletProcessor){var a=function(t){!function(t,e){t.prototype=Object.create(e.prototype);t.prototype.constructor=t;i(t,e)}(e,t);function e(){var e;(e=t.call(this)||this).running=!0;e.lastSpeaking=0;e.port.onmessage=function(t){"close"===t.data&&(e.running=!1)};return e}e.prototype.process=function(t,e,r){for(var n=t[0],o=f.NONE,u=0;u<n.length;++u){for(var i=n[u],c=0;c<i.length;++c)if(0!==i[c]){o=f.VOICE;break}if(o===f.VOICE)break}if(this.lastSpeaking!==o){this.port.postMessage(o);this.lastSpeaking=o}return this.running};return e}(n(AudioWorkletProcessor));registerProcessor("level-processor",a)}
e.default=""}]);