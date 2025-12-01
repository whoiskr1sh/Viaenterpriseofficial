     
         // Shop Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Sample product data with subcategories
    const products = {
        ethnic: {
            sarees: [
                { id: 2, name: 'Slim Fit Denims', price: 3499, originalPrice: 5999, rating: 4.9, reviews: 312, image: 'assets/images/denim1.webp' },
                { id: 2, name: 'Slim Fit Denims', price: 3499, originalPrice: 5999, rating: 4.9, reviews: 312, image: 'assets/images/denim1.webp' }
            ],
            lehengas: [
                { id: 31, name: 'Oversized Denims', price: 4499, originalPrice: 6999, rating: 4.8, reviews: 245, image: 'assets/images/denim2.webp' },
                { id: 31, name: 'Oversized Denims', price: 4499, originalPrice: 6999, rating: 4.8, reviews: 245, image: 'assets/images/denim2.webp' }
            ],
            kurtis: [
                { id: 32, name: 'Relaxed Fit Denims', price: 1999, originalPrice: 3499, rating: 4.6, reviews: 198, image: 'assets/images/denim1.webp' },
                { id: 32, name: 'Relaxed Fit Denims', price: 1999, originalPrice: 3499, rating: 4.6, reviews: 198, image: 'assets/images/denim1.webp' }
            ]
        },
        jewelry: {
            necklaces: [
                { id: 7, name: 'Slim Fit Cargo Pants', price: 2499, originalPrice: 4499, rating: 4.8, reviews: 156, image: 'assets/images/cargo.webp' },
            ],
            earrings: [
                { id: 37, name: 'Streetwear Cargo Pants', price: 3299, originalPrice: 5499, rating: 4.7, reviews: 143, image: 'assets/images/cargo.webp' },
            ],  
            bangles: [
                { id: 38, name: 'Baggy Cargo Pants', price: 2899, originalPrice: 4799, rating: 4.8, reviews: 167, image: 'assets/images/cargo.webp' },
            ]
        },
        accessories: {
            bags: [
                { id: 13, name: 'Loose Fit Corduroy Trousers', price: 1299, originalPrice: 2299, rating: 4.5, reviews: 187, image: 'assets/images/trouser.webp' },
            ],
            footwear: [
                { id: 17, name: 'Relaxed Fit Trousers', price: 1599, originalPrice: 2799, rating: 4.6, reviews: 176, image: 'assets/images/trouser.webp' },
            ],
            watches: [
                { id: 43, name: 'Versatile Relaxed Fit Trousers', price: 999, originalPrice: 1899, rating: 4.5, reviews: 154, image: 'assets/images/trouser.webp' },
        ]
        },
        hampers: {
            optimized_hampers: [
                { id: 19, name: 'Slim Fit Formal Trousers', price: 2499, originalPrice: 4499, rating: 4.8, reviews: 132, image: 'assets/images/formal_trousers.webp' },
            ],
            gift_hampers: [
                { id: 51, name: 'Textured Slim Fit Formal Trousers', price: 1799, originalPrice: 2999, rating: 4.7, reviews: 187, image: 'assets/images/formal_trousers.webp' },
          ]
        },
        lifestyle: {
            stationery: [
                { id: 54, name: 'Denim Joggers', price: 799, originalPrice: 1499, rating: 4.6, reviews: 187, image: 'assets/images/joggers.webp' },
            ],
            cosmetics: [
                { id: 55, name: 'Essential Joggers', price: 599, originalPrice: 999, rating: 4.5, reviews: 143, image: 'assets/images/joggers.webp' },
            ]
        }
    };

    // DOM Elements
    const categorySections = document.querySelectorAll('.category-section');
    const categoryCheckboxes = document.querySelectorAll('input[name="category"]');
    const minPriceInput = document.getElementById('minPrice');
    const maxPriceInput = document.getElementById('maxPrice');
    const applyPriceFilterBtn = document.getElementById('applyPriceFilter');
    const sortSelect = document.getElementById('sortBy');
    const resetFiltersBtn = document.getElementById('resetFilters');

    // Set up event listeners
    function setupEventListeners() {
        // Category filter checkboxes
        categoryCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', filterByCategory);
        });

        // Price filter button
        if (applyPriceFilterBtn) {
            applyPriceFilterBtn.addEventListener('click', filterByPrice);
        }

        // Reset filters button
        if (resetFiltersBtn) {
            resetFiltersBtn.addEventListener('click', resetFilters);
        }

        // Sort select
        if (sortSelect) {
            sortSelect.addEventListener('change', sortProducts);
        }
    }

    // Initialize the shop
    function initShop() {
        return new Promise((resolve) => {
            renderAllProducts();
            setupEventListeners();
            resolve();
        });
    }

    // Render all products with subcategories
    function renderAllProducts() {
        categorySections.forEach(section => {
            const category = section.dataset.category;
            
            // Find all subcategory sections within this category
            const subcategorySections = section.querySelectorAll('.subcategory-section');
            
            subcategorySections.forEach(subSection => {
                const subcategory = subSection.dataset.subcategory;
                const productsRow = subSection.querySelector('.products-row');
                productsRow.innerHTML = ''; // Clear existing products

                if (products[category] && products[category][subcategory]) {
                    products[category][subcategory].forEach(product => {
                        productsRow.appendChild(createProductCard(product));
                    });
                }
            });
        });
    }

    // Create product card HTML
    function createProductCard(product) {
        const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
        const productSlug = product.name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
        
        const card = document.createElement('a');
        card.href = `product.html?id=${product.id}&name=${productSlug}`;
        card.className = 'product-card';
        card.dataset.id = product.id;
        card.dataset.price = product.price;
        card.dataset.rating = product.rating;
        
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

    // Filter products by category
    function filterByCategory() {
        const selectedCategories = Array.from(categoryCheckboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value);

        categorySections.forEach(section => {
            const category = section.dataset.category;
            if (selectedCategories.length === 0 || selectedCategories.includes(category)) {
                section.style.display = 'block';
                // Show all subcategories when category is shown
                section.querySelectorAll('.subcategory-section').forEach(sub => {
                    sub.style.display = 'block';
                });
            } else {
                section.style.display = 'none';
            }
        });
    }

    // Filter products by price range
    function filterByPrice() {
        // Get and validate price inputs
        const minPrice = minPriceInput.value ? parseFloat(minPriceInput.value) : 0;
        const maxPrice = maxPriceInput.value ? parseFloat(maxPriceInput.value) : Number.MAX_SAFE_INTEGER;
        
        // Validate price range
        if (minPrice < 0 || maxPrice < 0) {
            alert('Price cannot be negative');
            return;
        }
        
        if (minPrice > 0 && maxPrice > 0 && minPrice > maxPrice) {
            alert('Minimum price cannot be greater than maximum price');
            return;
        }

        // Reset price inputs if invalid
        if (minPrice < 0 || maxPrice < 0) {
            minPriceInput.value = '';
            maxPriceInput.value = '';
        }

        categorySections.forEach(section => {
            const subSections = section.querySelectorAll('.subcategory-section');
            
            subSections.forEach(subSection => {
                const productCards = subSection.querySelectorAll('.product-card');
                let hasVisibleProducts = false;
                
                productCards.forEach(card => {
                    const price = parseFloat(card.dataset.price);
                    if (price >= minPrice && price <= maxPrice) {
                        card.style.display = 'block';
                        hasVisibleProducts = true;
                    } else {
                        card.style.display = 'none';
                    }
                });
                
                // Show/hide subcategory section based on visibility of products
                subSection.style.display = hasVisibleProducts ? 'block' : 'none';
            });
            
            // Show/hide category section based on visibility of subcategories
            const visibleSubs = section.querySelectorAll('.subcategory-section[style*="display: block"]');
            section.style.display = visibleSubs.length > 0 ? 'block' : 'none';
        });
    }

    // Sort products
    function sortProducts() {
        const sortBy = sortSelect.value;
        
        categorySections.forEach(section => {
            const subSections = section.querySelectorAll('.subcategory-section');
            
            subSections.forEach(subSection => {
                const productsRow = subSection.querySelector('.products-row');
                if (!productsRow) return;
                
                // Convert NodeList to Array for sorting
                const productCards = Array.from(productsRow.querySelectorAll('.product-card'));
                
                // Sort the product cards based on the selected criteria
                productCards.sort((a, b) => {
                    const aPrice = parseFloat(a.getAttribute('data-price'));
                    const bPrice = parseFloat(b.getAttribute('data-price'));
                    const aRating = parseFloat(a.getAttribute('data-rating'));
                    const bRating = parseFloat(b.getAttribute('data-rating'));
                    
                    switch(sortBy) {
                        case 'price-low':
                            return aPrice - bPrice;
                        case 'price-high':
                            return bPrice - aPrice;
                        case 'rating':
                            return bRating - aRating;
                        default:
                            return 0; // Default/featured order
                    }
                });
                
                // Remove all product cards
                productCards.forEach(card => card.remove());
                
                // Re-append sorted products
                productCards.forEach(card => productsRow.appendChild(card));
            });
        });
    }

    // Reset all filters
    function resetFilters() {
        // Reset checkboxes
        categoryCheckboxes.forEach(checkbox => {
            checkbox.checked = true;
        });
        
        // Reset price inputs
        minPriceInput.value = '';
        maxPriceInput.value = '';
        
        // Reset sort
        sortSelect.value = 'featured';
        
        // Show all products, categories, and subcategories
        categorySections.forEach(section => {
            section.style.display = 'block';
            const subSections = section.querySelectorAll('.subcategory-section');
            
            subSections.forEach(subSection => {
                subSection.style.display = 'block';
                const productCards = subSection.querySelectorAll('.product-card');
                productCards.forEach(card => {
                    card.style.display = 'block';
                });
            });
        });
        
        // Re-render products to reflect reset filters
        renderAllProducts();
    }

        // Function to handle URL parameters and scroll to subcategory
    function handleUrlParameters() {
        console.log('Handling URL parameters...');
        const urlParams = new URLSearchParams(window.location.search);
        const category = urlParams.get('category');
        
        if (category) {
            // Find the subcategory element
            const subcategoryElement = document.querySelector(`[data-subcategory="${category}"]`);
            
            if (subcategoryElement) {
                console.log('Found subcategory element:', subcategoryElement);
                // First, make sure all categories are visible
                categorySections.forEach(section => {
                    section.style.display = 'block';
                });
                
                // Force a reflow to ensure the display changes are applied
                void subcategoryElement.offsetHeight;
                
                // Wait for the next frame to ensure layout is updated
                requestAnimationFrame(() => {
                    // Scroll to the subcategory
                    subcategoryElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    
                    // Add highlight effect
                    subcategoryElement.classList.add('highlight-subcategory');
                    
                    // Remove highlight after animation completes
                    setTimeout(() => {
                        subcategoryElement.classList.remove('highlight-subcategory');
                    }, 2000);
                });
            }
        }
    }

    // Initialize the shop and handle URL parameters after products are rendered
    initShop().then(() => {
        // Small delay to ensure all elements are rendered
        setTimeout(handleUrlParameters, 30);
        // Initialize wishlist functionality
        initWishlistFunctionality();
        // Initialize mobile filter functionality
        initMobileFilters();
    });
});

