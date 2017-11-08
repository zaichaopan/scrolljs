import scroll from '../index';

let container = document.querySelector('.container');

let upCb = ()=> console.log('scroll up');
let downCb = ()=> console.log('scroll down');

scroll.scrollToward(upCb, downCb);
scroll.scrollToward(upCb, downCb, container);

