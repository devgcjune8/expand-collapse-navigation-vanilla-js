const navBtn = document.querySelector('#nav-btn');
const nav = document.querySelector('.nav');

navBtn.addEventListener('click', () => {
    nav.classList.toggle('expanded')
})