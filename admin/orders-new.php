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
      <div style="overflow:auto;">
        <table style="width:100%;border-collapse:collapse;">
          <thead>
            <tr style="text-align:left;border-bottom:1px solid var(--border);">
              <th style="padding:10px;">Order #</th>
              <th style="padding:10px;">Customer</th>
              <th style="padding:10px;">Total</th>
              <th style="padding:10px;">Status</th>
              <th style="padding:10px;">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding:10px;">INV-1001</td>
              <td style="padding:10px;">A. Sharma</td>
              <td style="padding:10px;">₹3,999</td>
              <td style="padding:10px;">Pending</td>
              <td style="padding:10px;">
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
