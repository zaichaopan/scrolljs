# An easy way to controll and detect scroll behavor of the the window or a scrollable container

If you feel confused about __scrollY, scrollTop, clientHeight, scrollHeight, innerHeight, offsetTop, scrollTo__ when trying to manipulate scroll behavior of the window of a scrollable container, this package will be the thing you are looking for. It provides readonable api to make working with scrollbar much easier.

## Working with scrollbar of the window

### scrollWindow.scroll(cb)

Execute a callback function when window scrollbar scrolls

```javascript
let cb = () => console.log('the window is scrolling!');
scrollWindow.scroll(cb);
```

### scrollWindow.toward(upCb, downCb)

Execute function: __upCb__ when the scrollbar is scrolling up, and execute function: __downCb__ when the scrollbar is scrolling down.

```javascript
let upCb = () => console.log('the window is scrolling up');
let downCb = () => console.log('the window is scrolling down');
scrollWindow.toward(upCb, downCb);
```

### scrollWindow.reachedElementTop(el, cb)

Execute a callback function when scrolling the window reaches the top of an element.

```javascript
// target element with class target
let el =  document.querySelector('.target');
let cb = () => console.log('You have reached the top of the target element');
scrollWindow.reachedElementTop(el, cb);
```

### scrollWindow.reachedElementHalf(el, cb)

Execute a callback function when scrolling the window to the half of an element.

```javascript
// target element with class target
let el =  document.querySelector('.target');
let cb = () => console.log('You have reached the half of the target element');
scrollWindow.reachedElementHalf(el, cb);
```

### scrollWindow.reachedElementBottom(el, cb)

Execute a callback function when scrolling the window to the bottom of an element.

```javascript
// target element with class target
let el =  document.querySelector('.target');
let cb = () => console.log('You have reached the bottom of the target element');
scrollWindow.reachedElementBottom(el, cb);
```

### scrollWindow.reachedPageBottom((cb, footer = null))

Execute a callback function when scrolling the window to the page bottom.

```javascript
// target element with class target
let el =  document.querySelector('.target');
// you have a footer div
let footer = document.querySelect('footer');
let cb = () => console.log('You have reached the bottom of the page');
scrollWindow.reachedPageBottom(cb, footer);
```

### scrollWindow.reachedPageTop(cb)

Execute a callback function when scrolling the window to the top of the page.

```javascript
let cb = () => console.log('You have reached the top of the page');
scrollWindow.reachedPageTop(cb);
```

### scrollWindow.toElementTop(el)

Scroll to an element of the page

```javascript
// target element with class target
let el =  document.querySelector('.target');
scrollWindow.toElementTop(el);
```

### scrollWindow.toPageTop()

Scrolling the window to the top of the page.

```javascript
scrollWindow.toPageTop();
```

### scrollWindow.toPageBottom()

Scrolling the window to the bottom of the page.

```javascript
scrollWindow.toPageBottom();
```

## working with scrollbar of a container

### scrollContainer.scroll(cb)

Execute a callback function when window scrollbar scrolls

```javascript
// container with class: scroll-container
let container = document.querySelector('.scroll-container');
let cb = () => console.log('the scroll container is scrolling!');
scrollContainer.scroll(container, cb);
```

### scrollContainer.toward(container,upCb, downCb)

Execute function: __upCb__ when the scrollbar in a scrollable container is scrolling up, and execute function: __downCb__ when the scrollbar is scrolling down.

```javascript
// container with class: scroll-container
let container = document.querySelector('.scroll-container')
let upCb = () => console.log('the scrollbar is scrolling up');
let downCb = () => console.log('the scrollbar is scrolling down');
scrollContainer.toward(container, upCb, downCb);
```

### scrollContainer.reachedContainerBottom(container, cb)

Execute a callback function when scrolling to the bottom of a scrollable container.

```javascript
// container with class: scroll-container
let container = document.querySelector('.scroll-container')
let cb = () => console.log('You has reacehd the bottom of the container!');
scrollContainer.reachedContainerBottom(container, cb);
```

### scrollContainer.reachedContainerTop(container, cb)

Execute a callback function when scrolling to the top of a scrollable container.

```javascript
// container with class: scroll-container
let container = document.querySelector('.scroll-container');
let cb = () => console.log('You has reacehd the top of the container!');
scrollContainer.reachedContainerTop(container, cb);
```

### scrollContainer toElementTop(el)

Scroll to the top of an element in a scrollable container.

```javascript
// target element in a scrollable containe
let el = document.querySelector('.target-element');
scrollContainer.toElementTop(el);
```

### scrollContainer.toContainerTop(container)

Scroll to the top of a scrollable container.

```javascript
// container with class: scroll-container
let container = document.querySelector('.scroll-container')
scrollContainer.toContainerTop(container);
```

### scrollContainer.toContainerBottom(container)

 Scroll to a scrollable container bottom.

```javascript
// container with class: scroll-container
let container = document.querySelector('.scroll-container')
scrollContainer.toContainerBottom(container);
```
