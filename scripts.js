// Update the year in the footer
document.getElementById("year").textContent = new Date().getFullYear();

// Create 3D floating background elements
function create3DBackground() {
    const container = document.getElementById('bg3d');
    for (let i = 0; i < 20; i++) {
        const cube = document.createElement('div');
        cube.className = 'floating-cube';
        cube.style.left = Math.random() * 100 + '%';
        cube.style.top = Math.random() * 100 + '%';
        cube.style.animationDelay = Math.random() * 20 + 's';
        cube.style.animationDuration = (Math.random() * 10 + 15) + 's';
        container.appendChild(cube);
    }
}

// Cursor follower
function initCursorFollower() {
    const cursor = document.getElementById('cursor');
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateCursor() {
        cursorX += (mouseX - cursorX) * 0.1;
        cursorY += (mouseY - cursorY) * 0.1;
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        requestAnimationFrame(animateCursor);
    }
    animateCursor();
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Intersection Observer for animations
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                // Special handling for section titles
                const title = entry.target.querySelector('.section-title');
                if (title) {
                    title.classList.add('in-view');
                }
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// 3D tilt effect for cards
function init3DTilt() {
    const cards = document.querySelectorAll('.skill-item, .project-card, .timeline-content');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
        });
    });
}

// Parallax effect
function initParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;

        document.querySelectorAll('.floating-cube').forEach((cube, index) => {
            const speed = 0.2 + (index % 3) * 0.1;
            cube.style.transform = `translateY(${scrolled * speed}px) rotateX(${scrolled * 0.1}deg) rotateY(${scrolled * 0.1}deg)`;
        });
    });
}

// Contact form submission with 3D feedback
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const submitBtn = this.querySelector('button[type="submit"]');

    if (name && email && message) {
        // Add 3D success animation
        submitBtn.style.transform = 'translateZ(20px) rotateX(20deg)';
        submitBtn.textContent = 'Message Sent! ✨';
        submitBtn.style.background = 'linear-gradient(45deg, #4caf50, #8bc34a)';

        setTimeout(() => {
            alert(`Thank you, ${name}! Your message has been sent.`);
            this.reset();
            submitBtn.style.transform = '';
            submitBtn.textContent = 'Send Message';
            submitBtn.style.background = '';
        }, 1000);
    } else {
        // Add 3D error animation
        submitBtn.style.transform = 'translateZ(-10px) rotateX(-20deg)';
        submitBtn.style.background = 'linear-gradient(45deg, #f44336, #e91e63)';
        setTimeout(() => {
            submitBtn.style.transform = '';
            submitBtn.style.background = '';
        }, 500);
        alert("Please fill in all fields.");
    }
});

// Project demo functions
function showDemo(project) {
    const demos = {
        'ecommerce': 'This would open the E-Commerce platform demo!',
        'taskflow': 'This would open the Task Flow application demo!',
        'weather': 'This would open the Weather Pro dashboard demo!',
        'portfolio': 'This would open the Creative Portfolio demo!',
        'connect': 'This would open the Connect social media app demo!',
        'dataviz': 'This would open the DataViz Pro analytics demo!'
    };
    alert(demos[project] || 'Demo not available');
}

function showCode(project) {
    const repos = {
        'ecommerce': 'This would open the E-Commerce GitHub repository!',
        'taskflow': 'This would open the Task Flow GitHub repository!',
        'weather': 'This would open the Weather Pro GitHub repository!',
        'portfolio': 'This would open the Creative Portfolio GitHub repository!',
        'connect': 'This would open the Connect GitHub repository!',
        'dataviz': 'This would open the DataViz Pro GitHub repository!'
    };
    alert(repos[project] || 'Repository not available');
}

// Initialize all effects when page loads
document.addEventListener('DOMContentLoaded', () => {
    create3DBackground();
    initCursorFollower();
    initScrollAnimations();
    init3DTilt();
    initParallax();

    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 1s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' });
    } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        window.scrollBy({ top: -window.innerHeight * 0.8, behavior: 'smooth' });
    }
});

// Add touch gestures for mobile
let touchStartY = 0;
document.addEventListener('touchstart', (e) => {
    touchStartY = e.touches[0].clientY;
});

document.addEventListener('touchend', (e) => {
    const touchEndY = e.changedTouches[0].clientY;
    const diff = touchStartY - touchEndY;

    if (Math.abs(diff) > 50) {
        if (diff > 0) {
            // Swipe up
            window.scrollBy({ top: window.innerHeight * 0.5, behavior: 'smooth' });
        } else {
            // Swipe down
            window.scrollBy({ top: -window.innerHeight * 0.5, behavior: 'smooth' });
        }
    }
});