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
      <div class="toolbar">
        <input class="input" type="search" placeholder="Search products..." />
        <button class="btn">Search</button>
      </div>
      <div class="table-container">
        <table class="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Chiffon Saree</td>
              <td>Sarees</td>
              <td>₹1999</td>
              <td>54</td>
              <td>
                <button class="btn">Edit</button>
                <button class="btn btn--danger">Delete</button>
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
