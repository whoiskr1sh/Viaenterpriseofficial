// Sale Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all sale page functionality
    initCountdownTimer();
    initSaleProducts();
    initFilters();
    initProductInteractions();
    initNewsletterForm();
    initViewingIndicators();
    initFlashSaleTimers();
    
    // Add scroll animations
    initScrollAnimations();
});

// Sale Products Data
const saleProducts = {
    hotDeals: [
        { id: 101, name: 'Designer Kurta Set', price: 899, originalPrice: 2999, rating: 4.8, reviews: 248, image: 'assets/images/kurta.webp', discount: 70, stock: 3, flashTime: '2h 15m' },
        { id: 102, name: 'Silk Banarasi Saree', price: 1299, originalPrice: 3699, rating: 4.9, reviews: 156, image: 'assets/images/saree.webp', discount: 65, stock: 5, flashTime: '1h 45m' },
        { id: 103, name: 'Wedding Lehenga', price: 2499, originalPrice: 6249, rating: 4.7, reviews: 89, image: 'assets/images/lehenga.jpg', discount: 60, stock: 2, flashTime: '3h 20m' }
    ],
    ethnic: [
        { id: 104, name: 'Ethnic Printed Kurta', price: 1499, originalPrice: 2999, rating: 4.8, reviews: 248, image: 'assets/images/kurta.webp', discount: 50, stock: 8, viewers: 12 },
        { id: 105, name: 'Silk Banarasi Saree', price: 1799, originalPrice: 3299, rating: 4.9, reviews: 156, image: 'assets/images/saree.webp', discount: 45 },
        { id: 106, name: 'Designer Lehenga', price: 2249, originalPrice: 4999, rating: 4.7, reviews: 89, image: 'assets/images/lehenga.jpg', discount: 55 },
        { id: 107, name: 'Cotton Printed Kurti', price: 1199, originalPrice: 1999, rating: 4.6, reviews: 203, image: 'assets/images/kurti.webp', discount: 40 }
    ],
    jewelry: [
        { id: 108, name: 'Traditional Necklace Set', price: 899, originalPrice: 2249, rating: 4.5, reviews: 67, image: 'assets/images/jwelery.webp', discount: 60, stock: 4 },
        { id: 109, name: 'Gold Plated Earrings', price: 649, originalPrice: 999, rating: 4.4, reviews: 124, image: 'assets/images/traditional.webp', discount: 35 },
        { id: 110, name: 'Designer Bangles Set', price: 1299, originalPrice: 2599, rating: 4.7, reviews: 98, image: 'assets/images/jwelery.webp', discount: 50 },
        { id: 111, name: 'Pearl Pendant Set', price: 799, originalPrice: 1449, rating: 4.6, reviews: 156, image: 'assets/images/traditional.webp', discount: 45 }
    ],
    accessories: [
        { id: 112, name: 'Designer Handbag', price: 1399, originalPrice: 1999, rating: 4.3, reviews: 87, image: 'assets/images/accesories.webp', discount: 30 },
        { id: 113, name: 'Premium Leather Wallet', price: 899, originalPrice: 1199, rating: 4.5, reviews: 143, image: 'assets/images/accesories.webp', discount: 25 },
        { id: 114, name: 'Stylish Fashion Watch', price: 599, originalPrice: 999, rating: 4.2, reviews: 76, image: 'assets/images/accesories.webp', discount: 40 },
        { id: 115, name: 'Designer Sunglasses', price: 749, originalPrice: 1149, rating: 4.4, reviews: 92, image: 'assets/images/accesories.webp', discount: 35 }
    ]
};

