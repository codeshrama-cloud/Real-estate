document.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.getElementById('menu_btn');
    const navLinks = document.getElementById('nav_links');

    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active'); 
    });
});

// Optimize scroll event
let lastScrollTop = 0;
window.addEventListener('scroll', function() {
    let navbar = document.querySelector('.navbar');
    let scrollTop = window.scrollY;
    if (scrollTop > lastScrollTop) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});