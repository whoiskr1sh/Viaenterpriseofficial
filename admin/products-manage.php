<?php
// admin/products-manage.php - Manage Products
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Manage Products</title>
  <link rel="stylesheet" href="/assets/css/admin.css" />
</head>
<body>
  <?php include __DIR__ . '/sidebar.php'; ?>
  <main class="main">
    <h1>Manage Products</h1>
    <div class="panel">
      <div style="display:flex;gap:8px;margin-bottom:12px;">
        <input class="input" type="search" placeholder="Search products..." style="flex:1;padding:10px;border:1px solid var(--border);border-radius:8px;" />
        <button class="btn">Search</button>
      </div>
      <div style="overflow:auto;">
        <table style="width:100%;border-collapse:collapse;">
          <thead>
            <tr style="text-align:left;border-bottom:1px solid var(--border);">
              <th style="padding:10px;">ID</th>
              <th style="padding:10px;">Name</th>
              <th style="padding:10px;">Category</th>
              <th style="padding:10px;">Price</th>
              <th style="padding:10px;">Stock</th>
              <th style="padding:10px;">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding:10px;">1</td>
              <td style="padding:10px;">Chiffon Saree</td>
              <td style="padding:10px;">Sarees</td>
              <td style="padding:10px;">₹1999</td>
              <td style="padding:10px;">54</td>
              <td style="padding:10px;">
                <button class="btn">Edit</button>
                <button class="btn" style="border-color:#fecaca;color:#b91c1c;">Delete</button>
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
