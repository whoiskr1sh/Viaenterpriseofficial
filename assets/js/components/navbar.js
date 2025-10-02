// Navbar Component JavaScript
function initializeNavbar() {
    // Wait for DOM to be ready
    setTimeout(() => {
        // Mobile menu toggle
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');
        const dropdownToggles = document.querySelectorAll('.dropdown > a');
        
        console.log('Navbar elements found:', {
            mobileMenuBtn: !!mobileMenuBtn,
            navLinks: !!navLinks,
            dropdownToggles: dropdownToggles.length
        });
    
        // Toggle mobile menu
        if (mobileMenuBtn && navLinks) {
            mobileMenuBtn.addEventListener('click', function() {
                navLinks.classList.toggle('active');
                const icon = this.querySelector('i');
                if (icon) {
                    if (icon.classList.contains('fa-bars')) {
                        icon.classList.remove('fa-bars');
                        icon.classList.add('fa-times');
                    } else {
                        icon.classList.remove('fa-times');
                        icon.classList.add('fa-bars');
                    }
                }
            });
        }

        // Handle dropdown menus on mobile
        if (window.innerWidth <= 768) {
            dropdownToggles.forEach(toggle => {
                toggle.addEventListener('click', function(e) {
                    e.preventDefault();
                    const dropdown = this.parentElement;
                    dropdown.classList.toggle('active');
                    
                    // Toggle chevron icon
                    const icon = this.querySelector('i');
                    if (icon) {
                        icon.classList.toggle('fa-chevron-down');
                        icon.classList.toggle('fa-chevron-up');
                    }
                });
            });
        }

        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            // Close mobile menu when clicking outside
            if (window.innerWidth <= 768) {
                if (!e.target.closest('.nav-links') && !e.target.closest('.mobile-menu-btn') && !e.target.closest('.mobile-filter-toggle')) {
                    // Re-query navLinks to ensure it exists
                    const currentNavLinks = document.querySelector('.nav-links');
                    if (currentNavLinks) {
                        currentNavLinks.classList.remove('active');
                    }
                    const menuIcon = document.querySelector('.mobile-menu-btn i');
                    if (menuIcon) {
                        menuIcon.classList.remove('fa-times');
                        menuIcon.classList.add('fa-bars');
                    }
                }
            }
            
            // Close dropdowns when clicking outside
            if (!e.target.closest('.dropdown') && !e.target.classList.contains('dropdown-toggle')) {
                document.querySelectorAll('.dropdown').forEach(dropdown => {
                    if (dropdown.classList.contains('active')) {
                        dropdown.classList.remove('active');
                        const icon = dropdown.querySelector('i');
                        if (icon) {
                            icon.classList.remove('fa-chevron-up');
                            icon.classList.add('fa-chevron-down');
                        }
                    }
                });
            }
        });

        // Prevent dropdown from closing when clicking inside it
        document.querySelectorAll('.dropdown-menu, .search-dropdown').forEach(element => {
            element.addEventListener('click', function(e) {
                e.stopPropagation();
            });
        });

        // Handle mobile cart toggle
        const mobileCartToggle = document.getElementById('mobile-cart-toggle');
        if (mobileCartToggle) {
            mobileCartToggle.addEventListener('click', function(e) {
                e.preventDefault();
                // Trigger the same cart functionality as the main cart icon
                const cartToggle = document.getElementById('cart-toggle');
                if (cartToggle) {
                    cartToggle.click();
                }
                // Close mobile menu after clicking cart
                if (navLinks) {
                    navLinks.classList.remove('active');
                }
                const menuIcon = document.querySelector('.mobile-menu-btn i');
                if (menuIcon) {
                    menuIcon.classList.remove('fa-times');
                    menuIcon.classList.add('fa-bars');
                }
            });
        }

        // Update cart count (sync both desktop and mobile cart counts)
        function updateCartCount() {
            // In a real app, this would come from your cart data
            const cartCount = 0; // Example count
            
            // Update desktop cart count
            const cartCountElement = document.querySelector('.cart-count');
            if (cartCountElement) {
                cartCountElement.textContent = cartCount;
                cartCountElement.style.display = cartCount > 0 ? 'flex' : 'none';
            }
            
            // Update mobile cart count
            const mobileCartCountElement = document.querySelector('.mobile-cart-count');
            if (mobileCartCountElement) {
                mobileCartCountElement.textContent = cartCount;
                mobileCartCountElement.style.display = cartCount > 0 ? 'inline-flex' : 'none';
            }
        }

        // Initialize cart count
        updateCartCount();
        
        // Make updateCartCount globally available for cart.js to use
        window.updateNavbarCartCount = updateCartCount;

        // Search functionality
        const searchInput = document.querySelector('.search-input');
        const searchBtn = document.querySelector('.search-btn');
        
        function handleSearch() {
            const searchQuery = searchInput.value.trim();
            if (searchQuery) {
                console.log('Searching for:', searchQuery);
                // In a real app, you would redirect to search results or make an API call
                // Example: window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
            }
        }
        
        // Handle search on button click
        if (searchBtn) {
            searchBtn.addEventListener('click', handleSearch);
        }
        
        // Handle search on Enter key
        if (searchInput) {
            searchInput.addEventListener('keyup', function(e) {
                if (e.key === 'Enter') {
                    handleSearch();
                }
            });
        }
    }, 100); // Wait 100ms for DOM to be fully ready
}

// Initialize navbar when script loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeNavbar);
} else {
    initializeNavbar();
}