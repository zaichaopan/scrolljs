import scroll from '../index';

let container = document.querySelector('.container');

scroll.scollToBottom(container);


document.querySelector('.btn').addEventListener('click', e => scroll.scrollToTop(container));
