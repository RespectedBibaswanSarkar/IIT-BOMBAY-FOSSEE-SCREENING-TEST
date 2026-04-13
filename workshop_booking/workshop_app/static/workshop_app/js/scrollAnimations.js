/**
 * ============================================================================
 * SCROLL ANIMATIONS & AOS INITIALIZATION
 * ============================================================================
 * 
 * Handles Intersection Observer-based scroll animations
 * and smooth page transitions with parallax effects
 * ============================================================================
 */

// ============================================================================
// INTERSECTION OBSERVER FOR SCROLL ANIMATIONS
// ============================================================================

class ScrollAnimator {
  constructor(options = {}) {
    this.options = {
      threshold: options.threshold || 0.1,
      rootMargin: options.rootMargin || '0px 0px -50px 0px',
      ...options
    };
    
    this.observer = new IntersectionObserver(
      (entries) => this.handleIntersection(entries),
      {
        threshold: this.options.threshold,
        rootMargin: this.options.rootMargin
      }
    );
    
    this.init();
  }

  init() {
    // Observe all elements with data-aos attribute
    document.querySelectorAll('[data-aos]').forEach(el => {
      this.observer.observe(el);
    });
  }

  handleIntersection(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target;
        const animation = element.getAttribute('data-aos') || 'fade-in';
        const duration = element.getAttribute('data-aos-duration') || '700';
        const delay = element.getAttribute('data-aos-delay') || '0';
        const easing = element.getAttribute('data-aos-easing') || 'ease-out';
        
        // Apply animation
        element.style.animation = `${animation} ${duration}ms ${easing} ${delay}ms forwards`;
        element.classList.add('aos-animate');
        
        // Stop observing after animation
        this.observer.unobserve(element);
      }
    });
  }

  destroy() {
    this.observer.disconnect();
  }
}

// ============================================================================
// PARALLAX SCROLL EFFECT
// ============================================================================

class ParallaxScroller {
  constructor() {
    this.elements = document.querySelectorAll('[data-parallax]');
    this.speed = 0.5;
    this.init();
  }

  init() {
    if (this.elements.length === 0) return;
    
    window.addEventListener('scroll', () => this.update());
    this.update(); // Initial call
  }

  update() {
    const scrollY = window.scrollY;
    
    this.elements.forEach(el => {
      const speed = parseFloat(el.getAttribute('data-parallax')) || this.speed;
      const yPos = -(scrollY * speed);
      el.style.transform = `translateY(${yPos}px)`;
    });
  }
}

// ============================================================================
// REVEAL ON SCROLL - STAGGER EFFECT
// ============================================================================

class StaggerReveal {
  constructor(selector = '.reveal-list, .reveal-grid') {
    this.containers = document.querySelectorAll(selector);
    this.init();
  }

  init() {
    this.containers.forEach(container => {
      const children = container.children;
      
      Array.from(children).forEach((child, index) => {
        child.style.setProperty('--reveal-delay', `${index * 100}ms`);
      });
    });
  }
}

// ============================================================================
// SCROLL PROGRESS BAR
// ============================================================================

class ScrollProgressBar {
  constructor() {
    this.progressBar = document.querySelector('.scroll-progress');
    
    if (!this.progressBar) {
      this.createProgressBar();
    }
    
    window.addEventListener('scroll', () => this.update());
  }

  createProgressBar() {
    this.progressBar = document.createElement('div');
    this.progressBar.className = 'scroll-progress';
    document.body.prepend(this.progressBar);
  }

  update() {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / scrollHeight) * 100;
    this.progressBar.style.width = `${scrolled}%`;
  }
}

// ============================================================================
// SMOOTH SCROLL TO SECTION
// ============================================================================

function smoothScrollTo(selector, offset = 80) {
  const element = document.querySelector(selector);
  
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - offset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}

// ============================================================================
// ANIMATED COUNTER
// ============================================================================

class AnimatedCounter {
  constructor(selector, options = {}) {
    this.elements = document.querySelectorAll(selector);
    this.duration = options.duration || 2000;
    this.easing = options.easing || this.easeOutQuad;
    this.init();
  }

  init() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
          this.count(entry.target);
          entry.target.classList.add('counted');
          observer.unobserve(entry.target);
        }
      });
    });

    this.elements.forEach(el => observer.observe(el));
  }

  count(element) {
    const target = parseInt(element.getAttribute('data-target')) || 0;
    const startTime = Date.now();
    const startValue = 0;

    const step = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / this.duration, 1);
      const current = Math.floor(this.easing(progress) * target);
      
      element.textContent = current.toLocaleString();
      
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }

  easeOutQuad(t) {
    return t * (2 - t);
  }
}

// ============================================================================
// TEXT CHARACTER ANIMATION
// ============================================================================

class TextCharacterAnimation {
  constructor(selector) {
    this.elements = document.querySelectorAll(selector);
    this.init();
  }

