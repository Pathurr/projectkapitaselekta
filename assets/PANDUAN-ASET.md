# Panduan Kebutuhan Aset (Nusantara Bio-Hologram)

Folder ini disiapkan untuk menampung seluruh aset visual dan audio web edukasi satwa terancam punah Indonesia. Saat aset sudah siap, kamu cukup memasukkan file ke folder yang sesuai lalu mengisi path-nya di [`js/data.js`](../js/data.js).

## 1. Foto atau Video 8 Hewan (`assets/images/animals/` atau `assets/videos/`)
Ukuran rekomendasi: **Rasio 4:3 atau 16:9** (misal `800x600 px` atau `1280x720 px`), format `.jpg`, `.webp`, atau `.mp4`.

1. `harimau-sumatera.jpg` (atau `.mp4`) — **Harimau Sumatera**
2. `badak-jawa.jpg` — **Badak Jawa**
3. `elang-jawa.jpg` — **Elang Jawa**
4. `orangutan-kalimantan.jpg` — **Orangutan Kalimantan**
5. `pesut-mahakam.jpg` — **Pesut Mahakam**
6. `anoa-sulawesi.jpg` — **Anoa Dataran Rendah**
7. `komodo-ntt.jpg` — **Komodo**
8. `cenderawasih-merah.jpg` — **Cenderawasih Merah**

> **Cara mengaktifkan di kode:**
> Buka [`js/data.js`](../js/data.js), lalu ubah properti `mediaUrl: ""` menjadi `mediaUrl: "assets/images/animals/harimau-sumatera.jpg"` (dan ubah `mediaType: "video"` jika menggunakan file `.mp4`).

## 2. Gambar Latar Habitat / Scenery (`assets/images/habitats/`) — *Opsional*
Jika nantinya kamu ingin mengganti efek cahaya hologram habitat menjadi ilustrasi/foto pemandangan habitat asli:
- `habitat-sumatera.jpg` (Hutan Hujan Tropis Sumatera)
- `habitat-ujung-kulon.jpg` (Hutan Pantai & Rawa Ujung Kulon)
- `habitat-pegunungan-jawa.jpg` (Kanopi Hutan Pegunungan Jawa)
- `habitat-kalimantan.jpg` (Tajuk Pohon Hutan Kalimantan)
- `habitat-sungai-mahakam.jpg` (Aliran Sungai Mahakam)
- `habitat-sulawesi.jpg` (Hutan Primer Wallacea Sulawesi)
- `habitat-komodo.jpg` (Bukit Sabana & Pantai NTT)
- `habitat-raja-ampat.jpg` (Hutan Kepulauan Raja Ampat Papua)

## 3. Peta Indonesia 2D Custom (`assets/images/map/`) — *Opsional*
Saat ini peta Indonesia sudah menggunakan **SVG Vektor Hologram 2D** bawaan di dalam [`index.html`](../index.html) sehingga tajam di semua ukuran layar dan langsung interaktif. Jika kamu membuat gambar peta 2D PNG/SVG sendiri (misal dari Figma/Illustrator), kamu bisa menyimpannya di `assets/images/map/peta-indonesia.png`.

## 4. Audio / Sound Effects (`assets/audio/`) — *Opsional*
Untuk menambah kesan imersif ke depannya:
- `bgm-ambient.mp3` — Musik latar hutan tropis / sci-fi tenang
- `sfx-click.mp3` — Suara klik tombol hologram
- `sfx-animal/` — Suara khas masing-masing hewan saat waypoint dibuka

