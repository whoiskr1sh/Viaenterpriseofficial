document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const dotsContainer = document.querySelector('.slider-dots');
    let currentSlide = 0;
    const slideCount = slides.length;
    let slideInterval;

    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    // Show first slide
    showSlide(currentSlide);
    startSlideShow();

    // Event listeners
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    // Pause on hover
    const slider = document.querySelector('.slider');
    slider.addEventListener('mouseenter', pauseSlideShow);
    slider.addEventListener('mouseleave', startSlideShow);

    // Touch events for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    slider.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
        pauseSlideShow();
    }, false);
    
    slider.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
        startSlideShow();
    }, false);

    function handleSwipe() {
        const swipeThreshold = 50;
        const swipeDiff = touchStartX - touchEndX;
        
        if (Math.abs(swipeDiff) > swipeThreshold) {
            if (swipeDiff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
    }

    function showSlide(index) {
        // Hide all slides
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Show current slide and update dot
        slides[index].classList.add('active');
        dots[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slideCount;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slideCount) % slideCount;
        showSlide(currentSlide);
    }

    function goToSlide(index) {
        currentSlide = index;
        showSlide(currentSlide);
    }

    function startSlideShow() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 5000);
    }

    function pauseSlideShow() {
        clearInterval(slideInterval);
    }
});
