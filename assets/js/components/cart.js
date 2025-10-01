// Cart Management System
class CartManager {
    constructor() {
        this.cart = [];
        this.isOpen = false;
        this.promoCode = null;
        this.discountAmount = 0;
        this.shippingCost = 0;
        
        // Promo codes with discounts
        this.promoCodes = {
            'WELCOME10': { type: 'percentage', value: 10, minAmount: 500 },
            'SAVE20': { type: 'percentage', value: 20, minAmount: 1000 },
            'FLAT100': { type: 'fixed', value: 100, minAmount: 800 },
            'FESTIVE15': { type: 'percentage', value: 15, minAmount: 600 }
        };
        
        this.init();
    }
    
    init() {
        this.loadCartFromStorage();
        this.bindEvents();
        this.updateCartUI();
        this.updateCartCount();
    }
    
    bindEvents() {
        // Cart toggle
        const cartToggle = document.getElementById('cart-toggle');
        const cartClose = document.getElementById('cart-close');
        const cartOverlay = document.getElementById('cart-overlay');
        
        if (cartToggle) {
            cartToggle.addEventListener('click', (e) => {
                e.preventDefault();
                this.openCart();
            });
        }
        
        if (cartClose) {
            cartClose.addEventListener('click', () => this.closeCart());
        }
        
        if (cartOverlay) {
            cartOverlay.addEventListener('click', () => this.closeCart());
        }
        
        // Promo code
        const applyPromoBtn = document.getElementById('apply-promo');
        if (applyPromoBtn) {
            applyPromoBtn.addEventListener('click', () => this.applyPromoCode());
        }
        
        // Checkout button
        const checkoutBtn = document.getElementById('checkout-btn');
        if (checkoutBtn) {
            checkoutBtn.addEventListener('click', () => this.proceedToCheckout());
        }
        
        // Bind existing "Add to Cart" buttons
        this.bindAddToCartButtons();
        
        // Keyboard events
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen) {
                this.closeCart();
            }
        });
    }
    
    bindAddToCartButtons() {
        const addToCartButtons = document.querySelectorAll('.btn-outline');
        addToCartButtons.forEach(button => {
            if (button.textContent.includes('Add to Cart')) {
                button.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.addToCartFromButton(button);
                });
            }
        });
    }
    
    addToCartFromButton(button) {
        const productCard = button.closest('.product-card');
        if (!productCard) return;
        
        const product = this.extractProductInfo(productCard);
        this.addToCart(product);
    }
    
    extractProductInfo(productCard) {
        const img = productCard.querySelector('img');
        const name = productCard.querySelector('h3');
        const currentPrice = productCard.querySelector('.current-price');
        const originalPrice = productCard.querySelector('.original-price');
        const discountBadge = productCard.querySelector('.discount-badge');
        
        return {
            id: Date.now() + Math.random(), // Simple ID generation
            name: name ? name.textContent.trim() : 'Product',
            image: img ? img.src : 'assets/images/placeholder.jpg',
            currentPrice: currentPrice ? this.parsePrice(currentPrice.textContent) : 0,
            originalPrice: originalPrice ? this.parsePrice(originalPrice.textContent) : 0,
            discount: discountBadge ? discountBadge.textContent : '',
            quantity: 1,
            inStock: true,
            maxStock: 10
        };
    }
    
    parsePrice(priceText) {
        return parseInt(priceText.replace(/[₹,]/g, '')) || 0;
    }
    
    // Helper function to normalize IDs for comparison
    normalizeId(id) {
        // Convert to string for consistent comparison
        return String(id);
    }
    
    
    addToCart(product, quantity = 1) {
        const existingItem = this.cart.find(item => item.id === product.id);
        
        if (existingItem) {
            if (existingItem.quantity + quantity <= existingItem.maxStock) {
                existingItem.quantity += quantity;
                this.showToast('Item quantity updated in cart', 'success');
            } else {
                this.showToast('Cannot add more items. Stock limit reached', 'warning');
                return;
            }
        } else {
            this.cart.push({ ...product, quantity });
            this.showToast('Item added to cart successfully', 'success');
        }
        
        this.saveCartToStorage();
        this.updateCartUI();
        this.updateCartCount();
        this.animateCartIcon();
    }
    
    removeFromCart(productId) {
        const normalizedId = this.normalizeId(productId);
        const itemIndex = this.cart.findIndex(item => this.normalizeId(item.id) === normalizedId);
        
        if (itemIndex > -1) {
            const item = this.cart[itemIndex];
            this.cart.splice(itemIndex, 1);
            this.showToast(`${item.name} removed from cart`, 'success');
            this.saveCartToStorage();
            this.updateCartUI();
            this.updateCartCount();
        }
    }
    
    updateQuantity(productId, newQuantity) {
        const normalizedId = this.normalizeId(productId);
        const item = this.cart.find(item => this.normalizeId(item.id) === normalizedId);
        if (!item) return;
        
        if (newQuantity <= 0) {
            this.removeFromCart(productId);
            return;
        }
        
        if (newQuantity > item.maxStock) {
            this.showToast('Cannot exceed stock limit', 'warning');
            return;
        }
        
        item.quantity = newQuantity;
        this.saveCartToStorage();
        this.updateCartUI();
        this.updateCartCount();
    }
    
    moveToWishlist(productId) {
        const normalizedId = this.normalizeId(productId);
        const item = this.cart.find(item => this.normalizeId(item.id) === normalizedId);
        if (item) {
            // Convert cart item to wishlist format
            const wishlistItem = {
                id: item.id,
                title: item.name,
                priceText: `₹${item.currentPrice.toLocaleString()}`,
                originalPriceText: item.originalPrice > 0 ? `₹${item.originalPrice.toLocaleString()}` : '',
                rating: 4.8, // Default rating
                reviews: 248, // Default reviews
                image: item.image,
                link: 'product.html',
                price: item.currentPrice,
                originalPrice: item.originalPrice || 0
            };
            
            // Add to wishlist using the existing wishlist system
            this.addToWishlistStorage(wishlistItem);
            
            // Remove from cart
            this.removeFromCart(productId);
            this.showToast(`${item.name} moved to wishlist`, 'success');
        }
    }
    
    // Helper function to add item to wishlist storage
    addToWishlistStorage(item) {
        try {
            // Get existing wishlist
            const wishlist = JSON.parse(localStorage.getItem('wishlist_items')) || [];
            
            // Check if item already exists
            if (!wishlist.some(i => i.id === item.id)) {
                wishlist.push(item);
                localStorage.setItem('wishlist_items', JSON.stringify(wishlist));
            }
            
            // Set backward compatibility flag
            localStorage.setItem(`wishlist_${item.id}`, 'true');
        } catch (e) {
            console.error('Error adding to wishlist:', e);
        }
    }
    
    openCart() {
        const cartDrawer = document.getElementById('cart-drawer');
        if (cartDrawer) {
            cartDrawer.classList.add('active');
            document.body.style.overflow = 'hidden';
            this.isOpen = true;
        }
    }
    
    closeCart() {
        const cartDrawer = document.getElementById('cart-drawer');
        if (cartDrawer) {
            cartDrawer.classList.remove('active');
            document.body.style.overflow = '';
            this.isOpen = false;
        }
    }
    
    updateCartUI() {
        const cartItems = document.getElementById('cart-items');
        const emptyCart = document.getElementById('empty-cart');
        const cartFooter = document.getElementById('cart-footer');
        const cartItemCount = document.querySelector('.cart-item-count');
        
        if (!cartItems) return;
        
        if (this.cart.length === 0) {
            cartItems.style.display = 'none';
            if (emptyCart) emptyCart.style.display = 'flex';
            if (cartFooter) cartFooter.style.display = 'none';
            if (cartItemCount) cartItemCount.textContent = '0 items';
        } else {
            cartItems.style.display = 'block';
            if (emptyCart) emptyCart.style.display = 'none';
            if (cartFooter) cartFooter.style.display = 'block';
            if (cartItemCount) {
                const totalItems = this.cart.reduce((sum, item) => sum + item.quantity, 0);
                cartItemCount.textContent = `${totalItems} item${totalItems !== 1 ? 's' : ''}`;
            }
            
            cartItems.innerHTML = this.cart.map(item => this.createCartItemHTML(item)).join('');
            this.bindCartItemEvents();
        }
        
        this.updateCartSummary();
    }
    
    createCartItemHTML(item) {
        const discountPercentage = item.originalPrice > 0 ? 
            Math.round(((item.originalPrice - item.currentPrice) / item.originalPrice) * 100) : 0;
        
        return `
            <div class="cart-item" data-id="${item.id}">
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}" onerror="this.src='assets/images/placeholder.jpg'">
                </div>
                <div class="cart-item-details">
                    <a href="#" class="cart-item-name">${item.name}</a>
                    <div class="cart-item-price">
                        <span class="cart-item-current-price">₹${item.currentPrice.toLocaleString()}</span>
                        ${item.originalPrice > item.currentPrice ? 
                            `<span class="cart-item-original-price">₹${item.originalPrice.toLocaleString()}</span>
                             <span class="cart-item-discount">${discountPercentage}% off</span>` : ''}
                    </div>
                    <div class="quantity-controls">
                        <button class="quantity-btn decrease-qty" data-id="${item.id}" ${item.quantity <= 1 ? 'disabled' : ''}>
                            <i class="fas fa-minus"></i>
                        </button>
                        <span class="quantity-display">${item.quantity}</span>
                        <button class="quantity-btn increase-qty" data-id="${item.id}" ${item.quantity >= item.maxStock ? 'disabled' : ''}>
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                    ${!item.inStock ? '<div class="stock-alert"><i class="fas fa-exclamation-triangle"></i>Out of stock</div>' : ''}
                    ${item.quantity >= item.maxStock ? '<div class="stock-alert"><i class="fas fa-info-circle"></i>Maximum quantity reached</div>' : ''}
                    <button class="move-to-wishlist" data-id="${item.id}">Move to Wishlist</button>
                </div>
                <button class="remove-item" data-id="${item.id}">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
        `;
    }
    
    bindCartItemEvents() {
        // Quantity controls
        document.querySelectorAll('.decrease-qty').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = this.normalizeId(e.currentTarget.dataset.id);
                const item = this.cart.find(item => this.normalizeId(item.id) === id);
                if (item) {
                    this.updateQuantity(item.id, item.quantity - 1);
                }
            });
        });
        
        document.querySelectorAll('.increase-qty').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = this.normalizeId(e.currentTarget.dataset.id);
                const item = this.cart.find(item => this.normalizeId(item.id) === id);
                if (item) {
                    this.updateQuantity(item.id, item.quantity + 1);
                }
            });
        });
        
        // Remove items
        document.querySelectorAll('.remove-item').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = this.normalizeId(e.currentTarget.dataset.id);
                const item = this.cart.find(item => this.normalizeId(item.id) === id);
                if (item) {
                    this.removeFromCart(item.id);
                }
            });
        });
        
        // Move to wishlist
        document.querySelectorAll('.move-to-wishlist').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = this.normalizeId(e.currentTarget.dataset.id);
                const item = this.cart.find(item => this.normalizeId(item.id) === id);
                if (item) {
                    this.moveToWishlist(item.id);
                }
            });
        });
    }
    
    updateCartSummary() {
        const subtotal = this.calculateSubtotal();
        const discount = this.calculateDiscount(subtotal);
        const shipping = this.calculateShipping(subtotal);
        const total = subtotal - discount + shipping;
        
        // Update UI elements
        const subtotalEl = document.querySelector('.subtotal');
        const discountEl = document.querySelector('.discount');
        const discountRow = document.querySelector('.discount-row');
        const shippingEl = document.querySelector('.shipping');
        const totalEl = document.querySelector('.total');
        
        if (subtotalEl) subtotalEl.textContent = `₹${subtotal.toLocaleString()}`;
        if (discountEl) discountEl.textContent = `-₹${discount.toLocaleString()}`;
        if (discountRow) discountRow.style.display = discount > 0 ? 'flex' : 'none';
        if (shippingEl) shippingEl.textContent = shipping > 0 ? `₹${shipping.toLocaleString()}` : 'Free';
        if (totalEl) totalEl.textContent = `₹${total.toLocaleString()}`;
    }
    
    calculateSubtotal() {
        return this.cart.reduce((sum, item) => sum + (item.currentPrice * item.quantity), 0);
    }
    
    calculateDiscount(subtotal) {
        if (!this.promoCode) return 0;
        
        const promo = this.promoCodes[this.promoCode];
        if (!promo || subtotal < promo.minAmount) return 0;
        
        if (promo.type === 'percentage') {
            return Math.floor((subtotal * promo.value) / 100);
        } else if (promo.type === 'fixed') {
            return Math.min(promo.value, subtotal);
        }
        
        return 0;
    }
    
    calculateShipping(subtotal) {
        // Free shipping for orders above ₹999
        return subtotal >= 999 ? 0 : 50;
    }
    
    applyPromoCode() {
        const promoInput = document.getElementById('promo-code');
        const applyBtn = document.getElementById('apply-promo');
        
        if (!promoInput || !applyBtn) return;
        
        const code = promoInput.value.trim().toUpperCase();
        const subtotal = this.calculateSubtotal();
        
        if (!code) {
            this.showToast('Please enter a promo code', 'warning');
            return;
        }
        
        if (!this.promoCodes[code]) {
            this.showToast('Invalid promo code', 'error');
            return;
        }
        
        const promo = this.promoCodes[code];
        if (subtotal < promo.minAmount) {
            this.showToast(`Minimum order amount ₹${promo.minAmount} required`, 'warning');
            return;
        }
        
        if (this.promoCode === code) {
            this.showToast('Promo code already applied', 'warning');
            return;
        }
        
        this.promoCode = code;
        promoInput.value = '';
        applyBtn.textContent = 'Applied';
        applyBtn.disabled = true;
        
        this.updateCartSummary();
        this.showToast(`Promo code applied! You saved ₹${this.calculateDiscount(subtotal)}`, 'success');
        
        // Reset button after 3 seconds
        setTimeout(() => {
            applyBtn.textContent = 'Apply';
            applyBtn.disabled = false;
        }, 3000);
    }
    
    updateCartCount() {
        const cartCount = document.querySelector('.cart-count');
        if (cartCount) {
            const totalItems = this.cart.reduce((sum, item) => sum + item.quantity, 0);
            cartCount.textContent = totalItems;
            cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
        }
    }
    
    animateCartIcon() {
        const cartCount = document.querySelector('.cart-count');
        if (cartCount) {
            cartCount.classList.add('animate');
            setTimeout(() => cartCount.classList.remove('animate'), 600);
        }
    }
    
    proceedToCheckout() {
        if (this.cart.length === 0) {
            this.showToast('Your cart is empty', 'warning');
            return;
        }
        
        // Check stock availability
        const outOfStockItems = this.cart.filter(item => !item.inStock);
        if (outOfStockItems.length > 0) {
            this.showToast('Some items are out of stock. Please remove them to continue.', 'error');
            return;
        }
        
        // Store cart data for checkout
        localStorage.setItem('checkoutCart', JSON.stringify({
            items: this.cart,
            promoCode: this.promoCode,
            subtotal: this.calculateSubtotal(),
            discount: this.calculateDiscount(this.calculateSubtotal()),
            shipping: this.calculateShipping(this.calculateSubtotal()),
            total: this.calculateSubtotal() - this.calculateDiscount(this.calculateSubtotal()) + this.calculateShipping(this.calculateSubtotal())
        }));
        
        // Redirect to checkout page
        window.location.href = 'checkout.html';
    }
    
    showToast(message, type = 'success') {
        const toast = document.getElementById('toast-notification');
        const toastIcon = toast.querySelector('.toast-icon');
        const toastMessage = toast.querySelector('.toast-message');
        
        if (!toast || !toastIcon || !toastMessage) return;
        
        // Set icon based on type
        const icons = {
            success: 'fas fa-check-circle',
            error: 'fas fa-exclamation-circle',
            warning: 'fas fa-exclamation-triangle',
            info: 'fas fa-info-circle'
        };
        
        toastIcon.className = `toast-icon ${icons[type] || icons.info}`;
        toastMessage.textContent = message;
        toast.className = `toast-notification ${type}`;
        
        // Show toast
        toast.classList.add('show');
        
        // Hide after 3 seconds
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }
    
    saveCartToStorage() {
        localStorage.setItem('viaenterprise_cart', JSON.stringify(this.cart));
    }
    
    loadCartFromStorage() {
        const savedCart = localStorage.getItem('viaenterprise_cart');
        if (savedCart) {
            try {
                this.cart = JSON.parse(savedCart);
            } catch (e) {
                console.error('Error loading cart from storage:', e);
                this.cart = [];
            }
        }
    }
    
    clearCart() {
        this.cart = [];
        this.promoCode = null;
        this.saveCartToStorage();
        this.updateCartUI();
        this.updateCartCount();
        this.showToast('Cart cleared successfully', 'success');
    }
    
    getCartSummary() {
        const subtotal = this.calculateSubtotal();
        return {
            items: this.cart,
            itemCount: this.cart.reduce((sum, item) => sum + item.quantity, 0),
            subtotal,
            discount: this.calculateDiscount(subtotal),
            shipping: this.calculateShipping(subtotal),
            total: subtotal - this.calculateDiscount(subtotal) + this.calculateShipping(subtotal),
            promoCode: this.promoCode
        };
    }
}

// Global cart instance
let cartManager;

// Initialize cart when DOM is loaded (only if not manually initialized)
document.addEventListener('DOMContentLoaded', () => {
    if (!cartManager) {
        cartManager = new CartManager();
    }
});

// Global functions for external access
function openCart() {
    if (cartManager) cartManager.openCart();
}

function closeCart() {
    if (cartManager) cartManager.closeCart();
}

function addToCart(product, quantity = 1) {
    if (cartManager) cartManager.addToCart(product, quantity);
}

function getCartSummary() {
    return cartManager ? cartManager.getCartSummary() : null;
}

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CartManager, cartManager };
}
