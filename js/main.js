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
   TRANSLATIONS - English and Polish
   ============================================ */

const TRANSLATIONS = {
    en: {
        nav: {
            services: 'Services',
            portfolio: 'Portfolio',
            process: 'Process',
            testimonials: 'Testimonials',
            faq: 'FAQ',
            contact: 'Contact',
            getQuote: 'Get a quote'
        },
        hero: {
            title: 'Photo & video that sells property.',
            subtitle: 'Professional imagery for developers, agents, and businesses',
            getQuote: 'Get a quote',
            seePortfolio: 'See portfolio',
            turnaround: '24–72h turnaround',
            droneCertified: 'Drone certified',
            licensing: 'Full licensing rights'
        },
        services: {
            title: 'Services',
            subtitle: 'Comprehensive visual solutions for your property and business needs',
            realEstate: {
                title: 'Real Estate Photography',
                items: ['Interior & exterior shots', 'Virtual staging ready', 'HDR & natural light', 'MLS-optimized delivery'],
                link: 'Ask about availability'
            },
            video: {
                title: 'Property Video & Reels',
                items: ['Walkthrough videos', 'Social media reels', 'Professional editing', 'Music & voiceover options'],
                link: 'Ask about availability'
            },
            business: {
                title: 'Business & Industrial',
                items: ['Office spaces', 'Factories & warehouses', 'Corporate headshots', 'Brand documentation'],
                link: 'Ask about availability'
            },
            drone: {
                title: 'Drone Photography',
                items: ['Aerial property views', 'Site documentation', '4K video capability', 'FAA Part 107 certified'],
                link: 'Ask about availability'
            }
        },
        portfolio: {
            title: 'Portfolio',
            subtitle: 'Recent work across real estate, commercial, and aerial projects',
            filters: {
                all: 'All',
                realEstate: 'Real Estate',
                business: 'Business',
                drone: 'Drone'
            },
            items: {
                item1: { title: 'Modern Luxury Home', description: 'Interior and exterior photography for luxury residential listing' },
                item2: { title: 'Downtown Office Space', description: 'Corporate office photography for commercial real estate' },
                item3: { title: 'Aerial Property View', description: 'Drone photography showcasing property development' },
                item4: { title: 'Apartment Complex', description: 'Multi-unit residential property documentation' },
                item5: { title: 'Industrial Warehouse', description: 'Large-scale industrial facility photography' },
                item6: { title: 'Residential Video Tour', description: 'Professional walkthrough video production' },
                item7: { title: 'Business Headshots', description: 'Corporate headshot photography session' },
                item8: { title: 'Aerial Site Survey', description: 'Drone documentation for construction site' },
                item9: { title: 'Luxury Condo', description: 'High-end condominium interior photography' },
                item10: { title: 'Factory Interior', description: 'Manufacturing facility documentation' },
                item11: { title: 'Property Development', description: 'Aerial view of new development project' },
                item12: { title: 'Commercial Building', description: 'Exterior and interior commercial photography' }
            }
        },
        process: {
            title: 'How It Works',
            subtitle: 'A streamlined process from inquiry to delivery',
            step1: {
                title: 'Consultation',
                description: 'We discuss your project needs, timeline, and deliverables to create a tailored plan.'
            },
            step2: {
                title: 'Shoot',
                description: 'On-site capture with professional equipment, ensuring every angle and detail is covered.'
            },
            step3: {
                title: 'Editing',
                description: 'Professional post-processing, color correction, and optimization for your intended use.'
            },
            step4: {
                title: 'Delivery',
                description: 'Fast turnaround with high-resolution files delivered via secure cloud link, ready to use.'
            }
        },
        testimonials: {
            title: 'What Clients Say',
            subtitle: 'Trusted by developers, agents, and business owners',
            testimonial1: {
                text: '"The quality of the photos exceeded our expectations. Every listing we\'ve used their work for has seen faster showings and offers."',
                author: 'Sarah Chen',
                role: 'Marketing Manager, Real Estate Development',
                result: 'Result: 40% faster listing sales'
            },
            testimonial2: {
                text: '"Professional, punctual, and the final deliverables were exactly what we needed for our corporate website and marketing materials."',
                author: 'Michael Rodriguez',
                role: 'Operations Director, Industrial Facility',
                result: 'Result: Enhanced brand presence'
            },
            testimonial3: {
                text: '"The drone footage gave us a competitive edge. The aerial perspective showcased our property development in a way that static photos couldn\'t."',
                author: 'David Park',
                role: 'Real Estate Agent, Luxury Properties',
                result: 'Result: 3x more online engagement'
            }
        },
        faq: {
            title: 'Frequently Asked Questions',
            subtitle: 'Common questions about our services and process',
            q1: {
                question: 'What\'s the typical turnaround time?',
                answer: 'Standard delivery is 24–72 hours after the shoot, depending on project scope. Rush delivery (12–24 hours) is available for an additional fee. Video projects typically require 3–5 business days for editing.'
            },
            q2: {
                question: 'How do you handle pricing?',
                answer: 'Pricing is project-based and depends on property size, number of shots, video length, and specific requirements. We provide detailed quotes after understanding your needs. Packages are available for recurring clients.'
            },
            q3: {
                question: 'What do I need to prepare before the shoot?',
                answer: 'For real estate: ensure the property is clean, staged (if applicable), and all lights are working. For businesses: coordinate access, notify staff, and identify key areas to highlight. We\'ll send a preparation checklist before your shoot date.'
            },
            q4: {
                question: 'What are the licensing terms?',
                answer: 'All deliverables include full commercial licensing rights for marketing, advertising, and listing purposes. You own the usage rights for the images/videos you receive. We retain copyright but grant you unlimited use within the agreed scope.'
            },
            q5: {
                question: 'Do you travel for shoots?',
                answer: 'Yes, we serve a 100-mile radius from our base location. Travel fees apply for distances over 50 miles. For projects beyond this range, we can discuss custom arrangements. All travel costs are transparently included in your quote.'
            }
        },
        contact: {
            title: 'Get In Touch',
            subtitle: 'Ready to discuss your project? Let\'s talk.',
            phone: 'Phone',
            email: 'Email',
            serviceArea: 'Service Area',
            serviceAreaText: '100-mile radius from base location',
            form: {
                name: 'Name',
                email: 'Email',
                phone: 'Phone',
                message: 'Message',
                send: 'Send Message',
                required: '*',
                sending: 'Sending...',
                success: 'Thank you! Your message has been sent. We\'ll get back to you soon.',
                error: 'Sorry, there was an error sending your message. Please try again or contact us directly.',
                errorField: 'Please fix the errors above',
                errorName: 'This field is required',
                errorEmail: 'Please enter a valid email address'
            }
        },
        footer: {
            copyright: '© 2024 Visual Studio. All rights reserved.'
        },
        mobile: {
            call: 'Call',
            email: 'Email',
            quote: 'Quote'
        }
    },
    pl: {
        nav: {
            services: 'Usługi',
            portfolio: 'Portfolio',
            process: 'Proces',
            testimonials: 'Opinie',
            faq: 'FAQ',
            contact: 'Kontakt',
            getQuote: 'Zapytaj o ofertę'
        },
        hero: {
            title: 'Zdjęcia i filmy, które sprzedają nieruchomości.',
            subtitle: 'Profesjonalne obrazy dla deweloperów, agentów i firm',
            getQuote: 'Zapytaj o ofertę',
            seePortfolio: 'Zobacz portfolio',
            turnaround: 'Realizacja 24–72h',
            droneCertified: 'Certyfikowany dron',
            licensing: 'Pełne prawa licencyjne'
        },
        services: {
            title: 'Usługi',
            subtitle: 'Kompleksowe rozwiązania wizualne dla Twoich potrzeb związanych z nieruchomościami i biznesem',
            realEstate: {
                title: 'Fotografia Nieruchomości',
                items: ['Zdjęcia wnętrz i zewnętrz', 'Gotowe do wirtualnego wystroju', 'HDR i światło naturalne', 'Dostosowane do MLS'],
                link: 'Zapytaj o dostępność'
            },
            video: {
                title: 'Filmy i Reels Nieruchomości',
                items: ['Filmy spacerowe', 'Reels do mediów społecznościowych', 'Profesjonalna edycja', 'Muzyka i lektorskie opcje'],
                link: 'Zapytaj o dostępność'
            },
            business: {
                title: 'Biznes i Przemysł',
                items: ['Przestrzenie biurowe', 'Fabryki i magazyny', 'Zdjęcia korporacyjne', 'Dokumentacja marki'],
                link: 'Zapytaj o dostępność'
            },
            drone: {
                title: 'Fotografia Dronem',
                items: ['Widoki z lotu ptaka', 'Dokumentacja terenu', 'Wideo 4K', 'Certyfikat FAA Part 107'],
                link: 'Zapytaj o dostępność'
            }
        },
        portfolio: {
            title: 'Portfolio',
            subtitle: 'Najnowsze projekty z zakresu nieruchomości, komercyjne i lotnicze',
            filters: {
                all: 'Wszystkie',
                realEstate: 'Nieruchomości',
                business: 'Biznes',
                drone: 'Dron'
            },
            items: {
                item1: { title: 'Nowoczesny Dom Luksusowy', description: 'Fotografia wnętrz i zewnętrz dla luksusowej oferty mieszkaniowej' },
                item2: { title: 'Biuro w Centrum', description: 'Fotografia biurowa dla nieruchomości komercyjnych' },
                item3: { title: 'Widok Nieruchomości z Lotu Ptaka', description: 'Fotografia dronem prezentująca rozwój nieruchomości' },
                item4: { title: 'Kompleks Mieszkaniowy', description: 'Dokumentacja wielorodzinnej nieruchomości mieszkaniowej' },
                item5: { title: 'Magazyn Przemysłowy', description: 'Fotografia dużego obiektu przemysłowego' },
                item6: { title: 'Wideo Spacerowe Mieszkaniowe', description: 'Profesjonalna produkcja filmów spacerowych' },
                item7: { title: 'Zdjęcia Korporacyjne', description: 'Sesja zdjęciowa portretów korporacyjnych' },
                item8: { title: 'Inspekcja Terenu z Drona', description: 'Dokumentacja dronem placu budowy' },
                item9: { title: 'Luksusowe Mieszkanie', description: 'Fotografia wnętrz luksusowego mieszkania' },
                item10: { title: 'Wnętrze Fabryki', description: 'Dokumentacja zakładu produkcyjnego' },
                item11: { title: 'Rozwój Nieruchomości', description: 'Widok z lotu ptaka nowego projektu deweloperskiego' },
                item12: { title: 'Budynek Komercyjny', description: 'Fotografia zewnętrzna i wewnętrzna nieruchomości komercyjnej' }
            }
        },
        process: {
            title: 'Jak to Działa',
            subtitle: 'Uproszczony proces od zapytania do dostawy',
            step1: {
                title: 'Konsultacja',
                description: 'Omawiamy potrzeby projektu, harmonogram i rezultaty, aby stworzyć spersonalizowany plan.'
            },
            step2: {
                title: 'Sesja',
                description: 'Ujęcia na miejscu z profesjonalnym sprzętem, zapewniając pokrycie każdego kąta i szczegółu.'
            },
            step3: {
                title: 'Edycja',
                description: 'Profesjonalna obróbka, korekta kolorów i optymalizacja do zamierzonego użycia.'
            },
            step4: {
                title: 'Dostawa',
                description: 'Szybka realizacja z plikami wysokiej rozdzielczości dostarczonymi przez bezpieczne łącze w chmurze, gotowe do użycia.'
            }
        },
        testimonials: {
            title: 'Co Mówią Klienci',
            subtitle: 'Zaufali nam deweloperzy, agenci i właściciele firm',
            testimonial1: {
                text: '"Jakość zdjęć przekroczyła nasze oczekiwania. Każda oferta, w której wykorzystaliśmy ich pracę, przyniosła szybsze pokazy i oferty."',
                author: 'Sarah Chen',
                role: 'Kierownik Marketingu, Rozwój Nieruchomości',
                result: 'Rezultat: 40% szybsza sprzedaż ofert'
            },
            testimonial2: {
                text: '"Profesjonalni, punktualni, a finalne rezultaty były dokładnie tym, czego potrzebowaliśmy do naszej strony korporacyjnej i materiałów marketingowych."',
                author: 'Michael Rodriguez',
                role: 'Dyrektor Operacyjny, Obiekt Przemysłowy',
                result: 'Rezultat: Wzmocniona obecność marki'
            },
            testimonial3: {
                text: '"Materiał z drona dał nam przewagę konkurencyjną. Perspektywa z lotu ptaka zaprezentowała nasz rozwój nieruchomości w sposób, w jaki statyczne zdjęcia nie mogły."',
                author: 'David Park',
                role: 'Agent Nieruchomości, Nieruchomości Luksusowe',
                result: 'Rezultat: 3x więcej zaangażowania online'
            }
        },
        faq: {
            title: 'Często Zadawane Pytania',
            subtitle: 'Typowe pytania dotyczące naszych usług i procesu',
            q1: {
                question: 'Jaki jest typowy czas realizacji?',
                answer: 'Standardowa dostawa to 24–72 godziny po sesji, w zależności od zakresu projektu. Ekspresowa dostawa (12–24 godziny) jest dostępna za dodatkową opłatą. Projekty wideo zazwyczaj wymagają 3–5 dni roboczych na edycję.'
            },
            q2: {
                question: 'Jak wygląda wycena?',
                answer: 'Ceny są ustalane indywidualnie dla projektu i zależą od wielkości nieruchomości, liczby ujęć, długości wideo i konkretnych wymagań. Oferujemy szczegółowe wyceny po zrozumieniu Twoich potrzeb. Pakiety są dostępne dla stałych klientów.'
            },
            q3: {
                question: 'Co muszę przygotować przed sesją?',
                answer: 'Dla nieruchomości: upewnij się, że nieruchomość jest czysta, wystylizowana (jeśli dotyczy) i wszystkie światła działają. Dla firm: skoordynuj dostęp, powiadom personel i określ kluczowe obszary do podkreślenia. Wyślemy listę kontrolną przed datą sesji.'
            },
            q4: {
                question: 'Jakie są warunki licencyjne?',
                answer: 'Wszystkie rezultaty obejmują pełne prawa licencyjne komercyjne do celów marketingowych, reklamowych i ofertowych. Posiadasz prawa użytkowania do otrzymanych zdjęć/filmów. Zachowujemy prawa autorskie, ale udzielamy nieograniczonego użycia w uzgodnionym zakresie.'
            },
            q5: {
                question: 'Czy podróżujecie na sesje?',
                answer: 'Tak, obsługujemy obszar w promieniu 100 mil od naszej lokalizacji bazowej. Opłaty za podróż obowiązują dla odległości powyżej 50 mil. Dla projektów poza tym zakresem możemy omówić indywidualne ustalenia. Wszystkie koszty podróży są przejrzyście uwzględnione w wycenie.'
            }
        },
        contact: {
            title: 'Skontaktuj Się',
            subtitle: 'Gotowy omówić swój projekt? Porozmawiajmy.',
            phone: 'Telefon',
            email: 'Email',
            serviceArea: 'Obszar Obsługi',
            serviceAreaText: 'Promień 100 mil od lokalizacji bazowej',
            form: {
                name: 'Imię',
                email: 'Email',
                phone: 'Telefon',
                message: 'Wiadomość',
                send: 'Wyślij Wiadomość',
                required: '*',
                sending: 'Wysyłanie...',
                success: 'Dziękujemy! Twoja wiadomość została wysłana. Wkrótce się skontaktujemy.',
                error: 'Przepraszamy, wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie lub skontaktuj się z nami bezpośrednio.',
                errorField: 'Proszę poprawić błędy powyżej',
                errorName: 'To pole jest wymagane',
                errorEmail: 'Proszę podać prawidłowy adres email'
            }
        },
        footer: {
            copyright: '© 2024 Visual Studio. Wszelkie prawa zastrzeżone.'
        },
        mobile: {
            call: 'Zadzwoń',
            email: 'Email',
            quote: 'Oferta'
        }
    }
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
   LANGUAGE SYSTEM
   ============================================ */

let currentLang = localStorage.getItem('language') || 'en';

function translate(key, lang = currentLang) {
    const keys = key.split('.');
    let value = TRANSLATIONS[lang];
    for (const k of keys) {
        value = value?.[k];
    }
    return value || key;
}

function updateTranslations() {
    // Update HTML lang attribute
    document.documentElement.setAttribute('lang', currentLang);
    
    // Update all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = translate(key);
        if (translation) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        }
    });
    
    // Update meta tags
    const metaDescription = document.querySelector('meta[name="description"]');
    const metaTitle = document.querySelector('title');
    if (currentLang === 'pl') {
        if (metaDescription) metaDescription.setAttribute('content', 'Profesjonalne usługi fotograficzne i wideo dla deweloperów nieruchomości, agentów i firm. Fotografia dronem, filmy nieruchomości i obrazy komercyjne.');
        if (metaTitle) metaTitle.textContent = 'Visual Studio - Profesjonalna Fotografia i Wideo dla Nieruchomości i Biznesu';
    } else {
        if (metaDescription) metaDescription.setAttribute('content', 'Professional photo and video services for real estate developers, agents, and businesses. Drone photography, property videos, and commercial imagery.');
        if (metaTitle) metaTitle.textContent = 'Visual Studio - Professional Photo & Video for Real Estate & Business';
    }
    
    // Update portfolio data
    updatePortfolioTranslations();
    
    // Update services section
    updateServicesTranslations();
    
    // Update process section
    updateProcessTranslations();
    
    // Update testimonials section
    updateTestimonialsTranslations();
    
    // Update FAQ section
    updateFAQTranslations();
    
    // Update contact form
    updateContactFormTranslations();
    
    // Update mobile bar
    updateMobileBarTranslations();
    
    // Update language toggle button
    document.getElementById('langCode').textContent = currentLang.toUpperCase();
}

