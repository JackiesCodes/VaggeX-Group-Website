// Optimized Vaggex Group Website JavaScript
(function() {
    'use strict';
    
    // Cache DOM elements
    const elements = {};
    let isScrolling = false;
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
    // Also try to initialize icons when window loads (in case Lucide loads after DOM)
    window.addEventListener('load', () => {
        // Re-initialize icons in case they weren't loaded properly
        if (typeof lucide !== 'undefined') {
            try {
                lucide.createIcons();
                console.log('Lucide icons re-initialized on window load');
            } catch (error) {
                console.error('Error re-initializing Lucide icons:', error);
            }
        } else {
            console.log('Lucide not available on window load, using fallbacks');
            initIconFallbacks();
        }
    });
    
    // Additional fallback - try to initialize icons after 2 seconds
    setTimeout(() => {
        const iconElements = document.querySelectorAll('[data-lucide]');
        const hasIcons = Array.from(iconElements).some(el => el.querySelector('svg'));
        
        if (!hasIcons) {
            console.log('No SVG icons found after 2 seconds, applying fallbacks');
            initIconFallbacks();
        }
    }, 2000);
    
    function init() {
        cacheElements();
        
        // Initialize Lucide icons with fallback
        initIcons();
        
        // Initialize functionality with error handling
        try {
            initMobileNavigation();
            initSmoothScrolling();
            initScrollAnimations();
            initFormHandling();
            initNavbarScroll();
            initCardAnimations();
            initProjectModal();
            initServiceModal();
        } catch (error) {
            console.error('Initialization error:', error);
        }
    }
    
    function initIcons() {
        console.log('Initializing icons...');
        
        // Add loading state to all icon containers
        const iconContainers = document.querySelectorAll('.icon-circle, .vmv-icon, .service-icon, .why-icon, .contact-icon');
        iconContainers.forEach(container => {
            container.classList.add('icon-loading');
        });
        
        let attempts = 0;
        const maxAttempts = 30; // 3 seconds max wait time
        
        // Set a timeout to show fallbacks if Lucide doesn't load
        const fallbackTimeout = setTimeout(() => {
            console.warn('Lucide library timeout, showing fallbacks');
            initIconFallbacks();
        }, 3000);
        
        // Wait for Lucide to be available
        function waitForLucide() {
            attempts++;
            
            if (typeof lucide !== 'undefined') {
                clearTimeout(fallbackTimeout);
                try {
                    lucide.createIcons();
                    console.log('Lucide icons initialized successfully');
                    
                    // Remove loading state after icons are loaded
                    setTimeout(() => {
                        iconContainers.forEach(container => {
                            container.classList.remove('icon-loading');
                        });
                    }, 100);
                } catch (error) {
                    console.error('Error initializing Lucide icons:', error);
                    initIconFallbacks();
                }
            } else if (attempts < maxAttempts) {
                // Wait a bit more for the library to load
                setTimeout(waitForLucide, 100);
            } else {
                clearTimeout(fallbackTimeout);
                console.warn('Lucide library failed to load after 3 seconds, using fallbacks');
                initIconFallbacks();
            }
        }
        
        // Start waiting for Lucide
        waitForLucide();
    }
    
    function initIconFallbacks() {
        console.log('Initializing icon fallbacks');
        
        // Fallback: Add simple text labels for critical icons
        const fallbackIcons = {
            'camera': 'CAM',
            'building': 'BLD',
            'target': 'TGT',
            'eye': 'EYE',
            'compass': 'CMP',
            'heart': 'HRT',
            'wrench': 'WRN',
            'road': 'RD',
            'building-2': 'BLD',
            'settings': 'SET',
            'clipboard-check': 'CHK',
            'zap': 'ZAP',
            'users': 'USR',
            'star': 'STR',
            'check-circle': 'CHK',
            'globe': 'GLB',
            'layers': 'LYR',
            'handshake': 'HSK',
            'trending-up': 'TRD',
            'shield-check': 'SHD',
            'phone': 'PHN',
            'mail': 'MAIL',
            'phone-call': 'CALL',
            'award': 'AWD'
        };
        
        // Apply fallback icons
        Object.entries(fallbackIcons).forEach(([iconName, fallback]) => {
            const icons = document.querySelectorAll(`[data-lucide="${iconName}"]`);
            icons.forEach(icon => {
                if (!icon.querySelector('svg')) {
                    icon.innerHTML = `<span style="font-size: 0.8em; color: var(--color-orange); font-weight: bold; text-transform: uppercase;">${fallback}</span>`;
                }
            });
        });
        
        // Remove loading state
        const iconContainers = document.querySelectorAll('.icon-loading');
        iconContainers.forEach(container => {
            container.classList.remove('icon-loading');
        });
        
        console.log('Icon fallbacks applied');
    }
    
    function cacheElements() {
        elements.navbar = document.querySelector('.navbar');
        elements.navToggle = document.querySelector('.nav-toggle');
        elements.navMenu = document.querySelector('.nav-menu');
        elements.navLinks = document.querySelectorAll('.nav-link');
        elements.hero = document.querySelector('.hero');
        elements.contactForm = document.querySelector('.contact-form form');
    }

// Mobile Navigation Toggle
function initMobileNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            const isActive = navMenu.classList.contains('active');
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Update ARIA attributes
            navToggle.setAttribute('aria-expanded', !isActive);
            
            // Prevent body scrolling when menu is open
            document.body.style.overflow = !isActive ? 'hidden' : '';
        });

        // Close mobile menu when clicking on nav links
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        });
    }
}

