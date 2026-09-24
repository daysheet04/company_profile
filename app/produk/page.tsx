import type { Metadata } from "next";
import Link from "next/link";
import { produkTemplate } from "../data-produk";
import { gambarWebp, normalisasiAlamatGambar, srcSetWebp } from "../gambar-teroptimasi";

export const metadata: Metadata = {
  title: "Produk Daysheet — Template Spreadsheet Siap Pakai",
  description: "Lihat seluruh produk template spreadsheet Daysheet beserta fungsi, fitur, demo, dan cara pemesanannya.",
};

function Panah({ atas = false }: { atas?: boolean }) {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d={atas ? "M5 15 15 5m0 0H7m8 0v8" : "m10 6 6 6-6 6m6-6H5"} /></svg>;
}

function LogoDaysheet() {
  // eslint-disable-next-line @next/next/no-img-element
  return <img className="logo-asli" src="/optimized/logo-daysheet-96.webp" srcSet="/optimized/logo-daysheet-96.webp 1x, /optimized/logo-daysheet-192.webp 2x" alt="Logo Daysheet" width="46" height="46" />;
}

function IkonGambar() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2" /><circle cx="8.5" cy="9" r="1.5" /><path d="m4 17 5-5 4 4 2-2 5 4" /></svg>;
}

export default function HalamanProduk() {
  return (
    <main className="halaman-produk">
      <header className="navbar navbar-produk digulir">
        <Link className="merek" href="/"><LogoDaysheet /><strong>Daysheet</strong></Link>
        <nav className="menu-produk-detail" aria-label="Navigasi halaman produk"><Link href="/">Beranda</Link><a href="#semua-produk">Semua Produk</a><a className="tombol-nav" href="#kontak-produk">Pesan Produk <Panah atas /></a></nav>
      </header>

      <section className="hero-produk-detail">
        <span className="label-kecil">KOLEKSI PRODUK DAYSHEET</span>
        <h1>Template siap pakai untuk pekerjaan yang lebih rapi.</h1>
        <p>Temukan lima produk Daysheet untuk kebutuhan inventaris, dashboard, keuangan, penjualan, dan operasional. Pilih produk, lihat demonya, lalu hubungi kami untuk pemesanan.</p>
        <div className="ringkasan-koleksi"><span><strong>05</strong> Produk tersedia</span><span><strong>03</strong> Produk terlaris</span><span><strong>05</strong> Kategori kebutuhan</span></div>
      </section>

      <section className="semua-produk-detail bagian" id="semua-produk">
        <div className="kepala-koleksi"><span className="label-kecil">SEMUA PRODUK</span><h2>Lihat detail sebelum memilih.</h2><p>Bandingkan fungsi dan fitur utama setiap template untuk menemukan produk yang paling sesuai dengan kebutuhan Anda.</p></div>
        <div className="daftar-detail-produk">
          {produkTemplate.map((item, indeks) => {
            const gambar = normalisasiAlamatGambar(item.gambar);
            return (
            <article id={item.slug} key={item.slug}>
              <div className="visual-detail-produk">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                {gambar ? <img src={gambarWebp(gambar, 480)} srcSet={srcSetWebp(gambar, [320, 480, 640, 720, 960])} sizes="(max-width: 760px) calc(100vw - 48px), 45vw" alt={item.nama} width="960" height="600" loading="lazy" decoding="async" /> : <div className="media-kosong"><IkonGambar /><span>Gambar {item.nama}</span></div>}
              </div>
              <div className="salinan-detail-produk">
                <div className="meta-detail-produk"><span>{item.nomor} / 05</span><span>{item.kategori}</span>{indeks < 3 && <b>Best seller #{indeks + 1}</b>}</div>
                <h2>{item.nama}</h2>
                <p>{item.deskripsi}</p>
                <div className="fitur-produk"><strong>Yang tersedia di dalam produk</strong><ul>{item.fitur.map((fitur) => <li key={fitur}>{fitur}</li>)}</ul></div>
                <div className="aksi-detail-produk"><a className="tombol sekunder" href={item.demo}>Link Demo <Panah atas /></a><a className="tombol utama" href={`https://wa.me/6285117238331?text=${encodeURIComponent(`Halo Daysheet, saya ingin memesan ${item.nama}.`)}`} target="_blank" rel="noreferrer">Pesan Produk <Panah atas /></a></div>
              </div>
            </article>
            );
          })}
        </div>
      </section>

      <section className="kontak-produk-detail bagian" id="kontak-produk">
        <div><span className="label-kecil">BUTUH BANTUAN MEMILIH?</span><h2>Ceritakan kebutuhan Anda kepada Daysheet.</h2></div>
        <div><p>Kami bantu menentukan template yang paling sesuai. Jika kebutuhan Anda lebih spesifik, Daysheet juga dapat membuat sistem custom.</p><a className="tombol utama" href="https://wa.me/6285117238331?text=Halo%20Daysheet%2C%20saya%20ingin%20bertanya%20tentang%20produk%20template." target="_blank" rel="noreferrer">Konsultasi via WhatsApp <Panah atas /></a></div>
      </section>

      <footer className="footer footer-produk"><div className="isi-footer"><div className="merek-footer"><Link className="merek" href="/"><LogoDaysheet /><strong>Daysheet</strong></Link><p>Sistem spreadsheet dan otomatisasi yang dirancang untuk membuat pekerjaan bisnis lebih rapi.</p></div><div><strong>Jelajahi</strong><Link href="/">Beranda</Link><Link href="/#portofolio">Portofolio</Link><a href="#semua-produk">Semua Produk</a></div><div><strong>Hubungi Kami</strong><a href="https://wa.me/6285117238331" target="_blank" rel="noreferrer">0851 1723 8331</a></div><div><strong>Ikuti Daysheet</strong><a href="https://www.instagram.com/daysheet.id/" target="_blank" rel="noreferrer">Instagram</a><a href="https://www.tiktok.com/@daysheet.id" target="_blank" rel="noreferrer">TikTok</a><a href="https://id.linkedin.com/company/daysheet" target="_blank" rel="noreferrer">LinkedIn</a></div></div><div className="bawah-footer"><span>© Daysheet 2026. Seluruh hak cipta dilindungi.</span><a href="#">Kembali ke atas <Panah atas /></a></div></footer>
    </main>
  );
}
