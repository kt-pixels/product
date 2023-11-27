const hamBurger = document.querySelector('.hamburger');
const nav = document.querySelector('.navBar');
const navBar = document.querySelector('ul');
const bar = document.querySelector('.bars');

hamBurger.addEventListener('click', () => {
    if (navBar.style.top === '-80px' || navBar.style.top === "") {
        navBar.style.top = '0px';
        bar.innerHTML = '&#10006;';
    }else{
        navBar.style.top = '-80px';
        bar.innerHTML = '&#9776;';
    }
});

