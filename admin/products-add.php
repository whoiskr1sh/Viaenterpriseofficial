<?php
// admin/products-add.php - Add Product
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Add Product</title>
  <link rel="stylesheet" href="/assets/css/admin.css" />
</head>
<body>
  <?php include __DIR__ . '/sidebar.php'; ?>
  <main class="main">
    <h1>Add Product</h1>
    <div class="panel">
      <form class="form" enctype="multipart/form-data">
        <div class="grid-2">
          <label> Name
            <input type="text" placeholder="Product name" required />
          </label>
          <label> Category
            <input type="text" placeholder="Category" required />
          </label>
          <label> Subcategory
            <input type="text" placeholder="Subcategory" />
          </label>
          <label> Price (₹)
            <input type="number" placeholder="0" required />
          </label>
          <label> Discount (%)
            <input type="number" placeholder="0" />
          </label>
          <label> Stock
            <input type="number" placeholder="0" />
          </label>
          <label class="col-span-2"> Images
            <input type="file" multiple accept="image/*" />
          </label>
        </div>
        <div class="mt-12">
          <button class="btn btn--primary" type="submit">Save Product</button>
        </div>
      </form>
    </div>
  </main>
  <script src="/assets/js/admin.js"></script>
</body>
</html>
