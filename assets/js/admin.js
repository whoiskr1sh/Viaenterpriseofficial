// assets/js/admin.js - Admin Panel interactions
(function(){
  const sidebar = document.getElementById('sidebar');
  const toggle = document.getElementById('sidebarToggle');
  const doc = document;

  if (toggle && sidebar) {
    toggle.addEventListener('click', () => {
      sidebar.classList.toggle('sidebar--hidden');
      updateFab();
    });
  }

  // Active link highlight
  const links = document.querySelectorAll('.nav__link');
  const path = window.location.pathname.replace(/\\/g, '/');
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    if (path.endsWith(href) || path === href) {
      link.classList.add('nav__link--active');
    } else if (href !== '/' && path.includes(href)) {
      link.classList.add('nav__link--active');
    }
  });

  // Floating toggle button to reopen sidebar when hidden
  function ensureFab() {
    let fab = doc.getElementById('sidebarFab');
    if (!fab) {
      fab = doc.createElement('button');
      fab.id = 'sidebarFab';
      fab.className = 'sidebar-fab';
      fab.type = 'button';
      fab.setAttribute('aria-label', 'Open sidebar');
      fab.innerText = '☰';
      fab.addEventListener('click', () => {
        sidebar.classList.remove('sidebar--hidden');
        updateFab();
      });
      doc.body.appendChild(fab);
    }
    return fab;
  }

  function updateFab() {
    const fab = ensureFab();
    const hidden = sidebar.classList.contains('sidebar--hidden');
    fab.style.display = hidden ? 'inline-flex' : 'none';
  }

  // Initialize FAB visibility on load
  if (sidebar) updateFab();
})();