// Smooth Navigation Scrolling
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navbar = document.querySelector('.navbar');
                const navbarHeight = navbar.offsetHeight;
                const targetPosition = targetSection.offsetTop - navbarHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Enhanced Navbar Scroll Effect
function initNavbarScroll() {
    if (!elements.navbar) return;
    
    let lastScrollY = window.scrollY;
    let ticking = false;
    
    function updateNavbar() {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            elements.navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            elements.navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        } else {
            elements.navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            elements.navbar.style.boxShadow = 'none';
        }
        
        // Hide/show navbar on scroll
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
            elements.navbar.style.transform = 'translateY(-100%)';
        } else {
            elements.navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollY = currentScrollY;
        updateActiveNavLink();
        ticking = false;
    }
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(updateNavbar);
            ticking = true;
        }
    });
}

// Update Active Navigation Link
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (!navbar) return;
    
    const navbarHeight = navbar.offsetHeight;
        
    sections.forEach(section => {
        const sectionTop = section.offsetTop - navbarHeight - 50;
        const sectionBottom = sectionTop + section.offsetHeight;
        const scrollPosition = window.scrollY;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            const sectionId = section.getAttribute('id');
            
            // Remove active class from all links
            navLinks.forEach(link => link.classList.remove('active'));
            
            // Add active class to current link
            const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
}

// Counter Animation Function
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current) + (target >= 100 ? '+' : '');
    }, 16);
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Counter animation for statistics
                if (entry.target.classList.contains('hero-stats')) {
                    const statNumbers = entry.target.querySelectorAll('.stat-item h3');
                    statNumbers.forEach((stat, index) => {
                        const text = stat.textContent;
                        const number = parseInt(text.replace(/\D/g, ''));
                        const suffix = text.replace(/\d/g, '');
                        
                        if (number && !stat.hasAttribute('data-animated')) {
                            stat.setAttribute('data-animated', 'true');
                            stat.textContent = '0' + suffix;
                            setTimeout(() => {
                                animateCounter(stat, number, 2000);
                            }, index * 200);
                        }
                    });
                }
                
                // Add stagger animation for cards
                if (entry.target.classList.contains('services-grid') || 
                    entry.target.classList.contains('capabilities-grid') ||
                    entry.target.classList.contains('why-us-grid')) {
                    const cards = entry.target.children;
                    Array.from(cards).forEach((card, index) => {
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, index * 100);
                    });
                }
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.content-section, .contact-section, .service-card, .vmv-card, .capability-card, .why-card, .hero-stats');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Form Handling
function initFormHandling() {
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const button = this.querySelector('.btn-primary');
            const originalText = button.textContent;
            
            // Validate form
            let isValid = true;
            const requiredFields = this.querySelectorAll('[required]');
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    showFieldError(field);
                    isValid = false;
                } else {
                    clearFieldError(field);
                }
            });
            
            if (isValid) {
                // Show loading state
                button.textContent = 'Sending...';
                button.disabled = true;
                button.classList.add('loading');
                
                // Simulate form submission (replace with actual form handling)
                setTimeout(() => {
                    showNotification('Message sent successfully! We\'ll get back to you soon.', 'success');
                    this.reset();
                    
                    button.textContent = originalText;
                    button.disabled = false;
                    button.classList.remove('loading');
                }, 2000);
            }
        });
        
        // Real-time form validation
        const inputs = contactForm.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', validateInput);
            input.addEventListener('input', clearValidation);
        });
    }
}

