// const hamburger = document.querySelector('.hamburger'),
//       menu = document.querySelector('.menu'),
//       closeElem = document.querySelector('.close');

// hamburger.addEventListener('click', () => {
//     menu.classList.add('active'),
//     hamburger.classList.add('close');
// });

// closeElem.addEventListener('click', () => {
//     menu.classList.remove('active');
// });


const menu = document.querySelector('.menu'),
    overlay = document.querySelector('.menu__overlay'),
    hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
});

// menuItem.forEach(item => {
//     item.addEventListener('click', () => {
//         hamburger.classList.toggle('close');
//         menu.classList.toggle('active');
//     })
// });

overlay.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
});

const counters = document.querySelectorAll('.scale_value'),
    lines = document.querySelectorAll('.scale_line div');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});