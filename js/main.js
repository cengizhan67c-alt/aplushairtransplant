const WHATSAPP_NUMARASI = '905397817070';

// Mobil menü
const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.nav-links');
if (toggle && menu) {
  const setOpen = open => {
    menu.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Menüyü kapat' : 'Menüyü aç');
  };
  toggle.addEventListener('click', () => setOpen(!menu.classList.contains('open')));
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setOpen(false)));
}

// Alt bilgideki yıl
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

// Randevu formu: bilgileri WhatsApp mesajı olarak hazırlar
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const f = form.elements;
    const status = form.querySelector('.form-status');
    const ad = f.ad.value.trim();
    const telefon = f.telefon.value.trim();

    if (!ad || !telefon) {
      status.textContent = 'Lütfen adınızı ve telefon numaranızı yazın.';
      status.className = 'form-status error';
      (ad ? f.telefon : f.ad).focus();
      return;
    }

    const satirlar = ['Merhaba, randevu almak istiyorum.', `Ad Soyad: ${ad}`, `Telefon: ${telefon}`];
    if (f.tedavi.value) satirlar.push(`İlgilendiğim tedavi: ${f.tedavi.value}`);
    if (f.mesaj.value.trim()) satirlar.push(`Mesaj: ${f.mesaj.value.trim()}`);

    const url = `https://wa.me/${WHATSAPP_NUMARASI}?text=${encodeURIComponent(satirlar.join('\n'))}`;
    const pencere = window.open(url, '_blank');
    if (pencere) pencere.opener = null;
    else window.location.href = url; // açılır pencere engellendiyse aynı sekmede aç

    status.textContent = 'WhatsApp açılıyor. Mesajı göndermeyi unutmayın.';
    status.className = 'form-status ok';
    form.reset();
  });
}