function updatePortfolioTranslations() {
    // Update portfolio section titles
    const portfolio = TRANSLATIONS[currentLang].portfolio;
    const sectionTitle = document.querySelector('#portfolio .section-title');
    const sectionSubtitle = document.querySelector('#portfolio .section-subtitle');
    if (sectionTitle) sectionTitle.textContent = portfolio.title;
    if (sectionSubtitle) sectionSubtitle.textContent = portfolio.subtitle;
    
    // Update filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        const filter = btn.getAttribute('data-filter');
        if (filter === 'all') btn.textContent = portfolio.filters.all;
        else if (filter === 'real-estate') btn.textContent = portfolio.filters.realEstate;
        else if (filter === 'business') btn.textContent = portfolio.filters.business;
        else if (filter === 'drone') btn.textContent = portfolio.filters.drone;
    });
    
    // Re-render portfolio with new translations
    if (typeof initPortfolio === 'function') {
        initPortfolio();
    }
}

function updateServicesTranslations() {
    const services = TRANSLATIONS[currentLang].services;
    const serviceCards = document.querySelectorAll('.service-card');
    
    if (serviceCards.length === 4) {
        // Real Estate
        serviceCards[0].querySelector('.service-title').textContent = services.realEstate.title;
        const list1 = serviceCards[0].querySelectorAll('.service-list li');
        services.realEstate.items.forEach((item, i) => {
            if (list1[i]) list1[i].textContent = item;
        });
        serviceCards[0].querySelector('.service-link').textContent = services.realEstate.link;
        
        // Video
        serviceCards[1].querySelector('.service-title').textContent = services.video.title;
        const list2 = serviceCards[1].querySelectorAll('.service-list li');
        services.video.items.forEach((item, i) => {
            if (list2[i]) list2[i].textContent = item;
        });
        serviceCards[1].querySelector('.service-link').textContent = services.video.link;
        
        // Business
        serviceCards[2].querySelector('.service-title').textContent = services.business.title;
        const list3 = serviceCards[2].querySelectorAll('.service-list li');
        services.business.items.forEach((item, i) => {
            if (list3[i]) list3[i].textContent = item;
        });
        serviceCards[2].querySelector('.service-link').textContent = services.business.link;
        
        // Drone
        serviceCards[3].querySelector('.service-title').textContent = services.drone.title;
        const list4 = serviceCards[3].querySelectorAll('.service-list li');
        services.drone.items.forEach((item, i) => {
            if (list4[i]) list4[i].textContent = item;
        });
        serviceCards[3].querySelector('.service-link').textContent = services.drone.link;
    }
}

