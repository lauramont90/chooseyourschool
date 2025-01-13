document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.navtop');

    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('nav-open');
    });
});

