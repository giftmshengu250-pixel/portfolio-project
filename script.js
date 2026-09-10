// Smooth scroll when clicking navbar links
document.querySelectorAll('a[href^="#"]').forEach(function(link) {
  link.addEventListener('click', function(e) {
    var target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Accordion toggles for About section (minimal, accessible)
document.querySelectorAll('.accordion-header').forEach(function(btn) {
  var panelId = btn.getAttribute('aria-controls');
  var panel = document.getElementById(panelId);
  if (!panel) return;
  // start collapsed
  btn.setAttribute('aria-expanded', 'false');
  panel.setAttribute('hidden', '');
  panel.style.maxHeight = '0px';

  btn.addEventListener('click', function() {
    var expanded = btn.getAttribute('aria-expanded') === 'true';
    if (expanded) {
      // collapse
      btn.setAttribute('aria-expanded', 'false');
      panel.style.maxHeight = '0px';
      panel.setAttribute('hidden', '');
    } else {
      // expand
      btn.setAttribute('aria-expanded', 'true');
      panel.removeAttribute('hidden');
      // allow layout to update then set max-height for transition
      requestAnimationFrame(function() {
        panel.style.maxHeight = panel.scrollHeight + 'px';
      });
    }
  });
});