!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){},function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function s(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],o=0;o<e.length;o++){var i=e[o],c=t.base?i[0]+t.base:i[0],l=n[c]||0,u="".concat(c," ").concat(l);n[c]=l+1;var f=s(u),d={css:i[1],media:i[2],sourceMap:i[3]};-1!==f?(a[f].references++,a[f].updater(d)):a.push({identifier:u,updater:m(d,t),references:1}),r.push(u)}return r}function l(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var u,f=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function d(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=f(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function h(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,v=0;function m(e,t){var n,r,o;if(t.singleton){var i=v++;n=p||(p=l(t)),r=d.bind(null,n,i,!1),o=d.bind(null,n,i,!0)}else n=l(t),r=h.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=s(n[r]);a[o].references--}for(var i=c(e,t),l=0;l<n.length;l++){var u=s(n[l]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}n=i}}}},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(a=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([o]).join("\n")}var a,s,c;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};Object.defineProperty(t,"__esModule",{value:!0});var i=n(4),a=n(13);!function e(){return r(this,void 0,void 0,(function(){var t,n;return o(this,(function(r){switch(r.label){case 0:return(t=window)&&t.sqe&&0!==t.sqe.length?(t.sqe.forEach((function(e){switch(e[0]){case"init":if(!(e[1]&&e[1]instanceof Object))throw new Error(a.Messages.InvalidConfiguration);n=e[1]}})),n?[4,(new i.SQPushManager).init(n)]:[3,2]):(setTimeout(e,300),[2]);case 1:r.sent(),r.label=2;case 2:return[2]}}))}))}()},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.SQPushManager=void 0,n(0);var i=n(5);n(10);var a=n(12),s=function(){function e(){}return e.prototype.init=function(e){return r(this,void 0,void 0,(function(){var t,n;return o(this,(function(r){switch(r.label){case 0:return console.log("Starting Registration Process"),[4,this.checkNotificationSupport()];case 1:return r.sent()?[4,this.checkServiceWorkerSupport()]:[2,Promise.reject("Notification Not Supported")];case 2:return r.sent()?(t=this,[4,this.registerServiceWorker()]):[2,Promise.reject("Service Worker Not Supported")];case 3:return t.swRegistration=r.sent(),this.initVars=e,this.showConsentPopup()?[4,new i.PopupManager(e).show()]:[3,7];case 4:return r.sent()?(n=this,[4,this.requestNotificationPermission()]):[2];case 5:return n.notificationStatus=r.sent(),this.notificationStatus?[4,new a.SQSubscriptionManager(this.swRegistration,e.vapidKey).saveSubscription()]:[2];case 6:r.sent(),r.label=7;case 7:return console.log("Complete Registration Process"),[2]}}))}))},e.prototype.checkNotificationSupport=function(){return r(this,void 0,void 0,(function(){return o(this,(function(e){return"Notification"in window?[2,Promise.resolve(!0)]:[2,Promise.resolve(!1)]}))}))},e.prototype.checkServiceWorkerSupport=function(){return r(this,void 0,void 0,(function(){return o(this,(function(e){return"serviceWorker"in navigator?[2,Promise.resolve(!0)]:[2,Promise.resolve(!1)]}))}))},e.prototype.requestNotificationPermission=function(){return r(this,void 0,void 0,(function(){return o(this,(function(e){switch(e.label){case 0:return[4,Notification.requestPermission().catch((function(e){return Promise.reject(e)}))];case 1:return[2,"granted"===e.sent()]}}))}))},e.prototype.showConsentPopup=function(){return"granted"!==Notification.permission&&"denied"!==Notification.permission},e.prototype.registerServiceWorker=function(){return r(this,void 0,void 0,(function(){return o(this,(function(e){switch(e.label){case 0:return[4,navigator.serviceWorker.register("http://google.com/sw.js").catch((function(e){return Promise.reject(e)}))];case 1:return[2,e.sent()]}}))}))},e}();t.SQPushManager=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PopupManager=void 0,n(6);var r=n(8),o=n(9),i=function(){function e(e){var t=this;this.templateString='<div class="sq_modal micromodal-slide" id="{{modalId}}" aria-hidden="true"><div class="sq_modal__overlay" tabindex="-1"><div class="sq_modal__container" role="dialog" aria-modal="true"> <main class="sq_modal__content"> <img class="sq_modal__icon" src="{{iconUrl}}"><div class="sq_modal__content_text"><h4 class="sq_modal_title">{{title}}</h4><p class="sq_modal_para"> {{{body}}}</p></div></main> <footer class="sq_modal__footer"> <button class="sq_modal__btn sq_modal__btn-cancel" data-micromodal-close aria-label="Close this dialog window">{{closeText}}</button> <button class="sq_modal__btn sq_modal__btn-primary">{{subscribeText}}</button> </footer></div></div></div>',this.modalId="sq-consent-modal";var n={modalId:this.modalId,iconUrl:e.iconUrl||"",title:e.subscribeTitle||"Subscribe to Notifications",body:e.subscribeBody||"",closeText:e.subscribeCloseText||"Later",subscribeText:e.subscribeButtonText||"Subscribe"},i=o.render(this.templateString,n),a=document.createElement("div");a.innerHTML=i;var s=(a=a.firstChild||a).querySelector(".sq_modal__btn-primary"),c=a.querySelector(".sq_modal__btn-cancel");s&&s.addEventListener("click",(function(){return t.subscribeClick(!0)})),c&&c.addEventListener("click",(function(){return t.subscribeClick(!1)})),document.body.appendChild(a),r.default.init({awaitCloseAnimation:!0})}return e.prototype.show=function(){var e=this;return r.default.show(this.modalId),new Promise((function(t){return e.confirmationResolve=t}))},e.prototype.subscribeClick=function(e){return r.default.close(this.modalId),this.confirmationResolve(e)},e}();t.PopupManager=i},function(e,t,n){var r=n(1),o=n(7);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);e.exports=o.locals||{}},function(e,t,n){(t=n(2)(!1)).push([e.i,'.sq_modal{font-family:-apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial, sans-serif}.sq_modal__overlay{position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.6);display:flex;justify-content:center;align-items:flex-start}.sq_modal__container{background-color:#fff;padding:15px;width:500px;max-height:100vh;border-radius:0 0 4px 4px;overflow-y:auto;box-sizing:border-box}.sq_modal__content{margin-bottom:1rem;line-height:1.5;color:rgba(0,0,0,0.8);flex-direction:row;display:flex}.sq_modal__content .sq_modal__icon{height:96px;width:96px;border-radius:4px}.sq_modal__content h4{margin:0 0 1rem}.sq_modal__content p{margin-top:0;margin-bottom:1rem}.sq_modal__content .sq_modal__content_text{display:flex;flex-direction:column;margin-left:1rem}.sq_modal__btn{font-size:.875rem;padding:.5rem 1rem;background:none;color:rgba(0,0,0,0.8);border-radius:.25rem;border-style:none;border-width:0;cursor:pointer;-webkit-appearance:button;text-transform:none;overflow:visible;line-height:1.15;margin:0;will-change:transform;-moz-osx-font-smoothing:grayscale;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform:translateZ(0);transform:translateZ(0);transition:-webkit-transform .25s ease-out;transition:transform .25s ease-out}.sq_modal__footer{display:flex;justify-content:flex-end}.sq_modal__btn:focus,.sq_modal__btn:hover{-webkit-transform:scale(1.05);transform:scale(1.05)}.sq_modal__btn-primary{background-color:#00449e;color:#fff}@keyframes mmfadeIn{from{opacity:0}to{opacity:1}}@keyframes mmfadeOut{from{opacity:1}to{opacity:0}}@keyframes mmslideIn{from{transform:translateY(-15%)}to{transform:translateY(0)}}@keyframes mmslideOut{from{transform:translateY(0)}to{transform:translateY(-10%)}}.micromodal-slide{display:none}.micromodal-slide.is-open{display:block}.micromodal-slide[aria-hidden="false"] .sq_modal__overlay{animation:mmfadeIn 0.3s cubic-bezier(0, 0, 0.2, 1)}.micromodal-slide[aria-hidden="false"] .sq_modal__container{animation:mmslideIn 0.3s cubic-bezier(0, 0, 0.2, 1)}.micromodal-slide[aria-hidden="true"] .sq_modal__overlay{animation:mmfadeOut 0.3s cubic-bezier(0, 0, 0.2, 1)}.micromodal-slide[aria-hidden="true"] .sq_modal__container{animation:mmslideOut 0.3s cubic-bezier(0, 0, 0.2, 1)}.micromodal-slide .sq_modal__container,.micromodal-slide .sq_modal__overlay{will-change:transform}\n',""]),e.exports=t},function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.r(t);var a,s,c,l,u,f=(a=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","[contenteditable]",'[tabindex]:not([tabindex^="-"])'],s=function(){function e(t){var n=t.targetModal,r=t.triggers,i=void 0===r?[]:r,a=t.onShow,s=void 0===a?function(){}:a,c=t.onClose,l=void 0===c?function(){}:c,u=t.openTrigger,f=void 0===u?"data-micromodal-trigger":u,d=t.closeTrigger,h=void 0===d?"data-micromodal-close":d,p=t.openClass,v=void 0===p?"is-open":p,m=t.disableScroll,b=void 0!==m&&m,g=t.disableFocus,y=void 0!==g&&g,w=t.awaitCloseAnimation,_=void 0!==w&&w,k=t.awaitOpenAnimation,x=void 0!==k&&k,S=t.debugMode,C=void 0!==S&&S;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.modal=document.getElementById(n),this.config={debugMode:C,disableScroll:b,openTrigger:f,closeTrigger:h,openClass:v,onShow:s,onClose:l,awaitCloseAnimation:_,awaitOpenAnimation:x,disableFocus:y},i.length>0&&this.registerTriggers.apply(this,o(i)),this.onClick=this.onClick.bind(this),this.onKeydown=this.onKeydown.bind(this)}var t,n,i;return t=e,(n=[{key:"registerTriggers",value:function(){for(var e=this,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];n.filter(Boolean).forEach((function(t){t.addEventListener("click",(function(t){return e.showModal(t)}))}))}},{key:"showModal",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(this.activeElement=document.activeElement,this.modal.setAttribute("aria-hidden","false"),this.modal.classList.add(this.config.openClass),this.scrollBehaviour("disable"),this.addEventListeners(),this.config.awaitOpenAnimation){var n=function t(){e.modal.removeEventListener("animationend",t,!1),e.setFocusToFirstNode()};this.modal.addEventListener("animationend",n,!1)}else this.setFocusToFirstNode();this.config.onShow(this.modal,this.activeElement,t)}},{key:"closeModal",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=this.modal;if(this.modal.setAttribute("aria-hidden","true"),this.removeEventListeners(),this.scrollBehaviour("enable"),this.activeElement&&this.activeElement.focus&&this.activeElement.focus(),this.config.onClose(this.modal,this.activeElement,e),this.config.awaitCloseAnimation){var n=this.config.openClass;this.modal.addEventListener("animationend",(function e(){t.classList.remove(n),t.removeEventListener("animationend",e,!1)}),!1)}else t.classList.remove(this.config.openClass)}},{key:"closeModalById",value:function(e){this.modal=document.getElementById(e),this.modal&&this.closeModal()}},{key:"scrollBehaviour",value:function(e){if(this.config.disableScroll){var t=document.querySelector("body");switch(e){case"enable":Object.assign(t.style,{overflow:""});break;case"disable":Object.assign(t.style,{overflow:"hidden"})}}}},{key:"addEventListeners",value:function(){this.modal.addEventListener("touchstart",this.onClick),this.modal.addEventListener("click",this.onClick),document.addEventListener("keydown",this.onKeydown)}},{key:"removeEventListeners",value:function(){this.modal.removeEventListener("touchstart",this.onClick),this.modal.removeEventListener("click",this.onClick),document.removeEventListener("keydown",this.onKeydown)}},{key:"onClick",value:function(e){e.target.hasAttribute(this.config.closeTrigger)&&this.closeModal(e)}},{key:"onKeydown",value:function(e){27===e.keyCode&&this.closeModal(e),9===e.keyCode&&this.retainFocus(e)}},{key:"getFocusableNodes",value:function(){var e=this.modal.querySelectorAll(a);return Array.apply(void 0,o(e))}},{key:"setFocusToFirstNode",value:function(){var e=this;if(!this.config.disableFocus){var t=this.getFocusableNodes();if(0!==t.length){var n=t.filter((function(t){return!t.hasAttribute(e.config.closeTrigger)}));n.length>0&&n[0].focus(),0===n.length&&t[0].focus()}}}},{key:"retainFocus",value:function(e){var t=this.getFocusableNodes();if(0!==t.length)if(t=t.filter((function(e){return null!==e.offsetParent})),this.modal.contains(document.activeElement)){var n=t.indexOf(document.activeElement);e.shiftKey&&0===n&&(t[t.length-1].focus(),e.preventDefault()),!e.shiftKey&&t.length>0&&n===t.length-1&&(t[0].focus(),e.preventDefault())}else t[0].focus()}}])&&r(t.prototype,n),i&&r(t,i),e}(),c=null,l=function(e){if(!document.getElementById(e))return console.warn("MicroModal: ❗Seems like you have missed %c'".concat(e,"'"),"background-color: #f8f9fa;color: #50596c;font-weight: bold;","ID somewhere in your code. Refer example below to resolve it."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<div class="modal" id="'.concat(e,'"></div>')),!1},u=function(e,t){if(function(e){e.length<=0&&(console.warn("MicroModal: ❗Please specify at least one %c'micromodal-trigger'","background-color: #f8f9fa;color: #50596c;font-weight: bold;","data attribute."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<a href="#" data-micromodal-trigger="my-modal"></a>'))}(e),!t)return!0;for(var n in t)l(n);return!0},{init:function(e){var t=Object.assign({},{openTrigger:"data-micromodal-trigger"},e),n=o(document.querySelectorAll("[".concat(t.openTrigger,"]"))),r=function(e,t){var n=[];return e.forEach((function(e){var r=e.attributes[t].value;void 0===n[r]&&(n[r]=[]),n[r].push(e)})),n}(n,t.openTrigger);if(!0!==t.debugMode||!1!==u(n,r))for(var i in r){var a=r[i];t.targetModal=i,t.triggers=o(a),c=new s(t)}},show:function(e,t){var n=t||{};n.targetModal=e,!0===n.debugMode&&!1===l(e)||(c&&c.removeEventListeners(),(c=new s(n)).showModal())},close:function(e){e?c.closeModalById(e):c.closeModal()}});window.MicroModal=f,t.default=f},function(e,t,n){e.exports=function(){"use strict";
/*!
   * mustache.js - Logic-less {{mustache}} templates with JavaScript
   * http://github.com/janl/mustache.js
   */var e=Object.prototype.toString,t=Array.isArray||function(t){return"[object Array]"===e.call(t)};function n(e){return"function"==typeof e}function r(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function o(e,t){return null!=e&&"object"==typeof e&&t in e}var i=RegExp.prototype.test,a=/\S/;function s(e){return!function(e,t){return i.call(e,t)}(a,e)}var c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"},l=/\s*/,u=/\s+/,f=/\s*=/,d=/\s*\}/,h=/#|\^|\/|>|\{|&|=|!/;function p(e){this.string=e,this.tail=e,this.pos=0}function v(e,t){this.view=e,this.cache={".":this.view},this.parent=t}function m(){this.templateCache={_cache:{},set:function(e,t){this._cache[e]=t},get:function(e){return this._cache[e]},clear:function(){this._cache={}}}}p.prototype.eos=function(){return""===this.tail},p.prototype.scan=function(e){var t=this.tail.match(e);if(!t||0!==t.index)return"";var n=t[0];return this.tail=this.tail.substring(n.length),this.pos+=n.length,n},p.prototype.scanUntil=function(e){var t,n=this.tail.search(e);switch(n){case-1:t=this.tail,this.tail="";break;case 0:t="";break;default:t=this.tail.substring(0,n),this.tail=this.tail.substring(n)}return this.pos+=t.length,t},v.prototype.push=function(e){return new v(e,this)},v.prototype.lookup=function(e){var t,r,i,a=this.cache;if(a.hasOwnProperty(e))t=a[e];else{for(var s,c,l,u=this,f=!1;u;){if(e.indexOf(".")>0)for(s=u.view,c=e.split("."),l=0;null!=s&&l<c.length;)l===c.length-1&&(f=o(s,c[l])||(r=s,i=c[l],null!=r&&"object"!=typeof r&&r.hasOwnProperty&&r.hasOwnProperty(i))),s=s[c[l++]];else s=u.view[e],f=o(u.view,e);if(f){t=s;break}u=u.parent}a[e]=t}return n(t)&&(t=t.call(this.view)),t},m.prototype.clearCache=function(){void 0!==this.templateCache&&this.templateCache.clear()},m.prototype.parse=function(e,n){var o=this.templateCache,i=e+":"+(n||b.tags).join(":"),a=void 0!==o,c=a?o.get(i):void 0;return null==c&&(c=function(e,n){if(!e)return[];var o,i,a,c=!1,v=[],m=[],g=[],y=!1,w=!1,_="",k=0;function x(){if(y&&!w)for(;g.length;)delete m[g.pop()];else g=[];y=!1,w=!1}function S(e){if("string"==typeof e&&(e=e.split(u,2)),!t(e)||2!==e.length)throw new Error("Invalid tags: "+e);o=new RegExp(r(e[0])+"\\s*"),i=new RegExp("\\s*"+r(e[1])),a=new RegExp("\\s*"+r("}"+e[1]))}S(n||b.tags);for(var C,E,M,T,q,P,j=new p(e);!j.eos();){if(C=j.pos,M=j.scanUntil(o))for(var O=0,A=M.length;O<A;++O)s(T=M.charAt(O))?(g.push(m.length),_+=T):(w=!0,c=!0,_+=" "),m.push(["text",T,C,C+1]),C+=1,"\n"===T&&(x(),_="",k=0,c=!1);if(!j.scan(o))break;if(y=!0,E=j.scan(h)||"name",j.scan(l),"="===E?(M=j.scanUntil(f),j.scan(f),j.scanUntil(i)):"{"===E?(M=j.scanUntil(a),j.scan(d),j.scanUntil(i),E="&"):M=j.scanUntil(i),!j.scan(i))throw new Error("Unclosed tag at "+j.pos);if(q=">"==E?[E,M,C,j.pos,_,k,c]:[E,M,C,j.pos],k++,m.push(q),"#"===E||"^"===E)v.push(q);else if("/"===E){if(!(P=v.pop()))throw new Error('Unopened section "'+M+'" at '+C);if(P[1]!==M)throw new Error('Unclosed section "'+P[1]+'" at '+C)}else"name"===E||"{"===E||"&"===E?w=!0:"="===E&&S(M)}if(x(),P=v.pop())throw new Error('Unclosed section "'+P[1]+'" at '+j.pos);return function(e){for(var t,n=[],r=n,o=[],i=0,a=e.length;i<a;++i)switch((t=e[i])[0]){case"#":case"^":r.push(t),o.push(t),r=t[4]=[];break;case"/":o.pop()[5]=t[2],r=o.length>0?o[o.length-1][4]:n;break;default:r.push(t)}return n}(function(e){for(var t,n,r=[],o=0,i=e.length;o<i;++o)(t=e[o])&&("text"===t[0]&&n&&"text"===n[0]?(n[1]+=t[1],n[3]=t[3]):(r.push(t),n=t));return r}(m))}(e,n),a&&o.set(i,c)),c},m.prototype.render=function(e,t,n,r){var o=this.parse(e,r),i=t instanceof v?t:new v(t,void 0);return this.renderTokens(o,i,n,e,r)},m.prototype.renderTokens=function(e,t,n,r,o){for(var i,a,s,c="",l=0,u=e.length;l<u;++l)s=void 0,"#"===(a=(i=e[l])[0])?s=this.renderSection(i,t,n,r):"^"===a?s=this.renderInverted(i,t,n,r):">"===a?s=this.renderPartial(i,t,n,o):"&"===a?s=this.unescapedValue(i,t):"name"===a?s=this.escapedValue(i,t):"text"===a&&(s=this.rawValue(i)),void 0!==s&&(c+=s);return c},m.prototype.renderSection=function(e,r,o,i){var a=this,s="",c=r.lookup(e[1]);if(c){if(t(c))for(var l=0,u=c.length;l<u;++l)s+=this.renderTokens(e[4],r.push(c[l]),o,i);else if("object"==typeof c||"string"==typeof c||"number"==typeof c)s+=this.renderTokens(e[4],r.push(c),o,i);else if(n(c)){if("string"!=typeof i)throw new Error("Cannot use higher-order sections without the original template");null!=(c=c.call(r.view,i.slice(e[3],e[5]),(function(e){return a.render(e,r,o)})))&&(s+=c)}else s+=this.renderTokens(e[4],r,o,i);return s}},m.prototype.renderInverted=function(e,n,r,o){var i=n.lookup(e[1]);if(!i||t(i)&&0===i.length)return this.renderTokens(e[4],n,r,o)},m.prototype.indentPartial=function(e,t,n){for(var r=t.replace(/[^ \t]/g,""),o=e.split("\n"),i=0;i<o.length;i++)o[i].length&&(i>0||!n)&&(o[i]=r+o[i]);return o.join("\n")},m.prototype.renderPartial=function(e,t,r,o){if(r){var i=n(r)?r(e[1]):r[e[1]];if(null!=i){var a=e[6],s=e[5],c=e[4],l=i;return 0==s&&c&&(l=this.indentPartial(i,c,a)),this.renderTokens(this.parse(l,o),t,r,l,o)}}},m.prototype.unescapedValue=function(e,t){var n=t.lookup(e[1]);if(null!=n)return n},m.prototype.escapedValue=function(e,t){var n=t.lookup(e[1]);if(null!=n)return b.escape(n)},m.prototype.rawValue=function(e){return e[1]};var b={name:"mustache.js",version:"4.0.1",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(e){g.templateCache=e},get templateCache(){return g.templateCache}},g=new m;return b.clearCache=function(){return g.clearCache()},b.parse=function(e,t){return g.parse(e,t)},b.render=function(e,n,r,o){if("string"!=typeof e)throw new TypeError('Invalid template! Template should be a "string" but "'+(t(i=e)?"array":typeof i)+'" was given as the first argument for mustache#render(template, view, partials)');var i;return g.render(e,n,r,o)},b.escape=function(e){return String(e).replace(/[&<>"'`=\/]/g,(function(e){return c[e]}))},b.Scanner=p,b.Context=v,b.Writer=m,b}()},function(e,t,n){var r=n(1),o=n(11);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);e.exports=o.locals||{}},function(e,t,n){(t=n(2)(!1)).push([e.i,"",""]),e.exports=t},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.SQSubscriptionManager=void 0,n(0);var i=function(){function e(e,t){this.swRegistration=e,this.vapidKey=t}return e.prototype.saveSubscription=function(){return r(this,void 0,void 0,(function(){var e;return o(this,(function(t){switch(t.label){case 0:return[4,this.createPushSubscription()];case 1:return e=t.sent(),[4,this.saveToServer(e)];case 2:return 200===t.sent().status?[2,e]:[2,null]}}))}))},e.prototype.removeSubscription=function(){return r(this,void 0,void 0,(function(){return o(this,(function(e){return[2,!1]}))}))},e.prototype.createPushSubscription=function(){return r(this,void 0,void 0,(function(){var e;return o(this,(function(t){switch(t.label){case 0:return e={userVisibleOnly:!0,applicationServerKey:this.urlBase64ToUint8Array(this.vapidKey)},[4,this.swRegistration.pushManager.subscribe(e)];case 1:return[2,t.sent()]}}))}))},e.prototype.saveToServer=function(e){return r(this,void 0,void 0,(function(){return o(this,(function(t){switch(t.label){case 0:return[4,fetch("https://beta-engage-api.sparq.ai",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})];case 1:return[2,t.sent()]}}))}))},e.prototype.urlBase64ToUint8Array=function(e){for(var t=(e+"=".repeat((4-e.length%4)%4)).replace(/\-/g,"+").replace(/_/g,"/"),n=window.atob(t),r=new Uint8Array(n.length),o=0;o<n.length;++o)r[o]=n.charCodeAt(o);return r},e}();t.SQSubscriptionManager=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Messages=void 0;var r=function(){function e(){}return e.InvalidConfiguration="Invalid Configuration Provided, check again",e}();t.Messages=r}]);
//# sourceMappingURL=main.js.map