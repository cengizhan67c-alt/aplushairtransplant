// Mobil menü
const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
  links.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => links.classList.remove('open'))
  );
}

// Footer yılı
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

// İletişim formu (şimdilik sadece istemci tarafı doğrulama)
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const status = form.querySelector('.form-status');
    if (!form.ad.value.trim() || !form.telefon.value.trim()) {
      status.textContent = 'Lütfen ad ve telefon alanlarını doldurun.';
      status.style.color = '#c0392b';
      return;
    }
    // TODO: Formu bir backend'e veya form servisine gönderin
    status.textContent = 'Teşekkürler! En kısa sürede sizinle iletişime geçeceğiz.';
    status.style.color = '#1f6f78';
    form.reset();
  });
}
