/* ============================================
   CONFIGURATION - Easy to edit constants
   ============================================ */

const CONFIG = {
    brandName: 'Visual Studio',
    phone: '+1 (555) 0123',
    email: 'hello@visualstudio.com',
    formEndpoint: 'https://formspree.io/f/xxxxxxx', // Replace with your Formspree endpoint
    socialLinks: {
        instagram: 'https://instagram.com/yourhandle',
        tiktok: 'https://tiktok.com/@yourhandle',
        youtube: 'https://youtube.com/@yourhandle',
        linkedin: 'https://linkedin.com/company/yourhandle'
    },
    serviceArea: '100-mile radius from base location'
};

/* ============================================
   PORTFOLIO DATA - Replace images and titles
   ============================================ */

const PORTFOLIO_DATA = [
    { id: 1, title: 'Modern Luxury Home', category: 'real-estate', image: 'assets/img/portfolio/01.webp', description: 'Interior and exterior photography for luxury residential listing' },
    { id: 2, title: 'Downtown Office Space', category: 'business', image: 'assets/img/portfolio/02.webp', description: 'Corporate office photography for commercial real estate' },
    { id: 3, title: 'Aerial Property View', category: 'drone', image: 'assets/img/portfolio/03.webp', description: 'Drone photography showcasing property development' },
    { id: 4, title: 'Apartment Complex', category: 'real-estate', image: 'assets/img/portfolio/04.webp', description: 'Multi-unit residential property documentation' },
    { id: 5, title: 'Industrial Warehouse', category: 'business', image: 'assets/img/portfolio/05.webp', description: 'Large-scale industrial facility photography' },
    { id: 6, title: 'Residential Video Tour', category: 'real-estate', image: 'assets/img/portfolio/06.webp', description: 'Professional walkthrough video production' },
    { id: 7, title: 'Business Headshots', category: 'business', image: 'assets/img/portfolio/07.webp', description: 'Corporate headshot photography session' },
    { id: 8, title: 'Aerial Site Survey', category: 'drone', image: 'assets/img/portfolio/08.webp', description: 'Drone documentation for construction site' },
    { id: 9, title: 'Luxury Condo', category: 'real-estate', image: 'assets/img/portfolio/09.webp', description: 'High-end condominium interior photography' },
    { id: 10, title: 'Factory Interior', category: 'business', image: 'assets/img/portfolio/10.webp', description: 'Manufacturing facility documentation' },
    { id: 11, title: 'Property Development', category: 'drone', image: 'assets/img/portfolio/11.webp', description: 'Aerial view of new development project' },
    { id: 12, title: 'Commercial Building', category: 'business', image: 'assets/img/portfolio/12.webp', description: 'Exterior and interior commercial photography' }
];

/* ============================================
   UTILITY FUNCTIONS
   ============================================ */

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

function prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/* ============================================
   THEME TOGGLE
   ============================================ */

function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;
    
    // Get saved theme or default to light
    const savedTheme = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-theme', savedTheme);
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

/* ============================================
   NAVIGATION
   ============================================ */

function initNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.getElementById('navbar');
    
    // Mobile menu toggle
    navToggle.addEventListener('click', () => {
        const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', !isExpanded);
        navMenu.classList.toggle('open');
        
        // Focus trap
        if (!isExpanded) {
            const firstLink = navMenu.querySelector('a');
            if (firstLink) firstLink.focus();
        }
    });
    
    // Close menu on link click (mobile)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.setAttribute('aria-expanded', 'false');
            navMenu.classList.remove('open');
        });
    });
    
    // Close menu on ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('open')) {
            navToggle.setAttribute('aria-expanded', 'false');
            navMenu.classList.remove('open');
            navToggle.focus();
        }
    });
    
    // Navbar scroll effect
    const handleScroll = debounce(() => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }, 10);
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Scrollspy - highlight active nav link
    initScrollSpy();
}

function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    const handleScrollSpy = debounce(() => {
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, 100);
    
    window.addEventListener('scroll', handleScrollSpy);
    handleScrollSpy(); // Initial check
}

/* ============================================
   PORTFOLIO
   ============================================ */

