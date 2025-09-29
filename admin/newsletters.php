<?php
// admin/newsletters.php - Newsletter Management
$page_title = 'Newsletters';
$page_subtitle = 'Manage email campaigns and subscribers';
$breadcrumb_items = [
    ['title' => 'Admin'],
    ['title' => 'Marketing'],
    ['title' => 'Newsletters', 'active' => true]
];
$page_actions = '<button class="btn btn--primary" data-modal-target="#create-campaign-modal"><i class="fas fa-plus"></i> Create Campaign</button>';

include __DIR__ . '/header.php';
?>

<div class="data-section">
  <!-- Newsletter Stats -->
  <div class="analytics-grid" style="margin-bottom: 2rem;">
    <div class="analytics-card">
      <div class="analytics-icon">
        <i class="fas fa-users"></i>
      </div>
      <div class="analytics-content">
        <h3>Total Subscribers</h3>
        <div class="analytics-value">2,456</div>
        <div class="analytics-change positive">
          <i class="fas fa-arrow-up"></i>
          <span>+12.3%</span>
        </div>
      </div>
    </div>
    
    <div class="analytics-card">
      <div class="analytics-icon">
        <i class="fas fa-envelope-open"></i>
      </div>
      <div class="analytics-content">
        <h3>Open Rate</h3>
        <div class="analytics-value">24.5%</div>
        <div class="analytics-change positive">
          <i class="fas fa-arrow-up"></i>
          <span>+3.2%</span>
        </div>
      </div>
    </div>
    
    <div class="analytics-card">
      <div class="analytics-icon">
        <i class="fas fa-mouse-pointer"></i>
      </div>
      <div class="analytics-content">
        <h3>Click Rate</h3>
        <div class="analytics-value">4.8%</div>
        <div class="analytics-change positive">
          <i class="fas fa-arrow-up"></i>
          <span>+1.1%</span>
        </div>
      </div>
    </div>
    
    <div class="analytics-card">
      <div class="analytics-icon">
        <i class="fas fa-paper-plane"></i>
      </div>
      <div class="analytics-content">
        <h3>Campaigns Sent</h3>
        <div class="analytics-value">18</div>
        <div class="analytics-change neutral">
          <span>This month</span>
        </div>
      </div>
    </div>
  </div>

  <div class="data-panel">
    <div class="tabs-container">
      <div class="tabs">
        <button class="tab active" data-tab="campaigns">
          <i class="fas fa-paper-plane"></i>
          Campaigns
        </button>
        <button class="tab" data-tab="subscribers">
          <i class="fas fa-users"></i>
          Subscribers
        </button>
        <button class="tab" data-tab="templates">
          <i class="fas fa-file-alt"></i>
          Templates
        </button>
      </div>
    </div>
    
    <div class="tab-content active" id="campaigns">
      <div class="panel-header">
        <h3>Email Campaigns</h3>
        <div class="panel-actions">
          <div class="search-box">
            <i class="fas fa-search"></i>
            <input type="search" placeholder="Search campaigns..." id="campaignSearch">
          </div>
          <select class="status-filter">
            <option value="">All Status</option>
            <option value="sent">Sent</option>
            <option value="draft">Draft</option>
            <option value="scheduled">Scheduled</option>
          </select>
        </div>
      </div>
      <div class="table-container">
        <table class="data-table">
          <thead>
            <tr>
              <th><input type="checkbox" id="selectAll"></th>
              <th>Campaign</th>
              <th>Recipients</th>
              <th>Open Rate</th>
              <th>Click Rate</th>
              <th>Sent Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input type="checkbox" class="row-select"></td>
              <td>
                <div class="campaign-info">
                  <div>
                    <span class="campaign-title">New Year Collection Launch</span>
                    <span class="campaign-desc">Featuring our latest ethnic wear designs</span>
                  </div>
                </div>
              </td>
              <td>
                <span class="recipient-count">2,456</span>
                <small class="text-muted">subscribers</small>
              </td>
              <td>
                <div class="rate-display">
                  <span class="rate-value">28.5%</span>
                  <div class="rate-bar">
                    <div class="rate-fill" style="width: 28.5%"></div>
                  </div>
                </div>
              </td>
              <td>
                <div class="rate-display">
                  <span class="rate-value">5.2%</span>
                  <div class="rate-bar">
                    <div class="rate-fill" style="width: 5.2%"></div>
                  </div>
                </div>
              </td>
              <td>
                <div>
                  <div>Jan 15, 2024</div>
                  <small class="text-muted">2 days ago</small>
                </div>
              </td>
              <td><span class="status-badge status-completed">Sent</span></td>
              <td>
                <div class="action-buttons">
                  <button class="btn-icon" title="View Report">
                    <i class="fas fa-chart-bar"></i>
                  </button>
                  <button class="btn-icon" title="Duplicate">
                    <i class="fas fa-copy"></i>
                  </button>
                  <button class="btn-icon" title="Edit">
                    <i class="fas fa-edit"></i>
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td><input type="checkbox" class="row-select"></td>
              <td>
                <div class="campaign-info">
                  <div>
                    <span class="campaign-title">Valentine's Day Special</span>
                    <span class="campaign-desc">Romantic jewelry collection preview</span>
                  </div>
                </div>
              </td>
              <td>
                <span class="recipient-count">2,456</span>
                <small class="text-muted">subscribers</small>
              </td>
              <td>
                <span class="text-muted">-</span>
              </td>
              <td>
                <span class="text-muted">-</span>
              </td>
              <td>
                <div>
                  <div>Feb 10, 2024</div>
                  <small class="text-muted">Scheduled</small>
                </div>
              </td>
              <td><span class="status-badge status-pending">Scheduled</span></td>
              <td>
                <div class="action-buttons">
                  <button class="btn-icon" title="Preview">
                    <i class="fas fa-eye"></i>
                  </button>
                  <button class="btn-icon btn-icon--success" title="Send Now">
                    <i class="fas fa-paper-plane"></i>
                  </button>
                  <button class="btn-icon" title="Edit">
                    <i class="fas fa-edit"></i>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    
    <div class="tab-content" id="subscribers">
      <div class="panel-header">
        <h3>Subscribers</h3>
        <div class="panel-actions">
          <div class="search-box">
            <i class="fas fa-search"></i>
            <input type="search" placeholder="Search subscribers..." id="subscriberSearch">
          </div>
          <select class="status-filter">
            <option value="">All Status</option>
            <option value="active">Active</option>
            <option value="unsubscribed">Unsubscribed</option>
          </select>
        </div>
      </div>
      <div class="table-container">
        <table class="data-table">
          <thead>
            <tr>
              <th><input type="checkbox" id="selectAllSubs"></th>
              <th>Subscriber</th>
              <th>Subscribed Date</th>
              <th>Source</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input type="checkbox" class="row-select"></td>
              <td>
                <div class="subscriber-info">
                  <div>
                    <span class="subscriber-email">priya.sharma@example.com</span>
                    <span class="subscriber-name">Priya Sharma</span>
                  </div>
                </div>
              </td>
              <td>
                <div>
                  <div>Jan 10, 2024</div>
                  <small class="text-muted">7 days ago</small>
                </div>
              </td>
              <td>
                <span class="source-tag">Website</span>
              </td>
              <td><span class="status-badge status-completed">Active</span></td>
              <td>
                <div class="action-buttons">
                  <button class="btn-icon" title="View Profile">
                    <i class="fas fa-user"></i>
                  </button>
                  <button class="btn-icon btn-icon--danger" title="Unsubscribe">
                    <i class="fas fa-user-times"></i>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    
    <div class="table-footer">
      <div class="table-info">
        Showing 1-2 of 2,456 items
      </div>
      <div class="pagination">
        <button class="pagination-btn" disabled>
          <i class="fas fa-chevron-left"></i>
        </button>
        <button class="pagination-btn active">1</button>
        <button class="pagination-btn">2</button>
        <button class="pagination-btn">3</button>
        <span class="pagination-dots">...</span>
        <button class="pagination-btn">123</button>
        <button class="pagination-btn">
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  </div>
</div>

