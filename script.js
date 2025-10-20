/* ---- particles.js config ---- */
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 60, /* Number of particles */
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff" /* Particle color */
    },
    "shape": {
      "type": "circle"
    },
    "opacity": {
      "value": 0.5,
      "random": false
    },
    "size": {
      "value": 2,
      "random": true
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff", /* Line color */
      "opacity": 0.3,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1, /* Slow movement speed */
      "direction": "none",
      "out_mode": "out"
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse" /* Particles move away from cursor */
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    }
  },
  "retina_detect": true
});


document.addEventListener('DOMContentLoaded', () => {

    // Function for the mobile navigation (hamburger menu)
    const navSlide = () => {
        const hamburger = document.querySelector('.hamburger');
        const nav = document.querySelector('.nav-links');
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

    // Call the navigation function
    navSlide();

    // --- Theme Toggler Logic ---
    const themeToggle = document.getElementById('theme-toggle');

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const isDarkMode = document.body.classList.contains('dark-mode');
            themeToggle.textContent = isDarkMode ? '☀️' : '🌙';
        });
    } else {
        console.warn('Theme toggle button not found!');
    }

    // Logic for the Typed.js dynamic subtitle
    var options = {
        strings: ['MTech AI @IIT Jodhpur 27', 'AI/ML Researcher', 'Generative AI enthusiast','GATE DA 25 AIR-226'],
        typeSpeed: 50,
        backSpeed: 25,
        backDelay: 1500,
        loop: true
    };
    var typed = new Typed('#typed-subtitle', options);
    
    // Initialize AOS
     AOS.init({
        duration: 700,
        once: true,
    });
});


