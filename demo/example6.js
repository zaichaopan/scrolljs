import scroll from '../index';

let imgs = document.querySelectorAll("img");

let reachToImagHandler = () => {
    imgs.forEach(img =>
        scroll.scrollToHalf(
            img,
            () => img.classList.add("active"),
            () => img.classList.remove("active")
        ));
};

scroll.on(reachToImagHandler);

