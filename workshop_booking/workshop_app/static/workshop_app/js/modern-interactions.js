/* ============================================================
   MODERN INTERACTIVE COMPONENTS & AOS SETUP
   Integrate Animate on Scroll and Interactive Elements
   ============================================================ */

// Initialize AOS (Animate On Scroll) Library
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS if library is loaded
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out-cubic',
            once: false,
            mirror: true,
            offset: 120,
            delay: 0
        });
        
        console.log('AOS initialized successfully');
    }
    
    // Initialize smooth scroll behavior
    initSmoothScroll();
    
    // Initialize interactive elements
    initInteractiveElements();
    
    // Initialize parallax effects
    initParallax();
    
    // Initialize card animations on hover
    initCardAnimations();
});

/* ============================================================
   SMOOTH SCROLL INITIALIZATION
   ============================================================ */

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/* ============================================================
   INTERACTIVE ELEMENTS - HOVER & CLICK EFFECTS
   ============================================================ */

function initInteractiveElements() {
    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mousedown', function(e) {
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
    
    // Add hover effects to cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.classList.add('card-hover');
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('card-hover');
        });
    });
    
    // Add focus effects to form elements
    const formElements = document.querySelectorAll('input, textarea, select');
    formElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.parentElement?.classList.add('form-focused');
        });
        
        element.addEventListener('blur', function() {
            this.parentElement?.classList.remove('form-focused');
        });
    });
}

/* ============================================================
   PARALLAX SCROLLING EFFECT
   ============================================================ */

function initParallax() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    if (parallaxElements.length === 0) return;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset;
        
        parallaxElements.forEach(element => {
            const speed = element.getAttribute('data-parallax') || 0.5;
            element.style.transform = `translateY(${scrollTop * speed}px)`;
        });
    });
}

/* ============================================================
   CARD ANIMATIONS ON SCROLL
   ============================================================ */

function initCardAnimations() {
    const cards = document.querySelectorAll('[data-card-animate]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('card-pop');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '50px'
    });
    
    cards.forEach(card => observer.observe(card));
}

/* ============================================================
   SCROLL ANIMATIONS TRIGGER
   ============================================================ */

function triggerScrollAnimations() {
    const elements = document.querySelectorAll('[data-scroll-animate]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const animationType = entry.target.getAttribute('data-scroll-animate');
                entry.target.classList.add('aos-animate', `aos-${animationType}`);
            }
        });
    }, {
        threshold: 0.1
    });
    
    elements.forEach(element => observer.observe(element));
}

/* ============================================================
   COUNTER ANIMATION FOR STATISTICS
   ============================================================ */

function animateCounters() {
    const counters = document.querySelectorAll('[data-counter]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                const target = parseInt(entry.target.getAttribute('data-counter'));
                const duration = parseInt(entry.target.getAttribute('data-duration')) || 2000;
                
                animateCounter(entry.target, 0, target, duration);
                entry.target.classList.add('counted');
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element, start, end, duration) {
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;
    
    const counter = setInterval(() => {
        current += increment;
        if (current >= end) {
            element.textContent = end.toLocaleString();
            clearInterval(counter);
        } else {
            element.textContent = Math.floor(current).toLocaleString();
        }
    }, 16);
}

/* ============================================================
   NEON GLOW TEXT EFFECT
   ============================================================ */

function initNeonGlowEffect() {
    const glowTexts = document.querySelectorAll('.text-neon-glow');
    
    glowTexts.forEach(element => {
        element.addEventListener('mouseover', function() {
            this.style.textShadow = '0 0 10px #FF6B35, 0 0 20px #FF6B35, 0 0 40px #FF6B35';
            this.style.transition = 'text-shadow 0.3s ease';
        });
        
        element.addEventListener('mouseout', function() {
            this.style.textShadow = 'none';
        });
    });
}

/* ============================================================
   SCROLL PROGRESS BAR
   ============================================================ */

function initScrollProgressBar() {
    const progressBar = document.querySelector('[data-scroll-progress]');
    
    if (!progressBar) return;
    
    window.addEventListener('scroll', function() {
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = window.scrollY;
        const scrollPercent = (scrolled / windowHeight) * 100;
        
        progressBar.style.width = scrollPercent + '%';
    });
}

/* ============================================================
   LAZY LOAD IMAGES
   ============================================================ */

function initLazyLoading() {
    const lazyImages = document.querySelectorAll('img[data-lazy]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.getAttribute('data-lazy');
                    img.classList.add('fade-in');
                    observer.unobserve(img);
                }
            });
        }, { rootMargin: '50px' });
        
        lazyImages.forEach(img => imageObserver.observe(img));
    }
}

