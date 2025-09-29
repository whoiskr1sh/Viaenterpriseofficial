<?php
// admin/categories-add.php - Add Category
$page_title = 'Add Category';
$page_subtitle = 'Create a new product category';
$breadcrumb_items = [
    ['title' => 'Admin'],
    ['title' => 'Products'],
    ['title' => 'Add Category', 'active' => true]
];
$page_actions = '<a class="btn btn--secondary" href="../admin/categories-manage.php"><i class="fas fa-list"></i> View Categories</a>';

include __DIR__ . '/header.php';
?>

<div class="data-panel">
  <div class="panel-header">
    <h3>Category Information</h3>
  </div>
  <div class="panel-body" style="padding: 2rem;">
    <form class="form">
      <div class="grid" style="grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem;">
        <div class="form-group">
          <label class="form-label">Category Name *</label>
          <input type="text" class="form-input" placeholder="Enter category name" required />
        </div>
        <div class="form-group">
          <label class="form-label">Parent Category</label>
          <div class="select-wrapper">
            <select class="form-input">
              <option value="">Select Parent Category</option>
              <option value="ethnic">Ethnic Wear</option>
              <option value="jewelry">Jewelry</option>
              <option value="accessories">Accessories</option>
            </select>
          </div>
        </div>
        <div class="form-group" style="grid-column: 1 / -1;">
          <label class="form-label">Description</label>
          <textarea class="form-input" rows="4" placeholder="Enter category description"></textarea>
        </div>
        <div class="form-group" style="grid-column: 1 / -1;">
          <label class="form-label">Category Image</label>
          <input type="file" class="form-input" accept="image/*" />
          <small class="form-help">Upload a representative image for this category.</small>
        </div>
      </div>
      <div class="form-actions" style="margin-top: 2rem; display: flex; gap: 1rem;">
        <button class="btn btn--primary" type="submit">
          <i class="fas fa-save"></i>
          Save Category
        </button>
        <button class="btn btn--ghost" type="reset">
          <i class="fas fa-undo"></i>
          Reset
        </button>
      </div>
    </form>
  </div>
</div>

<?php include __DIR__ . '/footer.php'; ?>
