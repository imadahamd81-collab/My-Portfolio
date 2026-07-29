const translations = {
    en: {
        home: 'Home',
        about: 'About',
        experience: 'Experience',
        projects: 'Projects',
        skills: 'Skills',
        contact: 'Contact',
        heroBadge: 'Full-Stack Developer',
        heroTitle: "Hi, I'm Imad Ahmad",
        heroText: 'I build scalable, user-friendly web applications that solve real-world problems. Currently seeking internships and entry-level roles to kickstart my professional career.',
        heroLocation: 'Swabi, Pakistan',
        heroBtn1: 'View Projects',
        heroBtn2: 'Contact Me',
        aboutTag: 'About',
        sectionAbout: 'About Me',
        aboutCard1Title: 'Full-Stack Expertise',
        aboutCard1Text: 'Hands-on experience with HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, and SQL databases.',
        aboutCard2Title: 'Strong Foundation',
        aboutCard2Text: 'BS Computer Science graduate with solid understanding of algorithms, data structures, and software engineering principles.',
        aboutCard3Title: 'Ready to Launch',
        aboutCard3Text: 'Actively seeking internships and entry-level roles. Open to on-site, hybrid, and remote opportunities.',
        experienceTag: 'Portfolio',
        sectionExperience: 'Experience',
        projectsTag: 'Works',
        sectionProjects: 'Projects',
        educationTag: 'Qualification',
        sectionEducation: 'Education',
        educationTitle: 'BSc. Computer Software Engineering',
        educationInstitution: 'Abdul Wali Khan University, Mardan',
        educationDuration: '2022 – 2026 (Graduated)',
        educationText: 'Completed with hands-on project experience in full-stack development and strong academic foundation.',
        skillsTag: 'Tech Stack',
        sectionSkills: 'Skills',
        skillProg: 'Programming Languages',
        skillFrame: 'Frameworks & Libraries',
        skillTools: 'Tools & Practices',
        skillLang: 'Languages Spoken',
        skillEn: 'English',
        skillUr: 'Urdu',
        contactTag: 'Contact',
        sectionContact: 'Get In Touch',
        contactText: "I'm currently looking for internships and entry-level roles. If you have a question or just want to connect, feel free to reach out!",
        contactEmail: 'imadahamd81@gmail.com',
        contactPhone: '+92 3143912774',
        contactLocation: 'Swabi, Pakistan',
        formName: 'Your Name',
        formEmail: 'Email Address',
        formMessage: 'Message',
        formSubmit: 'Send Message',
        footerText: '© 2025 Imad Ahmad. All rights reserved.'
    },
    ur: {
        home: 'ہوم',
        about: 'تعارف',
        experience: 'تجربہ',
        projects: 'پروجیکٹس',
        skills: 'مہارت',
        contact: 'رابطہ',
        heroBadge: 'فل سٹیک ڈیویلپر',
        heroTitle: 'سلام، میرا نام عماد احمد ہے',
        heroText: 'میں حقیقی مسائل حل کرنے والی، سکیل ایبل صارف دوست ویب ایپلیکیشنز بناتا ہوں۔ فی الحال انٹرنشپ اور اینٹری لول رولز تلاش کر رہا ہوں۔',
        heroLocation: 'صوابی، پاکستان',
        heroBtn1: 'پروجیکٹس دیکھیں',
        heroBtn2: 'رابطہ کریں',
        aboutTag: 'تعارف',
        sectionAbout: 'میرے بارے میں',
        aboutCard1Title: 'فل سٹیک مہارت',
        aboutCard1Text: 'HTML، CSS، JavaScript، React، Node.js، Express، MongoDB اور SQL میں ہاتھ سے تجربہ۔',
        aboutCard2Title: ' مضبوط بنیاد',
        aboutCard2Text: 'BS کمپیوٹر سائنس میں گریجویٹ۔ الگورتھم، ڈیٹا اسٹرکچرز اور سافٹ ویئر انجینئرنگ کے اصولات میں مضبوط فہم۔',
        aboutCard3Title: 'شروعات کے لیے تیار',
        aboutCard3Text: 'انٹرنشپ اور اینٹری لول رولز کے لیے فعال تلاش۔ آف سائٹ، ہائبرڈ اور ریموٹ موقعوں کے لیے تیار۔',
        experienceTag: 'پورٹ فولیو',
        sectionExperience: 'تجربہ',
        projectsTag: 'کام',
        sectionProjects: 'پروجیکٹس',
        educationTag: 'تعلیم',
        sectionEducation: 'تعلیم',
        educationTitle: 'بی ایس کمپیوٹر سافٹ ویئر انجینئرنگ',
        educationInstitution: 'عبدال ولی خان یونیورسٹی، مردان',
        educationDuration: '2022 – 2026 (پسماندہ)',
        educationText: 'فل سٹیک ڈیولپمنٹ کے ہاتھ سے تجربے کے ساتھ مکمل کیا۔',
        skillsTag: 'ٹیک Stack',
        sectionSkills: 'مہارتیں',
        skillProg: 'پروگرامنگ زبانیں',
        skillFrame: 'فریم ورکس اور لائبریریز',
        skillTools: 'ٹولز اور طریقے',
        skillLang: 'بولتی زبان',
        skillEn: 'انگریزی',
        skillUr: 'اردو',
        contactTag: 'رابطہ',
        sectionContact: 'رابطہ کریں',
        contactText: 'میں فی الحال انٹرنشپ اور اینٹری لول رولز تلاش کر رہا ہوں۔ اگر آپ کے پاس سوال ہے یا صرف رابطہ کرنا چاہتے ہیں، تو راحت سے رابطہ کریں!',
        contactEmail: 'imadahamd81@gmail.com',
        contactPhone: '+92 3143912774',
        contactLocation: 'صوابی، پاکستان',
        formName: 'آپ کا نام',
        formEmail: 'ای میل ایڈریس',
        formMessage: 'پیغام',
        formSubmit: 'پیغام بھیجیں',
        footerText: '© 2025 عماد احمد۔ جملہ حقوق محفوظ۔'
    }
};

