// Order Details Page JavaScript
class OrderDetailsManager {
    constructor() {
        this.orderId = null;
        this.orderData = null;
        this.init();
    }

    init() {
        // Get order ID from URL parameters
        this.orderId = this.getOrderIdFromURL();
        
        if (!this.orderId) {
            this.showError('Order ID not found');
            return;
        }

        // Load order data
        this.loadOrderData();
        
        // Setup event listeners
        this.setupEventListeners();
    }

    getOrderIdFromURL() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('orderId');
    }

    loadOrderData() {
        console.log('Loading order data for:', this.orderId);
        
        // Get orders from localStorage
        const storedOrders = localStorage.getItem('userOrders');
        const orders = storedOrders ? JSON.parse(storedOrders) : [];
        
        console.log('All orders in storage:', orders);
        console.log('Looking for order ID:', this.orderId);
        
        // Find the specific order
        this.orderData = orders.find(order => order.id === this.orderId);
        
        if (!this.orderData) {
            console.error('Order not found. Available order IDs:', orders.map(o => o.id));
            this.showError('Order not found');
            return;
        }

        console.log('Raw order data found:', this.orderData);

        // Convert date strings back to Date objects
        if (this.orderData.date) {
            this.orderData.date = new Date(this.orderData.date);
        }
        if (this.orderData.estimatedDelivery) {
            this.orderData.estimatedDelivery = new Date(this.orderData.estimatedDelivery);
        }
        if (this.orderData.returnDeadline) {
            this.orderData.returnDeadline = new Date(this.orderData.returnDeadline);
        }
        if (this.orderData.timeline && Array.isArray(this.orderData.timeline)) {
            this.orderData.timeline.forEach(item => {
                if (item.date) {
                    item.date = new Date(item.date);
                }
            });
        }

        console.log('Order data after processing:', this.orderData);
        
        // Validate essential data
        if (!this.orderData.items || !Array.isArray(this.orderData.items)) {
            console.error('Order items missing or invalid:', this.orderData.items);
            this.orderData.items = [];
        }
        
        // Render order details
        this.renderOrderDetails();
    }

    renderOrderDetails() {
        // Update page title
        document.title = `${this.orderData.id} - Order Details - Viaenterprise`;
        
        // Update order header
        this.updateOrderHeader();
        
        // Render timeline
        this.renderTimeline();
        
        // Render products
        this.renderProducts();
        
        // Render order summary
        this.renderOrderSummary();
        
        // Render addresses
        this.renderAddresses();
        
        // Render payment & shipping info
        this.renderPaymentShipping();
        
        // Show/hide action buttons based on order status
        this.updateActionButtons();
    }

    updateOrderHeader() {
        document.getElementById('order-title').textContent = `Order ${this.orderData.id}`;
        document.getElementById('order-date').textContent = this.formatDate(this.orderData.date);
        
        const statusElement = document.getElementById('order-status');
        statusElement.textContent = this.capitalizeFirst(this.orderData.status);
        statusElement.className = `status-badge ${this.orderData.status}`;
    }

    renderTimeline() {
        const timeline = document.getElementById('order-timeline');
        if (!timeline) return;

        const currentStatus = this.orderData.status;
        const statusOrder = ['placed', 'processing', 'shipped', 'delivered'];
        const currentIndex = statusOrder.indexOf(currentStatus);

        timeline.innerHTML = this.orderData.timeline.map((item, index) => {
            let itemClass = 'timeline-item';
            if (index <= currentIndex || item.status === currentStatus) {
                itemClass += ' completed';
            }
            if (item.status === currentStatus && currentStatus !== 'delivered' && currentStatus !== 'cancelled') {
                itemClass += ' current';
            }

            return `
                <div class="${itemClass}">
                    <div class="timeline-content">
                        <div class="timeline-title">${item.title}</div>
                        <div class="timeline-date">${this.formatDateTime(item.date)}</div>
                        <div class="timeline-description">${item.description}</div>
                    </div>
                </div>
            `;
        }).join('');
    }

    renderProducts() {
        const productsList = document.getElementById('products-list');
        if (!productsList) return;

        console.log('Rendering products:', this.orderData.items);

        productsList.innerHTML = this.orderData.items.map(item => {
            // Handle different possible price field names and ensure they exist
            const itemPrice = item.price || item.currentPrice || 0;
            const itemQuantity = item.quantity || 1;
            const itemName = item.name || 'Unknown Product';
            const itemImage = item.image || 'assets/images/image.png';
            
            console.log('Processing item:', { itemName, itemPrice, itemQuantity });
            
            return `
                <div class="product-item">
                    <img src="${itemImage}" alt="${itemName}" class="product-image"
                         onerror="this.src='assets/images/image.png'">
                    <div class="product-details">
                        <div class="product-name">${itemName}</div>
                        <div class="product-meta">
                            <span>Quantity: ${itemQuantity}</span>
                            <span>Price: ₹${itemPrice.toLocaleString()}</span>
                            ${item.size ? `<span>Size: ${item.size}</span>` : ''}
                            ${item.color ? `<span>Color: ${item.color}</span>` : ''}
                        </div>
                        <div class="product-price">₹${(itemPrice * itemQuantity).toLocaleString()}</div>
                    </div>
                </div>
            `;
        }).join('');
    }

    renderOrderSummary() {
        const orderSummary = document.getElementById('order-summary');
        if (!orderSummary) return;

        // Handle missing or undefined values
        const subtotal = this.orderData.subtotal || 0;
        const discount = this.orderData.discount || 0;
        const shipping = this.orderData.shipping || 0;
        const total = this.orderData.total || 0;

        console.log('Rendering order summary:', { subtotal, discount, shipping, total });

        orderSummary.innerHTML = `
            <div class="summary-row">
                <span class="summary-label">Subtotal:</span>
                <span class="summary-value">₹${subtotal.toLocaleString()}</span>
            </div>
            ${discount > 0 ? `
                <div class="summary-row">
                    <span class="summary-label">Discount:</span>
                    <span class="summary-value">-₹${discount.toLocaleString()}</span>
                </div>
            ` : ''}
            <div class="summary-row">
                <span class="summary-label">Shipping:</span>
                <span class="summary-value">${shipping > 0 ? '₹' + shipping.toLocaleString() : 'Free'}</span>
            </div>
            <div class="summary-row">
                <span class="summary-label">Total:</span>
                <span class="summary-value total">₹${total.toLocaleString()}</span>
            </div>
        `;
    }

    renderAddresses() {
        const shippingAddress = document.getElementById('shipping-address');
        const billingAddress = document.getElementById('billing-address');

        // Handle missing address data
        const shippingData = this.orderData.shippingAddress || {};
        const billingData = this.orderData.billingAddress || {};

        if (shippingAddress) {
            shippingAddress.innerHTML = `
                <div><strong>${shippingData.name || 'N/A'}</strong></div>
                <div>${shippingData.address || 'Address not available'}</div>
                <div>Phone: ${shippingData.phone || 'N/A'}</div>
                ${shippingData.email ? `<div>Email: ${shippingData.email}</div>` : ''}
            `;
        }

        if (billingAddress) {
            billingAddress.innerHTML = `
                <div><strong>${billingData.name || 'N/A'}</strong></div>
                <div>${billingData.address || 'Address not available'}</div>
                <div>Phone: ${billingData.phone || 'N/A'}</div>
                ${billingData.email ? `<div>Email: ${billingData.email}</div>` : ''}
            `;
        }
    }

    renderPaymentShipping() {
        // Handle missing payment and shipping data
        const paymentMethod = this.orderData.paymentMethod || 'Not specified';
        const shippingMethod = this.orderData.shippingMethod || 'Standard Delivery';
        const trackingNumber = this.orderData.trackingNumber || 'Not available';
        const paymentStatus = this.orderData.paymentStatus || 'pending';

        const paymentMethodElement = document.getElementById('payment-method');
        const shippingMethodElement = document.getElementById('shipping-method');
        const trackingNumberElement = document.getElementById('tracking-number');
        const paymentStatusElement = document.getElementById('payment-status');

        if (paymentMethodElement) paymentMethodElement.textContent = paymentMethod;
        if (shippingMethodElement) shippingMethodElement.textContent = shippingMethod;
        if (trackingNumberElement) trackingNumberElement.textContent = trackingNumber;
        
        if (paymentStatusElement) {
            paymentStatusElement.textContent = this.capitalizeFirst(paymentStatus);
            paymentStatusElement.className = `payment-badge ${paymentStatus}`;
        }
    }

    updateActionButtons() {
        const cancelBtn = document.getElementById('cancel-order');
        const returnBtn = document.getElementById('return-order');

        // Show cancel button if order can be cancelled
        if (this.orderData.canCancel && cancelBtn) {
            cancelBtn.style.display = 'inline-flex';
        }

        // Show return button if order can be returned
        if (this.orderData.canReturn && returnBtn) {
            returnBtn.style.display = 'inline-flex';
        }
    }

    setupEventListeners() {
        // Download invoice
        const downloadInvoice = document.getElementById('download-invoice');
        if (downloadInvoice) {
            downloadInvoice.addEventListener('click', () => this.downloadInvoice());
        }

        // Track order
        const trackOrder = document.getElementById('track-order');
        if (trackOrder) {
            trackOrder.addEventListener('click', () => this.trackOrder());
        }

        // Cancel order
        const cancelOrder = document.getElementById('cancel-order');
        if (cancelOrder) {
            cancelOrder.addEventListener('click', () => this.cancelOrder());
        }

        // Return order
        const returnOrder = document.getElementById('return-order');
        if (returnOrder) {
            returnOrder.addEventListener('click', () => this.returnOrder());
        }

        // Reorder
        const reorderBtn = document.getElementById('reorder-btn');
        if (reorderBtn) {
            reorderBtn.addEventListener('click', () => this.reorderItems());
        }
    }

    // Action methods
    downloadInvoice() {
        this.showNotification('Invoice download started.', 'success');
    }

    trackOrder() {
        if (this.orderData.trackingNumber) {
            this.showNotification(`Tracking Number: ${this.orderData.trackingNumber}`, 'info');
        } else {
            this.showNotification('Tracking information will be available once the order is shipped.', 'info');
        }
    }

    cancelOrder() {
        if (confirm('Are you sure you want to cancel this order?')) {
            // Update order status
            this.orderData.status = 'cancelled';
            this.orderData.paymentStatus = 'refunded';
            this.orderData.canCancel = false;
            
            // Update in localStorage
            this.updateOrderInStorage();
            
            // Re-render the page
            this.renderOrderDetails();
            
            this.showNotification('Order cancelled successfully. Refund will be processed within 3-5 business days.', 'success');
        }
    }

    returnOrder() {
        if (this.orderData.returnDeadline && new Date() > this.orderData.returnDeadline) {
            this.showNotification('Return period has expired for this order.', 'error');
            return;
        }

        if (confirm('Are you sure you want to return this order?')) {
            this.showNotification('Return request submitted successfully. You will receive return instructions via email.', 'success');
        }
    }

    reorderItems() {
        // Add all items to cart
        if (typeof cartManager !== 'undefined') {
            this.orderData.items.forEach(item => {
                cartManager.addToCart({
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    image: item.image,
                    size: item.size,
                    color: item.color
                }, item.quantity);
            });
            
            this.showNotification(`${this.orderData.items.length} items added to cart!`, 'success');
        } else {
            this.showNotification('Unable to add items to cart. Please try again.', 'error');
        }
    }

    updateOrderInStorage() {
        const storedOrders = localStorage.getItem('userOrders');
        const orders = storedOrders ? JSON.parse(storedOrders) : [];
        
        const orderIndex = orders.findIndex(order => order.id === this.orderId);
        if (orderIndex !== -1) {
            orders[orderIndex] = this.orderData;
            localStorage.setItem('userOrders', JSON.stringify(orders));
        }
    }

    showError(message) {
        const container = document.querySelector('.container');
        container.innerHTML = `
            <div class="error-state">
                <div class="error-content">
                    <i class="fas fa-exclamation-triangle"></i>
                    <h2>Error</h2>
                    <p>${message}</p>
                    <a href="orders.html" class="btn btn-primary">Back to Orders</a>
                </div>
            </div>
        `;
    }

    // Utility methods
    formatDate(date) {
        return date.toLocaleDateString('en-IN', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    }

    formatDateTime(date) {
        return date.toLocaleDateString('en-IN', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    }

    capitalizeFirst(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-${this.getNotificationIcon(type)}"></i>
                <span>${message}</span>
            </div>
            <button class="notification-close">
                <i class="fas fa-times"></i>
            </button>
        `;

        // Add styles if not already added
        if (!document.getElementById('notification-styles')) {
            const styles = document.createElement('style');
            styles.id = 'notification-styles';
            styles.textContent = `
                .notification {
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    background: white;
                    border-radius: 12px;
                    padding: 20px 25px;
                    box-shadow: 0 8px 32px rgba(0,0,0,0.15);
                    z-index: 10000;
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    min-width: 320px;
                    max-width: 450px;
                    transform: translateX(100%);
                    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
                }
                .notification.show {
                    transform: translateX(0);
                }
                .notification-success {
                    border-left: 5px solid #27ae60;
                }
                .notification-error {
                    border-left: 5px solid #e74c3c;
                }
                .notification-info {
                    border-left: 5px solid #3498db;
                }
                .notification-content {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    flex: 1;
                }
                .notification-close {
                    background: none;
                    border: none;
                    cursor: pointer;
                    color: #7f8c8d;
                    padding: 8px;
                    border-radius: 50%;
                    transition: all 0.3s ease;
                }
                .notification-close:hover {
                    background: #f8f9fa;
                    color: #2c3e50;
                }
            `;
            document.head.appendChild(styles);
        }

        // Add to DOM
        document.body.appendChild(notification);

        // Show notification
        setTimeout(() => notification.classList.add('show'), 100);

        // Auto remove after 5 seconds
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 400);
        }, 5000);

        // Close button functionality
        notification.querySelector('.notification-close').addEventListener('click', () => {
            notification.classList.remove('show');
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 400);
        });
    }

    getNotificationIcon(type) {
        switch (type) {
            case 'success': return 'check-circle';
            case 'error': return 'exclamation-circle';
            case 'info': return 'info-circle';
            default: return 'info-circle';
        }
    }
}

// Initialize order details manager when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    window.orderDetailsManager = new OrderDetailsManager();
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = OrderDetailsManager;
}
