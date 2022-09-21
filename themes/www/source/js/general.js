const menuIcon = document.querySelector('.menu');

document.addEventListener("DOMContentLoaded", function () {

    menuIcon.addEventListener('click', menuOpen);
    window.addEventListener("scroll", function () {
        var head = document.querySelector(".navbar")
        head.classList.toggle("navbar-fixed-top", window.scrollY > 0);

    })

    espar(1);
});
espar(1);

function menuOpen() {

    const display = document.querySelector('.navbar-nav').style.display;
    if (!display || display === 0) {
        document.querySelector('.navbar-nav').style.display = 'block'
        setTimeout(() => {
            document.querySelector('.navbar-nav').style.opacity = '1'
        }, 2);
    }
    else {
        document.querySelector('.navbar-nav').style.opacity = ''
        setTimeout(() => {
            document.querySelector('.navbar-nav').style.display = ''
        }, 1);
    }
}

function espar(num1){
    var impar = num1%2
    console.log("impar "+impar)
    num1 = num1+1;
    var par = num1%2
    console.log("par "+par)
}

