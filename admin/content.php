<?php
// admin/content.php - Content Management
$page_title = 'Content Management';
$page_subtitle = 'Manage website content and media';
$breadcrumb_items = [
    ['title' => 'Admin'],
    ['title' => 'Content Management', 'active' => true]
];
$page_actions = '<button class="btn btn--primary"><i class="fas fa-plus"></i> Add Content</button>';

include __DIR__ . '/header.php';
?>

<div class="data-section">
  <div class="data-panel">
    <div class="panel-header">
      <h3>Website Content</h3>
      <div class="panel-actions">
        <div class="search-box">
          <i class="fas fa-search"></i>
          <input type="search" placeholder="Search content..." id="contentSearch">
        </div>
        <select class="status-filter">
          <option value="">All Types</option>
          <option value="page">Pages</option>
          <option value="blog">Blog Posts</option>
          <option value="media">Media</option>
        </select>
      </div>
    </div>
    
    <div class="tabs-container">
      <div class="tabs">
        <button class="tab active" data-tab="pages">
          <i class="fas fa-file-alt"></i>
          Pages
        </button>
        <button class="tab" data-tab="blog">
          <i class="fas fa-blog"></i>
          Blog Posts
        </button>
        <button class="tab" data-tab="media">
          <i class="fas fa-images"></i>
          Media Library
        </button>
      </div>
    </div>
    
    <div class="table-container">
      <table class="data-table">
        <thead>
          <tr>
            <th><input type="checkbox" id="selectAll"></th>
            <th>Content</th>
            <th>Type</th>
            <th>Status</th>
            <th>Last Modified</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="checkbox" class="row-select"></td>
            <td>
              <div class="content-info">
                <div>
                  <span class="content-title">About Us</span>
                  <span class="content-excerpt">Learn about Viaenterprise and our mission...</span>
                </div>
              </div>
            </td>
            <td>
              <span class="content-type">
                <i class="fas fa-file-alt"></i>
                Page
              </span>
            </td>
            <td><span class="status-badge status-completed">Published</span></td>
            <td>
              <div>
                <div>Jan 10, 2024</div>
                <small class="text-muted">by Admin</small>
              </div>
            </td>
            <td>
              <div class="action-buttons">
                <button class="btn-icon" title="Edit Content">
                  <i class="fas fa-edit"></i>
                </button>
                <button class="btn-icon" title="View Content">
                  <i class="fas fa-eye"></i>
                </button>
                <button class="btn-icon btn-icon--danger" title="Delete Content">
                  <i class="fas fa-trash"></i>
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td><input type="checkbox" class="row-select"></td>
            <td>
              <div class="content-info">
                <div>
                  <span class="content-title">Latest Fashion Trends 2024</span>
                  <span class="content-excerpt">Discover the hottest fashion trends for this year...</span>
                </div>
              </div>
            </td>
            <td>
              <span class="content-type">
                <i class="fas fa-blog"></i>
                Blog Post
              </span>
            </td>
            <td><span class="status-badge status-pending">Draft</span></td>
            <td>
              <div>
                <div>Jan 12, 2024</div>
                <small class="text-muted">by Admin</small>
              </div>
            </td>
            <td>
              <div class="action-buttons">
                <button class="btn-icon" title="Edit Content">
                  <i class="fas fa-edit"></i>
                </button>
                <button class="btn-icon" title="Preview Content">
                  <i class="fas fa-eye"></i>
                </button>
                <button class="btn-icon btn-icon--success" title="Publish">
                  <i class="fas fa-check"></i>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <div class="table-footer">
      <div class="table-info">
        Showing 1-2 of 15 content items
      </div>
      <div class="pagination">
        <button class="pagination-btn" disabled>
          <i class="fas fa-chevron-left"></i>
        </button>
        <button class="pagination-btn active">1</button>
        <button class="pagination-btn">2</button>
        <button class="pagination-btn">3</button>
        <button class="pagination-btn">
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  </div>
</div>

<?php include __DIR__ . '/footer.php'; ?>
