// ============================================
// WAIT FOR DOM AND LIBRARIES TO LOAD
// ============================================
window.addEventListener('DOMContentLoaded', initWebsite);

function initWebsite() {
    // Check if libraries are loaded
    if (typeof Lenis === 'undefined' || typeof gsap === 'undefined') {
        console.warn('Libraries not loaded yet, retrying...');
        setTimeout(initWebsite, 100);
        return;
    }
    
    initSmoothScroll();
    initAnimations();
    initInteractions();
    initPerformanceOptimizations();
}

// ============================================
// LENIS SMOOTH SCROLL INITIALIZATION
// ============================================
let lenis;

function initSmoothScroll() {
    lenis = new Lenis({
        duration: 1.8,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Integrate Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                lenis.scrollTo(target, {
                    offset: 0,
                    duration: 2,
                    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
                });
            }
        });
    });
}

// ============================================
// GSAP SCROLL ANIMATIONS
// ============================================
function initAnimations() {
    // Hero Section Animations
    gsap.from('.brand-name', {
        opacity: 0,
        y: 80,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.3
    });

    gsap.from('.tagline', {
        opacity: 0,
        y: 60,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.6
    });

    gsap.from('.hero-subtitle', {
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.9
    });

    gsap.from('.cta-button', {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        ease: 'back.out(1.7)',
        delay: 1.2
    });

    // Parallax effect for hero background
    gsap.to('.hero-bg-parallax', {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1
        }
    });

    // Section Title Animations
    gsap.utils.toArray('.section-title').forEach(title => {
        gsap.from(title, {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: title,
                start: 'top 85%',
                toggleActions: 'play none none none'
            }
        });
    });

    // Section Subtitle Animations
    gsap.utils.toArray('.section-subtitle').forEach(subtitle => {
        gsap.from(subtitle, {
            opacity: 0,
            y: 30,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: subtitle,
                start: 'top 85%',
                toggleActions: 'play none none none'
            }
        });
    });

    // Product Cards Stagger Animation
    gsap.utils.toArray('.product-card').forEach((card, index) => {
        gsap.from(card, {
            opacity: 0,
            y: 80,
            scale: 0.95,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            delay: index * 0.1
        });
    });

    // Product Image Parallax
    gsap.utils.toArray('.product-image img').forEach(img => {
        gsap.to(img, {
            yPercent: -15,
            ease: 'none',
            scrollTrigger: {
                trigger: img.closest('.product-card'),
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1
            }
        });
    });

    // About Section Animation
    gsap.from('.about-content', {
        opacity: 0,
        y: 60,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.about',
            start: 'top 70%',
            toggleActions: 'play none none none'
        }
    });

    // About Features Stagger
    gsap.from('.feature', {
        opacity: 0,
        y: 40,
        scale: 0.9,
        duration: 0.8,
        stagger: 0.2,
        ease: 'back.out(1.7)',
        scrollTrigger: {
            trigger: '.about-features',
            start: 'top 80%',
            toggleActions: 'play none none none'
        }
    });

    // About Background Parallax
    gsap.to('.about', {
        backgroundPosition: '50% 100%',
        ease: 'none',
        scrollTrigger: {
            trigger: '.about',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
        }
    });

    // Review Cards Stagger Animation
    gsap.utils.toArray('.review-card').forEach((card, index) => {
        gsap.from(card, {
            opacity: 0,
            y: 60,
            scale: 0.95,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: card,
                start: 'top 90%',
                toggleActions: 'play none none none'
            },
            delay: index * 0.15
        });
    });

    // Contact Items Stagger Animation
    gsap.utils.toArray('.contact-item').forEach((item, index) => {
        gsap.from(item, {
            opacity: 0,
            y: 50,
            scale: 0.95,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: item,
                start: 'top 90%',
                toggleActions: 'play none none none'
            },
            delay: index * 0.15
        });
    });

    // Footer Animation
    gsap.from('.footer', {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.footer',
            start: 'top 90%',
            toggleActions: 'play none none none'
        }
    });
}

