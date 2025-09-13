<?php
// admin/orders-new.php - New Orders
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Orders</title>
  <link rel="stylesheet" href="/assets/css/admin.css" />
</head>
<body>
  <?php include __DIR__ . '/sidebar.php'; ?>
  <main class="main">
    <h1>New Orders</h1>
    <div class="panel">
      <div class="table-container">
        <table class="table">
          <thead>
            <tr>
              <th>Order #</th>
              <th>Customer</th>
              <th>Total</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>INV-1001</td>
              <td>A. Sharma</td>
              <td>₹3,999</td>
              <td><span class="badge badge--warning">Pending</span></td>
              <td>
                <button class="btn btn--primary">Mark Shipped</button>
                <button class="btn">View</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
  <script src="/assets/js/admin.js"></script>
</body>
</html>
