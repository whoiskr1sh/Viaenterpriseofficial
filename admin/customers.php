<?php
// admin/customers.php - Customers Management
$page_title = 'Customers';
$page_subtitle = 'Manage your customer base and relationships';
$breadcrumb_items = [
    ['title' => 'Admin'],
    ['title' => 'Customers', 'active' => true]
];
$page_actions = '<button class="btn btn--primary"><i class="fas fa-user-plus"></i> Add Customer</button>';

include __DIR__ . '/header.php';
?>

<div class="data-section">
  <div class="data-panel">
    <div class="panel-header">
      <h3>All Customers</h3>
      <div class="panel-actions">
        <div class="search-box">
          <i class="fas fa-search"></i>
          <input type="search" placeholder="Search customers..." id="customerSearch">
        </div>
        <select class="status-filter">
          <option value="">All Status</option>
          <option value="active">Active</option>
          <option value="blocked">Blocked</option>
          <option value="new">New</option>
        </select>
      </div>
    </div>
    <div class="table-container">
      <table class="data-table">
        <thead>
          <tr>
            <th><input type="checkbox" id="selectAll"></th>
            <th>Customer</th>
            <th>Contact</th>
            <th>Orders</th>
            <th>Total Spent</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="checkbox" class="row-select"></td>
            <td>
              <div class="customer-info">
                <img src="/assets/images/customer1.jpg" alt="Customer" class="customer-avatar" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMTYiIGZpbGw9IiM0RjQ2RTUiLz4KPHBhdGggZD0iTTE2IDhDMTMuNzkgOCAxMiA5Ljc5IDEyIDEyQzEyIDE0LjIxIDEzLjc5IDE2IDE2IDE2QzE4LjIxIDE2IDIwIDE0LjIxIDIwIDEyQzIwIDkuNzkgMTguMjEgOCAxNiA4WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTggMjRDOCAyMC42OSAxMC42OSAxOCAxNCAxOEgxOEMyMS4zMSAxOCAyNCAyMC42OSAyNCAyNFYyNkg4VjI0WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+'">
                <div>
                  <span class="customer-name">Priya Sharma</span>
                  <span class="customer-email">priya@example.com</span>
                </div>
              </div>
            </td>
            <td>
              <div>
                <div>+91 9876543210</div>
                <small class="text-muted">Mumbai, Maharashtra</small>
              </div>
            </td>
            <td>
              <span class="font-semibold">12</span>
              <small class="text-muted">orders</small>
            </td>
            <td class="amount">₹24,500</td>
            <td><span class="status-badge status-completed">Active</span></td>
            <td>
              <div class="action-buttons">
                <button class="btn-icon" title="View Customer">
                  <i class="fas fa-eye"></i>
                </button>
                <button class="btn-icon" title="Edit Customer">
                  <i class="fas fa-edit"></i>
                </button>
                <button class="btn-icon btn-icon--danger" title="Block Customer">
                  <i class="fas fa-ban"></i>
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td><input type="checkbox" class="row-select"></td>
            <td>
              <div class="customer-info">
                <img src="/assets/images/customer2.jpg" alt="Customer" class="customer-avatar" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMTYiIGZpbGw9IiNGNTk5OTkiLz4KPHBhdGggZD0iTTE2IDhDMTMuNzkgOCAxMiA5Ljc5IDEyIDEyQzEyIDE0LjIxIDEzLjc5IDE2IDE2IDE2QzE4LjIxIDE2IDIwIDE0LjIxIDIwIDEyQzIwIDkuNzkgMTguMjEgOCAxNiA4WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTggMjRDOCAyMC42OSAxMC42OSAxOCAxNCAxOEgxOEMyMS4zMSAxOCAyNCAyMC42OSAyNCAyNFYyNkg4VjI0WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+'">
                <div>
                  <span class="customer-name">Anjali Patel</span>
                  <span class="customer-email">anjali.patel@gmail.com</span>
                </div>
              </div>
            </td>
            <td>
              <div>
                <div>+91 8765432109</div>
                <small class="text-muted">Ahmedabad, Gujarat</small>
              </div>
            </td>
            <td>
              <span class="font-semibold">8</span>
              <small class="text-muted">orders</small>
            </td>
            <td class="amount">₹18,750</td>
            <td><span class="status-badge status-completed">Active</span></td>
            <td>
              <div class="action-buttons">
                <button class="btn-icon" title="View Customer">
                  <i class="fas fa-eye"></i>
                </button>
                <button class="btn-icon" title="Edit Customer">
                  <i class="fas fa-edit"></i>
                </button>
                <button class="btn-icon btn-icon--danger" title="Block Customer">
                  <i class="fas fa-ban"></i>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="table-footer">
      <div class="table-info">
        Showing 1-2 of 156 customers
      </div>
      <div class="pagination">
        <button class="pagination-btn" disabled>
          <i class="fas fa-chevron-left"></i>
        </button>
        <button class="pagination-btn active">1</button>
        <button class="pagination-btn">2</button>
        <button class="pagination-btn">3</button>
        <span class="pagination-dots">...</span>
        <button class="pagination-btn">26</button>
        <button class="pagination-btn">
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  </div>
</div>

<?php include __DIR__ . '/footer.php'; ?>
