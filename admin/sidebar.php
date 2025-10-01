<?php
// admin/sidebar.php - Modern Professional Sidebar for Admin Panel
?>
<aside class="sidebar" id="sidebar">
  <!-- Brand Header -->
  <div class="sidebar__header">
    <div class="brand">
      <div class="brand__logo">
        <div class="logo-icon">
          <i class="fas fa-store"></i>
        </div>
        <div class="brand__content">
          <h3 class="brand__title">Viaenterprise</h3>
          <span class="brand__subtitle">Admin Dashboard</span>
        </div>
      </div>
      <button class="sidebar__collapse" id="sidebarToggleInternal" aria-label="Toggle sidebar">
        <i class="fas fa-angle-left"></i>
      </button>
    </div>
  </div>

  <!-- Navigation Menu -->
  <nav class="sidebar__navigation">
    <div class="nav-section">
      <h4 class="nav-section__title">Main</h4>
      <ul class="nav-menu">
        <li class="nav-item">
          <a href="../admin/index.php" class="nav-link active" data-page="dashboard">
            <div class="nav-link__icon">
              <i class="fas fa-home"></i>
            </div>
            <span class="nav-link__text">Dashboard</span>
            <div class="nav-link__indicator"></div>
          </a>
        </li>
      </ul>
    </div>

    <div class="nav-section">
      <h4 class="nav-section__title">E-Commerce</h4>
      <ul class="nav-menu">
        <!-- Products -->
        <li class="nav-item has-submenu">
          <button class="nav-link nav__toggle" data-target="products-submenu">
            <div class="nav-link__icon">
              <i class="fas fa-box"></i>
            </div>
            <span class="nav-link__text">Products</span>
            <div class="nav-link__arrow">
              <i class="fas fa-chevron-right"></i>
            </div>
          </button>
          <ul class="nav-submenu" id="products-submenu">
            <li><a href="../admin/products-add.php" class="nav-sublink">
              <i class="fas fa-plus"></i>
              <span>Add Product</span>
            </a></li>
            <li><a href="../admin/products-manage.php" class="nav-sublink">
              <i class="fas fa-list"></i>
              <span>All Products</span>
            </a></li>
            <li><a href="../admin/categories-add.php" class="nav-sublink">
              <i class="fas fa-folder-plus"></i>
              <span>Add Category</span>
            </a></li>
            <li><a href="../admin/categories-manage.php" class="nav-sublink">
              <i class="fas fa-folder-open"></i>
              <span>Categories</span>
            </a></li>
          </ul>
        </li>

        <!-- Orders -->
        <li class="nav-item has-submenu">
          <button class="nav-link nav__toggle" data-target="orders-submenu">
            <div class="nav-link__icon">
              <i class="fas fa-shopping-cart"></i>
            </div>
            <span class="nav-link__text">Orders</span>
            <div class="nav-link__badge">12</div>
            <div class="nav-link__arrow">
              <i class="fas fa-chevron-right"></i>
            </div>
          </button>
          <ul class="nav-submenu" id="orders-submenu">
            <li><a href="../admin/orders-new.php" class="nav-sublink">
              <i class="fas fa-clock"></i>
              <span>New Orders</span>
              <div class="submenu-badge">5</div>
            </a></li>
            <li><a href="../admin/orders-processing.php" class="nav-sublink">
              <i class="fas fa-cog"></i>
              <span>Processing</span>
            </a></li>
            <li><a href="../admin/orders-completed.php" class="nav-sublink">
              <i class="fas fa-check-circle"></i>
              <span>Completed</span>
            </a></li>
            <li><a href="../admin/orders-cancelled.php" class="nav-sublink">
              <i class="fas fa-times-circle"></i>
              <span>Cancelled</span>
            </a></li>
          </ul>
        </li>

        <!-- Customers -->
        <li class="nav-item">
          <a href="../admin/customers.php" class="nav-link" data-page="customers">
            <div class="nav-link__icon">
              <i class="fas fa-users"></i>
            </div>
            <span class="nav-link__text">Customers</span>
          </a>
        </li>
      </ul>
    </div>

    <div class="nav-section">
      <h4 class="nav-section__title">Marketing</h4>
      <ul class="nav-menu">
        <!-- Promotions -->
        <li class="nav-item has-submenu">
          <button class="nav-link nav__toggle" data-target="marketing-submenu">
            <div class="nav-link__icon">
              <i class="fas fa-bullhorn"></i>
            </div>
            <span class="nav-link__text">Promotions</span>
            <div class="nav-link__arrow">
              <i class="fas fa-chevron-right"></i>
            </div>
          </button>
          <ul class="nav-submenu" id="marketing-submenu">
            <li><a href="../admin/offers.php" class="nav-sublink">
              <i class="fas fa-gift"></i>
              <span>Offers & Discounts</span>
            </a></li>
            <li><a href="../admin/coupons.php" class="nav-sublink">
              <i class="fas fa-ticket-alt"></i>
              <span>Coupons</span>
            </a></li>
            <li><a href="../admin/newsletters.php" class="nav-sublink">
              <i class="fas fa-envelope"></i>
              <span>Newsletters</span>
            </a></li>
          </ul>
        </li>

        <!-- Analytics -->
        <li class="nav-item">
          <a href="../admin/reports.php" class="nav-link" data-page="reports">
            <div class="nav-link__icon">
              <i class="fas fa-chart-line"></i>
            </div>
            <span class="nav-link__text">Analytics</span>
          </a>
        </li>

        <!-- Content -->
        <li class="nav-item">
          <a href="../admin/content.php" class="nav-link" data-page="content">
            <div class="nav-link__icon">
              <i class="fas fa-edit"></i>
            </div>
            <span class="nav-link__text">Content</span>
          </a>
        </li>
      </ul>
    </div>

    <div class="nav-section">
      <h4 class="nav-section__title">System</h4>
      <ul class="nav-menu">
        <li class="nav-item">
          <a href="../admin/settings.php" class="nav-link" data-page="settings">
            <div class="nav-link__icon">
              <i class="fas fa-cog"></i>
            </div>
            <span class="nav-link__text">Settings</span>
          </a>
        </li>
      </ul>
    </div>
  </nav>

  <!-- Sidebar Footer -->
  <div class="sidebar__footer">
    <div class="user-profile">
      <div class="user-profile__avatar">
        <img src="../assets/images/admin-avatar.jpg" alt="Admin Avatar" class="avatar-image">
        <div class="avatar-status online"></div>
      </div>
      <div class="user-profile__info">
        <h5 class="user-name">Administrator</h5>
        <span class="user-role">Super Admin</span>
      </div>
      <div class="user-profile__menu">
        <button class="profile-menu-btn" aria-label="User menu">
          <i class="fas fa-ellipsis-v"></i>
        </button>
      </div>
    </div>
    
    <!-- Quick Actions -->
    <div class="sidebar__actions">
      <a href="/login.php" class="action-btn logout-btn">
        <i class="fas fa-sign-out-alt"></i>
        <span>Logout</span>
      </a>
    </div>
  </div>
</aside>