// Form Validation
function validateInput(e) {
    const input = e.target;
    const value = input.value.trim();
    
    clearValidation(e);
    
    if (input.hasAttribute('required') && !value) {
        showFieldError(input, 'This field is required');
        return false;
    }
    
    if (input.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            showFieldError(input, 'Please enter a valid email address');
            return false;
        }
    }
    
    showFieldSuccess(input);
    return true;
}

function clearValidation(e) {
    const input = e.target;
    input.style.borderColor = '';
    input.style.boxShadow = '';
    
    const existingError = input.parentElement.querySelector('.field-error');
    if (existingError) {
        existingError.remove();
    }
}

function showFieldError(input, message) {
    input.style.borderColor = '#ef4444';
    input.style.boxShadow = '0 0 0 3px rgba(239, 68, 68, 0.1)';
    
    const errorElement = document.createElement('div');
    errorElement.className = 'field-error';
    errorElement.style.color = '#ef4444';
    errorElement.style.fontSize = '0.875rem';
    errorElement.style.marginTop = '0.5rem';
    errorElement.textContent = message;
    
    input.parentElement.appendChild(errorElement);
}

function showFieldSuccess(input) {
    input.style.borderColor = '#10b981';
    input.style.boxShadow = '0 0 0 3px rgba(16, 185, 129, 0.1)';
}

// Notification System
function showNotification(message, type = 'info') {
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Notification styles
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        background: type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#6366f1',
        color: 'white',
        padding: '1rem 1.5rem',
        borderRadius: '0.5rem',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        zIndex: '10000',
        transform: 'translateX(100%)',
        transition: 'transform 0.3s ease',
        maxWidth: '400px'
    });
    
    document.body.appendChild(notification);
    
    // Animate in
    requestAnimationFrame(() => {
        notification.style.transform = 'translateX(0)';
    });
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => removeNotification(notification));
    
    // Auto remove after 5 seconds
    setTimeout(() => removeNotification(notification), 5000);
}

function removeNotification(notification) {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 300);
}

// Parallax Effects
function initParallaxEffects() {
    const hero = document.querySelector('.hero');
    const decorativeCircles = document.querySelector('.decorative-circles');
    
    if (hero && decorativeCircles) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.1;
            
            if (scrolled < hero.offsetHeight) {
                decorativeCircles.style.transform = `translateY(${rate}px)`;
            }
        });
    }
    
    // Hero elements parallax
    const parallaxElements = document.querySelectorAll('.hero-content, .company-name');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        parallaxElements.forEach(element => {
            const rate = scrolled * -0.05;
            if (scrolled < window.innerHeight) {
                element.style.transform = `translateY(${rate}px)`;
            }
        });
    });
}

// Card Animations and Interactions
function initCardAnimations() {
    // Enhanced card hover effects
    const cards = document.querySelectorAll('.vmv-card, .service-card, .capability-card, .leader-card, .why-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
        
        // Add ripple effect on click
        card.addEventListener('click', function(e) {
            addRippleEffect(e, this);
        });
    });
    
    // Icon hover animations
    const icons = document.querySelectorAll('.nav-logo, .icon-circle, .vmv-icon, .service-icon, .why-icon, .contact-icon');
    
    icons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(5deg)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
}

// Add ripple effect to buttons and cards
function addRippleEffect(e, element) {
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.className = 'ripple';
    
    Object.assign(ripple.style, {
        position: 'absolute',
        borderRadius: '50%',
        background: 'rgba(255, 140, 66, 0.3)',
        transform: 'scale(0)',
        animation: 'ripple 0.6s linear',
        pointerEvents: 'none'
    });
    
    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(ripple);
    
    setTimeout(() => {
        if (ripple.parentElement) {
            ripple.remove();
        }
    }, 600);
}