// Initialize Countdown Timer
function initCountdownTimer() {
    const countdownDate = new Date().getTime() + (5 * 24 * 60 * 60 * 1000); // 5 days from now
    
    function updateTimer() {
        const now = new Date().getTime();
        const distance = countdownDate - now;
        
        if (distance < 0) {
            document.getElementById('saleCountdown').innerHTML = '<div class="time-unit"><span class="time-number">00</span><span class="time-label">EXPIRED</span></div>';
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }
    
    // Update immediately and then every second
    updateTimer();
    setInterval(updateTimer, 1000);
}

// Initialize Sale Products
function initSaleProducts() {
    renderHotDeals();
    renderCategoryProducts();
}

// Render Hot Deals
function renderHotDeals() {
    const dealsCarousel = document.querySelector('.deals-carousel');
    if (!dealsCarousel) return;
    
    dealsCarousel.innerHTML = '';
    
    saleProducts.hotDeals.forEach(product => {
        const dealCard = createHotDealCard(product);
        dealsCarousel.appendChild(dealCard);
    });
}

// Create Hot Deal Card
function createHotDealCard(product) {
    const card = document.createElement('div');
    card.className = 'deal-card flash-sale';
    card.dataset.category = 'hotdeal';
    card.dataset.discount = product.discount;
    card.dataset.price = product.price;
    
    card.innerHTML = `
        <div class="product-badge discount-badge">${product.discount}% OFF</div>
        <button class="wishlist-btn" aria-label="Add to wishlist">
            <i class="far fa-heart"></i>
        </button>
        <img src="${product.image}" alt="${product.name}">
        <div class="product-info">
            <h3>${product.name}</h3>
            <div class="price-stock-container">
                <div class="price">
                    <span class="current-price">₹${product.price.toLocaleString('en-IN')}</span>
                    <span class="original-price">₹${product.originalPrice.toLocaleString('en-IN')}</span>
                </div>
                <div class="stock-timer-section">
                    <div class="stock-info">Only ${product.stock} left!</div>
                    <div class="flash-timer">
                        <i class="fas fa-clock"></i>
                        <span>${product.flashTime} left</span>
                    </div>
                </div>
            </div>
            <a href="#" class="btn btn-outline">Grab Now</a>
        </div>
    `;
    
    return card;
}

// Create Sale Product Card (matching shop.js layout)
function createSaleProductCard(product, category) {
    const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
    const productSlug = product.name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
    
    // Regular product cards matching shop.js layout
    const card = document.createElement('a');
    card.href = `product.html?id=${product.id}&name=${productSlug}`;
    card.className = 'product-card';
    card.dataset.id = product.id;
    card.dataset.price = product.price;
    card.dataset.rating = product.rating;
    card.dataset.category = category;
    
    card.innerHTML = `
        <div class="product-badge discount-badge">${discount}% OFF</div>
            <button class="wishlist-btn" aria-label="Add to wishlist" onclick="event.stopPropagation(); return false;">
                <i class="far fa-heart"></i>
            </button>
            <img src="${product.image}" alt="${product.name}" class="product-img">
            <div class="product-info">
                <h3>${product.name}</h3>
                <div class="rating-price-container">
                    <div class="price">
                        <span class="current-price">₹${product.price.toLocaleString('en-IN')}</span>
                        <span class="original-price">₹${product.originalPrice.toLocaleString('en-IN')}</span>
                    </div>
                    <div class="rating">
                        <span class="rating-number">${product.rating}</span>
                        <span class="stars">★</span>
                        <span class="review-count">(${product.reviews})</span>
                    </div>
                </div>
                <a href="#" class="btn btn-outline">Add to Cart</a>
            </div>
    `;
    return card;
}

// Render Category Products
function renderCategoryProducts() {
    // Render Ethnic Wear
    const ethnicGrid = document.getElementById('ethnicProducts');
    if (ethnicGrid) {
        ethnicGrid.innerHTML = '';
        saleProducts.ethnic.forEach(product => {
            const card = createSaleProductCard(product, 'ethnic');
            ethnicGrid.appendChild(card);
        });
    }
    
    // Render Jewelry
    const jewelryGrid = document.getElementById('jewelryProducts');
    if (jewelryGrid) {
        jewelryGrid.innerHTML = '';
        saleProducts.jewelry.forEach(product => {
            const card = createSaleProductCard(product, 'jewelry');
            jewelryGrid.appendChild(card);
        });
    }
    
    // Render Accessories
    const accessoriesGrid = document.getElementById('accessoriesProducts');
    if (accessoriesGrid) {
        accessoriesGrid.innerHTML = '';
        saleProducts.accessories.forEach(product => {
            const card = createSaleProductCard(product, 'accessories');
            accessoriesGrid.appendChild(card);
        });
    }
}

// Filter and Sorting Functionality
function initFilters() {
    const categoryTabs = document.querySelectorAll('.tab-btn');
    const discountFilters = document.querySelectorAll('.filter-btn');
    const priceRange = document.getElementById('priceRange');
    const sortBy = document.getElementById('sortBy');
    const maxPriceDisplay = document.getElementById('maxPrice');
    
    let currentFilters = {
        category: 'all',
        discount: 0,
        maxPrice: 10000,
        sortBy: 'discount'
    };
    
    // Category filter
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            categoryTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            currentFilters.category = this.dataset.category;
            applyFilters();
        });
    });
    
    // Discount filter
    discountFilters.forEach(filter => {
        filter.addEventListener('click', function() {
            discountFilters.forEach(f => f.classList.remove('active'));
            this.classList.add('active');
            currentFilters.discount = parseInt(this.dataset.discount);
            applyFilters();
        });
    });
    
    // Price range filter
    if (priceRange) {
        priceRange.addEventListener('input', function() {
            currentFilters.maxPrice = parseInt(this.value);
            maxPriceDisplay.textContent = formatPrice(this.value);
            debounce(applyFilters, 300)();
        });
    }
    
    // Sort filter
    if (sortBy) {
        sortBy.addEventListener('change', function() {
            currentFilters.sortBy = this.value;
            applyFilters();
        });
    }
    
    function applyFilters() {
        const productCards = document.querySelectorAll('.product-card');
        let visibleProducts = [];
        
        productCards.forEach(card => {
            const category = card.dataset.category;
            const discount = parseInt(card.dataset.discount) || 0;
            const price = parseInt(card.dataset.price) || 0;
            
            let isVisible = true;
            
            // Category filter
            if (currentFilters.category !== 'all' && category !== currentFilters.category) {
                isVisible = false;
            }
            
            // Discount filter
            if (discount < currentFilters.discount) {
                isVisible = false;
            }
            
            // Price filter
            if (price > currentFilters.maxPrice) {
                isVisible = false;
            }
            
            if (isVisible) {
                visibleProducts.push({
                    element: card,
                    discount: discount,
                    price: price,
                    rating: parseFloat(card.querySelector('.rating-number')?.textContent || '0')
                });
                card.style.display = 'block';
                card.classList.add('fade-in');
            } else {
                card.style.display = 'none';
                card.classList.remove('fade-in');
            }
        });
        
        // Sort visible products
        sortProducts(visibleProducts, currentFilters.sortBy);
        
        // Show no results message if needed
        showNoResultsMessage(visibleProducts.length === 0);
    }
    
    function sortProducts(products, sortType) {
        products.sort((a, b) => {
            switch (sortType) {
                case 'discount':
                    return b.discount - a.discount;
                case 'price-low':
                    return a.price - b.price;
                case 'price-high':
                    return b.price - a.price;
                case 'bestselling':
                    return b.rating - a.rating;
                default:
                    return 0;
            }
        });
        
        // Reorder DOM elements
        products.forEach((product, index) => {
            product.element.style.order = index;
        });
    }
    
    function showNoResultsMessage(show) {
        let noResultsMsg = document.querySelector('.no-results-message');
        
        if (show && !noResultsMsg) {
            noResultsMsg = document.createElement('div');
            noResultsMsg.className = 'no-results-message';
            noResultsMsg.innerHTML = `
                <div style="text-align: center; padding: 60px 20px; color: #666;">
                    <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 20px; opacity: 0.5;"></i>
                    <h3>No products found</h3>
                    <p>Try adjusting your filters to see more results</p>
                    <button class="btn btn-outline" onclick="resetFilters()">Reset Filters</button>
                </div>
            `;
            document.querySelector('.products-grid').appendChild(noResultsMsg);
        } else if (!show && noResultsMsg) {
            noResultsMsg.remove();
        }
    }
    
    // Make resetFilters globally available
    window.resetFilters = function() {
        categoryTabs.forEach(tab => tab.classList.remove('active'));
        categoryTabs[0].classList.add('active');
        discountFilters.forEach(filter => filter.classList.remove('active'));
        if (priceRange) priceRange.value = 10000;
        if (sortBy) sortBy.value = 'discount';
        if (maxPriceDisplay) maxPriceDisplay.textContent = '10,000';
        
        currentFilters = {
            category: 'all',
            discount: 0,
            maxPrice: 10000,
            sortBy: 'discount'
        };
        
        applyFilters();
    };
}

