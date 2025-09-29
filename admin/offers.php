<?php
// admin/offers.php - Offers & Discounts
$page_title = 'Offers & Discounts';
$page_subtitle = 'Create and manage promotional offers';
$breadcrumb_items = [
    ['title' => 'Admin'],
    ['title' => 'Marketing'],
    ['title' => 'Offers & Discounts', 'active' => true]
];
$page_actions = '<button class="btn btn--primary" data-modal-target="#create-offer-modal"><i class="fas fa-plus"></i> Create Offer</button>';

include __DIR__ . '/header.php';
?>

<div class="data-section">
  <div class="data-panel">
    <div class="panel-header">
      <h3>Active Offers</h3>
      <div class="panel-actions">
        <div class="search-box">
          <i class="fas fa-search"></i>
          <input type="search" placeholder="Search offers..." id="offerSearch">
        </div>
        <select class="status-filter">
          <option value="">All Status</option>
          <option value="active">Active</option>
          <option value="scheduled">Scheduled</option>
          <option value="expired">Expired</option>
        </select>
      </div>
    </div>
    <div class="table-container">
      <table class="data-table">
        <thead>
          <tr>
            <th><input type="checkbox" id="selectAll"></th>
            <th>Offer</th>
            <th>Type</th>
            <th>Discount</th>
            <th>Valid Until</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="checkbox" class="row-select"></td>
            <td>
              <div class="offer-info">
                <div>
                  <span class="offer-title">New Year Sale 2024</span>
                  <span class="offer-desc">Flat 50% off on all ethnic wear</span>
                </div>
              </div>
            </td>
            <td>
              <span class="offer-type">
                <i class="fas fa-percentage"></i>
                Percentage
              </span>
            </td>
            <td>
              <span class="discount-value">50%</span>
            </td>
            <td>
              <div>
                <div>Jan 31, 2024</div>
                <small class="text-muted">15 days left</small>
              </div>
            </td>
            <td><span class="status-badge status-completed">Active</span></td>
            <td>
              <div class="action-buttons">
                <button class="btn-icon" title="Edit Offer">
                  <i class="fas fa-edit"></i>
                </button>
                <button class="btn-icon" title="View Analytics">
                  <i class="fas fa-chart-bar"></i>
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
              <div class="offer-info">
                <div>
                  <span class="offer-title">Valentine's Special</span>
                  <span class="offer-desc">Buy 2 Get 1 Free on jewelry</span>
                </div>
              </div>
            </td>
            <td>
              <span class="offer-type">
                <i class="fas fa-gift"></i>
                BOGO
              </span>
            </td>
            <td>
              <span class="discount-value">Buy 2 Get 1</span>
            </td>
            <td>
              <div>
                <div>Feb 14, 2024</div>
                <small class="text-muted">Scheduled</small>
              </div>
            </td>
            <td><span class="status-badge status-pending">Scheduled</span></td>
            <td>
              <div class="action-buttons">
                <button class="btn-icon" title="Edit Offer">
                  <i class="fas fa-edit"></i>
                </button>
                <button class="btn-icon btn-icon--success" title="Activate Now">
                  <i class="fas fa-play"></i>
                </button>
                <button class="btn-icon btn-icon--danger" title="Delete">
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
        Showing 1-2 of 8 offers
      </div>
      <div class="pagination">
        <button class="pagination-btn" disabled>
          <i class="fas fa-chevron-left"></i>
        </button>
        <button class="pagination-btn active">1</button>
        <button class="pagination-btn">2</button>
        <button class="pagination-btn">
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  </div>
</div>

<!-- Create Offer Modal -->
<div class="modal" id="create-offer-modal">
  <div class="modal__panel">
    <div class="modal__header">
      <h3>Create New Offer</h3>
      <button class="modal__close-btn" data-modal-close>&times;</button>
    </div>
    <div class="modal__body">
      <form class="form" id="create-offer-form">
        <div class="form-grid">
          <div class="form-group" style="grid-column: 1 / -1;">
            <label class="form-label">Offer Title *</label>
            <input type="text" class="form-input" placeholder="e.g., Diwali Sale" required />
          </div>
          <div class="form-group">
            <label class="form-label">Offer Type</label>
            <select class="form-input">
              <option value="percentage">Percentage Discount</option>
              <option value="fixed">Fixed Amount Discount</option>
              <option value="bogo">Buy X Get Y</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Discount Value</label>
            <input type="text" class="form-input" placeholder="e.g., 50 or BOGO" />
          </div>
          <div class="form-group">
            <label class="form-label">Valid From</label>
            <input type="date" class="form-input" />
          </div>
          <div class="form-group">
            <label class="form-label">Valid Until</label>
            <input type="date" class="form-input" />
          </div>
        </div>
      </form>
    </div>
    <div class="modal__footer">
      <button class="btn btn--secondary" data-modal-close>Cancel</button>
      <button class="btn btn--primary" type="submit" form="create-offer-form">Save Offer</button>
    </div>
  </div>
</div>

<?php include __DIR__ . '/footer.php'; ?>
