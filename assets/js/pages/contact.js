// Contact Page Interactions
(function(){
  document.addEventListener('DOMContentLoaded', function(){
    // Live Chat button (placeholder action)
    const chatBtn = document.getElementById('open-chat');
    if (chatBtn) {
      chatBtn.addEventListener('click', () => {
        alert('Live chat coming soon. In the meantime, reach us at support@viaenterpriseofficial.com');
      });
    }

    // Contact Form submit handler (demo only)
    const form = document.getElementById('contact-form');
    const statusEl = document.getElementById('form-status');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const data = new FormData(form);
        const name = (data.get('name') || '').toString().trim();
        const email = (data.get('email') || '').toString().trim();
        const subject = (data.get('subject') || '').toString().trim();
        const message = (data.get('message') || '').toString().trim();
        if (!name || !email || !subject || !message) {
          showStatus('Please fill in all required fields.', true);
          return;
        }
        // Simulate async submit
        form.querySelector('button[type="submit"]').disabled = true;
        showStatus('Sending your message…');
        setTimeout(() => {
          showStatus('Thank you! Your message has been sent. We’ll get back to you shortly.');
          form.reset();
          form.querySelector('button[type="submit"]').disabled = false;
        }, 800);
      });
    }

    function showStatus(msg, isError){
      if (!statusEl) return;
      statusEl.textContent = msg;
      statusEl.hidden = false;
      statusEl.style.color = isError ? '#b00020' : '#0a7f22';
    }

    // FAQ accordion
    const faq = document.getElementById('faq');
    if (faq) {
      faq.querySelectorAll('.trigger').forEach(btn => {
        btn.addEventListener('click', () => {
          const expanded = btn.getAttribute('aria-expanded') === 'true';
          btn.setAttribute('aria-expanded', String(!expanded));
          const panel = btn.nextElementSibling;
          if (panel) panel.classList.toggle('open');
        });
      });
    }

    // Map / Branch selector
    const branchSelect = document.getElementById('branch');
    const gmap = document.getElementById('gmap');
    const directions = document.getElementById('directions');
    const branches = {
      ahmedabad: {
        q: 'Ahmedabad Gujarat',
        dir: 'https://www.google.com/maps/dir/?api=1&destination=Ahmedabad%2C%20Gujarat'
      },
      mumbai: {
        q: 'Mumbai Maharashtra',
        dir: 'https://www.google.com/maps/dir/?api=1&destination=Mumbai%2C%20Maharashtra'
      },
      delhi: {
        q: 'New Delhi',
        dir: 'https://www.google.com/maps/dir/?api=1&destination=New%20Delhi'
      }
    };

    function updateMap(){
      if (!branchSelect || !gmap || !directions) return;
      const key = branchSelect.value;
      const b = branches[key] || branches.ahmedabad;
      gmap.src = `https://www.google.com/maps?q=${encodeURIComponent(b.q)}&output=embed`;
      directions.href = b.dir;
    }

    if (branchSelect) {
      branchSelect.addEventListener('change', updateMap);
      updateMap();
    }

    // Newsletter form (demo only)
    const newsletterForm = document.getElementById('newsletter-form');
    const newsletterEmail = document.getElementById('newsletter-email');
    const newsletterStatus = document.getElementById('newsletter-status');
    if (newsletterForm) {
      newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = (newsletterEmail?.value || '').trim();
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          if (newsletterStatus) {
            newsletterStatus.textContent = 'Please enter a valid email address.';
            newsletterStatus.style.color = '#b00020';
            newsletterStatus.hidden = false;
          }
          return;
        }
        setTimeout(() => {
          if (newsletterStatus) {
            newsletterStatus.textContent = 'You are subscribed. Welcome!';
            newsletterStatus.style.color = '#0a7f22';
            newsletterStatus.hidden = false;
          }
          if (newsletterEmail) newsletterEmail.value = '';
        }, 400);
      });
    }
  });
})();
