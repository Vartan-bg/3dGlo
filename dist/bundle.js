(()=>{var t={264:(t,e,r)=>{t.exports=r(588)},588:t=>{var e=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof m?e:m,a=Object.create(o.prototype),i=new _(n||[]);return a._invoke=function(t,e,r){var n=f;return function(o,a){if(n===d)throw new Error("Generator is already running");if(n===v){if("throw"===o)throw a;return q()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=A(i,r);if(c){if(c===p)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var u=s(t,e,r);if("normal"===u.type){if(n=r.done?v:h,u.arg===p)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=v,r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var f="suspendedStart",h="suspendedYield",d="executing",v="completed",p={};function m(){}function y(){}function g(){}var b={};u(b,a,(function(){return this}));var w=Object.getPrototypeOf,L=w&&w(w(k([])));L&&L!==r&&n.call(L,a)&&(b=L);var E=g.prototype=m.prototype=Object.create(b);function x(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function r(o,a,i,c){var u=s(t[o],t,a);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(f).then((function(t){l.value=t,i(l)}),(function(t){return r("throw",t,i,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}}function A(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,A(t,r),"throw"===r.method))return p;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var o=s(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,p;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,p):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function k(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:q}}function q(){return{value:e,done:!0}}return y.prototype=g,u(E,"constructor",g),u(g,"constructor",y),y.displayName=u(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u(t,c,"GeneratorFunction")),t.prototype=Object.create(E),t},t.awrap=function(t){return{__await:t}},x(S.prototype),u(S.prototype,i,(function(){return this})),t.AsyncIterator=S,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new S(l(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},x(E),u(E,c,"Generator"),u(E,a,(function(){return this})),u(E,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=k,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(T),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(u&&l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),T(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;T(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:k(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),p}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var a=e[n]={exports:{}};return t[n](a,a.exports,r),a.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";function t(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(e,r){if(e){if("string"==typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?t(e,r):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}var o=r(264),a=r.n(o);function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var c,u,l,s,f,h,d,v,p,m,y,g,b,w;m="09 september 2021",y=document.querySelector("#timer-hours"),g=document.querySelector("#timer-minutes"),b=document.querySelector("#timer-seconds"),w=setInterval((function t(){var e=function(){var t=(new Date(m).getTime()-(new Date).getTime())/1e3,e=Math.floor(t%60),r=Math.floor(t/60%60),n=Math.floor(t/60/60);function o(t){return t<10?"0"+t:t}return e=o(e),r=o(r),{timeRemaining:t,hours:n=o(n),minutes:r,seconds:e}}();y.textContent=e.hours,g.textContent=e.minutes,b.textContent=e.seconds,e.timeRemaining>0?setTimeout(t,1e3):(document.querySelector("#timer").style.color="#f00",y.textContent="00",g.textContent="00",b.textContent="00",clearInterval(w))}),1e3),d=document.querySelector("menu"),v=document.getElementsByTagName("body")[0],p=function(){d.classList.toggle("active-menu")},v.addEventListener("click",(function(t){var e=t.target;if(e.classList.contains("menu")||e.classList.contains("close-btn")||e.closest(".menu"))p();else if(e.closest("a")&&"MENU"===e.parentNode.parentNode.parentNode.tagName){if(p(),e.hash&&""!==e.hash){var r=e.hash;$("html, body").animate({scrollTop:$(r).offset().top},800,(function(){window.location.hash=r}))}}else if("IMG"===e.tagName&&e.closest("main")&&e.closest("main")){var n=e.parentNode.hash;$("html, body").animate({scrollTop:$(n).offset().top},800,(function(){window.location.hash=n}))}else!e.classList.contains("active-menu")&&"LI"!==e.tagName&&d.classList.contains("active-menu")&&p()})),s=document.querySelector(".popup"),f=document.querySelectorAll(".popup-btn"),document.querySelector(".popup-close"),h=document.querySelector(".popup-content"),f.forEach((function(t){t.addEventListener("click",(function(){if(s.style.display="block",document.documentElement.clientWidth>768){h.style.left=0;var t=0;setInterval((function(){t<38&&(t++,h.style.left=t+"%")}),4)}}))})),s.addEventListener("click",(function(t){var e=t.target;e.classList.contains("popup-close")?s.style.display="none":(e=e.closest(".popup-content"))||(s.style.display="none")})),c=document.querySelector(".service-header"),u=c.querySelectorAll(".service-header-tab"),l=document.querySelectorAll(".service-tab"),c.addEventListener("click",(function(t){var e=t.target;(e=e.closest(".service-header-tab")).classList.contains("service-header-tab")&&u.forEach((function(t,r){t===e&&function(t){for(var e=0;e<l.length;e++)t===e?(u[e].classList.add("active"),l[e].classList.remove("d-none")):(l[e].classList.add("d-none"),u[e].classList.remove("active"))}(r)}))})),function(){var t=document.querySelectorAll(".portfolio-item"),e=document.querySelector(".portfolio-content");t.forEach((function(){var t=document.createElement("li");t.classList.add("dot"),e.childNodes[17].appendChild(t)})),e.childNodes[17].childNodes[1].classList.add("dot-active");var r,n=document.querySelectorAll(".dot"),o=0,a=function(t,e,r){t[e].classList.remove(r)},i=function(t,e,r){t[e].classList.add(r)},c=function(){a(t,o,"portfolio-item-active"),a(n,o,"dot-active"),++o>=t.length&&(o=0),i(t,o,"portfolio-item-active"),i(n,o,"dot-active")},u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3;r=setInterval(c,t)};e.addEventListener("click",(function(e){e.preventDefault();var r=e.target;r.matches(".portfolio-btn, .dot")&&(a(t,o,"portfolio-item-active"),a(n,o,"dot-active"),r.matches("#arrow-right")?o++:r.matches("#arrow-left")?o--:r.matches(".dot")&&n.forEach((function(t,e){t===r&&(o=e)})),o>=t.length&&(o=0),o<0&&(o=t.length-1),i(t,o,"portfolio-item-active"),i(n,o,"dot-active"))})),e.addEventListener("mouseover",(function(t){(t.target.matches(".portfolio-btn")||t.target.matches(".dot"))&&clearInterval(r)})),e.addEventListener("mouseout",(function(t){(t.target.matches(".portfolio-btn")||t.target.matches(".dot"))&&u()})),u(1500)}(),function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,e=document.querySelector(".calc-block"),r=document.querySelector(".calc-type"),n=document.querySelector(".calc-square"),o=document.querySelector(".calc-day"),a=document.getElementById("total"),i=document.querySelector(".calc-count"),c=function(){var e=0,c=1,u=1,l=0,s=+r.options[r.selectedIndex].value,f=+n.value;i.value>1&&(c+=(i.value-1)/10),o&&o.value<5?u*=2:o&&o.value<10&&(u*=1.5),s&&f&&(e=t*s*f*c*u),function t(){requestAnimationFrame(t),s&&f&&l<e&&(e<3e3?l+=100:e>3e3&&(l+=1e3),a.textContent=l>e?Math.floor(l-(l-e)):l)}()};e.addEventListener("change",(function(t){var e=t.target;(e.matches("select")||e.matches("input"))&&c()}))}(100),e(document.getElementsByTagName("input")).forEach((function(t){t.addEventListener("blur",(function(){"user_name"===t.getAttribute("name")&&(t.value=t.value.replace(/([^а-я ]|^ )/gi,""),t.value=t.value.replace(/[а-я]+/gi,(function(t){return t.toLowerCase()})),t.value=t.value.replace(/((?:^|\s))./g,(function(t){return"".concat(t.toUpperCase())})),t.value=t.value.replace(/ {2,}/g," ")),"user_message"===t.getAttribute("name")&&(t.value=t.value.replace(/([^а-я\,\.\!\?-]|^ )/gi,""),t.value=t.value.replace(/-{2,}/g,"-"),t.value=t.value.replace(/\s{2,}/g," ")),"user_email"===t.getAttribute("name")&&(t.value=t.value.replace(/([^a-z@-_!~*'\.]|-$|^-)/gi,""),t.value=t.value.replace(/(^[a-z-_!~*'\.+]@[a-z{,5}\.[a-z{,5}])/gi,""),t.value=t.value.replace(/\s{2,}/," "),t.value=t.value.replace(/-{2,}/g,"-").trim()),"user_phone"===t.getAttribute("name")&&(t.value=t.value.replace(/[^\d\+]/gi,"")),t.classList.contains("calc-item")&&(t.value=t.value.replace(/[^0-9]/g,""))}))})),document.querySelectorAll(".row")[8].addEventListener("mouseover",(function(t){var e=t.target,r=e.src;e.classList.contains("command__photo")&&(e.src=e.dataset.img),e.addEventListener("mouseout",(function(){e.src=r}))})),function(){var t=document.getElementsByTagName("body")[0];document.head.insertAdjacentHTML("beforeend","<style>.sk-spinner-pulse {width: 100px; height: 100px; margin: auto;background-color: black ;border-radius: 100%;animation: sk-spinner-pulse 1.0s infinite ease-in-out;}\n\n        @keyframes sk-spinner-pulse {0% {transform: scale(0);} 100% {transform: scale(1.0); opacity: 0;}}</style>");var r=document.createElement("div");r.style.cssText||(r.style.cssText="font-size: 2rem;"),t.addEventListener("submit",(function(t){t.preventDefault();var c,u=t.target;if("user_form"===u.getAttribute("name")){r.style.cssText="font-size: 2rem; color: white;",r.innerHTML='<div><div class="sk-spinner sk-spinner-pulse"></div></div>',u.appendChild(r);var l,s=new FormData(u),f={},h=function(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(t){if("string"==typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,u=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return c=t.done,t},e:function(t){u=!0,a=t},f:function(){try{c||null==r.return||r.return()}finally{if(u)throw a}}}}(s.entries());try{for(h.s();!(l=h.n()).done;){var d=l.value;f[d[0]]=d[1]}}catch(t){h.e(t)}finally{h.f()}(c=a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o(f).then((function(t){if(200!==t.status)throw new Error("status network not 200");r.textContent="Спасибо! Мы скоро с вами свяжемся"})).catch((function(t){r.textContent="Что-то пошло не так",console.error(t)}));case 2:"form3"!==u.getAttribute("id")?e(u.childNodes[1].childNodes[1].children).forEach((function(t){"INPUT"===t.children[0].tagName&&(t.children[0].value="")})):e(u.children).forEach((function(t){t.children[0]&&"INPUT"===t.children[0].tagName&&(t.children[0].value="")}));case 3:case"end":return t.stop()}}),t)})),function(){var t=this,e=arguments;return new Promise((function(r,o){var a=c.apply(t,e);function i(t){n(a,r,o,i,u,"next",t)}function u(t){n(a,r,o,i,u,"throw",t)}i(void 0)}))})()}}));var o=function(t){return fetch("http://3dglo/server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})}}()})()})();