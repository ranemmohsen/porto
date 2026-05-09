document.addEventListener('DOMContentLoaded', () => {
    // --- Theme Toggle ---
    const themeBtn = document.getElementById('themeBtn');
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            const icon = themeBtn.querySelector('i');
            if (document.body.classList.contains('light-mode')) {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
                // Adjust inline color style for light mode
                themeBtn.style.color = '#000000';
                document.querySelector('.mobile-menu-toggle').style.color = 'var(--text-primary)';
            } else {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
                themeBtn.style.color = 'white';
                document.querySelector('.mobile-menu-toggle').style.color = 'white';
            }
        });
    }

    // --- Mobile Menu Toggle ---
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = mobileMenuToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Close mobile menu when a link is clicked
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                const icon = mobileMenuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });

    // --- Sticky Navbar & Active Link Highlight ---
    const navbar = document.getElementById('navbar');
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', () => {
        let current = '';
        const scrollY = window.pageYOffset;

        // Sticky Navbar styling
        if (scrollY > 50) {
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
            navbar.style.padding = '10px 0';
        } else {
            navbar.style.boxShadow = 'none';
            navbar.style.padding = '15px 0';
        }

        // Active section logic
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        links.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current) && current !== '') {
                link.classList.add('active');
            }
        });
    });

    // --- Skills Filtering ---
    // --- Back to top button ---
    const backToTopBtn = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    // --- Scroll Reveal Animation ---
    const revealElements = document.querySelectorAll('.glass-card, .section-header');
    
    const revealCallback = function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                // Optional: stop observing once revealed
                // observer.unobserve(entry.target);
            }
        });
    };

    const revealObserver = new IntersectionObserver(revealCallback, {
        root: null,
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    // --- Language Toggle ---
    const langBtn = document.getElementById('langBtn');
    const htmlElement = document.documentElement;
    
    // قاموس الترجمة
    const translations = {
        en: {
            'home-nav': 'Home',
            'about-nav': 'About',
            'education-nav': 'Education',
            'skills-nav': 'Skills',
            'experience-nav': 'Experience',
            'services-nav': 'Services',
            'projects-nav': 'Projects',
            'testimonials-nav': 'Testimonials',
            'contact-nav': 'Contact',
            'contact-btn': 'Contact Me',
            'welcome-badge': 'WELCOME TO MY WORLD',
            'greeting': 'Hi, I\'m',
            'summary': 'I build scalable, high-performance web applications using React.js and Node.js.',
            'portfolio-btn': 'My Portfolio',
            'cv-btn': 'Download CV',
            'about-title': 'About Me',
            'about-subtitle': 'Driven by Passion & Performance',
            'about-text': 'I\'m Ranem, a passionate Full-Stack Developer focused on building web applications using React.js and Node.js. I write clean, maintainable code and have hands-on experience creating REST APIs and designing databases for academic and personal projects. I improved frontend performance by over 25% in my projects through optimized state management and lazy loading techniques.',
            'education-title': 'Education',
            'certifications-title': 'Certifications',
            'degree-title': 'Bachelor\'s Degree in Computer Science',
            'university': 'SADAT Academy for Management Sciences',
            'edu-project': 'Bachelor of Computer Science — Excellent Grade',
            'start-date': 'Sep 2020',
            'end-date': 'Jul 2024',
            'gpa': '3.32/4',
            'location': 'Cairo, Egypt',
            'view-cert': 'View Certificate',
            'cert-title-1': 'Front End, Route',
            'cert-provider-1': 'Route Academy',
            'cert-desc-1': 'Covered core frontend development topics including React, JavaScript, and modern HTML/CSS practices.',
            'cert-title-2': 'CIB Bank',
            'cert-provider-2': 'CIB Bank',
            'cert-desc-2': 'Focused on banking principles, compliance requirements, and practical financial service operations.',
            'cert-title-3': 'CCNA, Telecom Egypt',
            'cert-provider-3': 'Telecom Egypt',
            'cert-desc-3': 'Built practical knowledge in networking fundamentals, routing, and essential network security concepts.',
            'cert-title-4': 'Bank Misr',
            'cert-provider-4': 'Bank Misr',
            'cert-desc-4': 'Introduced key banking services, financial products, and customer-focused service delivery.',
            'skills-title': 'Technical Skills',
            'frontend-title': 'Frontend Engineering',
            'frontend-desc': 'Designing and developing scalable, high-performance web applications with React.js, focusing on clean architecture, maintainable code, optimized rendering, and seamless user experience across devices.',
            'backend-title': 'Backend Development',
            'backend-desc': 'Building secure and scalable backend services using Node.js and Express.js, implementing structured architecture patterns and efficient database integration to ensure reliability and performance.',
            'database-title': 'Database Systems',
            'database-desc': 'Designing relational database schemas and writing optimized queries to maintain data integrity, performance efficiency, and scalable application behavior.',
            'foundation-title': 'Computer Science Foundation',
            'foundation-desc': 'Applying core engineering fundamentals to architect structured, maintainable, and scalable software systems.',
            'tools-title': 'Development Tools',
            'tools-desc': 'Managing version control, API testing, and structured development workflows to maintain clean, collaborative, and production-ready codebases.',
            'soft-title': 'Soft Skills',
            'soft-desc': 'Applying analytical thinking to break down complex problems, working effectively in teams, and adapting quickly to new technologies and changing requirements.',
            'experience-title': 'Experience & Organizations',
            'services-label': 'WHAT I OFFER',
            'services-title': 'My Services',
            'services-subtitle': 'Practical solutions with clean architecture, scalable code, and reliable delivery.',
            'service-1-title': 'Database Design',
            'service-1-desc': 'Efficient schemas optimized for performance, security, and long-term scalability.',
            'service-1-tag-1': 'SQL Server',
            'service-1-tag-2': 'Entity Framework',
            'service-1-tag-3': 'T-SQL',
            'service-2-title': 'API Development',
            'service-2-desc': 'Secure and documented RESTful APIs for web and mobile apps with clean integration.',
            'service-2-tag-1': 'Node.js',
            'service-2-tag-2': 'JWT Auth',
            'service-2-tag-3': 'Postman',
            'service-3-title': 'Web Applications',
            'service-3-desc': 'Building full-featured web applications using React, Next.js, and modern backend patterns.',
            'service-3-tag-1': 'React.js',
            'service-3-tag-2': 'Next.js',
            'service-3-tag-3': 'Node.js',
            'service-3-tag-4': 'Express.js',
            'projects-title': 'Featured Projects',
            'project-pill': 'GRADUATION PROJECT',
            'project-title': 'Fitplan App',
            'project-lead': 'A mobile app designed to create personalized diet plans and guide users toward healthier routines with clear, simple navigation.',
            'project-action-label': 'Action',
            'project-challenge': 'Making health-focused flows feel calm, understandable, and easy to trust for users managing different conditions.',
            'project-action': 'Built the experience with Flutter, structured screens, and simple interactions for plans, labs, and recommendations.',
            'project-result-label': 'Result',
            'project-result': 'Delivered a clean graduation project with a smoother journey and a more confident presentation of results.',
            'project-video-title': 'Video',
            'project-video-sub': 'Watch project demo',
            'project-screens-title': 'Screens',
            'project-screens-sub': 'Open project screenshots',
            'project-modal-close': 'Close modal',
            'project-modal-next': 'Next',
            'project-modal-prev': 'Previous',
            'project-video-close': 'Close video modal',
            'project-video-instructions': 'Video demo preview',
            'project-video-heading': 'Project Video',
            'project-video-body': 'Add your project demo video file or embed link here to show the app flow, main features, and real usage.',
            'project-video-note': 'Current layout is ready for a video file whenever you add one.',
            'testimonials-title': 'Testimonials',
            'testimonials-subtitle': 'What clients and colleagues say about my work',
            'testimonial-1': '"Raneem is an exceptional developer who truly understands user needs. Her work on our platform\'s backend significantly improved our performance and scalability."',
            'testimonial-2': '"Collaborating with Raneem on the Fitplan app was a joy. Her MERN stack expertise and attention to detail resulted in a flawless product our users love."',
            'testimonial-3': '"A proactive problem-solver and a skilled full-stack developer. Raneem\'s contributions to our codebase were invaluable. Highly recommended!"',
            'contact-label': 'GET IN TOUCH',
            'contact-title': 'Let\'s Talk',
            'contact-side-text': 'Have a project in mind or want to discuss the latest in tech? Feel free to reach out.',
            'contact-name': 'Your Name',
            'contact-email': 'Email Address',
            'contact-message': 'Your Message',
            'contact-submit': 'Send Message',
            'footer-left-title': 'DON\'T BE SHY !',
            'footer-left-text': 'Feel free to get in touch with me. I am always open to discussing new projects, creative ideas, or opportunities to be part of your vision.',
            'footer-right-title': 'WHO AM I ?',
            'footer-right-text': 'I\'m a Full-Stack Developer and React.js enthusiast, focused on building scalable, user-friendly applications with clean code and reliable performance.',
            'footer-bottom': '© 2026 Raneem Mohsen. All rights reserved.',
        },
        ar: {
            'home-nav': 'الرئيسية',
            'about-nav': 'عني',
            'education-nav': 'التعليم',
            'skills-nav': 'المهارات',
            'experience-nav': 'الخبرة',
            'services-nav': 'الخدمات',
            'projects-nav': 'المشاريع',
            'testimonials-nav': 'التقييمات',
            'contact-nav': 'تواصل',
            'contact-btn': 'اتصل بي',
            'welcome-badge': 'مرحباً بك في عالمي',
            'greeting': 'مرحباً، أنا',
            'summary': 'أبني تطبيقات ويب عالية الأداء وقابلة للتوسع باستخدام React.js و Node.js.',
            'portfolio-btn': 'محفظتي',
            'cv-btn': 'تحميل السيرة الذاتية',
            'about-title': 'معلومات عني',
            'about-subtitle': 'مدفوعة بالشغف والأداء',
            'about-text': 'أنا رانيم، مطورة Full-Stack شغوفة، أركز على بناء تطبيقات الويب باستخدام React.js و Node.js. أكتب كوداً نظيفاً وسهل الصيانة، ولدي خبرة عملية في إنشاء REST APIs وتصميم قواعد البيانات للمشاريع الأكاديمية والشخصية. حسّنت أداء الواجهة الأمامية بأكثر من 25% في مشاريعي من خلال تحسين إدارة الحالة وتقنيات التحميل الكسول.',
            'education-title': 'التعليم',
            'certifications-title': 'الشهادات',
            'degree-title': 'بكالوريوس في علوم الحاسب',
            'university': 'أكاديمية السادات لعلوم الإدارة',
            'edu-project': 'بكالوريوس في علوم الحاسب — تقدير ممتاز',
            'start-date': 'سبتمبر 2020',
            'end-date': 'يوليو 2024',
            'gpa': '3.32/4',
            'location': 'القاهرة، مصر',
            'view-cert': 'عرض الشهادة',
            'cert-title-1': 'الواجهة الأمامية، رووت',
            'cert-provider-1': 'أكاديمية Route',
            'cert-desc-1': 'غطّى أساسيات تطوير الواجهة الأمامية بما يشمل React و JavaScript وممارسات HTML/CSS الحديثة.',
            'cert-title-2': 'CIB بنك',
            'cert-provider-2': 'CIB بنك',
            'cert-desc-2': 'ركز على مبادئ العمل المصرفي ومتطلبات الالتزام والعمليات المصرفية العملية.',
            'cert-title-3': 'CCNA، Telecom Egypt',
            'cert-provider-3': 'Telecom Egypt',
            'cert-desc-3': 'بنى معرفة عملية في أساسيات الشبكات والتوجيه ومفاهيم أمان الشبكات الأساسية.',
            'cert-title-4': 'بنك مصر',
            'cert-provider-4': 'بنك مصر',
            'cert-desc-4': 'عرّف بالخدمات المصرفية الأساسية والمنتجات المالية وتقديم خدمة يركز على العميل.',
            'skills-title': 'المهارات التقنية',
            'frontend-title': 'هندسة الواجهة الأمامية',
            'frontend-desc': 'تصميم وتطوير تطبيقات ويب قابلة للتوسع وعالية الأداء باستخدام React.js مع التركيز على هيكلة نظيفة وكود قابل للصيانة وتحسين العرض وتجربة مستخدم سلسة عبر الأجهزة.',
            'backend-title': 'تطوير الخلفية',
            'backend-desc': 'بناء خدمات خلفية آمنة وقابلة للتوسع باستخدام Node.js و Express.js مع أنماط هيكلية منظمة وتكامل فعال مع قواعد البيانات لضمان الاعتمادية والأداء.',
            'database-title': 'أنظمة قواعد البيانات',
            'database-desc': 'تصميم مخططات قواعد البيانات العلائقية وكتابة استعلامات محسّنة للحفاظ على سلامة البيانات وكفاءة الأداء وسلوك التطبيق القابل للتوسع.',
            'foundation-title': 'أساسيات علوم الحاسب',
            'foundation-desc': 'تطبيق أساسيات الهندسة البرمجية لبناء أنظمة برمجية منظمة وقابلة للصيانة والتوسع.',
            'tools-title': 'أدوات التطوير',
            'tools-desc': 'إدارة التحكم في الإصدارات واختبار الـ API وسير العمل المنظم للحفاظ على قواعد كود نظيفة وتعاونية وجاهزة للإنتاج.',
            'soft-title': 'المهارات الشخصية',
            'soft-desc': 'تطبيق التفكير التحليلي لتفكيك المشكلات المعقدة والعمل بفعالية ضمن الفريق والتكيف بسرعة مع التقنيات والمتطلبات الجديدة.',
            'experience-title': 'الخبرة والمنظمات',
            'services-label': 'ما أقدمه',
            'services-title': 'خدماتي',
            'services-subtitle': 'حلول عملية بهيكلية نظيفة وكود قابل للتوسع وتسليم موثوق.',
               'experience-role-1': 'متدربة',
               'experience-company-1': 'بنك CIB',
               'experience-date-1': 'نوفمبر 2023 • القاهرة، مصر',
               'experience-bullet-1-1': 'اكتسبت معرفة أساسية بمبادئ المصرفية والممارسات واللوائح.',
               'experience-bullet-1-2': 'عززت فرص التوظيف في قطاع التمويل.',
               'experience-bullet-1-3': 'تم الاعتراف بها من أصحاب العمل كعلامة على الاحترافية.',
               'experience-role-2': 'متدربة',
               'experience-company-2': 'بنك مصر',
               'experience-date-2': '2021 — نوفمبر 2021 • القاهرة، مصر',
               'experience-bullet-2-1': 'قدمت مجموعة واسعة من الخدمات المصرفية بما في ذلك الحسابات الشخصية والقروض وبطاقات الائتمان.',
               'experience-bullet-2-2': 'تعلّمت خدمات المصرفية للشركات بما في ذلك التمويل والدعم الاستثماري.',
               'experience-role-3': 'متطوعة خدمة مجتمعية',
               'experience-company-3': 'جمعية رسالة الخيرية',
               'experience-date-3': 'يناير 2025 — ديسمبر 2025 • القاهرة، مصر',
               'experience-bullet-3-1': 'نسّقت فعاليات خيرية كبيرة وقوافل توزيع بالتعاون مع مجموعات مجتمعية لزيادة الوصول وضمان وصول المساعدة في الوقت المناسب.',
               'experience-bullet-3-2': 'استقطبت ووجّهت المتطوعين، مما حسّن تفاعل الفريق والاعتمادية التشغيلية.',
            'service-1-title': 'تصميم قواعد البيانات',
            'service-1-desc': 'مخططات فعالة محسّنة للأداء والأمان وقابلية التوسع على المدى الطويل.',
            'service-1-tag-1': 'SQL Server',
            'service-1-tag-2': 'Entity Framework',
            'service-1-tag-3': 'T-SQL',
            'service-2-title': 'تطوير الـ API',
            'service-2-desc': 'واجهات REST آمنة وموثقة لتطبيقات الويب والموبايل مع تكامل نظيف.',
            'service-2-tag-1': 'Node.js',
            'service-2-tag-2': 'JWT Auth',
            'service-2-tag-3': 'Postman',
            'service-3-title': 'تطبيقات الويب',
            'service-3-desc': 'بناء تطبيقات ويب كاملة باستخدام React و Next.js وأنماط خلفية حديثة.',
            'service-3-tag-1': 'React.js',
            'service-3-tag-2': 'Next.js',
            'service-3-tag-3': 'Node.js',
            'service-3-tag-4': 'Express.js',
            'projects-title': 'المشاريع المميزة',
            'project-pill': 'مشروع تخرج',
            'project-title': 'تطبيق Fitplan',
            'project-lead': 'تطبيق موبايل صُمم لإنشاء خطط غذائية مخصصة ومساعدة المستخدمين على اتباع عادات صحية بواجهة واضحة وبسيطة.',
            'project-action-label': 'الإجراء',
            'project-challenge': 'جعل تدفقات الصحة تبدو هادئة وسهلة الفهم ويمكن الوثوق بها للمستخدمين الذين يتعاملون مع حالات مختلفة.',
            'project-action': 'تم بناء التجربة باستخدام Flutter مع شاشات منظمة وتفاعلات بسيطة للخطط والتحاليل والتوصيات.',
            'project-result-label': 'النتيجة',
            'project-result': 'تم تسليم مشروع تخرج نظيف مع رحلة استخدام أسلس وعرض أكثر ثقة للنتائج.',
            'project-video-title': 'فيديو',
            'project-video-sub': 'شاهد عرض المشروع',
            'project-screens-title': 'الصور',
            'project-screens-sub': 'افتح لقطات المشروع',
            'project-modal-close': 'إغلاق النافذة',
            'project-modal-next': 'التالي',
            'project-modal-prev': 'السابق',
            'project-video-close': 'إغلاق نافذة الفيديو',
            'project-video-instructions': 'معاينة عرض الفيديو',
            'project-video-heading': 'فيديو المشروع',
            'project-video-body': 'أضف ملف فيديو عرض المشروع أو رابط التضمين هنا لإظهار تدفق التطبيق والميزات الرئيسية والاستخدام الحقيقي.',
            'project-video-note': 'التصميم الحالي جاهز لإضافة فيديو في أي وقت.',
            'testimonials-title': 'التقييمات',
            'testimonials-subtitle': 'ما يقوله العملاء وزملاء العمل عن أدائي',
            'testimonial-1': '"رانيم مطورة مميزة تفهم احتياجات المستخدمين حقاً. وقد أدى عملها على الواجهة الخلفية لمنصتنا إلى تحسين الأداء وقابلية التوسع بشكل كبير."',
            'testimonial-2': '"كان التعاون مع رانيم في تطبيق Fitplan ممتعاً. خبرتها في MERN stack واهتمامها بالتفاصيل أفرزا منتجاً مثالياً أحبه المستخدمون."',
            'testimonial-3': '"شخصية مبادرة في حل المشكلات ومطورة Full-Stack متمكنة. كانت مساهمات رانيم في قاعدة الكود لا تقدر بثمن. أوصي بها بشدة!"',
            'contact-label': 'تواصل معي',
            'contact-title': 'لنتحدث',
            'contact-side-text': 'هل لديك مشروع في بالك أو تريد مناقشة أحدث ما في التقنية؟ لا تتردد في التواصل معي.',
            'contact-name': 'اسمك',
            'contact-email': 'البريد الإلكتروني',
            'contact-message': 'رسالتك',
            'contact-submit': 'إرسال الرسالة',
            'footer-left-title': 'لا تتردد !',
            'footer-left-text': 'تواصل معي في أي وقت. أنا دائماً منفتحة لمناقشة المشاريع الجديدة والأفكار الإبداعية أو فرص الانضمام إلى رؤيتك.',
            'footer-right-title': 'من أنا ؟',
            'footer-right-text': 'أنا مطورة Full-Stack ومهتمة بـ React.js، أركز على بناء تطبيقات قابلة للتوسع وسهلة الاستخدام بكود نظيف وأداء موثوق.',
            'footer-bottom': '© 2026 رانيم محسن. جميع الحقوق محفوظة.',
        }
    };

    // تحميل اللغة المحفوظة
    let currentLanguage = localStorage.getItem('language') || 'en';
    
    function setLanguage(lang) {
        currentLanguage = lang;
        localStorage.setItem('language', lang);
        
        // تعديل اتجاه الصفحة
        htmlElement.setAttribute('lang', lang);
        htmlElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
        
        // تحديث النصوص
        Object.keys(translations[lang]).forEach(key => {
            const elements = document.querySelectorAll(`[data-i18n="${key}"]`);
            elements.forEach(el => {
                el.textContent = translations[lang][key];
            });

            const htmlElements = document.querySelectorAll(`[data-i18n-html="${key}"]`);
            htmlElements.forEach(el => {
                el.innerHTML = translations[lang][key];
            });

            const placeholderElements = document.querySelectorAll(`[data-i18n-placeholder="${key}"]`);
            placeholderElements.forEach(el => {
                el.setAttribute('placeholder', translations[lang][key]);
            });

            const ariaLabelElements = document.querySelectorAll(`[data-i18n-aria-label="${key}"]`);
            ariaLabelElements.forEach(el => {
                el.setAttribute('aria-label', translations[lang][key]);
            });
        });
        
        // تحديث body class للتحكم بالأنماط حسب اللغة
        if (lang === 'ar') {
            document.body.setAttribute('data-lang', 'ar');
        } else {
            document.body.removeAttribute('data-lang');
        }
    }
    
    if (langBtn) {
        langBtn.addEventListener('click', () => {
            const newLang = currentLanguage === 'en' ? 'ar' : 'en';
            setLanguage(newLang);
        });
    }
    
    // تطبيق اللغة الأولية
    setLanguage(currentLanguage);

    // --- Contact Form Handler ---
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Create mailto link
            const mailtoLink = `mailto:ranemmohsen05@gmail.com?subject=Message from ${name}&body=${encodeURIComponent(message)}%0D%0A%0D%0AFrom: ${email}`;
            window.location.href = mailtoLink;

            // Reset form
            contactForm.reset();
        });
    }

    // Set initial state for reveal elements
    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        revealObserver.observe(el);
    });

    // Add CSS for revealed state dynamically or put it in style.css
    const style = document.createElement('style');
    style.innerHTML = `
        .revealed {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);

    // --- Project modal / image viewer ---
    const projectModal = document.getElementById('projectModal');
    const projectVideoModal = document.getElementById('projectVideoModal');
    const modalScroll = document.getElementById('modalScroll');
    const modalClose = document.getElementById('modalClose');
    const videoModalClose = document.getElementById('videoModalClose');
    const modalPrev = document.getElementById('modalPrev');
    const modalNext = document.getElementById('modalNext');
    const openProjectVideo = document.getElementById('openProjectVideo');
    const openProjectScreens = document.getElementById('openProjectScreens');
    const heroImageWrapper = document.querySelector('.hero-image-container .image-wrapper');
    let currentProjectContainer = null;
    let currentIndex = 0;

    function getProjectImageSources(projectImageContainer) {
        if (!projectImageContainer) return [];

        const configuredSources = projectImageContainer.getAttribute('data-project-images');
        if (configuredSources) {
            return configuredSources
                .split(',')
                .map((source) => source.trim())
                .filter(Boolean);
        }

        const imageElements = projectImageContainer.querySelectorAll('.project-shot img');
        const sources = Array.from(imageElements)
            .map((image) => image.getAttribute('src'))
            .filter(Boolean);

        return [...new Set(sources)];
    }

    function createImageItem(src, idx) {
        const wrapper = document.createElement('div');
        wrapper.className = 'modal-phone';
        wrapper.setAttribute('role', 'listitem');
        wrapper.setAttribute('tabindex', '-1');

        const img = document.createElement('img');
        img.src = src;
        img.alt = `Project screen ${idx + 1}`;
        img.className = 'modal-img';
        wrapper.appendChild(img);

        wrapper.addEventListener('click', (e) => {
            e.stopPropagation();
            closeModal();
        });

        return wrapper;
    }

    function closeModal() {
        if (!projectModal) return;
        projectModal.classList.remove('open');
        projectModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    function closeVideoModal() {
        if (!projectVideoModal) return;
        projectVideoModal.classList.remove('open');
        projectVideoModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    function openVideoModal() {
        if (!projectVideoModal) return;
        projectVideoModal.classList.add('open');
        projectVideoModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function showIndex(i) {
        const items = modalScroll.querySelectorAll('.modal-phone');
        if (!items.length) return;
        if (i < 0) i = 0;
        if (i >= items.length) i = items.length - 1;
        currentIndex = i;
        items.forEach((it, idx) => {
            it.classList.toggle('selected', idx === currentIndex);
        });
        const target = items[currentIndex];
        target.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        // keep focus for keyboard navigation
        target.focus({ preventScroll: true });
    }

    function openProjectModal(projectImageContainer, startIndex = 0) {
        if (!projectModal || !modalScroll) return;
        modalScroll.innerHTML = '';
        currentProjectContainer = projectImageContainer;
        const projectImageSources = getProjectImageSources(projectImageContainer);

        if (projectImageSources.length) {
            projectImageSources.forEach((src, idx) => {
                const item = createImageItem(src, idx);
                modalScroll.appendChild(item);
            });
        } else {
            const phones = projectImageContainer.querySelectorAll('.fitplan-phone');
            if (!phones.length) return;
            phones.forEach((ph, idx) => {
                const clone = ph.cloneNode(true);
                clone.classList.add('modal-phone');
                clone.setAttribute('role', 'listitem');
                clone.setAttribute('tabindex', '-1');

                clone.addEventListener('click', (e) => {
                    e.stopPropagation();
                    closeModal();
                });

                modalScroll.appendChild(clone);
            });
        }

        projectModal.classList.add('open');
        projectModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        // show chosen index (defaults to 0)
        setTimeout(() => showIndex(startIndex), 40);
    }

    // open modal when clicking project preview area (and set hero on load)
    const projectContainers = document.querySelectorAll('.project-image');
    projectContainers.forEach(container => {
        container.style.cursor = 'zoom-in';
        container.addEventListener('click', () => openProjectModal(container));
    });

    if (openProjectScreens) {
        openProjectScreens.addEventListener('click', () => {
            const firstProject = document.querySelector('.project-image');
            if (firstProject) openProjectModal(firstProject, 0);
        });
    }

    if (openProjectVideo) {
        openProjectVideo.addEventListener('click', openVideoModal);
    }

    // Keep the hero on the profile photo.
    if (heroImageWrapper) {
        const profileSrc = 'profile.jpg';
        const existingHeroImage = heroImageWrapper.querySelector('img');
        if (existingHeroImage) {
            existingHeroImage.src = profileSrc;
            existingHeroImage.alt = 'Raneem Mohsen';
            existingHeroImage.className = 'profile-img';
        } else {
            const heroImg = document.createElement('img');
            heroImg.src = profileSrc;
            heroImg.alt = 'Raneem Mohsen';
            heroImg.className = 'profile-img';
            heroImageWrapper.innerHTML = '';
            heroImageWrapper.appendChild(heroImg);
        }

        heroImageWrapper.style.cursor = 'pointer';
        heroImageWrapper.addEventListener('click', () => {
            const containingProject = document.querySelector('.project-image');
            if (containingProject) openProjectModal(containingProject, 0);
        });
    }

    // close handlers
    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (videoModalClose) videoModalClose.addEventListener('click', closeVideoModal);
    if (projectModal) projectModal.addEventListener('click', (e) => {
        if (e.target === projectModal) closeModal();
    });
    if (projectVideoModal) projectVideoModal.addEventListener('click', (e) => {
        if (e.target === projectVideoModal) closeVideoModal();
    });

    // navigation
    if (modalPrev) modalPrev.addEventListener('click', () => showIndex(currentIndex - 1));
    if (modalNext) modalNext.addEventListener('click', () => showIndex(currentIndex + 1));

    // keyboard navigation inside modal
    document.addEventListener('keydown', (e) => {
        if (projectVideoModal && projectVideoModal.classList.contains('open') && e.key === 'Escape') {
            closeVideoModal();
            return;
        }
        if (!projectModal || !projectModal.classList.contains('open')) return;
        if (e.key === 'ArrowLeft') showIndex(currentIndex - 1);
        if (e.key === 'ArrowRight') showIndex(currentIndex + 1);
        if (e.key === 'Escape') closeModal();
    });
});
