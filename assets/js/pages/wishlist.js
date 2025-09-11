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
    console.log(item);
    card.className = 'product-card';
    card.setAttribute('data-product-id', item.id);

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
          <a href="${item.link || 'product.html'}" class="btn btn-outline">View Product</a>
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

  document.addEventListener('DOMContentLoaded', render);
})();
