!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=14)}({14:function(t,n,e){"use strict";var r=this&&this.__awaiter||function(t,n,e,r){return new(e||(e=Promise))((function(o,i){function u(t){try{c(r.next(t))}catch(t){i(t)}}function a(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){var n;t.done?o(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(u,a)}c((r=r.apply(t,n||[])).next())}))},o=this&&this.__generator||function(t,n){var e,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;u;)try{if(e=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=u.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=n.call(t,u)}catch(t){i=[6,t],r=0}finally{e=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};Object.defineProperty(n,"__esModule",{value:!0});var i=e(15);n.default=null,(new(function(){function t(){this.registration=self.registration}return t.prototype.init=function(){var t=this;self.addEventListener("notificationclick",(function(n){return n.waitUntil(t.onClick(n))})),self.addEventListener("notificationclose",(function(n){return n.waitUntil(t.onCloseEvt(n))})),self.addEventListener("push",(function(n){return n.waitUntil(t.onPushEvt(n))}))},t.prototype.onCloseEvt=function(t){console.log(t)},t.prototype.onPushEvt=function(t){var n;return r(this,void 0,void 0,(function(){var e;return o(this,(function(r){switch(r.label){case 0:return console.log(t),(e=null===(n=t.data)||void 0===n?void 0:n.json())?[4,self.registration.showNotification(e.title,{body:e.body,icon:e.iconUrl,vibrate:void 0,image:e.heroImageUrl,silent:!1,actions:i.NotificationMessage.parseActions(e),data:e,requireInteraction:!0})]:[2];case 1:return[2,r.sent()]}}))}))},t.prototype.onClick=function(t){return r(this,void 0,void 0,(function(){var n;return o(this,(function(e){switch(e.label){case 0:return t.notification.close(),(n=t.notification.data)?t.action||!n.url?[3,2]:[4,self.clients.openWindow(n.url)]:[2];case 1:return[2,e.sent()];case 2:return t.action?[4,self.clients.openWindow(t.action)]:[3,4];case 3:return[2,e.sent()];case 4:return[2]}}))}))},t}())).init()},15:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.NotificationMessage=void 0;var r=function(){function t(){}return t.parseActions=function(t){return t.buttons&&0!==t.buttons.length?t.buttons.sort((function(t,n){return t.order-n.order})).map((function(t){return{action:t.url,title:t.label,icon:t.iconUrl}})):[]},t}();n.NotificationMessage=r}});
//# sourceMappingURL=sw.js.map