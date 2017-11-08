/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(1);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_index2.default);

var cb = function cb() {
    alert("You have reach the bottom");
};

_index2.default.reachToPageBottom(cb);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _scroll = __webpack_require__(2);

var _scroll2 = _interopRequireDefault(_scroll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _scroll2.default;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    reachToBottom: function reachToBottom(el, cb) {
        var _arguments = arguments;

        el.onscroll = function (e) {
            if (el.scrollTop + el.clientHeight >= el.scrollHeight) {
                cb.apply(undefined, _arguments);
            }
        };
    },
    reachToPageBottom: function reachToPageBottom(cb) {
        var footer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        window.onscroll = function (e) {
            var footerHeight = footer === null ? 0 : footer.clientHeight;
            if (window.innerHeight + window.scrollY >= document.body.scrollHeight - footerHeight) {
                cb();
            }
        };
    },
    reachToTop: function reachToTop(el, cb) {
        var _arguments2 = arguments;

        el.onscroll = function (e) {
            if (el.scrollTop === 0) {
                cb.apply(undefined, _arguments2);
            }
        };
    },
    scollToBottom: function scollToBottom() {
        var el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

        if (el === '') {
            window.scrollTo(0, document.body.scrollHeight);
        } else {
            el.scrollTop = el.scrollHeight - el.clientHeight;
        }
    },
    scrollToTop: function scrollToTop() {
        var el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

        if (el === '') {
            window.scrollTo(0, 0);
        } else {
            el.scrollTop = 0;
        }
    },
    scrollTo: function scrollTo(el) {
        var container = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window;

        if (container === window) {
            container.scrollTo = el.offsetTop;
        } else {
            el.scrollIntoView(true);
        }
    },
    scrollToHalf: function scrollToHalf(el, enterCb, leaveCb) {
        var halfSize = window.scrollY + window.innerHeight - el.height / 2;
        var elBottom = el.offsetTop + el.height;
        if (el.offsetTop <= halfSize && halfSize <= elBottom) {
            enterCb.apply(undefined, arguments);
        } else {
            leaveCb.apply(undefined, arguments);
        }
    },
    scrollToward: function scrollToward(upCb, downCb) {
        var _arguments3 = arguments;
        var el = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

        var scrollTop = 0;

        if (el === null) {
            window.onscroll = function (e) {
                window.scrollY > scrollTop ? downCb.apply(undefined, _arguments3) : upCb.apply(undefined, _arguments3);
                scrollTop = window.scrollY;
            };
        } else {
            el.onscroll = function (e) {
                el.scrollTop > scrollTop ? downCb.apply(undefined, _arguments3) : upCb.apply(undefined, _arguments3);
                scrollTop = el.scrollTop;
            };
        }
    }
};

/***/ })
/******/ ]);