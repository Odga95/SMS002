const menuIcon = document.querySelector('.menu');

document.addEventListener("DOMContentLoaded", function () {

    menuIcon.addEventListener('click', menuOpen);
    window.addEventListener("scroll", function () {
        var head = document.querySelector(".navbar")
        head.classList.toggle("navbar-fixed-top", window.scrollY > 0);
        console.log('hola')

    })
});


function menuOpen() {

    const display = document.querySelector('.navbar-nav').style.display;
    if (!display) {
        document.querySelector('.navbar-nav').style.display = 'block' 
    }
    else {
        document.querySelector('.navbar-nav').style.display = '';
    }
}
