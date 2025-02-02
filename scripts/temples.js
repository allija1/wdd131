document.getElementById("currentYear").textContent = new Date().getFullYear();

const lastModifiedDate = new Date(document.lastModified);
const options = { year: "numeric", month: "long", day: "numeric" };
document.getElementById("lastModified").textContent = lastModifiedDate.toLocaleDateString("en-US", options);

// Hamburger Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');

            // Change button text
            if (navMenu.classList.contains('active')) {
                hamburger.textContent = 'X';
                navMenu.style.display = "flex";
            } else {
                hamburger.textContent = '\u2630';
                navMenu.style.display = "none";
            }
        });

        // Ensure nav menu is hidden by default
        navMenu.style.display = "none";
    }
});

