// assets/js/admin.js - Modern Admin Panel Interactions
(function() {
  'use strict';

  // ===== INITIALIZATION =====
  document.addEventListener('DOMContentLoaded', function() {
    initializeSidebar();
    initializeNavbar();
    initializeTheme();
    initializeDropdowns();
    initializeToasts();
    initializeSearch();
    initializeTables();
    initializeCharts();
    initializeSettings();
    setActiveNavigation();
  });

  // ===== SIDEBAR FUNCTIONALITY =====
  function initializeSidebar() {
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.querySelector('.sidebar-toggle-btn'); // Use class selector for navbar button
    const collapsibleItems = document.querySelectorAll('.nav__toggle');
    
    // Create mobile overlay
    let mobileOverlay = document.querySelector('.mobile-overlay');
    if (!mobileOverlay) {
      mobileOverlay = document.createElement('div');
      mobileOverlay.className = 'mobile-overlay';
      document.body.appendChild(mobileOverlay);
    }

    // Sidebar toggle - only works on mobile
    if (toggleBtn && sidebar) {
      toggleBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        if (window.innerWidth <= 1024) {
          const isOpen = sidebar.classList.toggle('sidebar--open');
          mobileOverlay.classList.toggle('active', isOpen);
        }
        // No action on desktop - sidebar is always visible
      });
    }

    // Close sidebar when clicking overlay
    if (mobileOverlay) {
      mobileOverlay.addEventListener('click', () => {
        if (window.innerWidth <= 1024) {
          sidebar.classList.remove('sidebar--open');
          mobileOverlay.classList.remove('active');
        }
      });
    }

    // Handle window resize
    window.addEventListener('resize', () => {
      if (window.innerWidth > 1024) {
        // Desktop: ensure sidebar is visible and remove mobile classes
        sidebar.classList.remove('sidebar--open');
        mobileOverlay.classList.remove('active');
      }
    });

    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', (e) => {
      if (window.innerWidth <= 1024 && 
          sidebar && sidebar.classList.contains('sidebar--open') && 
          !sidebar.contains(e.target) && 
          !toggleBtn.contains(e.target)) {
        sidebar.classList.remove('sidebar--open');
        mobileOverlay.classList.remove('active');
      }
    });

    // Collapsible menu items
    collapsibleItems.forEach(toggle => {
      toggle.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = toggle.getAttribute('data-target');
        const submenu = document.getElementById(targetId);
        const arrow = toggle.querySelector('.nav__arrow');
        
        if (submenu) {
          const isExpanded = submenu.classList.contains('expanded');
          
          // Close all other submenus
          document.querySelectorAll('.nav__submenu.expanded').forEach(menu => {
            if (menu !== submenu) {
              menu.classList.remove('expanded');
              const otherArrow = document.querySelector(`[data-target="${menu.id}"] .nav__arrow`);
              if (otherArrow) otherArrow.style.transform = 'rotate(0deg)';
            }
          });
          
          // Toggle current submenu
          submenu.classList.toggle('expanded');
          toggle.setAttribute('aria-expanded', !isExpanded);
          
          if (arrow) {
            arrow.style.transform = isExpanded ? 'rotate(0deg)' : 'rotate(180deg)';
          }
        }
      });
    });

    // Close sidebar on mobile when clicking outside
    document.addEventListener('click', (e) => {
      if (window.innerWidth <= 768 && sidebar && sidebar.classList.contains('show')) {
        if (!sidebar.contains(e.target) && !toggleBtn.contains(e.target)) {
          sidebar.classList.remove('show');
        }
      }
    });
  }

  // ===== NAVBAR FUNCTIONALITY =====
  function initializeNavbar() {
    // Handle window resize
    window.addEventListener('resize', () => {
      const sidebar = document.getElementById('sidebar');
      if (window.innerWidth > 768 && sidebar) {
        sidebar.classList.remove('show');
      }
    });
  }

  // ===== THEME TOGGLE =====
  function initializeTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;
    
    // Load saved theme
    const savedTheme = localStorage.getItem('admin-theme') || 'light';
    html.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    if (themeToggle) {
      themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('admin-theme', newTheme);
        updateThemeIcon(newTheme);
        
        showToast('Theme changed to ' + newTheme + ' mode', 'success');
      });
    }
  }

  function updateThemeIcon(theme) {
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
      const icon = themeToggle.querySelector('i');
      if (icon) {
        icon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
      }
    }
  }

  // ===== DROPDOWN FUNCTIONALITY =====
  function initializeDropdowns() {
    // Notification dropdown
    const notificationBtn = document.getElementById('notificationBtn');
    const notificationMenu = document.getElementById('notificationMenu');
    
    if (notificationBtn && notificationMenu) {
      notificationBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        notificationMenu.classList.toggle('show');
        // Close profile menu if open
        const profileMenu = document.getElementById('profileMenu');
        if (profileMenu) profileMenu.classList.remove('show');
      });
    }

    // Profile dropdown
    const profileBtn = document.getElementById('profileBtn');
    const profileMenu = document.getElementById('profileMenu');
    
    if (profileBtn && profileMenu) {
      profileBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        profileMenu.classList.toggle('show');
        // Close notification menu if open
        if (notificationMenu) notificationMenu.classList.remove('show');
      });
    }

    // Close dropdowns when clicking outside
    document.addEventListener('click', () => {
      if (notificationMenu) notificationMenu.classList.remove('show');
      if (profileMenu) profileMenu.classList.remove('show');
    });

    // Mark all notifications as read
    const markAllRead = document.querySelector('.mark-all-read');
    if (markAllRead) {
      markAllRead.addEventListener('click', () => {
        document.querySelectorAll('.notification-item.unread').forEach(item => {
          item.classList.remove('unread');
        });
        const badge = document.querySelector('.notification-badge');
        if (badge) badge.style.display = 'none';
        showToast('All notifications marked as read', 'success');
      });
    }
  }

  // ===== TOAST NOTIFICATIONS =====
  function initializeToasts() {
    // Create toast container if it doesn't exist
    if (!document.getElementById('toastContainer')) {
      const container = document.createElement('div');
      container.id = 'toastContainer';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }
  }

  function showToast(message, type = 'info', duration = 4000) {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast--${type}`;
    
    const icons = {
      success: 'fas fa-check',
      error: 'fas fa-times',
      warning: 'fas fa-exclamation-triangle',
      info: 'fas fa-info-circle'
    };

    toast.innerHTML = `
      <div class="toast-icon">
        <i class="${icons[type] || icons.info}"></i>
      </div>
      <div class="toast-content">
        <div class="toast-message">${message}</div>
      </div>
      <button class="toast-close">
        <i class="fas fa-times"></i>
      </button>
    `;

    container.appendChild(toast);

    // Show toast
    setTimeout(() => toast.classList.add('show'), 100);

    // Auto remove
    const autoRemove = setTimeout(() => removeToast(toast), duration);

    // Manual close
    const closeBtn = toast.querySelector('.toast-close');
    closeBtn.addEventListener('click', () => {
      clearTimeout(autoRemove);
      removeToast(toast);
    });
  }

  function removeToast(toast) {
    toast.classList.remove('show');
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 300);
  }

  // ===== SEARCH FUNCTIONALITY =====
  function initializeSearch() {
    const searchInput = document.querySelector('.search-input');
    const searchResults = document.getElementById('searchResults');
    
    if (searchInput && searchResults) {
      let searchTimeout;
      
      searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        const query = e.target.value.trim();
        
        if (query.length < 2) {
          searchResults.style.display = 'none';
          return;
        }
        
        searchTimeout = setTimeout(() => {
          performSearch(query, searchResults);
        }, 300);
      });

      // Close search results when clicking outside
      document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
          searchResults.style.display = 'none';
        }
      });
    }
  }

  function performSearch(query, resultsContainer) {
    // Simulate search results
    const mockResults = [
      { type: 'product', title: 'Silk Saree Collection', url: '/admin/products-manage.php' },
      { type: 'order', title: 'Order #1234', url: '/admin/orders-new.php' },
      { type: 'customer', title: 'Priya Sharma', url: '/admin/customers.php' }
    ].filter(item => item.title.toLowerCase().includes(query.toLowerCase()));

    if (mockResults.length > 0) {
      resultsContainer.innerHTML = mockResults.map(result => `
        <div class="search-result-item">
          <i class="fas fa-${result.type === 'product' ? 'box' : result.type === 'order' ? 'shopping-cart' : 'user'}"></i>
          <a href="${result.url}">${result.title}</a>
        </div>
      `).join('');
      resultsContainer.style.display = 'block';
    } else {
      resultsContainer.innerHTML = '<div class="search-no-results">No results found</div>';
      resultsContainer.style.display = 'block';
    }
  }

  // ===== TABLE FUNCTIONALITY =====
  function initializeTables() {
    // Select all checkbox functionality
    const selectAllCheckbox = document.getElementById('selectAll');
    const rowCheckboxes = document.querySelectorAll('.row-select');
    
    if (selectAllCheckbox && rowCheckboxes.length > 0) {
      selectAllCheckbox.addEventListener('change', () => {
        rowCheckboxes.forEach(checkbox => {
          checkbox.checked = selectAllCheckbox.checked;
        });
      });

      rowCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
          const checkedCount = document.querySelectorAll('.row-select:checked').length;
          selectAllCheckbox.checked = checkedCount === rowCheckboxes.length;
          selectAllCheckbox.indeterminate = checkedCount > 0 && checkedCount < rowCheckboxes.length;
        });
      });
    }

    // Table search functionality
    const orderSearch = document.getElementById('orderSearch');
    if (orderSearch) {
      orderSearch.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const rows = document.querySelectorAll('.data-table tbody tr');
        
        rows.forEach(row => {
          const text = row.textContent.toLowerCase();
          row.style.display = text.includes(query) ? '' : 'none';
        });
      });
    }

    // Status filter
    const statusFilter = document.querySelector('.status-filter');
    if (statusFilter) {
      statusFilter.addEventListener('change', (e) => {
        const selectedStatus = e.target.value.toLowerCase();
        const rows = document.querySelectorAll('.data-table tbody tr');
        
        rows.forEach(row => {
          if (!selectedStatus) {
            row.style.display = '';
          } else {
            const statusBadge = row.querySelector('.status-badge');
            const rowStatus = statusBadge ? statusBadge.textContent.toLowerCase() : '';
            row.style.display = rowStatus.includes(selectedStatus) ? '' : 'none';
          }
        });
      });
    }
  }

  // ===== CHART INITIALIZATION =====
  function initializeCharts() {
    // Sales trend chart
    const salesCtx = document.getElementById('salesTrend');
    if (salesCtx) {
      new Chart(salesCtx, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
          datasets: [{
            label: 'Sales (₹)',
            data: [120000, 150000, 130000, 170000, 210000, 190000, 240000],
            borderColor: '#4f46e5',
            backgroundColor: 'rgba(79, 70, 229, 0.1)',
            tension: 0.4,
            fill: true,
            pointBackgroundColor: '#4f46e5',
            pointBorderColor: '#ffffff',
            pointBorderWidth: 2,
            pointRadius: 6,
            pointHoverRadius: 8
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              grid: {
                color: 'rgba(0, 0, 0, 0.05)'
              },
              ticks: {
                callback: function(value) {
                  return '₹' + (value / 1000) + 'K';
                }
              }
            },
            x: {
              grid: {
                display: false
              }
            }
          }
        }
      });
    }

    // Category distribution chart
    const catCtx = document.getElementById('topCategories');
    if (catCtx) {
      new Chart(catCtx, {
        type: 'doughnut',
        data: {
          labels: ['Sarees', 'Lehengas', 'Jewelry', 'Kurtis'],
          datasets: [{
            data: [45, 25, 20, 10],
            backgroundColor: ['#4f46e5', '#10b981', '#f59e0b', '#ef4444'],
            borderWidth: 0,
            hoverOffset: 10
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'bottom',
              labels: {
                padding: 20,
                usePointStyle: true
              }
            }
          }
        }
      });
    }
  }

  // ===== NAVIGATION HIGHLIGHTING =====
  function setActiveNavigation() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav__link[href]');
    
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (currentPath.includes(href) && href !== '/') {
        link.classList.add('nav__link--active');
        
        // Expand parent submenu if this is a sublink
        const submenu = link.closest('.nav__submenu');
        if (submenu) {
          submenu.classList.add('expanded');
          const toggle = document.querySelector(`[data-target="${submenu.id}"]`);
          if (toggle) {
            toggle.setAttribute('aria-expanded', 'true');
            const arrow = toggle.querySelector('.nav__arrow');
            if (arrow) arrow.style.transform = 'rotate(180deg)';
          }
        }
      }
    });
  }

  // ===== LOADING OVERLAY =====
  function showLoading() {
    const overlay = document.getElementById('loadingOverlay');
    if (overlay) {
      overlay.classList.add('show');
    }
  }

  function hideLoading() {
    const overlay = document.getElementById('loadingOverlay');
    if (overlay) {
      overlay.classList.remove('show');
    }
  }

  // ===== UTILITY FUNCTIONS =====
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // ===== GLOBAL FUNCTIONS =====
  window.AdminPanel = {
    showToast,
    showLoading,
    hideLoading,
    debounce
  };

  // ===== SETTINGS PAGE FUNCTIONALITY =====
  function initializeSettings() {
    // Only run on settings page
    if (!document.querySelector('.settings-container')) return;

    initializeSettingsTabs();
    initializeSettingsForms();
    initializeFileUploads();
    initializeToggleSwitches();
    initializeSettingsValidation();
  }

  function initializeSettingsTabs() {
    const tabs = document.querySelectorAll('.settings-tab');
    const panels = document.querySelectorAll('.settings-panel');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const targetTab = tab.getAttribute('data-tab');
        
        // Remove active class from all tabs and panels
        tabs.forEach(t => t.classList.remove('active'));
        panels.forEach(p => p.classList.remove('active'));
        
        // Add active class to clicked tab and corresponding panel
        tab.classList.add('active');
        const targetPanel = document.getElementById(`${targetTab}-panel`);
        if (targetPanel) {
          targetPanel.classList.add('active');
        }

        // Store active tab in localStorage
        localStorage.setItem('activeSettingsTab', targetTab);
      });
    });

    // Restore last active tab
    const lastActiveTab = localStorage.getItem('activeSettingsTab');
    if (lastActiveTab) {
      const tab = document.querySelector(`[data-tab="${lastActiveTab}"]`);
      if (tab) {
        tab.click();
      }
    }
  }

  function initializeSettingsForms() {
    const forms = document.querySelectorAll('.settings-form');
    
    forms.forEach(form => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        handleSettingsFormSubmit(form);
      });
    });

    // Save all settings button
    const saveAllBtn = document.getElementById('save-all-settings');
    if (saveAllBtn) {
      saveAllBtn.addEventListener('click', () => {
        handleSaveAllSettings();
      });
    }

    // Test email button
    const testEmailBtn = document.getElementById('test-email');
    if (testEmailBtn) {
      testEmailBtn.addEventListener('click', () => {
        handleTestEmail();
      });
    }
  }

  function initializeFileUploads() {
    const fileInputs = document.querySelectorAll('.file-input');
    
    fileInputs.forEach(input => {
      input.addEventListener('change', (e) => {
        handleFileUpload(e.target);
      });
    });
  }

  function initializeToggleSwitches() {
    const toggles = document.querySelectorAll('.toggle-switch input');
    
    toggles.forEach(toggle => {
      toggle.addEventListener('change', (e) => {
        const isEnabled = e.target.checked;
        const card = e.target.closest('.payment-method-card, .shipping-zone-card');
        
        if (card) {
          const fields = card.querySelector('.payment-method-fields, .zone-content');
          if (fields) {
            fields.style.opacity = isEnabled ? '1' : '0.5';
            const inputs = fields.querySelectorAll('input, select, textarea');
            inputs.forEach(input => {
              input.disabled = !isEnabled;
            });
          }
        }
      });

      // Trigger initial state
      toggle.dispatchEvent(new Event('change'));
    });
  }

  function initializeSettingsValidation() {
    const inputs = document.querySelectorAll('.settings-form input, .settings-form select, .settings-form textarea');
    
    inputs.forEach(input => {
      input.addEventListener('blur', () => {
        validateSettingsField(input);
      });

      input.addEventListener('input', () => {
        clearFieldError(input);
      });
    });
  }

  function handleSettingsFormSubmit(form) {
    const formData = new FormData(form);
    const formId = form.id;
    const submitBtn = form.querySelector('button[type="submit"]');
    
    // Show loading state
    if (submitBtn) {
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Saving...';
      submitBtn.disabled = true;
      
      // Simulate API call
      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        showToast(`${getFormDisplayName(formId)} saved successfully!`, 'success');
      }, 1500);
    }
  }

  function handleSaveAllSettings() {
    const forms = document.querySelectorAll('.settings-form');
    const saveAllBtn = document.getElementById('save-all-settings');
    
    if (saveAllBtn) {
      const originalText = saveAllBtn.innerHTML;
      saveAllBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Saving All...';
      saveAllBtn.disabled = true;
      
      // Simulate saving all forms
      setTimeout(() => {
        saveAllBtn.innerHTML = originalText;
        saveAllBtn.disabled = false;
        showToast('All settings saved successfully!', 'success');
      }, 2500);
    }
  }

  function handleTestEmail() {
    const testBtn = document.getElementById('test-email');
    
    if (testBtn) {
      const originalText = testBtn.innerHTML;
      testBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
      testBtn.disabled = true;
      
      // Simulate sending test email
      setTimeout(() => {
        testBtn.innerHTML = originalText;
        testBtn.disabled = false;
        showToast('Test email sent successfully!', 'success');
      }, 2000);
    }
  }

  function handleFileUpload(input) {
    const file = input.files[0];
    if (!file) return;

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      showToast('Please select a valid image file (JPEG, PNG, GIF, WebP)', 'error');
      input.value = '';
      return;
    }

    // Validate file size (max 5MB)
    const maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
      showToast('File size must be less than 5MB', 'error');
      input.value = '';
      return;
    }

    // Show preview
    const reader = new FileReader();
    reader.onload = (e) => {
      const preview = input.closest('.file-upload-container').querySelector('img');
      if (preview) {
        preview.src = e.target.result;
        showToast('Image uploaded successfully!', 'success');
      }
    };
    reader.readAsDataURL(file);
  }

  function validateSettingsField(field) {
    const value = field.value.trim();
    const fieldType = field.type;
    const isRequired = field.hasAttribute('required');
    
    clearFieldError(field);

    if (isRequired && !value) {
      showFieldError(field, 'This field is required');
      return false;
    }

    if (fieldType === 'email' && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        showFieldError(field, 'Please enter a valid email address');
        return false;
      }
    }

    if (fieldType === 'url' && value) {
      try {
        new URL(value);
      } catch {
        showFieldError(field, 'Please enter a valid URL');
        return false;
      }
    }

    if (fieldType === 'tel' && value) {
      const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
      if (!phoneRegex.test(value.replace(/[\s\-\(\)]/g, ''))) {
        showFieldError(field, 'Please enter a valid phone number');
        return false;
      }
    }

    return true;
  }

  function showFieldError(field, message) {
    const formGroup = field.closest('.form-group');
    if (!formGroup) return;

    // Remove existing error
    const existingError = formGroup.querySelector('.field-error');
    if (existingError) {
      existingError.remove();
    }

    // Add error styling
    field.style.borderColor = 'var(--danger)';
    field.style.boxShadow = '0 0 0 3px rgba(239, 68, 68, 0.1)';

    // Add error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.style.cssText = `
      color: var(--danger);
      font-size: 0.75rem;
      margin-top: 0.25rem;
      display: flex;
      align-items: center;
      gap: 0.25rem;
    `;
    errorDiv.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${message}`;
    
    formGroup.appendChild(errorDiv);
  }

  function clearFieldError(field) {
    const formGroup = field.closest('.form-group');
    if (!formGroup) return;

    // Remove error styling
    field.style.borderColor = '';
    field.style.boxShadow = '';

    // Remove error message
    const errorDiv = formGroup.querySelector('.field-error');
    if (errorDiv) {
      errorDiv.remove();
    }
  }

  function getFormDisplayName(formId) {
    const names = {
      'general-form': 'General Settings',
      'payment-form': 'Payment Settings',
      'shipping-form': 'Shipping Settings',
      'notifications-form': 'Notification Settings'
    };
    return names[formId] || 'Settings';
  }

  // ===== DEMO INTERACTIONS =====
  // Add click handlers for demo purposes
  document.addEventListener('click', (e) => {
    // Button click feedback
    if (e.target.matches('.btn:not(.btn--ghost)')) {
      const btn = e.target;
      btn.style.transform = 'translateY(0)';
      setTimeout(() => {
        btn.style.transform = '';
      }, 100);
    }

    // Action button clicks
    if (e.target.matches('.btn-icon')) {
      e.preventDefault();
      const action = e.target.title || 'Action';
      showToast(`${action} clicked`, 'info', 2000);
    }
  });

})();

// =============================================================================
// MODAL DIALOGS
// =============================================================================
document.addEventListener('DOMContentLoaded', () => {
    // Use event delegation for dynamically added modals
    document.body.addEventListener('click', function(e) {
        // Open modal
        const openBtn = e.target.closest('[data-modal-target]');
        if (openBtn) {
            const modal = document.querySelector(openBtn.dataset.modalTarget);
            if (modal) openModal(modal);
            return;
        }

        // Close modal via close button
        const closeBtn = e.target.closest('[data-modal-close]');
        if (closeBtn) {
            const modal = closeBtn.closest('.modal');
            if (modal) closeModal(modal);
            return;
        }

        // Close modal via overlay click
        if (e.target.classList.contains('modal')) {
            closeModal(e.target);
        }
    });

    function openModal(modal) {
        if (modal == null) return;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    function closeModal(modal) {
        if (modal == null) return;
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }

    // Close modal on Escape key press
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const openModal = document.querySelector('.modal.active');
            if (openModal) closeModal(openModal);
        }
    });
});

