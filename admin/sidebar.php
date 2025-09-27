<?php
// admin/sidebar.php - Modern Reusable sidebar for Admin Panel
?>
<aside class="sidebar" id="sidebar">
  <div class="sidebar__brand">
    <div class="brand__content">
      <div class="brand__logo">
        <i class="fas fa-gem"></i>
        <span class="brand__text">Viaenterprise</span>
      </div>
      <span class="brand__tag">Admin Panel</span>
    </div>
    <button class="sidebar__toggle" id="sidebarToggleInternal" aria-label="Toggle sidebar">
      <i class="fas fa-bars"></i>
    </button>
  </div>

  <nav class="sidebar__nav">
    <ul class="nav__list">
      <!-- Main Section -->
      <li class="nav__item">
        <a href="/admin/index.php" class="nav__link" data-page="dashboard">
          <i class="fas fa-tachometer-alt nav__icon"></i>
          <span class="nav__text">Dashboard</span>
        </a>
      </li>

      <!-- Products Section -->
      <li class="nav__item nav__item--collapsible">
        <button class="nav__link nav__toggle" data-target="products-menu">
          <i class="fas fa-box nav__icon"></i>
          <span class="nav__text">Products</span>
          <i class="fas fa-chevron-down nav__arrow"></i>
        </button>
        <ul class="nav__submenu" id="products-menu">
          <li><a href="/admin/products-add.php" class="nav__sublink">
            <i class="fas fa-plus nav__subicon"></i>
            <span class="nav__subtext">Add Product</span>
          </a></li>
          <li><a href="/admin/products-manage.php" class="nav__sublink">
            <i class="fas fa-list nav__subicon"></i>
            <span class="nav__subtext">Manage Products</span>
          </a></li>
          <li><a href="/admin/categories-add.php" class="nav__sublink">
            <i class="fas fa-folder-plus nav__subicon"></i>
            <span class="nav__subtext">Add Category</span>
          </a></li>
          <li><a href="/admin/categories-manage.php" class="nav__sublink">
            <i class="fas fa-folder-open nav__subicon"></i>
            <span class="nav__subtext">Manage Categories</span>
          </a></li>
        </ul>
      </li>

      <!-- Orders Section -->
      <li class="nav__item nav__item--collapsible">
        <button class="nav__link nav__toggle" data-target="orders-menu">
          <i class="fas fa-shopping-cart nav__icon"></i>
          <span class="nav__text">Orders</span>
          <span class="nav__badge">12</span>
          <i class="fas fa-chevron-down nav__arrow"></i>
        </button>
        <ul class="nav__submenu" id="orders-menu">
          <li><a href="/admin/orders-new.php" class="nav__sublink">
            <i class="fas fa-clock nav__subicon"></i>
            <span class="nav__subtext">New Orders</span>
            <span class="nav__subbadge">5</span>
          </a></li>
          <li><a href="/admin/orders-completed.php" class="nav__sublink">
            <i class="fas fa-check-circle nav__subicon"></i>
            <span class="nav__subtext">Completed</span>
          </a></li>
          <li><a href="/admin/orders-cancelled.php" class="nav__sublink">
            <i class="fas fa-times-circle nav__subicon"></i>
            <span class="nav__subtext">Cancelled</span>
          </a></li>
        </ul>
      </li>

      <!-- Customers Section -->
      <li class="nav__item">
        <a href="/admin/customers.php" class="nav__link" data-page="customers">
          <i class="fas fa-users nav__icon"></i>
          <span class="nav__text">Customers</span>
        </a>
      </li>

      <!-- Marketing Section -->
      <li class="nav__item nav__item--collapsible">
        <button class="nav__link nav__toggle" data-target="marketing-menu">
          <i class="fas fa-bullhorn nav__icon"></i>
          <span class="nav__text">Marketing</span>
          <i class="fas fa-chevron-down nav__arrow"></i>
        </button>
        <ul class="nav__submenu" id="marketing-menu">
          <li><a href="/admin/offers.php" class="nav__sublink">
            <i class="fas fa-gift nav__subicon"></i>
            <span class="nav__subtext">Offers & Discounts</span>
          </a></li>
          <li><a href="/admin/coupons.php" class="nav__sublink">
            <i class="fas fa-ticket-alt nav__subicon"></i>
            <span class="nav__subtext">Coupons</span>
          </a></li>
          <li><a href="/admin/newsletters.php" class="nav__sublink">
            <i class="fas fa-envelope nav__subicon"></i>
            <span class="nav__subtext">Newsletters</span>
          </a></li>
        </ul>
      </li>

      <!-- Content Section -->
      <li class="nav__item">
        <a href="/admin/content.php" class="nav__link" data-page="content">
          <i class="fas fa-edit nav__icon"></i>
          <span class="nav__text">Content</span>
        </a>
      </li>

      <!-- Reports Section -->
      <li class="nav__item">
        <a href="/admin/reports.php" class="nav__link" data-page="reports">
          <i class="fas fa-chart-line nav__icon"></i>
          <span class="nav__text">Analytics</span>
        </a>
      </li>

      <!-- Divider -->
      <li class="nav__divider"></li>

      <!-- Settings Section -->
      <li class="nav__item">
        <a href="/admin/settings.php" class="nav__link" data-page="settings">
          <i class="fas fa-cog nav__icon"></i>
          <span class="nav__text">Settings</span>
        </a>
      </li>

      <!-- Logout -->
      <li class="nav__item">
        <a href="/login.php" class="nav__link nav__link--danger" data-page="logout">
          <i class="fas fa-sign-out-alt nav__icon"></i>
          <span class="nav__text">Logout</span>
        </a>
      </li>
    </ul>
  </nav>

  <!-- Sidebar Footer -->
  <div class="sidebar__footer">
    <div class="sidebar__user">
      <img src="../assets/images/admin-avatar.jpg" alt="Admin" class="user__avatar" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMTYiIGZpbGw9IiM0RjQ2RTUiLz4KPHBhdGggZD0iTTE2IDhDMTMuNzkgOCAxMiA5Ljc5IDEyIDEyQzEyIDE0LjIxIDEzLjc5IDE2IDE2IDE2QzE4LjIxIDE2IDIwIDE0LjIxIDIwIDEyQzIwIDkuNzkgMTguMjEgOCAxNiA4WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTggMjRDOCAyMC42OSAxMC42OSAxOCAxNCAxOEgxOEMyMS4zMSAxOCAyNCAyMC42OSAyNCAyNFYyNkg4VjI0WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+'">
      <div class="user__info">
        <span class="user__name">Administrator</span>
        <span class="user__role">Super Admin</span>
      </div>
    </div>
  </div>
</aside>