// ============================================
// INTERACTIVE ELEMENTS
// ============================================
function initInteractions() {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    let ticking = false;
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                if (window.scrollY > 100) {
                    navbar.style.background = 'rgba(26, 20, 16, 0.98)';
                    navbar.style.boxShadow = '0 2px 20px rgba(212, 175, 55, 0.2)';
                } else {
                    navbar.style.background = 'rgba(26, 20, 16, 0.95)';
                    navbar.style.boxShadow = '0 2px 20px rgba(212, 175, 55, 0.1)';
                }
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });

    // View Product button functionality
    document.querySelectorAll('.view-btn').forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.closest('.product-card').querySelector('.product-name').textContent;
            
            // Add click animation
            gsap.to(this, {
                scale: 0.95,
                duration: 0.1,
                yoyo: true,
                repeat: 1,
                ease: 'power2.inOut'
            });
            
            setTimeout(() => {
                alert(`Coming soon! ${productName} will be available for purchase shortly. Follow us on Instagram @belovedstory.in for updates! ✨`);
            }, 200);
        });
    });

    // Golden sparkle effect on hero
    initSparkleEffect();
}

// ============================================
// GOLDEN SPARKLE EFFECT
// ============================================
let sparkleInterval;

function initSparkleEffect() {
    const hero = document.querySelector('.hero');
    
    sparkleInterval = setInterval(() => {
        const sparkle = document.createElement('div');
        const size = Math.random() * 3 + 2;
        sparkle.className = 'sparkle';
        sparkle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: radial-gradient(circle, #D4AF37 0%, #F4E4C1 50%, transparent 100%);
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            pointer-events: none;
            z-index: 2;
            box-shadow: 0 0 10px rgba(212, 175, 55, 0.8);
        `;
        hero.appendChild(sparkle);
        
        gsap.to(sparkle, {
            opacity: 0,
            scale: 2,
            duration: 2.5,
            ease: 'power2.out',
            onComplete: () => sparkle.remove()
        });
    }, 2000);
}

// ============================================
// PERFORMANCE OPTIMIZATIONS
// ============================================
function initPerformanceOptimizations() {
    // Reduce animations on mobile for performance
    if (window.innerWidth < 768) {
        ScrollTrigger.config({
            limitCallbacks: true,
            syncInterval: 150
        });
    }

    // Ensure sections are always visible (fallback)
    ensureVisibility();

    // Lazy load images
    lazyLoadImages();

    // Cleanup on page unload
    window.addEventListener('beforeunload', cleanup);
}

// Ensure critical sections are visible
function ensureVisibility() {
    const elements = [
        ...document.querySelectorAll('.review-card'),
        ...document.querySelectorAll('.contact-item'),
        ...document.querySelectorAll('.section-title')
    ];
    
    elements.forEach(el => {
        el.style.opacity = '1';
        el.style.visibility = 'visible';
    });
}

// Lazy load images with Intersection Observer
function lazyLoadImages() {
    const images = document.querySelectorAll('.product-image img');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                
                if (!img.complete) {
                    img.style.opacity = '0';
                    img.style.transition = 'opacity 0.5s ease';
                    
                    img.onload = () => {
                        img.style.opacity = '1';
                    };
                } else {
                    img.style.opacity = '1';
                }
                
                observer.unobserve(img);
            }
        });
    }, {
        rootMargin: '100px'
    });
    
    images.forEach(img => {
        if (img.complete) {
            img.style.opacity = '1';
        }
        imageObserver.observe(img);
    });
}

// Cleanup function to prevent memory leaks
function cleanup() {
    if (sparkleInterval) {
        clearInterval(sparkleInterval);
    }
    
    if (lenis) {
        lenis.destroy();
    }
    
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
}
