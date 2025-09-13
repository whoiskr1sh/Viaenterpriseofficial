<?php
// admin/reports.php - Reports & Analytics
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Reports & Analytics</title>
  <link rel="stylesheet" href="/assets/css/admin.css" />
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body>
  <?php include __DIR__ . '/sidebar.php'; ?>
  <main class="main">
    <h1>Reports & Analytics</h1>
    <section class="grids">
      <div class="grid__item">
        <div class="panel">
          <div class="panel__header">Monthly Sales</div>
          <div class="panel__body">
            <canvas id="monthlySales"></canvas>
          </div>
        </div>
      </div>
      <div class="grid__item">
        <div class="panel">
          <div class="panel__header">Best Sellers</div>
          <div class="panel__body">
            <canvas id="bestSellers"></canvas>
          </div>
        </div>
      </div>
    </section>
  </main>
  <script>
    new Chart(document.getElementById('monthlySales'), {
      type: 'bar',
      data: { labels: ['Jan','Feb','Mar','Apr','May','Jun'], datasets: [{ label:'Sales (₹)', data:[100,120,90,140,160,180], backgroundColor:'#4f46e5' }]},
      options: { responsive: true, maintainAspectRatio: false }
    });
    new Chart(document.getElementById('bestSellers'), {
      type: 'pie',
      data: { labels: ['Sarees','Lehengas','Jewelry','Kurtis'], datasets: [{ data:[40,30,20,10], backgroundColor:['#22c55e','#f59e0b','#ef4444','#3b82f6']} ]},
      options: { responsive: true, maintainAspectRatio: false }
    });
  </script>
  <script src="/assets/js/admin.js"></script>
</body>
</html>
