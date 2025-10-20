document.addEventListener('DOMContentLoaded', () => {

    // --- Particle Configurations ---
    const lightParticlesConfig = {
        particles: {
            number: { value: 60, density: { enable: true, value_area: 800 } },
            color: { value: "#333333" }, // Dark particles for light background
            shape: { type: "circle" },
            opacity: { value: 0.5, random: false },
            size: { value: 2, random: true },
            line_linked: { enable: true, distance: 150, color: "#333333", opacity: 0.3, width: 1 },
            move: { enable: true, speed: 1, direction: "none", out_mode: "out" }
        },
        interactivity: {
            detect_on: "canvas",
            events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true }
        },
        retina_detect: true
    };

    const darkParticlesConfig = {
        particles: {
            number: { value: 60, density: { enable: true, value_area: 800 } },
            color: { value: "#ffffff" }, // White particles for dark background
            shape: { type: "circle" },
            opacity: { value: 0.5, random: false },
            size: { value: 2, random: true },
            line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.3, width: 1 },
            move: { enable: true, speed: 1, direction: "none", out_mode: "out" }
        },
        interactivity: {
            detect_on: "canvas",
            events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true }
        },
        retina_detect: true
    };

    // --- Function to load particles based on theme ---
    const loadParticles = (isDarkMode) => {
        if (isDarkMode) {
            particlesJS("particles-js", darkParticlesConfig);
        } else {
            particlesJS("particles-js", lightParticlesConfig);
        }
    };
    
    // Initial particle load
    const isInitiallyDark = document.body.classList.contains('dark-mode');
    loadParticles(isInitiallyDark);


    // --- Theme Toggler Logic ---
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const isDarkMode = document.body.classList.contains('dark-mode');
            themeToggle.textContent = isDarkMode ? '☀️' : '🌙';
            
            // Reload particles with the new theme config
            loadParticles(isDarkMode);
        });
    } else {
        console.warn('Theme toggle button not found!');
    }

    // --- Navigation, Typed.js, and AOS (No changes needed here) ---
    const navSlide = () => {
        const hamburger = document.querySelector('.hamburger');
        const nav = document.querySelector('.nav-links');
        if (hamburger && nav) {
            const navLinks = document.querySelectorAll('.nav-links li');
            hamburger.addEventListener('click', () => {
                nav.classList.toggle('nav-active');
                navLinks.forEach((link, index) => {
                    if (link.style.animation) {
                        link.style.animation = '';
                    } else {
                        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
                    }
                });
                hamburger.classList.toggle('toggle');
            });
        }
    };
    navSlide();

    const typedElement = document.getElementById('typed-subtitle');
    if (typedElement) {
        const options = {
            strings: ['MTech AI @IIT Jodhpur 27', 'AI/ML Researcher', 'Generative AI enthusiast', 'GATE DA 25 AIR-226'],
            typeSpeed: 50,
            backSpeed: 25,
            backDelay: 1500,
            loop: true
        };
        new Typed('#typed-subtitle', options);
    }
    
    AOS.init({
        duration: 700,
        once: true,
    });
});
