window.DashboardAnimations = {
    animateDashboardElements: function () {
        // Animate the welcome banner
        const welcomeBanner = document.querySelector('.welcome-banner');
        if (welcomeBanner) {
            welcomeBanner.style.animation = 'fadeIn 0.8s ease-out forwards';
        }

        // Animate stat cards one by one
        const statCards = document.querySelectorAll('.stat-card');
        statCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.animation = `fadeIn 0.5s ease-out ${index * 0.1}s forwards`;
            }, index * 100);
        });

        // Initialize bar animations
        this.initBarAnimations();

        // Initialize line animations
        this.initLineAnimations();

        console.log("Dashboard animations executed");
    },

    initBarAnimations: function () {
        const bars = document.querySelectorAll('.bar-fill');
        bars.forEach((bar, index) => {
            bar.style.animation = `growBar 1.5s ease-out ${index * 0.2}s forwards`;
        });

        // Set up bar animation loop
        setInterval(() => {
            const bars = document.querySelectorAll('.bar-fill');
            bars.forEach((bar, index) => {
                setTimeout(() => {
                    // Reset animation
                    bar.style.animation = 'none';
                    void bar.offsetWidth; // Trigger reflow
                    // Restart animation
                    bar.style.animation = `growBar 1.5s ease-out ${index * 0.2}s forwards`;
                }, index * 100);
            });
        }, 3500);
    },

    initLineAnimations: function () {
        const polyline = document.querySelector('#animatedZigzag');
        const targetLine = document.querySelector('.target-line');

        if (polyline) {
            const totalLength = polyline.getTotalLength();
            polyline.style.strokeDasharray = totalLength;
            polyline.style.strokeDashoffset = totalLength;

            // Set up line animation loop
            setInterval(() => {
                polyline.style.animation = 'none';
                void polyline.offsetWidth; // Trigger reflow
                polyline.style.animation = 'drawLine 3s ease-in-out forwards';
            }, 4000);
        }

        if (targetLine) {
            const targetLength = targetLine.getTotalLength();
            targetLine.style.strokeDasharray = targetLength;
            targetLine.style.strokeDashoffset = targetLength;

            // Set up target line animation loop
            setInterval(() => {
                targetLine.style.animation = 'none';
                void targetLine.offsetWidth; // Trigger reflow
                targetLine.style.animation = 'drawLine 3s ease-in-out forwards 0.5s';
            }, 4000);
        }
    }
}; window.DashboardAnimations = {
    animateDashboardElements: function () {
        // Animate the welcome banner
        const welcomeBanner = document.querySelector('.welcome-banner');
        if (welcomeBanner) {
            welcomeBanner.style.animation = 'fadeIn 0.8s ease-out forwards';
        }

        // Animate stat cards one by one
        const statCards = document.querySelectorAll('.stat-card');
        statCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.animation = `fadeIn 0.5s ease-out ${index * 0.1}s forwards`;
            }, index * 100);
        });

        // Initialize bar animations
        this.initBarAnimations();

        // Initialize line animations
        this.initLineAnimations();

        console.log("Dashboard animations executed");
    },

    initBarAnimations: function () {
        const bars = document.querySelectorAll('.bar-fill');
        bars.forEach((bar, index) => {
            bar.style.animation = `growBar 1.5s ease-out ${index * 0.2}s forwards`;
        });

        // Set up bar animation loop
        setInterval(() => {
            const bars = document.querySelectorAll('.bar-fill');
            bars.forEach((bar, index) => {
                setTimeout(() => {
                    // Reset animation
                    bar.style.animation = 'none';
                    void bar.offsetWidth; // Trigger reflow
                    // Restart animation
                    bar.style.animation = `growBar 1.5s ease-out ${index * 0.2}s forwards`;
                }, index * 100);
            });
        }, 3500);
    },

    initLineAnimations: function () {
        const polyline = document.querySelector('#animatedZigzag');
        const targetLine = document.querySelector('.target-line');

        if (polyline) {
            const totalLength = polyline.getTotalLength();
            polyline.style.strokeDasharray = totalLength;
            polyline.style.strokeDashoffset = totalLength;

            // Set up line animation loop
            setInterval(() => {
                polyline.style.animation = 'none';
                void polyline.offsetWidth; // Trigger reflow
                polyline.style.animation = 'drawLine 3s ease-in-out forwards';
            }, 4000);
        }

        if (targetLine) {
            const targetLength = targetLine.getTotalLength();
            targetLine.style.strokeDasharray = targetLength;
            targetLine.style.strokeDashoffset = targetLength;

            // Set up target line animation loop
            setInterval(() => {
                targetLine.style.animation = 'none';
                void targetLine.offsetWidth; // Trigger reflow
                targetLine.style.animation = 'drawLine 3s ease-in-out forwards 0.5s';
            }, 4000);
        }
    }
};