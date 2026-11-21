# aplus Hairtransplant – Web Sitesi

aplus Hairtransplant (Erenköy, İstanbul) saç ekimi kliniği için statik tanıtım sitesi.
Metinler ve görseller kliniğin mevcut sitesinden (https://aplushairtransplant.com/tr/) 21 Kasım 2026'da alındı.

## Klasör yapısı
```
sac-ekimi-web/
├── index.html                # Ana sayfa: tedaviler, süreç, öncesi/sonrası, hakkımızda, SSS, iletişim
├── pages/
│   ├── hakkimizda.html       # Biz kimiz, misyon, doktorlar, klinik fotoğrafları
│   └── oncesi-sonrasi.html   # 17 hastanın öncesi/sonrası galerisi
├── css/style.css             # Stiller (marka renkleri: lacivert + turuncu)
├── js/main.js                # Mobil menü ve randevu formu
└── images/
    ├── logo.png, favicon.png, hero.webp
    ├── klinik/               # Klinik fotoğrafları
    ├── tedaviler/            # Tedavi görselleri
    └── oncesi-sonrasi/       # Öncesi/sonrası görselleri (dosya adlarında hasta adı yok)
```

## Çalıştırma
`index.html` dosyasını tarayıcıda açın veya klasörde:
```bash
python3 -m http.server 8000
```

## Randevu formu
Form bir sunucuya veri göndermez: bilgileri WhatsApp mesajı olarak hazırlar ve
+90 539 781 70 70 numarasına yönlendirir. Numara `js/main.js` içindeki
`WHATSAPP_NUMARASI` sabitinden değiştirilebilir.

## Teyit edilecekler
- [ ] E-posta: eski sitede hem info@ hem contact@ geçiyor (sitede info@ kullanıldı)
- [ ] Doktor listesi güncel mi?
- [ ] Öncesi/sonrası fotoğraflarındaki hastaların açık rızası
- [ ] Google Haritalar konumu

## Yapılacaklar
- [ ] Diğer diller (eski sitede RU, EN, FR, ES, AR, BS var)
- [ ] KVKK aydınlatma metni
- [ ] Tedavi detay sayfaları
- [ ] Yayına alma (hosting)
