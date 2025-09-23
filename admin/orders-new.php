<?php
// admin/orders-new.php - New Orders
$page_title = 'New Orders';
$page_subtitle = 'Process pending customer orders';
$breadcrumb_items = [
    ['title' => 'Admin'],
    ['title' => 'Orders'],
    ['title' => 'New Orders', 'active' => true]
];
$page_actions = '<button class="btn btn--primary"><i class="fas fa-plus"></i> Create Order</button>';

include __DIR__ . '/header.php';
?>

<div class="data-section">
  <div class="data-panel">
    <div class="panel-header">
      <h3>Pending Orders</h3>
      <div class="panel-actions">
        <div class="search-box">
          <i class="fas fa-search"></i>
          <input type="search" placeholder="Search orders..." id="orderSearch">
        </div>
        <select class="status-filter">
          <option value="">All Status</option>
          <option value="pending">Pending</option>
          <option value="processing">Processing</option>
          <option value="confirmed">Confirmed</option>
        </select>
      </div>
    </div>
    <div class="table-container">
      <table class="data-table">
        <thead>
          <tr>
            <th><input type="checkbox" id="selectAll"></th>
            <th>Order</th>
            <th>Customer</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="checkbox" class="row-select"></td>
            <td>
              <div>
                <span class="order-id">#ORD-1001</span>
                <small class="text-muted">3 items</small>
              </div>
            </td>
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
                <div>Jan 15, 2024</div>
                <small class="text-muted">2 hours ago</small>
              </div>
            </td>
            <td class="amount">₹2,999</td>
            <td><span class="status-badge status-pending">Pending</span></td>
            <td>
              <div class="action-buttons">
                <button class="btn-icon" title="View Order">
                  <i class="fas fa-eye"></i>
                </button>
                <button class="btn-icon btn-icon--success" title="Process Order">
                  <i class="fas fa-check"></i>
                </button>
                <button class="btn-icon btn-icon--danger" title="Cancel Order">
                  <i class="fas fa-times"></i>
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td><input type="checkbox" class="row-select"></td>
            <td>
              <div>
                <span class="order-id">#ORD-1002</span>
                <small class="text-muted">1 item</small>
              </div>
            </td>
            <td>
              <div class="customer-info">
                <img src="/assets/images/customer2.jpg" alt="Customer" class="customer-avatar" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMTYiIGZpbGw9IiNGNTk5OTkiLz4KPHBhdGggZD0iTTE2IDhDMTMuNzkgOCAxMiA5Ljc5IDEyIDEyQzEyIDE0LjIxIDEzLjc5IDE2IDE2IDE2QzE4LjIxIDE2IDIwIDE0LjIxIDIwIDEyQzIwIDkuNzkgMTguMjEgOCAxNiA4WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTggMjRDOCAyMC42OSAxMC42OSAxOCAxNCAxOEgxOEMyMS4zMSAxOCAyNCAyMC42OSAyNCAyNFYyNkg4VjI0WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+'">
                <div>
                  <span class="customer-name">Anjali Patel</span>
                  <span class="customer-email">anjali@gmail.com</span>
                </div>
              </div>
            </td>
            <td>
              <div>
                <div>Jan 15, 2024</div>
                <small class="text-muted">5 hours ago</small>
              </div>
            </td>
            <td class="amount">₹4,999</td>
            <td><span class="status-badge status-processing">Processing</span></td>
            <td>
              <div class="action-buttons">
                <button class="btn-icon" title="View Order">
                  <i class="fas fa-eye"></i>
                </button>
                <button class="btn-icon btn-icon--success" title="Complete Order">
                  <i class="fas fa-check"></i>
                </button>
                <button class="btn-icon btn-icon--danger" title="Cancel Order">
                  <i class="fas fa-times"></i>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="table-footer">
      <div class="table-info">
        Showing 1-2 of 12 orders
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

<?php include __DIR__ . '/footer.php'; ?>
