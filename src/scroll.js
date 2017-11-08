export default {
    reachToBottom(el, cb) {
        el.addEventListener('scroll', () => {
            let ch = el.clientHeight;
            let sh = el.scrollHeight;
            if (el.scrollTop + ch >= sh) {
                cb(arguments);
            }
        });
    },

    reachToPageBottom(cb, footer = null) {
        window.onscroll = (e) => {
            let footerHeight = footer === null ?
                0 :
                footer.clientHeight;

            let hasReachedBottom =
                window.innerHeight + window.scrollY >= document.body.scrollHeight - footerHeight;

            if (hasReachedBottom) {
                cb(arguments);
            }
        }
    },

    reachToTop(el, cb) {
        el.addEventListener('scroll', () => {
            if (el.scrollTop === 0) {
                cb(arguments);
            }
        });
    },

    scollToBottom(el = null) {
        if (el === '') {
            window.scrollTo(0, document.body.scrollHeight);
        } else {
            el.scrollTop = el.scrollHeight - el.clientHeight;
        }
    },

    scrollToTop(el = null) {
        if (el === '') {
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

    scrollToHalf(el, enterCb, leaveCb) {
        let halfSize = window.scrollY + window.innerHeight - el.height / 2;
        let elBottom = el.offsetTop + el.height;
        if (el.offsetTop <= halfSize && halfSize <= elBottom) {
            enterCb(arguments);
        } else {
            leaveCb(arguments);
        }
    },

    scrollToward(upCb, downCb, el = null) {
        let scrollTop = 0;

        if (el === null) {
            window.onscroll = (e) => {
                window.scrollY > scrollTop ?
                    downCb(arguments) :
                    upCb(arguments);
                scrollTop = window.scrollY;
            }
        } else {
            el.addEventListener('scroll', () => {
                el.scrollTop > scrollTop ?
                    downCb(arguments) :
                    upCb(arguments);
                scrollTop = el.scrollTop;
            });
        }
    }
}
