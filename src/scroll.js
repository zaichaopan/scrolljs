export default {
    reachToBottom(el, cb) {
        el.onscroll = (e) => {
            if (el.scrollTop + el.clientHeight >= el.scrollHeight) {
                cb();
            }
        };
    },

    reachToPageBottom(cb, footer = null) {
        window.onscroll = (e) => {
            let footerHeight = footer === null ? 0 : footer.clientHeight;
            let hasReachedBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - footerHeight;
            if (hasReachedBottom) {
                cb();
            }
        }
    },

    reachToTop(el, cb) {
        el.onscroll = (e) => {
            if (el.scrollTop === 0) {
                cb();
            }
        };
    },

    scollToBottom(el = null) {
        if (el === null) {
            window.scrollTo(0, document.body.scrollHeight);
        } else {
            el.scrollTop = el.scrollHeight - el.clientHeight;
        }
    },

    scrollToTop(el = null) {
        if (el === null) {
            window.scrollTo(0, 0);
        } else {
            el.scrollTop = 0;
        }
    },

    scrollTo(el, container = window) {
        if (container === window) {
            container.scrollTo = el.offsetTop;
        } else {
            el.scrollIntoView(true);
        }
    },

    onWindow(cb) {
        window.onscroll = (e) => cb();
    },

    scrollToHalf(el, enterCb, leaveCb) {
        let halfSize = window.scrollY + window.innerHeight - el.height / 2;
        let elBottom = el.offsetTop + el.height;
        el.offsetTop <= halfSize && halfSize <= elBottom ? enterCb() : leaveCb();
    },

    scrollToward(upCb, downCb, el = window) {
        let scrollTop = 0;
        el.onscroll = (e) => {
            let yOffsetProp = el === window ? 'scrollY' : 'scrollTop';
            el[yOffsetProp] > scrollTop ? downCb() : upCb();
            scrollTop = el[yOffsetProp];
        }
    }
}
