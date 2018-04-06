/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1]
/******/ 		var executeModules = data[2];
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fullfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fullfilled = false;
/******/ 			}
/******/ 			if(fullfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		"about": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./source/pages/about/about.js","common"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./source/pages/about/about.js":
/*!*************************************!*\
  !*** ./source/pages/about/about.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! normalize.css */ \"../../node_modules/normalize.css/normalize.css\");\n/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(normalize_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _common_layout_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/layout.scss */ \"./source/common/layout.scss\");\n/* harmony import */ var _common_layout_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_common_layout_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _common_fonts_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/fonts.scss */ \"./source/common/fonts.scss\");\n/* harmony import */ var _common_fonts_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_common_fonts_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _common_footer_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/footer.scss */ \"./source/pages/common/footer.scss\");\n/* harmony import */ var _common_footer_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_common_footer_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _map_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map.scss */ \"./source/pages/about/map.scss\");\n/* harmony import */ var _map_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_map_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _aboutme_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./aboutme.scss */ \"./source/pages/about/aboutme.scss\");\n/* harmony import */ var _aboutme_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_aboutme_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _hero_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hero.scss */ \"./source/pages/about/hero.scss\");\n/* harmony import */ var _hero_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_hero_scss__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n\n\n\nfunction initMap(){\n//    console.log('initMap');\n    var coordinates = {lat: 55.744063, lng: 37.618737};\n    \n    var map = new google.maps.Map(document.querySelector('.google-map'), {\n        center: coordinates,\n        zoom: 14\n    });\n}\n\nwindow.initMap = initMap();\n\nfunction parallax(obj, speed) {\n    var scrolled = - window.pageYOffset || document.documentElement.scrollTop;\n    var translateY = scrolled / speed + \"px\";\n    obj.css('transform', 'translate3d(0, ' + translateY + ', 0');\n}\n\nwindow.onscroll = function() {\n    var scrolled = window.pageYOffset || document.documentElement.scrollTop;\n\n    var hero = $('.hero_bg');\n    parallax(hero, 60);\n\n    var sectionTitle = $('.hero__title-block');\n    parallax(sectionTitle, 5);    \n    \n    var user = $('.user__block');\n    parallax(user, 3);\n\n    var skills = document.querySelectorAll('.skill');\n    skills.forEach((item, i)  => {\n        var svgTop = item.getBoundingClientRect().top;        \n        if (scrolled - svgTop > 0 && !item.attributes.flag) {\n            item.attributes.flag = 1;\n//            console.log(item.attributes.procent.value);\n            var procent = item.attributes.procent.value;\n            var skill = item.querySelector('.circle__procent');\n            skill.style.strokeDashoffset = 314 - 283 / 100 * procent;\n        }              \n    });\n}\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./source/pages/about/about.js?");

/***/ }),

/***/ "./source/pages/about/map.scss":
/*!*************************************!*\
  !*** ./source/pages/about/map.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./source/pages/about/map.scss?");

/***/ })

/******/ });