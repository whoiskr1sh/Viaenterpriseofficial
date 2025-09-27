<?php
// admin/settings.php - Settings
$page_title = 'Settings';
$page_subtitle = 'Configure your website and store settings';
$breadcrumb_items = [
    ['title' => 'Admin'],
    ['title' => 'Settings', 'active' => true]
];
$page_actions = '<button class="btn btn--success"><i class="fas fa-save"></i> Save All Changes</button>';

include __DIR__ . '/header.php';
?>

<div class="settings-section">
  <div class="data-panel">
    <div class="tabs-container">
      <div class="tabs">
        <button class="tab active" data-tab="general">
          <i class="fas fa-cog"></i>
          General
        </button>
        <button class="tab" data-tab="payment">
          <i class="fas fa-credit-card"></i>
          Payment
        </button>
        <button class="tab" data-tab="shipping">
          <i class="fas fa-shipping-fast"></i>
          Shipping
        </button>
        <button class="tab" data-tab="notifications">
          <i class="fas fa-bell"></i>
          Notifications
        </button>
      </div>
        </fieldset>
        <fieldset>
          <legend>Website</legend>
          <label> Logo
            <input type="file" accept="image/*" />
          </label>
          <label> Banner Text
            <input type="text" placeholder="Welcome to Viaenterprise" />
          </label>
        </fieldset>
        <div>
          <button class="btn btn--primary" type="submit">Save Changes</button>
        </div>
      </form>
    </div>
  </main>
  <script src="../assets/js/admin.js"></script>
</body>
</html>
