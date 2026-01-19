/* Main JS */

document.addEventListener('DOMContentLoaded', () => {

    // --- Header Scroll Behavior ---
    const header = document.getElementById('header');

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });


    // --- Newsletter Form ---
    const newsletterForm = document.getElementById('newsletterForm');
    const successMessage = document.getElementById('successMessage');

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Mock logic
            console.log('Newsletter submitted');

            // Show success message
            successMessage.classList.add('show');
            newsletterForm.reset();

            // Hide after 5 seconds
            setTimeout(() => {
                successMessage.classList.remove('show');
            }, 5000);
        });
    }

    // --- Animations with Intersection Observer ---
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-visible');
            }
        });
    }, observerOptions);

    // Elements to animate
    const animatedSelectors = [
        '.content-text',
        '.content-image',
        '.step',
        '.feature-card',
        '.gallery-item',
        '.process-intro',
        '.newsletter-section h3',
        '.newsletter-section p'
    ];

    animatedSelectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
            el.classList.add('fade-in');
            observer.observe(el);
        });
    });


    // --- Smooth Scroll for anchor links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // --- Mobile Menu Toggle (Optional addition for functionality) ---
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            // Simple toggle implementation for mobile
            // In a real scenario, we might want a better slide-out menu
            const isVisible = nav.style.display === 'block';
            if (isVisible) {
                nav.style.display = ''; // Reset to css default
            } else {
                nav.style.display = 'block';
                nav.style.position = 'absolute';
                nav.style.top = '100%';
                nav.style.left = '0';
                nav.style.width = '100%';
                nav.style.background = 'white';
                nav.style.padding = '1rem';
                nav.style.textAlign = 'center';

                // Fix colors for mobile menu links if header is not scrolled
                nav.querySelectorAll('a').forEach(a => a.style.color = 'var(--text-dark)');
            }
        });
    }

});
