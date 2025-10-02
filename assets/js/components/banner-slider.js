/**
 * Hero Banner Slider
 * Features: Auto-slide, manual navigation, touch support, pause on hover
 */

class BannerSlider {
    constructor() {
        this.slider = document.querySelector('.banner-slider');
        this.slides = document.querySelectorAll('.banner-slide');
        this.indicators = document.querySelectorAll('.indicator');
        this.prevBtn = document.querySelector('.banner-prev');
        this.nextBtn = document.querySelector('.banner-next');
        
        this.currentSlide = 0;
        this.totalSlides = this.slides.length;
        this.autoSlideInterval = null;
        this.autoSlideDelay = 4000; // 4 seconds
        this.isTransitioning = false;
        
        this.init();
    }
    
    init() {
        if (!this.slider || this.totalSlides === 0) return;
        
        this.setupEventListeners();
        this.startAutoSlide();
        this.setupTouchSupport();
        this.setupKeyboardSupport();
    }
    
    setupEventListeners() {
        // Navigation buttons
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => this.prevSlide());
        }
        
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => this.nextSlide());
        }
        
        // Indicators
        this.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => this.goToSlide(index));
        });
        
        // Pause on hover
        this.slider.addEventListener('mouseenter', () => this.pauseAutoSlide());
        this.slider.addEventListener('mouseleave', () => this.startAutoSlide());
        
        // Handle visibility change (pause when tab is not active)
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.pauseAutoSlide();
            } else {
                this.startAutoSlide();
            }
        });
    }
    
    setupTouchSupport() {
        let startX = 0;
        let endX = 0;
        let startY = 0;
        let endY = 0;
        
        this.slider.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
            this.pauseAutoSlide();
        }, { passive: true });
        
        this.slider.addEventListener('touchmove', (e) => {
            // Prevent default only if horizontal swipe is detected
            const currentX = e.touches[0].clientX;
            const currentY = e.touches[0].clientY;
            const diffX = Math.abs(currentX - startX);
            const diffY = Math.abs(currentY - startY);
            
            if (diffX > diffY) {
                e.preventDefault();
            }
        }, { passive: false });
        
        this.slider.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            endY = e.changedTouches[0].clientY;
            
            const diffX = startX - endX;
            const diffY = Math.abs(startY - endY);
            const minSwipeDistance = 50;
            
            // Only trigger swipe if horizontal movement is greater than vertical
            if (Math.abs(diffX) > minSwipeDistance && Math.abs(diffX) > diffY) {
                if (diffX > 0) {
                    this.nextSlide();
                } else {
                    this.prevSlide();
                }
            }
            
            this.startAutoSlide();
        }, { passive: true });
    }
    
    setupKeyboardSupport() {
        document.addEventListener('keydown', (e) => {
            if (!this.isSliderInView()) return;
            
            switch(e.key) {
                case 'ArrowLeft':
                    e.preventDefault();
                    this.prevSlide();
                    break;
                case 'ArrowRight':
                    e.preventDefault();
                    this.nextSlide();
                    break;
                case ' ':
                    e.preventDefault();
                    this.toggleAutoSlide();
                    break;
            }
        });
    }
    
    isSliderInView() {
        const rect = this.slider.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom > 0;
    }
    
    goToSlide(slideIndex) {
        if (this.isTransitioning || slideIndex === this.currentSlide) return;
        
        this.isTransitioning = true;
        
        // Remove active class from current slide and indicator
        this.slides[this.currentSlide].classList.remove('active');
        this.indicators[this.currentSlide].classList.remove('active');
        
        // Update current slide index
        this.currentSlide = slideIndex;
        
        // Add active class to new slide and indicator
        this.slides[this.currentSlide].classList.add('active');
        this.indicators[this.currentSlide].classList.add('active');
        
        // Reset transition flag after animation completes
        setTimeout(() => {
            this.isTransitioning = false;
        }, 800);
        
        // Trigger content animation
        this.animateSlideContent();
    }
    
    nextSlide() {
        const nextIndex = (this.currentSlide + 1) % this.totalSlides;
        this.goToSlide(nextIndex);
    }
    
    prevSlide() {
        const prevIndex = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
        this.goToSlide(prevIndex);
    }
    
    startAutoSlide() {
        this.pauseAutoSlide();
        this.autoSlideInterval = setInterval(() => {
            this.nextSlide();
        }, this.autoSlideDelay);
    }
    
    pauseAutoSlide() {
        if (this.autoSlideInterval) {
            clearInterval(this.autoSlideInterval);
            this.autoSlideInterval = null;
        }
    }
    
    toggleAutoSlide() {
        if (this.autoSlideInterval) {
            this.pauseAutoSlide();
        } else {
            this.startAutoSlide();
        }
    }
    
    animateSlideContent() {
        const activeSlide = this.slides[this.currentSlide];
        const content = activeSlide.querySelector('.banner-content');
        
        if (content) {
            // Reset animation
            content.style.animation = 'none';
            content.offsetHeight; // Trigger reflow
            content.style.animation = 'fadeInUp 1s ease-out';
            
            // Animate individual elements
            const headline = content.querySelector('.banner-headline');
            const subheadline = content.querySelector('.banner-subheadline');
            const cta = content.querySelector('.banner-cta');
            
            if (headline) {
                headline.style.animation = 'none';
                headline.offsetHeight;
                headline.style.animation = 'slideInFromTop 1s ease-out 0.2s both';
            }
            
            if (subheadline) {
                subheadline.style.animation = 'none';
                subheadline.offsetHeight;
                subheadline.style.animation = 'slideInFromBottom 1s ease-out 0.4s both';
            }
            
            if (cta) {
                cta.style.animation = 'none';
                cta.offsetHeight;
                cta.style.animation = 'bounceIn 1s ease-out 0.6s both';
            }
        }
    }
    
    // Public methods for external control
    destroy() {
        this.pauseAutoSlide();
        // Remove event listeners if needed
    }
    
    updateAutoSlideDelay(delay) {
        this.autoSlideDelay = delay;
        if (this.autoSlideInterval) {
            this.startAutoSlide();
        }
    }
}

// Initialize banner slider when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.bannerSlider = new BannerSlider();
});

// Handle page visibility for better performance
document.addEventListener('visibilitychange', () => {
    if (window.bannerSlider) {
        if (document.hidden) {
            window.bannerSlider.pauseAutoSlide();
        } else {
            window.bannerSlider.startAutoSlide();
        }
    }
});
