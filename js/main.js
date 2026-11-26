/* ============================================
   CONFIGURATION - Easy to edit constants
   ============================================ */

const CONFIG = {
    brandName: 'Koziczak Fotografia',
    phone: '+48 517 198 670',
    email: 'grzegorzkoziczak@gmail.com',
    formEndpoint: 'https://api.web3forms.com/submit',
    web3formsAccessKey: '6e13cc44-b082-42a8-a1b1-64a8e70c389e',
    socialLinks: {
        instagram: 'https://instagram.com/yourhandle',
        tiktok: 'https://tiktok.com/@yourhandle',
        youtube: 'https://youtube.com/@yourhandle',
        linkedin: 'https://linkedin.com/company/yourhandle'
    },
    serviceArea: 'Bydgoszcz i okolice. Możliwy dojazd po wcześniejszym ustaleniu'
};

/* ============================================
   TRANSLATIONS - English and Polish
   ============================================ */

const TRANSLATIONS = {
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
            title: 'Wizualny storytelling dla nieruchomości.',
            subtitle: 'Wysokiej jakości fotografia mieszkań, domów i przestrzeni komercyjnych.',
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
                title: 'Filmy i rolki nieruchomości',
                items: ['Filmy spacerowe', 'Reels do mediów społecznościowych', 'Profesjonalna edycja', 'Muzyka i lektorskie opcje'],
                link: 'Zapytaj o dostępność'
            },
            business: {
                title: 'Biznes i Przemysł',
                items: ['Przestrzenie biurowe', 'Fabryki i magazyny', 'Zdjęcia sprzętu i maszyn', 'Dokumentacja marki'],
                link: 'Zapytaj o dostępność'
            },
            drone: {
                title: 'Zdjęcia i filmy z drona',
                items: ['Ujęcia nieruchomości z perspektywy lotu ptaka', 'Dynamiczne filmy dronowe', 'Prezentacja otoczenia i lokalizacji', 'Gotowe materiały do ogłoszeń i social mediów'],
                link: 'Zapytaj o dostępność'
            }
        },
        portfolio: {
            title: 'Portfolio',
            subtitle: 'Najnowsze projekty z zakresu nieruchomości, komercyjne i lotnicze',
            filters: {
                all: 'Wszystkie',
                interiors: 'Wnętrza',
                architecture: 'Architektura',
                business: 'Biznes'
            },
            items: {
                item1: { title: 'Salon w Mieszkaniu Prywatnym', description: 'Elegancka przestrzeń dzienna w mieszkaniu prywatnym' },
                item2: { title: 'Biuro w Centrum', description: 'Fotografia biurowa dla nieruchomości komercyjnych' },
                item3: { title: 'Luksusowa Łazienka w Złocie i Czerni', description: 'Ekskluzywny design łazienki z akcentami złota i czerni' },
                item4: { title: 'Hol Wejściowy Kamienicy', description: 'Klimatyczny korytarz z cegłą i ozdobnymi lampami' },
                item5: { title: 'Nowoczesna Łazienka', description: 'Współczesne wnętrze łazienki z wyrafinowaną paletą złota i czerni' },
                item6: { title: 'Wideo Spacerowe Mieszkaniowe', description: 'Profesjonalna produkcja filmów spacerowych' },
                item7: { title: 'Zdjęcia Korporacyjne', description: 'Sesja zdjęciowa portretów korporacyjnych' },
                item8: { title: 'Inspekcja Terenu z Drona', description: 'Dokumentacja dronem placu budowy' },
                item9: { title: 'Salon z Otwartą Kuchnią', description: 'Przestronny salon połączony z kuchnią w nowoczesnym mieszkaniu' },
                item10: { title: 'Wnętrze Fabryki', description: 'Dokumentacja zakładu produkcyjnego' },
                item11: { title: 'Rozwój Nieruchomości', description: 'Widok z lotu ptaka nowego projektu deweloperskiego' },
                item12: { title: 'Budynek Komercyjny', description: 'Fotografia zewnętrzna i wewnętrzna nieruchomości komercyjnej' },
                item13: { title: 'Nowoczesna Jadalnia', description: 'Klimatyczne ujęcie przestrzeni jadalnianej z dbałością o detale' },
                item14: { title: 'Nowoczesna Kuchnia', description: 'Elegancka kuchnia z drewnianymi frontami i jasnym kamieniem' },
                item15: { title: 'Kuchnia Premium', description: 'Fotografia wnętrza kuchni z naciskiem na światło i kompozycję' },
                item16: { title: 'Nowoczesny Blok Mieszkalny', description: 'Fasada współczesnego budynku wielorodzinnego' },
                item17: { title: 'Widok z Drona na Rzekę', description: 'Ujęcie lotnicze miasta i otoczenia nad wodą' },
                item18: { title: 'Budynek przy Ulicy', description: 'Prezentacja nowoczesnej inwestycji mieszkaniowej w kontekście okolicy' },
                item19: { title: 'Dziedziniec Osiedla', description: 'Zespół mieszkaniowy z zielonym patio i strefą wypoczynku' },
                item20: { title: 'Apartamentowiec z Ogrodem', description: 'Nowoczesna architektura z zadbaną przestrzenią wspólną' },
                item21: { title: 'Dom z Lotu Ptaka', description: 'Zdjęcie dronowe posesji z ogrodem i otoczeniem' },
                item22: { title: 'Kamienica w Centrum', description: 'Klasyczna fasada budynku z ofertą powierzchni biurowych' },
                item23: { title: 'Garaż Podziemny', description: 'Czysta dokumentacja nowoczesnego parkingu podziemnego' },
                item24: { title: 'Salon z Jadalnią', description: 'Otwarta strefa dzienna z turkusowymi akcentami' },
                item25: { title: 'Jasne Puste Wnętrze', description: 'Przestrzeń po remoncie z widokiem na balkon i miasto' }
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
            title: 'Co mówią Klienci',
            subtitle: 'Zaufali nam deweloperzy, agenci i właściciele firm',
            testimonial1: {
                text: '"Współpraca z Grzesiem to czysta przyjemność, a efekt końcowy to absolutny sztos! Jestem pod ogromnym wrażeniem jakości i estetyki zdjęć. Widać w nich pasję, wyczucie i wielki talent. Szczerze polecam każdemu, kto chce, aby jego oferta prezentowała się jak z katalogu."',
                author: 'Daria Petla',
                role: 'Trener personalny, Kuźnia Siły',
                result: 'Rezultat: Znacznie większe zainteresowanie ofertą'
            },
            testimonial2: {
                text: '"Prowadzę w Bydgoszczy biuro nieruchomości. W naszej branży kluczowe znaczenie ma profesjonalne przygotowanie oferty sprzedaży lub najmu, a jej najważniejszym elementem są oczywiście zdjęcia. Liczy się nie tylko jakość, lecz także pomysłowość i „dobre oko”, dzięki którym możemy pokazać wnętrza w ciekawy, nieoczywisty sposób. Sesje nieruchomości, które otrzymaliśmy od Grzegorza, w pełni odpowiadają naszym oczekiwaniom. Polecam z pełnym przekonaniem."',
                author: 'Michał Pacoszyński',
                role: 'Pracownia Nieruchomości',
                result: 'Rezultat: Bardziej atrakcyjne oferty i większe zainteresowanie klientów'
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
                answer: 'Standardowa dostawa to 24–48 godziny po sesji, w zależności od zakresu projektu. Ekspresowa dostawa (12–24 godziny) jest dostępna za dodatkową opłatą. Większe projekty wideo zazwyczaj wymagają 3 dni roboczych na edycję.'
            },
            q2: {
                question: 'Jak wygląda wycena?',
                answer: 'Ceny są ustalane indywidualnie dla każdego projektu i zależą od wielkości nieruchomości, liczby ujęć, długości wideo oraz specyficznych wymagań. Po krótkiej rozmowie przygotowujemy precyzyjną wycenę dopasowaną do Twoich potrzeb. Szacunkowe ceny usług poniżej:<br><br>350 zł<br><strong>Małe mieszkanie do 40 m² (kawalerka)</strong><br>10–15 obrobionych zdjęć<br>Wnętrza + detale + budynek<br><br>450 zł<br><strong>Mieszkanie 40–90 m²</strong><br>15–25 obrobionych zdjęć<br>Wnętrza + detale + budynek<br><br>700 zł<br><strong>Dom / apartament powyżej 90 m²</strong><br>25–30 obrobionych zdjęć<br>Wnętrza + detale + budynek<br><br>od 300 zł<br><strong>Realizacje wideo</strong><br>Prezentacja nieruchomości + ujęcia okolicy<br>Dźwięk: lektor studyjny / voice-over nagrywany na miejscu<br>Format idealny do Instagram Reels / TikTok / YouTube Shorts<br><br>300 zł<br><strong>Pakiet dronowy</strong><br>10–15 zdjęć z drona + krótkie ujęcia wideo<br>Prezentacja nieruchomości i najbliższej okolicy<br>Profesjonalna obróbka materiału'
            },
            q3: {
                question: 'Co muszę przygotować przed sesją?',
                answer: '<strong>Dla nieruchomości prywatnych:</strong><br><br>Zadbaj o to, aby przestrzeń była czysta, uporządkowana i gotowa do prezentacji. Usuń wszystkie przedmioty osobiste, które nie są elementem wystroju — kosmetyki, ubrania, dokumenty, zabawki, środki czystości czy przypadkowe drobiazgi. Wnętrze powinno wyglądać jak przygotowane do wizyty potencjalnego kupującego: estetyczne, neutralne i pozbawione rozpraszaczy. Upewnij się, że wszystkie światła działają, a rolety i zasłony są ustawione tak, aby maksymalnie doświetlić pomieszczenia.<br><br><strong>Dla firm i przestrzeni komercyjnych:</strong><br><br>Przygotuj miejsce tak, aby odzwierciedlało profesjonalny charakter Twojej działalności. Zadbaj o czystość powierzchni, podłóg, mebli oraz szyb — smugi i odciski palców są bardzo widoczne na zdjęciach. Usuń zbędne przedmioty z blatów i stanowisk pracy, a jeśli to możliwe, uporządkuj kable i materiały biurowe. Warto wcześniej poinformować personel o sesji, ustalić dostęp do przestrzeni oraz wskazać kluczowe obszary, które mają zostać podkreślone na zdjęciach lub wideo.'
            },
            q4: {
                question: 'Jakie są warunki licencyjne?',
                answer: 'Wszystkie rezultaty obejmują pełne prawa licencyjne komercyjne do celów marketingowych, reklamowych i ofertowych. Posiadasz prawa użytkowania do otrzymanych zdjęć/filmów. Zachowujemy prawa autorskie, ale udzielamy nieograniczonego użycia w uzgodnionym zakresie.'
            },
            q5: {
                question: 'Czy podróżujecie na sesje?',
                answer: 'No pewnie. Dodatkowe opłaty za podróż obowiązują przy odległości powyżej 50km od Bydgoszczy. Dla projektów poza tym zakresem omawiamy koszty podróży indywidualnie.'
            }
        },
        contact: {
            title: 'Skontaktuj Się',
            subtitle: 'Gotowy omówić swój projekt? Porozmawiajmy.',
            phone: 'Telefon',
            email: 'Email',
            serviceArea: 'Obszar Obsługi',
            serviceAreaText: 'Bydgoszcz i okolice<br>Możliwy dojazd po wcześniejszym ustaleniu',
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
                errorEmail: 'Proszę podać prawidłowy adres email',
                subject: 'Nowa wiadomość z formularza kontaktowego od'
            }
        },
        footer: {
            copyright: '© 2026 Koziczak Fotografia. Wszelkie prawa zastrzeżone.',
            inPreparation: 'Strona w przygotowaniu. Treści mogą się zmieniać.'
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
    { id: 1, title: 'Private Residence Living Room', category: 'interiors', image: 'assets/img/portfolio/wnetrza_1.jpg', description: 'Elegant living space in private residence' },
    { id: 2, title: 'Downtown Office Space', category: 'business', image: 'assets/img/portfolio/biznes_1.jpg', description: 'Corporate office photography for commercial real estate' },
    { id: 3, title: 'Luxury Gold & Black Bathroom', category: 'interiors', image: 'assets/img/portfolio/wnetrza_2.jpg', description: 'Premium bathroom design with gold and black accents' },
    { id: 4, title: 'Building Entrance Hall', category: 'architecture', image: 'assets/img/portfolio/architektura_1.jpg', description: 'Atmospheric hallway with brick and decorative lighting' },
    { id: 5, title: 'Contemporary Bathroom Design', category: 'interiors', image: 'assets/img/portfolio/wnetrza_3.jpg', description: 'Modern bathroom interior with sophisticated gold and black palette' },
    { id: 6, title: 'Residential Video Tour', category: 'interiors', image: 'assets/img/portfolio/wnetrza_4.jpg', description: 'Professional walkthrough video production' },
    { id: 7, title: 'Business Headshots', category: 'business', image: 'assets/img/portfolio/biznes_2.jpg', description: 'Corporate headshot photography session' },
    { id: 8, title: 'Aerial Site Survey', category: 'architecture', image: 'assets/img/portfolio/architektura_2.jpg', description: 'Drone documentation for construction site' },
    { id: 9, title: 'Open Living with Kitchen', category: 'interiors', image: 'assets/img/portfolio/wnetrza_5.jpg', description: 'Spacious living room connected to a modern kitchen' },
    { id: 10, title: 'Factory Interior', category: 'business', image: 'assets/img/portfolio/biznes_3.jpg', description: 'Manufacturing facility documentation' },
    { id: 11, title: 'Property Development', category: 'architecture', image: 'assets/img/portfolio/architektura_3.jpg', description: 'Aerial view of new development project' },
    { id: 12, title: 'Commercial Building', category: 'business', image: 'assets/img/portfolio/biznes_4.jpg', description: 'Exterior and interior commercial photography' },
    { id: 13, title: 'Modern Dining Area', category: 'interiors', image: 'assets/img/portfolio/wnetrza_6.jpg', description: 'Well-lit dining interior with balanced composition' },
    { id: 14, title: 'Modern Kitchen', category: 'interiors', image: 'assets/img/portfolio/wnetrza_7.jpg', description: 'Elegant kitchen with wood cabinetry and light stone finishes' },
    { id: 15, title: 'Premium Kitchen', category: 'interiors', image: 'assets/img/portfolio/wnetrza_8.jpg', description: 'Clean and premium kitchen interior presentation' },
    { id: 16, title: 'Modern Residential Block', category: 'architecture', image: 'assets/img/portfolio/architektura_4.jpg', description: 'Facade of a contemporary multi-unit residential building' },
    { id: 17, title: 'Aerial River View', category: 'architecture', image: 'assets/img/portfolio/architektura_5.jpg', description: 'Drone shot of the city and riverside surroundings' },
    { id: 18, title: 'Street-Side Residence', category: 'architecture', image: 'assets/img/portfolio/architektura_6.jpg', description: 'Modern residential investment shown in neighborhood context' },
    { id: 19, title: 'Estate Courtyard', category: 'architecture', image: 'assets/img/portfolio/architektura_7.jpg', description: 'Apartment complex with green patio and leisure area' },
    { id: 20, title: 'Apartment Building with Garden', category: 'architecture', image: 'assets/img/portfolio/architektura_8.jpg', description: 'Modern architecture with a maintained shared outdoor space' },
    { id: 21, title: 'House from Above', category: 'architecture', image: 'assets/img/portfolio/architektura_9.jpg', description: 'Drone photo of a property with garden and surroundings' },
    { id: 22, title: 'City Tenement', category: 'architecture', image: 'assets/img/portfolio/architektura_10.jpg', description: 'Classic building facade with office space offering' },
    { id: 23, title: 'Underground Garage', category: 'business', image: 'assets/img/portfolio/biznes_5.jpg', description: 'Clean documentation of a modern underground parking garage' },
    { id: 24, title: 'Living and Dining Area', category: 'interiors', image: 'assets/img/portfolio/wnetrza_9.jpg', description: 'Open living zone with teal accent details' },
    { id: 25, title: 'Bright Empty Interior', category: 'interiors', image: 'assets/img/portfolio/wnetrza_10.jpg', description: 'Freshly renovated space with balcony and city view' }
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

let currentLang = 'pl';

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
            } else if (translation.includes('<br>') || translation.includes('<')) {
                // Use innerHTML for elements that contain HTML tags
                element.innerHTML = translation;
            } else {
                element.textContent = translation;
            }
        }
    });
    
    // Update meta tags
    const metaDescription = document.querySelector('meta[name="description"]');
    const metaTitle = document.querySelector('title');
    if (metaDescription) metaDescription.setAttribute('content', 'Profesjonalne usługi fotograficzne i wideo dla deweloperów nieruchomości, agentów i firm. Fotografia dronem, filmy nieruchomości i obrazy komercyjne.');
    if (metaTitle) metaTitle.textContent = 'Koziczak Fotografia - Profesjonalna Fotografia i Wideo dla Nieruchomości i Biznesu';
    
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
        else if (filter === 'interiors') btn.textContent = portfolio.filters.interiors;
        else if (filter === 'architecture') btn.textContent = portfolio.filters.architecture;
        else if (filter === 'business') btn.textContent = portfolio.filters.business;
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
        // Order: pricing first (q2), then turnaround (q1), prepare (q3), licensing (q4), travel (q5)
        items[0].querySelector('.faq-question span').textContent = faq.q2.question;
        items[0].querySelector('.faq-answer p').innerHTML = faq.q2.answer;
        items[1].querySelector('.faq-question span').textContent = faq.q1.question;
        items[1].querySelector('.faq-answer p').textContent = faq.q1.answer;
        items[2].querySelector('.faq-question span').textContent = faq.q3.question;
        items[2].querySelector('.faq-answer p').innerHTML = faq.q3.answer;
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
    // Tylko wersja polska – bez przełączania języka
    updateTranslations();
}