  init() {
    this.elements.forEach(element => {
      const text = element.textContent;
      const chars = text.split('').map(char => 
        char === ' ' ? '<span style="margin-right: 0.2em;"></span>' : 
        `<span>${char}</span>`
      );
      element.innerHTML = chars.join('');
    });
  }
}

// ============================================================================
// HOVER PARTICLE EFFECT
// ============================================================================

class HoverParticles {
  constructor(selector) {
    this.elements = document.querySelectorAll(selector);
    this.init();
  }

  init() {
    this.elements.forEach(element => {
      element.addEventListener('mouseenter', (e) => this.createParticles(e));
    });
  }

  createParticles(event) {
    const rect = event.target.getBoundingClientRect();
    const particleCount = 5;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.style.cssText = `
        position: fixed;
        pointer-events: none;
        width: 6px;
        height: 6px;
        background: linear-gradient(135deg, #FF7A00, #00D9FF);
        border-radius: 50%;
        left: ${rect.left + rect.width / 2}px;
        top: ${rect.top + rect.height / 2}px;
        animation: particleFloat 1s ease-out forwards;
      `;
      
      document.body.appendChild(particle);
      
      setTimeout(() => particle.remove(), 1000);
    }
  }
}

// ============================================================================
// GLOBAL SCROLL EVENT HANDLER
// ============================================================================

class ScrollHandler {
  constructor() {
    this.lastScroll = 0;
    this.reachedBottom = false;
    this.init();
  }

  init() {
    window.addEventListener('scroll', () => this.handleScroll(), { passive: true });
  }

  handleScroll() {
    const currentScroll = window.scrollY;
    const scrollDirection = currentScroll > this.lastScroll ? 'down' : 'up';
    
    // Trigger custom event
    window.dispatchEvent(new CustomEvent('scrollChange', {
      detail: {
        direction: scrollDirection,
        position: currentScroll
      }
    }));

    // Check if reached bottom
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {
      if (!this.reachedBottom) {
        window.dispatchEvent(new CustomEvent('reachedBottom'));
        this.reachedBottom = true;
      }
    } else {
      this.reachedBottom = false;
    }

    this.lastScroll = currentScroll;
  }
}

// ============================================================================
// NAVBAR HIDE/SHOW ON SCROLL
// ============================================================================

class NavbarAutoHide {
  constructor(navbarSelector = '.navbar') {
    this.navbar = document.querySelector(navbarSelector);
    this.lastScroll = 0;
    this.init();
  }

  init() {
    if (!this.navbar) return;

    window.addEventListener('scroll', () => {
      const currentScroll = window.scrollY;

      if (currentScroll <= 0) {
        this.navbar.style.transform = 'translateY(0)';
      } else if (currentScroll > this.lastScroll && currentScroll > 100) {
        this.navbar.style.transform = 'translateY(-100%)';
      } else {
        this.navbar.style.transform = 'translateY(0)';
      }

      this.lastScroll = currentScroll;
    });
  }
}

// ============================================================================
// INITIALIZATION FUNCTION
// ============================================================================

function initializeScrollAnimations(options = {}) {
  // Only initialize if animations are not reduced
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  if (prefersReducedMotion) {
    console.log('Reduced motion preference detected - skipping animations');
    return;
  }

  // Initialize scroll animations
  const scrollAnimator = new ScrollAnimator({
    threshold: options.threshold || 0.1,
    rootMargin: options.rootMargin || '0px 0px -50px 0px'
  });

  // Initialize parallax if elements exist
  const parallax = new ParallaxScroller();

  // Initialize stagger reveals
  const stagger = new StaggerReveal();

  // Initialize scroll progress bar
  const progressBar = new ScrollProgressBar();

  // Initialize counter animations
  const counters = new AnimatedCounter('[data-target]', { duration: 2000 });

  // Initialize scroll handler
  const scrollHandler = new ScrollHandler();

  // Initialize navbar auto-hide if exists
  const navbarHide = new NavbarAutoHide();

  console.log('✓ Scroll animations initialized');

  return {
    scrollAnimator,
    parallax,
    stagger,
    progressBar,
    counters,
    scrollHandler,
    navbarHide
  };
}

// ============================================================================
// AUTO-INITIALIZE ON DOM READY
// ============================================================================

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => initializeScrollAnimations());
} else {
  initializeScrollAnimations();
}

// Add particle animation keyframe
if (!document.querySelector('#particle-animation-keyframe')) {
  const style = document.createElement('style');
  style.id = 'particle-animation-keyframe';
  style.innerHTML = `
    @keyframes particleFloat {
      0% {
        opacity: 1;
        transform: translate(0, 0) scale(1);
      }
      100% {
        opacity: 0;
        transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) scale(0);
      }
    }
  `;
  document.head.appendChild(style);
}

// Export for use as module
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    ScrollAnimator,
    ParallaxScroller,
    StaggerReveal,
    ScrollProgressBar,
    AnimatedCounter,
    TextCharacterAnimation,
    HoverParticles,
    ScrollHandler,
    NavbarAutoHide,
    smoothScrollTo,
    initializeScrollAnimations
  };
}
