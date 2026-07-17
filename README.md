# SKP FORGE — Laporan Bulanan

Generator laporan bulanan SKP untuk Penyuluh Pertanian. Masukkan file laporan
.docx bulan sebelumnya, pilih bulan target, dan unduh satu ZIP berisi seluruh
laporan bulan baru — nama bulan, periode, tanggal tabel harian, dan tanggal
tanda tangan disesuaikan otomatis tanpa mengubah format, logo, maupun tanda
tangan dokumen.

## Fitur

- **100% client-side** — dokumen diproses sepenuhnya di perangkat (JSZip),
  tidak ada file yang diunggah ke server mana pun.
- **Deteksi otomatis** bulan/tahun asal dan nama desa dari isi dokumen.
- **Kustomisasi nama desa** — seluruh penyebutan nama desa di dokumen dapat
  diganti dari satu isian.
- **Variasi narasi A/B/C** per judul laporan (8 tipe: LTT, Benih & Ternak,
  Alsintan, RDKK, Irpom, Kelompencapir, Brigade Pangan, CPCL) untuk bagian
  Latar Belakang, Tujuan, Kesimpulan, Saran, serta tabel Permasalahan &
  Pemecahan Masalah — mode ACAK memilihkan variasi berbeda per file.
- **Offline-capable** lewat service worker.

## Menjalankan

Situs statis murni — buka `index.html` lewat server statis apa pun, atau
deploy langsung ke Vercel/Netlify/GitHub Pages tanpa build step.

> **Perhatian:** angka target/realisasi dan uraian kegiatan masih berisi data
> bulan sumber — buka hasilnya di Word dan sesuaikan sebelum dikumpulkan.
> Laporan adalah dokumen resmi; pastikan isinya menggambarkan kegiatan yang
> benar-benar dilaksanakan.