function initPortfolio() {
    const portfolioGrid = document.getElementById('portfolioGrid');
    const filterButtons = document.querySelectorAll('.filter-btn');
    let currentFilter = 'all';
    let currentLightboxIndex = 0;
    let filteredItems = PORTFOLIO_DATA;
    
    // Render portfolio items
    function renderPortfolio(items) {
        portfolioGrid.innerHTML = '';
        
        items.forEach((item, index) => {
            const portfolioItem = document.createElement('div');
            portfolioItem.className = 'portfolio-item fade-in';
            portfolioItem.setAttribute('role', 'listitem');
            portfolioItem.setAttribute('data-index', index);
            portfolioItem.setAttribute('tabindex', '0');
            
            portfolioItem.innerHTML = `
                <img src="${item.image}" alt="${item.title}" loading="lazy" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'300\'%3E%3Crect fill=\'%23f3f4f6\' width=\'400\' height=\'300\'/%3E%3Ctext fill=\'%239ca3af\' font-family=\'sans-serif\' font-size=\'18\' x=\'50%25\' y=\'50%25\' text-anchor=\'middle\' dominant-baseline=\'middle\'%3E${encodeURIComponent(item.title)}%3C/text%3E%3C/svg%3E'">
                <div class="portfolio-item-overlay">
                    <div class="portfolio-item-title">${item.title}</div>
                    <div class="portfolio-item-category">${item.category.replace('-', ' ')}</div>
                </div>
            `;
            
            portfolioItem.addEventListener('click', () => openLightbox(index, items));
            portfolioItem.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openLightbox(index, items);
                }
            });
            
            portfolioGrid.appendChild(portfolioItem);
        });
        
        // Trigger fade-in animation
        if (!prefersReducedMotion()) {
            setTimeout(() => {
                document.querySelectorAll('.portfolio-item').forEach((item, i) => {
                    setTimeout(() => {
                        item.classList.add('visible');
                    }, i * 50);
                });
            }, 100);
        } else {
            document.querySelectorAll('.portfolio-item').forEach(item => {
                item.classList.add('visible');
            });
        }
    }
    
    // Filter functionality
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            currentFilter = btn.getAttribute('data-filter');
            
            // Update active state
            filterButtons.forEach(b => {
                b.classList.remove('active');
                b.setAttribute('aria-selected', 'false');
            });
            btn.classList.add('active');
            btn.setAttribute('aria-selected', 'true');
            
            // Filter items
            if (currentFilter === 'all') {
                filteredItems = PORTFOLIO_DATA;
            } else {
                filteredItems = PORTFOLIO_DATA.filter(item => item.category === currentFilter);
            }
            
            renderPortfolio(filteredItems);
        });
    });
    
    // Initial render
    renderPortfolio(PORTFOLIO_DATA);
    
    // Lightbox functionality
    function openLightbox(index, items) {
        currentLightboxIndex = index;
        const item = items[index];
        const lightbox = document.getElementById('lightbox');
        const lightboxImage = document.getElementById('lightboxImage');
        const lightboxTitle = document.getElementById('lightboxTitle');
        const lightboxDescription = document.getElementById('lightboxDescription');
        
        lightboxImage.src = item.image;
        lightboxImage.alt = item.title;
        lightboxTitle.textContent = item.title;
        lightboxDescription.textContent = item.description;
        
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        
        // Focus management
        document.getElementById('lightboxClose').focus();
    }
    
    function closeLightbox() {
        const lightbox = document.getElementById('lightbox');
        lightbox.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }
    
    function navigateLightbox(direction) {
        const items = filteredItems;
        if (direction === 'next') {
            currentLightboxIndex = (currentLightboxIndex + 1) % items.length;
        } else {
            currentLightboxIndex = (currentLightboxIndex - 1 + items.length) % items.length;
        }
        openLightbox(currentLightboxIndex, items);
    }
    
    // Lightbox controls
    document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
    document.getElementById('lightboxPrev').addEventListener('click', () => navigateLightbox('prev'));
    document.getElementById('lightboxNext').addEventListener('click', () => navigateLightbox('next'));
    
    // Close on backdrop click
    document.getElementById('lightbox').addEventListener('click', (e) => {
        if (e.target.id === 'lightbox') {
            closeLightbox();
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        const lightbox = document.getElementById('lightbox');
        if (lightbox.getAttribute('aria-hidden') === 'false') {
            if (e.key === 'Escape') {
                closeLightbox();
            } else if (e.key === 'ArrowLeft') {
                navigateLightbox('prev');
            } else if (e.key === 'ArrowRight') {
                navigateLightbox('next');
            }
        }
    });
}

