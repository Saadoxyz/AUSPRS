window.DashboardAnimations = {
    initDashboardAnimations: function () {
        // Initialize bar chart animations with delays
        const bars = document.querySelectorAll('.bar-fill');
        bars.forEach((bar, index) => {
            bar.style.animationDelay = `${index * 0.2}s`;
        });

        // Initialize dot animations with indexes
        const dots = document.querySelectorAll('.chart-dot');
        dots.forEach((dot, index) => {
            dot.style.setProperty('--dot-index', index);
        });

        // Set up the continuous animation loop
        this.setupAnimationLoop();
    },
    initBarAnimations: function () {
        const bars = document.querySelectorAll('.bar-fill');

        bars.forEach((bar, index) => {
            bar.style.backgroundColor = '#FF69B4';
            bar.style.animation = 'growBarLoop 3s ease-in-out infinite';
            bar.style.animationDelay = `${index * 0.3}s`;
        });
    }
        setupAnimationLoop: function () {
        // Reset and replay line animations every 4 seconds
        setInterval(() => {
            const zigzag = document.querySelector('#animatedZigzag');
            const targetLine = document.querySelector('.target-line');

            if (zigzag) {
                zigzag.style.animation = 'none';
                zigzag.offsetHeight; // Trigger reflow
                zigzag.style.animation = 'drawLine 3s ease-in-out forwards';
            }

            if (targetLine) {
                targetLine.style.animation = 'none';
                targetLine.offsetHeight; // Trigger reflow
                targetLine.style.animation = 'drawLine 3s ease-in-out forwards 0.5s';
            }
        }, 4000);

        // Reset and replay bar animations every 3.5 seconds
        setInterval(() => {
            const bars = document.querySelectorAll('.bar-fill');
            bars.forEach((bar, index) => {
                setTimeout(() => {
                    bar.style.animation = 'none';
                    bar.offsetHeight; // Trigger reflow
                    bar.style.animation = 'growBar 1.5s ease-out forwards';
                }, index * 100);
            });
        }, 3500);
    },

    animateDashboardElements: function () {
        // Initial animations
        this.initDashboardAnimations();

        // Animate welcome banner
        const welcomeBanner = document.querySelector('.welcome-banner');
        if (welcomeBanner) {
            welcomeBanner.style.animation = 'fadeIn 0.8s ease-out forwards';
        }

        // Animate stat cards
        const statCards = document.querySelectorAll('.stat-card');
        statCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.animation = `fadeIn 0.5s ease-out ${index * 0.1}s forwards`;
            }, index * 100);
        });

        console.log("Dashboard animations initialized");
    }
};