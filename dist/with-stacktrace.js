!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["with-stacktrace"]=t():e["with-stacktrace"]=t()}(this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,r){"use strict";function n(e){if(!(e instanceof Promise))throw new Error("task argument is not a Promise");var t=new Error;return new Promise(function(r,n){e.then(r).catch(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};"message"in e?(t.message=e.message,t.originalError=e):"string"==typeof e&&(t.message=e),n(t)})})}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n}])});