/* ============================================
   SCROLL ANIMATIONS
   ============================================ */

function initScrollAnimations() {
    if (prefersReducedMotion()) return;
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe sections and cards
    document.querySelectorAll('.service-card, .process-step, .testimonial-card, .faq-item').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

/* ============================================
   FAQ ACCORDION
   ============================================ */

function initFAQ() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const isExpanded = question.getAttribute('aria-expanded') === 'true';
            const faqItem = question.closest('.faq-item');
            
            // Close all other items
            faqQuestions.forEach(q => {
                if (q !== question) {
                    q.setAttribute('aria-expanded', 'false');
                }
            });
            
            // Toggle current item
            question.setAttribute('aria-expanded', !isExpanded);
        });
        
        // Keyboard support
        question.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                question.click();
            }
        });
    });
}

/* ============================================
   CONTACT FORM
   ============================================ */

function initContactForm() {
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    
    // Validation
    function validateField(field, errorElement) {
        const value = field.value.trim();
        let isValid = true;
        let errorMsg = '';
        
        if (field.hasAttribute('required') && !value) {
            isValid = false;
            errorMsg = 'This field is required';
        } else if (field.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                errorMsg = 'Please enter a valid email address';
            }
        }
        
        if (isValid) {
            field.classList.remove('error');
            errorElement.textContent = '';
        } else {
            field.classList.add('error');
            errorElement.textContent = errorMsg;
        }
        
        return isValid;
    }
    
    // Real-time validation
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const messageField = document.getElementById('message');
    
    nameField.addEventListener('blur', () => validateField(nameField, document.getElementById('nameError')));
    emailField.addEventListener('blur', () => validateField(emailField, document.getElementById('emailError')));
    messageField.addEventListener('blur', () => validateField(messageField, document.getElementById('messageError')));
    
    // Form submission
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Validate all fields
        const isNameValid = validateField(nameField, document.getElementById('nameError'));
        const isEmailValid = validateField(emailField, document.getElementById('emailError'));
        const isMessageValid = validateField(messageField, document.getElementById('messageError'));
        
        if (!isNameValid || !isEmailValid || !isMessageValid) {
            formMessage.className = 'form-message error';
            formMessage.textContent = 'Please fix the errors above';
            formMessage.style.display = 'block';
            return;
        }
        
        // Show loading state
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        formMessage.style.display = 'none';
        
        try {
            const formData = new FormData(form);
            const response = await fetch(CONFIG.formEndpoint, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                formMessage.className = 'form-message success';
                formMessage.textContent = 'Thank you! Your message has been sent. We\'ll get back to you soon.';
                formMessage.style.display = 'block';
                form.reset();
                
                // Scroll to message
                formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            formMessage.className = 'form-message error';
            formMessage.textContent = 'Sorry, there was an error sending your message. Please try again or contact us directly.';
            formMessage.style.display = 'block';
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        }
    });
}

/* ============================================
   MOBILE BOTTOM BAR
   ============================================ */

function initMobileBar() {
    const mobileBar = document.getElementById('mobileBar');
    const hero = document.getElementById('hero');
    
    const handleScroll = debounce(() => {
        if (window.innerWidth <= 768) {
            const heroBottom = hero.offsetTop + hero.offsetHeight;
            if (window.scrollY > heroBottom - 100) {
                mobileBar.style.display = 'flex';
            } else {
                mobileBar.style.display = 'none';
            }
        } else {
            mobileBar.style.display = 'none';
        }
    }, 100);
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll(); // Initial check
}

/* ============================================
   INITIALIZATION
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    initThemeToggle();
    initNavigation();
    initPortfolio();
    initScrollAnimations();
    initFAQ();
    initContactForm();
    initMobileBar();
    
    // Log ready state
    console.log(`${CONFIG.brandName} website loaded successfully`);
});
