// assets/js/admin.js - Admin Panel interactions
(function(){
  const sidebar = document.getElementById('sidebar');
  const toggle = document.getElementById('sidebarToggle');

  if (toggle && sidebar) {
    toggle.addEventListener('click', () => {
      sidebar.classList.toggle('sidebar--collapsed');
      // also toggle main margin via sibling selector handled in CSS
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
})();
