// change Language
const translations = {
    ar: {
        pageTitle: "مستقبل الأعمال",
        navHome: "الرئيسية",
        navAbout: "من نحن",
        navServices: "الخدمات",
        navClients: "عملاءنا",
        navWork: "أعمالنا",
        navContact: "أتصل بنا",
        sectionHome: "الرئيسية",
        scrollDown: "مرر لأسفل",
        sectionAbout: "من نحن",
        companyName: "مستقبل الأعمال",
        subtitle1: "إدارة المعارض",
        subtitle2: "و الفاعليات",
        aboutTitle: "من نحن",
        aboutText: '"الأعمال المستقبلية" تقع في عداد النخبة. نحن متخصصون في إدارة المعارض والفعاليات بأحدث الحلول. فريقنا يطور حلولاً أنيقة تعالج التحديات المعمارية من خلال الابتكار والتصميم والخبرة العلمية.',
        servicesTitle: "خدماتنا",
        service1: "المعدات التقنية و التفاعلية",
        service2: "تصميم المعارض",
        service3: "إدارة الفعاليات",
        serviceDesc: "حلول مبتكرة ومتطورة لخدمة عملائنا",
        partnersTitle: "شركاءنا",
        partnersSubtitle: "ما قمنا به من مشاريع مميزة",
        project1: "الكل",
        project2: "فعالية شركات",
        project3: "مؤتمر دولي",
        project4: "حفل إطلاق منتج",
        clientsTitle: "عملاؤنا",
        contactTitle: "تواصل معنا",
        email: "البريد الإلكتروني:",
        phone: "الهاتف:",
        address: "العنوان:",
        location: "الرياض، السعودية",
        formTitle: "أرسل لنا رسالة",
        formName: "الاسم",
        formEmail: "البريد الإلكتروني",
        formMessage: "الرسالة",
        formSubmit: "إرسال"
    },
    en: {
        pageTitle: "Future Business",
        navHome: "Home",
        navAbout: "About Us",
        navServices: "Services",
        navClients: "Our Clients",
        navWork: "Our Work",
        navContact: "Contact Us",
        sectionHome: "Home",
        scrollDown: "Scroll Down",
        sectionAbout: "About Us",
        companyName: "Future Business",
        subtitle1: "Exhibition & Event",
        subtitle2: "Management",
        aboutTitle: "About Us",
        aboutText: '"Future Business" is among the elite. We specialize in managing exhibitions and events with cutting-edge solutions. Our team develops elegant solutions that address architectural challenges through innovation, design, and scientific expertise.',
        servicesTitle: "Our Services",
        service1: "Technical & Interactive Equipment",
        service2: "Exhibition Design",
        service3: "Event Management",
        serviceDesc: "Innovative and advanced solutions to serve our clients",
        partnersTitle: "Our Partners",
        partnersSubtitle: "Our distinguished projects",
        project1: "All",
        project2: "Corporate Event",
        project3: "International Conference",
        project4: "Product Launch",
        clientsTitle: "Our Clients",
        contactTitle: "Contact Us",
        email: "Email:",
        phone: "Phone:",
        address: "Address:",
        location: "Riyadh, Saudi Arabia",
        formTitle: "Send us a message",
        formName: "Name",
        formEmail: "Email",
        formMessage: "Message",
        formSubmit: "Send"
    }
};

let currentLanguage = localStorage.getItem('lang') ;
document.getElementById('currentLang').textContent =
    currentLanguage === 'ar' ? 'العربية' : 'English';


const arabicButton = document.getElementById('arabic');
const englishButton = document.getElementById('english');

arabicButton.addEventListener('click', () => {
    currentLanguage = 'ar';
    document.getElementById('currentLang').textContent = 'العربية';
    changeLanguage();
});

englishButton.addEventListener('click', () => {
    currentLanguage = 'en';
    document.getElementById('currentLang').textContent = 'English';
    changeLanguage();
});

function changeLanguage() {
    const selected = translations[currentLanguage];

    const elements = document.querySelectorAll("[data-translate]");

    elements.forEach(el => {
        const key = el.getAttribute("data-translate");
        if (selected[key]) {
            el.textContent = selected[key];
        }
    });
    const placeholderElements = document.querySelectorAll("[data-translate-placeholder]");
    placeholderElements.forEach(el => {
        const key = el.getAttribute("data-translate-placeholder");
        if (selected[key]) {
            el.placeholder = selected[key];
        }
    });

    document.body.dir = currentLanguage === "ar" ? "rtl" : "ltr";
    localStorage.setItem("lang", currentLanguage);
}
changeLanguage(currentLanguage)

// active link 
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link ,index ) => {
    link.addEventListener("click", () => {
        navLinks.forEach((link) => {
            link.classList.remove("active");
        });
        link.classList.add("active");
        if(index === navLinks.length - 1){
            navLinks[0].classList.add("active");
        }
    });
});

// filter buttons
const filterButtons = document.querySelectorAll(".filter-button");
// console.log(filterButtons)
filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        filterButtons.forEach((btn) => {
            btn.classList.remove("active");
        });
        button.classList.add("active");
        filterActiveCards(button.dataset.filter);
    });
});

function filterActiveCards(filter) {
    const cards = document.querySelectorAll(".partner-content .card");

    cards.forEach(card => {
        const type = card.getAttribute("card-data"); 
        console.log(card.getAttribute("card-data") , filter)
        if (filter === "all" || type === filter) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
}


// Initialize Swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 4,
    spaceBetween: 40,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        640: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});