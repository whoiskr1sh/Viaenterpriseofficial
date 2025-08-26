document.addEventListener('DOMContentLoaded', function() {
    // Initialize wishlist buttons
    const wishlistButtons = document.querySelectorAll('.wishlist-btn');
    
    // Add click event to each wishlist button
    wishlistButtons.forEach(button => {
        // Check localStorage for saved wishlist state
        const productId =button.closest('.product-action')?.dataset.productId || button.closest('.product-card')?.dataset.productId || 
                         Math.random().toString(36).substr(2, 9);
        const isWishlisted = localStorage.getItem(`wishlist_${productId}`) === 'true';
        
        // Set initial state
        if (isWishlisted) {
            button.classList.add('active');
            button.innerHTML = '<i class="fas fa-heart"></i>';
        } else {
            button.innerHTML = '<i class="far fa-heart"></i>';
        }
        
        // Add click handler
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const icon = this.querySelector('i');
            const isActive = this.classList.contains('active');
            
            // Toggle active class
            this.classList.toggle('active');
            
            // Update icon and localStorage
            if (isActive) {
                icon.className = 'far fa-heart';
                localStorage.setItem(`wishlist_${productId}`, 'false');
            } else {
                icon.className = 'fas fa-heart';
                localStorage.setItem(`wishlist_${productId}`, 'true');
                
                // Add a small animation when adding to wishlist
                this.style.transform = 'scale(1.2)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 200);
            }
        });
    });
});
