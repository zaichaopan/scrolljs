import scroll from '../index';

let nav = document.querySelector('nav');
let skillContainer = document.querySelector('.skills');

scroll.on(() => {
    scroll.reachedHalfOf(
        () => skillContainer.querySelectorAll('img').forEach(img => img.classList.add('complete')),
        skillContainer
    );

    scroll.toward(
        () => {
            if (!nav.classList.contains('fixed')) {
                nav.classList.add('fixed');
            }
        },
        () => {
            if (nav.classList.contains('fixed')) {
                nav.classList.remove('fixed');
            }
        }
    );
});
