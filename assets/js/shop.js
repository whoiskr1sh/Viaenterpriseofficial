// Shop Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Sample product data with subcategories
    const products = {
        ethnic: {
            sarees: [
                { id: 2, name: 'Silk Banarasi Saree', price: 3499, originalPrice: 5999, rating: 4.9, reviews: 312, image: 'assets/images/saree.webp' },
                { id: 31, name: 'Kanjivaram Silk Saree', price: 4499, originalPrice: 6999, rating: 4.8, reviews: 245, image: 'assets/images/kanjivaram.webp' },
                { id: 32, name: 'Chiffon Printed Saree', price: 1999, originalPrice: 3499, rating: 4.6, reviews: 198, image: 'assets/images/Chiffon Printed Saree.webp' },
                { id: 33, name: 'Georgette Embroidered Saree', price: 2799, originalPrice: 4599, rating: 4.7, reviews: 176, image: 'assets/images/Georgette Embroidered Saree.jpg' },
                { id: 61, name: 'Cotton Handloom Saree', price: 1599, originalPrice: 2899, rating: 4.5, reviews: 142, image: 'assets/images/Cotton Handloom Saree.webp' },
                { id: 62, name: 'Party Wear Net Saree', price: 3899, originalPrice: 6299, rating: 4.8, reviews: 198, image: 'assets/images/Party Wear Net Saree.jpg' }
            ],
            lehengas: [
                { id: 3, name: 'Designer Lehenga', price: 5499, originalPrice: 8999, rating: 4.7, reviews: 198, image: 'assets/images/lehenga.jpg' },
                { id: 34, name: 'Bridal Lehenga', price: 8499, originalPrice: 12999, rating: 4.9, reviews: 156, image: 'assets/images/bridal-lehenga.jpg' },
                { id: 35, name: 'Anarkali Lehenga', price: 4999, originalPrice: 7999, rating: 4.6, reviews: 187, image: 'assets/images/anarkali-lehenga.webp' },
                { id: 36, name: 'Indo-Western Lehenga', price: 4299, originalPrice: 6999, rating: 4.5, reviews: 165, image: 'assets/images/indo-lehenga.jpg' },
                { id: 63, name: 'Velvet Embroidered Lehenga', price: 7599, originalPrice: 11499, rating: 4.7, reviews: 178, image: 'assets/images/velvet-lehenga.jpg' },
                { id: 64, name: 'Mirror Work Lehenga', price: 6899, originalPrice: 10499, rating: 4.6, reviews: 154, image: 'assets/images/mirror-lehenga.jpg' }
            ],
            kurtis: [
                { id: 1, name: 'Floral Print Kurti', price: 1499, originalPrice: 2999, rating: 4.8, reviews: 248, image: 'assets/images/kurta2.webp' },
                { id: 4, name: 'Cotton Printed Kurti', price: 999, originalPrice: 1999, rating: 4.5, reviews: 176, image: 'assets/images/kurti.webp' },
                { id: 5, name: 'Anarkali Suit', price: 2299, originalPrice: 3999, rating: 4.6, reviews: 221, image: 'assets/images/anarkali.webp' },
                { id: 6, name: 'Chikankari Kurta Set', price: 1799, originalPrice: 3499, rating: 4.7, reviews: 189, image: 'assets/images/chikankari.webp' },
                { id: 65, name: 'Rayon A-Line Kurti', price: 1399, originalPrice: 2599, rating: 4.5, reviews: 132, image: 'assets/images/rayon-kurti.jpg' },
                { id: 66, name: 'Festive Embellished Kurti', price: 1899, originalPrice: 3299, rating: 4.6, reviews: 165, image: 'assets/images/festive-kurti.webp' }
            ]
        },
        jewelry: {
            necklaces: [
                { id: 7, name: 'Temple Necklace Set', price: 2499, originalPrice: 4499, rating: 4.8, reviews: 156, image: 'assets/images/necklace.webp' },
                { id: 37, name: 'Kundan Necklace Set', price: 3299, originalPrice: 5499, rating: 4.7, reviews: 143, image: 'assets/images/kundan-necklace.webp' },
                { id: 38, name: 'Pearl Choker Set', price: 2899, originalPrice: 4799, rating: 4.8, reviews: 167, image: 'assets/images/pearl-choker.jpg' },
                { id: 39, name: 'Antique Gold Necklace', price: 1999, originalPrice: 3599, rating: 4.6, reviews: 132, image: 'assets/images/gold-necklace.jpg' },
                { id: 67, name: 'Diamond Pendant Set', price: 4599, originalPrice: 7999, rating: 4.9, reviews: 142, image: 'assets/images/diamond-pendant.jpg' },
                { id: 68, name: 'Meenakari Necklace Set', price: 2799, originalPrice: 4799, rating: 4.7, reviews: 156, image: 'assets/images/meenakari-necklace.webp' }
            ],
            earrings: [
                { id: 8, name: 'Jhumka Earrings', price: 799, originalPrice: 1499, rating: 4.6, reviews: 278, image: 'assets/images/earrings.jpg' },
                { id: 40, name: 'Stud Earrings', price: 599, originalPrice: 999, rating: 4.5, reviews: 321, image: 'assets/images/stud-earrings.webp' },
                { id: 41, name: 'Chandbali Earrings', price: 899, originalPrice: 1599, rating: 4.7, reviews: 198, image: 'assets/images/chandbali.webp' },
                { id: 42, name: 'Pearl Drop Earrings', price: 699, originalPrice: 1299, rating: 4.6, reviews: 187, image: 'assets/images/pearl-earrings.jpg' },
                { id: 69, name: 'Hoop Earrings', price: 499, originalPrice: 899, rating: 4.4, reviews: 198, image: 'assets/images/hoop-earrings.webp' },
                { id: 70, name: 'Kundan Studs', price: 699, originalPrice: 1399, rating: 4.5, reviews: 165, image: 'assets/images/kundan-studs.webp' }
            ],
            bangles: [
                { id: 9, name: 'Oxidized Bangles Set', price: 1299, originalPrice: 2299, rating: 4.5, reviews: 198, image: 'assets/images/bangles.webp' },
                { id: 10, name: 'Gold Plated Maang Tikka', price: 899, originalPrice: 1599, rating: 4.7, reviews: 142, image: 'assets/images/maangtikka.webp' },
                { id: 11, name: 'Polki Choker Set', price: 3299, originalPrice: 5499, rating: 4.9, reviews: 98, image: 'assets/images/choker.webp' },
                { id: 12, name: 'Silver Anklets', price: 699, originalPrice: 1299, rating: 4.4, reviews: 231, image: 'assets/images/anklets.webp' },
                { id: 71, name: 'Glass Bangles Set', price: 599, originalPrice: 999, rating: 4.3, reviews: 178, image: 'assets/images/glass-bangles.webp' },
                { id: 72, name: 'Pearl Kada Bangles', price: 1499, originalPrice: 2699, rating: 4.6, reviews: 145, image: 'assets/images/pearl-kada.jpg' }
            ]
        },
        accessories: {
            bags: [
                { id: 13, name: 'Embroidered Clutch', price: 1299, originalPrice: 2299, rating: 4.5, reviews: 187, image: 'assets/images/clutch.png' },
                { id: 17, name: 'Leather Crossbody Bag', price: 1599, originalPrice: 2799, rating: 4.6, reviews: 176, image: 'assets/images/bag.webp' },
                { id: 43, name: 'Handmade Potli Bag', price: 999, originalPrice: 1899, rating: 4.5, reviews: 154, image: 'assets/images/potli-bag.jpg' },
                { id: 44, name: 'Designer Tote Bag', price: 1199, originalPrice: 1999, rating: 4.4, reviews: 198, image: 'assets/images/tote-bag.webp' },
                { id: 73, name: 'Casual Backpack', price: 1399, originalPrice: 2499, rating: 4.6, reviews: 156, image: 'assets/images/backpack.webp' },
                { id: 74, name: 'Party Sling Bag', price: 899, originalPrice: 1699, rating: 4.5, reviews: 165, image: 'assets/images/sling-bag.webp' }
            ],
            footwear: [
                { id: 14, name: 'Jutti Flats', price: 999, originalPrice: 1899, rating: 4.6, reviews: 243, image: 'assets/images/jutti.webp' },
                { id: 45, name: 'Embroidered Mojris', price: 1299, originalPrice: 2299, rating: 4.7, reviews: 187, image: 'assets/images/mojris.jpg' },
                { id: 46, name: 'Kolhapuri Chappals', price: 1499, originalPrice: 2599, rating: 4.5, reviews: 165, image: 'assets/images/kolhapuri.webp' },
                { id: 47, name: 'Zardozi Heels', price: 1799, originalPrice: 2999, rating: 4.6, reviews: 143, image: 'assets/images/zardozi-heels.webp' },
                { id: 75, name: 'Casual Slip-ons', price: 899, originalPrice: 1599, rating: 4.4, reviews: 176, image: 'assets/images/slip-ons.webp' },
                { id: 76, name: 'Traditional Sandals', price: 1199, originalPrice: 2099, rating: 4.5, reviews: 156, image: 'assets/images/traditional-sandals.webp' }
            ],
            watches: [
                { id: 15, name: 'Designer Watch', price: 1799, originalPrice: 2999, rating: 4.7, reviews: 156, image: 'assets/images/watch.webp' },
                { id: 48, name: 'Antique Pocket Watch', price: 2199, originalPrice: 3799, rating: 4.8, reviews: 132, image: 'assets/images/pocket-watch.jpeg' },
                { id: 49, name: 'Leather Strap Watch', price: 1599, originalPrice: 2799, rating: 4.6, reviews: 187, image: 'assets/images/leather-watch.webp' },
                { id: 50, name: 'Bangle Watch', price: 1999, originalPrice: 3499, rating: 4.5, reviews: 154, image: 'assets/images/bangle-watch.jpg' },
                { id: 77, name: 'Digital Sports Watch', price: 1299, originalPrice: 2299, rating: 4.6, reviews: 143, image: 'assets/images/sports-watch.jpg' },
                { id: 78, name: 'Classic Metal Strap Watch', price: 1899, originalPrice: 3299, rating: 4.7, reviews: 167, image: 'assets/images/metal-watch.webp' }
            ]
        },
        hampers: {
            optimized_hampers: [
                { id: 19, name: 'Luxury Diwali Hamper', price: 2499, originalPrice: 4499, rating: 4.8, reviews: 132, image: 'assets/images/diwali-hamper.webp' },
                { id: 51, name: 'Premium Rakhi Hamper', price: 1799, originalPrice: 2999, rating: 4.7, reviews: 187, image: 'assets/images/rakhi-hamper.webp' },
                { id: 52, name: 'Corporate Gifting Hamper', price: 3299, originalPrice: 5499, rating: 4.6, reviews: 154, image: 'assets/images/corporate-gifting.webp' },
                { id: 53, name: 'Luxury Wedding Return Gift', price: 1999, originalPrice: 3499, rating: 4.8, reviews: 176, image: 'assets/images/wedding-return.jpeg' },
                { id: 79, name: 'Festive Sweet Hamper', price: 1599, originalPrice: 2799, rating: 4.5, reviews: 132, image: 'assets/images/sweet-hamper.webp' },
                { id: 80, name: 'Premium Dry Fruit Hamper', price: 2999, originalPrice: 4999, rating: 4.7, reviews: 154, image: 'assets/images/dryfruit-hamper.jpg' }
            ],
            gift_hampers: [
                { id: 20, name: 'Wedding Return Gift Set', price: 899, originalPrice: 1599, rating: 4.7, reviews: 187, image: 'assets/images/wedding-gift.webp' },
                { id: 21, name: 'Corporate Gift Hamper', price: 1799, originalPrice: 2999, rating: 4.6, reviews: 98, image: 'assets/images/corporate-gift.jpeg' },
                { id: 22, name: 'Premium Pooja Thali', price: 1299, originalPrice: 2299, rating: 4.9, reviews: 156, image: 'assets/images/pooja-thali.webp' },
                { id: 23, name: 'Gourmet Gift Box', price: 1599, originalPrice: 2799, rating: 4.5, reviews: 143, image: 'assets/images/gourmet-box.webp' },
                { id: 81, name: 'Festival Puja Hamper', price: 1399, originalPrice: 2499, rating: 4.6, reviews: 176, image: 'assets/images/puja-hamper.jpg' },
                { id: 82, name: 'Chocolate Treat Box', price: 1199, originalPrice: 2099, rating: 4.7, reviews: 165, image: 'assets/images/chocolate-box.jpg' }
            ]
        },
        lifestyle: {
            stationery: [
                { id: 54, name: 'Handmade Paper Notebook Set', price: 799, originalPrice: 1499, rating: 4.6, reviews: 187, image: 'assets/images/notebook-set.webp' },
                { id: 55, name: 'Wooden Pen Stand', price: 599, originalPrice: 999, rating: 4.5, reviews: 143, image: 'assets/images/pen-stand.jpg' },
                { id: 56, name: 'Leather Journal', price: 1299, originalPrice: 2299, rating: 4.7, reviews: 165, image: 'assets/images/leather-journal.jpg' },
                { id: 57, name: 'Calligraphy Pen Set', price: 899, originalPrice: 1599, rating: 4.4, reviews: 132, image: 'assets/images/calligraphy-set.jpeg' },
                { id: 83, name: 'Desk Organizer Set', price: 1499, originalPrice: 2499, rating: 4.6, reviews: 154, image: 'assets/images/desk-organizer.webp' },
                { id: 84, name: 'Premium Fountain Pen', price: 1199, originalPrice: 1999, rating: 4.5, reviews: 132, image: 'assets/images/fountain-pen.avif' }
            ],
            cosmetics: [
                { id: 27, name: 'Handmade Soap Collection', price: 699, originalPrice: 1299, rating: 4.7, reviews: 198, image: 'assets/images/soap.jpg' },
                { id: 58, name: 'Natural Lip Balm Set', price: 499, originalPrice: 899, rating: 4.5, reviews: 176, image: 'assets/images/lip-balm.webp' },
                { id: 59, name: 'Aromatherapy Body Oil', price: 899, originalPrice: 1599, rating: 4.6, reviews: 143, image: 'assets/images/body-oil.avif' },
                { id: 60, name: 'Herbal Face Mask Kit', price: 599, originalPrice: 1099, rating: 4.4, reviews: 165, image: 'assets/images/face-mask.jpg' },
                { id: 85, name: 'Premium Lipstick Set', price: 1299, originalPrice: 2299, rating: 4.7, reviews: 165, image: 'assets/images/lipstick-set.webp' },
                { id: 86, name: 'Glow Serum Set', price: 1499, originalPrice: 2499, rating: 4.6, reviews: 154, image: 'assets/images/glow-serum.webp' }
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
    });
});
