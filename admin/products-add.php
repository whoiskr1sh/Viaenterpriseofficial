<?php
// admin/products-add.php - Add Product
$page_title = 'Add Product';
$page_subtitle = 'Create a new product for your store';
$breadcrumb_items = [
    ['title' => 'Admin'],
    ['title' => 'Products'],
    ['title' => 'Add Product', 'active' => true]
];
$page_actions = '<button class="btn btn--secondary"><i class="fas fa-list"></i> View Products</button>';

include __DIR__ . '/header.php';
?>
      <div class="data-panel">
        <div class="panel-header">
          <h3>Product Information</h3>
        </div>
        <div class="panel-body" style="padding: 2rem;">
          <form class="form" enctype="multipart/form-data">
            <div class="grid" style="grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem;">
              <div class="form-group">
                <label class="form-label">Product Name *</label>
                <input type="text" class="form-input" placeholder="Enter product name" required />
              </div>
              <div class="form-group">
                <label class="form-label">Category *</label>
                <div class="select-wrapper">
                  <select class="form-input" required>
                    <option value="">Select Category</option>
                    <option value="sarees">Sarees</option>
                    <option value="lehengas">Lehengas</option>
                    <option value="jewelry">Jewelry</option>
                    <option value="kurtis">Kurtis</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <label class="form-label">Subcategory</label>
                <input type="text" class="form-input" placeholder="Enter subcategory" />
              </div>
              <div class="form-group">
                <label class="form-label">Price (₹) *</label>
                <input type="number" class="form-input" placeholder="0" required />
              </div>
              <div class="form-group">
                <label class="form-label">Discount (%)</label>
                <input type="number" class="form-input" placeholder="0" min="0" max="100" />
              </div>
              <div class="form-group">
                <label class="form-label">Stock Quantity</label>
                <input type="number" class="form-input" placeholder="0" min="0" />
              </div>
              <div class="form-group" style="grid-column: 1 / -1;">
                <label class="form-label">Description</label>
                <textarea class="form-input" rows="4" placeholder="Enter product description"></textarea>
              </div>
              <div class="form-group" style="grid-column: 1 / -1;">
                <label class="form-label">Product Images</label>
                <input type="file" class="form-input" multiple accept="image/*" />
                <small class="form-help">Upload multiple images. First image will be the main image.</small>
              </div>
            </div>
            <div class="form-actions" style="margin-top: 2rem; display: flex; gap: 1rem;">
              <button class="btn btn--primary" type="submit">
                <i class="fas fa-save"></i>
                Save Product
              </button>
              <button class="btn btn--secondary" type="button">
                <i class="fas fa-eye"></i>
                Preview
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
