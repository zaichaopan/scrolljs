import 
{scrollWindow}
 from '../index';


let nav = document.querySelector('nav');
let skillContainer = document.querySelector('.skills');

scrollWindow.reachedElementHalf
(
    () => skillContainer.querySelectorAll('img').forEach(img => img.classList.add('complete')),
    skillContainer
);

scrollWindow.toward(
    () => {
        if (!nav.classList.contains('fixed')) {
            document.body.style.paddingTop = nav.offsetHeight + 'px';
            nav.classList.add('fixed');
        }
    },
    () => {
        if (nav.classList.contains('fixed')) {
            nav.classList.remove('fixed');
            document.body.style.paddingTop = 0;
        }
    }
);
