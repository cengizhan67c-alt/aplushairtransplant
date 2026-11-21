# Saç Ekimi Web Projesi

Saç ekimi kliniği için statik tanıtım sitesi.

## Klasör yapısı
```
sac-ekimi-web/
├── index.html          # Ana sayfa
├── pages/
│   └── hakkimizda.html # Hakkımızda sayfası
├── css/style.css       # Stiller
├── js/main.js          # Menü ve form işlemleri
└── images/             # Görseller (öncesi/sonrası, logo vb.)
```

## Çalıştırma
`index.html` dosyasını tarayıcıda açın veya:
```bash
python3 -m http.server 8000
```

## Yapılacaklar
- [ ] Logo ve klinik görsellerini `images/` klasörüne ekle
- [ ] Öncesi/sonrası galerisi
- [ ] İletişim formunu bir backend'e bağla
- [ ] WhatsApp butonu, Google Maps konumu
