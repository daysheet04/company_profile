"use client";

import { useEffect, useRef, useState } from "react";
import type { FormEvent, PointerEvent as ReactPointerEvent } from "react";
import { portofolioKustom, produkTemplate } from "./data-produk";
import type { PortofolioKustom, ProdukTemplate } from "./data-produk";
import { brandKlien } from "./data-brand";

const gambarHero = "/gambarhome.png";

const navigasi = [
  ["beranda", "Beranda"],
  ["produk", "Produk"],
  ["portofolio", "Portofolio"],
  ["klien", "Klien"],
  ["kontak", "Kontak"],
] as const;

const testimoni = [
  {
    nomor: "01",
    nama: "Rizki Amaliyah",
    rating: "5.0",
    isi: "Dashboard yg di spreadsheet udah oke banget, bahkan jauh lebih bagus dari sebelumnya. Keren banget! Diagramnya juga jadi lebih jelas dan lebih mudah dibaca. Overall, tampilannya sudah jauh lebih rapi dan informatif. Terimakasih banyak ka sudah sangat membantu🙏🏻 👍🏻",
  },
  {
    nomor: "02",
    nama: "Farah",
    rating: "5.0",
    isi: "Bagus, sesuai request",
  },
  {
    nomor: "03",
    nama: "Novita",
    rating: "5.0",
    isi: "Sangat membantu, enak juga ngejelasinnya. Makasih yaaaa",
  },
  {
    nomor: "04",
    nama: "Alda Novendra",
    rating: "5.0",
    isi: "Memuaskan, mudah dipahami untuk cara penggunaannya, terampil dan profesional dalam memilih tema yang diinginkan serta memberikan masukan yang good 👌🏻👏🏻👏🏻",
  },
  {
    nomor: "05",
    nama: "Amel",
    rating: "5.0",
    isi: "Keren banget! Sistemnya bukan cuma sesuai dengan yang aku minta, tapi justru lebih inovatif dan melebihi ekspektasi saya. Detailnya dipikirkan dengan matang dan benar-benar memudahkan pekerjaan saya. Terima kasih🫶🏻",
  },
  {
    nomor: "06",
    nama: "Dwayu",
    rating: "5.0",
    isi: "Helpful dan sesuai kebutuhan. Terima kasih banyak",
  },
  {
    nomor: "07",
    nama: "Malik",
    rating: "5.0",
    isi: "Sangat andal dan kompeten",
  },
  {
    nomor: "08",
    nama: "Lidia Anatasya",
    rating: "5.0",
    isi: "Sistem jadwal yang dibuat sesuai dengan yang diharapkan, sangat puas dengan hasilnya",
  },
];

function Panah({ arah = "kanan" }: { arah?: "kanan" | "kiri" | "atas" }) {
  const jalur = arah === "atas" ? "M5 15 15 5m0 0H7m8 0v8" : arah === "kiri" ? "m14 6-6 6 6 6M8 12h11" : "m10 6 6 6-6 6m6-6H5";
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d={jalur} /></svg>;
}

function LogoDaysheet() {
  // File logo digunakan langsung agar bentuk dan proporsinya tetap mengikuti aset asli.
  // eslint-disable-next-line @next/next/no-img-element
  return <img className="logo-asli" src="/logo-daysheet.png" alt="Logo Daysheet" width="46" height="46" />;
}

function IkonGambar() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2" /><circle cx="8.5" cy="9" r="1.5" /><path d="m4 17 5-5 4 4 2-2 5 4" /></svg>;
}

