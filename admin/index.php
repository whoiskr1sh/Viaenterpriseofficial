<?php
// admin/index.php - Dashboard
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Admin Dashboard</title>
  <link rel="stylesheet" href="/assets/css/admin.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body>
  <?php include __DIR__ . '/sidebar.php'; ?>

  <main class="main" id="main">
    <header class="main__header">
      <h1>Dashboard</h1>
      <div class="header__actions">
        <button class="btn btn--primary">Add Product</button>
        <button class="btn">View Orders</button>
      </div>
    </header>

    <section class="cards">
      <div class="card">
        <div class="card__title">Total Orders</div>
        <div class="card__value">1,248</div>
        <div class="card__meta">+12% vs last week</div>
      </div>
      <div class="card">
        <div class="card__title">Total Sales (₹)</div>
        <div class="card__value">₹ 8,42,500</div>
        <div class="card__meta">+7% MoM</div>
      </div>
      <div class="card">
        <div class="card__title">Active Customers</div>
        <div class="card__value">3,215</div>
        <div class="card__meta">+5 new today</div>
      </div>
      <div class="card">
        <div class="card__title">Total Products</div>
        <div class="card__value">684</div>
        <div class="card__meta">12 low-stock</div>
      </div>
    </section>

    <section class="grids">
      <div class="grid__item">
        <div class="panel">
          <div class="panel__header">Sales Trend</div>
          <canvas id="salesTrend"></canvas>
        </div>
      </div>
      <div class="grid__item">
        <div class="panel">
          <div class="panel__header">Top Categories</div>
          <canvas id="topCategories"></canvas>
        </div>
      </div>
    </section>
  </main>

  <script>
    // Charts demo data
    const salesCtx = document.getElementById('salesTrend');
    const salesChart = new Chart(salesCtx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [{
          label: 'Sales (₹)',
          data: [120000, 150000, 130000, 170000, 210000, 190000, 240000],
          borderColor: '#4f46e5',
          backgroundColor: 'rgba(79, 70, 229, 0.15)',
          tension: 0.35,
          fill: true,
        }]
      },
      options: { responsive: true, maintainAspectRatio: false }
    });

    const catCtx = document.getElementById('topCategories');
    const catChart = new Chart(catCtx, {
      type: 'doughnut',
      data: {
        labels: ['Sarees', 'Lehengas', 'Jewelry', 'Kurtis'],
        datasets: [{
          data: [45, 25, 20, 10],
          backgroundColor: ['#4f46e5', '#22c55e', '#f59e0b', '#ef4444']
        }]
      },
      options: { responsive: true, maintainAspectRatio: false }
    });
  </script>
  <script src="/assets/js/admin.js"></script>
</body>
</html>
