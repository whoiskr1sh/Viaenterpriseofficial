<?php
// admin/customers.php - Customers
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Customers</title>
  <link rel="stylesheet" href="/assets/css/admin.css" />
</head>
<body>
  <?php include __DIR__ . '/sidebar.php'; ?>
  <main class="main">
    <h1>Customers</h1>
    <div class="panel">
      <div style="overflow:auto;">
        <table style="width:100%;border-collapse:collapse;">
          <thead>
            <tr style="text-align:left;border-bottom:1px solid var(--border);">
              <th style="padding:10px;">ID</th>
              <th style="padding:10px;">Name</th>
              <th style="padding:10px;">Email</th>
              <th style="padding:10px;">Status</th>
              <th style="padding:10px;">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding:10px;">101</td>
              <td style="padding:10px;">R. Patel</td>
              <td style="padding:10px;">r.patel@example.com</td>
              <td style="padding:10px;">Active</td>
              <td style="padding:10px;">
                <button class="btn">View Orders</button>
                <button class="btn" style="border-color:#fecaca;color:#b91c1c;">Block</button>
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