<!-- Create Campaign Modal -->
<div class="modal" id="create-campaign-modal">
  <div class="modal__panel">
    <div class="modal__header">
      <h3>Create New Campaign</h3>
      <button class="modal__close-btn" data-modal-close>&times;</button>
    </div>
    <div class="modal__body">
      <form class="form" id="create-campaign-form">
        <div class="form-grid">
          <div class="form-group" style="grid-column: 1 / -1;">
            <label class="form-label">Campaign Name *</label>
            <input type="text" class="form-input" placeholder="e.g., January Newsletter" required />
          </div>
          <div class="form-group" style="grid-column: 1 / -1;">
            <label class="form-label">Email Subject *</label>
            <input type="text" class="form-input" placeholder="e.g., Our Latest Winter Collection" required />
          </div>
          <div class="form-group" style="grid-column: 1 / -1;">
            <label class="form-label">Recipients</label>
            <select class="form-input">
              <option value="all">All Subscribers</option>
              <option value="new">New Subscribers (Last 30 Days)</option>
              <option value="frequent">Frequent Buyers</option>
            </select>
          </div>
          <div class="form-group" style="grid-column: 1 / -1;">
            <label class="form-label">Email Content</label>
            <textarea class="form-input" rows="6" placeholder="Compose your email here..."></textarea>
          </div>
        </div>
      </form>
    </div>
    <div class="modal__footer">
      <button class="btn btn--secondary" data-modal-close>Cancel</button>
      <button class="btn btn--primary" type="submit" form="create-campaign-form">Save Campaign</button>
    </div>
  </div>
</div>

<?php include __DIR__ . '/footer.php'; ?>
