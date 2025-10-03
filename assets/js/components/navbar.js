// Navbar Component JavaScript
function initializeNavbar() {
    // Prevent multiple initializations
    if (window.navbarEventListenersAdded) {
        console.log('Navbar already initialized, skipping...');
        return;
    }
    
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
        
        // Debug: Log dropdown elements
        dropdownToggles.forEach((toggle, index) => {
            console.log(`Dropdown ${index}:`, toggle.textContent.trim(), toggle);
        });
    
        // Toggle mobile menu
        if (mobileMenuBtn && navLinks) {
            // Remove any existing event listeners first
            const newMobileMenuBtn = mobileMenuBtn.cloneNode(true);
            mobileMenuBtn.parentNode.replaceChild(newMobileMenuBtn, mobileMenuBtn);
            
            newMobileMenuBtn.addEventListener('click', function() {
                navLinks.classList.toggle('active');
                const icon = this.querySelector('i');
                const isOpening = navLinks.classList.contains('active');
                
                if (icon) {
                    if (isOpening) {
                        // Opening mobile menu
                        icon.classList.remove('fa-bars');
                        icon.classList.add('fa-times');
                        
                        // Prevent body scroll
                        document.body.classList.add('mobile-menu-open');
                        
                        // Store current scroll position
                        const scrollY = window.scrollY;
                        document.body.style.top = `-${scrollY}px`;
                        
                    } else {
                        // Closing mobile menu
                        icon.classList.remove('fa-times');
                        icon.classList.add('fa-bars');
                        
                        // Restore body scroll
                        document.body.classList.remove('mobile-menu-open');
                        
                        // Restore scroll position
                        const scrollY = document.body.style.top;
                        document.body.style.top = '';
                        window.scrollTo(0, parseInt(scrollY || '0') * -1);
                        
                        // Close all dropdowns when closing mobile menu
                        document.querySelectorAll('.dropdown.active').forEach(dropdown => {
                            dropdown.classList.remove('active');
                            const dropdownIcon = dropdown.querySelector('.dropdown-toggle i');
                            if (dropdownIcon) {
                                dropdownIcon.classList.remove('fa-chevron-up');
                                dropdownIcon.classList.add('fa-chevron-down');
                            }
                        });
                    }
                }
            });
        }

        // Handle dropdown menus - always add click handlers
        dropdownToggles.forEach(toggle => {
            // Remove any existing click handlers first
            const newToggle = toggle.cloneNode(true);
            toggle.parentNode.replaceChild(newToggle, toggle);
            
            newToggle.addEventListener('click', function(e) {
                const navLinks = document.querySelector('.nav-links');
                const isMobileMenuOpen = navLinks && navLinks.classList.contains('active');
                const isMobileScreen = window.innerWidth <= 768;
                
                // Only handle dropdown clicks when:
                // 1. We're on a mobile screen, OR
                // 2. The hamburger menu is currently open
                if (isMobileScreen || isMobileMenuOpen) {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    const dropdown = this.parentElement;
                    
                    // Close other dropdowns first
                    document.querySelectorAll('.dropdown.active').forEach(otherDropdown => {
                        if (otherDropdown !== dropdown) {
                            otherDropdown.classList.remove('active');
                            const otherIcon = otherDropdown.querySelector('.dropdown-toggle i');
                            if (otherIcon) {
                                otherIcon.classList.remove('fa-chevron-up');
                                otherIcon.classList.add('fa-chevron-down');
                            }
                        }
                    });
                    
                    // Toggle current dropdown
                    dropdown.classList.toggle('active');
                    
                    // Toggle chevron icon
                    const icon = this.querySelector('i');
                    if (icon) {
                        icon.classList.toggle('fa-chevron-down');
                        icon.classList.toggle('fa-chevron-up');
                    }
                    
                    console.log('Dropdown toggled:', dropdown.classList.contains('active') ? 'OPEN' : 'CLOSED');
                }
            });
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            // Close mobile menu when clicking outside
            if (window.innerWidth <= 768) {
                if (!e.target.closest('.nav-links') && !e.target.closest('.mobile-menu-btn') && !e.target.closest('.mobile-filter-toggle')) {
                    // Re-query navLinks to ensure it exists
                    const currentNavLinks = document.querySelector('.nav-links');
                    if (currentNavLinks && currentNavLinks.classList.contains('active')) {
                        currentNavLinks.classList.remove('active');
                        
                        // Restore body scroll when closing mobile menu
                        document.body.classList.remove('mobile-menu-open');
                        
                        // Restore scroll position
                        const scrollY = document.body.style.top;
                        document.body.style.top = '';
                        window.scrollTo(0, parseInt(scrollY || '0') * -1);
                    }
                    const menuIcon = document.querySelector('.mobile-menu-btn i');
                    if (menuIcon) {
                        menuIcon.classList.remove('fa-times');
                        menuIcon.classList.add('fa-bars');
                    }
                }
            }
            
            // Close dropdowns when clicking outside (when mobile menu is open or on mobile)
            const navLinks = document.querySelector('.nav-links');
            const isMobileMenuOpen = navLinks && navLinks.classList.contains('active');
            const isMobileScreen = window.innerWidth <= 768;
            
            if ((isMobileScreen || isMobileMenuOpen) && !e.target.closest('.dropdown') && !e.target.classList.contains('dropdown-toggle')) {
                document.querySelectorAll('.dropdown').forEach(dropdown => {
                    if (dropdown.classList.contains('active')) {
                        dropdown.classList.remove('active');
                        const icon = dropdown.querySelector('.dropdown-toggle i');
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
        
        // Mark that event listeners have been added
        window.navbarEventListenersAdded = true;
        console.log('Navbar initialization completed');
    }, 100); // Wait 100ms for DOM to be fully ready
}

// Initialize navbar when script loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeNavbar);
} else {
    initializeNavbar();
}