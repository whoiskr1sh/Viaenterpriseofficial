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
      <div class="table-container">
        <table class="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>101</td>
              <td>R. Patel</td>
              <td>r.patel@example.com</td>
              <td><span class="badge badge--success">Active</span></td>
              <td>
                <button class="btn">View Orders</button>
                <button class="btn btn--danger">Block</button>
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