// Product Interactions
function initProductInteractions() {
    // Wishlist functionality
    const wishlistBtns = document.querySelectorAll('.wishlist-btn');
    wishlistBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            this.classList.toggle('active');
            
            const icon = this.querySelector('i');
            if (this.classList.contains('active')) {
                icon.classList.remove('far');
                icon.classList.add('fas');
                showToast('Added to wishlist!', 'success');
            } else {
                icon.classList.remove('fas');
                icon.classList.add('far');
                showToast('Removed from wishlist', 'info');
            }
        });
    });

    // Add to cart functionality
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('add-to-cart-btn') || e.target.classList.contains('grab-btn')) {
            e.preventDefault();
            
            // Add loading state
            const btn = e.target;
            const originalText = btn.textContent;
            btn.textContent = 'Adding...';
            btn.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                btn.textContent = originalText;
                btn.disabled = false;
                showToast('Added to cart!', 'success');
            }, 1000);
        }
    });

    // Product card hover effects
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Newsletter Form
function initNewsletterForm() {
    const newsletterForm = document.getElementById('newsletterForm');
    if (!newsletterForm) return;

    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const emailInput = this.querySelector('input[type="email"]');
        const submitBtn = this.querySelector('button[type="submit"]');
        const email = emailInput.value.trim();

        if (!email) {
            showToast('Please enter your email address', 'error');
            return;
        }

        if (!isValidEmail(email)) {
            showToast('Please enter a valid email address', 'error');
            return;
        }

        // Add loading state
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Subscribing...';
        submitBtn.disabled = true;

        // Simulate API call
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            emailInput.value = '';
            showToast('Successfully subscribed to our newsletter!', 'success');
        }, 2000);
    });
}

