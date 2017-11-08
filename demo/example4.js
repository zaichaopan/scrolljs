import scroll from '../index';

let container = document.querySelector('.container');

scroll.scollToBottom();

document.querySelector('.btn').addEventListener('click', e => scroll.scrollToTop());
