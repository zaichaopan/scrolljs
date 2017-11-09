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
    /**
     * Execute a callback function when scrolling the window.
     * 
     * @param {function} cb 
     */
    scroll(cb) {
        scroll(window, cb);
    },

    /**
     * Execute a callback function when scrolling the window reaches the top of an element.
     * 
     * @param {Htm dom} el 
     * @param {function} cb 
     */
    reachedElementTop(el, cb) {
        scroll(window, () => {
            if (window.scrollY + window.innerHeight >= el.offsetTop) {
                cb();
            }
        });
    },

    /**
     *  Execute a callback function when scrolling the window to the half of an element.
     * 
     * @param {Html dom} el 
     * @param {function} cb 
     */
    reachedElementHalf(el, cb) {
        scroll(window, () => {
            let halfSize = window.scrollY + window.innerHeight - el.clientHeight / 2;
            let elBottom = el.offsetTop + el.clientHeight;
            if (halfSize >= el.offsetTop) {
                cb();
            }
        });
    },

    /**
     * Execute a callback function when scrolling the window to the bottom of an element.
     * 
     * @param {Html dom} el 
     * @param {function} cb 
     */
    reachedElementBottom(el, cb) {
        scroll(window, () => {
            if (window.scrollY + window.innerHeight >= el.offsetTop + el.scrollHeight) {
                cb();
            }
        });
    },

    /**
     * Execute a callback function when scrolling the window to the page bottom.
     * 
     * @param {function} cb 
     * @param {Html dom} footer 
     */
    reachedPageBottom(cb, footer = null) {
        scroll(window, () => {
            let footerHeight = footer === null ? 0 : footer.clientHeight;
            let hasReachedBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - footerHeight;
            if (hasReachedBottom) {
                cb();
            }
        });
    },

    /**
     * Execute a callback function when scrolling the window to the top of the page.
     * 
     * @param {function} cb 
     */
    reachedPageTop(cb) {
        scroll(window, () => {
            if (window.scrollY === 0) {
                cb();
            }
        });
    },

    /**
     *  Scrolling the window to the top of an element.
     * 
     * @param {Html dom} el 
     */
    toElementTop(el) {
        window.scrollTo(0, el.offsetTop);
    },

    /**
     *  Scrolling the window to the top of the page.
     */
    toPageTop() {
        window.scrollTo(0, 0);
    },

    /**
     *  Scrolling the window to the bottom of the page.
     */
    toPageBottom() {
        window.scrollTo(0, document.body.scrollHeight);
    },

    /**
     * Execute a callback function when the window scrolls up and another when the window scrolls down.
     * 
     * @param {function} upCb 
     * @param {function} downCb 
     */
    toward(upCb, downCb) {
        toward(window, upCb, downCb);
    }
};

export const scrollContainer = {
    /**
     * Execute a callback function when scrolling a scrollable container.
     * 
     * @param {Html dom} container 
     * @param {function} cb 
     */
    scroll(container, cb) {
        scroll(container, cb);
    },

    /**
     * Execute a callback function when scrolling to the bottom of a scrollable container.
     * 
     * @param {Html dom} container 
     * @param {function} cb 
     */
    reachedContainerBottom(container, cb) {
        scroll(container, () => {
            if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
                cb();
            }
        });
    },

    /**
     * Execute a callback function when scrolling to the top of a scrollable container.
     * 
     * @param {Html dom} container 
     * @param {function} cb 
     */
    reachedContainerTop(container, cb) {
        scroll(container, () => {
            if (container.scrollTop === 0) {
                cb();
            }
        });
    },

    /**
     * Scroll to the top of an element in a scrollable container.
     * 
     * @param {Html dom} el 
     */
    toElementTop(el) {
        el.scrollIntoView(true);
    },

    /**
     * Scroll to the top of a scrollable container.
     * 
     * @param {Html dom} container 
     */
    toContainerTop(container) {
        container.scrollTop = 0;
    },

    /**
     * Scroll to a scrollable container bottom.
     * 
     * @param {Html dom} container 
     */
    toContainerBottom(container) {
        container.scrollTop = container.scrollHeight - container.clientHeight;
    },

    /**
     * Execute a callback function when the scrollable container scrolls up and another when the window scrolls down.
     * 
     * @param {Html Dom} container 
     * @param {function} upCb 
     * @param {function} downCb 
     */
    toward(container, upCb, downCb) {
        toward(container, upCb, downCb);
    }
};
