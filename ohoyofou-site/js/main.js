// ÔHÔYÔFOU — interactions du site
document.addEventListener('DOMContentLoaded', function () {

  // --- Menu mobile (hamburger) ---
  var toggle = document.querySelector('.menu-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      links.classList.toggle('open');
      document.body.style.overflow = !expanded ? 'hidden' : '';
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        toggle.setAttribute('aria-expanded', 'false');
        links.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // --- Révélation discrète au défilement ---
  // Le contenu est visible par défaut (sans opacity:0 en CSS) : si le
  // JavaScript ne s'exécute pas, tout reste lisible. On n'ajoute l'état
  // "masqué" qu'au moment où on sait pouvoir l'animer.
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          entry.target.classList.remove('reveal-init');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) {
      el.classList.add('reveal-init');
      io.observe(el);
    });
  }

  // --- Sélection de montant (page Don) ---
  var amountOpts = document.querySelectorAll('.amount-opt');
  var customAmount = document.getElementById('custom-amount');
  if (amountOpts.length) {
    amountOpts.forEach(function (opt) {
      opt.addEventListener('click', function () {
        amountOpts.forEach(function (o) { o.classList.remove('active'); });
        opt.classList.add('active');
        if (customAmount) customAmount.value = opt.dataset.amount || '';
      });
    });
  }

  // --- Formulaires (démo : empêche l'envoi réel, affiche une confirmation) ---
  var forms = document.querySelectorAll('form[data-demo-form]');
  forms.forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var success = form.querySelector('.form-success');
      if (success) {
        success.classList.add('show');
        success.setAttribute('role', 'status');
      }
      form.reset();
      amountOpts.forEach(function (o) { o.classList.remove('active'); });
    });
  });

  // --- Année automatique dans le footer ---
  document.querySelectorAll('.js-year').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
});
