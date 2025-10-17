// Function for the mobile navigation (hamburger menu)
const navSlide = () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    hamburger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        
        // Hamburger Animation
        hamburger.classList.toggle('toggle');
    });
}

// Call the navigation function
navSlide();

// --- Deployed Code Below ---

// Logic for the theme toggle button
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Optional: Change icon based on theme
    const isDarkMode = document.body.classList.contains('dark-mode');
    themeToggle.textContent = isDarkMode ? '☀️' : '🌙';
});

// Logic for the Typed.js dynamic subtitle
document.addEventListener('DOMContentLoaded', function() {
    var options = {
        strings: ['M.Tech AI Student', 'Machine Learning Enthusiast', 'Deep Learning Developer'],
        typeSpeed: 50,
        backSpeed: 25,
        backDelay: 1500,
        loop: true
    };

    var typed = new Typed('#typed-subtitle', options);
});
