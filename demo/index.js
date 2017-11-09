import {
    scrollWindow
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

goToTop.addEventListener('click', ()=> {
    scrollWindow.toPageTop();
});

goToPlan.addEventListener('click', () => {
    scrollWindow.toElementTop(document.querySelector('.plan-title'));
}); 

scrollWindow.reachedPageBottom(() => console.log('You have reach page bottom'), document.querySelector('footer'));
scrollWindow.reachedPageTop(() => console.log('You have reach page top'));

header.querySelectorAll('button').forEach( btn =>  btn.classList.add('animated'))

scrollWindow.reachedElementHalf(
    () => skillContainer.querySelectorAll('img').forEach(img => img.classList.add('animated')), 
    skillContainer);

scrollWindow.reachedElementTop(
    () => {
        planContainer.querySelectorAll('img').forEach(img => img.classList.add('animated'))
    }, planContainer);

scrollWindow.reachedElementTop(
    () => {
        aboutLaracastContainer.querySelectorAll('.fade').forEach(item => item.classList.add('animated'));
    }, aboutLaracastContainer);

scrollWindow.reachedElementHalf(
    () => {
        document.querySelector('.news-letter-action').classList.add('lightSpeedIn');
    }, newsletterContainer);

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
