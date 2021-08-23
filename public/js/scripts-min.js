"use strict";function _typeof2(n){return(_typeof2="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function _typeof(n){return(_typeof="function"==typeof Symbol&&"symbol"==_typeof2(Symbol.iterator)?function(n){return _typeof2(n)}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":_typeof2(n)})(n)}!function(n){
/*!
  	 * Project : simply-countdown
  	 * Date : 27/06/2015
  	 * License : MIT
  	 * Version : 1.6.0
  	 * Author : Vincent Loy <vincent.loy1@gmail.com>
  	 * Contributors :
  	 *  - Justin Beasley <JustinB@harvest.org>
  	 *  - Nathan Smith <NathanS@harvest.org>
  	 */
var t=function n(t){for(var e,o=t||{},s=1;s<arguments.length;s+=1){e=arguments[s];var r=Object.keys(e);if(r.length)for(var l=0;l<r.length;l+=1){var a=r[l];Object.prototype.hasOwnProperty.call(e,a)&&("object"===_typeof(e[a])?n(o[a],e[a]):o[a]=e[a])}}return o},e=function(n,t,e){var o=document.createElement("div"),s=document.createElement("span"),r=document.createElement("span"),l=document.createElement("div");return l.appendChild(s),l.appendChild(r),o.appendChild(l),o.classList.add(t.sectionClass),o.classList.add(e),s.classList.add(t.amountClass),r.classList.add(t.wordClass),n.appendChild(o),{full:o,amount:s,word:r}};n.simplyCountdown=function(n,o){var s,r,l,a,u,i,c,d,m,y,p,f=Object.getPrototypeOf(n),g=t({year:2015,month:6,day:28,hours:0,minutes:0,seconds:0,words:{days:{singular:"day",plural:"days"},hours:{singular:"hour",plural:"hours"},minutes:{singular:"minute",plural:"minutes"},seconds:{singular:"second",plural:"seconds"}},plural:!0,inline:!1,enableUtc:!1,onEnd:function(){},refresh:1e3,inlineClass:"simply-countdown-inline",sectionClass:"simply-section",amountClass:"simply-amount",wordClass:"simply-word",zeroPad:!1,countUp:!1},o);p=f===String.prototype?document.querySelectorAll(n):n,l=new Date(g.year,g.month-1,g.day,g.hours,g.minutes,g.seconds),r=g.enableUtc?new Date(l.getUTCFullYear(),l.getUTCMonth(),l.getUTCDate(),l.getUTCHours(),l.getUTCMinutes(),l.getUTCSeconds()):l;var w,h=function(n){var t,o=n,l=function(n,t){var o;return n.inline?((o=document.createElement("span")).classList.add(n.inlineClass),o):{days:e(t,n,"simply-days-section"),hours:e(t,n,"simply-hours-section"),minutes:e(t,n,"simply-minutes-section"),seconds:e(t,n,"simply-seconds-section")}}(g,o);(t=function(){var n,t,e,p,f=function(){c=parseInt(i/86400,10),i%=86400,d=parseInt(i/3600,10),i%=3600,m=parseInt(i/60,10),y=parseInt(i%60,10)};a=new Date,g.enableUtc?(u=new Date(a.getFullYear(),a.getMonth(),a.getDate(),a.getHours(),a.getMinutes(),a.getSeconds()),i=(r-u.getTime())/1e3):i=(r-a.getTime())/1e3,i>0?f():g.countUp?(i=(a.getTime()-r)/1e3,f()):(c=0,d=0,m=0,y=0,window.clearInterval(s),g.onEnd()),g.plural?(n=c>1?g.words.days.plural:g.words.days.singular,t=d>1?g.words.hours.plural:g.words.hours.singular,e=m>1?g.words.minutes.plural:g.words.minutes.singular,p=y>1?g.words.seconds.plural:g.words.seconds.singular):(n=g.words.days.singular,t=g.words.hours.singular,e=g.words.minutes.singular,p=g.words.seconds.singular),g.inline?o.innerHTML="".concat(c," ").concat(n,", ")+"".concat(d," ").concat(t,", ")+"".concat(m," ").concat(e,", ")+"".concat(y," ").concat(p,"."):(l.days.amount.textContent=(g.zeroPad&&c.toString().length<2?"0":"")+c,l.days.word.textContent=n,l.hours.amount.textContent=(g.zeroPad&&d.toString().length<2?"0":"")+d,l.hours.word.textContent=t,l.minutes.amount.textContent=(g.zeroPad&&m.toString().length<2?"0":"")+m,l.minutes.word.textContent=e,l.seconds.amount.textContent=(g.zeroPad&&y.toString().length<2?"0":"")+y,l.seconds.word.textContent=p)})(),s=window.setInterval(t,g.refresh)};null!==(w=p)&&Symbol.iterator in Object(w)?Array.prototype.forEach.call(p,(function(n){h(n)})):h(p)}}(window),window.jQuery&&function(n,t){n.fn.simplyCountdown=function(n){return function(n,e){t(n,e)}(this.selector,n)}}(jQuery,simplyCountdown),simplyCountdown("#counter",{year:2021,month:8,day:23,hours:1,minutes:59,seconds:0,words:{days:{singular:"Dia",plural:"Dias"},hours:{singular:"Hora",plural:"Horas"},minutes:{singular:"Minuto",plural:"Minutos"},seconds:{singular:"Segundo",plural:"Segundos"}},plural:!0,inline:!1,inlineClass:"simply-countdown-inline",enableUtc:!0,onEnd:function(){document.getElementById("cover").classList.add("hidden")},refresh:1e3,sectionClass:"simply-section",amountClass:"simply-amount",wordClass:"simply-word",zeroPad:!1,countUp:!1});var myElement=document.querySelector(".my-countdown");simplyCountdown(myElement,{});var multipleElements=document.querySelectorAll(".my-countdown");simplyCountdown(multipleElements,{});