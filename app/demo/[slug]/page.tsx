import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { portofolioKustom, produkTemplate } from "../../data-produk";

type PropertiHalaman = { params: Promise<{ slug: string }> };

function LogoDaysheet() {
  // eslint-disable-next-line @next/next/no-img-element
  return <img className="logo-asli" src="/logo-daysheet.png" alt="Logo Daysheet" width="46" height="46" />;
}

function PanahKiri() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m14 6-6 6 6 6M8 12h11" /></svg>;
}

function urlUntukIframe(url: string) {
  const urlBersih = url.trim().replace(/,+$/, "");
  if (!urlBersih) return "";
  const alamat = new URL(urlBersih);
  if (alamat.hostname === "datastudio.google.com" || alamat.hostname === "lookerstudio.google.com") {
    alamat.hostname = "lookerstudio.google.com";
    if (!alamat.pathname.startsWith("/embed/")) alamat.pathname = `/embed${alamat.pathname}`;
    return alamat.toString();
  }
  alamat.searchParams.set("rm", "minimal");
  alamat.searchParams.set("widget", "true");
  return alamat.toString();
}

const daftarDemo = [...produkTemplate, ...portofolioKustom];

export function generateStaticParams() {
  return daftarDemo.filter((item) => item.demoSheet && item.slug).map((item) => ({ slug: item.slug! }));
}

export async function generateMetadata({ params }: PropertiHalaman): Promise<Metadata> {
  const { slug } = await params;
  const produk = daftarDemo.find((item) => item.slug === slug && item.demoSheet);
  return { title: produk ? `Demo ${produk.nama} — Daysheet` : "Demo Produk — Daysheet" };
}

export default async function HalamanDemo({ params }: PropertiHalaman) {
  const { slug } = await params;
  const produk = daftarDemo.find((item) => item.slug === slug && item.demoSheet);
  if (!produk) notFound();

  const sumberIframe = urlUntukIframe(produk.demoSheet);

  return (
    <main className="halaman-demo">
      <header className="navbar-demo">
        <Link className="merek" href="/"><LogoDaysheet /><strong>Daysheet</strong></Link>
        <div className="judul-navbar-demo"><span>DEMO PRODUK</span><strong>{produk.nama}</strong></div>
        <nav aria-label="Navigasi demo produk">
          <Link href="/"><PanahKiri /> Kembali ke Beranda</Link>
        </nav>
      </header>
      <section className="area-iframe-demo" aria-label={`Demo ${produk.nama}`}>
        <iframe src={sumberIframe} title={`Demo ${produk.nama} dari Daysheet`} allow="clipboard-read; clipboard-write; fullscreen" loading="eager" />
      </section>
    </main>
  );
}