// Viewing Indicators (simulate real-time viewers)
function initViewingIndicators() {
    const indicators = document.querySelectorAll('.viewing-indicator span');
    
    indicators.forEach(indicator => {
        // Update viewer count every 10-30 seconds
        setInterval(() => {
            const currentCount = parseInt(indicator.textContent);
            const change = Math.floor(Math.random() * 5) - 2; // -2 to +2
            const newCount = Math.max(1, Math.min(50, currentCount + change));
            indicator.textContent = `${newCount} people viewing`;
        }, Math.random() * 20000 + 10000); // 10-30 seconds
    });
}

// Flash Sale Timers
function initFlashSaleTimers() {
    const flashTimers = document.querySelectorAll('.flash-timer span');
    
    flashTimers.forEach(timer => {
        const initialTime = timer.textContent;
        let [hours, minutes] = initialTime.split('h ')[0] === initialTime ? 
            [0, parseInt(initialTime)] : 
            [parseInt(initialTime.split('h ')[0]), parseInt(initialTime.split('h ')[1].replace('m left', ''))];
        
        let totalMinutes = hours * 60 + minutes;
        
        const countdown = setInterval(() => {
            totalMinutes--;
            
            if (totalMinutes <= 0) {
                timer.textContent = 'EXPIRED';
                timer.parentElement.style.background = '#666';
                clearInterval(countdown);
                return;
            }
            
            const h = Math.floor(totalMinutes / 60);
            const m = totalMinutes % 60;
            
            if (h > 0) {
                timer.textContent = `${h}h ${m}m left`;
            } else {
                timer.textContent = `${m}m left`;
            }
            
            // Add urgency styling when time is low
            if (totalMinutes <= 30) {
                timer.parentElement.style.background = '#dc3545';
                timer.parentElement.style.animation = 'blink 0.5s infinite';
            }
        }, 60000); // Update every minute
    });
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observe all product cards and sections
    document.querySelectorAll('.product-card, .category-sale-section, .hot-deals').forEach(el => {
        observer.observe(el);
    });
}

