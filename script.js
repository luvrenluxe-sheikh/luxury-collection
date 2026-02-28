// Lazy Loading Images
const lazyImages = document.querySelectorAll('img.lazy');
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.add('loaded');
            imageObserver.unobserve(img);
        }
    });
});

lazyImages.forEach(img => imageObserver.observe(img));

// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Close menu when clicking nav links
document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});

// View More Collections
const viewMoreBtn = document.getElementById('viewMore');
const hiddenCards = document.querySelectorAll('.card.hidden');

if (viewMoreBtn) {
    viewMoreBtn.addEventListener('click', () => {
        hiddenCards.forEach(card => {
            card.classList.remove('hidden');
            card.style.display = 'block';
        });
        viewMoreBtn.style.display = 'none';
    });
}

// Order Modal
const modal = document.getElementById('orderModal');
const orderBtns = [
    document.getElementById('orderBtn'),
    document.getElementById('orderBtnHero'),
    document.getElementById('orderBtnFooter')
];
const modalClose = document.getElementById('modalClose');

orderBtns.forEach(btn => {
    if (btn) {
        btn.addEventListener('click', () => {
            modal.classList.add('active');
            nav.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    }
});

if (modalClose) {
    modalClose.addEventListener('click', () => {
        modal.classList.remove('active');
    });
}

// Close modal on outside click
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});

// Countdown Timer
function startTimer() {
    let time = 24 * 60 * 60; // 24 hours in seconds
    const timerEl = document.getElementById('timer');
    
    setInterval(() => {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;
        
        timerEl.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        time--;
        if (time < 0) time = 24 * 60 * 60;
    }, 1000);
}

startTimer();

// Smooth Scroll
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

// Header Scroll Effect
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
    } else {
        header.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});
