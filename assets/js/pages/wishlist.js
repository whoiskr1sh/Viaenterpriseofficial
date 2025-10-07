// Wishlist page renderer
(function(){
  function getWishlist() {
    try { return JSON.parse(localStorage.getItem('wishlist_items')) || []; }
    catch(e){ return []; }
  }

  function saveWishlist(list){
    localStorage.setItem('wishlist_items', JSON.stringify(list));
  }

  function removeFromWishlist(id){
    const list = getWishlist().filter(i => i.id !== id);
    saveWishlist(list);
    // Back-compat per-item flag used by buttons elsewhere
    localStorage.setItem(`wishlist_${id}`, 'false');
    // Notify other tabs/pages
    window.dispatchEvent(new StorageEvent('storage', { key: 'wishlist_items', newValue: JSON.stringify(list) }));
  }

  function createCard(item){
    const card = document.createElement('div');
    card.className = 'product-card';
    card.setAttribute('data-product-id', item.id);

    // Generate proper product page URL with ID and slug
    const productSlug = item.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
    const productUrl = `product.html?id=${item.id}&name=${productSlug}`;

    const ratingHtml = (typeof item.rating === 'number' && !isNaN(item.rating))
      ? `<div class="rating">
           <span class="rating-number">${item.rating}</span>
           <span class="stars">★</span>
           <span class="review-count">${typeof item.reviews === 'number' ? `(${item.reviews})` : ''}</span>
         </div>`
      : '';

    const originalPriceHtml = item.originalPriceText
      ? `<span class="original-price">${item.originalPriceText}</span>`
      : '';

    card.innerHTML = `
      <button class="wishlist-btn active" aria-label="Remove from wishlist"><i class="fas fa-heart"></i></button>
      <img src="${item.image || 'assets/images/placeholder.webp'}" alt="${item.title}">
      <div class="product-info">
        <h3>${item.title}</h3>
        <div class="rating-price-container">
          <div class="price">
            <span class="current-price">${item.priceText || ''}</span>
            ${originalPriceHtml}
          </div>
          ${ratingHtml}
        </div>
        <div class="actions">
          <button class="btn btn-cart add-to-cart-btn" data-product-id="${item.id}">Add to Cart</button>
          <a href="${productUrl}" class="btn btn-view">View Product</a>
        </div>
      </div>`;

    // Hook remove from wishlist on heart
    const heart = card.querySelector('.wishlist-btn');
    heart.addEventListener('click', (e)=>{
      e.preventDefault();
      e.stopPropagation();
      removeFromWishlist(item.id);
      heart.classList.remove('active');
      heart.innerHTML = '<i class="far fa-heart"></i>';
      // Remove card with animation
      card.classList.add('fade-out');
      setTimeout(()=>{ card.remove(); toggleEmptyState(); }, 200);
    });

    // Hook add to cart functionality
    const addToCartBtn = card.querySelector('.add-to-cart-btn');
    addToCartBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      
      // Convert wishlist item to cart format
      const cartItem = {
        id: item.id,
        name: item.title,
        image: item.image || 'assets/images/placeholder.jpg',
        currentPrice: item.price || parseInt(item.priceText?.replace(/[₹,]/g, '')) || 0,
        originalPrice: item.originalPrice || parseInt(item.originalPriceText?.replace(/[₹,]/g, '')) || 0,
        discount: item.originalPriceText ? `${Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)}% OFF` : '',
        quantity: 1,
        inStock: true,
        maxStock: 10
      };
      
      // Add to cart using global cart manager
      if (typeof cartManager !== 'undefined' && cartManager) {
        cartManager.addToCart(cartItem);
        
        // Update button state temporarily
        addToCartBtn.textContent = 'Added!';
        addToCartBtn.disabled = true;
        setTimeout(() => {
          addToCartBtn.textContent = 'Add to Cart';
          addToCartBtn.disabled = false;
        }, 2000);
      } else {
        // Fallback: show message to user
        showToast('Please refresh the page and try again', 'error');
      }
    });

    return card;
  }

  function toggleEmptyState(){
    const grid = document.getElementById('wishlist-grid');
    const empty = document.getElementById('wishlist-empty');
    if (!grid || !empty) return;
    const hasItems = grid.children.length > 0;
    empty.style.display = hasItems ? 'none' : 'flex';
  }

  function render(){
    const grid = document.getElementById('wishlist-grid');
    const empty = document.getElementById('wishlist-empty');
    if (!grid || !empty) return;

    grid.innerHTML = '';
    const items = getWishlist();
    if (!items.length){
      empty.style.display = 'flex';
      return;
    }
    empty.style.display = 'none';
    items.forEach(item => grid.appendChild(createCard(item)));
  }

  // Toast notification function
  function showToast(message, type = 'info') {
    // Use the global showToast from wishlist.js if available
    if (typeof window.showToast === 'function') {
      window.showToast(message, type);
      return;
    }
    
    // Fallback toast implementation
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.style.cssText = `
      position: fixed; top: 20px; right: 20px; z-index: 10000;
      background: ${type === 'error' ? '#dc3545' : '#28a745'};
      color: white; padding: 15px 20px; border-radius: 5px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      animation: slideInRight 0.3s ease-out;
    `;
    toast.textContent = message;
    
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
  }

  document.addEventListener('DOMContentLoaded', render);
})();
