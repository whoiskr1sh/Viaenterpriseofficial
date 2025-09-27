    </div>
  </main>

  <!-- Toast Container -->
  <div class="toast-container" id="toastContainer"></div>

  <!-- Loading Overlay -->
  <div class="loading-overlay" id="loadingOverlay">
    <div class="loading-spinner">
      <div class="spinner"></div>
      <p>Processing...</p>
    </div>
  </div>

  <script src="../assets/js/admin.js"></script>
  <?php if (isset($additional_js)): ?>
    <?php foreach ($additional_js as $js): ?>
      <script src="<?php echo htmlspecialchars($js); ?>"></script>
    <?php endforeach; ?>
  <?php endif; ?>
</body>
</html>
