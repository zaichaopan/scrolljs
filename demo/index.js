import {
    scrollWindow,
    scrollContainer
}
from '../index';


let nav = document.querySelector('nav');
let header = document.querySelector('.header');
let skillContainer = document.querySelector('.skills');
let planContainer = document.querySelector('.plans');
let newsletterContainer = document.querySelector('.news-letter');
let aboutLaracastContainer = document.querySelector('.about-laracast');
let goToBottom = document.querySelector('#goToBottom');
let goToTop = document.querySelector('#goToTop');
let goToPlan = document.querySelector('#goToplan');

goToBottom.addEventListener('click', () => {
    scrollWindow.toPageBottom();
});

goToTop.addEventListener('click', () => {
    scrollWindow.toPageTop();
});

goToPlan.addEventListener('click', () => {
    scrollWindow.toElementTop(document.querySelector('.plan-title'));
});

scrollWindow.reachedPageBottom(() => console.log('You have reach page bottom'), document.querySelector('footer'));
scrollWindow.reachedPageTop(() => console.log('You have reach page top'));

header.querySelectorAll('button').forEach(btn => btn.classList.add('animated'))

scrollWindow.reachedElementHalf(
    skillContainer,
    () => skillContainer.querySelectorAll('img').forEach(img => img.classList.add('animated')));

scrollWindow.reachedElementTop(
    planContainer,
    () => {
        planContainer.querySelectorAll('img').forEach(img => img.classList.add('animated'))
    });

scrollWindow.reachedElementTop(
    aboutLaracastContainer,
    () => {
        aboutLaracastContainer.querySelectorAll('.fade').forEach(item => item.classList.add('animated'));
    });

scrollWindow.reachedElementHalf(
    newsletterContainer,
    () => {
        document.querySelector('.news-letter-action').classList.add('lightSpeedIn');
    });

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


// scroll container
let targetContainer = document.querySelector('.scroll-container');
let targetImage = targetContainer.querySelector('img');
let goToTargetImg = document.querySelector('#goToImg');
let goContainBottom = document.querySelector('#goToCB');
let goContainTop = document.querySelector('#goToCT');

scrollContainer.reachedContainerBottom(targetContainer, () => console.log('reach to container bottom'));
scrollContainer.reachedContainerTop(targetContainer, () => console.log('reach to container top'));
scrollContainer.toward(targetContainer, () => console.log('scroll up in container'), () => console.log('scroll down in container'));
goToTargetImg.addEventListener('click', e => scrollContainer.toElementTop(targetImage));
goContainBottom.addEventListener('click', e => scrollContainer.toContainerBottom(targetContainer));
goContainTop.addEventListener('click', e => scrollContainer.toContainerTop(targetContainer));
