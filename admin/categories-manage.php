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
      <div style="overflow:auto;">
        <table style="width:100%;border-collapse:collapse;">
          <thead>
            <tr style="text-align:left;border-bottom:1px solid var(--border);">
              <th style="padding:10px;">ID</th>
              <th style="padding:10px;">Name</th>
              <th style="padding:10px;">Parent</th>
              <th style="padding:10px;">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding:10px;">1</td>
              <td style="padding:10px;">Sarees</td>
              <td style="padding:10px;">Ethnic Wear</td>
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
