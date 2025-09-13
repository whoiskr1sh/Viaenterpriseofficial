<?php
// admin/categories-manage.php - Manage Categories
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Manage Categories</title>
  <link rel="stylesheet" href="/assets/css/admin.css" />
</head>
<body>
  <?php include __DIR__ . '/sidebar.php'; ?>
  <main class="main">
    <h1>Manage Categories</h1>
    <div class="panel">
      <div class="table-container">
        <table class="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Parent</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Sarees</td>
              <td>Ethnic Wear</td>
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
