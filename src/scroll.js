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

    reachToPageFooter(cb) {
        window.onscroll = (e) => {
            let footerHeight = document.getElementById('footer').clientHeight;
            let hasReachedBottom =
                window.innerHeight + window.pageYOffset >= document.body.offsetHeight - footerHeight;

            if (hasReachedBottom) {
                cb(arguments);
            }
        }
    }
}
