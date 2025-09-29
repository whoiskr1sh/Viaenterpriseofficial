<?php
// admin/coupons.php - Coupon Management
$page_title = 'Coupons';
$page_subtitle = 'Create and manage discount coupons';
$breadcrumb_items = [
    ['title' => 'Admin'],
    ['title' => 'Marketing'],
    ['title' => 'Coupons', 'active' => true]
];
$page_actions = '<button class="btn btn--primary" data-modal-target="#create-coupon-modal"><i class="fas fa-plus"></i> Create Coupon</button>';

include __DIR__ . '/header.php';
?>

<div class="data-section">
  <div class="data-panel">
    <div class="panel-header">
      <h3>Coupon Codes</h3>
      <div class="panel-actions">
        <div class="search-box">
          <i class="fas fa-search"></i>
          <input type="search" placeholder="Search coupons..." id="couponSearch">
        </div>
        <select class="status-filter">
          <option value="">All Status</option>
          <option value="active">Active</option>
          <option value="expired">Expired</option>
          <option value="used">Used</option>
        </select>
      </div>
    </div>
    <div class="table-container">
      <table class="data-table">
        <thead>
          <tr>
            <th><input type="checkbox" id="selectAll"></th>
            <th>Coupon Code</th>
            <th>Type</th>
            <th>Discount</th>
            <th>Usage</th>
            <th>Expires</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="checkbox" class="row-select"></td>
            <td>
              <div class="coupon-info">
                <div>
                  <span class="coupon-code">WELCOME50</span>
                  <span class="coupon-desc">Welcome discount for new customers</span>
                </div>
              </div>
            </td>
            <td>
              <span class="coupon-type">
                <i class="fas fa-percentage"></i>
                Percentage
              </span>
            </td>
            <td>
              <span class="discount-value">50%</span>
            </td>
            <td>
              <div>
                <div>25 / 100</div>
                <small class="text-muted">uses</small>
              </div>
            </td>
            <td>
              <div>
                <div>Mar 31, 2024</div>
                <small class="text-muted">2 months left</small>
              </div>
            </td>
            <td><span class="status-badge status-completed">Active</span></td>
            <td>
              <div class="action-buttons">
                <button class="btn-icon" title="Edit Coupon">
                  <i class="fas fa-edit"></i>
                </button>
                <button class="btn-icon" title="Copy Code">
                  <i class="fas fa-copy"></i>
                </button>
                <button class="btn-icon btn-icon--danger" title="Deactivate">
                  <i class="fas fa-pause"></i>
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td><input type="checkbox" class="row-select"></td>
            <td>
              <div class="coupon-info">
                <div>
                  <span class="coupon-code">SAVE200</span>
                  <span class="coupon-desc">Flat ₹200 off on orders above ₹2000</span>
                </div>
              </div>
            </td>
            <td>
              <span class="coupon-type">
                <i class="fas fa-rupee-sign"></i>
                Fixed Amount
              </span>
            </td>
            <td>
              <span class="discount-value">₹200</span>
            </td>
            <td>
              <div>
                <div>12 / 50</div>
                <small class="text-muted">uses</small>
              </div>
            </td>
            <td>
              <div>
                <div>Feb 28, 2024</div>
                <small class="text-muted">1 month left</small>
              </div>
            </td>
            <td><span class="status-badge status-completed">Active</span></td>
            <td>
              <div class="action-buttons">
                <button class="btn-icon" title="Edit Coupon">
                  <i class="fas fa-edit"></i>
                </button>
                <button class="btn-icon" title="Copy Code">
                  <i class="fas fa-copy"></i>
                </button>
                <button class="btn-icon btn-icon--danger" title="Deactivate">
                  <i class="fas fa-pause"></i>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="table-footer">
      <div class="table-info">
        Showing 1-2 of 12 coupons
      </div>
      <div class="pagination">
        <button class="pagination-btn" disabled>
          <i class="fas fa-chevron-left"></i>
        </button>
        <button class="pagination-btn active">1</button>
        <button class="pagination-btn">2</button>
        <button class="pagination-btn">3</button>
        <button class="pagination-btn">
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  </div>
</div>

<!-- Create Coupon Modal -->
<div class="modal" id="create-coupon-modal">
  <div class="modal__panel">
    <div class="modal__header">
      <h3>Create New Coupon</h3>
      <button class="modal__close-btn" data-modal-close>&times;</button>
    </div>
    <div class="modal__body">
      <form class="form" id="create-coupon-form">
        <div class="form-grid">
          <div class="form-group" style="grid-column: 1 / -1;">
            <label class="form-label">Coupon Code *</label>
            <input type="text" class="form-input" placeholder="e.g., SUMMER25" required />
          </div>
          <div class="form-group">
            <label class="form-label">Discount Type</label>
            <select class="form-input">
              <option value="percentage">Percentage</option>
              <option value="fixed">Fixed Amount</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Discount Value *</label>
            <input type="number" class="form-input" placeholder="e.g., 25 or 500" required />
          </div>
          <div class="form-group">
            <label class="form-label">Usage Limit</label>
            <input type="number" class="form-input" placeholder="e.g., 100" />
          </div>
          <div class="form-group">
            <label class="form-label">Expiry Date</label>
            <input type="date" class="form-input" />
          </div>
        </div>
      </form>
    </div>
    <div class="modal__footer">
      <button class="btn btn--secondary" data-modal-close>Cancel</button>
      <button class="btn btn--primary" type="submit" form="create-coupon-form">Save Coupon</button>
    </div>
  </div>
</div>

<?php include __DIR__ . '/footer.php'; ?>
