/**
 * Help & Support Page Manager
 * Handles FAQ accordion, search functionality, contact form, and live chat
 */

class HelpManager {
    constructor() {
        this.faqItems = [];
        this.searchTimeout = null;
        this.currentCategory = 'all';
        
        this.init();
    }

    init() {
        this.setupFAQAccordion();
        this.setupCategoryFilters();
        this.setupContactForm();
        this.setupLiveChat();
        this.setupKeyboardNavigation();
        
        console.log('Help Manager initialized');
    }

    // FAQ Accordion Functionality
    setupFAQAccordion() {
        const faqQuestions = document.querySelectorAll('.faq-question');
        
        faqQuestions.forEach(question => {
            question.addEventListener('click', (e) => {
                e.preventDefault();
                this.toggleFAQ(question.parentElement);
            });
            
            // Keyboard accessibility
            question.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.toggleFAQ(question.parentElement);
                }
            });
        });
        
        // Store FAQ items for search
        this.faqItems = Array.from(document.querySelectorAll('.faq-item'));
    }

    toggleFAQ(faqItem) {
        const isActive = faqItem.classList.contains('active');
        const question = faqItem.querySelector('.faq-question');
        
        // Toggle current FAQ
        if (isActive) {
            faqItem.classList.remove('active');
            question.setAttribute('aria-expanded', 'false');
        } else {
            faqItem.classList.add('active');
            question.setAttribute('aria-expanded', 'true');
            
            // Scroll into view if needed
            setTimeout(() => {
                const rect = faqItem.getBoundingClientRect();
                if (rect.bottom > window.innerHeight) {
                    faqItem.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'nearest' 
                    });
                }
            }, 300);
        }
    }

    // Search Functionality
    setupSearch() {
        const searchInput = document.getElementById('help-search');
        const searchClear = document.getElementById('search-clear');
        const suggestionsContainer = document.getElementById('search-suggestions');
        
        if (!searchInput) return;
        
        // Search suggestions data
        this.searchSuggestions = [
            { text: 'Track my order', category: 'orders', keywords: ['track', 'order', 'status', 'delivery'] },
            { text: 'Return policy', category: 'returns', keywords: ['return', 'refund', 'exchange', 'policy'] },
            { text: 'Payment methods', category: 'orders', keywords: ['payment', 'card', 'upi', 'cod'] },
            { text: 'Shipping charges', category: 'shipping', keywords: ['shipping', 'delivery', 'charges', 'free'] },
            { text: 'Cancel order', category: 'orders', keywords: ['cancel', 'order', 'cancellation'] },
            { text: 'Account issues', category: 'account', keywords: ['account', 'login', 'password', 'profile'] },
            { text: 'Technical problems', category: 'technical', keywords: ['technical', 'website', 'error', 'bug'] }
        ];
        
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.trim();
            
            if (query.length > 0) {
                searchClear.style.display = 'block';
                this.showSearchSuggestions(query, suggestionsContainer);
                
                // Debounced search
                clearTimeout(this.searchTimeout);
                this.searchTimeout = setTimeout(() => {
                    this.searchFAQs(query);
                }, 300);
            } else {
                searchClear.style.display = 'none';
                this.hideSearchSuggestions(suggestionsContainer);
                this.showAllFAQs();
            }
        });
        
        searchClear.addEventListener('click', () => {
            searchInput.value = '';
            searchClear.style.display = 'none';
            this.hideSearchSuggestions(suggestionsContainer);
            this.showAllFAQs();
            searchInput.focus();
        });
        
        // Hide suggestions when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.help-search')) {
                this.hideSearchSuggestions(suggestionsContainer);
            }
        });
    }

    showSearchSuggestions(query, container) {
        const suggestions = this.searchSuggestions.filter(suggestion => 
            suggestion.keywords.some(keyword => 
                keyword.toLowerCase().includes(query.toLowerCase())
            ) || suggestion.text.toLowerCase().includes(query.toLowerCase())
        );
        
        if (suggestions.length > 0) {
            container.innerHTML = suggestions.map(suggestion => 
                `<div class="suggestion-item" data-category="${suggestion.category}">
                    ${suggestion.text}
                </div>`
            ).join('');
            
            container.style.display = 'block';
            
            // Add click handlers
            container.querySelectorAll('.suggestion-item').forEach(item => {
                item.addEventListener('click', () => {
                    const category = item.dataset.category;
                    document.getElementById('help-search').value = item.textContent;
                    this.hideSearchSuggestions(container);
                    this.filterByCategory(category);
                    this.searchFAQs(item.textContent);
                });
            });
        } else {
            this.hideSearchSuggestions(container);
        }
    }

    hideSearchSuggestions(container) {
        container.style.display = 'none';
        container.innerHTML = '';
    }

    searchFAQs(query) {
        const searchTerms = query.toLowerCase().split(' ');
        let hasResults = false;
        
        this.faqItems.forEach(item => {
            const question = item.querySelector('.faq-question h3').textContent.toLowerCase();
            const answer = item.querySelector('.faq-answer').textContent.toLowerCase();
            const content = question + ' ' + answer;
            
            const matches = searchTerms.every(term => content.includes(term));
            
            if (matches) {
                item.style.display = 'block';
                hasResults = true;
                // Highlight search terms (optional)
                this.highlightSearchTerms(item, searchTerms);
            } else {
                item.style.display = 'none';
            }
        });
        
        this.showNoResultsMessage(!hasResults);
    }

    highlightSearchTerms(item, terms) {
        // Simple highlighting - can be enhanced
        const question = item.querySelector('.faq-question h3');
        let text = question.textContent;
        
        terms.forEach(term => {
            const regex = new RegExp(`(${term})`, 'gi');
            text = text.replace(regex, '<mark>$1</mark>');
        });
        
        // Only apply if highlighting was added
        if (text.includes('<mark>')) {
            question.innerHTML = text;
        }
    }

    showNoResultsMessage(show = true) {
        let noResultsMsg = document.querySelector('.no-results-message');
        
        if (show) {
            if (!noResultsMsg) {
                noResultsMsg = document.createElement('div');
                noResultsMsg.className = 'no-results-message';
                noResultsMsg.innerHTML = `
                    <i class="fas fa-search"></i>
                    <h3>No results found</h3>
                    <p>Try different keywords or <a href="#contact-form">contact our support team</a></p>
                `;
                document.querySelector('.faq-container').appendChild(noResultsMsg);
            }
            noResultsMsg.style.display = 'block';
        } else if (noResultsMsg) {
            noResultsMsg.style.display = 'none';
        }
    }

    showAllFAQs() {
        this.faqItems.forEach(item => {
            item.style.display = 'block';
            // Remove highlighting
            const question = item.querySelector('.faq-question h3');
            question.innerHTML = question.textContent;
        });
        
        this.showNoResultsMessage(false);
        this.filterByCategory(this.currentCategory);
    }

    // Category Filters
    setupCategoryFilters() {
        const categoryButtons = document.querySelectorAll('.category-btn');
        
        categoryButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const category = btn.dataset.category;
                
                // Update active button
                categoryButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                this.currentCategory = category;
                this.filterByCategory(category);
            });
        });
    }

    filterByCategory(category) {
        let hasVisibleItems = false;
        
        this.faqItems.forEach(item => {
            const itemCategory = item.dataset.category;
            
            if (category === 'all' || itemCategory === category) {
                item.style.display = 'block';
                hasVisibleItems = true;
            } else {
                item.style.display = 'none';
            }
        });
        
        // Show/hide no results message
        this.showNoResultsMessage(!hasVisibleItems);
    }

    // Contact Form
    setupContactForm() {
        const form = document.getElementById('support-form');
        if (!form) return;
        
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.submitContactForm(form);
        });
        
        // Form validation
        const requiredFields = form.querySelectorAll('[required]');
        requiredFields.forEach(field => {
            field.addEventListener('blur', () => {
                this.validateField(field);
            });
        });
    }

    validateField(field) {
        const value = field.value.trim();
        const isValid = field.checkValidity();
        
        // Remove existing validation classes
        field.classList.remove('valid', 'invalid');
        
        if (value && isValid) {
            field.classList.add('valid');
        } else if (value && !isValid) {
            field.classList.add('invalid');
        }
        
        return isValid;
    }

    async submitContactForm(form) {
        const submitBtn = form.querySelector('button[type="submit"]');
        const btnText = submitBtn.querySelector('.btn-text');
        const btnLoading = submitBtn.querySelector('.btn-loading');
        
        // Validate all required fields
        const requiredFields = form.querySelectorAll('[required]');
        let isFormValid = true;
        
        requiredFields.forEach(field => {
            if (!this.validateField(field)) {
                isFormValid = false;
            }
        });
        
        if (!isFormValid) {
            this.showToast('Please fill in all required fields correctly', 'error');
            return;
        }
        
        // Show loading state
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;
        
        try {
            // Simulate form submission
            await this.simulateFormSubmission(form);
            
            // Success
            this.showToast('Message sent successfully! We\'ll get back to you soon.', 'success');
            form.reset();
            
            // Remove validation classes
            requiredFields.forEach(field => {
                field.classList.remove('valid', 'invalid');
            });
            
        } catch (error) {
            console.error('Form submission error:', error);
            this.showToast('Failed to send message. Please try again.', 'error');
        } finally {
            // Reset button state
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
        }
    }

    async simulateFormSubmission(form) {
        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        console.log('Form submission data:', data);
        
        // Simulate API call
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate 90% success rate
                if (Math.random() > 0.1) {
                    resolve();
                } else {
                    reject(new Error('Network error'));
                }
            }, 2000);
        });
    }

    // Live Chat
    setupLiveChat() {
        const chatBtn = document.getElementById('start-chat');
        if (!chatBtn) return;
        
        chatBtn.addEventListener('click', () => {
            this.startLiveChat();
        });
    }

    startLiveChat() {
        // Simulate live chat initialization
        this.showToast('Connecting to live chat...', 'info');
        
        setTimeout(() => {
            // In a real implementation, this would integrate with a chat service
            // like Tawk.to, Intercom, Zendesk Chat, etc.
            this.showToast('Live chat is currently unavailable. Please use the contact form or call us.', 'warning');
        }, 2000);
    }

    // Keyboard Navigation
    setupKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            // ESC to close search suggestions
            if (e.key === 'Escape') {
                const suggestions = document.getElementById('search-suggestions');
                if (suggestions && suggestions.style.display === 'block') {
                    this.hideSearchSuggestions(suggestions);
                    document.getElementById('help-search').focus();
                }
            }
            
            // Ctrl+F to focus search
            if (e.ctrlKey && e.key === 'f') {
                e.preventDefault();
                const searchInput = document.getElementById('help-search');
                if (searchInput) {
                    searchInput.focus();
                    searchInput.select();
                }
            }
        });
    }

    // Toast Notifications
    showToast(message, type = 'success') {
        const toast = document.getElementById('toast');
        if (!toast) return;
        
        toast.textContent = message;
        toast.className = `toast ${type}`;
        toast.classList.add('show');
        
        setTimeout(() => {
            toast.classList.remove('show');
        }, 4000);
    }

    // Utility Methods
    scrollToElement(selector) {
        const element = document.querySelector(selector);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        }
    }

    // Analytics (for tracking user interactions)
    trackEvent(action, category = 'Help Page') {
        // In a real implementation, integrate with Google Analytics or similar
        console.log(`Analytics: ${category} - ${action}`);
    }
}

// Auto-initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Wait a bit for all content to load
    setTimeout(() => {
        if (typeof HelpManager !== 'undefined' && !window.helpManager) {
            window.helpManager = new HelpManager();
            console.log('HelpManager auto-initialized');
        }
    }, 1000);
});

// Also initialize on window load as backup
window.addEventListener('load', () => {
    setTimeout(() => {
        if (typeof HelpManager !== 'undefined' && !window.helpManager) {
            window.helpManager = new HelpManager();
            console.log('HelpManager backup initialized');
        }
    }, 500);
});

// Manual initialization function
function initializeHelpPage() {
    if (!window.helpManager) {
        window.helpManager = new HelpManager();
        console.log('HelpManager manually initialized');
    }
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = HelpManager;
}
