export const scrollWindow = {
    scroll(cb) {
        window.addEventListener('scroll', e => cb());
    },

    reachedElementTop(cb, el) {
        this.scroll(
            () => {
                if (window.scrollY + window.innerHeight >= el.offsetTop) {
                    cb();
                }
            });
    },


    reachedElementHalf(cb, el) {
        this.scroll(
            () => {
                let halfSize = window.scrollY + window.innerHeight - el.clientHeight / 2;
                let elBottom = el.offsetTop + el.clientHeight;
                if (halfSize >= el.offsetTop) {
                    cb();
                }
            });
    },

    reachedElementBottom(cb, el) {
        this.scroll(
            () => {
                if (window.scrollY + window.innerHeight >= el.offsetTop + el.scrollHeight) {
                    cb();
                }
            });
    },

    reachedPageBottom(cb, footer = null) {
        this.scroll(() => {
            let footerHeight = footer === null ? 0 : footer.clientHeight;
            let hasReachedBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - footerHeight;
            if (hasReachedBottom) {
                cb();
            }
        });
    },

    reachedPageTop(cb, el = window) {
        this.scroll(() => {
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
        let currentPostion = 0;
        this.scroll(() => {
            window.scrollY > currentPostion ? downCb() : upCb();
            currentPostion = window.scrollY;
        });
    }
}


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
