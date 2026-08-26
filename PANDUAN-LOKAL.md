# Daysheet Company Profile — Panduan Lokal

## 1. Persiapan

Install Node.js versi 22 atau lebih baru dari https://nodejs.org/.

## 2. Buka project

Ekstrak ZIP, lalu buka folder project di VS Code.

Di terminal VS Code, jalankan:

```bash
npm install
npm run local
```

Buka alamat yang muncul di terminal. Umumnya:

```text
http://localhost:5173
```

Untuk menghentikan website, tekan `Ctrl + C` di terminal.

## 3. Bagian yang paling sering diedit

Semua konten utama terdapat di:

```text
app/page.tsx
```

- Produk: cari `const products`
- Klien: cari `const clients`
- Layanan: cari `const services`
- Tahapan kerja: cari `const steps`
- Alamat email FormSubmit: cari `formsubmit.co`
- Link Lynk.id: cari `lynk.id/daysheet`

Tampilan, warna, ukuran, dan animasi terdapat di:

```text
app/globals.css
```

Logo terdapat di:

```text
public/logo-daysheet.png
```

Untuk mengganti logo, timpa file tersebut dengan logo baru dan pertahankan nama filenya.

## 4. Form pesan

Form telah diarahkan ke:

```text
daysheet04@gmail.com
```

Saat form pertama kali dicoba, buka email dari FormSubmit dan klik tombol aktivasi satu kali. Setelah aktif, pengunjung berikutnya tidak perlu melakukan aktivasi.

## 5. Build sebelum deploy

```bash
npm run build:local
```

Jika perintah selesai tanpa error, website siap masuk tahap deployment.

## Catatan penting

Nama klien, testimoni, statistik, dan detail produk sebaiknya diperiksa lagi sebelum dipublikasikan agar semuanya sesuai data asli Daysheet.
