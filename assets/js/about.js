// About page interactions
(function(){
  // Reveal on scroll
  const revealEls = Array.from(document.querySelectorAll('.reveal'));
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('revealed');
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('revealed'));
  }

  // Animated counters
  const counters = document.querySelectorAll('.stat-value[data-count]');
  const format = (n) => {
    if (n >= 1000000) return (n/1000000).toFixed(1) + 'M';
    if (n >= 1000) return Math.round(n/100)/10 + 'K';
    return n.toString();
  };
  const animateCount = (el) => {
    const target = parseFloat(el.getAttribute('data-count'));
    const isFloat = String(target).includes('.');
    const duration = 1200;
    const start = performance.now();
    const step = (t) => {
      const p = Math.min(1, (t - start) / duration);
      const value = target * p;
      el.textContent = isFloat ? value.toFixed(1) : Math.floor(value);
      if (p < 1) requestAnimationFrame(step); else el.textContent = isFloat ? target.toFixed(1) : format(target);
    };
    requestAnimationFrame(step);
  };
  if ('IntersectionObserver' in window) {
    const io2 = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          animateCount(e.target);
          io2.unobserve(e.target);
        }
      });
    }, { threshold: 0.3 });
    counters.forEach(c => io2.observe(c));
  } else {
    counters.forEach(animateCount);
  }

  // Simple testimonial slider (auto rotate)
  const slider = document.querySelector('.testimonial-slider');
  if (slider) {
    const items = Array.from(slider.querySelectorAll('.testimonial'));
    let i = 0;
    const next = () => {
      items[i].classList.remove('active');
      i = (i + 1) % items.length;
      items[i].classList.add('active');
    };
    items[0] && items[0].classList.add('active');
    let interval = null;
    const start = () => interval = setInterval(next, 3500);
    const stop = () => interval && clearInterval(interval);
    slider.addEventListener('mouseenter', stop);
    slider.addEventListener('mouseleave', start);
    start();
  }
})();
