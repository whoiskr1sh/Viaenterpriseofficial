// Orders Page JavaScript - Card Only Design
class OrdersManager {
    constructor() {
        this.orders = [];
        this.filteredOrders = [];
        this.currentFilter = { status: 'all', date: 'all' };
        this.init();
    }

    init() {
        // Clear any existing content to prevent interference
        this.clearPageContent();
        this.loadSampleOrders();
        this.setupEventListeners();
        this.renderOrders();
    }

    clearPageContent() {
        // Ensure only orders content is displayed
        const ordersContainer = document.getElementById('orders-cards');
        if (ordersContainer) {
            ordersContainer.innerHTML = '';
        }
        
        // Remove any unwanted product displays but preserve cart functionality
        const unwantedElements = document.querySelectorAll('.product-display, .product-selection');
        unwantedElements.forEach(element => element.remove());
    }

    // Load real orders from localStorage (from checkout process)
    loadSampleOrders() {
        console.log('Orders Page: Loading orders from localStorage');
        
        // Get orders from localStorage that were created during checkout
        const storedOrders = localStorage.getItem('userOrders');
        this.orders = storedOrders ? JSON.parse(storedOrders) : [];
        
        console.log('Orders Page: Found', this.orders.length, 'orders');
        
        // Add sample order for testing if no orders exist
        if (this.orders.length === 0) {
            this.addSampleOrder();
        }
        
        // Convert date strings back to Date objects
        this.orders.forEach(order => {
            order.date = new Date(order.date);
            if (order.estimatedDelivery) {
                order.estimatedDelivery = new Date(order.estimatedDelivery);
            }
            if (order.returnDeadline) {
                order.returnDeadline = new Date(order.returnDeadline);
            }
            if (order.timeline) {
                order.timeline.forEach(item => {
                    item.date = new Date(item.date);
                });
            }
        });

        this.filteredOrders = [...this.orders];
    }

