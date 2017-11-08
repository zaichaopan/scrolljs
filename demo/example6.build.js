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

var imgs = document.querySelectorAll("img");

var reachToImagHandler = function reachToImagHandler() {
    imgs.forEach(function (img) {
        return _index2.default.scrollToHalf(img, function () {
            return img.classList.add("active");
        }, function () {
            return img.classList.remove("active");
        });
    });
};

_index2.default.on(reachToImagHandler);

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
        el.onscroll = function (e) {
            if (el.scrollTop + el.clientHeight >= el.scrollHeight) {
                cb();
            }
        };
    },
    reachToPageBottom: function reachToPageBottom(cb) {
        var footer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        window.onscroll = function (e) {
            var footerHeight = footer === null ? 0 : footer.clientHeight;
            var hasReachedBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - footerHeight;
            if (hasReachedBottom) {
                cb();
            }
        };
    },
    reachToTop: function reachToTop(el, cb) {
        el.onscroll = function (e) {
            if (el.scrollTop === 0) {
                cb();
            }
        };
    },
    scollToBottom: function scollToBottom() {
        var el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

        if (el === null) {
            window.scrollTo(0, document.body.scrollHeight);
        } else {
            el.scrollTop = el.scrollHeight - el.clientHeight;
        }
    },
    scrollToTop: function scrollToTop() {
        var el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

        if (el === null) {
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
    onWindow: function onWindow(cb) {
        window.onscroll = function (e) {
            return cb();
        };
    },
    on: function on(cb) {
        var el = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window;

        el.onscroll = function (e) {
            return cb();
        };
    },
    scrollToHalf: function scrollToHalf(el, enterCb, leaveCb) {
        var halfSize = window.scrollY + window.innerHeight - el.height / 2;
        var elBottom = el.offsetTop + el.height;
        el.offsetTop <= halfSize && halfSize <= elBottom ? enterCb() : leaveCb();
    },
    scrollToward: function scrollToward(upCb, downCb) {
        var el = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : window;

        var scrollTop = 0;
        el.onscroll = function (e) {
            var yOffsetProp = el === window ? 'scrollY' : 'scrollTop';
            el[yOffsetProp] > scrollTop ? downCb() : upCb();
            scrollTop = el[yOffsetProp];
        };
    }
};

/***/ })
/******/ ]);