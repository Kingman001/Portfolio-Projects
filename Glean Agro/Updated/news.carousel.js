let currentSlide = 0;
const track = document.querySelector('.carousel-track');
const cards = track ? track.children : [];
function showSlide(idx) {
    if (!track || !cards.length) return;
    if (idx < 0) idx = cards.length - 1;
    if (idx >= cards.length) idx = 0;
    currentSlide = idx;
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.display = i === idx ? 'block' : 'none';
    }
}
function moveCarousel(dir) {
    showSlide(currentSlide + dir);
}
document.addEventListener('DOMContentLoaded', function() {
    showSlide(0);
});
document.querySelector('.carousel-button.prev').addEventListener('click', function() {
    moveCarousel(-1);
});
document.querySelector('.carousel-button.next').addEventListener('click', function() {
    moveCarousel(1);
});
setInterval(function() {
    moveCarousel(1);
}, 500); // Change slide every 0.5 seconds

// Optional: Pause on hover functionality
const carousel = document.querySelector('.carousel');
let autoSlideInterval = setInterval(function() {
    moveCarousel(1);
}, 500); // Change slide every 0.5 seconds
carousel.addEventListener('mouseenter', function() {
    clearInterval(autoSlideInterval);
});
carousel.addEventListener('mouseleave', function() {
    autoSlideInterval = setInterval(function() {
        moveCarousel(1);
    }, 500);
});
// End of news carousel code