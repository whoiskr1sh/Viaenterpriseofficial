<?php
// admin/orders-completed.php - Completed Orders
$page_title = 'Completed Orders';
$page_subtitle = 'View successfully delivered orders';
$breadcrumb_items = [
    ['title' => 'Admin'],
    ['title' => 'Orders'],
    ['title' => 'Completed Orders', 'active' => true]
];
$page_actions = '<button class="btn btn--secondary"><i class="fas fa-download"></i> Export Report</button>';

include __DIR__ . '/header.php';
?>

<div class="data-section">
  <div class="data-panel">
    <div class="panel-header">
      <h3>Completed Orders</h3>
      <div class="panel-actions">
        <div class="search-box">
          <i class="fas fa-search"></i>
          <input type="search" placeholder="Search orders..." id="orderSearch">
        </div>
        <select class="status-filter">
          <option value="">All Periods</option>
          <option value="today">Today</option>
          <option value="week">This Week</option>
          <option value="month">This Month</option>
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
            <th>Completed Date</th>
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
                <span class="order-id">#ORD-1000</span>
                <small class="text-muted">2 items</small>
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
                <div>Jan 14, 2024</div>
                <small class="text-muted">3 days ago</small>
              </div>
            </td>
            <td class="amount">₹4,999</td>
            <td><span class="status-badge status-completed">Delivered</span></td>
            <td>
              <div class="action-buttons">
                <button class="btn-icon" title="View Order">
                  <i class="fas fa-eye"></i>
                </button>
                <button class="btn-icon" title="Download Invoice">
                  <i class="fas fa-download"></i>
                </button>
                <button class="btn-icon" title="Reorder">
                  <i class="fas fa-redo"></i>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

<?php include __DIR__ . '/footer.php'; ?>
