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
        
        if (window.innerWidth <= 768) {
          const isOpen = sidebar.classList.toggle('sidebar--open');
          mobileOverlay.classList.toggle('active', isOpen);
        }
        // No action on desktop - sidebar is always visible
      });
    }

    // Close sidebar when clicking overlay
    if (mobileOverlay) {
      mobileOverlay.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          sidebar.classList.remove('sidebar--open');
          mobileOverlay.classList.remove('active');
        }
      });
    }

    // Handle window resize
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        // Desktop: ensure sidebar is visible and remove mobile classes
        sidebar.classList.remove('sidebar--open');
        mobileOverlay.classList.remove('active');
      }
    });

    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', (e) => {
      if (window.innerWidth <= 768 && 
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
