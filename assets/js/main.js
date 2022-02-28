const menu = document.getElementById('hamburger');
const close = document.getElementById('close');
const nav = document.getElementById('nav');

menu.addEventListener('click', () => {
    nav.style.right = "0";
});
close.addEventListener('click', () => {
    nav.style.right = "-120%";
});