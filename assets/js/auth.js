// Client-side validation and UX for login/register
(function () {
  function qs(sel, root = document) { return root.querySelector(sel); }
  function qsa(sel, root = document) { return Array.from(root.querySelectorAll(sel)); }

  // Toggle password visibility
  function bindPasswordToggles(scope = document) {
    qsa('.toggle-pass', scope).forEach(btn => {
      const input = btn.previousElementSibling;
      if (!input) return;
      btn.addEventListener('click', () => {
        if (input.type === 'password') {
          input.type = 'text';
          btn.innerHTML = '<i class="far fa-eye-slash"></i>';
        } else {
          input.type = 'password';
          btn.innerHTML = '<i class="far fa-eye"></i>';
        }
        input.focus();
      });
    });
  }

  // Helpers
  function setError(field, msg) {
    const small = field.closest('.field')?.querySelector('.error');
    if (small) small.textContent = msg || '';
    if (msg) field.classList.add('invalid'); else field.classList.remove('invalid');
  }

  function validateEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  document.addEventListener('DOMContentLoaded', () => {
    bindPasswordToggles(document);

    // Login form
    const loginForm = qs('#loginForm');
    if (loginForm) {
      loginForm.addEventListener('submit', (e) => {
        let ok = true;
        const email = qs('#email', loginForm);
        const password = qs('#password', loginForm);

        if (!validateEmail(email.value.trim())) { setError(email, 'Enter a valid email'); ok = false; } else setError(email, '');
        if (!password.value) { setError(password, 'Password is required'); ok = false; } else setError(password, '');

        if (!ok) e.preventDefault();
      });
    }

    // Register form
    const regForm = qs('#registerForm');
    if (regForm) {
      regForm.addEventListener('submit', (e) => {
        let ok = true;
        const name = qs('#name', regForm);
        const email = qs('#email', regForm);
        const password = qs('#password', regForm);
        const confirm = qs('#confirm', regForm);

        if (!name.value || name.value.trim().length < 2) { setError(name, 'Please enter your full name'); ok = false; } else setError(name, '');
        if (!validateEmail(email.value.trim())) { setError(email, 'Enter a valid email'); ok = false; } else setError(email, '');

        const pass = password.value;
        if (pass.length < 8 || !/[A-Z]/.test(pass) || !/[0-9]/.test(pass)) {
          setError(password, 'Min 8 characters, include 1 uppercase & 1 number'); ok = false;
        } else setError(password, '');

        if (confirm.value !== pass) { setError(confirm, 'Passwords do not match'); ok = false; } else setError(confirm, '');

        if (!ok) e.preventDefault();
      });
    }
  });
})();