// Add CSS animations if not present
if (!document.querySelector('#ripple-styles')) {
    const style = document.createElement('style');
    style.id = 'ripple-styles';
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(2);
                opacity: 0;
            }
        }
        .loading {
            opacity: 0.7;
            pointer-events: none;
            position: relative;
        }
        
        .loading::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 20px;
            height: 20px;
            margin: -10px 0 0 -10px;
            border: 2px solid transparent;
            border-top: 2px solid var(--color-orange);
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }
        
        /* Skeleton Loading States */
        .skeleton {
            background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
            background-size: 200% 100%;
            animation: skeleton-loading 1.5s infinite;
        }
        
        @keyframes skeleton-loading {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
        }
        
        .skeleton-text {
            height: 1rem;
            margin-bottom: 0.5rem;
            border-radius: 4px;
        }
        
        .skeleton-text.short { width: 60%; }
        .skeleton-text.medium { width: 80%; }
        .skeleton-text.long { width: 100%; }
        
        .skeleton-card {
            padding: 1.5rem;
            border-radius: 10px;
            background: white;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
    `;
    document.head.appendChild(style);
}

// Performance optimization using debounce
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimize scroll events
window.addEventListener('scroll', debounce(() => {
    // Scroll-based functionality
}, 16)); // ~60fps

// Hero Title Animation
function initHeroAnimation() {
    const heroTitle = document.querySelector('.hero-title');
    const heroContent = document.querySelector('.hero-content');
    
    if (heroTitle && heroContent) {
        // Animate hero elements on load
        setTimeout(() => {
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 300);
    }
}

// Initialize hero animation
initHeroAnimation();

// Image Loading with Skeleton
function initImageLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    images.forEach(img => {
        // Add skeleton placeholder
        const skeleton = document.createElement('div');
        skeleton.className = 'skeleton';
        skeleton.style.width = '100%';
        skeleton.style.height = img.offsetHeight + 'px';
        skeleton.style.borderRadius = '10px';
        
        img.parentNode.insertBefore(skeleton, img);
        img.style.display = 'none';
        
        img.onload = () => {
            skeleton.remove();
            img.style.display = 'block';
            img.style.opacity = '0';
            img.style.transition = 'opacity 0.3s ease';
            setTimeout(() => {
                img.style.opacity = '1';
            }, 100);
        };
        
        img.onerror = () => {
            skeleton.remove();
            img.style.display = 'block';
        };
    });
}

// Initialize image loading
initImageLoading();

    // Project Modal Functionality
    function initProjectModal() {
        const modal = document.getElementById('project-modal');
        const closeBtn = document.querySelector('.modal-close');
        const galleryItems = document.querySelectorAll('.gallery-item');
        
        // Project data
        const projectData = {
            'lobatse-wastewater': {
                title: 'Lobatse & Goodhope Wastewater Infrastructure',
                company: 'Agnoat Construction Pty Ltd',
                period: 'July 2024 - June 2025',
                image: 'lobatse-goodhope.jpg',
                description: 'Rehabilitation of critical wastewater infrastructure in Lobatse and Goodhope regions, ensuring proper sanitation and environmental protection for local communities.',
                responsibilities: [
                    'Lead on-site operations ensuring project guidelines and timelines are met',
                    'Supervise all construction activities and manage crew assignments',
                    'Enforce strict compliance with safety and quality standards',
                    'Coordinate with project management and stakeholders',
                    'Monitor progress and ensure timely completion'
                ],
                type: 'Wastewater Infrastructure',
                location: 'Lobatse & Goodhope, Botswana',
                duration: '12 months',
                team: '15-20 workers',
                community: '50,000+ residents',
                economic: 'Improved sanitation infrastructure',
                quality: 'Exceeded environmental standards',
                achievements: [
                    'Completed 2 months ahead of schedule',
                    'Zero environmental incidents',
                    '100% client satisfaction rating'
                ]
            },
            'palapye-water': {
                title: 'Palapye-Mmamashia Water Transfer Project',
                company: 'China Harbour Engineering / Pioneer Engineering JV',
                period: 'July 2023 - June 2024',
                image: 'palapye-mmamashia.jpg',
                description: 'Major water transfer infrastructure project including Mahalapye-Masama Pipeline (NSC2.2) to improve water supply reliability across the region.',
                responsibilities: [
                    'Managed daily site operations and coordinated with project management',
                    'Supervised pipeline construction teams, ensuring precision and efficiency',
                    'Maintained a safe and hazard-free work environment',
                    'Oversaw material handling and logistics coordination',
                    'Ensured compliance with engineering specifications'
                ],
                type: 'Water Transfer Infrastructure',
                location: 'Palapye-Mmamashia, Botswana',
                duration: '12 months',
                team: '25-30 workers'
            },
            'selebi-water': {
                title: 'Selebi Phikwe-Serule Water Transfer Scheme',
                company: 'Sharps Construction',
                period: 'June 2021 - February 2023',
                image: 'selebi-phikwe-serule.jpg',
                description: 'National water transfer scheme project providing critical water infrastructure to connect Selebi Phikwe and Serule regions.',
                responsibilities: [
                    'Oversaw all foreman duties for a major national water transfer project',
                    'Coordinated logistics, material handling, and team scheduling',
                    'Managed construction teams and ensured quality standards',
                    'Liaised with government officials and project stakeholders',
                    'Monitored project progress and budget compliance'
                ],
                type: 'National Water Transfer Scheme',
                location: 'Selebi Phikwe-Serule, Botswana',
                duration: '20 months',
                team: '30-40 workers'
            },
            'mogonono-pump': {
                title: 'Mogonono Booster Pump Station',
                company: 'Bulongo Projects',
                period: 'January 2019 - 2021',
                image: 'mogonono-pump.jpg',
                description: 'Design, supply, construction and commissioning of a booster pump station and 75m³ galvanized steel tank on 15m stand at Mogonono.',
                responsibilities: [
                    'Led multiple projects involving transmission lines and office blocks',
                    'Managed water treatment plants and pre-paid water systems',
                    'Oversaw full project lifecycle from site preparation to commissioning',
                    'Coordinated with design teams and engineering consultants',
                    'Ensured compliance with water quality standards'
                ],
                type: 'Water Infrastructure & Pump Station',
                location: 'Mogonono, Botswana',
                duration: '24 months',
                team: '20-25 workers'
            },
            'kagiso-school': {
                title: 'Kagiso Senior Secondary School',
                company: 'China State Construction and Engineering Corporation',
                period: 'February 1999 - 2006',
                image: 'kagiso-school.jpg',
                description: 'Educational infrastructure development including school buildings, facilities, and supporting infrastructure for the Kagiso community.',
                responsibilities: [
                    'Supervised civil works and infrastructure construction',
                    'Managed water and sewer reticulation systems',
                    'Oversaw building construction and finishing works',
                    'Coordinated with educational authorities and stakeholders',
                    'Ensured compliance with building codes and safety standards'
                ],
                type: 'Educational Infrastructure',
                location: 'Kagiso, Botswana',
                duration: '7 years',
                team: '15-20 workers'
            },
            'high-court': {
                title: 'High Court Lobatse',
                company: 'Euro Construction',
                period: 'May 1991 - 1993',
                image: 'high-court-lobatse-new.jpg',
                description: 'Government infrastructure project including the construction of the High Court building with complete plumbing and sanitary systems.',
                responsibilities: [
                    'Managed plumbing, sanitary fittings, and pipe-laying crews',
                    'Oversaw sewerage and water reticulation installation',
                    'Coordinated with architectural and engineering teams',
                    'Ensured compliance with government building standards',
                    'Supervised concrete storm water pipe installation'
                ],
                type: 'Government Infrastructure',
                location: 'Lobatse, Botswana',
                duration: '24 months',
                team: '10-15 workers'
            }
        };
        
        // Open modal function
        function openModal(projectId) {
            const project = projectData[projectId];
            if (!project) return;
            
            // Update modal content
            document.getElementById('modal-title').textContent = project.title;
            document.getElementById('modal-company').textContent = project.company;
            document.getElementById('modal-period').textContent = project.period;
            document.getElementById('modal-img').src = project.image;
            document.getElementById('modal-img').alt = project.title;
            document.getElementById('modal-description').textContent = project.description;
            document.getElementById('modal-type').textContent = project.type;
            document.getElementById('modal-location').textContent = project.location;
            document.getElementById('modal-duration').textContent = project.duration;
            document.getElementById('modal-team').textContent = project.team;
            
            // Update responsibilities list
            const responsibilitiesList = document.getElementById('modal-responsibilities');
            responsibilitiesList.innerHTML = '';
            project.responsibilities.forEach(responsibility => {
                const li = document.createElement('li');
                li.textContent = responsibility;
                responsibilitiesList.appendChild(li);
            });
            
            // Update impact data
            document.getElementById('modal-community').textContent = project.community || 'Local communities';
            document.getElementById('modal-economic').textContent = project.economic || 'Significant development';
            document.getElementById('modal-quality').textContent = project.quality || 'Exceeded expectations';
            
            // Update achievements list
            const achievementsList = document.querySelector('.achievements-list');
            if (achievementsList && project.achievements) {
                achievementsList.innerHTML = '';
                project.achievements.forEach(achievement => {
                    const achievementItem = document.createElement('div');
                    achievementItem.className = 'achievement-item';
                    achievementItem.innerHTML = `
                        <i data-lucide="check-circle"></i>
                        <span>${achievement}</span>
                    `;
                    achievementsList.appendChild(achievementItem);
                });
                // Re-initialize icons for the new elements
                if (typeof lucide !== 'undefined') {
                    lucide.createIcons();
                }
            }
            
            // Show modal
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
        
        // Close modal function
        function closeModal() {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
        
        // Event listeners
        galleryItems.forEach(item => {
            item.addEventListener('click', () => {
                const projectId = item.getAttribute('data-project');
                openModal(projectId);
            });
        });
        
        closeBtn.addEventListener('click', closeModal);
        
        // Close modal when clicking outside
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
        
        // Close modal with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.style.display === 'block') {
                closeModal();
            }
        });
    }

    // Service Modal Functionality
    function initServiceModal() {
        const modal = document.getElementById('service-modal');
        const closeBtn = modal.querySelector('.modal-close');
        const serviceCards = document.querySelectorAll('.service-card');
        
        // Service data
        const serviceData = {
            'civil-infrastructure': {
                title: 'Civil & Infrastructure Construction',
                category: 'Infrastructure Development',
                tagline: 'Building Botswana\'s Future',
                image: 'civil-infrastructure.jpg',
                description: 'We specialize in developing durable infrastructure projects that meet growing demands for modernization. Our expertise covers roads, bridges, drainage systems, pipelines, and public facilities that form the backbone of Botswana\'s development.',
                features: [
                    'Roads, bridges, and drainage systems',
                    'Pipelines, water reticulation, and wastewater solutions',
                    'Civil structures and public facilities',
                    'Storm water management systems',
                    'Traffic infrastructure and signage'
                ],
                benefits: [
                    '30+ years of infrastructure experience',
                    'Government-approved contractors',
                    'Quality materials and modern techniques',
                    'Timely project completion',
                    'Comprehensive maintenance support'
                ],
                type: 'Civil Infrastructure',
                scale: 'Small to Large Scale',
                timeline: '3-24 months',
                expertise: 'Expert Level',
                steps: [
                    'Site survey and feasibility assessment',
                    'Detailed engineering design and planning',
                    'Construction with quality control monitoring',
                    'Testing, commissioning, and handover'
                ],
                testimonial: 'Vaggex Group transformed our community with their road construction project. The quality and professionalism exceeded our expectations.',
                author: 'Mr. John Motsumi',
                company: 'Lobatse City Council'
            },
            'building-construction': {
                title: 'Building Construction',
                category: 'Construction Services',
                tagline: 'Quality Structures, Lasting Value',
                image: 'building-construction.jpg',
                description: 'Delivering high-quality, safe, and functional structures across residential, commercial, and industrial sectors. From housing developments to institutional facilities, we build with precision and care.',
                features: [
                    'Housing developments and offices',
                    'Schools, clinics, and institutional facilities',
                    'Fit-outs, renovations, and expansions',
                    'Industrial and warehouse construction',
                    'Custom architectural solutions'
                ],
                benefits: [
                    'Licensed and certified builders',
                    'Energy-efficient construction methods',
                    'Modern safety standards compliance',
                    'Flexible design options',
                    'Post-construction support'
                ],
                type: 'Building Construction',
                scale: 'Residential to Commercial',
                timeline: '2-18 months',
                expertise: 'Professional Level'
            },
            'rehabilitation-maintenance': {
                title: 'Rehabilitation & Maintenance',
                category: 'Maintenance Services',
                tagline: 'Extending Infrastructure Life',
                image: 'rehab-maintenance.jpg',
                description: 'Extending the lifespan of infrastructure through professional care and refurbishment. Our maintenance services ensure your facilities remain safe, functional, and cost-effective.',
                features: [
                    'Preventive and corrective maintenance',
                    'Structural rehabilitation and facility upgrades',
                    'Plumbing, electrical, and general maintenance services',
                    'Emergency repair services',
                    'Facility condition assessments'
                ],
                benefits: [
                    '24/7 emergency response',
                    'Preventive maintenance programs',
                    'Cost-effective solutions',
                    'Skilled maintenance teams',
                    'Extended facility lifespan'
                ],
                type: 'Maintenance & Rehabilitation',
                scale: 'All Project Sizes',
                timeline: 'Ongoing/Flexible',
                expertise: 'Specialist Level'
            },
            'project-management': {
                title: 'Project Management & Consultancy',
                category: 'Professional Services',
                tagline: 'Expert Guidance, Successful Projects',
                image: 'project-management.jpg',
                description: 'Offering trusted expertise to ensure successful project execution. Our project management services cover every aspect from planning to completion, ensuring your project stays on time and within budget.',
                features: [
                    'Site supervision and quality control',
                    'Cost estimation, budgeting, and reporting',
                    'Design coordination and feasibility studies',
                    'Risk management and mitigation',
                    'Stakeholder communication and reporting'
                ],
                benefits: [
                    'Certified project managers',
                    'Proven project delivery methods',
                    'Real-time progress tracking',
                    'Cost optimization strategies',
                    'Risk-free project execution'
                ],
                type: 'Project Management',
                scale: 'All Project Sizes',
                timeline: 'Project Duration',
                expertise: 'Expert Level'
            }
        };
        
        // Open modal function
        function openServiceModal(serviceId) {
            const service = serviceData[serviceId];
            if (!service) return;
            
            // Update modal content
            document.getElementById('service-modal-title').textContent = service.title;
            document.getElementById('service-modal-category').textContent = service.category;
            document.getElementById('service-modal-tagline').textContent = service.tagline;
            document.getElementById('service-modal-img').src = service.image;
            document.getElementById('service-modal-img').alt = service.title;
            document.getElementById('service-modal-description').textContent = service.description;
            document.getElementById('service-modal-type').textContent = service.type;
            document.getElementById('service-modal-scale').textContent = service.scale;
            document.getElementById('service-modal-timeline').textContent = service.timeline;
            document.getElementById('service-modal-expertise').textContent = service.expertise;
            
            // Update features list
            const featuresList = document.getElementById('service-modal-features');
            featuresList.innerHTML = '';
            service.features.forEach(feature => {
                const li = document.createElement('li');
                li.textContent = feature;
                featuresList.appendChild(li);
            });
            
            // Update benefits list
            const benefitsList = document.getElementById('service-modal-benefits');
            benefitsList.innerHTML = '';
            service.benefits.forEach(benefit => {
                const li = document.createElement('li');
                li.textContent = benefit;
                benefitsList.appendChild(li);
            });
            
            // Update process steps
            if (service.steps) {
                service.steps.forEach((step, index) => {
                    const stepElement = document.getElementById(`service-modal-step-${index + 1}`);
                    if (stepElement) {
                        stepElement.textContent = step;
                    }
                });
            }
            
            // Update testimonial
            if (service.testimonial) {
                document.getElementById('service-modal-testimonial').textContent = service.testimonial;
                document.getElementById('service-modal-author').textContent = service.author || 'Client';
                document.getElementById('service-modal-company').textContent = service.company || 'Company';
            }
            
            // Show modal
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
        
        // Close modal function
        function closeServiceModal() {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
        
        // Event listeners
        serviceCards.forEach(card => {
            card.addEventListener('click', () => {
                const serviceId = card.getAttribute('data-service');
                openServiceModal(serviceId);
            });
        });
        
        closeBtn.addEventListener('click', closeServiceModal);
        
        // Close modal when clicking outside
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeServiceModal();
            }
        });
        
        // Close modal with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.style.display === 'block') {
                closeServiceModal();
            }
        });
        
        // Make closeServiceModal globally available
        window.closeServiceModal = closeServiceModal;
    }

    // Error Handling
    window.addEventListener('error', (e) => {
        console.error('JavaScript error occurred:', e.error);
    });
    
    window.addEventListener('unhandledrejection', (e) => {
        console.error('Unhandled promise rejection:', e.reason);
    });
})();


