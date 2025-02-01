const date = new Date();
const currentYear = date.getFullYear();
document.getElementById("currentYear").innerHTML = currentYear;


const lastModified = new Date(document.lastModified);
document.getElementById("lastModified").innerHTML = lastModified;

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        hamburger.textContent = navMenu.classList.contains('active') ? 'X' : '\u2630';
    });
});