function updateProcessTranslations() {
    const process = TRANSLATIONS[currentLang].process;
    const steps = document.querySelectorAll('.process-step');
    
    if (steps.length === 4) {
        steps[0].querySelector('.step-title').textContent = process.step1.title;
        steps[0].querySelector('.step-description').textContent = process.step1.description;
        steps[1].querySelector('.step-title').textContent = process.step2.title;
        steps[1].querySelector('.step-description').textContent = process.step2.description;
        steps[2].querySelector('.step-title').textContent = process.step3.title;
        steps[2].querySelector('.step-description').textContent = process.step3.description;
        steps[3].querySelector('.step-title').textContent = process.step4.title;
        steps[3].querySelector('.step-description').textContent = process.step4.description;
    }
}

function updateTestimonialsTranslations() {
    const testimonials = TRANSLATIONS[currentLang].testimonials;
    const cards = document.querySelectorAll('.testimonial-card');
    
    if (cards.length === 3) {
        cards[0].querySelector('.testimonial-text').textContent = testimonials.testimonial1.text;
        cards[0].querySelector('.testimonial-author strong').textContent = testimonials.testimonial1.author;
        cards[0].querySelector('.testimonial-author span').textContent = testimonials.testimonial1.role;
        cards[0].querySelector('.testimonial-result').textContent = testimonials.testimonial1.result;
        
        cards[1].querySelector('.testimonial-text').textContent = testimonials.testimonial2.text;
        cards[1].querySelector('.testimonial-author strong').textContent = testimonials.testimonial2.author;
        cards[1].querySelector('.testimonial-author span').textContent = testimonials.testimonial2.role;
        cards[1].querySelector('.testimonial-result').textContent = testimonials.testimonial2.result;
        
        cards[2].querySelector('.testimonial-text').textContent = testimonials.testimonial3.text;
        cards[2].querySelector('.testimonial-author strong').textContent = testimonials.testimonial3.author;
        cards[2].querySelector('.testimonial-author span').textContent = testimonials.testimonial3.role;
        cards[2].querySelector('.testimonial-result').textContent = testimonials.testimonial3.result;
    }
}

