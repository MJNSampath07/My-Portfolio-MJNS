document.addEventListener('DOMContentLoaded', () => {
    // Cursor follower
    const cursor = document.querySelector('.cursor-follower');
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
    
    // Fade-in animation on scroll
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.fade-in').forEach(element => {
        observer.observe(element);
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add navigation active state handling
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    function updateActiveLink() {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - sectionHeight/3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    }

    // Update active state on scroll
    window.addEventListener('scroll', updateActiveLink);

    // Update active state on click
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Add logo click animation
    const logo = document.querySelector('.logo');
    logo.addEventListener('click', function() {
        this.classList.add('clicked');
        
        // Remove the class after animation completes
        setTimeout(() => {
            this.classList.remove('clicked');
        }, 500);
        
        // Scroll to top when logo is clicked
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Reveal on scroll functionality
    function reveal() {
        const reveals = document.querySelectorAll('.reveal');
        
        reveals.forEach(element => {
            const windowHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150; // Adjust this value to change when elements become visible
            
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    }

    // Initial check for elements
    reveal();
    
    // Add scroll event listener
    window.addEventListener('scroll', reveal);

    // Scroll to top functionality
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    let isScrolling = false;

    // Show/hide scroll-to-top button
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollToTopBtn.classList.add('visible');
            
            // Add bounce animation if not scrolling
            if (!isScrolling) {
                scrollToTopBtn.classList.add('bounce');
            }
        } else {
            scrollToTopBtn.classList.remove('visible', 'bounce');
        }
    });

    // Smooth scroll to top with animation
    scrollToTopBtn.addEventListener('click', () => {
        isScrolling = true;
        scrollToTopBtn.classList.remove('bounce');

        // Get current scroll position
        const startPosition = window.scrollY;
        const startTime = performance.now();
        const duration = 1000; // Duration in milliseconds

        // Smooth scroll animation
        function scrollAnimation(currentTime) {
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);

            // Easing function for smooth animation
            const easeInOutCubic = progress => {
                return progress < 0.5
                    ? 4 * progress * progress * progress
                    : 1 - Math.pow(-2 * progress + 2, 3) / 2;
            };

            const scrollPosition = startPosition * (1 - easeInOutCubic(progress));
            window.scrollTo(0, scrollPosition);

            if (progress < 1) {
                requestAnimationFrame(scrollAnimation);
            } else {
                isScrolling = false;
                if (window.scrollY > 500) {
                    scrollToTopBtn.classList.add('bounce');
                }
            }
        }

        requestAnimationFrame(scrollAnimation);
    });

    // Add hover effect for the button
    scrollToTopBtn.addEventListener('mouseenter', () => {
        scrollToTopBtn.classList.remove('bounce');
    });

    scrollToTopBtn.addEventListener('mouseleave', () => {
        if (window.scrollY > 500 && !isScrolling) {
            scrollToTopBtn.classList.add('bounce');
        }
    });

    // Add this to your existing animations.js file
    function createParticles() {
        const particleContainer = document.querySelector('.particle-container');
        const particleCount = 50;

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            // Random size between 2px and 6px
            const size = Math.random() * 4 + 2;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            
            // Random horizontal position
            particle.style.left = `${Math.random() * 100}%`;
            
            // Random animation duration between 10s and 20s
            const duration = Math.random() * 10 + 10;
            particle.style.animationDuration = `${duration}s`;
            
            // Random delay
            particle.style.animationDelay = `${Math.random() * duration}s`;
            
            particleContainer.appendChild(particle);
        }
    }

    // Call this function when the page loads
    document.addEventListener('DOMContentLoaded', createParticles);
}); 