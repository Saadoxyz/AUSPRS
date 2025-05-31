window.initializePage = function () {
    // Sticky Navigation
    const navbar = document.getElementById('navbar');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    document.addEventListener('DOMContentLoaded', function () {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // only animate once
                }
            });
        }, {
            threshold: 0.1
        });

        // Watch all program and admin cards
        document.querySelectorAll('.program-card, .admin-card').forEach(el => {
            observer.observe(el);
        });
    });

    // Intersection Observer for sections
    const observerOptions = {
        rootMargin: '-100px 0px -100px 0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach((link) => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });

                // Add animation classes for visible sections
                if (id === 'about') {
                    addAnimation('.about-content', 'fadeIn');
                } else if (id === 'programs') {
                    addAnimation('.program-card', 'slideInUp', true);
                } else if (id === 'administration') {
                    addAnimation('.admin-card', 'slideInLeft', true);
                } else if (id === 'newsletter') {
                    addAnimation('.newsletter-form', 'fadeIn');
                }
            }
        });
    }, observerOptions);

    sections.forEach((section) => {
        observer.observe(section);
    });

    // Adding animation classes
    function addAnimation(selector, animationClass, staggered = false) {
        const elements = document.querySelectorAll(selector);
        elements.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add(animationClass);
            }, staggered ? index * 200 : 0);
        });
    }

    // Smooth scrolling for navigation links
    navLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - navbar.offsetHeight,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Apply Now buttons
    const applyButtons = document.querySelectorAll('.apply-btn, .apply-now-btn');
    applyButtons.forEach((button) => {
        button.addEventListener('click', () => {
            showModal('application-modal');
        });
    });

    // Learn More button
    const learnMoreBtn = document.querySelector('.learn-more-btn');
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', () => {
            showModal('about-modal');
        });
    }

    // Newsletter subscription
    const subscribeBtn = document.querySelector('.subscribe-btn');
    const emailInput = document.querySelector('.email-input');

    if (subscribeBtn && emailInput) {
        subscribeBtn.addEventListener('click', () => {
            const email = emailInput.value.trim();
            if (validateEmail(email)) {
                showToast('Thank you for subscribing to our newsletter!');
                emailInput.value = '';
            } else {
                showToast('Please enter a valid email address.', 'error');
            }
        });
    }

    // Email validation
    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    // Modal handling
    function showModal(modalId) {
        // In a real application, you would have modal HTML elements
        // and toggle their visibility here
        console.log(`Showing modal: ${modalId}`);
        alert(`This would open the ${modalId.replace('-', ' ')} in a real application.`);
    }

    // Toast notifications
    function showToast(message, type = 'success') {
        // Create toast element
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.textContent = message;

        // Add to document
        document.body.appendChild(toast);

        // Trigger animation
        setTimeout(() => {
            toast.classList.add('show');
        }, 10);

        // Remove after delay
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(toast);
            }, 300);
        }, 3000);
    }

    // Add hover effects for cards
    const programCards = document.querySelectorAll('.program-card');
    programCards.forEach((card) => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
            card.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.15)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        });
    });

    // Add parallax effect to home section
    const homeSection = document.querySelector('.home-section');
    const homeText = document.querySelector('.home-text');

    if (homeSection && homeText) {
        window.addEventListener('scroll', () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition < homeSection.offsetHeight) {
                homeText.style.transform = `translateY(${scrollPosition * 0.3}px)`;
            }
        });
    }

    // Add animated counting for some statistics (could be added to the about section)
    function animateCounters() {
        const counters = document.querySelectorAll('.counter');
        counters.forEach((counter) => {
            const target = parseInt(counter.getAttribute('data-target'));
            const duration = 2000; // ms
            const step = target / (duration / 16); // 60fps

            let count = 0;
            const updateCounter = () => {
                count += step;
                if (count < target) {
                    counter.textContent = Math.floor(count);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };

            updateCounter();
        });
    }

    // Call counter animation when about section is visible
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
        const counterObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                animateCounters();
                counterObserver.disconnect();
            }
        });

        counterObserver.observe(aboutSection);
    }

    // Add video popup (if videos are implemented)
    const videoThumbnails = document.querySelectorAll('.video-thumbnail');
    videoThumbnails.forEach((thumbnail) => {
        thumbnail.addEventListener('click', () => {
            const videoUrl = thumbnail.getAttribute('data-video');
            if (videoUrl) {
                showVideoModal(videoUrl);
            }
        });
    });

    function showVideoModal(videoUrl) {
        // In a real application, you would create a modal with an embedded video
        console.log(`Playing video: ${videoUrl}`);
        alert(`This would play the video from ${videoUrl} in a real application.`);
    }

    // Add typing effect to the main heading
    function typingEffect() {
        const heading = document.querySelector('.animate-title');
        if (heading) {
            const text = heading.textContent;
            heading.textContent = '';

            let i = 0;
            const speed = 100; // ms per character

            function type() {
                if (i < text.length) {
                    heading.textContent += text.charAt(i);
                    i++;
                    setTimeout(type, speed);
                }
            }

            // Start typing after a small delay
            setTimeout(type, 500);
        }
    }
    // Call typing effect on page load
    typingEffect();

    // Add CSS for animations that were added with JS
    addAnimationStyles();

    function addAnimationStyles() {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            
            @keyframes slideInUp {
                from {
                    opacity: 0;
                    transform: translateY(50px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            @keyframes slideInLeft {
                from {
                    opacity: 0;
                    transform: translateX(-50px);
                }
                to {
                    opacity: 1;
                    transform: translateX(0);
                }
            }
            
            .fadeIn {
                animation: fadeIn 1s forwards;
            }
            
            .slideInUp {
                animation: slideInUp 1s forwards;
            }
            
            .slideInLeft {
                animation: slideInLeft 1s forwards;
            }
            
            .toast {
                position: fixed;
                bottom: 20px;
                right: 20px;
                padding: 15px 25px;
                background-color: #4CAF50;
                color: white;
                border-radius: 5px;
                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
                transform: translateY(100px);
                opacity: 0;
                transition: all 0.3s ease;
                z-index: 1000;
            }
            
            .toast.error {
                background-color: #F44336;
            }
            
            .toast.show {
                transform: translateY(0);
                opacity: 1;
            }
            
            .nav-link.active {
                color: #64B5F6;
                font-weight: bold;
            }
        `;

        document.head.appendChild(style);
    }
};