function updateFAQTranslations() {
    const faq = TRANSLATIONS[currentLang].faq;
    const items = document.querySelectorAll('.faq-item');
    
    if (items.length === 5) {
        items[0].querySelector('.faq-question span').textContent = faq.q1.question;
        items[0].querySelector('.faq-answer p').textContent = faq.q1.answer;
        items[1].querySelector('.faq-question span').textContent = faq.q2.question;
        items[1].querySelector('.faq-answer p').textContent = faq.q2.answer;
        items[2].querySelector('.faq-question span').textContent = faq.q3.question;
        items[2].querySelector('.faq-answer p').textContent = faq.q3.answer;
        items[3].querySelector('.faq-question span').textContent = faq.q4.question;
        items[3].querySelector('.faq-answer p').textContent = faq.q4.answer;
        items[4].querySelector('.faq-question span').textContent = faq.q5.question;
        items[4].querySelector('.faq-answer p').textContent = faq.q5.answer;
    }
}

function updateContactFormTranslations() {
    const contact = TRANSLATIONS[currentLang].contact;
    document.querySelector('label[for="name"]').innerHTML = `${contact.form.name} <span class="required">${contact.form.required}</span>`;
    document.querySelector('label[for="email"]').innerHTML = `${contact.form.email} <span class="required">${contact.form.required}</span>`;
    document.querySelector('label[for="phone"]').textContent = contact.form.phone;
    document.querySelector('label[for="message"]').innerHTML = `${contact.form.message} <span class="required">${contact.form.required}</span>`;
    document.querySelector('button[type="submit"]').textContent = contact.form.send;
}

