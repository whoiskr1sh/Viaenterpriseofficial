document.addEventListener('DOMContentLoaded', function() {
    // Helpers to manage unified wishlist array
    function getWishlist() {
        try {
            return JSON.parse(localStorage.getItem('wishlist_items')) || [];
        } catch (e) {
            return [];
        }
    }

    function saveWishlist(list) {
        localStorage.setItem('wishlist_items', JSON.stringify(list));
    }

    function productIdFromDom(btn) {
        const container = btn.closest('[data-product-id]') || btn.closest('.product-card') || btn.closest('.product-actions') || btn.closest('.product') || btn.closest('li, td, .card');
        const explicitId = container?.getAttribute('data-product-id');
        if (explicitId) return explicitId;
        // Derive from title + image src as fallback
        const titleEl = container?.querySelector('.product-title, h3, .title');
        const imgEl = container?.querySelector('img');
        const title = (titleEl?.textContent || '').trim();
        const img = (imgEl?.getAttribute('src') || '').split('/').pop();
        const derived = `${title || 'item'}_${img || ''}`.toLowerCase().replace(/\s+/g, '-');
        return derived || Math.random().toString(36).slice(2, 11);
    }

    function parsePrice(text){
        if(!text) return null;
        const n = Number(text.replace(/[^0-9.]/g,'').replace(/\.(?=.*\.)/g,''));
        return Number.isFinite(n) ? n : null;
    }

    function extractProductData(btn) {
        const container = btn.closest('[data-product-id]') || btn.closest('.product-card') || btn.closest('.product-details') || document;
        const id = productIdFromDom(btn);
        const title = (container.querySelector('.product-title, h3, .title')?.textContent || '').trim() || 'Product';
        const priceText = (container.querySelector('.current-price')?.textContent || '').trim();
        const originalPriceText = (container.querySelector('.original-price')?.textContent || '').trim();
        const ratingText = (container.querySelector('.rating-number')?.textContent || '').trim();
        const reviewText = (container.querySelector('.review-count')?.textContent || '').trim();
        const rating = ratingText ? parseFloat(ratingText) : null;
        const reviews = reviewText ? parseInt(reviewText.replace(/[^0-9]/g,'') || '0', 10) : null;
        const image = container.querySelector('img')?.getAttribute('src') || '';
        const link = container.querySelector('a')?.getAttribute('href') || 'product.html';

        // Numeric prices to compute discount if needed later
        const price = parsePrice(priceText);
        const originalPrice = parsePrice(originalPriceText);

        return { id, title, priceText, originalPriceText, rating, reviews, image, link, price, originalPrice };
    }

    function isInWishlist(id) {
        return getWishlist().some(item => item.id === id);
    }

    function addToWishlist(item) {
        const list = getWishlist();
        if (!list.some(i => i.id === item.id)) {
            list.push(item);
            saveWishlist(list);
        }
        // Backward-compat flag
        localStorage.setItem(`wishlist_${item.id}`, 'true');
    }

    function removeFromWishlist(id) {
        const list = getWishlist().filter(i => i.id !== id);
        saveWishlist(list);
        // Backward-compat flag
        localStorage.setItem(`wishlist_${id}`, 'false');
    }

    // Initialize wishlist buttons
    const wishlistButtons = document.querySelectorAll('.wishlist-btn');

    wishlistButtons.forEach(button => {
        const id = productIdFromDom(button);
        const active = isInWishlist(id) || localStorage.getItem(`wishlist_${id}`) === 'true';

        // Initial state
        if (active) {
            button.classList.add('active');
            button.innerHTML = '<i class="fas fa-heart"></i>';
        } else {
            button.innerHTML = '<i class="far fa-heart"></i>';
        }

        // Click handler
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();

            const icon = this.querySelector('i');
            const id = productIdFromDom(this);
            const currentlyActive = this.classList.contains('active');

            this.classList.toggle('active');

            if (currentlyActive) {
                icon.className = 'far fa-heart';
                removeFromWishlist(id);
                showToast('Removed from wishlist', 'info');
            } else {
                icon.className = 'fas fa-heart';
                const data = extractProductData(this);
                addToWishlist(data);
                showToast('Added to wishlist!', 'success');
                // Small animation
                this.style.transform = 'scale(1.2)';
                setTimeout(() => { this.style.transform = 'scale(1)'; }, 200);
            }
        });
    });
});

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
