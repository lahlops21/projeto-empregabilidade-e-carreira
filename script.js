// Efeito de scroll no menu
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Fade in dos artigos
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.article-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

/* --- EFEITO DECRYPTED/HACKER --- */
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function runHackerEffect(target) {
    let iterations = 0;
    const originalText = target.innerText.toUpperCase(); 
    
    if(target.dataset.interval) clearInterval(target.dataset.interval);

    const interval = setInterval(() => {
        target.innerText = originalText
            .split("")
            .map((letter, index) => {
                if (index < iterations) {
                    return originalText[index];
                }
                return letters[Math.floor(Math.random() * letters.length)];
            })
            .join("");

        if (iterations >= originalText.length) { 
            clearInterval(interval);
            target.innerText = originalText;
        }
        
        iterations += 1 / 3; 
    }, 30);
    
    target.dataset.interval = interval;
}

// Configura o efeito
const hackerElement = document.querySelector(".hacker-effect");

if(hackerElement) {
    // Roda ao carregar a página
    window.addEventListener('load', () => runHackerEffect(hackerElement));
    
    // Roda ao passar o mouse
    hackerElement.addEventListener('mouseover', () => runHackerEffect(hackerElement));
}