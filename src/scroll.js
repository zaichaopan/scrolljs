const scroll = (el, cb) => el.addEventListener('scroll', e => cb());
const toward = (container, upCb, downCb) => {
    let currentPostion = 0;
    let yOffsetProp = container === window ? 'scrollY' : 'scrollTop';
    scroll(container, () => {
        container[yOffsetProp] > currentPostion ? downCb() : upCb();
        currentPostion = container[yOffsetProp];
    });
};

export const scrollWindow = {
    scroll(cb) {
        scroll(window, cb);
    },

    reachedElementTop(cb, el) {
        scroll(window, () => {
            if (window.scrollY + window.innerHeight >= el.offsetTop) {
                cb();
            }
        });
    },

    reachedElementHalf(cb, el) {
        scroll(window, () => {
            let halfSize = window.scrollY + window.innerHeight - el.clientHeight / 2;
            let elBottom = el.offsetTop + el.clientHeight;
            if (halfSize >= el.offsetTop) {
                cb();
            }
        });
    },

    reachedElementBottom(cb, el) {
        scroll(window, () => {
            if (window.scrollY + window.innerHeight >= el.offsetTop + el.scrollHeight) {
                cb();
            }
        });
    },

    reachedPageBottom(cb, footer = null) {
        scroll(window, () => {
            let footerHeight = footer === null ? 0 : footer.clientHeight;
            let hasReachedBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - footerHeight;
            if (hasReachedBottom) {
                cb();
            }
        });
    },

    reachedPageTop(cb, el = window) {
        scroll(window, () => {
            if (window.scrollY === 0) {
                cb();
            }
        });
    },

    toElementTop(el) {
        window.scrollTo(0, el.offsetTop);
    },

    toPageTop() {
        window.scrollTo(0, 0);
    },

    toPageBottom() {
        window.scrollTo(0, document.body.scrollHeight);
    },

    toward(upCb, downCb) {
        toward(window, upCb, downCb);
    }
}

export const scrollContainer = {
    scroll(container, cb) {
        scroll(container, cb);
    },

    reachedContainerBottom(container) {
        scroll(container, () => {
            if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
                cb();
            }
        });
    },

    reachedContainerTop() {
        scroll(container, () => {
            if (container.scrollTop === 0) {
                cb();
            }
        });
    },

    toElementTop(el) {
        el.scrollIntoView(true);
    },

    toContainerTop(container) {
        container.scrollTop = 0;
    },

    toContainerBottom() {
        container.scrollTop = container.scrollHeight - container.clientHeight;
    },

    toward(container, upCb, downCb) {
        toward(container, upCb, downCb);
    }
}

/*

*/

// el.offsetHeight including padding
// el.clientHeight not including paddding
// el.offsetTop read-only property returns the distance of the current element relative to the top of the offsetParent node.
//The Element.scrollHeight read-only property is a measurement of the height of an element's content, including content not visible on the screen due to overflow.
// if ussing window.onscroll will override each other, using addEventListener