// Utility Functions
function formatPrice(price) {
    return new Intl.NumberFormat('en-IN').format(price);
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

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

function showToast(message, type = 'info') {
    // Remove existing toast
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }

    // Create toast element
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
        <div class="toast-content">
            <i class="fas fa-${getToastIcon(type)}"></i>
            <span>${message}</span>
        </div>
    `;

    // Style the toast
    Object.assign(toast.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        background: getToastColor(type),
        color: 'white',
        padding: '15px 20px',
        borderRadius: '5px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        zIndex: '10000',
        animation: 'slideInRight 0.3s ease-out',
        maxWidth: '300px'
    });

    // Add CSS animation
    if (!document.querySelector('#toast-styles')) {
        const style = document.createElement('style');
        style.id = 'toast-styles';
        style.textContent = `
            @keyframes slideInRight {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOutRight {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
            .toast-content {
                display: flex;
                align-items: center;
                gap: 10px;
            }
        `;
        document.head.appendChild(style);
    }

    document.body.appendChild(toast);

    // Auto remove after 3 seconds
    setTimeout(() => {
        toast.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => {
            if (toast.parentNode) {
                toast.remove();
            }
        }, 300);
    }, 3000);
}

function getToastIcon(type) {
    const icons = {
        success: 'check-circle',
        error: 'exclamation-circle',
        warning: 'exclamation-triangle',
        info: 'info-circle'
    };
    return icons[type] || icons.info;
}

function getToastColor(type) {
    const colors = {
        success: '#28a745',
        error: '#dc3545',
        warning: '#ffc107',
        info: '#17a2b8'
    };
    return colors[type] || colors.info;
}

// Stock Counter Animation
function updateStockCounters() {
    const stockInfos = document.querySelectorAll('.stock-info.low-stock');
    
    stockInfos.forEach(stockInfo => {
        // Randomly decrease stock count occasionally
        if (Math.random() < 0.1) { // 10% chance every update
            const currentText = stockInfo.textContent;
            const currentCount = parseInt(currentText.match(/\d+/)[0]);
            
            if (currentCount > 1) {
                const newCount = currentCount - 1;
                stockInfo.textContent = currentText.replace(/\d+/, newCount);
                
                // Add flash animation
                stockInfo.style.animation = 'none';
                setTimeout(() => {
                    stockInfo.style.animation = 'pulse 2s infinite';
                }, 100);
            }
        }
    });
}

// Update stock counters every 30 seconds
setInterval(updateStockCounters, 30000);

// Price Range Slider Enhancement
document.addEventListener('DOMContentLoaded', function() {
    const priceRange = document.getElementById('priceRange');
    if (priceRange) {
        // Add custom styling for the range slider
        priceRange.style.background = `linear-gradient(to right, #ff4d4d 0%, #ff4d4d ${(priceRange.value/priceRange.max)*100}%, #ddd ${(priceRange.value/priceRange.max)*100}%, #ddd 100%)`;
        
        priceRange.addEventListener('input', function() {
            const percentage = (this.value / this.max) * 100;
            this.style.background = `linear-gradient(to right, #ff4d4d 0%, #ff4d4d ${percentage}%, #ddd ${percentage}%, #ddd 100%)`;
        });
    }
});

// Smooth scroll for hero CTA
function scrollToProducts() {
    const filtersSection = document.getElementById('filtersSection');
    if (filtersSection) {
        filtersSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}