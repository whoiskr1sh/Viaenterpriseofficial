document.addEventListener('DOMContentLoaded', function() {
    // Sample product data for new arrivals (with categories)
    // Categories: ethnic, jewelry, accessories, hampers, lifestyle
    const newArrivals = [
        { id: 61, name: 'Cotton Handloom Saree', price: 1599, originalPrice: 2899, rating: 4.5, reviews: 142, image: 'assets/images/Cotton Handloom Saree.webp', category: 'ethnic' },
        { id: 63, name: 'Velvet Embroidered Lehenga', price: 7599, originalPrice: 11499, rating: 4.7, reviews: 178, image: 'assets/images/velvet-lehenga.jpg', category: 'ethnic' },
        { id: 65, name: 'Rayon A-Line Kurti', price: 1399, originalPrice: 2599, rating: 4.5, reviews: 132, image: 'assets/images/rayon-kurti.jpg', category: 'ethnic' },
        { id: 67, name: 'Diamond Pendant Set', price: 4599, originalPrice: 7999, rating: 4.9, reviews: 142, image: 'assets/images/diamond-pendant.jpg', category: 'jewelry' },
        { id: 69, name: 'Hoop Earrings', price: 499, originalPrice: 899, rating: 4.4, reviews: 198, image: 'assets/images/hoop-earrings.webp', category: 'jewelry' },
        { id: 71, name: 'Glass Bangles Set', price: 599, originalPrice: 999, rating: 4.3, reviews: 178, image: 'assets/images/glass-bangles.webp', category: 'jewelry' },
        { id: 73, name: 'Casual Backpack', price: 1399, originalPrice: 2499, rating: 4.6, reviews: 156, image: 'assets/images/backpack.webp', category: 'accessories' },
        { id: 75, name: 'Casual Slip-ons', price: 899, originalPrice: 1599, rating: 4.4, reviews: 176, image: 'assets/images/slip-ons.webp', category: 'accessories' },
        { id: 77, name: 'Digital Sports Watch', price: 1299, originalPrice: 2299, rating: 4.6, reviews: 143, image: 'assets/images/sports-watch.jpg', category: 'accessories' },
        { id: 79, name: 'Festive Sweet Hamper', price: 1599, originalPrice: 2799, rating: 4.5, reviews: 132, image: 'assets/images/sweet-hamper.webp', category: 'hampers' },
        { id: 81, name: 'Festival Puja Hamper', price: 1399, originalPrice: 2499, rating: 4.6, reviews: 176, image: 'assets/images/puja-hamper.jpg', category: 'hampers' },
        { id: 83, name: 'Desk Organizer Set', price: 1499, originalPrice: 2499, rating: 4.6, reviews: 154, image: 'assets/images/desk-organizer.webp', category: 'lifestyle' },
        { id: 85, name: 'Premium Lipstick Set', price: 1299, originalPrice: 2299, rating: 4.7, reviews: 165, image: 'assets/images/lipstick-set.webp', category: 'lifestyle' },
        { id: 2, name: 'Silk Banarasi Saree', price: 3499, originalPrice: 5999, rating: 4.9, reviews: 312, image: 'assets/images/saree.webp', category: 'ethnic' },
        { id: 3, name: 'Designer Lehenga', price: 5499, originalPrice: 8999, rating: 4.7, reviews: 198, image: 'assets/images/lehenga.jpg', category: 'ethnic' },
        { id: 1, name: 'Floral Print Kurti', price: 1499, originalPrice: 2999, rating: 4.8, reviews: 248, image: 'assets/images/kurta2.webp', category: 'ethnic' }
    ];

    const productsGrid = document.getElementById('new-arrivals-grid');

    function renderProducts(products) {
        productsGrid.innerHTML = '';
        products.forEach(product => {
            productsGrid.appendChild(createProductCard(product));
        });
    }

    // Helpers to render categories with a fixed count (cycles if fewer are available)
    function getProductsByCategory(category) {
        return newArrivals.filter(p => p.category === category);
    }

    function renderCategory(category, containerId, count = 8) {
        const container = document.getElementById(containerId);
        if (!container) return;
        const list = getProductsByCategory(category);
        container.innerHTML = '';
        if (list.length === 0) return;
        for (let i = 0; i < count; i++) {
            const product = list[i % list.length];
            container.appendChild(createProductCard(product));
        }
    }

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

    // Render main grid (all new arrivals)
    renderProducts(newArrivals);

    // Render 8 products in each category section
    renderCategory('ethnic', 'ethnic-wear-products', 8);
    renderCategory('jewelry', 'jewelry-products', 8);
    renderCategory('accessories', 'accessories-products', 8);
    renderCategory('hampers', 'hampers-products', 8);
    renderCategory('lifestyle', 'lifestyle-products', 8);

    // Smooth scroll to category sections from nav (similar to shop.js handleUrlParameters)
    const categoryIdMap = {
        all: null,
        ethnic: 'ethnic-wear',
        jewelry: 'jewelry',
        accessories: 'accessories',
        hampers: 'hampers',
        lifestyle: 'lifestyle'
    };

    function setActiveCategoryTab(category) {
        const tabs = document.querySelectorAll('.category-tabs a[data-category]');
        tabs.forEach(tab => {
            const match = tab.dataset.category === category || (!category && tab.dataset.category === 'all');
            tab.classList.toggle('active', match);
        });
    }

    function scrollToCategory(category) {
        const sectionId = categoryIdMap[category];
        if (!sectionId) return; // 'all' or unknown
        const section = document.getElementById(sectionId);
        if (section) {
            // Ensure layout settled then scroll
            void section.offsetHeight;
            requestAnimationFrame(() => {
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                // Optional highlight effect
                section.classList.add('highlight-subcategory');
                setTimeout(() => section.classList.remove('highlight-subcategory'), 2000);
            });
        }
    }

    function handleUrlParameters() {
        const urlParams = new URLSearchParams(window.location.search);
        const category = urlParams.get('category');
        if (category && categoryIdMap.hasOwnProperty(category)) {
            setActiveCategoryTab(category);
            scrollToCategory(category);
        } else {
            setActiveCategoryTab('all');
        }
    }

    // Intercept category tab clicks to avoid full reload and smooth scroll
    document.querySelectorAll('.category-tabs a[data-category]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const category = link.dataset.category;
            if (category === 'all') {
                history.pushState({}, '', window.location.pathname);
                setActiveCategoryTab('all');
                window.scrollTo({ top: 0, behavior: 'smooth' });
                return;
            }
            history.pushState({}, '', `?category=${category}`);
            setActiveCategoryTab(category);
            scrollToCategory(category);
        });
    });

    // Handle back/forward navigation
    window.addEventListener('popstate', handleUrlParameters);

    // Run after content is rendered
    setTimeout(handleUrlParameters, 30);
    
    // Initialize wishlist functionality
    initWishlistFunctionality();
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
