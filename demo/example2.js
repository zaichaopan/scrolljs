import scroll from '../index';

let cb = () => alert("You have reach the container bottom");
let container = document.querySelector('.container');

scroll.reachToBottom(container, cb);
