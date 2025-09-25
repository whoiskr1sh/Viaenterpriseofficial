<?php
// admin/orders-cancelled.php - Cancelled Orders
$page_title = 'Cancelled Orders';
$page_subtitle = 'Manage cancelled and refunded orders';
$breadcrumb_items = [
    ['title' => 'Admin'],
    ['title' => 'Orders'],
    ['title' => 'Cancelled Orders', 'active' => true]
];
$page_actions = '<button class="btn btn--secondary"><i class="fas fa-chart-bar"></i> View Report</button>';

include __DIR__ . '/header.php';
?>

<div class="data-section">
  <div class="data-panel">
    <div class="panel-header">
      <h3>Cancelled Orders</h3>
      <div class="panel-actions">
        <div class="search-box">
          <i class="fas fa-search"></i>
          <input type="search" placeholder="Search orders..." id="orderSearch">
        </div>
        <select class="status-filter">
          <option value="">All Reasons</option>
          <option value="customer">Customer Request</option>
          <option value="stock">Out of Stock</option>
          <option value="payment">Payment Failed</option>
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
            <th>Cancelled Date</th>
            <th>Amount</th>
            <th>Reason</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="checkbox" class="row-select"></td>
            <td>
              <div>
                <span class="order-id">#ORD-999</span>
                <small class="text-muted">1 item</small>
              </div>
            </td>
            <td>
              <div class="customer-info">
                <img src="../assets/images/customer3.jpg" alt="Customer" class="customer-avatar" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMTYiIGZpbGw9IiMzYjgyZjYiLz4KPHBhdGggZD0iTTE2IDhDMTMuNzkgOCAxMiA5Ljc5IDEyIDEyQzEyIDE0LjIxIDEzLjc5IDE2IDE2IDE2QzE4LjIxIDE2IDIwIDE0LjIxIDIwIDEyQzIwIDkuNzkgMTguMjEgOCAxNiA4WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTggMjRDOCAyMC42OSAxMC42OSAxOCAxNCAxOEgxOEMyMS4zMSAxOCAyNCAyMC42OSAyNCAyNFYyNkg4VjI0WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+'">
                <div>
                  <span class="customer-name">Rahul Kumar</span>
                  <span class="customer-email">rahul@example.com</span>
                </div>
              </div>
            </td>
            <td>
              <div>
                <div>Jan 13, 2024</div>
                <small class="text-muted">4 days ago</small>
              </div>
            </td>
            <td class="amount">₹1,999</td>
            <td><span class="status-badge status-cancelled">Customer Request</span></td>
            <td>
              <div class="action-buttons">
                <button class="btn-icon" title="View Order">
                  <i class="fas fa-eye"></i>
                </button>
                <button class="btn-icon btn-icon--warning" title="Process Refund">
                  <i class="fas fa-undo"></i>
                </button>
                <button class="btn-icon" title="Contact Customer">
                  <i class="fas fa-phone"></i>
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
