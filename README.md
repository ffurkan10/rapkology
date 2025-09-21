# Case Study - Rapkology
Bu proje, verilen vaka çalışması kapsamında Next.js 14/15 kullanılarak geliştirilmiş responsive bir web uygulamasıdır.
Uygulama masaüstü ve mobil cihazlarda tutarlı bir deneyim sunmakta, Figma tasarımlarına olabildiğince yakın bir arayüz ile hazırlanmıştır.

## Özellikler

- Next.js 14/15 ile geliştirilmiştir.

- **Responsive tasarım:** Masaüstü ve mobil cihazlarda optimize edilmiş arayüz.

- **Figma uyumluluğu:** Görsel tasarım, sağlanan Figma prototipine maksimum benzerlikte uygulanmıştır.

- **Swiper kütüphanesi:** Slider bileşenleri için kullanıldı.

- **Mock Data (JSON):** Veriler doğrudan import edilerek komponentler içinde kullanılmıştır.

- **Reusable Components:** Kart, liste ve layout yapıları modüler şekilde tasarlandı.

- **SEO uyumu:** Next.js meta etiketleri ve next/head ile temel optimizasyon.

## Kullanılan Özellikler

- Next.js 14/15

- React 18

- Tailwind CSS (hızlı ve modern stil yönetimi için)

- Swiper.js (carousel/slider alanları için)

## Teknik Tercihler ve Gerekçeler

- **Next.js:** Modern React ekosisteminde server-side rendering (SSR) ve static site generation (SSG) avantajları için tercih edildi.

- **Tailwind CSS:** Hem hız hem de Figma tasarımlarına kolay uyarlama için kullanıldı.

- **Swiper.js:** Native olmayan carousel yapılarında optimizasyon ve dokunmatik destek için.

- **Mock Data Import:** Harici API yerine JSON verileri doğrudan import edilerek daha hızlı geliştirme sağlandı.

## Dosya Yapısı

```bash
├── app/                  # Next.js 14/15 App Router sayfaları ve route yapısı
├── components/           # Yeniden kullanılabilir React bileşenleri
├── data/                 # Mock JSON data dosyaları
├── public/               # Statik varlıklar (görseller, ikonlar, fontlar)
├── .gitignore            # Git tarafından yok sayılacak dosyalar
├── eslint.config.mjs     # ESLint yapılandırması
├── jsconfig.json         # Import alias ve IntelliSense ayarları
├── next.config.mjs       # Next.js özel ayarları
├── package-lock.json     # Bağımlılıkların kilit dosyası
├── package.json          # Proje bağımlılıkları ve scriptler
├── postcss.config.mjs    # PostCSS yapılandırması
└── README.md             # Proje dokümantasyonu
```


## Kurulum ve Çalıştırma

```bash
# Repoyu klonlayın
git clone https://github.com/ffurkan10/rapkology.git

# Klasöre girin
cd rapkology

# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev
```
Tarayıcıda http://localhost:3000 adresinden ulaşabilirsiniz.

