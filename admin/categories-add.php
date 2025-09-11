<?php
// admin/categories-add.php - Add Category
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Add Category</title>
  <link rel="stylesheet" href="/assets/css/admin.css" />
</head>
<body>
  <?php include __DIR__ . '/sidebar.php'; ?>
  <main class="main">
    <h1>Add Category</h1>
    <div class="panel">
      <form class="form">
        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:12px;">
          <label> Category Name
            <input type="text" placeholder="e.g., Ethnic Wear" required />
          </label>
          <label> Parent Category
            <input type="text" placeholder="Optional" />
          </label>
        </div>
        <div style="margin-top:12px;">
          <button class="btn btn--primary" type="submit">Save Category</button>
        </div>
      </form>
    </div>
  </main>
  <script src="/assets/js/admin.js"></script>
</body>
</html>
