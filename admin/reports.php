<?php
// admin/reports.php - Analytics & Reports
$page_title = 'Analytics & Reports';
$page_subtitle = 'Business insights and performance metrics';
$breadcrumb_items = [
    ['title' => 'Admin'],
    ['title' => 'Analytics', 'active' => true]
];
$page_actions = '<button class="btn btn--secondary"><i class="fas fa-download"></i> Export Report</button>';
$additional_js = ['https://cdn.jsdelivr.net/npm/chart.js'];

include __DIR__ . '/header.php';
?>

<div class="analytics-section">
  <!-- Key Metrics -->
  <div class="analytics-grid">
    <div class="analytics-card">
      <div class="analytics-icon">
        <i class="fas fa-chart-line"></i>
      </div>
      <div class="analytics-content">
        <h3>Total Revenue</h3>
        <div class="analytics-value">₹2,45,000</div>
        <div class="analytics-change positive">
          <i class="fas fa-arrow-up"></i>
          <span>+15.3%</span>
        </div>
      </div>
    </div>
    
    <div class="analytics-card">
      <div class="analytics-icon">
        <i class="fas fa-shopping-cart"></i>
      </div>
      <div class="analytics-content">
        <h3>Total Orders</h3>
        <div class="analytics-value">1,234</div>
        <div class="analytics-change positive">
          <i class="fas fa-arrow-up"></i>
          <span>+8.2%</span>
        </div>
      </div>
    </div>
    
    <div class="analytics-card">
      <div class="analytics-icon">
        <i class="fas fa-users"></i>
      </div>
      <div class="analytics-content">
        <h3>New Customers</h3>
        <div class="analytics-value">156</div>
        <div class="analytics-change positive">
          <i class="fas fa-arrow-up"></i>
          <span>+12.1%</span>
        </div>
      </div>
    </div>
    
    <div class="analytics-card">
      <div class="analytics-icon">
        <i class="fas fa-percentage"></i>
      </div>
      <div class="analytics-content">
        <h3>Conversion Rate</h3>
        <div class="analytics-value">3.2%</div>
        <div class="analytics-change negative">
          <i class="fas fa-arrow-down"></i>
          <span>-2.1%</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Charts Section -->
  <div class="charts-grid">
    <div class="chart-container">
      <div class="chart-header">
        <h3>Revenue Trends</h3>
        <div class="chart-controls">
          <select class="chart-period">
            <option value="7d">Last 7 Days</option>
            <option value="30d" selected>Last 30 Days</option>
            <option value="90d">Last 90 Days</option>
          </select>
        </div>
      </div>
      <div class="chart-body">
        <canvas id="revenueChart" width="400" height="200"></canvas>
      </div>
    </div>
    
    <div class="chart-container">
      <div class="chart-header">
        <h3>Top Categories</h3>
      </div>
      <div class="chart-body">
        <canvas id="categoriesChart" width="400" height="200"></canvas>
      </div>
    </div>
  </div>

  <!-- Detailed Reports -->
  <div class="data-panel">
    <div class="panel-header">
      <h3>Top Performing Products</h3>
      <div class="panel-actions">
        <select class="status-filter">
          <option value="revenue">By Revenue</option>
          <option value="quantity">By Quantity</option>
          <option value="profit">By Profit</option>
        </select>
      </div>
    </div>
    <div class="table-container">
      <table class="data-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Category</th>
            <th>Sales</th>
            <th>Revenue</th>
            <th>Growth</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div class="product-info">
                <img src="../assets/images/product1.jpg" alt="Product" class="customer-avatar" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNiA4QzEzLjc5IDggMTIgOS43OSAxMiAxMkMxMiAxNC4yMSAxMy43OSAxNiAxNiAxNkMxOC4yMSAxNiAyMCAxNC4yMSAyMCAxMkMyMCA5Ljc5IDE4LjIxIDggMTYgOFoiIGZpbGw9IiM5Q0E0QUYiLz4KPHBhdGggZD0iTTggMjRDOCAyMC42OSAxMC42OSAxOCAxNCAxOEgxOEMyMS4zMSAxOCAyNCAyMC42OSAyNCAyNFYyNkg4VjI0WiIgZmlsbD0iIzlDQTRBRiIvPgo8L3N2Zz4='" style="border-radius: 4px;">
                <div>
                  <span class="product-name">Chiffon Saree - Red</span>
                  <span class="product-sku">SKU: SAR001</span>
                </div>
              </div>
            </td>
            <td>Sarees</td>
            <td>45 units</td>
            <td class="amount">₹89,550</td>
            <td>
              <div class="analytics-change positive">
                <i class="fas fa-arrow-up"></i>
                <span>+23%</span>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="product-info">
                <img src="../assets/images/product2.jpg" alt="Product" class="customer-avatar" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNiA4QzEzLjc5IDggMTIgOS43OSAxMiAxMkMxMiAxNC4yMSAxMy43OSAxNiAxNiAxNkMxOC4yMSAxNiAyMCAxNC4yMSAyMCAxMkMyMCA5Ljc5IDE4LjIxIDggMTYgOFoiIGZpbGw9IiM5Q0E0QUYiLz4KPHBhdGggZD0iTTggMjRDOCAyMC42OSAxMC42OSAxOCAxNCAxOEgxOEMyMS4zMSAxOCAyNCAyMC42OSAyNCAyNFYyNkg4VjI0WiIgZmlsbD0iIzlDQTRBRiIvPgo8L3N2Zz4='" style="border-radius: 4px;">
                <div>
                  <span class="product-name">Designer Lehenga - Blue</span>
                  <span class="product-sku">SKU: LEH001</span>
                </div>
              </div>
            </td>
            <td>Lehengas</td>
            <td>18 units</td>
            <td class="amount">₹89,982</td>
            <td>
              <div class="analytics-change positive">
                <i class="fas fa-arrow-up"></i>
                <span>+15%</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

<script>
// Initialize charts when page loads
document.addEventListener('DOMContentLoaded', function() {
  // Revenue Chart
  const revenueCtx = document.getElementById('revenueChart');
  if (revenueCtx) {
    new Chart(revenueCtx, {
      type: 'line',
      data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [{
          label: 'Revenue (₹)',
          data: [45000, 52000, 48000, 65000],
          borderColor: '#4f46e5',
          backgroundColor: 'rgba(79, 70, 229, 0.1)',
          tension: 0.4,
          fill: true
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          y: { beginAtZero: true }
        }
      }
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
  <script src="../assets/js/admin.js"></script>
</body>
</html>