/* ============================================================
   NAVIGATION ACTIVE STATE
   ============================================================ */

function updateNavActiveState() {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const currentLocation = location.pathname;
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        
        if (currentLocation === href || currentLocation.includes(href)) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

/* ============================================================
   NOTIFICATION/TOAST AUTO-HIDE
   ============================================================ */

function initAutoHideNotifications() {
    const alerts = document.querySelectorAll('.alert');
    
    alerts.forEach(alert => {
        const autoHide = alert.getAttribute('data-auto-hide');
        
        if (autoHide !== 'false') {
            const timeout = parseInt(autoHide) || 5000;
            
            setTimeout(() => {
                alert.classList.add('container-collapse');
                
                setTimeout(() => {
                    alert.remove();
                }, 400);
            }, timeout);
        }
    });
}

/* ============================================================
   MODAL ANIMATIONS
   ============================================================ */

function initModalAnimations() {
    const modals = document.querySelectorAll('.modal');
    
    modals.forEach(modal => {
        const backdrop = modal.nextElementSibling;
        
        modal.addEventListener('show.bs.modal', function() {
            this.classList.add('scale-in');
            if (backdrop) backdrop.classList.add('fade-in');
        });
    });
}

/* ============================================================
   FORM VALIDATION FEEDBACK
   ============================================================ */

function initFormValidation() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            if (!form.checkValidity()) {
                e.preventDefault();
                e.stopPropagation();
                
                form.querySelectorAll('.form-control').forEach(field => {
                    if (!field.checkValidity()) {
                        field.classList.add('is-invalid');
                        field.parentElement?.classList.add('shake');
                    } else {
                        field.classList.remove('is-invalid');
                        field.classList.add('is-valid');
                    }
                });
            }
            
            form.classList.add('was-validated');
        });
    });
}

/* ============================================================
   TEXT FADE-IN EFFECT ON LOAD
   ============================================================ */

function initTextFadeIn() {
    const textElements = document.querySelectorAll('[data-text-fade]');
    
    textElements.forEach(element => {
        const text = element.textContent;
        element.innerHTML = '';
        
        let index = 0;
        const interval = setInterval(() => {
            if (index < text.length) {
                element.textContent += text[index];
                index++;
            } else {
                clearInterval(interval);
            }
        }, 50);
    });
}

/* ============================================================
   RIPPLE EFFECT CSS
   ============================================================ */

const style = document.createElement('style');
style.innerHTML = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .card-hover {
        transform: translateY(-8px) !important;
    }
    
    .form-focused {
        box-shadow: 0 0 20px rgba(255, 107, 53, 0.3);
    }
    
    .shake {
        animation: shake 0.5s;
    }
    
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
        20%, 40%, 60%, 80% { transform: translateX(5px); }
    }
    
    .fade-in {
        animation: fade-in 0.6s ease-out;
    }
    
    @keyframes fade-in {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

/* ============================================================
   INITIALIZE ALL ON LOAD
   ============================================================ */

window.addEventListener('load', function() {
    triggerScrollAnimations();
    animateCounters();
    initNeonGlowEffect();
    initScrollProgressBar();
    initLazyLoading();
    updateNavActiveState();
    initAutoHideNotifications();
    initModalAnimations();
    initFormValidation();
});

// Re-initialize AOS on dynamic content load
window.addEventListener('ajaxComplete', function() {
    if (typeof AOS !== 'undefined') {
        AOS.refresh();
    }
});

console.log('Modern interactive components initialized');