    addSampleOrder() {
        console.log('Adding sample order for testing');
        
        const sampleOrder = {
            id: '#ORD' + Date.now().toString().slice(-6),
            date: new Date(),
            status: 'shipped',
            paymentStatus: 'paid',
            paymentMethod: 'Credit/Debit Card',
            shippingMethod: 'Standard Delivery',
            items: [
                {
                    id: 'sample-1',
                    name: 'Silk Banarasi Saree',
                    price: 2999,
                    quantity: 1,
                    image: 'assets/images/saree.webp',
                    size: 'Free Size',
                    color: 'Red'
                },
                {
                    id: 'sample-2',
                    name: 'Gold Plated Necklace',
                    price: 1299,
                    quantity: 1,
                    image: 'assets/images/necklace.jpg',
                    size: 'Standard',
                    color: 'Gold'
                }
            ],
            total: 4298,
            subtotal: 4298,
            discount: 0,
            shipping: 0,
            promoCode: null,
            shippingAddress: {
                name: 'John Doe',
                address: '123 Main Street, Mumbai, Maharashtra - 400001',
                phone: '+91 98765 43210',
                email: 'john.doe@example.com'
            },
            billingAddress: {
                name: 'John Doe',
                address: '123 Main Street, Mumbai, Maharashtra - 400001',
                phone: '+91 98765 43210',
                email: 'john.doe@example.com'
            },
            estimatedDelivery: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
            returnDeadline: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
            trackingNumber: 'TRK12345678',
            canCancel: false,
            canReturn: true,
            timeline: [
                {
                    status: 'placed',
                    title: 'Order Placed',
                    description: 'Your order has been placed successfully',
                    date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000)
                },
                {
                    status: 'processing',
                    title: 'Processing',
                    description: 'Your order is being processed',
                    date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000)
                },
                {
                    status: 'shipped',
                    title: 'Shipped',
                    description: 'Your order has been shipped',
                    date: new Date()
                },
                {
                    status: 'delivered',
                    title: 'Delivered',
                    description: 'Your order has been delivered',
                    date: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000)
                }
            ]
        };

        this.orders.push(sampleOrder);
        
        // Save to localStorage
        localStorage.setItem('userOrders', JSON.stringify(this.orders));
        
        console.log('Sample order added:', sampleOrder);
    }

    setupEventListeners() {
        // Event listeners for orders page actions can be added here if needed
        console.log('Orders page event listeners setup completed');
    }


    renderOrders() {
        if (this.filteredOrders.length === 0) {
            this.showEmptyState();
            return;
        }

        this.hideEmptyState();
        this.renderOrderCards();
    }

    renderOrderCards() {
        const container = document.getElementById('orders-cards');
        if (!container) return;

        container.innerHTML = this.filteredOrders.map(order => `
            <div class="order-card">
                <div class="order-card-header">
                    <div class="order-info">
                        <div class="order-id" onclick="ordersManager.viewOrderDetails('${order.id}')">
                            ${order.id}
                        </div>
                        <div class="order-date">${this.formatDate(order.date)}</div>
                    </div>
                    <span class="status-badge ${order.status}">${this.capitalizeFirst(order.status)}</span>
                </div>
                
                <div class="order-items-section">
                    <div class="item-thumbnails">
                        ${order.items.slice(0, 3).map(item => `
                            <img src="${item.image}" alt="${item.name}" class="item-thumbnail"
                                 onerror="this.src='assets/images/image.png'">
                        `).join('')}
                    </div>
                    <div class="items-info">
                        <div class="items-count">
                            ${order.items.length} item${order.items.length > 1 ? 's' : ''}
                            ${order.items.length > 3 ? ` (+${order.items.length - 3} more)` : ''}
                        </div>
                        <div class="order-amount">₹${order.total.toLocaleString()}</div>
                    </div>
                </div>
                
                <div class="order-details-section">
                    <div class="payment-info">
                        <span class="payment-badge ${order.paymentStatus}">${this.capitalizeFirst(order.paymentStatus)}</span>
                        <span class="payment-method">${order.paymentMethod}</span>
                    </div>
                </div>
                
                <div class="order-actions">
                    <button class="btn btn-primary" onclick="ordersManager.viewOrderDetails('${order.id}')">
                        <i class="fas fa-eye"></i> View
                    </button>
                    ${order.status !== 'cancelled' && order.status !== 'delivered' ? `
                        <button class="btn btn-secondary" onclick="ordersManager.trackOrder('${order.id}')">
                            <i class="fas fa-truck"></i> Track
                        </button>
                    ` : ''}
                    ${order.canCancel ? `
                        <button class="btn btn-danger" onclick="ordersManager.cancelOrder('${order.id}')">
                            <i class="fas fa-times"></i> Cancel
                        </button>
                    ` : ''}
                    ${order.canReturn ? `
                        <button class="btn btn-outline" onclick="ordersManager.returnOrder('${order.id}')">
                            <i class="fas fa-undo"></i> Return
                        </button>
                    ` : ''}
                </div>
            </div>
        `).join('');
    }

    viewOrderDetails(orderId) {
        // Redirect to order details page with order ID as parameter
        window.location.href = `order-details.html?orderId=${encodeURIComponent(orderId)}`;
    }


    showEmptyState() {
        const cardsContainer = document.querySelector('.orders-cards-container');

        if (cardsContainer) {
            cardsContainer.innerHTML = `
                <div class="empty-orders">
                    <div class="empty-orders-content">
                        <div class="empty-icon">
                            <i class="fas fa-shopping-bag"></i>
                        </div>
                        <h3>No Orders Yet</h3>
                        <p>You haven't placed any orders yet. Start shopping to see your orders here.</p>
                        <a href="shop.html" class="btn btn-primary">
                            <i class="fas fa-shopping-cart"></i>
                            Start Shopping
                        </a>
                    </div>
                </div>
            `;
        }
    }

    hideEmptyState() {
        // Empty state is handled within the cards container
    }

    // Action methods
    trackOrder(orderId) {
        const order = this.orders.find(o => o.id === orderId);
        if (!order) return;

        if (order.trackingNumber) {
            this.showNotification(`Tracking Number: ${order.trackingNumber}`, 'info');
        } else {
            this.showNotification('Tracking information will be available once the order is shipped.', 'info');
        }
    }

    cancelOrder(orderId) {
        if (confirm('Are you sure you want to cancel this order?')) {
            const orderIndex = this.orders.findIndex(o => o.id === orderId);
            if (orderIndex !== -1) {
                this.orders[orderIndex].status = 'cancelled';
                this.orders[orderIndex].paymentStatus = 'refunded';
                this.orders[orderIndex].canCancel = false;
                this.filteredOrders = [...this.orders];
                this.renderOrders();
                this.showNotification('Order cancelled successfully. Refund will be processed within 3-5 business days.', 'success');
            }
        }
    }

    returnOrder(orderId) {
        const order = this.orders.find(o => o.id === orderId);
        if (!order) return;

        if (order.returnDeadline && new Date() > order.returnDeadline) {
            this.showNotification('Return period has expired for this order.', 'error');
            return;
        }

        if (confirm('Are you sure you want to return this order?')) {
            this.showNotification('Return request submitted successfully. You will receive return instructions via email.', 'success');
        }
    }

    downloadInvoice() {
        this.showNotification('Invoice download started.', 'success');
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

// Initialize orders manager when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    window.ordersManager = new OrdersManager();
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = OrdersManager;
}