function IkonWhatsApp() {
  return <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16.03 3.2A12.63 12.63 0 0 0 5.1 22.15L3.2 28.8l6.82-1.79A12.65 12.65 0 1 0 16.03 3.2Zm0 22.95c-2.02 0-3.92-.57-5.54-1.57l-.4-.24-4.05 1.06 1.08-3.94-.26-.41a10.28 10.28 0 1 1 9.17 5.1Zm5.64-7.7c-.31-.15-1.83-.9-2.11-1.01-.28-.1-.49-.15-.69.15-.2.31-.8 1.01-.98 1.22-.18.2-.36.23-.67.08-.31-.16-1.3-.48-2.48-1.53a9.3 9.3 0 0 1-1.72-2.14c-.18-.31-.02-.48.14-.63.14-.14.31-.36.46-.54.16-.18.21-.31.31-.52.1-.2.05-.38-.03-.54-.08-.15-.69-1.66-.95-2.28-.25-.6-.5-.52-.69-.53h-.59c-.2 0-.54.08-.82.38-.28.31-1.08 1.06-1.08 2.58 0 1.51 1.11 2.98 1.26 3.18.15.21 2.17 3.32 5.27 4.66.73.32 1.31.51 1.76.65.74.24 1.41.2 1.94.13.59-.09 1.83-.75 2.09-1.47.26-.72.26-1.34.18-1.47-.08-.13-.28-.2-.59-.36Z" /></svg>;
}

function IkonSosial({ nama }: { nama: "instagram" | "tiktok" | "linkedin" }) {
  if (nama === "instagram") return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" /></svg>;
  if (nama === "tiktok") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 4v10.5a4.5 4.5 0 1 1-4-4.47M15 4c.55 2.3 1.9 3.65 4 4" /></svg>;
  return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="9" width="4" height="11" /><path d="M6 4.5v.01M12 20v-6.2a4 4 0 0 1 8 0V20M12 9v11" /></svg>;
}

function LogoBrand({ nama, gambar }: { nama: string; gambar: string }) {
  // Logo dipanggil langsung dari public agar format PNG dan JPG klien ditampilkan konsisten.
  // eslint-disable-next-line @next/next/no-img-element
  return <div className="kartu-logo-brand"><img src={gambar} alt={`Logo ${nama}`} loading="lazy" /><strong>{nama}</strong></div>;
}

type GambarPratinjau = { sumber: string; label: string };

function MediaProduk({ sumber, label, bukaGambar }: { sumber: string; label: string; bukaGambar: (gambar: GambarPratinjau) => void }) {
  const alamat = sumber && !sumber.startsWith("/") && !sumber.startsWith("http") ? `/${sumber}` : sumber;
  // File dari public dipanggil langsung agar konsisten pada halaman beranda dan /produk.
  // eslint-disable-next-line @next/next/no-img-element
  if (alamat) return <div className="media-produk"><button className="tombol-gambar-produk" type="button" onClick={() => bukaGambar({ sumber: alamat, label })} aria-label={`Perbesar gambar ${label}`}><img src={alamat} alt={label} /><span aria-hidden="true">Lihat gambar</span></button></div>;
  return <div className="media-produk media-kosong" role="img" aria-label={`${label}, gambar belum tersedia`}><IkonGambar /><span>Gambar Produk</span></div>;
}

type ItemProduk = ProdukTemplate | PortofolioKustom;

