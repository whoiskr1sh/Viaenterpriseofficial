<?php
// admin/products-manage.php - Manage Products
$page_title = 'Manage Products';
$page_subtitle = 'View and manage all your products';
$breadcrumb_items = [
    ['title' => 'Admin'],
    ['title' => 'Products'],
    ['title' => 'Manage Products', 'active' => true]
];
$page_actions = '<button class="btn btn--primary"><i class="fas fa-plus"></i> Add Product</button>';

include __DIR__ . '/header.php';
?>

<div class="data-section">
  <div class="data-panel">
    <div class="panel-header">
      <h3>All Products</h3>
      <div class="panel-actions">
        <div class="search-box">
          <i class="fas fa-search"></i>
          <input type="search" placeholder="Search products..." id="productSearch">
        </div>
        <select class="status-filter">
          <option value="">All Categories</option>
          <option value="sarees">Sarees</option>
          <option value="lehengas">Lehengas</option>
          <option value="jewelry">Jewelry</option>
          <option value="kurtis">Kurtis</option>
        </select>
      </div>
    </div>
    <div class="table-container">
      <table class="data-table">
        <thead>
          <tr>
            <th><input type="checkbox" id="selectAll"></th>
            <th><h3>Product</h3></th>
            <th><h3>Category</h3></th>
            <th><h3>Price</h3></th>
            <th><h3>Stock</h3></th>
            <th><h3>Status</h3></th>
            <th><h3>Actions</h3></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="checkbox" class="row-select"></td>
            <td>
              <div class="product-info">
                <img src="/assets/images/product1.jpg" alt="Product" class="customer-avatar" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNiA4QzEzLjc5IDggMTIgOS43OSAxMiAxMkMxMiAxNC4yMSAxMy43OSAxNiAxNiAxNkMxOC4yMSAxNiAyMCAxNC4yMSAyMCAxMkMyMCA5Ljc5IDE4LjIxIDggMTYgOFoiIGZpbGw9IiM5Q0E0QUYiLz4KPHBhdGggZD0iTTggMjRDOCAyMC42OSAxMC42OSAxOCAxNCAxOEgxOEMyMS4zMSAxOCAyNCAyMC42OSAyNCAyNFYyNkg4VjI0WiIgZmlsbD0iIzlDQTRBRiIvPgo8L3N2Zz4='" style="border-radius: 4px;">
                <div>
                  <span class="product-count">Chiffon Saree - Red</span>
                  <span class="product-preview">Premium quality silk blend</span>
                </div>
              </div>
            </td>
            <td>Sarees</td>
            <td class="amount">₹1,999</td>
            <td>
              <span class="stock-count">54</span>
            </td>
            <td><span class="status-badge status-completed">Active</span></td>
            <td>
              <div class="action-buttons">
                <button class="btn-icon" title="Edit Product">
                  <i class="fas fa-edit"></i>
                </button>
                <button class="btn-icon" title="View Product">
                  <i class="fas fa-eye"></i>
                </button>
                <button class="btn-icon btn-icon--danger" title="Delete Product">
                  <i class="fas fa-trash"></i>
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td><input type="checkbox" class="row-select"></td>
            <td>
              <div class="product-info">
                <img src="/assets/images/product2.jpg" alt="Product" class="customer-avatar" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNiA4QzEzLjc5IDggMTIgOS43OSAxMiAxMkMxMiAxNC4yMSAxMy43OSAxNiAxNiAxNkMxOC4yMSAxNiAyMCAxNC4yMSAyMCAxMkMyMCA5Ljc5IDE4LjIxIDggMTYgOFoiIGZpbGw9IiM5Q0E0QUYiLz4KPHBhdGggZD0iTTggMjRDOCAyMC42OSAxMC42OSAxOCAxNCAxOEgxOEMyMS4zMSAxOCAyNCAyMC42OSAyNCAyNFYyNkg4VjI0WiIgZmlsbD0iIzlDQTRBRiIvPgo8L3N2Zz4='" style="border-radius: 4px;">
                <div>
                  <span class="product-count">Designer Lehenga - Blue</span>
                  <span class="product-preview">Embroidered with golden work</span>
                </div>
              </div>
            </td>
            <td>Lehengas</td>
            <td class="amount">₹4,999</td>
            <td>
              <span class="stock-count" style="color: var(--warning);">12</span>
            </td>
            <td><span class="status-badge status-warning">Low Stock</span></td>
            <td>
              <div class="action-buttons">
                <button class="btn-icon" title="Edit Product">
                  <i class="fas fa-edit"></i>
                </button>
                <button class="btn-icon" title="View Product">
                  <i class="fas fa-eye"></i>
                </button>
                <button class="btn-icon btn-icon--danger" title="Delete Product">
                  <i class="fas fa-trash"></i>
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td><input type="checkbox" class="row-select"></td>
            <td>
              <div class="product-info">
                <img src="/assets/images/product3.jpg" alt="Product" class="customer-avatar" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNiA4QzEzLjc5IDggMTIgOS43OSAxMiAxMkMxMiAxNC4yMSAxMy43OSAxNiAxNiAxNkMxOC4yMSAxNiAyMCAxNC4yMSAyMCAxMkMyMCA5Ljc5IDE4LjIxIDggMTYgOFoiIGZpbGw9IiM5Q0E0QUYiLz4KPHBhdGggZD0iTTggMjRDOCAyMC42OSAxMC42OSAxOCAxNCAxOEgxOEMyMS4zMSAxOCAyNCAyMC42OSAyNCAyNFYyNkg4VjI0WiIgZmlsbD0iIzlDQTRBRiIvPgo8L3N2Zz4='" style="border-radius: 4px;">
                <div>
                  <span class="product-count">Gold Necklace Set</span>
                  <span class="product-preview">22K gold with pearls</span>
                </div>
              </div>
            </td>
            <td>Jewelry</td>
            <td class="amount">₹25,999</td>
            <td>
              <span class="stock-count" style="color: var(--danger);">3</span>
            </td>
            <td><span class="status-badge status-cancelled">Out of Stock</span></td>
            <td>
              <div class="action-buttons">
                <button class="btn-icon" title="Edit Product">
                  <i class="fas fa-edit"></i>
                </button>
                <button class="btn-icon" title="View Product">
                  <i class="fas fa-eye"></i>
                </button>
                <button class="btn-icon btn-icon--danger" title="Delete Product">
                  <i class="fas fa-trash"></i>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="table-footer">
      <div class="table-info">
        Showing 1-3 of 45 products
      </div>
      <div class="pagination">
        <button class="pagination-btn" disabled>
          <i class="fas fa-chevron-left"></i>
        </button>
        <button class="pagination-btn active">1</button>
        <button class="pagination-btn">2</button>
        <button class="pagination-btn">3</button>
        <span class="pagination-dots">...</span>
        <button class="pagination-btn">15</button>
        <button class="pagination-btn">
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  </div>
</div>

<?php include __DIR__ . '/footer.php'; ?>
