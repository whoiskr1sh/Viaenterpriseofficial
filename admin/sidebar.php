<?php
// admin/sidebar.php - Reusable sidebar for Admin Panel
?>
<aside class="sidebar" id="sidebar">
  <div class="sidebar__brand">
    <button class="sidebar__toggle" id="sidebarToggle" aria-label="Toggle sidebar">☰</button>
    <span class="brand__logo">Viaenterprise</span>
    <span class="brand__tag">Admin</span>
  </div>

  <nav class="sidebar__nav">
    <ul>
      <li class="nav__section">Main</li>
      <li><a href="/admin/index.php" class="nav__link" data-icon="🏠">Dashboard</a></li>

      <li class="nav__section">Products</li>
      <li><a href="/admin/products-add.php" class="nav__link" data-icon="➕">Add Product</a></li>
      <li><a href="/admin/products-manage.php" class="nav__link" data-icon="📦">Manage Products</a></li>

      <li class="nav__section">Categories</li>
      <li><a href="/admin/categories-add.php" class="nav__link" data-icon="📂">Add Category</a></li>
      <li><a href="/admin/categories-manage.php" class="nav__link" data-icon="🗂">Manage Categories</a></li>

      <li class="nav__section">Orders</li>
      <li><a href="/admin/orders-new.php" class="nav__link" data-icon="🛒">New Orders</a></li>
      <li><a href="/admin/orders-completed.php" class="nav__link" data-icon="✅">Completed Orders</a></li>
      <li><a href="/admin/orders-cancelled.php" class="nav__link" data-icon="❌">Cancelled Orders</a></li>

      <li class="nav__section">Customers</li>
      <li><a href="/admin/customers.php" class="nav__link" data-icon="👥">View Customers</a></li>

      <li class="nav__section">Promotions</li>
      <li><a href="/admin/offers.php" class="nav__link" data-icon="🎁">Hampers & Gifts</a></li>

      <li class="nav__section">Content</li>
      <li><a href="/admin/content.php" class="nav__link" data-icon="📝">Content Management</a></li>

      <li class="nav__section">Reports</li>
      <li><a href="/admin/reports.php" class="nav__link" data-icon="📈">Reports & Analytics</a></li>

      <li class="nav__section">Settings</li>
      <li><a href="/admin/settings.php" class="nav__link" data-icon="⚙">Settings</a></li>
      <li><a href="/login.php" class="nav__link nav__link--danger" data-icon="🚪">Logout</a></li>
    </ul>
  </nav>
</aside>
