<?php
// admin/header.php - Reusable header for all admin pages
$page_title = $page_title ?? 'Admin Panel';
$page_subtitle = $page_subtitle ?? '';
$breadcrumb_items = $breadcrumb_items ?? [['title' => 'Admin'], ['title' => 'Dashboard', 'active' => true]];
?>
<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title><?php echo htmlspecialchars($page_title); ?> - Viaenterprise Admin</title>
  <link rel="stylesheet" href="../assets/css/admin.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
  <?php if (isset($additional_css)): ?>
    <?php foreach ($additional_css as $css): ?>
      <link rel="stylesheet" href="<?php echo htmlspecialchars($css); ?>" />
    <?php endforeach; ?>
  <?php endif; ?>
</head>
<body class="admin-body">
  <?php include __DIR__ . '/sidebar.php'; ?>

  <!-- Top Navigation Bar -->
  <nav class="top-navbar">
    <div class="navbar-left">
      <button class="sidebar-toggle-btn" id="sidebarToggle">
        <i class="fas fa-bars"></i>
      </button>
      <div class="breadcrumb">
        <?php foreach ($breadcrumb_items as $index => $item): ?>
          <?php if ($index > 0): ?>
            <i class="fas fa-chevron-right breadcrumb-separator"></i>
          <?php endif; ?>
          <span class="breadcrumb-item <?php echo isset($item['active']) && $item['active'] ? 'active' : ''; ?>">
            <?php echo htmlspecialchars($item['title']); ?>
          </span>
        <?php endforeach; ?>
      </div>
    </div>
    
    <div class="navbar-center">
      <div class="search-container">
        <i class="fas fa-search search-icon"></i>
        <input type="text" class="search-input" placeholder="Search products, orders, customers...">
        <div class="search-results" id="searchResults"></div>
      </div>
    </div>
    
    <div class="navbar-right">
      <button class="theme-toggle" id="themeToggle" title="Toggle Dark Mode">
        <i class="fas fa-moon"></i>
      </button>
      
      <div class="notification-dropdown">
        <button class="notification-btn" id="notificationBtn">
          <i class="fas fa-bell"></i>
          <span class="notification-badge">3</span>
        </button>
        <div class="notification-menu" id="notificationMenu">
          <div class="notification-header">
            <h4>Notifications</h4>
            <button class="mark-all-read">Mark all read</button>
          </div>
          <div class="notification-list">
            <div class="notification-item unread">
              <div class="notification-icon">
                <i class="fas fa-shopping-cart"></i>
              </div>
              <div class="notification-content">
                <p>New order #1234 received</p>
                <span class="notification-time">2 minutes ago</span>
              </div>
            </div>
            <div class="notification-item unread">
              <div class="notification-icon">
                <i class="fas fa-exclamation-triangle"></i>
              </div>
              <div class="notification-content">
                <p>Low stock alert: Silk Saree</p>
                <span class="notification-time">1 hour ago</span>
              </div>
            </div>
          </div>
          <div class="notification-footer">
            <a href="../admin/notifications.php">View all notifications</a>
          </div>
        </div>
      </div>
      
      <div class="profile-dropdown">
        <button class="profile-btn" id="profileBtn">
          <img src="../assets/images/admin-avatar.jpg" alt="Admin" class="profile-avatar" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMTYiIGZpbGw9IiM0RjQ2RTUiLz4KPHBhdGggZD0iTTE2IDhDMTMuNzkgOCAxMiA5Ljc5IDEyIDEyQzEyIDE0LjIxIDEzLjc5IDE2IDE2IDE2QzE4LjIxIDE2IDIwIDE0LjIxIDIwIDEyQzIwIDkuNzkgMTguMjEgOCAxNiA4WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTggMjRDOCAyMC42OSAxMC42OSAxOCAxNCAxOEgxOEMyMS4zMSAxOCAyNCAyMC42OSAyNCAyNFYyNkg4VjI0WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+'">
          <span class="profile-name">Admin</span>
          <i class="fas fa-chevron-down"></i>
        </button>
        <div class="profile-menu" id="profileMenu">
          <div class="profile-info">
            <img src="../assets/images/admin-avatar.jpg" alt="Admin" class="profile-menu-avatar" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMjAiIGZpbGw9IiM0RjQ2RTUiLz4KPHBhdGggZD0iTTIwIDEwQzE3LjI0IDEwIDE1IDE0LjI0IDE1IDE1QzE1IDE3Ljc2IDE3LjI0IDIwIDIwIDIwQzIyLjc2IDIwIDI1IDE3Ljc2IDI1IDE1QzI1IDEyLjI0IDIyLjc2IDEwIDIwIDEwWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTEwIDMwQzEwIDI1Ljg2IDEzLjg2IDIyLjUgMTguNSAyMi41SDIxLjVDMjYuMTQgMjIuNSAzMCAyNS44NiAzMCAzMFYzMkgxMFYzMFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPg=='">
            <div>
              <h4>Administrator</h4>
              <p>admin@viaenterprise.com</p>
            </div>
          </div>
          <div class="profile-menu-divider"></div>
          <a href="../admin/profile.php" class="profile-menu-item">
            <i class="fas fa-user"></i>
            <span>My Profile</span>
          </a>
          <a href="../admin/settings.php" class="profile-menu-item">
            <i class="fas fa-cog"></i>
            <span>Settings</span>
          </a>
          <div class="profile-menu-divider"></div>
          <a href="../login.php" class="profile-menu-item logout">
            <i class="fas fa-sign-out-alt"></i>
            <span>Logout</span>
          </a>
        </div>
      </div>
    </div>
  </nav>

  <main class="main" id="main">
    <div class="main-content">
      <?php if (!empty($page_title) || !empty($page_actions)): ?>
      <div class="page-header">
        <div class="page-title">
          <h1><?php echo htmlspecialchars($page_title); ?></h1>
          <?php if (!empty($page_subtitle)): ?>
            <p class="page-subtitle"><?php echo htmlspecialchars($page_subtitle); ?></p>
          <?php endif; ?>
        </div>
        <?php if (!empty($page_actions)): ?>
        <div class="page-actions">
          <?php echo $page_actions; ?>
        </div>
        <?php endif; ?>
      </div>
      <?php endif; ?>
