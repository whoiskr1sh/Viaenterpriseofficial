<?php
// admin/categories-manage.php - Manage Categories
$page_title = 'Manage Categories';
$page_subtitle = 'Organize your product categories';
$breadcrumb_items = [
    ['title' => 'Admin'],
    ['title' => 'Products'],
    ['title' => 'Manage Categories', 'active' => true]
];
$page_actions = '<button class="btn btn--primary"><i class="fas fa-plus"></i> Add Category</button>';

include __DIR__ . '/header.php';
?>

<div class="data-section">
  <div class="data-panel">
    <div class="panel-header">
      <h3>All Categories</h3>
      <div class="panel-actions">
        <div class="search-box">
          <i class="fas fa-search"></i>
          <input type="search" placeholder="Search categories..." id="categorySearch">
        </div>
      </div>
    </div>
    <div class="table-container">
      <table class="data-table">
        <thead>
          <tr>
            <th><input type="checkbox" id="selectAll"></th>
            <th><h3>Category</h3></th>
            <th><h3>Parent</h3></th>
            <th><h3>Products</h3></th>
            <th><h3>Status</h3></th>
            <th><h3>Actions</h3></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="checkbox" class="row-select"></td>
            <td>
              <div class="category-info">
                <img src="../assets/images/category-sarees.jpg" alt="Category" class="customer-avatar" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNiA4QzEzLjc5IDggMTIgOS43OSAxMiAxMkMxMiAxNC4yMSAxMy43OSAxNiAxNiAxNkMxOC4yMSAxNiAyMCAxNC4yMSAyMCAxMkMyMCA5Ljc5IDE4LjIxIDggMTYgOFoiIGZpbGw9IiM5Q0E0QUYiLz4KPHBhdGggZD0iTTggMjRDOCAyMC42OSAxMC42OSAxOCAxNCAxOEgxOEMyMS4zMSAxOCAyNCAyMC42OSAyNCAyNFYyNkg4VjI0WiIgZmlsbD0iIzlDQTRBRiIvPgo8L3N2Zz4='" style="border-radius: 4px;">
                <div>
                  <span class="category-name">Sarees</span>
                  <span class="category-desc">Traditional Indian wear</span>
                </div>
              </div>
            </td>
            <td>Ethnic Wear</td>
            <td>
              <span class="product-count">25</span>
              <small class="text-muted">products</small>
            </td>
            <td><span class="status-badge status-completed">Active</span></td>
            <td>
              <div class="action-buttons">
                <button class="btn-icon" title="Edit Category">
                  <i class="fas fa-edit"></i>
                </button>
                <button class="btn-icon" title="View Products">
                  <i class="fas fa-eye"></i>
                </button>
                <button class="btn-icon btn-icon--danger" title="Delete Category">
                  <i class="fas fa-trash"></i>
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td><input type="checkbox" class="row-select"></td>
            <td>
              <div class="category-info">
                <img src="../assets/images/category-jewelry.jpg" alt="Category" class="customer-avatar" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNiA4QzEzLjc5IDggMTIgOS43OSAxMiAxMkMxMiAxNC4yMSAxMy43OSAxNiAxNiAxNkMxOC4yMSAxNiAyMCAxNC4yMSAyMCAxMkMyMCA5Ljc5IDE4LjIxIDggMTYgOFoiIGZpbGw9IiM5Q0E0QUYiLz4KPHBhdGggZD0iTTggMjRDOCAyMC42OSAxMC42OSAxOCAxNCAxOEgxOEMyMS4zMSAxOCAyNCAyMC42OSAyNCAyNFYyNkg4VjI0WiIgZmlsbD0iIzlDQTRBRiIvPgo8L3N2Zz4='" style="border-radius: 4px;">
                <div>
                  <span class="category-name">Jewelry</span>
                  <span class="category-desc">Gold, silver and fashion jewelry</span>
                </div>
              </div>
            </td>
            <td>-</td>
            <td>
              <span class="product-count">18</span>
              <small class="text-muted">products</small>
            </td>
            <td><span class="status-badge status-completed">Active</span></td>
            <td>
              <div class="action-buttons">
                <button class="btn-icon" title="Edit Category">
                  <i class="fas fa-edit"></i>
                </button>
                <button class="btn-icon" title="View Products">
                  <i class="fas fa-eye"></i>
                </button>
                <button class="btn-icon btn-icon--danger" title="Delete Category">
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
        Showing 1-2 of 8 categories
      </div>
      <div class="pagination">
        <button class="pagination-btn" disabled>
          <i class="fas fa-chevron-left"></i>
        </button>
        <button class="pagination-btn active">1</button>
        <button class="pagination-btn">
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  </div>
</div>

<?php include __DIR__ . '/footer.php'; ?>