function GridProduk({ daftar, jenis, bukaGambar }: { daftar: readonly ItemProduk[]; jenis: "produk" | "portofolio"; bukaGambar: (gambar: GambarPratinjau) => void }) {
  return <div className={`grid-produk ${jenis === "produk" ? "grid-terlaris" : "grid-portofolio"}`}>{daftar.map((item, indeks) => <article className="kartu-produk" key={item.nomor}><MediaProduk sumber={item.gambar} label={item.nama} bukaGambar={bukaGambar} /><div className="isi-produk"><div className="meta-produk"><span>{item.nomor}</span><span>{item.kategori}</span></div>{jenis === "produk" && <span className="label-best-seller">Best seller #{indeks + 1}</span>}<h3>{item.nama}</h3><p>{item.deskripsi}</p>{jenis === "portofolio" && <p className="catatan-privasi"><span aria-hidden="true">🔒</span> Data pada gambar merupakan data dummy untuk menjaga privasi klien.</p>}<div className="aksi-produk"><a href={item.demo}>Link Demo <Panah arah="atas" /></a>{jenis === "produk" && "tautan" in item && <a className="terisi" href={item.tautan}>Link Produk <Panah arah="atas" /></a>}</div></div></article>)}</div>;
}

function MockupMacbook() {
  return (
    <div className="macbook-mockup">
      <div className="layar-macbook">
        <i className="kamera-macbook" aria-hidden="true" />
        <div className="gambar-hero">
          {/* File public dipanggil langsung agar tetap tampil pada runtime preview tanpa image optimizer. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          {gambarHero ? <img src={gambarHero} alt="Dashboard spreadsheet Daysheet pada layar MacBook" /> : <div className="gambar-hero-kosong"><IkonGambar /><span>Gambar Proyek</span><small>Tambahkan gambar Anda di variabel gambarHero</small></div>}
        </div>
      </div>
      <div className="bodi-macbook" aria-hidden="true"><span /></div>
    </div>
  );
}

function DashboardHero() {
  return (
    <div className="visual-hero" aria-label="Laptop dengan pekerjaan spreadsheet yang kompleks dan berantakan">
      {/* Aset hero dibuat khusus untuk menggambarkan pekerjaan spreadsheet sebelum dirapikan Daysheet. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="gambar-chaos-hero" src="/hero-chaos-spreadsheet.png" alt="Laptop dengan spreadsheet penuh tabel, sticky notes, kalkulator, dan kertas kerja" />
    </div>
  );
}

export default function Beranda() {
  const [menuTerbuka, setMenuTerbuka] = useState(false);
  const [bagianAktif, setBagianAktif] = useState("beranda");
  const [sudahGulir, setSudahGulir] = useState(false);
  const [statusPengiriman, setStatusPengiriman] = useState<"siap" | "mengirim" | "berhasil" | "gagal">("siap");
  const [sedangMenyeret, setSedangMenyeret] = useState(false);
  const [gambarAktif, setGambarAktif] = useState<GambarPratinjau | null>(null);
  const jalurTestimoni = useRef<HTMLDivElement>(null);
  const titikAwalSeret = useRef(0);
  const posisiAwalGulir = useRef(0);

  useEffect(() => {
    const pengamatTampil = new IntersectionObserver((entri) => entri.forEach((item) => item.isIntersecting && item.target.classList.add("terlihat")), { threshold: 0.12, rootMargin: "0px 0px -6%" });
    document.querySelectorAll("[data-tampil]").forEach((elemen) => pengamatTampil.observe(elemen));
    const pengamatBagian = new IntersectionObserver((entri) => entri.forEach((item) => item.isIntersecting && setBagianAktif(item.target.id)), { rootMargin: "-40% 0px -53%", threshold: 0 });
    document.querySelectorAll("section[id]").forEach((elemen) => pengamatBagian.observe(elemen));
    const saatGulir = () => setSudahGulir(window.scrollY > 24);
    saatGulir();
    window.addEventListener("scroll", saatGulir, { passive: true });
    return () => { pengamatTampil.disconnect(); pengamatBagian.disconnect(); window.removeEventListener("scroll", saatGulir); };
  }, []);

  useEffect(() => {
    if (!gambarAktif) return;
    const overflowSebelumnya = document.body.style.overflow;
    const tutupDenganEscape = (acara: KeyboardEvent) => acara.key === "Escape" && setGambarAktif(null);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", tutupDenganEscape);
    return () => {
      document.body.style.overflow = overflowSebelumnya;
      window.removeEventListener("keydown", tutupDenganEscape);
    };
  }, [gambarAktif]);

  const geserTestimoni = (arah: number) => jalurTestimoni.current?.scrollBy({ left: jalurTestimoni.current.clientWidth * .82 * arah, behavior: "smooth" });
  const mulaiSeretTestimoni = (acara: ReactPointerEvent<HTMLDivElement>) => {
    if (acara.pointerType !== "mouse" || acara.button !== 0) return;
    setSedangMenyeret(true);
    titikAwalSeret.current = acara.clientX;
    posisiAwalGulir.current = acara.currentTarget.scrollLeft;
    acara.currentTarget.setPointerCapture(acara.pointerId);
  };
  const seretTestimoni = (acara: ReactPointerEvent<HTMLDivElement>) => {
    if (!sedangMenyeret) return;
    acara.preventDefault();
    acara.currentTarget.scrollLeft = posisiAwalGulir.current - (acara.clientX - titikAwalSeret.current);
  };
  const selesaiSeretTestimoni = (acara: ReactPointerEvent<HTMLDivElement>) => {
    if (!sedangMenyeret) return;
    setSedangMenyeret(false);
    if (acara.currentTarget.hasPointerCapture(acara.pointerId)) acara.currentTarget.releasePointerCapture(acara.pointerId);
  };
  const kirimPesan = async (acara: FormEvent<HTMLFormElement>) => {
    acara.preventDefault();
    const formulir = acara.currentTarget;
    setStatusPengiriman("mengirim");
    try {
      const respons = await fetch("https://formsubmit.co/ajax/daysheet04@gmail.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(formulir),
      });
      if (!respons.ok) throw new Error("Pengiriman formulir gagal");
      formulir.reset();
      setStatusPengiriman("berhasil");
    } catch {
      setStatusPengiriman("gagal");
    }
  };

  return (
    <main>
      <header className={`navbar ${sudahGulir ? "digulir" : ""}`}>
        <a className="merek" href="#beranda" onClick={() => setMenuTerbuka(false)}><LogoDaysheet /><strong>Daysheet</strong></a>
        <button className="tombol-menu" type="button" aria-label={menuTerbuka ? "Tutup menu" : "Buka menu"} aria-expanded={menuTerbuka} onClick={() => setMenuTerbuka(!menuTerbuka)}><span /><span /></button>
        <nav className={menuTerbuka ? "menu-utama terbuka" : "menu-utama"} aria-label="Navigasi utama">
          {navigasi.map(([id, label]) => <a key={id} href={`#${id}`} className={bagianAktif === id ? "aktif" : ""} aria-current={bagianAktif === id ? "page" : undefined} onClick={() => setMenuTerbuka(false)}>{label}</a>)}
          <a className="tombol-nav" href="#kontak" onClick={() => setMenuTerbuka(false)}>Konsultasi Sekarang <Panah arah="atas" /></a>
        </nav>
      </header>

      <section className="hero" id="beranda">
        <div className="salinan-hero" data-tampil><span className="label-kecil">JASA SPREADSHEET & OTOMATISASI</span><h1><span>Masih Ribet</span><span>Bikin Spreadsheet</span><span>Dari Nol?</span></h1><p>Waktu yang harusnya bisa dipakai buat ngembangin bisnis malah kesita karena sibuk ngurus laporan penjualan, financial plan, inventory, dan berbagai pekerjaan administratif lainnya.
          <br></br>Padahal, hal-hal ini memang penting. Tapi kalau terlalu banyak waktu habis cuma buat bikin dan ngatur spreadsheet, kapan bisnisnya mau berkembang?</p><div className="aksi-hero"><a className="tombol utama" href="#kontak">Konsultasikan Proyek <Panah arah="atas" /></a><a className="tombol sekunder" href="#portofolio">Lihat Portofolio <Panah /></a></div></div>
        <div className="wadah-hero" data-tampil><DashboardHero /></div>
      </section>

      <section className="transformasi bagian">
        <span className="label-kecil label-transformasi" data-tampil>DARI RUMIT JADI PRAKTIS</span>
        <div className="panggung-macbook" data-tampil><MockupMacbook /></div>
        <div className="kepala-transformasi" data-tampil><h2>Urusan Spreadsheet,<br />Serahin ke Daysheet</h2><p>Jangan sampai bisnis kamu terhambat cuma karena pekerjaan yang sebenarnya bisa dibuat lebih praktis.</p></div>
      </section>

      <section className="produk bagian" id="produk">
        <div className="kepala-produk" data-tampil><div><span className="label-kecil">PRODUK TERLARIS</span><h2>Produk dan Jasa Kami</h2><p>Daysheet menyediakan berbagai template spreadsheet yang siap membantu kebutuhan pribadi maupun bisnis kamu — mulai dari keuangan, inventory, penjualan, sampai kebutuhan operasional lainnya.</p></div><a className="tombol sekunder" href="https://lynk.id/daysheet" target="_blank" rel="noreferrer">Lihat Semua Produk <Panah arah="atas" /></a></div>
        <GridProduk daftar={produkTemplate.slice(0, 3)} jenis="produk" bukaGambar={setGambarAktif} />
      </section>

      <section className="portofolio bagian" id="portofolio">
        <div className="kepala-produk" data-tampil><div><span className="label-kecil">PORTOFOLIO CUSTOM SHEET</span><h2>Custom Spreadsheet Untuk Pribadi dan Bisnis</h2><p>Nggak cuma template, kami juga siap membantu menyelesaikan berbagai kebutuhan spreadsheet untuk bisnis kamu, baik di bidang F&amp;B, industri kreatif, jasa, maupun bidang lainnya.</p></div></div>
        <GridProduk daftar={portofolioKustom} jenis="portofolio" bukaGambar={setGambarAktif} />
      </section>

      <section className="klien bagian" id="klien">
        <div className="salinan-klien" data-tampil><span className="label-kecil">TESTIMONI</span><h2>Brand yang sudah menjadi client kami</h2><p>Sudah 100+ project kami kerjakan untuk membantu berbagai kebutuhan bisnis.</p></div>
        <div className="grid-klien" data-tampil>{brandKlien.map((brand) => <LogoBrand key={brand.nama} {...brand} />)}</div>
      </section>

      <section className="testimoni bagian" id="testimoni">
        <div className="kepala-testimoni" data-tampil><span className="label-kecil">FEEDBACK</span><h2>Mereka Udah Coba, Nih Buktinya</h2><p>Dan ini beberapa kata dari mereka yang sudah mempercayakan project-nya kepada Daysheet.</p></div>
        <div className="carousel-testimoni" data-tampil><button className="panah-testimoni kiri" type="button" aria-label="Testimoni sebelumnya" onClick={() => geserTestimoni(-1)}><Panah arah="kiri" /></button><div className={`jalur-testimoni ${sedangMenyeret ? "sedang-diseret" : ""}`} ref={jalurTestimoni} onPointerDown={mulaiSeretTestimoni} onPointerMove={seretTestimoni} onPointerUp={selesaiSeretTestimoni} onPointerCancel={selesaiSeretTestimoni}>{testimoni.map((item) => <article key={item.nomor}><div className="rating-testimoni"><b aria-hidden="true">★★★★★</b><span>{item.rating}/5</span></div><blockquote>&ldquo;{item.isi}&rdquo;</blockquote><strong className="nama-testimoni">{item.nama}</strong></article>)}</div><button className="panah-testimoni kanan" type="button" aria-label="Testimoni berikutnya" onClick={() => geserTestimoni(1)}><Panah /></button></div>
      </section>

      <section className="kontak bagian" id="kontak">
        <div className="salinan-kontak" data-tampil><span className="label-kecil">KONTAK</span><h2>Punya Masalah Spreadsheet yang Belum Beres?</h2><p>Ceritain aja kebutuhan kamu.
          <br></br>Biar kami bantu cari solusinya.</p><div className="info-kontak"><a href="https://wa.me/6285117238331" target="_blank" rel="noreferrer"><span>WhatsApp</span><strong>0851 1723 8331</strong></a><a href="https://www.instagram.com/daysheet.id/" target="_blank" rel="noreferrer"><span><IkonSosial nama="instagram" />Instagram</span><strong>@daysheet.id</strong></a><a href="https://www.tiktok.com/@daysheet.id" target="_blank" rel="noreferrer"><span><IkonSosial nama="tiktok" />TikTok</span><strong>@daysheet.id</strong></a></div></div>
        <form className="form-kontak" onSubmit={kirimPesan} data-tampil><input type="hidden" name="_subject" value="Pesan baru dari website Daysheet" /><input type="hidden" name="_template" value="table" /><label><span>Nama</span><input type="text" name="Nama" placeholder="Nama Anda" autoComplete="name" required /></label><label><span>Nomor Telepon</span><input type="tel" name="Nomor Telepon" placeholder="Contoh: 0812 3456 7890" autoComplete="tel" required /></label><label><span>Pesan</span><textarea name="Pesan" rows={5} placeholder="Ceritakan kebutuhan atau alur kerja yang ingin diperbaiki..." required /></label><button type="submit" disabled={statusPengiriman === "mengirim"}>{statusPengiriman === "mengirim" ? "Sedang Mengirim..." : "Kirim Pesan"} <Panah arah="atas" /></button><p aria-live="polite">{statusPengiriman === "berhasil" ? "Pesan berhasil dikirim. Kami akan segera menghubungi Anda." : statusPengiriman === "gagal" ? "Pesan belum berhasil dikirim. Silakan coba lagi." : "Pesan akan dikirim ke email Daysheet."}</p></form>
      </section>

      <footer className="footer"><div className="isi-footer"><div className="merek-footer"><a className="merek" href="#beranda"><LogoDaysheet /><strong>Daysheet</strong></a><p>Sistem spreadsheet dan otomatisasi yang dirancang untuk membuat pekerjaan bisnis lebih rapi.</p></div><div><strong>Navigasi</strong><a href="#produk">Produk</a><a href="#portofolio">Portofolio</a><a href="#klien">Klien</a><a href="#testimoni">Testimoni</a><a href="#kontak">Kontak</a></div><div><strong>Hubungi Kami</strong><a href="https://wa.me/6285117238331" target="_blank" rel="noreferrer">0851 1723 8331</a></div><div><strong>Ikuti Daysheet</strong><a href="https://www.instagram.com/daysheet.id/" target="_blank" rel="noreferrer"><IkonSosial nama="instagram" />Instagram</a><a href="https://www.tiktok.com/@daysheet.id" target="_blank" rel="noreferrer"><IkonSosial nama="tiktok" />TikTok</a><a href="https://id.linkedin.com/company/daysheet" target="_blank" rel="noreferrer"><IkonSosial nama="linkedin" />LinkedIn</a></div></div><div className="bawah-footer"><span>© Daysheet 2026. Seluruh hak cipta dilindungi.</span><a href="#beranda">Kembali ke atas <Panah arah="atas" /></a></div></footer>

      {gambarAktif && (
        <div className="lightbox-produk" role="dialog" aria-modal="true" aria-label={`Pratinjau gambar ${gambarAktif.label}`} onClick={() => setGambarAktif(null)}>
          <button className="tutup-lightbox" type="button" aria-label="Tutup pratinjau gambar" onClick={() => setGambarAktif(null)}>×</button>
          <figure onClick={(acara) => acara.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={gambarAktif.sumber} alt={gambarAktif.label} />
            <figcaption>{gambarAktif.label}</figcaption>
          </figure>
        </div>
      )}

      <a className="whatsapp-mengambang" href="https://wa.me/6285117238331?text=Halo%20Daysheet%2C%20saya%20ingin%20konsultasi%20mengenai%20pembuatan%20spreadsheet." target="_blank" rel="noreferrer" aria-label="Konsultasi melalui WhatsApp"><IkonWhatsApp /><span>WhatsApp</span></a>
    </main>
  );
}