function updateMobileBarTranslations() {
    const mobile = TRANSLATIONS[currentLang].mobile;
    const mobileBarBtns = document.querySelectorAll('.mobile-bar-btn span');
    if (mobileBarBtns.length >= 3) {
        mobileBarBtns[0].textContent = mobile.call;
        mobileBarBtns[1].textContent = mobile.email;
        mobileBarBtns[2].textContent = mobile.quote;
    }
}

function initLanguageToggle() {
    const langToggle = document.getElementById('langToggle');
    
    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'pl' : 'en';
        localStorage.setItem('language', currentLang);
        updateTranslations();
        
        // Re-render portfolio with new language
        if (typeof initPortfolio === 'function') {
            initPortfolio();
        }
    });
    
    // Initial translation update
    updateTranslations();
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

function getTranslatedPortfolioData() {
    const portfolio = TRANSLATIONS[currentLang].portfolio.items;
    return [
        { id: 1, title: portfolio.item1.title, category: 'real-estate', image: 'assets/img/portfolio/01.webp', description: portfolio.item1.description },
        { id: 2, title: portfolio.item2.title, category: 'business', image: 'assets/img/portfolio/02.webp', description: portfolio.item2.description },
        { id: 3, title: portfolio.item3.title, category: 'drone', image: 'assets/img/portfolio/03.webp', description: portfolio.item3.description },
        { id: 4, title: portfolio.item4.title, category: 'real-estate', image: 'assets/img/portfolio/04.webp', description: portfolio.item4.description },
        { id: 5, title: portfolio.item5.title, category: 'business', image: 'assets/img/portfolio/05.webp', description: portfolio.item5.description },
        { id: 6, title: portfolio.item6.title, category: 'real-estate', image: 'assets/img/portfolio/06.webp', description: portfolio.item6.description },
        { id: 7, title: portfolio.item7.title, category: 'business', image: 'assets/img/portfolio/07.webp', description: portfolio.item7.description },
        { id: 8, title: portfolio.item8.title, category: 'drone', image: 'assets/img/portfolio/08.webp', description: portfolio.item8.description },
        { id: 9, title: portfolio.item9.title, category: 'real-estate', image: 'assets/img/portfolio/09.webp', description: portfolio.item9.description },
        { id: 10, title: portfolio.item10.title, category: 'business', image: 'assets/img/portfolio/10.webp', description: portfolio.item10.description },
        { id: 11, title: portfolio.item11.title, category: 'drone', image: 'assets/img/portfolio/11.webp', description: portfolio.item11.description },
        { id: 12, title: portfolio.item12.title, category: 'business', image: 'assets/img/portfolio/12.webp', description: portfolio.item12.description }
    ];
}

