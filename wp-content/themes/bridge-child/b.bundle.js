webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	__webpack_require__(7);
	__webpack_require__(8);
	__webpack_require__(10);
	__webpack_require__(11);

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
	 * Licensed under the MIT License (LICENSE.txt).
	 *
	 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
	 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
	 * Thanks to: Seamus Leahy for adding deltaX and deltaY
	 *
	 * Version: 3.0.6
	 * 
	 * Requires: 1.2.2+
	 */
	(function(a){function d(b){var c=b||window.event,d=[].slice.call(arguments,1),e=0,f=!0,g=0,h=0;return b=a.event.fix(c),b.type="mousewheel",c.wheelDelta&&(e=c.wheelDelta/120),c.detail&&(e=-c.detail/3),h=e,c.axis!==undefined&&c.axis===c.HORIZONTAL_AXIS&&(h=0,g=-1*e),c.wheelDeltaY!==undefined&&(h=c.wheelDeltaY/120),c.wheelDeltaX!==undefined&&(g=-1*c.wheelDeltaX/120),d.unshift(b,e,g,h),(a.event.dispatch||a.event.handle).apply(this,d)}var b=["DOMMouseScroll","mousewheel"];if(a.event.fixHooks)for(var c=b.length;c;)a.event.fixHooks[b[--c]]=a.event.mouseHooks;a.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var a=b.length;a;)this.addEventListener(b[--a],d,!1);else this.onmousewheel=d},teardown:function(){if(this.removeEventListener)for(var a=b.length;a;)this.removeEventListener(b[--a],d,!1);else this.onmousewheel=null}},a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})})(jQuery)

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(jQuery) {/*
	 * @fileOverview TouchSwipe - jQuery Plugin
	 * @version 1.6.6
	 *
	 * @author Matt Bryson http://www.github.com/mattbryson
	 * @see https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
	 * @see http://labs.skinkers.com/touchSwipe/
	 * @see http://plugins.jquery.com/project/touchSwipe
	 *
	 * Copyright (c) 2010 Matt Bryson
	 * Dual licensed under the MIT or GPL Version 2 licenses.
	 *
	 */

	(function(a){if("function"==="function"&&__webpack_require__(9)&&__webpack_require__(9).jQuery){!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (a), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))}else{a(jQuery)}}(function(f){var p="left",o="right",e="up",x="down",c="in",z="out",m="none",s="auto",l="swipe",t="pinch",A="tap",j="doubletap",b="longtap",y="hold",D="horizontal",u="vertical",i="all",r=10,g="start",k="move",h="end",q="cancel",a="ontouchstart" in window,v=window.navigator.msPointerEnabled&&!window.navigator.pointerEnabled,d=window.navigator.pointerEnabled||window.navigator.msPointerEnabled,B="TouchSwipe";var n={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,hold:null,triggerOnTouchEnd:true,triggerOnTouchLeave:false,allowPageScroll:"auto",fallbackToMouseEvents:true,excludedElements:"label, button, input, select, textarea, a, .noSwipe"};f.fn.swipe=function(G){var F=f(this),E=F.data(B);if(E&&typeof G==="string"){if(E[G]){return E[G].apply(this,Array.prototype.slice.call(arguments,1))}else{f.error("Method "+G+" does not exist on jQuery.swipe")}}else{if(!E&&(typeof G==="object"||!G)){return w.apply(this,arguments)}}return F};f.fn.swipe.defaults=n;f.fn.swipe.phases={PHASE_START:g,PHASE_MOVE:k,PHASE_END:h,PHASE_CANCEL:q};f.fn.swipe.directions={LEFT:p,RIGHT:o,UP:e,DOWN:x,IN:c,OUT:z};f.fn.swipe.pageScroll={NONE:m,HORIZONTAL:D,VERTICAL:u,AUTO:s};f.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,ALL:i};function w(E){if(E&&(E.allowPageScroll===undefined&&(E.swipe!==undefined||E.swipeStatus!==undefined))){E.allowPageScroll=m}if(E.click!==undefined&&E.tap===undefined){E.tap=E.click}if(!E){E={}}E=f.extend({},f.fn.swipe.defaults,E);return this.each(function(){var G=f(this);var F=G.data(B);if(!F){F=new C(this,E);G.data(B,F)}})}function C(a4,av){var az=(a||d||!av.fallbackToMouseEvents),J=az?(d?(v?"MSPointerDown":"pointerdown"):"touchstart"):"mousedown",ay=az?(d?(v?"MSPointerMove":"pointermove"):"touchmove"):"mousemove",U=az?(d?(v?"MSPointerUp":"pointerup"):"touchend"):"mouseup",S=az?null:"mouseleave",aD=(d?(v?"MSPointerCancel":"pointercancel"):"touchcancel");var ag=0,aP=null,ab=0,a1=0,aZ=0,G=1,aq=0,aJ=0,M=null;var aR=f(a4);var Z="start";var W=0;var aQ=null;var T=0,a2=0,a5=0,ad=0,N=0;var aW=null,af=null;try{aR.bind(J,aN);aR.bind(aD,a9)}catch(ak){f.error("events not supported "+J+","+aD+" on jQuery.swipe")}this.enable=function(){aR.bind(J,aN);aR.bind(aD,a9);return aR};this.disable=function(){aK();return aR};this.destroy=function(){aK();aR.data(B,null);return aR};this.option=function(bc,bb){if(av[bc]!==undefined){if(bb===undefined){return av[bc]}else{av[bc]=bb}}else{f.error("Option "+bc+" does not exist on jQuery.swipe.options")}return null};function aN(bd){if(aB()){return}if(f(bd.target).closest(av.excludedElements,aR).length>0){return}var be=bd.originalEvent?bd.originalEvent:bd;var bc,bb=a?be.touches[0]:be;Z=g;if(a){W=be.touches.length}else{bd.preventDefault()}ag=0;aP=null;aJ=null;ab=0;a1=0;aZ=0;G=1;aq=0;aQ=aj();M=aa();R();if(!a||(W===av.fingers||av.fingers===i)||aX()){ai(0,bb);T=at();if(W==2){ai(1,be.touches[1]);a1=aZ=au(aQ[0].start,aQ[1].start)}if(av.swipeStatus||av.pinchStatus){bc=O(be,Z)}}else{bc=false}if(bc===false){Z=q;O(be,Z);return bc}else{if(av.hold){af=setTimeout(f.proxy(function(){aR.trigger("hold",[be.target]);if(av.hold){bc=av.hold.call(aR,be,be.target)}},this),av.longTapThreshold)}ao(true)}return null}function a3(be){var bh=be.originalEvent?be.originalEvent:be;if(Z===h||Z===q||am()){return}var bd,bc=a?bh.touches[0]:bh;var bf=aH(bc);a2=at();if(a){W=bh.touches.length}if(av.hold){clearTimeout(af)}Z=k;if(W==2){if(a1==0){ai(1,bh.touches[1]);a1=aZ=au(aQ[0].start,aQ[1].start)}else{aH(bh.touches[1]);aZ=au(aQ[0].end,aQ[1].end);aJ=ar(aQ[0].end,aQ[1].end)}G=a7(a1,aZ);aq=Math.abs(a1-aZ)}if((W===av.fingers||av.fingers===i)||!a||aX()){aP=aL(bf.start,bf.end);al(be,aP);ag=aS(bf.start,bf.end);ab=aM();aI(aP,ag);if(av.swipeStatus||av.pinchStatus){bd=O(bh,Z)}if(!av.triggerOnTouchEnd||av.triggerOnTouchLeave){var bb=true;if(av.triggerOnTouchLeave){var bg=aY(this);bb=E(bf.end,bg)}if(!av.triggerOnTouchEnd&&bb){Z=aC(k)}else{if(av.triggerOnTouchLeave&&!bb){Z=aC(h)}}if(Z==q||Z==h){O(bh,Z)}}}else{Z=q;O(bh,Z)}if(bd===false){Z=q;O(bh,Z)}}function L(bb){var bc=bb.originalEvent;if(a){if(bc.touches.length>0){F();return true}}if(am()){W=ad}a2=at();ab=aM();if(ba()||!an()){Z=q;O(bc,Z)}else{if(av.triggerOnTouchEnd||(av.triggerOnTouchEnd==false&&Z===k)){bb.preventDefault();Z=h;O(bc,Z)}else{if(!av.triggerOnTouchEnd&&a6()){Z=h;aF(bc,Z,A)}else{if(Z===k){Z=q;O(bc,Z)}}}}ao(false);return null}function a9(){W=0;a2=0;T=0;a1=0;aZ=0;G=1;R();ao(false)}function K(bb){var bc=bb.originalEvent;if(av.triggerOnTouchLeave){Z=aC(h);O(bc,Z)}}function aK(){aR.unbind(J,aN);aR.unbind(aD,a9);aR.unbind(ay,a3);aR.unbind(U,L);if(S){aR.unbind(S,K)}ao(false)}function aC(bf){var be=bf;var bd=aA();var bc=an();var bb=ba();if(!bd||bb){be=q}else{if(bc&&bf==k&&(!av.triggerOnTouchEnd||av.triggerOnTouchLeave)){be=h}else{if(!bc&&bf==h&&av.triggerOnTouchLeave){be=q}}}return be}function O(bd,bb){var bc=undefined;if(I()||V()){bc=aF(bd,bb,l)}else{if((P()||aX())&&bc!==false){bc=aF(bd,bb,t)}}if(aG()&&bc!==false){bc=aF(bd,bb,j)}else{if(ap()&&bc!==false){bc=aF(bd,bb,b)}else{if(ah()&&bc!==false){bc=aF(bd,bb,A)}}}if(bb===q){a9(bd)}if(bb===h){if(a){if(bd.touches.length==0){a9(bd)}}else{a9(bd)}}return bc}function aF(be,bb,bd){var bc=undefined;if(bd==l){aR.trigger("swipeStatus",[bb,aP||null,ag||0,ab||0,W,aQ]);if(av.swipeStatus){bc=av.swipeStatus.call(aR,be,bb,aP||null,ag||0,ab||0,W,aQ);if(bc===false){return false}}if(bb==h&&aV()){aR.trigger("swipe",[aP,ag,ab,W,aQ]);if(av.swipe){bc=av.swipe.call(aR,be,aP,ag,ab,W,aQ);if(bc===false){return false}}switch(aP){case p:aR.trigger("swipeLeft",[aP,ag,ab,W,aQ]);if(av.swipeLeft){bc=av.swipeLeft.call(aR,be,aP,ag,ab,W,aQ)}break;case o:aR.trigger("swipeRight",[aP,ag,ab,W,aQ]);if(av.swipeRight){bc=av.swipeRight.call(aR,be,aP,ag,ab,W,aQ)}break;case e:aR.trigger("swipeUp",[aP,ag,ab,W,aQ]);if(av.swipeUp){bc=av.swipeUp.call(aR,be,aP,ag,ab,W,aQ)}break;case x:aR.trigger("swipeDown",[aP,ag,ab,W,aQ]);if(av.swipeDown){bc=av.swipeDown.call(aR,be,aP,ag,ab,W,aQ)}break}}}if(bd==t){aR.trigger("pinchStatus",[bb,aJ||null,aq||0,ab||0,W,G,aQ]);if(av.pinchStatus){bc=av.pinchStatus.call(aR,be,bb,aJ||null,aq||0,ab||0,W,G,aQ);if(bc===false){return false}}if(bb==h&&a8()){switch(aJ){case c:aR.trigger("pinchIn",[aJ||null,aq||0,ab||0,W,G,aQ]);if(av.pinchIn){bc=av.pinchIn.call(aR,be,aJ||null,aq||0,ab||0,W,G,aQ)}break;case z:aR.trigger("pinchOut",[aJ||null,aq||0,ab||0,W,G,aQ]);if(av.pinchOut){bc=av.pinchOut.call(aR,be,aJ||null,aq||0,ab||0,W,G,aQ)}break}}}if(bd==A){if(bb===q||bb===h){clearTimeout(aW);clearTimeout(af);if(Y()&&!H()){N=at();aW=setTimeout(f.proxy(function(){N=null;aR.trigger("tap",[be.target]);if(av.tap){bc=av.tap.call(aR,be,be.target)}},this),av.doubleTapThreshold)}else{N=null;aR.trigger("tap",[be.target]);if(av.tap){bc=av.tap.call(aR,be,be.target)}}}}else{if(bd==j){if(bb===q||bb===h){clearTimeout(aW);N=null;aR.trigger("doubletap",[be.target]);if(av.doubleTap){bc=av.doubleTap.call(aR,be,be.target)}}}else{if(bd==b){if(bb===q||bb===h){clearTimeout(aW);N=null;aR.trigger("longtap",[be.target]);if(av.longTap){bc=av.longTap.call(aR,be,be.target)}}}}}return bc}function an(){var bb=true;if(av.threshold!==null){bb=ag>=av.threshold}return bb}function ba(){var bb=false;if(av.cancelThreshold!==null&&aP!==null){bb=(aT(aP)-ag)>=av.cancelThreshold}return bb}function ae(){if(av.pinchThreshold!==null){return aq>=av.pinchThreshold}return true}function aA(){var bb;if(av.maxTimeThreshold){if(ab>=av.maxTimeThreshold){bb=false}else{bb=true}}else{bb=true}return bb}function al(bb,bc){if(av.allowPageScroll===m||aX()){bb.preventDefault()}else{var bd=av.allowPageScroll===s;switch(bc){case p:if((av.swipeLeft&&bd)||(!bd&&av.allowPageScroll!=D)){bb.preventDefault()}break;case o:if((av.swipeRight&&bd)||(!bd&&av.allowPageScroll!=D)){bb.preventDefault()}break;case e:if((av.swipeUp&&bd)||(!bd&&av.allowPageScroll!=u)){bb.preventDefault()}break;case x:if((av.swipeDown&&bd)||(!bd&&av.allowPageScroll!=u)){bb.preventDefault()}break}}}function a8(){var bc=aO();var bb=X();var bd=ae();return bc&&bb&&bd}function aX(){return !!(av.pinchStatus||av.pinchIn||av.pinchOut)}function P(){return !!(a8()&&aX())}function aV(){var be=aA();var bg=an();var bd=aO();var bb=X();var bc=ba();var bf=!bc&&bb&&bd&&bg&&be;return bf}function V(){return !!(av.swipe||av.swipeStatus||av.swipeLeft||av.swipeRight||av.swipeUp||av.swipeDown)}function I(){return !!(aV()&&V())}function aO(){return((W===av.fingers||av.fingers===i)||!a)}function X(){return aQ[0].end.x!==0}function a6(){return !!(av.tap)}function Y(){return !!(av.doubleTap)}function aU(){return !!(av.longTap)}function Q(){if(N==null){return false}var bb=at();return(Y()&&((bb-N)<=av.doubleTapThreshold))}function H(){return Q()}function ax(){return((W===1||!a)&&(isNaN(ag)||ag<av.threshold))}function a0(){return((ab>av.longTapThreshold)&&(ag<r))}function ah(){return !!(ax()&&a6())}function aG(){return !!(Q()&&Y())}function ap(){return !!(a0()&&aU())}function F(){a5=at();ad=event.touches.length+1}function R(){a5=0;ad=0}function am(){var bb=false;if(a5){var bc=at()-a5;if(bc<=av.fingerReleaseThreshold){bb=true}}return bb}function aB(){return !!(aR.data(B+"_intouch")===true)}function ao(bb){if(bb===true){aR.bind(ay,a3);aR.bind(U,L);if(S){aR.bind(S,K)}}else{aR.unbind(ay,a3,false);aR.unbind(U,L,false);if(S){aR.unbind(S,K,false)}}aR.data(B+"_intouch",bb===true)}function ai(bc,bb){var bd=bb.identifier!==undefined?bb.identifier:0;aQ[bc].identifier=bd;aQ[bc].start.x=aQ[bc].end.x=bb.pageX||bb.clientX;aQ[bc].start.y=aQ[bc].end.y=bb.pageY||bb.clientY;return aQ[bc]}function aH(bb){var bd=bb.identifier!==undefined?bb.identifier:0;var bc=ac(bd);bc.end.x=bb.pageX||bb.clientX;bc.end.y=bb.pageY||bb.clientY;return bc}function ac(bc){for(var bb=0;bb<aQ.length;bb++){if(aQ[bb].identifier==bc){return aQ[bb]}}}function aj(){var bb=[];for(var bc=0;bc<=5;bc++){bb.push({start:{x:0,y:0},end:{x:0,y:0},identifier:0})}return bb}function aI(bb,bc){bc=Math.max(bc,aT(bb));M[bb].distance=bc}function aT(bb){if(M[bb]){return M[bb].distance}return undefined}function aa(){var bb={};bb[p]=aw(p);bb[o]=aw(o);bb[e]=aw(e);bb[x]=aw(x);return bb}function aw(bb){return{direction:bb,distance:0}}function aM(){return a2-T}function au(be,bd){var bc=Math.abs(be.x-bd.x);var bb=Math.abs(be.y-bd.y);return Math.round(Math.sqrt(bc*bc+bb*bb))}function a7(bb,bc){var bd=(bc/bb)*1;return bd.toFixed(2)}function ar(){if(G<1){return z}else{return c}}function aS(bc,bb){return Math.round(Math.sqrt(Math.pow(bb.x-bc.x,2)+Math.pow(bb.y-bc.y,2)))}function aE(be,bc){var bb=be.x-bc.x;var bg=bc.y-be.y;var bd=Math.atan2(bg,bb);var bf=Math.round(bd*180/Math.PI);if(bf<0){bf=360-Math.abs(bf)}return bf}function aL(bc,bb){var bd=aE(bc,bb);if((bd<=45)&&(bd>=0)){return p}else{if((bd<=360)&&(bd>=315)){return p}else{if((bd>=135)&&(bd<=225)){return o}else{if((bd>45)&&(bd<135)){return x}else{return e}}}}}function at(){var bb=new Date();return bb.getTime()}function aY(bb){bb=f(bb);var bd=bb.offset();var bc={left:bd.left,right:bd.left+bb.outerWidth(),top:bd.top,bottom:bd.top+bb.outerHeight()};return bc}function E(bb,bc){return(bb.x>bc.left&&bb.x<bc.right&&bb.y>bc.top&&bb.y<bc.bottom)}}}));
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 9 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;

	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {window.cookieconsent_options={message:"This website uses cookies to ensure you get the best experience on our website",dismiss:"Got it!",learnMore:"More info",link:"https://www.daytranslations.com/privacy-policy",theme:"dark-top"},!function(){console.log("script init"),jQuery.ajax({url:"/cookie-consent.php",type:"GET",dataType:"json"}).done(function(json){if(console.log(json),"true"==json.cookieeligible){if(!window.hasCookieConsent){window.hasCookieConsent=!0;var e="cookieconsent_options",t="update_cookieconsent_options",n="cookieconsent_dismissed",i="//www.daytranslations.com/wp-content/themes/bridge-child/";if(!(document.cookie.indexOf(n)>-1)){"function"!=typeof String.prototype.trim&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")});var o,s={isArray:function(e){var t=Object.prototype.toString.call(e);return"[object Array]"==t},isObject:function(e){return"[object Object]"==Object.prototype.toString.call(e)},each:function(e,t,n,i){if(s.isObject(e)&&!i)for(var o in e)e.hasOwnProperty(o)&&t.call(n,e[o],o,e);else for(var r=0,c=e.length;c>r;r++)t.call(n,e[r],r,e)},merge:function(e,t){e&&s.each(t,function(t,n){s.isObject(t)&&s.isObject(e[n])?s.merge(e[n],t):e[n]=t})},bind:function(e,t){return function(){return e.apply(t,arguments)}},queryObject:function(e,t){var n,i=0,o=e;for(t=t.split(".");(n=t[i++])&&o.hasOwnProperty(n)&&(o=o[n]);)if(i===t.length)return o;return null},setCookie:function(e,t,n,i,o){n=n||365;var s=new Date;s.setDate(s.getDate()+n);var r=[e+"="+t,"expires="+s.toUTCString(),"path="+o||"/"];i&&r.push("domain="+i),document.cookie=r.join(";")},addEventListener:function(e,t,n){e.addEventListener?e.addEventListener(t,n):e.attachEvent("on"+t,n)}},r=function(){var e="data-cc-event",t="data-cc-if",n=function(e,t,i){return s.isArray(t)?s.each(t,function(t){n(e,t,i)}):void(e.addEventListener?e.addEventListener(t,i):e.attachEvent("on"+t,i))},i=function(e,t){return e.replace(/\{\{(.*?)\}\}/g,function(e,n){for(var i,o,r=n.split("||");o=r.shift();){if(o=o.trim(),'"'===o[0])return o.slice(1,o.length-1);if(i=s.queryObject(t,o))return i}return""})},o=function(e){var t=document.createElement("div");return t.innerHTML=e,t.children[0]},r=function(e,t,n){var i=e.parentNode.querySelectorAll("["+t+"]");s.each(i,function(e){var i=e.getAttribute(t);n(e,i)},window,!0)},c=function(t,i){r(t,e,function(e,t){var o=t.split(":"),r=s.queryObject(i,o[1]);n(e,o[0],s.bind(r,i))})},a=function(e,n){r(e,t,function(e,t){var i=s.queryObject(n,t);i||e.parentNode.removeChild(e)})};return{build:function(e,t){s.isArray(e)&&(e=e.join("")),e=i(e,t);var n=o(e);return c(n,t),a(n,t),n}}}(),c={options:{message:"This website uses cookies to ensure you get the best experience on our website. ",dismiss:"Got it!",learnMore:"More info",link:null,target:"_self",container:null,theme:"light-floating",domain:null,path:"/",expiryDays:365,markup:['<div class="cc_banner-wrapper {{containerClasses}}">','<div class="cc_banner cc_container cc_container--open">','<a href="#null" data-cc-event="click:dismiss" target="_blank" class="cc_btn cc_btn_accept_all">{{options.dismiss}}</a>','<p class="cc_message">{{options.message}} <a data-cc-if="options.link" target="{{ options.target }}" class="cc_more_info" href="{{options.link || "#null"}}">{{options.learnMore}}</a></p>','<a class="cc_logo" target="_blank" href="http://silktide.com/cookieconsent">Cookie Consent plugin for the EU cookie law</a>',"</div>","</div>"]},init:function(){var t=window[e];t&&this.setOptions(t),this.setContainer(),this.options.theme?this.loadTheme(this.render):this.render()},setOptionsOnTheFly:function(e){this.setOptions(e),this.render()},setOptions:function(e){s.merge(this.options,e)},setContainer:function(){this.options.container?this.container=document.querySelector(this.options.container):this.container=document.body,this.containerClasses="",navigator.appVersion.indexOf("MSIE 8")>-1&&(this.containerClasses+=" cc_ie8")},loadTheme:function(e){var t=this.options.theme;-1===t.indexOf(".css")&&(t=i+t+".css");var n=document.createElement("link");n.rel="stylesheet",n.type="text/css",n.href=t;var o=!1;n.onload=s.bind(function(){!o&&e&&(e.call(this),o=!0)},this),document.getElementsByTagName("head")[0].appendChild(n)},render:function(){this.element&&this.element.parentNode&&(this.element.parentNode.removeChild(this.element),delete this.element),this.element=r.build(this.options.markup,this),this.container.firstChild?this.container.insertBefore(this.element,this.container.firstChild):this.container.appendChild(this.element)},dismiss:function(e){e.preventDefault&&e.preventDefault(),e.returnValue=!1,this.setDismissedCookie(),this.container.removeChild(this.element)},setDismissedCookie:function(){s.setCookie(n,"yes",this.options.expiryDays,this.options.domain,this.options.path)}},a=!1;(o=function(){a||"complete"!=document.readyState||(c.init(),a=!0,window[t]=s.bind(c.setOptionsOnTheFly,c))})(),s.addEventListener(document,"readystatechange",o)}}}else console.log("COOKIE CONSENT FALSE")}).fail(function(xhr,status,errorThrown){console.log("Error: "+errorThrown),console.log("Status: "+status),console.dir(xhr)})}();
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {var default_min = __webpack_require__(12);

	console.log(default_min.contentMinHeight);

	!function(t, e, r, n) {
	    "use strict";
	    function a(r, n, a, o) {
	        function i() {
	            p = e.devicePixelRatio > 1, l(a), n("delay") >= 0 && setTimeout(function() {
	                u(!0);
	            }, n("delay")), (n("delay") < 0 || n("combined")) && (o.e = m(n("throttle"), function(t) {
	                "resize" === t.type && (b = v = -1), u(t.all);
	            }), o.a = function(t) {
	                l(t), a.push.apply(a, t);
	            }, o.g = function() {
	                return a;
	            }, u(), t(n("appendScroll")).on("scroll." + r.name + " resize." + r.name, o.e));
	        }
	        function l(e) {
	            if (e = t(e).filter(function() {
	                return !t(this).data(n("handledName")) && (t(this).attr(n("attribute")) || t(this).attr(n("loaderAttribute")));
	            }).data("plugin_" + r.name, r), n("defaultImage") || n("placeholder")) for (var a = 0; a < e.length; a++) {
	                var o = t(e[a]), i = e[a].tagName.toLowerCase(), l = "background-image";
	                "img" == i && n("defaultImage") && !o.attr("src") ? o.attr("src", n("defaultImage")) : "img" == i || !n("placeholder") || o.css(l) && "none" != o.css(l) || o.css(l, "url(" + n("placeholder") + ")");
	            }
	        }
	        function u(e) {
	            if (!a.length) return void (n("autoDestroy") && r.destroy());
	            for (var o = !1, i = n("imageBase") ? n("imageBase") : "", l = 0; l < a.length; l++) (function(r) {
	                if (d(r) || e) {
	                    var a, l = t(r), u = r.tagName.toLowerCase(), f = l.attr(n("attribute"));
	                    l.data(n("handledName")) || n("visibleOnly") && !l.is(":visible") || !(f && ("img" == u && i + f != l.attr("src") || "img" != u && i + f != l.css("background-image")) || (a = l.attr(n("loaderAttribute")))) || (o = !0, 
	                    l.data(n("handledName"), !0), c(l, u, i, a));
	                }
	            })(a[l]);
	            o && (a = t(a).filter(function() {
	                return !t(this).data(n("handledName"));
	            }));
	        }
	        function c(e, r, a, o) {
	            ++h;
	            var i = function() {
	                g("onError", e), A();
	            };
	            if (g("beforeLoad", e), o) e.off("error").one("error", i), e.one("load", function() {
	                n("removeAttribute") && e.removeAttr(n("loaderAttribute")), g("afterLoad", e), A();
	            }), g(o, e, function(t) {
	                t ? e.load() : e.error();
	            }) || e.error(); else {
	                var l = t(new Image());
	                l.one("error", i), l.one("load", function() {
	                    e.hide(), "img" == r ? e.attr("src", l.attr("src")) : e.css("background-image", "url(" + l.attr("src") + ")"), 
	                    e[n("effect")](n("effectTime")), n("removeAttribute") && e.removeAttr(n("attribute") + " " + n("retinaAttribute")), 
	                    g("afterLoad", e), l.remove(), A();
	                }), l.attr("src", a + e.attr(n(p && e.attr(n("retinaAttribute")) ? "retinaAttribute" : "attribute"))), 
	                l.complete && l.load();
	            }
	        }
	        function d(t) {
	            var e = t.getBoundingClientRect(), r = n("scrollDirection"), a = n("threshold"), o = s() + a > e.top && -a < e.bottom, i = f() + a > e.left && -a < e.right;
	            return "vertical" == r ? o : "horizontal" == r ? i : o && i;
	        }
	        function f() {
	            return b >= 0 ? b : b = t(e).width();
	        }
	        function s() {
	            return v >= 0 ? v : v = t(e).height();
	        }
	        function m(t, e) {
	            var a, o = 0;
	            return function(i, l) {
	                function u() {
	                    o = +new Date(), e.call(r, i);
	                }
	                var c = +new Date() - o;
	                a && clearTimeout(a), c > t || !n("enableThrottle") || l ? u() : a = setTimeout(u, t - c);
	            };
	        }
	        function A() {
	            --h, a.size() || h || g("onFinishedAll");
	        }
	        function g(t, e, a) {
	            return (t = n(t)) ? (t.apply(r, [].slice.call(arguments, 1)), !0) : !1;
	        }
	        var h = 0, b = -1, v = -1, p = !1;
	        !function() {
	            "event" == n("bind") ? i() : t(e).load(i);
	        }();
	    }
	    function o(e, r) {
	        var o = this, i = t.extend({}, o.configuration, r), l = {};
	        return o.config = function(t, e) {
	            return e === n ? i[t] : (i[t] = e, o);
	        }, o.addItems = function(e) {
	            return l.a && l.a("string" === t.type(e) ? t(e) : e), o;
	        }, o.getItems = function() {
	            return l.g ? l.g() : {};
	        }, o.update = function(t) {
	            return l.e && l.e({}, !t), o;
	        }, o.loadAll = function() {
	            return l.e && l.e({
	                all: !0
	            }, !0), o;
	        }, o.destroy = function() {
	            return t(o.config("appendScroll")).off("." + o.name, l.e), l = {}, n;
	        }, a(o, o.config, e, l), o.config("chainable") ? e : o;
	    }
	    t.fn.Lazy = t.fn.lazy = function(t) {
	        return new o(this, t);
	    }, t.extend(o.prototype, {
	        name: "lazy",
	        configuration: {
	            chainable: !0,
	            autoDestroy: !0,
	            bind: "load",
	            threshold: 500,
	            visibleOnly: !1,
	            appendScroll: e,
	            scrollDirection: "both",
	            imageBase: null,
	            defaultImage: "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
	            placeholder: null,
	            delay: -1,
	            combined: !1,
	            attribute: "data-src",
	            retinaAttribute: "data-retina",
	            loaderAttribute: "data-loader",
	            removeAttribute: !0,
	            handledName: "handled",
	            effect: "show",
	            effectTime: 0,
	            enableThrottle: !0,
	            throttle: 250,
	            beforeLoad: null,
	            afterLoad: null,
	            onError: null,
	            onFinishedAll: null
	        }
	    });
	}(jQuery, window, document);

	jQuery(function() {
	    function calculatescrollHeights() {
	        if (jQuery(".qode_carousels .slides").length) {
	            jQuery(".qode_carousels .slides").each(function() {
	                jQuery(this).parents(".caroufredsel_wrapper").css({
	                    height: jQuery(this).find("li.item").outerHeight() + "px"
	                });
	            });
	        }
	    }
	    calculatescrollHeights();
	    console.log("lazy executed");
	});

	function social_carousel_heights() {
	    jQuery(".social_carousel_wrapper").length && jQuery(".social_carousel").each(function() {
	        jQuery(this).parents(".caroufredsel_wrapper").css({
	            height: jQuery(this).find("li").outerHeight() + 55 + "px"
	        }), jQuery(".list_btn1 .prev2").css({
	            height: jQuery(this).find("li").outerHeight() + 2 + "px"
	        }), jQuery(".list_btn1 .next2").css({
	            height: jQuery(this).find("li").outerHeight() + 2 + "px"
	        }), jQuery(".list_btn1 .prev2").css({
	            width: jQuery(this).find("li").outerWidth() / 2 + 13 + "px"
	        }), jQuery(".list_btn1 .next2").css({
	            width: jQuery(this).find("li").outerWidth() / 2 + 13 + "px"
	        });
	    });
	}

	function service_carousel_heights() {
	    jQuery(".service_carousel_wrapper").length && jQuery(".service_carousel").each(function() {
	        jQuery(this).parents(".caroufredsel_wrapper").css({
	            height: jQuery(this).find("li").outerHeight() + 50 + "px"
	        }), jQuery(".list_btn1 .prev2").css({
	            height: jQuery(this).find("li").outerHeight() + 2 + "px"
	        }), jQuery(".list_btn1 .next2").css({
	            height: jQuery(this).find("li").outerHeight() + 2 + "px"
	        });
	    });
	}

	function dt_carousel_heights() {
	    jQuery(".dt_carousel_wrapper").length && jQuery(".dt_carousel").each(function() {
	        jQuery(this).parents(".caroufredsel_wrapper").css({
	            height: jQuery(this).find("li").outerHeight() + 80 + "px"
	        }), jQuery(".list_btn1 .prev2").css({
	            height: jQuery(this).find("li").outerHeight() + 2 + "px"
	        }), jQuery(".list_btn1 .next2").css({
	            height: jQuery(this).find("li").outerHeight() + 2 + "px"
	        }), jQuery(window).width() > 480 && jQuery(".dt_carousel").css({
	            "margin-left": "-" + (jQuery(this).find("li").outerWidth() / 2 + 13) + "px"
	        }), jQuery(".list_btn1 .prev2").css({
	            width: jQuery(this).find("li").outerWidth() / 2 + 13 + "px"
	        }), jQuery(".list_btn1 .next2").css({
	            width: jQuery(this).find("li").outerWidth() / 2 + 13 + "px"
	        });
	    });
	}

	!function() {
	    "use strict";
	    var e = !1;
	    jQuery(document).ready(function() {
	        jQuery(".social_carousel_wrapper").length && (jQuery(".social_carousel_wrapper").each(function() {
	            jQuery(this).find(".social_carousel").carouFredSel({
	                circular: !0,
	                responsive: !0,
	                scroll: {
	                    items: 1,
	                    duration: 1e3,
	                    pauseOnHover: !1
	                },
	                items: {
	                    width: 500,
	                    visible: {
	                        min: 1,
	                        max: 4
	                    }
	                },
	                auto: !1,
	                mousewheel: !1,
	                swipe: {
	                    onMouse: !0,
	                    onTouch: !0
	                },
	                prev: {
	                    button: function() {
	                        return jQuery(this).parents().eq(1).find(".prev2");
	                    }
	                },
	                next: {
	                    button: function() {
	                        return jQuery(this).parents().eq(1).find(".next2");
	                    }
	                },
	                onCreate: function(e) {
	                    console.log(jQuery(this).parents(".social_carousel_wrapper")), jQuery(this).parents(".social_carousel_wrapper").removeClass("social_carousel-beforeLoad");
	                }
	            }).animate({
	                opacity: 1
	            }, 1e3);
	        }), social_carousel_heights()), jQuery(".service_carousel_wrapper").length && (jQuery(".service_carousel_wrapper").each(function() {
	            jQuery(this).find(".service_carousel").carouFredSel({
	                circular: !0,
	                responsive: !0,
	                scroll: {
	                    items: 1,
	                    duration: 1e3,
	                    pauseOnHover: !1
	                },
	                items: {
	                    width: 300,
	                    visible: {
	                        min: 1,
	                        max: 6
	                    }
	                },
	                auto: !1,
	                mousewheel: !1,
	                swipe: {
	                    onMouse: !0,
	                    onTouch: !0
	                },
	                prev: {
	                    button: function() {
	                        return jQuery(this).parents().eq(1).find(".prev2");
	                    }
	                },
	                next: {
	                    button: function() {
	                        return jQuery(this).parents().eq(1).find(".next2");
	                    }
	                }
	            }).animate({
	                opacity: 1
	            }, 1e3);
	        }), service_carousel_heights()), jQuery(".dt_carousel_wrapper").length && (jQuery(".dt_carousel_wrapper").each(function() {
	            jQuery(this).find(".dt_carousel").carouFredSel({
	                circular: !0,
	                responsive: !0,
	                scroll: {
	                    items: 1,
	                    duration: 1e3,
	                    pauseOnHover: !1
	                },
	                items: {
	                    width: 400,
	                    visible: {
	                        min: 1,
	                        max: 6
	                    }
	                },
	                auto: !1,
	                mousewheel: !1,
	                swipe: {
	                    onMouse: !0,
	                    onTouch: !0
	                },
	                prev: {
	                    button: function() {
	                        return jQuery(this).parents().eq(1).find(".prev2");
	                    }
	                },
	                next: {
	                    button: function() {
	                        return jQuery(this).parents().eq(1).find(".next2");
	                    }
	                }
	            }).animate({
	                opacity: 1
	            }, 1e3);
	            console.log("dt_carousel");
	        }), dt_carousel_heights());
	    }), jQuery(window).bind("load", function() {
	        jQuery(".accordion").on("accordionactivate", function(r, t) {
	            if (!e) return void (e = !0);
	            var i = jQuery(this).scrollTop();
	            if (t.newHeader.length) {
	                var s = jQuery(t.newHeader).offset().top;
	                jQuery("html,body").animate({
	                    scrollTop: i + s - 80
	                }, "fast");
	            }
	        });
	        if (!jQuery("body").hasClass("page-template-templatesformconfirmation-php")) {
	            window.$zopim = function(d, s) {
	                var z = $zopim = function(c) {
	                    z._.push(c);
	                    console.log(c);
	                    alert(c);
	                }, $ = z.s = d.createElement(s), e = d.getElementsByTagName(s)[0];
	                z.set = function(o) {
	                    z.set._.push(o);
	                };
	                z._ = [];
	                z.set._ = [];
	                $.setAttribute("charset", "utf-8");
	                $.src = "//v2.zopim.com/?NJVdD1uUjFJQKnG85JTMG3wrUnm21kED";
	                z.t = +new Date();
	                $.type = "text/javascript";
	                e.parentNode.insertBefore($, e);
	            };
	            window.$zopim(document, "script");
	        }
	        function calculatescrollHeights() {
	            if (jQuery(".qode_carousels .slides").length) {
	                jQuery(".qode_carousels .slides").each(function() {
	                    jQuery(this).parents(".caroufredsel_wrapper").css({
	                        height: jQuery(this).find("li.item").outerHeight() + "px"
	                    });
	                });
	            }
	        }
	        calculatescrollHeights();
	    }), jQuery.fn.menumaker = function(e) {
	        var r = jQuery(this), t = jQuery.extend({
	            title: " ",
	            format: "dropdown",
	            sticky: !1
	        }, e);
	        return this.each(function() {
	            var e = jQuery(this).attr("data-name");
	            if (e === undefined) {
	                var e = " ";
	            }
	            if (e.length < 1) var e = " ";
	            return r.prepend('<div id="menu-button">' + e + "</div>"), jQuery(this).find("#menu-button").on("click", function() {
	                jQuery(this).toggleClass("menu-opened");
	                var e = jQuery(this).next("ul");
	                e.hasClass("open") ? e.hide().removeClass("open") : (e.show().addClass("open"), 
	                "dropdown" === t.format && e.find("ul").show());
	            }), t.sticky === !0 && r.css("position", "fixed"), jQuery(window).on("resize", function() {
	                jQuery(window).width() > 768 && r.find("ul").show(), jQuery(window).width() <= 768 && r.find("ul").hide().removeClass("open");
	            });
	        });
	    };
	}(jQuery), jQuery.fn.stars = function() {
	    return jQuery(this).each(function() {
	        var e = parseFloat(jQuery(this).html()), r = 22 * Math.max(0, Math.min(5, e)), t = jQuery("<span />").width(r);
	        jQuery(this).html(t);
	    });
	}, jQuery(function() {
	    jQuery("span.stars").length > 0 && jQuery("span.stars").stars();
	}), jQuery(function() {
	    jQuery(".qode_carousels").each(function() {
	        var e = "";
	        e = '<a class="foo2_prev" href="#"><span class="fa-stack"><i class="fa fa-angle-left" style=""></i></span></a><a class="foo2_next" href="#"><span class="fa-stack"><i class="fa fa-angle-right" style=""></i></span></a>', 
	        jQuery(this).prepend(e);
	        var r = jQuery(this).find("li").outerHeight() + 2, t = jQuery(this).find("li").outerWidth() / 2 + 13;
	        jQuery(".foo2_prev").css({
	            height: r + "px"
	        }), jQuery(".foo2_next").css({
	            height: r + "px"
	        }), jQuery(".foo2_prev").css({
	            width: t + "px"
	        }), jQuery(".foo2_next").css({
	            width: t + "px"
	        }), jQuery(".foo2_prev").css({
	            left: -40,
	            position: "absolute",
	            "z-index": "99",
	            top: "46%"
	        }), jQuery(".foo2_next").css({
	            right: -40,
	            position: "absolute",
	            "z-index": "99",
	            top: "46%"
	        });
	    }), jQuery(".foo2_prev").click(function() {
	        jQuery(".slides").trigger("prev", 1), event.preventDefault();
	    }), jQuery(".foo2_next").click(function() {
	        jQuery(".slides").trigger("next"), event.preventDefault();
	    });
	}), jQuery(function() {
	    if (window.location.hash.length > 0) return "#formfillup" == window.location.hash ? (jQuery("html, body").animate({
	        scrollTop: jQuery(window.location.hash).offset().top - 140
	    }, 500), !1) : (jQuery("html, body").animate({
	        scrollTop: jQuery(window.location.hash).offset().top - 70
	    }, 500), !1);
	    jQuery("#FormFillUpId").click(function() {
	        jQuery("html, body").animate({
	            scrollTop: jQuery("#formfillup").offset().top - 140
	        }, 500);
	    });
	    document.getElementsByTagName("video"), document.getElementsByTagName("video").length;
	    jQuery("#videocover").click(function() {
	        jQuery(".video").children("source").length;
	        if (jQuery(".video").hasClass("videoloaded")) {
	            var e = jQuery("video").get(0);
	            e.play(), jQuery("#videocover").css("visibility", "hidden");
	        } else jQuery(".video source").each(function(e) {
	            var r = jQuery(this).attr("data-src");
	            if (console.log(r), console.log(jQuery(this)), jQuery(this).attr("src", r), console.log(e), 
	            2 == e) {
	                var t = jQuery("video").get(0);
	                t.load(), t.play(), jQuery(".video").addClass("videoloaded"), jQuery("#videocover").css("visibility", "hidden"), 
	                jQuery("#videocover").addClass("videocover-disabled");
	            }
	        });
	        return !1;
	    }), jQuery("video").bind("pause ended", function() {
	        jQuery("#videocover").css("visibility", "visible");
	    });
	});

	jQuery(function() {
	    jQuery(window).resize(function() {
	        if (jQuery(window).width() > 767 || jQuery(window).width() < 1025) {
	            //contentMinHeight();
	            default_min.contentMinHeight();
	            default_min.contentMinHeightWithPaspartu();
	            default_min.setDropDownMenuPosition();
	            default_min.initDropDownMenu();
	            default_min.initVerticalMenu();
	            default_min.initVerticalMobileMenu();
	            // setDropDownMenuPosition();
	        }
	    });
	    jQuery("#cssmenu").menumaker({
	        title: "Menu",
	        format: "dropdown"
	    });
	    console.log("combine JS");

	    jQuery(this).find(".human_carousel").carouFredSel({circular:!0,responsive:!0,scroll:{items:1,duration:500,pauseOnHover:!0},items:{width:400,visible:{min:1,max:3}},auto:!1,mousewheel:!1,swipe:{onMouse:!0,onTouch:!0},prev:{button:function(){return jQuery(this).parents().eq(1).find(".prev")}},next:{button:function(){return jQuery(this).parents().eq(1).find(".next")}},onCreate: function(e) {console.log('loaded');
	    if (jQuery(".lazy-image-placeholder").length) {
	            jQuery(".lazy-image-placeholder").each(function() {
	  var placeholder = jQuery(this),
	      small = jQuery(this).find('.human-smallpic');  
	  small.css("height","auto")
	  // 2: load large image
	  var imgLarge = new Image();
	  imgLarge.src = jQuery(this).attr('data-large'); 
	  // console.log(jQuery(this).attr('data-large'));
	  imgLarge.classList.add('img-large');    
	  imgLarge.onload = function () {
	    imgLarge.classList.add('loaded');    
	  };              
	  placeholder.append(imgLarge);
	  });
	  }
	    }}).animate({opacity:1},5e3);
	    jQuery(this).find(".trustpilot_carousel").carouFredSel({circular:!0,responsive:!0,scroll:{items:1,duration:500,pauseOnHover:!1},items:{width:400,visible:{min:1,max:3}},auto:!1,mousewheel:!1,swipe:{onMouse:!0,onTouch:!0},prev:{button:function(){return jQuery(this).parents().eq(1).find(".prev")}},next:{button:function(){return jQuery(this).parents().eq(1).find(".next")}}}).animate({opacity:1},5e3);
	    // jQuery('#beforeafter1').beforeAfter({showFullLinks : false,imagePath :'/wp-content/themes/bridge-child/images/',dividerColor: '#2178b8'});
	    jQuery(this).find(".employeesLove_carousel").carouFredSel({circular:!0,responsive:!0,scroll:{items:1,duration:500,pauseOnHover:!1},items:{width:500,visible:{min:1,max:2}},auto:!1,mousewheel:!1,swipe:{onMouse:!0,onTouch:!0},prev:{button:function(){return jQuery(this).parents().eq(1).find(".prev")}},next:{button:function(){return jQuery(this).parents().eq(1).find(".next")}}}).animate({opacity:1},5e3)
	});
	jQuery(window).bind("load", function() {
	   jQuery('#beforeafter1').beforeAfter({showFullLinks : false,imagePath :'/wp-content/themes/bridge-child/images/',dividerColor: '#2178b8'}); 
	});

	// jQuery(window).bind("load", function() {
	  
	//   if (jQuery(".lazy-image-placeholder").length) {
	//             jQuery(".lazy-image-placeholder").each(function() {
	//   var placeholder = jQuery(this),
	//       small = jQuery(this).find('.img-small');  
	  
	//   // 2: load large image
	//   var imgLarge = new Image();
	//   imgLarge.src = jQuery(this).attr('data-large'); 
	//   // console.log(jQuery(this).attr('data-large'));
	//   imgLarge.classList.add('img-large');    
	//   imgLarge.onload = function () {
	//     imgLarge.classList.add('loaded');    
	//   };              
	//   placeholder.append(imgLarge);
	//   });
	//   }

	// });
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {var default_dynamic_var = __webpack_require__(13);

	console.log(default_dynamic_var.scroll_amount_for_sticky);

	var min_header_height_scroll = default_dynamic_var.min_header_height_scroll;

	var header_height = default_dynamic_var.header_height;

	var exports = module.exports = {};


	var $j = jQuery.noConflict();

	var $scroll = 0;

	var $window_width = $j(window).width();

	var $window_height = $j(window).height();

	var logo_height = default_dynamic_var.logo_height;

	var menu_dropdown_height_set = false;

	var sticky_amount = 0;

	var content_menu_position;

	var content_menu_top;

	var content_menu_top_add = 0;

	var src;

	var next_image;

	var prev_image;

	var $top_header_height;

	var min_w = 1500;

	var video_width_original = 1280;

	var video_height_original = 720;

	var vid_ratio = 1280 / 720;

	//var skrollr_slider;

	var paspartu_width;

	if (typeof paspartu_width_init == "undefined") {
	    var paspartu_width_init = .02;
	}

	var sticky_animate;

	function headerSize($scroll) {
	    "use strict";
	    if ($j("header.page_header").hasClass("scroll_top") && $j("header.page_header").hasClass("has_top") && ($j("header.page_header").hasClass("fixed") || $j("header.page_header").hasClass("fixed_hiding"))) {
	        if ($scroll >= 0 && $scroll <= 34) {
	            $j("header.page_header").css("top", -$scroll);
	            $j("header.page_header").css("margin-top", 0);
	            $j(".header_top").show();
	        } else if ($scroll > 34) {
	            $j("header.page_header").css("top", "-34px");
	            $j("header.page_header").css("margin-top", 34);
	            $j(".header_top").hide();
	        }
	    }
	    if (typeof page_scroll_amount_for_sticky !== "undefined") {
	        sticky_amount = page_scroll_amount_for_sticky;
	    } else if ($j(".carousel.full_screen").length) {
	        sticky_amount = $j(".carousel").height();
	    } else {
	        sticky_amount = default_dynamic_var.scroll_amount_for_sticky;
	    }
	    if ($j("header").hasClass("regular")) {
	        if (header_height - logo_height >= 10) {
	            $j(".q_logo a").height(logo_height);
	        } else {
	            $j(".q_logo a").height(header_height - 10);
	        }
	        $j(".q_logo a img").css("height", "100%");
	    }
	    if ($j("header.page_header").hasClass("fixed")) {
	        if ($j("header.page_header").hasClass("scroll_top")) {
	            $top_header_height = 34;
	        } else {
	            $top_header_height = 0;
	        }
	        if (header_height - $scroll + $top_header_height >= min_header_height_scroll && $scroll >= $top_header_height) {
	            $j("header.page_header").removeClass("scrolled");
	            $j("header:not(.centered_logo.centered_logo_animate) nav.main_menu > ul > li > a").css("line-height", header_height - $scroll + $top_header_height + "px");
	            $j("header:not(.centered_logo.centered_logo_animate) .side_menu_button").css("height", header_height - $scroll + $top_header_height + "px");
	            $j("header:not(.centered_logo.centered_logo_animate) .shopping_cart_inner").css("height", header_height - $scroll + $top_header_height + "px");
	            $j("header:not(.centered_logo.centered_logo_animate) .logo_wrapper").css("height", header_height - $scroll + $top_header_height + "px");
	            if (header_height - logo_height > 0) {
	                $j("header:not(.centered_logo.centered_logo_animate) .q_logo a").css("height", logo_height + "px");
	            } else {
	                $j("header:not(.centered_logo.centered_logo_animate) .q_logo a").css("height", header_height - $scroll + $top_header_height - 10 + "px");
	            }
	        } else if ($scroll < $top_header_height) {
	            $j("header.page_header").removeClass("scrolled");
	            $j("header:not(.centered_logo.centered_logo_animate) nav.main_menu > ul > li > a").css("line-height", header_height + "px");
	            $j("header:not(.centered_logo.centered_logo_animate) .side_menu_button").css("height", header_height + "px");
	            $j("header:not(.centered_logo.centered_logo_animate) .shopping_cart_inner").css("height", header_height + "px");
	            $j("header:not(.centered_logo.centered_logo_animate) .logo_wrapper").css("height", header_height + "px");
	            if (header_height - logo_height > 0) {
	                $j("header:not(.centered_logo.centered_logo_animate) .q_logo a").css("height", logo_height + "px");
	            } else {
	                $j("header:not(.centered_logo.centered_logo_animate) .q_logo a").css("height", header_height - 10 + "px");
	            }
	        } else if (header_height - $scroll + $top_header_height < min_header_height_scroll) {
	            $j("header.page_header").addClass("scrolled");
	            $j("header:not(.centered_logo.centered_logo_animate) nav.main_menu > ul > li > a").css("line-height", min_header_height_scroll + "px");
	            $j("header:not(.centered_logo.centered_logo_animate) .side_menu_button").css("height", min_header_height_scroll + "px");
	            $j("header:not(.centered_logo.centered_logo_animate) .shopping_cart_inner").css("height", min_header_height_scroll + "px");
	            $j("header:not(.centered_logo.centered_logo_animate) .logo_wrapper").css("height", min_header_height_scroll + "px");
	            if (min_header_height_scroll - logo_height > 0) {
	                $j("header:not(.centered_logo.centered_logo_animate) .q_logo a").css("height", logo_height + "px");
	            } else {
	                $j("header:not(.centered_logo.centered_logo_animate) .q_logo a").css("height", min_header_height_scroll - 10 + "px");
	            }
	        }
	        if ($j("header.page_header").hasClass("centered_logo") && $j("header.page_header").hasClass("centered_logo_animate")) {
	            if (header_height - $scroll + $top_header_height < logo_height && header_height - $scroll + $top_header_height >= min_header_height_scroll && logo_height > min_header_height_scroll - 10 && $scroll >= $top_header_height) {
	                $j(".q_logo a").height(header_height - $scroll + $top_header_height - 10);
	            } else if (header_height - $scroll + $top_header_height < logo_height && header_height - $scroll + $top_header_height >= min_header_height_scroll && logo_height > min_header_height_scroll - 10 && $scroll < $top_header_height) {
	                $j(".q_logo a").height(header_height - 10);
	            } else if (header_height - $scroll + $top_header_height < logo_height && header_height - $scroll + $top_header_height < min_header_height_scroll && logo_height > min_header_height_scroll - 10) {
	                $j(".q_logo a").height(min_header_height_scroll - 10);
	            } else if (header_height - $scroll + $top_header_height < logo_height && header_height - $scroll + $top_header_height < min_header_height_scroll && logo_height < min_header_height_scroll - 10) {
	                $j(".q_logo a").height(logo_height);
	            } else if ($scroll + $top_header_height === 0 && logo_height > header_height - 10) {
	                $j(".q_logo a").height(logo_height);
	            } else {
	                $j(".q_logo a").height(logo_height);
	            }
	        } else if ($j("header.page_header").hasClass("centered_logo")) {
	            $j(".q_logo a").height(logo_height);
	            $j(".q_logo img").height("auto");
	        } else {
	            $j(".q_logo img").height("100%");
	        }
	    }
	    if ($j("header.page_header").hasClass("fixed_hiding")) {
	        if ($scroll < scroll_amount_for_fixed_hiding) {
	            $j("header.page_header").removeClass("scrolled");
	        } else {
	            $j("header.page_header").addClass("scrolled");
	        }
	        $j(".q_logo a").height(logo_height / 2);
	        $j(".q_logo img").height("100%");
	    }
	    if ($j("header.page_header").hasClass("stick") || $j("header.page_header").hasClass("stick_with_left_right_menu")) {
	        if ($scroll > sticky_amount) {
	            if (!$j("header.page_header").hasClass("sticky")) {
	                if ($j("header.page_header").hasClass("has_top")) {
	                    $top_header_height = 34;
	                } else {
	                    $top_header_height = 0;
	                }
	                var padding_top = $j("header.page_header").hasClass("centered_logo") ? $j("header.page_header").height() : header_height + $top_header_height;
	                if ($j("header.page_header").hasClass("menu_bottom")) {
	                    padding_top = header_height + 60;
	                }
	                $j("header.page_header").addClass("sticky");
	                $j(".content").css("padding-top", padding_top);
	                window.clearTimeout(sticky_animate);
	                sticky_animate = window.setTimeout(function() {
	                    $j("header.page_header").addClass("sticky_animate");
	                }, 100);
	                if (min_header_height_sticky - logo_height >= 10) {
	                    $j(".q_logo a").height(logo_height);
	                } else {
	                    $j(".q_logo a").height(min_header_height_sticky - 10);
	                }
	                if ($j("header.page_header").hasClass("menu_bottom")) {
	                    exports.initDropDownMenu();
	                }
	            }
	            if (min_header_height_sticky - logo_height >= 10) {
	                $j(".q_logo a").height(logo_height);
	            } else {
	                $j(".q_logo a").height(min_header_height_sticky - 10);
	            }
	        } else {
	            if ($j("header.page_header").hasClass("sticky")) {
	                $j("header").removeClass("sticky_animate");
	                $j("header").removeClass("sticky");
	                $j(".content").css("padding-top", "0px");
	                if ($j("header.page_header").hasClass("menu_bottom")) {
	                    exports.initDropDownMenu();
	                }
	            }
	            setMargingsForLeftAndRightMenu();
	            if (!$j("header.page_header").hasClass("centered_logo")) {
	                if (header_height - logo_height >= 10) {
	                    $j(".q_logo a").height(logo_height);
	                } else {
	                    $j(".q_logo a").height(header_height - 10);
	                }
	            } else {
	                $j(".q_logo a").height(logo_height);
	                $j(".q_logo img").height("auto");
	            }
	            $j(".q_logo a img").css("height", "100%");
	        }
	    }
	}

	function setMargingsForLeftAndRightMenu() {
	    "use strict";
	    if ($j("header.page_header").hasClass("stick_with_left_right_menu") && !$j("header.page_header").hasClass("left_right_margin_set")) {
	        var logo_width = $j(".q_logo a img").width() / 2;
	        if ($scroll == 0 && logo_width != 0) {
	            $j("header.page_header").addClass("left_right_margin_set");
	        }
	        $j(".logo_wrapper").width(logo_width * 2);
	        $j("nav.main_menu.left_side > ul > li:last-child").css("margin-right", logo_width);
	        $j("nav.main_menu.right_side > ul > li:first-child").css("margin-left", logo_width);
	        $j(".rtl nav.main_menu.left_side > ul > li:first-child").css("margin-right", logo_width);
	        $j(".rtl nav.main_menu.left_side > ul > li:last-child").css("margin-right", 0);
	        $j(".rtl nav.main_menu.right_side > ul > li:last-child").css("margin-left", logo_width);
	        $j(".rtl nav.main_menu.right_side > ul > li:first-child").css("margin-left", 0);
	    }
	}

	function logoSizeOnSmallScreens() {
	    "use strict";
	    if (100 - 20 < logo_height) {
	        $j(".q_logo a").height(100 - 20);
	    } else {
	        $j(".q_logo a").height(logo_height);
	    }
	    $j(".q_logo a img").css("height", "100%");
	    $j("header.page_header").removeClass("sticky_animate sticky");
	    $j(".content").css("padding-top", "0px");
	}

	exports.contentMinHeight = function() {
	    "use strict";
	    if ($j("header .header_bottom").length || $j("header .bottom_header").length) {
	        if ($j("header .header_bottom").length) {
	            var headerColorString = $j("header .header_bottom").css("background-color");
	        }
	        if ($j("header .bottom_header").length) {
	            var headerColorString = $j("header .bottom_header").css("background-color");
	        }
	        var headerTransparency = headerColorString.substring(headerColorString.indexOf("(") + 1, headerColorString.lastIndexOf(")")).split(/,\s*/)[3];
	        var haeder_add = headerTransparency == undefined && !$j("header.page_header").hasClass("transparent") ? $j("header.page_header").height() : 0;
	        $j("body .content").css("min-height", $window_height - haeder_add - $j("footer:not(.uncover)").height());
	    }
	}

	exports.contentMinHeightWithPaspartu = function() {
	    "use strict";
	    if ($j(".paspartu_enabled").length) {
	        var content_height;
	        var paspartu_final_width_px = 0;
	        var paspartu_width_px = $window_width * paspartu_width;
	        var footer_height = $j("footer").height();
	        if ($j(".disable_footer").length) {
	            footer_height = 0;
	        }
	        if ($j(".vertical_menu_enabled").length) {
	            if ($j(".paspartu_top").length && $j(".paspartu_middle_inner").length) {
	                paspartu_final_width_px += paspartu_width_px;
	            }
	        } else {
	            if ($j(".paspartu_top").length) {
	                paspartu_final_width_px += paspartu_width_px;
	            }
	        }
	        if ($j(".paspartu_bottom").length || !$j(".disable_bottom_paspartu").length) {
	            paspartu_final_width_px += paspartu_width_px;
	        }
	        if ($j(".vertical_menu_enabled").length) {
	            content_height = $window_height - paspartu_final_width_px - footer_height;
	        } else {
	            if ($j("header .header_bottom").length) {
	                var headerColorString = $j("header .header_bottom").css("background-color");
	            }
	            if ($j("header .bottom_header").length) {
	                var headerColorString = $j("header .bottom_header").css("background-color");
	            }
	            var headerTransparency = headerColorString.substring(headerColorString.indexOf("(") + 1, headerColorString.lastIndexOf(")")).split(/,\s*/)[3];
	            var header_height = headerTransparency == undefined && !$j("header.page_header").hasClass("transparent") ? $j("header.page_header").height() : 0;
	            content_height = $window_height - header_height - paspartu_final_width_px - footer_height;
	        }
	        if ($j(".content").length) {
	            $j(".content").css("min-height", content_height);
	        }
	    }
	}

	var default_header_style;

	function initQodeSlider() {
	    "use strict";
	    var image_regex = /url\(["']?([^'")]+)['"]?\)/;
	    default_header_style = "";
	    if ($j("header.page_header").hasClass("light")) {
	        default_header_style = "light";
	    }
	    if ($j("header.page_header").hasClass("dark")) {
	        default_header_style = "dark";
	    }
	    if ($j(".carousel").length) {
	        var matrixArray = {
	            zoom_center: "1.2, 0, 0, 1.2, 0, 0",
	            zoom_top_left: "1.2, 0, 0, 1.2, -150, -150",
	            zoom_top_right: "1.2, 0, 0, 1.2, 150, -150",
	            zoom_bottom_left: "1.2, 0, 0, 1.2, -150, 150",
	            zoom_bottom_right: "1.2, 0, 0, 1.2, 150, 150"
	        };
	        (function($) {
	            var matrixRE = /\([0-9epx\.\, \t\-]+/gi;
	            var parseMatrix = function(val) {
	                return val.match(matrixRE)[0].substr(1).split(",").map(function(s) {
	                    return parseFloat(s);
	                });
	            };
	            var transformPropNames = [ "transform", "-webkit-transform" ];
	            var getTransformMatrix = function(el) {
	                var matrix = null;
	                transformPropNames.some(function(prop) {
	                    matrix = el.css(prop);
	                    return matrix !== null && matrix !== "";
	                });
	                matrix = !matrix || matrix === "none" ? "matrix(1,0,0,1,0,0)" : matrix;
	                return parseMatrix(matrix);
	            };
	            var setTransformMatrix = function(el, matrix) {
	                var m = "matrix(" + matrix.join(",") + ")";
	                for (var i = transformPropNames.length - 1; i >= 0; --i) {
	                    el.css(transformPropNames[i], m + " rotate(0.01deg)");
	                }
	            };
	            var interpolate = function(from, to, percent) {
	                return from + (to - from) * (percent / 100);
	            };
	            $.fn.transformAnimate = function(opt) {
	                var options = {
	                    transform: "matrix(1,0,0,1,0,0)"
	                };
	                $.extend(options, opt);
	                this.css("percentAnim", 0);
	                var sourceTransform = getTransformMatrix(this);
	                var targetTransform = parseMatrix(options.transform);
	                options.step = function(percentAnim, fx) {
	                    var $this = $(this);
	                    var matrix = sourceTransform.map(function(c, i) {
	                        return interpolate(c, targetTransform[i], percentAnim);
	                    });
	                    setTransformMatrix($this, matrix);
	                    if (opt.step) {
	                        opt.step.apply(this, [ matrix, fx ]);
	                    }
	                };
	                return this.stop().animate({
	                    percentAnim: 100
	                }, options);
	            };
	        })(jQuery);
	        $j(".carousel").each(function() {
	            var $this = $j(this);
	            var mobile_header;
	            var mobile_header = $j(window).width() < 1e3 ? $j("header.page_header").height() : 0;
	            var header_height_add_for_paspartu = $window_width > 1e3 && !$j("header.page_header").hasClass("transparent") && $j("body.paspartu_on_top_fixed").length == 0 ? $j("header.page_header").height() : 0;
	            var paspartu_amount_with_top = $j(".paspartu_outer:not(.disable_top_paspartu)").length > 0 ? Math.round($window_width * paspartu_width + header_height_add_for_paspartu) : 0;
	            var paspartu_amount_with_bottom = $j(".paspartu_outer.paspartu_on_bottom_slider").length > 0 ? Math.round($window_width * paspartu_width) : 0;
	            var slider_graphic_coefficient;
	            var slider_title_coefficient;
	            var slider_subtitle_coefficient;
	            var slider_text_coefficient;
	            var slider_button_coefficient;
	            var responsive_breakpoint_set = [ 1300, 1e3, 768 ];
	            if ($this.hasClass("advanced_responsiveness")) {
	                responsive_breakpoint_set = [ 1600, 1200, 900, 650, 500, 320 ];
	                if ($this.data("q_responsive_breakpoints")) {
	                    if ($this.data("q_responsive_breakpoints") == "set2") {
	                        responsive_breakpoint_set = [ 1600, 1300, 1e3, 768, 567, 320 ];
	                    }
	                }
	                var coefficients_graphic_array = $this.data("q_responsive_graphic_coefficients").split(",");
	                var coefficients_title_array = $this.data("q_responsive_title_coefficients").split(",");
	                var coefficients_subtitle_array = $this.data("q_responsive_subtitle_coefficients").split(",");
	                var coefficients_text_array = $this.data("q_responsive_text_coefficients").split(",");
	                var coefficients_button_array = $this.data("q_responsive_button_coefficients").split(",");
	            }
	            function setSliderHeight($this, $def_height) {
	                var slider_height = $def_height;
	                if ($this.hasClass("advanced_responsiveness")) {
	                    if ($window_width > responsive_breakpoint_set[0]) {
	                        slider_height = $def_height;
	                    } else if ($window_width > responsive_breakpoint_set[1]) {
	                        slider_height = $def_height * .75;
	                    } else if ($window_width > responsive_breakpoint_set[2]) {
	                        slider_height = $def_height * .6;
	                    } else if ($window_width > responsive_breakpoint_set[3]) {
	                        slider_height = $def_height * .55;
	                    } else if ($window_width <= responsive_breakpoint_set[3]) {
	                        slider_height = $def_height * .45;
	                    }
	                } else {
	                    if ($window_width > responsive_breakpoint_set[0]) {
	                        slider_height = $def_height;
	                    } else if ($window_width > responsive_breakpoint_set[1]) {
	                        slider_height = $def_height * .8;
	                    } else if ($window_width > responsive_breakpoint_set[2]) {
	                        slider_height = $def_height * .7;
	                    } else if ($window_width <= responsive_breakpoint_set[2]) {
	                        slider_height = $def_height * 1;
	                    }
	                }
	                $this.css({
	                    height: slider_height + "px"
	                });
	                $this.find(".qode_slider_preloader").css({
	                    height: slider_height + "px"
	                });
	                $this.find(".qode_slider_preloader .ajax_loader").css({
	                    display: "block"
	                });
	                $this.find(".item").css({
	                    height: slider_height + "px"
	                });
	            }
	            function resetSliderHeight($def_height) {
	                $this.css({
	                    height: $def_height + "px"
	                });
	                $this.find(".qode_slider_preloader").css({
	                    height: $def_height + "px"
	                });
	                $this.find(".qode_slider_preloader .ajax_loader").css({
	                    display: "block"
	                });
	                $this.find(".item").css({
	                    height: $def_height + "px"
	                });
	            }
	            function setSliderInitialElementsSize($item, i) {
	                window["slider_graphic_width_" + i] = [];
	                window["slider_graphic_height_" + i] = [];
	                window["slider_svg_width_" + i] = [];
	                window["slider_svg_height_" + i] = [];
	                window["slider_title_" + i] = [];
	                window["slider_subtitle_" + i] = [];
	                window["slider_text_" + i] = [];
	                window["slider_button1_" + i] = [];
	                window["slider_button2_" + i] = [];
	                window["slider_separator_" + i] = [];
	                window["slider_graphic_width_" + i].push(parseFloat($item.find(".thumb img").data("width")));
	                window["slider_graphic_height_" + i].push(parseFloat($item.find(".thumb img").data("height")));
	                window["slider_svg_width_" + i].push(parseFloat($item.find(".qode_slide-svg-holder svg").attr("width")));
	                window["slider_svg_height_" + i].push(parseFloat($item.find(".qode_slide-svg-holder svg").attr("height")));
	                window["slider_title_" + i].push(parseFloat($item.find(".q_slide_title").css("font-size")));
	                window["slider_subtitle_" + i].push(parseFloat($item.find(".q_slide_subtitle").css("font-size")));
	                window["slider_text_" + i].push(parseFloat($item.find(".q_slide_text").css("font-size")));
	                window["slider_button1_" + i].push(parseFloat($item.find(".qbutton:eq(0)").css("font-size")));
	                window["slider_button2_" + i].push(parseFloat($item.find(".qbutton:eq(1)").css("font-size")));
	                window["slider_title_" + i].push(parseFloat($item.find(".q_slide_title").css("line-height")));
	                window["slider_subtitle_" + i].push(parseFloat($item.find(".q_slide_subtitle").css("line-height")));
	                window["slider_text_" + i].push(parseFloat($item.find(".q_slide_text").css("line-height")));
	                window["slider_button1_" + i].push(parseFloat($item.find(".qbutton:eq(0)").css("line-height")));
	                window["slider_button2_" + i].push(parseFloat($item.find(".qbutton:eq(1)").css("line-height")));
	                window["slider_title_" + i].push(parseFloat($item.find(".q_slide_title").css("letter-spacing")));
	                window["slider_subtitle_" + i].push(parseFloat($item.find(".q_slide_subtitle").css("letter-spacing")));
	                window["slider_text_" + i].push(parseFloat($item.find(".q_slide_text").css("letter-spacing")));
	                window["slider_button1_" + i].push(parseFloat($item.find(".qbutton:eq(0)").css("letter-spacing")));
	                window["slider_button2_" + i].push(parseFloat($item.find(".qbutton:eq(1)").css("letter-spacing")));
	                window["slider_title_" + i].push(parseFloat($item.find(".q_slide_title").css("margin-bottom")));
	                window["slider_subtitle_" + i].push(parseFloat($item.find(".q_slide_subtitle").css("margin-bottom")));
	                window["slider_button1_" + i].push(parseFloat($item.find(".qbutton:eq(0)").css("height")));
	                window["slider_button2_" + i].push(parseFloat($item.find(".qbutton:eq(1)").css("height")));
	                if (parseFloat($item.find(".qbutton:eq(0)").css("width")) != 0) {
	                    window["slider_button1_" + i].push(parseFloat($item.find(".qbutton:eq(0)").css("width")));
	                } else {
	                    window["slider_button1_" + i].push(0);
	                }
	                if (parseFloat($item.find(".qbutton:eq(1)").css("width")) != 0) {
	                    window["slider_button2_" + i].push(parseFloat($item.find(".qbutton:eq(1)").css("width")));
	                } else {
	                    window["slider_button2_" + i].push(0);
	                }
	                window["slider_button1_" + i].push(parseFloat($item.find(".qbutton:eq(0)").css("padding-left")));
	                window["slider_button2_" + i].push(parseFloat($item.find(".qbutton:eq(1)").css("padding-left")));
	                window["slider_separator_" + i].push(parseFloat($item.find(".separator").css("margin-top")));
	                window["slider_separator_" + i].push(parseFloat($item.find(".separator").css("margin-bottom")));
	            }
	            function setSliderElementsSize($item, i) {
	                if ($window_width > responsive_breakpoint_set[0]) {
	                    slider_graphic_coefficient = coefficients_graphic_array[0];
	                    slider_title_coefficient = coefficients_title_array[0];
	                    slider_subtitle_coefficient = coefficients_subtitle_array[0];
	                    slider_text_coefficient = coefficients_text_array[0];
	                    slider_button_coefficient = coefficients_button_array[0];
	                } else if ($window_width > responsive_breakpoint_set[1]) {
	                    slider_graphic_coefficient = coefficients_graphic_array[1];
	                    slider_title_coefficient = coefficients_title_array[1];
	                    slider_subtitle_coefficient = coefficients_subtitle_array[1];
	                    slider_text_coefficient = coefficients_text_array[1];
	                    slider_button_coefficient = coefficients_button_array[1];
	                } else if ($window_width > responsive_breakpoint_set[2]) {
	                    slider_graphic_coefficient = coefficients_graphic_array[2];
	                    slider_title_coefficient = coefficients_title_array[2];
	                    slider_subtitle_coefficient = coefficients_subtitle_array[2];
	                    slider_text_coefficient = coefficients_text_array[2];
	                    slider_button_coefficient = coefficients_button_array[2];
	                } else if ($window_width > responsive_breakpoint_set[3]) {
	                    slider_graphic_coefficient = coefficients_graphic_array[3];
	                    slider_title_coefficient = coefficients_title_array[3];
	                    slider_subtitle_coefficient = coefficients_subtitle_array[3];
	                    slider_text_coefficient = coefficients_text_array[3];
	                    slider_button_coefficient = coefficients_button_array[3];
	                } else if ($window_width > responsive_breakpoint_set[4]) {
	                    slider_graphic_coefficient = coefficients_graphic_array[4];
	                    slider_title_coefficient = coefficients_title_array[4];
	                    slider_subtitle_coefficient = coefficients_subtitle_array[4];
	                    slider_text_coefficient = coefficients_text_array[4];
	                    slider_button_coefficient = coefficients_button_array[4];
	                } else if ($window_width > responsive_breakpoint_set[5]) {
	                    slider_graphic_coefficient = coefficients_graphic_array[5];
	                    slider_title_coefficient = coefficients_title_array[5];
	                    slider_subtitle_coefficient = coefficients_subtitle_array[5];
	                    slider_text_coefficient = coefficients_text_array[5];
	                    slider_button_coefficient = coefficients_button_array[5];
	                } else {
	                    slider_graphic_coefficient = coefficients_graphic_array[6];
	                    slider_title_coefficient = coefficients_title_array[6];
	                    slider_subtitle_coefficient = coefficients_subtitle_array[6];
	                    slider_text_coefficient = coefficients_text_array[6];
	                    slider_button_coefficient = coefficients_button_array[6];
	                }
	                var slider_title_coefficient_letter_spacing = slider_title_coefficient;
	                var slider_subtitle_coefficient_letter_spacing = slider_subtitle_coefficient;
	                var slider_text_coefficient_letter_spacing = slider_text_coefficient;
	                if ($window_width <= responsive_breakpoint_set[0]) {
	                    slider_title_coefficient_letter_spacing = slider_title_coefficient / 2;
	                    slider_subtitle_coefficient_letter_spacing = slider_subtitle_coefficient / 2;
	                    slider_text_coefficient_letter_spacing = slider_text_coefficient / 2;
	                }
	                $item.find(".thumb").css({
	                    width: Math.round(window["slider_graphic_width_" + i][0] * slider_graphic_coefficient) + "px"
	                }).css({
	                    height: Math.round(window["slider_graphic_height_" + i][0] * slider_graphic_coefficient) + "px"
	                });
	                $item.find(".qode_slide-svg-holder svg").css({
	                    width: Math.round(window["slider_svg_width_" + i][0] * slider_graphic_coefficient) + "px"
	                }).css({
	                    height: Math.round(window["slider_svg_height_" + i][0] * slider_graphic_coefficient) + "px"
	                });
	                $item.find(".q_slide_title").css({
	                    "font-size": Math.round(window["slider_title_" + i][0] * slider_title_coefficient) + "px"
	                });
	                $item.find(".q_slide_title").css({
	                    "line-height": Math.round(window["slider_title_" + i][1] * slider_title_coefficient) + "px"
	                });
	                $item.find(".q_slide_title").css({
	                    "letter-spacing": Math.round(window["slider_title_" + i][2] * slider_title_coefficient_letter_spacing) + "px"
	                });
	                $item.find(".q_slide_title").css({
	                    "margin-bottom": Math.round(window["slider_title_" + i][3] * slider_title_coefficient) + "px"
	                });
	                $item.find(".q_slide_subtitle").css({
	                    "font-size": Math.round(window["slider_subtitle_" + i][0] * slider_subtitle_coefficient) + "px"
	                });
	                $item.find(".q_slide_subtitle").css({
	                    "line-height": Math.round(window["slider_subtitle_" + i][1] * slider_subtitle_coefficient) + "px"
	                });
	                $item.find(".q_slide_subtitle").css({
	                    "letter-spacing": Math.round(window["slider_subtitle_" + i][2] * slider_subtitle_coefficient_letter_spacing) + "px"
	                });
	                $item.find(".q_slide_subtitle").css({
	                    "margin-bottom": Math.round(window["slider_subtitle_" + i][3] * slider_subtitle_coefficient) + "px"
	                });
	                $item.find(".q_slide_text").css({
	                    "font-size": Math.round(window["slider_text_" + i][0] * slider_text_coefficient) + "px"
	                });
	                $item.find(".q_slide_text").css({
	                    "line-height": Math.round(window["slider_text_" + i][1] * slider_text_coefficient) + "px"
	                });
	                $item.find(".q_slide_text").css({
	                    "letter-spacing": Math.round(window["slider_text_" + i][2] * slider_text_coefficient_letter_spacing) + "px"
	                });
	                $item.find(".qbutton:eq(0)").css({
	                    "font-size": Math.round(window["slider_button1_" + i][0] * slider_button_coefficient) + "px"
	                });
	                $item.find(".qbutton:eq(1)").css({
	                    "font-size": Math.round(window["slider_button2_" + i][0] * slider_button_coefficient) + "px"
	                });
	                $item.find(".qbutton:eq(0)").css({
	                    "line-height": Math.round(window["slider_button1_" + i][1] * slider_button_coefficient) + "px"
	                });
	                $item.find(".qbutton:eq(1)").css({
	                    "line-height": Math.round(window["slider_button2_" + i][1] * slider_button_coefficient) + "px"
	                });
	                $item.find(".qbutton:eq(0)").css({
	                    "letter-spacing": Math.round(window["slider_button1_" + i][2] * slider_button_coefficient) + "px"
	                });
	                $item.find(".qbutton:eq(1)").css({
	                    "letter-spacing": Math.round(window["slider_button2_" + i][2] * slider_button_coefficient) + "px"
	                });
	                $item.find(".qbutton:eq(0)").css({
	                    height: Math.round(window["slider_button1_" + i][3] * slider_button_coefficient) + "px"
	                });
	                $item.find(".qbutton:eq(1)").css({
	                    height: Math.round(window["slider_button2_" + i][3] * slider_button_coefficient) + "px"
	                });
	                if (window["slider_button1_" + i][4] != 0) {
	                    $item.find(".qbutton:eq(0)").css({
	                        width: Math.round(window["slider_button1_" + i][4] * slider_button_coefficient) + "px"
	                    });
	                } else {
	                    $item.find(".qbutton:eq(0)").css({
	                        width: "auto"
	                    });
	                }
	                if (window["slider_button2_" + i][4] != 0) {
	                    $item.find(".qbutton:eq(1)").css({
	                        width: Math.round(window["slider_button2_" + i][4] * slider_button_coefficient) + "px"
	                    });
	                } else {
	                    $item.find(".qbutton:eq(1)").css({
	                        width: "auto"
	                    });
	                }
	                $item.find(".qbutton:eq(0)").css({
	                    "padding-left": Math.round(window["slider_button1_" + i][5] * slider_button_coefficient) + "px"
	                });
	                $item.find(".qbutton:eq(1)").css({
	                    "padding-left": Math.round(window["slider_button2_" + i][5] * slider_button_coefficient) + "px"
	                });
	                $item.find(".qbutton:eq(0)").css({
	                    "padding-right": Math.round(window["slider_button1_" + i][5] * slider_button_coefficient) + "px"
	                });
	                $item.find(".qbutton:eq(1)").css({
	                    "padding-right": Math.round(window["slider_button2_" + i][5] * slider_button_coefficient) + "px"
	                });
	                $item.find(".separator").css({
	                    "margin-top": Math.round(window["slider_separator_" + i][0] * slider_title_coefficient) + "px"
	                });
	                $item.find(".separator").css({
	                    "margin-bottom": Math.round(window["slider_separator_" + i][1] * slider_title_coefficient) + "px"
	                });
	            }
	            function resetSliderElementsSize($item, i) {
	                $item.find(".thumb").css({
	                    width: Math.round(window["slider_graphic_width_" + i][0]) + "px"
	                }).css({
	                    height: Math.round(window["slider_graphic_height_" + i][0]) + "px"
	                });
	                $item.find(".qode_slide-svg-holder svg").css({
	                    width: Math.round(window["slider_svg_width_" + i][0]) + "px"
	                }).css({
	                    height: Math.round(window["slider_svg_height_" + i][0]) + "px"
	                });
	                $item.find(".q_slide_title").css({
	                    "font-size": Math.round(window["slider_title_" + i][0]) + "px"
	                });
	                $item.find(".q_slide_title").css({
	                    "line-height": Math.round(window["slider_title_" + i][1]) + "px"
	                });
	                $item.find(".q_slide_title").css({
	                    "letter-spacing": Math.round(window["slider_title_" + i][2]) + "px"
	                });
	                $item.find(".q_slide_title").css({
	                    "margin-bottom": Math.round(window["slider_title_" + i][3]) + "px"
	                });
	                $item.find(".q_slide_subtitle").css({
	                    "font-size": Math.round(window["slider_subtitle_" + i][0]) + "px"
	                });
	                $item.find(".q_slide_subtitle").css({
	                    "line-height": Math.round(window["slider_subtitle_" + i][1]) + "px"
	                });
	                $item.find(".q_slide_subtitle").css({
	                    "letter-spacing": Math.round(window["slider_subtitle_" + i][2]) + "px"
	                });
	                $item.find(".q_slide_subtitle").css({
	                    "margin-bottom": Math.round(window["slider_subtitle_" + i][3]) + "px"
	                });
	                $item.find(".q_slide_text").css({
	                    "font-size": Math.round(window["slider_text_" + i][0]) + "px"
	                });
	                $item.find(".q_slide_text").css({
	                    "line-height": Math.round(window["slider_text_" + i][1]) + "px"
	                });
	                $item.find(".q_slide_text").css({
	                    "letter-spacing": Math.round(window["slider_text_" + i][2]) + "px"
	                });
	                $item.find(".qbutton:eq(0)").css({
	                    "font-size": Math.round(window["slider_button1_" + i][0]) + "px"
	                });
	                $item.find(".qbutton:eq(1)").css({
	                    "font-size": Math.round(window["slider_button2_" + i][0]) + "px"
	                });
	                $item.find(".qbutton:eq(0)").css({
	                    "line-height": Math.round(window["slider_button1_" + i][1]) + "px"
	                });
	                $item.find(".qbutton:eq(1)").css({
	                    "line-height": Math.round(window["slider_button2_" + i][1]) + "px"
	                });
	                $item.find(".qbutton:eq(0)").css({
	                    "letter-spacing": Math.round(window["slider_button1_" + i][2]) + "px"
	                });
	                $item.find(".qbutton:eq(1)").css({
	                    "letter-spacing": Math.round(window["slider_button2_" + i][2]) + "px"
	                });
	                $item.find(".qbutton:eq(0)").css({
	                    height: Math.round(window["slider_button1_" + i][3]) + "px"
	                });
	                $item.find(".qbutton:eq(1)").css({
	                    height: Math.round(window["slider_button2_" + i][3]) + "px"
	                });
	                if (window["slider_button1_" + i][4] != 0) {
	                    $item.find(".qbutton:eq(0)").css({
	                        width: Math.round(window["slider_button1_" + i][4]) + "px"
	                    });
	                } else {
	                    $item.find(".qbutton:eq(0)").css({
	                        width: "auto"
	                    });
	                }
	                if (window["slider_button2_" + i][4] != 0) {
	                    $item.find(".qbutton:eq(1)").css({
	                        width: Math.round(window["slider_button2_" + i][4]) + "px"
	                    });
	                } else {
	                    $item.find(".qbutton:eq(1)").css({
	                        width: "auto"
	                    });
	                }
	                $item.find(".qbutton:eq(0)").css({
	                    "padding-left": Math.round(window["slider_button1_" + i][5]) + "px"
	                });
	                $item.find(".qbutton:eq(1)").css({
	                    "padding-left": Math.round(window["slider_button2_" + i][5]) + "px"
	                });
	                $item.find(".qbutton:eq(0)").css({
	                    "padding-right": Math.round(window["slider_button1_" + i][5]) + "px"
	                });
	                $item.find(".qbutton:eq(1)").css({
	                    "padding-right": Math.round(window["slider_button2_" + i][5]) + "px"
	                });
	                $item.find(".separator").css({
	                    "margin-top": Math.round(window["slider_separator_" + i][0]) + "px"
	                });
	                $item.find(".separator").css({
	                    "margin-bottom": Math.round(window["slider_separator_" + i][1]) + "px"
	                });
	            }
	            if ($this.hasClass("full_screen")) {
	                $this.css({
	                    height: $j(window).height() - mobile_header - paspartu_amount_with_top - paspartu_amount_with_bottom + "px"
	                });
	                $this.find(".qode_slider_preloader").css({
	                    height: $j(window).height() - mobile_header - paspartu_amount_with_top - paspartu_amount_with_bottom + "px"
	                });
	                $this.find(".qode_slider_preloader .ajax_loader").css({
	                    display: "block"
	                });
	                $this.find(".item").css({
	                    height: $j(window).height() - mobile_header - paspartu_amount_with_top - paspartu_amount_with_bottom + "px"
	                });
	                if ($j(".paspartu_outer:not(.disable_top_paspartu)").length) {
	                    if (!$j("body").hasClass("paspartu_on_top_fixed")) {
	                        $this.closest(".q_slider").css("padding-top", Math.round(header_height_add_for_paspartu + $window_width * paspartu_width));
	                    }
	                }
	                if ($j(".paspartu_outer.paspartu_on_bottom_slider").length) {
	                    $this.closest(".q_slider").css("padding-bottom", Math.round($window_width * paspartu_width));
	                }
	                $j(window).resize(function() {
	                    mobile_header = $j(window).width() < 1e3 ? $j("header.page_header").height() : 0;
	                    header_height_add_for_paspartu = $window_width > 1e3 && !$j("header.page_header").hasClass("transparent") && $j("body.paspartu_on_top_fixed").length == 0 ? $j("header.page_header").height() : 0;
	                    paspartu_amount_with_top = $j(".paspartu_outer:not(.disable_top_paspartu)").length > 0 ? Math.round($window_width * paspartu_width + header_height_add_for_paspartu) : 0;
	                    paspartu_amount_with_bottom = $j(".paspartu_outer.paspartu_on_bottom_slider").length > 0 ? Math.round($window_width * paspartu_width) : 0;
	                    $this.css({
	                        height: $j(window).height() - mobile_header - paspartu_amount_with_top - paspartu_amount_with_bottom + "px"
	                    });
	                    $this.find(".qode_slider_preloader .ajax_loader").css({
	                        display: "block"
	                    });
	                    $this.find(".item").css({
	                        height: $j(window).height() - mobile_header - paspartu_amount_with_top - paspartu_amount_with_bottom + "px"
	                    });
	                    if ($j(".paspartu_outer:not(.disable_top_paspartu)").length) {
	                        if (!$j("body").hasClass("paspartu_on_top_fixed")) {
	                            $this.closest(".q_slider").css("padding-top", Math.round(header_height_add_for_paspartu + $window_width * paspartu_width));
	                        }
	                    }
	                    if ($j(".paspartu_outer.paspartu_on_bottom_slider").length) {
	                        $this.closest(".q_slider").css("padding-bottom", Math.round($window_width * paspartu_width));
	                    }
	                    if ($this.hasClass("advanced_responsiveness")) {
	                        $this.find(".item").each(function(i) {
	                            setSliderElementsSize($j(this), i);
	                        });
	                    }
	                });
	            } else if ($this.hasClass("responsive_height")) {
	                var $def_height = $this.data("height");
	                $this.find(".qode_slider_preloader").css({
	                    height: $this.height() - mobile_header - paspartu_amount_with_top - paspartu_amount_with_bottom + "px",
	                    display: "block"
	                });
	                if ($j(".paspartu_outer:not(.disable_top_paspartu)").length) {
	                    if (!$j("body").hasClass("paspartu_on_top_fixed")) {
	                        $this.closest(".q_slider").css("padding-top", Math.round(header_height_add_for_paspartu + $window_width * paspartu_width));
	                    }
	                }
	                if ($j(".paspartu_outer.paspartu_on_bottom_slider").length) {
	                    $this.closest(".q_slider").css("padding-bottom", Math.round($window_width * paspartu_width));
	                }
	                setSliderHeight($this, $def_height);
	                $j(window).resize(function() {
	                    if ($j(".paspartu_outer:not(.disable_top_paspartu)").length) {
	                        header_height_add_for_paspartu = $window_width > 1e3 && !$j("header.page_header").hasClass("transparent") ? $j("header.page_header").height() : 0;
	                        if (!$j("body").hasClass("paspartu_on_top_fixed")) {
	                            $this.closest(".q_slider").css("padding-top", Math.round(header_height_add_for_paspartu + $window_width * paspartu_width));
	                        }
	                    }
	                    if ($j(".paspartu_outer.paspartu_on_bottom_slider").length) {
	                        $this.closest(".q_slider").css("padding-bottom", Math.round($window_width * paspartu_width));
	                    }
	                    setSliderHeight($this, $def_height);
	                    if ($this.hasClass("advanced_responsiveness")) {
	                        $this.find(".item").each(function(i) {
	                            setSliderElementsSize($j(this), i);
	                        });
	                    }
	                });
	            } else {
	                $this.find(".qode_slider_preloader").css({
	                    height: $this.height() - mobile_header + "px",
	                    display: "block"
	                });
	                $this.find(".qode_slider_preloader .ajax_loader").css({
	                    display: "block"
	                });
	                if ($j(".paspartu_outer:not(.disable_top_paspartu)").length) {
	                    if (!$j("body").hasClass("paspartu_on_top_fixed")) {
	                        $this.closest(".q_slider").css("padding-top", Math.round(header_height_add_for_paspartu + $window_width * paspartu_width));
	                    }
	                }
	                if ($j(".paspartu_outer.paspartu_on_bottom_slider").length) {
	                    $this.closest(".q_slider").css("padding-bottom", Math.round($window_width * paspartu_width));
	                }
	                if ($this.hasClass("advanced_responsiveness")) {
	                    $this.find(".item").each(function(i) {
	                        setSliderInitialElementsSize($j(this), i);
	                        setSliderElementsSize($j(this), i);
	                    });
	                }
	                $window_width < 1e3 ? setSliderHeight($this, $def_height) : resetSliderHeight($def_height);
	                $j(window).resize(function() {
	                    if ($j(".paspartu_outer:not(.disable_top_paspartu)").length) {
	                        header_height_add_for_paspartu = $window_width > 1e3 && !$j("header.page_header").hasClass("transparent") ? $j("header.page_header").height() : 0;
	                        if (!$j("body").hasClass("paspartu_on_top_fixed")) {
	                            $this.closest(".q_slider").css("padding-top", Math.round(header_height_add_for_paspartu + $window_width * paspartu_width));
	                        }
	                    }
	                    if ($j(".paspartu_outer.paspartu_on_bottom_slider").length) {
	                        $this.closest(".q_slider").css("padding-bottom", Math.round($window_width * paspartu_width));
	                    }
	                    if ($window_width < 1e3) {
	                        setSliderHeight($this, $def_height);
	                        if ($this.hasClass("advanced_responsiveness")) {
	                            $this.find(".item").each(function(i) {
	                                setSliderElementsSize($j(this), i);
	                            });
	                        }
	                    } else {
	                        resetSliderHeight($def_height);
	                        if ($this.hasClass("advanced_responsiveness")) {
	                            $this.find(".item").each(function(i) {
	                                resetSliderElementsSize($j(this), i);
	                            });
	                        }
	                    }
	                });
	            }
	            if ($j("body:not(.boxed):not(.vertical_menu_transparency):not(.vertical_menu_hidden):not(.page-template-landing_page-php)").hasClass("vertical_menu_enabled") && $j(window).width() > 1e3) {
	                var paspartu_add = $j("body").hasClass("paspartu_enabled") ? 2 * Math.round($window_width * paspartu_width) : 0;
	                $this.find(".carousel-inner").width($window_width - 260 - paspartu_add);
	                $j(window).resize(function() {
	                    if ($j(window).width() > 1e3) {
	                        paspartu_add = $j("body").hasClass("paspartu_enabled") ? 2 * Math.round($window_width * paspartu_width) : 0;
	                        $this.find(".carousel-inner").width($window_width - 260 - paspartu_add);
	                    } else {
	                        $this.find(".carousel-inner").css("width", "100%");
	                    }
	                });
	            }
	            if ($j("body:not(.boxed):not(.vertical_menu_transparency):not(.page-template-landing_page-php)").hasClass("vertical_menu_hidden") && $window_width > 1e3) {
	                var paspartu_add = $j("body").hasClass("paspartu_enabled") ? 2 * Math.round($window_width * paspartu_width) : 0;
	                $this.find(".carousel-inner").width($window_width - 40 - paspartu_add);
	                $j(window).resize(function() {
	                    if ($j(window).width() > 1e3) {
	                        paspartu_add = $j("body").hasClass("paspartu_enabled") ? 2 * Math.round($window_width * paspartu_width) : 0;
	                        $this.find(".carousel-inner").width($window_width - 40 - paspartu_add);
	                    } else {
	                        $this.find(".carousel-inner").css("width", "100%");
	                    }
	                });
	            }
	            $j(window).scroll(function() {
	                if ($scroll > $this.height() + $j("header.page_header").height() && $j(window).width() > 1e3) {
	                    $this.find(".carousel-inner, .carousel-indicators, button").hide();
	                } else {
	                    $this.find(".carousel-inner, .carousel-indicators, button").show();
	                }
	            });
	            var $slide_animation = $this.data("slide_animation");
	            if ($slide_animation === "") {
	                $slide_animation = 6e3;
	            }
	            var all_items_count = $j("div.item").length;
	            function setPrevNextNumbers(curr_item, all_items_count) {
	                if (curr_item == 1) {
	                    $this.find(".left.carousel-control .prev").html(all_items_count);
	                    $this.find(".right.carousel-control .next").html(curr_item + 1);
	                } else if (curr_item == all_items_count) {
	                    $this.find(".left.carousel-control .prev").html(curr_item - 1);
	                    $this.find(".right.carousel-control .next").html(1);
	                } else {
	                    $this.find(".left.carousel-control .prev").html(curr_item - 1);
	                    $this.find(".right.carousel-control .next").html(curr_item + 1);
	                }
	            }
	            function initSlider() {
	                $this.find(".carousel-inner .item:first-child").addClass("active");
	                checkSliderForHeaderStyle($j(".carousel .active"), $this.hasClass("header_effect"));
	                if ($this.hasClass("slider_thumbs")) {
	                    setPrevNextNumbers(1, all_items_count);
	                    if ($this.find(".active").next("div").find(".image").length) {
	                        src = image_regex.exec($this.find(".active").next("div").find(".image").attr("style"));
	                        next_image = new Image();
	                        next_image.src = src[1];
	                    } else {
	                        next_image = $this.find(".active").next("div").find("> .video").clone();
	                        next_image.find(".video-overlay").remove();
	                        next_image.find(".video-wrap").width(170).height(95);
	                        next_image.find(".mejs-container").width(170).height(95);
	                        next_image.find("video").width(170).height(95);
	                    }
	                    $this.find(".right.carousel-control .img").html(next_image).find("img, div.video").addClass("old");
	                    if ($this.find(".carousel-inner .item:last-child .image").length) {
	                        src = image_regex.exec($this.find(".carousel-inner .item:last-child .image").attr("style"));
	                        prev_image = new Image();
	                        prev_image.src = src[1];
	                    } else {
	                        prev_image = $this.find(".carousel-inner .item:last-child > .video").clone();
	                        prev_image.find(".video-overlay").remove();
	                        prev_image.find(".video-wrap").width(170).height(95);
	                        prev_image.find(".mejs-container").width(170).height(95);
	                        prev_image.find("video").width(170).height(95);
	                    }
	                    $this.find(".left.carousel-control .img").html(prev_image).find("img, div.video").addClass("old");
	                }
	                if ($this.hasClass("q_auto_start")) {
	                    $this.carousel({
	                        interval: $slide_animation,
	                        pause: false
	                    });
	                } else {
	                    $this.carousel({
	                        interval: 0,
	                        pause: false
	                    });
	                }
	                if ($this.hasClass("advanced_responsiveness") && ($this.hasClass("responsive_height") || $this.hasClass("full_screen"))) {
	                    $this.find(".item").each(function(i) {
	                        setSliderInitialElementsSize($j(this), i);
	                        setSliderElementsSize($j(this), i);
	                    });
	                }
	                if ($j(".carousel-inner .item:first-child").hasClass("animate_image") && $window_width > 1e3) {
	                    $this.find(".carousel-inner .item.animate_image:first-child .image").transformAnimate({
	                        transform: "matrix(" + matrixArray[$j(".carousel-inner .item:first-child").data("animate_image")] + ")",
	                        duration: 3e4
	                    });
	                }
	            }
	            if ($j("html").hasClass("touch")) {
	                if ($this.find(".item:first-child .mobile-video-image").length > 0) {
	                    src = image_regex.exec($this.find(".item:first-child .mobile-video-image").attr("style"));
	                    if (src) {
	                        var backImg = new Image();
	                        backImg.src = src[1];
	                        $j(backImg).load(function() {
	                            $j(".qode_slider_preloader").fadeOut(500);
	                            initSlider();
	                            checkSVG($this);
	                        });
	                    }
	                } else {
	                    src = image_regex.exec($this.find(".item:first-child .image").attr("style"));
	                    if (src) {
	                        var backImg = new Image();
	                        backImg.src = src[1];
	                        $j(backImg).load(function() {
	                            $j(".qode_slider_preloader").fadeOut(500);
	                            initSlider();
	                            checkSVG($this);
	                        });
	                    }
	                }
	            } else {
	                if ($this.find(".item:first-child video").length > 0) {
	                    $this.find(".item:first-child video").get(0).addEventListener("loadeddata", function() {
	                        $j(".qode_slider_preloader").fadeOut(500);
	                        initSlider();
	                        checkSVG($this);
	                    });
	                } else {
	                    src = image_regex.exec($this.find(".item:first-child .image").attr("style"));
	                    if (src) {
	                        var backImg = new Image();
	                        backImg.src = src[1];
	                        $j(backImg).load(function() {
	                            $j(".qode_slider_preloader").fadeOut(500);
	                            initSlider();
	                            checkSVG($this);
	                        });
	                    }
	                }
	            }
	            $this.on("slide.bs.carousel", function() {
	                $this.addClass("in_progress");
	                $this.find(".active .slider_content_outer").fadeTo(800, 0);
	            });
	            $this.on("slid.bs.carousel", function() {
	                $this.removeClass("in_progress");
	                $this.find(".active .slider_content_outer").fadeTo(0, 1);
	                checkSVG($this);
	                $j("div.item.animate_image .image").stop().css({
	                    transform: "",
	                    "-webkit-transform": ""
	                });
	                if ($j("div.item.active").hasClass("animate_image") && $window_width > 1e3) {
	                    $j("div.item.animate_image.active .image").transformAnimate({
	                        transform: "matrix(" + matrixArray[$j("div.item.animate_image.active").data("animate_image")] + ")",
	                        duration: 3e4
	                    });
	                }
	                if ($this.hasClass("slider_thumbs")) {
	                    var curr_item = $j("div.item").index($j("div.item.active")[0]) + 1;
	                    setPrevNextNumbers(curr_item, all_items_count);
	                    if ($this.find(".active").prev("div.item").length) {
	                        if ($this.find(".active").prev("div").find(".image").length) {
	                            src = image_regex.exec($this.find(".active").prev("div").find(".image").attr("style"));
	                            prev_image = new Image();
	                            prev_image.src = src[1];
	                        } else {
	                            prev_image = $this.find(".active").prev("div").find("> .video").clone();
	                            prev_image.find(".video-overlay").remove();
	                            prev_image.find(".video-wrap").width(170).height(95);
	                            prev_image.find(".mejs-container").width(170).height(95);
	                            prev_image.find("video").width(170).height(95);
	                        }
	                        $this.find(".left.carousel-control .img .old").fadeOut(300, function() {
	                            $j(this).remove();
	                        });
	                        $this.find(".left.carousel-control .img").append(prev_image).find("img, div.video").fadeIn(300).addClass("old");
	                    } else {
	                        if ($this.find(".carousel-inner .item:last-child .image").length) {
	                            src = image_regex.exec($this.find(".carousel-inner .item:last-child .image").attr("style"));
	                            prev_image = new Image();
	                            prev_image.src = src[1];
	                        } else {
	                            prev_image = $this.find(".carousel-inner .item:last-child > .video").clone();
	                            prev_image.find(".video-overlay").remove();
	                            prev_image.find(".video-wrap").width(170).height(95);
	                            prev_image.find(".mejs-container").width(170).height(95);
	                            prev_image.find("video").width(170).height(95);
	                        }
	                        $this.find(".left.carousel-control .img .old").fadeOut(300, function() {
	                            $j(this).remove();
	                        });
	                        $this.find(".left.carousel-control .img").append(prev_image).find("img, div.video").fadeIn(300).addClass("old");
	                    }
	                    if ($this.find(".active").next("div.item").length) {
	                        if ($this.find(".active").next("div").find(".image").length) {
	                            src = image_regex.exec($this.find(".active").next("div").find(".image").attr("style"));
	                            next_image = new Image();
	                            next_image.src = src[1];
	                        } else {
	                            next_image = $this.find(".active").next("div").find("> .video").clone();
	                            next_image.find(".video-overlay").remove();
	                            next_image.find(".video-wrap").width(170).height(95);
	                            next_image.find(".mejs-container").width(170).height(95);
	                            next_image.find("video").width(170).height(95);
	                        }
	                        $this.find(".right.carousel-control .img .old").fadeOut(300, function() {
	                            $j(this).remove();
	                        });
	                        $this.find(".right.carousel-control .img").append(next_image).find("img, div.video").fadeIn(300).addClass("old");
	                    } else {
	                        if ($this.find(".carousel-inner .item:first-child .image").length) {
	                            src = image_regex.exec($this.find(".carousel-inner .item:first-child .image").attr("style"));
	                            next_image = new Image();
	                            next_image.src = src[1];
	                        } else {
	                            next_image = $this.find(".carousel-inner .item:first-child > .video").clone();
	                            next_image.find(".video-overlay").remove();
	                            next_image.find(".video-wrap").width(170).height(95);
	                            next_image.find(".mejs-container").width(170).height(95);
	                            next_image.find("video").width(170).height(95);
	                        }
	                        $this.find(".right.carousel-control .img .old").fadeOut(300, function() {
	                            $j(this).remove();
	                        });
	                        $this.find(".right.carousel-control .img").append(next_image).find("img, div.video").fadeIn(300).addClass("old");
	                    }
	                }
	            });
	            $this.swipe({
	                swipeLeft: function(event, direction, distance, duration, fingerCount) {
	                    $this.carousel("next");
	                },
	                swipeRight: function(event, direction, distance, duration, fingerCount) {
	                    $this.carousel("prev");
	                },
	                threshold: 20
	            });
	        });
	    }
	}

	function checkSliderForHeaderStyle($this, header_effect) {
	    "use strict";
	    var slide_header_style = "";
	    var navigation_color = $this.data("navigation-color");
	    if ($this.hasClass("light")) {
	        slide_header_style = "light";
	    }
	    if ($this.hasClass("dark")) {
	        slide_header_style = "dark";
	    }
	    if (slide_header_style !== "") {
	        if (header_effect) {
	            $j("header.page_header").removeClass("dark light").addClass(slide_header_style);
	            $j("aside.vertical_menu_area").removeClass("dark light").addClass(slide_header_style);
	        }
	        $j(".carousel .carousel-control, .carousel .carousel-indicators").removeClass("dark light").addClass(slide_header_style);
	    } else {
	        if (header_effect) {
	            $j("header.page_header").removeClass("dark light").addClass(default_header_style);
	            $j("aside.vertical_menu_area").removeClass("dark light").addClass(default_header_style);
	        }
	        $j(".carousel .carousel-control, .carousel .carousel-indicators").removeClass("dark light").addClass(default_header_style);
	    }
	    if (navigation_color !== undefined) {
	        $j(".carousel-control .thumb_holder .thumb_top, .carousel-indicators li").css("background-color", navigation_color);
	        $j(".carousel-control .prev_nav, .carousel-control .next_nav").css("border-color", navigation_color);
	        $j(".carousel-control .prev_nav i, .carousel-control .next_nav i").css("color", navigation_color);
	    } else {
	        $j(".carousel-control .thumb_holder .thumb_top, .carousel-indicators li").css("background-color", "");
	        $j(".carousel-control .prev_nav, .carousel-control .next_nav").css("border-color", "");
	        $j(".carousel-control .prev_nav i, .carousel-control .next_nav i").css("color", "");
	    }
	}

	function calculateHeights() {
	    if ($j(".portfolio_slides").length) {
	        $j(".portfolio_slides").each(function() {
	            $j(this).parents(".caroufredsel_wrapper").css({
	                height: $j(this).find("li.item").outerHeight() - 3 + "px"
	            });
	        });
	    }
	    if ($j(".qode_carousels .slides").length) {
	        $j(".qode_carousels .slides").each(function() {
	            $j(this).parents(".caroufredsel_wrapper").css({
	                height: $j(this).find("li.item").outerHeight() + "px"
	            });
	        });
	    }
	    if ($j(".blog_slides").length) {
	        $j(".blog_slides").each(function() {
	            $j(this).parents(".caroufredsel_wrapper").css({
	                height: $j(this).find("li.item").outerHeight() - 3 + "px"
	            });
	        });
	    }
	}

	function initQodeCarousel() {
	    "use strict";
	    console.log("initQodeCarousel");
	    if ($j(".qode_carousels").length) {
	        $j(".qode_carousels").each(function() {
	            console.log("initqode");
	            var itemWidth = $j(this).parents(".grid_section").length == 1 ? 170 : 315;
	            $j(this).find(".slides").carouFredSel({
	                circular: true,
	                responsive: true,
	                scroll: {
	                    items: 1,
	                    duration: 1e3,
	                    pauseOnHover: false
	                },
	                items: {
	                    width: itemWidth,
	                    visible: {
	                        min: 1,
	                        max: 6
	                    }
	                },
	                auto: true,
	                mousewheel: false,
	                swipe: {
	                    onMouse: true,
	                    onTouch: true
	                },
	                onCreate: function(e) {
	                   jQuery(this).parents(".caroufredsel_wrapper").css({
	                    height: jQuery(this).find("li.item").outerHeight() + "px"
	                   });     
	                }
	            }).animate({
	                opacity: 1
	            }, 1e3);
	        });
	        calculateHeights();
	    }
	}

	function initPortfolioSlider() {
	    "use strict";
	    if ($j(".portfolio_slider").length) {
	        $j(".portfolio_slider").each(function() {
	            var number_of_items;
	            var item_width_fw;
	            if (typeof $j(this).data("number_of_items") !== "undefined") {
	                number_of_items = $j(this).data("number_of_items");
	            } else {
	                number_of_items = "auto";
	            }
	            switch (number_of_items) {
	              case 4:
	                item_width_fw = 500;
	                break;

	              case 5:
	                item_width_fw = 350;
	                break;

	              default:
	                item_width_fw = 500;
	                break;
	            }
	            var maxItems = $j(this).parents(".grid_section").length == 1 ? 3 : number_of_items;
	            var itemWidth = $j(this).parents(".grid_section").length == 1 ? 353 : item_width_fw;
	            $j(this).find(".portfolio_slides").carouFredSel({
	                circular: true,
	                responsive: true,
	                scroll: 1,
	                prev: {
	                    button: function() {
	                        return $j(this).parent().siblings(".caroufredsel-direction-nav").find("#caroufredsel-prev");
	                    }
	                },
	                next: {
	                    button: function() {
	                        return $j(this).parent().siblings(".caroufredsel-direction-nav").find("#caroufredsel-next");
	                    }
	                },
	                items: {
	                    width: itemWidth,
	                    visible: {
	                        min: 1,
	                        max: maxItems
	                    }
	                },
	                auto: false,
	                mousewheel: false,
	                swipe: {
	                    onMouse: true,
	                    onTouch: true
	                }
	            }).animate({
	                opacity: 1
	            }, 1e3);
	        });
	        calculateHeights();
	        $j(".portfolio_slider .flex-direction-nav a").click(function(e) {
	            e.preventDefault();
	            e.stopImmediatePropagation();
	            e.stopPropagation();
	        });
	    }
	}

	function initBlogSlider() {
	    "use strict";
	    if ($j(".blog_slider").length) {
	        $j(".blog_slider").each(function() {
	            var blogs_shown;
	            var maxItems;
	            var itemWidth;
	            var autoPlay = false;
	            if (typeof $j(this).data("blogs_shown") !== "undefined") {
	                blogs_shown = $j(this).data("blogs_shown");
	            } else if ($j(this).hasClass("simple_slider")) {
	                blogs_shown = 1;
	            } else {
	                blogs_shown = "auto";
	            }
	            if ($j(this).hasClass("simple_slider")) {
	                maxItems = 1;
	                itemWidth = 300;
	                autoPlay = false;
	            } else {
	                maxItems = $j(this).parents(".grid_section").length == 1 ? 3 : blogs_shown;
	                var itemWidthTemp;
	                switch (blogs_shown) {
	                  case 3:
	                    itemWidthTemp = 667;
	                    break;

	                  case 4:
	                    itemWidthTemp = 500;
	                    break;

	                  case 5:
	                    itemWidthTemp = 400;
	                    break;

	                  case 6:
	                    itemWidthTemp = 334;
	                    break;

	                  default:
	                    itemWidthTemp = 500;
	                    break;
	                }
	                itemWidth = $j(this).parents(".grid_section").length == 1 ? 353 : itemWidthTemp;
	            }
	            $j(this).find(".blog_slides").carouFredSel({
	                circular: true,
	                responsive: true,
	                scroll: 1,
	                prev: {
	                    button: function() {
	                        return $j(this).parent().siblings(".caroufredsel-direction-nav").find("#caroufredsel-prev");
	                    }
	                },
	                next: {
	                    button: function() {
	                        return $j(this).parent().siblings(".caroufredsel-direction-nav").find("#caroufredsel-next");
	                    }
	                },
	                items: {
	                    width: itemWidth,
	                    visible: {
	                        min: 1,
	                        max: maxItems
	                    }
	                },
	                auto: autoPlay,
	                mousewheel: false,
	                swipe: {
	                    onMouse: true,
	                    onTouch: true
	                }
	            }).animate({
	                opacity: 1
	            }, 1e3);
	        });
	        calculateHeights();
	        $j(".blog_slider .flex-direction-nav a").click(function(e) {
	            e.preventDefault();
	            e.stopImmediatePropagation();
	            e.stopPropagation();
	        });
	    }
	}

	var current_scroll;

	function initSideMenu() {
	    "use strict";
	    if ($j("body").hasClass("side_area_uncovered_from_content")) {
	        $j(".side_menu_button_wrapper a.side_menu_button_link,  a.close_side_menu").click(function(e) {
	            e.preventDefault();
	            $j(".side_menu").css({
	                right: "0"
	            });
	            if (!$j(".side_menu_button_wrapper a.side_menu_button_link").hasClass("opened")) {
	                $j(".side_menu").css({
	                    visibility: "visible"
	                });
	                $j(this).addClass("opened");
	                $j("body").addClass("right_side_menu_opened");
	                current_scroll = $j(window).scrollTop();
	                $j(window).scroll(function() {
	                    if (Math.abs($scroll - current_scroll) > 400) {
	                        $j("body").removeClass("right_side_menu_opened");
	                        $j(".side_menu_button_wrapper a").removeClass("opened");
	                        var hide_side_menu = setTimeout(function() {
	                            $j(".side_menu").css({
	                                visibility: "hidden"
	                            });
	                            clearTimeout(hide_side_menu);
	                        }, 400);
	                    }
	                });
	            } else {
	                $j(".side_menu_button_wrapper a.side_menu_button_link").removeClass("opened");
	                $j("body").removeClass("right_side_menu_opened");
	                var hide_side_menu = setTimeout(function() {
	                    $j(".side_menu").css({
	                        visibility: "hidden"
	                    });
	                    clearTimeout(hide_side_menu);
	                }, 400);
	            }
	        });
	    }
	    if ($j("body").hasClass("side_menu_slide_with_content")) {
	        $j(".side_menu_button_wrapper a.side_menu_button_link, a.close_side_menu").click(function(e) {
	            e.preventDefault();
	            if (!$j(".side_menu_button_wrapper a.side_menu_button_link").hasClass("opened")) {
	                $j(this).addClass("opened");
	                $j("body").addClass("side_menu_open");
	                current_scroll = $j(window).scrollTop();
	                $j(window).scroll(function() {
	                    if (Math.abs($scroll - current_scroll) > 400) {
	                        $j("body").removeClass("side_menu_open");
	                        $j(".side_menu_button_wrapper a").removeClass("opened");
	                    }
	                });
	            } else {
	                $j("body").removeClass("side_menu_open");
	                $j(".side_menu_button_wrapper a.side_menu_button_link").removeClass("opened");
	                $j("body").removeClass("side_menu_open");
	            }
	            e.stopPropagation();
	            $j(".wrapper").click(function() {
	                e.preventDefault();
	                $j("body").removeClass("side_menu_open");
	                $j(".side_menu_button_wrapper a.side_menu_button_link").removeClass("opened");
	                $j("body").removeClass("side_menu_open");
	            });
	        });
	    }
	    if ($j("body").hasClass("side_menu_slide_from_right")) {
	        $j(".wrapper").prepend('<div class="cover"/>');
	        $j(".side_menu_button_wrapper a.side_menu_button_link, a.close_side_menu").click(function(e) {
	            e.preventDefault();
	            if (!$j(".side_menu_button_wrapper a.side_menu_button_link").hasClass("opened")) {
	                $j(this).addClass("opened");
	                $j("body").addClass("right_side_menu_opened");
	                $j(" .wrapper .cover").click(function() {
	                    $j(".side_menu_button_wrapper a.side_menu_button_link").removeClass("opened");
	                    $j("body").removeClass("right_side_menu_opened");
	                    $j(".side_menu_button_wrapper a").removeClass("opened");
	                });
	                current_scroll = $j(window).scrollTop();
	                $j(window).scroll(function() {
	                    if (Math.abs($scroll - current_scroll) > 400) {
	                        $j("body").removeClass("right_side_menu_opened");
	                        $j(".side_menu_button_wrapper a").removeClass("opened");
	                    }
	                });
	            } else {
	                $j(".side_menu_button_wrapper a.side_menu_button_link").removeClass("opened");
	                $j("body").removeClass("right_side_menu_opened");
	            }
	        });
	    }
	}

	exports.setDropDownMenuPosition = function() {
	    "use strict";
	    var menu_items = $j(".drop_down > ul > li.narrow");
	    menu_items.each(function(i) {
	        var browser_width = $j(window).width() - 16;
	        var boxed_layout = 1150;
	        var menu_item_position = $j(menu_items[i]).offset().left;
	        var sub_menu_width = $j(menu_items[i]).find(".second .inner ul").width();
	        var menu_item_from_left = 0;
	        if ($j("body").hasClass("boxed")) {
	            menu_item_from_left = boxed_layout - (menu_item_position - (browser_width - boxed_layout) / 2) + 17;
	        } else {
	            menu_item_from_left = browser_width - menu_item_position + 17;
	        }
	        var sub_menu_from_left;
	        if ($j(menu_items[i]).find("li.sub").length > 0) {
	            sub_menu_from_left = menu_item_from_left - sub_menu_width;
	        }
	        if (menu_item_from_left < sub_menu_width || sub_menu_from_left < sub_menu_width) {
	            $j(menu_items[i]).find(".second").addClass("right");
	            $j(menu_items[i]).find(".second .inner ul").addClass("right");
	        }
	    });
	}

	exports.initDropDownMenu = function() {
	    "use strict";
	    var menu_items = $j(".drop_down > ul > li");
	    menu_items.each(function(i) {
	        if ($j(menu_items[i]).find(".second").length > 0) {
	            if ($j(menu_items[i]).hasClass("wide")) {
	                var dropdown = $j(this).find(".inner > ul");
	                var dropdownPadding = parseInt(dropdown.css("padding-left").slice(0, -2)) + parseInt(dropdown.css("padding-right").slice(0, -2));
	                if (!$j(this).hasClass("left_position") && !$j(this).hasClass("right_position")) {
	                    $j(this).find(".second").css("left", 0);
	                }
	                var tallest = 0;
	                $j(this).find(".second > .inner > ul > li").each(function() {
	                    var thisHeight = $j(this).height();
	                    if (thisHeight > tallest) {
	                        tallest = thisHeight;
	                    }
	                });
	                $j(this).find(".second > .inner > ul > li").height(tallest);
	                var row_number;
	                if ($j(this).find(".second > .inner > ul > li").length > 5) {
	                    row_number = 5;
	                } else {
	                    row_number = $j(this).find(".second > .inner > ul > li").length;
	                }
	                var width = row_number * $j(this).find(".second > .inner > ul > li").outerWidth();
	                $j(this).find(".second > .inner > ul").width(width);
	                if (!$j(this).hasClass("wide_background")) {
	                    if (!$j(this).hasClass("left_position") && !$j(this).hasClass("right_position")) {
	                        var left_position = ($j(window).width() - 2 * ($j(window).width() - $j(this).find(".second").offset().left)) / 2 + (width + dropdownPadding) / 2;
	                        $j(this).find(".second").css("left", -left_position);
	                    }
	                } else {
	                    if (!$j(this).hasClass("left_position") && !$j(this).hasClass("right_position")) {
	                        var left_position = $j(this).find(".second").offset().left;
	                        $j(this).find(".second").css("left", -left_position);
	                        $j(this).find(".second").css("width", $j(window).width());
	                    }
	                }
	            }
	            if (!menu_dropdown_height_set) {
	                $j(menu_items[i]).data("original_height", $j(menu_items[i]).find(".second").height() + "px");
	                $j(menu_items[i]).find(".second").height(0);
	            }
	            if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
	                $j(menu_items[i]).on("touchstart mouseenter", function() {
	                    $j(menu_items[i]).find(".second").css({
	                        height: $j(menu_items[i]).data("original_height"),
	                        overflow: "visible",
	                        visibility: "visible",
	                        opacity: "1"
	                    });
	                }).on("mouseleave", function() {
	                    $j(menu_items[i]).find(".second").css({
	                        height: "0px",
	                        overflow: "hidden",
	                        visivility: "hidden",
	                        opacity: "0"
	                    });
	                });
	            } else {
	                var config = {
	                    interval: 0,
	                    over: function() {
	                        setTimeout(function() {
	                            $j(menu_items[i]).find(".second").addClass("drop_down_start");
	                            $j(menu_items[i]).find(".second").stop().css({
	                                height: $j(menu_items[i]).data("original_height")
	                            });
	                        }, 150);
	                    },
	                    timeout: 150,
	                    out: function() {
	                        $j(menu_items[i]).find(".second").stop().css({
	                            height: "0px"
	                        });
	                        $j(menu_items[i]).find(".second").removeClass("drop_down_start");
	                    }
	                };
	                $j(menu_items[i]).hoverIntent(config);
	            }
	        }
	    });
	    $j(".drop_down ul li.wide ul li a, .drop_down ul li.narrow ul li a").on("click", function() {
	        var $this = $j(this);
	        if (!$this.next("ul").length && $this.attr("href") !== "http://#" && $this.attr("href") !== "#" && !$this.hasClass("no_link")) {
	            setTimeout(function() {
	                $this.mouseleave();
	            }, 500);
	        }
	    });
	    menu_dropdown_height_set = true;
	}

	exports.initVerticalMenu = function() {
	    "use strict";
	    if ($j(".no-touch .vertical_menu_toggle").length) {
	        var menu_items = $j(".no-touch .vertical_menu_toggle > ul > li");
	        var menu_items_2 = $j(".no-touch .vertical_menu_toggle ul li ul li");
	        menu_items.each(function(i) {
	            if ($j(menu_items[i]).hasClass("has_sub")) {
	                var subitems_number = $j(menu_items[i]).find(".inner > ul > li").length;
	                $j(menu_items[i]).hoverIntent({
	                    over: function() {
	                        $j(menu_items[i]).addClass("open");
	                        $j(menu_items[i]).find(".second").slideDown(subitems_number * 40, "easeInOutSine", function() {
	                        });
	                    },
	                    out: function() {
	                        $j(menu_items[i]).removeClass("open");
	                        $j(menu_items[i]).find(".second").slideUp(subitems_number * 40, "easeInOutSine");
	                    },
	                    timeout: 1e3
	                });
	            }
	        });
	        menu_items_2.each(function(i) {
	            if ($j(menu_items_2[i]).hasClass("menu-item-has-children")) {
	                var subitems_number = $j(menu_items_2[i]).find("ul > li").length;
	                $j(menu_items_2[i]).hoverIntent({
	                    over: function() {
	                        $j(menu_items_2[i]).addClass("open");
	                        $j(menu_items_2[i]).find("ul").slideDown(subitems_number * 40, "easeInOutSine", function() {
	                        });
	                    },
	                    out: function() {
	                        $j(menu_items_2[i]).removeClass("open");
	                        $j(menu_items_2[i]).find("ul").slideUp(subitems_number * 40, "easeInOutSine");
	                    },
	                    timeout: 1e3
	                });
	            }
	        });
	    } else if ($j(".vertical_menu_on_click").length) {
	        var menu_items = $j(".vertical_menu_on_click > ul > li > a");
	        var menu_items_2 = $j(".vertical_menu_on_click ul li ul li a");
	        menu_items.each(function(i) {
	            if ($j(menu_items[i]).parent().hasClass("has_sub")) {
	                $j(menu_items[i]).on("tap click", function(e) {
	                    e.preventDefault();
	                    if (!$j(this).parent().hasClass("open")) {
	                        $j(".vertical_menu_on_click > ul > li").removeClass("open");
	                        $j(".vertical_menu_on_click > ul > li").find(".second").slideUp("fast");
	                        $j(this).parent().addClass("open");
	                        $j(this).parent().find(".second").slideDown("slow", function() {
	                        });
	                    } else {
	                        $j(this).parent().removeClass("open");
	                        $j(this).parent().find(".second").slideUp("fast", function() {
	                        });
	                    }
	                    return false;
	                });
	            }
	        });
	        menu_items_2.each(function(i) {
	            if ($j(menu_items_2[i]).parent().hasClass("menu-item-has-children")) {
	                $j(menu_items_2[i]).on("tap click", function(e) {
	                    e.preventDefault();
	                    if (!$j(this).parent().hasClass("open")) {
	                        $j(".vertical_menu_on_click ul li ul li").removeClass("open");
	                        $j(".vertical_menu_on_click ul li ul li").find("ul").slideUp("fast");
	                        $j(this).parent().addClass("open");
	                        $j(this).parent().find("ul").slideDown("slow", function() {
	                        });
	                    } else {
	                        $j(this).parent().removeClass("open");
	                        $j(this).parent().find("ul").slideUp("fast", function() {
	                        });
	                    }
	                    return false;
	                });
	            }
	        });
	    } else if ($j(".no-touch .vertical_menu_float").length) {
	        var menu_items = $j(".no-touch .vertical_menu_float > ul > li");
	        var menu_items_2 = $j(".no-touch .vertical_menu_float ul li ul li");
	        menu_items.each(function(i) {
	            if ($j(menu_items[i]).hasClass("has_sub")) {
	                $j(menu_items[i]).hoverIntent({
	                    over: function() {
	                        $j(menu_items[i]).addClass("open");
	                        $j(menu_items[i]).find(".second").addClass("vertical_menu_start");
	                    },
	                    out: function() {
	                        $j(menu_items[i]).removeClass("open");
	                        $j(menu_items[i]).find(".second").removeClass("vertical_menu_start");
	                    },
	                    timeout: 300
	                });
	            }
	        });
	        menu_items_2.each(function(i) {
	            if ($j(menu_items_2[i]).hasClass("menu-item-has-children")) {
	                var subitems_number = $j(menu_items_2[i]).find("ul > li").length;
	                $j(menu_items_2[i]).hoverIntent({
	                    over: function() {
	                        $j(menu_items_2[i]).addClass("open");
	                        $j(menu_items_2[i]).find("ul").addClass("vertical_submenu_start");
	                    },
	                    out: function() {
	                        $j(menu_items_2[i]).removeClass("open");
	                        $j(menu_items_2[i]).find("ul").removeClass("vertical_submenu_start");
	                    },
	                    timeout: 300
	                });
	            }
	        });
	    }
	}

	exports.initVerticalMobileMenu = function() {
	    "use strict";
	    if ($j(".vertical_menu_toggle").length) {
	        $j(".touch .vertical_menu_toggle > ul > li.has_sub > a .plus").on("tap click", function(e) {
	            e.stopPropagation();
	            e.preventDefault();
	            if ($j(this).parent().next("div.second").is(":visible")) {
	                $j(this).parents(".touch .vertical_menu_toggle > ul > li.has_sub").removeClass("open");
	                $j(this).parent().next("div.second").slideUp(200);
	            } else {
	                $j(this).parents(".touch .vertical_menu_toggle > ul > li.has_sub").addClass("open");
	                $j(this).parent().next("div.second").slideDown(200);
	            }
	        });
	        $j(".touch .vertical_menu_toggle ul li ul li > a .plus").on("tap click", function(e) {
	            e.stopPropagation();
	            e.preventDefault();
	            if ($j(this).parent().next("ul").is(":visible")) {
	                $j(this).parents(".touch .vertical_menu_toggle ul li ul li").removeClass("open");
	                $j(this).parent().next("ul").slideUp(200);
	            } else {
	                $j(this).parents(".touch .vertical_menu_toggle ul li ul li").addClass("open");
	                $j(this).parent().next("ul").slideDown(200);
	            }
	        });
	    } else if ($j(".vertical_menu_float").length) {
	        $j(".touch .vertical_menu_float > ul > li.has_sub > a .plus").on("tap click", function(e) {
	            e.stopPropagation();
	            e.preventDefault();
	            if ($j(this).parent().next("div.second").hasClass("vertical_menu_start")) {
	                $j(this).parents(".touch .vertical_menu_float > ul > li.has_sub").removeClass("open");
	                $j(this).parents(".touch .vertical_menu_float > ul > li.has_sub").find(".second").removeClass("vertical_menu_start");
	            } else {
	                $j(this).parents(".touch .vertical_menu_float > ul > li.has_sub").addClass("open");
	                $j(this).parents(".touch .vertical_menu_float > ul > li.has_sub").find(".second").addClass("vertical_menu_start");
	            }
	        });
	        $j(".touch .vertical_menu_float ul li ul li > a .plus").on("tap click", function(e) {
	            e.stopPropagation();
	            e.preventDefault();
	            if ($j(this).parent().next("ul").hasClass("vertical_submenu_start")) {
	                $j(this).parents(".touch .vertical_menu_float ul li ul li").removeClass("open");
	                $j(this).parents(".touch .vertical_menu_float ul li ul li").find("ul").removeClass("vertical_submenu_start");
	            } else {
	                $j(this).parents(".touch .vertical_menu_float ul li ul li").addClass("open");
	                $j(this).parents(".touch .vertical_menu_float ul li ul li").find("ul").addClass("vertical_submenu_start");
	            }
	        });
	    }
	}

	var checkVerticalMenuTransparency = function() {
	    if ($scroll !== 0) {
	        $j("body.vertical_menu_transparency").removeClass("vertical_menu_transparency_on");
	    } else {
	        $j("body.vertical_menu_transparency").addClass("vertical_menu_transparency_on");
	    }
	}

	var showHideVerticalMenu = function() {
	    if ($j(".vertical_menu_hidden").length) {
	        var vertical_menu = $j("aside.vertical_menu_area");
	        var vertical_menu_bottom_logo = $j(".vertical_menu_area_bottom_logo");
	        var hovered_flag = true;
	        $j(".vertical_menu_hidden_button").on("click", function(e) {
	            e.preventDefault();
	            if (hovered_flag) {
	                hovered_flag = false;
	                current_scroll = $j(window).scrollTop();
	                vertical_menu.addClass("active");
	                vertical_menu_bottom_logo.addClass("active");
	            } else {
	                hovered_flag = true;
	                vertical_menu.removeClass("active");
	                vertical_menu_bottom_logo.removeClass("active");
	            }
	        });
	        $j(window).scroll(function() {
	            if (Math.abs($scroll - current_scroll) > 400) {
	                hovered_flag = true;
	                vertical_menu.removeClass("active");
	                vertical_menu_bottom_logo.removeClass("active");
	            }
	        });
	        (function() {
	            var Outclick, outclick, _this = this;
	            Outclick = function() {
	                Outclick.name = "Outclick";
	                function Outclick() {
	                    this.objects = [];
	                }
	                Outclick.prototype.check = function(element, event) {
	                    return !element.is(event.target) && element.has(event.target).length === 0;
	                };
	                Outclick.prototype.trigger = function(e) {
	                    var execute, _this = this;
	                    execute = false;
	                    return $j.each(this.objects, function(index, el) {
	                        if (_this.check(el.container, e)) {
	                            if (el.related.length < 1) {
	                                execute = true;
	                            } else {
	                                $j.each(el.related, function(index, relation) {
	                                    if (_this.check(relation, e)) {
	                                        return execute = true;
	                                    } else {
	                                        execute = false;
	                                        return false;
	                                    }
	                                });
	                            }
	                            if (execute) {
	                                return el.callback.call(el.container);
	                            }
	                        }
	                    });
	                };
	                return Outclick;
	            }();
	            outclick = new Outclick();
	            $j.fn.outclick = function(options) {
	                var _this = this;
	                if (options == null) {
	                    options = {};
	                }
	                options.related || (options.related = []);
	                options.callback || (options.callback = function() {
	                    return _this.hide();
	                });
	                return outclick.objects.push({
	                    container: this,
	                    related: options.related,
	                    callback: options.callback
	                });
	            };
	            $j(document).mouseup(function(e) {
	                return outclick.trigger(e);
	            });
	        }).call(this);
	        $j(vertical_menu).outclick({
	            callback: function() {
	                hovered_flag = true;
	                vertical_menu.removeClass("active");
	                vertical_menu_bottom_logo.removeClass("active");
	            }
	        });
	    }
	}

	;(function($) {
	    "use strict";
	    $.fn.countTo = function(options) {
	        options = $.extend({}, $.fn.countTo.defaults, options || {});
	        var loops = Math.ceil(options.speed / options.refreshInterval), increment = (options.to - options.from) / loops;
	        return $(this).each(function() {
	            var _this = this, loopCount = 0, value = options.from, interval = setInterval(updateTimer, options.refreshInterval);
	            function updateTimer() {
	                value += increment;
	                loopCount++;
	                $(_this).html(value.toFixed(options.decimals));
	                if (typeof options.onUpdate === "function") {
	                    options.onUpdate.call(_this, value);
	                }
	                if (loopCount >= loops) {
	                    clearInterval(interval);
	                    value = options.to;
	                    if (typeof options.onComplete === "function") {
	                        options.onComplete.call(_this, value);
	                    }
	                }
	            }
	        });
	    };
	    $.fn.countTo.defaults = {
	        from: 0,
	        to: 100,
	        speed: 1e3,
	        refreshInterval: 100,
	        decimals: 0,
	        onUpdate: null,
	        onComplete: null
	    };
	})(jQuery);

	var initToCounter = function() {
	    "use strict";
	    if ($j(".counter.zero").length) {
	        $j(".counter.zero").each(function() {
	            if (!$j(this).hasClass("executed")) {
	                $j(this).addClass("executed");
	                if ($j(this).parents(".vertical_split_slider").length) {
	                    $j(this).parent().css("opacity", "1");
	                    var $max = parseFloat($j(this).text());
	                    $j(this).countTo({
	                        from: 0,
	                        to: $max,
	                        speed: 1500,
	                        refreshInterval: 100
	                    });
	                } else {
	                    $j(this).appear(function() {
	                        $j(this).parent().css("opacity", "1");
	                        var $max = parseFloat($j(this).text());
	                        $j(this).countTo({
	                            from: 0,
	                            to: $max,
	                            speed: 1500,
	                            refreshInterval: 100
	                        });
	                    }, {
	                        accX: 0,
	                        accY: -200
	                    });
	                }
	            }
	        });
	    }
	}

	var initCounter = function() {
	    "use strict";
	    if ($j(".counter.random").length) {
	        $j(".counter.random").each(function() {
	            if (!$j(this).hasClass("executed")) {
	                $j(this).addClass("executed");
	                if ($j(this).parents(".vertical_split_slider").length) {
	                    $j(this).parent().css("opacity", "1");
	                    $j(this).absoluteCounter({
	                        speed: 2e3,
	                        fadeInDelay: 1e3
	                    });
	                } else {
	                    $j(this).appear(function() {
	                        $j(this).parent().css("opacity", "1");
	                        $j(this).absoluteCounter({
	                            speed: 2e3,
	                            fadeInDelay: 1e3
	                        });
	                    }, {
	                        accX: 0,
	                        accY: -200
	                    });
	                }
	            }
	        });
	    }
	}

	var initCountdown = function() {
	    "use strict";
	    if ($j(".countdown").length) {
	        $j(".countdown").each(function() {
	            var countdownId = $j(this).attr("id");
	            var $this = $j("#" + countdownId);
	            var year = 0;
	            var month = 0;
	            var day = 0;
	            var hour = 0;
	            var minute = 0;
	            var monthsLabel;
	            var monthLabel;
	            var daysLabel;
	            var dayLabel;
	            var hoursLabel;
	            var hourLabel;
	            var minutesLabel;
	            var minuteLabel;
	            var secondsLabel;
	            var secondLabel;
	            var tickf;
	            var timezone;
	            var digitfs;
	            var labelfs;
	            var color;
	            if (typeof $this.data("year") !== "undefined" && $this.data("year") !== false) {
	                year = $this.data("year");
	            }
	            if (typeof $this.data("month") !== "undefined" && $this.data("month") !== false) {
	                month = $this.data("month");
	            }
	            if (typeof $this.data("day") !== "undefined" && $this.data("day") !== false) {
	                day = $this.data("day");
	            }
	            if (typeof $this.data("hour") !== "undefined" && $this.data("hour") !== false) {
	                hour = $this.data("hour");
	            }
	            if (typeof $this.data("minute") !== "undefined" && $this.data("minute") !== false) {
	                minute = $this.data("minute");
	            }
	            if (typeof $this.data("monthslabel") !== "undefined" && $this.data("monthslabel") !== false) {
	                monthsLabel = $this.data("monthslabel");
	            }
	            if (typeof $this.data("monthlabel") !== "undefined" && $this.data("monthlabel") !== false) {
	                monthLabel = $this.data("monthlabel");
	            }
	            if (typeof $this.data("dayslabel") !== "undefined" && $this.data("dayslabel") !== false) {
	                daysLabel = $this.data("dayslabel");
	            }
	            if (typeof $this.data("daylabel") !== "undefined" && $this.data("daylabel") !== false) {
	                dayLabel = $this.data("daylabel");
	            }
	            if (typeof $this.data("hourslabel") !== "undefined" && $this.data("hourslabel") !== false) {
	                hoursLabel = $this.data("hourslabel");
	            }
	            if (typeof $this.data("hourlabel") !== "undefined" && $this.data("hourlabel") !== false) {
	                hourLabel = $this.data("hourlabel");
	            }
	            if (typeof $this.data("minuteslabel") !== "undefined" && $this.data("minuteslabel") !== false) {
	                minutesLabel = $this.data("minuteslabel");
	            }
	            if (typeof $this.data("minutelabel") !== "undefined" && $this.data("minutelabel") !== false) {
	                minuteLabel = $this.data("minuteLabel");
	            }
	            if (typeof $this.data("secondslabel") !== "undefined" && $this.data("secondslabel") !== false) {
	                secondsLabel = $this.data("secondslabel");
	            }
	            if (typeof $this.data("secondlabel") !== "undefined" && $this.data("secondlabel") !== false) {
	                secondLabel = $this.data("secondlabel");
	            }
	            if (typeof $this.data("tickf") !== "undefined" && $this.data("tickf") !== false) {
	                tickf = $this.data("tickf");
	            }
	            if (typeof $this.data("timezone") !== "undefined" && $this.data("timezone") !== false) {
	                timezone = $this.data("timezone");
	            }
	            if (typeof $this.data("digitfs") !== "undefined" && $this.data("digitfs") !== false) {
	                digitfs = $this.data("digitfs");
	            }
	            if (typeof $this.data("labelfs") !== "undefined" && $this.data("labelfs") !== false) {
	                labelfs = $this.data("labelfs");
	            }
	            if (typeof $this.data("color") !== "undefined" && $this.data("color") !== false) {
	                color = $this.data("color");
	            }
	            $this.countdown({
	                until: new Date(year, month - 1, day, hour, minute, 44),
	                labels: [ "Years", monthsLabel, "Weeks", daysLabel, hoursLabel, minutesLabel, secondsLabel ],
	                labels1: [ "Year", monthLabel, "Week", dayLabel, hourLabel, minuteLabel, secondLabel ],
	                format: "ODHMS",
	                timezone: timezone,
	                padZeroes: true,
	                significant: 0,
	                onTick: function() {
	                    if (digitfs !== "undefined" && digitfs !== "") {
	                        $this.find(".countdown-amount").css("font-size", digitfs + "px").css("line-height", digitfs + "px");
	                    }
	                    if (labelfs !== "undefined" && labelfs !== "") {
	                        $this.find(".countdown-period").css("font-size", labelfs + "px");
	                    }
	                    if (color !== "undefined" && color !== "") {
	                        $this.find(".countdown_separator").css("background-color", color);
	                    }
	                }
	            });
	        });
	    }
	}

	var initProgressBars = function() {
	    "use strict";
	    if ($j(".q_progress_bar").length) {
	        $j(".q_progress_bar").each(function() {
	            if ($j(this).parents(".vertical_split_slider").length) {
	                initToCounterHorizontalProgressBar($j(this));
	                var percentage = $j(this).find(".progress_content").data("percentage");
	                $j(this).find(".progress_content").css("width", "0%");
	                $j(this).find(".progress_content").animate({
	                    width: percentage + "%"
	                }, 1500);
	                $j(this).find(".progress_number_wrapper").css("width", "0%");
	                $j(this).find(".progress_number_wrapper").animate({
	                    width: percentage + "%"
	                }, 1500);
	            } else {
	                $j(this).appear(function() {
	                    initToCounterHorizontalProgressBar($j(this));
	                    var percentage = $j(this).find(".progress_content").data("percentage");
	                    $j(this).find(".progress_content").css("width", "0%");
	                    $j(this).find(".progress_content").animate({
	                        width: percentage + "%"
	                    }, 1500);
	                    $j(this).find(".progress_number_wrapper").css("width", "0%");
	                    $j(this).find(".progress_number_wrapper").animate({
	                        width: percentage + "%"
	                    }, 1500);
	                }, {
	                    accX: 0,
	                    accY: -200
	                });
	            }
	        });
	    }
	}

	var initToCounterHorizontalProgressBar = function($this) {
	    "use strict";
	    var percentage = parseFloat($this.find(".progress_content").data("percentage"));
	    if ($this.find(".progress_number span").length) {
	        $this.find(".progress_number span").each(function() {
	            $j(this).parents(".progress_number_wrapper").css("opacity", "1");
	            $j(this).countTo({
	                from: 0,
	                to: percentage,
	                speed: 1500,
	                refreshInterval: 50
	            });
	        });
	    }
	}

	var initListAnimation = function() {
	    "use strict";
	    if ($j(".animate_list").length > 0 && $j(".no_animation_on_touch").length === 0) {
	        $j(".animate_list").each(function() {
	            $j(this).appear(function() {
	                $j(this).find("li").each(function(l) {
	                    var k = $j(this);
	                    setTimeout(function() {
	                        k.animate({
	                            opacity: 1,
	                            top: 0
	                        }, 1500);
	                    }, 100 * l);
	                });
	            }, {
	                accX: 0,
	                accY: -200
	            });
	        });
	    }
	}

	var initPortfolio = function() {
	    "use strict";
	    if ($j(".projects_holder_outer:not(.masonry_with_space)").length) {
	        $j(".projects_holder_outer").each(function() {
	            $j(".filter_holder").each(function() {
	                var filter_height = 0;
	                $j(this).find("li.filter").each(function() {
	                    filter_height += $j(this).height();
	                });
	                $j(this).on("click", function(data) {
	                    var $drop = $j(this), $bro = $drop.siblings(".hidden");
	                    if (!$drop.hasClass("expanded")) {
	                        $drop.find("ul").css("z-index", "1000");
	                        $drop.find("ul").height(filter_height + 39);
	                        $drop.addClass("expanded");
	                        var label = $drop.find(".label span");
	                        label.text(label.attr("data-label"));
	                    } else {
	                        $drop.find("ul").height(36);
	                        $drop.removeClass("expanded");
	                        var $selected = $j(data.target), ndx = $selected.index();
	                        if ($bro.length) {
	                            $bro.find("option").removeAttr("selected").eq(ndx).attr("selected", "selected").change();
	                        }
	                    }
	                });
	            });
	            $j(".filter_holder .filter").on("click", function() {
	                var $this = $j(this).text();
	                var dropLabels = $j(".filter_holder").find(".label span");
	                dropLabels.each(function() {
	                    $j(this).text($this);
	                });
	            });
	            var currentPortfolio = $j(this).find(".projects_holder");
	            if (currentPortfolio.hasClass("v1")) {
	                var timeArray = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25);
	            } else if (currentPortfolio.hasClass("v2")) {
	                var timeArray = new Array(1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20);
	            } else if (currentPortfolio.hasClass("v3")) {
	                var timeArray = new Array(1, 2, 3, 2, 3, 4, 3, 4, 5, 4, 5, 6, 5, 6, 7, 6, 7, 8, 7, 8, 9, 8, 9, 10, 9, 10, 11, 10, 11, 12, 11, 12, 13, 12, 13, 14, 13, 14, 15, 14, 15, 16, 15, 16, 17, 16, 17, 18, 17, 18, 19, 18, 19, 20, 19, 20, 21, 20, 21, 22);
	            } else if (currentPortfolio.hasClass("v4")) {
	                var timeArray = new Array(1, 2, 3, 4, 2, 3, 4, 5, 3, 4, 5, 6, 4, 5, 6, 7, 5, 6, 7, 8, 6, 7, 8, 9, 7, 8, 9, 10, 8, 9, 10, 11, 9, 10, 11, 12, 10, 11, 12, 13, 11, 12, 13, 14, 12, 13, 14, 15, 13, 14, 15, 16, 14, 15, 16, 17, 15, 16, 17, 18, 16, 17, 18, 19, 17, 18, 19, 20, 18, 19, 20, 21);
	            } else if (currentPortfolio.hasClass("v5")) {
	                var timeArray = new Array(1, 2, 3, 4, 5, 2, 3, 4, 5, 6, 3, 4, 5, 6, 7, 4, 5, 6, 7, 8, 5, 6, 7, 8, 9, 6, 7, 8, 9, 10, 7, 8, 9, 10, 11, 8, 9, 10, 11, 12, 9, 10, 11, 12, 13, 10, 11, 12, 13, 14, 11, 12, 13, 14, 15, 12, 13, 14, 15, 16, 13, 14, 15, 16, 17, 14, 15, 16, 17, 18, 15, 16, 17, 18, 19, 20, 16, 17, 18, 19, 20, 17, 18, 19, 20, 21, 18, 19, 20, 21, 22, 19, 20, 21, 22, 23);
	            } else if (currentPortfolio.hasClass("v6")) {
	                var timeArray = new Array(1, 2, 3, 4, 5, 6, 2, 3, 4, 5, 6, 7, 3, 4, 5, 6, 7, 8, 4, 5, 6, 7, 8, 9, 5, 6, 7, 8, 9, 10, 6, 7, 8, 9, 10, 11, 7, 8, 9, 10, 11, 12, 8, 9, 10, 11, 12, 13, 9, 10, 11, 12, 13, 14, 10, 11, 12, 13, 14, 15, 11, 12, 13, 14, 15, 16, 12, 13, 14, 15, 16, 17, 13, 14, 15, 16, 17, 18, 14, 15, 16, 17, 18, 19, 15, 16, 17, 18, 19, 20, 16, 17, 18, 19, 20, 21, 17, 18, 19, 20, 21, 22);
	            }
	            currentPortfolio.mixitup({
	                showOnLoad: "all",
	                transitionSpeed: 600,
	                minHeight: 150,
	                onMixLoad: function() {
	                    $j(".projects_holder").addClass("hideItems");
	                    $j(".projects_holder article").css("visibility", "visible");
	                    if (currentPortfolio.hasClass("portfolio_one_by_one")) {
	                        currentPortfolio.find("article").each(function(l) {
	                            var currentPortfolioItem = $j(this);
	                            if ($j(".vertical_split_slider").length) {
	                                var acc = 0;
	                            } else {
	                                var acc = -150;
	                            }
	                            setTimeout(function() {
	                                currentPortfolioItem.addClass("show");
	                            }, 100 * l);
	                        });
	                    }
	                    if (currentPortfolio.hasClass("slide_from_left")) {
	                        currentPortfolio.find("article").each(function(i) {
	                            var currentPortfolioItem = $j(this);
	                            setTimeout(function() {
	                                currentPortfolioItem.addClass("show");
	                            }, Math.random() * 200);
	                        });
	                    }
	                    if (currentPortfolio.hasClass("slide_from_top")) {
	                        currentPortfolio.find("article").each(function(i) {
	                            var currentPortfolioItem = $j(this);
	                            setTimeout(function() {
	                                currentPortfolioItem.addClass("show");
	                            }, timeArray[i] * 50);
	                        });
	                    }
	                    if (currentPortfolio.hasClass("diagonal_fade")) {
	                        currentPortfolio.find("article").each(function(i) {
	                            var currentPortfolioItem = $j(this);
	                            setTimeout(function() {
	                                currentPortfolioItem.addClass("show");
	                            }, timeArray[i] * 50);
	                        });
	                    }
	                    initParallax();
	                },
	                onMixEnd: function() {
	                    initParallax();
	                }
	            });
	        });
	    }
	}

	function initPortfolioZIndex() {
	    "use strict";
	    if ($j(".projects_holder_outer.portfolio_no_space").length) {
	        $j(".no_space.hover_text article").each(function(i) {
	            $j(this).css("z-index", i + 10);
	        });
	    }
	}

	function initPortfolioMasonry() {
	    "use strict";
	    if ($j(".projects_masonry_holder, .masonry_with_space").length) {
	        $j(".projects_masonry_holder, .masonry_with_space .projects_holder").each(function() {
	            var $window = jQuery(window);
	            var $this = $j(this);
	            $this.waitForImages(function() {
	                $this.animate({
	                    opacity: 1
	                });
	                if ($j(".projects_masonry_holder").length) {
	                    resizeMasonry($this);
	                }
	                $this.isotope({
	                    resizable: false,
	                    itemSelector: ".portfolio_masonry_item, .mix",
	                    layoutMode: "masonry"
	                }).isotope("layout");
	                if ($j(".projects_masonry_holder").length) {
	                    setPortfolioMasZIndex();
	                    $window.resize(function() {
	                        resizeMasonry($this);
	                        setPortfolioMasZIndex();
	                    });
	                }
	                if ($this.hasClass("portfolio_one_by_one")) {
	                    $this.find("article").each(function(l) {
	                        var $this = $j(this);
	                        setTimeout(function() {
	                            $this.addClass("show");
	                        }, 100 * l);
	                    });
	                }
	                if ($this.hasClass("portfolio_fade_from_bottom")) {
	                    $this.find("article").each(function(l) {
	                        $j(this).appear(function() {
	                            $j(this).addClass("show");
	                        }, {
	                            accX: 0,
	                            accY: -150
	                        });
	                    });
	                }
	            });
	        });
	    }
	}

	var portfolio_width;

	function resizeMasonry(container) {
	    var $window = jQuery(window);
	    if ($j(".full_width").length) {
	        if ($j("body").hasClass("vertical_menu_enabled") && $window_width > 1e3) {
	            portfolio_width = $window.innerWidth() - $j(".vertical_menu_area").innerWidth();
	        } else {
	            portfolio_width = $window.innerWidth();
	        }
	    } else {
	        var closest_container = container.closest(".container_inner");
	        if (closest_container.has(".column_inner").length) {
	            portfolio_width = container.closest(".column_inner").innerWidth();
	        } else {
	            portfolio_width = closest_container.innerWidth();
	        }
	    }
	    container.width(portfolio_width);
	    if (container.hasClass("gs4")) {
	        var $cols = 4;
	        if (portfolio_width <= 1e3 && portfolio_width > 480) {
	            $cols = 2;
	        } else if (portfolio_width <= 480) {
	            $cols = 1;
	        }
	    } else {
	        var $cols = 5;
	        if (portfolio_width > 1600) {
	            $cols = 5;
	        } else if (portfolio_width <= 1600 && portfolio_width > 1200) {
	            $cols = 4;
	        } else if (portfolio_width <= 1200 && portfolio_width > 1e3) {
	            $cols = 3;
	        } else if (portfolio_width <= 1e3 && portfolio_width > 480) {
	            $cols = 2;
	        } else if (portfolio_width <= 480) {
	            $cols = 1;
	        }
	    }
	    var largeItemHeight;
	    if (container.find('article[class*="default"]:first img').height()) {
	        largeItemHeight = container.find('article[class*="default"]:first img').height();
	    } else if (container.find('article[class*="large_width"]:not(.large_width_height):first img').height()) {
	        largeItemHeight = container.find('article[class*="large_width"]:not(.large_width_height):first img').height();
	    } else {
	        largeItemHeight = container.find('article[class*="large_width_height"]:first img').height() ? container.find('article[class*="large_width_height"]:first img').height() / 2 : container.find('article[class*="large_height"]:first img').height() / 2;
	    }
	    var double = $window.innerWidth() > 480 ? 2 : 1;
	    container.find('article[class*="large_width_height"] img, article[class*="large_height"] img').css("height", largeItemHeight * double);
	    container.isotope({
	        masonry: {
	            columnWidth: portfolio_width / parseInt($cols)
	        }
	    });
	}

	function setPortfolioMasZIndex() {
	    var $elemXPos = {};
	    var $elemZIndex = {};
	    $j(".projects_masonry_holder article").each(function() {
	        $elemXPos[$j(this).index()] = getPortfolioXPos($j(this).css("left"));
	    });
	    var $elemXPosArray = $j.map($elemXPos, function(value) {
	        return value;
	    });
	    $elemXPosArray = cleanPortfolioMasXArray($elemXPosArray);
	    $elemXPosArray.sort(function(x, y) {
	        return x - y;
	    });
	    for (var i = 0; i < $elemXPosArray.length; i++) {
	        $elemZIndex[$elemXPosArray[i]] = i * 10;
	    }
	    $j.each($elemXPos, function(key, val) {
	        var $zi;
	        var $bgd = val;
	        $j.each($elemZIndex, function(key, val) {
	            if ($bgd == key) {
	                $zi = val;
	            }
	        });
	        $j(".projects_masonry_holder article:eq(" + key + ")").css("z-index", $zi);
	    });
	}

	function cleanPortfolioMasXArray($elemXPosArray) {
	    var i;
	    var length = $elemXPosArray.length;
	    var $elemXPosOutArray = [];
	    var tmp = {};
	    for (i = 0; i < length; i++) {
	        tmp[$elemXPosArray[i]] = 0;
	    }
	    for (i in tmp) {
	        $elemXPosOutArray.push(i);
	    }
	    return $elemXPosOutArray;
	}

	function getPortfolioXPos(css) {
	    return css.substr(0, css.length - 2);
	}

	function initPortfolioMasonryFilter() {
	    "use strict";
	    var portfolioIsotopeAnimation = null;
	    $j(".filter:first").addClass("current");
	    $j(".filter").click(function() {
	        clearTimeout(portfolioIsotopeAnimation);
	        $j(".isotope, .isotope .isotope-item").css("transition-duration", "0.8s");
	        portfolioIsotopeAnimation = setTimeout(function() {
	            $j(".isotope, .isotope .isotope-item").css("transition-duration", "0s");
	        }, 700);
	        var selector = $j(this).attr("data-filter");
	        $j(".projects_masonry_holder, .masonry_with_space .projects_holder").isotope({
	            filter: selector
	        });
	        $j(".filter").removeClass("current");
	        $j(this).addClass("current");
	        setTimeout(setPortfolioMasZIndex(), 700);
	        return false;
	    });
	}

	function initServiceAnimation() {
	    "use strict";
	    if ($j(".fade_in_circle_holder").length > 0 && $j(".no_animation_on_touch").length === 0) {
	        $j(".fade_in_circle_holder").each(function() {
	            $j(this).appear(function() {
	                $j(this).addClass("animate_circle");
	            }, {
	                accX: 0,
	                accY: -200
	            });
	        });
	    }
	}

	function checkTitleToShowOrHide() {
	    if ($j(".title_outer.animate_title_area").length) {
	        var title_area_height = $j(".title_outer").data("height");
	        if ($scroll > $j(".title").height()) {
	            $j(".title_outer").css({
	                height: title_area_height,
	                opacity: "1",
	                overflow: "visible"
	            });
	        }
	    }
	}

	function initTitleAreaAnimation() {
	    if ($j(".title_outer.animate_title_area").length) {
	        var title_area_height = $j(".title_outer").data("height");
	        if ($j(".title_outer").hasClass("with_image")) {
	            title_area_height = $j(".image.responsive").height();
	        }
	        if ($scroll < $j(".title").height()) {
	            $j(".title_outer").animate({
	                height: title_area_height,
	                opacity: 1
	            }, 500, function() {
	                $j(this).css({
	                    overflow: "visible"
	                });
	                initPortfolioSingleInfo();
	                if ($j("nav.content_menu").length > 0) {
	                    content_menu_position = $j("nav.content_menu").offset().top;
	                    contentMenuPosition();
	                }
	            });
	        }
	    }
	}

	function initParallaxTitle() {
	    "use strict";
	    if ($j(".title").length > 0 && $j(".touch").length === 0) {
	        if ($j(".title.has_fixed_background").length) {
	            var $background_size_width = parseInt($j(".title.has_fixed_background").css("background-size").match(/\d+/));
	            var title_holder_height = $j(".title.has_fixed_background").height();
	            var title_rate = title_holder_height / 1e4 * 7;
	            var title_distance = $scroll - $j(".title.has_fixed_background").offset().top;
	            var title_bpos = -(title_distance * title_rate);
	            $j(".title.has_fixed_background").css({
	                "background-position": "center " + (0 + add_for_admin_bar) + "px"
	            });
	            if ($j(".title.has_fixed_background").hasClass("zoom_out")) {
	                $j(".title.has_fixed_background").css({
	                    "background-size": $background_size_width - $scroll + "px auto"
	                });
	            }
	        }
	        $j(window).on("scroll", function() {
	            if ($j(".title.has_fixed_background").length) {
	                var title_distance = $scroll - $j(".title.has_fixed_background").offset().top;
	                var title_bpos = -(title_distance * title_rate);
	                $j(".title.has_fixed_background").css({
	                    "background-position": "center " + (title_bpos + add_for_admin_bar) + "px"
	                });
	                if ($j(".title.has_fixed_background").hasClass("zoom_out")) {
	                    $j(".title.has_fixed_background").css({
	                        "background-size": $background_size_width - $scroll + "px auto"
	                    });
	                }
	            }
	        });
	    }
	}

	(function($) {
	    var $window = $(window);
	    var windowHeight = $window.height();
	    $window.resize(function() {
	        windowHeight = $window.height();
	    });
	    $.fn.parallax = function(xpos, speedFactor, outerHeight) {
	        var $this = $(this);
	        var getHeight;
	        var firstTop;
	        var paddingTop = 0;
	        $this.each(function() {
	            firstTop = $this.offset().top;
	        });
	        if (outerHeight) {
	            getHeight = function(jqo) {
	                return jqo.outerHeight(true);
	            };
	        } else {
	            getHeight = function(jqo) {
	                return jqo.height();
	            };
	        }
	        if (arguments.length < 1 || xpos === null) xpos = "50%";
	        if (arguments.length < 2 || speedFactor === null) speedFactor = .1;
	        if (arguments.length < 3 || outerHeight === null) outerHeight = true;
	        function update() {
	            var pos = $window.scrollTop();
	            $this.each(function() {
	                var $element = $(this);
	                var top = $element.offset().top;
	                var height = getHeight($element);
	                if (top + height < pos || top > pos + windowHeight) {
	                    return;
	                }
	                $this.css("backgroundPosition", xpos + " " + Math.round((firstTop - pos) * speedFactor) + "px");
	            });
	        }
	        $window.bind("scroll", update).resize(update);
	        update();
	    };
	})(jQuery);

	function initParallax() {
	    "use strict";
	    if ($j(".parallax_section_holder").length) {
	        $j(".parallax_section_holder").each(function() {
	            var speed = $j(this).data("speed") * .4;
	            $j(this).parallax("50%", speed);
	        });
	    }
	}

	function initSideAreaScroll() {
	    "use strict";
	    if ($j(".side_menu").length) {        
	    }
	}

	function initVerticalAreaMenuScroll() {
	    "use strict";
	    if ($j(".vertical_menu_area.with_scroll").length) {        
	    }
	}

	function loadMore() {
	    "use strict";
	    var i = 1;
	    $j(".load_more a").on("click", function(e) {
	        e.preventDefault();
	        var link = $j(this).attr("href");
	        var $content = ".projects_holder";
	        var $anchor = ".portfolio_paging .load_more a";
	        var $next_href = $j($anchor).attr("href");
	        var filler_num = $j(".projects_holder .filler").length;
	        var load_more_holder = $j(".portfolio_paging");
	        var loading_holder = $j(".portfolio_paging_loading");
	        load_more_holder.hide();
	        loading_holder.show();
	        $j.get(link + "", function(data) {
	            $j(".projects_holder .filler").slice(-filler_num).remove();
	            var $new_content = $j($content, data).wrapInner("").html();
	            $next_href = $j($anchor, data).attr("href");
	            $j($content, data).waitForImages(function() {
	                $j("article.mix:last").after($new_content);
	                $j(".projects_holder article").css("visibility", "visible");
	                $j("article:not(.show)").each(function(l) {
	                    $j(this).addClass("show");
	                });
	                if ($j(".masonry_with_space").length) {
	                    $j(".masonry_with_space .projects_holder").isotope("reloadItems").isotope();
	                } else {
	                    var min_height = $j("article.mix:first").height();
	                    $j("article.mix").css("min-height", min_height);
	                    $j(".projects_holder").mixitup("remix", "all");
	                }
	                prettyPhoto();
	                if ($j(".load_more").attr("rel") > i) {
	                    $j(".load_more a").attr("href", $next_href);
	                } else {
	                    $j(".load_more").remove();
	                }
	                $j(".projects_holder .portfolio_paging:last").remove();
	                $j("article.mix").css("min-height", 0);
	                load_more_holder.show();
	                loading_holder.hide();
	            });
	        });
	        i++;
	    });
	}

	function prettyPhoto() {
	    "use strict";
	    $j("a[data-rel]").each(function() {
	        $j(this).attr("rel", $j(this).data("rel"));
	    });
	    $j("a[rel^='prettyPhoto']").prettyPhoto({
	        animation_speed: "normal",
	        slideshow: false,
	        autoplay_slideshow: false,
	        opacity: .8,
	        show_title: true,
	        allow_resize: true,
	        horizontal_padding: 0,
	        default_width: 650,
	        default_height: 400,
	        counter_separator_label: "/",
	        theme: "pp_default",
	        hideflash: false,
	        wmode: "opaque",
	        autoplay: true,
	        modal: false,
	        overlay_gallery: false,
	        keyboard_shortcuts: true,
	        deeplinking: false,
	        social_tools: false
	    });
	}

	function initMobileMenu() {
	    "use strict";
	    $j(".mobile_menu_button > span").on("tap click", function(e) {
	        e.preventDefault();
	        if ($j(".mobile_menu > ul").is(":visible")) {
	            $j(".mobile_menu > ul").slideUp(200);
	        } else {
	            $j(".mobile_menu > ul").slideDown(200);
	        }
	    });
	    $j(".mobile_menu > ul > li.has_sub > span.mobile_arrow, .mobile_menu > ul > li.has_sub > h3, .mobile_menu > ul > li.has_sub > a[href*='#']").on("tap click", function(e) {
	        e.preventDefault();
	        if ($j(this).closest("li.has_sub").find("> ul.sub_menu").is(":visible")) {
	            $j(this).closest("li.has_sub").find("> ul.sub_menu").slideUp(200);
	            $j(this).closest("li.has_sub").removeClass("open_sub");
	        } else {
	            $j(this).closest("li.has_sub").addClass("open_sub");
	            $j(this).closest("li.has_sub").find("> ul.sub_menu").slideDown(200);
	        }
	    });
	    $j(".mobile_menu > ul > li.has_sub > ul.sub_menu > li.has_sub > span.mobile_arrow, .mobile_menu > ul > li.has_sub > ul.sub_menu > li.has_sub > h3, .mobile_menu > ul > li.has_sub > ul.sub_menu > li.has_sub > a[href*='#']").on("tap click", function(e) {
	        e.preventDefault();
	        if ($j(this).parent().find("ul.sub_menu").is(":visible")) {
	            $j(this).parent().find("ul.sub_menu").slideUp(200);
	            $j(this).parent().removeClass("open_sub");
	        } else {
	            $j(this).parent().addClass("open_sub");
	            $j(this).parent().find("ul.sub_menu").slideDown(200);
	        }
	    });
	    $j(".mobile_menu ul li > a, .q_logo a").on("click", function() {
	        if ($j(this).attr("href") !== "http://#" && $j(this).attr("href") !== "#") {
	            $j(".mobile_menu > ul").slideUp();
	        }
	    });
	}

	var $scrollHeight;

	function initPortfolioSingleInfo() {
	    "use strict";
	    var $sidebar = $j(".portfolio_single_follow");
	    if ($j(".portfolio_single_follow").length > 0) {
	        var offset = $sidebar.offset();
	        $scrollHeight = $j(".portfolio_container").height();
	        var $scrollOffset = $j(".portfolio_container").offset();
	        var $window = $j(window);
	        var $headerHeight = parseInt($j("header.page_header").css("height"), 10);
	        $window.scroll(function() {
	            if ($window.width() > 960) {
	                if ($window.scrollTop() + $headerHeight + 3 > offset.top) {
	                    if ($window.scrollTop() + $headerHeight + $sidebar.height() + 24 < $scrollOffset.top + $scrollHeight) {
	                        $sidebar.stop().animate({
	                            marginTop: $window.scrollTop() - offset.top + $headerHeight
	                        });
	                    } else {
	                        $sidebar.stop().animate({
	                            marginTop: $scrollHeight - $sidebar.height() - 24
	                        });
	                    }
	                } else {
	                    $sidebar.stop().animate({
	                        marginTop: 0
	                    });
	                }
	            } else {
	                $sidebar.css("margin-top", 0);
	            }
	        });
	    }
	}

	function initTabs() {
	    "use strict";
	    if ($j(".q_tabs").length) {
	        $j(".q_tabs").appear(function() {
	            $j(".q_tabs").css("visibility", "visible");
	        }, {
	            accX: 0,
	            accY: -100
	        });
	        var $tabsNav = $j(".tabs-nav");
	        var $tabsNavLis = $tabsNav.children("li");
	        $tabsNav.each(function() {
	            var $this = $j(this);
	            $this.next().children(".tab-content").stop(true, true).hide().first().show();
	            $this.children("li").first().addClass("active").stop(true, true).show();
	        });
	        $tabsNavLis.on("click", function(e) {
	            var $this = $j(this);
	            $this.siblings().removeClass("active").end().addClass("active");
	            $this.parent().next().children(".tab-content").stop(true, true).hide().siblings($this.find("a").attr("href")).fadeIn();
	            e.preventDefault();
	        });
	    }
	}

	function initAccordion() {
	    "use strict";
	    if ($j(".q_accordion_holder").length) {
	        $j(".q_accordion_holder").appear(function() {
	            $j(".q_accordion_holder").css("visibility", "visible");
	        }, {
	            accX: 0,
	            accY: -100
	        });
	        if ($j(".accordion").length) {
	            $j(".accordion").accordion({
	                animate: "swing",
	                collapsible: true,
	                active: false,
	                icons: "",
	                heightStyle: "content",
	                activate: function(event, ui) {
	                    initParallax();
	                }
	            });
	            $j(".accordion").each(function() {
	                var activeTab = parseInt($j(this).data("active-tab"));
	                if (activeTab !== "") {
	                    activeTab = activeTab - 1;
	                    $j(this).accordion("option", "active", activeTab);
	                }
	                var borderRadius = parseInt($j(this).data("border-radius"));
	                if (borderRadius !== "") {
	                    $j(this).find(".accordion_mark").css("border-radius", borderRadius + "px");
	                }
	                var collapsible = $j(this).data("collapsible") == "yes" ? true : false;
	                $j(this).accordion("option", "collapsible", collapsible);
	                $j(this).accordion("option", "collapsible", collapsible);
	            });
	        }
	        $j(".toggle").addClass("accordion ui-accordion ui-accordion-icons ui-widget ui-helper-reset").find(".title-holder").addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-top ui-corner-bottom").hover(function() {
	            $j(this).toggleClass("ui-state-hover");
	        }).click(function() {
	            $j(this).toggleClass("ui-accordion-header-active ui-state-active ui-state-default ui-corner-bottom").next().toggleClass("ui-accordion-content-active").slideToggle(400);
	            return false;
	        }).next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").hide();
	        $j(".toggle").each(function() {
	            var activeTab = parseInt($j(this).data("active-tab"));
	            if (activeTab !== "" && activeTab >= 1) {
	                activeTab = activeTab - 1;
	                $j(this).find(".ui-accordion-content").eq(activeTab).show();
	                $j(this).find(".ui-accordion-header").eq(activeTab).addClass("ui-state-active");
	            }
	        });
	    }
	}

	function initAccordionContentLink() {
	    "use strict";
	    if ($j(".accordion").length) {
	        $j(".accordion_holder .accordion_inner .accordion_content a").click(function() {
	            if ($j(this).attr("target") === "_blank") {
	                window.open($j(this).attr("href"), "_blank");
	            } else {
	                window.open($j(this).attr("href"), "_self");
	            }
	            return false;
	        });
	    }
	}

	function initTestimonials() {
	    "use strict";
	    if ($j(".testimonials_carousel").length) {
	        $j(".testimonials_carousel").each(function() {
	            var interval = 5e3;
	            if (typeof $j(this).data("auto-rotate-slides") !== "undefined" && $j(this).data("auto-rotate-slides") !== false) {
	                interval = parseFloat($j(this).data("auto-rotate-slides")) * 1e3;
	            }
	            var slideshow = true;
	            if (interval === 0) {
	                slideshow = false;
	            }
	            var animation = "fade";
	            if (typeof $j(this).data("animation-type") !== "undefined" && $j(this).data("animation-type") !== false) {
	                animation = $j(this).data("animation-type");
	            }
	            var directionNav = true;
	            if (typeof $j(this).data("show-navigation") !== "undefined") {
	                directionNav = $j(this).data("show-navigation") == "no" ? false : true;
	            }
	            var animationSpeed = 600;
	            if (typeof $j(this).data("animation-speed") !== "undefined" && $j(this).data("animation-speed") !== false) {
	                animationSpeed = $j(this).data("animation-speed");
	            }
	        });
	    }
	}

	function initMessages() {
	    "use strict";
	    if ($j(".q_message").length) {
	        $j(".q_message").each(function() {
	            $j(this).find(".close").click(function(e) {
	                e.preventDefault();
	                $j(this).parent().parent().fadeOut(500);
	            });
	        });
	    }
	}

	function initElementsAnimation() {
	    "use strict";
	    if ($j(".element_from_fade").length > 0 && $j(".no_animation_on_touch").length === 0) {
	        $j(".element_from_fade").each(function() {
	            var $this = $j(this);
	            $this.appear(function() {
	                $this.addClass("element_from_fade_on");
	            }, {
	                accX: 0,
	                accY: -100
	            });
	        });
	    }
	    if ($j(".element_from_left").length > 0 && $j(".no_animation_on_touch").length === 0) {
	        $j(".element_from_left").each(function() {
	            var $this = $j(this);
	            $this.appear(function() {
	                $this.addClass("element_from_left_on");
	            }, {
	                accX: 0,
	                accY: -100
	            });
	        });
	    }
	    if ($j(".element_from_right").length > 0 && $j(".no_animation_on_touch").length === 0) {
	        $j(".element_from_right").each(function() {
	            var $this = $j(this);
	            $this.appear(function() {
	                $this.addClass("element_from_right_on");
	            }, {
	                accX: 0,
	                accY: -100
	            });
	        });
	    }
	    if ($j(".element_from_top").length > 0 && $j(".no_animation_on_touch").length === 0) {
	        $j(".element_from_top").each(function() {
	            var $this = $j(this);
	            $this.appear(function() {
	                $this.addClass("element_from_top_on");
	            }, {
	                accX: 0,
	                accY: -100
	            });
	        });
	    }
	    if ($j(".element_from_bottom").length > 0 && $j(".no_animation_on_touch").length === 0) {
	        $j(".element_from_bottom").each(function() {
	            var $this = $j(this);
	            $this.appear(function() {
	                $this.addClass("element_from_bottom_on");
	            }, {
	                accX: 0,
	                accY: -100
	            });
	        });
	    }
	    if ($j(".element_transform").length > 0 && $j(".no_animation_on_touch").length === 0) {
	        $j(".element_transform").each(function() {
	            var $this = $j(this);
	            $this.appear(function() {
	                $this.addClass("element_transform_on");
	            }, {
	                accX: 0,
	                accY: -100
	            });
	        });
	    }
	}

	function initBlog() {
	    "use strict";
	    if ($j(".blog_holder.masonry").length) {
	        var width_blog = $j(this).closest(".container_inner").width();
	        if ($j(".blog_holder.masonry").closest(".column_inner").length) {
	            width_blog = $j(".blog_holder.masonry").closest(".column_inner").width();
	        }
	        $j(".blog_holder.masonry").width(width_blog);
	        var $container = $j(".blog_holder.masonry");
	        $container.waitForImages(function() {
	            setTimeout(function() {
	                $container.isotope({
	                    itemSelector: "article",
	                    resizable: false,
	                    masonry: {
	                        columnWidth: ".blog_holder_grid_sizer",
	                        gutter: ".blog_holder_grid_gutter"
	                    }
	                });
	                $j(".blog_holder.masonry").animate({
	                    opacity: "1"
	                }, 500);
	            }, 400);
	        });
	        $j(".filter").click(function() {
	            var selector = $j(this).attr("data-filter");
	            $container.isotope({
	                filter: selector
	            });
	            return false;
	        });
	        if ($container.hasClass("masonry_infinite_scroll")) {
	            $container.infinitescroll({
	                navSelector: ".blog_infinite_scroll_button span",
	                nextSelector: ".blog_infinite_scroll_button span a",
	                itemSelector: "article",
	                loading: {
	                    finishedMsg: finished_text,
	                    msgText: loading_text
	                }
	            }, function(newElements) {
	                $container.isotope("appended", $j(newElements));                
	                setTimeout(function() {
	                    $j(".blog_holder.masonry").isotope("layout");
	                }, 400);
	            });
	        } else if ($container.hasClass("masonry_load_more")) {
	            var i = 1;
	            $j(".blog_load_more_button a").off("click tap").on("click tap", function(e) {
	                e.preventDefault();
	                var load_more_holder = $j(".blog_load_more_button");
	                var load_more_loading = $j(".blog_load_more_button_loading");
	                load_more_holder.hide();
	                load_more_loading.show();
	                var link = $j(this).attr("href");
	                var $content = ".masonry_load_more";
	                var $anchor = ".blog_load_more_button a";
	                var $next_href = $j($anchor).attr("href");
	                $j.get(link + "", function(data) {
	                    var $new_content = $j($content, data).wrapInner("").html();
	                    $next_href = $j($anchor, data).attr("href");
	                    $container.append($j($new_content)).isotope("reloadItems").isotope({
	                        sortBy: "original-order"
	                    });
	                    setTimeout(function() {
	                        $j(".blog_holder.masonry").isotope("layout");
	                    }, 400);
	                    load_more_holder.show();
	                    load_more_loading.hide();
	                    if ($j(".blog_load_more_button span").attr("rel") > i) {
	                        $j(".blog_load_more_button a").attr("href", $next_href);
	                    } else {
	                        $j(".blog_load_more_button").remove();
	                    }
	                });
	                i++;
	            });
	        }
	    }
	}

	function initBlogMasonryFullWidth() {
	    "use strict";
	    if ($j(".masonry_full_width").length) {
	        var width_blog = $j(".full_width_inner").width();
	        $j(".masonry_full_width").width(width_blog);
	        var $container = $j(".masonry_full_width");
	        $j(".filter").click(function() {
	            var selector = $j(this).attr("data-filter");
	            $container.isotope({
	                filter: selector
	            });
	            return false;
	        });
	        if ($container.hasClass("masonry_infinite_scroll")) {
	            $container.infinitescroll({
	                navSelector: ".blog_infinite_scroll_button span",
	                nextSelector: ".blog_infinite_scroll_button span a",
	                itemSelector: "article",
	                loading: {
	                    finishedMsg: finished_text,
	                    msgText: loading_text
	                }
	            }, function(newElements) {
	                $container.isotope("appended", $j(newElements));
	                setTimeout(function() {
	                    $j(".blog_holder.masonry_full_width").isotope("layout");
	                }, 400);
	            });
	        } else if ($container.hasClass("masonry_load_more")) {
	            var i = 1;
	            $j(".blog_load_more_button a").off("click tap").on("click tap", function(e) {
	                e.preventDefault();
	                var link = $j(this).attr("href");
	                var $content = ".masonry_load_more";
	                var $anchor = ".blog_load_more_button a";
	                var $next_href = $j($anchor).attr("href");
	                $j.get(link + "", function(data) {
	                    var $new_content = $j($content, data).wrapInner("").html();
	                    $next_href = $j($anchor, data).attr("href");
	                    $container.append($j($new_content)).isotope("reloadItems").isotope({
	                        sortBy: "original-order"
	                    });
	                    setTimeout(function() {
	                        $j(".blog_holder.masonry_full_width").isotope("layout");
	                    }, 400);
	                    if ($j(".blog_load_more_button span").attr("rel") > i) {
	                        $j(".blog_load_more_button a").attr("href", $next_href);
	                    } else {
	                        $j(".blog_load_more_button").remove();
	                    }
	                });
	                i++;
	            });
	        }
	        $container.waitForImages(function() {
	            setTimeout(function() {
	                $container.isotope({
	                    itemSelector: "article",
	                    resizable: false,
	                    masonry: {
	                        columnWidth: ".blog_holder_grid_sizer",
	                        gutter: ".blog_holder_grid_gutter"
	                    }
	                });
	                $j(".masonry_full_width").animate({
	                    opacity: "1"
	                }, 500);
	            }, 400);
	        });
	    }
	}

	function initSmallImageBlogHeight() {
	    "use strict";
	    if ($j(".blog_small_image").length) {
	        $j("article").each(function() {
	            $j(this).find(".post_text_inner").css("min-height", $j(this).find(".post_image").height() - 46);
	        });
	    }
	}

	function initQBlog() {
	    "use strict";
	    if ($j(".q_masonry_blog").length) {
	        $j(".q_masonry_blog").each(function() {
	            var width_blog;
	            width_blog = $j(this).parents(".container_inner").width();
	            if ($j(".full_width").length && $j(this).parents(".grid_section").length == 0) {
	                width_blog = $j(".full_width").width();
	            } else {
	                if ($j(this).parents(".column_inner").length) {
	                    width_blog = $j(this).parents(".column_inner").width();
	                }
	            }
	            $j(this).width(width_blog);
	            var $container = $j(this);
	            var $cols = 3;
	            if ($j(".full_width").length && $j(this).parents(".grid_section").length == 0) {
	                if ($container.width() < 480) {
	                    $cols = 1;
	                } else if ($container.width() <= 703) {
	                    $cols = 2;
	                } else if ($container.width() <= 920) {
	                    $cols = 3;
	                } else if ($container.width() <= 1320) {
	                    $cols = 4;
	                } else {
	                    $cols = 5;
	                }
	            } else {
	                if ($container.width() < 420) {
	                    $cols = 1;
	                } else if ($container.width() <= 805) {
	                    $cols = 2;
	                }
	            }
	            $container.isotope({
	                itemSelector: "article",
	                resizable: false,
	                masonry: {
	                    columnWidth: $j(".q_masonry_blog").width() / $cols
	                }
	            });
	            $j(window).resize(function() {
	                if ($j(".full_width").length && $j(this).parents(".grid_section").length == 0) {
	                    if ($container.width() < 480) {
	                        $cols = 1;
	                    } else if ($container.width() <= 703) {
	                        $cols = 2;
	                    } else if ($container.width() <= 920) {
	                        $cols = 3;
	                    } else if ($container.width() <= 1320) {
	                        $cols = 4;
	                    } else {
	                        $cols = 5;
	                    }
	                } else {
	                    if ($container.width() < 420) {
	                        $cols = 1;
	                    } else if ($container.width() <= 785) {
	                        $cols = 2;
	                    } else {
	                        $cols = 3;
	                    }
	                }
	                $container.isotope({
	                    masonry: {
	                        columnWidth: $container.width() / $cols
	                    }
	                });
	            });
	            $j(this).animate({
	                opacity: "1"
	            }, 500);
	        });
	    }
	}

	var timeOuts = [];

	function initProgressBarsIcon() {
	    "use strict";
	    if ($j(".q_progress_bars_icons_holder").length) {
	        $j(".q_progress_bars_icons_holder").each(function() {
	            var $this = $j(this);
	            $this.appear(function() {
	                $this.find(".q_progress_bars_icons").css("opacity", "1");
	                $this.find(".q_progress_bars_icons").each(function() {
	                    var number = $j(this).find(".q_progress_bars_icons_inner").data("number");
	                    var size = $j(this).find(".q_progress_bars_icons_inner").data("size");
	                    if (size !== "") {
	                        $j(this).find(".q_progress_bars_icons_inner.custom_size .bar").css({
	                            width: size + "px",
	                            height: size + "px"
	                        });
	                        $j(this).find(".q_progress_bars_icons_inner.custom_size .bar .fa-stack").css({
	                            "font-size": size / 2 + "px"
	                        });
	                    }
	                    var bars = $j(this).find(".bar");
	                    bars.each(function(i) {
	                        if (i < number) {
	                            var time = (i + 1) * 150;
	                            timeOuts[i] = setTimeout(function() {
	                                $j(bars[i]).addClass("active");
	                            }, time);
	                        }
	                    });
	                });
	            }, {
	                accX: 0,
	                accY: -200
	            });
	        });
	    }
	}

	(function($) {
	    "use strict";
	    var $window = $(window);
	    $.fn.masonryParallax = function(speedFactor, outerHeight, startPosition) {
	        var $this = $(this);
	        var getHeight;
	        var firstTop;
	        var startPositionAdd = 0;
	        firstTop = $this.offset().top;
	        if (outerHeight) {
	            getHeight = function(jqo) {
	                return jqo.outerHeight(true);
	            };
	        } else {
	            getHeight = function(jqo) {
	                return jqo.height();
	            };
	        }
	        if (startPosition != 0) {
	            startPositionAdd = startPosition;
	        }
	        if (arguments.length < 1 || speedFactor === null) speedFactor = .1;
	        if (arguments.length < 2 || outerHeight === null) outerHeight = true;
	        var top = $this.offset().top;
	        var height = getHeight($this);
	        function update() {
	            if (top + height < $scroll || top > $scroll + $window_height) {
	                return;
	            }
	            $this.css("transform", "translate3d(0px, " + Math.round((firstTop - height - $scroll) * speedFactor + startPositionAdd) + "px, 0px)");
	        }
	        $window.bind("scroll", update).resize(update);
	        update();
	    };
	})(jQuery);

	function initMasonryGallery() {
	    "use strict";
	    resizeMasonryGallery($j(".grid-sizer").width());
	    if ($j(".masonry_gallery_holder").length) {
	        $j(".masonry_gallery_holder").each(function() {
	            var $this = $j(this);
	            $this.waitForImages(function() {
	                $this.animate({
	                    opacity: 1
	                });
	                $this.isotope({
	                    itemSelector: ".masonry_gallery_item",
	                    masonry: {
	                        columnWidth: ".grid-sizer"
	                    }
	                });
	                $this.find(".masonry_gallery_item.parallax_item").each(function(i) {
	                    $j(this).masonryParallax($this.data("parallax_item_speed"), true, $this.data("parallax_item_offset"));
	                });
	            });
	        });
	        $j(window).resize(function() {
	            resizeMasonryGallery($j(".grid-sizer").width());
	            $j(".masonry_gallery_holder").isotope("reloadItems");
	        });
	    }
	}

	function resizeMasonryGallery(size) {
	    "use strict";
	    var rectangle_portrait = $j(".masonry_gallery_holder .rectangle_portrait");
	    var rectangle_landscape = $j(".masonry_gallery_holder .rectangle_landscape");
	    var square_big = $j(".masonry_gallery_holder .square_big");
	    var square_small = $j(".masonry_gallery_holder .square_small");
	    rectangle_portrait.css("height", 2 * size);
	    if (window.innerWidth < 600) {
	        rectangle_landscape.css("height", size / 2);
	    } else {
	        rectangle_landscape.css("height", size);
	    }
	    square_big.css("height", 2 * size);
	    if (window.innerWidth < 600) {
	        square_big.css("height", square_big.width());
	    }
	    square_small.css("height", size);
	}

	function initMoreFacts() {
	    "use strict";
	    if ($j(".more_facts_holder").length) {
	        $j(".more_facts_holder").each(function() {
	            var $this = $j(this);
	            var $more_label = "More Facts";
	            if ($j(this).find(".more_facts_button").data("morefacts") !== "") {
	                $more_label = $j(this).find(".more_facts_button").data("morefacts");
	            }
	            var $less_label = "Less Facts";
	            if ($j(this).find(".more_facts_button").data("lessfacts") !== "") {
	                $less_label = $j(this).find(".more_facts_button").data("lessfacts");
	            }
	            var height = $this.find(".more_facts_inner").height() + 70;
	            var speed;
	            if (height > 0 && height < 601) {
	                speed = 800;
	            } else if (height > 600 && height < 1201) {
	                speed = 1500;
	            } else {
	                speed = 2100;
	            }
	            $this.find(".more_facts_outer").css({
	                height: "0px",
	                display: "none",
	                opacity: "0"
	            });
	            $this.find(".more_facts_button").on("mouseenter", function() {
	                $j(this).css("color", $j(this).data("hovercolor"));
	            }).on("mouseleave", function() {
	                if (!$this.find(".more_facts_outer").is(":visible")) {
	                    $j(this).css("color", $j(this).data("color"));
	                }
	            });
	            $this.find(".more_facts_button").click(function() {
	                if (!$this.find(".more_facts_outer").is(":visible")) {
	                    $this.find(".more_facts_fake_arrow").fadeIn(speed);
	                    $this.addClass("more_fact_opened");
	                    $j(this).parent().parent().find(".more_facts_outer").css({
	                        display: "block",
	                        opacity: "1"
	                    }).stop().animate({
	                        height: height + 30
	                    }, speed, function() {
	                        if ($j(".parallax_section_holder").length) {
	                            initParallax();
	                        }
	                    });
	                    $j(this).find(".more_facts_button_text").text($less_label);
	                    $j(this).find(".more_facts_button_arrow").addClass("rotate_arrow");
	                } else {
	                    $this.find(".more_facts_fake_arrow").fadeOut(speed);
	                    $j(this).parent().parent().find(".more_facts_outer").stop().animate({
	                        height: "0px"
	                    }, speed, function() {
	                        $j(this).css({
	                            display: "none",
	                            opacity: "0"
	                        });
	                        if (!$this.find(".more_facts_button").is(":hover")) {
	                            $this.find(".more_facts_button").css("color", $this.find(".more_facts_button").data("color"));
	                        }
	                        $this.removeClass("more_fact_opened");
	                        if ($j(".parallax_section_holder").length) {
	                            initParallax();
	                        }
	                    });
	                    $j(this).find(".more_facts_button_text").text($more_label);
	                    $j(this).find(".more_facts_button_arrow").removeClass("rotate_arrow");
	                }
	            });
	        });
	    }
	}

	function placeholderReplace() {
	    "use strict";
	    $j("#contact-form [placeholder]").focus(function() {
	        var input = $j(this);
	        if (input.val() === input.attr("placeholder")) {
	            if (this.originalType) {
	                this.type = this.originalType;
	                delete this.originalType;
	            }
	            input.val("");
	            input.removeClass("placeholder");
	        }
	    }).blur(function() {
	        var input = $j(this);
	        if (input.val() === "") {
	            if (this.type === "password") {
	                this.originalType = this.type;
	                this.type = "text";
	            }
	            input.addClass("placeholder");
	            input.val(input.attr("placeholder"));
	        }
	    }).blur();
	    $j("#contact-form [placeholder]").parents("form").submit(function() {
	        $j(this).find("[placeholder]").each(function() {
	            var input = $j(this);
	            if (input.val() === input.attr("placeholder")) {
	                input.val("");
	            }
	        });
	    });
	}

	function totop_button(a) {
	    "use strict";
	    var b = $j("#back_to_top");
	    b.removeClass("off on");
	    if (a === "on") {
	        b.addClass("on");
	    } else {
	        b.addClass("off");
	    }
	}

	function backButtonShowHide() {
	    "use strict";
	    $j(window).scroll(function() {
	        var b = $j(this).scrollTop();
	        var c = $j(this).height();
	        var d;
	        if (b > 0) {
	            d = b + c / 2;
	        } else {
	            d = 1;
	        }
	        if (d < 1e3) {
	            totop_button("off");
	        } else {
	            totop_button("on");
	        }
	    });
	}

	function backToTop() {
	    "use strict";
	    $j(document).on("click", "#back_to_top", function(e) {
	        e.preventDefault();
	        $j("body,html").animate({
	            scrollTop: 0
	        }, $j(window).scrollTop() / 3, "linear");
	    });
	}

	function initSteps() {
	    "use strict";
	    if ($j(".q_steps_holder").length) {
	        $j(".q_steps_holder").each(function() {
	            $j(this).appear(function() {
	                $j(this).addClass("show");
	            }, {
	                accX: 0,
	                accY: -200
	            });
	        });
	    }
	}

	function initMessageHeight() {
	    "use strict";
	    if ($j(".q_message.with_icon").length) {
	        $j(".q_message.with_icon").each(function() {
	            if ($j(this).find(".message_text_holder").height() > $j(this).find(".q_message_icon_holder").height()) {
	                $j(this).find(".q_message_icon_holder").height($j(this).find(".message_text").height());
	            } else {
	                $j(this).find(".message_text").height($j(this).find(".q_message_icon_holder").height());
	            }
	        });
	    }
	}

	function initImageHover() {
	    "use strict";
	    if ($j(".image_hover").length) {
	        $j(".image_hover").each(function() {
	            $j(this).appear(function() {
	                var default_visible_time = 300;
	                var transition_delay = $j(this).attr("data-transition-delay");
	                var real_transition_delay = default_visible_time + parseFloat(transition_delay);
	                var object = $j(this);
	                setTimeout(function() {
	                    object.addClass("show");
	                }, parseFloat(transition_delay));
	                setTimeout(function() {
	                    object.removeClass("show");
	                }, real_transition_delay);
	            }, {
	                accX: 0,
	                accY: -200
	            });
	        });
	    }
	}

	function initProgressBarsVertical() {
	    "use strict";
	    if ($j(".q_progress_bars_vertical").length) {
	        $j(".q_progress_bars_vertical").each(function() {
	            $j(this).appear(function() {
	                initToCounterVerticalProgressBar($j(this));
	                var percentage = $j(this).find(".progress_content").data("percentage");
	                $j(this).find(".progress_content").css("height", "0%");
	                $j(this).find(".progress_content").animate({
	                    height: percentage + "%"
	                }, 1500);
	            }, {
	                accX: 0,
	                accY: -200
	            });
	        });
	    }
	}

	function initToCounterVerticalProgressBar($this) {
	    "use strict";
	    if ($this.find(".progress_number span").length) {
	        $this.find(".progress_number span").each(function() {
	            var $max = parseFloat($j(this).text());
	            $j(this).countTo({
	                from: 0,
	                to: $max,
	                speed: 1500,
	                refreshInterval: 50
	            });
	        });
	    }
	}

	function checkAnchorOnLoad() {
	    "use strict";
	    var hash = window.location.hash;
	    var paspartuScrollAdd = $j("body").hasClass("paspartu_on_top_fixed") ? $window_width * paspartu_width : 0;
	    var scrollToAmount;
	    var top_header_height;
	    if (hash !== "" && $j('[data-q_id="' + hash + '"]').length > 0) {
	        if ($j("header.page_header").hasClass("fixed") && !$j("body").hasClass("vertical_menu_enabled")) {
	            if ($j("header.page_header").hasClass("scroll_top")) {
	                top_header_height = header_top_height;
	            } else {
	                top_header_height = 0;
	            }
	            if (!$j("header.page_header").hasClass("transparent") || $j("header.page_header").hasClass("scrolled_not_transparent")) {
	                if (header_height - ($j('[data-q_id="' + hash + '"]').offset().top + top_header_height) / 4 >= min_header_height_scroll) {
	                    var diff_of_header_and_section = $j('[data-q_id="' + hash + '"]').offset().top - header_height - paspartuScrollAdd;
	                    scrollToAmount = diff_of_header_and_section + diff_of_header_and_section / 4 + diff_of_header_and_section / 16 + diff_of_header_and_section / 64 + 1;
	                } else {
	                    if ($j("header.page_header").hasClass("centered_logo")) {
	                        scrollToAmount = $j('[data-q_id="' + hash + '"]').offset().top - min_header_height_scroll - logo_height - 30 - paspartuScrollAdd;
	                    } else {
	                        scrollToAmount = $j('[data-q_id="' + hash + '"]').offset().top - min_header_height_scroll - paspartuScrollAdd;
	                    }
	                }
	            } else {
	                scrollToAmount = $j('[data-q_id="' + hash + '"]').offset().top - paspartuScrollAdd;
	            }
	        } else if ($j("header.page_header").hasClass("fixed_top_header") && !$j("body").hasClass("vertical_menu_enabled")) {
	            if (!$j("header.page_header").hasClass("transparent") || $j("header.page_header").hasClass("scrolled_not_transparent")) {
	                scrollToAmount = $j('[data-q_id="' + hash + '"]').offset().top - header_top_height - paspartuScrollAdd;
	            } else {
	                scrollToAmount = $j('[data-q_id="' + hash + '"]').offset().top - paspartuScrollAdd;
	            }
	        } else if ($j("header.page_header").hasClass("fixed_hiding") && !$j("body").hasClass("vertical_menu_enabled")) {
	            if (!$j("header.page_header").hasClass("transparent") || $j("header.page_header").hasClass("scrolled_not_transparent")) {
	                if ($j('[data-q_id="' + hash + '"]').offset().top - (header_height + logo_height / 2 + 40) <= scroll_amount_for_fixed_hiding) {
	                    scrollToAmount = $j('[data-q_id="' + hash + '"]').offset().top - header_height - logo_height / 2 - 40 - paspartuScrollAdd;
	                } else {
	                    scrollToAmount = $j('[data-q_id="' + hash + '"]').offset().top - min_header_height_fixed_hidden - 40 - paspartuScrollAdd;
	                }
	            } else {
	                scrollToAmount = $j('[data-q_id="' + hash + '"]').offset().top - paspartuScrollAdd;
	            }
	        } else if ($j("header.page_header").hasClass("stick") || $j("header.page_header").hasClass("stick_with_left_right_menu") && !$j("body").hasClass("vertical_menu_enabled")) {
	            if (!$j("header.page_header").hasClass("transparent") || $j("header.page_header").hasClass("scrolled_not_transparent")) {
	                if (sticky_amount >= $j('[data-q_id="' + hash + '"]').offset().top) {
	                    scrollToAmount = $j('[data-q_id="' + hash + '"]').offset().top + 1 - paspartuScrollAdd;
	                } else {
	                    scrollToAmount = $j('[data-q_id="' + hash + '"]').offset().top - min_header_height_sticky - paspartuScrollAdd;
	                }
	            } else {
	                scrollToAmount = $j('[data-q_id="' + hash + '"]').offset().top - paspartuScrollAdd;
	            }
	        } else {
	            scrollToAmount = $j('[data-q_id="' + hash + '"]').offset().top - paspartuScrollAdd;
	        }
	        $j("html, body").animate({
	            scrollTop: Math.round(scrollToAmount)
	        }, 1500, function() {});
	    }
	    $j(".main_menu a, .vertical_menu a, .mobile_menu a").each(function() {
	        var i = $j(this).prop("hash");
	        if (i !== "" && $j('[data-q_id="' + i + '"]').length > 0 && $j('[data-q_id="' + i + '"]').offset().top >= $window_height && $scroll === 0) {
	            $j(this).parent().removeClass("active");
	            $j(this).removeClass("current");
	        }
	    });
	}

	function changeActiveState(id) {
	    "use strict";
	    $j(".main_menu a").parent().removeClass("active");
	    $j(".main_menu a").each(function() {
	        var i = $j(this).prop("hash");
	        if (i === id) {
	            if ($j(this).closest(".second").length === 0) {
	                $j(this).parent().addClass("active");
	            } else {
	                $j(this).closest(".second").parent().addClass("active");
	            }
	            $j(".main_menu a").removeClass("current");
	            $j(this).addClass("current");
	        }
	    });
	    $j(".vertical_menu a").parent().removeClass("active");
	    $j(".vertical_menu a").each(function() {
	        var i = $j(this).prop("hash");
	        if (i === id) {
	            if ($j(this).closest(".second").length === 0) {
	                $j(this).parent().addClass("active");
	            } else {
	                $j(this).closest(".second").parent().addClass("active");
	            }
	            $j(".vertical_menu a").removeClass("current");
	            $j(this).addClass("current");
	        }
	    });
	    $j(".mobile_menu a").parent().removeClass("active");
	    $j(".mobile_menu a").each(function() {
	        var i = $j(this).prop("hash");
	        if (i === id) {
	            if ($j(this).closest(".sub_menu").length === 0) {
	                $j(this).parent().addClass("active");
	            } else {
	                $j(this).closest(".sub_menu").parent().addClass("active");
	            }
	            $j(".mobile_menu a").removeClass("current");
	            $j(this).addClass("current");
	        }
	    });
	}

	function checkAnchorOnScroll() {
	    "use strict";
	    if ($j("[data-q_id]").length && !$j("header.page_header").hasClass("regular")) {
	        $j("[data-q_id]").waypoint(function(direction) {
	            if (direction === "down") {
	                changeActiveState($j(this).data("q_id"));
	            }
	        }, {
	            offset: "50%"
	        });
	        $j("[data-q_id]").waypoint(function(direction) {
	            if (direction === "up") {
	                changeActiveState($j(this).data("q_id"));
	            }
	        }, {
	            offset: function() {
	                return -($j(this).outerHeight() - 150);
	            }
	        });
	    }
	}

	function initHashClick() {
	    "use strict";
	    var $doc = $j("html, body");
	    var paspartuScrollAdd = $j("body").hasClass("paspartu_on_top_fixed") ? $window_width * paspartu_width : 0;
	    var scrollToAmount;
	    $j(document).on("click", ".main_menu a, .vertical_menu a, .qbutton:not(.contact_form_button), .anchor, .widget li.anchor a", function() {
	        var $this = $j(this);
	        var hash = $j(this).prop("hash");
	        var top_header_height;
	        if (!$this.is("button")) {
	            if (hash !== "" && $j(this).attr("href").split("#")[0] === "" || hash !== "" && $j(this).attr("href").split("#")[0] !== "" && hash === window.location.hash || hash !== "" && $j(this).attr("href").split("#")[0] === window.location.href.split("#")[0]) {
	                if ($j("header.page_header").hasClass("fixed") && !$j("body").hasClass("vertical_menu_enabled")) {
	                    if ($j("header.page_header").hasClass("scroll_top")) {
	                        top_header_height = header_top_height;
	                    } else {
	                        top_header_height = 0;
	                    }
	                    if (!$j("header.page_header").hasClass("transparent") || $j("header.page_header").hasClass("scrolled_not_transparent")) {
	                        if (header_height - ($j('[data-q_id="' + hash + '"]').offset().top + top_header_height) / 4 >= min_header_height_scroll) {
	                            var diff_of_header_and_section = $j('[data-q_id="' + hash + '"]').offset().top - header_height - paspartuScrollAdd;
	                            scrollToAmount = diff_of_header_and_section + diff_of_header_and_section / 4 + diff_of_header_and_section / 16 + diff_of_header_and_section / 64 + 1;
	                        } else {
	                            if ($j("header.page_header").hasClass("centered_logo")) {
	                                scrollToAmount = $j('[data-q_id="' + hash + '"]').offset().top - min_header_height_scroll - logo_height - paspartuScrollAdd - 30;
	                            } else {
	                                scrollToAmount = $j('[data-q_id="' + hash + '"]').offset().top - min_header_height_scroll - paspartuScrollAdd;
	                            }
	                        }
	                    } else {
	                        scrollToAmount = $j('[data-q_id="' + hash + '"]').offset().top - paspartuScrollAdd;
	                    }
	                } else if ($j("header.page_header").hasClass("fixed_top_header") && !$j("body").hasClass("vertical_menu_enabled")) {
	                    if (!$j("header.page_header").hasClass("transparent") || $j("header.page_header").hasClass("scrolled_not_transparent")) {
	                        scrollToAmount = $j('[data-q_id="' + hash + '"]').offset().top - header_top_height - paspartuScrollAdd;
	                    } else {
	                        scrollToAmount = $j('[data-q_id="' + hash + '"]').offset().top - paspartuScrollAdd;
	                    }
	                } else if ($j("header.page_header").hasClass("fixed_hiding") && !$j("body").hasClass("vertical_menu_enabled")) {
	                    if (!$j("header.page_header").hasClass("transparent") || $j("header.page_header").hasClass("scrolled_not_transparent")) {
	                        if ($j('[data-q_id="' + hash + '"]').offset().top - (header_height + logo_height / 2 + 40) <= scroll_amount_for_fixed_hiding) {
	                            scrollToAmount = $j('[data-q_id="' + hash + '"]').offset().top - header_height - logo_height / 2 - 40 - paspartuScrollAdd;
	                        } else {
	                            scrollToAmount = $j('[data-q_id="' + hash + '"]').offset().top - min_header_height_fixed_hidden - 40 - paspartuScrollAdd;
	                        }
	                    } else {
	                        scrollToAmount = $j('[data-q_id="' + hash + '"]').offset().top - paspartuScrollAdd;
	                    }
	                } else if ($j("header.page_header").hasClass("stick") || $j("header.page_header").hasClass("stick_with_left_right_menu") && !$j("body").hasClass("vertical_menu_enabled")) {
	                    if (!$j("header.page_header").hasClass("transparent") || $j("header.page_header").hasClass("scrolled_not_transparent")) {
	                        if (sticky_amount >= $j('[data-q_id="' + hash + '"]').offset().top) {
	                            scrollToAmount = $j('[data-q_id="' + hash + '"]').offset().top + 1 - paspartuScrollAdd;
	                        } else {
	                            scrollToAmount = $j('[data-q_id="' + hash + '"]').offset().top - min_header_height_sticky - paspartuScrollAdd;
	                        }
	                    } else {
	                        scrollToAmount = $j('[data-q_id="' + hash + '"]').offset().top - paspartuScrollAdd;
	                    }
	                } else {
	                    scrollToAmount = $j('[data-q_id="' + hash + '"]').offset().top - paspartuScrollAdd;
	                }
	                if ($j('[data-q_id="' + hash + '"]').length > 0) {
	                    $doc.stop().animate({
	                        scrollTop: Math.round(scrollToAmount)
	                    }, 1500, function() {
	                        anchorActiveState($this);
	                    });
	                }
	                if (history.pushState) {
	                    history.pushState(null, null, hash);
	                }
	                return false;
	            }
	        }
	    });
	    $j(document).on("click", ".mobile_menu a", function() {
	        var $this = $j(this);
	        var hash = $j(this).prop("hash");
	        if (hash !== "" && $j(this).attr("href").split("#")[0] === "" || hash !== "" && $j(this).attr("href").split("#")[0] !== "" && hash === window.location.hash || hash !== "" && $j(this).attr("href").split("#")[0] === window.location.href.split("#")[0]) {
	            if ($j('[data-q_id="' + hash + '"]').length > 0) {
	                $doc.animate({
	                    scrollTop: Math.round($j('[data-q_id="' + hash + '"]').offset().top - $j(".mobile_menu").height())
	                }, 500, function() {
	                    anchorActiveState($this);
	                });
	            }
	            if (history.pushState) {
	                history.pushState(null, null, hash);
	            }
	            return false;
	        }
	    });
	}

	function countClientsPerRow() {
	    "use strict";
	    if ($j(".qode_clients").length) {
	        $j(".qode_clients").each(function() {
	            var $clients = $j(this);
	            var qode_clients_height = $clients.height();
	            var qode_clients_width = $clients.width();
	            var maxHeightClient;
	            var clientWidth = $clients.find(".qode_client_holder").width();
	            var countClient = $clients.find(".qode_client_holder").length;
	            $clients.find(".qode_client_holder").each(function() {
	                maxHeightClient = maxHeightClient > $j(this).height() ? maxHeightClient : $j(this).height();
	            });
	            maxHeightClient = maxHeightClient + 35;
	            var numberOfRows = Math.ceil(qode_clients_height / maxHeightClient);
	            var numberOfClientsPerRow = Math.ceil(qode_clients_width / clientWidth);
	            var numberOffullRows = Math.floor(countClient / numberOfClientsPerRow);
	            var numberOfClientsInLastRow = countClient - numberOfClientsPerRow * numberOffullRows;
	            if (numberOfClientsInLastRow === 0) {
	                numberOfClientsInLastRow = numberOfClientsPerRow;
	            }
	            $clients.find(".qode_client_holder").removeClass("border-bottom-none");
	            var item_start_from = countClient - numberOfClientsInLastRow - 1;
	            $clients.find(".qode_client_holder:gt(" + item_start_from + ")").addClass("border-bottom-none");
	        });
	    }
	}

	function animatedTextIconHeight() {
	    "use strict";
	    if ($j(".animated_icons_with_text").length) {
	        var $icons = $j(".animated_icons_with_text");
	        var maxHeight;
	        $icons.find(".animated_text p").each(function() {
	            maxHeight = maxHeight > $j(this).height() ? maxHeight : $j(this).height();
	        });
	        if (maxHeight < 155) {
	            maxHeight = 155;
	        }
	        $icons.find(".animated_icon_with_text_inner").height(maxHeight);
	    }
	}

	function countAnimatedTextIconPerRow() {
	    "use strict";
	    if ($j(".animated_icons_with_text").length) {
	        $j(".animated_icons_with_text").each(function() {
	            var $icons = $j(this);
	            var qode_icons_height = $icons.height();
	            var qode_icons_width = $icons.width();
	            var maxHeightIcons;
	            var iconWidth = $icons.find(".animated_icon_with_text_holder").width() + 1;
	            var countIcons = $icons.find(".animated_icon_with_text_holder").length;
	            $icons.find(".animated_icon_with_text_holder").each(function() {
	                maxHeightIcons = maxHeightIcons > $j(this).height() ? maxHeightIcons : $j(this).height();
	            });
	            maxHeightIcons = maxHeightIcons + 30;
	            var numberOfIconsPerRow = Math.ceil(qode_icons_width / iconWidth);
	            var numberOffullRows = Math.floor(countIcons / numberOfIconsPerRow);
	            var numberOfIconsInLastRow = countIcons - numberOfIconsPerRow * numberOffullRows;
	            if (numberOfIconsInLastRow === 0) {
	                numberOfIconsInLastRow = numberOfIconsPerRow;
	            }
	            $icons.find(".animated_icon_with_text_holder").removeClass("border-bottom-none");
	            var item_start_from = countIcons - numberOfIconsInLastRow - 1;
	            $icons.find(".animated_icon_with_text_holder:gt(" + item_start_from + ")").addClass("border-bottom-none");
	        });
	    }
	}

	function anchorActiveState(me) {
	    if (me.closest(".main_menu").length > 0) {
	        $j(".main_menu a").parent().removeClass("active");
	    }
	    if (me.closest(".vertical_menu").length > 0) {
	        $j(".vertical_menu a").parent().removeClass("active");
	    }
	    if (me.closest(".second").length === 0) {
	        me.parent().addClass("active");
	    } else {
	        me.closest(".second").parent().addClass("active");
	    }
	    if (me.closest(".mobile_menu").length > 0) {
	        $j(".mobile_menu a").parent().removeClass("active");
	        me.parent().addClass("active");
	    }
	    $j(".mobile_menu a, .main_menu a, .vertical_menu a").removeClass("current");
	    me.addClass("current");
	}

	function initIconWithTextAnimation() {
	    "use strict";
	    if ($j(".q_icon_animation").length > 0 && $j(".no_animation_on_touch").length === 0) {
	        $j(".q_icon_animation").each(function() {
	            $j(this).appear(function() {
	                $j(this).addClass("q_show_animation");
	            }, {
	                accX: 0,
	                accY: -200
	            });
	        });
	    }
	}

	function initCheckSafariBrowser() {
	    "use strict";
	    if (navigator.userAgent.indexOf("Safari") !== -1 && navigator.userAgent.indexOf("Chrome") === -1) {
	        $j("body").addClass("safari_browser");
	    }
	}

	function initSearchButton() {
	    if ($j(".search_slides_from_window_top").length) {
	        $j(".search_slides_from_window_top").click(function(e) {
	            e.preventDefault();
	            if ($j("html").hasClass("touch")) {
	                if ($j(".qode_search_form").height() == "0") {
	                    $j('.qode_search_form input[type="text"]').onfocus = function() {
	                        window.scrollTo(0, 0);
	                        document.body.scrollTop = 0;
	                    };
	                    $j('.qode_search_form input[type="text"]').onclick = function() {
	                        window.scrollTo(0, 0);
	                        document.body.scrollTop = 0;
	                    };
	                    $j(".header_top_bottom_holder").css("top", "50px");
	                    $j(".qode_search_form").css("height", "50px");
	                    $j(".content_inner").css("margin-top", "50px");
	                    if ($scroll < 34) {
	                        $j("header.page_header").css("top", "0");
	                    }
	                } else {
	                    $j(".qode_search_form").css("height", "0");
	                    $j(".header_top_bottom_holder").css("top", "0");
	                    $j(".content_inner").css("margin-top", "0");
	                    if ($scroll < 34) {
	                        $j("header.page_header").css("top", -$scroll);
	                    }
	                }
	                $j(window).scroll(function() {
	                    if ($j(".qode_search_form").height() != "0" && $scroll > 50) {
	                        $j(".qode_search_form").css("height", "0");
	                        $j(".header_top_bottom_holder").css("top", "0");
	                        $j(".content_inner").css("margin-top", "0");
	                    }
	                });
	                $j(".qode_search_close").click(function(e) {
	                    e.preventDefault();
	                    $j(".qode_search_form").css("height", "0");
	                    $j(".header_top_bottom_holder").css("top", "0");
	                    $j(".content_inner").css("margin-top", "0");
	                    if ($scroll < 34) {
	                        $j("header.page_header").css("top", -$scroll);
	                    }
	                });
	            } else {
	                if ($j(".title").hasClass("has_fixed_background")) {
	                    var yPos = parseInt($j(".title.has_fixed_background").css("backgroundPosition").split(" ")[1]);
	                } else {
	                    var yPos = 0;
	                }
	                if ($j(".qode_search_form").height() == "0") {
	                    $j('.qode_search_form input[type="text"]').focus();
	                    $j(".header_top_bottom_holder").stop().animate({
	                        top: "50px"
	                    }, 150);
	                    $j(".qode_search_form").stop().animate({
	                        height: "50px"
	                    }, 150);
	                    $j(".content_inner").stop().animate({
	                        marginTop: "50px"
	                    }, 150);
	                    if ($scroll < 34) {
	                        $j("header.page_header").stop().animate({
	                            top: 0
	                        }, 150);
	                    }
	                    $j(".title.has_fixed_background").animate({
	                        "background-position-y": yPos + 50 + "px"
	                    }, 150);
	                } else {
	                    $j(".qode_search_form").stop().animate({
	                        height: "0"
	                    }, 150);
	                    $j(".header_top_bottom_holder").stop().animate({
	                        top: "0px"
	                    }, 150);
	                    $j(".content_inner").stop().animate({
	                        marginTop: "0"
	                    }, 150);
	                    if ($scroll < 34) {
	                        $j("header.page_header").stop().animate({
	                            top: -$scroll
	                        }, 150);
	                    }
	                    $j(".title.has_fixed_background").animate({
	                        "background-position-y": yPos - 50 + "px"
	                    }, 150);
	                }
	                $j(window).scroll(function() {
	                    if ($j(".qode_search_form").height() != "0" && $scroll > 50) {
	                        $j(".qode_search_form").stop().animate({
	                            height: "0"
	                        }, 150);
	                        $j(".header_top_bottom_holder").stop().animate({
	                            top: "0px"
	                        }, 150);
	                        $j(".content_inner").stop().animate({
	                            marginTop: "0"
	                        }, 150);
	                        $j(".title.has_fixed_background").css("backgroundPosition", "center " + yPos + "px");
	                    }
	                });
	                $j(".qode_search_close").click(function(e) {
	                    e.preventDefault();
	                    $j(".qode_search_form").stop().animate({
	                        height: "0"
	                    }, 150);
	                    $j(".content_inner").stop().animate({
	                        marginTop: "0"
	                    }, 150);
	                    $j(".header_top_bottom_holder").stop().animate({
	                        top: "0px"
	                    }, 150);
	                    if ($scroll < 34) {
	                        $j("header.page_header").stop().animate({
	                            top: -$scroll
	                        }, 150);
	                    }
	                    $j(".title.has_fixed_background").animate({
	                        "background-position-y": yPos + "px"
	                    }, 150);
	                });
	            }
	        });
	    }
	    if ($j(".search_slides_from_header_bottom").length) {
	        $j(".search_slides_from_header_bottom").click(function(e) {
	            e.preventDefault();
	            if ($j("html").hasClass("touch")) {
	                if ($j(".qode_search_form_2").height() == "0") {
	                    $j('.qode_search_form_2 input[type="text"]').onfocus = function() {
	                        window.scrollTo(0, 0);
	                        document.body.scrollTop = 0;
	                    };
	                    $j('.qode_search_form_2 input[type="text"]').onclick = function() {
	                        window.scrollTo(0, 0);
	                        document.body.scrollTop = 0;
	                    };
	                    $j(".qode_search_form_2").css("height", "50px");
	                } else {
	                    $j(".qode_search_form_2").css("height", "0");
	                }
	                $j(window).scroll(function() {
	                    if ($j(".qode_search_form_2").height() != "0" && $scroll > 50) {
	                        $j(".qode_search_form_2").css("height", "0");
	                    }
	                });
	            } else {
	                if ($j(".qode_search_form_2").hasClass("animated")) {
	                    $j(".qode_search_form_2").removeClass("animated");
	                    $j(".qode_search_form_2").css("bottom", "0");
	                } else {
	                    $j('.qode_search_form input[type="text"]').focus();
	                    $j(".qode_search_form_2").addClass("animated");
	                    var search_form_height = $j(".qode_search_form_2").height();
	                    $j(".qode_search_form_2").css("bottom", -search_form_height);
	                }
	                $j(".qode_search_form_2").addClass("disabled");
	                $j('.qode_search_form_2 input[type="submit"]').attr("disabled", "disabled");
	                if ($j(".qode_search_form_2 .qode_search_field").val() !== "" && $j(".qode_search_form_2 .qode_search_field").val() !== " ") {
	                    $j('.qode_search_form_2 input[type="submit"]').removeAttr("disabled");
	                    $j(".qode_search_form_2").removeClass("disabled");
	                } else {
	                    $j(".qode_search_form_2").addClass("disabled");
	                    $j('.qode_search_form_2 input[type="submit"]').attr("disabled", "disabled");
	                }
	                $j(".qode_search_form_2 .qode_search_field").keyup(function() {
	                    if ($j(this).val() !== "" && $j(this).val() != " ") {
	                        $j('.qode_search_form_2 input[type="submit"]').removeAttr("disabled");
	                        $j(".qode_search_form_2").removeClass("disabled");
	                    } else {
	                        $j('.qode_search_form_2 input[type="submit"]').attr("disabled", "disabled");
	                        $j(".qode_search_form_2").addClass("disabled");
	                    }
	                });
	                $j(".content, footer").click(function(e) {
	                    e.preventDefault();
	                    $j(".qode_search_form_2").removeClass("animated");
	                    $j(".qode_search_form_2").css("bottom", "0");
	                });
	            }
	        });
	    }
	    if ($j(".search_covers_header").length) {
	        $j(".search_covers_header").click(function(e) {
	            e.preventDefault();
	            if ($j(".search_covers_only_bottom").length) {
	                var headerHeight = $j(".header_bottom").height();
	            } else {
	                if ($j(".fixed_top_header").length) {
	                    var headerHeight = $j(".top_header").height();
	                } else {
	                    var headerHeight = $j(".header_top_bottom_holder").height();
	                }
	            }
	            $j(".qode_search_form_3 .form_holder_outer").height(headerHeight);
	            if ($j(".search_covers_only_bottom").length) {
	                $j(".qode_search_form_3").css("bottom", 0);
	                $j(".qode_search_form_3").css("top", "auto");
	            }
	            $j(".qode_search_form_3").stop(true).fadeIn(600, "easeOutExpo");
	            $j('.qode_search_form_3 input[type="text"]').focus();
	            $j(window).scroll(function() {
	                if ($j(".search_covers_only_bottom").length) {
	                    var headerHeight = $j(".header_bottom").height();
	                } else {
	                    if ($j(".fixed_top_header").length) {
	                        var headerHeight = $j(".top_header").height();
	                    } else {
	                        var headerHeight = $j(".header_top_bottom_holder").height();
	                    }
	                }
	                $j(".qode_search_form_3 .form_holder_outer").height(headerHeight);
	            });
	            $j(".qode_search_close, .content, footer").click(function(e) {
	                e.preventDefault();
	                $j(".qode_search_form_3").stop(true).fadeOut(450, "easeOutExpo");
	            });
	            $j(".qode_search_form_3").blur(function(e) {
	                $j(".qode_search_form_3").stop(true).fadeOut(450, "easeOutExpo");
	            });
	        });
	    }
	    if ($j(".fullscreen_search").length) {
	        if ($j(".fullscreen_search_holder.from_circle").length) {
	            $j(".fullscreen_search").on("click", function(e) {
	                e.preventDefault();
	                if ($j(".fullscreen_search_overlay").hasClass("animate")) {
	                    $j(".fullscreen_search_overlay").removeClass("animate");
	                    $j(".fullscreen_search_holder").css("opacity", "0");
	                    $j(".fullscreen_search_close").css("opacity", "0");
	                    $j(".fullscreen_search_close").css("visibility", "hidden");
	                    $j(".fullscreen_search").css("opacity", "1");
	                    $j(".fullscreen_search_holder").css("display", "none");
	                } else {
	                    $j(".fullscreen_search_overlay").addClass("animate");
	                    $j(".fullscreen_search_holder").css("display", "block");
	                    setTimeout(function() {
	                        $j(".fullscreen_search_holder").css("opacity", "1");
	                        $j(".fullscreen_search_close").css("opacity", "1");
	                        $j(".fullscreen_search_close").css("visibility", "visible");
	                        $j(".fullscreen_search").css("opacity", "0");
	                    }, 200);
	                }
	            });
	            $j(".fullscreen_search_close").on("click", function(e) {
	                e.preventDefault();
	                $j(".fullscreen_search_overlay").removeClass("animate");
	                $j(".fullscreen_search_holder").css("opacity", "0");
	                $j(".fullscreen_search_close").css("opacity", "0");
	                $j(".fullscreen_search_close").css("visibility", "hidden");
	                $j(".fullscreen_search").css("opacity", "1");
	                $j(".fullscreen_search_holder").css("display", "none");
	            });
	        }
	        if ($j(".fullscreen_search_holder.fade").length) {
	            $j(".fullscreen_search").on("click", function(e) {
	                e.preventDefault();
	                if ($j(".fullscreen_search_holder").hasClass("animate")) {
	                    $j("body").removeClass("fullscreen_search_opened");
	                    $j(".fullscreen_search_holder").removeClass("animate");
	                    $j("body").removeClass("search_fade_out");
	                    $j("body").removeClass("search_fade_in");
	                } else {
	                    $j("body").addClass("fullscreen_search_opened");
	                    $j("body").removeClass("search_fade_out");
	                    $j("body").addClass("search_fade_in");
	                    $j(".fullscreen_search_holder").addClass("animate");
	                }
	            });
	            $j(".fullscreen_search_close").on("click", function(e) {
	                e.preventDefault();
	                $j("body").removeClass("fullscreen_search_opened");
	                $j(".fullscreen_search_holder").removeClass("animate");
	                $j("body").removeClass("search_fade_in");
	                $j("body").addClass("search_fade_out");
	            });
	        }
	        $j(".fullscreen_search_holder .search_field").focus(function() {
	            $j(".fullscreen_search_holder .field_holder .line").css("width", "100%");
	        });
	        $j(".fullscreen_search_holder .search_field").blur(function() {
	            $j(".fullscreen_search_holder .field_holder .line").css("width", "0");
	        });
	        $j(window).scroll(function() {
	            var bottom_height = $j(".page_header .header_bottom").height();
	            if ($j(".page_header").hasClass("sticky")) {
	                $j(".fullscreen_search_holder .side_menu_button").css("height", bottom_height);
	                $j(".fullscreen_search_holder .close_container").css("top", "0");
	            } else if ($j(".page_header").hasClass("fixed")) {
	                $j(".fullscreen_search_holder .side_menu_button").css("height", bottom_height);
	            } else {
	                $j(".fullscreen_search_holder .side_menu_button").css("height", "");
	                $j(".fullscreen_search_holder .close_container").css("top", "");
	            }
	        });
	    }
	    if ($j(".qode_search_submit").length) {
	        $j(".qode_search_submit").click(function(e) {
	            e.preventDefault();
	            e.stopPropagation();
	            var searchForm = $j(this).parents("form").first();
	            searchForm.submit();
	        });
	    }
	}

	function updateShoppingCart() {
	    "use strict";
	    $j("body").bind("added_to_cart", add_to_cart);
	    function add_to_cart(event, parts, hash) {
	        var miniCart = $j(".shopping_cart_header");
	        if (parts["div.widget_shopping_cart_content"]) {
	            var $cartContent = jQuery(parts["div.widget_shopping_cart_content"]), $itemsList = $cartContent.find(".cart_list"), $total = $cartContent.find(".total").contents(":not(strong)").text();
	            miniCart.find(".shopping_cart_dropdown_inner").html("").append($itemsList);
	            miniCart.find(".total span").html("").append($total);
	        }
	    }
	}

	function setContentBottomMargin() {
	    if ($j(".uncover").length) {
	        $j(".content").css("margin-bottom", $j("footer").height());
	    }
	}

	function footerWidth() {
	    "use strict";
	    if ($j(".uncover").length && $j("body").hasClass("vertical_menu_enabled") && $window_width > 1e3) {
	        $j(".uncover").width($window_width - $j(".vertical_menu_area").width());
	    } else {
	        $j(".uncover").css("width", "100%");
	    }
	}

	function initCoverBoxes() {
	    if ($j(".cover_boxes").length) {
	        $j(".cover_boxes").each(function() {
	            var active_element = 0;
	            var data_active_element = 1;
	            if (typeof $j(this).data("active-element") !== "undefined" && $j(this).data("active-element") !== false) {
	                data_active_element = parseFloat($j(this).data("active-element"));
	                active_element = data_active_element - 1;
	            }
	            var number_of_columns = 3;
	            active_element = data_active_element > number_of_columns ? 0 : active_element;
	            $j(this).find("li").eq(active_element).addClass("act");
	            var cover_boxed = $j(this);
	            $j(this).find("li").each(function() {
	                $j(this).hover(function() {
	                    $j(cover_boxed).find("li").removeClass("act");
	                    $j(this).addClass("act");
	                });
	            });
	        });
	    }
	}

	function createContentMenu() {
	    "use strict";
	    var content_menu = $j(".content_menu");
	    content_menu.each(function() {
	        if ($j(this).find("ul").length === 0) {
	            if ($j(this).css("background-color") !== "") {
	                var background_color = $j(this).css("background-color");
	            }
	            var content_menu_ul = $j("<ul class='menu'></ul>");
	            content_menu_ul.appendTo($j(this));
	            var sections = $j(this).siblings(".in_content_menu");
	            if (sections.length) {
	                sections.each(function() {
	                    var section_href = $j(this).data("q_id");
	                    var section_title = $j(this).data("q_title");
	                    var section_icon = $j(this).data("q_icon");
	                    var li = $j("<li />");
	                    var icon = $j("<i />", {
	                        "class": "fa " + section_icon
	                    });
	                    var link = $j("<a />", {
	                        href: section_href,
	                        html: "<span>" + section_title + "</span>"
	                    });
	                    var arrow;
	                    if (background_color !== "") {
	                        arrow = $j("<div />", {
	                            "class": "arrow",
	                            style: "border-color: " + background_color + " transparent transparent transparent"
	                        });
	                    } else {
	                        arrow = $j("<div />", {
	                            "class": "arrow"
	                        });
	                    }
	                    icon.prependTo(link);
	                    link.appendTo(li);
	                    arrow.appendTo(li);
	                    li.appendTo(content_menu_ul);
	                });
	            }
	        }
	    });
	}

	function createSelectContentMenu() {
	    "use strict";
	    var content_menu = $j(".content_menu");
	    content_menu.each(function() {
	        var $this = $j(this);
	        var $menu_select = $j("<ul></ul>");
	        $menu_select.appendTo($j(this).find(".nav_select_menu"));
	        $j(this).find("ul.menu li a").each(function() {
	            var menu_url = $j(this).attr("href");
	            var menu_text = $j(this).text();
	            var menu_icon = $j(this).find("i").clone();
	            if ($j(this).parents("li").length === 2) {
	                menu_text = "&nbsp;&nbsp;&nbsp;" + menu_text;
	            }
	            if ($j(this).parents("li").length === 3) {
	                menu_text = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + menu_text;
	            }
	            if ($j(this).parents("li").length > 3) {
	                menu_text = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + menu_text;
	            }
	            var li = $j("<li />");
	            var link = $j("<a />", {
	                href: menu_url,
	                html: menu_text
	            });
	            menu_icon.prependTo(link);
	            link.appendTo(li);
	            li.appendTo($menu_select);
	        });
	        $this.find(".nav_select_button").on("click", function() {
	            if ($this.find(".nav_select_menu ul").is(":visible")) {
	                $this.find(".nav_select_menu ul").slideUp();
	            } else {
	                $this.find(".nav_select_menu ul").slideDown();
	            }
	            return false;
	        });
	        $this.find(".nav_select_menu ul li a").on("click", function() {
	            $this.find(".nav_select_menu ul").slideUp();
	            var $link = $j(this);
	            var $target = $link.attr("href");
	            var targetOffset = $j("div.wpb_row[data-q_id='" + $target + "'],section.parallax_section_holder[data-q_id='" + $target + "']").offset().top;
	            $j("html,body").stop().animate({
	                scrollTop: targetOffset
	            }, 500, "swing", function() {
	                $j("nav.content_menu ul li").removeClass("active");
	                $link.parent().addClass("active");
	            });
	            return false;
	        });
	    });
	}

	function contentMenuPosition() {
	    "use strict";
	    if ($j("nav.content_menu").length) {
	        if (content_menu_position > sticky_amount) {
	            var x = min_header_height_sticky;
	        } else {
	            var x = 0;
	        }
	        if (content_menu_position - x - content_menu_top_add - $scroll <= 0 && ($j("header").hasClass("stick") || $j("header").hasClass("stick_with_left_right_menu"))) {
	            if (content_menu_position < sticky_amount) {
	                if ($scroll > sticky_amount) {
	                    $j("nav.content_menu").css({
	                        position: "fixed",
	                        top: min_header_height_sticky + content_menu_top_add
	                    }).addClass("fixed");
	                } else {
	                    $j("nav.content_menu").css({
	                        position: "fixed",
	                        top: 0,
	                        transition: "none"
	                    }).addClass("fixed");
	                }
	            } else {
	                $j("nav.content_menu").css({
	                    position: "fixed",
	                    top: min_header_height_sticky + content_menu_top_add
	                }).addClass("fixed");
	            }
	            $j("header.sticky").addClass("no_shadow");
	            $j(".content > .content_inner > .container > .container_inner").css("margin-top", content_line_height);
	            $j(".content > .content_inner > .full_width").css("margin-top", content_line_height);
	        } else if (content_menu_position - content_menu_top - content_menu_top_add - $scroll <= 0 && !$j("header").hasClass("stick")) {
	            $j("nav.content_menu").css({
	                position: "fixed",
	                top: content_menu_top + content_menu_top_add
	            }).addClass("fixed");
	            $j(".content > .content_inner > .container > .container_inner").css("margin-top", content_line_height);
	            $j(".content > .content_inner > .full_width").css("margin-top", content_line_height);
	        } else {
	            $j("nav.content_menu").css({
	                position: "relative",
	                top: "0px"
	            }).removeClass("fixed");
	            $j("header.sticky").removeClass("no_shadow");
	            $j(".content > .content_inner > .container > .container_inner").css("margin-top", "0px");
	            $j(".content > .content_inner > .full_width").css("margin-top", "0px");
	        }
	        $j(".content .in_content_menu").waypoint(function(direction) {
	            var $active = $j(this);
	            var id = $active.data("q_id");
	            $j("nav.content_menu.fixed li a").each(function() {
	                var i = $j(this).attr("href");
	                if (i === id) {
	                    $j(this).parent().addClass("active");
	                } else {
	                    $j(this).parent().removeClass("active");
	                }
	            });
	        }, {
	            offset: "150"
	        });
	    }
	}

	function contentMenuCheckLastSection() {
	    "use strict";
	    if ($j("nav.content_menu").length) {
	        if ($j(".content .in_content_menu").length) {
	            var last_from_top = $j(".content .in_content_menu:last").offset().top + $j(".content .in_content_menu:last").height();
	            var first_from_top = $j(".content .in_content_menu:first").offset().top - content_menu_top - content_menu_top_add - 100;
	            if (last_from_top < $scroll) {
	                $j("nav.content_menu.fixed li").removeClass("active");
	            }
	            if (first_from_top > $scroll) {
	                $j("nav.content_menu li:first, nav.content_menu ul.menu li:first").removeClass("active");
	            }
	        }
	    }
	}

	function contentMenuScrollTo() {
	    "use strict";
	    if ($j("nav.content_menu").length) {
	        $j("nav.content_menu ul.menu li a").on("click", function(e) {
	            e.preventDefault();
	            var $this = $j(this);
	            if ($j(this).parent().hasClass("active")) {
	                return false;
	            }
	            var $target = $this.attr("href");
	            var targetOffset = $j("div.wpb_row[data-q_id='" + $target + "'],section.parallax_section_holder[data-q_id='" + $target + "']").offset().top - content_line_height - content_menu_top - content_menu_top_add;
	            $j("html,body").stop().animate({
	                scrollTop: targetOffset
	            }, 500, "swing", function() {
	                $j("nav.content_menu ul li").removeClass("active");
	                $this.parent().addClass("active");
	            });
	            return false;
	        });
	    }
	}

	function initButtonHover() {
	    if ($j(".qbutton").length) {
	        $j(".qbutton").each(function() {
	            if (typeof $j(this).data("hover-background-color") !== "undefined" && $j(this).data("hover-background-color") !== false) {
	                var hover_background_color = $j(this).data("hover-background-color");
	                var initial_background_color = $j(this).css("background-color");
	                $j(this).hover(function() {
	                    $j(this).css("background-color", hover_background_color);
	                }, function() {
	                    $j(this).css("background-color", initial_background_color);
	                });
	            }
	            if (typeof $j(this).data("hover-border-color") !== "undefined" && $j(this).data("hover-border-color") !== false) {
	                var hover_border_color = $j(this).data("hover-border-color");
	                var initial_border_color = $j(this).css("border-top-color");
	                $j(this).hover(function() {
	                    $j(this).css("border-color", hover_border_color);
	                }, function() {
	                    $j(this).css("border-color", initial_border_color);
	                });
	            }
	            if (typeof $j(this).data("hover-color") !== "undefined" && $j(this).data("hover-color") !== false) {
	                var hover_color = $j(this).data("hover-color");
	                var initial_color = $j(this).css("color");
	                $j(this).hover(function() {
	                    $j(this).css("color", hover_color);
	                }, function() {
	                    $j(this).css("color", initial_color);
	                });
	            }
	        });
	    }
	}

	function initSocialIconHover() {
	    if ($j(".q_social_icon_holder").length) {
	        $j(".q_social_icon_holder").each(function() {
	            if (typeof $j(this).data("hover-background-color") !== "undefined" && $j(this).data("hover-background-color") !== false) {
	                var hover_background_color = $j(this).data("hover-background-color");
	                var initial_background_color = $j(this).find(".fa-stack").css("background-color");
	                $j(this).find(".fa-stack").hover(function() {
	                    $j(this).css("background-color", hover_background_color);
	                }, function() {
	                    $j(this).css("background-color", initial_background_color);
	                });
	            }
	            if (typeof $j(this).data("hover-border-color") !== "undefined" && $j(this).data("hover-border-color") !== false) {
	                var hover_border_color = $j(this).data("hover-border-color");
	                var initial_border_color = $j(this).find(".fa-stack").css("border-top-color");
	                $j(this).find(".fa-stack").hover(function() {
	                    $j(this).css("border-color", hover_border_color);
	                }, function() {
	                    $j(this).css("border-color", initial_border_color);
	                });
	            }
	            if (typeof $j(this).data("hover-color") !== "undefined" && $j(this).data("hover-color") !== false) {
	                var initial_color;
	                var initial_style;
	                var hover_color = $j(this).data("hover-color");
	                if ($j(this).find(".fa-stack i, .fa-stack span").length) {
	                    initial_color = $j(this).find(".fa-stack i, .fa-stack span").css("color");
	                    initial_style = $j(this).find(".fa-stack i, .fa-stack span").attr("style");
	                } else if ($j(this).find(".simple_social").length) {
	                    initial_color = $j(this).find(".simple_social").css("color");
	                    initial_style = $j(this).find(".simple_social").attr("style");
	                }
	                if ($j(this).find(".fa-stack").length) {
	                    $j(this).find(".fa-stack").hover(function() {
	                        $j(this).find("i, span").attr("style", function(i, s) {
	                            return initial_style + "color: " + hover_color + "!important;";
	                        });
	                    }, function() {
	                        $j(this).find("i, span").attr("style", function(i, s) {
	                            return initial_style + "color: " + initial_color + "!important;";
	                        });
	                    });
	                } else if ($j(this).find(".simple_social").length) {
	                    $j(this).find(".simple_social").hover(function() {
	                        $j(this).attr("style", function(i, s) {
	                            return initial_style + "color: " + hover_color + "!important;";
	                        });
	                    }, function() {
	                        $j(this).attr("style", function(i, s) {
	                            return initial_style + "color: " + initial_color + "!important;";
	                        });
	                    });
	                }
	            }
	        });
	    }
	}

	function initTabsActiveBorder() {
	    if ($j(".q_tabs.vertical, .q_tabs.boxed").length) {
	        $j(".q_tabs.vertical, .q_tabs.boxed").each(function() {
	            var parentBgColor = getParentBackgroundColor($j(this));
	            var activeElement = $j(this).find("li.active a");
	            if ($j(this).hasClass("boxed")) {
	                activeElement.css("border-bottom-color", parentBgColor);
	            }
	            if ($j(this).hasClass("left")) {
	                activeElement.css("border-right-color", parentBgColor);
	            }
	            if ($j(this).hasClass("right")) {
	                activeElement.css("border-left-color", parentBgColor);
	            }
	        });
	    }
	}

	function getParentBackgroundColor(element) {
	    return element.parents().filter(function() {
	        var color = $j(this).css("background-color");
	        return color != "transparent" && color != "rgba(0, 0, 0, 0)";
	    }).eq(0).css("background-color");
	}

	function setActiveTabBorder() {
	    if ($j(".q_tabs li.active").length) {
	        $j(this).click(function() {
	            initTabsActiveBorder();
	        });
	    }
	}

	function initPopupMenu() {
	    "use strict";
	    if ($j("a.popup_menu").length) {
	        $j(window).resize(function() {
	            $j(".popup_menu_holder_outer").height($window_height);
	        });
	        $j("a.popup_menu").on("click", function(e) {
	            e.preventDefault();
	            if (!$j(this).hasClass("opened")) {
	                $j(this).addClass("opened");
	                $j("body").addClass("popup_menu_opened");
	                setTimeout(function() {
	                    if (!$j("body").hasClass("page-template-full_screen-php")) {
	                        $j("body").css("overflow", "hidden");
	                    }
	                }, 400);
	            } else {
	                $j(this).removeClass("opened");
	                $j("body").removeClass("popup_menu_opened");
	                setTimeout(function() {
	                    if (!$j("body").hasClass("page-template-full_screen-php")) {
	                        $j("body").css("overflow", "visible");
	                    }
	                    $j("nav.popup_menu ul.sub_menu").slideUp(200, function() {
	                    });
	                }, 400);
	            }
	        });
	        $j(".popup_menu > ul > li.has_sub > a, .popup_menu > ul > li.has_sub > h6").on("tap click", function(e) {
	            e.preventDefault();
	            if ($j(this).closest("li.has_sub").find("> ul.sub_menu").is(":visible")) {
	                $j(this).closest("li.has_sub").find("> ul.sub_menu").slideUp(200, function() {
	                });
	                $j(this).closest("li.has_sub").removeClass("open_sub");
	            } else {
	                $j(this).closest("li.has_sub").addClass("open_sub");
	                $j(this).closest("li.has_sub").find("> ul.sub_menu").slideDown(200, function() {
	                });
	            }
	            return false;
	        });
	        $j(".popup_menu ul li:not(.has_sub) a").click(function() {
	            if ($j(this).attr("href") !== "http://#" && $j(this).attr("href") !== "#") {
	                $j("a.popup_menu").removeClass("opened");
	                $j("body").removeClass("popup_menu_opened").css("overflow", "visible");
	                $j("nav.popup_menu ul.sub_menu").slideUp(200, function() {
	                });
	            } else {
	                return false;
	            }
	        });
	    }
	}

	function initFullScreenTemplate() {
	    "use strict";
	    if ($j(".full_screen_holder").length && $window_width > 600) {
	        var default_header_style = "";
	        if ($j("header.page_header").hasClass("light")) {
	            default_header_style = "light";
	        } else if ($j("header.page_header").hasClass("dark")) {
	            default_header_style = "dark";
	        } else {
	            default_header_style = header_style_admin;
	        }
	        $j(".full_screen_preloader").css("height", $window_height);
	        $j("#up_fs_button").on("click", function() {
	            $j.fn.fullpage.moveSectionUp();
	            return false;
	        });
	        $j("#down_fs_button").on("click", function() {
	            $j.fn.fullpage.moveSectionDown();
	            return false;
	        });
	        var section_number = $j(".full_screen_inner > .full_screen_section").length;
	        $j(".full_screen_inner").fullpage({
	            sectionSelector: ".full_screen_section",
	            scrollOverflow: true,
	            afterLoad: function(anchorLink, index) {
	                checkActiveArrowsOnFullScrrenTemplate(section_number, index);
	                checkFullScreenSectionsForHeaderStyle(index, default_header_style);
	            },
	            afterRender: function() {
	                checkActiveArrowsOnFullScrrenTemplate(section_number, 1);
	                checkFullScreenSectionsForHeaderStyle(1, default_header_style);
	                if (section_number !== 1) {
	                    $j(".full_screen_holder").find(".full_screen_navigation_holder").css("visibility", "visible");
	                }
	                $j(".full_screen_holder").find(".full_screen_inner").css("visibility", "visible");
	                $j(".full_screen_preloader").hide();
	                if ($j(".full_screen_holder video.full_screen_sections_video").length) {
	                    $j(".full_screen_holder video.full_screen_sections_video").each(function() {
	                        $j(this).get(0).play();
	                    });
	                }
	            }
	        });
	    }
	}

	function checkActiveArrowsOnFullScrrenTemplate(section_number, index) {
	    "use strict";
	    if (index === 1) {
	        $j(".full_screen_navigation_holder #up_fs_button").hide();
	        if (index != section_number) {
	            $j(".full_screen_navigation_holder #down_fs_button").show();
	        }
	    } else if (index === section_number) {
	        if (section_number === 2) {
	            $j(".full_screen_navigation_holder #up_fs_button").show();
	        }
	        $j(".full_screen_navigation_holder #down_fs_button").hide();
	    } else {
	        $j(".full_screen_navigation_holder #up_fs_button").show();
	        $j(".full_screen_navigation_holder #down_fs_button").show();
	    }
	}

	function checkFullScreenSectionsForHeaderStyle(index, default_header_style) {
	    "use strict";
	    if ($j("[data-q_header_style]").length > 0 && $j("header").hasClass("header_style_on_scroll")) {
	        if ($j($j(".full_screen_holder .full_screen_inner .full_screen_section")[index - 1]).data("q_header_style") !== undefined) {
	            var header_style = $j($j(".full_screen_holder .full_screen_inner .full_screen_section")[index - 1]).data("q_header_style");
	            $j("header").removeClass("dark light").addClass(header_style);
	        } else {
	            $j("header").removeClass("dark light").addClass(default_header_style);
	        }
	    }
	}

	function checkHeaderStyleOnScroll() {
	    "use strict";
	    if ($j("[data-q_header_style]").length > 0 && $j("header").hasClass("header_style_on_scroll")) {
	        var default_header_style = "";
	        if ($j("header.page_header").hasClass("light")) {
	            default_header_style = "light";
	        } else if ($j("header.page_header").hasClass("dark")) {
	            default_header_style = "dark";
	        } else {
	            default_header_style = header_style_admin;
	        }
	        var paspartu_top_add = $j("body").hasClass("paspartu_on_top_fixed") ? Math.round($window_width * paspartu_width) : 0;
	        var paspartu_bottom_add = $j("body").hasClass("paspartu_on_bottom_fixed") ? Math.round($window_width * paspartu_width) : 0;
	        $j(".full_width_inner > .wpb_row.section, .full_width_inner > .parallax_section_holder, .container_inner > .wpb_row.section, .container_inner > .parallax_section_holder, .portfolio_single > .wpb_row.section").waypoint(function(direction) {
	            if (direction === "down") {
	                if ($j(this).data("q_header_style") !== undefined) {
	                    var header_style = $j(this).data("q_header_style");
	                    $j("header").removeClass("dark light").addClass(header_style);
	                } else {
	                    $j("header").removeClass("dark light").addClass(default_header_style);
	                }
	            }
	        }, {
	            offset: 0 + paspartu_top_add
	        });
	        $j(".title, .full_width_inner > .wpb_row.section, .full_width_inner > .parallax_section_holder, .container_inner > .wpb_row.section, .container_inner > .parallax_section_holder, .portfolio_single > .wpb_row.section, .q_slider").waypoint(function(direction) {
	            if (direction === "up") {
	                if ($j(this).data("q_header_style") !== undefined) {
	                    var header_style = $j(this).data("q_header_style");
	                    $j("header").removeClass("dark light").addClass(header_style);
	                } else {
	                    $j("header").removeClass("dark light").addClass(default_header_style);
	                }
	            }
	        }, {
	            offset: function() {
	                return -$j(this).outerHeight() + paspartu_bottom_add;
	            }
	        });
	    }
	}

	function initImageGallerySliderNoSpace() {
	    if ($j(".qode_image_gallery_no_space").length) {
	        $j(".qode_image_gallery_no_space").each(function() {
	            $j(this).animate({
	                opacity: 1
	            }, 1e3);
	            $j(this).find(".qode_image_gallery_holder").lemmonSlider({
	                infinite: true
	            });
	        });
	        $j(".qode_image_gallery_no_space").on("click", "li:not(.active) a", function() {
	            return false;
	        });
	    }
	}

	function initVerticalSplitSlider() {
	    "use strict";
	    if ($j("html").hasClass("vertical_split_screen_initalized")) {
	        $j("html").removeClass("vertical_split_screen_initalized");
	        $j.fn.multiscroll.destroy();
	    }
	    if ($j(".vertical_split_slider").length) {
	        $j(".vertical_split_slider").height($window_height).animate({
	            opacity: 1
	        }, 300);
	        $j(".vertical_split_slider").multiscroll({
	            scrollingSpeed: 500,
	            navigation: true,
	            afterRender: function() {
	                $j("html").addClass("vertical_split_screen_initalized");
	                initButtonHover();
	                if ($j("div.wpcf7 > form").length) {
	                    $j("div.wpcf7 > form").wpcf7InitForm();
	                }
	                initCountdown();
	                if ($j("body").hasClass("vss_responsive_adv")) {
	                    var vertical_split_slider_responsive = $j("<div class='vertical_split_slider_responsive' />");
	                    $j(".vertical_split_slider").after(vertical_split_slider_responsive);
	                    var left_side = $j(".vertical_split_slider .ms-left > div");
	                    var right_side = $j(".vertical_split_slider .ms-right > div");
	                    for (var i = 0; i < left_side.length; i++) {
	                        vertical_split_slider_responsive.append($j(left_side[i]).clone(true));
	                        vertical_split_slider_responsive.append($j(right_side[left_side.length - 1 - i]).clone(true));
	                    }
	                }
	            }
	        });
	        if ($j("body").hasClass("vss_responsive_adv")) {
	            if ($window_width < 768) {
	                $j.fn.multiscroll.destroy();
	                $j("html,body").css("height", "auto").css("overflow", "auto");
	            } else {
	                $j.fn.multiscroll.build();
	                $j("html,body").css("height", "100%").css("overflow", "hidden");
	            }
	            $j(window).resize(function() {
	                if ($window_width < 768) {
	                    $j.fn.multiscroll.destroy();
	                    $j("html,body").css("height", "auto").css("overflow", "auto");
	                } else {
	                    $j.fn.multiscroll.build();
	                    $j("html,body").css("height", "100%").css("overflow", "hidden");
	                }
	            });
	        }
	    } else {
	        if (!$j(".full_screen_holder").length) {
	            $j("html,body").css("height", "auto").css("overflow", "auto");
	        }
	    }
	}

	function showGoogleMap() {
	    "use strict";
	    if ($j(".qode_google_map").length) {
	        $j(".qode_google_map").each(function() {
	            var custom_map_style;
	            if (typeof $j(this).data("custom-map-style") !== "undefined") {
	                custom_map_style = $j(this).data("custom-map-style");
	            }
	            var color_overlay;
	            if (typeof $j(this).data("color-overlay") !== "undefined" && $j(this).data("color-overlay") !== false) {
	                color_overlay = $j(this).data("color-overlay");
	            }
	            var saturation;
	            if (typeof $j(this).data("saturation") !== "undefined" && $j(this).data("saturation") !== false) {
	                saturation = $j(this).data("saturation");
	            }
	            var lightness;
	            if (typeof $j(this).data("lightness") !== "undefined" && $j(this).data("lightness") !== false) {
	                lightness = $j(this).data("lightness");
	            }
	            var zoom;
	            if (typeof $j(this).data("zoom") !== "undefined" && $j(this).data("zoom") !== false) {
	                zoom = $j(this).data("zoom");
	            }
	            var pin;
	            if (typeof $j(this).data("pin") !== "undefined" && $j(this).data("pin") !== false) {
	                pin = $j(this).data("pin");
	            }
	            var map_height;
	            if (typeof $j(this).data("map-height") !== "undefined" && $j(this).data("map-height") !== false) {
	                map_height = $j(this).data("map-height");
	            }
	            var unique_id;
	            if (typeof $j(this).data("unique-id") !== "undefined" && $j(this).data("unique-id") !== false) {
	                unique_id = $j(this).data("unique-id");
	            }
	            var google_maps_scroll_wheel;
	            if (typeof $j(this).data("google-maps-scroll-wheel") !== "undefined") {
	                google_maps_scroll_wheel = $j(this).data("google-maps-scroll-wheel");
	            }
	            var addresses;
	            if (typeof $j(this).data("addresses") !== "undefined" && $j(this).data("addresses") !== false) {
	                addresses = $j(this).data("addresses");
	            }
	            var map = "map_" + unique_id;
	            var geocoder = "geocoder_" + unique_id;
	            var holderId = "map_canvas_" + unique_id;
	            initializeGoogleMap(custom_map_style, color_overlay, saturation, lightness, google_maps_scroll_wheel, zoom, holderId, map_height, pin, map, geocoder, addresses);
	        });
	    }
	}

	function initializeGoogleMap(custom_map_style, color, saturation, lightness, wheel, zoom, holderId, height, pin, map, geocoder, data) {
	    "use strict";
	    var mapStyles = [ {
	        stylers: [ {
	            hue: color
	        }, {
	            saturation: saturation
	        }, {
	            lightness: lightness
	        }, {
	            gamma: 1
	        } ]
	    } ];
	    var google_map_type_id;
	    if (custom_map_style) {
	        google_map_type_id = "qode_style";
	    } else {
	        google_map_type_id = google.maps.MapTypeId.ROADMAP;
	    }
	    var qodeMapType = new google.maps.StyledMapType(mapStyles, {
	        name: "Qode Google Map"
	    });
	    geocoder = new google.maps.Geocoder();
	    var latlng = new google.maps.LatLng(-34.397, 150.644);
	    var myOptions = {
	        zoom: zoom,
	        scrollwheel: wheel,
	        center: latlng,
	        zoomControl: true,
	        zoomControlOptions: {
	            style: google.maps.ZoomControlStyle.SMALL,
	            position: google.maps.ControlPosition.RIGHT_CENTER
	        },
	        scaleControl: false,
	        scaleControlOptions: {
	            position: google.maps.ControlPosition.LEFT_CENTER
	        },
	        streetViewControl: false,
	        streetViewControlOptions: {
	            position: google.maps.ControlPosition.LEFT_CENTER
	        },
	        panControl: false,
	        panControlOptions: {
	            position: google.maps.ControlPosition.LEFT_CENTER
	        },
	        mapTypeControl: false,
	        mapTypeControlOptions: {
	            mapTypeIds: [ google.maps.MapTypeId.ROADMAP, "qode_style" ],
	            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
	            position: google.maps.ControlPosition.LEFT_CENTER
	        },
	        mapTypeId: google_map_type_id
	    };
	    map = new google.maps.Map(document.getElementById(holderId), myOptions);
	    map.mapTypes.set("qode_style", qodeMapType);
	    var index;
	    for (index = 0; index < data.length; ++index) {
	        initializeGoogleAddress(data[index], pin, map, geocoder);
	    }
	    var holder_element = document.getElementById(holderId);
	    holder_element.style.height = height + "px";
	}

	function initializeGoogleAddress(data, pin, map, geocoder) {
	    "use strict";
	    if (data === "") return;
	    var contentString = '<div class="content_map">' + '<div class="site_notice_map">' + "</div>" + '<div class="body_content_map">' + "<p>" + data + "</p>" + "</div>" + "</div>";
	    var infowindow = new google.maps.InfoWindow({
	        content: contentString
	    });
	    geocoder.geocode({
	        address: data
	    }, function(results, status) {
	        if (status === google.maps.GeocoderStatus.OK) {
	            map.setCenter(results[0].geometry.location);
	            var marker = new google.maps.Marker({
	                map: map,
	                position: results[0].geometry.location,
	                icon: pin,
	                title: data["store_title"]
	            });
	            google.maps.event.addListener(marker, "click", function() {
	                infowindow.open(map, marker);
	            });
	            google.maps.event.addDomListener(window, "resize", function() {
	                map.setCenter(results[0].geometry.location);
	            });
	        }
	    });
	}

	function checkSVG(element) {
	    "use strict";
	    var el = element.find(".active .qode_slide-svg-holder");
	    var drawing_enabled = el.data("svg-drawing");
	    if (drawing_enabled === "yes") {
	        drawSVG(el);
	    }
	}

	function drawSVG(svg) {
	    "use strict";
	    var svgs = Array.prototype.slice.call(svg.find("svg")), svgArr = [], resizeTimeout;
	    svgs.forEach(function(el, i) {
	        var svg = new SVGEl(el);
	        svgArr[i] = svg;
	        setTimeout(function(el) {
	            return function() {
	                svg.render();
	            };
	        }(el), 0);
	    });
	}

	var docElem = window.document.documentElement;

	window.requestAnimFrame = function() {
	    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
	        window.setTimeout(callback, 1e3 / 60);
	    };
	}();

	window.cancelAnimFrame = function() {
	    return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || function(id) {
	        window.clearTimeout(id);
	    };
	}();

	function SVGEl(el) {
	    this.el = el;
	    var frameRate = $j(this.el).closest(".qode_slide-svg-holder").data("svg-frames");
	    this.image = this.el.previousElementSibling;
	    this.current_frame = 0;
	    this.total_frames = frameRate;
	    this.path = [];
	    this.length = [];
	    this.handle = 0;
	    this.init();
	}

	SVGEl.prototype.init = function() {
	    var self = this;
	    [].slice.call(this.el.querySelectorAll("path")).forEach(function(path, i) {
	        self.path[i] = path;
	        var l = self.path[i].getTotalLength();
	        self.length[i] = l;
	        self.path[i].style.strokeDasharray = l + " " + l;
	        self.path[i].style.strokeDashoffset = l;
	    });
	};

	SVGEl.prototype.render = function() {
	    if (this.rendered) return;
	    this.rendered = true;
	    this.draw();
	};

	SVGEl.prototype.draw = function() {
	    var self = this, progress = this.current_frame / this.total_frames;
	    if (progress > 1) {
	        window.cancelAnimFrame(this.handle);
	    } else {
	        this.current_frame++;
	        for (var j = 0, len = this.path.length; j < len; j++) {
	            this.path[j].style.strokeDashoffset = Math.floor(this.length[j] * (1 - progress));
	        }
	        this.handle = window.requestAnimFrame(function() {
	            self.draw();
	        });
	    }
	};

	function initIconShortcodeHover() {
	    "use strict";
	    if ($j(".qode_icon_shortcode").length) {
	        $j(".qode_icon_shortcode").each(function() {
	            if (typeof $j(this).data("type") !== "undefined" && [ "circle", "square" ].indexOf($j(this).data("type")) != -1) {
	                if (typeof $j(this).data("hover-bg-color") !== "undefined") {
	                    if ($j(this).data("type") == "circle") {
	                        var elementToHover = $j(this).find("i").first();
	                        var hoverBgColor = $j(this).data("hover-bg-color");
	                        var initialStyle = elementToHover.attr("style");
	                        $j(this).hover(function() {
	                            elementToHover.attr("style", initialStyle + "color: " + hoverBgColor + "!important");
	                        }, function() {
	                            elementToHover.attr("style", initialStyle);
	                        });
	                    } else {
	                        var hoverBgColor = $j(this).data("hover-bg-color");
	                        var initialBgColor = $j(this).css("background-color");
	                        $j(this).hover(function() {
	                            $j(this).css("background-color", hoverBgColor);
	                        }, function() {
	                            $j(this).css("background-color", initialBgColor);
	                        });
	                    }
	                }
	            }
	            if (typeof $j(this).data("hover-icon-color") !== "undefined") {
	                var hoverColor = $j(this).data("hover-icon-color");
	                var initialColor = $j(this).find(".qode_icon_element ").css("color");
	                $j(this).hover(function() {
	                    $j(this).find(".qode_icon_element ").css("color", hoverColor);
	                }, function() {
	                    $j(this).find(".qode_icon_element ").css("color", initialColor);
	                });
	            }
	        });
	    }
	}

	function initIconWithTextHover() {
	    "use strict";
	    if ($j(".qode_iwt_icon_holder").length) {
	        $j(".qode_iwt_icon_holder").each(function() {
	            if (typeof $j(this).data("icon-hover-bg-color") !== "undefined") {
	                var hoverBgColor = $j(this).data("icon-hover-bg-color");
	                var initialBgColor = $j(this).css("background-color");
	                $j(this).hover(function() {
	                    $j(this).css("background-color", hoverBgColor);
	                }, function() {
	                    $j(this).css("background-color", initialBgColor);
	                });
	            }
	            if (typeof $j(this).data("icon-hover-color") !== "undefined") {
	                var elementToChange = $j(this).find(".qode_iwt_icon_element");
	                var hoverColor = $j(this).data("icon-hover-color");
	                var initialColor = elementToChange.css("color");
	                $j(this).hover(function() {
	                    elementToChange.css("color", hoverColor);
	                }, function() {
	                    elementToChange.css("color", initialColor);
	                });
	            }
	        });
	    }
	}

	function initLoadNextPostOnBottom() {
	    "use strict";
	    if ($j(".blog_vertical_loop").length) {
	        var header_addition;
	        var normal_header_addition;
	        var paspartu_add = $j("body").hasClass("paspartu_enabled") ? Math.round($window_width * paspartu_width) : 0;
	        if ($j("header.page_header").hasClass("transparent")) {
	            normal_header_addition = 0;
	        } else {
	            normal_header_addition = header_height;
	        }
	        var click = true;
	        var $container = $j(".blog_vertical_loop .blog_holder");
	        $j(document).on("click", ".blog_vertical_loop_button a", function(e) {
	            e.preventDefault();
	            if (click) {
	                click = false;
	                var $this = $j(this);
	                var link = $this.attr("href");
	                var $content = ".blog_vertical_loop .blog_holder";
	                var $anchor = ".blog_vertical_loop_button_holder a";
	                var $next_href = $j($anchor).attr("href");
	                if ($window_width < 1e3) {
	                    header_addition = $j("header.page_header").height();
	                } else {
	                    header_addition = normal_header_addition;
	                }
	                var scrollTop = $j(window).scrollTop(), elementOffset = $this.closest("article").offset().top, distance = elementOffset - scrollTop - header_addition - paspartu_add;
	                $container.find("article:eq(1)").addClass("fade_out");
	                $this.closest("article").addClass("move_up").removeClass("next_post").css("transform", "translateY(-" + distance + "px)");
	                setTimeout(function() {
	                    $j(window).scrollTop(0);
	                    $container.find("article:eq(0)").remove();
	                    $container.find("article:eq(0)").addClass("previous_post");
	                    $this.closest("article").removeAttr("style").removeClass("move_up");
	                }, 450);
	                $j.get(link + "", function(data) {
	                    var $new_content = $j(data).find("article").addClass("next_post");
	                    $next_href = $j($anchor, data).attr("href");
	                    $container.append($j($new_content));
	                    click = true;
	                });
	            } else {
	                return false;
	            }
	        });
	        $j(document).on("click", ".blog_vertical_loop_back_button a", function(e) {
	            e.preventDefault();
	            if (click) {
	                click = false;
	                var $this = $j(this);
	                var link = $this.attr("href");
	                var $content = ".blog_vertical_loop .blog_holder";
	                var $anchor = ".blog_vertical_loop_button_holder.prev_post a";
	                var $prev_href = $j($anchor).attr("href");
	                $container.find("article:eq(0)").removeClass("fade_out").addClass("fade_in");
	                $this.closest("article").addClass("move_up").css("transform", "translateY(" + $window_height + "px)");
	                setTimeout(function() {
	                    $container.find("article:last-child").remove();
	                    $container.find("article:eq(0)").removeClass("previous_post fade_in");
	                    $this.closest("article").addClass("next_post").removeAttr("style").removeClass("move_up");
	                    $j.get(link + "", function(data) {
	                        var $new_content = $j(data).find("article").removeClass("next_post").addClass("previous_post");
	                        $prev_href = $j($anchor, data).attr("href");
	                        $container.prepend($j($new_content));
	                        click = true;
	                    });
	                }, 450);
	            } else {
	                return false;
	            }
	        });
	        $j.get($j(".blog_vertical_loop_button_holder .last_page a").attr("href") + "", function(data) {
	            var $new_content = $j(data).find("article").removeClass("next_post").addClass("previous_post");
	            $container.prepend($j($new_content));
	        });
	        $j.get($j(".blog_vertical_loop_button a").attr("href") + "", function(data) {
	            var $new_content = $j(data).find("article").addClass("next_post");
	            $container.append($j($new_content));
	        });
	    }
	}

	(function($) {
	    "use strict";
	    $.fn.extend({
	        mouseParallax: function(options) {
	            var defaults = {
	                moveFactor: 1.5,
	                targetContainer: this
	            };
	            var options = $.extend(defaults, options);
	            return this.each(function() {
	                var o = options;
	                var layer_elements = $(o.targetContainer).find(".image, .paralax_layers_content_holder");
	                layer_elements.each(function(i) {
	                    $(this).css("z-index", i);
	                });
	                var mouseXStart;
	                var mouseYStart;
	                mouseXStart = $(o.targetContainer).offset().left;
	                mouseYStart = $(o.targetContainer).offset().top;
	                $(o.targetContainer).on("mouseenter", function(e) {
	                    mouseXStart = e.pageX - $(this).offset().left;
	                    mouseYStart = e.pageY - $(this).offset().top;
	                });
	                $(o.targetContainer).on("mousemove", function(e) {
	                    var mouseX0 = $(this).offset().left + mouseXStart;
	                    var mouseY0 = $(this).offset().top + mouseYStart;
	                    var mouseX = e.pageX - mouseX0;
	                    var mouseY = e.pageY - mouseY0;
	                    layer_elements.each(function(i) {
	                        $(this).css({
	                            marginLeft: -mouseX / 100 * o.moveFactor * (i + 1),
	                            marginTop: -mouseY / 100 * o.moveFactor * (i + 1)
	                        }, 100);
	                    });
	                });
	                var config = {
	                    interval: 0,
	                    over: function() {},
	                    timeout: 500,
	                    out: function() {
	                        layer_elements.each(function(i) {
	                            $(this).stop().animate({
	                                marginLeft: 0,
	                                marginTop: 0
	                            }, 300);
	                        });
	                    }
	                };
	                $(o.targetContainer).hoverIntent(config);
	            });
	        }
	    });
	})(jQuery);

	function setParallaxLayersHeight($this, $def_height) {
	    "use strict";
	    var parallax_layers_height = $def_height;
	    var responsive_breakpoint_set = [ 1600, 1300, 1e3, 768, 567, 320 ];
	    if ($window_width > responsive_breakpoint_set[0]) {
	        parallax_layers_height = $def_height;
	    } else if ($window_width > responsive_breakpoint_set[1]) {
	        parallax_layers_height = $def_height * .75;
	    } else if ($window_width > responsive_breakpoint_set[2]) {
	        parallax_layers_height = $def_height * .6;
	    } else if ($window_width > responsive_breakpoint_set[3]) {
	        parallax_layers_height = $def_height * .55;
	    } else if ($window_width <= responsive_breakpoint_set[3]) {
	        parallax_layers_height = $def_height * .45;
	    }
	    $this.css({
	        height: parallax_layers_height + "px"
	    });
	}

	function parallaxLayers() {
	    "use strict";
	    if ($j(".qode_parallax_layers").length) {
	        $j(".qode_parallax_layers").each(function() {
	            var $this = $j(this);
	            if ($j(this).hasClass("full_screen_height")) {
	                $this.height($window_height);
	                $j(window).resize(function() {
	                    $this.height($window_height);
	                });
	            } else {
	                var $def_height = $j(this).data("height");
	                setParallaxLayersHeight($this, $def_height);
	                $j(window).resize(function() {
	                    setParallaxLayersHeight($this, $def_height);
	                });
	            }
	            var $parallax_layers_holder = $this.find(".qode_parallax_layers_holder");
	            var counter = 0;
	            var limit = $this.find(".image").length;
	            $this.find(".image").each(function() {
	                var $this = $j(this);
	                if ($this.css("background-image") != "" && $this.css("background-image") != "none") {
	                    var bg_url = $this.attr("style");
	                    bg_url = bg_url.match(/url\(["']?([^'")]+)['"]?\)/);
	                    bg_url = bg_url ? bg_url[1] : "";
	                    if (bg_url) {
	                        var backImg = new Image();
	                        backImg.src = bg_url;
	                        $j(backImg).load(function() {
	                            counter++;
	                            if (counter == limit) {
	                                $parallax_layers_holder.removeClass("preload_parallax_layers");
	                                if ($j("html").hasClass("no-touch")) {
	                                    $parallax_layers_holder.mouseParallax();
	                                }
	                            }
	                        });
	                    }
	                }
	            });
	        });
	    }
	}

	function alterWPMLSwitcherHeaderBottom() {
	    "use strict";
	    if ($j(".header_bottom .main_menu li.menu-item-language").length) {
	        var langDropdown = $j(".header_bottom .main_menu .menu-item-language").find(".submenu-languages");
	        if (typeof langDropdown !== "undefined") {
	            langDropdown.parent("li").addClass("narrow");
	            langDropdown.wrap('<div class="second"><div class="inner"></div></div>');
	            langDropdown.show();
	        }
	    }
	    if ($j(".header_bottom .mobile_menu li.menu-item-language").length) {
	        var langDropdown = $j(".header_bottom .mobile_menu .menu-item-language").find(".submenu-languages");
	        if (typeof langDropdown !== "undefined") {
	            langDropdown.parent("li").addClass("has_sub");
	            langDropdown.prev("a").after('<span class="mobile_arrow"><i class="fa fa-angle-right"></i><i class="fa fa-angle-down"></i></span>');
	            langDropdown.addClass("sub_menu");
	        }
	    }
	}

	jQuery(document).ready(function() {
	    if (jQuery(".new_social_carousel_wrapper").length) {
	        jQuery(".new_social_carousel_wrapper").each(function() {
	            jQuery(this).find(".new_social_carousel").carouFredSel({
	                circular: true,
	                responsive: true,
	                scroll: {
	                    items: 1,
	                    duration: 1e3,
	                    pauseOnHover: false
	                },
	                items: {
	                    width: 600,
	                    visible: {
	                        min: 1,
	                        max: 3
	                    }
	                },
	                auto: false,
	                mousewheel: false,
	                swipe: {
	                    onMouse: true,
	                    onTouch: true
	                },
	                prev: {
	                    button: function() {
	                        return jQuery(this).parents().eq(1).find(".prev2");
	                    }
	                },
	                next: {
	                    button: function() {
	                        return jQuery(this).parents().eq(1).find(".next2");
	                    }
	                },
	                onCreate: function(data) {
	                    console.log(jQuery(this).parents(".new_social_carousel_wrapper"));
	                    jQuery(this).parents(".new_social_carousel_wrapper").removeClass("social_carousel-beforeLoad");
	                }
	            }).animate({
	                opacity: 1
	            }, 1e3);
	        });
	    }
	});

	function new_social_carousel_heights() {
	    if (jQuery(".new_social_carousel_wrapper").length) {
	        jQuery(".new_social_carousel").each(function() {
	            jQuery(this).parents(".caroufredsel_wrapper").css({
	                height: jQuery(this).find("li").outerHeight() + 45 + "px"
	            });
	            jQuery(".list_btn1 .prev2").css({
	                height: jQuery(this).find("li").outerHeight() + 2 + "px"
	            });
	            jQuery(".list_btn1 .next2").css({
	                height: jQuery(this).find("li").outerHeight() + 2 + "px"
	            });
	            jQuery(".list_btn1 .prev2").css({
	                width: jQuery(this).find("li").outerWidth() / 2 + 13 + "px"
	            });
	            jQuery(".list_btn1 .next2").css({
	                width: jQuery(this).find("li").outerWidth() / 2 + 13 + "px"
	            });
	        });
	    }
	}



	$j(document).ready(function() {
	    "use strict";
	    if ($j("header").hasClass("regular")) {
	        content_menu_top = 0;
	    }
	    if ($j("header").hasClass("fixed_top_header")) {
	        content_menu_top = header_height;
	    }
	    if ($j("header").hasClass("fixed")) {
	        content_menu_top = min_header_height_scroll;
	    }
	    if ($j("header").hasClass("fixed_hiding")) {
	        content_menu_top = min_header_height_fixed_hidden + 40;
	    }
	    if ($j("header").hasClass("stick") || $j("header").hasClass("stick_with_left_right_menu")) {
	        content_menu_top = 0;
	    }
	    if (!$j("header.page_header").hasClass("scroll_top") && $j("header.page_header").hasClass("has_top") && $j("header.page_header").hasClass("fixed")) {
	        content_menu_top_add = 34;
	    }
	    if ($j("body").hasClass("vertical_menu_enabled")) {
	        content_menu_top = 0;
	        content_menu_top_add = 0;
	        var min_header_height_sticky = 0;
	    }
	    paspartu_width = $window_width < 1024 ? .02 : paspartu_width_init;
	    exports.contentMinHeight();
	    exports.contentMinHeightWithPaspartu();
	    exports.setDropDownMenuPosition();
	    exports.initDropDownMenu();
	    exports.initVerticalMenu();
	    exports.initVerticalMobileMenu();
	    initQodeSlider();
	    initSideMenu();
	    initPopupMenu();
	    initMessageHeight();
	    initToCounter();
	    initCounter();
	    if (!$j(".vertical_split_slider").length) {
	        initCountdown();
	    }
	    initProgressBars();
	    initListAnimation();
	    initServiceAnimation();
	    initParallaxTitle();
	    initSideAreaScroll();
	    initVerticalAreaMenuScroll();
	    loadMore();
	    prettyPhoto();
	    alterWPMLSwitcherHeaderBottom();
	    initMobileMenu();
	    initAccordion();
	    initAccordionContentLink();
	    initMessages();
	    initProgressBarsIcon();
	    initMoreFacts();
	    placeholderReplace();
	    backButtonShowHide();
	    backToTop();
	    initSteps();
	    showGoogleMap();
	    initProgressBarsVertical();
	    initElementsAnimation();
	    updateShoppingCart();
	    initHashClick();
	    initIconWithTextAnimation();
	    initCheckSafariBrowser();
	    initSearchButton();
	    initCoverBoxes();
	    createContentMenu();
	    contentMenuScrollTo();
	    createSelectContentMenu();
	    initButtonHover();
	    initSocialIconHover();
	    initIconShortcodeHover();
	    initIconWithTextHover();
	    parallaxLayers();
	    $j(".widget #searchform").mousedown(function() {
	        $j(this).addClass("form_focus");
	    }).focusout(function() {
	        $j(this).removeClass("form_focus");
	    });
	    $scroll = $j(window).scrollTop();
	    checkTitleToShowOrHide();
	    checkVerticalMenuTransparency();
	    if ($j(window).width() > 1e3) {
	        headerSize($scroll);
	    } else {
	        logoSizeOnSmallScreens();
	    }
	    if ($j(window).width() > 768) {
	        contentMenuPosition();
	    }
	    contentMenuCheckLastSection();
	    $j("header:not(.stick_with_left_right_menu) .q_logo a").css("visibility", "visible");
	    initFullScreenTemplate();
	    showHideVerticalMenu();
	    initMasonryGallery();
	    initLoadNextPostOnBottom();
	});

	$j(function() {
	    "use strict";
	    $j(".touch .main_menu li:has(div.second)").doubleTapToGo();
	    initSmallImageBlogHeight();
	    exports.setDropDownMenuPosition();
	    exports.initDropDownMenu();
	    initPortfolio();
	    initPortfolioZIndex();
	    initPortfolioSingleInfo();
	    initTestimonials();
	    initBlog();
	    initBlogMasonryFullWidth();
	    initQBlog();
	    initPortfolioMasonry();
	    initPortfolioMasonryFilter();
	    initTabs();
	    countClientsPerRow();
	    animatedTextIconHeight();
	    countAnimatedTextIconPerRow();
	    initTitleAreaAnimation();
	    setContentBottomMargin();
	    footerWidth();
	    if ($j("nav.content_menu").length > 0) {
	        content_menu_position = $j("nav.content_menu").offset().top;
	        contentMenuPosition();
	    }
	    contentMenuCheckLastSection();
	    initQodeCarousel();
	    initPortfolioSlider();
	    initBlogSlider();
	    initTabsActiveBorder();
	    setActiveTabBorder();
	    initImageHover();
	    $j("header.stick_with_left_right_menu .q_logo a").css("visibility", "visible");
	    setMargingsForLeftAndRightMenu();
	    initImageGallerySliderNoSpace();
	    initVerticalSplitSlider();
	    initParallax();
	    setTimeout(function() {
	        checkAnchorOnScroll();
	        checkAnchorOnLoad();
	        checkHeaderStyleOnScroll();
	    }, 700);
	});

	$j(window).scroll(function() {
	    "use strict";
	    $scroll = $j(window).scrollTop();
	    if ($j(window).width() > 1e3) {
	        headerSize($scroll);
	    }
	    if ($j(window).width() > 768) {
	        contentMenuPosition();
	    }
	    contentMenuCheckLastSection();
	    checkVerticalMenuTransparency();
	    $j(".touch .drop_down > ul > li").mouseleave();
	    $j(".touch .drop_down > ul > li").blur();
	});

	$j(window).resize(function() {
	    "use strict";
	    $window_width = $j(window).width();
	    $window_height = $j(window).height();
	    paspartu_width = $window_width < 1024 ? .02 : paspartu_width_init;
	    if ($j(window).width() > 1e3) {
	        headerSize($scroll);
	    } else {
	        logoSizeOnSmallScreens();
	    }
	    initMessageHeight();
	    initTestimonials();
	    initSmallImageBlogHeight();
	    initBlog();
	    initBlogMasonryFullWidth();
	    initQBlog();
	    animatedTextIconHeight();
	    countAnimatedTextIconPerRow();
	    countClientsPerRow();
	    setContentBottomMargin();
	    footerWidth();
	    calculateHeights();
	    $j(".vertical_split_slider").height($window_height);
	    initMasonryGallery();
	    exports.contentMinHeight();
	    //alert("default_min.contentMinHeight");
	    exports.contentMinHeightWithPaspartu();
	});

	// module.exports = {
	//     contentMinHeight: contentMinHeight,
	//     contentMinHeightWithPaspartu: contentMinHeight,
	//     setDropDownMenuPosition: setDropDownMenuPosition
	// };
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {function ajaxSubmitCommentForm() {
	    "use strict";
	    var options = {
	        success: function() {
	            $j("#commentform textarea").val("");
	            $j("#commentform .success p").text("Comment has been sent!");
	        }
	    };
	    $j("#commentform").submit(function() {
	        $j(this).find('input[type="submit"]').next(".success").remove();
	        $j(this).find('input[type="submit"]').after('<div class="success"><p></p></div>');
	        $j(this).ajaxSubmit(options);
	        return false;
	    });
	}

	var header_height = 100;

	var min_header_height_scroll = 57;

	var min_header_height_fixed_hidden = 50;

	var min_header_height_sticky = 60;

	var scroll_amount_for_sticky = 85;

	var content_line_height = 60;

	var header_bottom_border_weight = 1;

	var scroll_amount_for_fixed_hiding = 200;

	var paspartu_width_init = .02;

	var add_for_admin_bar = 0;

	var logo_height = 130;

	var logo_width = 280;

	logo_height = 45;

	logo_width = 195;

	header_top_height = 33;

	var loading_text;

	loading_text = "Loading new posts...";

	var finished_text;

	finished_text = "No more posts";

	var piechartcolor;

	piechartcolor = "#1abc9c";

	piechartcolor = "#f57c00";

	var geocoder;

	var map;

	function initialize() {
	    "use strict";
	    var mapStyles = [ {
	        stylers: [ {
	            hue: "#324156"
	        }, {
	            saturation: "-60"
	        }, {
	            lightness: "-20"
	        }, {
	            gamma: 1.51
	        } ]
	    } ];
	    var qodeMapType = new google.maps.StyledMapType(mapStyles, {
	        name: "Qode Map"
	    });
	    geocoder = new google.maps.Geocoder();
	    var latlng = new google.maps.LatLng(-34.397, 150.644);
	    var myOptions = {
	        zoom: 12,
	        scrollwheel: false,
	        center: latlng,
	        zoomControl: true,
	        zoomControlOptions: {
	            style: google.maps.ZoomControlStyle.SMALL,
	            position: google.maps.ControlPosition.RIGHT_CENTER
	        },
	        scaleControl: false,
	        scaleControlOptions: {
	            position: google.maps.ControlPosition.LEFT_CENTER
	        },
	        streetViewControl: false,
	        streetViewControlOptions: {
	            position: google.maps.ControlPosition.LEFT_CENTER
	        },
	        panControl: false,
	        panControlOptions: {
	            position: google.maps.ControlPosition.LEFT_CENTER
	        },
	        mapTypeControl: false,
	        mapTypeControlOptions: {
	            mapTypeIds: [ google.maps.MapTypeId.ROADMAP, "qode_style" ],
	            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
	            position: google.maps.ControlPosition.LEFT_CENTER
	        },
	        mapTypeId: "qode_style"
	    };
	    map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
	    map.mapTypes.set("qode_style", qodeMapType);
	}

	function codeAddress(data) {
	    "use strict";
	    if (data === "") return;
	    var contentString = '<div id="content">' + '<div id="siteNotice">' + "</div>" + '<div id="bodyContent">' + "<p>" + data + "</p>" + "</div>" + "</div>";
	    var infowindow = new google.maps.InfoWindow({
	        content: contentString
	    });
	    geocoder.geocode({
	        address: data
	    }, function(results, status) {
	        if (status === google.maps.GeocoderStatus.OK) {
	            map.setCenter(results[0].geometry.location);
	            var marker = new google.maps.Marker({
	                map: map,
	                position: results[0].geometry.location,
	                icon: "http://www.daytranslations.com/wp-content/themes/bridge/img/pin.png",
	                title: data["store_title"]
	            });
	            google.maps.event.addListener(marker, "click", function() {
	                infowindow.open(map, marker);
	            });
	        }
	    });
	}

	var $j = jQuery.noConflict();

	$j(document).ready(function() {
	    "use strict";
	    showContactMap();
	});

	function showContactMap() {
	    "use strict";
	    if ($j("#map_canvas").length > 0) {
	        initialize();
	        codeAddress("");
	        codeAddress("");
	        codeAddress("");
	        codeAddress("");
	        codeAddress("");
	    }
	}

	var no_ajax_pages = [];

	var qode_root = "https://www.daytranslations.com/";

	var theme_root = "https://www.daytranslations.com/wp-content/themes/bridge/";

	var header_style_admin = "";

	if (typeof no_ajax_obj !== "undefined") {
	    no_ajax_pages = no_ajax_obj.no_ajax_pages;
	}

	module.exports = {
	    header_height: header_height,
	    min_header_height_scroll: min_header_height_scroll,
	    min_header_height_fixed_hidden:min_header_height_fixed_hidden,
	    min_header_height_sticky:min_header_height_sticky,
	    scroll_amount_for_sticky: scroll_amount_for_sticky,
	    content_line_height:content_line_height,
	    header_bottom_border_weight:header_bottom_border_weight,
	    scroll_amount_for_fixed_hiding:scroll_amount_for_fixed_hiding,
	    paspartu_width_init:paspartu_width_init,
	    add_for_admin_bar:add_for_admin_bar,
		logo_height:logo_height,
		logo_width:logo_width,
		header_top_height:header_top_height,
		loading_text:loading_text,
		finished_text:finished_text,
		piechartcolor:piechartcolor,
		geocoder:geocoder,
		map:map
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }
]);