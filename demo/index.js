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

header.querySelectorAll('button').forEach( btn =>  btn.classList.add('complete'))

scrollWindow.reachedElementHalf(
    () => skillContainer.querySelectorAll('img').forEach(img => img.classList.add('complete')), skillContainer);

scrollWindow.reachedElementTop(
    () => {
        planContainer.querySelectorAll('img').forEach(img => img.classList.add('complete'))
    }, planContainer);

scrollWindow.reachedElementTop(
    () => {
        aboutLaracastContainer.querySelectorAll('.fade').forEach(item => item.classList.add('complete'));
    }, aboutLaracastContainer);

scrollWindow.reachedElementHalf(
    () => {
        document.querySelector('.news-letter-action').classList.add('complete');
    }, newsletterContainer
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
