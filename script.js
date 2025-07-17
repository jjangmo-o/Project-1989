/*
// Smooth scrolling for navigation buttons
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all buttons with data-scroll attributes
    const buttons = document.querySelectorAll('.btn');
    
    // Add click handlers for navigation
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Add ripple effect
            createRipple(e);
        });
    });

    // Add parallax effect to hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero-container');
        const heroHeight = hero.offsetHeight;
        
        if (scrolled < heroHeight) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Add fade-in animation for stats
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                
                // Animate stat numbers
                if (entry.target.classList.contains('stat-item')) {
                    animateStatNumber(entry.target);
                }
            }
        });
    }, observerOptions);

    // Observe stat items
    document.querySelectorAll('.stat-item').forEach(stat => {
        observer.observe(stat);
    });

    // Observe track items for staggered animation
    document.querySelectorAll('.track-item').forEach((track, index) => {
        track.style.animationDelay = `${index * 0.1}s`;
        observer.observe(track);
    });

    // Add hover sound effect simulation
    document.querySelectorAll('.track-item').forEach(track => {
        track.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#f0f9ff';
        });
        
        track.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'white';
        });
    });
});

// Create ripple effect for buttons
function createRipple(event) {
    const button = event.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add('ripple');

    const ripple = button.getElementsByClassName('ripple')[0];
    if (ripple) {
        ripple.remove();
    }

    button.appendChild(circle);
}

// Animate stat numbers
function animateStatNumber(statItem) {
    const statNumber = statItem.querySelector('.stat-number');
    const text = statNumber.textContent;
    
    // Extract number from text (handle formats like "1.65M", "#1", "10M+", "5")
    const match = text.match(/[\d.]+/);
    if (match) {
        const number = parseFloat(match[0]);
        const suffix = text.replace(/[\d.]+/, '');
        
        let current = 0;
        const increment = number / 30; // Animate over 30 frames
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= number) {
                current = number;
                clearInterval(timer);
            }
            
            if (number < 10) {
                statNumber.textContent = Math.floor(current) + suffix;
            } else {
                statNumber.textContent = current.toFixed(number % 1 !== 0 ? 2 : 0) + suffix;
            }
        }, 50);
    }
}

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});
*/