/* ============================================
   THEME TOGGLE
   ============================================ */

function initThemeToggle() {
    const html = document.documentElement;
    // Zawsze tryb ciemny, bez przełączania
    html.setAttribute('data-theme', 'dark');
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
        { id: 1, title: portfolio.item1.title, category: 'interiors', image: 'assets/img/portfolio/wnetrza_1.jpg', description: portfolio.item1.description },
        { id: 2, title: portfolio.item2.title, category: 'business', image: 'assets/img/portfolio/biznes_1.jpg', description: portfolio.item2.description },
        { id: 3, title: portfolio.item3.title, category: 'interiors', image: 'assets/img/portfolio/wnetrza_2.jpg', description: portfolio.item3.description },
        { id: 4, title: portfolio.item4.title, category: 'architecture', image: 'assets/img/portfolio/architektura_1.jpg', description: portfolio.item4.description },
        { id: 5, title: portfolio.item5.title, category: 'interiors', image: 'assets/img/portfolio/wnetrza_3.jpg', description: portfolio.item5.description },
        { id: 6, title: portfolio.item6.title, category: 'interiors', image: 'assets/img/portfolio/wnetrza_4.jpg', description: portfolio.item6.description },
        { id: 7, title: portfolio.item7.title, category: 'business', image: 'assets/img/portfolio/biznes_2.jpg', description: portfolio.item7.description },
        { id: 8, title: portfolio.item8.title, category: 'architecture', image: 'assets/img/portfolio/architektura_2.jpg', description: portfolio.item8.description },
        { id: 9, title: portfolio.item9.title, category: 'interiors', image: 'assets/img/portfolio/wnetrza_5.jpg', description: portfolio.item9.description },
        { id: 10, title: portfolio.item10.title, category: 'business', image: 'assets/img/portfolio/biznes_3.jpg', description: portfolio.item10.description },
        { id: 11, title: portfolio.item11.title, category: 'architecture', image: 'assets/img/portfolio/architektura_3.jpg', description: portfolio.item11.description },
        { id: 12, title: portfolio.item12.title, category: 'business', image: 'assets/img/portfolio/biznes_4.jpg', description: portfolio.item12.description },
        { id: 13, title: portfolio.item13.title, category: 'interiors', image: 'assets/img/portfolio/wnetrza_6.jpg', description: portfolio.item13.description },
        { id: 14, title: portfolio.item14.title, category: 'interiors', image: 'assets/img/portfolio/wnetrza_7.jpg', description: portfolio.item14.description },
        { id: 15, title: portfolio.item15.title, category: 'interiors', image: 'assets/img/portfolio/wnetrza_8.jpg', description: portfolio.item15.description },
        { id: 16, title: portfolio.item16.title, category: 'architecture', image: 'assets/img/portfolio/architektura_4.jpg', description: portfolio.item16.description },
        { id: 17, title: portfolio.item17.title, category: 'architecture', image: 'assets/img/portfolio/architektura_5.jpg', description: portfolio.item17.description },
        { id: 18, title: portfolio.item18.title, category: 'architecture', image: 'assets/img/portfolio/architektura_6.jpg', description: portfolio.item18.description },
        { id: 19, title: portfolio.item19.title, category: 'architecture', image: 'assets/img/portfolio/architektura_7.jpg', description: portfolio.item19.description },
        { id: 20, title: portfolio.item20.title, category: 'architecture', image: 'assets/img/portfolio/architektura_8.jpg', description: portfolio.item20.description },
        { id: 21, title: portfolio.item21.title, category: 'architecture', image: 'assets/img/portfolio/architektura_9.jpg', description: portfolio.item21.description },
        { id: 22, title: portfolio.item22.title, category: 'architecture', image: 'assets/img/portfolio/architektura_10.jpg', description: portfolio.item22.description },
        { id: 23, title: portfolio.item23.title, category: 'business', image: 'assets/img/portfolio/biznes_5.jpg', description: portfolio.item23.description },
        { id: 24, title: portfolio.item24.title, category: 'interiors', image: 'assets/img/portfolio/wnetrza_9.jpg', description: portfolio.item24.description },
        { id: 25, title: portfolio.item25.title, category: 'interiors', image: 'assets/img/portfolio/wnetrza_10.jpg', description: portfolio.item25.description }
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
        else if (filter === 'interiors') btn.textContent = portfolio.filters.interiors;
        else if (filter === 'architecture') btn.textContent = portfolio.filters.architecture;
        else if (filter === 'business') btn.textContent = portfolio.filters.business;
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
            
            const categoryText = item.category === 'interiors' ? portfolio.filters.interiors : 
                                 item.category === 'architecture' ? portfolio.filters.architecture : 
                                 portfolio.filters.business;
            
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
            // Add subject for Web3Forms (translated based on current language)
            const subjectText = `${contact.subject} ${nameField.value}`;
            formData.append('subject', subjectText);
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
