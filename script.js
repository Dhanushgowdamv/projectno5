window.onload = function () {
    function loaderAnimation() {
        var loader = document.querySelector("#loader");
        setTimeout(function () {
            loader.style.top = "-100%";
        }, 4200);
    }

    function loaderAnimation1() {
        var loader2 = document.querySelector("#loader1");
        setTimeout(function () {
            loader2.style.top = "-100%";
        }, 4500);
    }

    loaderAnimation();
    loaderAnimation1();
};

let navbar = document.querySelector('.navbar');

document.querySelector('#menu').onclick = () => {
    navbar.classList.toggle('active');
    searchbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchbar = document.querySelector('.search-form');

document.querySelector('#search').onclick = () => {
    searchbar.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items');

document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchbar.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    searchbar.classList.remove('active');
    cartItem.classList.remove('active');
}
