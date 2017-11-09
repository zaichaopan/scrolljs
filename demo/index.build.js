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
var header = document.querySelector('.header');
var skillContainer = document.querySelector('.skills');
var planContainer = document.querySelector('.plans');
var newsletterContainer = document.querySelector('.news-letter');
var aboutLaracastContainer = document.querySelector('.about-laracast');
var goToBottom = document.querySelector('#goToBottom');
var goToTop = document.querySelector('#goToTop');
var goToPlan = document.querySelector('#goToplan');

goToBottom.addEventListener('click', function () {
    _index.scrollWindow.toPageBottom();
});

goToTop.addEventListener('click', function () {
    _index.scrollWindow.toPageTop();
});

goToPlan.addEventListener('click', function () {
    _index.scrollWindow.toElementTop(document.querySelector('.plan-title'));
});

_index.scrollWindow.reachedPageBottom(function () {
    return console.log('You have reach page bottom');
}, document.querySelector('footer'));
_index.scrollWindow.reachedPageTop(function () {
    return console.log('You have reach page top');
});

header.querySelectorAll('button').forEach(function (btn) {
    return btn.classList.add('animated');
});

_index.scrollWindow.reachedElementHalf(function () {
    return skillContainer.querySelectorAll('img').forEach(function (img) {
        return img.classList.add('animated');
    });
}, skillContainer);

_index.scrollWindow.reachedElementTop(function () {
    planContainer.querySelectorAll('img').forEach(function (img) {
        return img.classList.add('animated');
    });
}, planContainer);

_index.scrollWindow.reachedElementTop(function () {
    aboutLaracastContainer.querySelectorAll('.fade').forEach(function (item) {
        return item.classList.add('animated');
    });
}, aboutLaracastContainer);

_index.scrollWindow.reachedElementHalf(function () {
    document.querySelector('.news-letter-action').classList.add('lightSpeedIn');
}, newsletterContainer);

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

// scroll container
var targetContainer = document.querySelector('.scroll-container');
var targetImage = targetContainer.querySelector('img');
var goToTargetImg = document.querySelector('#goToImg');
var goContainBottom = document.querySelector('#goToCB');
var goContainTop = document.querySelector('#goToCT');

_index.scrollContainer.reachedContainerBottom(targetContainer, function () {
    return console.log('reach to container bottom');
});
_index.scrollContainer.reachedContainerTop(targetContainer, function () {
    return console.log('reach to container top');
});
_index.scrollContainer.toward(targetContainer, function () {
    return console.log('scroll up in container');
}, function () {
    return console.log('scroll down in container');
});
goToTargetImg.addEventListener('click', function (e) {
    return _index.scrollContainer.toElementTop(targetImage);
});
goContainBottom.addEventListener('click', function (e) {
    return _index.scrollContainer.toContainerBottom(targetContainer);
});
goContainTop.addEventListener('click', function (e) {
    return _index.scrollContainer.toContainerTop(targetContainer);
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scrollContainer = exports.scrollWindow = undefined;

var _scroll = __webpack_require__(2);

var scroll = _interopRequireWildcard(_scroll);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var scrollWindow = exports.scrollWindow = scroll.scrollWindow;
var scrollContainer = exports.scrollContainer = scroll.scrollContainer;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _scroll = function _scroll(el, cb) {
    return el.addEventListener('scroll', function (e) {
        return cb();
    });
};
var _toward = function _toward(container, upCb, downCb) {
    var currentPostion = 0;
    var yOffsetProp = container === window ? 'scrollY' : 'scrollTop';
    _scroll(container, function () {
        container[yOffsetProp] > currentPostion ? downCb() : upCb();
        currentPostion = container[yOffsetProp];
    });
};

var scrollWindow = exports.scrollWindow = {
    scroll: function scroll(cb) {
        _scroll(window, cb);
    },
    reachedElementTop: function reachedElementTop(cb, el) {
        _scroll(window, function () {
            if (window.scrollY + window.innerHeight >= el.offsetTop) {
                cb();
            }
        });
    },
    reachedElementHalf: function reachedElementHalf(cb, el) {
        _scroll(window, function () {
            var halfSize = window.scrollY + window.innerHeight - el.clientHeight / 2;
            var elBottom = el.offsetTop + el.clientHeight;
            if (halfSize >= el.offsetTop) {
                cb();
            }
        });
    },
    reachedElementBottom: function reachedElementBottom(cb, el) {
        _scroll(window, function () {
            if (window.scrollY + window.innerHeight >= el.offsetTop + el.scrollHeight) {
                cb();
            }
        });
    },
    reachedPageBottom: function reachedPageBottom(cb) {
        var footer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        _scroll(window, function () {
            var footerHeight = footer === null ? 0 : footer.clientHeight;
            var hasReachedBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - footerHeight;
            if (hasReachedBottom) {
                cb();
            }
        });
    },
    reachedPageTop: function reachedPageTop(cb) {
        var el = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window;

        _scroll(window, function () {
            if (window.scrollY === 0) {
                cb();
            }
        });
    },
    toElementTop: function toElementTop(el) {
        window.scrollTo(0, el.offsetTop);
    },
    toPageTop: function toPageTop() {
        window.scrollTo(0, 0);
    },
    toPageBottom: function toPageBottom() {
        window.scrollTo(0, document.body.scrollHeight);
    },
    toward: function toward(upCb, downCb) {
        _toward(window, upCb, downCb);
    }
};

var scrollContainer = exports.scrollContainer = {
    scroll: function scroll(container, cb) {
        _scroll(container, cb);
    },
    reachedContainerBottom: function reachedContainerBottom(container, cb) {
        _scroll(container, function () {
            if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
                cb();
            }
        });
    },
    reachedContainerTop: function reachedContainerTop(container, cb) {
        _scroll(container, function () {
            if (container.scrollTop === 0) {
                cb();
            }
        });
    },
    toElementTop: function toElementTop(el) {
        el.scrollIntoView(true);
    },
    toContainerTop: function toContainerTop(container) {
        container.scrollTop = 0;
    },
    toContainerBottom: function toContainerBottom(container) {
        container.scrollTop = container.scrollHeight - container.clientHeight;
    },
    toward: function toward(container, upCb, downCb) {
        _toward(container, upCb, downCb);
    }
};

/***/ })
/******/ ]);