let currentLang = 'en';

function updateLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];
    document.documentElement.lang = lang === 'ur' ? 'ur' : 'en';

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) {
            if (key === 'heroLocation' || key === 'contactLocation') {
                el.innerHTML = t[key];
            } else if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = t[key];
            } else {
                el.textContent = t[key];
            }
        }
    });

    const langLabel = document.querySelector('.lang-label');
    if (langLabel) langLabel.textContent = lang === 'en' ? 'EN' : 'UR';

    const iconEn = document.querySelector('.lang-icon-en');
    const iconUr = document.querySelector('.lang-icon-ur');
    if (iconEn && iconUr) {
        iconEn.classList.toggle('active', lang === 'en');
        iconUr.classList.toggle('active', lang === 'ur');
    }

    localStorage.setItem('portfolio-lang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            updateLanguage(currentLang === 'en' ? 'ur' : 'en');
        });
    }

    const savedLang = localStorage.getItem('portfolio-lang') || 'en';
    updateLanguage(savedLang);

    const iconEn = document.querySelector('.lang-icon-en');
    const iconUr = document.querySelector('.lang-icon-ur');
    if (iconEn && iconUr) {
        iconEn.classList.toggle('active', savedLang === 'en');
        iconUr.classList.toggle('active', savedLang === 'ur');
    }

    const preloader = document.getElementById('preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            preloader.classList.add('hidden');
            setTimeout(() => preloader.remove(), 500);
        });
    }

    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const backToTop = document.getElementById('backToTop');
    const nav = document.querySelector('.navbar');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });

    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(11, 13, 23, 0.95)';
            nav.style.borderBottom = '1px solid rgba(255, 255, 255, 0.15)';
        } else {
            nav.style.background = 'rgba(11, 13, 23, 0.85)';
            nav.style.borderBottom = '1px solid rgba(255, 255, 255, 0.05)';
        }

        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }

        let current = '';
        const sections = document.querySelectorAll('section');
        const navLinkItems = document.querySelectorAll('.nav-links a');
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinkItems.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });

    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function (e) {
            const btn = form.querySelector('button');
            const originalText = btn.textContent;
            btn.textContent = currentLang === 'en' ? 'Sending...' : 'بھیج رہا ہوں...';
            btn.disabled = true;
        });
    }

    const typingEl = document.getElementById('heroTypingText');
    if (typingEl) {
        const phrases = [
            'Full Stack - Web Developer',
            'Problem Solver',
            'Software Engineer'
        ];
        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 80;

        function type() {
            const current = phrases[phraseIndex];
            if (isDeleting) {
                typingEl.textContent = current.substring(0, charIndex - 1);
                charIndex--;
                typingSpeed = 40;
            } else {
                typingEl.textContent = current.substring(0, charIndex + 1);
                charIndex++;
                typingSpeed = 80;
            }

            if (!isDeleting && charIndex === current.length) {
                typingSpeed = 1500;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                typingSpeed = 300;
            }

            setTimeout(type, typingSpeed);
        }

        setTimeout(type, 1000);
    }
});