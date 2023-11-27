const hamBurger = document.querySelector('.hamburger');
const nav = document.querySelector('.navBar');
const navBar = document.querySelector('.allScreen');
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

const mobilBar = document.querySelector('.mobBarList');
const button = document.querySelector('.bar');

button.addEventListener('click', () => {
    if (mobilBar.style.top === '-250px' || mobilBar.style.top === '') {
        mobilBar.style.top = '20px';
        button.innerHTML = '&#10006;';
    } else {
        mobilBar.style.top = '-250px'; // Adjust this value based on your design
        button.innerHTML = '&#9776;';
    }
});

