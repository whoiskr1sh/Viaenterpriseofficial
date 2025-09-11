<?php
// admin/settings.php - Settings (Profile, Change Password, Website settings)
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Settings</title>
  <link rel="stylesheet" href="/assets/css/admin.css" />
</head>
<body>
  <?php include __DIR__ . '/sidebar.php'; ?>
  <main class="main">
    <h1>Settings</h1>
    <div class="panel">
      <form class="form" style="display:grid;gap:12px;max-width:600px;">
        <fieldset style="border:1px solid var(--border);padding:12px;border-radius:12px;">
          <legend>Profile</legend>
          <label> Name
            <input type="text" placeholder="Admin Name" />
          </label>
          <label> Email
            <input type="email" placeholder="admin@example.com" />
          </label>
        </fieldset>
        <fieldset style="border:1px solid var(--border);padding:12px;border-radius:12px;">
          <legend>Change Password</legend>
          <label> Current Password
            <input type="password" />
          </label>
          <label> New Password
            <input type="password" />
          </label>
          <label> Confirm New Password
            <input type="password" />
          </label>
        </fieldset>
        <fieldset style="border:1px solid var(--border);padding:12px;border-radius:12px;">
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
  <script src="/assets/js/admin.js"></script>
</body>
</html>