// Wishlist functionality
function initWishlistFunctionality() {
    document.addEventListener('click', function(e) {
        if (e.target.closest('.wishlist-btn')) {
            e.preventDefault();
            e.stopPropagation();
            
            const wishlistBtn = e.target.closest('.wishlist-btn');
            const icon = wishlistBtn.querySelector('i');
            
            wishlistBtn.classList.toggle('active');
            
            if (wishlistBtn.classList.contains('active')) {
                icon.classList.remove('far');
                icon.classList.add('fas');
                showToast('Added to wishlist!', 'success');
            } else {
                icon.classList.remove('fas');
                icon.classList.add('far');
                showToast('Removed from wishlist', 'info');
            }
        }
    });
}

// Toast notification system
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

// Mobile filter functionality
function initMobileFilters() {
    console.log('Initializing mobile filters...');
    
    const mobileFilterToggle = document.querySelector('.mobile-filter-toggle');
    const sidebar = document.querySelector('.sidebar');
    const mobileSortBy = document.getElementById('mobileSortBy');
    const mainSortBy = document.getElementById('sortBy');
    
    console.log('Mobile filter toggle:', mobileFilterToggle);
    console.log('Sidebar:', sidebar);
    console.log('Mobile sort:', mobileSortBy);
    console.log('Main sort:', mainSortBy);
    
    // Mobile filter toggle functionality
    if (mobileFilterToggle && sidebar) {
        mobileFilterToggle.addEventListener('click', function(e) {
            console.log('🔄 Mobile filter toggle clicked');
            e.preventDefault();
            e.stopPropagation();
            
            sidebar.classList.toggle('active');
            mobileFilterToggle.classList.toggle('active');
            
            const isActive = sidebar.classList.contains('active');
            console.log('✅ Sidebar is now:', isActive ? 'OPEN' : 'CLOSED');
            console.log('📋 Sidebar classes:', sidebar.className);
            
            // Debug computed styles
            const computedStyles = window.getComputedStyle(sidebar);
            console.log('🎨 Computed styles:', {
                display: computedStyles.display,
                visibility: computedStyles.visibility,
                opacity: computedStyles.opacity,
                maxHeight: computedStyles.maxHeight,
                transform: computedStyles.transform,
                zIndex: computedStyles.zIndex
            });
            
            // Check if sidebar is visible in viewport
            const rect = sidebar.getBoundingClientRect();
            console.log('📐 Sidebar position:', {
                top: rect.top,
                left: rect.left,
                width: rect.width,
                height: rect.height,
                visible: rect.height > 0 && rect.width > 0
            });
        });
    } else {
        console.error('❌ Mobile filter toggle or sidebar not found');
    }
    
    // Sync mobile sort with main sort
    if (mobileSortBy && mainSortBy) {
        mobileSortBy.addEventListener('change', function() {
            console.log('Mobile sort changed to:', this.value);
            mainSortBy.value = this.value;
            // Trigger change event on main sort to apply sorting
            const event = new Event('change');
            mainSortBy.dispatchEvent(event);
        });
        
        mainSortBy.addEventListener('change', function() {
            console.log('Main sort changed to:', this.value);
            mobileSortBy.value = this.value;
        });
    } else {
        console.error('Mobile sort or main sort not found');
    }
}

// Note: Mobile filter toggle is handled by the event listener in initMobileFilters()