function initPortfolio() {
    const portfolioGrid = document.getElementById('portfolioGrid');
    const filterButtons = document.querySelectorAll('.filter-btn');
    let currentFilter = 'all';
    let currentLightboxIndex = 0;
    let filteredItems = getTranslatedPortfolioData();
    
    // Update filter buttons text
    const portfolio = TRANSLATIONS[currentLang].portfolio;
    filterButtons.forEach(btn => {
        const filter = btn.getAttribute('data-filter');
        if (filter === 'all') btn.textContent = portfolio.filters.all;
        else if (filter === 'real-estate') btn.textContent = portfolio.filters.realEstate;
        else if (filter === 'business') btn.textContent = portfolio.filters.business;
        else if (filter === 'drone') btn.textContent = portfolio.filters.drone;
    });
    
    // Render portfolio items
    function renderPortfolio(items) {
        portfolioGrid.innerHTML = '';
        
        items.forEach((item, index) => {
            const portfolioItem = document.createElement('div');
            portfolioItem.className = 'portfolio-item fade-in';
            portfolioItem.setAttribute('role', 'listitem');
            portfolioItem.setAttribute('data-index', index);
            portfolioItem.setAttribute('tabindex', '0');
            
            const categoryText = item.category === 'real-estate' ? portfolio.filters.realEstate : 
                                 item.category === 'business' ? portfolio.filters.business : 
                                 portfolio.filters.drone;
            
            portfolioItem.innerHTML = `
                <img src="${item.image}" alt="${item.title}" loading="lazy" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'300\'%3E%3Crect fill=\'%23f3f4f6\' width=\'400\' height=\'300\'/%3E%3Ctext fill=\'%239ca3af\' font-family=\'sans-serif\' font-size=\'18\' x=\'50%25\' y=\'50%25\' text-anchor=\'middle\' dominant-baseline=\'middle\'%3E${encodeURIComponent(item.title)}%3C/text%3E%3C/svg%3E'">
                <div class="portfolio-item-overlay">
                    <div class="portfolio-item-title">${item.title}</div>
                    <div class="portfolio-item-category">${categoryText}</div>
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
            const allItems = getTranslatedPortfolioData();
            if (currentFilter === 'all') {
                filteredItems = allItems;
            } else {
                filteredItems = allItems.filter(item => item.category === currentFilter);
            }
            
            renderPortfolio(filteredItems);
        });
    });
    
    // Initial render
    renderPortfolio(filteredItems);
    
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
        const contact = TRANSLATIONS[currentLang].contact.form;
        
        if (field.hasAttribute('required') && !value) {
            isValid = false;
            errorMsg = contact.errorName;
        } else if (field.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                errorMsg = contact.errorEmail;
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
            formMessage.textContent = TRANSLATIONS[currentLang].contact.form.errorField;
            formMessage.style.display = 'block';
            return;
        }
        
        // Show loading state
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        const contact = TRANSLATIONS[currentLang].contact.form;
        submitBtn.disabled = true;
        submitBtn.textContent = contact.sending;
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
                formMessage.textContent = contact.success;
                formMessage.style.display = 'block';
                form.reset();
                
                // Scroll to message
                formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            formMessage.className = 'form-message error';
            formMessage.textContent = contact.error;
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
    initLanguageToggle();
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
