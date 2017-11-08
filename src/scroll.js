export default {
    currentPostion: 0,

    on(cb, el = window) {
        el.onscroll = (e) => cb();
    },

    reached(cb, el) {
        if (window.scrollY + window.innerHeight >= el.offsetTop) {
            cb();
        }
    },

    reachedHalfOf(cb, el) {
        let halfSize = window.scrollY + window.innerHeight - el.clientHeight / 2;
        let elBottom = el.offsetTop + el.clientHeight;
        if (halfSize >= el.offsetTop) {
            cb();
        }
    },

    reachedElementBottom(cb, el) {
        if (window.scrollY + window.innerHeight >= el.offsetTop + el.scrollHeight) {
            cb();
        }
    },

    reachedContainerBottom(cb, container) {
        if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
            cb();
        }
    },

    reachedPageBottom(cb, footer = null) {
        window.onscroll = (e) => {
            let footerHeight = footer === null ? 0 : footer.clientHeight;
            let hasReachedBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - footerHeight;
            if (hasReachedBottom) {
                cb();
            }
        }
    },

    reachedToTop(cb, el = window) {
        el.onscroll = (e) => {
            let yOffsetProp = el === window ? 'scrollY' : 'scrollTop';
            if (el[yOffsetProp] === 0) {
                cb();
            }
        };
    },

    to(el, container = window) {
        if (container === window) {
            container.scrollTo = el.offsetTop;
        } else {
            el.scrollIntoView(true);
        }
    },

    toBottom(el = null) {
        if (el === null) {
            window.scrollTo(0, document.body.scrollHeight);
        } else {
            el.scrollTop = el.scrollHeight - el.clientHeight;
        }
    },

    toTop(el = null) {
        if (el === null) {
            window.scrollTo(0, 0);
        } else {
            el.scrollTop = 0;
        }
    },

    toward(upCb, downCb, el = window) {
        let yOffsetProp = el === window ? 'scrollY' : 'scrollTop';
        el[yOffsetProp] > this.currentPostion ? downCb() : upCb();
        this.currentPostion = el[yOffsetProp];
    }
}
