document.getElementById('search-icon').addEventListener('click', function() {
    alert('Search functionality coming soon!');
});

document.getElementById('cart-icon').addEventListener('click', function() {
    alert('Cart functionality coming soon!');
});

const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let scrollAmount = 0;

nextBtn.addEventListener('click', () => {
    scrollAmount += 200;
    carousel.style.transform = `translateX(-${scrollAmount}px)`;
});

prevBtn.addEventListener('click', () => {
    scrollAmount -= 200;
    if (scrollAmount < 0) scrollAmount = 0;
    carousel.style.transform = `translateX(-${scrollAmount}px)`;
});

document.addEventListener('DOMContentLoaded', () => {
    const readMoreButton = document.querySelector('.read-more');
    const aboutText = document.querySelector('.about-section p');

    readMoreButton.addEventListener('click', () => {
        aboutText.textContent = "Being a one-stop pooja samagri online store in India, My Pooja Box bridges the gap between devotees and devotion. We have sorted all your devotional needs by putting forth a wide assortment of products making it easier for you to buy pooja items online. With a range of options for different pooja ceremonies, festive decor, and gifting solutions, we ensure that our customers find everything they need under one roof. Explore our collection and bring home divine blessings.";
        readMoreButton.style.display = 'none';
    });
});

let currentSlide = 0;
const slides = document.querySelectorAll('.reviews-carousel-item');
const totalSlides = slides.length;

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
    setInterval(() => {
        moveSlide(1);
    }, 3000);
});

function moveSlide(n) {
    showSlide(currentSlide += n);
}

function showSlide(n) {
    if (n >= totalSlides) {
        currentSlide = 0;
    }
    if (n < 0) {
        currentSlide = totalSlides - 1;
    }

    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${-currentSlide * 100}%)`;
    });
}

