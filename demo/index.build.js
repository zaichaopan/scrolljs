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

var nav = document.querySelector('nav');
var skillContainer = document.querySelector('.skills');

_index.scrollWindow.reachedElementHalf(function () {
    return skillContainer.querySelectorAll('img').forEach(function (img) {
        return img.classList.add('complete');
    });
}, skillContainer);

_index.scrollWindow.toward(function () {
    if (!nav.classList.contains('fixed')) {
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        nav.classList.add('fixed');
    }
}, function () {
    if (nav.classList.contains('fixed')) {
        nav.classList.remove('fixed');
        document.body.style.paddingTop = 0;
    }
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scrollWindow = undefined;

var _scroll = __webpack_require__(2);

var scroll = _interopRequireWildcard(_scroll);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var scrollWindow = exports.scrollWindow = scroll.scrollWindow;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var scrollWindow = exports.scrollWindow = {
    // tested
    scroll: function scroll(cb) {
        window.addEventListener('scroll', function (e) {
            return cb();
        });
    },


    // tested
    reachedElementTop: function reachedElementTop(cb, el) {
        this.scroll(function () {
            if (window.scrollY + window.innerHeight >= el.offsetTop) {
                cb();
            }
        });
    },


    // tested
    reachedElementHalf: function reachedElementHalf(cb, el) {
        this.scroll(function () {
            var halfSize = window.scrollY + window.innerHeight - el.clientHeight / 2;
            var elBottom = el.offsetTop + el.clientHeight;
            if (halfSize >= el.offsetTop) {
                cb();
            }
        });
    },


    //tested
    reachedElementBottom: function reachedElementBottom(cb, el) {
        this.scroll(function () {
            if (window.scrollY + window.innerHeight >= el.offsetTop + el.scrollHeight) {
                cb();
            }
        });
    },
    reachedPageBottom: function reachedPageBottom(cb) {
        var footer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        this.scroll(function () {
            var footerHeight = footer === null ? 0 : footer.clientHeight;
            var hasReachedBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - footerHeight;
            if (hasReachedBottom) {
                cb();
            }
        });
    },
    reachedPageTop: function reachedPageTop(cb) {
        var el = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window;

        this.scroll(function () {
            if (window.screenY === 0) {
                cb();
            }
        });
    },
    toElementTop: function toElementTop(el) {
        window.scrollTo = el.offsetTop;
    },
    toPageTop: function toPageTop() {
        window.scrollTo(0, 0);
    },
    toPageBottom: function toPageBottom() {
        var el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

        window.scrollTo(0, document.body.scrollHeight);
    },


    // tested
    toward: function toward(upCb, downCb) {
        var currentPostion = 0;
        this.scroll(function () {
            window.scrollY > currentPostion ? downCb() : upCb();
            currentPostion = window.scrollY;
        });
    }
};

// export default {
//     // test
//     // on(cb, el = window) {
//     //     el.addEventListener('scroll', e => cb());
//     // },

//     //
//     // reachedElementTop(cb, el) {
//     //     this.on(
//     //         () => {
//     //             if (window.scrollY + window.innerHeight >= el.offsetTop) {
//     //                 cb();
//     //             }
//     //         }, el);
//     // },

//     // test
//     // reachedHalfOf(cb, el) {
//     //     this.on(
//     //         () => {
//     //             let halfSize = window.scrollY + window.innerHeight - el.clientHeight / 2;
//     //             let elBottom = el.offsetTop + el.clientHeight;
//     //             if (halfSize >= el.offsetTop) {
//     //                 cb();
//     //             }
//     //         });
//     // },

//     // reachedElementBottom(cb, el) {
//     //     this.on(
//     //         () => {
//     //             if (window.scrollY + window.innerHeight >= el.offsetTop + el.scrollHeight) {
//     //                 cb();
//     //             }
//     //         });
//     // },

//     // scroll container
//     reachedContainerBottom(cb, container) {
//         this.on(
//             () => {
//                 if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
//                     cb();
//                 }
//             }, container);
//     },


//     reachedToTop(cb, el = window) {
//         this.on(() => {
//             let yOffsetProp = el === window ? 'scrollY' : 'scrollTop';
//             if (el[yOffsetProp] === 0) {
//                 cb();
//             }
//         }, el);
//     },

//     to(el, container = window) {
//         if (container === window) {
//             container.scrollTo = el.offsetTop;
//         } else {
//             el.scrollIntoView(true);
//         }
//     },

//     toBottom(el = null) {
//         if (el === null) {
//             window.scrollTo(0, document.body.scrollHeight);
//         } else {
//             el.scrollTop = el.scrollHeight - el.clientHeight;
//         }
//     },

//     toTop(el = null) {
//         if (el === null) {
//             window.scrollTo(0, 0);
//         } else {
//             el.scrollTop = 0;
//         }
//     },

//     toward(upCb, downCb, el = window) {
//         let currentPostion = 0;
//         this.on(() => {
//             let yOffsetProp = el === window ? 'scrollY' : 'scrollTop';
//             el[yOffsetProp] > currentPostion ? downCb() : upCb();
//             currentPostion = el[yOffsetProp];
//         }, el);
//     }
// }


// el.offsetHeight including padding
// el.clientHeight not including paddding
// The HTMLElement.offsetTop read-only property returns the distance of the current element relative to the top of the offsetParent node.
//The Element.scrollHeight read-only property is a measurement of the height of an element's content, including content not visible on the screen due to overflow.
// if ussing window.onscroll will override each other, using addEventListener

/***/ })
/******/ ]);